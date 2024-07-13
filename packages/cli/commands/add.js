const fs = require('fs');
const path = require('path');

function addComponent(component) {
  const componentDir = path.join(process.cwd(), 'components');

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  const componentContent = `// ${component} component`;
  fs.writeFileSync(path.join(componentDir, `${component}.js`), componentContent);

  console.log(`Component ${component} added successfully.`);
}

module.exports = addComponent;
