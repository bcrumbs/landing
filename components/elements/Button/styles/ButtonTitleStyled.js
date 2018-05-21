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
  theme: buttonDefaults,
};

const titleSizeProps = ({ size, theme }) => {
  const lineHeight = _get(
    theme,
    ['components', 'button', 'size', size, 'lineHeight'],
    buttonDefaults.size[size].lineHeight,
  );
  
  const fontWeight = _get(
    theme,
    ['components', 'button', 'text', 'fontWeight'],
    buttonDefaults.text.fontWeight,
  );
  
  const textTransform = _get(
    theme,
    ['components', 'button', 'text', 'textTransform'],
    buttonDefaults.text.textTransform,
  );
  
  return `
    font-size: inherit;
    line-height: ${lineHeight};
    font-weight: ${fontWeight};
    text-transform: ${textTransform};
  `;
};

export const ButtonTitleStyled = styled.div`
  ${titleSizeProps}
    color: inherit;
`;

ButtonTitleStyled.propTypes = propTypes;
ButtonTitleStyled.defaultProps = defaultProps;
ButtonTitleStyled.displayName = 'ButtonTitleStyled';
