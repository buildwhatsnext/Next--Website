import React from 'react';
import data from '../../data/data.project.json';
import './project.detail.desktop.scss';
import './project.detail.mobile.scss';

import { InfoTable } from '../subcomponents/infotable/infotable.object';

export class ProjectDetailPage extends React.Component {
  render() {
    const { projectId } = this.props.match.params;
    const info = data.projects[projectId];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <ProjectDetail {...info} />
  }
}


export function ProjectDetail(data) {
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

