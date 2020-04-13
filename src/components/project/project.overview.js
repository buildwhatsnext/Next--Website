import React from 'react';
import { TimelineLite } from 'gsap';
import { ProjectItem } from './project.item';
import ProjectData from '../../data/data.project.json';

export default class ProjectOverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.projects = [];
    this.timeline = new TimelineLite();
  }

  componentDidMount() {
    this.timeline.staggerTo(this.projects, .5, { y: 0, autoAlpha: 1}, .1);
    // this.playAnimation();
    console.log(this.projects);
  }

  createProjectList = () => {
    const { projects } = ProjectData;
    const { history } = this.props;

    const pNames = Object.getOwnPropertyNames(projects);

    // const projectList = pNames.map((project, index) => {
    //   const info = projects[project];

    //   return <ProjectItem key={index} {...info } history={ history } ref={ p => this.projects[index] = p } />
    // });

    // return projectList;
    return pNames;
  }

  playAnimation() {
    // console.log('Should play');
    this.timeline.play();
    // console.log('Did it play?');
  }

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
                  ref={ p => this.projects[index] = p } 
                />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
