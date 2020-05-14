import { Tween, Timeline } from 'react-gsap';

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