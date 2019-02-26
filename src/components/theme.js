const primaryColor = '#d14242';
const primaryDarkColor = '#9c2c23';
const tertiaryColor = '#999999';
const muteColor = '#dadada';
const textMuteColor = '#9b9b9b';
const whiteColor = '#ffffff';
const lightWhiteColor = '#fafafa';
const blackColor = '#000000';
const darkGrey = '#efefef';

export default {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  mainPadding: '60px',
  whiteColor,
  lightWhiteColor,
  primaryColor,
  primaryDarkColor,
  tertiaryColor,
  muteColor,
  backgroundColor: '#fbfbfb',
  darkBackgroundColor: darkGrey,
  appTitleColor: '#c2c4ca',
  textColor: '#232323',
  textMuteColor,
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
    gutterColor: blackColor,
  },
  button: {
    primaryColor,
    tertiaryColor,
    hoverColor: primaryDarkColor,
    disabledColor: muteColor,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
  },
  textInput: {
    borderColor: '#dfe1e6',
    placeHolderColor: '#1b2733',
    disabledColor: '#fbfbfb',
    labelColor: '#1b2733',
  },
  popup: {
    backgroundColor: whiteColor,
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    width: '694px',
    widthMobile: '80%',
    textMaxWidth: '394px',
    closeIconColor: '#9b9b9b',
    backdropColor: '#c4c4c488',
    transitionDuration: 0.2,
  },
  audioPlayer: {
    primaryColor,
    backgroundColor: '#f7f9fa',
    textColor: '#1b2733',
    borderColor: '#d0d4d9',
    volumeMuteColor: muteColor,
    volumeColor: '#7B8993',
    progressBarBackgroundColor: '#d0d4d9',
    gutter: '10px',
  },
};
