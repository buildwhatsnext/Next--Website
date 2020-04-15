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
    case '/contact':
      timeline = getContactTimeline(node, delay);
      break;
    case '/team/andrew' : case '/team/preston' : case '/team/ruyi' : case '/team/kp' : case '/team/bharti' : case '/team/chris' : case '/team/stephen' : case '/team/mina' : case '/team/jeff' : case '/team/adam' :
      timeline = getTeamDetailTimeline(node, delay);
      break;
    case '/projects':
      timeline = getProjectTimeline(node, delay);
      break;
    case '/projects/1950': case '/projects/piper': case '/projects/stamford': case '/projects/google': case '/projects/fordham':
      console.log('Going into project detail')
      timeline = getProjectDetailTimeline(node, delay);
      break;
    case '/services':
      timeline = getServicesTimeline(node, delay);
      break;
    default:
      timeline = getDefaultTimeline(node, delay);
      break;
  }

  timeline.play();
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

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay })
    .from(projects, 0.5, { y: 500 , stagger: 0.25, ease: Power1.easeOut } );

  return timeline;
}

const getServicesTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  const services = node.querySelectorAll('.service__item__title');

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay })
    .from(services, 0.5, { y: 500 , stagger: 0.25, ease: Power1.easeOut } );

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
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn }, 0)
    .from(blocks, 0.5, { x: -500, stagger: .1, ease: Power1.easeOut, }, 1)
    .from(members, 0.5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 1)
    .from(name, 0.5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 2)
    .from(position, 0.5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 2)
    .from(location, 0.5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -10 , ease: Power1.easeInOut }, 2)

  return timeline;
}

const getDefaultTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })

  return timeline;
}

const getContactTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const title = node.querySelector('.contact__title > p');
  const quote1 = node.querySelector('.contact__quote__p01 > p');
  const quote2 = node.querySelector('.contact__quote__p02 > p');
  const quote3 = node.querySelector('.contact__quote__p03 > p');
  const quote4 = node.querySelector('.contact__quote__p04 > p');
  const nameform = node.querySelector('.contact__nameform__wrap');
  const emailform = node.querySelector('.contact__emailform__wrap');
  const messageform = node.querySelector('.contact__messageform__wrap');
  const information = node.querySelector('.contact__info');
  timeline
    .from(node, 0.5, { y: 10, display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(title, 0.5, {y: 100}, 1)
    .from(quote1, 0.5, {delay: 0.1, y: 100}, 1)
    .from(quote2, 0.5, {delay: 0.2, y: 100}, 1)
    .from(quote3, 0.5, {delay: 0.3, y: 100}, 1)
    .from(quote4, 0.5, {delay: 0.4, y: 100}, 1)
    .from(nameform, 0.5, {delay: 0.7, opacity: 0}, 1)
    .from(emailform, 0.5, {delay: 0.7, opacity: 0}, 1)
    .from(messageform, 0.5, {delay: 0.7, opacity: 0}, 1)
    .from(information, 0.5, {delay: 0.7, opacity: 0}, 1)

  return timeline;
}

const getProjectDetailTimeline = (node, delay) => {
  console.log(node);
  const timeline = new Timeline({ paused: true });
  const title = node.querySelector('.project__detail__name > p');
  const wrap = node.querySelector('.project__detail__pictureURL__wrap')
  const image = node.querySelector('.project__detail__pictureURL');
  const info = node.querySelector('.project__detail__infotable');
  const challenges = node.querySelector('.project__detail__summary')

  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    .from(info, 0.5, { delay: 0.5, opacity: 0, ease: Power1.easeOut }, 1)
    .from(challenges, 0.5, { delay: 0.5, opacity: 0, ease: Power1.easeOut }, 1)
    .from(title, 0.5, { y: 400, ease: Power1.easeOut }, 1)
    .from(wrap, 0.35, { height: 0, ease: Power1.easeOut }, 1)
    .from(image, 0.5, { scale: 1.1, ease: Power1.easeInOut }, 1)

  return timeline;
}

const getTeamDetailTimeline = (node, delay) => {
  const timeline = new Timeline({ paused: true });
  const wrap = node.querySelector('.team__detail__name__wrap');
  const firstname = node.querySelector('.team__detail__firstname > p');
  const lastname = node.querySelector('.team__detail__lastname > p');
  const position = node.querySelector('.team__detail__position > p');
  const email = node.querySelector('.team__detail__email > p');
  const desc = node.querySelector('.team__detail__description > p');
  const line = node.querySelector('.borderbottom');
  const profile = node.querySelector('.team__detail__pictureURL')
  const cta = node.querySelector('.cta');
  const trapazoid = node.querySelector('.trapazoid');



  timeline
    .from(node, 0.3, { display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn })
    // .from(wrap, 0.35, { height: 0, ease: Power1.easeOut }, 1)
    .from(firstname, 0.5, { y: 100, ease: Power1.easeOut }, 1)
    .from(lastname, 0.75, { y: 100, ease: Power1.easeOut }, 1)
    .from(position, 0.8, { y: 100, ease: Power1.easeOut }, 1)
    .from(email, 0.95, { y: 100, ease: Power1.easeOut }, 1)
    .from(desc, 1.1, { opacity: 0, ease: Power1.easeOut }, 1)
    .from(line, 1.1, { width: 0, ease: Power1.easeOut }, 1)
    .from(cta, 1.1, { opacity: 0, ease: Power1.easeOut }, 1)
    .from(trapazoid, 0.5, { x: -800, stagger: .1, ease: Power1.easeOut, }, 1)
    .from(profile, 0.5, { delay: 0.1, autoAlpha: 0, stagger: .1 , x: -70 , ease: Power1.easeInOut }, 1)



  return timeline;
}