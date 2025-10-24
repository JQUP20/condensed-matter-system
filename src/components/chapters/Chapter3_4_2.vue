<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.4.2 Kondo效应的物理图像</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">强关联物理</span>
        <span class="reading-time">阅读时间: 50分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Kondo效应是凝聚态物理中最重要的多体现象之一，描述了局域磁矩与传导电子之间的量子纠缠过程。
        这一效应最初由Jun Kondo在1964年发现，用于解释稀磁合金中电阻率随温度降低而异常增加的现象。
        Kondo效应的核心在于反铁磁交换相互作用导致的局域自旋屏蔽，形成了一个非磁性的单重态基态。
        这一过程涉及多个能量尺度的竞争，展现了量子多体系统中的丰富物理内容，
        为理解重费米子系统、量子点、分子器件等强关联电子系统提供了重要的理论基础。
      </p>
    </div>

    <section class="content-section">
      <h2>Kondo效应的基本图像</h2>
      <div class="basic-picture">
        <div class="physical-setup">
          <h3>🎯 物理设置</h3>
          <div class="setup-content">
            <div class="kondo-hamiltonian">
              <h4>Kondo哈密顿量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = ∑_{k,σ} ε_k c†_{k,σ} c_{k,σ} + J S⃗ · s⃗(0)</p>
                  <p>J > 0: 反铁磁交换耦合</p>
                  <p>S⃗: 局域自旋-1/2</p>
                  <p>s⃗(0): 传导电子在杂质处的自旋密度</p>
                </div>
              </div>
            </div>

            <div class="energy-scales">
              <h4>特征能量尺度：</h4>
              <div class="scales-content">
                <div class="scales-grid">
                  <div class="scale-card bandwidth">
                    <h5>带宽 D:</h5>
                    <ul>
                      <li>传导电子能量尺度</li>
                      <li>典型值：几eV</li>
                      <li>高能截断</li>
                    </ul>
                  </div>
                  
                  <div class="scale-card coupling">
                    <h5>交换耦合 J:</h5>
                    <ul>
                      <li>局域-传导电子耦合</li>
                      <li>微扰参数</li>
                      <li>J << D</li>
                    </ul>
                  </div>
                  
                  <div class="scale-card kondo-temp">
                    <h5>Kondo温度 T_K:</h5>
                    <ul>
                      <li>T_K ~ D exp(-1/Jρ_0)</li>
                      <li>非微扰能量尺度</li>
                      <li>物理现象的特征温度</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="competing-interactions">
              <h4>竞争相互作用：</h4>
              <div class="interactions-content">
                <div class="interaction-item kinetic">
                  <h5>动能效应：</h5>
                  <p>传导电子倾向于保持自由运动，避免与局域自旋发生散射。</p>
                </div>
                
                <div class="interaction-item exchange">
                  <h5>交换效应：</h5>
                  <p>反铁磁耦合倾向于使传导电子自旋与局域自旋反平行排列。</p>
                </div>
                
                <div class="interaction-item quantum">
                  <h5>量子涨落：</h5>
                  <p>海森堡不确定性原理导致的自旋方向涨落。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="temperature-regimes">
          <h3>🌡️ 温度区间</h3>
          <div class="regimes-content">
            <div class="high-temperature">
              <h4>高温区间 (T >> T_K):</h4>
              <div class="regime-description">
                <div class="physical-picture">
                  <h5>物理图像：</h5>
                  <ul>
                    <li>局域自旋基本自由</li>
                    <li>弱散射近似有效</li>
                    <li>Curie-Weiss磁化率</li>
                    <li>电阻率对数增长</li>
                  </ul>
                </div>
                
                <div class="mathematical-description">
                  <h5>数学描述：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) = C/T, C = μ_B²g²S(S+1)/(3k_B)</p>
                      <p>ρ(T) = ρ_0 - cJ ln(T/D)</p>
                      <p>微扰理论适用</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="crossover-region">
              <h4>交叉区间 (T ~ T_K):</h4>
              <div class="regime-description">
                <div class="physical-picture">
                  <h5>物理图像：</h5>
                  <ul>
                    <li>强关联效应显现</li>
                    <li>自旋涨落增强</li>
                    <li>非费米液体行为</li>
                    <li>普适性出现</li>
                  </ul>
                </div>
                
                <div class="mathematical-description">
                  <h5>数学描述：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) ~ 1/T_K</p>
                      <p>ρ(T) 达到最大值</p>
                      <p>需要非微扰方法</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="low-temperature">
              <h4>低温区间 (T << T_K):</h4>
              <div class="regime-description">
                <div class="physical-picture">
                  <h5>物理图像：</h5>
                  <ul>
                    <li>局域自旋完全屏蔽</li>
                    <li>费米液体基态</li>
                    <li>增强的态密度</li>
                    <li>单重态形成</li>
                  </ul>
                </div>
                
                <div class="mathematical-description">
                  <h5>数学描述：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) = χ_0 + aT²</p>
                      <p>ρ(T) = ρ_0 + bT²</p>
                      <p>费米液体理论</p>
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
      <h2>屏蔽机制与单重态形成</h2>
      <div class="screening-mechanism">
        <div class="screening-cloud">
          <h3>🌀 Kondo屏蔽云</h3>
          <div class="cloud-content">
            <div class="formation-process">
              <h4>形成过程：</h4>
              <div class="process-steps">
                <div class="step-item">
                  <div class="step-number">1</div>
                  <div class="step-description">
                    <h5>初始态：</h5>
                    <p>局域自旋与传导电子海相互作用，系统处于高度纠缠的量子态。</p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-number">2</div>
                  <div class="step-description">
                    <h5>虚过程：</h5>
                    <p>传导电子通过虚的自旋翻转过程与局域自旋发生反铁磁耦合。</p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-number">3</div>
                  <div class="step-description">
                    <h5>屏蔽形成：</h5>
                    <p>多个传导电子协同作用，形成围绕局域自旋的屏蔽云。</p>
                  </div>
                </div>
                
                <div class="step-item">
                  <div class="step-number">4</div>
                  <div class="step-description">
                    <h5>单重态：</h5>
                    <p>局域自旋与屏蔽云形成总自旋为零的单重态基态。</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="cloud-properties">
              <h4>屏蔽云性质：</h4>
              <div class="properties-grid">
                <div class="property-card size">
                  <h5>尺寸：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ξ_K = ℏv_F/T_K</p>
                      <p>Kondo长度</p>
                      <p>典型值：几十纳米</p>
                    </div>
                  </div>
                </div>
                
                <div class="property-card binding">
                  <h5>结合能：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>E_binding ~ T_K</p>
                      <p>单重态稳定性</p>
                      <p>温度尺度</p>
                    </div>
                  </div>
                </div>
                
                <div class="property-card coherence">
                  <h5>相干性：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>τ_coh ~ ℏ/T_K</p>
                      <p>量子相干时间</p>
                      <p>多体纠缠</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="many-body-wavefunction">
              <h4>多体波函数：</h4>
              <div class="wavefunction-content">
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>|Ψ_GS⟩ = α|↑⟩⊗|sea_↓⟩ + β|↓⟩⊗|sea_↑⟩ + ...</p>
                    <p>高度纠缠的多体态</p>
                    <p>非局域量子关联</p>
                  </div>
                </div>
                
                <div class="entanglement-description">
                  <p>基态波函数描述了局域自旋与传导电子海之间的强量子纠缠，
                  这种纠缠延伸到Kondo长度范围内的所有传导电子。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="singlet-formation">
          <h3>🔗 单重态形成</h3>
          <div class="singlet-content">
            <div class="energy-gain">
              <h4>能量增益：</h4>
              <div class="gain-analysis">
                <div class="kinetic-cost">
                  <h5>动能代价：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ΔE_kinetic ~ T_K</p>
                      <p>传导电子局域化</p>
                      <p>费米面附近态重构</p>
                    </div>
                  </div>
                </div>
                
                <div class="exchange-gain">
                  <h5>交换增益：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ΔE_exchange ~ -T_K</p>
                      <p>反铁磁关联</p>
                      <p>自旋对关联</p>
                    </div>
                  </div>
                </div>
                
                <div class="net-gain">
                  <h5>净增益：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ΔE_total ~ -T_K ln(D/T_K)</p>
                      <p>对数增强</p>
                      <p>多体效应</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="order-parameter">
              <h4>序参量：</h4>
              <div class="parameter-content">
                <div class="local-susceptibility">
                  <h5>局域磁化率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ_loc = ⟨S_z²⟩/T</p>
                      <p>T >> T_K: χ_loc ~ 1/T</p>
                      <p>T << T_K: χ_loc ~ 1/T_K</p>
                    </div>
                  </div>
                </div>
                
                <div class="screening-parameter">
                  <h5>屏蔽参数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>Φ = ⟨S⃗ · s⃗(0)⟩</p>
                      <p>T >> T_K: Φ ~ 0</p>
                      <p>T << T_K: Φ ~ -1/4</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="quantum-phase-transition">
              <h4>量子相变特征：</h4>
              <div class="transition-content">
                <div class="critical-behavior">
                  <h5>临界行为：</h5>
                  <ul>
                    <li>连续相变</li>
                    <li>无能隙激发</li>
                    <li>对数发散</li>
                    <li>普适性类</li>
                  </ul>
                </div>
                
                <div class="scaling-laws">
                  <h5>标度律：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) = (1/T_K)f(T/T_K)</p>
                      <p>ρ(T) = ρ_K g(T/T_K)</p>
                      <p>普适函数</p>
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
      <h2>重整化群理论</h2>
      <div class="renormalization-group">
        <div class="rg-approach">
          <h3>🔄 重整化群方法</h3>
          <div class="rg-content">
            <div class="wilson-approach">
              <h4>Wilson方法：</h4>
              <div class="wilson-content">
                <div class="logarithmic-discretization">
                  <h5>对数离散化：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ε_n = ±DΛ^{-n}, n = 0,1,2,...</p>
                      <p>Λ > 1: 离散化参数</p>
                      <p>指数能量分布</p>
                    </div>
                  </div>
                </div>
                
                <div class="iterative-diagonalization">
                  <h5>迭代对角化：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H_N = Λ^{1/2}H_{N-1} + ε_N(f†_{N,↑}f_{N,↑} + f†_{N,↓}f_{N,↓})</p>
                      <p>+ J_N S⃗ · (f†_{N,↑}σ⃗f_{N,↓})</p>
                      <p>递归构造</p>
                    </div>
                  </div>
                </div>
                
                <div class="fixed-points">
                  <h5>不动点：</h5>
                  <div class="fixed-points-grid">
                    <div class="fp-card weak-coupling">
                      <h6>弱耦合不动点：</h6>
                      <p>J* = 0, 自由费米气体</p>
                    </div>
                    
                    <div class="fp-card strong-coupling">
                      <h6>强耦合不动点：</h6>
                      <p>J* = ∞, 完全屏蔽</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rg-flow">
              <h4>重整化群流：</h4>
              <div class="flow-content">
                <div class="beta-function">
                  <h5>β函数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>β(J) = dJ/d ln D = -2ρ_0J² + O(J³)</p>
                      <p>单环近似</p>
                      <p>反铁磁不稳定性</p>
                    </div>
                  </div>
                </div>
                
                <div class="flow-equation">
                  <h5>流方程解：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>J(D) = J_0/(1 + 2ρ_0J_0 ln(D/D_0))</p>
                      <p>D → T_K: J → ∞</p>
                      <p>强耦合区间</p>
                    </div>
                  </div>
                </div>
                
                <div class="kondo-temperature">
                  <h5>Kondo温度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>T_K = D exp(-1/(2ρ_0J_0))</p>
                      <p>非微扰结果</p>
                      <p>指数小参数</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="universality">
              <h4>普适性：</h4>
              <div class="universality-content">
                <div class="universal-functions">
                  <h5>普适函数：</h5>
                  <div class="functions-grid">
                    <div class="function-card susceptibility">
                      <h6>磁化率：</h6>
                      <div class="mathematical-content">
                        <div class="equation-block">
                          <p>χ(T) = (1/4T_K)F_χ(T/T_K)</p>
                          <p>F_χ(x → 0) = 1</p>
                          <p>F_χ(x → ∞) = 1/x</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="function-card resistivity">
                      <h6>电阻率：</h6>
                      <div class="mathematical-content">
                        <div class="equation-block">
                          <p>ρ(T) = ρ_K F_ρ(T/T_K)</p>
                          <p>F_ρ(x → 0) = const</p>
                          <p>F_ρ(x → ∞) = ln x</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="scaling-hypothesis">
                  <h5>标度假设：</h5>
                  <p>所有物理量都可以表示为T/T_K的普适函数，
                  这种普适性是重整化群理论的重要预言。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="poor-mans-scaling">
          <h3>📊 穷人标度法</h3>
          <div class="scaling-content">
            <div class="basic-idea">
              <h4>基本思想：</h4>
              <div class="idea-content">
                <p>通过逐步降低能量截断，研究有效耦合常数的演化，
                从而理解系统在不同能量尺度下的物理行为。</p>
              </div>
            </div>

            <div class="scaling-equations">
              <h4>标度方程：</h4>
              <div class="equations-content">
                <div class="coupling-evolution">
                  <h5>耦合演化：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>dJ/d ln D = -2ρ_0J²</p>
                      <p>dρ_0/d ln D = 0</p>
                      <p>态密度不变</p>
                    </div>
                  </div>
                </div>
                
                <div class="integration">
                  <h5>积分解：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>1/J(D) = 1/J_0 + 2ρ_0 ln(D_0/D)</p>
                      <p>发散条件：J(T_K) → ∞</p>
                      <p>T_K = D_0 exp(-1/(2ρ_0J_0))</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="physical-interpretation">
              <h4>物理解释：</h4>
              <div class="interpretation-content">
                <div class="high-energy">
                  <h5>高能区间 (D >> T_K):</h5>
                  <ul>
                    <li>弱耦合行为</li>
                    <li>微扰理论有效</li>
                    <li>自由费米气体</li>
                  </ul>
                </div>
                
                <div class="low-energy">
                  <h5>低能区间 (D << T_K):</h5>
                  <ul>
                    <li>强耦合行为</li>
                    <li>非微扰效应</li>
                    <li>费米液体</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>费米液体理论</h2>
      <div class="fermi-liquid-theory">
        <div class="low-energy-description">
          <h3>⚡ 低能描述</h3>
          <div class="description-content">
            <div class="effective-model">
              <h4>有效模型：</h4>
              <div class="model-content">
                <div class="resonant-level">
                  <h5>共振能级模型：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H_eff = ∑_{k,σ} ε_k c†_{k,σ} c_{k,σ} + ∑_σ ε_d d†_σ d_σ</p>
                      <p>+ ∑_{k,σ} V_k (c†_{k,σ} d_σ + h.c.)</p>
                      <p>ε_d = 0: 共振条件</p>
                    </div>
                  </div>
                </div>
                
                <div class="phase-shift">
                  <h5>相移：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>δ_σ = π/2</p>
                      <p>强散射极限</p>
                      <p>幺正性极限</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="quasiparticle-properties">
              <h4>准粒子性质：</h4>
              <div class="properties-content">
                <div class="enhanced-dos">
                  <h5>增强态密度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ρ_eff(0) = ρ_0(1 + 1/(πρ_0J))</p>
                      <p>Wilson比：R_W = 2</p>
                      <p>强关联效应</p>
                    </div>
                  </div>
                </div>
                
                <div class="scattering-rate">
                  <h5>散射率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>1/τ(T) = aT² + bT⁴</p>
                      <p>费米液体行为</p>
                      <p>T²依赖性</p>
                    </div>
                  </div>
                </div>
                
                <div class="specific-heat">
                  <h5>比热：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>C(T) = γT + βT³</p>
                      <p>γ = (π²k_B²/3)ρ_eff(0)</p>
                      <p>增强的线性项</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="transport-properties">
              <h4>输运性质：</h4>
              <div class="transport-content">
                <div class="conductivity">
                  <h5>电导率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>σ(T) = σ_0 - aT² + O(T⁴)</p>
                      <p>σ_0 = (2e²/h)sin²(πδ/2)</p>
                      <p>幺正性极限：σ_0 = 2e²/h</p>
                    </div>
                  </div>
                </div>
                
                <div class="thermopower">
                  <h5>热电势：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>S(T) = (π²k_B²T/3e)(d ln σ/dε)|_{ε=E_F}</p>
                      <p>Mott公式</p>
                      <p>线性温度依赖</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="wilson-ratio">
          <h3>📏 Wilson比</h3>
          <div class="ratio-content">
            <div class="definition">
              <h4>定义：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>R_W = (π²k_B²χ)/(3μ_B²γ)</p>
                  <p>磁化率与比热比值</p>
                  <p>费米液体参数</p>
                </div>
              </div>
            </div>

            <div class="kondo-value">
              <h4>Kondo值：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>R_W = 2</p>
                  <p>普适结果</p>
                  <p>强关联特征</p>
                </div>
              </div>
            </div>

            <div class="experimental-verification">
              <h4>实验验证：</h4>
              <div class="verification-content">
                <div class="materials-examples">
                  <h5>材料实例：</h5>
                  <ul>
                    <li>CeCu₆: R_W ≈ 1.8</li>
                    <li>YbAl₃: R_W ≈ 2.1</li>
                    <li>量子点: R_W ≈ 2.0</li>
                  </ul>
                </div>
                
                <div class="deviations">
                  <h5>偏离原因：</h5>
                  <ul>
                    <li>晶场效应</li>
                    <li>RKKY相互作用</li>
                    <li>无序效应</li>
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
          <p>Kondo效应源于局域自旋与传导电子的反铁磁交换相互作用，在低温下形成屏蔽云和单重态基态。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>重整化群理论揭示了Kondo效应的非微扰本质，预言了普适的标度行为和Kondo温度。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>低温下系统表现为费米液体，具有增强的态密度、Wilson比等特征性质。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>Kondo效应为理解重费米子系统、量子点等强关联电子系统提供了重要的理论框架。</p>
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

