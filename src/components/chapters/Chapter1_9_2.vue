<template>
  <div class="chapter-content">
    <h1 class="chapter-title">1.9.2 习题2：Drude电导率</h1>
    
    <!-- 习题介绍 -->
    <section class="exercise-introduction">
      <h2>Drude模型简介</h2>
      <div class="intro-content">
        <p>Drude模型是描述金属中电子输运性质的经典理论模型，由Paul Drude在1900年提出。该模型将金属中的传导电子视为自由电子气体，通过经典统计力学方法研究电子的输运行为。</p>
        
        <div class="model-features">
          <h3>模型特点</h3>
          <div class="features-grid">
            <div class="feature-item">
              <span class="feature-icon">⚡</span>
              <div class="feature-content">
                <h4>自由电子假设</h4>
                <p>电子在金属中自由运动，不受离子实的束缚</p>
              </div>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🎯</span>
              <div class="feature-content">
                <h4>碰撞机制</h4>
                <p>电子与离子实发生弹性碰撞，平均自由时间为τ</p>
              </div>
            </div>
            <div class="feature-item">
              <span class="feature-icon">📊</span>
              <div class="feature-content">
                <h4>经典统计</h4>
                <p>使用经典统计力学描述电子分布和运动</p>
              </div>
            </div>
            <div class="feature-item">
              <span class="feature-icon">🔄</span>
              <div class="feature-content">
                <h4>弛豫时间近似</h4>
                <p>碰撞后电子速度随机化，遵循指数衰减规律</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第一部分：基本理论推导 -->
    <section class="theory-derivation">
      <h2>第一部分：基本理论推导</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.1</span>
            <h3>运动方程推导</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>在Drude模型中，推导电子在外电场E作用下的运动方程，并求解稳态漂移速度。</p>
            </div>
            
            <div class="solution-section">
              <h4>理论推导</h4>
              
              <div class="equation-derivation">
                <div class="physics-setup">
                  <h5>物理设定</h5>
                  <div class="setup-content">
                    <ul>
                      <li><strong>外电场：</strong>E = E₀ẑ（沿z方向的均匀电场）</li>
                      <li><strong>电子电荷：</strong>-e（e > 0）</li>
                      <li><strong>电子质量：</strong>m</li>
                      <li><strong>平均碰撞时间：</strong>τ</li>
                    </ul>
                  </div>
                </div>
                
                <div class="motion-equation">
                  <h5>运动方程</h5>
                  <div class="equation-steps">
                    <div class="step">
                      <h6>牛顿第二定律</h6>
                      <div class="equation-box">
                        <p>m(dv/dt) = -eE - mv/τ</p>
                      </div>
                      <p>第一项：电场力；第二项：碰撞阻尼力</p>
                    </div>
                    
                    <div class="step">
                      <h6>稳态条件</h6>
                      <p>稳态时 dv/dt = 0，因此：</p>
                      <div class="equation-box">
                        <p>0 = -eE - mv/τ</p>
                      </div>
                    </div>
                    
                    <div class="step">
                      <h6>漂移速度</h6>
                      <div class="equation-box">
                        <p><strong>v_d = -eEτ/m</strong></p>
                      </div>
                      <p>负号表示电子运动方向与电场方向相反</p>
                    </div>
                  </div>
                </div>
                
                <div class="physical-interpretation">
                  <h5>物理解释</h5>
                  <div class="interpretation-content">
                    <div class="interpretation-item">
                      <h6>平衡条件</h6>
                      <p>稳态时，电场加速力与碰撞阻尼力平衡</p>
                    </div>
                    <div class="interpretation-item">
                      <h6>速度大小</h6>
                      <p>漂移速度与电场强度成正比，与碰撞频率成反比</p>
                    </div>
                    <div class="interpretation-item">
                      <h6>典型数值</h6>
                      <p>对于铜：τ ≈ 10⁻¹⁴ s，E = 1 V/m时，v_d ≈ 10⁻⁴ m/s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.2</span>
            <h3>电导率公式推导</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>基于漂移速度，推导Drude模型的电导率公式，并分析其物理意义。</p>
            </div>
            
            <div class="solution-section">
              <h4>推导过程</h4>
              
              <div class="conductivity-derivation">
                <div class="current-density">
                  <h5>电流密度</h5>
                  <div class="derivation-steps">
                    <div class="step">
                      <h6>定义</h6>
                      <p>电流密度 J 定义为单位时间内通过单位面积的电荷量</p>
                      <div class="equation-box">
                        <p>J = -nev_d</p>
                      </div>
                      <p>其中 n 为电子密度，v_d 为漂移速度</p>
                    </div>
                    
                    <div class="step">
                      <h6>代入漂移速度</h6>
                      <p>将 v_d = -eEτ/m 代入：</p>
                      <div class="equation-box">
                        <p>J = -ne(-eEτ/m) = ne²Eτ/m</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="ohms-law">
                  <h5>欧姆定律形式</h5>
                  <div class="ohm-derivation">
                    <div class="step">
                      <h6>线性关系</h6>
                      <p>电流密度与电场成正比：</p>
                      <div class="equation-box">
                        <p>J = σE</p>
                      </div>
                      <p>其中 σ 为电导率</p>
                    </div>
                    
                    <div class="step">
                      <h6>Drude电导率</h6>
                      <div class="equation-box highlight">
                        <p><strong>σ = ne²τ/m</strong></p>
                      </div>
                      <p>这是Drude模型的核心结果</p>
                    </div>
                  </div>
                </div>
                
                <div class="conductivity-analysis">
                  <h5>电导率分析</h5>
                  <div class="analysis-grid">
                    <div class="analysis-item">
                      <h6>载流子密度依赖</h6>
                      <p>σ ∝ n：载流子密度越高，电导率越大</p>
                    </div>
                    <div class="analysis-item">
                      <h6>散射时间依赖</h6>
                      <p>σ ∝ τ：散射时间越长，电导率越大</p>
                    </div>
                    <div class="analysis-item">
                      <h6>质量依赖</h6>
                      <p>σ ∝ 1/m：有效质量越小，电导率越大</p>
                    </div>
                    <div class="analysis-item">
                      <h6>温度效应</h6>
                      <p>τ通常随温度降低而增加，因此σ随温度降低而增加</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第二部分：数值计算练习 -->
    <section class="numerical-problems">
      <h2>第二部分：数值计算练习</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.3</span>
            <h3>铜的电导率计算</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>铜的原子密度为8.5×10²⁸ m⁻³，假设每个铜原子贡献一个传导电子，平均自由时间τ = 2.7×10⁻¹⁴ s。计算铜在室温下的电导率，并与实验值比较。</p>
            </div>
            
            <div class="solution-section">
              <h4>计算过程</h4>
              
              <div class="copper-calculation">
                <div class="given-data">
                  <h5>已知数据</h5>
                  <div class="data-table">
                    <div class="data-row">
                      <span class="data-label">原子密度：</span>
                      <span class="data-value">N = 8.5×10²⁸ m⁻³</span>
                    </div>
                    <div class="data-row">
                      <span class="data-label">电子密度：</span>
                      <span class="data-value">n = N = 8.5×10²⁸ m⁻³</span>
                    </div>
                    <div class="data-row">
                      <span class="data-label">平均自由时间：</span>
                      <span class="data-value">τ = 2.7×10⁻¹⁴ s</span>
                    </div>
                    <div class="data-row">
                      <span class="data-label">电子电荷：</span>
                      <span class="data-value">e = 1.602×10⁻¹⁹ C</span>
                    </div>
                    <div class="data-row">
                      <span class="data-label">电子质量：</span>
                      <span class="data-value">m = 9.109×10⁻³¹ kg</span>
                    </div>
                  </div>
                </div>
                
                <div class="calculation-steps">
                  <h5>计算步骤</h5>
                  <div class="calc-step">
                    <h6>步骤1：应用Drude公式</h6>
                    <div class="equation-box">
                      <p>σ = ne²τ/m</p>
                    </div>
                  </div>
                  
                  <div class="calc-step">
                    <h6>步骤2：代入数值</h6>
                    <div class="calculation-detail">
                      <p>σ = (8.5×10²⁸) × (1.602×10⁻¹⁹)² × (2.7×10⁻¹⁴) / (9.109×10⁻³¹)</p>
                      <p>σ = (8.5×10²⁸) × (2.566×10⁻³⁸) × (2.7×10⁻¹⁴) / (9.109×10⁻³¹)</p>
                      <p>σ = 5.89×10⁻²³ / (9.109×10⁻³¹)</p>
                    </div>
                  </div>
                  
                  <div class="calc-step">
                    <h6>步骤3：最终结果</h6>
                    <div class="result-box">
                      <p><strong>σ = 6.47×10⁷ S/m</strong></p>
                    </div>
                  </div>
                </div>
                
                <div class="comparison">
                  <h5>与实验值比较</h5>
                  <div class="comparison-table">
                    <div class="comparison-row">
                      <span class="comparison-label">理论值（Drude）：</span>
                      <span class="comparison-value">6.47×10⁷ S/m</span>
                    </div>
                    <div class="comparison-row">
                      <span class="comparison-label">实验值：</span>
                      <span class="comparison-value">5.96×10⁷ S/m</span>
                    </div>
                    <div class="comparison-row">
                      <span class="comparison-label">相对误差：</span>
                      <span class="comparison-value">约8.5%</span>
                    </div>
                  </div>
                  
                  <div class="error-analysis">
                    <h6>误差分析</h6>
                    <ul>
                      <li>Drude模型的经典近似限制</li>
                      <li>忽略了电子-电子相互作用</li>
                      <li>简化的散射机制</li>
                      <li>未考虑能带结构效应</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.4</span>
            <h3>平均自由程计算</h3>
            <span class="difficulty easy">基础</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>基于上题的数据，计算铜中电子的平均自由程，并与原子间距比较。</p>
            </div>
            
            <div class="solution-section">
              <h4>计算分析</h4>
              
              <div class="free-path-calculation">
                <div class="velocity-calculation">
                  <h5>费米速度计算</h5>
                  <div class="fermi-velocity">
                    <div class="step">
                      <h6>费米波矢</h6>
                      <p>kF = (3π²n)^(1/3)</p>
                      <p>kF = (3π² × 8.5×10²⁸)^(1/3) = 1.36×10¹⁰ m⁻¹</p>
                    </div>
                    
                    <div class="step">
                      <h6>费米速度</h6>
                      <div class="equation-box">
                        <p>vF = ℏkF/m = (1.055×10⁻³⁴ × 1.36×10¹⁰) / (9.109×10⁻³¹)</p>
                        <p><strong>vF = 1.57×10⁶ m/s</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mean-free-path">
                  <h5>平均自由程</h5>
                  <div class="path-calculation">
                    <div class="step">
                      <h6>定义</h6>
                      <p>平均自由程 λ = vF × τ</p>
                    </div>
                    
                    <div class="step">
                      <h6>计算</h6>
                      <div class="equation-box">
                        <p>λ = 1.57×10⁶ × 2.7×10⁻¹⁴</p>
                        <p><strong>λ = 4.24×10⁻⁸ m = 42.4 nm</strong></p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="atomic-spacing">
                  <h5>与原子间距比较</h5>
                  <div class="spacing-analysis">
                    <div class="step">
                      <h6>原子间距估算</h6>
                      <p>a ≈ (1/N)^(1/3) = (1/(8.5×10²⁸))^(1/3) ≈ 2.3×10⁻¹⁰ m = 0.23 nm</p>
                    </div>
                    
                    <div class="step">
                      <h6>比值</h6>
                      <div class="result-box">
                        <p><strong>λ/a ≈ 42.4/0.23 ≈ 184</strong></p>
                        <p>平均自由程约为原子间距的184倍</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="physical-meaning">
                  <h5>物理意义</h5>
                  <div class="meaning-content">
                    <ul>
                      <li><strong>长程输运：</strong>电子在发生散射前可以穿越许多原子</li>
                      <li><strong>准自由电子：</strong>支持自由电子模型的基本假设</li>
                      <li><strong>金属特性：</strong>长平均自由程是良好导电性的基础</li>
                      <li><strong>温度效应：</strong>温度升高时λ减小，电导率降低</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 第三部分：温度依赖性 -->
    <section class="temperature-dependence">
      <h2>第三部分：温度依赖性</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.5</span>
            <h3>电阻率的温度依赖</h3>
            <span class="difficulty hard">困难</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>在Drude模型框架内，分析金属电阻率随温度的变化规律，并解释实验观察到的线性关系。</p>
            </div>
            
            <div class="solution-section">
              <h4>理论分析</h4>
              
              <div class="temperature-analysis">
                <div class="resistivity-relation">
                  <h5>电阻率与散射时间</h5>
                  <div class="relation-derivation">
                    <div class="step">
                      <h6>基本关系</h6>
                      <div class="equation-box">
                        <p>ρ = 1/σ = m/(ne²τ)</p>
                      </div>
                      <p>电阻率与散射时间成反比</p>
                    </div>
                    
                    <div class="step">
                      <h6>散射机制</h6>
                      <p>金属中的主要散射机制：</p>
                      <ul>
                        <li><strong>声子散射：</strong>电子与晶格振动的相互作用</li>
                        <li><strong>杂质散射：</strong>电子与杂质原子的散射</li>
                        <li><strong>缺陷散射：</strong>电子与晶格缺陷的散射</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="matthiessen-rule">
                  <h5>马蒂森定则</h5>
                  <div class="rule-explanation">
                    <div class="step">
                      <h6>散射率叠加</h6>
                      <div class="equation-box">
                        <p>1/τ = 1/τ_ph + 1/τ_imp + 1/τ_def</p>
                      </div>
                      <p>总散射率等于各散射机制散射率之和</p>
                    </div>
                    
                    <div class="step">
                      <h6>电阻率叠加</h6>
                      <div class="equation-box">
                        <p>ρ(T) = ρ_ph(T) + ρ_imp + ρ_def</p>
                      </div>
                      <p>总电阻率等于各贡献之和</p>
                    </div>
                  </div>
                </div>
                
                <div class="phonon-scattering">
                  <h5>声子散射的温度依赖</h5>
                  <div class="phonon-analysis">
                    <div class="high-temperature">
                      <h6>高温极限（T >> ΘD）</h6>
                      <div class="high-temp-content">
                        <p>在高温下，声子数密度 ∝ T</p>
                        <div class="equation-box">
                          <p>1/τ_ph ∝ T</p>
                          <p><strong>ρ_ph(T) ∝ T</strong></p>
                        </div>
                        <p>这解释了实验观察到的线性温度依赖</p>
                      </div>
                    </div>
                    
                    <div class="low-temperature">
                      <h6>低温极限（T << ΘD）</h6>
                      <div class="low-temp-content">
                        <p>在低温下，声子数密度 ∝ T³</p>
                        <div class="equation-box">
                          <p>1/τ_ph ∝ T⁵</p>
                          <p><strong>ρ_ph(T) ∝ T⁵</strong></p>
                        </div>
                        <p>这是Bloch-Grüneisen公式的结果</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="experimental-comparison">
                  <h5>实验比较</h5>
                  <div class="comparison-content">
                    <div class="typical-behavior">
                      <h6>典型金属的电阻率</h6>
                      <div class="behavior-description">
                        <ul>
                          <li><strong>室温附近：</strong>ρ(T) ≈ ρ₀ + αT（线性关系）</li>
                          <li><strong>低温：</strong>ρ(T) ≈ ρ₀ + AT⁵（T⁵依赖）</li>
                          <li><strong>残余电阻：</strong>ρ₀由杂质和缺陷决定</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div class="temperature-coefficient">
                      <h6>温度系数</h6>
                      <div class="coefficient-table">
                        <div class="coeff-row">
                          <span class="metal-name">铜：</span>
                          <span class="coeff-value">α ≈ 4.3×10⁻³ K⁻¹</span>
                        </div>
                        <div class="coeff-row">
                          <span class="metal-name">铝：</span>
                          <span class="coeff-value">α ≈ 4.2×10⁻³ K⁻¹</span>
                        </div>
                        <div class="coeff-row">
                          <span class="metal-name">铁：</span>
                          <span class="coeff-value">α ≈ 6.5×10⁻³ K⁻¹</span>
                        </div>
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

    <!-- 第四部分：Drude模型的局限性 -->
    <section class="model-limitations">
      <h2>第四部分：Drude模型的局限性</h2>
      
      <div class="problem-set">
        <div class="problem-card">
          <div class="problem-header">
            <span class="problem-number">2.6</span>
            <h3>模型预测与实验的偏差</h3>
            <span class="difficulty medium">中等</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>分析Drude模型在预测金属性质时的主要局限性，并讨论量子力学修正的必要性。</p>
            </div>
            
            <div class="solution-section">
              <h4>局限性分析</h4>
              
              <div class="limitations-analysis">
                <div class="classical-assumptions">
                  <h5>经典假设的问题</h5>
                  <div class="assumptions-grid">
                    <div class="assumption-item">
                      <h6>经典统计</h6>
                      <div class="problem-description">
                        <p><strong>假设：</strong>电子遵循经典Maxwell-Boltzmann分布</p>
                        <p><strong>问题：</strong>电子是费米子，应遵循Fermi-Dirac统计</p>
                        <p><strong>后果：</strong>错误预测比热容和磁化率</p>
                      </div>
                    </div>
                    
                    <div class="assumption-item">
                      <h6>自由电子近似</h6>
                      <div class="problem-description">
                        <p><strong>假设：</strong>电子完全自由，不受周期势影响</p>
                        <p><strong>问题：</strong>忽略了能带结构和布里渊区效应</p>
                        <p><strong>后果：</strong>无法解释半导体和绝缘体</p>
                      </div>
                    </div>
                    
                    <div class="assumption-item">
                      <h6>简单散射机制</h6>
                      <div class="problem-description">
                        <p><strong>假设：</strong>散射后速度完全随机化</p>
                        <p><strong>问题：</strong>实际散射过程更复杂</p>
                        <p><strong>后果：</strong>输运系数预测不准确</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="specific-failures">
                  <h5>具体预测失败</h5>
                  <div class="failures-list">
                    <div class="failure-item">
                      <h6>电子比热容</h6>
                      <div class="failure-content">
                        <p><strong>Drude预测：</strong>C_e = (3/2)nk_B（与实验值相差100倍）</p>
                        <p><strong>实验观察：</strong>C_e ∝ T，且远小于预测值</p>
                        <p><strong>量子解释：</strong>只有费米面附近的电子参与热激发</p>
                      </div>
                    </div>
                    
                    <div class="failure-item">
                      <h6>霍尔效应</h6>
                      <div class="failure-content">
                        <p><strong>Drude预测：</strong>霍尔系数R_H = -1/(ne)</p>
                        <p><strong>实验观察：</strong>某些金属R_H为正值</p>
                        <p><strong>量子解释：</strong>需要考虑能带结构和空穴概念</p>
                      </div>
                    </div>
                    
                    <div class="failure-item">
                      <h6>光学性质</h6>
                      <div class="failure-content">
                        <p><strong>Drude预测：</strong>简单的频率依赖关系</p>
                        <p><strong>实验观察：</strong>复杂的光学响应</p>
                        <p><strong>量子解释：</strong>带间跃迁和等离激元效应</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="quantum-corrections">
                  <h5>量子力学修正</h5>
                  <div class="corrections-content">
                    <div class="correction-item">
                      <h6>Sommerfeld模型</h6>
                      <p>保持自由电子假设，但使用Fermi-Dirac统计</p>
                      <ul>
                        <li>正确预测电子比热容</li>
                        <li>解释泡利顺磁性</li>
                        <li>改进输运系数计算</li>
                      </ul>
                    </div>
                    
                    <div class="correction-item">
                      <h6>能带理论</h6>
                      <p>考虑周期势场中的电子运动</p>
                      <ul>
                        <li>解释金属、半导体、绝缘体的区别</li>
                        <li>预测复杂的费米面形状</li>
                        <li>理解霍尔效应的符号</li>
                      </ul>
                    </div>
                    
                    <div class="correction-item">
                      <h6>多体效应</h6>
                      <p>考虑电子-电子相互作用</p>
                      <ul>
                        <li>电子关联效应</li>
                        <li>等离激元激发</li>
                        <li>强关联系统的新奇性质</li>
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

    <!-- 练习总结 -->
    <section class="exercise-summary">
      <h2>练习总结</h2>
      
      <div class="summary-content">
        <div class="key-results">
          <h3>核心结果</h3>
          <div class="results-grid">
            <div class="result-card">
              <div class="result-header">
                <span class="result-icon">⚡</span>
                <h4>Drude电导率</h4>
              </div>
              <div class="result-content">
                <div class="formula-box">
                  <p><strong>σ = ne²τ/m</strong></p>
                </div>
                <p>电导率与载流子密度、散射时间成正比，与有效质量成反比</p>
              </div>
            </div>
            
            <div class="result-card">
              <div class="result-header">
                <span class="result-icon">🌡️</span>
                <h4>温度依赖</h4>
              </div>
              <div class="result-content">
                <div class="formula-box">
                  <p><strong>ρ(T) = ρ₀ + αT</strong></p>
                </div>
                <p>高温下电阻率与温度成线性关系</p>
              </div>
            </div>
            
            <div class="result-card">
              <div class="result-header">
                <span class="result-icon">📏</span>
                <h4>平均自由程</h4>
              </div>
              <div class="result-content">
                <div class="formula-box">
                  <p><strong>λ = v_F τ</strong></p>
                </div>
                <p>典型金属中λ >> 原子间距</p>
              </div>
            </div>
            
            <div class="result-card">
              <div class="result-header">
                <span class="result-icon">⚠️</span>
                <h4>模型局限</h4>
              </div>
              <div class="result-content">
                <p>需要量子力学修正才能准确描述金属性质</p>
              </div>
            </div>
          </div>
        </div>

        <div class="learning-outcomes">
          <h3>学习成果</h3>
          <div class="outcomes-container">
            <div class="outcome-category">
              <h4>理论理解</h4>
              <ul>
                <li>掌握Drude模型的基本假设和推导过程</li>
                <li>理解电导率的微观机制</li>
                <li>认识经典理论的局限性</li>
              </ul>
            </div>
            
            <div class="outcome-category">
              <h4>计算技能</h4>
              <ul>
                <li>能够计算金属的电导率和电阻率</li>
                <li>掌握平均自由程的估算方法</li>
                <li>理解温度对输运性质的影响</li>
              </ul>
            </div>
            
            <div class="outcome-category">
              <h4>物理洞察</h4>
              <ul>
                <li>理解载流子输运的基本图像</li>
                <li>认识散射机制的重要性</li>
                <li>体会量子效应的必要性</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="further-study">
          <h3>进一步学习</h3>
          <div class="study-directions">
            <div class="direction-item">
              <span class="direction-icon">🔬</span>
              <div class="direction-content">
                <h4>Sommerfeld模型</h4>
                <p>学习量子统计对自由电子模型的修正</p>
              </div>
            </div>
            
            <div class="direction-item">
              <span class="direction-icon">🌐</span>
              <div class="direction-content">
                <h4>能带理论</h4>
                <p>研究周期势场中电子的量子力学行为</p>
              </div>
            </div>
            
            <div class="direction-item">
              <span class="direction-icon">🔄</span>
              <div class="direction-content">
                <h4>输运现象</h4>
                <p>深入学习霍尔效应、磁阻等输运性质</p>
              </div>
            </div>
            
            <div class="direction-item">
              <span class="direction-icon">💡</span>
              <div class="direction-content">
                <h4>光学性质</h4>
                <p>探索金属的光学响应和等离激元</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_9_2',
  mounted() {
    // 添加数学公式渲染支持
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #e74c3c;
}

