import { TimelineMax as Timeline, Power1 } from 'gsap';

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline;

  switch(pathname) {
    case '/':
      timeline = getHomeTimeline(node, delay)
      break;
    case '/team':
      timeline = getTeamTimeline(node, delay);
      break;
    case '/projects':
      timeline = getProjectTimeline(node, delay);
      break;
    default:
      timeline = getDefaultTimeline(node, delay);
      break;
  }

  timeline.play()
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const headline = node.querySelector('.home__hlw > .container > p');
  const hlw = node.querySelector('.home__hlw > .container > a');
  const statement = node.querySelector('.statement__mutable');
  const cta = node.querySelector('.home__cta');

  timeline
    .from(node, 1, { display: 'none', autoAlpha: 0, delay }, 0)
    .from(headline, 1, { autoAlpha: 0, y: 500, ease: Power1.easeOut }, 0)
    .from(hlw, 0.9, { y: -500, ease: Power1.easeOut }, 0)
    .from(statement, 1, { y: 500, ease: Power1.easeOut}, 0)
    .from(cta, 1, { autoAlpha: 0, ease: Power1.easeInOut});

  return timeline
}

const getProjectTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  const projects = node.querySelectorAll('.project__item__title > a > div');

  console.log(node);

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay })
    .from(projects, 0.5, { y: 500 , stagger: 0.25, ease: Power1.easeOut } );

  return timeline;
}

const getTeamTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const members = node.querySelectorAll('.team__item__image');
  const blocks = node.querySelectorAll('.team__item__block__content');
  const name = node.querySelectorAll('.team__item__name');
  const position = node.querySelectorAll('.team__item__position');
  const location = node.querySelectorAll('.team__item__location');

  timeline
    .from(node, 0.5, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn }, 0)
    .from(blocks, .5, { x: -500, stagger: .1, ease: Power1.easeOut, }, 1)
    .from(members, .5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 1)
    .from(name, .5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 2)
    .from(position, .5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 2)
    .from(location, .5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 2)

  return timeline;
}

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })

  return timeline;
}