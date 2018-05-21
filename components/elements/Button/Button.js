/**
 * @author Dmitriy Bizyaev
 */

'use strict';

import React, { PropTypes, Component } from 'react';
import { Icon } from '../Icon/Icon';
import { noop } from '../../../utils/misc';

import { ButtonStyled } from './styles/ButtonStyled';
import { ButtonTextStyled } from './styles/ButtonTextStyled';
import { ButtonTitleStyled } from './styles/ButtonTitleStyled';
import { ButtonSubtitleStyled } from './styles/ButtonSubtitleStyled';
import { ButtonIconBoxStyled } from './styles/ButtonIconStyled';

const propTypes = {
  /** Define button's main text */
  text: PropTypes.string,
  href: PropTypes.string,
  /** Define button's subtitle */
  subtitle: PropTypes.string,
  
  /** Define button's size */
  size: PropTypes.oneOf(['inline', 'small', 'normal', 'large']),
  /** Narrow button has smaller horizontal paddings */
  narrow: PropTypes.bool,
  /** Define button's color */
  colorScheme: PropTypes.oneOf([
    'primary',
    'secondary',
    'alert',
    'success',
    'warning',
    'info',
    'flat',
    'flatLight',
    'white',
    'link',
  ]),
  /** Outlined button has border and transparent background */
  outlined: PropTypes.bool,
  /** Define button's radius */
  radius: PropTypes.oneOf(['none', 'default', 'rounded']),
  /** Raised button has shadow */
  raised: PropTypes.bool,
  /** Set disable to true if interaction with button isn't available to user */
  disabled: PropTypes.bool,
  /** Swap icon and text position */
  iconPositionRight: PropTypes.bool,
  
  icon: PropTypes.shape({
    /** Set icon type */
    type: PropTypes.oneOf(['font-awesome', 'library']),
    /** Define button's icon name (for font-awesome) */
    name: PropTypes.string,
    /** Define button's icon source (for library) */
    src: PropTypes.string,
  }),
  
  onPress: PropTypes.func,
  
  /** Define button theme
   * See https://github.com/styled-components/styled-components/blob/master/docs/theming.md
   * for more information
   */
  theme: PropTypes.object,
};
const defaultProps = {
  text: '',
  subtitle: '',
  size: 'normal',
  narrow: false,
  colorScheme: 'flat',
  outlined: false,
  radius: 'default',
  raised: false,
  disabled: false,
  iconPositionRight: false,
  icon: {
    type: 'font-awesome',
    name: '',
    src: '',
  },
  onPress: noop,
  theme: {},
};

export class Button extends Component {
  constructor(props) {
    super(props);
    
    this._handleClick = this._handleClick.bind(this);
  }
  
  _handleClick() {
    if (!this.props.disabled) this.props.onPress();
  }
  
  render() {
    const subtitle = this.props.text && this.props.subtitle
      ? (
        <ButtonSubtitleStyled size={this.props.size}>
          {this.props.subtitle}
        </ButtonSubtitleStyled>
      )
      : null;
    
    const buttonText = this.props.text
      ? (
        <ButtonTextStyled
          text={this.props.text}
          subtitle={this.props.subtitle}
          size={this.props.size}
          iconPositionRight={this.props.iconPositionRight}
        >
          {subtitle}
          <ButtonTitleStyled size={this.props.size}>
            {this.props.text}
          </ButtonTitleStyled>
        </ButtonTextStyled>
      )
      : null;
    
    const buttonIcon = this.props.icon
      ? (
        <ButtonIconBoxStyled
          iconPositionRight={this.props.iconPositionRight}
          size={this.props.size}
        >
          <Icon
            name={this.props.icon.name}
            type={this.props.icon.type}
            src={this.props.icon.src}
            size={this.props.size === 'inline'
              ? 'inherit'
              : this.props.size
            }
            color="inherit"
          />
        </ButtonIconBoxStyled>
      )
      : null;
    
    return (
      <ButtonStyled
        onClick={this._handleClick}
        
        colorScheme={this.props.colorScheme}
        size={this.props.size}
        narrow={this.props.narrow}
        radius={this.props.radius}
        disabled={this.props.disabled}
        outlined={this.props.outlined}
        text={this.props.text}
        subtitle={this.props.subtitle}
        raised={this.props.raised}
        href={this.props.href}
      >
        {buttonIcon}
        {buttonText}
      </ButtonStyled>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
Button.displayName = 'Button';

export const ButtonType = PropTypes.shape(Button.propTypes);
