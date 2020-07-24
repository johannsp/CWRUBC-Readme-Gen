// Third party modules
//const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Local modules
const genMD = require("./utils/generateMarkdown.js");
const getUI = require("./utils/getUserInput.js");

const appendFileAsync = util.promisify(fs.appendFile);

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
async function init() {
  console.log("Generating README.md...");
  console.log("Just leave blank responses for unneeded sections.");
  const inputs = await getUI.getUserInput();
  console.log('∞° inputs.title="'+inputs.title,'"');
  console.log('∞° inputs.desc="'+inputs.desc,'"');
  console.log('∞° inputs.install="'+inputs.install,'"');
  console.log('∞° inputs.usage="'+inputs.usage,'"');
  console.log('∞° inputs.contrib="'+inputs.contrib,'"');
  console.log('∞° inputs.test="'+inputs.test,'"');
  console.log('∞° inputs.license="'+inputs.license,'"');
}

// function call to initialize program
init();
