import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { hasDataKeyEqualValueInSomeBlocks } from '../queries';
import { addBlockData, deleteDataByKey } from '../commands';

const alignButton = ({ align: defaultAlign, icon: defaultIcon }) => Button =>
  class extends Component {
    static propTypes = {
      editor: PropTypes.shape({}),
      align: PropTypes.string,
      icon: PropTypes.string,
    };

    static defaultProps = {
      editor: null,
      align: defaultAlign,
      icon: defaultIcon,
    };

    handleClick = event => {
      event.preventDefault();
      const { editor, align } = this.props;

      if (!editor) {
        return;
      }

      const isActive = editor.query(hasDataKeyEqualValueInSomeBlocks, 'align', align);

      if (isActive) {
        editor.command(deleteDataByKey, 'align');
      } else {
        editor.command(addBlockData, { align });
      }
    };

    render() {
      const { editor, align, icon, ...rest } = this.props;
      const isActive = editor.query(hasDataKeyEqualValueInSomeBlocks, 'align', align);

      return <Button {...rest} icon={icon} active={isActive} onMouseDown={this.handleClick} />;
    }
  };

export default alignButton;
