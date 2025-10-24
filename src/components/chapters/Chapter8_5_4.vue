<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.5.4 一维量子横场Ising模型中的拓扑物态与Majorana费米子</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">横场Ising模型</span>
        <span class="chapter-tag">Majorana费米子</span>
        <span class="chapter-tag">拓扑超导</span>
        <span class="reading-time">⏱ 55分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一维量子横场Ising模型（TFIM）是研究拓扑量子相变和Majorana费米子的重要理论模型。
        该模型不仅展现了丰富的量子相变现象，更重要的是在特定条件下可以实现拓扑超导相，
        支持Majorana零模态的存在。这些Majorana费米子具有非阿贝尔统计性质，
        是实现拓扑量子计算的关键要素。本节将深入探讨TFIM的拓扑性质、Majorana费米子的产生机制、
        以及它们在量子信息处理中的潜在应用。
      </p>
    </div>

    <section class="content-section">
      <h2>量子横场Ising模型</h2>
      
      <div class="tfim-framework">
        <div class="model-definition">
          <h3>模型定义</h3>
          <div class="definition-content">
            <div class="hamiltonian">
              <h4>哈密顿量</h4>
              <p>一维量子横场Ising模型的哈密顿量为：</p>
              <div class="formula-block">
                <katex-element expression="H = -J \sum_{i=1}^{N-1} \sigma_i^z \sigma_{i+1}^z - h \sum_{i=1}^{N} \sigma_i^x - \mu \sum_{i=1}^{N} \sigma_i^z" :inline="false" />
              </div>
              
              <p>其中：</p>
              <ul>
                <li>$\sigma_i^{x,y,z}$：第 $i$个格点上的Pauli矩阵</li><li>$J$：Ising相互作用强度</li><li>$h$：横向磁场强度</li><li>$\mu$：化学势（纵向磁场）</li><li>$N$：格点总数</li>
              </ul>
            </div>
            
            <div class="parameter-space">
              <h4>参数空间</h4>
              <div class="parameter-content">
                <div class="phase-diagram-description">
                  <h5>相图结构</h5><p>模型在$(J, h, \mu)$参数空间中展现不同的量子相：</p>
                  
                  <div class="phases-grid">
                    <div class="phase ferromagnetic"><h6>铁磁相 ($h \ll J$)</h6>
                      <ul><li>自发磁化：$\langle \sigma^z \rangle \neq 0$</li><li>$\mathbb{Z}_2$对称性破缺</li>
                        <li>能隙打开</li>
                        <li>局域序参量</li>
                      </ul>
                    </div>
                    
                    <div class="phase paramagnetic"><h6>顺磁相 ($h \gg J$)</h6>
                      <ul><li>无自发磁化：$\langle \sigma^z \rangle = 0$</li><li>$\mathbb{Z}_2$对称性保持</li>
                        <li>能隙打开</li>
                        <li>量子涨落主导</li>
                      </ul>
                    </div>
                    
                    <div class="phase critical"><h6>临界相 ($h \approx J$)</h6>
                      <ul>
                        <li>量子相变点</li>
                        <li>能隙关闭</li>
                        <li>共形不变性</li>
                        <li>幂律关联</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="topological-phase">
                  <h5>拓扑相的出现</h5>
                  <p>当引入适当的边界条件和参数调节时，TFIM可以实现拓扑超导相：</p>
                  <div class="formula-block">
                    <katex-element expression="H_{\text{topo}} = -J \sum_{i} \sigma_i^z \sigma_{i+1}^z - h \sum_{i} \sigma_i^x + \Delta \sum_{i} (\sigma_i^+ \sigma_{i+1}^+ + \text{h.c.})" :inline="false" />
                  </div><p>其中$\Delta$ 是超导配对项，$\sigma_i^+ = (\sigma_i^x + i\sigma_i^y)/2$。</p>
                </div>
              </div>
            </div>
            
            <div class="jordan-wigner-transformation">
              <h4>Jordan-Wigner变换</h4>
              <div class="transformation-content">
                <p>通过Jordan-Wigner变换将自旋模型映射到费米子模型：</p>
                <div class="formula-block">
                  <katex-element expression="\sigma_j^+ = c_j^\dagger \prod_{k<j} (-\sigma_k^z)" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\sigma_j^- = \prod_{k<j} (-\sigma_k^z) c_j" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\sigma_j^z = 2c_j^\dagger c_j - 1" :inline="false" />
                </div>
                
                <div class="fermionic-hamiltonian">
                  <h5>费米子哈密顿量</h5>
                  <p>变换后的哈密顿量为：</p>
                  <div class="formula-block">
                    <katex-element expression="H_f = -J \sum_j (2c_j^\dagger c_j - 1)(2c_{j+1}^\dagger c_{j+1} - 1) - h \sum_j (c_j^\dagger + c_j)" :inline="false" />
                  </div>
                  
                  <p>简化为：</p>
                  <div class="formula-block">
                    <katex-element expression="H_f = \sum_j \left[ -t(c_j^\dagger c_{j+1} + c_{j+1}^\dagger c_j) + \Delta(c_j c_{j+1} + c_{j+1}^\dagger c_j^\dagger) + \mu c_j^\dagger c_j \right]" :inline="false" />
                  </div><p>其中$t = J$，$\Delta = J$，$\mu = -h$。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="kitaev-chain">
          <h3>Kitaev链模型</h3>
          <div class="kitaev-content">
            <div class="model-setup">
              <h4>模型构造</h4>
              <div class="setup-content">
                <p>Kitaev链是TFIM在特定参数下的有效描述：</p>
                <div class="formula-block">
                  <katex-element expression="H_K = -\mu \sum_j c_j^\dagger c_j - t \sum_j (c_j^\dagger c_{j+1} + c_{j+1}^\dagger c_j) + \Delta \sum_j (c_j c_{j+1} + c_{j+1}^\dagger c_j^\dagger)" :inline="false" />
                </div>
                
                <div class="parameter-regimes">
                  <h5>参数区间</h5>
                  <div class="regimes-grid">
                    <div class="regime trivial">
                      <h6>平庸相</h6><p>$|\mu| > 2|t|$</p>
                      <ul>
                        <li>能隙打开</li>
                        <li>无边界态</li><li>拓扑不变量$\mathcal{Q} = 0$</li>
                      </ul>
                    </div>
                    
                    <div class="regime topological">
                      <h6>拓扑相</h6><p>$|\mu| < 2|t|$</p>
                      <ul>
                        <li>能隙打开</li>
                        <li>Majorana边界态</li><li>拓扑不变量$\mathcal{Q} = 1$</li>
                      </ul>
                    </div>
                    
                    <div class="regime critical">
                      <h6>临界点</h6><p>$|\mu| = 2|t|$</p>
                      <ul>
                        <li>能隙关闭</li>
                        <li>拓扑相变</li>
                        <li>临界行为</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bogoliubov-transformation">
              <h4>Bogoliubov变换</h4>
              <div class="bogoliubov-content">
                <p>引入Bogoliubov准粒子算符：</p>
                <div class="formula-block">
                  <katex-element expression="\gamma_k = u_k c_k + v_k c_{-k}^\dagger" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\gamma_{-k}^\dagger = u_k c_{-k}^\dagger + v_k c_k" :inline="false" />
                </div>
                
                <p>其中Bogoliubov系数满足：</p>
                <div class="formula-block">
                  <katex-element expression="|u_k|^2 + |v_k|^2 = 1" :inline="false" />
                </div>
                
                <div class="energy-spectrum">
                  <h5>能谱</h5>
                  <p>对角化后的能谱为：</p>
                  <div class="formula-block">
                    <katex-element expression="E_k = \sqrt{(\epsilon_k - \mu)^2 + |\Delta|^2}" :inline="false" />
                  </div><p>其中$\epsilon_k = -2t\cos(k)$是自由费米子色散关系。</p>
                  
                  <div class="gap-analysis">
                    <h6>能隙分析</h6><p>最小能隙出现在$k = 0$ 或 $k = \pi$：</p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{gap}} = \min(|\mu + 2t|, |\mu - 2t|)" :inline="false" />
                    </div><p>能隙关闭条件：$\mu = \pm 2t$</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Majorana费米子</h2>
      
      <div class="majorana-physics">
        <div class="majorana-definition">
          <h3>Majorana费米子的定义</h3>
          <div class="definition-content">
            <div class="mathematical-definition">
              <h4>数学定义</h4>
              <div class="math-content">
                <p>Majorana费米子是满足以下条件的费米子算符：</p>
                <div class="formula-block">
                  <katex-element expression="\gamma^\dagger = \gamma" :inline="false" />
                </div><p>即Majorana算符是厄米的。对于复费米子$c$，可以定义两个Majorana费米子：</p>
                <div class="formula-block">
                  <katex-element expression="\gamma_1 = c + c^\dagger" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\gamma_2 = i(c^\dagger - c)" :inline="false" />
                </div>
                
                <div class="anticommutation-relations">
                  <h5>反对易关系</h5>
                  <p>Majorana费米子满足：</p>
                  <div class="formula-block">
                    <katex-element expression="\{\gamma_i, \gamma_j\} = 2\delta_{ij}" :inline="false" />
                  </div>
                  
                  <p>特别地：</p>
                  <div class="formula-block">
                    <katex-element expression="\gamma_i^2 = 1" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="physical-properties">
              <h4>物理性质</h4>
              <div class="properties-content">
                <div class="self-conjugate">
                  <h5>自共轭性</h5>
                  <ul>
                    <li>Majorana费米子是自己的反粒子</li>
                    <li>电荷为零</li>
                    <li>实费米子</li>
                    <li>时间反演对称</li>
                  </ul>
                </div>
                
                <div class="zero-energy">
                  <h5>零能性质</h5>
                  <ul><li>Majorana零模态：$E = 0$</li>
                    <li>费米能级处的态</li>
                    <li>拓扑保护</li>
                    <li>能隙中的态</li>
                  </ul>
                </div>
                
                <div class="localization">
                  <h5>局域化</h5>
                  <ul>
                    <li>边界局域化</li>
                    <li>指数衰减</li><li>局域长度$\xi \sim 1/E_{\text{gap}}$</li>
                    <li>空间分离</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="majorana-in-kitaev">
          <h3>Kitaev链中的Majorana费米子</h3>
          <div class="kitaev-majorana-content">
            <div class="edge-states">
              <h4>边界态计算</h4>
              <div class="edge-calculation">
                <p>考虑开边界条件的Kitaev链，寻找零能解：</p>
                <div class="formula-block">
                  <katex-element expression="H |\psi_0 \rangle = 0" :inline="false" />
                </div>
                
                <div class="ansatz-solution">
                  <h5>边界态波函数</h5>
                  <p>左边界Majorana态：</p>
                  <div class="formula-block">
                    <katex-element expression="|\psi_L \rangle = \sum_{j=1}^N \phi_j c_j^\dagger |0\rangle" :inline="false" />
                  </div>
                  
                  <p>其中波函数满足：</p>
                  <div class="formula-block">
                    <katex-element expression="\phi_j = A e^{-j/\xi}" :inline="false" />
                  </div>
                  
                  <p>局域长度为：</p>
                  <div class="formula-block">
                    <katex-element expression="\xi = \frac{1}{\ln|t/\Delta|}" :inline="false" />
                  </div>
                </div>
                
                <div class="right-edge">
                  <h5>右边界态</h5>
                  <p>右边界Majorana态：</p>
                  <div class="formula-block">
                    <katex-element expression="|\psi_R \rangle = \sum_{j=1}^N \phi_{N+1-j} c_j |0\rangle" :inline="false" />
                  </div>
                  
                  <p>两个边界态在空间上分离，重叠可忽略。</p>
                </div>
              </div>
            </div>
            
            <div class="majorana-operators">
              <h4>Majorana算符构造</h4>
              <div class="operators-content">
                <p>定义边界Majorana算符：</p>
                <div class="formula-block">
                  <katex-element expression="\gamma_L = c_1 + c_1^\dagger" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="\gamma_R = i(c_N^\dagger - c_N)" :inline="false" />
                </div>
                
                <div class="fermion-parity">
                  <h5>费米子宇称</h5>
                  <p>两个Majorana费米子组成一个复费米子：</p>
                  <div class="formula-block">
                    <katex-element expression="f = \frac{\gamma_L + i\gamma_R}{2}" :inline="false" />
                  </div>
                  
                  <p>费米子宇称算符：</p>
                  <div class="formula-block">
                    <katex-element expression="P = (-1)^{f^\dagger f} = i\gamma_L \gamma_R" :inline="false" />
                  </div><p>基态简并：$P = \pm 1$</p>
                </div>
                
                <div class="ground-state-degeneracy">
                  <h5>基态简并</h5>
                  <div class="degeneracy-content">
                    <p>拓扑相中的基态是二重简并的：</p>
                    <ul><li>$|0\rangle$：偶宇称态，$P|0\rangle = +|0\rangle$</li><li>$|1\rangle = f^\dagger|0\rangle$：奇宇称态，$P|1\rangle = -|1\rangle$</li>
                    </ul>
                    
                    <p>简并度与Majorana对数相关：</p>
                    <div class="formula-block">
                      <katex-element expression="D = 2^{N_M/2}" :inline="false" />
                    </div><p>其中$N_M$是Majorana零模态数目。</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="topological-protection">
              <h4>拓扑保护</h4>
              <div class="protection-content">
                <div class="energy-splitting">
                  <h5>能级劈裂</h5>
                  <p>有限系统中两端Majorana态的耦合导致能级劈裂：</p>
                  <div class="formula-block">
                    <katex-element expression="\Delta E \sim e^{-L/\xi}" :inline="false" />
                  </div><p>其中$L$ 是系统长度，$\xi$是局域长度。</p>
                </div>
                
                <div class="perturbation-stability">
                  <h5>微扰稳定性</h5>
                  <div class="stability-analysis">
                    <p>Majorana零模态对局域微扰具有鲁棒性：</p>
                    
                    <div class="perturbation-types">
                      <h6>允许的微扰</h6>
                      <ul>
                        <li>保持粒子-空穴对称性的微扰</li>
                        <li>不破坏能隙的微扰</li>
                        <li>局域化学势涨落</li>
                        <li>弱无序</li>
                      </ul>
                    </div>
                    
                    <div class="forbidden-perturbations">
                      <h6>破坏拓扑的微扰</h6>
                      <ul>
                        <li>破坏粒子-空穴对称性</li>
                        <li>关闭能隙的强微扰</li>
                        <li>长程相互作用</li>
                        <li>强磁场</li>
                      </ul>
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
      <h2>非阿贝尔统计与拓扑量子计算</h2>
      
      <div class="non-abelian-statistics">
        <div class="braiding-theory">
          <h3>编织理论</h3>
          <div class="braiding-content">
            <div class="worldline-picture">
              <h4>世界线图像</h4>
              <div class="worldline-content">
                <p>在二维时空中，Majorana费米子的交换对应于世界线的编织：</p>
                
                <div class="braiding-operations">
                  <h5>基本编织操作</h5>
                  <div class="operations-content"><p>考虑四个Majorana费米子$\gamma_1, \gamma_2, \gamma_3, \gamma_4$，定义复费米子：</p>
                    <div class="formula-block">
                      <katex-element expression="c_1 = \frac{\gamma_1 + i\gamma_2}{2}, \quad c_2 = \frac{\gamma_3 + i\gamma_4}{2}" :inline="false" />
                    </div>
                    
                    <p>基本编织矩阵：</p>
                    <div class="formula-block">
                      <katex-element expression="B_{12} = \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}" :inline="false" />
                    </div>
                    
                    <div class="braiding-properties">
                      <h6>编织性质</h6>
                      <ul><li>非对易性：$B_{12} B_{23} \neq B_{23} B_{12}$</li><li>幺正性：$B^\dagger B = I$</li>
                        <li>Yang-Baxter方程</li>
                        <li>拓扑不变性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="fusion-rules">
                  <h5>融合规则</h5>
                  <p>Majorana费米子的融合规则：</p>
                  <div class="formula-block">
                    <katex-element expression="\gamma \times \gamma = I + \psi" :inline="false" />
                  </div><p>其中$I$ 是真空态，$\psi$是费米子态。</p>
                </div>
              </div>
            </div>
            
            <div class="quantum-gates">
              <h4>拓扑量子门</h4>
              <div class="gates-content">
                <div class="single-qubit-gates">
                  <h5>单量子比特门</h5>
                  <p>通过编织操作实现的单量子比特门：</p>
                  
                  <div class="pauli-gates">
                    <h6>Pauli门</h6>
                    <div class="formula-block">
                      <katex-element expression="X = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad Z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="rotation-gates">
                    <h6>旋转门</h6>
                    <div class="formula-block">
                      <katex-element expression="R_z(\theta) = \begin{pmatrix} e^{-i\theta/2} & 0 \\ 0 & e^{i\theta/2} \end{pmatrix}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="two-qubit-gates">
                  <h5>双量子比特门</h5>
                  <p>CNOT门和其他纠缠门的实现：</p>
                  <div class="formula-block">
                    <katex-element expression="CNOT = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 1 & 0 \end{pmatrix}" :inline="false" />
                  </div>
                </div>
                
                <div class="universal-computation">
                  <h5>通用计算</h5>
                  <div class="universality-content">
                    <p>拓扑量子门的通用性：</p>
                    <ul>
                      <li>编织操作生成有限群</li>
                      <li>需要额外的非拓扑门</li>
                      <li>魔态蒸馏</li>
                      <li>容错阈值</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="error-correction">
          <h3>拓扑量子纠错</h3>
          <div class="error-correction-content">
            <div class="topological-codes">
              <h4>拓扑码</h4>
              <div class="codes-content">
                <div class="surface-code">
                  <h5>表面码</h5>
                  <p>基于Majorana费米子的表面码：</p>
                  <ul>
                    <li>二维拓扑码</li>
                    <li>局域稳定子</li>
                    <li>高容错阈值</li>
                    <li>可扩展性</li>
                  </ul>
                </div>
                
                <div class="color-code">
                  <h5>颜色码</h5>
                  <p>三维拓扑码的实现：</p>
                  <ul>
                    <li>更高的码距</li>
                    <li>更好的纠错能力</li>
                    <li>复杂的解码算法</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="decoherence-mechanisms">
              <h4>退相干机制</h4>
              <div class="decoherence-content">
                <div class="environmental-noise">
                  <h5>环境噪声</h5>
                  <ul>
                    <li>电荷噪声</li>
                    <li>磁场涨落</li>
                    <li>温度涨落</li>
                    <li>声子耦合</li>
                  </ul>
                </div>
                
                <div class="protection-mechanisms">
                  <h5>保护机制</h5>
                  <ul>
                    <li>能隙保护</li>
                    <li>空间分离</li>
                    <li>拓扑保护</li>
                    <li>对称性保护</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验实现与检测</h2>
      
      <div class="experimental-implementations">
        <div class="material-platforms">
          <h3>材料平台</h3>
          <div class="platforms-content">
            <div class="semiconductor-nanowires">
              <h4>半导体纳米线</h4>
              <div class="nanowires-content">
                <div class="inassb-nanowires">
                  <h5>InAs/InSb纳米线</h5>
                  <div class="nanowire-properties">
                    <p>关键特性：</p>
                    <ul>
                      <li>强自旋-轨道耦合</li>
                      <li>大g因子</li>
                      <li>诱导超导性</li>
                      <li>可调节化学势</li>
                    </ul>
                    
                    <div class="device-structure">
                      <h6>器件结构</h6>
                      <p>典型的Majorana器件包含：</p>
                      <ul>
                        <li>半导体纳米线</li>
                        <li>超导体接触</li>
                        <li>栅极电极</li>
                        <li>磁场</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="effective-hamiltonian">
                  <h5>有效哈密顿量</h5>
                  <p>纳米线系统的有效哈密顿量：</p>
                  <div class="formula-block">
                    <katex-element expression="H = \frac{p^2}{2m^*} - \mu + \alpha p \sigma_y + \Delta \sigma_x + \frac{1}{2} g \mu_B B \sigma_z" :inline="false" />
                  </div>
                  
                  <p>其中：</p>
                  <ul><li>$\alpha$：自旋-轨道耦合强度</li><li>$\Delta$：诱导超导能隙</li><li>$B$：磁场强度</li><li>$g$：g因子</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="topological-insulators">
              <h4>拓扑绝缘体</h4>
              <div class="ti-content">
                <div class="ti-superconductor">
                  <h5>拓扑绝缘体-超导体异质结构</h5>
                  <ul>
                    <li>Bi₂Se₃/NbSe₂</li>
                    <li>Bi₂Te₃/Pd</li>
                    <li>表面态的利用</li>
                    <li>自然的自旋-轨道耦合</li>
                  </ul>
                </div>
                
                <div class="josephson-junctions">
                  <h5>约瑟夫森结</h5>
                  <ul>
                    <li>拓扑约瑟夫森结</li>
                    <li>4π周期性</li>
                    <li>Majorana约瑟夫森结</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="quantum-dots">
              <h4>量子点系统</h4>
              <div class="dots-content">
                <div class="coupled-dots">
                  <h5>耦合量子点</h5>
                  <ul>
                    <li>人工原子</li>
                    <li>精确控制</li>
                    <li>可调参数</li>
                    <li>模拟Kitaev链</li>
                  </ul>
                </div>
                
                <div class="dot-arrays">
                  <h5>量子点阵列</h5>
                  <ul>
                    <li>一维链</li>
                    <li>二维网络</li>
                    <li>可编程性</li>
                    <li>高保真度</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="detection-methods">
          <h3>检测方法</h3>
          <div class="detection-content">
            <div class="transport-measurements">
              <h4>输运测量</h4>
              <div class="transport-content">
                <div class="zero-bias-peak">
                  <h5>零偏压峰</h5>
                  <div class="zbp-content">
                    <p>Majorana零模态的标志性特征：</p>
                    <ul>
                      <li>零偏压处的电导峰</li><li>峰高度$G = 2e^2/h$</li>
                      <li>温度展宽</li>
                      <li>磁场依赖性</li>
                    </ul>
                    
                    <div class="conductance-formula">
                      <h6>电导公式</h6>
                      <div class="formula-block">
                        <katex-element expression="G(V) = \frac{2e^2}{h} \frac{\Gamma^2}{V^2 + \Gamma^2}" :inline="false" />
                      </div><p>其中$\Gamma$ 是耦合强度。</p>
                    </div>
                  </div>
                </div>
                
                <div class="splitting-oscillations">
                  <h5>劈裂振荡</h5>
                  <p>有限系统中的Majorana劈裂：</p>
                  <ul>
                    <li>长度依赖的振荡</li>
                    <li>指数衰减包络</li>
                    <li>相位相干性</li>
                  </ul>
                </div>
                
                <div class="non-local-correlations">
                  <h5>非局域关联</h5>
                  <ul>
                    <li>交叉安德列夫反射</li>
                    <li>非局域电导</li>
                    <li>量子干涉效应</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="spectroscopy">
              <h4>谱学方法</h4>
              <div class="spectroscopy-content">
                <div class="tunneling-spectroscopy">
                  <h5>隧穿谱学</h5>
                  <ul>
                    <li>STM/STS测量</li>
                    <li>局域态密度</li>
                    <li>空间分辨</li>
                    <li>能量分辨</li>
                  </ul>
                </div>
                
                <div class="photoemission">
                  <h5>光电子能谱</h5>
                  <ul>
                    <li>ARPES测量</li>
                    <li>能带结构</li>
                    <li>表面态</li>
                    <li>自旋分辨</li>
                  </ul>
                </div>
                
                <div class="microwave-spectroscopy">
                  <h5>微波谱学</h5>
                  <ul>
                    <li>约瑟夫森谱学</li>
                    <li>射频反射测量</li>
                    <li>量子电容</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="braiding-experiments">
              <h4>编织实验</h4>
              <div class="braiding-exp-content">
                <div class="t-junction">
                  <h5>T型结构</h5>
                  <ul>
                    <li>三臂纳米线</li>
                    <li>Majorana移动</li>
                    <li>编织操作</li>
                    <li>非阿贝尔统计验证</li>
                  </ul>
                </div>
                
                <div class="interferometry">
                  <h5>干涉测量</h5>
                  <ul>
                    <li>Majorana干涉仪</li>
                    <li>相位测量</li>
                    <li>拓扑相位</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="challenges-solutions">
          <h3>挑战与解决方案</h3>
          <div class="challenges-content">
            <div class="experimental-challenges">
              <h4>实验挑战</h4>
              <div class="challenges-list">
                <div class="challenge disorder">
                  <h5>无序效应</h5>
                  <ul>
                    <li>界面粗糙度</li>
                    <li>杂质散射</li>
                    <li>电荷涨落</li>
                    <li>解决方案：高质量材料、低温环境</li>
                  </ul>
                </div>
                
                <div class="challenge temperature">
                  <h5>温度要求</h5>
                  <ul>
                    <li>超低温操作</li>
                    <li>热激发</li>
                    <li>退相干</li>
                    <li>解决方案：稀释制冷机、更大能隙</li>
                  </ul>
                </div>
                
                <div class="challenge control">
                  <h5>精确控制</h5>
                  <ul>
                    <li>参数调节</li>
                    <li>栅极控制</li>
                    <li>磁场均匀性</li>
                    <li>解决方案：先进制备技术、实时反馈</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="theoretical-challenges">
              <h4>理论挑战</h4>
              <div class="theory-challenges">
                <div class="challenge modeling">
                  <h5>建模复杂性</h5>
                  <ul>
                    <li>多体效应</li>
                    <li>环境耦合</li>
                    <li>非平衡态</li>
                    <li>数值计算限制</li>
                  </ul>
                </div>
                
                <div class="challenge verification">
                  <h5>验证困难</h5>
                  <ul>
                    <li>间接测量</li>
                    <li>背景信号</li>
                    <li>替代解释</li>
                    <li>统计显著性</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>应用前景与发展方向</h2>
      
      <div class="applications-future">
        <div class="quantum-computing-applications">
          <h3>量子计算应用</h3>
          <div class="computing-content">
            <div class="fault-tolerant-computing">
              <h4>容错量子计算</h4>
              <ul>
                <li>拓扑保护的量子比特</li>
                <li>低错误率</li>
                <li>长相干时间</li>
                <li>可扩展架构</li>
              </ul>
            </div>
            
            <div class="quantum-algorithms">
              <h4>量子算法</h4>
              <ul>
                <li>Shor算法</li>
                <li>Grover搜索</li>
                <li>量子模拟</li>
                <li>优化问题</li>
              </ul>
            </div>
            
            <div class="hybrid-systems">
              <h4>混合系统</h4>
              <ul>
                <li>拓扑-传统量子比特</li>
                <li>分布式量子计算</li>
                <li>量子网络</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="sensing-applications">
          <h3>传感应用</h3>
          <div class="sensing-content">
            <div class="precision-metrology">
              <h4>精密测量</h4>
              <ul>
                <li>磁场传感器</li>
                <li>电场传感器</li>
                <li>重力仪</li>
                <li>陀螺仪</li>
              </ul>
            </div>
            
            <div class="biological-sensing">
              <h4>生物传感</h4>
              <ul>
                <li>单分子检测</li>
                <li>DNA测序</li>
                <li>蛋白质分析</li>
                <li>细胞成像</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-directions">
          <h3>未来发展方向</h3>
          <div class="future-content">
            <div class="material-engineering">
              <h4>材料工程</h4>
              <ul>
                <li>新型拓扑材料</li>
                <li>人工超晶格</li>
                <li>二维材料</li>
                <li>分子工程</li>
              </ul>
            </div>
            
            <div class="device-integration">
              <h4>器件集成</h4>
              <ul>
                <li>片上集成</li>
                <li>多量子比特系统</li>
                <li>控制电路</li>
                <li>读出系统</li>
              </ul>
            </div>
            
            <div class="theoretical-advances">
              <h4>理论进展</h4>
              <ul>
                <li>非平衡拓扑相</li>
                <li>相互作用效应</li>
                <li>机器学习应用</li>
                <li>量子纠错理论</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>小结</h2>
      
      <div class="summary-content">
        <div class="key-points">
          <h3>关键要点</h3>
          <ul>
            <li>量子横场Ising模型在特定参数区间实现拓扑超导相</li>
            <li>Majorana费米子是自共轭的零能费米子，具有非阿贝尔统计性质</li>
            <li>拓扑保护使Majorana费米子对局域扰动具有鲁棒性</li>
            <li>编织操作可以实现拓扑量子门和容错量子计算</li>
            <li>多种实验平台正在探索Majorana费米子的实现和检测</li>
          </ul>
        </div>
        
        <div class="significance">
          <h3>重要意义</h3>
          <ul>
            <li>为拓扑量子计算提供了理论基础</li>
            <li>开辟了新的量子物态研究方向</li>
            <li>推动了拓扑材料的发展</li>
            <li>促进了量子信息技术的进步</li>
          </ul>
        </div>
        
        <div class="outlook">
          <h3>展望</h3>
          <ul>
            <li>实现可扩展的拓扑量子计算机</li>
            <li>发现新的拓扑量子相</li>
            <li>开发实用的量子器件</li>
            <li>探索拓扑物理的更多应用</li>
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
  background: linear-gradient(135deg, #1e88e5 0%, #8e24aa 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(30, 136, 229, 0.3);
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
  background: #e3f2fd;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
  border-left: 5px solid #1e88e5;
}

