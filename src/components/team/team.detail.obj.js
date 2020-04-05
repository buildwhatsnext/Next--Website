import React from 'react';
import { TweenLite } from 'gsap';

import data from '../../data/data.team.json';
import './teamdetail.style.desktop.scss';
import './teamdetail.style.mobile.scss';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';

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

  return (
    <div className="team__detail">
      <div className="team__detail__name">{ data.name }</div>
      <div className="team__detail__email">{ data.email }</div>
      <div className="team__detail__position">{ data.position }</div>
      {/* <div className="team__detail__location">{ data.location }</div> */}
      <div className="team__detail__description">{ data.description }</div>
      <div className={`team__detail__pictureURL__${data.shortName}`} />
      <div className="trapazoid"></div>
      {/* <div className="trapazoid" ref={ d => this.image = d } ></div> */}
      <div className="slash"></div>
      <div className="borderbottom"></div>
      <div className="cta">
        <InternalLinkHighlighted value={contactus} destination="/contact" />
      </div>
    </div>
  )
}


// export function TeamMemberDetail(data) {
  
//   return (
//     <div className="team__detail">
//       <div className="team__detail__name">{ data.name }</div>
//       <div className="team__detail__email">{ data.email }</div>
//       <div className="team__detail__position">{ data.position }</div>
//       {/* <div className="team__detail__location">{ data.location }</div> */}
//       <div className="team__detail__description">{ data.description }</div>
//       <div className={`team__detail__pictureURL__${data.shortName}`} />
//       <div className="trapazoid"></div>
//       <div className="slash"></div>
//       <div className="borderbottom"></div>
//       <div className="cta">Contact Us</div>
//     </div>
//   )
// }
