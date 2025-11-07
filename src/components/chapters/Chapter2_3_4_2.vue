<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.4.2 场论中的Noether定理</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">场论</span>
        <span class="chapter-tag">连续介质</span>
        <span class="chapter-tag">守恒流</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>从粒子到场的跃迁</h2>
        <p class="lead-text">
          当我们从有限个粒子的系统转向连续场时，Noether定理展现出更加丰富和深刻的内容。
          场论中的对称性不仅产生守恒量，更产生守恒流，这为我们理解现代物理学奠定了基础。
        </p>
      </section>

      <section class="content-section">
        <h2>场论中的拉格朗日密度</h2>
        <div class="field-theory-intro">
          <div class="concept-card">
            <h3>🌊 场的概念</h3>
            <div class="mathematical-content">
              <p>场是时空中每一点都有定义的物理量：</p>
              <div class="equation-block">
                <p>φ(x<sup>μ</sup>) = φ(t, x, y, z)</p>
                <p>其中 x<sup>μ</sup> = (ct, x, y, z) 是四维时空坐标</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <h3>📐 拉格朗日密度</h3>
            <div class="mathematical-content">
              <p>从作用量到拉格朗日密度：</p>
              <div class="equation-block">
                <p>S = ∫ L dt → S = ∫ ℒ(φ, ∂<sub>μ</sub>φ, x<sup>μ</sup>) d⁴x</p>
                <p>其中 ℒ 是拉格朗日密度</p>
                <p>∂<sub>μ</sub>φ = ∂φ/∂x<sup>μ</sup> 是场的四维梯度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>场论中的Noether定理</h2>
        <div class="theorem-box">
          <h3>🎯 场论Noether定理</h3>
          <p><strong>如果拉格朗日密度在某个连续变换下保持不变，那么存在一个相应的守恒流。</strong></p>
          
          <div class="mathematical-content">
            <h4>变换形式：</h4>
            <div class="equation-block">
              <p>φ(x) → φ'(x') = φ(x) + δφ(x)</p>
              <p>x<sup>μ</sup> → x'<sup>μ</sup> = x<sup>μ</sup> + δx<sup>μ</sup></p>
            </div>
            
            <h4>守恒流：</h4>
            <div class="equation-block">
              <p>J<sup>μ</sup> = (∂ℒ/∂(∂<sub>μ</sub>φ))δφ - ℒδx<sup>μ</sup></p>
              <p>满足连续性方程：∂<sub>μ</sub>J<sup>μ</sup> = 0</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>详细推导过程</h2>
        <div class="derivation-container">
          <div class="derivation-step">
            <h3>步骤1：作用量的变分</h3>
            <div class="mathematical-content">
              <p>考虑作用量在变换下的变化：</p>
              <div class="equation-block">
                <p>δS = ∫ [∂ℒ/∂φ · δφ + ∂ℒ/∂(∂<sub>μ</sub>φ) · δ(∂<sub>μ</sub>φ) + ∂ℒ/∂x<sup>μ</sup> · δx<sup>μ</sup>] d⁴x</p>
              </div>
              <div class="note-box">
                <p><strong>注意：</strong>这里包含了场变换和时空变换两个部分</p>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <h3>步骤2：场导数的变换</h3>
            <div class="mathematical-content">
              <p>场导数的变换规律：</p>
              <div class="equation-block">
                <p>δ(∂<sub>μ</sub>φ) = ∂<sub>μ</sub>(δφ) - (∂<sub>ν</sub>φ)∂<sub>μ</sub>(δx<sup>ν</sup>)</p>
              </div>
              <div class="explanation">
                <p>这个关系来自于链式法则和坐标变换的复合效应</p>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <h3>步骤3：分部积分</h3>
            <div class="mathematical-content">
              <p>对场导数项进行分部积分：</p>
              <div class="equation-block">
                <p>∫ (∂ℒ/∂(∂<sub>μ</sub>φ)) · ∂<sub>μ</sub>(δφ) d⁴x</p>
                <p>= ∫ ∂<sub>μ</sub>[(∂ℒ/∂(∂<sub>μ</sub>φ)) · δφ] d⁴x - ∫ [∂<sub>μ</sub>(∂ℒ/∂(∂<sub>μ</sub>φ))] · δφ d⁴x</p>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <h3>步骤4：欧拉-拉格朗日方程</h3>
            <div class="mathematical-content">
              <p>利用场的运动方程：</p>
              <div class="equation-block">
                <p>∂ℒ/∂φ - ∂<sub>μ</sub>(∂ℒ/∂(∂<sub>μ</sub>φ)) = 0</p>
              </div>
              <p>简化作用量变分，得到守恒流的表达式。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体的守恒流</h2>
        <div class="conservation-currents">
          <div class="current-card energy-momentum">
            <div class="current-icon">⚡</div>
            <h3>能量-动量流</h3>
            <div class="current-content">
              <h4>对称性：时空平移不变性</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>变换：x<sup>μ</sup> → x<sup>μ</sup> + a<sup>μ</sup></p>
                  <p>守恒流：T<sup>μν</sup> = (∂ℒ/∂(∂<sub>μ</sub>φ))∂<sup>ν</sup>φ - η<sup>μν</sup>ℒ</p>
                  <p>连续性方程：∂<sub>μ</sub>T<sup>μν</sup> = 0</p>
                </div>
              </div>
              <div class="physical-meaning">
                <h4>物理意义：</h4>
                <ul>
                  <li>T<sup>00</sup>：能量密度</li>
                  <li>T<sup>0i</sup>：动量密度</li>
                  <li>T<sup>ij</sup>：应力张量</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="current-card charge">
            <div class="current-icon">🔋</div>
            <h3>电荷流</h3>
            <div class="current-content">
              <h4>对称性：U(1)规范对称性</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>变换：φ → e<sup>iα</sup>φ</p>
                  <p>守恒流：J<sup>μ</sup> = i[(∂ℒ/∂(∂<sub>μ</sub>φ*))φ* - (∂ℒ/∂(∂<sub>μ</sub>φ))φ]</p>
                  <p>连续性方程：∂<sub>μ</sub>J<sup>μ</sup> = 0</p>
                </div>
              </div>
              <div class="physical-meaning">
                <h4>物理意义：</h4>
                <ul>
                  <li>J<sup>0</sup>：电荷密度</li>
                  <li>J<sup>i</sup>：电流密度</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="current-card angular">
            <div class="current-icon">🌀</div>
            <h3>角动量流</h3>
            <div class="current-content">
              <h4>对称性：洛伦兹变换</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>变换：x<sup>μ</sup> → Λ<sup>μ</sup><sub>ν</sub>x<sup>ν</sup></p>
                  <p>守恒流：M<sup>μνρ</sup> = x<sup>ν</sup>T<sup>μρ</sup> - x<sup>ρ</sup>T<sup>μν</sup> + S<sup>μνρ</sup></p>
                  <p>其中 S<sup>μνρ</sup> 是自旋角动量密度</p>
                </div>
              </div>
              <div class="physical-meaning">
                <h4>物理意义：</h4>
                <ul>
                  <li>轨道角动量密度</li>
                  <li>自旋角动量密度</li>
                  <li>总角动量守恒</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Klein-Gordon场的具体例子</h2>
        <div class="example-detailed">
          <div class="example-header">
            <h3>自由Klein-Gordon场</h3>
            <p>最简单的相对论性标量场</p>
          </div>

          <div class="example-content">
            <div class="lagrangian-section">
              <h4>拉格朗日密度：</h4>
              <div class="equation-block">
                <p>ℒ = ½(∂<sub>μ</sub>φ)(∂<sup>μ</sup>φ) - ½m²φ²</p>
                <p>= ½[(∂φ/∂t)² - (∇φ)² - m²φ²]</p>
              </div>
            </div>

            <div class="symmetries-section">
              <h4>对称性分析：</h4>
              
              <div class="symmetry-item">
                <h5>1. 时间平移对称性</h5>
                <div class="equation-block">
                  <p>t → t + a, ∂ℒ/∂t = 0</p>
                  <p>能量密度：T<sup>00</sup> = ½[(∂φ/∂t)² + (∇φ)² + m²φ²]</p>
                </div>
              </div>

              <div class="symmetry-item">
                <h5>2. 空间平移对称性</h5>
                <div class="equation-block">
                  <p>x → x + a, ∂ℒ/∂x = 0</p>
                  <p>动量密度：T<sup>0i</sup> = (∂φ/∂t)(∂φ/∂x<sup>i</sup>)</p>
                </div>
              </div>

              <div class="symmetry-item">
                <h5>3. 洛伦兹不变性</h5>
                <div class="equation-block">
                  <p>x<sup>μ</sup> → Λ<sup>μ</sup><sub>ν</sub>x<sup>ν</sup></p>
                  <p>应力张量：T<sup>ij</sup> = (∂φ/∂x<sup>i</sup>)(∂φ/∂x<sup>j</sup>) - δ<sup>ij</sup>ℒ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>复标量场的U(1)对称性</h2>
        <div class="complex-field-section">
          <div class="field-definition">
            <h3>复标量场</h3>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>φ = (φ₁ + iφ₂)/√2</p>
                <p>ℒ = (∂<sub>μ</sub>φ*)(∂<sup>μ</sup>φ) - m²φ*φ</p>
              </div>
            </div>
          </div>

          <div class="u1-symmetry">
            <h3>U(1)全局对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>φ → e<sup>iα</sup>φ, φ* → e<sup>-iα</sup>φ*</p>
              </div>
              
              <h4>Noether流：</h4>
              <div class="equation-block">
                <p>J<sup>μ</sup> = i[(∂<sup>μ</sup>φ*)φ - φ*(∂<sup>μ</sup>φ)]</p>
              </div>
              
              <h4>守恒电荷：</h4>
              <div class="equation-block">
                <p>Q = ∫ J⁰ d³x = i∫ [φ*∂₀φ - (∂₀φ*)φ] d³x</p>
              </div>
            </div>
          </div>

          <div class="gauge-invariance">
            <h3>局域规范不变性</h3>
            <div class="mathematical-content">
              <p>当α = α(x)时，需要引入规范场：</p>
              <div class="equation-block">
                <p>∂<sub>μ</sub> → D<sub>μ</sub> = ∂<sub>μ</sub> - ieA<sub>μ</sub></p>
                <p>ℒ = (D<sub>μ</sub>φ)*(D<sup>μ</sup>φ) - m²φ*φ - ¼F<sub>μν</sub>F<sup>μν</sup></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代物理学中的应用</h2>
        <div class="applications-grid">
          <div class="application-card qed">
            <div class="app-icon">⚛️</div>
            <h3>量子电动力学</h3>
            <div class="app-content">
              <p><strong>U(1)规范对称性</strong></p>
              <ul>
                <li>电荷守恒定律</li>
                <li>电磁相互作用</li>
                <li>光子的无质量性</li>
              </ul>
            </div>
          </div>

          <div class="application-card yang-mills">
            <div class="app-icon">🌈</div>
            <h3>Yang-Mills理论</h3>
            <div class="app-content">
              <p><strong>非阿贝尔规范对称性</strong></p>
              <ul>
                <li>强相互作用</li>
                <li>弱相互作用</li>
                <li>标准模型的基础</li>
              </ul>
            </div>
          </div>

          <div class="application-card gravity">
            <div class="app-icon">🌌</div>
            <h3>广义相对论</h3>
            <div class="app-content">
              <p><strong>时空对称性</strong></p>
              <ul>
                <li>能量-动量守恒</li>
                <li>Einstein场方程</li>
                <li>宇宙学应用</li>
              </ul>
            </div>
          </div>

          <div class="application-card condensed">
            <div class="app-icon">🔬</div>
            <h3>凝聚态物理</h3>
            <div class="app-content">
              <p><strong>对称性破缺</strong></p>
              <ul>
                <li>相变理论</li>
                <li>超导机制</li>
                <li>拓扑相</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>技术要点与深入理解</h2>
        <div class="technical-insights">
          <div class="insight-box">
            <h3>🔍 守恒流 vs 守恒量</h3>
            <div class="comparison-table">
              <div class="comparison-row header">
                <div>粒子力学</div>
                <div>场论</div>
              </div>
              <div class="comparison-row">
                <div>守恒量（标量）</div>
                <div>守恒流（四矢量）</div>
              </div>
              <div class="comparison-row">
                <div>dQ/dt = 0</div>
                <div>∂<sub>μ</sub>J<sup>μ</sup> = 0</div>
              </div>
              <div class="comparison-row">
                <div>全局守恒</div>
                <div>局域守恒</div>
              </div>
            </div>
          </div>

          <div class="insight-box">
            <h3>🌊 连续性方程的物理意义</h3>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>∂<sub>μ</sub>J<sup>μ</sup> = ∂J⁰/∂t + ∇·J = 0</p>
              </div>
              <p>这表示：<strong>电荷密度的变化率等于电流的散度</strong></p>
              <p>物理解释：电荷既不能创生也不能湮灭，只能从一处流向另一处。</p>
            </div>
          </div>

          <div class="insight-box">
            <h3>⚖️ 能量-动量张量的性质</h3>
            <div class="properties-list">
              <div class="property-item">
                <h4>对称性</h4>
                <p>T<sup>μν</sup> = T<sup>νμ</sup>（在没有自旋的情况下）</p>
              </div>
              <div class="property-item">
                <h4>守恒性</h4>
                <p>∂<sub>μ</sub>T<sup>μν</sup> = 0（时空平移不变性的结果）</p>
              </div>
              <div class="property-item">
                <h4>物理意义</h4>
                <p>描述了能量、动量和应力在时空中的分布和流动</p>
              </div>
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
              <li>拉格朗日密度与场论</li>
              <li>守恒流与连续性方程</li>
              <li>能量-动量张量</li>
              <li>规范对称性与守恒流</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>📐 数学工具</h3>
            <ul>
              <li>四维时空记号</li>
              <li>变分法在场论中的应用</li>
              <li>张量分析</li>
              <li>李群与李代数</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔬 物理应用</h3>
            <ul>
              <li>Klein-Gordon场</li>
              <li>复标量场的U(1)对称性</li>
              <li>电磁场理论</li>
              <li>Yang-Mills理论</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 现代意义</h3>
            <ul>
              <li>标准模型的理论基础</li>
              <li>规范场论的发展</li>
              <li>对称性破缺机制</li>
              <li>拓扑场论</li>
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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

