const fs = require('fs');
const path = require('path');

// 获取所有 Chapter 6 文件
const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');
const chapter6Files = [
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

console.log('Fixing script tags in Chapter 6 files...');

chapter6Files.forEach(filename => {
  const filePath = path.join(chaptersDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`- File not found: ${filename}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 记录原始内容以检查是否有变化
  const originalContent = content;
  
  // 修复被转义的 script 标签
  content = content.replace(/&lt;script&gt;/g, '<script>');
  content = content.replace(/&lt;\/script&gt;/g, '</script>');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed script tags in ${filename}`);
  } else {
    console.log(`- No script tag fixes needed in ${filename}`);
  }
});

console.log('All script tag fixes completed!');