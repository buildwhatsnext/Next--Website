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
  
  updateMousePosition = (position) => {
    this.setState({
      positionX: position.X,
      positionY: position.Y
    });
  }

  render() {
    return (
      <div 
        id="follower" 
        className="app__cursor" 
        onMouseMove={this.updateMousePosition}
      />
    )
  }
}