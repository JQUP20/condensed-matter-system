<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.3.4 玻色化的实际形式*</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">一维量子系统</span>
        <span class="reading-time">阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        玻色化是一维量子系统中的重要技术，它将费米子算符映射为玻色子算符，从而简化了强关联系统的处理。
        本章将详细介绍玻色化的实际操作形式，包括Jordan-Wigner变换、Klein因子的处理，
        以及如何在实际计算中应用这些技术来求解一维相互作用费米子系统。
      </p>
    </div>

    <section class="content-section">
      <h2>Jordan-Wigner变换</h2>
      <div class="jordan-wigner-transformation">
        <div class="basic-transformation">
          <h3>🔄 基本变换关系</h3>
          <div class="transformation-content">
            <div class="fermion-to-boson">
              <h4>费米子到玻色子的映射：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>c_j = K_j e^{iπ ∑_{l&lt;j} n_l} σ_j^-</p>
                  <p>c_j† = K_j† e^{-iπ ∑_{l&lt;j} n_l} σ_j^+</p>
                  <p>K_j: Klein因子</p>
                  <p>σ_j^±: 自旋升降算符</p>
                </div>
              </div>
            </div>

            <div class="string-operator">
              <h4>弦算符：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>S_j = e^{iπ ∑_{l&lt;j} n_l} = ∏_{l&lt;j} (-1)^{n_l}</p>
                  <p>反对易关系的保证</p>
                  <p>{c_i, c_j†} = δ_{ij}</p>
                </div>
              </div>
            </div>

            <div class="spin-representation">
              <h4>自旋表示：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>σ_j^+ = |1⟩_j⟨0|_j</p>
                  <p>σ_j^- = |0⟩_j⟨1|_j</p>
                  <p>σ_j^z = |1⟩_j⟨1|_j - |0⟩_j⟨0|_j</p>
                  <p>n_j = (1 + σ_j^z)/2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="klein-factors">
          <h3>🎭 Klein因子</h3>
          <div class="klein-content">
            <div class="anticommutation-preservation">
              <h4>反对易关系的保持：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>{K_i, K_j†} = 0, i ≠ j</p>
                  <p>{K_i, K_j} = 0, i ≠ j</p>
                  <p>K_i K_i† + K_i† K_i = 1</p>
                </div>
              </div>
            </div>

            <div class="explicit-construction">
              <h4>显式构造：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>K_j = ∏_{k&lt;j} τ_k^z</p>
                  <p>τ_k^z: 辅助Pauli矩阵</p>
                  <p>[τ_i^α, σ_j^β] = 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>连续极限中的玻色化</h2>
      <div class="continuum-bosonization">
        <div class="field-decomposition">
          <h3>🌊 场的分解</h3>
          <div class="field-content">
            <div class="chiral-fields">
              <h4>手性场分解：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ψ_R(x) = (1/√(2πα)) e^{i(φ_R(x) + θ_R(x))}</p>
                  <p>ψ_L(x) = (1/√(2πα)) e^{i(φ_L(x) - θ_L(x))}</p>
                  <p>α: 短程截断参数</p>
                </div>
              </div>
            </div>

            <div class="boson-fields">
              <h4>玻色子场：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>φ(x) = φ_R(x) + φ_L(x)</p>
                  <p>θ(x) = φ_R(x) - φ_L(x)</p>
                  <p>[φ(x), ∂_y θ(y)] = iπδ(x-y)</p>
                </div>
              </div>
            </div>

            <div class="density-current">
              <h4>密度和流：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ρ(x) = -(1/π)∂_x φ(x)</p>
                  <p>j(x) = -(1/π)∂_x θ(x)</p>
                  <p>连续性方程：∂_t ρ + ∂_x j = 0</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="vertex-operators">
          <h3>🎯 顶点算符</h3>
          <div class="vertex-content">
            <div class="exponential-form">
              <h4>指数形式：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>V_n(x) = :e^{inφ(x)}:</p>
                  <p>正规排序确保有限性</p>
                  <p>n: 拓扑荷</p>
                </div>
              </div>
            </div>

            <div class="correlation-functions">
              <h4>关联函数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨V_n(x)V_m(0)⟩ = δ_{n,-m} |x|^{-n²}</p>
                  <p>幂律衰减</p>
                  <p>临界指数：η = n²</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实际计算技巧</h2>
      <div class="calculation-techniques">
        <div class="normal-ordering">
          <h3>📐 正规排序</h3>
          <div class="ordering-content">
            <div class="wick-theorem">
              <h4>Wick定理：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>:A(x)B(y): = A(x)B(y) - ⟨A(x)B(y)⟩</p>
                  <p>消除发散项</p>
                  <p>保持算符乘积的有限性</p>
                </div>
              </div>
            </div>

            <div class="point-splitting">
              <h4>点分离正规化：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>:ψ†(x)ψ(x): = lim_{ε→0} [ψ†(x+ε)ψ(x) - ⟨ψ†(x+ε)ψ(x)⟩]</p>
                  <p>ε: 正规化参数</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="conformal-field-theory">
          <h3>🌀 共形场论方法</h3>
          <div class="cft-content">
            <div class="primary-fields">
              <h4>主场：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>Δ_n = n²/2: 标度维数</p>
                  <p>V_n(z) = :e^{inφ(z)}:</p>
                  <p>z = x + iy: 复坐标</p>
                </div>
              </div>
            </div>

            <div class="operator-product-expansion">
              <h4>算符乘积展开：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>V_n(z)V_m(w) = (z-w)^{nm} :V_{n+m}(w): + ...</p>
                  <p>奇异性结构</p>
                  <p>融合规则</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>应用示例</h2>
      <div class="application-examples">
        <div class="free-fermion-gas">
          <h3>🆓 自由费米气体</h3>
          <div class="free-gas-content">
            <div class="hamiltonian-bosonization">
              <h4>哈密顿量玻色化：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_0 = ∫ dx ψ†(x)(-i∂_x)ψ(x)</p>
                  <p>= (v_F/2π) ∫ dx [(∂_x φ)² + (∂_x θ)²]</p>
                  <p>自由玻色子形式</p>
                </div>
              </div>
            </div>

            <div class="ground-state">
              <h4>基态性质：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>|0⟩: 玻色子真空</p>
                  <p>⟨ψ†(x)ψ(0)⟩ ∝ x^{-1}</p>
                  <p>幂律关联</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interacting-system">
          <h3>⚡ 相互作用系统</h3>
          <div class="interaction-content">
            <div class="luttinger-liquid">
              <h4>Luttinger液体：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = (v/2π) ∫ dx [K(∂_x φ)² + (1/K)(∂_x θ)²]</p>
                  <p>K: Luttinger参数</p>
                  <p>v: 重整化速度</p>
                </div>
              </div>
            </div>

            <div class="correlation-exponents">
              <h4>关联指数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨ψ†(x)ψ(0)⟩ ∝ x^{-(1+K)/2}</p>
                  <p>⟨ρ(x)ρ(0)⟩ ∝ x^{-2K}</p>
                  <p>非费米液体行为</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>数值实现</h2>
      <div class="numerical-implementation">
        <div class="discretization">
          <h3>🔢 离散化方案</h3>
          <div class="discretization-content">
            <div class="lattice-bosonization">
              <h4>格点玻色化：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>φ_j = φ(ja), θ_j = θ(ja)</p>
                  <p>a: 格点间距</p>
                  <p>[φ_i, θ_j] = iπδ_{ij}/a</p>
                </div>
              </div>
            </div>

            <div class="finite-size-effects">
              <h4>有限尺寸效应：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>L = Na: 系统长度</p>
                  <p>周期边界条件</p>
                  <p>零模处理</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="computational-methods">
          <h3>💻 计算方法</h3>
          <div class="methods-content">
            <div class="monte-carlo">
              <h4>蒙特卡洛方法：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>路径积分表示</p>
                  <p>重要性采样</p>
                  <p>自关联时间</p>
                </div>
              </div>
            </div>

            <div class="exact-diagonalization">
              <h4>精确对角化：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>小系统精确解</p>
                  <p>有限尺寸标度</p>
                  <p>外推到热力学极限</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>总结与展望</h2>
      <div class="summary-outlook">
        <div class="key-points">
          <h3>🎯 关键要点</h3>
          <div class="points-content">
            <ul>
              <li>Jordan-Wigner变换建立费米子-玻色子对应关系</li>
              <li>Klein因子确保反对易关系的正确性</li>
              <li>连续极限中的场论描述</li>
              <li>顶点算符和关联函数的计算</li>
              <li>正规排序处理发散问题</li>
            </ul>
          </div>
        </div>

        <div class="future-directions">
          <h3>🚀 未来方向</h3>
          <div class="directions-content">
            <ul>
              <li>高维系统的玻色化推广</li>
              <li>非阿贝尔玻色化</li>
              <li>拓扑相的玻色化描述</li>
              <li>量子计算中的应用</li>
              <li>实验实现的可能性</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2d3748;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #667eea;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  background: #f7fafc;
  color: #4a5568;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  border: 1px solid #e2e8f0;
}

.introduction {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: white;
}

.lead-text {
  font-size: 1.125rem;
  line-height: 1.8;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.content-section h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #4a5568;
  margin: 2rem 0 1rem 0;
}

.content-section h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 1rem 0;
}

.content-section h5 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.mathematical-content {
  background: #f8fafc;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1rem 0;
  border-left: 4px solid #667eea;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  color: #2d3748;
}

.jordan-wigner-transformation,
.continuum-bosonization,
.calculation-techniques,
.application-examples,
.numerical-implementation,
.summary-outlook {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.transformation-content,
.klein-content,
.field-content,
.vertex-content,
.ordering-content,
.cft-content,
.free-gas-content,
.interaction-content,
.discretization-content,
.methods-content,
.points-content,
.directions-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.basic-transformation,
.klein-factors,
.field-decomposition,
.vertex-operators,
.normal-ordering,
.conformal-field-theory,
.free-fermion-gas,
.interacting-system,
.discretization,
.computational-methods,
.key-points,
.future-directions {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.chiral-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.right-movers,
.left-movers {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

li::before {
  content: "•";
  position: absolute;
  left: 0;
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
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .chiral-content {
    grid-template-columns: 1fr;
  }
}
</style>