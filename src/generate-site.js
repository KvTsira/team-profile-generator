const Engineer = require("../lib/engineer");

const generateTeam = (team) => {
    console.log(team);
    //initialise an empty array
    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHTML= `
        <div class="card">
            <div class="card-header">
                <h3>${manager.name} </h3>
                <h4>Manager</h4>
            </div>
        
            <div class="card-body">
                <ul>
                    <li>ID: ${manager.id}</li>
                    <li>Email: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                    <li>Office Number: ${manager.officeNumber}</li>clear
                </ul>
            </div>
        </div>
        `;
        html.push(managerHTML);
    }

    const generateEngineer = engineer => {
        console.log(engineer);
        let engineerHTML= `
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name} </h3>
                <h4>Engineer</h4>
            </div>
        
            <div class="card-body">
                <ul>
                    <li>ID: ${engineer.id}</li>
                    <li>Email: <span id="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    <li>GitHub Address: <a href="https://github.com/${engineer.githubAddress}" target="_blank">https://github.com/${engineer.githubAddress}</a></li>
                </ul>
            </div>
        </div>
        `;
        html.push(engineerHTML);
    }

    const generateIntern = intern => {
        console.log(intern);
        let internHTML= `
        <div class="card">
            <div class="card-header">
                <h3>${intern.name} </h3>
                <h4>Intern</h4>
            </div>
        
            <div class="card-body">
                <ul>
                    <li>ID: ${intern.id}</li>
                    <li>Email: <span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                    <li>School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
        html.push(internHTML);
    }

    //for loop through the employees
    for (let i=0; i< team.length; i++) {
        if (team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if (team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern"){
            generateIntern(team[i]);
        }
    }

    //join the vlocks
    return html.join('');

}

//export the function to create a page
module.exports = team => {
    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <meta name="description" content="Learn more about the dev team">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous" />
        <link rel="stylesheet" href="../dist/css/style.css"/>
    </head>
    <body>
        <div class="header">
            <h1>Development Team</h1>
        </div>

        <div class="container"> ${generateTeam(team)} </div>

    </body>
 </html>
    `;
}