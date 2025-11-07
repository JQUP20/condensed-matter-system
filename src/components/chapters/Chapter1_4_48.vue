<template>
  <div class="chapter-content">
    <h1>1.4.48 动力学平均场理论 (Dynamical Mean-Field Theory)</h1>
    
    <h2>引言</h2>
    <p>
      动力学平均场理论(Dynamical Mean-Field Theory, DMFT)是研究强关联电子系统的重要理论框架，
      由Antoine Georges等人在1990年代发展起来。DMFT将多体问题映射为单杂质问题，
      在保持局域量子涨落的同时，忽略了空间涨落。这一方法在处理Mott金属-绝缘体相变、
      重费米子系统、高温超导体等强关联现象方面取得了巨大成功。
    </p>

    <h2>基本思想</h2>

    <h3>1. 物理图像</h3>
    <p>
      DMFT的核心思想是将晶格上的每个格点看作嵌入在自洽确定的有效介质中的量子杂质。
      这个有效介质包含了所有其他格点的平均效应。
    </p>

    <h4>映射到杂质模型</h4>
    <p>晶格模型到杂质模型的映射：</p>
    <KatexElement expression="H_{lattice} \rightarrow H_{impurity} = \sum_{\sigma} \epsilon_d d_{\sigma}^\dagger d_{\sigma} + U n_{\uparrow} n_{\downarrow} + \sum_{k,\sigma} V_k (d_{\sigma}^\dagger c_{k\sigma} + h.c.)" :inline="false" />

    <h4>有效介质的物理意义</h4>
    <p>有效介质描述了：</p>
    <ul>
      <li><strong>动力学效应</strong>：频率依赖的杂化函数</li>
      <li><strong>量子涨落</strong>：保持局域量子相干性</li>
      <li><strong>多体效应</strong>：包含所有局域关联效应</li>
    </ul>

    <h3>2. 无穷维极限</h3>
    <p>DMFT在空间维数d→∞的极限下变为精确理论，此时动能标度为：</p>
    <KatexElement expression="t_{ij} \sim \frac{t^*}{\sqrt{d}}" :inline="false" />

    <h4>标度性质</h4>
    <p>在无穷维极限下：</p>
    <ul>
      <li><strong>动能标度</strong>：保持有限的动能尺度</li>
      <li><strong>配位数发散</strong>：z → ∞，但t/√z 有限</li>
      <li><strong>空间涨落抑制</strong>：只保留时间涨落</li>
    </ul>

    <h4>物理合理性</h4>
    <p>无穷维极限的物理意义：</p>
    <KatexElement expression="\langle \delta n_i \delta n_j \rangle \propto \frac{1}{z} \to 0 \quad (i \neq j)" :inline="false" />

    <h3>3. 局域近似</h3>
    <p>自能的局域近似：</p>
    <KatexElement expression="\Sigma_{ij}(\omega) = \delta_{ij} \Sigma(\omega)" :inline="false" />

    <h4>局域近似的合理性</h4>
    <p>局域近似忽略了：</p>
    <ul>
      <li><strong>空间关联</strong>：不同格点间的关联</li>
      <li><strong>动量依赖</strong>：自能的k依赖性</li>
      <li><strong>非局域涨落</strong>：集体激发模式</li>
    </ul>

    <h4>适用条件</h4>
    <p>局域近似在以下情况下有效：</p>
    <ul>
      <li><strong>高维系统</strong>：d ≥ 3的晶格</li>
      <li><strong>强关联</strong>：U/t较大的系统</li>
      <li><strong>局域物理</strong>：主要由局域效应主导</li>
    </ul>

    <h2>数学框架</h2>

    <h3>1. 格林函数</h3>
    <p>局域格林函数定义为：</p>
    <KatexElement expression="G_{loc}(\omega) = \frac{1}{N} \sum_k G_k(\omega)" :inline="false" />
    
    <p>其中：</p>
    <KatexElement expression="G_k(\omega) = \frac{1}{\omega + \mu - \epsilon_k - \Sigma(\omega)}" :inline="false" />

    <h4>态密度的作用</h4>
    <p>局域格林函数与态密度的关系：</p>
    <KatexElement expression="G_{loc}(\omega) = \int d\epsilon \frac{\rho(\epsilon)}{\omega + \mu - \epsilon - \Sigma(\omega)}" :inline="false" />

    <h4>半椭圆态密度</h4>
    <p>Bethe格子的半椭圆态密度：</p>
    <KatexElement expression="\rho(\epsilon) = \frac{2}{\pi D^2} \sqrt{D^2 - \epsilon^2}" :inline="false" />
    
    <p>对应的局域格林函数：</p>
    <KatexElement expression="G_{loc}(\omega) = \frac{2(\omega + \mu - \Sigma(\omega))}{D^2} - \frac{2\sqrt{(\omega + \mu - \Sigma(\omega))^2 - D^2}}{D^2}" :inline="false" />

    <h3>2. Weiss场</h3>
    <p>有效Weiss场通过Dyson方程确定：</p>
    <KatexElement expression="G_0^{-1}(\omega) = G_{loc}^{-1}(\omega) + \Sigma(\omega)" :inline="false" />

    <h4>杂化函数</h4>
    <p>杂化函数的定义：</p>
    <KatexElement expression="\Delta(\omega) = \omega + \mu - \epsilon_d - G_0^{-1}(\omega)" :inline="false" />

    <h4>自洽条件的物理意义</h4>
    <p>自洽条件确保：</p>
    <ul>
      <li><strong>一致性</strong>：杂质和晶格的局域性质相同</li>
      <li><strong>自洽性</strong>：有效介质由系统自身确定</li>
      <li><strong>因果性</strong>：满足Kramers-Kronig关系</li>
    </ul>

    <h3>3. 自洽条件</h3>
    <p>DMFT的自洽条件要求杂质问题的格林函数等于局域格林函数。</p>

    <h4>自洽循环算法</h4>
    <p>DMFT自洽循环的步骤：</p>
    <ol>
      <li><strong>初始猜测</strong>：给定初始自能Σ(ω)</li>
      <li><strong>计算G_loc</strong>：利用晶格求和</li>
      <li><strong>计算G_0</strong>：通过Dyson方程</li>
      <li><strong>求解杂质</strong>：得到新的Σ(ω)</li>
      <li><strong>检查收敛</strong>：重复直到收敛</li>
    </ol>

    <h4>收敛判据</h4>
    <p>收敛判据通常采用：</p>
    <KatexElement expression="\max_{\omega} |\Sigma^{(n+1)}(\omega) - \Sigma^{(n)}(\omega)| < \epsilon_{tol}" :inline="false" />

    <h2>杂质求解器</h2>

    <h3>1. 精确对角化(ED)</h3>
    <p>小系统的精确数值求解，适用于高频和零温计算。</p>

    <h4>Lanczos算法</h4>
    <p>利用Lanczos算法计算基态和低激发态：</p>
    <KatexElement expression="H |n\rangle = E_n |n\rangle" :inline="false" />

    <h4>有限温度ED</h4>
    <p>有限温度下的格林函数：</p>
    <KatexElement expression="G(\omega) = \sum_{n,m} \frac{\langle n|c^\dagger|m\rangle \langle m|c|n\rangle}{Z} \frac{e^{-\beta E_n} - e^{-\beta E_m}}{\omega - (E_m - E_n)}" :inline="false" />

    <h4>ED的优缺点</h4>
    <ul>
      <li><strong>优点</strong>：精确、无符号问题、适用于零温</li>
      <li><strong>缺点</strong>：系统尺寸限制、有限尺寸效应</li>
    </ul>

    <h3>2. 量子蒙特卡罗(QMC)</h3>
    <p>连续时间量子蒙特卡罗方法：</p>
    <ul>
      <li>CT-AUX：辅助场方法</li>
      <li>CT-INT：相互作用展开</li>
      <li>CT-HYB：杂化展开</li>
    </ul>

    <h4>CT-HYB方法</h4>
    <p>杂化展开的配分函数：</p>
    <KatexElement expression="Z = \sum_{n=0}^{\infty} \frac{(-1)^n}{n!} \int_0^\beta d\tau_1 \cdots d\tau_n \langle T_\tau c_{\tau_1}^\dagger c_{\tau_1} \cdots c_{\tau_n}^\dagger c_{\tau_n} \rangle_{bath}" :inline="false" />

    <h4>测量物理量</h4>
    <p>Green函数的测量：</p>
    <KatexElement expression="G(\tau) = -\langle T_\tau c(\tau) c^\dagger(0) \rangle" :inline="false" />

    <h4>QMC的优缺点</h4>
    <ul>
      <li><strong>优点</strong>：大系统、有限温度、连续频谱</li>
      <li><strong>缺点</strong>：符号问题、统计误差、解析延拓</li>
    </ul>

    <h3>3. 数值重整化群(NRG)</h3>
    <p>Wilson的数值重整化群方法，特别适用于低能物理。</p>

    <h4>对数离散化</h4>
    <p>连续谱的对数离散化：</p>
    <KatexElement expression="\epsilon_n = \pm D \Lambda^{-n} \quad (n = 0, 1, 2, \ldots)" :inline="false" />

    <h4>迭代对角化</h4>
    <p>逐步构造哈密顿量：</p>
    <KatexElement expression="H_N = \Lambda^{1/2} H_{N-1} + \epsilon_N f_N^\dagger f_N + V_N (d^\dagger f_N + f_N^\dagger d)" :inline="false" />

    <h4>NRG的优缺点</h4>
    <ul>
      <li><strong>优点</strong>：低能精确、零温、实频结果</li>
      <li><strong>缺点</strong>：高频不准确、离散化误差</li>
    </ul>

    <h3>4. 迭代微扰理论(IPT)</h3>
    <p>简化的解析方法，在弱到中等关联强度下有效。</p>

    <h4>二阶微扰</h4>
    <p>自能的二阶微扰表达式：</p>
    <KatexElement expression="\Sigma(\omega) = \frac{U^2}{2} \int \frac{d\omega'}{2\pi i} G_0(\omega') G_0(\omega + \omega') G_0(-\omega')" :inline="false" />

    <h4>IPT的改进</h4>
    <p>改进的IPT包括：</p>
    <ul>
      <li><strong>NCA</strong>：非交叉近似</li>
      <li><strong>FLEX</strong>：涨落交换近似</li>
      <li><strong>DMFT+Σ</strong>：高阶修正</li>
    </ul>

    <h2>Hubbard模型的DMFT</h2>

    <h3>1. 模型哈密顿量</h3>
    <p>单轨道Hubbard模型：</p>
    <KatexElement expression="H = -t \sum_{\langle i,j \rangle, \sigma} c_{i\sigma}^\dagger c_{j\sigma} + U \sum_i n_{i\uparrow} n_{i\downarrow}" :inline="false" />

    <h4>参数的物理意义</h4>
    <ul>
      <li><strong>跳跃积分t</strong>：动能尺度，决定带宽W ∼ zt</li>
      <li><strong>库仑排斥U</strong>：相互作用强度</li>
      <li><strong>无量纲参数</strong>：U/W决定关联强度</li>
    </ul>

    <h4>极限情况</h4>
    <p>不同极限下的行为：</p>
    <ul>
      <li><strong>U → 0</strong>：自由费米气体</li>
      <li><strong>t → 0</strong>：原子极限</li>
      <li><strong>U ≫ t</strong>：强关联区域</li>
    </ul>

    <h3>2. 相图</h3>
    <p>DMFT预言的相图包括：</p>
    <ul>
      <li>金属相</li>
      <li>Mott绝缘体相</li>
      <li>共存区域</li>
    </ul>

    <h4>金属相的特征</h4>
    <p>金属相中：</p>
    <ul>
      <li><strong>有限态密度</strong>：N(0) > 0</li>
      <li><strong>准粒子峰</strong>：费米面附近的相干峰</li>
      <li><strong>Drude峰</strong>：光学电导率中的零频峰</li>
    </ul>

    <h4>Mott绝缘体的特征</h4>
    <p>Mott绝缘体中：</p>
    <ul>
      <li><strong>能隙</strong>：费米面处的能隙</li>
      <li><strong>Hubbard带</strong>：上下Hubbard带分离</li>
      <li><strong>局域磁矩</strong>：每个格点的局域自旋</li>
    </ul>

    <h3>3. Mott转变</h3>
    <p>临界相互作用强度：</p>
    <KatexElement expression="U_c \approx 5.9t" :inline="false" />

    <h4>一阶相变特征</h4>
    <p>Mott转变的一阶性质：</p>
    <ul>
      <li><strong>双稳态</strong>：金属和绝缘体解共存</li>
      <li><strong>滞后现象</strong>：加热和冷却路径不同</li>
      <li><strong>跳跃性变化</strong>：物理量的不连续变化</li>
    </ul>

    <h4>临界端点</h4>
    <p>有限温度下的临界端点：</p>
    <KatexElement expression="T_c \approx 0.02W, \quad U_c \approx 1.5W" :inline="false" />

    <h2>物理性质</h2>

    <h3>1. 谱函数</h3>
    <p>单粒子谱函数：</p>
    <KatexElement expression="A(\omega) = -\frac{1}{\pi} \text{Im} G_{loc}(\omega + i0^+)" :inline="false" />

    <h4>谱函数的结构</h4>
    <p>不同相中的谱函数特征：</p>
    <ul>
      <li><strong>金属相</strong>：费米面处的准粒子峰 + Hubbard带</li>
      <li><strong>绝缘体相</strong>：上下Hubbard带，费米面处无权重</li>
      <li><strong>坏金属</strong>：准粒子峰被抑制，非相干背景</li>
    </ul>

    <h4>谱权重转移</h4>
    <p>随U增加的谱权重转移：</p>
    <KatexElement expression="Z = \int_{-\omega_c}^{\omega_c} A(\omega) d\omega \to 0 \quad (U \to U_c)" :inline="false" />

    <h3>2. 准粒子峰</h3>
    <p>费米液体相中的准粒子重整化：</p>
    <KatexElement expression="Z = \left(1 - \frac{\partial \text{Re} \Sigma(\omega)}{\partial \omega}\bigg|_{\omega=0}\right)^{-1}" :inline="false" />

    <h4>准粒子重整化因子</h4>
    <p>Z因子的物理意义：</p>
    <ul>
      <li><strong>Z = 1</strong>：自由电子</li>
      <li><strong>Z < 1</strong>：重费米子行为</li>
      <li><strong>Z → 0</strong>：Mott转变临界点</li>
    </ul>

    <h4>有效质量增强</h4>
    <p>有效质量的增强：</p>
    <KatexElement expression="m^* = \frac{m}{Z} = m \left(1 - \frac{\partial \text{Re} \Sigma(\omega)}{\partial \omega}\bigg|_{\omega=0}\right)" :inline="false" />

    <h3>3. Hubbard带</h3>
    <p>Mott绝缘体中的上下Hubbard带分离。</p>

    <h4>Hubbard带的位置</h4>
    <p>原子极限下的Hubbard带：</p>
    <ul>
      <li><strong>下Hubbard带</strong>：ω ≈ -U/2</li>
      <li><strong>上Hubbard带</strong>：ω ≈ +U/2</li>
      <li><strong>能隙</strong>：Δ ≈ U</li>
    </ul>

    <h4>带宽的重整化</h4>
    <p>Hubbard带宽的U依赖性：</p>
    <KatexElement expression="W_{Hubbard} \approx \frac{W^2}{U} \quad (U \gg W)" :inline="false" />

    <h2>有限温度性质</h2>

    <h3>1. 温度相图</h3>
    <p>有限温度下的金属-绝缘体转变。</p>

    <h4>相边界的确定</h4>
    <p>相边界通过以下判据确定：</p>
    <ul>
      <li><strong>能隙判据</strong>：A(0) = 0</li>
      <li><strong>电导率判据</strong>：σ(0) = 0</li>
      <li><strong>双稳态判据</strong>：多解存在</li>
    </ul>

    <h4>临界温度标度</h4>
    <p>临界温度的标度行为：</p>
    <KatexElement expression="T_c \propto (U_c - U)^{1/2}" :inline="false" />

    <h3>2. 坏金属行为</h3>
    <p>中间温度区域的非费米液体行为。</p>

    <h4>坏金属的特征</h4>
    <p>坏金属相的性质：</p>
    <ul>
      <li><strong>非相干输运</strong>：ρ(T) ∼ T线性</li>
      <li><strong>准粒子抑制</strong>：Z(T) → 0</li>
      <li><strong>局域磁矩</strong>：χ(T) ∼ C/T</li>
    </ul>

    <h4>相干温度</h4>
    <p>相干温度的定义：</p>
    <KatexElement expression="T_{coh} \sim Z \cdot W" :inline="false" />

    <h3>3. 热力学性质</h3>
    <p>比热、熵、磁化率等的温度依赖性。</p>

    <h4>比热的行为</h4>
    <p>不同温度区域的比热：</p>
    <ul>
      <li><strong>高温</strong>：C ∼ ln(2) (Schottky异常)</li>
      <li><strong>相干温度</strong>：C ∼ γT (重费米子)</li>
      <li><strong>低温</strong>：C ∼ T³ (绝缘体) 或 C ∼ T (金属)</li>
    </ul>

    <h4>磁化率的温度依赖</h4>
    <p>磁化率的行为：</p>
    <KatexElement expression="\chi(T) = \frac{C}{T + T_K}" :inline="false" />
    
    <p>其中TK是Kondo温度尺度。</p>

    <h2>扩展和推广</h2>

    <h3>1. 团簇DMFT</h3>
    <p>考虑短程空间关联的扩展：</p>
    <KatexElement expression="\Sigma_{ij}(\omega) = \Sigma_{ij}^{cluster}(\omega)" :inline="false" />

    <h4>团簇的选择</h4>
    <p>常用的团簇几何：</p>
    <ul>
      <li><strong>双格点</strong>：最简单的团簇</li>
      <li><strong>正方形</strong>：2×2团簇</li>
      <li><strong>三角形</strong>：考虑几何阻挫</li>
    </ul>

    <h4>嵌入自能</h4>
    <p>团簇自能的嵌入：</p>
    <KatexElement expression="\Sigma(\mathbf{k}, \omega) = \sum_{\mathbf{K}} \Sigma^{cluster}(\mathbf{K}, \omega)" :inline="false" />

    <h3>2. 双杂质DMFT</h3>
    <p>最简单的团簇方法，包含两个格点的团簇。</p>

    <h4>双杂质哈密顿量</h4>
    <p>双杂质系统的哈密顿量：</p>
    <KatexElement expression="H = \sum_{i=1,2} [\epsilon_d n_i + U n_{i\uparrow} n_{i\downarrow}] + t_{12}(c_1^\dagger c_2 + h.c.) + H_{bath}" :inline="false" />

    <h4>非局域关联</h4>
    <p>双杂质DMFT捕获的非局域效应：</p>
    <ul>
      <li><strong>键关联</strong>：最近邻格点间的关联</li>
      <li><strong>自旋关联</strong>：反铁磁涨落</li>
      <li><strong>电荷关联</strong>：电荷密度波涨落</li>
    </ul>

    <h3>3. 动力学团簇近似(DCA)</h3>
    <p>在动量空间中的团簇方法。</p>

    <h4>动量空间分割</h4>
    <p>布里渊区的分割：</p>
    <KatexElement expression="\mathbf{k} = \mathbf{K} + \tilde{\mathbf{k}}" :inline="false" />
    
    <p>其中K是团簇动量，k̃是团簇内动量。</p>

    <h4>DCA自洽条件</h4>
    <p>DCA的自洽条件：</p>
    <KatexElement expression="G(\mathbf{K}, \omega) = \frac{1}{N_c} \sum_{\tilde{\mathbf{k}}} G(\mathbf{K} + \tilde{\mathbf{k}}, \omega)" :inline="false" />

    <h2>多轨道系统</h2>

    <h3>1. 多轨道Hubbard模型</h3>
    <p>包含轨道间相互作用：</p>
    <KatexElement expression="H_{int} = U \sum_{i,\alpha} n_{i\alpha\uparrow} n_{i\alpha\downarrow} + U' \sum_{i,\alpha<\beta} n_{i\alpha} n_{i\beta}" :inline="false" />

    <h4>相互作用参数</h4>
    <p>多轨道系统的相互作用：</p>
    <ul>
      <li><strong>U</strong>：同轨道库仑排斥</li>
      <li><strong>U'</strong>：不同轨道库仑排斥</li>
      <li><strong>J</strong>：Hund耦合</li>
      <li><strong>J'</strong>：对交换</li>
    </ul>

    <h4>Kanamori参数化</h4>
    <p>Kanamori参数关系：</p>
    <KatexElement expression="U' = U - 2J, \quad J' = J" :inline="false" />

    <h3>2. Hund耦合</h3>
    <p>Hund规则导致的轨道选择性Mott转变。</p>

    <h4>Hund金属相</h4>
    <p>Hund耦合导致的特殊金属相：</p>
    <ul>
      <li><strong>轨道分化</strong>：不同轨道的不同行为</li>
      <li><strong>自旋极化</strong>：局域磁矩的形成</li>
      <li><strong>非相干性</strong>：准粒子峰的抑制</li>
    </ul>

    <h4>轨道选择性Mott转变</h4>
    <p>不同轨道在不同U值发生Mott转变：</p>
    <KatexElement expression="U_{c1} < U_{c2} < U_{c3}" :inline="false" />

    <h3>3. 晶体场效应</h3>
    <p>轨道简并度破缺的影响。</p>

    <h4>晶体场分裂</h4>
    <p>晶体场导致的能级分裂：</p>
    <KatexElement expression="H_{CF} = \sum_{i,\alpha} \Delta_\alpha n_{i\alpha}" :inline="false" />

    <h4>轨道占据</h4>
    <p>晶体场对轨道占据的影响：</p>
    <ul>
      <li><strong>能级顺序</strong>：决定电子填充顺序</li>
      <li><strong>轨道极化</strong>：优先占据低能轨道</li>
      <li><strong>相变调控</strong>：改变Mott转变临界值</li>
    </ul>

    <h2>非平衡DMFT</h2>

    <h3>1. Keldysh形式</h3>
    <p>非平衡格林函数的DMFT推广。</p>

    <h4>Keldysh格林函数</h4>
    <p>非平衡格林函数矩阵：</p>
    <KatexElement expression="G = \begin{pmatrix} G^{11} & G^{12} \\ G^{21} & G^{22} \end{pmatrix} = \begin{pmatrix} G^t & G^< \\ G^> & G^{\bar{t}} \end{pmatrix}" :inline="false" />

    <h4>非平衡自洽条件</h4>
    <p>非平衡DMFT的自洽条件：</p>
    <KatexElement expression="G_{loc}^{<,>}(t,t') = G_{imp}^{<,>}(t,t')" :inline="false" />

    <h3>2. 时间演化</h3>
    <p>量子淬火后的动力学演化。</p>

    <h4>淬火协议</h4>
    <p>典型的淬火协议：</p>
    <ul>
      <li><strong>相互作用淬火</strong>：U(t) = U₀ → U₁</li>
      <li><strong>跳跃淬火</strong>：t(t) = t₀ → t₁</li>
      <li><strong>化学势淬火</strong>：μ(t) = μ₀ → μ₁</li>
    </ul>

    <h4>弛豫动力学</h4>
    <p>淬火后的弛豫过程：</p>
    <KatexElement expression="A(t,\omega) = -\frac{1}{\pi} \text{Im} G^<(t,t) / f(\omega)" :inline="false" />

    <h3>3. 稳态性质</h3>
    <p>驱动系统的稳态相图。</p>

    <h4>周期驱动</h4>
    <p>周期驱动下的Floquet DMFT：</p>
    <KatexElement expression="H(t) = H_0 + V \cos(\Omega t)" :inline="false" />

    <h4>稳态相图</h4>
    <p>驱动系统的新奇相：</p>
    <ul>
      <li><strong>光诱导相变</strong>：驱动诱导的相变</li>
      <li><strong>Floquet绝缘体</strong>：动力学局域化</li>
      <li><strong>预热效应</strong>：有效温度升高</li>
    </ul>

    <h2>实际材料应用</h2>

    <h3>1. 过渡金属氧化物</h3>
    <p>V₂O₃、NiO等材料的Mott转变。</p>

    <h4>V₂O₃的相图</h4>
    <p>V₂O₃的温度-压力相图：</p>
    <ul>
      <li><strong>金属相</strong>：高温或高压</li>
      <li><strong>反铁磁绝缘体</strong>：低温低压</li>
      <li><strong>顺磁绝缘体</strong>：中间区域</li>
    </ul>

    <h4>DMFT计算结果</h4>
    <p>DMFT对V₂O₃的预测：</p>
    <ul>
      <li><strong>Mott转变</strong>：U/W ≈ 1.5</li>
      <li><strong>谱函数</strong>：与ARPES实验符合</li>
      <li><strong>输运性质</strong>：电阻率的温度依赖</li>
    </ul>

    <h4>NiO的电子结构</h4>
    <p>NiO的多轨道DMFT研究：</p>
    <ul>
      <li><strong>电荷转移绝缘体</strong>：O 2p → Ni 3d</li>
      <li><strong>磁性</strong>：反铁磁长程序</li>
      <li><strong>光学性质</strong>：电荷转移激发</li>
    </ul>

    <h3>2. 重费米子系统</h3>
    <p>CeCoIn₅、CeCu₆等化合物的低温性质。</p>

    <h4>Kondo格子模型</h4>
    <p>重费米子系统的有效模型：</p>
    <KatexElement expression="H = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} c_{\mathbf{k}\sigma}^\dagger c_{\mathbf{k}\sigma} + J_K \sum_i \mathbf{S}_i \cdot \mathbf{s}_i + H_{RKKY}" :inline="false" />

    <h4>Kondo屏蔽</h4>
    <p>Kondo效应的DMFT描述：</p>
    <ul>
      <li><strong>Kondo温度</strong>：TK ∼ D exp(-1/ρJK)</li>
      <li><strong>重费米子</strong>：m* ∼ 1/TK</li>
      <li><strong>相干峰</strong>：费米面附近的窄峰</li>
    </ul>

    <h4>量子临界点</h4>
    <p>重费米子系统的量子相变：</p>
    <ul>
      <li><strong>Kondo破坏</strong>：局域磁矩的去屏蔽</li>
      <li><strong>费米面重构</strong>：大小费米面转变</li>
      <li><strong>非费米液体</strong>：临界点附近的奇异行为</li>
    </ul>

    <h3>3. 铁基超导体</h3>
    <p>多轨道效应和轨道选择性。</p>

    <h4>五轨道模型</h4>
    <p>铁基超导体的五轨道模型：</p>
    <KatexElement expression="H = \sum_{\mathbf{k},\alpha,\beta,\sigma} t_{\alpha\beta}(\mathbf{k}) c_{\mathbf{k}\alpha\sigma}^\dagger c_{\mathbf{k}\beta\sigma} + H_{int}" :inline="false" />

    <h4>轨道分化</h4>
    <p>Hund耦合导致的轨道分化：</p>
    <ul>
      <li><strong>xz/yz轨道</strong>：更强的关联效应</li>
      <li><strong>xy轨道</strong>：相对较弱的关联</li>
      <li><strong>z²轨道</strong>：中等关联强度</li>
    </ul>

    <h4>超导配对</h4>
    <p>多轨道超导的DMFT+配对理论：</p>
    <ul>
      <li><strong>s±配对</strong>：轨道间符号变化</li>
      <li><strong>轨道涨落</strong>：配对胶水机制</li>
      <li><strong>Tc增强</strong>：Hund耦合的作用</li>
    </ul>

    <h2>与实验的比较</h2>

    <h3>1. 光电子能谱</h3>
    <p>ARPES实验与DMFT谱函数的比较。</p>

    <h4>谱函数的测量</h4>
    <p>ARPES测量的物理量：</p>
    <KatexElement expression="I(\mathbf{k},\omega) \propto f(\omega) A(\mathbf{k},\omega)" :inline="false" />

    <h4>DMFT与ARPES的比较</h4>
    <p>比较的关键特征：</p>
    <ul>
      <li><strong>准粒子峰</strong>：位置、宽度、强度</li>
      <li><strong>Hubbard带</strong>：能量位置和形状</li>
      <li><strong>费米面</strong>：金属-绝缘体转变</li>
    </ul>

    <h4>k分辨DMFT</h4>
    <p>结合DFT+DMFT的k分辨计算：</p>
    <KatexElement expression="A(\mathbf{k},\omega) = -\frac{1}{\pi} \text{Im} G(\mathbf{k},\omega)" :inline="false" />

    <h3>2. 光学电导率</h3>
    <p>红外光谱的理论计算。</p>

    <h4>Kubo公式</h4>
    <p>光学电导率的Kubo公式：</p>
    <KatexElement expression="\sigma(\omega) = \frac{e^2}{V} \int_0^\infty dt e^{i\omega t} \langle [j(t), j(0)] \rangle" :inline="false" />

    <h4>DMFT光学电导率</h4>
    <p>DMFT框架下的光学电导率：</p>
    <KatexElement expression="\sigma(\omega) = \frac{\pi e^2}{3} \sum_{\mathbf{k}} |\mathbf{v}_{\mathbf{k}}|^2 \int \frac{d\omega'}{2\pi} A(\mathbf{k},\omega') A(\mathbf{k},\omega'+\omega) \frac{f(\omega') - f(\omega'+\omega)}{\omega}" :inline="false" />

    <h4>Drude-Lorentz分析</h4>
    <p>光学电导率的拟合：</p>
    <ul>
      <li><strong>Drude峰</strong>：金属相的零频响应</li>
      <li><strong>中红外峰</strong>：Hubbard带间跃迁</li>
      <li><strong>等离子体边</strong>：集体激发</li>
    </ul>

    <h3>3. 输运性质</h3>
    <p>电阻率、霍尔系数等的温度依赖性。</p>

    <h4>电阻率的计算</h4>
    <p>直流电阻率：</p>
    <KatexElement expression="\rho(T) = \frac{1}{\sigma(0,T)}" :inline="false" />

    <h4>霍尔系数</h4>
    <p>霍尔系数的DMFT计算：</p>
    <KatexElement expression="R_H = \frac{\sigma_{xy}}{\sigma_{xx}^2 + \sigma_{xy}^2} \approx \frac{1}{ne}" :inline="false" />

    <h4>输运标度律</h4>
    <p>强关联系统的输运标度：</p>
    <ul>
      <li><strong>T线性电阻</strong>：坏金属行为</li>
      <li><strong>T²行为</strong>：费米液体</li>
      <li><strong>激活行为</strong>：绝缘体相</li>
    </ul>

    <h2>计算方法和技巧</h2>

    <h3>1. 自洽循环</h3>
    <p>DMFT自洽循环的收敛技巧。</p>

    <h4>混合方案</h4>
    <p>线性混合方案：</p>
    <KatexElement expression="\Sigma^{(n+1)}_{mix} = \alpha \Sigma^{(n+1)} + (1-\alpha) \Sigma^{(n)}" :inline="false" />

    <h4>Broyden方法</h4>
    <p>Broyden准牛顿方法：</p>
    <KatexElement expression="J_{n+1} = J_n + \frac{(\Delta \Sigma_n - J_n \Delta G_n) \Delta G_n^T}{|\Delta G_n|^2}" :inline="false" />

    <h4>收敛加速</h4>
    <p>收敛加速技术：</p>
    <ul>
      <li><strong>Anderson混合</strong>：历史信息的利用</li>
      <li><strong>DIIS方法</strong>：直接反演迭代子空间</li>
      <li><strong>预条件</strong>：改善条件数</li>
    </ul>

    <h3>2. 解析延拓</h3>
    <p>从虚频到实频的延拓方法。</p>

    <h4>Padé近似</h4>
    <p>有理函数近似：</p>
    <KatexElement expression="G(z) \approx \frac{\sum_{n=0}^N a_n z^n}{1 + \sum_{m=1}^M b_m z^m}" :inline="false" />

    <h4>最大熵方法</h4>
    <p>最大熵原理的应用：</p>
    <KatexElement expression="S[A] = -\int d\omega A(\omega) \ln\left(\frac{A(\omega)}{D(\omega)}\right)" :inline="false" />

    <h4>随机解析延拓</h4>
    <p>SAC方法的贝叶斯推断：</p>
    <ul>
      <li><strong>先验分布</strong>：谱函数的先验知识</li>
      <li><strong>似然函数</strong>：数据拟合质量</li>
      <li><strong>后验采样</strong>：MCMC采样</li>
    </ul>

    <h3>3. 并行计算</h3>
    <p>大规模DMFT计算的并行化。</p>

    <h4>频率并行</h4>
    <p>Matsubara频率的并行化：</p>
    <ul>
      <li><strong>频率分割</strong>：不同进程处理不同频率</li>
      <li><strong>通信优化</strong>：减少数据传输</li>
      <li><strong>负载均衡</strong>：动态任务分配</li>
    </ul>

    <h4>k点并行</h4>
    <p>布里渊区积分的并行化：</p>
    <ul>
      <li><strong>k点分割</strong>：不同进程处理不同k点</li>
      <li><strong>对称性利用</strong>：减少计算量</li>
      <li><strong>自适应积分</strong>：重要区域加密</li>
    </ul>

    <h4>杂质求解器并行</h4>
    <p>QMC求解器的并行化：</p>
    <ul>
      <li><strong>蒙特卡罗并行</strong>：独立随机数流</li>
      <li><strong>测量并行</strong>：物理量测量的并行</li>
      <li><strong>内存优化</strong>：大规模系统的内存管理</li>
    </ul>

    <h2>局限性和挑战</h2>

    <h3>1. 空间关联</h3>
    <p>忽略空间涨落的局限性。</p>

    <h4>被忽略的物理</h4>
    <p>DMFT忽略的重要物理：</p>
    <ul>
      <li><strong>反铁磁涨落</strong>：短程磁序涨落</li>
      <li><strong>超导配对</strong>：Cooper对的形成</li>
      <li><strong>电荷密度波</strong>：电荷调制</li>
      <li><strong>轨道序</strong>：轨道有序相</li>
    </ul>

    <h4>改进方法</h4>
    <p>包含空间关联的方法：</p>
    <ul>
      <li><strong>团簇DMFT</strong>：有限尺寸团簇</li>
      <li><strong>DΓA方法</strong>：双粒子自洽</li>
      <li><strong>DMFT+Σ</strong>：非局域自能修正</li>
    </ul>

    <h3>2. 低维系统</h3>
    <p>一维和二维系统中的适用性问题。</p>

    <h4>维度效应</h4>
    <p>低维系统的特殊性：</p>
    <ul>
      <li><strong>涨落增强</strong>：低维涨落更强</li>
      <li><strong>Mermin-Wagner定理</strong>：连续对称性破缺</li>
      <li><strong>Luttinger液体</strong>：一维系统的非费米液体</li>
    </ul>

    <h4>DMFT的修正</h4>
    <p>低维系统的DMFT修正：</p>
    <ul>
      <li><strong>维度插值</strong>：有限维度的修正</li>
      <li><strong>涨落修正</strong>：包含关键涨落</li>
      <li><strong>重整化群</strong>：结合RG方法</li>
    </ul>

    <h3>3. 符号问题</h3>
    <p>量子蒙特卡罗方法的符号问题。</p>

    <h4>符号问题的起源</h4>
    <p>符号问题的物理起源：</p>
    <ul>
      <li><strong>费米子反对称</strong>：费米子交换的负号</li>
      <li><strong>阻挫系统</strong>：几何阻挫导致的符号</li>
      <li><strong>实时演化</strong>：非平衡系统的复权重</li>
    </ul>

    <h4>缓解方法</h4>
    <p>符号问题的缓解策略：</p>
    <ul>
      <li><strong>改进算法</strong>：减少符号波动</li>
      <li><strong>约束路径</strong>：固定相位近似</li>
      <li><strong>机器学习</strong>：神经网络求解器</li>
    </ul>

    <h2>未来发展</h2>

    <h3>1. 机器学习</h3>
    <p>神经网络杂质求解器的发展。</p>

    <h4>神经网络量子态</h4>
    <p>变分神经网络方法：</p>
    <KatexElement expression="|\psi\rangle = \sum_{\{n\}} \psi_{NN}(\{n\}) |\{n\}\rangle" :inline="false" />

    <h4>强化学习</h4>
    <p>强化学习在DMFT中的应用：</p>
    <ul>
      <li><strong>策略优化</strong>：自洽循环的优化</li>
      <li><strong>参数调节</strong>：自动参数选择</li>
      <li><strong>路径搜索</strong>：最优计算路径</li>
    </ul>

    <h4>深度学习加速</h4>
    <p>深度学习加速DMFT计算：</p>
    <ul>
      <li><strong>解析延拓</strong>：神经网络延拓</li>
      <li><strong>自能预测</strong>：基于历史数据的预测</li>
      <li><strong>相图探索</strong>：自动相图绘制</li>
    </ul>

    <h3>2. 量子计算</h3>
    <p>量子计算机上的DMFT实现。</p>

    <h4>量子杂质求解器</h4>
    <p>量子计算机上的杂质问题：</p>
    <ul>
      <li><strong>VQE方法</strong>：变分量子本征求解器</li>
      <li><strong>量子退火</strong>：绝热量子计算</li>
      <li><strong>量子模拟</strong>：直接模拟杂质系统</li>
    </ul>

    <h4>量子优势</h4>
    <p>量子计算的潜在优势：</p>
    <ul>
      <li><strong>指数加速</strong>：某些问题的指数加速</li>
      <li><strong>无符号问题</strong>：避免经典符号问题</li>
      <li><strong>实时演化</strong>：自然的量子演化</li>
    </ul>

    <h3>3. 多尺度方法</h3>
    <p>结合第一性原理的多尺度计算。</p>

    <h4>DFT+DMFT</h4>
    <p>密度泛函理论与DMFT的结合：</p>
    <KatexElement expression="H_{eff} = H_{DFT} + H_{DMFT} - H_{DC}" :inline="false" />

    <h4>GW+DMFT</h4>
    <p>GW近似与DMFT的结合：</p>
    <ul>
      <li><strong>非局域屏蔽</strong>：GW处理长程关联</li>
      <li><strong>局域关联</strong>：DMFT处理强关联</li>
      <li><strong>自洽结合</strong>：两种方法的自洽</li>
    </ul>

    <h4>多尺度建模</h4>
    <p>从原子到宏观的多尺度建模：</p>
    <ul>
      <li><strong>电子结构</strong>：第一性原理计算</li>
      <li><strong>强关联</strong>：DMFT处理</li>
      <li><strong>介观物理</strong>：有效模型</li>
      <li><strong>宏观性质</strong>：连续介质理论</li>
    </ul>

    <h2>总结</h2>
    <p>
      动力学平均场理论是现代凝聚态理论的重要成就，它为理解强关联电子系统提供了强有力的工具。
      DMFT成功地描述了Mott转变、重费米子行为等复杂现象，并在实际材料研究中得到广泛应用。
      从基本的单轨道Hubbard模型到复杂的多轨道系统，从平衡态到非平衡态，
      DMFT展现出了强大的适应性和预测能力。
      
      在实际材料应用方面，DMFT在过渡金属氧化物、重费米子系统、铁基超导体等
      强关联材料的研究中发挥了关键作用。通过与ARPES、光学电导率、输运测量等
      实验技术的结合，DMFT为理解这些材料的电子结构和物理性质提供了深刻洞察。
      
      虽然DMFT存在忽略空间关联、低维系统适用性、符号问题等局限性，
      但通过团簇DMFT、机器学习、量子计算等新方法的发展，这些挑战正在逐步得到解决。
      特别是与第一性原理方法的结合，使得DMFT能够处理更加现实的材料系统。
      
      随着计算技术的发展和新方法的涌现，DMFT有望在未来解决更多挑战性问题，
      继续在强关联物理研究中发挥核心作用。从量子材料设计到新奇量子相的发现，
      DMFT将继续推动凝聚态物理学的前沿发展。
    </p>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter1_4_48',
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