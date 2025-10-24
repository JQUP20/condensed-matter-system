<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.3.1 疑惑项</h1>
      <p class="chapter-subtitle">费米液体理论中的集体激发与输运方程</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          在费米液体理论的框架下，系统的动力学行为不仅涉及单粒子激发，
          还包括集体激发模式。这些集体模式的存在使得系统的输运性质变得复杂，
          特别是在Boltzmann输运方程中出现的"疑惑项"（collision term）。
          理解这些项对于正确描述费米液体的非平衡态性质至关重要。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>🌊 集体模式</h3>
            <p>零声模、自旋波等集体激发</p>
          </div>
          <div class="concept-card">
            <h3>⚖️ 输运方程</h3>
            <p>Boltzmann方程与碰撞积分</p>
          </div>
          <div class="concept-card">
            <h3>🔄 弛豫过程</h3>
            <p>准粒子散射与能量弛豫</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Boltzmann输运方程 -->
    <section class="boltzmann-equation">
      <h2>📐 Boltzmann输运方程</h2>
      
      <div class="equation-content">
        <div class="basic-equation">
          <h3>基本形式</h3>
          <div class="equation-derivation">
            <div class="general-form">
              <h4>一般形式</h4>
              <div class="general-content">
                <div class="formula-section">
                  <h5>Boltzmann方程</h5>
                  <div class="formula">
                    <p>∂f/∂t + v·∇f + (F/ℏ)·∇ₖf = (∂f/∂t)_coll</p>
                  </div>
                  <div class="explanation">
                    <p>其中f(k,r,t)是准粒子分布函数，右边是碰撞项</p>
                  </div>
                </div>
                
                <div class="term-analysis">
                  <h5>各项物理意义</h5>
                  <div class="terms-grid">
                    <div class="term-card">
                      <h6>∂f/∂t</h6>
                      <p><strong>时间演化项</strong></p>
                      <p>分布函数的显式时间依赖</p>
                    </div>
                    <div class="term-card">
                      <h6>v·∇f</h6>
                      <p><strong>对流项</strong></p>
                      <p>准粒子在实空间的运动</p>
                    </div>
                    <div class="term-card">
                      <h6>(F/ℏ)·∇ₖf</h6>
                      <p><strong>力项</strong></p>
                      <p>外场对动量分布的影响</p>
                    </div>
                    <div class="term-card">
                      <h6>(∂f/∂t)_coll</h6>
                      <p><strong>碰撞项</strong></p>
                      <p>准粒子间相互作用的效应</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="linearized-form">
              <h4>线性化形式</h4>
              <div class="linearized-content">
                <div class="small-deviation">
                  <h5>小偏离近似</h5>
                  <div class="deviation-content">
                    <div class="formula">
                      <p>f(k,r,t) = f₀(k) + δf(k,r,t)</p>
                    </div>
                    <div class="linearization">
                      <p>对于小偏离δf，方程线性化为：</p>
                      <div class="formula">
                        <p>∂δf/∂t + v·∇δf + (F/ℏ)·∇ₖf₀ = I[δf]</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="collision-integral">
                  <h5>碰撞积分</h5>
                  <div class="integral-content">
                    <div class="integral-form">
                      <p>I[δf] = ∫ W(k,k';k₁,k₁')[δf(k₁) + δf(k₁') - δf(k) - δf(k')]</p>
                    </div>
                    <div class="integral-explanation">
                      <p>W是散射概率，满足能量和动量守恒</p>
                      <ul>
                        <li>能量守恒: εₖ + εₖ₁ = εₖ' + εₖ₁'</li>
                        <li>动量守恒: k + k₁ = k' + k₁'</li>
                        <li>细致平衡: W(k,k₁;k',k₁') = W(k',k₁';k,k₁)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="collision-term-analysis">
          <h3>碰撞项的深入分析</h3>
          <div class="collision-analysis">
            <div class="scattering-processes">
              <h4>散射过程</h4>
              <div class="processes-content">
                <div class="two-particle-scattering">
                  <h5>二粒子散射</h5>
                  <div class="two-particle-content">
                    <div class="scattering-amplitude">
                      <h6>散射振幅</h6>
                      <div class="amplitude-content">
                        <div class="formula">
                          <p>T(k,k₁;k',k₁') = V(k-k') + ∑ₖ₂ V(k-k₂)G(k₂)T(k₂,k₁;k',k₁')</p>
                        </div>
                        <div class="amplitude-explanation">
                          <p>T矩阵包含所有阶的散射过程</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="landau-parameters">
                      <h6>与Landau参数的关系</h6>
                      <div class="parameters-content">
                        <div class="formula">
                          <p>f(k,k') = N(0)⁻¹T(k,k')|ₖ,ₖ'→ₖF</p>
                        </div>
                        <div class="parameters-explanation">
                          <p>费米面上的散射振幅定义Landau相互作用函数</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="many-body-effects">
                  <h5>多体效应</h5>
                  <div class="many-body-content">
                    <div class="vertex-corrections">
                      <h6>顶点修正</h6>
                      <div class="vertex-content">
                        <p>高阶图的贡献：</p>
                        <ul>
                          <li>交换图：费米统计的效应</li>
                          <li>关联图：多粒子激发的影响</li>
                          <li>自能插入：准粒子寿命的有限性</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="screening-effects">
                      <h6>屏蔽效应</h6>
                      <div class="screening-content">
                        <p>动态屏蔽对散射的影响：</p>
                        <ul>
                          <li>RPA屏蔽：长程库仑相互作用</li>
                          <li>等离激元交换：集体激发的贡献</li>
                          <li>频率依赖：非瞬时相互作用</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="conservation-laws">
              <h4>守恒定律</h4>
              <div class="conservation-content">
                <div class="particle-conservation">
                  <h5>粒子数守恒</h5>
                  <div class="particle-content">
                    <div class="conservation-condition">
                      <p>∫ I[δf] d³k = 0</p>
                    </div>
                    <div class="physical-meaning">
                      <p>碰撞过程不改变总粒子数</p>
                    </div>
                  </div>
                </div>
                
                <div class="momentum-conservation">
                  <h5>动量守恒</h5>
                  <div class="momentum-content">
                    <div class="conservation-condition">
                      <p>∫ k I[δf] d³k = 0</p>
                    </div>
                    <div class="physical-meaning">
                      <p>内部碰撞不改变总动量</p>
                    </div>
                  </div>
                </div>
                
                <div class="energy-conservation">
                  <h5>能量守恒</h5>
                  <div class="energy-content">
                    <div class="conservation-condition">
                      <p>∫ εₖ I[δf] d³k = 0</p>
                    </div>
                    <div class="physical-meaning">
                      <p>弹性碰撞保持总能量不变</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 集体模式 -->
    <section class="collective-modes">
      <h2>🌊 集体模式</h2>
      
      <div class="modes-content">
        <div class="zero-sound">
          <h3>零声模</h3>
          <div class="zero-sound-content">
            <div class="dispersion-relation">
              <h4>色散关系</h4>
              <div class="dispersion-content">
                <div class="zero-sound-equation">
                  <h5>零声方程</h5>
                  <div class="equation-content">
                    <div class="formula">
                      <p>1 + F₀ˢ ∫₋₁¹ (dx)/(x - s/vF) = 0</p>
                    </div>
                    <div class="equation-explanation">
                      <p>其中s是零声速度，x = cos θ</p>
                    </div>
                  </div>
                </div>
                
                <div class="solution-analysis">
                  <h5>解的分析</h5>
                  <div class="solution-content">
                    <div class="existence-condition">
                      <h6>存在条件</h6>
                      <div class="condition-content">
                        <div class="formula">
                          <p>F₀ˢ > 0</p>
                        </div>
                        <div class="condition-explanation">
                          <p>需要排斥性的s波相互作用</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="velocity-calculation">
                      <h6>速度计算</h6>
                      <div class="velocity-content">
                        <div class="weak-coupling">
                          <p><strong>弱耦合极限 (F₀ˢ ≪ 1):</strong></p>
                          <div class="formula">
                            <p>s ≈ vF(1 + F₀ˢ/3)</p>
                          </div>
                        </div>
                        <div class="strong-coupling">
                          <p><strong>强耦合极限 (F₀ˢ ≫ 1):</strong></p>
                          <div class="formula">
                            <p>s ≈ vF√(F₀ˢ/3)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="physical-properties">
              <h4>物理性质</h4>
              <div class="properties-content">
                <div class="properties-grid">
                  <div class="property-card">
                    <h5>🔊 声学性质</h5>
                    <div class="acoustic-content">
                      <p><strong>频率范围：</strong>ω ≪ εF/ℏ</p>
                      <p><strong>波长：</strong>λ ≫ ξ₀ (相干长度)</p>
                      <p><strong>阻尼：</strong>极低温下无阻尼</p>
                    </div>
                  </div>
                  
                  <div class="property-card">
                    <h5>🌡️ 温度效应</h5>
                    <div class="temperature-content">
                      <p><strong>低温：</strong>T ≪ ℏs/kBξ₀</p>
                      <p><strong>无碰撞传播</strong></p>
                      <p><strong>高温：</strong>强阻尼，转为第一声</p>
                    </div>
                  </div>
                  
                  <div class="property-card">
                    <h5>🔬 实验观测</h5>
                    <div class="experimental-content">
                      <p><strong>液态³He：</strong>超声实验</p>
                      <p><strong>金属：</strong>电子声学</p>
                      <p><strong>半导体：</strong>等离激元</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="spin-waves">
          <h3>自旋波</h3>
          <div class="spin-waves-content">
            <div class="spin-susceptibility">
              <h4>自旋磁化率</h4>
              <div class="susceptibility-content">
                <div class="dynamic-susceptibility">
                  <h5>动态磁化率</h5>
                  <div class="dynamic-content">
                    <div class="formula">
                      <p>χ(q,ω) = χ₀(q,ω)/[1 + F₀ᵃχ₀(q,ω)]</p>
                    </div>
                    <div class="susceptibility-explanation">
                      <p>包含相互作用修正的磁化率</p>
                    </div>
                  </div>
                </div>
                
                <div class="pole-analysis">
                  <h5>极点分析</h5>
                  <div class="pole-content">
                    <div class="pole-condition">
                      <p>极点条件：1 + F₀ᵃχ₀(q,ω) = 0</p>
                    </div>
                    <div class="pole-interpretation">
                      <p>对应集体自旋激发模式</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="paramagnon-mode">
              <h4>顺磁子模式</h4>
              <div class="paramagnon-content">
                <div class="dispersion-properties">
                  <h5>色散性质</h5>
                  <div class="dispersion-analysis">
                    <div class="low-q-behavior">
                      <h6>小q行为</h6>
                      <div class="low-q-content">
                        <div class="formula">
                          <p>ω ≈ Dq² - iΓq²</p>
                        </div>
                        <div class="parameters-meaning">
                          <p>D: 扩散常数，Γ: 阻尼系数</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="critical-behavior">
                      <h6>临界行为</h6>
                      <div class="critical-content">
                        <p>当F₀ᵃ → -1时：</p>
                        <ul>
                          <li>模式软化：ω → 0</li>
                          <li>临界慢化：Γ → ∞</li>
                          <li>铁磁不稳定性</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="other-collective-modes">
          <h3>其他集体模式</h3>
          <div class="other-modes-content">
            <div class="modes-grid">
              <div class="mode-card">
                <h4>🔄 电荷密度波</h4>
                <div class="cdw-content">
                  <p><strong>起源：</strong>费米面嵌套</p>
                  <p><strong>不稳定性：</strong>2kF散射</p>
                  <p><strong>实例：</strong>一维导体</p>
                </div>
              </div>
              
              <div class="mode-card">
                <h4>🌀 轨道波</h4>
                <div class="orbital-content">
                  <p><strong>起源：</strong>轨道自由度</p>
                  <p><strong>耦合：</strong>自旋-轨道相互作用</p>
                  <p><strong>实例：</strong>过渡金属氧化物</p>
                </div>
              </div>
              
              <div class="mode-card">
                <h4>⚡ 等离激元</h4>
                <div class="plasmon-content">
                  <p><strong>频率：</strong>ωₚ = √(4πne²/m)</p>
                  <p><strong>色散：</strong>ω² = ωₚ² + (3/5)vF²q²</p>
                  <p><strong>阻尼：</strong>Landau阻尼</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 输运系数 -->
    <section class="transport-coefficients">
      <h2>🚀 输运系数</h2>
      
      <div class="transport-content">
        <div class="electrical-conductivity">
          <h3>电导率</h3>
          <div class="conductivity-content">
            <div class="drude-formula">
              <h4>Drude公式的修正</h4>
              <div class="drude-content">
                <div class="classical-drude">
                  <h5>经典Drude结果</h5>
                  <div class="classical-content">
                    <div class="formula">
                      <p>σ₀ = ne²τ/m</p>
                    </div>
                    <div class="classical-explanation">
                      <p>其中τ是散射时间，n是载流子密度</p>
                    </div>
                  </div>
                </div>
                
                <div class="fermi-liquid-correction">
                  <h5>费米液体修正</h5>
                  <div class="correction-content">
                    <div class="formula">
                      <p>σ = σ₀ × (1 + F₁ˢ)/(1 + F₀ˢ)</p>
                    </div>
                    <div class="correction-explanation">
                      <p>相互作用通过Landau参数修正电导率</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="temperature-dependence">
              <h4>温度依赖性</h4>
              <div class="temp-dependence-content">
                <div class="low-temperature">
                  <h5>低温行为</h5>
                  <div class="low-temp-content">
                    <div class="formula">
                      <p>ρ(T) = ρ₀ + AT²</p>
                    </div>
                    <div class="t-squared-law">
                      <p><strong>T²定律：</strong>费米液体的标志</p>
                      <ul>
                        <li>电子-电子散射主导</li>
                        <li>相空间限制：(kBT)²</li>
                        <li>Pauli阻塞效应</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="coefficient-calculation">
                  <h5>系数A的计算</h5>
                  <div class="coefficient-content">
                    <div class="formula">
                      <p>A = (π²/3)(kB/εF)²(ρ₀/τ₀)</p>
                    </div>
                    <div class="coefficient-factors">
                      <p>影响因素：</p>
                      <ul>
                        <li>相互作用强度</li>
                        <li>费米面几何</li>
                        <li>散射机制</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="thermal-conductivity">
          <h3>热导率</h3>
          <div class="thermal-content">
            <div class="wiedemann-franz">
              <h4>Wiedemann-Franz定律</h4>
              <div class="wf-content">
                <div class="classical-law">
                  <h5>经典形式</h5>
                  <div class="classical-wf">
                    <div class="formula">
                      <p>κ/σT = L₀ = π²kB²/3e²</p>
                    </div>
                    <div class="lorenz-number">
                      <p>Lorenz数：L₀ = 2.44 × 10⁻⁸ W·Ω/K²</p>
                    </div>
                  </div>
                </div>
                
                <div class="fermi-liquid-modification">
                  <h5>费米液体修正</h5>
                  <div class="modification-content">
                    <div class="formula">
                      <p>L = L₀ × [(1 + F₁ˢ)²]/[(1 + F₀ˢ)(1 + F₁ˢ)]</p>
                    </div>
                    <div class="modification-explanation">
                      <p>相互作用对Lorenz数的修正</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="violation-conditions">
              <h4>违背条件</h4>
              <div class="violation-content">
                <div class="violation-scenarios">
                  <div class="scenario-grid">
                    <div class="scenario-card">
                      <h5>🌡️ 非弹性散射</h5>
                      <div class="inelastic-content">
                        <p><strong>机制：</strong>电子-声子相互作用</p>
                        <p><strong>温度：</strong>T > θD/10</p>
                        <p><strong>效应：</strong>L < L₀</p>
                      </div>
                    </div>
                    
                    <div class="scenario-card">
                      <h5>🔀 多带效应</h5>
                      <div class="multiband-content">
                        <p><strong>机制：</strong>带间散射</p>
                        <p><strong>条件：</strong>多个费米面</p>
                        <p><strong>效应：</strong>L偏离L₀</p>
                      </div>
                    </div>
                    
                    <div class="scenario-card">
                      <h5>🧲 磁场效应</h5>
                      <div class="magnetic-content">
                        <p><strong>机制：</strong>Lorentz力</p>
                        <p><strong>条件：</strong>ωcτ > 1</p>
                        <p><strong>效应：</strong>各向异性输运</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="viscosity">
          <h3>粘滞系数</h3>
          <div class="viscosity-content">
            <div class="shear-viscosity">
              <h4>剪切粘滞</h4>
              <div class="shear-content">
                <div class="kinetic-theory">
                  <h5>动理学理论</h5>
                  <div class="kinetic-content">
                    <div class="formula">
                      <p>η = (1/5)nmvFλ</p>
                    </div>
                    <div class="kinetic-explanation">
                      <p>其中λ是平均自由程</p>
                    </div>
                  </div>
                </div>
                
                <div class="quantum-correction">
                  <h5>量子修正</h5>
                  <div class="quantum-content">
                    <div class="formula">
                      <p>η = η₀(1 + F₁ˢ)²</p>
                    </div>
                    <div class="quantum-explanation">
                      <p>Landau参数的平方修正</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bulk-viscosity">
              <h4>体积粘滞</h4>
              <div class="bulk-content">
                <div class="compressibility-relation">
                  <h5>与压缩率的关系</h5>
                  <div class="relation-content">
                    <div class="formula">
                      <p>ζ ∝ (∂P/∂T)ᵥ²/κT</p>
                    </div>
                    <div class="relation-explanation">
                      <p>体积粘滞与热力学量相关</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 弛豫时间近似 -->
    <section class="relaxation-time">
      <h2>⏱️ 弛豫时间近似</h2>
      
      <div class="relaxation-content">
        <div class="approximation-method">
          <h3>近似方法</h3>
          <div class="method-content">
            <div class="basic-assumption">
              <h4>基本假设</h4>
              <div class="assumption-content">
                <div class="relaxation-ansatz">
                  <h5>弛豫假设</h5>
                  <div class="ansatz-content">
                    <div class="formula">
                      <p>(∂f/∂t)_coll = -(f - f₀)/τ</p>
                    </div>
                    <div class="ansatz-explanation">
                      <p>分布函数以特征时间τ弛豫到平衡</p>
                    </div>
                  </div>
                </div>
                
                <div class="validity-conditions">
                  <h5>适用条件</h5>
                  <div class="conditions-content">
                    <ul>
                      <li>弱非平衡：|δf| ≪ f₀</li>
                      <li>局域平衡：弛豫快于宏观变化</li>
                      <li>各向同性：忽略角度依赖</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="microscopic-derivation">
              <h4>微观推导</h4>
              <div class="derivation-content">
                <div class="golden-rule">
                  <h5>Fermi黄金定则</h5>
                  <div class="golden-rule-content">
                    <div class="formula">
                      <p>1/τ = (2π/ℏ)∑ₖ'|⟨k'|V|k⟩|²δ(εₖ' - εₖ)</p>
                    </div>
                    <div class="golden-rule-explanation">
                      <p>散射率由态密度和矩阵元决定</p>
                    </div>
                  </div>
                </div>
                
                <div class="temperature-scaling">
                  <h5>温度标度</h5>
                  <div class="scaling-content">
                    <div class="scaling-laws">
                      <div class="law-grid">
                        <div class="law-card">
                          <h6>电子-电子散射</h6>
                          <p>1/τ ∝ T²</p>
                        </div>
                        <div class="law-card">
                          <h6>电子-声子散射</h6>
                          <p>1/τ ∝ T⁵ (低温)</p>
                        </div>
                        <div class="law-card">
                          <h6>杂质散射</h6>
                          <p>1/τ = 常数</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="limitations">
          <h3>局限性</h3>
          <div class="limitations-content">
            <div class="failure-scenarios">
              <h4>失效情况</h4>
              <div class="scenarios-content">
                <div class="scenario-grid">
                  <div class="scenario-card">
                    <h5>🌊 集体效应</h5>
                    <div class="collective-content">
                      <p><strong>问题：</strong>忽略集体模式</p>
                      <p><strong>后果：</strong>错误的输运系数</p>
                      <p><strong>解决：</strong>包含顶点修正</p>
                    </div>
                  </div>
                  
                  <div class="scenario-card">
                    <h5>🔄 记忆效应</h5>
                    <div class="memory-content">
                      <p><strong>问题：</strong>非马尔可夫过程</p>
                      <p><strong>后果：</strong>频率依赖被忽略</p>
                      <p><strong>解决：</strong>记忆函数方法</p>
                    </div>
                  </div>
                  
                  <div class="scenario-card">
                    <h5>🎯 各向异性</h5>
                    <div class="anisotropy-content">
                      <p><strong>问题：</strong>角度依赖散射</p>
                      <p><strong>后果：</strong>输运张量错误</p>
                      <p><strong>解决：</strong>球谐函数展开</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="beyond-relaxation">
              <h4>超越弛豫时间近似</h4>
              <div class="beyond-content">
                <div class="advanced-methods">
                  <h5>高级方法</h5>
                  <div class="methods-grid">
                    <div class="method-card">
                      <h6>📊 变分方法</h6>
                      <div class="variational-content">
                        <p>优化试探函数</p>
                        <p>改善输运系数精度</p>
                      </div>
                    </div>
                    
                    <div class="method-card">
                      <h6>🔢 数值求解</h6>
                      <div class="numerical-content">
                        <p>直接求解Boltzmann方程</p>
                        <p>处理复杂散射机制</p>
                      </div>
                    </div>
                    
                    <div class="method-card">
                      <h6>🧮 量子输运</h6>
                      <div class="quantum-content">
                        <p>Kubo公式方法</p>
                        <p>包含量子干涉效应</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="experimental-verification">
      <h2>🔬 实验验证</h2>
      
      <div class="verification-content">
        <div class="liquid-helium-3">
          <h3>液态³He实验</h3>
          <div class="he3-experiments">
            <div class="sound-experiments">
              <h4>声学实验</h4>
              <div class="sound-content">
                <div class="zero-sound-observation">
                  <h5>零声观测</h5>
                  <div class="observation-content">
                    <div class="experimental-setup">
                      <h6>实验装置</h6>
                      <ul>
                        <li>超声换能器：频率1-100 MHz</li>
                        <li>稀释制冷机：温度1-100 mK</li>
                        <li>高纯³He样品：杂质<10 ppm</li>
                      </ul>
                    </div>
                    
                    <div class="key-results">
                      <h6>关键结果</h6>
                      <ul>
                        <li>零声速度：s/vF ≈ 1.05</li>
                        <li>温度无关性：T < 1 mK</li>
                        <li>与理论完美符合</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="attenuation-studies">
                  <h5>衰减研究</h5>
                  <div class="attenuation-content">
                    <div class="temperature-dependence">
                      <h6>温度依赖</h6>
                      <div class="temp-dep-content">
                        <div class="formula">
                          <p>α ∝ T² (T ≪ TF)</p>
                        </div>
                        <div class="mechanism">
                          <p>准粒子散射导致的衰减</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="transport-measurements">
              <h4>输运测量</h4>
              <div class="transport-experiments">
                <div class="viscosity-measurement">
                  <h5>粘滞测量</h5>
                  <div class="viscosity-exp">
                    <div class="experimental-techniques">
                      <h6>实验技术</h6>
                      <ul>
                        <li>振荡圆盘法</li>
                        <li>毛细管流动</li>
                        <li>声学衰减</li>
                      </ul>
                    </div>
                    
                    <div class="results-comparison">
                      <h6>结果比较</h6>
                      <div class="comparison-table">
                        <table class="data-table">
                          <thead>
                            <tr>
                              <th>温度 (mK)</th>
                              <th>实验值 (μPa·s)</th>
                              <th>理论值 (μPa·s)</th>
                              <th>偏差 (%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1.0</td>
                              <td>2.34</td>
                              <td>2.31</td>
                              <td>1.3</td>
                            </tr>
                            <tr>
                              <td>2.0</td>
                              <td>2.89</td>
                              <td>2.85</td>
                              <td>1.4</td>
                            </tr>
                            <tr>
                              <td>5.0</td>
                              <td>4.12</td>
                              <td>4.08</td>
                              <td>1.0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="metallic-systems">
          <h3>金属系统</h3>
          <div class="metal-experiments">
            <div class="resistivity-studies">
              <h4>电阻率研究</h4>
              <div class="resistivity-content">
                <div class="t-squared-verification">
                  <h5>T²定律验证</h5>
                  <div class="t-squared-content">
                    <div class="experimental-data">
                      <h6>实验数据</h6>
                      <div class="data-examples">
                        <div class="example-grid">
                          <div class="example-card">
                            <h6>铜 (Cu)</h6>
                            <p><strong>A系数：</strong>0.17 μΩ·cm/K²</p>
                            <p><strong>温度范围：</strong>1-10 K</p>
                            <p><strong>纯度：</strong>RRR > 1000</p>
                          </div>
                          
                          <div class="example-card">
                            <h6>银 (Ag)</h6>
                            <p><strong>A系数：</strong>0.12 μΩ·cm/K²</p>
                            <p><strong>温度范围：</strong>1-8 K</p>
                            <p><strong>纯度：</strong>RRR > 2000</p>
                          </div>
                          
                          <div class="example-card">
                            <h6>金 (Au)</h6>
                            <p><strong>A系数：</strong>0.22 μΩ·cm/K²</p>
                            <p><strong>温度范围：</strong>1-12 K</p>
                            <p><strong>纯度：</strong>RRR > 800</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="theoretical-comparison">
                      <h6>理论比较</h6>
                      <div class="comparison-content">
                        <p>理论预测的A系数：</p>
                        <div class="formula">
                          <p>A_theory = (π²/3)(kB/εF)²(ρ₀/τ₀)</p>
                        </div>
                        <p>实验与理论符合度：80-90%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="deviations-analysis">
                  <h5>偏差分析</h5>
                  <div class="deviations-content">
                    <div class="deviation-sources">
                      <h6>偏差来源</h6>
                      <ul>
                        <li>能带结构效应</li>
                        <li>电子-声子相互作用</li>
                        <li>杂质散射残余</li>
                        <li>多体修正</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="thermal-transport">
              <h4>热输运</h4>
              <div class="thermal-experiments">
                <div class="wiedemann-franz-tests">
                  <h5>Wiedemann-Franz定律检验</h5>
                  <div class="wf-tests">
                    <div class="measurement-results">
                      <h6>测量结果</h6>
                      <div class="results-table">
                        <table class="data-table">
                          <thead>
                            <tr>
                              <th>材料</th>
                              <th>L/L₀</th>
                              <th>温度范围 (K)</th>
                              <th>备注</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Cu</td>
                              <td>1.00 ± 0.02</td>
                              <td>1-10</td>
                              <td>完美符合</td>
                            </tr>
                            <tr>
                              <td>Al</td>
                              <td>0.98 ± 0.03</td>
                              <td>1-8</td>
                              <td>轻微偏离</td>
                            </tr>
                            <tr>
                              <td>Pb</td>
                              <td>0.85 ± 0.05</td>
                              <td>2-7</td>
                              <td>电子-声子效应</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary">
      <h2>📋 本节总结</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>🎯 关键要点</h3>
          <div class="points-grid">
            <div class="point-card">
              <h4>Boltzmann方程</h4>
              <ul>
                <li>碰撞项描述准粒子相互作用</li>
                <li>守恒定律约束散射过程</li>
                <li>线性化适用于小偏离</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>集体模式</h4>
              <ul>
                <li>零声模：密度涨落的传播</li>
                <li>自旋波：磁化涨落的激发</li>
                <li>色散关系由Landau参数决定</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>输运性质</h4>
              <ul>
                <li>T²电阻率：费米液体标志</li>
                <li>Wiedemann-Franz定律的修正</li>
                <li>弛豫时间近似的局限性</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="physical-insights">
          <h3>🔍 物理洞察</h3>
          <div class="insights-content">
            <p>
              疑惑项的研究揭示了费米液体理论的深层结构：
            </p>
            <div class="insight-list">
              <div class="insight-item">
                <h4>🌊 集体与单粒子的统一</h4>
                <p>集体模式和单粒子激发在费米液体框架下得到统一描述</p>
              </div>
              <div class="insight-item">
                <h4>🔄 输运与平衡的联系</h4>
                <p>非平衡输运性质与平衡态Landau参数密切相关</p>
              </div>
              <div class="insight-item">
                <h4>🎯 理论与实验的精确对应</h4>
                <p>液态³He实验为费米液体理论提供了精确验证</p>
              </div>
            </div>
          </div>
        </div>

        <div class="learning-resources">
          <h3>📚 学习资源</h3>
          <div class="resources-content">
            <div class="textbooks">
              <h4>经典教材</h4>
              <ul>
                <li>Pines & Nozières: "The Theory of Quantum Liquids"</li>
                <li>Baym & Pethick: "Landau Fermi-Liquid Theory"</li>
                <li>Ziman: "Electrons and Phonons"</li>
              </ul>
            </div>
            
            <div class="review-articles">
              <h4>综述文章</h4>
              <ul>
                <li>Baym: "The physics of liquid ³He" (Rev. Mod. Phys.)</li>
                <li>Vollhardt: "Normal ³He: an almost localized Fermi liquid" (Rev. Mod. Phys.)</li>
                <li>Lee: "Low-temperature behavior of two-dimensional quantum antiferromagnets" (Phys. Rev. Lett.)</li>
              </ul>
            </div>
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
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

/* 引言样式 */
.introduction {
  margin-bottom: 40px;
  padding: 25px;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 15px;
  color: white;
}

.introduction h2 {
  font-size: 1.8em;
  margin-bottom: 20px;
  text-align: center;
}

.intro-content p {
  font-size: 1.1em;
  margin-bottom: 25px;
  text-align: justify;
}

.key-concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 25px;
}

.concept-card {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.concept-card h3 {
  font-size: 1.3em;
  margin-bottom: 10px;
  color: #fff;
}

.concept-card p {
  font-size: 1em;
  opacity: 0.9;
}

/* Boltzmann方程样式 */
.boltzmann-equation {
  margin-bottom: 40px;
}

.boltzmann-equation h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
}

.equation-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.basic-equation, .collision-term-analysis {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.basic-equation h3, .collision-term-analysis h3 {
  font-size: 1.6em;
  color: #2980b9;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #3498db;
}

/* 公式样式 */
.formula {
  background: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;
  box-shadow: 0 3px 10px rgba(44, 62, 80, 0.3);
}

/* 网格布局 */
.terms-grid, .processes-grid, .properties-grid, .modes-grid, .scenario-grid, .methods-grid, .example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.term-card, .process-card, .property-card, .mode-card, .scenario-card, .method-card, .example-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.term-card:hover, .process-card:hover, .property-card:hover, .mode-card:hover, .scenario-card:hover, .method-card:hover, .example-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.term-card h6, .process-card h5, .property-card h5, .mode-card h4, .scenario-card h5, .method-card h6, .example-card h6 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.2em;
}

/* 集体模式样式 */
.collective-modes {
  margin-bottom: 40px;
}

.collective-modes h2 {
  font-size: 2em;
  color: #8e44ad;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #9b59b6;
}

.modes-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.zero-sound, .spin-waves, .other-collective-modes {
  background: #fdf2e9;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.zero-sound h3, .spin-waves h3, .other-collective-modes h3 {
  font-size: 1.6em;
  color: #d35400;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e67e22;
}

/* 输运系数样式 */
.transport-coefficients {
  margin-bottom: 40px;
}

.transport-coefficients h2 {
  font-size: 2em;
  color: #27ae60;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #2ecc71;
}

.transport-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.electrical-conductivity, .thermal-conductivity, .viscosity {
  background: #eafaf1;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.electrical-conductivity h3, .thermal-conductivity h3, .viscosity h3 {
  font-size: 1.6em;
  color: #1e8449;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #27ae60;
}

/* 弛豫时间样式 */
.relaxation-time {
  margin-bottom: 40px;
}

.relaxation-time h2 {
  font-size: 2em;
  color: #e74c3c;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #c0392b;
}

.relaxation-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.approximation-method, .limitations {
  background: #fdedec;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.approximation-method h3, .limitations h3 {
  font-size: 1.6em;
  color: #c0392b;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e74c3c;
}

/* 实验验证样式 */
.experimental-verification {
  margin-bottom: 40px;
}

.experimental-verification h2 {
  font-size: 2em;
  color: #17a2b8;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #20c997;
}

.verification-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.liquid-helium-3, .metallic-systems {
  background: #e8f4fd;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.liquid-helium-3 h3, .metallic-systems h3 {
  font-size: 1.6em;
  color: #0c5460;
  margin-bottom: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #17a2b8;
}

/* 表格样式 */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.data-table th, .data-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.data-table th {
  background: #3498db;
  color: white;
  font-weight: 600;
}

.data-table tr:hover {
  background: #f5f5f5;
}

/* 总结样式 */
.summary {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  padding: 30px;
  border-radius: 15px;
  color: white;
  margin-bottom: 40px;
}

.summary h2 {
  font-size: 2em;
  text-align: center;
  margin-bottom: 25px;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.point-card {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.point-card h4 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #fff;
}

.point-card ul {
  list-style: none;
  padding: 0;
}

.point-card li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.point-card li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #74b9ff;
}

.physical-insights {
  margin-top: 30px;
}

.physical-insights h3 {
  font-size: 1.6em;
  margin-bottom: 20px;
  text-align: center;
}

.insights-content p {
  font-size: 1.1em;
  margin-bottom: 20px;
  text-align: center;
}

.insight-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.insight-item {
  background: rgba(255, 255, 255, 0.15);
  padding: 15px;
  border-radius: 8px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.insight-item h4 {
  font-size: 1.2em;
  margin-bottom: 8px;
  color: #fff;
}

.insight-item p {
  font-size: 1em;
  opacity: 0.9;
  margin: 0;
}

.learning-resources {
  margin-top: 30px;
}

.learning-resources h3 {
  font-size: 1.6em;
  margin-bottom: 20px;
  text-align: center;
}

.resources-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.textbooks, .review-articles {
  background: rgba(255, 255, 255, 0.15);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.textbooks h4, .review-articles h4 {
  font-size: 1.3em;
  margin-bottom: 15px;
  color: #fff;
}

.textbooks ul, .review-articles ul {
  list-style: none;
  padding: 0;
}

.textbooks li, .review-articles li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.95em;
}

.textbooks li::before, .review-articles li::before {
  content: "📖";
  position: absolute;
  left: 0;
}

.review-articles li::before {
  content: "📄";
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .key-concepts {
    grid-template-columns: 1fr;
  }
  
  .terms-grid, .processes-grid, .properties-grid, .modes-grid, .scenario-grid, .methods-grid, .example-grid {
    grid-template-columns: 1fr;
  }
  
  .points-grid {
    grid-template-columns: 1fr;
  }
  
  .resources-content {
    grid-template-columns: 1fr;
  }
  
  .formula {
    font-size: 0.9em;
    padding: 10px;
  }
  
  .data-table {
    font-size: 0.8em;
  }
  
  .data-table th, .data-table td {
    padding: 8px 10px;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 0.9em;
  }
  
  .formula {
    font-size: 0.8em;
    padding: 8px;
  }
  
  .term-card, .process-card, .property-card, .mode-card, .scenario-card, .method-card, .example-card {
    padding: 15px;
  }
  
  .basic-equation, .collision-term-analysis, .zero-sound, .spin-waves, .other-collective-modes, .electrical-conductivity, .thermal-conductivity, .viscosity, .approximation-method, .limitations, .liquid-helium-3, .metallic-systems {
    padding: 20px;
  }
}
</style>