<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.4.1 经典力学的Noether定理</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">对称性</span>
        <span class="chapter-tag">守恒定律</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>对称性与守恒定律的经典联系</h2>
        <p class="lead-text">
          Emmy Noether在1915年证明了一个深刻的定理：每一个连续对称性都对应一个守恒定律。
          这个定理不仅统一了我们对物理守恒律的理解，更为现代物理学奠定了重要的理论基础。
        </p>
      </section>

      <section class="content-section">
        <h2>Noether定理的经典表述</h2>
        <div class="theorem-box">
          <h3>🎯 Noether定理</h3>
          <p><strong>如果一个物理系统的拉格朗日量在某个连续变换下保持不变，那么存在一个相应的守恒量。</strong></p>
          
          <div class="mathematical-content">
            <h4>数学表述：</h4>
            <div class="equation-block">
              <p>设变换：q<sub>i</sub> → q<sub>i</sub> + δq<sub>i</sub>, t → t + δt</p>
              <p>如果：δL = 0（拉格朗日量不变）</p>
              <p>则存在守恒量：I = Σ<sub>i</sub> (∂L/∂q̇<sub>i</sub>)δq<sub>i</sub> - H·δt</p>
              <p>满足：dI/dt = 0</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>基本推导过程</h2>
        <div class="derivation-steps">
          <div class="step-card">
            <h3>步骤1：变分原理</h3>
            <div class="mathematical-content">
              <p>从作用量的变分开始：</p>
              <div class="equation-block">
                <p>S = ∫ L(q<sub>i</sub>, q̇<sub>i</sub>, t) dt</p>
                <p>δS = ∫ [Σ<sub>i</sub> (∂L/∂q<sub>i</sub>)δq<sub>i</sub> + Σ<sub>i</sub> (∂L/∂q̇<sub>i</sub>)δq̇<sub>i</sub> + (∂L/∂t)δt] dt</p>
              </div>
            </div>
          </div>

          <div class="step-card">
            <h3>步骤2：分部积分</h3>
            <div class="mathematical-content">
              <p>对速度项进行分部积分：</p>
              <div class="equation-block">
                <p>∫ (∂L/∂q̇<sub>i</sub>)δq̇<sub>i</sub> dt = ∫ (∂L/∂q̇<sub>i</sub>)d(δq<sub>i</sub>)</p>
                <p>= [(∂L/∂q̇<sub>i</sub>)δq<sub>i</sub>] - ∫ (d/dt)(∂L/∂q̇<sub>i</sub>)δq<sub>i</sub> dt</p>
              </div>
            </div>
          </div>

          <div class="step-card">
            <h3>步骤3：欧拉-拉格朗日方程</h3>
            <div class="mathematical-content">
              <p>利用运动方程：</p>
              <div class="equation-block">
                <p>∂L/∂q<sub>i</sub> - d/dt(∂L/∂q̇<sub>i</sub>) = 0</p>
                <p>因此：δS = [Σ<sub>i</sub> (∂L/∂q̇<sub>i</sub>)δq<sub>i</sub>] + ∫ (∂L/∂t)δt dt</p>
              </div>
            </div>
          </div>

          <div class="step-card">
            <h3>步骤4：对称性条件</h3>
            <div class="mathematical-content">
              <p>如果系统具有对称性，则δS = 0：</p>
              <div class="equation-block">
                <p>d/dt[Σ<sub>i</sub> (∂L/∂q̇<sub>i</sub>)δq<sub>i</sub> - H·δt] = 0</p>
                <p>其中 H = Σ<sub>i</sub> q̇<sub>i</sub>(∂L/∂q̇<sub>i</sub>) - L 是哈密顿量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>经典守恒定律的具体例子</h2>
        <div class="conservation-laws">
          <div class="law-card energy">
            <div class="law-icon">⚡</div>
            <h3>能量守恒</h3>
            <div class="law-content">
              <h4>对称性：时间平移不变性</h4>
              <div class="equation-block">
                <p>变换：t → t + ε</p>
                <p>条件：∂L/∂t = 0</p>
                <p>守恒量：E = Σ<sub>i</sub> q̇<sub>i</sub>(∂L/∂q̇<sub>i</sub>) - L</p>
              </div>
              <p class="physical-meaning">
                <strong>物理意义：</strong>如果物理定律不随时间改变，则系统的总能量守恒。
              </p>
            </div>
          </div>

          <div class="law-card momentum">
            <div class="law-icon">➡️</div>
            <h3>动量守恒</h3>
            <div class="law-content">
              <h4>对称性：空间平移不变性</h4>
              <div class="equation-block">
                <p>变换：r → r + a</p>
                <p>条件：∂L/∂r = 0（无外力）</p>
                <p>守恒量：P = Σ<sub>i</sub> (∂L/∂ṙ<sub>i</sub>)</p>
              </div>
              <p class="physical-meaning">
                <strong>物理意义：</strong>如果空间是均匀的，则系统的总动量守恒。
              </p>
            </div>
          </div>

          <div class="law-card angular">
            <div class="law-icon">🔄</div>
            <h3>角动量守恒</h3>
            <div class="law-content">
              <h4>对称性：旋转不变性</h4>
              <div class="equation-block">
                <p>变换：r → R(θ)r</p>
                <p>条件：L在旋转下不变</p>
                <p>守恒量：L = Σ<sub>i</sub> r<sub>i</sub> × p<sub>i</sub></p>
              </div>
              <p class="physical-meaning">
                <strong>物理意义：</strong>如果空间是各向同性的，则系统的总角动量守恒。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体计算示例</h2>
        <div class="example-section">
          <div class="example-box">
            <h3>例1：自由粒子的能量守恒</h3>
            <div class="mathematical-content">
              <h4>拉格朗日量：</h4>
              <div class="equation-block">
                <p>L = ½mv² = ½m(ẋ² + ẏ² + ż²)</p>
              </div>
              
              <h4>时间平移对称性：</h4>
              <div class="equation-block">
                <p>∂L/∂t = 0 ✓</p>
              </div>
              
              <h4>守恒的能量：</h4>
              <div class="equation-block">
                <p>E = Σ<sub>i</sub> q̇<sub>i</sub>(∂L/∂q̇<sub>i</sub>) - L</p>
                <p>= m(ẋ² + ẏ² + ż²) - ½m(ẋ² + ẏ² + ż²)</p>
                <p>= ½mv² = 常数</p>
              </div>
            </div>
          </div>

          <div class="example-box">
            <h3>例2：中心力场中的角动量守恒</h3>
            <div class="mathematical-content">
              <h4>拉格朗日量（极坐标）：</h4>
              <div class="equation-block">
                <p>L = ½m(ṙ² + r²θ̇²) - V(r)</p>
              </div>
              
              <h4>旋转对称性：</h4>
              <div class="equation-block">
                <p>∂L/∂θ = 0 ✓</p>
              </div>
              
              <h4>守恒的角动量：</h4>
              <div class="equation-block">
                <p>L<sub>z</sub> = ∂L/∂θ̇ = mr²θ̇ = 常数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Noether定理的深层意义</h2>
        <div class="insights-grid">
          <div class="insight-card">
            <div class="insight-icon">🔗</div>
            <h3>统一性</h3>
            <p>将看似不相关的守恒定律统一在对称性的框架下，揭示了物理定律的深层结构。</p>
          </div>

          <div class="insight-card">
            <div class="insight-icon">🎯</div>
            <h3>预测性</h3>
            <p>通过寻找系统的对称性，可以预测新的守恒定律，指导物理理论的发展。</p>
          </div>

          <div class="insight-card">
            <div class="insight-icon">🌉</div>
            <h3>桥梁作用</h3>
            <p>连接了几何（对称性）与物理（守恒定律），为现代物理学提供了重要的数学工具。</p>
          </div>

          <div class="insight-card">
            <div class="insight-icon">🔬</div>
            <h3>普适性</h3>
            <p>适用于从经典力学到量子场论的所有物理理论，是物理学的基本原理之一。</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>历史背景与现代意义</h2>
        <div class="historical-context">
          <div class="timeline-item">
            <div class="year">1915</div>
            <div class="content">
              <h4>Emmy Noether的突破</h4>
              <p>在Einstein的邀请下，Noether解决了广义相对论中的能量守恒问题，提出了著名的Noether定理。</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="year">1918</div>
            <div class="content">
              <h4>定理的发表</h4>
              <p>Noether定理正式发表，立即被认识到其在理论物理中的根本重要性。</p>
            </div>
          </div>

          <div class="timeline-item">
            <div class="year">现代</div>
            <div class="content">
              <h4>量子场论的基础</h4>
              <p>Noether定理成为标准模型和现代粒子物理学的理论基石，指导着新物理的探索。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>🎯 核心概念</h3>
            <ul>
              <li>连续对称性与守恒定律的一一对应</li>
              <li>变分原理在推导中的关键作用</li>
              <li>守恒量的具体构造方法</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>📐 数学工具</h3>
            <ul>
              <li>拉格朗日形式主义</li>
              <li>变分法和分部积分</li>
              <li>欧拉-拉格朗日方程</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔬 物理应用</h3>
            <ul>
              <li>能量、动量、角动量守恒</li>
              <li>中心力场问题</li>
              <li>对称性分析方法</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 现代意义</h3>
            <ul>
              <li>量子场论的理论基础</li>
              <li>粒子物理标准模型</li>
              <li>凝聚态物理中的应用</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.chapter-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.reading-time {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  font-weight: 500;
  color: #2c3e50;
  text-align: center;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid #3498db;
  padding-bottom: 0.5rem;
}

