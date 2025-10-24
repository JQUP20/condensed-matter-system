<template>
  <div class="chapter-content">
    <h1 class="chapter-title">6.4.2 ε展开和具体计算</h1>
    
    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3>学习目标</h3>
      <ul>
        <li>掌握ε展开的基本思想和方法</li>
        <li>学习费曼图技术在重整化群中的应用</li>
        <li>理解维数正规化和最小减除方案</li>
        <li>掌握β函数和γ函数的具体计算</li>
        <li>学习临界指数的高阶修正计算</li>
      </ul>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <h3>ε展开的重要性</h3>
      <p>
        ε展开是Wilson重整化群理论中最重要的计算技术之一。通过将空间维数从整数推广到连续变量，
        并在$\varepsilon = 4-d$的小参数展开下进行微扰计算，我们能够系统性地计算临界指数
        和其他普适量。这一方法不仅在理论上优雅，在实际应用中也取得了巨大成功。
      </p>
    </div>

    <!-- ε展开的基本思想 -->
    <div class="epsilon-expansion-section">
      <h3>ε展开的基本思想</h3>
      
      <div class="dimensional-continuation">
        <h4>维数延拓</h4>
        <p>ε展开的核心思想是将空间维数从整数推广到连续变量。对于φ⁴理论，耦合常数$u$的标度维度为$4-d$，在$d=4$时变为边际。
        </p>
        
        <div class="dimension-analysis">
          <h5>标度维度分析</h5>
          <div class="dimension-table">
            <table class="dimensions">
              <thead>
                <tr>
                  <th>维数 d</th>
                  <th>耦合常数维度 [u]</th>
                  <th>性质</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>d > 4</td>
                  <td>[u] < 0</td>
                  <td>无关，高斯固定点稳定</td>
                </tr>
                <tr>
                  <td>d = 4</td>
                  <td>[u] = 0</td>
                  <td>边际，对数修正</td>
                </tr>
                <tr>
                  <td>d < 4</td>
                  <td>[u] > 0</td>
                  <td>相关，非平凡固定点</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="epsilon-parameter"><h5>ε参数的引入</h5><p>定义$\varepsilon = 4-d$，则：</p><div class="formula-box">$$[u] = \varepsilon$$</div><p>当$\varepsilon \to 0$时，理论变为边际，可以进行微扰展开。</p>
        </div>
      </div>

      <div class="perturbative-expansion"><h4>微扰展开的设置</h4><p>在$\varepsilon$的小参数展开下，各物理量可以写为：</p>
        
        <div class="expansion-forms">
          <div class="expansion-item">
            <h5>β函数展开</h5><div class="formula-box">$$\beta(g) = -\varepsilon g + \beta_1 g^2 + \beta_2 g^3 + O(g^4)$$</div>
          </div> <div class="expansion-item"><h5>γ函数展开</h5> <div class="formula-box">$$\gamma(g) = \gamma_1 g + \gamma_2 g^2 + O(g^3)$$</div>
          </div> <div class="expansion-item"><h5>固定点展开</h5> <div class="formula-box">$$g^* = \frac{\varepsilon}{\beta_1} - \frac{\beta_2}{\beta_1^3}\varepsilon^2 + O(\varepsilon^3)$$</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 费曼图技术 -->
    <div class="feynman-diagrams-section">
      <h3>费曼图技术</h3>
      
      <div class="diagram-rules">
        <h4>费曼规则</h4>
        <p>对于φ⁴理论，费曼规则如下：</p>
        
        <div class="rules-grid">
          <div class="rule-item">
            <h5>传播子</h5>
            <div class="propagator-diagram">
              <svg width="200" height="80" viewBox="0 0 200 80">
                <line x1="20" y1="40" x2="180" y2="40" stroke="#74b9ff" stroke-width="3"/>
                <circle cx="20" cy="40" r="3" fill="#74b9ff"/>
                <circle cx="180" cy="40" r="3" fill="#74b9ff"/>
                <text x="100" y="60" text-anchor="middle" font-size="12">传播子</text> </svg></div> <div class="formula-box">$$G(k) = \frac{1}{k^2 + r}$$</div>
          </div>
          
          <div class="rule-item">
            <h5>顶点</h5>
            <div class="vertex-diagram">
              <svg width="200" height="120" viewBox="0 0 200 120">
                <circle cx="100" cy="60" r="8" fill="#fd79a8"/>
                <line x1="50" y1="30" x2="92" y2="52" stroke="#74b9ff" stroke-width="3"/>
                <line x1="150" y1="30" x2="108" y2="52" stroke="#74b9ff" stroke-width="3"/>
                <line x1="50" y1="90" x2="92" y2="68" stroke="#74b9ff" stroke-width="3"/>
                <line x1="150" y1="90" x2="108" y2="68" stroke="#74b9ff" stroke-width="3"/>
                <text x="100" y="110" text-anchor="middle" font-size="12">四点顶点</text> </svg></div> <div class="formula-box">$$-u$$</div>
          </div>
        </div>
      </div>

      <div class="loop-calculations">
        <h4>圈图计算</h4>
        
        <div class="one-loop-section">
          <h5>一圈修正</h5>
          <p>考虑自能的一圈修正：</p>
          
          <div class="self-energy-diagram">
            <svg width="400" height="150" viewBox="0 0 400 150">
              <!-- 外线 -->
              <line x1="50" y1="75" x2="120" y2="75" stroke="#74b9ff" stroke-width="3"/>
              <line x1="280" y1="75" x2="350" y2="75" stroke="#74b9ff" stroke-width="3"/>
              
              <!-- 圈 -->
              <circle cx="200" cy="75" r="40" fill="none" stroke="#74b9ff" stroke-width="3"/>
              
              <!-- 顶点 -->
              <circle cx="160" cy="75" r="6" fill="#fd79a8"/>
              <circle cx="240" cy="75" r="6" fill="#fd79a8"/>
              
              <!-- 连接线 -->
              <line x1="120" y1="75" x2="154" y2="75" stroke="#74b9ff" stroke-width="3"/>
              <line x1="246" y1="75" x2="280" y2="75" stroke="#74b9ff" stroke-width="3"/>
              
              <text x="200" y="130" text-anchor="middle" font-size="14">自能一圈修正</text>
            </svg> </div><p>对应的积分表达式：</p> <div class="formula-box">$$\Sigma^{(1)}(p) = \frac{u}{2} \int \frac{d^d k}{(2\pi)^d} \frac{1}{k^2 + r}$$</div>
        </div>

        <div class="vertex-correction">
          <h5>顶点修正</h5>
          <p>四点顶点的一圈修正：</p>
          
          <div class="vertex-correction-diagrams">
            <svg width="600" height="200" viewBox="0 0 600 200">
              <!-- s通道 -->
              <g transform="translate(100,100)">
                <circle cx="0" cy="0" r="6" fill="#fd79a8"/>
                <circle cx="80" cy="0" r="6" fill="#fd79a8"/>
                <path d="M 6 0 Q 40 -30 74 0" fill="none" stroke="#74b9ff" stroke-width="3"/>
                <path d="M 6 0 Q 40 30 74 0" fill="none" stroke="#74b9ff" stroke-width="3"/>
                
                <!-- 外线 -->
                <line x1="-40" y1="-20" x2="-6" y2="-6" stroke="#74b9ff" stroke-width="2"/>
                <line x1="-40" y1="20" x2="-6" y2="6" stroke="#74b9ff" stroke-width="2"/>
                <line x1="86" y1="-6" x2="120" y2="-20" stroke="#74b9ff" stroke-width="2"/>
                <line x1="86" y1="6" x2="120" y2="20" stroke="#74b9ff" stroke-width="2"/>
                
                <text x="40" y="60" text-anchor="middle" font-size="12">s通道</text>
              </g>
              
              <!-- t通道 -->
              <g transform="translate(300,100)">
                <circle cx="0" cy="0" r="6" fill="#fd79a8"/>
                <circle cx="80" cy="0" r="6" fill="#fd79a8"/>
                <path d="M 6 0 Q 40 -30 74 0" fill="none" stroke="#74b9ff" stroke-width="3"/>
                <path d="M 6 0 Q 40 30 74 0" fill="none" stroke="#74b9ff" stroke-width="3"/>
                
                <!-- 外线（交叉） -->
                <line x1="-40" y1="-20" x2="-6" y2="-6" stroke="#74b9ff" stroke-width="2"/>
                <line x1="-40" y1="20" x2="-6" y2="6" stroke="#74b9ff" stroke-width="2"/>
                <line x1="86" y1="-6" x2="120" y2="20" stroke="#74b9ff" stroke-width="2"/>
                <line x1="86" y1="6" x2="120" y2="-20" stroke="#74b9ff" stroke-width="2"/>
                
                <text x="40" y="60" text-anchor="middle" font-size="12">t通道</text>
              </g>
              
              <!-- u通道 -->
              <g transform="translate(500,100)">
                <circle cx="0" cy="0" r="6" fill="#fd79a8"/>
                <circle cx="80" cy="0" r="6" fill="#fd79a8"/>
                <path d="M 6 0 Q 40 -30 74 0" fill="none" stroke="#74b9ff" stroke-width="3"/>
                <path d="M 6 0 Q 40 30 74 0" fill="none" stroke="#74b9ff" stroke-width="3"/>
                
                <!-- 外线（另一种交叉） -->
                <line x1="-40" y1="-20" x2="-6" y2="6" stroke="#74b9ff" stroke-width="2"/>
                <line x1="-40" y1="20" x2="-6" y2="-6" stroke="#74b9ff" stroke-width="2"/>
                <line x1="86" y1="-6" x2="120" y2="-20" stroke="#74b9ff" stroke-width="2"/>
                <line x1="86" y1="6" x2="120" y2="20" stroke="#74b9ff" stroke-width="2"/>
                
                <text x="40" y="60" text-anchor="middle" font-size="12">u通道</text>
              </g>
            </svg> </div><p>总的顶点修正：</p> <div class="formula-box">$$\Gamma^{(1)}(p_1,p_2,p_3,p_4) = u^2 \left[ I_s + I_t + I_u \right]$$</div>
        </div>
      </div>
    </div>

    <!-- 维数正规化 -->
    <div class="dimensional-regularization-section">
      <h3>维数正规化</h3>
      
      <div class="regularization-method">
        <h4>正规化方法</h4><p>维数正规化是处理发散积分最优雅的方法。通过将积分维数推广到$d = 4-\varepsilon$，发散以$1/\varepsilon$极点的形式出现。
        </p>
        
        <div class="basic-integral">
          <h5>基本积分</h5>
          <p>最基本的发散积分：</p><div class="formula-box">$$I = \int \frac{d^d k}{(2\pi)^d} \frac{1}{(k^2 + m^2)^n}$$</div><p>在维数正规化下：</p> <div class="formula-box">$$I = \frac{1}{(4\pi)^{d/2}} \frac{\Gamma(n-d/2)}{\Gamma(n)} (m^2)^{d/2-n}$$</div>
        </div>
        
        <div class="pole-structure"><h5>极点结构</h5><p>当$d \to 4$时，利用$\Gamma$函数的性质：</p><div class="formula-box">$$\Gamma\left(\frac{\varepsilon}{2}\right) = \frac{2}{\varepsilon} - \gamma + O(\varepsilon)$$</div><p>其中$\gamma$是Euler常数。</p>
        </div>
      </div>

      <div class="ms-scheme">
        <h4>最小减除方案 (MS̄)</h4><p>在最小减除方案中，只减除$1/\varepsilon$极点和相关的常数项，
          保持物理量的有限部分。
        </p>
        
        <div class="renormalization-constants">
          <h5>重整化常数</h5>
          <p>定义重整化常数：</p><div class="formula-box">$$Z_\phi = 1 + \frac{\gamma_1 g}{\varepsilon} + O(g^2)$$</div> <div class="formula-box">$$Z_u = 1 + \frac{\beta_1 g}{\varepsilon} + O(g^2)$$</div><p>其中$g = u\mu^{-\varepsilon}$是无量纲耦合常数，$\mu$是重整化标度。</p>
        </div>
      </div>
    </div>

    <!-- β函数和γ函数的计算 -->
    <div class="beta-gamma-calculation-section">
      <h3>β函数和γ函数的具体计算</h3>
      
      <div class="one-loop-beta">
        <h4>一圈β函数</h4>
        <p>从顶点修正计算β函数的一圈系数：</p>
        
        <div class="calculation-steps">
          <div class="step-item">
            <h5>步骤1：计算顶点修正</h5>
            <p>四点顶点的一圈修正积分：</p><div class="formula-box">$$\delta\Gamma^{(4)} = u^2 \int \frac{d^d k}{(2\pi)^d} \left[ \frac{1}{k^2+r} + \text{交叉项} \right]$$</div>
          </div>
          
          <div class="step-item"> <h5>步骤2：提取发散部分</h5><p>使用维数正规化：</p> <div class="formula-box">$$\delta\Gamma^{(4)} = \frac{u^2}{(4\pi)^2} \left[ \frac{3}{\varepsilon} + \text{有限项} \right]$$</div>
          </div>
          
          <div class="step-item"> <h5>步骤3：确定β函数系数</h5><p>对于O(N)模型：</p> <div class="formula-box">$$\beta_1 = \frac{N+8}{3} \cdot \frac{1}{(4\pi)^2}$$</div>
          </div>
        </div>
      </div>

      <div class="one-loop-gamma">
        <h4>一圈γ函数</h4>
        <p>从自能修正计算γ函数：</p>
        
        <div class="gamma-calculation">
          <div class="self-energy-calc"> <h5>自能计算</h5><p>一圈自能修正：</p> <div class="formula-box">$$\Sigma^{(1)}(p) = \frac{u(N+2)}{6} \int \frac{d^d k}{(2\pi)^d} \frac{1}{k^2+r}$$</div><p>在$p^2 = 0$附近展开：</p><div class="formula-box">$$\Sigma^{(1)}(p) = A + B p^2 + O(p^4)$$</div>
          </div>
          
          <div class="anomalous-dimension"> <h5>异常维度</h5><p>场的异常维度：</p> <div class="formula-box">$$\gamma_1 = \frac{N+2}{6} \cdot \frac{1}{(4\pi)^2}$$</div>
          </div>
        </div>
      </div>

      <div class="two-loop-corrections">
        <h4>二圈修正</h4>
        <p>二圈计算涉及更复杂的费曼图：</p>
        
        <div class="two-loop-diagrams">
          <svg width="600" height="200" viewBox="0 0 600 200">
            <!-- 二圈自能 -->
            <g transform="translate(150,100)">
              <line x1="-50" y1="0" x2="-20" y2="0" stroke="#74b9ff" stroke-width="3"/>
              <line x1="20" y1="0" x2="50" y2="0" stroke="#74b9ff" stroke-width="3"/>
              
              <!-- 双圈结构 -->
              <circle cx="-10" cy="0" r="15" fill="none" stroke="#74b9ff" stroke-width="2"/>
              <circle cx="10" cy="0" r="15" fill="none" stroke="#74b9ff" stroke-width="2"/>
              
              <circle cx="-25" cy="0" r="3" fill="#fd79a8"/>
              <circle cx="25" cy="0" r="3" fill="#fd79a8"/>
              <circle cx="0" cy="0" r="3" fill="#fd79a8"/>
              
              <text x="0" y="50" text-anchor="middle" font-size="12">二圈自能</text>
            </g>
            
            <!-- 二圈顶点 -->
            <g transform="translate(450,100)">
              <circle cx="-30" cy="0" r="6" fill="#fd79a8"/>
              <circle cx="30" cy="0" r="6" fill="#fd79a8"/>
              <circle cx="0" cy="-20" r="6" fill="#fd79a8"/>
              <circle cx="0" cy="20" r="6" fill="#fd79a8"/>
              
              <!-- 内部结构 -->
              <circle cx="0" cy="0" r="25" fill="none" stroke="#74b9ff" stroke-width="2"/>
              <circle cx="0" cy="0" r="12" fill="none" stroke="#74b9ff" stroke-width="2"/>
              
              <text x="0" y="60" text-anchor="middle" font-size="12">二圈顶点</text>
            </g>
          </svg>
        </div>
        
        <div class="two-loop-results"> <h5>二圈结果</h5><p>对于O(N)模型的二圈系数：</p> <div class="formula-box">$$\beta_2 = \frac{1}{(4\pi)^4} \left[ \frac{(N+8)^2}{6} - \frac{(N+2)(N+8)}{3} \right]$$</div> <div class="formula-box">$$\gamma_2 = \frac{1}{(4\pi)^4} \frac{(N+2)^2}{12}$$</div>
        </div>
      </div>
    </div>

    <!-- 临界指数的高阶计算 -->
    <div class="critical-exponents-section">
      <h3>临界指数的高阶计算</h3>
      
      <div class="fixed-point-expansion">
        <h4>固定点的高阶展开</h4>
        <p>Wilson-Fisher固定点的高阶修正：</p>
        
        <div class="fixed-point-series"> <div class="fp-expansion"><h5>固定点位置</h5> <div class="formula-box">$$g^* = \frac{\varepsilon}{\beta_1} - \frac{\beta_2}{\beta_1^3}\varepsilon^2 + \frac{1}{\beta_1^4}\left(\frac{2\beta_2^2}{\beta_1} - \beta_3\right)\varepsilon^3 + O(\varepsilon^4)$$</div>
          </div>
          
          <div class="exponent-expansion"> <h5>临界指数展开</h5><p>关联长度指数：</p> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{\gamma_1}{\beta_1}\frac{\varepsilon}{4} + \left(\frac{\gamma_2}{\beta_1} - \frac{\gamma_1\beta_2}{\beta_1^2}\right)\frac{\varepsilon^2}{8} + O(\varepsilon^3)$$</div><p>异常维度：</p> <div class="formula-box">$$\eta = 2\gamma(g^*) = \frac{2\gamma_1}{\beta_1}\varepsilon + \frac{2}{\beta_1^2}\left(\gamma_2\beta_1 - \gamma_1\beta_2\right)\varepsilon^2 + O(\varepsilon^3)$$</div>
          </div>
        </div>
      </div>

      <div class="specific-models">
        <h4>具体模型的结果</h4>
        
        <div class="model-results">
          <div class="ising-model">
            <h5>Ising模型 (N=1)</h5>
            <div class="ising-results"> <div class="result-item"><h6>一阶结果</h6> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{\varepsilon}{12} + O(\varepsilon^2)$$</div> <div class="formula-box">$$\eta = \frac{\varepsilon}{6} + O(\varepsilon^2)$$</div>
              </div> <div class="result-item"><h6>二阶结果</h6> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{\varepsilon}{12} + \frac{5\varepsilon^2}{144} + O(\varepsilon^3)$$</div> <div class="formula-box">$$\eta = \frac{\varepsilon}{6} - \frac{5\varepsilon^2}{72} + O(\varepsilon^3)$$</div>
              </div>
            </div>
          </div>
          
          <div class="xy-model">
            <h5>XY模型 (N=2)</h5>
            <div class="xy-results"> <div class="result-item"><h6>一阶结果</h6> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{\varepsilon}{10} + O(\varepsilon^2)$$</div> <div class="formula-box">$$\eta = \frac{\varepsilon}{5} + O(\varepsilon^2)$$</div>
              </div>
            </div>
          </div>
          
          <div class="heisenberg-model">
            <h5>Heisenberg模型 (N=3)</h5>
            <div class="heisenberg-results"> <div class="result-item"><h6>一阶结果</h6> <div class="formula-box">$$\nu = \frac{1}{2} + \frac{5\varepsilon}{44} + O(\varepsilon^2)$$</div> <div class="formula-box">$$\eta = \frac{5\varepsilon}{22} + O(\varepsilon^2)$$</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="numerical-comparison">
        <h4>与实验和数值结果的比较</h4>
        
        <div class="comparison-table">
          <table class="comparison">
            <thead>
              <tr>
                <th>模型</th>
                <th>指数</th>
                <th>ε展开 (d=3)</th>
                <th>高温展开</th>
                <th>蒙特卡罗</th>
                <th>实验</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2">3D Ising</td>
                <td>ν</td>
                <td>0.583</td>
                <td>0.625</td>
                <td>0.6301</td>
                <td>0.630</td>
              </tr>
              <tr>
                <td>η</td>
                <td>0.167</td>
                <td>0.25</td>
                <td>0.0364</td>
                <td>0.036</td>
              </tr>
              <tr>
                <td rowspan="2">3D XY</td>
                <td>ν</td>
                <td>0.600</td>
                <td>-</td>
                <td>0.6717</td>
                <td>0.672</td>
              </tr>
              <tr>
                <td>η</td>
                <td>0.200</td>
                <td>-</td>
                <td>0.0381</td>
                <td>0.038</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div class="comparison-analysis">
          <h5>结果分析</h5><ul><li>ε展开在$d=3$时$\varepsilon=1$，不是小参数，但结果仍然合理</li>
            <li>Padé近似和Borel求和可以改善高阶展开的收敛性</li>
            <li>与高精度数值结果和实验数据符合较好</li>
            <li>展示了重整化群理论的预测能力</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 改进方法 -->
    <div class="improvement-methods-section">
      <h3>ε展开的改进方法</h3>
      
      <div class="pade-approximation">
        <h4>Padé近似</h4>
        <p>
          对于有限阶的ε展开，可以使用Padé近似来改善收敛性：
        </p>
        
        <div class="pade-method"><h5>Padé近似方法</h5><p>将幂级数$f(\varepsilon) = \sum_{n=0}^N a_n \varepsilon^n$近似为有理函数：</p><div class="formula-box">$$[L/M](\varepsilon) = \frac{P_L(\varepsilon)}{Q_M(\varepsilon)}$$</div><p>其中$P_L$和$Q_M$分别是$L$阶和$M$阶多项式。</p>
        </div>
        
        <div class="pade-example"><h5>应用实例</h5><p>对于3D Ising模型的$\nu$指数：</p><div class="formula-box">$$\nu = 0.5 + 0.0833\varepsilon + 0.0347\varepsilon^2 + \cdots$$</div><p>使用[1/1] Padé近似：</p> <div class="formula-box">$$\nu_{[1/1]} = \frac{0.5 + 0.0833\varepsilon}{1 - 0.0694\varepsilon}$$</div><p>在$\varepsilon=1$时给出$\nu \approx 0.627$，更接近精确值。</p>
        </div>
      </div>

      <div class="borel-summation">
        <h4>Borel求和</h4>
        <p>
          对于发散级数，Borel求和提供了一种重新求和的方法：
        </p>
        
        <div class="borel-transform"><h5>Borel变换</h5><p>对级数$f(\varepsilon) = \sum_{n=0}^\infty a_n \varepsilon^n$定义Borel变换：</p><div class="formula-box">$$B[f](t) = \sum_{n=0}^\infty \frac{a_n t^n}{n!}$$</div><p>然后通过积分重构原函数：</p> <div class="formula-box">$$f(\varepsilon) = \int_0^\infty e^{-t} B[f](\varepsilon t) dt$$</div>
        </div>
      </div>

      <div class="large-n-expansion">
        <h4>大N展开</h4><p>在O(N)模型中，可以在$N \to \infty$极限下进行展开：
        </p>
        
        <div class="large-n-results"><h5>大N极限结果</h5><p>在$N \to \infty$时：</p><div class="formula-box">$$\nu = \frac{1}{2-\eta}, \quad \eta = \frac{2}{N} + O(1/N^2)$$</div><p>这给出了另一个系统性的展开参数$1/N$。</p>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary-box">
      <h3>本节总结</h3>
      <ul>
        <li><strong>ε展开方法</strong>：通过维数延拓将临界现象的计算转化为微扰展开</li>
        <li><strong>费曼图技术</strong>：系统性地计算量子修正和重整化群函数</li>
        <li><strong>维数正规化</strong>：优雅地处理发散积分，保持理论的对称性</li>
        <li><strong>具体计算</strong>：β函数和γ函数的一圈、二圈计算方法</li>
        <li><strong>临界指数</strong>：从重整化群固定点系统性地计算各种临界指数</li>
        <li><strong>改进方法</strong>：Padé近似、Borel求和等技术改善展开的收敛性</li>
      </ul>
    </div>

    <!-- 思考题 -->
    <div class="exercise-box">
      <h3>思考题</h3><ol><li>为什么ε展开在$d=4$维附近特别有效？这与φ⁴理论的边际性有什么关系？</li>
        <li>解释维数正规化的物理意义，为什么它比其他正规化方法更优雅？</li><li>如何从费曼图的计算中提取β函数和γ函数的系数？</li><li>为什么ε展开在$d=3$时$\varepsilon=1$不是小参数，但结果仍然合理？</li>
        <li>比较ε展开、高温展开和数值方法的优缺点。</li>
      </ol>
    </div>

    <!-- 延伸阅读 -->
    <div class="reading-list">
      <h3>延伸阅读</h3>
      <ul>
        <li>Wilson, K. G. & Kogut, J. "The renormalization group and the ε expansion." <em>Phys. Rep.</em> <strong>12</strong>, 75 (1974)</li>
        <li>Le Guillou, J. C. & Zinn-Justin, J. "Critical exponents from field theory." <em>Phys. Rev. B</em> <strong>21</strong>, 3976 (1980)</li>
        <li>Zinn-Justin, J. "Quantum Field Theory and Critical Phenomena." Oxford University Press (2002)</li>
        <li>Kleinert, H. & Schulte-Frohlinde, V. "Critical Properties of φ⁴-Theories." World Scientific (2001)</li>
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

