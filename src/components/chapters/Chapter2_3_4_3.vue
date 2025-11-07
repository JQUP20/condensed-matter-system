<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.4.3 场的正则量子化</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子化</span>
        <span class="chapter-tag">正则对易关系</span>
        <span class="chapter-tag">粒子解释</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>从经典场到量子场</h2>
        <p class="lead-text">
          正则量子化是将经典场论转化为量子场论的标准方法。通过引入正则对易关系，
          我们将经典的场函数提升为量子算符，从而揭示了粒子的量子本质和场的量子涨落。
        </p>
      </section>

      <section class="content-section">
        <h2>正则量子化的基本思想</h2>
        <div class="quantization-overview">
          <div class="concept-flow">
            <div class="flow-step classical">
              <div class="step-icon">📊</div>
              <h3>经典场论</h3>
              <div class="step-content">
                <p>场函数：φ(x,t)</p>
                <p>正则动量：π(x,t)</p>
                <p>泊松括号：{φ,π} = δ(x-y)</p>
              </div>
            </div>
            
            <div class="flow-arrow">→</div>
            
            <div class="flow-step quantum">
              <div class="step-icon">⚛️</div>
              <h3>量子场论</h3>
              <div class="step-content">
                <p>场算符：φ̂(x,t)</p>
                <p>正则动量算符：π̂(x,t)</p>
                <p>对易关系：[φ̂,π̂] = iℏδ(x-y)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Klein-Gordon场的正则量子化</h2>
        <div class="kg-quantization">
          <div class="classical-setup">
            <h3>经典Klein-Gordon场</h3>
            <div class="mathematical-content">
              <h4>拉格朗日密度：</h4>
              <div class="equation-block">
                <p>ℒ = ½(∂<sub>μ</sub>φ)(∂<sup>μ</sup>φ) - ½m²φ²</p>
                <p>= ½[(∂φ/∂t)² - (∇φ)² - m²φ²]</p>
              </div>
              
              <h4>正则动量：</h4>
              <div class="equation-block">
                <p>π(x,t) = ∂ℒ/∂(∂φ/∂t) = ∂φ/∂t</p>
              </div>
              
              <h4>哈密顿密度：</h4>
              <div class="equation-block">
                <p>ℋ = π∂φ/∂t - ℒ = ½[π² + (∇φ)² + m²φ²]</p>
              </div>
            </div>
          </div>

          <div class="quantization-step">
            <h3>量子化程序</h3>
            <div class="quantization-rules">
              <div class="rule-card">
                <h4>步骤1：算符提升</h4>
                <div class="equation-block">
                  <p>φ(x,t) → φ̂(x,t)</p>
                  <p>π(x,t) → π̂(x,t)</p>
                </div>
              </div>

              <div class="rule-card">
                <h4>步骤2：正则对易关系</h4>
                <div class="equation-block">
                  <p>[φ̂(x,t), π̂(y,t)] = iℏδ³(x-y)</p>
                  <p>[φ̂(x,t), φ̂(y,t)] = 0</p>
                  <p>[π̂(x,t), π̂(y,t)] = 0</p>
                </div>
              </div>

              <div class="rule-card">
                <h4>步骤3：运动方程</h4>
                <div class="equation-block">
                  <p>∂φ̂/∂t = i[Ĥ, φ̂]/ℏ = π̂</p>
                  <p>∂π̂/∂t = i[Ĥ, π̂]/ℏ = ∇²φ̂ - m²φ̂</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>模式展开与粒子解释</h2>
        <div class="mode-expansion">
          <div class="fourier-expansion">
            <h3>傅里叶模式展开</h3>
            <div class="mathematical-content">
              <h4>平面波解：</h4>
              <div class="equation-block">
                <p>φ(x,t) = ∫ d³k/(2π)³ [a(k)e<sup>-iωt+ik·x</sup> + b*(k)e<sup>iωt-ik·x</sup>]</p>
                <p>其中 ω = √(k² + m²)</p>
              </div>
              
              <h4>量子化后：</h4>
              <div class="equation-block">
                <p>φ̂(x,t) = ∫ d³k/(2π)³ 1/√(2ω) [â(k)e<sup>-iωt+ik·x</sup> + â†(k)e<sup>iωt-ik·x</sup>]</p>
              </div>
            </div>
          </div>

          <div class="creation-annihilation">
            <h3>产生湮灭算符</h3>
            <div class="operator-properties">
              <div class="property-card creation">
                <div class="operator-icon">➕</div>
                <h4>产生算符 â†(k)</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>â†(k)|0⟩ = |k⟩</p>
                    <p>â†(k)|n<sub>k</sub>⟩ = √(n<sub>k</sub>+1)|n<sub>k</sub>+1⟩</p>
                  </div>
                  <p><strong>物理意义：</strong>创造一个动量为k的粒子</p>
                </div>
              </div>

              <div class="property-card annihilation">
                <div class="operator-icon">➖</div>
                <h4>湮灭算符 â(k)</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>â(k)|0⟩ = 0</p>
                    <p>â(k)|n<sub>k</sub>⟩ = √n<sub>k</sub>|n<sub>k</sub>-1⟩</p>
                  </div>
                  <p><strong>物理意义：</strong>湮灭一个动量为k的粒子</p>
                </div>
              </div>
            </div>

            <div class="commutation-relations">
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p>[â(k), â†(k')] = (2π)³δ³(k-k')</p>
                <p>[â(k), â(k')] = 0</p>
                <p>[â†(k), â†(k')] = 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Fock空间与粒子态</h2>
        <div class="fock-space">
          <div class="vacuum-state">
            <h3>真空态</h3>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>â(k)|0⟩ = 0, ∀k</p>
                <p>⟨0|0⟩ = 1</p>
              </div>
              <div class="vacuum-properties">
                <h4>真空态的性质：</h4>
                <ul>
                  <li>最低能量态</li>
                  <li>所有模式都未被激发</li>
                  <li>具有零点能量涨落</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="particle-states">
            <h3>多粒子态的构造</h3>
            <div class="state-construction">
              <div class="state-example">
                <h4>单粒子态：</h4>
                <div class="equation-block">
                  <p>|k⟩ = â†(k)|0⟩</p>
                </div>
              </div>

              <div class="state-example">
                <h4>双粒子态：</h4>
                <div class="equation-block">
                  <p>|k₁,k₂⟩ = â†(k₁)â†(k₂)|0⟩</p>
                </div>
              </div>

              <div class="state-example">
                <h4>n粒子态：</h4>
                <div class="equation-block">
                  <p>|n<sub>k₁</sub>,n<sub>k₂</sub>,...⟩ = ∏<sub>i</sub> (â†(k<sub>i</sub>))<sup>n<sub>kᵢ</sub></sup>/√(n<sub>kᵢ</sub>!)|0⟩</p>
                </div>
              </div>
            </div>
          </div>

          <div class="number-operator">
            <h3>粒子数算符</h3>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>N̂(k) = â†(k)â(k)</p>
                <p>N̂(k)|n<sub>k</sub>⟩ = n<sub>k</sub>|n<sub>k</sub>⟩</p>
              </div>
              
              <h4>总粒子数：</h4>
              <div class="equation-block">
                <p>N̂ = ∫ d³k N̂(k) = ∫ d³k â†(k)â(k)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>哈密顿算符与能量本征值</h2>
        <div class="hamiltonian-analysis">
          <div class="hamiltonian-construction">
            <h3>哈密顿算符的构造</h3>
            <div class="mathematical-content">
              <h4>经典哈密顿量：</h4>
              <div class="equation-block">
                <p>H = ∫ d³x ℋ = ∫ d³x ½[π² + (∇φ)² + m²φ²]</p>
              </div>
              
              <h4>量子化后：</h4>
              <div class="equation-block">
                <p>Ĥ = ∫ d³k ω â†(k)â(k) + E₀</p>
                <p>其中 E₀ = ½∫ d³k ω 是零点能量</p>
              </div>
            </div>
          </div>

          <div class="energy-eigenvalues">
            <h3>能量本征值</h3>
            <div class="energy-spectrum">
              <div class="energy-level">
                <h4>真空能量：</h4>
                <div class="equation-block">
                  <p>Ĥ|0⟩ = E₀|0⟩</p>
                </div>
              </div>

              <div class="energy-level">
                <h4>单粒子能量：</h4>
                <div class="equation-block">
                  <p>Ĥ|k⟩ = (E₀ + ω)|k⟩</p>
                  <p>其中 ω = √(k² + m²)</p>
                </div>
              </div>

              <div class="energy-level">
                <h4>多粒子能量：</h4>
                <div class="equation-block">
                  <p>Ĥ|n<sub>k₁</sub>,n<sub>k₂</sub>,...⟩ = (E₀ + Σᵢnᵢωᵢ)|n<sub>k₁</sub>,n<sub>k₂</sub>,...⟩</p>
                </div>
              </div>
            </div>
          </div>

          <div class="zero-point-energy">
            <h3>零点能量问题</h3>
            <div class="zpe-discussion">
              <div class="problem-statement">
                <h4>发散问题：</h4>
                <div class="equation-block">
                  <p>E₀ = ½∫ d³k √(k² + m²) → ∞</p>
                </div>
              </div>

              <div class="solution-approaches">
                <h4>解决方案：</h4>
                <div class="approach-list">
                  <div class="approach-item">
                    <h5>正规排序</h5>
                    <p>:Ĥ: = ∫ d³k ω â†(k)â(k)</p>
                  </div>
                  <div class="approach-item">
                    <h5>重整化</h5>
                    <p>通过重新定义能量零点来消除发散</p>
                  </div>
                  <div class="approach-item">
                    <h5>Casimir效应</h5>
                    <p>在有限体积中，零点能量具有可观测效应</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>动量算符与洛伦兹不变性</h2>
        <div class="momentum-analysis">
          <div class="momentum-operator">
            <h3>动量算符</h3>
            <div class="mathematical-content">
              <h4>动量密度：</h4>
              <div class="equation-block">
                <p>T<sup>0i</sup> = π∂<sub>i</sub>φ</p>
              </div>
              
              <h4>总动量：</h4>
              <div class="equation-block">
                <p>P̂<sup>i</sup> = ∫ d³x T<sup>0i</sup> = ∫ d³k k<sup>i</sup> â†(k)â(k)</p>
              </div>
            </div>
          </div>

          <div class="lorentz-invariance">
            <h3>洛伦兹不变性</h3>
            <div class="invariance-properties">
              <div class="property-box">
                <h4>四动量算符：</h4>
                <div class="equation-block">
                  <p>P̂<sup>μ</sup> = (Ĥ/c, P̂)</p>
                  <p>P̂<sup>μ</sup>|k⟩ = k<sup>μ</sup>|k⟩</p>
                </div>
              </div>

              <div class="property-box">
                <h4>质壳条件：</h4>
                <div class="equation-block">
                  <p>P̂<sup>μ</sup>P̂<sub>μ</sub>|k⟩ = m²c²|k⟩</p>
                </div>
              </div>

              <div class="property-box">
                <h4>因果性：</h4>
                <div class="equation-block">
                  <p>[φ̂(x), φ̂(y)] = 0, (x-y)² < 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>复标量场的量子化</h2>
        <div class="complex-field-quantization">
          <div class="complex-field-setup">
            <h3>复Klein-Gordon场</h3>
            <div class="mathematical-content">
              <h4>拉格朗日密度：</h4>
              <div class="equation-block">
                <p>ℒ = (∂<sub>μ</sub>φ*)(∂<sup>μ</sup>φ) - m²φ*φ</p>
              </div>
              
              <h4>正则动量：</h4>
              <div class="equation-block">
                <p>π = ∂ℒ/∂(∂₀φ) = ∂₀φ*</p>
                <p>π* = ∂ℒ/∂(∂₀φ*) = ∂₀φ</p>
              </div>
            </div>
          </div>

          <div class="complex-quantization">
            <h3>量子化程序</h3>
            <div class="quantization-steps">
              <div class="step-box">
                <h4>对易关系：</h4>
                <div class="equation-block">
                  <p>[φ̂(x), π̂(y)] = iℏδ³(x-y)</p>
                  <p>[φ̂*(x), π̂*(y)] = iℏδ³(x-y)</p>
                </div>
              </div>

              <div class="step-box">
                <h4>模式展开：</h4>
                <div class="equation-block">
                  <p>φ̂(x) = ∫ d³k/√(2ω) [â(k)e<sup>-ikx</sup> + b̂†(k)e<sup>ikx</sup>]</p>
                  <p>φ̂*(x) = ∫ d³k/√(2ω) [â†(k)e<sup>ikx</sup> + b̂(k)e<sup>-ikx</sup>]</p>
                </div>
              </div>
            </div>
          </div>

          <div class="particle-antiparticle">
            <h3>粒子与反粒子</h3>
            <div class="particle-interpretation">
              <div class="particle-card particle">
                <div class="particle-icon">🔵</div>
                <h4>粒子</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>â†(k)|0⟩ = |k⟩</p>
                    <p>电荷：+e</p>
                    <p>能量：+ω</p>
                  </div>
                </div>
              </div>

              <div class="particle-card antiparticle">
                <div class="particle-icon">🔴</div>
                <h4>反粒子</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>b̂†(k)|0⟩ = |k̄⟩</p>
                    <p>电荷：-e</p>
                    <p>能量：+ω</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="charge-operator">
              <h4>电荷算符：</h4>
              <div class="equation-block">
                <p>Q̂ = e∫ d³k [â†(k)â(k) - b̂†(k)b̂(k)]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子场论的基本原理</h2>
        <div class="qft-principles">
          <div class="principle-grid">
            <div class="principle-card locality">
              <div class="principle-icon">📍</div>
              <h3>局域性</h3>
              <div class="principle-content">
                <p>场算符在类空分离的点处对易</p>
                <div class="equation-block">
                  <p>[φ̂(x), φ̂(y)] = 0, (x-y)² < 0</p>
                </div>
              </div>
            </div>

            <div class="principle-card causality">
              <div class="principle-icon">⏰</div>
              <h3>因果性</h3>
              <div class="principle-content">
                <p>信息传播不能超过光速</p>
                <p>类空分离事件不能相互影响</p>
              </div>
            </div>

            <div class="principle-card unitarity">
              <div class="principle-icon">🔄</div>
              <h3>幺正性</h3>
              <div class="principle-content">
                <p>概率守恒</p>
                <div class="equation-block">
                  <p>Û†Û = ÛÛ† = Î</p>
                </div>
              </div>
            </div>

            <div class="principle-card cluster">
              <div class="principle-icon">🎯</div>
              <h3>集团分解</h3>
              <div class="principle-content">
                <p>远距离事件统计独立</p>
                <p>相关函数在大距离处指数衰减</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验验证与物理应用</h2>
        <div class="experimental-verification">
          <div class="verification-examples">
            <div class="example-card lamb-shift">
              <h3>Lamb位移</h3>
              <div class="example-content">
                <p><strong>现象：</strong>氢原子能级的微小偏移</p>
                <p><strong>原因：</strong>电子与真空涨落的相互作用</p>
                <p><strong>意义：</strong>验证了量子场论的真空结构</p>
              </div>
            </div>

            <div class="example-card casimir">
              <h3>Casimir效应</h3>
              <div class="example-content">
                <p><strong>现象：</strong>平行导体板间的吸引力</p>
                <p><strong>原因：</strong>边界条件改变了零点能量</p>
                <p><strong>意义：</strong>直接观测到真空能量的效应</p>
              </div>
            </div>

            <div class="example-card particle-creation">
              <h3>粒子产生</h3>
              <div class="example-content">
                <p><strong>现象：</strong>高能碰撞中的粒子产生</p>
                <p><strong>原因：</strong>场的激发产生粒子-反粒子对</p>
                <p><strong>意义：</strong>验证了场的粒子解释</p>
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
              <li>正则对易关系</li>
              <li>产生湮灭算符</li>
              <li>Fock空间结构</li>
              <li>粒子数表象</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>📐 数学工具</h3>
            <ul>
              <li>模式展开技术</li>
              <li>正规排序</li>
              <li>对易关系代数</li>
              <li>洛伦兹不变性</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔬 物理应用</h3>
            <ul>
              <li>Klein-Gordon场量子化</li>
              <li>复标量场与反粒子</li>
              <li>真空涨落效应</li>
              <li>粒子产生过程</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 现代意义</h3>
            <ul>
              <li>量子场论基础</li>
              <li>粒子物理标准模型</li>
              <li>凝聚态多体理论</li>
              <li>量子信息理论</li>
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

.chapter-tag, .reading-time {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
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
  border-bottom: 3px solid #667eea;
  padding-bottom: 0.5rem;
}

.quantization-overview {
  margin-bottom: 2rem;
}

.concept-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.flow-step {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  min-width: 300px;
  transition: transform 0.3s ease;
}

.flow-step:hover {
  transform: translateY(-5px);
}

.flow-step.classical {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
}

.flow-step.quantum {
  background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);
  color: white;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.flow-step h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.step-content {
  text-align: left;
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.flow-arrow {
  font-size: 2rem;
  font-weight: bold;
  color: #667eea;
}

.kg-quantization {
  display: grid;
  gap: 2rem;
}

.classical-setup, .quantization-step {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #2196f3;
}

.classical-setup h3, .quantization-step h3 {
  color: #1565c0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
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
  border-left: 4px solid #667eea;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.quantization-rules {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

.rule-card {
  background: rgba(255,255,255,0.7);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.rule-card h4 {
  color: #1565c0;
  margin-bottom: 1rem;
}

.mode-expansion {
  display: grid;
  gap: 2rem;
}

.fourier-expansion, .creation-annihilation {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #e17055;
}

.fourier-expansion h3, .creation-annihilation h3 {
  color: #d63031;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.operator-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.property-card {
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.property-card.creation {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.property-card.annihilation {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
}

.operator-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.property-card h4 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.commutation-relations {
  background: rgba(255,255,255,0.7);
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.fock-space {
  display: grid;
  gap: 2rem;
}

.vacuum-state, .particle-states, .number-operator {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #8e44ad;
}

.vacuum-state h3, .particle-states h3, .number-operator h3 {
  color: #6c3483;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.vacuum-properties {
  background: rgba(255,255,255,0.7);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.vacuum-properties ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.state-construction {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.state-example {
  background: rgba(255,255,255,0.7);
  padding: 1rem;
  border-radius: 8px;
}

.state-example h4 {
  color: #6c3483;
  margin-bottom: 0.5rem;
}

.hamiltonian-analysis {
  display: grid;
  gap: 2rem;
}

.hamiltonian-construction, .energy-eigenvalues, .zero-point-energy {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.hamiltonian-construction h3, .energy-eigenvalues h3, .zero-point-energy h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.energy-spectrum {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.energy-level {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.energy-level h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.zpe-discussion {
  margin-top: 1rem;
}

.problem-statement, .solution-approaches {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
}

.approach-list {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.approach-item {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
}

.approach-item h5 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.momentum-analysis {
  display: grid;
  gap: 2rem;
}

.momentum-operator, .lorentz-invariance {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.momentum-operator h3, .lorentz-invariance h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.invariance-properties {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.property-box {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.property-box h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.complex-field-quantization {
  display: grid;
  gap: 2rem;
}

.complex-field-setup, .complex-quantization, .particle-antiparticle {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.complex-field-setup h3, .complex-quantization h3, .particle-antiparticle h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.quantization-steps {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.step-box {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.step-box h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.particle-interpretation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.particle-card {
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.particle-card.particle {
  background: rgba(52, 152, 219, 0.2);
  border: 2px solid #3498db;
}

.particle-card.antiparticle {
  background: rgba(231, 76, 60, 0.2);
  border: 2px solid #e74c3c;
}

.particle-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.particle-card h4 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.charge-operator {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  backdrop-filter: blur(10px);
}

.qft-principles {
  margin-top: 2rem;
}

.principle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.principle-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  transition: transform 0.3s ease;
}

.principle-card:hover {
  transform: translateY(-5px);
}

.principle-card.locality {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.principle-card.causality {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.principle-card.unitarity {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.principle-card.cluster {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.principle-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.principle-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.principle-content {
  text-align: left;
}

.experimental-verification {
  margin-top: 2rem;
}

.verification-examples {
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.example-card {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.example-card h3 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.example-content p {
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
  border-bottom-color: #667eea;
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
  color: #667eea;
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
  color: #667eea;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-flow {
    flex-direction: column;
  }
  
  .flow-arrow {
    transform: rotate(90deg);
  }
  
  .operator-properties,
  .particle-interpretation,
  .principle-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
}
</style>