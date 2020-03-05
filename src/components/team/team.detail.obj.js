import React from 'react';

export function TeamMemberDetail(props) {
  return (
    <div className="team__detail">
      MemberId: { props.match.params.memberId }
    </div>
  )
}