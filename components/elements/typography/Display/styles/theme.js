'use strict';

import { defaultTheme } from '../../../../../styles/theme';

export const displayDefaults = {
  level: {
    1: {
      fontSize: defaultTheme.fontSize[2],
      fontWeight: defaultTheme.fontWeight.semibold,

      breakpoints: [
        {
          breakpoint: 60,
          fontSize: defaultTheme.fontSize[4],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
      ],
    },
    2: {
      fontSize: defaultTheme.fontSize[3],
      fontWeight: defaultTheme.fontWeight.semibold,

      breakpoints: [
        {
          breakpoint: 20,
          fontSize: defaultTheme.fontSize[4],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
        {
          breakpoint: 40,
          fontSize: defaultTheme.fontSize[5],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
      ],
    },
    3: {
      fontSize: defaultTheme.fontSize[4],
      fontWeight: defaultTheme.fontWeight.semibold,

      breakpoints: [
        {
          breakpoint: 20,
          fontSize: defaultTheme.fontSize[5],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
        {
          breakpoint: 40,
          fontSize: defaultTheme.fontSize[6],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
      ],
    },
    4: {
      fontSize: defaultTheme.fontSize[3],
      fontWeight: defaultTheme.fontWeight.semibold,

      breakpoints: [
        {
          breakpoint: 40,
          fontSize: defaultTheme.fontSize[4],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
        {
          breakpoint: 65,
          fontSize: defaultTheme.fontSize[5],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
        {
          breakpoint: 75,
          fontSize: defaultTheme.fontSize[6],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
        {
          breakpoint: 95,
          fontSize: defaultTheme.fontSize[7],
          fontWeight: defaultTheme.fontWeight.semibold,
        },
      ],
    },
  }
};
