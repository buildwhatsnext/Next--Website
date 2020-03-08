import React from 'react';
import data from '../../data/data.team.json';

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
  return (
    <div className="team__detail">
      
      <div className="team__detail__name">Name: { data.name }</div>
      <div className="team__detail__email">email: { data.email }</div>
      <div className="team__detail__position">position: { data.position }</div>
      <div className="team__detail__location">location: { data.location }</div>
      <div className="team__detail__description">description: { data.description }</div>
      <div className="team__detail__team">team: { <data className="team"></data> }</div>
      <div className="team__detail__picture">picture: { data.pictureURL }</div>
      
    </div>
  )
}
