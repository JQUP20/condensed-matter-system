<template>
  <div class="chapter-content">
    <h1>12.3.2 Dirac费米子的关联函数</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        关联函数是量子场论中的核心概念，它们编码了系统的所有物理信息。对于Dirac费米子，
        关联函数不仅描述了粒子的传播行为，还揭示了费米子统计、因果性和相对论不变性等
        基本性质。在凝聚态物理中，费米子关联函数为理解电子系统的输运性质、相变行为和
        拓扑性质提供了重要工具。本章将系统介绍Dirac费米子关联函数的定义、性质和计算方法。
      </p>
    </section>

    <section class="green-functions">
      <h2>Green函数</h2>
      
      <h3>定义</h3>
      <p>Dirac费米子的Green函数定义为：</p>
      <katex-element expression="G(x-y) = \langle 0 | T[\psi(x)\bar{\psi}(y)] | 0 \rangle"></katex-element>
      
      <p>其中T是时间排序算符：</p>
      <katex-element expression="T[\psi(x)\bar{\psi}(y)] = \begin{cases} 
      \psi(x)\bar{\psi}(y) & \text{if } x^0 > y^0 \\
      -\bar{\psi}(y)\psi(x) & \text{if } x^0 < y^0
      \end{cases}"></katex-element>

      <h3>运动方程</h3>
      <p>Green函数满足Dirac方程：</p>
      <katex-element expression="(i\gamma^\mu \partial_\mu - m) G(x-y) = \delta^4(x-y)"></katex-element>
      
      <p>这是Green函数的基本微分方程。</p>

      <h3>动量空间表示</h3>
      <p>在动量空间中，自由费米子的Green函数为：</p>
      <katex-element expression="G(p) = \frac{i}{\gamma^\mu p_\mu - m + i\epsilon} = \frac{i(\gamma^\mu p_\mu + m)}{p^2 - m^2 + i\epsilon}"></katex-element>
      
      <p>其中 <katex-element expression="\epsilon \to 0^+"></katex-element> 是无穷小正数。</p>
    </section>

    <section class="feynman-propagator">
      <h2>Feynman传播子</h2>
      
      <h3>因果传播子</h3>
      <p>Feynman传播子是因果Green函数：</p>
      <katex-element expression="S_F(x-y) = \langle 0 | T[\psi(x)\bar{\psi}(y)] | 0 \rangle"></katex-element>
      
      <p>它描述了费米子从y点传播到x点的振幅。</p>

      <h3>积分表示</h3>
      <p>Feynman传播子的积分表示：</p>
      <katex-element expression="S_F(x-y) = \int \frac{d^4p}{(2\pi)^4} \frac{i(\gamma^\mu p_\mu + m)}{p^2 - m^2 + i\epsilon} e^{-ip(x-y)}"></katex-element>

      <h3>极点结构</h3>
      <p>传播子的极点位于：</p>
      <katex-element expression="p^0 = \pm \sqrt{\mathbf{p}^2 + m^2} \mp i\epsilon"></katex-element>
      
      <p>正能量极点在下半平面，负能量极点在上半平面。</p>

      <h3>残基定理</h3>
      <p>利用残基定理可以计算传播子：</p>
      <div class="equation-block">
        <p><strong>正时序：</strong><katex-element expression="x^0 > y^0"></katex-element>，选择下半平面极点</p>
        <p><strong>负时序：</strong><katex-element expression="x^0 < y^0"></katex-element>，选择上半平面极点</p>
      </div>
    </section>

    <section class="spectral-representation">
      <h2>谱表示</h2>
      
      <h3>Källén-Lehmann表示</h3>
      <p>相互作用理论中的传播子可以写成谱表示：</p>
      <katex-element expression="G(p) = \int_0^\infty d\mu^2 \frac{\rho(\mu^2)}{\gamma^\mu p_\mu - \mu + i\epsilon}"></katex-element>
      
      <p>其中 <katex-element expression="\rho(\mu^2)"></katex-element> 是谱密度函数。</p>

      <h3>谱密度的性质</h3>
      <p>谱密度满足：</p>
      <div class="equation-block">
        <katex-element expression="\rho(\mu^2) \geq 0"></katex-element>
        <katex-element expression="\int_0^\infty d\mu^2 \rho(\mu^2) = 1"></katex-element>
      </div>

      <h3>单粒子极点</h3>
      <p>如果存在稳定的单粒子态，谱表示包含极点项：</p>
      <katex-element expression="G(p) = \frac{iZ}{\gamma^\mu p_\mu - m_{phys} + i\epsilon} + \text{连续谱}"></katex-element>
      
      <p>其中Z是波函数重整化常数。</p>
    </section>

    <section class="thermal-green-functions">
      <h2>有限温度Green函数</h2>
      
      <h3>Matsubara Green函数</h3>
      <p>有限温度下的虚时Green函数：</p>
      <katex-element expression="G(\tau, \mathbf{x}) = -\langle T_\tau [\psi(\tau, \mathbf{x})\bar{\psi}(0, \mathbf{0})] \rangle"></katex-element>
      
      <p>其中 <katex-element expression="T_\tau"></katex-element> 是虚时时间排序算符。</p>

      <h3>Matsubara频率</h3>
      <p>费米子的Matsubara频率为：</p>
      <katex-element expression="\omega_n = (2n+1)\pi T, \quad n = 0, \pm 1, \pm 2, \ldots"></katex-element>
      
      <p>这反映了费米子的反周期边界条件。</p>

      <h3>频率求和</h3>
      <p>Matsubara频率求和公式：</p>
      <katex-element expression="T \sum_n f(i\omega_n) = \oint \frac{dz}{2\pi i} f(z) n_F(z)"></katex-element>
      
      <p>其中 <katex-element expression="n_F(z) = \frac{1}{e^{z/T} + 1}"></katex-element> 是费米分布函数。</p>

      <h3>解析延拓</h3>
      <p>从虚时Green函数到实时Green函数的解析延拓：</p>
      <katex-element expression="G^R(\omega, \mathbf{k}) = G(i\omega_n \to \omega + i0^+, \mathbf{k})"></katex-element>
    </section>

    <section class="retarded-advanced">
      <h2>推迟和超前Green函数</h2>
      
      <h3>定义</h3>
      <p>推迟和超前Green函数定义为：</p>
      <div class="equation-block">
        <katex-element expression="G^R(x-y) = -i\theta(x^0-y^0)\langle\{\psi(x), \bar{\psi}(y)\}\rangle"></katex-element>
        <katex-element expression="G^A(x-y) = i\theta(y^0-x^0)\langle\{\psi(x), \bar{\psi}(y)\}\rangle"></katex-element>
      </div>

      <h3>因果性</h3>
      <p>推迟Green函数只依赖于过去的源，超前Green函数只依赖于未来的源：</p>
      <ul>
        <li><katex-element expression="G^R(x-y) = 0"></katex-element> 当 <katex-element expression="x^0 < y^0"></katex-element></li>
        <li><katex-element expression="G^A(x-y) = 0"></katex-element> 当 <katex-element expression="x^0 > y^0"></katex-element></li>
      </ul>

      <h3>关系式</h3>
      <p>各种Green函数之间的关系：</p>
      <div class="equation-block">
        <katex-element expression="G^A(\omega, \mathbf{k}) = [G^R(\omega, \mathbf{k})]^*"></katex-element>
        <katex-element expression="G^R(\omega, \mathbf{k}) - G^A(\omega, \mathbf{k}) = 2i \text{Im} G^R(\omega, \mathbf{k})"></katex-element>
      </div>
    </section>

    <section class="correlation-functions">
      <h2>关联函数</h2>
      
      <h3>二点关联函数</h3>
      <p>最基本的二点关联函数：</p>
      <katex-element expression="C(x-y) = \langle \psi(x) \bar{\psi}(y) \rangle"></katex-element>
      
      <p>它描述了费米子在不同时空点的关联。</p>

      <h3>高阶关联函数</h3>
      <p>四点关联函数：</p>
      <katex-element expression="C_4(x_1, x_2, x_3, x_4) = \langle T[\psi(x_1)\bar{\psi}(x_2)\psi(x_3)\bar{\psi}(x_4)] \rangle"></katex-element>
      
      <p>通过Wick定理可以分解为二点函数的乘积。</p>

      <h3>连通关联函数</h3>
      <p>连通四点函数定义为：</p>
      <katex-element expression="C_4^c = C_4 - C_2 \otimes C_2"></katex-element>
      
      <p>它描述了真正的四体关联效应。</p>
    </section>

    <section class="ward-identities">
      <h2>Ward恒等式</h2>
      
      <h3>规范不变性</h3>
      <p>规范不变性导致Ward恒等式：</p>
      <katex-element expression="k_\mu \Gamma^\mu(p, p') = S^{-1}(p) - S^{-1}(p')"></katex-element>
      
      <p>其中 <katex-element expression="\Gamma^\mu"></katex-element> 是顶点函数，<katex-element expression="S"></katex-element> 是完全传播子。</p>

      <h3>手征Ward恒等式</h3>
      <p>手征对称性（在无质量情况下）导致：</p>
      <katex-element expression="\partial_\mu \langle j_5^\mu(x) \psi(y) \bar{\psi}(z) \rangle = 2m \langle \psi(y) \bar{\psi}(z) \rangle \delta^4(x-y) - 2m \langle \psi(y) \bar{\psi}(z) \rangle \delta^4(x-z)"></katex-element>

      <h3>Slavnov-Taylor恒等式</h3>
      <p>在非阿贝尔规范理论中的推广：</p>
      <katex-element expression="\frac{\delta \Gamma}{\delta \alpha^a} + \frac{\delta \Gamma}{\delta A_\mu^a} \frac{\delta S_{gf}}{\delta \alpha^a} = 0"></katex-element>
    </section>

    <section class="dyson-equation">
      <h2>Dyson方程</h2>
      
      <h3>自能</h3>
      <p>完全传播子与自能的关系：</p>
      <katex-element expression="G^{-1}(p) = G_0^{-1}(p) - \Sigma(p)"></katex-element>
      
      <p>其中 <katex-element expression="\Sigma(p)"></katex-element> 是自能。</p>

      <h3>Dyson方程</h3>
      <p>完全传播子满足Dyson方程：</p>
      <katex-element expression="G(p) = G_0(p) + G_0(p) \Sigma(p) G(p)"></katex-element>
      
      <p>这是传播子的积分方程。</p>

      <h3>自能的物理意义</h3>
      <p>自能描述了粒子与环境的相互作用：</p>
      <ul>
        <li><strong>实部：</strong>能量修正和波函数重整化</li>
        <li><strong>虚部：</strong>准粒子寿命和衰减率</li>
      </ul>

      <h3>准粒子近似</h3>
      <p>在准粒子极点附近：</p>
      <katex-element expression="G(p) \approx \frac{iZ}{p_0 - \varepsilon_p + i\Gamma_p}"></katex-element>
      
      <p>其中 <katex-element expression="Z = [1 - \partial \Sigma/\partial p_0]^{-1}"></katex-element>，<katex-element expression="\Gamma_p = Z \text{Im}\Sigma"></katex-element>。</p>
    </section>

    <section class="vertex-functions">
      <h2>顶点函数</h2>
      
      <h3>三点顶点</h3>
      <p>电磁相互作用的三点顶点函数：</p>
      <katex-element expression="\Gamma^\mu(p', p) = \gamma^\mu + \Lambda^\mu(p', p)"></katex-element>
      
      <p>其中 <katex-element expression="\Lambda^\mu"></katex-element> 是顶点修正。</p>

      <h3>Bethe-Salpeter方程</h3>
      <p>束缚态的Bethe-Salpeter方程：</p>
      <katex-element expression="\Phi(p_1, p_2) = \int \frac{d^4k}{(2\pi)^4} K(p_1, p_2; k_1, k_2) G(k_1) G(k_2) \Phi(k_1, k_2)"></katex-element>

      <h3>梯形近似</h3>
      <p>在梯形近似下，核函数为：</p>
      <katex-element expression="K = -ie^2 \gamma^\mu \otimes \gamma^\nu D_{\mu\nu}"></katex-element>
      
      <p>这对应于单光子交换。</p>
    </section>

    <section class="condensed-matter-applications">
      <h2>凝聚态物理应用</h2>
      
      <h3>电子液体</h3>
      <p>费米液体理论中的准粒子Green函数：</p>
      <katex-element expression="G(\mathbf{k}, \omega) = \frac{Z_k}{\omega - \varepsilon_k + i\text{sgn}(\omega)\delta}"></katex-element>
      
      <p>其中 <katex-element expression="Z_k"></katex-element> 是准粒子权重。</p>

      <h3>超导体</h3>
      <p>超导态的Nambu Green函数：</p>
      <katex-element expression="\mathcal{G} = \begin{pmatrix} G_{11} & G_{12} \\ G_{21} & G_{22} \end{pmatrix}"></katex-element>
      
      <p>其中非对角元描述了Cooper对的形成。</p>

      <h3>拓扑绝缘体</h3>
      <p>表面态的Green函数：</p>
      <katex-element expression="G_s(\mathbf{k}, \omega) = \frac{\omega + v_F(\sigma_x k_y - \sigma_y k_x)}{\omega^2 - v_F^2 k^2 + i0^+}"></katex-element>
      
      <p>展现了螺旋性锁定的特征。</p>
    </section>

    <section class="numerical-methods">
      <h2>数值方法</h2>
      
      <h3>量子蒙特卡罗</h3>
      <p>路径积分蒙特卡罗方法计算关联函数：</p>
      <katex-element expression="\langle O \rangle = \frac{\int \mathcal{D}\psi \mathcal{D}\bar{\psi} \, O[\psi, \bar{\psi}] e^{-S[\psi, \bar{\psi}]}}{\int \mathcal{D}\psi \mathcal{D}\bar{\psi} \, e^{-S[\psi, \bar{\psi}]}}"></katex-element>

      <h3>符号问题</h3>
      <p>费米子的反对易性导致符号问题：</p>
      <ul>
        <li>行列式可能为负</li>
        <li>统计误差指数增长</li>
        <li>需要特殊算法处理</li>
      </ul>

      <h3>最大熵方法</h3>
      <p>从虚时数据重构实频谱：</p>
      <katex-element expression="S[\rho] = -\int d\omega \rho(\omega) \ln\frac{\rho(\omega)}{m(\omega)} + \alpha \chi^2[\rho]"></katex-element>
      
      <p>其中 <katex-element expression="m(\omega)"></katex-element> 是默认模型。</p>
    </section>

    <section class="experimental-probes">
      <h2>实验探测</h2>
      
      <h3>角分辨光电子谱</h3>
      <p>ARPES测量单粒子谱函数：</p>
      <katex-element expression="A(\mathbf{k}, \omega) = -\frac{1}{\pi} \text{Im} G^R(\mathbf{k}, \omega)"></katex-element>
      
      <p>直接观测费米面和能带结构。</p>

      <h3>扫描隧道显微镜</h3>
      <p>STM测量局域态密度：</p>
      <katex-element expression="N(\mathbf{r}, \omega) = -\frac{1}{\pi} \text{Im} G^R(\mathbf{r}, \mathbf{r}, \omega)"></katex-element>

      <h3>中子散射</h3>
      <p>非弹性中子散射探测动力学结构因子：</p>
      <katex-element expression="S(\mathbf{q}, \omega) = \int dt e^{i\omega t} \langle \rho(\mathbf{q}, t) \rho(-\mathbf{q}, 0) \rangle"></katex-element>
    </section>

    <section class="advanced-topics">
      <h2>高级主题</h2>
      
      <h3>非平衡Green函数</h3>
      <p>Keldysh形式主义中的Green函数矩阵：</p>
      <katex-element expression="\mathcal{G} = \begin{pmatrix} G^{++} & G^{+-} \\ G^{-+} & G^{--} \end{pmatrix}"></katex-element>
      
      <p>描述非平衡系统的动力学。</p>

      <h3>强关联系统</h3>
      <p>动力学平均场理论中的自洽方程：</p>
      <katex-element expression="G_{loc}(\omega) = \int d\varepsilon \frac{N(\varepsilon)}{\omega - \varepsilon - \Sigma(\omega)}"></katex-element>

      <h3>拓扑不变量</h3>
      <p>从Green函数计算拓扑不变量：</p>
      <katex-element expression="C = \frac{1}{2\pi i} \oint dk \text{Tr}[G^{-1}(k) \partial_k G(k)]"></katex-element>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        Dirac费米子的关联函数是量子场论和凝聚态物理的核心工具，它们不仅编码了
        系统的基本物理性质，还为理解复杂的多体现象提供了理论基础。从基本的
        Green函数到复杂的多点关联函数，从平衡态到非平衡态，从弱耦合到强耦合，
        这些概念和方法在现代物理学的各个分支中都发挥着重要作用。随着计算技术
        的发展和实验手段的进步，关联函数的理论和应用必将在未来的物理学研究中
        继续发挥关键作用。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_3_2',
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
  font-family: 'Times New Roman', serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

h2 {
  color: #34495e;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 8px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

h3 {
  color: #2980b9;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

.equation-block {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.equation-block p {
  margin: 10px 0;
  font-weight: bold;
  color: #2c3e50;
}

section {
  margin-bottom: 40px;
}

.introduction {
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid #3498db;
  margin-bottom: 30px;
}

ul {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
  line-height: 1.5;
}

li strong {
  color: #e74c3c;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

.summary {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #bdc3c7;
  margin-top: 40px;
}

.summary p {
  font-size: 1.1em;
  font-weight: 500;
  color: #2c3e50;
}
</style>