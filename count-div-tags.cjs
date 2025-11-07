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

const openDivs = (templateBlock.match(/<div\b/g) || []).length;
const closeDivs = (templateBlock.match(/<\/div>/g) || []).length;

console.log('File:', targetPath);
console.log('Open <div>: ', openDivs);
console.log('Close </div>: ', closeDivs);
console.log('Difference (open - close): ', openDivs - closeDivs);