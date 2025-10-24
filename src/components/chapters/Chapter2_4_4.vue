<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.4 相互作用气体的平均场理论</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">平均场</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>平均场近似</h2>
        <p class="lead-text">
          当粒子间存在相互作用时，多体问题变得极其复杂。平均场理论通过将每个粒子所受的相互作用用一个平均场来代替，
          将多体问题简化为有效的单体问题，是处理相互作用系统的重要近似方法。
        </p>
      </section>

      <section class="content-section">
        <h2>哈特里-福克近似</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>基本思想</h3>
            <p>将多体波函数近似为单体波函数的乘积</p>
            <div class="mathematical-content">
              <h4>哈特里近似：</h4>
              <div class="equation-block">
                <p>|Ψ⟩ ≈ ∏ᵢ |φᵢ⟩</p>
                <p>忽略粒子间的关联</p>
              </div>
              
              <h4>哈特里-福克：</h4>
              <div class="equation-block">
                <p>|Ψ⟩ = det{|φᵢ⟩}</p>
                <p>考虑费米子的反对称性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>自洽方程</h3>
            <p>单粒子态的确定</p>
            <div class="mathematical-content">
              <h4>有效哈密顿量：</h4>
              <div class="equation-block">
                <p>Ĥₑff = T̂ + V̂ₕₐᵣₜᵣᵢₑ + V̂ₑₓcₕₐₙgₑ</p>
              </div>
              
              <h4>自洽条件：</h4>
              <div class="equation-block">
                <p>Ĥₑff|φᵢ⟩ = εᵢ|φᵢ⟩</p>
                <p>需要迭代求解</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>哈特里项和交换项</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>哈特里项</h3>
            <p>直接库仑相互作用</p>
            <div class="mathematical-content">
              <h4>势能：</h4>
              <div class="equation-block">
                <p>VH(r) = ∫ d³r' V(r-r')ρ(r')</p>
                <p>ρ(r): 电荷密度</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>每个电子感受到其他电子的平均场</p>
                <p>经典库仑排斥</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>交换项</h3>
            <p>泡利不相容原理的效应</p>
            <div class="mathematical-content">
              <h4>交换势：</h4>
              <div class="equation-block">
                <p>VX(r,r') = -V(r-r')ρ(r,r')/ρ(r)</p>
                <p>ρ(r,r'): 密度矩阵</p>
              </div>
              
              <h4>量子效应：</h4>
              <div class="equation-block">
                <p>降低同自旋电子的相互作用</p>
                <p>形成"交换洞"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>密度泛函理论(DFT)</h2>
        <div class="dft-section">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>基本原理</h3>
            <p>基态性质由电子密度唯一确定</p>
            <div class="mathematical-content">
              <h4>Hohenberg-Kohn定理：</h4>
              <div class="equation-block">
                <p>E[ρ] = T[ρ] + Vₑₓₜ[ρ] + Vₑₑ[ρ]</p>
                <p>能量是密度的泛函</p>
              </div>
              
              <h4>Kohn-Sham方程：</h4>
              <div class="equation-block">
                <p>[-∇²/2 + Vₑff(r)]φᵢ = εᵢφᵢ</p>
                <p>有效单粒子方程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>交换-关联泛函</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>局域密度近似(LDA)</h3>
            <p>最简单的近似</p>
            <div class="mathematical-content">
              <h4>基本假设：</h4>
              <div class="equation-block">
                <p>εₓc[ρ] = ∫ ρ(r)εₓc(ρ(r))d³r</p>
                <p>局域近似</p>
              </div>
              
              <h4>交换能：</h4>
              <div class="equation-block">
                <p>εₓ = -3/4(3/π)^(1/3)ρ^(1/3)</p>
                <p>解析表达式</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>广义梯度近似(GGA)</h3>
            <p>考虑密度梯度的修正</p>
            <div class="mathematical-content">
              <h4>改进形式：</h4>
              <div class="equation-block">
                <p>εₓc[ρ,∇ρ] = ∫ ρ(r)εₓc(ρ,|∇ρ|)d³r</p>
                <p>包含梯度信息</p>
              </div>
              
              <h4>常用泛函：</h4>
              <div class="equation-block">
                <p>PBE, BLYP, PW91等</p>
                <p>更好的描述分子和表面</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>应用实例</h2>
        <div class="example-box">
          <h3>例1：原子结构计算</h3>
          <p>自洽场方法：</p>
          <div class="equation-block">
            <p>计算原子的电子结构</p>
            <p>确定轨道能量和波函数</p>
            <p>预测电离能和激发态</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：固体能带结构</h3>
          <p>DFT计算：</p>
          <div class="equation-block">
            <p>预测材料的电子性质</p>
            <p>能带隙的计算</p>
            <p>态密度分析</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：分子轨道理论</h3>
          <p>化学键的描述：</p>
          <div class="equation-block">
            <p>HOMO-LUMO能隙</p>
            <p>化学反应活性</p>
            <p>分子几何优化</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>平均场理论的局限性</h2>
        <div class="limitations">
          <div class="limitation-item">
            <h3>⚠️ 关联效应</h3>
            <p>忽略了电子间的动态关联，低估了关联能</p>
          </div>
          <div class="limitation-item">
            <h3>🎯 自相互作用</h3>
            <p>电子与自己产生的场相互作用，导致非物理结果</p>
          </div>
          <div class="limitation-item">
            <h3>📊 能带隙问题</h3>
            <p>DFT通常低估半导体和绝缘体的能带隙</p>
          </div>
          <div class="limitation-item">
            <h3>🌊 强关联系统</h3>
            <p>对于强关联电子系统，平均场近似失效</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>超越平均场的方法</h2>
        <div class="beyond-mf">
          <div class="method-item">
            <h3>🔬 多体微扰理论</h3>
            <p>系统地包含关联效应的修正</p>
          </div>
          <div class="method-item">
            <h3>🎲 量子蒙特卡罗</h3>
            <p>数值精确求解多体薛定谔方程</p>
          </div>
          <div class="method-item">
            <h3>🔄 动力学平均场理论</h3>
            <p>处理强关联系统的有效方法</p>
          </div>
          <div class="method-item">
            <h3>📈 GW近似</h3>
            <p>改进激发态性质的计算</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>平均场理论将多体问题简化为有效单体问题</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>哈特里-福克方法考虑了交换效应</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>DFT是现代电子结构计算的基础</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>交换-关联泛函的选择影响计算精度</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>平均场理论有其局限性，需要更高级的方法</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_4',
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

.dft-section {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
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
  border-left: 4px solid #28a745;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.limitations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.limitation-item {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.limitation-item h3 {
  color: #721c24;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.beyond-mf {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.method-item {
  background: linear-gradient(135deg, #e2e3e5 0%, #d6d8db 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.method-item h3 {
  color: #495057;
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
  
  .limitations, .beyond-mf {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>