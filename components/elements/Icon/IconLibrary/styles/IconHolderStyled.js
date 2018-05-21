import { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import _get from 'lodash.get';
import { transition } from '../../../../../styles/utils/mixins';
import { iconDefaults } from '../../styles/theme';

const propTypes = {
  /** Set icon's source */
  src: PropTypes.string,
  
  /** Set icon size */
  size: PropTypes.oneOf(['inherit', 'small', 'normal', 'large']),
  /** Scale icon */
  sizeMultiplicator: PropTypes.number,
  
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
const IconImgSize = ({ sizeMultiplicator, theme, sizeKey, src }) => {
  const imgSize =
    _get(
      theme,
      ['components', 'icon', 'size', sizeKey, 'imgSize'],
      iconDefaults.size[sizeKey].imgSize,
    );
  
  return css`
    background-size:
      ${typeof imgSize === 'string'
        ? imgSize
        : `${imgSize * sizeMultiplicator}px`
      };
      
    background-image: url('${src}');
  `;
};

// STYLES
export const IconHolderStyled = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;  
  background-position: center;
  background-repeat: no-repeat;  
  color: inherit;
  
  ${transition('color, opacity')};  
  ${IconImgSize};
`;

IconHolderStyled.propTypes = propTypes;
IconHolderStyled.defaultProps = defaultProps;
IconHolderStyled.displayName = 'IconHolderStyled';
