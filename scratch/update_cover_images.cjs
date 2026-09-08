const fs = require('fs');
const path = require('path');

const projectsFile = path.join(__dirname, '../src/data/projects.ts');
let code = fs.readFileSync(projectsFile, 'utf8');

const coverDir = path.join(__dirname, '../public/assets/Cover Image');
const coverFiles = fs.readdirSync(coverDir).filter(f => !f.startsWith('.'));

console.log('Cover Files Available:', coverFiles);

const projectIds = [
  "proj-bombayphilia",
  "proj-bombayphilia-shoot",
  "proj-illustration-sketches",
  "proj-packaging-design",
  "proj-text-me",
  "proj-thinking-cap",
  "proj-live-and-breathe"
];

projectIds.forEach((id, idx) => {
  const coverPath = coverFiles[idx % coverFiles.length];
  const newHeroPath = `/assets/Cover Image/${coverPath}`;
  console.log(`Setting ${id} -> ${newHeroPath}`);
  
  // Find id: "proj-..." block and update heroImage
  const regex = new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?heroImage:\\s*["'])([^"']+)(["'])`);
  code = code.replace(regex, `$1${newHeroPath}$3`);
});

fs.writeFileSync(projectsFile, code);
console.log('Successfully updated all 7 project heroImages with Cover Images!');
