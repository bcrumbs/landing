// SIZE
export const baseModule = {
  '1/2': 4,
  1: 8,
  '1.5': 8,
  2: 16,
  3: 24,
  4: 32,
};

export const border = {
  radius: {
    default: 2,
    rounded: 1000,
  },
};

// COLORS
export const basicColors = {
  white: '#ffffff',
  black: '#000000',
  red: '#f04124',
  yellow: '#f0b900',
  green: '#43AC6A',
  lightblue: '#d9edf7',
  darkblue: '#3A7FC2',
  transparent: 'hsla(0, 0%, 100%, 0)',
};

export const themeColors = {
  main: '#DE4F52',
  secondary: '#3A7FC2',
  alert: basicColors.red,
  warning: basicColors.yellow,
  success: basicColors.green,
  info: basicColors.lightblue,
};

export const greyPalette = {
  50: '#fafafa',
  75: '#f7f7f7',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
};

export const blueGreyPalette = {
  100: '#ECEFF7',
  400: '#B8C0D6',
  600: '#6f6d7d',
  800: '#1B2A49',
};

// FONT
export const fontFamily = {
  sansSerif: "Lato, 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
  serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
  monospace: "Consolas, 'Liberation Mono', Courier, monospace",
};

export const fontWeight = {
  light: '400',
  normal: '400',
  semibold: '600',
  bold: '700',
};

export const fontSize = {
  '-2': 12,
  '-1': 16,
  0: 20,
  1: 25,
  2: 31,
  3: 39,

  4: 48,
  5: 62,
  6: 88,
  7: 110,
};

export const body = {
  fontColor: blueGreyPalette[800],
  fontColorAlt: basicColors.white,
};
