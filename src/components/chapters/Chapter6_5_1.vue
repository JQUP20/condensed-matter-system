<template>
  <div class="chapter-content">
    <h1 class="chapter-title">6.5.1 量子相变中的重整化群</h1>
    
    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3>学习目标</h3>
      <ul>
        <li>理解量子相变的基本概念和特征</li>
        <li>掌握量子临界点的重整化群分析</li>
        <li>学习动力学临界指数和时空各向异性</li>
        <li>理解有限温度下的量子临界行为</li>
        <li>掌握具体量子相变模型的重整化群处理</li>
      </ul>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <h3>量子相变的重要性</h3>
      <p>
        量子相变是由量子涨落而非热涨落驱动的相变，发生在绝对零度。与经典相变不同，
        量子相变涉及时间和空间的不同标度行为，需要扩展的重整化群理论来处理。
        量子相变在高温超导、重费米子系统、量子磁体等强关联电子系统中起着核心作用。
      </p>
    </div>

    <!-- 量子相变基础 -->
    <div class="quantum-phase-transition-section">
      <h3>量子相变基础</h3>
      
      <div class="qpt-definition">
        <h4>量子相变的定义</h4>
        <p>
          量子相变是在$T=0$时，通过调节非热参数（如压强、磁场、掺杂浓度等）
          而发生的相变。驱动力是量子涨落而非热涨落。
        </p>
        
        <div class="qpt-characteristics">
          <h5>量子相变的特征</h5>
          <div class="characteristics-grid">
            <div class="characteristic-item"><h6>零温相变</h6><p>相变发生在$T=0$，由量子涨落驱动</p>
            </div>
            
            <div class="characteristic-item">
              <h6>时空各向异性</h6>
              <p>时间和空间具有不同的标度维度</p>
            </div>
            
            <div class="characteristic-item"><h6>动力学临界指数</h6><p>引入新的临界指数$z$描述时空关系</p>
            </div>
            
            <div class="characteristic-item">
              <h6>有限温度效应</h6>
              <p>量子临界点影响有限温度的物理性质</p>
            </div>
          </div>
        </div>
      </div>

      <div class="qcp-phase-diagram">
        <h4>量子临界点相图</h4>
        <p>典型的量子相变相图包含量子临界点和有限温度的临界区域：</p>
        
        <div class="phase-diagram">
          <svg width="500" height="400" viewBox="0 0 500 400">
            <!-- 坐标轴 -->
            <line x1="50" y1="350" x2="450" y2="350" stroke="#2d3436" stroke-width="2"/>
            <line x1="50" y1="350" x2="50" y2="50" stroke="#2d3436" stroke-width="2"/>
            
            <!-- 轴标签 -->
            <text x="250" y="380" text-anchor="middle" font-size="14">调节参数 δ</text>
            <text x="25" y="200" text-anchor="middle" font-size="14" transform="rotate(-90 25 200)">温度 T</text>
            
            <!-- 量子临界点 -->
            <circle cx="250" cy="350" r="6" fill="#e17055"/>
            <text x="250" y="340" text-anchor="middle" font-size="12" fill="#d63031">QCP</text>
            
            <!-- 相边界 -->
            <path d="M 150 350 Q 200 300 250 250 Q 300 300 350 350" 
                  fill="none" stroke="#74b9ff" stroke-width="3"/>
            
            <!-- 相区域标记 -->
            <text x="150" y="300" text-anchor="middle" font-size="14" fill="#0984e3">有序相</text>
            <text x="350" y="300" text-anchor="middle" font-size="14" fill="#0984e3">无序相</text>
            <text x="250" y="200" text-anchor="middle" font-size="14" fill="#e84393">量子临界区</text>
            
            <!-- 经典临界区域 -->
            <ellipse cx="200" cy="280" rx="30" ry="20" fill="#fd79a8" opacity="0.3"/>
            <ellipse cx="300" cy="280" rx="30" ry="20" fill="#fd79a8" opacity="0.3"/>
            <text x="200" y="285" text-anchor="middle" font-size="10">经典</text>
            <text x="300" y="285" text-anchor="middle" font-size="10">经典</text>
            
            <!-- 量子临界扇形区域 -->
            <path d="M 250 350 L 200 250 Q 250 200 300 250 Z" 
                  fill="#a29bfe" opacity="0.3"/>
          </svg>
        </div>
        
        <div class="phase-diagram-explanation">
          <h5>相图说明</h5><ul><li><strong>QCP</strong>：量子临界点，$T=0$时的相变点</li>
            <li><strong>量子临界区</strong>：受量子临界点影响的有限温度区域</li>
            <li><strong>经典区域</strong>：热涨落主导的经典临界行为区域</li>
            <li><strong>有序/无序相</strong>：低温时的不同量子相</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 时空标度和动力学临界指数 -->
    <div class="spacetime-scaling-section">
      <h3>时空标度和动力学临界指数</h3>
      
      <div class="anisotropic-scaling">
        <h4>各向异性标度</h4><p>在量子相变中，时间和空间具有不同的标度行为。这通过动力学临界指数$z$来描述：
        </p>
        
        <div class="scaling-relations">
          <h5>标度关系</h5>
          <div class="scaling-box">
            <div class="scaling-item">
              <h6>空间标度</h6><div class="formula-box">$$\mathbf{r} \to b\mathbf{r}$$</div>
            </div> <div class="scaling-item"><h6>时间标度</h6> <div class="formula-box">$$t \to b^z t$$</div>
            </div> <div class="scaling-item"><h6>频率标度</h6> <div class="formula-box">$$\omega \to b^{-z} \omega$$</div>
            </div></div><p>其中$z$是动力学临界指数，描述时间和空间的相对标度。</p>
        </div>
        
        <div class="dynamic-exponent">
          <h5>动力学临界指数的物理意义</h5>
          <div class="exponent-meaning"><div class="meaning-item"><h6>$z = 1$：相对论性</h6>
              <p>时间和空间等权重，如相对论性场论</p>
            </div><div class="meaning-item"><h6>$z = 2$：扩散性</h6>
              <p>类似扩散过程，常见于保守动力学</p>
            </div><div class="meaning-item"><h6>$z > 2$：强各向异性</h6>
              <p>时间涨落比空间涨落慢得多</p>
            </div>
          </div>
        </div>
      </div>

      <div class="correlation-functions">
        <h4>关联函数的标度形式</h4>
        <p>
          在量子临界点附近，时空关联函数具有标度形式：
        </p>
        
        <div class="correlation-scaling">
          <h5>等时关联函数</h5><div class="formula-box">$$G(\mathbf{r}, t=0) \sim |\mathbf{r}|^{-(d-2+\eta)}$$</div><h5>等空间关联函数</h5> <div class="formula-box">$$G(\mathbf{r}=0, t) \sim |t|^{-(2-\eta)/z}$$</div><h5>一般时空关联函数</h5> <div class="formula-box">$$G(\mathbf{r}, t) = |\mathbf{r}|^{-(d-2+\eta)} f\left(\frac{|t|}{|\mathbf{r}|^z}\right)$$</div>
        </div>
        
        <div class="scaling-function"><h5>标度函数的性质</h5><p>标度函数$f(x)$在不同极限下的行为：</p><ul><li>$x \ll 1$：$f(x) \to \text{常数}$，空间主导</li><li>$x \gg 1$：$f(x) \sim x^{-(2-\eta)/z}$，时间主导</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 量子重整化群方程 -->
    <div class="quantum-rg-section">
      <h3>量子重整化群方程</h3>
      
      <div class="quantum-rg-setup">
        <h4>量子场论的重整化群</h4>
        <p>
          对于量子相变，需要考虑包含时间导数的作用量。以横场Ising模型为例：
        </p>
        
        <div class="action-functional">
          <h5>作用量泛函</h5><div class="formula-box">$$S = \int d^d x \int_0^\beta d\tau \left[ \frac{1}{2}\left(\frac{\partial\phi}{\partial\tau}\right)^2 + \frac{1}{2}r\phi^2 + \frac{1}{2}(\nabla\phi)^2 + \frac{u}{4!}\phi^4 \right]$$</div><p>其中$\tau$是虚时间，$\beta = 1/T$是逆温度。</p>
        </div>
        
        <div class="momentum-space">
          <h5>动量空间表示</h5>
          <p>在动量-频率空间中：</p><div class="formula-box">$$S = \int \frac{d^d k}{(2\pi)^d} \int \frac{d\omega}{2\pi} \phi(-k,-\omega) \left[ \omega^2 + r + k^2 \right] \phi(k,\omega) + \text{相互作用项}$$</div>
        </div>
      </div>

      <div class="rg-flow-equations">
        <h4>重整化群流方程</h4>
        <p>
          量子重整化群流方程包含额外的动力学部分：
        </p>
        
        <div class="flow-equations"> <div class="flow-item"><h5>耦合常数流</h5> <div class="formula-box">$$\frac{du}{dl} = \beta_u(u) = (4-d-z)u + \beta_1 u^2 + O(u^3)$$</div>
          </div> <div class="flow-item"><h5>质量参数流</h5> <div class="formula-box">$$\frac{dr}{dl} = \beta_r(r,u) = 2r + \gamma_r(u) r$$</div>
          </div> <div class="flow-item"><h5>动力学指数</h5> <div class="formula-box">$$z = 2 + \eta_z(u)$$</div>
          </div>
        </div>
        
        <div class="upper-critical-dimension">
          <h5>上临界维度</h5><p>对于量子相变，上临界维度为$d_c = 4-z$。对于$z=2$的情况，$d_c = 2$。
          </p>
        </div>
      </div>
    </div>

    <!-- 具体模型分析 -->
    <div class="specific-models-section">
      <h3>具体模型分析</h3>
      
      <div class="transverse-ising-model">
        <h4>横场Ising模型</h4>
        <p>
          横场Ising模型是研究量子相变的经典模型：
        </p>
        
        <div class="tfim-hamiltonian">
          <h5>哈密顿量</h5><div class="formula-box">$$H = -J\sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x$$</div><p>其中$J$是交换耦合，$h$是横向磁场。</p>
        </div>
        
        <div class="tfim-phase-diagram">
          <h5>相图和临界行为</h5>
          <div class="phase-diagram-tfim">
            <svg width="400" height="300" viewBox="0 0 400 300">
              <!-- 坐标轴 -->
              <line x1="50" y1="250" x2="350" y2="250" stroke="#2d3436" stroke-width="2"/>
              <line x1="50" y1="250" x2="50" y2="50" stroke="#2d3436" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="200" y="280" text-anchor="middle" font-size="14">横场 h/J</text>
              <text x="25" y="150" text-anchor="middle" font-size="14" transform="rotate(-90 25 150)">温度 T</text>
              
              <!-- 量子临界点 -->
              <circle cx="200" cy="250" r="5" fill="#e17055"/>
              <text x="200" y="240" text-anchor="middle" font-size="12" fill="#d63031">h_c</text>
              
              <!-- 相边界 -->
              <path d="M 120 250 Q 160 200 200 150 Q 240 200 280 250" 
                    fill="none" stroke="#74b9ff" stroke-width="3"/>
              
              <!-- 相区域 -->
              <text x="120" y="200" text-anchor="middle" font-size="12" fill="#0984e3">铁磁相</text>
              <text x="280" y="200" text-anchor="middle" font-size="12" fill="#0984e3">顺磁相</text>
              <text x="200" y="120" text-anchor="middle" font-size="12" fill="#e84393">量子临界</text>
            </svg>
          </div>
          
          <div class="tfim-critical-exponents">
            <h6>临界指数</h6>
            <p>对于2D横场Ising模型：</p><ul><li>$z = 1$（相对论性）</li><li>$\nu = 1$（关联长度指数）</li><li>$\eta = 1/4$（异常维度）</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="quantum-rotor-model">
        <h4>量子转子模型</h4>
        <p>
          量子转子模型描述具有连续对称性的量子相变：
        </p>
        
        <div class="qrm-action">
          <h5>作用量</h5><div class="formula-box">$$S = \int d^d x \int_0^\beta d\tau \left[ \frac{1}{2g}\left(\frac{\partial\phi}{\partial\tau}\right)^2 + \frac{\rho_s}{2}(\nabla\phi)^2 \right]$$</div><p>其中$g$是量子涨落强度，$\rho_s$是刚度。</p>
        </div>
        
        <div class="qrm-rg-analysis"><h5>重整化群分析</h5><p>在$d=2+1$维（2D空间+1D时间）：</p>
          
          <div class="rg-equations-qrm">
            <div class="equation-item">
              <h6>刚度流方程</h6><div class="formula-box">$$\frac{d\rho_s}{dl} = (1-\eta)\rho_s$$</div>
            </div> <div class="equation-item"><h6>耦合常数流方程</h6> <div class="formula-box">$$\frac{dg}{dl} = (2-d)g + \beta_g(g)$$</div>
            </div></div><p>在$d=2$时，存在Kosterlitz-Thouless型量子相变。</p>
        </div>
      </div>

      <div class="quantum-antiferromagnet">
        <h4>量子反铁磁体</h4>
        <p>
          二维量子反铁磁Heisenberg模型展现丰富的量子相变行为：
        </p>
        
        <div class="qafm-phases">
          <h5>可能的量子相</h5>
          <div class="phases-grid">
            <div class="phase-item">
              <h6>Néel有序相</h6>
              <p>长程反铁磁序，自旋波激发</p>
            </div>
            
            <div class="phase-item">
              <h6>量子自旋液体</h6>
              <p>无长程序，分数化激发</p>
            </div>
            
            <div class="phase-item">
              <h6>价键固体</h6>
              <p>二聚化，能隙激发</p>
            </div>
          </div>
        </div>
        
        <div class="qafm-rg-treatment">
          <h5>非线性σ模型描述</h5>
          <p>在长波长极限下，可用非线性σ模型描述：</p><div class="formula-box">$$S = \int d^2 x \int_0^\beta d\tau \left[ \frac{1}{2g}(\partial_\tau \mathbf{n})^2 + \frac{\rho_s}{2}(\nabla \mathbf{n})^2 \right]$$</div><p>其中$\mathbf{n}$是单位矢量场，$|\mathbf{n}|=1$。</p>
        </div>
      </div>
    </div>

    <!-- 有限温度的量子临界行为 -->
    <div class="finite-temperature-section">
      <h3>有限温度的量子临界行为</h3>
      
      <div class="quantum-critical-scaling">
        <h4>量子临界标度</h4>
        <p>
          在量子临界点附近的有限温度下，物理量表现出特殊的标度行为：
        </p>
        
        <div class="temperature-scaling">
          <h5>温度标度</h5>
          <p>温度提供了一个相关的能量标度：</p><div class="formula-box">$$\xi_T \sim T^{-1/z}$$</div>
          
          <p>这是热关联长度，与量子关联长度竞争。</p>
        </div>
        
        <div class="crossover-behavior">
          <h5>交叉行为</h5>
          <p>系统在不同能量标度下表现出不同行为：</p>
          
          <div class="crossover-regimes"><div class="regime-item"><h6>量子临界区 ($T \ll \Delta$)</h6><p>量子涨落主导，$z$维时空标度</p><div class="formula-box">$$C \sim T^{d/z}, \quad \chi \sim T^{(d-2+\eta)/z}$$</div>
            </div><div class="regime-item"><h6>经典区 ($T \gg \Delta$)</h6><p>热涨落主导，$d$维空间标度</p><div class="formula-box">$$C \sim T^{d/2}, \quad \chi \sim T^{(d-2+\eta)/2}$$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="experimental-signatures">
        <h4>实验观测特征</h4>
        <p>
          量子临界行为在实验中有特殊的标度律：
        </p>
        
        <div class="scaling-laws"> <div class="law-item"><h5>比热</h5> <div class="formula-box">$$C(T) \sim T^{d/z}$$</div>
            <p>在量子临界点处的温度依赖性</p>
          </div> <div class="law-item"><h5>磁化率</h5> <div class="formula-box">$$\chi(T) \sim T^{(d-2+\eta)/z}$$</div>
            <p>反映量子涨落的温度标度</p>
          </div> <div class="law-item"><h5>电阻率</h5> <div class="formula-box">$$\rho(T) \sim T^{(d-2)/z}$$</div>
            <p>量子临界金属的非费米液体行为</p>
          </div>
        </div>
        
        <div class="experimental-examples">
          <h5>实验实例</h5>
          <ul>
            <li><strong>重费米子系统</strong>：CeCu₆₋ₓAuₓ中的量子临界点</li>
            <li><strong>高温超导体</strong>：欠掺杂区域的量子临界行为</li>
            <li><strong>量子磁体</strong>：TlCuCl₃中的场致量子相变</li>
            <li><strong>冷原子系统</strong>：光晶格中的Mott相变</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 数值方法和现代发展 -->
    <div class="numerical-methods-section">
      <h3>数值方法和现代发展</h3>
      
      <div class="quantum-monte-carlo">
        <h4>量子蒙特卡罗方法</h4>
        <p>
          量子蒙特卡罗是研究量子相变的重要数值工具：
        </p>
        
        <div class="qmc-methods">
          <div class="method-item"> <h5>路径积分蒙特卡罗</h5><p>通过Trotter分解将量子问题映射到经典问题</p> <div class="formula-box">$$Z = \text{Tr}[e^{-\beta H}] = \lim_{M\to\infty} \text{Tr}[(e^{-\Delta\tau H})^M]$$</div>
          </div>
          
          <div class="method-item">
            <h5>随机级数展开</h5>
            <p>直接在连续时间中采样，避免Trotter误差</p>
          </div>
          
          <div class="method-item">
            <h5>量子Wang-Landau算法</h5>
            <p>计算态密度，研究一阶量子相变</p>
          </div>
        </div>
      </div>

      <div class="tensor-networks">
        <h4>张量网络方法</h4>
        <p>
          张量网络为研究量子多体系统提供了新的理论框架：
        </p>
        
        <div class="tensor-methods">
          <div class="tensor-item">
            <h5>矩阵乘积态 (MPS)</h5>
            <p>一维量子系统的高效表示</p>
          </div>
          
          <div class="tensor-item">
            <h5>投影纠缠对态 (PEPS)</h5>
            <p>二维量子系统的张量网络表示</p>
          </div>
          
          <div class="tensor-item">
            <h5>多尺度纠缠重整化 (MERA)</h5>
            <p>处理临界系统的分层张量网络</p>
          </div>
        </div>
      </div>

      <div class="machine-learning">
        <h4>机器学习方法</h4>
        <p>
          机器学习为量子相变研究带来新的视角：
        </p>
        
        <div class="ml-applications">
          <div class="ml-item">
            <h5>相识别</h5>
            <p>使用神经网络自动识别量子相</p>
          </div>
          
          <div class="ml-item">
            <h5>变分量子本征求解器</h5>
            <p>优化量子态的变分表示</p>
          </div>
          
          <div class="ml-item">
            <h5>神经网络量子态</h5>
            <p>用神经网络参数化量子多体波函数</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary-box">
      <h3>本节总结</h3>
      <ul>
        <li><strong>量子相变</strong>：由量子涨落驱动的零温相变，具有时空各向异性</li>
        <li><strong>动力学临界指数</strong>：描述时间和空间的相对标度关系</li>
        <li><strong>量子重整化群</strong>：扩展到包含时间维度的重整化群理论</li>
        <li><strong>具体模型</strong>：横场Ising模型、量子转子模型等的重整化群分析</li>
        <li><strong>有限温度效应</strong>：量子临界点对有限温度物理性质的影响</li>
        <li><strong>现代方法</strong>：数值方法和机器学习在量子相变研究中的应用</li>
      </ul>
    </div>

    <!-- 思考题 -->
    <div class="exercise-box">
      <h3>思考题</h3><ol><li>为什么量子相变需要引入动力学临界指数$z$？它的物理意义是什么？</li>
        <li>解释量子临界点如何影响有限温度下的物理性质。</li>
        <li>比较经典相变和量子相变的重整化群处理有何不同？</li>
        <li>为什么二维量子反铁磁体可能不存在长程Néel序？</li>
        <li>讨论实验中如何识别和研究量子临界行为。</li>
      </ol>
    </div>

    <!-- 延伸阅读 -->
    <div class="reading-list">
      <h3>延伸阅读</h3>
      <ul>
        <li>Sachdev, S. "Quantum Phase Transitions." Cambridge University Press (2011)</li>
        <li>Sondhi, S. L. et al. "Continuous quantum phase transitions." <em>Rev. Mod. Phys.</em> <strong>69</strong>, 315 (1997)</li>
        <li>Vojta, M. "Quantum phase transitions." <em>Rep. Prog. Phys.</em> <strong>66</strong>, 2069 (2003)</li>
        <li>Löhneysen, H. v. et al. "Fermi-liquid instabilities at magnetic quantum phase transitions." <em>Rev. Mod. Phys.</em> <strong>79</strong>, 1015 (2007)</li>
        <li>Gegenwart, P. et al. "Quantum criticality in heavy-fermion metals." <em>Nat. Phys.</em> <strong>4</strong>, 186 (2008)</li>
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

