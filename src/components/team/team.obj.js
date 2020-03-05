import React, {Fragment} from 'react';
import {TeamText} from '../subcomponents/team/teamtext.obj';
import {TeamImage} from '../subcomponents/team/teamimage.obj';
import './team.style.desktop.scss'

export default class Team extends React.Component {
    constructor(props) {
        super (props);
    }

    render() {
        return (
            <div className="team">
                <div className="teamtext">
                    <TeamText />
                </div>
                <div className ="teamimage">
                    <TeamImage />
                </div>
            </div>
        )

    }
}
