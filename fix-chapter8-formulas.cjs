const fs = require('fs');
const path = require('path');

// 修复Chapter8_3_6.vue中的LaTeX公式换行问题
function fixChapter8Formulas() {
  const filePath = path.join(__dirname, 'src', 'components', 'chapters', 'Chapter8_3_6.vue');
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 修复换行的LaTeX公式
    content = content.replace(/r_\{ij\n\}/g, 'r_{ij}');
    content = content.replace(/J_\{i\nj\}/g, 'J_{ij}');
    
    // 确保所有LaTeX公式在同一行
    content = content.replace(/\$([^$]*)\n([^$]*)\$/g, '$$$1$2$$');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed Chapter8_3_6.vue LaTeX formulas');
  } catch (error) {
    console.error('Error fixing Chapter8_3_6.vue:', error);
  }
}

fixChapter8Formulas();