.chapter-tag, .reading-time {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
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
  border-bottom: 3px solid #00f2fe;
  padding-bottom: 0.5rem;
}

.field-theory-intro {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #ff6b6b;
}

.concept-card h3 {
  color: #c0392b;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.theorem-box {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #8e44ad;
  margin-bottom: 2rem;
}

.theorem-box h3 {
  color: #6c3483;
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
  border-left: 4px solid #00f2fe;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.derivation-container {
  display: grid;
  gap: 2rem;
}

.derivation-step {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #2196f3;
}

.derivation-step h3 {
  color: #1565c0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.note-box {
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid #ffc107;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.explanation {
  background: rgba(23, 162, 184, 0.1);
  border: 1px solid #17a2b8;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  font-style: italic;
}

.conservation-currents {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.current-card {
  padding: 2rem;
  border-radius: 15px;
  transition: transform 0.3s ease;
}

.current-card:hover {
  transform: translateY(-5px);
}

.current-card.energy-momentum {
  background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.current-card.charge {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.current-card.angular {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.current-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
}

.current-card h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
  color: #2c3e50;
}

.current-content {
  text-align: left;
}

.physical-meaning {
  background: rgba(255,255,255,0.7);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.physical-meaning ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.example-detailed {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
  margin-bottom: 2rem;
}

.example-header {
  text-align: center;
  margin-bottom: 2rem;
}

.example-header h3 {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: #ffd700;
}

.lagrangian-section, .symmetries-section {
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
}

.symmetry-item {
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.symmetry-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
}

.symmetry-item h5 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.complex-field-section {
  display: grid;
  gap: 2rem;
}

.field-definition, .u1-symmetry, .gauge-invariance {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #e17055;
}

.field-definition h3, .u1-symmetry h3, .gauge-invariance h3 {
  color: #d63031;
  margin-bottom: 1rem;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.application-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  transition: transform 0.3s ease;
}

.application-card:hover {
  transform: translateY(-5px);
}

.application-card.qed {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.application-card.yang-mills {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.application-card.gravity {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.application-card.condensed {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.app-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.application-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.app-content {
  text-align: left;
}

.app-content ul {
  list-style: none;
  padding: 0;
}

.app-content li {
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.app-content li:last-child {
  border-bottom: none;
}

.app-content li::before {
  content: "▸ ";
  color: #ffd700;
  font-weight: bold;
}

.technical-insights {
  display: grid;
  gap: 2rem;
}

.insight-box {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.insight-box h3 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.comparison-table {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.comparison-row {
  display: contents;
}

.comparison-row.header > div {
  background: rgba(52, 152, 219, 0.2);
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
}

.comparison-row:not(.header) > div {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.properties-list {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.property-item {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
}

.property-item h4 {
  color: #3498db;
  margin-bottom: 0.5rem;
}

.summary {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.summary h2 {
  color: white;
  border-bottom-color: #00f2fe;
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
  color: #00f2fe;
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
  color: #00f2fe;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .field-theory-intro,
  .applications-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-table {
    grid-template-columns: 1fr;
  }
  
  .comparison-row.header > div,
  .comparison-row:not(.header) > div {
    margin-bottom: 0.5rem;
  }
}
</style>