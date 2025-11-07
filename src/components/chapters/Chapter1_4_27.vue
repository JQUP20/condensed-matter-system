<template>
  <div class="lattice-gauge-page">
    <h1>晶格规范场 (Lattice Gauge Field)</h1>
    
    <!-- 概述与历史背景 -->
    <section class="overview">
      <h2>概述与历史背景</h2>
      <p>晶格规范场理论是将连续时空中的规范场理论离散化到晶格上的理论框架，由Kenneth Wilson在1974年提出。这一理论不仅为非阿贝尔规范理论提供了非微扰的计算方法，也在凝聚态物理中找到了重要应用，特别是在描述强关联电子系统和量子自旋液体方面。晶格规范场理论保持了规范不变性这一核心对称性，为理解禁闭、手征对称性破缺等现象提供了重要工具。</p>
      
      <h3>历史发展</h3>
      <ul>
        <li><strong>1974年</strong>：Wilson提出晶格规范理论</li>
        <li><strong>1975年</strong>：Wilson环和面积定律的提出</li>
        <li><strong>1980年代</strong>：数值模拟方法的发展</li>
        <li><strong>1990年代</strong>：在凝聚态物理中的应用</li>
        <li><strong>2000年代</strong>：量子自旋液体的晶格规范理论</li>
        <li><strong>2010年代至今</strong>：冷原子系统中的实验实现</li>
      </ul>
    </section>

    <!-- 基本概念 -->
    <section class="basic-concepts">
      <h2>基本概念</h2>
      
      <h3>规范不变性</h3>
      <p>规范不变性是物理定律在局域变换下保持不变的性质：</p>
      
      <div class="formula">
        <p><strong>规范变换：</strong> $\psi(x) \to e^{i\alpha(x)} \psi(x)$</p>
        <p><strong>规范场变换：</strong> $A_\mu(x) \to A_\mu(x) + \partial_\mu \alpha(x)$</p>
      </div>
      
      <p>在晶格上，规范变换变为：</p>
      
      <div class="formula">
        <p>$$\psi_i \to g_i \psi_i, \quad U_{ij} \to g_i U_{ij} g_j^{-1}$$</p>
      </div>
      
      <p>其中 $g_i \in G$ 是规范群的元素，$U_{ij}$ 是连接格点的规范场。</p>

      <h3>晶格结构</h3>
      <p>晶格规范理论的基本要素：</p>
      <ul>
        <li><strong>格点</strong>：物质场（费米子、标量场）的位置</li>
        <li><strong>连接</strong>：规范场变量，定义在格点之间的连线上</li>
        <li><strong>面</strong>：Wilson环的基本构成单元</li>
        <li><strong>体</strong>：高维晶格中的基本单元</li>
      </ul>

      <h3>规范群</h3>
      <p>常见的规范群：</p>
      <ul>
        <li><strong>U(1)</strong>：阿贝尔规范群，电磁相互作用</li>
        <li><strong>SU(2)</strong>：弱相互作用，自旋1/2系统</li>
        <li><strong>SU(3)</strong>：强相互作用，量子色动力学</li>
        <li><strong>Z₂</strong>：离散规范群，Ising规范理论</li>
      </ul>
    </section>

    <!-- Wilson作用量 -->
    <section class="wilson-action">
      <h2>Wilson作用量</h2>
      
      <h3>纯规范理论</h3>
      <p>Wilson作用量是晶格规范理论的基本作用量：</p>
      
      <div class="formula">
        <p>$$S_W = \beta \sum_{\text{plaquettes}} \text{Re} \text{Tr} U_P$$</p>
      </div>
      
      <p>其中 $U_P$ 是围绕基本方格的Wilson环：</p>
      
      <div class="formula">
        <p>$$U_P = U_{ij} U_{jk} U_{kl} U_{li}$$</p>
      </div>

      <h3>连续极限</h3>
      <p>当晶格间距 $a \to 0$ 时，Wilson作用量趋向于连续的Yang-Mills作用量：</p>
      
      <div class="formula">
        <p>$$S_{YM} = \frac{1}{4g^2} \int d^4x \text{Tr} F_{\mu\nu} F^{\mu\nu}$$</p>
      </div>
      
      <p>其中 $\beta = 2N/g^2$，$N$ 是规范群的维度。</p>

      <h3>物质场的耦合</h3>
      <p>费米子场的晶格作用量：</p>
      
      <div class="formula">
        <p>$$S_f = \sum_{i,j} \bar{\psi}_i D_{ij} \psi_j + m \sum_i \bar{\psi}_i \psi_i$$</p>
      </div>
      
      <p>其中协变导数为：$D_{ij} = U_{ij} \delta_{\langle i,j \rangle}$</p>
    </section>

    <!-- Wilson环 -->
    <section class="wilson-loops">
      <h2>Wilson环</h2>
      
      <h3>定义与性质</h3>
      <p>Wilson环是沿闭合路径的规范场乘积：</p>
      
      <div class="formula">
        <p>$$W(C) = \text{Tr} \prod_{(i,j) \in C} U_{ij}$$</p>
      </div>
      
      <p>Wilson环具有规范不变性：</p>
      
      <div class="formula">
        <p>$$W(C) \to \text{Tr} \left( g_i \prod_{(i,j) \in C} U_{ij} g_i^{-1} \right) = W(C)$$</p>
      </div>

      <h3>面积定律与周长定律</h3>
      <p>Wilson环的期望值行为决定了相的性质：</p>
      
      <div class="formula">
        <p><strong>禁闭相（面积定律）：</strong> $\langle W(C) \rangle \sim e^{-\sigma A(C)}$</p>
        <p><strong>去禁闭相（周长定律）：</strong> $\langle W(C) \rangle \sim e^{-\mu P(C)}$</p>
      </div>
      
      <p>其中 $A(C)$ 是环围成的面积，$P(C)$ 是环的周长，$\sigma$ 是弦张力。</p>

      <h3>Polyakov环</h3>
      <p>在有限温度下，时间方向的Wilson环：</p>
      
      <div class="formula">
        <p>$$P(\vec{x}) = \text{Tr} \prod_{t=0}^{N_t-1} U_t(\vec{x})$$</p>
      </div>
      
      <p>Polyakov环的期望值是去禁闭相变的序参量。</p>
    </section>

    <!-- 相结构 -->
    <section class="phase-structure">
      <h2>相结构</h2>
      
      <h3>强耦合展开</h3>
      <p>在强耦合极限（$\beta \to 0$）下：</p>
      <ul>
        <li><strong>禁闭相</strong>：Wilson环满足面积定律</li>
        <li><strong>质量间隙</strong>：所有激发都有有限质量</li>
        <li><strong>手征对称性破缺</strong>：费米子获得动力学质量</li>
      </ul>

      <h3>弱耦合展开</h3>
      <p>在弱耦合极限（$\beta \to \infty$）下：</p>
      <ul>
        <li><strong>去禁闭相</strong>：Wilson环满足周长定律</li>
        <li><strong>微扰理论</strong>：连续理论的结果</li>
        <li><strong>渐近自由</strong>：耦合常数的重整化群流</li>
      </ul>

      <h3>相变</h3>
      <p>不同维度下的相变性质：</p>
      <ul>
        <li><strong>2+1维</strong>：连续相变，共形不变性</li>
        <li><strong>3+1维</strong>：一阶相变（纯规范理论）</li>
        <li><strong>有限温度</strong>：去禁闭相变</li>
      </ul>
    </section>

    <!-- 数值方法 -->
    <section class="numerical-methods">
      <h2>数值方法</h2>
      
      <h3>蒙特卡罗方法</h3>
      <p>晶格规范理论的数值模拟：</p>
      <ul>
        <li><strong>重要性采样</strong>：按Boltzmann权重采样</li>
        <li><strong>Metropolis算法</strong>：局域更新</li>
        <li><strong>热浴算法</strong>：精确的局域更新</li>
        <li><strong>过松弛算法</strong>：减少自关联时间</li>
      </ul>

      <h3>混合蒙特卡罗</h3>
      <p>处理费米子的方法：</p>
      
      <div class="formula">
        <p>$$\det D[U] = \int \mathcal{D}\psi \mathcal{D}\bar{\psi} e^{-\bar{\psi} D[U] \psi}$$</p>
      </div>
      
      <ul>
        <li><strong>赝费米子</strong>：用玻色场模拟费米子行列式</li>
        <li><strong>分子动力学</strong>：哈密顿演化</li>
        <li><strong>多时间尺度</strong>：不同作用量项的分离</li>
      </ul>

      <h3>改进算法</h3>
      <ul>
        <li><strong>多格子方法</strong>：加速长距离模式</li>
        <li><strong>团簇算法</strong>：非局域更新</li>
        <li><strong>Lüscher-Weisz作用量</strong>：减少格点赝迹</li>
      </ul>
    </section>

    <!-- 凝聚态应用 -->
    <section class="condensed-matter-applications">
      <h2>凝聚态应用</h2>
      
      <h3>量子自旋液体</h3>
      <p>自旋液体的规范理论描述：</p>
      
      <div class="formula">
        <p><strong>slave-particle表示：</strong> $S_i^+ = f_{i\uparrow}^\dagger f_{i\downarrow}$</p>
        <p><strong>约束条件：</strong> $f_{i\uparrow}^\dagger f_{i\uparrow} + f_{i\downarrow}^\dagger f_{i\downarrow} = 1$</p>
      </div>
      
      <ul>
        <li><strong>U(1)规范场</strong>：spinon的规范场</li>
        <li><strong>Z₂规范场</strong>：拓扑序的描述</li>
        <li><strong>分数化激发</strong>：spinon和vison</li>
      </ul>

      <h3>高温超导</h3>
      <p>t-J模型的规范理论：</p>
      
      <div class="formula">
        <p>$$H = -t \sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + J \sum_{\langle i,j \rangle} \vec{S}_i \cdot \vec{S}_j$$</p>
      </div>
      
      <ul>
        <li><strong>holon-spinon分离</strong>：电荷和自旋的分离</li>
        <li><strong>RVB态</strong>：共振价键态</li>
        <li><strong>d波配对</strong>：非常规超导机制</li>
      </ul>

      <h3>分数量子霍尔效应</h3>
      <p>Chern-Simons规范理论：</p>
      
      <div class="formula">
        <p>$$\mathcal{L} = \bar{\psi} (i\gamma^\mu D_\mu - m) \psi + \frac{\theta}{4\pi} \epsilon^{\mu\nu\rho} A_\mu \partial_\nu A_\rho$$</p>
      </div>
      
      <ul>
        <li><strong>复合费米子</strong>：电子与磁通的束缚态</li>
        <li><strong>拓扑序</strong>：长程纠缠的量子态</li>
        <li><strong>anyonic激发</strong>：分数统计</li>
      </ul>
    </section>

    <!-- 拓扑性质 -->
    <section class="topological-properties">
      <h2>拓扑性质</h2>
      
      <h3>拓扑荷</h3>
      <p>规范场的拓扑性质：</p>
      
      <div class="formula">
        <p><strong>瞬子数：</strong> $Q = \frac{1}{32\pi^2} \int d^4x \text{Tr} F_{\mu\nu} \tilde{F}^{\mu\nu}$$</p>
      </div>
      
      <p>在晶格上通过几何定义计算拓扑荷。</p>

      <h3>θ真空</h3>
      <p>包含拓扑项的作用量：</p>
      
      <div class="formula">
        <p>$$S = S_{YM} + i\theta Q$$</p>
      </div>
      
      <p>θ项导致CP对称性的破缺和强CP问题。</p>

      <h3>拓扑相变</h3>
      <ul>
        <li><strong>去禁闭相变</strong>：中心对称性的破缺</li>
        <li><strong>手征相变</strong>：手征对称性的恢复</li>
        <li><strong>拓扑相变</strong>：拓扑荷易化率的变化</li>
      </ul>
    </section>

    <!-- 有限温度与密度 -->
    <section class="finite-temperature-density">
      <h2>有限温度与密度</h2>
      
      <h3>有限温度形式</h3>
      <p>欧几里得时间的紧化：</p>
      
      <div class="formula">
        <p><strong>温度：</strong> $T = 1/(N_t a_t)$</p>
        <p><strong>配分函数：</strong> $Z = \text{Tr} e^{-\beta H}$</p>
      </div>
      
      <p>时间方向的边界条件决定了统计性质。</p>

      <h3>化学势</h3>
      <p>有限密度的处理：</p>
      
      <div class="formula">
        <p>$$D_t \to D_t + \mu \gamma_0$$</p>
      </div>
      
      <ul>
        <li><strong>符号问题</strong>：复数行列式的困难</li>
        <li><strong>重权重方法</strong>：解析延拓</li>
        <li><strong>虚化学势</strong>：避免符号问题</li>
      </ul>

      <h3>QCD相图</h3>
      <p>温度-化学势平面的相结构：</p>
      <ul>
        <li><strong>夸克胶子等离子体</strong>：高温去禁闭相</li>
        <li><strong>色超导</strong>：高密度配对相</li>
        <li><strong>临界点</strong>：一阶相变线的终点</li>
      </ul>
    </section>

    <!-- 实验实现 -->
    <section class="experimental-realizations">
      <h2>实验实现</h2>
      
      <h3>冷原子系统</h3>
      <p>光晶格中的规范场模拟：</p>
      <ul>
        <li><strong>人工规范场</strong>：激光辅助隧穿</li>
        <li><strong>动力学规范场</strong>：约束动力学</li>
        <li><strong>Z₂规范理论</strong>：Rydberg原子阵列</li>
      </ul>

      <h3>量子模拟器</h3>
      <p>专用量子设备：</p>
      <ul>
        <li><strong>超导量子比特</strong>：可编程哈密顿量</li>
        <li><strong>离子阱</strong>：长程相互作用</li>
        <li><strong>光子系统</strong>：拓扑保护</li>
      </ul>

      <h3>固体系统</h3>
      <p>天然的规范场系统：</p>
      <ul>
        <li><strong>量子自旋冰</strong>：pyrochlore晶格</li>
        <li><strong>Kitaev材料</strong>：蜂窝晶格上的Z₂规范场</li>
        <li><strong>分数量子霍尔系统</strong>：二维电子气</li>
      </ul>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>现代发展</h2>
      
      <h3>机器学习方法</h3>
      <ul>
        <li><strong>神经网络波函数</strong>：变分蒙特卡罗</li>
        <li><strong>生成模型</strong>：配置生成</li>
        <li><strong>相变识别</strong>：无监督学习</li>
        <li><strong>重整化群</strong>：机器学习辅助</li>
      </ul>

      <h3>量子计算</h3>
      <ul>
        <li><strong>量子算法</strong>：Hamiltonian模拟</li>
        <li><strong>变分量子本征求解器</strong>：NISQ算法</li>
        <li><strong>量子退火</strong>：优化问题</li>
        <li><strong>容错量子计算</strong>：大规模模拟</li>
      </ul>

      <h3>张量网络</h3>
      <ul>
        <li><strong>PEPS</strong>：二维系统的精确表示</li>
        <li><strong>TNR</strong>：张量网络重整化</li>
        <li><strong>MERA</strong>：多尺度纠缠</li>
        <li><strong>规范不变张量</strong>：对称性保护</li>
      </ul>

      <h3>非平衡动力学</h3>
      <ul>
        <li><strong>量子淬火</strong>：非绝热演化</li>
        <li><strong>Floquet工程</strong>：周期驱动</li>
        <li><strong>开放系统</strong>：耗散动力学</li>
        <li><strong>多体局域化</strong>：热化失效</li>
      </ul>
    </section>

    <!-- 理论前沿 -->
    <section class="theoretical-frontiers">
      <h2>理论前沿</h2>
      
      <h3>全息对偶</h3>
      <p>AdS/CFT对应在规范理论中的应用：</p>
      <ul>
        <li><strong>强耦合动力学</strong>：引力双重描述</li>
        <li><strong>禁闭机制</strong>：黑洞几何</li>
        <li><strong>有限温度</strong>：Hawking-Page相变</li>
        <li><strong>纠缠结构</strong>：几何熵</li>
      </ul>

      <h3>拓扑量子场论</h3>
      <ul>
        <li><strong>Chern-Simons理论</strong>：三维拓扑不变量</li>
        <li><strong>BF理论</strong>：拓扑序的描述</li>
        <li><strong>Walker-Wang模型</strong>：三维拓扑序</li>
        <li><strong>分类理论</strong>：对称性保护拓扑态</li>
      </ul>

      <h3>量子信息视角</h3>
      <ul>
        <li><strong>纠缠熵</strong>：面积定律</li>
        <li><strong>量子纠错</strong>：拓扑码</li>
        <li><strong>量子复杂度</strong>：计算复杂性</li>
        <li><strong>量子混沌</strong>：信息扰乱</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="conclusion">
      <h2>总结</h2>
      <p>晶格规范场理论作为连接高能物理和凝聚态物理的重要桥梁，为理解强相互作用系统提供了强有力的理论工具。从Wilson的原创性工作到现代的量子模拟实验，晶格规范理论不断发展，展现出深刻的物理内涵和广泛的应用前景。</p>
      
      <p>在凝聚态物理中，晶格规范理论为理解量子自旋液体、高温超导、分数量子霍尔效应等强关联现象提供了统一的理论框架。规范不变性作为基本对称性，不仅保证了理论的自洽性，也揭示了物质的深层结构和相互作用机制。</p>
      
      <p>随着实验技术的进步，特别是冷原子系统和量子模拟器的发展，晶格规范理论的预言正在得到直接的实验验证。同时，机器学习、量子计算等新兴技术为晶格规范理论的研究注入了新的活力，开辟了前所未有的研究可能性。</p>
      
      <p>展望未来，晶格规范理论将继续在理解量子多体系统、发展量子技术、探索新奇物态等方面发挥重要作用，为人类认识和利用量子世界提供更深入的理论指导。</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LatticeGaugeField',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.lattice-gauge-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #27ae60;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-left: 4px solid #27ae60;
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
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  color: white;
}

.overview h2, .overview h3 {
  color: white;
  border-left-color: white;
}

.basic-concepts {
  border-left: 4px solid #3498db;
}

.wilson-action {
  border-left: 4px solid #9b59b6;
}

.wilson-loops {
  border-left: 4px solid #e74c3c;
}

.phase-structure {
  border-left: 4px solid #f39c12;
}

.numerical-methods {
  border-left: 4px solid #1abc9c;
}

.condensed-matter-applications {
  border-left: 4px solid #34495e;
}

.topological-properties {
  border-left: 4px solid #8e44ad;
}

.finite-temperature-density {
  border-left: 4px solid #16a085;
}

.experimental-realizations {
  border-left: 4px solid #2980b9;
}

.modern-developments {
  border-left: 4px solid #d35400;
}

.theoretical-frontiers {
  border-left: 4px solid #e91e63;
}

.conclusion {
  background: linear-gradient(135deg, #27ae60 0%, #229954 100%);
  color: white;
}

.conclusion h2 {
  color: white;
  border-left-color: white;
}

@media (max-width: 768px) {
  .lattice-gauge-page {
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