<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.5.3 拓扑量子相变：Su-Schrieffer-Heeger模型及其量子相变</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">SSH模型</span>
        <span class="chapter-tag">拓扑相变</span>
        <span class="chapter-tag">边界态</span>
        <span class="reading-time">⏱ 50分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Su-Schrieffer-Heeger (SSH) 模型是研究拓扑量子相变的经典模型，最初用于描述聚乙炔分子链中的电子态。
        该模型展现了丰富的拓扑物理现象，包括拓扑相变、边界态、以及拓扑不变量等概念。
        本节将详细介绍SSH模型的理论框架、拓扑性质、相变机制，以及在现代凝聚态物理中的重要应用，
        特别是在拓扑绝缘体和拓扑超导体研究中的基础作用。
      </p>
    </div>

    <section class="content-section">
      <h2>SSH模型的基本理论</h2>
      
      <div class="model-framework">
        <div class="hamiltonian-setup">
          <h3>哈密顿量构造</h3>
          <div class="hamiltonian-content">
            <div class="basic-model">
              <h4>基本SSH模型</h4>
              <p>SSH模型描述一维双原子链，具有交替的跳跃积分：</p>
              <div class="formula-block">
                <katex-element expression="H = \sum_{n=1}^{N} \left[ t_1 c_{A,n}^\dagger c_{B,n} + t_2 c_{B,n}^\dagger c_{A,n+1} + \text{h.c.} \right]" :inline="false" />
              </div>
              
              <p>其中：</p>
              <ul>
                <li>$c_{A,n}^\dagger$, $c_{A,n}$：A子格上第n个格点的费米子产生、湮灭算符</li><li>$c_{B,n}^\dagger$, $c_{B,n}$：B子格上第n个格点的费米子产生、湮灭算符</li><li>$t_1$：胞内跳跃积分（A-B键）</li><li>$t_2$：胞间跳跃积分（B-A键）</li><li>$N$：单胞数目</li>
              </ul>
            </div>
            
            <div class="lattice-structure">
              <h4>晶格结构</h4>
              <div class="structure-content">
                <p>SSH模型的晶格结构可以表示为：</p>
                <div class="structure-description">
                  <p><strong>单胞结构：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\cdots - A_n \overset{t_1}{\longleftrightarrow} B_n \overset{t_2}{\longleftrightarrow} A_{n+1} \overset{t_1}{\longleftrightarrow} B_{n+1} - \cdots" :inline="false" />
                  </div>
                  
                  <div class="structure-parameters">
                    <h5>关键参数</h5>
                    <div class="parameters-grid">
                      <div class="parameter">
                        <h6>二聚化参数</h6>
                        <div class="formula-block">
                          <katex-element expression="\delta = \frac{t_2 - t_1}{t_1 + t_2}" :inline="false" />
                        </div>
                        <p>描述键的交替强度</p>
                      </div>
                      
                      <div class="parameter">
                        <h6>平均跳跃积分</h6>
                        <div class="formula-block">
                          <katex-element expression="t = \frac{t_1 + t_2}{2}" :inline="false" />
                        </div>
                        <p>设定能量标度</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="momentum-space">
              <h4>动量空间表示</h4>
              <div class="momentum-content">
                <p>引入Bloch基矢：</p>
                <div class="formula-block">
                  <katex-element expression="c_{A,k} = \frac{1}{\sqrt{N}} \sum_n e^{ikna} c_{A,n}" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="c_{B,k} = \frac{1}{\sqrt{N}} \sum_n e^{ikna} c_{B,n}" :inline="false" />
                </div><p>其中$a$ 是晶格常数，$k \in [-\pi/a, \pi/a]$是第一布里渊区内的波矢。</p>
                
                <div class="bloch-hamiltonian">
                  <h5>Bloch哈密顿量</h5>
                  <div class="formula-block">
                    <katex-element expression="H(k) = \begin{pmatrix} 0 & t_1 + t_2 e^{-ika} \\ t_1 + t_2 e^{ika} & 0 \end{pmatrix}" :inline="false" />
                  </div>
                  
                  <p>可以写成Pauli矩阵的形式：</p>
                  <div class="formula-block">
                    <katex-element expression="H(k) = \mathbf{d}(k) \cdot \boldsymbol{\sigma}" :inline="false" />
                  </div>
                  
                  <p>其中：</p>
                  <div class="formula-block">
                    <katex-element expression="d_x(k) = t_1 + t_2 \cos(ka)" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="d_y(k) = t_2 \sin(ka)" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="d_z(k) = 0" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="energy-spectrum">
          <h3>能谱分析</h3>
          <div class="spectrum-content">
            <div class="dispersion-relation">
              <h4>色散关系</h4>
              <div class="dispersion-content">
                <p>对角化Bloch哈密顿量得到能带：</p>
                <div class="formula-block">
                  <katex-element expression="E_\pm(k) = \pm \sqrt{(t_1 + t_2 \cos(ka))^2 + (t_2 \sin(ka))^2}" :inline="false" />
                </div>
                
                <p>简化为：</p>
                <div class="formula-block">
                  <katex-element expression="E_\pm(k) = \pm \sqrt{t_1^2 + t_2^2 + 2t_1 t_2 \cos(ka)}" :inline="false" />
                </div>
                
                <div class="band-structure">
                  <h5>能带结构特征</h5>
                  <div class="band-features">
                    <div class="feature">
                      <h6>能隙</h6><p>在布里渊区边界 ($k = \pm\pi/a$) 处：</p>
                      <div class="formula-block">
                        <katex-element expression="E_g = 2|t_1 - t_2|" :inline="false" />
                      </div>
                      <p>能隙的存在与否决定了系统的拓扑性质。</p>
                    </div>
                    
                    <div class="feature">
                      <h6>临界点</h6><p>当$t_1 = t_2$时，能隙关闭：</p>
                      <div class="formula-block">
                        <katex-element expression="E_g = 0" :inline="false" />
                      </div>
                      <p>这是拓扑相变点。</p>
                    </div>
                  </div>
                </div>
                
                <div class="phase-diagram">
                  <h5>相图</h5>
                  <div class="phases">
                    <div class="phase trivial"><h6>平庸相 ($t_1 > t_2$)</h6>
                      <ul>
                        <li>胞内键较强</li>
                        <li>无边界态</li><li>拓扑不变量$\nu = 0$</li>
                      </ul>
                    </div>
                    
                    <div class="phase topological"><h6>拓扑相 ($t_1 < t_2$)</h6>
                      <ul>
                        <li>胞间键较强</li>
                        <li>存在边界态</li><li>拓扑不变量$\nu = 1$</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="eigenstates">
              <h4>本征态</h4>
              <div class="eigenstates-content">
                <p>Bloch态的本征矢为：</p>
                <div class="formula-block">
                  <katex-element expression="|u_\pm(k)\rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ \pm e^{i\phi(k)} \end{pmatrix}" :inline="false" />
                </div>
                
                <p>其中相位为：</p>
                <div class="formula-block">
                  <katex-element expression="e^{i\phi(k)} = \frac{t_1 + t_2 e^{-ika}}{|t_1 + t_2 e^{-ika}|}" :inline="false" />
                </div>
                
                <div class="berry-phase">
                  <h5>Berry相位</h5>
                  <p>Berry连接为：</p>
                  <div class="formula-block">
                    <katex-element expression="A_-(k) = i\langle u_-(k) | \frac{\partial}{\partial k} | u_-(k) \rangle" :inline="false" />
                  </div>
                  
                  <p>Berry相位（Zak相位）：</p>
                  <div class="formula-block">
                    <katex-element expression="\gamma = \oint_{BZ} dk \, A_-(k)" :inline="false" />
                  </div>
                  
                  <div class="zak-phase-values">
                    <h6>Zak相位的值</h6>
                    <div class="phase-values">
                      <div class="value"><p><strong>平庸相：</strong>$\gamma = 0$</p>
                      </div>
                      <div class="value"><p><strong>拓扑相：</strong>$\gamma = \pi$</p>
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
      <h2>拓扑性质与不变量</h2>
      
      <div class="topological-properties">
        <div class="winding-number">
          <h3>缠绕数</h3>
          <div class="winding-content">
            <div class="definition">
              <h4>缠绕数的定义</h4>
              <p>SSH模型的拓扑不变量是缠绕数：</p>
              <div class="formula-block">
                <katex-element expression="\nu = \frac{1}{2\pi i} \oint_{BZ} dk \, \frac{\partial}{\partial k} \ln[t_1 + t_2 e^{-ika}]" :inline="false" />
              </div>
              
              <p>或等价地：</p>
              <div class="formula-block">
                <katex-element expression="\nu = \frac{1}{2\pi} \oint_{BZ} dk \, \frac{d_x(k) \partial_k d_y(k) - d_y(k) \partial_k d_x(k)}{d_x(k)^2 + d_y(k)^2}" :inline="false" />
              </div>
            </div>
            
            <div class="calculation">
              <h4>缠绕数的计算</h4>
              <div class="calculation-content">
                <div class="case trivial-case"><h5>平庸相 ($t_1 > t_2$)</h5><p>当$t_1 > t_2$ 时，函数 $t_1 + t_2 e^{-ika}$在复平面上不包围原点：</p>
                  <div class="formula-block">
                    <katex-element expression="\nu = 0" :inline="false" />
                  </div>
                  
                  <div class="geometric-interpretation"><p><strong>几何解释：</strong>向量$(d_x(k), d_y(k))$ 在 $k$遍历布里渊区时不绕原点一周。</p>
                  </div>
                </div>
                
                <div class="case topological-case"><h5>拓扑相 ($t_1 < t_2$)</h5><p>当$t_1 < t_2$ 时，函数 $t_1 + t_2 e^{-ika}$在复平面上包围原点一次：</p>
                  <div class="formula-block">
                    <katex-element expression="\nu = 1" :inline="false" />
                  </div>
                  
                  <div class="geometric-interpretation"><p><strong>几何解释：</strong>向量$(d_x(k), d_y(k))$ 在 $k$遍历布里渊区时绕原点一周。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bulk-boundary-correspondence">
              <h4>体-边对应关系</h4>
              <div class="correspondence-content">
                <p>拓扑不变量与边界态数目的关系：</p>
                <div class="formula-block">
                  <katex-element expression="N_{\text{edge}} = |\nu_L - \nu_R|" :inline="false" />
                </div><p>其中$\nu_L$ 和 $\nu_R$分别是左右两侧体系的拓扑不变量。</p>
                
                <div class="correspondence-examples">
                  <h5>具体例子</h5>
                  <div class="examples-grid">
                    <div class="example">
                      <h6>拓扑-平庸界面</h6><p>$\nu_L = 1$, $\nu_R = 0$→ 1个边界态</p>
                    </div>
                    
                    <div class="example">
                      <h6>平庸-拓扑界面</h6><p>$\nu_L = 0$, $\nu_R = 1$→ 1个边界态</p>
                    </div>
                    
                    <div class="example">
                      <h6>同相界面</h6><p>$\nu_L = \nu_R$→ 0个边界态</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="edge-states">
          <h3>边界态</h3>
          <div class="edge-content">
            <div class="edge-state-calculation">
              <h4>边界态的计算</h4>
              <div class="calculation-method"><p>考虑半无限链，边界条件为$c_{A,0} = 0$。寻找能量为零的边界态：</p>
                <div class="formula-block">
                  <katex-element expression="H |\psi_{\text{edge}} \rangle = 0" :inline="false" />
                </div>
                
                <div class="ansatz">
                  <h5>边界态波函数</h5>
                  <p>设边界态波函数为：</p>
                  <div class="formula-block">
                    <katex-element expression="|\psi_{\text{edge}} \rangle = \sum_{n=1}^{\infty} \left[ \alpha_n c_{A,n}^\dagger + \beta_n c_{B,n}^\dagger \right] |0\rangle" :inline="false" />
                  </div>
                  
                  <p>边界条件和薛定谔方程给出递推关系：</p>
                  <div class="formula-block">
                    <katex-element expression="t_1 \beta_1 = 0" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="t_1 \alpha_n + t_2 \beta_{n-1} = 0" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="t_2 \alpha_{n+1} + t_1 \beta_n = 0" :inline="false" />
                  </div>
                </div>
                
                <div class="solution">
                  <h5>解的形式</h5><p>在拓扑相 ($t_1 < t_2$) 中，边界态解为：</p>
                  <div class="formula-block">
                    <katex-element expression="\alpha_n = A \left(-\frac{t_1}{t_2}\right)^{n-1}" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="\beta_n = 0" :inline="false" />
                  </div><p>其中$A$是归一化常数。边界态局域在A子格上，局域长度为：</p>
                  <div class="formula-block">
                    <katex-element expression="\xi = \frac{1}{\ln(t_2/t_1)}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="edge-state-properties">
              <h4>边界态性质</h4>
              <div class="properties-content">
                <div class="localization">
                  <h5>局域化</h5>
                  <ul>
                    <li>边界态指数局域在链的端点</li><li>局域长度由$t_1/t_2$比值决定</li>
                    <li>越接近临界点，局域长度越大</li>
                  </ul>
                </div>
                
                <div class="energy">
                  <h5>能量</h5>
                  <ul>
                    <li>边界态能量严格为零</li>
                    <li>位于能隙中心</li>
                    <li>受拓扑保护，不受微扰影响</li>
                  </ul>
                </div>
                
                <div class="sublattice-polarization">
                  <h5>子格极化</h5>
                  <ul>
                    <li>拓扑相：边界态局域在A子格</li>
                    <li>平庸相：无边界态</li>
                    <li>子格极化是拓扑性质的体现</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>拓扑相变</h2>
      
      <div class="phase-transition">
        <div class="transition-mechanism">
          <h3>相变机制</h3>
          <div class="mechanism-content">
            <div class="gap-closing">
              <h4>能隙关闭</h4>
              <div class="gap-content">
                <p>拓扑相变发生在能隙关闭点：</p>
                <div class="formula-block">
                  <katex-element expression="t_1 = t_2" :inline="false" />
                </div><p>此时在布里渊区边界 ($k = \pm\pi/a$) 处能隙关闭：</p>
                <div class="formula-block">
                  <katex-element expression="E_\pm(\pm\pi/a) = 0" :inline="false" />
                </div>
                
                <div class="critical-behavior">
                  <h5>临界行为</h5>
                  <p>接近临界点时，能隙的行为为：</p>
                  <div class="formula-block">
                    <katex-element expression="E_g \propto |t_1 - t_2|" :inline="false" />
                  </div>
                  
                  <p>这表明相变是连续的（二级相变）。</p>
                </div>
              </div>
            </div>
            
            <div class="order-parameter">
              <h4>序参量</h4>
              <div class="order-content">
                <p>虽然拓扑相变不破坏局域对称性，但可以定义有效的序参量：</p>
                
                <div class="dimerization-order">
                  <h5>二聚化序参量</h5>
                  <div class="formula-block">
                    <katex-element expression="\Delta = \langle (-1)^n (c_{A,n}^\dagger c_{B,n} - c_{B,n}^\dagger c_{A,n+1}) \rangle" :inline="false" />
                  </div>
                  
                  <p>在不同相中的行为：</p>
                  <ul><li>平庸相：$\Delta > 0$（胞内键占主导）</li><li>拓扑相：$\Delta < 0$（胞间键占主导）</li><li>临界点：$\Delta = 0$</li>
                  </ul>
                </div>
                
                <div class="polarization-order">
                  <h5>极化序参量</h5>
                  <div class="formula-block">
                    <katex-element expression="P = \frac{1}{2\pi} \int_{-\pi}^{\pi} dk \, A_-(k)" :inline="false" />
                  </div>
                  
                  <p>这直接关联到Zak相位和拓扑不变量。</p>
                </div>
              </div>
            </div>
            
            <div class="universality-class">
              <h4>普适类</h4>
              <div class="universality-content">
                <p>SSH模型的拓扑相变属于特殊的普适类：</p>
                
                <div class="critical-exponents">
                  <h5>临界指数</h5>
                  <div class="exponents-grid">
                    <div class="exponent">
                      <h6>关联长度指数</h6>
                      <div class="formula-block">
                        <katex-element expression="\nu = 1" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="exponent">
                      <h6>序参量指数</h6>
                      <div class="formula-block">
                        <katex-element expression="\beta = 1" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="exponent">
                      <h6>比热指数</h6>
                      <div class="formula-block">
                        <katex-element expression="\alpha = 0" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="scaling-behavior">
                  <h5>标度行为</h5>
                  <p>接近临界点的标度行为：</p>
                  <div class="formula-block">
                    <katex-element expression="\xi \sim |t_1 - t_2|^{-1}" :inline="false" />
                  </div><p>其中$\xi$是关联长度。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="finite-size-effects">
          <h3>有限尺寸效应</h3>
          <div class="finite-size-content">
            <div class="size-scaling">
              <h4>尺寸标度</h4>
              <div class="scaling-content"><p>有限链长$L$对拓扑性质的影响：</p>
                
                <div class="edge-state-splitting">
                  <h5>边界态劈裂</h5>
                  <p>两端边界态的耦合导致能级劈裂：</p>
                  <div class="formula-block">
                    <katex-element expression="\Delta E \sim e^{-L/\xi}" :inline="false" />
                  </div><p>其中$\xi = 1/\ln(t_2/t_1)$是局域长度。</p>
                </div>
                
                <div class="gap-scaling">
                  <h5>能隙的有限尺寸修正</h5>
                  <p>有限系统中的有效能隙：</p>
                  <div class="formula-block">
                    <katex-element expression="E_g^{\text{eff}} = \max(E_g^{\text{bulk}}, \Delta E)" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="boundary-conditions">
              <h4>边界条件的影响</h4>
              <div class="boundary-content">
                <div class="open-boundary">
                  <h5>开边界条件</h5>
                  <ul>
                    <li>拓扑相中存在零能边界态</li>
                    <li>边界态数目由体-边对应确定</li>
                    <li>边界态受拓扑保护</li>
                  </ul>
                </div>
                
                <div class="periodic-boundary">
                  <h5>周期边界条件</h5>
                  <ul>
                    <li>无边界态</li>
                    <li>拓扑性质通过Zak相位体现</li>
                    <li>能谱完全由体态决定</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>推广与应用</h2>
      
      <div class="extensions-applications">
        <div class="model-extensions">
          <h3>模型推广</h3>
          <div class="extensions-content">
            <div class="interactions">
              <h4>相互作用效应</h4>
              <div class="interaction-content">
                <div class="hubbard-interaction">
                  <h5>Hubbard相互作用</h5>
                  <p>添加在位库仑相互作用：</p>
                  <div class="formula-block">
                    <katex-element expression="H_{\text{int}} = U \sum_{n,\sigma} \left( n_{A,n,\sigma} n_{A,n,-\sigma} + n_{B,n,\sigma} n_{B,n,-\sigma} \right)" :inline="false" />
                  </div>
                  
                  <div class="interaction-effects">
                    <h6>相互作用的影响</h6>
                    <ul>
                      <li>Mott绝缘体相的出现</li>
                      <li>拓扑Mott绝缘体</li>
                      <li>边界态的稳定性</li>
                      <li>多体拓扑不变量</li>
                    </ul>
                  </div>
                </div>
                
                <div class="long-range-hopping">
                  <h5>长程跳跃</h5>
                  <p>包含次近邻跳跃：</p>
                  <div class="formula-block">
                    <katex-element expression="H_{\text{lr}} = \sum_{n,m} t_{nm} c_n^\dagger c_m" :inline="false" />
                  </div><p>其中$t_{nm}$可以是长程的。</p>
                </div>
              </div>
            </div>
            
            <div class="higher-dimensions">
              <h4>高维推广</h4>
              <div class="higher-dim-content">
                <div class="two-dimensional">
                  <h5>二维SSH模型</h5>
                  <p>二维方格子上的推广：</p>
                  <div class="formula-block">
                    <katex-element expression="H_{2D} = \sum_{\mathbf{r}} \left[ t_x(\mathbf{r}) c_{\mathbf{r}}^\dagger c_{\mathbf{r}+\hat{x}} + t_y(\mathbf{r}) c_{\mathbf{r}}^\dagger c_{\mathbf{r}+\hat{y}} + \text{h.c.} \right]" :inline="false" />
                  </div>
                  
                  <div class="2d-topology">
                    <h6>二维拓扑性质</h6>
                    <ul>
                      <li>Chern数作为拓扑不变量</li>
                      <li>边界态形成一维导电通道</li>
                      <li>量子霍尔效应的实现</li>
                    </ul>
                  </div>
                </div>
                
                <div class="three-dimensional">
                  <h5>三维拓扑绝缘体</h5>
                  <p>三维情况下的拓扑分类：</p>
                  <ul><li>$\mathbb{Z}_2$拓扑不变量</li>
                    <li>表面态的存在</li>
                    <li>自旋-轨道耦合的重要性</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="disorder-effects">
              <h4>无序效应</h4>
              <div class="disorder-content">
                <div class="anderson-localization">
                  <h5>Anderson局域化</h5>
                  <p>随机势对拓扑性质的影响：</p>
                  <div class="formula-block">
                    <katex-element expression="H_{\text{dis}} = \sum_n V_n c_n^\dagger c_n" :inline="false" />
                  </div><p>其中$V_n$ 是随机势。</p>
                </div>
                
                <div class="topological-anderson-insulator">
                  <h5>拓扑Anderson绝缘体</h5>
                  <ul>
                    <li>无序诱导的拓扑相变</li>
                    <li>边界态的鲁棒性</li>
                    <li>局域化长度的计算</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-realizations">
          <h3>实验实现</h3>
          <div class="experimental-content">
            <div class="cold-atoms">
              <h4>冷原子系统</h4>
              <div class="cold-atoms-content">
                <div class="optical-lattices">
                  <h5>光晶格实现</h5>
                  <p>利用激光构造人工晶格：</p>
                  <ul>
                    <li>可调节的跳跃积分</li>
                    <li>精确控制的参数</li>
                    <li>实时观测拓扑相变</li>
                  </ul>
                  
                  <div class="experimental-techniques">
                    <h6>实验技术</h6>
                    <ul>
                      <li>原位成像观测密度分布</li>
                      <li>Bloch振荡测量能带结构</li>
                      <li>量子气体显微镜</li>
                    </ul>
                  </div>
                </div>
                
                <div class="synthetic-dimensions">
                  <h5>合成维度</h5>
                  <p>利用内部自由度构造合成维度：</p>
                  <ul>
                    <li>自旋态作为格点</li>
                    <li>拉曼耦合实现跳跃</li>
                    <li>高维拓扑物理的模拟</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="photonic-systems">
              <h4>光子系统</h4>
              <div class="photonic-content">
                <div class="photonic-crystals">
                  <h5>光子晶体</h5>
                  <ul>
                    <li>介电常数的周期调制</li>
                    <li>光子能带的拓扑性质</li>
                    <li>边界态的直接观测</li>
                  </ul>
                </div>
                
                <div class="waveguide-arrays">
                  <h5>波导阵列</h5>
                  <ul>
                    <li>耦合波导的制备</li>
                    <li>光传播的实时监测</li>
                    <li>拓扑保护的验证</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="electronic-systems">
              <h4>电子系统</h4>
              <div class="electronic-content">
                <div class="quantum-wires">
                  <h5>量子线</h5>
                  <ul>
                    <li>半导体异质结构</li>
                    <li>电学输运测量</li>
                    <li>边界态的电导贡献</li>
                  </ul>
                </div>
                
                <div class="molecular-chains">
                  <h5>分子链</h5>
                  <ul>
                    <li>聚乙炔等共轭聚合物</li>
                    <li>STM/STS表征</li>
                    <li>单分子水平的研究</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="technological-applications">
          <h3>技术应用</h3>
          <div class="applications-content">
            <div class="quantum-computing">
              <h4>量子计算</h4>
              <div class="quantum-computing-content">
                <div class="topological-qubits">
                  <h5>拓扑量子比特</h5>
                  <ul>
                    <li>拓扑保护的量子信息</li>
                    <li>对局域扰动的免疫</li>
                    <li>容错量子计算</li>
                  </ul>
                </div>
                
                <div class="braiding-operations">
                  <h5>编织操作</h5>
                  <ul>
                    <li>非阿贝尔统计</li>
                    <li>拓扑量子门</li>
                    <li>通用量子计算</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="sensing-applications">
              <h4>传感应用</h4>
              <div class="sensing-content">
                <div class="topological-sensors">
                  <h5>拓扑传感器</h5>
                  <ul>
                    <li>高精度测量</li>
                    <li>噪声抑制</li>
                    <li>鲁棒性增强</li>
                  </ul>
                </div>
                
                <div class="edge-state-sensors">
                  <h5>边界态传感器</h5>
                  <ul>
                    <li>局域化增强灵敏度</li>
                    <li>选择性检测</li>
                    <li>单分子检测</li>
                  </ul>
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
        <div class="key-insights">
          <h3>关键洞察</h3>
          <ul>
            <li>SSH模型是理解拓扑量子相变的基础模型</li>
            <li>拓扑不变量（缠绕数）决定了边界态的存在</li>
            <li>体-边对应关系是拓扑物理的核心原理</li>
            <li>拓扑相变不涉及对称性破缺，而是拓扑性质的改变</li>
            <li>边界态受拓扑保护，对局域扰动具有鲁棒性</li>
          </ul>
        </div>
        
        <div class="theoretical-significance">
          <h3>理论意义</h3>
          <ul>
            <li>建立了拓扑量子物态的基本概念框架</li>
            <li>为高维拓扑绝缘体理论奠定基础</li>
            <li>揭示了量子几何相位的物理重要性</li>
            <li>连接了凝聚态物理与拓扑数学</li>
          </ul>
        </div>
        
        <div class="future-directions">
          <h3>未来方向</h3>
          <ul>
            <li>多体相互作用下的拓扑相变</li>
            <li>非平衡态拓扑物理</li>
            <li>机器学习在拓扑相识别中的应用</li>
            <li>拓扑量子计算的实用化</li>
            <li>新型拓扑材料的设计与合成</li>
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
  background: linear-gradient(135deg, #8e24aa 0%, #3f51b5 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(142, 36, 170, 0.3);
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
  background: #f3e5f5;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  border-left: 5px solid #8e24aa;
}

