'use strict';

import React from 'react';
import { Button } from '../../Button/Button';
import {
  Display,
  BodyParagraph,
} from '../../typography';
import { DashedBox } from '../../DashedBox/DashedBox';
import { ProjectItemStyled } from './styles/ProjectItemStyled';
import { ProjectItemContentStyled } from './styles/ProjectItemContentStyled';
import { ProjectButtonRowStyled } from './styles/ProjectButtonRowStyled';
import { ProjectsBgBlockStyled } from './styles/ProjectsBgBlockStyled';
import { icons } from '../../../../styles/assets/icons';

const propTypes = {
};
const defaultProps = {
};

export const ProjectItem = () => (
  <ProjectItemStyled>
    <ProjectsBgBlockStyled />
    <ProjectItemContentStyled>
      <Display level={4}>Reactackle</Display>
      <DashedBox>
        <BodyParagraph>
          Open-source components library built with React and
          Styled-Components.
        </BodyParagraph>
        
        <ProjectButtonRowStyled>
          <Button
            text="Discover project"
            size="large"
            icon={{
              name: '',
              type: 'library',
              src: icons.arrowSlimRight,
            }}
            iconPositionRight
            href="https://reactackle.braincrumbs.io"
          />
        </ProjectButtonRowStyled>
      </DashedBox>
    </ProjectItemContentStyled>
  </ProjectItemStyled>
);

ProjectItem.displayName = 'ProjectItem';
ProjectItem.propTypes = propTypes;
ProjectItem.defaultProps = defaultProps;
