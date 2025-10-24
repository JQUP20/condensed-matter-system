const fs = require('fs');
const path = require('path');

// List of Chapter 6 files to process
const chapterFiles = [
  'Chapter6_1_1.vue',
  'Chapter6_1_2.vue', 
  'Chapter6_1_3.vue',
  'Chapter6_2_1.vue',
  'Chapter6_2_2.vue',
  'Chapter6_3_1.vue',
  'Chapter6_3_2.vue',
  'Chapter6_4_1.vue',
  'Chapter6_4_2.vue',
  'Chapter6_5_1.vue',
  'Chapter6_5_2.vue'
];

const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');

function fixHtmlTags(content) {
  // Fix escaped HTML tags (while leaving LaTeX and inline math intact)
  let fixed = content;

  // Supported tags to unescape
  const tags = [
    'p','div','h1','h2','h3','h4','h5','h6','span',
    'ul','ol','li',
    'table','thead','tbody','tr','td','th',
    'strong','em','code','pre','sup','sub'
  ];

  const openTag = new RegExp(`&lt;(${tags.join('|')})(\\s[^>]*)?>`, 'g');
  const closeTag = new RegExp(`&lt;\\/(${tags.join('|')})>`, 'g');

  fixed = fixed.replace(openTag, '<$1$2>');
  fixed = fixed.replace(closeTag, '</$1>');

  return fixed;
}

// Process each chapter file
chapterFiles.forEach(filename => {
  const filePath = path.join(chaptersDir, filename);
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixHtmlTags(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed HTML tags in ${filename}`);
    } else {
      console.log(`No HTML tag fixes needed in ${filename}`);
    }
  } else {
    console.log(`File not found: ${filename}`);
  }
});

console.log('HTML tag fix completed!');