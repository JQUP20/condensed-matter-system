<template>
  <div class="chapter-content">
    <h1 class="chapter-title">1.8.4 高斯单位制与国际单位制</h1>
    
    <!-- 引言 -->
    <section class="introduction">
      <h2>引言</h2>
      <p>在物理学中，特别是电磁学和凝聚态物理学中，存在多种单位制系统。最常用的是国际单位制（SI）和高斯单位制（CGS）。理解这两种单位制的差异对于阅读不同时期的文献和进行准确的计算至关重要。</p>
      
      <div class="unit-systems-overview">
        <div class="system-card">
          <div class="system-header">
            <span class="system-icon">🌍</span>
            <h3>国际单位制 (SI)</h3>
          </div>
          <div class="system-content">
            <p><strong>特点：</strong>现代标准，广泛使用</p>
            <p><strong>基本单位：</strong>米、千克、秒、安培等</p>
            <p><strong>优势：</strong>统一标准，便于国际交流</p>
          </div>
        </div>
        
        <div class="system-card">
          <div class="system-header">
            <span class="system-icon">📚</span>
            <h3>高斯单位制 (CGS)</h3>
          </div>
          <div class="system-content">
            <p><strong>特点：</strong>历史悠久，理论物理常用</p>
            <p><strong>基本单位：</strong>厘米、克、秒</p>
            <p><strong>优势：</strong>某些公式形式更简洁</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 基本单位对比 -->
    <section class="basic-units">
      <h2>基本单位对比</h2>
      
      <div class="units-comparison">
        <div class="comparison-table">
          <h3>力学量</h3>
          <table>
            <thead>
              <tr>
                <th>物理量</th>
                <th>SI单位</th>
                <th>CGS单位</th>
                <th>换算关系</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>长度</td>
                <td>米 (m)</td>
                <td>厘米 (cm)</td>
                <td>1 m = 100 cm</td>
              </tr>
              <tr>
                <td>质量</td>
                <td>千克 (kg)</td>
                <td>克 (g)</td>
                <td>1 kg = 1000 g</td>
              </tr>
              <tr>
                <td>时间</td>
                <td>秒 (s)</td>
                <td>秒 (s)</td>
                <td>相同</td>
              </tr>
              <tr>
                <td>力</td>
                <td>牛顿 (N)</td>
                <td>达因 (dyn)</td>
                <td>1 N = 10⁵ dyn</td>
              </tr>
              <tr>
                <td>能量</td>
                <td>焦耳 (J)</td>
                <td>尔格 (erg)</td>
                <td>1 J = 10⁷ erg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 电磁学单位 -->
    <section class="electromagnetic-units">
      <h2>电磁学单位的重要差异</h2>
      
      <div class="em-units-content">
        <div class="coulomb-law">
          <h3>库仑定律的不同表述</h3>
          
          <div class="law-comparison">
            <div class="law-card si-card">
              <div class="law-header">
                <span class="law-icon">⚡</span>
                <h4>SI单位制</h4>
              </div>
              <div class="law-content">
                <div class="formula">
                  F = (1/4πε₀) × (q₁q₂/r²)
                </div>
                <div class="parameters">
                  <p><strong>ε₀ = 8.854 × 10⁻¹² F/m</strong> (真空介电常数)</p>
                  <p><strong>电荷单位：</strong>库仑 (C)</p>
                  <p><strong>电场单位：</strong>V/m 或 N/C</p>
                </div>
              </div>
            </div>
            
            <div class="law-card cgs-card">
              <div class="law-header">
                <span class="law-icon">🔬</span>
                <h4>高斯单位制</h4>
              </div>
              <div class="law-content">
                <div class="formula">
                  F = q₁q₂/r²
                </div>
                <div class="parameters">
                  <p><strong>无需介电常数</strong></p>
                  <p><strong>电荷单位：</strong>静电单位 (esu)</p>
                  <p><strong>电场单位：</strong>statvolt/cm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="maxwell-equations">
          <h3>麦克斯韦方程组</h3>
          
          <div class="equations-comparison">
            <div class="equations-set">
              <h4>SI单位制</h4>
              <div class="equation-list">
                <div class="equation-item">
                  <div class="equation">∇ · D = ρ</div>
                  <div class="description">高斯定律</div>
                </div>
                <div class="equation-item">
                  <div class="equation">∇ · B = 0</div>
                  <div class="description">磁场无源</div>
                </div>
                <div class="equation-item">
                  <div class="equation">∇ × E = -∂B/∂t</div>
                  <div class="description">法拉第定律</div>
                </div>
                <div class="equation-item">
                  <div class="equation">∇ × H = J + ∂D/∂t</div>
                  <div class="description">安培定律</div>
                </div>
              </div>
            </div>
            
            <div class="equations-set">
              <h4>高斯单位制</h4>
              <div class="equation-list">
                <div class="equation-item">
                  <div class="equation">∇ · D = 4πρ</div>
                  <div class="description">高斯定律</div>
                </div>
                <div class="equation-item">
                  <div class="equation">∇ · B = 0</div>
                  <div class="description">磁场无源</div>
                </div>
                <div class="equation-item">
                  <div class="equation">∇ × E = -(1/c)∂B/∂t</div>
                  <div class="description">法拉第定律</div>
                </div>
                <div class="equation-item">
                  <div class="equation">∇ × H = (4π/c)J + (1/c)∂D/∂t</div>
                  <div class="description">安培定律</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 单位换算表 -->
    <section class="conversion-tables">
      <h2>详细换算表</h2>
      
      <div class="conversion-content">
        <div class="conversion-category">
          <h3>电磁学量换算</h3>
          <table class="conversion-table">
            <thead>
              <tr>
                <th>物理量</th>
                <th>SI单位</th>
                <th>CGS单位</th>
                <th>换算关系</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>电荷</td>
                <td>库仑 (C)</td>
                <td>静电单位 (esu)</td>
                <td>1 C = 3 × 10⁹ esu</td>
              </tr>
              <tr>
                <td>电流</td>
                <td>安培 (A)</td>
                <td>静电单位/秒</td>
                <td>1 A = 3 × 10⁹ esu/s</td>
              </tr>
              <tr>
                <td>电场</td>
                <td>V/m</td>
                <td>statvolt/cm</td>
                <td>1 V/m = 1/300 statvolt/cm</td>
              </tr>
              <tr>
                <td>磁场 B</td>
                <td>特斯拉 (T)</td>
                <td>高斯 (G)</td>
                <td>1 T = 10⁴ G</td>
              </tr>
              <tr>
                <td>磁场 H</td>
                <td>A/m</td>
                <td>奥斯特 (Oe)</td>
                <td>1 A/m = 4π × 10⁻³ Oe</td>
              </tr>
              <tr>
                <td>电阻</td>
                <td>欧姆 (Ω)</td>
                <td>秒/厘米</td>
                <td>1 Ω = 9 × 10¹¹ s/cm</td>
              </tr>
              <tr>
                <td>电容</td>
                <td>法拉 (F)</td>
                <td>厘米</td>
                <td>1 F = 9 × 10¹¹ cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="conversion-examples">
          <h3>换算实例</h3>
          
          <div class="examples-grid">
            <div class="example-card">
              <div class="example-header">
                <span class="example-icon">🔋</span>
                <h4>电子电荷</h4>
              </div>
              <div class="example-content">
                <div class="si-value">
                  <strong>SI:</strong> e = 1.602 × 10⁻¹⁹ C
                </div>
                <div class="cgs-value">
                  <strong>CGS:</strong> e = 4.803 × 10⁻¹⁰ esu
                </div>
                <div class="conversion-check">
                  验证: 1.602 × 10⁻¹⁹ × 3 × 10⁹ = 4.806 × 10⁻¹⁰ ✓
                </div>
              </div>
            </div>
            
            <div class="example-card">
              <div class="example-header">
                <span class="example-icon">🧲</span>
                <h4>地球磁场</h4>
              </div>
              <div class="example-content">
                <div class="si-value">
                  <strong>SI:</strong> B ≈ 5 × 10⁻⁵ T
                </div>
                <div class="cgs-value">
                  <strong>CGS:</strong> B ≈ 0.5 G
                </div>
                <div class="conversion-check">
                  验证: 5 × 10⁻⁵ × 10⁴ = 0.5 ✓
                </div>
              </div>
            </div>
            
            <div class="example-card">
              <div class="example-header">
                <span class="example-icon">⚡</span>
                <h4>原子内电场</h4>
              </div>
              <div class="example-content">
                <div class="si-value">
                  <strong>SI:</strong> E ≈ 5 × 10¹¹ V/m
                </div>
                <div class="cgs-value">
                  <strong>CGS:</strong> E ≈ 1.7 × 10⁹ statvolt/cm
                </div>
                <div class="conversion-check">
                  验证: 5 × 10¹¹ / 300 = 1.67 × 10⁹ ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 凝聚态物理中的应用 -->
    <section class="condensed-matter-applications">
      <h2>凝聚态物理中的应用</h2>
      
      <div class="applications-content">
        <div class="application-area">
          <h3>霍尔效应</h3>
          
          <div class="hall-effect">
            <div class="hall-formula-comparison">
              <div class="formula-set">
                <h4>SI单位制</h4>
                <div class="formula-content">
                  <div class="main-formula">
                    R_H = 1/(ne)
                  </div>
                  <div class="units-info">
                    <p><strong>R_H:</strong> m³/C (霍尔系数)</p>
                    <p><strong>n:</strong> m⁻³ (载流子密度)</p>
                    <p><strong>e:</strong> 1.602 × 10⁻¹⁹ C</p>
                  </div>
                </div>
              </div>
              
              <div class="formula-set">
                <h4>高斯单位制</h4>
                <div class="formula-content">
                  <div class="main-formula">
                    R_H = 1/(nec)
                  </div>
                  <div class="units-info">
                    <p><strong>R_H:</strong> cm³/esu (霍尔系数)</p>
                    <p><strong>n:</strong> cm⁻³ (载流子密度)</p>
                    <p><strong>e:</strong> 4.803 × 10⁻¹⁰ esu</p>
                    <p><strong>c:</strong> 3 × 10¹⁰ cm/s</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="hall-calculation">
              <h4>计算示例</h4>
              <div class="calculation-example">
                <p><strong>给定：</strong>铜中自由电子密度 n = 8.5 × 10²⁸ m⁻³</p>
                
                <div class="calculation-steps">
                  <div class="step">
                    <h5>SI计算：</h5>
                    <p>R_H = 1/(8.5 × 10²⁸ × 1.602 × 10⁻¹⁹) = -7.3 × 10⁻¹¹ m³/C</p>
                  </div>
                  
                  <div class="step">
                    <h5>CGS计算：</h5>
                    <p>n = 8.5 × 10²² cm⁻³</p>
                    <p>R_H = 1/(8.5 × 10²² × 4.803 × 10⁻¹⁰ × 3 × 10¹⁰) = -8.1 × 10⁻⁴ cm³/esu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="application-area">
          <h3>磁化率</h3>
          
          <div class="susceptibility-comparison">
            <div class="susceptibility-definitions">
              <div class="definition-card">
                <h4>SI单位制</h4>
                <div class="definition-content">
                  <div class="formula">M = χ_m H</div>
                  <div class="explanation">
                    <p><strong>M:</strong> 磁化强度 (A/m)</p>
                    <p><strong>H:</strong> 磁场强度 (A/m)</p>
                    <p><strong>χ_m:</strong> 磁化率 (无量纲)</p>
                  </div>
                </div>
              </div>
              
              <div class="definition-card">
                <h4>高斯单位制</h4>
                <div class="definition-content">
                  <div class="formula">M = χ H</div>
                  <div class="explanation">
                    <p><strong>M:</strong> 磁化强度 (emu/cm³)</p>
                    <p><strong>H:</strong> 磁场强度 (Oe)</p>
                    <p><strong>χ:</strong> 磁化率 (无量纲)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="susceptibility-values">
              <h4>典型材料的磁化率</h4>
              <table class="susceptibility-table">
                <thead>
                  <tr>
                    <th>材料</th>
                    <th>SI (χ_m)</th>
                    <th>CGS (χ)</th>
                    <th>关系</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>铜 (抗磁性)</td>
                    <td>-9.6 × 10⁻⁶</td>
                    <td>-7.6 × 10⁻⁷</td>
                    <td>χ = χ_m/(4π)</td>
                  </tr>
                  <tr>
                    <td>铝 (顺磁性)</td>
                    <td>2.1 × 10⁻⁵</td>
                    <td>1.7 × 10⁻⁶</td>
                    <td>χ = χ_m/(4π)</td>
                  </tr>
                  <tr>
                    <td>铁 (铁磁性)</td>
                    <td>~10³</td>
                    <td>~80</td>
                    <td>χ = χ_m/(4π)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实用转换工具 -->
    <section class="conversion-tools">
      <h2>实用转换指南</h2>
      
      <div class="tools-content">
        <div class="quick-reference">
          <h3>快速参考卡</h3>
          
          <div class="reference-cards">
            <div class="ref-card">
              <h4>常用常数</h4>
              <div class="constants-list">
                <div class="constant-item">
                  <span class="constant-name">光速 c:</span>
                  <span class="constant-value">3 × 10⁸ m/s = 3 × 10¹⁰ cm/s</span>
                </div>
                <div class="constant-item">
                  <span class="constant-name">真空介电常数 ε₀:</span>
                  <span class="constant-value">8.854 × 10⁻¹² F/m</span>
                </div>
                <div class="constant-item">
                  <span class="constant-name">真空磁导率 μ₀:</span>
                  <span class="constant-value">4π × 10⁻⁷ H/m</span>
                </div>
                <div class="constant-item">
                  <span class="constant-name">精细结构常数 α:</span>
                  <span class="constant-value">1/137 (无量纲)</span>
                </div>
              </div>
            </div>
            
            <div class="ref-card">
              <h4>转换因子</h4>
              <div class="factors-list">
                <div class="factor-item">
                  <span class="factor-name">电荷:</span>
                  <span class="factor-value">1 C = 3 × 10⁹ esu</span>
                </div>
                <div class="factor-item">
                  <span class="factor-name">磁场:</span>
                  <span class="factor-value">1 T = 10⁴ G</span>
                </div>
                <div class="factor-item">
                  <span class="factor-name">电场:</span>
                  <span class="factor-value">1 V/m = 1/300 statvolt/cm</span>
                </div>
                <div class="factor-item">
                  <span class="factor-name">能量:</span>
                  <span class="factor-value">1 J = 10⁷ erg</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="conversion-tips">
          <h3>转换技巧</h3>
          
          <div class="tips-grid">
            <div class="tip-card">
              <div class="tip-header">
                <span class="tip-icon">💡</span>
                <h4>记忆方法</h4>
              </div>
              <div class="tip-content">
                <ul>
                  <li>记住 c = 3 × 10¹⁰ cm/s，很多转换都与此相关</li>
                  <li>电荷转换：1 C = 3 × 10⁹ esu (与光速数值相同)</li>
                  <li>磁场转换：1 T = 10⁴ G (简单的10的幂次)</li>
                  <li>CGS中常出现4π因子，SI中被吸收到常数中</li>
                </ul>
              </div>
            </div>
            
            <div class="tip-card">
              <div class="tip-header">
                <span class="tip-icon">⚠️</span>
                <h4>常见错误</h4>
              </div>
              <div class="tip-content">
                <ul>
                  <li>忘记CGS中的4π因子</li>
                  <li>混淆磁场B和H的单位</li>
                  <li>电场单位转换时忘记1/300因子</li>
                  <li>能量单位转换时数量级错误</li>
                </ul>
              </div>
            </div>
            
            <div class="tip-card">
              <div class="tip-header">
                <span class="tip-icon">📖</span>
                <h4>文献阅读</h4>
              </div>
              <div class="tip-content">
                <ul>
                  <li>老文献多用CGS，新文献多用SI</li>
                  <li>理论物理文献偏爱CGS的简洁形式</li>
                  <li>实验物理文献多用SI标准单位</li>
                  <li>注意文献中单位制的声明</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary">
      <h2>总结</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>关键要点</h3>
          <div class="points-grid">
            <div class="point-item">
              <span class="point-number">1</span>
              <div class="point-content">
                <h4>单位制选择</h4>
                <p>SI适合工程应用，CGS适合理论推导</p>
              </div>
            </div>
            
            <div class="point-item">
              <span class="point-number">2</span>
              <div class="point-content">
                <h4>转换关键</h4>
                <p>掌握基本转换因子，特别是涉及光速c的关系</p>
              </div>
            </div>
            
            <div class="point-item">
              <span class="point-number">3</span>
              <div class="point-content">
                <h4>4π因子</h4>
                <p>CGS中显式出现，SI中被吸收到常数中</p>
              </div>
            </div>
            
            <div class="point-item">
              <span class="point-number">4</span>
              <div class="point-content">
                <h4>实际应用</h4>
                <p>根据具体情况选择合适的单位制进行计算</p>
              </div>
            </div>
          </div>
        </div>

        <div class="final-advice">
          <h3>学习建议</h3>
          <div class="advice-box">
            <p>在学习凝聚态物理时，建议：</p>
            <ul>
              <li><strong>熟练掌握两种单位制：</strong>能够在SI和CGS之间自由转换</li>
              <li><strong>理解物理本质：</strong>单位制不改变物理规律的本质</li>
              <li><strong>注意文献标准：</strong>阅读文献时首先确认使用的单位制</li>
              <li><strong>实践应用：</strong>通过具体计算加深对单位转换的理解</li>
              <li><strong>建立直觉：</strong>对常见物理量的数值大小有直观认识</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_8_4',
  mounted() {
    // 添加数学公式渲染支持
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #3498db;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #3498db;
}

