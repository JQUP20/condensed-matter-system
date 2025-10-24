<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.3.2 占据数表示</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">占据数</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>占据数表示的基本概念</h2>
        <p class="lead-text">
          占据数表示是二次量子化中最直观的表示方法，它直接描述了每个单粒子态的占据情况。
          这种表示方法不仅简化了多体波函数的描述，还自然地体现了粒子的统计性质。
        </p>
      </section>

      <section class="content-section">
        <h2>占据数的定义</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔢</div>
            <h3>基本定义</h3>
            <p>占据数及其物理意义</p>
            <div class="mathematical-content">
              <h4>占据数算符：</h4>
              <div class="equation-block">
                <p>n̂ₖ = â†ₖâₖ</p>
                <p>n̂ₖ|nₖ⟩ = nₖ|nₖ⟩</p>
              </div>
              
              <h4>占据数态：</h4>
              <div class="equation-block">
                <p>|n₁, n₂, ..., nₖ, ...⟩</p>
                <p>nₖ = 0, 1, 2, ... (玻色子)</p>
                <p>nₖ = 0, 1 (费米子)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🏗️</div>
            <h3>态的构造</h3>
            <p>从真空态构造占据数态</p>
            <div class="mathematical-content">
              <h4>构造公式：</h4>
              <div class="equation-block">
                <p>|n₁, n₂, ..., nₖ, ...⟩ = ∏ₖ (â†ₖ)^nₖ/√(nₖ!)|0⟩</p>
              </div>
              
              <h4>归一化条件：</h4>
              <div class="equation-block">
                <p>⟨n₁, n₂, ...|n₁, n₂, ...⟩ = 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>占据数表示的深层理论基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🏗️</div>
            <h3>Fock空间的数学结构</h3>
            <p>无穷维Hilbert空间的构造与性质</p>
            <div class="mathematical-content">
              <h4>Fock空间的定义：</h4>
              <div class="equation-block">
                <p>ℱ = ⊕_{n=0}^∞ ℋ^{(n)}</p>
                <p>ℋ^{(n)} = ℋ₁^⊗n (玻色子：对称化)</p>
                <p>ℋ^{(n)} = ∧^n ℋ₁ (费米子：反对称化)</p>
              </div>
              
              <h4>对称化与反对称化算符：</h4>
              <div class="equation-block">
                <p>𝒮ₙ = (1/n!)∑_{π∈Sₙ} P̂π (玻色子)</p>
                <p>𝒜ₙ = (1/n!)∑_{π∈Sₙ} sgn(π)P̂π (费米子)</p>
                <p>P̂π: 粒子置换算符</p>
              </div>
              
              <h4>占据数表示的完备性：</h4>
              <div class="equation-block">
                <p>∑_{n₁,n₂,...} |n₁,n₂,...⟩⟨n₁,n₂,...| = Î</p>
                <p>正交性：⟨{nₖ}|{n'ₖ}⟩ = ∏ₖ δₙₖ,ₙ'ₖ</p>
                <p>归一性：⟨{nₖ}|{nₖ}⟩ = 1</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>统计力学中的占据数分布</h3>
            <p>热平衡态下的粒子分布规律</p>
            <div class="mathematical-content">
              <h4>巨正则系综：</h4>
              <div class="equation-block">
                <p>ρ̂ = e^{-β(Ĥ-μN̂)}/Ξ</p>
                <p>Ξ = Tr(e^{-β(Ĥ-μN̂)}) (巨配分函数)</p>
                <p>β = 1/(kᵦT), μ = 化学势</p>
              </div>
              
              <h4>理想气体的占据数：</h4>
              <div class="equation-block">
                <p>⟨n̂ₖ⟩ = 1/(e^{β(εₖ-μ)} ∓ 1)</p>
                <p>- : 费米-狄拉克分布</p>
                <p>+ : 玻色-爱因斯坦分布</p>
              </div>
              
              <h4>涨落与关联：</h4>
              <div class="equation-block">
                <p>⟨(Δn̂ₖ)²⟩ = ⟨n̂ₖ⟩(1 ± ⟨n̂ₖ⟩)</p>
                <p>+ : 玻色子 (超泊松统计)</p>
                <p>- : 费米子 (亚泊松统计)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>粒子-空穴对偶性</h3>
            <p>费米子系统的粒子-空穴变换</p>
            <div class="mathematical-content">
              <h4>粒子-空穴变换：</h4>
              <div class="equation-block">
                <p>ĉₖ → d̂†ₖ (粒子 → 空穴)</p>
                <p>ĉ†ₖ → d̂ₖ (反粒子 → 反空穴)</p>
                <p>|0⟩_粒子 ↔ |filled⟩_空穴</p>
              </div>
              
              <h4>对偶哈密顿量：</h4>
              <div class="equation-block">
                <p>Ĥ_粒子 = ∑ₖ εₖĉ†ₖĉₖ</p>
                <p>Ĥ_空穴 = ∑ₖ (-εₖ)d̂†ₖd̂ₖ + E₀</p>
                <p>E₀ = ∑ₖ εₖ (常数项)</p>
              </div>
              
              <h4>应用：超导理论</h4>
              <div class="physics-insight">
                <p><strong>Cooper对：</strong>粒子-空穴对称性</p>
                <p><strong>BCS理论：</strong>平均场近似</p>
                <p><strong>能隙：</strong>准粒子激发谱</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>占据数表示的优势</h2>
        <div class="physics-insight">
          <h3>🎯 核心优势</h3>
          <p>占据数表示在多体物理中的重要作用：</p>
          <ul>
            <li><strong>直观性：</strong>直接描述每个态的粒子数</li>
            <li><strong>完备性：</strong>构成Fock空间的完备基</li>
            <li><strong>统计性：</strong>自动满足正确的统计要求</li>
            <li><strong>计算便利：</strong>简化多体算符的矩阵元计算</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2>多体系统中的高级应用</h2>
        <div class="application-grid">
          <div class="application-card">
            <div class="application-icon">🌌</div>
            <h3>量子多体纠缠</h3>
            <p>占据数表示中的纠缠度量与相变</p>
            <div class="mathematical-content">
              <h4>纠缠熵：</h4>
              <div class="equation-block">
                <p>S_A = -Tr(ρ_A ln ρ_A)</p>
                <p>ρ_A = Tr_B(|ψ⟩⟨ψ|) (约化密度矩阵)</p>
                <p>面积定律：S_A ∝ |∂A| (基态)</p>
              </div>
              
              <h4>相互信息：</h4>
              <div class="equation-block">
                <p>I(A:B) = S_A + S_B - S_{AB}</p>
                <p>量化子系统间的量子关联</p>
              </div>
              
              <h4>量子相变的纠缠标志：</h4>
              <div class="physics-insight">
                <p><strong>临界点：</strong>纠缠熵发散</p>
                <p><strong>拓扑相：</strong>拓扑纠缠熵</p>
                <p><strong>多体局域化：</strong>面积定律破缺</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🔬</div>
            <h3>冷原子量子模拟</h3>
            <p>可控量子系统的占据数工程</p>
            <div class="mathematical-content">
              <h4>光晶格中的Hubbard模型：</h4>
              <div class="equation-block">
                <p>Ĥ = -t∑_{⟨i,j⟩}(ĉ†ᵢĉⱼ + h.c.) + U∑ᵢn̂ᵢ↑n̂ᵢ↓</p>
                <p>t: 跃迁积分, U: 在位相互作用</p>
              </div>
              
              <h4>Mott绝缘体相变：</h4>
              <div class="equation-block">
                <p>超流相 ↔ Mott绝缘相</p>
                <p>临界点：(U/t)_c ≈ 5.8 (3D)</p>
                <p>序参量：⟨ĉᵢ⟩ (超流序参量)</p>
              </div>
              
              <h4>实验可观测量：</h4>
              <div class="physics-insight">
                <p><strong>占据数涨落：</strong>⟨(n̂ᵢ-⟨n̂ᵢ⟩)²⟩</p>
                <p><strong>动量分布：</strong>n(k) = ⟨ĉ†ₖĉₖ⟩</p>
                <p><strong>关联函数：</strong>g²(0) = ⟨n̂(n̂-1)⟩/⟨n̂⟩²</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">💎</div>
            <h3>拓扑量子态</h3>
            <p>占据数表示中的拓扑不变量</p>
            <div class="mathematical-content">
              <h4>Chern数：</h4>
              <div class="equation-block">
                <p>C = (1/2π)∫_{BZ} Ω(k)d²k</p>
                <p>Ω(k) = i⟨∂ₖₓu|∂ₖᵧu⟩ - c.c.</p>
                <p>|u(k)⟩: Bloch波函数</p>
              </div>
              
              <h4>Z₂拓扑不变量：</h4>
              <div class="equation-block">
                <p>ν = (1/2π)[∫₀^π dk_x log(det[w(k_x)])]mod 2</p>
                <p>w(k_x): Wilson环算符</p>
              </div>
              
              <h4>边界态与体-边对应：</h4>
              <div class="physics-insight">
                <p><strong>量子霍尔效应：</strong>σ_xy = Ce²/h</p>
                <p><strong>拓扑绝缘体：</strong>受保护的表面态</p>
                <p><strong>Majorana费米子：</strong>拓扑超导体</p>
              </div>
            </div>
          </div>

          <div class="application-card">
            <div class="application-icon">🧮</div>
            <h3>量子计算中的应用</h3>
            <p>占据数编码的量子算法</p>
            <div class="mathematical-content">
              <h4>Jordan-Wigner变换：</h4>
              <div class="equation-block">
                <p>ĉⱼ = (∏ₖ<ⱼ σ̂ₖᶻ) σ̂ⱼ⁻</p>
                <p>σ̂⁻ = (σ̂ˣ - iσ̂ʸ)/2</p>
                <p>费米子 → 自旋1/2系统</p>
              </div>
              
              <h4>变分量子本征求解器(VQE)：</h4>
              <div class="equation-block">
                <p>E₀ = min_θ ⟨ψ(θ)|Ĥ|ψ(θ)⟩</p>
                <p>|ψ(θ)⟩ = U(θ)|0⟩ (参数化量子线路)</p>
              </div>
              
              <h4>量子近似优化算法(QAOA)：</h4>
              <div class="physics-insight">
                <p><strong>组合优化：</strong>Max-Cut, TSP</p>
                <p><strong>绝热演化：</strong>H(t) = (1-t)H₀ + tH₁</p>
                <p><strong>量子优势：</strong>指数加速潜力</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>算符在占据数表示中的作用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>产生算符</h3>
            <p>增加粒子数的作用</p>
            <div class="mathematical-content">
              <h4>玻色子：</h4>
              <div class="equation-block">
                <p>â†ₖ|..., nₖ, ...⟩ = √(nₖ+1)|..., nₖ+1, ...⟩</p>
              </div>
              
              <h4>费米子：</h4>
              <div class="equation-block">
                <p>â†ₖ|..., 0, ...⟩ = |..., 1, ...⟩</p>
                <p>â†ₖ|..., 1, ...⟩ = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔽</div>
            <h3>湮灭算符</h3>
            <p>减少粒子数的作用</p>
            <div class="mathematical-content">
              <h4>玻色子：</h4>
              <div class="equation-block">
                <p>âₖ|..., nₖ, ...⟩ = √nₖ|..., nₖ-1, ...⟩</p>
              </div>
              
              <h4>费米子：</h4>
              <div class="equation-block">
                <p>âₖ|..., 1, ...⟩ = |..., 0, ...⟩</p>
                <p>âₖ|..., 0, ...⟩ = 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>实际应用示例</h2>
        <div class="example-box">
          <h3>例1：理想玻色气体</h3>
          <p>N个玻色子的基态：</p>
          <div class="equation-block">
            <p>|ψ₀⟩ = |N, 0, 0, 0, ...⟩</p>
            <p>所有粒子都占据最低能态</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：理想费米气体</h3>
          <p>N个费米子的基态（T=0）：</p>
          <div class="equation-block">
            <p>|ψ₀⟩ = |1, 1, 1, ..., 1, 0, 0, ...⟩</p>
            <p>填满费米海，形成费米面</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>占据数表示的数学性质</h2>
        <div class="property-grid">
          <div class="property-item">
            <h3>🔄 完备性</h3>
            <p>Σ|n₁, n₂, ...⟩⟨n₁, n₂, ...| = 1</p>
          </div>
          <div class="property-item">
            <h3>⊥ 正交性</h3>
            <p>⟨n₁, n₂, ...|m₁, m₂, ...⟩ = ∏ₖδₙₖₘₖ</p>
          </div>
          <div class="property-item">
            <h3>📊 粒子数守恒</h3>
            <p>N̂ = Σₖn̂ₖ = Σₖâ†ₖâₖ</p>
          </div>
          <div class="property-item">
            <h3>🔢 占据数本征态</h3>
            <p>n̂ₖ|nₖ⟩ = nₖ|nₖ⟩</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代理论发展与前沿研究</h2>
        <div class="development-grid">
          <div class="development-category">
            <h3>🌟 理论突破</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>张量网络方法</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>|ψ⟩ = ∑_{i₁...iₙ} T^{i₁...iₙ}|i₁⟩⊗...⊗|iₙ⟩</p>
                    <p>MPS: |ψ⟩ = ∑ᵢ Tr(A^{i₁}...A^{iₙ})|i₁...iₙ⟩</p>
                    <p>PEPS: 二维张量网络</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>优势：</strong>高效表示纠缠态</p>
                    <p><strong>应用：</strong>DMRG, TEBD算法</p>
                    <p><strong>局限：</strong>面积定律约束</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>机器学习量子多体</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>|ψ⟩ = ∑ᵢ ψ_NN(σᵢ)|σᵢ⟩</p>
                    <p>ψ_NN: 神经网络波函数</p>
                    <p>E = ⟨ψ_NN|Ĥ|ψ_NN⟩/⟨ψ_NN|ψ_NN⟩</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>RBM：</strong>受限玻尔兹曼机</p>
                    <p><strong>CNN：</strong>卷积神经网络</p>
                    <p><strong>Transformer：</strong>注意力机制</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>非厄米量子力学</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>Ĥ ≠ Ĥ†</p>
                    <p>例外点：det(Ĥ - λI) = 0</p>
                    <p>PT对称性：[Ĥ, PT] = 0</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>开放系统：</strong>耗散与增益</p>
                    <p><strong>拓扑相变：</strong>例外点处</p>
                    <p><strong>实验：</strong>光子晶体、冷原子</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🔬 实验前沿</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>量子气体显微镜</h4>
                <div class="physics-insight">
                  <p><strong>单原子分辨：</strong>直接观测占据数</p>
                  <p><strong>实时动力学：</strong>量子淬火过程</p>
                  <p><strong>关联测量：</strong>多体纠缠探测</p>
                </div>
              </div>

              <div class="development-item">
                <h4>超导量子处理器</h4>
                <div class="physics-insight">
                  <p><strong>Josephson结：</strong>人工原子</p>
                  <p><strong>量子退火：</strong>优化问题求解</p>
                  <p><strong>量子纠错：</strong>表面码实现</p>
                </div>
              </div>

              <div class="development-item">
                <h4>拓扑材料工程</h4>
                <div class="physics-insight">
                  <p><strong>异质结构：</strong>人工拓扑相</p>
                  <p><strong>Majorana费米子：</strong>拓扑量子比特</p>
                  <p><strong>量子反常霍尔：</strong>零磁场量子化</p>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>💻 计算方法</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>量子蒙特卡罗新算法</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>符号问题：⟨O⟩ = ⟨O·sign⟩/⟨sign⟩</p>
                    <p>Meron算法：符号消除</p>
                    <p>复Langevin：复权重采样</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>变分量子算法</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>QAOA: |ψ(β,γ)⟩ = ∏ⱼe^{-iγⱼĤ_C}e^{-iβⱼĤ_B}|+⟩</p>
                    <p>VQE: E₀ = min_θ⟨ψ(θ)|Ĥ|ψ(θ)⟩</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>经典模拟算法</h4>
                <div class="physics-insight">
                  <p><strong>Clifford模拟：</strong>稳定子态</p>
                  <p><strong>张量收缩：</strong>指数加速</p>
                  <p><strong>近似算法：</strong>PEPS, MERA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="future-challenges">
          <h3>🚀 未来挑战与机遇</h3>
          <div class="challenge-grid">
            <div class="challenge-item theoretical">
              <h4>理论挑战</h4>
              <ul>
                <li>强关联系统的精确解</li>
                <li>非平衡态量子多体理论</li>
                <li>量子引力中的纠缠结构</li>
                <li>机器学习与量子物理的深度融合</li>
              </ul>
            </div>
            
            <div class="challenge-item technical">
              <h4>技术突破</h4>
              <ul>
                <li>容错量子计算的实现</li>
                <li>室温量子相干性</li>
                <li>大规模量子模拟器</li>
                <li>量子网络与分布式计算</li>
              </ul>
            </div>
            
            <div class="challenge-item application">
              <h4>应用前景</h4>
              <ul>
                <li>量子化学与药物设计</li>
                <li>高温超导机理解释</li>
                <li>新型量子材料设计</li>
                <li>量子人工智能算法</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>占据数表示提供了多体态的直观描述</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>自动体现玻色子和费米子的统计性质</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>构成Fock空间的完备正交基</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>简化多体算符的矩阵元计算</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_3_2',
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
  border-bottom: 3px solid #6f42c1;
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
  background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%);
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
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #4a148c;
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

