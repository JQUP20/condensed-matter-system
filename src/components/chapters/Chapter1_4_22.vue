<template>
  <div class="fermi-liquid-page">
    <div class="page-header">
      <h1>1.4.22 费米液体 (Fermi Liquid)</h1>
      <p class="subtitle">朗道准粒子理论与相互作用费米子系统</p>
    </div>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <div class="content-grid">
        <div class="theory-card">
          <h3>基本概念</h3>
          <p>费米液体理论是由列夫·朗道(Lev Landau)在1956年提出的描述相互作用费米子系统的理论框架。该理论为理解金属中电子的行为提供了基础，是凝聚态物理学中最重要的理论之一。费米液体理论的核心思想是，即使在强相互作用的情况下，低能激发仍可以用准粒子来描述，这些准粒子与自由费米子具有一一对应关系。</p>
          <div class="formula-box">
            <p><strong>绝热连续性原理：</strong></p>
            <p>相互作用系统的低能激发与自由费米气体的激发存在一一对应关系</p>
          </div>
        </div>
        <div class="theory-card">
          <h3>理论意义</h3>
          <ul>
            <li><strong>普适性：</strong>适用于大多数金属和费米子系统</li>
            <li><strong>重整化：</strong>相互作用效应被吸收到准粒子参数中</li>
            <li><strong>预言性：</strong>提供了可验证的实验预言</li>
            <li><strong>基础性：</strong>为非费米液体理论提供对比基准</li>
          </ul>
        </div>
      </div>
      
      <h3>详细历史发展</h3>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-year">1956</div>
          <div class="timeline-content">
            <h4>朗道的开创性工作</h4>
            <p>朗道在苏联科学院发表了关于费米液体理论的基础论文，提出了准粒子概念和朗道参数的思想。这一理论突破了当时对强相互作用系统的理解局限。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1958-1959</div>
          <div class="timeline-content">
            <h4>输运理论的发展</h4>
            <p>朗道和利夫希茨、阿布里科索夫等人发展了费米液体的输运理论，建立了准粒子输运方程，为理解金属的电导、热导等性质奠定了基础。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1960-1970</div>
          <div class="timeline-content">
            <h4>微观理论基础</h4>
            <p>Nozières、Pines等人利用多体微扰理论为费米液体理论提供了微观基础，建立了朗道参数与微观相互作用的联系。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1975-1985</div>
          <div class="timeline-content">
            <h4>重费米子系统的发现</h4>
            <p>CeCu₆、UBe₁₃等重费米子化合物的发现为费米液体理论提供了极端验证，展现了理论的普适性和预言能力。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">1986-2000</div>
          <div class="timeline-content">
            <h4>非费米液体行为</h4>
            <p>高温超导体的发现揭示了非费米液体行为，推动了对费米液体理论适用范围的深入思考和新理论的发展。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-year">2000-至今</div>
          <div class="timeline-content">
            <h4>现代发展</h4>
            <p>量子临界现象、拓扑费米液体、机器学习方法等新发展继续拓展费米液体理论的应用范围和理论深度。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 基本理论与准粒子概念 -->
    <section class="basic-theory">
      <h2>基本理论与准粒子概念</h2>
      <div class="content-grid">
        <div class="theory-card">
          <h3>朗道准粒子</h3>
          <p>费米液体理论的核心是准粒子概念。在相互作用的费米子系统中，低能激发可以用准粒子来描述：</p>
          
          <div class="formula-box">
            <p><strong>准粒子能量：</strong></p>
            <p>$$\varepsilon_{\mathbf{k}} = v_F(|\mathbf{k}| - k_F) + \sum_{\mathbf{k}'} f(\mathbf{k}, \mathbf{k}') \delta n_{\mathbf{k}'}$$</p>
            <p><strong>准粒子分布函数：</strong></p>
            <p>$$n_{\mathbf{k}} = \frac{1}{e^{(\varepsilon_{\mathbf{k}} - \mu)/T} + 1}$$</p>
          </div>
          
          <p><strong>物理参数：</strong></p>
          <ul>
            <li>$v_F$ 是费米速度 (重整化后)</li>
            <li>$k_F$ 是费米动量</li>
            <li>$f(\mathbf{k}, \mathbf{k}')$ 是朗道参数</li>
            <li>$\delta n_{\mathbf{k}'}$ 是准粒子分布的偏离</li>
            <li>$\mu$ 是化学势</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>绝热连续性</h3>
          <p>朗道理论的基础假设是绝热连续性：</p>
          <ul>
            <li><strong>一一对应：</strong>每个自由费米子态对应一个准粒子态</li>
            <li><strong>费米面：</strong>相互作用不改变费米面的拓扑结构</li>
            <li><strong>低能有效性：</strong>理论在 $T, \omega \ll E_F$ 时有效</li>
            <li><strong>准粒子残基：</strong>$Z = (1 - \partial\Sigma/\partial\omega)^{-1}$</li>
          </ul>
          
          <div class="formula-box">
            <p><strong>准粒子权重：</strong></p>
            <p>$$Z_{\mathbf{k}} = \left[1 - \frac{\partial \text{Im}\Sigma(\mathbf{k},\omega)}{\partial \omega}\bigg|_{\omega=0}\right]^{-1}$$</p>
          </div>
        </div>
      </div>

      <h3>朗道参数的详细分析</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>角度展开</h3>
          <p>朗道参数的完整形式：</p>
          
          <div class="formula-box">
            <p>$$f(\mathbf{k}, \mathbf{k}') = \sum_{l=0}^{\infty} f_l P_l(\cos\theta) + \sum_{l=0}^{\infty} f_l^s P_l(\cos\theta) \boldsymbol{\sigma} \cdot \boldsymbol{\sigma}'$$</p>
            <p><strong>无量纲化参数：</strong></p>
            <p>$$F_l = f_l N(0), \quad F_l^s = f_l^s N(0)$$</p>
          </div>
          
          <p><strong>重要参数：</strong></p>
          <ul>
            <li>$F_0$：前向散射，影响压缩性</li>
            <li>$F_0^s$：自旋相互作用，影响磁化率</li>
            <li>$F_1$：p波散射，影响有效质量</li>
            <li>$F_1^s$：自旋-轨道耦合</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>微观起源</h3>
          <p>朗道参数与微观相互作用的关系：</p>
          
          <div class="formula-box">
            <p><strong>库仑相互作用：</strong></p>
            <p>$$f_l = \frac{1}{(2\pi)^3} \int d\mathbf{q} V(\mathbf{q}) P_l(\hat{\mathbf{k}} \cdot \hat{\mathbf{k}}')$$</p>
            <p><strong>屏蔽效应：</strong></p>
            <p>$$V_{\text{eff}}(\mathbf{q}) = \frac{V(\mathbf{q})}{\epsilon(\mathbf{q}, 0)}$$</p>
          </div>
          
          <p><strong>典型数值：</strong></p>
          <ul>
            <li><strong>简单金属：</strong>$F_0 \sim 1$, $F_1 \sim 0.1$</li>
            <li><strong>重费米子：</strong>$F_0 \sim 10-100$</li>
            <li><strong>3He：</strong>$F_0^s = -0.75$</li>
          </ul>
        </div>
      </div>

      <h3>准粒子寿命与谱函数</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>寿命计算</h3>
          <p>准粒子的寿命由相互作用决定：</p>
          
          <div class="formula-box">
            <p><strong>寿命公式：</strong></p>
            <p>$$\frac{1}{\tau_{\mathbf{k}}} = -2\text{Im}\Sigma(\mathbf{k}, \varepsilon_{\mathbf{k}})$$</p>
            <p><strong>费米液体行为：</strong></p>
            <p>$$\frac{1}{\tau_{\mathbf{k}}} = A \left(\frac{\varepsilon_{\mathbf{k}} - \mu}{E_F}\right)^2 + B T^2$$</p>
          </div>
          
          <p>这导致费米面附近准粒子具有最长寿命，是费米液体理论成功的关键。</p>
        </div>
        
        <div class="theory-card">
          <h3>谱函数</h3>
          <p>准粒子的谱函数描述其能量分布：</p>
          
          <div class="formula-box">
            <p><strong>谱函数：</strong></p>
            <p>$$A(\mathbf{k}, \omega) = \frac{-2\text{Im}\Sigma(\mathbf{k}, \omega)}{[\omega - \varepsilon_{\mathbf{k}} - \text{Re}\Sigma(\mathbf{k}, \omega)]^2 + [\text{Im}\Sigma(\mathbf{k}, \omega)]^2}$$</p>
            <p><strong>准粒子峰：</strong></p>
            <p>$$A(\mathbf{k}, \omega) \approx Z_{\mathbf{k}} \delta(\omega - \varepsilon_{\mathbf{k}}^*)$$</p>
          </div>
          
          <p>其中 $\varepsilon_{\mathbf{k}}^*$ 是重整化的准粒子能量。</p>
        </div>
      </div>
    </section>

    <!-- 热力学性质 -->
    <section class="thermodynamics">
      <h2>热力学性质</h2>
      <div class="content-grid">
        <div class="theory-card">
          <h3>比热</h3>
          <p>费米液体的比热表现出线性温度依赖性：</p>
          
          <div class="formula-box">
            <p><strong>电子比热：</strong></p>
            <p>$$C_V = \gamma T = \frac{\pi^2}{3} k_B^2 N^*(0) T$$</p>
            <p><strong>有效态密度：</strong></p>
            <p>$$N^*(0) = N(0) \left(1 + F_1\right) = N(0) \frac{m^*}{m}$$</p>
            <p><strong>质量增强：</strong></p>
            <p>$$\frac{m^*}{m} = 1 + F_1 = 1 + \frac{1}{3} \sum_{\mathbf{k}, \mathbf{k}'} f(\mathbf{k}, \mathbf{k}') \cos\theta$$</p>
          </div>
          
          <p><strong>实验观测：</strong></p>
          <ul>
            <li><strong>简单金属：</strong>$\gamma \sim 1$ mJ/mol·K²</li>
            <li><strong>重费米子：</strong>$\gamma \sim 100-1000$ mJ/mol·K²</li>
            <li><strong>CeCoIn₅：</strong>$\gamma = 290$ mJ/mol·K²</li>
            <li><strong>UBe₁₃：</strong>$\gamma = 1100$ mJ/mol·K²</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>磁化率</h3>
          <p>泡利磁化率的增强：</p>
          
          <div class="formula-box">
            <p><strong>磁化率：</strong></p>
            <p>$$\chi = \frac{\mu_B^2 N^*(0)}{1 + F_0^s} = \chi_{\text{Pauli}} \frac{1 + F_1}{1 + F_0^s}$$</p>
            <p><strong>Wilson比：</strong></p>
            <p>$$R_W = \frac{\pi^2 k_B^2 \chi}{3 \mu_B^2 \gamma} = \frac{1 + F_1}{1 + F_0^s}$$</p>
          </div>
          
          <p><strong>物理意义：</strong></p>
          <ul>
            <li>$F_0^s > 0$：反铁磁相互作用，磁化率被抑制</li>
            <li>$F_0^s < 0$：铁磁相互作用，磁化率增强</li>
            <li>$F_0^s = -1$：Stoner不稳定性，铁磁相变</li>
            <li>Wilson比偏离1反映相互作用强度</li>
          </ul>
        </div>
      </div>

      <h3>压缩性与体模量</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>压缩性</h3>
          <p>等温压缩性受朗道参数调制：</p>
          
          <div class="formula-box">
            <p><strong>压缩性：</strong></p>
            <p>$$\kappa_T = \frac{\kappa_0}{1 + F_0}$$</p>
            <p><strong>自由电子值：</strong></p>
            <p>$$\kappa_0 = \frac{1}{n^2} \frac{\partial n}{\partial \mu} = \frac{N(0)}{n^2}$$</p>
            <p><strong>体模量：</strong></p>
            <p>$$K = \frac{1}{\kappa_T} = n^2 \frac{\partial \mu}{\partial n} = \frac{n^2}{N^*(0)}(1 + F_0)$$</p>
          </div>
          
          <p><strong>稳定性条件：</strong></p>
          <ul>
            <li>$F_0 > -1$：系统稳定</li>
            <li>$F_0 = -1$：相分离不稳定性</li>
            <li>$F_0 < -1$：系统不稳定</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>热膨胀</h3>
          <p>热膨胀系数与朗道参数的关系：</p>
          
          <div class="formula-box">
            <p><strong>热膨胀系数：</strong></p>
            <p>$$\alpha = \frac{1}{V} \frac{\partial V}{\partial T} = -\frac{\gamma}{K} \frac{\partial \ln N^*(0)}{\partial \ln V}$$</p>
            <p><strong>Grüneisen参数：</strong></p>
            <p>$$\Gamma = \frac{\alpha K V}{\gamma T} = -\frac{\partial \ln N^*(0)}{\partial \ln V}$$</p>
          </div>
          
          <p>这些关系提供了实验验证费米液体理论的重要途径。</p>
        </div>
      </div>

      <h3>量子振荡</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>de Haas-van Alphen效应</h3>
          <p>磁化强度的量子振荡：</p>
          
          <div class="formula-box">
            <p><strong>振荡公式：</strong></p>
            <p>$$M = M_0 + \sum_{\nu} A_{\nu} \cos\left(2\pi \nu \frac{F}{B} + \phi_{\nu}\right)$$</p>
            <p><strong>振幅：</strong></p>
            <p>$$A_{\nu} = A_0 R_T R_D R_S$$</p>
            <p><strong>温度因子：</strong></p>
            <p>$$R_T = \frac{2\pi^2 k_B T/\hbar \omega_c}{\sinh(2\pi^2 k_B T/\hbar \omega_c)}$$</p>
          </div>
          
          <p><strong>物理信息：</strong></p>
          <ul>
            <li>$F = \frac{\hbar}{2\pi e} A_{\text{ext}}$：极值截面积</li>
            <li>$m^*$：回旋有效质量</li>
            <li>$\tau_q$：量子散射时间</li>
            <li>费米面形状和拓扑</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>Shubnikov-de Haas效应</h3>
          <p>电阻率的量子振荡：</p>
          
          <div class="formula-box">
            <p><strong>电阻率振荡：</strong></p>
            <p>$$\rho = \rho_0 + \Delta\rho \cos\left(2\pi \frac{F}{B} + \phi\right)$$</p>
            <p><strong>振幅：</strong></p>
            <p>$$\Delta\rho \propto \frac{m^*}{\tau_q} R_T R_D$$</p>
          </div>
          
          <p>通过分析振荡频率和振幅，可以精确测定费米面参数。</p>
        </div>
      </div>
    </section>

    <!-- 费米液体的性质 -->
    <section class="properties">
      <h2>费米液体的性质</h2>

    <!-- 输运性质 -->
    <section class="transport">
      <h2>输运性质</h2>
      <div class="content-grid">
        <div class="theory-card">
          <h3>电导率</h3>
          <p>费米液体的电导率遵循Drude模型的修正形式：</p>
          
          <div class="formula-box">
            <p><strong>直流电导率：</strong></p>
            <p>$$\sigma = \frac{ne^2\tau}{m^*} = \frac{ne^2}{m^*} \frac{1}{\frac{1}{\tau_{\text{imp}}} + \frac{1}{\tau_{\text{ee}}}}$$</p>
            <p><strong>电子-电子散射时间：</strong></p>
            <p>$$\frac{1}{\tau_{\text{ee}}} = A T^2 + B \omega^2$$</p>
            <p><strong>总散射率：</strong></p>
            <p>$$\frac{1}{\tau} = \frac{1}{\tau_{\text{imp}}} + \frac{1}{\tau_{\text{ph}}} + \frac{1}{\tau_{\text{ee}}}$$</p>
          </div>
          
          <p><strong>温度依赖性：</strong></p>
          <ul>
            <li><strong>低温：</strong>$\rho = \rho_0 + AT^2$ (费米液体行为)</li>
            <li><strong>中温：</strong>声子散射主导，$\rho \propto T^5$</li>
            <li><strong>高温：</strong>线性电阻率，$\rho \propto T$</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>霍尔效应</h3>
          <p>霍尔系数提供载流子信息：</p>
          
          <div class="formula-box">
            <p><strong>霍尔系数：</strong></p>
            <p>$$R_H = \frac{1}{ne} \frac{1 + \mu^2 B^2 \beta}{(1 + \mu^2 B^2)^2}$$</p>
            <p><strong>霍尔迁移率：</strong></p>
            <p>$$\mu_H = R_H \sigma = \frac{e\tau}{m^*}$$</p>
            <p><strong>多带情况：</strong></p>
            <p>$$R_H = \frac{\sum_i n_i \mu_i^3 - \sum_i p_i \mu_i^3}{e(\sum_i n_i \mu_i + \sum_i p_i \mu_i)^2}$$</p>
          </div>
          
          <p><strong>实验应用：</strong></p>
          <ul>
            <li>载流子浓度测定</li>
            <li>载流子类型识别</li>
            <li>多带结构分析</li>
            <li>费米面重构检测</li>
          </ul>
        </div>
      </div>

      <h3>热电效应</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>塞贝克效应</h3>
          <p>热电势反映费米面附近的电子结构：</p>
          
          <div class="formula-box">
            <p><strong>塞贝克系数：</strong></p>
            <p>$$S = -\frac{\pi^2 k_B^2 T}{3e} \frac{1}{\sigma} \frac{d\sigma}{d\varepsilon}\bigg|_{\varepsilon=\mu}$$</p>
            <p><strong>Mott公式：</strong></p>
            <p>$$S = -\frac{\pi^2 k_B^2 T}{3e} \frac{d\ln\sigma(E)}{dE}\bigg|_{E=E_F}$$</p>
            <p><strong>扩散热电势：</strong></p>
            <p>$$S_{\text{diff}} = \frac{k_B}{e} \ln\left(\frac{n_c}{n}\right)$$</p>
          </div>
          
          <p><strong>物理意义：</strong></p>
          <ul>
            <li>$S > 0$：空穴型载流子</li>
            <li>$S < 0$：电子型载流子</li>
            <li>$|S|$大：强相关系统</li>
            <li>温度线性：费米液体行为</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>热导率</h3>
          <p>电子热导率遵循Wiedemann-Franz定律：</p>
          
          <div class="formula-box">
            <p><strong>电子热导率：</strong></p>
            <p>$$\kappa_e = L_0 \sigma T = \frac{\pi^2 k_B^2}{3e^2} \sigma T$$</p>
            <p><strong>Lorenz数：</strong></p>
            <p>$$L = \frac{\kappa_e}{\sigma T} = L_0 \left[1 + \left(\frac{\pi S e}{k_B}\right)^2\right]$$</p>
            <p><strong>总热导率：</strong></p>
            <p>$$\kappa = \kappa_e + \kappa_{\text{ph}} + \kappa_{\text{mag}}$$</p>
          </div>
          
          <p><strong>实验观测：</strong></p>
          <ul>
            <li>纯金属：$L \approx L_0$</li>
            <li>强相关系统：$L$显著偏离$L_0$</li>
            <li>超导体：$\kappa_e$在$T_c$处跳跃</li>
          </ul>
        </div>
      </div>

      <h3>光学性质</h3>
      <div class="content-grid">
        <div class="theory-card">
          <h3>光学电导率</h3>
          <p>频率相关的电导率：</p>
          
          <div class="formula-box">
            <p><strong>Drude模型：</strong></p>
            <p>$$\sigma(\omega) = \frac{\sigma_0}{1 - i\omega\tau} = \frac{ne^2\tau/m^*}{1 - i\omega\tau}$$</p>
            <p><strong>实部和虚部：</strong></p>
            <p>$$\sigma_1(\omega) = \frac{\sigma_0}{1 + \omega^2\tau^2}, \quad \sigma_2(\omega) = \frac{\sigma_0\omega\tau}{1 + \omega^2\tau^2}$$</p>
            <p><strong>等离子体频率：</strong></p>
            <p>$$\omega_p^2 = \frac{ne^2}{\epsilon_0 m^*}$$</p>
          </div>
          
          <p><strong>特征频率：</strong></p>
          <ul>
            <li>$\omega \ll 1/\tau$：直流行为</li>
            <li>$\omega \sim 1/\tau$：散射主导</li>
            <li>$\omega \gg 1/\tau$：自由载流子</li>
            <li>$\omega \sim \omega_p$：等离子体共振</li>
          </ul>
        </div>
        
        <div class="theory-card">
          <h3>介电函数</h3>
          <p>复介电函数描述材料的光学响应：</p>
          
          <div class="formula-box">
            <p><strong>介电函数：</strong></p>
            <p>$$\epsilon(\omega) = \epsilon_{\infty} + \frac{i\sigma(\omega)}{\epsilon_0\omega}$$</p>
            <p><strong>Kramers-Kronig关系：</strong></p>
            <p>$$\epsilon_1(\omega) = \epsilon_{\infty} + \frac{2}{\pi} \mathcal{P} \int_0^{\infty} \frac{\omega' \epsilon_2(\omega')}{\omega'^2 - \omega^2} d\omega'$$</p>
            <p><strong>反射率：</strong></p>
            <p>$$R(\omega) = \left|\frac{\sqrt{\epsilon(\omega)} - 1}{\sqrt{\epsilon(\omega)} + 1}\right|^2$$</p>
          </div>
          
          <p>通过光学测量可以获得电子结构和散射机制的信息。</p>
        </div>
      </div>
    </section>

      <h3>集体激发</h3>
      
      <h4>零声模</h4>
      <p>费米液体中存在零声模，其色散关系为：</p>
      
      <div class="formula">
        <p>$$\omega = v_0 q \sqrt{1 + F_0}$$</p>
      </div>
      
      <p>其中 $v_0 = v_F/\sqrt{3}$，$F_0 = f_0 N(0)$。</p>

      <h4>自旋波</h4>
      <p>在存在自旋相互作用时，系统支持自旋波激发：</p>
      
      <div class="formula">
        <p>$$\omega = v_s q \sqrt{1 + F_0^s}$$</p>
      </div>
    </section>

    <!-- 稳定性条件 -->
    <section class="stability">
      <h2>稳定性条件</h2>
      
      <p>费米液体的稳定性要求朗道参数满足一定条件：</p>
      
      <div class="formula">
        <p><strong>Pomeranchuk稳定性条件：</strong></p>
        <p>$$F_l > -1 \quad \text{(轨道通道)}$$</p>
        <p>$$F_l^s > -1 \quad \text{(自旋通道)}$$</p>
      </div>
      
      <p>当这些条件被违反时，系统会发生相变，如：</p>
      <ul>
        <li>$F_0 < -1$：密度不稳定性</li>
        <li>$F_0^s < -1$：铁磁不稳定性</li>
        <li>$F_1 < -1$：向列相不稳定性</li>
      </ul>
    </section>

    <!-- 实验验证 -->
    <section class="experimental">
      <h2>实验验证</h2>
      
      <h3>关键实验</h3>
      <ul>
        <li><strong>比热测量</strong>：验证了低温下的线性比热行为</li>
        <li><strong>磁化率测量</strong>：确认了泡利磁化率的温度无关性</li>
        <li><strong>输运测量</strong>：验证了维德曼-弗兰兹定律</li>
        <li><strong>角分辨光电子谱(ARPES)</strong>：直接观测准粒子色散和寿命</li>
      </ul>

      <h3>重费米子系统</h3>
      <p>重费米子化合物如CeCu₆、UBe₁₃等为费米液体理论提供了重要验证：</p>
      <ul>
        <li>巨大的有效质量增强</li>
        <li>Wilson比的普适性</li>
        <li>Kadowaki-Woods关系</li>
      </ul>

      <h3>现代测量技术</h3>
      <ul>
        <li><strong>量子振荡</strong>：de Haas-van Alphen效应和Shubnikov-de Haas效应</li>
        <li><strong>扫描隧道谱</strong>：局域态密度的直接测量</li>
        <li><strong>中子散射</strong>：自旋激发的观测</li>
        <li><strong>核磁共振</strong>：Knight位移和弛豫率测量</li>
      </ul>
    </section>

    <!-- 费米液体的局限性 -->
    <section class="limitations">
      <h2>费米液体的局限性</h2>
      
      <h3>非费米液体行为</h3>
      <p>在某些系统中观察到偏离费米液体行为的现象：</p>
      <ul>
        <li><strong>边际费米液体</strong>：电阻率 $\rho \propto T$</li>
        <li><strong>奇异金属</strong>：$\rho \propto T^n$，$n \neq 2$</li>
        <li><strong>量子临界点附近</strong>：非解析的自能</li>
      </ul>

      <h3>强关联系统</h3>
      <p>在强关联电子系统中，费米液体理论可能失效：</p>
      <ul>
        <li>高温超导体的正常态</li>
        <li>重费米子系统的量子临界区域</li>
        <li>一维系统中的Luttinger液体行为</li>
      </ul>
    </section>

    <!-- 理论发展与扩展 -->
    <section class="developments">
      <h2>理论发展与扩展</h2>
      
      <h3>微观理论基础</h3>
      <ul>
        <li><strong>多体微扰理论</strong>：Dyson方程和自能计算</li>
        <li><strong>Fermi液体参数的计算</strong>：从微观哈密顿量出发</li>
        <li><strong>Ward恒等式</strong>：守恒律与输运系数的关系</li>
      </ul>

      <h3>现代发展</h3>
      <ul>
        <li><strong>AdS/CFT对应</strong>：全息费米液体理论</li>
        <li><strong>机器学习方法</strong>：神经网络量子态和变分蒙特卡罗</li>
        <li><strong>非平衡费米液体</strong>：Keldysh形式主义</li>
        <li><strong>拓扑费米液体</strong>：拓扑不变量的影响</li>
      </ul>

      <h3>数值方法</h3>
      <ul>
        <li><strong>量子蒙特卡罗</strong>：有限温度性质的计算</li>
        <li><strong>动力学平均场理论</strong>：局域相互作用的处理</li>
        <li><strong>密度矩阵重整化群</strong>：一维系统的精确解</li>
        <li><strong>连续时间量子蒙特卡罗</strong>：杂质问题的求解</li>
      </ul>
    </section>

    <!-- 应用与相关概念 -->
    <section class="applications">
      <h2>应用与相关概念</h2>
      
      <h3>金属物理</h3>
      <ul>
        <li><strong>简单金属</strong>：碱金属和贵金属的电子性质</li>
        <li><strong>过渡金属</strong>：d电子的作用和轨道效应</li>
        <li><strong>合金系统</strong>：无序效应和Anderson局域化</li>
      </ul>

      <h3>强关联电子系统</h3>
      <ul>
        <li><strong>重费米子化合物</strong>：f电子系统的低能物理</li>
        <li><strong>铁基超导体</strong>：多轨道效应和轨道选择Mott相变</li>
        <li><strong>钴氧化物</strong>：自旋态转变和金属-绝缘体相变</li>
      </ul>

      <h3>低维系统</h3>
      <ul>
        <li><strong>二维电子气</strong>：量子霍尔效应和复合费米子</li>
        <li><strong>准一维导体</strong>：Peierls不稳定性和电荷密度波</li>
        <li><strong>石墨烯</strong>：狄拉克费米子和相对论性效应</li>
      </ul>
    </section>

    <!-- 开放问题与未来方向 -->
    <section class="future">
      <h2>开放问题与未来方向</h2>
      
      <h3>理论挑战</h3>
      <ul>
        <li><strong>非费米液体的统一理论</strong>：奇异金属行为的微观起源</li>
        <li><strong>量子临界现象</strong>：临界点附近的标度行为</li>
        <li><strong>多体局域化</strong>：相互作用无序系统的热化</li>
        <li><strong>时间晶体</strong>：周期驱动系统的新奇相</li>
      </ul>

      <h3>实验前沿</h3>
      <ul>
        <li><strong>时间分辨谱学</strong>：超快动力学和非平衡态</li>
        <li><strong>扫描探针技术</strong>：单原子分辨的电子结构</li>
        <li><strong>量子气体实验</strong>：可调相互作用的模型系统</li>
        <li><strong>拓扑材料</strong>：拓扑保护的表面态</li>
      </ul>

      <h3>跨学科应用</h3>
      <ul>
        <li><strong>量子信息</strong>：量子纠错码和容错量子计算</li>
        <li><strong>生物物理</strong>：蛋白质折叠和神经网络</li>
        <li><strong>人工智能</strong>：深度学习和神经形态计算</li>
        <li><strong>宇宙学</strong>：暗物质和早期宇宙相变</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>费米液体理论作为描述相互作用费米子系统的基础理论，在凝聚态物理学中占据核心地位。从朗道的原始构想到现代的微观理论，费米液体理论不仅成功解释了金属的基本性质，也为理解更复杂的强关联电子系统提供了重要参考。随着实验技术的进步和理论方法的发展，费米液体理论继续在新材料的发现和新现象的理解中发挥重要作用。</p>
      
      <p>尽管存在局限性，费米液体理论仍然是理解量子多体系统的重要工具。它不仅为非费米液体行为的研究提供了对比基准，也为探索新的量子相和相变现象奠定了理论基础。在未来的研究中，费米液体理论将继续与新的理论方法和实验技术相结合，推动凝聚态物理学的发展。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FermiLiquid',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.fermi-liquid-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
  border-left: 4px solid #3498db;
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.basic-theory {
  border-left: 4px solid #e74c3c;
}

.properties {
  border-left: 4px solid #f39c12;
}

.stability {
  border-left: 4px solid #27ae60;
}

.experimental {
  border-left: 4px solid #9b59b6;
}

.limitations {
  border-left: 4px solid #e67e22;
}

.developments {
  border-left: 4px solid #1abc9c;
}

.applications {
  border-left: 4px solid #34495e;
}

.future {
  border-left: 4px solid #e91e63;
}

.conclusion {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .fermi-liquid-page {
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