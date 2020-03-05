import React from 'react';
import data from '../../data/data.team.json';


export default class TeamMemberDetailPage extends React.Component {
  render() {
    const { memberId } = this.props.match.params;
    const info = data.members[memberId];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null 
      ? <div className="error"><p>{errorQuote}</p></div>
      : <TeamMemberDetail {...info} />
  }
}


export function TeamMemberDetail(data) {
  return (
    <div className="team__detail">
      Name: { data.name }
    </div>
  )
}
