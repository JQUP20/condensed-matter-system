<template>
  <div class="chapter-content">
    <h2>1.4.14 量子Ising模型 (Quantum Ising Model)</h2>
    
    <div class="section">
      <h3>模型概述</h3>
      <p>
        量子Ising模型是经典Ising模型的量子力学推广，引入了横向磁场项，使得自旋可以在不同方向上翻转。
        这个模型是研究量子相变和量子临界现象的重要理论工具，也是量子退火和绝热量子计算的核心模型。
      </p>
      <p>
        该模型最初由de Gennes在1963年提出，用于描述铁电材料中的氢键系统。后来发现它在描述各种量子多体系统中都有重要应用，
        从磁性材料到量子计算，从统计力学到量子信息理论。
      </p>
    </div>

    <div class="section">
      <h3>哈密顿量与变体</h3>
      <p>横向场量子Ising模型(TFIM)的标准哈密顿量为：</p>
      <KatexElement 
        formula="H = -J\sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x - \Gamma\sum_i \sigma_i^z"
        display-mode
      />
      <p>其中：</p>
      <ul>
        <li><strong>J：</strong>自旋间相互作用强度（J > 0为铁磁，J < 0为反铁磁）</li>
        <li><strong>h：</strong>横向磁场强度，驱动量子涨落</li>
        <li><strong>Γ：</strong>纵向磁场强度，破坏Z₂对称性</li>
        <li><strong>σ^x, σ^z：</strong>Pauli矩阵</li>
      </ul>

      <h4>重要变体</h4>
      <div class="model-variants">
        <div class="variant-item">
          <h5>纯横向场Ising模型</h5>
          <KatexElement formula="H = -J\sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x" />
          <p>最常研究的情况，具有Z₂对称性</p>
        </div>
        
        <div class="variant-item">
          <h5>长程相互作用模型</h5>
          <KatexElement formula="H = -\sum_{i<j} \frac{J_{ij}}{|i-j|^\alpha} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x" />
          <p>其中α控制相互作用的衰减，α ≤ d时为长程相互作用</p>
        </div>

        <div class="variant-item">
          <h5>无序Ising模型</h5>
          <KatexElement formula="H = -\sum_{\langle i,j \rangle} J_{ij} \sigma_i^z \sigma_j^z - \sum_i h_i \sigma_i^x" />
          <p>J_{ij}和h_i为随机变量，研究无序效应</p>
        </div>

        <div class="variant-item">
          <h5>多体相互作用模型</h5>
          <KatexElement formula="H = -\sum_{i<j<k} J_{ijk} \sigma_i^z \sigma_j^z \sigma_k^z - h\sum_i \sigma_i^x" />
          <p>包含三体或更高阶相互作用</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>相图与量子相变理论</h3>
      <div class="phase-theory">
        <h4>基本相图结构</h4>
        <div class="phase-diagram">
          <div class="phase-info">
            <h5>铁磁有序相 (h < h_c)</h5>
            <p>自旋沿z方向有序排列，存在自发磁化</p>
            <KatexElement formula="\langle \sigma^z \rangle \neq 0, \quad \langle \sigma^x \rangle = 0" />
            <p>基态为两个简并的铁磁态：|↑↑...↑⟩ 和 |↓↓...↓⟩</p>
          </div>
          
          <div class="phase-info">
            <h5>顺磁无序相 (h > h_c)</h5>
            <p>横向磁场占主导，自旋在xy平面内取向</p>
            <KatexElement formula="\langle \sigma^z \rangle = 0, \quad \langle \sigma^x \rangle \neq 0" />
            <p>基态为所有自旋沿x方向排列：|→→...→⟩</p>
          </div>
          
          <div class="phase-info">
            <h5>量子临界点</h5>
            <p>一维情况下的精确结果：</p>
            <KatexElement formula="h_c = J" />
            <p>高维情况需要数值计算或近似方法</p>
          </div>
        </div>

        <h4>临界指数与普适性</h4>
        <div class="critical-exponents">
          <p>在量子临界点附近，物理量表现出幂律行为：</p>
          <ul>
            <li><strong>磁化率：</strong> <KatexElement formula="\chi \sim |h-h_c|^{-\gamma}" /></li>
            <li><strong>关联长度：</strong> <KatexElement formula="\xi \sim |h-h_c|^{-\nu}" /></li>
            <li><strong>能隙：</strong> <KatexElement formula="\Delta \sim |h-h_c|^{z\nu}" /></li>
            <li><strong>比热：</strong> <KatexElement formula="C \sim |h-h_c|^{-\alpha}" /></li>
          </ul>
          <p>一维横向场Ising模型属于Ising普适类，临界指数为：</p>
          <KatexElement formula="\gamma = 7/4, \quad \nu = 1, \quad z = 1, \quad \alpha = 0" />
        </div>

        <h4>有限温度相图</h4>
        <p>在有限温度下，相图变得更加复杂：</p>
        <ul>
          <li><strong>经典临界线：</strong>高温下的热相变</li>
          <li><strong>量子临界线：</strong>零温下的量子相变</li>
          <li><strong>量子临界区域：</strong>量子涨落主导的区域</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h3>精确求解方法</h3>
      <div class="exact-methods">
        <h4>Jordan-Wigner变换</h4>
        <div class="jw-transform">
          <p>将一维自旋系统映射为无相互作用的费米子系统：</p>
          <KatexElement formula="c_j = \left(\prod_{k<j} \sigma_k^z\right) \sigma_j^-, \quad c_j^\dagger = \left(\prod_{k<j} \sigma_k^z\right) \sigma_j^+" />
          <p>变换后的哈密顿量变为：</p>
          <KatexElement formula="H = -J\sum_j (c_j^\dagger c_{j+1} + c_{j+1}^\dagger c_j - 2c_j^\dagger c_j + 1) - h\sum_j (c_j^\dagger + c_j)" />
          <p>通过Fourier变换对角化：</p>
          <KatexElement formula="H = \sum_k \epsilon_k \eta_k^\dagger \eta_k" />
          <p>其中色散关系为：</p>
          <KatexElement formula="\epsilon_k = 2\sqrt{(J\cos k - \mu)^2 + h^2}" />
        </div>

        <h4>Pfaffian方法</h4>
        <p>利用反对称矩阵的Pfaffian计算配分函数和关联函数，特别适用于二维Ising模型。</p>

        <h4>Bethe ansatz</h4>
        <p>对于某些特殊情况，可以使用Bethe ansatz方法精确求解。</p>
      </div>
    </div>

    <div class="section">
      <h3>数值计算方法</h3>
      <div class="numerical-methods">
        <div class="method-card">
          <h4>精确对角化 (ED)</h4>
          <p>直接对角化哈密顿量矩阵：</p>
          <ul>
            <li><strong>优点：</strong>精确结果，可计算所有本征态</li>
            <li><strong>缺点：</strong>系统尺寸限制（N ≤ 20-25）</li>
            <li><strong>应用：</strong>小系统基准计算，有限尺寸标度分析</li>
          </ul>
        </div>
        
        <div class="method-card">
          <h4>量子蒙特卡罗 (QMC)</h4>
          <p>基于路径积分的随机采样方法：</p>
          <ul>
            <li><strong>世界线算法：</strong>连续时间量子蒙特卡罗</li>
            <li><strong>随机级数展开：</strong>高温展开的随机采样</li>
            <li><strong>符号问题：</strong>受阻挫和费米子统计影响</li>
          </ul>
          <p>可以处理较大系统（N ~ 10³-10⁴），计算热力学量和动力学性质。</p>
        </div>
        
        <div class="method-card">
          <h4>张量网络方法</h4>
          <div class="tensor-methods">
            <h5>矩阵乘积态 (MPS/DMRG)</h5>
            <p>一维系统的高效表示：</p>
            <KatexElement formula="|\psi\rangle = \sum_{\{s_i\}} A^{s_1} A^{s_2} \cdots A^{s_N} |s_1 s_2 \cdots s_N\rangle" />
            <p>可以处理N ~ 10²-10³的一维系统</p>

            <h5>投影纠缠对态 (PEPS)</h5>
            <p>二维系统的张量网络表示，计算复杂度高但可以处理强关联系统。</p>

            <h5>多尺度纠缠重整化 (MERA)</h5>
            <p>适用于临界系统，能够有效描述长程纠缠。</p>
          </div>
        </div>

        <div class="method-card">
          <h4>变分方法</h4>
          <ul>
            <li><strong>变分蒙特卡罗：</strong>使用神经网络等变分波函数</li>
            <li><strong>集群平均场：</strong>考虑局域关联的改进平均场</li>
            <li><strong>耦合集群方法：</strong>系统性包含关联效应</li>
          </ul>
        </div>

        <div class="method-card">
          <h4>机器学习方法</h4>
          <ul>
            <li><strong>神经网络量子态：</strong>用神经网络表示量子多体波函数</li>
            <li><strong>强化学习：</strong>优化量子态制备和控制</li>
            <li><strong>无监督学习：</strong>相变识别和相图绘制</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>重要物理现象</h3>
      <div class="phenomena-section">
        <h4>量子相变与临界现象</h4>
        <div class="phenomena-grid">
          <div class="phenomenon-card">
            <h5>量子相变</h5>
            <p>零温下由量子涨落驱动的相变：</p>
            <ul>
              <li>连续相变：二阶相变，序参量连续变化</li>
              <li>不连续相变：一阶相变，序参量跳跃</li>
              <li>拓扑相变：拓扑不变量的改变</li>
            </ul>
          </div>
          
          <div class="phenomenon-card">
            <h5>量子纠缠</h5>
            <p>基态纠缠熵的行为：</p>
            <KatexElement formula="S = -\text{Tr}(\rho_A \log \rho_A)" />
            <ul>
              <li><strong>面积定律：</strong>有序相中 S ∝ L^(d-1)</li>
              <li><strong>对数修正：</strong>临界点 S ∝ log L</li>
              <li><strong>体积定律：</strong>高度纠缠态 S ∝ L^d</li>
            </ul>
          </div>
          
          <div class="phenomenon-card">
            <h5>动力学相变</h5>
            <p>非平衡过程中的相变现象：</p>
            <ul>
              <li>绝热演化中的Landau-Zener跃迁</li>
              <li>周期驱动系统的Floquet相变</li>
              <li>测量诱导的相变</li>
            </ul>
          </div>

          <div class="phenomenon-card">
            <h5>量子退火</h5>
            <p>利用横向场的绝热演化求解优化问题：</p>
            <KatexElement formula="H(t) = (1-t/T)H_0 + (t/T)H_f" />
            <p>其中H₀是简单的初始哈密顿量，Hf是目标问题哈密顿量。</p>
          </div>
        </div>

        <h4>输运与响应性质</h4>
        <ul>
          <li><strong>磁化率：</strong> <KatexElement formula="\chi = \frac{\partial \langle M \rangle}{\partial h}" /></li>
          <li><strong>比热：</strong> <KatexElement formula="C = \frac{\partial \langle E \rangle}{\partial T}" /></li>
          <li><strong>动力学结构因子：</strong> <KatexElement formula="S(q,\omega) = \sum_n |\langle n|\sigma^z_q|0\rangle|^2 \delta(\omega - E_n)" /></li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h3>实验实现与材料系统</h3>
      <div class="experimental-section">
        <h4>磁性材料</h4>
        <div class="material-list">
          <div class="material-item">
            <h5>LiHoF₄</h5>
            <p>稀土磁性材料，具有强的单轴各向异性，是研究横向场Ising模型的理想系统。</p>
            <ul>
              <li>有效自旋-1/2系统</li>
              <li>可调的横向磁场</li>
              <li>观测到量子相变</li>
            </ul>
          </div>

          <div class="material-item">
            <h5>CoNb₂O₆</h5>
            <p>准一维Ising磁体，在横向磁场下表现出丰富的相图。</p>
          </div>

          <div class="material-item">
            <h5>BaCo₂V₂O₈</h5>
            <p>一维反铁磁链，可以通过磁场调控实现横向场Ising行为。</p>
          </div>
        </div>

        <h4>人工量子系统</h4>
        <div class="artificial-systems">
          <div class="system-item">
            <h5>超导量子比特</h5>
            <p>基于Josephson结的人工原子：</p>
            <ul>
              <li>可编程的哈密顿量</li>
              <li>精确的量子态控制</li>
              <li>实时动力学测量</li>
            </ul>
          </div>

          <div class="system-item">
            <h5>冷原子系统</h5>
            <p>光晶格中的超冷原子：</p>
            <ul>
              <li>高度可调的参数</li>
              <li>大系统尺寸</li>
              <li>单原子分辨率成像</li>
            </ul>
          </div>

          <div class="system-item">
            <h5>离子阱</h5>
            <p>囚禁离子的量子模拟器：</p>
            <ul>
              <li>长程相互作用</li>
              <li>高保真度量子门</li>
              <li>任意连接拓扑</li>
            </ul>
          </div>

          <div class="system-item">
            <h5>光子系统</h5>
            <p>基于光子的量子模拟：</p>
            <ul>
              <li>室温操作</li>
              <li>快速动力学</li>
              <li>集成光子学平台</li>
            </ul>
          </div>
        </div>

        <h4>量子计算平台</h4>
        <ul>
          <li><strong>D-Wave量子退火机：</strong>专门设计用于求解Ising问题</li>
          <li><strong>IBM量子计算机：</strong>通用量子计算平台</li>
          <li><strong>Google量子处理器：</strong>超导量子比特阵列</li>
          <li><strong>IonQ离子阱系统：</strong>高保真度量子计算</li>
        </ul>
      </div>
    </div>

    <div class="section">
      <h3>应用领域与前沿发展</h3>
      <div class="application-grid">
        <div class="app-card">
          <h4>量子计算与优化</h4>
          <ul>
            <li><strong>量子退火：</strong>组合优化问题求解</li>
            <li><strong>QAOA算法：</strong>变分量子本征求解器</li>
            <li><strong>量子近似优化：</strong>NP-hard问题的量子算法</li>
            <li><strong>机器学习：</strong>量子机器学习算法</li>
          </ul>
        </div>
        
        <div class="app-card">
          <h4>量子模拟</h4>
          <ul>
            <li><strong>多体物理：</strong>强关联电子系统</li>
            <li><strong>高能物理：</strong>格点规范理论</li>
            <li><strong>凝聚态物理：</strong>拓扑相和相变</li>
            <li><strong>化学反应：</strong>分子动力学模拟</li>
          </ul>
        </div>
        
        <div class="app-card">
          <h4>量子信息</h4>
          <ul>
            <li><strong>量子纠错：</strong>拓扑量子纠错码</li>
            <li><strong>量子通信：</strong>量子密钥分发</li>
            <li><strong>量子传感：</strong>精密测量技术</li>
            <li><strong>量子存储：</strong>量子记忆器件</li>
          </ul>
        </div>

        <div class="app-card">
          <h4>材料科学</h4>
          <ul>
            <li><strong>磁性材料：</strong>自旋电子学器件</li>
            <li><strong>铁电材料：</strong>多铁性材料设计</li>
            <li><strong>超导材料：</strong>高温超导机理</li>
            <li><strong>拓扑材料：</strong>拓扑绝缘体和半金属</li>
          </ul>
        </div>

        <div class="app-card">
          <h4>统计物理与复杂系统</h4>
          <ul>
            <li><strong>相变理论：</strong>临界现象研究</li>
            <li><strong>网络科学：</strong>复杂网络上的相变</li>
            <li><strong>生物物理：</strong>蛋白质折叠问题</li>
            <li><strong>社会物理：</strong>社会系统建模</li>
          </ul>
        </div>

        <div class="app-card">
          <h4>工程应用</h4>
          <ul>
            <li><strong>优化算法：</strong>交通路径规划</li>
            <li><strong>金融建模：</strong>投资组合优化</li>
            <li><strong>人工智能：</strong>神经网络训练</li>
            <li><strong>密码学：</strong>量子密码协议</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展历史</h3>
      <div class="history-timeline">
        <div class="timeline-item">
          <h4>1925年 - Ising模型</h4>
          <p>Ernst Ising提出经典Ising模型</p>
        </div>
        <div class="timeline-item">
          <h4>1944年 - 二维精确解</h4>
          <p>Onsager求解二维Ising模型</p>
        </div>
        <div class="timeline-item">
          <h4>1963年 - 横向场模型</h4>
          <p>de Gennes引入横向场Ising模型</p>
        </div>
        <div class="timeline-item">
          <h4>1970年 - Jordan-Wigner变换</h4>
          <p>一维量子Ising模型的精确解</p>
        </div>
        <div class="timeline-item">
          <h4>1980年代 - 量子相变理论</h4>
          <p>Sachdev等发展量子临界理论</p>
        </div>
        <div class="timeline-item">
          <h4>1990年代 - 数值方法发展</h4>
          <p>DMRG和QMC方法成熟</p>
        </div>
        <div class="timeline-item">
          <h4>2000年代 - 实验实现</h4>
          <p>冷原子和超导量子比特实验</p>
        </div>
        <div class="timeline-item">
          <h4>2010年代至今 - 量子技术</h4>
          <p>量子计算和量子模拟应用</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>相关概念与扩展模型</h3>
      <div class="concept-grid">
        <div class="concept-card">
          <h4>基础概念</h4>
          <div class="concept-tags">
            <span class="tag">量子相变</span>
            <span class="tag">临界指数</span>
            <span class="tag">序参量</span>
            <span class="tag">对称性破缺</span>
            <span class="tag">量子涨落</span>
          </div>
        </div>
        
        <div class="concept-card">
          <h4>高级概念</h4>
          <div class="concept-tags">
            <span class="tag">量子纠缠</span>
            <span class="tag">拓扑序</span>
            <span class="tag">量子临界性</span>
            <span class="tag">标度不变性</span>
            <span class="tag">共形场论</span>
          </div>
        </div>

        <div class="concept-card">
          <h4>扩展模型</h4>
          <div class="concept-tags">
            <span class="tag">XY模型</span>
            <span class="tag">Heisenberg模型</span>
            <span class="tag">Potts模型</span>
            <span class="tag">Clock模型</span>
            <span class="tag">Kitaev模型</span>
          </div>
        </div>

        <div class="concept-card">
          <h4>现代发展</h4>
          <div class="concept-tags">
            <span class="tag">机器学习</span>
            <span class="tag">张量网络</span>
            <span class="tag">量子模拟</span>
            <span class="tag">非平衡态</span>
            <span class="tag">多体局域化</span>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>开放问题与未来方向</h3>
      <div class="future-directions">
        <ul>
          <li><strong>高维量子临界性：</strong>二维以上系统的精确理论描述</li>
          <li><strong>非平衡量子相变：</strong>驱动和耗散系统中的相变</li>
          <li><strong>多体局域化：</strong>无序系统中的量子热化</li>
          <li><strong>量子优化算法：</strong>更高效的量子算法设计</li>
          <li><strong>大规模量子模拟：</strong>实用化的量子模拟器</li>
          <li><strong>机器学习集成：</strong>AI辅助的量子多体问题求解</li>
          <li><strong>拓扑量子计算：</strong>基于拓扑相的容错量子计算</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'

export default {
  name: 'Chapter1_4_14',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.phase-diagram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.phase-info {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.phase-info h4 {
  color: #28a745;
  margin-bottom: 10px;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.method-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  transition: transform 0.2s, box-shadow 0.2s;
}

.method-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.method-card h4 {
  color: #28a745;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.phenomena-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.phenomenon-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.phenomenon-card h4 {
  color: #dc3545;
  margin-bottom: 8px;
}

.experiment-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.exp-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.exp-item h4 {
  color: #6f42c1;
  margin-bottom: 8px;
}

.application-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.app-tag {
  background: #28a745;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

.related-models {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.related-models li {
  margin-bottom: 8px;
  padding-left: 10px;
}

h2 {
  color: #2c3e50;
  border-bottom: 3px solid #28a745;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
</style>