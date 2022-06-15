import React from 'react';
import './callback.style.desktop.scss';
import './callback.style.mobile.scss';
import data from '../../data/data.callback.json';
import { InternalLinkHighlighted } from '../subcomponents/special_link/links.object';
import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons';

// A custom hook that builds on useLocation to parse the query string.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function QueryParamsDemo() {
  let query = useQuery();
  const code = query.get("code");
  console.log(code);
}

export default class Callback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      start: 0,
      end: data.callbackData.length
    }
    this.updateStatus = this.updateStatus.bind(this);

    this.status = "Success!";
    this.description = "You now have full access to HLW add-ins!";
    this.contact = "If you have any question, Please reach out to NEXT by submitting a ticket!";
  }
  

  cycle() {
    const { start, end, current } = this.state;
    let count = current + 1;

    if(count > 4) {
      count = 0;
    }
    
    this.setState({
      current: count
    });
  }

  reverse() {
    const { start, end, current } = this.state;
    let count = current - 1;

    if(count < 0) {
      count = 4;
    }
    
    this.setState({
      current: count
    });
  }

  updateStatus(){
    const queryParams = new URLSearchParams(window.location.search);
    const term = queryParams.get("code");
    console.log(term);

    if (term == null){
      this.status = "Oops!";
      this.description = "Looks like either your license has been expired or you have no permission to access this data.";
      this.contact = "Please reach out to NEXT by submitting a ticket!";
    }
  }
  
  render() {

    const info = data.callbackData;
    const current = info[this.state.current];
    const next = "Next";
    const seehow = "See How";
    
    this.updateStatus();

    return (
      <div className={`callback callback__${current.shortName}`}>

        <div className="callback__lefthalfgrid">
          <div className={`callback__icon callback__icon__${current.shortName}`}/>
        </div>

        <div className="callback__righthalfgrid">
          <div className="callback__title">
            <p>{this.status}</p>
          </div>
          <div className="callback__description">
            <p>{this.description}</p>
            <p>{this.contact}</p>
          </div>
          <div className="callback__ticket">
            <p>Ticket</p>
          </div>
        </div>
      </div>
    )
  }
}
