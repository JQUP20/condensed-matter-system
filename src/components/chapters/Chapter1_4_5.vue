<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>1.4.5 Hartree-Fock近似</h1>
      <p class="chapter-subtitle">考虑电子交换作用的自洽平均场理论</p>
    </div>

    <div class="content-container">
      <section class="content-section">
        <h2>基本概念</h2>
        <div class="concept-introduction">
          <div class="definition-card primary">
            <div class="card-header">
              <h3>Hartree-Fock近似定义</h3>
              <span class="concept-tag">量子多体</span>
            </div>
            <div class="card-content">
              <p class="definition-text">
                Hartree-Fock近似是处理多电子系统的重要方法，它在独立电子近似的基础上，
                通过反对称化波函数来严格考虑电子的交换相互作用，同时用平均场方法处理库仑相互作用。
              </p>
              <div class="key-features">
                <h4>核心特征：</h4>
                <div class="feature-grid">
                  <div class="feature-item">
                    <span class="feature-icon">🔄</span>
                    <span class="feature-text">严格考虑泡利不相容原理</span>
                  </div>
                  <div class="feature-item">
                    <span class="feature-icon">⚡</span>
                    <span class="feature-text">自洽求解单电子方程</span>
                  </div>
                  <div class="feature-item">
                    <span class="feature-icon">🎯</span>
                    <span class="feature-text">变分原理保证能量最小</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>理论基础</h2>
        <div class="theoretical-foundation">
          <div class="foundation-analysis">
            <h3>多电子波函数的反对称化</h3>
            <div class="antisymmetrization-process">
              <div class="process-steps">
                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">1</span>
                    <h4>单电子波函数</h4>
                  </div>
                  <div class="step-content">
                    <div class="equation-formula">
                      φᵢ(r,σ) = ψᵢ(r)χ(σ)
                    </div>
                    <p class="step-description">包含空间部分ψᵢ(r)和自旋部分χ(σ)</p>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">2</span>
                    <h4>Slater行列式</h4>
                  </div>
                  <div class="step-content">
                    <div class="equation-formula large">
                      Ψ = (1/√N!) |φ₁(1) φ₂(1) ... φₙ(1)|
                                   |φ₁(2) φ₂(2) ... φₙ(2)|
                                   |  ⋮      ⋮    ⋱   ⋮  |
                                   |φ₁(N) φ₂(N) ... φₙ(N)|
                    </div>
                    <p class="step-description">确保波函数对电子交换反对称</p>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">3</span>
                    <h4>变分原理</h4>
                  </div>
                  <div class="step-content">
                    <div class="equation-formula">
                      δ⟨Ψ|H|Ψ⟩ = 0
                    </div>
                    <p class="step-description">在正交归一化约束下最小化能量</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Hartree-Fock方程</h2>
        <div class="hf-equations">
          <div class="equation-derivation">
            <h3>自洽场方程的推导</h3>
            <div class="derivation-container">
              <div class="derivation-step">
                <h4>总哈密顿量</h4>
                <div class="equation-formula large">
                  H = Σᵢ₌₁ᴺ h(i) + (1/2)Σᵢ≠ⱼᴺ g(i,j)
                </div>
                <div class="term-explanation">
                  <div class="term-grid">
                    <div class="term-item">
                      <span class="term-symbol">h(i)</span>
                      <span class="term-meaning">单电子算符（动能+外势）</span>
                    </div>
                    <div class="term-item">
                      <span class="term-symbol">g(i,j)</span>
                      <span class="term-meaning">电子-电子相互作用</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="derivation-step">
                <h4>期望值计算</h4>
                <div class="expectation-breakdown">
                  <div class="expectation-card">
                    <h5>单电子项</h5>
                    <div class="equation-formula">
                      ⟨Ψ|Σᵢh(i)|Ψ⟩ = Σᵢ⟨φᵢ|h|φᵢ⟩
                    </div>
                  </div>
                  <div class="expectation-card">
                    <h5>双电子项</h5>
                    <div class="equation-formula">
                      ⟨Ψ|Σᵢ<ⱼg(i,j)|Ψ⟩ = (1/2)Σᵢⱼ[⟨φᵢφⱼ|g|φᵢφⱼ⟩ - ⟨φᵢφⱼ|g|φⱼφᵢ⟩]
                    </div>
                  </div>
                </div>
              </div>

              <div class="derivation-step highlighted">
                <h4>Hartree-Fock方程</h4>
                <div class="equation-formula large highlighted">
                  F|φᵢ⟩ = εᵢ|φᵢ⟩
                </div>
                <div class="fock-operator">
                  <h5>Fock算符：</h5>
                  <div class="equation-formula">
                    F = h + Σⱼ[Jⱼ - Kⱼ]
                  </div>
                  <div class="operator-components">
                    <div class="component-explanation">
                      <div class="component-item coulomb">
                        <h6>库仑算符 Jⱼ</h6>
                        <div class="equation-formula small">
                          Jⱼ|φᵢ⟩ = [∫|φⱼ(r')|²/|r-r'|dr']|φᵢ⟩
                        </div>
                        <p>经典静电相互作用</p>
                      </div>
                      <div class="component-item exchange">
                        <h6>交换算符 Kⱼ</h6>
                        <div class="equation-formula small">
                          Kⱼ|φᵢ⟩ = [∫φⱼ*(r')φᵢ(r')/|r-r'|dr']|φⱼ⟩
                        </div>
                        <p>量子交换效应</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>自洽求解过程</h2>
        <div class="scf-procedure">
          <div class="procedure-overview">
            <p class="overview-text">
              Hartree-Fock方程是非线性的，因为Fock算符依赖于待求解的轨道。需要采用自洽场(SCF)方法迭代求解。
            </p>
          </div>

          <div class="scf-flowchart">
            <div class="flowchart-container">
              <div class="flow-step initial">
                <div class="step-icon">🎯</div>
                <div class="step-content">
                  <h4>初始猜测</h4>
                  <p>选择初始轨道{φᵢ⁽⁰⁾}</p>
                </div>
              </div>

              <div class="flow-arrow">↓</div>

              <div class="flow-step calculation">
                <div class="step-icon">⚡</div>
                <div class="step-content">
                  <h4>构造Fock算符</h4>
                  <p>F⁽ⁿ⁾ = h + Σⱼ[Jⱼ⁽ⁿ⁾ - Kⱼ⁽ⁿ⁾]</p>
                </div>
              </div>

              <div class="flow-arrow">↓</div>

              <div class="flow-step solve">
                <div class="step-icon">🔧</div>
                <div class="step-content">
                  <h4>求解本征方程</h4>
                  <p>F⁽ⁿ⁾|φᵢ⁽ⁿ⁺¹⁾⟩ = εᵢ⁽ⁿ⁺¹⁾|φᵢ⁽ⁿ⁺¹⁾⟩</p>
                </div>
              </div>

              <div class="flow-arrow">↓</div>

              <div class="flow-step check">
                <div class="step-icon">✅</div>
                <div class="step-content">
                  <h4>收敛检查</h4>
                  <p>|E⁽ⁿ⁺¹⁾ - E⁽ⁿ⁾| < ε ?</p>
                </div>
              </div>

              <div class="convergence-branches">
                <div class="branch-no">
                  <div class="flow-arrow-back">↰ 否</div>
                  <p>返回步骤2</p>
                </div>
                <div class="branch-yes">
                  <div class="flow-arrow">↓ 是</div>
                  <div class="flow-step final">
                    <div class="step-icon">🎉</div>
                    <div class="step-content">
                      <h4>收敛完成</h4>
                      <p>得到自洽解</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="convergence-analysis">
            <h3>收敛性分析</h3>
            <div class="convergence-factors">
              <div class="factor-cards">
                <div class="factor-card">
                  <h4>🎯 收敛标准</h4>
                  <ul class="criteria-list">
                    <li>能量收敛：|ΔE| < 10⁻⁶ Hartree</li>
                    <li>密度收敛：∫|ρ⁽ⁿ⁺¹⁾ - ρ⁽ⁿ⁾|dr < 10⁻⁴</li>
                    <li>轨道收敛：⟨φᵢ⁽ⁿ⁺¹⁾|φᵢ⁽ⁿ⁾⟩ > 0.999</li>
                  </ul>
                </div>
                <div class="factor-card">
                  <h4>⚡ 加速技术</h4>
                  <ul class="acceleration-list">
                    <li>DIIS (Direct Inversion of Iterative Subspace)</li>
                    <li>Level shifting</li>
                    <li>Damping methods</li>
                    <li>Second-order SCF</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理意义与效应</h2>
        <div class="physical-effects">
          <div class="effects-analysis">
            <h3>交换效应的物理图像</h3>
            <div class="exchange-visualization">
              <div class="exchange-cards">
                <div class="exchange-card correlation">
                  <div class="exchange-header">
                    <h4>🔄 交换关联</h4>
                    <span class="effect-tag blue">量子效应</span>
                  </div>
                  <div class="exchange-content">
                    <p class="effect-description">
                      同自旋电子由于泡利不相容原理而相互排斥，形成"交换洞"效应
                    </p>
                    <div class="correlation-features">
                      <h5>主要特征：</h5>
                      <ul class="feature-list">
                        <li>同自旋电子避免靠近</li>
                        <li>降低电子-电子排斥能</li>
                        <li>产生有效的"交换势"</li>
                        <li>影响电子的空间分布</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="exchange-card energy">
                  <div class="exchange-header">
                    <h4>⚡ 能量贡献</h4>
                    <span class="effect-tag green">稳定化</span>
                  </div>
                  <div class="exchange-content">
                    <div class="energy-breakdown">
                      <div class="energy-component">
                        <h5>库仑能 (J)</h5>
                        <div class="equation-formula small">
                          EJ = (1/2)Σᵢⱼ⟨φᵢφⱼ|1/r₁₂|φᵢφⱼ⟩
                        </div>
                        <p>经典静电排斥，总是正值</p>
                      </div>
                      <div class="energy-component">
                        <h5>交换能 (K)</h5>
                        <div class="equation-formula small">
                          EK = -(1/2)Σᵢⱼ⟨φᵢφⱼ|1/r₁₂|φⱼφᵢ⟩
                        </div>
                        <p>量子交换效应，总是负值（稳定化）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="exchange-card orbital">
                  <div class="exchange-header">
                    <h4>🎯 轨道效应</h4>
                    <span class="effect-tag orange">重组</span>
                  </div>
                  <div class="exchange-content">
                    <div class="orbital-effects">
                      <h5>轨道重组：</h5>
                      <ul class="orbital-list">
                        <li><strong>轨道收缩：</strong>交换效应使轨道更加紧束</li>
                        <li><strong>能级分裂：</strong>不同对称性轨道能量分离</li>
                        <li><strong>电子定域：</strong>增强电子在原子核附近的概率</li>
                        <li><strong>自旋极化：</strong>开壳层系统中的自旋分离</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用与扩展</h2>
        <div class="applications-extensions">
          <div class="application-areas">
            <h3>主要应用领域</h3>
            <div class="application-showcase">
              <div class="application-cards">
                <div class="application-card quantum-chemistry">
                  <div class="app-header">
                    <h4>🧪 量子化学</h4>
                    <span class="app-tag chemistry">分子计算</span>
                  </div>
                  <div class="app-content">
                    <div class="chemistry-applications">
                      <h5>典型应用：</h5>
                      <ul class="app-list">
                        <li><strong>分子轨道理论：</strong>预测分子的电子结构</li>
                        <li><strong>化学键分析：</strong>理解成键和反键轨道</li>
                        <li><strong>反应机理：</strong>过渡态和反应路径计算</li>
                        <li><strong>光谱性质：</strong>激发态和光学跃迁</li>
                      </ul>
                      <div class="success-examples">
                        <h6>成功案例：</h6>
                        <p>小分子基态性质、化学键长、振动频率等的准确预测</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="application-card solid-state">
                  <div class="app-header">
                    <h4>🔬 固体物理</h4>
                    <span class="app-tag solid">能带计算</span>
                  </div>
                  <div class="app-content">
                    <div class="solid-applications">
                      <h5>应用方向：</h5>
                      <ul class="app-list">
                        <li><strong>能带结构：</strong>改进的能带计算方法</li>
                        <li><strong>表面物理：</strong>表面态和吸附研究</li>
                        <li><strong>缺陷计算：</strong>点缺陷和扩展缺陷</li>
                        <li><strong>磁性材料：</strong>自旋极化计算</li>
                      </ul>
                      <div class="limitations-note">
                        <h6>局限性：</h6>
                        <p>计算成本高，通常用于小体系或作为更高级方法的起点</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="application-card nuclear">
                  <div class="app-header">
                    <h4>⚛️ 核物理</h4>
                    <span class="app-tag nuclear">核结构</span>
                  </div>
                  <div class="app-content">
                    <div class="nuclear-applications">
                      <h5>核结构计算：</h5>
                      <ul class="app-list">
                        <li><strong>壳模型：</strong>核子在平均场中的运动</li>
                        <li><strong>形变核：</strong>非球形核的自洽场计算</li>
                        <li><strong>超重核：</strong>预测超重元素的稳定性</li>
                        <li><strong>核裂变：</strong>裂变势垒和裂变路径</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="theoretical-extensions">
            <h3>理论扩展与改进</h3>
            <div class="extension-methods">
              <div class="method-cards">
                <div class="method-card post-hf">
                  <div class="method-header">
                    <h4>📈 后Hartree-Fock方法</h4>
                    <span class="method-tag advanced">高精度</span>
                  </div>
                  <div class="method-content">
                    <div class="post-hf-methods">
                      <div class="method-item">
                        <h5>Configuration Interaction (CI)</h5>
                        <p>考虑电子激发的线性组合</p>
                        <div class="equation-formula small">
                          |Ψ⟩ = c₀|Φ₀⟩ + Σᵢᵃcᵢᵃ|Φᵢᵃ⟩ + Σᵢ<ⱼᵃ<ᵇcᵢⱼᵃᵇ|Φᵢⱼᵃᵇ⟩ + ...
                        </div>
                      </div>
                      <div class="method-item">
                        <h5>Coupled Cluster (CC)</h5>
                        <p>指数形式的波函数展开</p>
                        <div class="equation-formula small">
                          |Ψ⟩ = eᵀ|Φ₀⟩, T = T₁ + T₂ + T₃ + ...
                        </div>
                      </div>
                      <div class="method-item">
                        <h5>Møller-Plesset (MP)</h5>
                        <p>基于微扰理论的关联能修正</p>
                        <div class="equation-formula small">
                          E = E⁽⁰⁾ + E⁽¹⁾ + E⁽²⁾ + E⁽³⁾ + ...
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="method-card dft-hybrid">
                  <div class="method-header">
                    <h4>🔄 杂化泛函</h4>
                    <span class="method-tag practical">实用</span>
                  </div>
                  <div class="method-content">
                    <div class="hybrid-concept">
                      <p>将Hartree-Fock交换与DFT关联能结合：</p>
                      <div class="equation-formula">
                        Exc = aExᴴᶠ + (1-a)Exᴰᶠᵀ + Ecᴰᶠᵀ
                      </div>
                      <div class="hybrid-examples">
                        <h5>常用杂化泛函：</h5>
                        <ul class="hybrid-list">
                          <li><strong>B3LYP：</strong>20% HF交换 + Becke88 + LYP关联</li>
                          <li><strong>PBE0：</strong>25% HF交换 + PBE交换关联</li>
                          <li><strong>HSE06：</strong>短程25% HF交换 + 长程PBE</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算实现与挑战</h2>
        <div class="computational-aspects">
          <div class="implementation-challenges">
            <h3>计算复杂度分析</h3>
            <div class="complexity-analysis">
              <div class="complexity-cards">
                <div class="complexity-card scaling">
                  <div class="complexity-header">
                    <h4>📊 标度行为</h4>
                    <span class="complexity-tag scaling">O(N⁴)</span>
                  </div>
                  <div class="complexity-content">
                    <div class="scaling-breakdown">
                      <h5>计算瓶颈：</h5>
                      <ul class="bottleneck-list">
                        <li><strong>双电子积分：</strong>O(N⁴)存储和计算</li>
                        <li><strong>Fock矩阵构造：</strong>每次迭代O(N⁴)操作</li>
                        <li><strong>轨道变换：</strong>O(N³)矩阵运算</li>
                      </ul>
                      <div class="scaling-impact">
                        <p><strong>实际影响：</strong>限制了可处理的系统大小（通常<1000个基函数）</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="complexity-card optimization">
                  <div class="complexity-header">
                    <h4>⚡ 优化策略</h4>
                    <span class="complexity-tag optimization">加速</span>
                  </div>
                  <div class="complexity-content">
                    <div class="optimization-techniques">
                      <h5>主要优化方法：</h5>
                      <div class="technique-grid">
                        <div class="technique-item">
                          <h6>积分筛选</h6>
                          <p>忽略小于阈值的双电子积分</p>
                        </div>
                        <div class="technique-item">
                          <h6>密度拟合</h6>
                          <p>用辅助基组近似电子密度</p>
                        </div>
                        <div class="technique-item">
                          <h6>线性标度算法</h6>
                          <p>利用密度矩阵的稀疏性</p>
                        </div>
                        <div class="technique-item">
                          <h6>并行计算</h6>
                          <p>分布式内存和GPU加速</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="complexity-card memory">
                  <div class="complexity-header">
                    <h4>💾 内存管理</h4>
                    <span class="complexity-tag memory">存储</span>
                  </div>
                  <div class="complexity-content">
                    <div class="memory-strategies">
                      <h5>存储策略：</h5>
                      <ul class="memory-list">
                        <li><strong>直接SCF：</strong>重新计算积分而非存储</li>
                        <li><strong>积分分批：</strong>分批处理大型积分集合</li>
                        <li><strong>磁盘存储：</strong>将积分存储到磁盘</li>
                        <li><strong>压缩技术：</strong>利用对称性减少存储</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modern-implementations">
            <h3>现代计算软件</h3>
            <div class="software-landscape">
              <div class="software-categories">
                <div class="software-card commercial">
                  <h4>🏢 商业软件</h4>
                  <div class="software-list">
                    <div class="software-item">
                      <h5>Gaussian</h5>
                      <p>最广泛使用的量子化学软件包</p>
                    </div>
                    <div class="software-item">
                      <h5>VASP</h5>
                      <p>基于平面波的固体计算软件</p>
                    </div>
                    <div class="software-item">
                      <h5>Turbomole</h5>
                      <p>高效的分子轨道计算程序</p>
                    </div>
                  </div>
                </div>

                <div class="software-card open-source">
                  <h4>🔓 开源软件</h4>
                  <div class="software-list">
                    <div class="software-item">
                      <h5>PySCF</h5>
                      <p>Python量子化学库</p>
                    </div>
                    <div class="software-item">
                      <h5>Quantum ESPRESSO</h5>
                      <p>第一性原理计算套件</p>
                    </div>
                    <div class="software-item">
                      <h5>ORCA</h5>
                      <p>免费的量子化学程序</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>历史发展与未来展望</h2>
        <div class="historical-future">
          <div class="historical-timeline">
            <h3>发展历程</h3>
            <div class="timeline-container">
              <div class="timeline-item">
                <div class="timeline-marker">1928</div>
                <div class="timeline-content">
                  <h4>Hartree方法</h4>
                  <p>Douglas Hartree提出自洽场方法，但未考虑交换效应</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">1930</div>
                <div class="timeline-content">
                  <h4>Fock改进</h4>
                  <p>Vladimir Fock引入交换项，建立现代Hartree-Fock理论</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">1951</div>
                <div class="timeline-content">
                  <h4>Roothaan方程</h4>
                  <p>Clemens Roothaan将HF方程表示为矩阵形式，便于数值求解</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">1960s</div>
                <div class="timeline-content">
                  <h4>计算机实现</h4>
                  <p>随着计算机发展，HF方法开始广泛应用于实际计算</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">1990s</div>
                <div class="timeline-content">
                  <h4>线性标度算法</h4>
                  <p>发展了O(N)和O(N²)算法，扩展了适用范围</p>
                </div>
              </div>
            </div>
          </div>

          <div class="future-directions">
            <h3>未来发展方向</h3>
            <div class="future-cards">
              <div class="future-card quantum-computing">
                <div class="future-icon">🖥️</div>
                <div class="future-content">
                  <h4>量子计算</h4>
                  <p>利用量子计算机的并行性，可能实现指数级加速的HF计算</p>
                  <div class="quantum-advantages">
                    <ul>
                      <li>自然处理量子叠加态</li>
                      <li>指数级存储容量</li>
                      <li>量子并行算法</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="future-card machine-learning">
                <div class="future-icon">🤖</div>
                <div class="future-content">
                  <h4>机器学习辅助</h4>
                  <p>AI技术在轨道初猜、收敛加速和性质预测中的应用</p>
                  <div class="ml-applications">
                    <ul>
                      <li>智能初始轨道生成</li>
                      <li>收敛路径优化</li>
                      <li>性质快速预测</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="future-card exascale">
                <div class="future-icon">⚡</div>
                <div class="future-content">
                  <h4>百亿亿次计算</h4>
                  <p>超级计算机的发展将使大规模HF计算成为可能</p>
                  <div class="exascale-impact">
                    <ul>
                      <li>蛋白质全量子计算</li>
                      <li>材料基因组计划</li>
                      <li>药物设计革命</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_5',
  mounted() {
    // 页面加载完成后的初始化
    console.log('Hartree-Fock近似页面已加载');
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

/* 卡片样式 */
.definition-card, .step-card, .expectation-card, .exchange-card,
.application-card, .method-card, .complexity-card, .software-card, .future-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #3498db;
}

.definition-card.primary {
  border-left-color: #667eea;
  background: linear-gradient(135deg, #f5f7ff 0%, #e8ecff 100%);
}

.card-header, .exchange-header, .app-header, .method-header, .complexity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h3, .exchange-header h4, .app-header h4, .method-header h4, .complexity-header h4 {
  color: #2c3e50;
  margin: 0;
}

/* 标签样式 */
.concept-tag, .effect-tag, .app-tag, .method-tag, .complexity-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
}

.concept-tag {
  background: #667eea;
  color: white;
}

.effect-tag.blue {
  background: #3498db;
  color: white;
}

.effect-tag.green {
  background: #2ecc71;
  color: white;
}

.effect-tag.orange {
  background: #f39c12;
  color: white;
}

.app-tag.chemistry {
  background: #e74c3c;
  color: white;
}

.app-tag.solid {
  background: #34495e;
  color: white;
}

.app-tag.nuclear {
  background: #9b59b6;
  color: white;
}

.method-tag.advanced {
  background: #e67e22;
  color: white;
}

.method-tag.practical {
  background: #27ae60;
  color: white;
}

.complexity-tag.scaling {
  background: #e74c3c;
  color: white;
}

.complexity-tag.optimization {
  background: #f39c12;
  color: white;
}

.complexity-tag.memory {
  background: #9b59b6;
  color: white;
}

/* 方程式样式 */
.equation-formula {
  background: #2c3e50;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;
  overflow-x: auto;
}

.equation-formula.large {
  font-size: 1.3em;
  padding: 20px;
}

.equation-formula.small {
  font-size: 0.9em;
  padding: 10px 15px;
}

.equation-formula.highlighted {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* 网格布局 */
.feature-grid, .term-grid, .technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.feature-item, .term-item, .technique-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.feature-icon {
  font-size: 1.2em;
}

/* 步骤样式 */
.process-steps, .derivation-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.step-number {
  background: #667eea;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-header h4 {
  margin: 0;
  color: #2c3e50;
}

/* 推导步骤 */
.derivation-step {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.derivation-step.highlighted {
  border-left: 4px solid #667eea;
  background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
}

.derivation-step h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

/* 期望值分解 */
.expectation-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.expectation-card h5 {
  color: #2c3e50;
  margin-bottom: 10px;
}

/* Fock算符 */
.fock-operator {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
}

.operator-components {
  margin-top: 15px;
}

.component-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.component-item {
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.component-item.coulomb {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
  border-left: 4px solid #e74c3c;
}

.component-item.exchange {
  background: linear-gradient(135deg, #f5fff5 0%, #e5ffe5 100%);
  border-left: 4px solid #27ae60;
}

.component-item h6 {
  color: #2c3e50;
  margin-bottom: 10px;
}

/* SCF流程图 */
.scf-flowchart {
  margin: 30px 0;
}

.flowchart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  border: 2px solid #e0e0e0;
  min-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.flow-step.initial {
  border-color: #27ae60;
  background: linear-gradient(135deg, #f5fff5 0%, #e5ffe5 100%);
}

.flow-step.calculation {
  border-color: #3498db;
  background: linear-gradient(135deg, #f5f9ff 0%, #e5f2ff 100%);
}

.flow-step.solve {
  border-color: #f39c12;
  background: linear-gradient(135deg, #fffaf5 0%, #fff2e5 100%);
}

.flow-step.check {
  border-color: #e74c3c;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
}

.flow-step.final {
  border-color: #9b59b6;
  background: linear-gradient(135deg, #f9f5ff 0%, #f2e5ff 100%);
}

.step-icon {
  font-size: 1.5em;
}

.step-content h4 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.step-content p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}

.flow-arrow {
  font-size: 1.5em;
  color: #667eea;
  font-weight: bold;
}

.flow-arrow-back {
  font-size: 1.2em;
  color: #e74c3c;
  font-weight: bold;
}

.convergence-branches {
  display: flex;
  gap: 50px;
  align-items: center;
}

.branch-no, .branch-yes {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

/* 收敛分析 */
.convergence-factors {
  margin-top: 20px;
}

.factor-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.factor-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.factor-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.criteria-list, .acceleration-list {
  list-style: none;
  padding: 0;
}

.criteria-list li, .acceleration-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ecf0f1;
  color: #666;
}

.criteria-list li:last-child, .acceleration-list li:last-child {
  border-bottom: none;
}

/* 交换效应卡片 */
.exchange-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.exchange-card.correlation {
  border-left-color: #3498db;
}

.exchange-card.energy {
  border-left-color: #27ae60;
}

.exchange-card.orbital {
  border-left-color: #f39c12;
}

/* 应用卡片 */
.application-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.application-card.quantum-chemistry {
  border-left-color: #e74c3c;
}

.application-card.solid-state {
  border-left-color: #34495e;
}

.application-card.nuclear {
  border-left-color: #9b59b6;
}

/* 方法卡片 */
.method-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
}

.method-card.post-hf {
  border-left-color: #e67e22;
}

.method-card.dft-hybrid {
  border-left-color: #27ae60;
}

/* 复杂度卡片 */
.complexity-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.complexity-card.scaling {
  border-left-color: #e74c3c;
}

.complexity-card.optimization {
  border-left-color: #f39c12;
}

.complexity-card.memory {
  border-left-color: #9b59b6;
}

/* 软件分类 */
.software-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.software-card.commercial {
  border-left-color: #34495e;
}

.software-card.open-source {
  border-left-color: #27ae60;
}

.software-card h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.software-item {
  padding: 10px 0;
  border-bottom: 1px solid #ecf0f1;
}

.software-item:last-child {
  border-bottom: none;
}

.software-item h5 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.software-item p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}

/* 时间线样式 */
.timeline-container {
  position: relative;
  padding: 20px 0;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
}

.timeline-marker {
  background: #667eea;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  min-width: 80px;
  text-align: center;
}

.timeline-content {
  flex: 1;
  background: #f8f9fa;
  padding: 15px 20px;
  border-radius: 10px;
  border-left: 3px solid #667eea;
}

.timeline-content h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

/* 未来展望 */
.future-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.future-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 25px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.future-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
}

.future-content h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.future-content p {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.9em;
}

.quantum-advantages, .ml-applications, .exascale-impact {
  text-align: left;
}

.quantum-advantages ul, .ml-applications ul, .exascale-impact ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quantum-advantages li, .ml-applications li, .exascale-impact li {
  padding: 5px 0;
  color: #666;
  font-size: 0.85em;
}

/* 列表样式 */
.feature-list, .app-list, .orbital-list, .bottleneck-list, .memory-list, .hybrid-list {
  list-style: none;
  padding: 0;
}

.feature-list li, .app-list li, .orbital-list li, .bottleneck-list li, .memory-list li, .hybrid-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ecf0f1;
}

.feature-list li:last-child, .app-list li:last-child, .orbital-list li:last-child,
.bottleneck-list li:last-child, .memory-list li:last-child, .hybrid-list li:last-child {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .feature-grid, .term-grid, .technique-grid {
    grid-template-columns: 1fr;
  }
  
  .expectation-breakdown, .component-explanation, .factor-cards,
  .exchange-cards, .application-cards, .method-cards, .complexity-cards,
  .software-categories, .future-cards {
    grid-template-columns: 1fr;
  }
  
  .flowchart-container {
    align-items: stretch;
  }
  
  .flow-step {
    min-width: auto;
  }
  
  .convergence-branches {
    flex-direction: column;
    gap: 20px;
  }
  
  .timeline-item {
    flex-direction: column;
    gap: 10px;
  }
}
</style>