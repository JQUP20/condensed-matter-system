<template>
  <div class="chapter-content">
    <header class="chapter-header">
      <h1>16.1.2 约束条件</h1>
      <p class="chapter-subtitle">确保隶粒子表示的物理正确性：约束的数学表述与物理意义</p>
    </header>

    <section class="content-section">
      <h2>🎯 约束的必要性</h2>
      <div class="necessity-grid">
        <div class="necessity-card">
          <div class="necessity-icon">⚠️</div>
          <h3>希尔伯特空间扩大问题</h3>
          <div class="problem-description">
            <p><strong>问题根源：</strong>隶粒子分解引入了额外的自由度</p>
            <div class="mathematical-content">
              <h4>原始电子态空间：</h4>
              <katex-element expression="|0\rangle, |\uparrow\rangle, |\downarrow\rangle, |\uparrow\downarrow\rangle"></katex-element>
              <p>每个格点4种可能态</p>
              
              <h4>隶粒子态空间：</h4>
              <katex-element expression="|n_f, n_b\rangle \text{ 其中 } n_f, n_b \in \{0,1,2,\ldots\}"></katex-element>
              <p>无限维态空间！</p>
            </div>
          </div>
        </div>

        <div class="necessity-card">
          <div class="necessity-icon">🔒</div>
          <h3>物理态的选择</h3>
          <div class="problem-description">
            <p><strong>核心问题：</strong>如何从扩大的态空间中选出物理相关的态</p>
            <div class="constraint-preview">
              <h4>基本思路：</h4>
              <ul>
                <li>引入约束条件限制态空间</li>
                <li>确保隶粒子态与电子态一一对应</li>
                <li>保持原有的物理对称性</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>📐 基本约束条件</h2>
      
      <div class="constraint-block">
        <h3>粒子数约束</h3>
        <div class="mathematical-content">
          <h4>基本约束：</h4>
          <katex-element expression="\sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i = 1"></katex-element>
          
          <div class="constraint-explanation">
            <h4>物理意义：</h4>
            <div class="explanation-grid">
              <div class="explanation-item">
                <h5>左边项：</h5>
                <p>f†f：费米子占据数（自旋激发）</p>
                <p>b†b：玻色子占据数（电荷激发）</p>
              </div>
              
              <div class="explanation-item">
                <h5>约束含义：</h5>
                <p>每个格点上的总"粒子数"为1</p>
                <p>对应原始电子的4种可能态</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="constraint-block">
        <h3>态的对应关系</h3>
        <div class="mathematical-content">
          <div class="state-mapping">
            <h4>物理态映射：</h4>
            <div class="mapping-table">
              <div class="mapping-row">
                <div class="electron-state">
                  <h5>电子态</h5>
                  <katex-element expression="|0\rangle"></katex-element>
                </div>
                <div class="arrow">→</div>
                <div class="slave-state">
                  <h5>隶粒子态</h5>
                  <katex-element expression="|0_f, 1_b\rangle"></katex-element>
                </div>
                <div class="description">空格点：只有玻色子</div>
              </div>
              
              <div class="mapping-row">
                <div class="electron-state">
                  <katex-element expression="|\uparrow\rangle"></katex-element>
                </div>
                <div class="arrow">→</div>
                <div class="slave-state">
                  <katex-element expression="|1_{f\uparrow}, 0_b\rangle"></katex-element>
                </div>
                <div class="description">上自旋电子：只有费米子</div>
              </div>
              
              <div class="mapping-row">
                <div class="electron-state">
                  <katex-element expression="|\downarrow\rangle"></katex-element>
                </div>
                <div class="arrow">→</div>
                <div class="slave-state">
                  <katex-element expression="|1_{f\downarrow}, 0_b\rangle"></katex-element>
                </div>
                <div class="description">下自旋电子：只有费米子</div>
              </div>
              
              <div class="mapping-row">
                <div class="electron-state">
                  <katex-element expression="|\uparrow\downarrow\rangle"></katex-element>
                </div>
                <div class="arrow">→</div>
                <div class="slave-state">
                  <katex-element expression="|1_{f\uparrow}1_{f\downarrow}, 0_b\rangle"></katex-element>
                </div>
                <div class="description">双占据：两个费米子</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔧 约束的实施方法</h2>
      
      <div class="implementation-grid">
        <div class="method-card">
          <div class="method-icon">🎭</div>
          <h3>拉格朗日乘数法</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>修正的哈密顿量：</h4>
              <katex-element expression="H_{eff} = H_{slave} + \sum_i \lambda_i \left(\sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i - 1\right)"></katex-element>
              
              <h4>拉格朗日乘数的意义：</h4>
              <div class="equation-block">
                <p>λᵢ：格点i上的化学势</p>
                <p>强制约束条件的满足</p>
                <p>需要自洽确定其值</p>
              </div>
            </div>
          </div>
        </div>

        <div class="method-card">
          <div class="method-icon">🌊</div>
          <h3>规范场方法</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>规范场的引入：</h4>
              <katex-element expression="c_{i\sigma} = e^{i\theta_i} f_{i\sigma} b_i^\dagger"></katex-element>
              
              <h4>规范变换：</h4>
              <katex-element expression="f_{i\sigma} \to e^{i\alpha_i} f_{i\sigma}"></katex-element>
              <katex-element expression="b_i \to e^{-i\alpha_i} b_i"></katex-element>
              <katex-element expression="\theta_i \to \theta_i + \alpha_i"></katex-element>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🎪 平均场近似</h2>
      
      <div class="mean-field-container">
        <h3>约束的平均场处理</h3>
        <div class="mathematical-content">
          <h4>约束条件的期望值：</h4>
          <katex-element expression="\langle \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i \rangle = 1"></katex-element>
          
          <h4>平均场假设：</h4>
          <div class="mean-field-assumptions">
            <div class="assumption-item">
              <h5>玻色子凝聚：</h5>
              <katex-element expression="\langle b_i \rangle = b_0 \neq 0"></katex-element>
              <p>玻色子形成凝聚态</p>
            </div>
            
            <div class="assumption-item">
              <h5>费米子期望：</h5>
              <katex-element expression="\langle f_{i\sigma}^\dagger f_{i\sigma} \rangle = n_{f\sigma}"></katex-element>
              <p>费米子占据数的平均值</p>
            </div>
          </div>
          
          <h4>简化的约束：</h4>
          <katex-element expression="\sum_\sigma n_{f\sigma} + |b_0|^2 = 1"></katex-element>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔍 物理图像与解释</h2>
      
      <div class="physics-insight-grid">
        <div class="insight-card">
          <h3>🎯 约束的物理含义</h3>
          <div class="insight-content">
            <p><strong>核心思想：</strong>约束确保了电荷和自旋激发的互补性</p>
            <div class="example-box">
              <h4>物理图像：</h4>
              <ul>
                <li><strong>空格点：</strong>只能有电荷激发（玻色子）</li>
                <li><strong>单占据：</strong>只能有自旋激发（费米子）</li>
                <li><strong>双占据：</strong>两个自旋激发，无电荷激发</li>
                <li><strong>互补原理：</strong>电荷与自旋激发不能同时存在</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="insight-card">
          <h3>⚡ 规范不变性的萌芽</h3>
          <div class="insight-content">
            <p><strong>重要发现：</strong>约束的实施自然导致规范对称性</p>
            <div class="example-box">
              <h4>规范变换的物理意义：</h4>
              <ul>
                <li><strong>局域相位：</strong>每个格点独立的相位选择</li>
                <li><strong>物理等价：</strong>不同规范选择描述相同物理</li>
                <li><strong>冗余自由度：</strong>规范场消除非物理态</li>
                <li><strong>拓扑效应：</strong>规范场的非平凡配置</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚠️ 技术挑战与解决方案</h2>
      
      <div class="challenge-grid">
        <div class="challenge-card">
          <h3>🚨 挑战1：约束的强制实施</h3>
          <div class="challenge-content">
            <p><strong>问题：</strong>如何在所有能标上严格满足约束</p>
            <div class="solution-box">
              <h4>解决方案：</h4>
              <ul>
                <li>拉格朗日乘数的自洽求解</li>
                <li>投影算符方法</li>
                <li>路径积分中的δ函数约束</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="challenge-card">
          <h3>🎭 挑战2：规范选择的任意性</h3>
          <div class="challenge-content">
            <p><strong>问题：</strong>不同规范选择可能导致不同结果</p>
            <div class="solution-box">
              <h4>解决方案：</h4>
              <ul>
                <li>规范不变量的识别</li>
                <li>物理可观测量的规范无关性</li>
                <li>适当规范的选择策略</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔗 与规范理论的联系</h2>
      <div class="connection-box">
        <h3>通向规范场理论</h3>
        <p>约束条件的实施自然地引入了规范场，这为下一章节的规范理论奠定了基础。</p>
        
        <div class="preview-topics">
          <h4>即将在16.2中学习：</h4>
          <ul>
            <li>规范场的系统性引入</li>
            <li>规范不变性的深入理解</li>
            <li>规范场动力学</li>
            <li>拓扑激发与规范场</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>📚 本节总结</h2>
      <div class="summary-container">
        <div class="summary-points">
          <div class="point-item">
            <div class="point-number">1</div>
            <div class="point-content">
              <h4>约束必要性</h4>
              <p>限制扩大的希尔伯特空间到物理相关部分</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">2</div>
            <div class="point-content">
              <h4>基本约束</h4>
              <p>∑σf†σfσ + b†b = 1 确保粒子数守恒</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">3</div>
            <div class="point-content">
              <h4>实施方法</h4>
              <p>拉格朗日乘数法和规范场方法</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">4</div>
            <div class="point-content">
              <h4>规范对称性</h4>
              <p>约束实施自然导致规范不变性</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter16_1_2',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-bottom: 2px solid #e3f2fd;
}

