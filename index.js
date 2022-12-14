// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name:'title',
            message:'What is the title of your project?'
        },
        {
            type: 'input',
            message: 'Enter a description of your project',
            name: 'description',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Enter an explanation how to install the software, or commands for the program',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Describe how we can use this program',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select a license for this project',
            choices: [
                'MIT',
                'Apache 2.0',
                'Mozilla',
                'Boost Software 1.0',
                'ISC'
                
            ]
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'How can the users contribute to the project?'
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Enter any testing instructions or comands to be run to run tests',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'fileName',
            message: 'Whay do want to name this readme?',
        },
    ])
};

// function to write README file
function writeToFile(fileName, data) {
       fs.appendFile(`${fileName}.md`, data, 
    (err) => err ? console.error(err) : console.log(`${fileName}.md has been generated.`))
};

//  function to initialize app
async function init() {
    let answers = await questions();
    writeToFile((answers.fileName),(generateMarkdown(answers)));
}

// Function call to initialize app
init();






    