<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.1 谁拯救了升降算符表示</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">算符理论</span>
        <span class="reading-time">预计阅读时间: 20分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>升降算符的理论基础</h2>
        <p class="lead-text">
          升降算符在量子力学中的地位举足轻重，它们不仅简化了计算，更重要的是揭示了量子系统的深层结构。
          从简谐振子到量子场论，升降算符都扮演着核心角色。
        </p>
      </section>

      <section class="content-section">
        <h2>升降算符的数学定义</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>基本定义</h3>
            <p>升降算符的标准形式和性质</p>
            <div class="mathematical-content">
              <h4>简谐振子中的定义：</h4>
              <div class="equation-block">
                <p>â = √(mω/2ℏ) x̂ + i√(1/2ℏmω) p̂</p>
                <p>â† = √(mω/2ℏ) x̂ - i√(1/2ℏmω) p̂</p>
              </div>
              
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p>[â, â†] = 1</p>
                <p>[â, â] = [â†, â†] = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>作用规律</h3>
            <p>升降算符对量子态的作用</p>
            <div class="mathematical-content">
              <h4>对数态的作用：</h4>
              <div class="equation-block">
                <p>â|n⟩ = √n|n-1⟩</p>
                <p>â†|n⟩ = √(n+1)|n+1⟩</p>
              </div>
              
              <h4>能量本征值：</h4>
              <div class="equation-block">
                <p>Ĥ = ℏω(â†â + 1/2)</p>
                <p>Ĥ|n⟩ = ℏω(n + 1/2)|n⟩</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>升降算符的深层数学结构</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🏛️</div>
            <h3>李代数结构与表示理论</h3>
            <p>升降算符构成的无穷维李代数</p>
            <div class="mathematical-content">
              <h4>Heisenberg-Weyl代数：</h4>
              <div class="equation-block">
                <p>𝒜 = span{â, â†, I}</p>
                <p>[â, â†] = I (中心扩张)</p>
                <p>Stone-von Neumann定理：不可约表示唯一性</p>
              </div>
              
              <h4>生成函数与相干态：</h4>
              <div class="equation-block">
                <p>位移算符：D̂(α) = exp(αâ† - α*â)</p>
                <p>相干态：|α⟩ = D̂(α)|0⟩ = e^(-|α|²/2)∑ₙ (αⁿ/√n!)|n⟩</p>
                <p>最小不确定性：ΔX·ΔP = ℏ/2</p>
              </div>
              
              <h4>Bargmann-Fock表示：</h4>
              <div class="equation-block">
                <p>解析函数空间：ℋ = {f(z) | ∫|f(z)|²e^(-|z|²)d²z < ∞}</p>
                <p>â → z, â† → ∂/∂z</p>
                <p>内积：⟨f|g⟩ = (1/π)∫f*(z)g(z)e^(-|z|²)d²z</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>场算符的连续化与重整化</h3>
            <p>从离散模式到连续场的深入分析</p>
            <div class="mathematical-content">
              <h4>场算符的构造：</h4>
              <div class="equation-block">
                <p>ψ̂(r,t) = ∑ₖ φₖ(r) âₖ(t)e^(-iωₖt)</p>
                <p>连续极限：∑ₖ → ∫d³k/(2π)³</p>
                <p>正交归一：∫φₖ*(r)φₖ'(r)d³r = δₖₖ'</p>
              </div>
              
              <h4>等时对易关系：</h4>
              <div class="equation-block">
                <p>[ψ̂(r,t), ψ̂†(r',t)] = δ³(r-r')</p>
                <p>[ψ̂(r,t), ψ̂(r',t)] = 0</p>
                <p>微观因果性：[ψ̂(r,t), ψ̂(r',t')] = 0, |r-r'| > c|t-t'|</p>
              </div>
              
              <h4>重整化与紫外发散：</h4>
              <div class="equation-block">
                <p>紫外截断：Λ = 动量截断</p>
                <p>维数正规化：d = 4-ε</p>
                <p>重整化群方程：β(g) = μ∂g/∂μ</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>对称性与守恒定律</h3>
            <p>Noether定理在二次量子化中的体现</p>
            <div class="mathematical-content">
              <h4>连续对称性：</h4>
              <div class="equation-block">
                <p>U(1)相位对称性：ψ̂ → e^(iθ)ψ̂</p>
                <p>粒子数守恒：N̂ = ∫ψ̂†(r)ψ̂(r)d³r</p>
                <p>流密度：ĵ(r) = (ℏ/2mi)[ψ̂†∇ψ̂ - (∇ψ̂†)ψ̂]</p>
              </div>
              
              <h4>时空对称性：</h4>
              <div class="equation-block">
                <p>时间平移：Ĥ = i∂/∂t (能量守恒)</p>
                <p>空间平移：P̂ = -i∇ (动量守恒)</p>
                <p>转动对称性：Ĵ = r̂ × P̂ + Ŝ (角动量守恒)</p>
              </div>
              
              <h4>内部对称性：</h4>
              <div class="equation-block">
                <p>SU(N)对称性：ψ̂ᵢ → Uᵢⱼψ̂ⱼ</p>
                <p>同位旋：SU(2)ᵢₛₒₛₚᵢₙ</p>
                <p>色对称性：SU(3)_color (QCD)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级应用与现代发展</h2>
        <div class="example-grid">
          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">🌌</div>
              <h3>量子场论中的路径积分</h3>
            </div>
            <div class="example-content">
              <h4>相干态路径积分：</h4>
              <div class="equation-block">
                <p>Z = ∫𝒟[α*,α] exp(i∫dt[iα*∂ₜα - H(α*,α)])</p>
                <p>生成泛函：Z[J*,J] = ⟨0|T exp(i∫dt[J*ψ̂ + ψ̂†J])|0⟩</p>
                <p>Wick定理：时间有序乘积的收缩</p>
              </div>
              
              <h4>费曼图与微扰论：</h4>
              <div class="equation-block">
                <p>传播子：G(k) = 1/(k² - m² + iε)</p>
                <p>顶点：相互作用强度</p>
                <p>圈积分：量子修正</p>
              </div>
              
              <h4>重整化群与临界现象：</h4>
              <div class="physics-insight">
                <p><strong>β函数：</strong>耦合常数的标度行为</p>
                <p><strong>固定点：</strong>临界点的普适性</p>
                <p><strong>异常维数：</strong>场算符的标度维数修正</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">🔬</div>
              <h3>凝聚态中的准粒子激发</h3>
            </div>
            <div class="example-content">
              <h4>Bogoliubov-de Gennes方程：</h4>
              <div class="equation-block">
                <p>(ℋ₀ - μ    Δ  )(uₙ) = Eₙ(uₙ)</p>
                <p>(Δ*   -ℋ₀* + μ)(vₙ)    (vₙ)</p>
                <p>准粒子算符：γₙ = uₙψ̂ + vₙψ̂†</p>
              </div>
              
              <h4>超导体中的Cooper对：</h4>
              <div class="equation-block">
                <p>配对算符：Δ̂ = ∑ₖ Δₖ ĉₖ↑ĉ₋ₖ↓</p>
                <p>BCS基态：|BCS⟩ = ∏ₖ(uₖ + vₖĉ†ₖ↑ĉ†₋ₖ↓)|0⟩</p>
                <p>能隙方程：Δₖ = -∑ₖ' Vₖₖ' (Δₖ'/2Eₖ')tanh(βEₖ'/2)</p>
              </div>
              
              <h4>拓扑超导体：</h4>
              <div class="physics-insight">
                <p><strong>Majorana费米子：</strong>γ† = γ (自共轭)</p>
                <p><strong>拓扑不变量：</strong>Z₂分类</p>
                <p><strong>边界态：</strong>零能模与拓扑保护</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">💻</div>
              <h3>量子计算与量子信息</h3>
            </div>
            <div class="example-content">
              <h4>量子比特的实现：</h4>
              <div class="equation-block">
                <p>Transmon量子比特：|0⟩, |1⟩ 基态</p>
                <p>Rabi频率：Ω = ⟨0|V̂|1⟩/ℏ</p>
                <p>退相干时间：T₁ (弛豫), T₂ (失相)</p>
              </div>
              
              <h4>量子纠缠与Bell态：</h4>
              <div class="equation-block">
                <p>Bell态：|Φ±⟩ = (|00⟩ ± |11⟩)/√2</p>
                <p>纠缠熵：S = -Tr(ρₐln ρₐ)</p>
                <p>Schmidt分解：|ψ⟩ = ∑ᵢ λᵢ|iₐ⟩⊗|iᵦ⟩</p>
              </div>
              
              <h4>量子算法：</h4>
              <div class="physics-insight">
                <p><strong>Shor算法：</strong>质因数分解的指数加速</p>
                <p><strong>Grover算法：</strong>数据库搜索的二次加速</p>
                <p><strong>VQE算法：</strong>变分量子本征求解器</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">🌊</div>
              <h3>非平衡量子多体系统</h3>
            </div>
            <div class="example-content">
              <h4>Keldysh形式主义：</h4>
              <div class="equation-block">
                <p>轮廓时间：C = C₁ ∪ C₂</p>
                <p>Green函数：G^<(t,t') = i⟨ψ̂†(t')ψ̂(t)⟩</p>
                <p>Kadanoff-Baym方程：非平衡演化</p>
              </div>
              
              <h4>量子淬火与热化：</h4>
              <div class="equation-block">
                <p>本征态热化假设：⟨n|Â|n⟩ = A_th + e^(-S(E)/2)R_n</p>
                <p>多体局域化：S ∼ ln L (MBL) vs S ∼ L (热化)</p>
                <p>时间晶体：离散时间平移对称性破缺</p>
              </div>
              
              <h4>开放量子系统：</h4>
              <div class="physics-insight">
                <p><strong>Lindblad方程：</strong>马尔可夫主方程</p>
                <p><strong>量子跳跃：</strong>随机薛定谔方程</p>
                <p><strong>环境诱导退相干：</strong>量子-经典过渡</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>升降算符的优势</h2>
        <div class="advantage-grid">
          <div class="advantage-item">
            <h3>🎯 计算简化</h3>
            <p>避免复杂的微分方程求解，转化为代数运算</p>
          </div>
          <div class="advantage-item">
            <h3>🔍 对称性显现</h3>
            <p>自然体现系统的对称性和守恒定律</p>
          </div>
          <div class="advantage-item">
            <h3>🌊 场论基础</h3>
            <p>为量子场论提供了自然的数学框架</p>
          </div>
          <div class="advantage-item">
            <h3>📊 统计处理</h3>
            <p>便于处理多粒子系统的统计性质</p>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>典型应用</h2>
        <div class="example-box">
          <h3>例1：光子系统</h3>
          <p>电磁场的量子化：</p>
          <div class="equation-block">
            <p>Â(r,t) = Σₖ √(ℏωₖ/2ε₀V) [âₖe^(ik·r-iωₖt) + âₖ†e^(-ik·r+iωₖt)]</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：声子系统</h3>
          <p>晶格振动的量子化：</p>
          <div class="equation-block">
            <p>û(r,t) = Σₖ √(ℏ/2NMωₖ) [âₖe^(ik·r-iωₖt) + âₖ†e^(-ik·r+iωₖt)]</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>升降算符提供了量子系统的代数描述</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>简化了能级结构和跃迁过程的计算</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>为多体系统和量子场论奠定基础</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>体现了量子力学的深层数学结构</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3_1',
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
  border-bottom: 3px solid #28a745;
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
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #155724;
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
  border-left: 4px solid #28a745;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #856404;
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
  color: #856404;
  font-weight: bold;
}

.advantage-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.advantage-item {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.advantage-item h3 {
  color: #1565c0;
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
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
  
  .advantage-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>