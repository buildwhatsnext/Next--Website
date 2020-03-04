import React from 'react';
import { Fragment } from 'react';
import cellphone from '../../../assets/svg/icons/01phone.svg';
import mail from '../../../assets/svg/icons/06envelope.svg';
import camera from '../../../assets/svg/icons/13camera.svg';
import location from '../../../assets/svg/icons/34location.svg';

export function ContactInfoList(props) {
  return (
    <div className="contact__info">
      {/* <Phone />
      <Email />
      <Insta />
      <Location /> */}
    </div>
  )
}

export const ContactInfoItem = (props) => (
  <div className={`contact__info__item contact__info__${props.infoType}`}>
    <span className="info__text">{ props.value }</span>
    <span className="info__icon">
      <img src={props.iconUrl} alt={props.infoType}/>
    </span>
  </div>
)

export const Phone = () => (
  <ContactInfoItem 
    infoType="phone"
    value="212-353-4600"
    iconUrl={cellphone}
  />
);

export const Email = () => (
  <ContactInfoItem 
    infoType="email"
    value="next@hlw.com"
    iconUrl={mail}
  />
)

export const Insta = () => (
  <ContactInfoItem 
    infoType="insta"
    value="@buildwhatsnext"
    iconUrl={camera}
  />
)

export const Location = () => {
  const locationData = `
    5 Penn Plaza \n
    New York, NY \n
    10001
  `;

  return (
    <ContactInfoItem 
      infoType="location"
      value={locationData}
      iconUrl={location}
    />
  )
}
