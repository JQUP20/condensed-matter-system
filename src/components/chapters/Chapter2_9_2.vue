<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.9.2 Boltzmann输运方程</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">核心理论</span>
        <span class="reading-time">预计阅读时间: 55分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>Boltzmann输运方程简介</h2>
        <p class="lead-text">
          Boltzmann输运方程是描述非平衡态统计力学的基本方程，由Ludwig Boltzmann
          在19世纪末提出。该方程描述了粒子分布函数在相空间中随时间的演化，
          是连接微观粒子运动与宏观输运现象的桥梁。在凝聚态物理中，
          Boltzmann方程被广泛应用于描述电子、空穴、声子等准粒子的输运过程，
          是理解和计算各种输运系数的理论基础。本章将详细介绍Boltzmann方程
          的物理意义、数学形式、求解方法以及在固体输运理论中的应用。
        </p>
      </section>

      <section class="content-section">
        <h2>Boltzmann方程的基本形式</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>分布函数</h3>
            <p>描述粒子在相空间中分布的基本量</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>f(r,k,t): 分布函数</p>
                <p>r: 位置坐标</p>
                <p>k: 波矢</p>
                <p>t: 时间</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>f(r,k,t)d³rd³k: 在t时刻</p>
                <p>位置r附近d³r体积内</p>
                <p>波矢k附近d³k体积内</p>
                <p>的粒子数期望值</p>
              </div>
              
              <h4>归一化：</h4>
              <div class="equation-block">
                <p>∫f(r,k,t)d³rd³k = N</p>
                <p>N: 总粒子数</p>
                <p>相空间积分</p>
                <p>粒子数守恒</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>基本方程</h3>
            <p>Boltzmann输运方程的完整形式</p>
            <div class="mathematical-content">
              <h4>完整形式：</h4>
              <div class="equation-block">
                <p>∂f/∂t + v·∇_r f + F·∇_k f = (∂f/∂t)_coll</p>
                <p>左边: 对流项</p>
                <p>右边: 碰撞项</p>
                <p>相空间演化</p>
              </div>
              
              <h4>各项含义：</h4>
              <div class="equation-block">
                <p>∂f/∂t: 显式时间依赖</p>
                <p>v·∇_r f: 空间扩散</p>
                <p>F·∇_k f: 外力作用</p>
                <p>(∂f/∂t)_coll: 散射过程</p>
              </div>
              
              <h4>群速度：</h4>
              <div class="equation-block">
                <p>v = (1/ℏ)∇_k E(k)</p>
                <p>E(k): 能带色散关系</p>
                <p>ℏ: 约化普朗克常数</p>
                <p>准经典近似</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>碰撞积分</h3>
            <p>描述散射过程的核心项</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>(∂f/∂t)_coll = ∫W(k,k')[f(k')(1±f(k)) - f(k)(1±f(k'))]dk'</p>
                <p>W(k,k'): 跃迁概率</p>
                <p>±: 费米子(-)/玻色子(+)</p>
                <p>细致平衡原理</p>
              </div>
              
              <h4>弛豫时间近似：</h4>
              <div class="equation-block">
                <p>(∂f/∂t)_coll = -(f-f₀)/τ</p>
                <p>f₀: 平衡分布</p>
                <p>τ: 弛豫时间</p>
                <p>线性化近似</p>
              </div>
              
              <h4>H定理：</h4>
              <div class="equation-block">
                <p>dH/dt ≤ 0</p>
                <p>H = ∫f ln f dk</p>
                <p>熵增原理</p>
                <p>平衡态趋向</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>平衡态分布函数</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>费米-狄拉克分布</h3>
            <p>费米子的平衡态分布</p>
            <div class="mathematical-content">
              <h4>分布函数：</h4>
              <div class="equation-block">
                <p>f₀(E) = 1/[exp((E-μ)/kT) + 1]</p>
                <p>E: 能量</p>
                <p>μ: 化学势</p>
                <p>k: 玻尔兹曼常数</p>
                <p>T: 温度</p>
              </div>
              
              <h4>特殊情况：</h4>
              <div class="equation-block">
                <p>T→0: f₀ = θ(μ-E)</p>
                <p>E≫μ: f₀ ≈ exp(-(E-μ)/kT)</p>
                <p>非简并情况</p>
                <p>经典极限</p>
              </div>
              
              <h4>载流子浓度：</h4>
              <div class="equation-block">
                <p>n = ∫g(E)f₀(E)dE</p>
                <p>g(E): 态密度</p>
                <p>费米积分</p>
                <p>温度依赖</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>玻色-爱因斯坦分布</h3>
            <p>玻色子的平衡态分布</p>
            <div class="mathematical-content">
              <h4>分布函数：</h4>
              <div class="equation-block">
                <p>n₀(ω) = 1/[exp(ℏω/kT) - 1]</p>
                <p>ω: 频率</p>
                <p>声子分布</p>
                <p>光子分布</p>
              </div>
              
              <h4>高温极限：</h4>
              <div class="equation-block">
                <p>ℏω ≪ kT: n₀ ≈ kT/ℏω</p>
                <p>经典极限</p>
                <p>能量均分定理</p>
                <p>Dulong-Petit定律</p>
              </div>
              
              <h4>低温行为：</h4>
              <div class="equation-block">
                <p>ℏω ≫ kT: n₀ ≈ exp(-ℏω/kT)</p>
                <p>量子效应</p>
                <p>指数抑制</p>
                <p>冻结模式</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚖️</div>
            <h3>局域平衡近似</h3>
            <p>非平衡态的局域描述</p>
            <div class="mathematical-content">
              <h4>基本假设：</h4>
              <div class="equation-block">
                <p>f(r,k,t) ≈ f₀[E(k),μ(r,t),T(r,t)]</p>
                <p>局域化学势μ(r,t)</p>
                <p>局域温度T(r,t)</p>
                <p>缓变近似</p>
              </div>
              
              <h4>适用条件：</h4>
              <div class="equation-block">
                <p>λ ≫ L</p>
                <p>λ: 平均自由程</p>
                <p>L: 系统特征长度</p>
                <p>扩散极限</p>
              </div>
              
              <h4>流体力学极限：</h4>
              <div class="equation-block">
                <p>连续性方程</p>
                <p>动量守恒</p>
                <p>能量守恒</p>
                <p>宏观输运方程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>线性响应理论</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>线性化方程</h3>
            <p>小扰动下的Boltzmann方程</p>
            <div class="mathematical-content">
              <h4>扰动展开：</h4>
              <div class="equation-block">
                <p>f = f₀ + δf</p>
                <p>δf ≪ f₀: 小扰动</p>
                <p>线性响应</p>
                <p>一阶近似</p>
              </div>
              
              <h4>线性化方程：</h4>
              <div class="equation-block">
                <p>∂δf/∂t + v·∇δf + (eE/ℏ)·∇_k f₀ = -δf/τ</p>
                <p>E: 外电场</p>
                <p>e: 电子电荷</p>
                <p>弛豫时间近似</p>
              </div>
              
              <h4>稳态解：</h4>
              <div class="equation-block">
                <p>δf = -τ(eE/ℏ)·∇_k f₀</p>
                <p>= τeE·v(∂f₀/∂E)</p>
                <p>电场响应</p>
                <p>输运系数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>电导率计算</h3>
            <p>从分布函数到宏观电导</p>
            <div class="mathematical-content">
              <h4>电流密度：</h4>
              <div class="equation-block">
                <p>J = -e∫v f dk/(2π)³</p>
                <p>= -e∫v δf dk/(2π)³</p>
                <p>载流子贡献</p>
                <p>相空间积分</p>
              </div>
              
              <h4>电导率：</h4>
              <div class="equation-block">
                <p>σ = e²∫τ(E)v²g(E)(-∂f₀/∂E)dE</p>
                <p>g(E) = ∫δ(E-E(k))dk/(2π)³</p>
                <p>态密度</p>
                <p>能量积分</p>
              </div>
              
              <h4>简化形式：</h4>
              <div class="equation-block">
                <p>σ = ne²τ/m*</p>
                <p>n: 载流子浓度</p>
                <p>m*: 有效质量</p>
                <p>Drude模型</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>热电系数</h3>
            <p>温度梯度驱动的输运</p>
            <div class="mathematical-content">
              <h4>温度梯度响应：</h4>
              <div class="equation-block">
                <p>δf = -τv·∇T(∂f₀/∂T)</p>
                <p>= τv·∇T(E-μ)/T²(∂f₀/∂E)</p>
                <p>热扩散</p>
                <p>能量过滤</p>
              </div>
              
              <h4>Seebeck系数：</h4>
              <div class="equation-block">
                <p>S = -(k/e)∫(E-μ)/kT × τ(E)v²g(E)(-∂f₀/∂E)dE / ∫τ(E)v²g(E)(-∂f₀/∂E)dE</p>
                <p>能量加权平均</p>
                <p>载流子类型</p>
              </div>
              
              <h4>简化表达：</h4>
              <div class="equation-block">
                <p>S ≈ -(k/e)(E_F-μ)/kT</p>
                <p>E_F: 费米能级</p>
                <p>简并/非简并</p>
                <p>温度依赖</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>求解方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>迭代方法</h3>
            <p>逐步逼近的数值求解</p>
            <div class="mathematical-content">
              <h4>Chapman-Enskog方法：</h4>
              <div class="equation-block">
                <p>f = f⁽⁰⁾ + εf⁽¹⁾ + ε²f⁽²⁾ + ...</p>
                <p>ε: 小参数</p>
                <p>逐阶展开</p>
                <p>系统求解</p>
              </div>
              
              <h4>零阶解：</h4>
              <div class="equation-block">
                <p>f⁽⁰⁾ = f₀[n(r,t), T(r,t)]</p>
                <p>局域平衡</p>
                <p>流体力学变量</p>
                <p>守恒量</p>
              </div>
              
              <h4>一阶修正：</h4>
              <div class="equation-block">
                <p>f⁽¹⁾ = -τ[v·∇f⁽⁰⁾ + F·∇_k f⁽⁰⁾]</p>
                <p>输运修正</p>
                <p>非平衡效应</p>
                <p>输运系数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎵</div>
            <h3>矩方法</h3>
            <p>基于守恒量的简化求解</p>
            <div class="mathematical-content">
              <h4>矩定义：</h4>
              <div class="equation-block">
                <p>M_n = ∫φ_n(k)f(k)dk</p>
                <p>φ_n(k): 权重函数</p>
                <p>n = 0,1,2,...: 矩阶数</p>
                <p>宏观量</p>
              </div>
              
              <h4>守恒矩：</h4>
              <div class="equation-block">
                <p>M₀ = n: 粒子数密度</p>
                <p>M₁ = nu: 动量密度</p>
                <p>M₂ = nε: 能量密度</p>
                <p>流体力学变量</p>
              </div>
              
              <h4>矩方程：</h4>
              <div class="equation-block">
                <p>∂M_n/∂t + ∇·Φ_n = C_n</p>
                <p>Φ_n: 通量</p>
                <p>C_n: 碰撞项</p>
                <p>封闭问题</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">💻</div>
            <h3>数值方法</h3>
            <p>计算机辅助求解技术</p>
            <div class="mathematical-content">
              <h4>有限差分法：</h4>
              <div class="equation-block">
                <p>离散化相空间</p>
                <p>时间步进</p>
                <p>边界条件</p>
                <p>稳定性分析</p>
              </div>
              
              <h4>Monte Carlo方法：</h4>
              <div class="equation-block">
                <p>粒子模拟</p>
                <p>随机散射</p>
                <p>统计平均</p>
                <p>噪声处理</p>
              </div>
              
              <h4>谱方法：</h4>
              <div class="equation-block">
                <p>基函数展开</p>
                <p>球谐函数</p>
                <p>Legendre多项式</p>
                <p>高精度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>散射机制详解</h2>
        
        <div class="scattering-mechanisms">
          <div class="mechanism-category">
            <h3>杂质散射</h3>
            <div class="mechanism-content">
              <h4>离化杂质散射：</h4>
              <p>带电杂质原子对载流子的库仑散射，是低温下的主要散射机制。</p>
              
              <h4>散射截面：</h4>
              <div class="equation-block">
                <p>σ(θ) = (Z²e⁴/16π²ε²E²sin⁴(θ/2))</p>
                <p>Z: 杂质电荷数</p>
                <p>ε: 介电常数</p>
                <p>E: 载流子能量</p>
                <p>θ: 散射角</p>
              </div>
              
              <h4>弛豫时间：</h4>
              <div class="equation-block">
                <p>1/τᵢ = (N_i Z²e⁴m*/2π²ℏ³ε²)(ln Λ)</p>
                <p>N_i: 杂质浓度</p>
                <p>Λ: 库仑对数</p>
                <p>屏蔽效应</p>
                <p>温度依赖: τᵢ ∝ T^(3/2)</p>
              </div>
              
              <h4>中性杂质散射：</h4>
              <ul>
                <li>短程势散射</li>
                <li>与能量无关的散射截面</li>
                <li>弛豫时间: τₙ ∝ 1/N_n</li>
                <li>低温下重要</li>
              </ul>
            </div>
          </div>
          
          <div class="mechanism-category">
            <h3>声子散射</h3>
            <div class="mechanism-content">
              <h4>声学声子散射：</h4>
              <p>载流子与长波声学声子的相互作用，高温下的主要散射机制。</p>
              
              <h4>形变势耦合：</h4>
              <div class="equation-block">
                <p>H_ep = D_ac ∇·u</p>
                <p>D_ac: 声学形变势</p>
                <p>u: 晶格位移</p>
                <p>体积变化耦合</p>
                <p>各向同性</p>
              </div>
              
              <h4>弛豫时间：</h4>
              <div class="equation-block">
                <p>1/τ_ac = (D_ac²kT m*/π ℏ⁴ v_s²ρ)</p>
                <p>v_s: 声速</p>
                <p>ρ: 质量密度</p>
                <p>温度依赖: τ_ac ∝ 1/T</p>
                <p>高温极限</p>
              </div>
              
              <h4>光学声子散射：</h4>
              <div class="equation-block">
                <p>极性耦合: H_ep = (e²ℏω_LO/2ε₀V)^(1/2) × (1/ε_∞ - 1/ε_s)</p>
                <p>ω_LO: 纵光学声子频率</p>
                <p>ε_∞, ε_s: 高频、静态介电常数</p>
                <p>Fröhlich相互作用</p>
              </div>
            </div>
          </div>
          
          <div class="mechanism-category">
            <h3>载流子-载流子散射</h3>
            <div class="mechanism-content">
              <h4>电子-电子散射：</h4>
              <p>载流子之间的库仑相互作用，在高载流子浓度下重要。</p>
              
              <h4>散射率：</h4>
              <div class="equation-block">
                <p>1/τ_ee ∝ n T²</p>
                <p>n: 载流子浓度</p>
                <p>费米液体理论</p>
                <p>相位空间限制</p>
                <p>Pauli阻塞</p>
              </div>
              
              <h4>电子-空穴散射：</h4>
              <div class="equation-block">
                <p>双极性输运</p>
                <p>载流子拖拽效应</p>
                <p>复合过程</p>
                <p>Auger复合</p>
              </div>
              
              <h4>屏蔽效应：</h4>
              <ul>
                <li>Thomas-Fermi屏蔽</li>
                <li>Debye屏蔽长度</li>
                <li>动态屏蔽</li>
                <li>等离子体振荡</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级理论方法</h2>
        
        <div class="advanced-methods">
          <div class="method-section">
            <h3>量子Boltzmann方程</h3>
            <div class="method-content">
              <h4>Wigner函数方法：</h4>
              <p>量子力学的相空间表述，处理量子相干效应。</p>
              
              <h4>Wigner函数定义：</h4>
              <div class="equation-block">
                <p>f_W(r,k) = ∫⟨r-s/2|ρ|r+s/2⟩e^(-ik·s)ds</p>
                <p>ρ: 密度矩阵</p>
                <p>量子-经典对应</p>
                <p>相空间分布</p>
                <p>可能为负值</p>
              </div>
              
              <h4>量子输运方程：</h4>
              <div class="equation-block">
                <p>∂f_W/∂t + v·∇_r f_W + (i/ℏ)[H,f_W]_W = I_coll[f_W]</p>
                <p>[,]_W: Wigner-Moyal括号</p>
                <p>量子修正项</p>
                <p>非局域效应</p>
              </div>
              
              <h4>半经典极限：</h4>
              <ul>
                <li>ℏ → 0 极限</li>
                <li>经典Boltzmann方程</li>
                <li>量子修正</li>
                <li>隧穿效应</li>
              </ul>
            </div>
          </div>
          
          <div class="method-section">
            <h3>非平衡Green函数</h3>
            <div class="method-content">
              <h4>Keldysh形式：</h4>
              <p>处理强关联和非平衡系统的精确方法。</p>
              
              <h4>Green函数定义：</h4>
              <div class="equation-block">
                <p>G^<(r,t;r',t') = i⟨ψ†(r',t')ψ(r,t)⟩</p>
                <p>G^>(r,t;r',t') = -i⟨ψ(r,t)ψ†(r',t')⟩</p>
                <p>小于/大于Green函数</p>
                <p>粒子-空穴对称</p>
              </div>
              
              <h4>Dyson方程：</h4>
              <div class="equation-block">
                <p>G = G₀ + G₀ΣG</p>
                <p>G₀: 自由Green函数</p>
                <p>Σ: 自能</p>
                <p>多体效应</p>
                <p>自洽求解</p>
              </div>
              
              <h4>输运性质：</h4>
              <ul>
                <li>谱函数A(k,ω) = -2ImG^R(k,ω)</li>
                <li>分布函数f(k,ω) = G^<(k,ω)/2iA(k,ω)</li>
                <li>电流密度计算</li>
                <li>噪声谱</li>
              </ul>
            </div>
          </div>
          
          <div class="method-section">
            <h3>主方程方法</h3>
            <div class="method-content">
              <h4>Lindblad方程：</h4>
              <p>开放量子系统的演化方程，包含环境效应。</p>
              
              <h4>主方程形式：</h4>
              <div class="equation-block">
                <p>dρ/dt = -i[H,ρ]/ℏ + ∑_k γ_k(L_k ρ L_k† - {L_k†L_k,ρ}/2)</p>
                <p>H: 系统哈密顿量</p>
                <p>L_k: Lindblad算符</p>
                <p>γ_k: 耗散率</p>
                <p>完全正性</p>
              </div>
              
              <h4>跳跃算符：</h4>
              <div class="equation-block">
                <p>散射过程</p>
                <p>退相干</p>
                <p>能量弛豫</p>
                <p>相位弛豫</p>
              </div>
              
              <h4>应用领域：</h4>
              <ul>
                <li>量子点输运</li>
                <li>分子结输运</li>
                <li>强关联系统</li>
                <li>量子相干器件</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代应用与发展</h2>
        
        <div class="modern-applications">
          <div class="application-field">
            <h3>半导体器件建模</h3>
            <div class="application-content">
              <h4>器件仿真：</h4>
              <p>现代半导体器件设计中的核心工具，从MOSFET到量子器件。</p>
              
              <h4>漂移-扩散模型：</h4>
              <div class="equation-block">
                <p>J_n = qμ_n n∇φ + qD_n∇n</p>
                <p>J_p = qμ_p p∇φ - qD_p∇p</p>
                <p>μ: 迁移率</p>
                <p>D: 扩散系数</p>
                <p>Einstein关系</p>
              </div>
              
              <h4>能量输运模型：</h4>
              <div class="equation-block">
                <p>热载流子效应</p>
                <p>速度过冲</p>
                <p>弹道输运</p>
                <p>量子效应</p>
              </div>
              
              <h4>先进器件：</h4>
              <ul>
                <li>FinFET三维结构</li>
                <li>隧道场效应晶体管</li>
                <li>单电子晶体管</li>
                <li>自旋场效应晶体管</li>
              </ul>
            </div>
          </div>
          
          <div class="application-field">
            <h3>热电材料设计</h3>
            <div class="application-content">
              <h4>材料优化：</h4>
              <p>基于Boltzmann输运理论的热电材料性能预测和优化。</p>
              
              <h4>输运系数计算：</h4>
              <div class="equation-block">
                <p>σ = e²∫τ(E)v²(E)g(E)(-∂f₀/∂E)dE</p>
                <p>S = -(k/e)∫(E-μ)/kT × σ(E)dE/∫σ(E)dE</p>
                <p>κ_e = (1/T)∫(E-μ)²/kT × σ(E)dE</p>
                <p>第一性原理计算</p>
              </div>
              
              <h4>能带工程：</h4>
              <div class="equation-block">
                <p>载流子浓度优化</p>
                <p>能带收敛</p>
                <p>共振态</p>
                <p>纳米结构</p>
              </div>
              
              <h4>新型概念：</h4>
              <ul>
                <li>声子玻璃-电子晶体</li>
                <li>量子点超晶格</li>
                <li>拓扑热电材料</li>
                <li>有机热电材料</li>
              </ul>
            </div>
          </div>
          
          <div class="application-field">
            <h3>量子输运现象</h3>
            <div class="application-content">
              <h4>介观物理：</h4>
              <p>量子相干长度与器件尺寸可比时的输运现象。</p>
              
              <h4>量子霍尔效应：</h4>
              <div class="equation-block">
                <p>σ_xy = νe²/h</p>
                <p>ν: 填充因子</p>
                <p>拓扑保护</p>
                <p>边缘态输运</p>
                <p>精密计量标准</p>
              </div>
              
              <h4>弱局域化：</h4>
              <div class="equation-block">
                <p>量子干涉修正</p>
                <p>相位相干长度</p>
                <p>磁阻效应</p>
                <p>温度依赖</p>
              </div>
              
              <h4>前沿方向：</h4>
              <ul>
                <li>拓扑绝缘体输运</li>
                <li>Weyl半金属</li>
                <li>量子自旋霍尔效应</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用实例</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔌 金属电导</h3>
            <div class="feature-content">
              <h4>Drude模型：</h4>
              <ul>
                <li>自由电子气</li>
                <li>恒定弛豫时间</li>
                <li>σ = ne²τ/m</li>
                <li>温度依赖性</li>
              </ul>
              
              <h4>修正效应：</h4>
              <ul>
                <li>能带结构</li>
                <li>费米面几何</li>
                <li>各向异性</li>
                <li>多带贡献</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔬 半导体输运</h3>
            <div class="feature-content">
              <h4>载流子类型：</h4>
              <ul>
                <li>电子输运</li>
                <li>空穴输运</li>
                <li>双极输运</li>
                <li>复合过程</li>
              </ul>
              
              <h4>散射机制：</h4>
              <ul>
                <li>电离杂质散射</li>
                <li>声学声子散射</li>
                <li>光学声子散射</li>
                <li>载流子-载流子散射</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌡️ 热输运</h3>
            <div class="feature-content">
              <h4>声子输运：</h4>
              <ul>
                <li>声子Boltzmann方程</li>
                <li>声子-声子散射</li>
                <li>边界散射</li>
                <li>热导率计算</li>
              </ul>
              
              <h4>电子-声子耦合：</h4>
              <ul>
                <li>电子热导</li>
                <li>Wiedemann-Franz定律</li>
                <li>热电效应</li>
                <li>能量弛豫</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级主题</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🌐 量子修正</h3>
            <div class="feature-content">
              <h4>量子干涉：</h4>
              <ul>
                <li>弱局域化</li>
                <li>相位相干</li>
                <li>量子修正</li>
                <li>Anderson局域化</li>
              </ul>
              
              <h4>量子霍尔效应：</h4>
              <ul>
                <li>Landau能级</li>
                <li>磁输运</li>
                <li>拓扑效应</li>
                <li>边缘态</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>⚡ 非线性效应</h3>
            <div class="feature-content">
              <h4>强场输运：</h4>
              <ul>
                <li>热载流子</li>
                <li>速度饱和</li>
                <li>冲击电离</li>
                <li>雪崩击穿</li>
              </ul>
              
              <h4>非平衡分布：</h4>
              <ul>
                <li>分布函数畸变</li>
                <li>载流子加热</li>
                <li>能量弛豫</li>
                <li>动态效应</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔬 介观系统</h3>
            <div class="feature-content">
              <h4>尺寸效应：</h4>
              <ul>
                <li>弹道输运</li>
                <li>量子点</li>
                <li>量子线</li>
                <li>二维电子气</li>
              </ul>
              
              <h4>相干输运：</h4>
              <ul>
                <li>Landauer公式</li>
                <li>传输矩阵</li>
                <li>量子电导</li>
                <li>Aharonov-Bohm效应</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>总结与展望</h2>
        
        <div class="summary-outlook">
          <div class="summary-section">
            <h3>核心要点总结</h3>
            <div class="summary-content">
              <h4>理论基础：</h4>
              <ul>
                <li><strong>Boltzmann方程：</strong>连接微观散射与宏观输运的桥梁</li>
                <li><strong>分布函数：</strong>描述非平衡态的核心物理量</li>
                <li><strong>碰撞积分：</strong>散射过程的精确描述</li>
                <li><strong>弛豫时间近似：</strong>实用的简化处理方法</li>
              </ul>
              
              <h4>求解方法：</h4>
              <ul>
                <li><strong>线性响应理论：</strong>小扰动下的解析求解</li>
                <li><strong>Chapman-Enskog方法：</strong>系统的逐阶展开</li>
                <li><strong>矩方法：</strong>基于守恒量的简化</li>
                <li><strong>数值方法：</strong>复杂系统的计算求解</li>
              </ul>
              
              <h4>散射机制：</h4>
              <ul>
                <li><strong>杂质散射：</strong>低温下的主导机制</li>
                <li><strong>声子散射：</strong>高温下的主要过程</li>
                <li><strong>载流子散射：</strong>高浓度下的重要效应</li>
                <li><strong>界面散射：</strong>纳米结构中的关键因素</li>
              </ul>
            </div>
          </div>
          
          <div class="prospects-section">
            <h3>发展前景</h3>
            <div class="prospects-content">
              <h4>理论发展：</h4>
              <ul>
                <li><strong>量子输运理论：</strong>处理量子相干和纠缠效应</li>
                <li><strong>强关联系统：</strong>超越单粒子图像的多体理论</li>
                <li><strong>非平衡统计力学：</strong>远离平衡态的普适规律</li>
                <li><strong>机器学习方法：</strong>数据驱动的输运理论</li>
              </ul>
              
              <h4>应用拓展：</h4>
              <ul>
                <li><strong>量子器件：</strong>量子计算和量子通信器件</li>
                <li><strong>拓扑材料：</strong>拓扑绝缘体和超导体</li>
                <li><strong>二维材料：</strong>石墨烯和过渡金属硫化物</li>
                <li><strong>生物系统：</strong>生物分子的电荷输运</li>
              </ul>
              
              <h4>计算方法：</h4>
              <ul>
                <li><strong>第一性原理：</strong>从电子结构到输运性质</li>
                <li><strong>多尺度建模：</strong>跨越时空尺度的统一描述</li>
                <li><strong>高性能计算：</strong>大规模并行计算技术</li>
                <li><strong>人工智能：</strong>智能化的材料设计和优化</li>
              </ul>
            </div>
          </div>
          
          <div class="challenges-section">
            <h3>面临挑战</h3>
            <div class="challenges-content">
              <h4>理论挑战：</h4>
              <ul>
                <li>强关联效应的精确处理</li>
                <li>非平衡态的统一理论框架</li>
                <li>量子多体系统的有效描述</li>
                <li>拓扑相变的输运特征</li>
              </ul>
              
              <h4>计算挑战：</h4>
              <ul>
                <li>多尺度问题的高效算法</li>
                <li>量子蒙特卡罗符号问题</li>
                <li>实时动力学的数值求解</li>
                <li>大系统的精确对角化</li>
              </ul>
              
              <h4>实验挑战：</h4>
              <ul>
                <li>超快时间分辨测量</li>
                <li>单分子输运测量</li>
                <li>极端条件下的输运</li>
                <li>量子相干的直接观测</li>
              </ul>
              
              <h4>应用挑战：</h4>
              <ul>
                <li>室温量子器件的实现</li>
                <li>高效热电材料的设计</li>
                <li>低功耗电子器件</li>
                <li>可扩展量子计算系统</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 本章要点总结 -->
      <section class="summary">
        <h2>本章要点总结</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <div class="point-content">
              <h4>基本方程</h4>
              <p>Boltzmann方程描述分布函数在相空间中的演化，包含对流项和碰撞项，是输运理论的核心。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>平衡态分布</h4>
              <p>费米-狄拉克分布和玻色-爱因斯坦分布是平衡态的基础，局域平衡近似适用于缓变系统。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>线性响应</h4>
              <p>小扰动下的线性化方程可以计算各种输运系数，如电导率、热导率和热电系数。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>求解方法</h4>
              <p>包括迭代方法、矩方法和数值方法，每种方法适用于不同的物理情况和精度要求。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>应用范围</h4>
              <p>从金属、半导体到介观系统，Boltzmann方程在各种材料和尺度下都有重要应用。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">6</span>
            <div class="point-content">
              <h4>发展方向</h4>
              <p>量子修正、非线性效应和介观输运是现代Boltzmann理论发展的重要方向。</p>
            </div>
          </div>
        </div>
      </section>
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
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.concept-card > p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.mathematical-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 0.5rem 0;
}

.equation-block {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.feature-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.feature-content ul {
  list-style: none;
  padding: 0;
}

.feature-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.feature-content li:before {
  content: "•";
  color: #3182ce;
  font-weight: bold;
  position: absolute;
  left: 0;
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

.point-content h4 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.point-content p {
  margin: 0;
  flex: 1;
}

/* 散射机制样式 */
.scattering-mechanisms {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.mechanism-category {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #e74c3c;
}

.mechanism-category h3 {
  color: #c0392b;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.mechanism-content h4 {
  color: #8b0000;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 高级方法样式 */
.advanced-methods {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.method-section {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #3498db;
}

.method-section h3 {
  color: #2980b9;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.method-content h4 {
  color: #1e3a8a;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 现代应用样式 */
.modern-applications {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.application-field {
  background: linear-gradient(135deg, #f8fff8 0%, #e8f8e8 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #27ae60;
}

.application-field h3 {
  color: #229954;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.application-content h4 {
  color: #0d5016;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 总结展望样式 */
.summary-outlook {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.summary-section,
.prospects-section,
.challenges-section {
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #9b59b6;
}

.summary-section h3,
.prospects-section h3,
.challenges-section h3 {
  color: #8e44ad;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.summary-content h4,
.prospects-content h4,
.challenges-content h4 {
  color: #2c3e50;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

.summary-content ul,
.prospects-content ul,
.challenges-content ul {
  list-style-type: none;
  padding: 0;
}

.summary-content li,
.prospects-content li,
.challenges-content li {
  margin-bottom: 0.6rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.5;
}

.summary-content li::before,
.prospects-content li::before,
.challenges-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #8e44ad;
  font-size: 0.8rem;
}

.summary-content li strong,
.prospects-content li strong {
  color: #2c3e50;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid, .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .scattering-mechanisms,
  .advanced-methods,
  .modern-applications {
    gap: 1rem;
  }
  
  .mechanism-category,
  .method-section,
  .application-field {
    padding: 1rem;
  }
  
  .summary-outlook {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .summary-section,
  .prospects-section,
  .challenges-section {
    padding: 1rem;
  }
}
</style>