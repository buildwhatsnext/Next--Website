import React from 'react';
import { Fragment } from 'react';


export class TeamText extends React.Component {
    constructor(props) {
      super(props);
      }

      render() {
        return (
          <TeamMemberList/>
        )
      }
  }

  const TeamMemberList = props => (
    <div className="team__member__list">
      <TeamMember 
        name="Adam Strudwick" 
        position="Principal" 
        location="London" 
      />
      <TeamMember 
        name="Ruyi Igiehon" 
        position="Director" 
        location="New York" 
      />
      <TeamMember 
        name="Preston Smith" 
        position="Innovation Lead" 
        location="New York" 
      />
      <TeamMember 
        name="Andrew Delgado" 
        position="Experience Lead" 
        location="New York" 
      />
      <TeamMember 
        name="Jeff Bailey" 
        position="BIM Lead" 
        location="New York" 
      />
      <TeamMember 
        name="Mina Nassif" 
        position="BIM Specialist" 
        location="New York" 
      />
      <TeamMember 
        name="Bharti Kodnani" 
        position="Design Technology Specialist / Designer" 
        location="New York" 
      />
      <TeamMember 
        name="KyungPyo (KP) Kim" 
        position="Design Technology Specialist / Designer" 
        location="New York" 
      />
      <TeamMember 
        name="Chris Sower" 
        position="Architecture Designer" 
        location="Los Angeles" 
      />
      <TeamMember 
        name="Stephen Magee" 
        position="Design Technology / Technical Lead" 
        location="London" 
      />
    </div>
  );

  const TeamMember = (props) => (
    // <div className="team__member team__member__name">
    <div className={ `team__member team__member__${props.name}` }>
      <p className="name">{props.name}</p>
      <p className="position">{props.position}</p>
      <p className="location">{props.location}</p>
    </div>
)