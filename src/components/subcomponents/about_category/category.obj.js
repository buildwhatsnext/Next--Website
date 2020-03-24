import React from 'react';
import { Fragment } from 'react';
import icon from '../../../../src/assets/svg/icons/12monitor.svg'
import cross from '../../../../src/assets/svg/icons/51cross.svg'

export class AboutCategory extends React.Component {
  constructor(props) {
    super(props);
    }

    render() {

        const titleexperience = `Craft Inclusive Experiences`
        const subtitleexperience = `A pulvinar augue aliquam elementum fringilla. 
        Risus, gravida tortor elementum suspendisse sit donec. 
        Vel massa eu in risus mi eu rhoncus. `
        const titleinsight = `Create Insight`
        const subtitleinsight = `A pulvinar augue aliquam elementum fringilla. 
        Risus, gravida tortor elementum suspendisse sit donec. 
        Vel massa eu in risus mi eu rhoncus. `
        const titlecapabilities = `Elevate Capabilities`
        const subtitlecapabilities = `A pulvinar augue aliquam elementum fringilla. 
        Risus, gravida tortor elementum suspendisse sit donec. 
        Vel massa eu in risus mi eu rhoncus.`
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
                    <p>{ seehow }</p>
                </div>
                <div className="about__seehowinsight">
                    <p>{ seehow }</p>
                </div>
                <div className="about__seehowcapabilities">
                    <p>{ seehow }</p>
                </div>
                <div className="about__highlightexperience">
                    
                </div>
                <div className="about__highlightinsight">
                    
                </div>
                <div className="about__highlightcapabilities">
                    
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