import { TimelineMax as Timeline, Power1 } from 'gsap';

export const play = (pathname, node, appears) => {
  const delay = appears ? 0 : 0.5
  let timeline;
  console.log(pathname);

  switch(pathname) {
    case '/':
      timeline = getHomeTimeline(node, delay)
      break;
    case '/team':
      timeline = getTeamTimeline(node, delay);
      break;
    case '/contact':
      timeline = getContactTimeline(node, delay);
      break;
    default:
      timeline = getDefaultTimeline(node, delay);
      break;
  }

  timeline.play()
}

const getHomeTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const texts = node.querySelectorAll('h1 > div');

  // timeline
    // .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    // .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

  return timeline
}

const getTeamTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const members = node.querySelectorAll('.team__item__image');
  const blocks = node.querySelectorAll('.team__item__block__content');

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(blocks, .5, { x: -500, ease: Power1.easeOut })
    .from(members, 1.5, { autoAlpha: 0 , ease: Power1.easeInOut });

  return timeline;
}

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const members = node.querySelectorAll('.team__item__image');
  const blocks = node.querySelectorAll('.team__item__block__content');

  // timeline
  //   .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
  //   .from(blocks, .5, { y: 500, ease: Power1.easeOut })
  //   .from(members, 1.5, { autoAlpha: 0 , ease: Power1.easeInOut });

  return timeline;
}

const getContactTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const title = node.querySelector('.contact__title > p');
  const quote1 = node.querySelector('.contact__quote__p01 > p');
  const quote2 = node.querySelector('.contact__quote__p02 > p');
  const quote3 = node.querySelector('.contact__quote__p03 > p');
  const quote4 = node.querySelector('.contact__quote__p04 > p');
  timeline
    .from(node, 0.5, { y: 10, display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(title, 0.5, {y: 100}, 1)
    .from(quote1, 0.5, {delay: 0.1, y: 100}, 1)
    .from(quote2, 0.5, {delay: 0.2, y: 100}, 1)
    .from(quote3, 0.5, {delay: 0.3, y: 100}, 1)
    .from(quote4, 0.5, {delay: 0.4, y: 100}, 1)

  return timeline;
}