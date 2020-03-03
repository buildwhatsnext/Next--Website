import React, { Fragment } from 'react';
import './about.style.desktop.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';

export default class About extends React.Component {
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
            <div className="about">
                <div className="about__titlepage">
                    <AboutTitle />
                </div>
                <div className="about__category">
                    <aboutcategory />
                </div>
            </div>
        )
    }
}