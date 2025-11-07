const fs = require('fs');
const path = require('path');

const targetPath = process.argv[2] || path.join(__dirname, 'src', 'components', 'chapters', 'Chapter2_4_4.vue');
const content = fs.readFileSync(targetPath, 'utf8');
const tplStart = content.indexOf('<template>');
const tplEnd = content.indexOf('</template>', tplStart + 10);
if (tplStart === -1 || tplEnd === -1) {
  console.error('No <template> block found in', targetPath);
  process.exit(1);
}

const templateBlock = content.slice(tplStart + '<template>'.length, tplEnd);
const lines = templateBlock.split(/\r?\n/);

let depth = 0;
let found = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // count open <div on this line
  const opens = (line.match(/<div\b/g) || []).length;
  depth += opens;
  // process closings in order; if depth goes negative, mark this line
  const closings = (line.match(/<\/div>/g) || []).length;
  if (closings > 0) {
    for (let c = 0; c < closings; c++) {
      depth -= 1;
      if (depth < 0 && !found) {
        found = { line: i + 1, text: line.trim() };
        break;
      }
    }
  }
}

if (found) {
  console.log('First unmatched </div> likely at line:', found.line);
  console.log(found.text);
} else {
  console.log('No negative depth detected, but overall mismatch exists. Last lines may have extra </div>.');
}