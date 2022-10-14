import React from 'react';
import { Link } from 'react-router-dom';
import { TimelineMax as Timeline, Power1, CSS, gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/src/CSSRulePlugin';

import './service.item.desktop.scss';
import './service.item.laptop.scss';

import ServiceData from '../../data/data.services.json';

export function ServiceList(props) {
  const { services } = ServiceData;
  const { history } = props;

  const sNames = Object.getOwnPropertyNames(services);

  let i = 0;
  const serviceList = sNames.map(s => {
    const info = services[s];

    return <ServiceItem key={i++} {...info } history={ history } />
  })

  return (
    <div className="service__data__list">
      { serviceList }
    </div>
  );
}

export function ServiceItem(props) {
  const path = props.history.location.pathname;
  const title = props.slug ? props.slug : "/";
  const serviceName = title.toString().toLowerCase();
  const route = `${path}/${serviceName}`;

  return (
    <div className={`service__item service__item__${props.slug}`}>
      <Link to={route}>
        <div className="service__item__title"> 
          <p 
            onMouseEnter={ (e) => animate(e) }
            onMouseLeave={ (e) => revert(e) }
          > {props.title}</p> 
        </div>
      </Link>
    </div>
  );
}

function animate(e) {
  // e.preventDefault();

  // const timeline = new Timeline({ paused: true });
  // const node = e.currentTarget;

  // timeline.to(node, .2, { color: 'red', stroke: '#FFFFFF' });
  // // timeline
  // //   .to(node, .2, { 
  // //     x: '+=500', 
  // //     repeat: -1, 
  // //     modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % 50)} 
  // //     }
  // //   );

  // timeline.play();
}

function revert(e) {

}

