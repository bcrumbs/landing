'use strict';

import React from 'react';
import { Anchor } from '../../elements/Anchor/Anchor';
import { Section } from '../../elements/Section/Section';
import {
  Display,
} from '../../elements/typography';
import { images } from '../../../styles/assets/images';

const propTypes = {};
const defaultProps = {};

export const ScrollContacts = () => (
  <Section
    bgImage={images.scrollBgContacts}
    label="Stay in touch"
    id="contacts"
    name="contacts"
  >
    <Display>
        We would love to get in touch with you.
        <br />Write us at <Anchor plain href={'mailto:hello@braincrumbs.io'}>
        hello@braincrumbs.io</Anchor>
      <br /> {'or follow at '}
      <Anchor
        target="_blank"
        href="https://github.com/bcrumbs"
        icon={{ name: 'github' }}
      > github
      </Anchor>
    </Display>
  </Section>
);

ScrollContacts.displayName = 'ScrollContacts';
ScrollContacts.propTypes = propTypes;
ScrollContacts.defaultProps = defaultProps;
