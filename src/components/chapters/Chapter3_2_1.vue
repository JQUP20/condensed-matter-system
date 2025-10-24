<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.2.1 离子磁性与电子结构</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">磁性理论</span>
        <span class="reading-time">阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        离子磁性是固体磁性的重要来源，它起源于原子或离子中未配对电子的自旋和轨道角动量。
        理解离子磁性需要深入分析电子在晶体场中的行为，包括自旋-轨道耦合、晶体场分裂等效应。
        这些知识为理解Heisenberg模型和更复杂的磁性现象奠定了基础。
      </p>
    </div>

    <section class="content-section">
      <h2>原子磁矩的起源</h2>
      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-icon">🌀</div>
          <h3>电子自旋</h3>
          <p>电子的内禀角动量，是磁性的基本来源</p>
          <div class="mathematical-content">
            <h4>自旋磁矩：</h4>
            <div class="equation-block">
              <p>μₛ = -gₛμᵦS</p>
              <p>gₛ ≈ 2.002: 自旋g因子</p>
              <p>μᵦ = eℏ/2mₑ: 玻尔磁子</p>
              <p>S: 自旋角动量算符</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🔄</div>
          <h3>轨道角动量</h3>
          <p>电子绕核运动产生的角动量贡献</p>
          <div class="mathematical-content">
            <h4>轨道磁矩：</h4>
            <div class="equation-block">
              <p>μₗ = -gₗμᵦL</p>
              <p>gₗ = 1: 轨道g因子</p>
              <p>L: 轨道角动量算符</p>
              <p>在晶体场中常被淬灭</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🔗</div>
          <h3>自旋-轨道耦合</h3>
          <p>自旋与轨道角动量的相互作用</p>
          <div class="mathematical-content">
            <h4>耦合哈密顿量：</h4>
            <div class="equation-block">
              <p>Hₛₒ = λL·S</p>
              <p>λ: 自旋-轨道耦合常数</p>
              <p>总角动量: J = L + S</p>
              <p>有效磁矩: μⱼ = gⱼμᵦJ</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Hund规则与电子构型</h2>
      <div class="hund-rules">
        <div class="rule-overview">
          <h3>🎯 Hund规则的物理基础</h3>
          <p>Hund规则描述了原子中电子如何填充轨道以最小化总能量，这直接决定了原子的磁性性质。</p>
        </div>

        <div class="rules-detail">
          <div class="rule-card">
            <div class="rule-number">1</div>
            <div class="rule-content">
              <h4>最大自旋多重度</h4>
              <p>电子优先以平行自旋填充不同轨道，最大化总自旋</p>
              <div class="orbital-diagram">
                <div class="orbital-set">
                  <h5>d³ 构型 (Cr³⁺):</h5>
                  <div class="orbitals">
                    <div class="orbital">↑</div>
                    <div class="orbital">↑</div>
                    <div class="orbital">↑</div>
                    <div class="orbital"></div>
                    <div class="orbital"></div>
                  </div>
                  <p>S = 3/2, 高自旋态</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rule-card">
            <div class="rule-number">2</div>
            <div class="rule-content">
              <h4>轨道角动量最大化</h4>
              <p>在满足第一规则的前提下，最大化轨道角动量</p>
              <div class="orbital-diagram">
                <div class="orbital-set">
                  <h5>d² 构型 (Ti²⁺):</h5>
                  <div class="orbitals">
                    <div class="orbital">↑</div>
                    <div class="orbital">↑</div>
                    <div class="orbital"></div>
                    <div class="orbital"></div>
                    <div class="orbital"></div>
                  </div>
                  <p>L = 3, S = 1</p>
                </div>
              </div>
            </div>
          </div>

          <div class="rule-card">
            <div class="rule-number">3</div>
            <div class="rule-content">
              <h4>J值确定</h4>
              <p>半填充以下: J = |L - S|，半填充以上: J = L + S</p>
              <div class="j-coupling-examples">
                <div class="example">
                  <h5>d⁴ (Mn³⁺): J = |2 - 2| = 0</h5>
                </div>
                <div class="example">
                  <h5>d⁶ (Fe²⁺): J = |2 + 2| = 4</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>晶体场理论</h2>
      <div class="crystal-field-theory">
        <div class="theory-introduction">
          <h3>🔬 基本概念</h3>
          <p>晶体场理论描述了中心离子的d轨道在周围配体产生的静电场中的能级分裂。</p>
        </div>

        <div class="field-effects">
          <div class="effect-card">
            <div class="effect-icon">🔺</div>
            <h3>八面体场</h3>
            <div class="effect-content">
              <div class="mathematical-content">
                <h4>能级分裂：</h4>
                <div class="equation-block">
                  <p>t₂g: dxy, dxz, dyz (低能)</p>
                  <p>eg: dx²-y², dz² (高能)</p>
                  <p>分裂能: Δₒ = 10Dq</p>
                </div>
              </div>
              
              <div class="energy-diagram">
                <div class="energy-levels">
                  <div class="level high">
                    <div class="orbital-label">eg</div>
                    <div class="degeneracy">2重简并</div>
                  </div>
                  <div class="splitting-gap">Δₒ</div>
                  <div class="level low">
                    <div class="orbital-label">t₂g</div>
                    <div class="degeneracy">3重简并</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="effect-card">
            <div class="effect-icon">🔷</div>
            <h3>四面体场</h3>
            <div class="effect-content">
              <div class="mathematical-content">
                <h4>能级分裂：</h4>
                <div class="equation-block">
                  <p>e: dz², dx²-y² (低能)</p>
                  <p>t₂: dxy, dxz, dyz (高能)</p>
                  <p>分裂能: Δₜ = (4/9)Δₒ</p>
                </div>
              </div>
              
              <div class="energy-diagram">
                <div class="energy-levels">
                  <div class="level high">
                    <div class="orbital-label">t₂</div>
                    <div class="degeneracy">3重简并</div>
                  </div>
                  <div class="splitting-gap">Δₜ</div>
                  <div class="level low">
                    <div class="orbital-label">e</div>
                    <div class="degeneracy">2重简并</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="spin-states">
          <h3>⚖️ 高自旋与低自旋态</h3>
          <div class="spin-comparison">
            <div class="spin-case">
              <h4>弱场情况 (Δ < P):</h4>
              <div class="electron-config">
                <h5>d⁶ 高自旋 (Fe²⁺):</h5>
                <div class="config-diagram">
                  <div class="orbital-group">
                    <div class="group-label">eg</div>
                    <div class="orbitals">
                      <div class="orbital">↑</div>
                      <div class="orbital">↑</div>
                    </div>
                  </div>
                  <div class="orbital-group">
                    <div class="group-label">t₂g</div>
                    <div class="orbitals">
                      <div class="orbital">↑↓</div>
                      <div class="orbital">↑↓</div>
                      <div class="orbital">↑↓</div>
                    </div>
                  </div>
                </div>
                <p>S = 2, μeff = 4.9 μB</p>
              </div>
            </div>

            <div class="spin-case">
              <h4>强场情况 (Δ > P):</h4>
              <div class="electron-config">
                <h5>d⁶ 低自旋 (Fe²⁺):</h5>
                <div class="config-diagram">
                  <div class="orbital-group">
                    <div class="group-label">eg</div>
                    <div class="orbitals">
                      <div class="orbital"></div>
                      <div class="orbital"></div>
                    </div>
                  </div>
                  <div class="orbital-group">
                    <div class="group-label">t₂g</div>
                    <div class="orbitals">
                      <div class="orbital">↑↓</div>
                      <div class="orbital">↑↓</div>
                      <div class="orbital">↑↓</div>
                    </div>
                  </div>
                </div>
                <p>S = 0, 抗磁性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Jahn-Teller效应</h2>
      <div class="jahn-teller-effect">
        <div class="effect-overview">
          <h3>🔧 基本原理</h3>
          <p>当电子构型导致轨道简并时，系统会通过结构畸变来降低对称性，消除简并，降低总能量。</p>
        </div>

        <div class="jt-examples">
          <div class="example-card">
            <h4>🔴 Cu²⁺ 离子 (d⁹)</h4>
            <div class="example-content">
              <div class="before-after">
                <div class="state">
                  <h5>畸变前 (Oh):</h5>
                  <div class="orbital-diagram">
                    <div class="level">eg: ↑ (1个空穴)</div>
                    <div class="level">t₂g: ↑↓ ↑↓ ↑↓</div>
                  </div>
                  <p>eg轨道简并</p>
                </div>
                
                <div class="arrow">→</div>
                
                <div class="state">
                  <h5>畸变后 (D₄h):</h5>
                  <div class="orbital-diagram">
                    <div class="level">dx²-y²: ↑ (高能)</div>
                    <div class="level">dz²: ↑↓ (低能)</div>
                    <div class="level">t₂g: ↑↓ ↑↓ ↑↓</div>
                  </div>
                  <p>轴向拉长，简并消除</p>
                </div>
              </div>
              
              <div class="energy-gain">
                <p>能量降低: ΔE = -EJT</p>
                <p>典型值: EJT ~ 0.1-1 eV</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <h4>🟢 Mn³⁺ 离子 (d⁴)</h4>
            <div class="example-content">
              <div class="before-after">
                <div class="state">
                  <h5>高自旋态:</h5>
                  <div class="orbital-diagram">
                    <div class="level">eg: ↑ (1个电子)</div>
                    <div class="level">t₂g: ↑ ↑ ↑</div>
                  </div>
                  <p>eg轨道简并</p>
                </div>
                
                <div class="arrow">→</div>
                
                <div class="state">
                  <h5>畸变后:</h5>
                  <div class="orbital-diagram">
                    <div class="level">dz²: ↑ (低能)</div>
                    <div class="level">dx²-y²: (高能)</div>
                    <div class="level">t₂g: ↑ ↑ ↑</div>
                  </div>
                  <p>轴向压缩</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jt-consequences">
          <h3>📊 物理后果</h3>
          <div class="consequences-grid">
            <div class="consequence-item">
              <div class="consequence-icon">🏗️</div>
              <h4>结构畸变</h4>
              <p>晶格参数的各向异性变化</p>
            </div>
            
            <div class="consequence-item">
              <div class="consequence-icon">🎵</div>
              <h4>声子软化</h4>
              <p>特定振动模式频率降低</p>
            </div>
            
            <div class="consequence-item">
              <div class="consequence-icon">⚡</div>
              <h4>电子性质</h4>
              <p>能带结构和输运性质改变</p>
            </div>
            
            <div class="consequence-item">
              <div class="consequence-icon">🧲</div>
              <h4>磁性修正</h4>
              <p>磁各向异性和交换相互作用</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>有效磁矩的计算</h2>
      <div class="magnetic-moment-calculation">
        <div class="calculation-methods">
          <div class="method-card">
            <h3>🧮 自旋磁矩</h3>
            <div class="method-content">
              <div class="mathematical-content">
                <h4>纯自旋情况：</h4>
                <div class="equation-block">
                  <p>μeff = g√[S(S+1)] μB</p>
                  <p>g ≈ 2 (自由电子值)</p>
                  <p>S: 总自旋量子数</p>
                </div>
              </div>
              
              <div class="examples-table">
                <table>
                  <thead>
                    <tr>
                      <th>离子</th>
                      <th>构型</th>
                      <th>S</th>
                      <th>μeff (理论)</th>
                      <th>μeff (实验)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ti³⁺</td>
                      <td>d¹</td>
                      <td>1/2</td>
                      <td>1.73</td>
                      <td>1.7-1.8</td>
                    </tr>
                    <tr>
                      <td>Cr³⁺</td>
                      <td>d³</td>
                      <td>3/2</td>
                      <td>3.87</td>
                      <td>3.8-3.9</td>
                    </tr>
                    <tr>
                      <td>Fe³⁺</td>
                      <td>d⁵</td>
                      <td>5/2</td>
                      <td>5.92</td>
                      <td>5.9-6.0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="method-card">
            <h3>🔄 自旋-轨道耦合</h3>
            <div class="method-content">
              <div class="mathematical-content">
                <h4>包含轨道贡献：</h4>
                <div class="equation-block">
                  <p>μeff = gJ√[J(J+1)] μB</p>
                  <p>gJ = 1 + [J(J+1) + S(S+1) - L(L+1)]/[2J(J+1)]</p>
                  <p>Landé g因子</p>
                </div>
              </div>
              
              <div class="rare-earth-examples">
                <h4>稀土离子示例：</h4>
                <div class="example-grid">
                  <div class="example-item">
                    <h5>Ce³⁺ (f¹):</h5>
                    <p>L=3, S=1/2, J=5/2</p>
                    <p>gJ = 6/7, μeff = 2.54 μB</p>
                  </div>
                  
                  <div class="example-item">
                    <h5>Nd³⁺ (f³):</h5>
                    <p>L=6, S=3/2, J=9/2</p>
                    <p>gJ = 8/11, μeff = 3.62 μB</p>
                  </div>
                  
                  <div class="example-item">
                    <h5>Gd³⁺ (f⁷):</h5>
                    <p>L=0, S=7/2, J=7/2</p>
                    <p>gJ = 2, μeff = 7.94 μB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="temperature-dependence">
          <h3>🌡️ 温度依赖性</h3>
          <div class="curie-weiss">
            <div class="law-description">
              <h4>Curie-Weiss定律：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>χ = C/(T - θ)</p>
                  <p>C = Nμ₀μeff²/3kB: Curie常数</p>
                  <p>θ: Weiss温度</p>
                </div>
              </div>
            </div>
            
            <div class="physical-interpretation">
              <h4>物理意义：</h4>
              <ul>
                <li>θ > 0: 铁磁相互作用</li>
                <li>θ < 0: 反铁磁相互作用</li>
                <li>θ = 0: 理想顺磁体</li>
                <li>|θ| ~ 交换相互作用强度</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验测量技术</h2>
      <div class="experimental-techniques">
        <div class="technique-grid">
          <div class="technique-card">
            <div class="technique-icon">🧲</div>
            <h3>磁化率测量</h3>
            <div class="technique-content">
              <h4>SQUID磁强计：</h4>
              <ul>
                <li>超高灵敏度 (10⁻⁸ emu)</li>
                <li>宽温度范围 (1.8-400 K)</li>
                <li>强磁场能力 (0-7 T)</li>
                <li>AC/DC测量模式</li>
              </ul>
              
              <h4>获得信息：</h4>
              <ul>
                <li>有效磁矩 μeff</li>
                <li>Weiss温度 θ</li>
                <li>磁相变温度</li>
                <li>磁各向异性</li>
              </ul>
            </div>
          </div>

          <div class="technique-card">
            <div class="technique-icon">📡</div>
            <h3>电子自旋共振</h3>
            <div class="technique-content">
              <h4>ESR/EPR技术：</h4>
              <ul>
                <li>g因子精确测定</li>
                <li>零场分裂参数</li>
                <li>超精细相互作用</li>
                <li>局域环境信息</li>
              </ul>
              
              <h4>共振条件：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>hν = gμBB</p>
                  <p>典型频率: 9.5 GHz (X波段)</p>
                  <p>磁场: ~0.34 T</p>
                </div>
              </div>
            </div>
          </div>

          <div class="technique-card">
            <div class="technique-icon">🔬</div>
            <h3>中子散射</h3>
            <div class="technique-content">
              <h4>磁性中子散射：</h4>
              <ul>
                <li>磁结构确定</li>
                <li>磁激发谱</li>
                <li>磁形因子</li>
                <li>自旋密度分布</li>
              </ul>
              
              <h4>散射截面：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>dσ/dΩ ∝ |⟨f(Q)⟩|² S(Q,ω)</p>
                  <p>f(Q): 磁形因子</p>
                  <p>S(Q,ω): 动态结构因子</p>
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
          <p>离子磁性起源于未配对电子的自旋和轨道角动量，Hund规则决定了原子的基态电子构型和磁矩。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>晶体场效应导致d轨道能级分裂，影响电子的自旋态和磁性行为，是理解过渡金属化合物磁性的关键。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>Jahn-Teller效应通过结构畸变消除轨道简并，对材料的结构和电子性质产生重要影响。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>有效磁矩的计算需要考虑自旋-轨道耦合，实验测量为理论预测提供了重要验证。</p>
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

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.concept-card p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.mathematical-content {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.mathematical-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.equation-block {
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  color: #2d3748;
}

.hund-rules {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.rule-overview {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.rule-overview h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.rule-overview p {
  color: #4a5568;
  font-size: 1.125rem;
}

.rules-detail {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.rule-card {
  display: flex;
  gap: 1rem;
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.rule-number {
  background: #667eea;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.rule-content {
  flex: 1;
}

.rule-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.rule-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.orbital-diagram {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  margin: 1rem 0;
}

.orbital-set h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.orbitals {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.orbital {
  width: 2rem;
  height: 2rem;
  border: 2px solid #667eea;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #667eea;
  background: white;
}

.j-coupling-examples {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.example {
  background: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
  color: #2d3748;
}

.crystal-field-theory {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.theory-introduction {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.theory-introduction h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.theory-introduction p {
  color: #4a5568;
  font-size: 1.125rem;
}

.field-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.effect-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.effect-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.effect-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.energy-diagram {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  margin-top: 1rem;
}

.energy-levels {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.level {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  min-width: 120px;
}

.level.high {
  background: #fed7d7;
  border: 2px solid #fc8181;
}

.level.low {
  background: #c6f6d5;
  border: 2px solid #68d391;
}

.orbital-label {
  font-weight: 600;
  color: #2d3748;
  font-size: 1.125rem;
}

.degeneracy {
  font-size: 0.875rem;
  color: #4a5568;
}

.splitting-gap {
  font-weight: 600;
  color: #667eea;
  font-size: 1.125rem;
}

.spin-states {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.spin-states h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.spin-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.spin-case {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spin-case h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.electron-config h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.config-diagram {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.orbital-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.group-label {
  font-weight: 600;
  color: #2d3748;
  min-width: 3rem;
}

.jahn-teller-effect {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.effect-overview {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.effect-overview h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.effect-overview p {
  color: #4a5568;
  font-size: 1.125rem;
}

.jt-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 1.5rem;
}

.example-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.example-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.before-after {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.state {
  flex: 1;
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.state h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.state .orbital-diagram {
  margin: 0.5rem 0;
}

.state .level {
  background: #e2e8f0;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin: 0.25rem 0;
  font-family: 'Courier New', monospace;
  color: #2d3748;
}

.state p {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0;
}

.arrow {
  font-size: 1.5rem;
  color: #667eea;
  font-weight: bold;
}

.energy-gain {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.5rem;
  padding: 1rem;
}

.energy-gain p {
  margin: 0.25rem 0;
  color: #234e52;
  font-family: 'Courier New', monospace;
}

.jt-consequences {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.jt-consequences h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.consequences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.consequence-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.consequence-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.consequence-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.consequence-item p {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0;
}

.magnetic-moment-calculation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.calculation-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.method-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.examples-table {
  margin-top: 1rem;
}

.examples-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.examples-table th,
.examples-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.examples-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #2d3748;
}

.examples-table td {
  color: #4a5568;
}

.rare-earth-examples {
  margin-top: 1rem;
}

.rare-earth-examples h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.example-item {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.example-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.example-item p {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0.25rem 0;
  font-family: 'Courier New', monospace;
}

.temperature-dependence {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.temperature-dependence h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.curie-weiss {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.law-description {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.law-description h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
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

.physical-interpretation ul {
  list-style: none;
  padding: 0;
}

.physical-interpretation li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.physical-interpretation li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-techniques {
  margin-bottom: 2rem;
}

.technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.technique-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.technique-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.technique-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.technique-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.technique-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.technique-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.technique-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;
  margin-top: 3rem;
}

.summary h2 {
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
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
  font-weight: bold;
  flex-shrink: 0;
}

.point-item p {
  margin: 0;
  flex: 1;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid, .rules-detail, .field-effects, .spin-comparison, .jt-examples, .calculation-methods, .curie-weiss, .technique-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .rule-card {
    flex-direction: column;
  }
  
  .before-after {
    flex-direction: column;
  }
  
  .consequences-grid, .example-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>