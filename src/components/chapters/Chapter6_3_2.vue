<template>
  <div class="chapter-content">
    <h1 class="chapter-title">6.3.2 数值重整化群方法</h1>
    
    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3>学习目标</h3>
      <ul>
        <li>理解数值重整化群的基本思想和优势</li>
        <li>掌握密度矩阵重整化群(DMRG)的原理</li>
        <li>了解张量网络重整化群(TNRG)方法</li>
        <li>学习量子蒙特卡罗重整化群技术</li>
        <li>掌握数值RG在强关联系统中的应用</li>
      </ul>
    </div>

    <!-- 引言 -->
    <div class="introduction">
      <h3>数值重整化群的发展</h3>
      <p>
        数值重整化群方法是重整化群理论与现代计算技术相结合的产物。与解析重整化群相比，
        数值方法能够处理更复杂的相互作用系统，特别是强关联量子多体系统。这些方法在凝聚态物理、
        量子信息和统计力学中发挥着重要作用。
      </p>
    </div>

    <!-- 密度矩阵重整化群 -->
    <div class="dmrg-section">
      <h3>密度矩阵重整化群 (DMRG)</h3>
      
      <div class="dmrg-introduction">
        <h4>基本思想</h4>
        <p>
          DMRG由Steven White在1992年提出，是处理一维强关联量子系统最精确的数值方法之一。
          其核心思想是通过保留最重要的量子态来实现系统的重整化。
        </p>
      </div>

      <div class="dmrg-algorithm">
        <h4>算法原理</h4>
        
        <div class="algorithm-steps">
          <div class="step-item">
            <h5>1. 系统分割</h5>
            <p>将系统分为四个部分：系统块(S)、环境块(E)、以及两个单格点</p>
            <div class="system-diagram">
              <svg width="600" height="150" viewBox="0 0 600 150">
                <!-- 系统块 -->
                <rect x="50" y="50" width="120" height="50" fill="#74b9ff" stroke="#0984e3" stroke-width="2"/>
                <text x="110" y="80" text-anchor="middle" fill="white" font-weight="bold">系统块 S</text>
                
                <!-- 单格点1 -->
                <rect x="190" y="50" width="40" height="50" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <text x="210" y="80" text-anchor="middle" fill="white" font-weight="bold">•</text>
                
                <!-- 单格点2 -->
                <rect x="250" y="50" width="40" height="50" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <text x="270" y="80" text-anchor="middle" fill="white" font-weight="bold">•</text>
                
                <!-- 环境块 -->
                <rect x="310" y="50" width="120" height="50" fill="#55a3ff" stroke="#2d3436" stroke-width="2"/>
                <text x="370" y="80" text-anchor="middle" fill="white" font-weight="bold">环境块 E</text>
                
                <!-- 箭头和标签 -->
                <text x="300" y="130" text-anchor="middle" font-size="14" fill="#2d3436">超块 (Superblock)</text>
                <line x1="50" y1="120" x2="430" y2="120" stroke="#2d3436" stroke-width="2"/>
                <polygon points="425,115 430,120 425,125" fill="#2d3436"/>
              </svg>
            </div>
          </div>

          <div class="step-item">
            <h5>2. 密度矩阵构造</h5>
            <p>对于系统块，构造约化密度矩阵：</p>
            <div class="formula-box">
              $$\rho_S = \text{Tr}_E |\psi\rangle\langle\psi|$$</div><p>其中$|\psi\rangle$是超块的基态波函数。</p>
          </div>

          <div class="step-item"><h5>3. 态选择</h5><p>对密度矩阵进行对角化，保留最大的$m$个本征值对应的本征态：</p><div class="formula-box">$$\rho_S = \sum_{i=1}^{m} w_i |\phi_i\rangle\langle\phi_i|$$</div><p>其中$w_i$是按降序排列的本征值，$|\phi_i\rangle$是对应的本征态。</p>
          </div>

          <div class="step-item">
            <h5>4. 算符变换</h5>
            <p>将所有算符投影到保留的子空间：</p><div class="formula-box">$$O_{new} = P^\dagger O_{old} P$$</div><p>其中$P = \sum_{i=1}^{m} |\phi_i\rangle\langle i|$是投影算符。</p>
          </div>
        </div>
      </div>

      <div class="dmrg-advantages">
        <h4>DMRG的优势</h4>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h5>高精度</h5>
            <p>对一维系统可达到机器精度</p>
          </div>
          <div class="advantage-card">
            <h5>系统性改进</h5>
            <p>通过增加保留态数目系统性提高精度</p>
          </div>
          <div class="advantage-card">
            <h5>适用范围广</h5>
            <p>可处理各种一维强关联系统</p>
          </div>
          <div class="advantage-card">
            <h5>物理直观</h5>
            <p>基于量子纠缠的物理图像</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 张量网络重整化群 -->
    <div class="tnrg-section">
      <h3>张量网络重整化群 (TNRG)</h3>
      
      <div class="tnrg-introduction">
        <h4>基本概念</h4>
        <p>
          张量网络重整化群是DMRG在高维系统的推广，通过张量网络表示量子多体态，
          并利用重整化群思想进行系统性的近似。
        </p>
      </div>

      <div class="tensor-network-types">
        <h4>主要张量网络类型</h4>
        
        <div class="network-types">
          <div class="network-type">
            <h5>矩阵乘积态 (MPS)</h5>
            <div class="mps-diagram">
              <svg width="500" height="100" viewBox="0 0 500 100">
                <!-- MPS链 -->
                <circle cx="80" cy="50" r="20" fill="#74b9ff" stroke="#0984e3" stroke-width="2"/>
                <text x="80" y="55" text-anchor="middle" fill="white" font-weight="bold">A₁</text>
                
                <line x1="100" y1="50" x2="140" y2="50" stroke="#2d3436" stroke-width="3"/>
                
                <circle cx="160" cy="50" r="20" fill="#74b9ff" stroke="#0984e3" stroke-width="2"/>
                <text x="160" y="55" text-anchor="middle" fill="white" font-weight="bold">A₂</text>
                
                <line x1="180" y1="50" x2="220" y2="50" stroke="#2d3436" stroke-width="3"/>
                
                <circle cx="240" cy="50" r="20" fill="#74b9ff" stroke="#0984e3" stroke-width="2"/>
                <text x="240" y="55" text-anchor="middle" fill="white" font-weight="bold">A₃</text>
                
                <text x="280" y="55" text-anchor="middle" font-size="16">...</text>
                
                <circle cx="320" cy="50" r="20" fill="#74b9ff" stroke="#0984e3" stroke-width="2"/>
                <text x="320" y="55" text-anchor="middle" fill="white" font-weight="bold">Aₙ</text>
                
                <!-- 物理指标 -->
                <line x1="80" y1="30" x2="80" y2="10" stroke="#e17055" stroke-width="2"/>
                <line x1="160" y1="30" x2="160" y2="10" stroke="#e17055" stroke-width="2"/>
                <line x1="240" y1="30" x2="240" y2="10" stroke="#e17055" stroke-width="2"/>
                <line x1="320" y1="30" x2="320" y2="10" stroke="#e17055" stroke-width="2"/>
                
                <text x="250" y="90" text-anchor="middle" font-size="14">矩阵乘积态结构</text>
              </svg>
            </div><div class="formula-box">$$|\psi\rangle = \sum_{\{s_i\}} A^{s_1}A^{s_2}\cdots A^{s_N} |s_1s_2\cdots s_N\rangle$$</div>
          </div>

          <div class="network-type">
            <h5>投影纠缠对态 (PEPS)</h5>
            <div class="peps-diagram">
              <svg width="300" height="200" viewBox="0 0 300 200">
                <!-- 2D网格 -->
                <circle cx="100" cy="60" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <circle cx="150" cy="60" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <circle cx="200" cy="60" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                
                <circle cx="100" cy="100" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <circle cx="150" cy="100" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <circle cx="200" cy="100" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                
                <circle cx="100" cy="140" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <circle cx="150" cy="140" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                <circle cx="200" cy="140" r="15" fill="#fd79a8" stroke="#e84393" stroke-width="2"/>
                
                <!-- 连接线 -->
                <line x1="115" y1="60" x2="135" y2="60" stroke="#2d3436" stroke-width="2"/>
                <line x1="165" y1="60" x2="185" y2="60" stroke="#2d3436" stroke-width="2"/>
                <line x1="115" y1="100" x2="135" y2="100" stroke="#2d3436" stroke-width="2"/>
                <line x1="165" y1="100" x2="185" y2="100" stroke="#2d3436" stroke-width="2"/>
                <line x1="115" y1="140" x2="135" y2="140" stroke="#2d3436" stroke-width="2"/>
                <line x1="165" y1="140" x2="185" y2="140" stroke="#2d3436" stroke-width="2"/>
                
                <line x1="100" y1="75" x2="100" y2="85" stroke="#2d3436" stroke-width="2"/>
                <line x1="150" y1="75" x2="150" y2="85" stroke="#2d3436" stroke-width="2"/>
                <line x1="200" y1="75" x2="200" y2="85" stroke="#2d3436" stroke-width="2"/>
                <line x1="100" y1="115" x2="100" y2="125" stroke="#2d3436" stroke-width="2"/>
                <line x1="150" y1="115" x2="150" y2="125" stroke="#2d3436" stroke-width="2"/>
                <line x1="200" y1="115" x2="200" y2="125" stroke="#2d3436" stroke-width="2"/>
                
                <text x="150" y="180" text-anchor="middle" font-size="14">二维张量网络</text>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div class="tnrg-algorithms">
        <h4>主要TNRG算法</h4>
        
        <div class="algorithm-grid">
          <div class="algorithm-card"> <h5>TRG (Tensor Renormalization Group)</h5><p>通过奇异值分解(SVD)对张量进行粗粒化</p> <div class="formula-box">$$T_{ijkl} = \sum_{\alpha\beta} U_{i\alpha} S_{\alpha\beta} V_{\beta j} \otimes U_{k\alpha} S_{\alpha\beta} V_{\beta l}$$</div>
          </div>
          
          <div class="algorithm-card">
            <h5>HOTRG (Higher-Order TRG)</h5>
            <p>改进的TRG算法，保持更多的张量对称性</p>
          </div>
          
          <div class="algorithm-card">
            <h5>TNR (Tensor Network Renormalization)</h5>
            <p>基于纠缠重整化的张量网络方法</p>
          </div>
          
          <div class="algorithm-card">
            <h5>MERA (Multi-scale Entanglement Renormalization)</h5>
            <p>多尺度纠缠重整化网络</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 量子蒙特卡罗重整化群 -->
    <div class="qmc-rg-section">
      <h3>量子蒙特卡罗重整化群</h3>
      
      <div class="qmc-introduction">
        <h4>基本思想</h4>
        <p>
          量子蒙特卡罗重整化群结合了蒙特卡罗采样和重整化群思想，
          能够处理有限温度下的量子多体系统，特别适用于研究量子相变。
        </p>
      </div>

      <div class="qmc-methods">
        <h4>主要方法</h4>
        
        <div class="method-list">
          <div class="method-item"> <h5>路径积分蒙特卡罗 + RG</h5><p>将路径积分表示与重整化群变换结合</p> <div class="formula-box">$$Z = \text{Tr} e^{-\beta H} = \int \mathcal{D}[\phi] e^{-S[\phi]}$$</div>
          </div>
          
          <div class="method-item">
            <h5>世界线量子蒙特卡罗</h5>
            <p>通过世界线表示实现重整化群变换</p>
          </div>
          
          <div class="method-item">
            <h5>连续时间量子蒙特卡罗</h5>
            <p>在连续时间表示下进行重整化群分析</p>
          </div>
        </div>
      </div>

      <div class="qmc-advantages">
        <h4>优势与挑战</h4>
        <div class="pros-cons">
          <div class="pros">
            <h5>优势</h5>
            <ul>
              <li>可处理有限温度系统</li>
              <li>适用于强关联系统</li>
              <li>能研究动力学性质</li>
              <li>统计误差可控</li>
            </ul>
          </div>
          <div class="cons">
            <h5>挑战</h5>
            <ul>
              <li>符号问题</li>
              <li>计算复杂度高</li>
              <li>需要大量统计采样</li>
              <li>解析延拓困难</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 应用实例 -->
    <div class="applications-section">
      <h3>数值RG的应用实例</h3>
      
      <div class="application-examples">
        <div class="example-item"> <h4>Hubbard模型</h4><p>使用DMRG研究一维Hubbard模型的Mott相变：</p> <div class="formula-box">$$H = -t\sum_{\langle i,j\rangle,\sigma} (c_{i\sigma}^\dagger c_{j\sigma} + h.c.) + U\sum_i n_{i\uparrow}n_{i\downarrow}$$</div>
          <div class="result-box">
            <h5>主要发现</h5>
            <ul>
              <li>金属-绝缘体相变的精确临界点</li>
              <li>自旋-电荷分离现象</li>
              <li>Luttinger液体行为的确认</li>
            </ul>
          </div>
        </div>

        <div class="example-item"> <h4>量子自旋链</h4><p>DMRG在Heisenberg自旋链中的应用：</p> <div class="formula-box">$$H = J\sum_{i=1}^{N-1} \vec{S}_i \cdot \vec{S}_{i+1}$$
          </div>
          <div class="result-box">
            <h5>重要结果</h5>
            <ul>
              <li>基态能量的高精度计算</li>
              <li>能隙的精确确定</li>
              <li>纠缠熵的标度行为</li>
            </ul>
          </div>
        </div>

        <div class="example-item">
          <h4>二维量子磁体</h4>
          <p>使用PEPS研究二维反铁磁Heisenberg模型：</p>
          <div class="result-box">
            <h5>研究成果</h5>
            <ul>
              <li>Néel序参量的计算</li>
              <li>自旋波激发谱</li>
              <li>量子涨落效应</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 最新发展 -->
    <div class="recent-developments">
      <h3>最新发展与前沿</h3>
      
      <div class="development-areas">
        <div class="development-item">
          <h4>机器学习增强的数值RG</h4>
          <p>利用神经网络优化张量网络结构和重整化流程</p>
          <ul>
            <li>神经网络量子态(NQS)</li>
            <li>变分自编码器优化</li>
            <li>强化学习指导的RG流</li>
          </ul>
        </div>

        <div class="development-item">
          <h4>量子计算与数值RG</h4>
          <p>在量子计算机上实现数值重整化群算法</p>
          <ul>
            <li>变分量子本征求解器(VQE)</li>
            <li>量子近似优化算法(QAOA)</li>
            <li>量子张量网络模拟</li>
          </ul>
        </div>

        <div class="development-item">
          <h4>高维系统的突破</h4>
          <p>针对高维强关联系统的新算法</p>
          <ul>
            <li>改进的PEPS算法</li>
            <li>三维张量网络</li>
            <li>多体局域化系统</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 总结 -->
    <div class="summary-box">
      <h3>本节总结</h3>
      <ul>
        <li><strong>DMRG方法</strong>：基于密度矩阵的重整化群，是一维强关联系统的精确方法</li>
        <li><strong>张量网络RG</strong>：DMRG在高维系统的推广，通过张量网络表示实现重整化</li>
        <li><strong>量子蒙特卡罗RG</strong>：结合统计采样和重整化群，适用于有限温度系统</li>
        <li><strong>广泛应用</strong>：在强关联电子系统、量子磁体、量子相变等领域发挥重要作用</li>
        <li><strong>前沿发展</strong>：与机器学习、量子计算的结合开辟新的研究方向</li>
      </ul>
    </div>

    <!-- 思考题 -->
    <div class="exercise-box">
      <h3>思考题</h3>
      <ol>
        <li>为什么DMRG在一维系统中特别有效？这与量子纠缠的结构有什么关系？</li>
        <li>比较实空间RG和DMRG的优缺点，它们适用于哪些不同的物理问题？</li>
        <li>张量网络重整化群如何处理高维系统？面临的主要挑战是什么？</li>
        <li>量子蒙特卡罗重整化群中的符号问题如何影响计算精度？</li>
        <li>机器学习如何帮助改进数值重整化群方法？</li>
      </ol>
    </div>

    <!-- 延伸阅读 -->
    <div class="reading-list">
      <h3>延伸阅读</h3>
      <ul>
        <li>White, S. R. "Density matrix formulation for quantum renormalization groups." <em>Phys. Rev. Lett.</em> <strong>69</strong>, 2863 (1992)</li>
        <li>Schollwöck, U. "The density-matrix renormalization group in the age of matrix product states." <em>Ann. Phys.</em> <strong>326</strong>, 96 (2011)</li>
        <li>Orús, R. "A practical introduction to tensor networks." <em>Ann. Phys.</em> <strong>349</strong>, 117 (2014)</li>
        <li>Cirac, J. I. & Verstraete, F. "Renormalization and tensor product states in spin chains and lattices." <em>J. Phys. A</em> <strong>42</strong>, 504004 (2009)</li>
        <li>Sandvik, A. W. "Computational studies of quantum spin systems." <em>AIP Conf. Proc.</em> <strong>1297</strong>, 135 (2010)</li>
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

