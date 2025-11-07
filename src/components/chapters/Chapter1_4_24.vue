<template>
  <div class="mott-transition-page">
    <h1>Mott相变 (Mott Transition)</h1>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <p>Mott相变是强关联电子系统中最重要的现象之一，描述了由电子-电子相互作用驱动的金属-绝缘体转变。这种相变最初由Nevill Francis Mott在1949年提出，用来解释某些过渡金属氧化物在理论上应该是金属但实际上却表现为绝缘体的现象。Mott相变的核心思想是，当电子间的库仑排斥足够强时，电子会被局域化，导致系统从金属态转变为绝缘体态。</p>
      
      <h3>历史发展</h3>
      <ul>
        <li><strong>1949年</strong>：Mott提出电子关联导致的金属-绝缘体转变概念</li>
        <li><strong>1961年</strong>：Hubbard模型的提出为Mott相变提供了理论框架</li>
        <li><strong>1968年</strong>：Brinkman和Rice发展了Gutzwiller变分理论</li>
        <li><strong>1989年</strong>：Metzner和Vollhardt提出无穷维极限理论</li>
        <li><strong>1992年</strong>：Georges和Kotliar发展了动力学平均场理论(DMFT)</li>
        <li><strong>1990年代至今</strong>：高温超导体的发现推动了Mott物理的深入研究</li>
      </ul>
    </section>

    <!-- Hubbard模型与强关联效应 -->
    <section class="hubbard-model">
      <h2>Hubbard模型与强关联效应</h2>
      
      <h3>Hubbard哈密顿量</h3>
      <p>Hubbard模型是研究Mott相变的最简单模型：</p>
      
      <div class="formula">
        <p>$$H = -t \sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + U \sum_i n_{i\uparrow} n_{i\downarrow}$$</p>
      </div>
      
      <p>其中：</p>
      <ul>
        <li>$t$ 是跳跃积分，描述电子的动能</li>
        <li>$U$ 是在位库仑排斥，描述电子间相互作用</li>
        <li>$n_{i\sigma} = c_{i\sigma}^\dagger c_{i\sigma}$ 是粒子数算符</li>
      </ul>

      <h3>相互作用参数</h3>
      <p>系统的物理性质由无量纲参数 $U/t$ 决定：</p>
      <ul>
        <li><strong>弱关联极限</strong> ($U \ll t$)：系统表现为费米液体</li>
        <li><strong>强关联极限</strong> ($U \gg t$)：系统可能发生Mott相变</li>
        <li><strong>中等关联</strong> ($U \sim t$)：出现复杂的多体效应</li>
      </ul>

      <h3>半填充情况</h3>
      <p>在半填充($n = 1$)时，Mott相变最为明显：</p>
      
      <div class="formula">
        <p><strong>Mott-Hubbard能隙：</strong></p>
        <p>$$\Delta_{\text{MH}} = U - W$$</p>
      </div>
      
      <p>其中 $W$ 是能带宽度。当 $U > W$ 时，系统变为Mott绝缘体。</p>
    </section>

    <!-- Mott相变的物理图像 -->
    <section class="physical-picture">
      <h2>Mott相变的物理图像</h2>
      
      <h3>电子局域化</h3>
      <p>Mott相变的核心是电子的局域化过程：</p>
      <ul>
        <li><strong>金属态</strong>：电子可以自由跳跃，形成能带</li>
        <li><strong>Mott绝缘体</strong>：强库仑排斥阻止电子跳跃，电子被局域化</li>
        <li><strong>电荷能隙</strong>：添加或移除电子需要克服能隙 $\Delta$</li>
      </ul>

      <h3>上下Hubbard带</h3>
      <p>在Mott绝缘体中，单粒子谱分裂为两个带：</p>
      
      <div class="formula">
        <p><strong>下Hubbard带(LHB)：</strong> $E_{\text{LHB}} \approx -\frac{W}{2}$</p>
        <p><strong>上Hubbard带(UHB)：</strong> $E_{\text{UHB}} \approx U + \frac{W}{2}$</p>
      </div>
      
      <p>费米能级位于两带之间的能隙中。</p>

      <h3>准粒子共振峰</h3>
      <p>在金属态中，费米能级附近存在准粒子共振峰：</p>
      
      <div class="formula">
        <p>$$A(\omega) = \frac{Z}{\omega - \tilde{\varepsilon}_k + i\Gamma} + \text{非相干部分}$$</p>
      </div>
      
      <p>其中 $Z$ 是准粒子权重，在Mott相变点趋于零。</p>
    </section>

    <!-- 动力学平均场理论详解 -->
    <section class="dmft-detailed">
      <h2>动力学平均场理论详解 (DMFT)</h2>
      
      <div class="content-grid">
        <div class="theory-card">
          <h3>理论基础与映射</h3>
          <p>DMFT将多体晶格问题精确映射到单杂质Anderson模型：</p>
          
          <div class="formula-box">
            <p><strong>晶格Green函数：</strong></p>
            <p>$$G_{ii}(\omega) = \int \frac{d\varepsilon}{\omega + \mu - \varepsilon - \Sigma(\omega)} \rho(\varepsilon)$$</p>
            <p><strong>杂质模型哈密顿量：</strong></p>
            <p>$$H_{\text{imp}} = \varepsilon_d \sum_\sigma n_{d\sigma} + U n_{d\uparrow} n_{d\downarrow} + \sum_{k\sigma} \varepsilon_k c_{k\sigma}^\dagger c_{k\sigma} + \sum_{k\sigma} (V_k c_{k\sigma}^\dagger d_\sigma + \text{h.c.})$$</p>
            <p><strong>自洽条件：</strong></p>
            <p>$$\mathcal{G}_0^{-1}(\omega) = \omega + \mu - \Sigma(\omega) - \int \frac{d\varepsilon \rho(\varepsilon)}{\omega + \mu - \varepsilon - \Sigma(\omega)}$$</p>
          </div>
          
          <p><strong>物理图像：</strong></p>
          <ul>
            <li><strong>局域近似：</strong>忽略空间涨落，保留时间涨落</li>
            <li><strong>自洽场：</strong>每个格点感受到其他格点的平均效应</li>
            <li><strong>量子杂质：</strong>单个相互作用格点耦合到非相互作用电子浴</li>
            <li><strong>因果性：</strong>自能的解析性质保证因果关系</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>求解方法与算法</h3>
          <p>DMFT杂质问题的数值求解技术：</p>
          
          <div class="formula-box">
            <p><strong>连续时间量子蒙特卡罗(CT-QMC)：</strong></p>
            <p>$$Z = \text{Tr}[e^{-\beta H}] = \sum_{n=0}^{\infty} \frac{(-1)^n}{\beta^n n!} \int_0^\beta d\tau_1 \cdots d\tau_n \langle T_\tau H_I(\tau_1) \cdots H_I(\tau_n) \rangle_0$$</p>
            <p><strong>Hirsch-Fye算法：</strong></p>
            <p>$$S_{\text{eff}} = \sum_{i,\tau} \left[c_{i\sigma}^\dagger(\tau) (\partial_\tau - \mu) c_{i\sigma}(\tau) + \lambda \sigma s_i(\tau) n_{i\sigma}(\tau)\right]$$</p>
            <p><strong>数值重整化群(NRG)：</strong></p>
            <p>$$H_N = \Lambda^{(N-1)/2} \sum_{n=0}^{N-1} \Lambda^{-n/2} t_n (f_{n\sigma}^\dagger f_{n+1,\sigma} + \text{h.c.})$$</p>
          </div>
          
          <p><strong>算法特点：</strong></p>
          <ul>
            <li><strong>CT-INT：</strong>相互作用展开，适用于中等相互作用</li>
            <li><strong>CT-HYB：</strong>杂化展开，适用于强相互作用</li>
            <li><strong>NRG：</strong>零温精确解，适用于低能物理</li>
            <li><strong>IPT：</strong>迭代微扰理论，快速但近似</li>
          </ul>
        </div>
      </div>

      <h3>Mott相变的DMFT描述</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>相变机制与序参量</h3>
          <p>DMFT框架下Mott相变的完整描述：</p>
          
          <div class="formula-box">
            <p><strong>准粒子权重：</strong></p>
            <p>$$Z = \left(1 - \frac{\partial \text{Re}\Sigma(\omega)}{\partial \omega}\bigg|_{\omega=0}\right)^{-1}$$</p>
            <p><strong>双占据概率：</strong></p>
            <p>$$D = \langle n_\uparrow n_\downarrow \rangle = -\frac{1}{\beta} \int_0^\beta d\tau G_{\uparrow\downarrow}(\tau) G_{\downarrow\uparrow}(-\tau)$$</p>
            <p><strong>局域磁矩：</strong></p>
            <p>$$\chi_{\text{loc}} = \int_0^\beta d\tau \langle S^z(\tau) S^z(0) \rangle$$</p>
          </div>
          
          <p><strong>相变特征：</strong></p>
          <ul>
            <li><strong>金属相：</strong>$Z > 0$, 费米面处有准粒子峰</li>
            <li><strong>临界点：</strong>$Z \to 0$, 准粒子峰消失</li>
            <li><strong>绝缘体相：</strong>$Z = 0$, 出现Mott能隙</li>
            <li><strong>磁性：</strong>局域磁矩的形成和有序</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>相图与临界行为</h3>
          <p>温度-相互作用强度相图的详细结构：</p>
          
          <div class="formula-box">
            <p><strong>临界相互作用强度：</strong></p>
            <p>$$U_{c1} = \frac{W}{\sqrt{2}}, \quad U_{c2} = W\sqrt{2}$$</p>
            <p><strong>临界温度：</strong></p>
            <p>$$T_c = \frac{U}{4} \left(1 - \frac{U^2}{U_c^2}\right)$$</p>
            <p><strong>Widom标度：</strong></p>
            <p>$$Z \sim |U - U_c|^\beta, \quad \chi \sim |U - U_c|^{-\gamma}$$</p>
          </div>
          
          <p><strong>相图区域：</strong></p>
          <ul>
            <li><strong>金属相：</strong>$U < U_{c1}$, 连续相变</li>
            <li><strong>共存区：</strong>$U_{c1} < U < U_{c2}$, 一阶相变</li>
            <li><strong>绝缘体相：</strong>$U > U_{c2}$, 反铁磁序</li>
            <li><strong>临界端点：</strong>$(U_c, T_c)$处的临界现象</li>
          </ul>
        </div>
      </div>

      <h3>多轨道DMFT与现实材料</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>多轨道Hubbard模型</h3>
          <p>过渡金属氧化物的多轨道描述：</p>
          
          <div class="formula-box">
            <p><strong>多轨道哈密顿量：</strong></p>
            <p>$$H = \sum_{ij,mm',\sigma} t_{ij}^{mm'} c_{im\sigma}^\dagger c_{jm'\sigma} + \frac{1}{2} \sum_{i,mm'nn'} U_{mm'nn'} n_{im\sigma} n_{im'n'\sigma'}$$</p>
            <p><strong>Hund耦合：</strong></p>
            <p>$$H_{\text{Hund}} = -J_H \sum_{i,m \neq m'} \mathbf{S}_{im} \cdot \mathbf{S}_{im'} + J_H \sum_{i,m \neq m'} n_{im\uparrow} n_{im'\downarrow}$$</p>
            <p><strong>轨道选择Mott相变：</strong></p>
            <p>$$Z_m = \left(1 - \frac{\partial \Sigma_m(\omega)}{\partial \omega}\bigg|_{\omega=0}\right)^{-1}$$</p>
          </div>
          
          <p><strong>新奇现象：</strong></p>
          <ul>
            <li><strong>轨道分化：</strong>不同轨道的不同金属化程度</li>
            <li><strong>自旋态转变：</strong>高自旋-低自旋转变</li>
            <li><strong>轨道序：</strong>轨道占据的空间有序</li>
            <li><strong>Hund金属：</strong>强Hund耦合的非费米液体</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>团簇DMFT与空间关联</h3>
          <p>包含短程空间关联的扩展DMFT方法：</p>
          
          <div class="formula-box">
            <p><strong>团簇自能：</strong></p>
            <p>$$\Sigma_{ij}(\omega) = \Sigma_c(\mathbf{k}, \omega) \quad \text{for } |\mathbf{r}_i - \mathbf{r}_j| \leq R_c$$</p>
            <p><strong>动量空间映射：</strong></p>
            <p>$$G(\mathbf{k}, \omega) = \left[\omega + \mu - \varepsilon(\mathbf{k}) - \Sigma_c(\tilde{\mathbf{k}}, \omega)\right]^{-1}$$</p>
            <p><strong>双占据关联：</strong></p>
            <p>$$\langle n_{i\uparrow} n_{j\downarrow} \rangle = \delta_{ij} D + (1-\delta_{ij}) D_{ij}$$</p>
          </div>
          
          <p><strong>方法优势：</strong></p>
          <ul>
            <li><strong>短程关联：</strong>捕获近邻相互作用效应</li>
            <li><strong>赝能隙：</strong>更好描述欠掺杂区域</li>
            <li><strong>d波配对：</strong>非常规超导的起源</li>
            <li><strong>条纹相：</strong>电荷和自旋的空间调制</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 实验观测与材料系统 -->
    <section class="experimental-systems">
      <h2>实验观测与材料系统</h2>
      
      <div class="content-grid">
        <div class="theory-card">
          <h3>过渡金属氧化物</h3>
          <p>Mott相变的典型实验系统：</p>
          
          <div class="formula-box">
            <p><strong>V₂O₃系统：</strong></p>
            <p>$$\rho(T) = \rho_0 \exp\left(\frac{\Delta}{k_B T}\right) \quad \text{(绝缘体相)}$$</p>
            <p>$$\rho(T) = \rho_0 + AT^2 \quad \text{(金属相)}$$</p>
            <p><strong>电阻率跳跃：</strong></p>
            <p>$$\frac{\rho_{\text{ins}}}{\rho_{\text{met}}} \sim 10^6 - 10^8$$</p>
            <p><strong>光学电导率：</strong></p>
            <p>$$\sigma(\omega) = \frac{\omega_p^2}{4\pi} \frac{1/\tau}{(\omega + i/\tau)^2} + \sigma_{\text{MH}}(\omega)$$</p>
          </div>
          
          <p><strong>实验特征：</strong></p>
          <ul>
            <li><strong>电阻率：</strong>相变处电阻率跳跃6-8个数量级</li>
            <li><strong>磁化率：</strong>Curie-Weiss行为 $\chi = C/(T-\theta)$</li>
            <li><strong>比热：</strong>电子比热系数 $\gamma = C/T \to 0$</li>
            <li><strong>光谱：</strong>Mott-Hubbard能隙的直接观测</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>有机导体与分子晶体</h3>
          <p>准一维和准二维有机Mott绝缘体：</p>
          
          <div class="formula-box">
            <p><strong>κ-(BEDT-TTF)₂Cu[N(CN)₂]Cl：</strong></p>
            <p>$$t_\perp/t_\parallel \sim 0.1, \quad U/t \sim 6-8$$</p>
            <p><strong>压力相图：</strong></p>
            <p>$$P_c = P_0 \left(1 - \frac{T}{T_0}\right)^{3/2}$$</p>
            <p><strong>介电常数：</strong></p>
            <p>$$\varepsilon(\omega) = \varepsilon_\infty + \frac{\omega_p^2}{\omega_0^2 - \omega^2 - i\gamma\omega}$$</p>
          </div>
          
          <p><strong>独特性质：</strong></p>
          <ul>
            <li><strong>压力调控：</strong>通过压力连续调节带宽</li>
            <li><strong>几何阻挫：</strong>三角晶格上的反铁磁序</li>
            <li><strong>量子自旋液体：</strong>无磁序的Mott绝缘体</li>
            <li><strong>超导邻近：</strong>Mott绝缘体附近的超导相</li>
          </ul>
        </div>
      </div>

      <h3>冷原子量子模拟</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>光晶格中的Hubbard模型</h3>
          <p>超冷原子系统中Mott相变的量子模拟：</p>
          
          <div class="formula-box">
            <p><strong>光晶格势：</strong></p>
            <p>$$V(\mathbf{r}) = V_0 \sum_i \sin^2(k_L x_i)$$</p>
            <p><strong>隧穿强度：</strong></p>
            <p>$$t = \frac{4}{\sqrt{\pi}} E_R \left(\frac{V_0}{E_R}\right)^{3/4} \exp\left(-2\sqrt{\frac{V_0}{E_R}}\right)$$</p>
            <p><strong>相互作用强度：</strong></p>
            <p>$$U = \frac{4\pi\hbar^2 a_s}{m} \int |\phi(\mathbf{r})|^4 d^3r$$</p>
          </div>
          
          <p><strong>实验优势：</strong></p>
          <ul>
            <li><strong>参数可调：</strong>通过激光强度调节$t$和$U$</li>
            <li><strong>无杂质：</strong>理想的周期性系统</li>
            <li><strong>实时观测：</strong>单原子分辨率成像</li>
            <li><strong>维度控制：</strong>1D、2D、3D系统的实现</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>量子气体显微镜</h3>
          <p>单原子分辨率的Mott相变观测：</p>
          
          <div class="formula-box">
            <p><strong>占据数涨落：</strong></p>
            <p>$$\langle (\Delta n)^2 \rangle = \langle n^2 \rangle - \langle n \rangle^2$$</p>
            <p><strong>压缩率：</strong></p>
            <p>$$\kappa = \frac{1}{n^2} \frac{\partial n}{\partial \mu} = \frac{\langle (\Delta n)^2 \rangle}{n^2 k_B T}$$</p>
            <p><strong>自旋关联：</strong></p>
            <p>$$C_{ij} = \langle S_i^z S_j^z \rangle - \langle S_i^z \rangle \langle S_j^z \rangle$$</p>
          </div>
          
          <p><strong>观测现象：</strong></p>
          <ul>
            <li><strong>Mott壳层：</strong>谐振子势阱中的同心圆结构</li>
            <li><strong>反铁磁关联：</strong>近邻自旋反平行排列</li>
            <li><strong>弦理论：</strong>掺杂Mott绝缘体中的拓扑激发</li>
            <li><strong>动力学：</strong>相变过程的实时演化</li>
          </ul>
        </div>
      </div>

      <h3>先进实验技术</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>角分辨光电子能谱(ARPES)</h3>
          <p>电子结构的直接测量：</p>
          
          <div class="formula-box">
            <p><strong>光电发射强度：</strong></p>
            <p>$$I(\mathbf{k}, \omega) = I_0 |M(\mathbf{k})|^2 f(\omega) A(\mathbf{k}, \omega)$$</p>
            <p><strong>谱函数：</strong></p>
            <p>$$A(\mathbf{k}, \omega) = -\frac{1}{\pi} \frac{\text{Im}\Sigma(\mathbf{k}, \omega)}{[\omega - \varepsilon(\mathbf{k}) - \text{Re}\Sigma(\mathbf{k}, \omega)]^2 + [\text{Im}\Sigma(\mathbf{k}, \omega)]^2}$$</p>
            <p><strong>准粒子峰：</strong></p>
            <p>$$\omega_{qp}(\mathbf{k}) = Z[\varepsilon(\mathbf{k}) + \text{Re}\Sigma(\mathbf{k}, \omega_{qp})]$$</p>
          </div>
          
          <p><strong>观测特征：</strong></p>
          <ul>
            <li><strong>费米面：</strong>金属相中清晰的费米面</li>
            <li><strong>能隙：</strong>Mott绝缘体中的谱权重转移</li>
            <li><strong>Hubbard带：</strong>上下Hubbard带的分离</li>
            <li><strong>准粒子峰：</strong>相变附近的峰强度变化</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>扫描隧道显微镜(STM)</h3>
          <p>局域态密度的空间分辨测量：</p>
          
          <div class="formula-box">
            <p><strong>隧道电流：</strong></p>
            <p>$$I = \frac{4\pi e}{\hbar} \int_{-\infty}^{\infty} d\omega \rho_s(\omega) \rho_t(\omega - eV) [f(\omega) - f(\omega - eV)]$$</p>
            <p><strong>微分电导：</strong></p>
            <p>$$\frac{dI}{dV} \propto \rho_s(eV) \rho_t(0)$$</p>
            <p><strong>局域态密度：</strong></p>
            <p>$$\rho(\mathbf{r}, \omega) = -\frac{1}{\pi} \text{Im} G(\mathbf{r}, \mathbf{r}, \omega)$$</p>
          </div>
          
          <p><strong>应用领域：</strong></p>
          <ul>
            <li><strong>能隙映射：</strong>Mott能隙的空间分布</li>
            <li><strong>杂质效应：</strong>掺杂原子周围的电子态</li>
            <li><strong>相分离：</strong>金属-绝缘体共存区域</li>
            <li><strong>量子阱：</strong>表面态和界面效应</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 理论方法与数值技术 -->
    <section class="theoretical-methods">
      <h2>理论方法与数值技术</h2>
      
      <div class="content-grid">
        <div class="theory-card">
          <h3>变分方法</h3>
          <p>强关联系统的变分处理：</p>
          
          <div class="formula-box">
            <p><strong>Gutzwiller变分：</strong></p>
            <p>$$|\psi_G\rangle = \prod_i (1 - (1-g) n_{i\uparrow} n_{i\downarrow}) |\psi_0\rangle$$</p>
            <p><strong>变分参数：</strong></p>
            <p>$$g = \frac{\langle n_{i\uparrow} n_{i\downarrow} \rangle_G}{\langle n_{i\uparrow} n_{i\downarrow} \rangle_0}$$</p>
            <p><strong>准粒子权重：</strong></p>
            <p>$$Z_G = \frac{2\delta}{1+\delta}, \quad \delta = \sqrt{1-n^2}$$</p>
          </div>
          
          <p><strong>Slave-boson方法：</strong></p>
          <div class="formula-box">
            <p>$$c_{i\sigma} = z_i f_{i\sigma} + p_{i\sigma} d_i$$</p>
            <p>$$z_i^2 + \sum_\sigma p_{i\sigma}^2 + d_i^2 = 1$$</p>
            <p>$$\langle z_i^2 \rangle = 1 - n, \quad \langle d_i^2 \rangle = D$$</p>
          </div>
          
          <p><strong>方法特点：</strong></p>
          <ul>
            <li><strong>物理直观：</strong>明确的准粒子图像</li>
            <li><strong>解析结果：</strong>相变临界点的解析表达</li>
            <li><strong>平均场：</strong>忽略涨落效应</li>
            <li><strong>适用范围：</strong>无限维度下精确</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>数值重整化群(NRG)</h3>
          <p>量子杂质问题的精确求解：</p>
          
          <div class="formula-box">
            <p><strong>Wilson链：</strong></p>
            <p>$$H_N = \Lambda^{(N-1)/2} \sum_{n=0}^{N-1} \Lambda^{-n/2} t_n (f_{n\sigma}^\dagger f_{n+1,\sigma} + \text{h.c.})$$</p>
            <p><strong>对角化：</strong></p>
            <p>$$H_N |n\rangle = E_n |n\rangle$$</p>
            <p><strong>热力学量：</strong></p>
            <p>$$\langle O \rangle = \frac{\text{Tr}[O e^{-\beta H}]}{\text{Tr}[e^{-\beta H}]}$$</p>
          </div>
          
          <p><strong>算法优势：</strong></p>
          <ul>
            <li><strong>零温精确：</strong>基态性质的精确计算</li>
            <li><strong>低能物理：</strong>Kondo效应等低能现象</li>
            <li><strong>动力学：</strong>谱函数的高精度计算</li>
            <li><strong>相变：</strong>量子相变点的精确定位</li>
          </ul>
        </div>
      </div>

      <h3>量子蒙特卡罗方法</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>连续时间QMC</h3>
          <p>有限温度强关联系统的数值求解：</p>
          
          <div class="formula-box">
            <p><strong>路径积分表示：</strong></p>
            <p>$$Z = \int \mathcal{D}[c^\dagger, c] e^{-S[c^\dagger, c]}$$</p>
            <p><strong>相互作用展开(CT-INT)：</strong></p>
            <p>$$S = S_0 + \int_0^\beta d\tau \sum_i U n_{i\uparrow}(\tau) n_{i\downarrow}(\tau)$$</p>
            <p><strong>杂化展开(CT-HYB)：</strong></p>
            <p>$$S = S_{\text{loc}} + \int_0^\beta d\tau \sum_{k\sigma} V_k [c_{k\sigma}^\dagger(\tau) d_\sigma(\tau) + \text{h.c.}]$$</p>
          </div>
          
          <p><strong>算法特点：</strong></p>
          <ul>
            <li><strong>符号问题：</strong>费米子系统的负权重</li>
            <li><strong>温度限制：</strong>低温下计算困难</li>
            <li><strong>解析延拓：</strong>实频谱函数的获取</li>
            <li><strong>统计误差：</strong>蒙特卡罗采样的统计涨落</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>辅助场QMC</h3>
          <p>Hubbard模型的大规模数值模拟：</p>
          
          <div class="formula-box">
            <p><strong>Hubbard-Stratonovich变换：</strong></p>
            <p>$$e^{-\Delta\tau U n_{i\uparrow} n_{i\downarrow}} = \frac{1}{2} \sum_{s_i=\pm 1} e^{\gamma s_i (n_{i\uparrow} - n_{i\downarrow})}$$</p>
            <p><strong>费米子行列式：</strong></p>
            <p>$$\det[I + B_L \cdots B_1], \quad B_l = e^{-\Delta\tau K} e^{V_l}$$</p>
            <p><strong>Green函数：</strong></p>
            <p>$$G = [I + B_L \cdots B_1]^{-1}$$</p>
          </div>
          
          <p><strong>数值挑战：</strong></p>
          <ul>
            <li><strong>符号问题：</strong>掺杂系统的负权重</li>
            <li><strong>数值稳定：</strong>矩阵乘积的数值误差</li>
            <li><strong>系统尺寸：</strong>有限尺寸效应</li>
            <li><strong>临界慢化：</strong>相变附近的长关联时间</li>
          </ul>
        </div>
      </div>

      <h3>张量网络方法</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>密度矩阵重整化群(DMRG)</h3>
          <p>一维强关联系统的精确对角化：</p>
          
          <div class="formula-box">
            <p><strong>矩阵乘积态：</strong></p>
            <p>$$|\psi\rangle = \sum_{\{s_i\}} A^{s_1} A^{s_2} \cdots A^{s_L} |s_1 s_2 \cdots s_L\rangle$$</p>
            <p><strong>约化密度矩阵：</strong></p>
            <p>$$\rho_A = \text{Tr}_B |\psi\rangle\langle\psi|$$</p>
            <p><strong>纠缠熵：</strong></p>
            <p>$$S = -\text{Tr}[\rho_A \log \rho_A] = -\sum_i \lambda_i \log \lambda_i$$</p>
          </div>
          
          <p><strong>算法优势：</strong></p>
          <ul>
            <li><strong>基态精确：</strong>一维系统基态的精确求解</li>
            <li><strong>大系统：</strong>数百个格点的计算</li>
            <li><strong>实时演化：</strong>量子淬火动力学</li>
            <li><strong>有限温度：</strong>纯化态方法</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>投影纠缠对态(PEPS)</h3>
          <p>二维强关联系统的张量网络表示：</p>
          
          <div class="formula-box">
            <p><strong>PEPS表示：</strong></p>
            <p>$$|\psi\rangle = \sum_{\{s_{ij}\}} \text{Tr}[\prod_{ij} A^{s_{ij}}_{ij}] |s_{11} s_{12} \cdots\rangle$$</p>
            <p><strong>收缩算法：</strong></p>
            <p>$$\langle O \rangle = \frac{\langle\psi|O|\psi\rangle}{\langle\psi|\psi\rangle}$$</p>
            <p><strong>环境张量：</strong></p>
            <p>$$E_{ij} = \text{Tr}_{\text{env}} [\prod_{kl \neq ij} A^{s_{kl}}_{kl}]$$</p>
          </div>
          
          <p><strong>计算挑战：</strong></p>
          <ul>
            <li><strong>收缩复杂度：</strong>指数增长的计算复杂度</li>
            <li><strong>近似方法：</strong>环境张量的近似处理</li>
            <li><strong>键维数：</strong>纠缠的有效描述</li>
            <li><strong>优化算法：</strong>变分优化的收敛性</li>
          </ul>
        </div>
      </div>

      <h3>机器学习方法</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>神经网络量子态</h3>
          <p>深度学习在量子多体问题中的应用：</p>
          
          <div class="formula-box">
            <p><strong>神经网络波函数：</strong></p>
            <p>$$\psi(\mathbf{s}) = e^{f(\mathbf{s}; \boldsymbol{\theta})}$$</p>
            <p><strong>变分蒙特卡罗：</strong></p>
            <p>$$E[\boldsymbol{\theta}] = \frac{\langle\psi|H|\psi\rangle}{\langle\psi|\psi\rangle} = \sum_{\mathbf{s}} |\psi(\mathbf{s})|^2 E_{\text{loc}}(\mathbf{s})$$</p>
            <p><strong>梯度下降：</strong></p>
            <p>$$\boldsymbol{\theta}_{n+1} = \boldsymbol{\theta}_n - \eta \nabla_{\boldsymbol{\theta}} E[\boldsymbol{\theta}]$$</p>
          </div>
          
          <p><strong>网络架构：</strong></p>
          <ul>
            <li><strong>受限玻尔兹曼机：</strong>隐层-可见层结构</li>
            <li><strong>卷积神经网络：</strong>平移不变性</li>
            <li><strong>循环神经网络：</strong>序列相关性</li>
            <li><strong>Transformer：</strong>长程关联</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>强化学习与量子控制</h3>
          <p>智能算法在量子系统控制中的应用：</p>
          
          <div class="formula-box">
            <p><strong>Q学习：</strong></p>
            <p>$$Q(s,a) \leftarrow Q(s,a) + \alpha[r + \gamma \max_{a'} Q(s',a') - Q(s,a)]$$</p>
            <p><strong>策略梯度：</strong></p>
            <p>$$\nabla_\theta J(\theta) = \mathbb{E}[\nabla_\theta \log \pi_\theta(a|s) Q(s,a)]$$</p>
            <p><strong>奖励函数：</strong></p>
            <p>$$R = -|E_{\text{target}} - E_{\text{current}}|$$</p>
          </div>
          
          <p><strong>应用领域：</strong></p>
          <ul>
            <li><strong>量子态制备：</strong>目标态的高保真度制备</li>
            <li><strong>绝热演化：</strong>最优控制路径</li>
            <li><strong>量子纠错：</strong>自适应纠错策略</li>
            <li><strong>参数优化：</strong>实验参数的智能调节</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 相关现象与扩展 -->
    <section class="related-phenomena">
      <h2>相关现象与扩展</h2>
      
      <div class="content-grid">
        <div class="theory-card">
          <h3>轨道选择Mott相变</h3>
          <p>多轨道系统中的选择性金属化：</p>
          
          <div class="formula-box">
            <p><strong>多轨道Hubbard模型：</strong></p>
            <p>$$H = \sum_{ij,mm',\sigma} t_{ij}^{mm'} c_{im\sigma}^\dagger c_{jm'\sigma} + \sum_{i,mm'} U_{mm'} n_{im\uparrow} n_{im'\downarrow}$$</p>
            <p><strong>轨道相关准粒子权重：</strong></p>
            <p>$$Z_m = \left(1 - \frac{\partial \text{Re}\Sigma_m(\omega)}{\partial \omega}\bigg|_{\omega=0}\right)^{-1}$$</p>
            <p><strong>轨道占据：</strong></p>
            <p>$$n_m = \langle n_{im\uparrow} + n_{im\downarrow} \rangle$$</p>
          </div>
          
          <p><strong>物理机制：</strong></p>
          <ul>
            <li><strong>晶体场分裂：</strong>不同轨道的能级差异</li>
            <li><strong>Hund耦合：</strong>同一原子内轨道间的交换作用</li>
            <li><strong>带宽差异：</strong>不同轨道的跃迁积分</li>
            <li><strong>相关强度：</strong>轨道相关的库仑排斥</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>掺杂Mott绝缘体</h3>
          <p>载流子掺杂对Mott绝缘体的影响：</p>
          
          <div class="formula-box">
            <p><strong>t-J模型：</strong></p>
            <p>$$H = -t \sum_{\langle ij \rangle, \sigma} \tilde{c}_{i\sigma}^\dagger \tilde{c}_{j\sigma} + J \sum_{\langle ij \rangle} \left(\mathbf{S}_i \cdot \mathbf{S}_j - \frac{1}{4} n_i n_j\right)$$</p>
            <p><strong>空穴掺杂浓度：</strong></p>
            <p>$$\delta = 1 - n = \langle \sum_i (1 - n_i) \rangle / N$$</p>
            <p><strong>反铁磁序参量：</strong></p>
            <p>$$m_{AF} = \frac{1}{N} \sum_i (-1)^i \langle S_i^z \rangle$$</p>
          </div>
          
          <p><strong>相图特征：</strong></p>
          <ul>
            <li><strong>反铁磁相：</strong>$\delta < \delta_c$, 长程磁序</li>
            <li><strong>超导相：</strong>$\delta_c < \delta < \delta_{opt}$, d波配对</li>
            <li><strong>奇异金属：</strong>$\delta > \delta_{opt}$, 非费米液体行为</li>
            <li><strong>赝能隙：</strong>欠掺杂区域的能谱特征</li>
          </ul>
        </div>
      </div>

      <h3>量子临界点与非费米液体</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>量子临界现象</h3>
          <p>Mott相变附近的临界行为：</p>
          
          <div class="formula-box">
            <p><strong>标度律：</strong></p>
            <p>$$\xi \sim |g - g_c|^{-\nu}, \quad \chi \sim |g - g_c|^{-\gamma}$$</p>
            <p><strong>动力学标度：</strong></p>
            <p>$$\omega \sim \xi^{-z}, \quad z = \frac{\gamma}{\nu}$$</p>
            <p><strong>有限温度标度：</strong></p>
            <p>$$F(g, T) = T^{d/z} \tilde{F}((g-g_c)/T^{1/\nu z})$$</p>
          </div>
          
          <p><strong>临界指数：</strong></p>
          <ul>
            <li><strong>关联长度：</strong>$\nu = 1$ (平均场)</li>
            <li><strong>磁化率：</strong>$\gamma = 1$ (DMFT结果)</li>
            <li><strong>动力学指数：</strong>$z = 2$ (扩散行为)</li>
            <li><strong>比热指数：</strong>$\alpha = 2 - d\nu/z$</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>非费米液体行为</h3>
          <p>强关联系统中的异常输运性质：</p>
          
          <div class="formula-box">
            <p><strong>电阻率：</strong></p>
            <p>$$\rho(T) = \rho_0 + AT^\alpha, \quad \alpha \neq 2$$</p>
            <p><strong>比热：</strong></p>
            <p>$$C(T) = \gamma(T) T, \quad \gamma(T) \sim T^{-\beta}$$</p>
            <p><strong>磁化率：</strong></p>
            <p>$$\chi(T) = \chi_0 + BT^{-\delta}$$</p>
          </div>
          
          <p><strong>理论机制：</strong></p>
          <ul>
            <li><strong>量子临界涨落：</strong>临界点附近的软模</li>
            <li><strong>边际费米液体：</strong>对数修正的费米液体</li>
            <li><strong>局域量子临界：</strong>杂质诱导的临界行为</li>
            <li><strong>奇异金属：</strong>线性电阻率和T-线性比热</li>
          </ul>
        </div>
      </div>

      <h3>拓扑Mott绝缘体</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>拓扑不变量与边界态</h3>
          <p>强关联拓扑绝缘体的理论描述：</p>
          
          <div class="formula-box">
            <p><strong>Kane-Mele-Hubbard模型：</strong></p>
            <p>$$H = H_{KM} + U \sum_i n_{i\uparrow} n_{i\downarrow}$$</p>
            <p><strong>Z₂拓扑不变量：</strong></p>
            <p>$$\nu = \frac{1}{2\pi} \int_{BZ} d^2k \, \Omega(\mathbf{k}) \mod 2$$</p>
            <p><strong>边界态色散：</strong></p>
            <p>$$E(k_y) = \pm v_F |k_y|, \quad v_F = \frac{\partial E}{\partial k_y}$$</p>
          </div>
          
          <p><strong>相变序列：</strong></p>
          <ul>
            <li><strong>拓扑绝缘体：</strong>$U < U_{c1}$, 无能隙边界态</li>
            <li><strong>拓扑Mott绝缘体：</strong>$U_{c1} < U < U_{c2}$, 受保护边界态</li>
            <li><strong>平庸Mott绝缘体：</strong>$U > U_{c2}$, 有能隙边界态</li>
            <li><strong>磁性拓扑绝缘体：</strong>磁序破坏时间反演对称</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>分数化激发与任意子</h3>
          <p>强关联拓扑相中的奇异准粒子：</p>
          
          <div class="formula-box">
            <p><strong>自旋液体哈密顿量：</strong></p>
            <p>$$H = \sum_{\langle ij \rangle} J_{ij} \mathbf{S}_i \cdot \mathbf{S}_j + \sum_{\langle\langle ij \rangle\rangle} K_{ij} \mathbf{S}_i \cdot \mathbf{S}_j$$</p>
            <p><strong>分数化：</strong></p>
            <p>$$S_i^+ = f_{i\uparrow}^\dagger f_{i\downarrow}, \quad S_i^z = \frac{1}{2}(n_{i\uparrow} - n_{i\downarrow})$$</p>
            <p><strong>规范场：</strong></p>
            <p>$$H_{\text{eff}} = \sum_{\langle ij \rangle} t_{ij} f_{i\sigma}^\dagger U_{ij} f_{j\sigma} + \text{h.c.}$$</p>
          </div>
          
          <p><strong>拓扑序：</strong></p>
          <ul>
            <li><strong>Z₂自旋液体：</strong>费米子化spinon</li>
            <li><strong>手征自旋液体：</strong>非阿贝尔任意子</li>
            <li><strong>基态简并：</strong>拓扑保护的简并度</li>
            <li><strong>纠缠谱：</strong>边界模式的特征</li>
          </ul>
        </div>
      </div>

      <h3>动力学Mott相变</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>非平衡相变</h3>
          <p>驱动系统中的动力学相变：</p>
          
          <div class="formula-box">
            <p><strong>Floquet哈密顿量：</strong></p>
            <p>$$H_F = H_0 + V(t), \quad V(t+T) = V(t)$$</p>
            <p><strong>有效哈密顿量：</strong></p>
            <p>$$H_{\text{eff}} = \frac{1}{T} \int_0^T dt \, H(t) + \mathcal{O}(\omega^{-1})$$</p>
            <p><strong>加热率：</strong></p>
            <p>$$\dot{E} = \langle \psi(t) | \frac{\partial H}{\partial t} | \psi(t) \rangle$$</p>
          </div>
          
          <p><strong>动力学现象：</strong></p>
          <ul>
            <li><strong>光诱导相变：</strong>超快激光脉冲驱动</li>
            <li><strong>Floquet工程：</strong>周期驱动的有效模型</li>
            <li><strong>预热化：</strong>热化前的中间态</li>
            <li><strong>多体局域化：</strong>无序系统的局域化</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>量子淬火动力学</h3>
          <p>参数突然改变后的时间演化：</p>
          
          <div class="formula-box">
            <p><strong>Loschmidt回声：</strong></p>
            <p>$$L(t) = |\langle \psi_0 | e^{-iH_f t} | \psi_0 \rangle|^2$$</p>
            <p><strong>保真度：</strong></p>
            <p>$$F(t) = |\langle \psi(t) | \psi_{\text{target}} \rangle|^2$$</p>
            <p><strong>纠缠熵增长：</strong></p>
            <p>$$S(t) = -\text{Tr}[\rho_A(t) \log \rho_A(t)]$$</p>
          </div>
          
          <p><strong>动力学相变：</strong></p>
          <ul>
            <li><strong>Kibble-Zurek机制：</strong>缺陷形成的标度律</li>
            <li><strong>动力学相变：</strong>Loschmidt回声的奇点</li>
            <li><strong>热化：</strong>本征态热化假设</li>
            <li><strong>积分性：</strong>可积系统的广义Gibbs系综</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 应用与技术意义 -->
    <section class="applications">
      <h2>应用与技术意义</h2>
      
      <h3>电子器件</h3>
      <ul>
        <li><strong>Mott晶体管</strong>：基于相变的开关器件</li>
        <li><strong>相变存储器</strong>：利用电阻变化存储信息</li>
        <li><strong>神经形态器件</strong>：模拟神经元的开关行为</li>
      </ul>

      <h3>能源材料</h3>
      <ul>
        <li><strong>热电材料</strong>：强关联效应增强热电性能</li>
        <li><strong>透明导电薄膜</strong>：氧化物半导体的应用</li>
        <li><strong>催化剂</strong>：过渡金属氧化物的催化活性</li>
      </ul>

      <h3>量子材料</h3>
      <ul>
        <li><strong>高温超导体</strong>：掺杂Mott绝缘体的超导电性</li>
        <li><strong>量子自旋液体</strong>：几何阻挫的Mott绝缘体</li>
        <li><strong>拓扑绝缘体</strong>：强自旋轨道耦合的作用</li>
      </ul>
    </section>

    <!-- 前沿发展 -->
    <section class="frontiers">
      <h2>前沿发展</h2>
      
      <h3>非平衡Mott相变</h3>
      <ul>
        <li><strong>光诱导相变</strong>：超快激光脉冲驱动的相变</li>
        <li><strong>电场驱动</strong>：强电场下的绝缘体击穿</li>
        <li><strong>动力学相变</strong>：时间依赖的序参量演化</li>
      </ul>

      <h3>机器学习方法</h3>
      <ul>
        <li><strong>神经网络量子态</strong>：变分蒙特卡罗的改进</li>
        <li><strong>相变识别</strong>：机器学习算法识别相边界</li>
        <li><strong>材料设计</strong>：高通量计算筛选</li>
      </ul>

      <h3>拓扑Mott绝缘体</h3>
      <ul>
        <li><strong>拓扑不变量</strong>：强关联系统中的拓扑性质</li>
        <li><strong>边缘态</strong>：拓扑保护的表面态</li>
        <li><strong>分数化激发</strong>：anyonic准粒子</li>
      </ul>

      <h3>多体局域化</h3>
      <ul>
        <li><strong>Anderson局域化</strong>：无序诱导的局域化</li>
        <li><strong>热化抑制</strong>：本征态热化假设的破坏</li>
        <li><strong>量子疤痕</strong>：特殊本征态的非热化行为</li>
      </ul>
    </section>

    <!-- 开放问题与未来方向 -->
    <section class="future">
      <h2>开放问题与未来方向</h2>
      
      <h3>理论挑战</h3>
      <ul>
        <li><strong>符号问题</strong>：量子蒙特卡罗方法的根本限制</li>
        <li><strong>维度效应</strong>：不同维度下Mott相变的普适性</li>
        <li><strong>有限温度相图</strong>：热涨落对相变的影响</li>
        <li><strong>长程相互作用</strong>：库仑相互作用的长程性质</li>
      </ul>

      <h3>实验前沿</h3>
      <ul>
        <li><strong>单原子操控</strong>：扫描隧道显微镜的精确控制</li>
        <li><strong>时间分辨谱学</strong>：飞秒时间尺度的动力学</li>
        <li><strong>人工量子系统</strong>：可编程的量子模拟器</li>
        <li><strong>极端条件</strong>：高压、强磁场下的相变</li>
      </ul>

      <h3>跨学科应用</h3>
      <ul>
        <li><strong>量子计算</strong>：强关联系统的量子优势</li>
        <li><strong>人工智能</strong>：神经网络的物理实现</li>
        <li><strong>生物物理</strong>：蛋白质折叠的相变类比</li>
        <li><strong>社会科学</strong>：集体行为的统计物理模型</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>Mott相变作为强关联电子系统中的核心现象，不仅揭示了电子相互作用的深刻物理内涵，也为理解和设计新型量子材料提供了重要指导。从最初的概念提出到现代的精密理论和实验研究，Mott相变理论已经发展成为凝聚态物理学的重要分支。</p>
      
      <p>动力学平均场理论的发展为Mott相变提供了定量的理论框架，而各种数值方法的进步使得我们能够深入研究强关联系统的复杂行为。实验技术的不断改进，特别是光谱学和输运测量的发展，为理论预言提供了精确的验证。</p>
      
      <p>未来的研究将继续探索Mott相变在非平衡态、拓扑相变、量子信息等前沿领域的应用，为开发新的量子技术和理解复杂量子系统奠定基础。随着机器学习和人工智能技术的引入，Mott相变的研究将迎来新的发展机遇。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MottTransition',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.mott-transition-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #27ae60;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #27ae60;
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
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.hubbard-model {
  border-left: 4px solid #3498db;
}

.physical-picture {
  border-left: 4px solid #9b59b6;
}

.dmft {
  border-left: 4px solid #f39c12;
}

.experimental {
  border-left: 4px solid #e74c3c;
}

.theoretical-methods {
  border-left: 4px solid #1abc9c;
}

.related-phenomena {
  border-left: 4px solid #34495e;
}

.applications {
  border-left: 4px solid #8e44ad;
}

.frontiers {
  border-left: 4px solid #e67e22;
}

.future {
  border-left: 4px solid #e91e63;
}

.conclusion {
  background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .mott-transition-page {
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