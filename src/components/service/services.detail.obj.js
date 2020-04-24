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

  const back = "Back";

  return (
    <div className="service">
      <div className="service__left">
        <div className="service__left__title">
          {data.title}
        </div>
        <div className={`service__left__icon service__left__icon__${data.slug}`}></div>
      </div>
      <div className="service__right">
        <div className="service__right__switch">
          <div className={`service__right__switch__item service__right__switch__item__${data.slug}`}>
            <div className='service__right__switch__item__name service__right__switch__item__name__1'>{data.servicename1}</div>
            <div className='service__right__switch__item__text service__right__switch__item__text__1'>{data.servicename1text}</div>
            <div className='service__right__switch__item__name service__right__switch__item__name__2'>{data.servicename2}</div>
            <div className='service__right__switch__item__text service__right__switch__item__text__2'>{data.servicename2text}</div>
            <div className='service__right__switch__item__name service__right__switch__item__name__3'>{data.servicename3}</div>
            <div className='service__right__switch__item__text service__right__switch__item__text__3'>{data.servicename3text}</div>
          </div>
        </div>
        <div className={`service__right__descriptiontitle service__right__descriptiontitle__${data.slug}`}>{data.descriptiontitle}</div>
        <div className={`service__right__descriptiontext service__right__descriptiontext__${data.slug}`}>{data.description}</div>
        <div className='service__right__back'>
          <InternalLinkHighlighted value={back} destination="/services" />
        </div>
      </div>
    </div>
  )
}