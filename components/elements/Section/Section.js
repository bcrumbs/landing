'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { SectionStyled } from './styles/SectionStyled';
import { SectionContentStyled } from './styles/SectionContentStyled';
import { SectionLabelStyled } from './styles/SectionLabelStyled';

const propTypes = {
  bgImage: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};
const defaultProps = {
  
};

export const Section = props => (
  <SectionStyled
    bgImage={props.bgImage}
    id={props.id}
  >
    <SectionLabelStyled>{props.label}</SectionLabelStyled>
    <SectionContentStyled>
      {props.children}
    </SectionContentStyled>
  </SectionStyled>
);

Section.displayName = 'Section';
Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
