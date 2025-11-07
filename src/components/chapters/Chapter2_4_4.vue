<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.4 群散长程Coulomb相互作用</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">多体理论</span>
        <span class="reading-time">阅读时间: 40分钟</span>
      </div>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <p class="lead-text">
        长程Coulomb相互作用是凝聚态物理中最基本也最复杂的相互作用之一。
        由于其1/r的长程特性，直接处理会导致发散问题，需要特殊的理论方法。
        群散(Screening)效应和集体激发现象是理解金属、半导体和绝缘体电子性质的关键，
        本节将深入探讨这些现象的微观机制和理论描述。
      </p>
    </div>

    <!-- 长程Coulomb相互作用的基本问题 -->
    <div class="content-section">
      <h2>⚡ 长程Coulomb相互作用的基本问题</h2>
      
      <div class="fundamental-problems">
        <div class="problem-grid">
          <div class="problem-card divergence">
            <div class="problem-icon">⚠️</div>
            <h3>发散问题</h3>
            <div class="problem-content">
              <p><strong>核心困难：</strong>裸Coulomb相互作用的长程特性</p>
              
              <div class="coulomb-potential">
                <div class="math-display">
                  $$V(r) = \frac{e^2}{4\pi\varepsilon_0 r}$$
                </div>
                <p class="formula-note">
                  当r → ∞时，势能衰减缓慢，导致总能量发散
                </p>
              </div>

              <div class="divergence-analysis">
                <h4>发散的来源：</h4>
                <ul>
                  <li><strong>动能发散：</strong>零点动能在热力学极限下发散</li>
                  <li><strong>势能发散：</strong>长程相互作用的积分发散</li>
                  <li><strong>交换能发散：</strong>Hartree-Fock近似中的交换项</li>
                </ul>
              </div>

              <div class="mathematical-treatment">
                <h4>数学处理方法：</h4>
                <div class="treatment-list">
                  <div class="treatment-item">
                    <strong>Ewald求和：</strong>将长程相互作用分解为短程和长程部分
                  </div>
                  <div class="treatment-item">
                    <strong>背景电荷：</strong>引入均匀正电荷背景保证电中性
                  </div>
                  <div class="treatment-item">
                    <strong>周期边界条件：</strong>利用晶格周期性处理边界效应
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="problem-card many-body">
            <div class="problem-icon">🔗</div>
            <h3>多体关联效应</h3>
            <div class="problem-content">
              <p><strong>复杂性：</strong>电子间的强烈关联导致非微扰效应</p>
              
              <div class="correlation-strength">
                <h4>关联强度参数：</h4>
                <div class="math-display">
                  $$r_s = \frac{1}{(4\pi n/3)^{1/3} a_0}$$
                </div>
                <p class="formula-note">
                  Wigner-Seitz半径，衡量Coulomb相互作用与动能的比值
                </p>
              </div>

              <div class="correlation-regimes">
                <h4>不同关联区域：</h4>
                <div class="regime-comparison">
                  <table class="regime-table">
                    <thead>
                      <tr>
                        <th>r_s 范围</th>
                        <th>物理图像</th>
                        <th>主要方法</th>
                        <th>典型材料</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><strong>r_s ≪ 1</strong></td>
                        <td>弱关联，费米液体</td>
                        <td>微扰理论，RPA</td>
                        <td>简单金属</td>
                      </tr>
                      <tr>
                        <td><strong>r_s ~ 1</strong></td>
                        <td>中等关联</td>
                        <td>GW近似，DMFT</td>
                        <td>过渡金属</td>
                      </tr>
                      <tr>
                        <td><strong>r_s ≫ 1</strong></td>
                        <td>强关联，Wigner晶体</td>
                        <td>变分方法，QMC</td>
                        <td>低密度电子气</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="problem-card collective">
            <div class="problem-icon">🌊</div>
            <h3>集体激发现象</h3>
            <div class="problem-content">
              <p><strong>新物理：</strong>长程相互作用导致的集体模式</p>
              
              <div class="collective-modes">
                <h4>主要集体激发：</h4>
                <div class="mode-grid">
                  <div class="mode-card plasmon">
                    <h5>等离激元</h5>
                    <div class="mode-formula">
                      <div class="math-display">
                        $$\omega_p = \sqrt{\frac{4\pi ne^2}{m}}$$
                      </div>
                      <p>电子密度振荡的集体模式</p>
                    </div>
                  </div>

                  <div class="mode-card magnon">
                    <h5>磁振子</h5>
                    <div class="mode-formula">
                      <div class="math-display">
                        $$\omega_m = \frac{2JS}{ℏ}(1 - \cos ka)$$
                      </div>
                      <p>自旋密度波的集体激发</p>
                    </div>
                  </div>

                  <div class="mode-card phonon">
                    <h5>声子</h5>
                    <div class="mode-formula">
                      <div class="math-display">
                        $$\omega_{ph} = v_s |q|$$
                      </div>
                      <p>离子晶格振动的量子化</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mode-coupling">
                <h4>模式耦合效应：</h4>
                <ul>
                  <li>电子-等离激元耦合</li>
                  <li>等离激元-声子耦合</li>
                  <li>自旋-轨道耦合</li>
                  <li>多体激发的混合</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Thomas-Fermi理论详解 -->
    <div class="content-section">
      <h2>🎯 Thomas-Fermi理论详解</h2>
      
      <div class="thomas-fermi-theory">
        <div class="tf-introduction">
          <p class="section-intro">
            Thomas-Fermi理论是处理多电子系统的经典统计方法，通过局域密度近似
            将复杂的多体问题转化为有效单体问题。该理论为现代密度泛函理论奠定了基础。
          </p>
        </div>

        <div class="tf-basic-assumptions">
          <h3>📋 基本假设与近似</h3>
          <div class="assumptions-grid">
            <div class="assumption-card">
              <h4>局域密度近似</h4>
              <div class="assumption-content">
                <p><strong>核心思想：</strong>电子密度在局域范围内可视为均匀</p>
                <div class="math-display">
                  $$n(\mathbf{r}) = \frac{1}{3\pi^2}[2m(\mu - V(\mathbf{r}))]^{3/2}$$
                </div>
                <p class="formula-note">
                  其中μ是化学势，V(r)是有效势能，包含外势和Hartree势
                </p>
              </div>
            </div>

            <div class="assumption-card">
              <h4>统计近似</h4>
              <div class="assumption-content">
                <p><strong>物理图像：</strong>电子遵循费米-狄拉克统计</p>
                <div class="math-display">
                  $$f(E) = \frac{1}{e^{(E-\mu)/k_BT} + 1}$$
                </div>
                <p class="formula-note">
                  在T=0极限下，费米面以下完全填充，以上完全空虚
                </p>
              </div>
            </div>

            <div class="assumption-card">
              <h4>经典动能</h4>
              <div class="assumption-content">
                <p><strong>近似处理：</strong>忽略量子压力项和交换关联效应</p>
                <div class="math-display">
                  $$T[n] = C_F \int n(\mathbf{r})^{5/3} d\mathbf{r}$$
                </div>
                <p class="formula-note">
                  其中$C_F = \frac{3}{10}(3\pi^2)^{2/3}$是费米气体动能系数
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="tf-equations">
          <h3>⚖️ Thomas-Fermi方程推导</h3>
          <div class="derivation-process">
            <div class="derivation-step">
              <h4>步骤1：能量泛函构造</h4>
              <div class="step-content">
                <p><strong>总能量表达式：</strong></p>
                <div class="math-display">
                  $$E[n] = T[n] + \int V_{ext}(\mathbf{r}) n(\mathbf{r}) d\mathbf{r} + \frac{1}{2} \int \int \frac{n(\mathbf{r}) n(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} d\mathbf{r} d\mathbf{r}'$$
                </div>
                <p class="step-explanation">
                  包含动能、外势能和Hartree相互作用能三部分
                </p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>步骤2：变分条件</h4>
              <div class="step-content">
                <p><strong>最小化条件：</strong></p>
                <div class="math-display">
                  $$\frac{\delta E[n]}{\delta n(\mathbf{r})} = \mu = \text{常数}$$
                </div>
                <p class="step-explanation">
                  化学势在整个系统中保持恒定，这是热力学平衡的要求
                </p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>步骤3：有效势方程</h4>
              <div class="step-content">
                <p><strong>自洽势方程：</strong></p>
                <div class="math-display">
                  $$V_{eff}(\mathbf{r}) = V_{ext}(\mathbf{r}) + \int \frac{n(\mathbf{r}')}{|\mathbf{r} - \mathbf{r}'|} d\mathbf{r}'$$
                </div>
                <p class="step-explanation">
                  有效势包含外势和由电子密度产生的Hartree势
                </p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>步骤4：Thomas-Fermi方程</h4>
              <div class="step-content">
                <p><strong>最终形式：</strong></p>
                <div class="math-display">
                  $$\nabla^2 V_{eff}(\mathbf{r}) = 4\pi e^2 n(\mathbf{r}) = \frac{4\pi e^2}{3\pi^2}[2m(\mu - V_{eff}(\mathbf{r}))]^{3/2}$$
                </div>
                <p class="step-explanation">
                  这是一个非线性微分方程，需要数值方法求解
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="tf-screening">
          <h3>🛡️ Thomas-Fermi屏蔽效应</h3>
          <div class="screening-analysis">
            <div class="screening-mechanism">
              <h4>屏蔽机制</h4>
              <div class="mechanism-content">
                <p><strong>物理图像：</strong></p>
                <p>
                  当系统中引入点电荷时，周围的电子会重新分布以屏蔽该电荷的影响。
                  Thomas-Fermi理论给出了这种屏蔽效应的定量描述。
                </p>

                <div class="screening-equation">
                  <p><strong>线性化Thomas-Fermi方程：</strong></p>
                  <div class="math-display">
                    $$\nabla^2 \phi(\mathbf{r}) - k_{TF}^2 \phi(\mathbf{r}) = -4\pi e \delta(\mathbf{r})$$
                  </div>
                  <p class="equation-note">
                    其中$k_{TF} = \sqrt{4\pi e^2 \frac{dn}{d\mu}}$是Thomas-Fermi屏蔽波矢
                  </p>
                </div>
              </div>
            </div>

            <div class="screening-solution">
              <h4>屏蔽势的解析解</h4>
              <div class="solution-content">
                <div class="math-display">
                  $$\phi(r) = \frac{e}{4\pi\varepsilon_0 r} e^{-k_{TF} r}$$
                </div>
                <p class="solution-note">
                  这就是著名的Yukawa势，描述了指数衰减的屏蔽Coulomb相互作用
                </p>

                <div class="screening-length">
                  <p><strong>Thomas-Fermi屏蔽长度：</strong></p>
                  <div class="math-display">
                    $$\lambda_{TF} = \frac{1}{k_{TF}} = \sqrt{\frac{\varepsilon_0}{4\pi e^2 \frac{dn}{d\mu}}}$$
                  </div>
                  <p class="length-interpretation">
                    屏蔽长度决定了Coulomb相互作用的有效作用范围
                  </p>
                </div>
              </div>
            </div>

            <div class="screening-applications">
              <h4>屏蔽效应的应用</h4>
              <div class="applications-grid">
                <div class="application-card">
                  <h5>金属中的屏蔽</h5>
                  <div class="application-content">
                    <p><strong>典型屏蔽长度：</strong>~0.5-1 Å</p>
                    <p>导致有效相互作用变为短程，简化多体问题</p>
                  </div>
                </div>

                <div class="application-card">
                  <h5>半导体中的屏蔽</h5>
                  <div class="application-content">
                    <p><strong>温度依赖性：</strong>屏蔽长度随载流子密度变化</p>
                    <p>影响杂质散射和载流子输运性质</p>
                  </div>
                </div>

                <div class="application-card">
                  <h5>等离子体物理</h5>
                  <div class="application-content">
                    <p><strong>Debye屏蔽：</strong>Thomas-Fermi理论的经典极限</p>
                    <p>描述高温等离子体中的集体效应</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tf-limitations">
          <h3>⚠️ 理论局限性与改进</h3>
          <div class="limitations-analysis">
            <div class="limitation-item">
              <h4>主要局限性</h4>
              <div class="limitation-content">
                <ul>
                  <li><strong>忽略交换关联：</strong>没有考虑电子的反对称性和关联效应</li>
                  <li><strong>经典近似：</strong>忽略了量子涨落和零点运动</li>
                  <li><strong>局域性假设：</strong>不适用于快速变化的密度分布</li>
                  <li><strong>高密度近似：</strong>在低密度区域精度较差</li>
                </ul>
              </div>
            </div>

            <div class="improvement-methods">
              <h4>理论改进方向</h4>
              <div class="improvement-grid">
                <div class="improvement-card">
                  <h5>Thomas-Fermi-Dirac理论</h5>
                  <p>加入交换能修正，提高对原子和分子的描述精度</p>
                </div>

                <div class="improvement-card">
                  <h5>梯度修正</h5>
                  <p>考虑密度梯度项，改善非均匀系统的处理</p>
                </div>

                <div class="improvement-card">
                  <h5>现代密度泛函理论</h5>
                  <p>Hohenberg-Kohn定理为基础的精确理论框架</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 高级Coulomb相互作用理论 -->
    <div class="content-section">
      <h2>🔬 高级Coulomb相互作用理论</h2>
      
      <div class="advanced-coulomb-theory">
        <div class="theory-introduction">
          <p class="section-intro">
            超越Thomas-Fermi近似，现代理论发展了更精确的方法来处理Coulomb相互作用，
            包括随机相位近似(RPA)、GW近似和动力学平均场理论等。这些方法能够更好地
            描述电子关联效应和激发态性质。
          </p>
        </div>

        <div class="rpa-theory">
          <h3>🎯 随机相位近似(RPA)</h3>
          <div class="rpa-content">
            <div class="rpa-basic-idea">
              <h4>基本思想</h4>
              <div class="idea-content">
                <p><strong>核心概念：</strong>考虑电子-空穴对激发的集体效应</p>
                <p>
                  RPA通过求和所有可能的电子-空穴对泡图来改进Hartree近似，
                  能够正确描述等离激元等集体激发现象。
                </p>

                <div class="rpa-equation">
                  <p><strong>RPA极化函数：</strong></p>
                  <div class="math-display">
                    $$\Pi^{RPA}(q,\omega) = \Pi^0(q,\omega) + \Pi^0(q,\omega) V(q) \Pi^{RPA}(q,\omega)$$
                  </div>
                  <p class="equation-note">
                    其中$\Pi^0(q,\omega)$是非相互作用极化函数，V(q)是Coulomb相互作用
                  </p>
                </div>
              </div>
            </div>

            <div class="rpa-dielectric">
              <h4>RPA介电函数</h4>
              <div class="dielectric-content">
                <div class="math-display">
                  $$\varepsilon^{RPA}(q,\omega) = 1 - V(q)\Pi^0(q,\omega)$$
                </div>
                <p class="formula-explanation">
                  这个表达式包含了所有阶的电子-空穴对激发贡献
                </p>

                <div class="plasmon-condition">
                  <p><strong>等离激元条件：</strong></p>
                  <div class="math-display">
                    $$\varepsilon^{RPA}(q,\omega_p) = 0$$
                  </div>
                  <p class="condition-note">
                    等离激元频率由介电函数的零点确定
                  </p>
                </div>
              </div>
            </div>

            <div class="rpa-applications">
              <h4>RPA的应用与成功</h4>
              <div class="applications-grid">
                <div class="application-item">
                  <h5>等离激元色散</h5>
                  <p>正确预测了金属中等离激元的色散关系和阻尼</p>
                </div>
                <div class="application-item">
                  <h5>光学性质</h5>
                  <p>描述金属和半导体的介电函数和光学吸收</p>
                </div>
                <div class="application-item">
                  <h5>电子能量损失谱</h5>
                  <p>解释EELS实验中观察到的集体激发峰</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="gw-approximation">
          <h3>⚡ GW近似</h3>
          <div class="gw-content">
            <div class="gw-motivation">
              <h4>理论动机</h4>
              <div class="motivation-content">
                <p><strong>问题：</strong>Hartree-Fock理论无法正确描述准粒子能量</p>
                <p>
                  GW近似通过引入动力学屏蔽相互作用来改进自能的计算，
                  能够准确预测材料的带隙和准粒子能谱。
                </p>

                <div class="gw-self-energy">
                  <p><strong>GW自能：</strong></p>
                  <div class="math-display">
                    $$\Sigma(\mathbf{r},\mathbf{r}',\omega) = i\int \frac{d\omega'}{2\pi} G(\mathbf{r},\mathbf{r}',\omega+\omega') W(\mathbf{r},\mathbf{r}',\omega')$$
                  </div>
                  <p class="equation-note">
                    其中G是单粒子格林函数，W是屏蔽Coulomb相互作用
                  </p>
                </div>
              </div>
            </div>

            <div class="screened-interaction">
              <h4>屏蔽相互作用W</h4>
              <div class="interaction-content">
                <div class="math-display">
                  $$W(\mathbf{r},\mathbf{r}',\omega) = \int d\mathbf{r}'' \varepsilon^{-1}(\mathbf{r},\mathbf{r}'',\omega) V(\mathbf{r}''-\mathbf{r}')$$
                </div>
                <p class="formula-explanation">
                  屏蔽相互作用包含了介质的动力学响应
                </p>

                <div class="physical-interpretation">
                  <h5>物理图像</h5>
                  <div class="interpretation-points">
                    <div class="point">
                      <strong>短时间尺度：</strong>电子感受到裸Coulomb相互作用
                    </div>
                    <div class="point">
                      <strong>长时间尺度：</strong>相互作用被介质屏蔽
                    </div>
                    <div class="point">
                      <strong>频率依赖：</strong>屏蔽效应随频率变化
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="gw-results">
              <h4>GW近似的成就</h4>
              <div class="results-grid">
                <div class="result-card">
                  <h5>带隙预测</h5>
                  <div class="result-content">
                    <p><strong>改进：</strong>相比DFT，GW能准确预测半导体和绝缘体的带隙</p>
                    <p><strong>精度：</strong>通常在0.1-0.3 eV范围内与实验符合</p>
                  </div>
                </div>

                <div class="result-card">
                  <h5>准粒子能谱</h5>
                  <div class="result-content">
                    <p><strong>应用：</strong>光电子能谱(PES)和反向光电子能谱(IPES)</p>
                    <p><strong>成功：</strong>正确描述了卫星峰和等离激元损失</p>
                  </div>
                </div>

                <div class="result-card">
                  <h5>激子效应</h5>
                  <div class="result-content">
                    <p><strong>扩展：</strong>GW+BSE方法处理电子-空穴相互作用</p>
                    <p><strong>应用：</strong>光学吸收谱和激子结合能计算</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="correlation-effects">
          <h3>🔗 强关联效应</h3>
          <div class="correlation-content">
            <div class="strong-correlation">
              <h4>强关联系统的特征</h4>
              <div class="characteristics-content">
                <p><strong>判据：</strong>当Coulomb相互作用能与带宽可比时</p>
                <div class="math-display">
                  $$U \sim W \quad \text{或} \quad r_s \gtrsim 1$$
                </div>

                <div class="correlation-phenomena">
                  <h5>典型现象</h5>
                  <div class="phenomena-list">
                    <div class="phenomenon">
                      <strong>Mott绝缘体：</strong>
                      <p>强关联导致的金属-绝缘体转变</p>
                    </div>
                    <div class="phenomenon">
                      <strong>高温超导：</strong>
                      <p>铜氧化物中的非常规配对机制</p>
                    </div>
                    <div class="phenomenon">
                      <strong>重费米子：</strong>
                      <p>f电子系统中的巨大有效质量</p>
                    </div>
                    <div class="phenomenon">
                      <strong>量子自旋液体：</strong>
                      <p>几何阻挫导致的新奇量子态</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="dmft-theory">
              <h4>动力学平均场理论(DMFT)</h4>
              <div class="dmft-content">
                <p><strong>基本思想：</strong>将晶格问题映射到杂质问题</p>
                
                <div class="dmft-mapping">
                  <div class="math-display">
                    $$G_{loc}(\omega) = \int \frac{d\mathbf{k}}{(2\pi)^3} \frac{1}{\omega + \mu - \varepsilon_\mathbf{k} - \Sigma(\omega)}$$
                  </div>
                  <p class="mapping-note">
                    局域格林函数通过自能的自洽条件确定
                  </p>
                </div>

                <div class="dmft-advantages">
                  <h5>DMFT的优势</h5>
                  <ul>
                    <li>正确处理局域关联效应</li>
                    <li>包含动力学效应和准粒子峰</li>
                    <li>可以描述Mott转变</li>
                    <li>适用于有限温度计算</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modern-developments">
          <h3>🚀 现代发展方向</h3>
          <div class="developments-content">
            <div class="development-grid">
              <div class="development-card">
                <h4>机器学习方法</h4>
                <div class="development-content">
                  <p><strong>神经网络量子态：</strong>用深度学习表示多体波函数</p>
                  <p><strong>应用：</strong>强关联系统的基态和激发态计算</p>
                </div>
              </div>

              <div class="development-card">
                <h4>张量网络方法</h4>
                <div class="development-content">
                  <p><strong>DMRG/MPS：</strong>一维强关联系统的精确方法</p>
                  <p><strong>PEPS/iPEPS：</strong>二维系统的张量网络表示</p>
                </div>
              </div>

              <div class="development-card">
                <h4>量子蒙特卡罗</h4>
                <div class="development-content">
                  <p><strong>连续时间QMC：</strong>处理杂质问题的精确方法</p>
                  <p><strong>符号问题：</strong>费米子系统的根本挑战</p>
                </div>
              </div>

              <div class="development-card">
                <h4>拓扑量子态</h4>
                <div class="development-content">
                  <p><strong>分数量子霍尔效应：</strong>强关联导致的拓扑态</p>
                  <p><strong>自旋液体：</strong>几何阻挫中的量子纠缠态</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div class="mechanism-overview">
          <h3>🔍 屏蔽的基本概念</h3>
          <div class="overview-content">
            <p>
              屏蔽是指电子系统对外加电荷或电场的响应，通过重新分布电荷密度来减弱长程Coulomb相互作用的效应。
              这一现象在金属中尤为显著，是理解金属导电性和光学性质的关键。
            </p>

            <div class="screening-equation">
              <h4>屏蔽方程：</h4>
              <div class="math-display">
                $$\nabla^2 \phi(\mathbf{r}) = 4\pi e[\rho_{ext}(\mathbf{r}) + \delta\rho(\mathbf{r})]$$
              </div>
              <p class="formula-note">
                其中δρ(r)是感应电荷密度，φ(r)是总电势
              </p>
            </div>
          </div>
        </div>

        <div class="screening-types">
          <h3>📊 不同类型的屏蔽</h3>
          <div class="type-grid">
            <div class="type-card thomas-fermi">
              <h4>Thomas-Fermi屏蔽</h4>
              <div class="type-content">
                <div class="tf-description">
                  <p><strong>适用条件：</strong>静态屏蔽，局域近似</p>
                  
                  <div class="tf-formula">
                    <div class="math-display">
                      $$\phi(r) = \frac{Ze}{4\pi\varepsilon_0 r}e^{-r/\lambda_{TF}}$$
                    </div>
                    <p class="formula-note">
                      Thomas-Fermi屏蔽长度：λ_TF = (6π²n)^(-1/6)
                    </p>
                  </div>

                  <div class="tf-characteristics">
                    <h5>特征：</h5>
                    <ul>
                      <li>指数衰减的屏蔽势</li>
                      <li>屏蔽长度与电子密度相关</li>
                      <li>适用于高密度金属</li>
                      <li>忽略量子效应和频率依赖</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="type-card lindhard">
              <h4>Lindhard屏蔽</h4>
              <div class="type-content">
                <div class="lindhard-description">
                  <p><strong>改进：</strong>包含量子效应和Friedel振荡</p>
                  
                  <div class="lindhard-formula">
                    <div class="math-display">
                      $$\chi(q) = -\frac{m k_F}{\pi^2}\left[1 - \frac{1}{2x}\left(1-x^2\right)\ln\left|\frac{1+x}{1-x}\right|\right]$$
                    </div>
                    <p class="formula-note">
                      其中x = q/(2k_F)，包含了费米面的尖锐性
                    </p>
                  </div>

                  <div class="friedel-oscillations">
                    <h5>Friedel振荡：</h5>
                    <div class="math-display">
                      $$\delta\rho(r) \propto \frac{\cos(2k_F r + \phi)}{r^3}$$
                    </div>
                    <p>长程振荡性屏蔽，反映费米面的存在</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="type-card dynamic">
              <h4>动态屏蔽</h4>
              <div class="type-content">
                <div class="dynamic-description">
                  <p><strong>完整描述：</strong>频率和波矢依赖的屏蔽</p>
                  
                  <div class="dynamic-formula">
                    <div class="math-display">
                      $$\varepsilon(q,\omega) = 1 - \frac{4\pi e^2}{q^2}\chi(q,\omega)$$
                    </div>
                    <p class="formula-note">
                      介电函数完整描述了系统的屏蔽性质
                    </p>
                  </div>

                  <div class="dynamic-effects">
                    <h5>动态效应：</h5>
                    <ul>
                      <li>Landau阻尼：集体激发的衰减</li>
                      <li>等离激元共振：ε(q,ω) = 0的解</li>
                      <li>因果性和Kramers-Kronig关系</li>
                      <li>光学性质的微观起源</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    <!-- 等离激元理论 -->
    <div class="content-section">
      <h2>🌟 等离激元理论</h2>
      
      <div class="plasmon-theory">
        <div class="plasmon-basics">
          <h3>⚡ 等离激元的基本性质</h3>
          <div class="basics-content">
            <div class="plasmon-definition">
              <p>
                等离激元是电子密度集体振荡的量子化激发，是长程Coulomb相互作用的直接结果。
                它们在金属的光学性质、能量损失谱和表面现象中起着核心作用。
              </p>
            </div>

            <div class="classical-derivation">
              <h4>经典推导：</h4>
              <div class="derivation-steps">
                <div class="step-item">
                  <h5>步骤1：运动方程</h5>
                  <div class="math-display">
                    $$m\frac{d\mathbf{v}}{dt} = -e\mathbf{E}$$
                  </div>
                  <p>电子在电场中的牛顿运动方程</p>
                </div>

                <div class="step-item">
                  <h5>步骤2：连续性方程</h5>
                  <div class="math-display">
                    $$\frac{\partial\rho}{\partial t} + \nabla \cdot \mathbf{j} = 0$$
                  </div>
                  <p>电荷守恒定律</p>
                </div>

                <div class="step-item">
                  <h5>步骤3：泊松方程</h5>
                  <div class="math-display">
                    $$\nabla \cdot \mathbf{E} = \frac{\rho}{\varepsilon_0}$$
                  </div>
                  <p>电场与电荷密度的关系</p>
                </div>

                <div class="step-item">
                  <h5>步骤4：色散关系</h5>
                  <div class="math-display">
                    $$\omega^2 = \omega_p^2 = \frac{ne^2}{m\varepsilon_0}$$
                  </div>
                  <p>等离激元频率的经典结果</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="quantum-corrections">
          <h3>🔬 量子修正</h3>
          <div class="corrections-content">
            <div class="quantum-effects">
              <h4>主要量子效应：</h4>
              <div class="effect-grid">
                <div class="effect-card pressure">
                  <h5>量子压强</h5>
                  <div class="effect-content">
                    <div class="math-display">
                      $$\omega^2 = \omega_p^2 + \frac{3}{5}v_F^2 q^2$$
                    </div>
                    <p>费米压强导致的色散修正</p>
                  </div>
                </div>

                <div class="effect-card exchange">
                  <h5>交换修正</h5>
                  <div class="effect-content">
                    <div class="math-display">
                      $$\Delta\omega = -\frac{3}{4}\frac{e^2 k_F}{4\pi\varepsilon_0 m\omega_p}$$
                    </div>
                    <p>Pauli不相容原理的贡献</p>
                  </div>
                </div>

                <div class="effect-card correlation">
                  <h5>关联效应</h5>
                  <div class="effect-content">
                    <div class="math-display">
                      $$\Delta\omega_{corr} \propto r_s^{3/2}$$
                    </div>
                    <p>电子-电子关联的高阶修正</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="dispersion-analysis">
              <h4>完整色散关系：</h4>
              <div class="dispersion-formula">
                <div class="math-display">
                  $$\omega^2(q) = \omega_p^2\left[1 + \frac{3}{5}\left(\frac{v_F q}{\omega_p}\right)^2 - \alpha r_s + \beta r_s^{3/2} + O(r_s^2)\right]$$
                </div>
                <p class="formula-note">
                  包含量子压强、交换和关联修正的完整表达式
                </p>
              </div>

              <div class="dispersion-regimes">
                <h5>不同波矢区域：</h5>
                <ul>
                  <li><strong>长波长(q → 0)：</strong>ω ≈ ω_p，经典等离激元</li>
                  <li><strong>中等波矢：</strong>正色散，频率随q增加</li>
                  <li><strong>短波长：</strong>进入单粒子连续谱，Landau阻尼</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="surface-plasmons">
          <h3>🌊 表面等离激元</h3>
          <div class="surface-content">
            <div class="surface-theory">
              <p>
                表面等离激元是束缚在金属-介质界面的电磁模式，
                其频率低于体等离激元频率，具有独特的局域化特性。
              </p>

              <div class="surface-dispersion">
                <h4>色散关系：</h4>
                <div class="math-display">
                  $$\omega_{sp}(q) = \frac{\omega_p}{\sqrt{1 + \varepsilon_d}}$$
                </div>
                <p class="formula-note">
                  其中ε_d是介质的介电常数
                </p>
              </div>

              <div class="surface-properties">
                <h4>表面等离激元的特性：</h4>
                <div class="property-list">
                  <div class="property-item">
                    <strong>频率：</strong>ω_sp &lt; ω_p，红移现象
                  </div>
                  <div class="property-item">
                    <strong>局域化：</strong>电场在界面附近指数衰减
                  </div>
                  <div class="property-item">
                    <strong>动量匹配：</strong>需要棱镜或光栅耦合
                  </div>
                  <div class="property-item">
                    <strong>应用：</strong>表面增强拉曼散射，生物传感
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary">
      <h2>本节总结</h2>
      <div class="key-points">
        <div class="point-item">
          <div class="point-number">1</div>
          <div class="point-content">
            <strong>基本问题：</strong>长程Coulomb相互作用导致的发散问题需要特殊的理论处理方法
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">2</div>
          <div class="point-content">
            <strong>屏蔽机制：</strong>从Thomas-Fermi到Lindhard理论，屏蔽效应是理解金属性质的关键
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">3</div>
          <div class="point-content">
            <strong>集体激发：</strong>等离激元作为长程相互作用的直接结果，在光学和输运中起核心作用
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">4</div>
          <div class="point-content">
            <strong>量子修正：</strong>费米压强、交换和关联效应对等离激元色散的重要修正
          </div>
        </div>
        
        <div class="point-item">
          <div class="point-number">5</div>
          <div class="point-content">
            <strong>表面现象：</strong>表面等离激元的独特性质及其在纳米光学中的应用前景
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Chapter2_4_4',
  mounted() {
    // 添加数学公式渲染
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 15px;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
}

.chapter-tag, .reading-time {
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.introduction {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 30px;
  border-radius: 15px;
  margin-bottom: 40px;
  border-left: 5px solid #667eea;
}

.lead-text {
  font-size: 1.2em;
  color: #2c3e50;
  margin: 0;
  text-align: justify;
}

.content-section {
  margin-bottom: 50px;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 2em;
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 3px solid #667eea;
}

/* 基本问题样式 */
.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.problem-card {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 15px;
  padding: 2rem;
  border-left: 5px solid;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.problem-card.divergence {
  border-left-color: #e74c3c;
}

.problem-card.many-body {
  border-left-color: #3498db;
}

.problem-card.collective {
  border-left-color: #2ecc71;
}

.problem-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
}

.problem-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.problem-content h3 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.math-display {
  text-align: center;
  font-size: 1.1em;
  margin: 1rem 0;
  padding: 1rem;
  background: #f7fafc;
  border-radius: 8px;
}

.formula-note {
  font-style: italic;
  color: #4a5568;
  margin-top: 0.5rem;
}

.treatment-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
}

.treatment-item {
  background: rgba(231, 76, 60, 0.1);
  padding: 0.8rem;
  border-radius: 6px;
  border-left: 3px solid #e74c3c;
}

.regime-comparison {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.regime-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.regime-table th {
  background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.regime-table td {
  padding: 1rem;
  border-bottom: 1px solid #eee;
  vertical-align: top;
}

.regime-table tr:hover {
  background-color: #f8f9fa;
}

.mode-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.mode-card {
  background: rgba(46, 204, 113, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #2ecc71;
  text-align: center;
}

.mode-card h5 {
  color: #27ae60;
  margin-bottom: 1rem;
}

/* 屏蔽机制样式 */
.mechanism-overview {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.type-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.type-card {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 15px;
  padding: 2rem;
  border-left: 5px solid;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
}

.type-card.thomas-fermi {
  border-left-color: #ff6b6b;
}

.type-card.lindhard {
  border-left-color: #4ecdc4;
}

.type-card.dynamic {
  border-left-color: #45b7d1;
}

.type-card h4 {
  color: #2d3748;
  margin-bottom: 1.5rem;
}

/* 等离激元理论样式 */
.plasmon-basics {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.derivation-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;
}

.step-item {
  background: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #f39c12;
}

.step-item h5 {
  color: #e67e22;
  margin-bottom: 1rem;
}

.effect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.effect-card {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.effect-card h5 {
  color: #2d3748;
  margin-bottom: 1rem;
}

.surface-content {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.property-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-top: 1rem;
}

.property-item {
  background: rgba(255,255,255,0.8);
  padding: 1rem;
  border-radius: 8px;
  border-left: 3px solid #2196f3;
}

/* 总结样式 */
.summary {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  font-size: 1.8em;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.point-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
  flex-shrink: 0;
}

.point-content {
  flex: 1;
  font-size: 1.1em;
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .problem-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .type-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .mode-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .effect-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
  
  .point-number {
    align-self: center;
  }
}
</style>