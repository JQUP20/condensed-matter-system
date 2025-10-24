<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.3.2 一维相互作用费米子系统</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">强关联电子系统</span>
        <span class="reading-time">阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一维相互作用费米子系统是凝聚态物理中最具挑战性和最富有成果的研究领域之一。
        与高维系统不同，一维系统中的量子涨落被极大地增强，导致了许多奇异的物理现象。
        费米液体理论在一维系统中失效，取而代之的是Tomonaga-Luttinger液体理论。
        这些系统不仅在理论上具有重要意义，也在碳纳米管、量子线、边缘态等实际材料中得到实现。
      </p>
    </div>

    <section class="content-section">
      <h2>一维费米子系统的基本特征</h2>
      <div class="basic-features">
        <div class="dimensional-effects">
          <h3>🌊 维度效应</h3>
          <div class="effects-content">
            <div class="quantum-fluctuations">
              <h4>量子涨落的增强：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>相位空间体积：Ω ∝ L^d</p>
                  <p>d = 1: 相位空间受限</p>
                  <p>量子涨落 ∝ 1/√Ω ∝ 1/√L</p>
                  <p>热力学极限下涨落不消失</p>
                </div>
              </div>
            </div>

            <div class="fermi-surface">
              <h4>费米面的特殊性：</h4>
              <div class="fermi-properties">
                <div class="property-card">
                  <h5>零维费米面：</h5>
                  <ul>
                    <li>只有两个费米点：±k_F</li>
                    <li>嵌套性质完美</li>
                    <li>所有散射过程都是前向或后向</li>
                  </ul>
                </div>
                
                <div class="property-card">
                  <h5>散射过程：</h5>
                  <ul>
                    <li>g₁: 前向散射 (k_F → k_F)</li>
                    <li>g₂: 后向散射 (k_F → -k_F)</li>
                    <li>g₄: Umklapp散射</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="instabilities">
              <h4>不稳定性：</h4>
              <div class="instability-types">
                <div class="instability-card">
                  <h5>电荷密度波 (CDW):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨ρ(x)⟩ ∝ cos(2k_F x + φ)</p>
                      <p>2k_F 调制</p>
                    </div>
                  </div>
                </div>
                
                <div class="instability-card">
                  <h5>自旋密度波 (SDW):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨S^z(x)⟩ ∝ cos(2k_F x + φ)</p>
                      <p>反铁磁序</p>
                    </div>
                  </div>
                </div>
                
                <div class="instability-card">
                  <h5>超导配对：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨c↑(x)c↓(x)⟩ ≠ 0</p>
                      <p>s波配对</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fermi-liquid-breakdown">
          <h3>💥 费米液体理论的失效</h3>
          <div class="breakdown-content">
            <div class="landau-theory-limits">
              <h4>Landau理论的局限：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>准粒子寿命：τ ∝ 1/T²</p>
                  <p>一维中：τ ∝ 1/T (幂律衰减)</p>
                  <p>准粒子概念失效</p>
                </div>
              </div>
            </div>

            <div class="anomalous-properties">
              <h4>反常性质：</h4>
              <div class="anomalies-grid">
                <div class="anomaly-card">
                  <h5>比热：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>C ∝ T (而非T)</p>
                      <p>非费米液体行为</p>
                    </div>
                  </div>
                </div>
                
                <div class="anomaly-card">
                  <h5>电阻率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ρ ∝ T^α</p>
                      <p>α ≠ 2</p>
                    </div>
                  </div>
                </div>
                
                <div class="anomaly-card">
                  <h5>态密度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>N(ω) ∝ |ω|^α</p>
                      <p>幂律奇点</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="correlation-functions">
              <h4>关联函数的异常：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>G(x,t) = ⟨c†(x,t)c(0,0)⟩</p>
                  <p>∝ (x + iv_F t)^(-α)</p>
                  <p>幂律衰减，非指数衰减</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Hubbard模型在一维</h2>
      <div class="hubbard-1d">
        <div class="model-definition">
          <h3>🎯 模型哈密顿量</h3>
          <div class="hamiltonian-content">
            <div class="basic-hamiltonian">
              <h4>一维Hubbard模型：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = -t ∑ᵢ,σ (cᵢ,σ†cᵢ₊₁,σ + h.c.) + U ∑ᵢ nᵢ↑nᵢ↓</p>
                  <p>t: 跳跃积分</p>
                  <p>U: 在位库仑排斥</p>
                  <p>nᵢσ = cᵢσ†cᵢσ: 粒子数算符</p>
                </div>
              </div>
            </div>

            <div class="parameter-regimes">
              <h4>参数区间：</h4>
              <div class="regimes-grid">
                <div class="regime-card weak-coupling">
                  <h5>弱耦合 (U ≪ t):</h5>
                  <ul>
                    <li>近似自由费米子</li>
                    <li>微扰论适用</li>
                    <li>金属行为</li>
                  </ul>
                </div>
                
                <div class="regime-card strong-coupling">
                  <h5>强耦合 (U ≫ t):</h5>
                  <ul>
                    <li>Mott绝缘体</li>
                    <li>自旋交换主导</li>
                    <li>t-J模型</li>
                  </ul>
                </div>
                
                <div class="regime-card intermediate">
                  <h5>中等耦合 (U ~ t):</h5>
                  <ul>
                    <li>强关联液体</li>
                    <li>非微扰效应</li>
                    <li>Luttinger液体</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bethe-ansatz">
          <h3>🔍 Bethe Ansatz精确解</h3>
          <div class="bethe-content">
            <div class="ansatz-method">
              <h4>Bethe Ansatz方法：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>|Ψ⟩ = ∑ₚ A(P) ∏ⱼ cₖⱼ,σⱼ† |0⟩</p>
                  <p>A(P): 散射振幅</p>
                  <p>满足Yang-Baxter方程</p>
                </div>
              </div>
            </div>

            <div class="bethe-equations">
              <h4>Bethe方程：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>e^(ik_j L) = ∏ₗ≠ⱼ (k_j - k_l + iU/2)/(k_j - k_l - iU/2)</p>
                  <p>L: 系统长度</p>
                  <p>k_j: 准动量</p>
                </div>
              </div>
            </div>

            <div class="thermodynamic-bethe-ansatz">
              <h4>热力学Bethe Ansatz (TBA):</h4>
              <div class="tba-content">
                <div class="integral-equations">
                  <h5>积分方程：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ε(k) = k² - μ - ∫ K(k,λ) ln(1 + e^(-ε(λ)/T)) dλ</p>
                      <p>K(k,λ): 散射核</p>
                    </div>
                  </div>
                </div>
                
                <div class="ground-state-energy">
                  <h5>基态能量：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>E₀/L = -∫₋Q^Q ε(k) ρ(k) dk</p>
                      <p>ρ(k): 态密度</p>
                      <p>Q: 费米边界</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="exact-results">
              <h4>精确结果：</h4>
              <div class="results-grid">
                <div class="result-card">
                  <h5>基态相图：</h5>
                  <ul>
                    <li>半填充：Mott绝缘体</li>
                    <li>掺杂：Luttinger液体</li>
                    <li>无相变（除半填充）</li>
                  </ul>
                </div>
                
                <div class="result-card">
                  <h5>激发谱：</h5>
                  <ul>
                    <li>自旋激发：无能隙</li>
                    <li>电荷激发：有能隙（半填充）</li>
                    <li>自旋-电荷分离</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>自旋-电荷分离</h2>
      <div class="spin-charge-separation">
        <div class="separation-concept">
          <h3>🔄 分离现象</h3>
          <div class="concept-content">
            <div class="physical-picture">
              <h4>物理图像：</h4>
              <div class="picture-description">
                <p>在一维强关联系统中，电子的自旋和电荷自由度可以分离成独立的激发模式。
                   这与高维系统中电子作为整体运动的情况截然不同。</p>
              </div>
              
              <div class="separation-mechanism">
                <h5>分离机制：</h5>
                <div class="mechanism-grid">
                  <div class="mechanism-card">
                    <h6>电荷激发（Holon）：</h6>
                    <ul>
                      <li>携带电荷±e</li>
                      <li>自旋为0</li>
                      <li>速度v_c</li>
                    </ul>
                  </div>
                  
                  <div class="mechanism-card">
                    <h6>自旋激发（Spinon）：</h6>
                    <ul>
                      <li>携带自旋±1/2</li>
                      <li>电荷为0</li>
                      <li>速度v_s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="mathematical-description">
              <h4>数学描述：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>c†(x) → e^(iφ_c(x)) e^(iφ_s(x))</p>
                  <p>φ_c: 电荷场</p>
                  <p>φ_s: 自旋场</p>
                  <p>[φ_c(x), φ_s(y)] = 0</p>
                </div>
              </div>
            </div>

            <div class="experimental-signatures">
              <h4>实验特征：</h4>
              <div class="signatures-grid">
                <div class="signature-card">
                  <h5>光电子谱：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>A(k,ω) ∝ |ω - v_c k|^(-α_c) |ω - v_s k|^(-α_s)</p>
                      <p>双峰结构</p>
                    </div>
                  </div>
                </div>
                
                <div class="signature-card">
                  <h5>输运性质：</h5>
                  <ul>
                    <li>电导率：σ ∝ T^(-α)</li>
                    <li>自旋电导：不同的温度依赖</li>
                    <li>热电效应异常</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bosonization-approach">
          <h3>🌊 玻色化方法</h3>
          <div class="bosonization-content">
            <div class="field-decomposition">
              <h4>场分解：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ψ_R(x) = (1/√2πα) e^(i√π[φ_c(x) + φ_s(x)])</p>
                  <p>ψ_L(x) = (1/√2πα) e^(i√π[φ_c(x) - φ_s(x)])</p>
                  <p>R/L: 右/左手性费米子</p>
                </div>
              </div>
            </div>

            <div class="boson-hamiltonian">
              <h4>玻色化哈密顿量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = (v_c/2) ∫ dx [K_c (∂_x φ_c)² + (1/K_c) (∂_x θ_c)²]</p>
                  <p>  + (v_s/2) ∫ dx [K_s (∂_x φ_s)² + (1/K_s) (∂_x θ_s)²]</p>
                  <p>K_c, K_s: Luttinger参数</p>
                </div>
              </div>
            </div>

            <div class="correlation-functions-boson">
              <h4>关联函数：</h4>
              <div class="correlations-grid">
                <div class="correlation-card">
                  <h5>单粒子格林函数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>G(x,t) ∝ (x + iv_c t)^(-1/2K_c) (x + iv_s t)^(-1/2K_s)</p>
                    </div>
                  </div>
                </div>
                
                <div class="correlation-card">
                  <h5>密度关联：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨ρ(x)ρ(0)⟩ ∝ x^(-2K_c)</p>
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
      <h2>Luttinger液体理论</h2>
      <div class="luttinger-liquid">
        <div class="theory-foundation">
          <h3>🏗️ 理论基础</h3>
          <div class="foundation-content">
            <div class="luttinger-model">
              <h4>Luttinger模型：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = ∑_{k,σ} v_F |k| c†_{k,σ} c_{k,σ}</p>
                  <p>  + (1/2L) ∑_{k,k',q} V(q) ρ_k ρ_{k'+q}</p>
                  <p>线性色散 + 相互作用</p>
                </div>
              </div>
            </div>

            <div class="renormalization-group">
              <h4>重整化群分析：</h4>
              <div class="rg-content">
                <div class="beta-functions">
                  <h5>β函数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>dg₁/dl = -g₂²</p>
                      <p>dg₂/dl = -g₁g₂</p>
                      <p>l = ln(Λ/E): 能标</p>
                    </div>
                  </div>
                </div>
                
                <div class="fixed-points">
                  <h5>不动点：</h5>
                  <div class="fixed-points-grid">
                    <div class="fp-card">
                      <h6>自由费米子：</h6>
                      <p>g₁ = g₂ = 0</p>
                      <p>不稳定</p>
                    </div>
                    
                    <div class="fp-card">
                      <h6>Luttinger液体：</h6>
                      <p>g₁ ≠ 0, g₂ = 0</p>
                      <p>稳定</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="luttinger-parameters">
              <h4>Luttinger参数：</h4>
              <div class="parameters-content">
                <div class="parameter-definitions">
                  <h5>参数定义：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>K = √[(v_F + g₄/2π)/(v_F + g₂/2π)]</p>
                      <p>v = √[(v_F + g₄/2π)(v_F + g₂/2π)]</p>
                      <p>K: 相互作用强度</p>
                      <p>v: 重整化速度</p>
                    </div>
                  </div>
                </div>
                
                <div class="parameter-regimes">
                  <h5>参数区间：</h5>
                  <div class="regimes-interpretation">
                    <div class="regime-item">
                      <h6>K > 1:</h6>
                      <p>吸引相互作用主导</p>
                      <p>超导不稳定性</p>
                    </div>
                    
                    <div class="regime-item">
                      <h6>K < 1:</h6>
                      <p>排斥相互作用主导</p>
                      <p>CDW不稳定性</p>
                    </div>
                    
                    <div class="regime-item">
                      <h6>K = 1:</h6>
                      <p>自由费米子</p>
                      <p>边界情况</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-properties">
          <h3>📊 物理性质</h3>
          <div class="properties-content">
            <div class="thermodynamic-properties">
              <h4>热力学性质：</h4>
              <div class="thermo-grid">
                <div class="thermo-card">
                  <h5>比热：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>C = (π/3) k_B² T/ℏv</p>
                      <p>线性温度依赖</p>
                    </div>
                  </div>
                </div>
                
                <div class="thermo-card">
                  <h5>压缩率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>κ = K/(πℏv n²)</p>
                      <p>K依赖</p>
                    </div>
                  </div>
                </div>
                
                <div class="thermo-card">
                  <h5>自旋磁化率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ_s = (μ_B²/2πℏv_s)</p>
                      <p>常数</p>
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
                      <p>σ(ω) = (e²/h) δ(ω)</p>
                      <p>完美导体（无杂质）</p>
                    </div>
                  </div>
                </div>
                
                <div class="impurity-effects">
                  <h5>杂质效应：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>σ(T) ∝ T^(2(K-1))</p>
                      <p>幂律温度依赖</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="spectral-properties">
              <h4>谱学性质：</h4>
              <div class="spectral-content">
                <div class="photoemission">
                  <h5>光电子谱：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>A(k,ω) ∝ |ω - v_F(k-k_F)|^(-α)</p>
                      <p>α = (K + K⁻¹ - 2)/4</p>
                      <p>幂律边缘奇点</p>
                    </div>
                  </div>
                </div>
                
                <div class="tunneling">
                  <h5>隧穿谱：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>I(V) ∝ V^α</p>
                      <p>α = K - 1</p>
                      <p>非线性I-V特性</p>
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
      <h2>实验实现与观测</h2>
      <div class="experimental-realizations">
        <div class="material-systems">
          <h3>🔬 材料体系</h3>
          <div class="materials-content">
            <div class="carbon-nanotubes">
              <h4>碳纳米管：</h4>
              <div class="cnt-properties">
                <div class="property-card">
                  <h5>结构特点：</h5>
                  <ul>
                    <li>准一维结构</li>
                    <li>直径~1-2 nm</li>
                    <li>长度可达微米</li>
                    <li>金属或半导体性质</li>
                  </ul>
                </div>
                
                <div class="property-card">
                  <h5>Luttinger液体行为：</h5>
                  <ul>
                    <li>幂律隧穿谱</li>
                    <li>自旋-电荷分离</li>
                    <li>K ≈ 0.2-0.3</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="quantum-wires">
              <h4>量子线：</h4>
              <div class="qw-content">
                <div class="fabrication-methods">
                  <h5>制备方法：</h5>
                  <div class="methods-grid">
                    <div class="method-card">
                      <h6>分子束外延：</h6>
                      <ul>
                        <li>GaAs/AlGaAs异质结</li>
                        <li>电子气限制</li>
                        <li>宽度~10-100 nm</li>
                      </ul>
                    </div>
                    
                    <div class="method-card">
                      <h6>电子束刻蚀：</h6>
                      <ul>
                        <li>二维电子气图案化</li>
                        <li>栅极调控</li>
                        <li>可调参数</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="experimental-observations">
                  <h5>实验观测：</h5>
                  <ul>
                    <li>电导量子化：G = ne²/h</li>
                    <li>0.7异常</li>
                    <li>Luttinger液体修正</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="edge-states">
              <h4>边缘态：</h4>
              <div class="edge-content">
                <div class="quantum-hall">
                  <h5>量子霍尔边缘态：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = ∑ᵢ v_i ∫ dx ψᵢ†(x) (-i∂_x) ψᵢ(x)</p>
                      <p>手性Luttinger液体</p>
                    </div>
                  </div>
                </div>
                
                <div class="topological-insulators">
                  <h5>拓扑绝缘体边缘：</h5>
                  <ul>
                    <li>螺旋边缘态</li>
                    <li>时间反演对称保护</li>
                    <li>无背散射</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-techniques">
          <h3>🔧 实验技术</h3>
          <div class="techniques-content">
            <div class="transport-measurements">
              <h4>输运测量：</h4>
              <div class="transport-techniques">
                <div class="technique-card">
                  <h5>四端测量：</h5>
                  <ul>
                    <li>消除接触电阻</li>
                    <li>精确电导测量</li>
                    <li>温度依赖研究</li>
                  </ul>
                </div>
                
                <div class="technique-card">
                  <h5>隧穿谱学：</h5>
                  <ul>
                    <li>STM/STS</li>
                    <li>平面隧穿结</li>
                    <li>态密度探测</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="spectroscopic-probes">
              <h4>谱学探测：</h4>
              <div class="spectroscopy-grid">
                <div class="spectro-card">
                  <h5>角分辨光电子谱 (ARPES):</h5>
                  <ul>
                    <li>能带结构</li>
                    <li>费米面拓扑</li>
                    <li>自能效应</li>
                  </ul>
                </div>
                
                <div class="spectro-card">
                  <h5>拉曼散射：</h5>
                  <ul>
                    <li>集体激发</li>
                    <li>声子-电子耦合</li>
                    <li>对称性分析</li>
                  </ul>
                </div>
                
                <div class="spectro-card">
                  <h5>光学吸收：</h5>
                  <ul>
                    <li>带间跃迁</li>
                    <li>激子效应</li>
                    <li>选择定则</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="advanced-probes">
              <h4>先进探测：</h4>
              <div class="advanced-content">
                <div class="quantum-transport">
                  <h5>量子输运：</h5>
                  <ul>
                    <li>散粒噪声测量</li>
                    <li>全计数统计</li>
                    <li>涨落定理验证</li>
                  </ul>
                </div>
                
                <div class="time-resolved">
                  <h5>时间分辨技术：</h5>
                  <ul>
                    <li>泵浦-探测</li>
                    <li>超快动力学</li>
                    <li>相干控制</li>
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
          <p>一维费米子系统中量子涨落被极大增强，导致费米液体理论失效，出现Luttinger液体行为。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>自旋-电荷分离是一维强关联系统的标志性现象，电子的自旋和电荷自由度独立传播。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>Luttinger液体理论提供了描述一维相互作用费米子系统的完整理论框架。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>碳纳米管、量子线等实际材料为研究一维费米子系统提供了理想的实验平台。</p>
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

