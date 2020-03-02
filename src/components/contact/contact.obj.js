import React, { Fragment } from 'react';
import { ContactForm } from '../subcomponents/forms/form.obj';
import { ContactInfo } from '../subcomponents/contactinformation/contactinfo.obj';

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
      <Fragment>
        <h2>See What's Next</h2>
        <ContactForm />
        <ContactInfo />
      </Fragment>
    )
  }
}
