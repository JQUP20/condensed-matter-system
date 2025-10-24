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
  
  // 修复被转义的 script 标签 - 使用实际看到的模式
  content = content.replace(/&lt;script&gt;/g, '<script>');
  content = content.replace(/&lt;\/script&gt;/g, '</script>');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed escaped script tags in ${filename}`);
  } else {
    console.log(`- No escaped script tag fixes needed in ${filename}`);
  }
});

console.log('Escaped script tag fix completed!');