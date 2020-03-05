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
              <div className="picture"></div>
              <div className="whitebox"></div>
              <div className="bluebox"></div>
            </div>
          </Fragment>
        )
      }
    }
