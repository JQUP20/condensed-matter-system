<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.3 多分量情况：越多越好</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">多分量系统</span>
        <span class="reading-time">阅读时间：35分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        当序参量具有多个分量时，系统的相变行为会发生显著变化。
        多分量序参量不仅带来了更丰富的对称性，还导致了新的相变类型和临界现象。
        本章将探讨O(n)模型、非阿贝尔对称性破缺、以及多分量系统中的特殊现象。
      </p>
    </div>

    <div class="content-section">
      <h2>O(n)模型的基本理论</h2>
      
      <div class="on-model-theory">
        <div class="on-framework">
          <div class="on-card basic">
            <h3>🎯 基本设定</h3>
            <div class="on-content">
              <div class="basic-setup">
                <div class="setup-item">
                  <h4>序参量与对称性</h4>
                  <div class="setup-content">
                    <p><strong>n分量序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{\psi}(\vec{r}) = (\psi_1, \psi_2, \ldots, \psi_n)" :inline="false" />
                    </div>
                    
                    <p><strong>O(n)对称性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{\psi} \to O \vec{\psi}, \quad O \in O(n)" :inline="false" />
                    </div>
                    
                    <p><strong>不变量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\vec{\psi}|^2 = \sum_{i=1}^n \psi_i^2" :inline="false" />
                    </div>
                    
                    <p><strong>常见情况：</strong></p>
                    <ul>
                      <li>n = 1: Ising模型 (Z₂对称性)</li>
                      <li>n = 2: XY模型 (U(1)对称性)</li>
                      <li>n = 3: Heisenberg模型 (O(3)对称性)</li>
                      <li>n → ∞: 球形模型</li>
                    </ul>
                  </div>
                </div>
                
                <div class="setup-item">
                  <h4>Landau泛函</h4>
                  <div class="setup-content">
                    <p><strong>一般形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\vec{\psi}] = \int d^d r \left[ \frac{1}{2}r|\vec{\psi}|^2 + \frac{1}{2}K|\nabla\vec{\psi}|^2 + \frac{u}{4!}(|\vec{\psi}|^2)^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>对称性约束：</strong></p>
                    <ul>
                      <li>只依赖于O(n)不变量</li>
                      <li>梯度项的形式</li>
                      <li>高阶项的结构</li>
                    </ul>
                    
                    <p><strong>平均场解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\vec{\psi}_0|^2 = \begin{cases} 0 & r > 0 \\ -\frac{6r}{u} & r < 0 \end{cases}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="setup-item">
                  <h4>自发对称破缺</h4>
                  <div class="setup-content">
                    <p><strong>基态简并：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\vec{\psi}_0| = \text{const}, \quad \text{方向任意}" :inline="false" />
                    </div>
                    
                    <p><strong>Goldstone模式：</strong></p>
                    <ul>
                      <li>连续对称性破缺</li>
                      <li>无能隙集体激发</li>
                      <li>n-1个Goldstone玻色子</li>
                    </ul>
                    
                    <p><strong>剩余对称性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="O(n) \to O(n-1)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="on-card fluctuations">
            <h3>🌊 涨落效应</h3>
            <div class="on-content">
              <div class="fluctuation-analysis">
                <div class="fluct-item">
                  <h4>高斯涨落</h4>
                  <div class="fluct-content">
                    <p><strong>传播子矩阵：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_{ij}(\vec{k}) = \frac{\delta_{ij}}{r + Kk^2}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落贡献：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle|\delta\vec{\psi}|^2\rangle = n \int \frac{d^d k}{(2\pi)^d} \frac{k_B T}{r + Kk^2}" :inline="false" />
                    </div>
                    
                    <p><strong>n依赖性：</strong></p>
                    <ul>
                      <li>涨落强度 ∝ n</li>
                      <li>更多分量 → 更强涨落</li>
                      <li>平均场理论的有效性下降</li>
                    </ul>
                  </div>
                </div>
                
                <div class="fluct-item">
                  <h4>Ginzburg判据</h4>
                  <div class="fluct-content">
                    <p><strong>修正的判据：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i^{(n)} = n \frac{k_B T_c u}{r_0^2 \xi_0^d}" :inline="false" />
                    </div>
                    
                    <p><strong>n的影响：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i^{(n)} = n \cdot G_i^{(1)}" :inline="false" />
                    </div>
                    
                    <p><strong>物理含义：</strong></p>
                    <ul>
                      <li>n越大，涨落越重要</li>
                      <li>平均场理论适用范围缩小</li>
                      <li>需要更高维度或更长程相互作用</li>
                    </ul>
                  </div>
                </div>
                
                <div class="fluct-item">
                  <h4>大n极限</h4>
                  <div class="fluct-content">
                    <p><strong>1/n展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g = \frac{u}{n}, \quad \text{固定g}" :inline="false" />
                    </div>
                    
                    <p><strong>主导图：</strong></p>
                    <ul>
                      <li>平面图贡献</li>
                      <li>自能的几何级数</li>
                      <li>可控的微扰展开</li>
                    </ul>
                    
                    <p><strong>临界指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = 1 + \frac{2}{n} + O(n^{-2})" :inline="false" />
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
      <h2>子主题导航</h2>
      
      <div class="subtopic-navigation">
        <div class="nav-grid">
          <div class="nav-card" @click="navigateToSubtopic('5.3.1')">
            <div class="nav-icon">🔄</div>
            <div class="nav-content">
              <h3>5.3.1 O(2)模型中的相位模式</h3>
              <p>探讨XY模型中的相位涨落、拓扑激发和Kosterlitz-Thouless相变</p>
              <div class="nav-tags">
                <span class="tag">相位涨落</span>
                <span class="tag">拓扑相变</span>
                <span class="tag">涡旋</span>
              </div>
            </div>
            <div class="nav-arrow">→</div>
          </div>
          
          <div class="nav-card" @click="navigateToSubtopic('5.3.2')">
            <div class="nav-icon">🔧</div>
            <div class="nav-content">
              <h3>5.3.2 Anderson-Higgs机制</h3>
              <p>研究规范场与标量场耦合系统中的质量生成机制和相变现象</p>
              <div class="nav-tags">
                <span class="tag">规范对称性</span>
                <span class="tag">质量生成</span>
                <span class="tag">Higgs机制</span>
              </div>
            </div>
            <div class="nav-arrow">→</div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>临界指数的n依赖性</h2>
      
      <div class="critical-exponents">
        <div class="exponents-framework">
          <div class="exponents-card theory">
            <h3>📊 理论预测</h3>
            <div class="exponents-content">
              <div class="theory-predictions">
                <div class="prediction-item">
                  <h4>ε展开结果</h4>
                  <div class="prediction-content">
                    <p><strong>一阶修正：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = 1 + \frac{\varepsilon}{n+2} + O(\varepsilon^2)" :inline="false" />
                    </div>
                    
                    <div class="formula-block">
                      <katex-element expression="\nu = \frac{1}{2} + \frac{\varepsilon}{2(n+2)} + O(\varepsilon^2)" :inline="false" />
                    </div>
                    
                    <div class="formula-block">
                      <katex-element expression="\eta = \frac{\varepsilon^2}{2(n+2)^2} + O(\varepsilon^3)" :inline="false" />
                    </div>
                    
                    <p><strong>n依赖性：</strong></p>
                    <ul>
                      <li>n增大 → 修正减小</li>
                      <li>趋向平均场值</li>
                      <li>大n极限的一致性</li>
                    </ul>
                  </div>
                </div>
                
                <div class="prediction-item">
                  <h4>特殊情况</h4>
                  <div class="prediction-content">
                    <p><strong>n = 1 (Ising)：</strong></p>
                    <div class="exponent-values">
                      <div class="value-row">
                        <span>γ = 1 + ε/3</span>
                        <span>ν = 1/2 + ε/6</span>
                      </div>
                    </div>
                    
                    <p><strong>n = 2 (XY)：</strong></p>
                    <div class="exponent-values">
                      <div class="value-row">
                        <span>γ = 1 + ε/4</span>
                        <span>ν = 1/2 + ε/8</span>
                      </div>
                    </div>
                    
                    <p><strong>n = 3 (Heisenberg)：</strong></p>
                    <div class="exponent-values">
                      <div class="value-row">
                        <span>γ = 1 + ε/5</span>
                        <span>ν = 1/2 + ε/10</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="prediction-item">
                  <h4>大n行为</h4>
                  <div class="prediction-content">
                    <p><strong>1/n展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = 1 + \frac{2}{n} + O(n^{-2})" :inline="false" />
                    </div>
                    
                    <div class="formula-block">
                      <katex-element expression="\nu = \frac{1}{2} + \frac{1}{n} + O(n^{-2})" :inline="false" />
                    </div>
                    
                    <p><strong>球形模型极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lim_{n \to \infty} \gamma = 1, \quad \lim_{n \to \infty} \nu = \frac{1}{2}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="exponents-card experimental">
            <h3>🧪 实验验证</h3>
            <div class="exponents-content">
              <div class="experimental-data">
                <div class="data-item">
                  <h4>三维系统实验值</h4>
                  <div class="data-content">
                    <div class="comparison-table">
                      <div class="table-header">
                        <span>模型</span>
                        <span>γ (理论)</span>
                        <span>γ (实验)</span>
                        <span>ν (理论)</span>
                        <span>ν (实验)</span>
                      </div>
                      <div class="table-row ising">
                        <span>Ising</span>
                        <span>1.24</span>
                        <span>1.237</span>
                        <span>0.63</span>
                        <span>0.630</span>
                      </div>
                      <div class="table-row xy">
                        <span>XY</span>
                        <span>1.32</span>
                        <span>1.316</span>
                        <span>0.67</span>
                        <span>0.669</span>
                      </div>
                      <div class="table-row heisenberg">
                        <span>Heisenberg</span>
                        <span>1.39</span>
                        <span>1.386</span>
                        <span>0.71</span>
                        <span>0.705</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="data-item">
                  <h4>实验系统</h4>
                  <div class="data-content">
                    <p><strong>Ising类：</strong></p>
                    <ul>
                      <li>液气相变</li>
                      <li>单轴磁体</li>
                      <li>二元合金</li>
                    </ul>
                    
                    <p><strong>XY类：</strong></p>
                    <ul>
                      <li>超流相变</li>
                      <li>超导相变</li>
                      <li>平面磁体</li>
                    </ul>
                    
                    <p><strong>Heisenberg类：</strong></p>
                    <ul>
                      <li>各向同性磁体</li>
                      <li>量子磁体</li>
                      <li>液晶相变</li>
                    </ul>
                  </div>
                </div>
                
                <div class="data-item">
                  <h4>精度分析</h4>
                  <div class="data-content">
                    <p><strong>理论-实验一致性：</strong></p>
                    <ul>
                      <li>相对误差 < 1%</li>
                      <li>普适性的验证</li>
                      <li>重整化群理论的成功</li>
                    </ul>
                    
                    <p><strong>系统误差：</strong></p>
                    <ul>
                      <li>有限尺寸效应</li>
                      <li>各向异性</li>
                      <li>杂质和缺陷</li>
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
      <h2>非线性σ模型</h2>
      
      <div class="sigma-model">
        <div class="sigma-framework">
          <div class="sigma-card formulation">
            <h3>🎯 模型构建</h3>
            <div class="sigma-content">
              <div class="model-formulation">
                <div class="formulation-item">
                  <h4>约束条件</h4>
                  <div class="formulation-content">
                    <p><strong>球面约束：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\vec{\psi}(\vec{r})|^2 = \rho_0 = \text{const}" :inline="false" />
                    </div>
                    
                    <p><strong>单位向量场：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{n}(\vec{r}) = \frac{\vec{\psi}(\vec{r})}{|\vec{\psi}(\vec{r})|}" :inline="false" />
                    </div>
                    
                    <p><strong>作用量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \frac{\rho_0 K}{2} \int d^d r \, (\nabla\vec{n})^2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="formulation-item">
                  <h4>低能有效理论</h4>
                  <div class="formulation-content">
                    <p><strong>Goldstone模式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{n}(\vec{r}) = \vec{n}_0 + \vec{\pi}(\vec{r})" :inline="false" />
                    </div>
                    
                    <p><strong>约束条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{n}_0 \cdot \vec{\pi} = 0, \quad |\vec{\pi}| \ll 1" :inline="false" />
                    </div>
                    
                    <p><strong>有效作用量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_{\text{eff}} = \frac{\rho_0 K}{2} \int d^d r \, (\nabla\vec{\pi})^2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="formulation-item">
                  <h4>拓扑项</h4>
                  <div class="formulation-content">
                    <p><strong>拓扑电荷密度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="q(\vec{r}) = \frac{1}{8\pi} \epsilon_{ijk} \vec{n} \cdot (\partial_i \vec{n} \times \partial_j \vec{n})" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑不变量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Q = \int d^2 r \, q(\vec{r}) \in \mathbb{Z}" :inline="false" />
                    </div>
                    
                    <p><strong>θ项：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_\theta = i\theta \int d^2 r \, q(\vec{r})" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="sigma-card renormalization">
            <h3>🔄 重整化分析</h3>
            <div class="sigma-content">
              <div class="rg-analysis">
                <div class="rg-item">
                  <h4>β函数</h4>
                  <div class="rg-content">
                    <p><strong>一圈计算：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta(g) = -\varepsilon g + \frac{n-2}{2\pi} g^2 + O(g^3)" :inline="false" />
                    </div>
                    
                    <p><strong>不动点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g^* = \frac{2\pi\varepsilon}{n-2} \quad (n > 2)" :inline="false" />
                    </div>
                    
                    <p><strong>临界维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d_c = 2 \quad \text{(下临界维度)}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="rg-item">
                  <h4>维度依赖性</h4>
                  <div class="rg-content">
                    <p><strong>d > 2：</strong></p>
                    <ul>
                      <li>有序相稳定</li>
                      <li>长程序</li>
                      <li>Goldstone模式</li>
                    </ul>
                    
                    <p><strong>d = 2：</strong></p>
                    <ul>
                      <li>边界情况</li>
                      <li>对数修正</li>
                      <li>Kosterlitz-Thouless相变</li>
                    </ul>
                    
                    <p><strong>d < 2：</strong></p>
                    <ul>
                      <li>无长程序</li>
                      <li>Mermin-Wagner定理</li>
                      <li>涨落主导</li>
                    </ul>
                  </div>
                </div>
                
                <div class="rg-item">
                  <h4>大n极限</h4>
                  <div class="rg-content">
                    <p><strong>鞍点方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \int D\vec{n} D\lambda \, e^{-S[\vec{n}] - i\lambda(|\vec{n}|^2 - \rho_0)}" :inline="false" />
                    </div>
                    
                    <p><strong>自洽方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle|\vec{n}|^2\rangle = \rho_0" :inline="false" />
                    </div>
                    
                    <p><strong>相变温度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_c = \frac{2\pi\rho_0 K}{n-2} \quad (d = 2)" :inline="false" />
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
      <h2>应用与实例</h2>
      
      <div class="applications">
        <div class="app-framework">
          <div class="app-card magnetic">
            <h3>🧲 磁性系统</h3>
            <div class="app-content">
              <div class="magnetic-systems">
                <div class="mag-item">
                  <h4>Heisenberg磁体</h4>
                  <div class="mag-content">
                    <p><strong>哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -J \sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j" :inline="false" />
                    </div>
                    
                    <p><strong>连续极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = \frac{J S^2}{2} \int d^d r \, (\nabla\vec{n})^2" :inline="false" />
                    </div>
                    
                    <p><strong>实验系统：</strong></p>
                    <ul>
                      <li>MnF₂ (反铁磁)</li>
                      <li>RbMnF₃ (铁磁)</li>
                      <li>La₂CuO₄ (量子磁体)</li>
                    </ul>
                  </div>
                </div>
                
                <div class="mag-item">
                  <h4>XY磁体</h4>
                  <div class="mag-content">
                    <p><strong>平面各向异性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -J \sum_{\langle i,j \rangle} (S_i^x S_j^x + S_i^y S_j^y)" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑激发：</strong></p>
                    <ul>
                      <li>涡旋和反涡旋</li>
                      <li>Kosterlitz-Thouless相变</li>
                      <li>准长程序</li>
                    </ul>
                    
                    <p><strong>实验实现：</strong></p>
                    <ul>
                      <li>超流氦薄膜</li>
                      <li>约瑟夫森结阵列</li>
                      <li>平面磁体</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="app-card condensed">
            <h3>🔬 凝聚态系统</h3>
            <div class="app-content">
              <div class="condensed-systems">
                <div class="cond-item">
                  <h4>超导体</h4>
                  <div class="cond-content">
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi = |\psi| e^{i\phi}" :inline="false" />
                    </div>
                    
                    <p><strong>U(1)对称性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi \to e^{i\alpha} \psi" :inline="false" />
                    </div>
                    
                    <p><strong>相位涨落：</strong></p>
                    <ul>
                      <li>Goldstone模式</li>
                      <li>Anderson-Higgs机制</li>
                      <li>Meissner效应</li>
                    </ul>
                  </div>
                </div>
                
                <div class="cond-item">
                  <h4>液晶</h4>
                  <div class="cond-content">
                    <p><strong>向列相：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{n}(\vec{r}), \quad |\vec{n}| = 1" :inline="false" />
                    </div>
                    
                    <p><strong>弹性能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2} \int d^3 r \, [K_1(\nabla \cdot \vec{n})^2 + K_2(\vec{n} \cdot \nabla \times \vec{n})^2 + K_3(\vec{n} \times \nabla \times \vec{n})^2]" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑缺陷：</strong></p>
                    <ul>
                      <li>点缺陷 (hedgehog)</li>
                      <li>线缺陷 (disclination)</li>
                      <li>壁缺陷</li>
                    </ul>
                  </div>
                </div>
                
                <div class="cond-item">
                  <h4>量子相变</h4>
                  <div class="cond-content">
                    <p><strong>量子O(n)模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = \frac{1}{2} \sum_i (\Pi_i^a)^2 + \frac{1}{2} \sum_{\langle i,j \rangle} (\phi_i^a - \phi_j^a)^2 + \frac{r}{2} \sum_i (\phi_i^a)^2 + \frac{u}{4!} \sum_i [(\phi_i^a)^2]^2" :inline="false" />
                    </div>
                    
                    <p><strong>量子临界点：</strong></p>
                    <ul>
                      <li>T = 0相变</li>
                      <li>量子涨落驱动</li>
                      <li>动力学指数z</li>
                    </ul>
                    
                    <p><strong>实验系统：</strong></p>
                    <ul>
                      <li>量子磁体</li>
                      <li>冷原子气体</li>
                      <li>重费米子系统</li>
                    </ul>
                  </div>
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
import { useRouter } from 'vue-router'
import KatexElement from '../KatexElement.vue'

