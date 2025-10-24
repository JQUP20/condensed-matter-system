<template>
  <div class="chapter-content">
    <h1>12.4.3 对称破缺与质量产生</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        对称破缺是现代物理学中最重要的概念之一，它解释了粒子如何获得质量以及
        各种相互作用的起源。在规范理论中，对称破缺机制不仅保持了理论的重整化性，
        还解释了为什么某些规范玻色子具有质量而光子保持无质量。Higgs机制作为
        自发对称破缺的典型例子，成功解释了弱相互作用中间玻色子的质量起源。
        本章将详细探讨各种对称破缺机制，包括自发对称破缺、Higgs机制、手征
        对称破缺以及在凝聚态物理中的类似现象，并讨论它们在理论物理和实验
        物理中的重要应用。
      </p>
    </section>

    <section class="spontaneous-symmetry-breaking">
      <h2>自发对称破缺</h2>
      
      <h3>基本概念</h3>
      <p>当系统的基态不具有拉格朗日量的全部对称性时，发生自发对称破缺：</p>
      <katex-element expression="\mathcal{L}[\phi] = \mathcal{L}[\phi'] \quad \text{但} \quad \langle 0 | \phi | 0 \rangle \neq \langle 0 | \phi' | 0 \rangle"></katex-element>
      
      <h3>简单例子：φ⁴理论</h3>
      <p>考虑标量场理论：</p>
      <katex-element expression="\mathcal{L} = \frac{1}{2} \partial_\mu \phi \partial^\mu \phi - V(\phi)"></katex-element>
      
      <p>其中势能为：</p>
      <katex-element expression="V(\phi) = \frac{\mu^2}{2} \phi^2 + \frac{\lambda}{4!} \phi^4"></katex-element>

      <h4>对称相（μ² > 0）</h4>
      <p>最小值在<katex-element expression="\phi = 0"></katex-element>处，对称性保持。</p>

      <h4>破缺相（μ² < 0）</h4>
      <p>最小值在<katex-element expression="\phi = \pm v"></katex-element>处，其中：</p>
      <katex-element expression="v = \sqrt{-\frac{6\mu^2}{\lambda}}"></katex-element>
      
      <p>Z₂对称性被自发破缺。</p>

      <h3>Goldstone定理</h3>
      <p>每个被破缺的连续对称性对应一个无质量的Goldstone玻色子。</p>
      
      <p>对于复标量场<katex-element expression="\phi = \frac{1}{\sqrt{2}}(\phi_1 + i\phi_2)"></katex-element>：</p>
      <katex-element expression="\mathcal{L} = \partial_\mu \phi^* \partial^\mu \phi - \mu^2 |\phi|^2 - \lambda |\phi|^4"></katex-element>
      
      <p>当<katex-element expression="\mu^2 < 0"></katex-element>时，<katex-element expression="\langle \phi \rangle = \frac{v}{\sqrt{2}}"></katex-element>，U(1)对称性破缺，产生一个Goldstone玻色子。</p>

      <h3>非线性实现</h3>
      <p>Goldstone玻色子的非线性实现：</p>
      <katex-element expression="\phi(x) = \frac{v + \sigma(x)}{\sqrt{2}} e^{i\pi(x)/v}"></katex-element>
      
      <p>其中σ是Higgs场，π是Goldstone场。</p>
    </section>

    <section class="higgs-mechanism">
      <h2>Higgs机制</h2>
      
      <h3>规范理论中的质量问题</h3>
      <p>规范不变性禁止规范玻色子的质量项：</p>
      <katex-element expression="\mathcal{L}_{mass} = \frac{1}{2} m^2 A_\mu A^\mu"></katex-element>
      
      <p>这破坏了规范不变性。</p>

      <h3>Abelian Higgs模型</h3>
      <p>考虑U(1)规范理论耦合到复标量场：</p>
      <katex-element expression="\mathcal{L} = -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} + |D_\mu \phi|^2 - V(|\phi|^2)"></katex-element>
      
      <p>其中协变导数为：</p>
      <katex-element expression="D_\mu \phi = (\partial_\mu - ig A_\mu) \phi"></katex-element>

      <h3>对称破缺后的拉格朗日量</h3>
      <p>选择幺正规范<katex-element expression="\phi = \frac{v + h(x)}{\sqrt{2}}"></katex-element>：</p>
      <katex-element expression="\mathcal{L} = -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} + \frac{1}{2} (gv)^2 A_\mu A^\mu + \frac{1}{2} \partial_\mu h \partial^\mu h - \frac{\lambda v^2}{2} h^2 + \cdots"></katex-element>
      
      <p>规范玻色子获得质量：</p>
      <katex-element expression="m_A = gv"></katex-element>

      <h3>Higgs玻色子质量</h3>
      <p>Higgs场的质量为：</p>
      <katex-element expression="m_h^2 = 2\lambda v^2 = -2\mu^2"></katex-element>

      <h3>自由度计数</h3>
      <p>对称破缺前后的自由度：</p>
      <ul>
        <li><strong>破缺前：</strong>2个标量场 + 2个规范场（横向）= 4个自由度</li>
        <li><strong>破缺后：</strong>1个Higgs场 + 3个有质量规范场 = 4个自由度</li>
      </ul>
      
      <p>Goldstone玻色子被"吃掉"，成为规范玻色子的纵向分量。</p>
    </section>

    <section class="non-abelian-higgs">
      <h2>非阿贝尔Higgs机制</h2>
      
      <h3>SU(2)×U(1)模型</h3>
      <p>电弱统一理论的拉格朗日量：</p>
      <katex-element expression="\mathcal{L} = -\frac{1}{4} W_{\mu\nu}^a W^{a\mu\nu} - \frac{1}{4} B_{\mu\nu} B^{\mu\nu} + |D_\mu \Phi|^2 - V(\Phi)"></katex-element>
      
      <p>其中Higgs双重态：</p>
      <katex-element expression="\Phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix}"></katex-element>

      <h3>协变导数</h3>
      <p>SU(2)×U(1)的协变导数：</p>
      <katex-element expression="D_\mu = \partial_\mu - ig \frac{\tau^a}{2} W_\mu^a - ig' \frac{Y}{2} B_\mu"></katex-element>
      
      <p>其中Y是超荷。</p>

      <h3>对称破缺</h3>
      <p>选择真空期望值：</p>
      <katex-element expression="\langle \Phi \rangle = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ v \end{pmatrix}"></katex-element>
      
      <p>SU(2)×U(1) → U(1)ₑₘ</p>

      <h3>规范玻色子质量</h3>
      <p>质量本征态：</p>
      <div class="equation-block">
        <katex-element expression="W^\pm = \frac{1}{\sqrt{2}} (W^1 \mp i W^2)"></katex-element>
        <katex-element expression="Z^0 = \cos\theta_W W^3 - \sin\theta_W B"></katex-element>
        <katex-element expression="A = \sin\theta_W W^3 + \cos\theta_W B"></katex-element>
      </div>
      
      <p>质量为：</p>
      <div class="equation-block">
        <katex-element expression="m_W = \frac{gv}{2}"></katex-element>
        <katex-element expression="m_Z = \frac{v}{2}\sqrt{g^2 + g'^2}"></katex-element>
        <katex-element expression="m_A = 0"></katex-element>
      </div>

      <h3>Weinberg角</h3>
      <p>弱混合角的定义：</p>
      <katex-element expression="\tan\theta_W = \frac{g'}{g}"></katex-element>
      
      <p>实验值：<katex-element expression="\sin^2\theta_W \approx 0.23"></katex-element></p>
    </section>

    <section class="fermion-masses">
      <h2>费米子质量</h2>
      
      <h3>Yukawa耦合</h3>
      <p>费米子通过Yukawa耦合获得质量：</p>
      <katex-element expression="\mathcal{L}_Y = -y_e \bar{L} \Phi e_R - y_u \bar{Q} \tilde{\Phi} u_R - y_d \bar{Q} \Phi d_R + \text{h.c.}"></katex-element>
      
      <p>其中<katex-element expression="\tilde{\Phi} = i\tau^2 \Phi^*"></katex-element>。</p>

      <h3>对称破缺后的质量</h3>
      <p>费米子质量为：</p>
      <div class="equation-block">
        <katex-element expression="m_e = \frac{y_e v}{\sqrt{2}}"></katex-element>
        <katex-element expression="m_u = \frac{y_u v}{\sqrt{2}}"></katex-element>
        <katex-element expression="m_d = \frac{y_d v}{\sqrt{2}}"></katex-element>
      </div>

      <h3>CKM矩阵</h3>
      <p>夸克混合矩阵：</p>
      <katex-element expression="V_{CKM} = U_L^\dagger V_L"></katex-element>
      
      <p>其中U_L和V_L是对角化夸克质量矩阵的幺正矩阵。</p>

      <h3>中微子质量</h3>
      <p>Dirac质量项：</p>
      <katex-element expression="\mathcal{L}_\nu = -y_\nu \bar{L} \tilde{\Phi} \nu_R + \text{h.c.}"></katex-element>
      
      <p>Majorana质量项：</p>
      <katex-element expression="\mathcal{L}_M = -\frac{1}{2} M \bar{\nu_R^c} \nu_R + \text{h.c.}"></katex-element>
    </section>

    <section class="chiral-symmetry-breaking">
      <h2>手征对称破缺</h2>
      
      <h3>QCD中的手征对称性</h3>
      <p>无质量QCD的拉格朗日量：</p>
      <katex-element expression="\mathcal{L} = \bar{q}_L i\gamma^\mu D_\mu q_L + \bar{q}_R i\gamma^\mu D_\mu q_R - \frac{1}{4} G_{\mu\nu}^a G^{a\mu\nu}"></katex-element>
      
      <p>具有SU(N_f)_L × SU(N_f)_R手征对称性。</p>

      <h3>自发手征对称破缺</h3>
      <p>夸克凝聚：</p>
      <katex-element expression="\langle \bar{q}q \rangle = \langle \bar{q}_L q_R + \bar{q}_R q_L \rangle \neq 0"></katex-element>
      
      <p>破缺模式：SU(N_f)_L × SU(N_f)_R → SU(N_f)_V</p>

      <h3>Goldstone玻色子</h3>
      <p>破缺的轴矢量对称性产生<katex-element expression="N_f^2 - 1"></katex-element>个Goldstone玻色子：</p>
      <ul>
        <li><strong>N_f = 2：</strong>π⁺, π⁻, π⁰（3个π介子）</li>
        <li><strong>N_f = 3：</strong>π, K, η（8个赝标量介子）</li>
      </ul>

      <h3>PCAC关系</h3>
      <p>部分守恒轴矢量流：</p>
      <katex-element expression="\partial_\mu j_5^\mu = 2im \bar{q}\gamma^5 q"></katex-element>
      
      <p>当夸克质量很小时，轴矢量流近似守恒。</p>

      <h3>有效理论</h3>
      <p>手征微扰论的拉格朗日量：</p>
      <katex-element expression="\mathcal{L}_{eff} = \frac{f_\pi^2}{4} \text{Tr}[\partial_\mu U \partial^\mu U^\dagger] + \cdots"></katex-element>
      
      <p>其中<katex-element expression="U = \exp(i\pi^a \tau^a / f_\pi)"></katex-element>。</p>
    </section>

    <section class="dynamical-symmetry-breaking">
      <h2>动力学对称破缺</h2>
      
      <h3>四费米子相互作用</h3>
      <p>Nambu-Jona-Lasinio模型：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi} i\gamma^\mu \partial_\mu \psi + G [(\bar{\psi}\psi)^2 + (\bar{\psi}i\gamma^5\psi)^2]"></katex-element>
      
      <p>当G超过临界值时，发生手征对称破缺。</p>

      <h3>临界耦合</h3>
      <p>临界耦合常数：</p>
      <katex-element expression="G_c = \frac{\pi^2}{2\Lambda^2}"></katex-element>
      
      <p>其中Λ是紫外截断。</p>

      <h3>动力学质量产生</h3>
      <p>费米子获得动力学质量：</p>
      <katex-element expression="m_{dyn} = \frac{\Lambda}{\pi} \sqrt{2G\Lambda^2 - \pi^2}"></katex-element>

      <h3>复合Higgs模型</h3>
      <p>Higgs场作为费米子复合态：</p>
      <katex-element expression="\phi \sim \bar{\psi}\psi"></katex-element>
      
      <p>避免了基本标量场的层次问题。</p>
    </section>

    <section class="gauge-symmetry-breaking">
      <h2>规范对称破缺的模式</h2>
      
      <h3>完全破缺</h3>
      <p>所有规范玻色子获得质量：</p>
      <katex-element expression="G \to \{1\}"></katex-element>
      
      <p>例：SU(5) → {1}在大统一理论中。</p>

      <h3>部分破缺</h3>
      <p>部分规范对称性保持：</p>
      <katex-element expression="G \to H \subset G"></katex-element>
      
      <p>例：SU(2)×U(1) → U(1)ₑₘ在电弱理论中。</p>

      <h3>多步破缺</h3>
      <p>分步骤的对称破缺：</p>
      <katex-element expression="G \to H_1 \to H_2 \to \cdots \to H_n"></katex-element>
      
      <p>每一步对应不同的能标。</p>

      <h3>拓扑缺陷</h3>
      <p>对称破缺可能产生拓扑缺陷：</p>
      <ul>
        <li><strong>畴壁：</strong>离散对称破缺</li>
        <li><strong>宇宙弦：</strong>U(1)对称破缺</li>
        <li><strong>单极子：</strong>非阿贝尔对称破缺</li>
        <li><strong>纹理：</strong>全局对称破缺</li>
      </ul>
    </section>

    <section class="condensed-matter-applications">
      <h2>凝聚态中的对称破缺</h2>
      
      <h3>超导体</h3>
      <p>Cooper对凝聚破缺U(1)对称性：</p>
      <katex-element expression="\langle \psi_\uparrow \psi_\downarrow \rangle \neq 0"></katex-element>
      
      <p>产生超导能隙和Meissner效应。</p>

      <h4>Ginzburg-Landau理论</h4>
      <p>序参量的有效理论：</p>
      <katex-element expression="F = \alpha |\psi|^2 + \frac{\beta}{2} |\psi|^4 + \frac{1}{2m^*} |(\nabla - i\frac{2e}{\hbar}\mathbf{A})\psi|^2"></katex-element>

      <h3>磁性系统</h3>
      <p>铁磁体中的自发磁化：</p>
      <katex-element expression="\langle \mathbf{S} \rangle \neq 0"></katex-element>
      
      <p>破缺旋转对称性，产生磁子（自旋波）。</p>

      <h4>Heisenberg模型</h4>
      <p>自旋系统的哈密顿量：</p>
      <katex-element expression="H = -J \sum_{\langle i,j \rangle} \mathbf{S}_i \cdot \mathbf{S}_j"></katex-element>

      <h3>液晶</h3>
      <p>向列相中的取向序：</p>
      <katex-element expression="\langle \mathbf{n} \rangle \neq 0"></katex-element>
      
      <p>破缺旋转对称性。</p>

      <h3>量子霍尔效应</h3>
      <p>分数量子霍尔态的不可压缩性：</p>
      <katex-element expression="\Psi_{1/3} = \prod_{i<j} (z_i - z_j)^3 e^{-\sum_i |z_i|^2/4l_B^2}"></katex-element>
      
      <p>破缺平移对称性。</p>

      <h3>拓扑绝缘体</h3>
      <p>时间反演对称性保护的拓扑序：</p>
      <katex-element expression="H = v_F (\sigma_x k_x + \sigma_y k_y) + m \sigma_z"></katex-element>
      
      <p>表面态受拓扑保护。</p>
    </section>

    <section class="phase-transitions">
      <h2>相变与临界现象</h2>
      
      <h3>Landau理论</h3>
      <p>序参量的自由能展开：</p>
      <katex-element expression="F = F_0 + a(T-T_c)\phi^2 + b\phi^4 + c\phi^6 + \cdots"></katex-element>
      
      <p>预言二级相变的临界行为。</p>

      <h3>临界指数</h3>
      <p>临界点附近的标度律：</p>
      <div class="equation-block">
        <katex-element expression="\phi \sim |T-T_c|^\beta"></katex-element>
        <katex-element expression="C \sim |T-T_c|^{-\alpha}"></katex-element>
        <katex-element expression="\chi \sim |T-T_c|^{-\gamma}"></katex-element>
      </div>

      <h3>重整化群</h3>
      <p>Wilson-Fisher不动点：</p>
      <katex-element expression="\beta(g) = -\epsilon g + bg^2 + \cdots"></katex-element>
      
      <p>其中<katex-element expression="\epsilon = 4-d"></katex-element>。</p>

      <h3>普适性类</h3>
      <p>相同对称性的系统具有相同的临界行为：</p>
      <ul>
        <li><strong>Ising类：</strong>Z₂对称性</li>
        <li><strong>XY类：</strong>U(1)对称性</li>
        <li><strong>Heisenberg类：</strong>O(3)对称性</li>
      </ul>
    </section>

    <section class="topological-aspects">
      <h2>拓扑方面</h2>
      
      <h3>拓扑缺陷</h3>
      <p>对称破缺产生的拓扑激发：</p>
      <katex-element expression="\pi_n(G/H)"></katex-element>
      
      <p>决定了可能的拓扑缺陷类型。</p>

      <h3>Kibble机制</h3>
      <p>相变过程中缺陷的形成：</p>
      <katex-element expression="n \sim \tau_Q^{-d\nu/(1+z\nu)}"></katex-element>
      
      <p>其中τ_Q是淬火时间，ν和z是临界指数。</p>

      <h3>拓扑序</h3>
      <p>不能用局域序参量描述的量子相：</p>
      <ul>
        <li><strong>分数量子霍尔态</strong></li>
        <li><strong>量子自旋液体</strong></li>
        <li><strong>拓扑超导体</strong></li>
      </ul>

      <h3>对称保护拓扑相</h3>
      <p>受对称性保护的拓扑相：</p>
      <ul>
        <li><strong>时间反演保护</strong></li>
        <li><strong>粒子-空穴对称性保护</strong></li>
        <li><strong>手征对称性保护</strong></li>
      </ul>
    </section>

    <section class="experimental-signatures">
      <h2>实验特征</h2>
      
      <h3>Higgs玻色子发现</h3>
      <p>2012年在LHC发现Higgs玻色子：</p>
      <ul>
        <li><strong>质量：</strong>125 GeV</li>
        <li><strong>衰变道：</strong>γγ, ZZ*, WW*</li>
        <li><strong>自旋-宇称：</strong>0⁺</li>
      </ul>

      <h3>电弱精确测量</h3>
      <p>电弱参数的精密测量：</p>
      <div class="equation-block">
        <katex-element expression="m_W = 80.379 \pm 0.012 \text{ GeV}"></katex-element>
        <katex-element expression="m_Z = 91.1876 \pm 0.0021 \text{ GeV}"></katex-element>
      </div>

      <h3>强子谱学</h3>
      <p>手征对称破缺的证据：</p>
      <ul>
        <li><strong>π介子的轻质量</strong></li>
        <li><strong>手征伙伴的质量分裂</strong></li>
        <li><strong>PCAC关系的验证</strong></li>
      </ul>

      <h3>凝聚态实验</h3>
      <p>对称破缺的直接观测：</p>
      <ul>
        <li><strong>超导能隙</strong></li>
        <li><strong>磁化强度</strong></li>
        <li><strong>结构相变</strong></li>
      </ul>
    </section>

    <section class="beyond-standard-model">
      <h2>超越标准模型</h2>
      
      <h3>多Higgs模型</h3>
      <p>扩展的Higgs扇形：</p>
      <ul>
        <li><strong>两Higgs双重态模型</strong></li>
        <li><strong>复合Higgs模型</strong></li>
        <li><strong>额外维度模型</strong></li>
      </ul>

      <h3>超对称</h3>
      <p>超对称破缺机制：</p>
      <ul>
        <li><strong>软破缺项</strong></li>
        <li><strong>规范介导破缺</strong></li>
        <li><strong>重力介导破缺</strong></li>
      </ul>

      <h3>大统一理论</h3>
      <p>规范耦合统一：</p>
      <katex-element expression="g_1(M_{GUT}) = g_2(M_{GUT}) = g_3(M_{GUT})"></katex-element>
      
      <p>在<katex-element expression="M_{GUT} \sim 10^{16}"></katex-element> GeV处。</p>

      <h3>额外维度</h3>
      <p>Kaluza-Klein理论中的对称破缺：</p>
      <ul>
        <li><strong>轨道化破缺</strong></li>
        <li><strong>边界条件破缺</strong></li>
        <li><strong>扭曲额外维度</strong></li>
      </ul>
    </section>

    <section class="computational-methods">
      <h2>计算方法</h2>
      
      <h3>格点计算</h3>
      <p>非微扰计算方法：</p>
      <ul>
        <li><strong>蒙特卡罗模拟</strong></li>
        <li><strong>有限温度计算</strong></li>
        <li><strong>手征外推</strong></li>
      </ul>

      <h3>有效场论</h3>
      <p>低能有效理论：</p>
      <katex-element expression="\mathcal{L}_{eff} = \mathcal{L}_{SM} + \sum_i \frac{c_i}{\Lambda^{n_i-4}} \mathcal{O}_i"></katex-element>
      
      <p>其中Λ是新物理能标。</p>

      <h3>重整化群方法</h3>
      <p>多能标问题的处理：</p>
      <ul>
        <li><strong>阈值效应</strong></li>
        <li><strong>大对数求和</strong></li>
        <li><strong>有效势计算</strong></li>
      </ul>

      <h3>数值方法</h3>
      <p>现代计算技术：</p>
      <ul>
        <li><strong>机器学习</strong></li>
        <li><strong>量子模拟</strong></li>
        <li><strong>张量网络</strong></li>
      </ul>
    </section>

    <section class="future-directions">
      <h2>未来方向</h2>
      
      <h3>理论发展</h3>
      <p>待解决的理论问题：</p>
      <ul>
        <li><strong>层次问题</strong></li>
        <li><strong>强CP问题</strong></li>
        <li><strong>暗物质问题</strong></li>
      </ul>

      <h3>实验前沿</h3>
      <p>未来实验计划：</p>
      <ul>
        <li><strong>高亮度LHC</strong></li>
        <li><strong>未来对撞机</strong></li>
        <li><strong>精密测量</strong></li>
      </ul>

      <h3>跨学科应用</h3>
      <p>其他领域的应用：</p>
      <ul>
        <li><strong>宇宙学</strong></li>
        <li><strong>凝聚态物理</strong></li>
        <li><strong>量子信息</strong></li>
      </ul>

      <h3>新概念</h3>
      <p>新兴理论概念：</p>
      <ul>
        <li><strong>量子纠错</strong></li>
        <li><strong>全息对偶</strong></li>
        <li><strong>机器学习物理</strong></li>
      </ul>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        对称破缺与质量产生是现代物理学的核心概念，它不仅解释了基本粒子质量的
        起源，也为理解各种物理现象提供了统一的框架。从Higgs机制到手征对称破缺，
        从超导到磁性，对称破缺现象无处不在。这些理论不仅在粒子物理中取得了
        巨大成功，也在凝聚态物理、宇宙学等领域发挥着重要作用。随着实验技术
        的进步和理论方法的发展，我们对对称破缺机制的理解将继续深化，并可能
        发现新的物理现象和应用。未来的研究将继续探索更深层次的对称性和破缺
        机制，为解决现有理论问题和发现新物理提供线索。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_4_3',
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