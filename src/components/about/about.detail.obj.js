
import React, { Fragment } from 'react';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
import data from '../../data/data.about.json';

const arrayData= [
  {
    id:'1',
    title: 'Craft Inclusive Experiences',
    shortname: 'experiences',
    description: 'We craft immersive, narrative-driven, and collaborative experiences for project stakeholders.'
  },

  {
    id:'2',
    title: 'Elevate Capabilities',
    shortname: 'experiences',
    description: 'We help build structure, resources, knowledge to help project teams run smarter.'
  },

  {
    id:'3',
    title: 'Create Insight',
    shortname: 'insight',
    description: 'We create a platform for intelligent decision-making in the design process.'
  },

  {
    id:'4',
    title: 'Invent',
    shortname: 'invent',
    description: 'If a solution to design problem exists we find it, if it doesn’t, we invent it'
  },

  {
    id:'5',
    title: 'Engage',
    shortname: 'engage',
    description: 'Innovation often begins with two people having a conversation. We are always open to talk.'
  },
];

for (let i = 0; i < arrayData.length; i++) {
  console.log(arrayData[i]);
}

export default class AboutBranchPage extends React.Component {
  

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
          <div className="about__back">
            <InternalLinkHighlighted value={next} destination="/about/second" />
          </div>
        </div>
      </div>
    )
  }
