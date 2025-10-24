<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3.4 精确解的物理性质</h1>
      <p class="chapter-subtitle">从数学解析到物理洞察</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解精确解揭示的基态性质</li>
        <li>掌握激发谱的物理意义</li>
        <li>学习关联函数的计算和物理解释</li>
        <li>理解量子相变的临界行为</li>
        <li>掌握有限温度性质的分析</li>
      </ul>
    </div>

    <div class="ground-state-properties">
      <h2>基态性质</h2>
      
      <div class="ground-state-overview">
        <h3>基态的量子性质</h3>
        <p>
          一维量子横场Ising模型的精确解揭示了丰富的基态性质。
          基态是所有准粒子处于真空态：
        </p>
        <div class="formula-container">
          $$|0\rangle: \quad \eta_k |0\rangle = 0 \quad \forall k$$</div>
        
        <div class="ground-state-features">
          <div class="feature-card">
            <h4>🌊 量子叠加</h4>
            <p>
              基态是所有可能自旋构型的量子叠加， 体现了量子涨落的重要作用。</p> <div class="formula-container">$$|0\rangle = \sum_{\{\sigma\}} \alpha_{\{\sigma\}} |\{\sigma\}\rangle$$</div>
          </div>
          
          <div class="feature-card">
            <h4>🔗 长程纠缠</h4>
            <p>
              即使在一维系统中，基态也包含
              长程的量子纠缠结构。
            </p>
          </div>
          
          <div class="feature-card">
            <h4>⚡ 能隙保护</h4>
            <p>
              基态与第一激发态之间存在有限能隙， 保护基态的量子性质。</p> <div class="formula-container">$$\Delta = \min_k E_k = \frac{h}{2}$$</div>
          </div>
        </div>
      </div>

      <div class="ground-state-energy">
        <h3>基态能量</h3>
        <p> 基态能量密度为：</p> <div class="formula-container">$$e_0 = -\frac{1}{4\pi} \int_0^{2\pi} dk \sqrt{4J^2\sin^4(k/2) + \frac{h^2}{4}}$$</div>
        
        <div class="energy-analysis">
          <div class="limit-analysis">
            <h4>极限情况分析</h4>
            
            <div class="limit-cases"><div class="limit-case"><h5>弱横场极限 ($h \ll J$)</h5><div class="formula-container">$$e_0 \approx -\frac{J}{2} - \frac{h^2}{16J} + O(h^4/J^3)$$</div>
                <p>
                  主要贡献来自Ising相互作用，
                  横场作为微扰修正。
                </p>
              </div><div class="limit-case"><h5>强横场极限 ($h \gg J$)</h5><div class="formula-container">$$e_0 \approx -\frac{h}{4} - \frac{J^2}{h} + O(J^4/h^3)$$</div>
                <p>
                  横场占主导，Ising项作为微扰。
                </p>
              </div><div class="limit-case"><h5>临界点 ($h = J$)</h5><div class="formula-container">$$e_0 = -\frac{J}{4\pi} \int_0^{2\pi} dk \sqrt{\sin^4(k/2) + \frac{1}{16}}$$</div>
                <p>
                  两种能量尺度相当，
                  表现出最丰富的物理现象。
                </p>
              </div>
            </div>
          </div>
          
          <div class="energy-derivatives">
            <h4>能量导数与物理量</h4>
            <p>
              通过对基态能量求导，可以得到各种物理量：
            </p>
            
            <div class="derivative-relations"> <div class="relation-card"><h5>磁化率</h5> <div class="formula-container">$$\chi = -\frac{\partial^2 e_0}{\partial h^2}$$</div>
                <p>反映系统对外场的响应</p>
              </div> <div class="relation-card"><h5>压缩率</h5> <div class="formula-container">$$\kappa = -\frac{\partial^2 e_0}{\partial J^2}$$</div>
                <p>反映系统对相互作用强度的敏感性</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="magnetization">
        <h3>磁化强度</h3>
        <p>
          系统的磁化强度分为纵向和横向两个分量：
        </p>
        
        <div class="magnetization-components"> <div class="magnetization-card"><h4>纵向磁化强度</h4> <div class="formula-container">$$m_z = \langle \sigma^z \rangle = \frac{1}{N}\sum_i \langle \sigma_i^z \rangle$$</div>
            <p> 通过Jordan-Wigner变换：</p> <div class="formula-container">$$\langle \sigma_i^z \rangle = 2\langle c_i^\dagger c_i \rangle - 1$$</div>
            <p>
              需要计算费米子占据数的期望值。
            </p>
            
            <div class="calculation-steps"> <div class="step"><h5>步骤1：费米子占据数</h5> <div class="formula-container">$$\langle c_i^\dagger c_i \rangle = \frac{1}{N}\sum_k \langle c_k^\dagger c_k \rangle$$</div>
              </div> <div class="step"><h5>步骤2：Bogoliubov变换</h5> <div class="formula-container">$$\langle c_k^\dagger c_k \rangle = v_k^2 = \frac{1}{2}\left(1 - \frac{\epsilon_k}{E_k}\right)$$</div>
              </div> <div class="step"><h5>步骤3：最终结果</h5> <div class="formula-container">$$m_z = \frac{1}{2\pi} \int_0^{2\pi} dk \left(1 - \frac{2J\sin^2(k/2)}{\sqrt{4J^2\sin^4(k/2) + h^2/4}}\right) - 1$$</div>
              </div>
            </div>
          </div> <div class="magnetization-card"><h4>横向磁化强度</h4> <div class="formula-container">$$m_x = \langle \sigma^x \rangle = \frac{1}{N}\sum_i \langle \sigma_i^x \rangle$$</div>
            <p>横向磁化强度的计算更加复杂，因为$\sigma^x$算符在Jordan-Wigner变换下
              变成非局域的算符。
            </p>
            
            <div class="transverse-analysis">
              <h5>物理意义</h5><ul><li>在弱横场区域：$m_x \approx 0$（自旋主要沿z方向）</li><li>在强横场区域：$m_x \approx 1$（自旋主要沿x方向）</li><li>在临界点附近：$m_x$表现出非解析行为</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="excitation-spectrum">
      <h2>激发谱性质</h2>
      
      <div class="spectrum-structure">
        <h3>准粒子激发谱</h3><p>系统的激发谱由准粒子能量$E_k$描述：
        </p><div class="formula-container">$$E_k = \sqrt{4J^2\sin^4(k/2) + \frac{h^2}{4}}$$</div>
        
        <div class="spectrum-features">
          <div class="feature-analysis">
            <h4>能谱的关键特征</h4>
            
            <div class="spectrum-properties">
              <div class="property-item">
                <h5>🎯 能隙结构</h5>
                <p> 系统总是有能隙的：</p> <div class="formula-container">$$\Delta = \min_k E_k = \frac{h}{2}$$</div><p>能隙在$k=0,2\pi$处达到最小值。
                </p>
              </div>
              
              <div class="property-item">
                <h5>📊 色散关系</h5>
                <p>
                  在小动量极限下：
                </p><div class="formula-container">$$E_k \approx \frac{h}{2} + \frac{J^2 k^2}{2h} + O(k^4)$$</div>
                <p>
                  表现出类似于相对论粒子的色散关系。
                </p>
              </div>
              
              <div class="property-item">
                <h5>🔄 周期性</h5>
                <p> 能谱具有布里渊区的周期性：</p> <div class="formula-container">$$E_{k+2\pi} = E_k$$</div>
                <p>
                  反映了晶格的离散性。
                </p>
              </div>
            </div>
          </div>
          
          <div class="velocity-analysis">
            <h4>群速度分析</h4>
            <p> 准粒子的群速度定义为：</p> <div class="formula-container">$$v_k = \frac{dE_k}{dk} = \frac{2J^2\sin^3(k/2)\cos(k/2)}{E_k}$$</div>
            
            <div class="velocity-properties">
              <div class="velocity-card">
                <h5>最大速度</h5><p>群速度在$k=\pi/2, 3\pi/2$附近达到最大值：
                </p><div class="formula-container">$$v_{\max} \approx \frac{J^2}{h/2} = \frac{2J^2}{h}$$</div>
                <p>
                  在强横场极限下，最大速度很小。
                </p>
              </div>
              
              <div class="velocity-card">
                <h5>声速</h5>
                <p> 在长波长极限下的声速：</p> <div class="formula-container">$$v_s = \lim_{k \to 0} \frac{dE_k}{dk} = \frac{J^2}{h/2} = \frac{2J^2}{h}$$</div>
                <p>
                  这是系统中信息传播的最大速度。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="density-of-states">
        <h3>态密度</h3>
        <p> 准粒子的态密度提供了关于激发谱结构的重要信息：</p> <div class="formula-container">$$\rho(E) = \frac{1}{2\pi} \int_0^{2\pi} dk \, \delta(E - E_k)$$</div>
        
        <div class="dos-analysis">
          <div class="dos-calculation">
            <h4>态密度的计算</h4><p>利用$\delta$函数的性质：
            </p><div class="formula-container">$$\rho(E) = \frac{1}{2\pi} \sum_{k: E_k = E} \frac{1}{|dE_k/dk|}$$</div>
            
            <div class="dos-regions"><div class="dos-region"><h5>能隙边缘 ($E \approx h/2$)</h5>
                <p>
                  在能隙边缘附近，态密度表现出奇异行为：
                </p><div class="formula-container">$$\rho(E) \sim \frac{1}{\sqrt{E - h/2}} \quad (E \to h/2^+)$$</div><p>这种$1/\sqrt{E}$的奇异性是一维系统的特征。
                </p>
              </div><div class="dos-region"><h5>高能区域 ($E \gg h/2, J$)</h5>
                <p>
                  在高能区域，态密度趋于常数：
                </p><div class="formula-container">$$\rho(E) \approx \frac{1}{\pi J} \quad (E \gg J, h)$$</div>
              </div>
            </div>
          </div>
          
          <div class="dos-applications">
            <h4>态密度的应用</h4>
            <ul>
              <li><strong>热力学性质</strong>：比热、熵等的计算</li>
              <li><strong>输运性质</strong>：电导率、热导率的分析</li>
              <li><strong>光谱性质</strong>：吸收谱、发射谱的理解</li>
              <li><strong>相变分析</strong>：临界指数的确定</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="correlation-functions">
      <h2>关联函数</h2>
      
      <div class="correlation-overview">
        <h3>关联函数的重要性</h3>
        <p>
          关联函数描述了系统中不同位置自旋之间的量子关联，
          是理解量子多体系统的关键工具。
        </p>
        
        <div class="correlation-types"> <div class="correlation-card"><h4>纵向关联函数</h4> <div class="formula-container">$$G^{zz}(r) = \langle \sigma_0^z \sigma_r^z \rangle - \langle \sigma_0^z \rangle^2$$</div>
            <p>描述纵向自旋涨落的空间关联</p>
          </div> <div class="correlation-card"><h4>横向关联函数</h4> <div class="formula-container">$$G^{xx}(r) = \langle \sigma_0^x \sigma_r^x \rangle - \langle \sigma_0^x \rangle^2$$</div>
            <p>描述横向自旋涨落的空间关联</p>
          </div> <div class="correlation-card"><h4>混合关联函数</h4> <div class="formula-container">$$G^{xz}(r) = \langle \sigma_0^x \sigma_r^z \rangle - \langle \sigma_0^x \rangle \langle \sigma_r^z \rangle$$</div>
            <p>描述不同方向自旋之间的关联</p>
          </div>
        </div>
      </div>

      <div class="longitudinal-correlation">
        <h3>纵向关联函数的计算</h3>
        <p>
          纵向关联函数可以通过Jordan-Wigner变换和Wick定理计算：
        </p>
        
        <div class="calculation-procedure"> <div class="procedure-step"><h4>步骤1：Jordan-Wigner表示</h4> <div class="formula-container">$$\sigma_i^z = 2c_i^\dagger c_i - 1$$</div>
            <p> 因此：</p> <div class="formula-container">$$\langle \sigma_0^z \sigma_r^z \rangle = 4\langle c_0^\dagger c_0 c_r^\dagger c_r \rangle - 2\langle c_0^\dagger c_0 \rangle - 2\langle c_r^\dagger c_r \rangle + 1$$</div>
          </div>
          
          <div class="procedure-step">
            <h4>步骤2：Wick定理</h4>
            <p> 对于费米子系统，四算符期望值可以分解为：</p> <div class="formula-container">$$\langle c_0^\dagger c_0 c_r^\dagger c_r \rangle = \langle c_0^\dagger c_0 \rangle \langle c_r^\dagger c_r \rangle - \langle c_0^\dagger c_r \rangle \langle c_r^\dagger c_0 \rangle$$</div>
          </div>
          
          <div class="procedure-step">
            <h4>步骤3：Fourier变换</h4>
            <p> 将实空间算符变换到动量空间：</p> <div class="formula-container">$$\langle c_0^\dagger c_r \rangle = \frac{1}{N}\sum_k e^{ikr} \langle c_k^\dagger c_k \rangle$$</div>
          </div>
          
          <div class="procedure-step">
            <h4>步骤4：Bogoliubov变换</h4>
            <p> 利用基态中的准粒子占据：</p> <div class="formula-container">$$\langle c_k^\dagger c_k \rangle = v_k^2 = \frac{1}{2}\left(1 - \frac{\epsilon_k}{E_k}\right)$$</div>
          </div>
        </div>
        
        <div class="correlation-result">
          <h4>最终结果</h4>
          <p> 纵向关联函数的最终表达式为：</p> <div class="formula-container">$$G^{zz}(r) = \left(\frac{1}{2\pi} \int_0^{2\pi} dk \, e^{ikr} \frac{\epsilon_k}{E_k}\right)^2$$</div>
          
          <div class="asymptotic-behavior">
            <h5>渐近行为</h5>
            <p> 在大距离极限下，关联函数表现出指数衰减：</p> <div class="formula-container">$$G^{zz}(r) \sim e^{-r/\xi} \quad (r \to \infty)$$</div>
            <p> 其中关联长度为：</p> <div class="formula-container">$$\xi = \frac{1}{\Delta} = \frac{2}{h}$$</div>
          </div>
        </div>
      </div>

      <div class="correlation-length">
        <h3>关联长度分析</h3>
        <p>
          关联长度是描述量子关联衰减的特征长度尺度：
        </p>
        
        <div class="correlation-length-analysis">
          <div class="length-properties">
            <h4>关联长度的性质</h4>
            
            <div class="property-grid"> <div class="property-box"><h5>🎯 能隙关系</h5> <div class="formula-container">$$\xi = \frac{1}{\Delta}$$</div>
                <p>关联长度与能隙成反比</p>
              </div> <div class="property-box"><h5>📏 长度尺度</h5> <div class="formula-container">$$\xi = \frac{2}{h}$$</div>
                <p>在弱横场时关联长度很大</p>
              </div>
              
              <div class="property-box">
                <h5>🌡️ 温度依赖</h5>
                <p>
                  在有限温度下，关联长度会发生变化，
                  但在低温时仍由能隙决定。
                </p>
              </div>
            </div>
          </div>
          
          <div class="physical-interpretation">
            <h4>物理解释</h4>
            <ul>
              <li><strong>量子涨落范围</strong>：关联长度决定了量子涨落的空间范围</li>
              <li><strong>信息传播</strong>：局域扰动影响的空间尺度</li>
              <li><strong>纠缠结构</strong>：量子纠缠的典型长度尺度</li>
              <li><strong>临界现象</strong>：接近相变点时关联长度发散</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="quantum-phase-transition">
      <h2>量子相变</h2>
      
      <div class="phase-transition-overview">
        <h3>量子相变的特征</h3>
        <p>
          一维量子横场Ising模型展示了量子相变的典型特征，
          虽然在严格意义上一维系统在有限温度下不存在相变。
        </p>
        
        <div class="transition-characteristics">
          <div class="characteristic-card">
            <h4>🌡️ 零温相变</h4>
            <p>
              相变发生在绝对零度，
              由量子涨落而非热涨落驱动。
            </p>
          </div>
          
          <div class="characteristic-card">
            <h4>🎛️ 调控参数</h4><p>通过改变横场强度$h$与交换耦合$J$的比值
              来调控量子相变。
            </p>
          </div>
          
          <div class="characteristic-card">
            <h4>📊 连续相变</h4>
            <p>
              系统表现出连续的量子相变，
              物理量在临界点附近表现出幂律行为。
            </p>
          </div>
        </div>
      </div>

      <div class="critical-behavior">
        <h3>临界行为分析</h3><p>在临界点$h_c = J$附近，系统表现出丰富的临界现象：
        </p>
        
        <div class="critical-properties">
          <div class="critical-exponents">
            <h4>临界指数</h4>
            <p>
              各种物理量在临界点附近的行为可以用临界指数描述：
            </p>
            
            <div class="exponent-list">
              <div class="exponent-item">
                <h5>能隙临界指数</h5><div class="formula-container">$$\Delta \sim |h - h_c|^z\nu$$</div><p>其中$z = 1$（动力学指数），$\nu = 1$（关联长度指数）</p>
              </div>
              
              <div class="exponent-item">
                <h5>关联长度指数</h5><div class="formula-container">$$\xi \sim |h - h_c|^{-\nu}$$</div><p>$\nu = 1$，关联长度在临界点发散</p>
              </div>
              
              <div class="exponent-item">
                <h5>磁化率指数</h5><div class="formula-container">$$\chi \sim |h - h_c|^{-\gamma}$$</div><p>$\gamma = 1$，磁化率在临界点发散</p>
              </div>
            </div>
          </div>
          
          <div class="universality-class">
            <h4>普适类</h4>
            <p>
              一维量子横场Ising模型属于二维经典Ising模型的普适类，
              这是量子-经典对应关系的一个重要例子。
            </p>
            
            <div class="universality-features">
              <div class="feature-item">
                <h5>🔄 量子-经典对应</h5><p>$(d+1)$维量子系统对应于$(d+1)$维经典系统，
                  其中额外的维度是虚时间。
                </p>
              </div>
              
              <div class="feature-item">
                <h5>📏 临界指数</h5>
                <p>临界指数与二维经典Ising模型相同：$\nu = 1$, $\gamma = 7/4$, $\beta = 1/8$等。
                </p>
              </div>
              
              <div class="feature-item">
                <h5>🎯 共形不变性</h5>
                <p>
                  临界点具有共形不变性，
                  可以用共形场论描述。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="scaling-theory">
        <h3>标度理论</h3>
        <p>
          临界点附近的物理量遵循标度律：
        </p>
        
        <div class="scaling-relations">
          <div class="scaling-form">
            <h4>标度形式</h4>
            <p>
              物理量的标度形式为：
            </p><div class="formula-container">$$f(h, T, L) = L^{-d} F\left(\frac{h - h_c}{L^{-1/\nu}}, \frac{T}{L^{-z}}\right)$$</div><p>其中$L$是系统尺寸，$F$是标度函数。
            </p>
          </div>
          
          <div class="finite-size-scaling">
            <h4>有限尺寸标度</h4>
            <p>
              在有限系统中，临界行为会被系统尺寸修正：
            </p><div class="formula-container">$$\xi_{\text{finite}} = \min(\xi_{\text{bulk}}, L)$$</div>
            <p>
              这导致了有限尺寸标度行为。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="finite-temperature">
      <h2>有限温度性质</h2>
      
      <div class="thermal-properties">
        <h3>热力学量</h3>
        <p>
          在有限温度下，系统的热力学性质由准粒子的费米-狄拉克分布决定：
        </p>
        
        <div class="thermodynamic-calculations"> <div class="free-energy"><h4>自由能</h4> <div class="formula-container">$$F = E_{\text{ground}} - k_B T \sum_k \ln(1 + e^{-\beta E_k})$$</div><p>其中$\beta = 1/(k_B T)$是逆温度。
            </p>
          </div>
          
          <div class="specific-heat">
            <h4>比热</h4><div class="formula-container">$$C = k_B \beta^2 \sum_k E_k^2 \frac{e^{-\beta E_k}}{(1 + e^{-\beta E_k})^2}$$</div>
            
            <div class="temperature-regimes"><div class="regime-card"><h5>低温区域 ($k_B T \ll \Delta$)</h5><div class="formula-container">$$C \sim e^{-\Delta/k_B T}$$</div>
                <p>指数激活行为，反映能隙的存在</p>
              </div><div class="regime-card"><h5>高温区域 ($k_B T \gg J, h$)</h5><div class="formula-container">$$C \sim \frac{1}{T^2}$$</div>
                <p>经典高温行为</p>
              </div>
            </div>
          </div> <div class="entropy"><h4>熵</h4> <div class="formula-container">$$S = -k_B \sum_k [n_k \ln n_k + (1-n_k) \ln(1-n_k)]$$</div><p>其中$n_k = 1/(1 + e^{\beta E_k})$是费米分布函数。
            </p>
          </div>
        </div>
      </div>

      <div class="crossover-behavior">
        <h3>交叉行为</h3>
        <p>
          在不同温度和参数区域，系统表现出不同的交叉行为：
        </p>
        
        <div class="crossover-types">
          <div class="crossover-card">
            <h4>量子-经典交叉</h4><p>当$k_B T \sim \Delta$时，系统从量子区域交叉到经典区域。
            </p><div class="formula-container">$$T^* \sim \frac{\Delta}{k_B} = \frac{h}{2k_B}$$</div>
          </div>
          
          <div class="crossover-card">
            <h4>临界交叉</h4>
            <p>
              在临界点附近，不同的能量尺度竞争，
              导致复杂的交叉现象。
            </p>
          </div>
          
          <div class="crossover-card">
            <h4>有限尺寸交叉</h4>
            <p>
              当关联长度与系统尺寸相当时， 出现有限尺寸交叉。</p> <div class="formula-container">$$L^* \sim \xi \sim \frac{1}{\Delta}$$
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="experimental-connections">
      <h2>实验联系</h2>
      
      <div class="experimental-realizations">
        <h3>实验实现</h3>
        <p>
          一维量子横场Ising模型可以在多种实验系统中实现：
        </p>
        
        <div class="realization-examples">
          <div class="example-card">
            <h4>🧲 磁性材料</h4>
            <ul>
              <li>CoNb₂O₆：准一维磁性链</li>
              <li>LiHoF₄：横场中的稀土磁体</li>
              <li>BaCo₂V₂O₈：自旋链化合物</li>
            </ul>
          </div>
          
          <div class="example-card">
            <h4>❄️ 冷原子系统</h4>
            <ul>
              <li>光晶格中的超冷原子</li>
              <li>Rydberg原子链</li>
              <li>离子阱量子模拟器</li>
            </ul>
          </div>
          
          <div class="example-card">
            <h4>💎 固体系统</h4>
            <ul>
              <li>量子点链</li>
              <li>超导量子比特</li>
              <li>拓扑超导体边界态</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="measurable-quantities">
        <h3>可测量的物理量</h3>
        <p>
          理论预测的物理量可以通过各种实验技术测量：
        </p>
        
        <div class="measurement-techniques">
          <div class="technique-card">
            <h4>🌡️ 热力学测量</h4>
            <ul>
              <li>比热测量：验证能隙和激发谱</li>
              <li>磁化率测量：研究磁响应</li>
              <li>熵测量：理解量子涨落</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>🔬 谱学技术</h4>
            <ul>
              <li>中子散射：测量动力学结构因子</li>
              <li>ESR/NMR：研究局域磁性质</li>
              <li>拉曼散射：探测激发模式</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>⚡ 输运测量</h4>
            <ul>
              <li>电导率：研究载流子输运</li>
              <li>热导率：理解能量输运</li>
              <li>霍尔效应：探测拓扑性质</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          本节深入分析了一维量子横场Ising模型精确解的物理性质：
        </p>
        <ul>
          <li><strong>基态性质</strong>：量子叠加、长程纠缠、能隙保护</li>
          <li><strong>激发谱</strong>：准粒子能谱、态密度、群速度</li>
          <li><strong>关联函数</strong>：空间关联、关联长度、衰减行为</li>
          <li><strong>量子相变</strong>：临界行为、普适类、标度理论</li>
          <li><strong>有限温度</strong>：热力学性质、交叉行为</li>
          <li><strong>实验联系</strong>：实际材料、测量技术</li>
        </ul>
        <p>
          这些丰富的物理性质展示了精确解在理解
          量子多体系统中的巨大价值。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 基态能量计算</h4>
          <p>计算不同参数区域的基态能量密度，分析其物理意义。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 关联函数推导</h4>
          <p>详细推导纵向自旋关联函数的表达式和渐近行为。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 临界指数分析</h4>
          <p>分析临界点附近各物理量的标度行为，确定临界指数。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 有限温度性质</h4>
          <p>计算比热的温度依赖性，分析不同温度区域的行为。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 渲染数学公式
  if (window.MathJax) {
    window.MathJax.typesetPromise()
  }
})
</script>

