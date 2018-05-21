'use strict';

import React from 'react';
import { AppStyled } from './styles/AppStyled';

const propTypes = {
};
const defaultProps = {};

export const App = props => (
  <AppStyled>
    {props.children}
  </AppStyled>
);

App.displayName = 'App';
App.propTypes = propTypes;
App.defaultProps = defaultProps;
