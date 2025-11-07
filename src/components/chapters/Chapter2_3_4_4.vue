<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.4.4 复标量场</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">复标量场</span>
        <span class="chapter-tag">U(1)对称性</span>
        <span class="chapter-tag">粒子-反粒子</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>复标量场的物理意义</h2>
        <p class="lead-text">
          复标量场是量子场论中最重要的场类型之一，它自然地描述了带电粒子及其反粒子。
          通过U(1)对称性，复标量场展现了电荷守恒和粒子-反粒子对称性的深刻联系。
        </p>
      </section>

      <section class="content-section">
        <h2>复标量场的基本结构</h2>
        <div class="field-structure">
          <div class="field-definition">
            <h3>场的定义</h3>
            <div class="mathematical-content">
              <h4>复标量场：</h4>
              <div class="equation-block">
                <p>φ(x) = φ₁(x) + iφ₂(x)</p>
                <p>φ*(x) = φ₁(x) - iφ₂(x)</p>
              </div>
              
              <h4>实部与虚部：</h4>
              <div class="equation-block">
                <p>φ₁(x) = [φ(x) + φ*(x)]/2</p>
                <p>φ₂(x) = [φ(x) - φ*(x)]/(2i)</p>
              </div>
            </div>
          </div>

          <div class="degrees-freedom">
            <h3>自由度分析</h3>
            <div class="dof-comparison">
              <div class="dof-card real">
                <div class="dof-icon">1️⃣</div>
                <h4>实标量场</h4>
                <p>1个独立的实函数</p>
                <p>1个自由度</p>
              </div>
              
              <div class="dof-card complex">
                <div class="dof-icon">2️⃣</div>
                <h4>复标量场</h4>
                <p>2个独立的实函数</p>
                <p>2个自由度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>拉格朗日密度与运动方程</h2>
        <div class="lagrangian-analysis">
          <div class="lagrangian-construction">
            <h3>拉格朗日密度的构造</h3>
            <div class="mathematical-content">
              <h4>最一般形式：</h4>
              <div class="equation-block">
                <p>ℒ = (∂<sub>μ</sub>φ*)(∂<sup>μ</sup>φ) - m²φ*φ - V(φ*φ)</p>
              </div>
              
              <h4>自由场情况：</h4>
              <div class="equation-block">
                <p>ℒ₀ = (∂<sub>μ</sub>φ*)(∂<sup>μ</sup>φ) - m²φ*φ</p>
                <p>= ∂<sub>μ</sub>φ* ∂<sup>μ</sup>φ - m²|φ|²</p>
              </div>
            </div>
          </div>

          <div class="equations-motion">
            <h3>运动方程</h3>
            <div class="mathematical-content">
              <h4>欧拉-拉格朗日方程：</h4>
              <div class="equation-block">
                <p>∂<sub>μ</sub>∂<sup>μ</sup>φ + m²φ = 0</p>
                <p>∂<sub>μ</sub>∂<sup>μ</sup>φ* + m²φ* = 0</p>
              </div>
              
              <h4>Klein-Gordon方程：</h4>
              <div class="equation-block">
                <p>(□ + m²)φ = 0</p>
                <p>(□ + m²)φ* = 0</p>
                <p>其中 □ = ∂<sub>μ</sub>∂<sup>μ</sup> = ∂²/∂t² - ∇²</p>
              </div>
            </div>
          </div>

          <div class="canonical-momentum">
            <h3>正则动量</h3>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>π = ∂ℒ/∂(∂₀φ) = ∂₀φ*</p>
                <p>π* = ∂ℒ/∂(∂₀φ*) = ∂₀φ</p>
              </div>
              
              <div class="note-box">
                <p><strong>注意：</strong>φ和φ*被视为独立的场变量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>U(1)全局对称性</h2>
        <div class="u1-symmetry">
          <div class="symmetry-transformation">
            <h3>对称变换</h3>
            <div class="mathematical-content">
              <h4>全局U(1)变换：</h4>
              <div class="equation-block">
                <p>φ(x) → φ'(x) = e<sup>iα</sup>φ(x)</p>
                <p>φ*(x) → φ'*(x) = e<sup>-iα</sup>φ*(x)</p>
                <p>其中α是常数相位</p>
              </div>
              
              <h4>无穷小变换：</h4>
              <div class="equation-block">
                <p>δφ = iαφ</p>
                <p>δφ* = -iαφ*</p>
              </div>
            </div>
          </div>

          <div class="symmetry-verification">
            <h3>对称性验证</h3>
            <div class="mathematical-content">
              <h4>拉格朗日密度的变换：</h4>
              <div class="equation-block">
                <p>ℒ' = (∂<sub>μ</sub>φ'*)(∂<sup>μ</sup>φ') - m²φ'*φ'</p>
                <p>= (∂<sub>μ</sub>φ*)(∂<sup>μ</sup>φ) - m²φ*φ = ℒ</p>
              </div>
              
              <div class="verification-steps">
                <div class="step-item">
                  <h5>步骤1：导数变换</h5>
                  <p>∂<sub>μ</sub>φ' = e<sup>iα</sup>∂<sub>μ</sub>φ</p>
                </div>
                <div class="step-item">
                  <h5>步骤2：乘积不变性</h5>
                  <p>φ'*φ' = e<sup>-iα</sup>φ* · e<sup>iα</sup>φ = φ*φ</p>
                </div>
                <div class="step-item">
                  <h5>步骤3：拉格朗日不变</h5>
                  <p>ℒ' = ℒ ✓</p>
                </div>
              </div>
            </div>
          </div>

          <div class="noether-current">
            <h3>Noether流</h3>
            <div class="mathematical-content">
              <h4>守恒流的推导：</h4>
              <div class="equation-block">
                <p>J<sup>μ</sup> = (∂ℒ/∂(∂<sub>μ</sub>φ))δφ + (∂ℒ/∂(∂<sub>μ</sub>φ*))δφ*</p>
                <p>= ∂<sup>μ</sup>φ* · iαφ + ∂<sup>μ</sup>φ · (-iαφ*)</p>
                <p>= iα[∂<sup>μ</sup>φ*φ - φ*∂<sup>μ</sup>φ]</p>
              </div>
              
              <h4>电流密度：</h4>
              <div class="equation-block">
                <p>j<sup>μ</sup> = i[∂<sup>μ</sup>φ*φ - φ*∂<sup>μ</sup>φ]</p>
                <p>∂<sub>μ</sub>j<sup>μ</sup> = 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>正则量子化</h2>
        <div class="canonical-quantization">
          <div class="commutation-relations">
            <h3>正则对易关系</h3>
            <div class="mathematical-content">
              <h4>基本对易关系：</h4>
              <div class="equation-block">
                <p>[φ̂(x,t), π̂(y,t)] = iℏδ³(x-y)</p>
                <p>[φ̂*(x,t), π̂*(y,t)] = iℏδ³(x-y)</p>
                <p>[φ̂(x,t), π̂*(y,t)] = 0</p>
              </div>
              
              <h4>场算符间的对易关系：</h4>
              <div class="equation-block">
                <p>[φ̂(x,t), φ̂(y,t)] = 0</p>
                <p>[φ̂*(x,t), φ̂*(y,t)] = 0</p>
                <p>[φ̂(x,t), φ̂*(y,t)] = 0</p>
              </div>
            </div>
          </div>

          <div class="mode-expansion">
            <h3>模式展开</h3>
            <div class="mathematical-content">
              <h4>平面波展开：</h4>
              <div class="equation-block">
                <p>φ̂(x,t) = ∫ d³k/(2π)³ 1/√(2ω<sub>k</sub>) [â(k)e<sup>-iω<sub>k</sub>t+ik·x</sup> + b̂†(k)e<sup>iω<sub>k</sub>t-ik·x</sup>]</p>
              </div>
              
              <div class="equation-block">
                <p>φ̂*(x,t) = ∫ d³k/(2π)³ 1/√(2ω<sub>k</sub>) [â†(k)e<sup>iω<sub>k</sub>t-ik·x</sup> + b̂(k)e<sup>-iω<sub>k</sub>t+ik·x</sup>]</p>
              </div>
              
              <p>其中 ω<sub>k</sub> = √(k² + m²)</p>
            </div>
          </div>

          <div class="operator-algebra">
            <h3>算符代数</h3>
            <div class="mathematical-content">
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p>[â(k), â†(k')] = (2π)³δ³(k-k')</p>
                <p>[b̂(k), b̂†(k')] = (2π)³δ³(k-k')</p>
                <p>[â(k), b̂(k')] = [â(k), b̂†(k')] = 0</p>
              </div>
              
              <h4>真空条件：</h4>
              <div class="equation-block">
                <p>â(k)|0⟩ = 0, ∀k</p>
                <p>b̂(k)|0⟩ = 0, ∀k</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>粒子与反粒子</h2>
        <div class="particle-antiparticle">
          <div class="particle-interpretation">
            <h3>粒子解释</h3>
            <div class="particle-grid">
              <div class="particle-card particle">
                <div class="particle-header">
                  <div class="particle-icon">🔵</div>
                  <h4>粒子</h4>
                </div>
                <div class="particle-content">
                  <h5>产生算符：â†(k)</h5>
                  <div class="equation-block">
                    <p>â†(k)|0⟩ = |k⟩</p>
                  </div>
                  <div class="properties">
                    <div class="property">
                      <span class="prop-label">电荷：</span>
                      <span class="prop-value">+e</span>
                    </div>
                    <div class="property">
                      <span class="prop-label">能量：</span>
                      <span class="prop-value">+ω<sub>k</sub></span>
                    </div>
                    <div class="property">
                      <span class="prop-label">动量：</span>
                      <span class="prop-value">k</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="particle-card antiparticle">
                <div class="particle-header">
                  <div class="particle-icon">🔴</div>
                  <h4>反粒子</h4>
                </div>
                <div class="particle-content">
                  <h5>产生算符：b̂†(k)</h5>
                  <div class="equation-block">
                    <p>b̂†(k)|0⟩ = |k̄⟩</p>
                  </div>
                  <div class="properties">
                    <div class="property">
                      <span class="prop-label">电荷：</span>
                      <span class="prop-value">-e</span>
                    </div>
                    <div class="property">
                      <span class="prop-label">能量：</span>
                      <span class="prop-value">+ω<sub>k</sub></span>
                    </div>
                    <div class="property">
                      <span class="prop-label">动量：</span>
                      <span class="prop-value">k</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="charge-conjugation">
            <h3>电荷共轭对称性</h3>
            <div class="mathematical-content">
              <h4>电荷共轭变换：</h4>
              <div class="equation-block">
                <p>C: φ̂ ↔ φ̂*</p>
                <p>C: â(k) ↔ b̂(k)</p>
                <p>C: â†(k) ↔ b̂†(k)</p>
              </div>
              
              <h4>物理意义：</h4>
              <ul class="physics-meaning">
                <li>粒子与反粒子的对称性</li>
                <li>电荷符号的反转</li>
                <li>CPT定理的基础</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>守恒量与对称性</h2>
        <div class="conserved-quantities">
          <div class="charge-conservation">
            <h3>电荷守恒</h3>
            <div class="mathematical-content">
              <h4>电荷算符：</h4>
              <div class="equation-block">
                <p>Q̂ = e∫ d³x j⁰(x)</p>
                <p>= e∫ d³k [â†(k)â(k) - b̂†(k)b̂(k)]</p>
              </div>
              
              <h4>本征值：</h4>
              <div class="charge-eigenvalues">
                <div class="eigenvalue-item">
                  <span class="state">|0⟩</span>
                  <span class="arrow">→</span>
                  <span class="charge">Q = 0</span>
                </div>
                <div class="eigenvalue-item">
                  <span class="state">|k⟩</span>
                  <span class="arrow">→</span>
                  <span class="charge">Q = +e</span>
                </div>
                <div class="eigenvalue-item">
                  <span class="state">|k̄⟩</span>
                  <span class="arrow">→</span>
                  <span class="charge">Q = -e</span>
                </div>
              </div>
            </div>
          </div>

          <div class="energy-momentum">
            <h3>能量-动量</h3>
            <div class="mathematical-content">
              <h4>哈密顿算符：</h4>
              <div class="equation-block">
                <p>Ĥ = ∫ d³k ω<sub>k</sub> [â†(k)â(k) + b̂†(k)b̂(k)]</p>
              </div>
              
              <h4>动量算符：</h4>
              <div class="equation-block">
                <p>P̂ = ∫ d³k k [â†(k)â(k) + b̂†(k)b̂(k)]</p>
              </div>
              
              <div class="note-box">
                <p><strong>注意：</strong>粒子和反粒子都贡献正能量</p>
              </div>
            </div>
          </div>

          <div class="particle-number">
            <h3>粒子数算符</h3>
            <div class="mathematical-content">
              <h4>粒子数算符：</h4>
              <div class="equation-block">
                <p>N̂<sub>a</sub> = ∫ d³k â†(k)â(k)</p>
                <p>N̂<sub>b</sub> = ∫ d³k b̂†(k)b̂(k)</p>
              </div>
              
              <h4>总粒子数：</h4>
              <div class="equation-block">
                <p>N̂ = N̂<sub>a</sub> + N̂<sub>b</sub></p>
              </div>
              
              <h4>净电荷数：</h4>
              <div class="equation-block">
                <p>Q̂/e = N̂<sub>a</sub> - N̂<sub>b</sub></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>相互作用与自耦合</h2>
        <div class="interactions">
          <div class="self-interaction">
            <h3>φ⁴自相互作用</h3>
            <div class="mathematical-content">
              <h4>相互作用拉格朗日：</h4>
              <div class="equation-block">
                <p>ℒ<sub>int</sub> = -λ(φ*φ)²</p>
                <p>= -λ|φ|⁴</p>
              </div>
              
              <h4>完整拉格朗日密度：</h4>
              <div class="equation-block">
                <p>ℒ = (∂<sub>μ</sub>φ*)(∂<sup>μ</sup>φ) - m²φ*φ - λ(φ*φ)²</p>
              </div>
            </div>
          </div>

          <div class="symmetry-breaking">
            <h3>自发对称性破缺</h3>
            <div class="mathematical-content">
              <h4>墨西哥帽势：</h4>
              <div class="equation-block">
                <p>V(φ) = -μ²φ*φ + λ(φ*φ)²</p>
                <p>μ² > 0, λ > 0</p>
              </div>
              
              <h4>真空期望值：</h4>
              <div class="equation-block">
                <p>⟨0|φ|0⟩ = v = √(μ²/2λ)</p>
              </div>
              
              <div class="breaking-consequences">
                <h5>对称性破缺的后果：</h5>
                <ul>
                  <li>U(1)对称性自发破缺</li>
                  <li>出现Goldstone玻色子</li>
                  <li>质量生成机制</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="gauge-coupling">
            <h3>规范场耦合</h3>
            <div class="mathematical-content">
              <h4>协变导数：</h4>
              <div class="equation-block">
                <p>D<sub>μ</sub>φ = (∂<sub>μ</sub> - ieA<sub>μ</sub>)φ</p>
                <p>D<sub>μ</sub>φ* = (∂<sub>μ</sub> + ieA<sub>μ</sub>)φ*</p>
              </div>
              
              <h4>规范不变拉格朗日：</h4>
              <div class="equation-block">
                <p>ℒ = (D<sub>μ</sub>φ)*(D<sup>μ</sup>φ) - m²φ*φ - ¼F<sub>μν</sub>F<sup>μν</sup></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理应用实例</h2>
        <div class="physical-applications">
          <div class="application-grid">
            <div class="app-card higgs">
              <div class="app-icon">⚛️</div>
              <h3>Higgs机制</h3>
              <div class="app-content">
                <h4>基本思想：</h4>
                <p>复标量场的自发对称性破缺给规范玻色子提供质量</p>
                <h4>关键要素：</h4>
                <ul>
                  <li>复标量场φ</li>
                  <li>墨西哥帽势</li>
                  <li>规范场耦合</li>
                  <li>质量生成</li>
                </ul>
              </div>
            </div>

            <div class="app-card superconductivity">
              <div class="app-icon">🔌</div>
              <h3>超导理论</h3>
              <div class="app-content">
                <h4>Cooper对场：</h4>
                <p>电子对形成的复标量场描述超导序参量</p>
                <h4>关键特征：</h4>
                <ul>
                  <li>U(1)规范对称性破缺</li>
                  <li>Meissner效应</li>
                  <li>能隙形成</li>
                  <li>Josephson效应</li>
                </ul>
              </div>
            </div>

            <div class="app-card cosmology">
              <div class="app-icon">🌌</div>
              <h3>宇宙学应用</h3>
              <div class="app-content">
                <h4>暴胀场：</h4>
                <p>复标量场驱动宇宙早期的指数膨胀</p>
                <h4>重要作用：</h4>
                <ul>
                  <li>暴胀动力学</li>
                  <li>密度扰动</li>
                  <li>重加热过程</li>
                  <li>暗能量候选</li>
                </ul>
              </div>
            </div>

            <div class="app-card condensed-matter">
              <div class="app-icon">🔬</div>
              <h3>凝聚态物理</h3>
              <div class="app-content">
                <h4>序参量场：</h4>
                <p>描述各种有序相的复序参量</p>
                <h4>典型例子：</h4>
                <ul>
                  <li>超流体He-4</li>
                  <li>Bose-Einstein凝聚</li>
                  <li>量子相变</li>
                  <li>拓扑相</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数值计算与模拟</h2>
        <div class="numerical-methods">
          <div class="lattice-field-theory">
            <h3>格点场论</h3>
            <div class="mathematical-content">
              <h4>离散化：</h4>
              <div class="equation-block">
                <p>φ(x) → φ<sub>n</sub>, x → na</p>
                <p>∂<sub>μ</sub>φ → [φ<sub>n+μ̂</sub> - φ<sub>n</sub>]/a</p>
              </div>
              
              <h4>格点作用量：</h4>
              <div class="equation-block">
                <p>S = a⁴ Σ<sub>n</sub> [Σ<sub>μ</sub>|φ<sub>n+μ̂</sub> - φ<sub>n</sub>|²/a² + m²|φ<sub>n</sub>|² + λ|φ<sub>n</sub>|⁴]</p>
              </div>
            </div>
          </div>

          <div class="monte-carlo">
            <h3>Monte Carlo方法</h3>
            <div class="mc-steps">
              <div class="step-card">
                <h4>步骤1：路径积分</h4>
                <div class="equation-block">
                  <p>Z = ∫ Dφ Dφ* e<sup>-S[φ,φ*]</sup></p>
                </div>
              </div>
              
              <div class="step-card">
                <h4>步骤2：重要性采样</h4>
                <p>根据玻尔兹曼权重生成场构型</p>
              </div>
              
              <div class="step-card">
                <h4>步骤3：可观测量计算</h4>
                <div class="equation-block">
                  <p>⟨O⟩ = ⟨O[φ]⟩<sub>MC</sub></p>
                </div>
              </div>
            </div>
          </div>

          <div class="computational-challenges">
            <h3>计算挑战</h3>
            <div class="challenge-list">
              <div class="challenge-item">
                <h4>符号问题</h4>
                <p>复作用量导致的Monte Carlo符号问题</p>
              </div>
              
              <div class="challenge-item">
                <h4>临界慢化</h4>
                <p>相变点附近的长关联时间</p>
              </div>
              
              <div class="challenge-item">
                <h4>有限尺寸效应</h4>
                <p>格点尺寸对物理结果的影响</p>
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
              <li>复标量场的双重自由度</li>
              <li>U(1)全局对称性</li>
              <li>粒子-反粒子对称性</li>
              <li>电荷守恒定律</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>📐 数学工具</h3>
            <ul>
              <li>复场的模式展开</li>
              <li>产生湮灭算符代数</li>
              <li>Noether定理应用</li>
              <li>对称性分析方法</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔬 物理应用</h3>
            <ul>
              <li>Higgs机制</li>
              <li>超导理论</li>
              <li>宇宙学暴胀</li>
              <li>凝聚态序参量</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 现代发展</h3>
            <ul>
              <li>标准模型基础</li>
              <li>对称性破缺机制</li>
              <li>拓扑场论</li>
              <li>量子相变理论</li>
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
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
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
  border-bottom: 3px solid #f093fb;
  padding-bottom: 0.5rem;
}

.field-structure {
  display: grid;
  gap: 2rem;
}

.field-definition, .degrees-freedom {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #2196f3;
}

.field-definition h3, .degrees-freedom h3 {
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
  border-left: 4px solid #f093fb;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.dof-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.dof-card {
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
}

.dof-card:hover {
  transform: translateY(-5px);
}

.dof-card.real {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
}

.dof-card.complex {
  background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);
  color: white;
}

.dof-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.dof-card h4 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.lagrangian-analysis {
  display: grid;
  gap: 2rem;
}

.lagrangian-construction, .equations-motion, .canonical-momentum {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #e17055;
}

.lagrangian-construction h3, .equations-motion h3, .canonical-momentum h3 {
  color: #d63031;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.note-box {
  background: rgba(255, 193, 7, 0.1);
  border: 1px solid #ffc107;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.u1-symmetry {
  display: grid;
  gap: 2rem;
}

.symmetry-transformation, .symmetry-verification, .noether-current {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.symmetry-transformation h3, .symmetry-verification h3, .noether-current h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.verification-steps {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.step-item {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.step-item h5 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.canonical-quantization {
  display: grid;
  gap: 2rem;
}

.commutation-relations, .mode-expansion, .operator-algebra {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.commutation-relations h3, .mode-expansion h3, .operator-algebra h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.particle-antiparticle {
  display: grid;
  gap: 2rem;
}

.particle-interpretation, .charge-conjugation {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 2rem;
  border-radius: 15px;
}

.particle-interpretation h3, .charge-conjugation h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.particle-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.particle-card {
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.particle-card:hover {
  transform: translateY(-5px);
}

.particle-card.particle {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
}

.particle-card.antiparticle {
  background: linear-gradient(135deg, #fd79a8 0%, #e84393 100%);
  color: white;
}

.particle-header {
  padding: 1.5rem;
  text-align: center;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
}

.particle-icon {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.particle-header h4 {
  margin: 0;
  font-size: 1.3rem;
}

.particle-content {
  padding: 1.5rem;
}

.particle-content h5 {
  margin-bottom: 1rem;
  color: #ffd700;
}

.properties {
  display: grid;
  gap: 0.5rem;
  margin-top: 1rem;
}

.property {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background: rgba(255,255,255,0.1);
  border-radius: 5px;
}

.prop-label {
  font-weight: bold;
}

.prop-value {
  color: #ffd700;
}

.physics-meaning {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.physics-meaning li {
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.2);
}

.physics-meaning li:last-child {
  border-bottom: none;
}

.physics-meaning li::before {
  content: "▸ ";
  color: #ffd700;
  font-weight: bold;
}

.conserved-quantities {
  display: grid;
  gap: 2rem;
}

.charge-conservation, .energy-momentum, .particle-number {
  background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #8e44ad;
}

.charge-conservation h3, .energy-momentum h3, .particle-number h3 {
  color: #6c3483;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.charge-eigenvalues {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.eigenvalue-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255,255,255,0.7);
  border-radius: 8px;
}

.state {
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: #6c3483;
}

.arrow {
  color: #8e44ad;
  font-weight: bold;
}

.charge {
  font-weight: bold;
  color: #d63031;
}

.interactions {
  display: grid;
  gap: 2rem;
}

.self-interaction, .symmetry-breaking, .gauge-coupling {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.self-interaction h3, .symmetry-breaking h3, .gauge-coupling h3 {
  color: #3498db;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.breaking-consequences {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  backdrop-filter: blur(10px);
}

.breaking-consequences h5 {
  color: #3498db;
  margin-bottom: 0.5rem;
}

.breaking-consequences ul {
  list-style: none;
  padding: 0;
}

.breaking-consequences li {
  padding: 0.3rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.breaking-consequences li:last-child {
  border-bottom: none;
}

.breaking-consequences li::before {
  content: "▸ ";
  color: #3498db;
  font-weight: bold;
}

.physical-applications {
  margin-top: 2rem;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.app-card {
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  color: white;
  transition: transform 0.3s ease;
}

.app-card:hover {
  transform: translateY(-5px);
}

.app-card.higgs {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.app-card.superconductivity {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.app-card.cosmology {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.app-card.condensed-matter {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
}

.app-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.app-card h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.app-content {
  text-align: left;
}

.app-content h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.app-content ul {
  list-style: none;
  padding: 0;
  margin-top: 0.5rem;
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

.numerical-methods {
  display: grid;
  gap: 2rem;
}

.lattice-field-theory, .monte-carlo, .computational-challenges {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 15px;
  color: white;
}

.lattice-field-theory h3, .monte-carlo h3, .computational-challenges h3 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
}

.mc-steps {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.step-card {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.step-card h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
}

.challenge-list {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.challenge-item {
  background: rgba(255,255,255,0.1);
  padding: 1rem;
  border-radius: 8px;
  backdrop-filter: blur(10px);
}

.challenge-item h4 {
  color: #ffd700;
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
  border-bottom-color: #f093fb;
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
  color: #f093fb;
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
  color: #f093fb;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .dof-comparison,
  .particle-grid,
  .application-grid,
  .summary-grid {
    grid-template-columns: 1fr;
  }
  
  .eigenvalue-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>