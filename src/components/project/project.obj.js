import React from 'react';
import './project.style.desktop.scss';
import './project.style.mobile.scss';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="page page__project">
        <div className="page__project__title"></div>
        <div className="page__project__items"></div>
      </div>
    )
  }
}