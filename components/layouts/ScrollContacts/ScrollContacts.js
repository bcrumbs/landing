'use strict';

import React from 'react';
import { Anchor } from '../../elements/Anchor/Anchor';
import { Section } from '../../elements/Section/Section';
import { Display } from '../../elements/typography';
import { images } from '../../../styles/assets/images';

const propTypes = {};
const defaultProps = {};

export const ScrollContacts = () => (
  <Section bgImage={images.scrollBgContacts} id="contacts" name="contacts">
    <Display>
      We would love to get in touch with you. Write us by{' '}
      <Anchor plain href={'mailto:hello@braincrumbs.io'}>
        hello@braincrumbs.io
      </Anchor>{' '}
      or follow on{' '}
      <Anchor
        target="_blank"
        href="https://github.com/bcrumbs"
        icon={{ name: 'github' }}
      >
        Github
      </Anchor>
      ,{' '}
      <Anchor
        target="_blank"
        href="https://www.linkedin.com/company/braincrumbs/about/"
      >
        LinkedIn
      </Anchor>
      .
    </Display>
  </Section>
);

ScrollContacts.displayName = 'ScrollContacts';
ScrollContacts.propTypes = propTypes;
ScrollContacts.defaultProps = defaultProps;
