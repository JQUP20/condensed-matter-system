<template>
  <div class="chapter-content">
    <h1 class="chapter-title">6.5.2 重整化群的现代应用</h1>
    
    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3>学习目标</h3>
      <ul>
        <li>了解重整化群在拓扑相变中的应用</li>
        <li>掌握多体局域化的重整化群理论</li>
        <li>理解非平衡系统中的重整化群方法</li>
        <li>学习机器学习与重整化群的结合</li>
        <li>探索重整化群在量子信息中的应用</li>
      </ul>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <h3>重整化群的现代发展</h3>
      <p>
        重整化群理论自Wilson开创以来，不断发展并应用到凝聚态物理的各个前沿领域。
        从拓扑相变到多体局域化，从非平衡统计力学到量子信息，重整化群为理解复杂
        量子多体系统提供了统一的理论框架。本节将介绍这些现代应用及其理论发展。
      </p>
    </div>

    <!-- 拓扑相变中的重整化群 -->
    <div class="topological-transitions-section">
      <h3>拓扑相变中的重整化群</h3>
      
      <div class="topological-phases">
        <h4>拓扑相的基本概念</h4>
        <p>
          拓扑相是由全局拓扑性质而非局域序参量表征的量子相。拓扑相变通常不能
          用Landau理论描述，需要新的理论工具。
        </p>
        
        <div class="topological-characteristics">
          <h5>拓扑相的特征</h5>
          <div class="characteristics-grid">
            <div class="characteristic-item">
              <h6>拓扑不变量</h6>
              <p>用整数或Z₂指标表征，对局域扰动稳定</p>
            </div>
            
            <div class="characteristic-item">
              <h6>边界态</h6>
              <p>体-边对应关系，受拓扑保护的边界模式</p>
            </div>
            
            <div class="characteristic-item">
              <h6>能隙保护</h6>
              <p>拓扑性质由体能隙保护，相变时能隙关闭</p>
            </div>
            
            <div class="characteristic-item">
              <h6>量子纠缠</h6>
              <p>特殊的纠缠结构，如面积定律的修正</p>
            </div>
          </div>
        </div>
      </div>

      <div class="kosterlitz-thouless-transition">
        <h4>Kosterlitz-Thouless相变</h4>
        <p>
          KT相变是最著名的拓扑相变，由涡旋-反涡旋对的束缚-解束缚转变驱动：
        </p>
        
        <div class="kt-model">
          <h5>XY模型和涡旋</h5>
          <p>二维XY模型的哈密顿量：</p>
          <div class="formula-box">
            $$H = -J\sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)$$</div>
          
          <p>在低温下，可以用涡旋气体描述：</p> <div class="formula-box">$$H_{\text{vortex}} = \sum_{i&lt;j} q_i q_j G(\mathbf{r}_i - \mathbf{r}_j) + E_c \sum_i q_i^2$$</div><p>其中$q_i = \pm 1, \pm 2, \ldots$是涡旋电荷，$G(\mathbf{r})$是格林函数。</p>
        </div>
        
        <div class="kt-rg-analysis">
          <h5>KT重整化群方程</h5>
          <p>涡旋气体的重整化群方程：</p>
          
          <div class="kt-equations">
            <div class="equation-item">
              <h6>刚度流方程</h6>
              <div class="formula-box">$$\frac{dK}{dl} = -2\pi^3 \sum_{q=1}^\infty q^2 y_q^2$$</div>
            </div>
            
            <div class="equation-item">
              <h6>涡旋逸度流方程</h6> <div class="formula-box">$$\frac{dy_q}{dl} = (2-qK)y_q + \text{非线性项}$$</div>
            </div>
          </div><p>其中$K = \beta J$是无量纲刚度，$y_q$是$q$-涡旋的逸度。</p>
        </div>
        
        <div class="kt-phase-diagram">
          <h5>KT相图</h5>
          <div class="phase-diagram-kt">
            <svg width="500" height="350" viewBox="0 0 500 350">
              <!-- 坐标轴 -->
              <line x1="50" y1="300" x2="450" y2="300" stroke="#2d3436" stroke-width="2"/>
              <line x1="50" y1="300" x2="50" y2="50" stroke="#2d3436" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="250" y="330" text-anchor="middle" font-size="14">温度 T</text>
              <text x="25" y="175" text-anchor="middle" font-size="14" transform="rotate(-90 25 175)">刚度 K</text>
              
              <!-- KT临界线 -->
              <line x1="200" y1="300" x2="200" y2="150" stroke="#e17055" stroke-width="4"/>
              <text x="200" y="140" text-anchor="middle" font-size="12" fill="#d63031">K = 2</text>
              
              <!-- 相区域 -->
              <text x="120" y="200" text-anchor="middle" font-size="14" fill="#0984e3">BKT相</text>
              <text x="120" y="220" text-anchor="middle" font-size="12" fill="#0984e3">(准长程序)</text>
              
              <text x="320" y="200" text-anchor="middle" font-size="14" fill="#e84393">无序相</text>
              <text x="320" y="220" text-anchor="middle" font-size="12" fill="#e84393">(指数衰减)</text>
              
              <!-- 流线 -->
              <path d="M 80 250 Q 150 200 200 150" fill="none" stroke="#74b9ff" stroke-width="2" stroke-dasharray="5,5"/>
              <path d="M 320 250 Q 250 200 200 150" fill="none" stroke="#74b9ff" stroke-width="2" stroke-dasharray="5,5"/>
              
              <!-- 临界点 -->
              <circle cx="200" cy="150" r="5" fill="#d63031"/>
              <text x="220" y="155" font-size="12" fill="#d63031">KT点</text>
            </svg>
          </div>
          
          <div class="kt-critical-behavior">
            <h6>临界行为</h6>
            <p>在KT相变点附近：</p>
            <ul><li>关联长度：$\xi \sim \exp(b/\sqrt{t})$，其中$t = |T-T_{KT}|/T_{KT}$</li><li>比热：$C \sim \ln|\ln t|$</li><li>磁化率：$\chi \sim t^{-\eta(t)}$，其中$\eta(t)$连续变化</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="quantum-hall-transitions">
        <h4>量子霍尔相变</h4>
        <p>
          整数和分数量子霍尔效应中的相变是拓扑相变的重要例子：
        </p>
        
        <div class="iqhe-transitions">
          <h5>整数量子霍尔相变</h5>
          <p>
            整数量子霍尔平台之间的相变可以用网络模型描述：
          </p>
          
          <div class="network-model">
            <h6>Chalker-Coddington网络模型</h6>
            <div class="network-diagram">
              <svg width="400" height="300" viewBox="0 0 400 300">
                <!-- 网络节点 -->
                <circle cx="100" cy="100" r="8" fill="#74b9ff"/>
                <circle cx="200" cy="100" r="8" fill="#74b9ff"/>
                <circle cx="300" cy="100" r="8" fill="#74b9ff"/>
                <circle cx="150" cy="150" r="8" fill="#74b9ff"/>
                <circle cx="250" cy="150" r="8" fill="#74b9ff"/>
                <circle cx="100" cy="200" r="8" fill="#74b9ff"/>
                <circle cx="200" cy="200" r="8" fill="#74b9ff"/>
                <circle cx="300" cy="200" r="8" fill="#74b9ff"/>
                
                <!-- 连接线 -->
                <line x1="100" y1="100" x2="150" y2="150" stroke="#fd79a8" stroke-width="3"/>
                <line x1="200" y1="100" x2="150" y2="150" stroke="#fd79a8" stroke-width="3"/>
                <line x1="200" y1="100" x2="250" y2="150" stroke="#fd79a8" stroke-width="3"/>
                <line x1="300" y1="100" x2="250" y2="150" stroke="#fd79a8" stroke-width="3"/>
                <line x1="150" y1="150" x2="100" y2="200" stroke="#fd79a8" stroke-width="3"/>
                <line x1="150" y1="150" x2="200" y2="200" stroke="#fd79a8" stroke-width="3"/>
                <line x1="250" y1="150" x2="200" y2="200" stroke="#fd79a8" stroke-width="3"/>
                <line x1="250" y1="150" x2="300" y2="200" stroke="#fd79a8" stroke-width="3"/>
                
                <text x="200" y="250" text-anchor="middle" font-size="12">网络模型</text>
              </svg>
            </div>
            
            <p>网络模型的传输矩阵具有特殊的对称性，导致多重分形临界行为。</p>
          </div>
        </div>
        
        <div class="fqhe-transitions">
          <h5>分数量子霍尔相变</h5>
          <p>
            分数量子霍尔态之间的相变涉及准粒子的凝聚：
          </p>
          
          <div class="composite-fermion">
            <h6>复合费米子理论</h6>
            <p>
              在复合费米子图像中，分数量子霍尔态对应于复合费米子的整数量子霍尔态。
              相变可以理解为复合费米子的Landau能级交叉。
            </p>
            
            <div class="formula-box">$$\nu = \frac{p}{2p+1}, \quad p = 1,2,3,\ldots$$</div>
          </div>
        </div>
      </div>

      <div class="topological-insulators">
        <h4>拓扑绝缘体相变</h4>
        <p>
          拓扑绝缘体的相变由Z₂拓扑不变量的改变表征：
        </p>
        
        <div class="z2-classification">
          <h5>Z₂分类</h5>
          <p>
            时间反演不变的拓扑绝缘体由Z₂不变量分类：
          </p>
          
          <div class="z2-invariants">
            <div class="invariant-item">
              <h6>2D量子自旋霍尔态</h6><p>一个Z₂不变量$\nu$</p>
              <div class="formula-box">$$(-1)^\nu = \prod_{i=1}^4 \sqrt{\frac{\det[w(\mathbf{k}_i)]}{\text{Pf}[w(\mathbf{k}_i)]}}$$</div>
            </div>
            
            <div class="invariant-item">
              <h6>3D拓扑绝缘体</h6><p>四个Z₂不变量$(\nu_0;\nu_1\nu_2\nu_3)$</p>
            </div>
          </div>
        </div>
        
        <div class="ti-phase-transition">
          <h5>拓扑相变的重整化群</h5>
          <p>
            拓扑绝缘体相变通常发生在Dirac点，可以用有效低能理论描述：
          </p>
          
          <div class="dirac-theory">
            <h6>Dirac有效理论</h6>
            <div class="formula-box">$$H = v_F(\sigma_x k_x + \sigma_y k_y) + m\sigma_z$$</div><p>其中质量项$m$的符号决定拓扑性质。相变发生在$m=0$。</p>
          </div>
          
          <div class="disorder-effects">
            <h6>无序效应</h6>
            <p>
              无序对拓扑相变的影响可以用重整化群分析：
            </p>
            <ul>
              <li>时间反演不变无序：不影响Z₂分类</li>
              <li>磁性无序：可以驱动拓扑相变</li>
              <li>强无序：可能导致安德森局域化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 多体局域化 -->
    <div class="many-body-localization-section">
      <h3>多体局域化</h3>
      
      <div class="mbl-introduction">
        <h4>多体局域化的基本概念</h4>
        <p>
          多体局域化(MBL)是强无序相互作用系统中的一种现象，系统即使在有限温度下
          也不会热化，保持对初态的记忆。
        </p>
        
        <div class="mbl-characteristics">
          <h5>MBL的特征</h5>
          <div class="characteristics-grid">
            <div class="characteristic-item">
              <h6>热化失效</h6>
              <p>系统不满足本征态热化假设(ETH)</p>
            </div>
            
            <div class="characteristic-item">
              <h6>面积定律</h6>
              <p>本征态纠缠熵满足面积定律</p>
            </div>
            
            <div class="characteristic-item">
              <h6>对数增长</h6>
              <p>纠缠熵随时间对数增长</p>
            </div>
            
            <div class="characteristic-item">
              <h6>局域积分</h6>
              <p>存在大量局域守恒量</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mbl-models">
        <h4>MBL模型</h4>
        <p>
          研究MBL的典型模型包括随机场Heisenberg链和Aubry-André模型：
        </p>
        
        <div class="random-field-heisenberg">
          <h5>随机场Heisenberg链</h5>
          <div class="formula-box">$$H = J\sum_i (\sigma_i^x \sigma_{i+1}^x + \sigma_i^y \sigma_{i+1}^y + \Delta \sigma_i^z \sigma_{i+1}^z) + \sum_i h_i \sigma_i^z$$</div><p>其中$h_i$是随机磁场，$\Delta$是各向异性参数。</p>
        </div>
        
        <div class="aubry-andre-model">
          <h5>Aubry-André模型</h5>
          <div class="formula-box">$$H = -t\sum_i (c_i^\dagger c_{i+1} + \text{h.c.}) + \sum_i V\cos(2\pi\alpha i + \phi) n_i$$</div><p>这是一个准周期模型，在$V > 2t$时发生局域化相变。</p>
        </div>
      </div>

      <div class="mbl-rg-theory">
        <h4>MBL的重整化群理论</h4>
        <p>
          MBL相变可以用实空间重整化群方法分析：
        </p>
        
        <div class="rsrg-mbl">
          <h5>强无序重整化群(SDRG)</h5>
          <p>
            SDRG方法通过逐步消除最强的局域项来分析MBL：
          </p>
          
          <div class="sdrg-procedure">
            <div class="step-item">
              <h6>步骤1：识别最强项</h6>
              <p>找到能量标度最大的局域项（磁场或耦合）</p>
            </div>
            
            <div class="step-item">
              <h6>步骤2：微扰处理</h6>
              <p>将其他项作为微扰，进行二阶微扰论</p>
            </div>
            
            <div class="step-item">
              <h6>步骤3：有效理论</h6>
              <p>得到低能有效理论，重复过程</p>
            </div>
          </div>
        </div>
        
        <div class="mbl-phase-diagram">
          <h5>MBL相图</h5>
          <div class="phase-diagram-mbl">
            <svg width="500" height="350" viewBox="0 0 500 350">
              <!-- 坐标轴 -->
              <line x1="50" y1="300" x2="450" y2="300" stroke="#2d3436" stroke-width="2"/>
              <line x1="50" y1="300" x2="50" y2="50" stroke="#2d3436" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="250" y="330" text-anchor="middle" font-size="14">无序强度 W</text>
              <text x="25" y="175" text-anchor="middle" font-size="14" transform="rotate(-90 25 175)">相互作用 J</text>
              
              <!-- 相边界 -->
              <path d="M 150 300 Q 200 200 250 100 Q 300 150 350 200" 
                    fill="none" stroke="#e17055" stroke-width="4"/>
              
              <!-- 相区域 -->
              <text x="120" y="200" text-anchor="middle" font-size="14" fill="#0984e3">热化相</text>
              <text x="120" y="220" text-anchor="middle" font-size="12" fill="#0984e3">(ETH)</text>
              
              <text x="350" y="250" text-anchor="middle" font-size="14" fill="#e84393">MBL相</text>
              <text x="350" y="270" text-anchor="middle" font-size="12" fill="#e84393">(局域化)</text>
              
              <!-- 临界区域 -->
              <ellipse cx="250" cy="150" rx="50" ry="30" fill="#fd79a8" opacity="0.3"/>
              <text x="250" y="155" text-anchor="middle" font-size="12">临界区</text>
            </svg>
          </div>
        </div>
      </div>

      <div class="mbl-experiments">
        <h4>MBL的实验研究</h4>
        <p>
          MBL现象已在多个实验平台中观测到：
        </p>
        
        <div class="experimental-platforms">
          <div class="platform-item">
            <h5>冷原子系统</h5>
            <p>光晶格中的超冷原子，可以精确控制无序和相互作用</p>
          </div>
          
          <div class="platform-item">
            <h5>离子阱</h5>
            <p>囚禁离子链，长程相互作用系统</p>
          </div>
          
          <div class="platform-item">
            <h5>超导量子比特</h5>
            <p>可编程量子模拟器</p>
          </div>
          
          <div class="platform-item">
            <h5>核磁共振</h5>
            <p>固体中的核自旋系统</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 非平衡系统中的重整化群 -->
    <div class="nonequilibrium-rg-section">
      <h3>非平衡系统中的重整化群</h3>
      
      <div class="driven-systems">
        <h4>驱动量子系统</h4>
        <p>
          周期驱动的量子系统展现出丰富的非平衡相变现象：
        </p>
        
        <div class="floquet-theory">
          <h5>Floquet理论</h5>
          <p>
            周期驱动系统可以用Floquet理论描述：
          </p>
          
          <div class="floquet-hamiltonian">
            <h6>Floquet哈密顿量</h6>
            <div class="formula-box">$$H_F = H_0 + \sum_{n \neq 0} H_n e^{in\omega t}$$</div><p>其中$\omega$是驱动频率。</p>
          </div>
          
          <div class="floquet-phases">
            <h6>Floquet拓扑相</h6>
            <p>
              驱动系统可以实现平衡态不存在的拓扑相：
            </p>
            <ul>
              <li>Floquet拓扑绝缘体</li>
              <li>时间晶体</li>
              <li>预热化平台态</li>
            </ul>
          </div>
        </div>
        
        <div class="heating-thermalization">
          <h5>加热和热化</h5>
          <p>
            驱动系统的一个关键问题是能量吸收和热化：
          </p>
          
          <div class="heating-mechanisms">
            <div class="mechanism-item">
              <h6>多光子吸收</h6>
              <p>高频驱动下的多光子过程</p>
            </div>
            
            <div class="mechanism-item">
              <h6>共振加热</h6>
              <p>驱动频率与能级间距共振</p>
            </div>
            
            <div class="mechanism-item">
              <h6>混沌加热</h6>
              <p>经典混沌导致的快速加热</p>
            </div>
          </div>
        </div>
      </div>

      <div class="open-quantum-systems">
        <h4>开放量子系统</h4>
        <p>
          与环境耦合的开放量子系统需要考虑耗散效应：
        </p>
        
        <div class="lindblad-equation">
          <h5>Lindblad主方程</h5>
          <div class="formula-box">$$\frac{d\rho}{dt} = -i[H,\rho] + \sum_k \left( L_k \rho L_k^\dagger - \frac{1}{2}\{L_k^\dagger L_k, \rho\} \right)$$</div><p>其中$L_k$是Lindblad算符，描述与环境的耦合。</p>
        </div>
        
        <div class="dissipative-phase-transitions">
          <h5>耗散相变</h5>
          <p>
            开放系统中的稳态相变：
          </p>
          
          <div class="dissipative-examples">
            <div class="example-item">
              <h6>激光驱动原子</h6>
              <p>激光冷却中的相变现象</p>
            </div>
            
            <div class="example-item">
              <h6>腔QED系统</h6>
              <p>原子-光子相互作用的相变</p>
            </div>
            
            <div class="example-item">
              <h6>Rydberg原子</h6>
              <p>强相互作用Rydberg原子的集体行为</p>
            </div>
          </div>
        </div>
      </div>

      <div class="keldysh-formalism">
        <h4>Keldysh形式主义</h4>
        <p>
          非平衡量子场论的标准方法是Keldysh形式主义：
        </p>
        
        <div class="keldysh-contour">
          <h5>Keldysh轮廓</h5>
          <div class="contour-diagram">
            <svg width="400" height="200" viewBox="0 0 400 200">
              <!-- 时间轴 -->
              <line x1="50" y1="100" x2="350" y2="100" stroke="#2d3436" stroke-width="2"/>
              <text x="200" y="130" text-anchor="middle" font-size="12">实时间</text>
              
              <!-- 前向路径 -->
              <path d="M 50 80 L 350 80" stroke="#74b9ff" stroke-width="3" marker-end="url(#arrowhead)"/>
              <text x="200" y="70" text-anchor="middle" font-size="12" fill="#0984e3">前向路径</text>
              
              <!-- 后向路径 -->
              <path d="M 350 120 L 50 120" stroke="#fd79a8" stroke-width="3" marker-end="url(#arrowhead)"/>
              <text x="200" y="140" text-anchor="middle" font-size="12" fill="#e84393">后向路径</text>
              
              <!-- 箭头定义 -->
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                        refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#2d3436"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div class="keldysh-green-functions">
          <h5>Keldysh格林函数</h5>
          <p>
            定义在Keldysh轮廓上的格林函数：
          </p>
          
          <div class="green-function-matrix">
            <div class="formula-box">$$\hat{G} = \begin{pmatrix} G^{11} & G^{12} \\ G^{21} & G^{22} \end{pmatrix}$$</div>
            
            <p>其中各分量有明确的物理意义：</p>
            <ul><li>$G^{11}, G^{22}$：时间有序和反时间有序格林函数</li><li>$G^{12}, G^{21}$：关联函数和响应函数</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 机器学习与重整化群 -->
    <div class="machine-learning-rg-section">
      <h3>机器学习与重整化群</h3>
      
      <div class="ml-rg-connection">
        <h4>机器学习与重整化群的联系</h4>
        <p>
          深度学习和重整化群在概念上有深刻的联系，都涉及多尺度信息处理：
        </p>
        
        <div class="conceptual-connections">
          <div class="connection-item">
            <h5>层次结构</h5>
            <p>深度网络的层次结构类似于重整化群的尺度层次</p>
          </div>
          
          <div class="connection-item">
            <h5>信息压缩</h5>
            <p>两者都涉及从微观到宏观的信息压缩</p>
          </div>
          
          <div class="connection-item">
            <h5>不变性</h5>
            <p>寻找在变换下不变的特征或性质</p>
          </div>
          
          <div class="connection-item">
            <h5>临界现象</h5>
            <p>深度网络的训练动力学可能存在临界现象</p>
          </div>
        </div>
      </div>

      <div class="neural-rg">
        <h4>神经网络重整化群</h4>
        <p>
          使用神经网络实现重整化群变换：
        </p>
        
        <div class="neural-rg-architecture">
          <h5>网络架构</h5>
          <div class="architecture-diagram">
            <svg width="500" height="300" viewBox="0 0 500 300">
              <!-- 输入层 -->
              <g transform="translate(50,150)">
                <circle cx="0" cy="-60" r="8" fill="#74b9ff"/>
                <circle cx="0" cy="-20" r="8" fill="#74b9ff"/>
                <circle cx="0" cy="20" r="8" fill="#74b9ff"/>
                <circle cx="0" cy="60" r="8" fill="#74b9ff"/>
                <text x="0" y="90" text-anchor="middle" font-size="12">输入</text>
              </g>
              
              <!-- 隐藏层1 -->
              <g transform="translate(150,150)">
                <circle cx="0" cy="-40" r="8" fill="#fd79a8"/>
                <circle cx="0" cy="0" r="8" fill="#fd79a8"/>
                <circle cx="0" cy="40" r="8" fill="#fd79a8"/>
                <text x="0" y="70" text-anchor="middle" font-size="12">粗粒化1</text>
              </g>
              
              <!-- 隐藏层2 -->
              <g transform="translate(250,150)">
                <circle cx="0" cy="-20" r="8" fill="#00b894"/>
                <circle cx="0" cy="20" r="8" fill="#00b894"/>
                <text x="0" y="50" text-anchor="middle" font-size="12">粗粒化2</text>
              </g>
              
              <!-- 输出层 -->
              <g transform="translate(350,150)">
                <circle cx="0" cy="0" r="8" fill="#e17055"/>
                <text x="0" y="30" text-anchor="middle" font-size="12">输出</text>
              </g>
              
              <!-- 连接线 -->
              <g stroke="#636e72" stroke-width="1" opacity="0.6">
                <!-- 输入到隐藏层1 -->
                <line x1="58" y1="90" x2="142" y2="110"/>
                <line x1="58" y1="130" x2="142" y2="150"/>
                <line x1="58" y1="170" x2="142" y2="190"/>
                <!-- 更多连接线... -->
              </g>
              
              <text x="250" y="30" text-anchor="middle" font-size="14">神经网络重整化群</text>
            </svg>
          </div>
          
          <p>每一层对应一个重整化群步骤，逐步粗粒化输入数据。</p>
        </div>
        
        <div class="training-rg">
          <h5>训练策略</h5>
          <p>
            训练神经网络重整化群的方法：
          </p>
          
          <div class="training-methods">
            <div class="method-item">
              <h6>监督学习</h6>
              <p>使用已知的重整化群变换作为训练数据</p>
            </div>
            
            <div class="method-item">
              <h6>无监督学习</h6>
              <p>通过最大化互信息学习重整化群变换</p>
            </div>
            
            <div class="method-item">
              <h6>强化学习</h6>
              <p>通过奖励函数优化重整化群策略</p>
            </div>
          </div>
        </div>
      </div>

      <div class="ml-phase-classification">
        <h4>机器学习相分类</h4>
        <p>
          使用机器学习方法自动识别和分类量子相：
        </p>
        
        <div class="classification-methods">
          <div class="method-item">
            <h5>卷积神经网络</h5>
            <p>识别自旋构型中的相变信号</p>
          </div>
          
          <div class="method-item">
            <h5>循环神经网络</h5>
            <p>分析时间序列数据中的动力学相变</p>
          </div>
          
          <div class="method-item">
            <h5>图神经网络</h5>
            <p>处理复杂网络结构上的相变</p>
          </div>
          
          <div class="method-item">
            <h5>变分自编码器</h5>
            <p>学习相变的低维表示</p>
          </div>
        </div>
        
        <div class="ml-advantages">
          <h5>机器学习的优势</h5>
          <ul>
            <li>无需先验知识的相识别</li>
            <li>处理高维复杂数据</li>
            <li>发现新的序参量</li>
            <li>实时相变检测</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 量子信息中的重整化群 -->
    <div class="quantum-information-rg-section">
      <h3>量子信息中的重整化群</h3>
      
      <div class="entanglement-rg">
        <h4>纠缠重整化群</h4>
        <p>
          纠缠重整化群(ERG)将重整化群与量子纠缠理论结合：
        </p>
        
        <div class="erg-principles">
          <h5>基本原理</h5>
          <p>
            ERG的核心思想是在重整化群变换中保持最重要的纠缠：
          </p>
          
          <div class="entanglement-filtering">
            <h6>纠缠过滤</h6>
            <div class="formula-box">$$|\psi\rangle \to \sum_{\alpha} \lambda_\alpha |\psi_\alpha^L\rangle \otimes |\psi_\alpha^R\rangle$$</div><p>只保留最大的Schmidt系数$\lambda_\alpha$对应的态。</p>
          </div>
        </div>
        
        <div class="mera-networks">
          <h5>多尺度纠缠重整化(MERA)</h5>
          <p>
            MERA是ERG的具体实现，使用张量网络表示：
          </p>
          
          <div class="mera-structure">
            <svg width="400" height="300" viewBox="0 0 400 300">
              <!-- MERA层次结构 -->
              <!-- 底层 -->
              <g transform="translate(200,250)">
                <circle cx="-60" cy="0" r="6" fill="#74b9ff"/>
                <circle cx="-20" cy="0" r="6" fill="#74b9ff"/>
                <circle cx="20" cy="0" r="6" fill="#74b9ff"/>
                <circle cx="60" cy="0" r="6" fill="#74b9ff"/>
              </g>
              
              <!-- 第一层 -->
              <g transform="translate(200,200)">
                <rect x="-50" y="-10" width="20" height="20" fill="#fd79a8" rx="3"/>
                <rect x="30" y="-10" width="20" height="20" fill="#fd79a8" rx="3"/>
                <circle cx="-20" cy="0" r="6" fill="#00b894"/>
                <circle cx="20" cy="0" r="6" fill="#00b894"/>
              </g>
              
              <!-- 第二层 -->
              <g transform="translate(200,150)">
                <rect x="-10" y="-10" width="20" height="20" fill="#fd79a8" rx="3"/>
                <circle cx="0" cy="0" r="6" fill="#00b894"/>
              </g>
              
              <!-- 连接线 -->
              <g stroke="#636e72" stroke-width="2">
                <line x1="140" y1="250" x2="160" y2="210"/>
                <line x1="180" y1="250" x2="160" y2="210"/>
                <line x1="220" y1="250" x2="240" y2="210"/>
                <line x1="260" y1="250" x2="240" y2="210"/>
                <line x1="180" y1="200" x2="190" y2="160"/>
                <line x1="220" y1="200" x2="210" y2="160"/>
              </g>
              
              <text x="200" y="50" text-anchor="middle" font-size="14">MERA网络</text>
              <text x="120" y="280" font-size="10">等距张量</text>
              <text x="280" y="280" font-size="10">纠缠器</text>
            </svg>
          </div>
          
          <div class="mera-properties">
            <h6>MERA的性质</h6>
            <ul>
              <li>高效表示临界系统</li>
              <li>自然编码标度不变性</li>
              <li>计算关联函数和纠缠谱</li>
              <li>实现量子纠错码</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="holographic-rg">
        <h4>全息重整化群</h4>
        <p>
          AdS/CFT对偶建立了重整化群与全息理论的深刻联系：
        </p>
        
        <div class="ads-cft-correspondence">
          <h5>AdS/CFT对偶</h5>
          <p>
            反德西特空间(AdS)中的引力理论对偶于边界上的共形场论(CFT)：
          </p>
          
          <div class="holographic-dictionary">
            <div class="correspondence-item">
              <h6>径向方向 ↔ 能量标度</h6>
              <p>AdS空间的径向坐标对应CFT的能量标度</p>
            </div>
            
            <div class="correspondence-item">
              <h6>体场 ↔ 边界算符</h6>
              <p>体中的场对应边界理论中的算符</p>
            </div>
            
            <div class="correspondence-item">
              <h6>几何 ↔ 重整化群流</h6>
              <p>体几何编码边界理论的重整化群流</p>
            </div>
          </div>
        </div>
        
        <div class="holographic-entanglement">
          <h5>全息纠缠熵</h5>
          <p>
            Ryu-Takayanagi公式将边界纠缠熵与体几何联系：
          </p>
          
          <div class="formula-box">$$S_A = \frac{\text{Area}(\gamma_A)}{4G_N}$$</div><p>其中$\gamma_A$是AdS空间中的最小面，$G_N$是牛顿常数。</p>
        </div>
      </div>

      <div class="quantum-error-correction">
        <h4>量子纠错与重整化群</h4>
        <p>
          重整化群思想在量子纠错码中有重要应用：
        </p>
        
        <div class="surface-codes">
          <h5>表面码</h5>
          <p>
            表面码是最有前景的拓扑量子纠错码：
          </p>
          
          <div class="surface-code-structure">
            <svg width="300" height="300" viewBox="0 0 300 300">
              <!-- 格点 -->
              <g fill="#74b9ff">
                <circle cx="50" cy="50" r="4"/>
                <circle cx="100" cy="50" r="4"/>
                <circle cx="150" cy="50" r="4"/>
                <circle cx="200" cy="50" r="4"/>
                <circle cx="50" cy="100" r="4"/>
                <circle cx="100" cy="100" r="4"/>
                <circle cx="150" cy="100" r="4"/>
                <circle cx="200" cy="100" r="4"/>
                <circle cx="50" cy="150" r="4"/>
                <circle cx="100" cy="150" r="4"/>
                <circle cx="150" cy="150" r="4"/>
                <circle cx="200" cy="150" r="4"/>
                <circle cx="50" cy="200" r="4"/>
                <circle cx="100" cy="200" r="4"/>
                <circle cx="150" cy="200" r="4"/>
                <circle cx="200" cy="200" r="4"/>
              </g>
              
              <!-- 稳定子 -->
              <g fill="#fd79a8" opacity="0.7">
                <rect x="70" y="70" width="60" height="60" rx="5"/>
                <rect x="120" y="120" width="60" height="60" rx="5"/>
              </g>
              
              <!-- 连接线 -->
              <g stroke="#636e72" stroke-width="1">
                <line x1="50" y1="50" x2="200" y2="50"/>
                <line x1="50" y1="100" x2="200" y2="100"/>
                <line x1="50" y1="150" x2="200" y2="150"/>
                <line x1="50" y1="200" x2="200" y2="200"/>
                <line x1="50" y1="50" x2="50" y2="200"/>
                <line x1="100" y1="50" x2="100" y2="200"/>
                <line x1="150" y1="50" x2="150" y2="200"/>
                <line x1="200" y1="50" x2="200" y2="200"/>
              </g>
              
              <text x="150" y="30" text-anchor="middle" font-size="12">表面码</text>
            </svg>
          </div>
        </div>
        
        <div class="rg-decoders">
          <h5>重整化群解码器</h5>
          <p>
            使用重整化群思想设计高效的量子纠错解码器：
          </p>
          
          <div class="decoder-advantages">
            <ul>
              <li>线性时间复杂度</li>
              <li>接近最优阈值</li>
              <li>适用于大规模系统</li>
              <li>并行化实现</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary-box">
      <h3>本节总结</h3>
      <ul>
        <li><strong>拓扑相变</strong>：KT相变、量子霍尔相变、拓扑绝缘体相变的重整化群理论</li>
        <li><strong>多体局域化</strong>：强无序相互作用系统中的局域化相变和SDRG方法</li>
        <li><strong>非平衡系统</strong>：驱动系统、开放系统中的重整化群方法</li>
        <li><strong>机器学习</strong>：神经网络重整化群和机器学习相分类方法</li>
        <li><strong>量子信息</strong>：纠缠重整化群、全息重整化群和量子纠错的应用</li>
        <li><strong>现代发展</strong>：重整化群理论在前沿物理问题中的广泛应用</li>
      </ul>
    </div>

    <!-- 思考题 -->
    <div class="exercise-box">
      <h3>思考题</h3>
      <ol>
        <li>为什么拓扑相变不能用传统的Landau理论描述？重整化群如何处理这类相变？</li>
        <li>解释多体局域化与单粒子安德森局域化的区别和联系。</li>
        <li>讨论非平衡系统中重整化群方法面临的主要挑战。</li>
        <li>机器学习与重整化群的结合为物理研究带来了哪些新机遇？</li>
        <li>纠缠重整化群如何改变我们对量子多体系统的理解？</li>
      </ol>
    </div>

    <!-- 延伸阅读 -->
    <div class="reading-list">
      <h3>延伸阅读</h3>
      <ul>
        <li>Kosterlitz, J. M. "The critical properties of the two-dimensional xy model." <em>J. Phys. C</em> <strong>7</strong>, 1046 (1974)</li>
        <li>Nandkishore, R. & Huse, D. A. "Many-body localization and thermalization in quantum statistical mechanics." <em>Annu. Rev. Condens. Matter Phys.</em> <strong>6</strong>, 15 (2015)</li>
        <li>Mehta, P. et al. "A high-bias, low-variance introduction to machine learning for physicists." <em>Phys. Rep.</em> <strong>810</strong>, 1 (2019)</li>
        <li>Vidal, G. "Entanglement renormalization." <em>Phys. Rev. Lett.</em> <strong>99</strong>, 220405 (2007)</li>
        <li>Swingle, B. "Entanglement renormalization and holography." <em>Phys. Rev. D</em> <strong>86</strong>, 065007 (2012)</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  font-size: 2.5em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
}

