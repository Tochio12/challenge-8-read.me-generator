const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name:'name',
            message:'what is your name?'
        },
        {
            type: 'checkbox',
            message: 'what languages do you know?',
            name: 'stack?',
            choices: ['HTML', 'JavaScript', 'Python'],
        },
        {
            type: '',
            name: '',
            message: '',
        },
        {
            type: '',
            name: '',
            message: '',
        },
    ])
    .then((data) => {

    })