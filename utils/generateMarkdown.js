// function to generate markdown for README
function generateMarkdown(data) {
  // Use regular expressions to chop off trailing white space and any line
  // breaks.  Also, in the case of github chop off an optional trailing forward
  // slash right after the GitHub account name.
  let github = data.github.replace(/\/?\s*\n?$/,'');
  let repo = data.repo.replace(/\s*\n?$/,'');
  let title = data.title.replace(/\s*\n?$/,'');
  let description = data.desc.replace(/\s*\n?$/,'');
  let installation = data.install.replace(/\s*\n?$/,'');
  let usage = data.usage.replace(/\s*\n?$/,'');
  let contributing = data.contrib.replace(/\s*\n?$/,'');
  let tests = data.tests.replace(/\s*\n?$/,'');
  let questions = data.questions.replace(/\s*\n?$/,'');
  // Use regular expression to extract account name at the end of a GitHub link
  // after skipping the link path information if present.  The capture group is
  // a character class matching any character except forward slash.  Before
  // that the non-captured group optionally greedily matches any characters
  // ending with a required forward slash, so that this path part is excluded.
  let gitHubAcct = github.replace(/(?:.*\/)?([^\/]+?)/,'$1');
  // If the GitHub link contains no forward slashes add the standard path info
  let gitHubLink = "";
  if (github.includes("/")) {
    gitHubLink = `${github}/${repo}`
  }
  else {
    gitHubLink = `https://github.com/${github}/${repo}`
  }
  return `# ${title}

${description}

## Table of Contents
- [Installation](${gitHubLink}#Installation) 
- [Usage](${gitHubLink}#Usage) 
- [License](${gitHubLink}#License) 
- [Badges](${gitHubLink}#Badges) 
- [Contributing](${gitHubLink}#Contributing) 
- [Tests](${gitHubLink}#Tests) 
- [Questions](${gitHubLink}#Questions) 

## Installation

${installation}

## Usage

${usage}

## License

This project is licensed under the ${data.license} License -
see the LICENSE.md file for details

## Badges

[![Known Vulnerabilities](https://snyk.io/test/github/${gitHubAcct}/${repo}/badge.svg)?targetFile=package.json](https://snyk.io/test/github/${gitHubAcct}/${repo})
[![GitHub issues](https://img.shields.io/github/issues/${gitHubAcct}/${repo})](https://img.shields.io/github/issues/${gitHubAcct}/${repo})
[![GitHub forks](https://img.shields.io/github/forks/${gitHubAcct}/${repo})](https://img.shields.io/github/forks/${gitHubAcct}/${repo})
[![GitHub license](https://img.shields.io/github/license/${gitHubAcct}/${repo})](https://img.shields.io/github/license/${gitHubAcct}/${repo})

## Contributing

${contributing}

## Tests

${tests}

## Questions

${questions}
`;
}

module.exports.generateMarkdown = generateMarkdown;
