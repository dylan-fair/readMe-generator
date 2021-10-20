const { get } = require('http')
const inquirer = require('inquirer')
const fs = require('fs'); 
let getInfo = function(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the title of your project!(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please eneter a title!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of you project!(Requiered)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter a description!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps to install your project(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true 
                } else {
                    console.log("Please enter installation instructions!");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Whats is the usage of this project?(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter a usage")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'license',
            message: 'what license is this project covered by?(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter a license!")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'cont',
            message: "Who are the contributors?(Required)",
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log("Please enter names")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter tests(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter tests")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter your github link',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("please enter a github url");
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email!(Required)',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("enter email")
                    return false
                }
            }
        }
    ])
}
const makePage = function(infoArr){
    return `
# ${infoArr.name}
![License](https://img.shields.io/badge/license-APACHE 2.0-blue.svg)

## Description

${infoArr.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation

${infoArr.install}

## Usage

${infoArr.usage}

## License

${infoArr.license}

## Contributing

${infoArr.cont}

## Tests

${infoArr.tests}

## Questions
[Link to my GitHub for further questions!](${infoArr.questions})
[My Email for further question!](${infoArr.email})

    
    `
}
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('readME.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  }
getInfo()
    .then(info => {
        return makePage(info);
    })
    .then(md =>{
        return writeFile(md);
    })