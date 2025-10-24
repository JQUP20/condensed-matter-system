<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.4.1 准粒子概念的推广</h1>
      <p class="chapter-subtitle">从费米液体到强关联系统的准粒子图像</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>🎯 引言</h2>
      <div class="intro-content">
        <p>
          准粒子概念是现代凝聚态物理学的核心思想之一，它将复杂的多体相互作用系统简化为
          有效的单粒子图像。从Landau的费米液体理论开始，准粒子概念已经被推广到各种
          强关联电子系统，包括重费米子系统、高温超导体、量子临界点等。
          这种推广不仅保持了准粒子的基本思想，还引入了新的物理内容。
        </p>
        <div class="key-concepts">
          <div class="concept-card">
            <h3>🔄 绝热连续性</h3>
            <p>从自由费米气体到相互作用系统的连续演化</p>
          </div>
          <div class="concept-card">
            <h3>⚡ 准粒子重整化</h3>
            <p>有效质量、寿命、相互作用的重整化</p>
          </div>
          <div class="concept-card">
            <h3>🌊 集体激发</h3>
            <p>准粒子与集体模式的耦合</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 经典费米液体中的准粒子 -->
    <section class="classical-quasiparticles">
      <h2>📐 经典费米液体中的准粒子</h2>
      
      <div class="classical-content">
        <div class="landau-theory">
          <h3>Landau理论回顾</h3>
          <div class="landau-content">
            <div class="basic-assumptions">
              <h4>基本假设</h4>
              <div class="assumptions-content">
                <div class="assumption-grid">
                  <div class="assumption-card">
                    <h5>🔗 绝热连续性</h5>
                    <div class="assumption-details">
                      <p>相互作用可以绝热地开启，不改变基态的拓扑性质</p>
                      <div class="formula">
                        <p>|ψ₀⟩ → |ψ₀(λ)⟩, λ: 0 → 1</p>
                      </div>
                      <p>其中λ是相互作用强度参数</p>
                    </div>
                  </div>
                  
                  <div class="assumption-card">
                    <h5>⚡ 准粒子激发</h5>
                    <div class="assumption-details">
                      <p>低能激发可以用准粒子描述</p>
                      <div class="formula">
                        <p>E(k) = εₖ + Σ(k,εₖ)</p>
                      </div>
                      <p>其中Σ是自能</p>
                    </div>
                  </div>
                  
                  <div class="assumption-card">
                    <h5>🎯 费米面稳定性</h5>
                    <div class="assumption-details">
                      <p>费米面在相互作用下保持稳定</p>
                      <div class="formula">
                        <p>nₖ = θ(kF - k)</p>
                      </div>
                      <p>占据数在费米面处跳跃</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="quasiparticle-properties">
              <h4>准粒子性质</h4>
              <div class="properties-content">
                <div class="property-analysis">
                  <h5>能量色散</h5>
                  <div class="dispersion-content">
                    <div class="formula">
                      <p>εₖ = vF*(k - kF) + O((k - kF)²)</p>
                    </div>
                    <div class="dispersion-explanation">
                      <p>其中vF* = vF/m* 是重整化的费米速度</p>
                    </div>
                    
                    <div class="effective-mass">
                      <h6>有效质量</h6>
                      <div class="mass-content">
                        <div class="formula">
                          <p>m*/m = 1 + F₁ˢ/3</p>
                        </div>
                        <div class="mass-explanation">
                          <p>通过Landau参数F₁ˢ重整化</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="lifetime-analysis">
                  <h5>准粒子寿命</h5>
                  <div class="lifetime-content">
                    <div class="formula">
                      <p>1/τ = -2Im[Σ(k,εₖ)]</p>
                    </div>
                    <div class="lifetime-explanation">
                      <p>由自能的虚部决定</p>
                    </div>
                    
                    <div class="temperature-dependence">
                      <h6>温度依赖</h6>
                      <div class="temp-content">
                        <div class="formula">
                          <p>1/τ ∝ (kBT)² + (ε - εF)²</p>
                        </div>
                        <div class="temp-explanation">
                          <p>费米液体的特征T²行为</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="residue-analysis">
                  <h5>准粒子权重</h5>
                  <div class="residue-content">
                    <div class="formula">
                      <p>Z = [1 - ∂Σ/∂ω|ω=εₖ]⁻¹</p>
                    </div>
                    <div class="residue-explanation">
                      <p>准粒子在单粒子谱函数中的权重</p>
                    </div>
                    
                    <div class="spectral-function">
                      <h6>谱函数</h6>
                      <div class="spectral-content">
                        <div class="formula">
                          <p>A(k,ω) = Z·δ(ω - εₖ) + A_incoh(k,ω)</p>
                        </div>
                        <div class="spectral-explanation">
                          <p>相干峰 + 非相干背景</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="validity-conditions">
          <h3>有效性条件</h3>
          <div class="validity-content">
            <div class="condition-grid">
              <div class="condition-card">
                <h4>🌡️ 温度条件</h4>
                <div class="temp-condition">
                  <div class="formula">
                    <p>kBT ≪ εF</p>
                  </div>
                  <p>低温下准粒子概念有效</p>
                </div>
              </div>
              
              <div class="condition-card">
                <h4>⚡ 能量条件</h4>
                <div class="energy-condition">
                  <div class="formula">
                    <p>|ε - εF| ≪ εF</p>
                  </div>
                  <p>费米面附近的低能激发</p>
                </div>
              </div>
              
              <div class="condition-card">
                <h4>🔄 寿命条件</h4>
                <div class="lifetime-condition">
                  <div class="formula">
                    <p>ετ/ℏ ≫ 1</p>
                  </div>
                  <p>准粒子寿命足够长</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 重费米子系统中的准粒子 -->
    <section class="heavy-fermion-quasiparticles">
      <h2>🧲 重费米子系统中的准粒子</h2>
      
      <div class="heavy-fermion-content">
        <div class="system-characteristics">
          <h3>系统特征</h3>
          <div class="characteristics-content">
            <div class="material-examples">
              <h4>典型材料</h4>
              <div class="materials-grid">
                <div class="material-card">
                  <h5>CeCoIn₅</h5>
                  <div class="material-properties">
                    <p><strong>γ:</strong> 290 mJ/mol·K²</p>
                    <p><strong>m*/m:</strong> ~100</p>
                    <p><strong>TK:</strong> ~45 K</p>
                    <p><strong>特点:</strong> 超导 + 反铁磁</p>
                  </div>
                </div>
                
                <div class="material-card">
                  <h5>UPt₃</h5>
                  <div class="material-properties">
                    <p><strong>γ:</strong> 420 mJ/mol·K²</p>
                    <p><strong>m*/m:</strong> ~200</p>
                    <p><strong>TK:</strong> ~25 K</p>
                    <p><strong>特点:</strong> 非常规超导</p>
                  </div>
                </div>
                
                <div class="material-card">
                  <h5>YbRh₂Si₂</h5>
                  <div class="material-properties">
                    <p><strong>γ:</strong> 1700 mJ/mol·K²</p>
                    <p><strong>m*/m:</strong> ~1000</p>
                    <p><strong>TK:</strong> ~25 K</p>
                    <p><strong>特点:</strong> 量子临界点</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="formation-mechanism">
              <h4>形成机制</h4>
              <div class="mechanism-content">
                <div class="kondo-effect">
                  <h5>Kondo效应</h5>
                  <div class="kondo-content">
                    <div class="single-impurity">
                      <h6>单杂质Kondo模型</h6>
                      <div class="formula">
                        <p>H = Σₖεₖc†ₖcₖ + JₖS·s</p>
                      </div>
                      <div class="kondo-explanation">
                        <p>局域磁矩与传导电子的反铁磁耦合</p>
                      </div>
                    </div>
                    
                    <div class="kondo-temperature">
                      <h6>Kondo温度</h6>
                      <div class="formula">
                        <p>TK = D·exp(-1/ρJ)</p>
                      </div>
                      <div class="tk-explanation">
                        <p>其中D是带宽，ρ是态密度，J是交换耦合</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="kondo-lattice">
                  <h5>Kondo晶格</h5>
                  <div class="lattice-content">
                    <div class="coherence-formation">
                      <h6>相干性形成</h6>
                      <div class="formula">
                        <p>T* ~ TK/N</p>
                      </div>
                      <div class="coherence-explanation">
                        <p>相干温度远低于单杂质Kondo温度</p>
                      </div>
                    </div>
                    
                    <div class="hybridization">
                      <h6>杂化能隙</h6>
                      <div class="formula">
                        <p>Δ ~ √(TK·εF)</p>
                      </div>
                      <div class="hybridization-explanation">
                        <p>f电子与传导电子的杂化</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modified-quasiparticles">
          <h3>修正的准粒子图像</h3>
          <div class="modified-content">
            <div class="mass-enhancement">
              <h4>质量增强</h4>
              <div class="enhancement-content">
                <div class="enhancement-mechanism">
                  <h5>增强机制</h5>
                  <div class="mechanism-analysis">
                    <div class="formula">
                      <p>m*/m = 1 + λ</p>
                    </div>
                    <div class="lambda-definition">
                      <p>其中λ是质量增强参数：</p>
                      <div class="formula">
                        <p>λ = ∫₀^∞ dω α²F(ω)/ω</p>
                      </div>
                      <p>α²F(ω)是电子-玻色子耦合谱函数</p>
                    </div>
                  </div>
                </div>
                
                <div class="temperature-evolution">
                  <h5>温度演化</h5>
                  <div class="evolution-content">
                    <div class="high-temperature">
                      <h6>高温 (T ≫ TK)</h6>
                      <div class="formula">
                        <p>m*(T) ≈ m</p>
                      </div>
                      <p>局域磁矩行为，无质量增强</p>
                    </div>
                    
                    <div class="intermediate-temperature">
                      <h6>中温 (T ~ TK)</h6>
                      <div class="formula">
                        <p>m*(T) ∝ 1/T</p>
                      </div>
                      <p>Kondo单重态形成</p>
                    </div>
                    
                    <div class="low-temperature">
                      <h6>低温 (T ≪ T*)</h6>
                      <div class="formula">
                        <p>m*(T) ≈ m*₀</p>
                      </div>
                      <p>相干重费米子液体</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="spectral-properties">
              <h4>谱学性质</h4>
              <div class="spectral-content">
                <div class="three-peak-structure">
                  <h5>三峰结构</h5>
                  <div class="peaks-content">
                    <div class="peak-analysis">
                      <div class="coherent-peak">
                        <h6>相干峰</h6>
                        <div class="formula">
                          <p>A_coh(ω) = Z·δ(ω - εₖ)</p>
                        </div>
                        <p>窄的准粒子峰，权重Z ≪ 1</p>
                      </div>
                      
                      <div class="hubbard-bands">
                        <h6>Hubbard带</h6>
                        <div class="formula">
                          <p>ω ≈ ±U/2</p>
                        </div>
                        <p>高能非相干激发</p>
                      </div>
                      
                      <div class="kondo-resonance">
                        <h6>Kondo共振</h6>
                        <div class="formula">
                          <p>ω ~ 0, 宽度 ~ TK</p>
                        </div>
                        <p>费米能级附近的共振态</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="photoemission-results">
                  <h5>光电子能谱</h5>
                  <div class="photoemission-content">
                    <div class="experimental-observations">
                      <h6>实验观测</h6>
                      <ul>
                        <li>费米能级附近的窄峰</li>
                        <li>高结合能的f电子峰</li>
                        <li>温度依赖的谱权重转移</li>
                        <li>杂化能隙的观测</li>
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

    <!-- 量子临界点附近的准粒子 -->
    <section class="quantum-critical-quasiparticles">
      <h2>🌀 量子临界点附近的准粒子</h2>
      
      <div class="quantum-critical-content">
        <div class="critical-point-theory">
          <h3>量子临界点理论</h3>
          <div class="theory-content">
            <div class="scaling-hypothesis">
              <h4>标度假设</h4>
              <div class="scaling-content">
                <div class="critical-exponents">
                  <h5>临界指数</h5>
                  <div class="exponents-content">
                    <div class="exponent-grid">
                      <div class="exponent-card">
                        <h6>动力学指数 z</h6>
                        <div class="formula">
                          <p>ω ~ q^z</p>
                        </div>
                        <p>时间和空间的标度关系</p>
                      </div>
                      
                      <div class="exponent-card">
                        <h6>关联长度指数 ν</h6>
                        <div class="formula">
                          <p>ξ ~ |δ|^(-ν)</p>
                        </div>
                        <p>δ是调节参数偏离临界值</p>
                      </div>
                      
                      <div class="exponent-card">
                        <h6>异常维度 η</h6>
                        <div class="formula">
                          <p>G(r) ~ r^(-(d-2+η))</p>
                        </div>
                        <p>关联函数的幂律衰减</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="scaling-functions">
                  <h5>标度函数</h5>
                  <div class="functions-content">
                    <div class="self-energy-scaling">
                      <h6>自能标度</h6>
                      <div class="formula">
                        <p>Σ(k,ω) = |k|^(z-1)F(ω/|k|^z)</p>
                      </div>
                      <div class="scaling-explanation">
                        <p>其中F是标度函数</p>
                      </div>
                    </div>
                    
                    <div class="spectral-scaling">
                      <h6>谱函数标度</h6>
                      <div class="formula">
                        <p>A(k,ω) = |k|^(1-z)G(ω/|k|^z)</p>
                      </div>
                      <div class="spectral-scaling-explanation">
                        <p>临界点附近的标度行为</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="marginal-fermi-liquid">
              <h4>边缘费米液体</h4>
              <div class="marginal-content">
                <div class="self-energy-behavior">
                  <h5>自能行为</h5>
                  <div class="behavior-content">
                    <div class="frequency-dependence">
                      <h6>频率依赖</h6>
                      <div class="formula">
                        <p>Im[Σ(ω)] ∝ ω·ln(ω₀/|ω|)</p>
                      </div>
                      <p>对数修正的线性频率依赖</p>
                    </div>
                    
                    <div class="temperature-dependence">
                      <h6>温度依赖</h6>
                      <div class="formula">
                        <p>Im[Σ(T)] ∝ T·ln(T₀/T)</p>
                      </div>
                      <p>线性温度依赖，偏离T²行为</p>
                    </div>
                  </div>
                </div>
                
                <div class="transport-properties">
                  <h5>输运性质</h5>
                  <div class="transport-content">
                    <div class="resistivity">
                      <h6>电阻率</h6>
                      <div class="formula">
                        <p>ρ(T) = ρ₀ + AT</p>
                      </div>
                      <p>线性温度依赖</p>
                    </div>
                    
                    <div class="specific-heat">
                      <h6>比热</h6>
                      <div class="formula">
                        <p>C/T = γ₀·ln(T₀/T)</p>
                      </div>
                      <p>对数发散的比热系数</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-realizations">
          <h3>实验实现</h3>
          <div class="realizations-content">
            <div class="material-systems">
              <h4>材料系统</h4>
              <div class="systems-grid">
                <div class="system-card">
                  <h5>🧲 重费米子QCP</h5>
                  <div class="system-details">
                    <p><strong>材料:</strong> YbRh₂Si₂, CeCoIn₅</p>
                    <p><strong>调节:</strong> 压力、磁场、掺杂</p>
                    <p><strong>现象:</strong> NFL行为、标度律</p>
                  </div>
                </div>
                
                <div class="system-card">
                  <h5>🔥 高温超导体</h5>
                  <div class="system-details">
                    <p><strong>材料:</strong> 铜氧化物</p>
                    <p><strong>调节:</strong> 掺杂浓度</p>
                    <p><strong>现象:</strong> 奇异金属相</p>
                  </div>
                </div>
                
                <div class="system-card">
                  <h5>🔬 二维系统</h5>
                  <div class="system-details">
                    <p><strong>材料:</strong> 石墨烯、过渡金属硫化物</p>
                    <p><strong>调节:</strong> 栅压、应变</p>
                    <p><strong>现象:</strong> 范霍夫奇点</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="experimental-signatures">
              <h4>实验特征</h4>
              <div class="signatures-content">
                <div class="signature-grid">
                  <div class="signature-card">
                    <h5>📊 输运测量</h5>
                    <div class="transport-signatures">
                      <ul>
                        <li>ρ ∝ T (线性电阻)</li>
                        <li>Hall系数异常</li>
                        <li>磁阻的标度行为</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="signature-card">
                    <h5>🌡️ 热力学测量</h5>
                    <div class="thermodynamic-signatures">
                      <ul>
                        <li>C/T的对数发散</li>
                        <li>磁化率异常</li>
                        <li>热膨胀系数</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="signature-card">
                    <h5>🔬 谱学测量</h5>
                    <div class="spectroscopic-signatures">
                      <ul>
                        <li>ARPES中的准粒子峰展宽</li>
                        <li>光学电导率的异常</li>
                        <li>拉曼散射的标度行为</li>
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

    <!-- 准粒子概念的局限性 -->
    <section class="limitations">
      <h2>⚠️ 准粒子概念的局限性</h2>
      
      <div class="limitations-content">
        <div class="breakdown-scenarios">
          <h3>失效情形</h3>
          <div class="scenarios-content">
            <div class="scenario-grid">
              <div class="scenario-card">
                <h4>🌡️ 高温失效</h4>
                <div class="high-temp-content">
                  <div class="condition">
                    <div class="formula">
                      <p>kBT ≳ εF</p>
                    </div>
                    <p>热涨落破坏准粒子图像</p>
                  </div>
                  <div class="consequences">
                    <h5>后果</h5>
                    <ul>
                      <li>准粒子寿命极短</li>
                      <li>费米面模糊化</li>
                      <li>非费米液体行为</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="scenario-card">
                <h4>💪 强关联失效</h4>
                <div class="strong-corr-content">
                  <div class="condition">
                    <div class="formula">
                      <p>U ≳ W</p>
                    </div>
                    <p>库仑排斥超过带宽</p>
                  </div>
                  <div class="consequences">
                    <h5>后果</h5>
                    <ul>
                      <li>Mott绝缘体转变</li>
                      <li>准粒子权重Z → 0</li>
                      <li>电荷-自旋分离</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="scenario-card">
                <h4>🌀 量子临界失效</h4>
                <div class="quantum-crit-content">
                  <div class="condition">
                    <div class="formula">
                      <p>ωτ ~ 1</p>
                    </div>
                    <p>临界涨落破坏准粒子</p>
                  </div>
                  <div class="consequences">
                    <h5>后果</h5>
                    <ul>
                      <li>边缘费米液体</li>
                      <li>奇异金属相</li>
                      <li>标度不变性</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="alternative-approaches">
          <h3>替代方法</h3>
          <div class="approaches-content">
            <div class="approach-grid">
              <div class="approach-card">
                <h4>🔗 分数化准粒子</h4>
                <div class="fractionalization-content">
                  <div class="concept">
                    <p>电子分解为自旋子和荷子</p>
                    <div class="formula">
                      <p>c†ᵢσ = f†ᵢσ bᵢ</p>
                    </div>
                    <p>其中f是自旋子，b是荷子</p>
                  </div>
                  <div class="applications">
                    <h5>应用</h5>
                    <ul>
                      <li>量子自旋液体</li>
                      <li>高温超导体</li>
                      <li>重费米子系统</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="approach-card">
                <h4>🌊 集体激发描述</h4>
                <div class="collective-content">
                  <div class="concept">
                    <p>用集体模式描述低能物理</p>
                    <div class="formula">
                      <p>H_eff = Σᵢ ωᵢ b†ᵢbᵢ</p>
                    </div>
                    <p>其中bᵢ是集体激发算符</p>
                  </div>
                  <div class="applications">
                    <h5>应用</h5>
                    <ul>
                      <li>自旋波理论</li>
                      <li>声子理论</li>
                      <li>等离激元</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="approach-card">
                <h4>🎯 拓扑描述</h4>
                <div class="topological-content">
                  <div class="concept">
                    <p>用拓扑不变量描述</p>
                    <div class="formula">
                      <p>ν = (1/2π)∮ A·dl</p>
                    </div>
                    <p>其中A是Berry连接</p>
                  </div>
                  <div class="applications">
                    <h5>应用</h5>
                    <ul>
                      <li>拓扑绝缘体</li>
                      <li>拓扑超导体</li>
                      <li>Weyl半金属</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>🚀 现代发展</h2>
      
      <div class="developments-content">
        <div class="machine-learning">
          <h3>机器学习方法</h3>
          <div class="ml-content">
            <div class="neural-networks">
              <h4>神经网络量子态</h4>
              <div class="nn-content">
                <div class="concept">
                  <p>用神经网络表示多体波函数</p>
                  <div class="formula">
                    <p>|ψ⟩ = Σₓ ψ_NN(x)|x⟩</p>
                  </div>
                  <p>其中ψ_NN是神经网络输出</p>
                </div>
                <div class="advantages">
                  <h5>优势</h5>
                  <ul>
                    <li>处理强关联系统</li>
                    <li>自动发现准粒子</li>
                    <li>无偏见的方法</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="data-driven-discovery">
              <h4>数据驱动发现</h4>
              <div class="discovery-content">
                <div class="pattern-recognition">
                  <h5>模式识别</h5>
                  <ul>
                    <li>自动识别相变</li>
                    <li>发现隐藏序参量</li>
                    <li>预测材料性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="quantum-simulation">
          <h3>量子模拟</h3>
          <div class="simulation-content">
            <div class="cold-atoms">
              <h4>冷原子系统</h4>
              <div class="atoms-content">
                <div class="advantages">
                  <h5>优势</h5>
                  <ul>
                    <li>高度可控的参数</li>
                    <li>实时观测动力学</li>
                    <li>人工规范场</li>
                  </ul>
                </div>
                <div class="applications">
                  <h5>应用</h5>
                  <ul>
                    <li>Hubbard模型实现</li>
                    <li>拓扑相的模拟</li>
                    <li>非平衡动力学</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="quantum-computers">
              <h4>量子计算机</h4>
              <div class="qc-content">
                <div class="current-capabilities">
                  <h5>当前能力</h5>
                  <ul>
                    <li>小系统精确对角化</li>
                    <li>变分量子本征求解器</li>
                    <li>量子近似优化算法</li>
                  </ul>
                </div>
                <div class="future-prospects">
                  <h5>未来前景</h5>
                  <ul>
                    <li>大规模强关联系统</li>
                    <li>实时演化模拟</li>
                    <li>量子优势展示</li>
                  </ul>
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
              <h4>经典准粒子</h4>
              <ul>
                <li>Landau费米液体理论的核心</li>
                <li>绝热连续性和费米面稳定性</li>
                <li>低温低能下的有效描述</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>重费米子准粒子</h4>
              <ul>
                <li>Kondo效应导致的质量增强</li>
                <li>三峰谱结构</li>
                <li>相干-非相干交叉</li>
              </ul>
            </div>
            
            <div class="point-card">
              <h4>量子临界准粒子</h4>
              <ul>
                <li>标度不变性</li>
                <li>边缘费米液体行为</li>
                <li>非费米液体输运性质</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="physical-insights">
          <h3>🔍 物理洞察</h3>
          <div class="insights-content">
            <p>
              准粒子概念的推广揭示了凝聚态物理的深层统一性：
            </p>
            <div class="insight-list">
              <div class="insight-item">
                <h4>🔄 普适性与特殊性</h4>
                <p>准粒子概念在不同系统中的普适性和特殊表现</p>
              </div>
              <div class="insight-item">
                <h4>🌊 涌现现象</h4>
                <p>复杂多体系统中涌现的有效单粒子描述</p>
              </div>
              <div class="insight-item">
                <h4>🎯 理论发展</h4>
                <p>从经典理论到现代强关联理论的发展脉络</p>
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
                <li>Coleman: "Introduction to Many-Body Physics"</li>
                <li>Hewson: "The Kondo Problem to Heavy Fermions"</li>
                <li>Sachdev: "Quantum Phase Transitions"</li>
              </ul>
            </div>
            
            <div class="review-articles">
              <h4>重要综述</h4>
              <ul>
                <li>Stewart: "Heavy-fermion systems" (Rev. Mod. Phys. 1984)</li>
                <li>Löhneysen et al.: "Fermi-liquid instabilities at magnetic quantum phase transitions" (Rev. Mod. Phys. 2007)</li>
                <li>Si & Steglich: "Heavy fermions and quantum phase transitions" (Science 2010)</li>
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

