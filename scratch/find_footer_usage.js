const fs = require('fs');
const https = require('https');

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const js = await get('https://psycolops.in/static/js/main.67b73f91.js');
  // Find where ur (the footer component) is used
  const matches = [...js.matchAll(/(\w+)\s*=\s*\(\)\s*=>[\s\S]*?(ur|footer)/g)];
  // Let's search for '<footer' or 'ur' references
  let idx = 0;
  while ((idx = js.indexOf('ur', idx + 1)) !== -1) {
    const snippet = js.substring(Math.max(0, idx - 150), Math.min(js.length, idx + 150));
    if (snippet.includes('jsx') || snippet.includes('children')) {
      console.log('--- Usage near index', idx, '---');
      console.log(snippet);
    }
  }
}

run().catch(console.error);
