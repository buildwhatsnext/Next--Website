import React from 'react';
import { Link } from 'react-router-dom';
import './links.style.desktop.scss';

export const ContactHighlighted = (props) => (
  <div className="Contact__highlighted">
    <div className="Contact__highlighted__text">{ props.value }</div>
    <div className="Contact__highlighted__background"></div>
  </div>
);

export const LinkHighlighted = (props) => (
  <div className="link__highlighted">
    <div className="link__highlighted__text">{ props.value }</div>
    <div className="link__highlighted__background"></div>
  </div>
);

export const GoogleMapLinkHighlighted = (props) => (
  <a href={props.destination} target="_blank">
    <ContactHighlighted {...props}/>
  </a>
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
