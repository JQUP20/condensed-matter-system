<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.1 非线性响应理论基础</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">非线性理论</span>
        <span class="reading-time">预计阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>非线性响应的物理起源</h2>
        <p class="lead-text">
          当外场强度超过线性响应理论的适用范围时，系统的响应不再与外场成正比，
          而是出现高阶非线性项。非线性响应揭示了物质在强场条件下的本质特性，
          是理解现代光电子学、非线性光学和强关联电子系统的基础。
        </p>
      </section>

      <section class="content-section">
        <h2>非线性响应的数学框架</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>响应函数的展开</h3>
            <p>超越线性近似的系统响应</p>
            <div class="mathematical-content">
              <h4>一般展开形式：</h4>
              <div class="equation-block">
                <p>R(t) = ∫ χ⁽¹⁾(t-t₁)F(t₁)dt₁</p>
                <p>+ ∫∫ χ⁽²⁾(t-t₁,t-t₂)F(t₁)F(t₂)dt₁dt₂</p>
                <p>+ ∫∫∫ χ⁽³⁾(t-t₁,t-t₂,t-t₃)F(t₁)F(t₂)F(t₃)dt₁dt₂dt₃ + ...</p>
              </div>
              
              <h4>频域表示：</h4>
              <div class="equation-block">
                <p>R(ω) = χ⁽¹⁾(ω)F(ω)</p>
                <p>+ ∫ χ⁽²⁾(ω₁,ω₂)F(ω₁)F(ω₂)δ(ω-ω₁-ω₂)dω₁dω₂</p>
                <p>+ 高阶项</p>
              </div>
              
              <h4>对称性质：</h4>
              <div class="equation-block">
                <p>χ⁽ⁿ⁾(ω₁,...,ωₙ) = χ⁽ⁿ⁾(ωₚ₍₁₎,...,ωₚ₍ₙ₎)</p>
                <p>置换对称性</p>
                <p>因果性约束</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>非线性电导率</h3>
            <p>强电场下的输运性质</p>
            <div class="mathematical-content">
              <h4>电流密度展开：</h4>
              <div class="equation-block">
                <p>J = σ⁽¹⁾E + σ⁽²⁾E² + σ⁽³⁾E³ + ...</p>
                <p>σ⁽¹⁾: 线性电导率</p>
                <p>σ⁽²⁾: 二阶非线性电导率</p>
                <p>σ⁽³⁾: 三阶非线性电导率</p>
              </div>
              
              <h4>微观起源：</h4>
              <div class="equation-block">
                <p>能带非抛物性</p>
                <p>载流子加热效应</p>
                <p>散射率的场依赖</p>
                <p>多体相互作用</p>
              </div>
              
              <h4>实验观测：</h4>
              <div class="equation-block">
                <p>I-V特性的非线性</p>
                <p>微分电导dI/dV</p>
                <p>热电子发射</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌈</div>
            <h3>非线性光学响应</h3>
            <p>强光场中的介电响应</p>
            <div class="mathematical-content">
              <h4>极化强度展开：</h4>
              <div class="equation-block">
                <p>P = ε₀[χ⁽¹⁾E + χ⁽²⁾E² + χ⁽³⁾E³ + ...]</p>
                <p>χ⁽¹⁾: 线性极化率</p>
                <p>χ⁽²⁾: 二阶非线性极化率</p>
                <p>χ⁽³⁾: 三阶非线性极化率</p>
              </div>
              
              <h4>频率混合过程：</h4>
              <div class="equation-block">
                <p>二次谐波产生: ω + ω → 2ω</p>
                <p>和频产生: ω₁ + ω₂ → ω₃</p>
                <p>差频产生: ω₁ - ω₂ → ω₃</p>
                <p>参量放大</p>
              </div>
              
              <h4>相位匹配：</h4>
              <div class="equation-block">
                <p>Δk = k₃ - k₁ - k₂ = 0</p>
                <p>双折射相位匹配</p>
                <p>准相位匹配</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>微观理论基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>量子力学处理</h3>
            <p>非线性响应的微观机制</p>
            <div class="mathematical-content">
              <h4>密度矩阵方法：</h4>
              <div class="equation-block">
                <p>∂ρ/∂t = -i[H₀ + H_int(t), ρ]/ℏ</p>
                <p>H_int = -μ·E(t) (偶极相互作用)</p>
                <p>微扰展开求解</p>
              </div>
              
              <h4>非线性极化率：</h4>
              <div class="equation-block">
                <p>χ⁽²⁾ ∝ Σₙₘ [μₙₘμₘ₀μ₀ₙ]/[(ωₙ₀-ω₁)(ωₘ₀-ω₂)]</p>
                <p>三能级系统</p>
                <p>共振增强效应</p>
              </div>
              
              <h4>选择定则：</h4>
              <div class="equation-block">
                <p>宇称选择定则</p>
                <p>对称性约束</p>
                <p>跃迁矩阵元</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>半经典理论</h3>
            <p>经典场与量子系统的相互作用</p>
            <div class="mathematical-content">
              <h4>Bloch方程：</h4>
              <div class="equation-block">
                <p>dS/dt = γS × B_eff</p>
                <p>B_eff = B₀ + B₁cos(ωt)</p>
                <p>自旋进动与弛豫</p>
              </div>
              
              <h4>光学Bloch方程：</h4>
              <div class="equation-block">
                <p>∂ρₙₘ/∂t = -iωₙₘρₙₘ - Γₙₘρₙₘ</p>
                <p>+ (i/ℏ)Σₖ[Vₙₖρₖₘ - ρₙₖVₖₘ]</p>
                <p>相干驱动与退相干</p>
              </div>
              
              <h4>饱和效应：</h4>
              <div class="equation-block">
                <p>χ_eff = χ₀/(1 + I/I_sat)</p>
                <p>I_sat: 饱和强度</p>
                <p>功率展宽</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>多体效应</h3>
            <p>强关联系统中的非线性响应</p>
            <div class="mathematical-content">
              <h4>Hubbard模型：</h4>
              <div class="equation-block">
                <p>H = -t Σ⟨i,j⟩(c†ᵢcⱼ + h.c.) + U Σᵢnᵢ↑nᵢ↓</p>
                <p>强关联极限U >> t</p>
                <p>Mott绝缘体</p>
              </div>
              
              <h4>动力学平均场理论：</h4>
              <div class="equation-block">
                <p>G(iωₙ) = [iωₙ + μ - Σ(iωₙ)]⁻¹</p>
                <p>自能的自洽求解</p>
                <p>金属-绝缘体转变</p>
              </div>
              
              <h4>非线性输运：</h4>
              <div class="equation-block">
                <p>σ(E) = σ₀[1 - (eEℓ/kᵦT)²/12 + ...]</p>
                <p>热电子效应</p>
                <p>电子-电子散射</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>对称性与选择定则</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>晶体对称性</h3>
            <p>对称性对非线性响应的约束</p>
            <div class="mathematical-content">
              <h4>点群对称性：</h4>
              <div class="equation-block">
                <p>χ⁽²⁾在中心对称晶体中为零</p>
                <p>χ⁽³⁾在所有晶体中都存在</p>
                <p>张量分量的独立性</p>
              </div>
              
              <h4>空间群对称性：</h4>
              <div class="equation-block">
                <p>平移对称性</p>
                <p>螺旋轴和滑移面</p>
                <p>倒格矢选择定则</p>
              </div>
              
              <h4>时间反演对称性：</h4>
              <div class="equation-block">
                <p>磁性材料中的破缺</p>
                <p>磁光效应</p>
                <p>手性响应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚖️</div>
            <h3>Kleinman对称性</h3>
            <p>频率置换对称性</p>
            <div class="mathematical-content">
              <h4>完全置换对称性：</h4>
              <div class="equation-block">
                <p>χ⁽²⁾ᵢⱼₖ(ω₃;ω₁,ω₂) = χ⁽²⁾ⱼᵢₖ(ω₃;ω₂,ω₁)</p>
                <p>= χ⁽²⁾ᵢₖⱼ(ω₁;ω₃,-ω₂) = ...</p>
                <p>远离共振时成立</p>
              </div>
              
              <h4>内在置换对称性：</h4>
              <div class="equation-block">
                <p>χ⁽²⁾ᵢⱼₖ(ω₃;ω₁,ω₂) = χ⁽²⁾ᵢₖⱼ(ω₃;ω₂,ω₁)</p>
                <p>输入频率的置换</p>
                <p>总是成立</p>
              </div>
              
              <h4>共振破坏：</h4>
              <div class="equation-block">
                <p>ω ≈ ωₙₘ时对称性破坏</p>
                <p>色散效应</p>
                <p>复数响应函数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>选择定则应用</h3>
            <p>实际材料中的对称性分析</p>
            <div class="mathematical-content">
              <h4>石英(SiO₂)：</h4>
              <div class="equation-block">
                <p>点群: D₃</p>
                <p>χ⁽²⁾ₓₓz = χ⁽²⁾ᵧᵧz = -χ⁽²⁾ₓᵧz</p>
                <p>二次谐波产生</p>
              </div>
              
              <h4>GaAs：</h4>
              <div class="equation-block">
                <p>点群: T_d (闪锌矿结构)</p>
                <p>χ⁽²⁾ₓᵧz = χ⁽²⁾ᵧzₓ = χ⁽²⁾zₓᵧ</p>
                <p>电光效应</p>
              </div>
              
              <h4>硅(Si)：</h4>
              <div class="equation-block">
                <p>点群: O_h (中心对称)</p>
                <p>χ⁽²⁾ = 0 (体相)</p>
                <p>表面二次谐波</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>非线性响应的特征</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔥 阈值效应</h3>
            <div class="feature-content">
              <h4>临界场强：</h4>
              <ul>
                <li>线性响应失效的临界点</li>
                <li>材料参数决定的阈值</li>
                <li>温度和频率依赖性</li>
                <li>多光子吸收阈值</li>
              </ul>
              
              <h4>饱和现象：</h4>
              <ul>
                <li>响应函数的饱和</li>
                <li>载流子数密度限制</li>
                <li>能级布居饱和</li>
                <li>增益饱和</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>⏱️ 时间尺度</h3>
            <div class="feature-content">
              <h4>瞬时响应：</h4>
              <ul>
                <li>电子响应(fs时间尺度)</li>
                <li>Kerr效应</li>
                <li>多光子吸收</li>
                <li>载流子产生</li>
              </ul>
              
              <h4>延迟响应：</h4>
              <ul>
                <li>热效应(ns-μs)</li>
                <li>载流子扩散</li>
                <li>晶格重排</li>
                <li>相变过程</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌡️ 温度效应</h3>
            <div class="feature-content">
              <h4>热电子效应：</h4>
              <ul>
                <li>载流子温度升高</li>
                <li>散射率变化</li>
                <li>能带填充改变</li>
                <li>热导率影响</li>
              </ul>
              
              <h4>相变调制：</h4>
              <ul>
                <li>温度诱导相变</li>
                <li>临界温度附近增强</li>
                <li>序参量的非线性</li>
                <li>涨落效应</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 本章要点总结 -->
      <section class="summary">
        <h2>本章要点总结</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <div class="point-content">
              <h4>数学框架</h4>
              <p>非线性响应理论通过响应函数的高阶展开描述强场条件下的物质响应，需要考虑频率混合、相位匹配等效应。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>微观机制</h4>
              <p>非线性响应源于能带非抛物性、多体相互作用、载流子加热等微观过程，需要量子力学和统计力学的综合处理。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>对称性约束</h4>
              <p>晶体对称性严格限制非线性响应张量的形式，中心对称性禁止偶数阶非线性响应，时间反演对称性影响磁响应。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>阈值与饱和</h4>
              <p>非线性响应具有明显的阈值效应和饱和特征，这些特性决定了非线性器件的工作条件和性能极限。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>多时间尺度</h4>
              <p>非线性响应涉及从飞秒到微秒的多个时间尺度，不同物理过程的时间尺度分离是理论处理的关键。</p>
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
  background: #9f7aea;
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.concept-card > p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.mathematical-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 0.5rem 0;
}

