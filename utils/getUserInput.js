const inquirer = require("inquirer");

function getUserInput() {
  return inquirer.prompt([
    {
      type: "input", name: "title",
      message: "Title:"
    },
    {
      type: "editor", name: "desc",
      message: "Desc:",
    },
    {
      type: "editor", name: "install",
      message: "How to install:"
    },
    {
      type: "editor", name: "usage",
      message: "Usage:"
    },
    {
      type: "input", name: "contrib",
      message: "How to contribute:"
    },
    {
      type: "editor", name: "test",
      message: "How to test:"
    },
    {
      type: "list", name: "license",
      message: "License:",
      choices: [
        "ISC",
        "MIT",
        "BSD 2-Clause",
        "BSD 2-Clause",
        "GNU GPLv3"
      ],
      default: 0
    }
  ]);
}

module.exports.getUserInput = getUserInput;
