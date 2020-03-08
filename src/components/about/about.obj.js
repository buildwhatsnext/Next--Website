import React, { Fragment } from 'react';
import './about.style.desktop.scss';
import './about.style.mobile.scss';
import { AboutTitle } from '../subcomponents/about_titlepage/titlepage.obj';
import { AboutCategory } from '../subcomponents/about_category/category.obj';


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
                  <AboutCategory />
              </div>
              <div className="crossgrid">
                <div className="cross1"></div>
                <div className="cross2"></div>
                <div className="cross3"></div>
              </div>
            </div>
        )
    }
}