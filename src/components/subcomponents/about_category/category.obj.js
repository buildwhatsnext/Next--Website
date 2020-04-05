import React from 'react';
import { Fragment } from 'react';
import icon from '../../../../src/assets/svg/icons/12monitor.svg'
import cross from '../../../../src/assets/svg/icons/51cross.svg'
import { InternalLinkHighlighted } from '../../subcomponents/special_link/links.object';


export class AboutCategory extends React.Component {
  constructor(props) {
    super(props);
    }

    render() {

        const titleexperience = `Craft Inclusive Experiences`
        const subtitleexperience = `We craft immersive, narrative-driven, and collaborative experiences for project stakeholders. `
        const titleinsight = `Create Insight`
        const subtitleinsight = `We create a platform for intelligent decision-making in the design process.`
        const titlecapabilities = `Elevate Capabilities`
        const subtitlecapabilities = `We help build structure, resources, knowledge to help project teams run smarter.`
        const seehow = `See How`

        return (
            <Fragment>
                <div className="about__titleexperience">
                    <p>{ titleexperience }</p>
                </div>
                <div className="about__subtitleexperience">
                    <p>{ subtitleexperience }</p>
                </div>
                <div className="about__titleinsight">
                    <p>{ titleinsight }</p>
                </div>
                <div className="about__subtitleinsight">
                    <p>{ subtitleinsight }</p>
                </div>
                <div className='about__titlecapabilities'>
                    <p>{ titlecapabilities }</p>
                </div>
                <div className='about__subtitlecapabilities'>
                    <p>{ subtitlecapabilities }</p>
                </div>
                <div className="about__seehowexperience">
                    <InternalLinkHighlighted value={seehow} destination="/projects/piper" />
                </div>
                <div className="about__seehowinsight">
                    <InternalLinkHighlighted value={seehow} destination="/projects/turing" />
                </div>
                <div className="about__seehowcapabilities">
                    <InternalLinkHighlighted value={seehow} destination="/projects/google" />
                </div>


                {/* <div className='monitor'>
                    <img src={icon} alt="monitor"/>
                </div> */}
                {/* <div className="cross"></div> */}
            </Fragment>
        )
    }
}

// export function Experience(props) {
//     return (
//         <Fragment>
//             <p className="category__title"></p>
//             <p classname="category__subtitle"></p>
//         </Fragment>
//     )
// }

// export function Innovation(props) {
//     return (
//         <Fragment>
//             <p className="category__title"></p>
//             <p classname="category__subtitle"></p>
//         </Fragment>
//     )
// }

// export function Computation(props) {
//     return (
//         <Fragment>
//             <p className="category__title"></p>
//             <p classname="category__subtitle"></p>
//         </Fragment>
//     )
// }