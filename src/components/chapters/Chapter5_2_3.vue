<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2.3 Ginzburg-Landau理论：非均匀序参量</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">非均匀系统</span>
        <span class="reading-time">阅读时间：35分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Ginzburg-Landau理论是Landau理论的重要扩展，它考虑了序参量的空间变化，
        能够描述界面、畴壁、涡旋等非均匀结构。这一理论不仅在超导体研究中发挥了关键作用，
        也为理解各种相变中的空间结构提供了强有力的工具。
      </p>
    </div>

    <div class="content-section">
      <h2>Ginzburg-Landau泛函</h2>
      
      <div class="gl-functional-framework">
        <div class="functional-construction">
          <h3>🏗️ 泛函的构造</h3>
          <div class="construction-content">
            <p class="construction-intro">
              Ginzburg-Landau泛函通过在Landau自由能中加入梯度项来描述序参量的空间变化，
              这一扩展使理论能够处理非均匀的相变现象。
            </p>
            
            <div class="functional-form">
              <div class="form-card">
                <h4>基本泛函形式</h4>
                <div class="form-content">
                  <p><strong>完整的GL泛函：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="F[\psi] = \int d^d r \left[ \frac{1}{2}K|\nabla\psi|^2 + \frac{1}{2}a|\psi|^2 + \frac{1}{4}b|\psi|^4 + \cdots \right]" :inline="false" />
                  </div>
                  
                  <p><strong>各项的物理意义：</strong></p>
                  <ul>
                    <li><strong>梯度项：</strong><katex-element expression="\frac{1}{2}K|\nabla\psi|^2" :inline="true" /> - 空间变化的代价</li>
                    <li><strong>局域项：</strong><katex-element expression="\frac{1}{2}a|\psi|^2" :inline="true" /> - 温度依赖的线性项</li>
                    <li><strong>非线性项：</strong><katex-element expression="\frac{1}{4}b|\psi|^4" :inline="true" /> - 稳定化项</li>
                  </ul>
                  
                  <p><strong>梯度系数的意义：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="K > 0 \quad \text{(空间变化需要能量代价)}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="form-card">
                <h4>复序参量情况</h4>
                <div class="form-content">
                  <p><strong>复数序参量：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(\vec{r}) = |\psi(\vec{r})| e^{i\phi(\vec{r})}" :inline="false" />
                  </div>
                  
                  <p><strong>梯度项展开：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="|\nabla\psi|^2 = |\nabla|\psi||^2 + |\psi|^2|\nabla\phi|^2" :inline="false" />
                  </div>
                  
                  <p><strong>物理解释：</strong></p>
                  <ul>
                    <li>振幅变化：<katex-element expression="|\nabla|\psi||^2" :inline="true" /></li>
                    <li>相位变化：<katex-element expression="|\psi|^2|\nabla\phi|^2" :inline="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="euler-lagrange">
          <h3>⚖️ Euler-Lagrange方程</h3>
          <div class="equation-content">
            <p><strong>变分原理：</strong></p>
            <div class="formula-block">
              <katex-element expression="\frac{\delta F}{\delta \psi^*} = 0" :inline="false" />
            </div>
            
            <p><strong>GL方程：</strong></p>
            <div class="formula-block">
              <katex-element expression="-K\nabla^2\psi + a\psi + b|\psi|^2\psi = 0" :inline="false" />
            </div>
            
            <div class="equation-analysis">
              <div class="analysis-card">
                <h4>方程的结构</h4>
                <div class="analysis-content">
                  <p><strong>非线性薛定谔方程：</strong></p>
                  <ul>
                    <li>扩散项：<katex-element expression="-K\nabla^2\psi" :inline="true" /></li>
                    <li>线性项：<katex-element expression="a\psi" :inline="true" /></li>
                    <li>非线性项：<katex-element expression="b|\psi|^2\psi" :inline="true" /></li>
                  </ul>
                  
                  <p><strong>边界条件：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\vec{n} \cdot \nabla\psi|_{\text{边界}} = 0" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="analysis-card">
                <h4>特征长度尺度</h4>
                <div class="analysis-content">
                  <p><strong>相干长度：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\xi = \sqrt{\frac{K}{|a|}} \quad (T \neq T_c)" :inline="false" />
                  </div>
                  
                  <p><strong>临界点附近：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\xi \sim |T-T_c|^{-1/2} \sim |T-T_c|^{-\nu}" :inline="false" />
                  </div>
                  
                  <p><strong>物理意义：</strong></p>
                  <ul>
                    <li>序参量变化的特征尺度</li>
                    <li>在临界点发散</li>
                    <li>决定界面厚度</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>一维解：畴壁和界面</h2>
      
      <div class="domain-wall-analysis">
        <div class="wall-solutions">
          <h3>🧱 畴壁解</h3>
          <div class="solutions-content">
            <p class="solutions-intro">
              一维情况下的GL方程有精确的孤子解，描述了连接两个不同相的界面结构。
            </p>
            
            <div class="wall-structure">
              <div class="structure-card">
                <h4>双稳态势能</h4>
                <div class="structure-content">
                  <p><strong>有效势能：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="V(\psi) = \frac{1}{2}a\psi^2 + \frac{1}{4}b\psi^4" :inline="false" />
                  </div>
                  
                  <p><strong>T < T_c 时的双井势：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="a < 0, \quad b > 0" :inline="false" />
                  </div>
                  
                  <p><strong>平衡态：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi_{\pm} = \pm\sqrt{\frac{|a|}{b}}" :inline="false" />
                  </div>
                  
                  <div class="potential-visualization">
                    <p><strong>势能形状：</strong></p>
                    <ul>
                      <li>两个等价的最小值点</li>
                      <li>中心处的势垒</li>
                      <li>对称的双井结构</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div class="structure-card">
                <h4>孤子解</h4>
                <div class="structure-content">
                  <p><strong>一维GL方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="-K\frac{d^2\psi}{dx^2} + a\psi + b\psi^3 = 0" :inline="false" />
                  </div>
                  
                  <p><strong>首次积分：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\frac{1}{2}K\left(\frac{d\psi}{dx}\right)^2 = \frac{1}{2}a\psi^2 + \frac{1}{4}b\psi^4 + C" :inline="false" />
                  </div>
                  
                  <p><strong>边界条件确定常数：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(\pm\infty) = \pm\sqrt{\frac{|a|}{b}} \Rightarrow C = 0" :inline="false" />
                  </div>
                  
                  <p><strong>精确解：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(x) = \sqrt{\frac{|a|}{b}} \tanh\left(\frac{x}{\sqrt{2}\xi}\right)" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="wall-properties">
          <h3>📏 畴壁的性质</h3>
          <div class="properties-content">
            <div class="property-analysis">
              <div class="property-card">
                <h4>几何性质</h4>
                <div class="property-content">
                  <p><strong>畴壁厚度：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="w \sim \xi = \sqrt{\frac{K}{|a|}}" :inline="false" />
                  </div>
                  
                  <p><strong>序参量剖面：</strong></p>
                  <ul>
                    <li>中心处：<katex-element expression="\psi(0) = 0" :inline="true" /></li>
                    <li>远场：<katex-element expression="\psi(\pm\infty) = \pm\psi_0" :inline="true" /></li>
                    <li>单调变化</li>
                  </ul>
                  
                  <p><strong>梯度最大值：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\left|\frac{d\psi}{dx}\right|_{\max} = \frac{\psi_0}{\sqrt{2}\xi}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="property-card">
                <h4>能量性质</h4>
                <div class="property-content">
                  <p><strong>表面张力：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\sigma = \int_{-\infty}^{\infty} dx \left[ \frac{1}{2}K\left(\frac{d\psi}{dx}\right)^2 \right]" :inline="false" />
                  </div>
                  
                  <p><strong>计算结果：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\sigma = \frac{2\sqrt{2}}{3} \frac{|a|^{3/2}}{\sqrt{Kb}}" :inline="false" />
                  </div>
                  
                  <p><strong>温度依赖性：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\sigma \sim |T-T_c|^{3/2}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="property-card">
                <h4>动力学性质</h4>
                <div class="property-content">
                  <p><strong>时间依赖GL方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\frac{\partial \psi}{\partial t} = -\Gamma \frac{\delta F}{\delta \psi}" :inline="false" />
                  </div>
                  
                  <p><strong>畴壁运动：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="v = \Gamma \sigma \kappa" :inline="false" />
                  </div>
                  
                  <p>其中 κ 是畴壁的曲率。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>二维解：涡旋和反涡旋</h2>
      
      <div class="vortex-analysis">
        <div class="vortex-structure">
          <h3>🌀 涡旋解的构造</h3>
          <div class="structure-content">
            <p class="structure-intro">
              在二维系统中，复序参量可以形成拓扑稳定的涡旋结构，
              这些结构在超导体、超流体等系统中具有重要意义。
            </p>
            
            <div class="vortex-construction">
              <div class="construction-card">
                <h4>拓扑约束</h4>
                <div class="construction-content">
                  <p><strong>相位绕数：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="n = \frac{1}{2\pi} \oint_C d\phi = \frac{1}{2\pi} \oint_C \frac{\nabla\phi \cdot d\vec{l}}{|\nabla\phi|}" :inline="false" />
                  </div>
                  
                  <p><strong>拓扑稳定性：</strong></p>
                  <ul>
                    <li>绕数 n 是拓扑不变量</li>
                    <li>不能通过连续变形消除</li>
                    <li>涡旋-反涡旋对可以湮灭</li>
                  </ul>
                  
                  <p><strong>单涡旋解：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(r,\theta) = f(r) e^{in\theta}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="construction-card">
                <h4>径向方程</h4>
                <div class="construction-content">
                  <p><strong>柱坐标下的GL方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="-K\left(\frac{d^2f}{dr^2} + \frac{1}{r}\frac{df}{dr} - \frac{n^2}{r^2}f\right) + af + bf^3 = 0" :inline="false" />
                  </div>
                  
                  <p><strong>边界条件：</strong></p>
                  <ul>
                    <li>原点：<katex-element expression="f(0) = 0" :inline="true" /> (n ≠ 0)</li>
                    <li>无穷远：<katex-element expression="f(\infty) = \sqrt{|a|/b}" :inline="true" /></li>
                  </ul>
                  
                  <p><strong>渐近行为：</strong></p>
                  <div class="asymptotic-behavior">
                    <div class="behavior-item">
                      <span>r → 0:</span>
                      <span><katex-element expression="f(r) \sim r^{|n|}" :inline="true" /></span>
                    </div>
                    <div class="behavior-item">
                      <span>r → ∞:</span>
                      <span><katex-element expression="f(r) \sim \sqrt{|a|/b} \left(1 - \frac{C}{r^{|n|}} e^{-r/\xi}\right)" :inline="true" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="vortex-properties">
          <h3>🎯 涡旋的性质</h3>
          <div class="properties-framework">
            <div class="property-categories">
              <div class="category-card energy">
                <h4>能量性质</h4>
                <div class="category-content">
                  <p><strong>涡旋能量：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="E_{\text{vortex}} = \int d^2r \left[ \frac{1}{2}K|\nabla\psi|^2 + V(|\psi|) \right]" :inline="false" />
                  </div>
                  
                  <p><strong>对数发散：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="E \sim K n^2 |\psi_0|^2 \ln(L/\xi)" :inline="false" />
                  </div>
                  
                  <p><strong>核心能量：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="E_{\text{core}} \sim K |\psi_0|^2 \xi^2" :inline="false" />
                  </div>
                  
                  <p>其中 L 是系统尺寸，ξ 是相干长度。</p>
                </div>
              </div>
              
              <div class="category-card interaction">
                <h4>涡旋相互作用</h4>
                <div class="category-content">
                  <p><strong>涡旋对相互作用：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="E_{\text{int}} = 2\pi K |\psi_0|^2 n_1 n_2 \ln(r_{12}/\xi)" :inline="false" />
                  </div>
                  
                  <p><strong>相互作用特点：</strong></p>
                  <ul>
                    <li>同号涡旋：排斥</li>
                    <li>异号涡旋：吸引</li>
                    <li>对数型长程相互作用</li>
                  </ul>
                  
                  <p><strong>BKT相变：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="T_{BKT} = \frac{\pi K |\psi_0|^2}{2k_B}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="category-card dynamics">
                <h4>涡旋动力学</h4>
                <div class="category-content">
                  <p><strong>涡旋运动方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\vec{v}_i = \sum_{j \neq i} \frac{2\pi K n_j}{m} \hat{z} \times \frac{\vec{r}_{ij}}{r_{ij}^2}" :inline="false" />
                  </div>
                  
                  <p><strong>哈密顿动力学：</strong></p>
                  <ul>
                    <li>涡旋位置作为正则坐标</li>
                    <li>辛结构的动力学</li>
                    <li>守恒的拓扑荷</li>
                  </ul>
                  
                  <p><strong>耗散效应：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\eta \vec{v}_i = \vec{F}_i" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>超导体中的应用</h2>
      
      <div class="superconductor-applications">
        <div class="gl-superconductivity">
          <h3>⚡ Ginzburg-Landau超导理论</h3>
          <div class="superconductivity-content">
            <p class="superconductivity-intro">
              GL理论在超导体研究中取得了巨大成功，不仅解释了超导体的基本性质，
              还预测了许多重要现象，如混合态、磁通量子化等。
            </p>
            
            <div class="gl-superconductor">
              <div class="superconductor-card">
                <h4>GL超导方程</h4>
                <div class="superconductor-content">
                  <p><strong>含电磁场的GL方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\frac{1}{2m^*}|(-i\hbar\nabla - e^*\vec{A})\psi|^2 + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 = 0" :inline="false" />
                  </div>
                  
                  <p><strong>Maxwell方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\nabla \times \vec{B} = \mu_0 \vec{J}_s = \frac{\mu_0 e^*}{m^*} |\psi|^2 (\hbar\nabla\phi - e^*\vec{A})" :inline="false" />
                  </div>
                  
                  <p><strong>参数意义：</strong></p>
                  <ul>
                    <li><katex-element expression="m^* = 2m_e" :inline="true" /> - Cooper对质量</li>
                    <li><katex-element expression="e^* = 2e" :inline="true" /> - Cooper对电荷</li>
                    <li><katex-element expression="\psi" :inline="true" /> - 超导序参量</li>
                  </ul>
                </div>
              </div>
              
              <div class="superconductor-card">
                <h4>特征长度</h4>
                <div class="superconductor-content">
                  <p><strong>相干长度：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\xi = \sqrt{\frac{\hbar^2}{2m^*|\alpha|}}" :inline="false" />
                  </div>
                  
                  <p><strong>穿透深度：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\lambda = \sqrt{\frac{m^*}{\mu_0 (e^*)^2 |\psi_0|^2}}" :inline="false" />
                  </div>
                  
                  <p><strong>GL参数：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\kappa = \frac{\lambda}{\xi}" :inline="false" />
                  </div>
                  
                  <div class="superconductor-types">
                    <div class="type-item">
                      <span>第一类超导体:</span>
                      <span>κ < 1/√2</span>
                    </div>
                    <div class="type-item">
                      <span>第二类超导体:</span>
                      <span>κ > 1/√2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="flux-quantization">
          <h3>🔄 磁通量子化</h3>
          <div class="quantization-content">
            <div class="quantization-analysis">
              <div class="analysis-card">
                <h4>拓扑起源</h4>
                <div class="analysis-content">
                  <p><strong>单值性条件：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(\vec{r} + \vec{L}) = \psi(\vec{r})" :inline="false" />
                  </div>
                  
                  <p><strong>相位变化：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\oint_C \nabla\phi \cdot d\vec{l} = 2\pi n" :inline="false" />
                  </div>
                  
                  <p><strong>规范不变性：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\oint_C (\hbar\nabla\phi - e^*\vec{A}) \cdot d\vec{l} = 2\pi n \hbar" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="analysis-card">
                <h4>磁通量子</h4>
                <div class="analysis-content">
                  <p><strong>Stokes定理：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\oint_C \vec{A} \cdot d\vec{l} = \int_S \vec{B} \cdot d\vec{S} = \Phi" :inline="false" />
                  </div>
                  
                  <p><strong>量子化条件：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\Phi = n \Phi_0 = n \frac{h}{2e}" :inline="false" />
                  </div>
                  
                  <p><strong>磁通量子：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\Phi_0 = \frac{h}{2e} = 2.07 \times 10^{-15} \text{ Wb}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="abrikosov-lattice">
          <h3>🔷 Abrikosov磁通格子</h3>
          <div class="lattice-content">
            <div class="lattice-structure">
              <div class="structure-analysis">
                <h4>混合态结构</h4>
                <div class="structure-content">
                  <p><strong>第二类超导体中的磁通线：</strong></p>
                  <ul>
                    <li>每根磁通线携带一个磁通量子</li>
                    <li>磁通线之间相互排斥</li>
                    <li>形成三角格子结构</li>
                  </ul>
                  
                  <p><strong>磁通线密度：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="n_v = \frac{B}{\Phi_0}" :inline="false" />
                  </div>
                  
                  <p><strong>格子常数：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="a = \sqrt{\frac{2\Phi_0}{\sqrt{3}B}}" :inline="false" />
                  </div>
                </div>
              </div>
              
              <div class="structure-analysis">
                <h4>能量最小化</h4>
                <div class="structure-content">
                  <p><strong>磁通线相互作用：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="E_{\text{int}} \sim \frac{\Phi_0^2}{4\pi\mu_0\lambda^2} K_0\left(\frac{r}{\lambda}\right)" :inline="false" />
                  </div>
                  
                  <p><strong>弹性能：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="E_{\text{elastic}} = \frac{1}{2} \int d^2r \left[ c_{11}(\nabla \cdot \vec{u})^2 + c_{44}(\nabla \times \vec{u})^2 \right]" :inline="false" />
                  </div>
                  
                  <p><strong>弹性常数：</strong></p>
                  <ul>
                    <li>压缩模量：<katex-element expression="c_{11}" :inline="true" /></li>
                    <li>剪切模量：<katex-element expression="c_{44}" :inline="true" /></li>
                    <li>各向异性：<katex-element expression="c_{11} \gg c_{44}" :inline="true" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>高级理论推导</h2>
      
      <div class="advanced-theory">
        <div class="theory-sections">
          <div class="theory-card">
            <h3>🔬 变分方法与稳定性分析</h3>
            <div class="theory-content">
              <div class="variational-analysis">
                <h4>变分原理的深入分析</h4>
                <div class="analysis-content">
                  <p><strong>泛函的二阶变分：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\delta^2 F = \int d^d r \left[ K|\nabla\delta\psi|^2 + (a + 3b|\psi_0|^2)|\delta\psi|^2 \right]" :inline="false" />
                  </div>
                  
                  <p><strong>稳定性条件：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\delta^2 F > 0 \Rightarrow a + 3b|\psi_0|^2 > 0" :inline="false" />
                  </div>
                  
                  <p><strong>临界点分析：</strong></p>
                  <ul>
                    <li>均匀解的稳定性边界</li>
                    <li>调制不稳定性的阈值</li>
                    <li>相分离的临界条件</li>
                  </ul>
                  
                  <div class="stability-diagram">
                    <h5>稳定性相图</h5>
                    <div class="diagram-content">
                      <p><strong>参数空间中的区域：</strong></p>
                      <ul>
                        <li>均匀稳定区：<katex-element expression="a > 0" :inline="true" /></li>
                        <li>调制不稳定区：<katex-element expression="a < 0, |\psi|^2 < |a|/3b" :inline="true" /></li>
                        <li>非线性稳定区：<katex-element expression="a < 0, |\psi|^2 = |a|/b" :inline="true" /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="perturbation-theory">
                <h4>微扰理论方法</h4>
                <div class="perturbation-content">
                  <p><strong>弱非线性展开：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi = \psi_0 + \epsilon \psi_1 + \epsilon^2 \psi_2 + \cdots" :inline="false" />
                  </div>
                  
                  <p><strong>多尺度分析：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\frac{\partial}{\partial t} = \frac{\partial}{\partial T_0} + \epsilon \frac{\partial}{\partial T_1} + \epsilon^2 \frac{\partial}{\partial T_2}" :inline="false" />
                  </div>
                  
                  <p><strong>包络孤子解：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(x,t) = A(X,T) e^{i(kx - \omega t)} + \text{c.c.}" :inline="false" />
                  </div>
                  
                  <p>其中 <katex-element expression="X = \epsilon(x - v_g t), T = \epsilon^2 t" :inline="true" /></p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="theory-card">
            <h3>🌊 非线性波动理论</h3>
            <div class="theory-content">
              <div class="wave-analysis">
                <h4>色散关系与群速度</h4>
                <div class="wave-content">
                  <p><strong>线性化GL方程：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="-K k^2 \psi + a \psi = i\omega \psi" :inline="false" />
                  </div>
                  
                  <p><strong>色散关系：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\omega(k) = i(a + K k^2)" :inline="false" />
                  </div>
                  
                  <p><strong>不稳定性分析：</strong></p>
                  <ul>
                    <li>当 <katex-element expression="a < 0" :inline="true" /> 时，长波模式不稳定</li>
                    <li>最不稳定波矢：<katex-element expression="k_{\max} = 0" :inline="true" /></li>
                    <li>增长率：<katex-element expression="\gamma = |a|" :inline="true" /></li>
                  </ul>
                  
                  <div class="nonlinear-effects">
                    <h5>非线性效应</h5>
                    <div class="effects-content">
                      <p><strong>自聚焦/自散焦：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="n_{\text{eff}} = n_0 + n_2 |\psi|^2" :inline="false" />
                      </div>
                      
                      <p><strong>调制不稳定性：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="\gamma_{\text{MI}} = \sqrt{2|\psi_0|^2 \omega_k - \omega_k^2}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="soliton-theory">
                <h4>孤子理论</h4>
                <div class="soliton-content">
                  <p><strong>亮孤子解：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(x,t) = A \text{sech}\left(\frac{x-vt}{\xi}\right) e^{i\phi(x,t)}" :inline="false" />
                  </div>
                  
                  <p><strong>暗孤子解：</strong></p>
                  <div class="formula-block">
                    <katex-element expression="\psi(x,t) = A \tanh\left(\frac{x-vt}{\xi}\right) e^{i\phi(x,t)}" :inline="false" />
                  </div>
                  
                  <p><strong>孤子相互作用：</strong></p>
                  <ul>
                    <li>弹性碰撞特性</li>
                    <li>相位偏移效应</li>
                    <li>束缚态形成</li>
                  </ul>
                  
                  <div class="inverse-scattering">
                    <h5>反散射方法</h5>
                    <div class="scattering-content">
                      <p><strong>Lax对：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="L\phi = \lambda\phi, \quad \frac{\partial\phi}{\partial t} = M\phi" :inline="false" />
                      </div>
                      
                      <p><strong>守恒量：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="I_n = \int_{-\infty}^{\infty} dx \, \psi^n (\partial_x \psi^*)^n" :inline="false" />
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
      <h2>实验验证与测量技术</h2>
      
      <div class="experimental-verification">
        <div class="verification-methods">
          <div class="method-card">
            <h3>🔬 直接观测技术</h3>
            <div class="method-content">
              <div class="observation-techniques">
                <div class="technique-detail">
                  <h4>扫描隧道显微镜 (STM)</h4>
                  <div class="technique-content">
                    <p><strong>工作原理：</strong></p>
                    <ul>
                      <li>量子隧道效应探测表面电子态</li>
                      <li>原子级分辨率成像</li>
                      <li>局域态密度测量</li>
                    </ul>
                    
                    <p><strong>在GL理论中的应用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I \propto \int_{-eV}^{0} dE \, N_s(E) N_t(E+eV) T(E,V)" :inline="false" />
                    </div>
                    
                    <div class="stm-results">
                      <h5>重要发现</h5>
                      <ul>
                        <li>涡旋核心的零偏压电导峰</li>
                        <li>序参量的空间分布</li>
                        <li>准粒子束缚态</li>
                        <li>Caroli-de Gennes-Matricon态</li>
                      </ul>
                    </div>
                    
                    <p><strong>实验参数：</strong></p>
                    <ul>
                      <li>温度：T ≪ Tc (通常 < 0.1Tc)</li>
                      <li>磁场：0.1 - 10 T</li>
                      <li>空间分辨率：~1 Å</li>
                      <li>能量分辨率：~0.1 meV</li>
                    </ul>
                  </div>
                </div>
                
                <div class="technique-detail">
                  <h4>磁力显微镜 (MFM)</h4>
                  <div class="technique-content">
                    <p><strong>测量原理：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_z = \mu_{\text{tip}} \frac{\partial B_z}{\partial z}" :inline="false" />
                    </div>
                    
                    <p><strong>Abrikosov格子观测：</strong></p>
                    <ul>
                      <li>磁通线的直接成像</li>
                      <li>格子常数测量</li>
                      <li>缺陷和钉扎中心</li>
                      <li>格子熔化相变</li>
                    </ul>
                    
                    <div class="mfm-analysis">
                      <h5>数据分析</h5>
                      <p><strong>结构因子：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="S(\vec{q}) = \left|\sum_i e^{i\vec{q} \cdot \vec{r}_i}\right|^2" :inline="false" />
                      </div>
                      
                      <p><strong>关联函数：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="g(r) = \frac{1}{n} \langle \sum_{i \neq j} \delta(\vec{r} - \vec{r}_{ij}) \rangle" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="technique-detail">
                  <h4>小角中子散射 (SANS)</h4>
                  <div class="technique-content">
                    <p><strong>散射截面：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{d\sigma}{d\Omega} = |\langle \vec{q} \cdot \vec{M}(\vec{q}) \rangle|^2" :inline="false" />
                    </div>
                    
                    <p><strong>磁通格子研究：</strong></p>
                    <ul>
                      <li>格子参数精确测定</li>
                      <li>弹性常数测量</li>
                      <li>相变临界行为</li>
                      <li>无序效应</li>
                    </ul>
                    
                    <div class="sans-applications">
                      <h5>典型实验结果</h5>
                      <p><strong>格子常数：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="a_0 = \sqrt{\frac{2\Phi_0}{\sqrt{3}B}} \approx 48.3 \text{ nm}/\sqrt{B[\text{T}]}" :inline="false" />
                      </div>
                      
                      <p><strong>弹性模量：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="c_{11} \approx \frac{B^2}{4\pi\mu_0}, \quad c_{44} \approx \frac{B^2}{4\pi\mu_0} \frac{\xi^2}{\lambda^2}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="method-card">
            <h3>📊 间接测量方法</h3>
            <div class="method-content">
              <div class="indirect-methods">
                <div class="method-detail">
                  <h4>μSR (缪子自旋旋转)</h4>
                  <div class="method-content">
                    <p><strong>测量原理：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P(t) = \frac{1}{3} + \frac{2}{3} G_z(t) \cos(\gamma_\mu B t + \phi)" :inline="false" />
                    </div>
                    
                    <p><strong>磁场分布信息：</strong></p>
                    <ul>
                      <li>内部磁场分布 P(B)</li>
                      <li>磁通线钉扎强度</li>
                      <li>超导能隙各向异性</li>
                      <li>穿透深度温度依赖</li>
                    </ul>
                    
                    <div class="musr-analysis">
                      <h5>数据分析方法</h5>
                      <p><strong>磁场分布：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="P(B) = \frac{1}{\sqrt{2\pi}\sigma} \exp\left(-\frac{(B-B_0)^2}{2\sigma^2}\right)" :inline="false" />
                      </div>
                      
                      <p><strong>弛豫函数：</strong></p>
                      <div class="formula-block">
                        <katex-element expression="G_z(t) = \exp(-\sigma^2 t^2/2) \quad \text{(高斯型)}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="method-detail">
                  <h4>比热测量</h4>
                  <div class="method-content">
                    <p><strong>GL理论预测：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C(T) = \gamma T + \beta T^3 + C_{\text{GL}}(T)" :inline="false" />
                    </div>
                    
                    <p><strong>相变跳跃：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta C = \frac{\alpha^2}{2\beta} T_c" :inline="false" />
                    </div>
                    
                    <div class="specific-heat-features">
                      <h5>特征行为</h5>
                      <ul>
                        <li>二级相变的跳跃</li>
                        <li>涨落效应的贡献</li>
                        <li>维度交叉行为</li>
                        <li>无序效应的影响</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="method-detail">
                  <h4>磁化率测量</h4>
                  <div class="method-content">
                    <p><strong>Meissner效应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi = -\frac{1}{4\pi} \left(1 - \frac{\lambda}{\lambda + d/2}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>临界场测定：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{c1} = \frac{\Phi_0}{4\pi\lambda^2} \ln\kappa, \quad H_{c2} = \frac{\Phi_0}{2\pi\xi^2}" :inline="false" />
                    </div>
                    
                    <div class="susceptibility-analysis">
                      <h5>实验技术</h5>
                      <ul>
                        <li>SQUID磁强计</li>
                        <li>振动样品磁强计 (VSM)</li>
                        <li>交流磁化率测量</li>
                        <li>扭矩磁强计</li>
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

    <div class="content-section">
      <h2>计算方法与数值模拟</h2>
      
      <div class="computational-methods">
        <div class="method-categories">
          <div class="category-card computational">
            <h3>💻 数值求解方法</h3>
            <div class="category-content">
              <div class="numerical-techniques">
                <div class="technique-section">
                  <h4>时间依赖GL方程求解</h4>
                  <div class="technique-content">
                    <p><strong>TDGL方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial \psi}{\partial t} = -\Gamma \left( \alpha \psi + \beta |\psi|^2 \psi - \frac{1}{2m^*}(\nabla - ie^*\vec{A})^2 \psi \right)" :inline="false" />
                    </div>
                    
                    <p><strong>数值方法：</strong></p>
                    <ul>
                      <li><strong>有限差分法：</strong>时间和空间的离散化</li>
                      <li><strong>谱方法：</strong>Fourier变换加速</li>
                      <li><strong>分步Fourier方法：</strong>线性和非线性项分离</li>
                      <li><strong>Runge-Kutta方法：</strong>高阶时间积分</li>
                    </ul>
                    
                    <div class="algorithm-details">
                      <h5>分步Fourier算法</h5>
                      <div class="algorithm-content">
                        <p><strong>算子分离：</strong></p>
                        <div class="formula-block">
                          <katex-element expression="\psi(t+\Delta t) = e^{-i\hat{N}\Delta t/2} e^{-i\hat{L}\Delta t} e^{-i\hat{N}\Delta t/2} \psi(t)" :inline="false" />
                        </div>
                        
                        <p>其中：</p>
                        <ul>
                          <li><katex-element expression="\hat{L}" :inline="true" />：线性算子（动能项）</li>
                          <li><katex-element expression="\hat{N}" :inline="true" />：非线性算子（相互作用项）</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="technique-section">
                  <h4>有限元方法</h4>
                  <div class="technique-content">
                    <p><strong>弱形式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\int_\Omega \phi_i \left[ \frac{\partial \psi}{\partial t} + \Gamma \frac{\delta F}{\delta \psi^*} \right] d\vec{r} = 0" :inline="false" />
                    </div>
                    
                    <p><strong>基函数展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(\vec{r},t) = \sum_j c_j(t) \phi_j(\vec{r})" :inline="false" />
                    </div>
                    
                    <div class="fem-advantages">
                      <h5>优势</h5>
                      <ul>
                        <li>处理复杂几何边界</li>
                        <li>自适应网格细化</li>
                        <li>高精度数值解</li>
                        <li>并行计算友好</li>
                      </ul>
                    </div>
                    
                    <div class="fem-implementation">
                      <h5>实现要点</h5>
                      <ul>
                        <li>网格生成与优化</li>
                        <li>边界条件处理</li>
                        <li>稀疏矩阵求解</li>
                        <li>时间步长自适应</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="technique-section">
                  <h4>Monte Carlo方法</h4>
                  <div class="technique-content">
                    <p><strong>经典Monte Carlo：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P(\{\psi_i\}) = \frac{1}{Z} \exp\left(-\frac{F[\{\psi_i\}]}{k_B T}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>Metropolis算法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P_{\text{accept}} = \min\left(1, \exp\left(-\frac{\Delta F}{k_B T}\right)\right)" :inline="false" />
                    </div>
                    
                    <div class="mc-applications">
                      <h5>应用领域</h5>
                      <ul>
                        <li>相变临界性质</li>
                        <li>热涨落效应</li>
                        <li>无序系统</li>
                        <li>有限尺寸效应</li>
                      </ul>
                    </div>
                    
                    <div class="advanced-mc">
                      <h5>高级技术</h5>
                      <ul>
                        <li><strong>集群算法：</strong>减少临界慢化</li>
                        <li><strong>并行回火：</strong>多温度模拟</li>
                        <li><strong>Wang-Landau算法：</strong>态密度计算</li>
                        <li><strong>路径积分MC：</strong>量子效应</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="category-card machine-learning">
            <h3>🤖 机器学习方法</h3>
            <div class="category-content">
              <div class="ml-applications">
                <div class="ml-section">
                  <h4>相变识别</h4>
                  <div class="ml-content">
                    <p><strong>监督学习：</strong></p>
                    <ul>
                      <li>卷积神经网络 (CNN)</li>
                      <li>支持向量机 (SVM)</li>
                      <li>随机森林算法</li>
                    </ul>
                    
                    <p><strong>无监督学习：</strong></p>
                    <ul>
                      <li>主成分分析 (PCA)</li>
                      <li>t-SNE降维</li>
                      <li>聚类算法</li>
                    </ul>
                    
                    <div class="ml-workflow">
                      <h5>工作流程</h5>
                      <div class="workflow-steps">
                        <div class="step">1. 数据生成：Monte Carlo或分子动力学</div>
                        <div class="step">2. 特征提取：序参量、关联函数等</div>
                        <div class="step">3. 模型训练：神经网络或其他算法</div>
                        <div class="step">4. 相变点预测：临界温度确定</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="ml-section">
                  <h4>参数优化</h4>
                  <div class="ml-content">
                    <p><strong>贝叶斯优化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="p(\theta|D) \propto p(D|\theta) p(\theta)" :inline="false" />
                    </div>
                    
                    <p><strong>遗传算法：</strong></p>
                    <ul>
                      <li>参数空间全局搜索</li>
                      <li>多目标优化</li>
                      <li>约束条件处理</li>
                    </ul>
                    
                    <div class="optimization-targets">
                      <h5>优化目标</h5>
                      <ul>
                        <li>GL参数拟合</li>
                        <li>临界指数确定</li>
                        <li>相图构建</li>
                        <li>实验数据匹配</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="ml-section">
                  <h4>新相发现</h4>
                  <div class="ml-content">
                    <p><strong>生成对抗网络 (GAN)：</strong></p>
                    <ul>
                      <li>新结构生成</li>
                      <li>相空间探索</li>
                      <li>异常检测</li>
                    </ul>
                    
                    <p><strong>强化学习：</strong></p>
                    <ul>
                      <li>最优路径搜索</li>
                      <li>控制策略学习</li>
                      <li>实验设计优化</li>
                    </ul>
                    
                    <div class="discovery-examples">
                      <h5>成功案例</h5>
                      <ul>
                        <li>拓扑相的自动识别</li>
                        <li>新型超导体预测</li>
                        <li>量子自旋液体发现</li>
                        <li>多体局域化相变</li>
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

    <div class="content-section">
      <h2>现代发展与前沿应用</h2>
      
      <div class="modern-developments">
        <div class="development-areas">
          <div class="area-card experimental">
            <h3>🔬 实验技术进展</h3>
            <div class="area-content">
              <div class="technique-list">
                <div class="technique-item advanced">
                  <h4>扫描隧道显微镜 (STM)</h4>
                  <div class="technique-details">
                    <p><strong>最新进展：</strong></p>
                    <ul>
                      <li>毫开尔文温度操作</li>
                      <li>矢量磁场环境</li>
                      <li>时间分辨测量</li>
                      <li>自旋极化STM</li>
                    </ul>
                    <p><strong>重要发现：</strong>直接观测涡旋核心结构，验证GL理论预测的Caroli-de Gennes-Matricon束缚态</p>
                  </div>
                </div>
                
                <div class="technique-item advanced">
                  <h4>磁力显微镜 (MFM)</h4>
                  <div class="technique-details">
                    <p><strong>技术改进：</strong></p>
                    <ul>
                      <li>超高分辨率成像</li>
                      <li>定量磁场测量</li>
                      <li>动态过程观测</li>
                      <li>低温强磁场环境</li>
                    </ul>
                    <p><strong>应用成果：</strong>观测Abrikosov格子，研究磁通动力学和钉扎机制</p>
                  </div>
                </div>
                
                <div class="technique-item advanced">
                  <h4>小角中子散射 (SANS)</h4>
                  <div class="technique-details">
                    <p><strong>实验优势：</strong></p>
                    <ul>
                      <li>大范围q空间覆盖</li>
                      <li>统计平均信息</li>
                      <li>非破坏性测量</li>
                      <li>原位环境控制</li>
                    </ul>
                    <p><strong>测量内容：</strong>磁通格子结构因子，弹性常数，相变临界行为</p>
                  </div>
                </div>
                
                <div class="technique-item advanced">
                  <h4>μSR技术</h4>
                  <div class="technique-details">
                    <p><strong>独特优势：</strong></p>
                    <ul>
                      <li>局域磁场探测</li>
                      <li>时间尺度覆盖广</li>
                      <li>体相信息</li>
                      <li>轻元素敏感</li>
                    </ul>
                    <p><strong>研究内容：</strong>内部磁场分布，磁通线钉扎，超导能隙对称性</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="area-card computational">
            <h3>🧮 计算方法创新</h3>
            <div class="area-content">
              <div class="method-list">
                <div class="method-item advanced">
                  <h4>时间依赖GL方程</h4>
                  <div class="method-details">
                    <p><strong>算法改进：</strong></p>
                    <ul>
                      <li>自适应时间步长</li>
                      <li>并行计算优化</li>
                      <li>GPU加速实现</li>
                      <li>多尺度方法</li>
                    </ul>
                    <p><strong>应用领域：</strong>非平衡动力学，淬火过程，涡旋运动</p>
                  </div>
                </div>
                
                <div class="method-item advanced">
                  <h4>有限元方法</h4>
                  <div class="method-details">
                    <p><strong>技术特点：</strong></p>
                    <ul>
                      <li>自适应网格细化</li>
                      <li>高阶基函数</li>
                      <li>并行求解器</li>
                      <li>误差估计控制</li>
                    </ul>
                    <p><strong>优势：</strong>处理复杂几何，精确边界条件，高精度数值解</p>
                  </div>
                </div>
                
                <div class="method-item advanced">
                  <h4>Monte Carlo模拟</h4>
                  <div class="method-details">
                    <p><strong>高级算法：</strong></p>
                    <ul>
                      <li>集群更新算法</li>
                      <li>并行回火方法</li>
                      <li>Wang-Landau采样</li>
                      <li>路径积分MC</li>
                    </ul>
                    <p><strong>研究内容：</strong>相变临界性质，热涨落效应，有限尺寸标度</p>
                  </div>
                </div>
                
                <div class="method-item advanced">
                  <h4>机器学习方法</h4>
                  <div class="method-details">
                    <p><strong>前沿技术：</strong></p>
                    <ul>
                      <li>深度神经网络</li>
                      <li>图神经网络</li>
                      <li>变分自编码器</li>
                      <li>物理信息神经网络</li>
                    </ul>
                    <p><strong>应用：</strong>相变识别，参数优化，新相发现，实验设计</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="area-card applications">
            <h3>🌟 前沿应用领域</h3>
            <div class="area-content">
              <div class="application-list">
                <div class="application-item cutting-edge">
                  <h4>拓扑超导体</h4>
                  <div class="application-details">
                    <p><strong>理论基础：</strong></p>
                    <ul>
                      <li>拓扑不变量保护</li>
                      <li>Majorana费米子</li>
                      <li>非阿贝尔统计</li>
                      <li>拓扑量子计算</li>
                    </ul>
                    <p><strong>GL理论扩展：</strong>包含拓扑项的广义GL泛函，边界态的描述</p>
                    <p><strong>实验进展：</strong>Sr₂RuO₄, 铁基超导体边界态观测</p>
                  </div>
                </div>
                
                <div class="application-item cutting-edge">
                  <h4>非常规超导体</h4>
                  <div class="application-details">
                    <p><strong>材料体系：</strong></p>
                    <ul>
                      <li>铜氧化物高温超导体</li>
                      <li>铁基超导体</li>
                      <li>重费米子超导体</li>
                      <li>有机超导体</li>
                    </ul>
                    <p><strong>理论挑战：</strong>d波配对，多带效应，强关联电子系统</p>
                    <p><strong>GL理论修正：</strong>各向异性序参量，多分量耦合</p>
                  </div>
                </div>
                
                <div class="application-item cutting-edge">
                  <h4>冷原子系统</h4>
                  <div class="application-details">
                    <p><strong>实验优势：</strong></p>
                    <ul>
                      <li>参数精确可调</li>
                      <li>人工规范场</li>
                      <li>量子涡旋操控</li>
                      <li>实时动力学观测</li>
                    </ul>
                    <p><strong>GL类比：</strong>Gross-Pitaevskii方程，BEC序参量</p>
                    <p><strong>研究内容：</strong>涡旋格子，Kibble-Zurek机制，量子相变</p>
                  </div>
                </div>
                
                <div class="application-item cutting-edge">
                  <h4>光学系统</h4>
                  <div class="application-details">
                    <p><strong>非线性光学：</strong></p>
                    <ul>
                      <li>光学孤子</li>
                      <li>自聚焦效应</li>
                      <li>调制不稳定性</li>
                      <li>光学涡旋</li>
                    </ul>
                    <p><strong>GL方程类比：</strong>非线性薛定谔方程，复振幅演化</p>
                    <p><strong>应用：</strong>光通信，激光技术，光学计算</p>
                  </div>
                </div>
                
                <div class="application-item cutting-edge">
                  <h4>量子材料</h4>
                  <div class="application-details">
                    <p><strong>新兴材料：</strong></p>
                    <ul>
                      <li>拓扑绝缘体</li>
                      <li>Weyl半金属</li>
                      <li>量子自旋液体</li>
                      <li>魔角石墨烯</li>
                    </ul>
                    <p><strong>理论框架：</strong>广义GL理论，拓扑场论，强关联效应</p>
                    <p><strong>研究前沿：</strong>量子临界点，拓扑相变，多体局域化</p>
                  </div>
                </div>
                
                <div class="application-item cutting-edge">
                  <h4>生物物理应用</h4>
                  <div class="application-details">
                    <p><strong>生物系统：</strong></p>
                    <ul>
                      <li>细胞膜相变</li>
                      <li>蛋白质折叠</li>
                      <li>DNA解链</li>
                      <li>神经网络动力学</li>
                    </ul>
                    <p><strong>GL模型：</strong>序参量描述生物有序态，相变机制</p>
                    <p><strong>应用价值：</strong>疾病机理，药物设计，生物工程</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="future-directions">
          <div class="direction-card">
            <h3>🚀 未来发展方向</h3>
            <div class="direction-content">
              <div class="future-topics">
                <div class="topic-section">
                  <h4>理论发展</h4>
                  <ul>
                    <li>量子GL理论：包含量子涨落效应</li>
                    <li>非平衡GL理论：开放系统，驱动相变</li>
                    <li>多尺度GL理论：从微观到宏观</li>
                    <li>机器学习辅助理论构建</li>
                  </ul>
                </div>
                
                <div class="topic-section">
                  <h4>实验技术</h4>
                  <ul>
                    <li>原子级分辨率实时成像</li>
                    <li>飞秒时间分辨测量</li>
                    <li>多维度同时探测</li>
                    <li>人工智能辅助实验</li>
                  </ul>
                </div>
                
                <div class="topic-section">
                  <h4>应用前景</h4>
                  <ul>
                    <li>室温超导体设计</li>
                    <li>拓扑量子计算</li>
                    <li>新能源材料开发</li>
                    <li>生物医学应用</li>
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

.form-card, .analysis-card, .construction-card, .property-card, .category-card, .superconductor-card, .structure-analysis, .area-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;
}

.form-card h4, .analysis-card h4, .construction-card h4, .property-card h4, .category-card h4, .superconductor-card h4, .structure-analysis h4, .area-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.functional-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.equation-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.wall-structure {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.potential-visualization {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border-left: 3px solid #10b981;
}

.property-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.vortex-construction {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.asymptotic-behavior {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.behavior-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.property-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.category-card.energy {
  border-left: 5px solid #f093fb;
}

.category-card.interaction {
  border-left: 5px solid #4facfe;
}

.category-card.dynamics {
  border-left: 5px solid #43e97b;
}

.gl-superconductor {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.superconductor-types {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.type-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.quantization-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.lattice-structure {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.development-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.technique-list, .method-list, .application-list {
  display: grid;
  gap: 1rem;
}

.technique-item, .method-item, .application-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.technique-item h4, .method-item h4, .application-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.technique-item p, .method-item p, .application-item p {
  font-size: 0.9rem;
  color: #4a5568;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .functional-form, .equation-analysis, .wall-structure, .property-analysis, .vortex-construction, .property-categories, .gl-superconductor, .quantization-analysis, .lattice-structure, .development-areas {
    grid-template-columns: 1fr;
  }
}
</style>