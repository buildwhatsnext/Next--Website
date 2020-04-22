
import React, { Fragment } from 'react';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
import data from '../../data/data.about.json';

export default class AboutBranchPage extends React.Component {

  render() {

    const { aboutBranch } = this.props.match.params;
    const info = data.aboutData[aboutBranch];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <AboutPage {...info} />
  }
}

  export function AboutPage(data) {
  
    const next = "Next";
    const seehow = "See How";
  
    return (
      <div className="about">

        <div className={`about__background about__background__${data.shortName}`}/>
        <div className={`about__icon about__icon__${data.shortName}`}/>

        <div className="about__textgrid">
          <div className="about__title"><p>{data.name}</p></div>
          <div className="about__description"><p>{data.description}</p></div>
          <div className="about__seehow">
            <InternalLinkHighlighted value={seehow} destination="/projects/piper" />
          </div>
          <div className="about__next">
            <InternalLinkHighlighted value={next} destination="/about/second" />
          </div>
        </div>
      </div>
    )
  }
