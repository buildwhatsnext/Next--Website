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
    case '/about':
      timeline = getAboutTimeline(node, delay);
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

  timeline
    .from(node, 0, { display: 'none', autoAlpha: 0, delay })
    .staggerFrom(texts, 0.375, { autoAlpha: 0, x: -25, ease: Power1.easeOut }, 0.125);

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

const getAboutTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const title = node.querySelectorAll('.about__titlepage');

  const exptitle = node.querySelectorAll('.about__titleexperience > p');
  const institle = node.querySelectorAll('.about__titleinsight > p');
  const captitle = node.querySelectorAll('.about__titlecapabilities > p');

  const expdesc = node.querySelectorAll('.about__subtitleexperience > p');
  const insdesc = node.querySelectorAll('.about__subtitleinsight > p');
  const capdesc = node.querySelectorAll('.about__subtitlecapabilities > p');

  const expcta = node.querySelectorAll('.about__seehowexperience');
  const inscta = node.querySelectorAll('.about__seehowinsight');
  const capcta = node.querySelectorAll('.about__seehowcapabilities');


  timeline
    .from(title, 1, { opacity: 0, ease: Power1.easeIn })

    .from(exptitle, 0.5, { y:100, ease: Power1.easeIn }, 1)
    .from(institle, 0.6, { y:100, ease: Power1.easeIn }, 1)
    .from(captitle, 0.7, { y:100, ease: Power1.easeIn }, 1 )

    .from(expdesc, 0.5, { opacity: 0, ease: Power1.easeIn }, 1)
    .from(insdesc, 0.6, { opacity: 0, ease: Power1.easeIn }, 1)
    .from(capdesc, 0.7, { opacity: 0, ease: Power1.easeIn }, 1)

    .from(expcta, 0.5, { opacity: 0, ease: Power1.easeIn }, 1)
    .from(inscta, 0.6, { opacity: 0, ease: Power1.easeIn }, 1)
    .from(capcta, 0.7, { opacity: 0, ease: Power1.easeIn }, 1)
    

  



  return timeline;
}