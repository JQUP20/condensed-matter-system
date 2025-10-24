<template>
  <div class="chapter-content">
    <!-- 页面头部 -->
    <div class="chapter-hero">
      <div class="hero-background">
        <div class="atomic-pattern"></div>
      </div>
      <div class="hero-content">
        <div class="chapter-badge">
          <span class="badge-icon">⚛️</span>
          <span class="badge-text">强关联电子系统</span>
        </div>
        <h1 class="hero-title">Hubbard模型的导出</h1>
        <p class="hero-subtitle">从第一性原理到强关联电子系统的有效模型</p>
        <div class="hero-meta">
          <div class="meta-item">
            <span class="meta-icon">📖</span>
            <span>阅读时间: 40分钟</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🎯</span>
            <span>难度: 中级</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">🔬</span>
            <span>基础理论</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <div class="intro-content">
        <div class="intro-text">
          <h2>引言</h2>
          <p class="lead-paragraph">
            Hubbard模型是凝聚态物理学中最重要的理论模型之一，它描述了强关联电子系统中电子的跳跃和库仑相互作用之间的竞争。
            这个看似简单的模型包含了丰富的物理现象，从金属-绝缘体相变到高温超导，都可以在这个框架内得到理解。
          </p>
          <p>
            本章将详细介绍Hubbard模型的推导过程，从原子物理的基本原理出发，通过紧束缚近似和库仑相互作用的处理，
            最终得到这个在强关联电子系统研究中占据核心地位的有效哈密顿量。
          </p>
        </div>
        <div class="intro-visual">
          <div class="model-preview">
            <div class="lattice-sites">
              <div class="site active">
                <div class="electron up"></div>
                <div class="electron down"></div>
              </div>
              <div class="hopping-arrow">→</div>
              <div class="site">
                <div class="electron up"></div>
              </div>
              <div class="hopping-arrow">→</div>
              <div class="site empty"></div>
            </div>
            <div class="model-label">电子跳跃与库仑排斥</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 模型推导 -->
    <section class="model-derivation">
      <div class="section-header">
        <h2>模型推导</h2>
        <p>从原子轨道到有效格点模型的完整推导过程</p>
      </div>

      <div class="derivation-steps">
        <!-- 步骤1: 紧束缚近似 -->
        <div class="derivation-step">
          <div class="step-header">
            <div class="step-number">1</div>
            <div class="step-info">
              <h3>紧束缚近似</h3>
              <span class="step-tag">基础假设</span>
            </div>
          </div>
          
          <div class="step-content">
            <div class="step-main">
              <div class="concept-explanation">
                <h4>基本思想</h4>
                <p>
                  紧束缚近似假设电子主要局域在原子轨道上，只有相邻原子间存在微弱的轨道重叠。
                  这种近似适用于窄能带材料，如过渡金属氧化物和有机导体。
                </p>
                
                <div class="approximation-details">
                  <div class="detail-card">
                    <h5>🔬 物理图像</h5>
                    <ul>
                      <li>电子强烈束缚在原子核附近</li>
                      <li>相邻原子轨道有小的重叠</li>
                      <li>电子可以在相邻格点间跳跃</li>
                    </ul>
                  </div>
                  
                  <div class="detail-card">
                    <h5>📐 数学表述</h5>
                    <div class="equation-display">
                      <p>|ψ⟩ = ∑ᵢ cᵢ |φᵢ⟩</p>
                      <p class="equation-note">φᵢ: 第i个格点上的原子轨道</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="step-sidebar">
              <div class="key-assumptions">
                <h4>关键假设</h4>
                <div class="assumption-list">
                  <div class="assumption-item">
                    <span class="assumption-icon">⚡</span>
                    <span>只考虑最近邻跳跃</span>
                  </div>
                  <div class="assumption-item">
                    <span class="assumption-icon">🎯</span>
                    <span>单轨道近似</span>
                  </div>
                  <div class="assumption-item">
                    <span class="assumption-icon">🔄</span>
                    <span>轨道正交性</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="hamiltonian-term">
            <h4>跳跃哈密顿量</h4>
            <div class="equation-display featured">
              <p>Ĥₜ = -t ∑⟨i,j⟩,σ (ĉᵢσ† ĉⱼσ + ĉⱼσ† ĉᵢσ)</p>
              <div class="equation-explanation">
                <div class="param-explanation">
                  <span class="param">t</span>: 跳跃积分 (跳跃强度)
                </div>
                <div class="param-explanation">
                  <span class="param">⟨i,j⟩</span>: 最近邻格点对
                </div>
                <div class="param-explanation">
                  <span class="param">σ</span>: 自旋指标 (↑, ↓)
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 步骤2: 库仑相互作用 -->
        <div class="derivation-step">
          <div class="step-header">
            <div class="step-number">2</div>
            <div class="step-info">
              <h3>库仑相互作用</h3>
              <span class="step-tag">多体效应</span>
            </div>
          </div>
          
          <div class="step-content">
            <div class="step-main">
              <div class="concept-explanation">
                <h4>电子-电子相互作用</h4>
                <p>
                  在紧束缚近似下，最重要的库仑相互作用是同一格点上两个电子之间的排斥作用。
                  这种在位相互作用是Hubbard模型的核心，决定了系统的强关联性质。
                </p>
                
                <div class="interaction-analysis">
                  <div class="interaction-types">
                    <div class="interaction-card primary">
                      <h5>🎯 在位相互作用 (U)</h5>
                      <p>同一轨道上两个电子的库仑排斥</p>
                      <div class="equation-display small">
                        <p>U = ∫ |φᵢ(r₁)|² e²/|r₁-r₂| |φᵢ(r₂)|² dr₁dr₂</p>
                      </div>
                      <div class="interaction-strength">最强，通常几个eV</div>
                    </div>
                    
                    <div class="interaction-card secondary">
                      <h5>🔗 最近邻相互作用 (V)</h5>
                      <p>相邻格点电子间的库仑排斥</p>
                      <div class="equation-display small">
                        <p>V ≈ U/4 (通常忽略)</p>
                      </div>
                      <div class="interaction-strength">较弱，可忽略</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="step-sidebar">
              <div class="physical-picture">
                <h4>物理图像</h4>
                <div class="picture-content">
                  <div class="orbital-diagram">
                    <div class="orbital filled">
                      <div class="electron-pair">
                        <span class="electron up-spin">↑</span>
                        <span class="electron down-spin">↓</span>
                      </div>
                      <div class="repulsion-indicator">⚡ U</div>
                    </div>
                  </div>
                  <p class="diagram-caption">
                    双占据轨道中的库仑排斥
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="hamiltonian-term">
            <h4>相互作用哈密顿量</h4>
            <div class="equation-display featured">
              <p>Ĥᵤ = U ∑ᵢ n̂ᵢ↑ n̂ᵢ↓</p>
              <div class="equation-explanation">
                <div class="param-explanation">
                  <span class="param">U</span>: 在位库仑排斥能
                </div>
                <div class="param-explanation">
                  <span class="param">n̂ᵢσ</span>: 格点i上自旋σ的电子数算符
                </div>
                <div class="param-explanation">
                  <span class="param">n̂ᵢ↑ n̂ᵢ↓</span>: 双占据算符
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 步骤3: 完整哈密顿量 -->
        <div class="derivation-step final">
          <div class="step-header">
            <div class="step-number">3</div>
            <div class="step-info">
              <h3>完整的Hubbard哈密顿量</h3>
              <span class="step-tag">最终结果</span>
            </div>
          </div>
          
          <div class="step-content">
            <div class="complete-hamiltonian">
              <h4>标准Hubbard模型</h4>
              <div class="equation-display master">
                <p>Ĥ = -t ∑⟨i,j⟩,σ (ĉᵢσ† ĉⱼσ + h.c.) + U ∑ᵢ n̂ᵢ↑ n̂ᵢ↓ - μ ∑ᵢ,σ n̂ᵢσ</p>
              </div>
              
              <div class="hamiltonian-terms">
                <div class="term-card kinetic">
                  <div class="term-icon">⚡</div>
                  <div class="term-content">
                    <h5>动能项</h5>
                    <p>描述电子在格点间的跳跃</p>
                    <div class="term-effect">产生能带结构</div>
                  </div>
                </div>
                
                <div class="term-card interaction">
                  <div class="term-icon">🔄</div>
                  <div class="term-content">
                    <h5>相互作用项</h5>
                    <p>在位库仑排斥作用</p>
                    <div class="term-effect">导致强关联效应</div>
                  </div>
                </div>
                
                <div class="term-card chemical">
                  <div class="term-icon">⚖️</div>
                  <div class="term-content">
                    <h5>化学势项</h5>
                    <p>控制电子填充数</p>
                    <div class="term-effect">调节载流子密度</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 物理参数 -->
    <section class="physical-parameters">
      <div class="section-header">
        <h2>物理参数</h2>
        <p>理解Hubbard模型中各个参数的物理意义和典型数值</p>
      </div>

      <div class="parameters-grid">
        <div class="parameter-card primary">
          <div class="param-header">
            <div class="param-symbol">t</div>
            <div class="param-name">跳跃参数</div>
          </div>
          <div class="param-content">
            <div class="param-description">
              <p>描述电子在相邻格点间跳跃的强度，决定了系统的能带宽度。</p>
            </div>
            <div class="param-details">
              <div class="detail-row">
                <span class="detail-label">典型数值:</span>
                <span class="detail-value">0.1 - 1 eV</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">物理意义:</span>
                <span class="detail-value">轨道重叠积分</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">能带宽度:</span>
                <span class="detail-value">W ≈ 2zt (z: 配位数)</span>
              </div>
            </div>
            <div class="param-effects">
              <h5>主要效应:</h5>
              <ul>
                <li>增大t → 增强金属性</li>
                <li>减小t → 趋向局域化</li>
                <li>决定费米速度</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="parameter-card secondary">
          <div class="param-header">
            <div class="param-symbol">U</div>
            <div class="param-name">库仑排斥能</div>
          </div>
          <div class="param-content">
            <div class="param-description">
              <p>同一格点上两个电子之间的库仑排斥能，是强关联效应的根源。</p>
            </div>
            <div class="param-details">
              <div class="detail-row">
                <span class="detail-label">典型数值:</span>
                <span class="detail-value">1 - 10 eV</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">物理意义:</span>
                <span class="detail-value">双占据代价</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">相对强度:</span>
                <span class="detail-value">U/t = 1-20</span>
              </div>
            </div>
            <div class="param-effects">
              <h5>主要效应:</h5>
              <ul>
                <li>增大U → Mott绝缘体</li>
                <li>减小U → 金属行为</li>
                <li>决定相变临界点</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="parameter-card tertiary">
          <div class="param-header">
            <div class="param-symbol">μ</div>
            <div class="param-name">化学势</div>
          </div>
          <div class="param-content">
            <div class="param-description">
              <p>控制系统中电子的总数，决定了填充因子和载流子类型。</p>
            </div>
            <div class="param-details">
              <div class="detail-row">
                <span class="detail-label">调节范围:</span>
                <span class="detail-value">-U/2 到 U/2</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">物理意义:</span>
                <span class="detail-value">电子化学势</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">填充控制:</span>
                <span class="detail-value">⟨n⟩ = f(μ)</span>
              </div>
            </div>
            <div class="param-effects">
              <h5>主要效应:</h5>
              <ul>
                <li>μ = U/2 → 半填充</li>
                <li>调节载流子密度</li>
                <li>控制相变行为</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 弱相互作用极限 -->
    <section class="weak-coupling-limit">
      <div class="section-header">
        <h2>弱相互作用极限分析</h2>
        <p>当U ≪ t时的微扰理论处理</p>
      </div>

      <div class="weak-coupling-content">
        <div class="perturbation-theory">
          <div class="theory-card">
            <h3>🔬 微扰展开</h3>
            <div class="theory-content">
              <p>在弱耦合极限下，可以将相互作用项作为微扰来处理：</p>
              <div class="equation-display">
                <p>Ĥ = Ĥ₀ + λĤ₁</p>
                <p>Ĥ₀ = -t ∑⟨i,j⟩,σ ĉᵢσ† ĉⱼσ</p>
                <p>Ĥ₁ = U ∑ᵢ n̂ᵢ↑ n̂ᵢ↓</p>
              </div>
              
              <div class="perturbation-orders">
                <div class="order-item">
                  <h4>零阶 (λ⁰)</h4>
                  <p>自由电子气体，形成能带结构</p>
                </div>
                <div class="order-item">
                  <h4>一阶 (λ¹)</h4>
                  <p>平均场修正，化学势移动</p>
                </div>
                <div class="order-item">
                  <h4>二阶 (λ²)</h4>
                  <p>自能修正，准粒子寿命</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-consequences">
          <h3>物理后果</h3>
          <div class="consequences-grid">
            <div class="consequence-card">
              <div class="consequence-icon">📊</div>
              <h4>能带重整化</h4>
              <p>有效质量增加，能带变窄</p>
              <div class="equation-display small">
                <p>m* ≈ m(1 + U/W)</p>
              </div>
            </div>
            
            <div class="consequence-card">
              <div class="consequence-icon">⚡</div>
              <h4>散射机制</h4>
              <p>电子-电子散射增强电阻率</p>
              <div class="equation-display small">
                <p>ρ ∝ T² (费米液体行为)</p>
              </div>
            </div>
            
            <div class="consequence-card">
              <div class="consequence-icon">🌡️</div>
              <h4>比热增强</h4>
              <p>有效质量增加导致比热增大</p>
              <div class="equation-display small">
                <p>γ = (π²/3)k²ᵦN(0)m*</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="chapter-summary">
      <div class="summary-content">
        <h2>本章总结</h2>
        <div class="summary-grid">
          <div class="summary-card main">
            <h3>🎯 核心成果</h3>
            <p>
              我们从原子物理的基本原理出发，通过紧束缚近似和库仑相互作用的考虑，
              成功导出了Hubbard模型这一描述强关联电子系统的基本理论框架。
            </p>
            <div class="key-equation">
              <div class="equation-display final">
                <p>Ĥ = -t ∑⟨i,j⟩,σ ĉᵢσ† ĉⱼσ + U ∑ᵢ n̂ᵢ↑ n̂ᵢ↓ - μ ∑ᵢ,σ n̂ᵢσ</p>
              </div>
            </div>
          </div>
          
          <div class="summary-points">
            <div class="point-item">
              <div class="point-number">1</div>
              <div class="point-content">
                <h4>紧束缚近似</h4>
                <p>建立了从原子轨道到格点模型的桥梁</p>
              </div>
            </div>
            
            <div class="point-item">
              <div class="point-number">2</div>
              <div class="point-content">
                <h4>库仑相互作用</h4>
                <p>在位排斥是强关联效应的根源</p>
              </div>
            </div>
            
            <div class="point-item">
              <div class="point-number">3</div>
              <div class="point-content">
                <h4>参数意义</h4>
                <p>t、U、μ三个参数决定了系统的所有性质</p>
              </div>
            </div>
            
            <div class="point-item">
              <div class="point-number">4</div>
              <div class="point-content">
                <h4>物理图像</h4>
                <p>跳跃与排斥的竞争产生丰富的相变现象</p>
              </div>
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
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

