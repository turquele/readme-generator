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

// License types
const icenses = [
    {'Apache' : '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
    {'MIT' : '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
    {'GNU' : '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
  ];


// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', data, (err) =>
    err ? console.error(err) : console.log('Success!')
    );
}

// function to initialize program
function init() {
// question the user
inquirer
.prompt(questions)
.then((response) => {
  // Construction of the content in the variable readmeContent
  let readmeContent = ""
  if (response.title) {
    readmeContent += `# ${response.title}
    [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
    `
  };
  if (response.description) {
    readmeContent += `# ${response.description}
    `
  };




  



  writeToFile('README.md', readmeContent)
});
}

// function call to initialize program
init();
