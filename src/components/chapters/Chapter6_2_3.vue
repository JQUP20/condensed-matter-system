<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.2.3 普适性类的概念</h1>
      <p class="chapter-subtitle">从微观多样性到宏观统一性</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：30分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解普适性类的定义和物理意义</li>
        <li>掌握决定普适性类的关键因素</li>
        <li>学习不同普适性类的分类标准</li>
        <li>理解临界指数的普适性</li>
        <li>掌握实际系统的普适性类判断</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：自然界的统一性</h2>
      <div class="highlight-box">
        <p>
          在凝聚态物理中，最令人惊奇的发现之一是<strong>普适性</strong>现象：
          看似完全不同的物理系统在临界点附近表现出相同的行为。
          液气相变、铁磁相变、超导相变等看起来毫无关联的现象，
          却遵循着相同的标度律和临界指数。这种普适性揭示了
          <strong>自然界深层次的统一性</strong>。
        </p>
      </div>
    </section>

    <!-- 普适性类的定义 -->
    <section class="content-section">
      <h2>1. 普适性类的定义</h2>
      
      <div class="universality-definition">
        <div class="definition-box">
          <h4>普适性类（Universality Class）</h4>
          <p>
            具有相同临界指数和标度函数的物理系统构成一个<strong>普适性类</strong>。
            属于同一普适性类的系统在临界点附近表现出相同的宏观行为，
            尽管它们的微观细节可能完全不同。
          </p>
        </div>
        
        <div class="universality-examples">
          <h4>经典例子</h4>
          <div class="examples-grid">
            <div class="example-card">
              <h5>Ising普适性类</h5>
              <ul>
                <li>三维Ising模型</li>
                <li>液气相变</li>
                <li>二元合金的有序-无序转变</li>
                <li>某些铁磁体的相变</li>
              </ul>
            </div>
            <div class="example-card">
              <h5>XY普适性类</h5>
              <ul>
                <li>二维XY模型</li>
                <li>超流相变</li>
                <li>Kosterlitz-Thouless转变</li>
                <li>二维超导体</li>
              </ul>
            </div>
            <div class="example-card">
              <h5>Heisenberg普适性类</h5>
              <ul>
                <li>三维Heisenberg模型</li>
                <li>各向同性铁磁体</li>
                <li>某些反铁磁体</li>
                <li>超流氦-3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 决定普适性类的因素 -->
    <section class="content-section">
      <h2>2. 决定普适性类的关键因素</h2>
      
      <div class="determining-factors">
        <div class="factor-analysis">
          <h4>主要因素</h4>
          <div class="factors-grid">
            <div class="factor-card">
              <h5>1. 空间维度 (d)</h5>
              <p>
                系统的空间维度是最重要的因素。二维、三维系统
                通常属于不同的普适性类。
              </p>
              <div class="formula-box">
                $$d = 1, 2, 3, \ldots$$</div>
            </div>
            
            <div class="factor-card">
              <h5>2. 序参量维度 (n)</h5>
              <p>
                序参量的分量数决定了系统的对称性。 Ising (n=1)、XY (n=2)、Heisenberg (n=3)。</p> <div class="formula-box">$$n = 1, 2, 3, \ldots$$</div>
            </div>
            
            <div class="factor-card">
              <h5>3. 对称性</h5>
              <p>
                系统的对称性群决定了允许的相互作用形式 和可能的相变类型。</p> <div class="formula-box">$$G: Z_2, O(n), U(1), \ldots$$</div>
            </div>
            
            <div class="factor-card">
              <h5>4. 相互作用范围</h5>
              <p>
                短程相互作用和长程相互作用可能导致 不同的普适性行为。</p> <div class="formula-box">$$V(r) \sim r^{-\sigma}$$</div>
            </div>
          </div>
        </div>
        
        <div class="irrelevant-factors">
          <h4>不相关因素</h4>
          <div class="irrelevant-box">
            <p>以下因素通常<strong>不影响</strong>普适性类的归属：</p>
            <ul>
              <li>晶格类型（立方、六角等）</li>
              <li>微观相互作用的具体数值</li>
              <li>系统的具体材料组成</li>
              <li>温度、压力等外部参数的具体值</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 临界指数的普适性 -->
    <section class="content-section">
      <h2>3. 临界指数的普适性</h2>
      
      <div class="critical-exponents">
        <div class="exponents-table">
          <h4>主要临界指数</h4>
          <table class="universality-table">
            <thead>
              <tr>
                <th>指数</th>
                <th>定义</th>
                <th>物理意义</th>
                <th>Ising (d=3)</th>
                <th>XY (d=3)</th>
                <th>Heisenberg (d=3)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>α</td><td>$C \sim |t|^{-\alpha}$</td>
                <td>比热</td>
                <td>0.110</td>
                <td>-0.007</td>
                <td>-0.115</td>
              </tr>
              <tr><td>β</td><td>$M \sim |t|^{\beta}$</td>
                <td>序参量</td>
                <td>0.326</td>
                <td>0.346</td>
                <td>0.365</td>
              </tr>
              <tr><td>γ</td><td>$\chi \sim |t|^{-\gamma}$</td>
                <td>磁化率</td>
                <td>1.237</td>
                <td>1.316</td>
                <td>1.386</td>
              </tr>
              <tr><td>δ</td><td>$M \sim H^{1/\delta}$</td>
                <td>临界等温线</td>
                <td>4.789</td>
                <td>4.780</td>
                <td>4.803</td>
              </tr>
              <tr><td>ν</td><td>$\xi \sim |t|^{-\nu}$</td>
                <td>关联长度</td>
                <td>0.630</td>
                <td>0.669</td>
                <td>0.705</td>
              </tr>
              <tr><td>η</td><td>$G(r) \sim r^{-(d-2+\eta)}$</td>
                <td>关联函数</td>
                <td>0.036</td>
                <td>0.038</td>
                <td>0.035</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="scaling-relations">
          <h4>标度关系</h4>
          <p>临界指数之间存在普适的标度关系：</p>
          <div class="relations-grid">
            <div class="relation-box">
              <h5>Rushbrooke关系</h5><div class="formula-box">$$\alpha + 2\beta + \gamma = 2$$</div>
            </div> <div class="relation-box"><h5>Widom关系</h5> <div class="formula-box">$$\gamma = \beta(\delta - 1)$$</div>
            </div> <div class="relation-box"><h5>Fisher关系</h5> <div class="formula-box">$$\gamma = \nu(2 - \eta)$$</div>
            </div> <div class="relation-box"><h5>Josephson关系</h5> <div class="formula-box">$$\nu d = 2 - \alpha$$</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 普适性类的分类 -->
    <section class="content-section">
      <h2>4. 普适性类的分类</h2>
      
      <div class="classification-system">
        <div class="classification-tree">
          <h4>按维度和对称性分类</h4>
          <div class="tree-structure">
            <div class="dimension-branch">
              <h5>二维系统 (d=2)</h5>
              <div class="symmetry-classes">
                <div class="class-item"><strong>Ising类 (n=1)</strong><p>精确解：$\nu = 1$, $\beta = 1/8$, $\gamma = 7/4$</p>
                </div>
                <div class="class-item"><strong>XY类 (n=2)</strong><p>Kosterlitz-Thouless转变：$\nu = \infty$</p>
                </div>
                <div class="class-item">
                  <strong>Heisenberg类 (n=3)</strong>
                  <p>无长程序，只有准长程序</p>
                </div>
              </div>
            </div>
            
            <div class="dimension-branch">
              <h5>三维系统 (d=3)</h5>
              <div class="symmetry-classes">
                <div class="class-item">
                  <strong>Ising类 (n=1)</strong>
                  <p>液气相变、二元合金</p>
                </div>
                <div class="class-item">
                  <strong>XY类 (n=2)</strong>
                  <p>超流相变、平面转子</p>
                </div>
                <div class="class-item">
                  <strong>Heisenberg类 (n=3)</strong>
                  <p>各向同性铁磁体</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="special-classes">
          <h4>特殊普适性类</h4>
          <div class="special-grid">
            <div class="special-card">
              <h5>Potts模型</h5><p>q态Potts模型具有$Z_q$对称性。当$q \leq 4$时为连续相变，$q > 4$时为一级相变。
              </p>
            </div>
            <div class="special-card">
              <h5>渗流</h5>
              <p>
                几何相变，具有独特的临界指数。
                与热力学相变不同，没有序参量的热涨落。
              </p>
            </div>
            <div class="special-card">
              <h5>量子相变</h5>
              <p>零温下的相变，由量子涨落驱动。有效维度为$d+z$，其中$z$是动力学指数。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="content-section">
      <h2>5. 实验验证与应用</h2>
      
      <div class="experimental-verification">
        <div class="verification-examples">
          <h4>经典验证实例</h4>
          <div class="examples-detailed">
            <div class="example-detailed">
              <h5>液气相变</h5>
              <p>
                不同流体（水、CO₂、氙等）在临界点附近的行为
                完全符合三维Ising普适性类的预测。
              </p>
              <div class="data-box">
                <p><strong>实验值：</strong> β ≈ 0.325, γ ≈ 1.24, ν ≈ 0.63</p>
                <p><strong>理论值：</strong> β = 0.326, γ = 1.237, ν = 0.630</p>
              </div>
            </div>
            
            <div class="example-detailed">
              <h5>铁磁相变</h5>
              <p>
                各种铁磁材料（铁、镍、钆等）的相变行为
                与Ising或Heisenberg模型的预测高度一致。
              </p>
              <div class="data-box">
                <p><strong>铁（Ising类）：</strong> β ≈ 0.33, γ ≈ 1.24</p>
                <p><strong>镍（Heisenberg类）：</strong> β ≈ 0.36, γ ≈ 1.39</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="practical-applications">
          <h4>实际应用</h4>
          <div class="applications-grid">
            <div class="application-card">
              <h5>材料设计</h5>
              <p>
                通过普适性类的知识，可以预测新材料
                在相变点附近的行为，指导材料设计。
              </p>
            </div>
            <div class="application-card">
              <h5>数值模拟</h5>
              <p>
                利用普适性，可以用简单模型研究
                复杂系统的临界行为。
              </p>
            </div>
            <div class="application-card">
              <h5>有限尺寸标度</h5>
              <p>
                普适性类的知识帮助理解有限系统
                中的尺寸效应和边界效应。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论意义 -->
    <section class="content-section">
      <h2>6. 理论意义与深层理解</h2>
      
      <div class="theoretical-significance">
        <div class="deep-insights">
          <h4>深层物理图像</h4>
          <div class="insights-grid">
            <div class="insight-card">
              <h5>涌现性质</h5>
              <p>
                普适性是典型的<strong>涌现现象</strong>：
                宏观行为不依赖于微观细节，
                体现了复杂系统的层次性结构。
              </p>
            </div>
            <div class="insight-card">
              <h5>重整化群流</h5>
              <p>
                普适性类对应重整化群流的<strong>不动点</strong>。
                不同的初始条件流向相同的不动点，
                导致相同的临界行为。
              </p>
            </div>
            <div class="insight-card">
              <h5>对称性原理</h5>
              <p>
                普适性类的分类本质上反映了
                <strong>对称性破缺</strong>的模式，
                体现了对称性在物理学中的核心地位。
              </p>
            </div>
          </div>
        </div>
        
        <div class="philosophical-implications">
          <h4>哲学意义</h4>
          <div class="philosophy-box">
            <p>
              普适性概念揭示了自然界的一个深刻真理：
              <strong>复杂性中的简单性</strong>。尽管微观世界千变万化，
              但宏观现象却遵循着统一的规律。这种统一性不是偶然的，
              而是源于物理系统在不同尺度上的<strong>自相似性</strong>
              和<strong>标度不变性</strong>。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <div class="key-points">
          <h4>关键要点</h4>
          <ul>
            <li><strong>普适性类</strong>：具有相同临界指数的系统类别</li>
            <li><strong>决定因素</strong>：空间维度、序参量维度、对称性</li>
            <li><strong>临界指数</strong>：普适的宏观量，不依赖微观细节</li>
            <li><strong>分类体系</strong>：按维度和对称性进行系统分类</li>
            <li><strong>实验验证</strong>：理论预测与实验高度一致</li>
            <li><strong>深层意义</strong>：体现了自然界的统一性和层次性</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 练习题 -->
    <div class="exercise-box">
      <h3><i class="fas fa-pencil-alt"></i> 思考练习</h3>
      <ol>
        <li>为什么液体-气体相变和铁磁相变属于同一普适性类？</li>
        <li>如何从对称性角度理解不同普适性类的区别？</li>
        <li>二维Ising模型为什么有精确解？这对普适性有什么启示？</li>
        <li>量子相变的普适性类与经典相变有什么不同？</li>
      </ol>
    </div>

    <!-- 扩展阅读 -->
    <div class="reading-list">
      <h3><i class="fas fa-book"></i> 扩展阅读</h3>
      <ul>
        <li>Goldenfeld, N. "Lectures on Phase Transitions and the Renormalization Group"</li>
        <li>Cardy, J. "Scaling and Renormalization in Statistical Physics"</li>
        <li>Pelissetto, A. & Vicari, E. "Critical phenomena and renormalization-group theory"</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_2_3',
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
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
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
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.learning-objectives {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.learning-objectives h3 {
  color: #2980b9;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.learning-objectives ul {
  margin: 0;
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
}

.content-section {
  margin: 30px 0;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.highlight-box {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  border-left: 5px solid #28a745;
}

.universality-definition {
  margin: 20px 0;
}

.definition-box {
  background: #e3f2fd;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  border-left: 5px solid #2196f3;
}

.definition-box h4 {
  color: #1976d2;
  margin-bottom: 10px;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.example-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #ff6b6b;
}

.example-card h5 {
  color: #e55353;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.example-card ul {
  margin: 0;
  padding-left: 20px;
}

.example-card li {
  margin-bottom: 5px;
}

.determining-factors {
  margin: 20px 0;
}

.factors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.factor-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #17a2b8;
}

.factor-card h5 {
  color: #138496;
  margin-bottom: 10px;
}

.formula-box {
  background: #f1f3f4;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  margin: 10px 0;
  font-family: 'Times New Roman', serif;
}

.irrelevant-box {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
}

.irrelevant-box ul {
  margin: 10px 0 0 0;
  padding-left: 20px;
}

.universality-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.universality-table th,
.universality-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.universality-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.universality-table tr:hover {
  background: #f8f9fa;
}

.relations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.relation-box {
  background: white;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.relation-box h5 {
  color: #6c5ce7;
  margin-bottom: 10px;
  font-size: 0.9em;
}

.classification-system {
  margin: 20px 0;
}

.tree-structure {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.dimension-branch {
  margin-bottom: 30px;
}

.dimension-branch h5 {
  color: #2d3436;
  font-size: 1.2em;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: 2px solid #74b9ff;
}

.symmetry-classes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
}

.class-item {
  background: white;
  border-radius: 8px;
  padding: 15px;
  border-left: 4px solid #00b894;
}

.class-item strong {
  color: #00a085;
}

.special-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.special-card {
  background: #ffeaa7;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #fdcb6e;
}

.special-card h5 {
  color: #e17055;
  margin-bottom: 10px;
}

.examples-detailed {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.example-detailed {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.example-detailed h5 {
  color: #6c5ce7;
  margin-bottom: 10px;
}

.data-box {
  background: #f1f3f4;
  border-radius: 5px;
  padding: 15px;
  margin: 10px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: #dff0d8;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #5cb85c;
}

.application-card h5 {
  color: #449d44;
  margin-bottom: 10px;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.insight-card {
  background: #e8f5e8;
  border-radius: 10px;
  padding: 20px;
  border-left: 4px solid #28a745;
}

.insight-card h5 {
  color: #1e7e34;
  margin-bottom: 10px;
}

.philosophy-box {
  background: #f3e5f5;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  border-left: 5px solid #9c27b0;
}

.summary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
}

.summary-box h4 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-box ul {
  margin: 0;
  padding-left: 20px;
}

.summary-box li {
  margin-bottom: 8px;
}

.exercise-box {
  background: #fff8e1;
  border: 1px solid #ffcc02;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.exercise-box h3 {
  color: #f57f17;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin-bottom: 10px;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

.reading-list h3 {
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.reading-list ul {
  margin: 0;
  padding-left: 20px;
}

.reading-list li {
  margin-bottom: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .examples-grid,
  .factors-grid,
  .relations-grid,
  .special-grid,
  .applications-grid,
  .insights-grid {
    grid-template-columns: 1fr;
  }
  
  .universality-table {
    font-size: 0.8em;
  }
  
  .symmetry-classes {
    margin-left: 0;
  }
}
</style>