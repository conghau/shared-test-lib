import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Howl } from 'howler';
import styled from 'styled-components';
import { SortableHandle } from 'react-sortable-hoc';

import Icon from 'components/Icon';
import { durationFormat } from 'utils/audio';

const Player = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  max-width: 394px;
  height: 40px;
  border-radius: 50px;
  padding: 0 ${props => props.theme.audioPlayer.gutter};
  background-color: ${props => props.theme.audioPlayer.backgroundColor};
  border: 1px solid ${props => props.theme.audioPlayer.borderColor};
`;

const ButtonLeft = styled(Icon).attrs({ type: 'Drag', width: 8, height: 8 })`
  position: absolute;
  display: none;
  left: -20px;
  cursor: move;
  color: '#C4C4C4';
`;

const ButtonRight = styled.div`
  position: absolute;
  display: none;
  width: 10px;
  height: 2px;
  background-color: #9b9b9b;
  right: -20px;
  cursor: pointer;
`;

const Wraper = styled.div`
  padding: 0 20px;

  &:hover ${ButtonRight}, &:hover ${ButtonLeft} {
    display: block;
  }
`;

const ControlIcon = styled(Icon)`
  margin: 0 ${props => props.theme.audioPlayer.gutter};
  color: ${props => (props.disabled ? props.theme.muteColor : props.theme.primaryColor)};
  cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};
`;

const VolumeIcon = styled(ControlIcon).attrs({ type: 'Volume' })`
  color: ${props => {
    if (props.disabled) return props.theme.muteColor;

    return props.mute ? props.theme.audioPlayer.volumeMuteColor : props.theme.audioPlayer.volumeColor;
  }};
`;

const ElapsedTime = styled.div`
  margin: 0 ${props => props.theme.audioPlayer.gutter};
  font-size: 0.875rem;
  line-height: 1.41;
  color: ${props => props.theme.audioPlayer.textColor};
`;

const ProgressBar = styled.div`
  margin: 0 ${props => props.theme.audioPlayer.gutter};
  flex-grow: 1;
  height: 5px;
  background-color: ${props => props.theme.audioPlayer.progressBarBackgroundColor};
  color: ${props => props.theme.audioPlayer.primaryColor};
  cursor: ${props => (props.disabled ? 'inherit' : 'pointer')};

  & > div {
    background: ${props => props.theme.audioPlayer.primaryColor};
    height: 100%;
    width: ${props => props.percentage}%;
  }
`;

const DragHandle = SortableHandle(() => <ButtonLeft />);

class AudioPlayer extends Component {
  static propTypes = {
    className: PropTypes.string,
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    html5: PropTypes.bool, // eslint-disable-line
    onRemove: PropTypes.func,
    readOnly: PropTypes.bool,
  };

  static defaultProps = {
    className: '',
    src: undefined,
    html5: false,
    onRemove: undefined,
    readOnly: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      duration: 0,
      percentage: 0,
      mute: false,
    };
    this.howl = null;
  }

  componentDidMount = () => {
    const { src } = this.props;
    if (src) this.initPlayer(this.props);
  };

  componentWillUnmount = () => {
    if (this.playInterval) clearInterval(this.playInterval);
  };

  componentWillReceiveProps = nextProps => {
    const { src } = this.props;
    if (nextProps.src && src !== nextProps.src) {
      this.initPlayer(nextProps);
    } else if (!nextProps.src) {
      this.howl = null;
      this.setState({ initiated: false });
    }
  };

  initPlayer = ({ src, html5, format }) => {
    this.howl = new Howl({
      src: [src],
      volume: 1.0,
      format: format || 'wav',
      html5,
    });

    // listener
    this.howl.once('load', () => {
      this.setState({
        duration: this.howl.duration(),
      });
    });

    this.howl.on('end', () => {
      this.setState({
        playing: false,
      });
    });

    this.setState({ initiated: true });
    this.forceUpdate();
  };

  play = () => {
    if (this.howl) this.howl.play();
    this.setState({ playing: true });

    // update seek pos every one second
    this.playInterval = setInterval(() => {
      const { duration } = this.state;
      const seek = this.howl ? this.howl.seek() : 0;
      this.setState({ percentage: seek / duration });
    }, 1000);
  };

  pause = () => {
    this.howl.pause();
    if (this.playInterval) clearInterval(this.playInterval);
    this.setState({ playing: false });
  };

  seek = event => {
    const { duration } = this.state;
    const bound = event.currentTarget.getBoundingClientRect();

    const percentage = (event.clientX - bound.x) / bound.width;

    if (this.howl) {
      this.howl.seek(percentage * duration);
      this.setState({ percentage });
    }
  };

  toggleMute = () => {
    const { mute } = this.state;
    this.howl.mute(!mute);
    this.setState({
      mute: !mute,
    });
  };

  render() {
    const { className, onRemove, readOnly } = this.props;
    const { playing, initiated, duration, percentage, mute } = this.state;
    const elapsedTime = durationFormat(percentage * duration);
    const totalTime = durationFormat(duration);
    return (
      <Wraper className={className}>
        <Player>
          {!readOnly && <DragHandle />}
          {playing ? (
            <ControlIcon disabled={!initiated} type="Pause" onClick={initiated ? this.pause : undefined} />
          ) : (
            <ControlIcon disabled={!initiated} type="Play" onClick={initiated ? this.play : undefined} />
          )}
          <ElapsedTime>
            {elapsedTime} / {totalTime}
          </ElapsedTime>
          <ProgressBar disabled={!initiated} percentage={percentage * 100} onClick={initiated ? this.seek : undefined}>
            <div />
          </ProgressBar>
          <VolumeIcon disabled={!initiated} mute={mute ? 1 : 0} onClick={initiated ? this.toggleMute : undefined} />
          {!readOnly && <ButtonRight onClick={onRemove} />}
        </Player>
      </Wraper>
    );
  }
}

export default AudioPlayer;
