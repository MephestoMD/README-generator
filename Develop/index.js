// TODO: Include packages needed for this application
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    { type: 'input', message: 'What is the title of your project?', name: 'title' },
    { type: 'input', message: 'What was your motivation for developing this project?', name: 'motivation' },
    { type: 'input', message: 'Why did you build this project?', name: 'build' },
    { type: 'input', message: 'What problem(s) did this project solve?', name: 'problems' },
    { type: 'input', message: 'What did you learn while working on this project?', name: 'learn' },
    { type: 'input', message: 'What are the steps required to install your app?', name: 'steps' },
    { type: 'input', message: 'Provide instructions and examples for how to use your app: ', name: 'instructions' },
    { type: 'input', message: 'Please provide instructions and guidelines for how to contribute to your project: ', name: 'contributing' },
    { type: 'input', message: 'Please provide some sample tests for your application: ', name: 'tests' },
    { type: 'checkbox', message: 'Choose a license for your project from the following list: ', name: 'license', 
        choices: ['The MIT License', 'Mozilla Public License 2.0', 'Apache 2.0 License', 'Eclipse Public License 1.0', 'IBM Public License Version 1.0'] },
    { type: 'input', message: 'Please enter your GitHub username: ', name: 'github' },
    { type: 'input', message: 'Please enter your email address: ', name: 'email' },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    const mdFile = markdown.generateMarkdown(data);
    fs.writeFile(`README.md`, mdFile, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
    .then((data) => 
    writeToFile(data.title, data));
}


// Function call to initialize app
init();
