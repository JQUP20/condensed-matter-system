<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.5 声子Green函数</h1>
      <p class="chapter-subtitle">Phonon Green's Functions</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        Green函数是多体理论中的核心概念，为研究量子多体系统提供了强有力的理论工具。
        在声子系统中，Green函数不仅描述了声子的传播行为，
        还包含了系统的所有动力学信息和热力学性质。
        通过Green函数，我们可以计算声子谱、态密度、输运系数等重要物理量，
        并且能够系统地处理声子-声子相互作用、声子-电子耦合等复杂问题。
        本节将详细介绍声子Green函数的定义、性质、计算方法以及物理应用，
        为理解更复杂的多体现象奠定基础。
      </p>
    </div>

    <div class="content-section">
      <h2>Green函数的定义</h2>
      
      <h3>时间有序Green函数</h3>
      <div class="formula-box">
        <p><strong>定义：</strong></p>
        <p>G(k,t-t') = -i⟨T[uₖ(t)u₋ₖ(t')]⟩</p>
        <p><strong>时间排序算符：</strong></p>
        <p>T[A(t)B(t')] = θ(t-t')A(t)B(t') + θ(t'-t)B(t')A(t)</p>
        <p><strong>阶跃函数：</strong></p>
        <p>θ(t) = 1 (t > 0), θ(t) = 0 (t < 0)</p>
        <p><strong>频率表示：</strong></p>
        <p>G(k,ω) = ∫_{-∞}^{∞} dt e^{iωt} G(k,t)</p>
      </div>

      <div class="concept-box">
        <h4>Green函数的基本性质</h4>
        <ul>
          <li><strong>因果性：</strong>时间排序保证因果关系</li>
          <li><strong>解析性：</strong>在复频率平面上的解析结构</li>
          <li><strong>对称性：</strong>反映系统的对称性</li>
          <li><strong>完整性：</strong>包含系统的全部信息</li>
        </ul>
      </div>

      <h3>推迟和超前Green函数</h3>
      <div class="formula-box">
        <p><strong>推迟Green函数：</strong></p>
        <p>G^R(k,t) = -iθ(t)⟨[uₖ(t), u₋ₖ(0)]⟩</p>
        <p><strong>超前Green函数：</strong></p>
        <p>G^A(k,t) = iθ(-t)⟨[uₖ(t), u₋ₖ(0)]⟩</p>
        <p><strong>对易子：</strong></p>
        <p>[uₖ(t), u₋ₖ(0)] = uₖ(t)u₋ₖ(0) - u₋ₖ(0)uₖ(t)</p>
        <p><strong>关系：</strong></p>
        <p>G^A(k,ω) = [G^R(k,ω)]^*</p>
      </div>

      <div class="theory-box">
        <h4>推迟和超前函数的意义</h4>
        <ul>
          <li><strong>物理响应：</strong>描述系统对外界扰动的响应</li>
          <li><strong>因果性：</strong>严格满足因果性要求</li>
          <li><strong>实验对应：</strong>与实验测量直接相关</li>
          <li><strong>解析延拓：</strong>通过解析延拓相互联系</li>
        </ul>
      </div>

      <h3>Matsubara Green函数</h3>
      <div class="formula-box">
        <p><strong>虚时间定义：</strong></p>
        <p>G(k,τ) = -⟨Tτ[uₖ(τ)u₋ₖ(0)]⟩</p>
        <p><strong>虚时间排序：</strong></p>
        <p>Tτ[A(τ)B(τ')] = A(τ)B(τ') (τ > τ')</p>
        <p>Tτ[A(τ)B(τ')] = ±B(τ')A(τ) (τ < τ')</p>
        <p><strong>Matsubara频率：</strong></p>
        <p>ωₙ = 2πnT (玻色子, n = 0, ±1, ±2, ...)</p>
        <p><strong>频率表示：</strong></p>
        <p>G(k,iωₙ) = ∫₀^β dτ e^{iωₙτ} G(k,τ)</p>
      </div>

      <div class="theory-box">
        <h4>Matsubara形式的优势</h4>
        <ul>
          <li><strong>有限温度：</strong>自然处理有限温度效应</li>
          <li><strong>统计力学：</strong>与统计力学直接联系</li>
          <li><strong>计算简化：</strong>避免复杂的积分</li>
          <li><strong>微扰理论：</strong>微扰展开的自然框架</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>自由声子Green函数</h2>
      
      <h3>自由系统的计算</h3>
      <div class="formula-box">
        <p><strong>自由哈密顿量：</strong></p>
        <p>H₀ = Σₖ ℏω(k)âₖ†âₖ</p>
        <p><strong>海森堡表示：</strong></p>
        <p>uₖ(t) = uₖe^{-iω(k)t}</p>
        <p><strong>自由Green函数：</strong></p>
        <p>G₀(k,t) = -i⟨T[uₖ(t)u₋ₖ(0)]⟩₀</p>
        <p><strong>计算结果：</strong></p>
        <p>G₀(k,t) = -i[θ(t)⟨uₖu₋ₖ⟩e^{-iω(k)t} + θ(-t)⟨u₋ₖuₖ⟩e^{iω(k)t}]</p>
      </div>

      <div class="concept-box">
        <h4>自由系统的特点</h4>
        <ul>
          <li><strong>精确可解：</strong>可以精确计算所有Green函数</li>
          <li><strong>指数衰减：</strong>时间演化为简单指数形式</li>
          <li><strong>模式独立：</strong>不同k模式完全独立</li>
          <li><strong>基准系统：</strong>作为微扰理论的起点</li>
        </ul>
      </div>

      <h3>频率表示</h3>
      <div class="formula-box">
        <p><strong>推迟Green函数：</strong></p>
        <p>G₀^R(k,ω) = ℏ/(2mω(k)) · [1/(ω - ω(k) + iη) - 1/(ω + ω(k) + iη)]</p>
        <p><strong>超前Green函数：</strong></p>
        <p>G₀^A(k,ω) = ℏ/(2mω(k)) · [1/(ω - ω(k) - iη) - 1/(ω + ω(k) - iη)]</p>
        <p><strong>无穷小量：</strong></p>
        <p>η → 0⁺</p>
        <p><strong>谱函数：</strong></p>
        <p>A₀(k,ω) = πℏ/(mω(k))[δ(ω - ω(k)) - δ(ω + ω(k))]</p>
      </div>

      <div class="theory-box">
        <h4>频率结构的物理意义</h4>
        <ul>
          <li><strong>极点结构：</strong>ω = ±ω(k)处的简单极点</li>
          <li><strong>粒子-空穴：</strong>正负频率对应粒子和空穴</li>
          <li><strong>谱权重：</strong>δ函数反映尖锐的准粒子峰</li>
          <li><strong>因果边界：</strong>iη确保正确的因果性</li>
        </ul>
      </div>

      <h3>Matsubara表示</h3>
      <div class="formula-box">
        <p><strong>Matsubara Green函数：</strong></p>
        <p>G₀(k,iωₙ) = ℏ/(2mω(k)) · [1/(iωₙ - ω(k)) - 1/(iωₙ + ω(k))]</p>
        <p><strong>简化形式：</strong></p>
        <p>G₀(k,iωₙ) = -ℏω(k)/(ωₙ² + ω²(k))</p>
        <p><strong>解析延拓：</strong></p>
        <p>G₀^R(k,ω) = G₀(k,iωₙ)|_{iωₙ→ω+iη}</p>
        <p><strong>求和公式：</strong></p>
        <p>T Σₙ G₀(k,iωₙ)e^{iωₙτ} = G₀(k,τ)</p>
      </div>

      <div class="theory-box">
        <h4>Matsubara技术的应用</h4>
        <ul>
          <li><strong>温度求和：</strong>自动处理温度求和</li>
          <li><strong>解析延拓：</strong>通过解析延拓获得实频结果</li>
          <li><strong>微扰计算：</strong>微扰理论中的标准工具</li>
          <li><strong>数值计算：</strong>便于数值实现</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Green函数的性质</h2>
      
      <h3>解析性质</h3>
      <div class="formula-box">
        <p><strong>Kramers-Kronig关系：</strong></p>
        <p>Re G^R(k,ω) = (1/π)P ∫_{-∞}^{∞} dω' Im G^R(k,ω')/(ω' - ω)</p>
        <p>Im G^R(k,ω) = -(1/π)P ∫_{-∞}^{∞} dω' Re G^R(k,ω')/(ω' - ω)</p>
        <p><strong>主值积分：</strong></p>
        <p>P ∫ = lim_{ε→0} [∫_{-∞}^{ω-ε} + ∫_{ω+ε}^{∞}]</p>
        <p><strong>谱表示：</strong></p>
        <p>G^R(k,ω) = ∫_{-∞}^{∞} dω' A(k,ω')/(ω - ω' + iη)</p>
      </div>

      <div class="concept-box">
        <h4>解析性质的意义</h4>
        <ul>
          <li><strong>因果性：</strong>解析性质保证因果性</li>
          <li><strong>实验验证：</strong>提供实验验证的途径</li>
          <li><strong>数据分析：</strong>用于实验数据的分析</li>
          <li><strong>理论约束：</strong>对理论模型的约束</li>
        </ul>
      </div>

      <h3>对称性质</h3>
      <div class="formula-box">
        <p><strong>时间反演对称性：</strong></p>
        <p>G(k,ω) = G(-k,ω)</p>
        <p><strong>粒子-空穴对称性：</strong></p>
        <p>G(k,-ω) = -G(k,ω)</p>
        <p><strong>厄米性：</strong></p>
        <p>[G^R(k,ω)]^* = G^A(k,ω)</p>
        <p><strong>详细平衡：</strong></p>
        <p>A(k,-ω) = -e^{-βℏω}A(k,ω)</p>
      </div>

      <div class="theory-box">
        <h4>对称性的物理根源</h4>
        <ul>
          <li><strong>时间反演：</strong>哈密顿量的时间反演不变性</li>
          <li><strong>粒子-空穴：</strong>玻色子的粒子-空穴对称性</li>
          <li><strong>厄米性：</strong>物理量的厄米性要求</li>
          <li><strong>热平衡：</strong>热平衡态的详细平衡条件</li>
        </ul>
      </div>

      <h3>求和规则</h3>
      <div class="formula-box">
        <p><strong>频率求和规则：</strong></p>
        <p>∫_{-∞}^{∞} dω A(k,ω) = 0</p>
        <p><strong>第一矩求和规则：</strong></p>
        <p>∫_{-∞}^{∞} dω ω A(k,ω) = ℏ²k²/(2m)</p>
        <p><strong>f-求和规则：</strong></p>
        <p>∫_{-∞}^{∞} dω f(ω) A(k,ω) = ⟨[uₖ, [H, u₋ₖ]]⟩</p>
        <p><strong>Thomas-Reiche-Kuhn求和规则：</strong></p>
        <p>∫_{-∞}^{∞} dω ω² A(k,ω) = ⟨[uₖ, [H, [H, u₋ₖ]]]⟩</p>
      </div>

      <div class="theory-box">
        <h4>求和规则的应用</h4>
        <ul>
          <li><strong>理论检验：</strong>检验理论计算的正确性</li>
          <li><strong>实验分析：</strong>分析实验数据的完整性</li>
          <li><strong>近似评估：</strong>评估近似方法的精度</li>
          <li><strong>模型约束：</strong>对理论模型的约束条件</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>相互作用系统的Green函数</h2>
      
      <h3>Dyson方程</h3>
      <div class="formula-box">
        <p><strong>Dyson方程：</strong></p>
        <p>G = G₀ + G₀ΣG</p>
        <p><strong>自能：</strong></p>
        <p>Σ(k,ω) = 相互作用的贡献</p>
        <p><strong>积分形式：</strong></p>
        <p>G(k,ω) = G₀(k,ω) + ∫ dk' G₀(k,ω)Σ(k,k';ω)G(k',ω)</p>
        <p><strong>解的形式：</strong></p>
        <p>G(k,ω) = G₀(k,ω)/[1 - G₀(k,ω)Σ(k,ω)]</p>
      </div>

      <div class="concept-box">
        <h4>Dyson方程的意义</h4>
        <ul>
          <li><strong>精确关系：</strong>相互作用系统的精确方程</li>
          <li><strong>自能概念：</strong>引入自能描述相互作用</li>
          <li><strong>重整化：</strong>包含所有阶的重整化效应</li>
          <li><strong>系统方法：</strong>处理复杂相互作用的系统方法</li>
        </ul>
      </div>

      <h3>自能的物理意义</h3>
      <div class="formula-box">
        <p><strong>自能的实部：</strong></p>
        <p>Re Σ(k,ω) → 频率移动</p>
        <p><strong>自能的虚部：</strong></p>
        <p>Im Σ(k,ω) → 准粒子寿命</p>
        <p><strong>准粒子极点：</strong></p>
        <p>ω - ω(k) - Re Σ(k,ω) = 0</p>
        <p><strong>准粒子权重：</strong></p>
        <p>Z = [1 - ∂Re Σ/∂ω]^{-1}</p>
      </div>

      <div class="theory-box">
        <h4>自能效应的分类</h4>
        <ul>
          <li><strong>频率重整化：</strong>相互作用导致的频率修正</li>
          <li><strong>阻尼效应：</strong>有限寿命导致的谱线展宽</li>
          <li><strong>准粒子残基：</strong>准粒子图像的有效性</li>
          <li><strong>非准粒子行为：</strong>强相互作用下的异常行为</li>
        </ul>
      </div>

      <h3>微扰理论</h3>
      <div class="formula-box">
        <p><strong>相互作用哈密顿量：</strong></p>
        <p>H_int = Σ V_{k₁k₂k₃k₄} âₖ₁†âₖ₂†âₖ₃âₖ₄</p>
        <p><strong>一阶自能：</strong></p>
        <p>Σ^{(1)}(k,ω) = Σₖ' V_{kk'k'k}⟨nₖ'⟩</p>
        <p><strong>二阶自能：</strong></p>
        <p>Σ^{(2)}(k,iωₙ) = T Σₖ',ωₘ |V_{kk'kk'}|² G₀(k',iωₘ)</p>
        <p><strong>Feynman图：</strong></p>
        <p>图形化表示微扰展开</p>
      </div>

      <div name="theory-box">
        <h4>微扰理论的层次</h4>
        <ul>
          <li><strong>Hartree-Fock：</strong>平均场近似</li>
          <li><strong>RPA：</strong>随机相位近似</li>
          <li><strong>GW近似：</strong>准粒子自能的标准近似</li>
          <li><strong>高阶修正：</strong>顶点修正和多体效应</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>谱函数和态密度</h2>
      
      <h3>谱函数的定义</h3>
      <div class="formula-box">
        <p><strong>谱函数：</strong></p>
        <p>A(k,ω) = -2Im G^R(k,ω)</p>
        <p><strong>归一化条件：</strong></p>
        <p>∫_{-∞}^{∞} dω A(k,ω) = 2π</p>
        <p><strong>物理意义：</strong></p>
        <p>A(k,ω) ∝ 在(k,ω)处激发的概率</p>
        <p><strong>与实验的关系：</strong></p>
        <p>散射截面 ∝ A(k,ω)</p>
      </div>

      <div class="concept-box">
        <h4>谱函数的特征</h4>
        <ul>
          <li><strong>正定性：</strong>A(k,ω) ≥ 0</li>
          <li><strong>归一化：</strong>满足归一化条件</li>
          <li><strong>实验对应：</strong>直接对应实验观测量</li>
          <li><strong>信息完整：</strong>包含系统的完整谱信息</li>
        </ul>
      </div>

      <h3>态密度</h3>
      <div class="formula-box">
        <p><strong>态密度定义：</strong></p>
        <p>ρ(ω) = Σₖ A(k,ω)/(2π)</p>
        <p><strong>局域态密度：</strong></p>
        <p>ρ(r,ω) = -Im G^R(r,r;ω)/π</p>
        <p><strong>投影态密度：</strong></p>
        <p>ρₐ(ω) = Σₖ |⟨a|k⟩|² A(k,ω)/(2π)</p>
        <p><strong>积分态密度：</strong></p>
        <p>N(ω) = ∫_{-∞}^ω dω' ρ(ω')</p>
      </div>

      <div class="theory-box">
        <h4>态密度的应用</h4>
        <ul>
          <li><strong>热力学性质：</strong>计算比热、熵等热力学量</li>
          <li><strong>输运性质：</strong>计算电导、热导等输运系数</li>
          <li><strong>光学性质：</strong>计算光学吸收谱</li>
          <li><strong>相变研究：</strong>研究相变和临界现象</li>
        </ul>
      </div>

      <h3>准粒子和非准粒子行为</h3>
      <div class="formula-box">
        <p><strong>准粒子峰：</strong></p>
        <p>A(k,ω) ≈ Z δ(ω - ωₖ) + A_incoh(k,ω)</p>
        <p><strong>准粒子权重：</strong></p>
        <p>Z = [1 - ∂Re Σ/∂ω|_{ω=ωₖ}]^{-1}</p>
        <p><strong>准粒子寿命：</strong></p>
        <p>τ = ℏ/[2|Im Σ(k,ωₖ)|]</p>
        <p><strong>非相干背景：</strong></p>
        <p>A_incoh(k,ω) = 非准粒子贡献</p>
      </div>

      <div class="theory-box">
        <h4>准粒子图像的适用性</h4>
        <ul>
          <li><strong>弱耦合：</strong>相互作用较弱时准粒子图像有效</li>
          <li><strong>强耦合：</strong>强相互作用下准粒子图像失效</li>
          <li><strong>温度效应：</strong>温度对准粒子性质的影响</li>
          <li><strong>维度效应：</strong>低维系统中的特殊行为</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>输运性质的计算</h2>
      
      <h3>Kubo公式</h3>
      <div class="formula-box">
        <p><strong>电导率：</strong></p>
        <p>σ(ω) = (e²/ℏ) ∫ dk vₖ² τₖ δ(ω - ωₖ)</p>
        <p><strong>热导率：</strong></p>
        <p>κ(ω) = (1/T) ∫ dk (ωₖ - μ)² vₖ² τₖ δ(ω - ωₖ)</p>
        <p><strong>群速度：</strong></p>
        <p>vₖ = ∂ωₖ/∂k</p>
        <p><strong>散射时间：</strong></p>
        <p>τₖ = ℏ/[2Im Σ(k,ωₖ)]</p>
      </div>

      <div class="concept-box">
        <h4>输运系数的特征</h4>
        <ul>
          <li><strong>频率依赖：</strong>输运系数的频率色散</li>
          <li><strong>温度依赖：</strong>散射机制的温度变化</li>
          <li><strong>杂质效应：</strong>杂质散射对输运的影响</li>
          <li><strong>相互作用效应：</strong>多体相互作用的贡献</li>
        </ul>
      </div>

      <h3>散射机制</h3>
      <div class="formula-box">
        <p><strong>杂质散射：</strong></p>
        <p>1/τ_imp = (2π/ℏ) Σᵢ |Vᵢ(k)|² δ(ωₖ - ωₖ')</p>
        <p><strong>声子-声子散射：</strong></p>
        <p>1/τ_ph = (2π/ℏ) Σₖ'ₖ'' |V₃(k,k',k'')|² [n(ωₖ') + n(ωₖ'') + 1] × δ(ωₖ - ωₖ' - ωₖ'')</p>
        <p><strong>边界散射：</strong></p>
        <p>1/τ_boundary = vₖ/L</p>
        <p><strong>总散射率：</strong></p>
        <p>1/τ_total = 1/τ_imp + 1/τ_ph + 1/τ_boundary</p>
      </div>

      <div class="theory-box">
        <h4>散射机制的温度依赖</h4>
        <ul>
          <li><strong>杂质散射：</strong>温度无关（低温主导）</li>
          <li><strong>声子散射：</strong>强烈的温度依赖</li>
          <li><strong>边界散射：</strong>温度无关（小尺寸系统）</li>
          <li><strong>竞争机制：</strong>不同温度区间的主导机制</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>数值计算方法</h2>
      
      <h3>解析延拓技术</h3>
      <div class="experiment-box">
        <h4>从虚频到实频</h4>
        <ul>
          <li><strong>Padé近似：</strong>有理函数近似方法</li>
          <li><strong>最大熵方法：</strong>基于贝叶斯推断的方法</li>
          <li><strong>随机解析延拓：</strong>蒙特卡罗采样方法</li>
          <li><strong>神经网络：</strong>机器学习辅助的延拓</li>
        </ul>
      </div>

      <h3>自洽计算</h3>
      <div class="experiment-box">
        <h4>Dyson方程的求解</h4>
        <ul>
          <li><strong>迭代方法：</strong>自洽迭代求解</li>
          <li><strong>混合方案：</strong>加速收敛的混合方法</li>
          <li><strong>预条件：</strong>改善数值稳定性</li>
          <li><strong>并行计算：</strong>大规模并行实现</li>
        </ul>
      </div>

      <h3>量子蒙特卡罗</h3>
      <div class="experiment-box">
        <h4>随机采样方法</h4>
        <ul>
          <li><strong>连续时间QMC：</strong>连续时间量子蒙特卡罗</li>
          <li><strong>确定性QMC：</strong>确定性量子蒙特卡罗</li>
          <li><strong>符号问题：</strong>费米子符号问题的处理</li>
          <li><strong>有限尺寸效应：</strong>外推到热力学极限</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验应用</h2>
      
      <h3>中子散射</h3>
      <div class="application-box">
        <h4>动力学结构因子的测量</h4>
        <ul>
          <li><strong>非弹性散射：</strong>直接测量S(k,ω)</li>
          <li><strong>色散关系：</strong>确定声子色散ω(k)</li>
          <li><strong>线宽分析：</strong>提取声子寿命信息</li>
          <li><strong>温度依赖：</strong>研究温度效应</li>
        </ul>
      </div>

      <h3>拉曼散射</h3>
      <div class="application-box">
        <h4>光学声子的探测</h4>
        <ul>
          <li><strong>一阶拉曼：</strong>k≈0光学声子</li>
          <li><strong>二阶拉曼：</strong>两声子过程</li>
          <li><strong>共振拉曼：</strong>电子-声子耦合</li>
          <li><strong>应力调制：</strong>应力对声子的影响</li>
        </ul>
      </div>

      <h3>红外吸收</h3>
      <div class="application-box">
        <h4>极化声子的研究</h4>
        <ul>
          <li><strong>介电函数：</strong>通过Green函数计算</li>
          <li><strong>吸收谱：</strong>红外活性模式</li>
          <li><strong>Fano共振：</strong>离散-连续态耦合</li>
          <li><strong>多声子过程：</strong>高阶非线性效应</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          声子Green函数是研究晶格动力学和多体效应的核心理论工具。
          通过时间有序、推迟、超前和Matsubara等不同形式的Green函数，
          我们能够系统地描述声子的传播、散射和相互作用。
          自由声子Green函数提供了理论的基础，
          而相互作用系统中的Dyson方程和自能概念
          为处理复杂的多体效应提供了系统的框架。
          Green函数的解析性质如Kramers-Kronig关系、对称性和求和规则
          不仅是理论的内在要求，也为实验验证提供了途径。
          谱函数和态密度的概念将理论与实验直接联系，
          使得我们能够从实验数据中提取丰富的物理信息。
          输运性质的计算展示了Green函数方法在实际应用中的威力，
          而现代数值方法的发展使得复杂系统的精确计算成为可能。
          声子Green函数理论不仅是理解固体中集体激发的基础，
          也为研究更复杂的量子多体现象提供了重要的理论工具。
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