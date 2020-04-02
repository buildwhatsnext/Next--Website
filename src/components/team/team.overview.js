import React from 'react';
import TeamMemberList from '../subcomponents/team/team.list';

export default function ProjectOverviewPage(props) {
  const { history } = props;

  return (
    <div className="page page__project">
      <div className="page__project__items">
        <TeamMemberList history={history} />
      </div>
    </div>
  )
}