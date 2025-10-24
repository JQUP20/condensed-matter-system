<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.2.5 平均场上的涨落效应I</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">涨落理论</span>
        <span class="reading-time">阅读时间：40分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        平均场理论虽然提供了相变的基本图像，但忽略了热涨落和量子涨落的重要作用。
        涨落效应不仅修正了平均场理论的预测，还揭示了许多新的物理现象。
        本节将系统介绍涨落效应的基本理论框架，包括高斯涨落、涨落-耗散定理等核心概念。
      </p>
    </div>

    <div class="content-section">
      <h2>涨落的基本概念</h2>
      
      <div class="fluctuation-basics">
        <div class="basic-framework">
          <div class="framework-card types">
            <h3>🌊 涨落的分类</h3>
            <div class="framework-content">
              <div class="fluctuation-types">
                <div class="type-item thermal">
                  <h4>热涨落</h4>
                  <div class="type-content">
                    <p><strong>起源：</strong></p>
                    <ul>
                      <li>有限温度效应</li>
                      <li>热运动的随机性</li>
                      <li>统计力学的本质</li>
                    </ul>
                    
                    <p><strong>特征能量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{thermal}} \sim k_B T" :inline="false" />
                    </div>
                    
                    <p><strong>典型例子：</strong></p>
                    <ul>
                      <li>布朗运动</li>
                      <li>临界乳光</li>
                      <li>相变附近的涨落</li>
                    </ul>
                  </div>
                </div>
                
                <div class="type-item quantum">
                  <h4>量子涨落</h4>
                  <div class="type-content">
                    <p><strong>起源：</strong></p>
                    <ul>
                      <li>海森堡不确定性原理</li>
                      <li>零点能</li>
                      <li>量子叠加态</li>
                    </ul>
                    
                    <p><strong>特征能量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{quantum}} \sim \hbar\omega" :inline="false" />
                    </div>
                    
                    <p><strong>重要性：</strong></p>
                    <ul>
                      <li>低温下主导</li>
                      <li>量子相变</li>
                      <li>量子临界现象</li>
                    </ul>
                  </div>
                </div>
                
                <div class="type-item critical">
                  <h4>临界涨落</h4>
                  <div class="type-content">
                    <p><strong>特征：</strong></p>
                    <ul>
                      <li>长程关联</li>
                      <li>标度不变性</li>
                      <li>慢化现象</li>
                    </ul>
                    
                    <p><strong>相关长度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\xi \sim |T-T_c|^{-\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>物理后果：</strong></p>
                    <ul>
                      <li>临界指数修正</li>
                      <li>普适性</li>
                      <li>标度律</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="framework-card measures">
            <h3>📊 涨落的度量</h3>
            <div class="framework-content">
              <div class="fluctuation-measures">
                <div class="measure-item">
                  <h4>关联函数</h4>
                  <div class="measure-content">
                    <p><strong>定义：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(\vec{r},t) = \langle\delta\psi(\vec{r},t)\delta\psi(0,0)\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>空间关联：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(r) \sim e^{-r/\xi} \quad (r \gg \xi)" :inline="false" />
                    </div>
                    
                    <p><strong>时间关联：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(t) \sim e^{-t/\tau} \quad (t \gg \tau)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="measure-item">
                  <h4>结构因子</h4>
                  <div class="measure-content">
                    <p><strong>傅里叶变换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{k}) = \int d^d r \, e^{i\vec{k}\cdot\vec{r}} G(r)" :inline="false" />
                    </div>
                    
                    <p><strong>临界行为：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{k}) \sim \frac{1}{\xi^{-2} + k^2} \quad (k \ll \xi^{-1})" :inline="false" />
                    </div>
                    
                    <p><strong>实验测量：</strong></p>
                    <ul>
                      <li>中子散射</li>
                      <li>X射线散射</li>
                      <li>光散射</li>
                    </ul>
                  </div>
                </div>
                
                <div class="measure-item">
                  <h4>响应函数</h4>
                  <div class="measure-content">
                    <p><strong>线性响应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(\vec{k},\omega) = \int dt \, e^{i\omega t} \langle[\delta\psi(\vec{k},t), \delta\psi(-\vec{k},0)]\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>涨落-耗散关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{k},\omega) = \frac{2k_B T}{\omega} \text{Im}\chi(\vec{k},\omega)" :inline="false" />
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
      <h2>高斯涨落理论</h2>
      
      <div class="gaussian-fluctuations">
        <div class="gaussian-framework">
          <div class="gaussian-card formulation">
            <h3>🎲 高斯近似的建立</h3>
            <div class="gaussian-content">
              <div class="formulation-steps">
                <div class="step-item">
                  <h4>序参量的分解</h4>
                  <div class="step-content">
                    <p><strong>平均值与涨落：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(\vec{r}) = \langle\psi\rangle + \delta\psi(\vec{r})" :inline="false" />
                    </div>
                    
                    <p><strong>平均场解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\psi\rangle = \psi_0 = \begin{cases} 0 & T > T_c \\ \sqrt{\frac{|a|}{b}} & T < T_c \end{cases}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落的性质：</strong></p>
                    <ul>
                      <li><katex-element expression="\langle\delta\psi\rangle = 0" :inline="true" /></li>
                      <li><katex-element expression="\langle(\delta\psi)^2\rangle \neq 0" :inline="true" /></li>
                      <li>高阶矩的重要性</li>
                    </ul>
                  </div>
                </div>
                
                <div class="step-item">
                  <h4>有效哈密顿量</h4>
                  <div class="step-content">
                    <p><strong>Landau泛函的展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\psi] = F_0 + \int d^d r \left[ \frac{1}{2}r\delta\psi^2 + \frac{1}{2}K(\nabla\delta\psi)^2 + \cdots \right]" :inline="false" />
                    </div>
                    
                    <p><strong>高斯近似：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\text{Gauss}}[\delta\psi] = \frac{1}{2} \int d^d r \left[ r\delta\psi^2 + K(\nabla\delta\psi)^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>参数意义：</strong></p>
                    <ul>
                      <li><katex-element expression="r = a + 3b\psi_0^2" :inline="true" /> - 有效质量</li>
                      <li><katex-element expression="K" :inline="true" /> - 刚度常数</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="gaussian-card propagator">
            <h3>🔄 传播子的计算</h3>
            <div class="gaussian-content">
              <div class="propagator-calculation">
                <div class="calc-step">
                  <h4>傅里叶空间</h4>
                  <div class="calc-content">
                    <p><strong>动量空间表示：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\text{Gauss}} = \frac{1}{2} \sum_{\vec{k}} (r + Kk^2) |\delta\psi(\vec{k})|^2" :inline="false" />
                    </div>
                    
                    <p><strong>传播子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(\vec{k}) = \langle|\delta\psi(\vec{k})|^2\rangle = \frac{k_B T}{r + Kk^2}" :inline="false" />
                    </div>
                    
                    <p><strong>物理解释：</strong></p>
                    <ul>
                      <li>长波长模式：<katex-element expression="G(k) \approx \frac{k_B T}{r}" :inline="true" /></li>
                      <li>短波长模式：<katex-element expression="G(k) \approx \frac{k_B T}{Kk^2}" :inline="true" /></li>
                    </ul>
                  </div>
                </div>
                
                <div class="calc-step">
                  <h4>实空间关联</h4>
                  <div class="calc-content">
                    <p><strong>关联函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(r) = \int \frac{d^d k}{(2\pi)^d} \frac{k_B T}{r + Kk^2} e^{i\vec{k}\cdot\vec{r}}" :inline="false" />
                    </div>
                    
                    <p><strong>相关长度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\xi = \sqrt{\frac{K}{r}}" :inline="false" />
                    </div>
                    
                    <p><strong>渐近行为：</strong></p>
                    <div class="asymptotic-behavior">
                      <div class="behavior-case">
                        <span>d = 1:</span>
                        <span><katex-element expression="G(r) \sim e^{-r/\xi}" :inline="true" /></span>
                      </div>
                      <div class="behavior-case">
                        <span>d = 2:</span>
                        <span><katex-element expression="G(r) \sim K_0(r/\xi)" :inline="true" /></span>
                      </div>
                      <div class="behavior-case">
                        <span>d = 3:</span>
                        <span><katex-element expression="G(r) \sim \frac{e^{-r/\xi}}{r}" :inline="true" /></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="gaussian-card thermodynamics">
            <h3>🌡️ 热力学量的计算</h3>
            <div class="gaussian-content">
              <div class="thermodynamic-calculations">
                <div class="thermo-item">
                  <h4>自由能修正</h4>
                  <div class="thermo-content">
                    <p><strong>涨落贡献：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\text{fluct}} = \frac{1}{2} k_B T \sum_{\vec{k}} \ln(r + Kk^2)" :inline="false" />
                    </div>
                    
                    <p><strong>连续极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\text{fluct}} = \frac{1}{2} k_B T V \int \frac{d^d k}{(2\pi)^d} \ln(r + Kk^2)" :inline="false" />
                    </div>
                    
                    <p><strong>维度依赖性：</strong></p>
                    <ul>
                      <li>d < 4: 红外发散</li>
                      <li>d = 4: 对数发散</li>
                      <li>d > 4: 收敛</li>
                    </ul>
                  </div>
                </div>
                
                <div class="thermo-item">
                  <h4>比热的计算</h4>
                  <div class="thermo-content">
                    <p><strong>比热公式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C = -T \frac{\partial^2 F}{\partial T^2}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落贡献：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C_{\text{fluct}} = \frac{k_B}{2} \int \frac{d^d k}{(2\pi)^d} \frac{(k_B T \frac{\partial r}{\partial T})^2}{(r + Kk^2)^2}" :inline="false" />
                    </div>
                    
                    <p><strong>临界行为：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C \sim |T-T_c|^{-\alpha}, \quad \alpha = 2 - d/2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="thermo-item">
                  <h4>磁化率的计算</h4>
                  <div class="thermo-content">
                    <p><strong>磁化率定义：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi = \frac{\partial \langle\psi\rangle}{\partial h}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落-耗散关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi = \frac{1}{k_B T} \langle(\delta\psi)^2\rangle V = \frac{V}{k_B T} G(\vec{k}=0)" :inline="false" />
                    </div>
                    
                    <p><strong>结果：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi = \frac{V}{r} \sim |T-T_c|^{-1}" :inline="false" />
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
      <h2>涨落-耗散定理</h2>
      
      <div class="fluctuation-dissipation">
        <div class="fd-framework">
          <div class="fd-card derivation">
            <h3>📐 定理的推导</h3>
            <div class="fd-content">
              <div class="derivation-steps">
                <div class="derivation-step">
                  <h4>线性响应理论</h4>
                  <div class="step-content">
                    <p><strong>外场扰动：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = H_0 - \int d^d r \, h(\vec{r},t) \psi(\vec{r})" :inline="false" />
                    </div>
                    
                    <p><strong>响应函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\psi(\vec{r},t)\rangle = \int d^d r' dt' \, \chi(\vec{r}-\vec{r}',t-t') h(\vec{r}',t')" :inline="false" />
                    </div>
                    
                    <p><strong>因果性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(\vec{r},t) = 0 \quad (t < 0)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="derivation-step">
                  <h4>Kubo公式</h4>
                  <div class="step-content">
                    <p><strong>量子统计表述：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(\vec{r},t) = -\frac{i}{\hbar} \theta(t) \langle[\psi(\vec{r},t), \psi(0,0)]\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>经典极限：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(\vec{r},t) = \frac{1}{k_B T} \theta(t) \frac{\partial}{\partial t} \langle\psi(\vec{r},t)\psi(0,0)\rangle" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="derivation-step">
                  <h4>频率空间关系</h4>
                  <div class="step-content">
                    <p><strong>傅里叶变换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(\vec{k},\omega) = \int dt \, e^{i\omega t} \chi(\vec{k},t)" :inline="false" />
                    </div>
                    
                    <p><strong>涨落-耗散关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{k},\omega) = \frac{2k_B T}{\omega} \text{Im}\chi(\vec{k},\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>详细平衡：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{k},-\omega) = e^{-\hbar\omega/k_B T} S(\vec{k},\omega)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="fd-card applications">
            <h3>🔧 定理的应用</h3>
            <div class="fd-content">
              <div class="application-examples">
                <div class="app-example">
                  <h4>布朗运动</h4>
                  <div class="example-content">
                    <p><strong>Langevin方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m\frac{dv}{dt} = -\gamma v + \eta(t)" :inline="false" />
                    </div>
                    
                    <p><strong>噪声关联：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\eta(t)\eta(t')\rangle = 2\gamma k_B T \delta(t-t')" :inline="false" />
                    </div>
                    
                    <p><strong>Einstein关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="D = \frac{k_B T}{\gamma}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="app-example">
                  <h4>电阻中的噪声</h4>
                  <div class="example-content">
                    <p><strong>Johnson噪声：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle V^2\rangle = 4k_B T R \Delta f" :inline="false" />
                    </div>
                    
                    <p><strong>Nyquist定理：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_V(\omega) = 4k_B T \text{Re}Z(\omega)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="app-example">
                  <h4>相变中的涨落</h4>
                  <div class="example-content">
                    <p><strong>临界慢化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau \sim \xi^z \sim |T-T_c|^{-z\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>动力学指数：</strong></p>
                    <ul>
                      <li>Model A: z = 2</li>
                      <li>Model B: z = 4</li>
                      <li>Model C: z = 2</li>
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
      <h2>Ginzburg判据</h2>
      
      <div class="ginzburg-criterion">
        <div class="criterion-framework">
          <div class="criterion-card derivation">
            <h3>⚖️ 判据的建立</h3>
            <div class="criterion-content">
              <div class="criterion-derivation">
                <div class="derivation-item">
                  <h4>涨落能量的估算</h4>
                  <div class="derivation-content">
                    <p><strong>涨落幅度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle(\delta\psi)^2\rangle \sim \frac{k_B T}{r \xi^d}" :inline="false" />
                    </div>
                    
                    <p><strong>平均场值：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi_0|^2 \sim \frac{|r|}{b}" :inline="false" />
                    </div>
                    
                    <p><strong>相对涨落：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\langle(\delta\psi)^2\rangle}{|\psi_0|^2} \sim \frac{k_B T b}{|r|^2 \xi^d}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="derivation-item">
                  <h4>Ginzburg数</h4>
                  <div class="derivation-content">
                    <p><strong>定义：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i = \frac{k_B T_c b}{a^2 \xi_0^d}" :inline="false" />
                    </div>
                    
                    <p><strong>物理意义：</strong></p>
                    <ul>
                      <li>涨落能量与相互作用能量的比值</li>
                      <li>平均场理论有效性的判据</li>
                      <li>系统维度的重要性</li>
                    </ul>
                    
                    <p><strong>判据条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i \ll 1 \quad \text{(平均场有效)}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="criterion-card examples">
            <h3>📊 具体系统的分析</h3>
            <div class="criterion-content">
              <div class="system-examples">
                <div class="system-item">
                  <h4>三维Ising模型</h4>
                  <div class="system-content">
                    <p><strong>参数估算：</strong></p>
                    <ul>
                      <li><katex-element expression="T_c \sim J/k_B" :inline="true" /></li>
                      <li><katex-element expression="\xi_0 \sim a" :inline="true" /> (晶格常数)</li>
                      <li><katex-element expression="b \sim J^{-1}" :inline="true" /></li>
                    </ul>
                    
                    <p><strong>Ginzburg数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i \sim \frac{k_B T_c J^{-1}}{J^2 a^3} \sim \frac{1}{Ja^3/k_B T_c} \sim 1" :inline="false" />
                    </div>
                    
                    <p><strong>结论：</strong>涨落效应重要，需要修正</p>
                  </div>
                </div>
                
                <div class="system-item">
                  <h4>超导体</h4>
                  <div class="system-content">
                    <p><strong>BCS参数：</strong></p>
                    <ul>
                      <li><katex-element expression="T_c \sim 10 \text{ K}" :inline="true" /></li>
                      <li><katex-element expression="\xi \sim 1000 \text{ Å}" :inline="true" /></li>
                      <li><katex-element expression="N(0) \sim 10^{22} \text{ eV}^{-1}\text{cm}^{-3}" :inline="true" /></li>
                    </ul>
                    
                    <p><strong>Ginzburg数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i \sim \frac{k_B T_c}{E_F} \sim 10^{-4}" :inline="false" />
                    </div>
                    
                    <p><strong>结论：</strong>平均场理论很好</p>
                  </div>
                </div>
                
                <div class="system-item">
                  <h4>液气相变</h4>
                  <div class="system-content">
                    <p><strong>临界参数：</strong></p>
                    <ul>
                      <li><katex-element expression="T_c \sim 100 \text{ K}" :inline="true" /></li>
                      <li><katex-element expression="\xi \sim 10 \text{ Å}" :inline="true" /></li>
                      <li><katex-element expression="n \sim 10^{22} \text{ cm}^{-3}" :inline="true" /></li>
                    </ul>
                    
                    <p><strong>Ginzburg数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i \sim 0.1" :inline="false" />
                    </div>
                    
                    <p><strong>结论：</strong>涨落效应显著</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="criterion-card implications">
            <h3>🎯 物理含义与应用</h3>
            <div class="criterion-content">
              <div class="implications-analysis">
                <div class="implication-item">
                  <h4>维度效应</h4>
                  <div class="implication-content">
                    <p><strong>维度依赖性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G_i \sim \xi_0^{-d}" :inline="false" />
                    </div>
                    
                    <p><strong>临界维度：</strong></p>
                    <ul>
                      <li>d > 4: 平均场总是正确</li>
                      <li>d = 4: 对数修正</li>
                      <li>d < 4: 涨落重要</li>
                    </ul>
                    
                    <p><strong>下临界维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d_l = 2 \quad \text{(连续对称性破缺不可能)}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="implication-item">
                  <h4>相互作用范围</h4>
                  <div class="implication-content">
                    <p><strong>长程相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="J(r) \sim r^{-(d+\sigma)}, \quad \sigma < 2" :inline="false" />
                    </div>
                    
                    <p><strong>有效维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d_{\text{eff}} = d + \sigma" :inline="false" />
                    </div>
                    
                    <p><strong>平均场条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d + \sigma > 4" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="implication-item">
                  <h4>实验指导</h4>
                  <div class="implication-content">
                    <p><strong>测量策略：</strong></p>
                    <ul>
                      <li>确定系统维度</li>
                      <li>估算相关长度</li>
                      <li>评估涨落强度</li>
                    </ul>
                    
                    <p><strong>理论选择：</strong></p>
                    <ul>
                      <li>G_i ≪ 1: 平均场理论</li>
                      <li>G_i ~ 1: 重整化群</li>
                      <li>G_i ≫ 1: 涨落主导</li>
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
        <div class="theory-categories">
          <div class="theory-card mathematical-methods">
            <h3>🧮 数学方法与技巧</h3>
            <div class="theory-content">
              <div class="method-sections">
                <div class="method-item">
                  <h4>路径积分方法</h4>
                  <div class="method-content">
                    <p><strong>配分函数表示：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \int \mathcal{D}\psi \, e^{-\beta F[\psi]}" :inline="false" />
                    </div>
                    
                    <p><strong>高斯积分：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z_0 = \int \mathcal{D}\psi \, e^{-\frac{1}{2}\int d^d r \, \psi G^{-1} \psi} = (\det G^{-1})^{-1/2}" :inline="false" />
                    </div>
                    
                    <p><strong>微扰展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = Z_0 \left\langle e^{-\beta \int d^d r \, V[\psi]} \right\rangle_0" :inline="false" />
                    </div>
                    
                    <p><strong>Feynman图技术：</strong></p>
                    <ul>
                      <li>传播子线：<katex-element expression="G(\vec{k})" :inline="true" /></li>
                      <li>顶点：相互作用项</li>
                      <li>圈图：涨落修正</li>
                    </ul>
                  </div>
                </div>
                
                <div class="method-item">
                  <h4>鞍点方法</h4>
                  <div class="method-content">
                    <p><strong>鞍点条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\delta F}{\delta \psi}\bigg|_{\psi_{\text{sp}}} = 0" :inline="false" />
                    </div>
                    
                    <p><strong>涨落展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F[\psi] = F[\psi_{\text{sp}}] + \frac{1}{2} \int d^d r \, \delta\psi \frac{\delta^2 F}{\delta \psi^2}\bigg|_{\psi_{\text{sp}}} \delta\psi + \cdots" :inline="false" />
                    </div>
                    
                    <p><strong>稳定性分析：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\delta^2 F}{\delta \psi^2} = r + K\nabla^2 + 6b\psi_{\text{sp}}^2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="method-item">
                  <h4>重整化群预备</h4>
                  <div class="method-content">
                    <p><strong>标度变换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{r} \to b\vec{r}, \quad \psi \to \psi' = \zeta \psi" :inline="false" />
                    </div>
                    
                    <p><strong>标度维度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="[\psi] = \frac{d-2}{2}, \quad [r] = 2, \quad [K] = 0" :inline="false" />
                    </div>
                    
                    <p><strong>边际算符：</strong></p>
                    <ul>
                      <li>相关算符：<katex-element expression="r\psi^2" :inline="true" /></li>
                      <li>不相关算符：<katex-element expression="u\psi^4" :inline="true" /> (d > 4)</li>
                      <li>边际算符：<katex-element expression="u\psi^4" :inline="true" /> (d = 4)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="theory-card physical-insights">
            <h3>🔍 物理洞察与解释</h3>
            <div class="theory-content">
              <div class="insight-sections">
                <div class="insight-item">
                  <h4>涨落的几何图像</h4>
                  <div class="insight-content">
                    <p><strong>相关体积：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{corr}} \sim \xi^d" :inline="false" />
                    </div>
                    
                    <p><strong>涨落模式数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="N_{\text{modes}} \sim \frac{V}{\xi^d}" :inline="false" />
                    </div>
                    
                    <p><strong>中心极限定理：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\delta\psi}{\langle\psi\rangle} \sim \frac{1}{\sqrt{N_{\text{modes}}}} \sim \left(\frac{\xi^d}{V}\right)^{1/2}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="insight-item">
                  <h4>能量尺度分析</h4>
                  <div class="insight-content">
                    <p><strong>相互作用能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{int}} \sim J \sim k_B T_c" :inline="false" />
                    </div>
                    
                    <p><strong>涨落能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{fluct}} \sim \frac{k_B T}{\xi^d}" :inline="false" />
                    </div>
                    
                    <p><strong>竞争条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{E_{\text{fluct}}}{E_{\text{int}}} \sim \frac{k_B T}{k_B T_c \xi^d} \sim G_i" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="insight-item">
                  <h4>临界现象的统一描述</h4>
                  <div class="insight-content">
                    <p><strong>标度假设：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f(t,h) = |t|^{2-\alpha} \tilde{f}(h/|t|^{\Delta})" :inline="false" />
                    </div>
                    
                    <p><strong>涨落修正的标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle(\delta\psi)^2\rangle \sim |t|^{-\gamma}" :inline="false" />
                    </div>
                    
                    <p><strong>普适性的起源：</strong></p>
                    <ul>
                      <li>长程关联</li>
                      <li>标度不变性</li>
                      <li>维度和对称性决定</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="theory-card computational-aspects">
            <h3>💻 计算方法与数值技术</h3>
            <div class="theory-content">
              <div class="computational-sections">
                <div class="computational-item">
                  <h4>Monte Carlo方法</h4>
                  <div class="computational-content">
                    <p><strong>Metropolis算法：</strong></p>
                    <div class="algorithm-box">
                      <div class="algorithm-step">1. 随机选择格点</div>
                      <div class="algorithm-step">2. 计算能量变化 ΔE</div>
                      <div class="algorithm-step">3. 接受概率 P = min(1, e^(-βΔE))</div>
                      <div class="algorithm-step">4. 更新配置</div>
                    </div>
                    
                    <p><strong>涨落测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi = \beta V \langle(\delta M)^2\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>有限尺寸标度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi_L = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="computational-item">
                  <h4>分子动力学</h4>
                  <div class="computational-content">
                    <p><strong>Langevin动力学：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial \psi}{\partial t} = -\Gamma \frac{\delta F}{\delta \psi} + \eta(\vec{r},t)" :inline="false" />
                    </div>
                    
                    <p><strong>噪声关联：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\eta(\vec{r},t)\eta(\vec{r}',t')\rangle = 2\Gamma k_B T \delta(\vec{r}-\vec{r}')\delta(t-t')" :inline="false" />
                    </div>
                    
                    <p><strong>动力学临界指数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau \sim \xi^z, \quad z = 2 + \eta" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="computational-item">
                  <h4>机器学习方法</h4>
                  <div class="computational-content">
                    <p><strong>神经网络识别相变：</strong></p>
                    <ul>
                      <li>卷积神经网络(CNN)</li>
                      <li>循环神经网络(RNN)</li>
                      <li>变分自编码器(VAE)</li>
                    </ul>
                    
                    <p><strong>无监督学习：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="L = \mathbb{E}_{q(z|x)}[\log p(x|z)] - D_{KL}(q(z|x)||p(z))" :inline="false" />
                    </div>
                    
                    <p><strong>强化学习优化：</strong></p>
                    <ul>
                      <li>Q-learning算法</li>
                      <li>策略梯度方法</li>
                      <li>Actor-Critic网络</li>
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
                  <h4>散射实验</h4>
                  <div class="technique-content">
                    <p><strong>中子散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{d^2\sigma}{d\Omega dE} = \frac{k_f}{k_i} S(\vec{Q},\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>X射线散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(\vec{Q}) = |F(\vec{Q})|^2 S(\vec{Q})" :inline="false" />
                    </div>
                    
                    <p><strong>光散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(\vec{q},\omega) \propto \frac{\text{Im}\chi(\vec{q},\omega)}{\omega}" :inline="false" />
                    </div>
                    
                    <p><strong>实验优势：</strong></p>
                    <ul>
                      <li>直接测量结构因子</li>
                      <li>动力学信息</li>
                      <li>空间分辨率高</li>
                    </ul>
                  </div>
                </div>
                
                <div class="technique-item">
                  <h4>显微镜技术</h4>
                  <div class="technique-content">
                    <p><strong>扫描隧道显微镜(STM)：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I \propto \int_{-eV}^{0} \rho_s(E) \rho_t(E+eV) T(E,V) dE" :inline="false" />
                    </div>
                    
                    <p><strong>原子力显微镜(AFM)：</strong></p>
                    <ul>
                      <li>表面形貌</li>
                      <li>相分离观察</li>
                      <li>纳米尺度涨落</li>
                    </ul>
                    
                    <p><strong>磁力显微镜(MFM)：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_z = \mu_0 \int \vec{m} \cdot \nabla \vec{H}_{\text{tip}} dV" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="technique-item">
                  <h4>光谱学方法</h4>
                  <div class="technique-content">
                    <p><strong>拉曼散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(\omega) \propto \frac{1}{1-e^{-\hbar\omega/k_B T}} \text{Im}\chi(\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>红外吸收：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha(\omega) = \frac{\omega}{c} \text{Im}\epsilon(\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>角分辨光电子谱(ARPES)：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(\vec{k},\omega) = I_0 |M|^2 f(\omega) A(\vec{k},\omega)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="experiment-card thermodynamic-measurements">
            <h3>🌡️ 热力学测量</h3>
            <div class="experiment-content">
              <div class="thermodynamic-techniques">
                <div class="thermo-technique">
                  <h4>比热测量</h4>
                  <div class="thermo-content">
                    <p><strong>绝热量热法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C = \frac{dQ}{dT} = \frac{P \cdot dt}{dT/dt}" :inline="false" />
                    </div>
                    
                    <p><strong>AC量热法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C = \frac{P_{\text{ac}}}{2\omega T_{\text{ac}}}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落贡献分离：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C = C_{\text{reg}} + C_{\text{fluct}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="thermo-technique">
                  <h4>磁化率测量</h4>
                  <div class="thermo-content">
                    <p><strong>SQUID磁强计：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Phi = \Phi_0 \left(\frac{M \cdot A}{2\pi r^2}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>AC磁化率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(\omega) = \chi'(\omega) - i\chi''(\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>临界行为分析：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi = A|t|^{-\gamma} + B" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="thermo-technique">
                  <h4>介电常数测量</h4>
                  <div class="thermo-content">
                    <p><strong>阻抗分析：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z^* = R + iX = \frac{1}{i\omega C^*}" :inline="false" />
                    </div>
                    
                    <p><strong>频率依赖性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon^*(\omega) = \epsilon'(\omega) - i\epsilon''(\omega)" :inline="false" />
                    </div>
                    
                    <p><strong>Curie-Weiss行为：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon = \epsilon_{\infty} + \frac{C}{T-T_0}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="experiment-card advanced-techniques">
            <h3>🚀 先进测量技术</h3>
            <div class="experiment-content">
              <div class="advanced-techniques">
                <div class="advanced-technique">
                  <h4>μSR技术</h4>
                  <div class="advanced-content">
                    <p><strong>缪子自旋弛豫：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P(t) = \frac{1}{3} + \frac{2}{3} G(t) \cos(\gamma_\mu B t + \phi)" :inline="false" />
                    </div>
                    
                    <p><strong>涨落测量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="G(t) = \exp\left(-\frac{1}{2}\gamma_\mu^2 \langle\Delta B^2\rangle t^2\right)" :inline="false" />
                    </div>
                    
                    <p><strong>应用优势：</strong></p>
                    <ul>
                      <li>局域磁场探测</li>
                      <li>动力学时间尺度</li>
                      <li>体相信息</li>
                    </ul>
                  </div>
                </div>
                
                <div class="advanced-technique">
                  <h4>核磁共振(NMR)</h4>
                  <div class="advanced-content">
                    <p><strong>Knight位移：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="K = \frac{H_{\text{int}}}{H_{\text{ext}}} = A \chi_{\text{spin}}" :inline="false" />
                    </div>
                    
                    <p><strong>弛豫时间：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{1}{T_1} \propto \frac{\text{Im}\chi(\omega_0)}{T}" :inline="false" />
                    </div>
                    
                    <p><strong>涨落谱密度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\omega) = \int_{-\infty}^{\infty} dt \, e^{i\omega t} \langle B(t)B(0)\rangle" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="advanced-technique">
                  <h4>时间分辨技术</h4>
                  <div class="advanced-content">
                    <p><strong>泵浦-探测：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(t) = I_0 + \Delta I(t) e^{-t/\tau}" :inline="false" />
                    </div>
                    
                    <p><strong>太赫兹光谱：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\sigma(\omega) = \sigma_0 \frac{1}{1-i\omega\tau}" :inline="false" />
                    </div>
                    
                    <p><strong>超快动力学：</strong></p>
                    <ul>
                      <li>飞秒激光脉冲</li>
                      <li>相干声子</li>
                      <li>非平衡态</li>
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
            <h3>⚛️ 量子材料中的涨落</h3>
            <div class="development-content">
              <div class="quantum-applications">
                <div class="quantum-item">
                  <h4>高温超导体</h4>
                  <div class="quantum-content">
                    <p><strong>赝能隙现象：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta^*(\vec{k}) = \Delta_0 \cos(k_x a) - \cos(k_y a)" :inline="false" />
                    </div>
                    
                    <p><strong>涨落超导性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T^* - T_c \propto \frac{(\Delta_0)^2}{E_F}" :inline="false" />
                    </div>
                    
                    <p><strong>实验观察：</strong></p>
                    <ul>
                      <li>Nernst效应</li>
                      <li>比热异常</li>
                      <li>磁通涨落</li>
                    </ul>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>量子自旋液体</h4>
                  <div class="quantum-content">
                    <p><strong>RVB态：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\text{RVB}\rangle = \sum_{\{P\}} A_P \prod_{(i,j) \in P} (c_{i\uparrow}^\dagger c_{j\downarrow}^\dagger - c_{i\downarrow}^\dagger c_{j\uparrow}^\dagger)|0\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>自旋子激发：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S(\vec{q},\omega) = \frac{Z_s}{2} \delta(\omega - E_s(\vec{q}))" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑序：</strong></p>
                    <ul>
                      <li>分数化激发</li>
                      <li>长程纠缠</li>
                      <li>拓扑简并</li>
                    </ul>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>拓扑绝缘体</h4>
                  <div class="quantum-content">
                    <p><strong>表面态：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{\text{surf}} = v_F (\sigma_x k_y - \sigma_y k_x)" :inline="false" />
                    </div>
                    
                    <p><strong>涨落效应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\sigma_{xy} = \frac{e^2}{2\pi h} \sum_n \text{sgn}(E_n)" :inline="false" />
                    </div>
                    
                    <p><strong>量子相变：</strong></p>
                    <ul>
                      <li>拓扑-平凡相变</li>
                      <li>Weyl半金属</li>
                      <li>轴子绝缘体</li>
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
                <div class="soft-matter-item">
                  <h4>液晶相变</h4>
                  <div class="soft-matter-content">
                    <p><strong>向列相序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Q_{ij} = \frac{1}{2}\langle 3n_i n_j - \delta_{ij}\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>弹性常数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2} \int d^3 r \left[ K_1(\nabla \cdot \vec{n})^2 + K_2(\vec{n} \cdot \nabla \times \vec{n})^2 + K_3(\vec{n} \times \nabla \times \vec{n})^2 \right]" :inline="false" />
                    </div>
                    
                    <p><strong>缺陷结构：</strong></p>
                    <ul>
                      <li>点缺陷(hedgehog)</li>
                      <li>线缺陷(disclination)</li>
                      <li>壁缺陷</li>
                    </ul>
                  </div>
                </div>
                
                <div class="soft-matter-item">
                  <h4>聚合物相分离</h4>
                  <div class="soft-matter-content">
                    <p><strong>Flory-Huggins理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{k_B T}{v} \left[ \frac{\phi}{N} \ln\phi + \frac{1-\phi}{M} \ln(1-\phi) + \chi \phi(1-\phi) \right]" :inline="false" />
                    </div>
                    
                    <p><strong>临界点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi_c = \frac{1}{2}\left(\frac{1}{\sqrt{N}} + \frac{1}{\sqrt{M}}\right)^2" :inline="false" />
                    </div>
                    
                    <p><strong>动力学：</strong></p>
                    <ul>
                      <li>Cahn-Hilliard方程</li>
                      <li>自旋分解</li>
                      <li>Ostwald熟化</li>
                    </ul>
                  </div>
                </div>
                
                <div class="soft-matter-item">
                  <h4>胶体系统</h4>
                  <div class="soft-matter-content">
                    <p><strong>DLVO理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(r) = V_{\text{vdW}} + V_{\text{elec}} = -\frac{A}{12\pi r^2} + \frac{64\pi R k_B T \rho_{\infty} \gamma^2}{k^2} e^{-kr}" :inline="false" />
                    </div>
                    
                    <p><strong>玻璃化转变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau \sim \exp\left(\frac{A}{T-T_0}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>动力学异质性：</strong></p>
                    <ul>
                      <li>协作重排区域</li>
                      <li>动力学关联长度</li>
                      <li>老化现象</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="development-card biological-systems">
            <h3>🧬 生物系统中的相变</h3>
            <div class="development-content">
              <div class="biological-applications">
                <div class="biological-item">
                  <h4>蛋白质折叠</h4>
                  <div class="biological-content">
                    <p><strong>能量漏斗模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E(Q) = E_0 - \Delta E \cdot Q + \frac{1}{2} k (Q - Q_0)^2" :inline="false" />
                    </div>
                    
                    <p><strong>折叠动力学：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{dQ}{dt} = -\frac{\partial E}{\partial Q} + \eta(t)" :inline="false" />
                    </div>
                    
                    <p><strong>相变特征：</strong></p>
                    <ul>
                      <li>二态折叠</li>
                      <li>多态折叠</li>
                      <li>错误折叠</li>
                    </ul>
                  </div>
                </div>
                
                <div class="biological-item">
                  <h4>细胞膜相分离</h4>
                  <div class="biological-content">
                    <p><strong>脂筏形成：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \int d^2 r \left[ \frac{1}{2} K (\nabla \phi)^2 + f(\phi,T) \right]" :inline="false" />
                    </div>
                    
                    <p><strong>膜蛋白分布：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="c_p(\vec{r}) = c_0 \exp\left(-\frac{U(\phi(\vec{r}))}{k_B T}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>生物功能：</strong></p>
                    <ul>
                      <li>信号转导</li>
                      <li>膜融合</li>
                      <li>胞吞作用</li>
                    </ul>
                  </div>
                </div>
                
                <div class="biological-item">
                  <h4>DNA熔化</h4>
                  <div class="biological-content">
                    <p><strong>Poland-Scheraga模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \sum_{n=0}^{N} \sigma^n s^n g(n)" :inline="false" />
                    </div>
                    
                    <p><strong>熔化曲线：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\theta(T) = \frac{1}{N} \sum_{i=1}^{N} \langle s_i \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>协作性：</strong></p>
                    <ul>
                      <li>氢键网络</li>
                      <li>堆积相互作用</li>
                      <li>熵效应</li>
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
      
      <div class="summary-outlook">
        <div class="summary-framework">
          <div class="summary-card key-concepts">
            <h3>🎯 核心概念总结</h3>
            <div class="summary-content">
              <div class="concept-list">
                <div class="concept-item">
                  <h4>涨落的本质</h4>
                  <p>涨落是统计系统的基本特征，反映了微观无序与宏观有序之间的竞争。</p>
                </div>
                
                <div class="concept-item">
                  <h4>高斯近似</h4>
                  <p>在弱耦合极限下，涨落可用高斯分布描述，提供了解析的理论框架。</p>
                </div>
                
                <div class="concept-item">
                  <h4>涨落-耗散定理</h4>
                  <p>建立了平衡态涨落与非平衡响应之间的普遍关系。</p>
                </div>
                
                <div class="concept-item">
                  <h4>Ginzburg判据</h4>
                  <p>确定了平均场理论的适用范围，揭示了维度的重要性。</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="summary-card future-directions">
            <h3>🚀 未来发展方向</h3>
            <div class="summary-content">
              <div class="direction-list">
                <div class="direction-item">
                  <h4>量子多体系统</h4>
                  <p>量子涨落在强关联系统中的作用，量子临界现象的理论描述。</p>
                </div>
                
                <div class="direction-item">
                  <h4>非平衡态涨落</h4>
                  <p>驱动系统中的涨落定理，活性物质的集体行为。</p>
                </div>
                
                <div class="direction-item">
                  <h4>机器学习应用</h4>
                  <p>人工智能在相变识别和涨落分析中的应用。</p>
                </div>
                
                <div class="direction-item">
                  <h4>跨学科应用</h4>
                  <p>涨落理论在生物学、经济学、社会科学中的推广。</p>
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

.basic-framework, .gaussian-framework, .fd-framework, .criterion-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.framework-card, .gaussian-card, .fd-card, .criterion-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.framework-card.types {
  border-left: 5px solid #10b981;
}

.framework-card.measures {
  border-left: 5px solid #3b82f6;
}

.gaussian-card.formulation {
  border-left: 5px solid #8b5cf6;
}

.gaussian-card.propagator {
  border-left: 5px solid #06b6d4;
}

.gaussian-card.thermodynamics {
  border-left: 5px solid #f59e0b;
}

.fd-card.derivation {
  border-left: 5px solid #ef4444;
}

.fd-card.applications {
  border-left: 5px solid #84cc16;
}

.criterion-card.derivation {
  border-left: 5px solid #ec4899;
}

.criterion-card.examples {
  border-left: 5px solid #f97316;
}

.criterion-card.implications {
  border-left: 5px solid #6366f1;
}

.framework-card h3, .gaussian-card h3, .fd-card h3, .criterion-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.fluctuation-types {
  display: grid;
  gap: 1.5rem;
}

.type-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.type-item.thermal {
  border-left-color: #ef4444;
}

.type-item.quantum {
  border-left-color: #3b82f6;
}

.type-item.critical {
  border-left-color: #10b981;
}

.type-item h4, .measure-item h4, .step-item h4, .calc-step h4, .thermo-item h4, .derivation-step h4, .app-example h4, .derivation-item h4, .system-item h4, .implication-item h4 {
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

.fluctuation-measures, .formulation-steps, .propagator-calculation, .thermodynamic-calculations, .derivation-steps, .application-examples, .criterion-derivation, .system-examples, .implications-analysis {
  display: grid;
  gap: 1.5rem;
}

.asymptotic-behavior {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.behavior-case {
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
  
  .basic-framework, .gaussian-framework, .fd-framework, .criterion-framework {
    grid-template-columns: 1fr;
  }
}
</style>