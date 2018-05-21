import { keyframes, css } from 'styled-components';
import _get from 'lodash.get';
import { iconDefaults } from './theme';

const animationSpin = keyframes`  
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }  
`;

// Props
export const spin = ({ spin }) => spin && `
  animation: ${animationSpin} 2s infinite linear;  
`;

export const pulse = ({ pulse }) => pulse && `
  animation: ${animationSpin} 1s infinite steps(8);
`;

export const border = ({
  border, rounded, colorScheme, userColor, theme,
}) => {
  const colorLight =
    _get(
      theme,
      ['components', 'icon', 'color', 'light'],
      iconDefaults.color.light,
    );
  
  const colorDark =
    _get(
      theme,
      ['components', 'icon', 'color', 'dark'],
      iconDefaults.color.dark,
    );
  
  const borderWidth =
    _get(
      theme,
      ['components', 'icon', 'borderWidth'],
      iconDefaults.borderWidth,
    );
  
  const borderRadius =
    _get(
      theme,
      ['components', 'icon', 'borderRadius'],
      iconDefaults.borderRadius,
    );

  const color = colorScheme === 'dark'
    ? colorDark
    : colorLight;

  return border && css`
    border:
      solid 
      ${borderWidth}px 
      ${userColor || color};
    
    ${!rounded && `border-radius: 
        ${typeof borderRadius === 'string'
          ? borderRadius
          : `${borderRadius}px`
        }
      `
    }
`;
};

export const rounded = ({ rounded }) => rounded && `
    border-radius: 50%;
`;

export const transform = ({ flip, rotate }) => {
  let iconFlip = '',
    iconRotate = '';
  
  if (flip === 'horizontal')
    iconFlip = 'scale(-1, 1);';
  else if (flip === 'vertical')
    iconFlip = 'scale(1, -1);';
  
  if (rotate) iconRotate = `rotate(${rotate}deg)`;
  
  return (iconFlip || iconRotate) ? `transform: ${iconFlip} ${iconRotate}` : '';
};
