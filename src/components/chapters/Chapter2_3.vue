<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3 二次量子化表示下的一次量子化</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子化理论</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>从二次量子化回到一次量子化</h2>
        <p class="lead-text">
          虽然二次量子化为多体问题提供了强大的工具，但在某些情况下，我们需要将二次量子化的结果转换回一次量子化的形式，
          以便与传统的量子力学结果进行比较，或者在特定的物理图像下理解问题。
        </p>
      </section>

      <section class="content-section">
        <h2>波函数的对应关系</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>单粒子波函数</h3>
            <p>从场算符到坐标表示波函数的转换</p>
            <div class="mathematical-content">
              <h4>场算符展开：</h4>
              <div class="equation-block">
                <p>ψ̂(x) = Σₖ φₖ(x)âₖ</p>
                <p>其中φₖ(x)是单粒子本征态</p>
              </div>
              
              <h4>单粒子态：</h4>
              <div class="equation-block">
                <p>|k⟩ = â†ₖ|0⟩</p>
                <p>⟨x|k⟩ = φₖ(x)</p>
                <p>波函数：ψₖ(x) = ⟨x|k⟩ = φₖ(x)</p>
              </div>
              
              <h4>坐标表示：</h4>
              <div class="equation-block">
                <p>⟨x|ψ̂†(x')|0⟩ = δ(x-x')</p>
                <p>这体现了场算符的局域性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">👥</div>
            <h3>多粒子波函数</h3>
            <p>Fock空间态到坐标空间波函数的映射</p>
            <div class="mathematical-content">
              <h4>双粒子态：</h4>
              <div class="equation-block">
                <p>|k₁,k₂⟩ = â†ₖ₁â†ₖ₂|0⟩</p>
                <p>⟨x₁,x₂|k₁,k₂⟩ = φₖ₁(x₁)φₖ₂(x₂) ± φₖ₁(x₂)φₖ₂(x₁)</p>
                <p>± 对应费米子/玻色子</p>
              </div>
              
              <h4>N粒子态：</h4>
              <div class="equation-block">
                <p>|k₁,...,kₙ⟩ = â†ₖ₁...â†ₖₙ|0⟩</p>
                <p>Ψ(x₁,...,xₙ) = (1/√N!) det[φₖᵢ(xⱼ)] (费米子)</p>
                <p>Ψ(x₁,...,xₙ) = (1/√N!) Σₚ φₖₚ₍₁₎(x₁)...φₖₚ₍ₙ₎(xₙ) (玻色子)</p>
              </div>
              
              <h4>Slater行列式：</h4>
              <div class="equation-block">
                <p>对于费米子系统：</p>
                <p>Ψ(x₁,...,xₙ) = (1/√N!) |φₖ₁(x₁) ... φₖ₁(xₙ)|</p>
                <p>                      |  ⋮    ⋱    ⋮   |</p>
                <p>                      |φₖₙ(x₁) ... φₖₙ(xₙ)|</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>统计性质的体现</h3>
            <p>粒子交换对称性在波函数中的表现</p>
            <div class="mathematical-content">
              <h4>费米子反对称性：</h4>
              <div class="equation-block">
                <p>Ψ(x₁,x₂,...,xᵢ,...,xⱼ,...,xₙ) = </p>
                <p>-Ψ(x₁,x₂,...,xⱼ,...,xᵢ,...,xₙ)</p>
              </div>
              
              <h4>玻色子对称性：</h4>
              <div class="equation-block">
                <p>Ψ(x₁,x₂,...,xᵢ,...,xⱼ,...,xₙ) = </p>
                <p>+Ψ(x₁,x₂,...,xⱼ,...,xᵢ,...,xₙ)</p>
              </div>
              
              <h4>Pauli不相容原理：</h4>
              <div class="equation-block">
                <p>对于费米子，如果xᵢ = xⱼ (包括自旋)：</p>
                <p>Ψ(...,xᵢ,...,xᵢ,...) = 0</p>
                <p>这自动从Slater行列式得出</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>表示转换的具体步骤与方法</h2>
        
        <!-- 坐标表示到动量表示 -->
        <div class="theory-section">
          <h3>坐标表示到动量表示的转换</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 傅里叶变换基础</h4>
              <div class="equation-block">
                <p><strong>场算符的傅里叶展开：</strong></p>
                <p>ψ̂(r) = (1/√V) Σₖ e^(ik·r) ĉₖ</p>
                <p>ψ̂†(r) = (1/√V) Σₖ e^(-ik·r) ĉₖ†</p>
                <p><strong>逆变换：</strong></p>
                <p>ĉₖ = (1/√V) ∫ e^(-ik·r) ψ̂(r) d³r</p>
                <p>ĉₖ† = (1/√V) ∫ e^(ik·r) ψ̂†(r) d³r</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 算符转换规则</h4>
              <div class="equation-block">
                <p><strong>动能算符：</strong></p>
                <p>T̂ = ∫ ψ̂†(r) (-ℏ²∇²/2m) ψ̂(r) d³r = Σₖ (ℏ²k²/2m) ĉₖ†ĉₖ</p>
                <p><strong>势能算符（局域）：</strong></p>
                <p>V̂ = ∫ ψ̂†(r) V(r) ψ̂(r) d³r = Σₖₖ' Vₖₖ' ĉₖ†ĉₖ'</p>
                <p>其中 Vₖₖ' = (1/V) ∫ V(r) e^(i(k'-k)·r) d³r</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 相互作用项的处理</h4>
              <div class="equation-block">
                <p><strong>二体相互作用：</strong></p>
                <p>Ĥᵢₙₜ = (1/2) ∫∫ ψ̂†(r₁)ψ̂†(r₂) v(r₁,r₂) ψ̂(r₂)ψ̂(r₁) d³r₁d³r₂</p>
                <p><strong>动量表示：</strong></p>
                <p>Ĥᵢₙₜ = (1/2V) Σₖ₁ₖ₂ₖ₃ₖ₄ vₖ₁ₖ₂ₖ₃ₖ₄ ĉₖ₁†ĉₖ₂†ĉₖ₃ĉₖ₄ δₖ₁₊ₖ₂,ₖ₃₊ₖ₄</p>
                <p>其中 vₖ₁ₖ₂ₖ₃ₖ₄ = ∫∫ e^(-i(k₁·r₁+k₂·r₂)) v(r₁,r₂) e^(i(k₃·r₁+k₄·r₂)) d³r₁d³r₂</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 能带表示转换 -->
        <div class="theory-section">
          <h3>能带表示与Bloch态转换</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. Bloch定理应用</h4>
              <div class="equation-block">
                <p><strong>Bloch波函数：</strong>ψₙₖ(r) = e^(ik·r) uₙₖ(r)</p>
                <p>其中 uₙₖ(r+R) = uₙₖ(r) 具有晶格周期性</p>
                <p><strong>场算符展开：</strong></p>
                <p>ψ̂(r) = Σₙₖ ψₙₖ(r) ĉₙₖ</p>
                <p>ψ̂†(r) = Σₙₖ ψₙₖ*(r) ĉₙₖ†</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 能带哈密顿量</h4>
              <div class="equation-block">
                <p><strong>单粒子项：</strong></p>
                <p>Ĥ₀ = Σₙₖ εₙₖ ĉₙₖ†ĉₙₖ</p>
                <p>其中 εₙₖ 是能带色散关系</p>
                <p><strong>相互作用项：</strong></p>
                <p>Ĥᵢₙₜ = (1/2) Σₙ₁ₙ₂ₙ₃ₙ₄ Σₖ₁ₖ₂ₖ₃ₖ₄ Vₙ₁ₙ₂ₙ₃ₙ₄(k₁,k₂,k₃,k₄) ĉₙ₁ₖ₁†ĉₙ₂ₖ₂†ĉₙ₃ₖ₃ĉₙ₄ₖ₄</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 矩阵元计算</h4>
              <div class="equation-block">
                <p><strong>能带间跃迁矩阵元：</strong></p>
                <p>Vₙ₁ₙ₂ₙ₃ₙ₄(k₁,k₂,k₃,k₄) = ∫∫ ψₙ₁ₖ₁*(r₁)ψₙ₂ₖ₂*(r₂) v(r₁,r₂) ψₙ₃ₖ₃(r₁)ψₙ₄ₖ₄(r₂) d³r₁d³r₂</p>
                <p><strong>选择定则：</strong>动量守恒 k₁+k₂ = k₃+k₄ + G (倒格矢)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 自旋轨道耦合 -->
        <div class="theory-section">
          <h3>自旋轨道耦合的表示转换</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 自旋轨道基</h4>
              <div class="equation-block">
                <p><strong>自旋轨道波函数：</strong>χᵢ(r,σ) = φᵢ(r)ξσ</p>
                <p>其中 φᵢ(r) 是轨道部分，ξσ 是自旋部分</p>
                <p><strong>场算符：</strong></p>
                <p>ψ̂σ(r) = Σᵢ φᵢ(r) ĉᵢσ</p>
                <p>ψ̂σ†(r) = Σᵢ φᵢ*(r) ĉᵢσ†</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 自旋相关相互作用</h4>
              <div class="equation-block">
                <p><strong>Heisenberg交换：</strong></p>
                <p>Ĥₑₓ = -J Σᵢⱼ Ŝᵢ·Ŝⱼ</p>
                <p>其中 Ŝᵢ = (1/2) Σσσ' ĉᵢσ† σ̂σσ' ĉᵢσ'</p>
                <p><strong>自旋轨道耦合：</strong></p>
                <p>ĤSO = λ Σᵢ L̂ᵢ·Ŝᵢ</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 总角动量表示</h4>
              <div class="equation-block">
                <p><strong>总角动量：</strong>Ĵ = L̂ + Ŝ</p>
                <p><strong>耦合基：</strong>|n,j,mⱼ⟩ = Σₗₛ ⟨l,mₗ;s,mₛ|j,mⱼ⟩ |n,l,mₗ⟩|s,mₛ⟩</p>
                <p><strong>变换矩阵：</strong>Clebsch-Gordan系数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>密度矩阵的计算方法与应用</h2>
        
        <!-- 一体密度矩阵 -->
        <div class="theory-section">
          <h3>一体密度矩阵的详细计算</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 定义与性质</h4>
              <div class="equation-block">
                <p><strong>一体密度矩阵：</strong></p>
                <p>γ(r,r') = ⟨Ψ|ψ̂†(r')ψ̂(r)|Ψ⟩</p>
                <p><strong>对角元：</strong>ρ(r) = γ(r,r) = ⟨Ψ|ψ̂†(r)ψ̂(r)|Ψ⟩</p>
                <p><strong>归一化：</strong>∫ ρ(r) d³r = N (总粒子数)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 动量表示</h4>
              <div class="equation-block">
                <p><strong>动量空间密度矩阵：</strong></p>
                <p>γₖₖ' = ⟨Ψ|ĉₖ†ĉₖ'|Ψ⟩</p>
                <p><strong>占据数：</strong>nₖ = γₖₖ = ⟨Ψ|ĉₖ†ĉₖ|Ψ⟩</p>
                <p><strong>变换关系：</strong></p>
                <p>γ(r,r') = (1/V) Σₖₖ' e^(ik·r-ik'·r') γₖₖ'</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 自然轨道分解</h4>
              <div class="equation-block">
                <p><strong>本征值方程：</strong>∫ γ(r,r') φᵢ(r') d³r' = nᵢ φᵢ(r)</p>
                <p><strong>谱分解：</strong>γ(r,r') = Σᵢ nᵢ φᵢ*(r') φᵢ(r)</p>
                <p><strong>占据数约束：</strong>0 ≤ nᵢ ≤ 1 (费米子), nᵢ ≥ 0 (玻色子)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 二体密度矩阵 -->
        <div class="theory-section">
          <h3>二体密度矩阵与相关函数</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 二体密度矩阵定义</h4>
              <div class="equation-block">
                <p><strong>坐标表示：</strong></p>
                <p>Γ(r₁,r₂;r₁',r₂') = ⟨Ψ|ψ̂†(r₁')ψ̂†(r₂')ψ̂(r₂)ψ̂(r₁)|Ψ⟩</p>
                <p><strong>对角元：</strong>ρ₂(r₁,r₂) = Γ(r₁,r₂;r₁,r₂)</p>
                <p><strong>归一化：</strong>∫∫ ρ₂(r₁,r₂) d³r₁d³r₂ = N(N-1)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 约化密度矩阵</h4>
              <div class="equation-block">
                <p><strong>约化关系：</strong></p>
                <p>γ(r₁,r₁') = (1/(N-1)) ∫ Γ(r₁,r₂;r₁',r₂) d³r₂</p>
                <p><strong>对相关函数：</strong></p>
                <p>g(r₁,r₂) = ρ₂(r₁,r₂)/[ρ(r₁)ρ(r₂)]</p>
                <p><strong>相关洞：</strong>h(r₁,r₂) = g(r₁,r₂) - 1</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 能量表达式</h4>
              <div class="equation-block">
                <p><strong>总能量：</strong></p>
                <p>E = ∫ γ(r,r') h(r') |ᵣ'→ᵣ d³r + (1/2) ∫∫ ρ₂(r₁,r₂) v(r₁,r₂) d³r₁d³r₂</p>
                <p><strong>动能：</strong>T = ∫ γ(r,r') (-ℏ²∇²/2m) |ᵣ'→ᵣ d³r</p>
                <p><strong>势能：</strong>V = (1/2) ∫∫ ρ₂(r₁,r₂) v(r₁,r₂) d³r₁d³r₂</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 实际计算方法 -->
        <div class="theory-section">
          <h3>密度矩阵的实际计算技术</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. Hartree-Fock近似</h4>
              <div class="equation-block">
                <p><strong>单Slater行列式：</strong></p>
                <p>γ(r,r') = Σᵢ^occ φᵢ*(r') φᵢ(r)</p>
                <p><strong>二体密度矩阵：</strong></p>
                <p>ρ₂(r₁,r₂) = ρ(r₁)ρ(r₂) - |γ(r₁,r₂)|²</p>
                <p>第二项是交换贡献</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 配置相互作用方法</h4>
              <div class="equation-block">
                <p><strong>多组态展开：</strong>|Ψ⟩ = Σᵢ cᵢ |Φᵢ⟩</p>
                <p><strong>密度矩阵：</strong></p>
                <p>γ(r,r') = Σᵢⱼ cᵢ*cⱼ ⟨Φᵢ|ψ̂†(r')ψ̂(r)|Φⱼ⟩</p>
                <p><strong>Slater-Condon规则：</strong>用于计算行列式间矩阵元</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 密度泛函理论</h4>
              <div class="equation-block">
                <p><strong>Kohn-Sham密度：</strong></p>
                <p>ρ(r) = Σᵢ^occ |φᵢ^KS(r)|²</p>
                <p><strong>交换相关洞：</strong></p>
                <p>ρₓc(r,r') = ρ₂(r,r') - ρ(r)ρ(r')</p>
                <p><strong>局域密度近似：</strong>εₓc[ρ] = ∫ ρ(r) εₓc(ρ(r)) d³r</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体应用实例与计算流程</h2>
        
        <!-- Hubbard模型详细分析 -->
        <div class="theory-section">
          <h3>Hubbard模型的密度矩阵分析</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 模型哈密顿量</h4>
              <div class="equation-block">
                <p><strong>Hubbard哈密顿量：</strong></p>
                <p>Ĥ = -t Σ_{⟨i,j⟩,σ} (ĉᵢσ†ĉⱼσ + h.c.) + U Σᵢ n̂ᵢ↑n̂ᵢ↓</p>
                <p><strong>局域密度算符：</strong>n̂ᵢσ = ĉᵢσ†ĉᵢσ</p>
                <p><strong>总密度：</strong>n̂ᵢ = n̂ᵢ↑ + n̂ᵢ↓</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 密度矩阵元素</h4>
              <div class="equation-block">
                <p><strong>局域占据：</strong>⟨n̂ᵢσ⟩ = ⟨ĉᵢσ†ĉᵢσ⟩</p>
                <p><strong>跃迁振幅：</strong>⟨ĉᵢσ†ĉⱼσ⟩ (i≠j)</p>
                <p><strong>双占据：</strong>⟨n̂ᵢ↑n̂ᵢ↓⟩ = ⟨ĉᵢ↑†ĉᵢ↑ĉᵢ↓†ĉᵢ↓⟩</p>
                <p><strong>自旋相关：</strong>⟨Ŝᵢ·Ŝⱼ⟩ = (1/4)[⟨n̂ᵢ↑n̂ⱼ↑⟩ + ⟨n̂ᵢ↓n̂ⱼ↓⟩ - ⟨n̂ᵢ↑n̂ⱼ↓⟩ - ⟨n̂ᵢ↓n̂ⱼ↑⟩]</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 平均场处理</h4>
              <div class="equation-block">
                <p><strong>Hartree-Fock分解：</strong></p>
                <p>⟨n̂ᵢ↑n̂ᵢ↓⟩ ≈ ⟨n̂ᵢ↑⟩⟨n̂ᵢ↓⟩ + ⟨n̂ᵢ↑⟩δn̂ᵢ↓ + ⟨n̂ᵢ↓⟩δn̂ᵢ↑</p>
                <p><strong>有效哈密顿量：</strong></p>
                <p>Ĥₑff = Σᵢσ [εᵢσ - μ] n̂ᵢσ - t Σ_{⟨i,j⟩,σ} (ĉᵢσ†ĉⱼσ + h.c.)</p>
                <p>其中 εᵢσ = U⟨n̂ᵢ,-σ⟩</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 计算流程总结 -->
        <div class="theory-section">
          <h3>密度矩阵计算的标准流程</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 基组选择与设置</h4>
              <div class="equation-block">
                <p><strong>步骤1：</strong>选择合适的单粒子基 {φᵢ}</p>
                <p><strong>步骤2：</strong>确定系统的对称性与守恒量</p>
                <p><strong>步骤3：</strong>写出哈密顿量的二次量子化形式</p>
                <p><strong>步骤4：</strong>确定初始态或基态的形式</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 密度矩阵计算</h4>
              <div class="equation-block">
                <p><strong>步骤5：</strong>计算一体密度矩阵 γᵢⱼ = ⟨ĉᵢ†ĉⱼ⟩</p>
                <p><strong>步骤6：</strong>计算二体密度矩阵 Γᵢⱼₖₗ = ⟨ĉᵢ†ĉⱼ†ĉₗĉₖ⟩</p>
                <p><strong>步骤7：</strong>利用Wick定理或其他方法简化计算</p>
                <p><strong>步骤8：</strong>检查归一化与守恒律</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 物理量提取</h4>
              <div class="equation-block">
                <p><strong>步骤9：</strong>计算能量期望值</p>
                <p><strong>步骤10：</strong>分析相关函数与激发谱</p>
                <p><strong>步骤11：</strong>研究相变与临界行为</p>
                <p><strong>步骤12：</strong>与实验或其他理论方法比较</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>算符的坐标表示</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>单体算符</h3>
            <p>从二次量子化算符到坐标空间算符的转换</p>
            <div class="mathematical-content">
              <h4>动能算符：</h4>
              <div class="equation-block">
                <p>T̂ = Σₖ εₖ â†ₖâₖ</p>
                <p>↓ 坐标表示</p>
                <p>T̂ = ∫ ψ̂†(x)(-ℏ²∇²/2m)ψ̂(x)dx</p>
                <p>↓ 一次量子化</p>
                <p>T̂ = Σᵢ (-ℏ²∇ᵢ²/2m)</p>
              </div>
              
              <h4>外势算符：</h4>
              <div class="equation-block">
                <p>V̂ₑₓₜ = ∫ ψ̂†(x)V(x)ψ̂(x)dx</p>
                <p>↓ 一次量子化</p>
                <p>V̂ₑₓₜ = Σᵢ V(xᵢ)</p>
              </div>
              
              <h4>矩阵元计算：</h4>
              <div class="equation-block">
                <p>⟨Ψ|Ô₁|Ψ⟩ = ∫...∫ Ψ*(x₁,...,xₙ) Σᵢ ô(xᵢ) Ψ(x₁,...,xₙ) dx₁...dxₙ</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🤝</div>
            <h3>双体算符</h3>
            <p>相互作用算符的坐标表示</p>
            <div class="mathematical-content">
              <h4>Coulomb相互作用：</h4>
              <div class="equation-block">
                <p>V̂ = (1/2)∫∫ ψ̂†(x)ψ̂†(x')v(x-x')ψ̂(x')ψ̂(x)dxdx'</p>
                <p>↓ 一次量子化</p>
                <p>V̂ = (1/2)Σᵢ≠ⱼ v(xᵢ-xⱼ)</p>
                <p>v(x-x') = e²/(4πε₀|x-x'|)</p>
              </div>
              
              <h4>交换积分：</h4>
              <div class="equation-block">
                <p>直接积分：⟨ij|v|ij⟩ = ∫∫ φᵢ*(x)φⱼ*(x')v(x-x')φᵢ(x)φⱼ(x')dxdx'</p>
                <p>交换积分：⟨ij|v|ji⟩ = ∫∫ φᵢ*(x)φⱼ*(x')v(x-x')φⱼ(x)φᵢ(x')dxdx'</p>
              </div>
              
              <h4>Hartree-Fock能量：</h4>
              <div class="equation-block">
                <p>E = Σᵢ ⟨i|h|i⟩ + (1/2)Σᵢ,ⱼ [⟨ij|v|ij⟩ - ⟨ij|v|ji⟩]</p>
                <p>其中第二项是Hartree项减去Fock项</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>哈密顿算符</h3>
            <p>完整系统哈密顿算符的一次量子化形式</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>Ĥ = Σᵢ (-ℏ²∇ᵢ²/2m + V(xᵢ)) + (1/2)Σᵢ≠ⱼ v(xᵢ-xⱼ)</p>
              </div>
              
              <h4>氢原子分子离子：</h4>
              <div class="equation-block">
                <p>Ĥ = -ℏ²∇₁²/2m - ℏ²∇₂²/2m - e²/(4πε₀r₁) - e²/(4πε₀r₂) + e²/(4πε₀|r₁-r₂|)</p>
              </div>
              
              <h4>Hubbard模型：</h4>
              <div class="equation-block">
                <p>二次量子化：Ĥ = -t Σ⟨i,j⟩,σ (ĉ†ᵢσĉⱼσ + h.c.) + U Σᵢ n̂ᵢ↑n̂ᵢ↓</p>
                <p>↓ 紧束缚近似下的一次量子化理解</p>
                <p>跳跃项：粒子在格点间的量子隧穿</p>
                <p>相互作用项：同一格点上的库仑排斥</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体转换实例</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>自由粒子系统</h3>
            <p>最简单的转换例子</p>
            <div class="mathematical-content">
              <h4>二次量子化：</h4>
              <div class="equation-block">
                <p>Ĥ = Σₖ εₖ â†ₖâₖ</p>
                <p>εₖ = ℏ²k²/(2m)</p>
                <p>|ψ⟩ = Σₖ cₖ â†ₖ|0⟩</p>
              </div>
              
              <h4>一次量子化：</h4>
              <div class="equation-block">
                <p>Ĥ = -ℏ²∇²/(2m)</p>
                <p>ψ(x) = Σₖ cₖ eⁱᵏˣ/√V</p>
                <p>Ĥψ(x) = Eψ(x)</p>
              </div>
              
              <h4>能量本征值：</h4>
              <div class="equation-block">
                <p>E = ℏ²k²/(2m) (两种表示给出相同结果)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>谐振子系统</h3>
            <p>玻色子系统的典型例子</p>
            <div class="mathematical-content">
              <h4>二次量子化：</h4>
              <div class="equation-block">
                <p>Ĥ = ℏω(â†â + 1/2)</p>
                <p>|n⟩ = (â†)ⁿ/√n! |0⟩</p>
                <p>Eₙ = ℏω(n + 1/2)</p>
              </div>
              
              <h4>一次量子化：</h4>
              <div class="equation-block">
                <p>Ĥ = -ℏ²d²/(2mdx²) + (1/2)mω²x²</p>
                <p>ψₙ(x) = (mω/πℏ)^(1/4) (1/√(2ⁿn!)) Hₙ(√(mω/ℏ)x) e^(-mωx²/2ℏ)</p>
                <p>Eₙ = ℏω(n + 1/2)</p>
              </div>
              
              <h4>对应关系：</h4>
              <div class="equation-block">
                <p>â† ↔ (1/√2)(√(mω/ℏ)x - i√(1/mωℏ)p)</p>
                <p>â ↔ (1/√2)(√(mω/ℏ)x + i√(1/mωℏ)p)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>氦原子</h3>
            <p>双电子系统的处理</p>
            <div class="mathematical-content">
              <h4>哈密顿算符：</h4>
              <div class="equation-block">
                <p>Ĥ = -ℏ²∇₁²/(2m) - ℏ²∇₂²/(2m) - 2e²/(4πε₀r₁) - 2e²/(4πε₀r₂) + e²/(4πε₀r₁₂)</p>
              </div>
              
              <h4>波函数对称性：</h4>
              <div class="equation-block">
                <p>空间对称，自旋反对称：ψ(r₁,r₂) = ψ(r₂,r₁)</p>
                <p>空间反对称，自旋对称：ψ(r₁,r₂) = -ψ(r₂,r₁)</p>
              </div>
              
              <h4>变分处理：</h4>
              <div class="equation-block">
                <p>试探波函数：ψ(r₁,r₂) = φ(r₁)φ(r₂)</p>
                <p>φ(r) = (Z_eff³/πa₀³)^(1/2) e^(-Z_eff r/a₀)</p>
                <p>优化参数Z_eff以最小化能量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>转换的物理意义</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎭</div>
            <h3>表示的等价性</h3>
            <p>不同表示方法的物理等价性</p>
            <div class="mathematical-content">
              <h4>物理量的不变性：</h4>
              <ul>
                <li>能量本征值完全相同</li>
                <li>跃迁概率保持不变</li>
                <li>对称性质得到保持</li>
                <li>守恒量保持守恒</li>
              </ul>
              
              <h4>计算复杂度：</h4>
              <ul>
                <li>一次量子化：适合少体系统</li>
                <li>二次量子化：适合多体系统</li>
                <li>场论方法：适合连续系统</li>
                <li>数值方法：适合复杂相互作用</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>物理图像的互补性</h3>
            <p>不同表示提供的物理洞察</p>
            <div class="mathematical-content">
              <h4>一次量子化优势：</h4>
              <ul>
                <li>直观的粒子图像</li>
                <li>明确的坐标和动量</li>
                <li>经典对应关系清晰</li>
                <li>波函数的直接解释</li>
              </ul>
              
              <h4>二次量子化优势：</h4>
              <ul>
                <li>粒子数可变系统</li>
                <li>统计性质自然包含</li>
                <li>多体关联易于处理</li>
                <li>场的量子涨落</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌟</div>
            <h3>应用场景选择</h3>
            <p>何时使用哪种表示方法</p>
            <div class="mathematical-content">
              <h4>使用一次量子化：</h4>
              <ul>
                <li>原子分子结构计算</li>
                <li>少体散射问题</li>
                <li>量子化学计算</li>
                <li>教学和概念理解</li>
              </ul>
              
              <h4>使用二次量子化：</h4>
              <ul>
                <li>凝聚态多体系统</li>
                <li>量子场论</li>
                <li>统计力学</li>
                <li>相变和临界现象</li>
              </ul>
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
              <li>波函数的对应关系</li>
              <li>算符的坐标表示</li>
              <li>统计性质的体现</li>
              <li>物理图像的互补性</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔧 转换技巧</h3>
            <ul>
              <li>场算符到波函数</li>
              <li>Fock态到Slater行列式</li>
              <li>算符矩阵元计算</li>
              <li>对称性的保持</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 应用价值</h3>
            <ul>
              <li>理论方法的统一</li>
              <li>计算方法的选择</li>
              <li>物理直觉的建立</li>
              <li>问题求解的灵活性</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section class="content-section">
        <h2>表示转换细节与密度矩阵</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>一次 ↔ 二次量子化映射</h3>
            <ul>
              <li>波函数 ψ(x₁,...,x_N) ↔ 场算符 ĉ(x)、ĉ†(x)</li>
              <li>Slater行列式 ↔ Fock占据态 |n₁,n₂,...⟩</li>
              <li>一体算符 ↔ <code>Σ_{i,j} h_{ij} ĉ†_i ĉ_j</code></li>
              <li>二体算符 ↔ <code>1/2 Σ_{i,j,k,l} v_{ij;kl} ĉ†_i ĉ†_j ĉ_l ĉ_k</code></li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>密度矩阵与可观测量</h3>
            <ul>
              <li>一体密度矩阵：<code>γ_{ij} = ⟨ĉ†_j ĉ_i⟩</code></li>
              <li>二体密度矩阵：<code>Γ_{ijkl} = ⟨ĉ†_i ĉ†_j ĉ_l ĉ_k⟩</code></li>
              <li>粒子数与电荷：<code>N = Σ_i γ_{ii}</code></li>
              <li>能量期望：用 <code>γ</code> 与 <code>Γ</code> 表示一体与二体贡献</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>示例：Hubbard模型</h3>
            <ul>
              <li>一体部分：<code>H_t = -t Σ_{⟨i,j⟩,σ} ĉ†_{iσ} ĉ_{jσ}</code></li>
              <li>相互作用：<code>H_U = U Σ_i n_{i↑} n_{i↓}</code></li>
              <li>密度矩阵用于计算占据与动能期望</li>
              <li>自旋与电荷通道可分解分析关联效应</li>
            </ul>
          </div>
        </div>

        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>从坐标到动量表象</h3>
            <p>利用傅里叶变换把 <code>ĉ(x)</code> 写为 <code>ĉ_k</code>，便于处理平移不变系统与守恒量。</p>
            <pre><code>ĉ(x) = 1/√V Σ_k e^{ik·x} ĉ_k</code></pre>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🧩</div>
            <h3>计算流程建议</h3>
            <ul>
              <li>选择合适基（坐标/动量/能带）</li>
              <li>写出算符的二次量子化形式</li>
              <li>用 <code>γ</code> 与 <code>Γ</code> 表达期望值</li>
              <li>根据对称性与守恒律简化计算</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3',
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
  background: #f0f9ff;
  border-radius: 1rem;
  border-left: 4px solid #667eea;
}

.introduction h2 {
  color: #1e40af;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #1e3a8a;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  color: #1e40af;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bfdbfe;
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
  border: 1px solid #e0f2fe;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #1e40af;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.concept-card p {
  color: #475569;
  margin-bottom: 1rem;
}

.mathematical-content {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border: 1px solid #e2e8f0;
}

.mathematical-content h4 {
  color: #1e40af;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-left: 3px solid #667eea;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.equation-block p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  color: #1e40af;
  font-size: 0.95rem;
}

.equation-block strong {
  color: #1e3a8a;
}

.mathematical-content ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.mathematical-content li {
  padding: 0.25rem 0;
  color: #475569;
  position: relative;
  padding-left: 1.5rem;
}

.mathematical-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
}
</style>