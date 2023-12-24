# ChatGPT Web Interface
This project provides a user-friendly web interface for interacting with the ChatGPT API.Users can input questions using HTML, CSS, and JavaScript, and the application processes these inputs, making requests to the ChatGPT API to retrieve answer data.


# Project Overview
The project consists of a web page interface allowing users to input questions. JavaScript handles user input and makes requests to the ChatGPT API. The backend, implemented in Node.js using server.js, serves as a file server to run the application on a server. The retrieved data is stored in a file named data.csv within the data folder.


# Project Workflow

### 1-Web Interface:
Users input questions through a web page interface created using HTML, CSS, and JavaScript.

### 2-API Interaction:
JavaScript handles user input and sends requests to the ChatGPT API to fetch answer data.

### 3-Data Storage:
The backend, implemented in server.js, processes the fetched data and stores it in a data.csv file within the data folder.

### 4-User Interface Update:
Simultaneously, the web page interface updates to display the fetched data. Users can view answers by clicking "show more" next to the corresponding questions.

#### Docker Containers
Docker containers are utilized to ensure the program's portability across various machines. This allows the application to be easily deployed and run on different environments.



# How i made this project ?
### 1-shema showing the goal we want to achieve on a paiper
### 2-a small UI using figma to show how the user interfce should looks like 
[figma_interface](https://github.com/soufiane-el-ouazzani/ChatGPT-API/blob/master/figma_interface/Screenshot%202023-12-24%20202807.png)
### 3-an html boilet tamplate to make the strucure , and css for styling the interface
### 4-a javascript code that do two main things send request to chatGPT API and handle the items on the page 
### 5-a back end node js file called server.js that make the project run on the server, 
### 6-add code to save the data in a file
### 7-containe the project inside a docker container
