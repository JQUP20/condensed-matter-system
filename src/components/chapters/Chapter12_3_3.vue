<template>
  <div class="chapter-content">
    <h1>12.3.3 量子电动力学</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        量子电动力学（Quantum Electrodynamics, QED）是描述电磁相互作用的量子场论，
        是现代物理学最成功的理论之一。QED将电磁场和费米子场统一在一个相对论不变的
        框架内，成功解释了原子物理、粒子物理和凝聚态物理中的众多现象。本章将系统
        介绍QED的基本原理、拉格朗日量、费曼图技术、重整化理论以及在凝聚态物理中
        的应用。QED不仅是粒子物理标准模型的基础，也为理解凝聚态系统中的电磁响应
        提供了重要的理论工具。
      </p>
    </section>

    <section class="qed-lagrangian">
      <h2>QED拉格朗日量</h2>
      
      <h3>基本拉格朗日量</h3>
      <p>QED的拉格朗日密度为：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi}(i\gamma^\mu \partial_\mu - m)\psi - \frac{1}{4}F_{\mu\nu}F^{\mu\nu} - e\bar{\psi}\gamma^\mu A_\mu \psi"></katex-element>
      
      <p>其中各项的物理意义：</p>
      <ul>
        <li><strong>费米子动能项：</strong><katex-element expression="\bar{\psi}i\gamma^\mu \partial_\mu \psi"></katex-element></li>
        <li><strong>费米子质量项：</strong><katex-element expression="-m\bar{\psi}\psi"></katex-element></li>
        <li><strong>电磁场动能项：</strong><katex-element expression="-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}"></katex-element></li>
        <li><strong>相互作用项：</strong><katex-element expression="-e\bar{\psi}\gamma^\mu A_\mu \psi"></katex-element></li>
      </ul>

      <h3>电磁场张量</h3>
      <p>电磁场强张量定义为：</p>
      <katex-element expression="F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu"></katex-element>
      
      <p>其分量形式：</p>
      <katex-element expression="F^{\mu\nu} = \begin{pmatrix}
      0 & -E_x/c & -E_y/c & -E_z/c \\
      E_x/c & 0 & -B_z & B_y \\
      E_y/c & B_z & 0 & -B_x \\
      E_z/c & -B_y & B_x & 0
      \end{pmatrix}"></katex-element>

      <h3>规范不变性</h3>
      <p>QED拉格朗日量在局域U(1)规范变换下不变：</p>
      <div class="equation-block">
        <katex-element expression="\psi(x) \to e^{ie\alpha(x)} \psi(x)"></katex-element>
        <katex-element expression="A_\mu(x) \to A_\mu(x) + \partial_\mu \alpha(x)"></katex-element>
      </div>
      
      <p>这种不变性是电荷守恒的根源。</p>
    </section>

    <section class="quantization">
      <h2>正则量子化</h2>
      
      <h3>正则动量</h3>
      <p>费米子场的正则动量：</p>
      <katex-element expression="\pi_\psi = \frac{\partial \mathcal{L}}{\partial (\partial_0 \psi)} = i\bar{\psi}\gamma^0"></katex-element>
      
      <p>电磁场的正则动量：</p>
      <katex-element expression="\pi^i = \frac{\partial \mathcal{L}}{\partial (\partial_0 A_i)} = -F^{0i} = E^i"></katex-element>

      <h3>反对易关系</h3>
      <p>费米子场的等时反对易关系：</p>
      <katex-element expression="\{\psi_\alpha(t, \mathbf{x}), \psi_\beta^\dagger(t, \mathbf{y})\} = \delta_{\alpha\beta} \delta^3(\mathbf{x} - \mathbf{y})"></katex-element>

      <h3>对易关系</h3>
      <p>电磁场的等时对易关系：</p>
      <div class="equation-block">
        <katex-element expression="[A_i(t, \mathbf{x}), E_j(t, \mathbf{y})] = i\delta_{ij} \delta^3(\mathbf{x} - \mathbf{y})"></katex-element>
        <katex-element expression="[A_0(t, \mathbf{x}), \pi_0(t, \mathbf{y})] = 0"></katex-element>
      </div>

      <h3>规范固定</h3>
      <p>为了量子化，需要选择规范：</p>
      <ul>
        <li><strong>库仑规范：</strong><katex-element expression="\nabla \cdot \mathbf{A} = 0"></katex-element></li>
        <li><strong>洛伦兹规范：</strong><katex-element expression="\partial_\mu A^\mu = 0"></katex-element></li>
        <li><strong>轴规范：</strong><katex-element expression="A_3 = 0"></katex-element></li>
      </ul>
    </section>

    <section class="feynman-rules">
      <h2>费曼规则</h2>
      
      <h3>传播子</h3>
      <p>费米子传播子（动量空间）：</p>
      <katex-element expression="S_F(p) = \frac{i}{\gamma^\mu p_\mu - m + i\epsilon}"></katex-element>
      
      <p>光子传播子（费曼规范）：</p>
      <katex-element expression="D_F^{\mu\nu}(k) = \frac{-ig^{\mu\nu}}{k^2 + i\epsilon}"></katex-element>

      <h3>顶点</h3>
      <p>电子-光子顶点：</p>
      <katex-element expression="-ie\gamma^\mu"></katex-element>
      
      <p>每个顶点贡献因子<katex-element expression="-ie\gamma^\mu"></katex-element>和动量守恒。</p>

      <h3>外线</h3>
      <p>外线因子：</p>
      <ul>
        <li><strong>入射电子：</strong><katex-element expression="u(p)"></katex-element></li>
        <li><strong>出射电子：</strong><katex-element expression="\bar{u}(p)"></katex-element></li>
        <li><strong>入射正电子：</strong><katex-element expression="\bar{v}(p)"></katex-element></li>
        <li><strong>出射正电子：</strong><katex-element expression="v(p)"></katex-element></li>
        <li><strong>光子：</strong><katex-element expression="\epsilon_\mu(k)"></katex-element></li>
      </ul>

      <h3>积分测度</h3>
      <p>每个内线积分：</p>
      <katex-element expression="\int \frac{d^4k}{(2\pi)^4}"></katex-element>
      
      <p>对称因子和符号规则需要仔细考虑。</p>
    </section>

    <section class="tree-level-processes">
      <h2>树图过程</h2>
      
      <h3>康普顿散射</h3>
      <p>康普顿散射振幅：</p>
      <katex-element expression="\mathcal{M} = -e^2 \bar{u}(p') \left[ \frac{\gamma^\mu (\gamma \cdot k + \gamma \cdot p + m) \gamma^\nu}{(k + p)^2 - m^2} + \frac{\gamma^\nu (\gamma \cdot p - \gamma \cdot k' + m) \gamma^\mu}{(p - k')^2 - m^2} \right] u(p) \epsilon_\mu(k) \epsilon_\nu^*(k')"></katex-element>

      <h3>电子-正电子湮灭</h3>
      <p>湮灭为两光子的振幅：</p>
      <katex-element expression="\mathcal{M} = -e^2 \bar{v}(p_2) \gamma^\mu u(p_1) \frac{-ig_{\mu\nu}}{q^2} \bar{u}(k_1) \gamma^\nu v(k_2)"></katex-element>
      
      <p>其中<katex-element expression="q = p_1 + p_2 = k_1 + k_2"></katex-element>。</p>

      <h3>Bhabha散射</h3>
      <p>电子-正电子散射包含s道和t道贡献：</p>
      <katex-element expression="\mathcal{M} = \mathcal{M}_s + \mathcal{M}_t"></katex-element>
      
      <p>其中s道和t道分别对应不同的动量传递通道。</p>

      <h3>Møller散射</h3>
      <p>电子-电子散射的直接和交换图：</p>
      <katex-element expression="\mathcal{M} = \mathcal{M}_{direct} - \mathcal{M}_{exchange}"></katex-element>
      
      <p>负号来自费米子的反对称性。</p>
    </section>

    <section class="loop-corrections">
      <h2>圈图修正</h2>
      
      <h3>电子自能</h3>
      <p>一圈电子自能：</p>
      <katex-element expression="\Sigma(p) = -ie^2 \int \frac{d^4k}{(2\pi)^4} \gamma^\mu \frac{i}{\gamma \cdot (p-k) - m + i\epsilon} \gamma^\nu \frac{-ig_{\mu\nu}}{k^2 + i\epsilon}"></katex-element>
      
      <p>这个积分是发散的，需要重整化。</p>

      <h3>光子自能</h3>
      <p>真空极化张量：</p>
      <katex-element expression="\Pi^{\mu\nu}(q) = -e^2 \int \frac{d^4k}{(2\pi)^4} \text{Tr}\left[ \gamma^\mu \frac{i}{\gamma \cdot k - m + i\epsilon} \gamma^\nu \frac{i}{\gamma \cdot (k-q) - m + i\epsilon} \right]"></katex-element>

      <h3>顶点修正</h3>
      <p>一圈顶点修正：</p>
      <katex-element expression="\Lambda^\mu(p', p) = -ie^2 \int \frac{d^4k}{(2\pi)^4} \gamma^\nu \frac{i}{\gamma \cdot (p'-k) - m + i\epsilon} \gamma^\mu \frac{i}{\gamma \cdot (p-k) - m + i\epsilon} \gamma^\rho \frac{-ig_{\nu\rho}}{k^2 + i\epsilon}"></katex-element>

      <h3>Ward恒等式</h3>
      <p>规范不变性导致Ward恒等式：</p>
      <katex-element expression="q_\mu \Lambda^\mu(p', p) = S^{-1}(p) - S^{-1}(p')"></katex-element>
      
      <p>这保证了电荷守恒和规范不变性。</p>
    </section>

    <section class="renormalization">
      <h2>重整化</h2>
      
      <h3>发散结构</h3>
      <p>QED中的紫外发散：</p>
      <ul>
        <li><strong>电子自能：</strong>线性和对数发散</li>
        <li><strong>光子自能：</strong>二次发散（但横向部分有限）</li>
        <li><strong>顶点修正：</strong>对数发散</li>
      </ul>

      <h3>维数正规化</h3>
      <p>在<katex-element expression="d = 4 - 2\epsilon"></katex-element>维中：</p>
      <katex-element expression="\int \frac{d^dk}{(2\pi)^d} \frac{1}{k^2} = \frac{i}{(4\pi)^{d/2}} \frac{\Gamma(1 - d/2)}{\Gamma(1)} \Lambda^{d-2}"></katex-element>
      
      <p>极点<katex-element expression="1/\epsilon"></katex-element>对应紫外发散。</p>

      <h3>重整化方案</h3>
      <p>MS方案中的重整化常数：</p>
      <div class="equation-block">
        <katex-element expression="Z_1 = 1 + \frac{\alpha}{4\pi} \frac{1}{\epsilon} + O(\alpha^2)"></katex-element>
        <katex-element expression="Z_2 = 1 + \frac{\alpha}{4\pi} \frac{1}{\epsilon} + O(\alpha^2)"></katex-element>
        <katex-element expression="Z_3 = 1 - \frac{\alpha}{3\pi} \frac{1}{\epsilon} + O(\alpha^2)"></katex-element>
      </div>

      <h3>β函数</h3>
      <p>QED的β函数：</p>
      <katex-element expression="\beta(e) = \mu \frac{de}{d\mu} = \frac{e^3}{12\pi^2} + O(e^5)"></katex-element>
      
      <p>正的β函数表明QED在高能下是非渐近自由的。</p>
    </section>

    <section class="anomalous-magnetic-moment">
      <h2>反常磁矩</h2>
      
      <h3>经典磁矩</h3>
      <p>Dirac方程预言的磁矩：</p>
      <katex-element expression="\mu = g \frac{e}{2m} S, \quad g = 2"></katex-element>
      
      <p>其中g=2是Dirac预言的g因子。</p>

      <h3>量子修正</h3>
      <p>一圈修正给出：</p>
      <katex-element expression="g = 2 + \frac{\alpha}{2\pi} + O(\alpha^2)"></katex-element>
      
      <p>Schwinger修正<katex-element expression="\frac{\alpha}{2\pi} \approx 0.00116"></katex-element>。</p>

      <h3>高阶修正</h3>
      <p>反常磁矩的级数展开：</p>
      <katex-element expression="a_e = \frac{g-2}{2} = \frac{\alpha}{2\pi} + A_2 \left(\frac{\alpha}{\pi}\right)^2 + A_3 \left(\frac{\alpha}{\pi}\right)^3 + \cdots"></katex-element>
      
      <p>其中<katex-element expression="A_2 = -0.328..."></katex-element>，<katex-element expression="A_3 = 1.181..."></katex-element>。</p>

      <h3>实验验证</h3>
      <p>实验测量的精度达到：</p>
      <katex-element expression="a_e^{exp} = 1159652180.73(28) \times 10^{-12}"></katex-element>
      
      <p>与理论计算的一致性验证了QED的正确性。</p>
    </section>

    <section class="lamb-shift">
      <h2>兰姆位移</h2>
      
      <h3>氢原子能级</h3>
      <p>Dirac理论预言的能级：</p>
      <katex-element expression="E_{nj} = mc^2 \left[ 1 + \left( \frac{\alpha Z}{n - j - 1/2 + \sqrt{(j+1/2)^2 - \alpha^2 Z^2}} \right)^2 \right]^{-1/2}"></katex-element>

      <h3>量子修正</h3>
      <p>兰姆位移主要来自：</p>
      <ul>
        <li><strong>电子自能修正</strong></li>
        <li><strong>真空极化修正</strong></li>
        <li><strong>反冲修正</strong></li>
      </ul>

      <h3>Bethe计算</h3>
      <p>非相对论极限下的兰姆位移：</p>
      <katex-element expression="\Delta E = \frac{4\alpha^5 mc^2}{3\pi n^3} \left[ \ln\left(\frac{mc^2}{I}\right) + \text{常数} \right]"></katex-element>
      
      <p>其中I是平均激发能。</p>

      <h3>实验观测</h3>
      <p>2S₁/₂和2P₁/₂能级的分裂：</p>
      <katex-element expression="\Delta E_{Lamb} = 1057.845(9) \text{ MHz}"></katex-element>
      
      <p>这是QED精密检验的重要里程碑。</p>
    </section>

    <section class="casimir-effect">
      <h2>卡西米尔效应</h2>
      
      <h3>真空能</h3>
      <p>电磁场的零点能：</p>
      <katex-element expression="E_0 = \frac{1}{2} \sum_{\mathbf{k}, \lambda} \hbar \omega_k"></katex-element>
      
      <p>这个求和是发散的，需要正规化。</p>

      <h3>边界条件</h3>
      <p>两平行导体板间的边界条件：</p>
      <katex-element expression="E_\parallel|_{z=0,a} = 0"></katex-element>
      
      <p>导致模式的量子化。</p>

      <h3>卡西米尔力</h3>
      <p>单位面积上的卡西米尔力：</p>
      <katex-element expression="F = -\frac{\pi^2 \hbar c}{240 a^4}"></katex-element>
      
      <p>负号表示吸引力。</p>

      <h3>ζ函数正规化</h3>
      <p>使用ζ函数正规化：</p>
      <katex-element expression="\sum_{n=1}^\infty n = \zeta(-1) = -\frac{1}{12}"></katex-element>
      
      <p>这给出了有限的卡西米尔能。</p>
    </section>

    <section class="condensed-matter-qed">
      <h2>凝聚态中的QED</h2>
      
      <h3>固体中的有效QED</h3>
      <p>在介质中，QED拉格朗日量修改为：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi}(i\gamma^\mu D_\mu - m^*)\psi - \frac{1}{4\mu_0}F_{\mu\nu}F^{\mu\nu} - \frac{\epsilon_0(\epsilon_r-1)}{4}F_{0i}F^{0i}"></katex-element>
      
      <p>其中<katex-element expression="m^*"></katex-element>是有效质量，<katex-element expression="\epsilon_r"></katex-element>是相对介电常数。</p>

      <h3>石墨烯中的QED</h3>
      <p>石墨烯的低能有效理论：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi} i v_F \gamma^\mu \partial_\mu \psi - \frac{e v_F}{\epsilon} \bar{\psi} \gamma^\mu A_\mu \psi"></katex-element>
      
      <p>其中<katex-element expression="v_F \approx c/300"></katex-element>是费米速度。</p>

      <h3>拓扑绝缘体</h3>
      <p>表面态的有效QED：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi} i v_F (\sigma_x \partial_x + \sigma_y \partial_y) \psi + \frac{\theta e^2}{2\pi \hbar c} \mathbf{E} \cdot \mathbf{B}"></katex-element>
      
      <p>包含拓扑θ项。</p>

      <h3>量子霍尔效应</h3>
      <p>朗道能级中的有效理论：</p>
      <katex-element expression="\mathcal{L} = \sum_n \bar{\psi}_n i \partial_t \psi_n + \frac{\sigma_{xy}}{2} \epsilon^{\mu\nu\rho} A_\mu \partial_\nu A_\rho"></katex-element>
      
      <p>其中<katex-element expression="\sigma_{xy} = \nu \frac{e^2}{h}"></katex-element>是霍尔电导。</p>
    </section>

    <section class="non-abelian-extensions">
      <h2>非阿贝尔推广</h2>
      
      <h3>Yang-Mills理论</h3>
      <p>非阿贝尔规范理论的拉格朗日量：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi}(i\gamma^\mu D_\mu - m)\psi - \frac{1}{4}F_{\mu\nu}^a F^{a\mu\nu}"></katex-element>
      
      <p>其中<katex-element expression="D_\mu = \partial_\mu - ig T^a A_\mu^a"></katex-element>是协变导数。</p>

      <h3>规范场强</h3>
      <p>非阿贝尔场强张量：</p>
      <katex-element expression="F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + g f^{abc} A_\mu^b A_\nu^c"></katex-element>
      
      <p>包含三点和四点自相互作用。</p>

      <h3>BRST对称性</h3>
      <p>规范固定后的BRST变换：</p>
      <div class="equation-block">
        <katex-element expression="\delta A_\mu^a = D_\mu^{ab} c^b"></katex-element>
        <katex-element expression="\delta c^a = -\frac{g}{2} f^{abc} c^b c^c"></katex-element>
        <katex-element expression="\delta \bar{c}^a = B^a"></katex-element>
      </div>

      <h3>渐近自由</h3>
      <p>非阿贝尔理论的β函数：</p>
      <katex-element expression="\beta(g) = -\frac{g^3}{16\pi^2} \left[ \frac{11}{3} C_2(G) - \frac{4}{3} T(R) n_f \right]"></katex-element>
      
      <p>负的β函数导致渐近自由。</p>
    </section>

    <section class="experimental-tests">
      <h2>实验检验</h2>
      
      <h3>精密测量</h3>
      <p>QED的高精度实验检验：</p>
      <ul>
        <li><strong>电子反常磁矩：</strong>精度达到10⁻¹²</li>
        <li><strong>兰姆位移：</strong>理论与实验符合到kHz精度</li>
        <li><strong>精细结构常数：</strong>多种方法测量一致</li>
      </ul>

      <h3>高能散射</h3>
      <p>高能电子-正电子对撞实验：</p>
      <ul>
        <li><strong>Bhabha散射截面</strong></li>
        <li><strong>μ子对产生</strong></li>
        <li><strong>强子产生比值R</strong></li>
      </ul>

      <h3>低能现象</h3>
      <p>低能QED效应的观测：</p>
      <ul>
        <li><strong>卡西米尔效应</strong></li>
        <li><strong>范德瓦尔斯力</strong></li>
        <li><strong>原子能级精细结构</strong></li>
      </ul>
    </section>

    <section class="computational-methods">
      <h2>计算方法</h2>
      
      <h3>微扰论</h3>
      <p>费曼图的系统计算：</p>
      <ul>
        <li><strong>动量积分技术</strong></li>
        <li><strong>Passarino-Veltman约化</strong></li>
        <li><strong>积分-by-parts恒等式</strong></li>
      </ul>

      <h3>数值方法</h3>
      <p>现代计算技术：</p>
      <ul>
        <li><strong>蒙特卡罗积分</strong></li>
        <li><strong>扇形积分</strong></li>
        <li><strong>微分方程方法</strong></li>
      </ul>

      <h3>符号计算</h3>
      <p>计算机代数系统：</p>
      <ul>
        <li><strong>FeynCalc</strong></li>
        <li><strong>FORM</strong></li>
        <li><strong>Mathematica/Maple</strong></li>
      </ul>
    </section>

    <section class="future-directions">
      <h2>未来方向</h2>
      
      <h3>精密前沿</h3>
      <p>更高精度的理论计算和实验测量：</p>
      <ul>
        <li><strong>五圈反常磁矩计算</strong></li>
        <li><strong>质子半径之谜</strong></li>
        <li><strong>精细结构常数的时间变化</strong></li>
      </ul>

      <h3>强场QED</h3>
      <p>极强电磁场中的非线性效应：</p>
      <ul>
        <li><strong>Schwinger对产生</strong></li>
        <li><strong>非线性康普顿散射</strong></li>
        <li><strong>真空双折射</strong></li>
      </ul>

      <h3>拓扑效应</h3>
      <p>QED中的拓扑现象：</p>
      <ul>
        <li><strong>Chern-Simons修正</strong></li>
        <li><strong>轴子电动力学</strong></li>
        <li><strong>磁单极效应</strong></li>
      </ul>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        量子电动力学作为第一个成功的量子场论，不仅在粒子物理学中占据核心地位，
        也为凝聚态物理提供了重要的理论框架。从基本的拉格朗日量到复杂的圈图计算，
        从经典的兰姆位移到现代的拓扑效应，QED展现了量子场论的强大预言能力。
        随着实验技术的不断进步和理论方法的持续发展，QED将继续在基础物理学和
        应用物理学中发挥重要作用，为我们理解自然界的基本相互作用提供深刻洞察。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_3_3',
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