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
      // onMouseEnter = { (event) => slideLeft(event) }
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

function slideLeft(event){
  event.preventDefault();

  const node = event.currentTarget;
  const title = node.querySelector('.project__item__title');
  const wrap = node.querySelector('.project__item__mask__wrap');
  const line = node.querySelector('.project__item__borderbottom');
  const timeline = new Timeline({ paused: true});

  timeline
    .to(title, .2, { delay: 0.2, y: -4, x: -4, ease: Power1.easeOut }, 1)
    .from(wrap, 0.2, { y: -250, ease: Power1.easeOut }, 1)
    .to(line, 0.2, { width: 400, ease: Power1.easeOut }, 1);

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