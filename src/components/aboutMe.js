import React from "react"
import MyPicture from "../components/myPicture"

const aboutMe = () => {
  return (
    <div className="about-me-container" id="about">
      <div className="me-all">
        <div className="about-me-title">About Me</div>
        <div className="about-me-description">
          My name is Areez and I'm a software engineer from Toronto, ON.{" "}
        </div>
        <div className="about-me-description">
          I enjoy creating various types of software projects, including
          websites, mobile apps, standalone applications, and especially AI
          related projects.
        </div>
        <div className="about-me-description">
          I'm currently studying Software Engineering at McMaster University,
          with a minor in Innovation and Entrepreneurship.
        </div>
      </div>
      <MyPicture />
    </div>
  )
}

export default aboutMe
