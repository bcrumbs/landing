'use strict';

import styled, { css } from 'styled-components';
import { displayDefaults } from './theme';
import { media, transition } from '../../../../../styles/utils/mixins';

const propTypes = {};
const defaultProps = {};

/** PROP RECEIVERS */
const levelProp = ({ level }) => {
  const obj = displayDefaults.level[level].breakpoints;

  const scale = obj.map(item => css`
    ${media(item.breakpoint)`
      font-size: ${item.fontSize}px;
      font-weight: ${item.fontWeight};
    `}
  `);
  
  return css`
    font-size: ${displayDefaults.level[level].fontSize}px;
    font-weight: ${displayDefaults.level[level].fontWeight};

    ${scale}  
  `;
};

/** STYLES */
export const DisplayStyled = styled.h2`
  margin: 40px 0;
  max-width: 24em;
  line-height: 1.5;
 
  ${transition('font-size')}
  
  ${levelProp}
`;

DisplayStyled.displayName = 'DisplayStyled';
DisplayStyled.propTypes = propTypes;
DisplayStyled.defaultProps = defaultProps;
