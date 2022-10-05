import tinycolor from 'tinycolor2';

const colorNeutral1 = '#f6f7fb';
const colorNeutral2 = '#f2f2f2';
const colorNeutral3 = '#e9e9e9';
const colorNeutral4 = '#d9d9d9';
const colorNeutral5 = '#B5B5B5';
const colorNeutral6 = '#999999';
const colorNeutral7 = '#595959';
const colorNeutral8 = '#444444';
const colorNeutral9 = '#ff0000';

const colorBg = '#F6F7F9';

const colorWhite = '#FFFFFF';
const colorBlack = '#000000';

const colorBlue = '#0768fd';
const colorPurple = '#9e54b0';
const colorOrange = '#ff9300';
const colorGreen = '#00c221';
const colorFuchsia = '#df216d';
const colorRed = '#e20000';
const colorDarkBlue = '#10558a';
const colorPrimaryDark = '#0557d5';

// ****************************
// Color Dark used mostly in Menus
// ****************************
const colorDarkPurple = '#20014D';
const colorDarkmidPurple = '#3D2566';
const colorLightPurple = '#b1a4c2';
const colorlightBlue = '#ecf3ff';
const colorVeryLightBlue = '#ecf3ff';

const colorThemeNeptunePrimary = '#297dfd';

const grdientColor = `linear-gradient(90deg, ${
  colorDarkPurple
} 30%, rgba(14,68,136,1) 51%, rgba(0,112,169,1) 100%)`;

// ****************************
// Standard Colors
// ****************************

const primary = colorBlue;
const secondary = '#FFFFFF';
const warning = colorOrange;
const success = colorGreen;
const info = colorPurple;
const error = colorRed;
const message = colorWhite;
const formHighLightColor = colorVeryLightBlue;

const lightenRate = 7.5;

// ****************************
// Data Visualization Colors
// ****************************

const colorDataViz1 = colorPurple;
const colorDataViz2 = colorBlue;
const colorDataViz3 = colorOrange;
const colorDataViz4 = colorFuchsia;
const colorDataViz5 = colorGreen;
const colorDataViz6 = colorDarkBlue;

const primaryHover = '#0548af';
const primaryDisabledBackground = '#b4d0fb !important';
const secondaryBorder = '1px solid #d8d7d7';
const secondaryHoverBorder = '1px solid #1A73FE';
const secondaryHoverDisabledBorder = '1px solid #d8d7d7';
const secondaryTextColor = '#1A73FE';
const disabledLinkColor = 'rgba(255, 255, 255, 0.35) !important';
const disabledButtonHover = '#e0e0e0 !important';
const navLineHeight = '18px';
const tableHeaderColor = '#f3f3f3c9 !important';
const secondaryHoverColor = '#ecf4ff';
const secondaryDisabledTextColor = '#b3cff7';

// ****************************
// Extra Colors
// ****************************
const pattensBlue = '#d8e7fe';

