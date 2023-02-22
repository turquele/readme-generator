// function to generate markdown for README
function generateMarkdown(response) {
  let readmeContent = ""
    if (response.title) {
      readmeContent += `# ${response.title}
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

`
  };
    if (response.description) {
      readmeContent += `## Description
${response.description}

`
    };
    // Table of content
    readmeContent += `## Table of content
`
    if (response.installation) {
      readmeContent += `- Installation
`
    };
    if (response.usage) {
      readmeContent += `- Usage
`
    };
    if (response.caontribution) {
      readmeContent += `- How to Contribute
`
    };
    if (response.test) {
      readmeContent += `- Tests
`
    };
    if (response.license) {
      readmeContent += `- License
`
    };

    if (response.installation) {
      readmeContent += `## Installation
${response.installation}

`
    };

    if (response.contribution) {
      readmeContent += `## How to Contribute
${response.contribution}

`
    };
    if (response.test) {
      readmeContent += `## Tests
${response.test}

`
    };
    if (response.license) {
      readmeContent += `## License
${response.license}

`
    };
    if (response.email) {
      readmeContent += `## Questions
e-mail: [${response.email}](mailto:${response.email})
`
      if (response.github) {
        readmeContent += `GitHub: [${response.github}](https://github.com/${response.github})
`
      };
    } else if (response.github) {
      readmeContent += `## Questions
GitHub: [${response.github}](https://github.com/${response.github})
`
    }
  return readmeContent
}

module.exports = generateMarkdown;
