import React from 'react';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import data from '../../data/data.about.json';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      start: 0,
      end: data.aboutData.length
    }
    this.cycle = this.cycle.bind(this);
    this.reverse = this.reverse.bind(this);
  }

  cycle() {
    const { start, end, current } = this.state;
    let count = current + 1;

    if(count > end) {
      count = start;
    }
    
    this.setState({
      current: count
    });
  }

  reverse() {
    const { start, end, current } = this.state;
    let count = current;

    if((count - 1) < start) {
      count = end;
    }
    
    this.setState({
      current: count
    });
  }
  
  render() {
    const info = data.aboutData;
    const cur = info[this.state.current];
    const next = "Next";
    const seehow = "See How";

    return (
      <div className={`about about__${cur.shortName}`}>

        <div className="about__lefthalfgrid">
          <div className={`about__icon about__icon__${cur.shortName}`}/>
        </div>

        <div className="about__righthalfgrid">
          <div className="about__title"><p>{cur.name}</p></div>
          <div className="about__description"><p>{cur.description}</p></div>
          <div className="about__seehow">
            <InternalLinkHighlighted value={seehow} destination={cur.link} />
          </div>
          <div className="about__previous" onClick={ this.reverse }>
            <p>Previous</p>
          </div>
          <div className="about__next" onClick={ this.cycle }>
            <p>Next</p>
            {/* <InternalLinkHighlighted value={next} destination="/about/second" /> */}
          </div>
        </div>
      </div>
    )
  }
}