.theorem-box {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #e74c3c;
  margin-bottom: 2rem;
}

.theorem-box h3 {
  color: #c0392b;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.mathematical-content {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.equation-block {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.derivation-steps {
  display: grid;
  gap: 1.5rem;
}

.step-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #16a085;
}

.step-card h3 {
  color: #0f5132;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.conservation-laws {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.law-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: transform 0.3s ease;
}

.law-card:hover {
  transform: translateY(-5px);
}

.law-card.energy {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
}

.law-card.momentum {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
}

.law-card.angular {
  background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);
  color: white;
}

.law-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.law-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.law-content {
  text-align: left;
}

.physical-meaning {
  background: rgba(255,255,255,0.2);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-style: italic;
}

.example-section {
  display: grid;
  gap: 2rem;
}

.example-box {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #2196f3;
}

.example-box h3 {
  color: #1565c0;
  margin-bottom: 1rem;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.insight-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  transition: transform 0.3s ease;
}

.insight-card:hover {
  transform: translateY(-5px);
}

.insight-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.insight-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.historical-context {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.timeline-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.year {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  margin-right: 2rem;
  min-width: 80px;
  text-align: center;
}

.timeline-item .content h4 {
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.summary {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.summary h2 {
  color: white;
  border-bottom-color: #3498db;
  text-align: center;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.summary-card {
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-card h3 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.summary-card ul {
  list-style: none;
  padding: 0;
}

.summary-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.summary-card li:last-child {
  border-bottom: none;
}

.summary-card li::before {
  content: "▸ ";
  color: #3498db;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .conservation-laws,
  .insights-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
  }
  
  .year {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>