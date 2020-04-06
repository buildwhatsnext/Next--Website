import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap' ;
import slash from '../../../assets/svg/icons/55thickslash.svg';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {
    return (
      <div className="contact__form">
        <NameEntryForm />
        <EmailEntryForm />
        <MessageEntryForm />
      </div>
    )
  }
}

export function EntryForm(props) {
  return (
    <Fragment>
      <p className="entry__form__name">{props.name}</p>
      <div className="entry__form__value">{props.value}</div>
    </Fragment>
  )
}

export function NameEntryForm(props) {
  return (
    <Fragment>
      <div className="contact__nameslash">
        <img src={slash} alt="slash"/>
      </div>
      <p>Name</p>
      <div className="answerbox">
        <Form.Control type="text" placeholder="Please Enter Your Name" />
      </div>
      
    </Fragment>
  )
}

export function EmailEntryForm(props) {
  return (
    <fragment>
      <div className="contact__emailslash">
        <img src={slash} alt="slash"/>
      </div>
      <p>Email</p>
      <div className="answerbox">
      <Form.Control type="email" placeholder="Please Enter Your E-mail" />
      </div>
      {/* <EntryForm name={props.name} value={props.value} /> */}
    </fragment>
  )
}

export function MessageEntryForm(props) {
  return (
    <fragment>
        <div className="contact__messageslash">
          <img src={slash} alt="slash"/>
        </div>
        <p>Message</p>
        <div className="answerboxfat">
          <Form.Control type="text" placeholder="Please Enter Your Message" />
        <div className="button"></div>
      </div>
    </fragment>
  )
}