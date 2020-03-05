import React from 'react';
import { Fragment } from 'react';


export class TeamText extends React.Component {
    constructor(props) {
      super(props);
      }

      render() {

        const head = `A Global Team`

        const name__adam = `Adam Strudwick`
        const name__ruyi = `Ruyi Igiehon`
        const name__bharti = `Bharti Kodnani`
        const name__kp = `KyungPyo (KP) Kim`
        const name__jeff = `Jeff Bailey`
        const name__andrew = `Andrew Delgado`
        const name__preston = `Preston Smith`
        const name__chris = `Chris Sower`
        const name__stephen = `Stephen Magee`
        const name__mina = `Mina Nassif`

        const position__adam = `Principal`
        const position__ruyi = `Director of Design Technology`
        const position__bharti = `Design Technology Specialist / Designer`
        const position__kp = `Design Technology Specialist / Designer`
        const position__jeff = `BIM Specialist`
        const position__andrew = `Experience Lead`
        const position__preston = `Associate / Software Developer Lead`
        const position__chris = `Architecture Designer`
        const position__stephen = `Associate, Design Technology & Technical Lead`
        const position__mina = `BIM Specialist`

        const location__nyc = `New York`
        const location__ldn = `London`
        const location__la = `Los Angeles`
    
        return (
            <Fragment>
                <div className="head">
                    <p>{ head }</p>
                </div>

                <div className="names">
                    <div className="adam"> <p>{ name__adam }</p> </div>
                    <div className="ruyi"> <p>{ name__ruyi }</p> </div>
                    <div className="preston"> <p>{ name__preston }</p> </div>
                    <div className="chris"> <p>{ name__chris }</p> </div>
                    <div className="stephen"> <p>{ name__stephen }</p> </div>
                    <div className="andrew"> <p>{ name__andrew }</p> </div>
                    <div className="kp"> <p>{ name__kp }</p> </div>
                    <div className="bharti"> <p>{ name__bharti }</p> </div>
                    <div className="jeff"> <p>{ name__jeff }</p> </div>
                    <div className="mina"> <p>{ name__mina }</p> </div>
                    <div className="box_adam"></div>
                    <div className="box_ruyi"></div>
                    <div className="box_preston"></div>
                    <div className="box_chris"></div>
                    <div className="box_stephen"></div>
                    <div className="box_andrew"></div>
                    <div className="box_kp"></div>
                    <div className="box_bharti"></div>
                    <div className="box_jeff"></div>
                    <div className="box_mina"></div>
                    <div className="chrislocation"><p>{ location__la }</p></div>
                    <div className="adamlocation"><p>{ location__ldn }</p></div>
                    <div className="stephenlocation"><p>{ location__ldn }</p></div>
                    <div className="ruyilocation"><p>{ location__nyc }</p></div>
                    <div className="kplocation"><p>{ location__nyc }</p></div>
                    <div className="jefflocation"><p>{ location__nyc }</p></div>
                    <div className="minalocation"><p>{ location__nyc }</p></div>
                    <div className="andrewlocation"><p>{ location__nyc }</p></div>
                    <div className="bhartilocation"><p>{ location__nyc }</p></div>
                    <div className="prestonlocation"><p>{ location__nyc }</p></div>

                </div>

                <div className="positions">
                    <div className="adamposition"><p>{ position__adam }</p></div>
                    <div className="ruyiposition"><p>{ position__ruyi }</p></div>
                    <div className="bhartiposition"><p>{ position__bharti }</p></div>
                    <div className="kpposition"><p>{ position__kp }</p></div>
                    <div className="jeffposition"><p>{ position__jeff }</p></div>
                    <div className="andrewposition"><p>{ position__andrew }</p></div>
                    <div className="prestonposition"><p>{ position__preston }</p></div>
                    <div className="chrisposition"><p>{ position__chris }</p></div>
                    <div className="stephenposition"><p>{ position__stephen }</p></div>
                    <div className="minaposition"><p>{ position__mina }</p></div>
                </div>

            </Fragment>
        )
    }
}