.equation-block {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.feature-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.feature-content ul {
  list-style: none;
  padding: 0;
}

.feature-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.feature-content li:before {
  content: "•";
  color: #9f7aea;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
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

.point-content h4 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.point-content p {
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
  
  .concept-grid, .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
.classification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.classification-item {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
  border: 1px solid #d1e7ff;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.classification-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.classification-item h4 {
  color: #2c5aa0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.classification-item ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.classification-item li {
  padding: 0.3rem 0;
  border-bottom: 1px solid #e0e0e0;
}

.classification-item li:last-child {
  border-bottom: none;
}

.time-response-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.response-type {
  background: linear-gradient(135deg, #fff8f0 0%, #ffede0 100%);
  border: 1px solid #ffd4a3;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.response-type:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 165, 0, 0.1);
}

.measurement-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.technique-card {
  background: linear-gradient(135deg, #f0fff4 0%, #e0ffe8 100%);
  border: 1px solid #90ee90;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.technique-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 128, 0, 0.1);
}

.technique-card h3 {
  color: #228b22;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.technique-content h4 {
  color: #2e8b57;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.technique-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.technique-content li {
  margin: 0.3rem 0;
  line-height: 1.4;
}

.theory-methods {
  margin: 2rem 0;
}

.method-section {
  background: linear-gradient(135deg, #faf0ff 0%, #f0e6ff 100%);
  border: 1px solid #d4a3ff;
  border-radius: 15px;
  padding: 2rem;
  margin: 1.5rem 0;
  transition: all 0.3s ease;
}

.method-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(138, 43, 226, 0.1);
}

.method-section h3 {
  color: #8a2be2;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.method-content h4 {
  color: #9932cc;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.material-category {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%);
  border: 1px solid #ffb3b3;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.material-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(220, 20, 60, 0.1);
}

.material-category h3 {
  color: #dc143c;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.material-content h4 {
  color: #b22222;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.applications-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.application-area {
  background: linear-gradient(135deg, #f0f8ff 0%, #e0f0ff 100%);
  border: 1px solid #87ceeb;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.application-area:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(70, 130, 180, 0.1);
}

.application-area h3 {
  color: #4682b4;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.application-area ul {
  list-style: none;
  padding: 0;
}

.application-area li {
  padding: 0.3rem 0;
  border-bottom: 1px solid #e0e0e0;
  color: #555;
}

.application-area li:last-child {
  border-bottom: none;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.point-category {
  background: linear-gradient(135deg, #fffaf0 0%, #fff8dc 100%);
  border: 1px solid #daa520;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.point-category:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(218, 165, 32, 0.1);
}

.point-category h3 {
  color: #b8860b;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.point-category ul {
  list-style: none;
  padding: 0;
}

.point-category li {
  padding: 0.4rem 0;
  border-bottom: 1px solid #e0e0e0;
  color: #555;
  line-height: 1.4;
}

.point-category li:last-child {
  border-bottom: none;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .classification-grid,
  .time-response-grid,
  .measurement-techniques,
  .materials-grid,
  .applications-overview,
  .key-points {
    grid-template-columns: 1fr;
  }
  
  .technique-card,
  .method-section,
  .material-category {
    padding: 1.5rem;
  }
}
</style>