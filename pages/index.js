import Head from 'next/head'

export default function Home() {
  const line1 = 'Next is a startup';
  const line2 = "Here's some stuff to talk about";
  const line3 = "These are some things we're working on";

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