.dmrg-section,
.tnrg-section,
.qmc-rg-section,
.applications-section,
.recent-developments {
  margin: 30px 0;
}

.dmrg-section h3,
.tnrg-section h3,
.qmc-rg-section h3,
.applications-section h3,
.recent-developments h3 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.dmrg-introduction,
.tnrg-introduction,
.qmc-introduction {
  background: #f1f3f4;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.dmrg-introduction h4,
.tnrg-introduction h4,
.qmc-introduction h4 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.algorithm-steps {
  margin: 20px 0;
}

.step-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #74b9ff;
}

.step-item h5 {
  color: #0984e3;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.system-diagram {
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

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.advantage-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #27ae60;
  text-align: center;
}

.advantage-card h5 {
  color: #27ae60;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.network-types {
  margin: 20px 0;
}

.network-type {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #fd79a8;
}

.network-type h5 {
  color: #e84393;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.mps-diagram,
.peps-diagram {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
}

.algorithm-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.algorithm-card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #6c5ce7;
}

.algorithm-card h5 {
  color: #6c5ce7;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.method-list {
  margin: 20px 0;
}

.method-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-left: 5px solid #00b894;
}

.method-item h5 {
  color: #00b894;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 20px 0;
}

.pros,
.cons {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.pros {
  border-left: 5px solid #27ae60;
}

.cons {
  border-left: 5px solid #e74c3c;
}

.pros h5 {
  color: #27ae60;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.cons h5 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.application-examples {
  margin: 20px 0;
}

.example-item {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 25px;
  border-left: 5px solid #e17055;
}

.example-item h4 {
  color: #d63031;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.result-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.result-box h5 {
  color: #2d3436;
  margin-bottom: 15px;
  font-size: 1.1em;
}

.development-areas {
  margin: 20px 0;
}

.development-item {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 25px;
  border-left: 5px solid #a29bfe;
}

.development-item h4 {
  color: #6c5ce7;
  margin-bottom: 15px;
  font-size: 1.3em;
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
  
  .advantages-grid,
  .algorithm-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
}
</style>