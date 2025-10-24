<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.3.3 无自旋费米子的Tomonaga模型</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">一维量子系统</span>
        <span class="reading-time">阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Tomonaga模型是研究一维相互作用费米子系统的经典模型，特别是在处理无自旋费米子时展现出其独特的优势。
        该模型由朝永振一郎于1950年提出，是第一个被精确求解的一维相互作用费米子模型。
        通过线性化色散关系和玻色化技术，Tomonaga模型为理解一维强关联系统奠定了理论基础，
        并为后来的Luttinger液体理论提供了重要的物理洞察。
      </p>
    </div>

    <section class="content-section">
      <h2>Tomonaga模型的基本构造</h2>
      <div class="model-construction">
        <div class="linearization">
          <h3>🎯 色散关系的线性化</h3>
          <div class="linearization-content">
            <div class="dispersion-analysis">
              <h4>从抛物线到线性色散：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>自由费米子色散：ε(k) = k²/(2m) - μ</p>
                  <p>费米点附近展开：ε(k) ≈ v_F(|k| - k_F)</p>
                  <p>v_F = k_F/m: 费米速度</p>
                  <p>k_F: 费米动量</p>
                </div>
              </div>
            </div>

            <div class="chiral-decomposition">
              <h4>手性分解：</h4>
              <div class="chiral-content">
                <div class="right-movers">
                  <h5>右手费米子 (k > 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ψ_R(x) = ∑_{k>0} c_k e^{ikx}</p>
                      <p>ε_R(k) = v_F(k - k_F)</p>
                      <p>向右传播</p>
                    </div>
                  </div>
                </div>
                
                <div class="left-movers">
                  <h5>左手费米子 (k < 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ψ_L(x) = ∑_{k<0} c_k e^{ikx}</p>
                      <p>ε_L(k) = -v_F(k + k_F)</p>
                      <p>向左传播</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="continuum-limit">
              <h4>连续极限：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ψ(x) = ψ_R(x) + ψ_L(x)</p>
                  <p>∂_t ψ_R = -iv_F ∂_x ψ_R</p>
                  <p>∂_t ψ_L = iv_F ∂_x ψ_L</p>
                  <p>手性费米子方程</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interaction-terms">
          <h3>⚡ 相互作用项</h3>
          <div class="interaction-content">
            <div class="density-interaction">
              <h4>密度-密度相互作用：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_int = (1/2) ∫∫ dx dy V(x-y) ρ(x)ρ(y)</p>
                  <p>ρ(x) = ψ†(x)ψ(x): 粒子密度</p>
                  <p>V(x-y): 相互作用势</p>
                </div>
              </div>
            </div>

            <div class="fourier-decomposition">
              <h4>傅里叶分解：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ρ(x) = ρ_0 + ∑_{q≠0} ρ_q e^{iqx}</p>
                  <p>ρ_q = ∫ dx e^{-iqx} ρ(x)</p>
                  <p>ρ_0 = N/L: 平均密度</p>
                </div>
              </div>
            </div>

            <div class="interaction-classification">
              <h4>相互作用分类：</h4>
              <div class="interaction-types">
                <div class="type-card forward-scattering">
                  <h5>前向散射 (g₁):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H₁ = g₁ ∫ dx ρ_R(x)ρ_L(x)</p>
                      <p>不改变手性</p>
                    </div>
                  </div>
                </div>
                
                <div class="type-card backward-scattering">
                  <h5>后向散射 (g₂):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H₂ = g₂ ∫ dx [ψ†_R(x)ψ_L(x) + h.c.]</p>
                      <p>改变手性</p>
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
      <h2>玻色化变换</h2>
      <div class="bosonization">
        <div class="bosonization-procedure">
          <h3>🌊 玻色化过程</h3>
          <div class="procedure-content">
            <div class="density-operators">
              <h4>密度算符的玻色化：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ρ_R(x) = (1/2π) ∂_x φ_R(x)</p>
                  <p>ρ_L(x) = -(1/2π) ∂_x φ_L(x)</p>
                  <p>φ_R, φ_L: 玻色场</p>
                </div>
              </div>
            </div>

            <div class="commutation-relations">
              <h4>对易关系：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>[φ_R(x), ∂_y φ_R(y)] = 2πi δ(x-y)</p>
                  <p>[φ_L(x), ∂_y φ_L(y)] = -2πi δ(x-y)</p>
                  <p>[φ_R(x), φ_L(y)] = 0</p>
                </div>
              </div>
            </div>

            <div class="field-redefinition">
              <h4>场重新定义：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>φ(x) = φ_R(x) + φ_L(x)</p>
                  <p>θ(x) = φ_R(x) - φ_L(x)</p>
                  <p>对偶场关系</p>
                </div>
              </div>
            </div>

            <div class="canonical-form">
              <h4>正则形式：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>[φ(x), ∂_y θ(y)] = 2πi δ(x-y)</p>
                  <p>Π(x) = (1/2π) ∂_t φ(x)</p>
                  <p>[φ(x), Π(y)] = i δ(x-y)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bosonized-hamiltonian">
          <h3>🎼 玻色化哈密顿量</h3>
          <div class="hamiltonian-content">
            <div class="kinetic-term">
              <h4>动能项：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H₀ = (v_F/2) ∫ dx [(∂_x φ)² + (∂_x θ)²]</p>
                  <p>自由玻色子哈密顿量</p>
                </div>
              </div>
            </div>

            <div class="interaction-bosonized">
              <h4>相互作用项（玻色化）：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H₁ = (g₁/2π²) ∫ dx (∂_x φ)²</p>
                  <p>H₂ = (g₂/2π²α²) ∫ dx cos(2√π θ)</p>
                  <p>α: 短程截断参数</p>
                </div>
              </div>
            </div>

            <div class="total-hamiltonian">
              <h4>总哈密顿量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = (v/2) ∫ dx [K(∂_x φ)² + K⁻¹(∂_x θ)²] + H₂</p>
                  <p>v = v_F√(1 + g₁/πv_F): 重整化速度</p>
                  <p>K = √[(πv_F + g₁)/(πv_F - g₁)]: Luttinger参数</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>精确解与物理性质</h2>
      <div class="exact-solution">
        <div class="solution-method">
          <h3>🔍 求解方法</h3>
          <div class="method-content">
            <div class="g2-zero-case">
              <h4>g₂ = 0 情况（可积情况）：</h4>
              <div class="integrable-content">
                <div class="gaussian-theory">
                  <h5>高斯理论：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = (v/2) ∫ dx [K(∂_x φ)² + K⁻¹(∂_x θ)²]</p>
                      <p>二次型哈密顿量</p>
                      <p>精确可解</p>
                    </div>
                  </div>
                </div>
                
                <div class="mode-expansion">
                  <h5>模式展开：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>φ(x,t) = φ₀ + (π/L)Nt + ∑_{n≠0} (1/√|n|) [a_n e^{i(kx-ωt)} + h.c.]</p>
                      <p>ω = v|k|: 线性色散</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="correlation-functions">
              <h4>关联函数计算：</h4>
              <div class="correlations-content">
                <div class="density-correlation">
                  <h5>密度关联：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨ρ(x,t)ρ(0,0)⟩ = (1/4π²) ⟨(∂_x φ)²⟩</p>
                      <p>∝ 1/[x² + (vt)²]</p>
                      <p>幂律衰减</p>
                    </div>
                  </div>
                </div>
                
                <div class="green-function">
                  <h5>单粒子格林函数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>G(x,t) = ⟨ψ†(x,t)ψ(0,0)⟩</p>
                      <p>∝ (x + ivt)^{-(K+K⁻¹)/4} (x - ivt)^{-(K+K⁻¹)/4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="spectral-function">
              <h4>谱函数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>A(k,ω) = -2 Im G^R(k,ω)</p>
                  <p>∝ |ω - vk|^{α} + |ω + vk|^{α}</p>
                  <p>α = (K + K⁻¹)/2 - 1</p>
                  <p>幂律边缘奇点</p>
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
              <div class="thermo-content">
                <div class="specific-heat">
                  <h5>比热：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>C = (π/3) k_B² T/(ℏv)</p>
                      <p>线性温度依赖</p>
                      <p>一维特征</p>
                    </div>
                  </div>
                </div>
                
                <div class="compressibility">
                  <h5>压缩率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>κ = K/(πℏvn²)</p>
                      <p>K依赖的压缩率</p>
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
                
                <div class="impurity-scattering">
                  <h5>杂质散射：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>σ(T) ∝ T^{2(K-1)}</p>
                      <p>K < 1: 绝缘体行为</p>
                      <p>K > 1: 金属行为</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="critical-behavior">
              <h4>临界行为：</h4>
              <div class="critical-content">
                <div class="phase-transitions">
                  <h5>相变性质：</h5>
                  <div class="phase-grid">
                    <div class="phase-card metallic">
                      <h6>金属相 (K > 1):</h6>
                      <ul>
                        <li>g₂ 不相关</li>
                        <li>Luttinger液体</li>
                        <li>幂律关联</li>
                      </ul>
                    </div>
                    
                    <div class="phase-card insulating">
                      <h6>绝缘相 (K < 1):</h6>
                      <ul>
                        <li>g₂ 相关</li>
                        <li>能隙打开</li>
                        <li>指数衰减关联</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="universality">
                  <h5>普适性：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>临界指数由K唯一确定</p>
                      <p>普适类：c = 1 共形场论</p>
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
      <h2>重整化群分析</h2>
      <div class="renormalization-group">
        <div class="rg-equations">
          <h3>🔄 RG方程</h3>
          <div class="rg-content">
            <div class="beta-functions">
              <h4>β函数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>dg₁/dl = 0</p>
                  <p>dg₂/dl = (2 - K - K⁻¹)g₂</p>
                  <p>l = ln(Λ/E): RG流参数</p>
                  <p>Λ: 紫外截断</p>
                </div>
              </div>
            </div>

            <div class="fixed-points">
              <h4>不动点分析：</h4>
              <div class="fp-analysis">
                <div class="gaussian-fp">
                  <h5>高斯不动点 (g₂* = 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>K > 1: 稳定（红外稳定）</p>
                      <p>K < 1: 不稳定</p>
                      <p>K = 1: 边界情况</p>
                    </div>
                  </div>
                </div>
                
                <div class="strong-coupling-fp">
                  <h5>强耦合不动点 (g₂* → ∞):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>K < 1: 流向强耦合</p>
                      <p>能隙产生</p>
                      <p>绝缘体相</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="rg-flow">
              <h4>RG流图：</h4>
              <div class="flow-description">
                <div class="flow-regions">
                  <div class="region-card weak-coupling">
                    <h5>弱耦合区域：</h5>
                    <ul>
                      <li>K > 1, g₂ → 0</li>
                      <li>Luttinger液体</li>
                      <li>无能隙</li>
                    </ul>
                  </div>
                  
                  <div class="region-card strong-coupling">
                    <h5>强耦合区域：</h5>
                    <ul>
                      <li>K < 1, g₂ → ∞</li>
                      <li>绝缘体</li>
                      <li>有能隙</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scaling-behavior">
          <h3>📏 标度行为</h3>
          <div class="scaling-content">
            <div class="correlation-length">
              <h4>关联长度：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ξ ∝ |g₂|^{-ν}</p>
                  <p>ν = 1/(2 - K - K⁻¹)</p>
                  <p>K < 1时的发散</p>
                </div>
              </div>
            </div>

            <div class="energy-gap">
              <h4>能隙标度：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>Δ ∝ |g₂|^{ν}</p>
                  <p>K < 1: 能隙打开</p>
                  <p>K > 1: 无能隙</p>
                </div>
              </div>
            </div>

            <div class="critical-exponents">
              <h4>临界指数：</h4>
              <div class="exponents-grid">
                <div class="exponent-card">
                  <h5>关联函数指数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>η = (K + K⁻¹)/2 - 1</p>
                    </div>
                  </div>
                </div>
                
                <div class="exponent-card">
                  <h5>态密度指数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>α = (K + K⁻¹ - 2)/4</p>
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
      <h2>实验实现与应用</h2>
      <div class="experimental-applications">
        <div class="material-realizations">
          <h3>🔬 材料实现</h3>
          <div class="materials-content">
            <div class="organic-conductors">
              <h4>有机导体：</h4>
              <div class="organic-content">
                <div class="ttf-tcnq">
                  <h5>TTF-TCNQ系列：</h5>
                  <div class="material-properties">
                    <ul>
                      <li>准一维结构</li>
                      <li>Peierls不稳定性</li>
                      <li>CDW相变</li>
                      <li>Luttinger液体行为</li>
                    </ul>
                  </div>
                </div>
                
                <div class="bechgaard-salts">
                  <h5>Bechgaard盐：</h5>
                  <div class="material-properties">
                    <ul>
                      <li>(TMTSF)₂X系列</li>
                      <li>压力调控相图</li>
                      <li>SDW-超导相变</li>
                      <li>非费米液体行为</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="carbon-systems">
              <h4>碳基系统：</h4>
              <div class="carbon-content">
                <div class="nanotubes">
                  <h5>碳纳米管：</h5>
                  <div class="nanotube-properties">
                    <div class="property-item">
                      <h6>单壁碳纳米管：</h6>
                      <ul>
                        <li>手性指数决定性质</li>
                        <li>金属或半导体</li>
                        <li>Luttinger液体参数K ≈ 0.2-0.3</li>
                      </ul>
                    </div>
                    
                    <div class="property-item">
                      <h6>实验观测：</h6>
                      <ul>
                        <li>幂律隧穿谱</li>
                        <li>温度依赖电导</li>
                        <li>自旋-电荷分离</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="graphene-nanoribbons">
                  <h5>石墨烯纳米带：</h5>
                  <div class="material-properties">
                    <ul>
                      <li>边缘态物理</li>
                      <li>宽度调控能隙</li>
                      <li>拓扑边缘态</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="quantum-wires">
              <h4>半导体量子线：</h4>
              <div class="qw-content">
                <div class="gaas-systems">
                  <h5>GaAs/AlGaAs系统：</h5>
                  <div class="material-properties">
                    <ul>
                      <li>分子束外延制备</li>
                      <li>电子气限制</li>
                      <li>栅极调控</li>
                      <li>0.7异常</li>
                    </ul>
                  </div>
                </div>
                
                <div class="si-nanowires">
                  <h5>硅纳米线：</h5>
                  <div class="material-properties">
                    <ul>
                      <li>CMOS兼容</li>
                      <li>尺寸效应</li>
                      <li>表面态影响</li>
                    </ul>
                  </div>
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
              <div class="transport-grid">
                <div class="technique-card">
                  <h5>电导测量：</h5>
                  <ul>
                    <li>四端法</li>
                    <li>温度依赖</li>
                    <li>幂律拟合</li>
                  </ul>
                </div>
                
                <div class="technique-card">
                  <h5>隧穿谱学：</h5>
                  <ul>
                    <li>STM/STS</li>
                    <li>态密度测量</li>
                    <li>幂律边缘奇点</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="spectroscopic-probes">
              <h4>谱学探测：</h4>
              <div class="spectro-grid">
                <div class="spectro-card">
                  <h5>光电子谱：</h5>
                  <ul>
                    <li>ARPES测量</li>
                    <li>能带结构</li>
                    <li>自能效应</li>
                  </ul>
                </div>
                
                <div class="spectro-card">
                  <h5>光学谱学：</h5>
                  <ul>
                    <li>拉曼散射</li>
                    <li>红外吸收</li>
                    <li>集体激发</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="advanced-methods">
              <h4>先进方法：</h4>
              <div class="advanced-grid">
                <div class="method-card">
                  <h5>量子输运：</h5>
                  <ul>
                    <li>散粒噪声</li>
                    <li>全计数统计</li>
                    <li>涨落定理</li>
                  </ul>
                </div>
                
                <div class="method-card">
                  <h5>时间分辨：</h5>
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
          <p>Tomonaga模型通过线性化色散关系和玻色化技术，为一维相互作用费米子系统提供了精确的理论框架。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>模型展现了丰富的相图结构，包括Luttinger液体相和绝缘体相，由Luttinger参数K控制。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>重整化群分析揭示了系统的临界行为和普适性，为理解一维强关联系统提供了深刻洞察。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>模型在碳纳米管、有机导体、量子线等实际材料中得到广泛验证和应用。</p>
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

.model-construction {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.linearization {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.linearization h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.linearization-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dispersion-analysis {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.dispersion-analysis h4 {
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

.chiral-decomposition {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.chiral-decomposition h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.chiral-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.right-movers,
.left-movers {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.right-movers h5,
.left-movers h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.continuum-limit {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.continuum-limit h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interaction-terms {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.interaction-terms h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interaction-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.density-interaction,
.fourier-decomposition {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.density-interaction h4,
.fourier-decomposition h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interaction-classification {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.interaction-classification h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interaction-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.type-card {
  border-radius: 0.375rem;
  padding: 1rem;
  border: 2px solid;
}

.type-card.forward-scattering {
  background: #e6fffa;
  border-color: #4fd1c7;
}

.type-card.backward-scattering {
  background: #fef5e7;
  border-color: #f6ad55;
}

.type-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.bosonization {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bosonization-procedure {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.bosonization-procedure h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.procedure-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.density-operators,
.commutation-relations,
.field-redefinition,
.canonical-form {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.density-operators h4,
.commutation-relations h4,
.field-redefinition h4,
.canonical-form h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.bosonized-hamiltonian {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.bosonized-hamiltonian h3 {
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

.kinetic-term,
.interaction-bosonized,
.total-hamiltonian {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.kinetic-term h4,
.interaction-bosonized h4,
.total-hamiltonian h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.exact-solution {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.solution-method {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.solution-method h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.method-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.g2-zero-case {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.g2-zero-case h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.integrable-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.gaussian-theory,
.mode-expansion {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.gaussian-theory h5,
.mode-expansion h5 {
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

.correlations-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.density-correlation,
.green-function {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.density-correlation h5,
.green-function h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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

.thermo-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.specific-heat,
.compressibility {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.specific-heat h5,
.compressibility h5 {
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
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.conductivity,
.impurity-scattering {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.conductivity h5,
.impurity-scattering h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.critical-behavior {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.critical-behavior h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.critical-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.phase-transitions {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.phase-transitions h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.phase-card {
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 2px solid;
}

.phase-card.metallic {
  background: #e6fffa;
  border-color: #4fd1c7;
}

.phase-card.insulating {
  background: #fed7d7;
  border-color: #fc8181;
}

.phase-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.phase-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.phase-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.phase-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.universality {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.universality h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.renormalization-group {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.rg-equations {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.rg-equations h3 {
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

.beta-functions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.beta-functions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.fixed-points {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.fixed-points h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.fp-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.gaussian-fp,
.strong-coupling-fp {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.gaussian-fp h5,
.strong-coupling-fp h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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

.flow-description {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.flow-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.region-card {
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 2px solid;
}

.region-card.weak-coupling {
  background: #e6fffa;
  border-color: #4fd1c7;
}

.region-card.strong-coupling {
  background: #fed7d7;
  border-color: #fc8181;
}

.region-card h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.region-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.region-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.region-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.scaling-behavior {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.scaling-behavior h3 {
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

.correlation-length,
.energy-gap {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.correlation-length h4,
.energy-gap h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.critical-exponents {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.critical-exponents h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.exponents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.exponent-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.exponent-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.experimental-applications {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.material-realizations {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.material-realizations h3 {
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

.organic-conductors {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.organic-conductors h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.organic-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.ttf-tcnq,
.bechgaard-salts {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.ttf-tcnq h5,
.bechgaard-salts h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.material-properties {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.material-properties ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.material-properties li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.material-properties li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.carbon-systems {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.carbon-systems h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.carbon-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nanotubes {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.nanotubes h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.nanotube-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.property-item {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.property-item h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.property-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.property-item li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.property-item li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.graphene-nanoribbons {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.graphene-nanoribbons h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.gaas-systems,
.si-nanowires {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.gaas-systems h5,
.si-nanowires h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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

.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
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

.spectro-grid {
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
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.spectro-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.advanced-methods {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.advanced-methods h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.advanced-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.method-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.method-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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
  
  .chiral-content,
  .interaction-types,
  .integrable-content,
  .correlations-content,
  .thermo-content,
  .transport-content,
  .phase-grid,
  .fp-analysis,
  .flow-regions,
  .exponents-grid,
  .organic-content,
  .nanotube-properties,
  .qw-content,
  .transport-grid,
  .spectro-grid,
  .advanced-grid {
    grid-template-columns: 1fr;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
  
  .point-number {
    align-self: center;
  }
}
</style>