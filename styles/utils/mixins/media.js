import { css } from 'styled-components';
import { defaultTheme } from '../../theme';

const defaultBreakpoints = defaultTheme.breakpoints;
const emBase = defaultTheme.body.fontSize;
/**
 * MEDIA QUERIES
 * iterate through the sizes and create a media template
 */
export const media = (
  from = null,
  until = null,
  breakpoints = defaultBreakpoints,
) => (...args) => {
  let arr = [];
  
  if (from) {
    typeof from === 'string'
      ? arr.push(`(min-width: ${(breakpoints[from]
      || defaultBreakpoints[from]) / emBase}em)`)
      : arr.push(`(min-width: ${from}em)`);
  }
  
  if (until) {
    typeof until === 'string'
      ? arr.push(`(max-width: ${(breakpoints[until]
      || defaultBreakpoints[until]) / emBase}em)`)
      : arr.push(`(max-width: ${until}em)`);
  }
  
  const query = arr.length > 1 ? arr.join(' and ') : arr;
  
  return css`
    @media ${query} {
      ${css(...args)}
    }
  `;
};
