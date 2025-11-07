<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.4 论证中的二次量子化与Noether定理</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">对称性</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>对称性与守恒定律的深层联系</h2>
        <p class="lead-text">
          Noether定理揭示了对称性与守恒定律之间的深刻联系。在二次量子化框架下，
          这种联系变得更加清晰和优美，为理解多体系统的守恒性质提供了强有力的工具。
        </p>
      </section>

      <section class="content-section">
        <h2>Noether定理的基本表述</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚖️</div>
            <h3>经典表述</h3>
            <p>连续对称性与守恒流</p>
            <div class="mathematical-content">
              <h4>Noether定理：</h4>
              <div class="equation-block">
                <p>每个连续对称性 ↔ 一个守恒流</p>
                <p>∂μjμ = 0</p>
              </div>
              
              <h4>守恒荷：</h4>
              <div class="equation-block">
                <p>Q = ∫ j⁰ d³x</p>
                <p>dQ/dt = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>量子版本</h3>
            <p>算符形式的守恒定律</p>
            <div class="mathematical-content">
              <h4>守恒算符：</h4>
              <div class="equation-block">
                <p>[Ĥ, Q̂] = 0</p>
                <p>dQ̂/dt = 0</p>
              </div>
              
              <h4>Ward恒等式：</h4>
              <div class="equation-block">
                <p>对称性 → 格林函数间的关系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>二次量子化中的对称性</h2>
        <div class="symmetry-grid">
          <div class="symmetry-card translation">
            <h3>🌐 平移对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>ψ̂(r) → ψ̂(r + a)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>P̂ = ∫ ψ̂†(r)(-iℏ∇)ψ̂(r) d³r</p>
                <p>动量守恒</p>
              </div>
            </div>
          </div>

          <div class="symmetry-card rotation">
            <h3>🔄 旋转对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>ψ̂(r) → e^(-iα·Ĵ/ℏ)ψ̂(r)e^(iα·Ĵ/ℏ)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>Ĵ = ∫ ψ̂†(r)(r × (-iℏ∇))ψ̂(r) d³r</p>
                <p>角动量守恒</p>
              </div>
            </div>
          </div>

          <div class="symmetry-card gauge">
            <h3>⚡ 规范对称性</h3>
            <div class="mathematical-content">
              <h4>U(1)变换：</h4>
              <div class="equation-block">
                <p>ψ̂(r) → e^(iα)ψ̂(r)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>N̂ = ∫ ψ̂†(r)ψ̂(r) d³r</p>
                <p>粒子数守恒</p>
              </div>
            </div>
          </div>

          <div class="symmetry-card time">
            <h3>⏰ 时间平移对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>t → t + τ</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>Ĥ = 哈密顿算符</p>
                <p>能量守恒</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>生成元与李代数</h2>
        <div class="physics-insight">
          <h3>🎯 代数结构</h3>
          <p>对称性变换的生成元构成李代数：</p>
          <ul>
            <li><strong>生成元：</strong>无穷小变换的系数</li>
            <li><strong>对易关系：</strong>定义李代数结构</li>
            <li><strong>Casimir算符：</strong>与所有生成元对易</li>
            <li><strong>表示理论：</strong>不可约表示分类量子态</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2>具体应用示例</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>电荷守恒</h3>
            <p>U(1)规范对称性的结果</p>
            <div class="mathematical-content">
              <h4>电流算符：</h4>
              <div class="equation-block">
                <p>ĵμ(x) = eψ̂†(x)γμψ̂(x)</p>
              </div>
              
              <h4>连续性方程：</h4>
              <div class="equation-block">
                <p>∂μĵμ = 0</p>
                <p>∂ρ̂/∂t + ∇·ĵ = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>自旋守恒</h3>
            <p>SU(2)对称性与自旋</p>
            <div class="mathematical-content">
              <h4>自旋算符：</h4>
              <div class="equation-block">
                <p>Ŝᵢ = (ℏ/2)∫ ψ̂†(r)σᵢψ̂(r) d³r</p>
              </div>
              
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p>[Ŝᵢ, Ŝⱼ] = iℏεᵢⱼₖŜₖ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>物理应用</h2>
        <div class="example-box">
          <h3>例1：晶体中的对称性</h3>
          <p>点群和空间群对称性：</p>
          <div class="equation-block">
            <p>Ĥ = T̂ + V̂(r + R)</p>
            <p>R为晶格矢量，导致Bloch定理</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：超导中的规范对称性破缺</h3>
          <p>U(1)对称性的自发破缺：</p>
          <div class="equation-block">
            <p>⟨ψ̂(r)⟩ ≠ 0</p>
            <p>产生Goldstone模式和Meissner效应</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>对称性破缺与相变</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">💥</div>
            <h3>自发对称性破缺</h3>
            <p>基态不具有哈密顿量的对称性</p>
            <div class="mathematical-content">
              <h4>序参量：</h4>
              <div class="equation-block">
                <p>⟨Ô⟩ ≠ 0</p>
                <p>Ô在对称变换下非平凡变换</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>Goldstone定理</h3>
            <p>连续对称性破缺的后果</p>
            <div class="mathematical-content">
              <h4>Goldstone模式：</h4>
              <div class="equation-block">
                <p>每个破缺的连续对称性</p>
                <p>→ 一个无质量的Goldstone玻色子</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>场论中的二次量子化与Noether定理</h2>
        <div class="detailed-derivation">
          <div class="derivation-section">
            <h3>🌊 Klein-Gordon方程的二次量子化</h3>
            <div class="mathematical-content">
              <h4>Klein-Gordon方程：</h4>
              <div class="equation-block">
                <p>(∂² + m²)φ = 0</p>
                <p>其中 ∂² = ∂μ∂μ 是d'Alembert算符</p>
              </div>
              
              <h4>拉格朗日密度：</h4>
              <div class="equation-block">
                <p>ℒ = ½(∂μφ)(∂μφ) - ½m²φ²</p>
                <p>= ½[(∂₀φ)² - (∇φ)² - m²φ²]</p>
              </div>
              
              <h4>正则动量：</h4>
              <div class="equation-block">
                <p>π = ∂ℒ/∂(∂₀φ) = ∂₀φ</p>
                <p>哈密顿密度：ℋ = πφ̇ - ℒ</p>
              </div>
            </div>
          </div>

          <div class="derivation-section">
            <h3>⚖️ 对称性变换与守恒流</h3>
            <div class="mathematical-content">
              <h4>无穷小变换：</h4>
              <div class="equation-block">
                <p>φ(x) → φ'(x) = φ(x) + δφ(x)</p>
                <p>xμ → x'μ = xμ + δxμ</p>
              </div>
              
              <h4>作用量的变分：</h4>
              <div class="equation-block">
                <p>δS = ∫ d⁴x [∂ℒ/∂φ δφ + ∂ℒ/∂(∂μφ) δ(∂μφ)]</p>
                <p>= ∫ d⁴x ∂μ[∂ℒ/∂(∂μφ) δφ]</p>
              </div>
              
              <h4>Noether流：</h4>
              <div class="equation-block">
                <p>jμ = ∂ℒ/∂(∂μφ) δφ - ℒδxμ</p>
                <p>连续性方程：∂μjμ = 0</p>
              </div>
            </div>
          </div>

          <div class="derivation-section">
            <h3>🔄 具体对称性的应用</h3>
            <div class="symmetry-applications">
              <div class="application-card">
                <h4>时空平移对称性</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>时间平移：δt = ε, δφ = 0</p>
                    <p>能量-动量张量：Tμν = ∂ℒ/∂(∂μφ) ∂νφ - ℒgμν</p>
                    <p>守恒流：jμ = Tμν ∂νxα</p>
                  </div>
                </div>
              </div>
              
              <div class="application-card">
                <h4>内部对称性</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>U(1)相位变换：φ → e^(iα)φ</p>
                    <p>守恒流：jμ = i[φ*∂μφ - φ∂μφ*]</p>
                    <p>守恒荷：Q = ∫ j⁰ d³x</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-section">
            <h3>📊 量子化与算符形式</h3>
            <div class="mathematical-content">
              <h4>正则量子化：</h4>
              <div class="equation-block">
                <p>[φ̂(x), π̂(y)]|_{x⁰=y⁰} = iℏδ³(x - y)</p>
                <p>[φ̂(x), φ̂(y)]|_{x⁰=y⁰} = 0</p>
                <p>[π̂(x), π̂(y)]|_{x⁰=y⁰} = 0</p>
              </div>
              
              <h4>场算符展开：</h4>
              <div class="equation-block">
                <p>φ̂(x) = ∫ d³k/(2π)³ 1/√(2E_k) [a_k e^(-ik·x) + b_k† e^(ik·x)]</p>
                <p>其中 E_k = √(k² + m²)</p>
              </div>
              
              <h4>守恒算符：</h4>
              <div class="equation-block">
                <p>Q̂ = ∫ ĵ⁰(x) d³x</p>
                <p>[Ĥ, Q̂] = 0 (守恒性)</p>
              </div>
            </div>
          </div>

          <div class="derivation-section">
            <h3>🎯 物理意义与应用</h3>
            <div class="physics-interpretation">
              <div class="interpretation-grid">
                <div class="interpretation-card">
                  <h4>🔬 微观层面</h4>
                  <ul>
                    <li>粒子的创生与湮灭</li>
                    <li>反粒子的自然出现</li>
                    <li>真空涨落的量子效应</li>
                    <li>因果性与微观因果律</li>
                  </ul>
                </div>
                
                <div class="interpretation-card">
                  <h4>⚖️ 宏观守恒律</h4>
                  <ul>
                    <li>能量-动量守恒</li>
                    <li>电荷守恒定律</li>
                    <li>角动量守恒</li>
                    <li>重子数与轻子数守恒</li>
                  </ul>
                </div>
                
                <div class="interpretation-card">
                  <h4>🌐 场论结构</h4>
                  <ul>
                    <li>拉格朗日形式主义</li>
                    <li>规范不变性</li>
                    <li>重整化理论</li>
                    <li>相互作用的统一描述</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>深入的物理分析与理论讲解</h2>
        <div class="analysis-section">
          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🔬</div>
              <h3>Klein-Gordon方程的深层物理意义</h3>
            </div>
            <div class="insight-content">
              <p>Klein-Gordon方程是描述自旋为0的相对论性粒子的基本方程，它在量子场论中占据核心地位。该方程的二次量子化不仅提供了处理多粒子系统的数学工具，更重要的是揭示了场与粒子之间的深刻联系：</p>
              
              <div class="key-points">
                <div class="point-item">
                  <h4>🎯 相对论协变性</h4>
                  <p>Klein-Gordon方程天然满足洛伦兹协变性，这意味着物理定律在所有惯性参考系中都具有相同的形式。方程中的d'Alembert算符∂² = ∂μ∂μ是一个洛伦兹标量，确保了方程在时空变换下的不变性。</p>
                </div>
                
                <div class="point-item">
                  <h4>⚡ 场的量子化意义</h4>
                  <p>在二次量子化中，经典场φ(x)被提升为算符φ̂(x)，这个过程不仅仅是数学上的替换，而是物理概念的根本转变。场算符的展开式中包含了产生算符a†_k和湮灭算符a_k，它们分别对应于在动量k状态下创造和消灭粒子的过程。</p>
                </div>
                
                <div class="point-item">
                  <h4>🌊 真空涨落与虚粒子</h4>
                  <p>量子化后的场即使在真空态中也存在零点涨落，这些涨落对应于虚粒子对的不断创生和湮灭。这种量子涨落是许多重要物理现象的根源，如Casimir效应、Hawking辐射等。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">⚖️</div>
              <h3>Noether定理的现代理解</h3>
            </div>
            <div class="insight-content">
              <p>Noether定理不仅是经典力学中的一个重要结果，在量子场论中更是具有深远的意义。它建立了对称性与守恒定律之间的一一对应关系，这种对应关系在现代物理学的各个分支中都发挥着核心作用：</p>
              
              <div class="key-points">
                <div class="point-item">
                  <h4>🔄 连续对称性与守恒流</h4>
                  <p>每一个连续的对称性变换都对应一个守恒的流密度jμ。这个流密度满足连续性方程∂μjμ = 0，从而保证了相应的守恒荷Q = ∫j⁰d³x在时间演化过程中保持不变。这种数学结构反映了物理定律的深层对称性。</p>
                </div>
                
                <div class="point-item">
                  <h4>🌐 规范对称性的特殊地位</h4>
                  <p>规范对称性在现代物理学中具有特殊的重要性。U(1)规范对称性对应电荷守恒，SU(2)对应弱同位旋守恒，SU(3)对应色荷守恒。这些对称性不仅决定了基本相互作用的形式，还通过规范场的引入统一了我们对自然界基本力的理解。</p>
                </div>
                
                <div class="point-item">
                  <h4>💥 对称性破缺与物理现象</h4>
                  <p>当系统的基态不再具有哈密顿量的完全对称性时，就会发生自发对称性破缺。这种破缺机制是理解相变、质量产生机制（Higgs机制）、以及凝聚态物理中各种有序态的关键。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🎯</div>
              <h3>量子场论中的技术要点</h3>
            </div>
            <div class="insight-content">
              <p>从技术角度来看，Klein-Gordon场的量子化涉及许多精妙的数学和物理概念，这些概念在现代量子场论中都是基础性的：</p>
              
              <div class="key-points">
                <div class="point-item">
                  <h4>📊 正则量子化程序</h4>
                  <p>正则量子化通过引入正则对易关系[φ̂(x), π̂(y)] = iℏδ³(x-y)将经典场理论转换为量子理论。这个对易关系确保了场算符在不同时空点的因果性，即类空分离的点处场算符相互对易。</p>
                </div>
                
                <div class="point-item">
                  <h4>🌊 模式展开与粒子解释</h4>
                  <p>场算符的模式展开φ̂(x) = ∫d³k[a_k e^(-ik·x) + b†_k e^(ik·x)]/(2π)³√(2E_k)提供了粒子图像的数学基础。正频率部分对应粒子的湮灭，负频率部分对应反粒子的创生，这种结构自然地包含了粒子-反粒子的对称性。</p>
                </div>
                
                <div class="point-item">
                  <h4>⚡ 能量-动量关系</h4>
                  <p>相对论性的能量-动量关系E_k = √(k² + m²)直接体现在场算符的展开中。这个关系不仅决定了粒子的色散关系，还通过质量项m²的存在区分了有质量粒子和无质量粒子的不同物理性质。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🌟</div>
              <h3>现代物理学中的应用与发展</h3>
            </div>
            <div class="insight-content">
              <p>Klein-Gordon方程和Noether定理的结合在现代物理学的各个领域都有重要应用，从粒子物理到凝聚态物理，从宇宙学到量子信息：</p>
              
              <div class="key-points">
                <div class="point-item">
                  <h4>🔬 标准模型中的应用</h4>
                  <p>在粒子物理标准模型中，Higgs场就是一个Klein-Gordon型的标量场。通过自发对称性破缺机制，Higgs场的真空期望值为其他粒子提供质量，这是现代粒子物理学的核心机制之一。</p>
                </div>
                
                <div class="point-item">
                  <h4>🌌 宇宙学中的暴胀场</h4>
                  <p>在宇宙学中，暴胀子场通常被建模为Klein-Gordon场。这个场的动力学演化驱动了宇宙早期的暴胀过程，解释了宇宙的平坦性、均匀性等观测特征。</p>
                </div>
                
                <div class="point-item">
                  <h4>🔗 凝聚态物理中的类比</h4>
                  <p>在凝聚态物理中，许多集体激发模式可以用有效的Klein-Gordon方程描述。例如，超导体中的Higgs模式、磁性系统中的自旋波等，都可以在适当的长波长极限下用类似的场论方法处理。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-grid">
          <div class="modern-item">
            <h3>🔗 拓扑序</h3>
            <p>超越Landau范式的量子序</p>
          </div>
          <div class="modern-item">
            <h3>🌐 规范/引力对偶</h3>
            <p>AdS/CFT对应中的对称性</p>
          </div>
          <div class="modern-item">
            <h3>⚛️ 量子信息</h3>
            <p>纠缠与对称性的关系</p>
          </div>
          <div class="modern-item">
            <h3>🔄 异常</h3>
            <p>量子层面的对称性破坏</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>Noether定理建立对称性与守恒定律的对应</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>二次量子化自然体现各种对称性</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>对称性破缺导致丰富的物理现象</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>现代物理中对称性概念不断发展</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3_4',
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
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 新增样式 */
.detailed-derivation {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid #dee2e6;
}