.lead-text {
  font-size: 1.1rem;
  color: #4a148c;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 2rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #8e24aa;
}

.model-framework, .topological-properties, .phase-transition, .extensions-applications {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.hamiltonian-setup h3, .energy-spectrum h3, .winding-number h3, .edge-states h3, .transition-mechanism h3, .finite-size-effects h3, .model-extensions h3, .experimental-realizations h3, .technological-applications h3 {
  color: #4a148c;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #8e24aa;
}

.hamiltonian-content, .spectrum-content, .winding-content, .edge-content, .mechanism-content, .finite-size-content, .extensions-content, .experimental-content, .applications-content {
  display: grid;
  gap: 2rem;
}

.basic-model, .lattice-structure, .momentum-space, .dispersion-relation, .eigenstates, .definition, .calculation, .bulk-boundary-correspondence, .edge-state-calculation, .edge-state-properties, .gap-closing, .order-parameter, .universality-class, .size-scaling, .boundary-conditions, .interactions, .higher-dimensions, .disorder-effects, .cold-atoms, .photonic-systems, .electronic-systems, .quantum-computing, .sensing-applications {
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}

.basic-model h4, .lattice-structure h4, .momentum-space h4, .dispersion-relation h4, .eigenstates h4, .definition h4, .calculation h4, .bulk-boundary-correspondence h4, .edge-state-calculation h4, .edge-state-properties h4, .gap-closing h4, .order-parameter h4, .universality-class h4, .size-scaling h4, .boundary-conditions h4, .interactions h4, .higher-dimensions h4, .disorder-effects h4, .cold-atoms h4, .photonic-systems h4, .electronic-systems h4, .quantum-computing h4, .sensing-applications h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.formula-block {
  background: #ffffff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border: 1px solid #dee2e6;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.structure-content, .momentum-content, .dispersion-content, .eigenstates-content, .winding-content, .calculation-content, .correspondence-content, .calculation-method, .properties-content, .gap-content, .order-content, .universality-content, .scaling-content, .boundary-content, .interaction-content, .higher-dim-content, .disorder-content, .cold-atoms-content, .photonic-content, .electronic-content, .quantum-computing-content, .sensing-content {
  margin-top: 1rem;
}

.structure-parameters, .bloch-hamiltonian, .band-structure, .phase-diagram, .berry-phase, .geometric-interpretation, .correspondence-examples, .ansatz, .solution, .localization, .energy, .sublattice-polarization, .critical-behavior, .dimerization-order, .polarization-order, .critical-exponents, .scaling-behavior, .edge-state-splitting, .gap-scaling, .open-boundary, .periodic-boundary, .hubbard-interaction, .long-range-hopping, .two-dimensional, .three-dimensional, .anderson-localization, .topological-anderson-insulator, .optical-lattices, .synthetic-dimensions, .photonic-crystals, .waveguide-arrays, .quantum-wires, .molecular-chains, .topological-qubits, .braiding-operations, .topological-sensors, .edge-state-sensors {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #4caf50;
}

.structure-parameters h5, .bloch-hamiltonian h5, .band-structure h5, .phase-diagram h5, .berry-phase h5, .geometric-interpretation p, .correspondence-examples h5, .ansatz h5, .solution h5, .localization h5, .energy h5, .sublattice-polarization h5, .critical-behavior h5, .dimerization-order h5, .polarization-order h5, .critical-exponents h5, .scaling-behavior h5, .edge-state-splitting h5, .gap-scaling h5, .open-boundary h5, .periodic-boundary h5, .hubbard-interaction h5, .long-range-hopping h5, .two-dimensional h5, .three-dimensional h5, .anderson-localization h5, .topological-anderson-insulator h5, .optical-lattices h5, .synthetic-dimensions h5, .photonic-crystals h5, .waveguide-arrays h5, .quantum-wires h5, .molecular-chains h5, .topological-qubits h5, .braiding-operations h5, .topological-sensors h5, .edge-state-sensors h5 {
  color: #2e7d32;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.parameters-grid, .band-features, .phases, .zak-phase-values, .examples-grid, .exponents-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.parameter, .feature, .phase, .value, .example, .exponent {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.parameter h6, .feature h6, .phase h6, .example h6, .exponent h6 {
  color: #424242;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.trivial {
  border-left: 4px solid #f44336;
}

.topological {
  border-left: 4px solid #2196f3;
}

.trivial-case, .topological-case {
  background: #fff3e0;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #ff9800;
}

.trivial-case h5, .topological-case h5 {
  color: #f57c00;
  margin-bottom: 0.8rem;
}

.interaction-effects, .2d-topology, .experimental-techniques {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #2196f3;
}

.interaction-effects h6, .2d-topology h6, .experimental-techniques h6 {
  color: #1976d2;
  margin-bottom: 0.8rem;
}

.summary-content {
  background: linear-gradient(135deg, #8e24aa 0%, #3f51b5 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.key-insights, .theoretical-significance, .future-directions {
  margin-bottom: 2rem;
}

.key-insights h3, .theoretical-significance h3, .future-directions h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.key-insights ul, .theoretical-significance ul, .future-directions ul {
  margin-left: 1.5rem;
}

.key-insights li, .theoretical-significance li, .future-directions li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
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
  
  .parameters-grid, .band-features, .phases, .zak-phase-values, .examples-grid, .exponents-grid {
    grid-template-columns: 1fr;
  }
  
  .model-framework, .topological-properties, .phase-transition, .extensions-applications {
    padding: 1rem;
  }
}
</style>