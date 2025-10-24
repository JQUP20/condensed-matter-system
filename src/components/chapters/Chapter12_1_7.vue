<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.7 一维固体的电子-声子相互作用</h1>
      <p class="chapter-subtitle">Electron-Phonon Interaction in One-Dimensional Solids</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        电子-声子相互作用是固体物理学中最重要的多体相互作用之一，
        它不仅决定了金属的电阻率、超导性等基本性质，
        也是理解许多量子多体现象的关键。
        在一维系统中，由于相空间的限制和量子涨落的增强，
        电子-声子相互作用表现出许多独特的性质。
        一维系统的低维特性使得电子和声子的散射过程受到严格的动量守恒约束，
        导致了与高维系统截然不同的物理行为。
        本节将系统地介绍一维固体中电子-声子相互作用的理论框架，
        包括相互作用哈密顿量、散射过程、输运性质以及各种集体现象，
        为理解一维量子多体系统的丰富物理提供理论基础。
      </p>
    </div>

    <div class="content-section">
      <h2>电子-声子相互作用哈密顿量</h2>
      
      <h3>总哈密顿量</h3>
      <div class="formula-box">
        <p><strong>总哈密顿量：</strong></p>
        <p>H = H_e + H_ph + H_e-ph</p>
        <p><strong>电子部分：</strong></p>
        <p>H_e = Σₖ εₖ cₖ†cₖ</p>
        <p><strong>声子部分：</strong></p>
        <p>H_ph = Σᵩ ℏωᵩ bᵩ†bᵩ</p>
        <p><strong>相互作用部分：</strong></p>
        <p>H_e-ph = Σₖ,ᵩ gₖ,ᵩ cₖ₊ᵩ†cₖ(bᵩ† + b₋ᵩ)</p>
      </div>

      <div class="concept-box">
        <h4>哈密顿量的物理意义</h4>
        <ul>
          <li><strong>电子项：</strong>自由电子的动能</li>
          <li><strong>声子项：</strong>晶格振动的能量</li>
          <li><strong>相互作用项：</strong>电子与晶格的耦合</li>
          <li><strong>动量守恒：</strong>k + q = k' (模倒格矢)</li>
        </ul>
      </div>

      <h3>耦合常数</h3>
      <div class="formula-box">
        <p><strong>变形势耦合：</strong></p>
        <p>gₖ,ᵩ = D√(ℏ/(2MNωᵩ))</p>
        <p><strong>变形势常数：</strong></p>
        <p>D = ∂εₖ/∂(ln a)</p>
        <p><strong>压电耦合：</strong></p>
        <p>gₖ,ᵩ = (e/ε)√(ℏ/(2MNωᵩ)) · (q/|q|)</p>
        <p><strong>极化子耦合：</strong></p>
        <p>gₖ,ᵩ = (e²/ε)√(2πα/ωᵩ) · (1/√q)</p>
      </div>

      <div class="theory-box">
        <h4>不同耦合机制</h4>
        <ul>
          <li><strong>变形势：</strong>能带边缘随晶格变形的移动</li>
          <li><strong>压电效应：</strong>晶格变形产生的电场</li>
          <li><strong>极化子：</strong>长程库仑相互作用</li>
          <li><strong>磁性耦合：</strong>自旋-轨道耦合效应</li>
        </ul>
      </div>

      <h3>一维系统的特殊性</h3>
      <div class="formula-box">
        <p><strong>动量守恒：</strong></p>
        <p>k' = k ± q (严格的一维约束)</p>
        <p><strong>相空间限制：</strong></p>
        <p>散射只能前向或后向</p>
        <p><strong>奇点结构：</strong></p>
        <p>态密度在费米面附近的奇点</p>
        <p><strong>嵌套效应：</strong></p>
        <p>费米面嵌套导致的不稳定性</p>
      </div>

      <div class="theory-box">
        <h4>一维效应的后果</h4>
        <ul>
          <li><strong>散射增强：</strong>相空间限制增强散射</li>
          <li><strong>不稳定性：</strong>费米面不稳定性</li>
          <li><strong>相变倾向：</strong>容易发生相变</li>
          <li><strong>非费米液体：</strong>偏离费米液体行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>微扰理论处理</h2>
      
      <h3>一阶微扰</h3>
      <div class="formula-box">
        <p><strong>自能一阶修正：</strong></p>
        <p>Σ⁽¹⁾(k,ω) = Σᵩ |gₖ,ᵩ|²⟨nᵩ⟩δ(ω - εₖ)</p>
        <p><strong>声子自能：</strong></p>
        <p>Π⁽¹⁾(q,Ω) = Σₖ |gₖ,ᵩ|²[f(εₖ) - f(εₖ₊ᵩ)]/(Ω - εₖ₊ᵩ + εₖ + iη)</p>
        <p><strong>平均场近似：</strong></p>
        <p>⟨nᵩ⟩ = 1/(e^{βℏωᵩ} - 1)</p>
        <p><strong>温度依赖：</strong></p>
        <p>随温度增加散射增强</p>
      </div>

      <div class="concept-box">
        <h4>一阶效应的特征</h4>
        <ul>
          <li><strong>弹性散射：</strong>不改变电子能量</li>
          <li><strong>温度依赖：</strong>正比于声子占据数</li>
          <li><strong>动量弛豫：</strong>破坏动量守恒</li>
          <li><strong>电阻贡献：</strong>对电阻率的贡献</li>
        </ul>
      </div>

      <h3>二阶微扰</h3>
      <div class="formula-box">
        <p><strong>电子自能：</strong></p>
        <p>Σ⁽²⁾(k,ω) = Σᵩ |gₖ,ᵩ|² ∫ dΩ D(q,Ω)/(ω - εₖ₊ᵩ - Ω + iη)</p>
        <p><strong>声子传播子：</strong></p>
        <p>D(q,Ω) = 2ωᵩ/(Ω² - ωᵩ² + iη)</p>
        <p><strong>频率重整化：</strong></p>
        <p>δεₖ = Re Σ⁽²⁾(k,εₖ)</p>
        <p><strong>准粒子寿命：</strong></p>
        <p>1/τₖ = -2Im Σ⁽²⁾(k,εₖ)/ℏ</p>
      </div>

      <div class="theory-box">
        <h4>二阶效应的物理</h4>
        <ul>
          <li><strong>非弹性散射：</strong>电子能量发生变化</li>
          <li><strong>准粒子图像：</strong>有限寿命的准粒子</li>
          <li><strong>频率依赖：</strong>复杂的频率依赖关系</li>
          <li><strong>温度效应：</strong>非线性温度依赖</li>
        </ul>
      </div>

      <h3>顶点修正</h3>
      <div class="formula-box">
        <p><strong>顶点函数：</strong></p>
        <p>Γ(k,k';q) = gₖ,ᵩ + δΓ(k,k';q)</p>
        <p><strong>Ward恒等式：</strong></p>
        <p>∂Σ(k,ω)/∂ω = -∂Γ(k,k;0)/∂k</p>
        <p><strong>守恒律：</strong></p>
        <p>电荷守恒、动量守恒</p>
        <p><strong>重整化：</strong></p>
        <p>紫外发散的消除</p>
      </div>

      <div class="theory-box">
        <h4>顶点修正的重要性</h4>
        <ul>
          <li><strong>守恒律：</strong>保证物理守恒律</li>
          <li><strong>一致性：</strong>理论的内在一致性</li>
          <li><strong>输运性质：</strong>对输运系数的修正</li>
          <li><strong>临界行为：</strong>相变附近的临界行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>散射过程与输运性质</h2>
      
      <h3>散射率计算</h3>
      <div class="formula-box">
        <p><strong>Fermi黄金定则：</strong></p>
        <p>1/τₖ = (2π/ℏ)Σₖ',ᵩ |gₖ,ᵩ|²δ(εₖ' - εₖ ± ℏωᵩ)[nᵩ + 1/2 ± 1/2]</p>
        <p><strong>发射过程：</strong></p>
        <p>εₖ' = εₖ - ℏωᵩ, 权重 (nᵩ + 1)</p>
        <p><strong>吸收过程：</strong></p>
        <p>εₖ' = εₖ + ℏωᵩ, 权重 nᵩ</p>
        <p><strong>总散射率：</strong></p>
        <p>1/τₖ = 1/τₖ^{em} + 1/τₖ^{abs}</p>
      </div>

      <div class="concept-box">
        <h4>散射过程的特征</h4>
        <ul>
          <li><strong>能量守恒：</strong>严格的能量守恒</li>
          <li><strong>动量守恒：</strong>一维动量守恒约束</li>
          <li><strong>统计权重：</strong>玻色-爱因斯坦分布</li>
          <li><strong>温度依赖：</strong>通过声子占据数</li>
        </ul>
      </div>

      <h3>电导率计算</h3>
      <div class="formula-box">
        <p><strong>Drude公式：</strong></p>
        <p>σ = ne²τ/m*</p>
        <p><strong>Boltzmann方程：</strong></p>
        <p>σ = e² ∫ dk vₖ²τₖ(-∂f/∂εₖ)</p>
        <p><strong>一维情况：</strong></p>
        <p>σ = (e²/π) ∫ dε v²(ε)τ(ε)(-∂f/∂ε)</p>
        <p><strong>温度依赖：</strong></p>
        <p>ρ(T) = ρ₀ + AT^n</p>
      </div>

      <div class="theory-box">
        <h4>一维输运的特点</h4>
        <ul>
          <li><strong>量子化电导：</strong>e²/h的整数倍</li>
          <li><strong>局域化：</strong>Anderson局域化</li>
          <li><strong>相互作用效应：</strong>Luttinger液体行为</li>
          <li><strong>温度依赖：</strong>异常的温度依赖</li>
        </ul>
      </div>

      <h3>热输运性质</h3>
      <div class="formula-box">
        <p><strong>热导率：</strong></p>
        <p>κ = (1/3) ∫ dk vₖ²Cₖτₖ</p>
        <p><strong>比热：</strong></p>
        <p>Cₖ = ∂(εₖnₖ)/∂T</p>
        <p><strong>Wiedemann-Franz定律：</strong></p>
        <p>κ/σT = π²k_B²/(3e²)</p>
        <p><strong>热电效应：</strong></p>
        <p>S = -(π²k_B²T/3e) · (1/σ)(∂σ/∂μ)</p>
      </div>

      <div class="theory-box">
        <h4>热输运的复杂性</h4>
        <ul>
          <li><strong>电子-声子拖拽：</strong>电子和声子的相互拖拽</li>
          <li><strong>非平衡分布：</strong>偏离平衡态分布</li>
          <li><strong>尺寸效应：</strong>有限尺寸的影响</li>
          <li><strong>界面散射：</strong>界面对输运的影响</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Peierls不稳定性</h2>
      
      <h3>费米面嵌套</h3>
      <div class="formula-box">
        <p><strong>嵌套条件：</strong></p>
        <p>k_F + q = -k_F + G</p>
        <p><strong>嵌套矢量：</strong></p>
        <p>q = 2k_F (一维情况)</p>
        <p><strong>电子感受率：</strong></p>
        <p>χ(q,ω) = Σₖ [f(εₖ) - f(εₖ₊ᵩ)]/(ω - εₖ₊ᵩ + εₖ + iη)</p>
        <p><strong>Kohn异常：</strong></p>
        <p>χ(2k_F,0) 发散</p>
      </div>

      <div class="concept-box">
        <h4>嵌套效应的后果</h4>
        <ul>
          <li><strong>不稳定性：</strong>费米面对扰动的不稳定</li>
          <li><strong>相变倾向：</strong>容易发生结构相变</li>
          <li><strong>能隙开启：</strong>在费米面处开启能隙</li>
          <li><strong>CDW形成：</strong>电荷密度波的形成</li>
        </ul>
      </div>

      <h3>Peierls相变</h3>
      <div class="formula-box">
        <p><strong>有效哈密顿量：</strong></p>
        <p>H_eff = Σₖ [εₖcₖ†cₖ + Δ(cₖ₊ᵩ†cₖ + h.c.)]</p>
        <p><strong>能隙方程：</strong></p>
        <p>Δ = -g Σₖ Δ/(2Eₖ) tanh(βEₖ/2)</p>
        <p><strong>准粒子能量：</strong></p>
        <p>Eₖ = √[(εₖ - μ)² + Δ²]</p>
        <p><strong>相变温度：</strong></p>
        <p>T_P ≈ 1.14ℏω_D exp(-1/λ)</p>
      </div>

      <div class="theory-box">
        <h4>Peierls相变的特征</h4>
        <ul>
          <li><strong>二级相变：</strong>连续相变</li>
          <li><strong>能隙开启：</strong>费米面处的能隙</li>
          <li><strong>晶格畸变：</strong>周期性晶格畸变</li>
          <li><strong>电阻跳跃：</strong>相变时电阻的跳跃</li>
        </ul>
      </div>

      <h3>电荷密度波</h3>
      <div class="formula-box">
        <p><strong>电荷密度调制：</strong></p>
        <p>ρ(x) = ρ₀ + ρ₁cos(2k_F x + φ)</p>
        <p><strong>晶格位移：</strong></p>
        <p>u(x) = u₀cos(2k_F x + φ)</p>
        <p><strong>序参量：</strong></p>
        <p>Δ = g⟨u(x)⟩</p>
        <p><strong>相位模式：</strong></p>
        <p>低能激发为相位模式</p>
      </div>

      <div class="theory-box">
        <h4>CDW的性质</h4>
        <ul>
          <li><strong>长程序：</strong>长程的电荷密度调制</li>
          <li><strong>相位刚度：</strong>相位涨落的能量代价</li>
          <li><strong>滑移模式：</strong>CDW的集体滑移</li>
          <li><strong>非线性输运：</strong>阈值电场的存在</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>极化子效应</h2>
      
      <h3>小极化子</h3>
      <div class="formula-box">
        <p><strong>Holstein模型：</strong></p>
        <p>H = -t Σᵢ (cᵢ†cᵢ₊₁ + h.c.) + ℏω₀ Σᵢ bᵢ†bᵢ + g Σᵢ cᵢ†cᵢ(bᵢ† + bᵢ)</p>
        <p><strong>局域化条件：</strong></p>
        <p>g²/(ℏω₀t) > 临界值</p>
        <p><strong>极化子质量：</strong></p>
        <p>m* = m exp(g²/ℏω₀t)</p>
        <p><strong>带宽重整化：</strong></p>
        <p>W* = W exp(-g²/ℏω₀t)</p>
      </div>

      <div class="concept-box">
        <h4>小极化子的特征</h4>
        <ul>
          <li><strong>自陷效应：</strong>电子被声子云自陷</li>
          <li><strong>质量增强：</strong>有效质量显著增加</li>
          <li><strong>带宽窄化：</strong>电子带宽显著减小</li>
          <li><strong>跳跃输运：</strong>非相干的跳跃输运</li>
        </ul>
      </div>

      <h3>大极化子</h3>
      <div class="formula-box">
        <p><strong>Fröhlich模型：</strong></p>
        <p>H = Σₖ εₖcₖ†cₖ + Σᵩ ℏωᵩbᵩ†bᵩ + Σₖ,ᵩ Vᵩ cₖ₊ᵩ†cₖ(bᵩ† + b₋ᵩ)</p>
        <p><strong>耦合常数：</strong></p>
        <p>α = e²/(4πε₀ℏ) √(m/(2ℏω_LO)) (1/ε_∞ - 1/ε_s)</p>
        <p><strong>极化子能量：</strong></p>
        <p>E_p = -αℏω_LO (弱耦合)</p>
        <p><strong>有效质量：</strong></p>
        <p>m*/m = 1 + α/6 (弱耦合)</p>
      </div>

      <div class="theory-box">
        <h4>大极化子的性质</h4>
        <ul>
          <li><strong>长程相互作用：</strong>库仑相互作用主导</li>
          <li><strong>相干输运：</strong>保持相干的能带输运</li>
          <li><strong>质量增强：</strong>适度的质量增强</li>
          <li><strong>迁移率：</strong>温度依赖的迁移率</li>
        </ul>
      </div>

      <h3>极化子输运</h3>
      <div class="formula-box">
        <p><strong>迁移率：</strong></p>
        <p>μ = eτ/m*</p>
        <p><strong>温度依赖：</strong></p>
        <p>μ(T) ∝ T^{-n} (高温)</p>
        <p><strong>指数n：</strong></p>
        <p>n = 1.5 (声学声子), n = 3.5 (光学声子)</p>
        <p><strong>霍尔效应：</strong></p>
        <p>R_H = 1/(nec) · r_H</p>
      </div>

      <div class="theory-box">
        <h4>极化子输运的特点</h4>
        <ul>
          <li><strong>温度依赖：</strong>强烈的温度依赖</li>
          <li><strong>同位素效应：</strong>与离子质量相关</li>
          <li><strong>非线性效应：</strong>强电场下的非线性</li>
          <li><strong>尺寸效应：</strong>纳米尺度的修正</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>超导配对机制</h2>
      
      <h3>Cooper配对</h3>
      <div class="formula-box">
        <p><strong>Cooper问题：</strong></p>
        <p>H = Σₖ εₖ(cₖ↑†cₖ↑ + cₖ↓†cₖ↓) - V Σₖ,ₖ' cₖ↑†c₋ₖ↓†c₋ₖ'↓cₖ'↑</p>
        <p><strong>配对波函数：</strong></p>
        <p>|ψ⟩ = Σₖ gₖ cₖ↑†c₋ₖ↓†|0⟩</p>
        <p><strong>薛定谔方程：</strong></p>
        <p>2εₖgₖ - V Σₖ' gₖ' = Egₖ</p>
        <p><strong>配对能：</strong></p>
        <p>E = -2ℏω_D exp(-2/N(0)V)</p>
      </div>

      <div class="concept-box">
        <h4>Cooper配对的特征</h4>
        <ul>
          <li><strong>动量相反：</strong>k↑和-k↓配对</li>
          <li><strong>自旋相反：</strong>单态配对</li>
          <li><strong>费米面附近：</strong>只有费米面附近电子参与</li>
          <li><strong>相干长度：</strong>配对的空间尺度</li>
        </ul>
      </div>

      <h3>BCS理论</h3>
      <div class="formula-box">
        <p><strong>BCS哈密顿量：</strong></p>
        <p>H = Σₖ εₖ(nₖ↑ + nₖ↓) + Σₖ Δₖ(cₖ↑†c₋ₖ↓† + h.c.)</p>
        <p><strong>能隙方程：</strong></p>
        <p>Δₖ = -Σₖ' Vₖₖ' Δₖ'/(2Eₖ') tanh(βEₖ'/2)</p>
        <p><strong>准粒子能量：</strong></p>
        <p>Eₖ = √[(εₖ - μ)² + |Δₖ|²]</p>
        <p><strong>临界温度：</strong></p>
        <p>k_B T_c = 1.14ℏω_D exp(-1/N(0)V)</p>
      </div>

      <div class="theory-box">
        <h4>BCS理论的成功</h4>
        <ul>
          <li><strong>能隙预言：</strong>成功预言超导能隙</li>
          <li><strong>同位素效应：</strong>T_c ∝ M^{-1/2}</li>
          <li><strong>比热跳跃：</strong>相变时比热的跳跃</li>
          <li><strong>相干峰：</strong>隧道谱中的相干峰</li>
        </ul>
      </div>

      <h3>强耦合效应</h3>
      <div class="formula-box">
        <p><strong>Eliashberg方程：</strong></p>
        <p>Δ(ω) = ∫ dω' K(ω,ω') Δ(ω')/√[ω'² - Δ²(ω')]</p>
        <p><strong>核函数：</strong></p>
        <p>K(ω,ω') = N(0)V ∫ dΩ α²F(Ω)/(ω - ω' - Ω)</p>
        <p><strong>电声谱函数：</strong></p>
        <p>α²F(Ω) = Σᵩ α²ᵩF(Ω)δ(Ω - ωᵩ)</p>
        <p><strong>耦合常数：</strong></p>
        <p>λ = 2 ∫ dΩ α²F(Ω)/Ω</p>
      </div>

      <div class="theory-box">
        <h4>强耦合的表现</h4>
        <ul>
          <li><strong>同位素效应偏离：</strong>偏离M^{-1/2}依赖</li>
          <li><strong>能隙比值：</strong>2Δ/k_B T_c偏离3.5</li>
          <li><strong>声子结构：</strong>隧道谱中的声子结构</li>
          <li><strong>质量增强：</strong>电子有效质量增强</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测与应用</h2>
      
      <h3>光谱学实验</h3>
      <div class="experiment-box">
        <h4>实验技术</h4>
        <ul>
          <li><strong>ARPES：</strong>角分辨光电子谱</li>
          <li><strong>隧道谱：</strong>扫描隧道显微镜</li>
          <li><strong>拉曼散射：</strong>声子-电子耦合</li>
          <li><strong>红外吸收：</strong>电声耦合强度</li>
        </ul>
      </div>

      <h3>输运测量</h3>
      <div class="experiment-box">
        <h4>测量方法</h4>
        <ul>
          <li><strong>电阻率：</strong>温度依赖的电阻率</li>
          <li><strong>霍尔效应：</strong>载流子浓度和迁移率</li>
          <li><strong>热电效应：</strong>Seebeck系数测量</li>
          <li><strong>磁阻：</strong>磁场下的输运性质</li>
        </ul>
      </div>

      <h3>一维材料系统</h3>
      <div class="application-box">
        <h4>典型系统</h4>
        <ul>
          <li><strong>碳纳米管：</strong>一维碳材料</li>
          <li><strong>导电聚合物：</strong>有机一维导体</li>
          <li><strong>量子线：</strong>半导体量子线</li>
          <li><strong>原子链：</strong>表面原子链</li>
        </ul>
      </div>

      <h3>器件应用</h3>
      <div class="application-box">
        <h4>应用前景</h4>
        <ul>
          <li><strong>分子电子学：</strong>单分子器件</li>
          <li><strong>量子器件：</strong>量子输运器件</li>
          <li><strong>热电器件：</strong>一维热电材料</li>
          <li><strong>超导器件：</strong>一维超导体应用</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>理论方法与数值计算</h2>
      
      <h3>解析方法</h3>
      <div class="formula-box">
        <p><strong>玻色化：</strong></p>
        <p>费米子→玻色子映射</p>
        <p><strong>重整化群：</strong></p>
        <p>能标依赖的有效理论</p>
        <p><strong>Bethe ansatz：</strong></p>
        <p>可积模型的精确解</p>
        <p><strong>共形场论：</strong></p>
        <p>临界点的共形不变性</p>
      </div>

      <h3>数值方法</h3>
      <div class="formula-box">
        <p><strong>DMRG：</strong></p>
        <p>密度矩阵重整化群</p>
        <p><strong>量子蒙特卡罗：</strong></p>
        <p>路径积分蒙特卡罗</p>
        <p><strong>精确对角化：</strong></p>
        <p>小系统的精确计算</p>
        <p><strong>张量网络：</strong></p>
        <p>MPS、PEPS等方法</p>
      </div>

      <h3>第一性原理计算</h3>
      <div class="formula-box">
        <p><strong>DFT计算：</strong></p>
        <p>电子结构计算</p>
        <p><strong>声子计算：</strong></p>
        <p>晶格动力学计算</p>
        <p><strong>电声耦合：</strong></p>
        <p>耦合常数的计算</p>
        <p><strong>输运性质：</strong></p>
        <p>Boltzmann输运方程</p>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          一维固体中的电子-声子相互作用展现了丰富而独特的物理现象。
          由于一维系统的特殊几何约束，电子和声子的散射过程受到严格限制，
          导致了许多与高维系统截然不同的行为。
          费米面嵌套效应使得一维金属对Peierls不稳定性极为敏感，
          容易形成电荷密度波或自旋密度波等有序态。
          极化子效应在一维系统中也表现出独特的性质，
          从小极化子的自陷现象到大极化子的相干输运，
          都与电子-声子耦合强度密切相关。
          超导配对机制虽然在严格的一维系统中受到抑制，
          但在准一维系统中仍能观察到有趣的超导现象。
          现代实验技术如ARPES、STM等为研究一维电子-声子相互作用
          提供了强有力的工具，而理论方法如玻色化、DMRG等
          也为理解这些复杂现象提供了深入的洞察。
          一维电子-声子相互作用的研究不仅具有基础科学意义，
          也为分子电子学、量子器件等应用领域提供了重要的理论基础。
        </p>
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
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #2c5aa0;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c5aa0;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2c5aa0;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1ecf4;
}

.content-section h3 {
  color: #34495e;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem 0;
}

.content-section h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-section p {
  margin-bottom: 1rem;
  text-align: justify;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.formula-box p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
}

.concept-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.theory-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.experiment-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);
}

.application-box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(250, 112, 154, 0.4);
}

.summary-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 8px 25px rgba(168, 237, 234, 0.4);
  border-left: 5px solid #2c5aa0;
}

.concept-box ul,
.theory-box ul,
.experiment-box ul,
.application-box ul {
  list-style-type: none;
  padding-left: 0;
}

.concept-box li,
.theory-box li,
.experiment-box li,
.application-box li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-box li::before,
.theory-box li::before,
.experiment-box li::before,
.application-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
}

.content-section ul {
  padding-left: 2rem;
}

.content-section li {
  margin: 0.5rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-section h2 {
    font-size: 1.5rem;
  }
  
  .content-section h3 {
    font-size: 1.3rem;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box {
    padding: 1rem;
  }
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    margin: 0;
    padding: 0;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box,
  .summary-box {
    background: #f8f9fa !important;
    color: #333 !important;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>