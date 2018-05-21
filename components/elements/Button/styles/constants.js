import {
  fontSize,
  baseModule,
} from '../../../../styles/utils/variables/variables';
import { defaultTheme } from '../../../../styles/theme';

export const buttonConstants = {
  functionFactor: 0.15,
};

export const buttonSizeConstants = {
  small: {
    lineHeight: 1,
    fontSize: fontSize['-1'],
    paddingY: 0,
    textPaddingY: baseModule[1],
    
    subtitleFontSize: fontSize['-1'],
    subtitleLineHeight: 1,
  },
  normal: {
    lineHeight: 1.25,
    fontSize: fontSize[0],
    paddingY: 0,
    textPaddingY: baseModule[1],
    
    subtitleFontSize: fontSize[0],
    subtitleLineHeight: 1.25,
  },
  large: {
    lineHeight: 1.15,
    fontSize: fontSize[1],
    paddingY: 0,
    textPaddingY: baseModule['1.5'],
    
    subtitleFontSize: fontSize[1],
    subtitleLineHeight: 1.15,
  },
};

export const buttonHeightConstants = {
  buttonSmallMinHeight:
  buttonSizeConstants.small.lineHeight * buttonSizeConstants.small.fontSize
  + (buttonSizeConstants.small.paddingY
  + buttonSizeConstants.small.textPaddingY) * 2,
  
  buttonNormalMinHeight:
  buttonSizeConstants.normal.lineHeight * buttonSizeConstants.normal.fontSize
  + (buttonSizeConstants.normal.paddingY
  + buttonSizeConstants.normal.textPaddingY) * 2,
  
  buttonLargeMinHeight:
  buttonSizeConstants.large.lineHeight * buttonSizeConstants.large.fontSize
  + (buttonSizeConstants.large.paddingY
  + buttonSizeConstants.large.textPaddingY) * 2,
};

export const buttonColorConstants = {
  primary: {
    backgroundColor: defaultTheme.color.main,
    fontColor: defaultTheme.color.mainFgTextColor,
  },
  
  secondary: {
    backgroundColor: defaultTheme.color.secondary,
    fontColor: defaultTheme.color.secondaryFgTextColor,
  },
  
  alert: {
    backgroundColor: defaultTheme.color.alert,
    fontColor: defaultTheme.color.alertFgTextColor,
  },
  
  success: {
    backgroundColor: defaultTheme.color.success,
    fontColor: defaultTheme.color.successFgTextColor,
  },
  
  warning: {
    backgroundColor: defaultTheme.color.warning,
    fontColor: defaultTheme.color.warningFgTextColor,
  },
  
  info: {
    backgroundColor: defaultTheme.color.info,
    fontColor: defaultTheme.color.infoFgTextColor,
  },
  
  link: {
    backgroundColor: defaultTheme.color.transparent,
    fontColor: defaultTheme.colorAnchor,
  },
};
