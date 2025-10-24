<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2.6 平均场上的涨落效应II</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">高级涨落理论</span>
        <span class="reading-time">阅读时间：45分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        在前一节的基础上，我们进一步探讨涨落效应的高级理论，包括非高斯涨落、
        重整化群理论的初步介绍、以及涨落效应在实际系统中的复杂表现。
        这些内容为理解现代相变理论奠定了重要基础。
      </p>
    </div>

    <div class="content-section">
      <h2>非高斯涨落</h2>
      
      <div class="non-gaussian-fluctuations">
        <div class="non-gaussian-framework">
          <div class="non-gaussian-card perturbation">
            <h3>🔄 微扰展开理论</h3>
            <div class="non-gaussian-content">
              <div class="perturbation-theory">
                <div class="perturbation-step">
                  <h4>相互作用项的处理</h4>
                  <div class="step-content">
                    <p><strong>完整Landau泛函：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\psi] = \int d^d r \left[ \frac{1}{2}r\psi^2 + \frac{1}{2}K(\nabla\psi)^2 + \frac{u}{4!}\psi^4 + \frac{v}{6!}\psi^6 + \cdots \right]" :inline="false" />
                    </div>
                    
                    <p><strong>微扰参数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g = \frac{u}{(k_B T)^{d/2-1}} \quad \text{(无量纲耦合常数)}" :inline="false" />
                    </div>
                    
                    <p><strong>展开方案：</strong></p>
                    <ul>
                      <li>零阶：高斯理论</li>
                      <li>一阶：单圈修正</li>
                      <li>二阶：双圈修正</li>
                      <li>高阶：多圈贡献</li>
                    </ul>
                  </div>
                </div>
                
                <div class="perturbation-step">
                  <h4>Feynman图技术</h4>
                  <div class="step-content">
                    <p><strong>传播子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_0(\vec{k}) = \frac{1}{r + Kk^2}" :inline="false" />
                    </div>
                    
                    <p><strong>顶点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_4 = -u, \quad V_6 = -v" :inline="false" />
                    </div>
                    
                    <p><strong>单圈自能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Sigma^{(1)}(\vec{k}) = \frac{u}{2} \int \frac{d^d q}{(2\pi)^d} G_0(\vec{q})" :inline="false" />
                    </div>
                    
                    <p><strong>修正传播子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(\vec{k}) = \frac{1}{r + Kk^2 + \Sigma(\vec{k})}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="perturbation-step">
                  <h4>红外发散问题</h4>
                  <div class="step-content">
                    <p><strong>发散的起源：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\int_0^{\Lambda} \frac{d^d k}{(2\pi)^d} \frac{1}{k^2} \sim \begin{cases} \text{收敛} & d > 2 \\ \ln\Lambda & d = 2 \\ \text{发散} & d < 2 \end{cases}" :inline="false" />
                    </div>
                    
                    <p><strong>临界维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d_c = 4 \quad \text{(上临界维度)}" :inline="false" />
                    </div>
                    
                    <p><strong>ε展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\varepsilon = 4 - d, \quad g \sim \varepsilon" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="non-gaussian-card corrections">
            <h3>📊 临界指数的修正</h3>
            <div class="non-gaussian-content">
              <div class="critical-corrections">
                <div class="correction-item">
                  <h4>一阶修正结果</h4>
                  <div class="correction-content">
                    <p><strong>比热指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha = 2 - d/2 + \frac{\varepsilon}{6} + O(\varepsilon^2)" :inline="false" />
                    </div>
                    
                    <p><strong>序参量指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta = \frac{1}{2} - \frac{\varepsilon}{12} + O(\varepsilon^2)" :inline="false" />
                    </div>
                    
                    <p><strong>磁化率指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = 1 + \frac{\varepsilon}{6} + O(\varepsilon^2)" :inline="false" />
                    </div>
                    
                    <p><strong>相关长度指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\nu = \frac{1}{2} + \frac{\varepsilon}{12} + O(\varepsilon^2)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="correction-item">
                  <h4>标度律的验证</h4>
                  <div class="correction-content">
                    <p><strong>Rushbrooke关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha + 2\beta + \gamma = 2" :inline="false" />
                    </div>
                    
                    <p><strong>验证：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="(2-d/2+\varepsilon/6) + 2(1/2-\varepsilon/12) + (1+\varepsilon/6) = 2 \quad \checkmark" :inline="false" />
                    </div>
                    
                    <p><strong>Fisher关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = \nu(2-\eta)" :inline="false" />
                    </div>
                    
                    <p><strong>异常维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta = \frac{\varepsilon^2}{54} + O(\varepsilon^3)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="correction-item">
                  <h4>三维系统的预测</h4>
                  <div class="correction-content">
                    <p><strong>ε = 1的结果：</strong></p>
                    <div class="comparison-table">
                      <div class="table-header">
                        <span>指数</span>
                        <span>平均场</span>
                        <span>一阶修正</span>
                        <span>实验值</span>
                      </div>
                      <div class="table-row">
                        <span>α</span>
                        <span>0</span>
                        <span>0.17</span>
                        <span>0.11</span>
                      </div>
                      <div class="table-row">
                        <span>β</span>
                        <span>0.5</span>
                        <span>0.42</span>
                        <span>0.33</span>
                      </div>
                      <div class="table-row">
                        <span>γ</span>
                        <span>1</span>
                        <span>1.17</span>
                        <span>1.24</span>
                      </div>
                      <div class="table-row">
                        <span>ν</span>
                        <span>0.5</span>
                        <span>0.58</span>
                        <span>0.63</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群理论简介</h2>
      
      <div class="renormalization-group">
        <div class="rg-framework">
          <div class="rg-card concepts">
            <h3>🔄 基本概念</h3>
            <div class="rg-content">
              <div class="rg-concepts">
                <div class="concept-item">
                  <h4>标度变换</h4>
                  <div class="concept-content">
                    <p><strong>空间标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{r} \to b\vec{r}, \quad b > 1" :inline="false" />
                    </div>
                    
                    <p><strong>场的标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(\vec{r}) \to b^{-\Delta_\psi} \psi(b^{-1}\vec{r})" :inline="false" />
                    </div>
                    
                    <p><strong>标度维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta_\psi = \frac{d-2+\eta}{2}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="concept-item">
                  <h4>重整化变换</h4>
                  <div class="concept-content">
                    <p><strong>粗粒化过程：</strong></p>
                    <ul>
                      <li>积分掉短波长模式</li>
                      <li>重新标度坐标</li>
                      <li>重新定义耦合常数</li>
                    </ul>
                    
                    <p><strong>RG方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dg}{d\ell} = \beta(g), \quad \ell = \ln b" :inline="false" />
                    </div>
                    
                    <p><strong>β函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta(g) = -\varepsilon g + \frac{g^2}{2} + O(g^3)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="concept-item">
                  <h4>不动点分析</h4>
                  <div class="concept-content">
                    <p><strong>不动点条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta(g^*) = 0" :inline="false" />
                    </div>
                    
                    <p><strong>高斯不动点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g^*_{\text{Gauss}} = 0" :inline="false" />
                    </div>
                    
                    <p><strong>Wilson-Fisher不动点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g^*_{\text{WF}} = \varepsilon + O(\varepsilon^2)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="rg-card flows">
            <h3>🌊 RG流与相图</h3>
            <div class="rg-content">
              <div class="rg-flows">
                <div class="flow-item">
                  <h4>流线分析</h4>
                  <div class="flow-content">
                    <p><strong>线性化分析：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dg}{d\ell} \approx \lambda (g - g^*)" :inline="false" />
                    </div>
                    
                    <p><strong>特征指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda = \beta'(g^*) = \varepsilon + O(\varepsilon^2)" :inline="false" />
                    </div>
                    
                    <p><strong>稳定性：</strong></p>
                    <ul>
                      <li>λ > 0: 不稳定（排斥）</li>
                      <li>λ < 0: 稳定（吸引）</li>
                      <li>λ = 0: 边界情况</li>
                    </ul>
                  </div>
                </div>
                
                <div class="flow-item">
                  <h4>临界面</h4>
                  <div class="flow-content">
                    <p><strong>相关算符：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="y_t = \frac{1}{\nu} = 2 - \eta + O(\varepsilon)" :inline="false" />
                    </div>
                    
                    <p><strong>无关算符：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="y_h = \frac{d+2-\eta}{2} = \beta\delta" :inline="false" />
                    </div>
                    
                    <p><strong>边界算符：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="y_i = d - \Delta_i" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="flow-item">
                  <h4>普适性类</h4>
                  <div class="flow-content">
                    <p><strong>分类原则：</strong></p>
                    <ul>
                      <li>空间维度 d</li>
                      <li>序参量分量数 n</li>
                      <li>对称性</li>
                      <li>相互作用范围</li>
                    </ul>
                    
                    <p><strong>常见普适性类：</strong></p>
                    <div class="universality-classes">
                      <div class="class-item">
                        <span>Ising (n=1)</span>
                        <span>Z₂对称性</span>
                      </div>
                      <div class="class-item">
                        <span>XY (n=2)</span>
                        <span>U(1)对称性</span>
                      </div>
                      <div class="class-item">
                        <span>Heisenberg (n=3)</span>
                        <span>O(3)对称性</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>有限尺寸效应</h2>
      
      <div class="finite-size-effects">
        <div class="fse-framework">
          <div class="fse-card scaling">
            <h3>📏 有限尺寸标度</h3>
            <div class="fse-content">
              <div class="fse-scaling">
                <div class="scaling-item">
                  <h4>基本标度假设</h4>
                  <div class="scaling-content">
                    <p><strong>自由能标度形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f(t,h,L) = L^{-d} \tilde{f}(tL^{1/\nu}, hL^{\beta\delta/\nu})" :inline="false" />
                    </div>
                    
                    <p><strong>约化温度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="t = \frac{T-T_c}{T_c}" :inline="false" />
                    </div>
                    
                    <p><strong>标度变量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="x = tL^{1/\nu}, \quad y = hL^{\beta\delta/\nu}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="scaling-item">
                  <h4>热力学量的标度</h4>
                  <div class="scaling-content">
                    <p><strong>比热：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C(t,L) = L^{\alpha/\nu} \tilde{C}(tL^{1/\nu})" :inline="false" />
                    </div>
                    
                    <p><strong>磁化率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(t,L) = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})" :inline="false" />
                    </div>
                    
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m(t,h,L) = L^{-\beta/\nu} \tilde{m}(tL^{1/\nu}, hL^{\beta\delta/\nu})" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="scaling-item">
                  <h4>临界点的确定</h4>
                  <div class="scaling-content">
                    <p><strong>Binder累积量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="U_L = 1 - \frac{\langle m^4 \rangle}{3\langle m^2 \rangle^2}" :inline="false" />
                    </div>
                    
                    <p><strong>普适性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="U_L(T_c) = U^* \quad \text{(与L无关)}" :inline="false" />
                    </div>
                    
                    <p><strong>交叉点方法：</strong></p>
                    <ul>
                      <li>不同尺寸的U_L曲线交点</li>
                      <li>确定精确的T_c</li>
                      <li>提取临界指数</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="fse-card corrections">
            <h3>🔧 修正项分析</h3>
            <div class="fse-content">
              <div class="fse-corrections">
                <div class="correction-item">
                  <h4>解析修正</h4>
                  <div class="correction-content">
                    <p><strong>非奇异背景：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f_{\text{reg}}(t,h) = a_0 + a_1 t + a_2 t^2 + b_1 h + \cdots" :inline="false" />
                    </div>
                    
                    <p><strong>有限尺寸修正：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f(t,h,L) = f_{\text{sing}}(t,h,L) + f_{\text{reg}}(t,h) + O(L^{-d})" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="correction-item">
                  <h4>标度修正</h4>
                  <div class="correction-content">
                    <p><strong>无关算符贡献：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f(t,h,L) = L^{-d} \left[ \tilde{f}_0(x,y) + L^{-\omega} \tilde{f}_1(x,y) + \cdots \right]" :inline="false" />
                    </div>
                    
                    <p><strong>修正指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega = y_{\text{irr}} > 0" :inline="false" />
                    </div>
                    
                    <p><strong>实际拟合：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C(L) = C_{\infty} + aL^{-\omega} + bL^{-2\omega} + \cdots" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="correction-item">
                  <h4>边界条件效应</h4>
                  <div class="correction-content">
                    <p><strong>周期边界条件：</strong></p>
                    <ul>
                      <li>保持平移不变性</li>
                      <li>适合理论分析</li>
                      <li>数值模拟常用</li>
                    </ul>
                    
                    <p><strong>开放边界条件：</strong></p>
                    <ul>
                      <li>表面效应重要</li>
                      <li>实验更相关</li>
                      <li>分析更复杂</li>
                    </ul>
                    
                    <p><strong>边界标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f_{\text{surface}} \sim L^{d-1} t^{2-\alpha_s}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验中的涨落效应</h2>
      
      <div class="experimental-fluctuations">
        <div class="exp-framework">
          <div class="exp-card techniques">
            <h3>🔬 实验技术</h3>
            <div class="exp-content">
              <div class="exp-techniques">
                <div class="technique-item">
                  <h4>散射实验</h4>
                  <div class="technique-content">
                    <p><strong>中子散射：</strong></p>
                    <ul>
                      <li>磁涨落测量</li>
                      <li>动力学信息</li>
                      <li>q-ω分辨</li>
                    </ul>
                    
                    <p><strong>X射线散射：</strong></p>
                    <ul>
                      <li>结构涨落</li>
                      <li>电荷密度波</li>
                      <li>高分辨率</li>
                    </ul>
                    
                    <p><strong>光散射：</strong></p>
                    <ul>
                      <li>临界乳光</li>
                      <li>声子软化</li>
                      <li>实时测量</li>
                    </ul>
                  </div>
                </div>
                
                <div class="technique-item">
                  <h4>热力学测量</h4>
                  <div class="technique-content">
                    <p><strong>比热测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C \sim |T-T_c|^{-\alpha}" :inline="false" />
                    </div>
                    
                    <p><strong>磁化率测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi \sim |T-T_c|^{-\gamma}" :inline="false" />
                    </div>
                    
                    <p><strong>序参量测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m \sim |T-T_c|^{\beta}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="technique-item">
                  <h4>动力学测量</h4>
                  <div class="technique-content">
                    <p><strong>弛豫时间：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau \sim \xi^z \sim |T-T_c|^{-z\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>临界慢化：</strong></p>
                    <ul>
                      <li>响应函数测量</li>
                      <li>噪声谱分析</li>
                      <li>非线性响应</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="exp-card examples">
            <h3>📈 典型实验结果</h3>
            <div class="exp-content">
              <div class="exp-examples">
                <div class="example-item">
                  <h4>液气相变</h4>
                  <div class="example-content">
                    <p><strong>CO₂临界点：</strong></p>
                    <ul>
                      <li>T_c = 304.13 K</li>
                      <li>P_c = 73.8 bar</li>
                      <li>ρ_c = 467.6 kg/m³</li>
                    </ul>
                    
                    <p><strong>临界指数：</strong></p>
                    <div class="critical-exponents">
                      <div class="exponent-row">
                        <span>α = 0.11 ± 0.01</span>
                        <span>β = 0.325 ± 0.002</span>
                      </div>
                      <div class="exponent-row">
                        <span>γ = 1.239 ± 0.002</span>
                        <span>ν = 0.630 ± 0.001</span>
                      </div>
                    </div>
                    
                    <p><strong>与理论比较：</strong></p>
                    <ul>
                      <li>3D Ising普适性类</li>
                      <li>优秀的一致性</li>
                      <li>涨落效应显著</li>
                    </ul>
                  </div>
                </div>
                
                <div class="example-item">
                  <h4>磁性系统</h4>
                  <div class="example-content">
                    <p><strong>铁磁体：</strong></p>
                    <ul>
                      <li>Fe: T_c = 1043 K</li>
                      <li>Ni: T_c = 627 K</li>
                      <li>Gd: T_c = 293 K</li>
                    </ul>
                    
                    <p><strong>反铁磁体：</strong></p>
                    <ul>
                      <li>MnF₂: T_N = 67.3 K</li>
                      <li>FeF₂: T_N = 78.4 K</li>
                      <li>CoF₂: T_N = 37.7 K</li>
                    </ul>
                    
                    <p><strong>涨落观测：</strong></p>
                    <ul>
                      <li>临界散射</li>
                      <li>磁化率发散</li>
                      <li>比热异常</li>
                    </ul>
                  </div>
                </div>
                
                <div class="example-item">
                  <h4>超导体</h4>
                  <div class="example-content">
                    <p><strong>涨落效应：</strong></p>
                    <ul>
                      <li>Aslamazov-Larkin修正</li>
                      <li>Maki-Thompson修正</li>
                      <li>Lawrence-Doniach修正</li>
                    </ul>
                    
                    <p><strong>观测现象：</strong></p>
                    <ul>
                      <li>超导涨落电导</li>
                      <li>比热异常</li>
                      <li>磁化率异常</li>
                    </ul>
                    
                    <p><strong>高温超导：</strong></p>
                    <ul>
                      <li>强涨落效应</li>
                      <li>准二维特性</li>
                      <li>赝能隙现象</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>高级理论分析</h2>
      
      <div class="advanced-theory">
        <div class="theory-framework">
          <div class="theory-card field-theory">
            <h3>🔬 场论方法</h3>
            <div class="theory-content">
              <div class="field-theory-methods">
                <div class="method-item">
                  <h4>路径积分表述</h4>
                  <div class="method-content">
                    <p><strong>配分函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \int \mathcal{D}\psi \, e^{-S[\psi]/\hbar}" :inline="false" />
                    </div>
                    
                    <p><strong>有效作用量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_{\text{eff}}[\psi_c] = S[\psi_c] + \hbar \ln \det(\delta^2 S/\delta\psi^2)" :inline="false" />
                    </div>
                    
                    <p><strong>鞍点展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S[\psi] = S[\psi_c] + \frac{1}{2}\int d^d r \, \eta(r) G^{-1}(r,r') \eta(r') + \cdots" :inline="false" />
                    </div>
                    
                    <p><strong>高斯积分：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z_{\text{Gauss}} = (\det G^{-1})^{-1/2} e^{-S[\psi_c]/\hbar}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="method-item">
                  <h4>Wilsonian重整化</h4>
                  <div class="method-content">
                    <p><strong>动量壳积分：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \int \mathcal{D}\psi_< \mathcal{D}\psi_> \, e^{-S[\psi_<,\psi_>]}" :inline="false" />
                    </div>
                    
                    <p><strong>有效理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_{\text{eff}}[\psi_<] = -\ln \int \mathcal{D}\psi_> \, e^{-S[\psi_<,\psi_>]}" :inline="false" />
                    </div>
                    
                    <p><strong>β函数计算：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta(g) = \frac{dg}{d\ell} = -\varepsilon g + \frac{g^2}{2} - \frac{g^3}{6} + \cdots" :inline="false" />
                    </div>
                    
                    <p><strong>异常维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma_\psi(g) = \frac{d\ln Z_\psi}{d\ell} = \frac{g^2}{18} + O(g^3)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="method-item">
                  <h4>大N展开</h4>
                  <div class="method-content">
                    <p><strong>O(N)模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \int d^d r \left[ \frac{1}{2}(\nabla\vec{\phi})^2 + \frac{r}{2}\vec{\phi}^2 + \frac{u}{4N}(\vec{\phi}^2)^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>辅助场方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \int d^d r \left[ \frac{1}{2}(\nabla\vec{\phi})^2 + \frac{1}{2}\sigma\vec{\phi}^2 + \frac{N}{4u}(\sigma-r)^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>大N极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = 1 + \frac{2}{N} + O(N^{-2})" :inline="false" />
                    </div>
                    
                    <p><strong>球面模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\sum_{i=1}^N \phi_i^2 = N \quad \text{(约束条件)}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="theory-card conformal">
            <h3>🌐 共形场论</h3>
            <div class="theory-content">
              <div class="conformal-theory">
                <div class="conformal-item">
                  <h4>共形不变性</h4>
                  <div class="conformal-content">
                    <p><strong>共形变换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="x^\mu \to x'^\mu, \quad g_{\mu\nu}(x) \to \Omega^2(x) g_{\mu\nu}(x')" :inline="false" />
                    </div>
                    
                    <p><strong>标度维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="[\mathcal{O}] = \Delta, \quad \mathcal{O}(\lambda x) = \lambda^{-\Delta} \mathcal{O}(x)" :inline="false" />
                    </div>
                    
                    <p><strong>算符乘积展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\mathcal{O}_i(x) \mathcal{O}_j(0) = \sum_k C_{ijk}(x) \mathcal{O}_k(0)" :inline="false" />
                    </div>
                    
                    <p><strong>中心荷：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="c = \frac{3}{2\pi^2} \langle T_{\mu\nu}(x) T^{\mu\nu}(0) \rangle" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="conformal-item">
                  <h4>临界指数关系</h4>
                  <div class="conformal-content">
                    <p><strong>标度关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta_\sigma = \frac{d-2+\eta}{2}, \quad \Delta_\varepsilon = d - \frac{1}{\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>共形权重：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="h = \frac{\Delta + s}{2}, \quad \bar{h} = \frac{\Delta - s}{2}" :inline="false" />
                    </div>
                    
                    <p><strong>Virasoro代数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="[L_m, L_n] = (m-n)L_{m+n} + \frac{c}{12}m(m^2-1)\delta_{m+n,0}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="conformal-item">
                  <h4>最小模型</h4>
                  <div class="conformal-content">
                    <p><strong>分类：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="c = 1 - \frac{6}{m(m+1)}, \quad m = 3,4,5,\ldots" :inline="false" />
                    </div>
                    
                    <p><strong>Ising模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="c = \frac{1}{2}, \quad \Delta_\sigma = \frac{1}{8}, \quad \Delta_\varepsilon = 1" :inline="false" />
                    </div>
                    
                    <p><strong>三态Potts：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="c = \frac{4}{5}, \quad \Delta_\sigma = \frac{1}{15}, \quad \Delta_\varepsilon = \frac{2}{3}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="theory-card nonequilibrium">
            <h3>⚡ 非平衡涨落</h3>
            <div class="theory-content">
              <div class="nonequilibrium-theory">
                <div class="neq-item">
                  <h4>动力学临界现象</h4>
                  <div class="neq-content">
                    <p><strong>Langevin方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial\psi}{\partial t} = -\Gamma \frac{\delta F}{\delta\psi} + \eta(r,t)" :inline="false" />
                    </div>
                    
                    <p><strong>噪声关联：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle \eta(r,t) \eta(r',t') \rangle = 2\Gamma k_B T \delta(r-r')\delta(t-t')" :inline="false" />
                    </div>
                    
                    <p><strong>动力学指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau \sim \xi^z, \quad z = 2 + \frac{\eta}{2} + O(\varepsilon)" :inline="false" />
                    </div>
                    
                    <p><strong>频率标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi''(\omega,q) = q^{-2+\eta} \tilde{\chi}''(\omega/q^z)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="neq-item">
                  <h4>量子动力学</h4>
                  <div class="neq-content">
                    <p><strong>Keldysh形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = S_+ - S_- + \int dt \, \psi_-(t) \dot{\psi}_+(t)" :inline="false" />
                    </div>
                    
                    <p><strong>响应函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G^R(\omega,q) = \frac{1}{\omega - \varepsilon_q + i\Gamma_q}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落耗散定理：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G^<(\omega,q) = 2if(\omega) \text{Im} G^R(\omega,q)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="neq-item">
                  <h4>老化现象</h4>
                  <div class="neq-content">
                    <p><strong>两时间关联：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C(t,t_w) = \langle \psi(t) \psi(t_w) \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>老化标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C(t,t_w) = t_w^{-b} f(t/t_w)" :inline="false" />
                    </div>
                    
                    <p><strong>响应函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="R(t,t_w) = \frac{\delta \langle \psi(t) \rangle}{\delta h(t_w)}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验技术详解</h2>
      
      <div class="experimental-details">
        <div class="exp-detail-framework">
          <div class="exp-detail-card scattering">
            <h3>🔍 散射技术</h3>
            <div class="exp-detail-content">
              <div class="scattering-techniques">
                <div class="scattering-item">
                  <h4>中子散射</h4>
                  <div class="scattering-content">
                    <p><strong>散射截面：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{d^2\sigma}{d\Omega dE} = \frac{k_f}{k_i} \frac{1}{2\pi\hbar} S(q,\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>动力学结构因子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(q,\omega) = \int dt \, e^{i\omega t} \langle \rho_q(t) \rho_{-q}(0) \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>临界散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(q) = \frac{A}{q^2 + \xi^{-2}} \sim |T-T_c|^{-\gamma}" :inline="false" />
                    </div>
                    
                    <p><strong>实验配置：</strong></p>
                    <ul>
                      <li>三轴谱仪：精确q-ω测量</li>
                      <li>飞行时间：宽能量范围</li>
                      <li>背散射：高能量分辨</li>
                      <li>自旋回波：准弹性散射</li>
                    </ul>
                  </div>
                </div>
                
                <div class="scattering-item">
                  <h4>X射线散射</h4>
                  <div class="scattering-content">
                    <p><strong>汤姆逊散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f = r_e \sum_j e^{iq \cdot r_j}" :inline="false" />
                    </div>
                    
                    <p><strong>共振散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f'(\omega) = \frac{f_0 \omega_0^2}{\omega_0^2 - \omega^2 - i\gamma\omega}" :inline="false" />
                    </div>
                    
                    <p><strong>同步辐射优势：</strong></p>
                    <ul>
                      <li>高亮度：强涨落信号</li>
                      <li>可调能量：共振增强</li>
                      <li>高相干性：相干散射</li>
                      <li>时间分辨：动力学研究</li>
                    </ul>
                    
                    <p><strong>XPCS技术：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g^{(2)}(\tau) = \frac{\langle I(t)I(t+\tau) \rangle}{\langle I(t) \rangle^2}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="scattering-item">
                  <h4>光散射</h4>
                  <div class="scattering-content">
                    <p><strong>Rayleigh散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I \propto \left| \frac{\partial\varepsilon}{\partial\rho} \right|^2 \langle (\delta\rho)^2 \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>Brillouin散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega_B = \pm v_s q = \pm v_s \frac{4\pi n}{\lambda} \sin(\theta/2)" :inline="false" />
                    </div>
                    
                    <p><strong>Raman散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I \propto \left| \frac{\partial\alpha}{\partial Q} \right|^2 \langle Q^2 \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>临界乳光：</strong></p>
                    <ul>
                      <li>密度涨落散射</li>
                      <li>临界指数测量</li>
                      <li>相关长度确定</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="exp-detail-card spectroscopy">
            <h3>📊 谱学技术</h3>
            <div class="exp-detail-content">
              <div class="spectroscopy-techniques">
                <div class="spectro-item">
                  <h4>核磁共振</h4>
                  <div class="spectro-content">
                    <p><strong>Knight位移：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="K = \frac{H_{\text{int}}}{H_{\text{ext}}} = A \chi_{\text{spin}}" :inline="false" />
                    </div>
                    
                    <p><strong>弛豫时间：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{1}{T_1} \propto \frac{\chi''(\omega_L)}{\omega_L}" :inline="false" />
                    </div>
                    
                    <p><strong>临界慢化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_1 \sim |T-T_c|^{-x}, \quad x = \gamma - 2\beta" :inline="false" />
                    </div>
                    
                    <p><strong>涨落测量：</strong></p>
                    <ul>
                      <li>自旋涨落：磁性系统</li>
                      <li>电荷涨落：超导体</li>
                      <li>轨道涨落：多轨道系统</li>
                    </ul>
                  </div>
                </div>
                
                <div class="spectro-item">
                  <h4>μ子自旋旋转</h4>
                  <div class="spectro-content">
                    <p><strong>μ子极化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P_z(t) = P_0 \cos(\gamma_\mu B t + \phi)" :inline="false" />
                    </div>
                    
                    <p><strong>局域场分布：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P(t) = \int dB \, p(B) \cos(\gamma_\mu B t)" :inline="false" />
                    </div>
                    
                    <p><strong>涨落率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda = \gamma_\mu^2 \langle \Delta B^2 \rangle \tau_c" :inline="false" />
                    </div>
                    
                    <p><strong>应用领域：</strong></p>
                    <ul>
                      <li>磁有序参数</li>
                      <li>超导能隙</li>
                      <li>磁涨落动力学</li>
                    </ul>
                  </div>
                </div>
                
                <div class="spectro-item">
                  <h4>电子自旋共振</h4>
                  <div class="spectro-content">
                    <p><strong>共振条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="h\nu = g\mu_B B" :inline="false" />
                    </div>
                    
                    <p><strong>线宽：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta B \propto T_2^{-1} \propto \sum_q S(q)" :inline="false" />
                    </div>
                    
                    <p><strong>临界行为：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta B \sim |T-T_c|^{-\gamma}" :inline="false" />
                    </div>
                    
                    <p><strong>自旋动力学：</strong></p>
                    <ul>
                      <li>交换窄化</li>
                      <li>临界慢化</li>
                      <li>维度交叉</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="exp-detail-card microscopy">
            <h3>🔬 显微技术</h3>
            <div class="exp-detail-content">
              <div class="microscopy-techniques">
                <div class="micro-item">
                  <h4>扫描隧道显微镜</h4>
                  <div class="micro-content">
                    <p><strong>隧道电流：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I \propto \int_{-eV}^0 dE \, \rho_s(E) \rho_t(E-eV) T(E,V)" :inline="false" />
                    </div>
                    
                    <p><strong>态密度测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dI}{dV} \propto \rho_s(eV)" :inline="false" />
                    </div>
                    
                    <p><strong>涨落观测：</strong></p>
                    <ul>
                      <li>电荷密度波</li>
                      <li>超导能隙涨落</li>
                      <li>磁畴涨落</li>
                    </ul>
                    
                    <p><strong>空间分辨：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\delta r \sim \sqrt{\frac{\hbar}{2m\phi}} \sim 1 \text{ Å}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="micro-item">
                  <h4>原子力显微镜</h4>
                  <div class="micro-content">
                    <p><strong>力梯度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = -\frac{\partial U}{\partial z}" :inline="false" />
                    </div>
                    
                    <p><strong>频率位移：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta f = -\frac{f_0}{2k} \frac{\partial F}{\partial z}" :inline="false" />
                    </div>
                    
                    <p><strong>表面涨落：</strong></p>
                    <ul>
                      <li>形貌涨落</li>
                      <li>弹性模量涨落</li>
                      <li>相分离动力学</li>
                    </ul>
                  </div>
                </div>
                
                <div class="micro-item">
                  <h4>磁力显微镜</h4>
                  <div class="micro-content">
                    <p><strong>磁偶极相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_z = \mu_0 m_z \frac{\partial H_z}{\partial z}" :inline="false" />
                    </div>
                    
                    <p><strong>磁畴观测：</strong></p>
                    <ul>
                      <li>畴壁动力学</li>
                      <li>涡旋结构</li>
                      <li>磁涨落成像</li>
                    </ul>
                    
                    <p><strong>分辨率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\delta r \sim h + r_{\text{tip}}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展与应用</h2>
      
      <div class="modern-developments">
        <div class="modern-framework">
          <div class="modern-card quantum">
            <h3>⚛️ 量子涨落</h3>
            <div class="modern-content">
              <div class="quantum-fluctuations">
                <div class="quantum-item">
                  <h4>量子相变</h4>
                  <div class="quantum-content">
                    <p><strong>基本特征：</strong></p>
                    <ul>
                      <li>T = 0时发生</li>
                      <li>量子涨落驱动</li>
                      <li>调节参数：压力、磁场、掺杂</li>
                    </ul>
                    
                    <p><strong>量子临界点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = H_0 + g H_{\text{pert}}" :inline="false" />
                    </div>
                    
                    <p><strong>标度理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="z = \frac{\Delta_{\text{gap}}}{\Delta_{\xi}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>量子临界现象</h4>
                  <div class="quantum-content">
                    <p><strong>有限温度标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F(g,T) = T^{(d+z)/z} \tilde{F}(g/T^{1/(z\nu)})" :inline="false" />
                    </div>
                    
                    <p><strong>量子-经典交叉：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T^* \sim |g-g_c|^{z\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>应用实例：</strong></p>
                    <ul>
                      <li>重费米子系统</li>
                      <li>高温超导体</li>
                      <li>量子磁体</li>
                    </ul>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>量子多体疤痕</h4>
                  <div class="quantum-content">
                    <p><strong>特殊本征态：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi_n\rangle = \sum_k c_{nk} |k\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>周期性复活：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\langle\psi(t)|\psi(0)\rangle|^2 = \left|\sum_n |c_n|^2 e^{-iE_n t/\hbar}\right|^2" :inline="false" />
                    </div>
                    
                    <p><strong>实验观测：</strong></p>
                    <ul>
                      <li>Rydberg原子阵列</li>
                      <li>超冷原子系统</li>
                      <li>量子模拟器</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modern-card topological">
            <h3>🌀 拓扑涨落</h3>
            <div class="modern-content">
              <div class="topological-fluctuations">
                <div class="topo-item">
                  <h4>拓扑缺陷</h4>
                  <div class="topo-content">
                    <p><strong>涡旋涨落：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_{\text{vortex}} = \pi K \ln(L/a)" :inline="false" />
                    </div>
                    
                    <p><strong>Kosterlitz-Thouless相变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_{KT} = \frac{\pi K}{2k_B}" :inline="false" />
                    </div>
                    
                    <p><strong>涡旋对解离：</strong></p>
                    <ul>
                      <li>束缚态 → 自由涡旋</li>
                      <li>指数关联 → 代数关联</li>
                      <li>无穷阶相变</li>
                    </ul>
                  </div>
                </div>
                
                <div class="topo-item">
                  <h4>拓扑相变</h4>
                  <div class="topo-content">
                    <p><strong>拓扑不变量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\nu = \frac{1}{2\pi} \int dk \, \partial_k \phi_k" :inline="false" />
                    </div>
                    
                    <p><strong>边界态：</strong></p>
                    <ul>
                      <li>体-边对应</li>
                      <li>受拓扑保护</li>
                      <li>无能隙激发</li>
                    </ul>
                    
                    <p><strong>实验实现：</strong></p>
                    <ul>
                      <li>量子霍尔效应</li>
                      <li>拓扑绝缘体</li>
                      <li>拓扑超导体</li>
                    </ul>
                  </div>
                </div>
                
                <div class="topo-item">
                  <h4>拓扑序</h4>
                  <div class="topo-content">
                    <p><strong>基态简并：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="D = \text{tr}(\rho^n) \quad \text{(拓扑纠缠熵)}" :inline="false" />
                    </div>
                    
                    <p><strong>任意子激发：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi\rangle \to e^{i\theta} |\psi\rangle \quad \text{(非阿贝尔统计)}" :inline="false" />
                    </div>
                    
                    <p><strong>量子计算应用：</strong></p>
                    <ul>
                      <li>拓扑量子比特</li>
                      <li>容错量子计算</li>
                      <li>Majorana费米子</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="modern-card computational">
            <h3>💻 计算方法</h3>
            <div class="modern-content">
              <div class="computational-methods">
                <div class="comp-item">
                  <h4>蒙特卡罗方法</h4>
                  <div class="comp-content">
                    <p><strong>Metropolis算法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P(\text{accept}) = \min(1, e^{-\Delta E/k_B T})" :inline="false" />
                    </div>
                    
                    <p><strong>集团算法：</strong></p>
                    <ul>
                      <li>Swendsen-Wang</li>
                      <li>Wolff算法</li>
                      <li>减少临界慢化</li>
                    </ul>
                    
                    <p><strong>有限尺寸分析：</strong></p>
                    <ul>
                      <li>标度拟合</li>
                      <li>临界指数提取</li>
                      <li>普适性验证</li>
                    </ul>
                  </div>
                </div>
                
                <div class="comp-item">
                  <h4>密度矩阵重整化群</h4>
                  <div class="comp-content">
                    <p><strong>DMRG方法：</strong></p>
                    <ul>
                      <li>一维强关联系统</li>
                      <li>基态和低激发态</li>
                      <li>高精度计算</li>
                    </ul>
                    
                    <p><strong>张量网络：</strong></p>
                    <ul>
                      <li>PEPS (二维)</li>
                      <li>MERA (多尺度)</li>
                      <li>量子纠缠描述</li>
                    </ul>
                  </div>
                </div>
                
                <div class="comp-item">
                  <h4>机器学习方法</h4>
                  <div class="comp-content">
                    <p><strong>神经网络：</strong></p>
                    <ul>
                      <li>相变识别</li>
                      <li>序参量学习</li>
                      <li>临界点定位</li>
                    </ul>
                    
                    <p><strong>变分方法：</strong></p>
                    <ul>
                      <li>神经网络波函数</li>
                      <li>变分蒙特卡罗</li>
                      <li>量子多体系统</li>
                    </ul>
                  </div>
                </div>
                
                <div class="comp-item">
                  <h4>量子算法</h4>
                  <div class="comp-content">
                    <p><strong>变分量子本征求解器：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_0 = \min_\theta \langle\psi(\theta)|H|\psi(\theta)\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>量子近似优化算法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi(\gamma,\beta)\rangle = \prod_{i=1}^p e^{-i\beta_i H_B} e^{-i\gamma_i H_C} |+\rangle^{\otimes n}" :inline="false" />
                    </div>
                    
                    <p><strong>应用前景：</strong></p>
                    <ul>
                      <li>量子多体问题</li>
                      <li>相变研究</li>
                      <li>材料设计</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>总结与展望</h2>
      
      <div class="summary-section">
        <div class="summary-framework">
          <div class="summary-card key-concepts">
            <h3>🎯 核心概念</h3>
            <div class="summary-content">
              <div class="key-points">
                <div class="point-item">
                  <h4>涨落效应的层次</h4>
                  <ul>
                    <li>高斯涨落：线性响应理论</li>
                    <li>非高斯涨落：微扰展开</li>
                    <li>强涨落：重整化群</li>
                    <li>量子涨落：零点运动</li>
                  </ul>
                </div>
                
                <div class="point-item">
                  <h4>理论方法</h4>
                  <ul>
                    <li>场论方法：路径积分</li>
                    <li>重整化群：标度理论</li>
                    <li>共形场论：临界现象</li>
                    <li>数值方法：蒙特卡罗</li>
                  </ul>
                </div>
                
                <div class="point-item">
                  <h4>实验技术</h4>
                  <ul>
                    <li>散射：结构和动力学</li>
                    <li>谱学：局域探测</li>
                    <li>显微：实空间成像</li>
                    <li>输运：宏观响应</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div class="summary-card future-directions">
            <h3>🚀 未来方向</h3>
            <div class="summary-content">
              <div class="future-topics">
                <div class="topic-item">
                  <h4>量子材料</h4>
                  <ul>
                    <li>拓扑量子材料</li>
                    <li>强关联电子系统</li>
                    <li>二维材料</li>
                    <li>人工量子结构</li>
                  </ul>
                </div>
                
                <div class="topic-item">
                  <h4>非平衡物理</h4>
                  <ul>
                    <li>驱动量子系统</li>
                    <li>多体局域化</li>
                    <li>时间晶体</li>
                    <li>量子热化</li>
                  </ul>
                </div>
                
                <div class="topic-item">
                  <h4>计算技术</h4>
                  <ul>
                    <li>量子计算</li>
                    <li>机器学习</li>
                    <li>高性能计算</li>
                    <li>数据科学</li>
                  </ul>
                </div>
                
                <div class="topic-item">
                  <h4>交叉领域</h4>
                  <ul>
                    <li>生物物理</li>
                    <li>软物质</li>
                    <li>量子信息</li>
                    <li>复杂网络</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.non-gaussian-framework, .rg-framework, .fse-framework, .exp-framework, .modern-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.non-gaussian-card, .rg-card, .fse-card, .exp-card, .modern-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.non-gaussian-card.perturbation {
  border-left: 5px solid #8b5cf6;
}

.non-gaussian-card.corrections {
  border-left: 5px solid #06b6d4;
}

.rg-card.concepts {
  border-left: 5px solid #10b981;
}

.rg-card.flows {
  border-left: 5px solid #f59e0b;
}

.fse-card.scaling {
  border-left: 5px solid #ef4444;
}

.fse-card.corrections {
  border-left: 5px solid #84cc16;
}

.exp-card.techniques {
  border-left: 5px solid #ec4899;
}

.exp-card.examples {
  border-left: 5px solid #f97316;
}

.modern-card.quantum {
  border-left: 5px solid #6366f1;
}

.modern-card.topological {
  border-left: 5px solid #14b8a6;
}

.modern-card.computational {
  border-left: 5px solid #f43f5e;
}

.non-gaussian-card h3, .rg-card h3, .fse-card h3, .exp-card h3, .modern-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.perturbation-theory, .critical-corrections, .rg-concepts, .rg-flows, .fse-scaling, .fse-corrections, .exp-techniques, .exp-examples, .quantum-fluctuations, .topological-fluctuations, .computational-methods {
  display: grid;
  gap: 1.5rem;
}

.perturbation-step, .correction-item, .concept-item, .flow-item, .scaling-item, .technique-item, .example-item, .quantum-item, .topo-item, .comp-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.perturbation-step h4, .correction-item h4, .concept-item h4, .flow-item h4, .scaling-item h4, .technique-item h4, .example-item h4, .quantum-item h4, .topo-item h4, .comp-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.comparison-table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.table-header {
  display: contents;
  font-weight: 600;
  color: #374151;
}

.table-row {
  display: contents;
}

.table-header span, .table-row span {
  padding: 0.5rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.universality-classes, .critical-exponents {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.class-item, .exponent-row {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e2e8f0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .non-gaussian-framework, .rg-framework, .fse-framework, .exp-framework, .modern-framework {
    grid-template-columns: 1fr;
  }
  
  .comparison-table {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>