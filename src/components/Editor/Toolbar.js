import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.div`
  padding: 20px 25px;
  background-color: ${props => props.theme.darkBackgroundColor};

  & > * {
    display: inline-block;
    margin-right: 15px;
  }

  & > *:last-of-type {
    margin-right: 0;
  }
`;

class Toolbar extends Component {
  static propTypes = {
    editor: PropTypes.shape({}).isRequired,
    buttons: PropTypes.arrayOf(PropTypes.func),
    className: PropTypes.string,
  };

  static defaultProps = {
    buttons: [],
    className: '',
  };

  render() {
    const { className, buttons, editor } = this.props;

    return (
      <Menu className={className}>
        {buttons.map((Button, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Button key={index} editor={editor} />
        ))}
      </Menu>
    );
  }
}

export default Toolbar;
