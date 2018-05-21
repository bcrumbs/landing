'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import './styles/globalStyles';

import { RootRoute } from './routes/root';
import { RootIndexRoute } from './routes/index';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <RootRoute>
      <RootIndexRoute />
    </RootRoute>,
    document.getElementById('container'),
  );
});
