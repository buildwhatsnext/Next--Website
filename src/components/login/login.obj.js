import React from 'react';
import './login.style.desktop.scss';
import './login.style.mobile.scss';
import data from '../../data/data.callback.json';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      start: 0,
      end: data.callbackData.length
    }
    this.cycle = this.cycle.bind(this);
    this.reverse = this.reverse.bind(this);
  }

  cycle() {
    const { start, end, current } = this.state;
    let count = current + 1;

    if(count > 4) {
      count = 0;
    }
    
    this.setState({
      current: count
    });
  }

  reverse() {
    const { start, end, current } = this.state;
    let count = current - 1;

    if(count < 0) {
      count = 4;
    }
    
    this.setState({
      current: count
    });
  }
  
  render() {
    const info = data.callbackData;
    const current = info[this.state.current];
    const next = "Next";
    const seehow = "See How";
    console.log(this.state.current);

    return (
      <div className={`login login__${current.shortName}`}>

        <div className="login__lefthalfgrid">
          <div className={`login__icon login__icon__${current.shortName}`}/>
        </div>

        <div className="login__righthalfgrid">
          <div className="login__title">
            <p>Welcome!</p>
          </div>
          <div className="login__description">
            <p>Enter hlw Credentials to grant access to your data!</p>
          </div>
          <div className="login__login">
            <p>Log In</p>
          </div>
          <div className="login__ticket">
            <p>Ticket</p>
          </div>
        </div>
      </div>
    )
  }
}
