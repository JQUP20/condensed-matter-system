<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.4.1 什么是电子关联?</h1>
      <div class="chapter-subtitle">Understanding Electron Correlation</div>
    </div>

    <div class="content-sections">
      <!-- 基本概念 -->
      <section class="content-section">
        <h2 class="section-title">基本概念</h2>
        <div class="concept-explanation">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>电子关联效应</h3>
            <p>电子关联是指多电子系统中电子之间的相互作用效应，这种相互作用不能通过简单的单电子近似来描述。</p>
          </div>
          
          <div class="concept-card">
            <div class="concept-icon">🔗</div>
            <h3>库仑相互作用</h3>
            <p>电子之间的库仑排斥力是电子关联的主要来源，其强度由精细结构常数α ≈ 1/137决定。</p>
          </div>
          
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>量子多体效应</h3>
            <p>在量子多体系统中，电子的波函数不能写成单电子波函数的简单乘积形式。</p>
          </div>
        </div>
      </section>

      <!-- 数学描述 -->
      <section class="content-section">
        <h2 class="section-title">数学描述</h2>
        <div class="math-content">
          <div class="equation-block">
            <h4>多电子哈密顿量</h4>
            <div class="equation">
              H = ∑ᵢ [-ℏ²/(2m)∇ᵢ² + V(rᵢ)] + ∑ᵢ&lt;ⱼ e²/(4πε₀|rᵢ - rⱼ|)
            </div>
            <p class="equation-description">
              第一项是单电子动能和外势能，第二项是电子间的库仑相互作用项。
            </p>
          </div>

          <div class="equation-block">
            <h4>关联能定义</h4>
            <div class="equation">
              E_corr = E_exact - E_HF
            </div>
            <p class="equation-description">
              关联能定义为精确基态能量与Hartree-Fock近似能量的差值。
            </p>
          </div>
        </div>
      </section>

      <!-- 物理图像 -->
      <section class="content-section">
        <h2 class="section-title">物理图像</h2>
        <div class="physics-visualization">
          <div class="visualization-grid">
            <div class="vis-card">
              <h4>库仑洞效应</h4>
              <div class="vis-content">
                <div class="coulomb-hole"></div>
                <p>由于库仑排斥，每个电子周围形成一个"库仑洞"，其他电子不太可能出现在这个区域。</p>
              </div>
            </div>
            
            <div class="vis-card">
              <h4>交换关联洞</h4>
              <div class="vis-content">
                <div class="exchange-hole"></div>
                <p>泡利不相容原理和库仑相互作用共同作用，在每个电子周围形成交换关联洞。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 关联强度 -->
      <section class="content-section">
        <h2 class="section-title">关联强度的度量</h2>
        <div class="correlation-strength">
          <div class="strength-categories">
            <div class="strength-card weak">
              <h4>弱关联系统</h4>
              <div class="parameter">U/t &lt; 1</div>
              <ul>
                <li>金属中的传导电子</li>
                <li>费米液体理论适用</li>
                <li>准粒子图像有效</li>
              </ul>
            </div>
            
            <div class="strength-card moderate">
              <h4>中等关联系统</h4>
              <div class="parameter">U/t ≈ 1</div>
              <ul>
                <li>过渡金属化合物</li>
                <li>需要考虑关联效应</li>
                <li>准粒子重整化</li>
              </ul>
            </div>
            
            <div class="strength-card strong">
              <h4>强关联系统</h4>
              <div class="parameter">U/t &gt;&gt; 1</div>
              <ul>
                <li>莫特绝缘体</li>
                <li>高温超导体</li>
                <li>准粒子图像失效</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 实验表现 -->
      <section class="content-section">
        <h2 class="section-title">实验表现</h2>
        <div class="experimental-evidence">
          <div class="evidence-grid">
            <div class="evidence-card">
              <h4>光电子能谱</h4>
              <p>ARPES实验中观察到的准粒子峰展宽和卫星峰反映了电子关联效应。</p>
            </div>
            
            <div class="evidence-card">
              <h4>比热系数</h4>
              <p>重费米子系统中巨大的比热系数γ反映了强烈的电子关联。</p>
            </div>
            
            <div class="evidence-card">
              <h4>磁化率增强</h4>
              <p>Pauli磁化率的增强因子反映了电子间相互作用的强度。</p>
            </div>
            
            <div class="evidence-card">
              <h4>电阻率异常</h4>
              <p>T²电阻率行为偏离和线性电阻率是强关联的标志。</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 理论方法 -->
      <section class="content-section">
        <h2 class="section-title">理论处理方法</h2>
        <div class="theoretical-methods">
          <div class="method-timeline">
            <div class="method-item">
              <div class="method-year">1930s</div>
              <div class="method-content">
                <h4>Hartree-Fock方法</h4>
                <p>平均场近似，忽略电子关联</p>
              </div>
            </div>
            
            <div class="method-item">
              <div class="method-year">1960s</div>
              <div class="method-content">
                <h4>密度泛函理论</h4>
                <p>通过交换关联泛函处理关联效应</p>
              </div>
            </div>
            
            <div class="method-item">
              <div class="method-year">1980s</div>
              <div class="method-content">
                <h4>动力学平均场理论</h4>
                <p>处理强关联系统的有效方法</p>
              </div>
            </div>
            
            <div class="method-item">
              <div class="method-year">现代</div>
              <div class="method-content">
                <h4>量子蒙特卡罗</h4>
                <p>数值精确求解多体问题</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 重要性 -->
      <section class="content-section">
        <h2 class="section-title">电子关联的重要性</h2>
        <div class="importance-highlights">
          <div class="highlight-grid">
            <div class="highlight-card">
              <div class="highlight-icon">🔬</div>
              <h4>新奇量子态</h4>
              <p>电子关联是产生超导、磁性、拓扑态等新奇量子态的根本原因。</p>
            </div>
            
            <div class="highlight-card">
              <div class="highlight-icon">⚡</div>
              <h4>相变现象</h4>
              <p>金属-绝缘体转变、磁性相变等都与电子关联密切相关。</p>
            </div>
            
            <div class="highlight-card">
              <div class="highlight-icon">🧮</div>
              <h4>计算挑战</h4>
              <p>强关联系统的理论计算是凝聚态物理的核心挑战之一。</p>
            </div>
            
            <div class="highlight-card">
              <div class="highlight-icon">🔮</div>
              <h4>未来应用</h4>
              <p>理解和控制电子关联对量子材料设计具有重要意义。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  font-style: italic;
}