.chapter-header h1 {
  font-size: 2.5rem;
  color: #1565c0;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #546e7a;
  font-style: italic;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  color: #1976d2;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bbdefb;
}

.necessity-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.necessity-card {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #ff9800;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.necessity-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.necessity-card h3 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.problem-description p {
  margin-bottom: 1rem;
}

.mathematical-content {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.mathematical-content h4 {
  color: #424242;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.constraint-preview {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.constraint-preview h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
}

.constraint-preview ul {
  list-style: none;
  padding: 0;
}

.constraint-preview li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.constraint-preview li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ff9800;
}

.constraint-block {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #4caf50;
}

.constraint-block h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.constraint-explanation {
  margin-top: 1.5rem;
}

.explanation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.explanation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.explanation-item h5 {
  color: #388e3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.state-mapping {
  margin-top: 1rem;
}

.mapping-table {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mapping-row {
  display: grid;
  grid-template-columns: 1fr auto 1fr 2fr;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.electron-state, .slave-state {
  text-align: center;
}

.electron-state h5, .slave-state h5 {
  color: #2e7d32;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.arrow {
  font-size: 1.5rem;
  color: #4caf50;
  font-weight: bold;
}

.description {
  color: #546e7a;
  font-size: 0.9rem;
  font-style: italic;
}

.implementation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.method-card {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #9c27b0;
}

.method-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.method-card h3 {
  color: #6a1b9a;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #9c27b0;
  margin: 1rem 0;
}

.mean-field-container {
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #009688;
}

.mean-field-container h3 {
  color: #00695c;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.mean-field-assumptions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.assumption-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.assumption-item h5 {
  color: #00796b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.physics-insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.insight-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #2196f3;
}

.insight-card h3 {
  color: #0d47a1;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.insight-content p {
  margin-bottom: 1rem;
}

.example-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.example-box h4 {
  color: #1565c0;
  margin-bottom: 1rem;
}

.example-box ul {
  list-style: none;
  padding: 0;
}

.example-box li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.example-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #2196f3;
}

.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.challenge-card {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #ffc107;
}

.challenge-card h3 {
  color: #f57f17;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.challenge-content p {
  margin-bottom: 1rem;
}

.solution-box {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.solution-box h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
}

.solution-box ul {
  list-style: none;
  padding: 0;
}

.solution-box li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.solution-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ffc107;
}

.connection-box {
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #8bc34a;
}

.connection-box h3 {
  color: #33691e;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.preview-topics {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.preview-topics h4 {
  color: #689f38;
  margin-bottom: 1rem;
}

.preview-topics ul {
  list-style: none;
  padding: 0;
}

.preview-topics li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.preview-topics li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #8bc34a;
}

.summary-container {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #607d8b;
}

.summary-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: #607d8b;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-content h4 {
  color: #37474f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.point-content p {
  color: #546e7a;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 0 1rem;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .necessity-grid,
  .implementation-grid,
  .physics-insight-grid,
  .challenge-grid {
    grid-template-columns: 1fr;
  }
  
  .explanation-grid,
  .mean-field-assumptions,
  .summary-points {
    grid-template-columns: 1fr;
  }
  
  .mapping-row {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
}
</style>