import React from 'react';
import { TeamList as TeamMemberList} from './team.list';
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';

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