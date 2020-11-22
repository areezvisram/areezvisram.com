import React from 'react'
import GitHub from './socials/github'
import GoogleChrome from "./socials/googleChrome"

const IndividualProjectGC = ({ projectTitle, description, githubLink, languages, link }) => {
    return (
        <div className="individual-project">
            <div className="individual-project-title">{projectTitle}</div>
            <div className="individual-project-description">{description}</div>
            <div className="individual-project-languages">{languages}</div>
            <a href={githubLink} target="_blank" >
                <GitHub style={'project-github'} />
            </a>
            <a href={link} target="_blank">
                <GoogleChrome style={'google-chrome'} />
            </a>
        </div>
    )
}

export default IndividualProjectGC;