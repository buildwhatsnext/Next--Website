import React from 'react';

import { LinkHighlighted } from '../subcomponents/special_link/links.object';

import './home.style.desktop.scss';
import './home.style.mobile.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('In the Home component');
  }

  render() {
    const options__design = [
      "design",
      "architecture",
      "lighting",
      "engineering",
      "sustainability"
    ]

    const company = "hlw";
    const designNoun = options__design[0];
    const tagCompany = `Next is a startup inside of `;
    const tagChange = `We're advancing the way technology is used in `;
    const cta = 'See What We Do';

    return (
      <div className="home">
        <div className="soft__blue__title includes__highlight home__hlw">
          <p>
          { tagCompany }
          </p>
          <LinkHighlighted value={ company } />
        </div>
        <div className="soft__blue__title includes__highlight home__tagline">
          <p>{ tagChange }</p>
          {/* <p>{ designNoun } </p> */}
        </div>
        <div className="soft__blue__subtitle home__cta">
          <p>
            <LinkHighlighted value={ cta } />
          </p>
        </div>
      </div>
    )
  }
}
