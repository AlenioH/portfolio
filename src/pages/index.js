import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Alena Hasslacher, fullstack web-developer'
  const siteDescription = 'Portfolio Alena Hasslacher fullstack web-developer'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Powered by coffee
              <br />
              and kittens.
            </h2>
          </header>
          <p>
            I originally come from Russia, but have been living in Vienna,
            Austria since 2015. Having worked in Human Resources in a bank in
            Moscow, I pursued my degree in Linguistics at the University of
            Vienna and later worked for Austrian Airlines. I've been always
            curious about web-development, but never was brave enough to try. It
            all changed in May 2020 when I joined the{' '}
            <a href="https://upleveled.io/">Upleveled Coding Bootcamp</a>, where
            I learned all about{' '}
            <em>
              HTML, CSS, JavaScript, React.js, Next.js, PostgresQL, GraphQL,
              Node.js,
            </em>
            and many other technologies. And now I'm the one doing the Internet,
            too!
            <br></br> My finished projects you can check out down below, at the
            moment I am working on an eco-challenge web-app, so stay tuned.
            <br></br>I am passionate about <em>coding</em>, books, cats, and
            good (vegan) food.
            <br></br> My motto is: 'It's okay to eat a whole pizza by yourself'.
          </p>
          <ul className="actions">
            <li>
              <a href="#two" className="button">
                Check out my work
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https://github.com/AlenioH/" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get in Touch</h2>
          <p>
            If you would like to get in touch with me, send me an email or give
            me a call.
          </p>
          <div className="row">
            {/* <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    ></textarea>
                  </div>
                </div>
                <ul className="actions" style={{ marginTop: 30 }}>
                  <li>
                    <input type="submit" value="Send Message" />
                  </li>
                </ul>
              </form>
            </div> */}
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  +43 650 915 11 15
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto: alena.hasslacher@gmail.com">
                    alena.hasslacher@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
