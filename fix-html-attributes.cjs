const fs = require('fs');
const path = require('path');
const glob = require('glob');

const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');

// Find all Vue files in chapters directory
const vueFiles = glob.sync(path.join(chaptersDir, '*.vue'));

vueFiles.forEach(filePath => {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // Fix pattern: </div><p> or </div> <p> where there should be proper separation
  const patterns = [
    // Fix formula containers that are concatenated with other elements
    {
      pattern: /(\$\$[^$]*\$\$)<\/div><([^>]+)>/g,
      replacement: '$1</div>\n              <$2>'
    },
    // Fix formula containers followed immediately by text
    {
      pattern: /(\$\$[^$]*\$\$)<\/div><p>/g,
      replacement: '$1</div>\n              <p>'
    },
    // Fix multiple formula containers on same line
    {
      pattern: /(<\/div>) (<div class="formula-container">)/g,
      replacement: '$1\n              $2'
    },
    // Fix h4 tags followed immediately by formula containers
    {
      pattern: /(<h4>[^<]*<\/h4>) (<div class="formula-container">)/g,
      replacement: '$1\n              $2'
    },
    // Fix p tags followed immediately by formula containers
    {
      pattern: /(<\/p>) (<div class="formula-container">)/g,
      replacement: '$1\n              $2'
    }
  ];

  patterns.forEach(({ pattern, replacement }) => {
    const newContent = content.replace(pattern, replacement);
    if (newContent !== content) {
      content = newContent;
      hasChanges = true;
    }
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed HTML attributes in ${fileName}`);
  }
});

console.log('HTML attribute fixes completed!');