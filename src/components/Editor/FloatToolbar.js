import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Menu = styled.div`
  padding: 10px 16px;
  position: absolute;
  z-index: 1;
  top: -10000px;
  left: -10000px;
  margin-top: -6px;
  opacity: 0;
  background-color: ${props => props.theme.whiteColor};
  border-radius: 4px;
  box-shadow: 8px 8px 24px 0 rgba(0, 0, 0, 0.05);
  transition: opacity 0.75s;

  & > * {
    display: inline-block;
  }

  & > * + * {
    margin-left: 15px;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

class FloatToolbar extends Component {
  static propTypes = {
    className: PropTypes.string,
    editor: PropTypes.shape({}).isRequired,
    editorComponent: PropTypes.node.isRequired,
    buttons: PropTypes.arrayOf(PropTypes.func),
    buttonEvents: PropTypes.objectOf(PropTypes.objectOf(PropTypes.func)),
  };

  static defaultProps = {
    className: '',
    buttons: [],
    buttonEvents: {},
  };

  menuRef = React.createRef();

  menuWrapperRef = React.createRef();

  componentDidUpdate = () => {
    this.updateMenu();
  };

  updateMenu = () => {
    if (!this.menuRef.current || !this.menuWrapperRef.current) return;

    const menu = this.menuRef.current;
    const {
      editor: { value },
    } = this.props;
    const { fragment, selection } = value;

    if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
      this.menuRef.current.removeAttribute('style');
      return;
    }

    const native = window.getSelection();
    const range = native.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const containerRect = this.menuWrapperRef.current.getBoundingClientRect();
    const top = rect.top - containerRect.top - menu.offsetHeight;
    const left = rect.left - containerRect.left - menu.offsetWidth / 2 + rect.width / 2;

    menu.style.opacity = 1;
    menu.style.top = `${top}px`;
    menu.style.left = `${left >= 0 ? left : 0}px`;
  };

  render() {
    const { className, editor, editorComponent, buttons, buttonEvents } = this.props;

    return (
      <Wrapper className={className} ref={this.menuWrapperRef}>
        {editorComponent}
        <Menu ref={this.menuRef}>
          {buttons.map((Button, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Button {...buttonEvents[Button]} key={index} editor={editor} />
          ))}
        </Menu>
      </Wrapper>
    );
  }
}

export default FloatToolbar;
