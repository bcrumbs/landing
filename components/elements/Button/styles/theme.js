import Color from 'color';
import { baseModule } from '../../../../styles/utils/variables/variables';
import { defaultTheme } from '../../../../styles/theme';
import {
  buttonConstants,
  buttonSizeConstants,
  buttonHeightConstants,
  buttonColorConstants,
} from './constants';

export const buttonDefaults = {
  functionFactor: buttonConstants.functionFactor,
  iconOpacity: 1,
  
  borderRadiusDefault: defaultTheme.radiusDefault,
  borderStyle: 'solid',
  borderWidth: 1,
  
  disabled: {
    backgroundColor: defaultTheme.colorPaletteGrey[100],
    fontColor: defaultTheme.fontColor.medium,
  },
  
  text: {
    fontSize: buttonSizeConstants.normal.fontSize,
    fontFamily: defaultTheme.body.fontFamily,
    fontAlign: defaultTheme.direction.float,
    fontWeight: defaultTheme.fontWeight.semibold,
    lineHeight: buttonSizeConstants.normal.lineHeight,
    
    textTransform: 'uppercase',
    
    colorLight: defaultTheme.color.white,
    colorDark: defaultTheme.color.black,
  },
  
  subtitle: {
    fontColor: 'inherit',
    fontOpacity: 0.9,
    fontWeight: defaultTheme.fontWeight.normal,
    textTransform: 'none',
    
    subtitleTitleSpacing: baseModule['1/2'],
  },
  
  size: {
    small: {
      fontSize: buttonSizeConstants.small.fontSize,
      lineHeight: buttonSizeConstants.small.lineHeight,
      
      paddingY: buttonSizeConstants.small.paddingY,
      paddingX: baseModule[1],
      narrowPaddingX: 0,
      roundedPaddingX: baseModule[2],
      
      textPaddingY: buttonSizeConstants.small.textPaddingY,
      textPaddingX: baseModule[1],
      minHeight: buttonHeightConstants.buttonSmallMinHeight,
      
      subtitleFontSize: buttonSizeConstants.small.subtitleFontSize,
      subtitleLineHeight: buttonSizeConstants.small.subtitleLineHeight,
    },
    
    normal: {
      fontSize: buttonSizeConstants.normal.fontSize + 1,
      lineHeight: buttonSizeConstants.normal.lineHeight,
      paddingX: baseModule[1],
      narrowPaddingX: 0,
      roundedPaddingX: baseModule[2],
      paddingY: buttonSizeConstants.normal.paddingY,
      textPaddingY: buttonSizeConstants.normal.textPaddingY,
      textPaddingX: baseModule[1],
      minHeight: buttonHeightConstants.buttonNormalMinHeight,
      
      subtitleFontSize: buttonSizeConstants.normal.subtitleFontSize,
      subtitleLineHeight: buttonSizeConstants.normal.subtitleLineHeight,
    },
    
    large: {
      fontSize: buttonSizeConstants.large.fontSize,
      lineHeight: buttonSizeConstants.large.lineHeight,
      paddingX: baseModule[1] * 1.5,
      narrowPaddingX: baseModule[1],
      roundedPaddingX: baseModule[3],
      paddingY: buttonSizeConstants.large.paddingY,
      textPaddingY: buttonSizeConstants.large.textPaddingY,
      textPaddingX: baseModule[1],
      minHeight: buttonHeightConstants.buttonLargeMinHeight,
      
      subtitleFontSize: buttonSizeConstants.large.subtitleFontSize,
      subtitleLineHeight: buttonSizeConstants.large.lineHeight,
    },
    
    inline: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      paddingX: '0.5em',
      narrowPaddingX: '0.5em',
      paddingY: 0,
      textPaddingY: '0.3em',
      textPaddingX: '0.5em',
      minHeight: 0,
      
      subtitleFontSize: 'inherit',
      subtitleLineHeight: 'inherit',
    },
    
    link: {
      fontSize: 'inherit',
      lineHeight: 'inherit',
      paddingX: 0,
      narrowPaddingX: 0,
      paddingY: 0,
      smallPaddingY: baseModule['1/2'],
      textPaddingY: 0,
      textPaddingX: 0,
      minHeight: 0,
      
      subtitleFontSize: 'inherit',
      subtitleLineHeight: 'inherit',
    },
  },
  
  colorScheme: {
    flat: {
      backgroundColor: defaultTheme.color.transparent,
      fontColor: defaultTheme.body.fontColor,
      
      hover: {
        backgroundColor: Color(defaultTheme.colorPaletteBlueGrey[400]).fade(0.7),
        fontColor: defaultTheme.body.fontColor,
      },
      
      focus: {
        backgroundColor: Color(defaultTheme.colorPaletteBlueGrey[400]).fade(0.5),
        fontColor: defaultTheme.body.fontColor,
      },
    },
    
    flatLight: {
      backgroundColor: defaultTheme.color.transparent,
      fontColor: defaultTheme.color.white,
      
      hover: {
        backgroundColor: Color(defaultTheme.color.white).fade(0.8),
        fontColor: defaultTheme.color.white,
      },
      
      focus: {
        backgroundColor: Color(defaultTheme.color.white).fade(0.6),
        fontColor: defaultTheme.color.white,
      },
    },
    
    white: {
      backgroundColor: defaultTheme.color.white,
      fontColor: defaultTheme.color.main,
      
      hover: {
        backgroundColor: defaultTheme.colorPaletteGrey[100],
        fontColor: defaultTheme.color.main,
      },
  
      focus: {
        backgroundColor: defaultTheme.colorPaletteGrey[100],
        fontColor: defaultTheme.color.main,
      },
    },
    
    primary: {
      backgroundColor: buttonColorConstants.primary.backgroundColor,
      fontColor: buttonColorConstants.primary.fontColor,
  
      hover: {
        backgroundColor:
          Color(buttonColorConstants.primary.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.primary.fontColor,
      },
  
      focus: {
        backgroundColor:
          Color(buttonColorConstants.primary.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.primary.fontColor,
      },
    },
    
    secondary: {
      backgroundColor: buttonColorConstants.secondary.backgroundColor,
      fontColor: buttonColorConstants.secondary.fontColor,
  
      hover: {
        backgroundColor:
          Color(buttonColorConstants.secondary.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.secondary.fontColor,
      },
  
      focus: {
        backgroundColor:
          Color(buttonColorConstants.secondary.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.secondary.fontColor,
      },
    },
    
    alert: {
      backgroundColor: buttonColorConstants.alert.backgroundColor,
      fontColor: buttonColorConstants.alert.fontColor,
  
      hover: {
        backgroundColor:
          Color(buttonColorConstants.alert.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.alert.fontColor,
      },
  
      focus: {
        backgroundColor:
          Color(buttonColorConstants.alert.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.alert.fontColor,
      },
    },
    
    success: {
      backgroundColor: buttonColorConstants.success.backgroundColor,
      fontColor: buttonColorConstants.success.fontColor,
  
      hover: {
        backgroundColor:
          Color(buttonColorConstants.success.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.success.fontColor,
      },
  
      focus: {
        backgroundColor:
          Color(buttonColorConstants.success.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.success.fontColor,
      },
    },
    
    warning: {
      backgroundColor: buttonColorConstants.warning.backgroundColor,
      fontColor: buttonColorConstants.warning.fontColor,
  
      hover: {
        backgroundColor:
          Color(buttonColorConstants.warning.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.warning.fontColor,
      },
  
      focus: {
        backgroundColor:
          Color(buttonColorConstants.warning.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.warning.fontColor,
      },
    },
    
    info: {
      backgroundColor: buttonColorConstants.info.backgroundColor,
      fontColor: buttonColorConstants.info.fontColor,
  
      hover: {
        backgroundColor:
          Color(buttonColorConstants.info.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.info.fontColor,
      },
  
      focus: {
        backgroundColor:
          Color(buttonColorConstants.info.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.info.fontColor,
      },
    },
    
    link: {
      backgroundColor:
        Color(buttonColorConstants.link.backgroundColor)
          .darken(buttonConstants.functionFactor),
      fontColor: buttonColorConstants.link.fontColor,
      textAlign: 'left',
      fontWeight: defaultTheme.fontWeight.semibold,
      textTransform: 'none',
      
      hover: {
        textDecoration: 'underline',
        backgroundColor:
          Color(buttonColorConstants.link.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.link.fontColor,
      },
      
      focus: {
        backgroundColor:
          Color(buttonColorConstants.link.backgroundColor)
            .darken(buttonConstants.functionFactor),
        fontColor: buttonColorConstants.link.fontColor,
      },
    },
  },
};
