const fs = require('fs');
const path = require('path');

// List of Chapter 7 files that need fixing
const filesToFix = [
  'Chapter7_1.vue',
  'Chapter7_2.vue', 
  'Chapter7_2_1.vue',
  'Chapter7_2_2.vue',
  'Chapter7_2_3.vue',
  'Chapter7_2_4.vue',
  'Chapter7_3.vue'
];

const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');

filesToFix.forEach(fileName => {
  const filePath = path.join(chaptersDir, fileName);
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the missing semicolon issue
    content = content.replace(
      /(\s+)\/\/ 内容更新后重新渲染数学公式if \(this\.\$renderMath\) \{/g,
      '$1// 内容更新后重新渲染数学公式\n$1if (this.$renderMath) {'
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed syntax in ${fileName}`);
  } else {
    console.log(`File not found: ${fileName}`);
  }
});

console.log('Chapter 7 syntax fixes completed!');