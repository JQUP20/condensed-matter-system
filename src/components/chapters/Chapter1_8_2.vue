<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.8.2 半经典方程的证明</h1>
      <div class="chapter-subtitle">Derivation of Semiclassical Equations</div>
    </div>

    <div class="content-sections">
      <!-- 引言 -->
      <section class="content-section">
        <h2 class="section-title">引言与背景</h2>
        <div class="introduction">
          <div class="concept-overview">
            <div class="overview-card">
              <div class="card-icon">🌊</div>
              <div class="card-content">
                <h3>半经典近似</h3>
                <p>将量子力学的波包动力学与经典力学相结合，在特定条件下得到经典运动方程的量子修正</p>
              </div>
            </div>
            
            <div class="overview-card">
              <div class="card-icon">📐</div>
              <div class="card-content">
                <h3>适用条件</h3>
                <p>当德布罗意波长远小于系统特征长度尺度时，半经典近似成立</p>
              </div>
            </div>
            
            <div class="overview-card">
              <div class="card-icon">⚡</div>
              <div class="card-content">
                <h3>物理意义</h3>
                <p>描述电子在外场中的运动，包括电场、磁场以及晶格周期势的影响</p>
              </div>
            </div>
          </div>

          <div class="key-equations">
            <h3>核心方程预览</h3>
            <div class="equation-preview">
              <div class="equation-item">
                <div class="equation-label">位置演化</div>
                <div class="equation-formula">
                  <span class="math">ṙ = (1/ℏ) ∇_k ε(k)</span>
                </div>
              </div>
              
              <div class="equation-item">
                <div class="equation-label">动量演化</div>
                <div class="equation-formula">
                  <span class="math">ℏk̇ = -e(E + ṙ × B)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 量子力学基础 -->
      <section class="content-section">
        <h2 class="section-title">量子力学出发点</h2>
        <div class="quantum-foundation">
          <div class="foundation-step">
            <h3>1. 薛定谔方程</h3>
            <div class="step-content">
              <div class="equation-box">
                <div class="equation-title">含时薛定谔方程</div>
                <div class="equation">
                  <span class="math">iℏ ∂ψ/∂t = Ĥψ</span>
                </div>
              </div>
              
              <div class="explanation">
                <p>其中哈密顿算符包含动能和势能项：</p>
                <div class="sub-equation">
                  <span class="math">Ĥ = p̂²/(2m) + V(r̂) + eφ(r̂,t) - eÂ(r̂,t)·p̂/m</span>
                </div>
              </div>
            </div>
          </div>

          <div class="foundation-step">
            <h3>2. 波包假设</h3>
            <div class="step-content">
              <div class="wavepacket-description">
                <p>考虑一个局域化的波包，其形式为：</p>
                <div class="equation-box">
                  <div class="equation">
                    <span class="math">ψ(r,t) = A(r,t) e^{iS(r,t)/ℏ}</span>
                  </div>
                </div>
                
                <div class="parameter-explanation">
                  <div class="param-item">
                    <span class="param-symbol">A(r,t)</span>
                    <span class="param-desc">振幅函数，变化缓慢</span>
                  </div>
                  <div class="param-item">
                    <span class="param-symbol">S(r,t)</span>
                    <span class="param-desc">相位函数，变化快速</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="foundation-step">
            <h3>3. 局域动量定义</h3>
            <div class="step-content">
              <div class="momentum-definition">
                <p>局域动量定义为相位的梯度：</p>
                <div class="equation-box">
                  <div class="equation">
                    <span class="math">p(r,t) = ∇S(r,t)</span>
                  </div>
                </div>
                
                <div class="physical-meaning">
                  <p><strong>物理意义：</strong>这给出了波包中心处的经典动量</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WKB近似 -->
      <section class="content-section">
        <h2 class="section-title">WKB近似方法</h2>
        <div class="wkb-derivation">
          <div class="derivation-step">
            <h3>步骤1：代入薛定谔方程</h3>
            <div class="step-detail">
              <p>将波包形式代入薛定谔方程：</p>
              <div class="equation-sequence">
                <div class="equation-item">
                  <div class="equation-label">代入后得到</div>
                  <div class="equation-box">
                    <span class="math">iℏ[∂A/∂t + (i/ℏ)A∂S/∂t] e^{iS/ℏ} = Ĥ[A e^{iS/ℏ}]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <h3>步骤2：哈密顿算符作用</h3>
            <div class="step-detail">
              <p>计算动能项的贡献：</p>
              <div class="calculation-box">
                <div class="calc-step">
                  <span class="step-label">∇操作：</span>
                  <span class="math">∇ψ = [∇A + (i/ℏ)A∇S] e^{iS/ℏ}</span>
                </div>
                
                <div class="calc-step">
                  <span class="step-label">∇²操作：</span>
                  <span class="math">∇²ψ = [∇²A + (2i/ℏ)∇A·∇S + (i/ℏ)A∇²S - (A/ℏ²)|∇S|²] e^{iS/ℏ}</span>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <h3>步骤3：ℏ的幂次展开</h3>
            <div class="step-detail">
              <p>按照ℏ的不同幂次收集项：</p>
              <div class="power-expansion">
                <div class="power-term">
                  <div class="power-label">ℏ⁰项 (经典极限)</div>
                  <div class="equation-box">
                    <span class="math">∂S/∂t + |∇S|²/(2m) + V + eφ = 0</span>
                  </div>
                  <div class="term-note">这是经典的Hamilton-Jacobi方程</div>
                </div>
                
                <div class="power-term">
                  <div class="power-label">ℏ¹项 (半经典修正)</div>
                  <div class="equation-box">
                    <span class="math">∂A/∂t + (1/m)∇S·∇A + (A/2m)∇²S = 0</span>
                  </div>
                  <div class="term-note">这给出振幅的演化方程</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 经典轨道方程 -->
      <section class="content-section">
        <h2 class="section-title">经典轨道方程推导</h2>
        <div class="trajectory-derivation">
          <div class="derivation-block">
            <h3>Hamilton-Jacobi方程分析</h3>
            <div class="hj-analysis">
              <div class="equation-interpretation">
                <p>从Hamilton-Jacobi方程出发：</p>
                <div class="equation-box primary">
                  <span class="math">∂S/∂t + H(r, ∇S, t) = 0</span>
                </div>
                
                <p>其中哈密顿函数为：</p>
                <div class="equation-box">
                  <span class="math">H = |p - eA|²/(2m) + V + eφ</span>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-block">
            <h3>正则方程推导</h3>
            <div class="canonical-equations">
              <div class="equation-pair">
                <div class="equation-group">
                  <h4>位置演化方程</h4>
                  <div class="derivation-steps">
                    <div class="step">
                      <span class="step-num">1</span>
                      <div class="step-content">
                        <span class="math">ṙ = ∂H/∂p = (p - eA)/m</span>
                      </div>
                    </div>
                    
                    <div class="step">
                      <span class="step-num">2</span>
                      <div class="step-content">
                        <span class="math">由于 p = ∇S，得到：</span>
                      </div>
                    </div>
                    
                    <div class="step">
                      <span class="step-num">3</span>
                      <div class="step-content">
                        <div class="final-equation">
                          <span class="math">ṙ = (∇S - eA)/m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="equation-group">
                  <h4>动量演化方程</h4>
                  <div class="derivation-steps">
                    <div class="step">
                      <span class="step-num">1</span>
                      <div class="step-content">
                        <span class="math">ṗ = -∂H/∂r</span>
                      </div>
                    </div>
                    
                    <div class="step">
                      <span class="step-num">2</span>
                      <div class="step-content">
                        <span class="math">= -∇V - e∇φ + e(ṙ·∇)A</span>
                      </div>
                    </div>
                    
                    <div class="step">
                      <span class="step-num">3</span>
                      <div class="step-content">
                        <div class="final-equation">
                          <span class="math">ṗ = -e(E + ṙ × B)</span>
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

      <!-- 晶体中的应用 -->
      <section class="content-section">
        <h2 class="section-title">晶体中的半经典方程</h2>
        <div class="crystal-application">
          <div class="bloch-context">
            <h3>Bloch电子的半经典动力学</h3>
            <div class="bloch-description">
              <p>在周期性晶格中，电子的波函数具有Bloch形式：</p>
              <div class="equation-box">
                <span class="math">ψ_{nk}(r) = u_{nk}(r) e^{ik·r}</span>
              </div>
              
              <div class="bloch-properties">
                <div class="property-item">
                  <h4>能带色散关系</h4>
                  <p>电子能量成为k的函数：<span class="math">ε_n(k)</span></p>
                </div>
                
                <div class="property-item">
                  <h4>群速度</h4>
                  <p>波包的群速度：<span class="math">v_g = (1/ℏ)∇_k ε_n(k)</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="semiclassical-equations">
            <h3>修正的半经典方程</h3>
            <div class="modified-equations">
              <div class="equation-set">
                <div class="equation-item primary">
                  <div class="equation-label">位置演化</div>
                  <div class="equation-box">
                    <span class="math">ṙ = (1/ℏ) ∇_k ε_n(k)</span>
                  </div>
                  <div class="equation-note">这是群速度公式</div>
                </div>
                
                <div class="equation-item primary">
                  <div class="equation-label">准动量演化</div>
                  <div class="equation-box">
                    <span class="math">ℏk̇ = -e(E + ṙ × B)</span>
                  </div>
                  <div class="equation-note">注意这里是准动量ℏk而非真实动量</div>
                </div>
              </div>
            </div>
          </div>

          <div class="physical-interpretation">
            <h3>物理解释</h3>
            <div class="interpretation-grid">
              <div class="interpretation-card">
                <div class="card-header">
                  <div class="card-icon">🎯</div>
                  <h4>群速度的意义</h4>
                </div>
                <div class="card-content">
                  <p>群速度描述了波包中心的运动速度，它由能带的色散关系决定</p>
                  <div class="example">
                    <strong>例：</strong>自由电子 ε = ℏ²k²/(2m)，得到 v = ℏk/m
                  </div>
                </div>
              </div>
              
              <div class="interpretation-card">
                <div class="card-header">
                  <div class="card-icon">⚡</div>
                  <h4>洛伦兹力</h4>
                </div>
                <div class="card-content">
                  <p>准动量的变化率仍然遵循洛伦兹力定律，但作用在准动量上</p>
                  <div class="example">
                    <strong>注意：</strong>真实动量 p = ℏk + eA
                  </div>
                </div>
              </div>
              
              <div class="interpretation-card">
                <div class="card-header">
                  <div class="card-icon">🔄</div>
                  <h4>自洽性</h4>
                </div>
                <div class="card-content">
                  <p>两个方程必须自洽求解，因为ṙ依赖于k，而k̇又依赖于ṙ</p>
                  <div class="example">
                    <strong>应用：</strong>霍尔效应、磁阻等现象
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 近似的有效性 -->
      <section class="content-section">
        <h2 class="section-title">近似的有效性与局限</h2>
        <div class="validity-analysis">
          <div class="validity-conditions">
            <h3>有效性条件</h3>
            <div class="conditions-grid">
              <div class="condition-card">
                <div class="condition-header">
                  <div class="condition-icon">📏</div>
                  <h4>长度尺度条件</h4>
                </div>
                <div class="condition-content">
                  <div class="condition-formula">
                    <span class="math">λ_dB ≪ L_{system}</span>
                  </div>
                  <p>德布罗意波长远小于系统特征长度</p>
                  <div class="example-values">
                    <div class="value-item">
                      <span class="label">典型金属：</span>
                      <span class="value">λ_dB ~ 1 Å, L ~ 100 Å</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="condition-card">
                <div class="condition-header">
                  <div class="condition-icon">⏱️</div>
                  <h4>时间尺度条件</h4>
                </div>
                <div class="condition-content">
                  <div class="condition-formula">
                    <span class="math">τ_{quantum} ≪ τ_{classical}</span>
                  </div>
                  <p>量子演化时间远小于经典运动时间</p>
                  <div class="example-values">
                    <div class="value-item">
                      <span class="label">电子：</span>
                      <span class="value">τ_q ~ ℏ/E_F ~ 10⁻¹⁶ s</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="condition-card">
                <div class="condition-header">
                  <div class="condition-icon">🌊</div>
                  <h4>绝热条件</h4>
                </div>
                <div class="condition-content">
                  <div class="condition-formula">
                    <span class="math">|∂H/∂t| ≪ ω²|H|</span>
                  </div>
                  <p>外场变化缓慢，满足绝热近似</p>
                  <div class="example-values">
                    <div class="value-item">
                      <span class="label">交流场：</span>
                      <span class="value">ω ≪ ω_c (回旋频率)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="limitations">
            <h3>主要局限性</h3>
            <div class="limitations-list">
              <div class="limitation-item">
                <div class="limitation-icon">❌</div>
                <div class="limitation-content">
                  <h4>量子隧穿</h4>
                  <p>无法描述势垒穿透等纯量子效应</p>
                  <div class="limitation-detail">
                    经典轨道在势垒处会被反射，而量子力学允许隧穿
                  </div>
                </div>
              </div>
              
              <div class="limitation-item">
                <div class="limitation-icon">❌</div>
                <div class="limitation-content">
                  <h4>量子干涉</h4>
                  <p>忽略了不同路径间的量子干涉效应</p>
                  <div class="limitation-detail">
                    Aharonov-Bohm效应等现象需要完整的量子处理
                  </div>
                </div>
              </div>
              
              <div class="limitation-item">
                <div class="limitation-icon">❌</div>
                <div class="limitation-content">
                  <h4>强场效应</h4>
                  <p>在强电磁场中可能失效</p>
                  <div class="limitation-detail">
                    当磁长度与晶格常数相当时，需要考虑Landau量子化
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="applications">
            <h3>成功应用领域</h3>
            <div class="applications-grid">
              <div class="application-item">
                <div class="app-icon">🔌</div>
                <div class="app-content">
                  <h4>电输运</h4>
                  <p>霍尔效应、磁阻、热电效应等</p>
                </div>
              </div>
              
              <div class="application-item">
                <div class="app-icon">🎵</div>
                <div class="app-content">
                  <h4>de Haas-van Alphen效应</h4>
                  <p>磁化率的量子振荡</p>
                </div>
              </div>
              
              <div class="application-item">
                <div class="app-icon">🌀</div>
                <div class="app-content">
                  <h4>回旋共振</h4>
                  <p>磁场中电子的回旋运动</p>
                </div>
              </div>
              
              <div class="application-item">
                <div class="app-icon">📡</div>
                <div class="app-content">
                  <h4>等离子体振荡</h4>
                  <p>集体激发模式的色散关系</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 数学补充 -->
      <section class="content-section">
        <h2 class="section-title">数学补充与技巧</h2>
        <div class="mathematical-details">
          <div class="math-technique">
            <h3>矢量恒等式</h3>
            <div class="identities-list">
              <div class="identity-item">
                <div class="identity-formula">
                  <span class="math">∇ × (∇ × A) = ∇(∇·A) - ∇²A</span>
                </div>
                <div class="identity-use">用于处理矢量势的二阶导数</div>
              </div>
              
              <div class="identity-item">
                <div class="identity-formula">
                  <span class="math">B = ∇ × A</span>
                </div>
                <div class="identity-use">磁场与矢量势的关系</div>
              </div>
              
              <div class="identity-item">
                <div class="identity-formula">
                  <span class="math">E = -∇φ - ∂A/∂t</span>
                </div>
                <div class="identity-use">电场与标量势、矢量势的关系</div>
              </div>
            </div>
          </div>

          <div class="math-technique">
            <h3>变分原理</h3>
            <div class="variational-approach">
              <p>半经典方程也可以从作用量的变分原理导出：</p>
              <div class="action-functional">
                <div class="equation-box">
                  <span class="math">S = ∫ dt [p·ṙ - H(r,p,t)]</span>
                </div>
              </div>
              
              <div class="variation-steps">
                <div class="var-step">
                  <span class="step-label">δS/δr = 0:</span>
                  <span class="math">ṗ = -∂H/∂r</span>
                </div>
                
                <div class="var-step">
                  <span class="step-label">δS/δp = 0:</span>
                  <span class="math">ṙ = ∂H/∂p</span>
                </div>
              </div>
            </div>
          </div>

          <div class="math-technique">
            <h3>相空间几何</h3>
            <div class="phase-space">
              <div class="geometric-concepts">
                <div class="concept-item">
                  <h4>辛结构</h4>
                  <p>相空间具有辛几何结构，保证了Liouville定理</p>
                  <div class="symplectic-form">
                    <span class="math">ω = dp ∧ dr</span>
                  </div>
                </div>
                
                <div class="concept-item">
                  <h4>正则变换</h4>
                  <p>保持哈密顿形式不变的坐标变换</p>
                  <div class="canonical-condition">
                    <span class="math">{Q_i, P_j} = δ_{ij}</span>
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

