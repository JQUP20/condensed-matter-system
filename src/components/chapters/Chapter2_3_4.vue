<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.4 论证中的二次量子化与Noether定理</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">对称性</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>对称性与守恒定律的深层联系</h2>
        <p class="lead-text">
          Noether定理揭示了对称性与守恒定律之间的深刻联系。在二次量子化框架下，
          这种联系变得更加清晰和优美，为理解多体系统的守恒性质提供了强有力的工具。
        </p>
      </section>

      <section class="content-section">
        <h2>Noether定理的基本表述</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚖️</div>
            <h3>经典表述</h3>
            <p>连续对称性与守恒流</p>
            <div class="mathematical-content">
              <h4>Noether定理：</h4>
              <div class="equation-block">
                <p>每个连续对称性 ↔ 一个守恒流</p>
                <p>∂μjμ = 0</p>
              </div>
              
              <h4>守恒荷：</h4>
              <div class="equation-block">
                <p>Q = ∫ j⁰ d³x</p>
                <p>dQ/dt = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>量子版本</h3>
            <p>算符形式的守恒定律</p>
            <div class="mathematical-content">
              <h4>守恒算符：</h4>
              <div class="equation-block">
                <p>[Ĥ, Q̂] = 0</p>
                <p>dQ̂/dt = 0</p>
              </div>
              
              <h4>Ward恒等式：</h4>
              <div class="equation-block">
                <p>对称性 → 格林函数间的关系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>二次量子化中的对称性</h2>
        <div class="symmetry-grid">
          <div class="symmetry-card translation">
            <h3>🌐 平移对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>ψ̂(r) → ψ̂(r + a)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>P̂ = ∫ ψ̂†(r)(-iℏ∇)ψ̂(r) d³r</p>
                <p>动量守恒</p>
              </div>
            </div>
          </div>

          <div class="symmetry-card rotation">
            <h3>🔄 旋转对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>ψ̂(r) → e^(-iα·Ĵ/ℏ)ψ̂(r)e^(iα·Ĵ/ℏ)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>Ĵ = ∫ ψ̂†(r)(r × (-iℏ∇))ψ̂(r) d³r</p>
                <p>角动量守恒</p>
              </div>
            </div>
          </div>

          <div class="symmetry-card gauge">
            <h3>⚡ 规范对称性</h3>
            <div class="mathematical-content">
              <h4>U(1)变换：</h4>
              <div class="equation-block">
                <p>ψ̂(r) → e^(iα)ψ̂(r)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>N̂ = ∫ ψ̂†(r)ψ̂(r) d³r</p>
                <p>粒子数守恒</p>
              </div>
            </div>
          </div>

          <div class="symmetry-card time">
            <h3>⏰ 时间平移对称性</h3>
            <div class="mathematical-content">
              <h4>变换：</h4>
              <div class="equation-block">
                <p>t → t + τ</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>Ĥ = 哈密顿算符</p>
                <p>能量守恒</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>生成元与李代数</h2>
        <div class="physics-insight">
          <h3>🎯 代数结构</h3>
          <p>对称性变换的生成元构成李代数：</p>
          <ul>
            <li><strong>生成元：</strong>无穷小变换的系数</li>
            <li><strong>对易关系：</strong>定义李代数结构</li>
            <li><strong>Casimir算符：</strong>与所有生成元对易</li>
            <li><strong>表示理论：</strong>不可约表示分类量子态</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2>具体应用示例</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>电荷守恒</h3>
            <p>U(1)规范对称性的结果</p>
            <div class="mathematical-content">
              <h4>电流算符：</h4>
              <div class="equation-block">
                <p>ĵμ(x) = eψ̂†(x)γμψ̂(x)</p>
              </div>
              
              <h4>连续性方程：</h4>
              <div class="equation-block">
                <p>∂μĵμ = 0</p>
                <p>∂ρ̂/∂t + ∇·ĵ = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>自旋守恒</h3>
            <p>SU(2)对称性与自旋</p>
            <div class="mathematical-content">
              <h4>自旋算符：</h4>
              <div class="equation-block">
                <p>Ŝᵢ = (ℏ/2)∫ ψ̂†(r)σᵢψ̂(r) d³r</p>
              </div>
              
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p>[Ŝᵢ, Ŝⱼ] = iℏεᵢⱼₖŜₖ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>物理应用</h2>
        <div class="example-box">
          <h3>例1：晶体中的对称性</h3>
          <p>点群和空间群对称性：</p>
          <div class="equation-block">
            <p>Ĥ = T̂ + V̂(r + R)</p>
            <p>R为晶格矢量，导致Bloch定理</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：超导中的规范对称性破缺</h3>
          <p>U(1)对称性的自发破缺：</p>
          <div class="equation-block">
            <p>⟨ψ̂(r)⟩ ≠ 0</p>
            <p>产生Goldstone模式和Meissner效应</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>对称性破缺与相变</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">💥</div>
            <h3>自发对称性破缺</h3>
            <p>基态不具有哈密顿量的对称性</p>
            <div class="mathematical-content">
              <h4>序参量：</h4>
              <div class="equation-block">
                <p>⟨Ô⟩ ≠ 0</p>
                <p>Ô在对称变换下非平凡变换</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>Goldstone定理</h3>
            <p>连续对称性破缺的后果</p>
            <div class="mathematical-content">
              <h4>Goldstone模式：</h4>
              <div class="equation-block">
                <p>每个破缺的连续对称性</p>
                <p>→ 一个无质量的Goldstone玻色子</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-grid">
          <div class="modern-item">
            <h3>🔗 拓扑序</h3>
            <p>超越Landau范式的量子序</p>
          </div>
          <div class="modern-item">
            <h3>🌐 规范/引力对偶</h3>
            <p>AdS/CFT对应中的对称性</p>
          </div>
          <div class="modern-item">
            <h3>⚛️ 量子信息</h3>
            <p>纠缠与对称性的关系</p>
          </div>
          <div class="modern-item">
            <h3>🔄 异常</h3>
            <p>量子层面的对称性破坏</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>Noether定理建立对称性与守恒定律的对应</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>二次量子化自然体现各种对称性</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>对称性破缺导致丰富的物理现象</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>现代物理中对称性概念不断发展</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3_4',
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
  border-bottom: 3px solid #17a2b8;
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
  background: linear-gradient(135deg, #17a2b8 0%, #20c997 100%);
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
  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
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

.symmetry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.symmetry-card {
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.translation {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border: 2px solid #4caf50;
}

.rotation {
  background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
  border: 2px solid #ff9800;
}

.gauge {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border: 2px solid #9c27b0;
}

.time {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 2px solid #2196f3;
}

.symmetry-card h3 {
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
  border-left: 4px solid #17a2b8;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #fff2cc 0%, #ffe082 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #f57f17;
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
  color: #f57f17;
  font-weight: bold;
}

.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.modern-item {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.modern-item h3 {
  color: #ad1457;
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
  background: linear-gradient(135deg, #17a2b8 0%, #20c997 100%);
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
  
  .symmetry-grid {
    grid-template-columns: 1fr;
  }
  
  .modern-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>