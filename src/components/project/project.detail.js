import React, { Fragment } from 'react';
import data from '../../data/data.project.json';
import './project.detail.desktop.scss';
import './project.detail.mobile.scss';
import idea from '../../assets/svg/icons/10idea.svg';
import chip from '../../assets/svg/icons/14chip.svg';

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


export function ProjectDetail(data) {
  return (
    <div className="project__detail">
      <div className="project__detail__image__main"/>
      <div className="project__detail__name">
        { data.title }
      </div>
      <div className="project__detail__infotable">
        <ProjectInfoTable {...data} />
      </div>
      <div className="project__detail__summary">
        <ProjectSummary {...data.description } />
      </div>
      <div className="project__detail__image__extras"></div>
    </div>
  )
}

function ProjectSummary(info) {
  const { challenge, outcome } = info;

  const sumC = {
    title: "The Challenge",
    summary: challenge,
    icon: chip
  }

  const sumO = {
    title: "The Outcome",
    summary: outcome,
    icon: idea
  }

  return (
    <div className="summary">
      <div className="summary__challenge">
        <div className="summary__challenge__title">
          <div className="title__icon"> <img src={ sumC.icon} alt=""/> </div>
          <div className="title__text">{ sumC.title}</div>
        </div>
        <div className="summary__challenge__summary">
          { sumC.summary }
        </div>
      </div>
      <div className="summary__outcome">
        <div className="summary__outcome__title">
          <div className="title__icon"> <img src={ sumO.icon } alt=""/> </div>
          <div className="title__text">{ sumO.title}</div>
        </div>
        <div className="summary__outcome__summary">
          { sumO.summary }
        </div>
      </div>
    </div>
  )
}

function ProjectInfoTable(data) {
  const cleaned = cleanInfo(data);
  const info = convertObjectDataToArray(cleaned);
  console.log(info);
  return (
    <InfoTable data={info} />
  )
}

function cleanInfo(projectInfo) {
  const dataNeeds = [
    'client',
    'location',
    'status',
    'type',
    'team'
  ];

  let info = {};

  dataNeeds.forEach(data => {
    info[data] = projectInfo[data];
  });

  return info;
}

function convertObjectDataToArray(data) {
  const names = Object.getOwnPropertyNames(data);

  var array = names.map(name => {
    var value = data[name];
    return {
      title: name,
      value
    }
  });

  return array;
}
