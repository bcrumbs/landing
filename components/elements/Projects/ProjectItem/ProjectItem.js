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

export const ProjectItem = ({
  title,
  description,
  href,
  patternId,
}) => (
  <ProjectItemStyled>
    <ProjectsBgBlockStyled patternId={patternId} />
    <ProjectItemContentStyled>
      <Display level={4}>{title}</Display>
      <DashedBox>
        <BodyParagraph>{description}</BodyParagraph>

        <ProjectButtonRowStyled>
          <Button
            text="Discover"
            size="normal"
            icon={{
              name: '',
              type: 'library',
              src: icons.arrowSlimRight,
            }}
            iconPositionRight
            href={href}
          />
        </ProjectButtonRowStyled>
      </DashedBox>
    </ProjectItemContentStyled>
  </ProjectItemStyled>
);
