import React from 'react';

export class TeamMemberListing extends React.Component {
  constructor(props) {
    super(props);
  }

  viewDetail = (e) => {
    e.preventDefault();
    // change the page;
    console.log('Change the page accordingly!');
  }

  formatTeamMembers() {   
    console.log(this.props.data.members.values);

    // take in team data
    const teamData = Object.values(this.props.data.members);

    // restructure each team member's data individually
    let newData = teamData.map(data => {
      // format that data into a TeamMember component
      let member = 
        <TeamMember 
          name={data.name}
          position={data.position}
          location={data.location}
          handleClick={this.viewDetail}
        />      

      // and then push the data into an array
      return member;
    })

    // finally, return the array
    return newData;
  }
  
  render() {
    let data = this.formatTeamMembers();

    return (
      <TeamMemberList teamData={data}/>
    )
  }
}  

const TeamMemberList = props => (
  <div className="team__member__list">
    { props.teamData }
  </div>
);

const TeamMember = (props) => (  
  <div className={ `team__member team__member__${props.name}`} onClick={props.handleClick}>
    <p className="name">{props.name}</p>
    <p className="position">{props.position}</p>
    <p className="location">{props.location}</p>
  </div>
)