<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.5 Green函数与传播子的物理联系</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">格林函数理论</span>
        <span class="reading-time">预计阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>Green函数的物理意义</h2>
        <p class="lead-text">
          Green函数是多体量子理论中最重要的概念之一，它不仅提供了计算物理量的系统方法，
          更重要的是揭示了量子多体系统中粒子传播和相互作用的深层物理图像。
          通过Green函数，我们可以直接联系理论计算与实验观测。
        </p>
      </section>

      <section class="content-section">
        <h2>Green函数的定义与分类</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>单粒子Green函数</h3>
            <p>描述单个粒子在多体系统中的传播</p>
            <div class="mathematical-content">
              <h4>时间排序Green函数：</h4>
              <div class="equation-block">
                <p>G(x,t;x',t') = -i⟨T{ψ̂(x,t)ψ̂†(x',t')}⟩</p>
                <p>T: 时间排序算符</p>
                <p>⟨...⟩: 基态期望值</p>
              </div>
              
              <h4>因果结构：</h4>
              <div class="equation-block">
                <p>t > t': G = -i⟨ψ̂(x,t)ψ̂†(x',t')⟩ (粒子传播)</p>
                <p>t < t': G = +i⟨ψ̂†(x',t')ψ̂(x,t)⟩ (空穴传播)</p>
              </div>
              
              <h4>频率-动量表示：</h4>
              <div class="equation-block">
                <p>G(k,ω) = ∫∫ G(x,t) e^(-ik·x+iωt) dxdt</p>
                <p>这是最常用的表示形式</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>推迟和超前Green函数</h3>
            <p>描述系统对外界扰动的响应</p>
            <div class="mathematical-content">
              <h4>推迟Green函数：</h4>
              <div class="equation-block">
                <p>G^R(x,t;x',t') = -iθ(t-t')⟨[ψ̂(x,t), ψ̂†(x',t')]₊⟩</p>
                <p>θ(t): 阶跃函数</p>
                <p>[A,B]₊: 反对易子 (费米子) 或对易子 (玻色子)</p>
              </div>
              
              <h4>超前Green函数：</h4>
              <div class="equation-block">
                <p>G^A(x,t;x',t') = +iθ(t'-t)⟨[ψ̂(x,t), ψ̂†(x',t')]₊⟩</p>
              </div>
              
              <h4>解析性质：</h4>
              <div class="equation-block">
                <p>G^R(k,ω): 上半复平面解析</p>
                <p>G^A(k,ω): 下半复平面解析</p>
                <p>G^R(k,ω) = [G^A(k,ω)]* (厄米性)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>谱函数</h3>
            <p>连接Green函数与物理观测量</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>A(k,ω) = -2Im G^R(k,ω) = i[G^R(k,ω) - G^A(k,ω)]</p>
                <p>A(k,ω) ≥ 0 (正定性)</p>
              </div>
              
              <h4>谱表示：</h4>
              <div class="equation-block">
                <p>G^R(k,ω) = ∫ A(k,ω')/(ω - ω' + iη) dω'</p>
                <p>η → 0⁺</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>A(k,ω): 动量k、能量ω的态密度</p>
                <p>∫ A(k,ω) dω = 1 (求和规则)</p>
                <p>ARPES实验直接测量A(k,ω)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Green函数的完整理论框架</h2>
        
        <!-- Lehmann表示的详细推导 -->
        <div class="theory-section">
          <h3>Lehmann表示的严格推导</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 完备性关系与谱分解</h4>
              <div class="equation-block">
                <p><strong>多体系统的完备性：</strong></p>
                <p>Σₙ |n⟩⟨n| = 1</p>
                <p>其中 |n⟩ 是多体哈密顿量的本征态</p>
                <p><strong>Green函数的插入：</strong></p>
                <p>G(x,t;x',t') = -i⟨0|T{ψ̂(x,t)ψ̂†(x',t')}|0⟩</p>
                <p>= -i⟨0|T{ψ̂(x,t)(Σₙ|n⟩⟨n|)ψ̂†(x',t')}|0⟩</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 时间演化算符的作用</h4>
              <div class="equation-block">
                <p><strong>Heisenberg表象：</strong></p>
                <p>ψ̂(x,t) = e^(iĤt/ℏ) ψ̂(x) e^(-iĤt/ℏ)</p>
                <p><strong>本征态的时间演化：</strong></p>
                <p>e^(-iĤt/ℏ)|n⟩ = e^(-iEₙt/ℏ)|n⟩</p>
                <p><strong>矩阵元计算：</strong></p>
                <p>⟨0|ψ̂(x,t)|n⟩ = ⟨0|ψ̂(x)|n⟩ e^(-i(Eₙ-E₀)t/ℏ)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 因果结构的分析</h4>
              <div class="equation-block">
                <p><strong>t > t' 情况（粒子传播）：</strong></p>
                <p>G>(x,t;x',t') = -i Σₙ ⟨0|ψ̂(x)|n⟩⟨n|ψ̂†(x')|0⟩ e^(-i(Eₙ-E₀)(t-t')/ℏ)</p>
                <p><strong>t < t' 情况（空穴传播）：</strong></p>
                <p>G<(x,t;x',t') = ±i Σₘ ⟨0|ψ̂†(x')|m⟩⟨m|ψ̂(x)|0⟩ e^(-i(E₀-Eₘ)(t-t')/ℏ)</p>
                <p>± 号对应费米子/玻色子统计</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>4. 频率域的Lehmann表示</h4>
              <div class="equation-block">
                <p><strong>Fourier变换：</strong></p>
                <p>G(k,ω) = ∫ G(x,t) e^(-ik·x+iωt) dxdt</p>
                <p><strong>最终的Lehmann形式：</strong></p>
                <p>G(k,ω) = Σₙ |⟨0|ĉₖ|n⟩|²/(ω - (Eₙ-E₀) + iη) + Σₘ |⟨m|ĉₖ†|0⟩|²/(ω + (E₀-Eₘ) - iη)</p>
                <p>其中 η → 0⁺ 确保因果性</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 解析性质与色散关系 -->
        <div class="theory-section">
          <h3>Green函数的解析性质</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 复平面的解析结构</h4>
              <div class="equation-block">
                <p><strong>推迟Green函数：</strong></p>
                <p>G^R(k,ω) 在上半复平面解析</p>
                <p>极点位置：ω = Eₙ - E₀ - iΓₙ (Γₙ > 0)</p>
                <p><strong>超前Green函数：</strong></p>
                <p>G^A(k,ω) 在下半复平面解析</p>
                <p>极点位置：ω = Eₙ - E₀ + iΓₙ</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. Kramers-Kronig关系</h4>
              <div class="equation-block">
                <p><strong>实部与虚部的关系：</strong></p>
                <p>Re G^R(k,ω) = (1/π) P ∫ Im G^R(k,ω')/（ω-ω'） dω'</p>
                <p>Im G^R(k,ω) = -(1/π) P ∫ Re G^R(k,ω')/（ω-ω'） dω'</p>
                <p>P 表示主值积分</p>
                <p><strong>物理意义：</strong></p>
                <p>因果性导致的约束关系</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 谱函数的性质</h4>
              <div class="equation-block">
                <p><strong>定义与性质：</strong></p>
                <p>A(k,ω) = -2Im G^R(k,ω) = i[G^R(k,ω) - G^A(k,ω)]</p>
                <p>A(k,ω) ≥ 0 (正定性)</p>
                <p><strong>求和规则：</strong></p>
                <p>∫_{-∞}^{∞} A(k,ω) dω = 1</p>
                <p><strong>谱表示：</strong></p>
                <p>G^R(k,ω) = ∫ A(k,ω')/(ω - ω' + iη) dω'</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Matsubara Green函数 -->
        <div class="theory-section">
          <h3>Matsubara Green函数理论</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 虚时间形式主义</h4>
              <div class="equation-block">
                <p><strong>虚时间Green函数：</strong></p>
                <p>G(k,τ) = -⟨T_τ ĉₖ(τ) ĉₖ†(0)⟩</p>
                <p>其中 τ ∈ [0,β], β = 1/(k_B T)</p>
                <p><strong>边界条件：</strong></p>
                <p>费米子：G(k,β) = -G(k,0)</p>
                <p>玻色子：G(k,β) = +G(k,0)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. Matsubara频率展开</h4>
              <div class="equation-block">
                <p><strong>Fourier级数：</strong></p>
                <p>G(k,τ) = (1/β) Σₙ G(k,iωₙ) e^(-iωₙτ)</p>
                <p><strong>Matsubara频率：</strong></p>
                <p>费米子：ωₙ = (2n+1)π/β (n = 0,±1,±2,...)</p>
                <p>玻色子：ωₙ = 2nπ/β (n = 0,±1,±2,...)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 解析延拓</h4>
              <div class="equation-block">
                <p><strong>从虚频到实频：</strong></p>
                <p>G^R(k,ω) = G(k,iωₙ)|_{iωₙ→ω+iη}</p>
                <p><strong>Padé近似：</strong></p>
                <p>用有理函数拟合Matsubara数据</p>
                <p><strong>最大熵方法：</strong></p>
                <p>利用谱函数的正定性约束</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>传播子的物理意义与微观图像</h2>
        
        <!-- 准粒子概念 -->
        <div class="theory-section">
          <h3>准粒子图像的建立</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 准粒子极点</h4>
              <div class="equation-block">
                <p><strong>Dyson方程：</strong></p>
                <p>G^(-1)(k,ω) = G₀^(-1)(k,ω) - Σ(k,ω)</p>
                <p>其中 Σ(k,ω) 是自能</p>
                <p><strong>准粒子条件：</strong></p>
                <p>ω - εₖ - Σ(k,ω) = 0</p>
                <p>解得：ω = Eₖ - iΓₖ</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 准粒子性质</h4>
              <div class="equation-block">
                <p><strong>准粒子能量：</strong></p>
                <p>Eₖ = εₖ + Re Σ(k,Eₖ)</p>
                <p><strong>准粒子寿命：</strong></p>
                <p>τₖ = ℏ/Γₖ = ℏ/|Im Σ(k,Eₖ)|</p>
                <p><strong>准粒子权重：</strong></p>
                <p>Zₖ = [1 - ∂Re Σ(k,ω)/∂ω|_{ω=Eₖ}]^(-1)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 准粒子近似的有效性</h4>
              <div class="equation-block">
                <p><strong>有效性条件：</strong></p>
                <p>Γₖ << |Eₖ - μ| (能量分辨)</p>
                <p>Zₖ ~ O(1) (权重不太小)</p>
                <p><strong>失效情况：</strong></p>
                <p>强关联系统、临界点附近</p>
                <p>非费米液体行为</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 多体效应的微观机制 -->
        <div class="theory-section">
          <h3>多体效应的微观机制</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 自能的物理起源</h4>
              <div class="equation-block">
                <p><strong>Hartree-Fock自能：</strong></p>
                <p>Σ^HF(k) = Σₖ' V(k-k') n(k') - Σₖ' V(k-k') n(k') δ_{σσ'}</p>
                <p>直接项（Hartree）+ 交换项（Fock）</p>
                <p><strong>关联效应：</strong></p>
                <p>Σ^corr(k,ω) = Σ(k,ω) - Σ^HF(k)</p>
                <p><strong>散射机制：</strong></p>
                <p>电子-电子散射、电子-声子散射、杂质散射</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 重整化效应</h4>
              <div class="equation-block">
                <p><strong>质量重整化：</strong></p>
                <p>m* = m[1 - ∂Re Σ(k,ω)/∂ω|_{ω=εₖ}]^(-1)</p>
                <p><strong>费米速度重整化：</strong></p>
                <p>v_F* = v_F Z_k</p>
                <p><strong>态密度重整化：</strong></p>
                <p>N*(ε) = Z N₀(ε)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 输运性质的微观理论</h4>
              <div class="equation-block">
                <p><strong>电导率公式：</strong></p>
                <p>σ(ω) = (e²/ℏ) ∫ dk A(k,ω) v²(k) τ(k,ω)</p>
                <p><strong>散射时间：</strong></p>
                <p>1/τ(k,ω) = 2Im Σ(k,ω)/ℏ</p>
                <p><strong>光学性质：</strong></p>
                <p>ε(ω) = 1 + 4πσ(ω)/(iω)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新增：Green函数的现代计算方法 -->
      <section class="content-section">
        <h2>Green函数的现代计算方法</h2>
        
        <div class="computational-methods-grid">
          <div class="method-card">
            <div class="method-icon">🖥️</div>
            <div class="method-content">
              <h3>量子蒙特卡罗方法</h3>
              <div class="method-details">
                <h4>连续时间量子蒙特卡罗 (CT-QMC)</h4>
                <div class="equation-block">
                  <p><strong>基本思想：</strong></p>
                  <p>Z = Tr e^(-βĤ) = ∫ P[c] ∏ᵢ dcᵢ</p>
                  <p>其中 P[c] 是路径权重</p>
                  <p><strong>Green函数测量：</strong></p>
                  <p>G(τ) = ⟨c(τ)c†(0)⟩_MC</p>
                </div>
                
                <h4>动力学平均场理论 (DMFT)</h4>
                <div class="equation-block">
                  <p><strong>自洽条件：</strong></p>
                  <p>G_loc(iωₙ) = ∫ G(k,iωₙ) dk</p>
                  <p>Σ(iωₙ) = Σ_imp(iωₙ)</p>
                  <p><strong>杂质求解器：</strong></p>
                  <p>CT-HYB, CT-INT, ED, NRG</p>
                </div>
                
                <h4>优势与局限</h4>
                <ul>
                  <li>优势：处理强关联、精确求解</li>
                  <li>局限：符号问题、计算复杂度</li>
                  <li>应用：Hubbard模型、Anderson杂质模型</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="method-card">
            <div class="method-icon">🧮</div>
            <div class="method-content">
              <h3>密度泛函理论 + 多体微扰</h3>
              <div class="method-details">
                <h4>GW近似</h4>
                <div class="equation-block">
                  <p><strong>自能表达式：</strong></p>
                  <p>Σ(r,r',ω) = (i/2π) ∫ G(r,r',ω+ω') W(r,r',ω') dω'</p>
                  <p>其中 W 是屏蔽库仑相互作用</p>
                  <p><strong>Dyson方程：</strong></p>
                  <p>[ω - h₀ - Σ(ω)]G(ω) = 1</p>
                </div>
                
                <h4>Bethe-Salpeter方程</h4>
                <div class="equation-block">
                  <p><strong>激子波函数：</strong></p>
                  <p>Ψ(r_e,r_h) = Σ_{vc} A_{vc} φᵥ(r_h) φc(r_e)</p>
                  <p><strong>BSE核：</strong></p>
                  <p>K = v - W (直接-交换)</p>
                </div>
                
                <h4>应用领域</h4>
                <ul>
                  <li>能带结构修正</li>
                  <li>光谱函数计算</li>
                  <li>激子效应</li>
                  <li>输运性质</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="method-card">
            <div class="method-icon">🤖</div>
            <div class="method-content">
              <h3>机器学习辅助方法</h3>
              <div class="method-details">
                <h4>神经网络量子态</h4>
                <div class="equation-block">
                  <p><strong>变分波函数：</strong></p>
                  <p>|Ψ⟩ = Σ_σ Ψ_θ(σ)|σ⟩</p>
                  <p>其中 Ψ_θ 是神经网络</p>
                  <p><strong>Green函数计算：</strong></p>
                  <p>G(i,j) = ⟨Ψ|ĉᵢ†ĉⱼ|Ψ⟩/⟨Ψ|Ψ⟩</p>
                </div>
                
                <h4>解析延拓的机器学习</h4>
                <div class="equation-block">
                  <p><strong>神经网络拟合：</strong></p>
                  <p>A(ω) = NN[G(iωₙ)]</p>
                  <p><strong>物理约束：</strong></p>
                  <p>A(ω) ≥ 0, ∫A(ω)dω = 1</p>
                </div>
                
                <h4>前沿应用</h4>
                <ul>
                  <li>自动化谱函数重构</li>
                  <li>相图探索</li>
                  <li>新材料设计</li>
                  <li>实验数据分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新增：实验技术与Green函数的对应 -->
      <section class="content-section">
        <h2>实验技术与Green函数的直接对应</h2>
        
        <div class="experimental-connections-grid">
          <div class="connection-card">
            <div class="connection-icon">🔬</div>
            <div class="connection-content">
              <h3>角分辨光电子能谱 (ARPES)</h3>
              <div class="connection-details">
                <h4>理论基础</h4>
                <div class="equation-block">
                  <p><strong>光电流公式：</strong></p>
                  <p>I(k,ω) ∝ |M(k)|² A(k,ω) f(ω)</p>
                  <p>M(k): 矩阵元, f(ω): 费米分布</p>
                  <p><strong>直接测量：</strong></p>
                  <p>A(k,ω) = -2Im G^R(k,ω)</p>
                </div>
                
                <h4>实验信息提取</h4>
                <ul>
                  <li>费米面形状和拓扑</li>
                  <li>能带色散关系</li>
                  <li>准粒子寿命</li>
                  <li>自能效应</li>
                  <li>超导能隙</li>
                </ul>
                
                <h4>技术发展</h4>
                <ul>
                  <li>时间分辨ARPES (tr-ARPES)</li>
                  <li>自旋分辨ARPES</li>
                  <li>激光ARPES</li>
                  <li>纳米ARPES</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="connection-card">
            <div class="connection-icon">🔍</div>
            <div class="connection-content">
              <h3>扫描隧道显微镜 (STM/STS)</h3>
              <div class="connection-details">
                <h4>理论基础</h4>
                <div class="equation-block">
                  <p><strong>隧道电流：</strong></p>
                  <p>I(V) ∝ ∫ ρₛ(E) ρₜ(E-eV) [f(E) - f(E-eV)] dE</p>
                  <p><strong>局域态密度：</strong></p>
                  <p>ρₛ(r,E) = -Im G^R(r,r,E)/π</p>
                </div>
                
                <h4>测量能力</h4>
                <ul>
                  <li>局域电子态密度</li>
                  <li>超导能隙的空间分布</li>
                  <li>杂质态和束缚态</li>
                  <li>量子相变的实空间图像</li>
                  <li>拓扑边界态</li>
                </ul>
                
                <h4>先进技术</h4>
                <ul>
                  <li>毫开尔文STM</li>
                  <li>磁场中的STM</li>
                  <li>自旋极化STM</li>
                  <li>噪声谱学</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="connection-card">
            <div class="connection-icon">⚡</div>
            <div class="connection-content">
              <h3>输运测量</h3>
              <div class="connection-details">
                <h4>理论基础</h4>
                <div class="equation-block">
                  <p><strong>Kubo公式：</strong></p>
                  <p>σ(ω) = (e²/ℏ) ∫ dk A(k,ω) v²(k) τ(k,ω)</p>
                  <p><strong>散射时间：</strong></p>
                  <p>1/τ(k,ω) = 2Im Σ(k,ω)/ℏ</p>
                </div>
                
                <h4>测量内容</h4>
                <ul>
                  <li>电阻率的温度依赖</li>
                  <li>霍尔效应</li>
                  <li>磁阻效应</li>
                  <li>热电效应</li>
                  <li>光电导</li>
                </ul>
                
                <h4>信息提取</h4>
                <ul>
                  <li>载流子浓度和迁移率</li>
                  <li>散射机制</li>
                  <li>费米面性质</li>
                  <li>相变特征</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="connection-card">
            <div class="connection-icon">🌊</div>
            <div class="connection-content">
              <h3>中子散射与X射线散射</h3>
              <div class="connection-details">
                <h4>理论基础</h4>
                <div class="equation-block">
                  <p><strong>动力学结构因子：</strong></p>
                  <p>S(q,ω) = -Im χ(q,ω)/π</p>
                  <p><strong>响应函数：</strong></p>
                  <p>χ(q,ω) = ∫ G(k,ω) G(k+q,ω+ω') dk dω'</p>
                </div>
                
                <h4>测量信息</h4>
                <ul>
                  <li>磁激发谱</li>
                  <li>声子色散</li>
                  <li>电荷密度波</li>
                  <li>自旋密度波</li>
                  <li>超导配对涨落</li>
                </ul>
                
                <h4>技术优势</h4>
                <ul>
                  <li>动量分辨能力</li>
                  <li>能量分辨率</li>
                  <li>体相信息</li>
                  <li>磁结构测定</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新增：前沿应用与未来发展 -->
      <section class="content-section">
        <h2>前沿应用与未来发展方向</h2>
        
        <div class="future-developments-grid">
          <div class="development-category">
            <h3>🔬 理论前沿</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>非平衡Green函数</h4>
                <p>Keldysh形式主义，描述开放量子系统的动力学演化</p>
                <div class="equation-block">
                  <p>G^<(t,t') = i⟨ψ̂†(t')ψ̂(t)⟩</p>
                  <p>G^>(t,t') = -i⟨ψ̂(t)ψ̂†(t')⟩</p>
                </div>
                <ul>
                  <li>量子输运理论</li>
                  <li>超快动力学</li>
                  <li>泵浦-探测实验理论</li>
                </ul>
              </div>
              
              <div class="development-item">
                <h4>拓扑Green函数</h4>
                <p>描述拓扑物态中的奇异准粒子激发</p>
                <div class="equation-block">
                  <p>G_edge(k,ω) ∝ 1/(ω - v_F k)</p>
                  <p>边界态的线性色散</p>
                </div>
                <ul>
                  <li>Majorana费米子</li>
                  <li>Weyl半金属</li>
                  <li>拓扑超导体</li>
                </ul>
              </div>
              
              <div class="development-item">
                <h4>机器学习增强理论</h4>
                <p>利用AI技术加速Green函数计算和分析</p>
                <ul>
                  <li>神经网络量子态</li>
                  <li>自动化解析延拓</li>
                  <li>相图机器学习</li>
                  <li>实验数据智能分析</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🧪 实验技术</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>超快时间分辨技术</h4>
                <p>飞秒时间尺度的电子动力学测量</p>
                <ul>
                  <li>时间分辨ARPES</li>
                  <li>太赫兹光谱学</li>
                  <li>超快STM</li>
                  <li>泵浦-探测技术</li>
                </ul>
              </div>
              
              <div class="development-item">
                <h4>极端条件下的测量</h4>
                <p>高压、强磁场、超低温环境</p>
                <ul>
                  <li>毫开尔文温度</li>
                  <li>百特斯拉磁场</li>
                  <li>吉帕斯卡压强</li>
                  <li>多参数调控</li>
                </ul>
              </div>
              
              <div class="development-item">
                <h4>新型探测手段</h4>
                <p>突破传统技术限制的创新方法</p>
                <ul>
                  <li>量子传感器</li>
                  <li>单原子操控</li>
                  <li>人工量子系统</li>
                  <li>冷原子模拟</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>💡 应用前景</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>量子技术</h4>
                <p>基于Green函数理论的量子器件设计</p>
                <ul>
                  <li>拓扑量子计算</li>
                  <li>量子传感</li>
                  <li>量子通信</li>
                  <li>量子模拟</li>
                </ul>
              </div>
              
              <div class="development-item">
                <h4>新材料设计</h4>
                <p>理论指导的功能材料开发</p>
                <ul>
                  <li>高温超导体</li>
                  <li>拓扑材料</li>
                  <li>热电材料</li>
                  <li>光电材料</li>
                </ul>
              </div>
              
              <div class="development-item">
                <h4>能源技术</h4>
                <p>Green函数在能源领域的应用</p>
                <ul>
                  <li>太阳能电池优化</li>
                  <li>储能材料设计</li>
                  <li>催化剂开发</li>
                  <li>能量转换效率提升</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>本节要点总结</h2>
        <div class="key-points-grid">
          <div class="key-point">
            <div class="point-icon">🎯</div>
            <h3>核心概念</h3>
            <ul>
              <li>Green函数是描述量子多体系统的基本工具</li>
              <li>Lehmann表示揭示了Green函数的谱结构</li>
              <li>解析性质体现了因果性和稳定性要求</li>
              <li>谱函数直接连接理论与实验观测</li>
            </ul>
          </div>
          
          <div class="key-point">
            <div class="point-icon">🔬</div>
            <h3>计算方法</h3>
            <ul>
              <li>量子蒙特卡罗：处理强关联系统</li>
              <li>GW近似：第一性原理计算</li>
              <li>机器学习：加速计算和分析</li>
              <li>解析延拓：连接虚时间和实时间</li>
            </ul>
          </div>
          
          <div class="key-point">
            <div class="point-icon">⚗️</div>
            <h3>实验对应</h3>
            <ul>
              <li>ARPES直接测量谱函数A(k,ω)</li>
              <li>STM测量局域态密度</li>
              <li>输运测量反映散射机制</li>
              <li>散射实验探测集体激发</li>
            </ul>
          </div>
          
          <div class="key-point">
            <div class="point-icon">🚀</div>
            <h3>发展前景</h3>
            <ul>
              <li>非平衡态理论发展</li>
              <li>拓扑物态的Green函数描述</li>
              <li>机器学习与量子多体理论结合</li>
              <li>量子技术和新材料应用</li>
            </ul>
          </div>
        </div>
      </section>
      <section class="content-section">
        <div class="theory-section">
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>2. 屏蔽效应</h4>
              <div class="equation-block">
                <p><strong>GW近似：</strong></p>
                <p>Σ(k,ω) = i ∫ G(k,ω+Ω) W(k,Ω) dΩ/(2π)</p>
                <p>其中 W(k,Ω) 是屏蔽相互作用</p>
                <p><strong>等离激元卫星峰：</strong></p>
                <p>A(k,ω) ≈ Zₖδ(ω-Eₖ) + Σₙ Aₙ(k)δ(ω-Eₖ-nωₚ)</p>
                <p>主峰 + 等离激元伴峰</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 强关联效应</h4>
              <div class="equation-block">
                <p><strong>Hubbard模型：</strong></p>
                <p>上、下Hubbard带的形成</p>
                <p>Mott绝缘体转变</p>
                <p><strong>DMFT处理：</strong></p>
                <p>Σ(k,ω) → Σ(ω) (局域近似)</p>
                <p>量子杂质模型的映射</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 实验观测的理论基础 -->
        <div class="theory-section">
          <h3>实验观测的理论基础</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 角分辨光电子谱(ARPES)</h4>
              <div class="equation-block">
                <p><strong>光电子发射截面：</strong></p>
                <p>I(k,ω) ∝ |M(k)|² f(ω) A(k,ω)</p>
                <p>其中 M(k) 是跃迁矩阵元，f(ω) 是费米分布</p>
                <p><strong>直接测量：</strong></p>
                <p>能带色散：E(k) 从峰位确定</p>
                <p>准粒子寿命：从峰宽确定</p>
                <p>多体效应：从线型分析</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 扫描隧道谱(STS)</h4>
              <div class="equation-block">
                <p><strong>隧道电导：</strong></p>
                <p>dI/dV ∝ ρ(eV) = -(1/π) Im G^R(r,eV)</p>
                <p>其中 r 是针尖位置</p>
                <p><strong>局域态密度：</strong></p>
                <p>ρ(r,ω) = Σₖ |ψₖ(r)|² A(k,ω)</p>
                <p>空间分辨的谱学信息</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 输运性质</h4>
              <div class="equation-block">
                <p><strong>电导率：</strong></p>
                <p>σ(ω) = (e²/ℏ) ∫ dk v(k)² τ(k) δ(ω-E(k))</p>
                <p>其中 v(k) = ∇ₖE(k)/ℏ, τ(k) = ℏ/Γ(k)</p>
                <p><strong>光学响应：</strong></p>
                <p>ε(ω) = 1 + 4πiσ(ω)/ω</p>
                <p>介电函数与Green函数的关系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>传播子的物理图像</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🚀</div>
            <h3>粒子传播</h3>
            <p>量子粒子在时空中的传播过程</p>
            <div class="mathematical-content">
              <h4>传播振幅：</h4>
              <div class="equation-block">
                <p>⟨x,t|x',t'⟩ = ∫ G(x,t;x',t') 的物理解释</p>
                <p>从(x',t')到(x,t)的传播概率振幅</p>
              </div>
              
              <h4>路径积分表示：</h4>
              <div class="equation-block">
                <p>G = ∫ e^(iS[x(t)]/ℏ) Dx(t)</p>
                <p>S[x(t)]: 作用量泛函</p>
                <p>对所有可能路径求和</p>
              </div>
              
              <h4>经典极限：</h4>
              <div class="equation-block">
                <p>ℏ → 0: 鞍点近似</p>
                <p>主要贡献来自经典轨道</p>
                <p>δS/δx = 0 (欧拉-拉格朗日方程)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🕳️</div>
            <h3>空穴传播</h3>
            <p>费米海中空穴的传播行为</p>
            <div class="mathematical-content">
              <h4>粒子-空穴对称性：</h4>
              <div class="equation-block">
                <p>空穴 = 缺失的粒子</p>
                <p>空穴能量: E_hole = -E_particle</p>
                <p>空穴动量: k_hole = -k_particle</p>
              </div>
              
              <h4>费米海图像：</h4>
              <div class="equation-block">
                <p>|k| < kF: 被占据态 (费米海)</p>
                <p>|k| > kF: 空态</p>
                <p>空穴传播 ≡ 费米海中的激发</p>
              </div>
              
              <h4>时间反演：</h4>
              <div class="equation-block">
                <p>空穴向后传播 ≡ 粒子向前传播</p>
                <p>这是费曼图中的基本对应关系</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>虚粒子交换</h3>
            <p>相互作用中的虚过程</p>
            <div class="mathematical-content">
              <h4>虚粒子概念：</h4>
              <div class="equation-block">
                <p>不满足质壳条件: E² ≠ (pc)² + (mc²)²</p>
                <p>只能在相互作用过程中存在</p>
                <p>传播距离 ~ ℏc/ΔE (不确定性原理)</p>
              </div>
              
              <h4>Coulomb相互作用：</h4>
              <div class="equation-block">
                <p>光子传播子: D(q,ω) = 4πe²/(q² - ω²/c²)</p>
                <p>静态极限: D(q) = 4πe²/q²</p>
                <p>长程相互作用 ↔ 无质量光子</p>
              </div>
              
              <h4>有效相互作用：</h4>
              <div class="equation-block">
                <p>V_eff = V_bare + V_bare Π V_bare + ...</p>
                <p>Π: 极化函数</p>
                <p>包含所有虚过程的贡献</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Green函数的计算方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>Dyson方程</h3>
            <p>Green函数的自洽方程</p>
            <div class="mathematical-content">
              <h4>基本形式：</h4>
              <div class="equation-block">
                <p>G = G₀ + G₀ΣG</p>
                <p>G₀: 非相互作用Green函数</p>
                <p>Σ: 自能 (包含所有相互作用效应)</p>
              </div>
              
              <h4>积分形式：</h4>
              <div class="equation-block">
                <p>G(k,ω) = 1/(ω - εₖ - Σ(k,ω))</p>
                <p>εₖ: 非相互作用能量</p>
                <p>Σ(k,ω): 复自能函数</p>
              </div>
              
              <h4>图形表示：</h4>
              <div class="equation-block">
                <p>G = ——— + ——— Σ ——— + ——— Σ ——— Σ ——— + ...</p>
                <p>几何级数求和</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>自能的物理意义</h3>
            <p>相互作用对单粒子性质的修正</p>
            <div class="mathematical-content">
              <h4>实部效应：</h4>
              <div class="equation-block">
                <p>Re Σ(k,ω): 能级移动</p>
                <p>E_k = εₖ + Re Σ(k,E_k)</p>
                <p>准粒子能量的重整化</p>
              </div>
              
              <h4>虚部效应：</h4>
              <div class="equation-block">
                <p>Im Σ(k,ω): 准粒子寿命</p>
                <p>τ = ℏ/|2Im Σ(k,ω)|</p>
                <p>有限寿命 → 谱线展宽</p>
              </div>
              
              <h4>准粒子图像：</h4>
              <div class="equation-block">
                <p>Z_k = 1/(1 - ∂Re Σ/∂ω|_{ω=E_k})</p>
                <p>Z_k: 准粒子权重 (0 < Z_k ≤ 1)</p>
                <p>Z_k → 0: 准粒子图像失效</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>微扰展开</h3>
            <p>自能的系统计算方法</p>
            <div class="mathematical-content">
              <h4>费曼图规则：</h4>
              <div class="equation-block">
                <p>每条内线: 传播子G或相互作用V</p>
                <p>每个顶点: 相互作用强度</p>
                <p>每个圈: 积分∫dk/(2π)³∫dω/2π</p>
                <p>对称因子和符号</p>
              </div>
              
              <h4>一阶自能 (Hartree-Fock)：</h4>
              <div class="equation-block">
                <p>Σ^(1)(k) = ∑_k' V(k-k')n(k')</p>
                <p>n(k'): 占据数</p>
                <p>平均场近似</p>
              </div>
              
              <h4>二阶自能：</h4>
              <div class="equation-block">
                <p>Σ^(2)(k,ω) = ∑_{k',k''} |V(k-k')|² G(k',ω+ω')G(k'',ω')</p>
                <p>包含关联效应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>与实验的联系</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>角分辨光电子谱 (ARPES)</h3>
            <p>直接测量单粒子谱函数</p>
            <div class="mathematical-content">
              <h4>测量原理：</h4>
              <div class="equation-block">
                <p>I(k,ω) ∝ A(k,ω)f(ω)</p>
                <p>I: 光电子强度</p>
                <p>f(ω): 费米分布函数</p>
                <p>A(k,ω): 谱函数</p>
              </div>
              
              <h4>信息提取：</h4>
              <div class="equation-block">
                <p>峰位置 → 准粒子能量E(k)</p>
                <p>峰宽度 → 准粒子寿命τ(k)</p>
                <p>峰强度 → 准粒子权重Z(k)</p>
              </div>
              
              <h4>应用实例：</h4>
              <ul>
                <li>费米面测量</li>
                <li>能带结构确定</li>
                <li>超导能隙观测</li>
                <li>强关联效应研究</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>隧道谱学</h3>
            <p>测量态密度的重要手段</p>
            <div class="mathematical-content">
              <h4>隧道电流：</h4>
              <div class="equation-block">
                <p>I(V) ∝ ∫ ρ₁(E)ρ₂(E+eV)[f(E) - f(E+eV)]dE</p>
                <p>ρ(E): 态密度</p>
                <p>V: 偏压</p>
              </div>
              
              <h4>微分电导：</h4>
              <div class="equation-block">
                <p>dI/dV ∝ ρ(eV)</p>
                <p>直接反映态密度</p>
              </div>
              
              <h4>应用：</h4>
              <ul>
                <li>超导能隙测量</li>
                <li>准粒子态密度</li>
                <li>杂质态观测</li>
                <li>强关联系统研究</li>
              </ul>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>输运性质</h3>
            <p>Green函数与宏观输运的联系</p>
            <div class="mathematical-content">
              <h4>Kubo公式：</h4>
              <div class="equation-block">
                <p>σ(ω) = (ie²/ℏω) ∫₀^∞ dt e^(iωt) ⟨[ĵ(t), ĵ(0)]⟩</p>
                <p>ĵ: 电流算符</p>
                <p>σ(ω): 光学电导率</p>
              </div>
              
              <h4>电导率计算：</h4>
              <div class="equation-block">
                <p>σ = (e²/ℏ) ∫ dk v(k)²τ(k)δ(E(k) - EF)</p>
                <p>v(k): 群速度</p>
                <p>τ(k): 散射时间</p>
              </div>
              
              <h4>散射时间与自能：</h4>
              <div class="equation-block">
                <p>1/τ(k) = 2|Im Σ(k,EF)|/ℏ</p>
                <p>连接微观理论与宏观性质</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体应用实例</h2>
        <div class="application-grid">
          <div class="application-card">
            <h3>🔋 自由电子气</h3>
            <div class="application-content">
              <h4>非相互作用Green函数：</h4>
              <p>G₀(k,ω) = 1/(ω - εₖ + iη sgn(εₖ - μ))</p>
              <p>εₖ = ℏ²k²/(2m), μ: 化学势</p>
              
              <h4>谱函数：</h4>
              <p>A₀(k,ω) = 2πδ(ω - εₖ)</p>
              <p>δ函数峰 → 无限长寿命</p>
              
              <h4>物理图像：</h4>
              <ul>
                <li>准粒子就是自由粒子</li>
                <li>无散射，无寿命展宽</li>
                <li>费米面尖锐</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>⚛️ 相互作用电子气</h3>
            <div class="application-content">
              <h4>RPA自能：</h4>
              <p>Σ(k,ω) = ∫ G₀(k-q,ω-ν)V_eff(q,ν) dqdν</p>
              <p>V_eff: 屏蔽Coulomb相互作用</p>
              
              <h4>准粒子性质：</h4>
              <p>Z_k ≈ 1 - (rs/π)ln(rs) (弱耦合)</p>
              <p>rs: Wigner-Seitz参数</p>
              
              <h4>物理效应：</h4>
              <ul>
                <li>准粒子重整化</li>
                <li>有效质量增强</li>
                <li>等离激元激发</li>
                <li>屏蔽效应</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>🌟 BCS超导体</h3>
            <div class="application-content">
              <h4>BCS Green函数：</h4>
              <p>G(k,ω) = (ω + ξₖ)/(ω² - Eₖ² + iη)</p>
              <p>Eₖ = √(ξₖ² + Δ²), ξₖ = εₖ - μ</p>
              
              <h4>谱函数：</h4>
              <p>A(k,ω) = π[(1+ξₖ/Eₖ)δ(ω-Eₖ) + (1-ξₖ/Eₖ)δ(ω+Eₖ)]</p>
              
              <h4>物理特征：</h4>
              <ul>
                <li>能隙Δ的开启</li>
                <li>相干峰的出现</li>
                <li>准粒子-准空穴混合</li>
                <li>BCS相干因子</li>
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
              <li>Green函数的物理意义</li>
              <li>传播子与因果性</li>
              <li>谱函数与态密度</li>
              <li>自能与准粒子</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔧 计算方法</h3>
            <ul>
              <li>Dyson方程求解</li>
              <li>费曼图技术</li>
              <li>微扰理论展开</li>
              <li>自洽场方法</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 实验联系</h3>
            <ul>
              <li>ARPES光电子谱</li>
              <li>隧道谱学测量</li>
              <li>输运性质计算</li>
              <li>光学响应函数</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Lehmann与Matsubara内容</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>Lehmann表示</h3>
            <ul>
              <li>谱分解把格林函数写成能量本征态的求和</li>
              <li>因果性与解析结构由能量差与 i0^+ 决定</li>
              <li>谱函数：<code>A(k,ω) = -2 Im G^R(k,ω)</code></li>
              <li>态密度与实验谱直接关联（ARPES/TDoS）</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>Matsubara频率</h3>
            <ul>
              <li>有限温度：<code>ω_n = (2n+1)π/β</code>（费米）；<code>ω_n = 2nπ/β</code>（玻色）</li>
              <li>想象时间格林函数：<code>G(k,τ) = -⟨T_τ c_k(τ) c_k†(0)⟩</code></li>
              <li>反周期/周期边界条件体现统计性质</li>
              <li>解析延拓 <code>iω_n → ω + i0^+</code> 得到实频响应</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>Dyson与自能</h3>
            <ul>
              <li>Dyson方程：<code>G^{-1} = G_0^{-1} - Σ</code></li>
              <li>准粒子能量与寿命来源于自能的实部与虚部</li>
              <li>弱相互作用可用微扰与费曼图展开</li>
              <li>自洽方案（GW/DMFT）改进平均场描述</li>
            </ul>
          </div>
        </div>

        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📚</div>
            <h3>Lehmann示意</h3>
            <pre><code>G^R(ω) = Σ_m \frac{|⟨m|c_k|0⟩|^2}{ω - (E_m - E_0) + i0^+}
 + Σ_n \frac{|⟨n|c_k†|0⟩|^2}{ω + (E_n - E_0) + i0^+}</code></pre>
            <p>两部分分别对应加粒子与去粒子的激发。</p>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🧪</div>
            <h3>与实验的桥梁</h3>
            <p>谱函数与光电子角分辨谱、隧穿导纳、光学吸收的比较，是检验理论的关键。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_5',
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
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
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
  background: #f0fdf4;
  border-radius: 1rem;
  border-left: 4px solid #43e97b;
}

.introduction h2 {
  color: #166534;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #166534;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  color: #166534;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bbf7d0;
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
  border: 1px solid #dcfce7;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(67, 233, 123, 0.15);
}

.concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #166534;
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
  color: #166534;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-left: 3px solid #43e97b;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.equation-block p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  color: #166534;
  font-size: 0.95rem;
}

.equation-block strong {
  color: #14532d;
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
  color: #43e97b;
  font-weight: bold;
}

/* 计算方法网格样式 */
.computational-methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.method-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 25px;
  color: white;
  box-shadow: 0 10px 35px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.method-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 45px rgba(102, 126, 234, 0.4);
}

.method-icon {
  font-size: 2.8em;
  margin-bottom: 18px;
  display: block;
}

.method-content h3 {
  margin: 0 0 20px 0;
  font-size: 1.4em;
  font-weight: 600;
}

.method-details h4 {
  margin: 15px 0 10px 0;
  font-size: 1.1em;
  font-weight: 500;
  color: #f0f0f0;
}

.method-details p {
  margin: 0 0 10px 0;
  line-height: 1.6;
  opacity: 0.9;
}

.method-details ul {
  margin: 10px 0;
  padding-left: 20px;
}

.method-details li {
  margin: 5px 0;
  line-height: 1.5;
}

/* 实验连接网格样式 */
.experimental-connections-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.connection-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
  box-shadow: 0 8px 30px rgba(240, 147, 251, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.connection-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(240, 147, 251, 0.4);
}

.connection-icon {
  font-size: 2.5em;
  margin-bottom: 15px;
  display: block;
}

.connection-content h3 {
  margin: 0 0 15px 0;
  font-size: 1.3em;
  font-weight: 600;
}

.connection-details h4 {
  margin: 15px 0 10px 0;
  font-size: 1.05em;
  font-weight: 500;
  color: #f0f0f0;
}

.connection-details p {
  margin: 0 0 8px 0;
  line-height: 1.6;
  opacity: 0.9;
  font-size: 0.95em;
}

.connection-details ul {
  margin: 8px 0;
  padding-left: 18px;
}

.connection-details li {
  margin: 4px 0;
  line-height: 1.5;
  font-size: 0.9em;
}

/* 未来发展网格样式 */
.future-developments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.development-category {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  border-radius: 15px;
  padding: 25px;
  color: white;
  box-shadow: 0 10px 35px rgba(79, 172, 254, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.development-category:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 45px rgba(79, 172, 254, 0.4);
}

.development-category h3 {
  margin: 0 0 20px 0;
  font-size: 1.4em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.development-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.development-item {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 18px;
}

.development-item h4 {
  margin: 0 0 10px 0;
  font-size: 1.1em;
  font-weight: 500;
}

.development-item p {
  margin: 0 0 10px 0;
  line-height: 1.6;
  opacity: 0.9;
  font-size: 0.95em;
}

.development-item ul {
  margin: 8px 0;
  padding-left: 18px;
}

.development-item li {
  margin: 4px 0;
  line-height: 1.5;
  font-size: 0.9em;
}


.application-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #dcfce7;
  transition: transform 0.2s;
}

.application-card:hover {
  transform: translateY(-2px);
}

.application-card h3 {
  color: #166534;
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
  color: #43e97b;
  font-weight: bold;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
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