.learning-objectives {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.learning-objectives h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.learning-objectives ul {
  margin: 0;
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
}

.introduction {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.introduction h3 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.4em;
}

.topological-transitions-section,
.many-body-localization-section,
.nonequilibrium-rg-section,
.machine-learning-rg-section,
.quantum-information-rg-section {
  margin: 30px 0;
}

.topological-transitions-section h3,
.many-body-localization-section h3,
.nonequilibrium-rg-section h3,
.machine-learning-rg-section h3,
.quantum-information-rg-section h3 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.topological-phases,
.kosterlitz-thouless-transition,
.quantum-hall-transitions,
.topological-insulators,
.mbl-introduction,
.mbl-models,
.mbl-rg-theory,
.mbl-experiments,
.driven-systems,
.open-quantum-systems,
.keldysh-formalism,
.ml-rg-connection,
.neural-rg,
.ml-phase-classification,
.entanglement-rg,
.holographic-rg,
.quantum-error-correction {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.topological-phases h4,
.kosterlitz-thouless-transition h4,
.quantum-hall-transitions h4,
.topological-insulators h4,
.mbl-introduction h4,
.mbl-models h4,
.mbl-rg-theory h4,
.mbl-experiments h4,
.driven-systems h4,
.open-quantum-systems h4,
.keldysh-formalism h4,
.ml-rg-connection h4,
.neural-rg h4,
.ml-phase-classification h4,
.entanglement-rg h4,
.holographic-rg h4,
.quantum-error-correction h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.characteristics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.characteristic-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #74b9ff;
}

.characteristic-item h6 {
  color: #0984e3;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.formula-box {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
}

.kt-model,
.kt-rg-analysis,
.kt-phase-diagram,
.iqhe-transitions,
.fqhe-transitions,
.z2-classification,
.ti-phase-transition,
.mbl-characteristics,
.random-field-heisenberg,
.aubry-andre-model,
.rsrg-mbl,
.mbl-phase-diagram,
.experimental-platforms,
.floquet-theory,
.heating-thermalization,
.lindblad-equation,
.dissipative-phase-transitions,
.keldysh-contour,
.keldysh-green-functions,
.conceptual-connections,
.neural-rg-architecture,
.training-rg,
.classification-methods,
.ml-advantages,
.erg-principles,
.mera-networks,
.ads-cft-correspondence,
.holographic-entanglement,
.surface-codes,
.rg-decoders {
  margin: 20px 0;
}

.kt-equations,
.z2-invariants,
.sdrg-procedure,
.heating-mechanisms,
.dissipative-examples,
.training-methods,
.correspondence-item {
  margin: 20px 0;
}

.equation-item,
.invariant-item,
.step-item,
.mechanism-item,
.example-item,
.method-item,
.connection-item,
.platform-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #fd79a8;
}

