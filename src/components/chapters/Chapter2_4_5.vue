<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.5 Hubbard模型与强关联电子系统</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">强关联</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>强关联电子系统</h2>
        <p class="lead-text">
          当电子间的库仑相互作用能与动能相当或更大时，传统的能带理论和平均场方法失效。
          Hubbard模型作为描述强关联电子系统的最简单模型，揭示了许多新奇的量子相和相变现象。
        </p>
      </section>

      <section class="content-section">
        <h2>Hubbard模型</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>模型哈密顿量</h3>
            <p>最简单的强关联模型</p>
            <div class="mathematical-content">
              <h4>基本形式：</h4>
              <div class="equation-block">
                <p>Ĥ = -t∑⟨i,j⟩,σ (ĉ†ᵢσĉⱼσ + h.c.) + U∑ᵢ n̂ᵢ↑n̂ᵢ↓</p>
                <p>t: 跳跃积分，U: 在位库仑排斥</p>
              </div>
              
              <h4>物理参数：</h4>
              <div class="equation-block">
                <p>t: 电子的动能标度</p>
                <p>U: 同一格点上两电子的相互作用</p>
                <p>U/t: 关联强度参数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>物理图像</h3>
            <p>动能与相互作用的竞争</p>
            <div class="mathematical-content">
              <h4>弱关联(U ≪ t)：</h4>
              <div class="equation-block">
                <p>电子易于跳跃</p>
                <p>金属性行为</p>
                <p>费米液体理论适用</p>
              </div>
              
              <h4>强关联(U ≫ t)：</h4>
              <div class="equation-block">
                <p>电子局域化</p>
                <p>Mott绝缘体</p>
                <p>磁性相互作用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>极限情况分析</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>U = 0极限</h3>
            <p>自由电子气体</p>
            <div class="mathematical-content">
              <h4>能带结构：</h4>
              <div class="equation-block">
                <p>ε(k) = -2t∑ᵢ cos(kᵢaᵢ)</p>
                <p>简单立方：ε(k) = -2t(cos kₓa + cos kᵧa + cos kᵤa)</p>
              </div>
              
              <h4>费米面：</h4>
              <div class="equation-block">
                <p>半填充时：费米面嵌套</p>
                <p>完美的金属行为</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔒</div>
            <h3>t = 0极限</h3>
            <p>原子极限</p>
            <div class="mathematical-content">
              <h4>能级结构：</h4>
              <div class="equation-block">
                <p>|0⟩: 空态，能量 = 0</p>
                <p>|↑⟩,|↓⟩: 单占据，能量 = 0</p>
                <p>|↑↓⟩: 双占据，能量 = U</p>
              </div>
              
              <h4>基态：</h4>
              <div class="equation-block">
                <p>半填充：每个格点一个电子</p>
                <p>反铁磁序</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Mott金属-绝缘体转变</h2>
        <div class="mott-transition">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>Mott判据</h3>
            <p>金属-绝缘体转变的条件</p>
            <div class="mathematical-content">
              <h4>临界条件：</h4>
              <div class="equation-block">
                <p>Uc ≈ W</p>
                <p>W: 能带宽度</p>
              </div>
              
              <h4>物理机制：</h4>
              <div class="equation-block">
                <p>库仑排斥 > 动能增益</p>
                <p>电子局域化</p>
                <p>能隙打开</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>有效低能理论</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>Heisenberg模型</h3>
            <p>强关联极限的磁性</p>
            <div class="mathematical-content">
              <h4>有效哈密顿量：</h4>
              <div class="equation-block">
                <p>Ĥₑff = J∑⟨i,j⟩ Ŝᵢ·Ŝⱼ</p>
                <p>J = 4t²/U > 0 (反铁磁)</p>
              </div>
              
              <h4>超交换机制：</h4>
              <div class="equation-block">
                <p>虚拟跳跃过程</p>
                <p>|↑0⟩ → |↑↓⟩ → |0↓⟩</p>
                <p>能量代价 ~ U</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>t-J模型</h3>
            <p>掺杂Mott绝缘体</p>
            <div class="mathematical-content">
              <h4>约束哈密顿量：</h4>
              <div class="equation-block">
                <p>Ĥ = -t∑⟨i,j⟩,σ P̂(ĉ†ᵢσĉⱼσ)P̂ + J∑⟨i,j⟩ Ŝᵢ·Ŝⱼ</p>
                <p>P̂: 禁止双占据投影算符</p>
              </div>
              
              <h4>新奇现象：</h4>
              <div class="equation-block">
                <p>高温超导</p>
                <p>自旋-电荷分离</p>
                <p>赝能隙</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>求解方法</h2>
        <div class="methods-section">
          <div class="method-grid">
            <div class="method-card">
              <h3>🔢 精确对角化</h3>
              <p>小系统的数值精确解</p>
              <ul>
                <li>Lanczos算法</li>
                <li>基态和低激发态</li>
                <li>有限尺寸效应</li>
              </ul>
            </div>
            
            <div class="method-card">
              <h3>🎲 量子蒙特卡罗</h3>
              <p>大系统的统计方法</p>
              <ul>
                <li>路径积分表示</li>
                <li>辅助场分解</li>
                <li>符号问题</li>
              </ul>
            </div>
            
            <div class="method-card">
              <h3>🔄 动力学平均场</h3>
              <p>无限维度的精确解</p>
              <ul>
                <li>局域自能近似</li>
                <li>Anderson杂质模型</li>
                <li>Mott转变描述</li>
              </ul>
            </div>
            
            <div class="method-card">
              <h3>🌊 密度矩阵重整化群</h3>
              <p>一维系统的高精度方法</p>
              <ul>
                <li>矩阵乘积态</li>
                <li>纠缠熵</li>
                <li>相变和临界性</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>实验实现和应用</h2>
        <div class="example-box">
          <h3>例1：铜氧化物高温超导体</h3>
          <p>CuO₂平面的物理：</p>
          <div class="equation-block">
            <p>母体化合物：反铁磁Mott绝缘体</p>
            <p>掺杂：金属性和超导性</p>
            <p>相图：赝能隙、超导圆顶</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：冷原子光晶格</h3>
          <p>人工量子模拟器：</p>
          <div class="equation-block">
            <p>可调参数：U/t比值</p>
            <p>观测：超流-Mott绝缘体转变</p>
            <p>量子相变的直接观测</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：过渡金属氧化物</h3>
          <p>强关联材料：</p>
          <div class="equation-block">
            <p>V₂O₃: 金属-绝缘体转变</p>
            <p>La₁₋ₓSrₓMnO₃: 庞磁阻效应</p>
            <p>SrTiO₃: 量子临界性</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>新奇量子相</h2>
        <div class="quantum-phases">
          <div class="phase-item">
            <h3>🌊 量子自旋液体</h3>
            <p>无磁序的量子纠缠态，具有分数化激发</p>
          </div>
          <div class="phase-item">
            <h3>⚡ 奇异金属</h3>
            <p>非费米液体行为，线性电阻率</p>
          </div>
          <div class="phase-item">
            <h3>🔄 拓扑Mott绝缘体</h3>
            <p>结合强关联和拓扑性质</p>
          </div>
          <div class="phase-item">
            <h3>🌟 量子临界点</h3>
            <p>零温相变点的奇异性质</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>Hubbard模型描述动能与相互作用的竞争</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>Mott转变是强关联系统的核心现象</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>强关联极限导致有效磁性相互作用</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>需要超越平均场的数值方法求解</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>在高温超导等材料中有重要应用</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_5',
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
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
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

.mott-transition {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.methods-section {
  background: linear-gradient(135deg, #e2e3e5 0%, #d6d8db 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-card h3 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.method-card ul {
  list-style: none;
  padding: 0;
}

.method-card li {
  margin: 0.5rem 0;
  padding-left: 1rem;
  position: relative;
}

.method-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #495057;
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

.quantum-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.phase-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.phase-item h3 {
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
  background: linear-gradient(135deg, #dc3545 0%, #c82333 100%);
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
  
  .method-grid, .quantum-phases {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>