/* 英雄区域 */
.chapter-hero {
  position: relative;
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
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

.atomic-pattern {
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3Ccircle cx='10' cy='10' r='2'/%3E%3Ccircle cx='50' cy='10' r='2'/%3E%3Ccircle cx='10' cy='50' r='2'/%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3Cpath d='M30 26 L30 34 M26 30 L34 30'/%3E%3C/g%3E%3C/svg%3E") repeat;
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
  max-width: 600px;
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

/* 引言 */
.introduction {
  margin: 60px 0;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 50px 40px;
}

.intro-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  align-items: center;
}

.intro-text h2 {
  font-size: 2.2rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.lead-paragraph {
  font-size: 1.2rem;
  font-weight: 500;
  color: #34495e;
  margin-bottom: 20px;
  line-height: 1.7;
}

.intro-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.model-preview {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.lattice-sites {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.site {
  width: 50px;
  height: 50px;
  border: 2px solid #3498db;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}

.site.active {
  background: rgba(52, 152, 219, 0.1);
}

.site.empty {
  border-style: dashed;
  opacity: 0.5;
}

.electron {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 1px;
}

.electron.up {
  background: #e74c3c;
}

.electron.down {
  background: #3498db;
}

.hopping-arrow {
  font-size: 1.5rem;
  color: #e74c3c;
  font-weight: bold;
}

.model-label {
  font-size: 0.9rem;
  color: #7f8c8d;
  font-weight: 500;
}

/* 模型推导 */
.model-derivation {
  margin: 80px 0;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
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

.derivation-steps {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.derivation-step {
  background: white;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  border: 1px solid #f1f3f4;
}

.step-header {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  padding: 25px 30px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.step-number {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.step-info h3 {
  margin: 0 0 5px 0;
  font-size: 1.5rem;
}

.step-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
}

.step-content {
  padding: 30px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
}

.concept-explanation h4 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.approximation-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.detail-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e9ecef;
}

.detail-card h5 {
  margin: 0 0 10px 0;
  color: #495057;
  font-size: 1rem;
}

.detail-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.detail-card li {
  padding: 3px 0;
  padding-left: 15px;
  position: relative;
  font-size: 0.9rem;
  color: #6c757d;
}

.detail-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #3498db;
}

.equation-display {
  background: #2c3e50;
  color: white;
  padding: 15px;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  margin: 10px 0;
}

.equation-display.small {
  font-size: 0.9rem;
  padding: 12px;
}

.equation-display.featured {
  background: linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%);
  font-size: 1.1rem;
  padding: 20px;
}

.equation-display.master {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  font-size: 1.2rem;
  padding: 25px;
  text-align: center;
}

.equation-display.final {
  background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
  font-size: 1.1rem;
  padding: 20px;
  text-align: center;
}

.equation-note {
  font-size: 0.85rem;
  opacity: 0.8;
  margin-top: 5px;
}

.step-sidebar {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
  height: fit-content;
}

.key-assumptions h4 {
  margin: 0 0 15px 0;
  color: #2c3e50;
}

.assumption-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.assumption-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #495057;
}

.assumption-icon {
  font-size: 1.1rem;
}

.hamiltonian-term {
  grid-column: 1 / -1;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #e9ecef;
}

.hamiltonian-term h4 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.equation-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.param-explanation {
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 6px;
  font-size: 0.9rem;
}

.param {
  font-weight: bold;
  color: #f39c12;
}

.hamiltonian-terms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.term-card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #e9ecef;
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.term-icon {
  font-size: 1.5rem;
  margin-top: 2px;
}

.term-card.kinetic .term-icon {
  color: #3498db;
}

.term-card.interaction .term-icon {
  color: #e74c3c;
}

.term-card.chemical .term-icon {
  color: #f39c12;
}

.term-content h5 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.term-content p {
  margin: 0 0 8px 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.term-effect {
  font-size: 0.8rem;
  color: #495057;
  font-style: italic;
}

/* 物理参数 */
.physical-parameters {
  margin: 80px 0;
  background: #f8f9fa;
  padding: 60px 40px;
  border-radius: 20px;
}

.parameters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.parameter-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
  transition: all 0.3s ease;
}

.parameter-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.parameter-card.primary .param-header {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
}

.parameter-card.secondary .param-header {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
}

.parameter-card.tertiary .param-header {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
}

.param-header {
  color: white;
  padding: 25px;
  text-align: center;
}

.param-symbol {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.param-name {
  font-size: 1.2rem;
  font-weight: 500;
}

.param-content {
  padding: 25px;
}

.param-description {
  margin-bottom: 20px;
}

.param-details {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.detail-row:last-child {
  margin-bottom: 0;
}

.detail-label {
  font-weight: 500;
  color: #495057;
}

.detail-value {
  color: #6c757d;
  font-family: 'Fira Code', monospace;
}

.param-effects h5 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.param-effects ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.param-effects li {
  padding: 3px 0;
  padding-left: 15px;
  position: relative;
  font-size: 0.9rem;
  color: #6c757d;
}

.param-effects li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3498db;
  font-weight: bold;
}

/* 弱相互作用极限 */
.weak-coupling-limit {
  margin: 80px 0;
}

.weak-coupling-content {
  margin-top: 40px;
}

.perturbation-theory {
  margin-bottom: 40px;
}

.theory-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
}

.theory-card h3 {
  margin: 0 0 20px 0;
  color: #2c3e50;
  font-size: 1.5rem;
}

.perturbation-orders {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.order-item {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  border: 1px solid #e9ecef;
}

.order-item h4 {
  margin: 0 0 8px 0;
  color: #495057;
  font-size: 1rem;
}

.order-item p {
  margin: 0;
  font-size: 0.9rem;
  color: #6c757d;
}

.physical-consequences h3 {
  margin: 0 0 25px 0;
  color: #2c3e50;
  font-size: 1.5rem;
}

.consequences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.consequence-card {
  background: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f3f4;
  text-align: center;
}

.consequence-icon {
  font-size: 2rem;
  margin-bottom: 15px;
}

.consequence-card h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.consequence-card p {
  margin: 0 0 15px 0;
  color: #6c757d;
  font-size: 0.9rem;
}

/* 总结 */
.chapter-summary {
  margin: 80px 0 40px 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 20px;
}

.summary-content h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
}

.summary-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;
}

.summary-card.main {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px;
  backdrop-filter: blur(10px);
}

.summary-card h3 {
  margin: 0 0 15px 0;
  font-size: 1.3rem;
}

.summary-card p {
  margin: 0 0 20px 0;
  line-height: 1.6;
}

.key-equation {
  margin-top: 20px;
}

.summary-points {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.point-number {
  width: 35px;
  height: 35px;
  background: #3498db;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.point-content h4 {
  margin: 0 0 5px 0;
  font-size: 1.1rem;
}

.point-content p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .intro-content {
    grid-template-columns: 1fr;
  }
  
  .step-content {
    grid-template-columns: 1fr;
  }
  
  .approximation-details {
    grid-template-columns: 1fr;
  }
  
  .summary-grid {
    grid-template-columns: 1fr;
  }
}

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
  
  .parameters-grid {
    grid-template-columns: 1fr;
  }
  
  .consequences-grid {
    grid-template-columns: 1fr;
  }
  
  .lattice-sites {
    flex-direction: column;
    gap: 10px;
  }
  
  .hopping-arrow {
    transform: rotate(90deg);
  }
}
</style>