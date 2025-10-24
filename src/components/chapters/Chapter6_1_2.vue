<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.1.2 临界现象与幂律行为</h1>
      <p class="chapter-subtitle">相变附近的幂律标度和临界指数</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：20分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解临界现象的基本特征</li>
        <li>掌握幂律行为的数学表达</li>
        <li>学习各种临界指数的定义</li>
        <li>理解普适性的概念</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：临界点的神奇性质</h2>
      <div class="highlight-box">
        <p>
          当水加热到374°C时，液体和气体之间的界限消失了——这就是水的临界点。
          在这个特殊的点附近，物理量表现出<strong>幂律行为</strong>，
          这种行为不依赖于材料的微观细节，而是具有普适性。
          这种现象被称为<strong>临界现象</strong>。
        </p>
      </div>
    </section>

    <!-- 临界现象的基本特征 -->
    <section class="content-section">
      <h2>1. 临界现象的基本特征</h2>
      
      <div class="feature-grid">
        <div class="feature-card">
          <h4>关联长度发散</h4>
          <p>接近临界点时，系统的关联长度趋于无穷：</p>
          <div class="formula-container">
            $$\xi \sim |t|^{-\nu}$$</div><p>其中$t = (T-T_c)/T_c$是约化温度。</p>
        </div>
        
        <div class="feature-card">
          <h4>涨落增强</h4>
          <p>临界点附近涨落剧烈增强：</p><div class="formula-container">$$\langle (\Delta M)^2 \rangle \sim \xi^d$$</div>
          <p>涨落的空间尺度由关联长度决定。</p>
        </div>
        
        <div class="feature-card"> <h4>响应函数发散</h4><p>磁化率等响应函数在临界点发散：</p> <div class="formula-container">$$\chi \sim |t|^{-\gamma}$$</div>
          <p>系统对外场的响应变得极其敏感。</p>
        </div>
        
        <div class="feature-card"> <h4>临界慢化</h4><p>动力学过程变得极其缓慢：</p> <div class="formula-container">$$\tau \sim \xi^z$$</div><p>其中$z$是动力学临界指数。</p>
        </div>
      </div>
    </section>

    <!-- 幂律行为 -->
    <section class="content-section">
      <h2>2. 幂律行为的数学描述</h2>
      
      <div class="definition-box">
        <h4>幂律函数的一般形式</h4>
        <p>幂律函数具有以下形式：</p><div class="formula-container">$$f(x) = A x^{\alpha}$$</div><p>其中$A$ 是常数，$\alpha$是临界指数。</p>
      </div>

      <div class="power-law-demo">
        <h4>幂律行为的特征</h4>
        <div class="demo-grid">
          <div class="demo-item">
            <h5>线性标度</h5>
            <svg width="200" height="150" viewBox="0 0 200 150">
              <!-- 坐标轴 -->
              <line x1="30" y1="120" x2="170" y2="120" stroke="#333" stroke-width="1"/>
              <line x1="30" y1="120" x2="30" y2="20" stroke="#333" stroke-width="1"/>
              
              <!-- 幂律曲线 -->
              <path d="M 35 115 Q 60 80 90 60 Q 120 45 150 35 Q 165 30 165 30" 
                    stroke="#e74c3c" stroke-width="2" fill="none"/>
              
              <text x="100" y="140" text-anchor="middle" font-size="12">x</text>
              <text x="15" y="70" text-anchor="middle" font-size="12">f(x)</text>
              <text x="100" y="15" text-anchor="middle" font-size="10" fill="#e74c3c">
                非线性
              </text>
            </svg>
          </div>
          
          <div class="demo-item">
            <h5>对数标度</h5>
            <svg width="200" height="150" viewBox="0 0 200 150">
              <!-- 坐标轴 -->
              <line x1="30" y1="120" x2="170" y2="120" stroke="#333" stroke-width="1"/>
              <line x1="30" y1="120" x2="30" y2="20" stroke="#333" stroke-width="1"/>
              
              <!-- 对数标度下的直线 -->
              <line x1="35" y1="110" x2="165" y2="30" stroke="#27ae60" stroke-width="2"/>
              
              <text x="100" y="140" text-anchor="middle" font-size="12">ln x</text>
              <text x="15" y="70" text-anchor="middle" font-size="12">ln f(x)</text>
              <text x="100" y="15" text-anchor="middle" font-size="10" fill="#27ae60">
                直线，斜率=α
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div class="insight-box">
        <h4>为什么是幂律？</h4>
        <p>
          幂律行为的出现与标度不变性密切相关。在临界点附近，
          系统失去了特征长度尺度，唯一可能的函数形式就是幂律函数，
          因为只有幂律函数在标度变换下保持形式不变。
        </p>
      </div>
    </section>

    <!-- 临界指数 -->
    <section class="content-section">
      <h2>3. 临界指数的定义</h2>
      
      <div class="critical-exponents">
        <div class="exponent-category">
          <h4>热力学临界指数</h4>
          <div class="exponent-grid">
            <div class="exponent-card">
              <h5>比热指数 α</h5><div class="formula-container">$$C \sim |t|^{-\alpha}$$</div>
              <p>描述比热在临界点的发散行为</p>
            </div> <div class="exponent-card"><h5>序参量指数 β</h5> <div class="formula-container">$$M \sim |t|^{\beta} \quad (t &lt; 0)$$</div>
              <p>描述序参量随温度的变化</p>
            </div> <div class="exponent-card"><h5>磁化率指数 γ</h5> <div class="formula-container">$$\chi \sim |t|^{-\gamma}$$</div>
              <p>描述磁化率的发散行为</p>
            </div> <div class="exponent-card"><h5>关联长度指数 ν</h5> <div class="formula-container">$$\xi \sim |t|^{-\nu}$$</div>
              <p>描述关联长度的发散</p>
            </div>
          </div>
        </div>
        
        <div class="exponent-category">
          <h4>临界等温线指数</h4>
          <div class="exponent-grid"> <div class="exponent-card"><h5>临界等温线指数 δ</h5> <div class="formula-container">$$M \sim H^{1/\delta} \quad (t = 0)$$</div>
              <p>在临界温度下磁化强度与磁场的关系</p>
            </div> <div class="exponent-card"><h5>关联函数指数 η</h5> <div class="formula-container">$$G(r) \sim r^{-(d-2+\eta)} \quad (t = 0)$$</div>
              <p>临界点处关联函数的幂律衰减</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 标度关系 -->
    <section class="content-section">
      <h2>4. 标度关系（Scaling Relations）</h2>
      
      <div class="scaling-relations">
        <h4>基本标度关系</h4>
        <p>临界指数之间存在严格的数学关系：</p>
        
        <div class="relation-grid"> <div class="relation-card"><h5>Rushbrooke关系</h5> <div class="formula-container">$$\alpha + 2\beta + \gamma = 2$$</div>
          </div> <div class="relation-card"><h5>Widom关系</h5> <div class="formula-container">$$\gamma = \beta(\delta - 1)$$</div>
          </div> <div class="relation-card"><h5>Fisher关系</h5> <div class="formula-container">$$\gamma = \nu(2 - \eta)$$</div>
          </div> <div class="relation-card"><h5>Josephson关系</h5> <div class="formula-container">$$\nu d = 2 - \alpha$$</div>
          </div>
        </div>
        
        <div class="insight-box">
          <h4>标度关系的意义</h4>
          <p>
            这些关系表明，看似独立的6个临界指数实际上只有2个是独立的。
            这是标度理论的一个重要预言，也是重整化群理论的重要验证。
          </p>
        </div>
      </div>
    </section>

    <!-- 普适性 -->
    <section class="content-section">
      <h2>5. 普适性（Universality）</h2>
      
      <div class="universality-concept">
        <div class="definition-box">
          <h4>普适性的定义</h4>
          <p>
            具有相同对称性和相同空间维度的不同物理系统，
            在临界点附近表现出相同的临界指数。
            这种现象称为<strong>普适性</strong>。
          </p>
        </div>
        
        <div class="universality-examples">
          <h4>普适性类的例子</h4>
          
          <div class="universality-table">
            <table>
              <thead>
                <tr>
                  <th>普适性类</th>
                  <th>对称性</th>
                  <th>物理系统例子</th>
                  <th>临界指数 ν</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ising (d=2)</td>
                  <td>Z₂</td>
                  <td>2D Ising模型</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Ising (d=3)</td>
                  <td>Z₂</td>
                  <td>3D Ising模型, 液气相变</td>
                  <td>0.630</td>
                </tr>
                <tr>
                  <td>XY (d=3)</td>
                  <td>O(2)</td>
                  <td>超流相变, XY模型</td>
                  <td>0.672</td>
                </tr>
                <tr>
                  <td>Heisenberg (d=3)</td>
                  <td>O(3)</td>
                  <td>反铁磁相变</td>
                  <td>0.705</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="content-section">
      <h2>6. 实验验证</h2>
      
      <div class="experimental-evidence">
        <div class="experiment-grid">
          <div class="experiment-card">
            <h4>液气相变</h4>
            <div class="data-plot">
              <svg width="250" height="180" viewBox="0 0 250 180">
                <!-- 坐标轴 -->
                <line x1="40" y1="140" x2="210" y2="140" stroke="#333" stroke-width="1"/>
                <line x1="40" y1="140" x2="40" y2="30" stroke="#333" stroke-width="1"/>
                
                <!-- 理论曲线 -->
                <path d="M 45 135 Q 80 100 120 70 Q 160 45 200 25" 
                      stroke="#3498db" stroke-width="2" fill="none"/>
                
                <!-- 实验数据点 -->
                <circle cx="60" cy="110" r="3" fill="#e74c3c"/>
                <circle cx="90" cy="85" r="3" fill="#e74c3c"/>
                <circle cx="130" cy="60" r="3" fill="#e74c3c"/>
                <circle cx="170" cy="40" r="3" fill="#e74c3c"/>
                
                <text x="125" y="160" text-anchor="middle" font-size="12">|T-Tc|</text>
                <text x="20" y="85" text-anchor="middle" font-size="12">ρ</text>
                
                <text x="125" y="20" text-anchor="middle" font-size="10">
                  β ≈ 0.325 (理论)
                </text>
              </svg>
            </div>
            <p>CO₂的密度随温度变化，验证了β指数的理论预言。</p>
          </div>
          
          <div class="experiment-card">
            <h4>磁性相变</h4>
            <div class="data-plot">
              <svg width="250" height="180" viewBox="0 0 250 180">
                <!-- 坐标轴 -->
                <line x1="40" y1="140" x2="210" y2="140" stroke="#333" stroke-width="1"/>
                <line x1="40" y1="140" x2="40" y2="30" stroke="#333" stroke-width="1"/>
                
                <!-- 理论曲线 -->
                <path d="M 45 25 Q 80 40 120 70 Q 160 110 200 135" 
                      stroke="#27ae60" stroke-width="2" fill="none"/>
                
                <!-- 实验数据点 -->
                <circle cx="60" cy="35" r="3" fill="#f39c12"/>
                <circle cx="90" cy="55" r="3" fill="#f39c12"/>
                <circle cx="130" cy="85" r="3" fill="#f39c12"/>
                <circle cx="170" cy="120" r="3" fill="#f39c12"/>
                
                <text x="125" y="160" text-anchor="middle" font-size="12">|T-Tc|</text>
                <text x="20" y="85" text-anchor="middle" font-size="12">χ</text>
                
                <text x="125" y="20" text-anchor="middle" font-size="10">
                  γ ≈ 1.24 (理论)
                </text>
              </svg>
            </div>
            <p>铁磁材料的磁化率发散，验证了γ指数。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展 -->
    <section class="content-section">
      <h2>7. 现代发展与应用</h2>
      
      <div class="modern-applications">
        <div class="application-grid">
          <div class="application-card"> <h4>量子相变</h4><p>零温相变也表现出幂律行为：</p> <div class="formula-container">$$\xi \sim |g - g_c|^{-\nu}$$</div><p>其中$g$是量子调控参数。</p>
          </div>
          
          <div class="application-card">
            <h4>金融市场</h4>
            <p>股价波动也表现出幂律分布：</p><div class="formula-container">$$P(\Delta x) \sim |\Delta x|^{-\alpha}$$</div>
            <p>临界现象的概念被应用到经济学中。</p>
          </div>
          
          <div class="application-card"> <h4>生物系统</h4><p>神经网络的雪崩行为：</p> <div class="formula-container">$$P(s) \sim s^{-\tau}$$</div>
            <p>大脑可能工作在临界点附近。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul><li><strong>临界现象</strong>：关联长度发散、涨落增强、响应函数发散</li><li><strong>幂律行为</strong>：$f(x) \sim x^{\alpha}$，在对数坐标下呈直线</li>
          <li><strong>临界指数</strong>：α, β, γ, δ, ν, η 描述不同物理量的临界行为</li>
          <li><strong>标度关系</strong>：临界指数间存在严格的数学关系</li>
          <li><strong>普适性</strong>：相同对称性的系统有相同的临界指数</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考题</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么临界点附近的物理量表现出幂律行为而不是指数行为？</li>
          <li>利用标度关系，证明在二维Ising模型中，如果 ν = 1，那么 α = 0。</li>
          <li>为什么不同的物理系统会有相同的临界指数？</li>
          <li>在实验中如何精确测量临界指数？</li>
          <li>量子相变与经典相变在临界行为上有什么异同？</li>
        </ol>
      </div>
    </section>

    <!-- 进一步阅读 -->
    <section class="content-section">
      <h2>进一步阅读</h2>
      <div class="reading-list">
        <ul>
          <li>Stanley, H.E. "Introduction to Phase Transitions and Critical Phenomena" - Chapter 3</li>
          <li>Binney, J.J. et al. "The Theory of Critical Phenomena" - Chapter 2</li>
          <li>Cardy, J. "Scaling and Renormalization in Statistical Physics" - Chapter 2</li>
          <li>Yeomans, J.M. "Statistical Mechanics of Phase Transitions" - Chapter 4</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_1_2',
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
  background: linear-gradient(135deg, #ff7675 0%, #fd79a8 100%);
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
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.highlight-box {
  background: linear-gradient(135deg, #ff7675, #fd79a8);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.feature-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
}

.feature-card h4 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
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

.formula-container {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.power-law-demo {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-top: 20px;
}

.demo-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.demo-item h5 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.insight-box {
  background: #e8f5e8;
  border: 1px solid #c3e6c3;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.insight-box h4 {
  color: #155724;
  margin-bottom: 15px;
}

.critical-exponents {
  margin: 20px 0;
}

.exponent-category {
  margin-bottom: 40px;
}

.exponent-category h4 {
  color: #6c5ce7;
  margin-bottom: 20px;
  font-size: 1.4em;
}

.exponent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.exponent-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #6c5ce7;
}

.exponent-card h5 {
  color: #6c5ce7;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.scaling-relations {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.relation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.relation-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.relation-card h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.universality-concept {
  margin: 20px 0;
}

.universality-table {
  margin-top: 20px;
}

.universality-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.universality-table th,
.universality-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.universality-table th {
  background: #74b9ff;
  color: white;
  font-weight: 600;
}

.experimental-evidence {
  margin: 20px 0;
}

.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.experiment-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #00b894;
}

.experiment-card h4 {
  color: #00b894;
  margin-bottom: 15px;
}

.data-plot {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.modern-applications {
  margin: 20px 0;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.application-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #fdcb6e;
}

.application-card h4 {
  color: #fdcb6e;
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
  
  .demo-grid {
    grid-template-columns: 1fr;
  }
  
  .feature-grid,
  .exponent-grid,
  .relation-grid,
  .experiment-grid,
  .application-grid {
    grid-template-columns: 1fr;
  }
}
</style>