.equation-item h6,
.invariant-item h6,
.step-item h6,
.mechanism-item h6,
.example-item h6,
.method-item h6,
.connection-item h5,
.platform-item h5 {
  color: #e84393;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.phase-diagram-kt,
.phase-diagram-mbl,
.network-diagram,
.contour-diagram,
.architecture-diagram,
.mera-structure,
.surface-code-structure {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.kt-critical-behavior,
.network-model,
.composite-fermion,
.dirac-theory,
.disorder-effects,
.entanglement-filtering,
.mera-properties,
.holographic-dictionary,
.green-function-matrix,
.decoder-advantages {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.kt-critical-behavior h6,
.network-model h6,
.composite-fermion h6,
.dirac-theory h6,
.disorder-effects h6,
.entanglement-filtering h6,
.mera-properties h6,
.holographic-dictionary h6,
.green-function-matrix h6,
.decoder-advantages h6 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.summary-box {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #4CAF50;
}

.summary-box h3 {
  color: #2E7D32;
  margin-bottom: 20px;
}

.summary-box ul {
  margin: 0;
  padding-left: 20px;
}

.summary-box li {
  margin-bottom: 10px;
}

.exercise-box {
  background: #fff8e1;
  border: 1px solid #ffcc02;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.exercise-box h3 {
  color: #f57f17;
  margin-bottom: 20px;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin-bottom: 15px;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

.reading-list h3 {
  color: #424242;
  margin-bottom: 20px;
}

.reading-list ul {
  margin: 0;
  padding-left: 20px;
}

.reading-list li {
  margin-bottom: 10px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .characteristics-grid {
    grid-template-columns: 1fr;
  }
  
  .phase-diagram-kt svg,
  .phase-diagram-mbl svg,
  .network-diagram svg,
  .contour-diagram svg,
  .architecture-diagram svg,
  .mera-structure svg,
  .surface-code-structure svg {
    width: 100%;
    height: auto;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .formula-box {
    font-size: 1em;
    padding: 15px;
  }
}
</style>
}