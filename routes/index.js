'use strict';

import React from 'react';
import { RouteWrapper } from '../components/elements/RouteWrapper/RouteWrapper';
import { Footer } from '../components/elements/Footer/Footer';
import { ScrollWelcome }
  from '../components/layouts/ScrollWelcome/ScrollWelcome';
import { ScrollProjects }
  from '../components/layouts/ScrollProjects/ScrollProjects';
import { ScrollContacts }
  from '../components/layouts/ScrollContacts/ScrollContacts';

export const RootIndexRoute = () => (
  <RouteWrapper>
    <ScrollWelcome />
    <ScrollProjects />
    <ScrollContacts />
    <Footer />
  </RouteWrapper>
);

RootIndexRoute.displayName = 'RootIndexRoute';
