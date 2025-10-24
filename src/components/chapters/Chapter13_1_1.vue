<template>
  <div class="chapter-content">
    <h1>13.1.1 超导的发现与基本现象</h1>
    
    <section class="discovery-history">
      <h2>超导现象的发现</h2>
      
      <div class="historical-timeline">
        <div class="timeline-item">
          <h3>1911年 - Kamerlingh Onnes的发现</h3>
          <p>荷兰物理学家海克·卡末林·昂内斯(Heike Kamerlingh Onnes)在研究汞的电阻随温度变化时，发现在4.2K时汞的电阻突然降为零。</p>
          <div class="highlight-box">
            <p><strong>历史意义：</strong>这是人类首次观察到超导现象，开启了超导物理学的新纪元。</p>
          </div>
        </div>
        
        <div class="timeline-item">
          <h3>临界温度的概念</h3>
          <p>超导转变温度<katex-element :expression="`T_c`"></katex-element>：材料从正常态转变为超导态的特征温度。</p>
          <katex-element :expression="`T_c(\\text{Hg}) = 4.15\\text{K}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="basic-properties">
      <h2>超导的基本性质</h2>
      
      <div class="property-grid">
        <div class="property-card">
          <h3>1. 零电阻现象</h3>
          <p>在超导态下，材料的直流电阻完全消失：</p>
          <katex-element :expression="`\\rho = 0 \\quad (T < T_c)`"></katex-element>
          
          <div class="experimental-evidence">
            <h4>实验证据</h4>
            <ul>
              <li>持续电流实验：超导环中的电流可以持续数年不衰减</li>
              <li>电阻测量精度：<katex-element :expression="`\\rho < 10^{-23} \\Omega\\cdot\\text{cm}`"></katex-element></li>
            </ul>
          </div>
        </div>
        
        <div class="property-card">
          <h3>2. 完全抗磁性</h3>
          <p>超导体排斥磁场，表现为完全抗磁性：</p>
          <katex-element :expression="`\\chi = -\\frac{1}{4\\pi} \\quad (\\text{CGS单位})`"></katex-element>
          <katex-element :expression="`\\chi = -1 \\quad (\\text{SI单位})`"></katex-element>
          
          <div class="meissner-explanation">
            <p><strong>Meissner效应：</strong>这不仅仅是零电阻的结果，而是超导体的本征性质。</p>
          </div>
        </div>
      </div>
    </section>

    <section class="thermodynamic-properties">
      <h2>热力学性质</h2>
      
      <h3>相变特征</h3>
      <p>超导相变通常是二级相变，具有以下特征：</p>
      
      <div class="phase-transition-properties">
        <div class="property-item">
          <h4>比热跳跃</h4>
          <p>在<katex-element :expression="`T_c`"></katex-element>处比热发生跳跃：</p>
          <katex-element :expression="`\\Delta C = C_s(T_c) - C_n(T_c)`"></katex-element>
          <p>其中<katex-element :expression="`C_s`"></katex-element>和<katex-element :expression="`C_n`"></katex-element>分别是超导态和正常态的比热。</p>
        </div>
        
        <div class="property-item">
          <h4>熵的连续性</h4>
          <p>熵在相变点连续，但其导数不连续：</p>
          <katex-element :expression="`S_s(T_c) = S_n(T_c)`"></katex-element>
          <katex-element :expression="`\\frac{dS_s}{dT}\\bigg|_{T_c} \\neq \\frac{dS_n}{dT}\\bigg|_{T_c}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="isotope-effect">
      <h2>同位素效应</h2>
      
      <p>1950年发现的重要现象：超导转变温度与同位素质量的关系。</p>
      
      <div class="isotope-law">
        <h3>同位素效应定律</h3>
        <katex-element :expression="`T_c \\propto M^{-\\alpha}`"></katex-element>
        
        <p>其中：</p>
        <ul>
          <li><katex-element :expression="`M`"></katex-element>：同位素质量</li>
          <li><katex-element :expression="`\\alpha \\approx 0.5`"></katex-element>：同位素效应指数</li>
        </ul>
        
        <div class="isotope-examples">
          <h4>实验例子</h4>
          <div class="data-table">
            <table>
              <tr><th>材料</th><th>同位素</th><th>T_c (K)</th></tr>
              <tr><td>汞</td><td>^{199}Hg</td><td>4.161</td></tr>
              <tr><td>汞</td><td>^{203}Hg</td><td>4.126</td></tr>
              <tr><td>锡</td><td>^{116}Sn</td><td>3.722</td></tr>
              <tr><td>锡</td><td>^{124}Sn</td><td>3.695</td></tr>
            </table>
          </div>
        </div>
      </div>
      
      <div class="theoretical-significance">
        <h3>理论意义</h3>
        <p>同位素效应表明：</p>
        <ul>
          <li>晶格振动（声子）在超导机制中起关键作用</li>
          <li>电子-声子相互作用是超导配对的基础</li>
          <li>为BCS理论提供了重要的实验支持</li>
        </ul>
      </div>
    </section>

    <section class="classification">
      <h2>超导体的分类</h2>
      
      <div class="classification-grid">
        <div class="classification-item">
          <h3>按发现时间分类</h3>
          <ul>
            <li><strong>常规超导体：</strong>1911-1986年发现的超导体</li>
            <li><strong>高温超导体：</strong>1986年后发现的铜氧化物超导体</li>
            <li><strong>铁基超导体：</strong>2008年发现的新型超导体系</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h3>按临界温度分类</h3>
          <ul>
            <li><strong>低温超导体：</strong><katex-element :expression="`T_c < 30\\text{K}`"></katex-element></li>
            <li><strong>高温超导体：</strong><katex-element :expression="`T_c > 30\\text{K}`"></katex-element></li>
            <li><strong>室温超导体：</strong><katex-element :expression="`T_c \\sim 300\\text{K}`"></katex-element>（高压下实现）</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications-preview">
      <h2>应用前景</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>能源应用</h3>
          <ul>
            <li>无损耗输电线</li>
            <li>超导储能系统(SMES)</li>
            <li>超导发电机</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>交通运输</h3>
          <ul>
            <li>磁悬浮列车</li>
            <li>超导电机</li>
            <li>磁悬浮轴承</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>科学研究</h3>
          <ul>
            <li>核磁共振(MRI)</li>
            <li>粒子加速器磁体</li>
            <li>量子计算</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>超导现象于1911年被Onnes发现，表现为零电阻和完全抗磁性</li>
          <li>超导相变通常是二级相变，伴随比热跳跃</li>
          <li>同位素效应揭示了声子在超导机制中的重要作用</li>
          <li>超导体按发现时间和临界温度可进行不同分类</li>
          <li>超导技术在能源、交通、科研等领域具有广阔应用前景</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_1_1',
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
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.historical-timeline {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.timeline-item {
  margin-bottom: 20px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.highlight-box {
  background: #e8f4f8;
  border-left: 4px solid #3498db;
  padding: 15px;
  margin: 15px 0;
  border-radius: 5px;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #e9ecef;
}

.experimental-evidence {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.meissner-explanation {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.phase-transition-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.property-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.isotope-law {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.isotope-examples {
  background: rgba(255,255,255,0.1);
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
}

.data-table th,
.data-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #ddd;
  color: #333;
}

.data-table th {
  background: #3498db;
  color: white;
  font-weight: bold;
}

.theoretical-significance {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.classification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.classification-item {
  background: #f1f3f4;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #ff6b6b;
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
  border: 2px solid #3498db;
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
  border-left: 4px solid #3498db;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .property-grid,
  .phase-transition-properties,
  .classification-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>