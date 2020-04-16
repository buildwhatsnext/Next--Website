import React, { Fragment } from 'react';
import { ContactForm } from '../subcomponents/forms/form.obj';
import { ContactInfoList } from '../subcomponents/contactinformation/contactinfo.obj';
import './contact.style.desktop.scss';
import './contact.style.mobile.scss';

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

    const quoteline01 = `We think of our clients as partners and encourage `;
    const quoteline02 = `collaboration to invent new ways of approaching projects.`;
    const quoteline03 = `We're a friendly bunch and love to talk, so please drop us a`;
    const quoteline04 = `line and say hello. `;

    return (
      <div className="contact">
        <div className="contact__title">
          <p>Get In Touch</p>
        </div>

        <div className="contact__quote">
          <div className="contact__quote__p01"><p>{quoteline01}</p></div>
          <div className="contact__quote__p02"><p>{quoteline02}</p></div>
          <div className="contact__quote__p03"><p>{quoteline03}</p></div>
          <div className="contact__quote__p04"><p>{quoteline04}</p></div>
        </div>

        <div className="contact__form">
          <ContactForm />
        </div>

        <ContactInfoList />        
      </div>
    )
  }
}