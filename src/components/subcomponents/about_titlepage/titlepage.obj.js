
import React, { Fragment, useRef, useEffect } from 'react';
import { TweenMax, Timeline, Power1 } from 'gsap';
import { InternalLinkHighlighted } from '../../subcomponents/special_link/links.object';


export class AboutTitle extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {

        const title = ' Our Mission & Goals'
        const description = `Next is a design-focused technology startup within hlw. We are advancing the way technology is used in the design of Workplaces. Cities. Classrooms. Campuses. Homes. Studio.

Our mission is to craft, build, and launch immersive and data-driven approaches to design. 
        
We think of our clients as partners and encourage them to collaborate with us to invent new ways of  approaching their projects. We are a powerful  conduit to help clients envision building, not more, but  smarter.`
        const contactus = `Contact Us`
//         const quote = `Technology should enable people 
//  do what they are trained to do, better`
//         const quoter = '-John Gering'

        return (
            <Fragment>

                <div className="about__textbox"></div>

                <div className="about__title" >
                    <p> { title } </p>
                </div>

                <div className="about__description">
                    <p> { description }  </p>
                </div>

                <div className="about__contactus">
                    {/* <p> { contactus } </p> */}
                    <InternalLinkHighlighted value={contactus} destination="/contact" />
                </div>

                {/* <div className="about__quote">
                    <p> { quote } </p>
                </div>

                <div className="about__name">
                    <p> { quoter } </p>
                </div> */}
            </Fragment>
        )
    }   
}

