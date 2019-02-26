'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var reactRouterDom = require('react-router-dom');

var primaryColor = '#d14242';
var primaryDarkColor = '#9c2c23';
var tertiaryColor = '#999999';
var muteColor = '#dadada';
var textMuteColor = '#9b9b9b';
var whiteColor = '#ffffff';
var lightWhiteColor = '#fafafa';
var blackColor = '#000000';
var darkGrey = '#efefef';
var theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
  },
  mainPadding: '60px',
  whiteColor: whiteColor,
  lightWhiteColor: lightWhiteColor,
  primaryColor: primaryColor,
  primaryDarkColor: primaryDarkColor,
  tertiaryColor: tertiaryColor,
  muteColor: muteColor,
  backgroundColor: '#fbfbfb',
  darkBackgroundColor: darkGrey,
  appTitleColor: '#c2c4ca',
  textColor: '#232323',
  textMuteColor: textMuteColor,
  textLightColor: '#666666',
  borderColor: '#dfdfdf',
  transitionTiming: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  sideBar: {
    width: '270px',
    collapsedWidth: '72px',
    backgroundColor: whiteColor,
    shadowColor: 'rgba(118, 107, 107, 0.25)',
    menuTextColor: textMuteColor,
    menuTextHoverColor: '#d14242',
    gutterColor: blackColor
  },
  button: {
    primaryColor: primaryColor,
    tertiaryColor: tertiaryColor,
    hoverColor: primaryDarkColor,
    disabledColor: muteColor,
    shadowColor: 'rgba(0, 0, 0, 0.25)'
  },
  textInput: {
    borderColor: '#dfe1e6',
    placeHolderColor: '#1b2733',
    disabledColor: '#fbfbfb',
    labelColor: '#1b2733'
  },
  popup: {
    backgroundColor: whiteColor,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    width: '694px',
    widthMobile: '80%',
    textMaxWidth: '394px',
    closeIconColor: '#9b9b9b',
    backdropColor: '#c4c4c488',
    transitionDuration: 0.2
  },
  audioPlayer: {
    primaryColor: primaryColor,
    backgroundColor: '#f7f9fa',
    textColor: '#1b2733',
    borderColor: '#d0d4d9',
    volumeMuteColor: muteColor,
    volumeColor: '#7B8993',
    progressBarBackgroundColor: '#d0d4d9',
    gutter: '10px'
  }
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Analytics = function Analytics(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("rect", {
    x: "2",
    y: "5",
    width: "2.11268",
    height: "13"
  }), React__default.createElement("rect", {
    x: "6.22534",
    y: "10",
    width: "2.11268",
    height: "8"
  }), React__default.createElement("rect", {
    x: "10.4507",
    y: "8",
    width: "2.11268",
    height: "10"
  }), React__default.createElement("rect", {
    x: "14.676",
    y: "13",
    width: "2.11268",
    height: "5"
  }));
};

Analytics.propTypes = {
  className: PropTypes.string
};
Analytics.defaultProps = {
  className: ''
};

var Bell = function Bell(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("g", {
    clipPath: "url(#clip0)"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9279 10.6719V9.41633C13.9279 6.6426 11.6794 4.39404 8.90564 4.39404C6.13191 4.39404 3.88336 6.6426 3.88336 9.41633V10.6719C3.85219 11.446 3.50034 12.1722 2.91217 12.6764C2.38935 13.1219 2.06189 13.7545 2 14.4386C2 16.0081 4.58146 16.9498 8.90564 16.9498C13.2298 16.9498 15.8113 16.0081 15.8113 14.4386C15.7494 13.7545 15.4219 13.1219 14.8991 12.6764C14.3109 12.1722 13.9591 11.446 13.9279 10.6719V10.6719Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.11328 18.1426C7.35885 18.9259 8.08468 19.459 8.90561 19.459C9.72654 19.459 10.4524 18.9259 10.6979 18.1426C10.1367 18.184 9.5403 18.2054 8.90561 18.2054C8.27092 18.2054 7.67452 18.1853 7.11328 18.1426Z"
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: "clip0"
  }, React__default.createElement("rect", {
    width: "19",
    height: "21",
    fill: "var(--current-background)"
  }))));
};

Bell.propTypes = {
  className: PropTypes.string
};
Bell.defaultProps = {
  className: ''
};

var BellRedDot = function BellRedDot(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("g", {
    clipPath: "url(#clip0)"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.9279 10.6719V9.41633C13.9279 6.6426 11.6794 4.39404 8.90564 4.39404C6.13191 4.39404 3.88336 6.6426 3.88336 9.41633V10.6719C3.85219 11.446 3.50034 12.1722 2.91217 12.6764C2.38935 13.1219 2.06189 13.7545 2 14.4386C2 16.0081 4.58146 16.9498 8.90564 16.9498C13.2298 16.9498 15.8113 16.0081 15.8113 14.4386C15.7494 13.7545 15.4219 13.1219 14.8991 12.6764C14.3109 12.1722 13.9591 11.446 13.9279 10.6719V10.6719Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.11328 18.1426C7.35885 18.9259 8.08468 19.459 8.90561 19.459C9.72654 19.459 10.4524 18.9259 10.6979 18.1426C10.1367 18.184 9.5403 18.2054 8.90561 18.2054C8.27092 18.2054 7.67452 18.1853 7.11328 18.1426Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.6146 9.41679C16.215 9.41679 18.323 7.30877 18.323 4.70839C18.323 2.10802 16.215 0 13.6146 0C11.0143 0 8.90625 2.10802 8.90625 4.70839C8.90625 7.30877 11.0143 9.41679 13.6146 9.41679Z",
    fill: "#D14242",
    visibility: "visible"
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: "clip0"
  }, React__default.createElement("rect", {
    width: "19",
    height: "21",
    fill: "var(--current-background)"
  }))));
};

BellRedDot.propTypes = {
  className: PropTypes.string
};
BellRedDot.defaultProps = {
  className: ''
};

var CalendarClock = function CalendarClock(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.7324 4H16.8451C17.4285 4 17.9014 4.44772 17.9014 5V17C17.9014 17.5523 17.4285 18 16.8451 18H2.05634C1.47294 18 1 17.5523 1 17V5C1 4.44772 1.47294 4 2.05634 4H4.16901V2H6.28169V4H8.39437V2H10.507V4H12.6197V2H14.7324V4ZM3.1127 16H15.7888V7H3.1127V16Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.6196 13H8.39429V9H10.507V11H12.6196V13V13Z"
  }));
};

CalendarClock.propTypes = {
  className: PropTypes.string
};
CalendarClock.defaultProps = {
  className: ''
};

var Home = function Home(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.7324 19.025C16.3662 19.025 16.7887 18.625 16.7887 18.025V9.025C16.7887 8.725 16.6831 8.425 16.3662 8.225L10.0282 3.225C9.60563 2.925 9.07747 2.925 8.65493 3.225L2.3169 8.225C2.10563 8.425 2 8.725 2 9.025V18.025C2 18.625 2.42254 19.025 3.05634 19.025H7.28169V14.025H11.507V19.025H15.7324Z"
  }));
};

Home.propTypes = {
  className: PropTypes.string
};
Home.defaultProps = {
  className: ''
};

var Mail = function Mail(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 15"
  }), React__default.createElement("path", {
    d: "M18.75 1.324c0-.62-.5-1.116-1.125-1.116H1.375C.75.208.25.704.25 1.324v.149l8.8 6.175a.757.757 0 0 0 .875.025l8.825-6.2v-.149z"
  }), React__default.createElement("path", {
    d: "M8.45 8.442L.25 2.688v10.789c0 .62.5 1.116 1.125 1.116h16.25c.625 0 1.125-.497 1.125-1.116V2.688l-8.225 5.754c-.3.223-.65.347-1.025.347a1.67 1.67 0 0 1-1.05-.347z"
  }));
};

Mail.propTypes = {
  className: PropTypes.string
};
Mail.defaultProps = {
  className: ''
};

var Notepad = function Notepad(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.8451 5H13.6761V7H15.7887V18H3.11268V7H5.22535V5H2.05634C1.42254 5 1 5.4 1 6V19C1 19.6 1.42254 20 2.05634 20H16.8451C17.4789 20 17.9014 19.6 17.9014 19V6C17.9014 5.4 17.4789 5 16.8451 5Z"
  }), React__default.createElement("rect", {
    x: "6.28174",
    y: "4",
    width: "6.33803",
    height: "4"
  }), React__default.createElement("rect", {
    x: "5.22534",
    y: "10",
    width: "8.4507",
    height: "6"
  }));
};

Notepad.propTypes = {
  className: PropTypes.string
};
Notepad.defaultProps = {
  className: ''
};

var Notification = function Notification(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 18 22"
  }), React__default.createElement("path", {
    d: "M7.339 14.464c.444 1.542 1.86 2.707 3.488 2.707 1.156 0 2.011-.311 2.597-.937l-5.213-1.77h-.872zM6.435 5l-4.743.013a.683.683 0 0 0-.692.67v6.634c0 .369.312.67.692.67h4.743V5zm11.181-3.646a.63.63 0 0 0-.26.05L7.82 4.643v8.31l9.505 3.229a.67.67 0 0 0 .29.064.684.684 0 0 0 .693-.67V2.024a.683.683 0 0 0-.692-.67z"
  }));
};

