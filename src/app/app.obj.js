import React from 'react';
import AppRouter from './app.router';
import AppCursor from './app.cursor';
import './app.style.desktop.scss';
import './app.style.mobile.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: 0,
      positionY: 0
    }
    this.updateMousePosition = this.updateMousePosition.bind(this);
  }

  updateMousePosition = (event) => {
    event.preventDefault();
    const position = {
      x : event.clientX,
      y : event.clientY
    }

    console.log('This is the positionX: ' + position.x);
    console.log('This is the positionY: ' + position.y);

    this.setState({
      positionX: position.x,
      positionY: position.y
    });
  }

  render() {
    return (
    <div className="app" onMouseMove={this.updateMousePosition}>
      <AppCursor 
        positionX={ this.state.positionX } 
        positionY={ this.state.positionY } 
      />
      <AppRouter />
    </div>
    )
  }
}