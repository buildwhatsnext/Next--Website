import React, { Fragment, useRef, useEffect } from 'react';
import { TweenMax, Timeline, Power1 } from 'gsap';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';
import { AboutCategory } from '../subcomponents/about_category/category.obj';


export default class About extends React.Component {
  constructor(props) {
    super (props);
    this.myPink=null;
    
  }

  componentDidMount(){
    this.myPink = TweenMax.from(this.myPink, 1.5, {y: 700, ease: Power1.easeInOut})
    this.myWhite = TweenMax.from(this.myWhite, 1.5, {delay: 1.75, opacity: 0, x: 20, y: 20, ease: Power1.easeOut})
  }


  setName = (name) => {
      this.setState({name});
  }

  render() {
    return (
      <Fragment>
        <div className="about">       
          <div className="about__titlepage">  
            <div className="about__coralcard">
              <AboutTitle />
            </div>
            <div className="about__whitecard"></div>
          </div>

          <div className="about__category">
            <AboutCategory />
          </div>  
        </div>
        
      </Fragment>
    )
  }
}