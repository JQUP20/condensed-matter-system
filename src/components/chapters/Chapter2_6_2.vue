<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.6.2 密度泛函理论的基本原理</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">DFT理论</span>
        <span class="reading-time">预计阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>密度泛函理论概述</h2>
        <p class="lead-text">
          密度泛函理论(DFT)是现代电子结构计算的主要方法，通过将多体问题转化为电子密度的泛函问题，
          大大简化了计算复杂度。DFT在凝聚态物理、量子化学和材料科学中有着广泛的应用。
        </p>
      </section>

      <section class="content-section">
        <h2>Hohenberg-Kohn定理</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>第一定理：唯一性定理</h3>
            <p>外势与基态密度的一一对应</p>
            <div class="mathematical-content">
              <h4>定理陈述：</h4>
              <div class="equation-block">
                <p>外势V_ext(r)由基态电子密度ρ₀(r)唯一确定</p>
                <p>（相差一个常数）</p>
              </div>
              
              <h4>推论：</h4>
              <div class="equation-block">
                <p>• 基态波函数是ρ₀(r)的泛函</p>
                <p>• 所有基态性质都是ρ₀(r)的泛函</p>
                <p>• E₀ = E[ρ₀]</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>第二定理：变分原理</h3>
            <p>能量泛函的变分性质</p>
            <div class="mathematical-content">
              <h4>变分原理：</h4>
              <div class="equation-block">
                <p>E[ρ] ≥ E₀ = E[ρ₀]</p>
                <p>对所有可能的密度ρ(r)</p>
              </div>
              
              <h4>能量泛函：</h4>
              <div class="equation-block">
                <p>E[ρ] = T[ρ] + V_ee[ρ] + ∫ V_ext(r)ρ(r)dr</p>
                <p>T[ρ]: 动能泛函</p>
                <p>V_ee[ρ]: 电子-电子相互作用泛函</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Kohn-Sham方程</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>Kohn-Sham构造</h3>
            <p>将相互作用系统映射到非相互作用系统</p>
            <div class="mathematical-content">
              <h4>基本思想：</h4>
              <div class="equation-block">
                <p>存在有效势V_eff(r)使得：</p>
                <p>ρ(r) = Σᵢ |ψᵢ(r)|²</p>
                <p>ψᵢ: Kohn-Sham轨道</p>
              </div>
              
              <h4>能量分解：</h4>
              <div class="equation-block">
                <p>E[ρ] = T_s[ρ] + V_H[ρ] + E_xc[ρ] + V_ext[ρ]</p>
                <p>T_s: 非相互作用动能</p>
                <p>V_H: Hartree能</p>
                <p>E_xc: 交换相关能</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>Kohn-Sham方程</h3>
            <p>有效单粒子方程</p>
            <div class="mathematical-content">
              <h4>KS方程：</h4>
              <div class="equation-block">
                <p>[-½∇² + V_eff(r)]ψᵢ(r) = εᵢψᵢ(r)</p>
              </div>
              
              <h4>有效势：</h4>
              <div class="equation-block">
                <p>V_eff(r) = V_ext(r) + V_H(r) + V_xc(r)</p>
                <p>V_H(r) = ∫ ρ(r')/|r-r'| dr'</p>
                <p>V_xc(r) = δE_xc[ρ]/δρ(r)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>交换相关泛函</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎭</div>
            <h3>局域密度近似(LDA)</h3>
            <p>最简单的交换相关泛函</p>
            <div class="mathematical-content">
              <h4>LDA近似：</h4>
              <div class="equation-block">
                <p>E_xc^LDA[ρ] = ∫ ρ(r)ε_xc(ρ(r))dr</p>
                <p>ε_xc(ρ): 均匀电子气的交换相关能密度</p>
              </div>
              
              <h4>交换部分：</h4>
              <div class="equation-block">
                <p>ε_x(ρ) = -3/4(3ρ/π)^(1/3)</p>
                <p>Dirac交换</p>
              </div>
              
              <h4>相关部分：</h4>
              <div class="equation-block">
                <p>ε_c(ρ): 量子蒙特卡罗结果</p>
                <p>Ceperley-Alder数据</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>广义梯度近似(GGA)</h3>
            <p>包含密度梯度的修正</p>
            <div class="mathematical-content">
              <h4>GGA形式：</h4>
              <div class="equation-block">
                <p>E_xc^GGA[ρ] = ∫ ρ(r)ε_xc(ρ,∇ρ)dr</p>
                <p>考虑密度的非均匀性</p>
              </div>
              
              <h4>常用泛函：</h4>
              <div class="equation-block">
                <p>• PBE (Perdew-Burke-Ernzerhof)</p>
                <p>• BLYP (Becke-Lee-Yang-Parr)</p>
                <p>• PW91 (Perdew-Wang 91)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>杂化泛函</h2>
        <div class="hybrid-section">
          <div class="concept-card">
            <div class="concept-icon">🔀</div>
            <h3>Hartree-Fock交换的混合</h3>
            <p>精确交换与DFT交换的结合</p>
            <div class="mathematical-content">
              <h4>杂化泛函形式：</h4>
              <div class="equation-block">
                <p>E_xc^hybrid = aE_x^HF + (1-a)E_x^DFT + E_c^DFT</p>
                <p>a: 混合参数</p>
              </div>
              
              <h4>常用杂化泛函：</h4>
              <div class="equation-block">
                <p>• B3LYP: a = 0.2</p>
                <p>• PBE0: a = 0.25</p>
                <p>• HSE06: 短程交换混合</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DFT的深层数学基础</h2>
        <div class="mathematical-foundation-grid">
          <div class="foundation-card">
            <div class="foundation-icon">📐</div>
            <h3>泛函导数理论</h3>
            <div class="mathematical-content">
              <h4>泛函导数定义：</h4>
              <div class="equation-block">
                <p>δF[ρ]/δρ(r) = lim[ε→0] [F[ρ+εδ(r-r')] - F[ρ]]/ε</p>
                <p>变分原理的数学基础</p>
              </div>
              
              <h4>链式法则：</h4>
              <div class="equation-block">
                <p>δF[G[ρ]]/δρ = ∫ (δF/δG)(δG/δρ) dr</p>
                <p>复合泛函的导数</p>
              </div>
              
              <h4>应用实例：</h4>
              <div class="equation-block">
                <p>δE_H[ρ]/δρ(r) = ∫ ρ(r')/|r-r'| dr'</p>
                <p>Hartree势的导出</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="foundation-icon">🔬</div>
            <h3>约束搜索理论</h3>
            <div class="mathematical-content">
              <h4>Levy约束搜索：</h4>
              <div class="equation-block">
                <p>F[ρ] = min{⟨Ψ|T̂+V̂ee|Ψ⟩}</p>
                <p>约束：⟨Ψ|ρ̂|Ψ⟩ = ρ</p>
              </div>
              
              <h4>v-可表示性：</h4>
              <div class="equation-block">
                <p>ρ(r) ≥ 0, ∫ρ(r)dr = N</p>
                <p>∇²ρ^(1/2) 有界</p>
              </div>
              
              <h4>N-可表示性：</h4>
              <div class="equation-block">
                <p>存在反对称波函数Ψ</p>
                <p>使得ρ(r) = ⟨Ψ|ρ̂(r)|Ψ⟩</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="foundation-icon">⚖️</div>
            <h3>绝热连接理论</h3>
            <div class="mathematical-content">
              <h4>绝热连接：</h4>
              <div class="equation-block">
                <p>Ĥ_λ = T̂ + λV̂ee + V̂_λ</p>
                <p>λ: 0→1 的耦合参数</p>
              </div>
              
              <h4>交换相关能：</h4>
              <div class="equation-block">
                <p>E_xc = ∫₀¹ ⟨V̂ee⟩_λ dλ - E_H</p>
                <p>精确的积分表达式</p>
              </div>
              
              <h4>涨落-耗散定理：</h4>
              <div class="equation-block">
                <p>χ_xc(r,r',ω) = -∫₀^∞ ⟨[ρ̂(r,t),ρ̂(r',0)]⟩e^(iωt) dt</p>
                <p>响应函数与相关函数的关系</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级交换相关泛函</h2>
        <div class="advanced-functionals-grid">
          <div class="functional-category">
            <h3>🎯 Meta-GGA泛函</h3>
            <div class="functional-items">
              <div class="functional-item">
                <h4>TPSS (Tao-Perdew-Staroverov-Scuseria)</h4>
                <p>• 包含动能密度τ = ½Σᵢ|∇ψᵢ|²</p>
                <p>• 满足更多精确条件</p>
                <p>• 改善氢键描述</p>
                <p>• 更好的几何结构</p>
              </div>
              
              <div class="functional-item">
                <h4>SCAN (Strongly Constrained and Appropriately Normed)</h4>
                <p>• 满足17个精确条件</p>
                <p>• 改善固体性质</p>
                <p>• 更准确的表面能</p>
                <p>• 层状材料的改进</p>
              </div>
            </div>
          </div>

          <div class="functional-category">
            <h3>🔀 双杂化泛函</h3>
            <div class="functional-items">
              <div class="functional-item">
                <h4>B2PLYP</h4>
                <p>• 包含MP2相关能</p>
                <p>• E_xc = a₁E_x^HF + a₂E_x^GGA + a₃E_c^GGA + a₄E_c^MP2</p>
                <p>• 热化学精度提高</p>
                <p>• 计算成本较高</p>
              </div>
              
              <div class="functional-item">
                <h4>DSD-PBEP86</h4>
                <p>• 分散修正的双杂化</p>
                <p>• 优化的参数</p>
                <p>• 非共价相互作用</p>
                <p>• 基准测试优异</p>
              </div>
            </div>
          </div>

          <div class="functional-category">
            <h3>🌊 范德华修正</h3>
            <div class="functional-items">
              <div class="functional-item">
                <h4>DFT-D3</h4>
                <p>• Grimme色散修正</p>
                <p>• E_total = E_DFT + E_disp</p>
                <p>• 三体项修正</p>
                <p>• 广泛应用</p>
              </div>
              
              <div class="functional-item">
                <h4>vdW-DF</h4>
                <p>• 非局域相关泛函</p>
                <p>• 基于电子密度</p>
                <p>• 无经验参数</p>
                <p>• 理论基础严格</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代计算技术与实现</h2>
        <div class="computational-techniques-grid">
          <div class="technique-category">
            <h3>🚀 线性标度方法</h3>
            <div class="technique-items">
              <div class="technique-item">
                <h4>密度矩阵方法</h4>
                <p>• 直接优化密度矩阵</p>
                <p>• 避免轨道计算</p>
                <p>• O(N)标度</p>
                <p>• 适用于大系统</p>
              </div>
              
              <div class="technique-item">
                <h4>局域轨道方法</h4>
                <p>• Wannier函数</p>
                <p>• 最大局域化</p>
                <p>• 稀疏矩阵技术</p>
                <p>• 并行效率高</p>
              </div>
            </div>
          </div>

          <div class="technique-category">
            <h3>💻 高性能计算</h3>
            <div class="technique-items">
              <div class="technique-item">
                <h4>GPU加速</h4>
                <p>• CUDA/OpenCL实现</p>
                <p>• FFT优化</p>
                <p>• 矩阵运算加速</p>
                <p>• 内存管理优化</p>
              </div>
              
              <div class="technique-item">
                <h4>大规模并行</h4>
                <p>• MPI通信优化</p>
                <p>• 负载均衡</p>
                <p>• 数据分布策略</p>
                <p>• 可扩展性分析</p>
              </div>
            </div>
          </div>

          <div class="technique-category">
            <h3>🔧 数值方法优化</h3>
            <div class="technique-items">
              <div class="technique-item">
                <h4>自适应网格</h4>
                <p>• 实空间方法</p>
                <p>• 多重网格技术</p>
                <p>• 误差估计</p>
                <p>• 网格细化</p>
              </div>
              
              <div class="technique-item">
                <h4>预条件技术</h4>
                <p>• Krylov子空间方法</p>
                <p>• 预条件矩阵</p>
                <p>• 收敛加速</p>
                <p>• 数值稳定性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DFT在材料科学中的前沿应用</h2>
        <div class="materials-applications-grid">
          <div class="application-category">
            <h3>🔋 能源材料</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>电池材料设计</h4>
                <p>• 电极材料筛选</p>
                <p>• 离子扩散路径</p>
                <p>• 电压预测</p>
                <p>• 界面稳定性</p>
              </div>
              
              <div class="application-item">
                <h4>太阳能电池</h4>
                <p>• 钙钛矿材料</p>
                <p>• 带隙工程</p>
                <p>• 载流子迁移率</p>
                <p>• 缺陷态分析</p>
              </div>
              
              <div class="application-item">
                <h4>催化剂设计</h4>
                <p>• 活性位点识别</p>
                <p>• 反应机理研究</p>
                <p>• 吸附能计算</p>
                <p>• 单原子催化剂</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>🧲 量子材料</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>拓扑绝缘体</h4>
                <p>• 拓扑不变量计算</p>
                <p>• 表面态分析</p>
                <p>• 自旋轨道耦合</p>
                <p>• 材料预测</p>
              </div>
              
              <div class="application-item">
                <h4>二维材料</h4>
                <p>• 石墨烯衍生物</p>
                <p>• 过渡金属硫化物</p>
                <p>• 范德华异质结</p>
                <p>• 应变工程</p>
              </div>
              
              <div class="application-item">
                <h4>超导材料</h4>
                <p>• 电声耦合</p>
                <p>• 临界温度预测</p>
                <p>• 配对机制</p>
                <p>• 材料设计</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>🏗️ 结构材料</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>高熵合金</h4>
                <p>• 相稳定性</p>
                <p>• 机械性能</p>
                <p>• 成分优化</p>
                <p>• 微观结构</p>
              </div>
              
              <div class="application-item">
                <h4>纳米材料</h4>
                <p>• 尺寸效应</p>
                <p>• 表面修饰</p>
                <p>• 量子限域</p>
                <p>• 光学性质</p>
              </div>
              
              <div class="application-item">
                <h4>复合材料</h4>
                <p>• 界面结合</p>
                <p>• 应力传递</p>
                <p>• 失效机制</p>
                <p>• 设计优化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>机器学习与DFT的融合</h2>
        <div class="ml-dft-grid">
          <div class="ml-category">
            <h3>🤖 泛函开发</h3>
            <div class="ml-items">
              <div class="ml-item">
                <h4>神经网络泛函</h4>
                <p>深度学习构建交换相关泛函，突破传统形式限制</p>
              </div>
              
              <div class="ml-item">
                <h4>符号回归</h4>
                <p>自动发现新的泛函形式，结合物理约束</p>
              </div>
              
              <div class="ml-item">
                <h4>贝叶斯优化</h4>
                <p>高效优化泛函参数，减少计算成本</p>
              </div>
            </div>
          </div>

          <div class="ml-category">
            <h3>⚡ 计算加速</h3>
            <div class="ml-items">
              <div class="ml-item">
                <h4>势能面学习</h4>
                <p>机器学习势函数，实现大规模分子动力学</p>
              </div>
              
              <div class="ml-item">
                <h4>初始猜测优化</h4>
                <p>智能生成初始密度，加速SCF收敛</p>
              </div>
              
              <div class="ml-item">
                <h4>自适应网格</h4>
                <p>机器学习指导网格优化，提高计算效率</p>
              </div>
            </div>
          </div>

          <div class="ml-category">
            <h3>🎯 材料发现</h3>
            <div class="ml-items">
              <div class="ml-item">
                <h4>高通量筛选</h4>
                <p>结合DFT和ML，快速筛选候选材料</p>
              </div>
              
              <div class="ml-item">
                <h4>逆向设计</h4>
                <p>从目标性质出发，设计新材料结构</p>
              </div>
              
              <div class="ml-item">
                <h4>不确定性量化</h4>
                <p>评估预测可靠性，指导实验验证</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DFT的优势与局限</h2>
        <div class="pros-cons-section">
          <div class="pros-card">
            <h3>✅ 优势</h3>
            <ul>
              <li>计算效率高</li>
              <li>可处理大系统</li>
              <li>包含相关效应</li>
              <li>结构优化准确</li>
              <li>软件成熟</li>
            </ul>
          </div>

          <div class="cons-card">
            <h3>❌ 局限性</h3>
            <ul>
              <li>带隙低估</li>
              <li>色散力描述差</li>
              <li>强相关系统困难</li>
              <li>激发态问题</li>
              <li>自相互作用误差</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算流程</h2>
        <div class="workflow-section">
          <div class="workflow-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>初始猜测</h3>
              <p>构造初始电子密度ρ⁰(r)</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>构造有效势</h3>
              <p>计算V_eff = V_ext + V_H + V_xc</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>求解KS方程</h3>
              <p>得到新的轨道{ψᵢ}</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>更新密度</h3>
              <p>ρⁿᵉʷ(r) = Σᵢ |ψᵢ(r)|²</p>
            </div>
          </div>
          
          <div class="workflow-step">
            <div class="step-number">5</div>
            <div class="step-content">
              <h3>检查收敛</h3>
              <p>|ρⁿᵉʷ - ρᵒˡᵈ| < 阈值？</p>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>应用实例</h2>
        <div class="example-box">
          <h3>例1：分子几何优化</h3>
          <p>结构弛豫和振动频率：</p>
          <div class="equation-block">
            <p>力：F = -∇E[ρ]</p>
            <p>优化至力为零</p>
            <p>精度通常很高</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：固体能带结构</h3>
          <p>周期性系统的电子结构：</p>
          <div class="equation-block">
            <p>Bloch定理 + 平面波基组</p>
            <p>k点采样</p>
            <p>赝势方法</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：表面和界面</h3>
          <p>低维系统的研究：</p>
          <div class="equation-block">
            <p>超胞方法</p>
            <p>表面重构</p>
            <p>吸附能计算</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-developments">
          <div class="development-item">
            <h3>🎯 精确泛函</h3>
            <p>meta-GGA, 双杂化泛函</p>
          </div>
          <div class="development-item">
            <h3>🔧 方法改进</h3>
            <p>DFT+U, 混合泛函</p>
          </div>
          <div class="development-item">
            <h3>⚡ 计算加速</h3>
            <p>线性标度算法</p>
          </div>
          <div class="development-item">
            <h3>🌐 机器学习</h3>
            <p>ML辅助的泛函开发</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>Hohenberg-Kohn定理奠定了DFT的理论基础</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>Kohn-Sham方程将多体问题转化为有效单体问题</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>交换相关泛函是DFT的核心近似</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>DFT在材料科学中有广泛应用</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>方法仍在不断发展和改进中</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6_2',
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
  border-bottom: 3px solid #28a745;
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
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
  background: linear-gradient(135deg, #d1f2eb 0%, #a3e4d7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #0c5460;
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

.hybrid-section {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
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
  border-left: 4px solid #28a745;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
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

.mathematical-foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.foundation-card {
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  border: 1px solid #c3e6cb;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.foundation-card:hover {
  transform: translateY(-3px);
}

.foundation-card h3 {
  color: #155724;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.advanced-functionals-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.functional-category {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #ffeaa7;
}

.functional-category h3 {
  color: #856404;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.functional-items {
  display: grid;
  gap: 1rem;
}

.functional-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.functional-item h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.computational-techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.technique-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 1px solid #90caf9;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
}

.technique-card:hover {
  transform: scale(1.05);
}

.technique-card h3 {
  color: #0d47a1;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.materials-applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-category {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #ce93d8;
}

.application-category h3 {
  color: #4a148c;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.application-items {
  display: grid;
  gap: 1rem;
}

.application-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
}

.application-item h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.ml-integration-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.ml-category {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #f48fb1;
}

.ml-category h3 {
  color: #880e4f;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.ml-items {
  display: grid;
  gap: 1rem;
}

.ml-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e91e63;
}

.ml-item h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
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

.workflow-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.workflow-step {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-number {
  background: #007bff;
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
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.step-content p {
  margin: 0;
  color: #666;
}

.modern-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.development-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.development-item h3 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.1rem;
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
  background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
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
  
  .modern-developments {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .workflow-step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>