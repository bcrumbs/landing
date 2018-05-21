import { PropTypes } from 'react';
import styled from 'styled-components';
import _get from 'lodash.get';
import { transition } from '../../../../../styles/utils/mixins';
import { iconDefaults } from '../../styles/theme';
import {
  spin,
  pulse,
  border,
  rounded,
  transform,
} from '../../styles/IconStyled';

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
  
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf(['inherit', 'small', 'normal', 'large']),
  /** Scale icon */
  sizeMultiplicator: PropTypes.number,
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf(['light', 'dark']),
  /** Set exact icon's color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
  /** Make icon spinning infinitely & smooth */
  spin: PropTypes.bool,
  /** Make icon spinning infinitely & with steps */
  pulse: PropTypes.bool,
  
  /** Define component theme config
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};

const defaultProps = {
  src: '',
  
  border: false,
  rounded: false,
  size: 'normal',
  sizeMultiplicator: 1,
  colorScheme: 'dark',
  color: '',
  backgroundColor: '',
  
  flip: 'none',
  rotate: 0,
  spin: false,
  pulse: false,
  
  theme: null,
};

// PROP RECEIVERS
const iconSize = ({ sizeMultiplicator, theme, sizeKey }) => {
  const width =
    _get(
      theme,
      ['components', 'icon', 'size', sizeKey, 'width'],
      iconDefaults.size[sizeKey].width,
    );
  
  const height =
    _get(
      theme,
      ['components', 'icon', 'size', sizeKey, 'height'],
      iconDefaults.size[sizeKey].height,
    );
    
  return `
    width:
      ${typeof width === 'string'
        ? width
        : `${width * sizeMultiplicator}px`
      };
      
    height:
      ${typeof height === 'string'
        ? height
        : `${height * sizeMultiplicator}px`
      };
      
    line-height:
      ${typeof height === 'string'
        ? height
        : `${height * sizeMultiplicator}px`
      };
  `;
};

const iconColor = ({ colorScheme, userColor, bgColor, theme }) => {
  const colorDark =
    _get(
      theme,
      ['components', 'icon', 'color', 'dark'],
      iconDefaults.color.dark,
    );
  
  const colorLight =
    _get(
      theme,
      ['components', 'icon', 'color', 'light'],
      iconDefaults.color.light,
    );

  const color = colorScheme === 'dark'
    ? colorDark
    : colorLight;

  return `  
    color: ${userColor || color};
    
    ${bgColor
    ? `background-color: ${bgColor}`
    : null
    }
  `;
};

// STYLES
export const IconLibraryStyled = styled.div`
  text-align: center;
  flex-shrink: 0;
  position: relative;
  
  ${transition('color, opacity')};  
  ${iconSize};
  ${iconColor};  
  ${border};
  ${rounded};
  ${transform};
  ${spin};
  ${pulse};
`;

IconLibraryStyled.propTypes = propTypes;
IconLibraryStyled.defaultProps = defaultProps;
IconLibraryStyled.displayName = 'IconLibraryStyled';
