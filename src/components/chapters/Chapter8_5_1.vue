<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.5.1 自由费米子的Lifshitz相变</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">Lifshitz相变</span>
        <span class="chapter-tag">自由费米子</span>
        <span class="chapter-tag">拓扑相变</span>
        <span class="reading-time">⏱ 40分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Lifshitz相变是一类特殊的量子相变，其特征是费米面拓扑结构的改变。与传统的朗道相变不同，
        Lifshitz相变不涉及对称性的破缺，而是由于能带结构的变化导致费米面形状的突变。
        本节将详细介绍自由费米子系统中的Lifshitz相变机制、理论描述和物理意义。
      </p>
    </div>

    <section class="content-section">
      <h2>Lifshitz相变的基本概念</h2>
      
      <div class="basic-concepts">
        <div class="definition-card">
          <h3>定义与特征</h3>
          <div class="definition-content">
            <div class="definition-box">
              <h4>Lifshitz相变的定义</h4>
              <p>
                Lifshitz相变是指在改变系统参数（如化学势、外场等）时，费米面的拓扑结构发生突变的相变。
                这种相变的特点是：
              </p>
              <ul>
                <li>不破坏系统的对称性</li>
                <li>费米面拓扑结构发生改变</li>
                <li>通常伴随着van Hove奇点</li>
                <li>相变点处某些物理量出现奇异行为</li>
              </ul>
            </div>
            
            <div class="classification">
              <h4>Lifshitz相变的分类</h4>
              <div class="transition-types">
                <div class="transition-type">
                  <h5>2.5阶相变</h5>
                  <p>费米面从闭合变为开放，或反之</p>
                  <div class="formula-block">
                    <katex-element expression="\text{闭合费米面} \leftrightarrow \text{开放费米面}" :inline="false" />
                  </div>
                </div>
                
                <div class="transition-type">
                  <h5>颈部形成/消失</h5>
                  <p>费米面上颈部的出现或消失</p>
                  <div class="formula-block">
                    <katex-element expression="\text{简单费米面} \leftrightarrow \text{复杂费米面}" :inline="false" />
                  </div>
                </div>
                
                <div class="transition-type">
                  <h5>电子/空穴口袋</h5>
                  <p>小的电子或空穴口袋的出现/消失</p>
                  <div class="formula-block">
                    <katex-element expression="\text{单一费米面} \leftrightarrow \text{多重费米面}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-picture">
          <h3>物理图像</h3>
          <div class="picture-content">
            <div class="fermi-surface-evolution">
              <h4>费米面演化示意图</h4>
              <div class="evolution-stages">
                <div class="stage">
                  <h5>阶段1：闭合费米面</h5>
                  <div class="fermi-surface closed">
                    <div class="surface-shape circle"></div>
                    <p>$\mu &lt; \mu_c$：电子填充较少</p>
                  </div>
                </div>
                
                <div class="stage">
                  <h5>阶段2：临界点</h5>
                  <div class="fermi-surface critical">
                    <div class="surface-shape saddle"></div>
                    <p>$\mu = \mu_c$：van Hove奇点</p>
                  </div>
                </div>
                
                <div class="stage">
                  <h5>阶段3：开放费米面</h5>
                  <div class="fermi-surface open">
                    <div class="surface-shape lines"></div>
                    <p>$\mu &gt; \mu_c$：费米面贯穿布里渊区</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="van-hove-singularity">
              <h4>van Hove奇点</h4>
              <div class="singularity-content">
                <p><strong>定义：</strong>态密度在某些能量处的奇异行为</p>
                <div class="formula-block">
                  <katex-element expression="g(E) = \sum_{\mathbf{k}} \delta(E - E_{\mathbf{k}})" :inline="false" />
                </div>
                
                <div class="singularity-types">
                  <div class="singularity-type">
                    <h5>一维系统</h5>
                    <div class="formula-block">
                      <katex-element expression="g(E) \sim |E - E_{\text{vH}}|^{-1/2}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="singularity-type">
                    <h5>二维系统</h5>
                    <div class="formula-block">
                      <katex-element expression="g(E) \sim \ln|E - E_{\text{vH}}|" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="singularity-type">
                    <h5>三维系统</h5>
                    <div class="formula-block">
                      <katex-element expression="g(E) \sim |E - E_{\text{vH}}|^{1/2}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>理论框架</h2>
      
      <div class="theoretical-framework">
        <div class="landau-theory">
          <h3>朗道理论的推广</h3>
          <div class="landau-content">
            <div class="free-energy-expansion">
              <h4>自由能展开</h4>
              <p>对于Lifshitz相变，传统的朗道理论需要修正。考虑化学势 $\mu$ 作为调控参数：</p>
              <div class="formula-block">
                <katex-element expression="F[\rho(\mathbf{r})] = \int d\mathbf{r} \left[ f_0(\rho) + \frac{1}{2}K_{ij} \nabla_i \rho \nabla_j \rho + \cdots \right]" :inline="false" />
              </div>
              
              <p>其中 $\rho(\mathbf{r})$ 是局域电子密度，$K_{ij}$ 是刚度张量。</p>
              
              <div class="critical-behavior">
                <h5>临界行为</h5>
                <p>在Lifshitz点附近，刚度张量的某些分量趋于零：</p>
                <div class="formula-block">
                  <katex-element expression="K_{ii} = a(\mu - \mu_c) + O((\mu - \mu_c)^2)" :inline="false" />
                </div>
                
                <p>这导致了特殊的临界指数：</p>
                <div class="formula-block">
                  <katex-element expression="\xi \sim |\mu - \mu_c|^{-1/2}" :inline="false" />
                </div>
              </div>
            </div>
            
            <div class="scaling-theory">
              <h4>标度理论</h4>
              <div class="scaling-content">
                <p><strong>动力学临界指数：</strong></p>
                <div class="formula-block">
                  <katex-element expression="z = 2 \quad \text{(Lifshitz相变)}" :inline="false" />
                </div>
                
                <p><strong>关联长度指数：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\nu = \frac{1}{2}" :inline="false" />
                </div>
                
                <p><strong>比热指数：</strong></p>
                <div class="formula-block">
                  <katex-element expression="\alpha = 2 - d\nu = 2 - \frac{d}{2}" :inline="false" />
                </div>
                
                <div class="dimension-dependence">
                  <h5>维度依赖性</h5>
                  <table class="dimension-table">
                    <thead>
                      <tr>
                        <th>维度 d</th>
                        <th>$\alpha$</th>
                        <th>临界行为</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>d = 1</td>
                        <td>3/2</td>
                        <td>发散</td>
                      </tr>
                      <tr>
                        <td>d = 2</td>
                        <td>1</td>
                        <td>对数发散</td>
                      </tr>
                      <tr>
                        <td>d = 3</td>
                        <td>1/2</td>
                        <td>弱发散</td>
                      </tr>
                      <tr>
                        <td>d ≥ 4</td>
                        <td>≤ 0</td>
                        <td>平滑</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="microscopic-models">
          <h3>微观模型</h3>
          <div class="models-content">
            <div class="tight-binding-model">
              <h4>紧束缚模型</h4>
              <div class="model-content">
                <p><strong>一维情况：</strong></p>
                <div class="formula-block">
                  <katex-element expression="H = -t \sum_i (c_i^\dagger c_{i+1} + \text{h.c.}) - \mu \sum_i c_i^\dagger c_i" :inline="false" />
                </div>
                
                <p>色散关系：</p>
                <div class="formula-block">
                  <katex-element expression="E(k) = -2t\cos(k) - \mu" :inline="false" />
                </div>
                
                <p><strong>Lifshitz点：</strong>$\mu = \pm 2t$</p>
                
                <div class="phase-diagram-1d">
                  <h5>一维相图</h5>
                  <div class="phase-regions">
                    <div class="phase empty">
                      <h6>空带 ($\mu &lt; -2t$)</h6>
                      <p>无费米点</p>
                    </div>
                    <div class="phase partially-filled">
                      <h6>部分填充 ($-2t &lt; \mu &lt; 2t$)</h6>
                      <p>两个费米点</p>
                    </div>
                    <div class="phase full">
                      <h6>满带 ($\mu &gt; 2t$)</h6>
                      <p>无费米点</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="continuum-model">
              <h4>连续模型</h4>
              <div class="continuum-content">
                <p><strong>二维各向异性模型：</strong></p>
                <div class="formula-block">
                  <katex-element expression="H = \int d^2\mathbf{r} \, \psi^\dagger(\mathbf{r}) \left[ -\frac{\nabla_x^2}{2m_x} - \frac{\nabla_y^2}{2m_y} - \mu \right] \psi(\mathbf{r})" :inline="false" />
                </div>
                
                <p>当 $m_x \to \infty$ 时，系统变为准一维：</p>
                <div class="formula-block">
                  <katex-element expression="E(k_x, k_y) = \frac{k_y^2}{2m_y} - \mu" :inline="false" />
                </div>
                
                <div class="anisotropy-effects">
                  <h5>各向异性效应</h5>
                  <div class="anisotropy-content">
                    <p>各向异性参数：</p>
                    <div class="formula-block">
                      <katex-element expression="\eta = \frac{m_y}{m_x}" :inline="false" />
                    </div>
                    
                    <div class="anisotropy-regimes">
                      <div class="regime isotropic">
                        <h6>各向同性 ($\eta = 1$)</h6>
                        <p>圆形费米面</p>
                      </div>
                      <div class="regime anisotropic">
                        <h6>各向异性 ($\eta \neq 1$)</h6>
                        <p>椭圆形费米面</p>
                      </div>
                      <div class="regime quasi-1d">
                        <h6>准一维 ($\eta \to 0$)</h6>
                        <p>平行线状费米面</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>具体例子：二维方格子模型</h2>
      
      <div class="square-lattice-model">
        <div class="model-setup">
          <h3>模型设定</h3>
          <div class="setup-content">
            <div class="hamiltonian">
              <h4>哈密顿量</h4>
              <div class="formula-block">
                <katex-element expression="H = -t \sum_{\langle i,j \rangle} (c_i^\dagger c_j + \text{h.c.}) - t' \sum_{\langle\langle i,j \rangle\rangle} (c_i^\dagger c_j + \text{h.c.}) - \mu \sum_i c_i^\dagger c_i" :inline="false" />
              </div>
              
              <p>其中：</p>
              <ul>
                <li>$t$ 是最近邻跳跃积分</li>
                <li>$t'$ 是次近邻跳跃积分</li>
                <li>$\mu$ 是化学势</li>
              </ul>
              
              <div class="dispersion-relation">
                <h5>色散关系</h5>
                <div class="formula-block">
                  <katex-element expression="E(\mathbf{k}) = -2t(\cos k_x + \cos k_y) - 4t' \cos k_x \cos k_y - \mu" :inline="false" />
                </div>
              </div>
            </div>
            
            <div class="van-hove-points">
              <h4>van Hove点</h4>
              <div class="vhs-content">
                <p>van Hove奇点位于布里渊区的特殊点：</p>
                <div class="formula-block">
                  <katex-element expression="\mathbf{k}_{\text{vH}} = (\pi, 0), (0, \pi), (\pi, \pi), (0, 0)" :inline="false" />
                </div>
                
                <p>对应的能量：</p>
                <div class="formula-block">
                  <katex-element expression="E_{\text{vH}} = \begin{cases}
                    4t' - \mu & \text{at } (\pi, \pi) \\
                    -4t' - \mu & \text{at } (0, 0) \\
                    -\mu & \text{at } (\pi, 0), (0, \pi)
                  \end{cases}" :inline="false" />
                </div>
                
                <div class="lifshitz-transitions">
                  <h5>Lifshitz相变条件</h5>
                  <div class="transition-conditions">
                    <div class="condition">
                      <h6>第一类Lifshitz相变</h6>
                      <div class="formula-block">
                        <katex-element expression="\mu = 0 \quad \text{(费米能通过 } (\pi,0), (0,\pi) \text{)}" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="condition">
                      <h6>第二类Lifshitz相变</h6>
                      <div class="formula-block">
                        <katex-element expression="\mu = \pm 4t' \quad \text{(费米能通过 } (\pi,\pi), (0,0) \text{)}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="phase-diagram">
          <h3>相图分析</h3>
          <div class="phase-content">
            <div class="parameter-space">
              <h4>参数空间 ($t'$, $\mu$)</h4>
              <div class="phase-regions-2d">
                <div class="phase-region electron-like">
                  <h5>电子型费米面</h5>
                  <div class="region-description">
                    <p><strong>条件：</strong>$\mu &lt; -4|t'|$</p>
                    <p><strong>特征：</strong>小的电子口袋，位于 $(\pi, \pi)$ 附近</p>
                    <div class="formula-block">
                      <katex-element expression="A_{\text{FS}} \propto |\mu + 4|t'||" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="phase-region hole-like">
                  <h5>空穴型费米面</h5>
                  <div class="region-description">
                    <p><strong>条件：</strong>$\mu &gt; 4|t'|$</p>
                    <p><strong>特征：</strong>小的空穴口袋，位于 $(0, 0)$ 附近</p>
                    <div class="formula-block">
                      <katex-element expression="A_{\text{FS}} \propto |\mu - 4|t'||" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="phase-region intermediate">
                  <h5>中间相</h5>
                  <div class="region-description">
                    <p><strong>条件：</strong>$-4|t'| &lt; \mu &lt; 4|t'|$</p>
                    <p><strong>特征：</strong>复杂的费米面拓扑，可能包含多个连通分量</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="fermi-surface-topology">
              <h4>费米面拓扑演化</h4>
              <div class="topology-evolution">
                <div class="evolution-step">
                  <h5>步骤1：$\mu \ll -4|t'|$</h5>
                  <div class="topology-description">
                    <p>四个独立的电子口袋</p>
                    <div class="formula-block">
                      <katex-element expression="N_{\text{pockets}} = 4, \quad \text{type: electron}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="evolution-step">
                  <h5>步骤2：$\mu = -4|t'|$</h5>
                  <div class="topology-description">
                    <p>第一个Lifshitz相变点</p>
                    <div class="formula-block">
                      <katex-element expression="\text{电子口袋开始连接}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="evolution-step">
                  <h5>步骤3：$-4|t'| &lt; \mu &lt; 0$</h5>
                  <div class="topology-description">
                    <p>连通的费米面，复杂拓扑</p>
                  </div>
                </div>
                
                <div class="evolution-step">
                  <h5>步骤4：$\mu = 0$</h5>
                  <div class="topology-description">
                    <p>第二个Lifshitz相变点</p>
                    <div class="formula-block">
                      <katex-element expression="\text{费米面通过 van Hove 点}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>物理性质与实验观测</h2>
      
      <div class="physical-properties">
        <div class="thermodynamic-properties">
          <h3>热力学性质</h3>
          <div class="thermo-content">
            <div class="specific-heat">
              <h4>比热</h4>
              <div class="specific-heat-content">
                <p>在Lifshitz相变点附近，比热表现出特殊的温度依赖性：</p>
                <div class="formula-block">
                  <katex-element expression="C(T) = \gamma T + \delta T^{1+\alpha}" :inline="false" />
                </div>
                
                <p>其中 $\alpha$ 是临界指数，依赖于维度：</p>
                <div class="critical-exponents">
                  <div class="exponent-case">
                    <h5>二维系统</h5>
                    <div class="formula-block">
                      <katex-element expression="C(T) \sim T \ln T \quad \text{(对数修正)}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="exponent-case">
                    <h5>三维系统</h5>
                    <div class="formula-block">
                      <katex-element expression="C(T) \sim T^{3/2}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="magnetic-susceptibility">
              <h4>磁化率</h4>
              <div class="susceptibility-content">
                <p>Pauli磁化率在van Hove奇点处发散：</p>
                <div class="formula-block">
                  <katex-element expression="\chi_{\text{Pauli}} = \mu_B^2 g(E_F)" :inline="false" />
                </div>
                
                <p>在二维系统中：</p>
                <div class="formula-block">
                  <katex-element expression="\chi(\mu) \sim \ln|\mu - \mu_{\text{vH}}|" :inline="false" />
                </div>
                
                <div class="temperature-effects">
                  <h5>温度效应</h5>
                  <p>有限温度下的修正：</p>
                  <div class="formula-block">
                    <katex-element expression="\chi(T, \mu) = \int dE \, g(E) \left(-\frac{\partial f(E)}{\partial E}\right)" :inline="false" />
                  </div>
                  <p>其中 $f(E)$ 是费米-狄拉克分布函数。</p>
                </div>
              </div>
            </div>
            
            <div class="compressibility">
              <h4>压缩率</h4>
              <div class="compressibility-content">
                <p>电子压缩率：</p>
                <div class="formula-block">
                  <katex-element expression="\kappa = \frac{1}{n^2} \frac{\partial n}{\partial \mu} = \frac{g(E_F)}{n^2}" :inline="false" />
                </div>
                
                <p>在Lifshitz点处的奇异行为：</p>
                <div class="formula-block">
                  <katex-element expression="\kappa \sim |\mu - \mu_c|^{-\gamma}" :inline="false" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="transport-properties">
          <h3>输运性质</h3>
          <div class="transport-content">
            <div class="electrical-conductivity">
              <h4>电导率</h4>
              <div class="conductivity-content">
                <p>Drude公式的修正：</p>
                <div class="formula-block">
                  <katex-element expression="\sigma = \frac{e^2}{h} \int dE \, g(E) \tau(E) v_F^2(E) \left(-\frac{\partial f}{\partial E}\right)" :inline="false" />
                </div>
                
                <p>其中 $\tau(E)$ 是散射时间，$v_F(E)$ 是费米速度。</p>
                
                <div class="conductivity-anomalies">
                  <h5>导电异常</h5>
                  <div class="anomaly-types">
                    <div class="anomaly">
                      <h6>van Hove奇点处</h6>
                      <p>费米速度趋于零，导致电导率下降</p>
                      <div class="formula-block">
                        <katex-element expression="v_F \to 0 \Rightarrow \sigma \downarrow" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="anomaly">
                      <h6>Lifshitz相变点</h6>
                      <p>费米面拓扑变化导致散射机制改变</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="hall-effect">
              <h4>霍尔效应</h4>
              <div class="hall-content">
                <p>霍尔系数：</p>
                <div class="formula-block">
                  <katex-element expression="R_H = \frac{1}{ne} \frac{\langle \tau^2 \rangle}{\langle \tau \rangle^2}" :inline="false" />
                </div>
                
                <p>在多带系统中：</p>
                <div class="formula-block">
                  <katex-element expression="R_H = \frac{1}{e} \frac{\sum_i n_i \mu_i^2 R_{H,i}}{\left(\sum_i n_i \mu_i\right)^2}" :inline="false" />
                </div>
                
                <div class="hall-anomalies">
                  <h5>霍尔异常</h5>
                  <p>Lifshitz相变可能导致霍尔系数符号改变，反映载流子类型的变化。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-signatures">
          <h3>实验特征</h3>
          <div class="experimental-content">
            <div class="spectroscopic-probes">
              <h4>谱学探测</h4>
              <div class="spectroscopy-methods">
                <div class="method">
                  <h5>角分辨光电子谱 (ARPES)</h5>
                  <ul>
                    <li>直接观测费米面拓扑</li>
                    <li>识别van Hove奇点</li>
                    <li>追踪Lifshitz相变过程</li>
                  </ul>
                </div>
                
                <div class="method">
                  <h5>扫描隧道谱 (STS)</h5>
                  <ul>
                    <li>测量局域态密度</li>
                    <li>观测van Hove奇点的能量位置</li>
                    <li>研究空间不均匀性</li>
                  </ul>
                </div>
                
                <div class="method">
                  <h5>量子振荡</h5>
                  <ul>
                    <li>de Haas-van Alphen效应</li>
                    <li>Shubnikov-de Haas效应</li>
                    <li>费米面面积的精确测量</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="material-examples">
              <h4>材料实例</h4>
              <div class="materials-list">
                <div class="material">
                  <h5>铜氧化物高温超导体</h5>
                  <div class="material-details">
                    <p><strong>特征：</strong>van Hove奇点接近费米能</p>
                    <p><strong>现象：</strong>超导转变温度与van Hove奇点位置相关</p>
                    <div class="formula-block">
                      <katex-element expression="T_c \propto g(E_F)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="material">
                  <h5>铁基超导体</h5>
                  <div class="material-details">
                    <p><strong>特征：</strong>多带结构，复杂费米面</p>
                    <p><strong>现象：</strong>电子和空穴口袋的竞争</p>
                  </div>
                </div>
                
                <div class="material">
                  <h5>石墨烯</h5>
                  <div class="material-details">
                    <p><strong>特征：</strong>狄拉克点处的线性色散</p>
                    <p><strong>现象：</strong>通过掺杂调控的Lifshitz相变</p>
                  </div>
                </div>
                
                <div class="material">
                  <h5>过渡金属二硫化物</h5>
                  <div class="material-details">
                    <p><strong>特征：</strong>层状结构，可调载流子密度</p>
                    <p><strong>现象：</strong>电场调控的Lifshitz相变</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>理论计算方法</h2>
      
      <div class="calculation-methods">
        <div class="analytical-methods">
          <h3>解析方法</h3>
          <div class="analytical-content">
            <div class="saddle-point-method">
              <h4>鞍点方法</h4>
              <div class="saddle-point-content">
                <p>在van Hove奇点附近，能带可以展开为：</p>
                <div class="formula-block">
                  <katex-element expression="E(\mathbf{k}) = E_{\text{vH}} + \frac{1}{2} \sum_{i,j} \frac{\partial^2 E}{\partial k_i \partial k_j}\bigg|_{\text{vH}} (k_i - k_{i,\text{vH}})(k_j - k_{j,\text{vH}})" :inline="false" />
                </div>
                
                <p>对于二维鞍点：</p>
                <div class="formula-block">
                  <katex-element expression="E(\mathbf{k}) \approx E_{\text{vH}} + \frac{v_x^2}{2}(k_x - k_{x,\text{vH}})^2 - \frac{v_y^2}{2}(k_y - k_{y,\text{vH}})^2" :inline="false" />
                </div>
                
                <div class="dos-calculation">
                  <h5>态密度计算</h5>
                  <div class="formula-block">
                    <katex-element expression="g(E) = \int \frac{d^2\mathbf{k}}{(2\pi)^2} \delta(E - E(\mathbf{k}))" :inline="false" />
                  </div>
                  
                  <p>在鞍点附近：</p>
                  <div class="formula-block">
                    <katex-element expression="g(E) \approx \frac{1}{2\pi v_x v_y} \ln\left|\frac{E - E_{\text{vH}}}{\Lambda}\right|" :inline="false" />
                  </div>
                  <p>其中 $\Lambda$ 是能量截断。</p>
                </div>
              </div>
            </div>
            
            <div class="green-function-method">
              <h4>格林函数方法</h4>
              <div class="green-function-content">
                <p>单粒子格林函数：</p>
                <div class="formula-block">
                  <katex-element expression="G(\mathbf{k}, i\omega_n) = \frac{1}{i\omega_n - E(\mathbf{k}) + \mu}" :inline="false" />
                </div>
                
                <p>态密度与格林函数的关系：</p>
                <div class="formula-block">
                  <katex-element expression="g(E) = -\frac{1}{\pi} \text{Im} \sum_{\mathbf{k}} G(\mathbf{k}, E + i0^+)" :inline="false" />
                </div>
                
                <div class="self-energy-corrections">
                  <h5>自能修正</h5>
                  <p>包含相互作用的格林函数：</p>
                  <div class="formula-block">
                    <katex-element expression="G(\mathbf{k}, i\omega_n) = \frac{1}{i\omega_n - E(\mathbf{k}) + \mu - \Sigma(\mathbf{k}, i\omega_n)}" :inline="false" />
                  </div>
                  
                  <p>其中 $\Sigma(\mathbf{k}, i\omega_n)$ 是自能。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="numerical-methods">
          <h3>数值方法</h3>
          <div class="numerical-content">
            <div class="band-structure-calculation">
              <h4>能带结构计算</h4>
              <div class="band-calculation-content">
                <div class="dft-methods">
                  <h5>密度泛函理论 (DFT)</h5>
                  <ul>
                    <li>第一性原理计算</li>
                    <li>精确的能带结构</li>
                    <li>van Hove奇点的准确位置</li>
                  </ul>
                  
                  <div class="dft-limitations">
                    <h6>DFT的局限性</h6>
                    <ul>
                      <li>低估能隙</li>
                      <li>忽略强关联效应</li>
                      <li>需要后处理修正</li>
                    </ul>
                  </div>
                </div>
                
                <div class="tight-binding-fitting">
                  <h5>紧束缚拟合</h5>
                  <p>将DFT结果拟合为紧束缚参数：</p>
                  <div class="formula-block">
                    <katex-element expression="E(\mathbf{k}) = \sum_{i,j} t_{ij} e^{i\mathbf{k} \cdot (\mathbf{R}_i - \mathbf{R}_j)}" :inline="false" />
                  </div>
                  
                  <p>优点：</p>
                  <ul>
                    <li>计算效率高</li>
                    <li>物理图像清晰</li>
                    <li>便于参数调节</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="fermi-surface-analysis">
              <h4>费米面分析</h4>
              <div class="fermi-surface-content">
                <div class="topology-identification">
                  <h5>拓扑识别算法</h5>
                  <div class="algorithm-steps">
                    <ol>
                      <li>在布里渊区内密集采样</li>
                      <li>计算每点的能量 $E(\mathbf{k})$</li>
                      <li>找到 $E(\mathbf{k}) = \mu$ 的等能面</li>
                      <li>分析连通性和拓扑性质</li>
                    </ol>
                  </div>
                </div>
                
                <div class="area-calculation">
                  <h5>费米面面积计算</h5>
                  <div class="formula-block">
                    <katex-element expression="A_{\text{FS}} = \int_{\text{FS}} \frac{d\mathbf{k}}{|\nabla_{\mathbf{k}} E(\mathbf{k})|}" :inline="false" />
                  </div>
                  
                  <p>数值积分方法：</p>
                  <ul>
                    <li>蒙特卡罗积分</li>
                    <li>自适应网格细化</li>
                    <li>等值线追踪算法</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="phase-diagram-construction">
              <h4>相图构建</h4>
              <div class="phase-diagram-content">
                <div class="parameter-scanning">
                  <h5>参数扫描</h5>
                  <p>系统地改变控制参数（如化学势、跳跃积分等），追踪费米面拓扑的变化。</p>
                  
                  <div class="scanning-strategy">
                    <h6>扫描策略</h6>
                    <ul>
                      <li>粗网格初步扫描</li>
                      <li>相变点附近细化</li>
                      <li>临界行为分析</li>
                    </ul>
                  </div>
                </div>
                
                <div class="transition-detection">
                  <h5>相变点检测</h5>
                  <div class="detection-criteria">
                    <div class="criterion">
                      <h6>拓扑不变量</h6>
                      <p>费米面的连通分量数目</p>
                    </div>
                    
                    <div class="criterion">
                      <h6>几何性质</h6>
                      <p>费米面的曲率、面积等</p>
                    </div>
                    
                    <div class="criterion">
                      <h6>物理量奇异性</h6>
                      <p>态密度、比热等的不连续性</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>小结与展望</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>关键要点</h3>
          <ul>
            <li>Lifshitz相变是费米面拓扑结构的突变，不涉及对称性破缺</li>
            <li>van Hove奇点在Lifshitz相变中起关键作用</li>
            <li>相变的临界指数具有特殊的维度依赖性</li>
            <li>实验上可通过多种谱学手段观测</li>
            <li>在多种材料中都有重要应用</li>
          </ul>
        </div>
        
        <div class="theoretical-significance">
          <h3>理论意义</h3>
          <ul>
            <li>拓展了相变理论的范畴</li>
            <li>连接了能带理论与多体物理</li>
            <li>为理解复杂材料提供了新视角</li>
            <li>推动了拓扑物态的发展</li>
          </ul>
        </div>
        
        <div class="future-directions">
          <h3>未来方向</h3>
          <ul>
            <li>强关联系统中的Lifshitz相变</li>
            <li>非平衡态下的费米面拓扑变化</li>
            <li>机器学习在相变识别中的应用</li>
            <li>拓扑超导体中的Lifshitz相变</li>
            <li>量子临界现象的深入研究</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import KatexElement from '../KatexElement.vue'
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.chapter-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.reading-time {
  background: rgba(255,255,255,0.15);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  border-left: 5px solid #667eea;
}

.introduction h2 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #4a5568;
  margin: 0;
  text-align: justify;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.basic-concepts {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.definition-card, .physical-picture {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.definition-card {
  border-left: 5px solid #10b981;
}

.physical-picture {
  border-left: 5px solid #3b82f6;
}

.definition-card h3, .physical-picture h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.definition-box {
  background: #f0fff4;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.classification {
  margin-top: 1rem;
}

.transition-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.transition-type {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.fermi-surface-evolution {
  margin: 1rem 0;
}

.evolution-stages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stage {
  text-align: center;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
}

.fermi-surface {
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
}

.surface-shape {
  width: 60px;
  height: 60px;
  border: 3px solid #4f46e5;
}

.surface-shape.circle {
  border-radius: 50%;
  background: rgba(79, 70, 229, 0.1);
}

.surface-shape.saddle {
  border-radius: 10px;
  background: linear-gradient(45deg, rgba(79, 70, 229, 0.1) 25%, transparent 25%, transparent 75%, rgba(79, 70, 229, 0.1) 75%);
  background-size: 20px 20px;
}

.surface-shape.lines {
  border: none;
  background: repeating-linear-gradient(
    0deg,
    #4f46e5,
    #4f46e5 3px,
    transparent 3px,
    transparent 15px
  );
}

.van-hove-singularity {
  background: #fef5e7;
  border-radius: 10px;
  padding: 1.5rem;
  margin-top: 1rem;
}

.singularity-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.singularity-type {
  background: #fafafa;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.theoretical-framework {
  margin-top: 1.5rem;
}

.landau-theory, .microscopic-models {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.landau-theory h3, .microscopic-models h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.free-energy-expansion, .scaling-theory {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.critical-behavior {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.dimension-table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.dimension-table th,
.dimension-table td {
  border: 1px solid #e2e8f0;
  padding: 0.75rem;
  text-align: center;
}

.dimension-table th {
  background: #f7fafc;
  font-weight: 600;
}

.tight-binding-model, .continuum-model {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.phase-diagram-1d {
  margin-top: 1rem;
}

.phase-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.phase {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.phase.empty {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.phase.partially-filled {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.phase.full {
  background: #f0fff4;
  border-left: 4px solid #38a169;
}

.anisotropy-effects {
  background: #fef5e7;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.anisotropy-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.regime {
  background: #fafafa;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  border: 1px solid #e2e8f0;
}

.square-lattice-model {
  margin-top: 1.5rem;
}

.model-setup, .phase-diagram {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.model-setup h3, .phase-diagram h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.hamiltonian, .van-hove-points {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.dispersion-relation {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.lifshitz-transitions {
  margin-top: 1rem;
}

.transition-conditions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.condition {
  background: #fafafa;
  border-radius: 8px;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.phase-regions-2d {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.phase-region {
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
}

.phase-region.electron-like {
  background: #e6fffa;
  border-left: 4px solid #38b2ac;
}

.phase-region.hole-like {
  background: #fef5e7;
  border-left: 4px solid #ed8936;
}

.phase-region.intermediate {
  background: #f0fff4;
  border-left: 4px solid #38a169;
}

.fermi-surface-topology {
  margin-top: 1rem;
}

.topology-evolution {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.evolution-step {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.physical-properties {
  margin-top: 1.5rem;
}

.thermodynamic-properties, .transport-properties, .experimental-signatures {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.thermodynamic-properties h3, .transport-properties h3, .experimental-signatures h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.specific-heat, .magnetic-susceptibility, .compressibility {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.critical-exponents {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.exponent-case {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
}

.temperature-effects {
  background: #fef5e7;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.electrical-conductivity, .hall-effect {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.conductivity-anomalies, .hall-anomalies {
  margin-top: 1rem;
}

.anomaly-types {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.anomaly {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
}

.spectroscopic-probes, .material-examples {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.spectroscopy-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.method {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #38a169;
}

.materials-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.material {
  background: #f8fafc;
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #4f46e5;
}

.material-details {
  margin-top: 0.5rem;
}

.calculation-methods {
  margin-top: 1.5rem;
}

.analytical-methods, .numerical-methods {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 2rem;
}

.analytical-methods h3, .numerical-methods h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.saddle-point-method, .green-function-method {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.dos-calculation, .self-energy-corrections {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
}

.band-structure-calculation, .fermi-surface-analysis, .phase-diagram-construction {
  background: #f8fafc;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.dft-methods, .tight-binding-fitting {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.dft-limitations {
  background: #fef5e7;
  border-radius: 6px;
  padding: 0.75rem;
  margin-top: 0.5rem;
}

.algorithm-steps ol {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.algorithm-steps li {
  margin: 0.25rem 0;
}

.scanning-strategy, .detection-criteria {
  margin-top: 1rem;
}

.detection-criteria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.criterion {
  background: #f0fff4;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
}

.summary-content {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.key-points, .theoretical-significance, .future-directions {
  margin-bottom: 2rem;
}

.key-points h3, .theoretical-significance h3, .future-directions h3 {
  color: #1e293b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.key-points ul, .theoretical-significance ul, .future-directions ul {
  list-style-type: none;
  padding: 0;
}

.key-points li, .theoretical-significance li, .future-directions li {
  background: #f8fafc;
  margin: 0.5rem 0;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border-left: 4px solid #4f46e5;
  position: relative;
}

.key-points li::before, .theoretical-significance li::before, .future-directions li::before {
  content: "▶";
  color: #4f46e5;
  font-weight: bold;
  margin-right: 0.5rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .chapter-meta {
    flex-direction: column;
    align-items: center;
  }
  
  .basic-concepts {
    grid-template-columns: 1fr;
  }
  
  .transition-types, .evolution-stages, .singularity-types {
    grid-template-columns: 1fr;
  }
  
  .critical-exponents, .anomaly-types, .transition-conditions {
    grid-template-columns: 1fr;
  }
  
  .phase-regions, .anisotropy-regimes {
    grid-template-columns: 1fr;
  }
  
  .phase-regions-2d, .topology-evolution {
    grid-template-columns: 1fr;
  }
  
  .spectroscopy-methods, .materials-list {
    grid-template-columns: 1fr;
  }
  
  .detection-criteria {
    grid-template-columns: 1fr;
  }
}
</style>