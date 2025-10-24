<template>
  <div class="chapter-content">
    <!-- 页面头部 -->
    <div class="chapter-hero">
      <div class="hero-background">
        <div class="wave-pattern"></div>
        <div class="quantum-particles"></div>
      </div>
      <div class="hero-content">
        <div class="chapter-badge">
          <span class="badge-icon">🌊</span>
          <span class="badge-text">一维量子多体系统</span>
        </div>
        <h1 class="hero-title">Luttinger液体理论</h1>
        <p class="hero-subtitle">探索一维相互作用费米子系统的非费米液体行为与量子临界现象</p>
        <div class="hero-meta">
          <div class="meta-item">
            <span class="meta-icon">📖</span>
            <span>阅读时间: 60分钟</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🎯</span>
            <span>难度: 高级</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🔬</span>
            <span>理论深度: 研究生级</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 理论概述 -->
    <section class="theory-overview">
      <div class="section-header">
        <h2>理论概述与历史背景</h2>
        <p>从费米液体理论的局限性到Luttinger液体的诞生</p>
      </div>
      
      <div class="overview-content">
        <div class="historical-timeline">
          <div class="timeline-item">
            <div class="timeline-year">1956</div>
            <div class="timeline-content">
              <h3>Luttinger模型</h3>
              <p>J.M. Luttinger提出精确可解的一维费米子模型，为理解一维系统奠定基础</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">1963</div>
            <div class="timeline-content">
              <h3>精确解</h3>
              <p>Mattis和Lieb给出Luttinger模型的精确解，揭示了一维系统的独特性质</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">1970s</div>
            <div class="timeline-content">
              <h3>玻色化技术</h3>
              <p>Coleman发展了玻色化方法，为处理一维费米子系统提供了强有力的工具</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-year">1981</div>
            <div class="timeline-content">
              <h3>Luttinger液体概念</h3>
              <p>Haldane正式提出"Luttinger液体"概念，建立了普适的理论框架</p>
            </div>
          </div>
        </div>

        <div class="key-insights">
          <h3>核心洞察</h3>
          <div class="insight-grid">
            <div class="insight-card">
              <div class="insight-icon">🚫</div>
              <h4>费米液体失效</h4>
              <p>一维系统中，费米液体理论的基本假设——准粒子概念——完全失效。系统表现出全新的量子液体相。</p>
            </div>
            <div class="insight-card">
              <div class="insight-icon">🔄</div>
              <h4>维度效应</h4>
              <p>维度的降低导致量子涨落的增强，使得相互作用效应被极大地放大，产生了质性的改变。</p>
            </div>
            <div class="insight-card">
              <div class="insight-icon">🎯</div>
              <h4>普适性</h4>
              <p>不同的微观模型在低能极限下都归结为相同的Luttinger液体理论，体现了普适性。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 核心概念深入解析 -->
    <section class="concept-deep-dive">
      <div class="section-header">
        <h2>核心概念深入解析</h2>
        <p>理解Luttinger液体的基本思想和物理图像</p>
      </div>
      
      <div class="concept-grid">
        <div class="concept-card highlight">
          <div class="card-header">
            <div class="card-icon">🚫</div>
            <h3>费米液体失效机制</h3>
          </div>
          <div class="concept-content">
            <div class="mechanism-explanation">
              <h4>准粒子寿命分析：</h4>
              <div class="equation-display">
                <p>τ⁻¹ ∝ (ε - ε_F)² → 0 当 ε → ε_F</p>
              </div>
              <p>在一维系统中，相位空间的限制导致准粒子寿命在费米面处发散，准粒子概念失去意义。</p>
            </div>
            
            <div class="phase-space-analysis">
              <h4>相位空间约束：</h4>
              <ul>
                <li><strong>三维：</strong> 散射相位空间 ∝ (ε - ε_F)²</li>
                <li><strong>二维：</strong> 散射相位空间 ∝ (ε - ε_F)</li>
                <li><strong>一维：</strong> 散射相位空间 = 常数</li>
              </ul>
              <p>一维系统中散射率不依赖于能量，导致准粒子概念的根本性失效。</p>
            </div>

            <div class="spectral-function">
              <h4>谱函数行为：</h4>
              <div class="equation-display">
                <p>A(k,ω) ∝ |ω - v(k-k_F)|^{α-1}</p>
              </div>
              <p>其中 α = (K + K⁻¹)/2 - 1，当K ≠ 1时，谱函数在费米面处不存在δ函数峰。</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="card-header">
            <div class="card-icon">⚡</div>
            <h3>电荷-自旋分离现象</h3>
          </div>
          <div class="concept-content">
            <div class="separation-mechanism">
              <h4>物理机制：</h4>
              <p>在一维系统中，电子的电荷和自旋自由度可以分离成独立的激发模式，这是高维系统中不存在的现象。</p>
            </div>

            <div class="velocity-difference">
              <h4>传播速度：</h4>
              <div class="equation-display">
                <p>v_c = v_F√(1 + U/(πv_F))</p>
                <p>v_s = v_F</p>
              </div>
              <p>电荷激发速度v_c和自旋激发速度v_s一般不相等，导致电荷-自旋分离。</p>
            </div>

            <div class="experimental-signature">
              <h4>实验特征：</h4>
              <ul>
                <li>ARPES测量中观测到两个分离的色散关系</li>
                <li>隧道谱中电荷和自旋激发的不同能标</li>
                <li>输运测量中的非费米液体行为</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="card-header">
            <div class="card-icon">🌊</div>
            <h3>玻色化理论详解</h3>
          </div>
          <div class="concept-content">
            <div class="bosonization-steps">
              <h4>玻色化步骤：</h4>
              <div class="step-by-step">
                <div class="step">
                  <span class="step-number">1</span>
                  <div class="step-content">
                    <h5>线性化近似</h5>
                    <div class="equation-display">
                      <p>ε(k) ≈ v_F(|k| - k_F)</p>
                    </div>
                  </div>
                </div>
                <div class="step">
                  <span class="step-number">2</span>
                  <div class="step-content">
                    <h5>手性分解</h5>
                    <div class="equation-display">
                      <p>ψ(x) = ψ_R(x)e^{ik_Fx} + ψ_L(x)e^{-ik_Fx}</p>
                    </div>
                  </div>
                </div>
                <div class="step">
                  <span class="step-number">3</span>
                  <div class="step-content">
                    <h5>密度算符</h5>
                    <div class="equation-display">
                      <p>ρ_R/L(x) = ψ†_R/L(x)ψ_R/L(x)</p>
                    </div>
                  </div>
                </div>
                <div class="step">
                  <span class="step-number">4</span>
                  <div class="step-content">
                    <h5>玻色场引入</h5>
                    <div class="equation-display">
                      <p>ρ_R/L(x) = ρ_0 + (1/√π)∂_x φ_R/L(x)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="field-relations">
              <h4>场关系：</h4>
              <div class="equation-display">
                <p>φ(x) = φ_R(x) + φ_L(x)</p>
                <p>θ(x) = φ_R(x) - φ_L(x)</p>
              </div>
              <p>其中φ是总密度场，θ是流场，满足正则对易关系：[θ(x), ∂_yφ(y)] = iπδ(x-y)</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="card-header">
            <div class="card-icon">📊</div>
            <h3>Luttinger参数深入分析</h3>
          </div>
          <div class="concept-content">
            <div class="parameter-derivation">
              <h4>参数推导：</h4>
              <div class="equation-display">
                <p>K = π√(ρ_0/m*v²)</p>
              </div>
              <p>其中ρ_0是基态密度，m*是有效质量，v是重整化速度。</p>
            </div>

            <div class="parameter-physics">
              <h4>物理意义：</h4>
              <div class="physics-grid">
                <div class="physics-item">
                  <h5>K &lt; 1 (排斥相互作用)</h5>
                  <ul>
                    <li>密度涨落被抑制</li>
                    <li>系统趋向于Wigner晶体</li>
                    <li>隧道电导被抑制</li>
                  </ul>
                </div>
                <div class="physics-item">
                  <h5>K = 1 (自由费米子)</h5>
                  <ul>
                    <li>无相互作用极限</li>
                    <li>费米液体行为恢复</li>
                    <li>标准的费米统计</li>
                  </ul>
                </div>
                <div class="physics-item">
                  <h5>K &gt; 1 (吸引相互作用)</h5>
                  <ul>
                    <li>密度涨落增强</li>
                    <li>超导不稳定性</li>
                    <li>隧道电导增强</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="renormalization">
              <h4>重整化群分析：</h4>
              <div class="equation-display">
                <p>dK/dl = -2K²g₄⊥</p>
                <p>dg₄⊥/dl = (2-K)g₄⊥</p>
              </div>
              <p>其中l是重整化群流参数，g₄⊥是反向散射耦合常数。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 数学框架详解 -->
    <section class="mathematical-framework">
      <div class="section-header">
        <h2>数学框架详解</h2>
        <p>从微观哈密顿量到有效场论的完整推导</p>
      </div>

      <div class="framework-content">
        <div class="hamiltonian-derivation">
          <h3>哈密顿量推导</h3>
          
          <div class="derivation-step">
            <h4>1. 微观哈密顿量</h4>
            <div class="equation-display">
              <p>H = -t∑ᵢ(c†ᵢcᵢ₊₁ + h.c.) + U∑ᵢnᵢ↑nᵢ↓ + V∑ᵢnᵢnᵢ₊₁</p>
            </div>
            <p>包含跳跃项、在位相互作用和最近邻相互作用。</p>
          </div>

          <div class="derivation-step">
            <h4>2. 连续化极限</h4>
            <div class="equation-display">
              <p>H = ∫dx ψ†(x)(-iv_F∂_x)ψ(x) + g₂ρ(x)² + g₄∥ρ_R(x)ρ_L(x)</p>
            </div>
            <p>其中g₂ = U + 2V，g₄∥ = U是前向和后向散射耦合常数。</p>
          </div>

          <div class="derivation-step">
            <h4>3. 玻色化表示</h4>
            <div class="equation-display">
              <p>H = (v/2π)∫dx[K(∂_xθ)² + K⁻¹(∂_xφ)²]</p>
            </div>
            <p>得到Luttinger液体的标准形式，其中：</p>
            <div class="equation-display">
              <p>v = v_F√((1 + g₂/πv_F)² - (g₄∥/πv_F)²)</p>
              <p>K = √((1 + g₂/πv_F - g₄∥/πv_F)/(1 + g₂/πv_F + g₄∥/πv_F))</p>
            </div>
          </div>
        </div>

        <div class="correlation-functions">
          <h3>关联函数计算</h3>
          
          <div class="correlation-derivation">
            <h4>单粒子格林函数</h4>
            <div class="equation-display">
              <p>G(x,t) = ⟨ψ(x,t)ψ†(0,0)⟩</p>
            </div>
            
            <div class="calculation-steps">
              <div class="calc-step">
                <h5>玻色化表示：</h5>
                <div class="equation-display">
                  <p>ψ(x) ∝ e^{i(φ(x)+θ(x))} + e^{i(φ(x)-θ(x))}</p>
                </div>
              </div>
              
              <div class="calc-step">
                <h5>关联函数计算：</h5>
                <div class="equation-display">
                  <p>⟨e^{iφ(x,t)}e^{-iφ(0,0)}⟩ = (x + ivt)^{-1/2K}</p>
                  <p>⟨e^{iθ(x,t)}e^{-iθ(0,0)}⟩ = (x + ivt)^{-K/2}</p>
                </div>
              </div>
              
              <div class="calc-step">
                <h5>最终结果：</h5>
                <div class="equation-display">
                  <p>G(x,t) ∝ (x + ivt)^{-(K+K⁻¹)/2}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="density-correlation">
            <h4>密度关联函数</h4>
            <div class="equation-display">
              <p>⟨ρ(x,t)ρ(0,0)⟩ = ⟨∂_xφ(x,t)∂_xφ(0,0)⟩/(π)²</p>
            </div>
            
            <div class="fourier-analysis">
              <h5>傅里叶分析：</h5>
              <div class="equation-display">
                <p>S(q,ω) = ∫dxdt e^{i(qx-ωt)}⟨ρ(x,t)ρ(0,0)⟩</p>
                <p>S(q,ω) = πKδ(ω - v|q|)</p>
              </div>
              <p>显示了线性色散关系和无能隙激发。</p>
            </div>
          </div>
        </div>

        <div class="response-functions">
          <h3>响应函数理论</h3>
          
          <div class="linear-response">
            <h4>线性响应理论</h4>
            <div class="equation-display">
              <p>χ(q,ω) = ∫₀^∞ dt e^{iωt}⟨[ρ(q,t), ρ(-q,0)]⟩</p>
            </div>
            
            <div class="susceptibility-result">
              <h5>密度响应函数：</h5>
              <div class="equation-display">
                <p>χ(q,ω) = Kq²/(ω² - v²q² + iδ)</p>
              </div>
              <p>展现了Luttinger液体的集体激发模式。</p>
            </div>
          </div>

          <div class="conductivity">
            <h4>电导率计算</h4>
            <div class="equation-display">
              <p>σ(ω) = (e²/ℏ) ∫₀^∞ dt e^{iωt}⟨[j(t), j(0)]⟩</p>
            </div>
            
            <div class="current-operator">
              <h5>电流算符：</h5>
              <div class="equation-display">
                <p>j(x) = ev∂_xθ(x)/π</p>
              </div>
            </div>
            
            <div class="conductivity-result">
              <h5>频率依赖：</h5>
              <div class="equation-display">
                <p>σ(ω) = (e²v/ℏ)δ(ω) + σ_reg(ω)</p>
              </div>
              <p>其中σ_reg(ω) ∝ ω^{2K-2}是正则部分。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 物理性质全面分析 -->
    <section class="physical-properties-comprehensive">
      <div class="section-header">
        <h2>物理性质全面分析</h2>
        <p>Luttinger液体的独特物理行为及其实验表现</p>
      </div>

      <div class="properties-detailed">
        <div class="property-section">
          <h3>🔬 谱学性质</h3>
          
          <div class="spectroscopy-content">
            <div class="arpes-analysis">
              <h4>角分辨光电子谱(ARPES)</h4>
              <div class="equation-display">
                <p>I(k,ω) ∝ A(k,ω)f(ω)</p>
              </div>
              <p>其中A(k,ω)是谱函数，f(ω)是费米分布函数。</p>
              
              <div class="arpes-features">
                <h5>关键特征：</h5>
                <ul>
                  <li><strong>幂律边缘：</strong> A(k,ω) ∝ |ω - v(k-k_F)|^{α-1}</li>
                  <li><strong>无准粒子峰：</strong> 费米面处无尖锐的δ函数峰</li>
                  <li><strong>线性色散：</strong> ω = v|k - k_F|</li>
                  <li><strong>强度抑制：</strong> 谱权重在费米面附近被抑制</li>
                </ul>
              </div>
            </div>

            <div class="tunneling-spectroscopy">
              <h4>隧道谱学</h4>
              <div class="equation-display">
                <p>dI/dV ∝ ρ(eV) ∝ |V|^{α}</p>
              </div>
              <p>其中α = (K + K⁻¹)/2 - 1是幂律指数。</p>
              
              <div class="tunneling-regimes">
                <h5>不同区间：</h5>
                <div class="regime-grid">
                  <div class="regime-item">
                    <h6>K &lt; 1</h6>
                    <p>α &gt; 0，隧道电导被抑制</p>
                  </div>
                  <div class="regime-item">
                    <h6>K = 1</h6>
                    <p>α = 0，常数态密度</p>
                  </div>
                  <div class="regime-item">
                    <h6>K &gt; 1</h6>
                    <p>α &lt; 0，隧道电导发散</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="property-section">
          <h3>⚡ 输运性质详解</h3>
          
          <div class="transport-detailed">
            <div class="dc-transport">
              <h4>直流输运</h4>
              
              <div class="conductance-analysis">
                <h5>电导分析：</h5>
                <div class="equation-display">
                  <p>G = G₀ = e²/h</p>
                </div>
                <p>理想一维系统的量子化电导，不依赖于系统长度。</p>
              </div>
              
              <div class="temperature-dependence">
                <h5>温度依赖：</h5>
                <div class="equation-display">
                  <p>G(T) = G₀[1 - (πT/Δ)^{2K}]</p>
                </div>
                <p>其中Δ是能隙或截止能标。</p>
              </div>
            </div>

            <div class="ac-transport">
              <h4>交流输运</h4>
              
              <div class="frequency-response">
                <h5>频率响应：</h5>
                <div class="equation-display">
                  <p>σ(ω) = σ₀δ(ω) + σ₁ω^{2K-2}</p>
                </div>
                <p>包含δ函数的Drude峰和幂律的正则部分。</p>
              </div>
              
              <div class="optical-conductivity">
                <h5>光学电导率：</h5>
                <ul>
                  <li><strong>K &lt; 1：</strong> σ(ω) ∝ ω^{2K-2}，低频抑制</li>
                  <li><strong>K = 1：</strong> σ(ω) = 常数，金属行为</li>
                  <li><strong>K &gt; 1：</strong> σ(ω) ∝ ω^{2K-2}，低频增强</li>
                </ul>
              </div>
            </div>

            <div class="thermal-transport">
              <h4>热输运</h4>
              
              <div class="thermal-conductivity">
                <h5>热导率：</h5>
                <div class="equation-display">
                  <p>κ = (π²k_B²T/3ℏ) × (K + K⁻¹)/2v</p>
                </div>
                <p>普适的Wiedemann-Franz定律的修正形式。</p>
              </div>
              
              <div class="thermopower">
                <h5>热电势：</h5>
                <div class="equation-display">
                  <p>S = -(π²k_B²T/3e) × d ln σ/dμ</p>
                </div>
                <p>与化学势的导数相关，反映了粒子-空穴不对称性。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="property-section">
          <h3>🌡️ 热力学性质</h3>
          
          <div class="thermodynamics-content">
            <div class="specific-heat">
              <h4>比热分析</h4>
              <div class="equation-display">
                <p>C = (π²k_B²T/3ℏv) × (K + K⁻¹)/2</p>
              </div>
              
              <div class="heat-capacity-features">
                <h5>特征：</h5>
                <ul>
                  <li><strong>线性温度依赖：</strong> C ∝ T</li>
                  <li><strong>普适系数：</strong> 依赖于Luttinger参数</li>
                  <li><strong>无指数激活：</strong> 无能隙激发</li>
                </ul>
              </div>
            </div>

            <div class="compressibility">
              <h4>压缩率</h4>
              <div class="equation-display">
                <p>κ = K/(πv) × ∂n/∂μ</p>
              </div>
              
              <div class="compressibility-physics">
                <h5>物理意义：</h5>
                <ul>
                  <li>反映系统对密度变化的响应</li>
                  <li>与相互作用强度直接相关</li>
                  <li>决定了密度涨落的强度</li>
                </ul>
              </div>
            </div>

            <div class="magnetic-susceptibility">
              <h4>磁化率</h4>
              <div class="equation-display">
                <p>χ_s = (μ_B²/2πv) × (1 + K_s⁻¹)/2</p>
              </div>
              
              <div class="magnetic-properties">
                <h5>磁性质：</h5>
                <ul>
                  <li><strong>Pauli磁化率：</strong> 温度无关</li>
                  <li><strong>自旋涨落：</strong> 由K_s参数控制</li>
                  <li><strong>磁有序趋势：</strong> K_s &lt; 1时增强</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验技术与观测 -->
    <section class="experimental-techniques">
      <div class="section-header">
        <h2>实验技术与观测</h2>
        <p>探测Luttinger液体行为的实验方法和观测结果</p>
      </div>

      <div class="experiment-comprehensive">
        <div class="technique-category">
          <h3>🔬 谱学技术</h3>
          
          <div class="spectroscopy-techniques">
            <div class="technique-card">
              <h4>角分辨光电子谱(ARPES)</h4>
              <div class="technique-details">
                <div class="principle">
                  <h5>原理：</h5>
                  <p>通过测量光电子的动能和角度分布，直接探测电子的能带结构和谱函数。</p>
                </div>
                <div class="luttinger-signatures">
                  <h5>Luttinger液体特征：</h5>
                  <ul>
                    <li>线性色散关系</li>
                    <li>幂律谱函数边缘</li>
                    <li>费米面处谱权重抑制</li>
                    <li>电荷-自旋分离的双峰结构</li>
                  </ul>
                </div>
                <div class="experimental-challenges">
                  <h5>实验挑战：</h5>
                  <ul>
                    <li>能量分辨率要求极高</li>
                    <li>表面效应的影响</li>
                    <li>温度涨落的抑制</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <h4>扫描隧道谱(STS)</h4>
              <div class="technique-details">
                <div class="principle">
                  <h5>原理：</h5>
                  <p>通过测量隧道电流随偏压的变化，探测局域态密度。</p>
                </div>
                <div class="luttinger-signatures">
                  <h5>Luttinger液体特征：</h5>
                  <ul>
                    <li>幂律的dI/dV谱</li>
                    <li>零偏压异常</li>
                    <li>温度依赖的幂律指数</li>
                  </ul>
                </div>
                <div class="data-analysis">
                  <h5>数据分析：</h5>
                  <div class="equation-display">
                    <p>dI/dV ∝ |V|^α，α = (K + K⁻¹)/2 - 1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="technique-category">
          <h3>⚡ 输运测量</h3>
          
          <div class="transport-techniques">
            <div class="technique-card">
              <h4>四端电阻测量</h4>
              <div class="technique-details">
                <div class="setup">
                  <h5>实验装置：</h5>
                  <p>使用四端配置消除接触电阻，精确测量样品本征电阻。</p>
                </div>
                <div class="temperature-dependence">
                  <h5>温度依赖测量：</h5>
                  <div class="equation-display">
                    <p>R(T) = R₀[1 + (T/T₀)^{2K}]</p>
                  </div>
                  <p>通过拟合确定Luttinger参数K。</p>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <h4>噪声测量</h4>
              <div class="technique-details">
                <div class="shot-noise">
                  <h5>散粒噪声：</h5>
                  <div class="equation-display">
                    <p>S_I = 2eI × F</p>
                  </div>
                  <p>其中F是Fano因子，反映了电荷传输的统计性质。</p>
                </div>
                <div class="thermal-noise">
                  <h5>热噪声：</h5>
                  <div class="equation-display">
                    <p>S_V = 4k_BT × Re[Z(ω)]</p>
                  </div>
                  <p>通过频率依赖的阻抗测量探测动态响应。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="technique-category">
          <h3>🌊 光学技术</h3>
          
          <div class="optical-techniques">
            <div class="technique-card">
              <h4>太赫兹光谱</h4>
              <div class="technique-details">
                <div class="frequency-range">
                  <h5>频率范围：</h5>
                  <p>0.1-10 THz，对应能量0.4-40 meV，适合探测低能激发。</p>
                </div>
                <div class="conductivity-measurement">
                  <h5>电导率测量：</h5>
                  <div class="equation-display">
                    <p>σ(ω) = σ₁(ω) + iσ₂(ω)</p>
                  </div>
                  <p>实部和虚部分别反映能量耗散和储存。</p>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <h4>拉曼散射</h4>
              <div class="technique-details">
                <div class="collective-modes">
                  <h5>集体激发模式：</h5>
                  <p>探测电荷密度波和自旋密度波激发。</p>
                </div>
                <div class="selection-rules">
                  <h5>选择定则：</h5>
                  <ul>
                    <li>A₁g模式：呼吸模振动</li>
                    <li>E₂g模式：剪切模振动</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 材料体系与实现 -->
    <section class="material-systems">
      <div class="section-header">
        <h2>材料体系与实现</h2>
        <p>实现Luttinger液体行为的具体材料体系</p>
      </div>

      <div class="materials-grid">
        <div class="material-category">
          <h3>🧪 碳纳米管</h3>
          
          <div class="material-details">
            <div class="structure-properties">
              <h4>结构特性</h4>
              <ul>
                <li><strong>直径：</strong> 0.4-2 nm</li>
                <li><strong>长度：</strong> 微米至毫米级</li>
                <li><strong>手性：</strong> (n,m)指数决定电子性质</li>
              </ul>
            </div>

            <div class="electronic-properties">
              <h4>电子性质</h4>
              <div class="equation-display">
                <p>K ≈ 0.2-0.3 (金属性纳米管)</p>
              </div>
              <p>强排斥相互作用导致K &lt;&lt; 1。</p>
            </div>

            <div class="experimental-observations">
              <h4>实验观测</h4>
              <ul>
                <li>隧道谱中的幂律行为</li>
                <li>电导的温度依赖</li>
                <li>Coulomb阻塞效应</li>
              </ul>
            </div>

            <div class="applications">
              <h4>应用前景</h4>
              <ul>
                <li>单电子晶体管</li>
                <li>量子点器件</li>
                <li>分子电子学</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="material-category">
          <h3>🔬 量子线</h3>
          
          <div class="material-details">
            <div class="fabrication">
              <h4>制备方法</h4>
              <ul>
                <li><strong>电子束刻蚀：</strong> 精确控制线宽</li>
                <li><strong>分子束外延：</strong> 原子级平整界面</li>
                <li><strong>劈裂门技术：</strong> 电场调控</li>
              </ul>
            </div>

            <div class="quantum-confinement">
              <h4>量子限域效应</h4>
              <div class="equation-display">
                <p>E_n = ℏ²π²n²/(2m*W²)</p>
              </div>
              <p>其中W是量子线宽度，n是子带指数。</p>
            </div>

            <div class="luttinger-parameters">
              <h4>Luttinger参数</h4>
              <div class="parameter-table">
                <div class="param-row">
                  <span class="param-name">GaAs量子线：</span>
                  <span class="param-value">K ≈ 0.7-0.9</span>
                </div>
                <div class="param-row">
                  <span class="param-name">InAs量子线：</span>
                  <span class="param-value">K ≈ 0.5-0.8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="material-category">
          <h3>❄️ 冷原子系统</h3>
          
          <div class="material-details">
            <div class="experimental-setup">
              <h4>实验装置</h4>
              <ul>
                <li><strong>光学晶格：</strong> 激光驻波形成周期势</li>
                <li><strong>磁阱：</strong> 径向限域</li>
                <li><strong>Feshbach共振：</strong> 相互作用调控</li>
              </ul>
            </div>

            <div class="advantages">
              <h4>优势</h4>
              <ul>
                <li>参数可调性强</li>
                <li>无杂质和缺陷</li>
                <li>直接观测关联函数</li>
                <li>量子模拟能力</li>
              </ul>
            </div>

            <div class="experimental-techniques">
              <h4>实验技术</h4>
              <ul>
                <li><strong>原位成像：</strong> 密度分布测量</li>
                <li><strong>干涉测量：</strong> 相干性探测</li>
                <li><strong>布拉格谱学：</strong> 激发谱测量</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="material-category">
          <h3>🧲 磁性链</h3>
          
          <div class="material-details">
            <div class="spin-chains">
              <h4>自旋链系统</h4>
              <ul>
                <li><strong>CuGeO₃：</strong> 自旋-Peierls链</li>
                <li><strong>Sr₂CuO₃：</strong> 反铁磁海森堡链</li>
                <li><strong>KCuF₃：</strong> 准一维反铁磁体</li>
              </ul>
            </div>

            <div class="spinon-physics">
              <h4>自旋子物理</h4>
              <div class="equation-display">
                <p>S = 1/2 反铁磁链 → 自旋液体基态</p>
              </div>
              <p>自旋激发分解为无能隙的自旋子。</p>
            </div>

            <div class="experimental-probes">
              <h4>实验探针</h4>
              <ul>
                <li><strong>中子散射：</strong> 自旋动力学</li>
                <li><strong>ESR：</strong> 磁共振</li>
                <li><strong>NMR：</strong> 局域磁场</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论扩展与前沿 -->
    <section class="theoretical-extensions">
      <div class="section-header">
        <h2>理论扩展与前沿</h2>
        <p>Luttinger液体理论的发展方向和前沿问题</p>
      </div>

      <div class="extensions-content">
        <div class="extension-category">
          <h3>🔄 非平衡Luttinger液体</h3>
          
          <div class="nonequilibrium-theory">
            <h4>理论框架</h4>
            <div class="keldysh-formalism">
              <h5>Keldysh形式主义：</h5>
              <div class="equation-display">
                <p>G^R/A(ω) = [ω - H ± iΓ]⁻¹</p>
              </div>
              <p>其中Γ描述耗散和退相干效应。</p>
            </div>

            <div class="driven-systems">
              <h5>驱动系统：</h5>
              <ul>
                <li>周期驱动的Floquet工程</li>
                <li>量子淬火动力学</li>
                <li>开放系统的主方程方法</li>
              </ul>
            </div>
          </div>

          <div class="transport-phenomena">
            <h4>输运现象</h4>
            <ul>
              <li><strong>非线性输运：</strong> 高偏压下的I-V特性</li>
              <li><strong>热输运：</strong> 温度梯度驱动的热流</li>
              <li><strong>自旋输运：</strong> 自旋流和自旋积累</li>
            </ul>
          </div>
        </div>

        <div class="extension-category">
          <h3>🌐 多体局域化</h3>
          
          <div class="mbl-theory">
            <h4>理论基础</h4>
            <div class="localization-criterion">
              <h5>局域化判据：</h5>
              <div class="equation-display">
                <p>W/J &gt; W_c → 多体局域化相</p>
              </div>
              <p>其中W是无序强度，J是跳跃积分。</p>
            </div>

            <div class="entanglement-entropy">
              <h5>纠缠熵：</h5>
              <div class="equation-display">
                <p>S_A = c/3 ln L + const (热化相)</p>
                <p>S_A = const (MBL相)</p>
              </div>
            </div>
          </div>

          <div class="experimental-signatures">
            <h4>实验特征</h4>
            <ul>
              <li>对数慢弛豫</li>
              <li>局域积分运动常数</li>
              <li>零温相变</li>
            </ul>
          </div>
        </div>

        <div class="extension-category">
          <h3>🎯 拓扑Luttinger液体</h3>
          
          <div class="topological-aspects">
            <h4>拓扑性质</h4>
            <div class="edge-states">
              <h5>边缘态：</h5>
              <p>拓扑绝缘体边缘的螺旋Luttinger液体。</p>
            </div>

            <div class="fractional-charges">
              <h5>分数电荷：</h5>
              <div class="equation-display">
                <p>Q = e/m (m为奇数)</p>
              </div>
              <p>分数量子霍尔效应中的边缘激发。</p>
            </div>
          </div>

          <div class="applications">
            <h4>应用前景</h4>
            <ul>
              <li>拓扑量子计算</li>
              <li>Majorana费米子</li>
              <li>非阿贝尔统计</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 计算方法与数值技术 -->
    <section class="computational-methods">
      <div class="section-header">
        <h2>计算方法与数值技术</h2>
        <p>研究Luttinger液体的理论计算和数值模拟方法</p>
      </div>

      <div class="methods-content">
        <div class="method-category">
          <h3>🔢 解析方法</h3>
          
          <div class="analytical-techniques">
            <div class="method-card">
              <h4>重整化群方法</h4>
              <div class="rg-equations">
                <h5>RG方程：</h5>
                <div class="equation-display">
                  <p>dg/dl = β(g)</p>
                  <p>dK/dl = γ(g,K)</p>
                </div>
                <p>其中l是能量标度参数。</p>
              </div>
              
              <div class="fixed-points">
                <h5>不动点分析：</h5>
                <ul>
                  <li><strong>稳定不动点：</strong> Luttinger液体相</li>
                  <li><strong>不稳定不动点：</strong> 相变点</li>
                  <li><strong>鞍点：</strong> 临界行为</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>共形场论</h4>
              <div class="cft-approach">
                <h5>中心荷：</h5>
                <div class="equation-display">
                  <p>c = 1 (自由玻色子)</p>
                </div>
                <p>Luttinger液体对应c=1的共形场论。</p>
              </div>
              
              <div class="scaling-dimensions">
                <h5>标度维度：</h5>
                <div class="equation-display">
                  <p>Δ_ψ = (K + K⁻¹)/4</p>
                </div>
                <p>费米子算符的标度维度。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>💻 数值方法</h3>
          
          <div class="numerical-techniques">
            <div class="method-card">
              <h4>密度矩阵重整化群(DMRG)</h4>
              <div class="dmrg-algorithm">
                <h5>算法原理：</h5>
                <p>通过截断希尔伯特空间，保留最重要的量子态，实现大系统的精确对角化。</p>
              </div>
              
              <div class="dmrg-advantages">
                <h5>优势：</h5>
                <ul>
                  <li>一维系统的精确解</li>
                  <li>基态和低激发态</li>
                  <li>关联函数计算</li>
                  <li>有限温度扩展(finite-T DMRG)</li>
                </ul>
              </div>
              
              <div class="dmrg-applications">
                <h5>应用：</h5>
                <ul>
                  <li>Hubbard模型</li>
                  <li>t-J模型</li>
                  <li>自旋链系统</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>量子蒙特卡罗(QMC)</h4>
              <div class="qmc-methods">
                <h5>方法类型：</h5>
                <ul>
                  <li><strong>路径积分QMC：</strong> 有限温度性质</li>
                  <li><strong>辅助场QMC：</strong> 相互作用系统</li>
                  <li><strong>连续时间QMC：</strong> 杂质问题</li>
                </ul>
              </div>
              
              <div class="sign-problem">
                <h5>符号问题：</h5>
                <p>费米子系统中的负权重问题，限制了方法的适用性。</p>
              </div>
            </div>

            <div class="method-card">
              <h4>张量网络方法</h4>
              <div class="tensor-networks">
                <h5>网络类型：</h5>
                <ul>
                  <li><strong>MPS：</strong> 矩阵乘积态</li>
                  <li><strong>PEPS：</strong> 投影纠缠对态</li>
                  <li><strong>MERA：</strong> 多尺度纠缠重整化</li>
                </ul>
              </div>
              
              <div class="entanglement-scaling">
                <h5>纠缠标度：</h5>
                <div class="equation-display">
                  <p>S_A = (c/3) ln L + const</p>
                </div>
                <p>面积定律的违反反映了临界性质。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>🧮 机器学习方法</h3>
          
          <div class="ml-techniques">
            <div class="method-card">
              <h4>神经网络量子态</h4>
              <div class="nqs-approach">
                <h5>变分原理：</h5>
                <div class="equation-display">
                  <p>|ψ⟩ = ∑_σ ψ_θ(σ)|σ⟩</p>
                </div>
                <p>其中ψ_θ(σ)是神经网络输出。</p>
              </div>
              
              <div class="optimization">
                <h5>优化算法：</h5>
                <ul>
                  <li>随机梯度下降</li>
                  <li>自然梯度方法</li>
                  <li>Adam优化器</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>机器学习相变识别</h4>
              <div class="phase-classification">
                <h5>分类方法：</h5>
                <ul>
                  <li><strong>监督学习：</strong> 已知相图的训练</li>
                  <li><strong>无监督学习：</strong> 自动相识别</li>
                  <li><strong>强化学习：</strong> 策略优化</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 应用前景与未来发展 -->
    <section class="applications-future">
      <div class="section-header">
        <h2>应用前景与未来发展</h2>
        <p>Luttinger液体理论的实际应用和发展方向</p>
      </div>

      <div class="applications-comprehensive">
        <div class="application-category">
          <h3>💻 量子器件应用</h3>
          
          <div class="quantum-devices">
            <div class="device-card">
              <h4>量子线晶体管</h4>
              <div class="device-principle">
                <h5>工作原理：</h5>
                <p>利用Luttinger液体的非线性输运特性，实现电流的门电压调控。</p>
              </div>
              
              <div class="performance-metrics">
                <h5>性能指标：</h5>
                <ul>
                  <li><strong>开关比：</strong> 10⁶-10⁸</li>
                  <li><strong>亚阈值摆幅：</strong> &lt;60 mV/decade</li>
                  <li><strong>工作温度：</strong> 4.2-77 K</li>
                </ul>
              </div>
            </div>

            <div class="device-card">
              <h4>自旋电子学器件</h4>
              <div class="spintronic-applications">
                <h5>应用方向：</h5>
                <ul>
                  <li>自旋过滤器</li>
                  <li>自旋阀</li>
                  <li>磁阻传感器</li>
                </ul>
              </div>
              
              <div class="spin-transport">
                <h5>自旋输运：</h5>
                <div class="equation-display">
                  <p>j_s = σ_s ∇μ_s</p>
                </div>
                <p>其中σ_s是自旋电导率，μ_s是自旋化学势。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="application-category">
          <h3>🔋 能源材料</h3>
          
          <div class="energy-applications">
            <div class="energy-card">
              <h4>热电材料</h4>
              <div class="thermoelectric-properties">
                <h5>热电优值：</h5>
                <div class="equation-display">
                  <p>ZT = S²σT/κ</p>
                </div>
                <p>其中S是Seebeck系数，σ是电导率，κ是热导率。</p>
              </div>
              
              <div class="luttinger-advantages">
                <h5>Luttinger液体优势：</h5>
                <ul>
                  <li>增强的热电势</li>
                  <li>抑制的晶格热导</li>
                  <li>可调的电子性质</li>
                </ul>
              </div>
            </div>

            <div class="energy-card">
              <h4>超级电容器</h4>
              <div class="capacitor-mechanism">
                <h5>储能机制：</h5>
                <p>利用一维材料的高比表面积和快速离子传输。</p>
              </div>
              
              <div class="performance-enhancement">
                <h5>性能提升：</h5>
                <ul>
                  <li>高能量密度</li>
                  <li>快速充放电</li>
                  <li>长循环寿命</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="application-category">
          <h3>🧬 生物物理应用</h3>
          
          <div class="biophysics-applications">
            <div class="bio-card">
               <h4>DNA电子学</h4>
               <div class="dna-transport">
                 <h5>电荷传输：</h5>
                 <p>DNA双螺旋结构中的π-π堆积提供了一维电荷传输通道。</p>
               </div>
               
               <div class="biological-relevance">
                 <h5>生物学意义：</h5>
                 <ul>
                   <li>DNA损伤修复机制</li>
                   <li>基因表达调控</li>
                   <li>生物传感器设计</li>
                 </ul>
               </div>
             </div>

             <div class="bio-card">
               <h4>蛋白质导电</h4>
               <div class="protein-conduction">
                 <h5>导电机制：</h5>
                 <p>蛋白质中的芳香族氨基酸残基形成导电路径。</p>
               </div>
               
               <div class="applications">
                 <h5>应用：</h5>
                 <ul>
                   <li>生物电子器件</li>
                   <li>酶燃料电池</li>
                   <li>生物计算</li>
                 </ul>
               </div>
             </div>
           </div>
         </div>
       </div>
     </section>

     <!-- 总结与展望 -->
     <section class="chapter-summary">
       <div class="section-header">
         <h2>总结与展望</h2>
         <p>Luttinger液体理论的重要意义和未来发展方向</p>
       </div>

       <div class="summary-content">
         <div class="key-achievements">
           <h3>重要成就</h3>
           <div class="achievement-grid">
             <div class="achievement-item">
               <div class="achievement-icon">🏆</div>
               <h4>理论突破</h4>
               <p>建立了一维强关联电子系统的完整理论框架，揭示了非费米液体的本质。</p>
             </div>
             <div class="achievement-item">
               <div class="achievement-icon">🔬</div>
               <h4>实验验证</h4>
               <p>在多种材料体系中观测到Luttinger液体行为，证实了理论预言。</p>
             </div>
             <div class="achievement-item">
               <div class="achievement-icon">🚀</div>
               <h4>技术应用</h4>
               <p>为量子器件、能源材料等领域提供了新的设计思路和理论指导。</p>
             </div>
           </div>
         </div>

         <div class="future-directions">
           <h3>未来方向</h3>
           <div class="direction-list">
             <div class="direction-item">
               <h4>🌐 多维扩展</h4>
               <p>探索准一维和二维系统中的Luttinger液体行为，研究维度交叉效应。</p>
             </div>
             <div class="direction-item">
               <h4>🔄 非平衡态</h4>
               <p>发展非平衡Luttinger液体理论，研究驱动和耗散对系统性质的影响。</p>
             </div>
             <div class="direction-item">
               <h4>🧮 量子计算</h4>
               <p>利用Luttinger液体的量子相干性质，开发新型量子计算和量子信息处理方案。</p>
             </div>
             <div class="direction-item">
               <h4>🔬 新材料</h4>
               <p>设计和合成具有理想Luttinger液体性质的新材料，实现更好的器件性能。</p>
             </div>
           </div>
         </div>

         <div class="final-thoughts">
           <div class="thought-box">
             <h3>深入思考</h3>
             <p>Luttinger液体理论不仅是凝聚态物理学的重要组成部分，更是理解量子多体系统的关键工具。它揭示了维度对物理性质的深刻影响，展现了量子力学在宏观尺度上的奇妙表现。随着实验技术的不断进步和理论方法的持续发展，我们有理由相信，Luttinger液体理论将在未来的科学研究和技术应用中发挥更加重要的作用。</p>
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
   padding: 0 20px;
   font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
   line-height: 1.6;
   color: #2c3e50;
 }

 /* 英雄区域 */
 .chapter-hero {
   position: relative;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   border-radius: 20px;
   margin: 20px 0 40px 0;
   overflow: hidden;
   color: white;
 }

 .hero-background {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   opacity: 0.1;
 }

 .wave-pattern {
   width: 100%;
   height: 100%;
   background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
 }

 .quantum-particles {
   position: absolute;
   width: 100%;
   height: 100%;
   background: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 2px, transparent 2px),
               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 1px, transparent 1px),
               radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 1px, transparent 1px);
   background-size: 50px 50px, 30px 30px, 70px 70px;
   animation: float 20s infinite linear;
 }

 @keyframes float {
   0% { transform: translateX(0px) translateY(0px); }
   33% { transform: translateX(30px) translateY(-30px); }
   66% { transform: translateX(-20px) translateY(20px); }
   100% { transform: translateX(0px) translateY(0px); }
 }

 .hero-content {
   position: relative;
   padding: 60px 40px;
   text-align: center;
 }
 
 .chapter-badge {
   display: inline-flex;
   align-items: center;
   gap: 8px;
   background: rgba(255, 255, 255, 0.2);
   padding: 8px 16px;
   border-radius: 20px;
   font-size: 14px;
   margin-bottom: 20px;
   backdrop-filter: blur(10px);
 }
 
 .hero-title {
   font-size: 3.5rem;
   font-weight: 700;
   margin: 20px 0;
   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
 }
 
 .hero-subtitle {
   font-size: 1.3rem;
   opacity: 0.9;
   margin-bottom: 30px;
   max-width: 700px;
   margin-left: auto;
   margin-right: auto;
 }
 
 .hero-meta {
   display: flex;
   justify-content: center;
   gap: 30px;
   flex-wrap: wrap;
 }
 
 .meta-item {
   display: flex;
   align-items: center;
   gap: 8px;
   font-size: 16px;
 }

 /* 通用样式 */
 .section-header {
   text-align: center;
   margin-bottom: 40px;
 }
 
 .section-header h2 {
   font-size: 2.5rem;
   font-weight: 600;
   color: #2c3e50;
   margin-bottom: 10px;
 }
 
 .section-header p {
   font-size: 1.1rem;
   color: #7f8c8d;
   max-width: 600px;
   margin: 0 auto;
 }

 .equation-display {
   background: #2c3e50;
   color: white;
   padding: 15px;
   border-radius: 8px;
   font-family: 'Fira Code', monospace;
   font-size: 1.1rem;
   margin: 10px 0;
   text-align: center;
 }

 /* 理论概述 */
 .theory-overview {
   margin: 60px 0;
   background: #f8f9fa;
   padding: 60px 40px;
   border-radius: 20px;
 }

 .overview-content {
   max-width: 1000px;
   margin: 0 auto;
 }

 .historical-timeline {
   position: relative;
   margin-bottom: 50px;
 }

 .historical-timeline::before {
   content: '';
   position: absolute;
   left: 30px;
   top: 0;
   bottom: 0;
   width: 3px;
   background: linear-gradient(to bottom, #3498db, #9b59b6);
   border-radius: 2px;
 }

 .timeline-item {
   display: flex;
   margin-bottom: 40px;
   position: relative;
 }

 .timeline-year {
   width: 60px;
   height: 60px;
   background: linear-gradient(135deg, #3498db, #9b59b6);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   color: white;
   font-weight: bold;
   font-size: 0.9rem;
   margin-right: 30px;
   flex-shrink: 0;
   box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
 }

 .timeline-content {
   flex: 1;
   background: white;
   padding: 25px;
   border-radius: 12px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
 }

 .timeline-content h3 {
   color: #2c3e50;
   margin-bottom: 10px;
   font-size: 1.3rem;
 }

 .key-insights {
   margin-top: 40px;
 }

 .key-insights h3 {
   font-size: 1.8rem;
   color: #2c3e50;
   margin-bottom: 25px;
   text-align: center;
 }

 .insight-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 25px;
 }

 .insight-card {
   background: white;
   border-radius: 16px;
   padding: 25px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
   border: 1px solid #f1f3f4;
   text-align: center;
 }

 .insight-icon {
   font-size: 2.5rem;
   margin-bottom: 15px;
 }

 .insight-card h4 {
   font-size: 1.3rem;
   color: #2c3e50;
   margin-bottom: 10px;
 }

 /* 核心概念深入解析 */
 .concept-deep-dive {
   margin: 80px 0;
 }

 .concept-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
   gap: 30px;
   margin-top: 40px;
 }

 .concept-card {
   background: white;
   border-radius: 16px;
   overflow: hidden;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
   border: 1px solid #f1f3f4;
   transition: all 0.3s ease;
 }

 .concept-card:hover {
   transform: translateY(-5px);
   box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
 }

 .concept-card.highlight {
   background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
   color: white;
 }

 .card-header {
   padding: 25px 25px 0 25px;
   display: flex;
   align-items: center;
   gap: 15px;
 }

 .card-icon {
   font-size: 2rem;
 }

 .card-header h3 {
   font-size: 1.4rem;
   font-weight: 600;
   margin: 0;
 }

 .concept-content {
   padding: 0 25px 25px 25px;
 }

 .concept-content h4 {
   font-size: 1.2rem;
   margin: 20px 0 10px 0;
   color: #2c3e50;
 }

 .concept-card.highlight .concept-content h4 {
   color: white;
 }

 .step-by-step {
   display: flex;
   flex-direction: column;
   gap: 15px;
 }

 .step {
   display: flex;
   align-items: flex-start;
   gap: 15px;
 }

 .step-number {
   width: 30px;
   height: 30px;
   background: #3498db;
   color: white;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   font-weight: bold;
   flex-shrink: 0;
 }

 .step-content {
   flex: 1;
 }

 .step-content h5 {
   margin: 0 0 5px 0;
   font-size: 1rem;
   color: #2c3e50;
 }

 .physics-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
   gap: 20px;
   margin-top: 15px;
 }

 .physics-item {
   background: rgba(255, 255, 255, 0.1);
   padding: 15px;
   border-radius: 8px;
 }

 .physics-item h5 {
   margin: 0 0 10px 0;
   font-size: 1rem;
 }

 .physics-item ul {
   margin: 0;
   padding-left: 20px;
 }

 /* 数学框架 */
 .mathematical-framework {
   margin: 80px 0;
   background: #f8f9fa;
   padding: 60px 40px;
   border-radius: 20px;
 }

 .framework-content {
   max-width: 1000px;
   margin: 0 auto;
 }

 .framework-content h3 {
   font-size: 1.8rem;
   color: #2c3e50;
   margin: 40px 0 25px 0;
   border-bottom: 2px solid #3498db;
   padding-bottom: 10px;
 }

 .derivation-step {
   background: white;
   padding: 25px;
   border-radius: 12px;
   margin-bottom: 20px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
 }

 .derivation-step h4 {
   color: #2c3e50;
   margin-bottom: 15px;
   font-size: 1.3rem;
 }

 .calculation-steps {
   display: flex;
   flex-direction: column;
   gap: 15px;
 }

 .calc-step {
   background: #f8f9fa;
   padding: 15px;
   border-radius: 8px;
   border-left: 4px solid #3498db;
 }

 .calc-step h5 {
   margin: 0 0 10px 0;
   color: #2c3e50;
 }

 /* 物理性质全面分析 */
 .physical-properties-comprehensive {
   margin: 80px 0;
 }

 .properties-detailed {
   margin-top: 40px;
 }

 .property-section {
   margin-bottom: 60px;
   background: white;
   border-radius: 16px;
   padding: 40px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
   border: 1px solid #f1f3f4;
 }

 .property-section h3 {
   font-size: 1.8rem;
   color: #2c3e50;
   margin-bottom: 30px;
   display: flex;
   align-items: center;
   gap: 10px;
 }

 .property-section h4 {
   font-size: 1.4rem;
   color: #2c3e50;
   margin: 25px 0 15px 0;
   border-bottom: 1px solid #e9ecef;
   padding-bottom: 8px;
 }

 .property-section h5 {
   font-size: 1.2rem;
   color: #495057;
   margin: 20px 0 10px 0;
 }

 .regime-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   gap: 15px;
   margin-top: 15px;
 }

 .regime-item {
   background: #f8f9fa;
   padding: 15px;
   border-radius: 8px;
   text-align: center;
 }

 .regime-item h6 {
   margin: 0 0 8px 0;
   font-size: 1rem;
   color: #2c3e50;
 }

 .regime-item p {
   margin: 0;
   font-size: 0.9rem;
   color: #6c757d;
 }

 /* 实验技术 */
 .experimental-techniques {
   margin: 80px 0;
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   padding: 60px 40px;
   border-radius: 20px;
   color: white;
 }

 .experimental-techniques .section-header h2,
 .experimental-techniques .section-header p {
   color: white;
 }

 .experiment-comprehensive {
   margin-top: 40px;
 }

 .technique-category {
   margin-bottom: 50px;
 }

 .technique-category h3 {
   font-size: 1.8rem;
   margin-bottom: 25px;
   display: flex;
   align-items: center;
   gap: 10px;
 }

 .spectroscopy-techniques,
 .transport-techniques,
 .optical-techniques {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 25px;
 }

 .technique-card {
   background: rgba(255, 255, 255, 0.1);
   border-radius: 16px;
   padding: 25px;
   backdrop-filter: blur(10px);
 }

 .technique-card h4 {
   font-size: 1.4rem;
   margin-bottom: 20px;
   color: white;
 }

 .technique-card h5 {
   font-size: 1.1rem;
   margin: 15px 0 8px 0;
   color: rgba(255, 255, 255, 0.9);
 }

 .technique-card ul {
   margin: 10px 0;
   padding-left: 20px;
 }

 .technique-card li {
   margin: 5px 0;
   color: rgba(255, 255, 255, 0.8);
 }

 /* 材料体系 */
 .material-systems {
   margin: 80px 0;
 }

 .materials-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
   gap: 30px;
   margin-top: 40px;
 }

 .material-category {
   background: white;
   border-radius: 16px;
   padding: 30px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
   border: 1px solid #f1f3f4;
 }

 .material-category h3 {
   font-size: 1.6rem;
   color: #2c3e50;
   margin-bottom: 25px;
   display: flex;
   align-items: center;
   gap: 10px;
 }

 .material-category h4 {
   font-size: 1.3rem;
   color: #495057;
   margin: 20px 0 10px 0;
 }

 .parameter-table {
   background: #f8f9fa;
   padding: 15px;
   border-radius: 8px;
   margin-top: 10px;
 }

 .param-row {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 8px 0;
   border-bottom: 1px solid #e9ecef;
 }

 .param-row:last-child {
   border-bottom: none;
 }

 .param-name {
   font-weight: 500;
   color: #495057;
 }

 .param-value {
   font-family: 'Fira Code', monospace;
   color: #2c3e50;
   font-weight: bold;
 }

 /* 理论扩展 */
 .theoretical-extensions {
   margin: 80px 0;
   background: #f8f9fa;
   padding: 60px 40px;
   border-radius: 20px;
 }

 .extensions-content {
   max-width: 1000px;
   margin: 0 auto;
 }

 .extension-category {
   background: white;
   border-radius: 16px;
   padding: 30px;
   margin-bottom: 30px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
   border: 1px solid #f1f3f4;
 }

 .extension-category h3 {
   font-size: 1.6rem;
   color: #2c3e50;
   margin-bottom: 20px;
   display: flex;
   align-items: center;
   gap: 10px;
 }

 .extension-category h4 {
   font-size: 1.3rem;
   color: #495057;
   margin: 20px 0 10px 0;
 }

 .extension-category h5 {
   font-size: 1.1rem;
   color: #6c757d;
   margin: 15px 0 8px 0;
 }

 /* 计算方法 */
 .computational-methods {
   margin: 80px 0;
 }

 .methods-content {
   margin-top: 40px;
 }

 .method-category {
   margin-bottom: 50px;
 }

 .method-category h3 {
   font-size: 1.8rem;
   color: #2c3e50;
   margin-bottom: 25px;
   display: flex;
   align-items: center;
   gap: 10px;
 }

 .analytical-techniques,
 .numerical-techniques,
 .ml-techniques {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 25px;
 }

 .method-card {
   background: white;
   border-radius: 16px;
   padding: 25px;
   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
   border: 1px solid #f1f3f4;
 }

 .method-card h4 {
   font-size: 1.4rem;
   color: #2c3e50;
   margin-bottom: 15px;
 }

 .method-card h5 {
   font-size: 1.1rem;
   color: #495057;
   margin: 15px 0 8px 0;
 }

 /* 应用前景 */
 .applications-future {
   margin: 80px 0;
   background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
   padding: 60px 40px;
   border-radius: 20px;
   color: white;
 }

 .applications-future .section-header h2,
 .applications-future .section-header p {
   color: white;
 }

 .applications-comprehensive {
   margin-top: 40px;
 }

 .application-category {
   margin-bottom: 40px;
 }

 .application-category h3 {
   font-size: 1.8rem;
   margin-bottom: 25px;
   display: flex;
   align-items: center;
   gap: 10px;
 }

 .quantum-devices,
 .energy-applications,
 .biophysics-applications {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 25px;
 }

 .device-card,
 .energy-card,
 .bio-card {
   background: rgba(255, 255, 255, 0.1);
   border-radius: 16px;
   padding: 25px;
   backdrop-filter: blur(10px);
 }

 .device-card h4,
 .energy-card h4,
 .bio-card h4 {
   font-size: 1.4rem;
   margin-bottom: 15px;
   color: white;
 }

 .device-card h5,
 .energy-card h5,
 .bio-card h5 {
   font-size: 1.1rem;
   margin: 15px 0 8px 0;
   color: rgba(255, 255, 255, 0.9);
 }

 .device-card ul,
 .energy-card ul,
 .bio-card ul {
   margin: 10px 0;
   padding-left: 20px;
 }

 .device-card li,
 .energy-card li,
 .bio-card li {
   margin: 5px 0;
   color: rgba(255, 255, 255, 0.8);
 }

 /* 总结与展望 */
 .chapter-summary {
   margin: 80px 0 40px 0;
   background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
   color: white;
   padding: 60px 40px;
   border-radius: 20px;
 }

 .chapter-summary .section-header h2,
 .chapter-summary .section-header p {
   color: white;
 }

 .summary-content {
   max-width: 1000px;
   margin: 0 auto;
 }

 .key-achievements {
   margin-bottom: 50px;
 }

 .key-achievements h3 {
   font-size: 1.8rem;
   margin-bottom: 25px;
   text-align: center;
 }

 .achievement-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 25px;
 }

 .achievement-item {
   background: rgba(255, 255, 255, 0.1);
   border-radius: 16px;
   padding: 25px;
   text-align: center;
   backdrop-filter: blur(10px);
 }

 .achievement-icon {
   font-size: 2.5rem;
   margin-bottom: 15px;
 }

 .achievement-item h4 {
   font-size: 1.3rem;
   margin-bottom: 10px;
 }

 .future-directions h3 {
   font-size: 1.8rem;
   margin-bottom: 25px;
   text-align: center;
 }

 .direction-list {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
   gap: 20px;
 }

 .direction-item {
   background: rgba(255, 255, 255, 0.1);
   border-radius: 12px;
   padding: 20px;
   backdrop-filter: blur(10px);
 }

 .direction-item h4 {
   font-size: 1.2rem;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   gap: 8px;
 }

 .final-thoughts {
   margin-top: 40px;
 }

 .thought-box {
   background: rgba(255, 255, 255, 0.1);
   border-radius: 16px;
   padding: 30px;
   backdrop-filter: blur(10px);
 }

 .thought-box h3 {
   font-size: 1.5rem;
   margin-bottom: 15px;
   text-align: center;
 }

 .thought-box p {
   font-size: 1.1rem;
   line-height: 1.8;
   text-align: justify;
 }

 /* 响应式设计 */
 @media (max-width: 768px) {
   .chapter-content {
     padding: 0 15px;
   }
   
   .hero-title {
     font-size: 2.5rem;
   }
   
   .hero-subtitle {
     font-size: 1.1rem;
   }
   
   .hero-meta {
     flex-direction: column;
     gap: 15px;
   }
   
   .concept-grid {
     grid-template-columns: 1fr;
   }
   
   .materials-grid {
     grid-template-columns: 1fr;
   }
   
   .achievement-grid {
     grid-template-columns: 1fr;
   }
   
   .direction-list {
     grid-template-columns: 1fr;
   }
   
   .timeline-item {
     flex-direction: column;
     align-items: flex-start;
   }
   
   .timeline-year {
     margin-bottom: 15px;
     margin-right: 0;
   }
   
   .historical-timeline::before {
     display: none;
   }

   .spectroscopy-techniques,
   .transport-techniques,
   .optical-techniques,
   .analytical-techniques,
   .numerical-techniques,
   .ml-techniques,
   .quantum-devices,
   .energy-applications,
   .biophysics-applications {
     grid-template-columns: 1fr;
   }
 }

 @media (max-width: 480px) {
   .hero-content {
     padding: 40px 20px;
   }
   
   .hero-title {
     font-size: 2rem;
   }
   
   .section-header h2 {
     font-size: 2rem;
   }
   
   .theory-overview,
   .mathematical-framework,
   .experimental-techniques,
   .theoretical-extensions,
   .applications-future,
   .chapter-summary {
     padding: 40px 20px;
   }
 }
 </style>