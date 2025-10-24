<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.8.3 电子隧穿</h1>
      <div class="chapter-subtitle">Electron Tunneling</div>
    </div>

    <div class="content-sections">
      <!-- 引言 -->
      <section class="content-section">
        <h2 class="section-title">量子隧穿现象</h2>
        <div class="introduction">
          <div class="concept-overview">
            <div class="overview-card">
              <div class="card-icon">🌊</div>
              <div class="card-content">
                <h3>量子特性</h3>
                <p>电子具有波动性，可以穿透经典力学中不可逾越的势垒，这是纯粹的量子力学效应</p>
              </div>
            </div>
            
            <div class="overview-card">
              <div class="card-icon">⚡</div>
              <div class="card-content">
                <h3>能量条件</h3>
                <p>即使电子能量低于势垒高度，仍有一定概率穿透势垒，概率随势垒厚度指数衰减</p>
              </div>
            </div>
            
            <div class="overview-card">
              <div class="card-icon">🔬</div>
              <div class="card-content">
                <h3>技术应用</h3>
                <p>隧穿效应是扫描隧道显微镜、隧道二极管等现代技术的物理基础</p>
              </div>
            </div>
          </div>

          <div class="tunneling-visualization">
            <h3>隧穿过程示意</h3>
            <div class="barrier-diagram">
              <div class="energy-diagram">
                <div class="region region-1">
                  <div class="region-label">区域 I</div>
                  <div class="wave-function">ψ₁ = Ae^(ikx) + Be^(-ikx)</div>
                  <div class="energy-level">E</div>
                </div>
                
                <div class="barrier">
                  <div class="barrier-label">势垒</div>
                  <div class="barrier-height">V₀</div>
                  <div class="wave-function">ψ₂ = Ce^(κx) + De^(-κx)</div>
                </div>
                
                <div class="region region-3">
                  <div class="region-label">区域 III</div>
                  <div class="wave-function">ψ₃ = Fe^(ikx)</div>
                  <div class="energy-level">E</div>
                </div>
              </div>
              
              <div class="diagram-explanation">
                <div class="explanation-item">
                  <span class="symbol">A, B</span>
                  <span class="description">入射波和反射波振幅</span>
                </div>
                <div class="explanation-item">
                  <span class="symbol">C, D</span>
                  <span class="description">势垒内指数衰减波振幅</span>
                </div>
                <div class="explanation-item">
                  <span class="symbol">F</span>
                  <span class="description">透射波振幅</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 一维势垒隧穿 -->
      <section class="content-section">
        <h2 class="section-title">一维矩形势垒</h2>
        <div class="rectangular-barrier">
          <div class="barrier-setup">
            <h3>势垒模型</h3>
            <div class="potential-definition">
              <div class="equation-box">
                <div class="equation-title">势能函数</div>
                <div class="equation">
                  <span class="math">V(x) = { 0, x < 0 或 x > a; V₀, 0 ≤ x ≤ a }</span>
                </div>
              </div>
              
              <div class="parameters">
                <div class="param-grid">
                  <div class="param-item">
                    <span class="param-symbol">V₀</span>
                    <span class="param-desc">势垒高度</span>
                  </div>
                  <div class="param-item">
                    <span class="param-symbol">a</span>
                    <span class="param-desc">势垒宽度</span>
                  </div>
                  <div class="param-item">
                    <span class="param-symbol">E</span>
                    <span class="param-desc">电子能量 (E < V₀)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wave-functions">
            <h3>各区域波函数</h3>
            <div class="regions-analysis">
              <div class="region-analysis">
                <h4>区域 I (x < 0)</h4>
                <div class="wave-equation">
                  <div class="equation-box">
                    <span class="math">ψ₁(x) = Ae^(ik₁x) + Be^(-ik₁x)</span>
                  </div>
                  <div class="wave-parameters">
                    <div class="parameter">
                      <span class="param-label">波矢：</span>
                      <span class="math">k₁ = √(2mE)/ℏ</span>
                    </div>
                    <div class="parameter">
                      <span class="param-label">物理意义：</span>
                      <span class="description">入射波 + 反射波</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="region-analysis">
                <h4>区域 II (0 ≤ x ≤ a)</h4>
                <div class="wave-equation">
                  <div class="equation-box">
                    <span class="math">ψ₂(x) = Ce^(κx) + De^(-κx)</span>
                  </div>
                  <div class="wave-parameters">
                    <div class="parameter">
                      <span class="param-label">衰减常数：</span>
                      <span class="math">κ = √(2m(V₀-E))/ℏ</span>
                    </div>
                    <div class="parameter">
                      <span class="param-label">物理意义：</span>
                      <span class="description">指数衰减波</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="region-analysis">
                <h4>区域 III (x > a)</h4>
                <div class="wave-equation">
                  <div class="equation-box">
                    <span class="math">ψ₃(x) = Fe^(ik₁x)</span>
                  </div>
                  <div class="wave-parameters">
                    <div class="parameter">
                      <span class="param-label">波矢：</span>
                      <span class="math">k₁ = √(2mE)/ℏ</span>
                    </div>
                    <div class="parameter">
                      <span class="param-label">物理意义：</span>
                      <span class="description">透射波</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="boundary-conditions">
            <h3>边界条件</h3>
            <div class="conditions-list">
              <div class="condition-group">
                <h4>x = 0 处的连续性</h4>
                <div class="condition-equations">
                  <div class="equation-pair">
                    <div class="equation-box">
                      <span class="math">ψ₁(0) = ψ₂(0)</span>
                    </div>
                    <div class="equation-box">
                      <span class="math">ψ₁'(0) = ψ₂'(0)</span>
                    </div>
                  </div>
                  <div class="explicit-form">
                    <div class="equation-item">
                      <span class="math">A + B = C + D</span>
                    </div>
                    <div class="equation-item">
                      <span class="math">ik₁(A - B) = κ(C - D)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="condition-group">
                <h4>x = a 处的连续性</h4>
                <div class="condition-equations">
                  <div class="equation-pair">
                    <div class="equation-box">
                      <span class="math">ψ₂(a) = ψ₃(a)</span>
                    </div>
                    <div class="equation-box">
                      <span class="math">ψ₂'(a) = ψ₃'(a)</span>
                    </div>
                  </div>
                  <div class="explicit-form">
                    <div class="equation-item">
                      <span class="math">Ce^(κa) + De^(-κa) = Fe^(ik₁a)</span>
                    </div>
                    <div class="equation-item">
                      <span class="math">κ(Ce^(κa) - De^(-κa)) = ik₁Fe^(ik₁a)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 透射系数计算 -->
      <section class="content-section">
        <h2 class="section-title">透射系数推导</h2>
        <div class="transmission-derivation">
          <div class="coefficient-definition">
            <h3>透射与反射系数</h3>
            <div class="coefficients-grid">
              <div class="coefficient-card">
                <div class="coeff-header">
                  <div class="coeff-icon">➡️</div>
                  <h4>透射系数</h4>
                </div>
                <div class="coeff-content">
                  <div class="equation-box">
                    <span class="math">T = |F|²/|A|²</span>
                  </div>
                  <div class="physical-meaning">
                    <p>透射电流密度与入射电流密度之比</p>
                  </div>
                </div>
              </div>

              <div class="coefficient-card">
                <div class="coeff-header">
                  <div class="coeff-icon">⬅️</div>
                  <h4>反射系数</h4>
                </div>
                <div class="coeff-content">
                  <div class="equation-box">
                    <span class="math">R = |B|²/|A|²</span>
                  </div>
                  <div class="physical-meaning">
                    <p>反射电流密度与入射电流密度之比</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="conservation-law">
              <div class="conservation-box">
                <div class="conservation-title">概率守恒</div>
                <div class="equation-box">
                  <span class="math">T + R = 1</span>
                </div>
              </div>
            </div>
          </div>

          <div class="calculation-steps">
            <h3>计算步骤</h3>
            <div class="step-by-step">
              <div class="calc-step">
                <div class="step-header">
                  <span class="step-number">1</span>
                  <h4>求解边界条件方程组</h4>
                </div>
                <div class="step-content">
                  <p>从四个边界条件方程中消去B, C, D，得到F与A的关系：</p>
                  <div class="matrix-equation">
                    <div class="equation-box">
                      <span class="math">
                        [1  1  -1  -1][A]   [0]<br>
                        [ik₁ -ik₁ -κ  κ][B] = [0]<br>
                        [0  0  e^κa e^-κa][C]   [Fe^ik₁a]<br>
                        [0  0  κe^κa -κe^-κa][D]   [ik₁Fe^ik₁a]
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="calc-step">
                <div class="step-header">
                  <span class="step-number">2</span>
                  <h4>矩阵求解</h4>
                </div>
                <div class="step-content">
                  <p>通过矩阵运算，得到透射振幅：</p>
                  <div class="result-equation">
                    <div class="equation-box primary">
                      <span class="math">F/A = 4ik₁κ / [(k₁² + κ²)sinh(κa) + 2ik₁κcosh(κa)]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="calc-step">
                <div class="step-header">
                  <span class="step-number">3</span>
                  <h4>透射系数表达式</h4>
                </div>
                <div class="step-content">
                  <p>计算|F/A|²得到透射系数：</p>
                  <div class="final-result">
                    <div class="equation-box highlight">
                      <div class="equation-title">精确表达式</div>
                      <span class="math">T = 1 / [1 + (V₀²sinh²(κa))/(4E(V₀-E))]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="approximations">
            <h3>近似表达式</h3>
            <div class="approx-cases">
              <div class="approx-case">
                <h4>厚势垒近似 (κa ≫ 1)</h4>
                <div class="approx-content">
                  <div class="condition">
                    <span class="condition-label">条件：</span>
                    <span class="math">a ≫ ℏ/√(2m(V₀-E))</span>
                  </div>
                  <div class="equation-box">
                    <span class="math">T ≈ 16E(V₀-E)/V₀² · e^(-2κa)</span>
                  </div>
                  <div class="interpretation">
                    <p><strong>物理意义：</strong>透射概率随势垒厚度指数衰减</p>
                  </div>
                </div>
              </div>

              <div class="approx-case">
                <h4>薄势垒近似 (κa ≪ 1)</h4>
                <div class="approx-content">
                  <div class="condition">
                    <span class="condition-label">条件：</span>
                    <span class="math">a ≪ ℏ/√(2m(V₀-E))</span>
                  </div>
                  <div class="equation-box">
                    <span class="math">T ≈ 1 - (V₀²a²)/(4ℏ²) · 2m(V₀-E)</span>
                  </div>
                  <div class="interpretation">
                    <p><strong>物理意义：</strong>透射概率接近1，势垒几乎透明</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WKB近似 -->
      <section class="content-section">
        <h2 class="section-title">WKB近似方法</h2>
        <div class="wkb-method">
          <div class="wkb-introduction">
            <h3>WKB近似的适用性</h3>
            <div class="applicability">
              <div class="condition-list">
                <div class="condition-item">
                  <div class="condition-icon">✓</div>
                  <div class="condition-text">
                    <strong>缓变势：</strong>势能在德布罗意波长尺度上变化缓慢
                  </div>
                </div>
                
                <div class="condition-item">
                  <div class="condition-icon">✓</div>
                  <div class="condition-text">
                    <strong>半经典条件：</strong>|dλ/dx| ≪ 2π/λ，其中λ是局域德布罗意波长
                  </div>
                </div>
                
                <div class="condition-item">
                  <div class="condition-icon">✓</div>
                  <div class="condition-text">
                    <strong>任意势垒形状：</strong>不限于矩形势垒，可处理任意形状
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wkb-formula">
            <h3>WKB透射公式</h3>
            <div class="formula-derivation">
              <div class="step-sequence">
                <div class="derivation-step">
                  <h4>步骤1：局域动量</h4>
                  <div class="step-content">
                    <p>定义局域动量：</p>
                    <div class="equation-box">
                      <span class="math">p(x) = √(2m[E - V(x)])</span>
                    </div>
                    <div class="note">
                      <p><strong>注意：</strong>在经典禁区E < V(x)时，p(x)为纯虚数</p>
                    </div>
                  </div>
                </div>

                <div class="derivation-step">
                  <h4>步骤2：作用量积分</h4>
                  <div class="step-content">
                    <p>计算穿过势垒的作用量：</p>
                    <div class="equation-box">
                      <span class="math">S = ∫_{x₁}^{x₂} |p(x)| dx = ∫_{x₁}^{x₂} √(2m[V(x) - E]) dx</span>
                    </div>
                    <div class="integration-limits">
                      <div class="limit-item">
                        <span class="limit-label">x₁, x₂：</span>
                        <span class="limit-desc">经典转折点，满足V(x₁) = V(x₂) = E</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="derivation-step">
                  <h4>步骤3：透射系数</h4>
                  <div class="step-content">
                    <p>WKB透射公式：</p>
                    <div class="equation-box highlight">
                      <div class="equation-title">Gamow公式</div>
                      <span class="math">T ≈ e^(-2S/ℏ) = exp(-2∫_{x₁}^{x₂} √(2m[V(x) - E])/ℏ dx)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="wkb-examples">
            <h3>WKB应用实例</h3>
            <div class="examples-grid">
              <div class="example-card">
                <div class="example-header">
                  <div class="example-icon">📐</div>
                  <h4>三角势垒</h4>
                </div>
                <div class="example-content">
                  <div class="potential-form">
                    <span class="math">V(x) = V₀(1 - x/a), 0 ≤ x ≤ a</span>
                  </div>
                  <div class="wkb-result">
                    <div class="equation-box">
                      <span class="math">T ≈ exp(-4√(2mV₀a³)/(3ℏ√E))</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="example-card">
                <div class="example-header">
                  <div class="example-icon">🌊</div>
                  <h4>抛物势垒</h4>
                </div>
                <div class="example-content">
                  <div class="potential-form">
                    <span class="math">V(x) = V₀ - ½mω²x²</span>
                  </div>
                  <div class="wkb-result">
                    <div class="equation-box">
                      <span class="math">T ≈ exp(-π(V₀-E)/(ℏω))</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="example-card">
                <div class="example-header">
                  <div class="example-icon">⚡</div>
                  <h4>库仑势垒</h4>
                </div>
                <div class="example-content">
                  <div class="potential-form">
                    <span class="math">V(x) = ke²/x</span>
                  </div>
                  <div class="wkb-result">
                    <div class="equation-box">
                      <span class="math">T ≈ exp(-2πη), η = ke²/(ℏv)</span>
                    </div>
                  </div>
                  <div class="application">
                    <p><strong>应用：</strong>核聚变、α衰变</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 实验应用 -->
      <section class="content-section">
        <h2 class="section-title">实验应用与技术</h2>
        <div class="experimental-applications">
          <div class="stm-section">
            <h3>扫描隧道显微镜 (STM)</h3>
            <div class="stm-content">
              <div class="stm-principle">
                <h4>工作原理</h4>
                <div class="principle-description">
                  <div class="principle-steps">
                    <div class="principle-step">
                      <div class="step-icon">🔍</div>
                      <div class="step-content">
                        <h5>隧道结构</h5>
                        <p>金属针尖与样品表面形成纳米级间隙，构成隧道结</p>
                      </div>
                    </div>
                    
                    <div class="principle-step">
                      <div class="step-icon">⚡</div>
                      <div class="step-content">
                        <h5>偏压驱动</h5>
                        <p>在针尖和样品间施加小偏压，驱动电子隧穿</p>
                      </div>
                    </div>
                    
                    <div class="principle-step">
                      <div class="step-icon">📊</div>
                      <div class="step-content">
                        <h5>电流检测</h5>
                        <p>隧道电流对间距极其敏感，实现原子级分辨率</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="stm-physics">
                <h4>物理机制</h4>
                <div class="physics-analysis">
                  <div class="tunneling-current">
                    <div class="equation-box">
                      <div class="equation-title">隧道电流</div>
                      <span class="math">I ∝ V · ρ_s(E_F) · ρ_t(E_F) · e^(-2κd)</span>
                    </div>
                    
                    <div class="parameter-explanation">
                      <div class="param-grid">
                        <div class="param-item">
                          <span class="param-symbol">V</span>
                          <span class="param-desc">偏压</span>
                        </div>
                        <div class="param-item">
                          <span class="param-symbol">ρ_s, ρ_t</span>
                          <span class="param-desc">样品和针尖的态密度</span>
                        </div>
                        <div class="param-item">
                          <span class="param-symbol">κ</span>
                          <span class="param-desc">衰减常数 ≈ √(2mφ)/ℏ</span>
                        </div>
                        <div class="param-item">
                          <span class="param-symbol">d</span>
                          <span class="param-desc">针尖-样品间距</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="sensitivity-analysis">
                    <div class="sensitivity-box">
                      <div class="sensitivity-title">距离敏感性</div>
                      <div class="equation-box">
                        <span class="math">dI/I = -2κ · dd ≈ -10 · dd/Å</span>
                      </div>
                      <div class="sensitivity-note">
                        <p>间距变化1Å，电流变化约一个数量级</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="stm-capabilities">
                <h4>技术指标</h4>
                <div class="capabilities-grid">
                  <div class="capability-item">
                    <div class="capability-icon">📏</div>
                    <div class="capability-content">
                      <h5>横向分辨率</h5>
                      <div class="spec-value">< 1 Å</div>
                      <div class="spec-note">可分辨单个原子</div>
                    </div>
                  </div>
                  
                  <div class="capability-item">
                    <div class="capability-icon">📐</div>
                    <div class="capability-content">
                      <h5>纵向分辨率</h5>
                      <div class="spec-value">< 0.1 Å</div>
                      <div class="spec-note">检测原子台阶</div>
                    </div>
                  </div>
                  
                  <div class="capability-item">
                    <div class="capability-icon">🔬</div>
                    <div class="capability-content">
                      <h5>工作环境</h5>
                      <div class="spec-value">UHV, 低温</div>
                      <div class="spec-note">减少干扰和漂移</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="tunnel-devices">
            <h3>隧道器件</h3>
            <div class="devices-grid">
              <div class="device-card">
                <div class="device-header">
                  <div class="device-icon">🔌</div>
                  <h4>隧道二极管</h4>
                </div>
                <div class="device-content">
                  <div class="device-structure">
                    <p><strong>结构：</strong>p⁺-n⁺重掺杂结</p>
                    <p><strong>特性：</strong>负阻特性，高频应用</p>
                  </div>
                  <div class="iv-characteristic">
                    <div class="equation-box">
                      <span class="math">I = I₀[e^(eV/kT) - 1] + I_tunnel</span>
                    </div>
                  </div>
                  <div class="applications">
                    <p><strong>应用：</strong>高频振荡器、快速开关</p>
                  </div>
                </div>
              </div>

              <div class="device-card">
                <div class="device-header">
                  <div class="device-icon">🧊</div>
                  <h4>约瑟夫森结</h4>
                </div>
                <div class="device-content">
                  <div class="device-structure">
                    <p><strong>结构：</strong>超导体-绝缘体-超导体</p>
                    <p><strong>特性：</strong>库珀对隧穿，零电阻</p>
                  </div>
                  <div class="josephson-equations">
                    <div class="equation-box">
                      <span class="math">I = I_c sin(φ)</span>
                    </div>
                    <div class="equation-box">
                      <span class="math">V = (ℏ/2e)(dφ/dt)</span>
                    </div>
                  </div>
                  <div class="applications">
                    <p><strong>应用：</strong>SQUID磁强计、量子比特</p>
                  </div>
                </div>
              </div>

              <div class="device-card">
                <div class="device-header">
                  <div class="device-icon">🔋</div>
                  <h4>共振隧穿二极管</h4>
                </div>
                <div class="device-content">
                  <div class="device-structure">
                    <p><strong>结构：</strong>双势垒量子阱</p>
                    <p><strong>特性：</strong>共振隧穿，多峰I-V特性</p>
                  </div>
                  <div class="resonance-condition">
                    <div class="equation-box">
                      <span class="math">E = E_n = (n²π²ℏ²)/(2mL²)</span>
                    </div>
                  </div>
                  <div class="applications">
                    <p><strong>应用：</strong>高速逻辑器件、太赫兹源</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quantum-applications">
            <h3>量子技术应用</h3>
            <div class="quantum-tech">
              <div class="tech-category">
                <h4>量子计算</h4>
                <div class="tech-items">
                  <div class="tech-item">
                    <div class="tech-icon">🔬</div>
                    <div class="tech-content">
                      <h5>量子点</h5>
                      <p>利用隧穿效应控制单电子，实现量子比特操作</p>
                    </div>
                  </div>
                  
                  <div class="tech-item">
                    <div class="tech-icon">🌀</div>
                    <div class="tech-content">
                      <h5>超导量子比特</h5>
                      <p>约瑟夫森结构成的人工原子，相位和电荷量子化</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="tech-category">
                <h4>精密测量</h4>
                <div class="tech-items">
                  <div class="tech-item">
                    <div class="tech-icon">🧭</div>
                    <div class="tech-content">
                      <h5>SQUID</h5>
                      <p>基于约瑟夫森效应的超高灵敏度磁强计</p>
                    </div>
                  </div>
                  
                  <div class="tech-item">
                    <div class="tech-icon">⚖️</div>
                    <div class="tech-content">
                      <h5>单电子晶体管</h5>
                      <p>利用库仑阻塞和隧穿，实现单电子精确控制</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 理论拓展 -->
      <section class="content-section">
        <h2 class="section-title">理论拓展与前沿</h2>
        <div class="theoretical-extensions">
          <div class="many-body-effects">
            <h3>多体效应</h3>
            <div class="many-body-content">
              <div class="effect-item">
                <h4>库仑相互作用</h4>
                <div class="effect-description">
                  <p>在小尺寸器件中，电子间库仑相互作用不可忽略：</p>
                  <div class="equation-box">
                    <span class="math">E_C = e²/(2C) ≫ kT</span>
                  </div>
                  <div class="consequence">
                    <p><strong>结果：</strong>库仑阻塞现象，单电子隧穿</p>
                  </div>
                </div>
              </div>

              <div class="effect-item">
                <h4>自旋相关隧穿</h4>
                <div class="effect-description">
                  <p>考虑电子自旋时，隧穿概率依赖于自旋取向：</p>
                  <div class="equation-box">
                    <span class="math">T_↑ ≠ T_↓</span>
                  </div>
                  <div class="consequence">
                    <p><strong>应用：</strong>自旋电子学，磁隧道结</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quantum-coherence">
            <h3>量子相干效应</h3>
            <div class="coherence-effects">
              <div class="coherence-item">
                <h4>相位相干长度</h4>
                <div class="coherence-content">
                  <div class="length-definition">
                    <div class="equation-box">
                      <span class="math">L_φ = √(Dτ_φ)</span>
                    </div>
                    <div class="parameter-explanation">
                      <div class="param-item">
                        <span class="param-symbol">D</span>
                        <span class="param-desc">扩散常数</span>
                      </div>
                      <div class="param-item">
                        <span class="param-symbol">τ_φ</span>
                        <span class="param-desc">相位相干时间</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="temperature-dependence">
                    <p><strong>温度依赖：</strong></p>
                    <div class="equation-box">
                      <span class="math">τ_φ ∝ T^{-p}, p = 1-3</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="coherence-item">
                <h4>量子干涉</h4>
                <div class="coherence-content">
                  <div class="interference-types">
                    <div class="interference-type">
                      <h5>Aharonov-Bohm效应</h5>
                      <p>磁通量子化导致的相位差：</p>
                      <div class="equation-box">
                        <span class="math">Δφ = 2πΦ/Φ₀</span>
                      </div>
                    </div>
                    
                    <div class="interference-type">
                      <h5>弱局域化</h5>
                      <p>时间反演对称性破缺的量子修正：</p>
                      <div class="equation-box">
                        <span class="math">Δσ = -(e²/2π²ℏ)ln(L_φ/l)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="frontier-topics">
            <h3>前沿研究方向</h3>
            <div class="frontier-grid">
              <div class="frontier-card">
                <div class="frontier-header">
                  <div class="frontier-icon">🌌</div>
                  <h4>拓扑隧穿</h4>
                </div>
                <div class="frontier-content">
                  <p>拓扑绝缘体表面态的隧穿，自旋-动量锁定效应</p>
                  <div class="key-concept">
                    <strong>关键：</strong>受拓扑保护的边界态
                  </div>
                </div>
              </div>

              <div class="frontier-card">
                <div class="frontier-header">
                  <div class="frontier-icon">🔄</div>
                  <h4>马约拉纳费米子</h4>
                </div>
                <div class="frontier-content">
                  <p>超导-半导体异质结中的马约拉纳模式隧穿</p>
                  <div class="key-concept">
                    <strong>应用：</strong>拓扑量子计算
                  </div>
                </div>
              </div>

              <div class="frontier-card">
                <div class="frontier-header">
                  <div class="frontier-icon">⚡</div>
                  <h4>光辅助隧穿</h4>
                </div>
                <div class="frontier-content">
                  <p>强激光场下的多光子隧穿过程</p>
                  <div class="key-concept">
                    <strong>特点：</strong>非线性、非微扰效应
                  </div>
                </div>
              </div>

              <div class="frontier-card">
                <div class="frontier-header">
                  <div class="frontier-icon">🌊</div>
                  <h4>量子隧穿时间</h4>
                </div>
                <div class="frontier-content">
                  <p>隧穿过程的时间尺度，阿秒物理学</p>
                  <div class="key-concept">
                    <strong>争议：</strong>隧穿是瞬时的吗？
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
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  font-style: italic;
}

