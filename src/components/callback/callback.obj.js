import React from 'react';
import './callback.style.desktop.scss';
import data from '../../data/data.callback.json';

export default class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
    }
    this.updateStatus = this.updateStatus.bind(this);

    this.status = "Success!";
    this.description = "You now have full access to HLW add-ins!";
    this.contact = "Submit a ticket if you have any question!";
  }
  
  updateStatus(){
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("code");
    console.log(term);

    if (term == null || term == ""){
      this.status = "Oops!";
      this.description = 
      "Looks like either your license has been expired or you have no permission to access this data.";
      this.contact = "Please reach out to NEXT by submitting a ticket!";
    }
  }
  
  render() {

    const info = data.callbackData;
    const current = info[this.state.current];
    
    this.updateStatus();

    return (
      <div className={'callback callback'}>
        <div className='callback__left'>
          <div className='callback__title'>{this.status}</div>
          <div className='callback__subtitle'>{this.description}</div>
          <div className='callback__contact'>{this.contact}</div>
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
