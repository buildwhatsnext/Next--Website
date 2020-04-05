import React from 'react';
import { Link } from 'react-router-dom';
import './project.item.desktop.scss';
import './project.item.mobile.scss';

// export function ProjectItem(props) {
//   const path = props.history.location.pathname;
//   const title = props.slug ? props.slug : "/";
//   const projectName = title.toString().toLowerCase();
//   const route = `${path}/${projectName}`;

//   return (
//     <div className={`project__item project__item__${props.slug}`}>
//       <div className={`project__item__image project__item__image__${props.slug}`}/> 
//       <div className="project__item__title">
//         <Link to={route}>
//           <div> { props.shortName } </div>
//         </Link>
//       </div>
//       <div className="project__item__type"> { props.type } </div>
//     </div>
//   );
// }

export class ProjectItem extends React.Component {
  render() {
    const path = this.props.history.location.pathname;
    const title = this.props.slug ? this.props.slug : "/";
    const projectName = title.toString().toLowerCase();
    const route = `${path}/${projectName}`;
  
    return (
      <div className={`project__item project__item__${this.props.slug}`}>
        <div className={`project__item__image project__item__image__${this.props.slug}`}/> 
        <div className="project__item__title">
          <Link to={route}>
            <div> { this.props.shortName } </div>
          </Link>
        </div>
        <div className="project__item__type"> { this.props.type } </div>
      </div>
    );
  }
}