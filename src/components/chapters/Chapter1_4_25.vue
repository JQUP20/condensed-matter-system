<template>
  <div class="landau-theory-page">
    <h1>Landau理论 (Landau Theory)</h1>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <p>Landau理论是描述连续相变的唯象理论，由列夫·朗道在1937年提出。该理论基于对称性和序参量的概念，为理解各种相变现象提供了统一的框架。Landau理论的核心思想是将自由能表示为序参量的解析函数，通过最小化自由能来确定系统的平衡态。这一理论不仅成功解释了许多实验现象，也为现代相变理论奠定了基础。</p>
      
      <h3>历史发展</h3>
      <ul>
        <li><strong>1937年</strong>：Landau提出相变的唯象理论</li>
        <li><strong>1950年代</strong>：Ginzburg-Landau理论在超导中的应用</li>
        <li><strong>1960年代</strong>：Wilson重整化群理论的发展</li>
        <li><strong>1970年代</strong>：临界现象的深入研究</li>
        <li><strong>1980年代至今</strong>：拓扑相变和量子相变的扩展</li>
      </ul>
    </section>

    <!-- 基本概念 -->
    <section class="basic-concepts">
      <h2>基本概念</h2>
      
      <h3>对称性与对称性破缺</h3>
      <p>Landau理论的核心是对称性概念：</p>
      <ul>
        <li><strong>高温相</strong>：具有较高对称性的无序相</li>
        <li><strong>低温相</strong>：对称性降低的有序相</li>
        <li><strong>自发对称性破缺</strong>：系统自发选择某个特定的有序态</li>
      </ul>

      <h3>序参量</h3>
      <p>序参量是描述有序程度的物理量：</p>
      
      <div class="formula">
        <p><strong>序参量的定义：</strong></p>
        <p>$$\eta = \langle \hat{O} \rangle - \langle \hat{O} \rangle_{\text{disorder}}$$</p>
      </div>
      
      <p>其中 $\hat{O}$ 是某个物理算符。序参量的特点：</p>
      <ul>
        <li>在无序相中 $\eta = 0$</li>
        <li>在有序相中 $\eta \neq 0$</li>
        <li>在相变点处连续变化（二阶相变）或不连续跳跃（一阶相变）</li>
      </ul>

      <h3>典型例子</h3>
      <ul>
        <li><strong>铁磁相变</strong>：磁化强度 $M$</li>
        <li><strong>液气相变</strong>：密度差 $\rho_l - \rho_g$</li>
        <li><strong>超导相变</strong>：超导序参量 $\Delta$</li>
        <li><strong>结构相变</strong>：晶格畸变 $u$</li>
      </ul>
    </section>

    <!-- Landau自由能 -->
    <section class="landau-free-energy">
      <h2>Landau自由能</h2>
      
      <h3>自由能展开</h3>
      <p>Landau理论将自由能按序参量展开：</p>
      
      <div class="formula">
        <p>$$F(\eta, T) = F_0(T) + a(T)\eta^2 + b(T)\eta^4 + c(T)\eta^6 + \cdots$$</p>
      </div>
      
      <p>其中系数的温度依赖性决定了相变行为。</p>

      <h3>对称性约束</h3>
      <p>展开式的形式受对称性约束：</p>
      <ul>
        <li><strong>$\eta \to -\eta$ 对称性</strong>：只包含偶次幂项</li>
        <li><strong>复序参量</strong>：$|\eta|^2, |\eta|^4$ 等项</li>
        <li><strong>矢量序参量</strong>：$\vec{\eta} \cdot \vec{\eta}$ 等不变量</li>
      </ul>

      <h3>平衡条件</h3>
      <p>平衡态由自由能最小化确定：</p>
      
      <div class="formula">
        <p>$$\frac{\partial F}{\partial \eta} = 0, \quad \frac{\partial^2 F}{\partial \eta^2} > 0$$</p>
      </div>
    </section>

    <!-- 二阶相变 -->
    <section class="second-order">
      <h2>二阶相变</h2>
      
      <h3>临界行为</h3>
      <p>考虑最简单的情况：$F = a(T)\eta^2 + b\eta^4$，其中 $b > 0$。</p>
      
      <div class="formula">
        <p><strong>温度依赖性：</strong> $a(T) = a_0(T - T_c)$</p>
      </div>
      
      <p>平衡序参量为：</p>
      
      <div class="formula">
        <p>$$\eta_0 = \begin{cases}
        0 & T > T_c \\
        \pm\sqrt{\frac{a_0(T_c - T)}{2b}} & T < T_c
        \end{cases}$$</p>
      </div>

      <h3>临界指数</h3>
      <p>在相变点附近，物理量表现出幂律行为：</p>
      
      <div class="formula">
        <p><strong>序参量：</strong> $\eta \propto |T - T_c|^\beta$，$\beta = 1/2$</p>
        <p><strong>比热：</strong> $C \propto |T - T_c|^{-\alpha}$，$\alpha = 0$</p>
        <p><strong>磁化率：</strong> $\chi \propto |T - T_c|^{-\gamma}$，$\gamma = 1$</p>
      </div>

      <h3>标度关系</h3>
      <p>临界指数之间存在标度关系：</p>
      
      <div class="formula">
        <p>$$\alpha + 2\beta + \gamma = 2$$</p>
        <p>$$\gamma = \beta(\delta - 1)$$</p>
      </div>
    </section>

    <!-- 一阶相变 -->
    <section class="first-order">
      <h2>一阶相变</h2>
      
      <h3>三次项的作用</h3>
      <p>当系统缺乏 $\eta \to -\eta$ 对称性时，出现三次项：</p>
      
      <div class="formula">
        <p>$$F = a\eta^2 + b\eta^3 + c\eta^4$$</p>
      </div>
      
      <p>这导致一阶相变，序参量在相变点不连续跳跃。</p>

      <h3>亚稳态与滞后</h3>
      <p>一阶相变中存在：</p>
      <ul>
        <li><strong>亚稳态</strong>：局域自由能最小值</li>
        <li><strong>过热与过冷</strong>：相变的滞后现象</li>
        <li><strong>成核与生长</strong>：新相的形成机制</li>
      </ul>

      <h3>Maxwell构造</h3>
      <p>确定相变点的Maxwell等面积法则：</p>
      
      <div class="formula">
        <p>$$\int_{\eta_1}^{\eta_2} (\mu - \mu_c) d\eta = 0$$</p>
      </div>
    </section>

    <!-- 多分量序参量 -->
    <section class="multicomponent">
      <h2>多分量序参量</h2>
      
      <h3>矢量序参量</h3>
      <p>对于n分量序参量 $\vec{\eta} = (\eta_1, \eta_2, \ldots, \eta_n)$：</p>
      
      <div class="formula">
        <p>$$F = a|\vec{\eta}|^2 + b|\vec{\eta}|^4 + \cdots$$</p>
      </div>
      
      <p>其中 $|\vec{\eta}|^2 = \sum_i \eta_i^2$。</p>

      <h3>O(n)模型</h3>
      <p>具有O(n)旋转对称性的模型：</p>
      <ul>
        <li><strong>n=1</strong>：Ising模型</li>
        <li><strong>n=2</strong>：XY模型</li>
        <li><strong>n=3</strong>：Heisenberg模型</li>
      </ul>

      <h3>Goldstone模式</h3>
      <p>连续对称性破缺导致无能隙的Goldstone玻色子：</p>
      
      <div class="formula">
        <p><strong>色散关系：</strong> $\omega \propto k$ (线性色散)</p>
      </div>
    </section>

    <!-- 外场效应 -->
    <section class="external-field">
      <h2>外场效应</h2>
      
      <h3>外场耦合</h3>
      <p>外场 $h$ 与序参量的耦合：</p>
      
      <div class="formula">
        <p>$$F = a\eta^2 + b\eta^4 - h\eta$$</p>
      </div>
      
      <p>平衡条件：$2a\eta + 4b\eta^3 = h$</p>

      <h3>磁化率</h3>
      <p>线性响应系数：</p>
      
      <div class="formula">
        <p>$$\chi = \frac{\partial \eta}{\partial h}\bigg|_{h=0} = \frac{1}{2a + 12b\eta_0^2}$$</p>
      </div>

      <h3>临界等温线</h3>
      <p>在临界点 $T = T_c$：</p>
      
      <div class="formula">
        <p>$$h \propto \eta^3 \quad \Rightarrow \quad \eta \propto h^{1/3}$$</p>
      </div>
      
      <p>临界指数 $\delta = 3$。</p>
    </section>

    <!-- 涨落效应 -->
    <section class="fluctuations">
      <h2>涨落效应</h2>
      
      <h3>Ginzburg判据</h3>
      <p>Landau理论的适用性由Ginzburg判据确定：</p>
      
      <div class="formula">
        <p><strong>Ginzburg数：</strong> $\text{Gi} = \frac{k_B T_c}{|\eta_0|^2 \xi^d} \ll 1$</p>
        <p><strong>涨落修正：</strong> $\delta F = \frac{1}{2} k_B T \sum_{\vec{q}} \ln[a + c q^2]$</p>
        <p><strong>关联长度：</strong> $\xi = \sqrt{\frac{c}{a}} \propto |T - T_c|^{-1/2}$</p>
      </div>
      
      <p>其中 $\xi$ 是关联长度，$d$ 是空间维度。当Gi $\gg 1$时，涨落效应占主导。</p>

      <h3>高斯涨落理论</h3>
      <p>在Landau理论基础上包含高斯涨落：</p>

      <div class="formula">
        <p><strong>配分函数：</strong> $Z = \int \mathcal{D}\eta \exp\left[-\frac{1}{k_B T} \int d^d r \left(\frac{a}{2}\eta^2 + \frac{c}{2}(\nabla\eta)^2\right)\right]$</p>
        <p><strong>关联函数：</strong> $G(\vec{r}) = \langle \eta(\vec{r}) \eta(0) \rangle = \int \frac{d^d q}{(2\pi)^d} \frac{k_B T}{a + cq^2} e^{i\vec{q} \cdot \vec{r}}$</p>
        <p><strong>Ornstein-Zernike形式：</strong> $G(r) \propto \frac{e^{-r/\xi}}{r^{(d-1)/2}}$</p>
      </div>

      <h4>涨落修正的计算</h4>
      <ul>
        <li><strong>自能修正</strong>：$\Sigma(\vec{q}) = \frac{b}{2} \int \frac{d^d k}{(2\pi)^d} \frac{k_B T}{a + ck^2}$</li>
        <li><strong>顶点修正</strong>：四点函数的重整化</li>
        <li><strong>Ward恒等式</strong>：对称性保证的约束关系</li>
        <li><strong>Callan-Symanzik方程</strong>：重整化群流方程</li>
      </ul>

      <h3>上临界维度</h3>
      <p>Landau理论在高维度下精确：</p>
      
      <div class="formula">
        <p><strong>维度分析：</strong> $[a] = E L^{-d}$, $[b] = E L^{-d}$, $[c] = E L^{2-d}$</p>
        <p><strong>上临界维度：</strong> $d_c = 4$ (对于 $\phi^4$ 理论)</p>
        <p><strong>ε展开：</strong> $\epsilon = 4 - d$，小参数展开</p>
      </div>
      
      <p>不同相变的上临界维度：</p>
      <ul>
        <li><strong>$d > d_c$</strong>：Landau理论正确，平均场指数</li>
        <li><strong>$d < d_c$</strong>：涨落修正重要，非平均场指数</li>
        <li><strong>$d = d_c$</strong>：对数修正，边界情况</li>
        <li><strong>下临界维度</strong>：$d_l$，低于此维度无长程序</li>
      </ul>

      <h4>具体系统的临界维度</h4>
      <ul>
        <li><strong>Ising模型</strong>：$d_c = 4$, $d_l = 1$</li>
        <li><strong>XY模型</strong>：$d_c = 4$, $d_l = 2$</li>
        <li><strong>Heisenberg模型</strong>：$d_c = 4$, $d_l = 2$</li>
        <li><strong>球形模型</strong>：$d_c = 4$, $d_l = 2$</li>
      </ul>

      <h3>重整化群修正</h3>
      <p>Wilson重整化群给出精确的临界指数：</p>
      
      <div class="formula">
        <p><strong>β函数：</strong> $\beta(g) = \mu \frac{\partial g}{\partial \mu} = -\epsilon g + \frac{3g^2}{2} + O(g^3)$</p>
        <p><strong>不动点：</strong> $g^* = \frac{2\epsilon}{3} + O(\epsilon^2)$</p>
        <p><strong>临界指数：</strong> $\nu = \frac{1}{2} + \frac{\epsilon}{12} + O(\epsilon^2)$</p>
      </div>

      <h4>实验测量的临界指数</h4>
      <p>三维系统的精确值：</p>
      <ul>
        <li><strong>三维Ising模型</strong>：
          <ul>
            <li>$\beta = 0.3265(3)$ vs Landau: $1/2$</li>
            <li>$\gamma = 1.2372(5)$ vs Landau: $1$</li>
            <li>$\nu = 0.6301(4)$ vs Landau: $1/2$</li>
            <li>$\alpha = 0.1099(10)$ vs Landau: $0$</li>
          </ul>
        </li>
        <li><strong>三维XY模型</strong>：
          <ul>
            <li>$\beta = 0.3486(1)$</li>
            <li>$\gamma = 1.3177(5)$</li>
            <li>$\nu = 0.6717(1)$</li>
            <li>$\alpha = 0.0146(8)$</li>
          </ul>
        </li>
        <li><strong>三维Heisenberg模型</strong>：
          <ul>
            <li>$\beta = 0.3689(3)$</li>
            <li>$\gamma = 1.3960(9)$</li>
            <li>$\nu = 0.7112(5)$</li>
            <li>$\alpha = -0.1336(15)$</li>
          </ul>
        </li>
      </ul>

      <h3>有限尺寸效应</h3>
      <p>有限系统中的标度行为：</p>

      <div class="formula">
        <p><strong>有限尺寸标度：</strong> $\chi(t, L) = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})$</p>
        <p><strong>临界点偏移：</strong> $T_c(L) - T_c(\infty) \propto L^{-1/\nu}$</p>
        <p><strong>标度函数：</strong> $\tilde{\chi}(x) = \begin{cases} \text{const} & x \ll 1 \\ x^{-\gamma} & x \gg 1 \end{cases}$</p>
      </div>

      <h4>边界条件的影响</h4>
      <ul>
        <li><strong>周期边界条件</strong>：保持平移不变性</li>
        <li><strong>开放边界条件</strong>：表面效应和边界临界现象</li>
        <li><strong>反周期边界条件</strong>：改变基态简并度</li>
        <li><strong>混合边界条件</strong>：不同方向不同边界</li>
      </ul>

      <h3>涨落-耗散定理</h3>
      <p>平衡态涨落与响应函数的关系：</p>

      <div class="formula">
        <p><strong>涨落-耗散关系：</strong> $\chi(\omega) = \frac{1}{k_B T} \int_0^\infty dt e^{i\omega t} \langle [\eta(t), \eta(0)] \rangle$</p>
        <p><strong>Kubo公式：</strong> $\chi = \frac{1}{k_B T} \int_0^\infty dt \langle \delta\eta(t) \delta\eta(0) \rangle$</p>
        <p><strong>谱密度：</strong> $S(\omega) = \int_{-\infty}^\infty dt e^{i\omega t} \langle \eta(t) \eta(0) \rangle$</p>
      </div>

      <h4>动力学临界现象</h4>
      <ul>
        <li><strong>临界慢化</strong>：$\tau \propto \xi^z \propto |T - T_c|^{-z\nu}$</li>
        <li><strong>动力学标度</strong>：时间和空间的耦合标度</li>
        <li><strong>模式耦合</strong>：不同涨落模式间的相互作用</li>
        <li><strong>记忆效应</strong>：非马尔可夫动力学</li>
      </ul>

      <h3>非线性涨落效应</h3>
      <p>强涨落区域的非线性现象：</p>

      <div class="formula">
        <p><strong>Hartree-Fock近似：</strong> $\langle \eta^4 \rangle \approx 3\langle \eta^2 \rangle^2$</p>
        <p><strong>自洽场方程：</strong> $a_{\text{eff}} = a + 3b\langle \eta^2 \rangle$</p>
        <p><strong>Brazovskii理论：</strong>竞争相互作用下的调制相</p>
      </div>

      <h4>涨落诱导的相变</h4>
      <ul>
        <li><strong>Coleman-Weinberg机制</strong>：量子涨落诱导的对称性破缺</li>
        <li><strong>涨落诱导一阶相变</strong>：原本二阶相变变为一阶</li>
        <li><strong>涨落选择</strong>：简并基态中的涨落选择机制</li>
        <li><strong>无序诱导相变</strong>：淬火无序的影响</li>
      </ul>
    </section>

    <!-- 应用实例 -->
    <section class="applications">
      <h2>应用实例</h2>
      
      <h3>铁磁相变</h3>
      <p>磁化强度作为序参量的经典例子：</p>
      
      <div class="formula">
        <p><strong>Landau自由能：</strong></p>
        <p>$$F = a(T)M^2 + bM^4 + cM^6 - HM$$</p>
        <p><strong>温度依赖性：</strong> $a(T) = a_0(T - T_c)$</p>
      </div>
      
      <h4>临界行为分析</h4>
      <ul>
        <li><strong>居里温度</strong>：$T_c$，磁化率 $\chi = \frac{1}{2a(T)}$ 发散</li>
        <li><strong>自发磁化</strong>：$M_s = \sqrt{\frac{a_0(T_c - T)}{2b}}$ for $T < T_c$</li>
        <li><strong>临界指数</strong>：$\beta = 1/2$, $\gamma = 1$, $\delta = 3$</li>
        <li><strong>磁滞回线</strong>：包含六次项时出现一阶相变特征</li>
      </ul>

      <h4>实验材料系统</h4>
      <ul>
        <li><strong>铁 (Fe)</strong>：$T_c = 1043$ K，体心立方结构</li>
        <li><strong>镍 (Ni)</strong>：$T_c = 627$ K，面心立方结构</li>
        <li><strong>钴 (Co)</strong>：$T_c = 1388$ K，六方密堆积结构</li>
        <li><strong>钆 (Gd)</strong>：$T_c = 293$ K，稀土金属的典型代表</li>
      </ul>

      <h3>液气相变</h3>
      <p>密度差作为序参量的流体相变：</p>
      
      <div class="formula">
        <p><strong>序参量定义：</strong> $\eta = \rho_l - \rho_g$</p>
        <p><strong>自由能密度：</strong> $f = a(T)\eta^2 + b\eta^4 + c(\nabla\eta)^2$</p>
        <p><strong>状态方程：</strong> $P = P_0 - a\eta^2 - b\eta^4$</p>
      </div>
      
      <h4>临界现象</h4>
      <ul>
        <li><strong>临界点</strong>：$(T_c, P_c, \rho_c)$，液气共存线的终点</li>
        <li><strong>临界乳光</strong>：密度涨落导致的强烈光散射</li>
        <li><strong>普适性</strong>：与三维Ising模型相同的临界指数</li>
        <li><strong>标度律</strong>：$\rho_l - \rho_g \propto |T - T_c|^{\beta}$，$\beta \approx 0.326$</li>
      </ul>

      <h4>实际流体系统</h4>
      <ul>
        <li><strong>水</strong>：$T_c = 647$ K, $P_c = 221$ bar</li>
        <li><strong>二氧化碳</strong>：$T_c = 304$ K, $P_c = 74$ bar</li>
        <li><strong>氦-4</strong>：$T_c = 5.2$ K, $P_c = 2.3$ bar</li>
        <li><strong>氙</strong>：$T_c = 290$ K, $P_c = 58$ bar</li>
      </ul>

      <h3>结构相变</h3>
      <p>晶格畸变和对称性破缺的多样化表现：</p>

      <h4>铁电相变</h4>
      <div class="formula">
        <p><strong>序参量：</strong>电偶极矩 $\vec{P}$</p>
        <p><strong>自由能：</strong> $F = \frac{1}{2}\alpha P^2 + \frac{1}{4}\beta P^4 + \frac{1}{6}\gamma P^6 - \vec{E} \cdot \vec{P}$</p>
        <p><strong>介电常数：</strong> $\epsilon = \epsilon_0 + \frac{C}{T - T_c}$ (居里-外斯定律)</p>
      </div>
      
      <p>典型材料：</p>
      <ul>
        <li><strong>BaTiO₃</strong>：$T_c = 393$ K，钙钛矿结构</li>
        <li><strong>PbTiO₃</strong>：$T_c = 763$ K，高居里温度</li>
        <li><strong>KH₂PO₄</strong>：$T_c = 123$ K，氢键铁电体</li>
        <li><strong>LiNbO₃</strong>：$T_c = 1483$ K，光学应用重要</li>
      </ul>

      <h4>马氏体相变</h4>
      <div class="formula">
        <p><strong>应变张量：</strong> $\eta_{ij} = \frac{1}{2}(u_{i,j} + u_{j,i})$</p>
        <p><strong>弹性能：</strong> $F = \frac{1}{2}C_{ijkl}\eta_{ij}\eta_{kl} + \frac{1}{4}D_{ijklmn}\eta_{ij}\eta_{kl}\eta_{mn}$</p>
        <p><strong>相变温度：</strong> $M_s$ (马氏体开始), $M_f$ (马氏体结束)</p>
      </div>

      <p>重要合金系统：</p>
      <ul>
        <li><strong>Fe-Ni合金</strong>：$\gamma \to \alpha$ 相变，钢铁工业基础</li>
        <li><strong>Ti-Ni合金</strong>：形状记忆效应，生物医学应用</li>
        <li><strong>Cu-Zn-Al合金</strong>：超弹性，工程应用</li>
        <li><strong>Fe-Mn-Si合金</strong>：阻尼材料</li>
      </ul>

      <h4>电荷密度波相变</h4>
      <div class="formula">
        <p><strong>序参量：</strong> $\Delta(\vec{r}) = \Delta_0 e^{i\vec{Q} \cdot \vec{r}}$</p>
        <p><strong>自由能：</strong> $F = \alpha|\Delta|^2 + \beta|\Delta|^4 + \gamma|(\nabla - i\vec{Q})\Delta|^2$</p>
        <p><strong>能隙：</strong> $E_g = 2|\Delta_0|$</p>
      </div>

      <p>典型材料：</p>
      <ul>
        <li><strong>2H-TaSe₂</strong>：$T_{CDW} = 122$ K，层状结构</li>
        <li><strong>1T-TiSe₂</strong>：$T_{CDW} = 200$ K，激子绝缘体候选</li>
        <li><strong>K₀.₃MoO₃</strong>：准一维导体</li>
        <li><strong>(TaSe₄)₂I</strong>：一维链状结构</li>
      </ul>

      <h3>超导相变</h3>
      <p>复序参量的Ginzburg-Landau理论：</p>
      
      <div class="formula">
        <p><strong>GL自由能密度：</strong></p>
        <p>$$f = f_n + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}|(-i\hbar\nabla - e^*\vec{A})\psi|^2 + \frac{|\vec{B}|^2}{2\mu_0}$$</p>
        <p><strong>相干长度：</strong> $\xi = \sqrt{\frac{\hbar^2}{2m^*|\alpha|}}$</p>
        <p><strong>穿透深度：</strong> $\lambda = \sqrt{\frac{m^*}{\mu_0 e^{*2}|\psi|^2}}$</p>
      </div>

      <h4>GL参数和分类</h4>
      <div class="formula">
        <p><strong>GL参数：</strong> $\kappa = \frac{\lambda}{\xi}$</p>
        <p><strong>第一类超导体：</strong> $\kappa < \frac{1}{\sqrt{2}}$ (Meissner态)</p>
        <p><strong>第二类超导体：</strong> $\kappa > \frac{1}{\sqrt{2}}$ (混合态)</p>
      </div>

      <h4>超导材料分类</h4>
      <ul>
        <li><strong>常规超导体</strong>：
          <ul>
            <li>铝 (Al)：$T_c = 1.2$ K, $\kappa = 0.02$</li>
            <li>铌 (Nb)：$T_c = 9.3$ K, $\kappa = 0.7$</li>
            <li>铅 (Pb)：$T_c = 7.2$ K, $\kappa = 0.37$</li>
          </ul>
        </li>
        <li><strong>高温超导体</strong>：
          <ul>
            <li>YBa₂Cu₃O₇：$T_c = 93$ K, d波配对</li>
            <li>Bi₂Sr₂CaCu₂O₈：$T_c = 85$ K, 层状结构</li>
            <li>HgBa₂Ca₂Cu₃O₈：$T_c = 134$ K, 最高$T_c$铜氧化物</li>
          </ul>
        </li>
        <li><strong>铁基超导体</strong>：
          <ul>
            <li>LaFeAsO₁₋ₓFₓ：$T_c = 26$ K, 1111型</li>
            <li>Ba₁₋ₓKₓFe₂As₂：$T_c = 38$ K, 122型</li>
            <li>FeSe：$T_c = 8$ K, 11型最简结构</li>
          </ul>
        </li>
      </ul>

      <h3>液晶相变</h3>
      <p>分子取向有序的软物质相变：</p>

      <div class="formula">
        <p><strong>向列相序参量：</strong> $Q_{ij} = \frac{1}{2}\langle 3n_i n_j - \delta_{ij} \rangle$</p>
        <p><strong>Maier-Saupe理论：</strong> $F = \frac{1}{2}A(T)S^2 - \frac{1}{3}BS^3 + \frac{1}{4}CS^4$</p>
        <p><strong>标量序参量：</strong> $S = \frac{1}{2}\langle 3\cos^2\theta - 1 \rangle$</p>
      </div>

      <h4>液晶相序列</h4>
      <ul>
        <li><strong>各向同性相 (I)</strong>：$S = 0$，完全无序</li>
        <li><strong>向列相 (N)</strong>：$S \neq 0$，取向有序，位置无序</li>
        <li><strong>近晶相 (Sm)</strong>：层状位置有序
          <ul>
            <li>SmA：分子垂直于层</li>
            <li>SmC：分子倾斜于层</li>
          </ul>
        </li>
        <li><strong>柱状相 (Col)</strong>：二维六角密堆积</li>
      </ul>

      <h4>典型液晶材料</h4>
      <ul>
        <li><strong>5CB</strong>：$T_{NI} = 35°C$，经典向列液晶</li>
        <li><strong>8CB</strong>：$T_{SmA-N} = 33.5°C$, $T_{NI} = 40.5°C$</li>
        <li><strong>MBBA</strong>：第一个室温液晶</li>
        <li><strong>E7</strong>：商用液晶混合物</li>
      </ul>
    </section>

    <!-- 拓扑相变 -->
    <section class="topological">
      <h2>拓扑相变</h2>
      
      <h3>Kosterlitz-Thouless相变</h3>
      <p>二维XY模型中的拓扑相变：</p>
      <ul>
        <li><strong>涡旋-反涡旋对</strong>：拓扑激发</li>
        <li><strong>无序参量</strong>：不能用局域序参量描述</li>
        <li><strong>指数关联</strong>：关联函数的指数衰减</li>
      </ul>

      <h3>拓扑不变量</h3>
      <p>拓扑相变的特征：</p>
      
      <div class="formula">
        <p><strong>拓扑荷：</strong> $Q = \frac{1}{2\pi} \oint d\vec{l} \cdot \nabla \theta$$</p>
      </div>
      
      <p>其中 $\theta$ 是相位角。</p>

      <h3>现代发展</h3>
      <ul>
        <li><strong>量子霍尔效应</strong>：Chern数的量子化</li>
        <li><strong>拓扑绝缘体</strong>：Z₂拓扑不变量</li>
        <li><strong>拓扑超导体</strong>：Majorana费米子</li>
      </ul>
    </section>

    <!-- 量子相变 -->
    <section class="quantum-transitions">
      <h2>量子相变</h2>
      
      <h3>零温相变</h3>
      <p>量子涨落驱动的相变：</p>
      <ul>
        <li><strong>量子临界点</strong>：$T = 0$的相变点</li>
        <li><strong>量子涨落</strong>：海森堡不确定性原理</li>
        <li><strong>动力学标度</strong>：时间和空间的耦合</li>
      </ul>

      <h3>有效理论</h3>
      <p>量子相变的Landau-Ginzburg-Wilson理论：</p>
      
      <div class="formula">
        <p>$$S = \int d^d x d\tau \left[\frac{1}{2c}(\partial_\tau \phi)^2 + \frac{1}{2}(\nabla \phi)^2 + V(\phi)\right]$$</p>
      </div>
      
      <p>其中 $\tau$ 是虚时间，$c$ 是"光速"。</p>

      <h3>量子临界现象</h3>
      <ul>
        <li><strong>动力学临界指数</strong>：$z$，时空各向异性</li>
        <li><strong>有限温度标度</strong>：$T \sim L^{-z}$</li>
        <li><strong>非费米液体行为</strong>：临界点附近的异常性质</li>
      </ul>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>现代发展</h2>
      
      <h3>机器学习方法</h3>
      <p>人工智能在相变研究中的革命性应用：</p>

      <h4>相变识别与分类</h4>
      <div class="formula">
        <p><strong>神经网络分类器：</strong> $P(\text{phase}|\{\sigma_i\}) = \text{softmax}(W \cdot f(\{\sigma_i\}) + b)$</p>
        <p><strong>卷积神经网络：</strong>用于识别空间模式和关联</p>
        <p><strong>循环神经网络：</strong>用于时间序列中的动力学相变</p>
      </div>

      <p>成功应用实例：</p>
      <ul>
        <li><strong>Ising模型相变</strong>：CNN自动识别铁磁-顺磁相变</li>
        <li><strong>量子多体系统</strong>：检测拓扑相变和多体局域化</li>
        <li><strong>玻璃转变</strong>：识别动力学异质性和慢动力学</li>
        <li><strong>液晶相变</strong>：分类不同液晶相的分子取向</li>
      </ul>

      <h4>序参量发现</h4>
      <div class="formula">
        <p><strong>主成分分析：</strong> $\vec{v}_1 = \arg\max_{\|\vec{v}\|=1} \vec{v}^T C \vec{v}$</p>
        <p><strong>自编码器：</strong> $\phi: \mathbb{R}^n \to \mathbb{R}^d$, $\psi: \mathbb{R}^d \to \mathbb{R}^n$</p>
        <p><strong>变分自编码器：</strong>学习潜在空间中的序参量表示</p>
      </div>

      <p>重要发现：</p>
      <ul>
        <li><strong>隐藏序参量</strong>：发现传统理论未预测的序参量</li>
        <li><strong>多尺度序参量</strong>：不同长度尺度上的有序性</li>
        <li><strong>非局域序参量</strong>：拓扑和几何性质的量化</li>
        <li><strong>动力学序参量</strong>：时间演化中的隐藏模式</li>
      </ul>

      <h4>临界指数计算</h4>
      <div class="formula">
        <p><strong>有限尺寸标度：</strong> $\chi(L, t) = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})$</p>
        <p><strong>神经网络回归：</strong>直接从数据学习标度关系</p>
        <p><strong>强化学习：</strong>优化蒙特卡罗采样策略</p>
      </div>

      <h3>非平衡相变</h3>
      <p>远离平衡态的新奇相变现象：</p>

      <h4>驱动系统中的相变</h4>
      <div class="formula">
        <p><strong>Floquet哈密顿量：</strong> $H_F = \frac{1}{T} \int_0^T H(t) dt + \text{corrections}$</p>
        <p><strong>有效温度：</strong> $T_{\text{eff}} = \frac{\langle E \rangle}{\langle S \rangle}$</p>
        <p><strong>动力学相图：</strong>驱动频率-强度空间中的相边界</p>
      </div>

      <p>典型系统：</p>
      <ul>
        <li><strong>周期驱动Ising模型</strong>：时间晶体和预热化</li>
        <li><strong>驱动量子气体</strong>：Floquet工程和人工规范场</li>
        <li><strong>光驱动材料</strong>：瞬态超导和铁电性</li>
        <li><strong>剪切流体</strong>：剪切诱导的结构相变</li>
      </ul>

      <h4>开放系统相变</h4>
      <div class="formula">
        <p><strong>Lindblad主方程：</strong> $\frac{d\rho}{dt} = -i[H, \rho] + \sum_k \left(L_k \rho L_k^\dagger - \frac{1}{2}\{L_k^\dagger L_k, \rho\}\right)$</p>
        <p><strong>稳态条件：</strong> $\frac{d\rho_{\text{ss}}}{dt} = 0$</p>
        <p><strong>耗散相变：</strong>Liouvillian谱隙的闭合</p>
      </div>

      <p>重要现象：</p>
      <ul>
        <li><strong>耗散时间晶体</strong>：开放系统中的时间周期性</li>
        <li><strong>量子同步</strong>：多体系统的集体振荡</li>
        <li><strong>暗态相变</strong>：耗散保护的量子相</li>
        <li><strong>测量诱导相变</strong>：量子测量的反作用</li>
      </ul>

      <h4>动力学相变</h4>
      <div class="formula">
        <p><strong>Loschmidt回声：</strong> $L(t) = |\langle \psi_0 | e^{-iH_2 t} e^{iH_1 t} | \psi_0 \rangle|^2$</p>
        <p><strong>保真度：</strong> $F(t) = |\langle \psi(t) | \psi_{\text{ref}}(t) \rangle|^2$</p>
        <p><strong>纠缠熵增长：</strong> $S(t) = -\text{Tr}[\rho_A(t) \log \rho_A(t)]$</p>
      </div>

      <p>关键概念：</p>
      <ul>
        <li><strong>多体局域化</strong>：无热化的量子多体系统</li>
        <li><strong>时间晶体</strong>：时间平移对称性的自发破缺</li>
        <li><strong>量子疤痕</strong>：混沌系统中的特殊本征态</li>
        <li><strong>预热化</strong>：趋向热平衡前的中间态</li>
      </ul>

      <h3>高阶相变与多临界现象</h3>
      <p>复杂相图中的特殊点和线：</p>

      <h4>三临界点</h4>
      <div class="formula">
        <p><strong>三临界自由能：</strong> $F = at^2 + bt^4 + ct^6 + du^2 + eu^4 + ftu^2$</p>
        <p><strong>三临界指数：</strong> $\beta = 1/4$, $\gamma = 1$, $\delta = 5$</p>
        <p><strong>标度维度：</strong> $d_c = 3$ (三临界点的上临界维度)</p>
      </div>

      <p>实验实现：</p>
      <ul>
        <li><strong>³He-⁴He混合物</strong>：液-液-气三临界点</li>
        <li><strong>反铁磁体</strong>：磁场中的三临界行为</li>
        <li><strong>液晶</strong>：向列-近晶-各向同性三临界点</li>
        <li><strong>聚合物溶液</strong>：θ点附近的三临界现象</li>
      </ul>

      <h4>多临界点</h4>
      <div class="formula">
        <p><strong>双临界点：</strong>两个序参量同时临界</p>
        <p><strong>四临界点：</strong>四个相的交汇点</p>
        <p><strong>Lifshitz点：</strong> $F = at^2 + b(\nabla^2 \phi)^2 + c(\nabla^4 \phi)$</p>
      </div>

      <p>复杂相图：</p>
      <ul>
        <li><strong>铁电-反铁电</strong>：PbZrO₃-PbTiO₃系统</li>
        <li><strong>磁性-结构</strong>：稀土金属中的耦合相变</li>
        <li><strong>超导-磁性</strong>：重费米子系统</li>
        <li><strong>电荷-轨道</strong>：过渡金属氧化物</li>
      </ul>

      <h4>Lifshitz相变</h4>
      <div class="formula">
        <p><strong>费米面拓扑变化：</strong>颈部形成或消失</p>
        <p><strong>van Hove奇点：</strong> $\rho(E) \propto |E - E_{vH}|^{-1/2}$</p>
        <p><strong>电子态密度：</strong>在相变点处的对数发散</p>
      </div>

      <p>材料实例：</p>
      <ul>
        <li><strong>Sr₂RuO₄</strong>：范霍夫奇点和超导</li>
        <li><strong>铜氧化物</strong>：赝能隙和费米弧</li>
        <li><strong>铁基超导体</strong>：多带效应和轨道选择</li>
        <li><strong>拓扑半金属</strong>：Weyl点和Dirac点</li>
      </ul>

      <h3>拓扑相变的现代理论</h3>
      <p>拓扑物态的分类和相变机制：</p>

      <h4>拓扑不变量与分类</h4>
      <div class="formula">
        <p><strong>Chern数：</strong> $C = \frac{1}{2\pi} \int_{BZ} \Omega(\vec{k}) d^2k$</p>
        <p><strong>Z₂不变量：</strong> $\nu = \frac{1}{2\pi} \int_{BZ} \vec{A} \cdot d\vec{k} \mod 2$</p>
        <p><strong>缠绕数：</strong> $W = \frac{1}{2\pi} \oint \frac{d\theta}{d\phi} d\phi$</p>
      </div>

      <p>拓扑相分类：</p>
      <ul>
        <li><strong>整数量子霍尔态</strong>：Chern绝缘体，$C \in \mathbb{Z}$</li>
        <li><strong>量子自旋霍尔态</strong>：Z₂拓扑绝缘体</li>
        <li><strong>拓扑超导体</strong>：Majorana费米子</li>
        <li><strong>Weyl半金属</strong>：手性异常和拓扑荷</li>
      </ul>

      <h4>拓扑相变机制</h4>
      <div class="formula">
        <p><strong>能隙闭合：</strong> $E_g(\vec{k}) = 0$ 在某些 $\vec{k}$ 点</p>
        <p><strong>Berry曲率奇点：</strong> $\Omega(\vec{k}) = \nabla_{\vec{k}} \times \vec{A}(\vec{k})$</p>
        <p><strong>拓扑荷转移：</strong>不同区域间的拓扑荷重新分布</p>
      </div>

      <p>相变类型：</p>
      <ul>
        <li><strong>连续拓扑相变</strong>：能隙线性闭合，$E_g \propto |t|$</li>
        <li><strong>不连续拓扑相变</strong>：一阶相变伴随拓扑变化</li>
        <li><strong>多临界拓扑相变</strong>：多个拓扑不变量同时变化</li>
        <li><strong>拓扑-对称性破缺</strong>：拓扑序与对称性破缺的竞争</li>
      </ul>

      <h3>量子信息与相变</h3>
      <p>量子信息理论在相变研究中的应用：</p>

      <h4>纠缠与相变</h4>
      <div class="formula">
        <p><strong>纠缠熵：</strong> $S = -\text{Tr}[\rho_A \log \rho_A]$</p>
        <p><strong>面积定律：</strong> $S \propto L^{d-1}$ (基态)</p>
        <p><strong>对数修正：</strong> $S = \frac{c}{3} \log L$ (1D临界系统)</p>
      </div>

      <p>纠缠特征：</p>
      <ul>
        <li><strong>纠缠谱</strong>：约化密度矩阵的本征值</li>
        <li><strong>纠缠负性</strong>：混合态纠缠的度量</li>
        <li><strong>量子互信息</strong>：$I(A:B) = S_A + S_B - S_{AB}$</li>
        <li><strong>拓扑纠缠熵</strong>：拓扑序的特征量</li>
      </ul>

      <h4>量子保真度</h4>
      <div class="formula">
        <p><strong>基态保真度：</strong> $F = |\langle \psi_0(\lambda) | \psi_0(\lambda + \delta\lambda) \rangle|$</p>
        <p><strong>保真度敏感性：</strong> $\chi_F = -\frac{d^2 \log F}{d\lambda^2}$</p>
        <p><strong>几何相位：</strong> $\gamma = i \oint \langle \psi | d\psi \rangle$</p>
      </div>

      <p>应用领域：</p>
      <ul>
        <li><strong>量子相变检测</strong>：保真度在临界点的奇异性</li>
        <li><strong>临界指数测量</strong>：标度行为的精确确定</li>
        <li><strong>拓扑相变</strong>：Berry相位的量子化跳跃</li>
        <li><strong>多体局域化</strong>：纠缠增长的抑制</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>Landau理论作为描述相变的基础理论，为理解各种有序现象提供了统一的框架。从对称性破缺的基本概念到序参量的引入，从自由能的展开到临界行为的预言，Landau理论展现了理论物理的优雅和力量。</p>
      
      <p>尽管在低维强涨落系统中需要重整化群的修正，Landau理论仍然是相变理论的重要基石。它不仅成功解释了经典相变现象，也为量子相变、拓扑相变等现代研究领域提供了重要启发。</p>
      
      <p>随着实验技术的进步和理论方法的发展，Landau理论继续在新材料的发现、新现象的理解和新技术的开发中发挥重要作用。从传统的铁磁体到现代的拓扑材料，从平衡态相变到非平衡动力学，Landau理论的思想和方法将继续指导我们探索物质世界的奥秘。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LandauTheory',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.landau-theory-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #f39c12;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #f39c12;
  padding-left: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.formula {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
}

.formula p {
  margin: 5px 0;
}

section {
  margin-bottom: 40px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul, ol {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

strong {
  color: #2c3e50;
}

.overview {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.basic-concepts {
  border-left: 4px solid #3498db;
}

.landau-free-energy {
  border-left: 4px solid #9b59b6;
}

.second-order {
  border-left: 4px solid #27ae60;
}

.first-order {
  border-left: 4px solid #e74c3c;
}

.multicomponent {
  border-left: 4px solid #1abc9c;
}

.external-field {
  border-left: 4px solid #34495e;
}

.fluctuations {
  border-left: 4px solid #8e44ad;
}

.applications {
  border-left: 4px solid #16a085;
}

.topological {
  border-left: 4px solid #2980b9;
}

.quantum-transitions {
  border-left: 4px solid #c0392b;
}

.modern-developments {
  border-left: 4px solid #e91e63;
}

.conclusion {
  background: linear-gradient(135deg, #f39c12 0%, #e67e22 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .landau-theory-page {
    padding: 10px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  section {
    padding: 15px;
  }
}
</style>