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
const iconStyleProps = ({ theme }) => {
  const opacityAmount =
    _get(theme, ['components', 'button', 'iconOpacity'],
      buttonDefaults.iconOpacity);
  
  return `
    opacity: ${opacityAmount};
  `;
};

const iconSizeProps = ({ size }) => css`
  ${size === 'inline'
    ? `
      width: 1em;
      height: 1em;
      line-height: 1em;
      font-size: 1em;
    `
    : null
  }
`;

export const ButtonIconBoxStyled = styled.div`
  order: ${props => props.iconPositionRight ? '2' : '1'};
  display: flex;
  
  ${iconStyleProps}
  ${iconSizeProps}
`;

ButtonIconBoxStyled.propTypes = propTypes;
ButtonIconBoxStyled.defaultProps = defaultProps;
ButtonIconBoxStyled.displayName = 'ButtonIconBoxStyled';