h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

p {
  margin-bottom: 1rem;
  color: #555;
}

/* 引言部分 */
.introduction {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
}

.introduction h2 {
  color: white;
  border-left-color: white;
}

.introduction p {
  color: #f8f9fa;
  font-size: 1.1rem;
}

.unit-systems-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.system-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.system-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.system-icon {
  font-size: 2rem;
}

.system-header h3 {
  color: white;
  margin: 0;
}

.system-content p {
  color: #f8f9fa;
  margin-bottom: 0.5rem;
}

/* 基本单位对比 */
.units-comparison {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.comparison-table {
  width: 100%;
  margin-bottom: 2rem;
}

.comparison-table h3 {
  color: #2563eb;
  margin-bottom: 1rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

thead {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
}

th, td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

th {
  font-weight: 600;
}

tbody tr:hover {
  background: #f9fafb;
}

/* 电磁学单位 */
.electromagnetic-units {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.em-units-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.coulomb-law {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.law-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.law-card {
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.si-card {
  background: linear-gradient(135deg, #10b981, #059669);
}

.cgs-card {
  background: linear-gradient(135deg, #f59e0b, #d97706);
}

.law-header {
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.law-icon {
  font-size: 1.5rem;
}

.law-header h4 {
  color: white;
  margin: 0;
}

.law-content {
  background: white;
  padding: 1.5rem;
}

.formula {
  font-size: 1.3rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  margin-bottom: 1rem;
  font-family: 'Times New Roman', serif;
}

.parameters p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

/* 麦克斯韦方程组 */
.maxwell-equations {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.equations-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.equations-set {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.equations-set h4 {
  color: #2563eb;
  text-align: center;
  margin-bottom: 1.5rem;
}

.equation-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.equation-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.equation {
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  font-family: 'Times New Roman', serif;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.description {
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
}

/* 换算表 */
.conversion-tables {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.conversion-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.conversion-category {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.conversion-category h3 {
  color: #2563eb;
  margin-bottom: 1.5rem;
}

.conversion-table {
  width: 100%;
}

.conversion-examples {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.example-card {
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.example-header {
  background: linear-gradient(135deg, #8b5cf6, #7c3aed);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.example-icon {
  font-size: 1.5rem;
}

.example-header h4 {
  color: white;
  margin: 0;
}

.example-content {
  padding: 1rem;
}

.si-value, .cgs-value {
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}

.si-value {
  background: #dbeafe;
  color: #1e40af;
}

.cgs-value {
  background: #fef3c7;
  color: #92400e;
}

.conversion-check {
  background: #d1fae5;
  color: #065f46;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

/* 凝聚态物理应用 */
.condensed-matter-applications {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.applications-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.application-area {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.hall-effect {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hall-formula-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.formula-set {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.formula-set h4 {
  color: #2563eb;
  text-align: center;
  margin-bottom: 1rem;
}

.formula-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.main-formula {
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  font-family: 'Times New Roman', serif;
}

.units-info p {
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.9rem;
}

.hall-calculation {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.calculation-example p {
  margin-bottom: 1rem;
  color: #4a5568;
}

.calculation-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.step h5 {
  color: #2563eb;
  margin-bottom: 0.5rem;
}

.step p {
  color: #4a5568;
  margin: 0;
  font-family: 'Courier New', monospace;
}

/* 磁化率 */
.susceptibility-comparison {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.susceptibility-definitions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.definition-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.definition-card h4 {
  color: #2563eb;
  text-align: center;
  margin-bottom: 1rem;
}

.definition-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.susceptibility-values {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.susceptibility-table {
  width: 100%;
  margin-top: 1rem;
}

/* 转换工具 */
.conversion-tools {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.tools-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.quick-reference {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.reference-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.ref-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.ref-card h4 {
  color: #2563eb;
  margin-bottom: 1rem;
}

.constants-list, .factors-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.constant-item, .factor-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #e2e8f0;
}

.constant-name, .factor-name {
  font-weight: 600;
  color: #374151;
}

.constant-value, .factor-value {
  font-family: 'Courier New', monospace;
  color: #6b7280;
}

.conversion-tips {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tip-card {
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.tip-header {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.tip-icon {
  font-size: 1.5rem;
}

.tip-header h4 {
  color: white;
  margin: 0;
}

.tip-content {
  padding: 1rem;
}

.tip-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.tip-content li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

/* 总结 */
.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
}

.summary h2 {
  color: white;
  border-left-color: white;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.key-points {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.key-points h3 {
  color: white;
  margin-bottom: 1.5rem;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.point-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.point-number {
  background: white;
  color: #667eea;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
}

.point-content h4 {
  color: white;
  margin-bottom: 0.5rem;
}

.point-content p {
  color: #f8f9fa;
  margin: 0;
}

.final-advice {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.final-advice h3 {
  color: white;
  margin-bottom: 1rem;
}

.advice-box p {
  color: #f8f9fa;
  margin-bottom: 1rem;
}

.advice-box ul {
  margin: 0;
  padding-left: 1.5rem;
}

.advice-box li {
  margin-bottom: 0.75rem;
  color: #f8f9fa;
}

.advice-box strong {
  color: white;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .unit-systems-overview,
  .law-comparison,
  .equations-comparison,
  .examples-grid,
  .hall-formula-comparison,
  .susceptibility-definitions,
  .reference-cards,
  .tips-grid,
  .points-grid {
    grid-template-columns: 1fr;
  }
}
</style>