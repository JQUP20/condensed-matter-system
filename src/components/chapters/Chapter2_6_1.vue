<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.6.1 Hartree-Fock近似的基本思想</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">平均场理论</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>Hartree-Fock方法概述</h2>
        <p class="lead-text">
          Hartree-Fock近似是处理多体相互作用系统的重要方法，通过平均场近似将复杂的多体问题转化为有效的单体问题。
          这一方法在原子物理、分子物理和固体物理中都有广泛应用，是理解电子结构的基础理论工具。
        </p>
      </section>

      <section class="content-section">
        <h2>基本思想与动机</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>多体问题的困难</h3>
            <p>相互作用系统的复杂性</p>
            <div class="mathematical-content">
              <h4>多体Hamiltonian：</h4>
              <div class="equation-block">
                <p>Ĥ = Σᵢ T̂ᵢ + Σᵢ<ⱼ V̂ᵢⱼ</p>
                <p>T̂ᵢ: 动能算符</p>
                <p>V̂ᵢⱼ: 两体相互作用</p>
              </div>
              
              <h4>困难：</h4>
              <div class="equation-block">
                <p>• 指数增长的希尔伯特空间</p>
                <p>• 相互作用项的复杂性</p>
                <p>• 无法精确求解</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>平均场近似</h3>
            <p>将多体问题简化为单体问题</p>
            <div class="mathematical-content">
              <h4>基本思想：</h4>
              <div class="equation-block">
                <p>每个粒子感受到其他粒子的平均场</p>
                <p>V̂ᵢⱼ → ⟨V̂ᵢⱼ⟩ + δV̂ᵢⱼ</p>
                <p>忽略涨落项δV̂ᵢⱼ</p>
              </div>
              
              <h4>有效单体Hamiltonian：</h4>
              <div class="equation-block">
                <p>Ĥₑff = Σᵢ [T̂ᵢ + V̂ₑff(i)]</p>
                <p>V̂ₑff(i): 有效势场</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Hartree近似</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>Hartree方程</h3>
            <p>最简单的平均场近似</p>
            <div class="mathematical-content">
              <h4>试探波函数：</h4>
              <div class="equation-block">
                <p>|Ψ⟩ = ∏ᵢ |φᵢ⟩</p>
                <p>独立粒子乘积态</p>
              </div>
              
              <h4>Hartree方程：</h4>
              <div class="equation-block">
                <p>[T̂ + V̂ₑₓₜ + V̂ₕ]|φᵢ⟩ = εᵢ|φᵢ⟩</p>
                <p>V̂ₕ = Σⱼ≠ᵢ ∫ |φⱼ(r')|²V(r,r')dr'</p>
                <p>Hartree势</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>自洽求解</h3>
            <p>迭代求解过程</p>
            <div class="mathematical-content">
              <h4>自洽条件：</h4>
              <div class="equation-block">
                <p>ρ(r) = Σᵢ |φᵢ(r)|²</p>
                <p>电子密度自洽</p>
              </div>
              
              <h4>迭代过程：</h4>
              <div class="equation-block">
                <p>1. 猜测初始波函数</p>
                <p>2. 计算Hartree势</p>
                <p>3. 求解单粒子方程</p>
                <p>4. 检查收敛性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Fock项与交换相互作用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔀</div>
            <h3>Pauli不相容原理</h3>
            <p>费米子的反对称性</p>
            <div class="mathematical-content">
              <h4>反对称波函数：</h4>
              <div class="equation-block">
                <p>|Ψ⟩ = 1/√N! det|φᵢ(rⱼ)⟩</p>
                <p>Slater行列式</p>
              </div>
              
              <h4>交换积分：</h4>
              <div class="equation-block">
                <p>Kᵢⱼ = ∫∫ φᵢ*(r₁)φⱼ*(r₂)V(r₁,r₂)φⱼ(r₁)φᵢ(r₂)dr₁dr₂</p>
                <p>交换项</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>Hartree-Fock方程</h3>
            <p>包含交换项的完整方程</p>
            <div class="mathematical-content">
              <h4>HF方程：</h4>
              <div class="equation-block">
                <p>[T̂ + V̂ₑₓₜ + V̂ₕ - V̂ₓ]|φᵢ⟩ = εᵢ|φᵢ⟩</p>
                <p>V̂ₓ: 交换算符</p>
              </div>
              
              <h4>交换算符：</h4>
              <div class="equation-block">
                <p>V̂ₓ|φᵢ⟩ = Σⱼ Kᵢⱼ|φⱼ⟩</p>
                <p>非局域算符</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>能量表达式</h2>
        <div class="energy-section">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>总能量</h3>
            <p>Hartree-Fock能量的组成</p>
            <div class="mathematical-content">
              <h4>总能量：</h4>
              <div class="equation-block">
                <p>E_HF = Σᵢ εᵢ - 1/2 Σᵢⱼ (Jᵢⱼ - Kᵢⱼ)</p>
                <p>避免双重计数</p>
              </div>
              
              <h4>各项贡献：</h4>
              <div class="equation-block">
                <p>• 动能：Σᵢ ⟨φᵢ|T̂|φᵢ⟩</p>
                <p>• Hartree能：1/2 Σᵢⱼ Jᵢⱼ</p>
                <p>• 交换能：-1/2 Σᵢⱼ Kᵢⱼ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理意义与解释</h2>
        <div class="physics-insights">
          <div class="insight-card">
            <h3>🎯 Hartree项的物理意义</h3>
            <p>经典库仑排斥：</p>
            <ul>
              <li>电子密度的经典静电相互作用</li>
              <li>每个电子感受其他电子的平均库仑势</li>
              <li>总是排斥性的</li>
            </ul>
          </div>

          <div class="insight-card">
            <h3>🔀 Fock项的物理意义</h3>
            <p>量子交换效应：</p>
            <ul>
              <li>Pauli不相容原理的体现</li>
              <li>同自旋电子的"交换空穴"</li>
              <li>降低系统能量</li>
              <li>非局域效应</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Hartree-Fock方法的深层理论基础</h2>
        <div class="theoretical-foundation-grid">
          <div class="foundation-card">
            <div class="foundation-icon">🧮</div>
            <h3>变分原理的严格应用</h3>
            <div class="mathematical-content">
              <h4>变分条件：</h4>
              <div class="equation-block">
                <p>δ⟨Ψ|Ĥ|Ψ⟩ = 0</p>
                <p>约束条件：⟨φᵢ|φⱼ⟩ = δᵢⱼ</p>
                <p>Lagrange乘数法</p>
              </div>
              
              <h4>Fock算符的导出：</h4>
              <div class="equation-block">
                <p>F̂ᵢ = ĥᵢ + Σⱼ(Ĵⱼ - K̂ⱼ)</p>
                <p>Ĵⱼ: Coulomb算符</p>
                <p>K̂ⱼ: 交换算符</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="foundation-icon">🔄</div>
            <h3>自洽场迭代的数学基础</h3>
            <div class="mathematical-content">
              <h4>不动点定理：</h4>
              <div class="equation-block">
                <p>F[ρ] = ρ</p>
                <p>ρ: 密度矩阵</p>
                <p>收敛条件分析</p>
              </div>
              
              <h4>收敛加速方法：</h4>
              <div class="equation-block">
                <p>• DIIS (Direct Inversion)</p>
                <p>• 阻尼方法</p>
                <p>• 级别移位</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="foundation-icon">⚖️</div>
            <h3>对称性与守恒定律</h3>
            <div class="mathematical-content">
              <h4>空间对称性：</h4>
              <div class="equation-block">
                <p>点群对称性</p>
                <p>轨道的不可约表示</p>
                <p>选择定则</p>
              </div>
              
              <h4>时间反演对称性：</h4>
              <div class="equation-block">
                <p>Kramers简并</p>
                <p>实轨道的构造</p>
                <p>磁性系统的处理</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代计算实现与优化</h2>
        <div class="computational-methods-grid">
          <div class="method-category">
            <h3>🚀 高效算法</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>积分计算优化</h4>
                <p>• 解析积分vs数值积分</p>
                <p>• 筛选技术 (Screening)</p>
                <p>• 对称性利用</p>
                <p>• 稀疏矩阵技术</p>
              </div>
              
              <div class="method-item">
                <h4>SCF收敛技术</h4>
                <p>• DIIS外推法</p>
                <p>• 二次收敛方法</p>
                <p>• 预条件技术</p>
                <p>• 自适应阻尼</p>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>💻 并行计算</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>任务并行化</h4>
                <p>• 积分计算并行</p>
                <p>• 矩阵运算并行</p>
                <p>• 内存管理优化</p>
                <p>• 负载均衡</p>
              </div>
              
              <div class="method-item">
                <h4>GPU加速</h4>
                <p>• CUDA实现</p>
                <p>• 张量运算优化</p>
                <p>• 内存带宽优化</p>
                <p>• 混合精度计算</p>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>🔧 基组优化</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>基组设计原理</h4>
                <p>• Slater型vs Gaussian型</p>
                <p>• 收缩基组</p>
                <p>• 极化函数</p>
                <p>• 弥散函数</p>
              </div>
              
              <div class="method-item">
                <h4>自适应基组</h4>
                <p>• 误差估计</p>
                <p>• 基组外推</p>
                <p>• 局域基组</p>
                <p>• 平面波基组</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>扩展理论与后Hartree-Fock方法</h2>
        <div class="extended-theories-grid">
          <div class="theory-card">
            <div class="theory-icon">📈</div>
            <h3>多体微扰理论 (MBPT)</h3>
            <div class="mathematical-content">
              <h4>Møller-Plesset微扰：</h4>
              <div class="equation-block">
                <p>Ĥ = Ĥ₀ + V̂</p>
                <p>Ĥ₀ = Σᵢ F̂ᵢ (Fock算符)</p>
                <p>V̂ = Ĥ - Ĥ₀ (微扰)</p>
              </div>
              
              <h4>能量修正：</h4>
              <div class="equation-block">
                <p>E⁽⁰⁾ = Σᵢ εᵢ</p>
                <p>E⁽¹⁾ = ⟨Ψ₀|V̂|Ψ₀⟩</p>
                <p>E⁽²⁾ = MP2相关能</p>
              </div>
            </div>
          </div>

          <div class="theory-card">
            <div class="theory-icon">🔗</div>
            <h3>耦合簇理论 (CC)</h3>
            <div class="mathematical-content">
              <h4>指数Ansatz：</h4>
              <div class="equation-block">
                <p>|Ψ⟩ = e^T̂|Φ₀⟩</p>
                <p>T̂ = T̂₁ + T̂₂ + T̂₃ + ...</p>
                <p>T̂ₙ: n-体激发算符</p>
              </div>
              
              <h4>截断方案：</h4>
              <div class="equation-block">
                <p>CCD: 仅双激发</p>
                <p>CCSD: 单+双激发</p>
                <p>CCSD(T): 三激发微扰修正</p>
              </div>
            </div>
          </div>

          <div class="theory-card">
            <div class="theory-icon">🎯</div>
            <h3>组态相互作用 (CI)</h3>
            <div class="mathematical-content">
              <h4>波函数展开：</h4>
              <div class="equation-block">
                <p>|Ψ⟩ = Σᵢ cᵢ|Φᵢ⟩</p>
                <p>|Φᵢ⟩: Slater行列式</p>
                <p>变分求解系数cᵢ</p>
              </div>
              
              <h4>截断方案：</h4>
              <div class="equation-block">
                <p>CIS: 单激发</p>
                <p>CISD: 单+双激发</p>
                <p>FCI: 完全CI (精确解)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实际应用与软件实现</h2>
        <div class="applications-grid">
          <div class="application-category">
            <h3>🧪 化学应用</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>分子几何优化</h4>
                <p>• 势能面扫描</p>
                <p>• 过渡态搜索</p>
                <p>• 反应路径计算</p>
                <p>• 振动频率分析</p>
              </div>
              
              <div class="application-item">
                <h4>光谱性质预测</h4>
                <p>• 电子激发态</p>
                <p>• 振动光谱</p>
                <p>• NMR化学位移</p>
                <p>• 极化率计算</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>🔬 材料科学</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>固体电子结构</h4>
                <p>• 能带结构计算</p>
                <p>• 态密度分析</p>
                <p>• 表面性质</p>
                <p>• 缺陷态研究</p>
              </div>
              
              <div class="application-item">
                <h4>材料设计</h4>
                <p>• 催化剂设计</p>
                <p>• 半导体材料</p>
                <p>• 磁性材料</p>
                <p>• 超导体研究</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>💻 软件生态</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>主流软件包</h4>
                <p>• Gaussian: 商业标准</p>
                <p>• GAMESS: 开源选择</p>
                <p>• NWChem: 大规模并行</p>
                <p>• PySCF: Python接口</p>
              </div>
              
              <div class="application-item">
                <h4>新兴工具</h4>
                <p>• 机器学习辅助</p>
                <p>• 云计算平台</p>
                <p>• 自动化工作流</p>
                <p>• 可视化工具</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>前沿发展与未来展望</h2>
        <div class="future-developments-grid">
          <div class="development-category">
            <h3>🤖 机器学习集成</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>神经网络波函数</h4>
                <p>深度学习表示多体波函数，突破传统近似限制</p>
              </div>
              
              <div class="development-item">
                <h4>自动化参数优化</h4>
                <p>机器学习优化基组、泛函参数和计算策略</p>
              </div>
              
              <div class="development-item">
                <h4>智能误差估计</h4>
                <p>预测计算精度，指导方法选择和资源分配</p>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>⚡ 量子计算</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>变分量子本征求解器</h4>
                <p>VQE算法求解电子结构问题</p>
              </div>
              
              <div class="development-item">
                <h4>量子模拟</h4>
                <p>直接模拟量子多体系统</p>
              </div>
              
              <div class="development-item">
                <h4>混合经典-量子算法</h4>
                <p>结合经典和量子计算优势</p>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🌐 多尺度方法</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>QM/MM方法</h4>
                <p>量子力学与分子力学的耦合</p>
              </div>
              
              <div class="development-item">
                <h4>嵌入理论</h4>
                <p>局域高精度与全局低精度结合</p>
              </div>
              
              <div class="development-item">
                <h4>实时动力学</h4>
                <p>非绝热过程和激发态动力学</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Koopmans定理</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>电离能的近似</h3>
            <p>轨道能量的物理意义</p>
            <div class="mathematical-content">
              <h4>Koopmans定理：</h4>
              <div class="equation-block">
                <p>Iᵢ ≈ -εᵢ</p>
                <p>Iᵢ: 第i个轨道的电离能</p>
                <p>εᵢ: HF轨道能量</p>
              </div>
              
              <h4>近似条件：</h4>
              <div class="equation-block">
                <p>• 忽略轨道弛豫</p>
                <p>• 冻结轨道近似</p>
                <p>• 对价电子较准确</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>实验比较</h3>
            <p>与光电子谱的对比</p>
            <div class="mathematical-content">
              <h4>典型精度：</h4>
              <div class="equation-block">
                <p>价电子：误差~1-2 eV</p>
                <p>内层电子：误差较大</p>
              </div>
              
              <h4>改进方法：</h4>
              <div class="equation-block">
                <p>• 考虑轨道弛豫</p>
                <p>• 相关能修正</p>
                <p>• 多体微扰理论</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>应用实例</h2>
        <div class="example-box">
          <h3>例1：氢原子</h3>
          <p>最简单的应用：</p>
          <div class="equation-block">
            <p>单电子系统，HF = 精确解</p>
            <p>E_HF = -13.6 eV</p>
            <p>验证方法的正确性</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：氦原子</h3>
          <p>两电子系统：</p>
          <div class="equation-block">
            <p>E_HF = -74.8 eV</p>
            <p>E_实验 = -79.0 eV</p>
            <p>相关能 ≈ 4.2 eV</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：分子轨道理论</h3>
          <p>化学键的描述：</p>
          <div class="equation-block">
            <p>LCAO-MO方法</p>
            <p>成键/反键轨道</p>
            <p>分子几何优化</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>方法的优缺点</h2>
        <div class="pros-cons-section">
          <div class="pros-card">
            <h3>✅ 优点</h3>
            <ul>
              <li>物理图像清晰</li>
              <li>计算相对简单</li>
              <li>可处理大系统</li>
              <li>定性结果可靠</li>
              <li>是其他方法的起点</li>
            </ul>
          </div>

          <div class="cons-card">
            <h3>❌ 缺点</h3>
            <ul>
              <li>忽略电子相关</li>
              <li>能量偏高</li>
              <li>无法描述色散力</li>
              <li>自相互作用误差</li>
              <li>带隙问题</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-developments">
          <div class="development-item">
            <h3>🔧 计算方法改进</h3>
            <p>高效算法和并行计算</p>
          </div>
          <div class="development-item">
            <h3>🎯 后HF方法</h3>
            <p>MP2, CCSD, CI等相关方法</p>
          </div>
          <div class="development-item">
            <h3>🌐 密度泛函理论</h3>
            <p>更实用的电子结构方法</p>
          </div>
          <div class="development-item">
            <h3>📱 软件包</h3>
            <p>Gaussian, GAMESS, NWChem等</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>平均场近似是处理多体问题的重要方法</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>Hartree-Fock方程包含Hartree项和Fock项</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>交换相互作用源于Pauli不相容原理</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>Koopmans定理连接轨道能量与电离能</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>是现代电子结构理论的基础</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6_1',
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
  background: linear-gradient(135deg, #e7e3ff 0%, #d1c4e9 100%);
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

.energy-section {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.insight-card {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
}

.insight-card h3 {
  color: #155724;
  margin-bottom: 1rem;
}

.insight-card ul {
  list-style: none;
  padding: 0;
}

.insight-card li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.insight-card li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #155724;
  font-weight: bold;
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

.theoretical-foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.foundation-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.foundation-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.foundation-card h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.computational-methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.method-category {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.method-category h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.method-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.method-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.method-item h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.extended-theories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.theory-card {
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.theory-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.theory-card h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-category {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.application-category h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.application-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.application-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.application-item h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.future-developments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.development-category {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.development-category h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.development-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.development-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.development-item h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
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

.modern-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.development-item {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.development-item h3 {
  color: #0d47a1;
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
  
  .physics-insights {
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
}
</style>