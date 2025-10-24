<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.9.1 输运理论概述</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">基础理论</span>
        <span class="reading-time">预计阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>输运理论简介</h2>
        <p class="lead-text">
          输运理论是凝聚态物理学中研究载流子在固体中运动规律的重要分支，
          它描述了电子、空穴、声子等准粒子在外场作用下的输运过程。
          输运现象包括电导、热导、扩散、霍尔效应、热电效应等，这些现象
          不仅具有重要的理论意义，更是现代电子器件和能源技术的物理基础。
          本章将系统介绍输运理论的基本概念、理论框架和主要输运现象，
          为深入理解固体中的输运机制奠定基础。
        </p>
      </section>

      <section class="content-section">
        <h2>输运现象的基本概念</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>载流子输运</h3>
            <p>固体中载流子的运动与输运机制</p>
            <div class="mathematical-content">
              <h4>载流子类型：</h4>
              <div class="equation-block">
                <p>电子载流子</p>
                <p>空穴载流子</p>
                <p>离子载流子</p>
                <p>准粒子载流子</p>
              </div>
              
              <h4>输运参数：</h4>
              <div class="equation-block">
                <p>载流子浓度: n, p</p>
                <p>迁移率: μ</p>
                <p>扩散系数: D</p>
                <p>弛豫时间: τ</p>
              </div>
              
              <h4>基本关系：</h4>
              <div class="equation-block">
                <p>Einstein关系: D = μkT/e</p>
                <p>电导率: σ = neμ</p>
                <p>电流密度: J = σE</p>
                <p>欧姆定律: V = IR</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>输运机制</h3>
            <p>载流子输运的物理机制分类</p>
            <div class="mathematical-content">
              <h4>漂移输运：</h4>
              <div class="equation-block">
                <p>电场驱动</p>
                <p>v_d = μE</p>
                <p>定向运动</p>
                <p>欧姆输运</p>
              </div>
              
              <h4>扩散输运：</h4>
              <div class="equation-block">
                <p>浓度梯度驱动</p>
                <p>J_diff = -D∇n</p>
                <p>Fick定律</p>
                <p>热运动</p>
              </div>
              
              <h4>热电输运：</h4>
              <div class="equation-block">
                <p>温度梯度驱动</p>
                <p>Seebeck效应</p>
                <p>Peltier效应</p>
                <p>Thomson效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>散射过程</h3>
            <p>影响载流子输运的散射机制</p>
            <div class="mathematical-content">
              <h4>散射类型：</h4>
              <div class="equation-block">
                <p>杂质散射</p>
                <p>声子散射</p>
                <p>界面散射</p>
                <p>载流子-载流子散射</p>
              </div>
              
              <h4>散射特征：</h4>
              <div class="equation-block">
                <p>散射截面: σ_s</p>
                <p>平均自由程: λ</p>
                <p>弛豫时间: τ</p>
                <p>散射率: 1/τ</p>
              </div>
              
              <h4>温度依赖：</h4>
              <div class="equation-block">
                <p>杂质散射: τ ∝ T^0</p>
                <p>声子散射: τ ∝ T^(-1)</p>
                <p>界面散射: 弱温度依赖</p>
                <p>总散射: 1/τ_total = Σ1/τ_i</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>输运方程的理论框架</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>Boltzmann输运方程</h3>
            <p>经典输运理论的核心方程</p>
            <div class="mathematical-content">
              <h4>基本形式：</h4>
              <div class="equation-block">
                <p>∂f/∂t + v·∇f + (F/ℏ)·∇_k f = (∂f/∂t)_coll</p>
                <p>f(k,r,t): 分布函数</p>
                <p>v = ∇_k E(k)/ℏ: 群速度</p>
                <p>F: 外力</p>
              </div>
              
              <h4>弛豫时间近似：</h4>
              <div class="equation-block">
                <p>(∂f/∂t)_coll = -(f-f_0)/τ</p>
                <p>f_0: 平衡分布</p>
                <p>τ: 弛豫时间</p>
                <p>线性响应近似</p>
              </div>
              
              <h4>稳态解：</h4>
              <div class="equation-block">
                <p>f = f_0 + δf</p>
                <p>δf = -τ(v·∇f_0 + F·∇_k f_0)</p>
                <p>输运系数计算</p>
                <p>线性响应理论</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>量子输运理论</h3>
            <p>基于量子力学的输运描述</p>
            <div class="mathematical-content">
              <h4>密度矩阵方法：</h4>
              <div class="equation-block">
                <p>iℏ∂ρ/∂t = [H,ρ] + I_coll[ρ]</p>
                <p>ρ: 密度矩阵</p>
                <p>H: 哈密顿量</p>
                <p>I_coll: 碰撞积分</p>
              </div>
              
              <h4>Green函数方法：</h4>
              <div class="equation-block">
                <p>G(E) = (E - H + iη)^(-1)</p>
                <p>输运系数</p>
                <p>Kubo公式</p>
                <p>线性响应</p>
              </div>
              
              <h4>非平衡态：</h4>
              <div class="equation-block">
                <p>Keldysh形式</p>
                <p>非平衡Green函数</p>
                <p>量子动力学</p>
                <p>相干输运</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧮</div>
            <h3>输运系数计算</h3>
            <p>从微观理论到宏观输运参数</p>
            <div class="mathematical-content">
              <h4>电导率：</h4>
              <div class="equation-block">
                <p>σ = (e²/m)∫(∂f_0/∂E)τ(E)g(E)dE</p>
                <p>g(E): 态密度</p>
                <p>τ(E): 能量相关弛豫时间</p>
                <p>温度依赖性</p>
              </div>
              
              <h4>热导率：</h4>
              <div class="equation-block">
                <p>κ = (1/3)∫C_v(E)v²(E)τ(E)dE</p>
                <p>C_v: 比热容</p>
                <p>v: 载流子速度</p>
                <p>Wiedemann-Franz定律</p>
              </div>
              
              <h4>热电系数：</h4>
              <div class="equation-block">
                <p>S = -(k_B/e)∫(E-μ)/k_B T·σ(E)dE/σ</p>
                <p>Seebeck系数</p>
                <p>热电优值: ZT = S²σT/κ</p>
                <p>能带工程优化</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>输运现象的微观机制</h2>
        
        <div class="mechanism-section">
          <div class="mechanism-card">
            <h3>能带结构与输运</h3>
            <div class="mechanism-content">
              <h4>能带理论基础：</h4>
              <p>载流子的输运性质直接由材料的电子能带结构决定，包括导带和价带的形状、有效质量、能隙大小等。</p>
              
              <h4>有效质量：</h4>
              <div class="equation-block">
                <p>m* = ℏ²/(∂²E/∂k²)</p>
                <p>各向异性有效质量张量</p>
                <p>轻重空穴带</p>
                <p>多谷结构影响</p>
              </div>
              
              <h4>载流子统计：</h4>
              <div class="equation-block">
                <p>费米-狄拉克分布: f(E) = 1/[exp((E-μ)/k_B T) + 1]</p>
                <p>玻尔兹曼近似: f(E) ≈ exp(-(E-μ)/k_B T)</p>
                <p>简并与非简并条件</p>
                <p>载流子浓度计算</p>
              </div>
              
              <h4>能带填充效应：</h4>
              <ul>
                <li>费米面形状对输运的影响</li>
                <li>开放轨道与闭合轨道</li>
                <li>磁阻的几何起源</li>
                <li>量子振荡现象</li>
              </ul>
            </div>
          </div>
          
          <div class="mechanism-card">
            <h3>散射机制详解</h3>
            <div class="mechanism-content">
              <h4>杂质散射：</h4>
              <p>电离杂质和中性杂质对载流子的库仑散射和短程散射。</p>
              
              <h4>库仑散射：</h4>
              <div class="equation-block">
                <p>散射截面: σ_C ∝ Z²e⁴/(4πε₀εᵣ)²E²</p>
                <p>屏蔽效应: λ_D = √(ε₀εᵣk_B T/ne²)</p>
                <p>Brooks-Herring模型</p>
                <p>Conwell-Weisskopf模型</p>
              </div>
              
              <h4>声子散射：</h4>
              <div class="equation-block">
                <p>声学声子: 形变势散射</p>
                <p>光学声子: 极性散射</p>
                <p>散射率: 1/τ ∝ T (声学), ∝ n_ph (光学)</p>
                <p>Fröhlich相互作用</p>
              </div>
              
              <h4>界面散射：</h4>
              <ul>
                <li>表面粗糙度散射</li>
                <li>界面电荷散射</li>
                <li>尺寸效应</li>
                <li>量子阱中的界面散射</li>
              </ul>
            </div>
          </div>
          
          <div class="mechanism-card">
            <h3>输运的量子效应</h3>
            <div class="mechanism-content">
              <h4>量子干涉效应：</h4>
              <p>载流子的波动性导致的相干输运现象，在低维系统中尤为重要。</p>
              
              <h4>弱局域化：</h4>
              <div class="equation-block">
                <p>相干长度: L_φ = √(D·τ_φ)</p>
                <p>电导修正: Δσ = -e²/(2π²ℏ)·ln(L_φ/l)</p>
                <p>磁场抑制效应</p>
                <p>温度依赖性</p>
              </div>
              
              <h4>通用电导涨落：</h4>
              <div class="equation-block">
                <p>var(G) = (e²/h)²·F(L/L_φ)</p>
                <p>介观系统特征</p>
                <p>样品特异性</p>
                <p>统计性质</p>
              </div>
              
              <h4>量子霍尔效应：</h4>
              <ul>
                <li>朗道能级量子化</li>
                <li>霍尔电导平台</li>
                <li>边缘态输运</li>
                <li>拓扑保护</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>输运测量技术</h2>
        
        <div class="measurement-techniques">
          <div class="technique-category">
            <h3>电学输运测量</h3>
            <div class="technique-content">
              <h4>四探针法：</h4>
              <p>消除接触电阻影响的标准电阻率测量方法。</p>
              
              <h4>van der Pauw方法：</h4>
              <div class="equation-block">
                <p>任意形状样品的电阻率测量</p>
                <p>ρ = (πt/ln2)·(R_A + R_B)/2·f</p>
                <p>f: 几何修正因子</p>
                <p>霍尔系数同时测量</p>
              </div>
              
              <h4>霍尔效应测量：</h4>
              <div class="equation-block">
                <p>霍尔系数: R_H = E_y/(j_x B_z)</p>
                <p>载流子浓度: n = 1/(eR_H)</p>
                <p>迁移率: μ = σR_H</p>
                <p>多载流子分析</p>
              </div>
              
              <h4>磁阻测量：</h4>
              <ul>
                <li>纵向磁阻: ρ_xx(B)</li>
                <li>横向磁阻: ρ_xy(B)</li>
                <li>Shubnikov-de Haas振荡</li>
                <li>量子霍尔效应</li>
              </ul>
            </div>
          </div>
          
          <div class="technique-category">
            <h3>热电输运测量</h3>
            <div class="technique-content">
              <h4>Seebeck系数测量：</h4>
              <p>通过建立温度梯度测量热电势来确定Seebeck系数。</p>
              
              <h4>测量原理：</h4>
              <div class="equation-block">
                <p>S = -ΔV/ΔT (开路条件)</p>
                <p>差分热电偶方法</p>
                <p>稳态和瞬态测量</p>
                <p>温度梯度控制</p>
              </div>
              
              <h4>热导率测量：</h4>
              <div class="equation-block">
                <p>稳态法: κ = Q·L/(A·ΔT)</p>
                <p>瞬态法: 3ω方法</p>
                <p>激光闪光法</p>
                <p>热桥技术</p>
              </div>
              
              <h4>热电优值：</h4>
              <ul>
                <li>ZT = S²σT/κ 测量</li>
                <li>电子热导与晶格热导分离</li>
                <li>Wiedemann-Franz定律验证</li>
                <li>温度依赖性分析</li>
              </ul>
            </div>
          </div>
          
          <div class="technique-category">
            <h3>时间分辨输运测量</h3>
            <div class="technique-content">
              <h4>瞬态光电导：</h4>
              <p>利用脉冲激光激发研究载流子动力学和输运过程。</p>
              
              <h4>测量技术：</h4>
              <div class="equation-block">
                <p>泵浦-探测技术</p>
                <p>时间分辨太赫兹光谱</p>
                <p>载流子寿命测量</p>
                <p>迁移率动力学</p>
              </div>
              
              <h4>频域测量：</h4>
              <div class="equation-block">
                <p>交流电导: σ(ω) = σ₁(ω) + iσ₂(ω)</p>
                <p>介电响应</p>
                <p>等离子体频率</p>
                <p>Drude模型验证</p>
              </div>
              
              <h4>应用领域：</h4>
              <ul>
                <li>半导体载流子动力学</li>
                <li>超导体准粒子动力学</li>
                <li>拓扑材料表面态</li>
                <li>二维材料输运</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
              <section class="content-section">
        <h2>现代输运理论发展</h2>
        
        <div class="modern-theory">
          <div class="theory-section">
            <h3>拓扑输运</h3>
            <div class="theory-content">
              <h4>拓扑不变量与输运：</h4>
              <p>拓扑材料中的输运性质由材料的拓扑不变量决定，具有量子保护的特殊输运现象。</p>
              
              <h4>拓扑绝缘体：</h4>
              <div class="equation-block">
                <p>体态绝缘，表面导电</p>
                <p>自旋-动量锁定</p>
                <p>受时间反演对称保护</p>
                <p>量子化表面电导</p>
              </div>
              
              <h4>Weyl半金属：</h4>
              <div class="equation-block">
                <p>线性色散关系: E = ℏv_F|k|</p>
                <p>手性异常: ∂μ_5/∂t = (e²/2π²ℏ²)E·B</p>
                <p>负磁阻效应</p>
                <p>费米弧表面态</p>
              </div>
              
              <h4>量子反常霍尔效应：</h4>
              <ul>
                <li>零磁场下的量子化霍尔电导</li>
                <li>磁性拓扑绝缘体</li>
                <li>手性边缘态</li>
                <li>精确量子化σ_xy = e²/h</li>
              </ul>
            </div>
          </div>
          
          <div class="theory-section">
            <h3>自旋输运</h3>
            <div class="theory-content">
              <h4>自旋电子学基础：</h4>
              <p>利用电子的自旋自由度进行信息存储和传输的新兴领域。</p>
              
              <h4>自旋流：</h4>
              <div class="equation-block">
                <p>自旋流密度: j_s = (ℏ/2e)∑_σ σ·j_σ</p>
                <p>自旋扩散长度: λ_s = √(D_s τ_s)</p>
                <p>自旋弛豫时间: τ_s</p>
                <p>自旋霍尔效应</p>
              </div>
              
              <h4>自旋轨道耦合：</h4>
              <div class="equation-block">
                <p>Rashba效应: H_R = α_R(σ × k)·z</p>
                <p>Dresselhaus效应: H_D = β_D[σ_x k_x - σ_y k_y]</p>
                <p>自旋霍尔电导率</p>
                <p>逆自旋霍尔效应</p>
              </div>
              
              <h4>自旋输运现象：</h4>
              <ul>
                <li>巨磁阻效应(GMR)</li>
                <li>隧道磁阻效应(TMR)</li>
                <li>自旋转移力矩</li>
                <li>自旋塞贝克效应</li>
              </ul>
            </div>
          </div>
          
          <div class="theory-section">
            <h3>介观输运</h3>
            <div class="theory-content">
              <h4>量子点输运：</h4>
              <p>零维量子限制系统中的单电子输运和库仑阻塞效应。</p>
              
              <h4>库仑阻塞：</h4>
              <div class="equation-block">
                <p>充电能: E_C = e²/(2C)</p>
                <p>库仑钻石结构</p>
                <p>单电子晶体管</p>
                <p>Kondo效应</p>
              </div>
              
              <h4>量子输运统计：</h4>
              <div class="equation-block">
                <p>散粒噪声: S_I = 2eI</p>
                <p>全计数统计</p>
                <p>涨落定理</p>
                <p>非平衡态统计力学</p>
              </div>
              
              <h4>相干输运：</h4>
              <ul>
                <li>Landauer-Büttiker公式</li>
                <li>传输矩阵方法</li>
                <li>Aharonov-Bohm效应</li>
                <li>量子干涉器件</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>输运理论的应用</h2>
        
        <div class="applications">
          <div class="application-area">
            <h3>半导体器件</h3>
            <div class="application-content">
              <h4>MOSFET输运：</h4>
              <p>现代集成电路的核心器件，其性能直接依赖于沟道中的载流子输运。</p>
              
              <h4>器件物理：</h4>
              <div class="equation-block">
                <p>阈值电压: V_th = V_FB + 2φ_F + γ√(2φ_F)</p>
                <p>沟道电导: g_m = μC_ox(W/L)(V_GS - V_th)</p>
                <p>短沟道效应</p>
                <p>量子效应修正</p>
              </div>
              
              <h4>先进器件：</h4>
              <ul>
                <li>FinFET三维结构</li>
                <li>隧道场效应晶体管</li>
                <li>碳纳米管晶体管</li>
                <li>二维材料器件</li>
              </ul>
            </div>
          </div>
          
          <div class="application-area">
            <h3>热电材料与器件</h3>
            <div class="application-content">
              <h4>热电转换：</h4>
              <p>基于Seebeck效应和Peltier效应的能源转换技术。</p>
              
              <h4>材料优化：</h4>
              <div class="equation-block">
                <p>功率因子: PF = S²σ</p>
                <p>热电优值: ZT = S²σT/κ</p>
                <p>载流子浓度优化</p>
                <p>能带工程</p>
              </div>
              
              <h4>先进概念：</h4>
              <ul>
                <li>纳米结构热电材料</li>
                <li>量子点超晶格</li>
                <li>拓扑热电材料</li>
                <li>有机热电材料</li>
              </ul>
            </div>
          </div>
          
          <div class="application-area">
            <h3>量子器件</h3>
            <div class="application-content">
              <h4>量子计算：</h4>
              <p>基于量子相干输运的新型计算范式。</p>
              
              <h4>量子比特：</h4>
              <div class="equation-block">
                <p>超导量子比特</p>
                <p>半导体量子点</p>
                <p>拓扑量子比特</p>
                <p>离子阱量子比特</p>
              </div>
              
              <h4>量子传感：</h4>
              <ul>
                <li>量子霍尔电阻标准</li>
                <li>单电子泵</li>
                <li>超导量子干涉器(SQUID)</li>
                <li>氮空位中心磁力计</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>总结与展望</h2>
        
        <div class="summary-outlook">
          <div class="summary-points">
            <h3>核心要点</h3>
            <ul>
              <li><strong>理论基础：</strong>输运理论从经典Boltzmann方程发展到量子输运理论，涵盖了从宏观到介观的各种尺度</li>
              <li><strong>物理机制：</strong>载流子散射、能带结构、量子效应共同决定材料的输运性质</li>
              <li><strong>测量技术：</strong>从传统的电学测量到现代的时间分辨和空间分辨技术</li>
              <li><strong>新兴领域：</strong>拓扑输运、自旋输运、介观输运等前沿方向</li>
              <li><strong>技术应用：</strong>从传统半导体器件到量子器件和新能源技术</li>
            </ul>
          </div>
          
          <div class="future-prospects">
            <h3>发展前景</h3>
            <ul>
              <li><strong>量子材料：</strong>拓扑绝缘体、Weyl半金属等新型量子材料的输运研究</li>
              <li><strong>二维材料：</strong>石墨烯、过渡金属硫化物等二维材料的独特输运性质</li>
              <li><strong>人工智能：</strong>机器学习在输运理论和材料设计中的应用</li>
              <li><strong>量子技术：</strong>量子计算、量子通信、量子传感的输运物理基础</li>
              <li><strong>能源应用：</strong>高效热电材料、超导材料的输运机制研究</li>
            </ul>
          </div>
          
          <div class="research-challenges">
            <h3>研究挑战</h3>
            <ul>
              <li>多体相互作用的精确处理</li>
              <li>非平衡态输运的理论描述</li>
              <li>强关联系统的输运机制</li>
              <li>量子相干与退相干的竞争</li>
              <li>实验与理论的定量对比</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>主要输运现象</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔌</div>
            <h3>电输运</h3>
            <p>电荷载流子的输运现象</p>
            <div class="mathematical-content">
              <h4>直流电导：</h4>
              <div class="equation-block">
                <p>J = σE</p>
                <p>σ = neμ</p>
                <p>温度依赖</p>
                <p>材料特性</p>
              </div>
              
              <h4>交流电导：</h4>
              <div class="equation-block">
                <p>σ(ω) = σ₀/(1-iωτ)</p>
                <p>频率响应</p>
                <p>介电弛豫</p>
                <p>等离子体频率</p>
              </div>
              
              <h4>霍尔效应：</h4>
              <div class="equation-block">
                <p>R_H = 1/(ne)</p>
                <p>载流子类型判断</p>
                <p>载流子浓度测量</p>
                <p>磁阻效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>热输运</h3>
            <p>热量传递的输运过程</p>
            <div class="mathematical-content">
              <h4>热传导：</h4>
              <div class="equation-block">
                <p>J_Q = -κ∇T</p>
                <p>Fourier定律</p>
                <p>热导率κ</p>
                <p>声子贡献</p>
              </div>
              
              <h4>电子热导：</h4>
              <div class="equation-block">
                <p>κ_e = L₀σT</p>
                <p>Wiedemann-Franz定律</p>
                <p>Lorenz数L₀</p>
                <p>电子-声子耦合</p>
              </div>
              
              <h4>声子热导：</h4>
              <div class="equation-block">
                <p>κ_ph = (1/3)C_v v_s λ_ph</p>
                <p>C_v: 比热</p>
                <p>v_s: 声速</p>
                <p>λ_ph: 声子平均自由程</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡🌡️</div>
            <h3>热电输运</h3>
            <p>电输运与热输运的耦合效应</p>
            <div class="mathematical-content">
              <h4>Seebeck效应：</h4>
              <div class="equation-block">
                <p>V = S∆T</p>
                <p>S: Seebeck系数</p>
                <p>温差电动势</p>
                <p>热电发电</p>
              </div>
              
              <h4>Peltier效应：</h4>
              <div class="equation-block">
                <p>Q̇ = ΠI</p>
                <p>Π = ST: Peltier系数</p>
                <p>电流致热/冷</p>
                <p>热电制冷</p>
              </div>
              
              <h4>热电优值：</h4>
              <div class="equation-block">
                <p>ZT = S²σT/κ</p>
                <p>热电转换效率</p>
                <p>材料优化</p>
                <p>能源应用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>输运理论的应用领域</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔬 半导体器件</h3>
            <div class="feature-content">
              <h4>器件物理：</h4>
              <ul>
                <li>PN结输运</li>
                <li>双极晶体管</li>
                <li>场效应晶体管</li>
                <li>异质结器件</li>
              </ul>
              
              <h4>设计优化：</h4>
              <ul>
                <li>载流子工程</li>
                <li>掺杂优化</li>
                <li>结构设计</li>
                <li>性能预测</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔋 能源技术</h3>
            <div class="feature-content">
              <h4>热电器件：</h4>
              <ul>
                <li>热电发电</li>
                <li>热电制冷</li>
                <li>废热回收</li>
                <li>温度控制</li>
              </ul>
              
              <h4>太阳能电池：</h4>
              <ul>
                <li>载流子收集</li>
                <li>复合损失</li>
                <li>输运优化</li>
                <li>效率提升</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🧲 磁电子学</h3>
            <div class="feature-content">
              <h4>自旋输运：</h4>
              <ul>
                <li>自旋极化输运</li>
                <li>巨磁阻效应</li>
                <li>隧道磁阻</li>
                <li>自旋霍尔效应</li>
              </ul>
              
              <h4>器件应用：</h4>
              <ul>
                <li>磁存储器</li>
                <li>磁传感器</li>
                <li>自旋晶体管</li>
                <li>量子器件</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代输运理论发展</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🌐 介观输运</h3>
            <div class="feature-content">
              <h4>量子效应：</h4>
              <ul>
                <li>量子霍尔效应</li>
                <li>弱局域化</li>
                <li>通用电导涨落</li>
                <li>Aharonov-Bohm效应</li>
              </ul>
              
              <h4>相干输运：</h4>
              <ul>
                <li>相位相干长度</li>
                <li>量子干涉</li>
                <li>弹道输运</li>
                <li>量子点输运</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔬 纳米输运</h3>
            <div class="feature-content">
              <h4>尺寸效应：</h4>
              <ul>
                <li>量子限域</li>
                <li>表面散射</li>
                <li>界面效应</li>
                <li>尺寸依赖性</li>
              </ul>
              
              <h4>新材料：</h4>
              <ul>
                <li>石墨烯</li>
                <li>拓扑绝缘体</li>
                <li>二维材料</li>
                <li>量子阱</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>⚡ 非线性输运</h3>
            <div class="feature-content">
              <h4>强场效应：</h4>
              <ul>
                <li>热载流子</li>
                <li>冲击电离</li>
                <li>雪崩效应</li>
                <li>击穿现象</li>
              </ul>
              
              <h4>非平衡态：</h4>
              <ul>
                <li>载流子加热</li>
                <li>分布函数畸变</li>
                <li>非线性响应</li>
                <li>动态效应</li>
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
              <h4>基本概念</h4>
              <p>输运理论研究载流子在固体中的运动规律，包括漂移、扩散、热电等输运机制，以及各种散射过程的影响。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>理论框架</h4>
              <p>Boltzmann输运方程是经典输运理论的核心，量子输运理论则基于密度矩阵和Green函数方法。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>输运现象</h4>
              <p>主要包括电输运、热输运和热电输运，每种现象都有其特定的物理机制和数学描述。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>应用领域</h4>
              <p>输运理论在半导体器件、能源技术、磁电子学等领域有重要应用，是现代电子技术的理论基础。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>发展趋势</h4>
              <p>现代输运理论向介观输运、纳米输运和非线性输运方向发展，涉及量子效应和新材料体系。</p>
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