.lead-text {
  font-size: 1.1rem;
  color: #0d47a1;
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
  border-bottom: 3px solid #1e88e5;
}

.tfim-framework, .majorana-physics, .non-abelian-statistics, .experimental-implementations, .applications-future {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.model-definition h3, .kitaev-chain h3, .majorana-definition h3, .majorana-in-kitaev h3, .braiding-theory h3, .error-correction h3, .material-platforms h3, .detection-methods h3, .challenges-solutions h3, .quantum-computing-applications h3, .sensing-applications h3, .future-directions h3 {
  color: #0d47a1;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #1e88e5;
}

.definition-content, .kitaev-content, .majorana-physics .definition-content, .kitaev-majorana-content, .braiding-content, .error-correction-content, .platforms-content, .detection-content, .challenges-content, .computing-content, .sensing-content, .future-content {
  display: grid;
  gap: 2rem;
}

.hamiltonian, .parameter-space, .jordan-wigner-transformation, .model-setup, .bogoliubov-transformation, .mathematical-definition, .physical-properties, .edge-states, .majorana-operators, .topological-protection, .worldline-picture, .quantum-gates, .topological-codes, .decoherence-mechanisms, .semiconductor-nanowires, .topological-insulators, .quantum-dots, .transport-measurements, .spectroscopy, .braiding-experiments, .experimental-challenges, .theoretical-challenges, .fault-tolerant-computing, .quantum-algorithms, .hybrid-systems, .precision-metrology, .biological-sensing, .material-engineering, .device-integration, .theoretical-advances {
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}

.hamiltonian h4, .parameter-space h4, .jordan-wigner-transformation h4, .model-setup h4, .bogoliubov-transformation h4, .mathematical-definition h4, .physical-properties h4, .edge-states h4, .majorana-operators h4, .topological-protection h4, .worldline-picture h4, .quantum-gates h4, .topological-codes h4, .decoherence-mechanisms h4, .semiconductor-nanowires h4, .topological-insulators h4, .quantum-dots h4, .transport-measurements h4, .spectroscopy h4, .braiding-experiments h4, .experimental-challenges h4, .theoretical-challenges h4, .fault-tolerant-computing h4, .quantum-algorithms h4, .hybrid-systems h4, .precision-metrology h4, .biological-sensing h4, .material-engineering h4, .device-integration h4, .theoretical-advances h4 {
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

.parameter-content, .transformation-content, .setup-content, .bogoliubov-content, .math-content, .properties-content, .edge-calculation, .operators-content, .protection-content, .worldline-content, .gates-content, .codes-content, .decoherence-content, .nanowires-content, .ti-content, .dots-content, .transport-content, .spectroscopy-content, .braiding-exp-content, .challenges-list, .theory-challenges {
  margin-top: 1rem;
}

.phase-diagram-description, .topological-phase, .fermionic-hamiltonian, .parameter-regimes, .energy-spectrum, .anticommutation-relations, .self-conjugate, .zero-energy, .localization, .ansatz-solution, .right-edge, .fermion-parity, .ground-state-degeneracy, .energy-splitting, .perturbation-stability, .braiding-operations, .fusion-rules, .single-qubit-gates, .two-qubit-gates, .universal-computation, .surface-code, .color-code, .environmental-noise, .protection-mechanisms, .inassb-nanowires, .effective-hamiltonian, .ti-superconductor, .josephson-junctions, .coupled-dots, .dot-arrays, .zero-bias-peak, .splitting-oscillations, .non-local-correlations, .tunneling-spectroscopy, .photoemission, .microwave-spectroscopy, .t-junction, .interferometry {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #4caf50;
}

.phases-grid, .regimes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.phase, .regime {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.ferromagnetic {
  border-left: 4px solid #f44336;
}

.paramagnetic {
  border-left: 4px solid #2196f3;
}

.critical {
  border-left: 4px solid #ff9800;
}

.trivial {
  border-left: 4px solid #9e9e9e;
}

.topological {
  border-left: 4px solid #4caf50;
}

.phase h6, .regime h6 {
  color: #424242;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.gap-analysis, .device-structure, .nanowire-properties, .degeneracy-content, .stability-analysis, .perturbation-types, .forbidden-perturbations, .operations-content, .braiding-properties, .pauli-gates, .rotation-gates, .universality-content, .zbp-content, .conductance-formula {
  background: #fff3e0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #ff9800;
}

.gap-analysis h6, .device-structure h6, .nanowire-properties p, .degeneracy-content p, .stability-analysis p, .perturbation-types h6, .forbidden-perturbations h6, .operations-content p, .braiding-properties h6, .pauli-gates h6, .rotation-gates h6, .universality-content p, .zbp-content p, .conductance-formula h6 {
  color: #f57c00;
  margin-bottom: 0.8rem;
}

.challenge {
  background: #ffebee;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #f44336;
}

.challenge h5 {
  color: #c62828;
  margin-bottom: 0.8rem;
}

.summary-content {
  background: linear-gradient(135deg, #1e88e5 0%, #8e24aa 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.key-points, .significance, .outlook {
  margin-bottom: 2rem;
}

.key-points h3, .significance h3, .outlook h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.key-points ul, .significance ul, .outlook ul {
  margin-left: 1.5rem;
}

.key-points li, .significance li, .outlook li {
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
  
  .phases-grid, .regimes-grid {
    grid-template-columns: 1fr;
  }
  
  .tfim-framework, .majorana-physics, .non-abelian-statistics, .experimental-implementations, .applications-future {
    padding: 1rem;
  }
}
</style>