<template>
  <div class="chapter-content">
    <h1>13.2.2 穿透深度</h1>
    
    <section class="introduction">
      <h2>穿透深度的概念</h2>
      
      <div class="concept-definition">
        <h3>定义</h3>
        <p>磁场穿透深度λ是描述磁场在超导体表面衰减特征长度的物理量：</p>
        <katex-element :expression="`B(x) = B_0 e^{-x/\\lambda}`"></katex-element>
        
        <div class="physical-meaning">
          <h4>物理意义</h4>
          <ul>
            <li>磁场在距离λ处衰减至表面值的1/e</li>
            <li>表征超导体排斥磁场的能力</li>
            <li>决定超导体的电磁响应特性</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="london-penetration">
      <h2>London穿透深度</h2>
      
      <div class="london-formula">
        <h3>基本公式</h3>
        <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{mc^2}{4\\pi n_s e^2}} \\quad (\\text{CGS})`"></katex-element>
        <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{m}{\\mu_0 n_s e^2}} \\quad (\\text{SI})`"></katex-element>
        
        <div class="parameter-analysis">
          <h4>参数依赖性</h4>
          <ul>
            <li><katex-element :expression="`\\lambda_L \\propto n_s^{-1/2}`"></katex-element>：与超导电子密度成反比</li>
            <li><katex-element :expression="`\\lambda_L \\propto m^{1/2}`"></katex-element>：与有效质量成正比</li>
            <li>与材料的微观参数密切相关</li>
          </ul>
        </div>
      </div>
      
      <div class="typical-values">
        <h3>典型数值</h3>
        <div class="data-table">
          <table>
            <thead>
              <tr><th>材料</th><th>λ_L (nm)</th><th>T_c (K)</th><th>类型</th></tr>
            </thead>
            <tbody>
              <tr><td>Al</td><td>50</td><td>1.2</td><td>s波</td></tr>
              <tr><td>Sn</td><td>34</td><td>3.7</td><td>s波</td></tr>
              <tr><td>Pb</td><td>37</td><td>7.2</td><td>s波</td></tr>
              <tr><td>Nb</td><td>39</td><td>9.3</td><td>s波</td></tr>
              <tr><td>YBCO</td><td>150</td><td>93</td><td>d波</td></tr>
              <tr><td>BSCCO</td><td>200</td><td>85</td><td>d波</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="temperature-dependence">
      <h2>温度依赖性</h2>
      
      <div class="two-fluid-model">
        <h3>双流体模型</h3>
        <p>超导电子密度随温度变化：</p>
        <katex-element :expression="`n_s(T) = n_s(0)\\left[1 - \\left(\\frac{T}{T_c}\\right)^4\\right]`"></katex-element>
        
        <p>因此穿透深度为：</p>
        <katex-element :expression="`\\lambda(T) = \\frac{\\lambda(0)}{\\sqrt{1 - (T/T_c)^4}}`"></katex-element>
        
        <div class="critical-behavior">
          <h4>临界行为</h4>
          <p>当<katex-element :expression="`T \\to T_c`"></katex-element>时：</p>
          <katex-element :expression="`\\lambda(T) \\to \\infty`"></katex-element>
          <p>这反映了超导态的消失。</p>
        </div>
      </div>
      
      <div class="bcs-prediction">
        <h3>BCS理论预测</h3>
        <p>在BCS理论框架下：</p>
        <katex-element :expression="`\\lambda(T) = \\lambda(0)\\left[1 + 2\\int_{\\Delta(T)}^{\\infty} \\frac{\\partial f}{\\partial E} dE\\right]^{-1/2}`"></katex-element>
        
        <div class="low-temperature">
          <h4>低温极限</h4>
          <p>当<katex-element :expression="`T \\ll T_c`"></katex-element>时：</p>
          <katex-element :expression="`\\lambda(T) \\approx \\lambda(0)\\left[1 + \\sqrt{\\frac{2\\pi\\Delta(0)}{k_BT}}e^{-\\Delta(0)/k_BT}\\right]`"></katex-element>
        </div>
      </div>
    </section>

    <section class="measurement-techniques">
      <h2>测量技术</h2>
      
      <div class="measurement-methods">
        <div class="method-card">
          <h3>μSR (缪子自旋旋转)</h3>
          <ul>
            <li>高精度测量技术</li>
            <li>可探测内部磁场分布</li>
            <li>适用于各种超导体</li>
          </ul>
          <div class="principle">
            <p><strong>原理：</strong>缪子在磁场中的进动频率</p>
          </div>
        </div>
        
        <div class="method-card">
          <h3>射频技术</h3>
          <ul>
            <li>表面阻抗测量</li>
            <li>频率依赖研究</li>
            <li>非接触测量</li>
          </ul>
          <div class="principle">
            <p><strong>原理：</strong>电磁场的表面衰减</p>
          </div>
        </div>
        
        <div class="method-card">
          <h3>中子散射</h3>
          <ul>
            <li>磁通格子研究</li>
            <li>各向异性测量</li>
            <li>温度依赖性</li>
          </ul>
          <div class="principle">
            <p><strong>原理：</strong>中子与磁矩的相互作用</p>
          </div>
        </div>
      </div>
    </section>

    <section class="anisotropy">
      <h2>各向异性效应</h2>
      
      <div class="anisotropic-materials">
        <h3>各向异性超导体</h3>
        <p>在各向异性材料中，穿透深度具有方向性：</p>
        <katex-element :expression="`\\lambda_{ab}, \\lambda_c`"></katex-element>
        
        <div class="layered-superconductors">
          <h4>层状超导体</h4>
          <p>如铜氧化物高温超导体：</p>
          <ul>
            <li><katex-element :expression="`\\lambda_{ab}`"></katex-element>：面内穿透深度</li>
            <li><katex-element :expression="`\\lambda_c`"></katex-element>：面间穿透深度</li>
            <li><katex-element :expression="`\\lambda_c \\gg \\lambda_{ab}`"></katex-element></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>应用与意义</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>器件设计</h3>
          <ul>
            <li>超导薄膜厚度优化</li>
            <li>约瑟夫森结设计</li>
            <li>微波器件参数</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>材料表征</h3>
          <ul>
            <li>超导电子密度测定</li>
            <li>配对机制研究</li>
            <li>杂质效应分析</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>基础研究</h3>
          <ul>
            <li>超导机制验证</li>
            <li>相变行为研究</li>
            <li>量子临界现象</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>穿透深度λ描述磁场在超导体中的衰减特征长度</li>
          <li>London穿透深度与超导电子密度和有效质量相关</li>
          <li>温度依赖性反映了超导态的热力学性质</li>
          <li>多种实验技术可精确测量穿透深度</li>
          <li>各向异性材料中穿透深度具有方向性</li>
          <li>在器件设计和基础研究中具有重要意义</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_2_2',
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
  border-bottom: 3px solid #8e44ad;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #8e44ad;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.concept-definition {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.physical-meaning {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.london-formula {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #8e44ad;
  margin: 20px 0;
}

.parameter-analysis {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
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
  background: #8e44ad;
  color: white;
  font-weight: bold;
}

.data-table tr:hover {
  background: #f8f9fa;
}

.two-fluid-model {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.critical-behavior {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.bcs-prediction {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.low-temperature {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.measurement-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.method-card {
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

.anisotropic-materials {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.layered-superconductors {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #e53e3e;
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
  border: 2px solid #8e44ad;
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
  border-left: 4px solid #8e44ad;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .measurement-methods,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>