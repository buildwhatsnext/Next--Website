import React, { useState, useEffect, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../styles/styles.interaction.scss';
import '../subcomponents/statements/statement.style.desktop.scss';
import '../subcomponents/statements/statement.style.laptop.scss';

export function StatementMutable(props) {
  const { data, statement } = props;
  const [ index, setIndex ] = useState(1);
  const [ display, setDisplay ] = useState('design');

  const incrementData = () => {
    setDisplay(data[index]);

    let i = (index + 1) < data.length 
      ? index + 1 
      : 0;

    setIndex(i);
  }

  useEffect(() => {
    setTimeout(incrementData, 2000);
  });

  return (
    <div className='statement__mutable'>
      <div className='statement__description'>
        <p> { statement } </p>
      </div>
      <div className='statement__changing'>
        <TransitionGroup>
          <CSSTransition
            key={index}
            timeout={1500}
            classNames="fade"
          >
            <p> { display } </p>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  )
}