/* 主要章节样式 */
.classical-quasiparticles, .heavy-fermion-quasiparticles, .quantum-critical-quasiparticles, .limitations, .modern-developments {
  margin-bottom: 40px;
}

.classical-quasiparticles h2 {
  font-size: 2em;
  color: #2c3e50;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #3498db;
}

.heavy-fermion-quasiparticles h2 {
  font-size: 2em;
  color: #8e44ad;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #9b59b6;
}

.quantum-critical-quasiparticles h2 {
  font-size: 2em;
  color: #27ae60;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #2ecc71;
}

.limitations h2 {
  font-size: 2em;
  color: #e74c3c;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #c0392b;
}

.modern-developments h2 {
  font-size: 2em;
  color: #17a2b8;
  margin-bottom: 25px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 3px solid #20c997;
}

/* 内容区域样式 */
.classical-content, .heavy-fermion-content, .quantum-critical-content, .limitations-content, .developments-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.landau-theory, .validity-conditions, .system-characteristics, .modified-quasiparticles, .critical-point-theory, .experimental-realizations, .breakdown-scenarios, .alternative-approaches, .machine-learning, .quantum-simulation {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.landau-theory h3, .validity-conditions h3, .system-characteristics h3, .modified-quasiparticles h3, .critical-point-theory h3, .experimental-realizations h3, .breakdown-scenarios h3, .alternative-approaches h3, .machine-learning h3, .quantum-simulation h3 {
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
.assumption-grid, .condition-grid, .materials-grid, .exponent-grid, .scenario-grid, .approach-grid, .systems-grid, .signature-grid, .points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.assumption-card, .condition-card, .material-card, .exponent-card, .scenario-card, .approach-card, .system-card, .signature-card, .point-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.assumption-card:hover, .condition-card:hover, .material-card:hover, .exponent-card:hover, .scenario-card:hover, .approach-card:hover, .system-card:hover, .signature-card:hover, .point-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.assumption-card h5, .condition-card h4, .material-card h5, .exponent-card h6, .scenario-card h4, .approach-card h4, .system-card h5, .signature-card h5, .point-card h4 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.2em;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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
  
  .assumption-grid, .condition-grid, .materials-grid, .exponent-grid, .scenario-grid, .approach-grid, .systems-grid, .signature-grid, .points-grid {
    grid-template-columns: 1fr;
  }
  
  .resources-content {
    grid-template-columns: 1fr;
  }
  
  .formula {
    font-size: 0.9em;
    padding: 10px;
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
  
  .assumption-card, .condition-card, .material-card, .exponent-card, .scenario-card, .approach-card, .system-card, .signature-card, .point-card {
    padding: 15px;
  }
  
  .landau-theory, .validity-conditions, .system-characteristics, .modified-quasiparticles, .critical-point-theory, .experimental-realizations, .breakdown-scenarios, .alternative-approaches, .machine-learning, .quantum-simulation {
    padding: 20px;
  }
}
</style>