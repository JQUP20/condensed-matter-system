const fs = require('fs');
const path = require('path');
const glob = require('glob');

const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');

// Find all Vue files in chapters directory
const vueFiles = glob.sync(path.join(chaptersDir, '*.vue'));

function escapeAnglesInMath(text) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

vueFiles.forEach(filePath => {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;

  // Escape < and > inside $$...$$ blocks (multiline allowed)
  content = content.replace(/\$\$([\s\S]*?)\$\$/g, (match, inner) => {
    const escaped = escapeAnglesInMath(inner);
    if (escaped !== inner) hasChanges = true;
    return `$$${escaped}$$`;
  });

  // Escape < and > inside single $...$ blocks (inline)
  content = content.replace(/\$(?!\$)([^$]*?)\$(?!\$)/g, (match, inner) => {
    const escaped = escapeAnglesInMath(inner);
    if (escaped !== inner) hasChanges = true;
    return `$${escaped}$`;
  });

  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Escaped angle brackets in math for ${fileName}`);
  }
});

console.log('Math angle bracket escaping completed!');