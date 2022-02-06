const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, githubAddress){
        //call parent constructor
        super(name, id, email);

        this.githubAddress = githubAddress;
    ;}

    getGithubAddress() {return this.githubAddress};

    getRole() {return "Engineer"}
}

module.exports = Engineer;