<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.2 二次量子化中的多体波函数和算符表示</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">多体理论</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>多体波函数的二次量子化表示</h2>
        <p class="lead-text">
          在二次量子化框架下，多体波函数不再是坐标的函数，而是通过产生湮灭算符在Fock空间中构造。
          这种表示方法不仅简化了多体问题的数学处理，还自然地包含了粒子的统计性质。
        </p>
      </section>

      <section class="content-section">
        <h2>Fock空间中的态表示</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🏗️</div>
            <h3>态的构造</h3>
            <p>从真空态出发，通过产生算符构造多粒子态</p>
            <div class="mathematical-content">
              <h4>基本构造：</h4>
              <div class="equation-block">
                <p><strong>真空态：</strong>|0⟩</p>
                <p><strong>单粒子态：</strong>|k⟩ = â†ₖ|0⟩</p>
                <p><strong>双粒子态：</strong>|k₁,k₂⟩ = â†ₖ₁â†ₖ₂|0⟩</p>
                <p><strong>N粒子态：</strong>|k₁,...,kₙ⟩ = â†ₖ₁...â†ₖₙ|0⟩</p>
              </div>
              
              <h4>占据数表示：</h4>
              <div class="equation-block">
                <p>|n₁,n₂,...,nₖ,...⟩ = ∏ₖ (â†ₖ)^nₖ/√(nₖ!)|0⟩</p>
                <p>其中nₖ是态k的占据数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔢</div>
            <h3>粒子数算符</h3>
            <p>描述系统中粒子数的算符及其性质</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p><strong>单模粒子数：</strong>n̂ₖ = â†ₖâₖ</p>
                <p><strong>总粒子数：</strong>N̂ = Σₖ â†ₖâₖ</p>
              </div>
              
              <h4>本征值方程：</h4>
              <div class="equation-block">
                <p>n̂ₖ|nₖ⟩ = nₖ|nₖ⟩</p>
                <p>N̂|n₁,n₂,...⟩ = (Σₖnₖ)|n₁,n₂,...⟩</p>
              </div>
              
              <h4>重要性质：</h4>
              <ul>
                <li>费米子：nₖ = 0 或 1</li>
                <li>玻色子：nₖ = 0, 1, 2, ...</li>
                <li>[N̂, â†ₖ] = â†ₖ，[N̂, âₖ] = -âₖ</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>场算符</h3>
            <p>连接坐标表示和动量表示的桥梁</p>
            <div class="mathematical-content">
              <h4>场算符定义：</h4>
              <div class="equation-block">
                <p>ψ̂(x) = Σₖ φₖ(x)âₖ</p>
                <p>ψ̂†(x) = Σₖ φₖ*(x)â†ₖ</p>
                <p>其中φₖ(x)是单粒子波函数</p>
              </div>
              
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p><strong>费米子：</strong></p>
                <p>{ψ̂(x), ψ̂†(x')} = δ(x-x')</p>
                <p>{ψ̂(x), ψ̂(x')} = 0</p>
                
                <p><strong>玻色子：</strong></p>
                <p>[ψ̂(x), ψ̂†(x')] = δ(x-x')</p>
                <p>[ψ̂(x), ψ̂(x')] = 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>算符的二次量子化表示</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>单体算符</h3>
            <p>只涉及单个粒子的物理量算符</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>Ô₁ = Σᵢ,ⱼ ⟨i|ô|j⟩ â†ᵢâⱼ</p>
                <p>其中⟨i|ô|j⟩是单粒子矩阵元</p>
              </div>
              
              <h4>常见例子：</h4>
              <div class="equation-block">
                <p><strong>动能算符：</strong></p>
                <p>T̂ = Σₖ εₖ â†ₖâₖ</p>
                <p>εₖ = ℏ²k²/(2m)</p>
                
                <p><strong>外势算符：</strong></p>
                <p>V̂ₑₓₜ = ∫ ψ̂†(x)V(x)ψ̂(x)dx</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🤝</div>
            <h3>双体算符</h3>
            <p>描述粒子间相互作用的算符</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>Ô₂ = (1/2)Σᵢ,ⱼ,ₖ,ₗ ⟨ij|v|kl⟩ â†ᵢâ†ⱼâₗâₖ</p>
                <p>其中⟨ij|v|kl⟩是双粒子矩阵元</p>
              </div>
              
              <h4>Coulomb相互作用：</h4>
              <div class="equation-block">
                <p>V̂ = (1/2)∫∫ ψ̂†(x)ψ̂†(x')v(x-x')ψ̂(x')ψ̂(x)dxdx'</p>
                <p>v(x-x') = e²/(4πε₀|x-x'|)</p>
              </div>
              
              <h4>正规排序：</h4>
              <p>为避免真空涨落的发散，需要进行正规排序：</p>
              <div class="equation-block">
                <p>:â†ᵢâⱼ: = â†ᵢâⱼ</p>
                <p>:âᵢâ†ⱼ: = â†ⱼâᵢ</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>多体哈密顿算符</h3>
            <p>完整系统的能量算符表示</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>Ĥ = T̂ + V̂ₑₓₜ + V̂ᵢₙₜ</p>
                <p>= Σᵢ,ⱼ tᵢⱼ â†ᵢâⱼ + (1/2)Σᵢ,ⱼ,ₖ,ₗ vᵢⱼₖₗ â†ᵢâ†ⱼâₗâₖ</p>
              </div>
              
              <h4>具体例子：</h4>
              <div class="equation-block">
                <p><strong>Hubbard模型：</strong></p>
                <p>Ĥ = -t Σ⟨i,j⟩,σ (ĉ†ᵢσĉⱼσ + h.c.) + U Σᵢ n̂ᵢ↑n̂ᵢ↓</p>
                
                <p><strong>Jellium模型：</strong></p>
                <p>Ĥ = Σₖ,σ εₖ ĉ†ₖσĉₖσ + (1/2V)Σₖ,ₖ',q vq ĉ†ₖ+q,σĉ†ₖ'-q,σ'ĉₖ'σ'ĉₖσ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Wick定理与收缩</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔗</div>
            <h3>收缩的概念</h3>
            <p>算符乘积的简化计算方法</p>
            <div class="mathematical-content">
              <h4>收缩定义：</h4>
              <div class="equation-block">
                <p>两个算符的收缩是它们的期望值：</p>
                <p>⟨âᵢâ†ⱼ⟩ = δᵢⱼ⟨nᵢ⟩</p>
                <p>⟨â†ᵢâⱼ⟩ = δᵢⱼ⟨nᵢ⟩</p>
              </div>
              
              <h4>图形表示：</h4>
              <p>用线连接收缩的算符对：</p>
              <div class="equation-block">
                <p>âᵢ ——— â†ⱼ 表示收缩</p>
                <p>未连接的算符保持正规排序</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>Wick定理</h3>
            <p>算符乘积展开的系统方法</p>
            <div class="mathematical-content">
              <h4>定理表述：</h4>
              <div class="equation-block">
                <p>T{A₁A₂...Aₙ} = :A₁A₂...Aₙ: + 所有可能的收缩</p>
                <p>其中T表示时间排序，:...:表示正规排序</p>
              </div>
              
              <h4>应用例子：</h4>
              <div class="equation-block">
                <p>T{âᵢ(t₁)â†ⱼ(t₂)} = :âᵢ(t₁)â†ⱼ(t₂): + ⟨T{âᵢ(t₁)â†ⱼ(t₂)}⟩</p>
                <p>= :âᵢ(t₁)â†ⱼ(t₂): + Gᵢⱼ(t₁-t₂)</p>
              </div>
              
              <h4>物理意义：</h4>
              <ul>
                <li>将复杂的多体问题分解为单体和关联项</li>
                <li>为微扰理论提供系统的展开方法</li>
                <li>连接格林函数和费曼图</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎨</div>
            <h3>费曼图表示</h3>
            <p>图形化表示多体过程的方法</p>
            <div class="mathematical-content">
              <h4>基本元素：</h4>
              <div class="equation-block">
                <p><strong>传播子：</strong>——— (单粒子格林函数)</p>
                <p><strong>顶点：</strong>● (相互作用)</p>
                <p><strong>外线：</strong>进入和离开的粒子</p>
                <p><strong>内线：</strong>虚粒子交换</p>
              </div>
              
              <h4>规则：</h4>
              <ul>
                <li>每条内线对应一个传播子</li>
                <li>每个顶点对应一个相互作用</li>
                <li>对所有内部变量积分求和</li>
                <li>包含适当的对称因子</li>
              </ul>
              
              <h4>物理解释：</h4>
              <ul>
                <li>直观表示粒子的产生、湮灭和散射</li>
                <li>系统化计算微扰展开</li>
                <li>连接理论计算和实验观测</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体应用实例</h2>
        <div class="application-grid">
          <div class="application-card">
            <h3>🔬 自由费米气体</h3>
            <div class="application-content">
              <h4>哈密顿算符：</h4>
              <p>Ĥ = Σₖ,σ εₖ ĉ†ₖσĉₖσ</p>
              
              <h4>基态：</h4>
              <p>|FS⟩ = ∏|k|&lt;kF,σ ĉ†ₖσ|0⟩</p>
              
              <h4>激发态：</h4>
              <p>粒子-空穴对：ĉ†ₖĉₖ'|FS⟩</p>
              
              <h4>物理性质：</h4>
              <ul>
                <li>费米面的形成</li>
                <li>低能激发的线性色散</li>
                <li>比热的线性温度依赖</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>⚛️ 相互作用电子气</h3>
            <div class="application-content">
              <h4>哈密顿算符：</h4>
              <p>Ĥ = Σₖ,σ εₖ ĉ†ₖσĉₖσ + (1/2V)Σₖ,ₖ',q vq ĉ†ₖ+q,σĉ†ₖ'-q,σ'ĉₖ'σ'ĉₖσ</p>
              
              <h4>微扰处理：</h4>
              <p>使用Wick定理展开相互作用项</p>
              
              <h4>主要效应：</h4>
              <ul>
                <li>Hartree-Fock近似</li>
                <li>屏蔽效应和等离激元</li>
                <li>准粒子重整化</li>
                <li>关联效应和局域化</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>🌐 BCS超导理论</h3>
            <div class="application-content">
              <h4>BCS哈密顿算符：</h4>
              <p>Ĥ = Σₖ,σ εₖ ĉ†ₖσĉₖσ - g Σₖ,ₖ' ĉ†ₖ↑ĉ†₋ₖ↓ĉ₋ₖ'↓ĉₖ'↑</p>
              
              <h4>BCS基态：</h4>
              <p>|BCS⟩ = ∏ₖ (uₖ + vₖ ĉ†ₖ↑ĉ†₋ₖ↓)|0⟩</p>
              
              <h4>关键概念：</h4>
              <ul>
                <li>库珀对的形成</li>
                <li>能隙的开启</li>
                <li>准粒子激发</li>
                <li>相干因子uₖ, vₖ</li>
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
              <li>Fock空间中的态构造</li>
              <li>场算符的对易关系</li>
              <li>算符的二次量子化表示</li>
              <li>正规排序和Wick定理</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔧 数学工具</h3>
            <ul>
              <li>产生湮灭算符代数</li>
              <li>收缩和费曼图</li>
              <li>时间排序和格林函数</li>
              <li>微扰理论展开</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 物理应用</h3>
            <ul>
              <li>多体系统的精确描述</li>
              <li>相互作用效应的处理</li>
              <li>集体激发的理解</li>
              <li>相变和临界现象</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section class="content-section">
        <h2>高级主题与HF推导</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>Slater行列式与反对称性</h3>
            <ul>
              <li>多体波函数以行列式确保交换反对称</li>
              <li>占据态与单粒子自旋轨道的一一对应</li>
              <li>交换项来源于反对易代数与反对称结构</li>
              <li>闭壳层近似下的简化与物理含义</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>二体算符的二次量子化</h3>
            <ul>
              <li><code>V = 1/2 Σ_{i,j,k,l} ⟨ij|v|kl⟩ ĉ†_i ĉ†_j ĉ_l ĉ_k</code></li>
              <li>矩阵元 <code>⟨ij|v|kl⟩</code> 由单粒子基与势能决定</li>
              <li>正规排序将真空能与自相互作用剔除</li>
              <li>交换与直积分的区分与物理意义</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>Hartree-Fock推导要点</h3>
            <ul>
              <li>能量泛函最小化得到自洽方程</li>
              <li>Fock算符：<code>F = h + J - K</code>（直积分 J、交换积分 K）</li>
              <li>自洽迭代：更新占据与轨道直至收敛</li>
              <li>结果给出有效单粒子能级与轨道</li>
            </ul>
          </div>
        </div>

        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧮</div>
            <h3>HF能量泛函示例</h3>
            <pre><code>E[{φ_i}] = Σ_i ⟨φ_i|h|φ_i⟩ 
 + 1/2 Σ_{i,j} [⟨φ_i φ_j|v|φ_i φ_j⟩ - ⟨φ_i φ_j|v|φ_j φ_i⟩]</code></pre>
            <p>对 <code>{φ_i}</code> 取变分并施加正交约束可得 Fock 方程。</p>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🔁</div>
            <h3>自洽流程</h3>
            <ul>
              <li>选择初始轨道与占据</li>
              <li>计算 J、K 与 Fock 算符</li>
              <li>解本征问题更新轨道</li>
              <li>重复直至能量与密度收敛</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体波函数的详细数学表示</h2>
        
        <!-- Slater行列式的严格构造 -->
        <div class="theory-section">
          <h3>Slater行列式的严格构造</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 反对称化算符</h4>
              <div class="equation-block">
                <p><strong>反对称化算符：</strong>Â = (1/√N!) Σₚ (-1)ᵖ P̂</p>
                <p>其中P̂是置换算符，(-1)ᵖ是置换的宇称</p>
                <p><strong>性质：</strong>Â² = Â，Tr(Â) = 1</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. Slater行列式的显式形式</h4>
              <div class="equation-block">
                <p><strong>N电子Slater行列式：</strong></p>
                <p>|Ψ⟩ = (1/√N!) det|φᵢ(rⱼ)| = (1/√N!) |φ₁(r₁) φ₁(r₂) ... φ₁(rₙ)|</p>
                <p>                                    |φ₂(r₁) φ₂(r₂) ... φ₂(rₙ)|</p>
                <p>                                    |  ...     ...   ...   ... |</p>
                <p>                                    |φₙ(r₁) φₙ(r₂) ... φₙ(rₙ)|</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 二次量子化表示</h4>
              <div class="equation-block">
                <p><strong>Slater行列式的二次量子化形式：</strong></p>
                <p>|Ψ⟩ = ∏ᵢ₌₁ᴺ ĉᵢ†|0⟩</p>
                <p>其中i标记被占据的单粒子态</p>
                <p><strong>自动满足反对称性：</strong>由于{ĉᵢ†, ĉⱼ†} = 0</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 多体波函数的性质 -->
        <div class="theory-section">
          <h3>多体波函数的基本性质</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 归一化条件</h4>
              <div class="equation-block">
                <p><strong>归一化：</strong>⟨Ψ|Ψ⟩ = 1</p>
                <p><strong>正交性：</strong>⟨Ψᵢ|Ψⱼ⟩ = δᵢⱼ</p>
                <p><strong>完备性：</strong>Σᵢ |Ψᵢ⟩⟨Ψᵢ| = 1̂</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 密度矩阵</h4>
              <div class="equation-block">
                <p><strong>一体密度矩阵：</strong>ρ₁(r,r') = N∫...∫ Ψ*(r,r₂,...,rₙ)Ψ(r',r₂,...,rₙ)dr₂...drₙ</p>
                <p><strong>二次量子化形式：</strong>ρ₁(r,r') = ⟨Ψ|ψ̂†(r')ψ̂(r)|Ψ⟩</p>
                <p><strong>对角化：</strong>ρ₁(r,r') = Σᵢ nᵢφᵢ*(r')φᵢ(r)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 自然轨道</h4>
              <div class="equation-block">
                <p><strong>自然轨道方程：</strong>∫ ρ₁(r,r')φᵢ(r')dr' = nᵢφᵢ(r)</p>
                <p><strong>占据数：</strong>0 ≤ nᵢ ≤ 1 (费米子)</p>
                <p><strong>物理意义：</strong>自然轨道是密度矩阵的本征函数</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 相关函数与激发 -->
        <div class="theory-section">
          <h3>相关函数与激发态</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 对相关函数</h4>
              <div class="equation-block">
                <p><strong>径向分布函数：</strong>g(r₁,r₂) = ρ₂(r₁,r₂)/[ρ(r₁)ρ(r₂)]</p>
                <p><strong>交换-相关洞：</strong>ρₓc(r₁,r₂) = ρ₂(r₁,r₂) - ρ(r₁)ρ(r₂)</p>
                <p><strong>物理意义：</strong>描述电子间的相关效应</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 激发态的构造</h4>
              <div class="equation-block">
                <p><strong>单激发：</strong>|Ψᵢᵃ⟩ = ĉₐ†ĉᵢ|Ψ₀⟩</p>
                <p><strong>双激发：</strong>|Ψᵢⱼᵃᵇ⟩ = ĉₐ†ĉᵦ†ĉⱼĉᵢ|Ψ₀⟩</p>
                <p><strong>一般激发：</strong>|Ψ⟩ = (1 + T̂₁ + T̂₂ + ...)|Ψ₀⟩</p>
                <p>其中T̂ₙ是n体激发算符</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Hartree-Fock方法的完整推导</h2>
        
        <!-- 变分原理 -->
        <div class="theory-section">
          <h3>变分原理与能量泛函</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 能量泛函的建立</h4>
              <div class="equation-block">
                <p><strong>总哈密顿量：</strong>Ĥ = Σᵢ ĥᵢ + (1/2)Σᵢ≠ⱼ v̂ᵢⱼ</p>
                <p><strong>能量期望值：</strong>E[Ψ] = ⟨Ψ|Ĥ|Ψ⟩</p>
                <p><strong>Slater行列式下：</strong></p>
                <p>E = Σᵢ ⟨φᵢ|ĥ|φᵢ⟩ + (1/2)Σᵢⱼ [⟨φᵢφⱼ|v|φᵢφⱼ⟩ - ⟨φᵢφⱼ|v|φⱼφᵢ⟩]</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 约束条件</h4>
              <div class="equation-block">
                <p><strong>正交归一化：</strong>⟨φᵢ|φⱼ⟩ = δᵢⱼ</p>
                <p><strong>拉格朗日乘数法：</strong></p>
                <p>L = E - Σᵢⱼ εᵢⱼ(⟨φᵢ|φⱼ⟩ - δᵢⱼ)</p>
                <p>其中εᵢⱼ是拉格朗日乘数</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 变分条件</h4>
              <div class="equation-block">
                <p><strong>变分方程：</strong>δL/δ⟨φᵢ| = 0</p>
                <p><strong>导出Fock方程：</strong>F̂φᵢ = εᵢφᵢ</p>
                <p>其中F̂是Fock算符</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Fock算符的构造 -->
        <div class="theory-section">
          <h3>Fock算符的详细构造</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. Fock算符的组成</h4>
              <div class="equation-block">
                <p><strong>Fock算符：</strong>F̂ = ĥ + Ĵ - K̂</p>
                <p><strong>单体项：</strong>ĥ = -ℏ²∇²/(2m) + Vₑₓₜ(r)</p>
                <p><strong>Coulomb算符：</strong>Ĵφᵢ(r) = Σⱼ ∫ |φⱼ(r')|² v(r,r') dr' φᵢ(r)</p>
                <p><strong>交换算符：</strong>K̂φᵢ(r) = Σⱼ ∫ φⱼ*(r') v(r,r') φᵢ(r') dr' φⱼ(r)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 自洽场方程</h4>
              <div class="equation-block">
                <p><strong>Hartree-Fock方程：</strong></p>
                <p>[ĥ + Σⱼ (Ĵⱼ - K̂ⱼ)]φᵢ = εᵢφᵢ</p>
                <p><strong>自洽条件：</strong>Fock算符依赖于解{φᵢ}</p>
                <p><strong>迭代求解：</strong>φᵢ⁽ⁿ⁺¹⁾ ← F̂[{φⱼ⁽ⁿ⁾}]φᵢ⁽ⁿ⁾ = εᵢ⁽ⁿ⁺¹⁾φᵢ⁽ⁿ⁺¹⁾</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 收敛判据</h4>
              <div class="equation-block">
                <p><strong>能量收敛：</strong>|E⁽ⁿ⁺¹⁾ - E⁽ⁿ⁾| &lt; εₑ</p>
                <p><strong>密度收敛：</strong>∫ |ρ⁽ⁿ⁺¹⁾(r) - ρ⁽ⁿ⁾(r)|² dr &lt; ερ</p>
                <p><strong>轨道收敛：</strong>max |⟨φᵢ⁽ⁿ⁺¹⁾|φᵢ⁽ⁿ⁾⟩ - 1| &lt; εφ</p>
              </div>
            </div>
          </div>
        </div>

        <!-- HF理论的物理意义 -->
        <div class="theory-section">
          <h3>Hartree-Fock理论的物理意义与局限</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 物理图像</h4>
              <div class="equation-block">
                <p><strong>平均场近似：</strong>每个电子在其他电子的平均场中运动</p>
                <p><strong>交换效应：</strong>同自旋电子的泡利排斥</p>
                <p><strong>自洽性：</strong>平均场由电子分布自洽确定</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 理论优势</h4>
              <div class="equation-block">
                <p><strong>变分上界：</strong>EHF ≥ E₀（精确基态能量）</p>
                <p><strong>尺寸一致性：</strong>能量随系统大小线性标度</p>
                <p><strong>计算可行性：</strong>N³标度的计算复杂度</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 主要局限</h4>
              <div class="equation-block">
                <p><strong>相关能缺失：</strong>Ecorr = E₀ - EHF</p>
                <p><strong>静态相关：</strong>多参考态的重要性</p>
                <p><strong>动态相关：</strong>瞬时电子相关效应</p>
                <p><strong>自相互作用误差：</strong>电子与自身的虚假相互作用</p>
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
  name: 'Chapter2_2',
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
  border-left: 4px solid #4facfe;
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
  box-shadow: 0 8px 25px rgba(79, 172, 254, 0.15);
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
  border-left: 3px solid #4facfe;
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
  color: #4facfe;
  font-weight: bold;
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
  border: 1px solid #e0f2fe;
  transition: transform 0.2s;
}

.application-card:hover {
  transform: translateY(-2px);
}

.application-card h3 {
  color: #1e40af;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.application-content h4 {
  color: #475569;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
}

.application-content p {
  color: #475569;
  margin: 0.25rem 0;
  font-family: 'Courier New', monospace;
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

.application-content ul {
  list-style: none;
  padding: 0;
}

.application-content li {
  padding: 0.25rem 0;
  color: #475569;
  position: relative;
  padding-left: 1.5rem;
}

.application-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #4facfe;
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
  
  .application-grid {
    grid-template-columns: 1fr;
  }
}
</style>