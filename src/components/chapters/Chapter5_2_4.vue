<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2.4 Landau平均场理论的正确性</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">理论验证</span>
        <span class="reading-time">阅读时间：30分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Landau平均场理论作为相变理论的基石，其正确性和适用范围一直是凝聚态物理学中的重要问题。
        本节将深入分析该理论的成功之处、局限性以及现代理论对其的修正和完善，
        帮助我们全面理解平均场理论在相变研究中的地位和作用。
      </p>
    </div>

    <div class="content-section">
      <h2>理论成功的方面</h2>
      
      <div class="success-analysis">
        <div class="success-categories">
          <div class="category-card qualitative">
            <h3>🎯 定性预测的成功</h3>
            <div class="category-content">
              <div class="success-items">
                <div class="success-item">
                  <h4>相变的存在性</h4>
                  <div class="item-content">
                    <p><strong>正确预测：</strong></p>
                    <ul>
                      <li>二级相变的存在</li>
                      <li>临界温度的存在</li>
                      <li>序参量的连续变化</li>
                    </ul>
                    
                    <p><strong>物理图像：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2}a(T)\psi^2 + \frac{1}{4}b\psi^4" :inline="false" />
                    </div>
                    
                    <p>当 a(T) 改变符号时，系统发生相变。</p>
                  </div>
                </div>
                
                <div class="success-item">
                  <h4>对称性破缺</h4>
                  <div class="item-content">
                    <p><strong>核心概念：</strong></p>
                    <ul>
                      <li>自发对称性破缺机制</li>
                      <li>序参量的选择</li>
                      <li>简并基态的出现</li>
                    </ul>
                    
                    <p><strong>数学表述：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\psi\rangle = 0 \quad (T > T_c)" :inline="false" />
                      <katex-element expression="\langle\psi\rangle \neq 0 \quad (T < T_c)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="success-item">
                  <h4>普适性类别</h4>
                  <div class="item-content">
                    <p><strong>维度和对称性的作用：</strong></p>
                    <ul>
                      <li>空间维度的重要性</li>
                      <li>序参量对称性的分类</li>
                      <li>不同系统的相似行为</li>
                    </ul>
                    
                    <p><strong>普适性原理：</strong></p>
                    <div class="universality-table">
                      <div class="table-row header">
                        <span>对称性</span>
                        <span>维度</span>
                        <span>例子</span>
                      </div>
                      <div class="table-row">
                        <span>Z₂</span>
                        <span>3D</span>
                        <span>Ising模型</span>
                      </div>
                      <div class="table-row">
                        <span>O(2)</span>
                        <span>3D</span>
                        <span>XY模型</span>
                      </div>
                      <div class="table-row">
                        <span>O(3)</span>
                        <span>3D</span>
                        <span>Heisenberg模型</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="category-card quantitative">
            <h3>📊 定量预测的部分成功</h3>
            <div class="category-content">
              <div class="quantitative-analysis">
                <div class="analysis-item">
                  <h4>临界指数的预测</h4>
                  <div class="analysis-content">
                    <p><strong>平均场理论预测：</strong></p>
                    <div class="exponents-table">
                      <div class="exponent-row">
                        <span>α = 0</span>
                        <span>比热指数</span>
                      </div>
                      <div class="exponent-row">
                        <span>β = 1/2</span>
                        <span>序参量指数</span>
                      </div>
                      <div class="exponent-row">
                        <span>γ = 1</span>
                        <span>磁化率指数</span>
                      </div>
                      <div class="exponent-row">
                        <span>δ = 3</span>
                        <span>临界等温线指数</span>
                      </div>
                    </div>
                    
                    <p><strong>适用条件：</strong></p>
                    <ul>
                      <li>高维系统 (d > 4)</li>
                      <li>长程相互作用</li>
                      <li>某些特殊系统</li>
                    </ul>
                  </div>
                </div>
                
                <div class="analysis-item">
                  <h4>标度律的验证</h4>
                  <div class="analysis-content">
                    <p><strong>基本标度律：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha + 2\beta + \gamma = 2" :inline="false" />
                      <katex-element expression="\gamma = \beta(\delta - 1)" :inline="false" />
                    </div>
                    
                    <p><strong>平均场验证：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="0 + 2 \times \frac{1}{2} + 1 = 2 \quad \checkmark" :inline="false" />
                      <katex-element expression="1 = \frac{1}{2} \times (3-1) = 1 \quad \checkmark" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="category-card applications">
            <h3>🔬 实际应用的成功</h3>
            <div class="category-content">
              <div class="application-examples">
                <div class="example-item">
                  <h4>超导体BCS理论</h4>
                  <div class="example-content">
                    <p><strong>成功应用：</strong></p>
                    <ul>
                      <li>能隙的温度依赖性</li>
                      <li>比热跳跃的预测</li>
                      <li>临界磁场的计算</li>
                    </ul>
                    
                    <p><strong>BCS自洽方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta = V \sum_k \frac{\Delta}{2E_k} \tanh\left(\frac{E_k}{2k_B T}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="example-item">
                  <h4>液晶相变</h4>
                  <div class="example-content">
                    <p><strong>Maier-Saupe理论：</strong></p>
                    <ul>
                      <li>向列相-各向同性相转变</li>
                      <li>序参量的定义</li>
                      <li>相变温度的预测</li>
                    </ul>
                    
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \frac{1}{2}\langle 3\cos^2\theta - 1 \rangle" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="example-item">
                  <h4>合金有序化</h4>
                  <div class="example-content">
                    <p><strong>Bragg-Williams理论：</strong></p>
                    <ul>
                      <li>有序-无序转变</li>
                      <li>长程序的描述</li>
                      <li>相图的预测</li>
                    </ul>
                    
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta = \frac{n_A^{(A)} - n_A^{(B)}}{n_A^{(A)} + n_A^{(B)}}" :inline="false" />
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
      <h2>理论的局限性</h2>
      
      <div class="limitations-analysis">
        <div class="limitation-categories">
          <div class="limitation-card fluctuations">
            <h3>🌊 涨落效应的忽略</h3>
            <div class="limitation-content">
              <div class="fluctuation-issues">
                <div class="issue-item">
                  <h4>热涨落的重要性</h4>
                  <div class="issue-content">
                    <p><strong>Ginzburg判据：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i = \frac{k_B T_c}{J \xi^d} \ll 1" :inline="false" />
                    </div>
                    
                    <p><strong>物理意义：</strong></p>
                    <ul>
                      <li>涨落能量 vs 相互作用能量</li>
                      <li>低维系统中涨落更重要</li>
                      <li>临界点附近涨落发散</li>
                    </ul>
                    
                    <p><strong>维度依赖性：</strong></p>
                    <div class="dimension-table">
                      <div class="dim-row">
                        <span>d = 1</span>
                        <span>涨落主导，无长程序</span>
                      </div>
                      <div class="dim-row">
                        <span>d = 2</span>
                        <span>边界情况，对数修正</span>
                      </div>
                      <div class="dim-row">
                        <span>d = 3</span>
                        <span>涨落重要，修正显著</span>
                      </div>
                      <div class="dim-row">
                        <span>d > 4</span>
                        <span>平均场理论正确</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="issue-item">
                  <h4>临界涨落</h4>
                  <div class="issue-content">
                    <p><strong>相关长度发散：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\xi \sim |T-T_c|^{-\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落的空间结构：</strong></p>
                    <ul>
                      <li>长程关联的出现</li>
                      <li>标度不变性</li>
                      <li>分形结构</li>
                    </ul>
                    
                    <p><strong>实验观测：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle|\psi(\vec{r})\psi(0)|^2\rangle \sim r^{-d+2-\eta}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="limitation-card critical-exponents">
            <h3>📈 临界指数的偏差</h3>
            <div class="limitation-content">
              <div class="exponent-comparison">
                <div class="comparison-table">
                  <div class="table-header">
                    <span>指数</span>
                    <span>平均场</span>
                    <span>3D Ising</span>
                    <span>实验值</span>
                  </div>
                  <div class="table-row">
                    <span>α</span>
                    <span>0</span>
                    <span>0.110</span>
                    <span>0.11</span>
                  </div>
                  <div class="table-row">
                    <span>β</span>
                    <span>0.5</span>
                    <span>0.326</span>
                    <span>0.33</span>
                  </div>
                  <div class="table-row">
                    <span>γ</span>
                    <span>1.0</span>
                    <span>1.237</span>
                    <span>1.24</span>
                  </div>
                  <div class="table-row">
                    <span>δ</span>
                    <span>3.0</span>
                    <span>4.789</span>
                    <span>4.8</span>
                  </div>
                  <div class="table-row">
                    <span>ν</span>
                    <span>0.5</span>
                    <span>0.630</span>
                    <span>0.63</span>
                  </div>
                </div>
                
                <div class="deviation-analysis">
                  <h4>偏差的原因</h4>
                  <div class="reason-content">
                    <p><strong>维度效应：</strong></p>
                    <ul>
                      <li>上临界维度 d_c = 4</li>
                      <li>d < d_c 时涨落重要</li>
                      <li>对数修正的出现</li>
                    </ul>
                    
                    <p><strong>涨落修正：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta_{\text{真实}} = \beta_{\text{MF}} + \Delta\beta_{\text{涨落}}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="limitation-card topology">
            <h3>🔄 拓扑效应的缺失</h3>
            <div class="limitation-content">
              <div class="topology-issues">
                <div class="topology-item">
                  <h4>BKT相变</h4>
                  <div class="topology-content">
                    <p><strong>二维XY模型：</strong></p>
                    <ul>
                      <li>涡旋-反涡旋对</li>
                      <li>拓扑相变机制</li>
                      <li>指数型关联衰减</li>
                    </ul>
                    
                    <p><strong>平均场理论的失效：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_{BKT} = \frac{\pi J}{2k_B} \neq T_c^{\text{MF}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="topology-item">
                  <h4>拓扑序</h4>
                  <div class="topology-content">
                    <p><strong>新型序参量：</strong></p>
                    <ul>
                      <li>非局域序参量</li>
                      <li>拓扑不变量</li>
                      <li>量子纠缠</li>
                    </ul>
                    
                    <p><strong>例子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\text{Chern数：} \quad C = \frac{1}{2\pi} \int_{BZ} \Omega(\vec{k}) d^2k" :inline="false" />
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
      <h2>现代理论的修正</h2>
      
      <div class="modern-corrections">
        <div class="correction-methods">
          <div class="method-card rg-theory">
            <h3>🔄 重整化群理论</h3>
            <div class="method-content">
              <div class="rg-framework">
                <div class="rg-concept">
                  <h4>基本思想</h4>
                  <div class="concept-content">
                    <p><strong>标度变换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="L \to L' = L/b, \quad \psi \to \psi' = b^{-d_\psi}\psi" :inline="false" />
                    </div>
                    
                    <p><strong>重整化群方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dg_i}{d\ell} = \beta_i(g_1, g_2, \ldots)" :inline="false" />
                    </div>
                    
                    <p><strong>不动点分析：</strong></p>
                    <ul>
                      <li>高斯不动点（平均场）</li>
                      <li>Wilson-Fisher不动点</li>
                      <li>临界指数的计算</li>
                    </ul>
                  </div>
                </div>
                
                <div class="rg-results">
                  <h4>主要成果</h4>
                  <div class="results-content">
                    <p><strong>ε展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon = 4 - d, \quad \nu = \frac{1}{2} + \frac{\epsilon}{12} + O(\epsilon^2)" :inline="false" />
                    </div>
                    
                    <p><strong>精确结果：</strong></p>
                    <ul>
                      <li>临界指数的系统计算</li>
                      <li>普适性的严格证明</li>
                      <li>标度函数的构造</li>
                    </ul>
                    
                    <p><strong>数值验证：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\nu_{3D \text{ Ising}} = 0.6301(4)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="method-card field-theory">
            <h3>⚛️ 量子场论方法</h3>
            <div class="method-content">
              <div class="field-theory-approach">
                <div class="approach-item">
                  <h4>路径积分表述</h4>
                  <div class="approach-content">
                    <p><strong>配分函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \int \mathcal{D}\psi \, e^{-S[\psi]/\hbar}" :inline="false" />
                    </div>
                    
                    <p><strong>有效作用量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_{\text{eff}}[\psi] = S_0[\psi] + \sum_{n=1}^{\infty} \frac{1}{n!} \int \Gamma^{(n)}(\vec{k}_1,\ldots,\vec{k}_n) \psi(\vec{k}_1)\cdots\psi(\vec{k}_n)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="approach-item">
                  <h4>费曼图技术</h4>
                  <div class="approach-content">
                    <p><strong>微扰展开：</strong></p>
                    <ul>
                      <li>传播子的计算</li>
                      <li>顶点修正</li>
                      <li>自能的重整化</li>
                    </ul>
                    
                    <p><strong>重整化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g_{\text{bare}} = Z_g g_{\text{ren}} \mu^{\epsilon}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="method-card numerical-methods">
            <h3>💻 数值方法</h3>
            <div class="method-content">
              <div class="numerical-approaches">
                <div class="numerical-item">
                  <h4>Monte Carlo模拟</h4>
                  <div class="numerical-content">
                    <p><strong>算法：</strong></p>
                    <ul>
                      <li>Metropolis算法</li>
                      <li>Cluster算法</li>
                      <li>Wang-Landau算法</li>
                    </ul>
                    
                    <p><strong>有限尺寸标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C_L(T) = L^{\alpha/\nu} \tilde{C}(L^{1/\nu}(T-T_c))" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="numerical-item">
                  <h4>密度矩阵重整化群</h4>
                  <div class="numerical-content">
                    <p><strong>DMRG方法：</strong></p>
                    <ul>
                      <li>一维系统的精确解</li>
                      <li>纠缠熵的计算</li>
                      <li>量子相变的研究</li>
                    </ul>
                    
                    <p><strong>张量网络：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi\rangle = \sum_{\{s_i\}} \text{Tr}[A^{s_1}A^{s_2}\cdots A^{s_N}] |s_1s_2\cdots s_N\rangle" :inline="false" />
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
      <h2>理论发展的历史脉络</h2>
      
      <div class="historical-development">
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>1907年 - Weiss分子场理论</h4>
              <div class="timeline-details">
                <p><strong>核心思想：</strong></p>
                <ul>
                  <li>引入分子场概念</li>
                  <li>自洽场方程</li>
                  <li>铁磁相变的描述</li>
                </ul>
                
                <p><strong>分子场方程：</strong></p>
                <div class="formula-block">
                  <katex-element expression="H_{\text{eff}} = H_{\text{ext}} + \lambda M" :inline="false" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>1937年 - Landau相变理论</h4>
              <div class="timeline-details">
                <p><strong>革命性贡献：</strong></p>
                <ul>
                  <li>序参量概念</li>
                  <li>对称性破缺</li>
                  <li>普适性分类</li>
                </ul>
                
                <p><strong>Landau自由能：</strong></p>
                <div class="formula-block">
                  <katex-element expression="F = F_0 + a(T-T_c)\psi^2 + b\psi^4 + c\psi^6 + \cdots" :inline="false" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>1950年代 - Ginzburg-Landau理论</h4>
              <div class="timeline-details">
                <p><strong>空间非均匀性：</strong></p>
                <ul>
                  <li>梯度项的引入</li>
                  <li>相干长度</li>
                  <li>超导理论的成功</li>
                </ul>
                
                <p><strong>GL泛函：</strong></p>
                <div class="formula-block">
                  <katex-element expression="F = \int d^dr \left[ a|\psi|^2 + \frac{b}{2}|\psi|^4 + \frac{1}{2m^*}|(-i\hbar\nabla - e^*\vec{A})\psi|^2 \right]" :inline="false" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>1960年代 - 涨落理论的发展</h4>
              <div class="timeline-details">
                <p><strong>关键认识：</strong></p>
                <ul>
                  <li>Ginzburg判据</li>
                  <li>临界涨落</li>
                  <li>标度律的发现</li>
                </ul>
                
                <p><strong>涨落修正：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\langle(\delta\psi)^2\rangle = \frac{k_B T}{\chi^{-1}(q)} \sim |T-T_c|^{-\gamma}" :inline="false" />
                </div>
              </div>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h4>1970年代 - 重整化群革命</h4>
              <div class="timeline-details">
                <p><strong>Wilson的贡献：</strong></p>
                <ul>
                  <li>标度不变性</li>
                  <li>临界指数的计算</li>
                  <li>普适性的理解</li>
                </ul>
                
                <p><strong>β函数：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\beta(g) = \frac{dg}{d\ln L} = -\epsilon g + bg^2 + O(g^3)" :inline="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>深入的理论分析</h2>
      
      <div class="theoretical-analysis">
        <div class="analysis-categories">
          <div class="analysis-card mathematical-foundation">
            <h3>🔢 数学基础与严格性</h3>
            <div class="analysis-content">
              <div class="mathematical-aspects">
                <div class="math-item">
                  <h4>变分原理</h4>
                  <div class="math-content">
                    <p><strong>Rayleigh-Ritz方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\delta F[\psi] = 0 \Rightarrow \frac{\delta F}{\delta \psi} = 0" :inline="false" />
                    </div>
                    
                    <p><strong>试探函数：</strong></p>
                    <ul>
                      <li>高斯型波函数</li>
                      <li>指数衰减形式</li>
                      <li>多参数优化</li>
                    </ul>
                    
                    <p><strong>收敛性分析：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{trial}} \geq E_{\text{exact}}, \quad \lim_{N\to\infty} E_N = E_{\text{exact}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="math-item">
                  <h4>稳定性分析</h4>
                  <div class="math-content">
                    <p><strong>Hessian矩阵：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{ij} = \frac{\partial^2 F}{\partial \psi_i \partial \psi_j}" :inline="false" />
                    </div>
                    
                    <p><strong>特征值问题：</strong></p>
                    <ul>
                      <li>正定性条件</li>
                      <li>软模分析</li>
                      <li>相变点的确定</li>
                    </ul>
                    
                    <p><strong>Goldstone模式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega^2(\vec{k}) = c^2 k^2 + O(k^4)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="math-item">
                  <h4>对称性分析</h4>
                  <div class="math-content">
                    <p><strong>群论方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[g\psi] = F[\psi], \quad \forall g \in G" :inline="false" />
                    </div>
                    
                    <p><strong>不可约表示：</strong></p>
                    <ul>
                      <li>序参量的变换性质</li>
                      <li>耦合项的约束</li>
                      <li>相图的拓扑</li>
                    </ul>
                    
                    <p><strong>Landau理论的分类：</strong></p>
                    <div class="symmetry-table">
                      <div class="sym-row header">
                        <span>对称群</span>
                        <span>序参量</span>
                        <span>相变类型</span>
                      </div>
                      <div class="sym-row">
                        <span>Z₂</span>
                        <span>标量</span>
                        <span>二级</span>
                      </div>
                      <div class="sym-row">
                        <span>O(2)</span>
                        <span>复数</span>
                        <span>二级</span>
                      </div>
                      <div class="sym-row">
                        <span>O(3)</span>
                        <span>矢量</span>
                        <span>二级</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="analysis-card physical-interpretation">
            <h3>🌐 物理图像与直观理解</h3>
            <div class="analysis-content">
              <div class="physical-aspects">
                <div class="physics-item">
                  <h4>能量景观</h4>
                  <div class="physics-content">
                    <p><strong>势能面：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(\psi) = \frac{a}{2}\psi^2 + \frac{b}{4}\psi^4" :inline="false" />
                    </div>
                    
                    <p><strong>相变机制：</strong></p>
                    <ul>
                      <li>T > Tc: 单一最小值</li>
                      <li>T = Tc: 平坦底部</li>
                      <li>T < Tc: 双井结构</li>
                    </ul>
                    
                    <p><strong>势垒高度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta V = \frac{a^2}{4b} \sim (T_c - T)^2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="physics-item">
                  <h4>涨落与关联</h4>
                  <div class="physics-content">
                    <p><strong>关联函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(r) = \langle\psi(0)\psi(r)\rangle - \langle\psi\rangle^2" :inline="false" />
                    </div>
                    
                    <p><strong>Ornstein-Zernike形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(r) = \frac{A}{r^{(d-1)/2}} e^{-r/\xi}" :inline="false" />
                    </div>
                    
                    <p><strong>相关长度：</strong></p>
                    <ul>
                      <li>微观长度尺度</li>
                      <li>临界发散</li>
                      <li>普适性</li>
                    </ul>
                  </div>
                </div>
                
                <div class="physics-item">
                  <h4>动力学过程</h4>
                  <div class="physics-content">
                    <p><strong>时间依赖GL方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial\psi}{\partial t} = -\Gamma \frac{\delta F}{\delta\psi} + \eta(r,t)" :inline="false" />
                    </div>
                    
                    <p><strong>临界慢化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau \sim \xi^z \sim |T-T_c|^{-z\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>动力学临界指数：</strong></p>
                    <ul>
                      <li>Model A: z = 2</li>
                      <li>Model B: z = 4</li>
                      <li>Model C: z = 2.5</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="analysis-card computational-aspects">
            <h3>💻 计算方法与数值技术</h3>
            <div class="analysis-content">
              <div class="computational-methods">
                <div class="comp-item">
                  <h4>自洽场计算</h4>
                  <div class="comp-content">
                    <p><strong>迭代算法：</strong></p>
                    <div class="algorithm-box">
                      <div class="algorithm-step">1. 初始猜测 ψ₀</div>
                      <div class="algorithm-step">2. 计算有效场 H_eff</div>
                      <div class="algorithm-step">3. 求解 ψ_new</div>
                      <div class="algorithm-step">4. 检查收敛性</div>
                      <div class="algorithm-step">5. 更新 ψ → ψ_new</div>
                    </div>
                    
                    <p><strong>收敛判据：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi_{n+1} - \psi_n| < \epsilon" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="comp-item">
                  <h4>数值优化技术</h4>
                  <div class="comp-content">
                    <p><strong>梯度下降法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi_{n+1} = \psi_n - \alpha \nabla F[\psi_n]" :inline="false" />
                    </div>
                    
                    <p><strong>共轭梯度法：</strong></p>
                    <ul>
                      <li>更快的收敛速度</li>
                      <li>内存效率高</li>
                      <li>适用于大系统</li>
                    </ul>
                    
                    <p><strong>Newton-Raphson方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi_{n+1} = \psi_n - H^{-1}[\psi_n] \nabla F[\psi_n]" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="comp-item">
                  <h4>高性能计算</h4>
                  <div class="comp-content">
                    <p><strong>并行化策略：</strong></p>
                    <ul>
                      <li>空间分解</li>
                      <li>频率域并行</li>
                      <li>参数扫描并行</li>
                    </ul>
                    
                    <p><strong>GPU加速：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\text{加速比} = \frac{T_{\text{CPU}}}{T_{\text{GPU}}} \sim 10^2 - 10^3" :inline="false" />
                    </div>
                    
                    <p><strong>机器学习辅助：</strong></p>
                    <ul>
                      <li>神经网络求解器</li>
                      <li>参数预测</li>
                      <li>相图绘制</li>
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
      <h2>实验验证与测量技术</h2>
      
      <div class="experimental-verification">
        <div class="experiment-categories">
          <div class="experiment-card direct-measurements">
            <h3>🔬 直接测量技术</h3>
            <div class="experiment-content">
              <div class="measurement-techniques">
                <div class="technique-item">
                  <h4>序参量的直接观测</h4>
                  <div class="technique-content">
                    <p><strong>磁化强度测量：</strong></p>
                    <ul>
                      <li>SQUID磁强计</li>
                      <li>振动样品磁强计(VSM)</li>
                      <li>磁光Kerr效应</li>
                    </ul>
                    
                    <p><strong>精度与分辨率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta M/M \sim 10^{-6} - 10^{-8}" :inline="false" />
                    </div>
                    
                    <p><strong>温度稳定性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta T < 1 \text{ mK}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="technique-item">
                  <h4>结构序参量</h4>
                  <div class="technique-content">
                    <p><strong>X射线衍射：</strong></p>
                    <ul>
                      <li>Bragg峰强度</li>
                      <li>超结构反射</li>
                      <li>临界散射</li>
                    </ul>
                    
                    <p><strong>中子散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(Q) \propto |F(Q)|^2 S(Q)" :inline="false" />
                    </div>
                    
                    <p><strong>电子显微镜：</strong></p>
                    <ul>
                      <li>原子分辨率成像</li>
                      <li>实空间序参量</li>
                      <li>畴结构观察</li>
                    </ul>
                  </div>
                </div>
                
                <div class="technique-item">
                  <h4>光学方法</h4>
                  <div class="technique-content">
                    <p><strong>偏振显微镜：</strong></p>
                    <ul>
                      <li>液晶序参量</li>
                      <li>双折射测量</li>
                      <li>光学各向异性</li>
                    </ul>
                    
                    <p><strong>拉曼散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I_{\text{Raman}} \propto |\alpha \cdot \vec{E}|^2" :inline="false" />
                    </div>
                    
                    <p><strong>红外光谱：</strong></p>
                    <ul>
                      <li>分子振动模式</li>
                      <li>对称性破缺</li>
                      <li>相变动力学</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="experiment-card thermodynamic-measurements">
            <h3>🌡️ 热力学量测量</h3>
            <div class="experiment-content">
              <div class="thermodynamic-techniques">
                <div class="thermo-item">
                  <h4>比热测量</h4>
                  <div class="thermo-content">
                    <p><strong>量热法：</strong></p>
                    <ul>
                      <li>绝热量热法</li>
                      <li>差示扫描量热法(DSC)</li>
                      <li>交流量热法</li>
                    </ul>
                    
                    <p><strong>临界行为：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C \sim |T-T_c|^{-\alpha}" :inline="false" />
                    </div>
                    
                    <p><strong>实验挑战：</strong></p>
                    <ul>
                      <li>临界涨落的贡献</li>
                      <li>有限尺寸效应</li>
                      <li>背景扣除</li>
                    </ul>
                  </div>
                </div>
                
                <div class="thermo-item">
                  <h4>磁化率测量</h4>
                  <div class="thermo-content">
                    <p><strong>交流磁化率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi_{ac} = \chi' - i\chi''" :inline="false" />
                    </div>
                    
                    <p><strong>频率依赖性：</strong></p>
                    <ul>
                      <li>弛豫时间</li>
                      <li>临界慢化</li>
                      <li>动力学标度</li>
                    </ul>
                    
                    <p><strong>非线性磁化率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi_3 = \frac{\partial^3 M}{\partial H^3}\bigg|_{H=0}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="thermo-item">
                  <h4>介电常数</h4>
                  <div class="thermo-content">
                    <p><strong>铁电相变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon \sim |T-T_c|^{-\gamma}" :inline="false" />
                    </div>
                    
                    <p><strong>测量技术：</strong></p>
                    <ul>
                      <li>阻抗分析仪</li>
                      <li>宽频谱测量</li>
                      <li>温度扫描</li>
                    </ul>
                    
                    <p><strong>Curie-Weiss定律：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon = \epsilon_\infty + \frac{C}{T-T_c}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="experiment-card advanced-techniques">
            <h3>🚀 先进测量技术</h3>
            <div class="experiment-content">
              <div class="advanced-methods">
                <div class="advanced-item">
                  <h4>扫描探针显微镜</h4>
                  <div class="advanced-content">
                    <p><strong>STM/AFM：</strong></p>
                    <ul>
                      <li>原子尺度成像</li>
                      <li>局域态密度</li>
                      <li>表面重构</li>
                    </ul>
                    
                    <p><strong>磁力显微镜(MFM)：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_z = -\mu_z \frac{\partial H_z}{\partial z}" :inline="false" />
                    </div>
                    
                    <p><strong>应用实例：</strong></p>
                    <ul>
                      <li>磁畴观察</li>
                      <li>涡旋结构</li>
                      <li>相分离</li>
                    </ul>
                  </div>
                </div>
                
                <div class="advanced-item">
                  <h4>同步辐射技术</h4>
                  <div class="advanced-content">
                    <p><strong>X射线吸收谱：</strong></p>
                    <ul>
                      <li>局域结构</li>
                      <li>电子态</li>
                      <li>化学环境</li>
                    </ul>
                    
                    <p><strong>共振散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f'(E) = f_0 + f'(E) + if''(E)" :inline="false" />
                    </div>
                    
                    <p><strong>时间分辨测量：</strong></p>
                    <ul>
                      <li>泵浦-探测</li>
                      <li>相变动力学</li>
                      <li>超快过程</li>
                    </ul>
                  </div>
                </div>
                
                <div class="advanced-item">
                  <h4>量子传感器</h4>
                  <div class="advanced-content">
                    <p><strong>NV中心：</strong></p>
                    <ul>
                      <li>纳米尺度磁场</li>
                      <li>单自旋探测</li>
                      <li>量子相干</li>
                    </ul>
                    
                    <p><strong>SQUID显微镜：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Phi = \int \vec{B} \cdot d\vec{A}" :inline="false" />
                    </div>
                    
                    <p><strong>冷原子系统：</strong></p>
                    <ul>
                      <li>量子模拟</li>
                      <li>可控参数</li>
                      <li>实时观测</li>
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
      <h2>现代发展与前沿应用</h2>
      
      <div class="modern-developments">
        <div class="development-categories">
          <div class="development-card quantum-materials">
            <h3>⚛️ 量子材料中的应用</h3>
            <div class="development-content">
              <div class="quantum-applications">
                <div class="quantum-item">
                  <h4>高温超导体</h4>
                  <div class="quantum-content">
                    <p><strong>铜氧化物超导体：</strong></p>
                    <ul>
                      <li>d波配对</li>
                      <li>赝能隙</li>
                      <li>条纹相</li>
                    </ul>
                    
                    <p><strong>GL理论的推广：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \alpha|\psi|^2 + \beta|\psi|^4 + \gamma(\psi^*\nabla\psi - \psi\nabla\psi^*)^2" :inline="false" />
                    </div>
                    
                    <p><strong>实验观测：</strong></p>
                    <ul>
                      <li>STM谱学</li>
                      <li>ARPES</li>
                      <li>中子散射</li>
                    </ul>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>拓扑绝缘体</h4>
                  <div class="quantum-content">
                    <p><strong>拓扑序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\nu = \frac{1}{2\pi} \int_{BZ} \Omega_n(\vec{k}) d^2k" :inline="false" />
                    </div>
                    
                    <p><strong>边界态：</strong></p>
                    <ul>
                      <li>体边对应</li>
                      <li>拓扑保护</li>
                      <li>自旋-动量锁定</li>
                    </ul>
                    
                    <p><strong>平均场描述：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = v_F(\sigma_x k_x + \sigma_y k_y) + m\sigma_z" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>量子自旋液体</h4>
                  <div class="quantum-content">
                    <p><strong>分数化激发：</strong></p>
                    <ul>
                      <li>spinon</li>
                      <li>规范场</li>
                      <li>长程纠缠</li>
                    </ul>
                    
                    <p><strong>平均场理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{\text{MF}} = \sum_{\langle i,j \rangle} \chi_{ij} c_i^\dagger c_j + \Delta_{ij} c_i c_j + \text{h.c.}" :inline="false" />
                    </div>
                    
                    <p><strong>实验探测：</strong></p>
                    <ul>
                      <li>热导率</li>
                      <li>比热</li>
                      <li>NMR弛豫</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="development-card soft-matter">
            <h3>🧬 软物质系统</h3>
            <div class="development-content">
              <div class="soft-matter-applications">
                <div class="soft-item">
                  <h4>液晶相变</h4>
                  <div class="soft-content">
                    <p><strong>Maier-Saupe理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2}A(T-T^*)S^2 - \frac{1}{3}BS^3 + \frac{1}{4}CS^4" :inline="false" />
                    </div>
                    
                    <p><strong>序参量：</strong></p>
                    <ul>
                      <li>取向序参量S</li>
                      <li>双轴性参量P</li>
                      <li>手性参量</li>
                    </ul>
                    
                    <p><strong>相图：</strong></p>
                    <div class="phase-diagram">
                      <div class="phase-region">各向同性相</div>
                      <div class="phase-boundary">→</div>
                      <div class="phase-region">向列相</div>
                      <div class="phase-boundary">→</div>
                      <div class="phase-region">近晶相</div>
                    </div>
                  </div>
                </div>
                
                <div class="soft-item">
                  <h4>聚合物相分离</h4>
                  <div class="soft-content">
                    <p><strong>Flory-Huggins理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{k_B T}{v_0} \left[ \frac{\phi_A}{N_A} \ln\phi_A + \frac{\phi_B}{N_B} \ln\phi_B + \chi\phi_A\phi_B \right]" :inline="false" />
                    </div>
                    
                    <p><strong>相分离机制：</strong></p>
                    <ul>
                      <li>旋节分解</li>
                      <li>成核长大</li>
                      <li>动力学标度</li>
                    </ul>
                    
                    <p><strong>实验技术：</strong></p>
                    <ul>
                      <li>光散射</li>
                      <li>小角散射</li>
                      <li>显微镜观察</li>
                    </ul>
                  </div>
                </div>
                
                <div class="soft-item">
                  <h4>胶体系统</h4>
                  <div class="soft-content">
                    <p><strong>硬球模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(r) = \begin{cases} \infty & r < \sigma \\ 0 & r > \sigma \end{cases}" :inline="false" />
                    </div>
                    
                    <p><strong>相变：</strong></p>
                    <ul>
                      <li>液-固相变</li>
                      <li>玻璃转变</li>
                      <li>凝胶化</li>
                    </ul>
                    
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi_6 = \frac{1}{N_b} \sum_{j=1}^{N_b} e^{6i\theta_{ij}}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="development-card biological-systems">
            <h3>🧬 生物系统</h3>
            <div class="development-content">
              <div class="biological-applications">
                <div class="bio-item">
                  <h4>蛋白质折叠</h4>
                  <div class="bio-content">
                    <p><strong>能量漏斗模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F(Q) = F_0 - \Delta F \cdot Q + \frac{1}{2}k(Q-Q_0)^2" :inline="false" />
                    </div>
                    
                    <p><strong>序参量：</strong></p>
                    <ul>
                      <li>天然接触分数Q</li>
                      <li>回转半径Rg</li>
                      <li>二级结构含量</li>
                    </ul>
                    
                    <p><strong>相变类型：</strong></p>
                    <ul>
                      <li>二态折叠</li>
                      <li>多态折叠</li>
                      <li>下坡折叠</li>
                    </ul>
                  </div>
                </div>
                
                <div class="bio-item">
                  <h4>细胞膜相变</h4>
                  <div class="bio-content">
                    <p><strong>脂质双分子层：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \int d^2r \left[ \frac{K}{2}(\nabla^2 h)^2 + \frac{\sigma}{2}(\nabla h)^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>相分离：</strong></p>
                    <ul>
                      <li>液序-液无序</li>
                      <li>脂筏形成</li>
                      <li>膜蛋白聚集</li>
                    </ul>
                    
                    <p><strong>生物功能：</strong></p>
                    <ul>
                      <li>信号转导</li>
                      <li>膜融合</li>
                      <li>离子通道</li>
                    </ul>
                  </div>
                </div>
                
                <div class="bio-item">
                  <h4>神经网络</h4>
                  <div class="bio-content">
                    <p><strong>Hopfield模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -\frac{1}{2} \sum_{i,j} J_{ij} s_i s_j - \sum_i h_i s_i" :inline="false" />
                    </div>
                    
                    <p><strong>记忆存储：</strong></p>
                    <ul>
                      <li>吸引子状态</li>
                      <li>联想记忆</li>
                      <li>容量限制</li>
                    </ul>
                    
                    <p><strong>学习规则：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="J_{ij} = \frac{1}{N} \sum_{\mu=1}^p \xi_i^\mu \xi_j^\mu" :inline="false" />
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
      <h2>适用范围与指导原则</h2>
      
      <div class="applicability-guide">
        <div class="guide-framework">
          <div class="guide-card when-valid">
            <h3>✅ 平均场理论有效的情况</h3>
            <div class="guide-content">
              <div class="valid-conditions">
                <div class="condition-item">
                  <h4>高维系统</h4>
                  <div class="condition-content">
                    <p><strong>维度条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d > d_c = 4 - \eta" :inline="false" />
                    </div>
                    
                    <p><strong>物理原因：</strong></p>
                    <ul>
                      <li>配位数增加</li>
                      <li>涨落效应减弱</li>
                      <li>平均场近似合理</li>
                    </ul>
                  </div>
                </div>
                
                <div class="condition-item">
                  <h4>长程相互作用</h4>
                  <div class="condition-content">
                    <p><strong>相互作用形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="J(r) \sim r^{-(d+\sigma)}, \quad \sigma < 2" :inline="false" />
                    </div>
                    
                    <p><strong>例子：</strong></p>
                    <ul>
                      <li>偶极相互作用</li>
                      <li>库伦相互作用</li>
                      <li>等离子体系统</li>
                    </ul>
                  </div>
                </div>
                
                <div class="condition-item">
                  <h4>大自旋系统</h4>
                  <div class="condition-content">
                    <p><strong>1/N展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="N \to \infty, \quad J \sim 1/N" :inline="false" />
                    </div>
                    
                    <p><strong>应用：</strong></p>
                    <ul>
                      <li>球形模型</li>
                      <li>O(N)模型</li>
                      <li>矩阵模型</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="guide-card when-invalid">
            <h3>❌ 平均场理论失效的情况</h3>
            <div class="guide-content">
              <div class="invalid-conditions">
                <div class="invalid-item">
                  <h4>低维强关联系统</h4>
                  <div class="invalid-content">
                    <p><strong>典型例子：</strong></p>
                    <ul>
                      <li>一维Ising模型</li>
                      <li>二维XY模型</li>
                      <li>量子自旋链</li>
                    </ul>
                    
                    <p><strong>失效原因：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\text{涨落能量} \gg \text{平均场能量}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="invalid-item">
                  <h4>拓扑相变</h4>
                  <div class="invalid-content">
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>非局域序参量</li>
                      <li>拓扑保护</li>
                      <li>量子纠缠</li>
                    </ul>
                    
                    <p><strong>例子：</strong></p>
                    <ul>
                      <li>量子霍尔效应</li>
                      <li>拓扑绝缘体</li>
                      <li>拓扑超导体</li>
                    </ul>
                  </div>
                </div>
                
                <div class="invalid-item">
                  <h4>强量子涨落</h4>
                  <div class="invalid-content">
                    <p><strong>量子临界点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T = 0, \quad g = g_c" :inline="false" />
                    </div>
                    
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>零点涨落主导</li>
                      <li>量子相变</li>
                      <li>非费米液体行为</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="guide-card practical-guide">
            <h3>🎯 实用指导原则</h3>
            <div class="guide-content">
              <div class="practical-principles">
                <div class="principle-item">
                  <h4>理论选择策略</h4>
                  <div class="principle-content">
                    <div class="strategy-flow">
                      <div class="flow-step">
                        <span class="step-number">1</span>
                        <span class="step-text">确定系统维度和对称性</span>
                      </div>
                      <div class="flow-arrow">↓</div>
                      <div class="flow-step">
                        <span class="step-number">2</span>
                        <span class="step-text">评估相互作用范围</span>
                      </div>
                      <div class="flow-arrow">↓</div>
                      <div class="flow-step">
                        <span class="step-number">3</span>
                        <span class="step-text">检查Ginzburg判据</span>
                      </div>
                      <div class="flow-arrow">↓</div>
                      <div class="flow-step">
                        <span class="step-number">4</span>
                        <span class="step-text">选择合适的理论方法</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="principle-item">
                  <h4>修正方法选择</h4>
                  <div class="principle-content">
                    <div class="correction-table">
                      <div class="correction-row header">
                        <span>情况</span>
                        <span>推荐方法</span>
                        <span>精度</span>
                      </div>
                      <div class="correction-row">
                        <span>d ≈ 4</span>
                        <span>ε展开</span>
                        <span>高</span>
                      </div>
                      <div class="correction-row">
                        <span>d = 3</span>
                        <span>数值模拟</span>
                        <span>很高</span>
                      </div>
                      <div class="correction-row">
                        <span>d = 2</span>
                        <span>精确解/CFT</span>
                        <span>精确</span>
                      </div>
                      <div class="correction-row">
                        <span>d = 1</span>
                        <span>Bethe ansatz</span>
                        <span>精确</span>
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

.success-categories, .limitation-categories, .correction-methods, .guide-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.category-card, .limitation-card, .method-card, .guide-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.category-card.qualitative {
  border-left: 5px solid #10b981;
}

.category-card.quantitative {
  border-left: 5px solid #3b82f6;
}

.category-card.applications {
  border-left: 5px solid #8b5cf6;
}

.limitation-card.fluctuations {
  border-left: 5px solid #ef4444;
}

.limitation-card.critical-exponents {
  border-left: 5px solid #f59e0b;
}

.limitation-card.topology {
  border-left: 5px solid #ec4899;
}

.method-card.rg-theory {
  border-left: 5px solid #06b6d4;
}

.method-card.field-theory {
  border-left: 5px solid #84cc16;
}

.method-card.numerical-methods {
  border-left: 5px solid #f97316;
}

.guide-card.when-valid {
  border-left: 5px solid #22c55e;
}

.guide-card.when-invalid {
  border-left: 5px solid #ef4444;
}

.guide-card.practical-guide {
  border-left: 5px solid #6366f1;
}

.category-card h3, .limitation-card h3, .method-card h3, .guide-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.success-items, .success-item, .analysis-item, .quantitative-analysis, .application-examples, .example-item, .fluctuation-issues, .issue-item, .topology-issues, .topology-item, .rg-framework, .rg-concept, .rg-results, .field-theory-approach, .approach-item, .numerical-approaches, .numerical-item, .valid-conditions, .condition-item, .invalid-conditions, .invalid-item, .practical-principles, .principle-item {
  margin-bottom: 1.5rem;
}

.success-item h4, .analysis-item h4, .example-item h4, .issue-item h4, .topology-item h4, .rg-concept h4, .rg-results h4, .approach-item h4, .numerical-item h4, .condition-item h4, .invalid-item h4, .principle-item h4 {
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

.universality-table, .exponents-table, .dimension-table, .comparison-table, .correction-table {
  background: #f8fafc;
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 1rem 0;
}

.table-row, .exponent-row, .dim-row, .table-header, .correction-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  padding: 0.75rem;
  border-bottom: 1px solid #e5e7eb;
}

.table-row.header, .table-header, .correction-row.header {
  background: #e5e7eb;
  font-weight: 600;
}

.strategy-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #f3f4f6;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  width: 100%;
}

.step-number {
  background: #4f46e5;
  color: white;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
}

.flow-arrow {
  font-size: 1.25rem;
  color: #6b7280;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .success-categories, .limitation-categories, .correction-methods, .guide-framework {
    grid-template-columns: 1fr;
  }
  
  .table-row, .exponent-row, .dim-row, .table-header, .correction-row {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>