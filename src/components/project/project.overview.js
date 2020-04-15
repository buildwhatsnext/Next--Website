import React from 'react';
import { TimelineLite } from 'gsap';
import { ProjectItem } from './project.item';
import ProjectData from '../../data/data.project.json';

export default class ProjectOverviewPage extends React.Component {

  render() {
    const { projects } = ProjectData;
    const { history } = this.props;
    const pNames = Object.getOwnPropertyNames(projects);

    return (
      <div className="page page__project">
        <div className="page__project__items">
          <div className="project__data__list">
            { 
              pNames.map((project, index) => {
                const info = projects[project];
          
                return <ProjectItem 
                  key={index} 
                  {...info } 
                  history={ history } 
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
