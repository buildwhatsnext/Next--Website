import Head from 'next/head'
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const line1 = 'Next is a startup';
  const line2 = "Here's some stuff to talk about";
  const line3 = "These are some things we're working on";

  const scrollScreen = (id) => {
    gsap.to(window, { 
      duration: 2, 
      scrollTo: {
        y: `#section${id}`,
        offset: 50
      }
    });
  }

  return (
    <div className="container">
      <Head>
        <title>Next/ Design Tech Startup? </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="section">
          <div className="title" id="1">
            <h1>{ line1 }</h1>
            <h1>{ line2 }</h1>
            <h1>{ line3 }</h1>
            <p onClick={(e) => scrollScreen("2") }>This should scroll to section 2</p>
          </div>
        </section>
        <section className="section">
          <div className="title" id="2">
            <h1>Second stuff</h1>
            <h1>Second stuff  dfasfsdf </h1>
            <h1>More to come!</h1>
          </div>
        </section>
      </main>

    </div>
  )
}
