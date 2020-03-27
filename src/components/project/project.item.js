import React from 'react';
import './project.item.desktop.scss';
import './project.item.mobile.scss';
import ProjectData from '../../data/data.project.json';

export function ProjectList() {
  const { projects } = ProjectData;

  const pNames = Object.getOwnPropertyNames(projects);

  const projectList = pNames.map(project => {
    const info = projects[project];

    return <ProjectItem {...info } />
  })

  return (
    <div className="project__data__list">
      { projectList }
    </div>
  );
}

export function ProjectItem(props) {
  return (
    <div className={`project__item project__item__${props.align}`}>
      <div className="project__item__title">{ props.title } </div>
      <div className="project__item__type"> { props.type } </div>
      <div className={`project__item__image project__item__image__${props.title}`}/>
    </div>
  );
}