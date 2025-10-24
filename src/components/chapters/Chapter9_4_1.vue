<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.4.1 一维无自旋费米子的重整化</h1>
      <p class="chapter-subtitle">One-Dimensional Spinless Fermion Renormalization</p>
    </div>

    <div class="content-section">
      <h2>基本理论框架</h2>
      <div class="concept-box">
        <h3>一维费米子系统的特殊性</h3>
        <p>一维费米子系统具有独特的物理性质，与高维系统存在本质差异：</p>
        <ul>
          <li>费米面退化为两个费米点</li>
          <li>低能激发主要来自费米点附近</li>
          <li>相互作用效应被显著放大</li>
          <li>准粒子图像可能失效</li>
        </ul>
      </div>

      <div class="formula-section">
        <h3>哈密顿量</h3>
        <p>一维无自旋费米子系统的哈密顿量可以写为：</p>
        <div class="formula-block">
          H = H₀ + H_int
        </div>
        <p>其中动能项：</p>
        <div class="formula-block">
                H₀ = ∑_k ε_k c<sup>†</sup>_k c_k = ∑_k v_F(k - k_F) c<sup>†</sup>_k c_k
              </div>
              <p>相互作用项：</p>
              <div class="formula-block">
                H_int = (1/2L) ∑_{k,k',q} V(q) c<sup>†</sup>_{k+q} c<sup>†</sup>_{k'-q} c_{k'} c_k
              </div>
      </div>
    </div>

    <div class="content-section">
      <h2>线性化近似</h2>
      <div class="linearization-grid">
        <div class="method-card">
          <h3>费米点附近线性化</h3>
          <p>在费米点附近，能谱可以线性化：</p>
          <div class="formula-block">
            ε_k ≈ v_F|k - k_F|
          </div>
          <p>引入右行和左行费米子：</p>
          <ul>
            <li>右行：k ≈ +k_F</li>
            <li>左行：k ≈ -k_F</li>
          </ul>
        </div>

        <div class="method-card">
          <h3>连续化处理</h3>
          <p>将离散的格点模型连续化：</p>
          <div class="formula-block">
            c_k → ψ_R(x) + ψ_L(x)
          </div>
          <p>其中R和L分别表示右行和左行费米子场。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群分析</h2>
      <div class="rg-analysis">
        <div class="rg-section">
          <h3>标度变换</h3>
          <p>在重整化群变换下，考虑标度变换：</p>
          <div class="formula-block">
            x → x' = x/b, τ → τ' = τ/b^z
          </div>
          <p>其中b是标度因子，z是动力学指数。</p>
        </div>

        <div class="rg-section">
          <h3>相互作用的重整化</h3>
          <p>不同类型的相互作用具有不同的标度行为：</p>
          <div class="interaction-types">
            <div class="interaction-item">
              <h4>前向散射 (g₁)</h4>
              <p>边际相关，β函数为零</p>
              <div class="formula-block">
                dg₁/dl = 0
              </div>
            </div>
            <div class="interaction-item">
              <h4>后向散射 (g₂)</h4>
              <p>相关相互作用，随能量标度增长</p>
              <div class="formula-block">
                dg₂/dl = -g₂²/(2πv_F)
              </div>
            </div>
            <div class="interaction-item">
              <h4>Umklapp散射 (g₃)</h4>
              <p>在半填充时变为相关</p>
              <div class="formula-block">
                dg₃/dl = -g₃²/(2πv_F)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Luttinger液体理论</h2>
      <div class="luttinger-theory">
        <div class="concept-box">
          <h3>Luttinger液体参数</h3>
          <p>一维费米子系统的低能行为由Luttinger液体参数K和v描述：</p>
          <div class="formula-block">
            K = π√(ρ₀/m*v), v = √(v_F²+ V₀ρ₀/m*)
          </div>
          <p>其中ρ₀是粒子密度，m*是有效质量。</p>
        </div>

        <div class="properties-grid">
          <div class="property-card">
            <h3>关联函数</h3>
            <p>密度-密度关联函数：</p>
            <div class="formula-block">
              ⟨ρ(x)ρ(0)⟩ ~ x^{-2}
            </div>
          </div>

          <div class="property-card">
            <h3>单粒子格林函数</h3>
            <p>表现出非费米液体行为：</p>
            <div class="formula-block">
              G(x,τ) ~ (x² + v²τ²)^{-(1/2)(K + 1/K)}
            </div>
          </div>

          <div class="property-card">
            <h3>谱函数</h3>
            <p>不存在尖锐的准粒子峰：</p>
            <div class="formula-block">
              A(k,ω) ~ |ω - v(k-k_F)|^{α}
            </div>
            <p>其中α = (K + 1/K)/2 - 1</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相图和相变</h2>
      <div class="phase-diagram">
        <div class="phase-card">
          <h3>Luttinger液体相</h3>
          <ul>
            <li>K > 1: 吸引相互作用占主导</li>
            <li>K < 1: 排斥相互作用占主导</li>
            <li>K = 1: 自由费米子情况</li>
          </ul>
        </div>

        <div class="phase-card">
          <h3>相变临界点</h3>
          <p>在特定条件下可能发生相变：</p>
          <ul>
            <li>Mott绝缘体相变 (K → 0)</li>
            <li>超导相变 (K → ∞)</li>
            <li>电荷密度波相变</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测</h2>
      <div class="experiment-grid">
        <div class="experiment-card">
          <h3>一维导体</h3>
          <ul>
            <li>碳纳米管</li>
            <li>量子线</li>
            <li>有机导体</li>
            <li>边缘态系统</li>
          </ul>
        </div>

        <div class="experiment-card">
          <h3>测量技术</h3>
          <ul>
            <li>角分辨光电子谱 (ARPES)</li>
            <li>扫描隧道谱 (STS)</li>
            <li>输运测量</li>
            <li>光学谱学</li>
          </ul>
        </div>

        <div class="experiment-card">
          <h3>观测特征</h3>
          <ul>
            <li>幂律行为的关联函数</li>
            <li>自旋-电荷分离</li>
            <li>非费米液体输运</li>
            <li>线性电导率</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>数值方法</h2>
      <div class="numerical-methods">
        <div class="method-card">
          <h3>密度矩阵重整化群 (DMRG)</h3>
          <p>DMRG是研究一维强关联系统的最有效方法：</p>
          <ul>
            <li>精确处理基态性质</li>
            <li>计算关联函数</li>
            <li>研究相变行为</li>
          </ul>
        </div>

        <div class="method-card">
          <h3>量子蒙特卡罗</h3>
          <p>用于有限温度性质的计算：</p>
          <ul>
            <li>路径积分蒙特卡罗</li>
            <li>辅助场量子蒙特卡罗</li>
            <li>连续时间量子蒙特卡罗</li>
          </ul>
        </div>

        <div class="method-card">
          <h3>精确对角化</h3>
          <p>适用于小系统的精确计算：</p>
          <ul>
            <li>基态和低激发态</li>
            <li>动力学性质</li>
            <li>有限尺寸标度</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论框架</h3>
          <ul>
            <li>线性化近似</li>
            <li>重整化群分析</li>
            <li>Luttinger液体理论</li>
            <li>相图构建</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>物理图像</h3>
          <ul>
            <li>非费米液体行为</li>
            <li>自旋-电荷分离</li>
            <li>幂律关联</li>
            <li>量子临界性</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>实验联系</h3>
          <ul>
            <li>一维材料系统</li>
            <li>谱学测量</li>
            <li>输运性质</li>
            <li>相变观测</li>
          </ul>
        </div>

        <div class="summary-item">
          <h3>计算方法</h3>
          <ul>
            <li>DMRG方法</li>
            <li>量子蒙特卡罗</li>
            <li>精确对角化</li>
            <li>解析理论</li>
          </ul>
        </div>
      </div>
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
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-style: italic;
}

