'use strict';

import { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import Color from 'color';
import _get from 'lodash.get';
import { foreground } from '../../../../styles/utils/styleFunctions';
import {
  transition,
  boxShadow,
} from '../../../../styles/utils/mixins';

import { buttonDefaults } from './theme';

const propTypes = {
  /** Define button's main text */
  text: PropTypes.string,
  /** Define button's subtitle */
  subtitle: PropTypes.string,
  
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  /** Narrow button has smaller horizontal paddings */
  narrow: PropTypes.bool,
  /** Define button's color */
  colorScheme: PropTypes.oneOf([
    'primary',
    'secondary',
    'alert',
    'success',
    'warning',
    'info',
    'flat',
    'flatLight',
    'white',
    'link',
  ]),
  /** Outlined button has border and transparent background */
  outlined: PropTypes.bool,
  /** Define button's radius */
  radius: PropTypes.oneOf(['none', 'default', 'rounded']),
  /** Raised button has shadow */
  raised: PropTypes.bool,
  /** Set disable to true if interaction with button isn't available to user */
  disabled: PropTypes.bool,
  
  /** Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  text: '',
  subtitle: '',
  size: 'normal',
  narrow: false,
  colorScheme: 'flat',
  outlined: false,
  radius: 'default',
  raised: false,
  disabled: false,
  theme: {},
};

// PROP RECEIVERS
const sizeProps = ({ size, narrow, text, radius, theme }) => {
  const paddingY =
    _get(
      theme,
      ['components', 'button', 'size', size, 'paddingY'],
      buttonDefaults.size[size].paddingY,
    );
  
  const paddingX =
    _get(
      theme,
      ['components', 'button', 'size', size, 'paddingX'],
      buttonDefaults.size[size].paddingX,
    );
  
  const narrowPaddingX =
    _get(
      theme,
      ['components', 'button', 'size', size, 'narrowPaddingX'],
      buttonDefaults.size[size].narrowPaddingX,
    );
  
  const roundedPaddingX =
    _get(
      theme,
      ['components', 'button', 'size', size, 'roundedPaddingX'],
      buttonDefaults.size[size].roundedPaddingX,
    );
  
  const py = text ? paddingY : '0';
  
  let px = null;
  if (narrow) {
    px = typeof narrowPaddingX !== 'string'
      ? `${narrowPaddingX}px`
      : narrowPaddingX;
  } else if (!text) {
    px = '0 !important';
  } else if (radius === 'rounded') {
    px = typeof roundedPaddingX !== 'string'
      ? `${roundedPaddingX}px`
      : roundedPaddingX;
  } else {
    px = typeof paddingX !== 'string'
      ? `${paddingX}px`
      : `${paddingX}`;
  }
  
  return `padding: ${py} ${px};`;
};

const radiusProps = ({ radius, size, theme }) => {
  const minHeight =
    _get(
      theme,
      ['components', 'button', 'size', size, 'minHeight'],
      buttonDefaults.size[size].minHeight,
    );
  
  const borderRadiusDefault =
    _get(
      theme,
      ['components', 'button', 'borderRadiusDefault'],
      buttonDefaults.borderRadiusDefault,
    );
  
  let rad = null;
  if (radius === 'rounded')
    rad = `border-radius: ${minHeight}px;`;
  else if (radius === 'default')
    rad = `border-radius: ${borderRadiusDefault}px;`;
  else rad = null;
  
  return rad;
};

const kindProps = ({ colorScheme, outlined, theme }) => {
  const backgroundColor =
    _get(
      theme,
      ['components', 'button', 'colorScheme', colorScheme, 'backgroundColor'],
      buttonDefaults.colorScheme[colorScheme].backgroundColor,
    );
  
  const bgTransparency = (Color(backgroundColor).alpha() === 1);
  
  const hoverBackgroundColor = _get(
    theme,
    ['components', 'button', 'colorScheme', colorScheme, 'hover',
      'backgroundColor'],
    buttonDefaults.colorScheme[colorScheme].hover.backgroundColor,
  );
  
  const focusBackgroundColor = _get(
    theme,
    ['components', 'button', 'colorScheme', colorScheme, 'focus',
      'backgroundColor'],
    buttonDefaults.colorScheme[colorScheme].focus.backgroundColor,
  );
  
  const colorDark = _get(
    theme,
    ['components', 'button', 'text', 'colorDark'],
    buttonDefaults.text.colorDark,
  );
  
  const colorLight = _get(
    theme,
    ['components', 'button', 'text', 'colorLight'],
    buttonDefaults.text.colorLight,
  );
  
  const fontColor =
    _get(
      theme,
      ['components', 'button', 'colorScheme', colorScheme,
        'fontColor'],
      buttonDefaults.colorScheme[colorScheme].fontColor,
    )
    || foreground(backgroundColor, colorDark, colorLight);
    
  const hoverFontColor = _get(
    theme,
    ['components', 'button', 'colorScheme', colorScheme, 'hover',
      'backgroundColor'],
    buttonDefaults.colorScheme[colorScheme].hover.fontColor,
  );
  
  const focusFontColor = _get(
    theme,
    ['components', 'button', 'colorScheme', colorScheme, 'focus',
      'backgroundColor'],
    buttonDefaults.colorScheme[colorScheme].focus.fontColor,
  );
  
  const borderWidth = _get(
    theme,
    ['components', 'button', 'borderWidth'],
    buttonDefaults.borderWidth,
  );
  
  const borderStyle = _get(
    theme,
    ['components', 'button', 'borderStyle'],
    buttonDefaults.borderStyle,
  );
  
  return css`
    ${outlined
    ? `
        border-color: ${bgTransparency
          ? backgroundColor
          : fontColor
        };
        background-color: ${Color(backgroundColor).fade(1)};
        color: ${bgTransparency
          ? backgroundColor
          : fontColor
        };
        border-width: ${borderWidth}px;
        border-style: ${borderStyle};
        
        &:hover,
        &:focus,
        &:active {      
          border-color: ${bgTransparency
            ? hoverBackgroundColor
            : hoverFontColor
          };
          background-color: ${bgTransparency
            ? Color(hoverBackgroundColor).fade(0.9)
            : Color(hoverFontColor).fade(0.9)
          };
          color: ${bgTransparency
            ? hoverBackgroundColor
            : hoverFontColor
          };
        }
      `
    : `          
        background-color: ${backgroundColor};
        color: ${fontColor};
        border-width: 0;
        border-color: transparent;
  
        &:hover {
          background-color: ${hoverBackgroundColor};
          color: ${hoverFontColor};
        }
        
        &:focus,
        &:active {      
          background-color: ${focusBackgroundColor};   
          color: ${focusFontColor};
        }
      `
    }
  `;
};

const elevation = ({ raised }) => `
  ${
  raised
    ? `${boxShadow(0)}
              
        &:hover,
        &:focus,
        &:active { 
          ${boxShadow(2)}    
        }
      `
    : `
      &:hover,
      &:focus,
      &:active { 
        box-shadow: none  
      }
    `
  }
`;


const disabled = ({ outlined, disabled, theme }) => {
  const backgroundColor = _get(
    theme,
    ['components', 'button', 'disabled', 'backgroundColor'],
    buttonDefaults.disabled.backgroundColor,
  );
  
  const fontColor = _get(
    theme,
    ['components', 'button', 'disabled', 'fontColor'],
    buttonDefaults.disabled.fontColor,
  );
  
  return css`
   ${disabled
    ? `
        box-shadow: none;
      
        &,
        &:hover,
        &:focus,
        &:active {
          cursor: default;
          background-color: ${backgroundColor};
          color: ${fontColor};
          box-shadow: none;
          
          ${outlined && `border-color: ${backgroundColor};`}
        };        
      `
    : null
    }`;
};

const textProps = ({ subtitle, size, theme }) => {
  const fontSize = _get(
    theme,
    ['components', 'button', 'size', size, 'fontSize'],
    buttonDefaults.size[size].fontSize,
  );
  
  const lineHeight = _get(
    theme,
    ['components', 'button', 'size', size, 'lineHeight'],
    buttonDefaults.size[size].lineHeight,
  );
  
  const textTransform = _get(
    theme,
    ['components', 'button', 'text', 'textTransform'],
    buttonDefaults.text.textTransform,
  );
  
  const fontWeight = _get(
    theme,
    ['components', 'button', 'text', 'fontWeight'],
    buttonDefaults.text.fontWeight,
  );
  
  return `   
    font-size: ${typeof fontSize !== 'string'
    ? `${fontSize}px`
    : fontSize
    };
    line-height: ${lineHeight};
    text-align: ${subtitle ? 'left' : 'center'};
    text-decoration: none;
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
  `;
};


// STYLES
export const ButtonStyled = styled.a`  
  -webkit-appearance: none;
  -moz-appearance: none;

  cursor: pointer;
  margin: 0;
  position: relative;  
  display: inline-flex;
  user-select: none;
  
  vertical-align: middle;
  align-items: center;
  
  &:hover,
  &:focus,
  &:active { 
    outline: none; 
  }
  
  ${kindProps}
  ${textProps}
  ${sizeProps}
  ${radiusProps}
  ${elevation}
  ${disabled}
  ${transition('color, background-color, border, box-shadow')};
`;

ButtonStyled.propTypes = propTypes;
ButtonStyled.defaultProps = defaultProps;
ButtonStyled.displayName = 'ButtonStyled';
