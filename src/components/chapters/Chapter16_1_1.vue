<template>
  <div class="chapter-content">
    <header class="chapter-header">
      <h1>16.1.1 电子的分解</h1>
      <p class="chapter-subtitle">隶粒子方法的核心思想：将电子分解为更基本的组成部分</p>
    </header>

    <section class="content-section">
      <h2>🔬 基本概念</h2>
      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-icon">⚛️</div>
          <h3>电子的复杂性</h3>
          <p>在强关联系统中，电子同时携带电荷和自旋，导致复杂的多体相互作用</p>
          <div class="mathematical-content">
            <h4>传统电子算符：</h4>
            <katex-element expression="c_{i\sigma} = \text{湮灭格点 } i \text{ 上自旋 } \sigma \text{ 的电子}"></katex-element>
            <p>包含了电荷和自旋的完整信息</p>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🧩</div>
          <h3>分解的动机</h3>
          <p>将电子的电荷和自旋自由度分离，简化强关联问题的处理</p>
          <div class="mathematical-content">
            <h4>物理图像：</h4>
            <div class="equation-block">
              <p>电子 = 电荷载流子 + 自旋载流子</p>
              <p>复杂相互作用 → 简单有效理论</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>📐 数学表述</h2>
      
      <div class="theory-block">
        <h3>隶粒子分解</h3>
        <div class="mathematical-content">
          <h4>基本分解公式：</h4>
          <katex-element expression="c_{i\sigma} = f_{i\sigma} b_i^\dagger"></katex-element>
          
          <div class="explanation-grid">
            <div class="explanation-item">
              <h4>费米子部分 f_{i,σ}</h4>
              <ul>
                <li>携带自旋信息</li>
                <li>满足费米统计</li>
                <li>描述自旋激发</li>
              </ul>
            </div>
            
            <div class="explanation-item">
              <h4>玻色子部分 b_i†</h4>
              <ul>
                <li>携带电荷信息</li>
                <li>满足玻色统计</li>
                <li>描述电荷激发</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="theory-block">
        <h3>反交换关系</h3>
        <div class="mathematical-content">
          <h4>费米子算符：</h4>
          <katex-element expression="\{f_{i\sigma}, f_{j\sigma'}^\dagger\} = \delta_{ij}\delta_{\sigma\sigma'}"></katex-element>
          <katex-element expression="\{f_{i\sigma}, f_{j\sigma'}\} = 0"></katex-element>
          
          <h4>玻色子算符：</h4>
          <katex-element expression="[b_i, b_j^\dagger] = \delta_{ij}"></katex-element>
          <katex-element expression="[b_i, b_j] = 0"></katex-element>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🎯 物理意义</h2>
      
      <div class="physics-insight-grid">
        <div class="insight-card">
          <h3>🔋 电荷-自旋分离</h3>
          <div class="insight-content">
            <p><strong>核心思想：</strong>电子的电荷和自旋可以独立激发</p>
            <div class="example-box">
              <h4>物理图像：</h4>
              <ul>
                <li>电荷激发：空穴-粒子对的产生</li>
                <li>自旋激发：自旋翻转而不改变电荷</li>
                <li>独立传播：不同的色散关系</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="insight-card">
          <h3>⚡ 有效理论</h3>
          <div class="insight-content">
            <p><strong>优势：</strong>将复杂的电子-电子相互作用转化为简单的有效相互作用</p>
            <div class="example-box">
              <h4>应用领域：</h4>
              <ul>
                <li>高温超导体理论</li>
                <li>量子自旋液体</li>
                <li>重费米子系统</li>
                <li>分数量子霍尔效应</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔍 具体例子</h2>
      
      <div class="example-container">
        <h3>Hubbard模型中的应用</h3>
        <div class="mathematical-content">
          <h4>原始Hubbard哈密顿量：</h4>
          <katex-element expression="H = -t\sum_{\langle i,j\rangle,\sigma} c_{i\sigma}^\dagger c_{j\sigma} + U\sum_i n_{i\uparrow}n_{i\downarrow}"></katex-element>
          
          <h4>隶粒子表示：</h4>
          <katex-element expression="c_{i\sigma} = f_{i\sigma} b_i^\dagger"></katex-element>
          <katex-element expression="n_{i\sigma} = f_{i\sigma}^\dagger f_{i\sigma} b_i^\dagger b_i"></katex-element>
          
          <h4>变换后的哈密顿量：</h4>
          <katex-element expression="H = -t\sum_{\langle i,j\rangle,\sigma} f_{i\sigma}^\dagger f_{j\sigma} b_i b_j^\dagger + U\sum_i f_{i\uparrow}^\dagger f_{i\uparrow} f_{i\downarrow}^\dagger f_{i\downarrow} (b_i^\dagger b_i)^2"></katex-element>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚠️ 重要注意事项</h2>
      
      <div class="warning-box">
        <h3>🚨 希尔伯特空间扩大</h3>
        <div class="warning-content">
          <p><strong>问题：</strong>隶粒子分解引入了额外的自由度，希尔伯特空间变大</p>
          <div class="solution-box">
            <h4>解决方案：</h4>
            <ul>
              <li>引入约束条件限制物理态</li>
              <li>使用拉格朗日乘数方法</li>
              <li>规范场理论的自然出现</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="warning-box">
        <h3>🎯 约束的必要性</h3>
        <div class="warning-content">
          <p><strong>核心：</strong>必须确保隶粒子态对应于物理的电子态</p>
          <div class="constraint-preview">
            <h4>典型约束：</h4>
            <katex-element expression="\sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i = 1"></katex-element>
            <p>每个格点上的总粒子数守恒</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔗 与下一节的联系</h2>
      <div class="connection-box">
        <h3>即将学习：约束条件</h3>
        <p>在16.1.2中，我们将详细讨论如何通过约束条件确保隶粒子表示的物理正确性，以及这些约束如何自然地导致规范场理论的出现。</p>
        
        <div class="preview-topics">
          <h4>下节要点：</h4>
          <ul>
            <li>约束条件的数学表述</li>
            <li>拉格朗日乘数方法</li>
            <li>规范场的萌芽</li>
            <li>物理态的选择</li>
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
              <h4>分解思想</h4>
              <p>将电子分解为费米子和玻色子的乘积</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">2</div>
            <div class="point-content">
              <h4>物理动机</h4>
              <p>电荷-自旋分离简化强关联问题</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">3</div>
            <div class="point-content">
              <h4>数学表述</h4>
              <p>c_{i,σ} = f_{i,σ} b_i† 的基本分解公式</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">4</div>
            <div class="point-content">
              <h4>约束必要性</h4>
              <p>需要约束条件确保物理正确性</p>
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
  name: 'Chapter16_1_1',
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

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #2196f3;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #1565c0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
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

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #4caf50;
  margin: 1rem 0;
}

.theory-block {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ff9800;
}

.theory-block h3 {
  color: #e65100;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.explanation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.explanation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.explanation-item h4 {
  color: #d84315;
  margin-bottom: 1rem;
}

.explanation-item ul {
  list-style: none;
  padding: 0;
}

.explanation-item li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.explanation-item li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ff9800;
}

.physics-insight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
}

.insight-card {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #4caf50;
}

.insight-card h3 {
  color: #2e7d32;
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
  color: #388e3c;
  margin-bottom: 1rem;
}

.example-container {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #9c27b0;
}

.example-container h3 {
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.warning-box {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ffc107;
}

.warning-box h3 {
  color: #f57f17;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.warning-content p {
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

.connection-box {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #2196f3;
}

.connection-box h3 {
  color: #0d47a1;
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
  color: #1565c0;
  margin-bottom: 1rem;
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
  
  .concept-grid,
  .physics-insight-grid {
    grid-template-columns: 1fr;
  }
  
  .explanation-grid,
  .summary-points {
    grid-template-columns: 1fr;
  }
}
</style>