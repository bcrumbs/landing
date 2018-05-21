'use strict';

import { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import _get from 'lodash.get';
import { buttonDefaults } from './theme';

const propTypes = {
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  
  /** Swap icon and text position */
  iconPositionRight: PropTypes.bool,
  
  /** Define button theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  size: 'normal',
  iconPositionRight: false,
  theme: {},
};

// PROP RECEIVERS
const textSizeProps = ({ size, theme, iconPositionRight }) => {
  const textPaddingY =
    _get(
      theme,
      ['components', 'button', 'size', size, 'textPaddingY'],
      buttonDefaults.size[size].textPaddingY,
    );
  
  const textPaddingX =
    _get(
      theme,
      ['components', 'button', 'size', size, 'textPaddingX'],
      buttonDefaults.size[size].textPaddingX,
    );
  
  const py = typeof textPaddingY !== 'string'
    ? `${textPaddingY}px`
    : textPaddingY;
  
  const px = typeof textPaddingX !== 'string'
    ? `${textPaddingX}px`
    : textPaddingX;
  
  return css`
    padding: ${py} ${px};
    order: ${iconPositionRight ? '1' : '2'};
  `;
};

export const ButtonTextStyled = styled.div`
  ${textSizeProps}
`;

ButtonTextStyled.propTypes = propTypes;
ButtonTextStyled.defaultProps = defaultProps;
ButtonTextStyled.displayName = 'ButtonTextStyled';
