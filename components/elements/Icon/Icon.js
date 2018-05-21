'use strict';

import React, { PropTypes } from 'react';
import { IconFontAwesome } from './IconFontAwesome/IconFontAwesome';
import { IconLibrary } from './IconLibrary/IconLibrary';

const propTypes = {
  ...IconFontAwesome.propTypes,
  ...IconLibrary.propTypes,
  /** Set icon type */
  type: PropTypes.oneOf([
    'font-awesome',
    'library',
  ]),
};
const defaultProps = {
  type: 'font-awesome',
};

export const Icon = props => {
  const Icon =
    props.type === 'font-awesome'
      ? IconFontAwesome
      : IconLibrary;
  
  return (
    <Icon {...props} />
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;
Icon.displayName = 'Icon';
