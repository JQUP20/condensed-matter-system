<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.5.1 单粒子Green函数的定义与性质</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">Green函数</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>Green函数方法</h2>
        <p class="lead-text">
          Green函数是多体理论中的核心工具，它包含了系统的所有单粒子性质信息。
          通过Green函数，我们可以计算态密度、谱函数、输运性质等重要物理量，是连接微观理论与宏观观测的桥梁。
        </p>
      </section>

      <section class="content-section">
        <h2>单粒子Green函数定义</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>时间有序Green函数</h3>
            <p>基本定义和物理意义</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>G(x,t;x',t') = -i⟨T[ψ̂(x,t)ψ̂†(x',t')]⟩</p>
                <p>T: 时间有序算符</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>t > t': 粒子传播子</p>
                <p>t < t': 空穴传播子</p>
                <p>描述粒子-空穴激发</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>推迟和超前Green函数</h3>
            <p>实时动力学的描述</p>
            <div class="mathematical-content">
              <h4>推迟Green函数：</h4>
              <div class="equation-block">
                <p>Gᴿ(t-t') = -iθ(t-t')⟨{ψ̂(t),ψ̂†(t')}⟩</p>
                <p>θ(t): 阶跃函数</p>
              </div>
              
              <h4>超前Green函数：</h4>
              <div class="equation-block">
                <p>Gᴬ(t-t') = iθ(t'-t)⟨{ψ̂(t),ψ̂†(t')}⟩</p>
                <p>因果性关系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>频率表示</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>Fourier变换</h3>
            <p>时间到频率的转换</p>
            <div class="mathematical-content">
              <h4>时间有序：</h4>
              <div class="equation-block">
                <p>G(k,iωₙ) = ∫₀^β dτ e^(iωₙτ) G(k,τ)</p>
                <p>ωₙ = (2n+1)π/β: 费米子Matsubara频率</p>
              </div>
              
              <h4>推迟函数：</h4>
              <div class="equation-block">
                <p>Gᴿ(k,ω) = ∫ dt e^(iωt) Gᴿ(k,t)</p>
                <p>实频率表示</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>解析延拓</h3>
            <p>虚频率到实频率的连接</p>
            <div class="mathematical-content">
              <h4>解析延拓关系：</h4>
              <div class="equation-block">
                <p>Gᴿ(k,ω) = G(k,iωₙ → ω + i0⁺)</p>
                <p>i0⁺: 无穷小正虚部</p>
              </div>
              
              <h4>Kramers-Kronig关系：</h4>
              <div class="equation-block">
                <p>Re Gᴿ(ω) = P∫ dω' Im Gᴿ(ω')/(π(ω'-ω))</p>
                <p>P: 主值积分</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>谱表示</h2>
        <div class="spectral-section">
          <div class="concept-card">
            <div class="concept-icon">🎵</div>
            <h3>谱函数</h3>
            <p>单粒子激发谱的描述</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>A(k,ω) = -1/π Im Gᴿ(k,ω)</p>
                <p>A(k,ω) ≥ 0</p>
              </div>
              
              <h4>谱表示：</h4>
              <div class="equation-block">
                <p>Gᴿ(k,ω) = ∫ dω' A(k,ω')/(ω - ω' + i0⁺)</p>
                <p>Lehmann表示</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>自由粒子Green函数</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🆓</div>
            <h3>非相互作用情况</h3>
            <p>最简单的例子</p>
            <div class="mathematical-content">
              <h4>推迟Green函数：</h4>
              <div class="equation-block">
                <p>G₀ᴿ(k,ω) = 1/(ω - εₖ + i0⁺)</p>
                <p>εₖ: 单粒子能量</p>
              </div>
              
              <h4>谱函数：</h4>
              <div class="equation-block">
                <p>A₀(k,ω) = δ(ω - εₖ)</p>
                <p>δ函数峰</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>有限温度</h3>
            <p>热平衡态的Green函数</p>
            <div class="mathematical-content">
              <h4>Matsubara Green函数：</h4>
              <div class="equation-block">
                <p>G₀(k,iωₙ) = 1/(iωₙ - εₖ)</p>
              </div>
              
              <h4>占据数：</h4>
              <div class="equation-block">
                <p>n(k) = ∫ dω f(ω)A₀(k,ω)</p>
                <p>f(ω): 费米分布函数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Green函数的物理性质</h2>
        <div class="properties-section">
          <div class="physics-insight">
            <h3>🎯 重要性质</h3>
            <p>Green函数的基本性质：</p>
            <ul>
              <li><strong>因果性：</strong>Gᴿ(t < 0) = 0</li>
              <li><strong>厄米性：</strong>[Gᴿ(ω)]† = Gᴬ(ω)</li>
              <li><strong>谱权重：</strong>∫ dω A(k,ω) = 1</li>
              <li><strong>粒子数：</strong>n = ∫ dk/(2π) ∫ dω f(ω)A(k,ω)</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Green函数的深层数学结构</h2>
        <div class="mathematical-structure-grid">
          <div class="structure-card">
            <div class="structure-icon">🧮</div>
            <div class="structure-content">
              <h4>Lehmann表示的完整推导</h4>
              <p>从多体波函数的完备性出发，严格推导Green函数的谱表示</p>
              <div class="equation">
                G(k,ω) = Σₙ |⟨0|ĉₖ|n⟩|²/(ω - (Eₙ-E₀) + iη) + Σₘ |⟨m|ĉₖ†|0⟩|²/(ω + (E₀-Eₘ) - iη)
              </div>
              <p><strong>物理解释：</strong></p>
              <ul>
                <li>第一项：添加粒子的过程 (ω > 0)</li>
                <li>第二项：移除粒子的过程 (ω < 0)</li>
                <li>极点位置：准粒子能量</li>
                <li>留数：谱权重</li>
              </ul>
            </div>
          </div>

          <div class="structure-card">
            <div class="structure-icon">🔄</div>
            <div class="structure-content">
              <h4>解析性质与因果结构</h4>
              <p>Green函数在复频率平面的解析结构反映了系统的因果性</p>
              <div class="equation">
                G^R(k,z): 上半复平面解析，极点在下半平面
              </div>
              <div class="equation">
                G^A(k,z): 下半复平面解析，极点在上半平面
              </div>
              <p><strong>Kramers-Kronig关系：</strong></p>
              <div class="equation">
                Re G^R(k,ω) = (1/π) P ∫ Im G^R(k,ω')/(ω-ω') dω'
              </div>
              <p>实部和虚部通过因果性相互约束</p>
            </div>
          </div>

          <div class="structure-card">
            <div class="structure-icon">📈</div>
            <div class="structure-content">
              <h4>谱函数的深层意义</h4>
              <p>谱函数A(k,ω)包含了系统的所有单粒子激发信息</p>
              <div class="equation">
                A(k,ω) = -2Im G^R(k,ω) = Σₙ |⟨n|ĉₖ†|0⟩|² δ(ω - (Eₙ-E₀))
              </div>
              <p><strong>重要性质：</strong></p>
              <ul>
                <li>正定性：A(k,ω) ≥ 0</li>
                <li>归一化：∫ A(k,ω) dω = 1</li>
                <li>对称性：A(k,-ω) = -A(k,ω) (费米子)</li>
                <li>实验可测：ARPES直接测量A(k,ω)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级Green函数技术</h2>
        <div class="advanced-techniques-grid">
          <div class="technique-category">
            <h4>🎯 Dyson方程与自能</h4>
            <div class="technique-item">
              <h5>Dyson方程</h5>
              <p>相互作用系统Green函数的基本方程</p>
              <div class="equation">
                G = G₀ + G₀ΣG = (G₀⁻¹ - Σ)⁻¹
              </div>
              <p>其中Σ是自能，包含所有相互作用效应</p>
            </div>
            
            <div class="technique-item">
              <h5>自能的物理意义</h5>
              <p>自能Σ(k,ω)描述粒子与环境的相互作用</p>
              <div class="equation">
                Σ(k,ω) = Σ'(k,ω) + iΣ''(k,ω)
              </div>
              <ul>
                <li>Σ'(k,ω)：能量重整化</li>
                <li>Σ''(k,ω)：准粒子寿命</li>
              </ul>
            </div>

            <div class="technique-item">
              <h5>准粒子近似</h5>
              <p>在费米面附近的低能激发</p>
              <div class="equation">
                G^R(k,ω) ≈ Z_k/(ω - ε̃_k + iΓ_k)
              </div>
              <p>Z_k：准粒子权重，ε̃_k：重整化能量，Γ_k：准粒子寿命</p>
            </div>
          </div>

          <div class="technique-category">
            <h4>🌡️ 有限温度Green函数</h4>
            <div class="technique-item">
              <h5>Matsubara形式</h5>
              <p>虚时间Green函数的频率表示</p>
              <div class="equation">
                G(k,iωₙ) = ∫₀^β dτ e^(iωₙτ) G(k,τ)
              </div>
              <p>ωₙ = (2n+1)π/β：费米子Matsubara频率</p>
            </div>

            <div class="technique-item">
              <h5>解析延拓</h5>
              <p>从虚频率到实频率的转换</p>
              <div class="equation">
                G^R(k,ω) = G(k,iωₙ → ω + i0⁺)
              </div>
              <p>通过Padé近似或最大熵方法实现</p>
            </div>

            <div class="technique-item">
              <h5>温度效应</h5>
              <p>有限温度下的谱函数展宽</p>
              <div class="equation">
                A(k,ω,T) = A₀(k,ω) ⊗ f_T(ω)
              </div>
              <p>f_T(ω)：温度展宽函数</p>
            </div>
          </div>

          <div class="technique-category">
            <h4>🔬 实验联系</h4>
            <div class="technique-item">
              <h5>ARPES谱学</h5>
              <p>角分辨光电子能谱直接测量谱函数</p>
              <div class="equation">
                I(k,ω) ∝ f(ω) A(k,ω) |M(k,ω)|²
              </div>
              <p>M(k,ω)：矩阵元，f(ω)：费米分布</p>
            </div>

            <div class="technique-item">
              <h5>隧道谱学</h5>
              <p>扫描隧道显微镜测量局域态密度</p>
              <div class="equation">
                dI/dV ∝ ρ(ω) = ∫ dk A(k,ω)
              </div>
              <p>提供实空间的谱信息</p>
            </div>

            <div class="technique-item">
              <h5>输运性质</h5>
              <p>通过Green函数计算电导率</p>
              <div class="equation">
                σ(ω) = ∫ dk v_k² A(k,ω) (-∂f/∂ω)
              </div>
              <p>v_k：群速度</p>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>物理应用</h2>
        <div class="example-box">
          <h3>例1：态密度计算</h3>
          <p>单粒子态密度：</p>
          <div class="equation-block">
            <p>ρ(ω) = ∫ dk/(2π) A(k,ω)</p>
            <p>从谱函数积分得到</p>
            <p>可与ARPES实验比较</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：准粒子寿命</h3>
          <p>谱函数的宽度：</p>
          <div class="equation-block">
            <p>Γ = -Im Σ(k,ω)</p>
            <p>Σ: 自能函数</p>
            <p>1/Γ: 准粒子寿命</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：输运性质</h3>
          <p>电导率计算：</p>
          <div class="equation-block">
            <p>σ ∝ ∫ dω (-∂f/∂ω) ∫ dk vₖ²τ(k,ω)</p>
            <p>vₖ: 群速度，τ: 散射时间</p>
            <p>从Green函数导出</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验观测</h2>
        <div class="experimental-techniques">
          <div class="technique-item">
            <h3>📡 ARPES</h3>
            <p>角分辨光电子谱直接测量A(k,ω)</p>
          </div>
          <div class="technique-item">
            <h3>🔬 STM</h3>
            <p>扫描隧道显微镜测量局域态密度</p>
          </div>
          <div class="technique-item">
            <h3>⚡ 输运测量</h3>
            <p>电阻率、霍尔效应等宏观性质</p>
          </div>
          <div class="technique-item">
            <h3>🌊 中子散射</h3>
            <p>动力学结构因子与Green函数相关</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>Green函数包含系统的完整单粒子信息</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>谱函数描述单粒子激发谱</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>解析延拓连接虚频率和实频率</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>可直接与多种实验技术比较</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>是多体理论的基础工具</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_5_1',
  mounted() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #20c997;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: linear-gradient(135deg, #20c997 0%, #17a2b8 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  color: #666;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
}

.introduction {
  background: linear-gradient(135deg, #d1f2eb 0%, #a3e4d7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #0c5460;
  font-weight: 500;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.spectral-section {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

/* 数学结构网格样式 */
.mathematical-structure-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.structure-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 25px;
  color: white;
  box-shadow: 0 10px 35px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.structure-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 45px rgba(102, 126, 234, 0.4);
}

.structure-icon {
  font-size: 2.8em;
  margin-bottom: 18px;
  display: block;
}

.structure-content h4 {
  margin: 0 0 15px 0;
  font-size: 1.4em;
  font-weight: 600;
}

.structure-content p {
  margin: 0 0 12px 0;
  line-height: 1.7;
  opacity: 0.95;
}

.structure-content .equation {
  background: rgba(255, 255, 255, 0.15);
  padding: 12px;
  border-radius: 8px;
  margin: 10px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
}

.structure-content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.structure-content li {
  margin: 5px 0;
  line-height: 1.6;
}

/* 高级技术网格样式 */
.advanced-techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.technique-category {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
  box-shadow: 0 8px 30px rgba(240, 147, 251, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.technique-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(240, 147, 251, 0.4);
}

.technique-category h4 {
  margin: 0 0 15px 0;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.technique-item {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
}

.technique-item h5 {
  margin: 0 0 10px 0;
  font-size: 1.1em;
  font-weight: 500;
}

.technique-item p {
  margin: 0 0 8px 0;
  line-height: 1.6;
  opacity: 0.9;
  font-size: 0.95em;
}

.technique-item .equation {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px;
  border-radius: 6px;
  margin: 8px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.technique-item ul {
  margin: 8px 0;
  padding-left: 18px;
}

.technique-item li {
  margin: 4px 0;
  line-height: 1.5;
  font-size: 0.9em;
}

.properties-section {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.mathematical-content h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #20c997;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #155724;
  margin-bottom: 1rem;
}

.physics-insight ul {
  list-style: none;
  padding: 0;
}

.physics-insight li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.physics-insight li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #155724;
  font-weight: bold;
}

.experimental-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.technique-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.technique-item h3 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.applications {
  margin: 3rem 0;
}

.example-box {
  background: #f0f8ff;
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.example-box h3 {
  color: #0056b3;
  margin-bottom: 1rem;
}

.summary {
  background: linear-gradient(135deg, #20c997 0%, #17a2b8 100%);
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
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .experimental-techniques {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>