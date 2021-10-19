let getInfo = function(){
    return inquirer.promt([
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
            message: 'Enter any questions',
            validate: nameInput => {
                if(nameInput){
                    return true
                } else {
                    console.log("Please enter any tests");
                    return false
                }
            }
        }
    ])
}