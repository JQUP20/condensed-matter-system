<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.1.3 费米液体的精髓</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">理论核心</span>
        <span class="reading-time">阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        费米液体理论的精髓在于将复杂的多体相互作用系统简化为准粒子图像，这一革命性的思想不仅解决了金属中电子行为的理解问题，
        更为现代凝聚态物理学奠定了重要的理论基础。本节将深入探讨费米液体理论的核心概念、物理本质以及其深远的理论意义。
      </p>
    </div>

    <div class="content-section">
      <h2>准粒子概念的物理本质</h2>
      
      <div class="quasiparticle-essence">
        <div class="concept-overview">
          <h3>🎯 从多体问题到单粒子图像</h3>
          <div class="concept-content">
            <p class="concept-description">
              费米液体理论的核心洞察是：尽管系统中存在强烈的粒子间相互作用，但在低能激发下，
              系统的行为可以用准粒子的语言来描述，这些准粒子具有重新定义的有效质量和寿命。
            </p>
            
            <div class="transformation-diagram">
              <div class="transformation-step">
                <h4>裸粒子系统</h4>
                <div class="system-description">
                  <ul>
                    <li>N个相互作用的费米子</li>
                    <li>复杂的多体哈密顿量</li>
                    <li>难以精确求解</li>
                  </ul>
                  <div class="equation">
                    <katex-element expression="H = \\sum_i \\frac{p_i^2}{2m} + \\sum_{i \\lt j} V(r_i - r_j)" />
                  </div>
                </div>
              </div>
              
              <div class="arrow">→</div>
              
              <div class="transformation-step">
                <h4>准粒子系统</h4>
                <div class="system-description">
                  <ul>
                    <li>准粒子激发</li>
                    <li>有效单粒子图像</li>
                    <li>可控的理论框架</li>
                  </ul>
                  <div class="equation">
                    <katex-element expression="H_{eff} = \\sum_k \\epsilon_k n_k + \\frac{1}{2}\\sum_{kk'} f_{kk'} n_k n_{k'}" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="quasiparticle-properties">
          <h3>🔬 准粒子的基本性质</h3>
          <div class="properties-grid">
            <div class="property-card">
              <h4>能量-动量关系</h4>
              <div class="property-content">
                <p><strong>费米面附近的线性化：</strong></p>
                <div class="equation">
                  <katex-element expression="\\epsilon_k = v_F^* (|k| - k_F) + O((k-k_F)^2)" />
                </div>
                <p>其中 <katex-element expression="v_F^* = \\frac{\\hbar k_F}{m^*}" :inline="true" /> 是重整化的费米速度。</p>
                
                <p><strong>有效质量：</strong></p>
                <div class="equation">
                  <katex-element expression="\\frac{m^*}{m} = 1 + \\frac{F_1^s}{3}" />
                </div>
                <p>反映了相互作用对动力学的影响。</p>
              </div>
            </div>
            
            <div class="property-card">
              <h4>准粒子寿命</h4>
              <div class="property-content">
                <p><strong>散射率的能量依赖：</strong></p>
                <div class="equation">
                  <katex-element expression="\\frac{1}{\\tau_k} \\propto (\\epsilon_k - \\mu)^2" />
                </div>
                <p>费米面上准粒子寿命无穷大。</p>
                
                <p><strong>温度依赖：</strong></p>
                <div class="equation">
                  <katex-element expression="\\frac{1}{\\tau} \\propto T^2" />
                </div>
                <p>低温下准粒子是良好定义的。</p>
              </div>
            </div>
            
            <div class="property-card">
              <h4>准粒子剩余</h4>
              <div class="property-content">
                <p><strong>波函数重整化：</strong></p>
                <div class="equation">
                  <katex-element expression="Z_k = \\left(1 - \\frac{\\partial \\Sigma(\\omega)}{\\partial \\omega}\\bigg \\|\\omega=\\epsilon_k}\\right)^{-1}" />
                </div>
                <p>其中 <katex-element expression="\\Sigma(\\omega)" :inline="true" /> 是自能。</p>
                
                <p><strong>物理意义：</strong></p>
                <ul>
                  <li><katex-element expression="Z_k < 1" :inline="true" />：相互作用的结果</li>
                  <li><katex-element expression="Z_k \\to 0" :inline="true" />：准粒子图像失效</li>
                  <li><katex-element expression="Z_k \\to 1" :inline="true" />：弱相互作用极限</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>绝热连续性原理</h2>
      
      <div class="adiabatic-continuity">
        <div class="principle-explanation">
          <h3>🌊 基本思想</h3>
          <div class="principle-content">
            <p class="principle-description">
              绝热连续性是费米液体理论的核心原理：如果我们从非相互作用的费米气体出发，
              绝热地开启相互作用，系统的低能激发态与原始费米气体的激发态之间存在一一对应关系。
            </p>
            
            <div class="continuity-process">
              <div class="process-step">
                <h4>步骤1：非相互作用起点</h4>
                <div class="step-content">
                  <p>自由费米气体的基态：</p>
                  <div class="equation">
                    <katex-element expression="|0\\rangle = \\prod_{|k| \\lt k_F} c_k^\\dagger |vac\\rangle" />
                  </div>
                  <p>激发态：粒子-空穴对</p>
                </div>
              </div>
              
              <div class="process-arrow">↓</div>
              
              <div class="process-step">
                <h4>步骤2：绝热演化</h4>
                <div class="step-content">
                  <p>哈密顿量：</p>
                  <div class="equation">
                    <katex-element expression="H(\\lambda) = H_0 + \\lambda V" />
                  </div>
                  <p>其中 <katex-element expression="\\lambda: 0 \\to 1" :inline="true" /> 绝热变化</p>
                </div>
              </div>
              
              <div class="process-arrow">↓</div>
              
              <div class="process-step">
                <h4>步骤3：相互作用终点</h4>
                <div class="step-content">
                  <p>费米液体基态和激发态</p>
                  <p>保持一一对应关系</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="continuity-consequences">
          <h3>📊 重要结果</h3>
          <div class="consequences-grid">
            <div class="consequence-card">
              <h4>费米面的稳定性</h4>
              <div class="consequence-content">
                <p><strong>Luttinger定理：</strong></p>
                <div class="equation">
                  <katex-element expression="k_F = (3\\pi^2 n)^{1/3}" />
                </div>
                <p>费米波矢由粒子密度唯一确定，不受相互作用影响。</p>
                
                <p><strong>费米面体积守恒：</strong></p>
                <ul>
                  <li>相互作用不改变费米面体积</li>
                  <li>费米面形状可能发生变化</li>
                  <li>拓扑性质保持不变</li>
                </ul>
              </div>
            </div>
            
            <div class="consequence-card">
              <h4>激发谱的连续性</h4>
              <div class="consequence-content">
                <p><strong>低能激发：</strong></p>
                <ul>
                  <li>粒子-空穴激发 → 准粒子激发</li>
                  <li>集体模式的出现</li>
                  <li>能隙的缺失（金属性）</li>
                </ul>
                
                <p><strong>选择定则：</strong></p>
                <div class="equation">
                  <katex-element expression="\\langle 0 | c_k | n \\rangle \\neq 0 \\text{ 仅当 } |k| > k_F" />
                </div>
                <p>费米面内部态不可直接激发。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Landau相互作用函数</h2>
      
      <div class="landau-interaction">
        <div class="interaction-definition">
          <h3>🎛️ 相互作用函数的定义</h3>
          <div class="definition-content">
            <p class="definition-description">
              Landau相互作用函数 <katex-element expression="f(k,k')" :inline="true" /> 描述了费米面上准粒子之间的有效相互作用，
              它是费米液体理论中最重要的物理量，决定了系统的所有宏观性质。
            </p>
            
            <div class="interaction-formulation">
              <div class="formulation-card">
                <h4>基本定义</h4>
                <div class="formulation-content">
                  <p><strong>相互作用函数：</strong></p>
                  <div class="equation">
                    <katex-element expression="\\delta \\epsilon_k = \\sum_{k'} f(k,k') \\delta n_{k'}" />
                  </div>
                  <p>准粒子能量对占据数变化的响应。</p>
                  
                  <p><strong>对称性：</strong></p>
                  <div class="equation">
                    <katex-element expression="f(k,k') = f(k',k)" />
                  </div>
                  <p>相互作用的互易性。</p>
                </div>
              </div>
              
              <div class="formulation-card">
                <h4>角动量展开</h4>
                <div class="formulation-content">
                  <p><strong>球谐函数展开：</strong></p>
                  <div class="equation">
                    <katex-element expression="f(\\theta) = \\sum_{l=0}^{\\infty} f_l P_l(\\cos\\theta)" />
                  </div>
                  <p>其中 <katex-element expression="\\theta" :inline="true" /> 是 <katex-element expression="k" :inline="true" /> 和 <katex-element expression="k'" :inline="true" /> 的夹角。</p>
                  
                  <p><strong>Landau参数：</strong></p>
                  <div class="equation">
                    <katex-element expression="F_l = N(0) f_l" />
                  </div>
                  <p>无量纲化的相互作用强度。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="interaction-physics">
          <h3>🔬 物理意义与分类</h3>
          <div class="physics-grid">
            <div class="physics-card">
              <h4>自旋通道分类</h4>
              <div class="physics-content">
                <p><strong>对称通道 (<katex-element expression="F_l^s" :inline="true" />)：</strong></p>
                <ul>
                  <li>自旋平行的准粒子相互作用</li>
                  <li>密度涨落相关</li>
                  <li>影响比热、压缩率等</li>
                </ul>
                
                <p><strong>反对称通道 (<katex-element expression="F_l^a" :inline="true" />)：</strong></p>
                <ul>
                  <li>自旋反平行的准粒子相互作用</li>
                  <li>自旋涨落相关</li>
                  <li>影响磁化率、自旋波等</li>
                </ul>
                
                <div class="equation">
                  <katex-element expression="f_l^{s/a} = \\frac{1}{2}[f_l^{\\uparrow\\uparrow} \\pm f_l^{\\uparrow\\downarrow}]" />
                </div>
              </div>
            </div>
            
            <div class="physics-card">
              <h4>主要Landau参数</h4>
              <div class="physics-content">
                <p><strong><katex-element expression="F_0^s" :inline="true" />：</strong>密度-密度相互作用</p>
                <ul>
                  <li>压缩率：<katex-element expression="\\kappa^{-1} \\propto (1 + F_0^s)" :inline="true" /></li>
                  <li>零声速度：<katex-element expression="v_0^2 \\propto F_0^s/(1+F_0^s)" :inline="true" /></li>
                </ul>
                
                <p><strong><katex-element expression="F_0^a" :inline="true" />：</strong>自旋-自旋相互作用</p>
                <ul>
                  <li>磁化率：<katex-element expression="\\chi \\propto (1 + F_0^a)^{-1}" :inline="true" /></li>
                  <li>自旋波速度：<katex-element expression="v_{sw}^2 \\propto F_0^a/(1+F_0^a)" :inline="true" /></li>
                </ul>
                
                <p><strong><katex-element expression="F_1^s" :inline="true" />：</strong>有效质量增强</p>
                <div class="equation">
                  <katex-element expression="\\frac{m^*}{m} = 1 + \\frac{F_1^s}{3}" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>稳定性条件与相变</h2>
      
      <div class="stability-analysis">
        <div class="stability-conditions">
          <h3>⚖️ Pomeranchuk稳定性条件</h3>
          <div class="conditions-content">
            <p class="conditions-description">
              费米液体的稳定性要求系统对各种扰动都是稳定的，这导致了对Landau参数的约束条件，
              称为Pomeranchuk稳定性条件。
            </p>
            
            <div class="conditions-grid">
              <div class="condition-card">
                <h4>密度通道稳定性</h4>
                <div class="condition-content">
                  <p><strong>条件：</strong></p>
                  <div class="equation">
                    <katex-element expression="F_l^s > -1 \\quad \\text{对所有 } l" />
                  </div>
                  
                  <p><strong>物理意义：</strong></p>
                  <ul>
                    <li><katex-element expression="F_0^s > -1" :inline="true" />：压缩率为正</li>
                    <li><katex-element expression="F_1^s > -3" :inline="true" />：有效质量为正</li>
                    <li><katex-element expression="F_l^s > -1" :inline="true" /> (<katex-element expression="l \\geq 2" :inline="true" />)：费米面稳定</li>
                  </ul>
                  
                  <p><strong>失稳后果：</strong></p>
                  <ul>
                    <li><katex-element expression="F_0^s = -1" :inline="true" />：相分离</li>
                    <li><katex-element expression="F_l^s = -1" :inline="true" /> (<katex-element expression="l \\geq 2" :inline="true" />)：费米面变形</li>
                  </ul>
                </div>
              </div>
              
              <div class="condition-card">
                <h4>自旋通道稳定性</h4>
                <div class="condition-content">
                  <p><strong>条件：</strong></p>
                  <div class="equation">
                    <katex-element expression="F_l^a > -1 \\quad \\text{对所有 } l" />
                  </div>
                  
                  <p><strong>物理意义：</strong></p>
                  <ul>
                    <li><katex-element expression="F_0^a > -1" :inline="true" />：顺磁稳定性</li>
                    <li><katex-element expression="F_1^a > -1" :inline="true" />：自旋流稳定性</li>
                  </ul>
                  
                  <p><strong>失稳后果：</strong></p>
                  <ul>
                    <li><katex-element expression="F_0^a = -1" :inline="true" />：铁磁相变</li>
                    <li><katex-element expression="F_1^a = -1" :inline="true" />：螺旋磁有序</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="phase-transitions">
          <h3>🌀 费米液体失稳与相变</h3>
          <div class="transitions-content">
            <p class="transitions-description">
              当Landau参数接近稳定性边界时，费米液体会发生相变，进入新的有序相。
              这些相变通常伴随着对称性的自发破缺。
            </p>
            
            <div class="transitions-grid">
              <div class="transition-card">
                <h4>磁性相变</h4>
                <div class="transition-content">
                  <p><strong>Stoner判据：</strong></p>
                  <div class="equation">
                    <katex-element expression="F_0^a = -1 \\Rightarrow \\text{铁磁相变}" />
                  </div>
                  
                  <p><strong>相变特征：</strong></p>
                  <ul>
                    <li>自旋旋转对称性破缺</li>
                    <li>自发磁化的出现</li>
                    <li>磁畴结构的形成</li>
                    <li>磁激发谱的重构</li>
                  </ul>
                  
                  <p><strong>实验观测：</strong></p>
                  <ul>
                    <li>居里温度的确定</li>
                    <li>磁化率的发散行为</li>
                    <li>比热异常</li>
                  </ul>
                  
                  <p><strong>实例：</strong></p>
                  <ul>
                    <li>铁磁金属（Fe, Ni, Co）</li>
                    <li>重费米子化合物</li>
                    <li>稀磁半导体</li>
                  </ul>
                </div>
              </div>
              
              <div class="transition-card">
                <h4>向列相变</h4>
                <div class="transition-content">
                  <p><strong>条件：</strong></p>
                  <div class="equation">
                    <katex-element expression="F_2^s = -1 \\Rightarrow \\text{向列相变}" />
                  </div>
                  
                  <p><strong>相变特征：</strong></p>
                  <ul>
                    <li>旋转对称性破缺</li>
                    <li>费米面变形</li>
                    <li>各向异性输运</li>
                  </ul>
                  
                  <p><strong>实例：</strong></p>
                  <ul>
                    <li>Sr₃Ru₂O₇</li>
                    <li>铁基超导体</li>
                    <li>二维电子气</li>
                  </ul>
                </div>
              </div>
              
              <div class="transition-card">
                <h4>超导相变</h4>
                <div class="transition-content">
                  <p><strong>Cooper不稳定性：</strong></p>
                  <div class="equation">
                    <katex-element expression="F_l^{odd} \\lt 0 \\Rightarrow \\text{配对不稳定性}" />
                  </div>
                  
                  <p><strong>相变特征：</strong></p>
                  <ul>
                    <li>U(1)对称性破缺</li>
                    <li>能隙的形式</li>
                    <li>Meissner效应</li>
                  </ul>
                  
                  <p><strong>配对类型：</strong></p>
                  <ul>
                    <li>s波配对（常规超导）</li>
                    <li>p波配对（He-3）</li>
                    <li>d波配对（铜氧化物）</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>费米液体理论的适用范围</h2>
      
      <div class="applicability-scope">
        <div class="valid-regime">
          <h3>✅ 适用条件</h3>
          <div class="regime-content">
            <p class="regime-description">
              费米液体理论在特定条件下是精确的，理解这些条件对于正确应用理论至关重要。
            </p>
            
            <div class="conditions-analysis">
              <div class="analysis-card">
                <h4>温度条件</h4>
                <div class="analysis-content">
                  <p><strong>低温极限：</strong></p>
                  <div class="equation">
                    <katex-element expression="T \\ll T_F, \\quad T \\ll T_{coh}" />
                  </div>
                  <p>其中 <katex-element expression="T_{coh}" :inline="true" /> 是相干温度。</p>
                  
                  <p><strong>物理原因：</strong></p>
                  <ul>
                    <li>费米简并条件</li>
                    <li>准粒子寿命足够长</li>
                    <li>热激发主要在费米面附近</li>
                  </ul>
                </div>
              </div>
              
              <div class="analysis-card">
                <h4>相互作用强度</h4>
                <div class="analysis-content">
                  <p><strong>弱到中等相互作用：</strong></p>
                  <div class="equation">
                    <katex-element expression="r_s = \\frac{1}{k_F a_B} \\lesssim 5-10" />
                  </div>
                  <p>其中 <katex-element expression="a_B" :inline="true" /> 是Bohr半径。</p>
                  
                  <p><strong>准粒子剩余：</strong></p>
                  <div class="equation">
                    <katex-element expression="Z > 0.1-0.2" />
                  </div>
                  <p>准粒子图像仍然有意义。</p>
                </div>
              </div>
              
              <div class="analysis-card">
                <h4>维度效应</h4>
                <div class="analysis-content">
                  <p><strong>三维系统：</strong></p>
                  <ul>
                    <li>费米液体通常稳定</li>
                    <li>相互作用的边际性较弱</li>
                  </ul>
                  
                  <p><strong>二维系统：</strong></p>
                  <ul>
                    <li>相互作用更加重要</li>
                    <li>对数发散需要特殊处理</li>
                  </ul>
                  
                  <p><strong>一维系统：</strong></p>
                  <ul>
                    <li>费米液体通常不稳定</li>
                    <li>Luttinger液体行为</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="breakdown-scenarios">
          <h3>❌ 理论失效的情况</h3>
          <div class="breakdown-content">
            <p class="breakdown-description">
              在某些情况下，费米液体理论会失效，系统表现出非费米液体行为。
            </p>
            
            <div class="breakdown-grid">
              <div class="breakdown-card">
                <h4>强关联系统</h4>
                <div class="breakdown-details">
                  <p><strong>Mott绝缘体：</strong></p>
                  <ul>
                    <li>库仑排斥 <katex-element expression="U \\gg t" :inline="true" /></li>
                    <li>电荷激发有能隙</li>
                    <li>准粒子图像失效</li>
                  </ul>
                  
                  <p><strong>重费米子系统：</strong></p>
                  <ul>
                    <li>Kondo温度附近</li>
                    <li>量子临界点</li>
                    <li>非费米液体行为</li>
                  </ul>
                </div>
              </div>
              
              <div class="breakdown-card">
                <h4>量子临界点</h4>
                <div class="breakdown-details">
                  <p><strong>特征：</strong></p>
                  <ul>
                    <li><katex-element expression="T = 0" :inline="true" /> 相变点</li>
                    <li>量子涨落占主导</li>
                    <li>标度行为</li>
                  </ul>
                  
                  <p><strong>异常性质：</strong></p>
                  <ul>
                    <li><katex-element expression="C/T \\propto -\\ln T" :inline="true" /></li>
                    <li><katex-element expression="\\rho \\propto T^{3/2}" :inline="true" /></li>
                    <li><katex-element expression="\\chi \\propto T^{-1/2}" :inline="true" /></li>
                  </ul>
                </div>
              </div>
              
              <div class="breakdown-card">
                <h4>拓扑相变</h4>
                <div class="breakdown-details">
                  <p><strong>拓扑绝缘体：</strong></p>
                  <ul>
                    <li>体能隙，边界态</li>
                    <li>拓扑保护</li>
                    <li>Z₂分类</li>
                  </ul>
                  
                  <p><strong>Weyl半金属：</strong></p>
                  <ul>
                    <li>线性色散关系</li>
                    <li>手征异常</li>
                    <li>拓扑荷保护</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展与展望</h2>
      
      <div class="modern-developments">
        <div class="theoretical-advances">
          <h3>🚀 理论发展</h3>
          <div class="advances-grid">
            <div class="advance-card">
              <h4>非费米液体理论</h4>
              <div class="advance-content">
                <p><strong>边际费米液体：</strong></p>
                <ul>
                  <li><katex-element expression="\\rho \\propto T" :inline="true" /> 线性电阻</li>
                  <li><katex-element expression="C/T \\propto \\ln T" :inline="true" /> 对数比热</li>
                  <li>铜氧化物超导体</li>
                </ul>
                
                <p><strong>Luttinger液体：</strong></p>
                <ul>
                  <li>一维强关联系统</li>
                  <li>自旋-电荷分离</li>
                  <li>幂律关联函数</li>
                </ul>
              </div>
            </div>
            
            <div class="advance-card">
              <h4>拓扑费米液体</h4>
              <div class="advance-content">
                <p><strong>拓扑不变量：</strong></p>
                <ul>
                  <li>Chern数</li>
                  <li>Z₂指标</li>
                  <li>缠绕数</li>
                </ul>
                
                <p><strong>应用：</strong></p>
                <ul>
                  <li>量子霍尔效应</li>
                  <li>拓扑绝缘体</li>
                  <li>Weyl费米子</li>
                </ul>
              </div>
            </div>
            
            <div class="advance-card">
              <h4>机器学习方法</h4>
              <div class="advance-content">
                <p><strong>神经网络：</strong></p>
                <ul>
                  <li>变分蒙特卡罗</li>
                  <li>深度学习波函数</li>
                  <li>相变识别</li>
                </ul>
                
                <p><strong>数据驱动：</strong></p>
                <ul>
                  <li>材料设计</li>
                  <li>性质预测</li>
                  <li>相图构建</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-frontiers">
          <h3>🔬 实验前沿</h3>
          <div class="frontiers-grid">
            <div class="frontier-card">
              <h4>冷原子系统</h4>
              <div class="frontier-content">
                <p><strong>优势：</strong></p>
                <ul>
                  <li>高度可控</li>
                  <li>参数可调</li>
                  <li>清洁环境</li>
                </ul>
                
                <p><strong>研究内容：</strong></p>
                <ul>
                  <li>BEC-BCS渡越</li>
                  <li>人工规范场</li>
                  <li>多体局域化</li>
                </ul>
              </div>
            </div>
            
            <div class="frontier-card">
              <h4>二维材料</h4>
              <div class="frontier-content">
                <p><strong>石墨烯：</strong></p>
                <ul>
                  <li>Dirac费米子</li>
                  <li>相对论性行为</li>
                  <li>量子霍尔效应</li>
                </ul>
                
                <p><strong>转角双分子层：</strong></p>
                <ul>
                  <li>魔角超导</li>
                  <li>强关联物理</li>
                  <li>Mott绝缘体</li>
                </ul>
              </div>
            </div>
            
            <div class="frontier-card">
              <h4>量子器件</h4>
              <div class="frontier-content">
                <p><strong>量子点：</strong></p>
                <ul>
                  <li>人工原子</li>
                  <li>Kondo效应</li>
                  <li>量子输运</li>
                </ul>
                
                <p><strong>约瑟夫森结：</strong></p>
                <ul>
                  <li>Andreev反射</li>
                  <li>Majorana费米子</li>
                  <li>拓扑量子计算</li>
                  <li>非阿贝尔统计</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>总结与深层思考</h2>
      
      <div class="summary-reflection">
        <div class="key-insights">
          <h3>🎯 核心洞察</h3>
          <div class="insights-content">
            <p class="insights-description">
              费米液体理论的精髓在于其深刻的物理洞察和优雅的数学框架，
              它不仅解决了具体的物理问题，更为我们理解复杂多体系统提供了重要的概念工具。
            </p>
            
            <div class="insights-grid">
              <div class="insight-card">
                <h4>🧠 概念革新</h4>
                <div class="insight-content">
                  <ul>
                    <li><strong>准粒子图像：</strong>将多体问题简化为有效单粒子问题</li>
                    <li><strong>绝热连续性：</strong>建立相互作用与非相互作用系统的联系</li>
                    <li><strong>重整化思想：</strong>低能有效理论的构建</li>
                    <li><strong>涌现现象：</strong>宏观性质从微观相互作用中涌现</li>
                  </ul>
                </div>
              </div>
              
              <div class="insight-card">
                <h4>🔧 方法论意义</h4>
                <div class="insight-content">
                  <ul>
                    <li><strong>现象学方法：</strong>从实验观测出发构建理论</li>
                    <li><strong>对称性分析：</strong>利用对称性约束理论形式</li>
                    <li><strong>稳定性分析：</strong>通过稳定性条件预测相变</li>
                    <li><strong>标度理论：</strong>临界现象的普适性描述</li>
                  </ul>
                </div>
              </div>
              
              <div class="insight-card">
                <h4>🌐 普适性价值</h4>
                <div class="insight-content">
                  <ul>
                    <li><strong>跨学科应用：</strong>从凝聚态到核物理</li>
                    <li><strong>理论框架：</strong>为其他理论提供基础</li>
                    <li><strong>实验指导：</strong>指导实验设计和数据分析</li>
                    <li><strong>技术应用：</strong>电子器件和量子技术</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="future-directions">
          <h3>🚀 未来方向</h3>
          <div class="directions-content">
            <p class="directions-description">
              费米液体理论将继续在现代物理学中发挥重要作用，特别是在以下几个前沿领域：
            </p>
            
            <div class="directions-list">
              <div class="direction-item">
                <h4>🔬 量子多体物理</h4>
                <p>探索强关联系统中的新奇量子相和相变，发展超越费米液体的理论框架。</p>
              </div>
              
              <div class="direction-item">
                <h4>🌌 拓扑物态</h4>
                <p>研究拓扑保护的量子态，开发基于拓扑性质的量子器件和计算方案。</p>
              </div>
              
              <div class="direction-item">
                <h4>🧮 量子计算</h4>
                <p>利用费米子系统实现量子计算，特别是拓扑量子计算的物理实现。</p>
              </div>
              
              <div class="direction-item">
                <h4>🔋 能源材料</h4>
                <p>设计新型热电材料、超导材料和能量存储材料，推动清洁能源技术发展。</p>
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
  background: linear-gradient(135deg, #9f7aea 0%, #805ad5 100%);
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

.quasiparticle-essence {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.concept-overview {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.concept-overview h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.concept-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.transformation-diagram {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
}

.transformation-step {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  flex: 1;
  min-width: 300px;
}

.transformation-step h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
}

.system-description ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.system-description li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.system-description li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.arrow {
  font-size: 2rem;
  color: #9f7aea;
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

.quasiparticle-properties {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.quasiparticle-properties h3 {
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

.property-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.property-content ul {
  list-style: none;
  padding: 0;
}

.property-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.property-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.adiabatic-continuity {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.principle-explanation {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.principle-explanation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.principle-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.continuity-process {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

.process-step {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 500px;
}

.process-step h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
}

.step-content p {
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.process-arrow {
  font-size: 2rem;
  color: #9f7aea;
  font-weight: bold;
}

.continuity-consequences {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.continuity-consequences h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.consequences-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.consequence-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.consequence-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.consequence-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.consequence-content ul {
  list-style: none;
  padding: 0;
}

.consequence-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.consequence-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.landau-interaction {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.interaction-definition {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.interaction-definition h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.definition-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.interaction-formulation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.formulation-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.formulation-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.formulation-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.interaction-physics {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.interaction-physics h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.physics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.physics-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.physics-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.physics-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.physics-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.physics-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.physics-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.stability-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.stability-conditions {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.stability-conditions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.conditions-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.conditions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.condition-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.condition-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.condition-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.condition-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.condition-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.condition-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.phase-transitions {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.phase-transitions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.transitions-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.transitions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.transition-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.transition-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.transition-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.transition-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.transition-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.transition-content li::before {
  content: "◆";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.applicability-scope {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.valid-regime {
  background: #f0fff4;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #9ae6b4;
}

.valid-regime h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.regime-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.conditions-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.analysis-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #9ae6b4;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.analysis-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.analysis-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.analysis-content ul {
  list-style: none;
  padding: 0;
}

.analysis-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.analysis-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #38a169;
  font-weight: bold;
}

.breakdown-scenarios {
  background: #fff5f5;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #feb2b2;
}

.breakdown-scenarios h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.breakdown-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.breakdown-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.breakdown-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #feb2b2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.breakdown-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.breakdown-details p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.breakdown-details ul {
  list-style: none;
  padding: 0;
}

.breakdown-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.breakdown-details li::before {
  content: "⚠";
  position: absolute;
  left: 0;
  color: #e53e3e;
  font-weight: bold;
}

.modern-developments {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.theoretical-advances {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.theoretical-advances h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.advances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.advance-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.advance-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.advance-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.advance-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.advance-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.advance-content li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.experimental-frontiers {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.experimental-frontiers h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.frontiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.frontier-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.frontier-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.frontier-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.frontier-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.frontier-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.frontier-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.summary-reflection {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.key-insights {
  margin-bottom: 2rem;
}

.key-insights h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.insights-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.insight-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.insight-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.insight-content ul {
  list-style: none;
  padding: 0;
}

.insight-content li {
  padding: 0.5rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.insight-content li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #9f7aea;
  font-weight: bold;
}

.future-directions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.directions-description {
  color: #4a5568;
  margin-bottom: 2rem;
  font-size: 1.1rem;
}

.directions-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.direction-item {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.direction-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.direction-item p {
  color: #4a5568;
  margin: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .transformation-diagram {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .properties-grid,
  .consequences-grid,
  .interaction-formulation,
  .physics-grid,
  .conditions-grid,
  .transitions-grid,
  .conditions-analysis,
  .breakdown-grid,
  .advances-grid,
  .frontiers-grid,
  .insights-grid {
    grid-template-columns: 1fr;
  }
}
</style>