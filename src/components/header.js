import { Link,useStaticQuery, graphql } from "gatsby"
import React from "react"
import Logo from "./logo"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Resume from "./resume"

const Header = () => {
  // const myexamplePdf = useStaticQuery(graphql`
  //   {
  //     pdf: file(relativePath: { eq: "Resume.pdf" }) {
  //       name
  //       extension
  //       publicURL
  //     }
  //   }
  // `)
  return (
    <header
      style={{
        background: `#101357`,
        height: `100px`,
        position: `fixed`,
        zIndex: `50`,
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
              <Resume />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
