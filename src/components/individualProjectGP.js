import React from 'react'
import GitHub from './socials/github'
import GooglePlay from "./socials/googlePlay"

const IndividualProjectGP = ({ projectTitle, description, githubLink, languages, googlePlay }) => {
    return (
        <div className="individual-project">
            <div className="individual-project-title">{projectTitle}</div>
            <div className="individual-project-description">{description}</div>
            <div className="individual-project-languages">{languages}</div>
            <a href={githubLink} target="_blank" >
                <GitHub style={'project-github'} />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.Visram_INC.PillsOnWheels" target="_blank">
                <GooglePlay style={'google-play'} />
            </a>
        </div>
    )
}

export default IndividualProjectGP;