Notification.propTypes = {
  className: PropTypes.string
};
Notification.defaultProps = {
  className: ''
};

var Plus = function Plus(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    stroke: "currentColor",
    viewBox: "0 0 22 22"
  }), React__default.createElement("path", {
    d: "M10.375.5h-.5v21h2.25V.5h-1.75z"
  }), React__default.createElement("path", {
    d: "M21.5 10.375v-.5H.5v2.25h21v-1.75z"
  }));
};

Plus.propTypes = {
  className: PropTypes.string
};
Plus.defaultProps = {
  className: ''
};

var Minus = function Minus(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    stroke: "currentColor",
    viewBox: "0 0 22 22"
  }), React__default.createElement("path", {
    d: "M4 11H18",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
};

Minus.propTypes = {
  className: PropTypes.string
};
Minus.defaultProps = {
  className: ''
};

var LogOut = function LogOut(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 21 17"
  }), React__default.createElement("path", {
    d: "M10.763 7.1H4.987V5.8c0-.26-.174-.347-.262-.347-.175 0-.438.173-.438.173L.262 8.14s-.174.173-.174.26c0 .086 0 .173.175.26.437.26 4.024 2.34 4.2 2.426 0 0 .262.174.437.174.087 0 .35-.087.35-.347V9.786h5.688c.174 0 .437-.086.437-.346V7.446C11.2 7.1 10.85 7.1 10.763 7.1z"
  }), React__default.createElement("path", {
    d: "M21 1.293C21 .86 20.912.6 20.3.6H7.262C7.175.6 7 .687 7 .86v3.553c0 .174.175.347.263.347H9.45c.263 0 .263-.087.263-.347V3.2h8.05c.35 0 .612.347.612.693v9.014a.595.595 0 0 1-.612.606H9.625V12.3c0-.173-.175-.26-.263-.26h-2.1c-.087 0-.35 0-.35.26v3.64c.088.26.438.26.438.26h13.125c.35-.087.525-.173.525-.867V1.293z"
  }));
};

LogOut.propTypes = {
  className: PropTypes.string
};
LogOut.defaultProps = {
  className: ''
};

var Left = function Left(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 10 16"
  }), React__default.createElement("path", {
    d: "M0.588520574,3.39599149 C0.211982848,3.02469441 0,2.51795184 0,1.9891398 C0,1.46032775 0.211982848,0.95358518 0.588520574,0.582288103 C1.37510905,-0.194096034 2.63963295,-0.194096034 3.42622143,0.582288103 L9.35559637,6.46166831 C9.76837768,6.87097191 10.0005704,7.42819813 10.0005704,8.00950514 C10.0005704,8.59081215 9.76837768,9.14803838 9.35559637,9.55734197 L3.44621932,15.4167243 C2.65939254,16.1944252 1.39334545,16.1944252 0.606518677,15.4167243 C0.229980951,15.0454272 0.0179981027,14.5386846 0.0179981027,14.0098726 C0.0179981027,13.4810605 0.229980951,12.974318 0.606518677,12.6030209 L5.24203001,8.00950514 L0.588520574,3.39599149 Z"
  }));
};

Left.propTypes = {
  className: PropTypes.string
};
Left.defaultProps = {
  className: ''
};

var Right = function Right(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 10 16"
  }), React__default.createElement("path", {
    d: "M9.41204982,3.39599149 C9.78858755,3.02469441 10.0005704,2.51795184 10.0005704,1.9891398 C10.0005704,1.46032775 9.78858755,0.95358518 9.41204982,0.582288103 C8.62546134,-0.194096034 7.36093745,-0.194096034 6.57434897,0.582288103 L0.644974028,6.46166831 C0.232192719,6.87097191 0,7.42819813 0,8.00950514 C0,8.59081215 0.232192719,9.14803838 0.644974028,9.55734197 L6.55435107,15.4167243 C7.34117785,16.1944252 8.60722494,16.1944252 9.39405172,15.4167243 C9.77058945,15.0454272 9.98257229,14.5386846 9.98257229,14.0098726 C9.98257229,13.4810605 9.77058945,12.974318 9.39405172,12.6030209 L4.75854038,8.00950514 L9.41204982,3.39599149 Z"
  }));
};

Right.propTypes = {
  className: PropTypes.string
};
Right.defaultProps = {
  className: ''
};

var Close = function Close(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({}, rest, {
    className: className,
    fill: "currentColor",
    stroke: "currentColor",
    viewBox: "0 0 13 13"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M11.784.271l-.09-.09-.091.09L6.5 5.375 1.396.27l-.09-.09-.09.09-.945.945-.09.09.09.09L5.375 6.5.27 11.603l-.09.09.09.09.945.945.09.09.09-.09L6.5 7.625l5.103 5.103.09.09.09-.09.945-.944.09-.09-.09-.091-5.106-5.106.132-.135c.14-.143.343-.346.586-.59a2766.924 2766.924 0 0 1 3.575-3.566l.59-.587.164-.164.044-.043.011-.012.003-.002v-.001l-.09-.091.09.09.092-.09-.09-.09-.945-.945z"
  }));
};

Close.propTypes = {
  className: PropTypes.string
};
Close.defaultProps = {
  className: ''
};

var Facebook = function Facebook(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 20"
  }), React__default.createElement("g", {
    clipPath: "url(#a)"
  }, React__default.createElement("path", {
    d: "M13.691.004L11.324 0c-2.66 0-4.379 1.932-4.379 4.922v2.27h-2.38c-.206 0-.372.182-.372.407v3.288c0 .226.167.408.372.408h2.38v8.297c0 .226.167.408.373.408h3.105c.206 0 .373-.183.373-.408v-8.297h2.783c.205 0 .372-.182.372-.408l.001-3.288a.43.43 0 0 0-.109-.288.357.357 0 0 0-.263-.12h-2.784V5.268c0-.925.2-1.394 1.3-1.394l1.595-.001c.205 0 .372-.183.372-.408V.412c0-.225-.166-.407-.372-.408z"
  })));
};

Facebook.propTypes = {
  className: PropTypes.string
};
Facebook.defaultProps = {
  className: ''
};

var Recorder = function Recorder(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 15 21",
    className: className
  }, rest), React__default.createElement("rect", {
    width: "11",
    height: "16",
    x: "2.237",
    y: "1",
    fill: "currentColor",
    rx: "4.5"
  }), React__default.createElement("path", {
    fill: "#fff",
    d: "M6.923 18h1.625c3.17 0 5.688-2.325 5.688-5.25v-7.5c0-2.925-2.519-5.25-5.688-5.25H6.923C3.755 0 1.236 2.325 1.236 5.25v7.5c0 2.925 2.519 5.25 5.687 5.25zm-.812-6.75H2.86v-1.5h2.437c.488 0 .813-.3.813-.75s-.325-.75-.813-.75H2.861v-1.5h3.25c.487 0 .812-.3.812-.75s-.325-.75-.812-.75H2.86c0-2.1 1.787-3.75 4.062-3.75h1.625c2.275 0 4.063 1.65 4.063 3.75H9.36c-.488 0-.813.3-.813.75s.325.75.813.75h3.25v1.5h-2.438c-.487 0-.812.3-.812.75s.325.75.812.75h2.438v1.5H9.36c-.488 0-.813.3-.813.75s.325.75.813.75h3.25c0 2.1-1.788 3.75-4.063 3.75V15c0-.45-.325-.75-.812-.75-.488 0-.813.3-.813.75v1.5c-2.275 0-4.062-1.65-4.062-3.75h3.25c.487 0 .812-.3.812-.75s-.325-.75-.812-.75z"
  }), React__default.createElement("path", {
    fill: "currentColor",
    d: "M14.206 11.118c-.37 0-.618.208-.618.52v1.04c0 2.86-2.78 5.201-6.176 5.201-3.397 0-6.177-2.34-6.177-5.201v-1.04c0-.312-.247-.52-.617-.52s-.618.208-.618.52v1.04c0 3.277 3.026 5.93 6.794 6.19v1.092H4.941c-.37 0-.617.208-.617.52 0 .312.247.52.617.52h4.941c.371 0 .618-.208.618-.52 0-.312-.247-.52-.618-.52H8.03v-1.093c3.768-.26 6.795-2.964 6.795-6.189v-1.04c0-.312-.247-.52-.618-.52z"
  }));
};

Recorder.propTypes = {
  className: PropTypes.string
};
Recorder.defaultProps = {
  className: ''
};

var Stop = function Stop(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 12 12"
  }), React__default.createElement("path", {
    d: "M0 0h12v12H0z"
  }));
};

Stop.propTypes = {
  className: PropTypes.string
};
Stop.defaultProps = {
  className: ''
};

var Play = function Play(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 12 16"
  }), React__default.createElement("path", {
    d: "M11.82 8c0-.327-.156-.633-.42-.82l-9.85-7A.976.976 0 0 0 .53.112C.204.285 0 .626 0 1v14.002c0 .373.204.715.53.887.326.17.719.146 1.02-.068l9.85-7A1 1 0 0 0 11.82 8V8z"
  }));
};

Play.propTypes = {
  className: PropTypes.string
};
Play.defaultProps = {
  className: ''
};

