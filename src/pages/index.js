import React from "react"
import Logo from "../components/logo"
import Github from "../components/socials/github"
import LinkedIn from "../components/socials/linkedin"

const IndexPage = () => {
  return (
    <div
      style={{
        background: "#101357",
        width: "100%",
        height: "100vh",
      }}
    >
      <Logo />
      <a href="https://github.com/areezvisram" target="_blank">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/areezvisram/" target="_blank">
      <LinkedIn />
      </a>
    </div>
  )
}

export default IndexPage
