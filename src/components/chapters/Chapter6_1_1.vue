<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.1.1 什么是标度不变性？</h1>
      <p class="chapter-subtitle">标度变换和标度不变性的数学定义与物理意义</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：15分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解标度变换的数学定义</li>
        <li>掌握标度不变性的物理含义</li>
        <li>学会识别具有标度不变性的物理系统</li>
        <li>理解标度不变性与临界现象的关系</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：为什么标度不变性如此重要？</h2>
      <div class="highlight-box">
        <p>
          想象一下，当你用显微镜观察雪花的结构时，无论放大多少倍，你都能看到相似的分形图案。
          这种在不同尺度下保持相似性的性质，就是<strong>标度不变性</strong>的一个直观例子。
          在凝聚态物理中，标度不变性是理解临界现象和相变的关键概念。
        </p>
      </div>
    </section>

    <!-- 数学定义 -->
    <section class="content-section">
      <h2>1. 标度变换的数学定义</h2>
      
      <div class="definition-box">
        <h4>定义：标度变换</h4>
        <p>
          对于一个物理量 $f(\mathbf{r})$，标度变换定义为：
        </p><div class="formula-container">$$\mathbf{r} \rightarrow \lambda \mathbf{r}$$$$f(\mathbf{r}) \rightarrow \lambda^{-d_f} f(\lambda \mathbf{r})$$</div><p>其中$\lambda > 0$ 是标度因子，$d_f$ 是 $f$的标度维度。
        </p>
      </div>

      <div class="example-box"><h4>例子：简单的标度变换</h4><p>考虑一个函数$f(x) = x^2$：</p><ul><li>标度变换：$x \rightarrow \lambda x$</li><li>函数变换：$f(\lambda x) = (\lambda x)^2 = \lambda^2 x^2 = \lambda^2 f(x)$</li><li>因此：$d_f = -2$（因为 $f(\lambda x) = \lambda^{-(-2)} f(x)$）</li>
        </ul>
      </div>
    </section>

    <!-- 标度不变性 -->
    <section class="content-section">
      <h2>2. 标度不变性的概念</h2>
      
      <div class="definition-box">
        <h4>定义：标度不变性</h4>
        <p>
          如果一个物理系统在标度变换下保持不变，即：
        </p><div class="formula-container">$$\mathcal{L}[\lambda \mathbf{r}, \lambda^{-d_\phi} \phi(\lambda \mathbf{r})] = \lambda^{-d} \mathcal{L}[\mathbf{r}, \phi(\mathbf{r})]$$</div><p>其中$\mathcal{L}$ 是拉格朗日密度，$d$是空间维度，那么该系统具有标度不变性。
        </p>
      </div>

      <div class="interactive-demo">
        <h4>交互演示：标度变换可视化</h4>
        <div class="demo-container">
          <div class="scale-demo">
            <svg width="400" height="200" viewBox="0 0 400 200">
              <!-- 原始函数 -->
              <g class="original-function">
                <path d="M 50 150 Q 100 50 150 150 Q 200 50 250 150 Q 300 50 350 150" 
                      stroke="#3498db" stroke-width="2" fill="none"/>
                <text x="200" y="180" text-anchor="middle" class="function-label">
                  原始函数 f(x)
                </text>
              </g>
              
              <!-- 标度变换后的函数 -->
              <g class="scaled-function" opacity="0.7">
                <path d="M 50 150 Q 75 75 100 150 Q 125 75 150 150 Q 175 75 200 150" 
                      stroke="#e74c3c" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
                <text x="125" y="195" text-anchor="middle" class="function-label">
                  标度变换 f(λx)
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 物理意义 -->
    <section class="content-section">
      <h2>3. 标度不变性的物理意义</h2>
      
      <div class="physics-insight">
        <h4>物理直觉</h4>
        <p>
          标度不变性意味着系统在不同的长度尺度下表现出相同的物理行为。
          这在临界点附近特别重要，因为此时系统失去了特征长度尺度。
        </p>
      </div>

      <div class="two-column-layout">
        <div class="column">
          <h4>有标度不变性的系统</h4>
          <ul>
            <li><strong>临界点附近的相变</strong><div class="formula-container">$$\xi \sim |T - T_c|^{-\nu}$$</div> </li><li><strong>分形结构</strong> <div class="formula-container">$$N(r) \sim r^{-d_f}$$</div> </li><li><strong>无质量场论</strong> <div class="formula-container">$$\mathcal{L} = \frac{1}{2}(\partial_\mu \phi)^2$$</div>
            </li>
          </ul>
        </div>
        
        <div class="column">
          <h4>破坏标度不变性的因素</h4> <ul><li><strong>有限尺寸效应</strong> <div class="formula-container">$$L_{\text{system}} &lt; \xi$$</div> </li><li><strong>质量项</strong> <div class="formula-container">$$\mathcal{L} = \frac{1}{2}(\partial_\mu \phi)^2 + \frac{1}{2}m^2\phi^2$$</div> </li><li><strong>温度偏离临界点</strong> <div class="formula-container">$$t = \frac{T - T_c}{T_c} \neq 0$$</div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 标度维度 -->
    <section class="content-section">
      <h2>4. 标度维度的计算</h2>
      
      <div class="method-box">
        <h4>量纲分析方法</h4>
        <p>通过量纲分析可以确定物理量的标度维度：</p>
        
        <div class="dimension-table">
          <table>
            <thead>
              <tr>
                <th>物理量</th>
                <th>量纲</th>
                <th>标度维度</th>
              </tr>
            </thead>
            <tbody><tr><td>长度$r$</td><td>$[L]$</td><td>$1$</td>
              </tr><tr><td>时间$t$</td><td>$[T]$</td><td>$z$(动力学指数)</td>
              </tr><tr><td>温度$T$</td><td>$[E]$</td><td>$z$(在量子系统中)</td>
              </tr><tr><td>磁化强度$M$</td><td>无量纲</td><td>$\beta/\nu$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- 实际应用 -->
    <section class="content-section">
      <h2>5. 标度不变性的实际应用</h2>
      
      <div class="application-grid">
        <div class="application-card"><h4>Ising模型临界点</h4><p>在临界温度$T_c$处，Ising模型的关联函数表现出幂律行为：</p><div class="formula-container">$$G(r) \sim r^{-(d-2+\eta)}$$</div><p>其中$\eta$是异常维度。</p>
        </div>
        
        <div class="application-card">
          <h4>量子相变</h4>
          <p>零温量子相变点附近，系统表现出时空标度不变性：</p><div class="formula-container">$$\omega \sim k^z$$</div><p>其中$z$是动力学临界指数。</p>
        </div>
        
        <div class="application-card">
          <h4>分形几何</h4>
          <p>分形结构的质量标度关系：</p><div class="formula-container">$$M(r) \sim r^{d_f}$$</div><p>其中$d_f$是分形维度。</p>
        </div>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box"><ul><li><strong>标度变换</strong>：$\mathbf{r} \rightarrow \lambda \mathbf{r}$，$f(\mathbf{r}) \rightarrow \lambda^{-d_f} f(\lambda \mathbf{r})$</li>
          <li><strong>标度不变性</strong>：系统在标度变换下保持不变的性质</li>
          <li><strong>物理意义</strong>：系统失去特征长度尺度，在不同尺度下表现相同</li>
          <li><strong>应用</strong>：临界现象、量子相变、分形结构等</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考题</h2>
      <div class="exercise-box">
        <ol>
          <li>证明自由粒子的薛定谔方程具有标度不变性。</li>
          <li>为什么有质量的粒子会破坏标度不变性？</li>
          <li>在二维Ising模型中，临界点处的关联长度如何标度？</li>
          <li>分形维度与欧几里得维度有什么区别？</li>
        </ol>
      </div>
    </section>

    <!-- 进一步阅读 -->
    <section class="content-section">
      <h2>进一步阅读</h2>
      <div class="reading-list">
        <ul>
          <li>Goldenfeld, N. "Lectures on Phase Transitions and the Renormalization Group" - Chapter 2</li>
          <li>Cardy, J. "Scaling and Renormalization in Statistical Physics" - Chapter 1</li>
          <li>Sachdev, S. "Quantum Phase Transitions" - Chapter 1</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_1_1',
  mounted() {
    // 确保 KaTeX 渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ]
        });
      }
    });
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin-bottom: 15px;
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.learning-objectives {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
  border-left: 5px solid #007bff;
}

