'use strict';

import styled from 'styled-components';
import { Link } from 'react-scroll';
import { defaultTheme } from '../../../../styles/theme';

const propTypes = {};
const defaultProps = {};


/** STYLES */
const anchorBase = () => `
  color: ${defaultTheme.colorAnchor};
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: baseline;
`;


export const AnchorStyled = styled.a`
  ${anchorBase}
`;

AnchorStyled.displayName = 'AnchorStyled';
AnchorStyled.propTypes = propTypes;
AnchorStyled.defaultProps = defaultProps;

export const AnchorLinkStyled = styled(Link)`
  ${anchorBase}
`;

AnchorLinkStyled.displayName = 'AnchorLinkStyled';
AnchorLinkStyled.propTypes = propTypes;
AnchorLinkStyled.defaultProps = defaultProps;
