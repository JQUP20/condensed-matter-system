<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.6.4 量子蒙特卡罗方法</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">数值方法</span>
        <span class="reading-time">预计阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>量子蒙特卡罗方法概述</h2>
        <p class="lead-text">
          量子蒙特卡罗(QMC)方法是求解多体量子系统的强有力数值工具，通过随机采样技术处理高维积分问题。
          QMC方法能够精确处理强相关系统，是研究量子多体问题的重要手段。
        </p>
      </section>

      <section class="content-section">
        <h2>基本思想与分类</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎲</div>
            <h3>蒙特卡罗采样</h3>
            <p>随机采样求解高维积分</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>⟨O⟩ = ∫ O(R)P(R)dR</p>
                <p>P(R): 概率分布</p>
                <p>R: 多粒子坐标</p>
              </div>
              
              <h4>蒙特卡罗估计：</h4>
              <div class="equation-block">
                <p>⟨O⟩ ≈ 1/N Σᵢ O(Rᵢ)</p>
                <p>Rᵢ: 按P(R)分布的样本</p>
                <p>统计误差 ∝ 1/√N</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>QMC方法分类</h3>
            <p>不同的量子蒙特卡罗方法</p>
            <div class="mathematical-content">
              <h4>主要方法：</h4>
              <div class="equation-block">
                <p>• VMC: 变分蒙特卡罗</p>
                <p>• DMC: 扩散蒙特卡罗</p>
                <p>• PIMC: 路径积分蒙特卡罗</p>
                <p>• AFQMC: 辅助场量子蒙特卡罗</p>
              </div>
              
              <h4>应用范围：</h4>
              <div class="equation-block">
                <p>基态性质、有限温度、动力学</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>变分蒙特卡罗(VMC)</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>变分原理</h3>
            <p>试探波函数的优化</p>
            <div class="mathematical-content">
              <h4>能量期望值：</h4>
              <div class="equation-block">
                <p>E[Ψ_T] = ⟨Ψ_T|Ĥ|Ψ_T⟩/⟨Ψ_T|Ψ_T⟩</p>
                <p>Ψ_T: 试探波函数</p>
              </div>
              
              <h4>局域能量：</h4>
              <div class="equation-block">
                <p>E_L(R) = Ĥ Ψ_T(R)/Ψ_T(R)</p>
                <p>避免显式归一化</p>
              </div>
              
              <h4>蒙特卡罗积分：</h4>
              <div class="equation-block">
                <p>E = ∫ E_L(R)|Ψ_T(R)|²dR / ∫ |Ψ_T(R)|²dR</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>试探波函数</h3>
            <p>波函数的构造与优化</p>
            <div class="mathematical-content">
              <h4>Jastrow因子：</h4>
              <div class="equation-block">
                <p>Ψ_T = Ψ_0 × exp(J)</p>
                <p>J = Σᵢ<ⱼ u(rᵢⱼ)</p>
                <p>u(r): 相关函数</p>
              </div>
              
              <h4>参数优化：</h4>
              <div class="equation-block">
                <p>∂E/∂α = 2⟨(E_L - E)(∂ln Ψ_T/∂α)⟩</p>
                <p>α: 变分参数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>扩散蒙特卡罗(DMC)</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>虚时演化</h3>
            <p>基态的投影方法</p>
            <div class="mathematical-content">
              <h4>虚时Schrödinger方程：</h4>
              <div class="equation-block">
                <p>-∂Ψ/∂τ = (Ĥ - E_T)Ψ</p>
                <p>τ: 虚时间</p>
                <p>E_T: 试验能量</p>
              </div>
              
              <h4>基态投影：</h4>
              <div class="equation-block">
                <p>lim_{τ→∞} e^{-(Ĥ-E_T)τ}Ψ_T ∝ Ψ₀</p>
                <p>Ψ₀: 基态波函数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>扩散过程</h3>
            <p>随机行走的实现</p>
            <div class="mathematical-content">
              <h4>扩散方程：</h4>
              <div class="equation-block">
                <p>∂f/∂τ = ½∇²f - (V - E_T)f</p>
                <p>f(R,τ): 行走者密度</p>
              </div>
              
              <h4>算法步骤：</h4>
              <div class="equation-block">
                <p>1. 扩散步：R' = R + η</p>
                <p>2. 分支步：权重调整</p>
                <p>3. 重采样</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>路径积分蒙特卡罗(PIMC)</h2>
        <div class="pimc-section">
          <div class="concept-card">
            <div class="concept-icon">🛤️</div>
            <h3>路径积分表示</h3>
            <p>有限温度的量子统计</p>
            <div class="mathematical-content">
              <h4>配分函数：</h4>
              <div class="equation-block">
                <p>Z = Tr[e^{-βĤ}]</p>
                <p>β = 1/(k_B T)</p>
              </div>
              
              <h4>路径积分：</h4>
              <div class="equation-block">
                <p>Z = ∫ ∏ᵢ dRᵢ ⟨R₀|e^{-βĤ/P}|R₁⟩...⟨R_{P-1}|e^{-βĤ/P}|R₀⟩</p>
                <p>P: 时间片数</p>
              </div>
              
              <h4>经典映射：</h4>
              <div class="equation-block">
                <p>量子系统 → P个经典副本的环形聚合物</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子蒙特卡罗的数学基础</h2>
        <div class="mathematical-foundation-grid">
          <div class="foundation-card">
            <div class="concept-icon">📊</div>
            <h3>概率论基础</h3>
            <p>蒙特卡罗方法的数学原理</p>
            <div class="mathematical-content">
              <h4>大数定律：</h4>
              <div class="equation-block">
                <p>lim_{N→∞} 1/N Σᵢ f(xᵢ) = ⟨f⟩</p>
                <p>收敛性保证</p>
              </div>
              
              <h4>中心极限定理：</h4>
              <div class="equation-block">
                <p>σ_N = σ/√N</p>
                <p>统计误差的标度</p>
                <p>置信区间估计</p>
              </div>
              
              <h4>重要性采样：</h4>
              <div class="equation-block">
                <p>⟨f⟩ = ∫ f(x)p(x)dx / ∫ p(x)dx</p>
                <p>优化采样效率</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="concept-icon">🔄</div>
            <h3>马尔可夫链理论</h3>
            <p>MCMC算法的理论基础</p>
            <div class="mathematical-content">
              <h4>详细平衡条件：</h4>
              <div class="equation-block">
                <p>π(x)T(x→y) = π(y)T(y→x)</p>
                <p>π(x): 平衡分布</p>
                <p>T: 转移概率</p>
              </div>
              
              <h4>遍历性定理：</h4>
              <div class="equation-block">
                <p>收敛到唯一平衡态</p>
                <p>自相关时间</p>
                <p>混合时间估计</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="concept-icon">🌊</div>
            <h3>随机过程理论</h3>
            <p>扩散过程的数学描述</p>
            <div class="mathematical-content">
              <h4>Fokker-Planck方程：</h4>
              <div class="equation-block">
                <p>∂P/∂t = -∇·(μP) + ½∇²(DP)</p>
                <p>μ: 漂移项</p>
                <p>D: 扩散系数</p>
              </div>
              
              <h4>Itô积分：</h4>
              <div class="equation-block">
                <p>dX = μ(X,t)dt + σ(X,t)dW</p>
                <p>随机微分方程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级QMC方法</h2>
        <div class="advanced-methods-grid">
          <div class="method-category">
            <h3>连续时间QMC</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>蠕虫算法</h4>
                <p>处理超流和磁性系统：</p>
                <div class="equation-block">
                  <p>全局更新策略</p>
                  <p>避免临界慢化</p>
                  <p>拓扑激发的采样</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>随机级数展开</h4>
                <p>高温展开的蒙特卡罗：</p>
                <div class="equation-block">
                  <p>Z = Σₙ aₙβⁿ</p>
                  <p>图形权重采样</p>
                  <p>任意温度计算</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>量子退火方法</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>模拟退火</h4>
                <p>优化问题的求解：</p>
                <div class="equation-block">
                  <p>T(t) = T₀/log(1+t)</p>
                  <p>缓慢降温过程</p>
                  <p>全局最优解</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>平行回火</h4>
                <p>多温度并行采样：</p>
                <div class="equation-block">
                  <p>副本交换算法</p>
                  <p>增强采样效率</p>
                  <p>克服能量壁垒</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>张量网络QMC</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>PEPS采样</h4>
                <p>投影纠缠对态的蒙特卡罗：</p>
                <div class="equation-block">
                  <p>张量收缩采样</p>
                  <p>面积定律纠缠</p>
                  <p>二维强相关系统</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>MERA-MC</h4>
                <p>多尺度纠缠重整化：</p>
                <div class="equation-block">
                  <p>分层张量结构</p>
                  <p>临界系统描述</p>
                  <p>对数纠缠标度</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代计算技术与优化</h2>
        <div class="computational-optimization-grid">
          <div class="optimization-card">
            <div class="concept-icon">⚡</div>
            <h3>并行计算策略</h3>
            <div class="mathematical-content">
              <h4>数据并行：</h4>
              <div class="equation-block">
                <p>多个独立行走者</p>
                <p>MPI通信优化</p>
                <p>负载均衡</p>
              </div>
              
              <h4>任务并行：</h4>
              <div class="equation-block">
                <p>不同物理量并行计算</p>
                <p>多温度并行</p>
                <p>参数扫描</p>
              </div>
            </div>
          </div>

          <div class="optimization-card">
            <div class="concept-icon">🔧</div>
            <h3>算法优化技术</h3>
            <div class="mathematical-content">
              <h4>自适应步长：</h4>
              <div class="equation-block">
                <p>接受率优化</p>
                <p>动态调整策略</p>
                <p>收敛加速</p>
              </div>
              
              <h4>预条件技术：</h4>
              <div class="equation-block">
                <p>变分参数优化</p>
                <p>自然梯度方法</p>
                <p>二阶优化算法</p>
              </div>
            </div>
          </div>

          <div class="optimization-card">
            <div class="concept-icon">💻</div>
            <h3>GPU加速实现</h3>
            <div class="mathematical-content">
              <h4>CUDA编程：</h4>
              <div class="equation-block">
                <p>大规模并行采样</p>
                <p>内存访问优化</p>
                <p>线程同步</p>
              </div>
              
              <h4>混合精度：</h4>
              <div class="equation-block">
                <p>FP16/FP32混合</p>
                <p>数值稳定性</p>
                <p>性能提升</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>误差分析与质量控制</h2>
        <div class="error-analysis-grid">
          <div class="error-category">
            <h3>统计误差</h3>
            <div class="error-items">
              <div class="error-item">
                <h4>自相关分析</h4>
                <p>时间序列的相关性：</p>
                <div class="equation-block">
                  <p>τ_int = 1 + 2Σₜ C(t)</p>
                  <p>C(t): 自相关函数</p>
                  <p>有效样本数估计</p>
                </div>
              </div>
              
              <div class="error-item">
                <h4>分块分析</h4>
                <p>误差棒的正确估计：</p>
                <div class="equation-block">
                  <p>分块平均方法</p>
                  <p>Jackknife重采样</p>
                  <p>Bootstrap方法</p>
                </div>
              </div>
            </div>
          </div>

          <div class="error-category">
            <h3>系统误差</h3>
            <div class="error-items">
              <div class="error-item">
                <h4>有限尺寸效应</h4>
                <p>系统尺寸的影响：</p>
                <div class="equation-block">
                  <p>标度分析</p>
                  <p>外推到热力学极限</p>
                  <p>边界条件效应</p>
                </div>
              </div>
              
              <div class="error-item">
                <h4>时间步误差</h4>
                <p>离散化误差：</p>
                <div class="equation-block">
                  <p>Trotter分解误差</p>
                  <p>时间步外推</p>
                  <p>高阶分解方案</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>前沿应用与发展方向</h2>
        <div class="frontier-applications-grid">
          <div class="application-category">
            <h3>量子材料研究</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>高温超导机理</h4>
                <p>强关联电子系统的QMC研究</p>
              </div>
              
              <div class="application-item">
                <h4>量子自旋液体</h4>
                <p>阻挫磁性系统的基态性质</p>
              </div>
              
              <div class="application-item">
                <h4>拓扑相变</h4>
                <p>拓扑不变量的数值计算</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>量子计算模拟</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>量子算法验证</h4>
                <p>经典模拟的基准测试</p>
              </div>
              
              <div class="application-item">
                <h4>量子纠错码</h4>
                <p>错误阈值的确定</p>
              </div>
              
              <div class="application-item">
                <h4>量子优势验证</h4>
                <p>量子霸权的数值证据</p>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>机器学习融合</h3>
            <div class="application-items">
              <div class="application-item">
                <h4>神经网络波函数</h4>
                <p>深度学习优化试探态</p>
              </div>
              
              <div class="application-item">
                <h4>强化学习采样</h4>
                <p>智能采样策略优化</p>
              </div>
              
              <div class="application-item">
                <h4>生成模型</h4>
                <p>量子态的生成式建模</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>符号问题</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚠️</div>
            <h3>费米子符号问题</h3>
            <p>反对称波函数的困难</p>
            <div class="mathematical-content">
              <h4>问题来源：</h4>
              <div class="equation-block">
                <p>费米子波函数可以为负</p>
                <p>|Ψ|²不再是正定概率</p>
                <p>统计噪声指数增长</p>
              </div>
              
              <h4>固定节点近似：</h4>
              <div class="equation-block">
                <p>固定试探波函数的节点面</p>
                <p>在每个区域内保持符号</p>
                <p>引入系统误差</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>解决方案</h3>
            <p>克服符号问题的方法</p>
            <div class="mathematical-content">
              <h4>辅助场方法：</h4>
              <div class="equation-block">
                <p>Hubbard-Stratonovich变换</p>
                <p>将相互作用转化为辅助场</p>
              </div>
              
              <h4>其他方法：</h4>
              <div class="equation-block">
                <p>• 约束路径方法</p>
                <p>• 释放节点方法</p>
                <p>• 符号自由方法</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>算法实现</h2>
        <div class="algorithm-section">
          <div class="algorithm-step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>初始化</h3>
              <p>设置初始配置和参数</p>
            </div>
          </div>
          
          <div class="algorithm-step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>平衡化</h3>
              <p>达到统计平衡态</p>
            </div>
          </div>
          
          <div class="algorithm-step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>采样</h3>
              <p>收集统计样本</p>
            </div>
          </div>
          
          <div class="algorithm-step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>分析</h3>
              <p>计算物理量和误差</p>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>应用实例</h2>
        <div class="example-box">
          <h3>例1：液氦的超流性</h3>
          <p>强相关玻色系统：</p>
          <div class="equation-block">
            <p>PIMC计算超流密度</p>
            <p>绕数统计</p>
            <p>与实验精确符合</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：高温超导体</h3>
          <p>强关联电子系统：</p>
          <div class="equation-block">
            <p>Hubbard模型的QMC研究</p>
            <p>反铁磁序和d波配对</p>
            <p>相图的确定</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：量子点系统</h3>
          <p>有限尺寸效应：</p>
          <div class="equation-block">
            <p>精确对角化的基准</p>
            <p>库仑阻塞效应</p>
            <p>Wigner晶体化</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>优势与局限</h2>
        <div class="pros-cons-section">
          <div class="pros-card">
            <h3>✅ 优势</h3>
            <ul>
              <li>原则上精确</li>
              <li>处理强相关系统</li>
              <li>可并行计算</li>
              <li>系统误差可控</li>
              <li>适用范围广</li>
            </ul>
          </div>

          <div class="cons-card">
            <h3>❌ 局限性</h3>
            <ul>
              <li>费米子符号问题</li>
              <li>计算成本高</li>
              <li>统计误差</li>
              <li>动力学困难</li>
              <li>系统尺寸限制</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-developments">
          <div class="development-item">
            <h3>🚀 算法改进</h3>
            <p>更高效的采样方法</p>
          </div>
          <div class="development-item">
            <h3>🎯 符号问题</h3>
            <p>新的解决方案</p>
          </div>
          <div class="development-item">
            <h3>💻 高性能计算</h3>
            <p>GPU加速和并行化</p>
          </div>
          <div class="development-item">
            <h3>🌐 机器学习</h3>
            <p>神经网络波函数</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>QMC是处理强相关系统的有力工具</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>不同方法适用于不同物理问题</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>符号问题是主要挑战</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>在凝聚态物理中应用广泛</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>算法和硬件不断发展</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6_4',
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
  border-bottom: 3px solid #e83e8c;
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
  background: linear-gradient(135deg, #e83e8c 0%, #fd7e14 100%);
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
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #880e4f;
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

.pimc-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.algorithm-section {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.algorithm-step {
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-number {
  background: #e83e8c;
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
  border-left: 4px solid #e83e8c;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

/* 新增样式 - 数学基础部分 */
.mathematical-foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
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

/* 高级方法部分 */
.advanced-methods-grid {
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

/* 计算优化部分 */
.computational-optimization-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.optimization-card {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b3 100%);
  border: 1px solid #ffcc80;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.optimization-card .concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.optimization-card h3 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

/* 误差分析部分 */
.error-analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.error-category {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  border: 1px solid #f48fb1;
  border-radius: 15px;
  padding: 2rem;
}

.error-category h3 {
  color: #880e4f;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.error-items {
  display: grid;
  gap: 1.5rem;
}

.error-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #e91e63;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.error-item h4 {
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

.modern-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.development-item {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.development-item h3 {
  color: #856404;
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
  background: linear-gradient(135deg, #e83e8c 0%, #fd7e14 100%);
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
  
  .algorithm-step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>