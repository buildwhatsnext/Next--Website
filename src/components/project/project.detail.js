import React from 'react';
import data from '../../data/data.project.json';
import './project.detail.desktop.scss';
import './project.detail.mobile.scss';

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
    
    <div className="project__detail">
      <div className="project__detail__image__main"></div>
      <div className="project__detail__name">
        {/* Name: { data.title } */}
        Fordham University
      </div>
      <div className="project__detail__infotable"></div>
      <div className="project__detail__image__extras"></div>
      <div className="project__detail__summary"></div>
    </div>
  )
}
