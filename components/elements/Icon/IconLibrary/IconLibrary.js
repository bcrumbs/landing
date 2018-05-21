'use strict';

import React, { PropTypes } from 'react';
import { noop } from '../../../../utils/misc';
import { IconLibraryStyled } from './styles/IconLibraryStyled';
import { IconHolderStyled } from './styles/IconHolderStyled';

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
  
  /** Turns on/off icon's border */
  border: PropTypes.bool,
  /** Make icon rounded */
  rounded: PropTypes.bool,
  /** Set icon size */
  size: PropTypes.oneOf([
    'inherit',
    'small',
    'normal',
    'large',
  ]),
  /** Scale icon */
  sizeMultiplicator: PropTypes.number,
  /** Set icon's color scheme */
  colorScheme: PropTypes.oneOf([
    'light',
    'dark',
  ]),
  /** Set exact icon's color */
  color: PropTypes.string,
  /** Set icon's background color */
  backgroundColor: PropTypes.string,
  
  /** Set icon's flipping plane */
  flip: PropTypes.oneOf([
    'none',
    'horizontal',
    'vertical',
  ]),
  /** Rotate icon by some degree */
  rotate: PropTypes.number,
  /** Make icon spinning infinitely & smooth */
  spin: PropTypes.bool,
  /** Make icon spinning infinitely & with steps */
  pulse: PropTypes.bool,

  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  tabIndex: PropTypes.number,
  
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
  
  onClick: noop,
  onKeyDown: noop,
  tabIndex: -1,
  
  theme: null,
};

export const IconLibrary = props => {
  const attributes = {
    onClick: props.onClick,
    onKeyDown: props.onKeyDown,
  };

  if (props.tabIndex !== -1) attributes.tabIndex = props.tabIndex;
  
  return (
    <IconLibraryStyled
      {...attributes}
      
      border={props.border}
      rounded={props.rounded}
      sizeMultiplicator={props.sizeMultiplicator}
      sizeKey={props.size}
      colorScheme={props.colorScheme}
      userColor={props.color}
      bgColor={props.backgroundColor}

      flip={props.flip}
      rotate={props.rotate}
      spin={props.spin}
      pulse={props.pulse}
      
      theme={props.theme}
    >
      <IconHolderStyled
        sizeMultiplicator={props.sizeMultiplicator}
        sizeKey={props.size}
        src={props.src}

        theme={props.theme}
      />
    </IconLibraryStyled>
  );
};

IconLibrary.propTypes = propTypes;
IconLibrary.defaultProps = defaultProps;
IconLibrary.displayName = 'IconLibrary';
