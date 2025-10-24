<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.4.1 电磁场涨落诱导的一级相变</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子涨落</span>
        <span class="chapter-tag">Coleman-Weinberg</span>
        <span class="chapter-tag">有效势能</span>
        <span class="reading-time">阅读时间：50分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        电磁场涨落诱导的一级相变是量子场论中的重要现象，它展示了量子涨落如何从根本上改变系统的相变性质。
        即使在经典理论中不存在相变的情况下，量子涨落也可能诱导出一级相变。
        这种现象最早由Coleman和Weinberg在标量电动力学中发现，后来被广泛应用于粒子物理和凝聚态物理中。
        本节将详细探讨这一机制的理论基础、计算方法和物理应用。
      </p>
    </div>

    <div class="content-section">
      <h2>Coleman-Weinberg机制</h2>
      
      <div class="coleman-weinberg">
        <div class="cw-framework">
          <div class="cw-card theory">
            <h3>📚 理论基础</h3>
            <div class="cw-content">
              <div class="cw-theory">
                <div class="theory-item">
                  <h4>标量电动力学</h4>
                  <div class="theory-content">
                    <p><strong>拉格朗日量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu} + |D_\mu\phi|^2 - V(\phi)" :inline="false" />
                    </div>
                    
                    <p><strong>协变导数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="D_\mu = \partial_\mu - ieA_\mu" :inline="false" />
                    </div>
                    
                    <p><strong>经典势能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(\phi) = \lambda|\phi|^4 \quad (\lambda > 0)" :inline="false" />
                    </div>
                    
                    <p><strong>经典基态：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle\phi\rangle = 0 \quad \text{(对称相)}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="theory-item">
                  <h4>量子修正</h4>
                  <div class="theory-content">
                    <p><strong>有效作用量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Gamma[\phi_c] = S[\phi_c] + \hbar \ln \det \left( \frac{\delta^2 S}{\delta\phi^2} \right) + \mathcal{O}(\hbar^2)" :inline="false" />
                    </div>
                    
                    <p><strong>一圈修正：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Gamma^{(1)} = \frac{\hbar}{2} \text{Tr} \ln \left( \frac{\delta^2 S}{\delta\phi^2} \right)" :inline="false" />
                    </div>
                    
                    <p><strong>有效势能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}(\phi) = V_{\text{tree}}(\phi) + V_{\text{1-loop}}(\phi)" :inline="false" />
                    </div>
                    
                    <p><strong>重整化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}^{\text{ren}} = V_{\text{eff}} - \text{发散项}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="theory-item">
                  <h4>对数修正</h4>
                  <div class="theory-content">
                    <p><strong>Coleman-Weinberg势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}(\phi) = \frac{\lambda}{4}|\phi|^4 + \frac{3e^4}{64\pi^2}|\phi|^4 \left[ \ln\left(\frac{|\phi|^2}{\mu^2}\right) - \frac{25}{6} \right]" :inline="false" />
                    </div>
                    
                    <p><strong>β函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta(\lambda) = \frac{3e^4}{16\pi^2} + \mathcal{O}(\lambda e^2)" :inline="false" />
                    </div>
                    
                    <p><strong>临界耦合：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda_c = -\frac{3e^4}{64\pi^2}" :inline="false" />
                    </div>
                    
                    <p><strong>动力学对称破缺：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle|\phi|\rangle = \mu \exp\left(-\frac{8\pi^2}{3e^2}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cw-card calculation">
            <h3>🔢 计算方法</h3>
            <div class="cw-content">
              <div class="cw-calculation">
                <div class="calc-item">
                  <h4>Feynman图计算</h4>
                  <div class="calc-content">
                    <p><strong>一圈图贡献：</strong></p>
                    <div class="diagram-description">
                      <ul>
                        <li>标量自能图</li>
                        <li>光子自能图</li>
                        <li>顶点修正图</li>
                        <li>鬼场贡献</li>
                      </ul>
                    </div>
                    
                    <p><strong>维数正规化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d = 4 - \epsilon, \quad \frac{1}{\epsilon} = \frac{1}{\epsilon} - \gamma + \ln(4\pi)" :inline="false" />
                    </div>
                    
                    <p><strong>MS重整化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda_{\text{ren}} = Z_\lambda \lambda_{\text{bare}}" :inline="false" />
                    </div>
                    
                    <p><strong>重整化群方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\left[ \mu \frac{\partial}{\partial\mu} + \beta(\lambda) \frac{\partial}{\partial\lambda} \right] V_{\text{eff}} = 0" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="calc-item">
                  <h4>有效势能计算</h4>
                  <div class="calc-content">
                    <p><strong>泛函行列式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\det(\Delta + m^2) = \exp\left[ \text{Tr} \ln(\Delta + m^2) \right]" :inline="false" />
                    </div>
                    
                    <p><strong>热核方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\text{Tr} \ln(\Delta + m^2) = -\int_0^\infty \frac{ds}{s} \text{Tr} e^{-s(\Delta + m^2)}" :inline="false" />
                    </div>
                    
                    <p><strong>Schwinger参数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{1-loop}} = \frac{1}{2} \int_0^\infty \frac{ds}{s} e^{-sm^2} \text{Tr} e^{-s\Delta}" :inline="false" />
                    </div>
                    
                    <p><strong>渐近展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\text{Tr} e^{-s\Delta} = \frac{1}{(4\pi s)^{d/2}} \sum_{n=0}^\infty s^n a_n" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="calc-item">
                  <h4>数值方法</h4>
                  <div class="calc-content">
                    <p><strong>格点计算：</strong></p>
                    <ul>
                      <li>Monte Carlo模拟</li>
                      <li>有限尺寸标度</li>
                      <li>连续极限外推</li>
                    </ul>
                    
                    <p><strong>变分方法：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}^{\text{var}} = \min_{\Omega} \langle\Omega|H|\Omega\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>大N展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}} = \sum_{n=0}^\infty \frac{V_n}{N^n}" :inline="false" />
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
      <h2>有效势能理论</h2>
      
      <div class="effective-potential">
        <div class="ep-framework">
          <div class="ep-card general">
            <h3>🎯 一般理论</h3>
            <div class="ep-content">
              <div class="ep-general">
                <div class="general-item">
                  <h4>定义与性质</h4>
                  <div class="general-content">
                    <p><strong>有效势能定义：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}(\phi_c) = -\frac{\Gamma[\phi_c]}{V_4}" :inline="false" />
                    </div>
                    
                    <p><strong>平衡条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial V_{\text{eff}}}{\partial \phi_c} = 0" :inline="false" />
                    </div>
                    
                    <p><strong>稳定性条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial^2 V_{\text{eff}}}{\partial \phi_c^2} > 0" :inline="false" />
                    </div>
                    
                    <p><strong>相变判据：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}(\phi_1) = V_{\text{eff}}(\phi_2), \quad \phi_1 \neq \phi_2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="general-item">
                  <h4>重整化群改进</h4>
                  <div class="general-content">
                    <p><strong>RG改进有效势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}^{\text{RG}}(\phi) = V_{\text{eff}}(\phi, \lambda(\phi))" :inline="false" />
                    </div>
                    
                    <p><strong>跑动耦合：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda(t) = \lambda_0 + \beta_0 t + \frac{1}{2}\beta_1 t^2 + \ldots" :inline="false" />
                    </div>
                    
                    <p><strong>尺度选择：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\mu^2 = \xi |\phi|^2, \quad \xi \sim 1" :inline="false" />
                    </div>
                    
                    <p><strong>改进精度：</strong></p>
                    <ul>
                      <li>消除大对数</li>
                      <li>改善收敛性</li>
                      <li>减少尺度依赖</li>
                    </ul>
                  </div>
                </div>
                
                <div class="general-item">
                  <h4>有限温度效应</h4>
                  <div class="general-content">
                    <p><strong>有限温度有效势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}(T) = V_0 + V_T + V_{\text{ring}}" :inline="false" />
                    </div>
                    
                    <p><strong>热修正：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_T = \frac{T^4}{2\pi^2} \sum_i g_i \int_0^\infty dk \, k^2 \ln(1 \pm e^{-E_i/T})" :inline="false" />
                    </div>
                    
                    <p><strong>Daisy图重求和：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{ring}} = -\frac{T}{12\pi} \sum_n (m_n^3 - m_{n,0}^3)" :inline="false" />
                    </div>
                    
                    <p><strong>相变温度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_c: \quad V_{\text{eff}}(0, T_c) = V_{\text{eff}}(\phi_{\min}, T_c)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="ep-card applications">
            <h3>🔬 具体应用</h3>
            <div class="ep-content">
              <div class="ep-applications">
                <div class="app-item">
                  <h4>标准模型Higgs</h4>
                  <div class="app-content">
                    <p><strong>Higgs势能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V = -\mu^2 |\Phi|^2 + \lambda |\Phi|^4" :inline="false" />
                    </div>
                    
                    <p><strong>顶夸克贡献：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_t = -\frac{3y_t^4}{16\pi^2} |\Phi|^4 \ln\left(\frac{y_t^2 |\Phi|^2}{\mu^2}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>规范玻色子贡献：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_W = \frac{3g^4 + 2g^4 + g'^4}{64\pi^2} |\Phi|^4 \ln\left(\frac{g^2 |\Phi|^2}{\mu^2}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>真空稳定性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\lambda_{\text{eff}}(\mu) > 0 \quad \forall \mu < M_{\text{Pl}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="app-item">
                  <h4>超对称模型</h4>
                  <div class="app-content">
                    <p><strong>MSSM Higgs势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V = \frac{g^2 + g'^2}{8}(|H_1|^2 - |H_2|^2)^2 + |y_t A_t H_1 H_2|^2" :inline="false" />
                    </div>
                    
                    <p><strong>辐射修正：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta V = \frac{3y_t^4}{16\pi^2} |H_2|^4 \ln\left(\frac{m_{\tilde{t}}^2}{m_t^2}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>电弱对称破缺：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle H_1 \rangle = v_1, \quad \langle H_2 \rangle = v_2" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="app-item">
                  <h4>额外维度模型</h4>
                  <div class="app-content">
                    <p><strong>Randall-Sundrum模型：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="ds^2 = e^{-2k|y|} \eta_{\mu\nu} dx^\mu dx^\nu + dy^2" :inline="false" />
                    </div>
                    
                    <p><strong>有效4D理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}} = V_4 + \sum_n V_n e^{-2nkR}" :inline="false" />
                    </div>
                    
                    <p><strong>层级问题：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="M_{\text{Pl}} e^{-kR\pi} \sim \text{TeV}" :inline="false" />
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
      <h2>瞬子效应与拓扑相变</h2>
      
      <div class="instanton-effects">
        <div class="inst-framework">
          <div class="inst-card classical">
            <h3>🌀 经典瞬子解</h3>
            <div class="inst-content">
              <div class="classical-instantons">
                <div class="classical-item">
                  <h4>Yang-Mills瞬子</h4>
                  <div class="classical-content">
                    <p><strong>自对偶条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\mu\nu} = \pm \tilde{F}_{\mu\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>BPST瞬子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="A_\mu^a = \frac{2\eta_{\mu\nu}^a x_\nu}{x^2 + \rho^2}, \quad \bar{\eta}_{\mu\nu}^a = -\eta_{\mu\nu}^a" :inline="false" />
                    </div>
                    
                    <p><strong>作用量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_{\text{inst}} = \frac{8\pi^2}{g^2}" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑荷：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Q = \frac{1}{32\pi^2} \int d^4x \, \text{Tr}[F_{\mu\nu} \tilde{F}^{\mu\nu}]" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="classical-item">
                  <h4>标量场瞬子</h4>
                  <div class="classical-content">
                    <p><strong>kink解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\phi(x) = v \tanh\left(\frac{x}{\sqrt{2}\xi}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>能量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{kink}} = \frac{4\sqrt{2}}{3} \frac{v^3}{\sqrt{\lambda}}" :inline="false" />
                    </div>
                    
                    <p><strong>bounce解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{d^2\phi}{d\tau^2} + \frac{3}{\tau}\frac{d\phi}{d\tau} = \frac{dV}{d\phi}" :inline="false" />
                    </div>
                    
                    <p><strong>隧穿速率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Gamma \sim e^{-S_E/\hbar}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="classical-item">
                  <h4>磁单极子</h4>
                  <div class="classical-content">
                    <p><strong>'t Hooft-Polyakov单极子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="A_i^a = \frac{\epsilon_{ija} x_j}{gr^2} [1 - K(gr)]" :inline="false" />
                    </div>
                    
                    <p><strong>磁荷：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="g_m = \frac{4\pi}{e}" :inline="false" />
                    </div>
                    
                    <p><strong>质量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="M = \frac{4\pi v}{e} f(\lambda/e^2)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="inst-card quantum">
            <h3>⚛️ 量子瞬子效应</h3>
            <div class="inst-content">
              <div class="quantum-instantons">
                <div class="quantum-item">
                  <h4>路径积分方法</h4>
                  <div class="quantum-content">
                    <p><strong>欧几里得路径积分：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \int \mathcal{D}A \, e^{-S_E[A]}" :inline="false" />
                    </div>
                    
                    <p><strong>鞍点展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \sum_{\text{instantons}} e^{-S_{\text{inst}}} \det^{-1/2}(\Delta)" :inline="false" />
                    </div>
                    
                    <p><strong>零模积分：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\int d^4x_0 \int d\rho \, \rho^{-5} = \text{发散}" :inline="false" />
                    </div>
                    
                    <p><strong>集体坐标：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="A_\mu = A_\mu^{\text{inst}}(x-x_0, \rho) + \text{量子涨落}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>瞬子液体模型</h4>
                  <div class="quantum-content">
                    <p><strong>瞬子密度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="n(\rho) = d(\rho) e^{-S_{\text{inst}}} \rho^{-5}" :inline="false" />
                    </div>
                    
                    <p><strong>相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{I\bar{I}} = \frac{16\pi^2}{g^2} \frac{\rho_1 \rho_2}{R^2}" :inline="false" />
                    </div>
                    
                    <p><strong>配分函数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Z = \sum_{N,\bar{N}} \frac{1}{N!\bar{N}!} \int \prod_i d^4x_i d\rho_i \, e^{-\sum V_{ij}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="quantum-item">
                  <h4>手征对称破缺</h4>
                  <div class="quantum-content">
                    <p><strong>Atiyah-Singer指标定理：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="n_+ - n_- = Q" :inline="false" />
                    </div>
                    
                    <p><strong>零模费米子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\not{D} \psi = 0" :inline="false" />
                    </div>
                    
                    <p><strong>手征凝聚：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\langle \bar{\psi}\psi \rangle \neq 0" :inline="false" />
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
      <h2>凝聚态物理应用</h2>
      
      <div class="condensed-matter-apps">
        <div class="cm-framework">
          <div class="cm-card superconductors">
            <h3>⚡ 超导体</h3>
            <div class="cm-content">
              <div class="sc-applications">
                <div class="sc-item">
                  <h4>涨落诱导配对</h4>
                  <div class="sc-content">
                    <p><strong>有效相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{eff}}(k,k') = V_{\text{Coulomb}} + V_{\text{phonon}} + V_{\text{fluctuation}}" :inline="false" />
                    </div>
                    
                    <p><strong>自旋涨落：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V_{\text{sf}}(q,\omega) = \frac{g^2 \chi(q,\omega)}{1 + U\chi(q,\omega)}" :inline="false" />
                    </div>
                    
                    <p><strong>d波配对：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta(\vec{k}) = \Delta_0 (\cos k_x - \cos k_y)" :inline="false" />
                    </div>
                    
                    <p><strong>临界温度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_c = 1.14 \omega_D e^{-1/N(0)V}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sc-item">
                  <h4>量子相变</h4>
                  <div class="sc-content">
                    <p><strong>超导-绝缘体相变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -t \sum_{\langle i,j \rangle} c_i^\dagger c_j + U \sum_i n_{i\uparrow} n_{i\downarrow}" :inline="false" />
                    </div>
                    
                    <p><strong>Josephson结阵列：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -E_J \sum_{\langle i,j \rangle} \cos(\phi_i - \phi_j) + E_C \sum_i n_i^2" :inline="false" />
                    </div>
                    
                    <p><strong>量子临界点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_J/E_C = (E_J/E_C)_c" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sc-item">
                  <h4>拓扑超导</h4>
                  <div class="sc-content">
                    <p><strong>Kitaev链：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -\mu \sum_i c_i^\dagger c_i - t \sum_i (c_i^\dagger c_{i+1} + h.c.) + \Delta \sum_i (c_i c_{i+1} + h.c.)" :inline="false" />
                    </div>
                    
                    <p><strong>拓扑不变量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\nu = \frac{1}{2\pi i} \oint dk \, \frac{d}{dk} \ln[\Delta(k) + it(k)]" :inline="false" />
                    </div>
                    
                    <p><strong>Majorana费米子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = \gamma^\dagger" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cm-card quantum-magnets">
            <h3>🧲 量子磁体</h3>
            <div class="cm-content">
              <div class="qm-applications">
                <div class="qm-item">
                  <h4>自旋液体</h4>
                  <div class="qm-content">
                    <p><strong>RVB态：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\text{RVB}\rangle = \prod_{\langle i,j \rangle} (c_{i\uparrow}^\dagger c_{j\downarrow}^\dagger - c_{i\downarrow}^\dagger c_{j\uparrow}^\dagger)|0\rangle" :inline="false" />
                    </div>
                    
                    <p><strong>规范场理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = \sum_{\langle i,j \rangle} t_{ij} f_i^\dagger U_{ij} f_j + h.c." :inline="false" />
                    </div>
                    
                    <p><strong>分数化激发：</strong></p>
                    <ul>
                      <li>spinon (自旋1/2)</li>
                      <li>holon (电荷e)</li>
                      <li>规范场激发</li>
                    </ul>
                  </div>
                </div>
                
                <div class="qm-item">
                  <h4>量子自旋冰</h4>
                  <div class="qm-content">
                    <p><strong>有效哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = J_{zz} \sum_{\langle i,j \rangle} S_i^z S_j^z + J_\pm \sum_{\langle i,j \rangle} (S_i^+ S_j^- + S_i^- S_j^+)" :inline="false" />
                    </div>
                    
                    <p><strong>磁单极子激发：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\nabla \cdot \vec{B} = 2\pi \rho_m" :inline="false" />
                    </div>
                    
                    <p><strong>光子模式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega \propto |\vec{k}|" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="qm-item">
                  <h4>Kitaev模型</h4>
                  <div class="qm-content">
                    <p><strong>各向异性交换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = J_x \sum_{x\text{-links}} S_i^x S_j^x + J_y \sum_{y\text{-links}} S_i^y S_j^y + J_z \sum_{z\text{-links}} S_i^z S_j^z" :inline="false" />
                    </div>
                    
                    <p><strong>精确解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S_i^\alpha = \frac{i}{2} b_i c_i^\alpha" :inline="false" />
                    </div>
                    
                    <p><strong>非阿贝尔任意子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\psi\rangle \to U|\psi\rangle, \quad U \in \text{非阿贝尔群}" :inline="false" />
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
      <h2>实验观测与验证</h2>
      
      <div class="experimental-verification">
        <div class="exp-framework">
          <div class="exp-card techniques">
            <h3>🔬 实验技术</h3>
            <div class="exp-content">
              <div class="exp-techniques">
                <div class="tech-item">
                  <h4>光谱学方法</h4>
                  <div class="tech-content">
                    <p><strong>角分辨光电子谱：</strong></p>
                    <ul>
                      <li>能带结构测量</li>
                      <li>超导能隙</li>
                      <li>费米面拓扑</li>
                    </ul>
                    
                    <p><strong>拉曼散射：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I(\omega) \propto \text{Im}[\chi(\omega)]" :inline="false" />
                    </div>
                    
                    <p><strong>中子散射：</strong></p>
                    <ul>
                      <li>磁激发谱</li>
                      <li>自旋关联</li>
                      <li>晶格动力学</li>
                    </ul>
                  </div>
                </div>
                
                <div class="tech-item">
                  <h4>输运测量</h4>
                  <div class="tech-content">
                    <p><strong>电阻率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\rho(T) = \rho_0 + AT^n" :inline="false" />
                    </div>
                    
                    <p><strong>Hall效应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="R_H = \frac{1}{ne}" :inline="false" />
                    </div>
                    
                    <p><strong>热电效应：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = -\frac{\pi^2 k_B^2 T}{3e} \frac{1}{n} \frac{dn}{dE}\bigg|_{E_F}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="tech-item">
                  <h4>磁性测量</h4>
                  <div class="tech-content">
                    <p><strong>磁化率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\chi(T) = \frac{C}{T - \theta}" :inline="false" />
                    </div>
                    
                    <p><strong>比热：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="C = \gamma T + \beta T^3" :inline="false" />
                    </div>
                    
                    <p><strong>μSR：</strong></p>
                    <ul>
                      <li>局域磁场</li>
                      <li>磁有序</li>
                      <li>超导穿透深度</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="exp-card observations">
            <h3>📊 实验观测</h3>
            <div class="exp-content">
              <div class="exp-observations">
                <div class="obs-item">
                  <h4>高温超导体</h4>
                  <div class="obs-content">
                    <p><strong>赝能隙现象：</strong></p>
                    <ul>
                      <li>T* > Tc</li>
                      <li>费米弧</li>
                      <li>自旋涨落</li>
                    </ul>
                    
                    <p><strong>d波配对：</strong></p>
                    <ul>
                      <li>相敏实验</li>
                      <li>ARPES测量</li>
                      <li>约瑟夫森结</li>
                    </ul>
                    
                    <p><strong>条纹相：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="Q = (\pi \pm 2\pi\delta, \pi), (\pi, \pi \pm 2\pi\delta)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="obs-item">
                  <h4>量子自旋液体</h4>
                  <div class="obs-content">
                    <p><strong>候选材料：</strong></p>
                    <ul>
                      <li>κ-(BEDT-TTF)₂Cu₂(CN)₃</li>
                      <li>ZnCu₃(OH)₆Cl₂ (herbertsmithite)</li>
                      <li>YbMgGaO₄</li>
                    </ul>
                    
                    <p><strong>特征信号：</strong></p>
                    <ul>
                      <li>线性比热</li>
                      <li>幂律自旋关联</li>
                      <li>连续激发谱</li>
                    </ul>
                  </div>
                </div>
                
                <div class="obs-item">
                  <h4>拓扑材料</h4>
                  <div class="obs-content">
                    <p><strong>拓扑绝缘体：</strong></p>
                    <ul>
                      <li>Bi₂Se₃, Bi₂Te₃</li>
                      <li>表面态</li>
                      <li>自旋-动量锁定</li>
                    </ul>
                    
                    <p><strong>Weyl半金属：</strong></p>
                    <ul>
                      <li>TaAs, WTe₂</li>
                      <li>Weyl点</li>
                      <li>手征异常</li>
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
  flex-wrap: wrap;
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

.cw-framework, .ep-framework, .inst-framework, .cm-framework, .exp-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.cw-card, .ep-card, .inst-card, .cm-card, .exp-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.cw-card.theory {
  border-left: 5px solid #10b981;
}

.cw-card.calculation {
  border-left: 5px solid #3b82f6;
}

.ep-card.general {
  border-left: 5px solid #8b5cf6;
}

.ep-card.applications {
  border-left: 5px solid #f59e0b;
}

.inst-card.classical {
  border-left: 5px solid #ef4444;
}

.inst-card.quantum {
  border-left: 5px solid #06b6d4;
}

.cm-card.superconductors {
  border-left: 5px solid #ec4899;
}

.cm-card.quantum-magnets {
  border-left: 5px solid #84cc16;
}

.exp-card.techniques {
  border-left: 5px solid #6366f1;
}

.exp-card.observations {
  border-left: 5px solid #f97316;
}

.cw-card h3, .ep-card h3, .inst-card h3, .cm-card h3, .exp-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.cw-theory, .cw-calculation, .ep-general, .ep-applications, .classical-instantons, .quantum-instantons, .sc-applications, .qm-applications, .exp-techniques, .exp-observations {
  display: grid;
  gap: 1.5rem;
}

.theory-item, .calc-item, .general-item, .app-item, .classical-item, .quantum-item, .sc-item, .qm-item, .tech-item, .obs-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.theory-item h4, .calc-item h4, .general-item h4, .app-item h4, .classical-item h4, .quantum-item h4, .sc-item h4, .qm-item h4, .tech-item h4, .obs-item h4 {
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

.diagram-description {
  background: #fef7cd;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .cw-framework, .ep-framework, .inst-framework, .cm-framework, .exp-framework {
    grid-template-columns: 1fr;
  }
}
</style>