import React from 'react';
import data from '../../data/data.services.json';
import './service.detail.desktop.scss';
import './service.detail.mobile.scss';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';

import { InfoTable } from '../subcomponents/infotable/infotable.object';

export class ServiceDetailPage extends React.Component {
  render() {
    const { serviceId } = this.props.match.params;
    const info = data.services[serviceId];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <ServiceDetail {...info} />
  }
}


export function ServiceDetail(data) {

  const contactus = "Contact Us";
  const seehow = "See How";

  return (
    <div className="service">
      <div className="service__left">
        <div className="service__left__title">
          {data.title}
        </div>
        <div className={`service__left__icon service__left__icon__${data.slug}`}></div>
      </div>
      <div className="service__right">
        <div className="service__right__switch"></div>
        <div className={`service__right__descriptiontitle service__right__descriptiontitle__${data.slug}`}>{data.descriptiontitle}</div>
        <div className={`service__right__descriptiontext service__right__descriptiontext__${data.slug}`}>{data.description}</div>
      </div>
    </div>
  )
}