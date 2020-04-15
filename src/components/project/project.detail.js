import React, { Fragment } from 'react';
import data from '../../data/data.project.json';
import './project.detail.desktop.scss';
import './project.detail.mobile.scss';

import { InfoTable } from '../subcomponents/infotable/infotable.object';

export class ProjectDetailPage extends React.Component {
  render() {
    const { projectId } = this.props.match.params;
    const info = data.projects[projectId];
    const errorQuote = "I'm afraid I can't do that Michael...";

    return info === null || info === undefined
      ? <div className="error"><p>{errorQuote}</p></div>
      : <ProjectDetail {...info} />
  }
}

export function ProjectDetail(data) {
  return (
    <div className="project__detail">

      <div className={`project__detail__name project__detail__name__${data.slug}`}>
        <p>{ data.title }</p>
      </div>

      <div className="project__detail__infotable">
        <ProjectInfoTable {...data} />
      </div>

      <div className="project__detail__summary">
        <ProjectSummary {...data.description } />
      </div>

      <div className="project__detail__pictureURL__wrap">
        <div className={`project__detail__pictureURL project__detail__pictureURL__${data.slug}`} />
      </div>

    </div>
  )
}

function ProjectSummary(info) {
  const { challenge, outcome } = info;

  const sumC = {
    title: "The Challenges",
    summary: challenge,
    icon: 'https://res.cloudinary.com/next-hlw/image/upload/v1586185305/icon/14chip_xnacgj.svg'
  }

  const sumO = {
    title: "The Outcome",
    summary: outcome,
    icon: 'https://res.cloudinary.com/next-hlw/image/upload/v1586185086/icon/56.whitebulb_y75fno.svg'
  }

  return (
    <div className="summary">
      <div className="summary__challenge">
        <div className="summary__challenge__title">
          <div className="title__icon"> <img src={ sumC.icon} alt=""/> </div>
          <div className="title__text">{ sumC.title}</div>
        </div>
        <div className="summary__challenge__summary">
          { sumC.summary }
        </div>
      </div>
      <div className="summary__outcome">
        <div className="summary__outcome__title">
          <div className="title__icon"> <img src={ sumO.icon } alt=""/> </div>
          <div className="title__text">{ sumO.title }</div>
        </div>
        <div className="summary__outcome__summary">
          { sumO.summary }
        </div>
      </div>
    </div>
  )
}

function ProjectInfoTable(data) {
  const cleaned = cleanInfo(data);
  const info = convertObjectDataToArray(cleaned);
  return (
    <InfoTable data={info} />
  )
}

function cleanInfo(projectInfo) {
  const dataNeeds = [
    'client',
    'location',
    'status',
    'type',
    'team'
  ];

  let info = {};

  dataNeeds.forEach(data => {
    info[data] = projectInfo[data];
  });

  return info;
}

function convertObjectDataToArray(data) {
  const names = Object.getOwnPropertyNames(data);

  var array = names.map(name => {
    var value = data[name];
    return {
      title: name,
      value
    }
  });

  return array;
}


// ------------------------------------------------------------------------------------------------------------
// BELOW JS HAS A GSAP ANIMATION BIT
// ------------------------------------------------------------------------------------------------------------

// import React, { Fragment, useRef, useEffect } from 'react';
// import data from '../../data/data.project.json';
// import './project.detail.desktop.scss';
// import './project.detail.mobile.scss';
// import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
// import { TweenMax, Timeline, Power1 } from 'gsap';

// import { InfoTable } from '../subcomponents/infotable/infotable.object';

// export class ProjectDetailPage extends React.Component {
//   render() {
//     const { projectId } = this.props.match.params;
//     const info = data.projects[projectId];
//     const errorQuote = "I'm afraid I can't do that Michael...";
//     console.log(info);

//     return info === null || info === undefined
//       ? <div className="error"><p>{errorQuote}</p></div>
//       : <ProjectDetail {...info} />
//   }
// }


// export function ProjectDetail(data) {

//   let projectimage = useRef(null)
//   let masksize = useRef(null)
//   let titlemask = useRef(null)
//   let infotable = useRef(null)

//   useEffect(() => {
//     // console.log (projectimage)
//     TweenMax.from(projectimage, 1.25, {scale: 1.15, ease: Power1.easeOut})
//     TweenMax.from(masksize, 1, {height:0, ease: Power1.easeOut})
//     TweenMax.from(titlemask, 1, { y:-300, ease: Power1.easeOut})
//     // TweenMax.from(infotable, 2, {opacity:0, ease: Power1.easeOut})
//   }, [])


//   return (
//     <div className="project__detail">

//       <div className="project__detail__image__main">
//         {data.pictureURL}
//       </div>

//       <div className="project__detail__title">
//         <div className="titlemask">
//           <div className="title" ref={ttlmask => titlemask = ttlmask}> { data.title } </div>
//         </div>
//       </div>

//       <div className="project__detail__infotable" ref={info => infotable = info}>
//         <ProjectInfoTable {...data} />
//       </div>

//       <div className="project__detail__summary">
//         <ProjectSummary {...data.description } />
//       </div>

//       <div className="project__detail__image">
//         <div className="mask" ref={mask => masksize = mask}>
//           <div className = {`image__container image__container__${data.slug}`} ref={img => projectimage = img}/>
//         </div>
//       </div>
      
//       <div className="project__detail__image__extras">
//       </div>
//     </div>
//   )
// }

// function ProjectSummary(info) {
//   const { challenge, outcome } = info;

//   const sumC = {
//     title: "The Challenges",
//     summary: challenge,
//     icon: 'https://res.cloudinary.com/next-hlw/image/upload/v1586185305/icon/14chip_xnacgj.svg'
//   }

//   const sumO = {
//     title: "The Outcome",
//     summary: outcome,
//     icon: 'https://res.cloudinary.com/next-hlw/image/upload/v1586185086/icon/56.whitebulb_y75fno.svg'
//   }

//   return (
//     <div className="summary">
//       <div className="summary__challenge">
//         <div className="summary__challenge__title">
//           <div className="title__icon"> <img src={ sumC.icon} alt=""/> </div>
//           <div className="title__text">{ sumC.title}</div>
//         </div>
//         <div className="summary__challenge__summary">
//           { sumC.summary }
//         </div>
//       </div>
//       <div className="summary__outcome">
//         <div className="summary__outcome__title">
//           <div className="title__icon"> <img src={ sumO.icon } alt=""/> </div>
//           <div className="title__text">{ sumO.title }</div>
//           <div className={`project__detail__pictureURL__${data.title}`} />
//         </div>
//         <div className="summary__outcome__summary">
//           { sumO.summary }
//         </div>
//       </div>
//     </div>
//   )
// }

// function ProjectInfoTable(data) {
//   const cleaned = cleanInfo(data);
//   const info = convertObjectDataToArray(cleaned);
//   console.log(info);
//   return (
//     <InfoTable data={info} />
//   )
// }

// function cleanInfo(projectInfo) {
//   const dataNeeds = [
//     'client',
//     'location',
//     'status',
//     'type',
//     'team'
//   ];

//   let info = {};

//   dataNeeds.forEach(data => {
//     info[data] = projectInfo[data];
//   });

//   return info;
// }

// function convertObjectDataToArray(data) {
//   const names = Object.getOwnPropertyNames(data);

//   var array = names.map(name => {
//     var value = data[name];
//     return {
//       title: name,
//       value
//     }
//   });

//   return array;
// }
