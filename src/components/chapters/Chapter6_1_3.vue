<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.1.3 关联长度与标度假设</h1>
      <p class="chapter-subtitle">关联长度发散和Widom标度假设</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：25分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解关联长度的物理意义</li>
        <li>掌握关联函数的定义和性质</li>
        <li>学习Widom标度假设的内容</li>
        <li>理解标度假设如何导出临界指数关系</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：关联长度的重要性</h2>
      <div class="highlight-box">
        <p>
          在临界点附近，系统中的粒子不再是独立的，而是通过长程关联相互影响。
          <strong>关联长度</strong>描述了这种关联的空间范围。
          当系统接近临界点时，关联长度趋于无穷，这是临界现象最重要的特征之一。
          <strong>Widom标度假设</strong>则为我们提供了理解这种行为的理论框架。
        </p>
      </div>
    </section>

    <!-- 关联函数 -->
    <section class="content-section">
      <h2>1. 关联函数的定义</h2>
      
      <div class="definition-box">
        <h4>关联函数</h4>
        <p>
          对于自旋系统，关联函数定义为：
        </p>
        <div class="formula-container">
          $$G(\mathbf{r}) = \langle S(\mathbf{0}) S(\mathbf{r}) \rangle - \langle S(\mathbf{0}) \rangle \langle S(\mathbf{r}) \rangle$$</div>
        <p>
          它描述了空间中两点自旋取向的关联程度。
        </p>
      </div>

      <div class="correlation-visualization">
        <h4>关联函数的物理图像</h4>
        <div class="visualization-grid">
          <div class="vis-item">
            <h5>高温相（T > Tc）</h5>
            <svg width="200" height="150" viewBox="0 0 200 150">
              <!-- 背景 -->
              <rect width="200" height="150" fill="#f8f9fa"/>
              
              <!-- 随机自旋 -->
              <g class="spins">
                <!-- 向上自旋 -->
                <polygon points="30,40 35,30 40,40" fill="#e74c3c"/>
                <polygon points="70,60 75,50 80,60" fill="#e74c3c"/>
                <polygon points="130,30 135,20 140,30" fill="#e74c3c"/>
                <polygon points="160,80 165,70 170,80" fill="#e74c3c"/>
                
                <!-- 向下自旋 -->
                <polygon points="50,30 55,40 60,30" fill="#3498db"/>
                <polygon points="90,50 95,60 100,50" fill="#3498db"/>
                <polygon points="110,70 115,80 120,70" fill="#3498db"/>
                <polygon points="150,40 155,50 160,40" fill="#3498db"/>
              </g>
              
              <text x="100" y="130" text-anchor="middle" font-size="12">
                短程关联
              </text>
            </svg>
          </div>
          
          <div class="vis-item">
            <h5>临界点（T = Tc）</h5>
            <svg width="200" height="150" viewBox="0 0 200 150">
              <!-- 背景 -->
              <rect width="200" height="150" fill="#f8f9fa"/>
              
              <!-- 关联的自旋团簇 -->
              <g class="spin-clusters">
                <!-- 大团簇1 -->
                <circle cx="60" cy="50" r="25" fill="#e74c3c" opacity="0.3"/>
                <polygon points="50,45 55,35 60,45" fill="#e74c3c"/>
                <polygon points="60,55 65,45 70,55" fill="#e74c3c"/>
                <polygon points="55,60 60,50 65,60" fill="#e74c3c"/>
                
                <!-- 大团簇2 -->
                <circle cx="140" cy="70" r="30" fill="#3498db" opacity="0.3"/>
                <polygon points="130,65 135,75 140,65" fill="#3498db"/>
                <polygon points="140,75 145,85 150,75" fill="#3498db"/>
                <polygon points="135,80 140,70 145,80" fill="#3498db"/>
                <polygon points="145,60 150,70 155,60" fill="#3498db"/>
              </g>
              
              <text x="100" y="130" text-anchor="middle" font-size="12">
                长程关联
              </text>
            </svg>
          </div>
          
          <div class="vis-item">
            <h5>低温相（T < Tc）</h5>
            <svg width="200" height="150" viewBox="0 0 200 150">
              <!-- 背景 -->
              <rect width="200" height="150" fill="#f8f9fa"/>
              
              <!-- 有序自旋 -->
              <g class="ordered-spins">
                <polygon points="30,40 35,30 40,40" fill="#e74c3c"/>
                <polygon points="50,40 55,30 60,40" fill="#e74c3c"/>
                <polygon points="70,40 75,30 80,40" fill="#e74c3c"/>
                <polygon points="90,40 95,30 100,40" fill="#e74c3c"/>
                <polygon points="110,40 115,30 120,40" fill="#e74c3c"/>
                <polygon points="130,40 135,30 140,40" fill="#e74c3c"/>
                <polygon points="150,40 155,30 160,40" fill="#e74c3c"/>
                <polygon points="170,40 175,30 180,40" fill="#e74c3c"/>
                
                <polygon points="30,70 35,60 40,70" fill="#e74c3c"/>
                <polygon points="50,70 55,60 60,70" fill="#e74c3c"/>
                <polygon points="70,70 75,60 80,70" fill="#e74c3c"/>
                <polygon points="90,70 95,60 100,70" fill="#e74c3c"/>
                <polygon points="110,70 115,60 120,70" fill="#e74c3c"/>
                <polygon points="130,70 135,60 140,70" fill="#e74c3c"/>
                <polygon points="150,70 155,60 160,70" fill="#e74c3c"/>
                <polygon points="170,70 175,60 180,70" fill="#e74c3c"/>
              </g>
              
              <text x="100" y="130" text-anchor="middle" font-size="12">
                完全关联
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 关联长度 -->
    <section class="content-section">
      <h2>2. 关联长度的定义</h2>
      
      <div class="correlation-length-concept">
        <div class="definition-box">
          <h4>关联长度的定义</h4><p>关联长度$\xi$通过关联函数的指数衰减定义：
          </p><div class="formula-container">$$G(r) \sim e^{-r/\xi} \quad \text{(大距离行为)}$$</div>
          <p>
            它表征了关联效应的空间范围。
          </p>
        </div>
        
        <div class="correlation-behavior">
          <h4>不同温度下的关联行为</h4>
          
          <div class="behavior-grid"> <div class="behavior-card"><h5>高温相 (T > Tc)</h5> <div class="formula-container">$$G(r) \sim e^{-r/\xi}$$$$\xi \sim (T - T_c)^{-\nu}$$</div>
              <p>指数衰减，关联长度有限</p>
            </div> <div class="behavior-card"><h5>临界点 (T = Tc)</h5> <div class="formula-container">$$G(r) \sim r^{-(d-2+\eta)}$$$$\xi \to \infty$$</div>
              <p>幂律衰减，关联长度发散</p>
            </div> <div class="behavior-card"><h5>低温相 (T < Tc)</h5> <div class="formula-container">$$G(r) \sim e^{-r/\xi}$$$$\xi \sim (T_c - T)^{-\nu}$$</div>
              <p>指数衰减，但有长程序</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 关联长度的测量 -->
    <section class="content-section">
      <h2>3. 关联长度的实验测量</h2>
      
      <div class="measurement-methods">
        <div class="method-grid"> <div class="method-card"><h4>中子散射</h4> <div class="formula-container">$$I(\mathbf{q}) = \int d^d\mathbf{r} \, G(\mathbf{r}) e^{i\mathbf{q} \cdot \mathbf{r}}$$</div>
            <p>通过测量散射强度的q依赖性来确定关联长度。</p>
            
            <div class="scattering-plot">
              <svg width="250" height="180" viewBox="0 0 250 180">
                <!-- 坐标轴 -->
                <line x1="40" y1="140" x2="210" y2="140" stroke="#333" stroke-width="1"/>
                <line x1="40" y1="140" x2="40" y2="30" stroke="#333" stroke-width="1"/>
                
                <!-- Lorentz峰 -->
                <path d="M 45 135 Q 60 120 80 90 Q 100 40 120 25 Q 140 40 160 90 Q 180 120 195 135" 
                      stroke="#e74c3c" stroke-width="2" fill="none"/>
                
                <!-- 半高宽标记 -->
                <line x1="80" y1="60" x2="160" y2="60" stroke="#3498db" stroke-width="2" stroke-dasharray="5,5"/>
                <text x="120" y="55" text-anchor="middle" font-size="10" fill="#3498db">
                  FWHM ∝ 1/ξ
                </text>
                
                <text x="125" y="160" text-anchor="middle" font-size="12">q</text>
                <text x="20" y="85" text-anchor="middle" font-size="12">I(q)</text>
              </svg>
            </div>
          </div> <div class="method-card"><h4>光散射</h4> <div class="formula-container">$$I(\theta) \propto \frac{1}{1 + q^2\xi^2}$$</div>
            <p>临界乳光现象：接近临界点时散射强度急剧增加。</p>
            
            <div class="critical-opalescence">
              <svg width="250" height="180" viewBox="0 0 250 180">
                <!-- 样品容器 -->
                <rect x="100" y="60" width="50" height="60" fill="#e8f4fd" stroke="#3498db" stroke-width="2"/>
                
                <!-- 入射光 -->
                <line x1="20" y1="90" x2="100" y2="90" stroke="#f39c12" stroke-width="3"/>
                <text x="60" y="85" text-anchor="middle" font-size="10">入射光</text>
                
                <!-- 散射光 -->
                <line x1="125" y1="60" x2="180" y2="20" stroke="#e74c3c" stroke-width="2"/>
                <line x1="125" y1="75" x2="200" y2="40" stroke="#e74c3c" stroke-width="2"/>
                <line x1="125" y1="90" x2="210" y2="90" stroke="#e74c3c" stroke-width="2"/>
                <line x1="125" y1="105" x2="200" y2="140" stroke="#e74c3c" stroke-width="2"/>
                <line x1="125" y1="120" x2="180" y2="160" stroke="#e74c3c" stroke-width="2"/>
                
                <text x="125" y="150" text-anchor="middle" font-size="10">临界乳光</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Widom标度假设 -->
    <section class="content-section">
      <h2>4. Widom标度假设</h2>
      
      <div class="widom-hypothesis">
        <div class="definition-box">
          <h4>Widom标度假设的表述</h4>
          <p> 在临界点附近，自由能密度具有以下标度形式：</p> <div class="formula-container">$$f(t, h) = |t|^{2-\alpha} \tilde{f}\left(\frac{h}{|t|^{\Delta}}\right)$$</div><p>其中$t = (T-T_c)/T_c$，$h$ 是外场，$\Delta = \beta + \gamma$是间隙指数。
          </p>
        </div>
        
        <div class="scaling-function"><h4>标度函数的性质</h4><p>标度函数$\tilde{f}(x)$在不同区域有不同的渐近行为：</p>
          
          <div class="asymptotic-behavior">
            <div class="behavior-item">
              <h5>小参数区域 (x → 0)</h5><div class="formula-container">$$\tilde{f}(x) \to \text{常数}$$</div><p>对应于$h = 0$的临界行为</p>
            </div>
            
            <div class="behavior-item">
              <h5>大参数区域 (x → ∞)</h5><div class="formula-container">$$\tilde{f}(x) \sim x^{1/\delta}$$</div><p>对应于$t = 0$的临界等温线</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 标度关系的推导 -->
    <section class="content-section">
      <h2>5. 从标度假设推导临界指数关系</h2>
      
      <div class="derivation-steps">
        <div class="step-card">
          <h4>步骤1：磁化强度的标度形式</h4>
          <p>从自由能密度求导得到磁化强度：</p><div class="formula-container">$$M = -\frac{\partial f}{\partial h} = |t|^{\beta} \tilde{M}\left(\frac{h}{|t|^{\Delta}}\right)$$</div><p>其中$\beta = 2 - \alpha - \Delta$</p>
        </div>
        
        <div class="step-card">
          <h4>步骤2：磁化率的标度形式</h4>
          <p>对磁化强度再次求导：</p><div class="formula-container">$$\chi = \frac{\partial M}{\partial h} = |t|^{-\gamma} \tilde{\chi}\left(\frac{h}{|t|^{\Delta}}\right)$$</div><p>其中$\gamma = \Delta - \beta$</p>
        </div>
        
        <div class="step-card"><h4>步骤3：临界等温线</h4><p>在$t = 0$时：</p><div class="formula-container">$$M \sim h^{1/\delta}$$</div><p>比较系数得到：$\delta = \Delta/\beta$</p>
        </div>
        
        <div class="step-card">
          <h4>步骤4：Widom关系</h4>
          <p>结合上述结果：</p><div class="formula-container">$$\gamma = \beta(\delta - 1)$$</div>
          <p>这就是著名的Widom标度关系！</p>
        </div>
      </div>
    </section>

    <!-- 标度假设的验证 -->
    <section class="content-section">
      <h2>6. 标度假设的实验验证</h2>
      
      <div class="experimental-verification">
        <div class="verification-grid">
          <div class="verification-card"> <h4>数据坍缩（Data Collapse）</h4><p>将不同温度的数据按标度形式重新标度：</p> <div class="formula-container">$$\frac{M}{|t|^{\beta}} = \tilde{M}\left(\frac{h}{|t|^{\Delta}}\right)$$</div>
            
            <div class="data-collapse-plot">
              <svg width="300" height="200" viewBox="0 0 300 200">
                <!-- 坐标轴 -->
                <line x1="50" y1="150" x2="250" y2="150" stroke="#333" stroke-width="1"/>
                <line x1="50" y1="150" x2="50" y2="30" stroke="#333" stroke-width="1"/>
                
                <!-- 不同温度的数据点 -->
                <g class="data-points">
                  <!-- T1 数据 -->
                  <circle cx="80" cy="130" r="3" fill="#e74c3c"/>
                  <circle cx="100" cy="110" r="3" fill="#e74c3c"/>
                  <circle cx="120" cy="90" r="3" fill="#e74c3c"/>
                  <circle cx="140" cy="75" r="3" fill="#e74c3c"/>
                  
                  <!-- T2 数据 -->
                  <circle cx="85" cy="125" r="3" fill="#3498db"/>
                  <circle cx="105" cy="105" r="3" fill="#3498db"/>
                  <circle cx="125" cy="85" r="3" fill="#3498db"/>
                  <circle cx="145" cy="70" r="3" fill="#3498db"/>
                  
                  <!-- T3 数据 -->
                  <circle cx="90" cy="120" r="3" fill="#27ae60"/>
                  <circle cx="110" cy="100" r="3" fill="#27ae60"/>
                  <circle cx="130" cy="80" r="3" fill="#27ae60"/>
                  <circle cx="150" cy="65" r="3" fill="#27ae60"/>
                </g>
                
                <!-- 标度曲线 -->
                <path d="M 75 135 Q 110 100 150 60" stroke="#2c3e50" stroke-width="2" fill="none"/>
                
                <text x="150" y="175" text-anchor="middle" font-size="12">h/|t|^Δ</text>
                <text x="25" y="90" text-anchor="middle" font-size="12">M/|t|^β</text>
                
                <text x="200" y="50" font-size="10" fill="#e74c3c">T₁</text>
                <text x="200" y="65" font-size="10" fill="#3498db">T₂</text>
                <text x="200" y="80" font-size="10" fill="#27ae60">T₃</text>
              </svg>
            </div>
            <p>所有数据坍缩到同一条曲线上，验证了标度假设。</p>
          </div>
          
          <div class="verification-card">
            <h4>临界指数的一致性</h4>
            <p>通过不同方法测量的临界指数应该满足标度关系：</p>
            
            <div class="consistency-table">
              <table>
                <thead>
                  <tr>
                    <th>关系式</th>
                    <th>3D Ising理论值</th>
                    <th>实验值</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>γ = β(δ-1)</td>
                    <td>1.24</td>
                    <td>1.25 ± 0.02</td>
                  </tr>
                  <tr>
                    <td>α + 2β + γ = 2</td>
                    <td>2.00</td>
                    <td>1.99 ± 0.01</td>
                  </tr>
                  <tr>
                    <td>γ = ν(2-η)</td>
                    <td>1.24</td>
                    <td>1.24 ± 0.01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 广义标度假设 -->
    <section class="content-section">
      <h2>7. 广义标度假设</h2>
      
      <div class="generalized-scaling">
        <div class="finite-size-scaling"> <h4>有限尺寸标度</h4><p>对于有限尺寸系统，标度假设需要修正：</p> <div class="formula-container">$$f(t, h, L) = L^{-d} \tilde{f}(tL^{1/\nu}, hL^{\Delta/\nu}, 1)$$</div><p>其中$L$是系统尺寸。</p>
        </div>
        
        <div class="dynamic-scaling">
          <h4>动力学标度</h4>
          <p>包含时间维度的标度假设：</p><div class="formula-container">$$G(\mathbf{r}, t) = r^{-(d-2+\eta)} \tilde{G}(t/r^z)$$</div><p>其中$z$是动力学临界指数。</p>
        </div>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box"><ul><li><strong>关联函数</strong>：$G(\mathbf{r}) = \langle S(\mathbf{0}) S(\mathbf{r}) \rangle - \langle S(\mathbf{0}) \rangle \langle S(\mathbf{r}) \rangle$</li><li><strong>关联长度</strong>：$\xi \sim |t|^{-\nu}$，在临界点发散</li><li><strong>Widom标度假设</strong>：$f(t, h) = |t|^{2-\alpha} \tilde{f}(h/|t|^{\Delta})$</li>
          <li><strong>标度关系</strong>：从标度假设可推导出所有临界指数关系</li>
          <li><strong>实验验证</strong>：数据坍缩和指数一致性验证了标度假设</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考题</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么关联长度在临界点发散？这与标度不变性有什么关系？</li>
          <li>从Widom标度假设出发，推导Rushbrooke关系 α + 2β + γ = 2。</li>
          <li>在有限尺寸系统中，关联长度不能超过系统尺寸。这如何影响临界行为？</li>
          <li>为什么数据坍缩是验证标度假设的有效方法？</li>
          <li>动力学标度假设如何解释临界慢化现象？</li>
        </ol>
      </div>
    </section>

    <!-- 进一步阅读 -->
    <section class="content-section">
      <h2>进一步阅读</h2>
      <div class="reading-list">
        <ul>
          <li>Widom, B. "Equation of State in the Neighborhood of the Critical Point" - 原始论文</li>
          <li>Fisher, M.E. "The Theory of Equilibrium Critical Phenomena" - 经典综述</li>
          <li>Privman, V. "Finite Size Scaling and Numerical Simulation of Statistical Systems"</li>
          <li>Hohenberg, P.C. & Halperin, B.I. "Theory of Dynamic Critical Phenomena"</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_1_3',
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
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
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
  border-bottom: 3px solid #00b894;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.highlight-box {
  background: linear-gradient(135deg, #00b894, #00cec9);
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

.formula-container {
  text-align: center;
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.correlation-visualization {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.visualization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.vis-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.vis-item h5 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.correlation-length-concept {
  margin: 20px 0;
}

.behavior-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.behavior-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #00b894;
}

.behavior-card h5 {
  color: #00b894;
  margin-bottom: 15px;
}

.measurement-methods {
  margin: 20px 0;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.method-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #6c5ce7;
}

.method-card h4 {
  color: #6c5ce7;
  margin-bottom: 15px;
}

.scattering-plot,
.critical-opalescence {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.widom-hypothesis {
  margin: 20px 0;
}

.scaling-function {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.asymptotic-behavior {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 20px;
}

.behavior-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.behavior-item h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.derivation-steps {
  margin: 20px 0;
}

.step-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #e17055;
}

.step-card h4 {
  color: #e17055;
  margin-bottom: 15px;
}

.experimental-verification {
  margin: 20px 0;
}

.verification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.verification-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #fd79a8;
}

.verification-card h4 {
  color: #fd79a8;
  margin-bottom: 15px;
}

.data-collapse-plot {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.consistency-table {
  margin-top: 20px;
}

.consistency-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.consistency-table th,
.consistency-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.consistency-table th {
  background: #fd79a8;
  color: white;
  font-weight: 600;
}

.generalized-scaling {
  margin: 20px 0;
}

.finite-size-scaling,
.dynamic-scaling {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
}

.finite-size-scaling h4,
.dynamic-scaling h4 {
  color: #2d3436;
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
  
  .visualization-grid,
  .behavior-grid,
  .method-grid,
  .asymptotic-behavior,
  .verification-grid {
    grid-template-columns: 1fr;
  }
}
</style>