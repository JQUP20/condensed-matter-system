<template>
  <div class="chapter-content">
    <h1>12.4.1 SU(N)规范理论</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        SU(N)规范理论是现代粒子物理学和凝聚态物理学的核心理论框架之一。作为非阿贝尔
        规范理论的典型代表，SU(N)理论不仅是量子色动力学（QCD）的基础，也在凝聚态
        系统中描述各种相互作用和相变现象。本章将系统介绍SU(N)规范理论的数学结构、
        物理内容、量子化方法以及在不同物理系统中的应用。从群论基础到路径积分量子化，
        从经典解到量子修正，我们将全面探讨这一重要理论的各个方面。
      </p>
    </section>

    <section class="group-theory">
      <h2>SU(N)群论基础</h2>
      
      <h3>群的定义</h3>
      <p>SU(N)群是N×N特殊酉矩阵群：</p>
      <katex-element expression="SU(N) = \{U \in GL(N, \mathbb{C}) : U^\dagger U = I, \det U = 1\}"></katex-element>
      
      <p>其中I是N×N单位矩阵。</p>

      <h3>李代数</h3>
      <p>SU(N)的李代数su(N)由生成元构成：</p>
      <katex-element expression="U = \exp(i\alpha^a T^a), \quad a = 1, 2, \ldots, N^2-1"></katex-element>
      
      <p>生成元满足对易关系：</p>
      <katex-element expression="[T^a, T^b] = if^{abc} T^c"></katex-element>
      
      <p>其中<katex-element expression="f^{abc}"></katex-element>是结构常数。</p>

      <h3>Gell-Mann矩阵</h3>
      <p>对于SU(3)，生成元是8个Gell-Mann矩阵：</p>
      <div class="equation-block">
        <katex-element expression="\lambda_1 = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad \lambda_2 = \begin{pmatrix} 0 & -i & 0 \\ i & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}"></katex-element>
        <katex-element expression="\lambda_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix}, \quad \lambda_8 = \frac{1}{\sqrt{3}} \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -2 \end{pmatrix}"></katex-element>
      </div>

      <h3>Cartan子代数</h3>
      <p>SU(N)的Cartan子代数的维数为N-1，由对角生成元张成：</p>
      <katex-element expression="H_i = T^{i}, \quad i = 1, 2, \ldots, N-1"></katex-element>
      
      <p>它们相互对易：<katex-element expression="[H_i, H_j] = 0"></katex-element>。</p>

      <h3>根系统</h3>
      <p>SU(N)的根向量满足：</p>
      <katex-element expression="[H_i, E_\alpha] = \alpha_i E_\alpha"></katex-element>
      
      <p>其中<katex-element expression="\alpha = (\alpha_1, \ldots, \alpha_{N-1})"></katex-element>是根向量。</p>

      <h3>权重和表示</h3>
      <p>不可约表示由最高权重标记：</p>
      <katex-element expression="\Lambda = \sum_{i=1}^{N-1} \Lambda_i \omega_i"></katex-element>
      
      <p>其中<katex-element expression="\omega_i"></katex-element>是基本权重。</p>
    </section>

    <section class="classical-theory">
      <h2>经典Yang-Mills理论</h2>
      
      <h3>规范场</h3>
      <p>SU(N)规范场定义为：</p>
      <katex-element expression="A_\mu = A_\mu^a T^a"></katex-element>
      
      <p>其中<katex-element expression="A_\mu^a"></katex-element>是规范场分量。</p>

      <h3>场强张量</h3>
      <p>非阿贝尔场强张量：</p>
      <katex-element expression="F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu - ig[A_\mu, A_\nu]"></katex-element>
      
      <p>分量形式：</p>
      <katex-element expression="F_{\mu\nu}^a = \partial_\mu A_\nu^a - \partial_\nu A_\mu^a + g f^{abc} A_\mu^b A_\nu^c"></katex-element>

      <h3>Yang-Mills作用量</h3>
      <p>纯规范理论的作用量：</p>
      <katex-element expression="S_{YM} = -\frac{1}{4} \int d^4x \, F_{\mu\nu}^a F^{a\mu\nu}"></katex-element>
      
      <p>这是规范不变的。</p>

      <h3>运动方程</h3>
      <p>Yang-Mills方程：</p>
      <katex-element expression="D_\mu F^{a\mu\nu} = 0"></katex-element>
      
      <p>其中协变导数：</p>
      <katex-element expression="D_\mu F^{a\mu\nu} = \partial_\mu F^{a\mu\nu} + g f^{abc} A_\mu^b F^{c\mu\nu}"></katex-element>

      <h3>规范变换</h3>
      <p>无穷小规范变换：</p>
      <div class="equation-block">
        <katex-element expression="A_\mu^a \to A_\mu^a + D_\mu^{ab} \alpha^b"></katex-element>
        <katex-element expression="F_{\mu\nu}^a \to F_{\mu\nu}^a + g f^{abc} \alpha^b F_{\mu\nu}^c"></katex-element>
      </div>
      
      <p>其中<katex-element expression="D_\mu^{ab} = \delta^{ab} \partial_\mu + g f^{acb} A_\mu^c"></katex-element>。</p>
    </section>

    <section class="matter-coupling">
      <h2>物质场耦合</h2>
      
      <h3>费米子耦合</h3>
      <p>SU(N)规范场与费米子的耦合：</p>
      <katex-element expression="\mathcal{L}_f = \bar{\psi} i \gamma^\mu D_\mu \psi - m \bar{\psi} \psi"></katex-element>
      
      <p>其中协变导数：</p>
      <katex-element expression="D_\mu = \partial_\mu - ig A_\mu^a T^a"></katex-element>

      <h3>标量场耦合</h3>
      <p>标量场的协变拉格朗日量：</p>
      <katex-element expression="\mathcal{L}_s = (D_\mu \phi)^\dagger (D^\mu \phi) - V(\phi)"></katex-element>
      
      <p>其中<katex-element expression="D_\mu \phi = (\partial_\mu - ig A_\mu^a T^a) \phi"></katex-element>。</p>

      <h3>Higgs机制</h3>
      <p>当标量场获得真空期望值时：</p>
      <katex-element expression="\langle \phi \rangle = v"></katex-element>
      
      <p>规范玻色子获得质量：</p>
      <katex-element expression="m_W^2 = g^2 v^2 \text{Tr}(T^a T^a)"></katex-element>

      <h3>协变导数的性质</h3>
      <p>协变导数满足：</p>
      <katex-element expression="[D_\mu, D_\nu] = -ig F_{\mu\nu}"></katex-element>
      
      <p>这保证了规范不变性。</p>
    </section>

    <section class="quantization">
      <h2>量子化</h2>
      
      <h3>路径积分量子化</h3>
      <p>配分函数：</p>
      <katex-element expression="Z = \int \mathcal{D}A_\mu \, e^{iS[A]}"></katex-element>
      
      <p>但由于规范冗余，这个积分是发散的。</p>

      <h3>Faddeev-Popov方法</h3>
      <p>引入规范固定条件：</p>
      <katex-element expression="G^a[A] = 0"></katex-element>
      
      <p>Faddeev-Popov行列式：</p>
      <katex-element expression="\Delta_{FP}[A] = \det\left(\frac{\delta G^a[A^g]}{\delta \alpha^b}\right)"></katex-element>

      <h3>鬼场</h3>
      <p>引入Faddeev-Popov鬼场：</p>
      <katex-element expression="\mathcal{L}_{ghost} = \bar{c}^a \frac{\delta G^a}{\delta \alpha^b} c^b"></katex-element>
      
      <p>鬼场是反对易的标量场。</p>

      <h3>BRST对称性</h3>
      <p>BRST变换：</p>
      <div class="equation-block">
        <katex-element expression="\delta A_\mu^a = D_\mu^{ab} c^b"></katex-element>
        <katex-element expression="\delta c^a = -\frac{g}{2} f^{abc} c^b c^c"></katex-element>
        <katex-element expression="\delta \bar{c}^a = B^a"></katex-element>
      </div>

      <h3>有效作用量</h3>
      <p>规范固定后的有效作用量：</p>
      <katex-element expression="S_{eff} = S_{YM} + S_{gf} + S_{ghost}"></katex-element>
      
      <p>其中<katex-element expression="S_{gf}"></katex-element>是规范固定项，<katex-element expression="S_{ghost}"></katex-element>是鬼场项。</p>
    </section>

    <section class="feynman-rules">
      <h2>费曼规则</h2>
      
      <h3>传播子</h3>
      <p>规范玻色子传播子（费曼规范）：</p>
      <katex-element expression="D_{\mu\nu}^{ab}(k) = \frac{-i\delta^{ab} g_{\mu\nu}}{k^2 + i\epsilon}"></katex-element>
      
      <p>鬼场传播子：</p>
      <katex-element expression="D_{ghost}^{ab}(k) = \frac{i\delta^{ab}}{k^2 + i\epsilon}"></katex-element>

      <h3>三点顶点</h3>
      <p>三胶子顶点：</p>
      <katex-element expression="\Gamma_{\mu\nu\rho}^{abc}(k_1, k_2, k_3) = g f^{abc} \left[ g_{\mu\nu}(k_1 - k_2)_\rho + \text{循环} \right]"></katex-element>

      <h3>四点顶点</h3>
      <p>四胶子顶点：</p>
      <katex-element expression="\Gamma_{\mu\nu\rho\sigma}^{abcd} = -ig^2 \left[ f^{abe}f^{cde}(g_{\mu\rho}g_{\nu\sigma} - g_{\mu\sigma}g_{\nu\rho}) + \text{置换} \right]"></katex-element>

      <h3>鬼-胶子顶点</h3>
      <p>鬼场与胶子的相互作用顶点：</p>
      <katex-element expression="\Gamma_{ghost}^{abc}(k) = g f^{abc} k_\mu"></katex-element>

      <h3>费米子-胶子顶点</h3>
      <p>夸克-胶子顶点：</p>
      <katex-element expression="\Gamma_\mu^a = -ig \gamma_\mu T^a"></katex-element>
    </section>

    <section class="one-loop-corrections">
      <h2>单圈修正</h2>
      
      <h3>胶子自能</h3>
      <p>单圈胶子自能：</p>
      <katex-element expression="\Pi_{\mu\nu}^{ab}(k) = \delta^{ab} \left[ \Pi_1(k^2) (k^2 g_{\mu\nu} - k_\mu k_\nu) + \Pi_2(k^2) k_\mu k_\nu \right]"></katex-element>
      
      <p>横向部分：</p>
      <katex-element expression="\Pi_1(k^2) = \frac{g^2}{16\pi^2} \left[ \frac{11}{3} C_2(G) - \frac{4}{3} T(R) n_f \right] \ln\frac{\Lambda^2}{-k^2}"></katex-element>

      <h3>费米子自能</h3>
      <p>夸克自能修正：</p>
      <katex-element expression="\Sigma(p) = -ig^2 C_F \int \frac{d^4k}{(2\pi)^4} \gamma_\mu \frac{i(\gamma \cdot (p-k) + m)}{(p-k)^2 - m^2 + i\epsilon} \gamma_\nu \frac{-ig^{\mu\nu}}{k^2 + i\epsilon}"></katex-element>

      <h3>顶点修正</h3>
      <p>三胶子顶点的单圈修正包含多个图的贡献，计算较为复杂。</p>

      <h3>Ward恒等式</h3>
      <p>规范不变性导致的Ward恒等式：</p>
      <katex-element expression="k_\mu \Gamma^{\mu ab}(k, p, p') = g f^{abc} \left[ S^{-1}(p) T^c - T^c S^{-1}(p') \right]"></katex-element>
    </section>

    <section class="renormalization">
      <h2>重整化</h2>
      
      <h3>发散结构</h3>
      <p>SU(N)理论中的紫外发散：</p>
      <ul>
        <li><strong>胶子自能：</strong>二次和对数发散</li>
        <li><strong>费米子自能：</strong>线性和对数发散</li>
        <li><strong>顶点修正：</strong>对数发散</li>
      </ul>

      <h3>重整化常数</h3>
      <p>MS方案中的重整化常数：</p>
      <div class="equation-block">
        <katex-element expression="Z_g = 1 - \frac{g^2}{16\pi^2} \frac{11C_2(G) - 4T(R)n_f}{3} \frac{1}{\epsilon}"></katex-element>
        <katex-element expression="Z_A = 1 - \frac{g^2}{16\pi^2} \frac{11C_2(G) - 4T(R)n_f}{3} \frac{1}{\epsilon}"></katex-element>
      </div>

      <h3>β函数</h3>
      <p>SU(N)理论的β函数：</p>
      <katex-element expression="\beta(g) = \mu \frac{dg}{d\mu} = -\frac{g^3}{16\pi^2} \left[ \frac{11}{3} C_2(G) - \frac{4}{3} T(R) n_f \right] + O(g^5)"></katex-element>
      
      <p>其中<katex-element expression="C_2(G) = N"></katex-element>，<katex-element expression="T(R) = 1/2"></katex-element>。</p>

      <h3>渐近自由</h3>
      <p>当<katex-element expression="n_f < \frac{11N}{2}"></katex-element>时，β函数为负，理论是渐近自由的：</p>
      <katex-element expression="g^2(\mu) = \frac{g^2(\mu_0)}{1 + \frac{g^2(\mu_0)}{16\pi^2} b_0 \ln(\mu^2/\mu_0^2)}"></katex-element>
      
      <p>其中<katex-element expression="b_0 = \frac{11N - 2n_f}{3}"></katex-element>。</p>
    </section>

    <section class="instantons">
      <h2>瞬子解</h2>
      
      <h3>自对偶解</h3>
      <p>瞬子是满足自对偶条件的经典解：</p>
      <katex-element expression="F_{\mu\nu} = \pm \frac{1}{2} \epsilon_{\mu\nu\rho\sigma} F^{\rho\sigma}"></katex-element>
      
      <p>这使得作用量达到最小值。</p>

      <h3>BPST瞬子</h3>
      <p>单瞬子解的形式：</p>
      <katex-element expression="A_\mu^a(x) = \frac{2\rho^2}{g(x^2 + \rho^2)} \frac{\bar{\eta}_{\mu\nu}^a x_\nu}{x^2 + \rho^2}"></katex-element>
      
      <p>其中<katex-element expression="\rho"></katex-element>是瞬子大小，<katex-element expression="\bar{\eta}_{\mu\nu}^a"></katex-element>是't Hooft符号。</p>

      <h3>拓扑荷</h3>
      <p>瞬子的拓扑荷：</p>
      <katex-element expression="Q = \frac{1}{32\pi^2} \int d^4x \, \epsilon^{\mu\nu\rho\sigma} \text{Tr}(F_{\mu\nu} F_{\rho\sigma})"></katex-element>
      
      <p>对于单瞬子，<katex-element expression="Q = 1"></katex-element>。</p>

      <h3>瞬子气体</h3>
      <p>稀瞬子气体近似中的配分函数：</p>
      <katex-element expression="Z = \sum_{n=0}^\infty \frac{1}{n!} \left( \int d^4x \, d\rho \, d\Omega \, \rho^{-5} e^{-S_I} \right)^n"></katex-element>
      
      <p>其中<katex-element expression="S_I = 8\pi^2/g^2"></katex-element>是瞬子作用量。</p>
    </section>

    <section class="confinement">
      <h2>禁闭现象</h2>
      
      <h3>Wilson圈</h3>
      <p>Wilson圈算符定义为：</p>
      <katex-element expression="W[C] = \frac{1}{N} \text{Tr} \mathcal{P} \exp\left( ig \oint_C dx^\mu A_\mu \right)"></katex-element>
      
      <p>其中<katex-element expression="\mathcal{P}"></katex-element>表示路径排序。</p>

      <h3>面积定律</h3>
      <p>禁闭相中Wilson圈满足面积定律：</p>
      <katex-element expression="\langle W[C] \rangle \sim e^{-\sigma A}"></katex-element>
      
      <p>其中<katex-element expression="\sigma"></katex-element>是弦张力，A是环路围成的面积。</p>

      <h3>色禁闭</h3>
      <p>夸克间的势能在大距离下线性增长：</p>
      <katex-element expression="V(r) = -\frac{4\alpha_s}{3r} + \sigma r + \text{常数}"></katex-element>
      
      <p>这导致色荷的禁闭。</p>

      <h3>弦理论描述</h3>
      <p>大N极限下，规范理论等价于弦理论：</p>
      <katex-element expression="\langle W[C] \rangle = \int \mathcal{D}X \, e^{-S_{string}[X]}"></katex-element>
      
      <p>其中X是弦的世界面。</p>
    </section>

    <section class="condensed-matter-applications">
      <h2>凝聚态应用</h2>
      
      <h3>反铁磁体</h3>
      <p>量子反铁磁体的非线性σ模型：</p>
      <katex-element expression="\mathcal{L} = \frac{1}{2g} \text{Tr}(\partial_\mu U^\dagger \partial^\mu U)"></katex-element>
      
      <p>其中<katex-element expression="U \in SU(N)"></katex-element>描述自旋涨落。</p>

      <h3>量子霍尔效应</h3>
      <p>Chern-Simons有效理论：</p>
      <katex-element expression="\mathcal{L} = \frac{k}{4\pi} \epsilon^{\mu\nu\rho} \text{Tr}(A_\mu \partial_\nu A_\rho - \frac{2ig}{3} A_\mu A_\nu A_\rho)"></katex-element>

      <h3>高温超导</h3>
      <p>t-J模型的规范理论描述：</p>
      <katex-element expression="\mathcal{L} = \sum_i \bar{\psi}_i i\gamma^\mu (D_\mu)_{ij} \psi_j + J \sum_{\langle i,j \rangle} \mathbf{S}_i \cdot \mathbf{S}_j"></katex-element>

      <h3>拓扑绝缘体</h3>
      <p>表面态的有效理论包含SU(2)规范场：</p>
      <katex-element expression="\mathcal{L} = \bar{\psi} i\gamma^\mu D_\mu \psi + \frac{\theta}{2\pi} \epsilon^{\mu\nu\rho} \text{Tr}(A_\mu \partial_\nu A_\rho)"></katex-element>
    </section>

    <section class="lattice-gauge-theory">
      <h2>格点规范理论</h2>
      
      <h3>Wilson作用量</h3>
      <p>格点上的Wilson作用量：</p>
      <katex-element expression="S_W = \beta \sum_{plaquettes} \left( 1 - \frac{1}{N} \text{Re Tr } U_P \right)"></katex-element>
      
      <p>其中<katex-element expression="U_P"></katex-element>是格子元的乘积。</p>

      <h3>强耦合展开</h3>
      <p>强耦合极限下的展开：</p>
      <katex-element expression="Z = \int \prod_{links} dU_{link} \, e^{S_W} = \sum_{surfaces} \beta^{A(surface)} \cdots"></katex-element>

      <h3>蒙特卡罗模拟</h3>
      <p>数值计算方法：</p>
      <ul>
        <li><strong>Metropolis算法</strong></li>
        <li><strong>热浴算法</strong></li>
        <li><strong>混合蒙特卡罗</strong></li>
      </ul>

      <h3>连续极限</h3>
      <p>格距趋于零时恢复连续理论：</p>
      <katex-element expression="a \to 0, \quad \beta \to \infty, \quad g^2 = \frac{6}{\beta} + O(1/\beta^2)"></katex-element>
    </section>

    <section class="large-n-limit">
      <h2>大N极限</h2>
      
      <h3>'t Hooft极限</h3>
      <p>保持't Hooft耦合常数固定：</p>
      <katex-element expression="\lambda = g^2 N = \text{fixed}, \quad N \to \infty"></katex-element>

      <h3>平面图展开</h3>
      <p>费曼图按拓扑分类：</p>
      <katex-element expression="\mathcal{A} = \sum_{g=0}^\infty N^{2-2g} \mathcal{A}_g(\lambda)"></katex-element>
      
      <p>其中g是图的亏格。</p>

      <h3>主导贡献</h3>
      <p>大N极限下只有平面图贡献：</p>
      <katex-element expression="\mathcal{A} = N^2 \mathcal{A}_0(\lambda) + O(N^0)"></katex-element>

      <h3>AdS/CFT对应</h3>
      <p>大N规范理论与弦理论的对偶：</p>
      <katex-element expression="Z_{gauge}[J] = Z_{string}[J]"></katex-element>
      
      <p>这建立了规范理论与引力理论的联系。</p>
    </section>

    <section class="supersymmetric-extensions">
      <h2>超对称推广</h2>
      
      <h3>N=1超对称Yang-Mills</h3>
      <p>超对称拉格朗日量：</p>
      <katex-element expression="\mathcal{L} = -\frac{1}{4} F^{a\mu\nu} F_{\mu\nu}^a + i \bar{\lambda}^a \gamma^\mu D_\mu \lambda^a + \frac{g}{2} f^{abc} \bar{\lambda}^a \gamma_5 \lambda^b \phi^c"></katex-element>

      <h3>N=2超对称</h3>
      <p>包含标量场的超对称理论：</p>
      <katex-element expression="\mathcal{L} = \mathcal{L}_{N=1} + |D_\mu \phi|^2 + \text{Yukawa项} + \text{标量势}"></katex-element>

      <h3>Seiberg-Witten理论</h3>
      <p>N=2超对称SU(2)理论的精确解：</p>
      <katex-element expression="F = \frac{\partial \mathcal{F}}{\partial a}, \quad F_D = \frac{\partial \mathcal{F}}{\partial a_D}"></katex-element>
      
      <p>其中<katex-element expression="\mathcal{F}"></katex-element>是预势。</p>
    </section>

    <section class="experimental-signatures">
      <h2>实验特征</h2>
      
      <h3>粒子物理</h3>
      <p>QCD的实验验证：</p>
      <ul>
        <li><strong>深度非弹性散射</strong></li>
        <li><strong>喷注现象</strong></li>
        <li><strong>渐近自由的观测</strong></li>
      </ul>

      <h3>凝聚态系统</h3>
      <p>规范理论在凝聚态中的表现：</p>
      <ul>
        <li><strong>量子自旋液体</strong></li>
        <li><strong>分数量子霍尔效应</strong></li>
        <li><strong>高温超导体</strong></li>
      </ul>

      <h3>数值模拟</h3>
      <p>格点计算的结果：</p>
      <ul>
        <li><strong>胶球质量谱</strong></li>
        <li><strong>弦张力</strong></li>
        <li><strong>相变温度</strong></li>
      </ul>
    </section>

    <section class="future-directions">
      <h2>未来方向</h2>
      
      <h3>理论发展</h3>
      <p>SU(N)理论的前沿问题：</p>
      <ul>
        <li><strong>解析禁闭证明</strong></li>
        <li><strong>质量间隙问题</strong></li>
        <li><strong>拓扑相变</strong></li>
      </ul>

      <h3>计算方法</h3>
      <p>新的计算技术：</p>
      <ul>
        <li><strong>张量网络方法</strong></li>
        <li><strong>量子模拟</strong></li>
        <li><strong>机器学习应用</strong></li>
      </ul>

      <h3>应用拓展</h3>
      <p>新的应用领域：</p>
      <ul>
        <li><strong>量子信息</strong></li>
        <li><strong>宇宙学</strong></li>
        <li><strong>凝聚态新相</strong></li>
      </ul>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        SU(N)规范理论作为现代理论物理的基石，不仅在粒子物理学中描述强相互作用，
        也在凝聚态物理中提供了理解复杂多体系统的强有力工具。从群论基础到量子化
        方法，从微扰计算到非微扰现象，SU(N)理论展现了丰富的数学结构和深刻的
        物理内容。随着计算技术的发展和实验手段的进步，这一理论框架将继续在
        基础物理研究和实际应用中发挥重要作用，为我们理解自然界的基本规律
        提供更深层次的洞察。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_4_1',
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