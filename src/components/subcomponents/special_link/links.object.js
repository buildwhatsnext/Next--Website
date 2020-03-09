import React from 'react';
import { Link } from 'react-router-dom';
import './links.style.desktop.scss';

export const LinkHighlighted = (props) => (
  <div className="link__highlighted">
    <p className="link__highlighted__text">{ props.value }</p>
    <p className="link__highlighted__background"></p>
  </div>
);

export const ExternalLinkHighlighted = (props) => (
  <a href={props.destination}>
    <LinkHighlighted {...props}/>
  </a>
);

export const InternalLinkHighlighted = (props) => (
  <Link to={props.destination}>
    <LinkHighlighted {...props} />
  </Link>
);
