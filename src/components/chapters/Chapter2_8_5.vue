<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.8.5 非线性磁光效应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">磁光调制</span>
        <span class="reading-time">预计阅读时间: 40分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>非线性磁光效应概述</h2>
        <p class="lead-text">
          非线性磁光效应是指在强光场和磁场共同作用下，介质的光学性质
          发生非线性变化的现象。这类效应结合了非线性光学和磁光学的特点，
          在磁光存储、全光磁开关、自旋电子学等领域具有重要应用价值。
          非线性磁光效应包括磁光Kerr效应的非线性增强、磁致二次谐波产生、
          以及磁控非线性折射率等多种现象。
        </p>
      </section>

      <section class="content-section theoretical-foundations">
        <h2>理论基础与物理机制</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>微观机制</h3>
            <p>非线性磁光效应的量子力学起源</p>
            <div class="mathematical-content">
              <h4>电子轨道耦合：</h4>
              <div class="equation-block">
                <p>L·S 自旋轨道耦合</p>
                <p>H_so = λ L·S</p>
                <p>轨道角动量猝灭</p>
                <p>有效磁矩 μ_eff = g_J μ_B J</p>
              </div>
              
              <h4>交换相互作用：</h4>
              <div class="equation-block">
                <p>Heisenberg 交换</p>
                <p>H_ex = -2J S_i·S_j</p>
                <p>直接交换</p>
                <p>超交换机制</p>
              </div>
              
              <h4>晶体场效应：</h4>
              <div class="equation-block">
                <p>配体场理论</p>
                <p>轨道简并度解除</p>
                <p>磁各向异性能</p>
                <p>E_anis = K sin²θ</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>非线性极化理论</h3>
            <p>磁场中的非线性光学响应</p>
            <div class="mathematical-content">
              <h4>极化展开：</h4>
              <div class="equation-block">
                <p>P = χ^(1)E + χ^(2)EE + χ^(3)EEE + ...</p>
                <p>磁化依赖性</p>
                <p>χ^(n)(M) = χ^(n)_0 + χ^(n)_1 M + χ^(n)_2 M² + ...</p>
                <p>时间反演对称性破缺</p>
              </div>
              
              <h4>磁光张量：</h4>
              <div class="equation-block">
                <p>ε_ij = ε_0 δ_ij + iQ_ijk M_k</p>
                <p>Voigt参数 Q_ijk</p>
                <p>磁圆二色性</p>
                <p>Δε = ε_+ - ε_-</p>
              </div>
              
              <h4>非线性磁化率：</h4>
              <div class="equation-block">
                <p>χ^(2)_ijk(M) = α_ijkl M_l</p>
                <p>磁偶极跃迁</p>
                <p>电四极跃迁</p>
                <p>界面贡献</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>量子跃迁理论</h3>
            <p>磁性系统中的光学跃迁过程</p>
            <div class="mathematical-content">
              <h4>跃迁矩阵元：</h4>
              <div class="equation-block">
                <p>M_if = ⟨f|H_int|i⟩</p>
                <p>电偶极近似</p>
                <p>磁偶极修正</p>
                <p>自旋轨道耦合效应</p>
              </div>
              
              <h4>选择定则：</h4>
              <div class="equation-block">
                <p>Δl = ±1 (电偶极)</p>
                <p>Δj = 0, ±1 (总角动量)</p>
                <p>Δm_j = 0, ±1 (磁量子数)</p>
                <p>宇称守恒</p>
              </div>
              
              <h4>跃迁概率：</h4>
              <div class="equation-block">
                <p>W_if = (2π/ℏ)|M_if|²δ(E_f - E_i - ℏω)</p>
                <p>费米黄金定则</p>
                <p>态密度效应</p>
                <p>温度依赖性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>线性磁光效应基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>Faraday效应</h3>
            <p>磁场中的偏振面旋转</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>θ_F = VBL</p>
                <p>V: Verdet常数</p>
                <p>B: 磁感应强度</p>
                <p>L: 传播距离</p>
              </div>
              
              <h4>物理机制：</h4>
              <div class="equation-block">
                <p>磁圆双折射</p>
                <p>左右圆偏振光</p>
                <p>不同折射率</p>
                <p>Δn = n_L - n_R</p>
              </div>
              
              <h4>材料特性：</h4>
              <div class="equation-block">
                <p>顺磁材料: V > 0</p>
                <p>抗磁材料: V < 0</p>
                <p>铁磁材料: 大V值</p>
                <p>温度依赖性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>Kerr效应</h3>
            <p>反射中的磁光效应</p>
            <div class="mathematical-content">
              <h4>三种几何配置：</h4>
              <div class="equation-block">
                <p>极向Kerr效应</p>
                <p>纵向Kerr效应</p>
                <p>横向Kerr效应</p>
                <p>磁化方向相关</p>
              </div>
              
              <h4>复折射率：</h4>
              <div class="equation-block">
                <p>ñ = n + ik</p>
                <p>磁光常数: Q</p>
                <p>Kerr旋转角: θ_K</p>
                <p>椭偏度: ε_K</p>
              </div>
              
              <h4>应用：</h4>
              <div class="equation-block">
                <p>磁光存储</p>
                <p>磁畴观察</p>
                <p>磁性测量</p>
                <p>自旋检测</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>Cotton-Mouton效应</h3>
            <p>横向磁场诱导双折射</p>
            <div class="mathematical-content">
              <h4>双折射：</h4>
              <div class="equation-block">
                <p>Δn = CB²</p>
                <p>C: Cotton-Mouton常数</p>
                <p>B²: 磁场平方</p>
                <p>横向磁场</p>
              </div>
              
              <h4>物理起源：</h4>
              <div class="equation-block">
                <p>磁致伸缩</p>
                <p>分子取向</p>
                <p>电子轨道效应</p>
                <p>自旋-轨道耦合</p>
              </div>
              
              <h4>测量技术：</h4>
              <div class="equation-block">
                <p>偏振分析</p>
                <p>相位延迟测量</p>
                <p>高精度检测</p>
                <p>温度控制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>非线性磁光效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>磁致二次谐波</h3>
            <p>磁场调制的二次谐波产生</p>
            <div class="mathematical-content">
              <h4>非线性极化：</h4>
              <div class="equation-block">
                <p>P^(2ω) = χ^(2)(M)E²</p>
                <p>χ^(2): 磁化相关</p>
                <p>对称性破缺</p>
                <p>界面增强</p>
              </div>
              
              <h4>磁化依赖：</h4>
              <div class="equation-block">
                <p>I^(2ω) ∝ |M|²</p>
                <p>磁畴对比</p>
                <p>磁化方向敏感</p>
                <p>表面选择性</p>
              </div>
              
              <h4>应用优势：</h4>
              <div class="equation-block">
                <p>界面特异性</p>
                <p>高空间分辨</p>
                <p>实时磁畴成像</p>
                <p>非接触测量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>非线性Faraday效应</h3>
            <p>强光场中的增强旋转</p>
            <div class="mathematical-content">
              <h4>非线性旋转：</h4>
              <div class="equation-block">
                <p>θ = θ₁I + θ₃I³</p>
                <p>θ₁: 线性系数</p>
                <p>θ₃: 三次非线性</p>
                <p>I: 光强</p>
              </div>
              
              <h4>物理机制：</h4>
              <div class="equation-block">
                <p>多光子跃迁</p>
                <p>虚拟中间态</p>
                <p>磁光共振增强</p>
                <p>载流子动力学</p>
              </div>
              
              <h4>材料系统：</h4>
              <div class="equation-block">
                <p>磁性半导体</p>
                <p>稀磁半导体</p>
                <p>磁性量子点</p>
                <p>自旋玻璃</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚙️</div>
            <h3>磁控非线性折射</h3>
            <p>磁场调制的非线性折射率</p>
            <div class="mathematical-content">
              <h4>折射率调制：</h4>
              <div class="equation-block">
                <p>n = n₀ + n₂I + n₄I²</p>
                <p>磁场依赖系数</p>
                <p>n₂(B), n₄(B)</p>
                <p>各向异性</p>
              </div>
              
              <h4>自聚焦效应：</h4>
              <div class="equation-block">
                <p>磁控自聚焦</p>
                <p>临界功率调制</p>
                <p>光束整形</p>
                <p>空间孤子</p>
              </div>
              
              <h4>器件应用：</h4>
              <div class="equation-block">
                <p>全光开关</p>
                <p>磁光限幅器</p>
                <p>可调透镜</p>
                <p>光束控制</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section advanced-techniques">
        <h2>先进实验技术与表征方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>超快磁光谱学</h3>
            <p>飞秒时间分辨磁光测量技术</p>
            <div class="mathematical-content">
              <h4>泵浦-探测技术：</h4>
              <div class="equation-block">
                <p>时间分辨率 < 100 fs</p>
                <p>磁化动力学测量</p>
                <p>自旋弛豫过程</p>
                <p>相干磁振子激发</p>
              </div>
              
              <h4>测量参数：</h4>
              <div class="equation-block">
                <p>退磁时间 τ_M</p>
                <p>自旋-晶格弛豫 τ_sl</p>
                <p>Gilbert阻尼 α</p>
                <p>磁各向异性场 H_k</p>
              </div>
              
              <h4>实验配置：</h4>
              <div class="equation-block">
                <p>Ti:Sapphire激光器</p>
                <p>光参量放大器</p>
                <p>延迟线扫描</p>
                <p>锁相放大检测</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>近场磁光显微</h3>
            <p>纳米尺度磁畴成像技术</p>
            <div class="mathematical-content">
              <h4>技术原理：</h4>
              <div class="equation-block">
                <p>扫描近场光学显微镜</p>
                <p>光纤探针</p>
                <p>局域场增强</p>
                <p>亚波长分辨率</p>
              </div>
              
              <h4>分辨率提升：</h4>
              <div class="equation-block">
                <p>空间分辨率 < 50 nm</p>
                <p>等离激元增强</p>
                <p>尖端场局域化</p>
                <p>背景抑制技术</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>磁畴壁结构</p>
                <p>涡旋态成像</p>
                <p>磁性纳米颗粒</p>
                <p>自旋纹理观测</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌈</div>
            <h3>同步辐射磁光谱</h3>
            <p>元素选择性磁光谱学</p>
            <div class="mathematical-content">
              <h4>X射线磁圆二色：</h4>
              <div class="equation-block">
                <p>XMCD = μ_+ - μ_-</p>
                <p>轨道磁矩测量</p>
                <p>自旋磁矩分离</p>
                <p>元素特异性</p>
              </div>
              
              <h4>磁矩分析：</h4>
              <div class="equation-block">
                <p>轨道磁矩 m_l</p>
                <p>自旋磁矩 m_s</p>
                <p>磁偶极项 T_z</p>
                <p>求和定则应用</p>
              </div>
              
              <h4>实验条件：</h4>
              <div class="equation-block">
                <p>圆偏振X射线</p>
                <p>强磁场环境</p>
                <p>低温测量</p>
                <p>超高真空</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section emerging-materials">
        <h2>新兴材料与器件技术</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>二维磁性材料</h3>
            <p>单层和少层磁性材料的非线性磁光效应</p>
            <div class="mathematical-content">
              <h4>典型材料：</h4>
              <div class="equation-block">
                <p>CrI₃ 单分子层</p>
                <p>Cr₂Ge₂Te₆ 薄膜</p>
                <p>VSe₂ 范德华材料</p>
                <p>MnBi₂Te₄ 拓扑绝缘体</p>
              </div>
              
              <h4>独特性质：</h4>
              <div class="equation-block">
                <p>Ising型磁各向异性</p>
                <p>层间磁耦合</p>
                <p>电场调控磁性</p>
                <p>巨磁光效应</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>超薄磁光器件</p>
                <p>范德华异质结</p>
                <p>自旋谷电子学</p>
                <p>量子磁性研究</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>拓扑磁性材料</h3>
            <p>拓扑保护磁结构的光学响应</p>
            <div class="mathematical-content">
              <h4>拓扑结构：</h4>
              <div class="equation-block">
                <p>磁性斯格明子</p>
                <p>磁性涡旋</p>
                <p>磁畴壁</p>
                <p>拓扑数 Q = ±1</p>
              </div>
              
              <h4>光学特征：</h4>
              <div class="equation-block">
                <p>拓扑霍尔效应</p>
                <p>手性磁光响应</p>
                <p>非互易光传播</p>
                <p>磁光涡旋</p>
              </div>
              
              <h4>器件应用：</h4>
              <div class="equation-block">
                <p>磁性存储器</p>
                <p>神经形态器件</p>
                <p>拓扑光子学</p>
                <p>量子计算</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>多铁性材料</h3>
            <p>磁电耦合材料的非线性光学</p>
            <div class="mathematical-content">
              <h4>耦合机制：</h4>
              <div class="equation-block">
                <p>磁电耦合 α_ij</p>
                <p>P = α H (线性)</p>
                <p>M = β E (逆效应)</p>
                <p>应变介导耦合</p>
              </div>
              
              <h4>典型材料：</h4>
              <div class="equation-block">
                <p>BiFeO₃ 钙钛矿</p>
                <p>TbMnO₃ 螺旋磁体</p>
                <p>Cr₂O₃ 反铁磁体</p>
                <p>复合多铁材料</p>
              </div>
              
              <h4>光学调控：</h4>
              <div class="equation-block">
                <p>电场调控磁光</p>
                <p>磁场调控电光</p>
                <p>光致磁电效应</p>
                <p>多重序参量耦合</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section frontier-applications">
        <h2>前沿应用与发展趋势</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🚀</div>
            <h3>量子信息技术</h3>
            <p>磁光效应在量子技术中的应用</p>
            <div class="mathematical-content">
              <h4>量子比特操控：</h4>
              <div class="equation-block">
                <p>自旋量子比特</p>
                <p>光学量子门</p>
                <p>量子纠缠产生</p>
                <p>量子态读取</p>
              </div>
              
              <h4>量子存储：</h4>
              <div class="equation-block">
                <p>自旋回波存储</p>
                <p>原子频率梳</p>
                <p>电磁感应透明</p>
                <p>量子中继器</p>
              </div>
              
              <h4>量子传感：</h4>
              <div class="equation-block">
                <p>磁场传感器</p>
                <p>量子磁力计</p>
                <p>生物磁场检测</p>
                <p>地磁导航</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧠</div>
            <h3>神经形态计算</h3>
            <p>磁光器件的仿生计算应用</p>
            <div class="mathematical-content">
              <h4>突触器件：</h4>
              <div class="equation-block">
                <p>磁性突触</p>
                <p>权重可调性</p>
                <p>非易失性存储</p>
                <p>低功耗操作</p>
              </div>
              
              <h4>神经元模拟：</h4>
              <div class="equation-block">
                <p>磁振子神经元</p>
                <p>阈值开关</p>
                <p>脉冲发放</p>
                <p>可塑性学习</p>
              </div>
              
              <h4>网络架构：</h4>
              <div class="equation-block">
                <p>储备池计算</p>
                <p>循环神经网络</p>
                <p>深度学习加速</p>
                <p>边缘计算</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>集成光子学</h3>
            <p>片上磁光器件集成技术</p>
            <div class="mathematical-content">
              <h4>集成平台：</h4>
              <div class="equation-block">
                <p>硅光子学平台</p>
                <p>III-V族集成</p>
                <p>混合集成技术</p>
                <p>异质外延生长</p>
              </div>
              
              <h4>器件功能：</h4>
              <div class="equation-block">
                <p>片上隔离器</p>
                <p>非互易器件</p>
                <p>磁光调制器</p>
                <p>光学环形器</p>
              </div>
              
              <h4>技术挑战：</h4>
              <div class="equation-block">
                <p>材料兼容性</p>
                <p>损耗控制</p>
                <p>温度稳定性</p>
                <p>制造工艺</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>磁性材料中的非线性光学</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔋</div>
            <h3>铁磁金属</h3>
            <p>强磁性材料的非线性响应</p>
            <div class="mathematical-content">
              <h4>电子结构：</h4>
              <div class="equation-block">
                <p>自旋分裂能带</p>
                <p>交换劈裂</p>
                <p>费米面不对称</p>
                <p>自旋极化</p>
              </div>
              
              <h4>光学跃迁：</h4>
              <div class="equation-block">
                <p>带间跃迁</p>
                <p>带内跃迁</p>
                <p>自旋翻转跃迁</p>
                <p>等离激元激发</p>
              </div>
              
              <h4>典型材料：</h4>
              <div class="equation-block">
                <p>Fe, Co, Ni</p>
                <p>稀土-过渡金属</p>
                <p>Heusler合金</p>
                <p>磁性多层膜</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>磁性半导体</h3>
            <p>稀磁半导体的光磁效应</p>
            <div class="mathematical-content">
              <h4>材料特点：</h4>
              <div class="equation-block">
                <p>可调带隙</p>
                <p>巨磁光效应</p>
                <p>载流子调控</p>
                <p>自旋注入</p>
              </div>
              
              <h4>典型系统：</h4>
              <div class="equation-block">
                <p>(Ga,Mn)As</p>
                <p>(Zn,Co)O</p>
                <p>(Ti,Co)O₂</p>
                <p>磁性量子阱</p>
              </div>
              
              <h4>应用前景：</h4>
              <div class="equation-block">
                <p>自旋LED</p>
                <p>磁光存储</p>
                <p>量子信息</p>
                <p>自旋晶体管</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>磁性纳米结构</h3>
            <p>低维磁性系统的非线性效应</p>
            <div class="mathematical-content">
              <h4>量子限域效应：</h4>
              <div class="equation-block">
                <p>尺寸量子化</p>
                <p>表面效应增强</p>
                <p>形状各向异性</p>
                <p>单畴结构</p>
              </div>
              
              <h4>结构类型：</h4>
              <div class="equation-block">
                <p>磁性量子点</p>
                <p>磁性纳米线</p>
                <p>磁性薄膜</p>
                <p>磁性超晶格</p>
              </div>
              
              <h4>增强机制：</h4>
              <div class="equation-block">
                <p>局域场增强</p>
                <p>等离激元共振</p>
                <p>热点效应</p>
                <p>界面耦合</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验技术与测量方法</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔬 时间分辨磁光谱</h3>
            <div class="feature-content">
              <h4>超快磁动力学：</h4>
              <ul>
                <li>飞秒泵浦-探测</li>
                <li>磁化动力学</li>
                <li>自旋弛豫时间</li>
                <li>相干磁振子</li>
              </ul>
              
              <h4>测量参数：</h4>
              <ul>
                <li>磁化翻转时间</li>
                <li>自旋-晶格弛豫</li>
                <li>磁各向异性</li>
                <li>阻尼参数</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌐 空间分辨成像</h3>
            <div class="feature-content">
              <h4>磁畴成像：</h4>
              <ul>
                <li>Kerr显微镜</li>
                <li>二次谐波成像</li>
                <li>近场光学</li>
                <li>X射线磁圆二色</li>
              </ul>
              
              <h4>分辨率：</h4>
              <ul>
                <li>光学衍射极限</li>
                <li>近场增强</li>
                <li>超分辨技术</li>
                <li>纳米尺度成像</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔋 光谱分析技术</h3>
            <div class="feature-content">
              <h4>光谱方法：</h4>
              <ul>
                <li>磁圆二色谱</li>
                <li>磁线二色谱</li>
                <li>共振增强</li>
                <li>元素选择性</li>
              </ul>
              
              <h4>信息提取：</h4>
              <ul>
                <li>轨道磁矩</li>
                <li>自旋磁矩</li>
                <li>磁各向异性</li>
                <li>电子结构</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用与器件</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>💾 磁光存储</h3>
            <div class="feature-content">
              <h4>存储原理：</h4>
              <ul>
                <li>热磁写入</li>
                <li>磁光读出</li>
                <li>垂直磁化</li>
                <li>超分辨技术</li>
              </ul>
              
              <h4>技术发展：</h4>
              <ul>
                <li>蓝光激光器</li>
                <li>近场记录</li>
                <li>多层存储</li>
                <li>全息存储</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔄 全光磁开关</h3>
            <div class="feature-content">
              <h4>开关机制：</h4>
              <ul>
                <li>光致磁化翻转</li>
                <li>逆Faraday效应</li>
                <li>热效应辅助</li>
                <li>超快开关</li>
              </ul>
              
              <h4>器件特点：</h4>
              <ul>
                <li>无电接触</li>
                <li>超快响应</li>
                <li>低功耗</li>
                <li>集成兼容</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🧬 自旋电子学器件</h3>
            <div class="feature-content">
              <h4>器件类型：</h4>
              <ul>
                <li>自旋LED</li>
                <li>自旋激光器</li>
                <li>磁光调制器</li>
                <li>自旋探测器</li>
              </ul>
              
              <h4>技术优势：</h4>
              <ul>
                <li>自旋信息处理</li>
                <li>量子相干性</li>
                <li>低功耗操作</li>
                <li>多功能集成</li>
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
              <h4>理论基础</h4>
              <p>非线性磁光效应源于自旋轨道耦合、交换相互作用和晶体场效应，通过量子跃迁理论和非线性极化理论描述。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>效应分类</h4>
              <p>包括磁致二次谐波、非线性Faraday效应、磁控非线性折射等，结合了磁性和非线性光学特性。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>先进技术</h4>
              <p>超快磁光谱学、近场磁光显微、同步辐射磁光谱等技术实现飞秒时间分辨和纳米空间分辨测量。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>新兴材料</h4>
              <p>二维磁性材料、拓扑磁性材料、多铁性材料展现出独特的非线性磁光性质和应用潜力。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>材料体系</h4>
              <p>铁磁金属、磁性半导体、磁性纳米结构各有特点，量子限域和界面效应显著增强非线性磁光响应。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">6</span>
            <div class="point-content">
              <h4>前沿应用</h4>
              <p>量子信息技术、神经形态计算、集成光子学等领域的应用推动了磁光技术的快速发展。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">7</span>
            <div class="point-content">
              <h4>器件应用</h4>
              <p>磁光存储、全光磁开关、自旋电子学器件等应用，推动信息存储和处理技术的发展。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">8</span>
            <div class="point-content">
              <h4>发展前景</h4>
              <p>非线性磁光效应在量子信息、自旋电子学、超快光学等前沿领域具有重要应用潜力和广阔发展空间。</p>
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

/* 新增部分的样式 */
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

.advanced-techniques .concept-card {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
}

.advanced-techniques .concept-card h3,
.advanced-techniques .concept-card h4 {
  color: white;
}

.advanced-techniques .equation-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.emerging-materials .concept-card {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
}

.emerging-materials .concept-card h3,
.emerging-materials .concept-card h4 {
  color: white;
}

.emerging-materials .equation-block {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.frontier-applications .concept-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2d3748;
}

.frontier-applications .concept-card h3,
.frontier-applications .concept-card h4 {
  color: #2d3748;
}

.frontier-applications .equation-block {
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(45, 55, 72, 0.1);
  color: #2d3748;
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