.epsilon-expansion-section,
.feynman-diagrams-section,
.dimensional-regularization-section,
.beta-gamma-calculation-section,
.critical-exponents-section,
.improvement-methods-section {
  margin: 30px 0;
}

.epsilon-expansion-section h3,
.feynman-diagrams-section h3,
.dimensional-regularization-section h3,
.beta-gamma-calculation-section h3,
.critical-exponents-section h3,
.improvement-methods-section h3 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.dimensional-continuation,
.perturbative-expansion,
.diagram-rules,
.loop-calculations,
.regularization-method,
.ms-scheme,
.one-loop-beta,
.one-loop-gamma,
.two-loop-corrections,
.fixed-point-expansion,
.specific-models,
.numerical-comparison,
.pade-approximation,
.borel-summation,
.large-n-expansion {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.dimensional-continuation h4,
.perturbative-expansion h4,
.diagram-rules h4,
.loop-calculations h4,
.regularization-method h4,
.ms-scheme h4,
.one-loop-beta h4,
.one-loop-gamma h4,
.two-loop-corrections h4,
.fixed-point-expansion h4,
.specific-models h4,
.numerical-comparison h4,
.pade-approximation h4,
.borel-summation h4,
.large-n-expansion h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.dimension-analysis,
.epsilon-parameter,
.expansion-forms,
.basic-integral,
.pole-structure,
.renormalization-constants,
.calculation-steps,
.gamma-calculation,
.fixed-point-series,
.model-results,
.comparison-analysis,
.pade-method,
.pade-example,
.borel-transform,
.large-n-results {
  margin: 20px 0;
}

.dimension-table {
  margin: 20px 0;
}

.dimensions {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.dimensions th,
.dimensions td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.dimensions th {
  background: #74b9ff;
  color: white;
  font-weight: 600;
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

.expansion-forms {
  margin: 20px 0;
}

.expansion-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #fd79a8;
}

.expansion-item h5 {
  color: #e84393;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.rules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.rule-item {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #74b9ff;
  text-align: center;
}

.rule-item h5 {
  color: #0984e3;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.propagator-diagram,
.vertex-diagram,
.self-energy-diagram,
.vertex-correction-diagrams,
.two-loop-diagrams {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.one-loop-section,
.vertex-correction {
  margin: 20px 0;
}

.one-loop-section h5,
.vertex-correction h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.step-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #e17055;
}

.step-item h5 {
  color: #d63031;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.self-energy-calc,
.anomalous-dimension {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.self-energy-calc h5,
.anomalous-dimension h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.two-loop-results {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.two-loop-results h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.fp-expansion,
.exponent-expansion {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.fp-expansion h5,
.exponent-expansion h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.ising-model,
.xy-model,
.heisenberg-model {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #00b894;
}

.ising-model h5,
.xy-model h5,
.heisenberg-model h5 {
  color: #00b894;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.ising-results,
.xy-results,
.heisenberg-results {
  margin: 20px 0;
}

.result-item {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
}

.result-item h6 {
  color: #2d3436;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.comparison-table {
  margin: 20px 0;
}

.comparison {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.comparison th,
.comparison td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.comparison th {
  background: #fd79a8;
  color: white;
  font-weight: 600;
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
  
  .rules-grid {
    grid-template-columns: 1fr;
  }
}
</style>