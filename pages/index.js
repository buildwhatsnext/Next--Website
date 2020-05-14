import Head from 'next/head'
import { Controller, Scene } from 'react-scrollmagic';
// import { Tween, Timeline } from 'react-gsap';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import { Third } from '../objects/tweens.object';

export default function Home() {
  return (
    <section 
      onMouseDown={(e) => setInitialState(e)}
    >
      <div className="home">
        <h1>This Is A Test</h1>
      </div>
    </section>
  )
}

function setInitialState(event) {
  event.preventDefault();
  console.log('Mouse clicked');

  const node = event.currentTarget;
  const timeline = new Timeline({ paused: true });
  const home = node.querySelector('.home');
  const text = node.querySelector('.home > h1');

  console.log(home);

  timeline
    .to(home, .9, { backgroundColor: 'black' })

  timeline.play();
}
