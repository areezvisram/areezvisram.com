import React from "react"
import { slide as Menu } from "react-burger-menu"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Burger = () => {
  return (
    <Menu right className="burger-menu">
      <AnchorLink>About Me</AnchorLink>

      <AnchorLink>Experience</AnchorLink>

      <AnchorLink>Projects</AnchorLink>

      <AnchorLink>Contact</AnchorLink>

      <AnchorLink>Resume</AnchorLink>
    </Menu>
  )
}

export default Burger
