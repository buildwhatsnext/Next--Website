import React from 'react';
import { Fragment } from 'react';

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
    <p>212-353-4600</p>
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