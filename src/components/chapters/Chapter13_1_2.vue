<template>
  <div class="chapter-content">
    <h1>13.1.2 完全抗磁性：Meissner效应</h1>
    
    <section class="introduction">
      <h2>Meissner效应的发现</h2>
      
      <div class="discovery-story">
        <div class="historical-context">
          <h3>1933年的重大发现</h3>
          <p>德国物理学家Walther Meissner和Robert Ochsenfeld发现，超导体不仅具有零电阻，还会主动排斥磁场。</p>
          
          <div class="key-insight">
            <p><strong>关键洞察：</strong>这种磁场排斥现象不能仅仅用零电阻来解释，它是超导体的本征性质。</p>
          </div>
        </div>
        
        <div class="experimental-setup">
          <h3>实验观察</h3>
          <p>当超导体冷却到临界温度以下时：</p>
          <ul>
            <li>外部磁场被完全排斥出超导体内部</li>
            <li>磁感线绕过超导体，形成特殊的磁场分布</li>
            <li>这种现象与导体中的感应电流效应完全不同</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="perfect-diamagnetism">
      <h2>完全抗磁性</h2>
      
      <div class="diamagnetic-properties">
        <h3>磁化率</h3>
        <p>超导体的磁化率为：</p>
        <katex-element :expression="`\\chi = -\\frac{1}{4\\pi} \\quad (\\text{CGS单位})`"></katex-element>
        <katex-element :expression="`\\chi = -1 \\quad (\\text{SI单位})`"></katex-element>
        
        <div class="magnetization-relation">
          <h4>磁化强度</h4>
          <p>磁化强度与外磁场的关系：</p>
          <katex-element :expression="`\\vec{M} = \\chi \\vec{H} = -\\frac{1}{4\\pi}\\vec{H} \\quad (\\text{CGS})`"></katex-element>
          <katex-element :expression="`\\vec{M} = \\chi \\vec{H} = -\\vec{H} \\quad (\\text{SI})`"></katex-element>
        </div>
      </div>
      
      <div class="field-exclusion">
        <h3>磁场排斥</h3>
        <p>在超导体内部：</p>
        <katex-element :expression="`\\vec{B} = \\vec{H} + 4\\pi\\vec{M} = \\vec{H} - \\vec{H} = 0 \\quad (\\text{CGS})`"></katex-element>
        <katex-element :expression="`\\vec{B} = \\mu_0(\\vec{H} + \\vec{M}) = \\mu_0(\\vec{H} - \\vec{H}) = 0 \\quad (\\text{SI})`"></katex-element>
        
        <div class="field-boundary">
          <h4>边界条件</h4>
          <p>在超导体表面：</p>
          <ul>
            <li>磁感应强度的法向分量连续：<katex-element :expression="`B_{n,\\text{out}} = B_{n,\\text{in}} = 0`"></katex-element></li>
            <li>磁场强度的切向分量连续：<katex-element :expression="`H_{t,\\text{out}} = H_{t,\\text{in}}`"></katex-element></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="vs-perfect-conductor">
      <h2>与理想导体的区别</h2>
      
      <div class="comparison-table">
        <h3>理想导体 vs 超导体</h3>
        <div class="data-table">
          <table>
            <thead>
              <tr>
                <th>性质</th>
                <th>理想导体</th>
                <th>超导体</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>电阻</td>
                <td>ρ = 0</td>
                <td>ρ = 0</td>
              </tr>
              <tr>
                <td>磁场变化响应</td>
                <td>阻止磁场变化</td>
                <td>排斥所有磁场</td>
              </tr>
              <tr>
                <td>冷却过程</td>
                <td>保持原有磁场</td>
                <td>排斥磁场</td>
              </tr>
              <tr>
                <td>热力学性质</td>
                <td>不可逆过程</td>
                <td>可逆过程</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="cooling-scenarios">
        <h3>冷却过程的差异</h3>
        
        <div class="scenario-grid">
          <div class="scenario-card">
            <h4>理想导体</h4>
            <p><strong>场冷却(FC)：</strong></p>
            <ul>
              <li>在磁场中冷却到零电阻态</li>
              <li>磁场被"冻结"在导体内部</li>
              <li><katex-element :expression="`\\vec{B}_{\\text{内}} = \\vec{B}_{\\text{外}}`"></katex-element></li>
            </ul>
            
            <p><strong>零场冷却(ZFC)：</strong></p>
            <ul>
              <li>先冷却到零电阻态，再加磁场</li>
              <li>磁场无法进入导体内部</li>
              <li><katex-element :expression="`\\vec{B}_{\\text{内}} = 0`"></katex-element></li>
            </ul>
          </div>
          
          <div class="scenario-card">
            <h4>超导体</h4>
            <p><strong>场冷却(FC)和零场冷却(ZFC)：</strong></p>
            <ul>
              <li>无论冷却顺序如何</li>
              <li>磁场总是被排斥</li>
              <li><katex-element :expression="`\\vec{B}_{\\text{内}} = 0`"></katex-element></li>
            </ul>
            
            <div class="thermodynamic-note">
              <p><strong>热力学意义：</strong>超导态是真正的热力学平衡态</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="penetration-depth">
      <h2>磁场穿透深度</h2>
      
      <div class="london-penetration">
        <h3>London穿透深度</h3>
        <p>磁场并非完全被排斥，而是在表面附近指数衰减：</p>
        <katex-element :expression="`B(x) = B_0 e^{-x/\\lambda_L}`"></katex-element>
        
        <p>其中<katex-element :expression="`\\lambda_L`"></katex-element>是London穿透深度：</p>
        <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{mc^2}{4\\pi n_s e^2}} \\quad (\\text{CGS})`"></katex-element>
        <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{m}{\\mu_0 n_s e^2}} \\quad (\\text{SI})`"></katex-element>
        
        <div class="parameter-explanation">
          <h4>参数说明</h4>
          <ul>
            <li><katex-element :expression="`n_s`"></katex-element>：超导电子密度</li>
            <li><katex-element :expression="`m`"></katex-element>：电子质量</li>
            <li><katex-element :expression="`e`"></katex-element>：电子电荷</li>
            <li><katex-element :expression="`c`"></katex-element>：光速</li>
          </ul>
        </div>
      </div>
      
        <div class="typical-values">
          <h3>典型数值</h3>
          <div class="data-table">
            <table>
              <thead>
                <tr><th>材料</th><th>λ_L (nm)</th><th>T_c (K)</th></tr>
              </thead>
              <tbody>
                <tr><td>Al</td><td>50</td><td>1.2</td></tr>
                <tr><td>Sn</td><td>34</td><td>3.7</td></tr>
                <tr><td>Pb</td><td>37</td><td>7.2</td></tr>
                <tr><td>Nb</td><td>39</td><td>9.3</td></tr>
                <tr><td>YBCO</td><td>150</td><td>93</td></tr>
              </tbody>
            </table>
          </div>
        </div>
    </section>

    <section class="surface-currents">
      <h2>表面电流</h2>
      
      <div class="current-distribution">
        <h3>屏蔽电流</h3>
        <p>为了排斥磁场，超导体表面产生屏蔽电流：</p>
        <katex-element :expression="`\\vec{J}_s(x) = -\\frac{c}{4\\pi\\lambda_L^2}\\vec{A}(x) \\quad (\\text{CGS})`"></katex-element>
        <katex-element :expression="`\\vec{J}_s(x) = -\\frac{1}{\\mu_0\\lambda_L^2}\\vec{A}(x) \\quad (\\text{SI})`"></katex-element>
        
        <p>其中<katex-element :expression="`\\vec{A}`"></katex-element>是矢量势。</p>
        
        <div class="current-decay">
          <h4>电流衰减</h4>
          <p>表面电流密度也按指数规律衰减：</p>
          <katex-element :expression="`J_s(x) = J_0 e^{-x/\\lambda_L}`"></katex-element>
        </div>
      </div>
      
      <div class="energy-considerations">
        <h3>磁场能量</h3>
        <p>磁场被压缩到穿透深度内，增加了系统能量：</p>
        <katex-element :expression="`U_{\\text{mag}} = \\frac{B^2}{8\\pi} \\cdot \\text{Volume} \\quad (\\text{CGS})`"></katex-element>
        
        <div class="energy-balance">
          <h4>能量平衡</h4>
          <p>超导体能够排斥磁场的条件是：</p>
          <katex-element :expression="`U_{\\text{condensation}} > U_{\\text{magnetic}}`"></katex-element>
          <p>即凝聚能必须大于磁场压缩所需的能量。</p>
        </div>
      </div>
    </section>

    <section class="critical-field">
      <h2>临界磁场</h2>
      
      <div class="thermodynamic-critical-field">
        <h3>热力学临界磁场</h3>
        <p>当外磁场超过临界值时，超导态被破坏：</p>
        <katex-element :expression="`H_c(T) = H_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right]`"></katex-element>
        
        <div class="critical-field-origin">
          <h4>物理起源</h4>
          <p>临界磁场由能量平衡决定：</p>
          <katex-element :expression="`\\frac{H_c^2}{8\\pi} = f_n(T) - f_s(T) \\quad (\\text{CGS})`"></katex-element>
          
          <p>其中<katex-element :expression="`f_n`"></katex-element>和<katex-element :expression="`f_s`"></katex-element>分别是正常态和超导态的自由能密度。</p>
        </div>
      </div>
      
      <div class="field-temperature-diagram">
        <h3>H-T相图</h3>
        <div class="phase-diagram-description">
          <p>超导体的磁场-温度相图显示：</p>
          <ul>
            <li><strong>超导相：</strong><katex-element :expression="`H < H_c(T), T < T_c`"></katex-element></li>
            <li><strong>正常相：</strong><katex-element :expression="`H > H_c(T)`"></katex-element>或<katex-element :expression="`T > T_c`"></katex-element></li>
            <li><strong>相界：</strong>抛物线形状的临界线</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>Meissner效应的应用</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>磁悬浮</h3>
          <ul>
            <li>磁悬浮列车</li>
            <li>磁悬浮轴承</li>
            <li>无摩擦转子</li>
          </ul>
          <div class="principle">
            <p><strong>原理：</strong>利用磁场排斥实现稳定悬浮</p>
          </div>
        </div>
        
        <div class="application-card">
          <h3>磁屏蔽</h3>
          <ul>
            <li>精密仪器保护</li>
            <li>磁场隔离</li>
            <li>量子器件环境</li>
          </ul>
          <div class="principle">
            <p><strong>原理：</strong>完全排斥外部磁场干扰</p>
          </div>
        </div>
        
        <div class="application-card">
          <h3>磁通量子化</h3>
          <ul>
            <li>SQUID器件</li>
            <li>磁通量测量</li>
            <li>量子干涉</li>
          </ul>
          <div class="principle">
            <p><strong>原理：</strong>利用磁通量子化效应</p>
          </div>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>Meissner效应是超导体主动排斥磁场的现象，不能仅用零电阻解释</li>
          <li>超导体表现为完全抗磁性，磁化率χ = -1/(4π)</li>
          <li>与理想导体不同，超导体在任何冷却过程中都排斥磁场</li>
          <li>磁场在穿透深度λ_L内指数衰减，典型值为几十纳米</li>
          <li>表面屏蔽电流维持磁场排斥，存在临界磁场H_c</li>
          <li>Meissner效应在磁悬浮、磁屏蔽等技术中有重要应用</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_1_2',
  mounted() {
    // 确保MathJax渲染
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #e74c3c;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.discovery-story {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.historical-context,
.experimental-setup {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.key-insight {
  background: #e8f4f8;
  border-left: 4px solid #3498db;
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
}

.diamagnetic-properties {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  margin: 20px 0;
}

.magnetization-relation {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.field-exclusion {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.field-boundary {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.comparison-table {
  margin: 20px 0;
}

.data-table {
  overflow-x: auto;
  margin: 15px 0;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.data-table th {
  background: #e74c3c;
  color: white;
  font-weight: bold;
}

.data-table tr:hover {
  background: #f8f9fa;
}

.scenario-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.scenario-card {
  background: #f1f3f4;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #9b59b6;
}

.thermodynamic-note {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
}

.london-penetration {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.parameter-explanation {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.typical-values {
  margin: 20px 0;
}

.current-distribution {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.current-decay {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.energy-considerations {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.energy-balance {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #e53e3e;
}

.thermodynamic-critical-field {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.critical-field-origin {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.phase-diagram-description {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
  margin: 20px 0;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.principle {
  background: rgba(255,255,255,0.8);
  padding: 10px;
  border-radius: 5px;
  margin-top: 15px;
  font-style: italic;
}

.summary {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #e74c3c;
  margin-top: 30px;
}

.summary-points ul {
  list-style-type: none;
  padding: 0;
}

.summary-points li {
  background: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .scenario-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>