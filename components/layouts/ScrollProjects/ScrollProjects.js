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
      <ProjectItem
        title="Reactackle"
        description="Open-source components library built with React and
          Styled-Components"
        href="https://reactackle.braincrumbs.io"
        patternId={1}
      />

      <ProjectItem
        title="Booben"
        description="Full-stack web app developing platform: design, develop,
        connect data, get source code - all in one place"
        href="https://booben.io"
        patternId={2}
      />

    </ProjectsList>
  </Section>
);

ScrollProjects.displayName = 'ScrollProjects';
ScrollProjects.propTypes = propTypes;
ScrollProjects.defaultProps = defaultProps;
