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

  let myTrapazoid = useRef(null)
  let myPicture = useRef(null)

  useEffect(() => {
    TweenMax.from(myTrapazoid, 1.25, {opacity: 0, x: -400, ease: Power1.easeOut})
    TweenMax.from(myPicture, 1.25, {x: -400, ease: Power1.easeOut})
  }, [])


  return (
    <div className="team__detail">
      <div className="team__detail__name">{ data.name }</div>
      <div className="team__detail__email">{ data.email }</div>
      <div className="team__detail__position">{ data.position }</div>
      {/* <div className="team__detail__location">{ data.location }</div> */}
      <div className="team__detail__description">{ data.description }</div>
      <div className={`team__detail__pictureURL__${data.shortName}`} ref={item => myPicture = item} />
      <div className="trapazoid" ref={item => myTrapazoid = item}></div>
      <div className="slash"></div>
      <div className="borderbottom"></div>
      <div className="cta">
        <InternalLinkHighlighted value={contactus} destination="/contact" />
      </div>
      {/* <Image cloudName="next-hlw" publicId="anime.webp" width="300" dpr="2.0" crop="scale" /> */}
    </div>
  )
}