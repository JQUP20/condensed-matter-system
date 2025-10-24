<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.3 三次谐波与Kerr效应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">三阶非线性</span>
        <span class="reading-time">预计阅读时间: 50分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>三阶非线性光学效应</h2>
        <p class="lead-text">
          三阶非线性光学效应是所有材料都具有的普遍现象，包括三次谐波产生(THG)、
          光学Kerr效应、四波混频等重要过程。与二阶效应不同，三阶效应不受中心对称性限制，
          在中心对称材料中也能观察到。这些效应在超快光学、全光开关、光学限幅等领域有重要应用。
        </p>
      </section>

      <section class="content-section">
        <h2>三次谐波产生</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>基本原理</h3>
            <p>三次谐波产生的物理机制</p>
            <div class="mathematical-content">
              <h4>三阶极化：</h4>
              <div class="equation-block">
                <p>P⁽³⁾(3ω) = ε₀χ⁽³⁾(-3ω;ω,ω,ω)E³(ω)</p>
                <p>频率转换: ω + ω + ω → 3ω</p>
                <p>三光子过程</p>
              </div>
              
              <h4>相位匹配条件：</h4>
              <div class="equation-block">
                <p>Δk = k₃ω - 3k_ω = 0</p>
                <p>n(3ω) = n(ω)</p>
                <p>色散补偿要求</p>
              </div>
              
              <h4>转换效率：</h4>
              <div class="equation-block">
                <p>P₃ω ∝ |χ⁽³⁾|²I³_ω L²sinc²(ΔkL/2)</p>
                <p>三次方功率依赖</p>
                <p>相位匹配长度限制</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>材料特性</h3>
            <p>不同材料的三次谐波响应</p>
            <div class="mathematical-content">
              <h4>石英玻璃：</h4>
              <div class="equation-block">
                <p>χ⁽³⁾ ≈ 2.8×10⁻²² m²/V²</p>
                <p>宽透明窗口</p>
                <p>低损耗</p>
                <p>各向同性</p>
              </div>
              
              <h4>半导体：</h4>
              <div class="equation-block">
                <p>GaAs: χ⁽³⁾ ≈ 1.5×10⁻¹⁷ m²/V²</p>
                <p>Si: χ⁽³⁾ ≈ 2.1×10⁻¹⁸ m²/V²</p>
                <p>共振增强</p>
                <p>载流子效应</p>
              </div>
              
              <h4>有机材料：</h4>
              <div class="equation-block">
                <p>大π共轭系统</p>
                <p>可设计性强</p>
                <p>快响应时间</p>
                <p>低损伤阈值</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>实验技术</h3>
            <p>三次谐波测量方法</p>
            <div class="mathematical-content">
              <h4>Z-scan技术：</h4>
              <div class="equation-block">
                <p>样品沿光轴移动</p>
                <p>透射率变化测量</p>
                <p>非线性折射率n₂</p>
                <p>非线性吸收β</p>
              </div>
              
              <h4>四波混频：</h4>
              <div class="equation-block">
                <p>ω₁ + ω₂ - ω₃ → ω₄</p>
                <p>相位共轭</p>
                <p>光谱测量</p>
                <p>时间分辨</p>
              </div>
              
              <h4>泵浦-探测：</h4>
              <div class="equation-block">
                <p>强泵浦光调制</p>
                <p>弱探测光检测</p>
                <p>超快动力学</p>
                <p>载流子弛豫</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>器件应用与技术发展</h2>
        
        <div class="applications-section">
          <div class="application-category">
            <h3>光通信器件</h3>
            <div class="application-content">
              <h4>全光开关：</h4>
              <ul>
                <li>Kerr效应开关: 超快响应 (<1 ps)</li>
                <li>马赫-曾德尔干涉仪结构</li>
                <li>环形谐振器开关</li>
                <li>光子晶体开关</li>
              </ul>
              
              <h4>光纤非线性器件：</h4>
              <div class="equation-block">
                <p>超连续谱产生</p>
                <p>拉曼放大器</p>
                <p>四波混频波长转换</p>
                <p>光孤子传输</p>
              </div>
              
              <h4>集成光子器件：</h4>
              <ul>
                <li>硅基光子芯片</li>
                <li>III-V族化合物器件</li>
                <li>铌酸锂薄膜器件</li>
                <li>聚合物波导器件</li>
              </ul>
            </div>
          </div>
          
          <div class="application-category">
            <h3>激光技术应用</h3>
            <div class="application-content">
              <h4>超快激光器：</h4>
              <ul>
                <li>可饱和吸收体锁模</li>
                <li>Kerr透镜锁模</li>
                <li>非线性偏振旋转</li>
                <li>啁啾脉冲放大</li>
              </ul>
              
              <h4>激光频率变换：</h4>
              <div class="equation-block">
                <p>三次谐波产生</p>
                <p>和频/差频产生</p>
                <p>光参量振荡</p>
                <p>受激拉曼散射</p>
              </div>
              
              <h4>激光脉冲整形：</h4>
              <ul>
                <li>色散补偿</li>
                <li>脉冲压缩</li>
                <li>时间透镜</li>
                <li>相位调制</li>
              </ul>
            </div>
          </div>
          
          <div class="application-category">
            <h3>生物医学应用</h3>
            <div class="application-content">
              <h4>多光子显微镜：</h4>
              <ul>
                <li>双光子荧光显微镜</li>
                <li>三光子深层成像</li>
                <li>相干反斯托克斯拉曼散射(CARS)</li>
                <li>受激发射损耗(STED)显微镜</li>
              </ul>
              
              <h4>光动力治疗：</h4>
              <div class="equation-block">
                <p>双光子激发光敏剂</p>
                <p>深层组织穿透</p>
                <p>精确空间定位</p>
                <p>减少光毒性</p>
              </div>
              
              <h4>激光手术：</h4>
              <ul>
                <li>飞秒激光眼科手术</li>
                <li>多光子组织切割</li>
                <li>血管焊接</li>
                <li>神经刺激</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>前沿研究与发展趋势</h2>
        
        <div class="research-trends">
          <div class="trend-section">
            <h3>量子非线性光学</h3>
            <div class="trend-content">
              <h4>量子Kerr效应：</h4>
              <p>在单光子水平研究Kerr非线性，探索量子光学与非线性光学的交叉领域。</p>
              
              <h4>关键现象：</h4>
              <ul>
                <li>光子阻塞效应</li>
                <li>量子孤子</li>
                <li>压缩态产生</li>
                <li>纠缠光子对</li>
              </ul>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>量子计算</p>
                <p>量子通信</p>
                <p>量子传感</p>
                <p>量子模拟</p>
              </div>
            </div>
          </div>
          
          <div class="trend-section">
            <h3>超材料非线性光学</h3>
            <div class="trend-content">
              <h4>人工结构设计：</h4>
              <p>通过精心设计的亚波长结构实现天然材料无法达到的非线性光学性质。</p>
              
              <h4>特殊性质：</h4>
              <ul>
                <li>负折射率</li>
                <li>零折射率</li>
                <li>巨大非线性增强</li>
                <li>可调谐响应</li>
              </ul>
              
              <h4>制备技术：</h4>
              <div class="equation-block">
                <p>电子束光刻</p>
                <p>聚焦离子束</p>
                <p>纳米压印</p>
                <p>自组装技术</p>
              </div>
            </div>
          </div>
          
          <div class="trend-section">
            <h3>机器学习辅助设计</h3>
            <div class="trend-content">
              <h4>材料发现：</h4>
              <p>利用机器学习算法预测和设计具有特定非线性光学性质的新材料。</p>
              
              <h4>优化方法：</h4>
              <ul>
                <li>遗传算法</li>
                <li>神经网络</li>
                <li>贝叶斯优化</li>
                <li>强化学习</li>
              </ul>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>分子设计</p>
                <p>器件优化</p>
                <p>实验参数调节</p>
                <p>性能预测</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>总结与展望</h2>
        
        <div class="summary-section">
          <div class="key-points">
            <h3>关键要点</h3>
            <ul>
              <li><strong>理论基础：</strong>三阶非线性光学效应源于材料的三阶极化率，包括三次谐波产生和Kerr效应</li>
              <li><strong>物理机制：</strong>电子云非谐振动、虚跃迁过程和多光子相互作用</li>
              <li><strong>实验技术：</strong>Z-scan、四波混频、光学Kerr门等测量方法</li>
              <li><strong>材料体系：</strong>从传统无机材料到新型纳米材料的广泛应用</li>
              <li><strong>器件应用：</strong>光通信、激光技术、生物医学等多个领域</li>
            </ul>
          </div>
          
          <div class="future-directions">
            <h3>发展方向</h3>
            <ul>
              <li><strong>量子非线性光学：</strong>探索单光子非线性和量子效应</li>
              <li><strong>超材料设计：</strong>人工结构实现超常非线性性质</li>
              <li><strong>集成光子学：</strong>片上非线性光学器件</li>
              <li><strong>新材料探索：</strong>二维材料、拓扑材料等新体系</li>
              <li><strong>智能设计：</strong>机器学习辅助材料和器件优化</li>
            </ul>
          </div>
          
          <div class="challenges">
            <h3>技术挑战</h3>
            <ul>
              <li>提高非线性转换效率</li>
              <li>降低功率阈值</li>
              <li>扩展工作波长范围</li>
              <li>改善材料稳定性</li>
              <li>实现大规模集成</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>光学Kerr效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>Kerr效应机制</h3>
            <p>强度依赖的折射率变化</p>
            <div class="mathematical-content">
              <h4>非线性折射率：</h4>
              <div class="equation-block">
                <p>n = n₀ + n₂I</p>
                <p>n₂ = (3/4n₀²ε₀c)Re[χ⁽³⁾]</p>
                <p>强度调制折射率</p>
              </div>
              
              <h4>相位调制：</h4>
              <div class="equation-block">
                <p>Δφ = (2π/λ)n₂IL</p>
                <p>自相位调制(SPM)</p>
                <p>交叉相位调制(XPM)</p>
              </div>
              
              <h4>时间响应：</h4>
              <div class="equation-block">
                <p>电子Kerr效应: <1 fs</p>
                <p>分子取向: ps-ns</p>
                <p>电致伸缩: ns-μs</p>
                <p>热效应: μs-ms</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌈</div>
            <h3>自聚焦效应</h3>
            <p>非线性介质中的光束传播</p>
            <div class="mathematical-content">
              <h4>自聚焦条件：</h4>
              <div class="equation-block">
                <p>n₂ > 0 (正Kerr效应)</p>
                <p>P > P_cr = λ²/(2πn₀n₂)</p>
                <p>临界功率</p>
              </div>
              
              <h4>光束演化：</h4>
              <div class="equation-block">
                <p>∂A/∂z + (i/2k)∇²⊥A + ikn₂|A|²A = 0</p>
                <p>非线性薛定谔方程</p>
                <p>孤子解</p>
              </div>
              
              <h4>应用与限制：</h4>
              <div class="equation-block">
                <p>光纤中的孤子</p>
                <p>超连续谱产生</p>
                <p>光学损伤</p>
                <p>多丝化现象</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⏱️</div>
            <h3>超快Kerr效应</h3>
            <p>飞秒时间尺度的响应</p>
            <div class="mathematical-content">
              <h4>电子响应：</h4>
              <div class="equation-block">
                <p>瞬时响应(<1 fs)</p>
                <p>虚电子跃迁</p>
                <p>束缚电子极化</p>
                <p>Raman散射</p>
              </div>
              
              <h4>核响应：</h4>
              <div class="equation-block">
                <p>分子振动(~100 fs)</p>
                <p>分子转动(ps)</p>
                <p>声子模式</p>
                <p>结构弛豫</p>
              </div>
              </div>
            </div>
          </div>
      </section>

      <section class="content-section">
        <h2>高级理论与物理机制</h2>
        
        <div class="advanced-theory">
          <div class="theory-card">
            <h3>三阶非线性极化理论</h3>
            <div class="theory-content">
              <h4>微观起源：</h4>
              <p>三阶非线性源于电子云的非谐振动和虚电子跃迁过程，在强电场作用下电子分布发生畸变。</p>
              
              <h4>量子力学描述：</h4>
              <div class="equation-block">
                <p>χ⁽³⁾(-ω₄;ω₁,ω₂,ω₃) = (N/ε₀) Σₙₘₗ [μₙₘμₘₗμₗₖμₖₙ]/[(ωₙₘ-ω₁-iΓₙₘ)(ωₙₗ-ω₁-ω₂-iΓₙₗ)(ωₙₖ-ω₁-ω₂-ω₃-iΓₙₖ)]</p>
                <p>四能级模型</p>
                <p>共振增强效应</p>
              </div>
              
              <h4>对称性分析：</h4>
              <div class="equation-block">
                <p>中心对称材料: χ⁽³⁾ ≠ 0</p>
                <p>张量元素数目: 81 → 21 (对称性约化)</p>
                <p>主要独立分量: χ₁₁₁₁, χ₁₁₂₂, χ₁₂₁₂</p>
              </div>
              
              <h4>色散关系：</h4>
              <div class="equation-block">
                <p>χ⁽³⁾(ω) = χ'⁽³⁾(ω) + iχ''⁽³⁾(ω)</p>
                <p>Kramers-Kronig关系</p>
                <p>因果性约束</p>
              </div>
            </div>
          </div>
          
          <div class="theory-card">
            <h3>相位匹配与准相位匹配</h3>
            <div class="theory-content">
              <h4>相位失配影响：</h4>
              <p>三次谐波产生中的相位失配比二次谐波更严重，需要特殊的相位匹配技术。</p>
              
              <h4>色散工程：</h4>
              <div class="equation-block">
                <p>Δk = k₃ω - 3kω = (2π/λ)[n(3ω) - n(ω)]</p>
                <p>正常色散: dn/dλ < 0</p>
                <p>反常色散: dn/dλ > 0</p>
                <p>零色散点利用</p>
              </div>
              
              <h4>准相位匹配：</h4>
              <div class="equation-block">
                <p>周期性调制χ⁽³⁾</p>
                <p>Λ = 2π/Δk (QPM周期)</p>
                <p>多层膜结构</p>
                <p>光子晶体</p>
              </div>
              
              <h4>模式匹配：</h4>
              <ul>
                <li>波导中的模式色散</li>
                <li>空间模式重叠</li>
                <li>偏振匹配</li>
                <li>群速度匹配</li>
              </ul>
            </div>
          </div>
          
          <div class="theory-card">
            <h3>非线性薛定谔方程</h3>
            <div class="theory-content">
              <h4>基本方程：</h4>
              <p>描述非线性介质中光脉冲传播的基本方程，包含色散、非线性和损耗效应。</p>
              
              <h4>标准形式：</h4>
              <div class="equation-block">
                <p>i∂A/∂z + (β₂/2)∂²A/∂t² + γ|A|²A = 0</p>
                <p>A: 包络振幅</p>
                <p>β₂: 群速度色散</p>
                <p>γ: 非线性系数</p>
              </div>
              
              <h4>孤子解：</h4>
              <div class="equation-block">
                <p>A(z,t) = √P₀ sech(t/T₀)exp(iγP₀z/2)</p>
                <p>孤子条件: LD = LNL</p>
                <p>LD = T₀²/|β₂| (色散长度)</p>
                <p>LNL = 1/(γP₀) (非线性长度)</p>
              </div>
              
              <h4>数值求解方法：</h4>
              <ul>
                <li>分步傅里叶方法</li>
                <li>Runge-Kutta方法</li>
                <li>有限差分方法</li>
                <li>谱方法</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验技术与测量方法</h2>
        
        <div class="experiment-techniques">
          <div class="technique-section">
            <h3>Z-scan技术详解</h3>
            <div class="technique-content">
              <h4>实验原理：</h4>
              <p>通过移动样品沿聚焦光束轴向位置，测量透射率变化来确定非线性光学参数。</p>
              
              <h4>开孔Z-scan：</h4>
              <div class="equation-block">
                <p>T(z) = 1 + (4Δφ₀x)/[(x² + 9)(x² + 1)]</p>
                <p>Δφ₀ = kn₂I₀Leff</p>
                <p>x = z/z₀ (归一化位置)</p>
                <p>测量非线性折射率n₂</p>
              </div>
              
              <h4>闭孔Z-scan：</h4>
              <div class="equation-block">
                <p>T(z) = 1 - βI₀Leff/[2√2(1 + z²/z₀²)]</p>
                <p>β: 双光子吸收系数</p>
                <p>Leff = [1 - exp(-αL)]/α</p>
                <p>测量非线性吸收</p>
              </div>
              
              <h4>数据分析：</h4>
              <ul>
                <li>峰谷比值分析</li>
                <li>拟合参数提取</li>
                <li>误差分析</li>
                <li>温度效应修正</li>
              </ul>
            </div>
          </div>
          
          <div class="technique-section">
            <h3>四波混频技术</h3>
            <div class="technique-content">
              <h4>相位匹配几何：</h4>
              <p>通过精确控制入射光束的角度和频率，实现高效的四波混频过程。</p>
              
              <h4>BOXCARS几何：</h4>
              <div class="equation-block">
                <p>k₄ = k₁ + k₂ - k₃</p>
                <p>相位匹配角度</p>
                <p>空间分离信号</p>
                <p>背景抑制</p>
              </div>
              
              <h4>简并四波混频：</h4>
              <div class="equation-block">
                <p>ω₁ = ω₂ = ω₃ = ω</p>
                <p>相位共轭</p>
                <p>实时全息</p>
                <p>光学相位共轭镜</p>
              </div>
              
              <h4>时间分辨测量：</h4>
              <ul>
                <li>泵浦-探测延时</li>
                <li>载流子动力学</li>
                <li>相干时间测量</li>
                <li>弛豫过程研究</li>
              </ul>
            </div>
          </div>
          
          <div class="technique-section">
            <h3>光学Kerr门技术</h3>
            <div class="technique-content">
              <h4>工作原理：</h4>
              <p>利用Kerr效应的超快响应实现飞秒时间分辨的光学开关和取样。</p>
              
              <h4>实验装置：</h4>
              <div class="equation-block">
                <p>泵浦光 + 探测光</p>
                <p>Kerr介质 (CS₂, 石英等)</p>
                <p>偏振器组合</p>
                <p>时间延迟控制</p>
              </div>
              
              <h4>时间分辨率：</h4>
              <div class="equation-block">
                <p>Δt ≈ τpump/2 (泵浦脉冲宽度限制)</p>
                <p>CS₂: <50 fs</p>
                <p>石英: <100 fs</p>
                <p>水: <200 fs</p>
              </div>
              
              <h4>应用领域：</h4>
              <ul>
                <li>超快光谱学</li>
                <li>飞秒脉冲表征</li>
                <li>化学反应动力学</li>
                <li>生物分子动力学</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>材料体系与特性</h2>
        
        <div class="materials-section">
          <div class="material-category">
            <h3>无机非线性材料</h3>
            <div class="material-content">
              <h4>石英玻璃：</h4>
              <div class="equation-block">
                <p>χ⁽³⁾ = 2.8×10⁻²² m²/V²</p>
                <p>n₂ = 2.6×10⁻²⁰ m²/W</p>
                <p>透明范围: 200-2500 nm</p>
                <p>损伤阈值: >10 GW/cm²</p>
              </div>
              
              <h4>半导体材料：</h4>
              <ul>
                <li>GaAs: 大χ⁽³⁾，共振增强</li>
                <li>Si: 中红外透明，CMOS兼容</li>
                <li>InGaAsP: 通信波长优化</li>
                <li>GaN: 宽带隙，紫外应用</li>
              </ul>
              
              <h4>氧化物晶体：</h4>
              <div class="equation-block">
                <p>BaTiO₃: 铁电，可调谐</p>
                <p>LiNbO₃: 电光效应</p>
                <p>KTN: 巨大Kerr效应</p>
                <p>SrTiO₃: 量子顺电体</p>
              </div>
            </div>
          </div>
          
          <div class="material-category">
            <h3>有机非线性材料</h3>
            <div class="material-content">
              <h4>共轭聚合物：</h4>
              <ul>
                <li>聚乙炔(PA): 一维导体</li>
                <li>聚苯胺(PANI): 掺杂可调</li>
                <li>聚噻吩(PT): 稳定性好</li>
                <li>聚苯乙烯(PPV): 发光材料</li>
              </ul>
              
              <h4>分子晶体：</h4>
              <div class="equation-block">
                <p>DAST: d₁₁ = 1160 pm/V</p>
                <p>OH1: 高损伤阈值</p>
                <p>DSTMS: 宽带响应</p>
                <p>BNA: 大β值</p>
              </div>
              
              <h4>液晶材料：</h4>
              <ul>
                <li>向列相液晶</li>
                <li>电控双折射</li>
                <li>快速响应</li>
                <li>低驱动电压</li>
              </ul>
            </div>
          </div>
          
          <div class="material-category">
            <h3>新型纳米材料</h3>
            <div class="material-content">
              <h4>碳纳米材料：</h4>
              <ul>
                <li>石墨烯: 宽带可饱和吸收</li>
                <li>碳纳米管: 一维量子限制</li>
                <li>富勒烯: 分子笼结构</li>
                <li>石墨炔: 新型碳同素异形体</li>
              </ul>
              
              <h4>二维材料：</h4>
              <div class="equation-block">
                <p>MoS₂: 直接带隙半导体</p>
                <p>WS₂: 强激子效应</p>
                <p>黑磷: 可调带隙</p>
                <p>MXenes: 金属导电性</p>
              </div>
              
              <h4>量子点材料：</h4>
              <ul>
                <li>CdSe量子点: 尺寸可调</li>
                <li>PbS量子点: 近红外</li>
                <li>钙钛矿量子点: 高量子产率</li>
                <li>硅量子点: 生物兼容</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>四波混频</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔀</div>
            <h3>基本过程</h3>
            <p>四波混频的物理机制</p>
            <div class="mathematical-content">
              <h4>频率关系：</h4>
              <div class="equation-block">
                <p>ω₄ = ω₁ + ω₂ - ω₃</p>
                <p>能量守恒</p>
                <p>动量守恒: k₄ = k₁ + k₂ - k₃</p>
              </div>
              
              <h4>简并四波混频：</h4>
              <div class="equation-block">
                <p>ω₁ = ω₂ = ω₃ = ω</p>
                <p>ω₄ = ω (相位共轭)</p>
                <p>k₄ = 2k₁ - k₃</p>
              </div>
              
              <h4>非简并过程：</h4>
              <div class="equation-block">
                <p>参量放大</p>
                <p>频率转换</p>
                <p>光谱展宽</p>
                <p>超连续产生</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>相位共轭</h3>
            <p>光波前畸变的校正</p>
            <div class="mathematical-content">
              <h4>共轭波产生：</h4>
              <div class="equation-block">
                <p>E₄ ∝ χ⁽³⁾E₁E₂E₃*</p>
                <p>波前反演</p>
                <p>畸变校正</p>
              </div>
              
              <h4>反射率：</h4>
              <div class="equation-block">
                <p>R = |E₄|²/|E₃|²</p>
                <p>R > 1 (放大共轭)</p>
                <p>泵浦功率依赖</p>
              </div>
              
              <h4>应用：</h4>
              <div class="equation-block">
                <p>激光束质量改善</p>
                <p>大气湍流补偿</p>
                <p>光学像差校正</p>
                <p>实时全息</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📡</div>
            <h3>光纤中的四波混频</h3>
            <p>光纤非线性效应</p>
            <div class="mathematical-content">
              <h4>相位匹配：</h4>
              <div class="equation-block">
                <p>Δβ = β₁ + β₂ - β₃ - β₄ = 0</p>
                <p>色散补偿</p>
                <p>零色散波长附近</p>
              </div>
              
              <h4>增益系数：</h4>
              <div class="equation-block">
                <p>g = γP₀√(1 + (Δβ/2γP₀)²)</p>
                <p>γ: 非线性系数</p>
                <p>P₀: 泵浦功率</p>
              </div>
              
              <h4>应用：</h4>
              <div class="equation-block">
                <p>光参量放大器</p>
                <p>波长转换</p>
                <p>超连续光源</p>
                <p>频率梳产生</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>非线性光学材料</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>无机材料</h3>
            <p>传统非线性光学晶体</p>
            <div class="mathematical-content">
              <h4>石英(SiO₂)：</h4>
              <div class="equation-block">
                <p>n₂ = 2.6×10⁻²⁰ m²/W</p>
                <p>低损耗</p>
                <p>高损伤阈值</p>
                <p>宽透明窗口</p>
              </div>
              
              <h4>蓝宝石(Al₂O₃)：</h4>
              <div class="equation-block">
                <p>n₂ = 3.2×10⁻²⁰ m²/W</p>
                <p>机械强度高</p>
                <p>热导率大</p>
                <p>化学稳定</p>
              </div>
              
              <h4>硫化锌(ZnS)：</h4>
              <div class="equation-block">
                <p>n₂ = 1.4×10⁻¹⁸ m²/W</p>
                <p>红外透明</p>
                <p>高非线性系数</p>
                <p>双光子吸收</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧬</div>
            <h3>有机材料</h3>
            <p>分子工程设计的非线性材料</p>
            <div class="mathematical-content">
              <h4>共轭聚合物：</h4>
              <div class="equation-block">
                <p>聚乙炔(PA)</p>
                <p>聚苯胺(PANI)</p>
                <p>聚噻吩(PT)</p>
                <p>大π电子系统</p>
              </div>
              
              <h4>分子晶体：</h4>
              <div class="equation-block">
                <p>DAST晶体</p>
                <p>有机盐</p>
                <p>分子取向</p>
                <p>氢键网络</p>
              </div>
              
              <h4>优势特点：</h4>
              <div class="equation-block">
                <p>超快响应(fs)</p>
                <p>大非线性系数</p>
                <p>可设计性</p>
                <p>易加工成型</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>纳米材料</h3>
            <p>低维结构的非线性效应</p>
            <div class="mathematical-content">
              <h4>量子点：</h4>
              <div class="equation-block">
                <p>量子限域效应</p>
                <p>尺寸调谐</p>
                <p>饱和吸收</p>
                <p>快弛豫时间</p>
              </div>
              
              <h4>石墨烯：</h4>
              <div class="equation-block">
                <p>宽带响应</p>
                <p>可饱和吸收</p>
                <p>超快载流子动力学</p>
                <p>电调谐特性</p>
              </div>
              
              <h4>金属纳米粒子：</h4>
              <div class="equation-block">
                <p>表面等离激元</p>
                <p>局域场增强</p>
                <p>热电子效应</p>
                <p>尺寸效应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用与器件</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔧 全光开关</h3>
            <div class="feature-content">
              <h4>Kerr开关：</h4>
              <ul>
                <li>强度依赖透射率</li>
                <li>超快响应时间</li>
                <li>低开关功率</li>
                <li>全光逻辑门</li>
              </ul>
              
              <h4>性能指标：</h4>
              <ul>
                <li>开关时间: fs-ps</li>
                <li>消光比: >20 dB</li>
                <li>开关功率: mW-W</li>
                <li>重复频率: GHz</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🛡️ 光学限幅</h3>
            <div class="feature-content">
              <h4>限幅机制：</h4>
              <ul>
                <li>非线性吸收</li>
                <li>非线性散射</li>
                <li>热致散焦</li>
                <li>等离子体形成</li>
              </ul>
              
              <h4>应用领域：</h4>
              <ul>
                <li>激光防护</li>
                <li>传感器保护</li>
                <li>眼睛安全</li>
                <li>光学稳定</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌈 超连续光源</h3>
            <div class="feature-content">
              <h4>产生机制：</h4>
              <ul>
                <li>自相位调制</li>
                <li>四波混频</li>
                <li>拉曼散射</li>
                <li>孤子分裂</li>
              </ul>
              
              <h4>应用：</h4>
              <ul>
                <li>光谱学</li>
                <li>光学相干断层扫描</li>
                <li>频率计量</li>
                <li>生物成像</li>
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
              <h4>三阶非线性效应</h4>
              <p>三次谐波产生、Kerr效应、四波混频等三阶效应不受中心对称性限制，在所有材料中都存在，是超快光学的基础。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>Kerr效应机制</h4>
              <p>光学Kerr效应导致强度依赖的折射率变化，产生自聚焦、自相位调制等现象，响应时间从飞秒到毫秒不等。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>四波混频过程</h4>
              <p>四波混频实现频率转换、相位共轭、参量放大等功能，在光纤通信、激光技术中有重要应用。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>材料选择</h4>
              <p>无机晶体、有机材料、纳米结构各有特点，需要根据应用需求选择合适的非线性系数、响应时间和损伤阈值。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>器件应用</h4>
              <p>三阶非线性效应在全光开关、光学限幅、超连续光源等器件中发挥关键作用，推动了超快光子学的发展。</p>
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
  background: #805ad5;
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
  color: #805ad5;
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

