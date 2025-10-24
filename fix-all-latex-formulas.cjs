const fs = require('fs');
const path = require('path');

// 修复所有Vue文件中的LaTeX公式换行问题
function fixAllLatexFormulas() {
  const chaptersDir = path.join(__dirname, 'src', 'components', 'chapters');
  
  try {
    const files = fs.readdirSync(chaptersDir);
    const vueFiles = files.filter(file => file.endsWith('.vue'));
    
    vueFiles.forEach(file => {
      const filePath = path.join(chaptersDir, file);
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // 修复跨行的LaTeX公式
      const originalContent = content;
      
      // 修复单行内联公式中的换行
      content = content.replace(/\$([^$]*)\n([^$]*)\$/g, (match, p1, p2) => {
        modified = true;
        return `$${p1.trim()}${p2.trim()}$`;
      });
      
      // 修复多行公式中的不必要换行
      content = content.replace(/\$\$([^$]*)\n([^$]*)\$\$/g, (match, p1, p2) => {
        // 只有当换行不是故意的数学换行时才修复
        if (!p1.includes('\\\\') && !p2.includes('\\\\')) {
          modified = true;
          return `$$${p1.trim()} ${p2.trim()}$$`;
        }
        return match;
      });
      
      // 修复特定的问题模式
      content = content.replace(/r_\{ij\n\}/g, 'r_{ij}');
      content = content.replace(/J_\{i\nj\}/g, 'J_{ij}');
      
      if (modified || content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed LaTeX formulas in ${file}`);
      }
    });
    
    console.log('Finished fixing all LaTeX formulas');
  } catch (error) {
    console.error('Error fixing LaTeX formulas:', error);
  }
}

fixAllLatexFormulas();