section {
  margin-bottom: 3rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #e74c3c;
}

h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 1rem;
}

h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.75rem;
}

h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 0.5rem;
}

h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
  color: #555;
}

/* 习题介绍 */
.exercise-introduction {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 3rem;
}

.exercise-introduction h2 {
  color: white;
  border-left-color: white;
}

.intro-content p {
  color: #f8f9fa;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.model-features {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.model-features h3 {
  color: white;
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature-content h4 {
  color: white;
  margin-bottom: 0.5rem;
}

.feature-content p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
}

/* 问题卡片 */
.problem-set {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.problem-card {
  background: white;
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.problem-header {
  background: linear-gradient(135deg, #e74c3c, #c0392b);
  color: white;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.problem-number {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.1rem;
}

.problem-header h3 {
  color: white;
  margin: 0;
  flex-grow: 1;
}

.difficulty {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
}

.difficulty.easy {
  background: #10b981;
  color: white;
}

.difficulty.medium {
  background: #f59e0b;
  color: white;
}

.difficulty.hard {
  background: #ef4444;
  color: white;
}

.problem-content {
  padding: 2rem;
}

.problem-statement {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.problem-statement p {
  margin: 0;
  color: #374151;
  font-size: 1.05rem;
}

/* 解答部分 */
.solution-section {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

/* 方程推导 */
.equation-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.physics-setup {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.setup-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.setup-content li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.motion-equation {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.equation-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.step {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.equation-box {
  background: #1a202c;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  text-align: center;
}

.equation-box.highlight {
  background: #2d3748;
  border: 2px solid #e74c3c;
}

.physical-interpretation {
  background: #e8f5e8;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #10b981;
}

.interpretation-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.interpretation-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #10b981;
}

/* 电导率推导 */
.conductivity-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.current-density,
.ohms-law {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.derivation-steps,
.ohm-derivation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.conductivity-analysis {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.analysis-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
}

.analysis-item h6 {
  color: #92400e;
  margin-bottom: 0.5rem;
}

.analysis-item p {
  margin: 0;
  color: #4a5568;
  font-size: 0.9rem;
}

/* 数值计算 */
.copper-calculation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.given-data {
  background: #e0f2fe;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #0284c7;
}

.data-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.data-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #0284c7;
}

.data-label {
  font-weight: 600;
  color: #0c4a6e;
}

.data-value {
  font-family: 'Courier New', monospace;
  color: #1e40af;
}

.calculation-steps {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.calc-step {
  margin-bottom: 1.5rem;
}

.calc-step:last-child {
  margin-bottom: 0;
}

.calculation-detail {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
}

.calculation-detail p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.result-box {
  background: #d1fae5;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #10b981;
  text-align: center;
}

.result-box p {
  margin: 0;
  font-size: 1.1rem;
  color: #065f46;
}

.comparison {
  background: #fef3c7;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
}

.comparison-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.comparison-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #f59e0b;
}

.comparison-label {
  font-weight: 600;
  color: #92400e;
}

.comparison-value {
  font-family: 'Courier New', monospace;
  color: #1e40af;
}

.error-analysis {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
}

.error-analysis h6 {
  color: #92400e;
  margin-bottom: 0.5rem;
}

.error-analysis ul {
  margin: 0;
  padding-left: 1.5rem;
}

.error-analysis li {
  margin-bottom: 0.25rem;
  color: #4a5568;
  font-size: 0.9rem;
}

/* 平均自由程计算 */
.free-path-calculation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.velocity-calculation,
.mean-free-path,
.atomic-spacing,
.physical-meaning {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.fermi-velocity,
.path-calculation,
.spacing-analysis {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.meaning-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.meaning-content li {
  margin-bottom: 0.75rem;
  color: #4a5568;
}

/* 温度依赖分析 */
.temperature-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.resistivity-relation,
.matthiessen-rule,
.phonon-scattering,
.experimental-comparison {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.relation-derivation,
.rule-explanation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.phonon-analysis {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.high-temperature,
.low-temperature {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.high-temp-content,
.low-temp-content {
  margin-top: 0.5rem;
}

.comparison-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.typical-behavior {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.behavior-description ul {
  margin: 0;
  padding-left: 1.5rem;
}

.behavior-description li {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.temperature-coefficient {
  background: #e0f2fe;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #0284c7;
}

.coefficient-table {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.coeff-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.25rem;
  border: 1px solid #0284c7;
}

.metal-name {
  font-weight: 600;
  color: #0c4a6e;
}

.coeff-value {
  font-family: 'Courier New', monospace;
  color: #1e40af;
}

/* 局限性分析 */
.limitations-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.classical-assumptions,
.specific-failures,
.quantum-corrections {
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.assumptions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.assumption-item {
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #fca5a5;
}

.assumption-item h6 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.problem-description p {
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.9rem;
}

.failures-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.failure-item {
  background: #fef2f2;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #fca5a5;
}

.failure-item h6 {
  color: #dc2626;
  margin-bottom: 1rem;
}

.failure-content p {
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.9rem;
}

.corrections-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.correction-item {
  background: #f0fdf4;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #bbf7d0;
}

.correction-item h6 {
  color: #16a34a;
  margin-bottom: 1rem;
}

.correction-item p {
  margin-bottom: 1rem;
  color: #4a5568;
}

.correction-item ul {
  margin: 0;
  padding-left: 1.5rem;
}

.correction-item li {
  margin-bottom: 0.5rem;
  color: #4a5568;
  font-size: 0.9rem;
}

/* 练习总结 */
.exercise-summary {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 2rem;
  border-radius: 1rem;
}

.exercise-summary h2 {
  color: white;
  border-left-color: white;
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.key-results {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.key-results h3 {
  color: white;
  margin-bottom: 2rem;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.result-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.result-header {
  background: rgba(255, 255, 255, 0.2);
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.result-icon {
  font-size: 1.5rem;
}

.result-header h4 {
  color: white;
  margin: 0;
}

.result-content {
  padding: 1rem;
}

.result-content .formula-box {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
  font-family: 'Times New Roman', serif;
  text-align: center;
}

.result-content p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
}

.learning-outcomes {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.learning-outcomes h3 {
  color: white;
  margin-bottom: 2rem;
}

.outcomes-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.outcome-category {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.outcome-category h4 {
  color: white;
  margin-bottom: 1rem;
}

.outcome-category ul {
  margin: 0;
  padding-left: 1.5rem;
}

.outcome-category li {
  margin-bottom: 0.5rem;
  color: #f8f9fa;
  font-size: 0.9rem;
}

.further-study {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.further-study h3 {
  color: white;
  margin-bottom: 2rem;
}

.study-directions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.direction-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.direction-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.direction-content h4 {
  color: white;
  margin-bottom: 0.5rem;
}

.direction-content p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .features-grid,
  .analysis-grid,
  .assumptions-grid,
  .results-grid,
  .outcomes-container,
  .study-directions {
    grid-template-columns: 1fr;
  }
  
  .problem-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  
  .data-row,
  .comparison-row,
  .coeff-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
}
</style>