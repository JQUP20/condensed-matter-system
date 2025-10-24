<template>
  <div class="chapter-content">
    <h1 class="chapter-title">6.4.1 Wilson动量空间重整化：基本理论</h1>
    
    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3>学习目标</h3>
      <ul>
        <li>理解Wilson动量空间重整化的基本思想</li>
        <li>掌握动量壳积分的概念和方法</li>
        <li>学习重整化群方程的推导</li>
        <li>理解β函数和γ函数的物理意义</li>
        <li>掌握固定点分析和临界指数的计算</li>
      </ul>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <h3>Wilson重整化群的革命性贡献</h3>
      <p>
        Kenneth Wilson在1971年提出的动量空间重整化群理论彻底改变了我们对临界现象的理解。
        这一理论不仅解决了临界现象中的发散问题，更重要的是提供了一个统一的框架来理解
        相变、标度律和普适性。Wilson因此获得了1982年的诺贝尔物理学奖。
      </p>
    </div>

    <!-- 基本思想 -->
    <div class="basic-idea-section">
      <h3>Wilson重整化群的基本思想</h3>
      
      <div class="core-concept">
        <h4>核心概念：动量壳积分</h4>
        <p>
          Wilson的关键洞察是：临界现象主要由长波长的涨落主导，短波长的细节并不重要。
          因此，我们可以系统性地积分掉高动量模式，只保留低动量的长波长模式。
        </p>
        
        <div class="momentum-shell-diagram">
          <svg width="500" height="300" viewBox="0 0 500 300">
            <!-- 动量空间圆环 -->
            <circle cx="250" cy="150" r="120" fill="none" stroke="#74b9ff" stroke-width="3"/>
            <circle cx="250" cy="150" r="80" fill="none" stroke="#fd79a8" stroke-width="3"/>
            
            <!-- 动量壳 -->
            <path d="M 250 30 A 120 120 0 0 1 370 150" fill="none" stroke="#e17055" stroke-width="8"/>
            <text x="320" y="80" fill="#d63031" font-weight="bold" font-size="14">动量壳</text>
            <text x="320" y="95" fill="#d63031" font-size="12">Λ/b &lt; |k| &lt; Λ</text>
            
            <!-- 保留区域 -->
            <circle cx="250" cy="150" r="80" fill="#ddd6fe" fill-opacity="0.3"/>
            <text x="250" y="155" text-anchor="middle" fill="#6c5ce7" font-weight="bold">保留区域</text>
            <text x="250" y="170" text-anchor="middle" fill="#6c5ce7" font-size="12">|k| &lt; Λ/b</text>
            
            <!-- 坐标轴 -->
            <line x1="130" y1="150" x2="370" y2="150" stroke="#2d3436" stroke-width="2"/>
            <line x1="250" y1="30" x2="250" y2="270" stroke="#2d3436" stroke-width="2"/>
            <text x="375" y="155" fill="#2d3436">k_x</text>
            <text x="255" y="25" fill="#2d3436">k_y</text>
            
            <!-- 标记 -->
            <text x="330" y="155" fill="#2d3436">Λ</text>
            <text x="310" y="155" fill="#2d3436">Λ/b</text>
            
            <text x="200" y="290" text-anchor="middle" font-size="14" fill="#2d3436">Wilson动量壳积分示意图</text>
          </svg>
        </div>
      </div>

      <div class="rg-procedure">
        <h4>重整化群变换步骤</h4>
        <div class="steps-grid">
          <div class="step-card">
            <h5>步骤1：动量壳积分</h5>
            <p>积分掉动量壳 $\Lambda/b < |k| &lt; \Lambda$中的高频模式</p><div class="formula-box">$$Z' = \int_{\Lambda/b &lt; |k| &lt; \Lambda} \mathcal{D}\phi_k e^{-S[\phi]}$$</div>
          </div>
          
          <div class="step-card"><h5>步骤2：重标度</h5><p>将动量重标度：$k' = bk$，使截断恢复到原来的值</p><div class="formula-box">$$\phi'(k') = b^{-\zeta} \phi(k'/b)$$</div>
          </div>
          
          <div class="step-card"> <h5>步骤3：参数重整化</h5><p>调整哈密顿量参数，使其形式保持不变</p> <div class="formula-box">$$H'[g'] = H[g]$$</div>
          </div>
        </div>
      </div>
    </div>

    <!-- φ⁴理论的重整化 -->
    <div class="phi4-theory-section">
      <h3>φ⁴理论的Wilson重整化</h3>
      
      <div class="model-setup"> <h4>模型设定</h4><p>考虑d维空间中的φ⁴理论：</p> <div class="formula-box">$$H[\phi] = \int d^d x \left[ \frac{1}{2}(\nabla\phi)^2 + \frac{r}{2}\phi^2 + \frac{u}{4!}\phi^4 \right]$$</div><p>其中$r$是质量参数，$u$是相互作用强度。</p>
      </div>

      <div class="momentum-representation">
        <h4>动量表示</h4>
        <p>在动量空间中，哈密顿量写为：</p><div class="formula-box">$$H = \int_{|k|&lt;\Lambda} \frac{d^d k}{(2\pi)^d} \left[ \frac{1}{2}(k^2 + r)\phi_k\phi_{-k} \right] + \frac{u}{4!} \int \phi_{k_1}\phi_{k_2}\phi_{k_3}\phi_{k_4} \delta(k_1+k_2+k_3+k_4)$$</div>
      </div>

      <div class="shell-integration"> <h4>动量壳积分</h4><p>将场分解为快模式和慢模式：</p> <div class="formula-box">$$\phi_k = \begin{cases}
          \phi_k^{<} & \text{if } |k| < \Lambda/b \\\phi_k^{>} & \text{if } \Lambda/b &lt; |k| &lt; \Lambda\end{cases}$$</div>
        
        <div class="integration-process"><h5>积分过程</h5><p>积分掉快模式$\phi^{>}$：</p><div class="formula-box">$$e^{-H'[\phi^{&lt;}]} = \int \mathcal{D}\phi^{>} e^{-H[\phi^{&lt;}, \phi^{>}]}$$</div>
          
          <p>这个积分会产生有效作用量的修正：</p>
          <div class="correction-terms"> <div class="term-item"><h6>一圈修正</h6> <div class="formula-box">$$\delta H^{(1)} = -\frac{1}{2} \text{Tr} \ln G^{-1}$$</div>
            </div> <div class="term-item"><h6>顶点修正</h6> <div class="formula-box">$$\delta H^{(2)} = \frac{u^2}{2} \int G(k) d^d k \int \phi^2(x) d^d x$$</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 重整化群方程 -->
    <div class="rg-equations-section">
      <h3>重整化群方程的推导</h3>
      
      <div class="scaling-analysis"><h4>标度分析</h4><p>在重标度变换$k' = bk$下，各量的标度行为：</p>
        
        <div class="scaling-table">
          <table class="scaling-dimensions">
            <thead>
              <tr>
                <th>物理量</th>
                <th>标度维度</th>
                <th>重标度关系</th>
              </tr>
            </thead>
            <tbody><tr><td>动量$k$</td><td>$[k] = 1$</td><td>$k' = bk$</td>
              </tr><tr><td>场$\phi$</td><td>$[\phi] = (d-2)/2$</td><td>$\phi' = b^{-(d-2)/2}\phi$</td>
              </tr><tr><td>质量参数$r$</td><td>$[r] = 2$</td><td>$r' = b^2 r$</td>
              </tr><tr><td>耦合常数$u$</td><td>$[u] = 4-d$</td><td>$u' = b^{4-d} u$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="beta-function-derivation">
        <h4>β函数的推导</h4>
        <p>定义无量纲耦合常数：</p><div class="formula-box">$$g = u \Lambda^{d-4}$$</div><p>重整化群变换后：</p> <div class="formula-box">$$g' = g b^{4-d} (1 + \delta g)$$</div><p>其中$\delta g$是量子修正。定义β函数：</p><div class="formula-box">$$\beta(g) = \lim_{b \to 1} \frac{g' - g}{\ln b} = (4-d)g + \beta_1 g^2 + \beta_2 g^3 + \cdots$$</div>
        
        <div class="beta-coefficients"> <h5>β函数系数</h5><p>一圈计算给出：</p> <div class="formula-box">$$\beta_1 = \frac{N+8}{3} \cdot \frac{S_d}{(2\pi)^d}$$</div><p>其中$S_d = 2\pi^{d/2}/\Gamma(d/2)$是d维单位球面积，$N$是场的分量数。</p>
        </div>
      </div>

      <div class="gamma-function">
        <h4>γ函数和异常维度</h4>
        <p>场的异常标度维度由γ函数描述：</p><div class="formula-box">$$\gamma(g) = \lim_{b \to 1} \frac{\zeta - \zeta_0}{\ln b}$$</div><p>其中$\zeta_0 = (d-2)/2$是经典标度维度。一圈计算给出：</p><div class="formula-box">$$\gamma(g) = \gamma_1 g + \gamma_2 g^2 + \cdots$$</div> <div class="gamma-coefficient"><p>对于φ⁴理论：</p> <div class="formula-box">$$\gamma_1 = \frac{N+2}{6} \cdot \frac{S_d}{(2\pi)^d}$$</div>
        </div>
      </div>
    </div>

    <!-- 固定点分析 -->
    <div class="fixed-point-section">
      <h3>固定点分析</h3>
      
      <div class="fixed-point-definition"> <h4>固定点的定义</h4><p>重整化群固定点满足：</p> <div class="formula-box">$$\beta(g^*) = 0$$</div>
        
        <div class="fixed-point-types">
          <h5>固定点类型</h5>
          <div class="fp-grid">
            <div class="fp-card"><h6>高斯固定点</h6><p>$g^* = 0$（自由理论）</p><div class="stability">稳定性：$d > 4$时稳定</div>
            </div>
            
            <div class="fp-card"><h6>Wilson-Fisher固定点</h6><p>$g^* = \frac{4-d}{\beta_1} + O((4-d)^2)$</p><div class="stability">稳定性：$d < 4$时稳定</div>
            </div>
          </div>
        </div>
      </div>

      <div class="linearization-analysis"><h4>固定点附近的线性化分析</h4><p>在固定点附近，设$g = g^* + \delta g$，则：</p><div class="formula-box">$$\frac{d(\delta g)}{d\ell} = \lambda \delta g$$</div><p>其中$\lambda = \beta'(g^*)$是线性化本征值。</p>
        
        <div class="eigenvalue-interpretation">
          <h5>本征值的物理意义</h5>
          <div class="interpretation-grid"><div class="interp-item"><h6>$\lambda > 0$</h6>
              <p>不稳定方向（相关算符）</p>
            </div><div class="interp-item"><h6>$\lambda < 0$</h6>
              <p>稳定方向（无关算符）</p>
            </div><div class="interp-item"><h6>$\lambda = 0$</h6>
              <p>边际方向（边际算符）</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rg-flow-diagram">
        <h4>重整化群流图</h4>
        <div class="flow-visualization">
          <svg width="600" height="400" viewBox="0 0 600 400">
            <!-- 坐标轴 -->
            <line x1="50" y1="350" x2="550" y2="350" stroke="#2d3436" stroke-width="2"/>
            <line x1="300" y1="50" x2="300" y2="350" stroke="#2d3436" stroke-width="2"/>
            <text x="560" y="355" fill="#2d3436">g</text>
            <text x="305" y="45" fill="#2d3436">T</text>
            
            <!-- 高斯固定点 -->
            <circle cx="300" cy="350" r="8" fill="#e74c3c"/>
            <text x="310" y="370" fill="#e74c3c" font-weight="bold">高斯固定点</text>
            
            <!-- Wilson-Fisher固定点 -->
            <circle cx="400" cy="200" r="8" fill="#27ae60"/>
            <text x="410" y="195" fill="#27ae60" font-weight="bold">Wilson-Fisher</text>
            <text x="410" y="210" fill="#27ae60" font-weight="bold">固定点</text>
            
            <!-- RG流线 -->
            <!-- 从高温到低温的流线 -->
            <path d="M 200 100 Q 250 150 300 350" fill="none" stroke="#74b9ff" stroke-width="3" marker-end="url(#arrowhead)"/>
            <path d="M 350 100 Q 375 150 400 200" fill="none" stroke="#74b9ff" stroke-width="3" marker-end="url(#arrowhead)"/>
            <path d="M 450 100 Q 425 150 400 200" fill="none" stroke="#74b9ff" stroke-width="3" marker-end="url(#arrowhead)"/>
            <path d="M 500 150 Q 450 175 400 200" fill="none" stroke="#74b9ff" stroke-width="3" marker-end="url(#arrowhead)"/>
            
            <!-- 箭头定义 -->
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#74b9ff"/>
              </marker>
            </defs>
            
            <!-- 相区域标记 -->
            <text x="100" y="300" fill="#2d3436" font-size="14">无序相</text>
            <text x="450" y="300" fill="#2d3436" font-size="14">有序相</text>
            
            <text x="250" y="30" text-anchor="middle" font-size="16" fill="#2d3436">重整化群流图</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- 临界指数的计算 -->
    <div class="critical-exponents-section">
      <h3>临界指数的计算</h3>
      
      <div class="exponent-definitions">
        <h4>临界指数的定义</h4>
        <p>在临界点附近，各物理量表现出幂律行为：</p>
        
        <div class="exponent-table">
          <table class="exponents">
            <thead>
              <tr>
                <th>物理量</th>
                <th>幂律行为</th>
                <th>临界指数</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>比热</td><td>$C \sim |t|^{-\alpha}$</td><td>$\alpha$</td>
              </tr>
              <tr><td>磁化强度</td><td>$M \sim |t|^{\beta}$</td><td>$\beta$</td>
              </tr>
              <tr><td>磁化率</td><td>$\chi \sim |t|^{-\gamma}$</td><td>$\gamma$</td>
              </tr>
              <tr><td>关联长度</td><td>$\xi \sim |t|^{-\nu}$</td><td>$\nu$</td>
              </tr>
              <tr><td>临界等温线</td><td>$M \sim H^{1/\delta}$</td><td>$\delta$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="exponent-calculation">
        <h4>从重整化群计算临界指数</h4>
        
        <div class="calculation-steps">
          <div class="calc-item">
            <h5>关联长度指数 ν</h5>
            <p>从质量参数的重整化：</p><div class="formula-box">$$\nu = \frac{1}{2 - \eta_r}$$</div><p>其中$\eta_r$是质量参数的异常维度。</p>
          </div>
          
          <div class="calc-item">
            <h5>异常维度 η</h5>
            <p>从场的异常标度维度：</p><div class="formula-box">$$\eta = 2\gamma(g^*)$$</div>
          </div>
          
          <div class="calc-item"> <h5>其他指数</h5><p>利用标度关系：</p> <div class="formula-box">$$\alpha = 2 - d\nu, \quad \beta = \frac{d-2+\eta}{2}\nu, \quad \gamma = (2-\eta)\nu$$</div>
          </div>
        </div>
      </div>

      <div class="epsilon-expansion"><h4>ε展开结果</h4><p>在$\varepsilon = 4-d$的一阶近似下：</p>
        
        <div class="epsilon-results">
          <div class="result-grid">
            <div class="result-item">
              <h5>O(N)模型</h5><div class="formula-box">$$\nu = \frac{1}{2} + \frac{N+2}{4(N+8)}\varepsilon + O(\varepsilon^2)$$</div>
            </div> <div class="result-item"><h5>Ising模型 (N=1)</h5> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{1}{12}\varepsilon + O(\varepsilon^2)$$</div>
            </div> <div class="result-item"><h5>XY模型 (N=2)</h5> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{1}{10}\varepsilon + O(\varepsilon^2)$$</div>
            </div> <div class="result-item"><h5>Heisenberg模型 (N=3)</h5> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{5}{44}\varepsilon + O(\varepsilon^2)$$
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary-box">
      <h3>本节总结</h3>
      <ul>
        <li><strong>Wilson重整化群</strong>：通过动量壳积分系统性地处理临界现象中的多尺度问题</li>
        <li><strong>重整化群方程</strong>：β函数和γ函数描述耦合常数和场的标度行为</li>
        <li><strong>固定点分析</strong>：高斯固定点和Wilson-Fisher固定点控制不同维度下的临界行为</li>
        <li><strong>临界指数</strong>：从重整化群固定点的性质可以系统性地计算各种临界指数</li>
        <li><strong>普适性</strong>：不同的微观模型可以流向相同的固定点，展现相同的临界行为</li>
      </ul>
    </div>

    <!-- 思考题 -->
    <div class="exercise-box">
      <h3>思考题</h3>
      <ol>
        <li>为什么Wilson重整化群选择在动量空间而不是实空间进行？各有什么优缺点？</li>
        <li>解释β函数的物理意义，为什么β(g*)=0定义了固定点？</li>
        <li>什么是异常维度？它与经典标度维度有什么区别？</li>
        <li>为什么在d=4维时φ⁴理论是边际的？这对临界行为有什么影响？</li>
        <li>如何理解重整化群流图中的稳定和不稳定方向？</li>
      </ol>
    </div>

    <!-- 延伸阅读 -->
    <div class="reading-list">
      <h3>延伸阅读</h3>
      <ul>
        <li>Wilson, K. G. "Renormalization group and critical phenomena." <em>Rev. Mod. Phys.</em> <strong>47</strong>, 773 (1975)</li>
        <li>Wilson, K. G. & Kogut, J. "The renormalization group and the ε expansion." <em>Phys. Rep.</em> <strong>12</strong>, 75 (1974)</li>
        <li>Zinn-Justin, J. "Quantum Field Theory and Critical Phenomena." Oxford University Press (2002)</li>
        <li>Cardy, J. "Scaling and Renormalization in Statistical Physics." Cambridge University Press (1996)</li>
        <li>Peskin, M. E. & Schroeder, D. V. "An Introduction to Quantum Field Theory." Addison-Wesley (1995)</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  font-size: 2.5em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
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
}

