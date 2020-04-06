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
      <div className="contact__form">
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
      <p>Name</p>
      <div className="answerbox">
        <Form.Control 
          type="text" 
          placeholder="Please enter your name" 
          onChange={ props.handleChange }
          value={ props.value }
        />
      </div>
    </Fragment>
  )
}

export function EmailEntryForm(props) {
  return (
    <fragment>
      <div className="contact__emailslash">
        <img src='https://res.cloudinary.com/next-hlw/image/upload/v1586193012/icon/55thickslash_mvvxr3.svg' alt="slash"/>
      </div>
      <p>Email</p>
      <div className="answerbox">
      <Form.Control 
        type="email" 
        placeholder="Please enter your email" 
        onChange={ props.handleChange }
        value={ props.value }
      />
      </div>
    </fragment>
  )
}

export function MessageEntryForm(props) {
  return (
    <fragment>
      <div className="contact__messageslash">
        <img src='https://res.cloudinary.com/next-hlw/image/upload/v1586193012/icon/55thickslash_mvvxr3.svg' alt="slash"/>
      </div>
      <p>Message</p>
      <div className="answerboxfat">
        <Form.Control 
          type="text" 
          placeholder="What would you like to tell us?" 
          onChange={ props.handleChange }
          value={ props.value }
        />
        <div className="button" onClick={ props.handleClick }/>
      </div>
    </fragment>
  )
}