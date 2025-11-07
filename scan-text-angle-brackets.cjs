const fs = require('fs');
const path = require('path');

/**
 * Scan a Vue SFC file's <template> for suspicious '<' characters that are likely
 * plain-text angle brackets (not the start of an HTML tag).
 * Heuristic: flag any '<' where the next character is NOT one of: [A-Z,a-z,'/', '!'].
 * This catches cases like "x < y", "ω < ω_p", etc., which should be escaped to &lt;.
 */

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

function isAsciiLetter(ch) {
  if (!ch) return false;
  const code = ch.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

const suspicious = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  for (let j = 0; j < line.length; j++) {
    if (line[j] === '<') {
      const next = line[j + 1];
      // Treat ASCII letters and common tag starts ('/', '!') as tags; otherwise flag
      const looksLikeTag = isAsciiLetter(next) || next === '/' || next === '!';
      if (!looksLikeTag) {
        suspicious.push({ line: i + 1, col: j + 1, text: line.trim() });
        break; // report one per line for brevity
      }
    }
  }
}

if (suspicious.length === 0) {
  console.log('No suspicious plain-text < found in template:', targetPath);
} else {
  console.log('Suspicious < occurrences in template (line:col):');
  suspicious.forEach(item => {
    console.log(`${item.line}:${item.col}  ${item.text}`);
  });
}