.derivation-section {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #17a2b8;
}

.derivation-section h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.symmetry-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.application-card {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #ffc107;
}

.application-card h4 {
  color: #856404;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.physics-interpretation {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 12px;
  margin-top: 1rem;
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.interpretation-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-top: 3px solid #28a745;
}

.interpretation-card h4 {
  color: #155724;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.interpretation-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.interpretation-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
  position: relative;
  padding-left: 1.5rem;
}

.interpretation-card li:last-child {
  border-bottom: none;
}

.interpretation-card li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #28a745;
  font-size: 0.8rem;
}

/* 新增分析部分样式 */
.analysis-section {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  border: 1px solid #b3d9ff;
}

.insight-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.insight-icon {
  font-size: 2rem;
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
}

.insight-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.insight-content > p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  gap: 1.5rem;
}

.point-item {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #007bff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.point-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.2);
}

.point-item h4 {
  color: #0056b3;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.point-item p {
  color: #495057;
  line-height: 1.6;
  margin: 0;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #17a2b8;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: linear-gradient(135deg, #17a2b8 0%, #20c997 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  color: #666;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
}

.introduction {
  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #0c5460;
  font-weight: 500;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.symmetry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.symmetry-card {
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.translation {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border: 2px solid #4caf50;
}

.rotation {
  background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
  border: 2px solid #ff9800;
}

.gauge {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border: 2px solid #9c27b0;
}

.time {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 2px solid #2196f3;
}

.symmetry-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.mathematical-content h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #17a2b8;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #fff2cc 0%, #ffe082 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #f57f17;
  margin-bottom: 1rem;
}

.physics-insight ul {
  list-style: none;
  padding: 0;
}

.physics-insight li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.physics-insight li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #f57f17;
  font-weight: bold;
}

.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.modern-item {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.modern-item h3 {
  color: #ad1457;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.applications {
  margin: 3rem 0;
}

.example-box {
  background: #f0f8ff;
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.example-box h3 {
  color: #0056b3;
  margin-bottom: 1rem;
}

.summary {
  background: linear-gradient(135deg, #17a2b8 0%, #20c997 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary h2 {
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: rgba(255, 255, 255, 0.2);
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

.point-item p {
  margin: 0;
  flex: 1;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .symmetry-grid {
    grid-template-columns: 1fr;
  }
  
  .modern-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>