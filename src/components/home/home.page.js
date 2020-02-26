import React from 'react';
import './home.style.desktop.scss';
import './home.style.mobile.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('In the Home component');
  }

  render() {
    return (
      <h2>
        <div className="start">
          Home Start!

          Keep it going
        </div>
      </h2>
    )
  }
}
