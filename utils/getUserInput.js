const inquirer = require("inquirer");

function getUserInput() {
  // Strip off all but the last directory in the full path and use that as a
  // portion of the default for some prompts.
  let cwd=`${process.cwd()}`.replace(/.*[\/\\]/g,"");
  return inquirer.prompt([
    {
      type: "editor", name: "github",
      message: "Github account link (excluding repository name):",
      default: `https://github.com/${process.env.USERNAME}`
    },
    {
      type: "editor", name: "repo",
      message: "Repository:",
      default: `${cwd}`
    },
    {
      type: "editor", name: "title",
      message: "Title:",
      default: `${cwd}`
    },
    {
      type: "editor", name: "desc",
      message: "Desc:",
      default: `${cwd}: `
    },
    {
      type: "editor", name: "install",
      message: "How to install:",
      default: "Clone this repository and initialize any required Node modules by running\n  npm init"
    },
    {
      type: "editor", name: "usage",
      message: "Usage:",
      default: "Usage: "
    },
    {
      type: "editor", name: "questions",
      message: "Questions:",
      default: "Q:\n\nA:"
    },
    {
      type: "editor", name: "contrib",
      message: "How to contribute:",
      default: "After cloning this repository, push to a custom branch and create a pull request."
    },
    {
      type: "editor", name: "tests",
      message: "How to test:",
      default: "Run automated Jest tests with command:\n  node run test"
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
