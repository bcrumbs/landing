'use strict';

import React from 'react';
import { App } from '../components/elements/App/App';

export const RootRoute = props => (
  <App>{props.children}</App>
);

RootRoute.displayName = 'RootRoute';
