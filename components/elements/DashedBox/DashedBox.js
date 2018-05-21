'use strict';

import React from 'react';
import { DashedBoxStyled } from './styles/DashedBoxStyled';
import { DashedBoxContentStyled } from './styles/DashedBoxContentStyled';

const propTypes = {
};
const defaultProps = {
};

export const DashedBox = props => (
  <DashedBoxStyled>
    <DashedBoxContentStyled>
      {props.children}
    </DashedBoxContentStyled>
  </DashedBoxStyled>
);

DashedBox.displayName = 'DashedBox';
DashedBox.propTypes = propTypes;
DashedBox.defaultProps = defaultProps;
