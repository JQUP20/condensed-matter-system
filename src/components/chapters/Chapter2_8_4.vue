<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.4 电光效应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">电光调制</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>电光效应概述</h2>
        <p class="lead-text">
          电光效应是指在外加电场作用下，介质的折射率发生变化的现象。
          这种效应是现代光电子学的基础，广泛应用于激光调制、光开关、
          光学存储等领域。电光效应分为线性电光效应(Pockels效应)和
          二次电光效应(Kerr效应)，为高速光信号处理提供了重要手段。
        </p>
      </section>

      <section class="content-section theoretical-foundations">
        <h2>理论基础与物理机制</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>微观机理</h3>
            <p>电光效应的微观物理机制</p>
            <div class="mathematical-content">
              <h4>电子云变形：</h4>
              <div class="equation-block">
                <p>α(E) = α₀ + βE + γE²</p>
                <p>α₀: 线性极化率</p>
                <p>β: 一阶超极化率</p>
                <p>γ: 二阶超极化率</p>
              </div>
              
              <h4>离子位移：</h4>
              <div class="equation-block">
                <p>u = (eE)/(mω₀²)</p>
                <p>e: 电子电荷</p>
                <p>m: 有效质量</p>
                <p>ω₀: 振子频率</p>
              </div>
              
              <h4>能带调制：</h4>
              <div class="equation-block">
                <p>ΔE_g = qEa</p>
                <p>量子限域Stark效应</p>
                <p>Franz-Keldysh效应</p>
                <p>带边吸收变化</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📐</div>
            <h3>张量理论</h3>
            <p>电光效应的张量描述</p>
            <div class="mathematical-content">
              <h4>电光张量：</h4>
              <div class="equation-block">
                <p>Δ(1/n²)ᵢⱼ = Σₖ rᵢⱼₖEₖ</p>
                <p>rᵢⱼₖ: 线性电光张量</p>
                <p>Rᵢⱼₖₗ: 二次电光张量</p>
                <p>对称性约化</p>
              </div>
              
              <h4>坐标变换：</h4>
              <div class="equation-block">
                <p>r'ᵢⱼₖ = Σₗₘₙ aᵢₗaⱼₘaₖₙrₗₘₙ</p>
                <p>旋转矩阵变换</p>
                <p>主轴选择</p>
                <p>简化表示</p>
              </div>
              
              <h4>Voigt记号：</h4>
              <div class="equation-block">
                <p>11→1, 22→2, 33→3</p>
                <p>23,32→4, 13,31→5, 12,21→6</p>
                <p>6×3矩阵表示</p>
                <p>独立分量数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>量子理论</h3>
            <p>电光效应的量子力学描述</p>
            <div class="mathematical-content">
              <h4>微扰理论：</h4>
              <div class="equation-block">
                <p>H = H₀ + H'</p>
                <p>H' = -μ·E - (1/2)α:EE</p>
                <p>一阶微扰: Pockels效应</p>
                <p>二阶微扰: Kerr效应</p>
              </div>
              
              <h4>跃迁矩阵元：</h4>
              <div class="equation-block">
                <p>⟨n|μ|m⟩ = ∫ψₙ*μψₘdτ</p>
                <p>选择定则</p>
                <p>振子强度</p>
                <p>共振增强</p>
              </div>
              
              <h4>色散关系：</h4>
              <div class="equation-block">
                <p>n²(ω) = 1 + Σⱼ fⱼ/(ωⱼ² - ω²)</p>
                <p>Kramers-Kronig关系</p>
                <p>因果性约束</p>
                <p>频率依赖性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Pockels效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>线性电光效应</h3>
            <p>折射率与电场的线性关系</p>
            <div class="mathematical-content">
              <h4>基本关系：</h4>
              <div class="equation-block">
                <p>Δ(1/n²) = rE</p>
                <p>r: 电光系数(pm/V)</p>
                <p>E: 外加电场</p>
                <p>线性响应</p>
              </div>
              
              <h4>折射率变化：</h4>
              <div class="equation-block">
                <p>Δn = -(n³/2)rE</p>
                <p>n₀: 无场时折射率</p>
                <p>小信号近似</p>
              </div>
              
              <h4>相位延迟：</h4>
              <div class="equation-block">
                <p>Γ = (2π/λ)ΔnL</p>
                <p>L: 晶体长度</p>
                <p>λ: 光波长</p>
                <p>电压控制相位</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>晶体对称性</h3>
            <p>对称性对电光效应的限制</p>
            <div class="mathematical-content">
              <h4>对称性要求：</h4>
              <div class="equation-block">
                <p>非中心对称晶体</p>
                <p>20个非中心对称点群</p>
                <p>压电晶体</p>
                <p>铁电晶体</p>
              </div>
              
              <h4>电光张量：</h4>
              <div class="equation-block">
                <p>rᵢⱼₖ: 三阶张量</p>
                <p>对称性约化</p>
                <p>独立分量数</p>
                <p>主轴选择</p>
              </div>
              
              <h4>典型晶体：</h4>
              <div class="equation-block">
                <p>LiNbO₃: r₃₃ = 30.8 pm/V</p>
                <p>KDP: r₆₃ = 10.5 pm/V</p>
                <p>BaTiO₃: r₄₂ = 820 pm/V</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>调制特性</h3>
            <p>电光调制器的性能参数</p>
            <div class="mathematical-content">
              <h4>半波电压：</h4>
              <div class="equation-block">
                <p>V_π = λd/(n³rL)</p>
                <p>d: 电极间距</p>
                <p>L: 相互作用长度</p>
                <p>π相位延迟所需电压</p>
              </div>
              
              <h4>调制深度：</h4>
              <div class="equation-block">
                <p>m = (I_max - I_min)/(I_max + I_min)</p>
                <p>消光比: ER = I_max/I_min</p>
                <p>调制效率</p>
              </div>
              
              <h4>带宽限制：</h4>
              <div class="equation-block">
                <p>速度匹配条件</p>
                <p>RC时间常数</p>
                <p>传输线效应</p>
                <p>电光带宽积</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Kerr效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>二次电光效应</h3>
            <p>折射率与电场平方的关系</p>
            <div class="mathematical-content">
              <h4>基本关系：</h4>
              <div class="equation-block">
                <p>Δn = KλE²</p>
                <p>K: Kerr常数</p>
                <p>二次方依赖</p>
                <p>所有介质都存在</p>
              </div>
              
              <h4>Kerr常数：</h4>
              <div class="equation-block">
                <p>液体: CS₂ (K = 3.6×10⁻¹⁴ m/V²)</p>
                <p>玻璃: K ~ 10⁻¹⁶ m/V²</p>
                <p>聚合物: K ~ 10⁻¹⁵ m/V²</p>
              </div>
              
              <h4>响应时间：</h4>
              <div class="equation-block">
                <p>电子响应: <1 ps</p>
                <p>分子取向: ns-μs</p>
                <p>电致伸缩: μs</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>Kerr盒</h3>
            <p>液体Kerr效应器件</p>
            <div class="mathematical-content">
              <h4>器件结构：</h4>
              <div class="equation-block">
                <p>平行板电容器</p>
                <p>透明电极</p>
                <p>Kerr液体填充</p>
                <p>偏振器配置</p>
              </div>
              
              <h4>工作原理：</h4>
              <div class="equation-block">
                <p>电场诱导双折射</p>
                <p>偏振态调制</p>
                <p>强度调制</p>
                <p>快速开关</p>
              </div>
              
              <h4>应用特点：</h4>
              <div class="equation-block">
                <p>超快响应(ps)</p>
                <p>高消光比</p>
                <p>宽光谱范围</p>
                <p>高功率处理</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚙️</div>
            <h3>量子限域Kerr效应</h3>
            <p>量子点中的增强效应</p>
            <div class="mathematical-content">
              <h4>量子限域：</h4>
              <div class="equation-block">
                <p>三维量子限域</p>
                <p>分立能级</p>
                <p>激子效应增强</p>
                <p>尺寸调谐</p>
              </div>
              
              <h4>增强机制：</h4>
              <div class="equation-block">
                <p>振子强度增大</p>
                <p>共振增强</p>
                <p>量子限域Stark效应</p>
                <p>多激子相互作用</p>
              </div>
              
              <h4>材料系统：</h4>
              <div class="equation-block">
                <p>II-VI族量子点</p>
                <p>III-V族量子点</p>
                <p>胶体量子点</p>
                <p>钙钛矿量子点</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>电光调制器</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📡</div>
            <h3>Mach-Zehnder调制器</h3>
            <p>干涉型电光调制器</p>
            <div class="mathematical-content">
              <h4>工作原理：</h4>
              <div class="equation-block">
                <p>光波分束</p>
                <p>相位调制</p>
                <p>干涉合束</p>
                <p>强度调制输出</p>
              </div>
              
              <h4>传输函数：</h4>
              <div class="equation-block">
                <p>T = cos²(Γ/2)</p>
                <p>Γ = πV/V_π</p>
                <p>正弦响应</p>
                <p>线性工作点</p>
              </div>
              
              <h4>性能指标：</h4>
              <div class="equation-block">
                <p>插入损耗: <3 dB</p>
                <p>消光比: >20 dB</p>
                <p>带宽: >40 GHz</p>
                <p>驱动电压: <5 V</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>相位调制器</h3>
            <p>直接相位调制</p>
            <div class="mathematical-content">
              <h4>调制方式：</h4>
              <div class="equation-block">
                <p>E_out = E_in × e^(iΓ)</p>
                <p>纯相位调制</p>
                <p>恒定振幅</p>
                <p>频率调制</p>
              </div>
              
              <h4>应用：</h4>
              <div class="equation-block">
                <p>相干通信</p>
                <p>激光稳频</p>
                <p>光学锁相环</p>
                <p>边带调制</p>
              </div>
              
              <h4>优势：</h4>
              <div class="equation-block">
                <p>无振幅噪声</p>
                <p>高调制效率</p>
                <p>宽带响应</p>
                <p>低插入损耗</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎛️</div>
            <h3>偏振调制器</h3>
            <p>偏振态电控调制</p>
            <div class="mathematical-content">
              <h4>调制机制：</h4>
              <div class="equation-block">
                <p>电场诱导双折射</p>
                <p>偏振椭圆度变化</p>
                <p>Stokes参数调制</p>
                <p>Poincaré球轨迹</p>
              </div>
              
              <h4>器件结构：</h4>
              <div class="equation-block">
                <p>横向电场配置</p>
                <p>纵向电场配置</p>
                <p>多段级联</p>
                <p>集成波导</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>偏振复用通信</p>
                <p>量子密钥分发</p>
                <p>光学陀螺</p>
                <p>椭偏测量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section experimental-techniques">
        <h2>实验技术与测量方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>电光系数测量</h3>
            <p>精确测量电光系数的实验方法</p>
            <div class="mathematical-content">
              <h4>Sénarmont方法：</h4>
              <div class="equation-block">
                <p>I = I₀sin²(π/4 + Γ/2)</p>
                <p>Γ = (2π/λ)ΔnL</p>
                <p>偏振分析</p>
                <p>相位延迟测量</p>
              </div>
              
              <h4>干涉测量法：</h4>
              <div class="equation-block">
                <p>ΔΦ = (2π/λ)(n₁L₁ - n₂L₂)</p>
                <p>Mach-Zehnder干涉仪</p>
                <p>相位差检测</p>
                <p>高精度测量</p>
              </div>
              
              <h4>椭偏测量：</h4>
              <div class="equation-block">
                <p>ρ = tan(Ψ)e^(iΔ)</p>
                <p>Ψ: 振幅比</p>
                <p>Δ: 相位差</p>
                <p>Stokes参数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>高频响应测量</h3>
            <p>电光器件的动态特性测量</p>
            <div class="mathematical-content">
              <h4>网络分析仪：</h4>
              <div class="equation-block">
                <p>S₂₁(ω) = |S₂₁|e^(iφ)</p>
                <p>幅频响应</p>
                <p>相频响应</p>
                <p>3dB带宽</p>
              </div>
              
              <h4>时域测量：</h4>
              <div class="equation-block">
                <p>h(t) = ∫ H(ω)e^(iωt)dω</p>
                <p>脉冲响应</p>
                <p>上升时间</p>
                <p>群延迟</p>
              </div>
              
              <h4>眼图分析：</h4>
              <div class="equation-block">
                <p>Q = (I₁ - I₀)/(σ₁ + σ₀)</p>
                <p>眼高</p>
                <p>眼宽</p>
                <p>抖动分析</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>温度特性测量</h3>
            <p>电光器件的温度依赖性</p>
            <div class="mathematical-content">
              <h4>温度系数：</h4>
              <div class="equation-block">
                <p>dn/dT = (∂n/∂T)_P</p>
                <p>热光系数</p>
                <p>热膨胀系数</p>
                <p>温度漂移</p>
              </div>
              
              <h4>稳定性测试：</h4>
              <div class="equation-block">
                <p>ΔV_π/V_π = α_T ΔT</p>
                <p>半波电压漂移</p>
                <p>偏置点稳定性</p>
                <p>长期稳定性</p>
              </div>
              
              <h4>补偿技术：</h4>
              <div class="equation-block">
                <p>V_bias(T) = V₀ + k(T - T₀)</p>
                <p>自动偏置控制</p>
                <p>温度补偿</p>
                <p>反馈控制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section advanced-materials">
        <h2>先进材料与器件</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>新型电光晶体</h3>
            <p>高性能电光材料的发展</p>
            <div class="mathematical-content">
              <h4>BaTiO₃基材料：</h4>
              <div class="equation-block">
                <p>r₄₂ = 820 pm/V (室温)</p>
                <p>铁电相变</p>
                <p>巨电光效应</p>
                <p>温度敏感性</p>
              </div>
              
              <h4>KTN晶体：</h4>
              <div class="equation-block">
                <p>r₄₂ > 10⁴ pm/V (临界温度)</p>
                <p>量子顺电相</p>
                <p>软模增强</p>
                <p>超大电光系数</p>
              </div>
              
              <h4>有机晶体：</h4>
              <div class="equation-block">
                <p>DAST: r₁₁ = 77 pm/V</p>
                <p>分子工程</p>
                <p>太赫兹响应</p>
                <p>非线性光学</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧬</div>
            <h3>聚合物电光材料</h3>
            <p>有机聚合物的电光特性</p>
            <div class="mathematical-content">
              <h4>分子设计：</h4>
              <div class="equation-block">
                <p>β = Δμ·μ₁₂/ΔE</p>
                <p>推拉电子结构</p>
                <p>共轭长度优化</p>
                <p>分子超极化率</p>
              </div>
              
              <h4>极化工艺：</h4>
              <div class="equation-block">
                <p>r₃₃ = 2N⟨cos³θ⟩β/(n⁴ε₀)</p>
                <p>电场极化</p>
                <p>取向有序度</p>
                <p>热稳定性</p>
              </div>
              
              <h4>器件集成：</h4>
              <div class="equation-block">
                <p>V_π = λd/(n³r₃₃L)</p>
                <p>低驱动电压</p>
                <p>宽带响应</p>
                <p>柔性基底</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>量子点电光器件</h3>
            <p>量子限域结构的电光效应</p>
            <div class="mathematical-content">
              <h4>量子限域Stark效应：</h4>
              <div class="equation-block">
                <p>ΔE = -qEz - (q²E²/2mω²)</p>
                <p>线性Stark效应</p>
                <p>二次Stark效应</p>
                <p>激子结合能</p>
              </div>
              
              <h4>多激子效应：</h4>
              <div class="equation-block">
                <p>χ⁽³⁾ ∝ |μ|⁴/(ℏΔω)³</p>
                <p>激子-激子相互作用</p>
                <p>饱和吸收</p>
                <p>非线性折射</p>
              </div>
              
              <h4>尺寸调谐：</h4>
              <div class="equation-block">
                <p>E_g(R) = E_bulk + ℏ²π²/(2μR²)</p>
                <p>量子尺寸效应</p>
                <p>能级调谐</p>
                <p>光谱响应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>集成电光器件</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔬 LiNbO₃集成光学</h3>
            <div class="feature-content">
              <h4>材料优势：</h4>
              <ul>
                <li>大电光系数</li>
                <li>宽透明窗口</li>
                <li>低光学损耗</li>
                <li>化学稳定性</li>
              </ul>
              
              <h4>器件类型：</h4>
              <ul>
                <li>波导调制器</li>
                <li>方向耦合器</li>
                <li>开关阵列</li>
                <li>频率转换器</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌐 硅光子学</h3>
            <div class="feature-content">
              <h4>载流子效应：</h4>
              <ul>
                <li>自由载流子色散</li>
                <li>载流子注入</li>
                <li>载流子耗尽</li>
                <li>热光效应</li>
              </ul>
              
              <h4>集成优势：</h4>
              <ul>
                <li>CMOS兼容</li>
                <li>大规模集成</li>
                <li>低成本制造</li>
                <li>电子学集成</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔋 有机电光材料</h3>
            <div class="feature-content">
              <h4>分子设计：</h4>
              <ul>
                <li>推拉电子结构</li>
                <li>共轭π系统</li>
                <li>分子取向</li>
                <li>聚合物基质</li>
              </ul>
              
              <h4>器件特点：</h4>
              <ul>
                <li>超高电光系数</li>
                <li>低驱动电压</li>
                <li>宽带响应</li>
                <li>柔性基底</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section applications-prospects">
        <h2>应用与发展前景</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>光通信应用</h3>
            <p>电光器件在光通信中的关键作用</p>
            <div class="mathematical-content">
              <h4>高速调制：</h4>
              <div class="equation-block">
                <p>数据速率: >100 Gbps</p>
                <p>调制格式: NRZ, PAM4, QAM</p>
                <p>WDM系统集成</p>
                <p>相干检测</p>
              </div>
              
              <h4>光交换：</h4>
              <div class="equation-block">
                <p>1×N, N×N开关矩阵</p>
                <p>纳秒级切换时间</p>
                <p>低串扰</p>
                <p>路由重配置</p>
              </div>
              
              <h4>信号处理：</h4>
              <div class="equation-block">
                <p>色散补偿</p>
                <p>偏振控制</p>
                <p>光学滤波</p>
                <p>信号再生</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>激光技术</h3>
            <p>电光器件在激光系统中的应用</p>
            <div class="mathematical-content">
              <h4>Q开关：</h4>
              <div class="equation-block">
                <p>Pockels盒Q开关</p>
                <p>纳秒脉冲产生</p>
                <p>高峰值功率</p>
                <p>重复频率控制</p>
              </div>
              
              <h4>腔倒空：</h4>
              <div class="equation-block">
                <p>快速损耗调制</p>
                <p>脉冲整形</p>
                <p>激光器保护</p>
                <p>功率稳定</p>
              </div>
              
              <h4>频率调制：</h4>
              <div class="equation-block">
                <p>边带调制</p>
                <p>频率稳定</p>
                <p>激光锁频</p>
                <p>光谱纯化</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧪</div>
            <h3>科学仪器</h3>
            <p>电光器件在精密测量中的应用</p>
            <div class="mathematical-content">
              <h4>电场测量：</h4>
              <div class="equation-block">
                <p>Pockels效应传感器</p>
                <p>高压测量</p>
                <p>电场分布</p>
                <p>非接触检测</p>
              </div>
              
              <h4>光学调制：</h4>
              <div class="equation-block">
                <p>锁相放大器</p>
                <p>调制光谱学</p>
                <p>相敏检测</p>
                <p>噪声抑制</p>
              </div>
              
              <h4>时间分辨：</h4>
              <div class="equation-block">
                <p>超快光学门</p>
                <p>时间分辨光谱</p>
                <p>飞秒测量</p>
                <p>动态过程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section frontier-research">
        <h2>前沿研究与发展趋势</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🚀</div>
            <h3>新兴技术</h3>
            <p>电光技术的前沿发展方向</p>
            <div class="mathematical-content">
              <h4>等离激元电光学：</h4>
              <div class="equation-block">
                <p>表面等离激元增强</p>
                <p>亚波长器件</p>
                <p>超快响应</p>
                <p>强场局域</p>
              </div>
              
              <h4>超材料电光学：</h4>
              <div class="equation-block">
                <p>人工电光材料</p>
                <p>负折射率</p>
                <p>隐身斗篷</p>
                <p>完美透镜</p>
              </div>
              
              <h4>拓扑电光学：</h4>
              <div class="equation-block">
                <p>拓扑保护态</p>
                <p>边界态调制</p>
                <p>鲁棒性传输</p>
                <p>量子霍尔效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔮</div>
            <h3>量子电光学</h3>
            <p>量子信息中的电光器件</p>
            <div class="mathematical-content">
              <h4>量子调制：</h4>
              <div class="equation-block">
                <p>单光子调制</p>
                <p>量子态操控</p>
                <p>纠缠态产生</p>
                <p>量子门操作</p>
              </div>
              
              <h4>量子存储：</h4>
              <div class="equation-block">
                <p>电控量子存储</p>
                <p>量子中继器</p>
                <p>量子网络</p>
                <p>量子接口</p>
              </div>
              
              <h4>量子传感：</h4>
              <div class="equation-block">
                <p>量子增强测量</p>
                <p>压缩态产生</p>
                <p>量子雷达</p>
                <p>精密测量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🤖</div>
            <h3>智能电光系统</h3>
            <p>人工智能与电光技术的结合</p>
            <div class="mathematical-content">
              <h4>机器学习优化：</h4>
              <div class="equation-block">
                <p>器件参数优化</p>
                <p>自适应控制</p>
                <p>性能预测</p>
                <p>故障诊断</p>
              </div>
              
              <h4>神经网络硬件：</h4>
              <div class="equation-block">
                <p>光学神经网络</p>
                <p>矩阵运算</p>
                <p>并行处理</p>
                <p>低功耗计算</p>
              </div>
              
              <h4>自主系统：</h4>
              <div class="equation-block">
                <p>自校准系统</p>
                <p>环境适应</p>
                <p>智能决策</p>
                <p>预测维护</p>
              </div>
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
              <h4>理论基础</h4>
              <p>电光效应基于微观机理、张量理论和量子理论，包括电子云变形、离子位移和能带调制等物理过程。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>效应分类</h4>
              <p>Pockels效应(线性)需要非中心对称晶体，Kerr效应(二次)在所有材料中存在，响应时间和调制效率不同。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>实验技术</h4>
              <p>电光系数测量、高频响应测量和温度特性测量是评估电光器件性能的关键实验方法。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>先进材料</h4>
              <p>新型电光晶体、聚合物材料和量子点器件为高性能电光应用提供了新的可能性。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>调制器设计</h4>
              <p>Mach-Zehnder、相位调制器、偏振调制器各有特点，需要考虑半波电压、带宽、消光比等关键参数。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">6</span>
            <div class="point-content">
              <h4>集成技术</h4>
              <p>LiNbO₃、硅光子学、有机材料各有优势，集成电光器件是现代光通信的核心技术。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">7</span>
            <div class="point-content">
              <h4>应用前景</h4>
              <p>电光效应在光通信、激光技术、科学仪器等领域发挥关键作用，推动光电子技术发展。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">8</span>
            <div class="point-content">
              <h4>前沿发展</h4>
              <p>等离激元电光学、量子电光学和智能电光系统代表了电光技术的未来发展方向。</p>
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

