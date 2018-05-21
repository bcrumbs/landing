'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const DashedBoxStyled = styled.div`
  padding: 0;
  position: relative;
  
  &::before {
    content: '';
    display: block;
    background-color: ${defaultTheme.body.fontColor};
    width: 200px;
    height: 4px;
    top: 0;
    left: 0;
  }
`;

DashedBoxStyled.displayName = 'DashedBoxStyled';
DashedBoxStyled.propTypes = propTypes;
DashedBoxStyled.defaultProps = defaultProps;
