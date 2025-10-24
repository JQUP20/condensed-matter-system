const fs = require('fs');
const path = require('path');

// 需要处理的文件列表
const files = [
  'src/components/chapters/Chapter4_1_1.vue',
  'src/components/chapters/Chapter4_1_2.vue',
  'src/components/chapters/Chapter4_1_3.vue'
];

// 替换$$公式为KaTeX组件
function replaceFormulas(content) {
  // 匹配 $$...$$
  return content.replace(/\$\$([^$]+)\$\$/g, (match, formula) => {
    // 清理公式中的特殊字符
    const cleanFormula = formula.trim()
      .replace(/\\/g, '\\\\')  // 转义反斜杠
      .replace(/"/g, '\\"');   // 转义双引号
    
    return `<katex-element expression="${cleanFormula}" />`;
  });
}

// 处理每个文件
files.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`Processing ${filePath}...`);
    
    const content = fs.readFileSync(fullPath, 'utf8');
    const newContent = replaceFormulas(content);
    
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

console.log('Formula replacement completed!');