import React from 'react';
import { Fragment } from 'react';
import grouppic from '../../../assets/photo/team/group/grouppicture.png'

export class TeamImage extends React.Component {
    constructor(props) {
      super(props);
      }

      render() {
        return (
          <Fragment>
           <div className="image">
              <div className="nycpicture"></div>
              <div className="ldnpicture"></div>
              <div className="lapicture"></div>
            </div>
          </Fragment>
        )
      }
    }
