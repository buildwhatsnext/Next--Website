import React from 'react';
import { Fragment } from 'react';
// import cellphone from '../../../assets/svg/icons/01phone.svg';
// import mail from '../../../assets/svg/icons/06envelope.svg';
// import camera from '../../../assets/svg/icons/13camera.svg';
// import location from '../../../assets/svg/icons/34location.svg';

export function ContactInfoList(props) {
  return (
    <div className="contact__info">
      <Phone />
      <Email />
      <Insta />
      <Location />
    </div>
  )
}

export const ContactInfoItem = (props) => (
  <div className={`contact__info__item contact__info__${props.infoType}`}>
    <div className="info__text">{ props.value }</div>
    <div className="info__icon" style={
      {
        backgroundImage: `url(${props.iconUrl})`
      }
    }/>    
  </div>
)

export const Phone = () => (
  <ContactInfoItem 
    infoType="phone"
    value="212-353-4600"
    iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586185248/icon/01phone_rkbsq8.svg'
  />
);

export const Email = () => (
  <ContactInfoItem 
    infoType="email"
    value="next@hlw.com"
    iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586185248/icon/06envelope_jwyoim.svg'
  />
)

export const Insta = () => (
  <ContactInfoItem 
    infoType="insta"
    value="@buildwhatsnext"
    iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586185248/icon/13camera_thjurf.svg'
  />
)

export const Location = () => {
  const locationData = `5 Penn Plaza
  New York, NY
  10001
  `;

  return (
    <ContactInfoItem 
      infoType="location"
      value={locationData}
      iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586185248/icon/34location_q4lzpx.svg'
    />
  )
}
