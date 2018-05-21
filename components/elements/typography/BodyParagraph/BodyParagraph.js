'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { BodyParagraphStyled } from './styles/BodyParagraphStyled';

const propTypes = {
};
const defaultProps = {
};

export const BodyParagraph = props => (
  <BodyParagraphStyled>
    {props.children}
  </BodyParagraphStyled>
);

BodyParagraph.displayName = 'BodyParagraph';
BodyParagraph.propTypes = propTypes;
BodyParagraph.defaultProps = defaultProps;
