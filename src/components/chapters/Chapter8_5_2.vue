<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.5.2 Lifshitz相变的一个例子：磁场下的一维量子XY模型</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子XY模型</span>
        <span class="chapter-tag">磁场效应</span>
        <span class="chapter-tag">Lifshitz相变</span>
        <span class="reading-time">⏱ 45分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一维量子XY模型在外磁场作用下展现了丰富的相变行为，特别是Lifshitz相变现象。
        该模型不仅在理论上具有重要意义，还与实际的量子磁性材料密切相关。
        本节将详细分析磁场下一维量子XY模型的哈密顿量、能谱结构、相图以及Lifshitz相变的具体表现，
        并探讨其物理机制和实验观测方法。
      </p>
    </div>

    <section class="content-section">
      <h2>模型设定与哈密顿量</h2>
      
      <div class="model-setup">
        <div class="hamiltonian-definition">
          <h3>量子XY模型</h3>
          <div class="hamiltonian-content">
            <div class="basic-hamiltonian">
              <h4>基本哈密顿量</h4>
              <p>一维量子XY模型的哈密顿量为：</p>
              <div class="formula-block">
                <katex-element expression="H = -J \sum_{i=1}^{N} \left( S_i^x S_{i+1}^x + S_i^y S_{i+1}^y \right) - h \sum_{i=1}^{N} S_i^z" :inline="false" />
              </div>
              
              <p>其中：</p>
              <ul>
                <li>$J > 0$是交换耦合常数</li><li>$h$是沿z方向的外磁场</li><li>$S_i^{\alpha}$ ($\alpha = x, y, z$) 是第i个格点上的自旋-1/2算符</li><li>采用周期边界条件：$S_{N+1}^{\alpha} = S_1^{\alpha}$</li>
              </ul>
            </div>
            
            <div class="jordan-wigner-transformation">
              <h4>Jordan-Wigner变换</h4>
              <div class="transformation-content">
                <p>通过Jordan-Wigner变换将自旋算符映射为费米子算符：</p>
                <div class="formula-block">
                  <katex-element expression="S_i^+ = c_i^\dagger \prod_{j=1}^{i-1} (-1)^{c_j^\dagger c_j}" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="S_i^- = \prod_{j=1}^{i-1} (-1)^{c_j^\dagger c_j} c_i" :inline="false" />
                </div>
                <div class="formula-block">
                  <katex-element expression="S_i^z = c_i^\dagger c_i - \frac{1}{2}" :inline="false" />
                </div><p>其中$S_i^{\pm} = S_i^x \pm i S_i^y$，$c_i^\dagger$ 和 $c_i$是费米子产生和湮灭算符。</p>
                
                <div class="transformed-hamiltonian">
                  <h5>变换后的哈密顿量</h5>
                  <div class="formula-block">
                    <katex-element expression="H = -\frac{J}{2} \sum_{i=1}^{N} \left( c_i^\dagger c_{i+1} + c_{i+1}^\dagger c_i \right) - h \sum_{i=1}^{N} \left( c_i^\dagger c_i - \frac{1}{2} \right)" :inline="false" />
                  </div>
                  
                  <p>简化为：</p>
                  <div class="formula-block">
                    <katex-element expression="H = -\frac{J}{2} \sum_{i=1}^{N} \left( c_i^\dagger c_{i+1} + \text{h.c.} \right) - h \sum_{i=1}^{N} c_i^\dagger c_i + \frac{Nh}{2}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="fourier-transformation">
              <h4>傅里叶变换</h4>
              <div class="fourier-content">
                <p>引入动量空间的费米子算符：</p>
                <div class="formula-block">
                  <katex-element expression="c_k = \frac{1}{\sqrt{N}} \sum_{j=1}^{N} e^{-ikj} c_j" :inline="false" />
                </div><p>其中动量$k = \frac{2\pi n}{N}$，$n = 0, 1, 2, \ldots, N-1$。</p>
                
                <div class="momentum-space-hamiltonian">
                  <h5>动量空间哈密顿量</h5>
                  <div class="formula-block">
                    <katex-element expression="H = \sum_k \varepsilon(k) c_k^\dagger c_k + \frac{Nh}{2}" :inline="false" />
                  </div>
                  
                  <p>其中单粒子能谱为：</p>
                  <div class="formula-block">
                    <katex-element expression="\varepsilon(k) = -J \cos k - h" :inline="false" />
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
                <p>单粒子能谱具有余弦形式：</p>
                <div class="formula-block">
                  <katex-element expression="\varepsilon(k) = -J \cos k - h" :inline="false" />
                </div>
                
                <div class="spectrum-features">
                  <h5>能谱特征</h5>
                  <div class="features-grid">
                    <div class="feature">
                      <h6>最小值</h6><p>位于$k = 0$：</p>
                      <div class="formula-block">
                        <katex-element expression="\varepsilon_{\min} = -J - h" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="feature">
                      <h6>最大值</h6><p>位于$k = \pi$：</p>
                      <div class="formula-block">
                        <katex-element expression="\varepsilon_{\max} = J - h" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="feature">
                      <h6>带宽</h6>
                      <div class="formula-block">
                        <katex-element expression="W = \varepsilon_{\max} - \varepsilon_{\min} = 2J" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="fermi-energy">
                  <h5>费米能级</h5><p>在零温下，费米能级由粒子数密度$\rho = \langle n \rangle / N$决定：</p>
                  <div class="formula-block">
                    <katex-element expression="\rho = \frac{1}{N} \sum_k \theta(\mu - \varepsilon(k))" :inline="false" />
                  </div><p>其中$\mu$ 是化学势，$\theta(x)$是阶跃函数。</p>
                </div>
              </div>
            </div>
            
            <div class="critical-points">
              <h4>临界点分析</h4>
              <div class="critical-content">
                <div class="lifshitz-conditions">
                  <h5>Lifshitz相变条件</h5>
                  <p>Lifshitz相变发生在费米能级通过能带边缘时：</p>
                  
                  <div class="transition-points">
                    <div class="transition-point">
                      <h6>第一个临界点</h6>
                      <p>费米能级到达带底：</p>
                      <div class="formula-block">
                        <katex-element expression="\mu = \varepsilon_{\min} = -J - h" :inline="false" />
                      </div>
                      <p>此时费米面从空变为有限大小。</p>
                    </div>
                    
                    <div class="transition-point">
                      <h6>第二个临界点</h6>
                      <p>费米能级到达带顶：</p>
                      <div class="formula-block">
                        <katex-element expression="\mu = \varepsilon_{\max} = J - h" :inline="false" />
                      </div>
                      <p>此时费米面消失，系统进入满带状态。</p>
                    </div>
                  </div>
                </div>
                
                <div class="fermi-momentum">
                  <h5>费米动量</h5><p>在中间相（$-J - h &lt; \mu &lt; J - h$），费米动量由下式确定：</p>
                  <div class="formula-block">
                    <katex-element expression="\varepsilon(k_F) = \mu \Rightarrow -J \cos k_F - h = \mu" :inline="false" />
                  </div>
                  
                  <p>解得：</p>
                  <div class="formula-block">
                    <katex-element expression="k_F = \arccos\left(-\frac{\mu + h}{J}\right)" :inline="false" />
                  </div>
                  
                  <div class="fermi-points">
                    <h6>费米点</h6><p>一维系统中，费米面退化为两个费米点：$\pm k_F$</p>
                    <div class="formula-block">
                      <katex-element expression="k_{F,\pm} = \pm \arccos\left(-\frac{\mu + h}{J}\right)" :inline="false" />
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
      <h2>相图与相变</h2>
      
      <div class="phase-diagram-analysis">
        <div class="parameter-space">
          <h3>参数空间 (h, μ)</h3>
          <div class="phase-space-content">
            <div class="phase-identification">
              <h4>相的识别</h4>
              <div class="phases-grid">
                <div class="phase empty-band">
                  <h5>空带相 (Empty Band)</h5>
                  <div class="phase-description"><p><strong>条件：</strong>$\mu &lt; -J - h$</p>
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>所有单粒子态都未被占据</li>
                      <li>无费米面</li>
                      <li>系统处于真空态</li><li>粒子数密度$\rho = 0$</li>
                    </ul>
                    <div class="formula-block">
                      <katex-element expression="\langle n \rangle = 0" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="phase partially-filled">
                  <h5>部分填充相 (Partially Filled)</h5>
                  <div class="phase-description"><p><strong>条件：</strong>$-J - h &lt; \mu &lt; J - h$</p>
                    <p><strong>特征：</strong></p>
                    <ul><li>存在两个费米点：$\pm k_F$</li>
                      <li>费米面为零维点</li>
                      <li>粒子数密度连续变化</li>
                      <li>金属性行为</li>
                    </ul>
                    <div class="formula-block">
                      <katex-element expression="0 &lt; \langle n \rangle &lt; N" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="phase full-band">
                  <h5>满带相 (Full Band)</h5>
                  <div class="phase-description"><p><strong>条件：</strong>$\mu &gt; J - h$</p>
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>所有单粒子态都被占据</li>
                      <li>无费米面</li>
                      <li>系统为绝缘体</li><li>粒子数密度$\rho = 1$</li>
                    </ul>
                    <div class="formula-block">
                      <katex-element expression="\langle n \rangle = N" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="phase-boundaries">
              <h4>相边界</h4>
              <div class="boundaries-content">
                <div class="boundary lower">
                  <h5>下边界</h5>
                  <div class="formula-block">
                    <katex-element expression="\mu = -J - h" :inline="false" />
                  </div>
                  <p>这是空带相与部分填充相的边界，对应于费米能级刚好接触带底。</p>
                </div>
                
                <div class="boundary upper">
                  <h5>上边界</h5>
                  <div class="formula-block">
                    <katex-element expression="\mu = J - h" :inline="false" />
                  </div>
                  <p>这是部分填充相与满带相的边界，对应于费米能级刚好接触带顶。</p>
                </div>
                
                <div class="boundary-properties">
                  <h5>边界性质</h5>
                  <ul>
                    <li>相边界为直线，斜率为 -1</li><li>相边界间的距离为$2J$（带宽）</li><li>磁场$h$整体平移相边界</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lifshitz-transitions">
          <h3>Lifshitz相变特征</h3>
          <div class="lifshitz-content">
            <div class="transition-mechanism">
              <h4>相变机制</h4>
              <div class="mechanism-content">
                <div class="fermi-surface-topology">
                  <h5>费米面拓扑变化</h5>
                  <div class="topology-evolution">
                    <div class="evolution-step">
                      <h6>步骤1：空带 → 部分填充</h6><p>当$\mu$ 增加通过 $-J - h$时：</p>
                      <ul>
                        <li>费米面从无到有</li>
                        <li>出现两个费米点</li>
                        <li>拓扑荷从0变为2</li>
                      </ul>
                    </div>
                    
                    <div class="evolution-step">
                      <h6>步骤2：部分填充 → 满带</h6><p>当$\mu$ 增加通过 $J - h$时：</p>
                      <ul>
                        <li>费米面消失</li>
                        <li>费米点合并</li>
                        <li>拓扑荷从2变为0</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="order-parameter">
                  <h5>序参量</h5>
                  <p>虽然Lifshitz相变不破坏对称性，但可以定义有效的"序参量"：</p>
                  <div class="formula-block">
                    <katex-element expression="\Phi = \frac{2k_F}{\pi}" :inline="false" />
                  </div>
                  
                  <p>其中：</p>
                  <ul><li>$\Phi = 0$：空带或满带相</li><li>$0 &lt; \Phi &lt; 2$：部分填充相</li><li>$\Phi = 1$：半填充</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="critical-behavior">
              <h4>临界行为</h4>
              <div class="critical-content">
                <div class="density-of-states">
                  <h5>态密度</h5>
                  <p>一维系统的态密度为：</p>
                  <div class="formula-block">
                    <katex-element expression="g(E) = \frac{1}{\pi} \sum_k \delta(E - \varepsilon(k))" :inline="false" />
                  </div>
                  
                  <p>对于余弦色散：</p>
                  <div class="formula-block">
                    <katex-element expression="g(E) = \frac{1}{\pi \sqrt{J^2 - (E + h)^2}}" :inline="false" />
                  </div>
                  
                  <p>在带边处发散：</p>
                  <div class="formula-block">
                    <katex-element expression="g(E) \sim |E - E_{\text{edge}}|^{-1/2}" :inline="false" />
                  </div>
                </div>
                
                <div class="thermodynamic-quantities">
                  <h5>热力学量</h5>
                  <div class="quantities-grid">
                    <div class="quantity">
                      <h6>粒子数</h6>
                      <div class="formula-block">
                        <katex-element expression="n(\mu, T) = \int dE \, g(E) f(E)" :inline="false" />
                      </div><p>其中$f(E) = [e^{(E-\mu)/k_B T} + 1]^{-1}$是费米分布。</p>
                    </div>
                    
                    <div class="quantity">
                      <h6>比热</h6>
                      <div class="formula-block">
                        <katex-element expression="C = k_B T^2 \frac{\partial^2}{\partial T^2} \ln Z" :inline="false" />
                      </div>
                      <p>在相变点附近表现出奇异行为。</p>
                    </div>
                    
                    <div class="quantity">
                      <h6>磁化率</h6>
                      <div class="formula-block">
                        <katex-element expression="\chi = \frac{\partial^2 F}{\partial h^2}" :inline="false" />
                      </div>
                      <p>反映系统对磁场的响应。</p>
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
      <h2>物理性质分析</h2>
      
      <div class="physical-properties">
        <div class="ground-state-properties">
          <h3>基态性质</h3>
          <div class="ground-state-content">
            <div class="energy-calculation">
              <h4>基态能量</h4>
              <div class="energy-content">
                <p>零温下的基态能量为：</p>
                <div class="formula-block">
                  <katex-element expression="E_0 = \sum_{k: \varepsilon(k) &lt; \mu} \varepsilon(k)" :inline="false" />
                </div>
                
                <div class="energy-phases">
                  <div class="energy-phase"><h5>空带相 ($\mu &lt; -J - h$)</h5>
                    <div class="formula-block">
                      <katex-element expression="E_0 = \frac{Nh}{2}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="energy-phase"><h5>部分填充相 ($-J - h &lt; \mu &lt; J - h$)</h5>
                    <div class="formula-block">
                      <katex-element expression="E_0 = \frac{N}{2\pi} \int_{-k_F}^{k_F} dk \, (-J \cos k - h) + \frac{Nh}{2}" :inline="false" />
                    </div>
                    
                    <p>积分结果：</p>
                    <div class="formula-block">
                      <katex-element expression="E_0 = -\frac{NJ}{\pi} \sin k_F - \frac{Nhk_F}{\pi} + \frac{Nh}{2}" :inline="false" />
                    </div>
                  </div>
                  
                  <div class="energy-phase"><h5>满带相 ($\mu &gt; J - h$)</h5>
                    <div class="formula-block">
                      <katex-element expression="E_0 = \sum_k (-J \cos k - h) + \frac{Nh}{2} = -\frac{Nh}{2}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="magnetization">
              <h4>磁化强度</h4>
              <div class="magnetization-content">
                <p>系统的磁化强度定义为：</p>
                <div class="formula-block">
                  <katex-element expression="M = -\frac{\partial E_0}{\partial h}" :inline="false" />
                </div>
                
                <div class="magnetization-phases">
                  <div class="mag-phase">
                    <h5>空带相</h5>
                    <div class="formula-block">
                      <katex-element expression="M = -\frac{N}{2}" :inline="false" />
                    </div>
                    <p>所有自旋都指向下方。</p>
                  </div>
                  
                  <div class="mag-phase">
                    <h5>部分填充相</h5>
                    <div class="formula-block">
                      <katex-element expression="M = \frac{N}{\pi} k_F - \frac{N}{2}" :inline="false" />
                    </div>
                    <p>磁化强度随费米动量线性变化。</p>
                  </div>
                  
                  <div class="mag-phase">
                    <h5>满带相</h5>
                    <div class="formula-block">
                      <katex-element expression="M = \frac{N}{2}" :inline="false" />
                    </div>
                    <p>所有自旋都指向上方。</p>
                  </div>
                </div>
                
                <div class="magnetization-jump">
                  <h5>磁化跳跃</h5>
                  <p>在相变点处，磁化强度的导数不连续：</p>
                  <div class="formula-block">
                    <katex-element expression="\frac{\partial M}{\partial \mu}\bigg|_{\mu = -J-h^+} - \frac{\partial M}{\partial \mu}\bigg|_{\mu = -J-h^-} = \frac{N}{\pi J}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="finite-temperature-effects">
          <h3>有限温度效应</h3>
          <div class="temperature-content">
            <div class="thermal-broadening">
              <h4>热展宽效应</h4>
              <div class="broadening-content">
                <p>有限温度下，费米分布函数导致相变被热展宽：</p>
                <div class="formula-block">
                  <katex-element expression="f(E) = \frac{1}{e^{(E-\mu)/k_B T} + 1}" :inline="false" />
                </div>
                
                <div class="crossover-region">
                  <h5>交叉区域</h5>
                  <p>相变点附近的交叉区域宽度约为：</p>
                  <div class="formula-block">
                    <katex-element expression="\Delta \mu \sim k_B T" :inline="false" />
                  </div>
                  
                  <p>在此区域内，物理量表现出平滑的变化而非突跳。</p>
                </div>
                
                <div class="temperature-scales">
                  <h5>特征温度标度</h5>
                  <div class="scales-grid">
                    <div class="scale">
                      <h6>交换能标</h6>
                      <div class="formula-block">
                        <katex-element expression="T_J = \frac{J}{k_B}" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="scale">
                      <h6>磁场能标</h6>
                      <div class="formula-block">
                        <katex-element expression="T_h = \frac{h}{k_B}" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="scale">
                      <h6>费米温度</h6>
                      <div class="formula-block">
                        <katex-element expression="T_F = \frac{\varepsilon_F}{k_B}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="specific-heat">
              <h4>比热分析</h4>
              <div class="specific-heat-content">
                <p>比热的一般表达式：</p>
                <div class="formula-block">
                  <katex-element expression="C = k_B T^2 \int dE \, g(E) \frac{\partial^2 f(E)}{\partial T^2}" :inline="false" />
                </div>
                
                <div class="temperature-regimes">
                  <div class="regime low-temp"><h5>低温极限 ($T \ll T_J$)</h5>
                    <p>在部分填充相中：</p>
                    <div class="formula-block">
                      <katex-element expression="C \approx \frac{\pi^2 k_B^2 T}{3} g(\mu)" :inline="false" />
                    </div>
                    <p>由于一维系统态密度的奇异性，比热表现出非标准行为。</p>
                  </div>
                  
                  <div class="regime high-temp"><h5>高温极限 ($T \gg T_J$)</h5>
                    <p>经典极限下：</p>
                    <div class="formula-block">
                      <katex-element expression="C \approx \frac{N k_B}{4}" :inline="false" />
                    </div>
                    <p>接近经典自旋系统的结果。</p>
                  </div>
                </div>
                
                <div class="critical-enhancement">
                  <h5>临界增强</h5>
                  <p>在相变点附近，比热出现增强：</p>
                  <div class="formula-block">
                    <katex-element expression="C \sim T^{-1/2} \quad \text{(一维van Hove奇点)}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dynamic-properties">
          <h3>动力学性质</h3>
          <div class="dynamics-content">
            <div class="correlation-functions">
              <h4>关联函数</h4>
              <div class="correlation-content">
                <div class="spin-correlations">
                  <h5>自旋关联函数</h5>
                  <p>横向自旋关联函数：</p>
                  <div class="formula-block">
                    <katex-element expression="G^{xy}(r, t) = \langle S_0^x(0) S_r^x(t) \rangle + \langle S_0^y(0) S_r^y(t) \rangle" :inline="false" />
                  </div>
                  
                  <p>通过Jordan-Wigner变换：</p>
                  <div class="formula-block">
                    <katex-element expression="G^{xy}(r, t) = \frac{1}{4} \langle \{c_0^\dagger(0) + c_0(0)\} \{c_r^\dagger(t) + c_r(t)\} \rangle" :inline="false" />
                  </div>
                </div>
                
                <div class="density-correlations">
                  <h5>密度关联函数</h5>
                  <p>纵向关联函数：</p>
                  <div class="formula-block">
                    <katex-element expression="G^{zz}(r, t) = \langle S_0^z(0) S_r^z(t) \rangle" :inline="false" />
                  </div>
                  
                  <p>费米子表示：</p>
                  <div class="formula-block">
                    <katex-element expression="G^{zz}(r, t) = \langle n_0(0) n_r(t) \rangle - \frac{1}{4}" :inline="false" />
                  </div>
                </div>
                
                <div class="asymptotic-behavior">
                  <h5>渐近行为</h5>
                  <div class="behavior-regimes">
                    <div class="regime gapless">
                      <h6>无能隙相（部分填充）</h6>
                      <p>长距离行为：</p>
                      <div class="formula-block">
                        <katex-element expression="G^{xy}(r, t) \sim \frac{\cos(2k_F r)}{r^{1/2}}" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="regime gapped">
                      <h6>有能隙相（空带/满带）</h6>
                      <p>指数衰减：</p>
                      <div class="formula-block">
                        <katex-element expression="G^{xy}(r, t) \sim e^{-r/\xi}" :inline="false" />
                      </div><p>其中$\xi$是关联长度。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="excitation-spectrum">
              <h4>激发谱</h4>
              <div class="excitation-content">
                <div class="single-particle-excitations">
                  <h5>单粒子激发</h5>
                  <p>激发能谱由色散关系给出：</p>
                  <div class="formula-block">
                    <katex-element expression="\omega(k) = |\varepsilon(k) - \mu|" :inline="false" />
                  </div>
                  
                  <div class="excitation-types">
                    <div class="excitation-type">
                      <h6>粒子激发</h6><p>当$\varepsilon(k) > \mu$时：</p>
                      <div class="formula-block">
                        <katex-element expression="\omega(k) = \varepsilon(k) - \mu" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="excitation-type">
                      <h6>空穴激发</h6><p>当$\varepsilon(k) &lt; \mu$时：</p>
                      <div class="formula-block">
                        <katex-element expression="\omega(k) = \mu - \varepsilon(k)" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="collective-excitations">
                  <h5>集体激发</h5>
                  <p>在一维系统中，由于强量子涨落，可能出现集体激发模式。</p>
                  
                  <div class="collective-modes">
                    <div class="mode">
                      <h6>声子模式</h6>
                      <p>长波长极限下的线性色散：</p>
                      <div class="formula-block">
                        <katex-element expression="\omega(q) = v_s |q|" :inline="false" />
                      </div><p>其中$v_s$是声速。</p>
                    </div>
                    
                    <div class="mode">
                      <h6>自旋波模式</h6>
                      <p>横向自旋涨落的激发：</p>
                      <div class="formula-block">
                        <katex-element expression="\omega(q) = \sqrt{\Delta^2 + v_F^2 q^2}" :inline="false" />
                      </div><p>其中$\Delta$ 是能隙，$v_F$是费米速度。</p>
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
      <h2>数值计算与实验观测</h2>
      
      <div class="computational-experimental">
        <div class="numerical-methods">
          <h3>数值计算方法</h3>
          <div class="numerical-content">
            <div class="exact-diagonalization">
              <h4>精确对角化</h4>
              <div class="ed-content">
                <p>对于有限尺寸系统，可以直接对角化哈密顿量矩阵：</p>
                <div class="formula-block">
                  <katex-element expression="H |\psi_n \rangle = E_n |\psi_n \rangle" :inline="false" />
                </div>
                
                <div class="ed-advantages">
                  <h5>优点</h5>
                  <ul>
                    <li>精确结果，无近似误差</li>
                    <li>可以计算所有本征态</li>
                    <li>适用于研究有限尺寸效应</li>
                  </ul>
                </div>
                
                <div class="ed-limitations">
                  <h5>局限性</h5>
                  <ul><li>系统尺寸受限（通常$N \leq 20$）</li>
                    <li>计算复杂度指数增长</li>
                    <li>需要外推到热力学极限</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="quantum-monte-carlo">
              <h4>量子蒙特卡罗</h4>
              <div class="qmc-content">
                <div class="path-integral-formulation">
                  <h5>路径积分表述</h5>
                  <p>配分函数的路径积分表示：</p>
                  <div class="formula-block">
                    <katex-element expression="Z = \int \mathcal{D}[\psi, \psi^*] e^{-S[\psi, \psi^*]}" :inline="false" />
                  </div>
                  
                  <p>其中作用量为：</p>
                  <div class="formula-block">
                    <katex-element expression="S = \int_0^\beta d\tau \left[ \sum_i \psi_i^* \partial_\tau \psi_i + H[\psi^*, \psi] \right]" :inline="false" />
                  </div>
                </div>
                
                <div class="sampling-methods">
                  <h5>采样方法</h5>
                  <div class="methods-grid">
                    <div class="method">
                      <h6>连续时间QMC</h6>
                      <p>直接在连续虚时间中采样</p>
                      <ul>
                        <li>无Trotter误差</li>
                        <li>高效处理相互作用</li>
                      </ul>
                    </div>
                    
                    <div class="method">
                      <h6>确定性QMC</h6>
                      <p>利用费米子系统的特殊性质</p>
                      <ul>
                        <li>无符号问题</li>
                        <li>可达到大系统尺寸</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="density-matrix-renormalization">
              <h4>密度矩阵重整化群 (DMRG)</h4>
              <div class="dmrg-content">
                <p>DMRG特别适用于一维强关联系统：</p>
                
                <div class="dmrg-procedure">
                  <h5>DMRG流程</h5>
                  <ol>
                    <li>将系统分为左、右两个子系统</li>
                    <li>构造超块哈密顿量</li>
                    <li>求解基态波函数</li>
                    <li>构造约化密度矩阵</li>
                    <li>保留最重要的本征态</li>
                    <li>迭代直到收敛</li>
                  </ol>
                </div>
                
                <div class="dmrg-advantages">
                  <h5>DMRG优势</h5>
                  <ul><li>可处理大系统（$N > 1000$）</li>
                    <li>高精度基态计算</li>
                    <li>可计算动力学性质</li>
                    <li>适用于有能隙和无能隙系统</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-realization">
          <h3>实验实现</h3>
          <div class="experimental-content">
            <div class="material-platforms">
              <h4>材料平台</h4>
              <div class="platforms-grid">
                <div class="platform">
                  <h5>一维磁性材料</h5>
                  <div class="platform-content">
                    <p><strong>典型材料：</strong></p>
                    <ul>
                      <li>CsNiCl₃：准一维反铁磁链</li>
                      <li>KCuF₃：一维海森堡链</li>
                      <li>Sr₂CuO₃：自旋梯子系统</li>
                    </ul>
                    
                    <p><strong>实验手段：</strong></p>
                    <ul>
                      <li>中子散射测量自旋激发</li>
                      <li>磁化率测量相变</li>
                      <li>比热测量临界行为</li>
                    </ul>
                  </div>
                </div>
                
                <div class="platform">
                  <h5>冷原子系统</h5>
                  <div class="platform-content">
                    <p><strong>实现方案：</strong></p>
                    <ul>
                      <li>光晶格中的超冷原子</li>
                      <li>可调节的相互作用强度</li>
                      <li>精确控制的外场</li>
                    </ul>
                    
                    <p><strong>测量技术：</strong></p>
                    <ul>
                      <li>原位成像观测密度分布</li>
                      <li>时间飞行测量动量分布</li>
                      <li>射频谱学探测激发谱</li>
                    </ul>
                  </div>
                </div>
                
                <div class="platform">
                  <h5>量子模拟器</h5>
                  <div class="platform-content">
                    <p><strong>平台类型：</strong></p>
                    <ul>
                      <li>离子阱量子模拟器</li>
                      <li>超导量子比特阵列</li>
                      <li>里德堡原子系统</li>
                    </ul>
                    
                    <p><strong>优势：</strong></p>
                    <ul>
                      <li>参数完全可控</li>
                      <li>可实现任意哈密顿量</li>
                      <li>单量子比特精度测量</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="measurement-techniques">
              <h4>测量技术</h4>
              <div class="techniques-content">
                <div class="spectroscopic-methods">
                  <h5>谱学方法</h5>
                  <div class="spectroscopy-grid">
                    <div class="spectroscopy">
                      <h6>中子散射</h6>
                      <p>测量动力学结构因子：</p>
                      <div class="formula-block">
                        <katex-element expression="S(q, \omega) = \int dt \, e^{i\omega t} \langle S^z(q, t) S^z(-q, 0) \rangle" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="spectroscopy">
                      <h6>核磁共振 (NMR)</h6>
                      <p>探测局域磁场和自旋动力学</p>
                      <ul>
                        <li>弛豫时间测量</li>
                        <li>Knight位移</li>
                        <li>四极耦合</li>
                      </ul>
                    </div>
                    
                    <div class="spectroscopy">
                      <h6>电子自旋共振 (ESR)</h6>
                      <p>直接探测自旋激发</p>
                      <ul>
                        <li>g因子测量</li>
                        <li>线宽分析</li>
                        <li>温度依赖性</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="thermodynamic-measurements">
                  <h5>热力学测量</h5>
                  <div class="thermo-measurements">
                    <div class="measurement">
                      <h6>磁化率</h6>
                      <p>SQUID磁强计测量：</p>
                      <div class="formula-block">
                        <katex-element expression="\chi(T, H) = \frac{\partial M}{\partial H}\bigg|_{T}" :inline="false" />
                      </div>
                      <p>可以识别相变点和临界行为。</p>
                    </div>
                    
                    <div class="measurement">
                      <h6>比热</h6>
                      <p>量热法测量：</p>
                      <div class="formula-block">
                        <katex-element expression="C(T, H) = \frac{\partial U}{\partial T}\bigg|_{H}" :inline="false" />
                      </div>
                      <p>反映态密度的奇异性。</p>
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
      <h2>理论扩展与应用</h2>
      
      <div class="theoretical-extensions">
        <div class="interaction-effects">
          <h3>相互作用效应</h3>
          <div class="interaction-content">
            <div class="hubbard-model">
              <h4>Hubbard相互作用</h4>
              <div class="hubbard-content">
                <p>添加在位库仑相互作用：</p>
                <div class="formula-block">
                  <katex-element expression="H_{\text{int}} = U \sum_i n_{i\uparrow} n_{i\downarrow}" :inline="false" />
                </div>
                
                <p>总哈密顿量变为：</p>
                <div class="formula-block">
                  <katex-element expression="H = H_{\text{XY}} + H_{\text{int}}" :inline="false" />
                </div>
                
                <div class="interaction-effects-list">
                  <h5>相互作用的影响</h5>
                  <ul>
                    <li>Mott绝缘体相的出现</li>
                    <li>自旋-电荷分离</li>
                    <li>Luttinger液体行为</li>
                    <li>相变性质的修正</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="long-range-interactions">
              <h4>长程相互作用</h4>
              <div class="long-range-content">
                <p>考虑长程偶极相互作用：</p>
                <div class="formula-block">
                  <katex-element expression="H_{\text{lr}} = \sum_{i < j} \frac{V_{ij}}{|i-j|^\alpha} S_i^z S_j^z" :inline="false" />
                </div>
                
                <div class="alpha-regimes">
                  <h5>不同α值的物理</h5>
                  <div class="regimes-grid">
                    <div class="regime">
                      <h6>α > 2</h6>
                      <p>短程行为占主导</p>
                    </div>
                    
                    <div class="regime">
                      <h6>α = 2</h6>
                      <p>边界情况，对数修正</p>
                    </div>
                    
                    <div class="regime">
                      <h6>α &lt; 2</h6>
                      <p>长程行为，新的临界性</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="disorder-effects">
          <h3>无序效应</h3>
          <div class="disorder-content">
            <div class="random-field">
              <h4>随机磁场</h4>
              <div class="random-field-content">
                <p>引入随机磁场：</p>
                <div class="formula-block">
                  <katex-element expression="H_{\text{dis}} = \sum_i h_i S_i^z" :inline="false" />
                </div><p>其中$h_i$是随机变量，通常服从高斯分布：</p>
                <div class="formula-block">
                  <katex-element expression="P(h_i) = \frac{1}{\sqrt{2\pi \sigma^2}} e^{-h_i^2/(2\sigma^2)}" :inline="false" />
                </div>
                
                <div class="disorder-effects-list">
                  <h5>无序的影响</h5>
                  <ul>
                    <li>Anderson局域化</li>
                    <li>多体局域化</li>
                    <li>相变的展宽</li>
                    <li>Griffiths相的出现</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="random-coupling">
              <h4>随机耦合</h4>
              <div class="random-coupling-content">
                <p>随机交换耦合：</p>
                <div class="formula-block">
                  <katex-element expression="H_{\text{rand}} = -\sum_i J_i (S_i^x S_{i+1}^x + S_i^y S_{i+1}^y)" :inline="false" />
                </div><p>其中$J_i$是随机变量。</p>
                
                <div class="random-singlet-phase">
                  <h5>随机单态相</h5>
                  <p>强无序极限下可能出现随机单态相，其特征为：</p>
                  <ul>
                    <li>指数分布的单态形成长度</li>
                    <li>对数慢的动力学</li>
                    <li>无限随机不动点</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="applications">
          <h3>实际应用</h3>
          <div class="applications-content">
            <div class="quantum-information">
              <h4>量子信息应用</h4>
              <div class="quantum-info-content">
                <div class="entanglement-generation">
                  <h5>纠缠产生</h5>
                  <p>利用Lifshitz相变点附近的临界涨落产生多体纠缠：</p>
                  <div class="formula-block">
                    <katex-element expression="S_{\text{ent}} = -\text{Tr}(\rho_A \ln \rho_A)" :inline="false" />
                  </div><p>其中$\rho_A$ 是子系统A的约化密度矩阵。</p>
                </div>
                
                <div class="quantum-sensing">
                  <h5>量子传感</h5>
                  <p>利用相变点的敏感性进行精密测量：</p>
                  <ul>
                    <li>磁场传感器</li>
                    <li>温度计</li>
                    <li>应力传感器</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="material-design">
              <h4>材料设计</h4>
              <div class="material-design-content">
                <div class="functional-materials">
                  <h5>功能材料</h5>
                  <ul>
                    <li>磁制冷材料</li>
                    <li>磁电耦合材料</li>
                    <li>自旋电子学器件</li>
                    <li>量子磁体</li>
                  </ul>
                </div>
                
                <div class="design-principles">
                  <h5>设计原理</h5>
                  <ul>
                    <li>调控维度和几何结构</li>
                    <li>优化交换相互作用</li>
                    <li>引入可控的外场</li>
                    <li>利用相变的临界行为</li>
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
        <div class="key-findings">
          <h3>主要发现</h3>
          <ul>
            <li>磁场下一维量子XY模型展现了清晰的Lifshitz相变</li>
            <li>相变由费米面拓扑变化驱动，不涉及对称性破缺</li>
            <li>Jordan-Wigner变换提供了精确的理论框架</li>
            <li>一维系统的van Hove奇异性导致独特的临界行为</li>
            <li>多种实验平台可以实现和观测这种相变</li>
          </ul>
        </div>
        
        <div class="theoretical-insights">
          <h3>理论洞察</h3>
          <ul>
            <li>Lifshitz相变是量子相变的重要类别</li>
            <li>费米面拓扑是理解量子物态的关键</li>
            <li>一维系统提供了研究量子效应的理想平台</li>
            <li>精确可解模型对理论发展具有重要价值</li>
          </ul>
        </div>
        
        <div class="future-directions">
          <h3>未来方向</h3>
          <ul>
            <li>高维系统中的Lifshitz相变</li>
            <li>强关联效应对相变的影响</li>
            <li>非平衡态下的动力学相变</li>
            <li>拓扑保护的量子相变</li>
            <li>机器学习在相变识别中的应用</li>
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

