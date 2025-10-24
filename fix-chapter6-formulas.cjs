const fs = require('fs');
const path = require('path');

// Chapter 6 文件列表
const files = [
  'src/components/chapters/Chapter6_1_1.vue',
  'src/components/chapters/Chapter6_1_2.vue',
  'src/components/chapters/Chapter6_1_3.vue',
  'src/components/chapters/Chapter6_2_1.vue',
  'src/components/chapters/Chapter6_2_2.vue',
  'src/components/chapters/Chapter6_3_1.vue',
  'src/components/chapters/Chapter6_3_2.vue',
  'src/components/chapters/Chapter6_4_1.vue',
  'src/components/chapters/Chapter6_4_2.vue',
  'src/components/chapters/Chapter6_5_1.vue',
  'src/components/chapters/Chapter6_5_2.vue'
];

// 修复公式中的HTML特殊字符
function fixFormulas(content) {
  // 修复$$公式中的<符号
  content = content.replace(/\$\$([^$]*)<([^$]*)\$\$/g, (match, before, after) => {
    return `$$${before}&lt;${after}$$`;
  });
  
  // 修复$公式中的<符号
  content = content.replace(/\$([^$]*)<([^$]*)\$/g, (match, before, after) => {
    return `$${before}&lt;${after}$`;
  });
  
  return content;
}

// 处理每个文件
files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`Processing ${filePath}...`);
    
    const content = fs.readFileSync(fullPath, 'utf8');
    const newContent = fixFormulas(content);
    
    if (content !== newContent) {
      fs.writeFileSync(fullPath, newContent, 'utf8');
      console.log(`✓ Updated ${filePath}`);
    } else {
      console.log(`- No changes needed for ${filePath}`);
    }
  } else {
    console.log(`✗ File not found: ${filePath}`);
  }
});

console.log('Chapter 6 formula fix completed!');