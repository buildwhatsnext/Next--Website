import React from 'react';
import { Link } from 'react-router-dom';
import './team.list.desktop.scss';
import './team.list.mobile.scss';

import TeamData from '../../data/data.team.json';

export function TeamList(props) {
  const { teams } = TeamData;
  const { history } = props;

  const tNames = Object.getOwnPropertyNames(teams);

  let i = 0;
  const teamList = tNames.map(team => {
    const info = teams[team];

    return <TeamItem key={i++} {...info } history={ history } />
  })

  return (
    <div className="team__data__list">
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
      <div className={`team__item team__item__${props.align}`}>
        <div className="team__item__title">
          <p> { props.title } </p>
        </div>
        <div className="team__item__type"> { props.type } </div>
        <div className={`team__item__image team__item__image__${props.title}`}/>
      </div>
    </Link>
  );
}