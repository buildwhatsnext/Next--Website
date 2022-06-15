import React from 'react';
import './login.style.desktop.scss';
// import './login.style.mobile.scss';
import data from '../../data/data.callback.json';
import { ExternalLinkHighlighted } from '../subcomponents/special_link/links.object';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className={'login login'}>
        <div className='NEXTlogo'></div>
        <div className='spreadsheet'>
          <div className='text'>
            Enter hlw Credentials to grant <br />
            access to your data ! <br />
            <br />
            Click the icon below to log in  <br />
            from Autodesk portal.
          </div>
          <div className='lock'></div>
        </div>
      </div>
    )
  }
}
