import React, { Fragment } from 'react';
import {TeamText} from '../subcomponents/team/teamtext.obj';
import {TeamImage} from '../subcomponents/team/teamimage.obj';

export default class Team extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
        return (
            <div className ="entireteam">
                <div className="team__text">
                    <TeamText />
                </div>
                <div className="team__image">
                    <TeamImage/>
                </div>
            </div>
        )
    }
}