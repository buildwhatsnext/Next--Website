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
      designStatement: `We're advancing the way technology is used in `,
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
    const tagCompany = `Next is a design startup within `;
    const cta = 'See What We Do';
    const hlwLink = "https://www.hlw.design/";

    return (
      <div className="home">
        <div className="soft__blue__title includes__highlight home__hlw">
          <p>{ tagCompany }</p>
          <ExternalLinkHighlighted value={ company } destination={ hlwLink }/>
        </div>
        <div className="soft__blue__title includes__highlight home__tagline">
          <StatementMutable data={this.state.designTypes} statement={this.state.designStatement}/>
        </div>
        <div className="soft__blue__subtitle home__cta">
          <InternalLinkHighlighted value={cta} destination="/projects" />
        </div>
      </div>
    )
  }
}
