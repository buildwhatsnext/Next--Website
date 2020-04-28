import React, { Fragment, useRef, useEffect } from 'react';
import { TweenMax, Timeline, Power1 } from 'gsap';

import data from '../../data/data.team.json';
import './teamdetail.style.desktop.scss';
import './teamdetail.style.mobile.scss';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


export default class TeamMemberDetailPage extends React.Component {
  render() {
    const { memberId } = this.props.match.params;
    const info = data.members[memberId];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <TeamMemberDetail {...info} />
  }
}


export function TeamMemberDetail(data) {
  
  const contactus = "Contact Us";
  const back = "Back";

  return (
    <div className="team__detail">

      <div className="team__detail__name__wrap">
        <div className="team__detail__firstname"><p>{ data.firstname }</p></div>
        <div className="team__detail__lastname"><p>{ data.lastname }</p></div>
      </div>

      <div className="team__detail__email"><a href="mailto:{data.email}"><p>{ data.email }</p></a></div>
      <div className="team__detail__position"><p>{ data.fullpositiontitle }</p></div>
      <div className="team__detail__description"><p>{ data.description }</p></div>
      <div className={`team__detail__pictureURL team__detail__pictureURL__${data.shortName}`}/>
      <div className="trapazoid"></div>
      <div className="slash"></div>
      <div className="borderbottom"></div>
      <div className="cta">
        <InternalLinkHighlighted value={contactus} destination="/contact" />
      </div>
      <div className="back">
        <InternalLinkHighlighted value={back} destination="/team" />
      </div>
      {/* <Image cloudName="next-hlw" publicId="anime.webp" width="300" dpr="2.0" crop="scale" /> */}
    </div>
  )
}