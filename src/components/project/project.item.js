import React from 'react';
import { Link } from 'react-router-dom';

import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';

import './project.item.desktop.scss';
import './project.item.mobile.scss';

gsap.registerPlugin(CSSRulePlugin);

export function ProjectItem(props) {
  const path = props.history.location.pathname;
  const title = props.slug ? props.slug : "/";
  const projectName = title.toString().toLowerCase();
  const route = `${path}/${projectName}`;

  return (
    <div className={`project__item project__item__${props.slug}`} 
      onMouseEnter = { (event) => animateTitle(event) }
      // onMouseLeave = { (event) => revert(event) }
      >
      <div className={`project__item__image project__item__image__${props.slug}`}/>

      <div className="project__item__title">
        <Link to={route}>
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
  

  timeline
    .to(filled, .5, { display: 'block' })

    

  timeline.play();
}

function revert(event){
  event.preventDefault();

  const node = event.currentTarget;
  const title = node.querySelectorAll('.project__item__title');
  const wrap = node.querySelector('.project__item__mask__wrap');

  const timeline = new Timeline({ paused: true});

  timeline
    .to(title, .2, { x: 0, y :0, borderBottom: 'none', ease: Power1.easeOut })
    .from(wrap, 0.2, { y: 0, ease: Power1.easeOut }, 1);

  timeline.play();
  
}