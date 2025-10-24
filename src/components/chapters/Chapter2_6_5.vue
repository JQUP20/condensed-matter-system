<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.6.5 动力学平均场理论</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">理论方法</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>动力学平均场理论概述</h2>
        <p class="lead-text">
          动力学平均场理论(DMFT)是研究强关联电子系统的重要理论框架，通过将晶格模型映射到量子杂质模型，
          能够非微扰地处理局域相关效应，在研究Mott金属-绝缘体相变等强关联现象中发挥重要作用。
        </p>
      </section>

      <section class="content-section">
        <h2>DMFT的理论基础与数学框架</h2>
        <div class="theoretical-foundation-grid">
          <div class="foundation-card">
            <div class="concept-icon">🔬</div>
            <h3>格林函数理论</h3>
            <p>DMFT的数学基础</p>
            <div class="mathematical-content">
              <h4>单粒子格林函数：</h4>
              <div class="equation-block">
                <p>G(i,j;τ) = -⟨T_τ c_i(τ) c_j†(0)⟩</p>
                <p>T_τ: 时间排序算符</p>
                <p>Fourier变换到频率空间</p>
              </div>
              
              <h4>Dyson方程：</h4>
              <div class="equation-block">
                <p>G⁻¹(k,iω_n) = iω_n + μ - ε_k - Σ(k,iω_n)</p>
                <p>自能的物理意义</p>
                <p>多体效应的包含</p>
              </div>
              
              <h4>局域近似：</h4>
              <div class="equation-block">
                <p>Σ(k,iω_n) → Σ(iω_n)</p>
                <p>忽略动量依赖</p>
                <p>保留频率依赖</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="concept-icon">🌀</div>
            <h3>腔场理论</h3>
            <p>有效介质的构造</p>
            <div class="mathematical-content">
              <h4>Weiss场概念：</h4>
              <div class="equation-block">
                <p>𝒢₀⁻¹(iω_n) = iω_n + μ - Δ(iω_n)</p>
                <p>Δ(iω_n): 杂化函数</p>
                <p>描述电子浴的效应</p>
              </div>
              
              <h4>自洽条件：</h4>
              <div class="equation-block">
                <p>G_loc = ∫ dk G(k,iω_n)</p>
                <p>G_imp = [𝒢₀⁻¹ - Σ]⁻¹</p>
                <p>G_loc = G_imp (自洽性)</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="concept-icon">🎯</div>
            <h3>变分原理</h3>
            <p>DMFT的变分基础</p>
            <div class="mathematical-content">
              <h4>Potthoff泛函：</h4>
              <div class="equation-block">
                <p>Γ[G] = Φ[G] + Tr ln(-G⁻¹) + Tr(Σ[G]G)</p>
                <p>Φ[G]: Luttinger-Ward泛函</p>
                <p>变分条件：δΓ/δG = 0</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>最优格林函数的确定</p>
                <p>热力学一致性</p>
                <p>守恒律的满足</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级DMFT方法</h2>
        <div class="advanced-dmft-grid">
          <div class="method-category">
            <h3>多轨道DMFT</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>轨道对角化</h4>
                <p>处理多轨道系统：</p>
                <div class="equation-block">
                  <p>H = ∑_{ijσ} t_{ij} c_{iσ}† c_{jσ} + H_int</p>
                  <p>轨道间杂化效应</p>
                  <p>Hund耦合的处理</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>自旋轨道耦合</h4>
                <p>相对论效应的包含：</p>
                <div class="equation-block">
                  <p>H_SOC = λ ∑_i L_i · S_i</p>
                  <p>j-j耦合方案</p>
                  <p>拓扑性质的影响</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>非局域扩展</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>团簇DMFT</h4>
                <p>短程空间相关：</p>
                <div class="equation-block">
                  <p>超胞方法</p>
                  <p>团簇自能矩阵</p>
                  <p>相分离的描述</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>双重计数修正</h4>
                <p>避免重复计算：</p>
                <div class="equation-block">
                  <p>E_total = E_DFT + E_DMFT - E_DC</p>
                  <p>完全局域极限</p>
                  <p>围绕平均场</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>实时间DMFT</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>Keldysh形式</h4>
                <p>非平衡态的处理：</p>
                <div class="equation-block">
                  <p>G^<, G^>, G^R, G^A</p>
                  <p>分布函数的演化</p>
                  <p>泵浦-探测实验</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>Floquet理论</h4>
                <p>周期驱动系统：</p>
                <div class="equation-block">
                  <p>时间周期性哈密顿量</p>
                  <p>准能带结构</p>
                  <p>动力学相变</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代计算技术</h2>
        <div class="computational-techniques-grid">
          <div class="technique-card">
            <div class="concept-icon">🚀</div>
            <h3>机器学习加速</h3>
            <div class="mathematical-content">
              <h4>神经网络杂质求解器：</h4>
              <div class="equation-block">
                <p>深度学习优化</p>
                <p>自动微分技术</p>
                <p>变分蒙特卡罗</p>
              </div>
              
              <h4>数据驱动方法：</h4>
              <div class="equation-block">
                <p>解析延拓的ML方法</p>
                <p>谱函数重构</p>
                <p>贝叶斯推断</p>
              </div>
            </div>
          </div>

          <div class="technique-card">
            <div class="concept-icon">⚡</div>
            <h3>高性能计算</h3>
            <div class="mathematical-content">
              <h4>并行化策略：</h4>
              <div class="equation-block">
                <p>频率并行</p>
                <p>k点并行</p>
                <p>杂质求解器并行</p>
              </div>
              
              <h4>GPU加速：</h4>
              <div class="equation-block">
                <p>矩阵运算优化</p>
                <p>蒙特卡罗采样</p>
                <p>内存管理</p>
              </div>
            </div>
          </div>

          <div class="technique-card">
            <div class="concept-icon">🔧</div>
            <h3>算法优化</h3>
            <div class="mathematical-content">
              <h4>收敛加速：</h4>
              <div class="equation-block">
                <p>Anderson混合</p>
                <p>Broyden方法</p>
                <p>线性预测</p>
              </div>
              
              <h4>数值稳定性：</h4>
              <div class="equation-block">
                <p>Padé近似</p>
                <p>最大熵方法</p>
                <p>随机解析延拓</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>与第一性原理的结合</h2>
        <div class="dft-dmft-grid">
          <div class="integration-category">
            <h3>DFT+DMFT方法</h3>
            <div class="integration-items">
              <div class="integration-item">
                <h4>能带结构修正</h4>
                <p>强关联效应对能带的影响：</p>
                <div class="equation-block">
                  <p>准粒子能带</p>
                  <p>卫星峰的出现</p>
                  <p>费米面重构</p>
                </div>
              </div>
              
              <div class="integration-item">
                <h4>材料设计</h4>
                <p>预测新材料性质：</p>
                <div class="equation-block">
                  <p>相变温度预测</p>
                  <p>输运性质计算</p>
                  <p>光学响应</p>
                </div>
              </div>
            </div>
          </div>

          <div class="integration-category">
            <h3>GW+DMFT方法</h3>
            <div class="integration-items">
              <div class="integration-item">
                <h4>非局域屏蔽</h4>
                <p>长程库仑相互作用：</p>
                <div class="equation-block">
                  <p>屏蔽库仑相互作用</p>
                  <p>等离激元效应</p>
                  <p>介电函数计算</p>
                </div>
              </div>
              
              <div class="integration-item">
                <h4>激发态性质</h4>
                <p>准粒子和激子：</p>
                <div class="equation-block">
                  <p>光吸收谱</p>
                  <p>束缚激子</p>
                  <p>Bethe-Salpeter方程</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>前沿应用与发展</h2>
        <div class="frontier-applications-grid">
          <div class="application-category">
            <h3>量子材料</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>高温超导体</h4>
                <p>铜氧化物和铁基超导体的理论研究</p>
              </div>
              
              <div class="application-item">
                <h4>拓扑绝缘体</h4>
                <p>强关联拓扑态的DMFT研究</p>
              </div>
              
              <div class="application-item">
                <h4>量子自旋液体</h4>
                <p>阻挫磁性系统的理论描述</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>非平衡物理</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>光诱导相变</h4>
                <p>超快激光驱动的相变动力学</p>
              </div>
              
              <div class="application-item">
                <h4>量子输运</h4>
                <p>强关联系统中的电子输运</p>
              </div>
              
              <div class="application-item">
                <h4>热电效应</h4>
                <p>强关联材料的热电性质</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>新兴方向</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>机器学习DMFT</h4>
                <p>AI辅助的强关联理论</p>
              </div>
              
              <div class="application-item">
                <h4>量子计算模拟</h4>
                <p>量子计算机上的DMFT实现</p>
              </div>
              
              <div class="application-item">
                <h4>多尺度建模</h4>
                <p>从原子到宏观的多尺度方法</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>基本思想与原理</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>映射思想</h3>
            <p>晶格模型到杂质模型的映射</p>
            <div class="mathematical-content">
              <h4>基本映射：</h4>
              <div class="equation-block">
                <p>晶格Hubbard模型 → 单杂质Anderson模型</p>
                <p>保持局域Green函数不变</p>
              </div>
              
              <h4>自洽条件：</h4>
              <div class="equation-block">
                <p>G_loc(iω_n) = G_imp(iω_n)</p>
                <p>G_loc: 晶格局域Green函数</p>
                <p>G_imp: 杂质Green函数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>无穷维极限</h3>
            <p>DMFT的精确性</p>
            <div class="mathematical-content">
              <h4>配位数标度：</h4>
              <div class="equation-block">
                <p>t → t/√Z, Z → ∞</p>
                <p>Z: 配位数</p>
                <p>保持动能标度不变</p>
              </div>
              
              <h4>局域性质：</h4>
              <div class="equation-block">
                <p>自能变为局域的</p>
                <p>Σ(k,iω_n) → Σ(iω_n)</p>
                <p>空间相关被忽略</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DMFT自洽循环</h2>
        <div class="dmft-cycle">
          <div class="cycle-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>初始猜测</h3>
              <p>给出自能Σ(iω_n)的初始值</p>
              <div class="equation-block">
                <p>通常从非相互作用情况开始</p>
                <p>Σ(iω_n) = 0 或 简单形式</p>
              </div>
            </div>
          </div>

          <div class="cycle-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>计算局域Green函数</h3>
              <p>利用晶格结构信息</p>
              <div class="equation-block">
                <p>G_loc(iω_n) = ∫ dk/(iω_n + μ - ε_k - Σ(iω_n))</p>
                <p>ε_k: 能带色散</p>
              </div>
            </div>
          </div>

          <div class="cycle-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>提取Weiss场</h3>
              <p>构造有效介质</p>
              <div class="equation-block">
                <p>𝒢₀⁻¹(iω_n) = G_loc⁻¹(iω_n) + Σ(iω_n)</p>
                <p>𝒢₀: Weiss Green函数</p>
              </div>
            </div>
          </div>

          <div class="cycle-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>求解杂质问题</h3>
              <p>计算新的自能</p>
              <div class="equation-block">
                <p>H_imp = ε_d n_d + U n_d↑ n_d↓ + ∑_k V_k (c_k† d + h.c.)</p>
                <p>求解得到新的Σ(iω_n)</p>
              </div>
            </div>
          </div>

          <div class="cycle-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>检查收敛</h3>
              <p>判断自洽性</p>
              <div class="equation-block">
                <p>|Σ_new - Σ_old| < tolerance</p>
                <p>如未收敛，返回步骤2</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>杂质求解器</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>精确对角化(ED)</h3>
            <p>小系统的精确解</p>
            <div class="mathematical-content">
              <h4>方法特点：</h4>
              <div class="equation-block">
                <p>• 有限浴轨道数</p>
                <p>• 精确求解</p>
                <p>• 基态和低激发态</p>
                <p>• 零温度性质</p>
              </div>
              
              <h4>局限性：</h4>
              <div class="equation-block">
                <p>• 浴轨道数限制</p>
                <p>• 离散化误差</p>
                <p>• 有限温度困难</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔥</div>
            <h3>量子蒙特卡罗(QMC)</h3>
            <p>有限温度的精确解</p>
            <div class="mathematical-content">
              <h4>连续时间QMC：</h4>
              <div class="equation-block">
                <p>• CT-AUX: 辅助场方法</p>
                <p>• CT-INT: 相互作用展开</p>
                <p>• CT-HYB: 杂化展开</p>
              </div>
              
              <h4>优势：</h4>
              <div class="equation-block">
                <p>• 连续浴</p>
                <p>• 有限温度</p>
                <p>• 可控误差</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>数值重整化群(NRG)</h3>
            <p>低能物理的精确描述</p>
            <div class="mathematical-content">
              <h4>方法原理：</h4>
              <div class="equation-block">
                <p>• 对数离散化</p>
                <p>• 迭代对角化</p>
                <p>• 保持低能态</p>
              </div>
              
              <h4>适用范围：</h4>
              <div class="equation-block">
                <p>• 零温度性质</p>
                <p>• 动力学性质</p>
                <p>• 相变临界行为</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>迭代微扰理论(IPT)</h3>
            <p>简单近似方法</p>
            <div class="mathematical-content">
              <h4>基本思想：</h4>
              <div class="equation-block">
                <p>• 二阶微扰</p>
                <p>• 自洽求解</p>
                <p>• 解析表达式</p>
              </div>
              
              <h4>适用条件：</h4>
              <div class="equation-block">
                <p>• 弱到中等相关</p>
                <p>• 高温区域</p>
                <p>• 定性理解</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Mott金属-绝缘体相变</h2>
        <div class="mott-transition">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>相变机制</h3>
            <p>强相关驱动的相变</p>
            <div class="mathematical-content">
              <h4>Hubbard模型：</h4>
              <div class="equation-block">
                <p>H = -t∑⟨i,j⟩σ (c†ᵢσ cⱼσ + h.c.) + U∑ᵢ nᵢ↑ nᵢ↓</p>
                <p>竞争：动能 vs 相互作用能</p>
              </div>
              
              <h4>相变条件：</h4>
              <div class="equation-block">
                <p>临界相互作用强度 U_c</p>
                <p>U < U_c: 金属相</p>
                <p>U > U_c: Mott绝缘体</p>
              </div>
            </div>
          </div>

          <div class="phase-diagram">
            <h3>相图特征</h3>
            <div class="phase-regions">
              <div class="phase-region metal">
                <h4>金属相 (U < U_c)</h4>
                <ul>
                  <li>有限态密度在费米面</li>
                  <li>准粒子峰存在</li>
                  <li>电导率有限</li>
                </ul>
              </div>
              
              <div class="phase-region insulator">
                <h4>Mott绝缘体 (U > U_c)</h4>
                <ul>
                  <li>费米面处能隙</li>
                  <li>准粒子峰消失</li>
                  <li>电导率为零</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理量计算</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>谱函数</h3>
            <p>单粒子激发谱</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>A(ω) = -1/π Im G_loc(ω + i0⁺)</p>
                <p>解析延拓：iω_n → ω + i0⁺</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>• 态密度</p>
                <p>• 准粒子权重</p>
                <p>• 能隙结构</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔋</div>
            <h3>热力学量</h3>
            <p>温度相关的宏观性质</p>
            <div class="mathematical-content">
              <h4>内能：</h4>
              <div class="equation-block">
                <p>E = T∑_n e^{iω_n 0⁺} G_loc(iω_n) Σ(iω_n)</p>
              </div>
              
              <h4>比热：</h4>
              <div class="equation-block">
                <p>C = ∂E/∂T</p>
                <p>反映低能激发</p>
              </div>
              
              <h4>熵：</h4>
              <div class="equation-block">
                <p>S = ∫₀ᵀ C(T')/T' dT'</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>输运性质</h3>
            <p>电导率和光学性质</p>
            <div class="mathematical-content">
              <h4>直流电导率：</h4>
              <div class="equation-block">
                <p>σ_dc = e²/ℏ ∫ dω (-∂f/∂ω) σ(ω)</p>
                <p>f(ω): 费米分布</p>
              </div>
              
              <h4>光学电导率：</h4>
              <div class="equation-block">
                <p>σ(ω) ∝ ∫ dε A(ε) A(ε+ω) [f(ε) - f(ε+ω)]</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>磁性质</h3>
            <p>自旋相关的物理量</p>
            <div class="mathematical-content">
              <h4>磁化率：</h4>
              <div class="equation-block">
                <p>χ = μ_B² ∫₀^β dτ ⟨S_z(τ) S_z(0)⟩</p>
              </div>
              
              <h4>局域磁矩：</h4>
              <div class="equation-block">
                <p>m_loc² = ⟨(n↑ - n↓)²⟩</p>
                <p>反映局域自旋涨落</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>应用实例</h2>
        <div class="example-box">
          <h3>例1：过渡金属氧化物</h3>
          <p>强关联材料的电子结构：</p>
          <div class="equation-block">
            <p>V₂O₃的金属-绝缘体相变</p>
            <p>解释实验观测的相图</p>
            <p>预测谱函数特征</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：重费米子系统</h3>
          <p>f电子的局域化：</p>
          <div class="equation-block">
            <p>CeCoIn₅等化合物</p>
            <p>Kondo效应与RKKY相互作用</p>
            <p>量子临界点</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：有机导体</h3>
          <p>分子晶体中的强相关：</p>
          <div class="equation-block">
            <p>κ-(BEDT-TTF)₂Cu[N(CN)₂]Br</p>
            <p>几何阻挫与量子自旋液体</p>
            <p>压力调控的相变</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DMFT的扩展</h2>
        <div class="extensions-grid">
          <div class="extension-item">
            <h3>🌐 团簇DMFT</h3>
            <p>包含短程空间相关</p>
            <div class="details">
              <p>• 多格点团簇</p>
              <p>• 空间相关的自能</p>
              <p>• 更精确的相图</p>
            </div>
          </div>
          
          <div class="extension-item">
            <h3>🔄 非平衡DMFT</h3>
            <p>时间依赖的现象</p>
            <div class="details">
              <p>• Keldysh形式</p>
              <p>• 泵浦-探测实验</p>
              <p>• 超快动力学</p>
            </div>
          </div>
          
          <div class="extension-item">
            <h3>🎯 实空间DMFT</h3>
            <p>处理无序和界面</p>
            <div class="details">
              <p>• 位置依赖的参数</p>
              <p>• 杂质和缺陷</p>
              <p>• 异质结构</p>
            </div>
          </div>
          
          <div class="extension-item">
            <h3>🌊 DFT+DMFT</h3>
            <p>第一性原理结合</p>
            <div class="details">
              <p>• 现实材料计算</p>
              <p>• 轨道分辨</p>
              <p>• 定量预测</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>优势与局限</h2>
        <div class="pros-cons-section">
          <div class="pros-card">
            <h3>✅ 优势</h3>
            <ul>
              <li>非微扰处理强相关</li>
              <li>保留量子涨落</li>
              <li>适用于有限温度</li>
              <li>可计算动力学性质</li>
              <li>与实验直接比较</li>
              <li>物理图像清晰</li>
            </ul>
          </div>

          <div class="cons-card">
            <h3>❌ 局限性</h3>
            <ul>
              <li>忽略空间相关</li>
              <li>杂质求解器限制</li>
              <li>解析延拓困难</li>
              <li>计算成本高</li>
              <li>某些相变描述不准</li>
              <li>长程序参量困难</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>DMFT是研究强关联系统的重要理论框架</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>通过自洽循环求解杂质模型</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>成功描述Mott金属-绝缘体相变</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>多种杂质求解器各有优势</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>在强关联材料研究中应用广泛</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6_5',
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
  background: linear-gradient(135deg, #6f42c1 0%, #007bff 100%);
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

/* 新增样式 - 理论基础部分 */
.theoretical-foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.foundation-card {
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  border: 1px solid #c3e6cb;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.foundation-card:hover {
  transform: translateY(-5px);
}

.foundation-card .concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.foundation-card h3 {
  color: #155724;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* 高级DMFT方法部分 */
.advanced-dmft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.method-category {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border: 1px solid #b3d9ff;
  border-radius: 15px;
  padding: 2rem;
}

.method-category h3 {
  color: #0056b3;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.method-items {
  display: grid;
  gap: 1.5rem;
}

.method-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #007bff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.method-item h4 {
  color: #0056b3;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

/* 计算技术部分 */
.computational-techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.technique-card {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b3 100%);
  border: 1px solid #ffcc80;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.technique-card .concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.technique-card h3 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* DFT+DMFT结合部分 */
.dft-dmft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.integration-category {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  border: 1px solid #f48fb1;
  border-radius: 15px;
  padding: 2rem;
}

.integration-category h3 {
  color: #880e4f;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.integration-items {
  display: grid;
  gap: 1.5rem;
}

.integration-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #e91e63;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.integration-item h4 {
  color: #880e4f;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

/* 前沿应用部分 */
.frontier-applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-category {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border: 1px solid #a5d6a7;
  border-radius: 15px;
  padding: 2rem;
}

.application-category h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.application-items {
  display: grid;
  gap: 1.5rem;
}

.application-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #4caf50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.application-item:hover {
  transform: translateX(5px);
}

.application-item h4 {
  color: #2e7d32;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.dmft-cycle {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.cycle-step {
  display: flex;
  align-items: flex-start;
  margin: 2rem 0;
  padding: 1.5rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.step-number {
  background: #6f42c1;
  color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.step-content h3 {
  color: #2c3e50;
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
}

.step-content p {
  margin: 0 0 1rem 0;
  color: #666;
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

.mott-transition {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.phase-diagram {
  margin-top: 2rem;
}

.phase-regions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;
}

.phase-region {
  padding: 1.5rem;
  border-radius: 10px;
}

.metal {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  border-left: 5px solid #28a745;
}

.insulator {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  border-left: 5px solid #dc3545;
}

.phase-region h4 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.phase-region ul {
  list-style: none;
  padding: 0;
}

.phase-region li {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.metal li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #28a745;
  font-weight: bold;
}

.insulator li::before {
  content: "●";
  position: absolute;
  left: 0;
  color: #dc3545;
  font-weight: bold;
}

.extensions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.extension-item {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 5px solid #2196f3;
}

.extension-item h3 {
  color: #1565c0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.details {
  margin-top: 1rem;
}

.details p {
  margin: 0.3rem 0;
  font-size: 0.9rem;
  color: #424242;
}

.pros-cons-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.pros-card {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
}

.cons-card {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  padding: 2rem;
  border-radius: 15px;
}

.pros-card h3 {
  color: #155724;
  margin-bottom: 1rem;
}

.cons-card h3 {
  color: #721c24;
  margin-bottom: 1rem;
}

.pros-card ul, .cons-card ul {
  list-style: none;
  padding: 0;
}

.pros-card li, .cons-card li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.pros-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #155724;
  font-weight: bold;
}

.cons-card li::before {
  content: "✗";
  position: absolute;
  left: 0;
  color: #721c24;
  font-weight: bold;
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
  background: linear-gradient(135deg, #6f42c1 0%, #007bff 100%);
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
  
  .pros-cons-section {
    grid-template-columns: 1fr;
  }
  
  .extensions-grid {
    grid-template-columns: 1fr;
  }
  
  .phase-regions {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cycle-step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>