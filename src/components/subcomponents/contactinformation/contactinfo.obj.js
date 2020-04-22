import React from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom'

export function ContactInfoList(props) {

  const mapLink = "https://www.google.com/maps/place/HLW+International+LLP/@40.7519245,-73.9962564,17z/data=!3m1!4b1!4m5!3m4!1s0x89c259a25391ccf5:0x8438bed5d382c900!8m2!3d40.7519205!4d-73.9940677";
  return (
    <div className="contact__info">
      <div className="contact__info__phone"> <Phone /></div>
      <div className="contact__info__email"> <Email /></div>
      <div className="contact__info__insta"> <Insta /></div>
      <div className="contact__info__location" onClick={mapLink}> <Location /></div>
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
