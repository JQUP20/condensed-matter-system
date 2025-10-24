<template>
  <div class="chapter-content">
    <h1>12.2.4 电磁场的路径积分形式</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        路径积分方法是量子场论的重要工具，它提供了一种直观且强大的方式来描述量子系统的演化。
        对于电磁场，路径积分形式不仅能够重现正则量子化的结果，还为理解规范不变性、
        拓扑效应和非微扰现象提供了独特的视角。这种方法在量子电动力学、规范场论和
        凝聚态物理中都有广泛应用。
      </p>
    </section>

    <section class="path-integral-basics">
      <h2>路径积分基础</h2>
      
      <h3>量子力学中的路径积分</h3>
      <p>量子力学中，从初态到末态的跃迁振幅为：</p>
      <katex-element expression="\langle q_f, t_f | q_i, t_i \rangle = \int \mathcal{D}q(t) \exp\left(\frac{i}{\hbar} S[q(t)]\right)"></katex-element>
      
      <p>其中作用量为：</p>
      <katex-element expression="S[q(t)] = \int_{t_i}^{t_f} L(q, \dot{q}, t) dt"></katex-element>

      <h3>场论中的路径积分</h3>
      <p>在场论中，路径积分推广为对所有场构型的积分：</p>
      <katex-element expression="Z = \int \mathcal{D}\phi \exp\left(\frac{i}{\hbar} S[\phi]\right)"></katex-element>
      
      <p>其中 <katex-element expression="S[\phi]"></katex-element> 是场的作用量。</p>

      <h3>生成泛函</h3>
      <p>在外源存在下的生成泛函：</p>
      <katex-element expression="Z[J] = \int \mathcal{D}\phi \exp\left(\frac{i}{\hbar} \left(S[\phi] + \int J(x) \phi(x) d^4x\right)\right)"></katex-element>
      
      <p>关联函数可以通过对生成泛函求导得到：</p>
      <katex-element expression="\langle \phi(x_1) \cdots \phi(x_n) \rangle = \frac{1}{Z[0]} \frac{\delta^n Z[J]}{\delta J(x_1) \cdots \delta J(x_n)}\bigg|_{J=0}"></katex-element>
    </section>

    <section class="electromagnetic-action">
      <h2>电磁场作用量</h2>
      
      <h3>Maxwell作用量</h3>
      <p>自由电磁场的作用量为：</p>
      <katex-element expression="S_{EM} = -\frac{1}{4\mu_0} \int F_{\mu\nu} F^{\mu\nu} d^4x"></katex-element>
      
      <p>其中场张量为：</p>
      <katex-element expression="F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu"></katex-element>

      <h3>显式形式</h3>
      <p>用矢量势表示的作用量：</p>
      <katex-element expression="S_{EM} = \frac{1}{2} \int \left[\epsilon_0 E^2 - \frac{1}{\mu_0} B^2\right] d^4x"></katex-element>
      
      <p>其中：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{E} = -\nabla A_0 - \frac{\partial \mathbf{A}}{\partial t}"></katex-element>
        <katex-element expression="\mathbf{B} = \nabla \times \mathbf{A}"></katex-element>
      </div>

      <h3>与源的耦合</h3>
      <p>电磁场与电流的相互作用：</p>
      <katex-element expression="S_{int} = \int J^\mu A_\mu d^4x = \int (\rho A_0 - \mathbf{J} \cdot \mathbf{A}) d^4x"></katex-element>
      
      <p>总作用量为：</p>
      <katex-element expression="S_{total} = S_{EM} + S_{int}"></katex-element>
    </section>

    <section class="gauge-fixing">
      <h2>规范固定</h2>
      
      <h3>规范冗余</h3>
      <p>电磁场具有规范不变性：</p>
      <katex-element expression="A_\mu \rightarrow A_\mu + \partial_\mu \Lambda"></katex-element>
      
      <p>这导致路径积分中的无穷大因子，需要规范固定。</p>

      <h3>Faddeev-Popov方法</h3>
      <p>引入规范固定条件 <katex-element expression="G[A] = 0"></katex-element>，路径积分变为：</p>
      <katex-element expression="Z = \int \mathcal{D}A_\mu \delta(G[A]) \det\left(\frac{\delta G}{\delta \Lambda}\right) \exp\left(\frac{i}{\hbar} S[A]\right)"></katex-element>

      <h3>常用规范</h3>
      <div class="equation-block">
        <p><strong>库仑规范：</strong><katex-element expression="\nabla \cdot \mathbf{A} = 0"></katex-element></p>
        <p><strong>洛伦兹规范：</strong><katex-element expression="\partial_\mu A^\mu = 0"></katex-element></p>
        <p><strong>轴规范：</strong><katex-element expression="n^\mu A_\mu = 0"></katex-element></p>
      </div>

      <h3>规范固定项</h3>
      <p>在洛伦兹规范中，添加规范固定项：</p>
      <katex-element expression="S_{gf} = -\frac{1}{2\xi} \int (\partial_\mu A^\mu)^2 d^4x"></katex-element>
      <p>其中 <katex-element expression="\xi"></katex-element> 是规范参数。</p>
    </section>

    <section class="photon-propagator">
      <h2>光子传播子</h2>
      
      <h3>自由光子传播子</h3>
      <p>在洛伦兹规范中，光子传播子为：</p>
      <katex-element expression="D_{\mu\nu}(k) = \frac{-i}{k^2 + i\epsilon} \left(g_{\mu\nu} - (1-\xi)\frac{k_\mu k_\nu}{k^2}\right)"></katex-element>

      <h3>费曼规范</h3>
      <p>选择 <katex-element expression="\xi = 1"></katex-element>（费曼规范），传播子简化为：</p>
      <katex-element expression="D_{\mu\nu}(k) = \frac{-i g_{\mu\nu}}{k^2 + i\epsilon}"></katex-element>

      <h3>物理极化</h3>
      <p>在库仑规范中，只有横向模式传播：</p>
      <katex-element expression="D_{ij}(k) = \frac{-i}{k^2 + i\epsilon} \left(\delta_{ij} - \frac{k_i k_j}{k^2}\right)"></katex-element>
      
      <p>这确保了只有物理的横向光子模式参与传播。</p>
    </section>

    <section class="functional-methods">
      <h2>泛函方法</h2>
      
      <h3>有效作用量</h3>
      <p>有效作用量定义为生成泛函的勒让德变换：</p>
      <katex-element expression="\Gamma[\phi_c] = W[J] - \int J(x) \phi_c(x) d^4x"></katex-element>
      
      <p>其中 <katex-element expression="\phi_c = \frac{\delta W}{\delta J}"></katex-element> 是经典场。</p>

      <h3>1PI图</h3>
      <p>有效作用量的展开对应于1PI（单粒子不可约）图的贡献：</p>
      <katex-element expression="\Gamma[\phi_c] = S[\phi_c] + \hbar \Gamma^{(1)}[\phi_c] + \hbar^2 \Gamma^{(2)}[\phi_c] + \cdots"></katex-element>

      <h3>重整化</h3>
      <p>量子修正通常包含发散，需要重整化：</p>
      <div class="equation-block">
        <p><strong>裸参数：</strong><katex-element expression="g_0 = Z_g g_r"></katex-element></p>
        <p><strong>重整化条件：</strong>在某个标度 <katex-element expression="\mu"></katex-element> 处固定物理参数</p>
      </div>
    </section>

    <section class="wick-rotation">
      <h2>Wick转动</h2>
      
      <h3>欧几里得时空</h3>
      <p>通过Wick转动 <katex-element expression="t \rightarrow -i\tau"></katex-element>，转到欧几里得时空：</p>
      <katex-element expression="S_E = -iS_M = \frac{1}{4} \int F_{\mu\nu}^E F_{\mu\nu}^E d^4x_E"></katex-element>

      <h3>欧几里得路径积分</h3>
      <p>欧几里得路径积分为：</p>
      <katex-element expression="Z_E = \int \mathcal{D}A_\mu \exp(-S_E[A])"></katex-element>
      
      <p>这是正定的，便于数值计算和非微扰分析。</p>

      <h3>瞬子解</h3>
      <p>欧几里得时空中的经典解（瞬子）对应于隧穿过程：</p>
      <katex-element expression="S_E[A_{inst}] = \frac{8\pi^2}{g^2}"></katex-element>
      
      <p>瞬子贡献为：</p>
      <katex-element expression="\sim \exp\left(-\frac{8\pi^2}{g^2}\right)"></katex-element>
    </section>

    <section class="background-field">
      <h2>背景场方法</h2>
      
      <h3>背景场分解</h3>
      <p>将场分解为背景场和量子涨落：</p>
      <katex-element expression="A_\mu = \bar{A}_\mu + a_\mu"></katex-element>
      
      <p>其中 <katex-element expression="\bar{A}_\mu"></katex-element> 是背景场，<katex-element expression="a_\mu"></katex-element> 是量子涨落。</p>

      <h3>背景场规范</h3>
      <p>选择保持背景场规范不变性的规范条件：</p>
      <katex-element expression="D_\mu^{(\bar{A})} a^\mu = 0"></katex-element>
      
      <p>其中 <katex-element expression="D_\mu^{(\bar{A})}"></katex-element> 是背景协变导数。</p>

      <h3>有效作用量</h3>
      <p>背景场的有效作用量具有明显的规范不变性：</p>
      <katex-element expression="\Gamma[\bar{A}] = S[\bar{A}] + \hbar \Gamma^{(1)}[\bar{A}] + \cdots"></katex-element>
    </section>

    <section class="anomalies">
      <h2>反常</h2>
      
      <h3>经典对称性的破缺</h3>
      <p>量子修正可能破坏经典理论的对称性，这称为反常。</p>

      <h3>手征反常</h3>
      <p>在有手征费米子的理论中，轴矢量流不守恒：</p>
      <katex-element expression="\partial_\mu j_5^\mu = \frac{g^2}{16\pi^2} F_{\mu\nu} \tilde{F}^{\mu\nu}"></katex-element>
      
      <p>其中 <katex-element expression="\tilde{F}^{\mu\nu} = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma} F_{\rho\sigma}"></katex-element> 是对偶张量。</p>

      <h3>Adler-Bell-Jackiw反常</h3>
      <p>这是最著名的反常，与拓扑性质相关：</p>
      <katex-element expression="\langle \partial_\mu j_5^\mu \rangle = \frac{e^2}{16\pi^2} F_{\mu\nu} \tilde{F}^{\mu\nu}"></katex-element>

      <h3>反常的物理后果</h3>
      <ul>
        <li>π⁰ → 2γ 衰变</li>
        <li>η → 2γ 衰变</li>
        <li>Wess-Zumino项</li>
      </ul>
    </section>

    <section class="topological-effects">
      <h2>拓扑效应</h2>
      
      <h3>θ-真空</h3>
      <p>QCD中的θ-项：</p>
      <katex-element expression="S_\theta = \frac{\theta g^2}{32\pi^2} \int F_{\mu\nu} \tilde{F}^{\mu\nu} d^4x"></katex-element>
      
      <p>这导致CP破坏和强CP问题。</p>

      <h3>Chern-Simons项</h3>
      <p>三维时空中的拓扑项：</p>
      <katex-element expression="S_{CS} = \frac{k}{4\pi} \int \epsilon^{\mu\nu\rho} A_\mu \partial_\nu A_\rho d^3x"></katex-element>

      <h3>拓扑荷</h3>
      <p>瞬子的拓扑荷：</p>
      <katex-element expression="Q = \frac{g^2}{32\pi^2} \int F_{\mu\nu} \tilde{F}^{\mu\nu} d^4x"></katex-element>
      
      <p>对于单瞬子，<katex-element expression="Q = 1"></katex-element>。</p>
    </section>

    <section class="condensed-matter">
      <h2>凝聚态物理应用</h2>
      
      <h3>量子霍尔效应</h3>
      <p>二维电子气在磁场中的有效理论：</p>
      <katex-element expression="S_{eff} = \frac{\nu e^2}{2\pi h} \int \epsilon^{\mu\nu\rho} a_\mu \partial_\nu a_\rho d^3x"></katex-element>
      
      <p>其中 <katex-element expression="\nu"></katex-element> 是填充因子。</p>

      <h3>拓扑绝缘体</h3>
      <p>表面态的有效作用量：</p>
      <katex-element expression="S_{surf} = \int \bar{\psi} i\gamma^\mu D_\mu \psi d^3x + \frac{\alpha e^2}{2\pi} \int A \wedge dA"></katex-element>

      <h3>超导体</h3>
      <p>Ginzburg-Landau理论的路径积分形式：</p>
      <katex-element expression="Z = \int \mathcal{D}\psi \mathcal{D}A \exp\left(-\int \left[|\mathcal{D}\psi|^2 + \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2\mu_0}B^2\right] d^3x\right)"></katex-element>
    </section>

    <section class="computational-methods">
      <h2>计算方法</h2>
      
      <h3>蒙特卡罗方法</h3>
      <p>在欧几里得时空中，可以用蒙特卡罗方法计算路径积分：</p>
      <katex-element expression="\langle O \rangle = \frac{\int \mathcal{D}A \, O[A] e^{-S_E[A]}}{\int \mathcal{D}A \, e^{-S_E[A]}}"></katex-element>

      <h3>格点规范理论</h3>
      <p>在离散时空格点上定义规范场：</p>
      <katex-element expression="U_\mu(n) = \exp(iga_\mu A_\mu(n))"></katex-element>
      
      <p>Wilson作用量：</p>
      <katex-element expression="S_W = \beta \sum_{plaquette} \text{Re}\text{Tr}(1 - U_P)"></katex-element>

      <h3>重整化群</h3>
      <p>β函数描述耦合常数的标度依赖：</p>
      <katex-element expression="\beta(g) = \mu \frac{\partial g}{\partial \mu} = -b_0 g^3 - b_1 g^5 + \cdots"></katex-element>
    </section>

    <section class="advanced-topics">
      <h2>高级主题</h2>
      
      <h3>超对称电动力学</h3>
      <p>N=1超对称QED的作用量：</p>
      <katex-element expression="S = \int d^4x d^2\theta \left[\frac{1}{4g^2} W^\alpha W_\alpha + \bar{\Phi} e^{2gV} \Phi\right] + \text{h.c.}"></katex-element>

      <h3>非对易电动力学</h3>
      <p>非对易时空上的电磁场理论：</p>
      <katex-element expression="S = \frac{1}{4g^2} \int F_{\mu\nu} \star F^{\mu\nu} d^4x"></katex-element>
      <p>其中 ★ 是Moyal乘积。</p>

      <h3>AdS/CFT对应</h3>
      <p>规范场论与引力理论的对偶关系：</p>
      <katex-element expression="Z_{CFT}[J] = Z_{gravity}[J|_{boundary}]"></katex-element>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        电磁场的路径积分形式为我们提供了一个强大而灵活的理论框架，不仅能够处理
        微扰计算，还能够研究非微扰现象、拓扑效应和反常。这种方法在现代理论物理
        的各个分支中都发挥着重要作用，从量子电动力学到凝聚态物理，从宇宙学到
        弦理论。路径积分方法的美妙之处在于它将量子力学的概率诠释与经典物理的
        作用量原理统一起来，为理解自然界的基本规律提供了深刻的洞察。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_2_4',
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