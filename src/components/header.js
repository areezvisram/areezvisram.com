import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"

const Header = () => (
  <header
    style={{
      background: `#101357`,
    }}
  >
    <div className="container">
      <div className="inner-header">
        <Logo />
        <div className="navigation">
          <nav>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/work">Work</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/resume">Resume</Link>
          </nav>
        </div>
      </div>
    </div>


  </header>
)



export default Header
