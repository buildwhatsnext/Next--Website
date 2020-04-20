import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import aboutData from '../../data/data.about.json';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
import AboutRoutePage from './about.detail.obj';

const dataSet = ["red", "yellow", "green", "blue", "purple"];

export default class About extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      pageNumber: 0 + {dataSet[0]}
    };

    this.aboutPage = this.aboutPage.bind(this);
  }

  aboutPage() {
    const currentPage = this.state.pageNumber + 1;
    this.setState({
      pageNumber: currentPage
    })
  }

    
  render() {

    return (
      <div>
        <p>{this.state.pageNumber}</p>
        {/* <Button action={this.currentPage} label="Next" /> */}
      </div>
    )
  }

  // const Button = ({action, label}) => (
  //   <button onClick={() => action()}>{label}</button>
  // )

  
  // render() {

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
}
