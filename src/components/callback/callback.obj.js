import React from 'react';
import './callback.style.desktop.scss';
import './callback.style.mobile.scss';
import data from '../../data/data.callback.json';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';

export default class Callback extends React.Component {
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
      <div className={`callback callback__${current.shortName}`}>

        <div className="callback__lefthalfgrid">
          <div className={`callback__icon callback__icon__${current.shortName}`}/>
        </div>

        <div className="callback__righthalfgrid">
          <div className="callback__title"><p>{current.name}</p></div>
          <div className="callback__description"><p>{current.description}</p></div>
          <div className="callback__seehow">
            <InternalLinkHighlighted value={seehow} destination={current.link} />
          </div>
          <div className="callback__previous" onClick={ this.reverse }>
            <p>Previous</p>
          </div>
          <div className="callback__next" onClick={ this.cycle }>
            <p>Next</p>
          </div>
        </div>
      </div>
    )
  }
}
