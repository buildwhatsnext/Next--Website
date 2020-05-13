import { Tween, Timeline } from 'react-gsap';

export function First(props) {
  const { tweenProgress } = props;
  // console.log(tweenProgress);

  return (
    <Tween            
      to={{
        left: '0px',
        rotation: -360,
        width: '200px',
        height: '200px',
      }}       
      ease="Strong.easeOut"
      totalProgress={ tweenProgress }
      paused
    >
      <div className="tween">Pin Test Example</div>
    </Tween>    
  )
}

export function Second(props) {
  const { prog } = props;

  return (
    <Tween
      from={{
        css: {
          left: '0px',
          rotation: -360,
          width: '200px',
          height: '200px',
        },
        ease: 'Strong.easeOut',
      }}
      to={{
        css: {
          left: '100px',
          rotation: -180,
          width: '50px',
          height: '50px',
        },
        ease: 'Strong.easeOut',
      }}
      totalProgress={ prog }
      paused
    >
      <div className="tween">Pin Test</div>
    </Tween>
  )
}

export function Third(props) {
  const { prog } = props;

  console.log(prog);

  return (
    <div>
      <Tween        
        from={{
          left: 700,
        }}
        to={{
          left: 0,
          ease: 'Back.easeOut',
        }}
        stagger={0.15}
        totalProgress={ prog }
        paused
      >
        <div className="stagger" />
        <div className="stagger" />
        <div className="stagger" />
        <div className="stagger" />
        <div className="stagger" />
      </Tween>
    </div>
  )
}