.basic-features {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.dimensional-effects {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.dimensional-effects h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.effects-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quantum-fluctuations {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-fluctuations h4 {
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

.fermi-surface {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.fermi-surface h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.fermi-properties {
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

.property-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.property-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.property-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.instabilities {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.instabilities h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.instability-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.instability-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.instability-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.fermi-liquid-breakdown {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.fermi-liquid-breakdown h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.breakdown-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.landau-theory-limits {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.landau-theory-limits h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.anomalous-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.anomalous-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.anomalies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.anomaly-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.anomaly-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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

.hubbard-1d {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.model-definition {
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
  border-radius: 0.375rem;
  padding: 1rem;
  border: 2px solid;
}

.regime-card.weak-coupling {
  background: #e6fffa;
  border-color: #4fd1c7;
}

.regime-card.strong-coupling {
  background: #fef5e7;
  border-color: #f6ad55;
}

.regime-card.intermediate {
  background: #fed7d7;
  border-color: #fc8181;
}

.regime-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.regime-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.regime-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.regime-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.bethe-ansatz {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.bethe-ansatz h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.bethe-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.ansatz-method,
.bethe-equations {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.ansatz-method h4,
.bethe-equations h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.thermodynamic-bethe-ansatz {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.thermodynamic-bethe-ansatz h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.tba-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.integral-equations,
.ground-state-energy {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.integral-equations h5,
.ground-state-energy h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.exact-results {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.exact-results h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.result-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.result-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.result-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.result-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.result-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.spin-charge-separation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.separation-concept {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.separation-concept h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.concept-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.physical-picture {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.physical-picture h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.picture-description {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.375rem;
  padding: 1rem;
  margin-bottom: 1rem;
}

.picture-description p {
  color: #4a5568;
  margin: 0;
  font-style: italic;
}

.separation-mechanism h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.mechanism-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.mechanism-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.mechanism-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.mechanism-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mechanism-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.75rem;
}

.mechanism-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.mathematical-description {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.mathematical-description h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.experimental-signatures {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.experimental-signatures h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.signatures-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.signature-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.signature-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.signature-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.signature-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.signature-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.bosonization-approach {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.bosonization-approach h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.bosonization-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.field-decomposition,
.boson-hamiltonian {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.field-decomposition h4,
.boson-hamiltonian h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.correlation-functions-boson {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.correlation-functions-boson h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.correlations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.correlation-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.correlation-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.luttinger-liquid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.theory-foundation {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.theory-foundation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.foundation-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.luttinger-model {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.luttinger-model h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.renormalization-group {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.renormalization-group h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.rg-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.beta-functions,
.fixed-points {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.beta-functions h5,
.fixed-points h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.fixed-points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
}

.fp-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  border: 1px solid #e2e8f0;
}

.fp-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.fp-card p {
  font-size: 0.75rem;
  color: #4a5568;
  margin: 0.125rem 0;
}

.luttinger-parameters {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.luttinger-parameters h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.parameters-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.parameter-definitions,
.parameter-regimes {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-definitions h5,
.parameter-regimes h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.regimes-interpretation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.regime-item {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.regime-item h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.regime-item p {
  font-size: 0.75rem;
  color: #4a5568;
  margin: 0.125rem 0;
}

.physical-properties {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.physical-properties h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.thermodynamic-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.thermodynamic-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.thermo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.thermo-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.thermo-card h5 {
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.conductivity,
.impurity-effects {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.conductivity h5,
.impurity-effects h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.spectral-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spectral-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.spectral-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.photoemission,
.tunneling {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.photoemission h5,
.tunneling h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.experimental-realizations {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.material-systems {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.material-systems h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.materials-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.carbon-nanotubes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.carbon-nanotubes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.cnt-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.quantum-wires {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-wires h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.qw-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.fabrication-methods {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.fabrication-methods h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.method-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.method-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.method-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.method-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.method-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-observations {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.experimental-observations h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.experimental-observations ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experimental-observations li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.experimental-observations li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.edge-states {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.edge-states h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.edge-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.quantum-hall,
.topological-insulators {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-hall h5,
.topological-insulators h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.topological-insulators ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.topological-insulators li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.topological-insulators li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-techniques {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.experimental-techniques h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.techniques-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.transport-measurements {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transport-measurements h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.transport-techniques {
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

.spectroscopic-probes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spectroscopic-probes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.spectroscopy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.spectro-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spectro-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.spectro-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.spectro-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.spectro-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.advanced-probes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.advanced-probes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.advanced-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.quantum-transport,
.time-resolved {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-transport h5,
.time-resolved h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.quantum-transport ul,
.time-resolved ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quantum-transport li,
.time-resolved li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.quantum-transport li::before,
.time-resolved li::before {
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
  line-height: 1.6;
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
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .regimes-grid,
  .anomalies-grid,
  .results-grid,
  .mechanism-grid,
  .signatures-grid,
  .correlations-grid,
  .thermo-grid,
  .spectral-content,
  .cnt-properties,
  .methods-grid,
  .transport-techniques,
  .spectroscopy-grid,
  .advanced-content {
    grid-template-columns: 1fr;
  }
  
  .rg-content,
  .tba-content {
    grid-template-columns: 1fr;
  }
  
  .regimes-interpretation,
  .fixed-points-grid {
    grid-template-columns: 1fr;
  }
}
</style>