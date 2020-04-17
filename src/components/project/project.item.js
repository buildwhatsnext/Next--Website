import React from 'react';
import { Link } from 'react-router-dom';

import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

import './project.item.desktop.scss';
import './project.item.mobile.scss';
import Data from '../../data/data.team.json';

gsap.registerPlugin(CSSRulePlugin);

export function ProjectItem(props) {
  const path = props.history.location.pathname;
  const title = props.slug ? props.slug : "/";
  const projectName = title.toString().toLowerCase();
  const route = `${path}/${projectName}`;

  return (
    <div className={`project__item project__item__${props.slug}`} 
      onMouseEnter = { (event) => animateTitle(event) }
      onMouseLeave = { (event) => revert(event) }
      >

      <div className={`image image__${props.slug}`}/>

      <div className="project__item__title">
        <Link to={route}>
          <div className="title__underline"></div>
          <div className="title__stroked">
            <div> { props.shortName } </div>
          </div>
          <div className="title__filled">
            <div> { props.shortName } </div>
          </div>
        </Link>
      </div>
      <div className="project__item__type"> { props.type } </div>
    </div>
  );
}

function animateTitle(event){
  event.preventDefault();

  const node = event.currentTarget;
  const timeline = new Timeline({ paused: true});
  const stroke = node.querySelector('.title__stroked');
  const filled = node.querySelector('.title__filled');
  const line = node.querySelector('.title__underline');
  const image = node.querySelector('.image');
  const type = node.querySelector('.project__item__type');

  timeline
    .to(filled, .25, { display: 'inline', ease: Power1.easeOut}, 1)
    .to(stroke, .25, { css:{color:"#ffffff"}, ease: Power1.easeOut}, 1)
    .to(image, 3, { delay: 0.2, scale: 1.2, display: 'inline', ease: Power1.easeOut}, 2)
    .to(line, .25, { display: 'inline', width:1200 , ease: Power1.easeOut}, 1)
    .to(type, .25, { delay:0.25, display: 'inline', ease: Power1.easeOut}, 1);

    

  timeline.play();
}

function revert(event){
  event.preventDefault();

  const node = event.currentTarget;
  const stroke = node.querySelector('.title__stroked');
  const filled = node.querySelector('.title__filled');
  const line = node.querySelector('.title__underline');
  const image = node.querySelector('.image');
  const type = node.querySelector('.project__item__type');

  const timeline = new Timeline({ paused: true});

  timeline
    .to(filled, .25, { display:  'none', ease: Power1.easeOut}, 1)
    .to(stroke, .25, { x: 0, y: 0, color:"white", ease: Power1.easeOut}, 1)
    .to(line, .25, { display: 'none', width: 0, ease: Power1.easeOut}, 1)
    .to(image, .25, { display: 'none', scale: 1, ease: Power1.easeOut}, 1)
    .to(type, .25, { display: 'none', ease: Power1.easeOut}, 1);

  timeline.play();
  
}