<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.5 Green函数与传播子的物理联系</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">格林函数理论</span>
        <span class="reading-time">预计阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <!-- 引言部分 -->
      <section class="introduction">
        <h2>Green函数的物理意义</h2>
        <p class="lead-text">
          Green函数是多体量子理论中最重要的概念之一，它不仅提供了计算物理量的系统方法，
          更重要的是揭示了量子多体系统中粒子传播和相互作用的深层物理图像。
          通过Green函数，我们可以直接联系理论计算与实验观测。
        </p>
      </section>

      <!-- Green函数定义与分类 -->
      <section class="content-section">
        <h2>Green函数的定义与分类</h2>
        <div class="concept-grid">
          <div class="concept-card primary">
            <div class="concept-icon">🌊</div>
            <h3>单粒子Green函数</h3>
            <p class="concept-desc">描述单个粒子在多体系统中的传播</p>
            
            <div class="mathematical-content">
              <div class="formula-section">
                <h4>时间排序Green函数</h4>
                <div class="equation-block">
                  <p class="equation">G(x,t;x',t') = -i⟨T{ψ̂(x,t)ψ̂†(x',t')}⟩</p>
                  <div class="equation-notes">
                    <p>• T: 时间排序算符</p>
                    <p>• ⟨...⟩: 基态期望值</p>
                  </div>
                </div>
              </div>
              
              <div class="formula-section">
                <h4>因果结构</h4>
                <div class="equation-block">
                  <p class="equation">t > t': G = -i⟨ψ̂(x,t)ψ̂†(x',t')⟩ (粒子传播)</p>
                  <p class="equation">t < t': G = +i⟨ψ̂†(x',t')ψ̂(x,t)⟩ (空穴传播)</p>
                </div>
              </div>
              
              <div class="formula-section">
                <h4>频率-动量表示</h4>
                <div class="equation-block">
                  <p class="equation">G(k,ω) = ∫∫ G(x,t) e^(-ik·x+iωt) dxdt</p>
                  <p class="equation-note">这是最常用的表示形式</p>
                </div>
              </div>
            </div>
          </div>

          <div class="concept-card secondary">
            <div class="concept-icon">🔄</div>
            <h3>推迟和超前Green函数</h3>
            <p class="concept-desc">描述系统对外界扰动的响应</p>
            
            <div class="mathematical-content">
              <div class="formula-section">
                <h4>推迟Green函数</h4>
                <div class="equation-block">
                  <p class="equation">G^R(x,t;x',t') = -iθ(t-t')⟨[ψ̂(x,t), ψ̂†(x',t')]⟩</p>
                  <p class="equation-note">θ(t): 阶跃函数，确保因果性</p>
                </div>
              </div>
              
              <div class="formula-section">
                <h4>超前Green函数</h4>
                <div class="equation-block">
                  <p class="equation">G^A(x,t;x',t') = +iθ(t'-t)⟨[ψ̂(x,t), ψ̂†(x',t')]⟩</p>
                </div>
              </div>
              
              <div class="formula-section">
                <h4>解析性质</h4>
                <div class="equation-block">
                  <p class="equation">G^R(ω) = G^A*(ω) = [G^A(ω)]†</p>
                  <p class="equation-note">推迟和超前函数互为厄米共轭</p>
                </div>
              </div>
            </div>
          </div>

          <div class="concept-card tertiary">
            <div class="concept-icon">📊</div>
            <h3>谱函数</h3>
            <p class="concept-desc">连接理论与实验的桥梁</p>
            
            <div class="mathematical-content">
              <div class="formula-section">
                <h4>谱函数定义</h4>
                <div class="equation-block">
                  <p class="equation">A(k,ω) = -1/π Im G^R(k,ω)</p>
                  <p class="equation-note">谱函数总是非负的</p>
                </div>
              </div>
              
              <div class="formula-section">
                <h4>物理意义</h4>
                <div class="equation-block">
                  <p class="equation">A(k,ω) = 概率密度函数</p>
                  <p class="equation-note">描述在动量k处找到能量为ω的激发的概率</p>
                </div>
              </div>
              
              <div class="formula-section">
                <h4>求和规则</h4>
                <div class="equation-block">
                  <p class="equation">∫_{-∞}^{∞} A(k,ω) dω = 1</p>
                  <p class="equation-note">归一化条件</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 物理图像与解释 -->
      <section class="content-section">
        <h2>物理图像与解释</h2>
        <div class="physics-interpretation">
          <div class="interpretation-card">
            <div class="interpretation-header">
              <div class="interpretation-icon">🎯</div>
              <h3>传播子图像</h3>
            </div>
            <div class="interpretation-content">
              <p>Green函数可以理解为粒子的"传播子"：</p>
              <ul class="physics-list">
                <li><strong>粒子创生</strong>：在时空点(x',t')创建一个粒子</li>
                <li><strong>传播过程</strong>：粒子在多体环境中传播</li>
                <li><strong>粒子湮灭</strong>：在时空点(x,t)湮灭粒子</li>
                <li><strong>量子涨落</strong>：包含所有可能的中间过程</li>
              </ul>
            </div>
          </div>

          <div class="interpretation-card">
            <div class="interpretation-header">
              <div class="interpretation-icon">⚡</div>
              <h3>响应函数图像</h3>
            </div>
            <div class="interpretation-content">
              <p>推迟Green函数描述系统的线性响应：</p>
              <ul class="physics-list">
                <li><strong>外界扰动</strong>：在t'时刻施加扰动</li>
                <li><strong>系统响应</strong>：在t>t'时刻观测响应</li>
                <li><strong>因果性</strong>：响应不能早于扰动</li>
                <li><strong>记忆效应</strong>：响应依赖于扰动历史</li>
              </ul>
            </div>
          </div>

          <div class="interpretation-card">
            <div class="interpretation-header">
              <div class="interpretation-icon">🔬</div>
              <h3>实验观测图像</h3>
            </div>
            <div class="interpretation-content">
              <p>谱函数直接对应实验测量：</p>
              <ul class="physics-list">
                <li><strong>ARPES</strong>：角分辨光电子能谱测量A(k,ω<0)</li>
                <li><strong>逆ARPES</strong>：逆光电子能谱测量A(k,ω>0)</li>
                <li><strong>隧道谱</strong>：扫描隧道显微镜测量局域态密度</li>
                <li><strong>中子散射</strong>：测量动态结构因子</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 解析结构与极点 -->
      <section class="content-section">
        <h2>解析结构与极点</h2>
        <div class="analytical-structure">
          <div class="structure-card">
            <h3>复频率平面中的解析性</h3>
            <div class="analytical-content">
              <div class="formula-section">
                <h4>解析性质</h4>
                <div class="equation-block">
                  <p class="equation">G^R(ω): 上半平面解析</p>
                  <p class="equation">G^A(ω): 下半平面解析</p>
                  <p class="equation">G(ω): 实轴上有分支切割</p>
                </div>
              </div>
              
              <div class="pole-analysis">
                <h4>极点的物理意义</h4>
                <div class="pole-grid">
                  <div class="pole-item">
                    <div class="pole-type">简单极点</div>
                    <div class="pole-meaning">准粒子激发</div>
                    <div class="pole-formula">G(ω) ≈ Z/(ω - ε_k + iΓ)</div>
                  </div>
                  <div class="pole-item">
                    <div class="pole-type">分支切割</div>
                    <div class="pole-meaning">连续谱激发</div>
                    <div class="pole-formula">非解析行为</div>
                  </div>
                  <div class="pole-item">
                    <div class="pole-type">复数极点</div>
                    <div class="pole-meaning">有限寿命态</div>
                    <div class="pole-formula">Γ = 1/τ (寿命)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 计算方法与近似 -->
      <section class="content-section">
        <h2>计算方法与近似</h2>
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-header">
              <div class="method-icon">🧮</div>
              <h3>微扰理论方法</h3>
            </div>
            <div class="method-content">
              <h4>Dyson方程</h4>
              <div class="equation-block">
                <p class="equation">G = G_0 + G_0 Σ G</p>
                <p class="equation-note">自能Σ包含所有相互作用效应</p>
              </div>
              
              <h4>自能展开</h4>
              <div class="equation-block">
                <p class="equation">Σ = Σ^{(1)} + Σ^{(2)} + ...</p>
                <p class="equation-note">按相互作用强度展开</p>
              </div>
              
              <h4>应用范围</h4>
              <ul class="method-list">
                <li>弱相互作用系统</li>
                <li>高密度电子气</li>
                <li>金属中的电子</li>
              </ul>
            </div>
          </div>

          <div class="method-card">
            <div class="method-header">
              <div class="method-icon">🎲</div>
              <h3>蒙特卡罗方法</h3>
            </div>
            <div class="method-content">
              <h4>路径积分表示</h4>
              <div class="equation-block">
                <p class="equation">G(τ) = ⟨c(τ)c†(0)⟩_MC</p>
                <p class="equation-note">虚时间Green函数</p>
              </div>
              
              <h4>解析延拓</h4>
              <div class="equation-block">
                <p class="equation">G(iω_n) → G(ω + i0^+)</p>
                <p class="equation-note">从虚频率到实频率</p>
              </div>
              
              <h4>应用范围</h4>
              <ul class="method-list">
                <li>强关联电子系统</li>
                <li>量子杂质模型</li>
                <li>有限温度计算</li>
              </ul>
            </div>
          </div>

          <div class="method-card">
            <div class="method-header">
              <div class="method-icon">🔄</div>
              <h3>平均场理论</h3>
            </div>
            <div class="method-content">
              <h4>Hartree-Fock近似</h4>
              <div class="equation-block">
                <p class="equation">G^{-1} = G_0^{-1} - Σ_HF</p>
                <p class="equation-note">自洽平均场</p>
              </div>
              
              <h4>动力学平均场</h4>
              <div class="equation-block">
                <p class="equation">G_loc = ∫ G(k,ω) dk</p>
                <p class="equation-note">局域Green函数</p>
              </div>
              
              <h4>应用范围</h4>
              <ul class="method-list">
                <li>中等关联强度</li>
                <li>晶格模型</li>
                <li>相变研究</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 实验联系 -->
      <section class="content-section">
        <h2>与实验的联系</h2>
        <div class="experimental-connections">
          <div class="experiment-card">
            <div class="experiment-header">
              <div class="experiment-icon">📡</div>
              <h3>角分辨光电子能谱 (ARPES)</h3>
            </div>
            <div class="experiment-content">
              <div class="measurement-principle">
                <h4>测量原理</h4>
                <p>光电效应：hν + 电子 → 自由电子</p>
                <div class="equation-block">
                  <p class="equation">E_kin = hν - φ - |E_B|</p>
                  <p class="equation-note">动能 = 光子能量 - 功函数 - 结合能</p>
                </div>
              </div>
              
              <div class="green-function-relation">
                <h4>与Green函数的关系</h4>
                <div class="equation-block">
                  <p class="equation">I(k,ω) ∝ A(k,ω) f(ω)</p>
                  <p class="equation-note">强度 ∝ 谱函数 × 费米分布</p>
                </div>
              </div>
              
              <div class="information-extracted">
                <h4>提取的信息</h4>
                <ul class="info-list">
                  <li>能带结构 E(k)</li>
                  <li>费米面形状</li>
                  <li>准粒子寿命</li>
                  <li>多体效应</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="experiment-card">
            <div class="experiment-header">
              <div class="experiment-icon">🔬</div>
              <h3>扫描隧道显微镜 (STM)</h3>
            </div>
            <div class="experiment-content">
              <div class="measurement-principle">
                <h4>测量原理</h4>
                <p>量子隧道效应：电子在针尖与样品间隧穿</p>
                <div class="equation-block">
                  <p class="equation">I ∝ ∫ ρ_tip(E) ρ_sample(E+eV) [f(E) - f(E+eV)] dE</p>
                </div>
              </div>
              
              <div class="green-function-relation">
                <h4>与Green函数的关系</h4>
                <div class="equation-block">
                  <p class="equation">ρ(E) = -1/π Im G^R(E)</p>
                  <p class="equation-note">态密度 = 谱函数积分</p>
                </div>
              </div>
              
              <div class="information-extracted">
                <h4>提取的信息</h4>
                <ul class="info-list">
                  <li>局域态密度</li>
                  <li>能隙结构</li>
                  <li>杂质态</li>
                  <li>超导配对</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 总结与展望 -->
      <section class="content-section summary">
        <h2>总结与展望</h2>
        <div class="summary-content">
          <div class="key-insights">
            <h3>关键洞察</h3>
            <div class="insights-grid">
              <div class="insight-item">
                <div class="insight-icon">💡</div>
                <h4>统一框架</h4>
                <p>Green函数提供了描述量子多体系统的统一理论框架</p>
              </div>
              <div class="insight-item">
                <div class="insight-icon">🔗</div>
                <h4>理论实验桥梁</h4>
                <p>谱函数直接连接理论计算与实验观测</p>
              </div>
              <div class="insight-item">
                <div class="insight-icon">⚡</div>
                <h4>多体效应</h4>
                <p>自能包含了所有多体相互作用的信息</p>
              </div>
              <div class="insight-item">
                <div class="insight-icon">🎯</div>
                <h4>物理图像</h4>
                <p>提供了粒子传播和系统响应的直观物理图像</p>
              </div>
            </div>
          </div>

          <div class="future-directions">
            <h3>未来发展方向</h3>
            <div class="directions-grid">
              <div class="direction-item">
                <div class="direction-icon">🚀</div>
                <h4>计算方法发展</h4>
                <ul>
                  <li>机器学习辅助的Green函数计算</li>
                  <li>量子计算在多体问题中的应用</li>
                  <li>更高效的解析延拓方法</li>
                </ul>
              </div>
              <div class="direction-item">
                <div class="direction-icon">🔬</div>
                <h4>实验技术进步</h4>
                <ul>
                  <li>时间分辨ARPES技术</li>
                  <li>高分辨率STM/STS</li>
                  <li>新型谱学方法</li>
                </ul>
              </div>
              <div class="direction-item">
                <div class="direction-icon">🌟</div>
                <h4>新物理现象</h4>
                <ul>
                  <li>拓扑量子材料</li>
                  <li>非平衡态Green函数</li>
                  <li>量子临界现象</li>
                </ul>
              </div>
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
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.chapter-header {
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #e2e8f0;
  text-align: center;
}

.chapter-title {
  font-size: 3rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chapter-meta {
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  font-size: 0.9rem;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.reading-time {
  color: #718096;
  font-size: 0.9rem;
  font-weight: 500;
}

.introduction {
  margin-bottom: 4rem;
  text-align: center;
}

.introduction h2 {
  font-size: 2.25rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  position: relative;
}

.introduction h2::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.lead-text {
  font-size: 1.25rem;
  color: #4a5568;
  max-width: 800px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.8;
}

.content-section {
  margin-bottom: 4rem;
}

.content-section h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
  position: relative;
}

.content-section h2::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 80px;
  height: 2px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.concept-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.concept-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.concept-card.primary::before {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.concept-card.secondary::before {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.concept-card.tertiary::before {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.concept-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.concept-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 1rem;
}

.concept-desc {
  color: #718096;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.mathematical-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.formula-section h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1rem;
}

.equation-block {
  background: #f7fafc;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border-left: 4px solid #667eea;
}

.equation {
  font-family: 'KaTeX_Math', 'Times New Roman', serif;
  font-size: 1.1rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
  text-align: center;
}

.equation-note {
  font-size: 0.9rem;
  color: #718096;
  font-style: italic;
  text-align: center;
  margin-top: 0.5rem;
}

.equation-notes {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #e2e8f0;
}

.equation-notes p {
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.25rem;
}

.physics-interpretation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.interpretation-card {
  background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.interpretation-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.interpretation-icon {
  font-size: 2.5rem;
}

.interpretation-header h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
}

.physics-list {
  list-style: none;
  padding: 0;
}

.physics-list li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  color: #4a5568;
}

.physics-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.analytical-structure {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.structure-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
}

.analytical-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.pole-analysis h4 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.pole-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.pole-item {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.pole-type {
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.pole-meaning {
  color: #4a5568;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.pole-formula {
  font-family: 'KaTeX_Math', 'Times New Roman', serif;
  color: #2d3748;
  font-size: 0.9rem;
  background: white;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.method-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.3s ease;
}

.method-card:hover {
  transform: translateY(-3px);
}

.method-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.method-icon {
  font-size: 2.5rem;
}

.method-header h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
}

.method-content h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}

.method-content h4:first-child {
  margin-top: 0;
}

.method-list {
  list-style: none;
  padding: 0;
}

.method-list li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
  color: #4a5568;
}

.method-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-connections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.experiment-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.experiment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.experiment-icon {
  font-size: 2.5rem;
}

.experiment-header h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
}

.experiment-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.measurement-principle h4,
.green-function-relation h4,
.information-extracted h4 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 1rem;
}

.info-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.5rem;
}

.info-list li {
  padding: 0.5rem 1rem;
  background: #f7fafc;
  border-radius: 0.5rem;
  color: #4a5568;
  text-align: center;
  font-size: 0.9rem;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  padding: 3rem;
  color: white;
}

.summary h2 {
  color: white;
  border-bottom-color: rgba(255, 255, 255, 0.3);
  text-align: center;
  font-size: 2.5rem;
}

.summary h2::before {
  background: rgba(255, 255, 255, 0.5);
}

.summary-content {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.key-insights h3,
.future-directions h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  text-align: center;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.insight-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.insight-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  display: block;
}

.insight-item h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.insight-item p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.6;
}

.directions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.direction-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.direction-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  display: block;
}

.direction-item h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

.direction-item ul {
  list-style: none;
  padding: 0;
}

.direction-item li {
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.direction-item li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.7);
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .concept-grid,
  .methods-grid,
  .experimental-connections,
  .physics-interpretation {
    grid-template-columns: 1fr;
  }
  
  .insights-grid,
  .directions-grid {
    grid-template-columns: 1fr;
  }
  
  .pole-grid {
    grid-template-columns: 1fr;
  }
  
  .info-list {
    grid-template-columns: 1fr;
  }
}
</style>