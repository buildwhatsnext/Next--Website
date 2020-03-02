import React from 'react';
import { Fragment } from 'react';
import cellphone from '../../../assets/svg/icons/01phone.svg';
import mail from '../../../assets/svg/icons/06envelope.svg';
import camera from '../../../assets/svg/icons/13camera.svg';
import location from '../../../assets/svg/icons/34location.svg';

export class ContactInfo extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="Contact__Info">
        <CellPhone />
        <Email />
        <Instagram />
        <Location />
      </div>
    )
  }
}

export function CellPhone(props) {
  return (
    <Fragment>
      <img src={cellphone} alt="cellphone"/>
      <p>212-353-4600</p>
    </Fragment>
  )
}

export function Email(props) {
  return (
    <Fragment>
      <img src={mail} alt="mail"/>
      <p>next@hlw.com</p>
    </Fragment>
  )
}

export function Instagram(props) {
  return (
    <Fragment>
      <img src={camera} alt="camera"/>
      <p>@buildwhatsnext</p>
    </Fragment>
  )
}

export function Location(props) {
  return (
    <Fragment>
      <img src={location} alt="location"/>
      <p>5 Penn Plaza</p>
      <p>New York, NY</p>
      <p>10001</p>
    </Fragment>
  )
}