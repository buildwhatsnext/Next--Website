import React from 'react';
import './callback.style.desktop.scss';
import data from '../../data/data.callback.json';

export default class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1, 
    }
    this.updateStatus = this.updateStatus.bind(this);
  }
  
  updateStatus(){
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("code");
    console.log(term);

    if (term == null || term == ""){
      this.state.current = 0;
    }
  }
  
  render() {

    const info = data.callbackData;
    const current = info[this.state.current];
    
    this.updateStatus();

    return (
      <div className={`callback callback__${current.status}`}>
        <div className='callback__left'>
          <div className='callback__title'>{current.Title}</div>
          <div className='callback__subtitle'>{current.description}</div>
          <div className='callback__contact'>{current.contact}</div>
        </div>

        <div className='callback__right'>
          <div className={`callback__emoticon__${current.status}`}></div>
          <div className={`callback__ticketButtonText__${current.status}`}>Ticket</div>
          <a className={`callback__ticketButtonImg__${current.status}`} href='https://hlw.atlassian.net/servicedesk/customer/portal/2'></a>
        </div>
      </div>
    )
  }
}