const router = useRouter()

const navigateToSubtopic = (subtopic: string) => {
  const routeMap: { [key: string]: string } = {
    '5.3.1': '/chapter/5-3-1',
    '5.3.2': '/chapter/5-3-2'
  }
  
  const route = routeMap[subtopic]
  if (route) {
    router.push(route)
  }
}
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

.on-framework, .exponents-framework, .sigma-framework, .app-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.on-card, .exponents-card, .sigma-card, .app-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.on-card.basic {
  border-left: 5px solid #10b981;
}

.on-card.fluctuations {
  border-left: 5px solid #3b82f6;
}

.exponents-card.theory {
  border-left: 5px solid #8b5cf6;
}

.exponents-card.experimental {
  border-left: 5px solid #06b6d4;
}

.sigma-card.formulation {
  border-left: 5px solid #f59e0b;
}

.sigma-card.renormalization {
  border-left: 5px solid #ef4444;
}

.app-card.magnetic {
  border-left: 5px solid #ec4899;
}

.app-card.condensed {
  border-left: 5px solid #84cc16;
}

.on-card h3, .exponents-card h3, .sigma-card h3, .app-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.subtopic-navigation {
  margin: 2rem 0;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.nav-card {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: #4f46e5;
}

.nav-icon {
  font-size: 2rem;
  margin-right: 1rem;
  flex-shrink: 0;
}

.nav-content {
  flex: 1;
}

.nav-content h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.nav-content p {
  color: #6b7280;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.nav-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background: #f3f4f6;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.nav-arrow {
  font-size: 1.5rem;
  color: #9ca3af;
  margin-left: 1rem;
  flex-shrink: 0;
}

.basic-setup, .fluctuation-analysis, .theory-predictions, .experimental-data, .model-formulation, .rg-analysis, .magnetic-systems, .condensed-systems {
  display: grid;
  gap: 1.5rem;
}

.setup-item, .fluct-item, .prediction-item, .data-item, .formulation-item, .rg-item, .mag-item, .cond-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.setup-item h4, .fluct-item h4, .prediction-item h4, .data-item h4, .formulation-item h4, .rg-item h4, .mag-item h4, .cond-item h4 {
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
  grid-template-columns: repeat(5, 1fr);
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

.table-row.ising span:first-child {
  background: #fef2f2;
}

.table-row.xy span:first-child {
  background: #f0f9ff;
}

.table-row.heisenberg span:first-child {
  background: #f0fdf4;
}

.exponent-values {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.value-row {
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
  
  .on-framework, .exponents-framework, .sigma-framework, .app-framework {
    grid-template-columns: 1fr;
  }
  
  .nav-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-table {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>