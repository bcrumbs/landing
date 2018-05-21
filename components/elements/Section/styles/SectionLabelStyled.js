'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../styles/theme';
import { media, transition } from '../../../../styles/utils/mixins';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const SectionLabelStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  color: ${defaultTheme.colorPaletteBlueGrey[400]};
  text-transform: uppercase;
  letter-spacing: 0.7em;
  font-weight: ${defaultTheme.fontWeight.bold};
  font-size: ${defaultTheme.fontSize[0]}px;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
 
  ${transition('top')}
  
  ${media('medium')`    
    top: 50%;
    transform: rotate(-90deg) translateX(-50%);
  `}
`;

SectionLabelStyled.displayName = 'SectionLabelStyled';
SectionLabelStyled.propTypes = propTypes;
SectionLabelStyled.defaultProps = defaultProps;
