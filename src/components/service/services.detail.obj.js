import React from 'react';
import data from '../../data/data.services.json';
import './service.detail.desktop.scss';
import './service.detail.mobile.scss';

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
  return (
    <div className= "service__detail">
      <div className="service__detail__mainbox">
        <div className="service__detail__box__coral"></div>
        <div className="service__detail__title">{ data.title }</div>
        <div className="service__detail__description">{ data.description }</div>
        <div className="cta_contactus"><p>Contact Us</p></div>
      </div>
      <div className="service__detail__outerbox">
        <div className="service__detail__subtitle1">{ data.subtitle1 }</div>
        <div className="service__detail__subtitle1description">{ data.subtitle1description }</div>
        <div className="cta1"><p>See How</p></div>
        <div className="service__detail__subtitle2">{ data.subtitle2 }</div>
        <div className="service__detail__subtitle2description">{ data.subtitle2description }</div>
        <div className="cta2"><p>See How</p></div>
        <div className="service__detail__subtitle3">{ data.subtitle3 }</div>
        <div className="service__detail__subtitle3description">{ data.subtitle3description }</div>
        <div className="cta3"><p>See How</p></div>
      </div>
    </div>
  )
}
//     <div className="service__detail">
//       <div className="service__detail__box">
//         <div className="service__detail__box__coral">
//         <div className="service__detail__image__main"></div>
//         <div className="service__detail__name">
//           {/* { data.title } */}
//           {/* Fordham University */}
//         </div>
//         <div className="service__detail__infotable">
//           <ServiceInfoTable {...data} />
//         </div>
//         <div className="service__detail__image__extras"></div>
//         <div className="service__detail__summary"></div>
//           </div>
//         </div>
//     </div>
//   )
// }

// function ServiceInfoTable(data) {

//   const info = convertObjectDataToArray(data);
//   console.log(info);
//   return (
//     <InfoTable data={info} />
//   )
// }

// function convertObjectDataToArray(data) {
//   const names = Object.getOwnPropertyNames(data);

//   var array = names.map(n => {
//     var value = data[n];
//     return {
//       title: n,
//       value
//     }
//   });

//   return array;
// }

