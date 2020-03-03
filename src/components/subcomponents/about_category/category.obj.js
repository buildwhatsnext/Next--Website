import React from 'react';
import { Fragment } from 'react';
import icon from '../../../../src/assets/svg/icons/12monitor.svg'

export class AboutCategory extends React.Component {
  constructor(props) {
    super(props);
    }

    render() {

        const experiencehead = `Experience`
        const experiencebody = `Extended Reality
                                Fabrication`
        const innovationhead = `Innovation`
        const innovationbody = `UX/UI Design
                                Tech Strategy & Consultation
                                Application Prototyping
                                Software Development`
        const bimhead = `BIM`
        const bimbody = `BIM Implementation
                        Design Automation`

        return (
            <Fragment>
                <div className="about__experiencehead">
                    <p>{ experiencehead }</p>
                </div>
                <div className="about__experiencebody">
                    <p>{ experiencebody }</p>
                </div>
                <div className="about__innovationhead">
                    <p>{ innovationhead }</p>
                </div>
                <div className="about__innovationbody">
                    <p>{ innovationbody }</p>
                </div>
                <div className='about__bimhead'>
                    <p>{ bimhead }</p>
                </div>
                <div className='about__bimbody'>
                    <p>{ bimbody }</p>
                </div>
                <div className='monitor'>
                    <img src={icon} alt="monitor"/>
                </div>
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