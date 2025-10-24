<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.5.4 动量空间的能谱和拓扑不变量</h1>
      <p class="chapter-subtitle">深入理解动量空间中能带结构与拓扑性质的内在联系</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>动量空间的能谱结构是理解凝聚态物理的基础，而拓扑不变量则揭示了能带结构的深层几何性质。在拓扑物理学中，能谱的拓扑性质决定了材料的许多奇特物理现象，如量子霍尔效应、拓扑绝缘体的表面态、以及拓扑超导体中的Majorana费米子等。</p>
          
          <p>本节将系统地探讨动量空间中能谱与拓扑不变量的关系，包括Berry相位、Chern数、Z₂拓扑不变量等重要概念，以及它们在不同维度和对称性条件下的表现。我们还将讨论如何通过能带结构的分析来预测和理解拓扑相变。</p>
        </div>
      </div>

      <!-- 能带结构基础 -->
      <div class="content-card">
        <h2 class="card-title">能带结构基础</h2>
        <div class="card-content">
          <h3>Bloch定理与能带</h3>
          <p>在周期性晶格中，电子波函数满足Bloch定理：</p>
          <div class="formula">
            $$\psi_{n\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}} u_{n\mathbf{k}}(\mathbf{r})$$</div><p>其中$u_{n\mathbf{k}}(\mathbf{r})$具有晶格的周期性。</p>

          <h3>薛定谔方程</h3>
          <p>在动量空间中，薛定谔方程变为：</p>
          <div class="formula">$$H(\mathbf{k})|u_{n\mathbf{k}}\rangle = E_n(\mathbf{k})|u_{n\mathbf{k}}\rangle$$</div>

          <h3>能带的基本性质</h3>
          <div class="band-properties">
            <div class="prop-item">
              <h4>连续性</h4><p>能带$E_n(\mathbf{k})$是$\mathbf{k}$的连续函数</p>
            </div>
            <div class="prop-item">
              <h4>周期性</h4><p>$E_n(\mathbf{k}) = E_n(\mathbf{k} + \mathbf{G})$，其中$\mathbf{G}$是倒格矢</p>
            </div>
            <div class="prop-item">
              <h4>对称性</h4>
              <p>反映晶体的点群对称性</p>
            </div>
            <div class="prop-item">
              <h4>简并</h4>
              <p>高对称点处可能出现能带简并</p>
            </div>
          </div>

          <h3>能隙与能带接触</h3>
          <p>能带间的能隙定义为：</p>
          <div class="formula">$$\Delta = \min_\mathbf{k} [E_{n+1}(\mathbf{k}) - E_n(\mathbf{k})]$$</div>

          <h3>费米面</h3>
          <p>费米面由费米能级处的等能面构成：</p> <div class="formula">$$E_n(\mathbf{k}) = E_F$$</div>

          <h3>态密度</h3>
          <p>动量空间的态密度：</p> <div class="formula">$$\rho(E) = \sum_{n\mathbf{k}} \delta(E - E_n(\mathbf{k}))$$</div>

          <h3>能带结构的分类</h3>
          <div class="band-classification">
            <div class="class-item">
              <h4>金属</h4>
              <ul>
                <li>费米面穿过能带</li>
                <li>费米能级处态密度非零</li>
                <li>导电性良好</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>绝缘体</h4>
              <ul>
                <li>价带和导带间有能隙</li>
                <li>费米能级在能隙中</li>
                <li>室温下不导电</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>半导体</h4>
              <ul>
                <li>小的能隙</li>
                <li>可通过掺杂调节</li>
                <li>温度敏感</li>
              </ul>
            </div>
            <div class="class-item">
              <h4>半金属</h4>
              <ul>
                <li>价带和导带接触</li>
                <li>载流子浓度很低</li>
                <li>特殊的输运性质</li>
              </ul>
            </div>
          </div>

          <h3>能带结构的计算方法</h3>
          <div class="calculation-methods">
            <div class="method-item">
              <h4>紧束缚模型</h4>
              <p>基于原子轨道的线性组合</p>
            </div>
            <div class="method-item">
              <h4>平面波方法</h4>
              <p>使用平面波基组</p>
            </div>
            <div class="method-item">
              <h4>LAPW方法</h4>
              <p>线性化增强平面波</p>
            </div>
            <div class="method-item">
              <h4>赝势方法</h4>
              <p>使用赝势近似</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Berry相位与几何相位 -->
      <div class="content-card">
        <h2 class="card-title">Berry相位与几何相位</h2>
        <div class="card-content">
          <h3>Berry相位的定义</h3><p>当系统参数沿闭合路径$\mathcal{C}$缓慢变化时，波函数获得的几何相位：</p>
          <div class="formula">$$\gamma_n = i\oint_\mathcal{C} \langle u_n(\mathbf{R})|\nabla_\mathbf{R}|u_n(\mathbf{R})\rangle \cdot d\mathbf{R}$$</div>

          <h3>Berry连接</h3>
          <p>Berry连接定义为：</p> <div class="formula">$$\mathcal{A}_{n\mu}(\mathbf{k}) = i\langle u_{n\mathbf{k}}|\partial_{k_\mu}|u_{n\mathbf{k}}\rangle$$</div>

          <h3>Berry曲率</h3>
          <p>Berry曲率是Berry连接的旋度：</p> <div class="formula">$$\Omega_{n\mu\nu}(\mathbf{k}) = \partial_{k_\mu}\mathcal{A}_{n\nu}(\mathbf{k}) - \partial_{k_\nu}\mathcal{A}_{n\mu}(\mathbf{k})$$</div>

          <h3>Kubo公式表示</h3>
          <p>Berry曲率的Kubo公式：</p> <div class="formula">$$\Omega_{n\mu\nu}(\mathbf{k}) = -2\text{Im}\sum_{m \neq n} \frac{\langle u_{n\mathbf{k}}|\hat{v}_\mu|u_{m\mathbf{k}}\rangle\langle u_{m\mathbf{k}}|\hat{v}_\nu|u_{n\mathbf{k}}\rangle}{[E_n(\mathbf{k}) - E_m(\mathbf{k})]^2}$$</div>

          <h3>Berry相位的物理意义</h3>
          <div class="berry-physics">
            <div class="physics-item">
              <h4>几何性质</h4>
              <p>反映参数空间的几何结构</p>
            </div>
            <div class="physics-item">
              <h4>规范不变性</h4>
              <p>在规范变换下保持不变</p>
            </div>
            <div class="physics-item">
              <h4>拓扑性质</h4>
              <p>与拓扑不变量密切相关</p>
            </div>
            <div class="physics-item">
              <h4>可观测效应</h4>
              <p>导致可观测的物理现象</p>
            </div>
          </div>

          <h3>Berry相位的计算</h3>
          <p>数值计算Berry相位的方法：</p>
          <div class="berry-calculation">
            <div class="calc-method">
              <h4>直接积分</h4>
              <p>沿路径数值积分Berry连接</p>
            </div>
            <div class="calc-method">
              <h4>Wilson环</h4>
              <p>使用Wilson环算符</p>
            </div>
            <div class="calc-method">
              <h4>Wannier函数</h4>
              <p>通过Wannier函数计算</p>
            </div>
          </div>

          <h3>Berry相位的应用</h3>
          <ul>
            <li><strong>Aharonov-Bohm效应：</strong>磁通量的几何相位</li>
            <li><strong>分子物理：</strong>Born-Oppenheimer近似中的几何相位</li>
            <li><strong>凝聚态物理：</strong>能带结构的拓扑性质</li>
            <li><strong>光学：</strong>偏振态的几何相位</li>
          </ul>

          <h3>非阿贝尔Berry相位</h3>
          <p>对于简并能带，Berry相位变为非阿贝尔的：</p> <div class="formula">$$\mathcal{U} = \mathcal{P}\exp\left(i\oint_\mathcal{C} \mathbf{A}(\mathbf{k}) \cdot d\mathbf{k}\right)$$</div><p>其中$\mathbf{A}(\mathbf{k})$是非阿贝尔Berry连接矩阵。</p>
        </div>
      </div>

      <!-- Chern数与拓扑分类 -->
      <div class="content-card">
        <h2 class="card-title">Chern数与拓扑分类</h2>
        <div class="card-content">
          <h3>Chern数的定义</h3><p>二维系统中，第$n$个能带的Chern数定义为：</p>
          <div class="formula">$$C_n = \frac{1}{2\pi} \int_{\text{BZ}} \Omega_n(\mathbf{k}) d^2k$$</div>

          <h3>TKNN公式</h3>
          <p>Thouless-Kohmoto-Nightingale-den Nijs公式将霍尔电导与Chern数联系：</p> <div class="formula">$$\sigma_{xy} = \frac{e^2}{h} \sum_n C_n$$</div>

          <h3>Chern数的计算方法</h3>
          <div class="chern-calculation">
            <div class="chern-method">
              <h4>Berry曲率积分</h4>
              <p>直接积分Berry曲率</p> <div class="formula">$$C_n = \frac{1}{2\pi} \sum_{\mathbf{k}} \Omega_n(\mathbf{k}) \Delta k_x \Delta k_y$$</div>
            </div>
            <div class="chern-method">
              <h4>Wilson环方法</h4>
              <p>使用Wilson环的本征值</p> <div class="formula">$$C_n = \frac{1}{2\pi i} \ln \det W$$</div>
            </div>
            <div class="chern-method">
              <h4>Fukui-Hatsugai-Suzuki方法</h4>
              <p>基于格点模型的数值方法</p>
            </div>
          </div>

          <h3>Chern绝缘体</h3>
          <p>具有非零Chern数的绝缘体称为Chern绝缘体：</p>
          <div class="chern-insulators">
            <div class="chern-example">
              <h4>Haldane模型</h4>
              <ul>
                <li>石墨烯上的复数次近邻跃迁</li>
                <li>时间反演对称性破缺</li>
                <li>Chern数 = ±1</li>
              </ul>
            </div>
            <div class="chern-example">
              <h4>Hofstadter模型</h4>
              <ul>
                <li>磁场中的二维电子气</li>
                <li>分形能谱结构</li>
                <li>分数Chern数</li>
              </ul>
            </div>
            <div class="chern-example">
              <h4>Kagome晶格</h4>
              <ul>
                <li>几何阻挫效应</li>
                <li>平带结构</li>
                <li>拓扑平带</li>
              </ul>
            </div>
          </div>

          <h3>边界态与体边对应</h3>
          <p>Chern绝缘体的边界态数目由体系的Chern数决定：</p> <div class="formula">$$N_{\text{edge}} = |C|$$</div>

          <h3>高阶Chern数</h3>
          <p>在高维系统中，可以定义高阶Chern数：</p> <div class="formula">$$C_{n_1n_2\cdots n_{2k}} = \frac{1}{(2\pi)^k k!} \int_{\text{BZ}} \Omega_{n_1n_2} \wedge \cdots \wedge \Omega_{n_{2k-1}n_{2k}}$$</div>

          <h3>Chern-Simons理论</h3>
          <p>三维系统中的Chern-Simons项：</p> <div class="formula">$$S_{\text{CS}} = \frac{1}{4\pi} \int d^3k \, \mathcal{A} \wedge d\mathcal{A}$$</div>

          <h3>拓扑相变</h3>
          <p>Chern数在拓扑相变点发生跳跃：</p>
          <ul>
            <li><strong>能隙关闭：</strong>相变点处能隙必须关闭</li>
            <li><strong>Chern数跳跃：</strong>相变前后Chern数不同</li>
            <li><strong>临界行为：</strong>相变点附近的临界指数</li>
          </ul>

          <h3>实验观测</h3>
          <div class="experimental-observations">
            <div class="exp-method">
              <h4>量子霍尔效应</h4>
              <p>霍尔电导的量子化平台</p>
            </div>
            <div class="exp-method">
              <h4>边界态输运</h4>
              <p>手性边界态的输运测量</p>
            </div>
            <div class="exp-method">
              <h4>光学响应</h4>
              <p>圆偏振光的异常响应</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Z₂拓扑不变量 -->
      <div class="content-card">
        <h2 class="card-title">Z₂拓扑不变量</h2>
        <div class="card-content">
          <h3>时间反演不变系统</h3>
          <p>在时间反演不变的系统中，Chern数总是为零，但仍可能存在非平凡的拓扑相：</p> <div class="formula">$$\mathcal{T}H(\mathbf{k})\mathcal{T}^{-1} = H(-\mathbf{k})$$</div>

          <h3>Kramers定理</h3>
          <p>时间反演不变系统中，每个能级至少二重简并：</p> <div class="formula">$$E_n(\mathbf{k}) = E_n(-\mathbf{k})$$</div>

          <h3>Z₂分类理论</h3>
          <p>Kane-Mele提出的Z₂拓扑分类：</p>
          <div class="z2-classification">
            <div class="z2-dim">
              <h4>二维系统</h4><p>一个Z₂不变量$\nu$</p>
              <ul><li>$\nu = 0$：平凡绝缘体</li><li>$\nu = 1$：量子自旋霍尔绝缘体</li>
              </ul>
            </div>
            <div class="z2-dim">
              <h4>三维系统</h4><p>四个Z₂不变量$(\nu_0; \nu_1\nu_2\nu_3)$</p>
              <ul><li>强拓扑绝缘体：$\nu_0 = 1$</li><li>弱拓扑绝缘体：$\nu_0 = 0, \nu_i = 1$</li>
              </ul>
            </div>
          </div>

          <h3>Z₂不变量的计算</h3>
          <div class="z2-calculation">
            <div class="z2-method">
              <h4>Pfaffian方法</h4>
              <p>使用反对称矩阵的Pfaffian：</p>
              <div class="formula">$$(-1)^{\nu} = \sqrt{\frac{\det[w(\Lambda_i)]}{\prod_i \text{Pf}[w(\Lambda_i)]}}$$</div>
            </div>
            <div class="z2-method">
              <h4>Wilson环方法</h4>
              <p>沿时间反演不变动量路径的Wilson环</p>
            </div>
            <div class="z2-method">
              <h4>能带反转判据</h4>
              <p>通过能带反转分析拓扑相变</p>
            </div>
          </div>

          <h3>量子自旋霍尔效应</h3>
          <p>二维Z₂拓扑绝缘体的特征：</p>
          <div class="qshe-properties">
            <div class="qshe-prop">
              <h4>螺旋边界态</h4>
              <ul>
                <li>自旋向上和向下电子反向传播</li>
                <li>时间反演保护</li>
                <li>无背散射</li>
              </ul>
            </div>
            <div class="qshe-prop">
              <h4>自旋霍尔电导</h4>
              <ul>
                <li>量子化的自旋霍尔电导</li><li>$\sigma_{xy}^s = \frac{e}{2\pi}\nu$</li>
                <li>与电荷霍尔电导不同</li>
              </ul>
            </div>
          </div>

          <h3>三维拓扑绝缘体</h3>
          <p>三维Z₂拓扑绝缘体的表面态：</p>
          <div class="3d-ti-properties">
            <div class="3d-ti-prop">
              <h4>Dirac表面态</h4>
              <ul>
                <li>线性色散关系</li>
                <li>螺旋自旋结构</li>
                <li>拓扑保护</li>
              </ul>
            </div>
            <div class="3d-ti-prop">
              <h4>表面态色散</h4>
              <div class="formula">$$E(\mathbf{k}) = \pm v_F|\mathbf{k}|$$</div>
            </div>
          </div>

          <h3>实际材料中的Z₂拓扑绝缘体</h3>
          <div class="z2-materials">
            <div class="material-example">
              <h4>HgTe/CdTe量子阱</h4>
              <ul>
                <li>二维量子自旋霍尔绝缘体</li>
                <li>可调节的拓扑相变</li>
                <li>实验验证的螺旋边界态</li>
              </ul>
            </div>
            <div class="material-example">
              <h4>Bi₂Se₃族化合物</h4>
              <ul>
                <li>三维强拓扑绝缘体</li>
                <li>简单的表面态结构</li>
                <li>大的体能隙</li>
              </ul>
            </div>
            <div class="material-example">
              <h4>InAs/GaSb双量子阱</h4>
              <ul>
                <li>可调节的能带反转</li>
                <li>电场调控</li>
                <li>量子自旋霍尔效应</li>
              </ul>
            </div>
          </div>

          <h3>对称性保护的拓扑相</h3>
          <p>Z₂拓扑相受时间反演对称性保护：</p>
          <ul>
            <li><strong>对称性破缺：</strong>磁性杂质破坏拓扑保护</li>
            <li><strong>无序效应：</strong>非磁性无序保持拓扑性质</li>
            <li><strong>相互作用：</strong>强关联效应的影响</li>
          </ul>
        </div>
      </div>

      <!-- 其他拓扑不变量 -->
      <div class="content-card">
        <h2 class="card-title">其他拓扑不变量</h2>
        <div class="card-content">
          <h3>缠绕数（Winding Number）</h3>
          <p>一维系统的拓扑分类：</p> <div class="formula">$$\nu = \frac{1}{2\pi i} \oint_{\text{BZ}} \frac{d\ln \det h(k)}{dk}$$</div>

          <h3>Kitaev链的拓扑不变量</h3>
          <p>一维p波超导体的Z₂分类：</p> <div class="formula">$$(-1)^{\nu} = \text{sgn}[\det h(0)] \cdot \text{sgn}[\det h(\pi)]$$</div>

          <h3>镜面Chern数</h3>
          <p>具有镜面对称性系统的拓扑不变量：</p> <div class="formula">$$C_{\mathcal{M}} = \frac{1}{2\pi} \int_{\mathcal{M}\text{-BZ}} \Omega_{\mathcal{M}}(\mathbf{k}) d^2k$$</div>

          <h3>自旋Chern数</h3>
          <p>自旋轨道耦合系统的拓扑分类：</p> <div class="formula">$$C_s = \frac{1}{4\pi} \int_{\text{BZ}} \text{Tr}[\mathbf{s} \cdot (\boldsymbol{\Omega} \times \boldsymbol{\Omega})] d^3k$$</div>

          <h3>四极矩拓扑不变量</h3>
          <p>高阶拓扑绝缘体的特征：</p> <div class="formula">$$q_{xy} = \frac{1}{2\pi} \int_{\text{BZ}} \Omega_{xy}(\mathbf{k}) d^2k \mod 2$$</div>

          <h3>拓扑不变量的层次结构</h3>
          <div class="topological-hierarchy">
            <div class="hierarchy-level">
              <h4>一阶拓扑相</h4>
              <ul>
                <li>传统的拓扑绝缘体</li>
                <li>边界态或表面态</li>
                <li>Chern数、Z₂不变量</li>
              </ul>
            </div>
            <div class="hierarchy-level">
              <h4>二阶拓扑相</h4>
              <ul>
                <li>高阶拓扑绝缘体</li>
                <li>铰链态或角态</li>
                <li>四极矩、八极矩</li>
              </ul>
            </div>
            <div class="hierarchy-level">
              <h4>分数拓扑相</h4>
              <ul>
                <li>分数量子霍尔态</li>
                <li>分数Chern绝缘体</li>
                <li>分数拓扑不变量</li>
              </ul>
            </div>
          </div>

          <h3>非阿贝尔拓扑相</h3>
          <div class="non-abelian-phases">
            <div class="non-abelian-example">
              <h4>ν = 5/2分数量子霍尔态</h4>
              <ul>
                <li>Moore-Read波函数</li>
                <li>非阿贝尔任意子</li>
                <li>拓扑量子计算</li>
              </ul>
            </div>
            <div class="non-abelian-example">
              <h4>p+ip超导体</h4>
              <ul>
                <li>手性p波配对</li>
                <li>Majorana费米子</li>
                <li>非阿贝尔统计</li>
              </ul>
            </div>
          </div>

          <h3>拓扑不变量的稳定性</h3>
          <p>拓扑不变量的稳定性条件：</p>
          <ul>
            <li><strong>能隙保护：</strong>体能隙的存在</li>
            <li><strong>对称性保护：</strong>相关对称性的维持</li>
            <li><strong>维度限制：</strong>空间维度的约束</li>
            <li><strong>相互作用效应：</strong>多体相互作用的影响</li>
          </ul>

          <h3>拓扑相图</h3>
          <p>参数空间中的拓扑相图：</p>
          <div class="phase-diagram-features">
            <div class="phase-feature">
              <h4>拓扑相变线</h4>
              <p>不同拓扑相的边界</p>
            </div>
            <div class="phase-feature">
              <h4>多临界点</h4>
              <p>多个拓扑相的交汇点</p>
            </div>
            <div class="phase-feature">
              <h4>拓扑Lifshitz跃迁</h4>
              <p>费米面拓扑的改变</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 拓扑相变与临界现象 -->
      <div class="content-card">
        <h2 class="card-title">拓扑相变与临界现象</h2>
        <div class="card-content">
          <h3>拓扑相变的特征</h3>
          <p>拓扑相变具有独特的性质：</p>
          <div class="topological-transition-features">
            <div class="transition-feature">
              <h4>能隙关闭</h4>
              <ul>
                <li>相变点处体能隙必须关闭</li>
                <li>线性或二次接触</li>
                <li>临界指数</li>
              </ul>
            </div>
            <div class="transition-feature">
              <h4>拓扑不变量跳跃</h4>
              <ul>
                <li>不连续变化</li>
                <li>量子化性质</li>
                <li>拓扑保护</li>
              </ul>
            </div>
            <div class="transition-feature">
              <h4>边界态演化</h4>
              <ul>
                <li>边界态的出现或消失</li>
                <li>色散关系的改变</li>
                <li>局域化长度</li>
              </ul>
            </div>
          </div>

          <h3>Dirac点与Weyl点</h3>
          <p>拓扑相变常发生在Dirac点或Weyl点：</p>
          <div class="critical-points">
            <div class="critical-point">
              <h4>Dirac点</h4>
              <ul>
                <li>线性色散关系</li>
                <li>时间反演和空间反演对称</li>
                <li>四重简并</li>
              </ul>
            </div>
            <div class="critical-point">
              <h4>Weyl点</h4>
              <ul>
                <li>手性单极子</li>
                <li>破缺时间反演或空间反演</li>
                <li>二重简并</li>
              </ul>
            </div>
          </div>

          <h3>临界标度律</h3>
          <p>相变点附近的标度行为：</p> <div class="formula">$$\Delta \sim |g - g_c|^{\nu z}$$</div><p>其中$\Delta$是能隙，$g$是调节参数，$\nu$和$z$是临界指数。</p>

          <h3>有限尺寸标度</h3>
          <p>有限系统中的标度行为：</p>
          <div class="formula">$$\Delta(L) \sim L^{-z}$$</div>

          <h3>量子临界性</h3>
          <p>零温度下的量子相变：</p>
          <div class="quantum-criticality">
            <div class="qc-aspect">
              <h4>量子涨落</h4>
              <p>零点涨落驱动相变</p>
            </div>
            <div class="qc-aspect">
              <h4>动力学临界指数</h4>
              <p>时间和空间的不同标度</p>
            </div>
            <div class="qc-aspect">
              <h4>共形不变性</h4>
              <p>临界点的共形对称性</p>
            </div>
          </div>

          <h3>拓扑相变的分类</h3>
          <div class="transition-classification">
            <div class="transition-type">
              <h4>能带反转型</h4>
              <ul>
                <li>价带和导带交换</li>
                <li>质量项改变符号</li>
                <li>Z₂拓扑相变</li>
              </ul>
            </div>
            <div class="transition-type">
              <h4>能带接触型</h4>
              <ul>
                <li>Dirac点或Weyl点</li>
                <li>线性色散</li>
                <li>手性异常</li>
              </ul>
            </div>
            <div class="transition-type">
              <h4>Lifshitz型</h4>
              <ul>
                <li>费米面拓扑改变</li>
                <li>van Hove奇点</li>
                <li>态密度异常</li>
              </ul>
            </div>
          </div>

          <h3>实验探测方法</h3>
          <div class="experimental-probes">
            <div class="probe-method">
              <h4>输运测量</h4>
              <ul>
                <li>电导率的临界行为</li>
                <li>霍尔效应</li>
                <li>磁阻</li>
              </ul>
            </div>
            <div class="probe-method">
              <h4>光谱学</h4>
              <ul>
                <li>ARPES能带结构</li>
                <li>光学电导</li>
                <li>拉曼散射</li>
              </ul>
            </div>
            <div class="probe-method">
              <h4>热力学量</h4>
              <ul>
                <li>比热</li>
                <li>磁化率</li>
                <li>热电效应</li>
              </ul>
            </div>
          </div>

          <h3>理论描述方法</h3>
          <div class="theoretical-methods">
            <div class="theory-method">
              <h4>有效场论</h4>
              <p>低能有效理论描述</p>
            </div>
            <div class="theory-method">
              <h4>重整化群</h4>
              <p>标度行为和临界指数</p>
            </div>
            <div class="theory-method">
              <h4>共形场论</h4>
              <p>临界点的共形不变性</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 数值计算方法 -->
      <div class="content-card">
        <h2 class="card-title">数值计算方法</h2>
        <div class="card-content">
          <h3>能带结构计算</h3>
          <div class="band-calculation-methods">
            <div class="calc-method">
              <h4>紧束缚对角化</h4>
              <ul>
                <li>构造紧束缚哈密顿量</li>
                <li>直接对角化</li>
                <li>适用于小系统</li>
              </ul>
            </div>
            <div class="calc-method">
              <h4>k·p微扰理论</h4>
              <ul>
                <li>高对称点展开</li>
                <li>有效质量近似</li>
                <li>低能物理</li>
              </ul>
            </div>
            <div class="calc-method">
              <h4>第一性原理</h4>
              <ul>
                <li>密度泛函理论</li>
                <li>无参数计算</li>
                <li>材料预测</li>
              </ul>
            </div>
          </div>

          <h3>拓扑不变量计算</h3>
          <div class="topological-calculation-methods">
            <div class="topo-calc">
              <h4>Berry曲率积分</h4>
              <p>数值积分计算Chern数：</p> <div class="formula">$$C = \frac{1}{2\pi} \sum_{i,j} \Omega_{ij} \Delta k_x \Delta k_y$$</div>
            </div>
            <div class="topo-calc">
              <h4>Wilson环方法</h4>
              <p>沿闭合路径的Wilson环：</p> <div class="formula">$$W = \prod_{i} U_i, \quad U_i = \langle u_n(\mathbf{k}_i)|u_n(\mathbf{k}_{i+1})\rangle$$
              </div>
            </div>
            <div class="topo-calc">
              <h4>Z₂不变量计算</h4>
              <p>Pfaffian方法或能带反转判据</p>
            </div>
          </div>

          <h3>数值稳定性</h3>
          <p>数值计算中的稳定性问题：</p>
          <ul>
            <li><strong>规范选择：</strong>波函数相位的选择</li>
            <li><strong>分支切割：</strong>复数函数的分支</li>
            <li><strong>数值精度：</strong>有限精度的影响</li>
            <li><strong>网格密度：</strong>k点网格的选择</li>
          </ul>

          <h3>大规模计算</h3>
          <div class="large-scale-computation">
            <div class="computation-aspect">
              <h4>并行化</h4>
              <ul>
                <li>k点并行</li>
                <li>能带并行</li>
                <li>MPI/OpenMP</li>
              </ul>
            </div>
            <div class="computation-aspect">
              <h4>内存优化</h4>
              <ul>
                <li>稀疏矩阵</li>
                <li>分块算法</li>
                <li>外存计算</li>
              </ul>
            </div>
            <div class="computation-aspect">
              <h4>算法优化</h4>
              <ul>
                <li>快速傅里叶变换</li>
                <li>迭代对角化</li>
                <li>预条件方法</li>
              </ul>
            </div>
          </div>

          <h3>软件工具</h3>
          <div class="software-tools">
            <div class="software-category">
              <h4>第一性原理软件</h4>
              <ul>
                <li>VASP, Quantum ESPRESSO</li>
                <li>WIEN2k, ABINIT</li>
                <li>Gaussian, CRYSTAL</li>
              </ul>
            </div>
            <div class="software-category">
              <h4>拓扑计算工具</h4>
              <ul>
                <li>WannierTools</li>
                <li>Z2Pack</li>
                <li>PythTB</li>
              </ul>
            </div>
            <div class="software-category">
              <h4>可视化工具</h4>
              <ul>
                <li>VESTA, XCrySDen</li>
                <li>Matplotlib, Gnuplot</li>
                <li>ParaView, VMD</li>
              </ul>
            </div>
          </div>

          <h3>机器学习方法</h3>
          <p>机器学习在拓扑物理中的应用：</p>
          <div class="ml-applications">
            <div class="ml-app">
              <h4>拓扑相识别</h4>
              <ul>
                <li>神经网络分类</li>
                <li>支持向量机</li>
                <li>无监督学习</li>
              </ul>
            </div>
            <div class="ml-app">
              <h4>材料发现</h4>
              <ul>
                <li>高通量筛选</li>
                <li>性质预测</li>
                <li>逆向设计</li>
              </ul>
            </div>
            <div class="ml-app">
              <h4>相变检测</h4>
              <ul>
                <li>临界点识别</li>
                <li>序参量提取</li>
                <li>相图构建</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 总结与展望 -->
      <div class="content-card">
        <h2 class="card-title">总结与展望</h2>
        <div class="card-content">
          <h3>主要内容回顾</h3>
          <p>本节系统地探讨了动量空间能谱与拓扑不变量的关系：</p>
          <ul>
            <li><strong>能带结构基础：</strong>Bloch定理、能带分类、费米面性质</li>
            <li><strong>Berry相位理论：</strong>几何相位、Berry连接、Berry曲率</li>
            <li><strong>Chern数理论：</strong>拓扑分类、TKNN公式、边界态</li>
            <li><strong>Z₂拓扑不变量：</strong>时间反演系统、量子自旋霍尔效应</li>
            <li><strong>其他拓扑不变量：</strong>缠绕数、镜面Chern数、高阶拓扑</li>
            <li><strong>拓扑相变：</strong>临界现象、标度律、实验探测</li>
            <li><strong>数值计算：</strong>计算方法、软件工具、机器学习</li>
          </ul>

          <h3>重要物理洞察</h3>
          <div class="key-insights">
            <div class="insight">
              <h4>拓扑-几何对应</h4>
              <p>能带的拓扑性质反映了动量空间的几何结构</p>
            </div>
            <div class="insight">
              <h4>体边对应原理</h4>
              <p>体系的拓扑不变量决定边界态的性质</p>
            </div>
            <div class="insight">
              <h4>对称性保护</h4>
              <p>拓扑相的稳定性依赖于特定的对称性</p>
            </div>
            <div class="insight">
              <h4>量子化现象</h4>
              <p>拓扑不变量的量子化导致可观测量的量子化</p>
            </div>
          </div>

          <h3>当前研究热点</h3>
          <div class="research-hotspots">
            <div class="hotspot">
              <h4>高阶拓扑相</h4>
              <ul>
                <li>高阶拓扑绝缘体和超导体</li>
                <li>铰链态和角态</li>
                <li>多极矩拓扑不变量</li>
              </ul>
            </div>
            <div class="hotspot">
              <h4>非线性拓扑</h4>
              <ul>
                <li>非线性霍尔效应</li>
                <li>非线性光学响应</li>
                <li>高次谐波产生</li>
              </ul>
            </div>
            <div class="hotspot">
              <h4>拓扑磁性</h4>
              <ul>
                <li>磁性拓扑绝缘体</li>
                <li>拓扑磁振子</li>
                <li>反铁磁拓扑相</li>
              </ul>
            </div>
            <div class="hotspot">
              <h4>非平衡拓扑</h4>
              <ul>
                <li>Floquet拓扑相</li>
                <li>驱动系统</li>
                <li>拓扑泵浦</li>
              </ul>
            </div>
          </div>

          <h3>技术发展方向</h3>
          <div class="technical-directions">
            <div class="tech-direction">
              <h4>实验技术</h4>
              <ul>
                <li>时间分辨ARPES</li>
                <li>扫描探针显微镜</li>
                <li>量子传感器</li>
                <li>冷原子模拟</li>
              </ul>
            </div>
            <div class="tech-direction">
              <h4>理论方法</h4>
              <ul>
                <li>机器学习算法</li>
                <li>量子多体理论</li>
                <li>非平衡统计力学</li>
                <li>拓扑场论</li>
              </ul>
            </div>
            <div class="tech-direction">
              <h4>计算工具</h4>
              <ul>
                <li>高性能计算</li>
                <li>量子计算</li>
                <li>云计算平台</li>
                <li>自动化工作流</li>
              </ul>
            </div>
          </div>

          <h3>应用前景</h3>
          <div class="application-prospects">
            <div class="application">
              <h4>量子计算</h4>
              <ul>
                <li>拓扑量子比特</li>
                <li>容错量子计算</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
            <div class="application">
              <h4>自旋电子学</h4>
              <ul>
                <li>自旋流器件</li>
                <li>拓扑磁存储</li>
                <li>低功耗电子学</li>
              </ul>
            </div>
            <div class="application">
              <h4>光子学</h4>
              <ul>
                <li>拓扑光子晶体</li>
                <li>拓扑激光器</li>
                <li>光学隔离器</li>
              </ul>
            </div>
            <div class="application">
              <h4>传感器</h4>
              <ul>
                <li>拓扑量子传感器</li>
                <li>高精度测量</li>
                <li>抗噪声器件</li>
              </ul>
            </div>
          </div>

          <h3>面临的挑战</h3>
          <p>拓扑物理研究面临的主要挑战：</p>
          <ul>
            <li><strong>材料实现：</strong>寻找理想的拓扑材料</li>
            <li><strong>温度效应：</strong>室温下的拓扑保护</li>
            <li><strong>无序和缺陷：</strong>实际材料中的非理想因素</li>
            <li><strong>相互作用效应：</strong>强关联系统的拓扑相</li>
            <li><strong>器件集成：</strong>拓扑器件的实际应用</li>
            <li><strong>标准化：</strong>测量和表征的标准化</li>
          </ul>

          <h3>未来发展趋势</h3>
          <p>拓扑物理学的未来发展方向：</p>
          <ul>
            <li><strong>多学科交叉：</strong>与量子信息、材料科学、光学等领域的结合</li>
            <li><strong>理论深化：</strong>更深层次的拓扑理论发展</li>
            <li><strong>实验突破：</strong>新的实验技术和测量方法</li>
            <li><strong>应用转化：</strong>从基础研究向实际应用的转化</li>
            <li><strong>人工智能：</strong>AI在拓扑物理研究中的应用</li>
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

