<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.1 一次与二次量子化基础概念</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子化理论</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>量子化的发展历程</h2>
        <p class="lead-text">
          量子化是量子力学的核心概念，从一次量子化到二次量子化的发展，为我们理解多体系统提供了强有力的数学工具。
          本节将详细介绍这两种量子化方法的基本概念、数学形式和物理意义。
        </p>
      </section>

      <section class="content-section">
        <h2>一次量子化 (First Quantization)</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>基本思想</h3>
            <p>将经典力学中的物理量（位置、动量）提升为量子力学算符</p>
            <div class="concept-details">
              <h4>核心原理：</h4>
              <ul>
                <li><strong>正则量子化</strong>：{x, p} → [x̂, p̂] = iℏ</li>
                <li><strong>波函数描述</strong>：ψ(x₁, x₂, ..., xₙ, t)</li>
                <li><strong>薛定谔方程</strong>：iℏ∂ψ/∂t = Ĥψ</li>
                <li><strong>概率诠释</strong>：|ψ(x)|²表示粒子在x处的概率密度</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>数学表述</h3>
            <p>单粒子和多粒子系统的波函数表示</p>
            <div class="mathematical-content">
              <h4>单粒子系统：</h4>
              <div class="equation-block">
                <p><strong>波函数：</strong>ψ(x, t)</p>
                <p><strong>哈密顿算符：</strong>Ĥ = -ℏ²/(2m)∇² + V(x)</p>
                <p><strong>薛定谔方程：</strong>iℏ∂ψ/∂t = Ĥψ</p>
              </div>
              
              <h4>多粒子系统：</h4>
              <div class="equation-block">
                <p><strong>波函数：</strong>ψ(x₁, x₂, ..., xₙ, t)</p>
                <p><strong>哈密顿算符：</strong></p>
                <p>Ĥ = Σᵢ[-ℏ²/(2mᵢ)∇ᵢ² + Vᵢ(xᵢ)] + Σᵢ<ⱼVᵢⱼ(xᵢ, xⱼ)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚖️</div>
            <h3>优缺点分析</h3>
            <p>一次量子化方法的适用范围和局限性</p>
            <div class="pros-cons">
              <div class="pros">
                <h4>✅ 优点：</h4>
                <ul>
                  <li>概念直观，易于理解</li>
                  <li>适用于固定粒子数系统</li>
                  <li>数学形式相对简单</li>
                  <li>与经典力学联系紧密</li>
                </ul>
              </div>
              <div class="cons">
                <h4>❌ 局限性：</h4>
                <ul>
                  <li>难以处理粒子数变化</li>
                  <li>多体问题计算复杂</li>
                  <li>不便于描述场的量子化</li>
                  <li>相对论协变性差</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>二次量子化 (Second Quantization)</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>基本思想</h3>
            <p>将波函数本身量子化，引入产生和湮灭算符</p>
            <div class="concept-details">
              <h4>核心概念：</h4>
              <ul>
                <li><strong>场算符</strong>：ψ̂(x) = Σₖ φₖ(x)âₖ</li>
                <li><strong>产生算符</strong>：â†ₖ 创造一个处于态k的粒子</li>
                <li><strong>湮灭算符</strong>：âₖ 消灭一个处于态k的粒子</li>
                <li><strong>占据数表示</strong>：|n₁, n₂, ..., nₖ, ...⟩</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧮</div>
            <h3>对易关系</h3>
            <p>费米子和玻色子的不同统计性质</p>
            <div class="mathematical-content">
              <h4>玻色子 (整数自旋)：</h4>
              <div class="equation-block">
                <p>[âᵢ, â†ⱼ] = δᵢⱼ</p>
                <p>[âᵢ, âⱼ] = [â†ᵢ, â†ⱼ] = 0</p>
                <p><strong>物理意义：</strong>多个粒子可占据同一量子态</p>
              </div>
              
              <h4>费米子 (半整数自旋)：</h4>
              <div class="equation-block">
                <p>{âᵢ, â†ⱼ} = δᵢⱼ</p>
                <p>{âᵢ, âⱼ} = {â†ᵢ, â†ⱼ} = 0</p>
                <p><strong>物理意义：</strong>泡利不相容原理，每个态最多一个粒子</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>Fock空间</h3>
            <p>多粒子态的完整描述空间</p>
            <div class="concept-details">
              <h4>空间构造：</h4>
              <ul>
                <li><strong>真空态</strong>：|0⟩，没有任何粒子</li>
                <li><strong>单粒子态</strong>：â†ₖ|0⟩ = |1ₖ⟩</li>
                <li><strong>多粒子态</strong>：â†ₖ₁â†ₖ₂...â†ₖₙ|0⟩</li>
                <li><strong>完备性</strong>：包含所有可能的粒子数态</li>
              </ul>
              
              <h4>重要性质：</h4>
              <ul>
                <li>粒子数算符：N̂ = Σₖ â†ₖâₖ</li>
                <li>粒子数守恒：[Ĥ, N̂] = 0</li>
                <li>态的归一化：⟨ψ|ψ⟩ = 1</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>两种量子化的比较</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>比较项目</th>
                <th>一次量子化</th>
                <th>二次量子化</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>基本对象</strong></td>
                <td>波函数 ψ(x₁,...,xₙ)</td>
                <td>场算符 ψ̂(x)</td>
              </tr>
              <tr>
                <td><strong>粒子数</strong></td>
                <td>固定</td>
                <td>可变</td>
              </tr>
              <tr>
                <td><strong>态空间</strong></td>
                <td>Hilbert空间</td>
                <td>Fock空间</td>
              </tr>
              <tr>
                <td><strong>统计性质</strong></td>
                <td>通过波函数对称性体现</td>
                <td>通过对易/反对易关系体现</td>
              </tr>
              <tr>
                <td><strong>计算复杂度</strong></td>
                <td>随粒子数指数增长</td>
                <td>相对简化</td>
              </tr>
              <tr>
                <td><strong>适用范围</strong></td>
                <td>非相对论量子力学</td>
                <td>量子场论、多体理论</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="content-section">
        <h2>物理应用实例</h2>
        <div class="application-grid">
          <div class="application-card">
            <h3>🔬 谐振子系统</h3>
            <div class="application-content">
              <h4>一次量子化描述：</h4>
              <p>Ĥ = ℏω(â†â + 1/2)</p>
              <p>本征态：|n⟩，能量：Eₙ = ℏω(n + 1/2)</p>
              
              <h4>二次量子化描述：</h4>
              <p>同样的哈密顿算符，但现在â†和â是场算符</p>
              <p>可以描述多个谐振子的集合</p>
            </div>
          </div>

          <div class="application-card">
            <h3>⚛️ 自由电子气</h3>
            <div class="application-content">
              <h4>一次量子化：</h4>
              <p>N个电子的波函数：ψ(x₁,...,xₙ)</p>
              <p>反对称化：Slater行列式</p>
              
              <h4>二次量子化：</h4>
              <p>Ĥ = Σₖ εₖ ĉ†ₖĉₖ</p>
              <p>自然包含泡利不相容原理</p>
            </div>
          </div>

          <div class="application-card">
            <h3>🌐 电磁场</h3>
            <div class="application-content">
              <h4>经典场：</h4>
              <p>Maxwell方程组</p>
              <p>连续场变量A(x,t)</p>
              
              <h4>量子化场：</h4>
              <p>光子产生湮灭算符</p>
              <p>Ĥ = Σₖ ℏωₖ(â†ₖâₖ + 1/2)</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>学习要点总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>🎯 核心概念</h3>
            <ul>
              <li>一次量子化：经典量 → 量子算符</li>
              <li>二次量子化：波函数 → 场算符</li>
              <li>Fock空间：变粒子数的态空间</li>
              <li>统计性质：费米子vs玻色子</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔧 数学工具</h3>
            <ul>
              <li>产生湮灭算符：â†, â</li>
              <li>对易/反对易关系</li>
              <li>占据数表示：|n₁,n₂,...⟩</li>
              <li>正规排序和Wick定理</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 物理意义</h3>
            <ul>
              <li>粒子的创生和湮灭</li>
              <li>量子统计的自然描述</li>
              <li>多体问题的简化</li>
              <li>场论的基础框架</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section class="content-section">
        <h2>进阶内容与示例推导</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>Fock空间与占据数</h3>
            <ul>
              <li>基态：|0⟩，粒子数算符 N = Σᵢ â†ᵢâᵢ</li>
              <li>占据数态：|n₁,n₂,...⟩，满足 âᵢ†|...⟩ 与 âᵢ|...⟩ 的阶梯关系</li>
              <li>费米子：{ĉᵢ, ĉⱼ†} = δᵢⱼ；玻色子：[bᵢ, bⱼ†] = δᵢⱼ</li>
              <li>统计差异导致能谱与多体态结构的本质区别</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>常见哈密顿算符的二次量子化</h3>
            <ul>
              <li>自由费米气：<code>H = Σ_{k,σ} ε_k ĉ†_{kσ}ĉ_{kσ}</code></li>
              <li>自由玻色气：<code>H = Σ_q ω_q b†_q b_q</code></li>
              <li>外场耦合：<code>H_ext = Σ_{i,j} h_{ij} ĉ†_i ĉ_j</code></li>
              <li>二体相互作用：<code>V = 1/2 Σ_{i,j,k,l} v_{ij;kl} ĉ†_i ĉ†_j ĉ_l ĉ_k</code></li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>示例：单模谐振子</h3>
            <ul>
              <li>阶梯算符：<code>â|n⟩ = √n |n-1⟩</code>，<code>â†|n⟩ = √(n+1) |n+1⟩</code></li>
              <li>能量谱：<code>E_n = ℏω(n + 1/2)</code></li>
              <li>数算符：<code>n = â†â</code>，与哈密顿量的对易关系给出守恒量</li>
              <li>正规排序避免真空能发散，便于微扰展开</li>
            </ul>
          </div>
        </div>

        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>Wick定理速览</h3>
            <p>时间序算符下的乘积可表示为所有可能收缩的求和，显著简化高阶平均值计算。</p>
            <pre><code>T{ĉ_a(t) ĉ†_b(t')} = :ĉ_a(t) ĉ†_b(t'): + ⟨T{ĉ_a(t) ĉ†_b(t')}⟩</code></pre>
            <p>配合费曼图，可系统地组织微扰级数与自能修正。</p>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🧠</div>
            <h3>物理直觉</h3>
            <p>二次量子化把"粒子"当作可创造与湮灭的激发，使得变粒子数问题与相互作用更易统一处理。</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>详细理论推导与计算示例</h2>
        
        <!-- 产生湮灭算符的详细数学性质 -->
        <div class="theory-section">
          <h3>产生湮灭算符的严格定义</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 算符的基本性质</h4>
              <div class="equation-block">
                <p><strong>费米子反对易关系：</strong></p>
                <p>{ĉᵢ, ĉⱼ†} = ĉᵢĉⱼ† + ĉⱼ†ĉᵢ = δᵢⱼ</p>
                <p>{ĉᵢ, ĉⱼ} = {ĉᵢ†, ĉⱼ†} = 0</p>
                
                <p><strong>玻色子对易关系：</strong></p>
                <p>[b̂ᵢ, b̂ⱼ†] = b̂ᵢb̂ⱼ† - b̂ⱼ†b̂ᵢ = δᵢⱼ</p>
                <p>[b̂ᵢ, b̂ⱼ] = [b̂ᵢ†, b̂ⱼ†] = 0</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 占据数算符与粒子数</h4>
              <div class="equation-block">
                <p><strong>占据数算符：</strong>n̂ᵢ = ĉᵢ†ĉᵢ</p>
                <p><strong>本征值方程：</strong>n̂ᵢ|nᵢ⟩ = nᵢ|nᵢ⟩</p>
                <p><strong>费米子：</strong>nᵢ ∈ {0, 1}</p>
                <p><strong>玻色子：</strong>nᵢ ∈ {0, 1, 2, 3, ...}</p>
                <p><strong>总粒子数：</strong>N̂ = Σᵢ n̂ᵢ = Σᵢ ĉᵢ†ĉᵢ</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 阶梯算符的作用</h4>
              <div class="equation-block">
                <p><strong>费米子情况：</strong></p>
                <p>ĉᵢ†|0⟩ᵢ = |1⟩ᵢ, ĉᵢ†|1⟩ᵢ = 0</p>
                <p>ĉᵢ|1⟩ᵢ = |0⟩ᵢ, ĉᵢ|0⟩ᵢ = 0</p>
                
                <p><strong>玻色子情况：</strong></p>
                <p>b̂ᵢ†|nᵢ⟩ = √(nᵢ + 1)|nᵢ + 1⟩</p>
                <p>b̂ᵢ|nᵢ⟩ = √nᵢ|nᵢ - 1⟩</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fock空间的构造 -->
        <div class="theory-section">
          <h3>Fock空间的系统构造</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 真空态与基态</h4>
              <div class="equation-block">
                <p><strong>真空态定义：</strong>ĉᵢ|0⟩ = 0, ∀i</p>
                <p><strong>归一化条件：</strong>⟨0|0⟩ = 1</p>
                <p><strong>真空能量：</strong>⟨0|Ĥ|0⟩ = E₀</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 多粒子态的构造</h4>
              <div class="equation-block">
                <p><strong>单粒子态：</strong>|i⟩ = ĉᵢ†|0⟩</p>
                <p><strong>双粒子态（费米子）：</strong>|ij⟩ = ĉᵢ†ĉⱼ†|0⟩ = -ĉⱼ†ĉᵢ†|0⟩</p>
                <p><strong>N粒子态：</strong>|i₁i₂...iₙ⟩ = ĉᵢ₁†ĉᵢ₂†...ĉᵢₙ†|0⟩</p>
                <p><strong>反对称性：</strong>交换任意两个指标改变符号</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 完备性关系</h4>
              <div class="equation-block">
                <p><strong>单粒子完备性：</strong>Σᵢ |i⟩⟨i| = 1̂</p>
                <p><strong>Fock空间完备性：</strong></p>
                <p>1̂ = |0⟩⟨0| + Σᵢ |i⟩⟨i| + Σᵢ&lt;ⱼ |ij⟩⟨ij| + ...</p>
                <p>= Σₙ (1/N!) Σᵢ₁...ᵢₙ |i₁...iₙ⟩⟨i₁...iₙ|</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 具体计算示例 -->
        <div class="theory-section">
          <h3>具体计算示例</h3>
          
          <div class="example-box">
            <h4>示例1：简单谐振子的二次量子化</h4>
            <div class="calculation-steps">
              <div class="step">
                <h5>步骤1：经典哈密顿量</h5>
                <p>H = p²/(2m) + (1/2)mω²x²</p>
              </div>
              
              <div class="step">
                <h5>步骤2：引入阶梯算符</h5>
                <p>â = √(mω/2ℏ)(x̂ + ip̂/(mω))</p>
                <p>â† = √(mω/2ℏ)(x̂ - ip̂/(mω))</p>
              </div>
              
              <div class="step">
                <h5>步骤3：验证对易关系</h5>
                <p>[â, â†] = [x̂, p̂]/(iℏ) × (mω/2ℏ) × 2i/(mω) = 1</p>
              </div>
              
              <div class="step">
                <h5>步骤4：哈密顿量的二次量子化形式</h5>
                <p>Ĥ = ℏω(â†â + 1/2) = ℏω(n̂ + 1/2)</p>
              </div>
              
              <div class="step">
                <h5>步骤5：能量本征值</h5>
                <p>Ĥ|n⟩ = ℏω(n + 1/2)|n⟩</p>
                <p>Eₙ = ℏω(n + 1/2), n = 0, 1, 2, ...</p>
              </div>
            </div>
          </div>

          <div class="example-box">
            <h4>示例2：自由费米气体</h4>
            <div class="calculation-steps">
              <div class="step">
                <h5>步骤1：单粒子哈密顿量</h5>
                <p>ĥ = -ℏ²∇²/(2m) + V(r)</p>
              </div>
              
              <div class="step">
                <h5>步骤2：本征态展开</h5>
                <p>ĥφₖ(r) = εₖφₖ(r)</p>
                <p>场算符：ψ̂(r) = Σₖ φₖ(r)ĉₖ</p>
              </div>
              
              <div class="step">
                <h5>步骤3：二次量子化哈密顿量</h5>
                <p>Ĥ = ∫ ψ̂†(r)ĥψ̂(r)d³r = Σₖ εₖĉₖ†ĉₖ</p>
              </div>
              
              <div class="step">
                <h5>步骤4：基态构造（T=0）</h5>
                <p>|FS⟩ = ∏ₖ&lt;ₖF ĉₖ†|0⟩</p>
                <p>基态能量：E₀ = Σₖ&lt;ₖF εₖ</p>
              </div>
            </div>
          </div>

          <div class="example-box">
            <h4>示例3：相互作用系统的处理</h4>
            <div class="calculation-steps">
              <div class="step">
                <h5>步骤1：二体相互作用</h5>
                <p>V̂ = (1/2)∫∫ ψ̂†(r₁)ψ̂†(r₂)V(r₁,r₂)ψ̂(r₂)ψ̂(r₁)d³r₁d³r₂</p>
              </div>
              
              <div class="step">
                <h5>步骤2：动量表象</h5>
                <p>V̂ = (1/2)Σₖ₁ₖ₂ₖ₃ₖ₄ Vₖ₁ₖ₂;ₖ₃ₖ₄ ĉₖ₁†ĉₖ₂†ĉₖ₄ĉₖ₃</p>
                <p>其中：Vₖ₁ₖ₂;ₖ₃ₖ₄ = ⟨k₁k₂|V|k₃k₄⟩</p>
              </div>
              
              <div class="step">
                <h5>步骤3：动量守恒</h5>
                <p>δ(k₁ + k₂ - k₃ - k₄) 确保动量守恒</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Wick定理的详细推导 -->
        <div class="theory-section">
          <h3>Wick定理的详细推导</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 正规排序的定义</h4>
              <div class="equation-block">
                <p><strong>正规排序：</strong>:Â: 表示将所有产生算符排在湮灭算符左边</p>
                <p><strong>例子：</strong>:ĉᵢ†ĉⱼĉₖ†ĉₗ: = ĉᵢ†ĉₖ†ĉⱼĉₗ</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 收缩的定义</h4>
              <div class="equation-block">
                <p><strong>收缩：</strong>两个算符的收缩等于它们的真空期望值</p>
                <p>ĉᵢĉⱼ† = ⟨0|ĉᵢĉⱼ†|0⟩ = δᵢⱼ</p>
                <p>ĉᵢ†ĉⱼ = ⟨0|ĉᵢ†ĉⱼ|0⟩ = 0</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. Wick定理的表述</h4>
              <div class="equation-block">
                <p><strong>定理：</strong>时间排序乘积等于正规排序乘积加上所有可能收缩的和</p>
                <p>T{Â₁Â₂...Âₙ} = :Â₁Â₂...Âₙ: + 所有单收缩项 + 所有双收缩项 + ...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_1',
  data() {
    return {
      // 可以添加交互式内容的数据
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
}

.reading-time {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
}

.introduction {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #f8fafc;
  border-radius: 1rem;
  border-left: 4px solid #667eea;
}

.introduction h2 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #4a5568;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.concept-card p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.concept-details h4 {
  color: #2d3748;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1rem;
}

.concept-details ul {
  list-style: none;
  padding: 0;
}

.concept-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.concept-details li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.mathematical-content {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-left: 3px solid #667eea;
}

.equation-block p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  color: #2d3748;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.pros, .cons {
  padding: 1rem;
  border-radius: 0.5rem;
}

.pros {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
}

.cons {
  background: #fff5f5;
  border: 1px solid #feb2b2;
}

.pros h4, .cons h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}

.pros h4 {
  color: #22543d;
}

.cons h4 {
  color: #742a2a;
}

.comparison-table {
  overflow-x: auto;
  margin: 2rem 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.comparison-table th {
  background: #667eea;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #4a5568;
}

.comparison-table tr:hover {
  background: #f7fafc;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.application-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.application-card h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.application-content h4 {
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
}

.application-content p {
  color: #4a5568;
  margin: 0.25rem 0;
  font-family: 'Courier New', monospace;
  background: #f7fafc;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.summary-card h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.summary-card ul {
  list-style: none;
  padding: 0;
}

.summary-card li {
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.summary-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: bold;
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
    gap: 1rem;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
}
</style>