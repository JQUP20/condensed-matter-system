<template>
  <div class="chapter-content">
    <h1>13.3.3 相干长度与GL参数</h1>
    
    <section class="introduction">
      <h2>特征长度尺度</h2>
      
      <div class="length-scales-overview">
        <p>GL理论中存在两个重要的特征长度尺度：</p>
        
        <div class="scales-comparison">
          <div class="scale-card coherence">
            <h3>相干长度 ξ</h3>
            <katex-element :expression="`\\xi = \\sqrt{\\frac{\\hbar^2}{2m^*|\\alpha|}}`"></katex-element>
            <p>序参量空间变化的特征尺度</p>
          </div>
          
          <div class="scale-card penetration">
            <h3>穿透深度 λ</h3>
            <katex-element :expression="`\\lambda = \\sqrt{\\frac{m^*}{\\mu_0 e^{*2} n_s}}`"></katex-element>
            <p>磁场衰减的特征尺度</p>
          </div>
        </div>
      </div>
    </section>

    <section class="coherence-length">
      <h2>相干长度 ξ</h2>
      
      <div class="xi-definition">
        <h3>定义与物理意义</h3>
        <katex-element :expression="`\\xi(T) = \\sqrt{\\frac{\\hbar^2}{2m^*|\\alpha(T)|}} = \\xi(0)\\left(\\frac{T_c - T}{T_c}\\right)^{-1/2}`"></katex-element>
        
        <div class="physical-meaning">
          <h4>物理意义</h4>
          <ul>
            <li>Cooper对的"尺寸"</li>
            <li>序参量空间关联长度</li>
            <li>超导-正常界面厚度</li>
            <li>涡旋核心尺寸</li>
          </ul>
        </div>
      </div>
      
      <div class="temperature-dependence">
        <h3>温度依赖性</h3>
        
        <div class="near-tc">
          <h4>T ≈ T_c 附近</h4>
          <katex-element :expression="`\\xi(T) = \\xi(0)\\left(1 - \\frac{T}{T_c}\\right)^{-1/2}`"></katex-element>
          
          <div class="divergence">
            <p><strong>发散行为：</strong>当T → T_c时，ξ → ∞</p>
            <p>这反映了临界涨落的长程性质</p>
          </div>
        </div>
        
        <div class="zero-temperature">
          <h4>零温极限</h4>
          <katex-element :expression="`\\xi(0) = \\frac{\\hbar v_F}{\\pi \\Delta(0)} \\approx 0.18 \\frac{\\hbar v_F}{k_B T_c}`"></katex-element>
          <p>与BCS相干长度的关系</p>
        </div>
      </div>
      
      <div class="experimental-values">
        <h3>实验数值</h3>
        <div class="values-table">
          <table>
            <tr><th>材料</th><th>T_c (K)</th><th>ξ(0) (nm)</th><th>类型</th></tr>
            <tr><td>Al</td><td>1.18</td><td>1600</td><td>纯金属</td></tr>
            <tr><td>Sn</td><td>3.72</td><td>230</td><td>纯金属</td></tr>
            <tr><td>Pb</td><td>7.20</td><td>83</td><td>纯金属</td></tr>
            <tr><td>Nb</td><td>9.3</td><td>38</td><td>过渡金属</td></tr>
            <tr><td>NbTi</td><td>9.8</td><td>4</td><td>合金</td></tr>
            <tr><td>Nb₃Sn</td><td>18.3</td><td>3</td><td>A15化合物</td></tr>
            <tr><td>YBCO</td><td>93</td><td>1.5</td><td>高温超导</td></tr>
          </table>
        </div>
      </div>
    </section>

    <section class="gl-parameter">
      <h2>Ginzburg-Landau参数 κ</h2>
      
      <div class="kappa-definition">
        <h3>定义</h3>
        <katex-element :expression="`\\kappa = \\frac{\\lambda}{\\xi}`"></katex-element>
        
        <div class="kappa-expression">
          <h4>显式表达</h4>
          <katex-element :expression="`\\kappa = \\sqrt{\\frac{\\beta}{2\\mu_0\\alpha_0^2}} \\cdot \\frac{e^*}{\\hbar}`"></katex-element>
          
          <div class="material-property">
            <p><strong>材料本征参数：</strong>κ与温度无关，是材料的固有性质</p>
          </div>
        </div>
      </div>
      
      <div class="critical-value">
        <h3>临界值 κ = 1/√2</h3>
        
        <div class="classification">
          <div class="type-i-region">
            <h4>第一类超导体</h4>
            <katex-element :expression="`\\kappa < \\frac{1}{\\sqrt{2}} \\approx 0.707`"></katex-element>
            <ul>
              <li>ξ > λ：相干长度大于穿透深度</li>
              <li>界面能为正</li>
              <li>排斥磁通</li>
              <li>完全Meissner效应</li>
            </ul>
          </div>
          
          <div class="type-ii-region">
            <h4>第二类超导体</h4>
            <katex-element :expression="`\\kappa > \\frac{1}{\\sqrt{2}} \\approx 0.707`"></katex-element>
            <ul>
              <li>λ > ξ：穿透深度大于相干长度</li>
              <li>界面能为负</li>
              <li>吸引磁通</li>
              <li>混合态存在</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="surface-energy">
        <h3>界面能</h3>
        <katex-element :expression="`\\sigma_{ns} = \\frac{\\mu_0 H_c^2}{4\\pi} \\xi \\left(\\frac{1}{\\sqrt{2}} - \\kappa\\right)`"></katex-element>
        
        <div class="energy-analysis">
          <h4>能量分析</h4>
          <div class="energy-components">
            <div class="positive-energy">
              <h5>κ < 1/√2 (第一类)</h5>
              <ul>
                <li>σ_ns > 0：界面能为正</li>
                <li>系统倾向于减少界面</li>
                <li>磁通被排斥</li>
              </ul>
            </div>
            
            <div class="negative-energy">
              <h5>κ > 1/√2 (第二类)</h5>
              <ul>
                <li>σ_ns < 0：界面能为负</li>
                <li>系统倾向于增加界面</li>
                <li>磁通被吸引</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="critical-fields">
      <h2>临界磁场</h2>
      
      <div class="thermodynamic-field">
        <h3>热力学临界磁场</h3>
        <katex-element :expression="`H_c = \\sqrt{\\frac{2|\\alpha|^2}{\\mu_0\\beta}} = \\frac{\\Phi_0}{2\\sqrt{2}\\pi\\lambda\\xi}`"></katex-element>
        
        <div class="hc-meaning">
          <h4>物理意义</h4>
          <p>超导凝聚能与磁场能的平衡点</p>
        </div>
      </div>
      
      <div class="type-ii-fields">
        <h3>第二类超导体的临界磁场</h3>
        
        <div class="lower-critical">
          <h4>下临界磁场 H_c1</h4>
          <katex-element :expression="`H_{c1} = \\frac{\\Phi_0}{4\\pi\\lambda^2} \\ln\\kappa \\quad (\\kappa \\gg 1)`"></katex-element>
          
          <div class="hc1-properties">
            <h5>性质</h5>
            <ul>
              <li>磁通开始穿透的磁场</li>
              <li>与λ⁻²成正比</li>
              <li>对数依赖于κ</li>
            </ul>
          </div>
        </div>
        
        <div class="upper-critical">
          <h4>上临界磁场 H_c2</h4>
          <katex-element :expression="`H_{c2} = \\frac{\\Phi_0}{2\\pi\\xi^2}`"></katex-element>
          
          <div class="hc2-properties">
            <h5>性质</h5>
            <ul>
              <li>超导态完全被破坏的磁场</li>
              <li>与ξ⁻²成正比</li>
              <li>涡旋核心重叠</li>
            </ul>
          </div>
        </div>
        
        <div class="field-relations">
          <h4>磁场关系</h4>
          <katex-element :expression="`\\frac{H_{c2}}{H_{c1}} = \\frac{2\\kappa^2}{\\ln\\kappa}`"></katex-element>
          <katex-element :expression="`H_c = \\sqrt{H_{c1} H_{c2} \\ln\\kappa}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="material-parameters">
      <h2>材料参数的关系</h2>
      
      <div class="microscopic-connection">
        <h3>与微观参数的联系</h3>
        
        <div class="bcs-relation">
          <h4>BCS理论关系</h4>
          <katex-element :expression="`\\xi_{BCS} = \\frac{\\hbar v_F}{\\pi \\Delta} \\approx 0.18 \\frac{\\hbar v_F}{k_B T_c}`"></katex-element>
          <katex-element :expression="`\\lambda_{London} = \\sqrt{\\frac{m}{\\mu_0 n_s e^2}}`"></katex-element>
          
          <div class="clean-limit">
            <h5>洁净极限</h5>
            <p>ξ_GL ≈ ξ_BCS，λ_GL ≈ λ_London</p>
          </div>
        </div>
        
        <div class="dirty-limit">
          <h4>脏极限 (l ≪ ξ_0)</h4>
          <katex-element :expression="`\\xi_{dirty} = \\sqrt{\\xi_0 l} = \\sqrt{\\frac{\\hbar D}{\\Delta}}`"></katex-element>
          <katex-element :expression="`\\lambda_{dirty} = \\lambda_0 \\sqrt{\\frac{\\xi_0}{l}}`"></katex-element>
          
          <div class="diffusion">
            <p>其中D = v_F l/3是扩散系数</p>
          </div>
        </div>
      </div>
      
      <div class="pippard-coherence">
        <h3>Pippard相干长度</h3>
        <katex-element :expression="`\\xi_P = \\frac{\\hbar v_F}{\\pi \\Delta} \\approx 0.18 \\frac{\\hbar v_F}{k_B T_c}`"></katex-element>
        
        <div class="pippard-vs-gl">
          <h4>与GL相干长度的关系</h4>
          <ul>
            <li>洁净极限：ξ_GL ≈ ξ_P</li>
            <li>脏极限：ξ_GL < ξ_P</li>
            <li>杂质散射的影响</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="experimental-determination">
      <h2>实验测定方法</h2>
      
      <div class="measurement-techniques">
        <div class="technique-card">
          <h3>磁化测量</h3>
          <ul>
            <li>H_c1测定：磁通穿透</li>
            <li>H_c2测定：电阻转变</li>
            <li>可逆磁化</li>
          </ul>
          <div class="formula">
            <katex-element :expression="`\\kappa = \\sqrt{\\frac{H_{c2}}{H_{c1} \\ln\\kappa}}`"></katex-element>
          </div>
        </div>
        
        <div class="technique-card">
          <h3>比热测量</h3>
          <ul>
            <li>相变跳跃</li>
            <li>涨落效应</li>
            <li>临界指数</li>
          </ul>
        </div>
        
        <div class="technique-card">
          <h3>隧道谱学</h3>
          <ul>
            <li>能隙测量</li>
            <li>态密度</li>
            <li>相干峰</li>
          </ul>
        </div>
        
        <div class="technique-card">
          <h3>中子散射</h3>
          <ul>
            <li>磁通格子</li>
            <li>穿透深度</li>
            <li>各向异性</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>应用与意义</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>材料设计</h3>
          <ul>
            <li>优化κ值</li>
            <li>提高H_c2</li>
            <li>改善载流能力</li>
            <li>钉扎中心设计</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>器件应用</h3>
          <ul>
            <li>约瑟夫森结</li>
            <li>超导量子比特</li>
            <li>磁通量子器件</li>
            <li>超导电子学</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>基础研究</h3>
          <ul>
            <li>相变理论</li>
            <li>临界现象</li>
            <li>涨落效应</li>
            <li>维度效应</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>相干长度ξ描述序参量空间变化的特征尺度</li>
          <li>GL参数κ = λ/ξ是材料的本征参数</li>
          <li>κ = 1/√2是区分第一类和第二类超导体的临界值</li>
          <li>界面能的正负由κ值决定，影响磁通行为</li>
          <li>临界磁场与特征长度密切相关</li>
          <li>杂质散射影响相干长度和穿透深度</li>
          <li>实验可通过多种方法测定这些参数</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_3_3',
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
  border-bottom: 3px solid #9b59b6;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #9b59b6;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.length-scales-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.scales-comparison {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.scale-card {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.coherence {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  color: #2d3436;
}