.learning-objectives h3 {
  color: #007bff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-section {
  margin-bottom: 40px;
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.highlight-box {
  background: linear-gradient(135deg, #74b9ff, #0984e3);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.definition-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.definition-box h4 {
  color: #856404;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.example-box {
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.example-box h4 {
  color: #0c5460;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-container {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.interactive-demo {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  border: 2px solid #e9ecef;
}

.demo-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.scale-demo {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.function-label {
  font-size: 12px;
  fill: #666;
}

.physics-insight {
  background: #e8f5e8;
  border: 1px solid #c3e6c3;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.physics-insight h4 {
  color: #155724;
  margin-bottom: 15px;
}

.two-column-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.column {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.method-box {
  background: #fff;
  border: 2px solid #6c5ce7;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.method-box h4 {
  color: #6c5ce7;
  margin-bottom: 15px;
}

.dimension-table {
  margin-top: 20px;
}

.dimension-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.dimension-table th,
.dimension-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.dimension-table th {
  background: #6c5ce7;
  color: white;
  font-weight: 600;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e17055;
}

.application-card h4 {
  color: #e17055;
  margin-bottom: 15px;
}

.summary-box {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #4CAF50;
}

.exercise-box {
  background: #fff8e1;
  border: 1px solid #ffcc02;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .two-column-layout {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .application-grid {
    grid-template-columns: 1fr;
  }
}
</style>