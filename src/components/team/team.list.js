import React from 'react';
import { Link } from 'react-router-dom';
import './team.list.desktop.scss';
import './team.list.mobile.scss';

import TeamData from '../../data/data.team.json';

export function TeamList(props) {
  const { members } = TeamData;
  const { history } = props;

  const tNames = Object.getOwnPropertyNames(members).sort();

  let i = tNames.length * 2;
  let teamList = [];
  for(i; i >= 0; i--) {
    let useSpace = i % 2 === 0;

    const info = useSpace
      ? members[tNames[i/2]]
      : null;

    let data = info
      ? <TeamItem 
          key={i} 
          position={i} 
          history={history}
          {...info}
        />
      : <Spacer key={i} position={i} />

    teamList.push(data);
  }

  teamList.reverse();

  return (
    <div className="team__list">
      { teamList }
    </div>
  );
}

export function TeamItem(props) {
  const path = props.history.location.pathname;
  const title = props.shortName ? props.shortName : "/";
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

export function Spacer(props) {
  return (
    <div className={`spacer spacer__position__${props.position}`}></div>
  )
}