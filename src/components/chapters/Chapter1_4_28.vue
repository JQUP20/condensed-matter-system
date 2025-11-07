<template>
  <div class="renormalization-page">
    <h1>重整化 (Renormalization)</h1>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <p>重整化是现代理论物理学中最重要的概念之一，它不仅解决了量子场论中的发散问题，更深刻地揭示了物理系统在不同能量尺度下的行为规律。重整化理论由Kenneth Wilson在1970年代发展完善，为理解临界现象、相变和标度不变性提供了统一的理论框架。这一理论的核心思想是系统的物理性质在不同长度尺度下的自相似性，以及如何通过系统地消除短距离自由度来研究长距离物理。</p>
      
      <h3>历史发展</h3>
      <ul>
        <li><strong>1940年代</strong>：量子电动力学中的发散问题</li>
        <li><strong>1950年代</strong>：Dyson、Schwinger等人的重整化方案</li>
        <li><strong>1960年代</strong>：Kadanoff的标度假设</li>
        <li><strong>1971年</strong>：Wilson的重整化群理论</li>
        <li><strong>1982年</strong>：Wilson获得诺贝尔物理学奖</li>
        <li><strong>1980年代至今</strong>：在凝聚态物理中的广泛应用</li>
      </ul>
    </section>

    <!-- 基本概念 -->
    <section class="basic-concepts">
      <h2>基本概念</h2>
      
      <h3>标度变换</h3>
      <p>重整化的核心是标度变换，即改变系统的观察尺度：</p>
      
      <div class="formula">
        <p><strong>长度标度：</strong> $r \to br$，其中 $b > 1$</p>
        <p><strong>能量标度：</strong> $E \to E/b^z$，$z$ 是动力学指数</p>
      </div>
      
      <p>在标度变换下，系统的哈密顿量变为：</p>
      
      <div class="formula">
        <p>$$H'(K') = \mathcal{R}_b H(K)$$</p>
      </div>
      
      <p>其中 $\mathcal{R}_b$ 是重整化变换算符，$K$ 是耦合常数集合。</p>

      <h3>重整化群流</h3>
      <p>重整化群方程描述耦合常数随尺度的变化：</p>
      
      <div class="formula">
        <p>$$\frac{dg_i}{dl} = \beta_i(g_1, g_2, \ldots)$$</p>
      </div>
      
      <p>其中 $l = \ln b$ 是尺度参数，$\beta_i$ 是β函数。</p>

      <h3>固定点</h3>
      <p>重整化群流的固定点满足：</p>
      
      <div class="formula">
        <p>$$\beta_i(g_1^*, g_2^*, \ldots) = 0$$</p>
      </div>
      
      <p>固定点的类型：</p>
      <ul>
        <li><strong>稳定固定点</strong>：吸引邻近的流</li>
        <li><strong>不稳定固定点</strong>：排斥邻近的流</li>
        <li><strong>鞍点</strong>：某些方向稳定，某些方向不稳定</li>
      </ul>
    </section>

    <!-- 实空间重整化 -->
    <section class="real-space-renormalization">
      <h2>实空间重整化</h2>
      
      <h3>格点阻塞</h3>
      <p>将原始晶格分成块，每块用一个有效自由度代替：</p>
      
      <div class="formula">
        <p><strong>阻塞变换：</strong> $\sigma'_i = \text{Majority}(\sigma_{i1}, \sigma_{i2}, \ldots, \sigma_{ib^d})$</p>
      </div>
      
      <p>对于Ising模型，多数决定规则是常用的阻塞方案。</p>

      <h3>一维Ising模型</h3>
      <p>一维Ising模型的精确重整化：</p>
      
      <div class="formula">
        <p>$$H = -J \sum_i \sigma_i \sigma_{i+1}$$</p>
        <p><strong>重整化关系：</strong> $K' = \frac{1}{2} \ln(\cosh 2K)$</p>
      </div>
      
      <p>其中 $K = J/k_B T$。固定点为 $K^* = 0$（高温固定点）。</p>

      <h3>二维Ising模型</h3>
      <p>Kadanoff的近似重整化：</p>
      <ul>
        <li><strong>2×2阻塞</strong>：四个格点合并为一个</li>
        <li><strong>多数决定规则</strong>：新自旋由多数决定</li>
        <li><strong>近似处理</strong>：忽略高阶相互作用</li>
      </ul>
      
      <p>得到近似的临界温度和临界指数。</p>
    </section>

    <!-- 动量空间重整化 -->
    <section class="momentum-space-renormalization">
      <h2>动量空间重整化</h2>
      
      <h3>Wilson-Fisher方法</h3>
      <p>在动量空间中进行重整化：</p>
      <ol>
        <li><strong>积分出高动量模式</strong>：$\Lambda/b < |k| < \Lambda$</li>
        <li><strong>重标度</strong>：$k \to bk$</li>
        <li><strong>重新参数化</strong>：恢复原始形式</li>
      </ol>

      <h3>φ⁴理论</h3>
      <p>标量场的φ⁴理论：</p>
      
      <div class="formula">
        <p>$$\mathcal{L} = \frac{1}{2}(\partial \phi)^2 + \frac{r}{2}\phi^2 + \frac{u}{4!}\phi^4$$</p>
      </div>
      
      <p>重整化群方程：</p>
      
      <div class="formula">
        <p>$$\frac{dr}{dl} = 2r + \frac{u}{3} \frac{S_d}{(2\pi)^d}$$</p>
        <p>$$\frac{du}{dl} = (4-d)u - \frac{u^2}{2} \frac{S_d}{(2\pi)^d}$$</p>
      </div>
      
      <p>其中 $S_d$ 是d维单位球面积。</p>

      <h3>ε展开</h3>
      <p>在上临界维度 $d_c = 4$ 附近展开：</p>
      
      <div class="formula">
        <p>$$\epsilon = 4 - d$$</p>
        <p><strong>Wilson-Fisher固定点：</strong> $u^* = \frac{6\epsilon}{n+8} + O(\epsilon^2)$</p>
      </div>
      
      <p>临界指数：</p>
      
      <div class="formula">
        <p>$$\nu = \frac{1}{2} + \frac{\epsilon}{12} + O(\epsilon^2)$$</p>
        <p>$$\eta = \frac{\epsilon^2}{54} + O(\epsilon^3)$$</p>
      </div>
    </section>

    <!-- 临界现象 -->
    <section class="critical-phenomena">
      <h2>临界现象</h2>
      
      <h3>标度律</h3>
      <p>在临界点附近，物理量表现出幂律行为：</p>
      
      <div class="formula">
        <p><strong>关联长度：</strong> $\xi \sim |t|^{-\nu}$</p>
        <p><strong>序参量：</strong> $m \sim |t|^\beta$</p>
        <p><strong>比热：</strong> $C \sim |t|^{-\alpha}$</p>
        <p><strong>磁化率：</strong> $\chi \sim |t|^{-\gamma}$</p>
      </div>
      
      <p>其中 $t = (T - T_c)/T_c$ 是约化温度。</p>

      <h3>标度关系</h3>
      <p>临界指数之间存在普适的标度关系：</p>
      
      <div class="formula">
        <p>$$\alpha + 2\beta + \gamma = 2 \quad \text{(Rushbrooke)}$$</p>
        <p>$$\gamma = \beta(\delta - 1) \quad \text{(Widom)}$$</p>
        <p>$$\nu d = 2 - \alpha \quad \text{(Josephson)}$$</p>
        <p>$$2 - \eta = \gamma/\nu \quad \text{(Fisher)}$$</p>
      </div>

      <h3>有限尺寸标度</h3>
      <p>有限系统中的标度行为：</p>
      
      <div class="formula">
        <p>$$\chi(t, L) = L^{\gamma/\nu} \tilde{\chi}(tL^{1/\nu})$$</p>
      </div>
      
      <p>其中 $L$ 是系统尺寸，$\tilde{\chi}$ 是标度函数。</p>
    </section>

    <!-- 普适性 -->
    <section class="universality">
      <h2>普适性</h2>
      
      <h3>普适性类</h3>
      <p>具有相同临界行为的系统属于同一普适性类：</p>
      <ul>
        <li><strong>Ising类</strong>：n=1，Z₂对称性</li>
        <li><strong>XY类</strong>：n=2，U(1)对称性</li>
        <li><strong>Heisenberg类</strong>：n=3，O(3)对称性</li>
        <li><strong>球形模型类</strong>：n→∞极限</li>
      </ul>

      <h3>决定因素</h3>
      <p>普适性类由以下因素决定：</p>
      <ul>
        <li><strong>空间维度</strong>：$d$</li>
        <li><strong>序参量维度</strong>：$n$</li>
        <li><strong>对称性</strong>：连续或离散</li>
        <li><strong>相互作用范围</strong>：短程或长程</li>
      </ul>

      <h3>边际算符</h3>
      <p>在临界点处，算符按标度维度分类：</p>
      <ul>
        <li><strong>相关算符</strong>：$\Delta < d$，在长距离重要</li>
        <li><strong>无关算符</strong>：$\Delta > d$，在长距离不重要</li>
        <li><strong>边际算符</strong>：$\Delta = d$，需要仔细分析</li>
      </ul>
    </section>

    <!-- 量子场论中的重整化 -->
    <section class="qft-renormalization">
      <h2>量子场论中的重整化</h2>
      
      <h3>发散的处理</h3>
      <p>量子场论中的紫外发散：</p>
      <ul>
        <li><strong>正规化</strong>：引入截断参数</li>
        <li><strong>重整化</strong>：重新定义参数</li>
        <li><strong>重整化方案</strong>：MS、MS̄方案等</li>
      </ul>

      <h3>重整化群方程</h3>
      <p>Callan-Symanzik方程：</p>
      
      <div class="formula">
        <p>$$\left[\mu \frac{\partial}{\partial \mu} + \beta(g) \frac{\partial}{\partial g} + n\gamma(g)\right] G^{(n)} = 0$$</p>
      </div>
      
      <p>其中 $\mu$ 是重整化标度，$\gamma$ 是反常维度。</p>

      <h3>渐近自由</h3>
      <p>非阿贝尔规范理论的β函数：</p>
      
      <div class="formula">
        <p>$$\beta(g) = -\frac{g^3}{16\pi^2}\left[\frac{11}{3}C_A - \frac{4}{3}T_f n_f\right] + O(g^5)$$</p>
      </div>
      
      <p>当 $\beta(g) < 0$ 时，理论在高能下是渐近自由的。</p>
    </section>

    <!-- 数值重整化群 -->
    <section class="numerical-renormalization">
      <h2>数值重整化群</h2>
      
      <h3>密度矩阵重整化群</h3>
      <p>DMRG方法的基本思想：</p>
      <ol>
        <li><strong>系统分割</strong>：将系统分为两部分</li>
        <li><strong>密度矩阵</strong>：计算约化密度矩阵</li>
        <li><strong>截断</strong>：保留最大本征值对应的态</li>
        <li><strong>迭代</strong>：逐步增大系统尺寸</li>
      </ol>

      <h3>张量重整化群</h3>
      <p>TRG方法处理二维经典系统：</p>
      <ul>
        <li><strong>张量分解</strong>：SVD分解</li>
        <li><strong>指标收缩</strong>：消除内部指标</li>
        <li><strong>粗粒化</strong>：系统尺寸加倍</li>
      </ul>

      <h3>函数重整化群</h3>
      <p>FRG方法研究量子多体系统：</p>
      
      <div class="formula">
        <p>$$\frac{\partial \Gamma_k}{\partial k} = \frac{1}{2} \text{Tr} \left[\frac{\partial R_k}{\partial k} \left(\Gamma_k^{(2)} + R_k\right)^{-1}\right]$$</p>
      </div>
      
      <p>其中 $\Gamma_k$ 是有效作用量，$R_k$ 是调节子。</p>
    </section>

    <!-- 凝聚态中的应用 -->
    <section class="condensed-matter-applications">
      <h2>凝聚态中的应用</h2>
      
      <h3>量子相变</h3>
      <p>零温相变的重整化群分析：</p>
      <ul>
        <li><strong>量子临界点</strong>：$T=0$的相变点</li>
        <li><strong>动力学标度</strong>：时空各向异性</li>
        <li><strong>量子涨落</strong>：海森堡不确定性</li>
      </ul>

      <h3>无序系统</h3>
      <p>Anderson局域化的重整化群：</p>
      
      <div class="formula">
        <p>$$\frac{d\ln g}{d\ln L} = \beta(g) = (d-2) - \frac{1}{g} + \cdots$$</p>
      </div>
      
      <p>其中 $g$ 是无量纲电导。</p>

      <h3>Kondo效应</h3>
      <p>Kondo模型的重整化群流：</p>
      
      <div class="formula">
        <p>$$\frac{dJ}{d\ln D} = -\rho J^2$$</p>
      </div>
      
      <p>其中 $J$ 是Kondo耦合，$D$ 是能量截断，$\rho$ 是态密度。</p>

      <h3>Luttinger液体</h3>
      <p>一维费米系统的重整化群：</p>
      <ul>
        <li><strong>玻色化</strong>：费米子-玻色子对应</li>
        <li><strong>边际算符</strong>：$\cos(\sqrt{8\pi K} \phi)$</li>
        <li><strong>相图</strong>：不同相的稳定性</li>
      </ul>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>现代发展</h2>
      
      <h3>机器学习重整化群</h3>
      <ul>
        <li><strong>神经网络</strong>：学习重整化变换</li>
        <li><strong>变分自编码器</strong>：自动发现相关变量</li>
        <li><strong>深度学习</strong>：多尺度特征提取</li>
        <li><strong>强化学习</strong>：优化重整化策略</li>
      </ul>

      <h3>全息重整化群</h3>
      <p>AdS/CFT对应中的重整化群：</p>
      <ul>
        <li><strong>几何重整化群</strong>：额外维度对应能量尺度</li>
        <li><strong>全息纠缠熵</strong>：Ryu-Takayanagi公式</li>
        <li><strong>全息复杂度</strong>：几何复杂度</li>
      </ul>

      <h3>拓扑重整化群</h3>
      <ul>
        <li><strong>拓扑不变量</strong>：在重整化下的稳定性</li>
        <li><strong>边缘态</strong>：体边对应</li>
        <li><strong>拓扑相变</strong>：拓扑不变量的改变</li>
      </ul>

      <h3>非平衡重整化群</h3>
      <ul>
        <li><strong>Keldysh形式</strong>：非平衡格林函数</li>
        <li><strong>驱动系统</strong>：周期驱动下的重整化</li>
        <li><strong>开放系统</strong>：耗散环境的影响</li>
      </ul>
    </section>

    <!-- 计算方法 -->
    <section class="computational-methods">
      <h2>计算方法</h2>
      
      <h3>蒙特卡罗重整化群</h3>
      <p>结合蒙特卡罗方法的重整化群：</p>
      <ul>
        <li><strong>Swendsen-Wang算法</strong>：团簇更新</li>
        <li><strong>Wolff算法</strong>：单团簇更新</li>
        <li><strong>多格子方法</strong>：多尺度采样</li>
      </ul>

      <h3>精确对角化</h3>
      <p>小系统的精确计算：</p>
      <ul>
        <li><strong>Lanczos方法</strong>：基态和低激发态</li>
        <li><strong>有限尺寸标度</strong>：外推到热力学极限</li>
        <li><strong>对称性利用</strong>：减少计算复杂度</li>
      </ul>

      <h3>量子蒙特卡罗</h3>
      <p>量子系统的数值模拟：</p>
      <ul>
        <li><strong>路径积分蒙特卡罗</strong>：虚时间演化</li>
        <li><strong>随机级数展开</strong>：高温展开</li>
        <li><strong>连续时间QMC</strong>：避免Trotter误差</li>
      </ul>
    </section>

    <!-- 实验验证 -->
    <section class="experimental-verification">
      <h2>实验验证</h2>
      
      <h3>临界指数测量</h3>
      <p>实验测量临界指数的方法：</p>
      <ul>
        <li><strong>磁化率</strong>：$\chi \sim |t|^{-\gamma}$</li>
        <li><strong>比热</strong>：$C \sim |t|^{-\alpha}$</li>
        <li><strong>关联长度</strong>：$\xi \sim |t|^{-\nu}$</li>
        <li><strong>序参量</strong>：$m \sim |t|^\beta$</li>
      </ul>

      <h3>标度函数</h3>
      <p>实验验证标度假设：</p>
      <ul>
        <li><strong>数据坍缩</strong>：不同温度的数据坍缩到一条曲线</li>
        <li><strong>有限尺寸标度</strong>：不同尺寸系统的标度行为</li>
        <li><strong>交叉现象</strong>：不同固定点间的交叉</li>
      </ul>

      <h3>现代实验技术</h3>
      <ul>
        <li><strong>冷原子系统</strong>：可调参数的量子模拟器</li>
        <li><strong>量子点</strong>：人工原子的Kondo效应</li>
        <li><strong>二维材料</strong>：石墨烯中的相变</li>
        <li><strong>超导量子比特</strong>：量子相变的实时观测</li>
      </ul>
    </section>

    <!-- 哲学意义 -->
    <section class="philosophical-implications">
      <h2>哲学意义</h2>
      
      <h3>涌现性</h3>
      <p>重整化群揭示了涌现性的本质：</p>
      <ul>
        <li><strong>宏观性质</strong>：不依赖于微观细节</li>
        <li><strong>普适性</strong>：不同系统的相同行为</li>
        <li><strong>标度不变性</strong>：自相似结构</li>
      </ul>

      <h3>还原论的局限</h3>
      <p>重整化群挑战了传统的还原论观点：</p>
      <ul>
        <li><strong>有效理论</strong>：每个尺度都有自己的理论</li>
        <li><strong>层次结构</strong>：不同层次的物理定律</li>
        <li><strong>信息丢失</strong>：粗粒化过程中的信息损失</li>
      </ul>

      <h3>复杂性科学</h3>
      <p>重整化群在复杂系统中的应用：</p>
      <ul>
        <li><strong>临界现象</strong>：系统边缘的行为</li>
        <li><strong>自组织</strong>：无外部控制的有序形成</li>
        <li><strong>标度律</strong>：幂律分布的普遍性</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>重整化理论作为现代理论物理学的基石，不仅解决了量子场论中的技术问题，更深刻地改变了我们对物理世界的理解。从Wilson的开创性工作到现代的机器学习重整化群，这一理论不断发展，展现出强大的解释力和预测能力。</p>
      
      <p>重整化群的核心思想——系统在不同尺度下的自相似性和普适性——为理解复杂系统提供了统一的框架。无论是临界现象中的标度律，还是量子多体系统中的涌现行为，重整化群都提供了深刻的物理洞察。</p>
      
      <p>在凝聚态物理中，重整化群方法已经成为研究强关联系统、量子相变、拓扑物态等前沿问题的重要工具。随着计算能力的提升和新实验技术的发展，重整化群理论将继续在理解和预测新奇量子现象方面发挥重要作用。</p>
      
      <p>展望未来，重整化群理论与机器学习、量子信息、全息对偶等新兴领域的结合，将为我们理解复杂量子系统开辟新的道路，也将为发展新的量子技术提供理论指导。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Renormalization',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.renormalization-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #9b59b6;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #9b59b6;
  padding-left: 15px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.formula {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
}

.formula p {
  margin: 5px 0;
}

section {
  margin-bottom: 40px;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul, ol {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

strong {
  color: #2c3e50;
}

.overview {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.basic-concepts {
  border-left: 4px solid #3498db;
}

.real-space-renormalization {
  border-left: 4px solid #27ae60;
}

.momentum-space-renormalization {
  border-left: 4px solid #e74c3c;
}

.critical-phenomena {
  border-left: 4px solid #f39c12;
}

.universality {
  border-left: 4px solid #1abc9c;
}

.qft-renormalization {
  border-left: 4px solid #34495e;
}

.numerical-renormalization {
  border-left: 4px solid #16a085;
}

.condensed-matter-applications {
  border-left: 4px solid #2980b9;
}

.modern-developments {
  border-left: 4px solid #d35400;
}

.computational-methods {
  border-left: 4px solid #e91e63;
}

.experimental-verification {
  border-left: 4px solid #795548;
}

.philosophical-implications {
  border-left: 4px solid #607d8b;
}

.conclusion {
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .renormalization-page {
    padding: 10px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  section {
    padding: 15px;
  }
}
</style>