.quantum-phase-transition-section,
.spacetime-scaling-section,
.quantum-rg-section,
.specific-models-section,
.finite-temperature-section,
.numerical-methods-section {
  margin: 30px 0;
}

.quantum-phase-transition-section h3,
.spacetime-scaling-section h3,
.quantum-rg-section h3,
.specific-models-section h3,
.finite-temperature-section h3,
.numerical-methods-section h3 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.qpt-definition,
.qcp-phase-diagram,
.anisotropic-scaling,
.correlation-functions,
.quantum-rg-setup,
.rg-flow-equations,
.transverse-ising-model,
.quantum-rotor-model,
.quantum-antiferromagnet,
.quantum-critical-scaling,
.experimental-signatures,
.quantum-monte-carlo,
.tensor-networks,
.machine-learning {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.qpt-definition h4,
.qcp-phase-diagram h4,
.anisotropic-scaling h4,
.correlation-functions h4,
.quantum-rg-setup h4,
.rg-flow-equations h4,
.transverse-ising-model h4,
.quantum-rotor-model h4,
.quantum-antiferromagnet h4,
.quantum-critical-scaling h4,
.experimental-signatures h4,
.quantum-monte-carlo h4,
.tensor-networks h4,
.machine-learning h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.qpt-characteristics,
.phase-diagram-explanation,
.scaling-relations,
.dynamic-exponent,
.correlation-scaling,
.scaling-function,
.action-functional,
.momentum-space,
.flow-equations,
.upper-critical-dimension,
.tfim-hamiltonian,
.tfim-phase-diagram,
.qrm-action,
.qrm-rg-analysis,
.qafm-phases,
.qafm-rg-treatment,
.temperature-scaling,
.crossover-behavior,
.scaling-laws,
.experimental-examples,
.qmc-methods,
.tensor-methods,
.ml-applications {
  margin: 20px 0;
}

.characteristics-grid,
.phases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.characteristic-item,
.phase-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #74b9ff;
}

