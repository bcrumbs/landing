'use strict';

import React from 'react';
import { Anchor } from '../../elements/Anchor/Anchor';
import { Section } from '../../elements/Section/Section';
import { Display, BodyParagraph } from '../../elements/typography';
import { DashedBox } from '../../elements/DashedBox/DashedBox';
import { images } from '../../../styles/assets/images';

const propTypes = {};
const defaultProps = {};

export const ScrollWelcome = () => (
  <Section bgImage={images.scrollBgWelcome}>
    <Display level={4}>
      Braincrumbs — design
      <br />
      and development team
    </Display>
    <DashedBox>
      <BodyParagraph>
        {'Discover our '}
        <Anchor scroll to="projects" smooth="easeOutSine" spy duration={500}>
          current projects
        </Anchor>
        <br />
        {'or '}
        <Anchor scroll to="contacts" smooth="easeOutCirc" spy duration={750}>
          {' '}
          contact us
        </Anchor>
        .
      </BodyParagraph>
    </DashedBox>
  </Section>
);

ScrollWelcome.displayName = 'ScrollWelcome';
ScrollWelcome.propTypes = propTypes;
ScrollWelcome.defaultProps = defaultProps;
