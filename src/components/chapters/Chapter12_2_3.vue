<template>
  <div class="chapter-content">
    <h1>12.2.3 电磁场的量子哈密顿量</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        电磁场的量子化是量子场论的基础，它将经典的电磁场描述转换为量子力学框架。
        通过构建电磁场的量子哈密顿量，我们可以理解光子的产生和湮灭、真空涨落、
        以及电磁场与物质的相互作用。这一理论框架不仅是量子电动力学的基础，
        也为理解凝聚态物理中的多体问题和集体激发提供了重要工具。
      </p>
    </section>

    <section class="classical-hamiltonian">
      <h2>经典电磁场哈密顿量</h2>
      
      <h3>电磁场能量密度</h3>
      <p>经典电磁场的能量密度为：</p>
      <katex-element expression="u = \frac{1}{2}\left(\epsilon_0 E^2 + \frac{1}{\mu_0} B^2\right)"></katex-element>
      
      <p>总能量为：</p>
      <katex-element expression="H = \int u \, d^3r = \frac{1}{2}\int \left(\epsilon_0 E^2 + \frac{1}{\mu_0} B^2\right) d^3r"></katex-element>

      <h3>用势表示的哈密顿量</h3>
      <p>在库仑规范 <katex-element expression="\nabla \cdot \mathbf{A} = 0"></katex-element> 下：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}"></katex-element>
        <katex-element expression="\mathbf{B} = \nabla \times \mathbf{A}"></katex-element>
      </div>
      
      <p>哈密顿量可以写为：</p>
      <katex-element expression="H = \frac{1}{2}\int \left[\epsilon_0 \left(\frac{\partial \mathbf{A}}{\partial t}\right)^2 + \frac{1}{\mu_0}(\nabla \times \mathbf{A})^2\right] d^3r"></katex-element>
    </section>

    <section class="canonical-quantization">
      <h2>正则量子化</h2>
      
      <h3>正则动量</h3>
      <p>矢量势的正则动量为：</p>
      <katex-element expression="\boldsymbol{\Pi}(\mathbf{r}) = \frac{\delta \mathcal{L}}{\delta (\partial_t \mathbf{A})} = -\epsilon_0 \frac{\partial \mathbf{A}}{\partial t} = \epsilon_0 \mathbf{E}"></katex-element>

      <h3>正则对易关系</h3>
      <p>量子化后，场算符满足正则对易关系：</p>
      <div class="equation-block">
        <katex-element expression="[\hat{A}_i(\mathbf{r}), \hat{\Pi}_j(\mathbf{r}')] = i\hbar \delta_{ij} \delta^3(\mathbf{r} - \mathbf{r}')"></katex-element>
        <katex-element expression="[\hat{A}_i(\mathbf{r}), \hat{A}_j(\mathbf{r}')] = 0"></katex-element>
        <katex-element expression="[\hat{\Pi}_i(\mathbf{r}), \hat{\Pi}_j(\mathbf{r}')] = 0"></katex-element>
      </div>

      <h3>量子哈密顿量</h3>
      <p>量子化的哈密顿量为：</p>
      <katex-element expression="\hat{H} = \frac{1}{2}\int \left[\frac{1}{\epsilon_0}\hat{\boldsymbol{\Pi}}^2 + \frac{1}{\mu_0}(\nabla \times \hat{\mathbf{A}})^2\right] d^3r"></katex-element>
    </section>

    <section class="mode-expansion">
      <h2>模式展开</h2>
      
      <h3>平面波基</h3>
      <p>在库仑规范下，矢量势可以展开为平面波：</p>
      <katex-element expression="\hat{\mathbf{A}}(\mathbf{r}) = \sum_{\mathbf{k},\lambda} \sqrt{\frac{\hbar}{2\epsilon_0 \omega_k V}} \left[\hat{a}_{\mathbf{k}\lambda} \boldsymbol{\epsilon}_{\mathbf{k}\lambda} e^{i\mathbf{k} \cdot \mathbf{r}} + \hat{a}_{\mathbf{k}\lambda}^\dagger \boldsymbol{\epsilon}_{\mathbf{k}\lambda}^* e^{-i\mathbf{k} \cdot \mathbf{r}}\right]"></katex-element>
      
      <p>其中：</p>
      <ul>
        <li><katex-element expression="\omega_k = c|\mathbf{k}|"></katex-element> 是色散关系</li>
        <li><katex-element expression="\boldsymbol{\epsilon}_{\mathbf{k}\lambda}"></katex-element> 是偏振矢量（<katex-element expression="\lambda = 1, 2"></katex-element>）</li>
        <li><katex-element expression="\mathbf{k} \cdot \boldsymbol{\epsilon}_{\mathbf{k}\lambda} = 0"></katex-element>（横波条件）</li>
      </ul>

      <h3>产生湮灭算符</h3>
      <p>产生湮灭算符满足玻色对易关系：</p>
      <div class="equation-block">
        <katex-element expression="[\hat{a}_{\mathbf{k}\lambda}, \hat{a}_{\mathbf{k}'\lambda'}^\dagger] = \delta_{\mathbf{k}\mathbf{k}'} \delta_{\lambda\lambda'}"></katex-element>
        <katex-element expression="[\hat{a}_{\mathbf{k}\lambda}, \hat{a}_{\mathbf{k}'\lambda'}] = 0"></katex-element>
        <katex-element expression="[\hat{a}_{\mathbf{k}\lambda}^\dagger, \hat{a}_{\mathbf{k}'\lambda'}^\dagger] = 0"></katex-element>
      </div>

      <h3>对角化的哈密顿量</h3>
      <p>用模式展开，哈密顿量对角化为：</p>
      <katex-element expression="\hat{H} = \sum_{\mathbf{k},\lambda} \hbar \omega_k \left(\hat{a}_{\mathbf{k}\lambda}^\dagger \hat{a}_{\mathbf{k}\lambda} + \frac{1}{2}\right)"></katex-element>
      
      <p>这表明电磁场可以看作无穷多个独立的量子谐振子。</p>
    </section>

    <section class="photon-states">
      <h2>光子态</h2>
      
      <h3>真空态</h3>
      <p>真空态定义为：</p>
      <katex-element expression="\hat{a}_{\mathbf{k}\lambda} |0\rangle = 0, \quad \forall \mathbf{k}, \lambda"></katex-element>
      
      <p>真空能量为：</p>
      <katex-element expression="E_0 = \langle 0|\hat{H}|0\rangle = \frac{1}{2}\sum_{\mathbf{k},\lambda} \hbar \omega_k"></katex-element>

      <h3>单光子态</h3>
      <p>单光子态由产生算符作用于真空态得到：</p>
      <katex-element expression="|\mathbf{k},\lambda\rangle = \hat{a}_{\mathbf{k}\lambda}^\dagger |0\rangle"></katex-element>
      
      <p>能量本征值为：</p>
      <katex-element expression="\hat{H}|\mathbf{k},\lambda\rangle = \hbar \omega_k |\mathbf{k},\lambda\rangle"></katex-element>

      <h3>多光子态</h3>
      <p>n光子态为：</p>
      <katex-element expression="|n_{\mathbf{k}\lambda}\rangle = \frac{(\hat{a}_{\mathbf{k}\lambda}^\dagger)^n}{\sqrt{n!}} |0\rangle"></katex-element>
      
      <p>粒子数算符：</p>
      <katex-element expression="\hat{n}_{\mathbf{k}\lambda} = \hat{a}_{\mathbf{k}\lambda}^\dagger \hat{a}_{\mathbf{k}\lambda}"></katex-element>
    </section>

    <section class="field-operators">
      <h2>场算符</h2>
      
      <h3>电场算符</h3>
      <p>电场算符为：</p>
      <katex-element expression="\hat{\mathbf{E}}(\mathbf{r}) = i\sum_{\mathbf{k},\lambda} \sqrt{\frac{\hbar \omega_k}{2\epsilon_0 V}} \left[\hat{a}_{\mathbf{k}\lambda} \boldsymbol{\epsilon}_{\mathbf{k}\lambda} e^{i\mathbf{k} \cdot \mathbf{r}} - \hat{a}_{\mathbf{k}\lambda}^\dagger \boldsymbol{\epsilon}_{\mathbf{k}\lambda}^* e^{-i\mathbf{k} \cdot \mathbf{r}}\right]"></katex-element>

      <h3>磁场算符</h3>
      <p>磁场算符为：</p>
      <katex-element expression="\hat{\mathbf{B}}(\mathbf{r}) = i\sum_{\mathbf{k},\lambda} \sqrt{\frac{\hbar \mu_0 \omega_k}{2 V}} \left[\hat{a}_{\mathbf{k}\lambda} (\mathbf{k} \times \boldsymbol{\epsilon}_{\mathbf{k}\lambda}) e^{i\mathbf{k} \cdot \mathbf{r}} - \hat{a}_{\mathbf{k}\lambda}^\dagger (\mathbf{k} \times \boldsymbol{\epsilon}_{\mathbf{k}\lambda})^* e^{-i\mathbf{k} \cdot \mathbf{r}}\right]"></katex-element>

      <h3>场的涨落</h3>
      <p>真空态中的场涨落：</p>
      <div class="equation-block">
        <katex-element expression="\langle 0|\hat{\mathbf{E}}(\mathbf{r})|0\rangle = 0"></katex-element>
        <katex-element expression="\langle 0|\hat{\mathbf{E}}^2(\mathbf{r})|0\rangle = \sum_{\mathbf{k},\lambda} \frac{\hbar \omega_k}{2\epsilon_0 V}"></katex-element>
      </div>
    </section>

    <section class="coherent-states">
      <h2>相干态</h2>
      
      <h3>相干态的定义</h3>
      <p>相干态是产生算符的本征态：</p>
      <katex-element expression="\hat{a}_{\mathbf{k}\lambda} |\alpha_{\mathbf{k}\lambda}\rangle = \alpha_{\mathbf{k}\lambda} |\alpha_{\mathbf{k}\lambda}\rangle"></katex-element>
      
      <p>其中 <katex-element expression="\alpha_{\mathbf{k}\lambda}"></katex-element> 是复数。</p>

      <h3>相干态的性质</h3>
      <ul>
        <li><strong>最小不确定性：</strong>满足海森堡不确定性关系的等号</li>
        <li><strong>经典对应：</strong>期望值表现为经典场</li>
        <li><strong>泊松统计：</strong>光子数分布为泊松分布</li>
      </ul>

      <h3>压缩态</h3>
      <p>压缩态是一类特殊的量子态，其中某个正交分量的涨落被压缩：</p>
      <katex-element expression="|\xi\rangle = \hat{S}(\xi) |0\rangle"></katex-element>
      <p>其中 <katex-element expression="\hat{S}(\xi) = \exp\left(\frac{\xi^*}{2}\hat{a}^2 - \frac{\xi}{2}\hat{a}^{\dagger 2}\right)"></katex-element> 是压缩算符。</p>
    </section>

    <section class="interaction-hamiltonian">
      <h2>相互作用哈密顿量</h2>
      
      <h3>最小耦合</h3>
      <p>电磁场与带电粒子的相互作用通过最小耦合描述：</p>
      <katex-element expression="\mathbf{p} \rightarrow \mathbf{p} - q\mathbf{A}"></katex-element>
      
      <p>相互作用哈密顿量为：</p>
      <katex-element expression="\hat{H}_{int} = -\frac{q}{m}\hat{\mathbf{p}} \cdot \hat{\mathbf{A}} + \frac{q^2}{2m}\hat{\mathbf{A}}^2"></katex-element>

      <h3>偶极近似</h3>
      <p>在长波长极限下（偶极近似）：</p>
      <katex-element expression="\hat{H}_{int} = -\hat{\boldsymbol{\mu}} \cdot \hat{\mathbf{E}}"></katex-element>
      <p>其中 <katex-element expression="\hat{\boldsymbol{\mu}} = q\hat{\mathbf{r}}"></katex-element> 是电偶极矩算符。</p>

      <h3>多极展开</h3>
      <p>更高阶的多极相互作用：</p>
      <div class="equation-block">
        <p><strong>磁偶极：</strong><katex-element expression="\hat{H}_{m1} = -\hat{\boldsymbol{\mu}}_m \cdot \hat{\mathbf{B}}"></katex-element></p>
        <p><strong>电四极：</strong><katex-element expression="\hat{H}_{e2} = -\frac{1}{6}\hat{Q}_{ij} \nabla_i \hat{E}_j"></katex-element></p>
      </div>
    </section>

    <section class="casimir-effect">
      <h2>Casimir效应</h2>
      
      <h3>平行板间的真空能</h3>
      <p>两个平行导体板之间的真空能修正：</p>
      <katex-element expression="\Delta E = -\frac{\hbar c \pi^2}{240 a^3} A"></katex-element>
      <p>其中 <katex-element expression="a"></katex-element> 是板间距，<katex-element expression="A"></katex-element> 是板面积。</p>

      <h3>Casimir力</h3>
      <p>由真空能产生的吸引力：</p>
      <katex-element expression="F = -\frac{\partial \Delta E}{\partial a} = -\frac{\hbar c \pi^2}{80 a^4} A"></katex-element>

      <h3>物理意义</h3>
      <ul>
        <li>证明了真空涨落的物理实在性</li>
        <li>在纳米尺度上具有重要影响</li>
        <li>与范德瓦尔斯力相关</li>
      </ul>
    </section>

    <section class="applications">
      <h2>物理应用</h2>
      
      <h3>量子光学</h3>
      <ul>
        <li><strong>激光理论：</strong>受激发射和吸收过程</li>
        <li><strong>非线性光学：</strong>多光子过程和参量转换</li>
        <li><strong>量子信息：</strong>光子纠缠和量子通信</li>
      </ul>

      <h3>凝聚态物理</h3>
      <ul>
        <li><strong>极化子：</strong>电子-光子耦合系统</li>
        <li><strong>腔量子电动力学：</strong>强耦合区域的物理</li>
        <li><strong>表面等离激元：</strong>金属表面的集体激发</li>
      </ul>

      <h3>原子物理</h3>
      <ul>
        <li><strong>自发辐射：</strong>原子与真空场的相互作用</li>
        <li><strong>Lamb位移：</strong>真空涨落对原子能级的修正</li>
        <li><strong>激光冷却：</strong>光子动量转移</li>
      </ul>
    </section>

    <section class="advanced-topics">
      <h2>高级主题</h2>
      
      <h3>非阿贝尔规范场</h3>
      <p>Yang-Mills场的量子化：</p>
      <katex-element expression="\hat{H} = \frac{1}{2}\int \left[\hat{\mathbf{E}}^a \cdot \hat{\mathbf{E}}^a + \hat{\mathbf{B}}^a \cdot \hat{\mathbf{B}}^a\right] d^3r"></katex-element>
      <p>其中 <katex-element expression="a"></katex-element> 是色指标。</p>

      <h3>拓扑项</h3>
      <p>θ-项对哈密顿量的贡献：</p>
      <katex-element expression="\hat{H}_\theta = \frac{\theta g^2}{32\pi^2} \int \hat{\mathbf{E}} \cdot \hat{\mathbf{B}} \, d^3r"></katex-element>

      <h3>有限温度场论</h3>
      <p>热平衡态下的期望值：</p>
      <katex-element expression="\langle \hat{O} \rangle = \frac{\text{Tr}(e^{-\beta \hat{H}} \hat{O})}{\text{Tr}(e^{-\beta \hat{H}})}"></katex-element>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        电磁场的量子哈密顿量为我们提供了理解光子、真空涨落和电磁相互作用的完整框架。
        通过正则量子化和模式展开，我们将经典电磁场转换为量子场论描述，揭示了光的
        粒子性质和波动性质的统一。这一理论不仅是量子电动力学的基础，也为现代量子
        光学、凝聚态物理和量子信息科学提供了重要工具。量子电磁场的概念和方法在
        理解各种物理现象中都发挥着关键作用。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_2_3',
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