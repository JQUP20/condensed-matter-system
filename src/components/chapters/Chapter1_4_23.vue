<template>
  <div class="luttinger-liquid-page">
    <h1>Luttinger液体 (Luttinger Liquid)</h1>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <p>Luttinger液体是一维相互作用费米子系统的低能有效理论，由J.M. Luttinger在1963年首次提出。与三维费米液体不同，一维系统由于相空间的限制和增强的量子涨落，表现出根本不同的物理行为。Luttinger液体理论描述了一维金属的普遍低能性质，其特征是电荷和自旋激发的分离、幂律关联函数以及无能隙的集体激发模式。</p>
      
      <h3>历史发展</h3>
      <ul>
        <li><strong>1963年</strong>：Luttinger提出一维费米子模型的精确解</li>
        <li><strong>1965年</strong>：Mattis和Lieb给出严格的数学证明</li>
        <li><strong>1974年</strong>：Luther和Peschel发展了玻色化技术</li>
        <li><strong>1981年</strong>：Haldane提出Luttinger液体的现代理论框架</li>
        <li><strong>1990年代</strong>：实验上在碳纳米管和量子线中观测到Luttinger液体行为</li>
        <li><strong>2000年代至今</strong>：冷原子系统为Luttinger液体提供了理想的实验平台</li>
      </ul>
    </section>

    <!-- 一维费米子系统的特殊性 -->
    <section class="one-dimensional">
      <h2>一维费米子系统的特殊性</h2>
      
      <h3>相空间限制</h3>
      <p>在一维系统中，费米面退化为两个费米点 $\pm k_F$，这导致了独特的物理性质：</p>
      <ul>
        <li>散射过程受到严格的动量守恒限制</li>
        <li>前向散射和后向散射成为主要的相互作用过程</li>
        <li>准粒子概念在一维系统中失效</li>
      </ul>

      <h3>不稳定性</h3>
      <p>一维金属对各种微扰极其敏感：</p>
      
      <div class="formula">
        <p><strong>Peierls不稳定性：</strong></p>
        <p>$$H_{\text{Peierls}} = \sum_k \varepsilon_k c_k^\dagger c_k + g \sum_k (c_{k+2k_F}^\dagger c_k + \text{h.c.})$$</p>
      </div>
      
      <p>其中 $g$ 是电子-声子耦合强度，$2k_F$ 是嵌套矢量。</p>

      <h3>量子涨落的增强</h3>
      <p>一维系统中的量子涨落比高维系统更强，导致：</p>
      <ul>
        <li>长程序的抑制</li>
        <li>关联函数的幂律衰减</li>
        <li>临界行为的普遍性</li>
      </ul>
    </section>

    <!-- 玻色化理论详解 -->
    <section class="bosonization-detailed">
      <h2>玻色化理论详解</h2>
      <div class="content-grid">
        <div class="theory-card">
          <h3>Jordan-Wigner变换</h3>
          <p>玻色化的数学基础来自Jordan-Wigner变换：</p>
          
          <div class="formula-box">
            <p><strong>变换关系：</strong></p>
            <KatexElement expression="c_j = \\exp\\left(i\\pi \\sum_{l<j} c_l^\\dagger c_l\\right) \\sigma_j^-" :inline="false" />
            <p><strong>连续极限：</strong></p>
            <p>$$\psi_R(x) = \frac{\eta_R}{\sqrt{2\pi a}} \exp\left[i\sqrt{\pi}(\phi_R(x) + \theta_R(x))\right]$$</p>
            <p>$$\psi_L(x) = \frac{\eta_L}{\sqrt{2\pi a}} \exp\left[i\sqrt{\pi}(\phi_L(x) - \theta_L(x))\right]$$</p>
          </div>
          
          <p><strong>Klein因子：</strong></p>
          <ul>
            <li>$\eta_{R,L}$ 是Klein因子，保证反对易关系</li>
            <li>$\{\eta_R, \eta_L\} = 0$, $\eta_{R,L}^2 = 1$</li>
            <li>对于多个费米子种类，Klein因子矩阵更复杂</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>对易关系与算符代数</h3>
          <p>玻色场满足的对易关系：</p>
          
          <div class="formula-box">
            <p><strong>基本对易关系：</strong></p>
            <p>$$[\phi_\alpha(x), \partial_y \theta_\beta(y)] = i\pi \delta_{\alpha\beta} \delta(x-y)$$</p>
            <p>$$[\phi_\alpha(x), \phi_\beta(y)] = [\theta_\alpha(x), \theta_\beta(y)] = 0$$</p>
            <p><strong>顶点算符：</strong></p>
            <p>$$V_{\alpha\beta}(x) = :e^{i\alpha\phi(x) + i\beta\theta(x)}:$$</p>
            <p><strong>OPE展开：</strong></p>
            <p>$$V_{\alpha\beta}(x) V_{\gamma\delta}(0) \sim |x|^{\alpha\gamma + \beta\delta} V_{\alpha+\gamma,\beta+\delta}(0)$$</p>
          </div>
          
          <p>这些关系构成了Kac-Moody代数的基础。</p>
        </div>
      </div>

      <h3>多组分系统的玻色化</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>SU(N)对称性</h3>
          <p>具有SU(N)内部对称性的系统：</p>
          
          <div class="formula-box">
            <p><strong>费米子场：</strong></p>
            <p>$$\psi_{R,\alpha}(x) = \frac{\eta_\alpha}{\sqrt{2\pi a}} \exp\left[i\sqrt{\pi}(\phi_0(x) + \phi_\alpha(x) + \theta_0(x) + \theta_\alpha(x))\right]$$</p>
            <p><strong>电荷密度：</strong></p>
            <p>$$\rho_\alpha(x) = \frac{1}{\sqrt{\pi}} \partial_x \phi_\alpha(x)$$</p>
            <p><strong>流密度：</strong></p>
            <p>$$j_\alpha(x) = \frac{1}{\sqrt{\pi}} \partial_x \theta_\alpha(x)$$</p>
          </div>
          
          <p>其中 $\alpha = 0, 1, ..., N-1$ 标记不同的组分。</p>
        </div>
        
        <div class="theory-card">
          <h3>非阿贝尔玻色化</h3>
          <p>对于具有非阿贝尔对称性的系统：</p>
          
          <div class="formula-box">
            <p><strong>Wess-Zumino-Witten模型：</strong></p>
            <p>$$S = \frac{k}{4\pi} \int d^2x \text{Tr}[(\partial_\mu g^{-1})(\partial^\mu g)] + \frac{k}{12\pi} \int d^3x \epsilon^{\mu\nu\rho} \text{Tr}[g^{-1}\partial_\mu g \cdot g^{-1}\partial_\nu g \cdot g^{-1}\partial_\rho g]$$</p>
            <p><strong>流代数：</strong></p>
            <p>$$J^a_\mu(x) = -\frac{k}{2\pi} \text{Tr}[T^a g^{-1} \partial_\mu g]$$</p>
          </div>
          
          <p>这种方法适用于描述具有SU(N)或其他李群对称性的强关联系统。</p>
        </div>
      </div>

      <h3>共形场论联系</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>Virasoro代数</h3>
          <p>玻色化理论与共形场论的深刻联系：</p>
          
          <div class="formula-box">
            <p><strong>能量-动量张量：</strong></p>
            <p>$$T(z) = -\frac{1}{2} :(\partial \phi)^2: = -\frac{1}{2} \sum_{n} \alpha_{-n} \alpha_n z^{-n-2}$$</p>
            <p><strong>Virasoro生成元：</strong></p>
            <p>$$L_n = \frac{1}{2} \sum_{m} :\alpha_{n-m} \alpha_m:$$</p>
            <p><strong>中心荷：</strong></p>
            <p>$$c = 1 \quad \text{(单个玻色子)}$$</p>
          </div>
          
          <p><strong>物理意义：</strong></p>
          <ul>
            <li>$c = 1$：自由玻色子的中心荷</li>
            <li>$c = 1/2$：Majorana费米子的中心荷</li>
            <li>$c$定理：RG流中中心荷单调递减</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>初级场与标度维度</h3>
          <p>共形场论中的初级场分类：</p>
          
          <div class="formula-box">
            <p><strong>顶点算符的标度维度：</strong></p>
            <p>$$\Delta_{\alpha,\beta} = \frac{\alpha^2}{2} + \frac{\beta^2}{2}$$</p>
            <p><strong>费米子算符：</strong></p>
            <p>$$\Delta_{\psi} = \frac{1}{2}\left(\frac{1}{4} + \frac{1}{4}\right) = \frac{1}{4}$$</p>
            <p><strong>密度算符：</strong></p>
            <p>$$\Delta_{\rho} = \frac{1}{2}(1 + 0) = \frac{1}{2}$$</p>
          </div>
          
          <p>这些标度维度决定了关联函数的幂律行为。</p>
        </div>
      </div>
    </section>

    <!-- Luttinger液体哈密顿量 -->
    <section class="hamiltonian">
      <h2>Luttinger液体哈密顿量</h2>
      
      <h3>有效哈密顿量</h3>
      <p>玻色化后的Luttinger液体哈密顿量为：</p>
      
      <div class="formula">
        <p>$$H = H_c + H_s$$</p>
        <p>$$H_c = \frac{v_c}{2\pi} \int dx [K_c (\partial_x \theta_c)^2 + \frac{1}{K_c} (\partial_x \phi_c)^2]$$</p>
        <p>$$H_s = \frac{v_s}{2\pi} \int dx [K_s (\partial_x \theta_s)^2 + \frac{1}{K_s} (\partial_x \phi_s)^2]$$</p>
      </div>
      
      <p>其中：</p>
      <ul>
        <li>$v_{c,s}$ 是电荷和自旋激发的速度</li>
        <li>$K_{c,s}$ 是Luttinger参数，描述相互作用强度</li>
      </ul>

      <h3>Luttinger参数</h3>
      <p>Luttinger参数与微观相互作用的关系：</p>
      
      <div class="formula">
        <p>$$K_c = \sqrt{\frac{\pi v_F + g_4 - g_2}{\pi v_F + g_4 + g_2}}$$</p>
        <p>$$K_s = \sqrt{\frac{\pi v_F + g_4 + g_2}{\pi v_F + g_4 - g_2}}$$</p>
      </div>
      
      <p>其中 $g_2$ 和 $g_4$ 分别是后向散射和前向散射的耦合常数。</p>

      <h3>自由费米子极限</h3>
      <p>当相互作用消失时，$K_c = K_s = 1$，系统回到自由费米子行为。</p>
    </section>

    <!-- 关联函数与谱函数 -->
    <section class="correlations">
      <h2>关联函数与谱函数</h2>
      
      <h3>单粒子格林函数</h3>
      <p>Luttinger液体的单粒子格林函数表现出非费米液体行为：</p>
      
      <div class="formula">
        <p>$$G(x,t) = \langle \psi^\dagger(x,t) \psi(0,0) \rangle \sim \frac{1}{(x-v_F t + i\delta)^{\alpha}}$$</p>
      </div>
      
      <p>其中反常维度为：</p>
      
      <div class="formula">
        <p>$$\alpha = \frac{1}{2}\left(\frac{1}{K_c} + K_c - 2\right)$$</p>
      </div>

      <h3>谱函数</h3>
      <p>单粒子谱函数在费米面附近表现出幂律行为：</p>
      
      <div class="formula">
        <p>$$A(k,\omega) \sim |\omega - v_F(k-k_F)|^{\alpha}$$</p>
      </div>
      
      <p>这与费米液体的 $\delta$ 函数峰形成鲜明对比。</p>

      <h3>密度-密度关联函数</h3>
      <p>电荷密度关联函数表现出振荡衰减：</p>
      
      <div class="formula">
        <p>$$\langle \rho(x) \rho(0) \rangle \sim \frac{\cos(2k_F x)}{x^{2K_c}}$$</p>
      </div>

      <h3>超导关联函数</h3>
      <p>配对关联函数的行为取决于Luttinger参数：</p>
      
      <div class="formula">
        <p>$$\langle \psi(x) \psi(0) \rangle \sim \frac{1}{x^{1/K_c}}$$</p>
      </div>
      
      <p>当 $K_c > 1$ 时，超导关联占主导；当 $K_c < 1$ 时，电荷密度波关联占主导。</p>
    </section>

    <!-- 电荷-自旋分离 -->
    <section class="spin-charge-separation">
      <h2>电荷-自旋分离</h2>
      
      <h3>基本概念</h3>
      <p>Luttinger液体的一个重要特征是电荷和自旋激发的分离，它们以不同的速度传播：</p>
      
      <div class="formula">
        <p>$$v_c = v_F \sqrt{(1 + g_4/\pi v_F)^2 - (g_2/\pi v_F)^2}$$</p>
        <p>$$v_s = v_F \sqrt{1 + g_4/\pi v_F}$$</p>
      </div>

      <h3>实验观测</h3>
      <p>电荷-自旋分离可以通过以下实验技术观测：</p>
      <ul>
        <li><strong>角分辨光电子谱(ARPES)</strong>：观测到分离的电荷和自旋激发</li>
        <li><strong>隧道谱</strong>：测量态密度的幂律行为</li>
        <li><strong>输运测量</strong>：电导的温度依赖性</li>
        <li><strong>中子散射</strong>：直接观测自旋激发</li>
      </ul>

      <h3>物理图像</h3>
      <p>在Luttinger液体中，电子的添加或移除会产生：</p>
      <ul>
        <li>一个携带电荷 $e$ 的holon，以速度 $v_c$ 传播</li>
        <li>一个携带自旋 $1/2$ 的spinon，以速度 $v_s$ 传播</li>
      </ul>
    </section>

    <!-- 输运性质 -->
    <section class="transport">
      <h2>输运性质</h2>
      
      <h3>电导率</h3>
      <p>纯净Luttinger液体的直流电导率为：</p>
      
      <div class="formula">
        <p>$$\sigma = \frac{e^2}{h} \cdot 2 = \frac{2e^2}{h}$$</p>
      </div>
      
      <p>这是量子化的电导，与相互作用强度无关。</p>

      <h3>杂质散射</h3>
      <p>单个杂质对Luttinger液体的影响取决于Luttinger参数：</p>
      
      <div class="formula">
        <p><strong>相关长度：</strong></p>
        <p>$$\xi \sim a \left(\frac{E_F}{V_0}\right)^{1/(2K_c-1)}$$</p>
      </div>
      
      <p>其中 $V_0$ 是杂质势强度。当 $K_c < 1/2$ 时，杂质是相关的；当 $K_c > 1/2$ 时，杂质是不相关的。</p>

      <h3>有限温度效应</h3>
      <p>温度对输运性质的影响表现为：</p>
      
      <div class="formula">
        <p>$$\sigma(T) = \sigma_0 \left(1 + \text{const} \cdot T^{2K_c-2}\right)$$</p>
      </div>
    </section>

    <!-- 实验实现与材料系统 -->
    <section class="experimental-detailed">
      <h2>实验实现与材料系统</h2>
      <div class="content-grid">
        <div class="theory-card">
          <h3>碳纳米管系统</h3>
          <p>单壁碳纳米管是研究Luttinger液体的理想平台：</p>
          
          <div class="formula-box">
            <p><strong>能带结构：</strong></p>
            <p>$$E(k) = \pm \frac{\sqrt{3}}{2} t \sqrt{1 + 4\cos\left(\frac{\sqrt{3}ka}{2}\right)\cos\left(\frac{ka}{2}\right) + 4\cos^2\left(\frac{ka}{2}\right)}$$</p>
            <p><strong>Luttinger参数：</strong></p>
            <p>$$K_c \approx 0.2-0.3, \quad K_s = 1$$</p>
            <p><strong>隧道态密度：</strong></p>
            <p>$$\nu(E) \propto |E|^{\alpha}, \quad \alpha = \frac{1}{K_c} + K_c - 2$$</p>
          </div>
          
          <p><strong>实验技术：</strong></p>
          <ul>
            <li><strong>扫描隧道谱：</strong>直接测量态密度的幂律行为</li>
            <li><strong>输运测量：</strong>电导的温度和偏压依赖性</li>
            <li><strong>光学吸收：</strong>激子效应和选择定则</li>
            <li><strong>拉曼散射：</strong>声子模式和电子-声子耦合</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>量子霍尔边缘态</h3>
          <p>分数量子霍尔效应的边缘态表现出Luttinger液体行为：</p>
          
          <div class="formula-box">
            <p><strong>边缘态哈密顿量：</strong></p>
            <p>$$H = \frac{v}{4\pi} \int dx \left[K(\partial_x \phi)^2 + \frac{1}{K}(\partial_x \theta)^2\right]$$</p>
            <p><strong>填充因子关系：</strong></p>
            <p>$$\nu = \frac{1}{K}, \quad K = \frac{1}{2m+1}$$</p>
            <p><strong>隧道电导：</strong></p>
            <p>$$G(V,T) \propto V^{2K-2} f(eV/k_BT)$$</p>
          </div>
          
          <p><strong>实验观测：</strong></p>
          <ul>
            <li><strong>点接触隧道：</strong>幂律I-V特性</li>
            <li><strong>边缘态干涉：</strong>Fabry-Perot振荡</li>
            <li><strong>噪声测量：</strong>散粒噪声的非高斯统计</li>
            <li><strong>热输运：</strong>热霍尔效应</li>
          </ul>
        </div>
      </div>

      <h3>冷原子量子模拟</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>一维光晶格系统</h3>
          <p>超冷原子在一维光晶格中的Luttinger液体实现：</p>
          
          <div class="formula-box">
            <p><strong>Bose-Hubbard模型：</strong></p>
            <p>$$H = -t\sum_{\langle i,j \rangle} (b_i^\dagger b_j + \text{h.c.}) + \frac{U}{2}\sum_i n_i(n_i-1) - \mu\sum_i n_i$$</p>
            <p><strong>低能有效理论：</strong></p>
            <p>$$H = \frac{v}{2\pi} \int dx \left[K(\partial_x \theta)^2 + \frac{1}{K}(\partial_x \phi)^2\right]$$</p>
            <p><strong>Luttinger参数：</strong></p>
            <p>$$K = \sqrt{\frac{\pi^2 n^2/m^*}{U n}} = \pi\sqrt{\frac{n}{m^* U}}$$</p>
          </div>
          
          <p><strong>实验控制：</strong></p>
          <ul>
            <li><strong>可调相互作用：</strong>Feshbach共振调节散射长度</li>
            <li><strong>光晶格深度：</strong>控制隧道强度和局域化</li>
            <li><strong>原子数密度：</strong>精确控制填充因子</li>
            <li><strong>实时成像：</strong>量子气体显微镜观测</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>费米子冷原子系统</h3>
          <p>一维费米气体的Luttinger液体物理：</p>
          
          <div class="formula-box">
            <p><strong>Gaudin-Yang模型：</strong></p>
            <p>$$H = -t\sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + U\sum_i n_{i\uparrow} n_{i\downarrow}$$</p>
            <p><strong>精确解：</strong></p>
            <KatexElement expression="E = \\sum_{j=1}^N \\frac{k_j^2}{2m} - \\frac{2c}{L} \\sum_{i<j} \\frac{1}{(k_i - k_j)^2 + c^2}" :inline="false" />
            <p><strong>相互作用参数：</strong></p>
            <p>$$c = \frac{mU}{2}, \quad \gamma = \frac{2c}{\pi n}$$</p>
          </div>
          
          <p><strong>实验测量：</strong></p>
          <ul>
            <li><strong>动量分布：</strong>飞行时间成像</li>
            <li><strong>关联函数：</strong>密度-密度关联测量</li>
            <li><strong>激发谱：</strong>Bragg谱学</li>
            <li><strong>输运性质：</strong>原子流和扩散</li>
          </ul>
        </div>
      </div>

      <h3>固体材料中的实现</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>准一维有机导体</h3>
          <p>(TMTSF)₂X和(TMTTF)₂X系列化合物：</p>
          
          <div class="formula-box">
            <p><strong>紧束缚模型：</strong></p>
            <p>$$H = -t_a \sum_{i,\sigma} (c_{i+1,\sigma}^\dagger c_{i,\sigma} + \text{h.c.}) - t_b \sum_{i,\sigma} (c_{i,\sigma}^\dagger c_{i+N_a,\sigma} + \text{h.c.})$$</p>
            <p><strong>各向异性比：</strong></p>
            <p>$$\frac{t_b}{t_a} \sim 0.1-0.01$$</p>
            <p><strong>相互作用强度：</strong></p>
            <p>$$\frac{U}{t_a} \sim 1-2$$</p>
          </div>
          
          <p><strong>相图特征：</strong></p>
          <ul>
            <li><strong>高温：</strong>Luttinger液体金属相</li>
            <li><strong>中温：</strong>自旋密度波或电荷密度波</li>
            <li><strong>低温：</strong>超导或反铁磁绝缘体</li>
            <li><strong>高压：</strong>超导相的出现</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>过渡金属氧化物链</h3>
          <p>Sr₂CuO₃和SrCuO₂等准一维铜氧化物：</p>
          
          <div class="formula-box">
            <p><strong>Hubbard模型：</strong></p>
            <p>$$H = -t\sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + U\sum_i n_{i\uparrow} n_{i\downarrow}$$</p>
            <p><strong>自旋交换：</strong></p>
            <p>$$J = \frac{4t^2}{U}, \quad \frac{J}{t} \sim 0.3-0.4$$</p>
            <p><strong>电荷间隙：</strong></p>
            <p>$$\Delta_c \sim U - 4t \sim 1-2 \text{ eV}$$</p>
          </div>
          
          <p><strong>实验特征：</strong></p>
          <ul>
            <li><strong>ARPES：</strong>无准粒子峰，连续谱</li>
            <li><strong>光学电导：</strong>中红外吸收峰</li>
            <li><strong>NMR：</strong>自旋-晶格弛豫率</li>
            <li><strong>中子散射：</strong>自旋激发连续谱</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 数值方法与计算技术 -->
    <section class="numerical-methods-detailed">
      <h2>数值方法与计算技术</h2>
      
      <div class="content-grid">
        <div class="theory-card">
          <h3>密度矩阵重整化群(DMRG)</h3>
          <p>DMRG是研究一维强关联系统的最精确方法：</p>
          
          <div class="formula-box">
            <p><strong>基本思想：</strong></p>
            <p>$$|\psi\rangle = \sum_{\{s_i\}} \psi(s_1, s_2, \ldots, s_L) |s_1, s_2, \ldots, s_L\rangle$$</p>
            <p><strong>矩阵乘积态(MPS)表示：</strong></p>
            <p>$$\psi(s_1, \ldots, s_L) = \text{Tr}[A^{s_1} A^{s_2} \cdots A^{s_L}]$$</p>
            <p><strong>纠缠熵：</strong></p>
            <p>$$S = -\text{Tr}[\rho_A \ln \rho_A], \quad S \sim \frac{c}{3}\ln L + \text{const}$$</p>
          </div>
          
          <p><strong>算法优势：</strong></p>
          <ul>
            <li><strong>高精度：</strong>可达到机器精度的基态计算</li>
            <li><strong>大系统：</strong>可处理数千个格点的系统</li>
            <li><strong>动力学：</strong>时间演化和激发态计算</li>
            <li><strong>有限温度：</strong>纯化方法和辅助场技术</li>
          </ul>
          
          <p><strong>应用实例：</strong></p>
          <ul>
            <li><strong>Hubbard模型：</strong>Mott相变和自旋液体相</li>
            <li><strong>Heisenberg模型：</strong>自旋链的基态和激发</li>
            <li><strong>扩展Hubbard模型：</strong>电荷密度波相</li>
            <li><strong>t-J模型：</strong>掺杂Mott绝缘体</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>量子蒙特卡罗方法</h3>
          <p>QMC方法在一维系统中的应用和局限：</p>
          
          <div class="formula-box">
            <p><strong>路径积分表示：</strong></p>
            <p>$$Z = \text{Tr}[e^{-\beta H}] = \int \mathcal{D}[\phi] e^{-S[\phi]}$$</p>
            <p><strong>Suzuki-Trotter分解：</strong></p>
            <p>$$e^{-\beta H} = \lim_{M \to \infty} \left(e^{-\Delta\tau H}\right)^M$$</p>
            <p><strong>符号问题：</strong></p>
            <p>$$\langle O \rangle = \frac{\sum_C w_C O_C \text{sign}(w_C)}{\sum_C |w_C| \text{sign}(w_C)}$$</p>
          </div>
          
          <p><strong>具体方法：</strong></p>
          <ul>
            <li><strong>确定性QMC：</strong>无符号问题的玻色系统</li>
            <li><strong>辅助场QMC：</strong>Hubbard-Stratonovich变换</li>
            <li><strong>连续时间QMC：</strong>相互作用展开方法</li>
            <li><strong>量子Wang-Landau：</strong>态密度采样</li>
          </ul>
          
          <p><strong>应用限制：</strong></p>
          <ul>
            <li><strong>符号问题：</strong>费米子系统的指数复杂度</li>
            <li><strong>有限尺寸效应：</strong>需要外推到热力学极限</li>
            <li><strong>临界慢化：</strong>相变点附近的长关联时间</li>
            <li><strong>动力学性质：</strong>解析延拓的困难</li>
          </ul>
        </div>
      </div>

      <h3>张量网络方法</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>矩阵乘积算符(MPO)</h3>
          <p>哈密顿量和算符的高效表示：</p>
          
          <div class="formula-box">
            <p><strong>MPO表示：</strong></p>
            <p>$$H = \sum_{\{s,s'\}} H_{s_1s_1',\ldots,s_Ls_L'} |s_1,\ldots,s_L\rangle\langle s_1',\ldots,s_L'|$$</p>
            <p>$$H_{s_1s_1',\ldots,s_Ls_L'} = \text{Tr}[W^{s_1s_1'} W^{s_2s_2'} \cdots W^{s_Ls_L'}]$$</p>
            <p><strong>键维数：</strong></p>
            <p>$$\chi_{\text{MPO}} = \max_i \dim(W^{s_is_i'})$$</p>
          </div>
          
          <p><strong>算法应用：</strong></p>
          <ul>
            <li><strong>基态搜索：</strong>变分MPS优化</li>
            <li><strong>时间演化：</strong>TEBD和TDVP方法</li>
            <li><strong>有限温度：</strong>纯化和METTS方法</li>
            <li><strong>开放系统：</strong>Lindblad主方程</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>机器学习方法</h3>
          <p>神经网络量子态和深度学习技术：</p>
          
          <div class="formula-box">
            <p><strong>神经网络量子态：</strong></p>
            <p>$$|\psi\rangle = \sum_{\sigma} \psi_\theta(\sigma) |\sigma\rangle$$</p>
            <KatexElement expression="\\psi_\\theta(\\sigma) = \\exp\\left[\\sum_i a_i \\sigma_i + \\sum_{i<j} W_{ij} \\sigma_i \\sigma_j + \\ldots\\right]" :inline="false" />
            <p><strong>变分蒙特卡罗：</strong></p>
            <p>$$E[\theta] = \frac{\langle \psi_\theta | H | \psi_\theta \rangle}{\langle \psi_\theta | \psi_\theta \rangle}$$</p>
          </div>
          
          <p><strong>网络架构：</strong></p>
          <ul>
            <li><strong>受限玻尔兹曼机：</strong>隐藏层-可见层结构</li>
            <li><strong>卷积神经网络：</strong>平移不变性</li>
            <li><strong>循环神经网络：</strong>序列相关性</li>
            <li><strong>Transformer：</strong>长程关联</li>
          </ul>
          
          <p><strong>优化技术：</strong></p>
          <ul>
            <li><strong>随机梯度下降：</strong>参数优化</li>
            <li><strong>自然梯度：</strong>几何优化</li>
            <li><strong>Adam优化器：</strong>自适应学习率</li>
            <li><strong>预条件：</strong>加速收敛</li>
          </ul>
        </div>
      </div>

      <h3>精确对角化与Bethe Ansatz</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>精确对角化方法</h3>
          <p>小系统的精确求解技术：</p>
          
          <div class="formula-box">
            <p><strong>Hilbert空间维数：</strong></p>
            <p>$$\dim(\mathcal{H}) = \binom{L}{N} \times 2^N \quad \text{(自旋-轨道系统)}$$</p>
            <p><strong>Lanczos算法：</strong></p>
            <p>$$H |v_n\rangle = \alpha_n |v_n\rangle + \beta_{n+1} |v_{n+1}\rangle + \beta_n |v_{n-1}\rangle$$</p>
            <p><strong>Davidson方法：</strong></p>
            <p>$$\Delta E_n = \frac{\langle \psi_n | H - E_n | \psi_n \rangle}{\langle \psi_n | \psi_n \rangle}$$</p>
          </div>
          
          <p><strong>对称性利用：</strong></p>
          <ul>
            <li><strong>平移对称性：</strong>动量量子数分块</li>
            <li><strong>自旋旋转：</strong>总自旋量子数</li>
            <li><strong>粒子数守恒：</strong>填充数分块</li>
            <li><strong>反射对称性：</strong>宇称量子数</li>
          </ul>
          
          <p><strong>应用范围：</strong></p>
          <ul>
            <li><strong>系统尺寸：</strong>通常L ≤ 20-30</li>
            <li><strong>基态性质：</strong>能量、关联函数</li>
            <li><strong>激发谱：</strong>能隙和色散关系</li>
            <li><strong>动力学：</strong>谱函数和输运系数</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>Bethe Ansatz方法</h3>
          <p>可积模型的精确解析解：</p>
          
          <div class="formula-box">
            <p><strong>Bethe方程：</strong></p>
            <p>$$e^{ik_j L} = \prod_{l \neq j} \frac{k_j - k_l + ic}{k_j - k_l - ic}$$</p>
            <p><strong>能量本征值：</strong></p>
            <KatexElement expression="E = \\sum_{j=1}^N \\frac{k_j^2}{2m} - \\frac{2c}{L} \\sum_{i<j} \\frac{1}{(k_i - k_j)^2 + c^2}" :inline="false" />
            <p><strong>热力学Bethe Ansatz：</strong></p>
            <p>$$\rho(k) + \int_{-\infty}^{\infty} dk' K(k-k') \rho(k') = \frac{1}{2\pi}$$</p>
          </div>
          
          <p><strong>可积模型：</strong></p>
          <ul>
            <li><strong>XXZ自旋链：</strong>各向异性Heisenberg模型</li>
            <li><strong>Hubbard模型：</strong>一维情况的精确解</li>
            <li><strong>t-J模型：</strong>强关联极限</li>
            <li><strong>sine-Gordon模型：</strong>连续场论</li>
          </ul>
          
          <p><strong>物理量计算：</strong></p>
          <ul>
            <li><strong>基态能量：</strong>热力学极限</li>
            <li><strong>关联函数：</strong>代数Bethe Ansatz</li>
            <li><strong>形状因子：</strong>激发态矩阵元</li>
            <li><strong>有限温度：</strong>Yang-Yang热力学</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 前沿发展与应用 -->
    <section class="frontier-applications">
      <h2>前沿发展与应用</h2>
      
      <div class="content-grid">
        <div class="theory-card">
          <h3>拓扑Luttinger液体</h3>
          <p>拓扑保护的一维系统中的Luttinger液体行为：</p>
          
          <div class="formula-box">
            <p><strong>拓扑边缘态：</strong></p>
            <p>$$H_{\text{edge}} = v_F \sum_{\sigma} \sigma \psi_{\sigma}^\dagger(x) (-i\partial_x) \psi_{\sigma}(x)$$</p>
            <p><strong>螺旋Luttinger液体：</strong></p>
            <p>$$H = \frac{v}{4\pi} \int dx \left[(\partial_x \phi_c)^2 + (\partial_x \phi_s)^2\right]$$</p>
            <p><strong>拓扑保护：</strong></p>
            <p>$$\mathcal{Z}_2 = (-1)^{\nu_{\text{occ}}}$$</p>
          </div>
          
          <p><strong>物理实现：</strong></p>
          <ul>
            <li><strong>量子自旋霍尔边缘：</strong>HgTe/CdTe量子阱</li>
            <li><strong>拓扑绝缘体表面：</strong>Bi₂Se₃族材料</li>
            <li><strong>Majorana费米子：</strong>拓扑超导体边缘</li>
            <li><strong>分数化激发：</strong>自旋-电荷分离</li>
          </ul>
          
          <p><strong>实验特征：</strong></p>
          <ul>
            <li><strong>量子化电导：</strong>$G = 2e^2/h$的整数倍</li>
            <li><strong>自旋-动量锁定：</strong>ARPES观测</li>
            <li><strong>背散射抑制：</strong>时间反演对称性保护</li>
            <li><strong>非局域关联：</strong>纠缠熵的对数增长</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>非平衡Luttinger液体</h3>
          <p>驱动和耗散下的一维系统动力学：</p>
          
          <div class="formula-box">
            <p><strong>Lindblad主方程：</strong></p>
            <p>$$\frac{d\rho}{dt} = -i[H, \rho] + \sum_\alpha \left(L_\alpha \rho L_\alpha^\dagger - \frac{1}{2}\{L_\alpha^\dagger L_\alpha, \rho\}\right)$$</p>
            <p><strong>Keldysh场论：</strong></p>
            <p>$$S = \int dt dx \left[\psi^\dagger \partial_t \psi - H[\psi^\dagger, \psi]\right]$$</p>
            <p><strong>稳态分布：</strong></p>
            <p>$$\rho_{\text{ss}} = \lim_{t \to \infty} e^{\mathcal{L}t} \rho(0)$$</p>
          </div>
          
          <p><strong>驱动机制：</strong></p>
          <ul>
            <li><strong>周期驱动：</strong>Floquet工程</li>
            <li><strong>化学势偏压：</strong>非平衡输运</li>
            <li><strong>温度梯度：</strong>热输运和热电效应</li>
            <li><strong>光场驱动：</strong>超快动力学</li>
          </ul>
          
          <p><strong>新奇现象：</strong></p>
          <ul>
            <li><strong>预热化：</strong>局域平衡的建立</li>
            <li><strong>多体局域化：</strong>遍历性破缺</li>
            <li><strong>时间晶体：</strong>离散时间平移对称性破缺</li>
            <li><strong>量子疤痕：</strong>非遍历本征态</li>
          </ul>
        </div>
      </div>

      <h3>量子技术应用</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>量子计算与模拟</h3>
          <p>Luttinger液体在量子信息中的应用：</p>
          
          <div class="formula-box">
            <p><strong>纠缠熵标度：</strong></p>
            <p>$$S_A = \frac{c}{3} \ln L + \text{const}$$</p>
            <p><strong>保真度：</strong></p>
            <p>$$F = |\langle \psi_0 | \psi(\lambda) \rangle|^2$$</p>
            <p><strong>量子Fisher信息：</strong></p>
            <p>$$\mathcal{F}_Q = 4(\langle \partial_\lambda \psi | \partial_\lambda \psi \rangle - |\langle \psi | \partial_\lambda \psi \rangle|^2)$$</p>
          </div>
          
          <p><strong>应用方向：</strong></p>
          <ul>
            <li><strong>量子模拟器：</strong>冷原子和离子阱系统</li>
            <li><strong>量子传感：</strong>精密测量和计量</li>
            <li><strong>量子通信：</strong>纠缠分发和量子中继</li>
            <li><strong>量子算法：</strong>变分量子本征求解器</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>纳米电子学应用</h3>
          <p>一维系统在纳米器件中的应用：</p>
          
          <div class="formula-box">
            <p><strong>量子点接触：</strong></p>
            <p>$$G = \frac{2e^2}{h} \sum_n T_n$$</p>
            <p><strong>共振隧道：</strong></p>
            <p>$$T(E) = \frac{\Gamma_L \Gamma_R}{(E - E_0)^2 + (\Gamma_L + \Gamma_R)^2/4}$$</p>
            <p><strong>Coulomb阻塞：</strong></p>
            <p>$$E_{\text{add}}(N) = E(N+1) + E(N-1) - 2E(N)$$</p>
          </div>
          
          <p><strong>器件应用：</strong></p>
          <ul>
            <li><strong>单电子晶体管：</strong>超低功耗逻辑器件</li>
            <li><strong>量子点激光器：</strong>高效光电器件</li>
            <li><strong>自旋电子学：</strong>自旋流和自旋阀</li>
            <li><strong>热电器件：</strong>高效能量转换</li>
          </ul>
        </div>
      </div>

      <h3>强关联系统中的应用</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>高温超导体</h3>
          <p>准一维结构在铜氧化物超导体中的作用：</p>
          
          <div class="formula-box">
            <p><strong>t-J模型：</strong></p>
            <p>$$H = -t \sum_{\langle i,j \rangle, \sigma} \tilde{c}_{i\sigma}^\dagger \tilde{c}_{j\sigma} + J \sum_{\langle i,j \rangle} \left(\mathbf{S}_i \cdot \mathbf{S}_j - \frac{1}{4} n_i n_j\right)$$</p>
            <p><strong>Luther-Emery液体：</strong></p>
            <p>$$K_c < 1, \quad K_s = 1$$</p>
            <p><strong>超导关联：</strong></p>
            <p>$$\langle \Delta^\dagger(x) \Delta(0) \rangle \sim x^{-1/K_c}$$</p>
          </div>
          
          <p><strong>相关现象：</strong></p>
          <ul>
            <li><strong>赝能隙：</strong>预形成Cooper对</li>
            <li><strong>条纹相：</strong>电荷和自旋调制</li>
            <li><strong>量子临界点：</strong>反铁磁-超导竞争</li>
            <li><strong>奇异金属：</strong>非费米液体行为</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>量子磁性</h3>
          <p>一维量子磁体中的Luttinger液体行为：</p>
          
          <div class="formula-box">
            <p><strong>自旋链哈密顿量：</strong></p>
            <p>$$H = J \sum_i \left[S_i^x S_{i+1}^x + S_i^y S_{i+1}^y + \Delta S_i^z S_{i+1}^z\right]$$</p>
            <p><strong>临界指数：</strong></p>
            <p>$$\eta = \frac{1}{2K_s}, \quad K_s = \frac{\pi}{2(\pi - \arccos \Delta)}$$</p>
            <p><strong>动态结构因子：</strong></p>
            <p>$$S(q,\omega) \sim \frac{1}{\omega^{1-\eta}} f\left(\frac{\omega - v|q|}{T}\right)$$</p>
          </div>
          
          <p><strong>实验系统：</strong></p>
          <ul>
            <li><strong>CuGeO₃：</strong>自旋-Peierls相变</li>
            <li><strong>Sr₂CuO₃：</strong>Heisenberg自旋链</li>
            <li><strong>KCuF₃：</strong>准一维反铁磁体</li>
            <li><strong>有机磁体：</strong>TMMC和相关化合物</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 应用与相关领域 -->
    <section class="applications">
      <h2>应用与相关领域</h2>
      
      <h3>量子信息</h3>
      <ul>
        <li><strong>量子纠缠</strong>：纠缠熵的标度行为</li>
        <li><strong>量子传输</strong>：完美态传输协议</li>
        <li><strong>量子计算</strong>：拓扑量子比特的实现</li>
      </ul>

      <h3>高能物理</h3>
      <ul>
        <li><strong>AdS/CFT对应</strong>：全息Luttinger液体</li>
        <li><strong>共形场论</strong>：临界现象的描述</li>
        <li><strong>弦理论</strong>：D-brane系统的低能理论</li>
      </ul>

      <h3>生物物理</h3>
      <ul>
        <li><strong>DNA动力学</strong>：双螺旋结构的集体激发</li>
        <li><strong>蛋白质折叠</strong>：一维链的统计力学</li>
        <li><strong>离子通道</strong>：单文件扩散过程</li>
      </ul>

      <h3>经济物理</h3>
      <ul>
        <li><strong>金融时间序列</strong>：长程关联的建模</li>
        <li><strong>交通流</strong>：一维粒子系统的类比</li>
        <li><strong>社会网络</strong>：信息传播的动力学</li>
      </ul>
    </section>

    <!-- 开放问题与未来方向 -->
    <section class="future">
      <h2>开放问题与未来方向</h2>
      
      <h3>理论挑战</h3>
      <ul>
        <li><strong>非平衡Luttinger液体</strong>：稳态和输运性质</li>
        <li><strong>有限尺寸效应</strong>：边界条件的影响</li>
        <li><strong>量子相变</strong>：Luttinger液体相的稳定性</li>
        <li><strong>多体局域化</strong>：一维系统中的热化问题</li>
      </ul>

      <h3>实验前沿</h3>
      <ul>
        <li><strong>单原子精度</strong>：原子级别的操控和测量</li>
        <li><strong>实时动力学</strong>：超快时间分辨谱学</li>
        <li><strong>人工量子系统</strong>：可编程量子模拟器</li>
        <li><strong>拓扑保护</strong>：容错量子计算的实现</li>
      </ul>

      <h3>跨学科应用</h3>
      <ul>
        <li><strong>量子技术</strong>：量子传感和量子通信</li>
        <li><strong>材料设计</strong>：一维纳米材料的功能化</li>
        <li><strong>生物医学</strong>：分子马达和离子泵</li>
        <li><strong>人工智能</strong>：神经网络的物理实现</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>Luttinger液体理论为理解一维相互作用费米子系统提供了完整的理论框架。从最初的数学模型到现代的实验实现，Luttinger液体理论不仅揭示了一维系统的独特物理性质，也为探索新的量子现象和开发量子技术奠定了基础。</p>
      
      <p>电荷-自旋分离、幂律关联函数、无能隙激发等特征使得Luttinger液体成为非费米液体行为的典型例子。随着实验技术的进步，特别是冷原子系统和纳米器件的发展，Luttinger液体理论的预言得到了越来越精确的验证。</p>
      
      <p>未来的研究将继续探索Luttinger液体在非平衡态、拓扑相变、量子信息等前沿领域的应用，为理解复杂量子系统和开发新的量子技术提供重要的理论指导。</p>
    </section>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'
export default {
  name: 'LuttingerLiquid',
  components: { KatexElement },
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.luttinger-liquid-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #e74c3c;
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
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.one-dimensional {
  border-left: 4px solid #3498db;
}

.bosonization {
  border-left: 4px solid #9b59b6;
}

.hamiltonian {
  border-left: 4px solid #f39c12;
}

.correlations {
  border-left: 4px solid #27ae60;
}

.spin-charge-separation {
  border-left: 4px solid #e67e22;
}

.transport {
  border-left: 4px solid #1abc9c;
}

.experimental {
  border-left: 4px solid #34495e;
}

.numerical {
  border-left: 4px solid #8e44ad;
}

.extensions {
  border-left: 4px solid #16a085;
}

.applications {
  border-left: 4px solid #2980b9;
}

.future {
  border-left: 4px solid #e91e63;
}

.conclusion {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .luttinger-liquid-page {
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