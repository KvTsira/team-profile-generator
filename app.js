const inquirer = require('inquirer');
const fs = require('fs');


//no need to require Employee class since the following three classes inherit it
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generateSite = require('./src/generate-site');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'Team.html');

//create an empty array
let devTeam = [];

//get manager info
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is Managers name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ('Please enter Managers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is Managers id?',
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log ('Please enter id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Managers email address?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log ('Please enter Managers email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is Managers office number?',
            validate: officeNumberInput => {
                if (officeNumberInput) {
                    return true;
                } else {
                    console.log ('Please enter office number');
                    return false;
                }
            }
        }

    ]).then(answers => {
        //console.log(answers);
        //create a manager object
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        //add Manager to the devTeam array
        devTeam.push(manager);
        //prompt the options menu
        promptOptions();
    })
};

//prompt the user with the option menu
const promptOptions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'optionsMenu',
            message: 'Would you like to add more development team members?',
            choices: ["Add an Engineer", "Add an Intern", "Complete building my development team!"],
        }
    ]).then(data => {
        switch (data.optionsMenu) {
            case "Add an Engineer":
                addEngineer();
                break;
            case "Add an Intern":
                addIntern();
                break;
            default:
                buildDevTeam();
        }
    });
};

//get Engineer info
const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is Engineers name?',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter Engineers name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is Engineers id?',
            validate: engineerID => {
                if (engineerID) {
                    return true;
                } else {
                    console.log('Please enter Engineers ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Engineers email?',
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log('Please enter Engineers email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is Engineers github?',
            validate: engineerGithub => {
                if (engineerGithub) {
                    return true;
                } else {
                    console.log('Please enter Engineers github');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        const engineer = new Engineer(data.name, data.id, data.email, data.github)
        devTeam.push(engineer);
        promptOptions();
    })
}

//get Intern info
const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is Interns name?',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter Intern name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is Interns id?',
            validate: internID => {
                if (internID) {
                    return true;
                } else {
                    console.log('Please enter Interns ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is Interns email?',
            validate: internEmail => {
                if (internEmail) {
                    return true;
                } else {
                    console.log('Please enter Interns email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is Interbs school?',
            validate: internSchool => {
                if (internSchool) {
                    return true;
                } else {
                    console.log('Please enter Interns school');
                    return false;
                }
            }
        }
    ]).then(data => {
        console.log(data);
        const intern = new Intern(data.name, data.id, data.email, data.school);
        devTeam.push(intern);
        promptOptions();
    })
};

//build the development team
const buildDevTeam = () => {
    //check if the output directory exists, if not then create it
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, generateSite(devTeam), "utf-8");
};

addManager();