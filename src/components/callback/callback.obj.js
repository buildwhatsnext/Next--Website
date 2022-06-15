import React from 'react';
import './callback.style.desktop.scss';
import './callback.style.mobile.scss';
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
    this.contact = "If you have any question, Please reach out to NEXT by submitting a ticket!";
  }
  
  updateStatus(){
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("code");
    console.log(term);

    if (term == null){
      this.status = "Oops!";
      this.description = "Looks like either your license has been expired or you have no permission to access this data.";
      this.contact = "Please reach out to NEXT by submitting a ticket!";
    }
  }
  
  render() {

    const info = data.callbackData;
    const current = info[this.state.current];
    
    this.updateStatus();

    return (
      <div className={`callback callback__${current.shortName}`}>

        <div className="callback__lefthalfgrid">
          <div className={`callback__icon callback__icon__${current.shortName}`}/>
        </div>

        <div className="callback__righthalfgrid">
          <div className="callback__title">
            <p>{this.status}</p>
          </div>
          <div className="callback__description">
            <p>{this.description}</p>
            <p>{this.contact}</p>
          </div>
          <div className="callback__ticket">
            <p>Ticket</p>
          </div>
        </div>
      </div>
    )
  }
}
