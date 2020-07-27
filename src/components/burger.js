import React from "react"
import { slide as Menu } from "react-burger-menu"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Github from "./socials/github"
import LinkedIn from "./socials/linkedin"

const Burger = () => {
  return (
    <div className="burger-menu">
      <Menu isOpen={false} right>
        <AnchorLink to="/#intro">Introduction</AnchorLink>
        <AnchorLink to="/#about">About Me</AnchorLink>
        <AnchorLink to="/#experience">Experience</AnchorLink>
        <AnchorLink to="/#projects">Projects</AnchorLink>
        <AnchorLink to="/#contact">Contact</AnchorLink>
        <AnchorLink>Resume</AnchorLink>
        <a href="https://github.com/areezvisram" target="_blank">
          <Github style={"burger-github"} />
        </a>
        <a href="https://www.linkedin.com/in/areezvisram/" target="_blank">
          <LinkedIn style={"burger-linkedin"} />
        </a>
      </Menu>
    </div>
  )
}

export default Burger
