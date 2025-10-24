<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.3 多体密度矩阵的二次量子化形式</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">密度矩阵</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>密度矩阵的二次量子化表示</h2>
        <p class="lead-text">
          密度矩阵是描述量子多体系统统计性质的核心工具。在二次量子化框架下，
          密度矩阵可以用产生湮灭算符优雅地表示，这不仅简化了计算，还揭示了多体关联的深层结构。
        </p>
      </section>

      <section class="content-section">
        <h2>密度矩阵的深层理论基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎭</div>
            <h3>混合态的数学描述</h3>
            <p>纯态与混合态的统一表示</p>
            <div class="mathematical-content">
              <h4>密度矩阵的定义：</h4>
              <div class="equation-block">
                <p>ρ̂ = ∑ᵢ pᵢ|ψᵢ⟩⟨ψᵢ| (混合态)</p>
                <p>ρ̂ = |ψ⟩⟨ψ| (纯态)</p>
                <p>Tr(ρ̂) = 1, ρ̂ ≥ 0</p>
              </div>
              
              <h4>纯度与混合度：</h4>
              <div class="equation-block">
                <p>纯度：P = Tr(ρ̂²)</p>
                <p>纯态：P = 1</p>
                <p>最大混合态：P = 1/d (d维)</p>
              </div>
              
              <h4>von Neumann熵：</h4>
              <div class="equation-block">
                <p>S = -Tr(ρ̂ ln ρ̂)</p>
                <p>纯态：S = 0</p>
                <p>最大混合态：S = ln d</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>热平衡态密度矩阵</h3>
            <p>统计力学中的密度矩阵</p>
            <div class="mathematical-content">
              <h4>正则系综：</h4>
              <div class="equation-block">
                <p>ρ̂ = e^{-βĤ}/Z</p>
                <p>Z = Tr(e^{-βĤ}) (配分函数)</p>
                <p>β = 1/(kᵦT)</p>
              </div>
              
              <h4>巨正则系综：</h4>
              <div class="equation-block">
                <p>ρ̂ = e^{-β(Ĥ-μN̂)}/Ξ</p>
                <p>Ξ = Tr(e^{-β(Ĥ-μN̂)}) (巨配分函数)</p>
                <p>μ: 化学势</p>
              </div>
              
              <h4>期望值计算：</h4>
              <div class="equation-block">
                <p>⟨Ô⟩ = Tr(ρ̂Ô)</p>
                <p>⟨n̂ₖ⟩ = Tr(ρ̂n̂ₖ)</p>
                <p>关联函数：⟨ÔÂ⟩ - ⟨Ô⟩⟨Â⟩</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔗</div>
            <h3>约化密度矩阵</h3>
            <p>子系统的量子态描述</p>
            <div class="mathematical-content">
              <h4>偏迹操作：</h4>
              <div class="equation-block">
                <p>ρ̂_A = Tr_B(ρ̂_{AB})</p>
                <p>ρ̂_A = ∑ᵢ⟨i_B|ρ̂_{AB}|i_B⟩</p>
                <p>{|i_B⟩}: 子系统B的基</p>
              </div>
              
              <h4>Schmidt分解：</h4>
              <div class="equation-block">
                <p>|ψ⟩_{AB} = ∑ᵢ √λᵢ|i_A⟩⊗|i_B⟩</p>
                <p>ρ̂_A = ∑ᵢ λᵢ|i_A⟩⟨i_A|</p>
                <p>λᵢ: Schmidt系数</p>
              </div>
              
              <h4>纠缠度量：</h4>
              <div class="physics-insight">
                <p><strong>纠缠熵：</strong>S_A = -Tr(ρ̂_A ln ρ̂_A)</p>
                <p><strong>纠缠负性：</strong>𝒩 = (||ρ̂_A^{T_A}||₁ - 1)/2</p>
                <p><strong>并发度：</strong>C = max(0, λ₁-λ₂-λ₃-λ₄)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体系统中的高级应用</h2>
        <div class="application-grid">
          <div class="application-card">
            <div class="application-icon">🌊</div>
            <h3>量子相变理论</h3>
            <p>密度矩阵在相变研究中的应用</p>
            <div class="mathematical-content">
              <h4>序参量与对称性破缺：</h4>
              <div class="equation-block">
                <p>⟨Ô⟩ = Tr(ρ̂Ô) (序参量)</p>
                <p>自发对称性破缺：⟨Ô⟩ ≠ 0</p>
                <p>临界点：∂²F/∂φ² = 0</p>
              </div>
              
              <h4>量子临界性：</h4>
              <div class="equation-block">
                <p>关联长度：ξ ∝ |g-g_c|^{-ν}</p>
                <p>动力学指数：z</p>
                <p>标度律：ω ∝ k^z</p>
              </div>
              
              <h4>纠缠熵的标度行为：</h4>
              <div class="physics-insight">
                <p><strong>面积定律：</strong>S ∝ L^{d-1} (基态)</p>
                <p><strong>对数修正：</strong>S ∝ ln L (临界点)</p>
                <p><strong>拓扑纠缠熵：</strong>γ = ln(D) (拓扑相)</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🔬</div>
            <h3>开放量子系统</h3>
            <p>环境耦合下的密度矩阵演化</p>
            <div class="mathematical-content">
              <h4>Lindblad主方程：</h4>
              <div class="equation-block">
                <p>∂ρ̂/∂t = -i[Ĥ,ρ̂] + ∑ₖ(L̂ₖρ̂L̂ₖ† - ½{L̂ₖ†L̂ₖ,ρ̂})</p>
                <p>L̂ₖ: Lindblad算符</p>
                <p>耗散项：γ(n̂ρ̂n̂ - ½{n̂²,ρ̂})</p>
              </div>
              
              <h4>量子跳跃方法：</h4>
              <div class="equation-block">
                <p>|ψ(t+dt)⟩ = (1-iĤ_eff dt)|ψ(t)⟩</p>
                <p>Ĥ_eff = Ĥ - i∑ₖL̂ₖ†L̂ₖ/2</p>
                <p>跳跃概率：pₖ = ⟨ψ|L̂ₖ†L̂ₖ|ψ⟩dt</p>
              </div>
              
              <h4>稳态解与弛豫：</h4>
              <div class="physics-insight">
                <p><strong>稳态：</strong>∂ρ̂_ss/∂t = 0</p>
                <p><strong>弛豫时间：</strong>τ = 1/γ</p>
                <p><strong>量子Zeno效应：</strong>频繁测量抑制演化</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🧮</div>
            <h3>量子信息处理</h3>
            <p>密度矩阵在量子计算中的应用</p>
            <div class="mathematical-content">
              <h4>量子通道：</h4>
              <div class="equation-block">
                <p>Φ(ρ̂) = ∑ᵢ K̂ᵢρ̂K̂ᵢ†</p>
                <p>∑ᵢ K̂ᵢ†K̂ᵢ = Î (完备性)</p>
                <p>Choi矩阵：J_Φ = (id⊗Φ)(|Φ⁺⟩⟨Φ⁺|)</p>
              </div>
              
              <h4>量子纠错：</h4>
              <div class="equation-block">
                <p>稳定子：S = ⟨g₁,g₂,...,gₙ₋ₖ⟩</p>
                <p>逻辑态：|ψ_L⟩ ∈ ker(S)</p>
                <p>纠错条件：⟨ψᵢ|E†ⱼEₖ|ψₗ⟩ = Cⱼₖδᵢₗ</p>
              </div>
              
              <h4>量子算法：</h4>
              <div class="physics-insight">
                <p><strong>Grover搜索：</strong>O(√N)复杂度</p>
                <p><strong>Shor分解：</strong>指数加速</p>
                <p><strong>VQE：</strong>变分量子本征求解器</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🌌</div>
            <h3>多体局域化</h3>
            <p>无序系统中的密度矩阵行为</p>
            <div class="mathematical-content">
              <h4>Anderson局域化：</h4>
              <div class="equation-block">
                <p>Ĥ = ∑ᵢεᵢn̂ᵢ + ∑_{⟨i,j⟩}tᵢⱼ(ĉᵢ†ĉⱼ + h.c.)</p>
                <p>εᵢ: 随机在位能</p>
                <p>局域化长度：ξ ∝ 1/W²</p>
              </div>
              
              <h4>多体局域化相变：</h4>
              <div class="equation-block">
                <p>热化相 ↔ MBL相</p>
                <p>临界无序强度：W_c</p>
                <p>本征态热化假设破缺</p>
              </div>
              
              <h4>纠缠增长：</h4>
              <div class="physics-insight">
                <p><strong>热化相：</strong>S(t) ∝ t (体积定律)</p>
                <p><strong>MBL相：</strong>S(t) ∝ ln t (对数增长)</p>
                <p><strong>临界点：</strong>幂律增长</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>玻色子和费米子的密度矩阵</h2>
        <div class="comparison-grid">
          <div class="comparison-card boson">
            <h3>🌊 玻色子系统</h3>
            <div class="mathematical-content">
              <h4>玻色-爱因斯坦分布：</h4>
              <div class="equation-block">
                <p>⟨nₖ⟩ = 1/(e^(β(εₖ-μ)) - 1)</p>
                <p>μ < εₘᵢₙ (化学势限制)</p>
              </div>
              
              <h4>玻色-爱因斯坦凝聚：</h4>
              <div class="equation-block">
                <p>T < Tᶜ: 宏观占据基态</p>
                <p>⟨n₀⟩ ~ N</p>
              </div>
            </div>
          </div>

          <div class="comparison-card fermion">
            <h3>⚛️ 费米子系统</h3>
            <div class="mathematical-content">
              <h4>费米-狄拉克分布：</h4>
              <div class="equation-block">
                <p>⟨nₖ⟩ = 1/(e^(β(εₖ-μ)) + 1)</p>
                <p>0 ≤ ⟨nₖ⟩ ≤ 1</p>
              </div>
              
              <h4>费米海：</h4>
              <div class="equation-block">
                <p>T = 0: ⟨nₖ⟩ = θ(εF - εₖ)</p>
                <p>εF = 费米能</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>关联函数与密度矩阵</h2>
        <div class="physics-insight">
          <h3>🔗 多体关联</h3>
          <p>密度矩阵包含了系统的所有关联信息：</p>
          <ul>
            <li><strong>单粒子性质：</strong>通过单粒子约化密度矩阵描述</li>
            <li><strong>配对关联：</strong>通过双粒子约化密度矩阵体现</li>
            <li><strong>长程序：</strong>非对角长程序反映相变</li>
            <li><strong>量子纠缠：</strong>约化密度矩阵的纯度度量纠缠</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2>密度矩阵的性质</h2>
        <div class="property-grid">
          <div class="property-item">
            <h3>🔄 厄米性</h3>
            <p>ρ̂† = ρ̂</p>
          </div>
          <div class="property-item">
            <h3>➕ 正定性</h3>
            <p>⟨ψ|ρ̂|ψ⟩ ≥ 0</p>
          </div>
          <div class="property-item">
            <h3>1️⃣ 归一化</h3>
            <p>Tr(ρ̂) = 1</p>
          </div>
          <div class="property-item">
            <h3>📉 幂等性</h3>
            <p>纯态: ρ̂² = ρ̂</p>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>实际应用示例</h2>
        <div class="example-box">
          <h3>例1：理想费米气体的密度矩阵</h3>
          <p>零温下的费米海：</p>
          <div class="equation-block">
            <p>ρ̂ = ∏ₖ<εF |k⟩⟨k| ⊗ ∏ₖ>εF |0⟩⟨0|</p>
            <p>所有k < kF的态被占据</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：BCS超导态的密度矩阵</h3>
          <p>Cooper对凝聚态：</p>
          <div class="equation-block">
            <p>|BCS⟩ = ∏ₖ (uₖ + vₖâ†ₖ↑â†₋ₖ↓)|0⟩</p>
            <p>非对角长程序</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>密度矩阵的演化</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⏰</div>
            <h3>von Neumann方程</h3>
            <p>密度矩阵的时间演化</p>
            <div class="mathematical-content">
              <h4>演化方程：</h4>
              <div class="equation-block">
                <p>iℏ ∂ρ̂/∂t = [Ĥ, ρ̂]</p>
              </div>
              
              <h4>形式解：</h4>
              <div class="equation-block">
                <p>ρ̂(t) = e^(-iĤt/ℏ)ρ̂(0)e^(iĤt/ℏ)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>主方程</h3>
            <p>开放系统的密度矩阵演化</p>
            <div class="mathematical-content">
              <h4>Lindblad方程：</h4>
              <div class="equation-block">
                <p>∂ρ̂/∂t = -i[Ĥ, ρ̂] + Σᵢ(L̂ᵢρ̂L̂ᵢ† - ½{L̂ᵢ†L̂ᵢ, ρ̂})</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>密度矩阵统一描述纯态和混合态</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>二次量子化提供了自然的表示框架</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>约化密度矩阵揭示多体关联结构</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>统计分布自然体现粒子统计性质</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3_3',
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
  border-bottom: 3px solid #dc3545;
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
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
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
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #721c24;
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

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.application-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #6c757d;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.application-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.application-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.application-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-align: center;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.comparison-card {
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.boson {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 2px solid #2196f3;
}

.fermion {
  background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
  border: 2px solid #ff9800;
}

.comparison-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
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
  border-left: 4px solid #dc3545;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #0c5460;
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
  color: #0c5460;
  font-weight: bold;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.property-item {
  background: linear-gradient(135deg, #fff2cc 0%, #ffe082 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.property-item h3 {
  color: #f57f17;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.property-item p {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin: 0;
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
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
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
  
  .concept-grid, .comparison-grid, .application-grid {
    grid-template-columns: 1fr;
  }
  
  .property-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>