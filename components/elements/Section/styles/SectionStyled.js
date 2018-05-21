'use strict';

import styled, { keyframes } from 'styled-components';
import Color from 'color';
import { defaultTheme } from '../../../../styles/theme';
import { media, transition } from '../../../../styles/utils/mixins';
import { sectionDefaults } from './theme';

const propTypes = {};
const defaultProps = {};

const fadeIn = keyframes`  
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }  
`;

/** PROP RECEIVERS */
const bgProps = ({ bgImage }) => {
  const color1 = defaultTheme.body.bgColor;
  const color2 = Color(defaultTheme.body.bgColor).fade(1);

  return `
    background:    
      linear-gradient(${color1}, ${color2}),
      linear-gradient(${color2}, ${color1}),
      url('${bgImage}');
    background-size: 100% 30%, 100% 0%, 103% auto;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-position: top, bottom, center;
    background-attachment: scroll, scroll, fixed;
  `;
};

/** STYLES */
export const SectionStyled = styled.section`
  padding: ${sectionDefaults.breakpoints.base.padding}px;
  padding-bottom: ${sectionDefaults.breakpoints.base.paddingBottom + 10}px;
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  animation: ${fadeIn} 2s ease-in;
 
  ${transition('padding')}
  
  ${media('medium')`    
    padding: ${sectionDefaults.breakpoints.medium.padding}px;
    padding-bottom: ${sectionDefaults.breakpoints.medium.paddingBottom + 10}px;
  `}
  ${media('large')`    
    padding: ${sectionDefaults.breakpoints.large.padding}px;
    padding-bottom: ${sectionDefaults.breakpoints.large.paddingBottom + 10}px;
  `}
  
   ${bgProps}
`;

SectionStyled.displayName = 'SectionStyled';
SectionStyled.propTypes = propTypes;
SectionStyled.defaultProps = defaultProps;
