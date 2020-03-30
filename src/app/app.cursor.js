import React from 'react';
import './app.cursor.style.desktop.scss';

export default class AppCursor extends React.Component {
  constructor(props) {
    super(props);
    this.updateMousePosition = this.updateMousePosition.bind(this);
    this.state = {
      positionX: 0,
      positionY: 0
    }
  }
  
  updateMousePosition = (event) => {
    event.preventDefault();
    // console.log('Mouse moved');
    // console.log(event);
    console.log(event.clientX);
    console.log(event.clientY);
    const position = {
      x : event.clientX,
      y : event.clientY
    }

    console.log('This is the position: ' + position);

    // this.setState({
    //   positionX: event.clientX,
    //   positionY: event.clientY
    // });
  }

  mouseEntered = (event) => {
    event.preventDefault();
    console.log('Entered!');
  }

  mouseLeaving = (event) => {
    event.preventDefault();
    console.log('Left!');
  }

  render() {
    return (
      <div 
        id="follower" 
        className="app__cursor" 
        // onMouseEnter={this.mouseEntered}
        // onMouseLeave={this.mouseLeaving}
        // onMouseDown={this.updateMousePosition}
        onMouseMove={this.updateMousePosition}
      />
    )
  }
}