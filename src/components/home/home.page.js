import React from 'react';
import { StatementMutable } from '../subcomponents/statement.object';
import { ExternalLinkHighlighted, InternalLinkHighlighted } from '../subcomponents/special_link/links.object';

import './home.style.general.scss';
import './home.style.desktop.scss';
import './home.style.mobile.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    const company = "hlw";
    const tagCompany = `Next is a tech-focused 
design startup within`;
    const statement = `We're advancing the way technology is used in `;
    const cta = 'See What We Do';
    const hlwLink = "https://www.hlw.design/";

    return (
      <div className="home">
        <div className="home__hlw">
          <div className="container">
            <p>{ tagCompany }</p>
            <span><ExternalLinkHighlighted value={ company } destination={ hlwLink }/></span>
          </div>

        </div>
        <div className="home__tagline">
          <div className="container">
            <StatementMutable data={this.state.designTypes} statement={statement}/>
          </div>
        </div>
        {/* <div className="home__cta">
          <InternalLinkHighlighted value={cta} destination="/projects" />
        </div> */}
      </div>
    )
  }
}
