<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.1.2 动机：He-3流体</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">实验物理</span>
        <span class="reading-time">阅读时间: 20分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        液态氦-3（He-3）是费米液体理论最重要和最成功的应用实例之一。作为唯一在宏观尺度上表现出费米液体行为的中性费米子系统，
        He-3为验证和发展费米液体理论提供了理想的实验平台。本节将深入探讨He-3的独特性质以及它如何成为费米液体理论发展的重要动机。
      </p>
    </div>

    <div class="content-section">
      <h2>He-3的基本性质</h2>
      
      <div class="properties-overview">
        <div class="property-category">
          <h3>🔬 物理特性</h3>
          <div class="properties-grid">
            <div class="property-card">
              <h4>核性质</h4>
              <div class="property-details">
                <ul>
                  <li><strong>核自旋：</strong>I = 1/2（费米子）</li>
                  <li><strong>磁矩：</strong>μ = -2.127 μ_N</li>
                  <li><strong>质量：</strong>m = 3.016 u</li>
                  <li><strong>同位素丰度：</strong>~1.4 × 10⁻⁶</li>
                </ul>
              </div>
            </div>
            
            <div class="property-card">
              <h4>相图特征</h4>
              <div class="property-details">
                <ul>
                  <li><strong>沸点：</strong>3.19 K（1 atm）</li>
                  <li><strong>临界温度：</strong>3.32 K</li>
                  <li><strong>三相点：</strong>0.31 K, 29.4 bar</li>
                  <li><strong>超流转变：</strong>T_c ≈ 2.5 mK</li>
                </ul>
              </div>
            </div>
            
            <div class="property-card">
              <h4>量子特性</h4>
              <div class="property-details">
                <ul>
                  <li><strong>德布罗意波长：</strong>λ_dB ~ a（原子间距）</li>
                  <li><strong>费米温度：</strong>T_F ≈ 1 K</li>
                  <li><strong>简并参数：</strong>T/T_F << 1（低温下）</li>
                  <li><strong>量子流体：</strong>零点运动占主导</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>为什么选择He-3？</h2>
      
      <div class="motivation-analysis">
        <div class="motivation-grid">
          <div class="motivation-card">
            <div class="motivation-icon">🎯</div>
            <h3>理想的费米系统</h3>
            <div class="motivation-content">
              <p><strong>中性费米子：</strong></p>
              <ul>
                <li>避免了库仑相互作用的复杂性</li>
                <li>相互作用主要通过短程力</li>
                <li>可以精确控制密度和温度</li>
              </ul>
              <p><strong>弱相互作用：</strong></p>
              <div class="equation">
                <katex-element expression="\\frac{U}{E_F} = \\frac{k_F a}{1 + k_F a} \\approx 0.1" />
              </div>
              <p>其中 <katex-element expression="a" :inline="true" /> 是散射长度，<katex-element expression="k_F" :inline="true" /> 是费米波矢。</p>
            </div>
          </div>
          
          <div class="motivation-card">
            <div class="motivation-icon">🌡️</div>
            <h3>可达到的温度范围</h3>
            <div class="motivation-content">
              <p><strong>费米简并区域：</strong></p>
              <ul>
                <li>T_F ≈ 1 K，实验可达 T ~ 1 mK</li>
                <li>T/T_F ~ 10⁻³，深度简并</li>
                <li>费米液体行为清晰可见</li>
              </ul>
              <p><strong>温度依赖性：</strong></p>
              <div class="equation">
                <katex-element expression="C_V \\propto T, \\quad \\chi \\propto T^0, \\quad \\eta \\propto T^{-2}" />
              </div>
            </div>
          </div>
          
          <div class="motivation-card">
            <div class="motivation-icon">🔧</div>
            <h3>实验可控性</h3>
            <div class="motivation-content">
              <p><strong>纯净样品：</strong></p>
              <ul>
                <li>可制备高纯度He-3</li>
                <li>杂质浓度可控制在ppm级别</li>
                <li>避免无序效应</li>
              </ul>
              <p><strong>参数调节：</strong></p>
              <ul>
                <li>压力调节改变密度</li>
                <li>磁场调节自旋相互作用</li>
                <li>几何限制研究维度效应</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>He-3中的费米液体行为</h2>
      
      <div class="fermi-liquid-behavior">
        <div class="behavior-category">
          <h3>📊 热力学性质</h3>
          <div class="behavior-grid">
            <div class="behavior-card">
              <h4>比热</h4>
              <div class="behavior-content">
                <p>线性温度依赖：</p>
                <div class="equation">
                  <katex-element expression="C_V = \\gamma T = \\frac{\\pi^2}{3} k_B^2 N(0) T" />
                </div>
                <p>其中 <katex-element expression="\\gamma" :inline="true" /> 是Sommerfeld系数。</p>
                <div class="experimental-data">
                  <h5>实验数据：</h5>
                  <ul>
                    <li>γ ≈ 2.8 mJ/(mol·K²)</li>
                    <li>有效质量：m*/m ≈ 2.8</li>
                    <li>温度范围：1 mK < T < 100 mK</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="behavior-card">
              <h4>磁化率</h4>
              <div class="behavior-content">
                <p>Pauli磁化率（温度无关）：</p>
                <div class="equation">
                  <katex-element expression="\\chi = \\mu_B^2 N(0) (1 + F_0^a)^{-1}" />
                </div>
                <p>其中 <katex-element expression="F_0^a" :inline="true" /> 是反对称Landau参数。</p>
                <div class="experimental-data">
                  <h5>实验观测：</h5>
                  <ul>
                    <li>χ ≈ 1.05 × 10⁻⁴ emu/mol</li>
                    <li>Wilson比：R_W = χ/(γμ_B²) ≈ 1.05</li>
                    <li>轻微增强的磁化率</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="behavior-category">
          <h3>🌊 输运性质</h3>
          <div class="behavior-grid">
            <div class="behavior-card">
              <h4>粘滞系数</h4>
              <div class="behavior-content">
                <p>T⁻²依赖关系：</p>
                <div class="equation">
                  <katex-element expression="\\eta = \\frac{A}{T^2}" />
                </div>
                <p>这是费米液体理论的标志性预言。</p>
                <div class="experimental-data">
                  <h5>实验验证：</h5>
                  <ul>
                    <li>精确的T⁻²行为</li>
                    <li>温度范围：2 mK < T < 200 mK</li>
                    <li>与理论预言完美符合</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="behavior-card">
              <h4>热导率</h4>
              <div class="behavior-content">
                <p>Wiedemann-Franz定律的类比：</p>
                <div class="equation">
                  <katex-element expression="\\kappa = \\frac{\\pi^2}{3} \\frac{k_B^2 T}{\\eta} \\rho" />
                </div>
                <p>其中 ρ 是密度。</p>
                <div class="experimental-data">
                  <h5>关键特征：</h5>
                  <ul>
                    <li>κ ∝ T⁻¹（低温下）</li>
                    <li>与粘滞系数的关联</li>
                    <li>准粒子输运的体现</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>He-3的基本性质</h2>
      
      <div class="experimental-data">
        <div class="data-category">
          <h3>📊 热力学性质测量</h3>
          <div class="data-grid">
            <div class="data-card">
              <h4>比热容测量</h4>
              <div class="data-content">
                <p><strong>低温行为：</strong></p>
                <div class="equation">
                  <katex-element expression="C_V = \\gamma T + \\beta T^3" />
                </div>
                <p>实验数据：</p>
                <ul>
                  <li>γ = 2.8 mJ/(mol·K²)（理论值的2.8倍）</li>
                  <li>有效质量增强：m*/m ≈ 2.8</li>
                  <li>德拜温度：θ_D ≈ 25 K</li>
                </ul>
                <div class="data-table">
                  <table>
                    <thead>
                      <tr><th>温度 (mK)</th><th>C/T (mJ/mol·K²)</th><th>理论预期</th></tr>
                    </thead>
                    <tbody>
                      <tr><td>10</td><td>2.85</td><td>2.80</td></tr>
                      <tr><td>50</td><td>2.82</td><td>2.80</td></tr>
                      <tr><td>100</td><td>2.79</td><td>2.80</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            <div class="data-card">
              <h4>磁化率测量</h4>
              <div class="data-content">
                <p><strong>Pauli磁化率：</strong></p>
                <div class="equation">
                  <katex-element expression="\\chi = \\chi_0 \\frac{m^*}{m} \\frac{1}{1 + F_0^a}" />
                </div>
                <p>实验结果：</p>
                <ul>
                  <li>χ/χ₀ ≈ 2.8（与比热增强一致）</li>
                  <li>F₀ᵃ ≈ -0.75（强反铁磁关联）</li>
                  <li>温度无关性验证费米液体行为</li>
                </ul>
                <div class="measurement-plot">
                  <p><em>磁化率vs温度曲线显示完美的温度无关性</em></p>
                </div>
              </div>
            </div>
            
            <div class="data-card">
              <h4>输运性质</h4>
              <div class="data-content">
                <p><strong>粘滞系数：</strong></p>
                <div class="equation">
                  <katex-element expression="\\eta = \\frac{A}{T^2}" />
                </div>
                <p>实验观测：</p>
                <ul>
                  <li>A = 1.2 × 10⁻⁴ Pa·s·K²</li>
                  <li>T⁻²依赖性完美验证</li>
                  <li>准粒子散射机制确认</li>
                </ul>
                <p><strong>热导率：</strong></p>
                <div class="equation">
                  <katex-element expression="\\kappa = \\frac{\\pi^2}{3} \\frac{k_B^2 T}{\\eta} \\rho" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Landau参数的精确测定</h2>
      
      <div class="landau-parameters">
        <div class="parameter-analysis">
          <h3>🎯 实验确定方法</h3>
          <div class="methods-grid">
            <div class="method-card">
              <h4>比热容方法</h4>
              <p>通过有效质量确定 <katex-element expression="F_1^s" :inline="true" /></p>
              <div class="equation">
                <katex-element expression="\\frac{m^*}{m} = 1 + \\frac{F_1^s}{3}" />
              </div>
              <p>结果：F₁ˢ = 5.4</p>
            </div>
            
            <div class="method-card">
              <h4>磁化率方法</h4>
              <p>确定反对称参数 <katex-element expression="F_0^a" :inline="true" /></p>
              <div class="equation">
                <katex-element expression="\\frac{\\chi}{\\chi_0} = \\frac{1}{1 + F_0^a}" />
              </div>
              <p>结果：F₀ᵃ = -0.75</p>
            </div>
            
            <div class="method-card">
              <h4>声速测量</h4>
              <p>通过零声速度确定 <katex-element expression="F_0^s" :inline="true" /></p>
              <div class="equation">
                <katex-element expression="v_0^2 = \\frac{v_F^2}{3} \\frac{F_0^s}{1 + F_0^s}" />
              </div>
              <p>结果：F₀ˢ = 10.8</p>
            </div>
          </div>
        </div>
        
        <div class="parameter-table">
          <h3>📋 完整参数表</h3>
          <table class="landau-table">
            <thead>
              <tr>
                <th>参数</th>
                <th>实验值</th>
                <th>理论计算</th>
                <th>测量方法</th>
                <th>精度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><katex-element expression="F_0^s" :inline="true" /></td>
                <td>10.8</td>
                <td>9.5 ± 1.5</td>
                <td>零声速度</td>
                <td>±0.2</td>
              </tr>
              <tr>
                <td><katex-element expression="F_0^a" :inline="true" /></td>
                <td>-0.75</td>
                <td>-0.8 ± 0.1</td>
                <td>磁化率</td>
                <td>±0.05</td>
              </tr>
              <tr>
                <td><katex-element expression="F_1^s" :inline="true" /></td>
                <td>5.4</td>
                <td>4.8 ± 0.8</td>
                <td>有效质量</td>
                <td>±0.1</td>
              </tr>
              <tr>
                <td><katex-element expression="F_1^a" :inline="true" /></td>
                <td>-0.2</td>
                <td>-0.15 ± 0.1</td>
                <td>自旋波</td>
                <td>±0.1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>与其他费米系统的对比</h2>
      
      <div class="system-comparison">
        <div class="comparison-grid">
          <div class="system-card">
            <h3>🔬 液态He-3</h3>
            <div class="system-properties">
              <ul>
                <li><strong>载流子：</strong>中性He-3原子</li>
                <li><strong>相互作用：</strong>短程排斥 + 长程吸引</li>
                <li><strong>密度：</strong>可调（压力控制）</li>
                <li><strong>温度范围：</strong>1 mK - 1 K</li>
                <li><strong>优势：</strong>纯净、可控、理论简单</li>
              </ul>
            </div>
          </div>
          
          <div class="system-card">
            <h3>⚡ 金属电子</h3>
            <div class="system-properties">
              <ul>
                <li><strong>载流子：</strong>传导电子</li>
                <li><strong>相互作用：</strong>库仑 + 电子-声子</li>
                <li><strong>密度：</strong>固定（晶格结构）</li>
                <li><strong>温度范围：</strong>1 K - 1000 K</li>
                <li><strong>复杂性：</strong>多带结构、杂质散射</li>
              </ul>
            </div>
          </div>
          
          <div class="system-card">
            <h3>🧲 重费米子</h3>
            <div class="system-properties">
              <ul>
                <li><strong>载流子：</strong>f电子准粒子</li>
                <li><strong>相互作用：</strong>强关联 + Kondo效应</li>
                <li><strong>密度：</strong>低（局域化程度高）</li>
                <li><strong>温度范围：</strong>1 mK - 100 K</li>
                <li><strong>特征：</strong>巨大有效质量增强</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="comparison-table">
          <h3>📊 定量对比</h3>
          <table class="comparison-data">
            <thead>
              <tr>
                <th>性质</th>
                <th>He-3</th>
                <th>Cu金属</th>
                <th>CeCoIn₅</th>
                <th>单位</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>费米温度 T_F</td>
                <td>1.0</td>
                <td>81,000</td>
                <td>25</td>
                <td>K</td>
              </tr>
              <tr>
                <td>有效质量 m*/m</td>
                <td>2.8</td>
                <td>1.4</td>
                <td>200</td>
                <td>-</td>
              </tr>
              <tr>
                <td>γ系数</td>
                <td>2.8</td>
                <td>0.69</td>
                <td>300</td>
                <td>mJ/mol·K²</td>
              </tr>
              <tr>
                <td>相干温度 T*</td>
                <td>1000</td>
                <td>81,000</td>
                <td>50</td>
                <td>K</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论计算与实验的对比</h2>
      
      <div class="theory-experiment">
        <div class="calculation-methods">
          <h3>🧮 理论计算方法</h3>
          <div class="methods-overview">
            <div class="method-detail">
              <h4>变分蒙特卡罗</h4>
              <p>使用Jastrow-Slater波函数：</p>
              <div class="equation">
                <katex-element expression="\\Psi = \\prod_{i<j} f(r_{ij}) \\det[\\phi_k(r_i)]" />
              </div>
              <ul>
                <li>精确处理关联效应</li>
                <li>预测基态能量：E₀ = -2.47 ± 0.01 K</li>
                <li>计算Landau参数：F₀ˢ = 9.5 ± 1.5</li>
              </ul>
            </div>
            
            <div class="method-detail">
              <h4>费曼图微扰论</h4>
              <p>基于现实He-3势的计算：</p>
              <div class="equation">
                <katex-element expression="F_l = \\sum_n \\frac{\\langle k_F | V | n \\rangle \\langle n | V | k_F \\rangle}{\\epsilon_{k_F} - \\epsilon_n}" />
              </div>
              <ul>
                <li>包含多体关联修正</li>
                <li>预测有效质量增强</li>
                <li>计算输运系数</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="agreement-analysis">
          <h3>📈 理论-实验符合度</h3>
          <div class="agreement-grid">
            <div class="agreement-card excellent">
              <h4>优秀符合 (< 5%误差)</h4>
              <ul>
                <li>比热容 γ 系数</li>
                <li>磁化率增强</li>
                <li>粘滞系数温度依赖</li>
                <li>零声速度</li>
              </ul>
            </div>
            
            <div class="agreement-card good">
              <h4>良好符合 (5-15%误差)</h4>
              <ul>
                <li>F₀ˢ 参数</li>
                <li>自旋波速度</li>
                <li>热导率</li>
                <li>压缩率</li>
              </ul>
            </div>
            
            <div class="agreement-card moderate">
              <h4>中等符合 (15-30%误差)</h4>
              <ul>
                <li>高阶Landau参数</li>
                <li>非线性响应</li>
                <li>有限温度修正</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>超流转变与配对机制</h2>
      
      <div class="superfluid-transition">
        <div class="transition-overview">
          <h3>🌡️ 超流相变</h3>
          <div class="phase-diagram">
            <div class="phase-info">
              <h4>相变温度</h4>
              <p>T_c ≈ 2.5 mK（压力相关）</p>
              <div class="equation">
                <katex-element expression="T_c = 1.14 \\hbar \\omega_D e^{-1/N(0)V}" />
              </div>
              <p>其中V是配对相互作用强度</p>
            </div>
            
            <div class="pairing-mechanism">
              <h4>p波配对</h4>
              <ul>
                <li><strong>对称性：</strong>三重态，奇宇称</li>
                <li><strong>序参量：</strong>矢量 d(k)</li>
                <li><strong>能隙：</strong>各向异性，节点结构</li>
                <li><strong>拓扑性质：</strong>非平凡拓扑不变量</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="pairing-phases">
          <h3>🔄 超流相</h3>
          <div class="phases-grid">
            <div class="phase-card">
              <h4>A相（弱耦合相）</h4>
              <div class="phase-properties">
                <p><strong>序参量：</strong></p>
                <div class="equation">
                  <katex-element expression="\\mathbf{d} = \\Delta_A (\\hat{l} + i\\hat{m}) \\hat{k}" />
                </div>
                <ul>
                  <li>轴对称结构</li>
                  <li>点节点能隙</li>
                  <li>手征性质</li>
                </ul>
              </div>
            </div>
            
            <div class="phase-card">
              <h4>B相（强耦合相）</h4>
              <div class="phase-properties">
                <p><strong>序参量：</strong></p>
                <div class="equation">
                  <katex-element expression="\\mathbf{d} = \\Delta_B (\\hat{l} + i\\hat{m}) e^{i\\phi}" />
                </div>
                <ul>
                  <li>各向同性结构</li>
                  <li>线节点能隙</li>
                  <li>时间反演破缺</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>He-3研究的历史意义</h2>
      
      <div class="historical-significance">
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-year">1956</div>
            <div class="timeline-content">
              <h4>Landau费米液体理论</h4>
              <p>Landau提出费米液体理论，为理解He-3奠定理论基础</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">1961</div>
            <div class="timeline-content">
              <h4>He-3液化成功</h4>
              <p>首次成功液化He-3，开启了He-3物理研究的新纪元</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">1970s</div>
            <div class="timeline-content">
              <h4>费米液体性质验证</h4>
              <p>系统验证了He-3的费米液体行为，确定了Landau参数</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">1972</div>
            <div class="timeline-content">
              <h4>超流He-3发现</h4>
              <p>Osheroff、Richardson和Lee发现超流He-3，获得1996年诺贝尔物理学奖</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="timeline-year">1980s-现在</div>
            <div class="timeline-content">
              <h4>拓扑超流体研究</h4>
              <p>He-3成为研究拓扑超流体和量子场论的理想平台</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代研究前沿</h2>
      
      <div class="modern-research">
        <div class="research-areas">
          <div class="research-card">
            <h3>🔬 拓扑物理</h3>
            <div class="research-content">
              <h4>研究方向：</h4>
              <ul>
                <li>拓扑超流体的边界态</li>
                <li>Majorana费米子的探测</li>
                <li>拓扑相变的研究</li>
                <li>量子几何效应</li>
              </ul>
              <h4>应用前景：</h4>
              <ul>
                <li>拓扑量子计算</li>
                <li>容错量子比特</li>
                <li>新型量子器件</li>
              </ul>
            </div>
          </div>
          
          <div class="research-card">
            <h3>🌌 宇宙学类比</h3>
            <div class="research-content">
              <h4>研究内容：</h4>
              <ul>
                <li>宇宙弦的模拟</li>
                <li>对称性破缺机制</li>
                <li>拓扑缺陷的动力学</li>
                <li>相变的宇宙学意义</li>
              </ul>
              <h4>理论意义：</h4>
              <ul>
                <li>早期宇宙物理</li>
                <li>暗物质候选</li>
                <li>量子引力理论</li>
              </ul>
            </div>
          </div>
          
          <div class="research-card">
            <h3>🔧 量子技术</h3>
            <div class="research-content">
              <h4>技术发展：</h4>
              <ul>
                <li>超灵敏磁力计</li>
                <li>量子陀螺仪</li>
                <li>精密测量技术</li>
                <li>量子传感器</li>
              </ul>
              <h4>应用领域：</h4>
              <ul>
                <li>基础物理常数测量</li>
                <li>引力波探测</li>
                <li>暗物质搜寻</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>总结与展望</h2>
      
      <div class="summary-section">
        <div class="summary-content">
          <h3>🎯 He-3的独特地位</h3>
          <p>
            液态He-3作为费米液体理论的完美实现，不仅验证了Landau的理论预言，
            更为我们理解强关联费米子系统提供了宝贵的实验平台。它的研究推动了：
          </p>
          <ul>
            <li>费米液体理论的完善和发展</li>
            <li>超流体物理的深入理解</li>
            <li>拓扑物态的实验研究</li>
            <li>极低温物理技术的进步</li>
          </ul>
          
          <h3>🚀 未来发展方向</h3>
          <p>
            随着实验技术的不断进步和理论理解的深化，He-3研究将继续在以下方面发挥重要作用：
          </p>
          <ul>
            <li>量子多体物理的基础研究</li>
            <li>拓扑量子计算的实现</li>
            <li>新奇量子态的探索</li>
            <li>精密测量技术的发展</li>
          </ul>
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
  background: linear-gradient(135deg, #4299e1 0%, #3182ce 100%);
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

.properties-overview {
  margin-bottom: 2rem;
}

.property-category {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.property-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.property-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.property-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.property-details ul {
  list-style: none;
  padding: 0;
}

.property-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.property-details li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.motivation-analysis {
  margin-bottom: 2rem;
}

.motivation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.motivation-card {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.motivation-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.motivation-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.motivation-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.motivation-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.motivation-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.motivation-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.equation {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Computer Modern', serif;
  text-align: center;
  overflow-x: auto;
}

.fermi-liquid-behavior {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.behavior-category {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.behavior-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.behavior-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.behavior-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.behavior-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.behavior-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.experimental-data {
  background: #edf2f7;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}

.experimental-data h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.experimental-data ul {
  list-style: none;
  padding: 0;
}

.experimental-data li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.experimental-data li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.landau-parameters {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.parameter-analysis {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.parameter-analysis h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.method-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.method-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.parameter-values {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.parameter-values h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.values-table {
  overflow-x: auto;
}

.values-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.values-table th,
.values-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.values-table th {
  background: #edf2f7;
  font-weight: 600;
  color: #2d3748;
}

.values-table td {
  color: #4a5568;
}

.phase-transitions {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.transition-overview {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.transition-overview h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.transition-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.phases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.phase-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.phase-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.phase-details ul {
  list-style: none;
  padding: 0;
}

.phase-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.phase-details li::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.transition-mechanism {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.transition-mechanism h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.mechanism-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.mechanism-content ul {
  list-style: none;
  padding: 0;
}

.mechanism-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.mechanism-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.experimental-aspects {
  margin-bottom: 2rem;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.technique-card {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.technique-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.technique-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.technique-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.technique-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.technique-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.historical-significance {
  margin-bottom: 2rem;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 100px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
}

.timeline-year {
  background: #4299e1;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 600;
  min-width: 80px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.timeline-content {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  flex: 1;
}

.timeline-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.timeline-content p {
  color: #4a5568;
  margin: 0;
}

.modern-research {
  margin-bottom: 2rem;
}

.research-areas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.research-card {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.research-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.research-content h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.research-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.research-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.research-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

.summary-section {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.summary-content h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.summary-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.summary-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.summary-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.summary-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4299e1;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .properties-grid,
  .motivation-grid,
  .behavior-grid,
  .methods-grid,
  .phases-grid,
  .techniques-grid,
  .research-areas {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 40px;
  }
  
  .timeline-year {
    min-width: 60px;
    font-size: 0.875rem;
  }
}
</style>