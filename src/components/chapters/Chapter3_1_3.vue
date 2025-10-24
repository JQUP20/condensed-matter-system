<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.1.3 t-J模型和隐藏费米液体</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">强关联理论</span>
        <span class="reading-time">阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        t-J模型是Hubbard模型在强耦合极限下的有效低能理论。它通过投影掉双占据态，
        将电子的跃迁和自旋交换耦合在一起，揭示了强关联电子系统中的新奇物理现象，
        包括隐藏费米液体行为和高温超导的可能机制。
      </p>
    </div>

    <section class="content-section">
      <h2>从Hubbard到t-J模型</h2>
      <div class="derivation-flow">
        <div class="flow-step">
          <div class="step-header">
            <div class="step-icon">🎯</div>
            <h3>Hubbard模型回顾</h3>
          </div>
          <div class="step-content">
            <div class="mathematical-content">
              <h4>原始哈密顿量：</h4>
              <div class="equation-block">
                <p>H = -t ∑⟨i,j⟩,σ (c†ᵢσcⱼσ + h.c.) + U ∑ᵢ nᵢ↑nᵢ↓</p>
                <p>强耦合条件: U ≫ t</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flow-arrow">↓</div>

        <div class="flow-step">
          <div class="step-header">
            <div class="step-icon">🚫</div>
            <h3>双占据投影</h3>
          </div>
          <div class="step-content">
            <div class="mathematical-content">
              <h4>投影算符：</h4>
              <div class="equation-block">
                <p>P = ∏ᵢ (1 - nᵢ↑nᵢ↓)</p>
                <p>作用: 消除双占据态</p>
                <p>约束: nᵢ↑ + nᵢ↓ ≤ 1</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flow-arrow">↓</div>

        <div class="flow-step">
          <div class="step-header">
            <div class="step-icon">⚡</div>
            <h3>有效哈密顿量</h3>
          </div>
          <div class="step-content">
            <div class="mathematical-content">
              <h4>t-J模型：</h4>
              <div class="equation-block">
                <p>H = -t ∑⟨i,j⟩,σ P(c†ᵢσcⱼσ + h.c.)P + J ∑⟨i,j⟩ (Sᵢ·Sⱼ - ¼nᵢnⱼ)</p>
                <p>J = 4t²/U: 超交换常数</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            <!-- Keep method-content and containers open; remove premature closures -->

    <section class="content-section">
      <h2>t-J模型的物理内容</h2>
      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-icon">🏃</div>
          <h3>约束跃迁</h3>
          <p>电子只能跃迁到空格点，避免双占据</p>
          <div class="mathematical-content">
            <h4>跃迁项：</h4>
            <div class="equation-block">
              <p>Hₜ = -t ∑⟨i,j⟩,σ P(c†ᵢσcⱼσ + h.c.)P</p>
              <p>P: 投影到无双占据子空间</p>
              <p>约束动力学</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🧲</div>
          <h3>超交换相互作用</h3>
          <p>相邻格点间的反铁磁自旋交换</p>
          <div class="mathematical-content">
            <h4>交换项：</h4>
            <div class="equation-block">
              <p>Hⱼ = J ∑⟨i,j⟩ (Sᵢ·Sⱼ - ¼nᵢnⱼ)</p>
              <p>J = 4t²/U > 0</p>
              <p>反铁磁交换</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🔒</div>
          <h3>局域约束</h3>
          <p>每个格点最多一个电子</p>
          <div class="mathematical-content">
            <h4>约束条件：</h4>
            <div class="equation-block">
              <p>nᵢ = nᵢ↑ + nᵢ↓ ≤ 1</p>
              <p>希尔伯特空间缩减</p>
              <p>非费米液体行为</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>奴隶玻色子表示</h2>
      <div class="representation-method">
        <div class="method-card">
          <h3>🎭 奴隶粒子分解</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>电子算符分解：</h4>
              <div class="equation-block">
                <p>cᵢσ = fᵢσ bᵢ†</p>
                <p>fᵢσ: 费米子（携带自旋）</p>
                <p>bᵢ: 玻色子（表示空穴）</p>
                <p>约束: fᵢ↑†fᵢ↑ + fᵢ↓†fᵢ↓ + bᵢ†bᵢ = 1</p>
              </div>
            </div>
            
            <div class="physical-interpretation">
              <h4>物理图像：</h4>
              <ul>
                <li>费米子描述自旋和统计</li>
                <li>玻色子描述电荷涨落</li>
                <li>约束保证单占据</li>
                <li>自旋-电荷分离</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="method-card">
          <h3>🌊 平均场理论</h3>
          <div class="method-content">
            <div class="mathematical-content">
              <h4>平均场近似：</h4>
              <div class="equation-block">
                <p>⟨bᵢ†bⱼ⟩ ≈ χᵢⱼ (RVB参数)</p>
                <p>⟨fᵢσ†fⱼσ⟩ ≈ ψᵢⱼ (配对参数)</p>
                <p>有效费米子哈密顿量</p>
              </div>
            </div>
            
            <div class="physical-interpretation">
              <h4>结果：</h4>
              <ul>
                <li>重整化费米面</li>
                <li>准粒子权重抑制</li>
                <li>自旋液体基态</li>
                <li>d波超导配对</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>隐藏费米液体理论</h2>
      <div class="hidden-fermi-liquid">
        <div class="theory-overview">
          <h3>🔍 基本概念</h3>
          <div class="overview-content">
            <p>隐藏费米液体是指在强关联系统中，尽管原始电子不满足费米液体行为，
            但存在某种"隐藏"的费米子激发，它们遵循费米液体理论。</p>
            
            <div class="key-features">
              <div class="feature-item">
                <div class="feature-icon">👻</div>
                <div class="feature-text">
                  <h4>隐藏费米面</h4>
                  <p>不直接对应电子，但决定低能物理</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon">🔄</div>
                <div class="feature-text">
                  <h4>自旋-电荷分离</h4>
                  <p>自旋和电荷由不同准粒子携带</p>
                </div>
              </div>
              
              <div class="feature-item">
                <div class="feature-icon">⚖️</div>
                <div class="feature-text">
                  <h4>大N极限</h4>
                  <p>在SU(N)对称性下的精确结果</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="theory-details">
          <div class="detail-card">
            <h3>🧮 数学框架</h3>
            <div class="detail-content">
              <div class="mathematical-content">
                <h4>有效作用量：</h4>
                <div class="equation-block">
                  <p>S = ∫ d²x dτ [f†(∂τ - μ - A₀)f + v(∇f†·∇f)]</p>
                  <p>+ ∫ d²x dτ [|∇ × A|² + λ(f†f + b†b - 1)]</p>
                  <p>f: 费米子场, A: 规范场, b: 玻色子场</p>
                </div>
              </div>
              
              <div class="insight-box">
                <p>💡 规范场A描述约束的动力学效应，导致非费米液体行为。</p>
              </div>
            </div>
          </div>

          <div class="detail-card">
            <h3>📊 物理性质</h3>
            <div class="detail-content">
              <div class="properties-list">
                <div class="property-item">
                  <h4>比热系数：</h4>
                  <p>γ = C/T ∝ T^α, α < 1</p>
                </div>
                
                <div class="property-item">
                  <h4>电阻率：</h4>
                  <p>ρ(T) ∝ T (线性温度依赖)</p>
                </div>
                
                <div class="property-item">
                  <h4>磁化率：</h4>
                  <p>χ(T) ∝ log T (对数发散)</p>
                </div>
                
                <div class="property-item">
                  <h4>光电导：</h4>
                  <p>σ(ω) ∝ ω^(-2/3) (分数幂律)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>与高温超导的联系</h2>
      <div class="superconductivity-connection">
        <div class="connection-overview">
          <h3>🔗 理论联系</h3>
          <p>t-J模型被认为是理解铜氧化物高温超导体的关键理论模型。</p>
        </div>

        <div class="connection-details">
          <div class="detail-section">
            <h4>🧪 实验观测</h4>
            <div class="experimental-facts">
              <div class="fact-item">
                <div class="fact-icon">📈</div>
                <div class="fact-content">
                  <h5>线性电阻率</h5>
                  <p>正常态电阻率 ρ ∝ T，违反费米液体预期</p>
                </div>
              </div>
              
              <div class="fact-item">
                <div class="fact-icon">🌡️</div>
                <div class="fact-content">
                  <h5>赝能隙</h5>
                  <p>超导转变温度以上存在能隙结构</p>
                </div>
              </div>
              
              <div class="fact-item">
                <div class="fact-icon">🎯</div>
                <div class="fact-content">
                  <h5>d波配对</h5>
                  <p>超导序参量具有d_{x²-y²}对称性</p>
                </div>
              </div>
            </div>
          </div>

          <div class="detail-section">
            <h4>🔬 理论解释</h4>
            <div class="theoretical-explanations">
              <div class="explanation-item">
                <h5>RVB理论：</h5>
                <ul>
                  <li>共振价键态作为基态</li>
                  <li>掺杂产生移动的空穴</li>
                  <li>自旋液体到超导的演化</li>
                </ul>
              </div>
              
              <div class="explanation-item">
                <h5>自旋涨落机制：</h5>
                <ul>
                  <li>反铁磁自旋涨落介导配对</li>
                  <li>d波超导的自然出现</li>
                  <li>最优掺杂的理解</li>
                </ul>
              </div>
              
              <div class="explanation-item">
                <h5>条纹相：</h5>
                <ul>
                  <li>电荷和自旋的空间调制</li>
                  <li>竞争序参量</li>
                  <li>欠掺杂区域的复杂相图</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>数值方法与结果</h2>
      <div class="numerical-methods">
        <div class="method-grid">
          <div class="method-card">
            <div class="method-icon">🎲</div>
            <h3>量子蒙特卡洛</h3>
            <div class="method-content">
              <h4>优势：</h4>
              <ul>
                <li>无偏的数值结果</li>
                <li>有限温度性质</li>
                <li>关联函数计算</li>
              </ul>
              
              <h4>挑战：</h4>
              <ul>
                <li>符号问题</li>
                <li>掺杂系统困难</li>
                <li>计算复杂度高</li>
              </ul>
              
              <div class="key-results">
                <h4>主要结果：</h4>
                <p>• 半填充时反铁磁长程序<br>
                • 轻掺杂时条纹相形成<br>
                • d波超导关联增强</p>
              </div>
            </div>
          </div>

          <div class="method-card">
            <div class="method-icon">🔗</div>
            <h3>密度矩阵重整化群</h3>
            <div class="method-content">
              <h4>优势：</h4>
              <ul>
                <li>基态精确求解</li>
                <li>大系统尺寸</li>
                <li>实空间信息</li>
              </ul>
              
              <h4>局限：</h4>
              <ul>
                <li>主要限于一维</li>
                <li>二维系统困难</li>
                <li>有限尺寸效应</li>
              </ul>
              
              <div class="key-results">
                <h4>主要结果：</h4>
                <p>• 一维Luttinger液体行为<br>
                • 自旋-电荷分离确认<br>
                • 相分离倾向</p>
              </div>
            </div>
          </div>

          <div class="method-card">
            <div class="method-icon">🌐</div>
            <h3>变分蒙特卡洛</h3>
            <div class="method-content">
              <h4>优势：</h4>
              <ul>
                <li>大系统可处理</li>
                <li>物理直觉清晰</li>
                <li>多种序参量</li>
              </ul>
              
              <h4>局限：</h4>
              <ul>
                <li>依赖试探波函数</li>
                <li>可能遗漏相</li>
                <li>基态偏向</li>
              </ul>
              
              <div class="key-results">
                <h4>主要结果：</h4>
                <p>• RVB态的稳定性<br>
                • d波超导基态<br>
                • 相图的确定</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>开放问题与前沿</h2>
      <div class="frontier-topics">
        <div class="topic-card">
          <div class="topic-header">
            <div class="topic-icon">❓</div>
            <h3>未解决问题</h3>
          </div>
          <div class="topic-content">
            <div class="problem-list">
              <div class="problem-item">
                <h4>🎯 基态性质</h4>
                <p>二维t-J模型的确切基态仍有争议，特别是在轻掺杂区域。</p>
              </div>
              
              <div class="problem-item">
                <h4>🌡️ 有限温度</h4>
                <p>赝能隙相的微观起源和温度演化机制不完全清楚。</p>
              </div>
              
              <div class="problem-item">
                <h4>⚡ 输运性质</h4>
                <p>奇异金属相的线性电阻率缺乏完整的理论解释。</p>
              </div>
              
              <div class="problem-item">
                <h4>🔄 量子临界性</h4>
                <p>不同量子相变点的临界行为和普适类。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="topic-card">
          <div class="topic-header">
            <div class="topic-icon">🚀</div>
            <h3>前沿发展</h3>
          </div>
          <div class="topic-content">
            <div class="development-list">
              <div class="development-item">
                <h4>🧠 机器学习</h4>
                <p>神经网络量子态、变分自编码器等新方法的应用。</p>
              </div>
              
              <div class="development-item">
                <h4>🔬 量子模拟</h4>
                <p>冷原子、超导量子比特等平台的实验实现。</p>
              </div>
              
              <div class="development-item">
                <h4>📐 几何相位</h4>
                <p>拓扑性质、Berry相位在强关联系统中的作用。</p>
              </div>
              
              <div class="development-item">
                <h4>🌌 全息对偶</h4>
                <p>AdS/CFT对应在强关联电子系统中的应用。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>相图分析与临界现象</h2>
      <div class="phase-diagram-analysis">
        <div class="phase-overview">
          <h3>🗺️ t-J模型相图</h3>
          <p>t-J模型在不同掺杂浓度和温度下展现出丰富的相图结构，包括反铁磁相、超导相、赝能隙相和奇异金属相。</p>
        </div>

        <div class="phase-details">
          <div class="phase-card antiferromagnetic">
            <div class="phase-header">
              <div class="phase-icon">🧲</div>
              <h4>反铁磁相 (δ ≈ 0)</h4>
            </div>
            <div class="phase-content">
              <div class="phase-properties">
                <h5>基本特征：</h5>
                <ul>
                  <li>长程反铁磁序: ⟨Sᵢ·Sⱼ⟩ ∝ (-1)^(i-j)</li>
                  <li>Néel温度: TN ∝ J</li>
                  <li>自旋波激发</li>
                  <li>Mott绝缘体行为</li>
                </ul>
              </div>
              
              <div class="mathematical-description">
                <h5>序参量：</h5>
                <div class="equation-block">
                  <p>m_AF = (1/N) ∑ᵢ (-1)^i ⟨Sᵢᶻ⟩</p>
                  <p>临界指数: β ≈ 0.35 (2D Heisenberg)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="phase-card superconducting">
            <div class="phase-header">
              <div class="phase-icon">⚡</div>
              <h4>超导相 (0.05 < δ < 0.25)</h4>
            </div>
            <div class="phase-content">
              <div class="phase-properties">
                <h5>基本特征：</h5>
                <ul>
                  <li>d波配对: Δ(k) ∝ cos(kₓ) - cos(kᵧ)</li>
                  <li>最优掺杂: δ_opt ≈ 0.15</li>
                  <li>Cooper对形成</li>
                  <li>Meissner效应</li>
                </ul>
              </div>
              
              <div class="mathematical-description">
                <h5>序参量：</h5>
                <div class="equation-block">
                  <p>Δ_SC = ⟨c_i↑c_j↓ - c_i↓c_j↑⟩</p>
                  <p>Tc ∝ t²/J (最优掺杂)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="phase-card pseudogap">
            <div class="phase-header">
              <div class="phase-icon">🌡️</div>
              <h4>赝能隙相 (T* > T > Tc)</h4>
            </div>
            <div class="phase-content">
              <div class="phase-properties">
                <h5>基本特征：</h5>
                <ul>
                  <li>部分费米面消失</li>
                  <li>预配对涨落</li>
                  <li>自旋能隙</li>
                  <li>电荷能隙</li>
                </ul>
              </div>
              
              <div class="mathematical-description">
                <h5>特征能标：</h5>
                <div class="equation-block">
                  <p>T* ∝ J (反铁磁交换能)</p>
                  <p>Δ_PG ∝ J√δ (赝能隙大小)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="phase-card strange-metal">
            <div class="phase-header">
              <div class="phase-icon">🔥</div>
              <h4>奇异金属相 (T > T*)</h4>
            </div>
            <div class="phase-content">
              <div class="phase-properties">
                <h5>基本特征：</h5>
                <ul>
                  <li>线性电阻率: ρ ∝ T</li>
                  <li>边缘费米液体</li>
                  <li>量子临界涨落</li>
                  <li>非费米液体行为</li>
                </ul>
              </div>
              
              <div class="mathematical-description">
                <h5>输运性质：</h5>
                <div class="equation-block">
                  <p>σ(ω,T) ∝ (ω² + (πT)²)^(-1/2)</p>
                  <p>边缘费米液体标度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>量子临界现象</h2>
      <div class="quantum-criticality">
        <div class="criticality-overview">
          <h3>🎯 量子临界点</h3>
          <p>t-J模型中存在多个量子临界点，连接不同的量子相，展现出丰富的临界现象和标度行为。</p>
        </div>

        <div class="critical-points">
          <div class="critical-point-card">
            <div class="critical-header">
              <div class="critical-icon">🔄</div>
              <h4>反铁磁-超导量子临界点</h4>
            </div>
            <div class="critical-content">
              <div class="critical-theory">
                <h5>理论描述：</h5>
                <ul>
                  <li>O(3) × Z₂对称性破缺</li>
                  <li>反铁磁序参量耦合超导序参量</li>
                  <li>竞争序参量的量子涨落</li>
                  <li>临界指数偏离平均场</li>
                </ul>
              </div>
              
              <div class="scaling-relations">
                <h5>标度关系：</h5>
                <div class="equation-block">
                  <p>ξ ∝ |δ - δc|^(-ν), ν ≈ 0.7</p>
                  <p>χ ∝ |δ - δc|^(-γ), γ ≈ 1.4</p>
                  <p>动力学指数: z ≈ 1</p>
                </div>
              </div>
            </div>
          </div>

          <div class="critical-point-card">
            <div class="critical-header">
              <div class="critical-icon">🌊</div>
              <h4>Mott绝缘体-金属转变</h4>
            </div>
            <div class="critical-content">
              <div class="critical-theory">
                <h5>理论描述：</h5>
                <ul>
                  <li>电荷激发能隙的闭合</li>
                  <li>准粒子权重的连续变化</li>
                  <li>Luttinger定理的修正</li>
                  <li>费米面重构</li>
                </ul>
              </div>
              
              <div class="scaling-relations">
                <h5>标度行为：</h5>
                <div class="equation-block">
                  <p>Δ_charge ∝ |δ - δc|^β, β ≈ 0.5</p>
                  <p>Z ∝ |δ - δc|^α, α ≈ 1</p>
                  <p>连续相变特征</p>
                </div>
              </div>
            </div>
          </div>

          <div class="critical-point-card">
            <div class="critical-header">
              <div class="critical-icon">🎭</div>
              <h4>拓扑相变</h4>
            </div>
            <div class="critical-content">
              <div class="critical-theory">
                <h5>理论描述：</h5>
                <ul>
                  <li>Chern数的跳跃</li>
                  <li>边缘态的出现/消失</li>
                  <li>能隙的闭合与重开</li>
                  <li>Berry相位的奇点</li>
                </ul>
              </div>
              
              <div class="scaling-relations">
                <h5>拓扑不变量：</h5>
                <div class="equation-block">
                  <p>C = (1/2π) ∫ d²k Ω(k)</p>
                  <p>Ω(k): Berry曲率</p>
                  <p>量子化霍尔电导</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="finite-size-scaling">
          <h3>📏 有限尺寸标度</h3>
          <div class="scaling-analysis">
            <div class="scaling-theory">
              <h4>标度假设：</h4>
              <div class="equation-block">
                <p>F(L, t, h) = L^(-d) f(tL^(1/ν), hL^(β/ν))</p>
                <p>L: 系统尺寸, t: 约化温度, h: 外场</p>
                <p>f: 标度函数</p>
              </div>
            </div>
            
            <div class="scaling-applications">
              <h4>应用：</h4>
              <ul>
                <li>临界指数的精确确定</li>
                <li>临界点位置的定位</li>
                <li>普适类的识别</li>
                <li>交叉现象的理解</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>高级数值计算方法</h2>
      <div class="advanced-numerical-methods">
        <div class="method-category">
          <h3>🎲 改进的量子蒙特卡洛方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔧</div>
                <h4>约束路径积分蒙特卡洛</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Suzuki-Trotter分解</li>
                    <li>辅助场变换</li>
                  </ul>
              </div>
            </div>
          </div>
          

      
            
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌡️</div>
                <h4>有限温度Lanczos方法</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Krylov子空间构造</li>
                    <li>三对角化过程</li>
                    <li>连分数展开</li>
                    <li>动力学性质计算</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>实现细节：</h5>
                  <div class="equation-block">
                    <p>G(ω) = ⟨ψ₀|A†(ω - H + iη)⁻¹A|ψ₀⟩</p>
                    <p>连分数: G(ω) = a₀/(ω - b₀ - a₁²/(ω - b₁ - ...))</p>
                  </div>
                </div>
                
                <div class="applications">
                  <h5>应用领域：</h5>
                  <ul>
                    <li>光谱函数计算</li>
                    <li>输运系数</li>
                    <li>动力学结构因子</li>
                    <li>热力学性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>🧠 机器学习辅助方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🤖</div>
                <h4>神经网络量子态</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本思想：</h5>
                  <ul>
                    <li>神经网络参数化波函数</li>
                    <li>变分蒙特卡洛优化</li>
                    <li>自动微分技术</li>
                    <li>深度学习框架</li>
                  </ul>
                </div>
                
                <div class="network-architectures">
                  <h5>网络结构：</h5>
                  <div class="architecture-list">
                    <div class="architecture-item">
                      <h6>受限玻尔兹曼机 (RBM)：</h6>
                      <p>ψ(s) = ∑ₕ e^(∑ᵢ aᵢsᵢ + ∑ⱼ bⱼhⱼ + ∑ᵢⱼ Wᵢⱼsᵢhⱼ)</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>卷积神经网络 (CNN)：</h6>
                      <p>利用平移不变性，适合大系统</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>循环神经网络 (RNN)：</h6>
                      <p>处理长程关联，适合一维系统</p>
                    </div>
                  </div>
                </div>
                
                <div class="recent-results">
                  <h5>最新结果：</h5>
                  <ul>
                    <li>基态能量精度超越传统方法</li>
                    <li>发现新的量子相</li>
                    <li>相变点的精确定位</li>
                    <li>关联函数的高精度计算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔍</div>
                <h4>机器学习相识别</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>方法概述：</h5>
                  <ul>
                    <li>监督学习分类</li>
                    <li>无监督聚类分析</li>
                    <li>主成分分析</li>
                    <li>深度学习特征提取</li>
                  </ul>
                </div>
                
                <div class="feature-engineering">
                  <h5>特征工程：</h5>
                  <div class="feature-list">
                    <div class="feature-item">
                      <h6>局域观测量：</h6>
                      <p>自旋关联、电荷密度、动能等</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>拓扑特征：</h6>
                      <p>Chern数、缠绕数、边缘态</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>涨落特征：</h6>
                      <p>磁化率、比热、压缩率</p>
                    </div>
                  </div>
                </div>
                
                <div class="success-stories">
                  <h5>成功应用：</h5>
                  <ul>
                    <li>自动相图绘制</li>
                    <li>隐藏相的发现</li>
                    <li>临界指数提取</li>
                    <li>相变机制理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>⚡ 量子计算方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔬</div>
                <h4>变分量子本征求解器 (VQE)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法流程：</h5>
                  <ul>
                    <li>参数化量子线路设计</li>
                    <li>期望值测量</li>
                    <li>经典优化器更新参数</li>
                    <li>迭代收敛到基态</li>
                  </ul>
                </div>
                
                <div class="circuit-design">
                  <h5>线路设计：</h5>
                  <div class="equation-block">
                    <p>|ψ(θ)⟩ = U(θ)|ψ₀⟩</p>
                    <p>U(θ) = ∏ₗ e^(-iθₗPₗ)</p>
                    <p>Pₗ: Pauli算符乘积</p>
                  </div>
                </div>
                
                <div class="current-limitations">
                  <h5>当前限制：</h5>
                  <ul>
                    <li>量子比特数限制 (~100)</li>
                    <li>量子噪声影响</li>
                    <li>线路深度限制</li>
                    <li>测量统计误差</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌊</div>
                <h4>量子近似优化算法 (QAOA)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本原理：</h5>
                  <ul>
                    <li>绝热演化的数字化</li>
                    <li>交替应用驱动和成本哈密顿量</li>
                    <li>变分参数优化</li>
                    <li>近似基态制备</li>
                  </ul>
                </div>
                
                <div class="qaoa-circuit">
                  <h5>QAOA线路：</h5>
                  <div class="equation-block">
                    <p>|ψ(β,γ)⟩ = ∏ₚ e^(-iβₚHB)e^(-iγₚHC)|+⟩</p>
                    <p>HC: 成本哈密顿量 (t-J模型)</p>
                    <p>HB: 驱动哈密顿量 (横场)</p>
                  </div>
                </div>
                
                <div class="optimization-landscape">
                  <h5>优化策略：</h5>
                  <ul>
                    <li>梯度下降法</li>
                    <li>进化算法</li>
                    <li>贝叶斯优化</li>
                    <li>参数转移学习</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>高级数值计算方法</h2>
      <div class="advanced-numerical-methods">
        <div class="method-category">
          <h3>🎲 改进的量子蒙特卡洛方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔧</div>
                <h4>约束路径积分蒙特卡洛</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Suzuki-Trotter分解</li>
                    <li>辅助场变换</li>
