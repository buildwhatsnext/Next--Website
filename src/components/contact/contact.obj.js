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

    const quoteline = `We think of our clients as partners and encourage collaboration to invent new ways of approaching projects. We're a friendly bunch and love to talk, so please drop us a line and say hello.`;

    return (
      <div className="contact">
        <div className="contact__title">
          <p>Get In Touch</p>
        </div>

        <div className="contact__quote">
          <div className="contact__quote"><p>{quoteline}</p></div>
        </div>

        {/* <div className="contact__form">
          <ContactForm />
        </div> */}

        <ContactInfoList />        
      </div>
    )
  }
}

// ----------------------------------------------------------------------------------------------------------
// JS CODE WITH GSAP ANIMATION BIT
// ----------------------------------------------------------------------------------------------------------

// import React, { Fragment, useRef, useEffect } from 'react';
// import { ContactForm } from '../subcomponents/forms/form.obj';
// import { ContactInfoList } from '../subcomponents/contactinformation/contactinfo.obj';
// import './contact.style.desktop.scss';
// import './contact.style.mobile.scss';
// import { TweenMax, Timeline, Power1 } from 'gsap';

// export default class Contact extends React.Component {
//     constructor(props) {
//       super(props);
//       this.myTitle= null;
//       this.myForm= null;
//       this.myInfo= null;
//       this.myQuote= null;
//     }

//     componentDidMount(){
//       this.myTitle = TweenMax.from(this.myTitle, 1, {y: 300, ease: Power1.easeOut})
//       this.myForm = TweenMax.from(this.myForm, 1, {y: 600, ease: Power1.easeOut})
//       this.myInfo = TweenMax.from(this.myInfo, 1, {opacity: 0, ease: Power1.easeOut})
//       this.myQuote = TweenMax.from(this.myQuote, 1, {opacity: 0, ease: Power1.easeOut})
//     }
  
//   setName = (name) => {
//     this.setState({name});
//   }

//   render() {
//     return (
//       <div className="contact">

//         <div className="contact__titlegrid" >
//           <div className="contact__mask">
//             <div className="contact__title" ref={item => this.myTitle = item}><p>Get In Touch</p></div>
//           </div>
//         </div>

//         <div className="contact__quote" ref={item => this.myQuote = item}>
//           <p>We think of our clients as partners and encourage collaboration to invent new ways of approaching  projects. We’re a friendly bunch and love to talk, so please drop us a line and say hello.</p>
//         </div>

//         <div className="contact__formgrid">
//           <div className="contact__formmask">
//             <div className="contact__form" ref={item => this.myForm = item}>
//               <ContactForm />
//             </div>
//           </div>
//         </div>

//         <div className="contact__infolist" ref={item => this.myInfo = item}>
//           <ContactInfoList />
//         </div>
//       </div>
//     )
//   }
// }
