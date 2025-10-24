<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.1.1 单粒子的路径积分</h1>
      <p class="chapter-subtitle">Path Integral for Single Particle</p>
    </div>

    <div class="content-section">
      <h2>基本概念</h2>
      <p>路径积分是量子力学的一种重要表述方式，由费曼在1948年提出。它将量子力学的演化过程表示为对所有可能路径的积分，为理解量子现象提供了直观的几何图像。</p>
      
      <div class="concept-box">
        <h3>路径积分的基本思想</h3>
        <p>在经典力学中，粒子从点A到点B只有一条确定的轨道。而在量子力学中，粒子可以通过所有可能的路径从A到B，每条路径都有相应的概率幅。</p>
      </div>
    </div>

    <div class="content-section">
      <h2>数学表述</h2>
      
      <div class="formula-section">
        <h3>传播子的路径积分表示</h3>
        <p>从位置 $x_i$ 在时刻 $t_i$ 到位置 $x_f$ 在时刻 $t_f$的传播子为：</p>
        <div class="formula-block">$$K(x_f, t_f; x_i, t_i) = \int \mathcal{D}x(t) \exp\left(\frac{i}{\hbar} S[x(t)]\right)$$</div><p>其中$S[x(t)]$是作用量：</p>
        <div class="formula-block">$$S[x(t)] = \int_{t_i}^{t_f} L(x, \dot{x}, t) dt$$</div>
      </div>

      <div class="formula-section">
        <h3>自由粒子的路径积分</h3>
        <p>对于自由粒子，拉格朗日量为：</p> <div class="formula-block">$$L = \frac{1}{2}m\dot{x}^2$$</div>
        <p>相应的传播子为：</p> <div class="formula-block">$$K_0(x_f, t_f; x_i, t_i) = \sqrt{\frac{m}{2\pi i\hbar(t_f - t_i)}} \exp\left(\frac{im(x_f - x_i)^2}{2\hbar(t_f - t_i)}\right)$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>离散化方法</h2>
      
      <div class="method-grid">
        <div class="method-card">
          <h3>时间切片方法</h3><p>将时间区间$[t_i, t_f]$ 分成 $N$个小段：</p>
          <div class="formula-block">$$t_n = t_i + n\epsilon, \quad \epsilon = \frac{t_f - t_i}{N}$$</div>
          <p>路径积分变为：</p> <div class="formula-block">$$K = \lim_{N \to \infty} \prod_{n=1}^{N-1} \int dx_n \prod_{n=0}^{N-1} \sqrt{\frac{m}{2\pi i\hbar\epsilon}} \exp\left(\frac{i\epsilon}{\hbar} L_n\right)$$</div>
        </div>

        <div class="method-card">
          <h3>相干态路径积分</h3>
          <p>对于谐振子系统，可以使用相干态表示：</p> <div class="formula-block">$$|z\rangle = e^{-|z|^2/2} e^{za^\dagger} |0\rangle$$</div>
          <p>路径积分表示为：</p> <div class="formula-block">$$\langle z_f | e^{-iHt/\hbar} | z_i \rangle = \int \mathcal{D}z^* \mathcal{D}z \exp\left(\frac{i}{\hbar} S[z^*, z]\right)$$</div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>具体计算示例</h2>
      
      <div class="example-section">
        <h3>一维谐振子</h3><p>哈密顿量：$H = \frac{p^2}{2m} + \frac{1}{2}m\omega^2 x^2$</p>
        
        <div class="calculation-steps">
          <div class="step">
            <h4>步骤1：写出拉格朗日量</h4>
            <div class="formula-block">$$L = \frac{1}{2}m\dot{x}^2 - \frac{1}{2}m\omega^2 x^2$$</div>
          </div>
          
          <div class="step">
            <h4>步骤2：计算作用量</h4> <div class="formula-block">$$S = \int_{t_i}^{t_f} \left(\frac{1}{2}m\dot{x}^2 - \frac{1}{2}m\omega^2 x^2\right) dt$$</div>
          </div>
          
          <div class="step">
            <h4>步骤3：求解传播子</h4> <div class="formula-block">$$K(x_f, t_f; x_i, t_i) = \sqrt{\frac{m\omega}{2\pi i\hbar \sin(\omega T)}} \exp\left(\frac{im\omega}{2\hbar \sin(\omega T)} [(x_f^2 + x_i^2)\cos(\omega T) - 2x_f x_i]\right)$$</div><p>其中$T = t_f - t_i$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>物理意义与应用</h2>
      
      <div class="physics-grid">
        <div class="physics-card">
          <h3>经典极限</h3><p>当$\hbar \to 0$时，路径积分由使作用量取驻值的经典路径主导，这正是最小作用量原理。</p>
          <div class="formula-block">$$\frac{\delta S}{\delta x} = 0$$</div>
        </div>

        <div class="physics-card">
          <h3>量子涨落</h3><p>有限的$\hbar$使得经典路径附近的路径也有贡献，这些贡献代表量子涨落效应。</p>
        </div>

        <div class="physics-card">
          <h3>隧穿效应</h3>
          <p>路径积分自然包含了量子隧穿，通过复时间路径（瞬子）来描述。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>数值计算方法</h2>
      
      <div class="numerical-methods">
        <div class="method-item">
          <h3>蒙特卡罗方法</h3>
          <p>使用重要性采样来计算路径积分：</p>
          <ul>
            <li>生成符合概率分布的路径样本</li>
            <li>计算每条路径的权重</li>
            <li>统计平均得到物理量</li>
          </ul>
        </div>

        <div class="method-item">
          <h3>格点方法</h3>
          <p>将连续时空离散化为格点：</p>
          <ul><li>时间方向：$t = n\epsilon$</li><li>空间方向：$x = ma$（如果需要）</li>
            <li>计算离散化的路径积分</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>与其他表述的关系</h2>
      
      <div class="relation-section">
        <h3>与薛定谔表述的关系</h3>
        <p>路径积分可以导出薛定谔方程。考虑无穷小时间演化：</p>
        <div class="formula-block">$$\psi(x, t + \epsilon) = \int K(x, t + \epsilon; x', t) \psi(x', t) dx'$$</div><p>在$\epsilon \to 0$的极限下，得到：</p>
        <div class="formula-block">$$i\hbar \frac{\partial \psi}{\partial t} = H\psi$$</div>
      </div>

      <div class="relation-section">
        <h3>与海森堡表述的关系</h3>
        <p>路径积分中的经典作用量对应海森堡表述中算符的时间演化。</p>
      </div>
    </div>

    <div class="content-section">
      <h2>高级主题</h2>
      
      <div class="advanced-topics">
        <div class="topic-card">
          <h3>虚时间路径积分</h3><p>通过 Wick 转动$t \to -i\tau$，可以将路径积分转换为统计力学的配分函数：</p>
          <div class="formula-block">$$Z = \text{Tr}[e^{-\beta H}] = \int \mathcal{D}x(\tau) \exp\left(-\frac{1}{\hbar} S_E[x(\tau)]\right)$$
          </div>
        </div>

        <div class="topic-card">
          <h3>瞬子解</h3>
          <p>在虚时间中，经典方程的非平凡解（瞬子）描述了量子隧穿过程。</p>
        </div>

        <div class="topic-card">
          <h3>泛函方法</h3>
          <p>路径积分为量子场论中的泛函方法提供了基础，包括生成泛函和有效作用量。</p>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>核心概念</h3>
          <ul>
            <li>路径积分表述</li>
            <li>传播子计算</li>
            <li>作用量原理</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>计算方法</h3>
          <ul>
            <li>时间切片离散化</li>
            <li>相干态表示</li>
            <li>数值计算技术</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>物理应用</h3>
          <ul>
            <li>量子力学基础</li>
            <li>统计力学联系</li>
            <li>量子场论基础</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

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
}

.method-grid, .physics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.method-card, .physics-card, .topic-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.method-card:hover, .physics-card:hover, .topic-card:hover {
  transform: translateY(-5px);
}

.method-card h3, .physics-card h3, .topic-card h3 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.example-section {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 25px 0;
}

.calculation-steps {
  margin: 20px 0;
}

.step {
  background: white;
  margin: 15px 0;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
}

.step h4 {
  color: #d68910;
  margin-bottom: 10px;
}

.numerical-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.method-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #bdc3c7;
}

.method-item h3 {
  color: #27ae60;
  margin-bottom: 15px;
}

.method-item ul {
  padding-left: 20px;
}

.method-item li {
  margin: 8px 0;
}

.relation-section {
  background: #f0f8ff;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.relation-section h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.advanced-topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.topic-card {
  border-top-color: #9b59b6;
}

.summary-section {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 30px;
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
  
  .method-grid, .physics-grid {
    grid-template-columns: 1fr;
  }
  
  .numerical-methods {
    grid-template-columns: 1fr;
  }
  
  .advanced-topics {
    grid-template-columns: 1fr;
  }
}
</style>