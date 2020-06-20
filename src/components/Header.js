import React from 'react'

import Footer from './Footer'
import avatar from '../../avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="https://github.com/AlenioH/" className="image avatar">
        <img src={avatar} alt="Alena Hasslacher" />
      </a>
      <h1>
        <strong>I am Alena Hasslacher</strong>, passionate web developer from
        Vienna, Austria.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
