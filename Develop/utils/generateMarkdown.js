// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# <a name = "Title"${data.title}</a>
  <a href = "<ScreenCast Link here>"> Screencastify Video Demonstration </a>
  
  ## <a name = "Description">Description</a>
  
  ### <a name = "subMotivation">Motivation</a>

  ${data.motivation}
  
  ### <a name = "subBuild">Build Steps</a>

  ${data.build}
  
  ### <a name = subProblems>Problems</a>

  ${data.problems}
  
  ### <a name = "subLearned">What I learned</a>

  ${data.learn}
  
  ## Table of Contents
  
  1. [Title](#Title)
  2. [Description](#Description)
      * [Motivation](#subMotivation)
      * [Build Steps](#subBuild)
      * [Problems](#subProblems)
      * [What I learned](#subLearned)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [Credits](#Credits)
  6. [License](#License)
  7. [Contributing](#Contributing)
  8. [Tests](#Tests)
  9. [Questions](#Questions)
  
  ## <a name = "Installation">Installation</a>

  ${data.steps}
  
  ## <a name = "Usage">Usage</a>

  ${data.usage}

  ## <a name = "Contributing">Contributing</a>

  ## <a name = "Credits">Credits</a>

  ## <a name = "License">License</a>

  ${data.contributing}

  ## <a name = "Tests">Tests</a>

  ${data.tests}

  ## <a name = "Questions">Questions</a>

  For questions or comments, please go to:
  <a href = "https://github.com/${data.github}">${data.github}'s GitHub Profile</a>
  OR
  Contact ${data.name} at:
  [${data.email}](mailto:${data.email})`
  }
  
module.exports = generateMarkdown;
