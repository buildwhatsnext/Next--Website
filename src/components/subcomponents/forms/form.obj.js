import React, { Fragment } from 'react';
import { Form } from 'react-bootstrap' ;
// import slash from '../../../assets/svg/icons/55thickslash.svg';
import firebase from '../../../app/app.firebase';

export class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.sendToDatabase();
    this.clearState();
  }

  sendToDatabase() {
    const itemsRef = firebase.database().ref('userContacts');

    const newRequest = {
      userName: this.state.name,
      userEmail: this.state.email,
      userMessage: this.state.message
    }

    itemsRef.push(newRequest);
  }

  clearState() {
    this.setState({
      email: '',
      message: '',
      name: ''
    });
  }

  handleEmailChange(e) {
    e.preventDefault();
    this.setState({
      email: e.target.value
    });
  }

  handleNameChange(e) {
    e.preventDefault();
    this.setState({
      name: e.target.value
    });
  }

  handleMessageChange(e) {
    e.preventDefault();
    this.setState({
      message: e.target.value
    });
  }

  render() {
    return (
      <div className="contact__form__grid">
        <NameEntryForm handleChange={ (e) => this.handleNameChange(e) } value={ this.state.name } />
        <EmailEntryForm handleChange={(e) => this.handleEmailChange(e) } value={ this.state.email } />
        <MessageEntryForm 
          handleChange={ (e) => this.handleMessageChange(e) } 
          handleClick={ (e) => this.handleSubmit(e) } 
          value={ this.state.message }
        />
      </div>
    )
  }
}

export function NameEntryForm(props) {
  return (
    <Fragment>
      <div className="contact__nameslash">
        <img src='https://res.cloudinary.com/next-hlw/image/upload/v1586193012/icon/55thickslash_mvvxr3.svg'/>
      </div>
      <div className="contact__name"><p>Name</p></div>
      <div className="answerboxname">
        <Form.Control 
          type="text" 
          placeholder="Please enter your name" 
          onfocus="this.placeholder =''"
          onblur="this.placeholder='kp'"
          onChange={ props.handleChange }
          value={ props.value }
        />
      </div>
    </Fragment>
  )
}

export function EmailEntryForm(props) {
  return (
    <Fragment>
      <div className="contact__emailslash">
        <img src='https://res.cloudinary.com/next-hlw/image/upload/v1586193012/icon/55thickslash_mvvxr3.svg' alt="slash"/>
      </div>
      <div className="contact__email"><p>E-Mail</p></div>
      <div className="answerboxemail">
      <Form.Control 
        type="email" 
        placeholder="Please enter your email" 
        onChange={ props.handleChange }
        value={ props.value }
      />
      </div>
    </Fragment>
  )
}

export function MessageEntryForm(props) {
  return (
    <Fragment>
      <div className="contact__messageslash">
        <img src='https://res.cloudinary.com/next-hlw/image/upload/v1586193012/icon/55thickslash_mvvxr3.svg' alt="slash"/>
      </div>
      <div className="contact__message"><p>Message</p></div>
      <div className="answerboxmessage">
        <Form.Control 
          type="text" 
          placeholder="What would you like to tell us?" 
          onChange={ props.handleChange }
          value={ props.value }
        />
        <div className="button" onClick={ props.handleClick }/>
      </div>
    </Fragment>
  )
}