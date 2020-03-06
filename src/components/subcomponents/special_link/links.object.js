import React from 'react';
import './links.style.desktop.scss';

export const LinkHighlighted = (props) => (
  <div className="link__highlighted">
    <p className="link__highlighted__text">{ props.value }</p>
    <p className="link__highlighted__background"></p>
  </div>
);

