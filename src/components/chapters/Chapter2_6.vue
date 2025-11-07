<template>
  <div class="chapter-content">
    <!-- 章节头部 -->
    <div class="chapter-header">
      <div class="header-background">
        <div class="header-pattern"></div>
      </div>
      <div class="header-content">
        <div class="chapter-number">2.6</div>
        <h1 class="chapter-title">线性响应理论的适用性</h1>
        <p class="chapter-subtitle">Linear Response Theory Applicability</p>
        <div class="chapter-meta">
          <span class="meta-item">
            <i class="icon-tag"></i>
            响应理论
          </span>
          <span class="meta-item">
            <i class="icon-clock"></i>
            预计阅读时间: 35分钟
          </span>
          <span class="meta-item">
            <i class="icon-level"></i>
            高级理论
          </span>
        </div>
      </div>
    </div>

    <!-- 章节导航 -->
    <div class="chapter-navigation">
      <div class="nav-container">
        <a href="#introduction" class="nav-item">理论概述</a>
        <a href="#derivation" class="nav-item">严格推导</a>
        <a href="#properties" class="nav-item">解析性质</a>
        <a href="#conditions" class="nav-item">适用条件</a>
        <a href="#limitations" class="nav-item">局限性分析</a>
        <a href="#applications" class="nav-item">实际应用</a>
      </div>
    </div>

    <div class="chapter-body">
      <!-- 理论概述 -->
      <section id="introduction" class="content-section">
        <div class="section-header">
          <h2 class="section-title">线性响应理论概述</h2>
          <div class="section-decoration"></div>
        </div>
        
        <div class="introduction-content">
          <div class="lead-text">
            <p>线性响应理论是凝聚态物理中的核心理论框架，用于描述系统对外界微扰的响应。通过Kubo公式，它建立了微观机制与宏观输运性质之间的桥梁，为理解多种物理现象提供了统一的理论基础。</p>
          </div>
          
          <div class="key-concepts">
            <h3>核心概念</h3>
            <div class="concept-grid">
              <div class="concept-card">
                <div class="concept-icon">📊</div>
                <h4>Kubo公式</h4>
                <p>连接微观量子力学与宏观输运性质的基本公式</p>
              </div>
              <div class="concept-card">
                <div class="concept-icon">⚡</div>
                <h4>响应函数</h4>
                <p>描述系统对外界扰动响应的数学函数</p>
              </div>
              <div class="concept-card">
                <div class="concept-icon">🔄</div>
                <h4>因果性</h4>
                <p>响应不能早于扰动，决定了响应函数的解析结构</p>
              </div>
              <div class="concept-card">
                <div class="concept-icon">📈</div>
                <h4>涨落-耗散</h4>
                <p>热涨落与耗散过程之间的深刻联系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 严格推导 -->
      <section id="derivation" class="content-section">
        <div class="section-header">
          <h2 class="section-title">Kubo公式的严格推导</h2>
          <div class="section-decoration"></div>
        </div>

        <div class="derivation-container">
          <div class="derivation-step">
            <div class="step-header">
              <div class="step-number">1</div>
              <h3>微扰哈密顿量</h3>
            </div>
            <div class="step-content">
              <div class="formula-box">
                <div class="formula-title">总哈密顿量</div>
                <div class="formula">
                  <p><strong>Ĥ(t) = Ĥ₀ + Ĥ₁(t)</strong></p>
                  <p>其中 <strong>Ĥ₁(t) = -∑ᵢ B̂ᵢ fᵢ(t)</strong> 是微扰项</p>
                </div>
              </div>
              <div class="formula-box">
                <div class="formula-title">相互作用表象</div>
                <div class="formula">
                  <p><strong>B̂ᵢ(t) = e^(iĤ₀t/ℏ) B̂ᵢ e^(-iĤ₀t/ℏ)</strong></p>
                  <p><strong>Û(t,t₀) = T exp[-i/ℏ∫_{t₀}^t Ĥ₁(t') dt']</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <div class="step-header">
              <div class="step-number">2</div>
              <h3>密度矩阵演化</h3>
            </div>
            <div class="step-content">
              <div class="formula-box">
                <div class="formula-title">von Neumann方程</div>
                <div class="formula">
                  <p><strong>iℏ∂ρ̂/∂t = [Ĥ(t), ρ̂(t)]</strong></p>
                </div>
              </div>
              <div class="formula-box">
                <div class="formula-title">相互作用表象中的解</div>
                <div class="formula">
                  <p><strong>ρ̂ᵢ(t) = Û(t,-∞) ρ̂₀ Û†(t,-∞)</strong></p>
                  <p>其中 <strong>ρ̂₀ = e^(-βĤ₀)/Z₀</strong> 是平衡态密度矩阵</p>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <div class="step-header">
              <div class="step-number">3</div>
              <h3>一阶微扰展开</h3>
            </div>
            <div class="step-content">
              <div class="formula-box">
                <div class="formula-title">时间演化算符展开</div>
                <div class="formula">
                  <p><strong>Û(t,-∞) ≈ 1 - (i/ℏ) ∫_{-∞}^t Ĥ₁(t') dt' + O(Ĥ₁²)</strong></p>
                </div>
              </div>
              <div class="formula-box">
                <div class="formula-title">密度矩阵的一阶修正</div>
                <div class="formula">
                  <p><strong>ρ̂ᵢ⁽¹⁾(t) = -(i/ℏ) ∫_{-∞}^t [Ĥ₁(t'), ρ̂₀] dt'</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div class="derivation-step">
            <div class="step-header">
              <div class="step-number">4</div>
              <h3>Kubo公式</h3>
            </div>
            <div class="step-content">
              <div class="formula-box highlight">
                <div class="formula-title">最终的Kubo公式</div>
                <div class="formula">
                  <p><strong>⟨Â(t)⟩ = ⟨Â⟩₀ + ∑ᵢ ∫_{-∞}^t χ_{AB}(t-t') fᵢ(t') dt'</strong></p>
                  <p>其中响应函数：</p>
                  <p><strong>χ_{AB}(τ) = (i/ℏ)θ(τ)⟨[Â(τ), B̂(0)]⟩₀</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 解析性质 -->
      <section id="properties" class="content-section">
        <div class="section-header">
          <h2 class="section-title">响应函数的解析性质</h2>
          <div class="section-decoration"></div>
        </div>

        <div class="properties-container">
          <div class="property-section">
            <h3>因果性与解析结构</h3>
            <div class="property-content">
              <div class="formula-box">
                <div class="formula-title">因果性条件</div>
                <div class="formula">
                  <p><strong>χ(t) = 0</strong> for <strong>t < 0</strong></p>
                  <p>响应不能早于扰动</p>
                </div>
              </div>
              <div class="formula-box">
                <div class="formula-title">Fourier变换</div>
                <div class="formula">
                  <p><strong>χ(ω) = ∫₀^∞ χ(t) e^(iωt) dt</strong></p>
                  <p>χ(ω) 在上半复平面解析</p>
                </div>
              </div>
            </div>
          </div>

          <div class="property-section">
            <h3>Kramers-Kronig关系</h3>
            <div class="property-content">
              <div class="formula-box highlight">
                <div class="formula-title">实部与虚部的关系</div>
                <div class="formula">
                  <p><strong>χ'(ω) = (1/π) P ∫_{-∞}^∞ χ''(ω')/(ω-ω') dω'</strong></p>
                  <p><strong>χ''(ω) = -(1/π) P ∫_{-∞}^∞ χ'(ω')/(ω-ω') dω'</strong></p>
                  <p>其中 P 表示主值积分</p>
                </div>
              </div>
              <div class="insight-box">
                <h4>物理意义</h4>
                <p>因果性导致的约束关系，是实验验证理论的重要工具</p>
              </div>
            </div>
          </div>

          <div class="property-section">
            <h3>涨落-耗散定理</h3>
            <div class="property-content">
              <div class="formula-box">
                <div class="formula-title">涨落-耗散关系</div>
                <div class="formula">
                  <p><strong>χ''(ω) = (1/2)tanh(βℏω/2) S(ω)</strong></p>
                  <p>其中 S(ω) 是谱密度函数</p>
                </div>
              </div>
              <div class="formula-box">
                <div class="formula-title">经典极限</div>
                <div class="formula">
                  <p><strong>χ''(ω) = (k_B T/ℏω) S(ω)</strong> (ℏω ≪ k_B T)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 适用条件 -->
      <section id="conditions" class="content-section">
        <div class="section-header">
          <h2 class="section-title">适用条件的详细分析</h2>
          <div class="section-decoration"></div>
        </div>

        <div class="conditions-container">
          <div class="condition-category">
            <h3>微扰强度条件</h3>
            <div class="condition-grid">
              <div class="condition-card">
                <h4>能量尺度比较</h4>
                <div class="condition-content">
                  <p><strong>微扰能量：</strong>E_pert = |⟨B̂⟩| × |f|</p>
                  <p><strong>系统特征能量：</strong>E_char = k_B T, ℏω_c, E_F, Δ</p>
                  <p><strong>条件：</strong>E_pert ≪ E_char</p>
                  <div class="criterion">
                    <span class="criterion-label">数值标准：</span>
                    <span class="criterion-value">E_pert/E_char < 0.1</span>
                  </div>
                </div>
              </div>
              
              <div class="condition-card">
                <h4>响应幅度限制</h4>
                <div class="condition-content">
                  <p><strong>相对响应：</strong>δ = |⟨Â⟩ - ⟨Â⟩₀|/|⟨Â⟩₀|</p>
                  <p><strong>线性区域：</strong>δ < 0.05 (5%误差)</p>
                  <div class="criterion">
                    <span class="criterion-label">非线性修正：</span>
                    <span class="criterion-value">|χ₂f²/χ₁f| ≪ 1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="condition-category">
            <h3>平衡态稳定性</h3>
            <div class="condition-grid">
              <div class="condition-card">
                <h4>热力学稳定性</h4>
                <div class="condition-content">
                  <p><strong>自由能凸性：</strong>∂²F/∂X² > 0</p>
                  <p><strong>响应函数正定性：</strong>χ''(ω) > 0 for ω > 0</p>
                  <div class="criterion">
                    <span class="criterion-label">Le Chatelier原理：</span>
                    <span class="criterion-value">系统趋于恢复平衡</span>
                  </div>
                </div>
              </div>
              
              <div class="condition-card">
                <h4>动力学稳定性</h4>
                <div class="condition-content">
                  <p><strong>Lyapunov稳定性：</strong>小扰动不导致发散</p>
                  <p><strong>线性化动力学：</strong>δẋ = -Γ δx, Γ > 0</p>
                  <div class="criterion">
                    <span class="criterion-label">特征时间：</span>
                    <span class="criterion-value">τ = 1/γ_min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="condition-category">
            <h3>时间尺度分离</h3>
            <div class="condition-grid">
              <div class="condition-card">
                <h4>绝热条件</h4>
                <div class="condition-content">
                  <p><strong>频率条件：</strong>ω τ_relax ≪ 1</p>
                  <p><strong>时间尺度分离：</strong>τ_fast ≪ τ_slow</p>
                  <div class="criterion">
                    <span class="criterion-label">典型比值：</span>
                    <span class="criterion-value">τ_fast/τ_slow < 0.01</span>
                  </div>
                </div>
              </div>
              
              <div class="condition-card">
                <h4>量子经典过渡</h4>
                <div class="condition-content">
                  <p><strong>经典区域：</strong>ℏω ≪ k_B T</p>
                  <p><strong>量子区域：</strong>ℏω ≫ k_B T</p>
                  <div class="criterion">
                    <span class="criterion-label">共振避免：</span>
                    <span class="criterion-value">ω ≠ ω_n</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 局限性分析 -->
      <section id="limitations" class="content-section">
        <div class="section-header">
          <h2 class="section-title">理论局限性与失效条件</h2>
          <div class="section-decoration"></div>
        </div>

        <div class="limitations-container">
          <div class="limitation-item">
            <div class="limitation-header">
              <div class="limitation-icon">⚠️</div>
              <h3>强相关系统</h3>
            </div>
            <div class="limitation-content">
              <p>在强相关电子系统中，电子间的库仑相互作用不能作为微扰处理，线性响应理论可能失效。</p>
              <div class="example-box">
                <h4>典型例子</h4>
                <ul>
                  <li>Mott绝缘体的金属-绝缘体转变</li>
                  <li>高温超导体的赝能隙态</li>
                  <li>重费米子系统的Kondo效应</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="limitation-item">
            <div class="limitation-header">
              <div class="limitation-icon">🌡️</div>
              <h3>临界点附近</h3>
            </div>
            <div class="limitation-content">
              <p>在相变临界点附近，系统的涨落变得巨大，线性响应理论的基本假设不再成立。</p>
              <div class="example-box">
                <h4>临界现象</h4>
                <ul>
                  <li>关联长度发散：ξ ∝ |T - T_c|^(-ν)</li>
                  <li>响应函数发散：χ ∝ |T - T_c|^(-γ)</li>
                  <li>临界慢化：τ_relax ∝ ξ^z</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="limitation-item">
            <div class="limitation-header">
              <div class="limitation-icon">⚡</div>
              <h3>非平衡态系统</h3>
            </div>
            <div class="limitation-content">
              <p>对于远离平衡的系统，不存在明确定义的平衡态密度矩阵，Kubo公式不适用。</p>
              <div class="example-box">
                <h4>非平衡情况</h4>
                <ul>
                  <li>强驱动系统</li>
                  <li>量子淬火过程</li>
                  <li>开放量子系统</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="limitation-item">
            <div class="limitation-header">
              <div class="limitation-icon">🔄</div>
              <h3>量子相干效应</h3>
            </div>
            <div class="limitation-content">
              <p>在介观系统中，量子相干效应可能导致非局域的响应，超出了局域线性响应的框架。</p>
              <div class="example-box">
                <h4>量子效应</h4>
                <ul>
                  <li>Aharonov-Bohm效应</li>
                  <li>弱局域化</li>
                  <li>量子霍尔效应</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 实际应用 -->
      <section id="applications" class="content-section">
        <div class="section-header">
          <h2 class="section-title">实际应用与实验验证</h2>
          <div class="section-decoration"></div>
        </div>

        <div class="applications-container">
          <div class="application-category">
            <h3>输运性质测量</h3>
            <div class="application-grid">
              <div class="application-card">
                <div class="app-icon">🔌</div>
                <h4>电导率测量</h4>
                <p>通过交流电导率的频率依赖性研究载流子动力学和散射机制</p>
                <div class="app-formula">σ(ω) = σ'(ω) + iσ''(ω)</div>
              </div>
              
              <div class="application-card">
                <div class="app-icon">🧲</div>
                <h4>磁化率测量</h4>
                <p>利用交流磁化率研究磁性相变和自旋动力学</p>
                <div class="app-formula">χ(ω) = χ'(ω) + iχ''(ω)</div>
              </div>
              
              <div class="application-card">
                <div class="app-icon">🌡️</div>
                <h4>热导率测量</h4>
                <p>通过热响应函数理解声子输运和电子-声子耦合</p>
                <div class="app-formula">κ(ω) = κ'(ω) + iκ''(ω)</div>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>光谱学应用</h3>
            <div class="application-grid">
              <div class="application-card">
                <div class="app-icon">💡</div>
                <h4>光学电导率</h4>
                <p>红外和可见光谱测量材料的电子结构和激发谱</p>
                <div class="app-formula">σ_opt(ω) = (ω/4π)ε''(ω)</div>
              </div>
              
              <div class="application-card">
                <div class="app-icon">📡</div>
                <h4>介电函数</h4>
                <p>通过椭偏仪等技术测量复介电函数</p>
                <div class="app-formula">ε(ω) = ε'(ω) + iε''(ω)</div>
              </div>
              
              <div class="application-card">
                <div class="app-icon">🔬</div>
                <h4>拉曼散射</h4>
                <p>研究声子模式和电子-声子相互作用</p>
                <div class="app-formula">I(ω) ∝ χ''_Raman(ω)</div>
              </div>
            </div>
          </div>

          <div class="validation-section">
            <h3>实验验证方法</h3>
            <div class="validation-grid">
              <div class="validation-item">
                <h4>Kramers-Kronig检验</h4>
                <p>通过实部和虚部的积分关系验证数据的因果性和一致性</p>
              </div>
              <div class="validation-item">
                <h4>求和规则检验</h4>
                <p>利用f-求和规则等检验高频行为的正确性</p>
              </div>
              <div class="validation-item">
                <h4>温度依赖性</h4>
                <p>通过涨落-耗散定理检验温度依赖性的理论预期</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 总结 -->
      <section class="content-section summary-section">
        <div class="section-header">
          <h2 class="section-title">章节总结</h2>
          <div class="section-decoration"></div>
        </div>
        
        <div class="summary-content">
          <div class="key-points">
            <h3>关键要点</h3>
            <div class="points-grid">
              <div class="point-item">
                <div class="point-number">1</div>
                <div class="point-content">
                  <h4>理论基础</h4>
                  <p>Kubo公式建立了微观量子力学与宏观输运性质的联系，是线性响应理论的核心</p>
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">2</div>
                <div class="point-content">
                  <h4>数学结构</h4>
                  <p>因果性导致响应函数的解析性质，Kramers-Kronig关系和涨落-耗散定理是重要结果</p>
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">3</div>
                <div class="point-content">
                  <h4>适用条件</h4>
                  <p>微扰强度、平衡态稳定性和时间尺度分离是理论适用的关键条件</p>
                </div>
              </div>
              <div class="point-item">
                <div class="point-number">4</div>
                <div class="point-content">
                  <h4>实际应用</h4>
                  <p>广泛应用于输运性质测量和光谱学研究，是实验物理的重要理论工具</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6',
  mounted() {
    // 添加平滑滚动效果
    this.setupSmoothScrolling();
    // 添加导航高亮效果
    this.setupNavigationHighlight();
  },
  methods: {
    setupSmoothScrolling() {
      const navLinks = document.querySelectorAll('.nav-item');
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    },
    setupNavigationHighlight() {
      const sections = document.querySelectorAll('.content-section');
      const navLinks = document.querySelectorAll('.nav-item');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${id}`) {
                link.classList.add('active');
              }
            });
          }
        });
      }, { threshold: 0.3 });
      
      sections.forEach(section => observer.observe(section));
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

/* 章节头部样式 */
.chapter-header {
  position: relative;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 2rem;
  margin-bottom: 2rem;
  overflow: hidden;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
}

.header-pattern {
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
    radial-gradient(circle at 75% 75%, white 2px, transparent 2px);
  background-size: 50px 50px;
}

.header-content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.chapter-number {
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

.chapter-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  opacity: 0.9;
}

/* 导航样式 */
.chapter-navigation {
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
  margin-bottom: 2rem;
}

.nav-container {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  flex-wrap: wrap;
}

.nav-item {
  color: #666;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-item:hover,
.nav-item.active {
  background: #667eea;
  color: white;
  transform: translateY(-2px);
}

/* 章节主体 */
.chapter-body {
  padding: 0 2rem;
}

.content-section {
  margin-bottom: 4rem;
  scroll-margin-top: 100px;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
}

.section-decoration {
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #667eea, #764ba2);
  margin: 0 auto;
  border-radius: 2px;
}

/* 介绍部分 */
.introduction-content {
  max-width: 900px;
  margin: 0 auto;
}

.lead-text {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.key-concepts h3 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.concept-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
}

.concept-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.concept-card h4 {
  font-size: 1.3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.concept-card p {
  color: #666;
  font-size: 0.95rem;
}

/* 推导部分 */
.derivation-container {
  max-width: 1000px;
  margin: 0 auto;
}

.derivation-step {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  overflow: hidden;
}

.step-header {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.step-number {
  background: rgba(255,255,255,0.2);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
}

.step-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.step-content {
  padding: 2rem;
}

.formula-box {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

.formula-box.highlight {
  background: linear-gradient(135deg, #fff5f5, #f0f8ff);
  border-color: #667eea;
}

.formula-title {
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.formula {
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  line-height: 1.8;
}

.formula p {
  margin: 0.5rem 0;
}

.formula strong {
  color: #2c3e50;
}

/* 性质部分 */
.properties-container {
  max-width: 1000px;
  margin: 0 auto;
}

.property-section {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.property-section h3 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.property-content {
  display: grid;
  gap: 1.5rem;
}

.insight-box {
  background: #e8f4fd;
  border-left: 4px solid #667eea;
  padding: 1.5rem;
  border-radius: 0 10px 10px 0;
}

.insight-box h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

/* 条件部分 */
.conditions-container {
  max-width: 1100px;
  margin: 0 auto;
}

.condition-category {
  margin-bottom: 3rem;
}

.condition-category h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.condition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.condition-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 2rem;
  transition: transform 0.3s ease;
}

.condition-card:hover {
  transform: translateY(-3px);
}

.condition-card h4 {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  text-align: center;
}

.condition-content p {
  margin: 0.8rem 0;
  color: #555;
}

.criterion {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.criterion-label {
  font-weight: 600;
  color: #2c3e50;
}

.criterion-value {
  font-family: 'Courier New', monospace;
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

/* 局限性部分 */
.limitations-container {
  max-width: 1000px;
  margin: 0 auto;
}

.limitation-item {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
  overflow: hidden;
}

.limitation-header {
  background: linear-gradient(135deg, #ff6b6b, #ee5a24);
  color: white;
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.limitation-icon {
  font-size: 2rem;
}

.limitation-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.limitation-content {
  padding: 2rem;
}

.limitation-content p {
  color: #555;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.example-box {
  background: #fff5f5;
  border: 1px solid #ffebee;
  border-radius: 10px;
  padding: 1.5rem;
}

.example-box h4 {
  color: #c62828;
  margin-bottom: 1rem;
}

.example-box ul {
  margin: 0;
  padding-left: 1.5rem;
}

.example-box li {
  margin: 0.5rem 0;
  color: #555;
}

/* 应用部分 */
.applications-container {
  max-width: 1100px;
  margin: 0 auto;
}

.application-category {
  margin-bottom: 3rem;
}

.application-category h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.application-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 2rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.application-card:hover {
  transform: translateY(-5px);
}

.app-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.application-card h4 {
  color: #2c3e50;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.application-card p {
  color: #666;
  margin-bottom: 1.5rem;
}

.app-formula {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  font-family: 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #2c3e50;
  border-left: 4px solid #667eea;
}

.validation-section {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  padding: 2rem;
  margin-top: 3rem;
}

.validation-section h3 {
  color: #2c3e50;
  font-size: 1.8rem;
  text-align: center;
  margin-bottom: 2rem;
}

.validation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.validation-item {
  text-align: center;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
}

.validation-item h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.validation-item p {
  color: #666;
  font-size: 0.95rem;
}

/* 总结部分 */
.summary-section {
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  border-radius: 20px;
  padding: 3rem 2rem;
}

.summary-content {
  max-width: 900px;
  margin: 0 auto;
}

.key-points h3 {
  font-size: 2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

.points-grid {
  display: grid;
  gap: 2rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
}

.point-number {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.point-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
}

.point-content p {
  color: #666;
  margin: 0;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 0;
  }
  
  .chapter-header {
    padding: 2rem 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .nav-container {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .chapter-body {
    padding: 0 1rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .concept-grid,
  .condition-grid,
  .application-grid {
    grid-template-columns: 1fr;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
  
  .criterion {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.8rem;
  }
  
  .formula-box,
  .step-content {
    padding: 1rem;
  }
  
  .derivation-step,
  .property-section,
  .condition-card,
  .limitation-item,
  .application-card {
    margin-bottom: 1rem;
  }
}
</style>