var Volume = function Volume(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 12 11"
  }), React__default.createElement("path", {
    d: "M7.048.029c-.077-.053-.18-.027-.257.026l-4.039 3.09H.257c-.154 0-.257.104-.257.261v4.19c0 .157.103.262.257.262h2.495l4.039 3.09a.361.361 0 0 0 .154.052c.052 0 .078 0 .103-.026.077-.053.155-.131.155-.236V.264c0-.105-.052-.183-.155-.235zM8.593 3.459a.256.256 0 0 0 0 .366c.9.917.9 2.41 0 3.326a.256.256 0 0 0 0 .366.275.275 0 0 0 .18.079.275.275 0 0 0 .18-.079 2.93 2.93 0 0 0 0-4.084.272.272 0 0 0-.36.026z"
  }), React__default.createElement("path", {
    d: "M10.032 1.992a.256.256 0 0 0 0 .367c1.698 1.728 1.698 4.556 0 6.284a.256.256 0 0 0 0 .367.276.276 0 0 0 .18.079.275.275 0 0 0 .18-.079c1.904-1.938 1.904-5.106 0-7.044a.272.272 0 0 0-.36.026z"
  }));
};

Volume.propTypes = {
  className: PropTypes.string
};
Volume.defaultProps = {
  className: ''
};

var Pause = function Pause(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, rest, {
    fill: "currentColor",
    viewBox: "0 0 12 12"
  }), React__default.createElement("path", {
    d: "M0 0h4v12H0zM8 0h4v12H8z"
  }));
};

Pause.propTypes = {
  className: PropTypes.string
};
Pause.defaultProps = {
  className: ''
};

var ApprovedFile = function ApprovedFile(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("g", {
    clipPath: "url(#clip0)"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.34343 0C8.29352 0.000412502 8.24322 0.0100158 8.19508 0.0293576C8.04081 0.0913453 7.93972 0.240904 7.93972 0.407165V5.29315C7.93972 5.51802 8.12202 5.70031 8.34689 5.70031H13.0293C13.1023 5.70031 13.1722 5.68079 13.2329 5.64576V8.44868V14.8615C13.2329 15.9859 12.3214 16.8974 11.197 16.8974H2.03583C0.91147 16.8974 0 15.9859 0 14.8615V2.03583C0 0.91147 0.91147 0 2.03583 0H6.61643H8.34343ZM8.35016 0C8.45789 0.00089019 8.56333 0.0445446 8.64086 0.125445L13.2329 4.91711V4.90803L8.52514 0H8.35016ZM8.75405 4.88598V1.4205L12.0751 4.88598H8.75405Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.1431 12.6005L10.6746 20.4999L6.50391 16.4837L7.61084 15.3342L10.6214 18.2332L16.9835 11.5042L18.1431 12.6005Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.6474 12.5582L10.7104 22.0108L5 16.5119L7.58285 13.8297L10.5864 16.722L16.9417 10L19.6474 12.5582ZM16.9839 11.504L18.1435 12.6003L10.675 20.4997L6.5043 16.4835L7.61123 15.334L10.6218 18.2331L16.9839 11.504Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1979 8.65243H2.24023V7.63452H11.1979V8.65243Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.65286 10.8917H2.3418V9.87378H8.65286V10.8917Z",
    fill: "var(--current-background)"
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: "clip0"
  }, React__default.createElement("rect", {
    width: "19",
    height: "21",
    fill: "var(--current-background)"
  }))));
};

ApprovedFile.propTypes = {
  className: PropTypes.string
};
ApprovedFile.defaultProps = {
  className: ''
};

var LookupFile = function LookupFile(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("g", {
    clipPath: "url(#clip0)"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.34343 0C8.29352 0.000412502 8.24322 0.0100158 8.19508 0.0293576C8.04081 0.0913453 7.93972 0.240904 7.93972 0.407165V5.29315C7.93972 5.51802 8.12202 5.70031 8.34689 5.70031H13.0293C13.1023 5.70031 13.1722 5.68079 13.2329 5.64576V8.44868V14.8615C13.2329 15.9859 12.3214 16.8974 11.197 16.8974H2.03583C0.91147 16.8974 0 15.9859 0 14.8615V2.03583C0 0.91147 0.91147 0 2.03583 0H6.61643H8.34343ZM8.35016 0C8.45789 0.00089019 8.56333 0.0445446 8.64086 0.125445L13.2329 4.91711V4.90803L8.52514 0H8.35016ZM8.75405 4.88598V1.4205L12.0751 4.88598H8.75405Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1979 8.65243H2.24023V7.63452H11.1979V8.65243Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.65286 10.8917H2.3418V9.87378H8.65286V10.8917Z",
    fill: "var(--current-background)"
  }), React__default.createElement("circle", {
    cx: "11.5",
    cy: "14.5",
    r: "3.5",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    d: "M18.0985 19.7546L18.0985 19.7546L15.6244 17.2704C16.2399 16.4519 16.5753 15.4653 16.5753 14.4412C16.5753 11.773 14.3312 9.625 11.6001 9.625C8.86909 9.625 6.625 11.773 6.625 14.4412C6.625 17.1095 8.86909 19.2575 11.6001 19.2575C12.5206 19.2575 13.4046 19.0168 14.1822 18.5566L16.7022 21.087L16.7024 21.0872C16.8883 21.2735 17.138 21.375 17.4003 21.375C17.6488 21.375 17.8883 21.2832 18.0714 21.1131C18.4648 20.7477 18.4781 20.1359 18.0985 19.7546ZM11.6001 11.5336C13.2804 11.5336 14.6253 12.8506 14.6253 14.4412C14.6253 16.0319 13.2804 17.3489 11.6001 17.3489C9.91986 17.3489 8.57504 16.0319 8.57504 14.4412C8.57504 12.8506 9.91986 11.5336 11.6001 11.5336Z",
    stroke: "var(--current-background)",
    strokeWidth: "0.75"
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: "clip0"
  }, React__default.createElement("rect", {
    width: "19",
    height: "21",
    fill: "var(--current-background)"
  }))));
};

LookupFile.propTypes = {
  className: PropTypes.string
};
LookupFile.defaultProps = {
  className: ''
};

var NewFile = function NewFile(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("g", {
    clipPath: "url(#clip0)"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.63647 0C8.58479 0.000426989 8.53273 0.0103676 8.4829 0.0303886C8.32321 0.0945535 8.21857 0.249365 8.21857 0.421465V5.47905C8.21857 5.71182 8.40727 5.90051 8.64004 5.90051H13.4869C13.5625 5.90051 13.6348 5.88031 13.6976 5.84405V8.74541V15.3835C13.6976 16.5473 12.7541 17.4908 11.5903 17.4908H2.10733C0.943482 17.4908 0 16.5473 0 15.3835V2.10733C0 0.943482 0.943482 0 2.10733 0H6.84881H8.63647ZM8.64343 0C8.75495 0.000921454 8.86408 0.046109 8.94433 0.129851L13.6976 5.08981V5.0804L8.82455 0H8.64343ZM9.06151 5.05758V1.47039L12.4992 5.05758H9.06151Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5906 8.95625H2.31836V7.90259H11.5906V8.95625Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.95654 11.2741H2.42383V10.2205H8.95654V11.2741Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.3408 14.9736V10.4963H11.8659V14.9736H7.38867V16.4485H11.8659V20.9257H13.3408V16.4485H17.818V14.9736H13.3408Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.523 9.31616V13.7934H19.0002V17.6282H14.523V22.1054H10.6881V17.6282H6.21094V13.7934H10.6881V9.31616H14.523ZM11.8681 14.9733H7.39089V16.4483H11.8681V20.9255H13.343V16.4483H17.8203V14.9733H13.343V10.4961H11.8681V14.9733Z",
    fill: "var(--current-background)"
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: "clip0"
  }, React__default.createElement("rect", {
    width: "19",
    height: "21",
    fill: "var(--current-background)"
  }))));
};

NewFile.propTypes = {
  className: PropTypes.string
};
NewFile.defaultProps = {
  className: ''
};

var People = function People(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    d: "M7.486 8.8896C7.011 8.0832 6.745 7.1424 6.745 6.1632C6.745 4.512 7.486 3.0528 8.645 2.0544C8.094 0.8448 6.878 0 5.472 0C3.553 0 1.976 1.5744 1.976 3.5328C1.976 4.6272 2.47 5.6256 3.268 6.2592C1.349 7.3536 0 9.6384 0 11.328C0 13.4592 0.722 14.2656 4.598 14.3616C4.731 12.4416 5.871 10.3488 7.486 8.8896Z"
  }), React__default.createElement("path", {
    d: "M14.4781 9.17755C15.3331 8.46715 15.8841 7.39195 15.8841 6.18235C15.8841 4.03196 14.1741 2.30396 12.0651 2.30396C9.95608 2.30396 8.24608 4.03195 8.24608 6.16315C8.24608 7.37275 8.79708 8.44795 9.65208 9.15835C7.54308 10.3488 6.08008 12.864 6.08008 14.7264C6.08008 17.2224 6.99208 18.048 12.0651 18.048C17.1381 18.048 18.0501 17.2224 18.0501 14.7264C18.0501 12.864 16.5871 10.3488 14.4781 9.17755Z"
  }));
};

People.propTypes = {
  className: PropTypes.string
};
People.defaultProps = {
  className: ''
};

