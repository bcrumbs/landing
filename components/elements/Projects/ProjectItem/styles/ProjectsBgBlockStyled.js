'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const ProjectsBgBlockStyled = styled.div`
  display: block;
  width: 350px;
  height: 330px;
  background: linear-gradient(-130deg, ${defaultTheme.colorProjects.reactackle}, palevioletred);
  position: absolute;
  top: 5%;
  left: -40%;
  transform: rotate(-20deg);
  z-index: 0;
`;

ProjectsBgBlockStyled.displayName = 'ProjectsBgBlockStyled';
ProjectsBgBlockStyled.propTypes = propTypes;
ProjectsBgBlockStyled.defaultProps = defaultProps;
