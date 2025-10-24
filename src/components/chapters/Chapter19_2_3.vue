<template>
  <div class="chapter-content">
    <h1>19.2.3 非平衡量子多体系统</h1>
    
    <div class="content-section">
      <h2>1. 基本概念</h2>
      <p>非平衡量子多体系统研究远离热平衡态的量子多粒子系统的动力学行为和稳态性质。</p>
      
      <h3>1.1 非平衡态的特征</h3>
      <ul>
        <li><strong>时间依赖</strong>：系统性质随时间演化</li>
        <li><strong>能量流动</strong>：存在能量输入和耗散</li>
        <li><strong>相干性</strong>：量子相干效应的重要作用</li>
        <li><strong>多体关联</strong>：粒子间强相互作用</li>
      </ul>

      <h3>1.2 驱动机制</h3>
      <p>系统偏离平衡的主要方式：</p>
      <ul>
        <li>外场驱动（激光、电场等）</li>
        <li>量子淬火（参数突然改变）</li>
        <li>开放系统（与环境耦合）</li>
        <li>周期性驱动（Floquet系统）</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>2. 理论框架</h2>
      
      <h3>2.1 Liouville-von Neumann方程</h3>
      <p>密度矩阵的演化方程：</p>
      <div class="formula">
        $$i\hbar \frac{\partial \rho}{\partial t} = [H(t), \rho] + \mathcal{L}_{diss}[\rho]$$
      </div>
      <p>其中$\mathcal{L}_{diss}$描述耗散效应。</p>

      <h3>2.2 Keldysh形式主义</h3>
      <p>非平衡格林函数方法：</p>
      <div class="formula">
        $$G^<(t,t') = i\langle \psi^\dagger(t') \psi(t) \rangle$$
      </div>
      <div class="formula">
        $$G^>(t,t') = -i\langle \psi(t) \psi^\dagger(t') \rangle$$
      </div>
      <p>Keldysh格林函数：</p>
      <div class="formula">
        $$G^K = G^< + G^>$$
      </div>

      <h3>2.3 主方程方法</h3>
      <p>对于开放量子系统：</p>
      <div class="formula">
        $$\frac{d\rho_S}{dt} = -\frac{i}{\hbar}[H_S, \rho_S] + \mathcal{L}[\rho_S]$$
      </div>
      <p>其中$\mathcal{L}$是Lindblad超算符。</p>
    </div>

    <div class="content-section">
      <h2>3. 量子淬火动力学</h2>
      
      <h3>3.1 淬火协议</h3>
      <p>系统参数的突然改变：</p>
      <div class="formula">
        $$H(t) = \begin{cases}
        H_0 & t < 0 \\
        H_f & t > 0
        \end{cases}$$
      </div>

      <h3>3.2 Loschmidt回声</h3>
      <p>量子保真度的时间演化：</p>
      <div class="formula">
        $$F(t) = |\langle \psi_0 | e^{-iH_f t/\hbar} | \psi_0 \rangle|^2$$
      </div>
      <p>其中$|\psi_0\rangle$是初态。</p>

      <h3>3.3 动力学相变</h3>
      <p>淬火后系统可能经历：</p>
      <ul>
        <li><strong>热化</strong>：达到热平衡态</li>
        <li><strong>预热化</strong>：达到广义Gibbs系综</li>
        <li><strong>多体局域化</strong>：保持非热态</li>
        <li><strong>时间晶体</strong>：周期性时间演化</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>4. Floquet工程</h2>
      
      <h3>4.1 周期性驱动</h3>
      <p>时间周期性哈密顿量：</p>
      <div class="formula">
        $$H(t+T) = H(t)$$
      </div>
      <p>Floquet定理给出：</p>
      <div class="formula">
        $$|\psi(t+T)\rangle = e^{-i\epsilon T/\hbar} |\psi(t)\rangle$$
      </div>

      <h3>4.2 有效哈密顿量</h3>
      <p>高频展开：</p>
      <div class="formula">
        $$H_{eff} = H_0 + \frac{1}{\hbar\Omega}[H_1, H_{-1}] + \mathcal{O}(\Omega^{-2})$$
      </div>
      <p>其中$\Omega = 2\pi/T$是驱动频率。</p>

      <h3>4.3 拓扑Floquet态</h3>
      <p>周期性驱动可以实现：</p>
      <ul>
        <li>人工规范场</li>
        <li>拓扑相变</li>
        <li>Floquet拓扑绝缘体</li>
        <li>时间晶体</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>5. 热化与本征态热化假设</h2>
      
      <h3>5.1 本征态热化假设(ETH)</h3>
      <p>对于可观测量A，其矩阵元满足：</p>
      <div class="formula">
        $$\langle n | A | m \rangle = A(E) \delta_{nm} + e^{-S(E)/2} f(E, \omega) R_{nm}$$
      </div>
      <p>其中S(E)是熵，$\omega = E_n - E_m$。</p>

      <h3>5.2 热化条件</h3>
      <ul>
        <li><strong>能级统计</strong>：Wigner-Dyson分布</li>
        <li><strong>矩阵元统计</strong>：高斯随机分布</li>
        <li><strong>系统尺寸</strong>：热力学极限</li>
      </ul>

      <h3>5.3 热化破缺</h3>
      <p>不满足ETH的情况：</p>
      <ul>
        <li>可积系统</li>
        <li>多体局域化</li>
        <li>量子疤痕态</li>
        <li>约束系统</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>6. 开放量子系统</h2>
      
      <h3>6.1 系统-环境耦合</h3>
      <p>总哈密顿量：</p>
      <div class="formula">
        $$H_{total} = H_S + H_E + H_{SE}$$
      </div>
      <p>其中$H_{SE}$描述系统与环境的相互作用。</p>

      <h3>6.2 Lindblad主方程</h3>
      <p>马尔可夫近似下：</p>
      <div class="formula">
        $$\frac{d\rho}{dt} = -\frac{i}{\hbar}[H, \rho] + \sum_k \gamma_k \left( L_k \rho L_k^\dagger - \frac{1}{2}\{L_k^\dagger L_k, \rho\} \right)$$
      </div>
      <p>其中$L_k$是跳跃算符，$\gamma_k$是耗散率。</p>

      <h3>6.3 稳态性质</h3>
      <p>长时间极限下的稳态：</p>
      <ul>
        <li><strong>热态</strong>：与环境达到热平衡</li>
        <li><strong>非平衡稳态</strong>：存在持续的流</li>
        <li><strong>暗态</strong>：不受耗散影响的态</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>7. 实验实现</h2>
      
      <h3>7.1 冷原子系统</h3>
      <p><strong>优势</strong>：</p>
      <ul>
        <li>高度可控的参数</li>
        <li>长相干时间</li>
        <li>可实现各种晶格模型</li>
        <li>实时观测动力学</li>
      </ul>
      
      <p><strong>实验技术</strong>：</p>
      <ul>
        <li>光晶格中的原子</li>
        <li>Feshbach共振调节相互作用</li>
        <li>量子气体显微镜</li>
        <li>时间分辨测量</li>
      </ul>

      <h3>7.2 固体系统</h3>
      <p><strong>泵浦-探测实验</strong>：</p>
      <ul>
        <li>超快激光脉冲</li>
        <li>时间分辨ARPES</li>
        <li>太赫兹光谱</li>
        <li>X射线散射</li>
      </ul>

      <h3>7.3 量子模拟器</h3>
      <ul>
        <li>离子阱系统</li>
        <li>超导量子比特</li>
        <li>光子系统</li>
        <li>NV中心</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>8. 前沿研究方向</h2>
      
      <h3>8.1 量子多体疤痕</h3>
      <p>特殊的非热化本征态：</p>
      <ul>
        <li><strong>PXP模型</strong>：Rydberg原子链</li>
        <li><strong>AKLT疤痕</strong>：自旋链中的特殊态</li>
        <li><strong>周期轨道</strong>：经典轨道的量子对应</li>
      </ul>

      <h3>8.2 时间晶体</h3>
      <p>时间平移对称性的自发破缺：</p>
      <div class="formula">
        $$\langle O(t+nT) \rangle = \langle O(t) \rangle e^{i\phi n}$$
      </div>
      <p>其中$\phi \neq 0, 2\pi$。</p>

      <h3>8.3 量子临界动力学</h3>
      <ul>
        <li>Kibble-Zurek机制</li>
        <li>动力学临界指数</li>
        <li>普适性类别</li>
      </ul>

      <h3>8.4 机器学习方法</h3>
      <ul>
        <li>神经网络量子态</li>
        <li>变分蒙特卡罗</li>
        <li>强化学习控制</li>
        <li>数据驱动发现</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>9. 应用前景</h2>
      
      <h3>9.1 量子技术</h3>
      <ul>
        <li><strong>量子计算</strong>：绝热量子计算、量子退火</li>
        <li><strong>量子传感</strong>：利用非平衡态增强灵敏度</li>
        <li><strong>量子控制</strong>：最优控制理论</li>
      </ul>

      <h3>9.2 能源应用</h3>
      <ul>
        <li>光伏器件中的载流子动力学</li>
        <li>人工光合作用</li>
        <li>热电材料的非平衡输运</li>
      </ul>

      <h3>9.3 材料设计</h3>
      <ul>
        <li>光诱导相变</li>
        <li>非平衡态材料性质</li>
        <li>动力学调控</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>10. 理论挑战与未来方向</h2>
      
      <div class="highlight-box">
        <h4>主要挑战</h4>
        <ul>
          <li><strong>计算复杂性</strong>：指数增长的希尔伯特空间</li>
          <li><strong>长时间动力学</strong>：数值方法的限制</li>
          <li><strong>开放系统</strong>：环境效应的精确处理</li>
          <li><strong>强关联效应</strong>：多体相互作用的处理</li>
        </ul>
      </div>

      <div class="highlight-box">
        <h4>发展方向</h4>
        <ul>
          <li><strong>新理论方法</strong>：发展处理非平衡多体系统的新理论</li>
          <li><strong>数值算法</strong>：改进张量网络、量子蒙特卡罗等方法</li>
          <li><strong>实验技术</strong>：提高时间和空间分辨率</li>
          <li><strong>跨学科合作</strong>：与量子信息、统计物理等领域结合</li>
          <li><strong>应用探索</strong>：寻找实际应用中的新机会</li>
        </ul>
      </div>

      <p>非平衡量子多体系统作为现代凝聚态物理的前沿领域，不仅挑战我们对量子多体系统的理解，也为未来量子技术的发展提供了新的可能性。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter19_2_3',
  mounted() {
    // 渲染数学公式
    if (window.renderMathInElement) {
      window.renderMathInElement(this.$el, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ]
      });
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
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
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.content-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  background-color: #fff;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
}

ul, ol {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin: 8px 0;
}

.highlight-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.highlight-box h4 {
  color: white;
  margin-top: 0;
}

.highlight-box ul {
  margin: 10px 0;
}

.highlight-box li {
  margin: 5px 0;
}

p {
  margin: 12px 0;
  text-align: justify;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  .content-section {
    padding: 15px;
  }
}
</style>