var Person = function Person(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.5297 16.3459C16.5297 16.5942 16.3279 16.8 16.079 16.8H2.45078C2.2054 16.8 2 16.5967 2 16.3459C2 12.3337 5.25259 9.08108 9.26487 9.08108C13.2771 9.08108 16.5297 12.3337 16.5297 16.3459ZM9.26487 8.17297C7.00796 8.17297 5.17838 6.34339 5.17838 4.08649C5.17838 1.82958 7.00796 0 9.26487 0C11.5218 0 13.3514 1.82958 13.3514 4.08649C13.3514 6.34339 11.5218 8.17297 9.26487 8.17297Z"
  }));
};

Person.propTypes = {
  className: PropTypes.string
};
Person.defaultProps = {
  className: ''
};

var RecentFile = function RecentFile(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.34343 0C8.29352 0.000412502 8.24322 0.0100158 8.19508 0.0293576C8.04081 0.0913453 7.93972 0.240904 7.93972 0.407165V5.29315C7.93972 5.51802 8.12202 5.70031 8.34689 5.70031H13.0293C13.1023 5.70031 13.1722 5.68079 13.2329 5.64576V8.44868V14.8615C13.2329 15.9859 12.3214 16.8974 11.197 16.8974H2.03583C0.91147 16.8974 0 15.9859 0 14.8615V2.03583C0 0.91147 0.91147 0 2.03583 0H6.61643H8.34343ZM8.35016 0C8.45789 0.00089019 8.56333 0.0445446 8.64086 0.125445L13.2329 4.91711V4.90803L8.52514 0H8.35016ZM8.75405 4.88598V1.4205L12.0751 4.88598H8.75405Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1979 8.65243H2.24023V7.63452H11.1979V8.65243Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.65286 10.8917H2.3418V9.87378H8.65286V10.8917Z",
    fill: "var(--current-background)"
  }), React__default.createElement("circle", {
    cx: "13",
    cy: "16",
    r: "5",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    opacity: "0.9",
    d: "M12.9008 10.6396C11.1474 10.6396 9.5944 11.6117 8.79285 13.0955L7.64062 11.9187V15.2443H10.8969L9.49421 13.8117C10.1455 12.5327 11.3979 11.6629 12.9008 11.6629C14.9548 11.6629 16.6581 13.4024 16.6581 15.5001C16.6581 17.5978 14.9548 19.3373 12.9008 19.3373C11.2476 19.3373 9.89498 18.2629 9.34392 16.7792H8.29188C8.84295 18.8257 10.6965 20.3606 12.9008 20.3606C15.5559 20.3606 17.66 18.1606 17.66 15.5001C17.66 12.8396 15.5058 10.6396 12.9008 10.6396ZM12.1493 13.1978V15.8071L14.5039 17.2396L14.9047 16.5745L12.9008 15.3466V13.1978H12.1493Z"
  }), React__default.createElement("path", {
    opacity: "0.9",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.63953 15.2442V11.9186L8.79176 13.0953C8.89659 12.9013 9.01426 12.716 9.14356 12.5405C10.0029 11.374 11.3756 10.6395 12.8997 10.6395C15.5047 10.6395 17.6589 12.8395 17.6589 15.5C17.6589 18.1605 15.5548 20.3605 12.8997 20.3605C10.9318 20.3605 9.24348 19.1372 8.51187 17.4186C8.42398 17.2122 8.34989 16.9986 8.29079 16.7791H9.34283C9.89389 18.2628 11.2465 19.3372 12.8997 19.3372C14.9537 19.3372 16.657 17.5977 16.657 15.5C16.657 13.4023 14.9537 11.6628 12.8997 11.6628C11.3968 11.6628 10.1444 12.5326 9.49312 13.8116L10.8958 15.2442H7.63953ZM10.2922 13.7136L11.5087 14.956V13.1977H12.1483V15.807L14.5028 17.2395L14.9036 16.5744L12.8997 15.3465V13.1977H12.1483V12.5581H13.5392V14.9883L15.779 16.3608L14.7592 18.0532C15.5172 17.468 16.0174 16.5394 16.0174 15.5C16.0174 13.7428 14.5878 12.3023 12.8997 12.3023C11.816 12.3023 10.88 12.8481 10.2922 13.7136ZM14.6923 18.1034L11.5087 16.1665V15.8837H7V10.3514L8.691 12.0783C9.67058 10.8015 11.2021 10 12.8997 10C15.8706 10 18.2984 12.4991 18.2984 15.5C18.2984 18.4965 15.925 21 12.8997 21C10.3895 21 8.29506 19.2546 7.67326 16.9454L7.45627 16.1395H9.78752L9.94235 16.5564C10.4112 17.8188 11.5437 18.6977 12.8997 18.6977C13.5602 18.6977 14.1811 18.4772 14.6923 18.1034Z",
    fill: "var(--current-background)"
  }));
};

RecentFile.propTypes = {
  className: PropTypes.string
};
RecentFile.defaultProps = {
  className: ''
};

var RejectedFile = function RejectedFile(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("g", {
    clipPath: "url(#clip0)"
  }, React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.34343 0C8.29352 0.000412502 8.24322 0.0100158 8.19508 0.0293576C8.04081 0.0913453 7.93972 0.240904 7.93972 0.407165V5.29315C7.93972 5.51802 8.12202 5.70031 8.34689 5.70031H13.0293C13.1023 5.70031 13.1722 5.68079 13.2329 5.64576V8.44868V14.8615C13.2329 15.9859 12.3214 16.8974 11.197 16.8974H2.03583C0.91147 16.8974 0 15.9859 0 14.8615V2.03583C0 0.91147 0.91147 0 2.03583 0H6.61643H8.34343ZM8.35016 0C8.45789 0.00089019 8.56333 0.0445446 8.64086 0.125445L13.2329 4.91711V4.90803L8.52514 0H8.35016ZM8.75405 4.88598V1.4205L12.0751 4.88598H8.75405Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.002 17.9942L16.0196 21.0118L17.0137 20.0177L13.9961 17.0001L17.0138 13.9824L16.0197 12.9883L13.002 16.006L9.98434 12.9883L8.99023 13.9824L12.0079 17.0001L8.99034 20.0177L9.98444 21.0118L13.002 17.9942Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.0176 22.9999L13 19.9823L9.98242 22.9999L7.00011 20.0176L10.0177 17L7 13.9823L9.98231 11L13 14.0177L16.0177 11L19 13.9823L15.9823 17L18.9999 20.0176L16.0176 22.9999ZM13 16.0059L9.98231 12.9882L8.98821 13.9823L12.0059 17L8.98831 20.0176L9.98242 21.0117L13 17.9941L16.0176 21.0117L17.0117 20.0176L13.9941 17L17.0118 13.9823L16.0177 12.9882L13 16.0059Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.1979 8.65243H2.24023V7.63452H11.1979V8.65243Z",
    fill: "var(--current-background)"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.65286 10.8914H2.3418V9.87354H8.65286V10.8914Z",
    fill: "var(--current-background)"
  })), React__default.createElement("defs", null, React__default.createElement("clipPath", {
    id: "clip0"
  }, React__default.createElement("rect", {
    width: "19",
    height: "21",
    fill: "var(--current-background)"
  }))));
};

RejectedFile.propTypes = {
  className: PropTypes.string
};
RejectedFile.defaultProps = {
  className: ''
};