.characteristic-item h6,
.phase-item h6 {
  color: #0984e3;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.phase-diagram,
.phase-diagram-tfim {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
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

.scaling-box {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.scaling-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-top: 4px solid #fd79a8;
  text-align: center;
}

.scaling-item h6 {
  color: #e84393;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.exponent-meaning {
  margin: 20px 0;
}

.meaning-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #00b894;
}

.meaning-item h6 {
  color: #00b894;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.flow-item,
.equation-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #e17055;
}

.flow-item h5,
.flow-item h6,
.equation-item h6 {
  color: #d63031;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.tfim-critical-exponents {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin: 15px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.tfim-critical-exponents h6 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.rg-equations-qrm {
  margin: 20px 0;
}

.crossover-regimes {
  margin: 20px 0;
}

.regime-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #a29bfe;
}

.regime-item h6 {
  color: #6c5ce7;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.law-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #fdcb6e;
}

.law-item h5 {
  color: #e17055;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.method-item,
.tensor-item,
.ml-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #55a3ff;
}

.method-item h5,
.tensor-item h5,
.ml-item h5 {
  color: #0984e3;
  margin-bottom: 10px;
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
  
  .characteristics-grid,
  .phases-grid,
  .scaling-box {
    grid-template-columns: 1fr;
  }
}
</style>