.lead-text {
  font-size: 1.1rem;
  color: #495057;
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
  border-bottom: 3px solid #667eea;
}

.model-setup, .energy-spectrum, .phase-diagram-analysis, .physical-properties, .computational-experimental, .theoretical-extensions {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.hamiltonian-definition h3, .energy-spectrum h3, .parameter-space h3, .ground-state-properties h3, .numerical-methods h3, .interaction-effects h3 {
  color: #495057;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 1rem;
  border-left: 4px solid #28a745;
}

.hamiltonian-content, .spectrum-content, .phase-space-content, .ground-state-content, .numerical-content, .interaction-content {
  display: grid;
  gap: 2rem;
}

.basic-hamiltonian, .jordan-wigner-transformation, .fourier-transformation, .dispersion-relation, .critical-points {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e9ecef;
}

.basic-hamiltonian h4, .jordan-wigner-transformation h4, .fourier-transformation h4, .dispersion-relation h4, .critical-points h4 {
  color: #343a40;
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

.transformation-content, .fourier-content, .dispersion-content, .critical-content {
  margin-top: 1rem;
}

.transformed-hamiltonian, .momentum-space-hamiltonian, .spectrum-features, .lifshitz-conditions {
  background: #e3f2fd;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #2196f3;
}

.transformed-hamiltonian h5, .momentum-space-hamiltonian h5, .spectrum-features h5, .lifshitz-conditions h5 {
  color: #1976d2;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.features-grid, .transition-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.feature, .transition-point {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.feature h6, .transition-point h6 {
  color: #424242;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
}

.fermi-energy, .fermi-momentum, .fermi-points {
  background: #fff3e0;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #ff9800;
}

.fermi-energy h5, .fermi-momentum h5, .fermi-points h6 {
  color: #f57c00;
  margin-bottom: 0.8rem;
}

.phases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.phase {
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid;
}

.empty-band {
  background: #ffebee;
  border-color: #f44336;
}

.partially-filled {
  background: #e8f5e8;
  border-color: #4caf50;
}

.full-band {
  background: #e3f2fd;
  border-color: #2196f3;
}

.phase h5 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.empty-band h5 {
  color: #d32f2f;
}

.partially-filled h5 {
  color: #388e3c;
}

.full-band h5 {
  color: #1976d2;
}

.phase-description p {
  margin-bottom: 0.8rem;
}

.phase-description ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.boundaries-content {
  margin-top: 1rem;
}

.boundary {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #9c27b0;
}

.boundary h5 {
  color: #7b1fa2;
  margin-bottom: 0.8rem;
}

.boundary-properties {
  background: #fce4ec;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e91e63;
}

.boundary-properties h5 {
  color: #c2185b;
  margin-bottom: 0.8rem;
}

.lifshitz-transitions {
  margin-top: 2rem;
}

.lifshitz-content {
  background: #f3e5f5;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #9c27b0;
}

.mechanism-content, .critical-content {
  margin-top: 1rem;
}

.fermi-surface-topology, .order-parameter, .density-of-states, .thermodynamic-quantities {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.topology-evolution {
  margin-top: 1rem;
}

.evolution-step {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #17a2b8;
}

.evolution-step h6 {
  color: #138496;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
}

.quantities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.quantity {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.quantity h6 {
  color: #495057;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
}

.finite-temperature-effects, .dynamic-properties {
  margin-top: 2rem;
}

.temperature-content, .dynamics-content {
  background: #fff8e1;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #ffc107;
}

.broadening-content, .correlation-content, .excitation-content {
  margin-top: 1rem;
}

.crossover-region, .temperature-scales, .spin-correlations, .density-correlations, .asymptotic-behavior {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.scales-grid, .behavior-regimes, .excitation-types, .collective-modes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.scale, .regime, .excitation-type, .mode {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.scale h6, .regime h6, .excitation-type h6, .mode h6 {
  color: #495057;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
}

.specific-heat-content {
  margin-top: 1rem;
}

.temperature-regimes {
  margin-top: 1rem;
}

.regime {
  margin-bottom: 1rem;
}

.low-temp {
  border-left: 4px solid #2196f3;
}

.high-temp {
  border-left: 4px solid #ff5722;
}

.critical-enhancement {
  background: #ffecb3;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
  margin-top: 1rem;
}

.critical-enhancement h5 {
  color: #f57c00;
  margin-bottom: 0.8rem;
}

.gapless {
  border-left: 4px solid #4caf50;
}

.gapped {
  border-left: 4px solid #f44336;
}

.single-particle-excitations, .collective-excitations {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.experimental-realization {
  margin-top: 2rem;
}

.experimental-content {
  background: #e8f5e8;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #4caf50;
}

.platforms-grid, .techniques-content {
  display: grid;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.platform {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-left: 4px solid #4caf50;
}

.platform h5 {
  color: #388e3c;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.platform-content p {
  margin-bottom: 0.8rem;
  font-weight: 600;
}

.platform-content ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
}

.spectroscopic-methods, .thermodynamic-measurements {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.spectroscopy-grid, .thermo-measurements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.spectroscopy, .measurement {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.spectroscopy h6, .measurement h6 {
  color: #495057;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
}

.disorder-effects, .applications {
  margin-top: 2rem;
}

.disorder-content, .applications-content {
  background: #fce4ec;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e91e63;
}

.random-field, .random-coupling, .quantum-information, .material-design {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.random-field-content, .random-coupling-content, .quantum-info-content, .material-design-content {
  margin-top: 1rem;
}

.disorder-effects-list, .random-singlet-phase, .entanglement-generation, .quantum-sensing, .functional-materials, .design-principles {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #e91e63;
}

.disorder-effects-list h5, .random-singlet-phase h5, .entanglement-generation h5, .quantum-sensing h5, .functional-materials h5, .design-principles h5 {
  color: #c2185b;
  margin-bottom: 0.8rem;
}

.summary-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.key-findings, .theoretical-insights, .future-directions {
  margin-bottom: 2rem;
}

.key-findings h3, .theoretical-insights h3, .future-directions h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.key-findings ul, .theoretical-insights ul, .future-directions ul {
  margin-left: 1.5rem;
}

.key-findings li, .theoretical-insights li, .future-directions li {
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
  
  .features-grid, .transition-points, .phases-grid, .quantities-grid, .scales-grid, .behavior-regimes, .platforms-grid, .spectroscopy-grid, .thermo-measurements {
    grid-template-columns: 1fr;
  }
  
  .model-setup, .energy-spectrum, .phase-diagram-analysis, .physical-properties, .computational-experimental, .theoretical-extensions {
    padding: 1rem;
  }
}
</style>