/* 应用网格样式 */
.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 1.5rem 0;
}

.application-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.application-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.application-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

/* 现代发展样式 */
.development-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.development-category {
  background: linear-gradient(135deg, #fafbff 0%, #f0f4f8 100%);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.development-category h3 {
  color: #1e40af;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 0.5rem;
}

.development-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.development-item {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.development-item:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.development-item h4 {
  color: #1f2937;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* 未来挑战样式 */
.future-challenges {
  margin-top: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border-radius: 16px;
  border: 1px solid #cbd5e1;
}

.future-challenges h3 {
  color: #0f172a;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.challenge-item {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.challenge-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.challenge-item.theoretical {
  border-left: 4px solid #8b5cf6;
}

.challenge-item.technical {
  border-left: 4px solid #06b6d4;
}

.challenge-item.application {
  border-left: 4px solid #10b981;
}

.challenge-item h4 {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.challenge-item.theoretical h4 {
  color: #8b5cf6;
}

.challenge-item.technical h4 {
  color: #06b6d4;
}

.challenge-item.application h4 {
  color: #10b981;
}

.challenge-item ul {
  list-style: none;
  padding: 0;
}

.challenge-item li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
  position: relative;
  padding-left: 1.5rem;
}

.challenge-item li:before {
  content: "→";
  position: absolute;
  left: 0;
  color: #64748b;
  font-weight: bold;
}

.challenge-item li:last-child {
  border-bottom: none;
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
  border-left: 4px solid #6f42c1;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #2e7d32;
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
  color: #2e7d32;
  font-weight: bold;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.property-item {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.property-item h3 {
  color: #ad1457;
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
  background: linear-gradient(135deg, #6f42c1 0%, #e83e8c 100%);
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
  
  .concept-grid, .comparison-grid {
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