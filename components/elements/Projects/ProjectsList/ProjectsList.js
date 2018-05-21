'use strict';

import React from 'react';

const propTypes = {
};
const defaultProps = {
};

export const ProjectsList = props => (
  <div>
    {props.children}
  </div>
);

ProjectsList.displayName = 'ProjectsList';
ProjectsList.propTypes = propTypes;
ProjectsList.defaultProps = defaultProps;
