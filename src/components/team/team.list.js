import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './team.list.desktop.scss';
import './team.list.laptop.scss';

import TeamData from '../../data/data.team.json';

export function TeamList(props) {
  const { members } = TeamData;
  const { history } = props;

  const tNames = Object.getOwnPropertyNames(members).sort();

  let i = tNames.length;
  let teamList = [];
  for(i; i >= 0; i--) {
    let useSpace = i % 1 === 0;

    const info = useSpace
      ? members[tNames[i/1]]
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
    <Fragment>
      <div className="team__list">
        { teamList }
      </div>
    </Fragment>
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
        <div className="team__item__name"> <p> { props.name } </p> </div>
        <div className="team__item__position"> <p> { props.position } </p></div>
        <div className="team__item__location"> <p> { props.location } </p></div>
        <div className={`team__item__image team__item__image__${props.shortName}`}/>
        <div className="team__item__block__coral">
          <div className="team__item__block__coral__content"></div>
        </div>
        <div className="team__item__block__blue">
          <div className="team__item__block__blue__content"></div>
        </div>
      </div>
    </Link>
  );
}

export function Spacer(props) {
  return (
    <div className={`spacer spacer__position__${props.position}`}></div>
  )
}