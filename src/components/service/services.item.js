import React from 'react';
import { Link } from 'react-router-dom';

import './service.item.desktop.scss';
import './service.item.mobile.scss';

import ServiceData from '../../data/data.services.json';

export function ServiceList(props) {
  const { services } = ServiceData;
  const { history } = props;

  const sNames = Object.getOwnPropertyNames(services);

  let i = 0;
  const serviceList = sNames.map(s => {
    const info = services[s];

    return <ServiceItem key={i++} {...info } history={ history } />
  })

  return (
    <div className="service__data__list">
      { serviceList }
    </div>
  );
}

export function ServiceItem(props) {
  const path = props.history.location.pathname;
  const title = props.slug ? props.slug : "/";
  const serviceName = title.toString().toLowerCase();
  const route = `${path}/${serviceName}`;

  return (
    <div className={`service__item service__item__${props.slug}`}>
      <Link to={route}>
        <div className="service__item__title"> <p>{props.title}</p> </div>
      </Link>
    </div>
  );
}