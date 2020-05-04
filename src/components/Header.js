import React from 'react'

import Footer from './Footer'
import avatar from '../../avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Alena Hasslacher</strong>,
        <br />
        an aspiring web developer
        <br />
        from Vienna, Austria.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