.content-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
}

.concept-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.15);
}

.concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
}

.concept-card p {
  color: #4a5568;
  font-size: 0.95rem;
}

.math-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.equation-block {
  background: #f1f5f9;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid #3b82f6;
}

.equation-block h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.2rem;
  background: white;
  padding: 1rem;
  border-radius: 0.25rem;
  text-align: center;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
}

.equation-description {
  color: #4a5568;
  font-size: 0.9rem;
  margin: 0;
}

.visualization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.vis-card {
  background: #f8fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.vis-card h4 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-weight: 600;
}

.coulomb-hole, .exchange-hole {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 1rem auto;
  position: relative;
}

.coulomb-hole {
  background: radial-gradient(circle, #fee2e2 0%, #fecaca 50%, #f87171 100%);
}

.exchange-hole {
  background: radial-gradient(circle, #dbeafe 0%, #93c5fd 50%, #3b82f6 100%);
}

.strength-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.strength-card {
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.strength-card.weak {
  background: linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%);
  border: 2px solid #10b981;
}

.strength-card.moderate {
  background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
  border: 2px solid #f59e0b;
}

.strength-card.strong {
  background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
  border: 2px solid #ef4444;
}

.strength-card h4 {
  margin-bottom: 1rem;
  font-weight: 600;
}

.parameter {
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.25rem;
}

.strength-card ul {
  text-align: left;
  margin: 0;
  padding-left: 1.5rem;
}

.strength-card li {
  margin-bottom: 0.5rem;
  color: #374151;
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.evidence-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.evidence-card h4 {
  color: #2563eb;
  margin-bottom: 1rem;
  font-weight: 600;
}

.evidence-card p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.method-timeline {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.method-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border-left: 4px solid #3b82f6;
}

.method-year {
  font-weight: bold;
  color: #2563eb;
  font-size: 1.1rem;
  min-width: 80px;
}

.method-content h4 {
  color: #1e293b;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.method-content p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.highlight-card {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid #0ea5e9;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.2s;
}

.highlight-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -8px rgba(14, 165, 233, 0.25);
}

.highlight-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.highlight-card h4 {
  color: #0c4a6e;
  margin-bottom: 1rem;
  font-weight: 600;
}

.highlight-card p {
  color: #374151;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-explanation,
  .visualization-grid,
  .strength-categories,
  .evidence-grid,
  .highlight-grid {
    grid-template-columns: 1fr;
  }
  
  .method-item {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
}
</style>