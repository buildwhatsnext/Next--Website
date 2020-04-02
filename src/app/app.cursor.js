import React from 'react';
import './app.cursor.style.desktop.scss';

export default function AppCursor(props) {
  const { positionX, positionY } = props;

  const cursorStyle = {
    top: positionY,
    left: positionX
  }  

  return (
    <div 
        id="follower" 
        className="app__cursor" 
        style={ cursorStyle }
    />
  )
}