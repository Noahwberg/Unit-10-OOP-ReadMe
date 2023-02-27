const path = require("path");
const fs = require("fs");

const addHtml = path.resolve(__dirname, "../addHtml");

const add = employees => {
  const htmlLogic = [];

  htmlLogic.push(...employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => addManager(manager))
  );
  htmlLogic.push(...employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => addEngineer(engineer))
  );
  htmlLogic.push(...employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => addIntern(intern))
  );

  return addMain(htmlLogic.join(""));
};

const addManager = manager => {
  let format = fs.readFileSync(path.resolve(addHtml, "manager.html"), "utf8");
  format = changeValue(format, "name", manager.getName());
  format = changeValue(format, "role", manager.getRole());
  format = changeValue(format, "id", manager.getId());
  format = changeValue(format, "email", manager.getEmail());
  format = changeValue(format, "officeNumber", manager.getOfficeNumber());
  return format;
};

const addEngineer = engineer => {
  let format = fs.readFileSync(path.resolve(addHtml, "engineer.html"), "utf8");
  format = changeValue(format, "name", engineer.getName());
  format = changeValue(format, "role", engineer.getRole());
  format = changeValue(format, "id", engineer.getId());
  format = changeValue(format, "email", engineer.getEmail());
  format = changeValue(format, "github", engineer.getGithub());
  return format;
};

const addIntern = intern => {
  let format = fs.readFileSync(path.resolve(addHtml, "intern.html"), "utf8");
  format = changeValue(format, "name", intern.getName());
  format = changeValue(format, "role", intern.getRole());
  format = changeValue(format, "id", intern.getId());
  format = changeValue(format, "email", intern.getEmail());
  format = changeValue(format, "school", intern.getSchool());
  return format;
};

const addMain = html => {
  const format = fs.readFileSync(path.resolve(addHtml, "teamPg.html"), "utf8");
  return changeValue(format, "team", html);
};

const changeValue = (format, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return format.replace(pattern, value);
};

module.exports = add;