export default {
  spacing: 4,
  mobilespacing: 1,
  palette: {
    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightenRate).toHexString(),
    },
    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightenRate).toHexString(),
    },
    warning: {
      main: warning,
      light: tinycolor(warning).lighten(lightenRate).toHexString(),
    },
    success: {
      main: success,
      light: tinycolor(success).lighten(lightenRate).toHexString(),
    },
    error: {
      main: error,
      light: tinycolor(error)
        .lighten(lightenRate)
        .toHexString(),
    },
    info: {
      main: info,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
    },
    message: {
      main: message,
      content: colorBlack,
      light: tinycolor(info)
        .lighten(lightenRate)
        .toHexString(),
    },
    inherit: {
      main: 'inherit',
      light: tinycolor('inherit').lighten('inherit').toHexString(),
    },
    colorBlue: {
      main: colorBlue,
      light: tinycolor(colorBlue).lighten(lightenRate).toHexString(),
    },
    colorGreen: {
      main: colorGreen,
      light: tinycolor(colorGreen).lighten(lightenRate).toHexString(),
    },
    colorFuchsia: {
      main: colorFuchsia,
      light: tinycolor(colorFuchsia).lighten(lightenRate).toHexString(),
    },
    colorOrange: {
      main: colorOrange,
      light: tinycolor(colorOrange).lighten(lightenRate).toHexString(),
    },
    colorPurple: {
      main: colorPurple,
      light: tinycolor(colorPurple).lighten(lightenRate).toHexString(),
    },
    colorBlack: {
      main: colorBlack,
      light: tinycolor(colorBlack).lighten(lightenRate).toHexString(),
    },
    colorWhite: {
      main: colorWhite,
      light: tinycolor(colorWhite).lighten(lightenRate).toHexString(),
    },
    colorDataViz1: {
      main: colorDataViz1,
      light: tinycolor(colorDataViz1).lighten(lightenRate).toHexString(),
    },
    colorDataViz2: {
      main: colorDataViz2,
      light: tinycolor(colorDataViz2).lighten(lightenRate).toHexString(),
    },
    colorDataViz3: {
      main: colorDataViz3,
      light: tinycolor(colorDataViz3).lighten(lightenRate).toHexString(),
    },
    colorDataViz4: {
      main: colorDataViz4,
      light: tinycolor(colorDataViz4).lighten(lightenRate).toHexString(),
    },
    colorDataViz5: {
      main: colorDataViz5,
      light: tinycolor(colorDataViz5).lighten(lightenRate).toHexString(),
    },
    colorDataViz6: {
      main: colorDataViz6,
      light: tinycolor(colorDataViz6).lighten(lightenRate).toHexString(),
    },
    colorDarkPurple: {
      main: colorDarkPurple,
      light: tinycolor(colorDarkPurple).lighten(lightenRate).toHexString(),
    },
    colorDarkmidPurple: {
      main: colorDarkmidPurple,
      light: tinycolor(colorDarkmidPurple).lighten(lightenRate).toHexString(),
    },
    colorLightPurple: {
      main: colorLightPurple,
      light: tinycolor(colorLightPurple).lighten(lightenRate).toHexString(),
    },
    colorlightBlue: {
      main: colorlightBlue,
    },
    colorVeryLightBlue: {
      main: colorVeryLightBlue,
    },
    colorPrimaryDark: {
      main: colorPrimaryDark,
    },
    formHighLightColor: {
      main: formHighLightColor,
      light: tinycolor(formHighLightColor).lighten(lightenRate).toHexString(),
    },
    colorThemeNeptunePrimary: {
      main: colorThemeNeptunePrimary,
      light: tinycolor(colorThemeNeptunePrimary)
        .lighten(lightenRate)
        .toHexString(),
    },
    colorPattensBlue: {
      main: pattensBlue,
    },
    text: {
      primary: '#595959',
      secondary: '#6E6E6E',
      hint: '#B9B9B9',
    },
    background: {
      default: '#FFFFFF',
      light: '#F3F5FF',
    },
    sideMenuColor: {
      background: colorDarkPurple,
      hover: colorDarkmidPurple,
      main: colorLightPurple,
    },
    gradient: {
      main: grdientColor,
    },
    colorNeutral1: {
      main: colorNeutral1,
    },
    colorNeutral2: {
      main: colorNeutral2,
    },
    colorNeutral3: {
      main: colorNeutral3,
    },
    colorNeutral4: {
      main: colorNeutral4,
    },
    colorNeutral5: {
      main: colorNeutral5,
    },
    colorNeutral6: {
      main: colorNeutral6,
    },
    colorNeutral7: {
      main: colorNeutral7,
    },
    colorNeutral8: {
      main: colorNeutral8,
    },
    colorNeutral9: {
      main: colorNeutral9,
    },
    colorBg: {
      main: colorBg,
    },
    colorN: {
      main: colorNeutral4,
    },
    secondaryBorder,
    secondaryTextColor,
    primaryHover,
    secondaryHoverBorder,
    disabledLinkColor,
    disabledButtonHover,
    navLineHeight,
    tableHeaderColor,
    secondaryHoverColor,
    secondaryHoverDisabledBorder,
    secondaryDisabledTextColor,
    primaryDisabledBackground,
  },
  customShadows: {
    widget: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    widgetDark: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    widgetWide: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    widgetButton: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    primaryButton: '0 4px 8px 0 rgba(7, 104, 253, 0.32), 0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    secondaryButton: '0 4px 16px 0 rgba(0, 0, 0, 0.04)',
    chartTooltip: '0 16px 16px 0 rgba(0, 0, 0, 0.24)',
    blade: '0 8px 20px 0 rgba(0, 0, 0, 0.08);',
    card: '0 4px 16px 0 rgba(0, 0, 0, 0.16)',
    paper: '0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A',
  },
  notificationMenu: {
    menu: {
      shadow: '0 8px 20px 0 rgba(0, 0, 0, 0.08)',
    },
  },
  tabs: {
    indicator: {
      shadow:
        '0 4px 8px 0 rgba(7, 104, 253, 0.08), 0 4px 8px 0 rgba(0, 0, 0, 0.08)',
    },
    overflowBackground: colorNeutral6,
    overflowHover: primaryHover,
    overflowArrow: colorBlack,
  },
};
