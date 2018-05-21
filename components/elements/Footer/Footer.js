'use strict';

import React from 'react';
import { FooterStyled } from './styles/FooterStyled';

const propTypes = {};
const defaultProps = {};

export const Footer = () => (
  <FooterStyled>
    &copy; Braincrumbs, 2017
  </FooterStyled>
);

Footer.displayName = 'Footer';
Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
