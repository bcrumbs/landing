'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const ProjectButtonRowStyled = styled.div`
  margin-top: 20px;
  margin-left: -${defaultTheme.baseModule[1] * 3}px;
`;

ProjectButtonRowStyled.displayName = 'ProjectButtonRowStyled';
ProjectButtonRowStyled.propTypes = propTypes;
ProjectButtonRowStyled.defaultProps = defaultProps;
