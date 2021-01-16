import React from 'react'
import IndividualProject from "./individualProject"
import IndividualProjectGP from "./individualProjectGP"
import IndividualProjectGC from "./individualProjectGC"

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <div className="projects-all">
                <div className="projects-title">Projects <hr className="projects-line"></hr></div>
                <div className="project-mobile-explain">Please click on a project to view its links!</div>
                <IndividualProject projectTitle={'My Personal Website'} description={'Built my personal website to showcase my portfolio and skills. Shows information about my software skills, experience and projects. Responsive to any web browser or mobile device.'} languages={'GatsbyJS SCSS GraphQL'} githubLink={'https://github.com/areezvisram/areezvisram.com'} />
                <IndividualProjectGC projectTitle={'JobCheck'} description={'Job Application Manager that allows users to organize and track their job applications. Fully responsive, securely authenticated full stack application.'} languages={'React Flask CSS JavaScript'} githubLink={'https://github.com/areezvisram/JobCheck'} link={'https://jobcheck.netlify.app/'} />
                <IndividualProjectGC projectTitle={'Photo Sketcher'} description={'Application that takes any image and creates two hand-drawn pencil sketches of the image. Utilizes the Canny Edge Detection Algorithm'} languages={'React Python Flask HTML/CSS'} githubLink={'https://github.com/areezvisram/Photo-Sketcher'} link={'https://photo-sketcher.areezvisram.com/'}/>
                <IndividualProject projectTitle={'AI Sketches a Photo'} description={'This AI takes a real-life photo and draws two pencil sketches of the photo. Utilizes the Canny edge detection algorithm to isolate major edges and fill with background noise.'} languages={'Python'} githubLink={'https://github.com/areezvisram/AI-Sketches-a-Photo'}/>
                <IndividualProject projectTitle={'Image Recognition AI'} description={'AI designed to identify every-day objects such as soccer balls and cars. Trained on ImageAI image dataset. Returns percentage likelihood of object identification when passed an image.'} languages={'Jupyter Python'} githubLink={'https://github.com/areezvisram/Image-Recognition-AI'}/>
                <IndividualProjectGP projectTitle={'PillsOnWheels'} description={'Mobile app designed to let users order and organize their prescriptions. Built for a two-sided marketplace of drivers and customers. Available on Google Play.'} languages={'React-Native JavaScript Flask'} githubLink={'https://github.com/areezvisram/Pills-on-Wheels-HTNE'}/>
                <IndividualProjectGC projectTitle={'Leafs Chrome Extension'} description={'The ultimate chrome extension for any Leafs fan. Creates a custom Chrome start screen with Leafs-styled scoreboard clock, previous and next game data, stats and standings.'} languages={'JavaScript HTML CSS'} githubLink={'https://github.com/areezvisram/Toronto-Maple-Leafs-Chrome-Extension'} link={'https://chrome.google.com/webstore/detail/toronto-maple-leafs-chrom/llkoeoikpnfmnabgdmhoedbbpbeianii'}/>                
                <IndividualProject projectTitle={"String Max-Border Calculator"} description={'Assembler program to calculate the max border array of a string. Max border is the longest substring of that is both a prefix and a suffix of the string.'} languages={"Assembly(NASM) C Makefile"} githubLink={'https://github.com/areezvisram/String-Max-Border-Assembler'} />
                <IndividualProject projectTitle={'COVID Inventory Management'} description={'Medical supply inventory management web application. Identifies amounts of medical supplies in locations across Canada and suggests areas most in need of supplies.'} languages={'HTML/CSS Flask JavaScript'} githubLink={'https://github.com/areezvisram/RUHacks-2020-COVID-19-Inventory-Management'}/>        
                <IndividualProject projectTitle={'Automate Project Creation'} description={'Automate your project creation with this Python + batch script. Auto-creates a new project folder and GitHub repository with initial commit with a simple batch command, "create project_name"'} languages={'Python Batchfile'} githubLink={'https://github.com/areezvisram/Automate-New-Project-Creation'}/>                
                
            </div>
        </div>
    )
}
export default Projects;
