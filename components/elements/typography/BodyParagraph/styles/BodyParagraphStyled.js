'use strict';

import styled from 'styled-components';
import { defaultTheme } from '../../../../../styles/theme';

const propTypes = {};
const defaultProps = {};

/** STYLES */
export const BodyParagraphStyled = styled.p`
  font-size: ${defaultTheme.fontSize[0]}px;
  margin: 0;
  max-width: 20em;
  line-height: 1.7;
  
  & + & {
    margin-top: 20px;
  }
`;

BodyParagraphStyled.displayName = 'BodyParagraphStyled';
BodyParagraphStyled.propTypes = propTypes;
BodyParagraphStyled.defaultProps = defaultProps;
