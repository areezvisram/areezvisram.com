import React from "react"
import { slide as Menu } from "react-burger-menu"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import Github from "./socials/github"
import LinkedIn from "./socials/linkedin"
import Resume from "./resume"

const Burger = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const handleStateChange = state => {
    setMenuOpen(state.isOpen)
  }
  const closeMenu = () => {
    setMenuOpen(false)
  }
  return (
    <div className="burger-menu">
      <Menu right isOpen={menuOpen} onStateChange={state => handleStateChange(state)}>
        <AnchorLink to="/#intro"><span onClick={() => {closeMenu()}}>Introduction</span></AnchorLink>
        <AnchorLink to="/#about"><span onClick={() => {closeMenu()}}>About Me</span></AnchorLink>
        <AnchorLink to="/#experience"><span onClick={() => {closeMenu()}}>Experience</span></AnchorLink>
        <AnchorLink to="/#projects"><span onClick={() => {closeMenu()}}>Projects</span></AnchorLink>
        <AnchorLink to="/#contact"><span onClick={() => {closeMenu()}}>Contact</span></AnchorLink>
        <Resume onClickFunction={() => {closeMenu()}}/>
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
