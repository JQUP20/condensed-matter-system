<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.2 二次谐波产生</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">非线性光学</span>
        <span class="reading-time">预计阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>二次谐波产生的物理机制</h2>
        <p class="lead-text">
          二次谐波产生(Second Harmonic Generation, SHG)是最重要的二阶非线性光学效应之一。
          当强激光通过具有二阶非线性极化率的介质时，会产生频率为入射光两倍的新光波。
          这一现象不仅在基础物理研究中具有重要意义，也是现代激光技术和光电子器件的核心。
        </p>
      </section>

      <section class="content-section">
        <h2>理论基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>非线性极化</h3>
            <p>二次谐波产生的微观机制</p>
            <div class="mathematical-content">
              <h4>二阶极化强度：</h4>
              <div class="equation-block">
                <p>P⁽²⁾(2ω) = ε₀χ⁽²⁾(-2ω;ω,ω)E(ω)E(ω)</p>
                <p>P⁽²⁾ = ε₀χ⁽²⁾E²</p>
                <p>频率倍增过程: ω + ω → 2ω</p>
              </div>
              
              <h4>波动方程：</h4>
              <div class="equation-block">
                <p>∇²E - (1/c²)∂²E/∂t² = μ₀∂²P⁽²⁾/∂t²</p>
                <p>非线性源项驱动</p>
                <p>相位匹配条件</p>
              </div>
              
              <h4>耦合波方程：</h4>
              <div class="equation-block">
                <p>dA₁/dz = -iω₁d_eff A₂*A₁e^(-iΔkz)/(n₁c)</p>
                <p>dA₂/dz = -i2ω₁d_eff A₁²e^(iΔkz)/(n₂c)</p>
                <p>Δk = k₂ - 2k₁</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>相位匹配</h3>
            <p>高效二次谐波产生的关键</p>
            <div class="mathematical-content">
              <h4>相位匹配条件：</h4>
              <div class="equation-block">
                <p>Δk = k₂ω - 2k_ω = 0</p>
                <p>n(2ω) = n(ω)</p>
                <p>消除相位失配</p>
              </div>
              
              <h4>双折射相位匹配：</h4>
              <div class="equation-block">
                <p>Type I: o + o → e</p>
                <p>Type II: o + e → e</p>
                <p>利用双折射补偿色散</p>
              </div>
              
              <h4>相位匹配角：</h4>
              <div class="equation-block">
                <p>θₘ = arcsin√[(n_o²(2ω) - n_e²(2ω))/(n_o²(ω) - n_e²(2ω))]</p>
                <p>温度调谐</p>
                <p>角度调谐</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>转换效率</h3>
            <p>二次谐波功率转换</p>
            <div class="mathematical-content">
              <h4>小信号近似：</h4>
              <div class="equation-block">
                <p>P₂ω = (2ω²d_eff²L²)/(n²ωn₂ωε₀c³) × P_ω² × sinc²(ΔkL/2)</p>
                <p>L: 晶体长度</p>
                <p>d_eff: 有效非线性系数</p>
              </div>
              
              <h4>完美相位匹配：</h4>
              <div class="equation-block">
                <p>η = P₂ω/P_ω = (2ω²d_eff²L²I_ω)/(n²ωn₂ωε₀c³)</p>
                <p>η ∝ I_ω × L²</p>
                <p>功率密度和长度的平方依赖</p>
              </div>
              
              <h4>接受角和带宽：</h4>
              <div class="equation-block">
                <p>Δθ ≈ λ/(πLΔn)</p>
                <p>Δλ ≈ λ²/(πLdn/dλ)</p>
                <p>相位匹配容忍度</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>非线性晶体材料</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>BBO晶体</h3>
            <p>β-BaB₂O₄的优异性能</p>
            <div class="mathematical-content">
              <h4>基本参数：</h4>
              <div class="equation-block">
                <p>点群: 3m</p>
                <p>d₂₂ = 2.3 pm/V</p>
                <p>透明范围: 190-3500 nm</p>
                <p>损伤阈值: >1 GW/cm²</p>
              </div>
              
              <h4>相位匹配：</h4>
              <div class="equation-block">
                <p>Type I: θ = 22.8° (1064→532 nm)</p>
                <p>Type II: θ = 32.3° (1064→532 nm)</p>
                <p>宽调谐范围</p>
              </div>
              
              <h4>应用特点：</h4>
              <div class="equation-block">
                <p>高损伤阈值</p>
                <p>宽透明窗口</p>
                <p>大接受角</p>
                <p>温度稳定性好</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔮</div>
            <h3>KDP晶体</h3>
            <p>KH₂PO₄的经典应用</p>
            <div class="mathematical-content">
              <h4>基本参数：</h4>
              <div class="equation-block">
                <p>点群: 42m</p>
                <p>d₃₆ = 0.39 pm/V</p>
                <p>透明范围: 200-1500 nm</p>
                <p>易于生长大尺寸晶体</p>
              </div>
              
              <h4>相位匹配：</h4>
              <div class="equation-block">
                <p>Type I: θ = 41.2° (1064→532 nm)</p>
                <p>Type II: θ = 58.5° (1064→532 nm)</p>
                <p>角度调谐敏感</p>
              </div>
              
              <h4>优缺点：</h4>
              <div class="equation-block">
                <p>优点: 大尺寸、低成本</p>
                <p>缺点: 吸湿性、低损伤阈值</p>
                <p>需要防潮保护</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>LiIO₃晶体</h3>
            <p>碘酸锂的特殊性质</p>
            <div class="mathematical-content">
              <h4>基本参数：</h4>
              <div class="equation-block">
                <p>点群: 6</p>
                <p>d₃₁ = -4.1 pm/V</p>
                <p>透明范围: 300-5500 nm</p>
                <p>高非线性系数</p>
              </div>
              
              <h4>相位匹配：</h4>
              <div class="equation-block">
                <p>90°相位匹配</p>
                <p>θ = 90°, φ = 0°</p>
                <p>简化光路设计</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>红外二次谐波</p>
                <p>参量振荡器</p>
                <p>电光调制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>准相位匹配技术</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>周期性极化</h3>
            <p>人工相位匹配方法</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>d_eff(z) = d₀ × sign[cos(2πz/Λ)]</p>
                <p>Λ = 2π/Δk (准相位匹配周期)</p>
                <p>周期性反转非线性系数</p>
              </div>
              
              <h4>傅里叶展开：</h4>
              <div class="equation-block">
                <p>d_eff = (2d₀/π) × Σₘ (1/m)sin(mπ/2)e^(imGz)</p>
                <p>G = 2π/Λ (倒格矢)</p>
                <p>一阶准相位匹配: m = 1</p>
              </div>
              
              <h4>相位匹配条件：</h4>
              <div class="equation-block">
                <p>Δk = mG = m(2π/Λ)</p>
                <p>Λ = mλ/(2Δn)</p>
                <p>m = 1, 3, 5, ... (奇数阶)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🏗️</div>
            <h3>PPLN晶体</h3>
            <p>周期性极化铌酸锂</p>
            <div class="mathematical-content">
              <h4>制备工艺：</h4>
              <div class="equation-block">
                <p>电场极化反转</p>
                <p>E > E_c ≈ 21 kV/mm</p>
                <p>光刻掩膜图案</p>
                <p>高温退火处理</p>
              </div>
              
              <h4>设计参数：</h4>
              <div class="equation-block">
                <p>Λ = λ/(2Δn) (一阶)</p>
                <p>典型周期: 6-30 μm</p>
                <p>占空比: 50%</p>
                <p>极化深度: >100 μm</p>
              </div>
              
              <h4>性能优势：</h4>
              <div class="equation-block">
                <p>d_eff = 2d₃₃/π ≈ 17 pm/V</p>
                <p>无双折射走离</p>
                <p>大接受角</p>
                <p>温度调谐</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎛️</div>
            <h3>啁啾结构</h3>
            <p>非均匀周期设计</p>
            <div class="mathematical-content">
              <h4>啁啾周期：</h4>
              <div class="equation-block">
                <p>Λ(z) = Λ₀ + αz</p>
                <p>α: 啁啾参数</p>
                <p>补偿群速度失配</p>
              </div>
              
              <h4>扇形结构：</h4>
              <div class="equation-block">
                <p>连续周期变化</p>
                <p>宽带相位匹配</p>
                <p>多波长同时转换</p>
              </div>
              
              <h4>应用优势：</h4>
              <div class="equation-block">
                <p>增大接受带宽</p>
                <p>提高转换效率</p>
                <p>减少温度敏感性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验技术与应用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>实验装置</h3>
            <p>二次谐波产生的实验设置</p>
            <div class="mathematical-content">
              <h4>基本配置：</h4>
              <div class="equation-block">
                <p>激光器 → 聚焦透镜 → 非线性晶体</p>
                <p>→ 滤波片 → 探测器</p>
                <p>温度控制系统</p>
                <p>角度调节机构</p>
              </div>
              
              <h4>关键参数：</h4>
              <div class="equation-block">
                <p>束腰半径: w₀ ≈ √(λL/π)</p>
                <p>瑞利长度: z_R = πw₀²/λ</p>
                <p>聚焦参数: ξ = L/(2z_R)</p>
                <p>最优聚焦: ξ ≈ 2.84</p>
              </div>
              
              <h4>测量技术：</h4>
              <div class="equation-block">
                <p>功率计测量</p>
                <p>光谱仪分析</p>
                <p>CCD成像</p>
                <p>自相关测量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>激光倍频</h3>
            <p>激光器频率转换</p>
            <div class="mathematical-content">
              <h4>Nd:YAG倍频：</h4>
              <div class="equation-block">
                <p>1064 nm → 532 nm</p>
                <p>转换效率: >50%</p>
                <p>KTP, BBO晶体</p>
                <p>绿光激光器</p>
              </div>
              
              <h4>Ti:Sapphire倍频：</h4>
              <div class="equation-block">
                <p>800 nm → 400 nm</p>
                <p>BBO Type I相位匹配</p>
                <p>飞秒脉冲倍频</p>
                <p>紫外光产生</p>
              </div>
              
              <h4>二极管激光倍频：</h4>
              <div class="equation-block">
                <p>1550 nm → 775 nm</p>
                <p>PPLN波导</p>
                <p>高效率转换</p>
                <p>通信波长应用</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>表面二次谐波</h3>
            <p>界面和表面的探测</p>
            <div class="mathematical-content">
              <h4>表面敏感性：</h4>
              <div class="equation-block">
                <p>体相SHG在中心对称材料中禁戒</p>
                <p>表面破坏中心对称性</p>
                <p>单分子层敏感度</p>
              </div>
              
              <h4>界面研究：</h4>
              <div class="equation-block">
                <p>固-液界面</p>
                <p>固-气界面</p>
                <p>薄膜-基底界面</p>
                <p>生物膜界面</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>表面化学</p>
                <p>生物传感</p>
                <p>材料表征</p>
                <p>界面动力学</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级理论与现象</h2>
        
        <div class="advanced-theory">
          <div class="theory-card">
            <h3>走离效应详解</h3>
            <div class="theory-content">
              <h4>物理机制：</h4>
              <p>在双折射晶体中，寻常光和非寻常光具有不同的群速度，导致光束在传播过程中发生空间分离。</p>
              
              <h4>数学描述：</h4>
              <div class="equation-block">
                <p>ρ = L × tan(2α)</p>
                <p>α = arctan[(1/n_o - 1/n_e)/(dn_e/dθ)]</p>
                <p>L_eff = L/(1 + ρ²/w₀²)</p>
              </div>
              
              <h4>补偿方法：</h4>
              <ul>
                <li>使用补偿晶体</li>
                <li>优化光束形状</li>
                <li>选择合适的相位匹配类型</li>
                <li>温度调谐替代角度调谐</li>
              </ul>
              
              <h4>影响评估：</h4>
              <div class="equation-block">
                <p>效率降低因子: η_walkoff/η_ideal</p>
                <p>= 1/(1 + ρ²/w₀²)</p>
                <p>w₀: 光束腰半径</p>
              </div>
            </div>
          </div>
          
          <div class="theory-card">
            <h3>群速度失配</h3>
            <div class="theory-content">
              <h4>时域效应：</h4>
              <p>基频和倍频脉冲具有不同的群速度，在长晶体中会导致时间分离和效率下降。</p>
              
              <h4>群速度失配参数：</h4>
              <div class="equation-block">
                <p>GVM = |1/v_g(ω) - 1/v_g(2ω)|</p>
                <p>v_g = c/(n - λdn/dλ)</p>
                <p>时间展宽: Δt = GVM × L</p>
              </div>
              
              <h4>接受带宽：</h4>
              <div class="equation-block">
                <p>Δλ_FWHM = 0.886 × λ²/(πL|dn/dλ|)</p>
                <p>超短脉冲的限制因素</p>
                <p>频谱整形需求</p>
              </div>
              
              <h4>优化策略：</h4>
              <ul>
                <li>选择薄晶体</li>
                <li>使用啁啾脉冲</li>
                <li>多晶体级联</li>
                <li>准相位匹配</li>
              </ul>
            </div>
          </div>
          
          <div class="theory-card">
            <h3>Boyd-Kleinman理论</h3>
            <div class="theory-content">
              <h4>聚焦优化：</h4>
              <p>考虑衍射效应的SHG效率优化理论，确定最佳聚焦条件和晶体长度。</p>
              
              <h4>关键参数：</h4>
              <div class="equation-block">
                <p>B = (kw₀²)/(2L) (聚焦参数)</p>
                <p>ξ = ΔkL/2 (相位失配参数)</p>
                <p>η = η_ideal × h(B, ξ)</p>
              </div>
              
              <h4>优化条件：</h4>
              <div class="equation-block">
                <p>最优聚焦: B_opt ≈ 2.84</p>
                <p>L_opt = kw₀²/5.68</p>
                <p>最大效率因子: h_max ≈ 1.068</p>
              </div>
              
              <h4>实际应用：</h4>
              <ul>
                <li>晶体长度设计</li>
                <li>聚焦透镜选择</li>
                <li>光束质量要求</li>
                <li>系统优化指导</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验技术与测量方法</h2>
        
        <div class="experiment-techniques">
          <div class="technique-section">
            <h3>SHG效率测量</h3>
            <div class="technique-content">
              <h4>实验装置：</h4>
              <ul>
                <li>基频激光器（连续波或脉冲）</li>
                <li>非线性晶体和旋转台</li>
                <li>滤光片和光谱仪</li>
                <li>功率计和探测器</li>
              </ul>
              
              <h4>测量步骤：</h4>
              <div class="equation-block">
                <p>1. 调节相位匹配角度</p>
                <p>2. 测量基频和倍频功率</p>
                <p>3. 计算转换效率η = P₂ω/P_ω</p>
                <p>4. 优化晶体取向和温度</p>
              </div>
              
              <h4>数据分析：</h4>
              <div class="equation-block">
                <p>η_theory = (2ω²d_eff²L²I_ω)/(n²ωn₂ωε₀c³)</p>
                <p>拟合实验数据确定d_eff</p>
                <p>考虑光束质量和走离效应</p>
              </div>
            </div>
          </div>
          
          <div class="technique-section">
            <h3>Maker条纹技术</h3>
            <div class="technique-content">
              <h4>原理：</h4>
              <p>通过旋转薄晶体片，观察SHG强度随角度的周期性变化，用于测量非线性系数和晶体取向。</p>
              
              <h4>理论公式：</h4>
              <div class="equation-block">
                <p>I₂ω ∝ |∫₀ᴸ exp(iΔkz)dz|²</p>
                <p>= L²sinc²(ΔkL/2)</p>
                <p>Δk = (4π/λ)[n₂ω - n_ω]cosθ</p>
              </div>
              
              <h4>应用：</h4>
              <ul>
                <li>薄膜非线性系数测量</li>
                <li>晶体取向确定</li>
                <li>表面SHG研究</li>
                <li>界面对称性分析</li>
              </ul>
            </div>
          </div>
          
          <div class="technique-section">
            <h3>Z-scan技术</h3>
            <div class="technique-content">
              <h4>测量原理：</h4>
              <p>通过移动样品沿光束传播方向，测量透射率变化，确定非线性折射率和吸收系数。</p>
              
              <h4>开孔Z-scan：</h4>
              <div class="equation-block">
                <p>T(z) = 1 + (4Δφ₀x)/[(x² + 9)(x² + 1)]</p>
                <p>Δφ₀ = kn₂I₀L_eff</p>
                <p>x = z/z₀ (归一化位置)</p>
              </div>
              
              <h4>闭孔Z-scan：</h4>
              <div class="equation-block">
                <p>测量非线性吸收</p>
                <p>β_eff = β₂ + β₃I + ...</p>
                <p>多光子吸收系数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高级主题</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🌡️ 温度调谐</h3>
            <div class="feature-content">
              <h4>温度相位匹配：</h4>
              <ul>
                <li>利用折射率温度系数</li>
                <li>dn/dT补偿色散</li>
                <li>非临界相位匹配</li>
                <li>大接受角优势</li>
              </ul>
              
              <h4>温度带宽：</h4>
              <ul>
                <li>ΔT = λ/(πL|dn/dT|)</li>
                <li>温度稳定性要求</li>
                <li>热管理设计</li>
                <li>温控精度</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>⚡ 脉冲效应</h3>
            <div class="feature-content">
              <h4>时间特性：</h4>
              <ul>
                <li>脉冲宽度保持</li>
                <li>群速度失配</li>
                <li>时间走离效应</li>
                <li>脉冲压缩可能</li>
              </ul>
              
              <h4>峰值功率：</h4>
              <ul>
                <li>高峰值功率优势</li>
                <li>损伤阈值考虑</li>
                <li>非线性积累</li>
                <li>多光子过程</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔧 工程优化</h3>
            <div class="feature-content">
              <h4>效率优化：</h4>
              <ul>
                <li>晶体长度选择</li>
                <li>聚焦条件优化</li>
                <li>模式匹配</li>
                <li>损耗最小化</li>
              </ul>
              
              <h4>稳定性设计：</h4>
              <ul>
                <li>机械稳定性</li>
                <li>热稳定性</li>
                <li>长期漂移控制</li>
                <li>反馈控制系统</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用实例与前沿发展</h2>
        
        <div class="applications-section">
          <div class="application-card">
            <h3>激光器倍频系统</h3>
            <div class="application-content">
              <h4>Nd:YAG激光器倍频：</h4>
              <ul>
                <li>1064 nm → 532 nm绿光输出</li>
                <li>KTP晶体，转换效率>50%</li>
                <li>工业加工和医疗应用</li>
                <li>功率可达数百瓦</li>
              </ul>
              
              <h4>飞秒激光倍频：</h4>
              <div class="equation-block">
                <p>Ti:Sapphire: 800 nm → 400 nm</p>
                <p>BBO晶体，Type I相位匹配</p>
                <p>脉冲宽度<100 fs</p>
                <p>超快光谱学应用</p>
              </div>
              
              <h4>二极管激光倍频：</h4>
              <ul>
                <li>PPLN波导结构</li>
                <li>紧凑型设计</li>
                <li>高效率转换</li>
                <li>通信和显示应用</li>
              </ul>
            </div>
          </div>
          
          <div class="application-card">
            <h3>生物医学成像</h3>
            <div class="application-content">
              <h4>SHG显微镜：</h4>
              <ul>
                <li>无标记成像技术</li>
                <li>胶原纤维可视化</li>
                <li>深层组织穿透</li>
                <li>活体细胞研究</li>
              </ul>
              
              <h4>技术优势：</h4>
              <div class="equation-block">
                <p>空间分辨率: ~200 nm</p>
                <p>穿透深度: >500 μm</p>
                <p>对比度高</p>
                <p>光损伤小</p>
              </div>
              
              <h4>临床应用：</h4>
              <ul>
                <li>皮肤病诊断</li>
                <li>癌症检测</li>
                <li>组织工程</li>
                <li>药物筛选</li>
              </ul>
            </div>
          </div>
          
          <div class="application-card">
            <h3>量子光学应用</h3>
            <div class="application-content">
              <h4>纠缠光子产生：</h4>
              <ul>
                <li>自发参量下转换(SPDC)</li>
                <li>Type II相位匹配</li>
                <li>偏振纠缠态</li>
                <li>量子通信基础</li>
              </ul>
              
              <h4>压缩态光场：</h4>
              <div class="equation-block">
                <p>振幅压缩和相位压缩</p>
                <p>量子噪声低于散粒噪声</p>
                <p>引力波探测应用</p>
                <p>精密测量技术</p>
              </div>
              
              <h4>量子频率转换：</h4>
              <ul>
                <li>量子态保持转换</li>
                <li>通信波长兼容</li>
                <li>量子网络接口</li>
                <li>量子存储应用</li>
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
              <h4>物理机制</h4>
              <p>二次谐波产生源于二阶非线性极化，需要非中心对称材料，通过ω+ω→2ω的频率转换过程实现激光倍频。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>相位匹配</h4>
              <p>相位匹配是高效SHG的关键，可通过双折射、温度调谐或准相位匹配技术实现，决定了转换效率和带宽。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>非线性材料</h4>
              <p>BBO、KDP、LiIO₃等晶体各有特点，PPLN等准相位匹配材料提供了更大的设计自由度和更高的有效非线性系数。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>实验技术</h4>
              <p>SHG实验需要考虑聚焦条件、温度控制、角度调节等因素，在激光技术、表面科学等领域有重要应用。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>工程应用</h4>
              <p>二次谐波产生是现代激光器、光通信、生物医学等领域的核心技术，需要综合考虑效率、稳定性和成本。</p>
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
  background: #38b2ac;
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
.advanced-theory {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.theory-card {
  background: linear-gradient(135deg, #fefce8 0%, #fef3c7 100%);
  border: 1px solid #fbbf24;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.theory-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(245, 158, 11, 0.1);
}

.theory-card h3 {
  color: #d97706;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.theory-content h4 {
  color: #ea580c;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.theory-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.theory-content li {
  margin: 0.3rem 0;
  line-height: 1.4;
}

.experiment-techniques {
  margin: 2rem 0;
}

.technique-section {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border: 1px solid #7dd3fc;
  border-radius: 15px;
  padding: 2rem;
  margin: 1.5rem 0;
  transition: all 0.3s ease;
}

.technique-section:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(14, 165, 233, 0.1);
}

.technique-section h3 {
  color: #0369a1;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.technique-content h4 {
  color: #0284c7;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.technique-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.technique-content li {
  margin: 0.3rem 0;
  line-height: 1.4;
}

.applications-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-card {
  background: linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%);
  border: 1px solid #f472b6;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.application-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(236, 72, 153, 0.1);
}

.application-card h3 {
  color: #db2777;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.application-content h4 {
  color: #be185d;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.application-content ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.application-content li {
  margin: 0.3rem 0;
  line-height: 1.4;
}
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
  color: #38b2ac;
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