<style scoped>
.chapter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.learning-objectives {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.learning-objectives h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.learning-objectives ul {
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.learning-objectives li::before {
  content: "🎯";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.ground-state-properties, .excitation-spectrum, .correlation-functions,
.quantum-phase-transition, .finite-temperature, .experimental-connections,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.ground-state-properties h2, .excitation-spectrum h2, .correlation-functions h2,
.quantum-phase-transition h2, .finite-temperature h2, .experimental-connections h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.ground-state-overview, .ground-state-energy, .magnetization, .spectrum-structure,
.density-of-states, .correlation-overview, .longitudinal-correlation,
.correlation-length, .phase-transition-overview, .critical-behavior,
.scaling-theory, .thermal-properties, .crossover-behavior,
.experimental-realizations, .measurable-quantities, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.ground-state-features, .energy-analysis, .magnetization-components,
.spectrum-features, .dos-analysis, .correlation-types, .calculation-procedure,
.correlation-length-analysis, .transition-characteristics, .critical-properties,
.scaling-relations, .thermodynamic-calculations, .crossover-types,
.realization-examples, .measurement-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.feature-card, .limit-case, .derivative-relations .relation-card,
.magnetization-card, .property-item, .velocity-card, .dos-region,
.correlation-card, .procedure-step, .property-box, .characteristic-card,
.exponent-item, .feature-item, .regime-card, .crossover-card,
.example-card, .technique-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.feature-card h4, .limit-case h5, .relation-card h5, .magnetization-card h4,
.property-item h5, .velocity-card h5, .dos-region h5, .correlation-card h4,
.procedure-step h4, .property-box h5, .characteristic-card h4,
.exponent-item h5, .feature-item h5, .regime-card h5, .crossover-card h4,
.example-card h4, .technique-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.limit-analysis, .energy-derivatives, .spectrum-properties, .velocity-analysis,
.dos-calculation, .dos-applications, .calculation-result, .length-properties,
.physical-interpretation, .universality-class, .finite-size-scaling,
.free-energy, .specific-heat, .entropy {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.limit-cases, .derivative-relations, .spectrum-properties .property-grid,
.velocity-properties, .critical-points, .temperature-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.calculation-steps, .asymptotic-behavior, .transverse-analysis,
.dos-applications, .correlation-result, .universality-features,
.exponent-list {
  margin: 1rem 0;
}

.step {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  border: 1px solid #e1e8ff;
}

.step h5 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.formula-container {
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e1e8ff;
}

.exercise-list {
  display: grid;
  gap: 1rem;
}

.exercise-item {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.exercise-item h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-container {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .ground-state-features, .energy-analysis, .magnetization-components,
  .spectrum-features, .dos-analysis, .correlation-types, .calculation-procedure,
  .correlation-length-analysis, .transition-characteristics, .critical-properties,
  .scaling-relations, .thermodynamic-calculations, .crossover-types,
  .realization-examples, .measurement-techniques {
    grid-template-columns: 1fr;
  }
  
  .limit-cases, .derivative-relations, .spectrum-properties .property-grid,
  .velocity-properties, .critical-points, .temperature-regimes {
    grid-template-columns: 1fr;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .formula-container {
    font-size: 0.8em;
    padding: 0.6rem;
  }
}
</style>