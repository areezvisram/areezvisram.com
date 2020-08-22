import React from "react"
import MyPicture from "../components/myPicture"

const aboutMe = () => {
  return (
    <div className="about-me-container" id="about">
      <div className="me-all">
        <div className="about-me-title">
          About Me<hr className="about-line"></hr>
        </div>
        <div className="about-me-description">
          My name is Areez and I'm a software engineer from Toronto.{" "}
        </div>
        <div className="about-me-description">
          I enjoy creating various types of software projects, including
          websites, mobile apps, standalone applications, and especially AI
          related projects.
        </div>
        <div className="about-me-description">
          I'm currently studying Software Engineering with a minor in Innovation
          and Entrepreneurship at McMaster University.
        </div>
      </div>
      <MyPicture />
    </div>
  )
}

export default aboutMe
