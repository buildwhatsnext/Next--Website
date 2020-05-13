import Head from 'next/head'
import Navbar from '../objects/navbar.object';
import { gsap } from 'gsap';

export default function Home() {
  const line1 = 'Next is a startup';
  const line2 = "Here's some stuff to talk about";
  const line3 = "These are some things we're working on";

  // const scrollScreen = (id) => {
  //   gsap.to(window, { 
  //     duration: 2, 
  //     scrollTo: {
  //       y: `#section${id}`,
  //       offset: 50
  //     }
  //   });
  // }

  return (
    <div className="container">
      <Head>
        <title>Next/ Design Tech Startup? </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {/* <Navbar />   */}
        <div className="nav"><h1>NEXT</h1></div>
        <section className="section section_first grid">
          <div className="background trap"/>
          <div className="first" id="1">
            <h1>{ line1 }</h1>
            <h1>{ line2 }</h1>
            <h1>{ line3 }</h1>
            {/* <p onClick={(e) => scrollScreen("2") }>This should scroll to section 2</p> */}
          </div>
        </section>
        <section className="section section_second">
          <div className="second" id="2">
            <h1>Second stuff</h1>
            <h1>Second stuff  dfasfsdf </h1>
            <h1>More to come!</h1>
          </div>
        </section>

        <section className="section section_third">
          <div className="third" id="3">
            <h1>Third stuff</h1>
            <h1>Third stuff dsal;jjshflkshf </h1>
            <h1>Not much left</h1>
          </div>
        </section>

        <section className="section section_fourth">
          <div className="fourth" id="4">
            <h1>Fourth stuff</h1>
            <h1>Fourth portion!</h1>
            <h1>This is the end</h1>
          </div>
        </section>
      </main>

    </div>
  )
}
