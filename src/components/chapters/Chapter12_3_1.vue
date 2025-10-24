<template>
  <div class="chapter-content">
    <h1>12.3.1 Dirac费米子</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        Dirac费米子是相对论性量子力学和量子场论的基石，它们描述了自旋为1/2的
        相对论性粒子。Dirac方程不仅成功地统一了量子力学和狭义相对论，还预言了
        反粒子的存在。在凝聚态物理中，Dirac费米子出现在石墨烯、拓扑绝缘体、
        Weyl半金属等材料中，为理解这些新奇量子物态提供了重要的理论框架。
      </p>
    </section>

    <section class="dirac-equation">
      <h2>Dirac方程</h2>
      
      <h3>方程的推导</h3>
      <p>为了得到相对论性的一阶微分方程，Dirac假设哈密顿量的线性形式：</p>
      <katex-element expression="H = c \boldsymbol{\alpha} \cdot \mathbf{p} + \beta mc^2"></katex-element>
      
      <p>其中 <katex-element expression="\boldsymbol{\alpha}"></katex-element> 和 <katex-element expression="\beta"></katex-element> 是待定的矩阵。</p>

      <h3>反对易关系</h3>
      <p>为了满足相对论性能量-动量关系，这些矩阵必须满足：</p>
      <div class="equation-block">
        <katex-element expression="\{\alpha_i, \alpha_j\} = 2\delta_{ij}"></katex-element>
        <katex-element expression="\{\alpha_i, \beta\} = 0"></katex-element>
        <katex-element expression="\beta^2 = 1"></katex-element>
      </div>

      <h3>Dirac矩阵</h3>
      <p>在标准表示中，Dirac矩阵为：</p>
      <div class="equation-block">
        <katex-element expression="\alpha_i = \begin{pmatrix} 0 & \sigma_i \\ \sigma_i & 0 \end{pmatrix}, \quad \beta = \begin{pmatrix} I & 0 \\ 0 & -I \end{pmatrix}"></katex-element>
      </div>
      
      <p>其中 <katex-element expression="\sigma_i"></katex-element> 是Pauli矩阵。</p>

      <h3>协变形式</h3>
      <p>Dirac方程的协变形式为：</p>
      <katex-element expression="(i\gamma^\mu \partial_\mu - m)\psi = 0"></katex-element>
      
      <p>其中 <katex-element expression="\gamma^\mu"></katex-element> 是Dirac γ矩阵：</p>
      <katex-element expression="\gamma^0 = \beta, \quad \gamma^i = \beta \alpha_i"></katex-element>
    </section>

    <section class="gamma-matrices">
      <h2>γ矩阵</h2>
      
      <h3>反对易关系</h3>
      <p>γ矩阵满足Clifford代数：</p>
      <katex-element expression="\{\gamma^\mu, \gamma^\nu\} = 2g^{\mu\nu}"></katex-element>
      
      <p>其中 <katex-element expression="g^{\mu\nu} = \text{diag}(1, -1, -1, -1)"></katex-element> 是Minkowski度规。</p>

      <h3>γ⁵矩阵</h3>
      <p>手征矩阵定义为：</p>
      <katex-element expression="\gamma^5 = i\gamma^0 \gamma^1 \gamma^2 \gamma^3 = \begin{pmatrix} 0 & I \\ I & 0 \end{pmatrix}"></katex-element>
      
      <p>它满足：</p>
      <div class="equation-block">
        <katex-element expression="\{\gamma^5, \gamma^\mu\} = 0"></katex-element>
        <katex-element expression="(\gamma^5)^2 = 1"></katex-element>
      </div>

      <h3>其他重要矩阵</h3>
      <p>反对称张量：</p>
      <katex-element expression="\sigma^{\mu\nu} = \frac{i}{2}[\gamma^\mu, \gamma^\nu]"></katex-element>
      
      <p>这些矩阵构成了Dirac代数的完整基础。</p>
    </section>

    <section class="solutions">
      <h2>Dirac方程的解</h2>
      
      <h3>平面波解</h3>
      <p>自由Dirac方程的平面波解为：</p>
      <katex-element expression="\psi(x) = u(p) e^{-ip \cdot x} + v(p) e^{ip \cdot x}"></katex-element>
      
      <p>其中 <katex-element expression="u(p)"></katex-element> 和 <katex-element expression="v(p)"></katex-element> 是四分量旋量。</p>

      <h3>正能量解</h3>
      <p>正能量解满足：</p>
      <katex-element expression="(\gamma^\mu p_\mu - m) u(p) = 0"></katex-element>
      
      <p>在静止系中：</p>
      <katex-element expression="u(p=0) = \sqrt{m} \begin{pmatrix} \xi \\ \xi \end{pmatrix}"></katex-element>
      
      <p>其中 <katex-element expression="\xi"></katex-element> 是二分量旋量。</p>

      <h3>负能量解</h3>
      <p>负能量解满足：</p>
      <katex-element expression="(\gamma^\mu p_\mu + m) v(p) = 0"></katex-element>
      
      <p>在静止系中：</p>
      <katex-element expression="v(p=0) = \sqrt{m} \begin{pmatrix} \eta \\ -\eta \end{pmatrix}"></katex-element>
    </section>

    <section class="spinor-properties">
      <h2>旋量性质</h2>
      
      <h3>归一化条件</h3>
      <p>Dirac旋量的归一化条件为：</p>
      <div class="equation-block">
        <katex-element expression="\bar{u}(p) u(p) = 2m"></katex-element>
        <katex-element expression="\bar{v}(p) v(p) = -2m"></katex-element>
        <katex-element expression="\bar{u}(p) v(p) = 0"></katex-element>
      </div>
      
      <p>其中 <katex-element expression="\bar{\psi} = \psi^\dagger \gamma^0"></katex-element> 是Dirac共轭。</p>

      <h3>完备性关系</h3>
      <p>正负能量旋量的完备性关系：</p>
      <div class="equation-block">
        <katex-element expression="\sum_s u^s(p) \bar{u}^s(p) = \gamma^\mu p_\mu + m"></katex-element>
        <katex-element expression="\sum_s v^s(p) \bar{v}^s(p) = \gamma^\mu p_\mu - m"></katex-element>
      </div>

      <h3>投影算符</h3>
      <p>正负能量投影算符：</p>
      <div class="equation-block">
        <katex-element expression="\Lambda_+(p) = \frac{\gamma^\mu p_\mu + m}{2m}"></katex-element>
        <katex-element expression="\Lambda_-(p) = \frac{\gamma^\mu p_\mu - m}{2m}"></katex-element>
      </div>
    </section>

    <section class="chirality">
      <h2>手征性</h2>
      
      <h3>手征投影算符</h3>
      <p>左手和右手投影算符：</p>
      <div class="equation-block">
        <katex-element expression="P_L = \frac{1 - \gamma^5}{2}, \quad P_R = \frac{1 + \gamma^5}{2}"></katex-element>
      </div>

      <h3>手征旋量</h3>
      <p>任何Dirac旋量可以分解为左手和右手部分：</p>
      <katex-element expression="\psi = \psi_L + \psi_R = P_L \psi + P_R \psi"></katex-element>
      
      <p>在无质量极限下，左手和右手旋量解耦。</p>

      <h3>Weyl表示</h3>
      <p>在Weyl表示中，γ⁵是对角的：</p>
      <katex-element expression="\gamma^5 = \begin{pmatrix} -I & 0 \\ 0 & I \end{pmatrix}"></katex-element>
      
      <p>这使得手征性更加明显。</p>
    </section>

    <section class="lorentz-transformation">
      <h2>洛伦兹变换</h2>
      
      <h3>旋量的变换</h3>
      <p>在洛伦兹变换下，Dirac旋量按如下规律变换：</p>
      <katex-element expression="\psi'(x') = S(\Lambda) \psi(x)"></katex-element>
      
      <p>其中 <katex-element expression="S(\Lambda)"></katex-element> 是旋量表示矩阵。</p>

      <h3>生成元</h3>
      <p>洛伦兹群的生成元为：</p>
      <katex-element expression="S^{\mu\nu} = \frac{i}{4}[\gamma^\mu, \gamma^\nu]"></katex-element>
      
      <p>它们满足洛伦兹代数的对易关系。</p>

      <h3>有限变换</h3>
      <p>有限洛伦兹变换为：</p>
      <katex-element expression="S(\Lambda) = \exp\left(\frac{i}{2}\omega_{\mu\nu} S^{\mu\nu}\right)"></katex-element>
      
      <p>其中 <katex-element expression="\omega_{\mu\nu}"></katex-element> 是变换参数。</p>
    </section>

    <section class="bilinear-covariants">
      <h2>双线性协变量</h2>
      
      <h3>五种基本双线性形式</h3>
      <p>Dirac旋量可以构成五种独立的双线性协变量：</p>
      <div class="equation-block">
        <p><strong>标量：</strong><katex-element expression="\bar{\psi}\psi"></katex-element></p>
        <p><strong>赝标量：</strong><katex-element expression="\bar{\psi}\gamma^5\psi"></katex-element></p>
        <p><strong>矢量：</strong><katex-element expression="\bar{\psi}\gamma^\mu\psi"></katex-element></p>
        <p><strong>轴矢量：</strong><katex-element expression="\bar{\psi}\gamma^\mu\gamma^5\psi"></katex-element></p>
        <p><strong>张量：</strong><katex-element expression="\bar{\psi}\sigma^{\mu\nu}\psi"></katex-element></p>
      </div>

      <h3>变换性质</h3>
      <p>这些双线性形式在洛伦兹变换下具有相应的变换性质：</p>
      <ul>
        <li>标量和赝标量保持不变</li>
        <li>矢量和轴矢量按相应规律变换</li>
        <li>张量按二阶张量变换</li>
      </ul>

      <h3>Gordon恒等式</h3>
      <p>重要的恒等式：</p>
      <katex-element expression="\bar{u}(p')\gamma^\mu u(p) = \bar{u}(p')\left[\frac{p'^\mu + p^\mu}{2m} + \frac{i\sigma^{\mu\nu}(p' - p)_\nu}{2m}\right]u(p)"></katex-element>
    </section>

    <section class="electromagnetic-coupling">
      <h2>电磁耦合</h2>
      
      <h3>最小耦合</h3>
      <p>Dirac粒子与电磁场的耦合通过最小耦合实现：</p>
      <katex-element expression="\partial_\mu \rightarrow D_\mu = \partial_\mu + ieA_\mu"></katex-element>
      
      <p>耦合后的Dirac方程为：</p>
      <katex-element expression="(i\gamma^\mu D_\mu - m)\psi = 0"></katex-element>

      <h3>电流密度</h3>
      <p>Dirac粒子的电流密度为：</p>
      <katex-element expression="j^\mu = e\bar{\psi}\gamma^\mu\psi"></katex-element>
      
      <p>它满足连续性方程：</p>
      <katex-element expression="\partial_\mu j^\mu = 0"></katex-element>

      <h3>磁矩</h3>
      <p>Dirac粒子的磁矩为：</p>
      <katex-element expression="\boldsymbol{\mu} = g\mu_B \mathbf{S}"></katex-element>
      
      <p>其中g因子恰好等于2，这是Dirac理论的重要预言。</p>
    </section>

    <section class="condensed-matter">
      <h2>凝聚态物理中的Dirac费米子</h2>
      
      <h3>石墨烯</h3>
      <p>石墨烯中的低能激发可以用二维Dirac方程描述：</p>
      <katex-element expression="H = v_F (\sigma_x p_x + \sigma_y p_y)"></katex-element>
      
      <p>其中 <katex-element expression="v_F"></katex-element> 是费米速度，约为光速的1/300。</p>

      <h3>拓扑绝缘体表面态</h3>
      <p>三维拓扑绝缘体的表面态哈密顿量：</p>
      <katex-element expression="H = v_F (\sigma_x p_y - \sigma_y p_x)"></katex-element>
      
      <p>这描述了螺旋性锁定的Dirac费米子。</p>

      <h3>Weyl半金属</h3>
      <p>Weyl半金属中的Weyl费米子是三维的手征费米子：</p>
      <katex-element expression="H = \pm v_F \boldsymbol{\sigma} \cdot \mathbf{p}"></katex-element>
      
      <p>±号对应不同手征性的Weyl点。</p>
    </section>

    <section class="quantum-field-theory">
      <h2>量子场论中的Dirac场</h2>
      
      <h3>场的量子化</h3>
      <p>Dirac场的反对易关系：</p>
      <katex-element expression="\{\psi_\alpha(\mathbf{x}), \psi_\beta^\dagger(\mathbf{y})\} = \delta^3(\mathbf{x} - \mathbf{y})\delta_{\alpha\beta}"></katex-element>

      <h3>模式展开</h3>
      <p>Dirac场的模式展开：</p>
      <katex-element expression="\psi(x) = \sum_{\mathbf{p},s} \left[a_{\mathbf{p}}^s u^s(p) e^{-ip \cdot x} + b_{\mathbf{p}}^{s\dagger} v^s(p) e^{ip \cdot x}\right]"></katex-element>

      <h3>费米子数算符</h3>
      <p>费米子数算符：</p>
      <katex-element expression="N = \sum_{\mathbf{p},s} (a_{\mathbf{p}}^{s\dagger} a_{\mathbf{p}}^s - b_{\mathbf{p}}^{s\dagger} b_{\mathbf{p}}^s)"></katex-element>
      
      <p>这确保了费米子数守恒。</p>
    </section>

    <section class="anomalies">
      <h2>反常</h2>
      
      <h3>手征反常</h3>
      <p>在量子层面，手征对称性可能被破坏：</p>
      <katex-element expression="\partial_\mu j_5^\mu = \frac{e^2}{16\pi^2} F_{\mu\nu} \tilde{F}^{\mu\nu}"></katex-element>
      
      <p>这是著名的Adler-Bell-Jackiw反常。</p>

      <h3>反常的物理后果</h3>
      <ul>
        <li>π⁰ → 2γ 衰变</li>
        <li>手征磁效应</li>
        <li>拓扑绝缘体中的磁电效应</li>
      </ul>

      <h3>反常抵消</h3>
      <p>在标准模型中，不同费米子的反常相互抵消，保证理论的一致性。</p>
    </section>

    <section class="applications">
      <h2>物理应用</h2>
      
      <h3>高能物理</h3>
      <ul>
        <li><strong>标准模型：</strong>夸克和轻子都是Dirac费米子</li>
        <li><strong>中微子物理：</strong>可能是Dirac或Majorana费米子</li>
        <li><strong>超对称：</strong>费米子超伴子</li>
      </ul>

      <h3>凝聚态物理</h3>
      <ul>
        <li><strong>拓扑材料：</strong>表面态和边缘态</li>
        <li><strong>量子自旋液体：</strong>分数化激发</li>
        <li><strong>超导体：</strong>Bogoliubov准粒子</li>
      </ul>

      <h3>量子计算</h3>
      <ul>
        <li><strong>拓扑量子计算：</strong>Majorana费米子</li>
        <li><strong>量子模拟：</strong>人工Dirac系统</li>
        <li><strong>量子纠错：</strong>费米子编码</li>
      </ul>
    </section>

    <section class="experimental-signatures">
      <h2>实验特征</h2>
      
      <h3>输运性质</h3>
      <p>Dirac费米子的独特输运性质：</p>
      <ul>
        <li>线性色散关系</li>
        <li>Klein隧穿效应</li>
        <li>最小电导率</li>
      </ul>

      <h3>光学性质</h3>
      <p>光学吸收的普适行为：</p>
      <katex-element expression="\sigma_{xx} = \frac{e^2}{4\hbar}"></katex-element>
      
      <p>这是石墨烯的普适光学电导率。</p>

      <h3>量子振荡</h3>
      <p>在磁场中的Landau能级：</p>
      <katex-element expression="E_n = \pm v_F \sqrt{2e\hbar B n}"></katex-element>
      
      <p>导致独特的量子振荡行为。</p>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        Dirac费米子作为相对论性量子力学的基础，不仅在高能物理中发挥核心作用，
        也在凝聚态物理中展现出丰富的物理现象。从石墨烯到拓扑绝缘体，从Weyl
        半金属到量子自旋液体，Dirac费米子的概念为理解这些新奇量子物态提供了
        统一的理论框架。随着实验技术的进步和理论的深入发展，Dirac费米子必将
        在未来的物理学研究中继续发挥重要作用，特别是在量子材料和量子技术的
        发展中。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_3_1',
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