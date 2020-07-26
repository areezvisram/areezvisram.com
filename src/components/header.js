import { Link } from "gatsby"
import React from "react"
import Logo from "./logo"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = () => (
  <header
    style={{
      background: `#101357`,
      height: `100px`,
      position: `fixed`,
      zIndex: `50`
    }}
  >
    <div className="header-container">
      <div className="inner-header">
        <Logo />
        <div className="navigation">
          <nav>
            <AnchorLink to="/#about">About</AnchorLink>
            <AnchorLink to="/#experience">Experience</AnchorLink>
            <AnchorLink to="/#projects">Projects</AnchorLink>
            <AnchorLink to="/#contact">Contact</AnchorLink>
            <Link to="/resume">Resume</Link>
          </nav>
        </div>
      </div>
    </div>


  </header>
)



export default Header
