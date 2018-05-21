import {
  baseModule,
  basicColors,
  themeColors,
  border,
  body,
  greyPalette,
  blueGreyPalette,
  fontWeight,
  fontSize,
  fontFamily,
} from './utils/variables/variables';
import { colorsFgCalculated } from './utils/variables/variablesCalculated';

export const defaultTheme = {
  baseModule: {...baseModule},
  contentWidth: 1360,
  totalColumns: 12,
  columnGutter: baseModule[2],
  
  radiusDefault: border.radius.default,
  radiusRounded: border.radius.rounded,
  
  breakpoints: {
    xsmall: 480,
    small: 640,
    medium: 960,
    large: 1280,
    xlarge: 1440,
    xxlarge: 1920,
  },
  
  color: {
    white: basicColors.white,
    black: basicColors.black,
    transparent: basicColors.transparent,
    
    main: themeColors.main,
    mainFgTextColor: colorsFgCalculated.main,
    secondary: themeColors.secondary,
    secondaryFgTextColor: colorsFgCalculated.secondary,
    
    alert: themeColors.alert,
    alertFgTextColor: colorsFgCalculated.alert,
    warning: themeColors.warning,
    warningFgTextColor: colorsFgCalculated.warning,
    success: themeColors.success,
    successFgTextColor: colorsFgCalculated.success,
    info: themeColors.info,
    infoFgTextColor: colorsFgCalculated.info,
  },
  
  colorPaletteGrey: { ...greyPalette },
  colorPaletteBlueGrey: { ...blueGreyPalette },
  
  colorBorder: greyPalette[300],
  colorAnchor: basicColors.darkblue,
  
  colorBrand: {
    facebook: '#3b5998',
    vkontakte: '#45668e',
    googlePlus: '#dd4b39',
  },
  
  colorProjects: {
    reactackle: '#F08680',
  },
  
  baseFontSize: '100%',
  baseLineHeight: 1.54,
  
  fontFamily: {
    sansSerif:
      "'Open Sans', 'Helvetica Neue', Helvetica, Roboto, Arial, sans-serif",
    serif: "Georgia, Cambria, 'Times New Roman', Times, serif",
    monospace: "Consolas, 'Liberation Mono', Courier, monospace",
  },
  
  fontWeight: { ...fontWeight },
  
  fontSize: { ...fontSize },
  
  fontColor: {
    light: greyPalette[300],
    medium: greyPalette[500],
  },
  
  direction: {
    text: 'ltr',
    float: 'left',
  },
  
  zIndex: {
    moon: 9999,
    tooltip: 9990,
    alertDesktop: 9000,
    popup: 8700,
    modal: 8500,
    overlay: 8000,
    dropdown: 7000,
    alertMobile: 5000,
    nav: 500,
    base: 1,
  },
  
  body: {
    bgColor: blueGreyPalette[100],
    fontSize: fontSize[0],
    fontColor: body.fontColor,
    fontColorAlt: body.fontColorAlt,
    fontFamily: fontFamily.sansSerif,
    fontWeight: fontWeight.normal,
    lineHeight: 1.5,
  },
};
