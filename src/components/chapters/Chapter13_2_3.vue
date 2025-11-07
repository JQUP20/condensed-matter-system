<template>
  <div class="chapter-content">
    <h1>13.2.3 第一类与第二类超导体</h1>
    
    <section class="introduction">
      <h2>超导体的分类</h2>
      
      <div class="classification-overview">
        <p>根据在磁场中的行为，超导体可分为两大类：</p>
        
        <div class="type-comparison">
          <div class="type-card type1">
            <h3>第一类超导体 (Type I)</h3>
            <ul>
              <li>完全Meissner效应</li>
              <li>单一临界磁场H_c</li>
              <li>主要是纯金属元素</li>
              <li>κ < 1/√2</li>
            </ul>
          </div>
          
          <div class="type-card type2">
            <h3>第二类超导体 (Type II)</h3>
            <ul>
              <li>混合态存在</li>
              <li>两个临界磁场H_c1, H_c2</li>
              <li>合金和化合物</li>
              <li>κ > 1/√2</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="type-i-superconductors">
      <h2>第一类超导体</h2>
      
      <div class="type-i-characteristics">
        <h3>基本特征</h3>
        
        <div class="meissner-complete">
          <h4>完全Meissner效应</h4>
          <p>磁场完全被排斥出超导体内部：</p>
          <katex-element :expression="`\\mathbf{B} = 0 \\quad (H < H_c)`"></katex-element>
          <katex-element :expression="`\\mathbf{B} = \\mathbf{H} \\quad (H > H_c)`"></katex-element>
        </div>
        
        <div class="critical-field">
          <h4>热力学临界磁场</h4>
          <p>临界磁场的温度依赖性：</p>
          <katex-element :expression="`H_c(T) = H_c(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^2\\right]`"></katex-element>
          
          <div class="thermodynamic-relation">
            <p>与凝聚能的关系：</p>
            <katex-element :expression="`\\frac{H_c^2(0)}{8\\pi} = \\gamma T_c^2 \\quad (\\text{CGS})`"></katex-element>
            <katex-element :expression="`\\frac{\\mu_0 H_c^2(0)}{2} = \\gamma T_c^2 \\quad (\\text{SI})`"></katex-element>
          </div>
        </div>
      </div>
      
      <div class="typical-materials">
        <h3>典型材料</h3>
        <div class="materials-table">
          <table>
            <thead>
              <tr><th>材料</th><th>T_c (K)</th><th>H_c(0) (Oe)</th><th>λ (nm)</th><th>ξ (nm)</th></tr>
            </thead>
            <tbody>
              <tr><td>Al</td><td>1.18</td><td>105</td><td>50</td><td>1600</td></tr>
              <tr><td>Sn</td><td>3.72</td><td>309</td><td>34</td><td>230</td></tr>
              <tr><td>In</td><td>3.41</td><td>282</td><td>64</td><td>360</td></tr>
              <tr><td>Pb</td><td>7.20</td><td>803</td><td>37</td><td>83</td></tr>
              <tr><td>Hg</td><td>4.15</td><td>411</td><td>71</td><td>150</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="intermediate-state">
        <h3>中间态</h3>
        <p>在退磁因子不为零的情况下，第一类超导体可能出现中间态：</p>
        <ul>
          <li>正常态和超导态的混合</li>
          <li>由样品几何形状决定</li>
          <li>磁通以条纹或管状分布</li>
        </ul>
      </div>
    </section>

    <section class="type-ii-superconductors">
      <h2>第二类超导体</h2>
      
      <div class="type-ii-characteristics">
        <h3>基本特征</h3>
        
        <div class="mixed-state">
          <h4>混合态 (Mixed State)</h4>
          <p>在H_c1和H_c2之间存在混合态：</p>
          <katex-element :expression="`H_{c1} < H < H_{c2}`"></katex-element>
          
          <div class="flux-quantization">
            <p>磁通量子化：</p>
            <katex-element :expression="`\\Phi_0 = \\frac{h}{2e} = 2.07 \\times 10^{-15} \\text{ Wb}`"></katex-element>
          </div>
        </div>
        
        <div class="critical-fields">
          <h4>两个临界磁场</h4>
          
          <div class="hc1-description">
            <h5>下临界磁场 H_c1</h5>
            <katex-element :expression="`H_{c1} \\approx \\frac{\\Phi_0}{4\\pi\\lambda^2} \\ln\\kappa \\quad (\\kappa \\gg 1)`"></katex-element>
            <p>磁通开始穿透的磁场</p>
          </div>
          
          <div class="hc2-description">
            <h5>上临界磁场 H_c2</h5>
            <katex-element :expression="`H_{c2} = \\frac{\\Phi_0}{2\\pi\\xi^2}`"></katex-element>
            <p>超导态完全被破坏的磁场</p>
          </div>
          
          <div class="thermodynamic-field">
            <h5>热力学临界磁场</h5>
            <katex-element :expression="`H_c = \\sqrt{H_{c1} H_{c2} \\ln\\kappa}`"></katex-element>
          </div>
        </div>
      </div>
      
      <div class="vortex-lattice">
        <h3>磁通涡旋格子</h3>
        
        <div class="vortex-structure">
          <h4>涡旋结构</h4>
          <ul>
            <li>每个涡旋携带一个磁通量子Φ_0</li>
            <li>涡旋核心尺寸～ξ</li>
            <li>磁场衰减长度～λ</li>
            <li>涡旋间距～√(Φ_0/B)</li>
          </ul>
        </div>
        
        <div class="abrikosov-lattice">
          <h4>Abrikosov格子</h4>
          <p>在均匀磁场中，涡旋形成三角格子：</p>
          <katex-element :expression="`a = \\sqrt{\\frac{2\\Phi_0}{\\sqrt{3}B}}`"></katex-element>
          <p>其中a是格子常数。</p>
        </div>
      </div>
      
      <div class="typical-type-ii">
        <h3>典型第二类超导体</h3>
        <div class="type-ii-table">
          <table>
            <thead>
              <tr><th>材料</th><th>T_c (K)</th><th>H_c2(0) (T)</th><th>κ</th><th>类型</th></tr>
            </thead>
            <tbody>
              <tr><td>Nb</td><td>9.3</td><td>0.4</td><td>0.7</td><td>弱耦合</td></tr>
              <tr><td>V₃Si</td><td>17.1</td><td>23</td><td>25</td><td>A15</td></tr>
              <tr><td>Nb₃Sn</td><td>18.3</td><td>28</td><td>40</td><td>A15</td></tr>
              <tr><td>NbTi</td><td>9.8</td><td>14</td><td>50</td><td>合金</td></tr>
              <tr><td>YBCO</td><td>93</td><td>120</td><td>100</td><td>高温</td></tr>
              <tr><td>BSCCO</td><td>110</td><td>200</td><td>150</td><td>高温</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="gl-parameter">
      <h2>Ginzburg-Landau参数</h2>
      
      <div class="kappa-definition">
        <h3>κ参数的定义</h3>
        <katex-element :expression="`\\kappa = \\frac{\\lambda}{\\xi}`"></katex-element>
        
        <div class="parameter-significance">
          <h4>物理意义</h4>
          <ul>
            <li>λ：磁场穿透深度</li>
            <li>ξ：相干长度</li>
            <li>κ决定超导体的类型</li>
          </ul>
        </div>
      </div>
      
      <div class="critical-value">
        <h3>临界值 κ = 1/√2</h3>
        
        <div class="classification-criterion">
          <div class="type-criterion">
            <h4>第一类超导体</h4>
            <katex-element :expression="`\\kappa < \\frac{1}{\\sqrt{2}} \\approx 0.707`"></katex-element>
            <p>界面能为正，排斥磁通</p>
          </div>
          
          <div class="type-criterion">
            <h4>第二类超导体</h4>
            <katex-element :expression="`\\kappa > \\frac{1}{\\sqrt{2}} \\approx 0.707`"></katex-element>
            <p>界面能为负，吸引磁通</p>
          </div>
        </div>
      </div>
      
      <div class="surface-energy">
        <h3>界面能</h3>
        <p>正常-超导界面的表面能密度：</p>
        <katex-element :expression="`\\sigma_{ns} = \\frac{H_c^2}{4\\pi}\\xi\\left(\\frac{1}{\\sqrt{2}} - \\kappa\\right)`"></katex-element>
        
        <div class="energy-interpretation">
          <ul>
            <li>κ < 1/√2：σ_ns > 0，界面能为正</li>
            <li>κ > 1/√2：σ_ns < 0，界面能为负</li>
            <li>界面能决定磁通行为</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="phase-diagram">
      <h2>磁场-温度相图</h2>
      
      <div class="phase-diagrams">
        <div class="type-i-diagram">
          <h3>第一类超导体相图</h3>
          <div class="diagram-description">
            <p>简单的两相结构：</p>
            <ul>
              <li>超导态：H < H_c(T)</li>
              <li>正常态：H > H_c(T)</li>
              <li>相界线：H_c(T)</li>
            </ul>
          </div>
        </div>
        
        <div class="type-ii-diagram">
          <h3>第二类超导体相图</h3>
          <div class="diagram-description">
            <p>三相结构：</p>
            <ul>
              <li>Meissner态：H < H_c1(T)</li>
              <li>混合态：H_c1(T) < H < H_c2(T)</li>
              <li>正常态：H > H_c2(T)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>应用与技术意义</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>第一类超导体应用</h3>
          <ul>
            <li>精密磁屏蔽</li>
            <li>量子干涉器件</li>
            <li>基础物理研究</li>
            <li>标准电阻</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>第二类超导体应用</h3>
          <ul>
            <li>强磁场磁体</li>
            <li>MRI医疗设备</li>
            <li>粒子加速器</li>
            <li>电力传输</li>
            <li>磁悬浮列车</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>技术优势</h3>
          <ul>
            <li>高临界磁场</li>
            <li>强钉扎效应</li>
            <li>大载流能力</li>
            <li>工程实用性</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>超导体根据GL参数κ分为第一类(κ<1/√2)和第二类(κ>1/√2)</li>
          <li>第一类超导体表现完全Meissner效应，有单一临界磁场</li>
          <li>第二类超导体存在混合态，有两个临界磁场H_c1和H_c2</li>
          <li>混合态中磁通以量子化涡旋形式存在</li>
          <li>界面能的正负决定了超导体的类型和磁通行为</li>
          <li>第二类超导体在强磁场应用中具有重要技术价值</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_2_3',
  mounted() {
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

.classification-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.type-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.type-card {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.type1 {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  color: #2d3436;
}

.type2 {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2d3436;
}

.type-i-characteristics {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.meissner-complete {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #e53e3e;
}

.critical-field {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #3182ce;
}

.thermodynamic-relation {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.materials-table,
.type-ii-table {
  overflow-x: auto;
  margin: 15px 0;
}

.materials-table table,
.type-ii-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.materials-table th,
.materials-table td,
.type-ii-table th,
.type-ii-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.materials-table th,
.type-ii-table th {
  background: #e74c3c;
  color: white;
  font-weight: bold;
}

.materials-table tr:hover,
.type-ii-table tr:hover {
  background: #f8f9fa;
}

.intermediate-state {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #b3d9ff;
  margin: 15px 0;
}

.type-ii-characteristics {
  background: #f0fff4;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c6f6d5;
  margin: 20px 0;
}

.mixed-state {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #38a169;
}

.flux-quantization {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.critical-fields {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.hc1-description,
.hc2-description,
.thermodynamic-field {
  background: #f8f9fa;
  padding: 12px;
  border-radius: 6px;
  margin: 10px 0;
  border-left: 3px solid #6c757d;
}

.vortex-lattice {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.vortex-structure,
.abrikosov-lattice {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.gl-parameter {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6c757d;
  margin: 20px 0;
}

.kappa-definition {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.parameter-significance {
  background: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.critical-value {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.classification-criterion {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
}

.type-criterion {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #dee2e6;
}

.surface-energy {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.energy-interpretation {
  background: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.phase-diagrams {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.type-i-diagram,
.type-ii-diagram {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
}

.diagram-description {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
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
  .type-comparison,
  .classification-criterion,
  .phase-diagrams,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>