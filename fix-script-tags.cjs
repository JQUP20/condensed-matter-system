const fs = require('fs');
const path = require('path');

// 获取所有 Chapter 6 文件
const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');
const chapter6Files = fs.readdirSync(chaptersDir)
  .filter(file => file.startsWith('Chapter6_') && file.endsWith('.vue'));

console.log('Found Chapter 6 files:', chapter6Files);

chapter6Files.forEach(filename => {
  const filePath = path.join(chaptersDir, filename);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 记录原始内容以检查是否有变化
  const originalContent = content;
  
  // 修复被转义的 script 标签
  content = content.replace(/&lt;script&gt;/g, '<script>');
  content = content.replace(/&lt;\/script&gt;/g, '</script>');
  
  // 修复被转义的 template 标签（如果有的话）
  content = content.replace(/&lt;template&gt;/g, '<template>');
  content = content.replace(/&lt;\/template&gt;/g, '</template>');
  
  // 修复被转义的 style 标签（如果有的话）
  content = content.replace(/&lt;style([^>]*)&gt;/g, '<style$1>');
  content = content.replace(/&lt;\/style&gt;/g, '</style>');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed script/template/style tags in ${filename}`);
  } else {
    console.log(`- No script/template/style tag fixes needed in ${filename}`);
  }
});

console.log('Script tag fix completed!');