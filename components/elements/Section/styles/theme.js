'use strict';

import { defaultTheme } from '../../../../styles/theme';

export const sectionDefaults = {
  breakpoints: {
    base: {
      padding: defaultTheme.baseModule[1] * 3,
    },
    medium: {
      padding: defaultTheme.baseModule[1] * 8,
    },
    large: {
      padding: defaultTheme.baseModule[1] * 14,
      fontWeight: defaultTheme.fontWeight.semibold,
    },
  }
};
