import React, { Fragment } from 'react';
import data from '../../data/data.project.json';
import './project.detail.desktop.scss';
import './project.detail.laptop.scss';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
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

      <div className={`project__detail__name project__detail__name__${data.slug}`}>
        <p>{ data.title }</p>
      </div>

      <div className="project__detail__infotable">
        <ProjectInfoTable {...data} />
      </div>

      <div className="project__detail__summary">
        <ProjectSummary {...data.description } />
      </div>

      <div className="project__detail__pictureURL__wrap">
        <div className={`project__detail__pictureURL project__detail__pictureURL__${data.slug}`} />
      </div>
    </div>
  )
}

function ProjectSummary(info) {
  const { challenge, outcome } = info;

  const sumC = {
    title: "What's up?",
    summary: challenge,
    icon: 'https://res.cloudinary.com/next-hlw/image/upload/v1586185305/icon/14chip_xnacgj.svg'
  }

  // const sumO = {
  //   title: "The Outcome",
  //   summary: outcome,
  //   icon: 'https://res.cloudinary.com/next-hlw/image/upload/v1586185086/icon/56.whitebulb_y75fno.svg'
  // }

  
  const back = `Back`;

  return (
    <div className="summary">
      <div className="project__detail__back">
        <InternalLinkHighlighted value={back} destination="/projects" />
      </div>
      <div className="summary__challenge">
        <div className="summary__challenge__title">
          <div className="title__icon"> <img src={ sumC.icon} alt=""/> </div>
          <div className="title__text">{ sumC.title}</div>
        </div>
        <div className="summary__challenge__summary">
          { sumC.summary }
        </div>
      </div>
      {/* <div className="summary__outcome">
        <div className="summary__outcome__title">
          <div className="title__icon"> <img src={ sumO.icon } alt=""/> </div>
          <div className="title__text">{ sumO.title }</div>
        </div>
        <div className="summary__outcome__summary">
          { sumO.summary }
        </div>
      </div> */}
    </div>
  )
}

function ProjectInfoTable(data) {
  const cleaned = cleanInfo(data);
  const info = convertObjectDataToArray(cleaned);
  return (
    <InfoTable data={info} />
  )
}

function cleanInfo(projectInfo) {
  const dataNeeds = [
    'A',
    'B',
    'C',
    'D',
    'E'
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
