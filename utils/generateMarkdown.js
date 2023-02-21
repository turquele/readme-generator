// function to generate markdown for README
function generateMarkdown(response) {
  let readmeContent = ""
    if (response.title) {
      readmeContent += `# ${response.title}
      [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
      `
    };
    if (response.description) {
      readmeContent += `# ${response.description}
      `
    };




    



    
  
  return readmeContent
}

module.exports = generateMarkdown;
