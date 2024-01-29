// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// const { default: inquirer } = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of your Project?",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "description",
        message: "What is this project for?",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "credits",
        message: "List any collaborators:",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "checkbox",
        name: "license",
        message: "Which license will you be using?",
        choices: ["MIT", "APACHE2.0", "Mozilla Public License 2.0", "GNU GPlv3", "No License"],
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "require",
        message: "List any dependecies here:",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "GitHub",
        message: "GitHub username?",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    },
    {
        type: "input",
        name: "Email",
        message: "Email:",
        validate: (value)=> {
            if(value) {
                return true
            } else {
                return 'Please input value to continue'
            }
        } 
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md file... :)");
        writeToFile("./dist/README.md", generateMarkdown({ ...responses}));
    });
}

// Function call to initialize app
init();
