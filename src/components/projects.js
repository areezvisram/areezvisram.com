import React from 'react'
import IndividualProject from "./individualProject"

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <div className="projects-all">
                <div className="projects-title">Projects <hr className="projects-line"></hr></div>
                <IndividualProject projectTitle={'AI Sketches a Photo'} description={'This AI takes a real-life photo and draws two pencil sketches of the photo. Utilizes the Canny edge detection algorithm to isolate major edges and fill with background noise.'} languages={'Python'} githubLink={'https://github.com/areezvisram/AI-Sketches-a-Photo'}/>
                <IndividualProject projectTitle={'Image Recognition AI'} description={'AI designed to identify every-day objects such as soccer balls and cars. Trained on ImageAI image dataset. Returns percentage likelihood of object identification when passed an image.'} languages={'Jupyter Python'} githubLink={'https://github.com/areezvisram/Image-Recognition-AI'}/>
                <IndividualProject projectTitle={'PillsOnWheels'} description={'Mobile app designed to let users order and organize their prescriptions. Built for a two-sided marketplace of drivers and customers. Available on Google Play.'} languages={'React-Native JavaScript Flask'} githubLink={'https://github.com/areezvisram/Pills-on-Wheels-HTNE'}/>
                <IndividualProject projectTitle={'COVID Inventory Management'} description={'Medical supply inventory management web application. Identifies amounts of medical supplies in locations across Canada and suggests areas most in need of supplies.'} languages={'HTML/CSS Flask JavaScript'} githubLink={'https://github.com/areezvisram/RUHacks-2020-COVID-19-Inventory-Management'}/>
                <IndividualProject projectTitle={'MyCourses'} description={'Application designed to ease the process of post-secondary course research. Incorporates a secure login system and allows user to create a customizable timetable based on program and school.'} languages={'Java JavaFX'} githubLink={'https://github.com/areezvisram/MyCourses'}/>
                <IndividualProject projectTitle={'NHL Fantasy Recommender'} description={'Utilizes the NHL API to recommend best players for NHL fantasy teams. Incorporates a detailed algorithm to suggest best players for fantasy purposes. Allows building of preview fantasy teams.'} languages={'JavaScript ElectronJS HTML/CSS'}/>
            </div>
        </div>
    )
}
export default Projects;
