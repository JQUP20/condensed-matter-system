<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.2.2 重整化群方程与β函数</h1>
      <p class="chapter-subtitle">从微分方程到临界行为的定量描述</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：35分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解重整化群方程的推导和物理意义</li>
        <li>掌握β函数的定义和性质</li>
        <li>学习如何从β函数确定不动点</li>
        <li>理解γ函数和异常维度的概念</li>
        <li>掌握临界指数的计算方法</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：从离散到连续</h2>
      <div class="highlight-box">
        <p>
          在前面的学习中，我们了解了重整化群变换的基本思想。
          现在我们要将这种离散的变换转化为<strong>连续的微分方程</strong>——重整化群方程。
          这种连续化的处理不仅在数学上更加优雅，而且能够提供对临界行为的精确定量描述。
          <strong>β函数</strong>是这个理论的核心，它描述了耦合常数在重整化过程中的流动规律。
        </p>
      </div>
    </section>

    <!-- 重整化群方程的推导 -->
    <section class="content-section">
      <h2>1. 重整化群方程的推导</h2>
      
      <div class="rg-equation-derivation">
        <div class="derivation-concept">
          <h4>基本思想</h4>
          <p>
            考虑物理量在不同长度尺度下的行为。如果我们改变观察尺度，
            物理本质应该保持不变。这种<strong>标度不变性</strong>导致了重整化群方程。
          </p>
        </div>
        
        <div class="derivation-steps">
          <div class="step-card">
            <h5>步骤1：标度变换</h5>
            <p>考虑关联函数在标度变换下的行为：</p>
            <div class="formula-container">
              $$G(\mathbf{r}, m, g) = b^{-2\Delta_G} G(b\mathbf{r}, m', g')$$</div><p>其中$b$ 是标度因子，$\Delta_G$是关联函数的标度维度。</p>
          </div>
          
          <div class="step-card"><h5>步骤2：无穷小变换</h5><p>考虑无穷小标度变换$b = 1 + \delta l$：</p><div class="formula-container">$$\frac{\partial G}{\partial l} + \mathbf{r} \cdot \nabla_{\mathbf{r}} G + \beta(g) \frac{\partial G}{\partial g} + \gamma_m(g) m \frac{\partial G}{\partial m} = -\gamma_G(g) G$$</div>
            <p>这就是重整化群方程！</p>
          </div>
          
          <div class="step-card"> <h5>步骤3：β函数的定义</h5><p>β函数描述耦合常数的流动：</p> <div class="formula-container">$$\beta(g) = \frac{dg}{dl} = \lim_{b \to 1} \frac{g'(b) - g}{\ln b}$$</div>
            <p>它是重整化群理论的核心函数。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- β函数的性质 -->
    <section class="content-section">
      <h2>2. β函数的性质与计算</h2>
      
      <div class="beta-function-properties">
        <div class="definition-box">
          <h4>β函数的物理意义</h4><p>β函数$\beta(g)$ 描述了耦合常数 $g$在重整化过程中的变化率：
          </p><ul><li>$\beta(g) > 0$：耦合常数增加（流向强耦合）</li><li>$\beta(g) < 0$：耦合常数减少（流向弱耦合）</li><li>$\beta(g) = 0$：不动点，耦合常数不变</li>
          </ul>
        </div>
        
        <div class="beta-function-examples">
          <h4>典型β函数的形式</h4>
          
          <div class="example-grid">
            <div class="example-card">
              <h5>φ⁴理论（上临界维度以上）</h5><div class="formula-container">$$\beta(g) = -\epsilon g + \frac{3g^2}{(4\pi)^2} + O(g^3)$$</div><p>其中$\epsilon = 4 - d$是维度参数。</p>
              
              <div class="beta-plot">
                <svg width="300" height="200" viewBox="0 0 300 200">
                  <!-- 坐标轴 -->
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#333" stroke-width="1"/>
                  <line x1="50" y1="150" x2="50" y2="50" stroke="#333" stroke-width="1"/>
                  
                  <!-- β函数曲线 -->
                  <path d="M 50 150 Q 100 140 150 100 Q 200 60 250 30" 
                        stroke="#e74c3c" stroke-width="3" fill="none"/>
                  
                  <!-- 不动点 -->
                  <circle cx="120" cy="120" r="4" fill="#2d3436"/>
                  <text x="125" y="115" font-size="10">g*</text>
                  
                  <!-- 零线 -->
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
                  
                  <!-- 标签 -->
                  <text x="150" y="175" text-anchor="middle" font-size="12">g</text>
                  <text x="30" y="100" text-anchor="middle" font-size="12">β(g)</text>
                  
                  <!-- 流动箭头 -->
                  <path d="M 80 145 L 110 145" stroke="#3498db" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
                  <path d="M 180 145 L 150 145" stroke="#3498db" stroke-width="2" marker-end="url(#arrowhead-blue)"/>
                  
                  <defs>
                    <marker id="arrowhead-blue" markerWidth="8" markerHeight="6" 
                            refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#3498db"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div class="example-card">
              <h5>非线性σ模型</h5><div class="formula-container">$$\beta(g) = -\epsilon g + \frac{g^2}{2\pi} + O(g^3)$$</div><p>其中$\epsilon = d - 2$。</p>
              
              <div class="beta-plot">
                <svg width="300" height="200" viewBox="0 0 300 200">
                  <!-- 坐标轴 -->
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#333" stroke-width="1"/>
                  <line x1="50" y1="150" x2="50" y2="50" stroke="#333" stroke-width="1"/>
                  
                  <!-- β函数曲线 -->
                  <path d="M 50 150 Q 120 130 180 80 Q 220 50 250 30" 
                        stroke="#00b894" stroke-width="3" fill="none"/>
                  
                  <!-- 不动点 -->
                  <circle cx="160" cy="100" r="4" fill="#2d3436"/>
                  <text x="165" y="95" font-size="10">g*</text>
                  
                  <!-- 零线 -->
                  <line x1="50" y1="150" x2="250" y2="150" stroke="#666" stroke-width="1" stroke-dasharray="3,3"/>
                  
                  <!-- 标签 -->
                  <text x="150" y="175" text-anchor="middle" font-size="12">g</text>
                  <text x="30" y="100" text-anchor="middle" font-size="12">β(g)</text>
                  
                  <!-- 流动箭头 -->
                  <path d="M 100 145 L 150 145" stroke="#fd79a8" stroke-width="2" marker-end="url(#arrowhead-pink)"/>
                  <path d="M 220 145 L 170 145" stroke="#fd79a8" stroke-width="2" marker-end="url(#arrowhead-pink)"/>
                  
                  <defs>
                    <marker id="arrowhead-pink" markerWidth="8" markerHeight="6" 
                            refX="7" refY="3" orient="auto">
                      <polygon points="0 0, 8 3, 0 6" fill="#fd79a8"/>
                    </marker>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 不动点分析 -->
    <section class="content-section">
      <h2>3. 不动点的分类与稳定性</h2>
      
      <div class="fixed-point-analysis">
        <div class="fp-classification">
          <h4>不动点的寻找</h4><p>不动点由方程$\beta(g^*) = 0$ 确定。根据 $\beta'(g^*)$的符号，
            我们可以判断不动点的稳定性：
          </p>
          
          <div class="stability-analysis">
            <div class="stability-grid">
              <div class="stability-card">
                <h5>稳定不动点</h5><div class="formula-container">$$\beta'(g^*) &lt; 0$$</div>
                <p>吸引不动点，对应红外稳定</p>
                <div class="stability-diagram">
                  <svg width="150" height="100" viewBox="0 0 150 100">
                    <circle cx="75" cy="50" r="3" fill="#27ae60"/>
                    <path d="M 30 50 L 65 50" stroke="#27ae60" stroke-width="2" marker-end="url(#arrow-green)"/>
                    <path d="M 120 50 L 85 50" stroke="#27ae60" stroke-width="2" marker-end="url(#arrow-green)"/>
                    <text x="75" y="80" text-anchor="middle" font-size="10">IR稳定</text>
                    
                    <defs>
                      <marker id="arrow-green" markerWidth="6" markerHeight="4" 
                              refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#27ae60"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div> <div class="stability-card"><h5>不稳定不动点</h5> <div class="formula-container">$$\beta'(g^*) > 0$$</div>
                <p>排斥不动点，对应紫外稳定</p>
                <div class="stability-diagram">
                  <svg width="150" height="100" viewBox="0 0 150 100">
                    <circle cx="75" cy="50" r="3" fill="#e74c3c"/>
                    <path d="M 65 50 L 30 50" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrow-red)"/>
                    <path d="M 85 50 L 120 50" stroke="#e74c3c" stroke-width="2" marker-end="url(#arrow-red)"/>
                    <text x="75" y="80" text-anchor="middle" font-size="10">UV稳定</text>
                    
                    <defs>
                      <marker id="arrow-red" markerWidth="6" markerHeight="4" 
                              refX="5" refY="2" orient="auto">
                        <polygon points="0 0, 6 2, 0 4" fill="#e74c3c"/>
                      </marker>
                    </defs>
                  </svg>
                </div>
              </div> <div class="stability-card"><h5>边际不动点</h5> <div class="formula-container">$$\beta'(g^*) = 0$$</div>
                <p>需要高阶分析确定稳定性</p>
                <div class="stability-diagram">
                  <svg width="150" height="100" viewBox="0 0 150 100">
                    <circle cx="75" cy="50" r="3" fill="#f39c12"/>
                    <circle cx="60" cy="50" r="1" fill="#f39c12"/>
                    <circle cx="90" cy="50" r="1" fill="#f39c12"/>
                    <text x="75" y="80" text-anchor="middle" font-size="10">边际</text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="fp-examples">
          <h4>具体例子：φ⁴理论</h4><p>考虑$\beta(g) = -\epsilon g + ag^2$，其中 $a > 0$：
          </p>
          
          <div class="example-analysis">
            <div class="fp-solutions">
              <h5>不动点解</h5><div class="formula-container">$$g_1^* = 0, \quad g_2^* = \frac{\epsilon}{a}$$</div>
            </div> <div class="stability-check"><h5>稳定性分析</h5> <div class="formula-container">$$\beta'(g) = -\epsilon + 2ag$$</div><ul><li>$g_1^* = 0$: $\beta'(0) = -\epsilon$<span class="stability-result">($\epsilon > 0$ 时稳定，$\epsilon &lt; 0$时不稳定)
                  </span></li><li>$g_2^* = \epsilon/a$: $\beta'(\epsilon/a) = \epsilon$<span class="stability-result">($\epsilon > 0$ 时不稳定，$\epsilon &lt; 0$时稳定)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- γ函数和异常维度 -->
    <section class="content-section">
      <h2>4. γ函数与异常维度</h2>
      
      <div class="gamma-function">
        <div class="definition-box">
          <h4>γ函数的定义</h4>
          <p>
            γ函数描述场的异常标度行为：
          </p><div class="formula-container">$$\gamma_\phi(g) = \frac{d \ln Z_\phi}{dl}$$</div><p>其中$Z_\phi$是场的重整化常数。异常维度定义为：
          </p><div class="formula-container">$$\eta = \gamma_\phi(g^*)$$</div>
        </div>
        
        <div class="anomalous-dimension">
          <h4>异常维度的物理意义</h4>
          <p>
            异常维度修正了场的经典标度行为：
          </p>
          
          <div class="dimension-comparison">
            <div class="comparison-grid"> <div class="comparison-card"><h5>经典标度</h5> <div class="formula-container">$$[\phi] = \frac{d-2}{2}$$</div>
                <p>基于量纲分析的结果</p>
              </div> <div class="comparison-card"><h5>量子修正</h5> <div class="formula-container">$$[\phi]_{\text{eff}} = \frac{d-2+\eta}{2}$$</div>
                <p>包含相互作用效应</p>
              </div>
            </div>
          </div>
          
          <div class="eta-calculation">
            <h4>η的计算示例</h4>
            <p> 对于φ⁴理论，一圈计算给出：</p> <div class="formula-container">$$\eta = \frac{g^*}{24\pi^2} + O((g^*)^2)$$</div><p>在$d = 4 - \epsilon$ 维度下，$g^* = \epsilon \cdot \frac{6}{N+8}$，因此：
            </p><div class="formula-container">$$\eta = \frac{\epsilon^2}{4(N+8)^2} + O(\epsilon^3)$$</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 临界指数的计算 -->
    <section class="content-section">
      <h2>5. 临界指数的RG计算</h2>
      
      <div class="critical-exponents-calculation">
        <div class="exponent-derivation">
          <h4>从β函数到临界指数</h4>
          <p>
            临界指数可以通过不动点处的β函数导数计算：
          </p>
          
          <div class="exponent-formulas">
            <div class="formula-grid"> <div class="formula-card"><h5>关联长度指数 ν</h5> <div class="formula-container">$$\nu = \frac{1}{\beta'(g^*)}$$</div>
                <p>描述关联长度的发散</p>
              </div> <div class="formula-card"><h5>异常维度 η</h5> <div class="formula-container">$$\eta = \gamma_\phi(g^*)$$</div>
                <p>修正关联函数的幂律行为</p>
              </div> <div class="formula-card"><h5>其他指数</h5> <div class="formula-container">$$\gamma = \nu(2-\eta)$$$$\beta = \frac{\nu(d-2+\eta)}{2}$$</div>
                <p>通过标度关系确定</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="calculation-example">
          <h4>具体计算：3D Ising模型</h4><p>对于3D Ising模型（$N=1$ 的φ⁴理论），在 $\epsilon = 1$时：
          </p>
          
          <div class="ising-calculation">
            <div class="step-by-step">
              <div class="calc-step">
                <h5>步骤1：确定不动点</h5><div class="formula-container">$$g^* = \frac{6\epsilon}{N+8} = \frac{6}{9} = \frac{2}{3}$$</div>
              </div> <div class="calc-step"><h5>步骤2：计算β函数导数</h5> <div class="formula-container">$$\beta'(g^*) = -\epsilon + \frac{6g^*}{(4\pi)^2} = -1 + \frac{4}{(4\pi)^2} \approx -0.975$$</div>
              </div> <div class="calc-step"><h5>步骤3：计算临界指数</h5> <div class="formula-container">$$\nu = \frac{1}{|\beta'(g^*)|} \approx 1.026$$</div> <div class="formula-container">$$\eta = \frac{g^*}{24\pi^2} \approx 0.0028$$</div>
              </div> <div class="calc-step"><h5>步骤4：其他指数</h5> <div class="formula-container">$$\gamma = \nu(2-\eta) \approx 2.05$$</div> <div class="formula-container">$$\beta = \frac{\nu(d-2+\eta)}{2} \approx 0.51$$</div>
              </div>
            </div>
            
            <div class="comparison-table">
              <h5>与实验值比较</h5>
              <table>
                <thead>
                  <tr>
                    <th>指数</th>
                    <th>一圈RG</th>
                    <th>实验值</th>
                    <th>精确值</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ν</td>
                    <td>1.026</td>
                    <td>0.630</td>
                    <td>0.6301</td>
                  </tr>
                  <tr>
                    <td>η</td>
                    <td>0.003</td>
                    <td>0.036</td>
                    <td>0.0364</td>
                  </tr>
                  <tr>
                    <td>γ</td>
                    <td>2.05</td>
                    <td>1.24</td>
                    <td>1.2372</td>
                  </tr>
                  <tr>
                    <td>β</td>
                    <td>0.51</td>
                    <td>0.325</td>
                    <td>0.3265</td>
                  </tr>
                </tbody>
              </table>
              <p class="table-note">
                一圈近似的精度有限，需要高阶计算才能获得精确结果。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- RG方程的解 -->
    <section class="content-section">
      <h2>6. 重整化群方程的解</h2>
      
      <div class="rg-solution">
        <div class="solution-method">
          <h4>特征线方法</h4>
          <p> 重整化群方程可以通过特征线方法求解：</p> <div class="formula-container">$$\frac{dg}{dl} = \beta(g), \quad \frac{dm}{dl} = \gamma_m(g) m$$</div>
          
          <div class="characteristic-curves">
            <h5>特征曲线的物理意义</h5>
            <svg width="400" height="300" viewBox="0 0 400 300">
              <!-- 坐标轴 -->
              <line x1="50" y1="250" x2="350" y2="250" stroke="#333" stroke-width="2"/>
              <line x1="50" y1="250" x2="50" y2="50" stroke="#333" stroke-width="2"/>
              
              <!-- 不动点 -->
              <circle cx="200" cy="150" r="5" fill="#e74c3c"/>
              <text x="205" y="145" font-size="12" font-weight="bold">g*</text>
              
              <!-- 特征线 -->
              <g class="characteristic-lines" stroke="#3498db" stroke-width="2" fill="none">
                <path d="M 80 200 Q 140 175 200 150"/>
                <path d="M 80 100 Q 140 125 200 150"/>
                <path d="M 320 200 Q 260 175 200 150"/>
                <path d="M 320 100 Q 260 125 200 150"/>
                <path d="M 200 80 L 200 140"/>
                <path d="M 200 220 L 200 160"/>
              </g>
              
              <!-- 流动方向箭头 -->
              <g class="flow-arrows" fill="#3498db">
                <polygon points="190,145 200,150 190,155" transform="rotate(-30 195 150)"/>
                <polygon points="190,145 200,150 190,155" transform="rotate(30 205 150)"/>
                <polygon points="190,145 200,150 190,155" transform="rotate(150 195 150)"/>
                <polygon points="190,145 200,150 190,155" transform="rotate(-150 205 150)"/>
                <polygon points="195,145 200,140 205,145"/>
                <polygon points="195,155 200,160 205,155"/>
              </g>
              
              <!-- 标签 -->
              <text x="200" y="280" text-anchor="middle" font-size="14">耦合常数 g</text>
              <text x="20" y="150" text-anchor="middle" font-size="14" transform="rotate(-90 20 150)">质量 m</text>
              
              <!-- 区域标签 -->
              <text x="120" y="120" font-size="12" fill="#27ae60">弱耦合区</text>
              <text x="280" y="120" font-size="12" fill="#e74c3c">强耦合区</text>
            </svg>
          </div>
        </div>
        
        <div class="scaling-solution">
          <h4>标度解的形式</h4>
          <p> 在临界区域，解具有标度形式：</p> <div class="formula-container">$$G(r, m) = r^{-(d-2+\eta)} \mathcal{G}(mr^{1/\nu})$$</div><p>其中$\mathcal{G}(x)$是标度函数，具有以下渐近行为：
          </p>
          
          <div class="asymptotic-behavior">
            <div class="behavior-grid">
              <div class="behavior-card">
                <h5>短距离 (x ≪ 1)</h5><div class="formula-container">$$\mathcal{G}(x) \to \text{常数}$$</div>
                <p>临界行为主导</p>
              </div> <div class="behavior-card"><h5>长距离 (x ≫ 1)</h5> <div class="formula-container">$$\mathcal{G}(x) \sim e^{-x}$$</div>
                <p>指数截断，关联长度有限</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box"><ul><li><strong>重整化群方程</strong>：$\frac{\partial G}{\partial l} + \mathbf{r} \cdot \nabla G + \beta(g) \frac{\partial G}{\partial g} + \gamma_m m \frac{\partial G}{\partial m} = -\gamma_G G$</li><li><strong>β函数</strong>：$\beta(g) = \frac{dg}{dl}$，描述耦合常数的流动</li><li><strong>不动点</strong>：$\beta(g^*) = 0$，稳定性由 $\beta'(g^*)$决定</li><li><strong>临界指数</strong>：$\nu = 1/\beta'(g^*)$，$\eta = \gamma_\phi(g^*)$</li>
          <li><strong>标度解</strong>：通过特征线方法求解，给出标度函数</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考题</h2>
      <div class="exercise-box">
        <ol>
          <li>从物理角度解释为什么β函数的零点对应不动点？</li>
          <li>为什么临界不动点通常是不稳定的，但却决定了临界行为？</li><li>异常维度η如何修正经典的标度行为？给出具体例子。</li><li>推导Widom标度关系$\gamma = \beta(\delta - 1)$与RG结果的一致性。</li>
          <li>为什么一圈近似的结果与实验值有较大偏差？如何改进？</li>
        </ol>
      </div>
    </section>

    <!-- 进一步阅读 -->
    <section class="content-section">
      <h2>进一步阅读</h2>
      <div class="reading-list">
        <ul>
          <li>Wilson, K.G. & Kogut, J. "The Renormalization Group and the ε Expansion"</li>
          <li>Zinn-Justin, J. "Quantum Field Theory and Critical Phenomena"</li>
          <li>Cardy, J. "Scaling and Renormalization in Statistical Physics"</li>
          <li>Peskin, M.E. & Schroeder, D.V. "An Introduction to Quantum Field Theory"</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_2_2',
  mounted() {
    // 确保 KaTeX 渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {delimiters: [{left: '$$', right: '$$', display: true},{left: '$', right: '$', display: false}
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
  background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
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
  border-bottom: 3px solid #fd79a8;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.highlight-box {
  background: linear-gradient(135deg, #fd79a8, #fdcb6e);
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

.rg-equation-derivation {
  margin: 20px 0;
}

.derivation-concept {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
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
  border-left: 5px solid #fd79a8;
}

.step-card h5 {
  color: #fd79a8;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.beta-function-properties {
  margin: 20px 0;
}

.beta-function-examples {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 20px 0;
}

.example-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e17055;
}

.example-card h5 {
  color: #e17055;
  margin-bottom: 15px;
}

.beta-plot {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.fixed-point-analysis {
  margin: 20px 0;
}

.fp-classification {
  margin-bottom: 20px;
}

.stability-analysis {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.stability-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.stability-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.stability-card h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.stability-diagram {
  display: flex;
  justify-content: center;
  margin: 15px 0;
}

.fp-examples {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.example-analysis {
  margin: 20px 0;
}

.fp-solutions,
.stability-check {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.fp-solutions h5,
.stability-check h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.stability-result {
  color: #666;
  font-style: italic;
}

.gamma-function {
  margin: 20px 0;
}

.anomalous-dimension {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.dimension-comparison {
  margin: 20px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.comparison-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.comparison-card h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.eta-calculation {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.eta-calculation h4 {
  color: #2d3436;
  margin-bottom: 15px;
}

.critical-exponents-calculation {
  margin: 20px 0;
}

.exponent-derivation {
  margin-bottom: 20px;
}

.exponent-formulas {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.formula-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.formula-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.formula-card h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.calculation-example {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.ising-calculation {
  margin: 20px 0;
}

.step-by-step {
  margin-bottom: 30px;
}

.calc-step {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #00b894;
}

.calc-step h5 {
  color: #00b894;
  margin-bottom: 15px;
}

.comparison-table {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.comparison-table h5 {
  color: #2d3436;
  margin-bottom: 15px;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 15px;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.comparison-table th {
  background: #00b894;
  color: white;
  font-weight: 600;
}

.table-note {
  font-style: italic;
  color: #666;
  text-align: center;
}

.rg-solution {
  margin: 20px 0;
}

.solution-method {
  margin-bottom: 20px;
}

.characteristic-curves {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  text-align: center;
}

.scaling-solution {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.asymptotic-behavior {
  margin: 20px 0;
}

.behavior-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.behavior-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.behavior-card h5 {
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
  
  .example-grid,
  .stability-grid,
  .comparison-grid,
  .formula-grid,
  .behavior-grid {
    grid-template-columns: 1fr;
  }
}
</style>