.penetration {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2d3436;
}

.xi-definition {
  background: #f0fff4;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c6f6d5;
  margin: 20px 0;
}

.physical-meaning {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #27ae60;
}

.temperature-dependence {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.near-tc,
.zero-temperature {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.near-tc {
  border-left: 4px solid #e53e3e;
}

.zero-temperature {
  border-left: 4px solid #3182ce;
}

.divergence {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-style: italic;
}

.values-table {
  overflow-x: auto;
  margin: 15px 0;
}

.values-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.values-table th,
.values-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.values-table th {
  background: #9b59b6;
  color: white;
  font-weight: bold;
}

.values-table tr:hover {
  background: #f8f9fa;
}

.kappa-definition {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6c757d;
  margin: 20px 0;
}

.kappa-expression {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #6c757d;
}

.material-property {
  background: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.classification {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.type-i-region,
.type-ii-region {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.type-i-region {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
}

.type-ii-region {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.surface-energy {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.energy-components {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
}

.positive-energy,
.negative-energy {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
}

.thermodynamic-field {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.hc-meaning {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.lower-critical,
.upper-critical,
.field-relations {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #007bff;
}

.hc1-properties,
.hc2-properties {
  background: #f8f9fa;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.microscopic-connection {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #b3d9ff;
  margin: 20px 0;
}

.bcs-relation,
.dirty-limit {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #2196f3;
}

.clean-limit,
.diffusion {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.pippard-coherence {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.pippard-vs-gl {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #e53e3e;
}

.measurement-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.technique-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.formula {
  background: rgba(255,255,255,0.8);
  padding: 10px;
  border-radius: 5px;
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
  border: 2px solid #9b59b6;
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
  border-left: 4px solid #9b59b6;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .scales-comparison,
  .classification,
  .energy-components,
  .measurement-techniques,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>