<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.5.3 动量空间粒子空穴变换的效果</h1>
      <p class="chapter-subtitle">深入理解粒子空穴变换在动量空间中的作用机制与拓扑意义</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>粒子空穴变换（Particle-Hole Transformation）是量子多体理论中的重要概念，它建立了粒子态和空穴态之间的对偶关系。在动量空间中，这种变换不仅改变了系统的占据态分布，更重要的是它可能改变系统的拓扑性质。</p>
          
          <p>在拓扑物理学中，粒子空穴变换是理解拓扑超导体、拓扑绝缘体等系统的关键工具。通过分析粒子空穴变换对动量空间哈密顿量和波函数的影响，我们可以深入理解系统的对称性、能谱结构以及拓扑分类。</p>
        </div>
      </div>

      <!-- 粒子空穴变换的基本概念 -->
      <div class="content-card">
        <h2 class="card-title">粒子空穴变换的基本概念</h2>
        <div class="card-content">
          <h3>变换的定义</h3>
          <p>粒子空穴变换将粒子产生算符变换为空穴湮灭算符：</p>
          <div class="formula">
            $$c_\mathbf{k} \rightarrow c_{-\mathbf{k}}^\dagger, \quad c_\mathbf{k}^\dagger \rightarrow c_{-\mathbf{k}}$$</div>

          <h3>自旋系统的变换</h3>
          <p>对于包含自旋的系统：</p> <div class="formula">$$c_{\mathbf{k}\sigma} \rightarrow \sigma c_{-\mathbf{k}\bar{\sigma}}^\dagger, \quad c_{\mathbf{k}\sigma}^\dagger \rightarrow \sigma c_{-\mathbf{k}\bar{\sigma}}$$</div><p>其中$\bar{\sigma}$表示相反的自旋，$\sigma = \pm 1$是自旋符号。</p>

          <h3>变换的物理意义</h3>
          <div class="physical-meaning">
            <div class="meaning-item">
              <h4>粒子-空穴对偶</h4>
              <p>建立粒子态和空穴态的对应关系</p>
            </div>
            <div class="meaning-item">
              <h4>费米面反演</h4>
              <p>将费米面以上的态映射到费米面以下</p>
            </div>
            <div class="meaning-item">
              <h4>对称性操作</h4>
              <p>揭示系统的隐藏对称性</p>
            </div>
            <div class="meaning-item">
              <h4>拓扑分类</h4>
              <p>影响系统的拓扑分类</p>
            </div>
          </div>

          <h3>变换的性质</h3>
          <div class="transformation-properties">
            <div class="prop-item">
              <h4>反线性性</h4>
              <p>粒子空穴变换是反线性的</p>
            </div>
            <div class="prop-item">
              <h4>对合性</h4>
              <p>两次变换回到原来的算符</p>
            </div>
            <div class="prop-item">
              <h4>反交换性</h4>
              <p>保持费米子的反交换关系</p>
            </div>
          </div>

          <h3>数学表示</h3><p>粒子空穴变换算符$\mathcal{C}$的作用：</p>
          <div class="formula">$$\mathcal{C} c_{\mathbf{k}\sigma} \mathcal{C}^{-1} = \sigma c_{-\mathbf{k}\bar{\sigma}}^\dagger$$</div>

          <h3>与时间反演的关系</h3>
          <p>粒子空穴变换与时间反演变换的复合：</p> <div class="formula">$$\mathcal{CT}: c_{\mathbf{k}\sigma} \rightarrow i\sigma_y c_{-\mathbf{k}\sigma}$$</div>
        </div>
      </div>

      <!-- 动量空间哈密顿量的变换 -->
      <div class="content-card">
        <h2 class="card-title">动量空间哈密顿量的变换</h2>
        <div class="card-content">
          <h3>单粒子哈密顿量</h3>
          <p>考虑一般的单粒子哈密顿量：</p> <div class="formula">$$H = \sum_{\mathbf{k},\sigma,\sigma'} c_{\mathbf{k}\sigma}^\dagger h_{\sigma\sigma'}(\mathbf{k}) c_{\mathbf{k}\sigma'}$$</div>

          <h3>变换后的哈密顿量</h3>
          <p>经过粒子空穴变换后：</p> <div class="formula">$$\tilde{H} = \sum_{\mathbf{k},\sigma,\sigma'} c_{\mathbf{k}\sigma}^\dagger \tilde{h}_{\sigma\sigma'}(\mathbf{k}) c_{\mathbf{k}\sigma'}$$</div>
          
          <p>其中：</p> <div class="formula">$$\tilde{h}_{\sigma\sigma'}(\mathbf{k}) = -\sigma\sigma' h_{\bar{\sigma}\bar{\sigma}'}^*(-\mathbf{k})$$</div>

          <h3>Pauli矩阵表示</h3>
          <p>对于二分量系统，哈密顿量可以写成：</p> <div class="formula">$$h(\mathbf{k}) = d_0(\mathbf{k})\sigma_0 + \mathbf{d}(\mathbf{k}) \cdot \boldsymbol{\sigma}$$</div>
          
          <p>变换后：</p> <div class="formula">$$\tilde{h}(\mathbf{k}) = -d_0(-\mathbf{k})\sigma_0 - d_x(-\mathbf{k})\sigma_x - d_y(-\mathbf{k})\sigma_y + d_z(-\mathbf{k})\sigma_z$$</div>

          <h3>能谱的变化</h3><p>原哈密顿量的本征值$E_n(\mathbf{k})$变换为：</p>
          <div class="formula">$$\tilde{E}_n(\mathbf{k}) = -E_n(-\mathbf{k})$$</div>

          <h3>具体例子</h3>
          <div class="hamiltonian-examples">
            <div class="example-item">
              <h4>自由电子</h4><p>$h(\mathbf{k}) = \frac{\hbar^2 k^2}{2m} - \mu$</p><p>$\tilde{h}(\mathbf{k}) = -\frac{\hbar^2 k^2}{2m} + \mu$</p>
            </div>
            <div class="example-item">
              <h4>Dirac哈密顿量</h4><p>$h(\mathbf{k}) = v_F(k_x \sigma_x + k_y \sigma_y)$</p><p>$\tilde{h}(\mathbf{k}) = -v_F(k_x \sigma_x + k_y \sigma_y)$</p>
            </div>
            <div class="example-item">
              <h4>Rashba自旋轨道耦合</h4><p>$h(\mathbf{k}) = \frac{\hbar^2 k^2}{2m} + \alpha(k_y \sigma_x - k_x \sigma_y)$</p><p>$\tilde{h}(\mathbf{k}) = -\frac{\hbar^2 k^2}{2m} - \alpha(k_y \sigma_x - k_x \sigma_y)$</p>
            </div>
          </div>

          <h3>对称性分析</h3>
          <p>粒子空穴变换保持的对称性：</p>
          <ul>
            <li><strong>反演对称性：</strong>如果原系统有反演对称性</li>
            <li><strong>旋转对称性：</strong>保持系统的旋转对称性</li>
            <li><strong>平移对称性：</strong>保持晶格的平移对称性</li>
          </ul>
        </div>
      </div>

      <!-- 波函数的变换 -->
      <div class="content-card">
        <h2 class="card-title">波函数的变换</h2>
        <div class="card-content">
          <h3>Bloch波函数</h3><p>原系统的Bloch波函数$|u_{n\mathbf{k}}\rangle$变换为：</p>
          <div class="formula">$$|\tilde{u}_{n\mathbf{k}}\rangle = \mathcal{C}|u_{n,-\mathbf{k}}\rangle$$</div>

          <h3>自旋波函数的变换</h3>
          <p>对于自旋1/2系统：</p> <div class="formula">$$\mathcal{C}|\uparrow\rangle = |\downarrow\rangle, \quad \mathcal{C}|\downarrow\rangle = -|\uparrow\rangle$$</div>

          <h3>二分量波函数</h3>
          <p>二分量波函数的变换：</p> <div class="formula">$$\psi(\mathbf{k}) = \begin{pmatrix} \psi_\uparrow(\mathbf{k}) \\ \psi_\downarrow(\mathbf{k}) \end{pmatrix} \rightarrow \tilde{\psi}(\mathbf{k}) = \begin{pmatrix} \psi_\downarrow^*(-\mathbf{k}) \\ -\psi_\uparrow^*(-\mathbf{k}) \end{pmatrix}$$</div>

          <h3>相位约定</h3>
          <p>波函数的相位约定对变换结果的影响：</p> <div class="formula">$$|u_{n\mathbf{k}}\rangle \rightarrow e^{i\phi_{n\mathbf{k}}}|u_{n\mathbf{k}}\rangle$$</div>
          
          <p>需要选择合适的相位约定保证变换的一致性。</p>

          <h3>归一化条件</h3>
          <p>变换后的波函数仍满足归一化条件：</p> <div class="formula">$$\langle\tilde{u}_{n\mathbf{k}}|\tilde{u}_{n\mathbf{k}}\rangle = \langle u_{n,-\mathbf{k}}|u_{n,-\mathbf{k}}\rangle = 1$$</div>

          <h3>正交性</h3>
          <p>不同能带间的正交性：</p> <div class="formula">$$\langle\tilde{u}_{m\mathbf{k}}|\tilde{u}_{n\mathbf{k}}\rangle = \delta_{mn}$$</div>

          <h3>完备性</h3>
          <p>变换后的波函数仍构成完备基：</p> <div class="formula">$$\sum_n |\tilde{u}_{n\mathbf{k}}\rangle\langle\tilde{u}_{n\mathbf{k}}| = \mathbb{I}$$</div>
        </div>
      </div>

      <!-- Berry相位和拓扑性质 -->
      <div class="content-card">
        <h2 class="card-title">Berry相位和拓扑性质</h2>
        <div class="card-content">
          <h3>Berry连接的变换</h3>
          <p>原系统的Berry连接：</p> <div class="formula">$$\mathcal{A}_{n\mu}(\mathbf{k}) = i\langle u_{n\mathbf{k}}|\partial_{k_\mu}|u_{n\mathbf{k}}\rangle$$</div>
          
          <p>变换后：</p> <div class="formula">$$\tilde{\mathcal{A}}_{n\mu}(\mathbf{k}) = -\mathcal{A}_{n\mu}(-\mathbf{k})$$</div>

          <h3>Berry曲率的变换</h3>
          <p>Berry曲率的变换规律：</p> <div class="formula">$$\tilde{\Omega}_{n\mu\nu}(\mathbf{k}) = -\Omega_{n\mu\nu}(-\mathbf{k})$$</div>

          <h3>Chern数的变化</h3>
          <p>二维系统的Chern数：</p> <div class="formula">$$\tilde{C}_n = \frac{1}{2\pi} \int_{\text{BZ}} \tilde{\Omega}_n(\mathbf{k}) d^2k = -C_n$$</div>

          <h3>Z₂拓扑不变量</h3>
          <p>对于时间反演不变系统，Z₂不变量的变化：</p> <div class="formula">$$\tilde{\nu} = \nu \quad (\text{在粒子空穴对称系统中})$$</div>

          <h3>拓扑分类的影响</h3>
          <div class="topological-classification">
            <div class="class-item">
              <h4>A类 (无对称性)</h4>
              <ul>
                <li>Chern数改变符号</li>
                <li>拓扑性质完全反转</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>AII类 (时间反演)</h4>
              <ul>
                <li>Z₂不变量保持不变</li>
                <li>拓扑性质不变</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>D类 (粒子空穴)</h4>
              <ul>
                <li>Z不变量改变符号</li>
                <li>拓扑性质反转</li>
              </ul>
            </div>
          </div>

          <h3>边界态的变化</h3>
          <p>粒子空穴变换对边界态的影响：</p>
          <ul>
            <li><strong>手性边界态：</strong>传播方向反转</li>
            <li><strong>螺旋边界态：</strong>自旋结构改变</li>
            <li><strong>Majorana模式：</strong>保持自共轭性质</li>
          </ul>

          <h3>Wilson环的变换</h3>
          <p>Wilson环算符的变换：</p> <div class="formula">$$\tilde{W} = W^*(-\mathcal{C})$$</div><p>其中$\mathcal{C}$是闭合路径。</p>
        </div>
      </div>

      <!-- 超导系统中的应用 -->
      <div class="content-card">
        <h2 class="card-title">超导系统中的应用</h2>
        <div class="card-content">
          <h3>BCS哈密顿量</h3>
          <p>BCS超导体的哈密顿量：</p>
          <div class="formula">$$H = \sum_\mathbf{k} \xi_\mathbf{k}(c_{\mathbf{k}\uparrow}^\dagger c_{\mathbf{k}\uparrow} + c_{\mathbf{k}\downarrow}^\dagger c_{\mathbf{k}\downarrow}) + \sum_\mathbf{k} (\Delta_\mathbf{k} c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger + \text{h.c.})$$</div>

          <h3>Nambu表示</h3>
          <p>使用Nambu旋量：</p> <div class="formula">$$\Psi_\mathbf{k} = \begin{pmatrix} c_{\mathbf{k}\uparrow} \\ c_{-\mathbf{k}\downarrow}^\dagger \end{pmatrix}$$</div>
          
          <p>哈密顿量变为：</p> <div class="formula">$$H = \frac{1}{2}\sum_\mathbf{k} \Psi_\mathbf{k}^\dagger \mathcal{H}_{\text{BCS}}(\mathbf{k}) \Psi_\mathbf{k}$$</div>

          <h3>粒子空穴对称性</h3>
          <p>BCS哈密顿量具有内禀的粒子空穴对称性：</p> <div class="formula">$$\mathcal{C} \mathcal{H}_{\text{BCS}}(\mathbf{k}) \mathcal{C}^{-1} = -\mathcal{H}_{\text{BCS}}(-\mathbf{k})$$</div>

          <h3>能谱的对称性</h3>
          <p>超导能谱的粒子空穴对称性：</p> <div class="formula">$$E_n(\mathbf{k}) = -E_n(-\mathbf{k})$$</div>

          <h3>拓扑超导体</h3>
          <div class="topological-superconductors">
            <div class="tsc-item">
              <h4>p波超导体</h4>
              <ul>
                <li>手性p波配对</li>
                <li>Chern数 = ±1</li>
                <li>手性Majorana边界态</li>
              </ul>
            </div>
            <div class="tsc-item">
              <h4>Kitaev链</h4>
              <ul>
                <li>一维p波超导体</li>
                <li>Z₂拓扑分类</li>
                <li>Majorana零模</li>
              </ul>
            </div>
            <div class="tsc-item">
              <h4>3D拓扑超导体</h4>
              <ul>
                <li>时间反演破缺</li>
                <li>表面Majorana锥</li>
                <li>整数拓扑不变量</li>
              </ul>
            </div>
          </div>

          <h3>Majorana费米子</h3>
          <p>Majorana费米子满足：</p> <div class="formula">$$\gamma = \gamma^\dagger$$</div>
          
          <p>在粒子空穴变换下保持不变：</p> <div class="formula">$$\mathcal{C} \gamma \mathcal{C}^{-1} = \gamma$$</div>

          <h3>配对对称性</h3>
          <p>不同配对对称性下的变换：</p>
          <div class="pairing-symmetries">
            <div class="pairing-item">
              <h4>s波配对</h4><p>$\Delta(\mathbf{k}) = \Delta_0$</p>
              <p>各向同性，实数</p>
            </div>
            <div class="pairing-item">
              <h4>p波配对</h4><p>$\Delta(\mathbf{k}) = \Delta_0(k_x + ik_y)$</p>
              <p>手性，复数</p>
            </div>
            <div class="pairing-item">
              <h4>d波配对</h4><p>$\Delta(\mathbf{k}) = \Delta_0(k_x^2 - k_y^2)$</p>
              <p>节点，实数</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 实验观测与应用 -->
      <div class="content-card">
        <h2 class="card-title">实验观测与应用</h2>
        <div class="card-content">
          <h3>ARPES测量</h3>
          <p>角分辨光电子能谱可以直接观测粒子空穴变换的效果：</p>
          <div class="arpes-observations">
            <div class="arpes-item">
              <h4>能带反转</h4>
              <ul>
                <li>价带和导带的交换</li>
                <li>费米面的变化</li>
                <li>能隙的开合</li>
              </ul>
            </div>
            <div class="arpes-item">
              <h4>自旋结构</h4>
              <ul>
                <li>自旋分辨ARPES</li>
                <li>螺旋性的反转</li>
                <li>自旋纹理的变化</li>
              </ul>
            </div>
            <div class="arpes-item">
              <h4>表面态</h4>
              <ul>
                <li>拓扑表面态</li>
                <li>Dirac锥的观测</li>
                <li>能隙的测量</li>
              </ul>
            </div>
          </div>

          <h3>输运测量</h3>
          <div class="transport-measurements">
            <div class="transport-item">
              <h4>霍尔效应</h4>
              <ul>
                <li>霍尔电导的符号变化</li>
                <li>量子霍尔平台</li>
                <li>异常霍尔效应</li>
              </ul>
            </div>
            <div class="transport-item">
              <h4>磁阻</h4>
              <ul>
                <li>Shubnikov-de Haas振荡</li>
                <li>载流子类型的判断</li>
                <li>费米面的重构</li>
              </ul>
            </div>
            <div class="transport-item">
              <h4>超导输运</h4>
              <ul>
                <li>Andreev反射</li>
                <li>约瑟夫森效应</li>
                <li>Majorana模式的探测</li>
              </ul>
            </div>
          </div>

          <h3>隧道谱学</h3>
          <p>扫描隧道显微镜可以探测局域态密度：</p>
          <div class="formula">$$\rho(\mathbf{r}, E) = \sum_n |\psi_n(\mathbf{r})|^2 \delta(E - E_n)$$</div>

          <h3>约瑟夫森效应</h3>
          <p>超导结中的约瑟夫森电流：</p> <div class="formula">$$I = I_c \sin(\phi)$$</div><p>其中$\phi$是相位差，$I_c$是临界电流。</p>

          <h3>量子振荡</h3>
          <p>磁场中的量子振荡反映费米面的性质：</p>
          <div class="formula">$$\Delta\rho \propto \cos\left(2\pi\frac{F}{B} + \phi\right)$$</div><p>其中$F$是振荡频率，与费米面面积相关。</p>

          <h3>光谱学测量</h3>
          <div class="spectroscopy-measurements">
            <div class="spectro-item">
              <h4>光学电导</h4>
              <ul>
                <li>带间跃迁</li>
                <li>Drude峰</li>
                <li>等离激元</li>
              </ul>
            </div>
            <div class="spectro-item">
              <h4>拉曼散射</h4>
              <ul>
                <li>声子模式</li>
                <li>电子拉曼散射</li>
                <li>超导能隙</li>
              </ul>
            </div>
            <div class="spectro-item">
              <h4>太赫兹光谱</h4>
              <ul>
                <li>低能激发</li>
                <li>超导能隙</li>
                <li>拓扑表面态</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 理论计算方法 -->
      <div class="content-card">
        <h2 class="card-title">理论计算方法</h2>
        <div class="card-content">
          <h3>第一性原理计算</h3>
          <p>基于密度泛函理论的计算方法：</p>
          <div class="dft-methods">
            <div class="dft-item">
              <h4>标准DFT</h4>
              <ul>
                <li>Kohn-Sham方程</li>
                <li>交换关联泛函</li>
                <li>自洽场计算</li>
              </ul>
            </div>
            <div class="dft-item">
              <h4>DFT+U</h4>
              <ul>
                <li>强关联修正</li>
                <li>Hubbard U参数</li>
                <li>局域化轨道</li>
              </ul>
            </div>
            <div class="dft-item">
              <h4>杂化泛函</h4>
              <ul>
                <li>Hartree-Fock交换</li>
                <li>能隙修正</li>
                <li>更准确的能带结构</li>
              </ul>
            </div>
          </div>

          <h3>紧束缚模型</h3>
          <p>简化的模型哈密顿量：</p>
          <div class="formula">$$H = \sum_{i,j} t_{ij} c_i^\dagger c_j + \sum_i \epsilon_i c_i^\dagger c_i$$</div>

          <h3>有效模型构造</h3>
          <p>从第一性原理结果构造有效模型：</p>
          <div class="effective-models">
            <div class="model-item">
              <h4>k·p理论</h4>
              <ul>
                <li>低能有效理论</li>
                <li>对称性约束</li>
                <li>微扰展开</li>
              </ul>
            </div>
            <div class="model-item">
              <h4>Wannier函数</h4>
              <ul>
                <li>局域化基函数</li>
                <li>紧束缚参数</li>
                <li>插值方法</li>
              </ul>
            </div>
            <div class="model-item">
              <h4>对称性分析</h4>
              <ul>
                <li>群论方法</li>
                <li>不可约表示</li>
                <li>选择定则</li>
              </ul>
            </div>
          </div>

          <h3>数值对角化</h3>
          <p>大规模矩阵对角化方法：</p>
          <div class="diagonalization-methods">
            <div class="diag-item">
              <h4>直接对角化</h4>
              <ul>
                <li>LAPACK库</li>
                <li>适用于小系统</li>
                <li>精确结果</li>
              </ul>
            </div>
            <div class="diag-item">
              <h4>Lanczos方法</h4>
              <ul>
                <li>迭代方法</li>
                <li>稀疏矩阵</li>
                <li>基态和低激发态</li>
              </ul>
            </div>
            <div class="diag-item">
              <h4>Davidson方法</h4>
              <ul>
                <li>预条件迭代</li>
                <li>收敛加速</li>
                <li>多个本征值</li>
              </ul>
            </div>
          </div>

          <h3>拓扑不变量计算</h3>
          <div class="topological-calculations">
            <div class="topo-calc-item">
              <h4>Berry曲率积分</h4>
              <p>数值积分计算Chern数</p>
            </div>
            <div class="topo-calc-item">
              <h4>Wilson环方法</h4>
              <p>沿闭合路径的Wilson环</p>
            </div>
            <div class="topo-calc-item">
              <h4>Z₂不变量</h4>
              <p>Pfaffian方法或能带反转</p>
            </div>
          </div>

          <h3>格林函数方法</h3>
          <p>使用格林函数计算物理量：</p> <div class="formula">$$G(\mathbf{k}, \omega) = \frac{1}{\omega - H(\mathbf{k}) + i\eta}$$
          </div>

          <h3>量子蒙特卡罗</h3>
          <p>处理强关联系统的数值方法：</p>
          <ul>
            <li><strong>路径积分蒙特卡罗：</strong>有限温度性质</li>
            <li><strong>量子蒙特卡罗：</strong>基态性质</li>
            <li><strong>连续时间蒙特卡罗：</strong>动力学性质</li>
          </ul>
        </div>
      </div>

      <!-- 总结与展望 -->
      <div class="content-card">
        <h2 class="card-title">总结与展望</h2>
        <div class="card-content">
          <h3>主要内容总结</h3>
          <p>本节深入探讨了动量空间粒子空穴变换的各个方面：</p>
          <ul>
            <li><strong>基本概念：</strong>粒子空穴变换的定义、性质和物理意义</li>
            <li><strong>哈密顿量变换：</strong>动量空间哈密顿量在变换下的行为</li>
            <li><strong>波函数变换：</strong>Bloch波函数的变换规律</li>
            <li><strong>拓扑性质：</strong>Berry相位和拓扑不变量的变化</li>
            <li><strong>超导应用：</strong>在拓扑超导体中的重要作用</li>
            <li><strong>实验观测：</strong>各种实验技术的应用</li>
            <li><strong>计算方法：</strong>理论计算的具体方法</li>
          </ul>

          <h3>重要物理洞察</h3>
          <div class="physical-insights">
            <div class="insight-item">
              <h4>对偶性</h4>
              <p>粒子和空穴的对偶关系揭示了系统的深层对称性</p>
            </div>
            <div class="insight-item">
              <h4>拓扑保护</h4>
              <p>某些拓扑性质在粒子空穴变换下保持不变</p>
            </div>
            <div class="insight-item">
              <h4>对称性分类</h4>
              <p>粒子空穴对称性是拓扑分类的重要依据</p>
            </div>
            <div class="insight-item">
              <h4>边界态</h4>
              <p>边界态的性质与体系的粒子空穴对称性密切相关</p>
            </div>
          </div>

          <h3>研究前沿</h3>
          <div class="research-frontiers">
            <div class="frontier-item">
              <h4>非阿贝尔拓扑相</h4>
              <ul>
                <li>非阿贝尔任意子</li>
                <li>拓扑量子计算</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
            <div class="frontier-item">
              <h4>高阶拓扑相</h4>
              <ul>
                <li>高阶拓扑绝缘体</li>
                <li>铰链态和角态</li>
                <li>多极矩拓扑不变量</li>
              </ul>
            </div>
            <div class="frontier-item">
              <h4>非平衡拓扑相</h4>
              <ul>
                <li>Floquet拓扑相</li>
                <li>驱动系统</li>
                <li>动力学相变</li>
              </ul>
            </div>
          </div>

          <h3>技术发展</h3>
          <div class="technical-developments">
            <div class="tech-dev-item">
              <h4>实验技术</h4>
              <ul>
                <li>时间分辨光谱</li>
                <li>量子传感器</li>
                <li>单原子操控</li>
              </ul>
            </div>
            <div class="tech-dev-item">
              <h4>计算方法</h4>
              <ul>
                <li>机器学习</li>
                <li>量子计算</li>
                <li>高性能计算</li>
              </ul>
            </div>
            <div class="tech-dev-item">
              <h4>材料设计</h4>
              <ul>
                <li>人工结构</li>
                <li>异质结</li>
                <li>二维材料</li>
              </ul>
            </div>
          </div>

          <h3>应用前景</h3>
          <div class="application-prospects">
            <div class="app-item">
              <h4>量子计算</h4>
              <ul>
                <li>拓扑量子比特</li>
                <li>容错量子计算</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
            <div class="app-item">
              <h4>自旋电子学</h4>
              <ul>
                <li>自旋流</li>
                <li>自旋轨道矩</li>
                <li>拓扑磁性</li>
              </ul>
            </div>
            <div class="app-item">
              <h4>低功耗器件</h4>
              <ul>
                <li>拓扑场效应管</li>
                <li>无耗散输运</li>
                <li>量子器件</li>
              </ul>
            </div>
          </div>

          <h3>未来挑战</h3>
          <p>粒子空穴变换研究面临的主要挑战：</p>
          <ul>
            <li><strong>强关联效应：</strong>超越单粒子图像的多体效应</li>
            <li><strong>无序和缺陷：</strong>实际材料中的非理想因素</li>
            <li><strong>有限尺寸效应：</strong>纳米器件中的量子限制</li>
            <li><strong>温度效应：</strong>有限温度下的拓扑保护</li>
            <li><strong>动力学过程：</strong>非平衡态的理论描述</li>
          </ul>
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
  background: #f8fafc;
  min-height: 100vh;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.chapter-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0;
  font-weight: 300;
}

.content-grid {
  display: grid;
  gap: 2rem;
}

.content-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.content-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3b82f6;
}

.card-content {
  line-height: 1.7;
  color: #374151;
}

.card-content h3 {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  margin: 1.5rem 0 1rem 0;
}

.card-content h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin: 1rem 0 0.5rem 0;
}

.card-content p {
  margin-bottom: 1rem;
  text-align: justify;
}

.card-content ul, .card-content ol {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.card-content li {
  margin-bottom: 0.5rem;
}

.formula {
  text-align: center;
  font-size: 1.1rem;
  margin: 1rem 0;
  padding: 1rem;
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  border-radius: 0.5rem;
  font-family: 'Times New Roman', serif;
}

.physical-meaning {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.meaning-item {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.meaning-item h4 {
  color: #92400e;
  margin-bottom: 0.5rem;
}

.transformation-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.prop-item {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.prop-item h4 {
  color: #047857;
  margin-bottom: 0.5rem;
}

.hamiltonian-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.example-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.example-item h4 {
  color: #1d4ed8;
  margin-bottom: 1rem;
}

.topological-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.class-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.class-item h4 {
  color: #0c4a6e;
  margin-bottom: 1rem;
}

.topological-superconductors {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.tsc-item {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.tsc-item h4 {
  color: #be185d;
  margin-bottom: 1rem;
}

.pairing-symmetries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.pairing-item {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.pairing-item h4 {
  color: #15803d;
  margin-bottom: 0.5rem;
}

.arpes-observations,
.transport-measurements,
.spectroscopy-measurements {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.arpes-item,
.transport-item,
.spectro-item {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.arpes-item h4,
.transport-item h4,
.spectro-item h4 {
  color: #a16207;
  margin-bottom: 1rem;
}

.dft-methods,
.effective-models,
.diagonalization-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.dft-item,
.model-item,
.diag-item {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.dft-item h4,
.model-item h4,
.diag-item h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.topological-calculations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.topo-calc-item {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.topo-calc-item h4 {
  color: #365314;
  margin-bottom: 0.5rem;
}

.physical-insights,
.research-frontiers,
.technical-developments,
.application-prospects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.insight-item,
.frontier-item,
.tech-dev-item,
.app-item {
  background: #fef7ff;
  border: 1px solid #c084fc;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.insight-item h4,
.frontier-item h4,
.tech-dev-item h4,
.app-item h4 {
  color: #7c2d12;
  margin-bottom: 1rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-card {
    padding: 1.5rem;
  }
  
  .physical-meaning,
  .transformation-properties,
  .hamiltonian-examples,
  .topological-classification,
  .topological-superconductors,
  .pairing-symmetries,
  .arpes-observations,
  .transport-measurements,
  .spectroscopy-measurements,
  .dft-methods,
  .effective-models,
  .diagonalization-methods,
  .topological-calculations,
  .physical-insights,
  .research-frontiers,
  .technical-developments,
  .application-prospects {
    grid-template-columns: 1fr;
  }
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>