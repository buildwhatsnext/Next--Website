import React from 'react';
import { Fragment } from 'react';
import icon from '../../../../src/assets/svg/icons/12monitor.svg'

export class aboutcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }
}

export function Experience(props) {
    return (
        <Fragment>
            <p className="category__title"></p>
            <p classname="category__subtitle"></p>
        </Fragment>
    )
}

export function Innovation(props) {
    return (
        <Fragment>
            <p className="category__title"></p>
            <p classname="category__subtitle"></p>
        </Fragment>
    )
}

export function Computation(props) {
    return (
        <Fragment>
            <p className="category__title"></p>
            <p classname="category__subtitle"></p>
        </Fragment>
    )
}