.learning-objectives ul {
  margin: 0;
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
}

.introduction {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.introduction h3 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.4em;
}

.basic-idea-section,
.phi4-theory-section,
.rg-equations-section,
.fixed-point-section,
.critical-exponents-section {
  margin: 30px 0;
}

.basic-idea-section h3,
.phi4-theory-section h3,
.rg-equations-section h3,
.fixed-point-section h3,
.critical-exponents-section h3 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.core-concept,
.model-setup,
.momentum-representation,
.shell-integration,
.scaling-analysis,
.beta-function-derivation,
.gamma-function,
.fixed-point-definition,
.linearization-analysis,
.exponent-definitions,
.exponent-calculation,
.epsilon-expansion {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.core-concept h4,
.model-setup h4,
.momentum-representation h4,
.shell-integration h4,
.scaling-analysis h4,
.beta-function-derivation h4,
.gamma-function h4,
.fixed-point-definition h4,
.linearization-analysis h4,
.exponent-definitions h4,
.exponent-calculation h4,
.epsilon-expansion h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.momentum-shell-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.step-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #74b9ff;
}

.step-card h5 {
  color: #0984e3;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.formula-box {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
}

.integration-process {
  margin: 20px 0;
}

.integration-process h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.correction-terms {
  margin: 20px 0;
}

