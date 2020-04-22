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
      end: 4
    }
    this.increment = this.increment.bind(this);
  }

  increment() {
    // + 1 on this.state.current
    let count = this.state.current + 1;
    
    // when i > 4, i should equal 0
    if(count > 4) {
      count = 0;
    }
    
    this.setState({
      current: count
    });


    /* 
    for( piece1; piece2; piece3 ) {
      piece1: setting up the variables
      piece2: conditions for continuing loop
      piece3: function to run at end of each iteration
    }
    */

    // when i > 4, i should equal 0
    // for(var i = 0; i < 4; i++) {

    // }
  }
  
  render() {
    const info = data.aboutData;
    const cur = info[this.state.current];
    const next = "Next";
    const seehow = "See How";

    return (
      <div className="about">

        <div className={`about__background about__background__${cur.shortName}`}/>
        <div className={`about__icon about__icon__${cur.shortName}`}/>

        <div className="about__textgrid">
          <div className="about__title"><p>{cur.name}</p></div>
          <div className="about__description"><p>{cur.description}</p></div>
          <div className="about__seehow">
            <InternalLinkHighlighted value={seehow} destination="/projects/piper" />
          </div>
          <div className="about__next" onClick={ this.increment }>
            Next
            {/* <InternalLinkHighlighted value={next} destination="/about/second" /> */}
          </div>
        </div>
      </div>
    )
  }
}
