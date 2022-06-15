import React from 'react';
import './callback.style.desktop.scss';
import data from '../../data/data.callback.json';
import { ExternalLinkHighlighted } from '../subcomponents/special_link/links.object';

export default class Callback extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   current: 0,
    //   start: 0,
    //   end: data.callbackData.length
    // }
    // this.cycle = this.cycle.bind(this);
    // this.reverse = this.reverse.bind(this);
  }

  // cycle() {
  //   const { current } = this.state;
  //   let count = current + 1;

  //   if(count > 4) {
  //     count = 0;
  //   }
    
  //   this.setState({
  //     current: count
  //   });
  // }

  // reverse() {
  //   const { current } = this.state;
  //   let count = current - 1;

  //   if(count < 0) {
  //     count = 4;
  //   }
    
  //   this.setState({
  //     current: count
  //   });
  // }
  
  render() {
    // const info = data.callbackData;
    // const current = info[this.state.current];
    // console.log(this.state.current);

    return (
      <div className={'callback callback'}>
        <div className='callback__left'>
          <div className='callback__title'>Oops!</div>
          <div className='callback__subtitle'>
            Looks like either your license has been expired<br />
            or you have no permission to access this data.<br />
            <br />
            Please reach out to NEXT by submitting a ticket !
          </div>
        </div>

        <div className='callback__right'>
          <div className='callback__emoticon'></div>
          <div className='callback__ticketButtonText'>Ticket</div>
          <div className='callback__ticketButtonImg'></div>
        </div>
      </div>
      // <div className={`callback callback__${current.shortName}`}>

      //   <div className="callback__lefthalfgrid">
      //     <div className={`callback__icon callback__icon__${current.shortName}`}/>
      //   </div>

      //   <div className="login__righthalfgrid">
      //     <div className="login__title">
      //       <p>Welcome!</p>
      //     </div>
      //     <div className="login__description">
      //       <p>Enter <ExternalLinkHighlighted className="about__seehow" value={"hlw"} destination={"https://www.hlw.design/"} /> credentials to grant access to your data!</p>
      //     </div>
      //     <div className="login__login">
      //       <p>Log In</p>
      //     </div>
      //     <div className="login__ticket">
      //       <p>Ticket</p>
      //     </div>
      //   </div>
      // </div>
    )
  }
}
