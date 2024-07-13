const fs = require('fs');
const path = require('path');

function initProject() {
  const projectDir = path.join(process.cwd(), 'ruru-project');
  
  if (!fs.existsSync(projectDir)){
    fs.mkdirSync(projectDir);
  }

  fs.writeFileSync(path.join(projectDir, 'index.js'), '// Project initialized');
  
  console.log('Project initialized successfully.');
}

module.exports = initProject;
