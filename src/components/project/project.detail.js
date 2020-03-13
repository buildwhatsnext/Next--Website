import React, { Fragment } from 'react';
import data from '../../data/data.project.json';
import './project.detail.style.desktop.scss'

export class ProjectDetailPage extends React.Component {
  render() {
    const { projectId } = this.props.match.params;
    const info = data.projects[projectId];
    const errorQuote = "I'm afraid I can't do that Michael...";
    console.log(data);

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <ProjectDetail {...info} />
  }
}


export function ProjectDetail(data) {
  return (
      <div className="projectdetailpage">
          <div className="project__title">{ data.title }</div>
          <div className="project__table">
            <div className="project__client">Client{ data.client }</div>
            <div className="project__location">{ data.location }</div>
            <div className="project__status">{ data.status }</div>
            <div className="project__type">{ data.type }</div>
            <div className="project__team">{ data.team }</div>
          </div>
          <div className="project__description">{ data.decription }</div>
          <div className="project__picture">{ data.picture }</div>
        </div>

  )
}