/* 新增内容的样式 */
.theoretical-foundations .concept-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.theoretical-foundations .concept-card h3,
.theoretical-foundations .concept-card h4 {
  color: white;
}

.theoretical-foundations .equation-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.experimental-techniques .concept-card {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.experimental-techniques .concept-card h3,
.experimental-techniques .concept-card h4 {
  color: white;
}

.experimental-techniques .equation-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.advanced-materials .concept-card {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
}

.advanced-materials .concept-card h3,
.advanced-materials .concept-card h4 {
  color: white;
}

.advanced-materials .equation-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.applications-prospects .concept-card {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

.applications-prospects .concept-card h3,
.applications-prospects .concept-card h4 {
  color: white;
}

.applications-prospects .equation-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.frontier-research .concept-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2d3748;
}

.frontier-research .concept-card h3,
.frontier-research .concept-card h4 {
  color: #2d3748;
}

.frontier-research .equation-block {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(45, 55, 72, 0.1);
  color: #2d3748;
}

/* 响应式设计增强 */
@media (max-width: 1024px) {
  .concept-grid {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
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
  
  .concept-card {
    padding: 1.5rem;
  }
  
  .mathematical-content h4 {
    font-size: 0.9rem;
  }
  
  .equation-block {
    padding: 0.75rem;
  }
  
  .equation-block p {
    font-size: 0.8rem;
  }
}
</style>