var Wallet = function Wallet(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    d: "M7.52114 7.76547C7.94913 8.19439 8.52235 8.44731 9.12768 8.47432V8.98621H9.13045C9.13331 9.10872 9.18398 9.22526 9.27164 9.3109C9.3593 9.39653 9.47699 9.44448 9.59953 9.44448C9.72208 9.44448 9.83977 9.39653 9.92743 9.3109C10.0151 9.22526 10.0658 9.10872 10.0686 8.98621H10.0714V8.45186C10.488 8.42221 10.8783 8.23698 11.1647 7.93294C11.4511 7.6289 11.6127 7.22827 11.6174 6.8106C11.6313 6.59486 11.6003 6.37858 11.5263 6.17544C11.4524 5.9723 11.3371 5.78671 11.1877 5.6304C10.8875 5.37828 10.5151 5.22783 10.1241 5.20068L9.46703 5.10712C9.27697 5.08743 9.09726 5.01089 8.95137 4.8875C8.898 4.83586 8.85587 4.77377 8.82761 4.7051C8.79936 4.63643 8.78558 4.56266 8.78715 4.48842C8.78715 4.10653 9.06793 3.78562 9.64651 3.78562C9.85273 3.76972 10.06 3.79532 10.2562 3.86091C10.4524 3.92651 10.6334 4.03077 10.7886 4.16752L10.7897 4.16631C10.8346 4.21289 10.8885 4.24993 10.9481 4.27524C11.0076 4.30055 11.0717 4.31359 11.1364 4.3136C11.2011 4.31361 11.2652 4.30058 11.3247 4.27529C11.3843 4.25 11.4382 4.21297 11.4831 4.16641C11.5281 4.11985 11.5632 4.0647 11.5864 4.00428C11.6095 3.94385 11.6203 3.87937 11.618 3.8147C11.6157 3.75002 11.6004 3.68647 11.573 3.62783C11.5456 3.5692 11.5067 3.51668 11.4586 3.47342C11.0808 3.11577 10.5903 2.90075 10.0713 2.86527V2.33497C10.0616 2.21549 10.0081 2.10381 9.92098 2.02146C9.83388 1.9391 9.71939 1.89189 9.59956 1.88892C9.48062 1.88924 9.36609 1.93399 9.27843 2.01439C9.19077 2.09478 9.13631 2.20502 9.12572 2.32349L9.12768 2.89988C8.73716 2.95475 8.38025 3.15073 8.12438 3.45081C7.8685 3.75088 7.73138 4.13428 7.73891 4.52856C7.72739 4.72851 7.75685 4.9287 7.82549 5.11685C7.89412 5.305 8.00048 5.47714 8.13804 5.62271C8.43942 5.88752 8.81734 6.04941 9.21696 6.0849L9.8891 6.17852C10.0703 6.18751 10.2435 6.25596 10.3819 6.3733C10.4419 6.43517 10.4882 6.50896 10.5178 6.58989C10.5474 6.67081 10.5597 6.75706 10.5538 6.84304C10.5538 7.28806 10.21 7.53051 9.5683 7.53051C9.32687 7.54605 9.08476 7.51338 8.85609 7.43441C8.62741 7.35543 8.41675 7.23173 8.23636 7.07051C8.19111 7.02333 8.13697 6.98557 8.07707 6.9594C8.01717 6.93323 7.95268 6.91917 7.88732 6.91801C7.82196 6.91686 7.75701 6.92865 7.69623 6.9527C7.63544 6.97674 7.58001 7.01257 7.53312 7.05812C7.48623 7.10368 7.44882 7.15805 7.42303 7.21812C7.39724 7.27819 7.38358 7.34276 7.38284 7.40813C7.38211 7.4735 7.39431 7.53836 7.41874 7.599C7.44317 7.65963 7.47935 7.71484 7.5252 7.76143L7.52114 7.76547Z"
  }), React__default.createElement("path", {
    d: "M17.5142 5.39677L15.1667 4.09257V1.88889C15.1667 1.38792 14.9677 0.907478 14.6134 0.553243C14.2592 0.199007 13.7787 0 13.2778 0H5.72222C5.22126 0 4.74081 0.199007 4.38658 0.553243C4.03234 0.907478 3.83333 1.38792 3.83333 1.88889V4.09257L1.48577 5.39677C1.33854 5.47857 1.21587 5.59826 1.13046 5.74342C1.04505 5.88858 1.00001 6.05393 1 6.22236V14.1667C1 14.9181 1.29851 15.6388 1.82986 16.1701C2.36122 16.7015 3.08189 17 3.83333 17H15.1667C15.9181 17 16.6388 16.7015 17.1701 16.1701C17.7015 15.6388 18 14.9181 18 14.1667V6.22236C18 6.05393 17.955 5.88858 17.8695 5.74342C17.7841 5.59826 17.6615 5.47857 17.5142 5.39677V5.39677ZM15.4831 8.42529L9.81639 11.2586C9.71817 11.3078 9.60986 11.3333 9.50004 11.3333C9.39022 11.3333 9.28191 11.3078 9.18369 11.2586L3.51702 8.42529C3.4338 8.38376 3.35958 8.32623 3.29859 8.25601C3.23761 8.18578 3.19105 8.10423 3.16158 8.01602C3.13212 7.9278 3.12031 7.83464 3.12685 7.74186C3.13339 7.64908 3.15814 7.5585 3.19968 7.47528C3.24123 7.39207 3.29876 7.31785 3.36899 7.25687C3.43922 7.1959 3.52077 7.14935 3.60899 7.11989C3.69721 7.09043 3.79037 7.07864 3.88315 7.08518C3.97593 7.09173 4.06651 7.11648 4.14972 7.15804L4.77778 7.47209V1.88889C4.77807 1.63849 4.87766 1.39844 5.05472 1.22138C5.23177 1.04433 5.47183 0.944732 5.72222 0.944444H13.2778C13.5282 0.944732 13.7682 1.04433 13.9453 1.22138C14.1223 1.39844 14.2219 1.63849 14.2222 1.88889V7.47209L14.8503 7.15804C14.9335 7.11648 15.0241 7.09173 15.1168 7.08518C15.2096 7.07864 15.3028 7.09043 15.391 7.11989C15.4792 7.14935 15.5608 7.1959 15.631 7.25687C15.7012 7.31785 15.7588 7.39207 15.8003 7.47528C15.8419 7.5585 15.8666 7.64908 15.8732 7.74186C15.8797 7.83464 15.8679 7.9278 15.8384 8.01602C15.8089 8.10423 15.7624 8.18578 15.7014 8.25601C15.6404 8.32623 15.5662 8.38376 15.483 8.42529H15.4831Z"
  }));
};

Wallet.propTypes = {
  className: PropTypes.string
};
Wallet.defaultProps = {
  className: ''
};

var SettingGear = function SettingGear(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 21"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.518 8C15.5157 8.32466 15.4872 8.64861 15.4327 8.96867L16.832 10.32C17.052 10.5326 17.099 10.8677 16.946 11.1327L15.946 12.866C15.8268 13.0725 15.6064 13.1996 15.368 13.1993C15.306 13.1991 15.2444 13.1905 15.1847 13.174L13.318 12.6407C12.8134 13.0521 12.2454 13.3788 11.636 13.608L11.1647 15.4947C11.0906 15.7916 10.824 15.9999 10.518 16H8.518C8.21296 15.9991 7.94746 15.7912 7.87334 15.4953L7.402 13.6087C6.79172 13.3797 6.22273 13.053 5.71734 12.6413L3.85067 13.1747C3.79095 13.1912 3.7293 13.1997 3.66734 13.2C3.42893 13.2002 3.20854 13.0731 3.08934 12.8667L2.08934 11.1333C1.93671 10.8685 1.9837 10.5339 2.20334 10.3213L3.60334 8.96867C3.54883 8.64861 3.52029 8.32466 3.51801 8C3.52033 7.67556 3.54886 7.35184 3.60334 7.032L2.20334 5.67933C1.98337 5.46669 1.93636 5.13162 2.08934 4.86667L3.08934 3.13333C3.24416 2.86983 3.55703 2.74364 3.85134 2.826L5.718 3.35933C6.22259 2.94793 6.79066 2.62123 7.4 2.392L7.87134 0.505333C7.94539 0.208448 8.21202 8.45298e-05 8.518 0H10.518C10.824 8.45298e-05 11.0906 0.208448 11.1647 0.505333L11.6333 2.392C12.2436 2.62098 12.8126 2.94768 13.318 3.35933L15.1847 2.826C15.479 2.74339 15.792 2.86964 15.9467 3.13333L16.9467 4.86667C17.0993 5.13147 17.0523 5.46613 16.8327 5.67867L15.4327 7.03133C15.4872 7.35139 15.5157 7.67534 15.518 8ZM6.85135 8C6.85135 9.47276 8.04525 10.6667 9.51801 10.6667C10.2253 10.6667 10.9035 10.3857 11.4036 9.88562C11.9037 9.38552 12.1847 8.70724 12.1847 8C12.1847 6.52724 10.9908 5.33333 9.51801 5.33333C8.04525 5.33333 6.85135 6.52724 6.85135 8Z"
  }));
};

SettingGear.propTypes = {
  className: PropTypes.string
};
SettingGear.defaultProps = {
  className: ''
};

var EcoSystem = function EcoSystem(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 19 12"
  }), React__default.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "0",
    y: "-5",
    width: "19",
    height: "21"
  }, React__default.createElement("rect", {
    y: "-5",
    width: "19",
    height: "21"
  })), React__default.createElement("g", {
    mask: "url(#mask0)"
  }, React__default.createElement("circle", {
    cx: "2.5",
    cy: "3.5",
    r: "2.5"
  }), React__default.createElement("circle", {
    cx: "17",
    cy: "2",
    r: "2"
  }), React__default.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "2"
  }), React__default.createElement("rect", {
    x: "14.9702",
    y: "4",
    width: "0.83118",
    height: "3.69252",
    transform: "rotate(32.2478 14.9702 4)"
  }), React__default.createElement("rect", {
    x: "10.1482",
    y: "8.06055",
    width: "0.83118",
    height: "5.30796",
    transform: "rotate(122.132 10.1482 8.06055)"
  })));
};

EcoSystem.propTypes = {
  className: PropTypes.string
};
EcoSystem.defaultProps = {
  className: ''
};

var Feedback = function Feedback(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 16 19"
  }), React__default.createElement("mask", {
    id: "mask0",
    "mask-type": "alpha",
    maskUnits: "userSpaceOnUse",
    x: "-1",
    y: "-1",
    width: "19",
    height: "21"
  }, React__default.createElement("rect", {
    x: "-1",
    y: "-1",
    width: "19",
    height: "21",
    fill: "#C4C4C4"
  })), React__default.createElement("g", {
    mask: "url(#mask0)"
  }, React__default.createElement("path", {
    d: "M2 19V16H7L2 19Z"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 0H12V2H14V13H2V2H12V0H1C0.4 0 0 0.4 0 1V14C0 14.6 0.4 15 1 15H15C15.6 15 16 14.6 16 14V1C16 0.4 15.6 0 15 0Z"
  }), React__default.createElement("rect", {
    x: "4",
    y: "8",
    width: "8",
    height: "2"
  }), React__default.createElement("rect", {
    x: "4",
    y: "5",
    width: "8",
    height: "2"
  })));
};

