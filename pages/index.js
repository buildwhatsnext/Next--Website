import Head from 'next/head'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

import { First, Second, Third } from '../objects/tweens.object';

export default function Home() {

  return (
    <div>
      <div className="section" />
      <div id="trigger" />
      <Controller
      >

        <Scene
          triggerElement="#trigger"
          duration={ 300 }
          indicators={
            true
          }
        >
          {(progress) => (
            <First tweenProgress={progress} />
          )}
        </Scene>
        

        <Scene
          triggerElement="#trigger"
          duration={600}
          pin={false}
        >
          {(progress) => (
            <Second prog={progress} />
          )}        
        </Scene>
        <Scene
          duration={500}
        >
          {(progress) => (

            <Third prog={progress} />

            // <div>
            //   <Tween        
            //     from={{
            //       left: 700,
            //     }}
            //     to={{
            //       left: 0,
            //       ease: 'Back.easeOut',
            //     }}
            //     stagger={0.15}
            //     totalProgress={progress}
            //     paused
            //   >
            //     <div className="stagger" />
            //     <div className="stagger" />
            //     <div className="stagger" />
            //     <div className="stagger" />
            //     <div className="stagger" />
            //   </Tween>
            // </div>
          )}
        </Scene>
      </Controller>
      <div className="section" />
    </div>
    
  )
}
