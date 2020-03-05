import React from 'react';
import { Fragment } from 'react';


export class AboutTitle extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

        const title = ' Our Vision & Services'
        const description = `
                            Pellentesque neque nunc, aliquam sem blandit. 
                            Parturient ultrices at aliquet vitae eget quis. 
                            Euismod ac purus id laoreet diam ornare sit aenean. 
                            Molestie eget id dictum quis viverra. 
                            Egestas purus interdum vitae felis, vel, nibh volutpat, 
                            lacus. Molestie consequat cursus justo, odio adipiscing 
                            rutrum adipiscing egestas. Lectus id maecenas aliquet 
                            turpis laoreet in orci, accumsan, mattis. 
                            Vitae mattis libero at malesuada vitae. 
                            Consequat sit odio sagittis facilisis quis erat aliquam.
        `
        const quote = 'Technology should enable people do what they are trained to do, better'
        const quoter = '-John Gerrick'

        return (
            <Fragment>
                <div className="about__title">
                    <p> { title } </p>
                </div>

                <div className="about__description">
                    <p> { description }  </p>
                </div>

                <div className="about__quote">
                    <p> { quote } </p>
                </div>

                <div className="about__name">
                    <p> { quoter } </p>
                </div>
            </Fragment>
        )
    }   
}