/* 测量技术样式 */
.measurement-techniques {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.technique-category {
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #3498db;
}

.technique-category h3 {
  color: #2980b9;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.technique-content h4 {
  color: #34495e;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 机制详解样式 */
.mechanism-section {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.mechanism-card {
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #9b59b6;
}

.mechanism-card h3 {
  color: #8e44ad;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.mechanism-content h4 {
  color: #2c3e50;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 现代输运理论样式 */
.modern-theory {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.theory-section {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #4a90e2;
}

.theory-section h3 {
  color: #2c5aa0;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.theory-content h4 {
  color: #34495e;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 应用领域样式 */
.applications {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.application-area {
  background: linear-gradient(135deg, #fff8f0 0%, #ffeedd 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #ff8c42;
}

.application-area h3 {
  color: #d35400;
  margin-bottom: 1rem;
  font-size: 1.3rem;
  font-weight: 600;
}

.application-content h4 {
  color: #8b4513;
  margin: 1rem 0 0.5rem 0;
  font-size: 1.1rem;
  font-weight: 500;
}

/* 总结展望样式 */
.summary-outlook {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.summary-points,
.future-prospects,
.research-challenges {
  background: linear-gradient(135deg, #f0fff8 0%, #e8f8f0 100%);
  border-radius: 12px;
  padding: 1.5rem;
  border-left: 4px solid #27ae60;
}

.summary-points h3,
.future-prospects h3,
.research-challenges h3 {
  color: #27ae60;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
}

.summary-points ul,
.future-prospects ul,
.research-challenges ul {
  list-style-type: none;
  padding: 0;
}

.summary-points li,
.future-prospects li,
.research-challenges li {
  margin-bottom: 0.8rem;
  padding-left: 1rem;
  position: relative;
  line-height: 1.6;
}

.summary-points li::before,
.future-prospects li::before,
.research-challenges li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #27ae60;
  font-size: 0.8rem;
}

.summary-points li strong,
.future-prospects li strong {
  color: #2c3e50;
  font-weight: 600;
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
  
  .measurement-techniques,
  .mechanism-section,
  .modern-theory,
  .applications {
    gap: 1rem;
  }
  
  .technique-category,
  .mechanism-card,
  .theory-section,
  .application-area {
    padding: 1rem;
  }
  
  .summary-outlook {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .summary-points,
  .future-prospects,
  .research-challenges {
    padding: 1rem;
  }
}
</style>