<template>
  <div class="chapter-content">
    <h1>1.4.40 平均场理论 (Mean Field Theory)</h1>
    
    <h2>引言</h2>
    <p>
      平均场理论是凝聚态物理中最重要的近似方法之一，它通过将复杂的多体相互作用问题简化为单体在有效场中的运动来处理强关联系统。
      这种方法在磁性、超导、相变等众多领域都有广泛应用。平均场理论的成功在于它能够以相对简单的数学框架捕捉到复杂多体系统的基本物理特征，
      特别是相变现象和集体激发模式。
    </p>

    <h2>历史发展</h2>
    <p>
      平均场理论的发展可以追溯到19世纪末的van der Waals气体理论和Weiss分子场理论。20世纪初，Weiss提出了铁磁体的分子场理论，
      这是平均场方法的早期成功应用。随后，Landau在1930年代发展了相变的唯象理论，为平均场方法奠定了坚实的理论基础。
      1950年代，BCS理论的成功进一步证明了平均场方法在处理量子多体问题中的威力。
    </p>

    <h2>基本思想与物理图像</h2>
    <p>
      平均场理论的核心思想是将每个粒子感受到的相互作用用一个平均的有效场来代替。
      对于一个具有相互作用的多体系统，我们假设每个粒子都处在由其他所有粒子产生的平均场中。
      这种近似的物理图像是：系统中的每个粒子不再直接与其他粒子相互作用，而是与一个由所有其他粒子的平均效应产生的有效场相互作用。
    </p>

    <h3>基本假设与近似</h3>
    <ul>
      <li><strong>平均场近似</strong>：将涨落算符替换为其平均值</li>
      <li><strong>单体近似</strong>：将多体问题分解为单体问题</li>
      <li><strong>自洽性条件</strong>：平均场由系统自身的状态自洽地确定</li>
      <li><strong>热力学极限</strong>：在无穷大系统中，涨落相对于平均值变得可忽略</li>
      <li><strong>均匀性假设</strong>：通常假设系统在空间上是均匀的（可推广到非均匀情况）</li>
    </ul>

    <h3>适用条件</h3>
    <p>平均场理论在以下条件下最为有效：</p>
    <ul>
      <li>高维系统（d > 4时精确）</li>
      <li>长程相互作用系统</li>
      <li>高配位数系统</li>
      <li>远离临界点的区域</li>
      <li>平均场临界维数以上的系统</li>
    </ul>

    <h2>数学框架</h2>
    
    <h3>一般形式与推导</h3>
    <p>考虑一个具有相互作用的哈密顿量：</p>
    <KatexElement expression="H = \sum_i h_i + \sum_{i<j} V_{ij}" :inline="false" />
    
    <p>其中 <KatexElement expression="h_i" :inline="true" /> 是单体项，<KatexElement expression="V_{ij}" :inline="true" /> 是两体相互作用项。
    在平均场近似下，我们将相互作用项线性化：</p>
    <KatexElement expression="V_{ij} = V_{ij}[\hat{O}_i, \hat{O}_j] \rightarrow \langle \hat{O}_i \rangle V_{ij}[\hat{O}_j] + V_{ij}[\hat{O}_i] \langle \hat{O}_j \rangle - \langle \hat{O}_i \rangle V_{ij} \langle \hat{O}_j \rangle" :inline="false" />
    
    <p>这种分解被称为<strong>Hartree-Fock分解</strong>或<strong>平均场分解</strong>。忽略涨落项后：</p>
    <KatexElement expression="V_{ij} \approx \langle \hat{O}_i \rangle V_{ij}[\hat{O}_j] + V_{ij}[\hat{O}_i] \langle \hat{O}_j \rangle - \langle \hat{O}_i \rangle V_{ij} \langle \hat{O}_j \rangle" :inline="false" />

    <h3>变分原理推导</h3>
    <p>平均场理论也可以从变分原理推导。考虑试探波函数为单体波函数的直积：</p>
    <KatexElement expression="|\psi_{\text{trial}} \rangle = \prod_i |\phi_i \rangle" :inline="false" />
    
    <p>变分能量为：</p>
    <KatexElement expression="E_{\text{var}} = \frac{\langle \psi_{\text{trial}} | H | \psi_{\text{trial}} \rangle}{\langle \psi_{\text{trial}} | \psi_{\text{trial}} \rangle}" :inline="false" />
    
    <p>通过最小化变分能量得到平均场方程。</p>

    <h3>自洽场方程的一般形式</h3>
    <p>平均场理论的核心是自洽场方程。设序参量为 <KatexElement expression="\phi" :inline="true" />，则：</p>
    <KatexElement expression="\phi = \langle \hat{\phi} \rangle = \text{Tr}[\hat{\phi} \rho_{\text{MF}}]" :inline="false" />
    
    <p>其中密度矩阵 <KatexElement expression="\rho_{\text{MF}}" :inline="true" /> 由有效哈密顿量决定：</p>
    <KatexElement expression="H_{\text{eff}} = H_0 + \lambda \phi \hat{\phi}" :inline="false" />
    <KatexElement expression="\rho_{\text{MF}} = \frac{e^{-\beta H_{\text{eff}}}}{Z_{\text{MF}}}" :inline="false" />
    
    <p>配分函数为：</p>
    <KatexElement expression="Z_{\text{MF}} = \text{Tr}[e^{-\beta H_{\text{eff}}}]" :inline="false" />

    <h3>自由能泛函</h3>
    <p>平均场自由能可以写成序参量的泛函：</p>
    <KatexElement expression="F_{\text{MF}}[\phi] = -k_B T \ln Z_{\text{MF}}[\phi] + \lambda \phi^2" :inline="false" />
    
    <p>平衡态的序参量通过最小化自由能确定：</p>
    <KatexElement expression="\frac{\delta F_{\text{MF}}}{\delta \phi} = 0" :inline="false" />

    <h2>经典应用实例</h2>

    <h3>1. Ising模型的平均场理论</h3>
    <p>考虑经典Ising模型：</p>
    <KatexElement expression="H = -J \sum_{\langle i,j \rangle} S_i S_j - h \sum_i S_i" :inline="false" />
    
    <p>其中 <KatexElement expression="S_i = \pm 1" :inline="true" /> 是Ising自旋，<KatexElement expression="J > 0" :inline="true" /> 是铁磁耦合常数。
    在平均场近似下，我们假设每个自旋都感受到一个由其邻居自旋平均值产生的有效场：</p>
    <KatexElement expression="S_j \rightarrow \langle S \rangle = m" :inline="false" />
    
    <p>有效哈密顿量变为：</p>
    <KatexElement expression="H_{\text{eff}} = -\sum_i S_i (Jzm + h)" :inline="false" />
    
    <p>其中 <KatexElement expression="z" :inline="true" /> 是配位数。每个自旋的配分函数为：</p>
    <KatexElement expression="Z_i = 2\cosh(\beta(Jzm + h))" :inline="false" />
    
    <p>磁化强度的自洽方程为：</p>
    <KatexElement expression="m = \tanh\left(\frac{Jzm + h}{k_B T}\right)" :inline="false" />
    
    <p><strong>临界温度</strong>：在 <KatexElement expression="h = 0" :inline="true" /> 时，临界温度由下式确定：</p>
    <KatexElement expression="k_B T_c = Jz" :inline="false" />
    
    <p><strong>临界指数</strong>：在临界点附近，磁化强度的行为为：</p>
    <KatexElement expression="m \propto (T_c - T)^{1/2}, \quad T < T_c" :inline="false" />

    <h3>2. BCS超导理论</h3>
    <p>BCS理论是平均场理论在超导中的杰出应用。考虑吸引相互作用的费米子系统：</p>
    <KatexElement expression="H = \sum_{k,\sigma} \xi_k c_{k\sigma}^\dagger c_{k\sigma} + V \sum_{k,k'} c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger c_{-k'\downarrow} c_{k'\uparrow}" :inline="false" />
    
    <p>其中 <KatexElement expression="\xi_k = \epsilon_k - \mu" :inline="true" /> 是相对于化学势的单粒子能量。
    引入Cooper对的平均场：</p>
    <KatexElement expression="\Delta = -V \sum_k \langle c_{-k\downarrow} c_{k\uparrow} \rangle" :inline="false" />
    
    <p>BCS哈密顿量在平均场近似下变为：</p>
    <KatexElement expression="H_{\text{BCS}} = \sum_k \left[ \xi_k (c_{k\uparrow}^\dagger c_{k\uparrow} + c_{k\downarrow}^\dagger c_{k\downarrow}) + \Delta c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger + \Delta^* c_{-k\downarrow} c_{k\uparrow} \right]" :inline="false" />
    
    <p>通过Bogoliubov变换对角化，得到准粒子能谱：</p>
    <KatexElement expression="E_k = \sqrt{\xi_k^2 + |\Delta|^2}" :inline="false" />
    
    <p>能隙的自洽方程为：</p>
    <KatexElement expression="\Delta = -V \sum_k \frac{\Delta}{2E_k} \tanh\left(\frac{E_k}{2k_B T}\right)" :inline="false" />
    
    <p><strong>零温能隙</strong>：在弱耦合极限下：</p>
    <KatexElement expression="\Delta_0 = 2\hbar\omega_D e^{-1/N(0)V}" :inline="false" />
    
    <p>其中 <KatexElement expression="N(0)" :inline="true" /> 是费米面态密度，<KatexElement expression="\omega_D" :inline="true" /> 是德拜频率。</p>

    <h3>3. Hubbard模型的平均场处理</h3>
    <p>Hubbard模型描述了窄能带中电子的关联效应：</p>
    <KatexElement expression="H = -t \sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + U \sum_i n_{i\uparrow} n_{i\downarrow}" :inline="false" />
    
    <p>在平均场近似下，相互作用项被分解为：</p>
    <KatexElement expression="n_{i\uparrow} n_{i\downarrow} \rightarrow \langle n_{\uparrow} \rangle n_{i\downarrow} + n_{i\uparrow} \langle n_{\downarrow} \rangle - \langle n_{\uparrow} \rangle \langle n_{\downarrow} \rangle" :inline="false" />
    
    <p>有效哈密顿量变为：</p>
    <KatexElement expression="H_{\text{eff}} = \sum_{k,\sigma} (\epsilon_k + U\langle n_{-\sigma} \rangle) c_{k\sigma}^\dagger c_{k\sigma} - NU\langle n_{\uparrow} \rangle \langle n_{\downarrow} \rangle" :inline="false" />
    
    <p>其中 <KatexElement expression="\epsilon_k = -2t(\cos k_x + \cos k_y)" :inline="true" /> 是紧束缚色散关系。
    自洽方程为：</p>
    <KatexElement expression="\langle n_\sigma \rangle = \frac{1}{N} \sum_k f(\epsilon_k + U\langle n_{-\sigma} \rangle)" :inline="false" />
    
    <p>其中 <KatexElement expression="f(\epsilon)" :inline="true" /> 是费米分布函数。</p>

    <h3>4. 量子Ising模型的横场</h3>
    <p>考虑横场Ising模型：</p>
    <KatexElement expression="H = -J \sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h \sum_i \sigma_i^x" :inline="false" />
    
    <p>引入序参量 <KatexElement expression="m_z = \langle \sigma^z \rangle" :inline="true" /> 和 <KatexElement expression="m_x = \langle \sigma^x \rangle" :inline="true" />，
    平均场哈密顿量为：</p>
    <KatexElement expression="H_{\text{eff}} = -\sum_i (\lambda_z \sigma_i^z + \lambda_x \sigma_i^x)" :inline="false" />
    
    <p>其中有效场为：</p>
    <KatexElement expression="\lambda_z = Jzm_z, \quad \lambda_x = h" :inline="false" />
    
    <p>自洽方程组为：</p>
    <KatexElement expression="m_z = \frac{\lambda_z}{\sqrt{\lambda_z^2 + \lambda_x^2}} \tanh\left(\frac{\sqrt{\lambda_z^2 + \lambda_x^2}}{k_B T}\right)" :inline="false" />
    <KatexElement expression="m_x = \frac{\lambda_x}{\sqrt{\lambda_z^2 + \lambda_x^2}} \tanh\left(\frac{\sqrt{\lambda_z^2 + \lambda_x^2}}{k_B T}\right)" :inline="false" />

    <h2>相变理论与Landau理论</h2>

    <h3>Landau相变理论</h3>
    <p>Landau相变理论是平均场理论在相变研究中的系统应用。基本思想是将自由能按序参量 <KatexElement expression="\phi" :inline="true" /> 展开：</p>
    <KatexElement expression="F(\phi) = F_0 + a\phi^2 + \frac{b}{2}\phi^4 + \frac{c}{3}\phi^6 + \cdots" :inline="false" />
    
    <p>其中系数 <KatexElement expression="a" :inline="true" /> 随温度变化：</p>
    <KatexElement expression="a = a_0(T - T_c)" :inline="false" />
    
    <p>而 <KatexElement expression="b > 0" :inline="true" /> 保证系统的稳定性。</p>

    <h3>二级相变</h3>
    <p>对于二级相变，平衡态序参量由 <KatexElement expression="\frac{\partial F}{\partial \phi} = 0" :inline="true" /> 确定：</p>
    <KatexElement expression="2a\phi + 2b\phi^3 = 0" :inline="false" />
    
    <p>解为：</p>
    <ul>
      <li><KatexElement expression="T > T_c" :inline="true" />：<KatexElement expression="\phi = 0" :inline="true" />（对称相）</li>
      <li><KatexElement expression="T < T_c" :inline="true" />：<KatexElement expression="\phi = \pm\sqrt{\frac{-a}{b}} = \pm\sqrt{\frac{a_0(T_c-T)}{b}}" :inline="true" />（破缺相）</li>
    </ul>

    <h3>一级相变</h3>
    <p>当 <KatexElement expression="b < 0" :inline="true" /> 时，需要包含六次项 <KatexElement expression="c\phi^6" :inline="true" />。此时自由能为：</p>
    <KatexElement expression="F(\phi) = F_0 + a\phi^2 + \frac{b}{2}\phi^4 + \frac{c}{3}\phi^6" :inline="false" />
    
    <p>一级相变发生在两个最小值具有相同自由能的温度。</p>

    <h3>临界指数</h3>
    <p>平均场理论给出的临界指数（在 <KatexElement expression="T \to T_c" :inline="true" /> 时）：</p>
    <ul>
      <li><strong>比热指数</strong>：<KatexElement expression="\alpha = 0" :inline="true" />，<KatexElement expression="C \sim \text{const}" :inline="true" /></li>
      <li><strong>磁化率指数</strong>：<KatexElement expression="\gamma = 1" :inline="true" />，<KatexElement expression="\chi \sim |T-T_c|^{-1}" :inline="true" /></li>
      <li><strong>序参量指数</strong>：<KatexElement expression="\beta = 1/2" :inline="true" />，<KatexElement expression="\phi \sim (T_c-T)^{1/2}" :inline="true" /></li>
      <li><strong>关联长度指数</strong>：<KatexElement expression="\nu = 1/2" :inline="true" />，<KatexElement expression="\xi \sim |T-T_c|^{-1/2}" :inline="true" /></li>
      <li><strong>临界等温线指数</strong>：<KatexElement expression="\delta = 3" :inline="true" />，<KatexElement expression="\phi \sim h^{1/3}" :inline="true" /> 在 <KatexElement expression="T = T_c" :inline="true" /></li>
    </ul>

    <h3>标度关系</h3>
    <p>临界指数之间满足标度关系：</p>
    <KatexElement expression="\alpha + 2\beta + \gamma = 2" :inline="false" />
    <KatexElement expression="\gamma = \beta(\delta - 1)" :inline="false" />
    <KatexElement expression="\nu d = 2 - \alpha" :inline="false" />
    
    <p>其中 <KatexElement expression="d" :inline="true" /> 是空间维数。</p>

    <h3>上临界维数</h3>
    <p>平均场理论在维数 <KatexElement expression="d \geq d_c = 4" :inline="true" /> 时变为精确的。这是因为在高维中，
    涨落效应相对于平均值变得可忽略。对于 <KatexElement expression="d < 4" :inline="true" />，需要考虑涨落修正。</p>

    <h2>计算方法与数值实现</h2>

    <h3>自洽迭代方法</h3>
    <p>求解平均场方程的标准方法是自洽迭代：</p>
    <ol>
      <li>给定序参量的初始猜测 <KatexElement expression="\phi^{(0)}" :inline="true" /></li>
      <li>计算有效哈密顿量 <KatexElement expression="H_{\text{eff}}[\phi^{(n)}]" :inline="true" /></li>
      <li>求解单体问题得到新的序参量 <KatexElement expression="\phi^{(n+1)}" :inline="true" /></li>
      <li>检查收敛性：<KatexElement expression="|\phi^{(n+1)} - \phi^{(n)}| < \epsilon" :inline="true" /></li>
      <li>如未收敛，返回步骤2</li>
    </ol>

    <h3>混合方法</h3>
    <p>为了改善收敛性，常使用混合方法：</p>
    <KatexElement expression="\phi^{(n+1)} = (1-\alpha)\phi^{(n)} + \alpha f(\phi^{(n)})" :inline="false" />
    
    <p>其中 <KatexElement expression="f(\phi)" :inline="true" /> 是平均场函数，<KatexElement expression="\alpha" :inline="true" /> 是混合参数（通常 <KatexElement expression="0.1 \leq \alpha \leq 0.5" :inline="true" />）。</p>

    <h3>Anderson混合</h3>
    <p>更高级的方法是Anderson混合，它利用历史信息加速收敛：</p>
    <KatexElement expression="\phi^{(n+1)} = \sum_{i=0}^m w_i \phi^{(n-i)}" :inline="false" />
    
    <p>其中权重 <KatexElement expression="w_i" :inline="true" /> 通过最小化残差确定。</p>

    <h3>温度扫描技术</h3>
    <p>研究相变时，常用温度扫描：</p>
    <ul>
      <li><strong>升温扫描</strong>：从低温开始，逐步升高温度</li>
      <li><strong>降温扫描</strong>：从高温开始，逐步降低温度</li>
      <li><strong>滞回现象</strong>：一级相变中升温和降温路径可能不同</li>
    </ul>

    <h2>优缺点分析</h2>

    <h3>优点</h3>
    <ul>
      <li><strong>数学处理相对简单</strong>：将多体问题简化为单体问题</li>
      <li><strong>物理图像清晰</strong>：提供直观的有效场概念</li>
      <li><strong>计算成本较低</strong>：避免了指数级的计算复杂度</li>
      <li><strong>普适性强</strong>：适用于多种不同的物理系统</li>
      <li><strong>相变描述</strong>：能够捕捉相变的基本特征和临界行为</li>
      <li><strong>解析结果</strong>：在许多情况下可以得到解析表达式</li>
    </ul>

    <h3>局限性</h3>
    <ul>
      <li><strong>忽略涨落效应</strong>：无法描述热涨落和量子涨落的重要作用</li>
      <li><strong>维数依赖性</strong>：在低维系统中精度较差，特别是 <KatexElement expression="d \leq 2" :inline="true" /></li>
      <li><strong>临界指数偏差</strong>：预测的临界指数与实验值有系统性偏差</li>
      <li><strong>拓扑相变</strong>：无法描述Kosterlitz-Thouless型相变</li>
      <li><strong>强关联效应</strong>：在强耦合区域可能完全失效</li>
      <li><strong>非平衡态</strong>：难以处理非平衡和动力学问题</li>
    </ul>

    <h3>适用范围</h3>
    <p>平均场理论最适用于：</p>
    <ul>
      <li>高维系统（<KatexElement expression="d \geq 4" :inline="true" />）</li>
      <li>长程相互作用系统</li>
      <li>弱到中等强度的相互作用</li>
      <li>远离量子临界点的区域</li>
      <li>经典相变的定性理解</li>
    </ul>

    <h2>改进方法与现代发展</h2>

    <h3>1. 涨落修正</h3>
    <p>考虑高斯涨落修正是改进平均场理论的第一步：</p>
    <KatexElement expression="F = F_{\text{MF}} + \frac{1}{2} \text{Tr} \ln G^{-1}" :inline="false" />
    
    <p>其中 <KatexElement expression="G^{-1}" :inline="true" /> 是涨落的逆传播子。这种修正能够改善临界指数的预测。</p>

    <h3>2. 重整化群改进</h3>
    <p>结合重整化群方法可以系统地改进平均场理论：</p>
    <ul>
      <li><strong>Wilson-Fisher不动点</strong>：在 <KatexElement expression="d = 4 - \epsilon" :inline="true" /> 维中的精确解</li>
      <li><strong>β函数</strong>：描述耦合常数的标度行为</li>
      <li><strong>临界指数</strong>：通过 <KatexElement expression="\epsilon" :inline="true" /> 展开得到修正的临界指数</li>
    </ul>

    <h3>3. 动力学平均场理论 (DMFT)</h3>
    <p>DMFT是平均场理论在强关联系统中的重要发展：</p>
    <KatexElement expression="G_{ii}(\omega) = \int d\epsilon \frac{\rho(\epsilon)}{\omega + \mu - \epsilon - \Sigma(\omega)}" :inline="false" />
    
    <p>其中 <KatexElement expression="\Sigma(\omega)" :inline="true" /> 是局域自能。DMFT在无限维极限下变为精确的。</p>

    <h3>4. 集团平均场理论</h3>
    <p>将系统分成小的集团，在集团内精确求解，集团间用平均场处理：</p>
    <ul>
      <li>改善短程关联的描述</li>
      <li>保持计算的可行性</li>
      <li>在量子相变研究中特别有用</li>
    </ul>

    <h3>5. 非平衡平均场理论</h3>
    <p>扩展到非平衡系统，研究驱动相变和动力学临界现象：</p>
    <KatexElement expression="\frac{\partial \phi}{\partial t} = -\frac{\delta F}{\delta \phi} + \eta(t)" :inline="false" />
    
    <p>其中 <KatexElement expression="\eta(t)" :inline="true" /> 是噪声项。</p>

    <h3>6. 机器学习增强</h3>
    <p>现代发展包括利用机器学习方法改进平均场近似：</p>
    <ul>
      <li><strong>神经网络变分</strong>：用神经网络表示变分波函数</li>
      <li><strong>深度学习</strong>：学习有效的序参量和相变特征</li>
      <li><strong>强化学习</strong>：优化平均场参数</li>
    </ul>

    <h2>实验验证与应用</h2>
    
    <h3>成功的实验验证</h3>
    <p>平均场理论的预测在许多实验中得到验证：</p>
    <ul>
      <li><strong>铁磁相变</strong>：居里温度附近的磁化行为</li>
      <li><strong>超导相变</strong>：BCS理论预测的能隙和比热</li>
      <li><strong>液气相变</strong>：van der Waals理论的状态方程</li>
      <li><strong>结构相变</strong>：钙钛矿材料的相变行为</li>
      <li><strong>合金有序化</strong>：Bragg-Williams理论的验证</li>
    </ul>

    <h3>实验偏差与修正</h3>
    <p>在某些情况下，实验结果与平均场预测存在偏差：</p>
    <ul>
      <li><strong>临界指数</strong>：三维Ising模型的实验值 <KatexElement expression="\beta \approx 0.325" :inline="true" />，而非平均场的 <KatexElement expression="0.5" :inline="true" /></li>
      <li><strong>二维系统</strong>：二维Ising模型的精确解与平均场理论差异显著</li>
      <li><strong>量子临界点</strong>：重费米子系统中的非费米液体行为</li>
    </ul>

    <h3>现代材料中的应用</h3>
    <p>平均场理论在现代材料研究中仍有重要应用：</p>
    <ul>
      <li><strong>高温超导体</strong>：d波配对的平均场描述</li>
      <li><strong>拓扑绝缘体</strong>：表面态的有效理论</li>
      <li><strong>量子自旋液体</strong>：平均场相图的构建</li>
      <li><strong>冷原子系统</strong>：Feshbach共振附近的BCS-BEC渡越</li>
    </ul>

    <h2>总结与展望</h2>
    <p>
      平均场理论作为处理强关联系统的基本方法，虽然有其固有的局限性，但仍然是理解复杂量子多体系统的重要工具。
      它不仅提供了相变现象的基本理解框架，也为更精确的理论方法奠定了基础。
    </p>
    
    <p>
      在现代凝聚态物理研究中，平均场理论常常作为起点，结合其他先进方法来获得更准确的结果。
      随着计算能力的提升和新理论方法的发展，平均场理论正在与数值方法、机器学习等技术相结合，
      展现出新的活力和应用前景。
    </p>

    <p>
      未来的发展方向包括：更精确的涨落修正、非平衡态的系统处理、拓扑相变的描述、
      以及与实验技术的更紧密结合。平均场理论将继续在凝聚态物理的理论体系中发挥重要作用。
    </p>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter1_4_40',
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
  line-height: 1.6;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 15px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #7f8c8d;
  margin-top: 25px;
  margin-bottom: 10px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

ul, ol {
  margin-bottom: 15px;
  padding-left: 30px;
}

li {
  margin-bottom: 5px;
}

.katex-display {
  margin: 20px 0;
}
</style>