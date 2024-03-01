// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


//TODO: Create an array of questions
const questions =[
    {
      type: 'input',
      message: 'What is the name of your repo?',
      name: 'repoName',
      default: 'Application Name',
    },
    {
      type: 'input',
      message: 'What does your app do?',
      name: 'appDescription',
      default: 'Application Description',
    },
    {
      type: 'input',
      message: 'What is the screenshot URL?',
      name: 'imgURL',
      default: 'Project Visual'
    },
    {
      type: 'input',
      message: 'What technologies did you utilize?',
      name: 'technologies',
      default: 'Technologies Utlized'
    },
    {
        type: 'input',
        message: 'What is the github user namer?',
        name: 'userName',
        default: 'Github username'
    },
    {
      type: 'input',
      message: 'Who worked on this project?',
      name: 'authors',
      default: 'Project Contributors'
    },
    {
      type: 'list',
      message: 'What license do you want to use?',
      name: 'license',
      choices: ['Apache License 2.0',
        'GNU General Public License (GPL) v3',
        'Mozilla Public License 2.0',
        'BSD 3-Clause License', 'MIT'],
      default: 'MIT',   
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    }
  ]

// TODO: Create a function to write README file
function writeToFile(response) {
  //Sets the value of badge based upon the license selection
  let badge ='';
  switch(response.license){
    case 'Apache License 2.0':
      badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'GNU General Public License (GPL) v3':
      badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'Mozilla Public License 2.0':
      badge = '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'BSD 3-Clause License':
      badge = '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'MIT':
      badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
  }

  fs.writeFile('README.md',
  
  `
  ${badge}
  # ${response.repoName}

  # Description
  ${response.appDescription}
  
  # Visuals
  ![Screenshot](<${response.imgURL}>)

  # Technologies Used
  ${response.technologies}
  
  # Usage
  [githublink](https://github.com/${response.userName}/${response.repoName})
  [launchpages](https://${response.userName}.github.io/${response.repoName})

  # Authors and acknowledgment
  ${response.authors}, You can reach out for more questions at ${response.email}.

  # License
  ${response.license}` , 
  (err) => err ? console.error(err) : console.log('ReadMe successfully created!')) 
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) =>  
 writeToFile(response));
}

// Function call to initialize app
init();


