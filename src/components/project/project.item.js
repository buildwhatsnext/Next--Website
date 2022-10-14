import React from 'react';
import { Link } from 'react-router-dom';

import { TimelineMax as Timeline, Power1, CSS, gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/src/CSSRulePlugin';

import './project.item.desktop.scss';
import './project.item.laptop.scss';
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
      onMouseLeave = { (event) => revert(event) }>
      <div className="image__wrap">  
        <div className={`image image__${props.slug}`}/>
      </div>

      <div className="project__item__title"
        onMouseEnter = { (event) => animateTitle(event) }
        onMouseLeave = { (event) => revert(event) }
      >
        <Link to={route}>
          <div className="title__underline"></div>
          <div className="title__stroked">
            <p> { props.shortName } </p>
          </div>
          <div className="title__filled">
            <p> { props.shortName } </p>
          </div>
        </Link>
      </div>
      <div className="project__item__type"> { props.type } </div>
    </div>
  );
}

function animateTitle(event){
  event.preventDefault();
  console.log(event.currentTarget);
  
  const node = event.currentTarget;
  // const bro = node.siblings;
  // const mom = node.parents;
  const timeline = new Timeline({ paused: true});
  const stroke = node.querySelector('.title__stroked');
  const filled = node.querySelector('.title__filled');
  const line = node.querySelector('.title__underline');
  const image = node.querySelector('.image__wrap');
  const type = node.querySelector('.project__item__type');

  timeline
    .from(filled, .25, { y: 20, opacity: 0, ease: Power1.easeOut}, 0)
    .to(filled, .25, { y: 0, opacity: 1, ease: Power1.easeOut}, 0)
    // .to(stroke, .1, { color: 'red' }, 0)
    // .to(stroke, .25, { delay: 0.5, x:-5, y:-5, ease: Power1.easeOut}, 0)
    .to(line, .25, { display: 'inline', width: 1200, ease: Power1.easeOut}, 0)
    .to(image, .1, { delay: 0.15, opacity: 1, scale: 1.05, ease: Power1.easeOut}, 0)
    .to(type, .25, { delay:0.10, display: 'inline', ease: Power1.easeOut}, 0);

    

  timeline.play();
}

function revert(event){
  event.preventDefault();

  const node = event.currentTarget;
  const stroke = node.querySelector('.title__stroked');
  const filled = node.querySelector('.title__filled');
  const line = node.querySelector('.title__underline');
  const image = node.querySelector('.image__wrap');
  const type = node.querySelector('.project__item__type');

  const timeline = new Timeline({ paused: true});

  timeline
    .to(filled, .25, { y: 0, opacity: 0, ease: Power1.easeOut}, 0)
    .to(stroke, .25, { x: 0, y: 0, ease: Power1.easeOut}, 0)
    .to(line, .25, { width: 0, ease: Power1.easeOut}, 0)
    .to(image, .05, { opacity: 0, scale: 1, ease: Power1.easeOut}, 0)
    .to(type, .15, { display: 'none', ease: Power1.easeOut}, 0);

  timeline.play();
  
}