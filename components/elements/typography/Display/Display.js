'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { DisplayStyled } from './styles/DisplayStyled';

const propTypes = {
  level: PropTypes.number,
};
const defaultProps = {
  level: 1,
};

export const Display = props => (
  <DisplayStyled
    level={props.level}
  >
    {props.children}
  </DisplayStyled>
);

Display.displayName = 'Display';
Display.propTypes = propTypes;
Display.defaultProps = defaultProps;
