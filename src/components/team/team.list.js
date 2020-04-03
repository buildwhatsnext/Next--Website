import React from 'react';
import { Link } from 'react-router-dom';
import './team.list.desktop.scss';
import './team.list.mobile.scss';

import TeamData from '../../data/data.team.json';

export function TeamList(props) {
  const { members } = TeamData;
  const { history } = props;

  const tNames = Object.getOwnPropertyNames(members);

  let i = 0;
  const teamList = tNames.map(team => {
    const info = members[team];

    return <TeamItem key={i++} {...info } history={ history } />
  })

  return (
    <div className="team__list">
      { teamList }
    </div>
  );
}

export function TeamItem(props) {
  const path = props.history.location.pathname;
  const title = props.title ? props.title : "/";
  const teamName = title.toString().toLowerCase();
  const route = `${path}/${teamName}`;

  return (
    <Link to={route}>
      <div className={`team__item team__item__${props.shortName}`}>
        <div className="team__item__name">
          <p> { props.name } </p>
        </div>
        <div className="team__item__position"> { props.position } </div>
        <div className="team__item__location"> { props.location } </div>
        <div className={`team__item__image team__item__image__${props.shortName}`}/>
        <div className="team__item__block"/>
      </div>
    </Link>
  );
}