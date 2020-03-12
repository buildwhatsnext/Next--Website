import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/styles.interaction.scss';

export function StatementMutable(props) {
  const { data, statement } = props;
  let index = 0;
  let displayStatement = statement;

  const incrementData = () => {
    if(index >= data.length)
      index = 0;

    displayStatement = displayStatement + data[index];
  }

  setInterval(() => incrementData(), 1500);

  return (
    <TransitionGroup>
      <CSSTransition
        key={index}
        // in={true}
        // appear={true}
        timeout={300}
        classNames="fade"
      >
        <p>
          { displayStatement }
        </p>
      </CSSTransition>
  </TransitionGroup>
  )
}