<!-- </template> -->
                    <li>约束路径采样</li>
                    <li>符号问题的缓解</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>技术要点：</h5>
                  <div class="equation-block">
                    <p>e^(-βH) ≈ ∏ₗ e^(-ΔτHₗ)</p>
                    <p>Hₗ = Hₜ + Hⱼ + h·σ</p>
                    <p>约束: |⟨ψₜ|ψ₀⟩| > threshold</p>
                  </div>
                </div>
                
                <div class="advantages-limitations">
                  <div class="advantages">
                    <h5>优势：</h5>
                    <ul>
                      <li>可处理有限掺杂</li>
                      <li>符号问题较轻</li>
                      <li>系统尺寸可达100×100</li>
                    </ul>
                  </div>
                  
                  <div class="limitations">
                    <h5>局限：</h5>
                    <ul>
                      <li>仍存在符号问题</li>
                      <li>低温困难</li>
                      <li>计算复杂度高</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌡️</div>
                <h4>有限温度Lanczos方法</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Krylov子空间构造</li>
                    <li>三对角化过程</li>
                    <li>连分数展开</li>
                    <li>动力学性质计算</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>实现细节：</h5>
                  <div class="equation-block">
                    <p>G(ω) = ⟨ψ₀|A†(ω - H + iη)⁻¹A|ψ₀⟩</p>
                    <p>连分数: G(ω) = a₀/(ω - b₀ - a₁²/(ω - b₁ - ...))</p>
                  </div>
                </div>
                
                <div class="applications">
                  <h5>应用领域：</h5>
                  <ul>
                    <li>光谱函数计算</li>
                    <li>输运系数</li>
                    <li>动力学结构因子</li>
                    <li>热力学性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>🧠 机器学习辅助方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🤖</div>
                <h4>神经网络量子态</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本思想：</h5>
                  <ul>
                    <li>神经网络参数化波函数</li>
                    <li>变分蒙特卡洛优化</li>
                    <li>自动微分技术</li>
                    <li>深度学习框架</li>
                  </ul>
                </div>
                
                <div class="network-architectures">
                  <h5>网络结构：</h5>
                  <div class="architecture-list">
                    <div class="architecture-item">
                      <h6>受限玻尔兹曼机 (RBM)：</h6>
                      <p>ψ(s) = ∑ₕ e^(∑ᵢ aᵢsᵢ + ∑ⱼ bⱼhⱼ + ∑ᵢⱼ Wᵢⱼsᵢhⱼ)</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>卷积神经网络 (CNN)：</h6>
                      <p>利用平移不变性，适合大系统</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>循环神经网络 (RNN)：</h6>
                      <p>处理长程关联，适合一维系统</p>
                    </div>
                  </div>
                </div>
                
                <div class="recent-results">
                  <h5>最新结果：</h5>
                  <ul>
                    <li>基态能量精度超越传统方法</li>
                    <li>发现新的量子相</li>
                    <li>相变点的精确定位</li>
                    <li>关联函数的高精度计算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔍</div>
                <h4>机器学习相识别</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>方法概述：</h5>
                  <ul>
                    <li>监督学习分类</li>
                    <li>无监督聚类分析</li>
                    <li>主成分分析</li>
                    <li>深度学习特征提取</li>
                  </ul>
                </div>
                
                <div class="feature-engineering">
                  <h5>特征工程：</h5>
                  <div class="feature-list">
                    <div class="feature-item">
                      <h6>局域观测量：</h6>
                      <p>自旋关联、电荷密度、动能等</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>拓扑特征：</h6>
                      <p>Chern数、缠绕数、边缘态</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>涨落特征：</h6>
                      <p>磁化率、比热、压缩率</p>
                    </div>
                  </div>
                </div>
                
                <div class="success-stories">
                  <h5>成功应用：</h5>
                  <ul>
                    <li>自动相图绘制</li>
                    <li>隐藏相的发现</li>
                    <li>临界指数提取</li>
                    <li>相变机制理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>⚡ 量子计算方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔬</div>
                <h4>变分量子本征求解器 (VQE)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法流程：</h5>
                  <ul>
                    <li>参数化量子线路设计</li>
                    <li>期望值测量</li>
                    <li>经典优化器更新参数</li>
                    <li>迭代收敛到基态</li>
                  </ul>
                </div>
                
                <div class="circuit-design">
                  <h5>线路设计：</h5>
                  <div class="equation-block">
                    <p>|ψ(θ)⟩ = U(θ)|ψ₀⟩</p>
                    <p>U(θ) = ∏ₗ e^(-iθₗPₗ)</p>
                    <p>Pₗ: Pauli算符乘积</p>
                  </div>
                </div>
                
                <div class="current-limitations">
                  <h5>当前限制：</h5>
                  <ul>
                    <li>量子比特数限制 (~100)</li>
                    <li>量子噪声影响</li>
                    <li>线路深度限制</li>
                    <li>测量统计误差</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌊</div>
                <h4>量子近似优化算法 (QAOA)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本原理：</h5>
                  <ul>
                    <li>绝热演化的数字化</li>
                    <li>交替应用驱动和成本哈密顿量</li>
                    <li>变分参数优化</li>
                    <li>近似基态制备</li>
                  </ul>
                </div>
                
                <div class="qaoa-circuit">
                  <h5>QAOA线路：</h5>
                  <div class="equation-block">
                    <p>|ψ(β,γ)⟩ = ∏ₚ e^(-iβₚHB)e^(-iγₚHC)|+⟩</p>
                    <p>HC: 成本哈密顿量 (t-J模型)</p>
                    <p>HB: 驱动哈密顿量 (横场)</p>
                  </div>
                </div>
                
                <div class="optimization-landscape">
                  <h5>优化策略：</h5>
                  <ul>
                    <li>梯度下降法</li>
                    <li>进化算法</li>
                    <li>贝叶斯优化</li>
                    <li>参数转移学习</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>高级数值计算方法</h2>
      <div class="advanced-numerical-methods">
        <div class="method-category">
          <h3>🎲 改进的量子蒙特卡洛方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔧</div>
                <h4>约束路径积分蒙特卡洛</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Suzuki-Trotter分解</li>
                    <li>辅助场变换</li>
                    <li>约束路径采样</li>
                    <li>符号问题的缓解</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>技术要点：</h5>
                  <div class="equation-block">
                    <p>e^(-βH) ≈ ∏ₗ e^(-ΔτHₗ)</p>
                    <p>Hₗ = Hₜ + Hⱼ + h·σ</p>
                    <p>约束: |⟨ψₜ|ψ₀⟩| > threshold</p>
                  </div>
                </div>
                
                <div class="advantages-limitations">
                  <div class="advantages">
                    <h5>优势：</h5>
                    <ul>
                      <li>可处理有限掺杂</li>
                      <li>符号问题较轻</li>
                      <li>系统尺寸可达100×100</li>
                    </ul>
                  </div>
                  
                  <div class="limitations">
                    <h5>局限：</h5>
                    <ul>
                      <li>仍存在符号问题</li>
                      <li>低温困难</li>
                      <li>计算复杂度高</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌡️</div>
                <h4>有限温度Lanczos方法</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Krylov子空间构造</li>
                    <li>三对角化过程</li>
                    <li>连分数展开</li>
                    <li>动力学性质计算</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>实现细节：</h5>
                  <div class="equation-block">
                    <p>G(ω) = ⟨ψ₀|A†(ω - H + iη)⁻¹A|ψ₀⟩</p>
                    <p>连分数: G(ω) = a₀/(ω - b₀ - a₁²/(ω - b₁ - ...))</p>
                  </div>
                </div>
                
                <div class="applications">
                  <h5>应用领域：</h5>
                  <ul>
                    <li>光谱函数计算</li>
                    <li>输运系数</li>
                    <li>动力学结构因子</li>
                    <li>热力学性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>🧠 机器学习辅助方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🤖</div>
                <h4>神经网络量子态</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本思想：</h5>
                  <ul>
                    <li>神经网络参数化波函数</li>
                    <li>变分蒙特卡洛优化</li>
                    <li>自动微分技术</li>
                    <li>深度学习框架</li>
                  </ul>
                </div>
                
                <div class="network-architectures">
                  <h5>网络结构：</h5>
                  <div class="architecture-list">
                    <div class="architecture-item">
                      <h6>受限玻尔兹曼机 (RBM)：</h6>
                      <p>ψ(s) = ∑ₕ e^(∑ᵢ aᵢsᵢ + ∑ⱼ bⱼhⱼ + ∑ᵢⱼ Wᵢⱼsᵢhⱼ)</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>卷积神经网络 (CNN)：</h6>
                      <p>利用平移不变性，适合大系统</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>循环神经网络 (RNN)：</h6>
                      <p>处理长程关联，适合一维系统</p>
                    </div>
                  </div>
                </div>
                
                <div class="recent-results">
                  <h5>最新结果：</h5>
                  <ul>
                    <li>基态能量精度超越传统方法</li>
                    <li>发现新的量子相</li>
                    <li>相变点的精确定位</li>
                    <li>关联函数的高精度计算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔍</div>
                <h4>机器学习相识别</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>方法概述：</h5>
                  <ul>
                    <li>监督学习分类</li>
                    <li>无监督聚类分析</li>
                    <li>主成分分析</li>
                    <li>深度学习特征提取</li>
                  </ul>
                </div>
                
                <div class="feature-engineering">
                  <h5>特征工程：</h5>
                  <div class="feature-list">
                    <div class="feature-item">
                      <h6>局域观测量：</h6>
                      <p>自旋关联、电荷密度、动能等</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>拓扑特征：</h6>
                      <p>Chern数、缠绕数、边缘态</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>涨落特征：</h6>
                      <p>磁化率、比热、压缩率</p>
                    </div>
                  </div>
                </div>
                
                <div class="success-stories">
                  <h5>成功应用：</h5>
                  <ul>
                    <li>自动相图绘制</li>
                    <li>隐藏相的发现</li>
                    <li>临界指数提取</li>
                    <li>相变机制理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>⚡ 量子计算方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔬</div>
                <h4>变分量子本征求解器 (VQE)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法流程：</h5>
                  <ul>
                    <li>参数化量子线路设计</li>
                    <li>期望值测量</li>
                    <li>经典优化器更新参数</li>
                    <li>迭代收敛到基态</li>
                  </ul>
                </div>
                
                <div class="circuit-design">
                  <h5>线路设计：</h5>
                  <div class="equation-block">
                    <p>|ψ(θ)⟩ = U(θ)|ψ₀⟩</p>
                    <p>U(θ) = ∏ₗ e^(-iθₗPₗ)</p>
                    <p>Pₗ: Pauli算符乘积</p>
                  </div>
                </div>
                
                <div class="current-limitations">
                  <h5>当前限制：</h5>
                  <ul>
                    <li>量子比特数限制 (~100)</li>
                    <li>量子噪声影响</li>
                    <li>线路深度限制</li>
                    <li>测量统计误差</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌊</div>
                <h4>量子近似优化算法 (QAOA)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本原理：</h5>
                  <ul>
                    <li>绝热演化的数字化</li>
                    <li>交替应用驱动和成本哈密顿量</li>
                    <li>变分参数优化</li>
                    <li>近似基态制备</li>
                  </ul>
                </div>
                
                <div class="qaoa-circuit">
                  <h5>QAOA线路：</h5>
                  <div class="equation-block">
                    <p>|ψ(β,γ)⟩ = ∏ₚ e^(-iβₚHB)e^(-iγₚHC)|+⟩</p>
                    <p>HC: 成本哈密顿量 (t-J模型)</p>
                    <p>HB: 驱动哈密顿量 (横场)</p>
                  </div>
                </div>
                
                <div class="optimization-landscape">
                  <h5>优化策略：</h5>
                  <ul>
                    <li>梯度下降法</li>
                    <li>进化算法</li>
                    <li>贝叶斯优化</li>
                    <li>参数转移学习</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>高级数值计算方法</h2>
      <div class="advanced-numerical-methods">
        <div class="method-category">
          <h3>🎲 改进的量子蒙特卡洛方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔧</div>
                <h4>约束路径积分蒙特卡洛</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Suzuki-Trotter分解</li>
                    <li>辅助场变换</li>
                    <li>约束路径采样</li>
                    <li>符号问题的缓解</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>技术要点：</h5>
                  <div class="equation-block">
                    <p>e^(-βH) ≈ ∏ₗ e^(-ΔτHₗ)</p>
                    <p>Hₗ = Hₜ + Hⱼ + h·σ</p>
                    <p>约束: |⟨ψₜ|ψ₀⟩| > threshold</p>
                  </div>
                </div>
                
                <div class="advantages-limitations">
                  <div class="advantages">
                    <h5>优势：</h5>
                    <ul>
                      <li>可处理有限掺杂</li>
                      <li>符号问题较轻</li>
                      <li>系统尺寸可达100×100</li>
                    </ul>
                  </div>
                  
                  <div class="limitations">
                    <h5>局限：</h5>
                    <ul>
                      <li>仍存在符号问题</li>
                      <li>低温困难</li>
                      <li>计算复杂度高</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌡️</div>
                <h4>有限温度Lanczos方法</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Krylov子空间构造</li>
                    <li>三对角化过程</li>
                    <li>连分数展开</li>
                    <li>动力学性质计算</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>实现细节：</h5>
                  <div class="equation-block">
                    <p>G(ω) = ⟨ψ₀|A†(ω - H + iη)⁻¹A|ψ₀⟩</p>
                    <p>连分数: G(ω) = a₀/(ω - b₀ - a₁²/(ω - b₁ - ...))</p>
                  </div>
                </div>
                
                <div class="applications">
                  <h5>应用领域：</h5>
                  <ul>
                    <li>光谱函数计算</li>
                    <li>输运系数</li>
                    <li>动力学结构因子</li>
                    <li>热力学性质</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>🧠 机器学习辅助方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🤖</div>
                <h4>神经网络量子态</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本思想：</h5>
                  <ul>
                    <li>神经网络参数化波函数</li>
                    <li>变分蒙特卡洛优化</li>
                    <li>自动微分技术</li>
                    <li>深度学习框架</li>
                  </ul>
                </div>
                
                <div class="network-architectures">
                  <h5>网络结构：</h5>
                  <div class="architecture-list">
                    <div class="architecture-item">
                      <h6>受限玻尔兹曼机 (RBM)：</h6>
                      <p>ψ(s) = ∑ₕ e^(∑ᵢ aᵢsᵢ + ∑ⱼ bⱼhⱼ + ∑ᵢⱼ Wᵢⱼsᵢhⱼ)</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>卷积神经网络 (CNN)：</h6>
                      <p>利用平移不变性，适合大系统</p>
                    </div>
                    
                    <div class="architecture-item">
                      <h6>循环神经网络 (RNN)：</h6>
                      <p>处理长程关联，适合一维系统</p>
                    </div>
                  </div>
                </div>
                
                <div class="recent-results">
                  <h5>最新结果：</h5>
                  <ul>
                    <li>基态能量精度超越传统方法</li>
                    <li>发现新的量子相</li>
                    <li>相变点的精确定位</li>
                    <li>关联函数的高精度计算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔍</div>
                <h4>机器学习相识别</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>方法概述：</h5>
                  <ul>
                    <li>监督学习分类</li>
                    <li>无监督聚类分析</li>
                    <li>主成分分析</li>
                    <li>深度学习特征提取</li>
                  </ul>
                </div>
                
                <div class="feature-engineering">
                  <h5>特征工程：</h5>
                  <div class="feature-list">
                    <div class="feature-item">
                      <h6>局域观测量：</h6>
                      <p>自旋关联、电荷密度、动能等</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>拓扑特征：</h6>
                      <p>Chern数、缠绕数、边缘态</p>
                    </div>
                    
                    <div class="feature-item">
                      <h6>涨落特征：</h6>
                      <p>磁化率、比热、压缩率</p>
                    </div>
                  </div>
                </div>
                
                <div class="success-stories">
                  <h5>成功应用：</h5>
                  <ul>
                    <li>自动相图绘制</li>
                    <li>隐藏相的发现</li>
                    <li>临界指数提取</li>
                    <li>相变机制理解</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>⚡ 量子计算方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔬</div>
                <h4>变分量子本征求解器 (VQE)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法流程：</h5>
                  <ul>
                    <li>参数化量子线路设计</li>
                    <li>期望值测量</li>
                    <li>经典优化器更新参数</li>
                    <li>迭代收敛到基态</li>
                  </ul>
                </div>
                
                <div class="circuit-design">
                  <h5>线路设计：</h5>
                  <div class="equation-block">
                    <p>|ψ(θ)⟩ = U(θ)|ψ₀⟩</p>
                    <p>U(θ) = ∏ₗ e^(-iθₗPₗ)</p>
                    <p>Pₗ: Pauli算符乘积</p>
                  </div>
                </div>
                
                <div class="current-limitations">
                  <h5>当前限制：</h5>
                  <ul>
                    <li>量子比特数限制 (~100)</li>
                    <li>量子噪声影响</li>
                    <li>线路深度限制</li>
                    <li>测量统计误差</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌊</div>
                <h4>量子近似优化算法 (QAOA)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本原理：</h5>
                  <ul>
                    <li>绝热演化的数字化</li>
                    <li>交替应用驱动和成本哈密顿量</li>
                    <li>变分参数优化</li>
                    <li>近似基态制备</li>
                  </ul>
                </div>
                
                <div class="qaoa-circuit">
                  <h5>QAOA线路：</h5>
                  <div class="equation-block">
                    <p>|ψ(β,γ)⟩ = ∏ₚ e^(-iβₚHB)e^(-iγₚHC)|+⟩</p>
                    <p>HC: 成本哈密顿量 (t-J模型)</p>
                    <p>HB: 驱动哈密顿量 (横场)</p>
                  </div>
                </div>
                
                <div class="optimization-landscape">
                  <h5>优化策略：</h5>
                  <ul>
                    <li>梯度下降法</li>
                    <li>进化算法</li>
                    <li>贝叶斯优化</li>
                    <li>参数转移学习</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>高级数值计算方法</h2>
      <div class="advanced-numerical-methods">
        <div class="method-category">
          <h3>🎲 改进的量子蒙特卡洛方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔧</div>
                <h4>约束路径积分蒙特卡洛</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法原理：</h5>
                  <ul>
                    <li>Suzuki-Trotter分解</li>
                    <li>辅助场变换</li>
                    <li>约束路径采样</li>
                    <li>符号问题缓解</li>
                  </ul>
                </div>
                
                <div class="technical-details">
                  <h5>技术细节：</h5>
                  <div class="equation-block">
                    <p>e^(-ΔτH) ≈ ∏ᵢ e^(-ΔτHᵢ)</p>
                    <p>约束条件：⟨ψT|ψ(τ)⟩ ≠ 0</p>
                    <p>相位重加权技术</p>
                  </div>
                </div>
                
                <div class="advantages-limitations">
                  <h5>优势与局限：</h5>
                  <div class="pros-cons">
                    <div class="advantages">
                      <h6>优势：</h6>
                      <ul>
                        <li>处理强关联系统</li>
                        <li>控制符号问题</li>
                        <li>系统尺寸可扩展</li>
                      </ul>
                    </div>
                    <div class="limitations">
                      <h6>局限：</h6>
                      <ul>
                        <li>试验波函数依赖</li>
                        <li>计算成本高</li>
                        <li>有限温度限制</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🌡️</div>
                <h4>有限温度辅助场量子蒙特卡洛</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>方法概述：</h5>
                  <ul>
                    <li>有限温度格林函数</li>
                    <li>Matsubara频率</li>
                    <li>解析延拓技术</li>
                    <li>最大熵方法</li>
                  </ul>
                </div>
                
                <div class="temperature-effects">
                  <h5>温度效应：</h5>
                  <div class="equation-block">
                    <p>G(τ) = -⟨Tτ c(τ)c†(0)⟩</p>
                    <p>G(iωn) = ∫₀^β dτ e^(iωnτ) G(τ)</p>
                    <p>解析延拓：G(iωn) → G(ω + i0⁺)</p>
                  </div>
                </div>
                
                <div name="applications">
                  <h5>应用领域：</h5>
                  <ul>
                    <li>相图绘制</li>
                    <li>输运性质计算</li>
                    <li>光谱函数提取</li>
                    <li>临界现象研究</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="method-category">
          <h3>🔬 先进的张量网络方法</h3>
          <div class="method-details">
            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🕸️</div>
                <h4>多尺度纠缠重整化ansatz (MERA)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>基本概念：</h5>
                  <ul>
                    <li>分层纠缠结构</li>
                    <li>等距张量网络</li>
                    <li>标度不变性</li>
                    <li>临界系统描述</li>
                  </ul>
                </div>
                
                <div class="mera-structure">
                  <h5>MERA结构：</h5>
                  <div class="equation-block">
                    <p>|ψ⟩ = ∏ₗ Uₗ Wₗ |0⟩</p>
                    <p>Uₗ: 等距张量层</p>
                    <p>Wₗ: 纠缠张量层</p>
                  </div>
                </div>
                
                <div class="advantages-limitations">
                  <h5>优势与挑战：</h5>
                  <div class="pros-cons">
                    <div class="advantages">
                      <h6>优势：</h6>
                      <ul>
                        <li>处理临界系统</li>
                        <li>对数纠缠熵</li>
                        <li>多尺度结构</li>
                      </ul>
                    </div>
                    <div class="limitations">
                      <h6>挑战：</h6>
                      <ul>
                        <li>优化复杂度高</li>
                        <li>二维推广困难</li>
                        <li>计算成本昂贵</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="method-card">
              <div class="method-header">
                <div class="method-icon">🔄</div>
                <h4>时间演化块抽取 (TEBD)</h4>
              </div>
              <div class="method-content">
                <div class="algorithm-description">
                  <h5>算法流程：</h5>
                  <ul>
                    <li>Suzuki-Trotter分解</li>
                    <li>局域时间演化</li>
                    <li>奇异值分解</li>
                    <li>键维数截断</li>
                  </ul>
                </div>
                
                <div class="time-evolution">
                  <h5>时间演化：</h5>
                  <div class="equation-block">
                    <p>|ψ(t+dt)⟩ = e^(-iHdt)|ψ(t)⟩</p>
                    <p>≈ ∏ᵢ e^(-ih_{i,i+1}dt)|ψ(t)⟩</p>
                    <p>SVD截断控制误差</p>
                  </div>
                </div>
                
                <div class="applications">
                  <h5>应用场景：</h5>
                  <ul>
                    <li>量子淬火动力学</li>
                    <li>非平衡态演化</li>
                    <li>激发态动力学</li>
                    <li>输运现象模拟</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>未来发展方向</h2>
      <div class="future-directions">
        <div class="direction-card">
          <h3>🚀 计算方法创新</h3>
          <div class="direction-content">
            <div class="innovation-areas">
              <div class="area-item">
                <h4>量子-经典混合算法</h4>
                <p>结合量子计算和经典计算的优势，开发新的混合算法框架</p>
                <ul>
                  <li>变分量子算法优化</li>
                  <li>量子机器学习</li>
                  <li>噪声中等规模量子设备应用</li>
                </ul>
              </div>
              
              <div class="area-item">
                <h4>人工智能辅助发现</h4>
                <p>利用深度学习和强化学习加速物理发现过程</p>
                <ul>
                  <li>自动相图绘制</li>
                  <li>新奇量子相识别</li>
                  <li>材料性质预测</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="direction-card">
          <h3>🔬 实验技术进步</h3>
          <div class="direction-content">
            <div class="experimental-advances">
              <div class="advance-item">
                <h4>超冷原子量子模拟</h4>
                <p>利用可控的超冷原子系统实现Hubbard模型的精确模拟</p>
                <ul>
                  <li>光晶格工程</li>
                  <li>单原子分辨成像</li>
                  <li>实时动力学观测</li>
                </ul>
              </div>
              
              <div class="advance-item">
                <h4>新型量子材料</h4>
                <p>探索和设计具有新奇量子性质的材料系统</p>
                <ul>
                  <li>拓扑超导体</li>
                  <li>量子自旋液体</li>
                  <li>二维材料异质结</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="direction-card">
          <h3>🌐 跨学科融合</h3>
          <div class="direction-content">
            <div class="interdisciplinary-areas">
              <div class="area-item">
                <h4>量子信息科学</h4>
                <p>将Hubbard模型研究与量子信息处理相结合</p>
                <ul>
                  <li>量子纠错码</li>
                  <li>量子通信协议</li>
                  <li>量子传感技术</li>
                </ul>
              </div>
              
              <div class="area-item">
                <h4>生物物理应用</h4>
                <p>探索强关联电子系统在生物系统中的应用</p>
                <ul>
                  <li>蛋白质电子传输</li>
                  <li>光合作用机制</li>
                  <li>生物量子效应</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>