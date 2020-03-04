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
    <div className="information">
      <span className="text">
        212-353-4600
      </span>
      <span className="icon">
        <img src={cellphone} alt="cellphone"/> 
      </span>
    </div>
  )
}

export function Email(props) {
  return (
    <div className="information">
      <span className="text">
        next@hlw.com
      </span>
      <span className="icon">
        <img src={mail} alt="mail"/> 
      </span>
    </div>
  )
}

export function Instagram(props) {
  return (
    <div className="information">
      <span className="text">
        <p>@buildwhatsnext</p>
      </span>
      <span className="icon">
        <img src={camera} alt="camera"/> 
      </span>
    </div>
  )
}


export function Location(props) {
  return (
    <div className="information_location">
      <span className="location_text">
        <p>5 Penn Plaza</p>
        <p>New York NY</p>
        <p>10001</p>
      </span>
      <span className="location_icon">
        <img src={location} alt="location"/> 
      </span>
    </div>
  )
}

// export function Instagram(props) {
//   return (
//     <Fragment>
//       <div className="entirecamera">
//         <img src={camera} alt="camera" className="cameraicon"/>
//         <p>@buildwhatsnext</p>
//       </div>
//     </Fragment>
//   )
// }

// export function Location(props) {
//   return (
//     <Fragment>
//       <div className="information">
//         <img src={location} alt="location" className="locationicon"/>
//         <p>5 Penn Plaza</p>
//         <p>New York, NY</p>
//         <p>10001</p>
//       </div>
//     </Fragment>
//   )
// }