import React from 'react';
import { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { GoogleMapLinkHighlighted, ExternalLinkHighlighted } from '../../subcomponents/special_link/links.object';

export function ContactInfoList(props) {


  const location = `5 Penn Plaza
  New York, NY
  10001`;

  return (
    <div className="contact__info">
      <div className="contact__info__ticket"><a href="https://hlw.atlassian.net/servicedesk/customer/portal/2"><Ticket /></a></div>
      <div className="contact__info__email"><a href="mailto:next@hlw.com"><Email /></a></div>
      <div className="contact__info__web"><a href="https://www.hlwnext.com/" target="_blank"><Web /></a></div>
      <div className="contact__info__location"><a href="https://goo.gl/maps/mmTSCaahkfkdJkQk9" target="_blank"><Location /></a></div>
    </div>
  )
}

export const ContactInfoItem = (props) => (

  <div className={`contact__info__item contact__info__${props.infoType}`}>
    <div className="info__text">
        { props.value }
    </div>
    <div className="info__icon" style={
      {
        backgroundImage: `url(${props.iconUrl})`
      }
    }/>    
  </div>
)

export const Ticket = () => (
  <ContactInfoItem 
    infoType="ticket"
    value="submit a ticket!"
    iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586987870/icon/flaskicon_z3xxkm.svg'
  />
);

export const Email = () => (
  <ContactInfoItem 
    infoType="email"
    value="next@hlw.com"
    iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586185248/icon/06envelope_jwyoim.svg'
  />
)

export const Web = () => (
  <ContactInfoItem 
    infoType="web"
    value="www.hlwnext.com"
    iconUrl='https://res.cloudinary.com/next-hlw/image/upload/v1586986666/icon/monitoricon_q0fggh.svg'
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


{/* <a href={props.destination} target="_blank" destination={ mapLink }/> */}