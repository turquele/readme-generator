const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      message: 'Title',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Project Description',
      name: 'description',
    },
    {
      type: 'input',
      message: "Installation",
      name: 'installation',
    },
    {
      type: 'input',
      message: "Usage?",
      name: 'usage',
    },
    {
      type: 'list',
      choices: ['Apache', 'MIT', 'GLP'],
      message: "License",
      name: 'license',
    },
    {
      type: 'input',
      message: "Contribution",
      name: 'contribution',
    },
    {
      type: 'input',
      message: "Test",
      name: 'test',
    },
    {
      type: 'input',
      message: "Questions",
      name: 'questions',
    },
    {
      type: 'input',
      message: "e-mail",
      name: 'email',
    },
    {
      type: 'input',
      message: "GitHub",
      name: 'github',
    },
  ];




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
