<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.2.1 谁拯救了升降算符表示</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">二次量子化</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>升降算符的历史背景与革命性意义</h2>
        <p class="lead-text">
          升降算符（产生湮灭算符）的引入彻底改变了量子多体理论的面貌。
          从最初的坐标表示到算符表示，这一转变不仅简化了计算，更重要的是提供了处理多体问题的统一框架。
          这一革命性的概念由Dirac、Jordan、Klein等物理学家在1920年代末期发展，为现代量子场论奠定了基础。
        </p>
        
        <div class="historical-timeline">
          <h3>🕰️ 历史发展时间线</h3>
          <div class="timeline-item">
            <strong>1925-1926:</strong> Heisenberg矩阵力学，Born-Jordan量子化条件
          </div>
          <div class="timeline-item">
            <strong>1927:</strong> Dirac引入产生湮灭算符概念
          </div>
          <div class="timeline-item">
            <strong>1928:</strong> Jordan-Klein变换，二次量子化正式建立
          </div>
          <div class="timeline-item">
            <strong>1930s:</strong> Fock空间理论完善，多体理论成熟
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>从坐标表示到算符表示的深度分析</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>传统坐标表示的根本困境</h3>
            <p>一次量子化中多粒子波函数的本质问题</p>
            <div class="mathematical-content">
              <h4>N粒子波函数的复杂性：</h4>
              <div class="equation-block">
                <p>Ψ(r₁,σ₁; r₂,σ₂; ...; rₙ,σₙ; t)</p>
                <p>• 3N维空间坐标 + N个自旋变量</p>
                <p>• 希尔伯特空间维度：∞^(3N)</p>
                <p>• 对称化要求：Ψ(P{rᵢ,σᵢ}) = ±Ψ({rᵢ,σᵢ})</p>
              </div>
              
              <h4>具体困难：</h4>
              <div class="equation-block">
                <p><strong>维度灾难：</strong> 计算复杂度 ~ O(e^N)</p>
                <p><strong>对称性处理：</strong> N!种排列的线性组合</p>
                <p><strong>粒子数变化：</strong> 无法描述粒子产生湮灭过程</p>
                <p><strong>相互作用：</strong> V(r₁-r₂,...,rᵢ-rⱼ,...) 项数 ~ N²</p>
              </div>
              
              <h4>Schrödinger方程的困境：</h4>
              <div class="equation-block">
                <p>iℏ ∂Ψ/∂t = [∑ᵢ(-ℏ²∇ᵢ²/2m) + ∑ᵢ<ⱼ V(rᵢ-rⱼ)]Ψ</p>
                <p>即使对于简单的氦原子(N=2)也无法精确求解</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>升降算符的革命性救赎</h3>
            <p>产生湮灭算符如何从根本上解决这些问题</p>
            <div class="mathematical-content">
              <h4>基本对易/反对易关系：</h4>
              <div class="equation-block">
                <p><strong>玻色子：</strong> [âₖ, â†ₖ'] = δₖₖ'</p>
                <p>[âₖ, âₖ'] = [â†ₖ, â†ₖ'] = 0</p>
                <p><strong>费米子：</strong> {ĉₖ, ĉ†ₖ'} = δₖₖ'</p>
                <p>{ĉₖ, ĉₖ'} = {ĉ†ₖ, ĉ†ₖ'} = 0</p>
              </div>
              
              <h4>作用规则的深层含义：</h4>
              <div class="equation-block">
                <p>â†ₖ|n₁,...,nₖ,...⟩ = √(nₖ+1)|n₁,...,nₖ+1,...⟩</p>
                <p>âₖ|n₁,...,nₖ,...⟩ = √nₖ|n₁,...,nₖ-1,...⟩</p>
                <p><strong>物理意义：</strong></p>
                <p>• √(nₖ+1): 受激发射增强因子</p>
                <p>• √nₖ: 自发发射概率幅</p>
                <p>• 自动满足统计力学要求</p>
              </div>
              
              <h4>Fock空间的构造：</h4>
              <div class="equation-block">
                <p>ℱ = ⊕ₙ₌₀^∞ ℋₙ</p>
                <p>ℋₙ: n粒子希尔伯特空间</p>
                <p>|n₁,n₂,...⟩ = ∏ₖ (â†ₖ)^nₖ/√(nₖ!)|0⟩</p>
                <p>自动对称化/反对称化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>升降算符的深层物理意义与哲学内涵</h2>
        <div class="physics-insight">
          <h3>🎯 核心洞察：量子场的本质</h3>
          <p>升降算符不仅是数学工具，更体现了量子场论的根本思想：</p>
          
          <div class="insight-grid">
            <div class="insight-card">
              <h4>🌊 场的量子化</h4>
              <ul>
                <li><strong>经典场 → 量子场：</strong>将经典场的振幅提升为算符</li>
                <li><strong>粒子-波二象性：</strong>粒子作为场的激发态</li>
                <li><strong>真空涨落：</strong>|0⟩态仍有零点能 ℏω/2</li>
              </ul>
            </div>
            
            <div class="insight-card">
              <h4>⚖️ 统计力学的自然实现</h4>
              <ul>
                <li><strong>Pauli不相容原理：</strong>费米子算符的反对易性</li>
                <li><strong>Bose-Einstein统计：</strong>玻色子算符的对易性</li>
                <li><strong>粒子不可区分性：</strong>自动满足交换对称性</li>
              </ul>
            </div>
            
            <div class="insight-card">
              <h4>🔄 守恒定律的代数起源</h4>
              <ul>
                <li><strong>粒子数守恒：</strong>[Ĥ, N̂] = 0, N̂ = ∑ₖ â†ₖâₖ</li>
                <li><strong>动量守恒：</strong>平移对称性 → k守恒</li>
                <li><strong>能量守恒：</strong>时间平移不变性</li>
              </ul>
            </div>
            
            <div class="insight-card">
              <h4>🎭 相互作用的优雅表达</h4>
              <ul>
                <li><strong>两体相互作用：</strong>∑ₖₖ'qq' Vₖₖ'qq' â†ₖâ†ₖ'âq'âq</li>
                <li><strong>自动正规排序：</strong>避免发散问题</li>
                <li><strong>Wick定理：</strong>多体关联函数的计算</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数学结构的深度解析</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🏛️</div>
            <h3>代数结构与表示理论</h3>
            <p>升降算符构成的无穷维李代数</p>
            <div class="mathematical-content">
              <h4>Heisenberg-Weyl代数：</h4>
              <div class="equation-block">
                <p>𝒜 = {âₖ, â†ₖ, I | k ∈ ℝᵈ}</p>
                <p>中心扩张：[âₖ, â†ₖ'] = ℏδ(k-k')I</p>
                <p>Stone-von Neumann定理：不可约表示的唯一性</p>
              </div>
              
              <h4>生成函数方法：</h4>
              <div class="equation-block">
                <p>G(z,z*) = exp(∑ₖ zₖâ†ₖ - z*ₖâₖ)</p>
                <p>相干态：|α⟩ = e^(αâ†-α*â)|0⟩</p>
                <p>路径积分表示：⟨f|e^(-iĤt/ℏ)|i⟩</p>
              </div>
              
              <h4>对称性与群论：</h4>
              <div class="equation-block">
                <p>U(g): 对称变换的酉表示</p>
                <p>U(g)âₖU†(g) = ∑ₖ' Dₖₖ'(g)âₖ'</p>
                <p>Noether定理：对称性 ↔ 守恒量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>场算符与连续极限</h3>
            <p>从离散模式到连续场的推广</p>
            <div class="mathematical-content">
              <h4>场算符的定义：</h4>
              <div class="equation-block">
                <p>ψ̂(r,t) = ∑ₖ φₖ(r) âₖ(t)</p>
                <p>ψ̂†(r,t) = ∑ₖ φₖ*(r) â†ₖ(t)</p>
                <p>φₖ(r): 单粒子波函数基</p>
              </div>
              
              <h4>连续极限下的对易关系：</h4>
              <div class="equation-block">
                <p>[ψ̂(r,t), ψ̂†(r',t)] = δ(r-r')</p>
                <p>[ψ̂(r,t), ψ̂(r',t)] = 0</p>
                <p>局域性：[ψ̂(r,t), ψ̂(r',t')] = 0, |r-r'| > c|t-t'|</p>
              </div>
              
              <h4>场方程的导出：</h4>
              <div class="equation-block">
                <p>iℏ ∂ψ̂/∂t = [ψ̂, Ĥ]</p>
                <p>Heisenberg方程 → Schrödinger场方程</p>
                <p>非线性项：相互作用的场论表述</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用实例的深度剖析</h2>
        <div class="example-grid">
          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">🔬</div>
              <h3>量子光学中的相干态理论</h3>
            </div>
            <div class="example-content">
              <h4>激光场的量子描述：</h4>
              <div class="equation-block">
                <p>相干态：|α⟩ = e^(-|α|²/2) ∑ₙ (αⁿ/√n!)|n⟩</p>
                <p>最小不确定性：ΔX·ΔP = ℏ/2</p>
                <p>Poisson光子统计：⟨n⟩ = ⟨(Δn)²⟩ = |α|²</p>
              </div>
              
              <h4>压缩态与非经典光：</h4>
              <div class="equation-block">
                <p>压缩算符：Ŝ(ξ) = exp[½(ξ*â² - ξâ†²)]</p>
                <p>压缩相干态：|α,ξ⟩ = Ŝ(ξ)D̂(α)|0⟩</p>
                <p>亚泊松统计：⟨(Δn)²⟩ < ⟨n⟩</p>
              </div>
              
              <h4>实验验证与应用：</h4>
              <div class="physics-insight">
                <p><strong>引力波探测：</strong>LIGO使用压缩光减少量子噪声</p>
                <p><strong>量子通信：</strong>连续变量量子密钥分发</p>
                <p><strong>精密测量：</strong>突破标准量子极限</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">❄️</div>
              <h3>超流体中的Bogoliubov理论</h3>
            </div>
            <div class="example-content">
              <h4>弱相互作用Bose气体：</h4>
              <div class="equation-block">
                <p>Hamiltonian：Ĥ = ∑ₖ εₖâ†ₖâₖ + ½∑ₖ,ₖ',q Vq â†ₖ₊qâ†ₖ'₋qâₖ'âₖ</p>
                <p>Bogoliubov近似：â₀ ≈ â†₀ ≈ √N₀</p>
                <p>有效Hamiltonian：Ĥeff = ∑ₖ≠₀ Eₖβ†ₖβₖ</p>
              </div>
              
              <h4>准粒子激发谱：</h4>
              <div class="equation-block">
                <p>Bogoliubov变换：âₖ = uₖβₖ + vₖβ†₋ₖ</p>
                <p>激发能：Eₖ = √(εₖ² + 2εₖgn₀)</p>
                <p>声子色散：Eₖ ≈ ℏcs|k| (长波极限)</p>
              </div>
              
              <h4>宏观量子现象：</h4>
              <div class="physics-insight">
                <p><strong>超流性：</strong>临界速度 vc = ℏ/m·min(Eₖ/|k|)</p>
                <p><strong>量子涡旋：</strong>拓扑激发与量子化环流</p>
                <p><strong>Josephson效应：</strong>弱连接超流体的相位相干</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">🧲</div>
              <h3>量子磁性中的Holstein-Primakoff变换</h3>
            </div>
            <div class="example-content">
              <h4>自旋波理论：</h4>
              <div class="equation-block">
                <p>自旋算符映射：Ŝ⁺ᵢ = √(2S-n̂ᵢ)âᵢ</p>
                <p>Ŝ⁻ᵢ = â†ᵢ√(2S-n̂ᵢ)</p>
                <p>Ŝᶻᵢ = S - â†ᵢâᵢ</p>
              </div>
              
              <h4>线性自旋波近似：</h4>
              <div class="equation-block">
                <p>Heisenberg模型：Ĥ = -J∑⟨i,j⟩ Ŝᵢ·Ŝⱼ</p>
                <p>磁子色散：ωₖ = 2JS(z - γₖ)</p>
                <p>γₖ = (1/z)∑δ e^(ik·δ): 结构因子</p>
              </div>
              
              <h4>量子相变与临界现象：</h4>
              <div class="physics-insight">
                <p><strong>量子临界点：</strong>T=0时的相变</p>
                <p><strong>自旋液体：</strong>长程纠缠与分数化激发</p>
                <p><strong>拓扑序：</strong>非局域序参量与任意子</p>
              </div>
            </div>
          </div>

          <div class="example-card">
            <div class="example-header">
              <div class="example-icon">⚡</div>
              <h3>凝聚态中的多体局域化</h3>
            </div>
            <div class="example-content">
              <h4>Anderson局域化的量子版本：</h4>
              <div class="equation-block">
                <p>随机Hamiltonian：Ĥ = ∑ᵢ εᵢn̂ᵢ + ∑⟨i,j⟩ tᵢⱼ(â†ᵢâⱼ + h.c.)</p>
                <p>局域化长度：ξ ∼ 1/ln(W/t)</p>
                <p>能级统计：Poisson → Wigner-Dyson</p>
              </div>
              
              <h4>多体局域化相变：</h4>
              <div class="equation-block">
                <p>临界无序强度：Wc ∼ 2.3t (1D)</p>
                <p>纠缠熵标度：S ∼ ln(L) (MBL) vs S ∼ L (热化)</p>
                <p>本征态热化假设的破缺</p>
              </div>
              
              <h4>实验观测与应用：</h4>
              <div class="physics-insight">
                <p><strong>冷原子系统：</strong>光晶格中的可控无序</p>
                <p><strong>量子模拟：</strong>多体系统的数字化实现</p>
                <p><strong>量子信息：</strong>长时间量子相干性保持</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展与前沿研究</h2>
        <div class="modern-developments">
          <div class="development-category">
            <h3>🌌 量子场论中的新进展</h3>
            <div class="development-grid">
              <div class="development-item">
                <h4>共形场论与临界现象</h4>
                <div class="equation-block">
                  <p>Virasoro代数：[Lₘ, Lₙ] = (m-n)Lₘ₊ₙ + (c/12)m(m²-1)δₘ₊ₙ,₀</p>
                  <p>中心荷：c = 1 - 6(p-q)²/pq</p>
                  <p>标度维数：Δ = h + h̄</p>
                </div>
                <p>应用：二维临界系统的精确解，量子自旋链的低能有效理论</p>
              </div>
              
              <div class="development-item">
                <h4>拓扑量子场论</h4>
                <div class="equation-block">
                  <p>Chern-Simons作用量：S = (k/4π)∫ Tr(A∧dA + ⅔A∧A∧A)</p>
                  <p>Wilson环：W(C) = Tr P exp(i∮_C A)</p>
                  <p>拓扑不变量：量子化的Hall电导</p>
                </div>
                <p>应用：分数量子Hall效应，拓扑超导体，量子计算</p>
              </div>
              
              <div class="development-item">
                <h4>AdS/CFT对偶</h4>
                <div class="equation-block">
                  <p>全息原理：d维边界CFT ↔ (d+1)维AdS引力</p>
                  <p>字典：⟨O⟩_CFT = δS_gravity/δφ₀</p>
                  <p>纠缠熵：S = A/(4G_N)</p>
                </div>
                <p>应用：强耦合系统，量子相变，黑洞信息悖论</p>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🔬 实验技术的革命性突破</h3>
            <div class="development-grid">
              <div class="development-item">
                <h4>超冷原子量子模拟</h4>
                <div class="physics-insight">
                  <p><strong>光晶格系统：</strong>人工构造的量子多体系统</p>
                  <p><strong>Feshbach共振：</strong>可调控的原子间相互作用</p>
                  <p><strong>单原子分辨：</strong>量子气体显微镜技术</p>
                  <p><strong>应用：</strong>Hubbard模型，拓扑绝缘体，量子相变</p>
                </div>
              </div>
              
              <div class="development-item">
                <h4>量子点与人工原子</h4>
                <div class="physics-insight">
                  <p><strong>库仑阻塞：</strong>单电子隧穿的精确控制</p>
                  <p><strong>自旋量子比特：</strong>电子自旋的相干操控</p>
                  <p><strong>Majorana费米子：</strong>拓扑量子计算的基础</p>
                  <p><strong>应用：</strong>量子计算，量子传感，单光子源</p>
                </div>
              </div>
              
              <div class="development-item">
                <h4>量子纠缠的直接观测</h4>
                <div class="physics-insight">
                  <p><strong>Bell不等式检验：</strong>量子非局域性的实验证实</p>
                  <p><strong>量子隐形传态：</strong>量子信息的远程传输</p>
                  <p><strong>纠缠熵测量：</strong>多体系统的量子关联</p>
                  <p><strong>应用：</strong>量子通信，量子密码学，量子网络</p>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>💻 计算方法的创新发展</h3>
            <div class="development-grid">
              <div class="development-item">
                <h4>张量网络方法</h4>
                <div class="equation-block">
                  <p>矩阵乘积态：|ψ⟩ = ∑{σᵢ} Tr(A^σ₁A^σ₂...A^σₙ)|σ₁σ₂...σₙ⟩</p>
                  <p>DMRG算法：变分优化MPS表示</p>
                  <p>纠缠面积定律：S ∼ L^(d-1)</p>
                </div>
                <p>应用：一维强关联系统，二维量子自旋模型</p>
              </div>
              
              <div class="development-item">
                <h4>机器学习与量子多体</h4>
                <div class="equation-block">
                  <p>神经网络波函数：|ψ⟩ = ∑_σ ψ_NN(σ)|σ⟩</p>
                  <p>变分蒙特卡罗：⟨E⟩ = ⟨ψ|Ĥ|ψ⟩/⟨ψ|ψ⟩</p>
                  <p>强化学习：量子控制优化</p>
                </div>
                <p>应用：量子相变识别，哈密顿量学习，量子态重构</p>
              </div>
              
              <div class="development-item">
                <h4>量子算法与量子优势</h4>
                <div class="equation-block">
                  <p>变分量子本征求解器：min_θ ⟨ψ(θ)|Ĥ|ψ(θ)⟩</p>
                  <p>量子近似优化算法：QAOA</p>
                  <p>量子机器学习：量子核方法</p>
                </div>
                <p>应用：量子化学，组合优化，机器学习加速</p>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🚀 未来展望与挑战</h3>
            <div class="future-challenges">
              <div class="challenge-item">
                <h4>🎯 理论挑战</h4>
                <ul>
                  <li><strong>量子多体疤痕：</strong>热化的例外与非遍历性</li>
                  <li><strong>时间晶体：</strong>时间平移对称性的自发破缺</li>
                  <li><strong>量子引力：</strong>时空的量子化与全息原理</li>
                  <li><strong>意识与量子：</strong>量子力学在生物系统中的作用</li>
                </ul>
              </div>
              
              <div class="challenge-item">
                <h4>🔧 技术挑战</h4>
                <ul>
                  <li><strong>量子纠错：</strong>容错量子计算的实现</li>
                  <li><strong>量子网络：</strong>全球量子互联网的构建</li>
                  <li><strong>室温量子：</strong>高温量子相干性的维持</li>
                  <li><strong>量子传感：</strong>超越经典极限的精密测量</li>
                </ul>
              </div>
              
              <div class="challenge-item">
                <h4>🌍 应用前景</h4>
                <ul>
                  <li><strong>量子计算：</strong>指数级计算能力提升</li>
                  <li><strong>量子通信：</strong>绝对安全的信息传输</li>
                  <li><strong>量子材料：</strong>按需设计的功能材料</li>
                  <li><strong>量子生物：</strong>生命过程中的量子效应</li>
                </ul>
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
            <p>升降算符提供了处理多体问题的统一语言</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>自动包含粒子的统计性质和对称性</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>简化了复杂多体相互作用的表达</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>为量子场论奠定了基础</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_2_1',
  mounted() {
    // 添加数学公式渲染支持
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
  border-bottom: 3px solid #4a90e2;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #2c3e50;
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
  border-left: 4px solid #4a90e2;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #d63384;
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
  color: #d63384;
  font-weight: bold;
}



.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.example-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.example-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.example-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f8f9fa;
}

.example-icon {
  font-size: 2rem;
}

.example-header h3 {
  color: #2c3e50;
  margin: 0;
  font-size: 1.3rem;
}

.example-content h4 {
   color: #495057;
   margin: 1.5rem 0 0.8rem 0;
   font-size: 1.1rem;
   border-left: 3px solid #4a90e2;
   padding-left: 0.8rem;
 }

 /* Modern Developments Styles */
 .modern-developments {
   margin: 2rem 0;
 }

 .development-category {
   margin: 3rem 0;
   padding: 2rem;
   background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
   border-radius: 15px;
   border: 1px solid #dee2e6;
 }

 .development-category h3 {
   color: #2c3e50;
   margin-bottom: 2rem;
   font-size: 1.5rem;
   text-align: center;
   padding: 1rem;
   background: white;
   border-radius: 10px;
   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
 }

 .development-grid {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
   gap: 1.5rem;
 }

 .development-item {
   background: white;
   padding: 1.5rem;
   border-radius: 10px;
   border: 1px solid #e9ecef;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
   transition: transform 0.3s ease;
 }

 .development-item:hover {
   transform: translateY(-3px);
   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
 }

 .development-item h4 {
   color: #495057;
   margin-bottom: 1rem;
   font-size: 1.2rem;
   border-bottom: 2px solid #4a90e2;
   padding-bottom: 0.5rem;
 }

 .future-challenges {
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 2rem;
 }

 .challenge-item {
   background: white;
   padding: 2rem;
   border-radius: 12px;
   border: 1px solid #e9ecef;
   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
 }

 .challenge-item h4 {
   color: #2c3e50;
   margin-bottom: 1.5rem;
   font-size: 1.3rem;
   text-align: center;
   padding: 0.8rem;
   background: linear-gradient(135deg, #4a90e2, #357abd);
   color: white;
   border-radius: 8px;
 }

 .challenge-item ul {
   list-style: none;
   padding: 0;
 }

 .challenge-item li {
   margin: 1rem 0;
   padding: 0.8rem;
   background: #f8f9fa;
   border-radius: 8px;
   border-left: 4px solid #4a90e2;
   transition: background-color 0.3s ease;
 }

 .challenge-item li:hover {
   background: #e9ecef;
 }

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>