Feedback.propTypes = {
  className: PropTypes.string
};
Feedback.defaultProps = {
  className: ''
};

var LeftThinArrow = function LeftThinArrow(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 8 13"
  }), React__default.createElement("path", {
    d: "M5.019 6.504L0 11.55 1.536 13l5.743-5.776L8 6.5l-.72-.724L1.535 0 0 1.45 5.02 6.503z"
  }));
};

LeftThinArrow.propTypes = {
  className: PropTypes.string
};
LeftThinArrow.defaultProps = {
  className: ''
};

var Waiting = function Waiting(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 15 15"
  }), React__default.createElement("path", {
    d: "M7.5 15a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm0-13.636A6.133 6.133 0 0 1 13.636 7.5 6.133 6.133 0 0 1 7.5 13.636 6.133 6.133 0 0 1 1.364 7.5 6.132 6.132 0 0 1 7.5 1.364z"
  }), React__default.createElement("path", {
    d: "M10.056 10.74c.17 0 .341-.069.478-.205a.679.679 0 0 0 0-.972L8.18 7.211V3.58a.684.684 0 0 0-.681-.683.684.684 0 0 0-.682.682v4.193l2.761 2.762a.673.673 0 0 0 .477.204z"
  }));
};

Waiting.propTypes = {
  className: PropTypes.string
};
Waiting.defaultProps = {
  className: ''
};

var Loading = function Loading(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 17 17"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M7.856 2.833a.644.644 0 0 0 1.288 0V.773a.644.644 0 0 0-1.288 0v2.06zM7.856 16.227a.644.644 0 1 0 1.288 0V14.12a.644.644 0 1 0-1.288 0v2.107z"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M7.856 16.227a.644.644 0 1 0 1.288 0v-2.06a.644.644 0 1 0-1.288 0v2.06zM14.167 9.144h2.06a.644.644 0 1 0 0-1.288h-2.06a.644.644 0 1 0 0 1.288zM.773 9.144H2.88a.644.644 0 0 0 0-1.288H.773a.644.644 0 0 0 0 1.288z"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M.773 9.144h2.06a.644.644 0 0 0 0-1.288H.773a.644.644 0 0 0 0 1.288zM5.194 1.486l1.03 1.785-1.03-1.785zm0 0a.643.643 0 1 0-1.115.644l1.03 1.785.085-2.429zM10.751 13.688l1.054 1.826.112-.065-.111.065a.643.643 0 1 0 1.115-.644l-1.054-1.825a.644.644 0 0 0-1.115.644z"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M10.776 13.73a.644.644 0 0 1 .235-.88m-.235.88l1.03 1.784a.643.643 0 1 0 1.115-.644l-1.03-1.785a.644.644 0 0 0-.88-.235m-.235.88l1.03 1.784-1.03-1.785zm.235-.88l.065.111-.065-.111zM13.086 5.11l1.784-1.031.065.111-1.849.92zm0 0a.644.644 0 0 0-.236.879m.236-.88l-.236.88m0 0l.112-.065-.112.065zm2.664-.795a.644.644 0 0 0 .236-.88l-2.02 1.91 1.784-1.03zM1.25 12.685l2.704-.818a.644.644 0 1 0-.644-1.115l-1.825 1.054.065.111-.065-.111a.644.644 0 0 0-.236.88zm.88.236l1.824-1.054-1.89.943.065.111z"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M1.251 12.686a.644.644 0 0 1 .236-.88l1.784-1.03-2.02 1.91zm0 0a.643.643 0 0 0 .88.235l-.88-.235zM11.891 3.915l1.03-1.785-.11-.064.11.064a.643.643 0 0 0-.235-.88l-.065.112.065-.111a.643.643 0 0 0-.88.235l-1.03 1.784.111.065-.111-.064a.643.643 0 1 0 1.115.644zM4.315 15.75a.644.644 0 0 1-.236-.88l1.053-1.825a.643.643 0 0 1 .88-.236l-1.697 2.94zm0 0a.643.643 0 0 0 .32.086m-.32-.086l.32.086m.001 0a.643.643 0 0 0 .558-.322l1.054-1.825m-1.612 2.147l1.612-2.147m0 0a.644.644 0 0 0-.236-.88l.236.88z"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M4.079 14.87a.644.644 0 0 0 .235.88m-.235-.88l.111.064-.111-.064zm0 0l1.03-1.785a.644.644 0 1 1 1.115.644m-1.91 2.02l.907-2.6a.515.515 0 1 1 .892.516l-1.03 1.784m-.769.3a.64.64 0 0 0 .88-.235m-.88.235l.88-.235m1.03-1.785l-.11-.064.11.064zm0 0l-1.03 1.785-.111-.065m0 0l.111.065m-.111-.065l.111.065M13.086 11.891a.644.644 0 1 1 .644-1.115l1.784 1.03-2.428.085zm0 0l1.784 1.03m-1.784-1.03l1.784 1.03m0 0a.643.643 0 0 0 .644-1.115l-.644 1.115zM3.31 6.247L1.485 5.194 3.31 6.247zm0 0a.641.641 0 0 0 .88-.235m-.88.235l.644-1.115a.644.644 0 0 1 .236.88m0 0l-.112-.065.112.065z"
  }), React__default.createElement("path", {
    strokeWidth: ".25",
    d: "M1.361 4.379a.515.515 0 0 0 .189.704l1.784 1.03a.512.512 0 0 0 .704-.189.515.515 0 0 0-.189-.703L2.065 4.19a.514.514 0 0 0-.704.188zm0 0l-.111-.065a.644.644 0 0 0 .235.88m-.124-.815l-.112-.064a.643.643 0 0 1 .88-.236m0 0l1.785 1.03a.644.644 0 1 1-.644 1.115l.064-.111-.065.111L2.13 4.08zm0 0l-.644 1.115m0 0l.065-.111-.065.111z"
  }));
};

Loading.propTypes = {
  className: PropTypes.string
};
Loading.defaultProps = {
  className: ''
};

var Check = function Check(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 11 9"
  }), React__default.createElement("path", {
    fillRule: "evenodd",
    d: "M11 1.195L9.805 0 3.652 6.152 1.195 3.696 0 4.89l3.587 3.587.174-.174.065.065L11 1.195z",
    clipRule: "evenodd"
  }));
};

Check.propTypes = {
  className: PropTypes.string
};
Check.defaultProps = {
  className: ''
};

var LightBulb = function LightBulb(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    viewBox: "0 0 21 19"
  }), React__default.createElement("path", {
    d: "M10.4993 3.5625C10.8252 3.5625 11.1045 3.29036 11.1045 2.91927V0.643229C11.1045 0.296875 10.8485 0 10.4993 0C10.1501 0 9.89399 0.272135 9.89399 0.643229V2.91927C9.89399 3.29036 10.1733 3.5625 10.4993 3.5625ZM0.605279 11.8008H2.74704C3.04968 11.8008 3.35232 11.5286 3.35232 11.1576C3.35232 10.7865 3.09624 10.5143 2.74704 10.5143H0.605279C0.27936 10.5143 0 10.7865 0 11.1576C0 11.5286 0.25608 11.8008 0.605279 11.8008ZM20.3933 10.5391H18.2515C17.9256 10.5391 17.6462 10.8112 17.6462 11.1823C17.6462 11.5534 17.9023 11.8255 18.2515 11.8255H20.3933C20.7192 11.8255 20.9985 11.5534 20.9985 11.1823C21.0218 10.8112 20.7657 10.5391 20.3933 10.5391ZM16.0166 5.98698C16.1796 5.98698 16.3193 5.91276 16.4357 5.78906L17.9489 4.18099C18.2049 3.90885 18.2049 3.51302 17.9489 3.26562C17.6928 3.01823 17.3203 2.99349 17.0875 3.26562L15.5743 4.8737C15.3182 5.14583 15.3182 5.54167 15.5743 5.78906C15.6907 5.91276 15.8537 5.98698 16.0166 5.98698ZM4.56287 5.78906C4.67927 5.91276 4.81895 5.98698 4.98191 5.98698C5.14487 5.98698 5.28455 5.91276 5.40095 5.78906C5.65703 5.51693 5.65703 5.12109 5.40095 4.8737L3.88776 3.26562C3.63168 2.99349 3.2592 2.99349 3.0264 3.26562C2.77032 3.53776 2.77032 3.93359 3.0264 4.18099L4.56287 5.78906ZM4.81895 11.306C4.79567 7.99089 7.30991 5.26953 10.4061 5.24479H10.4527C13.5722 5.24479 16.133 7.91667 16.133 11.2318C16.133 12.7656 15.551 14.2995 14.55 15.388C13.968 16.0312 13.5955 16.8229 13.4791 17.6888C13.3627 18.431 12.7574 19 12.0357 19H8.91623C8.19455 19 7.58927 18.4557 7.47287 17.6888C7.35647 16.8229 6.96071 16.0065 6.40199 15.388C5.40095 14.2747 4.84223 12.8398 4.81895 11.306ZM8.98607 12.7409C9.38183 12.7409 9.75431 12.7409 10.1501 12.7409C10.1966 12.7409 10.2665 12.7409 10.313 12.7409C10.313 12.8151 10.313 12.8646 10.2897 12.9141C10.1966 13.4583 10.1035 14.0273 9.98711 14.5716C9.94055 14.8932 9.87071 15.1901 9.82415 15.5117C9.80087 15.6107 9.77759 15.7096 9.89399 15.7591C10.0104 15.8086 10.0569 15.7096 10.1035 15.6107C10.1035 15.6107 10.1035 15.6107 10.1035 15.5859C10.7786 14.3242 11.477 13.0872 12.1521 11.8255C12.2685 11.6029 12.222 11.5039 11.9892 11.5039C11.5934 11.5039 11.2209 11.5039 10.8252 11.5039C10.7786 11.5039 10.7088 11.5039 10.6622 11.5039C10.6622 11.4297 10.6622 11.3802 10.6855 11.3307C10.7786 10.7865 10.8717 10.2174 10.9881 9.67318C11.0347 9.35156 11.1045 9.05469 11.1511 8.73307C11.1744 8.63412 11.1977 8.53516 11.0813 8.48568C10.9649 8.4362 10.9183 8.53516 10.8717 8.63411C10.8717 8.63411 10.8717 8.63411 10.8717 8.65885C10.1966 9.92057 9.49823 11.1576 8.82311 12.4193C8.70671 12.6172 8.75327 12.7409 8.98607 12.7409Z"
  }));
};

