import React from 'react';
import { ServiceList } from './services.item';

export default function ServicesOverviewPage(props) {
  const { history } = props;

  return (
    <div className="page page__services">
      <div className="page__services__items">
        <ServiceList history={history} />
      </div>
    </div>
  )
}