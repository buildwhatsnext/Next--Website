import React, { Fragment } from 'react';
import data from '../../data/data.project.json';
import './project.detail.style.desktop.scss';
import './project.detail.style.mobile.scss'; 
import './project.detail.desktop.scss';
import './project.detail.mobile.scss';

import { InfoTable } from '../subcomponents/infotable/infotable.object';

export class ProjectDetailPage extends React.Component {
  render() {
    const { projectId } = this.props.match.params;
    const info = data.projects[projectId];
    const errorQuote = "I'm afraid I can't do that Michael...";
    console.log(info);

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <ProjectDetail {...info} />
  }
}


export function ProjectDetail(projData) {
  return (
    <div className="project__detail">
      <div className="project__detail__image__main"></div>
      <div className="project__detail__name">
        {/* Name: { data.title } */}
        Fordham University
      </div>
      <div className="project__detail__infotable">
        <ProjectInfoTable {...data} />
      </div>
      <div className="project__detail__image__extras"></div>
      <div className="project__detail__summary"></div>
    </div>
  )
}

function ProjectInfoTable(data) {

  const info = convertObjectDataToArray(data);
  console.log(info);
  return (
    <InfoTable data={info} />
  )
}

function convertObjectDataToArray(data) {
  const names = Object.getOwnPropertyNames(data);

  var array = names.map(n => {
    var value = data[n];
    return {
      title: n,
      value
    }
  });

  return array;
}

// export function ProjectDetail(projData) {
//   return (
//     <div className="projectdetailpage">
//         <div className="project__title">{ projData.title }</div>
//         <ProjectDetailTable { ...projData } />
//         <div className="project__description">{ projData.description }</div>
//         <div className="picture"></div>
//         {/* <div className="project__pictureURL">{ projData.pictureURL }</div> */}
//         {/* <div className="project__pictureURL"></div> */}
//       </div>
//   )
// }

// function ProjectDetailTable(elemData) {
//   return (
//     <div className="project__table">
//       <ReusableTableElement data={ elemData.client } title='Client' dataType='client'/>
//       <ReusableTableElement data={ elemData.location } title='Location' dataType='location'/>
//       <ReusableTableElement data={ elemData.status } title='Status' dataType='status'/>
//       <ReusableTableElement data={ elemData.type } title='Type' dataType='type'/>
//       <ReusableTableElement data={ elemData.teams } title='Team' dataType='team'/>      
//     </div>
//   )
// }

// function ReusableTableElement(props) {
//   return (
//     <div className={`project__${props.dataType}`}>
//       <p className={`project__${props.dataType}__title`}>{props.title}</p>
//       <p className={`project__${props.dataType}__data`}>{props.data}</p>    

