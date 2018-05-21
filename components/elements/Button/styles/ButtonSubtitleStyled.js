'use strict';

import { PropTypes } from 'react';
import styled from 'styled-components';
import _get from 'lodash.get';
import { buttonDefaults } from './theme';

const propTypes = {
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  
  /** Define button theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  size: 'normal',
  theme: {},
};

// PROP RECEIVERS
const subtitleSizeProps = ({ size, theme }) => {
  const subtitleFontSize = _get(
    theme,
    ['components', 'button', 'size', size, 'subtitleFontSize'],
    buttonDefaults.size[size].subtitleFontSize,
  );
  
  const subtitleLineHeight = _get(
    theme,
    ['components', 'button', 'size', size, 'subtitleLineHeight'],
    buttonDefaults.size[size].subtitleLineHeight,
  );
  
  const fontWeight = _get(
    theme,
    ['components', 'button', 'subtitle', 'fontWeight'],
    buttonDefaults.subtitle.fontWeight,
  );
  
  const textTransform = _get(
    theme,
    ['components', 'button', 'subtitle', 'textTransform'],
    buttonDefaults.subtitle.textTransform,
  );
  
  const fontColor = _get(
    theme,
    ['components', 'button', 'subtitle', 'fontColor'],
    buttonDefaults.subtitle.fontColor,
  );
  
  const fontOpacity = _get(
    theme,
    ['components', 'button', 'subtitle', 'fontOpacity'],
    buttonDefaults.subtitle.fontOpacity,
  );
  
  const subtitleTitleSpacing = _get(
    theme,
    ['components', 'button', 'subtitle', 'subtitleTitleSpacing'],
    buttonDefaults.subtitle.subtitleLineHeight,
  );
  
  return `
    font-size: ${subtitleFontSize}px;
    line-height: ${subtitleLineHeight};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
    color: ${fontColor};
    opacity: ${fontOpacity};
    margin-bottom: ${subtitleTitleSpacing}px;
  `;
};

export const ButtonSubtitleStyled = styled.div`
  ${subtitleSizeProps}
  color: inherit;
`;

ButtonSubtitleStyled.propTypes = propTypes;
ButtonSubtitleStyled.defaultProps = defaultProps;
ButtonSubtitleStyled.displayName = 'ButtonSubtitleStyled';
