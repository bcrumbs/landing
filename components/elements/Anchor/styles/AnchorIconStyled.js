'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const AnchorIconStyled = styled.span`
  width: 1em;
  height: 1em;
  line-height: 1em;
  display: inline-block;
  color: inherit;
  font-size: 0.8em;
  margin-right: ${defaultTheme.baseModule[1]}px;
`;

AnchorIconStyled.displayName = 'AnchorIconStyled';
AnchorIconStyled.propTypes = propTypes;
AnchorIconStyled.defaultProps = defaultProps;