LightBulb.propTypes = {
  className: PropTypes.string
};
LightBulb.defaultProps = {
  className: ''
};

var Drag = function Drag(_ref) {
  var className = _ref.className,
      rest = _objectWithoutProperties(_ref, ["className"]);

  return React__default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg"
  }, rest, {
    className: className,
    fill: "currentColor",
    stroke: "currentColor",
    viewBox: "0 0 8 8"
  }), React__default.createElement("circle", {
    cx: "1.5",
    cy: "1.5",
    r: "1.5"
  }), React__default.createElement("circle", {
    cx: "6.5",
    cy: "1.5",
    r: "1.5"
  }), React__default.createElement("circle", {
    cx: "1.5",
    cy: "6.5",
    r: "1.5"
  }), React__default.createElement("circle", {
    cx: "6.5",
    cy: "6.5",
    r: "1.5"
  }));
};

Drag.propTypes = {
  className: PropTypes.string
};
Drag.defaultProps = {
  className: ''
};



var SVGIcons = /*#__PURE__*/Object.freeze({
  Analytics: Analytics,
  Bell: Bell,
  BellRedDot: BellRedDot,
  CalendarClock: CalendarClock,
  Home: Home,
  Mail: Mail,
  Notepad: Notepad,
  Notification: Notification,
  Plus: Plus,
  Minus: Minus,
  LogOut: LogOut,
  Left: Left,
  Right: Right,
  Close: Close,
  Facebook: Facebook,
  Recorder: Recorder,
  Stop: Stop,
  Play: Play,
  Volume: Volume,
  Pause: Pause,
  ApprovedFile: ApprovedFile,
  LookupFile: LookupFile,
  NewFile: NewFile,
  People: People,
  Person: Person,
  RecentFile: RecentFile,
  RejectedFile: RejectedFile,
  Wallet: Wallet,
  SettingGear: SettingGear,
  EcoSystem: EcoSystem,
  Feedback: Feedback,
  LeftThinArrow: LeftThinArrow,
  Waiting: Waiting,
  Loading: Loading,
  Check: Check,
  LightBulb: LightBulb,
  Drag: Drag
});

var Wrapper = styled__default.i.withConfig({
  displayName: "Icon__Wrapper",
  componentId: "ddlc3a-0"
})(["display:inline-block;text-align:center;line-height:0;vertical-align:-0.125em;& > svg{--current-background:", ";}"], function (props) {
  return props.currentBackground;
});
/**
 * SVG Icon component
 */

var Icon = function Icon(_ref) {
  var type = _ref.type,
      className = _ref.className,
      currentBackground = _ref.currentBackground,
      rest = _objectWithoutProperties(_ref, ["type", "className", "currentBackground"]);

  var SVGIcon = SVGIcons[type];
  return React__default.createElement(Wrapper, {
    className: className,
    currentBackground: currentBackground
  }, SVGIcon ? React__default.createElement(SVGIcon, _extends({
    width: "1em",
    height: "1em"
  }, rest)) : "Missing icon of type ".concat(type));
};

Icon.propTypes = {
  /** Custom class name */
  className: PropTypes.string,

  /** Current background color of the icon, useful if the icon needs current background color to create transparent effect */
  currentBackground: PropTypes.string,

  /** Icon type, must exported from SVGIcons */
  type: PropTypes.string.isRequired
};
Icon.defaultProps = {
  className: '',
  currentBackground: '#ffffff'
};

var MenuIcon = styled__default(Icon).withConfig({
  displayName: "MenuItem__MenuIcon",
  componentId: "sc-18jf3fc-0"
})(["margin-right:20px;color:", ";transition:0.3s ", ";"], function (props) {
  return props.theme.sideBar.menuTextColor;
}, function (props) {
  return props.theme.transitionTiming;
});
var Label = styled__default.span.withConfig({
  displayName: "MenuItem__Label",
  componentId: "sc-18jf3fc-1"
})(["color:", ";font-size:1.125rem;line-height:1.41;text-overflow:ellipsis;overflow:hidden;width:164px;white-space:nowrap;opacity:1;transition:0.3s ", ";"], function (props) {
  return props.theme.sideBar.menuTextColor;
}, function (props) {
  return props.theme.transitionTiming;
});
var Gutter = styled__default.div.withConfig({
  displayName: "MenuItem__Gutter",
  componentId: "sc-18jf3fc-2"
})(["display:flex;align-items:center;width:52px;transition:0.3s ", ";&:before{content:'';display:block;width:20px;height:2px;opacity:0;transition:0.3s ", ";background:", ";}"], function (props) {
  return props.theme.transitionTiming;
}, function (props) {
  return props.theme.transitionTiming;
}, function (props) {
  return props.theme.sideBar.gutterColor;
});
var Action = styled__default.button.withConfig({
  displayName: "MenuItem__Action",
  componentId: "sc-18jf3fc-3"
})(["flex:auto;display:flex;align-items:center;text-decoration:none;margin:0;padding:0;border:none;background:none;outline:none;text-align:left;cursor:pointer;&:hover,&:focus{", ",", "{color:", ";}}"], MenuIcon, Label, function (props) {
  return props.theme.sideBar.menuTextHoverColor;
});
var Wrapper$1 = styled__default.li.withConfig({
  displayName: "MenuItem__Wrapper",
  componentId: "sc-18jf3fc-4"
})(["display:flex;", " ", ""], function (_ref) {
  var active = _ref.active;
  return active && styled.css(["", ":before{opacity:1;}", ",", "{color:", ";}"], Gutter, MenuIcon, Label, function (props) {
    return props.theme.sideBar.menuTextHoverColor;
  });
}, function (_ref2) {
  var collapsed = _ref2.collapsed;
  return collapsed && styled.css(["", "{width:28px;&:before{width:14px;}}", "{max-width:0;opacity:0;}"], Gutter, Label);
});

var MenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(MenuItem).apply(this, arguments));
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          theme = _this$props.theme,
          icon = _this$props.icon,
          label = _this$props.label,
          to = _this$props.to,
          exact = _this$props.exact,
          className = _this$props.className,
          collapsed = _this$props.collapsed,
          onClick = _this$props.onClick,
          rest = _objectWithoutProperties(_this$props, ["active", "theme", "icon", "label", "to", "exact", "className", "collapsed", "onClick"]);

      return React__default.createElement(reactRouterDom.Route, {
        path: to,
        exact: exact,
        children: function children(_ref3) {
          var match = _ref3.match;
          return React__default.createElement(Wrapper$1, _extends({}, rest, {
            className: className,
            active: active || match && to,
            collapsed: collapsed
          }), React__default.createElement(Gutter, null), React__default.createElement(Action, {
            as: to ? reactRouterDom.Link : 'button',
            to: to,
            onClick: onClick
          }, React__default.createElement(MenuIcon, {
            type: icon,
            insideColor: theme.sideBar.backgroundColor
          }), React__default.createElement(Label, null, label)));
        }
      });
    }
  }]);

  return MenuItem;
}(React__default.Component);

_defineProperty(MenuItem, "propTypes", {
  theme: PropTypes.shape({
    sideBar: PropTypes.object
  }).isRequired,
  icon: PropTypes.string,
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool
});

_defineProperty(MenuItem, "defaultProps", {
  icon: '',
  label: '',
  exact: false,
  className: '',
  collapsed: false,
  active: false,
  onClick: function onClick() {}
});

var MenuItem$1 = styled.withTheme(MenuItem);

var StyledMenuItem = styled__default(MenuItem$1).withConfig({
  displayName: "Menu__StyledMenuItem",
  componentId: "sc-1x0rufb-0"
})([""]);
var Wrapper$2 = styled__default.ul.withConfig({
  displayName: "Menu__Wrapper",
  componentId: "sc-1x0rufb-1"
})(["margin:0;padding:0;", " + ", "{margin-top:30px;}"], StyledMenuItem, StyledMenuItem);

