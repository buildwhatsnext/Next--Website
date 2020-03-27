import React from 'react';
import { ProjectList } from './project.item';

export default class ProjectOverviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="page page__project">
        <div className="page__project__items">
          <ProjectList />
        </div>
      </div>
    )
  }
}