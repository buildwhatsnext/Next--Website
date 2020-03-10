import React from 'react';
import './links.style.desktop.scss';

export const LinkHighlighted = (props) => (
  <div className="link__highlighted">
    <div className="link__highlighted__text">{ props.value }</div>
    <div className="link__highlighted__background"></div>
  </div>
);