/* 新增样式 */
.advanced-theory {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.theory-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
  border: 2px solid #4a90e2;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.1);
}

.theory-card h3 {
  color: #2c5aa0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #4a90e2;
  padding-bottom: 0.5rem;
}

.theory-content h4 {
  color: #1e3a8a;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.experiment-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.technique-section {
  background: linear-gradient(135deg, #fff8f0 0%, #ffeedd 100%);
  border: 2px solid #ff8c42;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(255, 140, 66, 0.1);
}

.technique-section h3 {
  color: #cc5500;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #ff8c42;
  padding-bottom: 0.5rem;
}

.technique-content h4 {
  color: #994400;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.materials-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.material-category {
  background: linear-gradient(135deg, #f0fff8 0%, #ddffee 100%);
  border: 2px solid #22c55e;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.1);
}

.material-category h3 {
  color: #166534;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #22c55e;
  padding-bottom: 0.5rem;
}

.material-content h4 {
  color: #15803d;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.applications-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-category {
  background: linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%);
  border: 2px solid #a855f7;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(168, 85, 247, 0.1);
}

.application-category h3 {
  color: #7c2d92;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #a855f7;
  padding-bottom: 0.5rem;
}

.application-content h4 {
  color: #6b21a8;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.research-trends {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.trend-section {
  background: linear-gradient(135deg, #fff1f2 0%, #ffe4e6 100%);
  border: 2px solid #ef4444;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(239, 68, 68, 0.1);
}

.trend-section h3 {
  color: #b91c1c;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #ef4444;
  padding-bottom: 0.5rem;
}

.trend-content h4 {
  color: #dc2626;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.summary-section {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  border: 2px solid #64748b;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: 0 4px 12px rgba(100, 116, 139, 0.1);
}

.key-points, .future-directions, .challenges {
  margin-bottom: 2rem;
}

.key-points h3, .future-directions h3, .challenges h3 {
  color: #334155;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  border-bottom: 2px solid #64748b;
  padding-bottom: 0.5rem;
}

.key-points ul, .future-directions ul, .challenges ul {
  list-style-type: none;
  padding-left: 0;
}

.key-points li, .future-directions li, .challenges li {
  background: #ffffff;
  margin: 0.5rem 0;
  padding: 0.8rem;
  border-left: 4px solid #64748b;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

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
}
</style>