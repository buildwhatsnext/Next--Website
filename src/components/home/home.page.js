import React from 'react';

import { LinkHighlighted } from '../subcomponents/special_link/links.object';

import './home.style.desktop.scss';
import './home.style.mobile.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      designSummary: `We're advancing the way technology is used in `,
      designStatement: '',
      typeIndex: 0,
      designTypes: [
        "design",
        "architecture",
        "lighting",
        "engineering",
        "sustainability"
      ]
    }
  }

  changeDesignType = () => {
    let i = this.state.typeIndex;

    i = i + 1;
    if(i >= this.state.designTypes.length)
      i = 0;
    
    const newStatement = this.state.designSummary + this.state.designTypes[i];

    this.setState({
      designStatement: newStatement,
      typeIndex: i
    });
  }

  componentDidMount() {
    console.log('Setting interval stuff');
    this.interval = setInterval(() => this.changeDesignType(), 500);
  }

  componentWillUnmount() {
    console.log('Clearing interval');
    clearInterval(this.interval);
  }

  render() {
    const company = "hlw";
    const designNoun = this.state.designTypes[this.state.typeIndex];
    const tagCompany = `Next is a startup inside of `;
    // const tagChange = `We're advancing the way technology is used in `;
    const cta = 'See What We Do';

    return (
      <div className="home">
        <div className="soft__blue__title includes__highlight home__hlw">
          <p> { tagCompany } </p>
          <LinkHighlighted value={ company } />
        </div>
        <div className="soft__blue__title includes__highlight home__tagline">
          <p>{ this.state.designStatement }</p>
          {/* <p>{ designNoun } </p> */}
        </div>
        <div className="soft__blue__subtitle home__cta">
          <div>
            <LinkHighlighted value={ cta } />
          </div>
        </div>
      </div>
    )
  }
}
