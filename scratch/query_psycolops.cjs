const fs = require('fs');
const css = fs.readFileSync('C:/Users/sagar/.gemini/antigravity-ide/brain/d13d7b0c-baf3-40f1-a3bb-c0bdfcfe2977/scratch/psycolops_main.css', 'utf-8');

const classes = [
  'display-flex', 'width-custom', 'title-link', 'color-grey', 'heading-project',
  'orange-button-1', 'orange-button-with-poppin', 'botton', 'rounded', 'img-fluid',
  'custom-container', 'project-showcase', 'Introsection', 'hero-heading', 'hero-buttons',
  'font-74', 'footer-link', 'footet-social', 'subtitle'
];

classes.forEach(cls => {
  let idx = 0;
  while ((idx = css.indexOf('.' + cls, idx)) !== -1) {
    const end = css.indexOf('}', idx);
    if (end !== -1) {
      console.log(css.substring(idx, end + 1));
    }
    idx = end + 1;
  }
});
