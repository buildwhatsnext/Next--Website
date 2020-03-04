import React. { Fragment } from "react"
import {TeamText} from '../subcomponents/team/teamtext.obj.js'
import {TeamImage} from '../subcomponents/team/teamimage.obj.js'

export default class Ayy extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            name:''
        }
    }

    setName = (name) => {
        this.setState({name});
    }

    render() {
        return (
            <div className="team">
                <div className="team__text">
                    <TeamText />
                </div>
                <div className="team__Image">
                    <TeamImage />
                </div>
            </div>
        )
    }
}