.basic-picture {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.physical-setup {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.physical-setup h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.setup-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.kondo-hamiltonian {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.kondo-hamiltonian h4 {
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

.energy-scales {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-scales h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scales-content {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scales-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.scale-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.scale-card h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.scale-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scale-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.scale-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.competing-interactions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.competing-interactions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interactions-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.interaction-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.interaction-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.interaction-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.875rem;
}

.temperature-regimes {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.temperature-regimes h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.regimes-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.high-temperature,
.crossover-region,
.low-temperature {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.high-temperature h4,
.crossover-region h4,
.low-temperature h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.regime-description {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.physical-picture,
.mathematical-description {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.physical-picture h5,
.mathematical-description h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.physical-picture ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.physical-picture li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.physical-picture li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.screening-mechanism {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.screening-cloud {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.screening-cloud h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.cloud-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.formation-process {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.formation-process h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.step-number {
  background: #667eea;
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

.step-description h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.step-description p {
  color: #4a5568;
  margin: 0;
  font-size: 0.875rem;
}

.cloud-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.cloud-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

.many-body-wavefunction {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.many-body-wavefunction h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.wavefunction-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.entanglement-description p {
  color: #4a5568;
  margin: 0;
  font-size: 0.875rem;
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.singlet-formation {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.singlet-formation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.singlet-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.energy-gain {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-gain h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.gain-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.kinetic-cost,
.exchange-gain,
.net-gain {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.kinetic-cost h5,
.exchange-gain h5,
.net-gain h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.order-parameter {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.order-parameter h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.parameter-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.local-susceptibility,
.screening-parameter {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.local-susceptibility h5,
.screening-parameter h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.quantum-phase-transition {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-phase-transition h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.transition-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.critical-behavior,
.scaling-laws {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.critical-behavior h5,
.scaling-laws h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.critical-behavior ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.critical-behavior li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.critical-behavior li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.renormalization-group {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.rg-approach {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.rg-approach h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.rg-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.wilson-approach {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.wilson-approach h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.wilson-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logarithmic-discretization,
.iterative-diagonalization {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.logarithmic-discretization h5,
.iterative-diagonalization h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.fixed-points {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.fixed-points h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.fixed-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.fp-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.fp-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.fp-card p {
  color: #4a5568;
  margin: 0;
  font-size: 0.75rem;
}

.rg-flow {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.rg-flow h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.flow-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.beta-function,
.flow-equation,
.kondo-temperature {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.beta-function h5,
.flow-equation h5,
.kondo-temperature h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.universality {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.universality h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.universality-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.universal-functions {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.universal-functions h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.functions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.function-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.function-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.scaling-hypothesis {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scaling-hypothesis h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.scaling-hypothesis p {
  color: #4a5568;
  margin: 0;
  font-size: 0.875rem;
}

.poor-mans-scaling {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.poor-mans-scaling h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scaling-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.basic-idea {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.basic-idea h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.idea-content p {
  color: #4a5568;
  margin: 0;
  font-size: 0.875rem;
}

.scaling-equations {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scaling-equations h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.equations-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.coupling-evolution,
.integration {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.coupling-evolution h5,
.integration h5 {
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

.high-energy,
.low-energy {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.high-energy h5,
.low-energy h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.high-energy ul,
.low-energy ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.high-energy li,
.low-energy li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.high-energy li::before,
.low-energy li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.fermi-liquid-theory {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.low-energy-description {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.low-energy-description h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.description-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.effective-model {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.effective-model h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.model-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.resonant-level,
.phase-shift {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.resonant-level h5,
.phase-shift h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.quasiparticle-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quasiparticle-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.enhanced-dos,
.scattering-rate,
.specific-heat {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.enhanced-dos h5,
.scattering-rate h5,
.specific-heat h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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

.transport-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.conductivity,
.thermopower {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.conductivity h5,
.thermopower h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.wilson-ratio {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.wilson-ratio h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.ratio-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.definition,
.kondo-value,
.experimental-verification {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.definition h4,
.kondo-value h4,
.experimental-verification h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.verification-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.materials-examples,
.deviations {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.materials-examples h5,
.deviations h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.materials-examples ul,
.deviations ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.materials-examples li,
.deviations li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.materials-examples li::before,
.deviations li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 3rem;
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
  font-size: 1rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .scales-grid,
  .properties-grid,
  .functions-grid,
  .fixed-points-grid {
    grid-template-columns: 1fr;
  }
  
  .regime-description,
  .gain-analysis,
  .parameter-content,
  .transition-content,
  .equations-content,
  .interpretation-content,
  .transport-content,
  .verification-content {
    grid-template-columns: 1fr;
  }
  
  .step-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .point-item {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>