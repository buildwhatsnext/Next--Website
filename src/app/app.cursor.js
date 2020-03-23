import React from 'react';
import './app.cursor.style.desktop.scss';

export default class AppCursor extends React.Component {
  constructor(props) {
    super(props);
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
    <div id="follower">
      <div id="circle1"></div>
      <div id="circle2"></div>
    </div>
    )
  }
}