import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { RecordButton, StopButton } from 'components/Button';
import { durationFormat } from 'utils/audio';
import { requestWithAuth } from 'utils/request';

class AudioRecorder extends Component {
  static propTypes = {
    onSuccessUpload: PropTypes.func,
    className: PropTypes.string,
  };

  static defaultProps = {
    onSuccessUpload: undefined,
    className: '',
  };

  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      uploading: false,
      uploadingProgress: 0,
      elapsedTime: 0,
      error: null,
    };

    this.recorder = null;
    this.interval = null;
  }

  componentWillUnmount() {
    if (this.interval) clearInterval(this.interval);
  }

  handleUpload = async file => {
    const now = new Date().toGMTString();
    const ext = file.type.replace('audio/', '');

    try {
      const res = await requestWithAuth().get('/resource/amz/s3/token', {
        params: {
          file_extension: ext,
          resource_category: 'MEDIA',
        },
        headers: {
          'x-amz-date': now,
          'AWS-Content-Type': 'binary/octet-stream',
        },
      });

      if (res.status === 200 && res.data) {
        const uploadRes = await axios.put(res.data.resourceUrl, file, {
          headers: {
            'x-amz-date': now,
            Authorization: res.data.uploadToken,
            'Content-Type': 'binary/octet-stream',
            'x-amz-acl': 'public-read',
          },
          onUploadProgress: progressEvent => {
            this.setState({ uploadingProgress: progressEvent.loaded / progressEvent.total });
          },
        });

        this.setState({ uploading: false, uploadingProgress: 0 });

        if (uploadRes.status === 200) {
          const { onSuccessUpload } = this.props;
          if (onSuccessUpload instanceof Function) onSuccessUpload(res.data);
        }
      }
    } catch (error) {
      this.setState({ error });
    }
  };

  record = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.recorder = new MediaRecorder(stream);

      this.recorder.addEventListener('dataavailable', e => {
        // console.debug(e.data.size / 1024 / 1024, 'mb');
        if (e.data) {
          this.handleUpload(e.data);
        }
      });

      this.recorder.addEventListener('start', () => {
        this.setState({ recording: true, error: null }, () => {
          this.interval = setInterval(() => {
            const { elapsedTime } = this.state;
            this.setState({ elapsedTime: elapsedTime + 1 });
          }, 1000);
        });
      });

      this.recorder.addEventListener('stop', () => {
        this.recorder.stream.getTracks().forEach(i => i.stop());
      });

      // Start recording - split to another audio if recording time more than 10 min
      this.recorder.start(10 * 60 * 1000);
    } catch (error) {
      this.setState({ error });
    }
  };

  stop = () => {
    this.recorder.stop();

    if (this.interval) clearInterval(this.interval);
    this.setState({ recording: false, elapsedTime: 0, uploading: true, uploadingProgress: 0.03 });
  };

  render() {
    const { className } = this.props;
    const { recording, uploading, uploadingProgress, elapsedTime, error } = this.state;
    if (MediaRecorder.notSupported) return <div>Audio recording is not supported for this browser!</div>;

    return (
      <div className={className}>
        {!recording ? (
          <RecordButton onClick={this.record} uploading={uploading} uploadingProgress={uploadingProgress} />
        ) : (
          <StopButton elapsedTime={durationFormat(elapsedTime)} onClick={this.stop} />
        )}
        {error && <div>{error.message}</div>}
      </div>
    );
  }
}

export default AudioRecorder;
