<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3.3 模型的对角化</h1>
      <p class="chapter-subtitle">从复杂相互作用到简单本征模式</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>掌握量子横场Ising模型的完整对角化过程</li>
        <li>理解Fourier变换在对角化中的作用</li>
        <li>学习Bogoliubov变换的原理和应用</li>
        <li>掌握准粒子激发谱的计算方法</li>
        <li>理解基态和激发态的物理性质</li>
      </ul>
    </div>

    <div class="diagonalization-overview">
      <h2>对角化概述</h2>
      
      <div class="overview-content">
        <h3>对角化的目标</h3>
        <p>
          对角化的最终目标是将复杂的相互作用哈密顿量转化为
          独立准粒子的简单形式：
        </p>
        <div class="formula-container">
          $$H = \sum_k E_k \eta_k^\dagger \eta_k + E_0$$</div>
        
        <div class="transformation-chain"> <div class="transform-step"><h4>原始Ising模型</h4> <div class="formula-container">$$H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x$$</div>
            <p>复杂的自旋相互作用</p>
          </div>
          
          <div class="arrow">↓</div> <div class="transform-step"><h4>Jordan-Wigner变换</h4> <div class="formula-container">$$H = \sum_i \left[ J c_i^\dagger c_i - \frac{J}{2}(c_i^\dagger c_{i+1} + \text{h.c.}) - \frac{h}{2}(c_i^\dagger + c_i) \right]$$</div>
            <p>费米子二次型哈密顿量</p>
          </div>
          
          <div class="arrow">↓</div> <div class="transform-step"><h4>对角化后</h4> <div class="formula-container">$$H = \sum_k E_k \eta_k^\dagger \eta_k + E_0$$</div>
            <p>独立准粒子激发</p>
          </div>
        </div>
      </div>

      <div class="diagonalization-strategy">
        <h3>对角化策略</h3>
        <p>
          完整的对角化过程包含以下关键步骤：
        </p>
        
        <div class="strategy-steps">
          <div class="strategy-card">
            <h4>1️⃣ Fourier变换</h4>
            <p>
              将实空间的费米子算符变换到动量空间，
              利用平移对称性简化哈密顿量。
            </p>
          </div>
          
          <div class="strategy-card">
            <h4>2️⃣ 矩阵表示</h4>
            <p>
              将哈密顿量写成矩阵形式，
              识别需要对角化的矩阵结构。
            </p>
          </div>
          
          <div class="strategy-card">
            <h4>3️⃣ Bogoliubov变换</h4>
            <p>
              通过幺正变换将哈密顿量
              转化为对角形式。
            </p>
          </div>
          
          <div class="strategy-card">
            <h4>4️⃣ 能谱分析</h4>
            <p>
              分析准粒子能谱，
              理解系统的物理性质。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="fourier-transformation">
      <h2>Fourier变换</h2>
      
      <div class="fourier-basics">
        <h3>基本变换关系</h3>
        <p>
          对于周期边界条件的一维链，Fourier变换定义为：
        </p>
        
        <div class="transform-definitions"> <div class="definition-card"><h4>正变换（实空间 → 动量空间）</h4> <div class="formula-container">$$c_k = \frac{1}{\sqrt{N}} \sum_{j=1}^N e^{ikj} c_j$$</div> <div class="formula-container">$$c_k^\dagger = \frac{1}{\sqrt{N}} \sum_{j=1}^N e^{-ikj} c_j^\dagger$$</div>
          </div> <div class="definition-card"><h4>反变换（动量空间 → 实空间）</h4> <div class="formula-container">$$c_j = \frac{1}{\sqrt{N}} \sum_k e^{-ikj} c_k$$</div> <div class="formula-container">$$c_j^\dagger = \frac{1}{\sqrt{N}} \sum_k e^{ikj} c_k^\dagger$$</div>
          </div>
        </div>
        
        <div class="momentum-values">
          <h4>动量取值</h4><p>对于$N$个格点的周期链，动量取离散值：
          </p><div class="formula-container">$$k = \frac{2\pi n}{N}, \quad n = 0, 1, 2, \ldots, N-1$$</div><p>或者等价地：$k \in [-\pi, \pi)$（第一布里渊区）
          </p>
        </div>
      </div>

      <div class="hamiltonian-transformation">
        <h3>哈密顿量的变换</h3>
        <p>
          现在我们逐项变换Jordan-Wigner变换后的哈密顿量：
        </p>
        
        <div class="term-by-term">
          <div class="term-card"><h4>项1：化学势项</h4><p>原始项：$J \sum_i c_i^\dagger c_i$</p><div class="formula-container">$$J \sum_i c_i^\dagger c_i = J \sum_k c_k^\dagger c_k$$</div>
            <p>这一项在Fourier变换下保持对角形式</p>
          </div>
          
          <div class="term-card"><h4>项2：跃迁项</h4><p>原始项：$-\frac{J}{2} \sum_i (c_i^\dagger c_{i+1} + c_{i+1}^\dagger c_i)$</p>
            <div class="calculation-steps">
              <div class="step">
                <p>代入Fourier变换：</p><div class="formula-container">$$c_i^\dagger c_{i+1} = \frac{1}{N} \sum_{k,k'} e^{ikj} e^{-ik'(j+1)} c_k^\dagger c_{k'}$$</div>
              </div><div class="step"><p>利用正交性：$\sum_j e^{i(k-k')j} = N\delta_{k,k'}$</p><div class="formula-container">$$\sum_i c_i^\dagger c_{i+1} = \sum_k e^{-ik} c_k^\dagger c_k$$</div>
              </div> <div class="step"><p>最终结果：</p> <div class="formula-container">$$-\frac{J}{2} \sum_i (c_i^\dagger c_{i+1} + \text{h.c.}) = -J \sum_k \cos k \, c_k^\dagger c_k$$</div>
              </div>
            </div>
          </div>
          
          <div class="term-card"><h4>项3：横场项</h4><p>原始项：$-\frac{h}{2} \sum_i (c_i^\dagger + c_i)$</p>
            <p>这一项比较复杂，因为它混合了产生和湮灭算符</p><div class="formula-container">$$-\frac{h}{2} \sum_i (c_i^\dagger + c_i) = -\frac{h}{2} \sum_k (c_k^\dagger + c_{-k})$$</div><p>注意：这里利用了$c_k = c_{-k}^\dagger$在实空间算符为厄米的情况下</p>
          </div>
        </div>
      </div>

      <div class="momentum-space-hamiltonian">
        <h3>动量空间哈密顿量</h3>
        <p>
          综合所有项，动量空间的哈密顿量为：
        </p><div class="formula-container">$$H = \sum_k \left[ (J - J\cos k) c_k^\dagger c_k - \frac{h}{2}(c_k^\dagger + c_{-k}) \right]$$</div>
        
        <div class="simplification">
          <h4>进一步简化</h4><p>定义$\epsilon_k = J(1 - \cos k) = 2J\sin^2(k/2)$，则：
          </p><div class="formula-container">$$H = \sum_k \left[ \epsilon_k c_k^\dagger c_k - \frac{h}{2}(c_k^\dagger + c_{-k}) \right]$$</div><p>这个哈密顿量仍然不是对角的，因为存在$c_k^\dagger + c_{-k}$项。
          </p>
        </div>
      </div>
    </div>

    <div class="bogoliubov-transformation">
      <h2>Bogoliubov变换</h2>
      
      <div class="transformation-motivation">
        <h3>变换的动机</h3><p>动量空间哈密顿量中的$c_k^\dagger + c_{-k}$项破坏了对角性。
          Bogoliubov变换通过引入新的准粒子算符来消除这种混合。
        </p>
        
        <div class="problem-analysis">
          <div class="problem-card">
            <h4>🔴 问题</h4>
            <p>哈密顿量包含非对角项：</p><div class="formula-container">$$H = \sum_k \left[ \epsilon_k c_k^\dagger c_k - \frac{h}{2}(c_k^\dagger + c_{-k}) \right]$$</div><ul><li>$c_k^\dagger c_k$：对角项</li><li>$c_k^\dagger + c_{-k}$：非对角项</li>
            </ul>
          </div>
          
          <div class="solution-card">
            <h4>🟢 解决方案</h4>
            <p>引入新的准粒子算符：</p><div class="formula-container">$$\eta_k = u_k c_k + v_k c_{-k}^\dagger$$</div><p>通过适当选择系数$u_k$和$v_k$使哈密顿量对角化</p>
          </div>
        </div>
      </div>

      <div class="transformation-definition">
        <h3>变换的定义</h3>
        <p>
          Bogoliubov变换定义为：
        </p>
        
        <div class="transform-equations">
          <div class="equation-group">
            <h4>正变换</h4><div class="formula-container">$$\eta_k = u_k c_k + v_k c_{-k}^\dagger$$</div> <div class="formula-container">$$\eta_k^\dagger = u_k c_k^\dagger + v_k c_{-k}$$</div>
          </div> <div class="equation-group"><h4>反变换</h4> <div class="formula-container">$$c_k = u_k \eta_k + v_k \eta_{-k}^\dagger$$</div> <div class="formula-container">$$c_k^\dagger = u_k \eta_k^\dagger + v_k \eta_{-k}$$</div>
          </div>
        </div>
        
        <div class="normalization-condition">
          <h4>归一化条件</h4>
          <p> 为了保持费米子的反对易关系，系数必须满足：</p> <div class="formula-container">$$u_k^2 + v_k^2 = 1$$</div><p>这确保了$\{\eta_k, \eta_{k'}^\dagger\} = \delta_{k,k'}$</p>
        </div>
      </div>

      <div class="coefficient-determination">
        <h3>系数的确定</h3>
        <p>
          为了对角化哈密顿量，我们需要消除所有非对角项。
          这要求：
        </p>
        
        <div class="diagonalization-condition">
          <h4>对角化条件</h4><p>将Bogoliubov变换代入哈密顿量，要求所有$\eta_k \eta_{-k}$和$\eta_k^\dagger \eta_{-k}^\dagger$项的系数为零：
          </p><div class="formula-container">$$\epsilon_k u_k v_k - \frac{h}{2}(u_k^2 - v_k^2) = 0$$</div>
        </div>
        
        <div class="coefficient-solution">
          <h4>系数的解</h4><p>结合归一化条件$u_k^2 + v_k^2 = 1$，我们得到：
          </p><div class="formula-container">$$u_k^2 = \frac{1}{2}\left(1 + \frac{\epsilon_k}{E_k}\right)$$</div> <div class="formula-container">$$v_k^2 = \frac{1}{2}\left(1 - \frac{\epsilon_k}{E_k}\right)$$</div>
          <p> 其中准粒子能量为：</p> <div class="formula-container">$$E_k = \sqrt{\epsilon_k^2 + \left(\frac{h}{2}\right)^2} = \sqrt{4J^2\sin^4(k/2) + \frac{h^2}{4}}$$</div>
        </div>
        
        <div class="explicit-form">
          <h4>显式表达式</h4>
          <p> 更明确地，系数可以写为：</p> <div class="formula-container">$$u_k = \sqrt{\frac{1}{2}\left(1 + \frac{2J\sin^2(k/2)}{\sqrt{4J^2\sin^4(k/2) + h^2/4}}\right)}$$</div> <div class="formula-container">$$v_k = \sqrt{\frac{1}{2}\left(1 - \frac{2J\sin^2(k/2)}{\sqrt{4J^2\sin^4(k/2) + h^2/4}}\right)}$$</div>
        </div>
      </div>

      <div class="diagonalized-hamiltonian">
        <h3>对角化后的哈密顿量</h3>
        <p> 经过Bogoliubov变换，哈密顿量变为完全对角的形式：</p> <div class="formula-container">$$H = \sum_k E_k \eta_k^\dagger \eta_k + E_{\text{ground}}$$</div>
        
        <div class="energy-components"> <div class="component-card"><h4>准粒子能谱</h4> <div class="formula-container">$$E_k = \sqrt{4J^2\sin^4(k/2) + \frac{h^2}{4}}$$</div>
            <p>这是系统的单粒子激发能量</p>
          </div> <div class="component-card"><h4>基态能量</h4> <div class="formula-container">$$E_{\text{ground}} = -\frac{1}{2}\sum_k E_k$$</div>
            <p>所有负能量本征态的贡献</p>
          </div>
        </div>
        
        <div class="ground-state-description">
          <h4>基态的描述</h4>
          <p> 系统的基态是所有准粒子都处于真空态：</p> <div class="formula-container">$$|0\rangle: \quad \eta_k |0\rangle = 0 \quad \forall k$$</div><p>这个基态是所有$c_k$和$c_k^\dagger$的复杂线性组合，
            反映了量子涨落的重要作用。
          </p>
        </div>
      </div>
    </div>

    <div class="energy-spectrum-analysis">
      <h2>能谱分析</h2>
      
      <div class="spectrum-properties">
        <h3>能谱的基本性质</h3><p>准粒子能谱$E_k = \sqrt{4J^2\sin^4(k/2) + h^2/4}$具有以下重要性质：
        </p>
        
        <div class="property-list">
          <div class="property-card">
            <h4>🔄 周期性</h4><p>能谱具有$2\pi$周期性：$E_{k+2\pi} = E_k$</p>
          </div>
          
          <div class="property-card">
            <h4>🪞 对称性</h4><p>能谱关于$k=\pi$对称：$E_k = E_{2\pi-k}$</p>
          </div>
          
          <div class="property-card">
            <h4>➕ 正定性</h4><p>所有能量都是正的：$E_k \geq \min(h/2, J)$</p>
          </div>
          
          <div class="property-card">
            <h4>🎯 能隙</h4><p>系统总是有能隙的：$\Delta = \min_k E_k > 0$</p>
          </div>
        </div>
      </div>

      <div class="critical-analysis">
        <h3>临界行为分析</h3>
        <p>
          能谱在不同参数区域表现出不同的行为：
        </p>
        
        <div class="parameter-regions"><div class="region-card weak-field"><h4>弱横场区域 ($h \ll J$)</h4><div class="formula-container">$$E_k \approx 2J|\sin(k/2)| + \frac{h^2}{16J\sin^2(k/2)}$$</div><ul><li>最小值在$k = 0, 2\pi$附近</li><li>能隙：$\Delta \approx h^2/(8J)$</li>
              <li>低能激发主要在长波长</li>
            </ul>
          </div><div class="region-card strong-field"><h4>强横场区域 ($h \gg J$)</h4><div class="formula-container">$$E_k \approx \frac{h}{2} + \frac{4J^2\sin^4(k/2)}{h}$$</div>
            <ul><li>能谱几乎平坦</li><li>能隙：$\Delta \approx h/2$</li>
              <li>激发能量主要由横场决定</li>
            </ul>
          </div><div class="region-card critical"><h4>临界区域 ($h \sim J$)</h4><div class="formula-container">$$E_k = \sqrt{4J^2\sin^4(k/2) + \frac{h^2}{4}}$$</div>
            <ul><li>两种贡献相当</li><li>能隙最小值在$h = J$</li>
              <li>最丰富的物理现象</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="gap-analysis">
        <h3>能隙分析</h3>
        <p>
          系统的能隙定义为最小激发能量：
        </p><div class="formula-container">$$\Delta = \min_k E_k$$</div>
        
        <div class="gap-calculation">
          <h4>能隙的计算</h4><p>为了找到最小值，我们对$E_k$关于$k$求导：
          </p><div class="formula-container">$$\frac{dE_k}{dk} = \frac{4J^2\sin^3(k/2)\cos(k/2)}{E_k} = 0$$</div><p>这给出临界点：$k = 0, \pi, 2\pi$</p>
          
          <div class="critical-points"><div class="point-analysis"><h5>$k = 0, 2\pi$点</h5><div class="formula-container">$$E_0 = \frac{h}{2}$$</div>
            </div><div class="point-analysis"><h5>$k = \pi$点</h5><div class="formula-container">$$E_\pi = \sqrt{J^2 + \frac{h^2}{4}}$$</div>
            </div>
          </div>
          
          <p> 因此，能隙为：</p> <div class="formula-container">$$\Delta = \min\left(\frac{h}{2}, \sqrt{J^2 + \frac{h^2}{4}}\right) = \frac{h}{2}$$</div>
        </div>
      </div>

      <div class="density-of-states">
        <h3>态密度</h3>
        <p> 准粒子的态密度定义为：</p> <div class="formula-container">$$\rho(E) = \sum_k \delta(E - E_k) = \frac{1}{2\pi} \int_0^{2\pi} dk \, \delta(E - E_k)$$</div>
        
        <div class="dos-calculation">
          <h4>态密度的计算</h4><p>利用$\delta$函数的性质：
          </p><div class="formula-container">$$\rho(E) = \frac{1}{2\pi} \sum_{k: E_k = E} \frac{1}{|dE_k/dk|}$$</div>
          
          <p>
            在能隙边缘附近，态密度表现出特殊的行为，
            反映了系统的临界性质。
          </p>
        </div>
      </div>
    </div>

    <div class="physical-quantities">
      <h2>物理量的计算</h2>
      
      <div class="ground-state-properties">
        <h3>基态性质</h3>
        <p>
          利用对角化的结果，我们可以计算各种基态性质：
        </p>
        
        <div class="property-calculations"> <div class="calculation-card"><h4>基态能量密度</h4> <div class="formula-container">$$e_0 = \frac{E_{\text{ground}}}{N} = -\frac{1}{2N}\sum_k E_k$$</div>
            <p> 在热力学极限下：</p> <div class="formula-container">$$e_0 = -\frac{1}{4\pi} \int_0^{2\pi} dk \sqrt{4J^2\sin^4(k/2) + \frac{h^2}{4}}$$</div>
          </div>
          
          <div class="calculation-card">
            <h4>磁化强度</h4>
            <p> 纵向磁化强度：</p> <div class="formula-container">$$m_z = \langle \sigma^z \rangle = \frac{1}{N}\sum_i \langle \sigma_i^z \rangle$$</div>
            <p> 需要通过Jordan-Wigner反变换计算：</p> <div class="formula-container">$$\langle \sigma_i^z \rangle = \langle 2c_i^\dagger c_i - 1 \rangle = 2\langle c_i^\dagger c_i \rangle - 1$$</div>
          </div>
          
          <div class="calculation-card">
            <h4>关联函数</h4>
            <p> 纵向自旋关联函数：</p> <div class="formula-container">$$G^{zz}(r) = \langle \sigma_0^z \sigma_r^z \rangle - \langle \sigma_0^z \rangle \langle \sigma_r^z \rangle$$</div>
            <p> 在大距离下表现出指数衰减：</p> <div class="formula-container">$$G^{zz}(r) \sim e^{-r/\xi}$$</div><p>其中$\xi = 1/\Delta$是关联长度
            </p>
          </div>
        </div>
      </div>

      <div class="excited-states">
        <h3>激发态</h3>
        <p>
          系统的激发态可以通过在基态上作用准粒子产生算符得到：
        </p>
        
        <div class="excitation-types">
          <div class="excitation-card">
            <h4>单粒子激发</h4><div class="formula-container">$$|k\rangle = \eta_k^\dagger |0\rangle$$</div><p>能量：$E = E_k$</p>
            <p>
              这些是系统的基本激发
            </p>
          </div>
          
          <div class="excitation-card">
            <h4>多粒子激发</h4><div class="formula-container">$$|k_1, k_2, \ldots\rangle = \eta_{k_1}^\dagger \eta_{k_2}^\dagger \cdots |0\rangle$$</div><p>能量：$E = E_{k_1} + E_{k_2} + \cdots$</p>
            <p>
              由于准粒子是费米子，每个动量态最多占据一个粒子
            </p>
          </div>
        </div>
      </div>

      <div class="thermodynamic-properties">
        <h3>热力学性质</h3>
        <p>
          在有限温度下，系统的热力学性质由准粒子统计决定：
        </p>
        
        <div class="thermodynamic-quantities">
          <div class="quantity-card">
            <h4>配分函数</h4><div class="formula-container">$$Z = \prod_k (1 + e^{-\beta E_k})$$</div>
            <p>
              每个动量模式贡献一个费米子因子
            </p>
          </div> <div class="quantity-card"><h4>自由能</h4> <div class="formula-container">$$F = -k_B T \ln Z = E_{\text{ground}} - k_B T \sum_k \ln(1 + e^{-\beta E_k})$$</div>
          </div> <div class="quantity-card"><h4>比热</h4> <div class="formula-container">$$C = -\beta^2 \frac{\partial^2 F}{\partial \beta^2} = k_B \beta^2 \sum_k E_k^2 \frac{e^{-\beta E_k}}{(1 + e^{-\beta E_k})^2}$$</div><p>在低温下表现出指数激活行为：$C \sim e^{-\Delta/k_B T}$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="numerical-methods">
      <h2>数值方法</h2>
      
      <div class="computational-aspects">
        <h3>计算方面的考虑</h3>
        <p>
          虽然我们得到了解析解，但在实际计算中仍需要注意一些数值方面的问题：
        </p>
        
        <div class="numerical-considerations">
          <div class="consideration-card">
            <h4>🔢 积分计算</h4>
            <p>
              基态能量等物理量涉及对第一布里渊区的积分：
            </p><div class="formula-container">$$\int_0^{2\pi} dk \, f(k) \approx \frac{2\pi}{N} \sum_{n=0}^{N-1} f\left(\frac{2\pi n}{N}\right)$$</div><p>需要足够大的$N$以确保收敛
            </p>
          </div>
          
          <div class="consideration-card">
            <h4>📊 能谱绘制</h4><p>绘制能谱$E_k$时需要注意：
            </p><ul><li>选择合适的$k$点密度</li>
              <li>正确处理布里渊区边界</li>
              <li>标识特殊的高对称点</li>
            </ul>
          </div>
          
          <div class="consideration-card">
            <h4>🎯 临界点附近</h4><p>在$h \approx J$的临界区域：
            </p>
            <ul>
              <li>能隙很小，需要高精度计算</li>
              <li>关联长度发散，需要大系统</li>
              <li>有限尺寸效应显著</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="verification-methods">
        <h3>结果验证</h3>
        <p>
          可以通过以下方法验证对角化结果的正确性：
        </p>
        
        <div class="verification-list">
          <div class="verification-item">
            <h4>✅ 能量守恒</h4>
            <p>
              验证变换前后哈密顿量的本征值相同
            </p>
          </div>
          
          <div class="verification-item">
            <h4>✅ 反对易关系</h4>
            <p>
              检查准粒子算符满足正确的反对易关系
            </p>
          </div>
          
          <div class="verification-item">
            <h4>✅ 极限情况</h4><p>在$h \to 0$或$J \to 0$极限下与已知结果比较
            </p>
          </div>
          
          <div class="verification-item">
            <h4>✅ 对称性</h4>
            <p>
              验证能谱具有预期的对称性
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          本节详细介绍了量子横场Ising模型的完整对角化过程：
        </p>
        <ul>
          <li><strong>Fourier变换</strong>：将实空间问题转化为动量空间</li>
          <li><strong>Bogoliubov变换</strong>：消除非对角项，得到准粒子表示</li>
          <li><strong>能谱分析</strong>：理解系统的激发谱和能隙结构</li>
          <li><strong>物理量计算</strong>：利用对角化结果计算各种物理性质</li>
        </ul>
        <p>
          这一完整的对角化过程展示了现代理论物理中
          处理复杂量子多体问题的标准方法。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. Fourier变换验证</h4>
          <p>验证Jordan-Wigner变换后哈密顿量的Fourier变换结果。</p>
        </div>
        <div class="exercise-item"><h4>2. Bogoliubov系数推导</h4><p>详细推导Bogoliubov变换系数$u_k$和$v_k$的表达式。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 能谱分析</h4>
          <p>分析准粒子能谱在不同参数区域的行为，绘制能谱图。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 基态性质计算</h4>
          <p>计算基态能量密度和磁化强度，分析其参数依赖性。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 渲染数学公式
  if (window.MathJax) {
    window.MathJax.typesetPromise()
  }
})
</script>

<style scoped>
.chapter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.learning-objectives {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.learning-objectives h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.learning-objectives ul {
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.learning-objectives li::before {
  content: "🎯";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.diagonalization-overview, .fourier-transformation, .bogoliubov-transformation,
.energy-spectrum-analysis, .physical-quantities, .numerical-methods,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.diagonalization-overview h2, .fourier-transformation h2, .bogoliubov-transformation h2,
.energy-spectrum-analysis h2, .physical-quantities h2, .numerical-methods h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.overview-content, .diagonalization-strategy, .fourier-basics, .hamiltonian-transformation,
.momentum-space-hamiltonian, .transformation-motivation, .transformation-definition,
.coefficient-determination, .diagonalized-hamiltonian, .spectrum-properties,
.critical-analysis, .gap-analysis, .density-of-states, .ground-state-properties,
.excited-states, .thermodynamic-properties, .computational-aspects,
.verification-methods, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.transformation-chain {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.transform-step {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
  text-align: center;
  width: 100%;
  max-width: 600px;
}

.transform-step h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.arrow {
  font-size: 2em;
  color: #667eea;
  font-weight: bold;
}

.strategy-steps, .transform-definitions, .term-by-term, .equation-group,
.energy-components, .property-list, .parameter-regions, .property-calculations,
.excitation-types, .thermodynamic-quantities, .numerical-considerations,
.verification-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.strategy-card, .definition-card, .term-card, .component-card, .property-card,
.region-card, .calculation-card, .excitation-card, .quantity-card,
.consideration-card, .verification-item {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.strategy-card h4, .definition-card h4, .term-card h4, .component-card h4,
.property-card h4, .region-card h4, .calculation-card h4, .excitation-card h4,
.quantity-card h4, .consideration-card h4, .verification-item h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.region-card.weak-field {
  border-left: 4px solid #3498db;
}

.region-card.strong-field {
  border-left: 4px solid #e74c3c;
}

.region-card.critical {
  border-left: 4px solid #f39c12;
}

.problem-analysis {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.problem-card, .solution-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.problem-card {
  border-left: 4px solid #e74c3c;
}

.solution-card {
  border-left: 4px solid #27ae60;
}

.problem-card h4, .solution-card h4 {
  margin-bottom: 1rem;
}

.calculation-steps {
  margin: 1rem 0;
}

.step {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  border: 1px solid #e1e8ff;
}

.momentum-values, .simplification, .normalization-condition, .diagonalization-condition,
.coefficient-solution, .explicit-form, .ground-state-description, .gap-calculation,
.dos-calculation {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.momentum-values h4, .simplification h4, .normalization-condition h4,
.diagonalization-condition h4, .coefficient-solution h4, .explicit-form h4,
.ground-state-description h4, .gap-calculation h4, .dos-calculation h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.critical-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.point-analysis {
  background: #f8faff;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #e1e8ff;
  text-align: center;
}

.point-analysis h5 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.formula-container {
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e1e8ff;
}

.exercise-list {
  display: grid;
  gap: 1rem;
}

.exercise-item {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.exercise-item h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-container {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .transformation-chain {
    gap: 0.5rem;
  }
  
  .arrow {
    transform: rotate(90deg);
    font-size: 1.5em;
  }
  
  .problem-analysis {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .strategy-steps, .transform-definitions, .term-by-term, .equation-group,
  .energy-components, .property-list, .parameter-regions, .property-calculations,
  .excitation-types, .thermodynamic-quantities, .numerical-considerations,
  .verification-list {
    grid-template-columns: 1fr;
  }
  
  .critical-points {
    grid-template-columns: 1fr;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .formula-container {
    font-size: 0.8em;
    padding: 0.6rem;
  }
}
</style>