import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hasActiveMarks } from '../queries';

const markButton = ({ type: defaultType, icon: defaultIcon, data: defaultData }) => Button =>
  class extends Component {
    static propTypes = {
      editor: PropTypes.shape({}),
      type: PropTypes.string,
      icon: PropTypes.string,
      data: PropTypes.shape({}),
    };

    static defaultProps = {
      editor: null,
      type: defaultType,
      icon: defaultIcon,
      data: defaultData,
    };

    handleClick = event => {
      event.preventDefault();
      const { editor, type, data } = this.props;

      if (editor) {
        editor.toggleMark({ type, data });
      }
    };

    render() {
      const { editor, icon, type, ...rest } = this.props;
      const isActive = editor.query(hasActiveMarks, type);

      return (
        <Button {...rest} icon={icon} type={type} active={isActive} editor={editor} onMouseDown={this.handleClick} />
      );
    }
  };

export default markButton;
