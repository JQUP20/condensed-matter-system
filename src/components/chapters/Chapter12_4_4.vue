<template>
  <div class="chapter-content">
    <h1>12.4.4 磁单极与瞬子</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        磁单极和瞬子是规范场理论中两个极其重要的拓扑孤子解，它们深刻地影响了
        我们对非阿贝尔规范理论的理解。磁单极作为经典的拓扑孤子，不仅在理论上
        具有重要意义，还可能在凝聚态系统中得到实现。瞬子则是欧几里得时空中的
        拓扑孤子，它们在量子隧穿、真空结构和手征异常等方面发挥着关键作用。
        这两种拓扑结构的研究不仅推动了规范场理论的发展，也为理解强相互作用、
        相变和拓扑物态提供了重要工具。本章将详细探讨磁单极和瞬子的理论基础、
        数学结构、物理性质以及在粒子物理和凝聚态物理中的应用。
      </p>
    </section>

    <section class="magnetic-monopoles">
      <h2>磁单极</h2>
      
      <h3>Dirac磁单极</h3>
      <p>Dirac最早提出磁单极的概念，其磁场为：</p>
      <katex-element expression="\mathbf{B} = \frac{g}{4\pi r^2} \hat{\mathbf{r}}"></katex-element>
      
      <p>其中g是磁荷。</p>

      <h3>Dirac弦</h3>
      <p>为了定义矢量势，需要引入Dirac弦：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{A}_N = \frac{g}{4\pi r} \frac{1-\cos\theta}{r\sin\theta} \hat{\boldsymbol{\phi}} \quad (\theta \neq \pi)"></katex-element>
        <katex-element expression="\mathbf{A}_S = -\frac{g}{4\pi r} \frac{1+\cos\theta}{r\sin\theta} \hat{\boldsymbol{\phi}} \quad (\theta \neq 0)"></katex-element>
      </div>
      
      <p>在重叠区域：</p>
      <katex-element expression="\mathbf{A}_N - \mathbf{A}_S = \frac{g}{2\pi r\sin\theta} \hat{\boldsymbol{\phi}}"></katex-element>

      <h3>Dirac量子化条件</h3>
      <p>电荷e和磁荷g必须满足：</p>
      <katex-element expression="eg = \frac{n\hbar c}{2} \quad (n \in \mathbb{Z})"></katex-element>
      
      <p>这是磁单极存在的必要条件。</p>

      <h3>Wu-Yang构造</h3>
      <p>无弦的磁单极构造使用纤维丛理论：</p>
      <ul>
        <li><strong>主丛：</strong>P(S², U(1))</li>
        <li><strong>联络：</strong>规范场A</li>
        <li><strong>曲率：</strong>磁场B</li>
      </ul>
      
      <p>拓扑荷为：</p>
      <katex-element expression="Q = \frac{1}{4\pi} \int_{S^2} \mathbf{B} \cdot d\mathbf{S} = \frac{g}{2}"></katex-element>
    </section>

    <section class="thooft-polyakov-monopole">
      <h2>'t Hooft-Polyakov磁单极</h2>
      
      <h3>模型设定</h3>
      <p>考虑SU(2)规范理论耦合到Higgs三重态：</p>
      <katex-element expression="\mathcal{L} = -\frac{1}{4} F_{\mu\nu}^a F^{a\mu\nu} + \frac{1}{2} |D_\mu \phi^a|^2 - V(\phi)"></katex-element>
      
      <p>其中：</p>
      <katex-element expression="V(\phi) = \frac{\lambda}{4} (|\phi|^2 - v^2)^2"></katex-element>

      <h3>协变导数</h3>
      <p>SU(2)协变导数：</p>
      <katex-element expression="D_\mu \phi^a = \partial_\mu \phi^a + g \epsilon^{abc} A_\mu^b \phi^c"></katex-element>

      <h3>球对称Ansatz</h3>
      <p>'t Hooft-Polyakov单极的Ansatz：</p>
      <div class="equation-block">
        <katex-element expression="\phi^a = \frac{x^a}{r} H(r)"></katex-element>
        <katex-element expression="A_i^a = \frac{\epsilon^{aij} x^j}{gr^2} (1 - K(r))"></katex-element>
        <katex-element expression="A_0^a = 0"></katex-element>
      </div>

      <h3>场方程</h3>
      <p>径向函数H(r)和K(r)满足：</p>
      <div class="equation-block">
        <katex-element expression="r^2 H'' = K^2 H + \frac{\lambda v^2}{2g^2} r^2 H (H^2 - v^2)"></katex-element>
        <katex-element expression="r^2 K'' = K (K^2 - 1 + r^2 H^2)"></katex-element>
      </div>

      <h3>边界条件</h3>
      <p>物理边界条件：</p>
      <div class="equation-block">
        <katex-element expression="H(0) = 0, \quad K(0) = 1"></katex-element>
        <katex-element expression="H(\infty) = v, \quad K(\infty) = 0"></katex-element>
      </div>

      <h3>质量和能量</h3>
      <p>单极质量的Bogomol'nyi下界：</p>
      <katex-element expression="M \geq \frac{4\pi v}{g}"></katex-element>
      
      <p>当<katex-element expression="\lambda = 0"></katex-element>时达到下界（BPS单极）。</p>
    </section>

    <section class="bps-monopoles">
      <h2>BPS磁单极</h2>
      
      <h3>Bogomol'nyi方程</h3>
      <p>当势能为零时，场方程简化为：</p>
      <katex-element expression="D_i \phi^a = \pm \frac{1}{2} \epsilon_{ijk} F_{jk}^a"></katex-element>
      
      <p>这是一阶微分方程。</p>

      <h3>能量饱和</h3>
      <p>BPS单极的能量：</p>
      <katex-element expression="E = \frac{4\pi v}{g} |Q|"></katex-element>
      
      <p>其中Q是拓扑荷。</p>

      <h3>多单极解</h3>
      <p>多个BPS单极的解可以用代数几何方法构造：</p>
      <ul>
        <li><strong>ADHM构造</strong></li>
        <li><strong>Nahm变换</strong></li>
        <li><strong>twistor方法</strong></li>
      </ul>

      <h3>模空间</h3>
      <p>n个BPS单极的模空间维数：</p>
      <katex-element expression="\dim \mathcal{M}_n = 4n"></katex-element>
      
      <p>对应3n个位置坐标和n个相位。</p>

      <h4>单极散射</h4>
      <p>低能散射由模空间的测地线描述：</p>
      <katex-element expression="ds^2 = \sum_{i,j} g_{ij} dx^i dx^j"></katex-element>
      
      <p>其中<katex-element expression="g_{ij}"></katex-element>是模空间度规。</p>
    </section>

    <section class="monopole-dynamics">
      <h2>磁单极动力学</h2>
      
      <h3>集体坐标</h3>
      <p>单极的集体坐标包括：</p>
      <ul>
        <li><strong>位置：</strong><katex-element expression="\mathbf{X}(t)"></katex-element></li>
        <li><strong>相位：</strong><katex-element expression="\alpha(t)"></katex-element></li>
      </ul>

      <h3>有效拉格朗日量</h3>
      <p>慢运动近似下的有效拉格朗日量：</p>
      <katex-element expression="L = \frac{1}{2} M \dot{\mathbf{X}}^2 + \frac{1}{2} I \dot{\alpha}^2 + q \mathbf{A}_{ext} \cdot \dot{\mathbf{X}}"></katex-element>
      
      <p>其中M是单极质量，I是转动惯量。</p>

      <h3>电磁对偶性</h3>
      <p>电磁对偶变换：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{E} \to \mathbf{B}"></katex-element>
        <katex-element expression="\mathbf{B} \to -\mathbf{E}"></katex-element>
        <katex-element expression="e \to g, \quad g \to -e"></katex-element>
      </div>

      <h3>Witten效应</h3>
      <p>在θ真空中，磁单极携带电荷：</p>
      <katex-element expression="Q_e = \frac{\theta e}{2\pi} Q_m"></katex-element>
      
      <p>其中<katex-element expression="Q_m"></katex-element>是磁荷。</p>
    </section>

    <section class="instantons-introduction">
      <h2>瞬子简介</h2>
      
      <h3>欧几里得时空</h3>
      <p>Wick旋转到欧几里得时空：</p>
      <katex-element expression="x^0 \to -ix^4, \quad x^4 = it"></katex-element>
      
      <p>度规变为：</p>
      <katex-element expression="ds^2 = dx_1^2 + dx_2^2 + dx_3^2 + dx_4^2"></katex-element>

      <h3>自对偶场</h3>
      <p>欧几里得时空中的自对偶条件：</p>
      <katex-element expression="F_{\mu\nu} = \pm \frac{1}{2} \epsilon_{\mu\nu\rho\sigma} F^{\rho\sigma}"></katex-element>
      
      <p>满足此条件的场是Yang-Mills方程的解。</p>

      <h3>拓扑荷</h3>
      <p>瞬子的拓扑荷：</p>
      <katex-element expression="Q = \frac{1}{32\pi^2} \int d^4x \, \text{Tr}[F_{\mu\nu} \tilde{F}^{\mu\nu}]"></katex-element>
      
      <p>其中<katex-element expression="\tilde{F}^{\mu\nu} = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma} F_{\rho\sigma}"></katex-element>。</p>

      <h3>作用量</h3>
      <p>瞬子的欧几里得作用量：</p>
      <katex-element expression="S_E = \frac{8\pi^2 |Q|}{g^2}"></katex-element>
    </section>

    <section class="adhm-construction">
      <h2>ADHM构造</h2>
      
      <h3>ADHM数据</h3>
      <p>k-瞬子的ADHM数据包括：</p>
      <ul>
        <li><strong>矩阵B₁, B₂：</strong>k×k复矩阵</li>
        <li><strong>矩阵I, J：</strong>k×n和n×k矩阵</li>
      </ul>

      <h3>ADHM方程</h3>
      <p>约束方程：</p>
      <katex-element expression="[B_1, B_1^\dagger] + [B_2, B_2^\dagger] + I I^\dagger - J^\dagger J = 0"></katex-element>
      
      <p>实性条件：</p>
      <katex-element expression="[B_1, B_2] + I J = 0"></katex-element>

      <h3>瞬子构造</h3>
      <p>从ADHM数据构造瞬子：</p>
      <ol>
        <li>构造Δ矩阵</li>
        <li>求解线性系统</li>
        <li>得到规范场</li>
      </ol>

      <h3>模空间</h3>
      <p>k-瞬子模空间的维数：</p>
      <katex-element expression="\dim \mathcal{M}_k = 8k"></katex-element>
      
      <p>对应4k个位置、尺度和方向参数。</p>
    </section>

    <section class="single-instanton">
      <h2>单瞬子解</h2>
      
      <h3>单瞬子Ansatz</h3>
      <p>SU(2)单瞬子的显式形式：</p>
      <katex-element expression="A_\mu^a = \frac{2\rho^2}{(x-x_0)^2 + \rho^2} \frac{\eta_{\mu\nu}^a (x-x_0)^\nu}{(x-x_0)^2}"></katex-element>
      
      <p>其中ρ是瞬子尺度，<katex-element expression="x_0"></katex-element>是中心位置。</p>

      <h3>'t Hooft符号</h3>
      <p>'t Hooft η符号：</p>
      <div class="equation-block">
        <katex-element expression="\eta_{\mu\nu}^a = \epsilon_{a\mu\nu} \quad (\mu,\nu = 1,2,3)"></katex-element>
        <katex-element expression="\eta_{4\nu}^a = \delta_{a\nu} \quad (\nu = 1,2,3)"></katex-element>
      </div>

      <h3>场强</h3>
      <p>单瞬子的场强：</p>
      <katex-element expression="F_{\mu\nu}^a = \frac{4\rho^2}{[(x-x_0)^2 + \rho^2]^2} \eta_{\mu\nu}^a"></katex-element>

      <h3>作用量密度</h3>
      <p>作用量密度的分布：</p>
      <katex-element expression="\frac{1}{2} \text{Tr}[F_{\mu\nu} F^{\mu\nu}] = \frac{48\rho^4}{[(x-x_0)^2 + \rho^2]^4}"></katex-element>
      
      <p>在瞬子中心处达到最大值。</p>
    </section>

    <section class="instanton-effects">
      <h2>瞬子效应</h2>
      
      <h3>路径积分</h3>
      <p>包含瞬子的路径积分：</p>
      <katex-element expression="Z = \int \mathcal{D}A \, e^{-S_E[A]} = \sum_{Q=-\infty}^{\infty} Z_Q e^{iQ\theta}"></katex-element>
      
      <p>其中<katex-element expression="Z_Q"></katex-element>是拓扑荷为Q的贡献。</p>

      <h3>瞬子气体</h3>
      <p>稀瞬子气体近似：</p>
      <katex-element expression="Z_1 \approx \int d^4x_0 \, d\rho \, \rho^{-5} e^{-8\pi^2/g^2}"></katex-element>
      
      <p>积分发散，需要考虑量子修正。</p>

      <h3>零模</h3>
      <p>瞬子背景下的费米子零模：</p>
      <katex-element expression="i\gamma^\mu D_\mu \psi = 0"></katex-element>
      
      <p>左手征费米子有<katex-element expression="2|Q|"></katex-element>个零模。</p>

      <h3>'t Hooft相互作用</h3>
      <p>瞬子诱导的有效相互作用：</p>
      <katex-element :expression="`\\mathcal{L}_{eff} = \\kappa \\left( \\prod_{i=1}^{n_f} \\bar{u}_i \\gamma^5 d_i \\right) + \\text{h.c.}`"></katex-element>
      
      <p>其中<katex-element :expression="`\\kappa \\sim e^{-8\\pi^2/g^{2}}`"></katex-element>。</p>
    </section>

    <section class="theta-vacuum">
      <h2>θ真空</h2>
      
      <h3>θ项</h3>
      <p>QCD拉格朗日量的拓扑项：</p>
      <katex-element expression="\mathcal{L}_\theta = \frac{\theta g^2}{32\pi^2} \text{Tr}[F_{\mu\nu} \tilde{F}^{\mu\nu}]"></katex-element>
      
      <p>θ是一个周期性参数：<katex-element expression="\theta \sim \theta + 2\pi"></katex-element>。</p>

      <h3>θ真空态</h3>
      <p>θ真空是瞬子扇形的叠加：</p>
      <katex-element expression="|\theta\rangle = \sum_{n=-\infty}^{\infty} e^{in\theta} |n\rangle"></katex-element>
      
      <p>其中|n⟩是拓扑荷为n的态。</p>

      <h3>强CP问题</h3>
      <p>θ项破坏CP对称性，但实验上：</p>
      <katex-element expression="|\theta| < 10^{-10}"></katex-element>
      
      <p>这是强CP问题。</p>

      <h3>Peccei-Quinn机制</h3>
      <p>引入轴子场解决强CP问题：</p>
      <katex-element expression="\theta_{eff} = \theta_0 + \frac{a}{f_a}"></katex-element>
      
      <p>其中a是轴子场，<katex-element expression="f_a"></katex-element>是轴子衰变常数。</p>
    </section>

    <section class="chiral-anomaly">
      <h2>手征异常</h2>
      
      <h3>经典手征对称性</h3>
      <p>无质量QCD的手征对称性：</p>
      <katex-element expression="q_L \to e^{i\alpha\gamma^5} q_L, \quad q_R \to e^{i\beta\gamma^5} q_R"></katex-element>

      <h3>Adler-Bell-Jackiw异常</h3>
      <p>轴矢量流的异常：</p>
      <katex-element expression="\partial_\mu j_5^\mu = \frac{g^2}{16\pi^2} \text{Tr}[F_{\mu\nu} \tilde{F}^{\mu\nu}]"></katex-element>
      
      <p>这是量子效应。</p>

      <h3>瞬子与异常</h3>
      <p>瞬子背景下的手征荷变化：</p>
      <katex-element expression="\Delta Q_5 = 2n_f Q_{top}"></katex-element>
      
      <p>其中<katex-element expression="Q_{top}"></katex-element>是拓扑荷。</p>

      <h3>Wess-Zumino项</h3>
      <p>有效理论中的异常项：</p>
      <katex-element expression="\Gamma_{WZ} = \frac{N_c}{240\pi^2} \int d^5x \, \epsilon^{ABCDE} \text{Tr}[U^{-1}\partial_A U \cdots U^{-1}\partial_E U]"></katex-element>
    </section>

    <section class="condensed-matter-realizations">
      <h2>凝聚态实现</h2>
      
      <h3>自旋冰中的磁单极</h3>
      <p>自旋冰材料中的紧急磁单极：</p>
      <ul>
        <li><strong>Dy₂Ti₂O₇</strong></li>
        <li><strong>Ho₂Ti₂O₇</strong></li>
      </ul>
      
      <p>磁荷密度：</p>
      <katex-element expression="\rho_m = \frac{\mu_0}{2} \nabla \cdot \mathbf{M}"></katex-element>

      <h3>量子自旋液体</h3>
      <p>某些量子自旋液体中的分数化激发：</p>
      <ul>
        <li><strong>spinon：</strong>自旋1/2激发</li>
        <li><strong>vison：</strong>Z₂涡旋</li>
      </ul>

      <h3>Weyl半金属</h3>
      <p>Weyl点作为磁单极：</p>
      <katex-element expression="\mathbf{B}(\mathbf{k}) = \frac{\chi}{|\mathbf{k}|^2} \mathbf{k}"></katex-element>
      
      <p>其中χ是手征荷。</p>

      <h3>拓扑绝缘体</h3>
      <p>表面态的Dirac锥：</p>
      <katex-element expression="H = v_F (\sigma_x k_x + \sigma_y k_y)"></katex-element>
      
      <p>具有π Berry相位。</p>

      <h4>磁单极的实验观测</h4>
      <p>在凝聚态系统中观测磁单极的方法：</p>
      <ul>
        <li><strong>中子散射</strong></li>
        <li><strong>μSR测量</strong></li>
        <li><strong>比热测量</strong></li>
        <li><strong>磁化率测量</strong></li>
      </ul>
    </section>

    <section class="skyrmions">
      <h2>Skyrmion</h2>
      
      <h3>非线性σ模型</h3>
      <p>O(3)非线性σ模型：</p>
      <katex-element expression="\mathcal{L} = \frac{1}{2g^2} \partial_\mu \mathbf{n} \cdot \partial^\mu \mathbf{n}"></katex-element>
      
      <p>其中<katex-element expression="|\mathbf{n}| = 1"></katex-element>。</p>

      <h3>拓扑荷</h3>
      <p>Skyrmion数：</p>
      <katex-element expression="Q = \frac{1}{8\pi} \int d^2x \, \mathbf{n} \cdot (\partial_x \mathbf{n} \times \partial_y \mathbf{n})"></katex-element>

      <h3>Skyrmion解</h3>
      <p>轴对称Skyrmion：</p>
      <katex-element expression="\mathbf{n} = (\sin\Theta(r)\cos\phi, \sin\Theta(r)\sin\phi, \cos\Theta(r))"></katex-element>
      
      <p>边界条件：</p>
      <katex-element expression="\Theta(0) = \pi, \quad \Theta(\infty) = 0"></katex-element>

      <h3>磁性Skyrmion</h3>
      <p>磁性材料中的Skyrmion：</p>
      <ul>
        <li><strong>手征磁体</strong></li>
        <li><strong>Dzyaloshinskii-Moriya相互作用</strong></li>
        <li><strong>拓扑霍尔效应</strong></li>
      </ul>

      <h4>应用前景</h4>
      <p>Skyrmion的应用：</p>
      <ul>
        <li><strong>自旋电子学器件</strong></li>
        <li><strong>磁存储</strong></li>
        <li><strong>逻辑器件</strong></li>
      </ul>
    </section>

    <section class="computational-methods">
      <h2>计算方法</h2>
      
      <h3>数值求解</h3>
      <p>磁单极和瞬子的数值方法：</p>
      <ul>
        <li><strong>有限差分法</strong></li>
        <li><strong>有限元法</strong></li>
        <li><strong>谱方法</strong></li>
      </ul>

      <h3>蒙特卡罗方法</h3>
      <p>格点规范理论中的瞬子：</p>
      <ul>
        <li><strong>冷却算法</strong></li>
        <li><strong>重叠费米子</strong></li>
        <li><strong>拓扑荷测量</strong></li>
      </ul>

      <h3>解析方法</h3>
      <p>特殊情况的解析解：</p>
      <ul>
        <li><strong>BPS方程</strong></li>
        <li><strong>自对偶方程</strong></li>
        <li><strong>可积系统</strong></li>
      </ul>

      <h3>机器学习</h3>
      <p>AI在拓扑孤子研究中的应用：</p>
      <ul>
        <li><strong>拓扑荷识别</strong></li>
        <li><strong>相变检测</strong></li>
        <li><strong>参数优化</strong></li>
      </ul>
    </section>

    <section class="experimental-searches">
      <h2>实验寻找</h2>
      
      <h3>宇宙射线</h3>
      <p>在宇宙射线中寻找磁单极：</p>
      <ul>
        <li><strong>Parker界限</strong></li>
        <li><strong>地磁场约束</strong></li>
        <li><strong>探测器设计</strong></li>
      </ul>

      <h3>对撞机实验</h3>
      <p>在高能对撞机中产生磁单极：</p>
      <ul>
        <li><strong>Drell-Yan过程</strong></li>
        <li><strong>虚光子分裂</strong></li>
        <li><strong>强子化模型</strong></li>
      </ul>

      <h3>凝聚态实验</h3>
      <p>在凝聚态系统中观测类磁单极：</p>
      <ul>
        <li><strong>自旋冰材料</strong></li>
        <li><strong>人工自旋冰</strong></li>
        <li><strong>冷原子系统</strong></li>
      </ul>

      <h3>天体物理</h3>
      <p>天体物理中的磁单极效应：</p>
      <ul>
        <li><strong>中子星磁场</strong></li>
        <li><strong>星系磁场</strong></li>
        <li><strong>宇宙微波背景</strong></li>
      </ul>
    </section>

    <section class="applications">
      <h2>应用</h2>
      
      <h3>粒子物理</h3>
      <p>在粒子物理中的应用：</p>
      <ul>
        <li><strong>大统一理论</strong></li>
        <li><strong>超弦理论</strong></li>
        <li><strong>额外维度</strong></li>
      </ul>

      <h3>宇宙学</h3>
      <p>在宇宙学中的作用：</p>
      <ul>
        <li><strong>暴胀理论</strong></li>
        <li><strong>相变动力学</strong></li>
        <li><strong>拓扑缺陷</strong></li>
      </ul>

      <h3>凝聚态物理</h3>
      <p>在凝聚态中的应用：</p>
      <ul>
        <li><strong>量子相变</strong></li>
        <li><strong>拓扑物态</strong></li>
        <li><strong>量子计算</strong></li>
      </ul>

      <h3>数学物理</h3>
      <p>在数学中的意义：</p>
      <ul>
        <li><strong>微分几何</strong></li>
        <li><strong>代数拓扑</strong></li>
        <li><strong>可积系统</strong></li>
      </ul>
    </section>

    <section class="future-directions">
      <h2>未来方向</h2>
      
      <h3>理论发展</h3>
      <p>理论研究的新方向：</p>
      <ul>
        <li><strong>非交换几何</strong></li>
        <li><strong>高阶拓扑</strong></li>
        <li><strong>量子引力</strong></li>
      </ul>

      <h3>实验技术</h3>
      <p>新的实验方法：</p>
      <ul>
        <li><strong>量子模拟</strong></li>
        <li><strong>超导量子器件</strong></li>
        <li><strong>光学晶格</strong></li>
      </ul>

      <h3>计算发展</h3>
      <p>计算方法的进步：</p>
      <ul>
        <li><strong>量子计算</strong></li>
        <li><strong>张量网络</strong></li>
        <li><strong>机器学习</strong></li>
      </ul>

      <h3>跨学科应用</h3>
      <p>其他领域的应用：</p>
      <ul>
        <li><strong>生物物理</strong></li>
        <li><strong>材料科学</strong></li>
        <li><strong>量子信息</strong></li>
      </ul>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        磁单极和瞬子作为规范场理论中的拓扑孤子，不仅具有深刻的理论意义，
        也在实验物理中展现出重要的应用价值。从Dirac的原始构想到现代的
        ADHM构造，从粒子物理中的瞬子效应到凝聚态系统中的紧急磁单极，
        这些拓扑结构持续推动着我们对物理世界的理解。随着实验技术的进步
        和理论方法的发展，磁单极和瞬子的研究将继续在基础物理和应用物理
        中发挥重要作用。未来的研究将更加注重跨学科的合作，将这些深刻的
        理论概念转化为实际的技术应用，为人类科技进步做出贡献。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_4_4',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #2980b9;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h4 {
  color: #8e44ad;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
  font-style: italic;
}

.equation-block {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

section {
  margin-bottom: 40px;
}

.introduction {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid #3498db;
  margin-bottom: 30px;
}

ul {
  padding-left: 25px;
}

ol {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
}

li strong {
  color: #e74c3c;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

.summary {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #bdc3c7;
  margin-top: 40px;
}

.summary p {
  font-size: 1.1em;
  font-weight: 500;
  color: #2c3e50;
}
</style>