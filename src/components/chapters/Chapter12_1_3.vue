<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.3 零模与总动量</h1>
      <p class="chapter-subtitle">Zero Modes and Total Momentum</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        在晶格振动的量子描述中，零模（k=0模式）占据特殊地位。
        它对应于整个晶格的刚体平移运动，与系统的总动量密切相关。
        零模的存在反映了平移对称性，其处理方式直接影响到声子谱的低频行为和热力学性质。
        本节将深入探讨零模的物理意义、数学处理以及它与总动量守恒的关系，
        并分析零模在不同边界条件下的表现。
        理解零模的性质对于正确描述长波声子、弹性理论以及相变现象都具有重要意义。
      </p>
    </div>

    <div class="content-section">
      <h2>零模的定义与性质</h2>
      
      <h3>零模的数学定义</h3>
      <div class="formula-box">
        <p><strong>零模条件：</strong></p>
        <p>k = 0 (或 k = 2πn/L, n = 0)</p>
        <p><strong>零模位移：</strong></p>
        <p>u₀(t) = (1/√N) Σₙ uₙ(t)</p>
        <p><strong>零模动量：</strong></p>
        <p>p₀(t) = (1/√N) Σₙ pₙ(t)</p>
        <p><strong>零模频率：</strong></p>
        <p>ω(0) = 0 (声学支)</p>
      </div>

      <div class="concept-box">
        <h4>零模的基本特征</h4>
        <ul>
          <li><strong>零频率：</strong>声学支在k=0处频率为零</li>
          <li><strong>刚体运动：</strong>所有原子同相位运动</li>
          <li><strong>平移对称性：</strong>反映系统的平移不变性</li>
          <li><strong>Goldstone模式：</strong>连续对称性破缺的结果</li>
        </ul>
      </div>

      <h3>零模与平移对称性</h3>
      <div class="formula-box">
        <p><strong>平移算符：</strong></p>
        <p>T̂(a) = exp(ia P̂_total/ℏ)</p>
        <p><strong>总动量算符：</strong></p>
        <p>P̂_total = Σₙ p̂ₙ = √N p̂₀</p>
        <p><strong>对称性条件：</strong></p>
        <p>[Ĥ, P̂_total] = 0</p>
        <p><strong>Noether定理：</strong></p>
        <p>平移对称性 → 动量守恒</p>
      </div>

      <div class="theory-box">
        <h4>对称性的物理意义</h4>
        <ul>
          <li><strong>连续对称性：</strong>空间平移的连续性</li>
          <li><strong>守恒量：</strong>总动量作为守恒量</li>
          <li><strong>Goldstone定理：</strong>自发破缺产生无质量模式</li>
          <li><strong>长程关联：</strong>零模导致的长程关联</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总动量的量子化</h2>
      
      <h3>总动量算符</h3>
      <div class="formula-box">
        <p><strong>总动量定义：</strong></p>
        <p>P̂_total = Σₙ p̂ₙ = Σₙ m(duₙ/dt)</p>
        <p><strong>k空间表示：</strong></p>
        <p>P̂_total = Σₖ ℏk n̂ₖ</p>
        <p><strong>零模贡献：</strong></p>
        <p>P̂_total = √N p̂₀</p>
        <p><strong>对易关系：</strong></p>
        <p>[X̂_cm, P̂_total] = iℏ</p>
      </div>

      <div class="concept-box">
        <h4>总动量的性质</h4>
        <ul>
          <li><strong>守恒量：</strong>在平移不变系统中守恒</li>
          <li><strong>零模关联：</strong>与零模直接相关</li>
          <li><strong>质心运动：</strong>描述整体质心运动</li>
          <li><strong>量子化：</strong>满足正则对易关系</li>
        </ul>
      </div>

      <h3>质心坐标</h3>
      <div class="formula-box">
        <p><strong>质心位置：</strong></p>
        <p>X̂_cm = (1/N) Σₙ x̂ₙ = (1/√N) û₀</p>
        <p><strong>质心动量：</strong></p>
        <p>P̂_cm = M dX̂_cm/dt = √N p̂₀</p>
        <p><strong>质心哈密顿量：</strong></p>
        <p>Ĥ_cm = P̂_cm²/(2M)</p>
        <p><strong>总质量：</strong></p>
        <p>M = Nm</p>
      </div>

      <div class="theory-box">
        <h4>质心运动的特点</h4>
        <ul>
          <li><strong>自由粒子：</strong>质心作自由粒子运动</li>
          <li><strong>分离变量：</strong>质心运动与相对运动分离</li>
          <li><strong>平移不变性：</strong>反映系统的平移对称性</li>
          <li><strong>经典极限：</strong>大质量下的经典行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>边界条件的影响</h2>
      
      <h3>周期边界条件</h3>
      <div class="formula-box">
        <p><strong>Born-von Karman边界条件：</strong></p>
        <p>uₙ₊ₙ = uₙ</p>
        <p><strong>允许的k值：</strong></p>
        <p>k = 2πn/L, n = 0, ±1, ±2, ...</p>
        <p><strong>零模存在：</strong></p>
        <p>k = 0 是允许的</p>
        <p><strong>模式数：</strong></p>
        <p>总模式数 = N</p>
      </div>

      <div class="concept-box">
        <h4>周期边界条件的特点</h4>
        <ul>
          <li><strong>零模包含：</strong>k=0模式被包含在内</li>
          <li><strong>平移对称性：</strong>保持完整的平移对称性</li>
          <li><strong>动量守恒：</strong>总动量严格守恒</li>
          <li><strong>理论简化：</strong>数学处理相对简单</li>
        </ul>
      </div>

      <h3>固定边界条件</h3>
      <div class="formula-box">
        <p><strong>固定端边界条件：</strong></p>
        <p>u₀ = uₙ₊₁ = 0</p>
        <p><strong>允许的k值：</strong></p>
        <p>k = πn/L, n = 1, 2, 3, ...</p>
        <p><strong>零模缺失：</strong></p>
        <p>k = 0 不被允许</p>
        <p><strong>模式数：</strong></p>
        <p>总模式数 = N-1</p>
      </div>

      <div class="theory-box">
        <h4>固定边界条件的影响</h4>
        <ul>
          <li><strong>零模排除：</strong>k=0模式被排除</li>
          <li><strong>对称性破缺：</strong>平移对称性被破坏</li>
          <li><strong>动量非守恒：</strong>总动量不再守恒</li>
          <li><strong>边界效应：</strong>边界对系统性质的影响</li>
        </ul>
      </div>

      <h3>自由边界条件</h3>
      <div class="formula-box">
        <p><strong>自由端边界条件：</strong></p>
        <p>∂u/∂x|₀ = ∂u/∂x|ₗ = 0</p>
        <p><strong>允许的k值：</strong></p>
        <p>k = πn/L, n = 0, 1, 2, ...</p>
        <p><strong>零模存在：</strong></p>
        <p>k = 0 对应刚体平移</p>
        <p><strong>模式数：</strong></p>
        <p>总模式数 = N</p>
      </div>

      <div class="theory-box">
        <h4>自由边界条件的特征</h4>
        <ul>
          <li><strong>零模保留：</strong>k=0模式对应刚体运动</li>
          <li><strong>部分对称性：</strong>保持部分平移对称性</li>
          <li><strong>动量守恒：</strong>总动量在某种意义下守恒</li>
          <li><strong>实际相关：</strong>更接近实际物理系统</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>零模的量子力学处理</h2>
      
      <h3>零模的哈密顿量</h3>
      <div class="formula-box">
        <p><strong>零模哈密顿量：</strong></p>
        <p>Ĥ₀ = p̂₀²/(2m) + ½mω²(0)û₀²</p>
        <p><strong>声学支零模：</strong></p>
        <p>ω(0) = 0 → Ĥ₀ = p̂₀²/(2m)</p>
        <p><strong>自由粒子形式：</strong></p>
        <p>Ĥ₀ = P̂_total²/(2M)</p>
        <p><strong>本征值问题：</strong></p>
        <p>Ĥ₀|p⟩ = (p²/2M)|p⟩</p>
      </div>

      <div class="concept-box">
        <h4>零模量子态</h4>
        <ul>
          <li><strong>连续谱：</strong>能量本征值连续分布</li>
          <li><strong>平面波态：</strong>动量本征态为平面波</li>
          <li><strong>归一化：</strong>需要适当的归一化处理</li>
          <li><strong>测量：</strong>动量测量的量子效应</li>
        </ul>
      </div>

      <h3>零模的统计力学</h3>
      <div class="formula-box">
        <p><strong>零模配分函数：</strong></p>
        <p>Z₀ = ∫ dp e^(-βp²/2M)</p>
        <p><strong>高斯积分：</strong></p>
        <p>Z₀ = √(2πMkBT)</p>
        <p><strong>自由能贡献：</strong></p>
        <p>F₀ = -kBT ln Z₀ = -½kBT ln(2πMkBT)</p>
        <p><strong>熵贡献：</strong></p>
        <p>S₀ = ½kB[1 + ln(2πMkBT)]</p>
      </div>

      <div class="theory-box">
        <h4>统计力学的特点</h4>
        <ul>
          <li><strong>经典统计：</strong>零模通常表现为经典行为</li>
          <li><strong>温度依赖：</strong>配分函数的温度依赖性</li>
          <li><strong>体积效应：</strong>与系统大小的关系</li>
          <li><strong>热力学极限：</strong>大系统极限下的行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>零模与长波极限</h2>
      
      <h3>长波近似</h3>
      <div class="formula-box">
        <p><strong>色散关系：</strong></p>
        <p>ω(k) ≈ vs|k| (k → 0)</p>
        <p><strong>声速：</strong></p>
        <p>vs = √(K/m)a</p>
        <p><strong>线性色散：</strong></p>
        <p>E = ℏvs|k|</p>
        <p><strong>群速度：</strong></p>
        <p>vg = dω/dk = vs</p>
      </div>

      <div class="concept-box">
        <h4>长波极限的特征</h4>
        <ul>
          <li><strong>线性色散：</strong>频率与波矢成正比</li>
          <li><strong>声波性质：</strong>表现为声波传播</li>
          <li><strong>连续介质：</strong>可用连续介质理论描述</li>
          <li><strong>弹性理论：</strong>与弹性理论的联系</li>
        </ul>
      </div>

      <h3>弹性理论的联系</h3>
      <div class="formula-box">
        <p><strong>弹性波方程：</strong></p>
        <p>∂²u/∂t² = vs² ∂²u/∂x²</p>
        <p><strong>弹性模量：</strong></p>
        <p>E = ρvs²</p>
        <p><strong>应力-应变关系：</strong></p>
        <p>σ = E ∂u/∂x</p>
        <p><strong>连续极限：</strong></p>
        <p>a → 0, N → ∞, L = Na 固定</p>
      </div>

      <div class="theory-box">
        <h4>弹性理论的意义</h4>
        <ul>
          <li><strong>宏观理论：</strong>从微观到宏观的过渡</li>
          <li><strong>材料性质：</strong>与材料弹性性质的关系</li>
          <li><strong>工程应用：</strong>在工程中的实际应用</li>
          <li><strong>理论统一：</strong>不同尺度理论的统一</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>零模的物理效应</h2>
      
      <h3>比热的贡献</h3>
      <div class="formula-box">
        <p><strong>零模比热：</strong></p>
        <p>C₀ = ∂U₀/∂T = ½kB</p>
        <p><strong>经典结果：</strong></p>
        <p>每个自由度贡献½kB</p>
        <p><strong>总比热：</strong></p>
        <p>C = C₀ + Σₖ≠₀ Cₖ</p>
        <p><strong>低温行为：</strong></p>
        <p>C ≈ C₀ + γT³ (德拜模型)</p>
      </div>

      <div class="concept-box">
        <h4>比热的特点</h4>
        <ul>
          <li><strong>温度无关：</strong>零模比热与温度无关</li>
          <li><strong>经典贡献：</strong>始终表现为经典行为</li>
          <li><strong>低温主导：</strong>低温下可能成为主要贡献</li>
          <li><strong>实验观测：</strong>在实验中的可观测性</li>
        </ul>
      </div>

      <h3>热膨胀效应</h3>
      <div class="formula-box">
        <p><strong>非谐耦合：</strong></p>
        <p>V₃ ∝ u₀(uₙ₊₁ - uₙ)²</p>
        <p><strong>零模-声子耦合：</strong></p>
        <p>⟨u₀⟩ ∝ Σₖ ⟨nₖ⟩</p>
        <p><strong>热膨胀系数：</strong></p>
        <p>α = (1/L)(∂L/∂T)p</p>
        <p><strong>Grüneisen参数：</strong></p>
        <p>γG = -(∂ln ω/∂ln V)</p>
      </div>

      <div class="theory-box">
        <h4>热膨胀的机制</h4>
        <ul>
          <li><strong>非谐效应：</strong>非谐项导致的体积变化</li>
          <li><strong>零模激发：</strong>零模在热膨胀中的作用</li>
          <li><strong>温度依赖：</strong>热膨胀的温度依赖性</li>
          <li><strong>材料性质：</strong>不同材料的热膨胀行为</li>
        </ul>
      </div>

      <h3>相变与临界现象</h3>
      <div class="formula-box">
        <p><strong>软模：</strong></p>
        <p>ω²(k→0) → 0 (相变点附近)</p>
        <p><strong>临界指数：</strong></p>
        <p>ω ∝ |T - Tc|^ν</p>
        <p><strong>关联长度：</strong></p>
        <p>ξ ∝ |T - Tc|^(-ν)</p>
        <p><strong>临界涨落：</strong></p>
        <p>⟨u²⟩ ∝ ξ²</p>
      </div>

      <div class="theory-box">
        <h4>相变的特征</h4>
        <ul>
          <li><strong>软模凝聚：</strong>零模频率趋于零</li>
          <li><strong>对称性破缺：</strong>相变伴随对称性变化</li>
          <li><strong>临界行为：</strong>相变点附近的临界现象</li>
          <li><strong>普适性：</strong>临界指数的普适性类</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测与测量</h2>
      
      <h3>中子散射实验</h3>
      <div class="experiment-box">
        <h4>零模的直接观测</h4>
        <ul>
          <li><strong>弹性散射：</strong>k=0附近的弹性散射峰</li>
          <li><strong>准弹性散射：</strong>零频附近的散射信号</li>
          <li><strong>色散测量：</strong>低k区域的线性色散</li>
          <li><strong>强度分析：</strong>散射强度与结构因子</li>
        </ul>
      </div>

      <h3>拉曼散射</h3>
      <div class="experiment-box">
        <h4>零频拉曼模式</h4>
        <ul>
          <li><strong>中心峰：</strong>ω=0附近的拉曼峰</li>
          <li><strong>准弹性峰：</strong>低频区域的散射</li>
          <li><strong>温度依赖：</strong>峰强度的温度变化</li>
          <li><strong>相变信号：</strong>相变附近的异常行为</li>
        </ul>
      </div>

      <h3>超声波测量</h3>
      <div class="experiment-box">
        <h4>弹性常数的测定</h4>
        <ul>
          <li><strong>声速测量：</strong>超声波速度的精确测量</li>
          <li><strong>弹性模量：</strong>从声速推导弹性常数</li>
          <li><strong>温度依赖：</strong>弹性常数的温度变化</li>
          <li><strong>各向异性：</strong>晶体各向异性的表征</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理论发展与应用</h2>
      
      <h3>场论方法</h3>
      <div class="application-box">
        <h4>连续场理论</h4>
        <ul>
          <li><strong>φ⁴理论：</strong>标量场的φ⁴模型</li>
          <li><strong>重整化群：</strong>临界现象的重整化群分析</li>
          <li><strong>有效理论：</strong>低能有效场论</li>
          <li><strong>拓扑缺陷：</strong>孤子、涡旋等拓扑激发</li>
        </ul>
      </div>

      <h3>数值方法</h3>
      <div class="application-box">
        <h4>计算物理方法</h4>
        <ul>
          <li><strong>分子动力学：</strong>经典分子动力学模拟</li>
          <li><strong>蒙特卡罗：</strong>量子蒙特卡罗方法</li>
          <li><strong>密度泛函：</strong>第一性原理计算</li>
          <li><strong>机器学习：</strong>AI辅助的声子计算</li>
        </ul>
      </div>

      <h3>现代应用</h3>
      <div class="application-box">
        <h4>技术应用领域</h4>
        <ul>
          <li><strong>声子工程：</strong>人工声子晶体设计</li>
          <li><strong>热管理：</strong>热传导的精确控制</li>
          <li><strong>量子器件：</strong>基于声子的量子器件</li>
          <li><strong>材料设计：</strong>新材料的理性设计</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          零模与总动量的研究揭示了晶格振动中对称性与守恒律的深刻联系。
          零模作为k=0的特殊模式，对应于整个晶格的刚体平移运动，
          直接反映了系统的平移对称性和动量守恒。
          不同边界条件对零模的处理方式不同，
          这影响了系统的动力学性质和热力学行为。
          零模的量子力学处理展现了其作为自由粒子运动的本质，
          在统计力学中表现为经典行为。
          零模与长波极限的联系建立了微观晶格理论与宏观弹性理论的桥梁，
          为理解材料的弹性性质提供了微观基础。
          零模在比热、热膨胀、相变等物理现象中发挥重要作用，
          特别是在相变点附近的软模行为。
          现代实验技术为零模的直接观测提供了有力工具，
          而理论方法的发展则为深入理解零模物理提供了新的视角。
          零模概念的深入理解对于声子工程、热管理等现代技术应用具有重要指导意义。
        </p>
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
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #2c5aa0;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c5aa0;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2c5aa0;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1ecf4;
}

.content-section h3 {
  color: #34495e;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem 0;
}

.content-section h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-section p {
  margin-bottom: 1rem;
  text-align: justify;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.formula-box p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
}

.concept-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.theory-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.experiment-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);
}

.application-box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(250, 112, 154, 0.4);
}

.summary-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 8px 25px rgba(168, 237, 234, 0.4);
  border-left: 5px solid #2c5aa0;
}

.concept-box ul,
.theory-box ul,
.experiment-box ul,
.application-box ul {
  list-style-type: none;
  padding-left: 0;
}

.concept-box li,
.theory-box li,
.experiment-box li,
.application-box li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-box li::before,
.theory-box li::before,
.experiment-box li::before,
.application-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
}

.content-section ul {
  padding-left: 2rem;
}

.content-section li {
  margin: 0.5rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-section h2 {
    font-size: 1.5rem;
  }
  
  .content-section h3 {
    font-size: 1.3rem;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box {
    padding: 1rem;
  }
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    margin: 0;
    padding: 0;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box,
  .summary-box {
    background: #f8f9fa !important;
    color: #333 !important;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>