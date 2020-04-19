import React, { Fragment } from 'react';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';
import { AboutCategory } from '../subcomponents/about_category/category.obj';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
import data from '../../data/data.about.json';
import Slider from "react-slick;"


export default class AboutBranchPage extends React.Component {
  constructor(props) {
    super(props);
    this.next=this.next.bind(this);
    this.seehow=this.seehow.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  seehow() {
    this.slider.slickSeeHow();
  }

  render() {

    const { aboutBranch } = this.props.match.params;
    const info = data.chapter[aboutBranch];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <AboutPage {...info} />
  }
}


export function AboutPage(data) {
  
  const next = "Next";
  const seehow = "See How";

  const settings = {
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slidesToScroll: 1
  }

  return (
    <div className="about">
      <Slider ref={c => (this.slider = c)} {...settings}>
        <div key={1}>
          <h3>1</h3>
        </div>
      </Slider>
    </div>
  )
}

  // export function AboutPage(data) {
  
  //   const next = "Next";
  //   const seehow = "See How";
  
  //   return (
  //     <div className="about">

  //       <div className={`about__background about__background__${data.shortName}`}/>
  //       <div className={`about__icon about__icon__${data.shortName}`}/>

  //       <div className="about__textgrid">
  //         <div className="about__title"><p>{data.name}</p></div>
  //         <div className="about__description"><p>{data.description}</p></div>
  //         <div className="about__seehow">
  //           <InternalLinkHighlighted value={seehow} destination="/projects/piper" />
  //         </div>
  //         <div className="about__back">
  //           <InternalLinkHighlighted value={next} destination="/about/second" />
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }
