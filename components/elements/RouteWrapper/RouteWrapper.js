'use strict';

import React from 'react';
import { RouteWrapperStyled } from './styles/RouteWrapperStyled';

const propTypes = {
};
const defaultProps = {};

export const RouteWrapper = props => (
  <RouteWrapperStyled>
    {props.children}
  </RouteWrapperStyled>
);

RouteWrapper.displayName = 'RouteWrapper';
RouteWrapper.propTypes = propTypes;
RouteWrapper.defaultProps = defaultProps;
