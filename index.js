// Third party modules
//const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Local modules
const genMD = require("./utils/generateMarkdown.js");
const getUI = require("./utils/getUserInput.js");

const appendFileAsync = util.promisify(fs.appendFile);
const writeFileAsync = util.promisify(fs.writeFile);

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
  await appendFileAsync(outName, genMD.generateMarkdown(inputs));
  await writeFileAsync("license.txt", inputs.license);
}

// function call to initialize program
init();
