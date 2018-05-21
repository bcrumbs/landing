'use strict';

import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon } from '../Icon/Icon';
import { AnchorLinkStyled, AnchorStyled } from './styles/AnchorStyled';
import { AnchorContentStyled } from './styles/AnchorContentStyled';
import { AnchorIconStyled } from './styles/AnchorIconStyled';

/* eslint-disable react/require-default-props */
const propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  query: PropTypes.object,
  state: PropTypes.object,
  activeStyle: PropTypes.object,
  activeClassName: PropTypes.string,
  onlyActiveOnIndex: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  target: PropTypes.string,
  scroll: PropTypes.bool,

  /** Set anchor tag to simple <a /> */
  plain: PropTypes.bool,

  icon: PropTypes.shape({
    /** Set icon type */
    type: PropTypes.oneOf(['font-awesome', 'library']),
    /** Define button's icon name (for font-awesome) */
    name: PropTypes.string,
    /** Define button's icon source (for library) */
    src: PropTypes.string,
  }),
};
/* eslint-enable */

const defaultProps = {
  onlyActiveOnIndex: false,
  plain: false,
  scroll: false,
  icon: null,
};

export const Anchor = ({ scroll, ...props }) => {
  const Tag = scroll ? AnchorLinkStyled : AnchorStyled;
  const icon = props.icon &&
    <AnchorIconStyled>
      <Icon {...props.icon} size="inherit" color="inherit" />
    </AnchorIconStyled>;

  return (
    <Tag {...props}>
      {icon}
      <AnchorContentStyled>
        {props.children}
      </AnchorContentStyled>
    </Tag>
  );
};

Anchor.displayName = 'Anchor';
Anchor.propTypes = propTypes;
Anchor.defaultProps = defaultProps;
