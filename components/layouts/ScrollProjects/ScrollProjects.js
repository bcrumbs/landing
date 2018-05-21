'use strict';

import React from 'react';
import { Section } from '../../elements/Section/Section';
import {
  ProjectsList,
  ProjectItem,
} from '../../elements/Projects';
import { images } from '../../../styles/assets/images';

const propTypes = {};
const defaultProps = {};

export const ScrollProjects = () => (
  <Section
    bgImage={images.scrollBgProjects}
    label="Our projects"
    id="projects"
    name="projects"
  >
    <ProjectsList>
      <ProjectItem />
    </ProjectsList>
  </Section>
);

ScrollProjects.displayName = 'ScrollProjects';
ScrollProjects.propTypes = propTypes;
ScrollProjects.defaultProps = defaultProps;
