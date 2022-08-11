# My Personal Website
### http://areezvisram.com
![Website Image](/README%20Images/website.png)

### Description
* My personal portfolio website which showcases my information, skills, projects and experience
* This is a full stack application, this repository is the frontend
* All the data on the frontend is served from a backend server, which requires a unique JWT token to make requests to

### Technologies
* Frontend (this repository) built with React and Material UI
* Fully authenticated backend built with Node and Express found [here](https://github.com/areezvisram/areezvisram.com-server)

### Design
![Design Diagram](/README%20Images/Frontend.jpeg)
* The architecture design of the frontend system can be seen above.
* The top layer App contains a BaseContainer, which is the base layer of the entire website.
* The Base Container is made up of containers for each section of the site. So each section such as Introduction, About, Experience, Projects, Contact is its own container.
* Each of these containers contains a variable number of React components needed to make up the container.

* The app contains an authenticated backend, meaning a unique JWT token is needed to make requests to the backend server
* Whenever the app is loaded, that JWT token is generated using a client secret and stored in Redux
* From there, any container that needs to make a backend request gets the JWT from the Redux store and can pass it down to its components as needed

### Installation
1. Ensure you have node and npm installed


2. Install dependencies

   ```sh
   npm install
   ```

3. Start the frontend application

   ```sh
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
