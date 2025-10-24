<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">10.5.2 动量空间密度矩阵</h1>
      <p class="chapter-subtitle">探索动量空间中密度矩阵的构造、性质与拓扑应用</p>
    </div>

    <div class="content-grid">
      <!-- 引言 -->
      <div class="content-card">
        <h2 class="card-title">引言</h2>
        <div class="card-content">
          <p>动量空间密度矩阵是量子多体系统理论中的核心概念，它提供了描述系统量子态的完整信息。在拓扑物理学中，动量空间密度矩阵不仅包含了系统的能谱信息，更重要的是它编码了系统的拓扑性质。</p>
          
          <p>通过分析动量空间密度矩阵的本征值和本征态，我们可以理解系统的基态性质、激发谱以及拓扑不变量。特别是在研究拓扑绝缘体、拓扑超导体等系统时，动量空间密度矩阵提供了计算拓扑数的重要工具。</p>
        </div>
      </div>

      <!-- 密度矩阵的基本概念 -->
      <div class="content-card">
        <h2 class="card-title">密度矩阵的基本概念</h2>
        <div class="card-content">
          <h3>密度矩阵的定义</h3>
          <p>对于量子系统，密度矩阵$\rho$定义为：</p>
          <div class="formula">$$\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$$</div><p>其中$p_i$是系统处于态$|\psi_i\rangle$的概率，满足$\sum_i p_i = 1$。</p>

          <h3>纯态与混合态</h3>
          <div class="state-types">
            <div class="state-item">
              <h4>纯态 (Pure State)</h4>
              <ul><li>$\rho = |\psi\rangle\langle\psi|$</li><li>$\text{Tr}(\rho^2) = 1$</li>
                <li>完全确定的量子态</li>
                <li>零温基态通常是纯态</li>
              </ul>
            </div>
            <div class="state-item">
              <h4>混合态 (Mixed State)</h4>
              <ul><li>$\rho = \sum_i p_i |\psi_i\rangle\langle\psi_i|$</li><li>$\text{Tr}(\rho^2) < 1$</li>
                <li>统计混合的量子态</li>
                <li>有限温度系统</li>
              </ul>
            </div>
          </div>

          <h3>密度矩阵的性质</h3>
          <div class="density-properties">
            <div class="property-item">
              <h4>归一化</h4><p>$\text{Tr}(\rho) = 1$</p>
            </div>
            <div class="property-item">
              <h4>厄米性</h4><p>$\rho = \rho^\dagger$</p>
            </div>
            <div class="property-item">
              <h4>正定性</h4><p>$\langle\psi|\rho|\psi\rangle \geq 0$</p>
            </div>
            <div class="property-item">
              <h4>幂等性</h4><p>纯态：$\rho^2 = \rho$</p>
            </div>
          </div>

          <h3>期望值计算</h3><p>任意算符$\hat{A}$的期望值：</p>
          <div class="formula">$$\langle A \rangle = \text{Tr}(\rho \hat{A})$$</div>

          <h3>时间演化</h3>
          <p>密度矩阵的时间演化遵循von Neumann方程：</p> <div class="formula">$$i\hbar \frac{\partial \rho}{\partial t} = [H, \rho]$$</div>
        </div>
      </div>

      <!-- 动量空间表示 -->
      <div class="content-card">
        <h2 class="card-title">动量空间表示</h2>
        <div class="card-content">
          <h3>动量空间基</h3><p>在动量空间中，我们使用动量本征态$|\mathbf{k}\rangle$作为基：</p>
          <div class="formula">$$\hat{p}|\mathbf{k}\rangle = \hbar\mathbf{k}|\mathbf{k}\rangle$$</div>

          <h3>动量空间密度矩阵</h3>
          <p>动量空间中的密度矩阵元素：</p> <div class="formula">$$\rho(\mathbf{k}, \mathbf{k}') = \langle\mathbf{k}|\rho|\mathbf{k}'\rangle$$</div>

          <h3>对角化表示</h3>
          <p>对于平移不变系统，密度矩阵在动量空间是对角的：</p> <div class="formula">$$\rho(\mathbf{k}, \mathbf{k}') = \rho(\mathbf{k})\delta(\mathbf{k} - \mathbf{k}')$$</div>

          <h3>多轨道系统</h3>
          <p>对于具有多个轨道的系统，密度矩阵是矩阵形式：</p> <div class="formula">$$\rho_{ij}(\mathbf{k}) = \langle\mathbf{k}, i|\rho|\mathbf{k}, j\rangle$$</div><p>其中$i, j$是轨道指标。</p>

          <h3>自旋系统</h3>
          <p>包含自旋的系统中，密度矩阵包含自旋指标：</p>
          <div class="formula">$$\rho_{\sigma\sigma'}(\mathbf{k}) = \langle\mathbf{k}, \sigma|\rho|\mathbf{k}, \sigma'\rangle$$</div>
          
          <p>可以用Pauli矩阵展开：</p> <div class="formula">$$\rho(\mathbf{k}) = \frac{1}{2}[n_0(\mathbf{k})\mathbb{I} + \mathbf{n}(\mathbf{k}) \cdot \boldsymbol{\sigma}]$$</div>
        </div>
      </div>

      <!-- 基态密度矩阵 -->
      <div class="content-card">
        <h2 class="card-title">基态密度矩阵</h2>
        <div class="card-content">
          <h3>零温基态</h3>
          <p>在零温下，系统处于基态，密度矩阵为：</p> <div class="formula">$$\rho_0 = |0\rangle\langle 0|$$</div><p>其中$|0\rangle$是系统的基态。</p>

          <h3>费米海</h3>
          <p>对于费米子系统，基态对应于费米海：</p>
          <div class="formula">$$\rho_0 = \prod_{|\mathbf{k}| < k_F} c_\mathbf{k}^\dagger |0\rangle\langle 0| c_\mathbf{k}$$</div>

          <h3>能带系统的基态</h3>
          <p>对于能带系统，基态密度矩阵：</p> <div class="formula">$$\rho_0(\mathbf{k}) = \sum_{n \text{ occ}} |u_{n\mathbf{k}}\rangle\langle u_{n\mathbf{k}}|$$</div>
          
          <p>其中求和遍历所有占据的能带。</p>

          <h3>投影算符</h3>
          <p>基态密度矩阵可以写成投影算符形式：</p> <div class="formula">$$P_{\text{occ}}(\mathbf{k}) = \sum_{n \text{ occ}} |u_{n\mathbf{k}}\rangle\langle u_{n\mathbf{k}}|$$</div>

          <h3>占据数表示</h3>
          <p>使用占据数算符：</p> <div class="formula">$$n(\mathbf{k}) = \text{Tr}[\rho_0(\mathbf{k})] = \sum_{n \text{ occ}} 1$$</div>

          <h3>基态能量</h3>
          <p>基态能量可以通过密度矩阵计算：</p> <div class="formula">$$E_0 = \text{Tr}[H \rho_0] = \sum_\mathbf{k} \text{Tr}[H(\mathbf{k}) \rho_0(\mathbf{k})]$$</div>
        </div>
      </div>

      <!-- 有限温度密度矩阵 -->
      <div class="content-card">
        <h2 class="card-title">有限温度密度矩阵</h2>
        <div class="card-content">
          <h3>热平衡态</h3>
          <p>有限温度下的热平衡态密度矩阵：</p> <div class="formula">$$\rho_T = \frac{e^{-\beta H}}{Z}$$</div><p>其中$\beta = 1/(k_B T)$，$Z = \text{Tr}(e^{-\beta H})$是配分函数。</p>

          <h3>费米-狄拉克分布</h3>
          <p>对于费米子系统：</p>
          <div class="formula">$$\rho_T(\mathbf{k}) = \sum_n f(E_{n\mathbf{k}}) |u_{n\mathbf{k}}\rangle\langle u_{n\mathbf{k}}|$$</div><p>其中$f(E) = 1/(e^{\beta(E-\mu)} + 1)$是费米-狄拉克分布函数。</p>

          <h3>玻色-爱因斯坦分布</h3>
          <p>对于玻色子系统：</p>
          <div class="formula">$$\rho_T(\mathbf{k}) = \sum_n n_B(E_{n\mathbf{k}}) |u_{n\mathbf{k}}\rangle\langle u_{n\mathbf{k}}|$$</div><p>其中$n_B(E) = 1/(e^{\beta(E-\mu)} - 1)$是玻色-爱因斯坦分布函数。</p>

          <h3>高温极限</h3><p>在高温极限下($k_B T \gg$能级间距)：</p>
          <div class="formula">$$\rho_T \approx \frac{\mathbb{I}}{N}$$</div>
          
          <p>系统趋向于最大混合态。</p>

          <h3>低温展开</h3>
          <p>在低温下，可以对费米-狄拉克分布进行展开：</p> <div class="formula">$$f(E) \approx \theta(\mu - E) - \frac{\pi^2}{6}(k_B T)^2 \delta'(\mu - E)$$</div>

          <h3>热力学量</h3>
          <div class="thermodynamic-quantities">
            <div class="quantity-item">
              <h4>内能</h4><p>$U = \text{Tr}(H \rho_T)$</p>
            </div>
            <div class="quantity-item">
              <h4>熵</h4><p>$S = -k_B \text{Tr}(\rho_T \ln \rho_T)$</p>
            </div>
            <div class="quantity-item">
              <h4>自由能</h4><p>$F = U - TS$</p>
            </div>
            <div class="quantity-item">
              <h4>比热</h4><p>$C = \frac{\partial U}{\partial T}$</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 约化密度矩阵 -->
      <div class="content-card">
        <h2 class="card-title">约化密度矩阵</h2>
        <div class="card-content">
          <h3>部分迹操作</h3><p>对于复合系统$A \otimes B$，子系统A的约化密度矩阵：</p>
          <div class="formula">$$\rho_A = \text{Tr}_B(\rho_{AB})$$</div>

          <h3>空间约化</h3>
          <p>对于空间上分离的子系统，约化密度矩阵描述局域性质：</p> <div class="formula">$$\rho_L = \text{Tr}_R(\rho_{\text{total}})$$</div>

          <h3>轨道约化</h3>
          <p>在多轨道系统中，可以约化到特定轨道：</p> <div class="formula">$$\rho_{\text{orb}}(\mathbf{k}) = \text{Tr}_{\text{other}}[\rho(\mathbf{k})]$$</div>

          <h3>自旋约化</h3>
          <p>约化掉自旋自由度：</p> <div class="formula">$$\rho_{\text{charge}}(\mathbf{k}) = \text{Tr}_{\text{spin}}[\rho(\mathbf{k})]$$</div>

          <h3>纠缠熵</h3>
          <p>约化密度矩阵的纠缠熵：</p> <div class="formula">$$S_{\text{ent}} = -\text{Tr}(\rho_A \ln \rho_A)$$</div>

          <h3>Schmidt分解</h3>
          <p>纯态的Schmidt分解：</p> <div class="formula">$$|\psi\rangle = \sum_i \sqrt{\lambda_i} |i_A\rangle \otimes |i_B\rangle$$</div><p>其中$\lambda_i$是约化密度矩阵的本征值。</p>
        </div>
      </div>

      <!-- 拓扑性质与Berry相位 -->
      <div class="content-card">
        <h2 class="card-title">拓扑性质与Berry相位</h2>
        <div class="card-content">
          <h3>Berry连接</h3>
          <p>对于参数化的量子态，Berry连接定义为：</p>
          <div class="formula">$$\mathcal{A}_n(\mathbf{k}) = i\langle u_{n\mathbf{k}}|\nabla_\mathbf{k}|u_{n\mathbf{k}}\rangle$$</div>

          <h3>Berry曲率</h3>
          <p>Berry曲率是Berry连接的旋度：</p> <div class="formula">$$\Omega_n(\mathbf{k}) = \nabla_\mathbf{k} \times \mathcal{A}_n(\mathbf{k})$$</div>

          <h3>Chern数</h3>
          <p>二维系统的Chern数：</p> <div class="formula">$$C_n = \frac{1}{2\pi} \int_{\text{BZ}} \Omega_n(\mathbf{k}) \cdot d\mathbf{S}$$</div>

          <h3>密度矩阵的Berry曲率</h3>
          <p>对于占据态的总Berry曲率：</p> <div class="formula">$$\Omega(\mathbf{k}) = \sum_{n \text{ occ}} \Omega_n(\mathbf{k})$$</div>

          <h3>拓扑标记</h3>
          <p>密度矩阵的拓扑性质可以通过以下量表征：</p>
          <div class="topological-markers">
            <div class="marker-item">
              <h4>Chern标记</h4><p>$C = \frac{1}{2\pi} \int \text{Tr}[\Omega(\mathbf{k})] d^2k$</p>
            </div>
            <div class="marker-item">
              <h4>Z₂标记</h4>
              <p>时间反演不变系统的拓扑分类</p>
            </div>
            <div class="marker-item">
              <h4>缠绕数</h4>
              <p>一维系统的拓扑不变量</p>
            </div>
          </div>

          <h3>Wilson环</h3>
          <p>Wilson环算符：</p>
          <div class="formula">$$W = \mathcal{P} \exp\left(i \oint \mathcal{A}(\mathbf{k}) \cdot d\mathbf{k}\right)$$</div>

          <h3>拓扑相变</h3>
          <p>拓扑相变发生时，密度矩阵的拓扑性质发生跳跃：</p>
          <ul>
            <li><strong>能隙关闭：</strong>相变点处能隙必须关闭</li>
            <li><strong>拓扑数跳跃：</strong>拓扑不变量不连续变化</li>
            <li><strong>边界态变化：</strong>边界态的出现或消失</li>
          </ul>
        </div>
      </div>

      <!-- 数值计算方法 -->
      <div class="content-card">
        <h2 class="card-title">数值计算方法</h2>
        <div class="card-content">
          <h3>对角化方法</h3>
          <p>直接对角化哈密顿量获得本征态和本征值：</p> <div class="formula">$$H(\mathbf{k}) |u_{n\mathbf{k}}\rangle = E_{n\mathbf{k}} |u_{n\mathbf{k}}\rangle$$</div>

          <h3>密度矩阵构造</h3>
          <div class="construction-steps">
            <div class="step-item">
              <h4>步骤1：哈密顿量对角化</h4>
              <p>对每个k点对角化H(k)</p>
            </div>
            <div class="step-item">
              <h4>步骤2：占据态选择</h4>
              <p>根据费米能确定占据态</p>
            </div>
            <div class="step-item">
              <h4>步骤3：密度矩阵构造</h4>
              <p>构造投影算符</p>
            </div>
            <div class="step-item">
              <h4>步骤4：性质计算</h4>
              <p>计算各种物理量</p>
            </div>
          </div>

          <h3>k点采样</h3>
          <p>布里渊区的k点网格采样：</p>
          <div class="sampling-methods">
            <div class="sampling-item">
              <h4>均匀网格</h4>
              <ul>
                <li>简单立方网格</li>
                <li>适用于简单系统</li>
                <li>计算量大</li>
              </ul>
            </div>
            <div class="sampling-item">
              <h4>Monkhorst-Pack</h4>
              <ul>
                <li>优化的k点分布</li>
                <li>减少计算量</li>
                <li>保持对称性</li>
              </ul>
            </div>
            <div class="sampling-item">
              <h4>自适应采样</h4>
              <ul>
                <li>根据函数变化调整</li>
                <li>提高精度</li>
                <li>节省计算资源</li>
              </ul>
            </div>
          </div>

          <h3>Berry相位计算</h3>
          <p>数值计算Berry相位的方法：</p>
          <div class="berry-calculation">
            <div class="calc-method">
              <h4>有限差分法</h4><p>$\mathcal{A}_\mu(\mathbf{k}) \approx \frac{1}{2\Delta k_\mu} \ln\frac{\langle u(\mathbf{k})|u(\mathbf{k}+\Delta\mathbf{k}_\mu)\rangle}{\langle u(\mathbf{k}-\Delta\mathbf{k}_\mu)|u(\mathbf{k})\rangle}$</p>
            </div>
            <div class="calc-method">
              <h4>Wilson环方法</h4>
              <p>沿闭合路径计算Wilson环本征值</p>
            </div>
            <div class="calc-method">
              <h4>Wannier插值</h4>
              <p>使用Wannier函数进行插值</p>
            </div>
          </div>

          <h3>拓扑不变量计算</h3>
          <div class="invariant-calculation">
            <div class="invariant-item">
              <h4>Chern数</h4>
              <ul>
                <li>Berry曲率积分</li>
                <li>Wilson环方法</li>
                <li>格点规范理论</li>
              </ul>
            </div>
            <div class="invariant-item">
              <h4>Z₂不变量</h4>
              <ul>
                <li>Pfaffian方法</li>
                <li>Wilson环方法</li>
                <li>能带反转判据</li>
              </ul>
            </div>
            <div class="invariant-item">
              <h4>缠绕数</h4>
              <ul>
                <li>复数函数的相位</li>
                <li>路径积分</li>
                <li>映射度计算</li>
              </ul>
            </div>
          </div>

          <h3>数值稳定性</h3>
          <p>数值计算中需要注意的问题：</p>
          <ul>
            <li><strong>规范选择：</strong>避免规范奇点</li>
            <li><strong>相位连续性：</strong>保证波函数相位连续</li>
            <li><strong>精度控制：</strong>合适的数值精度</li>
            <li><strong>收敛性检查：</strong>验证结果收敛</li>
          </ul>
        </div>
      </div>

      <!-- 应用实例 -->
      <div class="content-card">
        <h2 class="card-title">应用实例</h2>
        <div class="card-content">
          <h3>量子霍尔系统</h3>
          <p>二维电子气在磁场中的密度矩阵：</p>
          <div class="formula">$$\rho(\mathbf{k}) = \sum_{n=0}^{N_{\text{occ}}} |n, \mathbf{k}\rangle\langle n, \mathbf{k}|$$</div><p>其中$|n, \mathbf{k}\rangle$是Landau能级的本征态。</p>

          <h3>拓扑绝缘体</h3>
          <p>三维拓扑绝缘体的表面态密度矩阵：</p>
          <div class="formula">$$\rho_{\text{surf}}(\mathbf{k}_\parallel) = \frac{1}{2}[\mathbb{I} + \hat{\mathbf{d}}(\mathbf{k}_\parallel) \cdot \boldsymbol{\sigma}]$$</div><p>其中$\hat{\mathbf{d}}(\mathbf{k}_\parallel)$是表面态的自旋结构。</p>

          <h3>拓扑超导体</h3>
          <p>p波超导体的密度矩阵：</p>
          <div class="formula">$$\rho(\mathbf{k}) = \frac{1}{2}\left[\mathbb{I} + \frac{\mathbf{d}(\mathbf{k}) \cdot \boldsymbol{\sigma}}{|\mathbf{d}(\mathbf{k})|}\right]$$</div><p>其中$\mathbf{d}(\mathbf{k})$是超导序参量向量。</p>

          <h3>Weyl半金属</h3>
          <p>Weyl点附近的密度矩阵：</p>
          <div class="formula">$$\rho(\mathbf{k}) = \frac{1}{2}\left[\mathbb{I} + \frac{v_F(\mathbf{k} - \mathbf{k}_W) \cdot \boldsymbol{\sigma}}{|v_F(\mathbf{k} - \mathbf{k}_W)|}\right]$$</div>

          <h3>石墨烯</h3>
          <p>石墨烯在Dirac点附近的密度矩阵：</p> <div class="formula">$$\rho(\mathbf{k}) = \frac{1}{2}\left[\mathbb{I} + \frac{v_F(\sigma_x k_x + \sigma_y k_y)}{\sqrt{v_F^2(k_x^2 + k_y^2)}}\right]$$
          </div>

          <h3>实验观测</h3>
          <div class="experimental-observations">
            <div class="obs-item">
              <h4>ARPES测量</h4>
              <ul>
                <li>直接测量能带结构</li>
                <li>观测表面态</li>
                <li>确定费米面</li>
              </ul>
            </div>
            <div class="obs-item">
              <h4>输运测量</h4>
              <ul>
                <li>霍尔电导</li>
                <li>磁阻</li>
                <li>热电效应</li>
              </ul>
            </div>
            <div class="obs-item">
              <h4>光谱学</h4>
              <ul>
                <li>光学电导</li>
                <li>拉曼散射</li>
                <li>太赫兹光谱</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 总结与展望 -->
      <div class="content-card">
        <h2 class="card-title">总结与展望</h2>
        <div class="card-content">
          <h3>主要内容总结</h3>
          <p>本节系统介绍了动量空间密度矩阵的基本概念、构造方法和拓扑应用：</p>
          <ul>
            <li><strong>基本概念：</strong>密度矩阵的定义、性质和动量空间表示</li>
            <li><strong>基态性质：</strong>零温基态和有限温度的密度矩阵</li>
            <li><strong>拓扑性质：</strong>Berry相位、拓扑不变量的计算</li>
            <li><strong>数值方法：</strong>实际计算中的技巧和注意事项</li>
            <li><strong>应用实例：</strong>各种拓扑系统中的具体应用</li>
          </ul>

          <h3>理论发展前沿</h3>
          <div class="theoretical-frontiers">
            <div class="frontier-item">
              <h4>量子几何</h4>
              <ul>
                <li>量子度规张量</li>
                <li>Fubini-Study度规</li>
                <li>几何相位</li>
              </ul>
            </div>
            <div class="frontier-item">
              <h4>非阿贝尔拓扑</h4>
              <ul>
                <li>非阿贝尔Berry相位</li>
                <li>拓扑超导体</li>
                <li>Majorana费米子</li>
              </ul>
            </div>
            <div class="frontier-item">
              <h4>高阶拓扑</h4>
              <ul>
                <li>高阶拓扑绝缘体</li>
                <li>铰链态</li>
                <li>角态</li>
              </ul>
            </div>
          </div>

          <h3>计算方法发展</h3>
          <div class="computational-developments">
            <div class="comp-dev-item">
              <h4>机器学习</h4>
              <ul>
                <li>神经网络波函数</li>
                <li>拓扑相识别</li>
                <li>自动微分</li>
              </ul>
            </div>
            <div class="comp-dev-item">
              <h4>量子计算</h4>
              <ul>
                <li>变分量子算法</li>
                <li>量子模拟</li>
                <li>量子优化</li>
              </ul>
            </div>
            <div class="comp-dev-item">
              <h4>高性能计算</h4>
              <ul>
                <li>GPU加速</li>
                <li>并行算法</li>
                <li>大规模计算</li>
              </ul>
            </div>
          </div>

          <h3>实验技术进展</h3>
          <div class="experimental-progress">
            <div class="exp-prog-item">
              <h4>新探测手段</h4>
              <ul>
                <li>时间分辨ARPES</li>
                <li>自旋分辨测量</li>
                <li>纳米尺度探针</li>
              </ul>
            </div>
            <div class="exp-prog-item">
              <h4>人工系统</h4>
              <ul>
                <li>冷原子系统</li>
                <li>光子晶体</li>
                <li>超导量子比特</li>
              </ul>
            </div>
            <div class="exp-prog-item">
              <h4>极端条件</h4>
              <ul>
                <li>超高压</li>
                <li>强磁场</li>
                <li>超快动力学</li>
              </ul>
            </div>
          </div>

          <h3>未来挑战</h3>
          <p>动量空间密度矩阵研究面临的主要挑战：</p>
          <ul>
            <li><strong>强关联效应：</strong>超越单粒子图像的多体效应</li>
            <li><strong>非平衡态：</strong>驱动系统和瞬态过程</li>
            <li><strong>无序效应：</strong>杂质和缺陷对拓扑性质的影响</li>
            <li><strong>相互作用：</strong>电子-电子相互作用的处理</li>
            <li><strong>实时动力学：</strong>非平衡量子动力学的描述</li>
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

.state-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.state-item {
  background: #fef3c7;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.state-item h4 {
  color: #92400e;
  margin-bottom: 1rem;
}

.density-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.property-item {
  background: #ecfdf5;
  border: 1px solid #10b981;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.property-item h4 {
  color: #047857;
  margin-bottom: 0.5rem;
}

.thermodynamic-quantities {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.quantity-item {
  background: #eff6ff;
  border: 1px solid #3b82f6;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.quantity-item h4 {
  color: #1d4ed8;
  margin-bottom: 0.5rem;
}

.topological-markers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.marker-item {
  background: #f0f9ff;
  border: 1px solid #0ea5e9;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.marker-item h4 {
  color: #0c4a6e;
  margin-bottom: 0.5rem;
}

.construction-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.step-item {
  background: #fdf2f8;
  border: 1px solid #ec4899;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
}

.step-item h4 {
  color: #be185d;
  margin-bottom: 0.5rem;
}

.sampling-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.sampling-item {
  background: #f0fdf4;
  border: 1px solid #22c55e;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.sampling-item h4 {
  color: #15803d;
  margin-bottom: 1rem;
}

.berry-calculation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.calc-method {
  background: #fefce8;
  border: 1px solid #eab308;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.calc-method h4 {
  color: #a16207;
  margin-bottom: 1rem;
}

.invariant-calculation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.invariant-item {
  background: #f3e8ff;
  border: 1px solid #8b5cf6;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.invariant-item h4 {
  color: #5b21b6;
  margin-bottom: 1rem;
}

.experimental-observations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.obs-item {
  background: #ecfccb;
  border: 1px solid #65a30d;
  border-radius: 0.5rem;
  padding: 1rem;
}

.obs-item h4 {
  color: #365314;
  margin-bottom: 0.5rem;
}

.theoretical-frontiers,
.computational-developments,
.experimental-progress {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.frontier-item,
.comp-dev-item,
.exp-prog-item {
  background: #fef7ff;
  border: 1px solid #c084fc;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.frontier-item h4,
.comp-dev-item h4,
.exp-prog-item h4 {
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
  
  .state-types,
  .density-properties,
  .thermodynamic-quantities,
  .topological-markers,
  .construction-steps,
  .sampling-methods,
  .berry-calculation,
  .invariant-calculation,
  .experimental-observations,
  .theoretical-frontiers,
  .computational-developments,
  .experimental-progress {
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