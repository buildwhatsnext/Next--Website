import React from 'react';
import { Link } from 'react-router-dom';

import { TimelineMax as Timeline, Power1 } from 'gsap';

import './project.item.desktop.scss';
import './project.item.mobile.scss';

export function ProjectItem(props) {
  const path = props.history.location.pathname;
  const title = props.slug ? props.slug : "/";
  const projectName = title.toString().toLowerCase();
  const route = `${path}/${projectName}`;

  return (
    <div className={`project__item project__item__${props.slug}`} 
      onMouseEnter = { (event) => slideLeft(event) }
      onMouseLeave = { (event) => revert(event) }
      >
      <div className={`project__item__image project__item__image__${props.slug}`}/> 
      <div className="project__item__title">
        <Link to={route}>
          <div> { props.shortName } </div>
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
  // const titleAfter = node.querySelector()

  const timeline = new Timeline({ paused: true});

  timeline
    .to(title, .5, { 
      x: -100, 
      ease: Power1.easeOut 
    });

  timeline.play();
  
}

function revert(event){
  event.preventDefault();

  const node = event.currentTarget;
  const title = node.querySelectorAll('.project__item__title');

  const timeline = new Timeline({ paused: true});

  timeline
    .to(title, .5, { x: 0, ease: Power1.easeOut });

  timeline.play();
  
}