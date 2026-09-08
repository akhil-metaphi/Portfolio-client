const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'data', 'projects.ts');
let ts = fs.readFileSync(filePath, 'utf-8');

// Match any "/assets/projects/..." string
const regex = /"(\/assets\/projects\/[^"\n]+)"/g;
let m;
let total = 0;
let missing = 0;
let updatedCount = 0;
let updatedTs = ts;

const matches = [];
while ((m = regex.exec(ts)) !== null) {
  matches.push(m[1]);
}

matches.forEach(origPath => {
  total++;
  const diskPath = path.join(__dirname, '..', 'public', origPath.replace(/\//g, path.sep));
  
  if (fs.existsSync(diskPath)) {
    // Already exists exactly
    return;
  }
  
  // Try finding matching resized file
  const ext = path.extname(diskPath);
  const withoutExt = diskPath.slice(0, -ext.length);
  const resizedWebp = withoutExt + '-resized.webp';
  const resizedPng = withoutExt + '-resized.png';
  const resizedJpg = withoutExt + '-resized.jpg';
  
  if (fs.existsSync(resizedWebp)) {
    const newWebPath = origPath.slice(0, -ext.length) + '-resized.webp';
    updatedTs = updatedTs.split(origPath).join(newWebPath);
    updatedCount++;
  } else if (fs.existsSync(resizedPng)) {
    const newWebPath = origPath.slice(0, -ext.length) + '-resized.png';
    updatedTs = updatedTs.split(origPath).join(newWebPath);
    updatedCount++;
  } else if (fs.existsSync(resizedJpg)) {
    const newWebPath = origPath.slice(0, -ext.length) + '-resized.jpg';
    updatedTs = updatedTs.split(origPath).join(newWebPath);
    updatedCount++;
  } else {
    console.log('NOT FOUND ON DISK:', origPath);
    missing++;
  }
});

console.log(`Total checked: ${total}, Updated: ${updatedCount}, Missing: ${missing}`);
fs.writeFileSync(filePath, updatedTs, 'utf-8');
console.log('Successfully updated src/data/projects.ts!');
