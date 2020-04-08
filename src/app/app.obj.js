import React from 'react';
import AppRouter from './app.router';
import AppCursor from './app.cursor';
import './app.style.desktop.scss';
import './app.style.mobile.scss';
import './app.style.general.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
      positionY: 0
    }
    // this.updateMousePosition = this.updateMousePosition.bind(this);
  }

  updateMousePosition = (event) => {
    event.preventDefault();
    const position = {
      x : event.clientX, // subtracting half the width of the follower element will center this
      y : event.clientY  // however, for some reason, it makes things completely unclickable
    }


    this.setState({
      positionX: position.x,
      positionY: position.y
    });
  }

  render() {
    return (
    <div className="app app__theme__blue" onMouseMove={this.updateMousePosition}>
      {/* <AppCursor 
        positionX={ this.state.positionX } 
        positionY={ this.state.positionY } 
      /> */}
      <AppRouter />
    </div>
    )
  }
}