var Menu =
/*#__PURE__*/
function (_Component) {
  _inherits(Menu, _Component);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          collapsed = _this$props.collapsed,
          children = _this$props.children;
      return React__default.createElement(Wrapper$2, {
        className: className
      }, React__default.Children.map(children, function (child) {
        return React__default.cloneElement(child, {
          collapsed: collapsed
        });
      }));
    }
  }]);

  return Menu;
}(React.Component);

_defineProperty(Menu, "propTypes", {
  className: PropTypes.string,
  collapsed: PropTypes.bool,
  children: PropTypes.node.isRequired
});

_defineProperty(Menu, "defaultProps", {
  className: '',
  collapsed: false
});

_defineProperty(Menu, "Item", StyledMenuItem);

var Logo = styled__default.div.withConfig({
  displayName: "Logo",
  componentId: "sc-1y9tw55-0"
})(["display:flex;justify-content:center;align-items:center;margin:44px 0 ", " 0;height:", ";& > img{height:100%;}"], function (props) {
  return props.collapsed ? '35px' : '0';
}, function (props) {
  return props.collapsed ? '40px' : '75px';
});

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formular from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = hue % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
  /**
   * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
   * @private
   */

};

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
var rgbaRegex = /^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/;
var hslaRegex = /^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new Error('Passed an incorrect argument to a color function, please pass a string representation of a color.');
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor);

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + rgbColorString + ".");
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor);

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new Error("Couldn't generate valid rgb string from " + normalizedColor + ", it returned " + _rgbColorString + ".");
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4])
    };
  }

  throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.");
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new Error('Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new Error('Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new Error('Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).');
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new Error('Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).');
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};

var errMsg = 'Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.';
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */

function toColorString(color) {
  if (typeof color !== 'object') throw new Error(errMsg);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new Error(errMsg);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated along
 * the color wheel.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    hue: (hslColor.hue + parseFloat(degree)) % 360
  }));
} // prettier-ignore


var curriedAdjustHue =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(adjustHue);

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(darken);

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDesaturate =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(desaturate);

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(lighten);

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  var parsedColor1 = parseToRgb(color);

  var color1 = _extends$1({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = _extends$1({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1 // The formular is copied from the original Sass implementation:
    // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method

  });

  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha + (color2.alpha - color1.alpha) * (parseFloat(weight) / 1.0)
  };
  return rgba(mixedColor);
} // prettier-ignore


var curriedMix =
/*#__PURE__*/
curry
/* ::<number | string, string, string, string> */
(mix);

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedOpacify =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(opacify);

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  var hslColor = parseToHsl(color);
  return toColorString(_extends$1({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore


var curriedSaturate =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(saturate);

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  return toColorString(_extends$1({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore


var curriedSetHue =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setHue);

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  return toColorString(_extends$1({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore


var curriedSetLightness =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setLightness);

/**
 * Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  return toColorString(_extends$1({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore


var curriedSetSaturation =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(setSaturation);

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore


var curriedShade =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(shade);

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  return curriedMix(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore


var curriedTint =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(tint);

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = _extends$1({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 - parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize =
/*#__PURE__*/
curry
/* ::<number | string, string, string> */
(transparentize);

var SmallIcon = styled__default(Icon).withConfig({
  displayName: "Toggler__SmallIcon",
  componentId: "sc-1169tv7-0"
})(["font-size:0.6rem;color:rgb(107,119,140);vertical-align:middle;"]);
var IndicatorLine = styled__default.div.withConfig({
  displayName: "Toggler__IndicatorLine",
  componentId: "sc-1169tv7-1"
})(["display:none;width:2px;height:100%;background:", ";"], function (props) {
  return curriedTransparentize(0.6, props.theme.primaryColor);
});
var IndicatorIcon = styled__default.div.withConfig({
  displayName: "Toggler__IndicatorIcon",
  componentId: "sc-1169tv7-2"
})(["display:none;position:absolute;top:52px;transform:translate(-50%);width:24px;height:24px;border-radius:50%;background:", ";box-shadow:rgba(9,30,66,0.08) 0px 0px 0px 1px,rgba(9,30,66,0.08) 0px 2px 4px 1px;"], function (props) {
  return props.theme.whiteColor;
});
var TogglerWrapper = styled__default.div.withConfig({
  displayName: "Toggler__TogglerWrapper",
  componentId: "sc-1169tv7-3"
})(["position:absolute;left:100%;transform:translateX(-50%);width:28px;height:100%;text-align:center;overflow-y:hidden;cursor:pointer;&:hover{", ",", "{display:inline-block;}}"], IndicatorLine, IndicatorIcon);

var Toggler = function Toggler(_ref) {
  var collapsed = _ref.collapsed,
      className = _ref.className,
      onToggle = _ref.onToggle;
  return React__default.createElement(TogglerWrapper, {
    className: className,
    type: "button",
    onClick: onToggle
  }, React__default.createElement(IndicatorLine, {
    collapsed: collapsed
  }), React__default.createElement(IndicatorIcon, {
    collapsed: collapsed
  }, React__default.createElement(SmallIcon, {
    type: collapsed ? 'Left' : 'Right'
  })));
};

Toggler.propTypes = {
  collapsed: PropTypes.bool,
  className: PropTypes.string,
  onToggle: PropTypes.func.isRequired
};
Toggler.defaultProps = {
  collapsed: false,
  className: ''
};

var Title = styled__default.h1.withConfig({
  displayName: "Title",
  componentId: "sc-1mas6x3-0"
})(["position:relative;margin:44px 0 30px 0;padding-left:44px;height:22px;font-size:1rem;font-weight:normal;line-height:1.41;color:", ";transition:0.2s ", ";&:before{content:'';margin:0 auto;display:inline-block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20px;height:1px;background:#dfdfdf;opacity:0;transition:0.4s ", ";}", ""], function (props) {
  return props.theme.appTitleColor;
}, function (props) {
  return props.theme.transitionTiming;
}, function (props) {
  return props.theme.transitionTiming;
}, function (_ref) {
  var collapsed = _ref.collapsed;
  return collapsed && styled.css(["font-size:0;padding:0;&:before{opacity:1;}"]);
});

var Wrapper$3 = styled__default.nav.withConfig({
  displayName: "Sidebar__Wrapper",
  componentId: "xrpc7j-0"
})(["display:flex;flex-direction:column;flex:0 0 ", ";max-width:", ";min-width:", ";width:", ";transition:all 0.2s;position:relative;background:", ";box-shadow:0 0 4px 0 ", ";"], function (props) {
  return props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width;
}, function (props) {
  return props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width;
}, function (props) {
  return props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width;
}, function (props) {
  return props.collapsed ? props.theme.sideBar.collapsedWidth : props.theme.sideBar.width;
}, function (props) {
  return props.theme.sideBar.backgroundColor;
}, function (props) {
  return props.theme.sideBar.shadowColor;
});
var FooterMenu = styled__default(Menu).withConfig({
  displayName: "Sidebar__FooterMenu",
  componentId: "xrpc7j-1"
})(["margin:30px 0;"]);

var SideBar =
/*#__PURE__*/
function (_Component) {
  _inherits(SideBar, _Component);

  function SideBar(props) {
    var _this;

    _classCallCheck(this, SideBar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SideBar).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggle", function () {
      return _this.setState(function (_ref) {
        var collapsed = _ref.collapsed;
        return {
          collapsed: !collapsed
        };
      });
    });

    var defaultCollapsed = _this.props.defaultCollapsed;
    _this.state = {
      collapsed: defaultCollapsed
    };
    return _this;
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logoCollapsed = _this$props.logoCollapsed,
          logo = _this$props.logo,
          menu = _this$props.menu,
          footerMenu = _this$props.footerMenu;
      var collapsed = this.state.collapsed;
      return React__default.createElement(Wrapper$3, {
        collapsed: collapsed
      }, React__default.createElement(Logo, {
        collapsed: collapsed
      }, React__default.createElement("img", {
        src: collapsed ? logoCollapsed : logo,
        alt: "Logo"
      })), React__default.createElement(Toggler, {
        collapsed: collapsed,
        onToggle: this.handleToggle
      }), menu.map(function (group) {
        return React__default.createElement(React__default.Fragment, {
          key: group.name
        }, React__default.createElement(Title, {
          collapsed: collapsed
        }, group.name), React__default.createElement(Menu, {
          collapsed: collapsed
        }, group.items.map(function (Item) {
          return Item;
        })));
      }), footerMenu.length > 0 && React__default.createElement(FooterMenu, {
        collapsed: collapsed
      }, footerMenu.map(function (MenuItemComponent) {
        return MenuItemComponent;
      })));
    }
  }]);

  return SideBar;
}(React.Component);

_defineProperty(SideBar, "propTypes", {
  defaultCollapsed: PropTypes.bool,
  menu: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.Component)
  })),
  footerMenu: PropTypes.arrayOf(PropTypes.Component),
  logo: PropTypes.string,
  logoCollapsed: PropTypes.string
});

_defineProperty(SideBar, "defaultProps", {
  defaultCollapsed: false,
  menu: [],
  footerMenu: [],
  logo: '',
  logoCollapsed: ''
});

exports.theme = theme;
exports.Icon = Icon;
exports.Menu = Menu;
exports.MenuItem = MenuItem$1;
exports.Sidebar = SideBar;
