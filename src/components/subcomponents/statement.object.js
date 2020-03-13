import React, { useState, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/styles.interaction.scss';

export function StatementMutable(props) {
  const { data, statement } = props;
  const [ index, setIndex ] = useState(0);
  const [ display, setDisplay ] = useState(statement);

  const incrementData = () => {
    setDisplay(data[index]);

    let i = (index + 1) < data.length 
      ? index + 1 
      : 0;

    setIndex(i);
  }

  useEffect(() => {
    setTimeout(incrementData, 1000);
  });

  return (
    <Fragment>
      <p> { statement } </p>
      <TransitionGroup>
        <CSSTransition
          key={index}
          timeout={1500}
          classNames="fade"
        >
          <p> { display } </p>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  )
}