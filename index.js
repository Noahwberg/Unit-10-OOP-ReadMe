const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/makeHtml");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const output = path.resolve(__dirname, "output");
const htmlOutput = path.join(output, "teamPg.html");

let employeeMembers = [];

const employee = [
    {
        type: "list" , message: "Would you like to add a new employee or generate current team information?" , name: "Add" , choices: ["Add Employee", "Generate current team"]
    }
];

const role = [
    {
        type: "list" , message: "What will be the role of the employee?" , name: "role" , choices: ["Manager", "Engineer", "Intern"]
    }
];

const manager = [
    {
        type: "input" , message: "What is your general managers name?" , name: "name"
    }
    , {
        type: "input" , message: "What the GM's ID number?" , name: "id"
    }
    , {
        type: "input" , message: "What is the GM's email address?" , name: "email"
    }
    , {
        type: "input" , message:"What is the GM's office number?" , name: "officeNumber"
    }
];

const engineer = [
    {
        type: "input" , message: "What is your Engineer's name?" , name: "name"
    }
    , {
        type:"input" , message: "What is the Engineer's ID number?" , name: "id"
    }
    , {
        type: "input" , message: "What is the Engineer's email address?" , name: "email"
    }
    , {
        type: "input" , message: "What is the Engineer's GitHub username?" , name: "username"
    }
];

const intern = [
    {
        type: "input" , message: "What is your Intern's name?" , name: "name"
    }
    , {
        type: "input" , message: "What is the intern's ID number?" , name: "id"
    }
    , {
        type: "input" , message: "What is the intern's email address?" , name: "email"
    }
    , {
        type: "input" , message: "What school are they currently attending?" , name: "school"
    }
];

function init() {
    inquirer.prompt(employee).then((choices) => {
        if(choices.Add === "Add Employee") {
          addEmployee();
        } else {
            makeHtml();
        }
    })
};



function addEmployee() {
    inquirer.prompt(role).then((choices) => {
        if (choices.role === "Manager") {
            inquirer.prompt(manager).then((answers) => {
                let managerInfo = new Manager(
                    answers.name
                    , answers.id
                    , answers.email
                    , answers.officeNumber
                );
                employeeMembers.push(managerInfo);
                console.log(managerInfo);
                init();
            });
        } else if (choices.role === "Engineer") {
            inquirer.prompt(engineer).then((answers) => {
                let engineerInfo = new Engineer(
                    answers.name
                    , answers.id
                    , answers.email
                    , answers.username
                );
                employeeMembers.push(engineerInfo);
                console.log(engineerInfo);
                init();
            });
        } else if (choices.role === "Intern") {
            inquirer.prompt(intern).then((answers) => {
                let internInfo = new Intern(
                    answers.name
                    , answers.id
                    , answers.email
                    , answers.school
                );
                employeeMembers.push(internInfo);
                console.log(internInfo);
                init();
            });
        } else {
            makeHtml();
        }
    });
}
      
init();

function makeHtml () {
    if(!fs.existsSync(output)) {
        fs.mkdirSync(output);
    }
    console.log(employeeMembers);
    fs.writeFileSync(htmlOutput, render(employeeMembers),  "utf-8");
}