.content-section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.concept-box {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.concept-box h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.concept-box ul {
  padding-left: 20px;
}

.concept-box li {
  margin: 8px 0;
}

.formula-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
  font-family: 'Times New Roman', serif;
}

.linearization-grid, .properties-grid, .experiment-grid, .numerical-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.method-card, .property-card, .experiment-card, .phase-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.method-card:hover, .property-card:hover, .experiment-card:hover, .phase-card:hover {
  transform: translateY(-5px);
}

.method-card h3, .property-card h3, .experiment-card h3, .phase-card h3 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.rg-analysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 25px 0;
}

.rg-section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.rg-section h3 {
  color: #27ae60;
  margin-bottom: 15px;
}

.interaction-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.interaction-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.interaction-item h4 {
  color: #8e44ad;
  margin-bottom: 10px;
}

.luttinger-theory {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin: 25px 0;
}

.phase-diagram {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin: 25px 0;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-item h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-item ul {
  list-style: none;
  padding: 0;
}

.summary-item li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.summary-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffeaa7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .linearization-grid, .properties-grid, .experiment-grid, .numerical-methods {
    grid-template-columns: 1fr;
  }
  
  .rg-analysis, .phase-diagram {
    grid-template-columns: 1fr;
  }
  
  .interaction-types {
    grid-template-columns: 1fr;
  }
}
</style>