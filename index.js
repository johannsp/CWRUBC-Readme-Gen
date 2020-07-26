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
  let outName = process.argv[2];
  if (outName === undefined) {
    outName = "README.md";
  }
  console.log("Generating README.md...");
  console.log("Just leave blank responses for unneeded sections.");
  const inputs = await getUI.getUserInput();
  console.log("inputs.github\n"+inputs.github);
  console.log("inputs.repo\n"+inputs.repo);
  console.log("inputs.title\n"+inputs.title);
  console.log("inputs.desc\n"+inputs.desc);
  console.log("inputs.install\n"+inputs.install);
  console.log("inputs.usage\n"+inputs.usage);
  console.log("inputs.questions\n"+inputs.questions);
  console.log("inputs.contrib\n"+inputs.contrib);
  console.log("inputs.tests\n"+inputs.tests);
  console.log("inputs.license\n"+inputs.license);
  await appendFileAsync(outName, genMD.generateMarkdown(inputs));
}

// function call to initialize program
init();
