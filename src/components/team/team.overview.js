import React from 'react';
import { TeamList as TeamMemberList} from './team.list';

export default function TeamOverviewPage(props) {
  const { history } = props;

  return (
    <div className="page page__team">
      <div className="page__team__items">
        <TeamMemberList history={history} />
      </div>
    </div>
  )
}