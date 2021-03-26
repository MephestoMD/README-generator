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
  if (data.table) {
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
  5. [Contributing](#Contributing)
  6. [Tests](#Tests)
  7. [Questions](#Questions)
  
  ## <a name = "Installation">Installation</a>

  ${data.steps}
  
  ## <a name = "Usage">Usage</a>

  ${data.usage}

  ## <a name = "Contributing">Contributing</a>

  ${data.contributing}

  ## <a name = "Tests">Tests</a>

  ${data.tests}

  ## <a name = "Questions">Questions</a>






  `
  }
  else {
    return `# <a name = "Title"${data.title}</a>
    <a href = "<ScreenCast Link here>"> Screencastify Video Demonstration </a>
    
    ## Description
    
    ### Motivation
  
    ${data.motivation}
    
    ### Build Steps
  
    ${data.build}
    
    ### Problems
  
    ${data.problems}
    
    ### What I learned
  
    ${data.learn}
    
    ## Installation
  
    ${data.steps}
    
    ## Usage
  
    ${data.usage}
  
    ## Contributing
  
    ${data.contributing}
  
    ## Tests
  
    ${data.tests}
  
    ## Questions
  }

}
module.exports = generateMarkdown;
