<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.1 一维原子链的经典描述</h1>
      <p class="chapter-subtitle">Classical Description of One-Dimensional Atomic Chain</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        一维原子链是凝聚态物理中最基本也是最重要的模型之一。它不仅为理解晶格振动提供了最简单的框架，
        也是研究声子、热传导、以及电子-声子相互作用的起点。通过对一维原子链的经典力学分析，
        我们可以建立起对晶格动力学的基本理解，为后续的量子化处理奠定坚实的基础。
        本节将从经典力学的角度详细分析一维原子链的振动特性。
      </p>
    </div>

    <div class="content-section">
      <h2>单原子链模型</h2>
      
      <h3>模型设定</h3>
      <div class="formula-box">
        <p><strong>系统描述：</strong></p>
        <p>N个相同原子，质量为m，平衡间距为a</p>
        <p><strong>位置坐标：</strong></p>
        <p>第n个原子的平衡位置：x₀ⁿ = na</p>
        <p><strong>位移坐标：</strong></p>
        <p>第n个原子的位移：uₙ(t)</p>
        <p><strong>实际位置：</strong></p>
        <p>xₙ(t) = na + uₙ(t)</p>
      </div>

      <div class="concept-box">
        <h4>基本假设</h4>
        <ul>
          <li><strong>小振幅近似：</strong>|uₙ| << a</li>
          <li><strong>最近邻相互作用：</strong>只考虑相邻原子间的弹性力</li>
          <li><strong>谐振子近似：</strong>势能函数的二次展开</li>
          <li><strong>周期性边界条件：</strong>Born-von Karman边界条件</li>
        </ul>
      </div>

      <h3>相互作用势能</h3>
      <div class="formula-box">
        <p><strong>总势能：</strong></p>
        <p>V = ½ Σₙ K(uₙ₊₁ - uₙ)²</p>
        <p><strong>弹性常数：</strong></p>
        <p>K = d²V/dx²|ₓ₌ₐ</p>
        <p><strong>动能：</strong></p>
        <p>T = ½ Σₙ m(duₙ/dt)²</p>
        <p><strong>拉格朗日量：</strong></p>
        <p>L = T - V = ½ Σₙ [m(duₙ/dt)² - K(uₙ₊₁ - uₙ)²]</p>
      </div>

      <div class="theory-box">
        <h4>物理图像</h4>
        <ul>
          <li><strong>弹簧模型：</strong>原子间用弹簧连接</li>
          <li><strong>耦合振子：</strong>N个耦合的谐振子系统</li>
          <li><strong>集体运动：</strong>原子的协调振动</li>
          <li><strong>色散关系：</strong>频率与波矢的关系</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>运动方程</h2>
      
      <h3>牛顿运动方程</h3>
      <div class="formula-box">
        <p><strong>欧拉-拉格朗日方程：</strong></p>
        <p>d/dt(∂L/∂u̇ₙ) - ∂L/∂uₙ = 0</p>
        <p><strong>运动方程：</strong></p>
        <p>m d²uₙ/dt² = K(uₙ₊₁ + uₙ₋₁ - 2uₙ)</p>
        <p><strong>矩阵形式：</strong></p>
        <p>m d²u/dt² = -Ku</p>
        <p><strong>动力学矩阵：</strong></p>
        <p>Kₙₘ = K(2δₙₘ - δₙ,ₘ₊₁ - δₙ,ₘ₋₁)</p>
      </div>

      <div class="concept-box">
        <h4>运动方程的特点</h4>
        <ul>
          <li><strong>线性耦合：</strong>相邻原子间的线性耦合</li>
          <li><strong>平移不变性：</strong>系统具有平移对称性</li>
          <li><strong>时间反演对称性：</strong>运动方程的时间反演不变性</li>
          <li><strong>能量守恒：</strong>总能量E = T + V守恒</li>
        </ul>
      </div>

      <h3>边界条件</h3>
      <div class="formula-box">
        <p><strong>周期性边界条件：</strong></p>
        <p>uₙ₊ₙ = uₙ (Born-von Karman条件)</p>
        <p><strong>允许的波矢：</strong></p>
        <p>k = 2πj/Na, j = 0, ±1, ±2, ..., ±N/2</p>
        <p><strong>第一布里渊区：</strong></p>
        <p>-π/a ≤ k ≤ π/a</p>
      </div>

      <div class="theory-box">
        <h4>边界条件的物理意义</h4>
        <ul>
          <li><strong>周期性：</strong>消除表面效应</li>
          <li><strong>波矢量子化：</strong>离散的k值</li>
          <li><strong>模式数目：</strong>N个独立的振动模式</li>
          <li><strong>布里渊区：</strong>独立波矢的范围</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>平面波解</h2>
      
      <h3>试探解</h3>
      <div class="formula-box">
        <p><strong>平面波形式：</strong></p>
        <p>uₙ(t) = A e^(i(kna - ωt))</p>
        <p><strong>代入运动方程：</strong></p>
        <p>-mω²A e^(i(kna - ωt)) = KA e^(i(kna - ωt))[e^(ika) + e^(-ika) - 2]</p>
        <p><strong>色散关系：</strong></p>
        <p>ω²(k) = (2K/m)[1 - cos(ka)]</p>
        <p><strong>频率：</strong></p>
        <p>ω(k) = 2√(K/m)|sin(ka/2)|</p>
      </div>

      <div class="concept-box">
        <h4>色散关系的特征</h4>
        <ul>
          <li><strong>周期性：</strong>ω(k + 2π/a) = ω(k)</li>
          <li><strong>对称性：</strong>ω(k) = ω(-k)</li>
          <li><strong>长波极限：</strong>ω ≈ √(K/m) · a|k|/2 (k → 0)</li>
          <li><strong>短波极限：</strong>ω → 2√(K/m) (k → π/a)</li>
        </ul>
      </div>

      <h3>群速度和相速度</h3>
      <div class="formula-box">
        <p><strong>相速度：</strong></p>
        <p>vₚ = ω/k = (2√(K/m)/k)|sin(ka/2)|</p>
        <p><strong>群速度：</strong></p>
        <p>vₘ = dω/dk = √(K/m) · a cos(ka/2)/2</p>
        <p><strong>长波极限：</strong></p>
        <p>vₚ ≈ vₘ ≈ a√(K/m)/2 = v_sound</p>
        <p><strong>声速：</strong></p>
        <p>v_sound = a√(K/m)/2</p>
      </div>

      <div class="theory-box">
        <h4>速度的物理意义</h4>
        <ul>
          <li><strong>声速：</strong>长波声学模式的传播速度</li>
          <li><strong>色散：</strong>不同频率的波传播速度不同</li>
          <li><strong>群速度：</strong>波包的传播速度</li>
          <li><strong>因果性：</strong>群速度决定信息传播</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>正则模式</h2>
      
      <h3>正则坐标</h3>
      <div class="formula-box">
        <p><strong>傅里叶变换：</strong></p>
        <p>uₙ(t) = (1/√N) Σₖ Qₖ(t) e^(ikna)</p>
        <p><strong>逆变换：</strong></p>
        <p>Qₖ(t) = (1/√N) Σₙ uₙ(t) e^(-ikna)</p>
        <p><strong>正则坐标的运动方程：</strong></p>
        <p>d²Qₖ/dt² + ω²(k)Qₖ = 0</p>
        <p><strong>解：</strong></p>
        <p>Qₖ(t) = Aₖ e^(-iω(k)t) + Bₖ e^(iω(k)t)</p>
      </div>

      <div class="concept-box">
        <h4>正则模式的优势</h4>
        <ul>
          <li><strong>解耦：</strong>N个独立的谐振子</li>
          <li><strong>对角化：</strong>动力学矩阵的对角化</li>
          <li><strong>能量分离：</strong>每个模式独立的能量</li>
          <li><strong>叠加原理：</strong>总运动是各模式的叠加</li>
        </ul>
      </div>

      <h3>能量表达式</h3>
      <div class="formula-box">
        <p><strong>动能：</strong></p>
        <p>T = ½ Σₖ m|dQₖ/dt|²</p>
        <p><strong>势能：</strong></p>
        <p>V = ½ Σₖ mω²(k)|Qₖ|²</p>
        <p><strong>总能量：</strong></p>
        <p>E = Σₖ Eₖ = Σₖ ½m[|dQₖ/dt|² + ω²(k)|Qₖ|²]</p>
        <p><strong>模式能量：</strong></p>
        <p>Eₖ = ½m[|dQₖ/dt|² + ω²(k)|Qₖ|²]</p>
      </div>

      <div class="theory-box">
        <h4>能量的特征</h4>
        <ul>
          <li><strong>可加性：</strong>总能量是各模式能量之和</li>
          <li><strong>守恒性：</strong>每个模式的能量独立守恒</li>
          <li><strong>谐振子形式：</strong>每个模式都是谐振子</li>
          <li><strong>频率依赖：</strong>能量与频率的平方成正比</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>双原子链</h2>
      
      <h3>模型扩展</h3>
      <div class="formula-box">
        <p><strong>两种原子：</strong></p>
        <p>质量：m₁, m₂ (m₁ ≠ m₂)</p>
        <p><strong>位移：</strong></p>
        <p>u₂ₙ₋₁ (质量m₁), u₂ₙ (质量m₂)</p>
        <p><strong>运动方程：</strong></p>
        <p>m₁ d²u₂ₙ₋₁/dt² = K(u₂ₙ + u₂ₙ₋₂ - 2u₂ₙ₋₁)</p>
        <p>m₂ d²u₂ₙ/dt² = K(u₂ₙ₊₁ + u₂ₙ₋₁ - 2u₂ₙ)</p>
      </div>

      <div class="concept-box">
        <h4>双原子链的特点</h4>
        <ul>
          <li><strong>两个子晶格：</strong>A和B两种原子</li>
          <li><strong>原胞加倍：</strong>原胞包含两个原子</li>
          <li><strong>两支色散：</strong>声学支和光学支</li>
          <li><strong>能隙：</strong>光学支和声学支之间的频率间隙</li>
        </ul>
      </div>

      <h3>色散关系</h3>
      <div class="formula-box">
        <p><strong>试探解：</strong></p>
        <p>u₂ₙ₋₁ = A₁ e^(i(kna - ωt))</p>
        <p>u₂ₙ = A₂ e^(i(kna - ωt))</p>
        <p><strong>久期方程：</strong></p>
        <p>det|2K - m₁ω²    -2K cos(ka/2)|  = 0</p>
        <p>   |-2K cos(ka/2)  2K - m₂ω²   |</p>
        <p><strong>色散关系：</strong></p>
        <p>ω²± = K(1/m₁ + 1/m₂) ± K√[(1/m₁ + 1/m₂)² - 4sin²(ka/2)/(m₁m₂)]</p>
      </div>

      <div class="theory-box">
        <h4>两支模式</h4>
        <ul>
          <li><strong>声学支(-)：</strong>长波极限ω → 0</li>
          <li><strong>光学支(+)：</strong>长波极限ω → √(2K(m₁+m₂)/(m₁m₂))</li>
          <li><strong>频率间隙：</strong>两支之间的禁带</li>
          <li><strong>振动模式：</strong>同相(声学)和反相(光学)振动</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>连续介质近似</h2>
      
      <h3>长波极限</h3>
      <div class="formula-box">
        <p><strong>连续化条件：</strong></p>
        <p>ka << 1 (波长 >> 晶格常数)</p>
        <p><strong>位移场：</strong></p>
        <p>u(x,t) ≈ uₙ(t), x = na</p>
        <p><strong>波动方程：</strong></p>
        <p>∂²u/∂t² = v²∂²u/∂x²</p>
        <p><strong>声速：</strong></p>
        <p>v = a√(K/m)</p>
      </div>

      <div class="concept-box">
        <h4>连续介质的优势</h4>
        <ul>
          <li><strong>简化处理：</strong>偏微分方程代替差分方程</li>
          <li><strong>解析解：</strong>容易获得解析解</li>
          <li><strong>物理直观：</strong>声波传播的直观图像</li>
          <li><strong>实验对应：</strong>与宏观声学实验对应</li>
        </ul>
      </div>

      <h3>弹性理论</h3>
      <div class="formula-box">
        <p><strong>应变：</strong></p>
        <p>ε = ∂u/∂x</p>
        <p><strong>应力：</strong></p>
        <p>σ = Y ε = Y ∂u/∂x</p>
        <p><strong>运动方程：</strong></p>
        <p>ρ ∂²u/∂t² = ∂σ/∂x = Y ∂²u/∂x²</p>
        <p><strong>声速：</strong></p>
        <p>v = √(Y/ρ)</p>
      </div>

      <div class="theory-box">
        <h4>宏观参数的微观起源</h4>
        <ul>
          <li><strong>杨氏模量：</strong>Y = Ka/A (A为截面积)</li>
          <li><strong>密度：</strong>ρ = m/a³ (三维情况)</li>
          <li><strong>声速：</strong>微观参数决定的宏观性质</li>
          <li><strong>尺度桥接：</strong>连接微观和宏观</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>应用与扩展</h2>
      
      <h3>实际材料中的应用</h3>
      <div class="application-box">
        <h4>材料科学应用</h4>
        <ul>
          <li><strong>热导率：</strong>声子热传导的微观机制</li>
          <li><strong>比热：</strong>晶格振动对比热的贡献</li>
          <li><strong>热膨胀：</strong>非谐效应导致的热膨胀</li>
          <li><strong>相变：</strong>结构相变中的软模</li>
        </ul>
      </div>

      <h3>现代发展</h3>
      <div class="application-box">
        <h4>前沿研究方向</h4>
        <ul>
          <li><strong>声子晶体：</strong>人工周期结构的声子调控</li>
          <li><strong>拓扑声子：</strong>拓扑保护的声子态</li>
          <li><strong>非线性声学：</strong>大振幅下的非线性效应</li>
          <li><strong>量子声学：</strong>声子的量子相干效应</li>
        </ul>
      </div>

      <h3>计算方法</h3>
      <div class="application-box">
        <h4>数值计算技术</h4>
        <ul>
          <li><strong>第一性原理：</strong>从电子结构计算声子谱</li>
          <li><strong>分子动力学：</strong>大规模原子模拟</li>
          <li><strong>格林函数：</strong>缺陷和界面的处理</li>
          <li><strong>机器学习：</strong>AI辅助的声子性质预测</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          一维原子链的经典描述为我们理解晶格振动提供了最基本的理论框架。
          通过建立简单的弹簧-质点模型，我们推导出了色散关系，揭示了声子的基本性质。
          单原子链展现了声学模式的特征，而双原子链进一步引入了光学模式的概念。
          正则模式分析将复杂的多体问题转化为独立谐振子的集合，大大简化了问题的处理。
          连续介质近似则建立了微观晶格模型与宏观弹性理论之间的桥梁。
          这些经典理论不仅为后续的量子化处理奠定了基础，
          也在现代材料科学、声子工程和量子技术中发挥着重要作用。
          理解这些基本概念对于深入研究凝聚态物理的其他分支具有重要意义。
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

.application-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);
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
.application-box ul {
  list-style-type: none;
  padding-left: 0;
}

.concept-box li,
.theory-box li,
.application-box li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-box li::before,
.theory-box li::before,
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
  .application-box,
  .summary-box {
    background: #f8f9fa !important;
    color: #333 !important;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>