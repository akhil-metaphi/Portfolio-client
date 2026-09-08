const fs = require('fs');
const path = require('path');

const projectsFile = path.join(__dirname, '../src/data/projects.ts');
let code = fs.readFileSync(projectsFile, 'utf8');

function findActualFile(projFolder, filename) {
  const dirPath = path.join(__dirname, '../public/assets/projects', projFolder);
  if (!fs.existsSync(dirPath)) {
    console.log('Directory not found:', dirPath);
    return null;
  }
  const files = fs.readdirSync(dirPath);
  
  // 1. Exact match
  if (files.includes(filename)) {
    return `/assets/projects/${projFolder}/${filename}`;
  }
  
  // 2. Strip -resized
  const cleanName = filename.replace('-resized', '');
  if (files.includes(cleanName)) {
    return `/assets/projects/${projFolder}/${cleanName}`;
  }
  
  // 3. Match prefix before ~mv2
  const prefix = cleanName.split('~mv2')[0];
  const match = files.find(f => f.startsWith(prefix));
  if (match) {
    return `/assets/projects/${projFolder}/${match}`;
  }
  
  return null;
}

let count = 0;
code = code.replace(/\/assets\/projects\/([^"']+)/g, (match, p1) => {
  const parts = p1.split('/');
  const projFolder = parts[0];
  const fileName = parts[1];
  const actual = findActualFile(projFolder, fileName);
  if (actual) {
    count++;
    return actual;
  } else {
    console.log('NOT FOUND:', match);
    return match;
  }
});

fs.writeFileSync(projectsFile, code);
console.log(`Successfully mapped and updated ${count} image paths in projects.ts!`);
