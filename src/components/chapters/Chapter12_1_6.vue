<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.6 声子气体的热容</h1>
      <p class="chapter-subtitle">Heat Capacity of Phonon Gas</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        声子气体的热容是固体热力学性质中最重要的物理量之一，
        它直接反映了晶格振动对固体热性质的贡献。
        从经典的Dulong-Petit定律到Einstein模型，再到Debye理论，
        人们对固体热容的理解经历了从经验到理论的深刻发展。
        声子气体模型将晶格振动视为非相互作用的准粒子集合，
        为理解固体热容提供了微观的量子力学基础。
        本节将系统地介绍声子气体热容的理论框架，
        包括Einstein模型、Debye模型以及更精确的理论处理，
        并讨论各种修正效应和实验观测，
        为理解固体的热力学性质提供完整的理论基础。
      </p>
    </div>

    <div class="content-section">
      <h2>经典理论回顾</h2>
      
      <h3>Dulong-Petit定律</h3>
      <div class="formula-box">
        <p><strong>经典结果：</strong></p>
        <p>C = 3Nk_B = 3R (每摩尔)</p>
        <p><strong>能量均分定理：</strong></p>
        <p>⟨E⟩ = (1/2)k_B T × (自由度数)</p>
        <p><strong>三维晶格：</strong></p>
        <p>每个原子3个自由度</p>
        <p><strong>适用条件：</strong></p>
        <p>高温极限：T >> θ_D</p>
      </div>

      <div class="concept-box">
        <h4>经典理论的局限性</h4>
        <ul>
          <li><strong>低温失效：</strong>低温下热容趋于零</li>
          <li><strong>量子效应：</strong>忽略了量子统计</li>
          <li><strong>频率分布：</strong>未考虑声子频谱</li>
          <li><strong>零点能：</strong>忽略零点振动能</li>
        </ul>
      </div>

      <h3>经典与量子的对比</h3>
      <div class="formula-box">
        <p><strong>经典振子能量：</strong></p>
        <p>⟨E_cl⟩ = k_B T</p>
        <p><strong>量子振子能量：</strong></p>
        <p>⟨E_qu⟩ = ℏω[1/2 + 1/(e^{βℏω} - 1)]</p>
        <p><strong>高温极限：</strong></p>
        <p>βℏω << 1: ⟨E_qu⟩ → k_B T</p>
        <p><strong>低温极限：</strong></p>
        <p>βℏω >> 1: ⟨E_qu⟩ → ℏω/2</p>
      </div>

      <div class="theory-box">
        <h4>量子修正的物理意义</h4>
        <ul>
          <li><strong>零点能：</strong>即使在T=0也有有限能量</li>
          <li><strong>激发阈值：</strong>需要足够能量激发高频模式</li>
          <li><strong>统计分布：</strong>玻色-爱因斯坦分布</li>
          <li><strong>温度依赖：</strong>非线性的温度依赖关系</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Einstein模型</h2>
      
      <h3>模型假设</h3>
      <div class="formula-box">
        <p><strong>基本假设：</strong></p>
        <p>所有原子以相同频率ω_E振动</p>
        <p><strong>哈密顿量：</strong></p>
        <p>H = Σᵢ ℏω_E(nᵢ + 1/2)</p>
        <p><strong>配分函数：</strong></p>
        <p>Z = [2sinh(βℏω_E/2)]^{-3N}</p>
        <p><strong>Einstein温度：</strong></p>
        <p>θ_E = ℏω_E/k_B</p>
      </div>

      <div class="concept-box">
        <h4>Einstein模型的特点</h4>
        <ul>
          <li><strong>单一频率：</strong>所有模式具有相同频率</li>
          <li><strong>独立振子：</strong>各振子之间无相互作用</li>
          <li><strong>量子统计：</strong>考虑玻色-爱因斯坦统计</li>
          <li><strong>解析解：</strong>可以得到解析表达式</li>
        </ul>
      </div>

      <h3>热容计算</h3>
      <div class="formula-box">
        <p><strong>内能：</strong></p>
        <p>U = 3Nℏω_E[1/2 + 1/(e^{θ_E/T} - 1)]</p>
        <p><strong>Einstein热容：</strong></p>
        <p>C_E = 3Nk_B(θ_E/T)² e^{θ_E/T}/(e^{θ_E/T} - 1)²</p>
        <p><strong>高温极限：</strong></p>
        <p>T >> θ_E: C_E → 3Nk_B</p>
        <p><strong>低温极限：</strong></p>
        <p>T << θ_E: C_E ∝ e^{-θ_E/T}</p>
      </div>

      <div class="theory-box">
        <h4>Einstein模型的成功与不足</h4>
        <ul>
          <li><strong>成功：</strong>解释了热容的温度依赖</li>
          <li><strong>成功：</strong>预言了低温下热容趋于零</li>
          <li><strong>不足：</strong>低温行为不符合T³定律</li>
          <li><strong>不足：</strong>忽略了声学支的贡献</li>
        </ul>
      </div>

      <h3>Einstein函数</h3>
      <div class="formula-box">
        <p><strong>Einstein函数定义：</strong></p>
        <p>E₃(x) = 3x²e^x/(e^x - 1)²</p>
        <p><strong>参数：</strong></p>
        <p>x = θ_E/T</p>
        <p><strong>热容表达式：</strong></p>
        <p>C_E = Nk_B E₃(θ_E/T)</p>
        <p><strong>渐近行为：</strong></p>
        <p>x → 0: E₃(x) → 3</p>
        <p>x → ∞: E₃(x) → 3x²e^{-x}</p>
      </div>

      <div class="theory-box">
        <h4>Einstein函数的性质</h4>
        <ul>
          <li><strong>单调性：</strong>随x单调递减</li>
          <li><strong>凸性：</strong>具有凸函数性质</li>
          <li><strong>归一化：</strong>高温极限为3</li>
          <li><strong>指数衰减：</strong>低温下指数衰减</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Debye模型</h2>
      
      <h3>模型假设</h3>
      <div class="formula-box">
        <p><strong>连续介质近似：</strong></p>
        <p>ω = v|k| (线性色散)</p>
        <p><strong>Debye截止频率：</strong></p>
        <p>ω_D = v(6π²n)^{1/3}</p>
        <p><strong>Debye温度：</strong></p>
        <p>θ_D = ℏω_D/k_B</p>
        <p><strong>态密度：</strong></p>
        <p>g(ω) = 9Nω²/ω_D³ (ω ≤ ω_D)</p>
      </div>

      <div class="concept-box">
        <h4>Debye模型的改进</h4>
        <ul>
          <li><strong>连续频谱：</strong>考虑频率的连续分布</li>
          <li><strong>声学支：</strong>重点考虑长波声学模式</li>
          <li><strong>各向同性：</strong>假设各向同性的弹性性质</li>
          <li><strong>截止频率：</strong>引入物理合理的截止</li>
        </ul>
      </div>

      <h3>热容计算</h3>
      <div class="formula-box">
        <p><strong>内能：</strong></p>
        <p>U = ∫₀^{ω_D} dω g(ω)ℏω[1/2 + 1/(e^{βℏω} - 1)]</p>
        <p><strong>Debye热容：</strong></p>
        <p>C_D = 9Nk_B(T/θ_D)³ ∫₀^{θ_D/T} dx x⁴e^x/(e^x - 1)²</p>
        <p><strong>Debye函数：</strong></p>
        <p>D₃(y) = (3/y³) ∫₀^y dx x⁴e^x/(e^x - 1)²</p>
        <p><strong>热容表达式：</strong></p>
        <p>C_D = 3Nk_B D₃(θ_D/T)</p>
      </div>

      <div class="theory-box">
        <h4>Debye函数的性质</h4>
        <ul>
          <li><strong>高温极限：</strong>y → 0时D₃(y) → 1</li>
          <li><strong>低温极限：</strong>y → ∞时D₃(y) → 4π⁴/(5y³)</li>
          <li><strong>单调性：</strong>随y单调递减</li>
          <li><strong>数值计算：</strong>需要数值积分</li>
        </ul>
      </div>

      <h3>温度区间的行为</h3>
      <div class="formula-box">
        <p><strong>高温极限 (T >> θ_D)：</strong></p>
        <p>C_D → 3Nk_B (Dulong-Petit)</p>
        <p><strong>低温极限 (T << θ_D)：</strong></p>
        <p>C_D = (12π⁴/5)Nk_B(T/θ_D)³</p>
        <p><strong>T³定律：</strong></p>
        <p>C ∝ T³ (低温)</p>
        <p><strong>数值系数：</strong></p>
        <p>12π⁴/5 ≈ 233.8</p>
      </div>

      <div class="theory-box">
        <h4>T³定律的物理意义</h4>
        <ul>
          <li><strong>长波模式：</strong>低温下只有长波模式被激发</li>
          <li><strong>态密度：</strong>g(ω) ∝ ω²的贡献</li>
          <li><strong>统计因子：</strong>玻色分布的低温行为</li>
          <li><strong>实验验证：</strong>与实验观测高度吻合</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>精确的声子气体理论</h2>
      
      <h3>真实声子谱</h3>
      <div class="formula-box">
        <p><strong>一般表达式：</strong></p>
        <p>C = k_B Σₖ,λ (ℏω_{k,λ}/k_B T)² e^{ℏω_{k,λ}/k_B T}/(e^{ℏω_{k,λ}/k_B T} - 1)²</p>
        <p><strong>态密度表示：</strong></p>
        <p>C = k_B ∫₀^{∞} dω g(ω)(ℏω/k_B T)² e^{ℏω/k_B T}/(e^{ℏω/k_B T} - 1)²</p>
        <p><strong>声子态密度：</strong></p>
        <p>g(ω) = Σₖ,λ δ(ω - ω_{k,λ})</p>
        <p><strong>支的贡献：</strong></p>
        <p>C = C_{acoustic} + C_{optical}</p>
      </div>

      <div class="concept-box">
        <h4>真实谱的特征</h4>
        <ul>
          <li><strong>多支结构：</strong>声学支和光学支</li>
          <li><strong>色散关系：</strong>非线性色散</li>
          <li><strong>各向异性：</strong>晶体对称性的影响</li>
          <li><strong>能隙结构：</strong>光学支的能隙</li>
        </ul>
      </div>

      <h3>声学支和光学支的贡献</h3>
      <div class="formula-box">
        <p><strong>声学支 (低频)：</strong></p>
        <p>ω_{ac}(k) ≈ v|k| (k → 0)</p>
        <p><strong>光学支 (高频)：</strong></p>
        <p>ω_{op}(k) ≈ ω₀ + α k² (k → 0)</p>
        <p><strong>低温贡献：</strong></p>
        <p>C_{ac} ∝ T³, C_{op} ∝ e^{-ω₀/k_B T}</p>
        <p><strong>高温贡献：</strong></p>
        <p>C_{ac} + C_{op} → 3Nk_B</p>
      </div>

      <div class="theory-box">
        <h4>不同支的温度依赖</h4>
        <ul>
          <li><strong>声学支：</strong>低温主导，T³行为</li>
          <li><strong>光学支：</strong>高温激发，Einstein型</li>
          <li><strong>交叉温度：</strong>两种贡献相当的温度</li>
          <li><strong>总热容：</strong>两种贡献的叠加</li>
        </ul>
      </div>

      <h3>多原子晶体</h3>
      <div class="formula-box">
        <p><strong>原胞中s个原子：</strong></p>
        <p>3s个支：3个声学支 + 3(s-1)个光学支</p>
        <p><strong>总热容：</strong></p>
        <p>C = Σᵢ₌₁³ˢ Cᵢ</p>
        <p><strong>Einstein近似：</strong></p>
        <p>C ≈ 3k_B + 3(s-1)k_B E₃(θᵢ/T)</p>
        <p><strong>混合模型：</strong></p>
        <p>C = C_{Debye} + Σ_{optical} C_{Einstein,i}</p>
      </div>

      <div class="theory-box">
        <h4>复杂晶体的特点</h4>
        <ul>
          <li><strong>多个特征温度：</strong>每个光学支有自己的Einstein温度</li>
          <li><strong>阶梯状激发：</strong>不同温度下不同支被激发</li>
          <li><strong>实验拟合：</strong>需要多参数拟合</li>
          <li><strong>第一性原理：</strong>现代计算可直接计算</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子统计效应</h2>
      
      <h3>玻色-爱因斯坦分布</h3>
      <div class="formula-box">
        <p><strong>声子占据数：</strong></p>
        <p>⟨n(ω)⟩ = 1/(e^{βℏω} - 1)</p>
        <p><strong>能量密度：</strong></p>
        <p>u(ω) = g(ω)ℏω⟨n(ω)⟩</p>
        <p><strong>热容密度：</strong></p>
        <p>c(ω) = g(ω)k_B(βℏω)²e^{βℏω}/(e^{βℏω} - 1)²</p>
        <p><strong>总热容：</strong></p>
        <p>C = ∫₀^{∞} dω c(ω)</p>
      </div>

      <div class="concept-box">
        <h4>量子统计的特征</h4>
        <ul>
          <li><strong>无化学势：</strong>声子数不守恒</li>
          <li><strong>玻色统计：</strong>整数自旋粒子</li>
          <li><strong>温度激发：</strong>热激发产生声子</li>
          <li><strong>相干性：</strong>量子相干效应</li>
        </ul>
      </div>

      <h3>零点振动的贡献</h3>
      <div class="formula-box">
        <p><strong>零点能：</strong></p>
        <p>E₀ = (1/2)Σₖ,λ ℏω_{k,λ}</p>
        <p><strong>零点能密度：</strong></p>
        <p>u₀ = (1/2)∫₀^{∞} dω g(ω)ℏω</p>
        <p><strong>热容贡献：</strong></p>
        <p>∂E₀/∂T = 0 (直接贡献为零)</p>
        <p><strong>间接效应：</strong></p>
        <p>通过热膨胀影响频率</p>
      </div>

      <div class="theory-box">
        <h4>零点能的物理意义</h4>
        <ul>
          <li><strong>量子起源：</strong>海森堡不确定性原理</li>
          <li><strong>温度无关：</strong>不直接贡献热容</li>
          <li><strong>体积效应：</strong>通过体积变化间接影响</li>
          <li><strong>相变影响：</strong>在相变点可能重要</li>
        </ul>
      </div>

      <h3>高阶量子修正</h3>
      <div class="formula-box">
        <p><strong>非谐效应：</strong></p>
        <p>H_{anh} = Σ V₃ + Σ V₄ + ...</p>
        <p><strong>声子-声子相互作用：</strong></p>
        <p>修正声子频率和寿命</p>
        <p><strong>热膨胀效应：</strong></p>
        <p>ω(T) = ω₀[1 + γα(T - T₀)]</p>
        <p><strong>修正热容：</strong></p>
        <p>C = C_{harmonic} + C_{anharmonic}</p>
      </div>

      <div class="theory-box">
        <h4>非谐效应的表现</h4>
        <ul>
          <li><strong>频率软化：</strong>温度升高频率降低</li>
          <li><strong>线宽展宽：</strong>声子获得有限寿命</li>
          <li><strong>热膨胀：</strong>晶格常数的温度依赖</li>
          <li><strong>高温偏离：</strong>偏离Dulong-Petit定律</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验测量与比较</h2>
      
      <h3>量热法测量</h3>
      <div class="experiment-box">
        <h4>实验技术</h4>
        <ul>
          <li><strong>绝热量热法：</strong>精确测量热容</li>
          <li><strong>差示扫描量热法：</strong>DSC技术</li>
          <li><strong>低温技术：</strong>稀释制冷机达到mK温度</li>
          <li><strong>高温测量：</strong>激光加热技术</li>
        </ul>
      </div>

      <h3>典型材料的热容</h3>
      <div class="experiment-box">
        <h4>实验结果</h4>
        <ul>
          <li><strong>金刚石：</strong>θ_D ≈ 2230K，硬材料</li>
          <li><strong>铅：</strong>θ_D ≈ 105K，软材料</li>
          <li><strong>硅：</strong>θ_D ≈ 645K，半导体</li>
          <li><strong>氧化物：</strong>复杂的多支结构</li>
        </ul>
      </div>

      <h3>理论与实验的比较</h3>
      <div class="formula-box">
        <p><strong>拟合参数：</strong></p>
        <p>Debye温度θ_D</p>
        <p><strong>拟合质量：</strong></p>
        <p>R² = 1 - Σ(C_{exp} - C_{theory})²/Σ(C_{exp} - ⟨C_{exp}⟩)²</p>
        <p><strong>偏差分析：</strong></p>
        <p>δC = C_{exp} - C_{theory}</p>
        <p><strong>系统误差：</strong></p>
        <p>高温偏离、低温偏离</p>
      </div>

      <div class="theory-box">
        <h4>理论模型的适用性</h4>
        <ul>
          <li><strong>Debye模型：</strong>简单晶体，低温区间</li>
          <li><strong>Einstein模型：</strong>光学支主导的温度区间</li>
          <li><strong>混合模型：</strong>复杂晶体的全温度范围</li>
          <li><strong>第一性原理：</strong>最精确的理论预测</li>
        </ul>
      </div>

      <h3>异常热容现象</h3>
      <div class="experiment-box">
        <h4>特殊情况</h4>
        <ul>
          <li><strong>Schottky异常：</strong>二能级系统的贡献</li>
          <li><strong>磁性贡献：</strong>磁矩的热容贡献</li>
          <li><strong>电子贡献：</strong>金属中的电子热容</li>
          <li><strong>相变异常：</strong>相变点的热容发散</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展与应用</h2>
      
      <h3>第一性原理计算</h3>
      <div class="application-box">
        <h4>计算方法</h4>
        <ul>
          <li><strong>密度泛函理论：</strong>计算声子谱</li>
          <li><strong>线性响应理论：</strong>动力学矩阵</li>
          <li><strong>准谐近似：</strong>包含体积效应</li>
          <li><strong>非谐修正：</strong>高阶相互作用</li>
        </ul>
      </div>

      <h3>纳米材料的热容</h3>
      <div class="application-box">
        <h4>尺寸效应</h4>
        <ul>
          <li><strong>表面效应：</strong>表面声子模式</li>
          <li><strong>量子限制：</strong>低维系统的修正</li>
          <li><strong>界面散射：</strong>声子的界面散射</li>
          <li><strong>尺寸依赖：</strong>Debye温度的尺寸依赖</li>
        </ul>
      </div>

      <h3>热电材料应用</h3>
      <div class="application-box">
        <h4>性能优化</h4>
        <ul>
          <li><strong>晶格热导：</strong>通过热容理解热导</li>
          <li><strong>声子工程：</strong>调控声子输运</li>
          <li><strong>纳米结构：</strong>降低晶格热导</li>
          <li><strong>性能评估：</strong>ZT值的优化</li>
        </ul>
      </div>

      <h3>量子材料中的热容</h3>
      <div class="application-box">
        <h4>新奇现象</h4>
        <ul>
          <li><strong>拓扑声子：</strong>拓扑保护的声子模式</li>
          <li><strong>量子自旋液体：</strong>磁激发的热容</li>
          <li><strong>超导体：</strong>超导能隙的热容异常</li>
          <li><strong>量子临界点：</strong>临界涨落的贡献</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>数值计算方法</h2>
      
      <h3>Debye积分的计算</h3>
      <div class="formula-box">
        <p><strong>Debye函数：</strong></p>
        <p>D_n(x) = (n/x^n) ∫₀ˣ dt t^n e^t/(e^t - 1)²</p>
        <p><strong>数值积分：</strong></p>
        <p>高斯求积、自适应积分</p>
        <p><strong>渐近展开：</strong></p>
        <p>大x和小x的渐近公式</p>
        <p><strong>查表插值：</strong></p>
        <p>预计算表格和插值</p>
      </div>

      <h3>声子谱的计算</h3>
      <div class="formula-box">
        <p><strong>动力学矩阵：</strong></p>
        <p>D_{αβ}(k) = (1/√m_α m_β) Σ_R Φ_{αβ}(R)e^{ik·R}</p>
        <p><strong>本征值问题：</strong></p>
        <p>D(k)e_λ(k) = ω²_λ(k)e_λ(k)</p>
        <p><strong>态密度：</strong></p>
        <p>g(ω) = (1/N) Σ_{k,λ} δ(ω - ω_λ(k))</p>
        <p><strong>数值方法：</strong></p>
        <p>四面体方法、高斯展宽</p>
      </div>

      <h3>蒙特卡罗方法</h3>
      <div class="formula-box">
        <p><strong>重要性采样：</strong></p>
        <p>根据玻色分布采样</p>
        <p><strong>马尔可夫链：</strong></p>
        <p>构造满足详细平衡的链</p>
        <p><strong>统计误差：</strong></p>
        <p>σ = √⟨O²⟩ - ⟨O⟩²/√N</p>
        <p><strong>自关联时间：</strong></p>
        <p>τ_int = 1 + 2Σ_{t=1}^∞ ρ(t)</p>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          声子气体的热容理论是固体物理学中的经典课题，
          从Einstein的开创性工作到Debye的系统理论，
          再到现代的第一性原理计算，展现了理论物理发展的完整脉络。
          Einstein模型虽然简单，但成功地引入了量子统计的概念，
          解释了固体热容的基本温度依赖关系。
          Debye模型通过考虑声子频谱的连续分布，
          特别是低频声学支的贡献，成功预言了低温下的T³定律，
          这一预言得到了广泛的实验验证。
          现代理论进一步考虑了真实晶体的复杂声子谱、
          非谐效应、量子修正等因素，
          使得理论预测与实验观测达到了很高的一致性。
          声子热容理论不仅是理解固体热力学性质的基础，
          也为热电材料、纳米材料等应用领域提供了重要的理论指导。
          随着计算能力的提升和实验技术的进步，
          声子热容的研究仍在不断深入，
          特别是在量子材料、拓扑材料等前沿领域展现出新的活力。
        </p>
      </div>
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
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #2c5aa0;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c5aa0;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2c5aa0;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1ecf4;
}

.content-section h3 {
  color: #34495e;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem 0;
}

.content-section h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-section p {
  margin-bottom: 1rem;
  text-align: justify;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.formula-box p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
}

.concept-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.theory-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.experiment-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);
}

.application-box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(250, 112, 154, 0.4);
}

.summary-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 8px 25px rgba(168, 237, 234, 0.4);
  border-left: 5px solid #2c5aa0;
}

.concept-box ul,
.theory-box ul,
.experiment-box ul,
.application-box ul {
  list-style-type: none;
  padding-left: 0;
}

.concept-box li,
.theory-box li,
.experiment-box li,
.application-box li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-box li::before,
.theory-box li::before,
.experiment-box li::before,
.application-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
}

.content-section ul {
  padding-left: 2rem;
}

.content-section li {
  margin: 0.5rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-section h2 {
    font-size: 1.5rem;
  }
  
  .content-section h3 {
    font-size: 1.3rem;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box {
    padding: 1rem;
  }
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    margin: 0;
    padding: 0;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box,
  .summary-box {
    background: #f8f9fa !important;
    color: #333 !important;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>