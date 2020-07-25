import React from "react"
import Github from "../components/socials/github"
import LinkedIn from "../components/socials/linkedin"
import Header from "../components/header"
import "../styles/styles.scss"
import Introduction from "../components/introduction"
import AboutMe from "../components/aboutMe"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <div className="container"
      style={{
        background: "#101357",
        width: "100%",
        height: "100vh",
      }}
    >
      
      <Header />
      <Introduction/>
      <AboutMe />
      <Experience/>
      <Projects />
      <Contact />
      <a href="https://github.com/areezvisram" target="_blank">
        <Github style={'github'} />
      </a>
      <a href="https://www.linkedin.com/in/areezvisram/" target="_blank">
        <LinkedIn />
      </a>


    </div>
  )
}

export default IndexPage
