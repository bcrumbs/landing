'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const FooterStyled = styled.footer`
  padding: ${defaultTheme.baseModule[2]}px;
  text-align: right;
  font-size: ${defaultTheme.fontSize['-1']}px;
  color: ${defaultTheme.colorPaletteBlueGrey[400]};
  
`;

FooterStyled.displayName = 'FooterStyled';
FooterStyled.propTypes = propTypes;
FooterStyled.defaultProps = defaultProps;