.content-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
}

.introduction {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.concept-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.overview-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.card-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.card-content h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-content p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.tunneling-visualization {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid #3b82f6;
}

.tunneling-visualization h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.barrier-diagram {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.energy-diagram {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  background: white;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.region, .barrier {
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
}

.region {
  background: #f0f9ff;
  border: 2px solid #0ea5e9;
}

.barrier {
  background: #fef3c7;
  border: 2px solid #f59e0b;
}

.region-label, .barrier-label {
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.wave-function {
  font-family: 'Times New Roman', serif;
  font-style: italic;
  color: #2563eb;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.energy-level, .barrier-height {
  font-weight: bold;
  color: #dc2626;
}

.diagram-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.explanation-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.symbol {
  font-family: 'Times New Roman', serif;
  font-style: italic;
  font-weight: bold;
  color: #2563eb;
  min-width: 40px;
}

.description {
  color: #4a5568;
  font-size: 0.85rem;
}

.rectangular-barrier {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.barrier-setup {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.barrier-setup h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.equation-box {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid #e2e8f0;
  text-align: center;
  margin: 1rem 0;
}

.equation-box.primary {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #dbeafe 0%, #f0f9ff 100%);
}

.equation-box.highlight {
  border-color: #10b981;
  background: linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%);
}

.equation-title {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.equation {
  font-family: 'Times New Roman', serif;
  font-size: 1.2rem;
  color: #1e293b;
  font-style: italic;
}

.math {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #1e293b;
  font-style: italic;
}

.parameters {
  margin-top: 1.5rem;
}

.param-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.param-item {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem;
  background: white;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
}

.param-symbol {
  font-family: 'Times New Roman', serif;
  font-style: italic;
  font-weight: bold;
  color: #2563eb;
  min-width: 30px;
}

.param-desc {
  color: #4a5568;
  font-size: 0.85rem;
}

.wave-functions {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.wave-functions h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.regions-analysis {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.region-analysis {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.region-analysis h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.wave-equation {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.wave-parameters {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.parameter {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.param-label {
  color: #2563eb;
  font-weight: 600;
  min-width: 80px;
  font-size: 0.9rem;
}

.description {
  color: #4a5568;
  font-size: 0.85rem;
}

.boundary-conditions {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.boundary-conditions h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.conditions-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.condition-group {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.condition-group h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.condition-equations {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.equation-pair {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.explicit-form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.equation-item {
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-align: center;
  font-family: 'Times New Roman', serif;
  font-style: italic;
  color: #1e293b;
}

.transmission-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.coefficient-definition {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.coefficient-definition h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.coefficients-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.coefficient-card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.coeff-header {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.coeff-icon {
  font-size: 1.5rem;
}

.coeff-header h4 {
  margin: 0;
  font-weight: 600;
}

.coeff-content {
  padding: 1rem;
}

.physical-meaning {
  margin-top: 1rem;
}

.physical-meaning p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.conservation-law {
  text-align: center;
}

.conservation-box {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
}

.conservation-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.calculation-steps {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.calculation-steps h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.step-by-step {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.calc-step {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.step-number {
  width: 32px;
  height: 32px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-header h4 {
  color: #1e293b;
  font-weight: 600;
  margin: 0;
}

.step-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.matrix-equation {
  background: #f1f5f9;
  padding: 1rem;
  border-radius: 0.375rem;
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  overflow-x: auto;
}

.result-equation,
.final-result {
  margin-top: 1rem;
}

.approximations {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.approximations h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.approx-cases {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.approx-case {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.approx-case h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.approx-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.condition {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.condition-label {
  color: #2563eb;
  font-weight: 600;
  min-width: 60px;
}

.interpretation {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 0.375rem;
  border: 1px solid #f59e0b;
}

.interpretation p {
  color: #92400e;
  margin: 0;
  font-size: 0.9rem;
}

.wkb-method {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.wkb-introduction {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.wkb-introduction h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.applicability {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.condition-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.condition-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.condition-icon {
  color: #10b981;
  font-weight: bold;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.condition-text {
  color: #4a5568;
  font-size: 0.9rem;
}

.condition-text strong {
  color: #1e293b;
}

.wkb-formula {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px solid #3b82f6;
}

.wkb-formula h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.formula-derivation {
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.step-sequence {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.derivation-step {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.derivation-step h4 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.step-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.note {
  background: #fef3c7;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #f59e0b;
  margin-top: 1rem;
}

.note p {
  color: #92400e;
  margin: 0;
  font-size: 0.85rem;
}

.integration-limits {
  margin-top: 1rem;
}

.limit-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.limit-label {
  color: #2563eb;
  font-weight: 600;
  min-width: 80px;
}

.limit-desc {
  color: #4a5568;
  font-size: 0.85rem;
}

.wkb-examples {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.wkb-examples h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.example-card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.example-header {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.example-icon {
  font-size: 1.5rem;
}

.example-header h4 {
  margin: 0;
  font-weight: 600;
}

.example-content {
  padding: 1rem;
}

.potential-form {
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-align: center;
  font-family: 'Times New Roman', serif;
  font-style: italic;
  color: #1e293b;
  margin-bottom: 1rem;
}

.wkb-result {
  margin-bottom: 1rem;
}

.application {
  background: #fef3c7;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #f59e0b;
}

.application p {
  color: #92400e;
  margin: 0;
  font-size: 0.85rem;
}

.experimental-applications {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.stm-section {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.stm-section h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
}

.stm-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stm-principle {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.stm-principle h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.principle-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.principle-step {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.step-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.step-content h5 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.step-content p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.stm-physics {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.stm-physics h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.physics-analysis {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tunneling-current {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.parameter-explanation {
  margin-top: 1rem;
}

.sensitivity-analysis {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
}

.sensitivity-box {
  text-align: center;
}

.sensitivity-title {
  color: #92400e;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.sensitivity-note {
  margin-top: 0.5rem;
}

.sensitivity-note p {
  color: #92400e;
  margin: 0;
  font-size: 0.85rem;
}

.stm-capabilities {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.stm-capabilities h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.capabilities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.capability-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f0fdf4;
  border-radius: 0.5rem;
  border: 1px solid #bbf7d0;
}

.capability-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.capability-content h5 {
  color: #166534;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.spec-value {
  color: #15803d;
  font-weight: bold;
  margin-bottom: 0.25rem;
}

.spec-note {
  color: #15803d;
  font-size: 0.8rem;
}

.tunnel-devices {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.tunnel-devices h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.devices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.device-card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.device-header {
  background: linear-gradient(135deg, #7c3aed, #5b21b6);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.device-icon {
  font-size: 1.5rem;
}

.device-header h4 {
  margin: 0;
  font-weight: 600;
}

.device-content {
  padding: 1rem;
}

.device-structure {
  margin-bottom: 1rem;
}

.device-structure p {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.iv-characteristic,
.josephson-equations,
.resonance-condition {
  margin: 1rem 0;
}

.applications {
  background: #f0fdf4;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #bbf7d0;
}

.applications p {
  color: #166534;
  margin: 0;
  font-size: 0.85rem;
}

.quantum-applications {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.quantum-applications h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.quantum-tech {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tech-category {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.tech-category h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.tech-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.tech-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tech-content h5 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tech-content p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.theoretical-extensions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.many-body-effects {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.many-body-effects h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.many-body-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.effect-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.effect-item h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.effect-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.consequence {
  background: #fef3c7;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #f59e0b;
  margin-top: 1rem;
}

.consequence p {
  color: #92400e;
  margin: 0;
  font-size: 0.85rem;
}

.quantum-coherence {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.quantum-coherence h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.coherence-effects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.coherence-item {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.coherence-item h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.coherence-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.length-definition {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.temperature-dependence {
  background: #fef3c7;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #f59e0b;
}

.temperature-dependence p {
  color: #92400e;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.interference-types {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.interference-type {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.interference-type h5 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.interference-type p {
  color: #4a5568;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.frontier-topics {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.frontier-topics h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.frontier-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.frontier-card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.frontier-header {
  background: linear-gradient(135deg, #ec4899, #be185d);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.frontier-icon {
  font-size: 1.5rem;
}

.frontier-header h4 {
  margin: 0;
  font-weight: 600;
}

.frontier-content {
  padding: 1rem;
}

.frontier-content p {
  color: #4a5568;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.key-concept {
  background: #fef3c7;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #f59e0b;
  color: #92400e;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-overview,
  .energy-diagram,
  .equation-pair,
  .coefficients-grid,
  .param-grid,
  .examples-grid,
  .devices-grid,
  .capabilities-grid,
  .frontier-grid {
    grid-template-columns: 1fr;
  }
  
  .diagram-explanation {
    grid-template-columns: 1fr;
  }
}
</style>