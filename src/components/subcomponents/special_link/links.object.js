import React from 'react';
import { Link } from 'react-router-dom';
import './links.style.desktop.scss';

export const LinkHighlighted = (props) => (
  <div className="link__highlighted">
    <div className="link__highlighted__text">{ props.value }</div>
    <div className="link__highlighted__background"></div>
  </div>
);

export const ExternalLinkHighlighted = (props) => (
  <a href={props.destination} target="_blank">
    <LinkHighlighted {...props}/>
  </a>
);

export const InternalLinkHighlighted = (props) => (
  <Link to={props.destination}>
    <LinkHighlighted {...props} />
  </Link>
);
