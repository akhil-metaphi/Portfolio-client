const fs = require('fs');
const path = 'C:/Users/sagar/.gemini/antigravity-ide/brain/d13d7b0c-baf3-40f1-a3bb-c0bdfcfe2977/scratch/psycolops_main.css';
const css = fs.readFileSync(path, 'utf-8');

const classes = [
  'display-flex', 'width-custom', 'title-link', 'color-grey', 'heading-project',
  'orange-button-1', 'orange-button-with-poppin', 'botton', 'rounded', 'img-fluid',
  'custom-container', 'project-showcase', 'Introsection', 'hero-heading', 'hero-buttons',
  'font-74', 'footer-link', 'footet-social', 'subtitle'
];

classes.forEach(cls => {
  const reg = new RegExp('(\\.' + cls + '[^{]*\\{[^}]+\\})', 'g');
  let m;
  while ((m = reg.exec(css)) !== null) {
    console.log(m[1]);
  }
});