.key-equations {
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid #3b82f6;
}

.key-equations h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.equation-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.equation-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.equation-label {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.equation-formula {
  margin-bottom: 0.5rem;
}

.math {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #1e293b;
  font-style: italic;
}

.quantum-foundation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.foundation-step {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.foundation-step h3 {
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

.explanation {
  margin-top: 1rem;
}

.explanation p {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.sub-equation {
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-align: center;
  font-family: 'Times New Roman', serif;
  font-style: italic;
  color: #1e293b;
}

.wavepacket-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.parameter-explanation {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.param-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.param-symbol {
  font-family: 'Times New Roman', serif;
  font-style: italic;
  font-weight: bold;
  color: #2563eb;
  min-width: 80px;
}

.param-desc {
  color: #4a5568;
  font-size: 0.9rem;
}

.momentum-definition p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.physical-meaning {
  background: #fef3c7;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #f59e0b;
  margin-top: 1rem;
}

.physical-meaning p {
  color: #92400e;
  margin: 0;
  font-size: 0.9rem;
}

.wkb-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.derivation-step {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.derivation-step h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.step-detail p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.equation-sequence {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.calculation-box {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.calc-step {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: center;
}

.step-label {
  color: #2563eb;
  font-weight: 600;
  min-width: 100px;
  font-size: 0.9rem;
}

.power-expansion {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.power-term {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.power-label {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.term-note {
  color: #64748b;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  font-style: italic;
}

.trajectory-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.derivation-block {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.derivation-block h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.hj-analysis p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.canonical-equations {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.equation-pair {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.equation-group {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.equation-group h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.derivation-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.step-num {
  width: 24px;
  height: 24px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.final-equation {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-align: center;
  font-weight: bold;
}

.crystal-application {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.bloch-context {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.bloch-context h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
}

.bloch-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.bloch-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.property-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.property-item h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.property-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.semiclassical-equations {
  background: linear-gradient(135d, #dbeafe 0%, #bfdbfe 100%);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 2px solid #3b82f6;
}

.semiclassical-equations h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.equation-set {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.equation-item.primary {
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid #3b82f6;
}

.equation-note {
  color: #64748b;
  font-size: 0.85rem;
  margin-top: 0.5rem;
  font-style: italic;
}

.physical-interpretation {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.physical-interpretation h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.interpretation-card {
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.card-header {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card-header h4 {
  margin: 0;
  font-weight: 600;
}

.card-content {
  padding: 1rem;
}

.card-content p {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.example {
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.85rem;
  color: #374151;
}

.validity-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.validity-conditions h3,
.limitations h3,
.applications h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.condition-card {
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

.condition-header {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.condition-icon {
  font-size: 1.5rem;
}

.condition-header h4 {
  margin: 0;
  font-weight: 600;
}

.condition-content {
  padding: 1rem;
}

.condition-formula {
  background: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  text-align: center;
  margin-bottom: 1rem;
  border: 1px solid #e2e8f0;
}

.condition-content p {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.example-values {
  background: #f1f5f9;
  padding: 0.75rem;
  border-radius: 0.375rem;
}

.value-item {
  display: flex;
  gap: 0.5rem;
  font-size: 0.85rem;
}

.label {
  color: #2563eb;
  font-weight: 600;
}

.value {
  color: #374151;
  font-family: 'Courier New', monospace;
}

.limitations-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.limitation-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #fef2f2;
  border-radius: 0.5rem;
  border: 1px solid #fecaca;
}

.limitation-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.limitation-content h4 {
  color: #dc2626;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.limitation-content p {
  color: #7f1d1d;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.limitation-detail {
  color: #991b1b;
  font-size: 0.85rem;
  font-style: italic;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.application-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f0fdf4;
  border-radius: 0.5rem;
  border: 1px solid #bbf7d0;
}

.app-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.app-content h4 {
  color: #166534;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.app-content p {
  color: #15803d;
  margin: 0;
  font-size: 0.9rem;
}

.mathematical-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.math-technique {
  background: #f8fafc;
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.math-technique h3 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.identities-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.identity-item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.identity-formula {
  flex: 1;
  font-family: 'Times New Roman', serif;
  font-style: italic;
  color: #1e293b;
  font-size: 1.1rem;
}

.identity-use {
  color: #64748b;
  font-size: 0.85rem;
  min-width: 200px;
}

.variational-approach p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.action-functional {
  text-align: center;
  margin: 1.5rem 0;
}

.variation-steps {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
}

.var-step {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem;
  background: white;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
}

.step-label {
  color: #2563eb;
  font-weight: 600;
  min-width: 100px;
}

.phase-space {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.geometric-concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.concept-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.concept-item h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.concept-item p {
  color: #4a5568;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.symplectic-form,
.canonical-condition {
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-align: center;
  font-family: 'Times New Roman', serif;
  font-style: italic;
  color: #1e293b;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-overview,
  .equation-preview,
  .equation-pair,
  .bloch-properties,
  .interpretation-grid,
  .conditions-grid,
  .applications-grid,
  .geometric-concepts {
    grid-template-columns: 1fr;
  }
}
</style>