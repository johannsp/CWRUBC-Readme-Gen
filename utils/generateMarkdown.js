// function to generate markdown for README
function generateMarkdown(data) {
  let gitHubLink = data.github +
    ((data.github.endsWith("/")) ? "" : "/") +
    data.repo;
  return `# ${data.title}

${data.desc}

## Table of Contents
- [Installation](${gitHubLink}#Installation) 
- [Usage](${gitHubLink}#Usage) 
- [License](${gitHubLink}#License) 
- [Contributing](${gitHubLink}#) 
- [Contributing](${gitHubLink}#Contributing) 
- [Tests](${gitHubLink}#Tests) 
- [Contributing](${gitHubLink}#Contributing) 

## Installation

${data.install}

## Usage

${data.usage}

## License

This project is licensed under the ${data.license} License -
see the LICENSE.md file for details

## Badges

![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

## Contributing

${data.contrib}

## Tests

${data.tests}

## Questions

${data.questions}
`;
}

module.exports.generateMarkdown = generateMarkdown;
