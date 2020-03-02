import React from 'react';
import { Fragment } from 'react';
import Bot from '../../../assets/04 _ INNObot.svg';

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
      <img src={Bot} alt="Bot"/>
      <p>212-353-4600</p>
    </Fragment>
  )
}

export function Email(props) {
  return (
    <p>next@hlw.com</p>
  )
}

export function Instagram(props) {
  return (
    <p>@buildwhatsnext</p>
  )
}

export function Location(props) {
  return (
    <Fragment>
      <p>5 Penn Plaza</p>
      <p>New York, NY</p>
      <p>10001</p>
    </Fragment>
  )
}