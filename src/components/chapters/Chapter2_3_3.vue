<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.3 多体密度矩阵的二次量子化形式</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">密度矩阵</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>密度矩阵的二次量子化表示</h2>
        <p class="lead-text">
          密度矩阵是描述量子多体系统统计性质的核心工具。在二次量子化框架下，
          密度矩阵可以用产生湮灭算符优雅地表示，这不仅简化了计算，还揭示了多体关联的深层结构。
        </p>
      </section>

      <section class="content-section">
        <h2>多体密度矩阵的二次量子化推导</h2>
        <div class="derivation-section">
          <div class="concept-card">
            <div class="concept-icon">🧮</div>
            <h3>多体哈密顿量的二次量子化形式</h3>
            <div class="mathematical-content">
              <p>考虑一般性的包含单体和两体相互作用的多粒子系统哈密顿量，例如</p>
              <div class="equation-block">
                <p>H = ∑ⱼ[-∇²ⱼ/(2m) + U(xⱼ)] + (1/2)∑ⱼ≠ₘ V(xⱼ, xₘ)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.38)</p>
              </div>
              
              <p>这里为简化记号令ℏ = 1，V(xⱼ, xₘ)是两体相互作用势，一般只依赖于粒子之间的相对位置并有有限的作用半径，其二次量子化形式为</p>
              
              <div class="equation-block">
                <p>Ô = ∑∑⟨α|ô|β⟩â†ₐâᵦ</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.39)</p>
              </div>
              
              <p>这里{α}, {β}是任意正交完备单粒子基矢，对于粒子的动能以及外势项，如某选取位置空间{|x⟩}作为基矢，那么就是有</p>
              
              <div class="equation-block">
                <p>∑ₐ → ∫d³x, ∑ᵦ → ∫d³y, â†ₐ → ψ̂†(x), âᵦ → ψ̂(y), ⟨α|ô|β⟩ → (-∇²/(2m) + U(x))δ(x-y)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.40)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>密度算符的二次量子化表示</h3>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>H = ∑ⱼ[-∇²ⱼ/(2m) + U(xⱼ)] → H = ∫d³x∫d³yψ̂†(x)(-∇²/(2m) + U(x))δ(x-y)ψ̂(y)</p>
                <p>= ∫d³xψ̂†(x)[-∇²/(2m) + U(x)]ψ̂(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.41)</p>
              </div>
              
              <p>我们知道粒子密度ρ(x) = ∑ⱼδ(x - xⱼ)，那么根据二次量子化的规则可知</p>
              
              <div class="equation-block">
                <p>ρ̂(x) = ∫d³x'ψ̂†(x')δ(x' - x)ψ̂(x') = ψ̂†(x)ψ̂(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.42)</p>
              </div>
              
              <p>显然ρ̂(x) = ψ̂†(x)ψ̂(x)可以解释为粒子密度算符，其物理意义是在x处的粒子密度，把粒子密度算符对全空间积分可得到系统的总粒子数算符，</p>
              
              <div class="equation-block">
                <p>N̂ = ∫d³xρ̂(x) = ∫d³xψ̂†(x)ψ̂(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.43)</p>
              </div>
              
              <p>进一步，一般的两体算符V = ∑ⱼ≠ₘ V(xⱼ, xₘ) = ∑ⱼ≠ₘ vʲᵐ有如下形式</p>
              
              <div class="equation-block">
                <p>V̂ = ∑_{α,β,δ,γ} ⟨αβ|v̂|δγ⟩â†ₐâ†ᵦâδâγ</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.44)</p>
              </div>
              
              <p>在位置空间时</p>
              
              <div class="equation-block">
                <p>V̂ = (1/2)∫d³x∫d³yψ̂†(x)ψ̂†(y)V(x,y)ψ̂(y)ψ̂(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.45)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>二次量子化形式</h3>
            <div class="mathematical-content">
              <p>当选取位置空间时，多粒子系统的二次量子化密度矩阵可写为</p>
              
              <div class="equation-block">
                <p>Ĥ = ∫d³xψ̂†(x)[-∇²/(2m) + U(x)]ψ̂(x) + (1/2)∫d³x∫d³yψ̂†(x)ψ̂†(y)V(x-y)ψ̂(y)ψ̂(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.46)</p>
              </div>
              
              <p>这里的场算符满足如下对易关系：</p>
              
              <div class="equation-block">
                <p>[ψ̂(x), ψ̂†(y)]₊ = δ(x - y), [ψ̂(x), ψ̂(y)]₊ = [ψ̂†(x), ψ̂†(y)]₊ = 0</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.47)</p>
              </div>
              
              <p>如果我们关心系统的输运性质，例如有限频率光学电导或温度依赖电阻，电流密度的二次量子化形式也是重要的。¹⁵</p>
              
              <div class="equation-block">
                <p>ĵ(x) = 1/(2mi)[ψ̂†(x)∇ψ̂(x) - ∇(ψ̂†(x))ψ̂(x)]</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.48)</p>
              </div>
              
              <p>该式乘以电荷e就得到电流密度的二次量子化形式。</p>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>带自旋的情况</h3>
            <div class="mathematical-content">
              <p>当明确考虑电子系统时，需要计入自旋的影响，那么相应的二次量子化密度矩阵是</p>
              
              <div class="equation-block">
                <p>Ĥ = ∑_{σ=↑,↓} ∫d³xψ̂†σ(x)[-∇²/(2m) + U(x)]ψ̂σ(x) + (1/2) ∑_{σ,σ'=↑,↓} ∫d³x∫d³yψ̂†σ(x)ψ̂†σ'(y)V(x-y)ψ̂σ'(y)ψ̂σ(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.49)</p>
              </div>
              
              <p>这里的场算符满足如下对易关系：</p>
              
              <div class="equation-block">
                <p>[ψ̂σ(x), ψ̂†σ'(y)]₊ = δσ,σ'δ(x - y), [ψ̂σ(x), ψ̂σ'(y)]₊ = [ψ̂†σ(x), ψ̂†σ'(y)]₊ = 0</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.50)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>平面波展开下的二次量子化密度矩阵</h3>
            <div class="mathematical-content">
              <p>在周期性的固体(周期边界条件)或者在意空间均匀的系统中，动量是系统的守恒量，这样研究物理量在动量空间的行为往往比实空间更直观，因此，在这一小节我们将推导在平面波展开下的二次量子化形式，我们考虑一个体积为V的系统，引入场算符的傅里叶变换¹⁶</p>
              
              <div class="equation-block">
                <p>ψ̂σ(x) = (1/√V) ∑ₖ e^{ikx}ĉₖσ</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.51)</p>
              </div>
              
              <p>以及逆变换</p>
              
              <div class="equation-block">
                <p>ĉₖσ = (1/√V) ∫d³xe^{-ikx}ψ̂σ(x)</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.52)</p>
              </div>
              
              <p>那么</p>
              
              <div class="equation-block">
                <p>[ĉₖσ, ĉ†ₖ'σ'] = (1/V) ∫d³x∫d³ye^{-ikx}e^{ik'y}[ψ̂σ(x), ψ̂†σ'(y)]₊ = (1/V) ∫d³x∫d³ye^{-ikx}e^{ik'y}δσσ'δ(x - y)</p>
                <p>= δσσ'(1/V) ∫d³xe^{-i(k-k')x} = δσσ'δₖ,ₖ'</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.53)</p>
              </div>
              
              <p>这里用到了(1/V)∫d³xe^{-i(k-k')x} = δₖ,ₖ'，(具体讨论参看附录)同理可得另外的对易关系[ĉₖσ, ĉₖ'σ'] = [ĉ†ₖσ, ĉ†ₖ'σ'] = 0。</p>
              
              <p>让我们考虑一般的二次量子化密度矩阵，即公式2.3.49，对于其动能部分，我们有</p>
              
              <div class="detailed-calculation">
                <div class="equation-block">
                  <p>∫d³xψ̂†σ(x)(-∇²/(2m))ψ̂σ(x) = ∫d³x(1/√V)∑ₖ' e^{-ik'x}ĉ†ₖ'σ(-∇²/(2m))(1/√V)∑ₖ e^{ikx}ĉₖσ</p>
                  <p>= ∑ₖ,ₖ' ∫(d³x/V)e^{-ik'x}(k²/(2m))e^{ikx}ĉ†ₖ'σĉₖσ</p>
                  <p>= ∑ₖ,ₖ' ∫(d³x/V)e^{i(k-k')x}(k²/(2m))ĉ†ₖ'σĉₖσ</p>
                  <p>= ∑ₖ,ₖ' (k²/(2m))ĉ†ₖ'σĉₖσ ∑ₖ,ₖ' δₖ,ₖ'(k²/(2m))ĉ†ₖ'σĉₖσ</p>
                  <p>= ∑ₖσ (k²/(2m))ĉ†ₖσĉₖσ</p>
                  <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.54)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>相互作用项的处理</h3>
            <div class="mathematical-content">
              <p>而外势部分可以化为</p>
              
              <div class="equation-block">
                <p>∫d³xψ̂†σ(x)U(x)ψ̂σ(x) = ∑ₖ,ₖ' ∫(d³x/V)e^{i(k-k')x}U(x)ĉ†ₖ'σĉₖσ</p>
                <p>= ∑ₖ,ₖ'σ Uₖ'-ₖĉ†ₖ'σĉₖσ</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.55)</p>
              </div>
              
              <p>在这里我们定义了外势的傅里叶变换Uq ≡ (1/V)∫d³xe^{-iqx}U(x)。</p>
              
              <p>最后，对于相互作用部分有</p>
              
              <div class="detailed-calculation">
                <div class="equation-block">
                  <p>∫d³x∫d³yψ̂†σ(x)ψ̂†σ'(y)V(x - y)ψ̂σ'(y)ψ̂σ(x)</p>
                  <p>= (1/V²) ∑_{k₁,k₂,k₃,k₄} ∫dxdye^{-i(k₁x+k₂y-k₃y-k₄x)}V(x - y)ĉ†ₖ₁σĉ†ₖ₂σ'ĉₖ₃σ'ĉₖ₄σ</p>
                </div>
              </div>
              
              <p>既然V(x - y)仅依赖于相对位置，那么我们可以引入相对坐标k₀r = x - y和质心坐标R = (x + y)/2，(x = R + r/2, y = R - r/2)这样上式改写为¹⁷</p>
              
              <div class="detailed-calculation">
                <div class="equation-block">
                  <p>(1/V²) ∑_{k₁,k₂,k₃,k₄} ∫drdRe^{i(-k₁-k₂+k₃+k₄)R}e^{i(-k₁+k₂-k₃+k₄)r/2}V(r)ĉ†ₖ₁σĉ†ₖ₂σ'ĉₖ₃σ'ĉₖ₄σ</p>
                  <p>= (1/V) ∑_{k₁,k₂,k₃,k₄} δ₋ₖ₁₋ₖ₂₊ₖ₃₊ₖ₄,₀ ∫dre^{i(-k₁+k₂-k₃+k₄)r/2}V(r)ĉ†ₖ₁σĉ†ₖ₂σ'ĉₖ₃σ'ĉₖ₄σ</p>
                </div>
              </div>
              
              <p>这里对原心坐标的积分导致了V δ₋ₖ₁₋ₖ₂₊ₖ₃₊ₖ₄,₀。为了满足这个数的要求，我们可以令k₁ = k + q, k₂ = k' - q, k₃ = k', k₄ = k，这样对k₁, k₂, k₃, k₄的求和变为对k, k', q的求和，即</p>
              
              <div class="equation-block">
                <p>∫d³x∫d³yψ̂†σ(x)ψ̂†σ'(y)V(x - y)ψ̂σ'(y)ψ̂σ(x) = ∑_{k,k',q} ∫(dr/V)e^{-iqr}V(r)ĉ†ₖ₊qσĉ†ₖ'₋qσ'ĉₖ'σ'ĉₖσ</p>
                <p>= ∑_{k,k',σ} Vqĉ†ₖ₊qσĉ†ₖ'₋qσ'ĉₖ'σ'ĉₖσ</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.56)</p>
              </div>
              
              <p>其中相互作用势的傅里叶变换系数是Vq = (1/V)∫d³re^{-iqr}V(r)。这样整个模型在平面波基矢下的形式是</p>
              
              <div class="equation-block">
                <p>Ĥ = ∑ₖσ (k²/(2m))ĉ†ₖσĉₖσ + ∑_{k,k'σ} Uₖ'₋ₖĉ†ₖ'σĉₖσ + (1/2) ∑_{k,k',q,σ,σ'} Vqĉ†ₖ₊qσĉ†ₖ'₋qσ'ĉₖ'σ'ĉₖσ</p>
              </div>
              
              <div class="physics-insight">
                <p><strong>物理意义：</strong></p>
                <ul>
                  <li>这类密度矩阵常用于讨论空间平移不变系统的性质，例如电子气体，液氦以及晶格周期势影响不大的晶格电子问题。</li>
                  <li>对于具有周期性的固体材料，采用Bloch波作为展开的基矢更为合适，此时单粒子项自动角化，代表Bloch电子的单粒子能量以及占据数。</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>粒子密度算符在平面波基矢下的表示</h3>
            <div class="mathematical-content">
              <p>此外，粒子密度算符在平面波基矢下是</p>
              
              <div class="detailed-calculation">
                <div class="equation-block">
                  <p>ρ̂(x) = ∑σ ψ̂†σ(x)ψ̂σ(x) = ∑σ ((1/√V)∑ₖ' e^{-ik'x}ĉ†ₖ'σ)((1/√V)∑ₖ e^{ikx}ĉₖσ)</p>
                  <p>= (1/V)∑∑σ e^{i(k'-k)x}ĉ†ₖ'σĉₖσ = (1/V)∑q e^{iqx}ρ̂q</p>
                  <p>= (1/V)∑q e^{iqx}ρ̂q, ρ̂q = ∑σ ρ̂qσ = ∑σ ĉ†ₖ₊qσĉₖσ</p>
                  <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.57)</p>
                </div>
              </div>
              
              <p>ρ̂q是动量空间的密度算符，其由上述上和下两个分量组成，而系统的总粒子数算符可以写成</p>
              
              <div class="equation-block">
                <p>N̂ = ∑σ ∫d³xψ̂†σ(x)ψ̂σ(x) = (1/V)∫d³x∑∑σ e^{i(k'-k)x}ĉ†ₖ'σĉₖσ = ∑∑σ δₖ,ₖ'ĉ†ₖ'σĉₖσ = ∑ₖσ ĉ†ₖσĉₖσ</p>
                <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.58)</p>
              </div>
              
              <p>即系统总粒子数算符等于每个动量模式粒子数算符的总和。</p>
              
              <p>最后，粒子流密度算符在平面波基矢下的形式是</p>
              
              <div class="detailed-calculation">
                <div class="equation-block">
                  <p>ĵ(x) = ∑σ (1/(2mi))[ψ̂†σ(x)∇ψ̂σ(x) - ∇(ψ̂†σ(x))ψ̂σ(x)] = (1/(2miV))∑∑σ e^{i(k'-k)x}i(k + k')ĉ†ₖ'σĉₖσ</p>
                  <p>= (1/V)∑∑σ e^{iqx}(k + q/2)/(m)ĉ†ₖ₊qσĉₖσ</p>
                  <p>= (1/V)∑q e^{iqx}ĵq, ĵq = ∑σ ĵqσ = ∑ₖσ (k + q/2)/(m)ĉ†ₖ₊qσĉₖσ</p>
                  <p style="margin-top: 0.5rem; font-size: 0.9rem; color: #666;">(2.3.59)</p>
                </div>
              </div>
              
              <p>注意当q = 0时ĵq=0类似于总电子输运中电流表达式ĵ = nev。</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理分析与深入理解</h2>
        <div class="analysis-section">
          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🔬</div>
              <h3>二次量子化的物理意义</h3>
            </div>
            <div class="insight-content">
              <p>二次量子化是量子多体理论的核心工具，它将经典的多粒子波函数描述转换为场算符的语言。这种转换不仅在数学上更加优雅，更重要的是它揭示了多体系统的深层物理结构：</p>
              
              <div class="key-points">
                <div class="point-item">
                  <h4>🎯 粒子数表象的自然性</h4>
                  <p>在二次量子化中，系统的状态用粒子数表象描述，这对于理解固体中的电子行为、超导现象、以及量子气体等具有根本性意义。产生算符ĉ†ₖσ和湮灭算符ĉₖσ直接对应于在动量k、自旋σ状态下创建或消除一个粒子的物理过程。</p>
                </div>
                
                <div class="point-item">
                  <h4>⚡ 相互作用的对称性</h4>
                  <p>二次量子化形式自动保证了粒子交换对称性（费米子的反对称性或玻色子的对称性）。这在处理多电子系统时尤为重要，因为它确保了泡利不相容原理的自动满足。</p>
                </div>
                
                <div class="point-item">
                  <h4>🌊 场的概念</h4>
                  <p>场算符ψ̂(x)和ψ̂†(x)将粒子描述为量子场的激发，这为理解凝聚态物理中的集体激发（如声子、磁振子等）提供了统一的框架。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">📊</div>
              <h3>密度矩阵的物理解释</h3>
            </div>
            <div class="insight-content">
              <p>密度算符ρ̂(x) = ψ̂†(x)ψ̂(x)是量子多体理论中最基本的物理量之一，它的物理意义深刻而丰富：</p>
              
              <div class="interpretation-grid">
                <div class="interpretation-card">
                  <h4>🎯 局域粒子密度</h4>
                  <p>ρ̂(x)给出了在位置x处找到粒子的概率密度。在固体物理中，这对应于电子密度分布，是理解化学键、能带结构的基础。</p>
                  <div class="formula-highlight">
                    <p>⟨ρ̂(x)⟩ = ⟨ψ̂†(x)ψ̂(x)⟩ = n(x)</p>
                  </div>
                </div>
                
                <div class="interpretation-card">
                  <h4>🔄 守恒量的生成</h4>
                  <p>总粒子数算符N̂ = ∫d³xρ̂(x)是系统的守恒量，这反映了粒子数守恒定律在量子力学中的表现。</p>
                  <div class="formula-highlight">
                    <p>[Ĥ, N̂] = 0 （在没有粒子产生湮灭的情况下）</p>
                  </div>
                </div>
                
                <div class="interpretation-card">
                  <h4>📈 关联函数的基础</h4>
                  <p>密度-密度关联函数⟨ρ̂(x)ρ̂(y)⟩描述了不同位置粒子密度的关联，是理解相变、临界现象的关键。</p>
                  <div class="formula-highlight">
                    <p>G(x,y) = ⟨ρ̂(x)ρ̂(y)⟩ - ⟨ρ̂(x)⟩⟨ρ̂(y)⟩</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🌊</div>
              <h3>动量空间表示的优势</h3>
            </div>
            <div class="insight-content">
              <p>平面波展开将实空间的复杂相互作用转换为动量空间的简洁形式，这种转换在凝聚态物理中具有深远的意义：</p>
              
              <div class="advantage-list">
                <div class="advantage-item">
                  <div class="advantage-icon">⚡</div>
                  <div class="advantage-content">
                    <h4>动能的对角化</h4>
                    <p>在动量表象中，自由粒子的动能项自动对角化为∑ₖσ(k²/2m)ĉ†ₖσĉₖσ，每个动量模式的能量清晰可见。这为理解费米面、能带结构提供了直观的图像。</p>
                  </div>
                </div>
                
                <div class="advantage-item">
                  <div class="advantage-icon">🔄</div>
                  <div class="advantage-content">
                    <h4>动量守恒的体现</h4>
                    <p>相互作用项中的动量守恒δ₋ₖ₁₋ₖ₂₊ₖ₃₊ₖ₄,₀自动出现，这反映了平移不变系统的基本对称性。这种守恒律在散射过程、输运现象中起关键作用。</p>
                  </div>
                </div>
                
                <div class="advantage-item">
                  <div class="advantage-icon">📐</div>
                  <div class="advantage-content">
                    <h4>傅里叶变换的威力</h4>
                    <p>相互作用势V(x-y)的傅里叶变换Vq将实空间的复杂积分转化为动量空间的简单求和，大大简化了计算。这在处理库仑相互作用、交换相互作用时尤为重要。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🎯</div>
              <h3>自旋的重要性</h3>
            </div>
            <div class="insight-content">
              <p>在电子系统中引入自旋不仅是为了完整性，更是因为自旋在凝聚态物理中扮演着核心角色：</p>
              
              <div class="spin-effects">
                <div class="effect-card">
                  <h4>🧲 磁性的起源</h4>
                  <p>电子自旋是固体磁性的根本来源。自旋-自旋相互作用导致了铁磁、反铁磁等磁有序态。在二次量子化中，这些相互作用可以通过自旋指标的求和自然地表达。</p>
                  <div class="example-box">
                    <p><strong>海森堡模型：</strong> H = -J∑⟨i,j⟩Ŝᵢ·Ŝⱼ</p>
                    <p>在二次量子化中表示为自旋密度的相互作用</p>
                  </div>
                </div>
                
                <div class="effect-card">
                  <h4>⚡ 超导配对</h4>
                  <p>Cooper对的形成本质上是自旋单态配对。BCS理论中的配对哈密顿量直接涉及不同自旋态的电子算符：</p>
                  <div class="example-box">
                    <p>H_pair = ∑ₖ Δₖ(ĉ†ₖ↑ĉ†₋ₖ↓ + h.c.)</p>
                    <p>这里体现了自旋单态配对的本质</p>
                  </div>
                </div>
                
                <div class="effect-card">
                  <h4>🌀 自旋轨道耦合</h4>
                  <p>在重元素材料中，自旋轨道耦合变得重要，导致了拓扑绝缘体、Weyl半金属等新奇量子态。二次量子化为描述这些现象提供了自然的语言。</p>
                </div>
              </div>
            </div>
          </div>

          <div class="physics-insight">
            <div class="insight-header">
              <div class="insight-icon">🔬</div>
              <h3>实际应用中的考虑</h3>
            </div>
            <div class="insight-content">
              <p>二次量子化的密度矩阵形式在实际计算和理论分析中具有广泛的应用价值：</p>
              
              <div class="application-grid">
                <div class="app-card">
                  <h4>💻 数值计算</h4>
                  <p>在量子蒙特卡洛、密度泛函理论等数值方法中，二次量子化形式提供了高效的算法基础。粒子数表象使得大规模系统的计算成为可能。</p>
                </div>
                
                <div class="app-card">
                  <h4>📊 实验对比</h4>
                  <p>密度算符的期望值直接对应于实验可观测量，如电子密度分布（X射线散射）、磁化强度（中子散射）等。这为理论与实验的对比提供了直接的桥梁。</p>
                </div>
                
                <div class="app-card">
                  <h4>🎯 近似方法</h4>
                  <p>平均场理论、Hartree-Fock方法等重要近似都基于二次量子化形式。这些方法通过对相互作用项的适当处理，将多体问题简化为有效的单体问题。</p>
                </div>
                
                <div class="app-card">
                  <h4>🌊 场论方法</h4>
                  <p>二次量子化是量子场论方法在凝聚态物理中应用的基础。路径积分、费曼图技术等强大工具都建立在这一表述之上。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>密度矩阵的深层理论基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎭</div>
            <h3>混合态的数学描述</h3>
            <p>纯态与混合态的统一表示</p>
            <div class="mathematical-content">
              <h4>密度矩阵的定义：</h4>
              <div class="equation-block">
                <p>ρ̂ = ∑ᵢ pᵢ|ψᵢ⟩⟨ψᵢ| (混合态)</p>
                <p>ρ̂ = |ψ⟩⟨ψ| (纯态)</p>
                <p>Tr(ρ̂) = 1, ρ̂ ≥ 0</p>
              </div>
              
              <h4>纯度与混合度：</h4>
              <div class="equation-block">
                <p>纯度：P = Tr(ρ̂²)</p>
                <p>纯态：P = 1</p>
                <p>最大混合态：P = 1/d (d维)</p>
              </div>
              
              <h4>von Neumann熵：</h4>
              <div class="equation-block">
                <p>S = -Tr(ρ̂ ln ρ̂)</p>
                <p>纯态：S = 0</p>
                <p>最大混合态：S = ln d</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>热平衡态密度矩阵</h3>
            <p>统计力学中的密度矩阵</p>
            <div class="mathematical-content">
              <h4>正则系综：</h4>
              <div class="equation-block">
                <p>ρ̂ = e^{-βĤ}/Z</p>
                <p>Z = Tr(e^{-βĤ}) (配分函数)</p>
                <p>β = 1/(kᵦT)</p>
              </div>
              
              <h4>巨正则系综：</h4>
              <div class="equation-block">
                <p>ρ̂ = e^{-β(Ĥ-μN̂)}/Ξ</p>
                <p>Ξ = Tr(e^{-β(Ĥ-μN̂)}) (巨配分函数)</p>
                <p>μ: 化学势</p>
              </div>
              
              <h4>期望值计算：</h4>
              <div class="equation-block">
                <p>⟨Ô⟩ = Tr(ρ̂Ô)</p>
                <p>⟨n̂ₖ⟩ = Tr(ρ̂n̂ₖ)</p>
                <p>关联函数：⟨ÔÂ⟩ - ⟨Ô⟩⟨Â⟩</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔗</div>
            <h3>约化密度矩阵</h3>
            <p>子系统的量子态描述</p>
            <div class="mathematical-content">
              <h4>偏迹操作：</h4>
              <div class="equation-block">
                <p>ρ̂_A = Tr_B(ρ̂_{AB})</p>
                <p>ρ̂_A = ∑ᵢ⟨i_B|ρ̂_{AB}|i_B⟩</p>
                <p>{|i_B⟩}: 子系统B的基</p>
              </div>
              
              <h4>Schmidt分解：</h4>
              <div class="equation-block">
                <p>|ψ⟩_{AB} = ∑ᵢ √λᵢ|i_A⟩⊗|i_B⟩</p>
                <p>ρ̂_A = ∑ᵢ λᵢ|i_A⟩⟨i_A|</p>
                <p>λᵢ: Schmidt系数</p>
              </div>
              
              <h4>纠缠度量：</h4>
              <div class="physics-insight">
                <p><strong>纠缠熵：</strong>S_A = -Tr(ρ̂_A ln ρ̂_A)</p>
                <p><strong>纠缠负性：</strong>𝒩 = (||ρ̂_A^{T_A}||₁ - 1)/2</p>
                <p><strong>并发度：</strong>C = max(0, λ₁-λ₂-λ₃-λ₄)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体系统中的高级应用</h2>
        <div class="application-grid">
          <div class="application-card">
            <div class="application-icon">🌊</div>
            <h3>量子相变理论</h3>
            <p>密度矩阵在相变研究中的应用</p>
            <div class="mathematical-content">
              <h4>序参量与对称性破缺：</h4>
              <div class="equation-block">
                <p>⟨Ô⟩ = Tr(ρ̂Ô) (序参量)</p>
                <p>自发对称性破缺：⟨Ô⟩ ≠ 0</p>
                <p>临界点：∂²F/∂φ² = 0</p>
              </div>
              
              <h4>量子临界性：</h4>
              <div class="equation-block">
                <p>关联长度：ξ ∝ |g-g_c|^{-ν}</p>
                <p>动力学指数：z</p>
                <p>标度律：ω ∝ k^z</p>
              </div>
              
              <h4>纠缠熵的标度行为：</h4>
              <div class="physics-insight">
                <p><strong>面积定律：</strong>S ∝ L^{d-1} (基态)</p>
                <p><strong>对数修正：</strong>S ∝ ln L (临界点)</p>
                <p><strong>拓扑纠缠熵：</strong>γ = ln(D) (拓扑相)</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🔬</div>
            <h3>开放量子系统</h3>
            <p>环境耦合下的密度矩阵演化</p>
            <div class="mathematical-content">
              <h4>Lindblad主方程：</h4>
              <div class="equation-block">
                <p>∂ρ̂/∂t = -i[Ĥ,ρ̂] + ∑ₖ(L̂ₖρ̂L̂ₖ† - ½{L̂ₖ†L̂ₖ,ρ̂})</p>
                <p>L̂ₖ: Lindblad算符</p>
                <p>耗散项：γ(n̂ρ̂n̂ - ½{n̂²,ρ̂})</p>
              </div>
              
              <h4>量子跳跃方法：</h4>
              <div class="equation-block">
                <p>|ψ(t+dt)⟩ = (1-iĤ_eff dt)|ψ(t)⟩</p>
                <p>Ĥ_eff = Ĥ - i∑ₖL̂ₖ†L̂ₖ/2</p>
                <p>跳跃概率：pₖ = ⟨ψ|L̂ₖ†L̂ₖ|ψ⟩dt</p>
              </div>
              
              <h4>稳态解与弛豫：</h4>
              <div class="physics-insight">
                <p><strong>稳态：</strong>∂ρ̂_ss/∂t = 0</p>
                <p><strong>弛豫时间：</strong>τ = 1/γ</p>
                <p><strong>量子Zeno效应：</strong>频繁测量抑制演化</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🧮</div>
            <h3>量子信息处理</h3>
            <p>密度矩阵在量子计算中的应用</p>
            <div class="mathematical-content">
              <h4>量子通道：</h4>
              <div class="equation-block">
                <p>Φ(ρ̂) = ∑ᵢ K̂ᵢρ̂K̂ᵢ†</p>
                <p>∑ᵢ K̂ᵢ†K̂ᵢ = Î (完备性)</p>
                <p>Choi矩阵：J_Φ = (id⊗Φ)(|Φ⁺⟩⟨Φ⁺|)</p>
              </div>
              
              <h4>量子纠错：</h4>
              <div class="equation-block">
                <p>稳定子：S = ⟨g₁,g₂,...,gₙ₋ₖ⟩</p>
                <p>逻辑态：|ψ_L⟩ ∈ ker(S)</p>
                <p>纠错条件：⟨ψᵢ|E†ⱼEₖ|ψₗ⟩ = Cⱼₖδᵢₗ</p>
              </div>
              
              <h4>量子算法：</h4>
              <div class="physics-insight">
                <p><strong>Grover搜索：</strong>O(√N)复杂度</p>
                <p><strong>Shor分解：</strong>指数加速</p>
                <p><strong>VQE：</strong>变分量子本征求解器</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🌌</div>
            <h3>多体局域化</h3>
            <p>无序系统中的密度矩阵行为</p>
            <div class="mathematical-content">
              <h4>Anderson局域化：</h4>
              <div class="equation-block">
                <p>Ĥ = ∑ᵢεᵢn̂ᵢ + ∑_{⟨i,j⟩}tᵢⱼ(ĉᵢ†ĉⱼ + h.c.)</p>
                <p>εᵢ: 随机在位能</p>
                <p>局域化长度：ξ ∝ 1/W²</p>
              </div>
              
              <h4>多体局域化相变：</h4>
              <div class="equation-block">
                <p>热化相 ↔ MBL相</p>
                <p>临界无序强度：W_c</p>
                <p>本征态热化假设破缺</p>
              </div>
              
              <h4>纠缠增长：</h4>
              <div class="physics-insight">
                <p><strong>热化相：</strong>S(t) ∝ t (体积定律)</p>
                <p><strong>MBL相：</strong>S(t) ∝ ln t (对数增长)</p>
                <p><strong>临界点：</strong>幂律增长</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>玻色子和费米子的密度矩阵</h2>
        <div class="comparison-grid">
          <div class="comparison-card boson">
            <h3>🌊 玻色子系统</h3>
            <div class="mathematical-content">
              <h4>玻色-爱因斯坦分布：</h4>
              <div class="equation-block">
                <p>⟨nₖ⟩ = 1/(e^(β(εₖ-μ)) - 1)</p>
                <p>μ < εₘᵢₙ (化学势限制)</p>
              </div>
              
              <h4>玻色-爱因斯坦凝聚：</h4>
              <div class="equation-block">
                <p>T < Tᶜ: 宏观占据基态</p>
                <p>⟨n₀⟩ ~ N</p>
              </div>
            </div>
          </div>

          <div class="comparison-card fermion">
            <h3>⚛️ 费米子系统</h3>
            <div class="mathematical-content">
              <h4>费米-狄拉克分布：</h4>
              <div class="equation-block">
                <p>⟨nₖ⟩ = 1/(e^(β(εₖ-μ)) + 1)</p>
                <p>0 ≤ ⟨nₖ⟩ ≤ 1</p>
              </div>
              
              <h4>费米海：</h4>
              <div class="equation-block">
                <p>T = 0: ⟨nₖ⟩ = θ(εF - εₖ)</p>
                <p>εF = 费米能</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>关联函数与密度矩阵</h2>
        <div class="physics-insight">
          <h3>🔗 多体关联</h3>
          <p>密度矩阵包含了系统的所有关联信息：</p>
          <ul>
            <li><strong>单粒子性质：</strong>通过单粒子约化密度矩阵描述</li>
            <li><strong>配对关联：</strong>通过双粒子约化密度矩阵体现</li>
            <li><strong>长程序：</strong>非对角长程序反映相变</li>
            <li><strong>量子纠缠：</strong>约化密度矩阵的纯度度量纠缠</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2>密度矩阵的性质</h2>
        <div class="property-grid">
          <div class="property-item">
            <h3>🔄 厄米性</h3>
            <p>ρ̂† = ρ̂</p>
          </div>
          <div class="property-item">
            <h3>➕ 正定性</h3>
            <p>⟨ψ|ρ̂|ψ⟩ ≥ 0</p>
          </div>
          <div class="property-item">
            <h3>1️⃣ 归一化</h3>
            <p>Tr(ρ̂) = 1</p>
          </div>
          <div class="property-item">
            <h3>📉 幂等性</h3>
            <p>纯态: ρ̂² = ρ̂</p>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>实际应用示例</h2>
        <div class="example-box">
          <h3>例1：理想费米气体的密度矩阵</h3>
          <p>零温下的费米海：</p>
          <div class="equation-block">
            <p>ρ̂ = ∏ₖ<εF |k⟩⟨k| ⊗ ∏ₖ>εF |0⟩⟨0|</p>
            <p>所有k < kF的态被占据</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：BCS超导态的密度矩阵</h3>
          <p>Cooper对凝聚态：</p>
          <div class="equation-block">
            <p>|BCS⟩ = ∏ₖ (uₖ + vₖâ†ₖ↑â†₋ₖ↓)|0⟩</p>
            <p>非对角长程序</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>密度矩阵的演化</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⏰</div>
            <h3>von Neumann方程</h3>
            <p>密度矩阵的时间演化</p>
            <div class="mathematical-content">
              <h4>演化方程：</h4>
              <div class="equation-block">
                <p>iℏ ∂ρ̂/∂t = [Ĥ, ρ̂]</p>
              </div>
              
              <h4>形式解：</h4>
              <div class="equation-block">
                <p>ρ̂(t) = e^(-iĤt/ℏ)ρ̂(0)e^(iĤt/ℏ)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>主方程</h3>
            <p>开放系统的密度矩阵演化</p>
            <div class="mathematical-content">
              <h4>Lindblad方程：</h4>
              <div class="equation-block">
                <p>∂ρ̂/∂t = -i[Ĥ, ρ̂] + Σᵢ(L̂ᵢρ̂L̂ᵢ† - ½{L̂ᵢ†L̂ᵢ, ρ̂})</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>密度矩阵统一描述纯态和混合态</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>二次量子化提供了自然的表示框架</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>约化密度矩阵揭示多体关联结构</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>统计分布自然体现粒子统计性质</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3_3',
  mounted() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #dc3545;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  color: #666;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
}

.introduction {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #721c24;
  font-weight: 500;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.application-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #6c757d;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.application-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
}

.application-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.application-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-align: center;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.comparison-card {
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.boson {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 2px solid #2196f3;
}

.fermion {
  background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
  border: 2px solid #ff9800;
}

.comparison-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  text-align: center;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.mathematical-content h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #dc3545;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #0c5460;
  margin-bottom: 1rem;
}

.physics-insight ul {
  list-style: none;
  padding: 0;
}

.physics-insight li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.physics-insight li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #0c5460;
  font-weight: bold;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.property-item {
  background: linear-gradient(135deg, #fff2cc 0%, #ffe082 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.property-item h3 {
  color: #f57f17;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.property-item p {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  margin: 0;
}

.applications {
  margin: 3rem 0;
}

.example-box {
  background: #f0f8ff;
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.example-box h3 {
  color: #0056b3;
  margin-bottom: 1rem;
}

.summary {
  background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary h2 {
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-item p {
  margin: 0;
  flex: 1;
}

      .detailed-calculation {
        background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
        border-left: 4px solid #4f46e5;
        padding: 1.5rem;
        margin: 1rem 0;
        border-radius: 8px;
      }

      .detailed-calculation .equation-block {
        background: white;
        padding: 1rem;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      }

      .analysis-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

      .insight-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .insight-icon {
        font-size: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .insight-content {
        line-height: 1.8;
      }

      .key-points {
        display: grid;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .point-item {
        background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
        padding: 1.5rem;
        border-radius: 12px;
        border-left: 4px solid #0ea5e9;
      }

      .point-item h4 {
        color: #0c4a6e;
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
      }

      .interpretation-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .interpretation-card {
        background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
        padding: 1.5rem;
        border-radius: 12px;
        border-left: 4px solid #f59e0b;
      }

      .interpretation-card h4 {
        color: #92400e;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      .formula-highlight {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        font-family: 'Courier New', monospace;
        text-align: center;
        border: 2px solid #fbbf24;
      }

      .advantage-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .advantage-item {
        display: flex;
        gap: 1rem;
        background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
        padding: 1.5rem;
        border-radius: 12px;
        border-left: 4px solid #22c55e;
      }

      .advantage-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
      }

      .advantage-content h4 {
        color: #166534;
        margin-bottom: 0.8rem;
        font-size: 1.1rem;
      }

      .spin-effects {
        display: grid;
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .effect-card {
        background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
        padding: 1.5rem;
        border-radius: 12px;
        border-left: 4px solid #ec4899;
      }

      .effect-card h4 {
        color: #be185d;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      .example-box {
        background: white;
        padding: 1rem;
        border-radius: 8px;
        margin-top: 1rem;
        border: 2px solid #f9a8d4;
        font-family: 'Courier New', monospace;
      }

      .application-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin-top: 1.5rem;
      }

      .app-card {
        background: linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%);
        padding: 1.5rem;
        border-radius: 12px;
        border-left: 4px solid #a855f7;
      }

      .app-card h4 {
        color: #7c2d12;
        margin-bottom: 1rem;
        font-size: 1.1rem;
      }

      .derivation-section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid, .comparison-grid, .application-grid {
    grid-template-columns: 1fr;
  }
  
  .property-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>