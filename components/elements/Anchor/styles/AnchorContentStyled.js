'use strict';

import styled from 'styled-components';
import { transition } from '../../../../styles/utils/mixins';
import { defaultTheme } from '../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const AnchorContentStyled = styled.span`  
  border-bottom: 0.09em solid ${defaultTheme.color.transparent};
  
  &:hover {
    border-bottom-color: ${defaultTheme.colorAnchor};
  }
  
  ${transition('border')}; 
`;

AnchorContentStyled.displayName = 'AnchorContentStyled';
AnchorContentStyled.propTypes = propTypes;
AnchorContentStyled.defaultProps = defaultProps;
