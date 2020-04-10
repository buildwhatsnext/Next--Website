import React, { Fragment, useRef, useEffect } from 'react';
import { ContactForm } from '../subcomponents/forms/form.obj';
import { ContactInfoList } from '../subcomponents/contactinformation/contactinfo.obj';
import './contact.style.desktop.scss';
import './contact.style.mobile.scss';
import { TweenMax, Timeline, Power1 } from 'gsap';

export default class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name:''
      }
    }
  
    
  setName = (name) => {
    this.setState({name});
  }


  render() {
    return (
      <div className="contact">
        <div className="contact__title">
          <p>Get In Touch</p>
        </div>
        <div className="contact__quote">
          <p>We think of our clients as partners and encourage collaboration to invent new ways of approaching  projects. We’re a friendly bunch and love to talk, so please drop us a line and say hello.</p>
        </div>
        <div className="contact__form">
          <ContactForm />
        </div>        
        <ContactInfoList />        
      </div>
    )
  }
}
