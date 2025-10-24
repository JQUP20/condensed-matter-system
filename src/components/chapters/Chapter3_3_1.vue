<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.3.1 一维量子XY模型与Jordan-Wigner变换</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子多体理论</span>
        <span class="reading-time">阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一维量子XY模型是研究量子相变和临界现象的重要理论模型。
        通过Jordan-Wigner变换，我们可以将自旋系统映射为费米子系统，
        从而利用费米子的数学工具来精确求解这一看似复杂的量子多体问题。
        这种变换不仅揭示了自旋系统与费米子系统之间的深刻联系，
        也为理解拓扑相变和量子临界性提供了重要的理论框架。
      </p>
    </div>

    <section class="content-section">
      <h2>XY模型的哈密顿量</h2>
      <div class="xy-hamiltonian">
        <div class="model-definition">
          <h3>🎯 模型定义</h3>
          <div class="hamiltonian-content">
            <div class="basic-hamiltonian">
              <h4>基本哈密顿量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = -J ∑ᵢ [(1+γ)/2 σˣᵢσˣᵢ₊₁ + (1-γ)/2 σʸᵢσʸᵢ₊₁] - h ∑ᵢ σᶻᵢ</p>
                  <p>J: 交换耦合常数</p>
                  <p>γ: 各向异性参数 (-1 ≤ γ ≤ 1)</p>
                  <p>h: 横向磁场</p>
                </div>
              </div>
            </div>

            <div class="parameter-regimes">
              <h4>特殊情况：</h4>
              <div class="regimes-grid">
                <div class="regime-card">
                  <h5>Ising模型 (γ = 1):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = -J ∑ᵢ σˣᵢσˣᵢ₊₁ - h ∑ᵢ σᶻᵢ</p>
                      <p>横向场Ising模型</p>
                    </div>
                  </div>
                </div>
                
                <div class="regime-card">
                  <h5>各向同性XY模型 (γ = 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = -J/2 ∑ᵢ (σˣᵢσˣᵢ₊₁ + σʸᵢσʸᵢ₊₁) - h ∑ᵢ σᶻᵢ</p>
                      <p>XX模型</p>
                    </div>
                  </div>
                </div>
                
                <div class="regime-card">
                  <h5>反Ising模型 (γ = -1):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = -J ∑ᵢ σʸᵢσʸᵢ₊₁ - h ∑ᵢ σᶻᵢ</p>
                      <p>YY模型</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="physical-interpretation">
              <h4>物理图像：</h4>
              <div class="interpretation-content">
                <div class="spin-dynamics">
                  <h5>自旋动力学：</h5>
                  <ul>
                    <li>σˣ, σʸ项：自旋翻转过程</li>
                    <li>各向异性γ：x和y方向耦合的不对称性</li>
                    <li>横向场h：量子涨落的来源</li>
                    <li>竞争：局域化 vs 量子涨落</li>
                  </ul>
                </div>
                
                <div class="quantum-phases">
                  <h5>量子相：</h5>
                  <ul>
                    <li>顺磁相：h ≫ J，自旋沿z方向极化</li>
                    <li>铁磁相：h ≪ J，自旋在xy平面有序</li>
                    <li>临界点：h = J，量子相变</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Jordan-Wigner变换</h2>
      <div class="jordan-wigner-transformation">
        <div class="transformation-definition">
          <h3>🔄 变换定义</h3>
          <div class="jw-content">
            <div class="transformation-formulas">
              <h4>变换公式：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>σ⁺ⱼ = cⱼ† exp(iπ ∑ₖ₌₁ʲ⁻¹ cₖ†cₖ)</p>
                  <p>σ⁻ⱼ = exp(-iπ ∑ₖ₌₁ʲ⁻¹ cₖ†cₖ) cⱼ</p>
                  <p>σᶻⱼ = 2cⱼ†cⱼ - 1</p>
                </div>
              </div>
              
              <div class="string-operator">
                <h5>弦算符：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>Sⱼ = exp(iπ ∑ₖ₌₁ʲ⁻¹ cₖ†cₖ) = ∏ₖ₌₁ʲ⁻¹ (1 - 2cₖ†cₖ)</p>
                    <p>反对易关系的保证</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="anticommutation-relations">
              <h4>反对易关系验证：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>{σ⁺ᵢ, σ⁻ⱼ} = δᵢⱼ ↔ {cᵢ†, cⱼ} = δᵢⱼ</p>
                  <p>{σ⁺ᵢ, σ⁺ⱼ} = 0 ↔ {cᵢ†, cⱼ†} = 0</p>
                  <p>[σᶻᵢ, σᶻⱼ] = 0 ↔ [nᵢ, nⱼ] = 0</p>
                </div>
              </div>
              
              <div class="key-insight">
                <h5>关键洞察：</h5>
                <p>弦算符确保了费米子算符在不同格点间的正确反对易关系，
                   这是Jordan-Wigner变换的核心机制。</p>
              </div>
            </div>

            <div class="transformation-properties">
              <h4>变换性质：</h4>
              <div class="properties-grid">
                <div class="property-card">
                  <h5>局域性：</h5>
                  <p>自旋算符是局域的</p>
                  <p>费米子算符通过弦算符非局域耦合</p>
                </div>
                
                <div class="property-card">
                  <h5>粒子数守恒：</h5>
                  <p>∑ᵢ σᶻᵢ = 2∑ᵢ nᵢ - N</p>
                  <p>自旋z分量 ↔ 费米子数</p>
                </div>
                
                <div class="property-card">
                  <h5>边界条件：</h5>
                  <p>开边界：自然</p>
                  <p>周期边界：需要额外相位因子</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="transformed-hamiltonian">
          <h3>🎼 变换后的哈密顿量</h3>
          <div class="fermionic-hamiltonian">
            <div class="xy-to-fermion">
              <h4>XY模型的费米子表示：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = -J ∑ᵢ [(1+γ)/2 (cᵢ†cᵢ₊₁ + cᵢ₊₁†cᵢ) + (1-γ)/2 (cᵢ†cᵢ₊₁† + cᵢ₊₁cᵢ)]</p>
                  <p>    - h ∑ᵢ (2cᵢ†cᵢ - 1)</p>
                </div>
              </div>
            </div>

            <div class="hopping-pairing">
              <h4>跳跃与配对项：</h4>
              <div class="terms-analysis">
                <div class="term-card">
                  <h5>跳跃项 (1+γ)/2:</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>-J(1+γ)/2 ∑ᵢ (cᵢ†cᵢ₊₁ + h.c.)</p>
                      <p>费米子在相邻格点间的跳跃</p>
                    </div>
                  </div>
                </div>
                
                <div class="term-card">
                  <h5>配对项 (1-γ)/2:</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>-J(1-γ)/2 ∑ᵢ (cᵢ†cᵢ₊₁† + h.c.)</p>
                      <p>费米子对的产生和湮灭</p>
                    </div>
                  </div>
                </div>
                
                <div class="term-card">
                  <h5>化学势项:</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>-h ∑ᵢ (2cᵢ†cᵢ - 1)</p>
                      <p>费米子数的控制</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bogoliubov-transformation">
              <h4>Bogoliubov变换求解：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>cₖ = uₖ αₖ + vₖ βₖ†</p>
                  <p>cₖ† = uₖ* αₖ† + vₖ* βₖ</p>
                  <p>对角化条件：[H, αₖ†] = Eₖ αₖ†</p>
                </div>
              </div>
              
              <div class="dispersion-relation">
                <h5>色散关系：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>Eₖ = √[(J(1+γ)cos k - h)² + (J(1-γ)sin k)²]</p>
                    <p>准粒子激发谱</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>量子相变与临界性</h2>
      <div class="quantum-phase-transitions">
        <div class="phase-diagram">
          <h3>📊 相图分析</h3>
          <div class="phase-content">
            <div class="critical-points">
              <h4>临界点：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>能隙闭合条件：min Eₖ = 0</p>
                  <p>临界线：h = J√(1-γ²)</p>
                  <p>γ = 0时：hc = J (各向同性点)</p>
                  <p>γ = ±1时：hc = 0 (Ising极限)</p>
                </div>
              </div>
            </div>

            <div class="phase-regions">
              <h4>相区划分：</h4>
              <div class="phases-grid">
                <div class="phase-card paramagnetic">
                  <h5>顺磁相 (h > hc):</h5>
                  <div class="phase-properties">
                    <ul>
                      <li>能隙：Δ = h - J√(1-γ²)</li>
                      <li>基态：|↑↑...↑⟩</li>
                      <li>关联长度：ξ ~ 1/Δ</li>
                      <li>指数衰减关联</li>
                    </ul>
                  </div>
                </div>
                
                <div class="phase-card ferromagnetic">
                  <h5>铁磁相 (h < hc):</h5>
                  <div class="phase-properties">
                    <ul>
                      <li>能隙：Δ = J√(1-γ²) - h</li>
                      <li>基态：自发对称破缺</li>
                      <li>Goldstone模式</li>
                      <li>代数衰减关联</li>
                    </ul>
                  </div>
                </div>
                
                <div class="phase-card critical">
                  <h5>临界点 (h = hc):</h5>
                  <div class="phase-properties">
                    <ul>
                      <li>能隙：Δ = 0</li>
                      <li>共形不变性</li>
                      <li>中心荷：c = 1</li>
                      <li>幂律关联</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="universality-classes">
              <h4>普适类：</h4>
              <div class="universality-content">
                <div class="ising-class">
                  <h5>Ising普适类 (γ ≠ 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>临界指数：ν = 1, β = 1/8, γ = 7/4</p>
                      <p>中心荷：c = 1/2</p>
                      <p>共形场论：Ising CFT</p>
                    </div>
                  </div>
                </div>
                
                <div class="xy-class">
                  <h5>XY普适类 (γ = 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>临界指数：ν = 1, β = 1/8, γ = 1</p>
                      <p>中心荷：c = 1</p>
                      <p>共形场论：自由费米子</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="critical-phenomena">
          <h3>🌊 临界现象</h3>
          <div class="critical-content">
            <div class="correlation-functions">
              <h4>关联函数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>G(r) = ⟨σˣ₀σˣᵣ⟩</p>
                  <p>临界点：G(r) ~ r^(-η)</p>
                  <p>η = 1/4 (Ising), η = 1/2 (XY)</p>
                </div>
              </div>
            </div>

            <div class="scaling-behavior">
              <h4>标度行为：</h4>
              <div class="scaling-content">
                <div class="finite-size-scaling">
                  <h5>有限尺寸标度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ξ(δh, L) = L f(δh L^(1/ν))</p>
                      <p>δh = h - hc</p>
                      <p>L: 系统尺寸</p>
                    </div>
                  </div>
                </div>
                
                <div class="dynamic-scaling">
                  <h5>动力学标度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>τ ~ ξ^z</p>
                      <p>z = 1: 动力学临界指数</p>
                      <p>量子临界性</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="entanglement-entropy">
              <h4>纠缠熵：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>S = (c/3) ln L + const</p>
                  <p>c: 中心荷</p>
                  <p>对数发散：临界性的标志</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>精确解与物理性质</h2>
      <div class="exact-solutions">
        <div class="ground-state-properties">
          <h3>🎯 基态性质</h3>
          <div class="ground-state-content">
            <div class="energy-calculation">
              <h4>基态能量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>E₀ = -∑ₖ Eₖ/2</p>
                  <p>= -1/(2π) ∫₋π^π √[(J(1+γ)cos k - h)² + (J(1-γ)sin k)²] dk</p>
                </div>
              </div>
              
              <div class="energy-regimes">
                <div class="regime-analysis">
                  <h5>不同区域的能量：</h5>
                  <div class="energy-cases">
                    <div class="case-item">
                      <h6>强场极限 (h ≫ J):</h6>
                      <p>E₀ ≈ -Nh + O(J²/h)</p>
                    </div>
                    
                    <div class="case-item">
                      <h6>弱场极限 (h ≪ J):</h6>
                      <p>E₀ ≈ -NJ√(1-γ²) + O(h²/J)</p>
                    </div>
                    
                    <div class="case-item">
                      <h6>临界点 (h = hc):</h6>
                      <p>E₀ = -NJ√(1-γ²)/π</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="magnetization">
              <h4>磁化强度：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨σᶻ⟩ = ∂E₀/∂h</p>
                  <p>= 1/(2π) ∫₋π^π (J(1+γ)cos k - h)/Eₖ dk</p>
                </div>
              </div>
              
              <div class="magnetization-behavior">
                <h5>磁化行为：</h5>
                <div class="behavior-grid">
                  <div class="behavior-card">
                    <h6>顺磁相:</h6>
                    <p>⟨σᶻ⟩ > 0</p>
                    <p>连续变化</p>
                  </div>
                  
                  <div class="behavior-card">
                    <h6>铁磁相:</h6>
                    <p>⟨σᶻ⟩ < 0</p>
                    <p>自发磁化</p>
                  </div>
                  
                  <div class="behavior-card">
                    <h6>临界点:</h6>
                    <p>⟨σᶻ⟩ = 0</p>
                    <p>连续相变</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="susceptibility">
              <h4>磁化率：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>χ = ∂²E₀/∂h²</p>
                  <p>= 1/(2π) ∫₋π^π (J(1-γ)sin k)²/Eₖ³ dk</p>
                </div>
              </div>
              
              <div class="susceptibility-divergence">
                <h5>临界发散：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>χ ~ |h - hc|^(-γ)</p>
                    <p>γ = 7/4 (Ising), γ = 1 (XY)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dynamic-properties">
          <h3>⚡ 动力学性质</h3>
          <div class="dynamics-content">
            <div class="spectral-function">
              <h4>谱函数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>S(k,ω) = ∑ₙ |⟨n|σᵏ₋ₖ|0⟩|² δ(ω - Eₙ)</p>
                  <p>= |uₖvₖ|² δ(ω - Eₖ) + |vₖuₖ|² δ(ω + Eₖ)</p>
                </div>
              </div>
            </div>

            <div class="transport-properties">
              <h4>输运性质：</h4>
              <div class="transport-grid">
                <div class="transport-card">
                  <h5>电导率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>σ(ω) = πe²/ℏ ∑ₖ |⟨k|j|k'⟩|² δ(ω - Eₖ + Eₖ')</p>
                    </div>
                  </div>
                </div>
                
                <div class="transport-card">
                  <h5>热导率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>κ = π²k_B²T/3ℏ ∑ₖ vₖ² δ'(Eₖ)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="relaxation-dynamics">
              <h4>弛豫动力学：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨σˣ(t)σˣ(0)⟩ = ∫ dω S(ω) e^(-iωt)</p>
                  <p>临界慢化：τ ~ ξ^z</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验实现与应用</h2>
      <div class="experimental-applications">
        <div class="physical-realizations">
          <h3>🔬 物理实现</h3>
          <div class="realizations-content">
            <div class="solid-state-systems">
              <h4>固体系统：</h4>
              <div class="systems-grid">
                <div class="system-card">
                  <h5>量子磁体：</h5>
                  <ul>
                    <li>CoNb₂O₆: 准一维Ising链</li>
                    <li>BaCo₂V₂O₈: XY各向异性</li>
                    <li>SrCo₂V₂O₈: 横向场调控</li>
                  </ul>
                </div>
                
                <div class="system-card">
                  <h5>超导量子比特：</h5>
                  <ul>
                    <li>Transmon链</li>
                    <li>可调耦合强度</li>
                    <li>精确控制参数</li>
                  </ul>
                </div>
                
                <div class="system-card">
                  <h5>离子阱系统：</h5>
                  <ul>
                    <li>囚禁离子链</li>
                    <li>激光调控相互作用</li>
                    <li>单自旋分辨率</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="cold-atoms">
              <h4>冷原子系统：</h4>
              <div class="cold-atoms-content">
                <div class="optical-lattices">
                  <h5>光晶格：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = -t ∑ᵢ (aᵢ†aᵢ₊₁ + h.c.) + U ∑ᵢ nᵢ↑nᵢ↓</p>
                      <p>Hubbard → XY映射</p>
                    </div>
                  </div>
                </div>
                
                <div class="rydberg-atoms">
                  <h5>Rydberg原子：</h5>
                  <ul>
                    <li>长程相互作用</li>
                    <li>可调阻塞半径</li>
                    <li>量子模拟器</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="quantum-simulation">
          <h3>🎮 量子模拟</h3>
          <div class="simulation-content">
            <div class="simulation-protocols">
              <h4>模拟协议：</h4>
              <div class="protocols-grid">
                <div class="protocol-card">
                  <h5>绝热演化：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H(t) = (1-t/T)H₀ + (t/T)H₁</p>
                      <p>制备基态</p>
                    </div>
                  </div>
                </div>
                
                <div class="protocol-card">
                  <h5>量子淬火：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H(t) = H₀ θ(-t) + H₁ θ(t)</p>
                      <p>非平衡动力学</p>
                    </div>
                  </div>
                </div>
                
                <div class="protocol-card">
                  <h5>周期驱动：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H(t) = H₀ + V cos(ωt)</p>
                      <p>Floquet工程</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="measurement-techniques">
              <h4>测量技术：</h4>
              <div class="techniques-grid">
                <div class="technique-card">
                  <h5>关联函数测量：</h5>
                  <ul>
                    <li>时间飞行成像</li>
                    <li>干涉测量</li>
                    <li>噪声关联</li>
                  </ul>
                </div>
                
                <div class="technique-card">
                  <h5>纠缠探测：</h5>
                  <ul>
                    <li>纠缠熵测量</li>
                    <li>见证算符</li>
                    <li>量子Fisher信息</li>
                  </ul>
                </div>
                
                <div class="technique-card">
                  <h5>相变探测：</h5>
                  <ul>
                    <li>保真度易感性</li>
                    <li>能隙测量</li>
                    <li>标度分析</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="technological-applications">
          <h3>💡 技术应用</h3>
          <div class="applications-content">
            <div class="quantum-computing">
              <h4>量子计算：</h4>
              <div class="computing-applications">
                <div class="application-card">
                  <h5>量子退火：</h5>
                  <ul>
                    <li>优化问题求解</li>
                    <li>D-Wave系统</li>
                    <li>横向场Ising模型</li>
                  </ul>
                </div>
                
                <div class="application-card">
                  <h5>绝热量子计算：</h5>
                  <ul>
                    <li>基态制备</li>
                    <li>量子近似优化</li>
                    <li>变分量子算法</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="quantum-sensing">
              <h4>量子传感：</h4>
              <div class="sensing-applications">
                <div class="sensor-card">
                  <h5>磁场传感：</h5>
                  <ul>
                    <li>NV中心</li>
                    <li>原子磁力计</li>
                    <li>超导量子干涉仪</li>
                  </ul>
                </div>
                
                <div class="sensor-card">
                  <h5>精密测量：</h5>
                  <ul>
                    <li>原子钟</li>
                    <li>引力波探测</li>
                    <li>暗物质搜寻</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节总结</h2>
      <div class="key-points">
        <div class="point-item">
          <div class="point-number">1</div>
          <p>Jordan-Wigner变换建立了自旋系统与费米子系统之间的精确映射，使得复杂的量子多体问题变得可解。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>一维XY模型展现了丰富的量子相变现象，包括Ising和XY两个不同的普适类。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>精确解揭示了临界点处的共形不变性和标度行为，为理解量子临界性提供了重要范例。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>该模型在量子模拟、量子计算和量子传感等前沿技术中具有重要的应用价值。</p>
        </div>
      </div>
    </section>
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
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.xy-hamiltonian {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.model-definition h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.hamiltonian-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.basic-hamiltonian {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.basic-hamiltonian h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mathematical-content {
  background: #f8fafc;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.equation-block {
  background: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  color: #2d3748;
}

.parameter-regimes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-regimes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.regimes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.regime-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.regime-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.physical-interpretation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.physical-interpretation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interpretation-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.spin-dynamics,
.quantum-phases {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spin-dynamics h5,
.quantum-phases h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.spin-dynamics ul,
.quantum-phases ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spin-dynamics li,
.quantum-phases li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.spin-dynamics li::before,
.quantum-phases li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.jordan-wigner-transformation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.transformation-definition {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.transformation-definition h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.jw-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.transformation-formulas {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transformation-formulas h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.string-operator {
  margin-top: 1rem;
}

.string-operator h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.anticommutation-relations {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.anticommutation-relations h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.key-insight {
  margin-top: 1rem;
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.375rem;
  padding: 1rem;
}

.key-insight h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.key-insight p {
  color: #4a5568;
  margin: 0;
  font-style: italic;
}

.transformation-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transformation-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.property-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.property-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.property-card p {
  color: #4a5568;
  margin: 0.25rem 0;
  font-size: 0.875rem;
}

.transformed-hamiltonian {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.transformed-hamiltonian h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.fermionic-hamiltonian {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.xy-to-fermion {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.xy-to-fermion h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.hopping-pairing {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hopping-pairing h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.terms-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.term-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.term-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.bogoliubov-transformation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.bogoliubov-transformation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.dispersion-relation {
  margin-top: 1rem;
}

.dispersion-relation h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.quantum-phase-transitions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.phase-diagram {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.phase-diagram h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.phase-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.critical-points {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.critical-points h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.phase-regions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.phase-regions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.phases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.phase-card {
  border-radius: 0.375rem;
  padding: 1rem;
  border: 2px solid;
}

.phase-card.paramagnetic {
  background: #fef5e7;
  border-color: #f6ad55;
}

.phase-card.ferromagnetic {
  background: #e6fffa;
  border-color: #4fd1c7;
}

.phase-card.critical {
  background: #fed7d7;
  border-color: #fc8181;
}

.phase-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.phase-properties ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.phase-properties li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.phase-properties li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.universality-classes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.universality-classes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.universality-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.ising-class,
.xy-class {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.ising-class h5,
.xy-class h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.critical-phenomena {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.critical-phenomena h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.critical-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.correlation-functions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.correlation-functions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scaling-behavior {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scaling-behavior h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scaling-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.finite-size-scaling,
.dynamic-scaling {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.finite-size-scaling h5,
.dynamic-scaling h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.entanglement-entropy {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.entanglement-entropy h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.exact-solutions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.ground-state-properties {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.ground-state-properties h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.ground-state-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.energy-calculation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-calculation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.energy-regimes {
  margin-top: 1rem;
}

.regime-analysis h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.energy-cases {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.case-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.case-item h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.case-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
}

.magnetization {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.magnetization h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnetization-behavior {
  margin-top: 1rem;
}

.magnetization-behavior h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.behavior-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.behavior-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.behavior-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.behavior-card p {
  color: #4a5568;
  margin: 0.125rem 0;
  font-size: 0.75rem;
}

.susceptibility {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.susceptibility h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.susceptibility-divergence {
  margin-top: 1rem;
}

.susceptibility-divergence h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.dynamic-properties {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.dynamic-properties h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.dynamics-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.spectral-function {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spectral-function h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.transport-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transport-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.transport-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transport-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.relaxation-dynamics {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.relaxation-dynamics h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.experimental-applications {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.physical-realizations {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.physical-realizations h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.realizations-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.solid-state-systems {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.solid-state-systems h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.systems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.system-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.system-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.system-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.system-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.system-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.cold-atoms {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.cold-atoms h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.cold-atoms-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.optical-lattices,
.rydberg-atoms {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.optical-lattices h5,
.rydberg-atoms h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.rydberg-atoms ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.rydberg-atoms li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.rydberg-atoms li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.quantum-simulation {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.quantum-simulation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.simulation-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.simulation-protocols {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.simulation-protocols h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.protocols-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.protocol-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.protocol-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.measurement-techniques {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.measurement-techniques h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.technique-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.technique-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.technique-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.technique-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.technique-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.technological-applications {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.technological-applications h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.applications-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quantum-computing {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-computing h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.computing-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.application-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.application-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.application-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.application-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.application-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.quantum-sensing {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-sensing h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.sensing-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.sensor-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.sensor-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.sensor-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sensor-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.sensor-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 0.75rem;
  padding: 2rem;
  margin-top: 2rem;
}

.summary h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  backdrop-filter: blur(10px);
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
  font-weight: 600;
  flex-shrink: 0;
}

.point-item p {
  margin: 0;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .regimes-grid,
  .properties-grid,
  .phases-grid,
  .systems-grid,
  .protocols-grid,
  .techniques-grid,
  .computing-applications,
  .sensing-applications {
    grid-template-columns: 1fr;
  }
  
  .interpretation-content,
  .universality-content,
  .scaling-content,
  .behavior-grid,
  .cold-atoms-content {
    grid-template-columns: 1fr;
  }
  
  .terms-analysis,
  .transport-grid {
    grid-template-columns: 1fr;
  }
}
</style>