.term-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #fd79a8;
}

.term-item h6 {
  color: #e84393;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.scaling-table {
  margin: 20px 0;
}

.scaling-dimensions {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.scaling-dimensions th,
.scaling-dimensions td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.scaling-dimensions th {
  background: #74b9ff;
  color: white;
  font-weight: 600;
}

.beta-coefficients,
.gamma-coefficient {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.beta-coefficients h5,
.gamma-coefficient h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.fixed-point-types {
  margin: 20px 0;
}

.fp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.fp-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #27ae60;
  text-align: center;
}

.fp-card h6 {
  color: #27ae60;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.stability {
  font-style: italic;
  color: #666;
  margin-top: 10px;
}

.eigenvalue-interpretation {
  margin: 20px 0;
}

.interpretation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.interp-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.interp-item h6 {
  color: #2d3436;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.rg-flow-diagram {
  margin: 20px 0;
}

.flow-visualization {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.exponent-table {
  margin: 20px 0;
}

.exponents {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.exponents th,
.exponents td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.exponents th {
  background: #fd79a8;
  color: white;
  font-weight: 600;
}

.calculation-steps {
  margin: 20px 0;
}

.calc-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #e17055;
}

.calc-item h5 {
  color: #d63031;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.epsilon-results {
  margin: 20px 0;
}

.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.result-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #6c5ce7;
}

.result-item h5 {
  color: #6c5ce7;
  margin-bottom: 15px;
  font-size: 1.1em;
  text-align: center;
}

.summary-box {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #4CAF50;
}

.summary-box h3 {
  color: #2E7D32;
  margin-bottom: 20px;
}

.summary-box ul {
  margin: 0;
  padding-left: 20px;
}

.summary-box li {
  margin-bottom: 10px;
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
  margin-bottom: 20px;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin-bottom: 15px;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

.reading-list h3 {
  color: #424242;
  margin-bottom: 20px;
}

.reading-list ul {
  margin: 0;
  padding-left: 20px;
}

.reading-list li {
  margin-bottom: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .steps-grid,
  .fp-grid,
  .interpretation-grid,
  .result-grid {
    grid-template-columns: 1fr;
  }
}
</style>