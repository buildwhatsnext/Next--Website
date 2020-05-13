import { Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

export default function First(props) {
  const { tweenProgress } = props;

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