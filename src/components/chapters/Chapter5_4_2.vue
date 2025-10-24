<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.4.2 一级相变的其他例子</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">结构相变</span>
        <span class="chapter-tag">液晶相变</span>
        <span class="chapter-tag">量子相变</span>
        <span class="reading-time">阅读时间：45分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        除了电磁场涨落诱导的一级相变外，自然界中还存在着丰富多样的一级相变现象。
        这些相变涉及不同的物理机制和序参量，从经典的结构相变到现代的量子相变，
        从液晶的取向相变到磁性材料的自旋重取向相变。
        本节将系统介绍这些重要的一级相变例子，分析它们的物理机制、理论描述和实验特征，
        为理解凝聚态物理中的相变现象提供全面的视角。
      </p>
    </div>

    <div class="content-section">
      <h2>结构相变</h2>
      
      <div class="structural-transitions">
        <div class="st-framework">
          <div class="st-card martensitic">
            <h3>🔧 马氏体相变</h3>
            <div class="st-content">
              <div class="martensitic-transitions">
                <div class="mart-item">
                  <h4>基本机制</h4>
                  <div class="mart-content">
                    <p><strong>晶格失稳：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = F_0 + \frac{1}{2}A(T-T_0)\eta^2 + \frac{1}{4}B\eta^4 + \frac{1}{6}C\eta^6" :inline="false" />
                    </div>
                    
                    <p><strong>软模理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\omega^2(T) = \omega_0^2 \frac{T-T_c}{T_c}" :inline="false" />
                    </div>
                    
                    <p><strong>应变序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\eta = \frac{a-a_0}{a_0}" :inline="false" />
                    </div>
                    
                    <p><strong>弹性能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\text{elastic}} = \frac{1}{2}C_{ijkl} u_{ij} u_{kl}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="mart-item">
                  <h4>形状记忆效应</h4>
                  <div class="mart-content">
                    <p><strong>双向形状记忆：</strong></p>
                    <ul>
                      <li>奥氏体 ↔ 马氏体</li>
                      <li>温度驱动</li>
                      <li>应力驱动</li>
                    </ul>
                    
                    <p><strong>超弹性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\sigma_c = \frac{\Delta G}{V_m \gamma}" :inline="false" />
                    </div>
                    
                    <p><strong>典型材料：</strong></p>
                    <ul>
                      <li>NiTi合金</li>
                      <li>Cu基合金</li>
                      <li>Fe基合金</li>
                    </ul>
                  </div>
                </div>
                
                <div class="mart-item">
                  <h4>孪晶结构</h4>
                  <div class="mart-content">
                    <p><strong>孪晶界能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma_{tw} = \frac{G b^2}{4\pi(1-\nu)} \ln\left(\frac{d}{b}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>孪晶变形：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma = 2\frac{a-c}{a+c}" :inline="false" />
                    </div>
                    
                    <p><strong>应力-应变关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\sigma = \sigma_0 + H\gamma" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="st-card ferroelectric">
            <h3>⚡ 铁电相变</h3>
            <div class="st-content">
              <div class="ferroelectric-transitions">
                <div class="ferro-item">
                  <h4>Landau-Devonshire理论</h4>
                  <div class="ferro-content">
                    <p><strong>自由能展开：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2}\alpha P^2 + \frac{1}{4}\beta P^4 + \frac{1}{6}\gamma P^6 - EP" :inline="false" />
                    </div>
                    
                    <p><strong>温度依赖：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha(T) = \alpha_0(T-T_c)" :inline="false" />
                    </div>
                    
                    <p><strong>自发极化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P_s = \sqrt{\frac{-\alpha}{\beta}} \quad (T < T_c)" :inline="false" />
                    </div>
                    
                    <p><strong>介电常数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\epsilon = \epsilon_\infty + \frac{C}{T-T_c}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="ferro-item">
                  <h4>畴结构</h4>
                  <div class="ferro-content">
                    <p><strong>畴壁能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma_w = 2\sqrt{G\alpha}" :inline="false" />
                    </div>
                    
                    <p><strong>畴壁厚度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\delta = \sqrt{\frac{G}{\alpha}}" :inline="false" />
                    </div>
                    
                    <p><strong>畴结构演化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial P}{\partial t} = -L\frac{\delta F}{\delta P}" :inline="false" />
                    </div>
                    
                    <p><strong>矫顽场：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_c = \frac{2\gamma_w}{P_s \delta}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="ferro-item">
                  <h4>多铁性材料</h4>
                  <div class="ferro-content">
                    <p><strong>磁电耦合：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = F_E + F_M + \alpha_{EM} P \cdot M" :inline="false" />
                    </div>
                    
                    <p><strong>螺旋磁序：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{M}(z) = M_0[\cos(qz)\hat{x} + \sin(qz)\hat{y}]" :inline="false" />
                    </div>
                    
                    <p><strong>逆Dzyaloshinskii-Moriya相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P \propto \vec{e}_{ij} \times (\vec{S}_i \times \vec{S}_j)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>液晶相变</h2>
      
      <div class="liquid-crystal-transitions">
        <div class="lc-framework">
          <div class="lc-card nematic">
            <h3>🌊 向列相相变</h3>
            <div class="lc-content">
              <div class="nematic-transitions">
                <div class="nem-item">
                  <h4>Maier-Saupe理论</h4>
                  <div class="nem-content">
                    <p><strong>分子场理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -\frac{1}{2}\sum_{i,j} J_{ij} P_2(\cos\theta_{ij})" :inline="false" />
                    </div>
                    
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \langle P_2(\cos\theta) \rangle = \langle \frac{3\cos^2\theta - 1}{2} \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>自洽方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \int_{-1}^{1} P_2(x) \frac{e^{\beta J S P_2(x)}}{\int_{-1}^{1} e^{\beta J S P_2(y)} dy} dx" :inline="false" />
                    </div>
                    
                    <p><strong>相变温度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="k_B T_{NI} = \frac{4.541 J}{4.541}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="nem-item">
                  <h4>弹性理论</h4>
                  <div class="nem-content">
                    <p><strong>Frank弹性能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2}K_1(\nabla \cdot \vec{n})^2 + \frac{1}{2}K_2(\vec{n} \cdot \nabla \times \vec{n})^2 + \frac{1}{2}K_3|\vec{n} \times (\nabla \times \vec{n})|^2" :inline="false" />
                    </div>
                    
                    <p><strong>弹性常数：</strong></p>
                    <ul>
                      <li>K₁: 展曲弹性</li>
                      <li>K₂: 扭曲弹性</li>
                      <li>K₃: 弯曲弹性</li>
                    </ul>
                    
                    <p><strong>缺陷结构：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{\text{defect}} = \pi K \ln\left(\frac{R}{r_c}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="nem-item">
                  <h4>电场效应</h4>
                  <div class="nem-content">
                    <p><strong>介电各向异性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta\epsilon = \epsilon_\parallel - \epsilon_\perp" :inline="false" />
                    </div>
                    
                    <p><strong>Fréedericksz转变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_c = \frac{\pi}{d}\sqrt{\frac{K}{\epsilon_0 \Delta\epsilon}}" :inline="false" />
                    </div>
                    
                    <p><strong>响应时间：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\tau = \frac{\gamma d^2}{\pi^2 K}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="lc-card smectic">
            <h3>📚 近晶相相变</h3>
            <div class="lc-content">
              <div class="smectic-transitions">
                <div class="sm-item">
                  <h4>McMillan理论</h4>
                  <div class="sm-content">
                    <p><strong>密度波序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(z) = \psi_0 e^{iqz}" :inline="false" />
                    </div>
                    
                    <p><strong>自由能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F = \frac{1}{2}a|\psi|^2 + \frac{1}{4}b|\psi|^4 + \frac{1}{2}K(\nabla\psi)^2" :inline="false" />
                    </div>
                    
                    <p><strong>耦合参数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha = \frac{T_{NA} - T_{NI}}{T_{NI}}" :inline="false" />
                    </div>
                    
                    <p><strong>相变类型：</strong></p>
                    <ul>
                      <li>α > 0.87: 一级相变</li>
                      <li>α < 0.87: 二级相变</li>
                    </ul>
                  </div>
                </div>
                
                <div class="sm-item">
                  <h4>层状结构</h4>
                  <div class="sm-content">
                    <p><strong>层间距：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="d = \frac{2\pi}{q}" :inline="false" />
                    </div>
                    
                    <p><strong>压缩模量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="B = \frac{\partial^2 F}{\partial d^2}" :inline="false" />
                    </div>
                    
                    <p><strong>弯曲模量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="K = \frac{1}{2}B d^2" :inline="false" />
                    </div>
                    
                    <p><strong>Peierls-Nabarro势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(u) = V_0 \cos\left(\frac{2\pi u}{d}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sm-item">
                  <h4>缺陷与位错</h4>
                  <div class="sm-content">
                    <p><strong>刃位错：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="u(x,y) = \frac{d}{2\pi} \arctan\left(\frac{y}{x}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>位错能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_d = \frac{Bd^2}{4\pi} \ln\left(\frac{R}{r_c}\right)" :inline="false" />
                    </div>
                    
                    <p><strong>焦锥缺陷：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_{fc} = \pi K \ln\left(\frac{R}{r_c}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>磁性相变</h2>
      
      <div class="magnetic-transitions">
        <div class="mag-framework">
          <div class="mag-card spin-reorientation">
            <h3>🧭 自旋重取向相变</h3>
            <div class="mag-content">
              <div class="spin-reorientation-transitions">
                <div class="sr-item">
                  <h4>磁晶各向异性</h4>
                  <div class="sr-content">
                    <p><strong>各向异性能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_A = K_1 \sin^2\theta + K_2 \sin^4\theta + K_3 \sin^6\theta" :inline="false" />
                    </div>
                    
                    <p><strong>温度依赖：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="K_i(T) = K_i(0) \left(\frac{M(T)}{M(0)}\right)^{n_i}" :inline="false" />
                    </div>
                    
                    <p><strong>重取向温度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_{SR}: K_1(T_{SR}) = 0" :inline="false" />
                    </div>
                    
                    <p><strong>易磁化轴：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\partial E_A}{\partial\theta} = 0, \quad \frac{\partial^2 E_A}{\partial\theta^2} > 0" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sr-item">
                  <h4>竞争相互作用</h4>
                  <div class="sr-content">
                    <p><strong>交换-偶极相互作用：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -J\sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j - D\sum_{i,j} \frac{\vec{S}_i \cdot \vec{S}_j - 3(\vec{S}_i \cdot \hat{r}_{ij})(\vec{S}_j \cdot \hat{r}_{ij})}{r_{ij}^3}" :inline="false" />
                    </div>
                    
                    <p><strong>形状各向异性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_d = \frac{1}{2}\mu_0 M^2 (N_a - N_c)" :inline="false" />
                    </div>
                    
                    <p><strong>应力各向异性：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_\sigma = \frac{3}{2}\lambda_s \sigma \sin^2\theta" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="sr-item">
                  <h4>典型系统</h4>
                  <div class="sr-content">
                    <p><strong>稀土-过渡金属合金：</strong></p>
                    <ul>
                      <li>TbFe₂, DyFe₂</li>
                      <li>SmCo₅系列</li>
                      <li>Nd₂Fe₁₄B</li>
                    </ul>
                    
                    <p><strong>单轴晶体：</strong></p>
                    <ul>
                      <li>六方铁氧体</li>
                      <li>尖晶石铁氧体</li>
                      <li>稀土金属</li>
                    </ul>
                    
                    <p><strong>薄膜系统：</strong></p>
                    <ul>
                      <li>垂直磁各向异性</li>
                      <li>界面各向异性</li>
                      <li>应变诱导各向异性</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mag-card metamagnetic">
            <h3>🔄 变磁相变</h3>
            <div class="mag-content">
              <div class="metamagnetic-transitions">
                <div class="mm-item">
                  <h4>理论模型</h4>
                  <div class="mm-content">
                    <p><strong>反铁磁-铁磁相变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -J_1\sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j - J_2\sum_{\langle\langle i,j \rangle\rangle} \vec{S}_i \cdot \vec{S}_j - \vec{H} \cdot \sum_i \vec{S}_i" :inline="false" />
                    </div>
                    
                    <p><strong>临界磁场：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_c = \frac{2z|J_1|S - 2z'J_2 S}{\mu_B g}" :inline="false" />
                    </div>
                    
                    <p><strong>磁化跳跃：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta M = M_{FM} - M_{AFM}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="mm-item">
                  <h4>自旋翻转相变</h4>
                  <div class="mm-content">
                    <p><strong>倾斜反铁磁：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\vec{M}_A = M_s(\sin\theta, 0, \cos\theta)" :inline="false" />
                    </div>
                    <div class="formula-block">
                      <katex-element expression="\vec{M}_B = M_s(-\sin\theta, 0, \cos\theta)" :inline="false" />
                    </div>
                    
                    <p><strong>倾斜角：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\cos\theta = \frac{H}{H_E + H_A}" :inline="false" />
                    </div>
                    
                    <p><strong>自旋翻转场：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{SF} = \sqrt{H_E(H_E + 2H_A)}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="mm-item">
                  <h4>实验观测</h4>
                  <div class="mm-content">
                    <p><strong>磁化曲线特征：</strong></p>
                    <ul>
                      <li>磁化跳跃</li>
                      <li>磁滞回线</li>
                      <li>临界端点</li>
                    </ul>
                    
                    <p><strong>典型材料：</strong></p>
                    <ul>
                      <li>FeCl₂, CoCl₂</li>
                      <li>MnF₂, FeF₂</li>
                      <li>稀土化合物</li>
                    </ul>
                    
                    <p><strong>应用：</strong></p>
                    <ul>
                      <li>磁制冷</li>
                      <li>磁存储</li>
                      <li>自旋电子学</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>量子相变</h2>
      
      <div class="quantum-phase-transitions">
        <div class="qpt-framework">
          <div class="qpt-card quantum-ising">
            <h3>❄️ 量子Ising模型</h3>
            <div class="qpt-content">
              <div class="quantum-ising-transitions">
                <div class="qi-item">
                  <h4>横场Ising模型</h4>
                  <div class="qi-content">
                    <p><strong>哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -J\sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x" :inline="false" />
                    </div>
                    
                    <p><strong>量子临界点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="h_c = zJ" :inline="false" />
                    </div>
                    
                    <p><strong>能隙：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta \propto |h - h_c|^{z\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>关联长度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\xi \propto |h - h_c|^{-\nu}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="qi-item">
                  <h4>Jordan-Wigner变换</h4>
                  <div class="qi-content">
                    <p><strong>费米子化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\sigma_j^+ = c_j^\dagger \prod_{k<j} (1-2c_k^\dagger c_k)" :inline="false" />
                    </div>
                    
                    <p><strong>一维精确解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_k = -2\sqrt{J^2 + h^2 + 2Jh\cos k}" :inline="false" />
                    </div>
                    
                    <p><strong>基态能：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E_0 = -\frac{1}{\pi}\int_0^\pi dk \sqrt{J^2 + h^2 + 2Jh\cos k}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="qi-item">
                  <h4>绝热量子计算</h4>
                  <div class="qi-content">
                    <p><strong>绝热演化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H(t) = (1-s(t))H_0 + s(t)H_1" :inline="false" />
                    </div>
                    
                    <p><strong>绝热条件：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\left|\frac{\langle n|\dot{H}|0\rangle}{\Delta_{n0}^2}\right| \ll 1" :inline="false" />
                    </div>
                    
                    <p><strong>Landau-Zener公式：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="P = \exp\left(-\frac{\pi\Delta^2}{2\hbar v}\right)" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="qpt-card bose-hubbard">
            <h3>🔵 Bose-Hubbard模型</h3>
            <div class="qpt-content">
              <div class="bose-hubbard-transitions">
                <div class="bh-item">
                  <h4>超流-Mott绝缘体相变</h4>
                  <div class="bh-content">
                    <p><strong>哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -t\sum_{\langle i,j \rangle} (b_i^\dagger b_j + h.c.) + \frac{U}{2}\sum_i n_i(n_i-1) - \mu\sum_i n_i" :inline="false" />
                    </div>
                    
                    <p><strong>相图：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\frac{\mu}{U} = n - \frac{zt}{U}" :inline="false" />
                    </div>
                    
                    <p><strong>临界点：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\left(\frac{t}{U}\right)_c = \frac{1}{2z}\left[n(n+1) - \left(\frac{\mu}{U}\right)^2\right]" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="bh-item">
                  <h4>平均场理论</h4>
                  <div class="bh-content">
                    <p><strong>序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi = \langle b_i \rangle" :inline="false" />
                    </div>
                    
                    <p><strong>有效哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{\text{eff}} = -zt|\psi|^2 + \frac{U}{2}n(n-1) - \tilde{\mu}n" :inline="false" />
                    </div>
                    
                    <p><strong>自洽方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi = \frac{zt\psi}{\text{Tr}[e^{-\beta H_{\text{eff}}}]} \text{Tr}[b e^{-\beta H_{\text{eff}}}]" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="bh-item">
                  <h4>实验实现</h4>
                  <div class="bh-content">
                    <p><strong>光晶格中的冷原子：</strong></p>
                    <ul>
                      <li>可调参数t/U</li>
                      <li>原位成像</li>
                      <li>相干性测量</li>
                    </ul>
                    
                    <p><strong>约瑟夫森结阵列：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = -E_J\sum_{\langle i,j \rangle} \cos(\phi_i - \phi_j) + E_C\sum_i n_i^2" :inline="false" />
                    </div>
                    
                    <p><strong>极化子系统：</strong></p>
                    <ul>
                      <li>激子-极化子</li>
                      <li>腔极化子</li>
                      <li>Rydberg原子</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展与应用</h2>
      
      <div class="modern-developments">
        <div class="md-framework">
          <div class="md-card machine-learning">
            <h3>🤖 机器学习方法</h3>
            <div class="md-content">
              <div class="ml-applications">
                <div class="ml-item">
                  <h4>相变识别</h4>
                  <div class="ml-content">
                    <p><strong>监督学习：</strong></p>
                    <ul>
                      <li>支持向量机</li>
                      <li>随机森林</li>
                      <li>神经网络</li>
                    </ul>
                    
                    <p><strong>无监督学习：</strong></p>
                    <ul>
                      <li>主成分分析</li>
                      <li>聚类算法</li>
                      <li>自编码器</li>
                    </ul>
                    
                    <p><strong>特征工程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="X = \{C, \chi, \rho_s, ...\}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="ml-item">
                  <h4>神经网络量子态</h4>
                  <div class="ml-content">
                    <p><strong>RBM表示：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(s) = \sum_h e^{\sum_i a_i s_i + \sum_j b_j h_j + \sum_{ij} W_{ij} s_i h_j}" :inline="false" />
                    </div>
                    
                    <p><strong>变分Monte Carlo：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="E = \frac{\langle\psi|H|\psi\rangle}{\langle\psi|\psi\rangle}" :inline="false" />
                    </div>
                    
                    <p><strong>参数优化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\theta_{t+1} = \theta_t - \eta \nabla_\theta E" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="md-card quantum-simulation">
            <h3>⚛️ 量子模拟</h3>
            <div class="md-content">
              <div class="qs-applications">
                <div class="qs-item">
                  <h4>数字量子模拟</h4>
                  <div class="qs-content">
                    <p><strong>Trotter分解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="e^{-iHt} \approx \left(\prod_k e^{-iH_k t/n}\right)^n" :inline="false" />
                    </div>
                    
                    <p><strong>量子算法：</strong></p>
                    <ul>
                      <li>VQE (变分量子本征求解器)</li>
                      <li>QAOA (量子近似优化算法)</li>
                      <li>量子退火</li>
                    </ul>
                    
                    <p><strong>误差缓解：</strong></p>
                    <ul>
                      <li>零噪声外推</li>
                      <li>对称性验证</li>
                      <li>后选择</li>
                    </ul>
                  </div>
                </div>
                
                <div class="qs-item">
                  <h4>模拟量子模拟</h4>
                  <div class="qs-content">
                    <p><strong>冷原子系统：</strong></p>
                    <ul>
                      <li>光晶格</li>
                      <li>Feshbach共振</li>
                      <li>人工规范场</li>
                    </ul>
                    
                    <p><strong>离子阱：</strong></p>
                    <ul>
                      <li>长程相互作用</li>
                      <li>个体寻址</li>
                      <li>高保真度操作</li>
                    </ul>
                    
                    <p><strong>超导电路：</strong></p>
                    <ul>
                      <li>可调耦合</li>
                      <li>快速门操作</li>
                      <li>集成化</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.st-framework, .lc-framework, .mag-framework, .qpt-framework, .md-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.st-card, .lc-card, .mag-card, .qpt-card, .md-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.st-card.martensitic {
  border-left: 5px solid #10b981;
}

.st-card.ferroelectric {
  border-left: 5px solid #3b82f6;
}

.lc-card.nematic {
  border-left: 5px solid #8b5cf6;
}

.lc-card.smectic {
  border-left: 5px solid #f59e0b;
}

.mag-card.spin-reorientation {
  border-left: 5px solid #ef4444;
}

.mag-card.metamagnetic {
  border-left: 5px solid #06b6d4;
}

.qpt-card.quantum-ising {
  border-left: 5px solid #ec4899;
}

.qpt-card.bose-hubbard {
  border-left: 5px solid #84cc16;
}

.md-card.machine-learning {
  border-left: 5px solid #6366f1;
}

.md-card.quantum-simulation {
  border-left: 5px solid #f97316;
}

.st-card h3, .lc-card h3, .mag-card h3, .qpt-card h3, .md-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.martensitic-transitions, .ferroelectric-transitions, .nematic-transitions, .smectic-transitions, .spin-reorientation-transitions, .metamagnetic-transitions, .quantum-ising-transitions, .bose-hubbard-transitions, .ml-applications, .qs-applications {
  display: grid;
  gap: 1.5rem;
}

.mart-item, .ferro-item, .nem-item, .sm-item, .sr-item, .mm-item, .qi-item, .bh-item, .ml-item, .qs-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.mart-item h4, .ferro-item h4, .nem-item h4, .sm-item h4, .sr-item h4, .mm-item h4, .qi-item h4, .bh-item h4, .ml-item h4, .qs-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .st-framework, .lc-framework, .mag-framework, .qpt-framework, .md-framework {
    grid-template-columns: 1fr;
  }
}
</style>