.band-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.prop-item {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.prop-item h4 {
  color: #92400e;
  margin-bottom: 0.5rem;
}

.band-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.class-item {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.class-item h4 {
  color: #047857;
  margin-bottom: 1rem;
}

.calculation-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.method-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.method-item h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
}

.berry-physics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.physics-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.physics-item h4 {
  color: #0c4a6e;
  margin-bottom: 0.5rem;
}

.berry-calculation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.calc-method {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.calc-method h4 {
  color: #be185d;
  margin-bottom: 0.5rem;
}

.chern-calculation,
.chern-insulators {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.chern-method,
.chern-example {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.chern-method h4,
.chern-example h4 {
  color: #15803d;
  margin-bottom: 1rem;
}

.experimental-observations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.exp-method {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.exp-method h4 {
  color: #a16207;
  margin-bottom: 0.5rem;
}

.z2-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.z2-dim {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.z2-dim h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.z2-calculation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.z2-method {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.z2-method h4 {
  color: #365314;
  margin-bottom: 1rem;
}

.qshe-properties,
.3d-ti-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.qshe-prop,
.3d-ti-prop {
  background: #fef7ff;
  border: 1px solid #c084fc;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.qshe-prop h4,
.3d-ti-prop h4 {
  color: #7c2d12;
  margin-bottom: 1rem;
}

.z2-materials {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.material-example {
  background: #fff7ed;
  border: 1px solid #fb923c;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.material-example h4 {
  color: #c2410c;
  margin-bottom: 1rem;
}

.topological-hierarchy {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.hierarchy-level {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.hierarchy-level h4 {
  color: #0c4a6e;
  margin-bottom: 1rem;
}

.non-abelian-phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.non-abelian-example {
  background: #fdf4ff;
  border: 1px solid #d946ef;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.non-abelian-example h4 {
  color: #a21caf;
  margin-bottom: 1rem;
}

.phase-diagram-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.phase-feature {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.phase-feature h4 {
  color: #047857;
  margin-bottom: 0.5rem;
}

.topological-transition-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.transition-feature {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.transition-feature h4 {
  color: #92400e;
  margin-bottom: 1rem;
}

.critical-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.critical-point {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.critical-point h4 {
  color: #1d4ed8;
  margin-bottom: 1rem;
}

.quantum-criticality {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.qc-aspect {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.qc-aspect h4 {
  color: #15803d;
  margin-bottom: 0.5rem;
}

.transition-classification {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.transition-type {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.transition-type h4 {
  color: #be185d;
  margin-bottom: 1rem;
}

.experimental-probes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.probe-method {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.probe-method h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.theoretical-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.theory-method {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.theory-method h4 {
  color: #365314;
  margin-bottom: 0.5rem;
}

.band-calculation-methods,
.topological-calculation-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.calc-method,
.topo-calc {
  background: #fff7ed;
  border: 1px solid #fb923c;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.calc-method h4,
.topo-calc h4 {
  color: #c2410c;
  margin-bottom: 1rem;
}

.large-scale-computation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.computation-aspect {
  background: #fef7ff;
  border: 1px solid #c084fc;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.computation-aspect h4 {
  color: #7c2d12;
  margin-bottom: 1rem;
}

.software-tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.software-category {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.software-category h4 {
  color: #0c4a6e;
  margin-bottom: 1rem;
}

.ml-applications {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.ml-app {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.ml-app h4 {
  color: #047857;
  margin-bottom: 1rem;
}

.key-insights,
.research-hotspots,
.technical-directions,
.application-prospects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.insight,
.hotspot,
.tech-direction,
.application {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.insight h4,
.hotspot h4,
.tech-direction h4,
.application h4 {
  color: #92400e;
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
  
  .band-properties,
  .band-classification,
  .calculation-methods,
  .berry-physics,
  .berry-calculation,
  .chern-calculation,
  .chern-insulators,
  .experimental-observations,
  .z2-classification,
  .z2-calculation,
  .qshe-properties,
  .3d-ti-properties,
  .z2-materials,
  .topological-hierarchy,
  .non-abelian-phases,
  .phase-diagram-features,
  .topological-transition-features,
  .critical-points,
  .quantum-criticality,
  .transition-classification,
  .experimental-probes,
  .theoretical-methods,
  .band-calculation-methods,
  .topological-calculation-methods,
  .large-scale-computation,
  .software-tools,
  .ml-applications,
  .key-insights,
  .research-hotspots,
  .technical-directions,
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