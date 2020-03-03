import React from 'react';
import './project.style.desktop.scss';
import './project.style.mobile.scss';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'We Create Great Work', 
      projects: [
        {
          title: 'Fordham',
          type: 'Extended Reality'
        },
        {
          title: 'Google',
          type: 'BIM Implementation'
        },
        {
          title: 'Piper',
          type: 'Mobile Application'
        },
        {
          title: 'Fordham',
          type: 'Extended Reality'
        },
        {
          title: 'Google',
          type: 'BIM Implementation'
        },
        {
          title: 'Piper',
          type: 'Mobile Application'
        },
      ]
    }
  }

  populateProjects = () => {
    console.log('Populating projects');
    const projects = this.formatProjects(this.state.projects);
    return projects;
  }

  formatProjects = (items) => {
    let i = 0;
    const listItems = items.map(item => {
      return <ProjectItem key={i++} {...item} />
    });
  
    return (
      <div className="project__list">
        { listItems }
      </div>
    )
  }

  render() {
    const projects = this.populateProjects();

    return (
      <div className="page page__project">
        <div className="page__project__title">
          { this.state.title }
        </div>
        <div className="page__project__items">
          { projects }
        </div>
      </div>
    )
  }
}

export function ProjectList(props) {
  const { items } = props;

}

export function ProjectItem(props) {
  return (
    <div className="project__item">
      <div className="project__item__title">{ props.title } </div>
      <div className="project__item__type"> { props.type } </div>
    </div>
  );
}