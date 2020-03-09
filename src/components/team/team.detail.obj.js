import React from 'react';
import data from '../../data/data.team.json';
import './teamdetail.style.desktop.scss';

export default class TeamMemberDetailPage extends React.Component {
  render() {
    const { memberId } = this.props.match.params;
    const info = data.members[memberId];
    const errorQuote = "I'm afraid I can't do that Michael...";
    console.log(data);

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <TeamMemberDetail {...info} />
  }
}


export function TeamMemberDetail(data) {
  const url = data.pictureURL;

  console.log(url);

  return (
    <div className="team__detail">
      
      <div className="team__detail__name">{ data.name }</div>
      <div className="team__detail__email">{ data.email }</div>
      <div className="team__detail__position">{ data.position }</div>
      {/* <div className="team__detail__location">{ data.location }</div> */}
      <div className="team__detail__description">{ data.description }</div>
      {/* <div className="team__detail__team">{ data.team }</div> */}
      <div 
        className="team__detail__pictureURL" 
        style={
          {
            backgroundImage: `url('assets/team/professional/kp.PNG')`
          }
        }
      />
      
      <div className="trapazoid"></div>
      <div className="borderbottom"></div>
      <div className="cta">Get in Touch!</div>
    </div>
  )
}
