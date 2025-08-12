const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
if (!html.includes('<h1>Hej Vercel!</h1>')) {
  console.error('Expected greeting not found in index.html');
  process.exit(1);
}
console.log('Test passed: index.html contains greeting.');
