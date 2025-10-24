<template>
  <div class="chapter-content">
    <h1>12.2.1 Maxwell方程与规范条件</h1>
    
    <section class="introduction">
      <h2>引言</h2>
      <p>
        Maxwell方程组是描述电磁现象的基本方程，它统一了电学和磁学，揭示了电磁场的本质。
        在量子场论和凝聚态物理中，Maxwell方程不仅描述了经典电磁场，还为理解量子电磁场、
        规范场论以及拓扑物态提供了基础。规范条件的选择对于求解Maxwell方程和理解物理现象
        具有重要意义。
      </p>
    </section>

    <section class="maxwell-equations">
      <h2>Maxwell方程组</h2>
      
      <h3>微分形式</h3>
      <p>Maxwell方程组的微分形式为：</p>
      <div class="equation-block">
        <p><strong>高斯定律：</strong></p>
        <katex-element expression="\nabla \cdot \mathbf{E} = \frac{\rho}{\epsilon_0}"></katex-element>
        
        <p><strong>高斯磁定律：</strong></p>
        <katex-element expression="\nabla \cdot \mathbf{B} = 0"></katex-element>
        
        <p><strong>法拉第定律：</strong></p>
        <katex-element expression="\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}"></katex-element>
        
        <p><strong>安培-麦克斯韦定律：</strong></p>
        <katex-element expression="\nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \epsilon_0 \frac{\partial \mathbf{E}}{\partial t}"></katex-element>
      </div>

      <h3>积分形式</h3>
      <p>Maxwell方程组的积分形式为：</p>
      <div class="equation-block">
        <katex-element expression="\oint_S \mathbf{E} \cdot d\mathbf{A} = \frac{Q_{enc}}{\epsilon_0}"></katex-element>
        <katex-element expression="\oint_S \mathbf{B} \cdot d\mathbf{A} = 0"></katex-element>
        <katex-element expression="\oint_C \mathbf{E} \cdot d\mathbf{l} = -\frac{d\Phi_B}{dt}"></katex-element>
        <katex-element expression="\oint_C \mathbf{B} \cdot d\mathbf{l} = \mu_0 I_{enc} + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt}"></katex-element>
      </div>
    </section>

    <section class="potentials">
      <h2>电磁势</h2>
      
      <h3>标量势和矢量势</h3>
      <p>由于磁场的散度为零，可以引入矢量势 <katex-element expression="\mathbf{A}"></katex-element>：</p>
      <katex-element expression="\mathbf{B} = \nabla \times \mathbf{A}"></katex-element>
      
      <p>将此关系代入法拉第定律，可以引入标量势 <katex-element expression="\phi"></katex-element>：</p>
      <katex-element expression="\mathbf{E} = -\nabla \phi - \frac{\partial \mathbf{A}}{\partial t}"></katex-element>

      <h3>势的波动方程</h3>
      <p>在洛伦兹规范下，势满足的波动方程为：</p>
      <div class="equation-block">
        <katex-element expression="\Box \phi = -\frac{\rho}{\epsilon_0}"></katex-element>
        <katex-element expression="\Box \mathbf{A} = -\mu_0 \mathbf{J}"></katex-element>
      </div>
      <p>其中 <katex-element expression="\Box = \nabla^2 - \frac{1}{c^2}\frac{\partial^2}{\partial t^2}"></katex-element> 是达朗贝尔算符。</p>
    </section>

    <section class="gauge-conditions">
      <h2>规范条件</h2>
      
      <h3>规范不变性</h3>
      <p>电磁势具有规范不变性。对于任意标量函数 <katex-element expression="\Lambda(\mathbf{r}, t)"></katex-element>，变换：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{A}' = \mathbf{A} + \nabla \Lambda"></katex-element>
        <katex-element expression="\phi' = \phi - \frac{\partial \Lambda}{\partial t}"></katex-element>
      </div>
      <p>不改变物理场 <katex-element expression="\mathbf{E}"></katex-element> 和 <katex-element expression="\mathbf{B}"></katex-element>。</p>

      <h3>洛伦兹规范</h3>
      <p>洛伦兹规范条件为：</p>
      <katex-element expression="\nabla \cdot \mathbf{A} + \frac{1}{c^2}\frac{\partial \phi}{\partial t} = 0"></katex-element>
      
      <p><strong>优点：</strong></p>
      <ul>
        <li>保持洛伦兹协变性</li>
        <li>势的波动方程形式简单</li>
        <li>适用于相对论性问题</li>
      </ul>

      <h3>库仑规范</h3>
      <p>库仑规范条件为：</p>
      <katex-element expression="\nabla \cdot \mathbf{A} = 0"></katex-element>
      
      <p>在此规范下：</p>
      <div class="equation-block">
        <katex-element expression="\nabla^2 \phi = -\frac{\rho}{\epsilon_0}"></katex-element>
        <katex-element expression="\nabla^2 \mathbf{A} - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{A}}{\partial t^2} = -\mu_0 \mathbf{J} + \mu_0 \epsilon_0 \nabla \frac{\partial \phi}{\partial t}"></katex-element>
      </div>
      
      <p><strong>优点：</strong></p>
      <ul>
        <li>标量势瞬时响应电荷分布</li>
        <li>适用于非相对论性问题</li>
        <li>物理直观性强</li>
      </ul>

      <h3>轴向规范</h3>
      <p>轴向规范选择特定方向，例如：</p>
      <katex-element expression="A_z = 0 \quad \text{或} \quad \mathbf{n} \cdot \mathbf{A} = 0"></katex-element>
      
      <p><strong>应用：</strong></p>
      <ul>
        <li>处理均匀磁场问题</li>
        <li>朗道能级计算</li>
        <li>量子霍尔效应</li>
      </ul>
    </section>

    <section class="electromagnetic-waves">
      <h2>电磁波</h2>
      
      <h3>真空中的电磁波</h3>
      <p>在无源区域（<katex-element expression="\rho = 0, \mathbf{J} = 0"></katex-element>），电磁场满足波动方程：</p>
      <div class="equation-block">
        <katex-element expression="\nabla^2 \mathbf{E} - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2} = 0"></katex-element>
        <katex-element expression="\nabla^2 \mathbf{B} - \mu_0 \epsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2} = 0"></katex-element>
      </div>

      <h3>平面波解</h3>
      <p>平面波解的形式为：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{E}(\mathbf{r}, t) = \mathbf{E}_0 e^{i(\mathbf{k} \cdot \mathbf{r} - \omega t)}"></katex-element>
        <katex-element expression="\mathbf{B}(\mathbf{r}, t) = \mathbf{B}_0 e^{i(\mathbf{k} \cdot \mathbf{r} - \omega t)}"></katex-element>
      </div>
      
      <p>满足色散关系：</p>
      <katex-element expression="\omega^2 = c^2 k^2, \quad c = \frac{1}{\sqrt{\mu_0 \epsilon_0}}"></katex-element>

      <h3>横波性质</h3>
      <p>电磁波是横波，满足：</p>
      <div class="equation-block">
        <katex-element expression="\mathbf{k} \cdot \mathbf{E} = 0"></katex-element>
        <katex-element expression="\mathbf{k} \cdot \mathbf{B} = 0"></katex-element>
        <katex-element expression="\mathbf{E} \perp \mathbf{B} \perp \mathbf{k}"></katex-element>
      </div>
    </section>

    <section class="energy-momentum">
      <h2>电磁场的能量和动量</h2>
      
      <h3>能量密度</h3>
      <p>电磁场的能量密度为：</p>
      <katex-element expression="u = \frac{1}{2}\left(\epsilon_0 E^2 + \frac{1}{\mu_0} B^2\right)"></katex-element>

      <h3>坡印廷矢量</h3>
      <p>能量流密度（坡印廷矢量）为：</p>
      <katex-element expression="\mathbf{S} = \frac{1}{\mu_0} \mathbf{E} \times \mathbf{B}"></katex-element>

      <h3>动量密度</h3>
      <p>电磁场的动量密度为：</p>
      <katex-element expression="\mathbf{g} = \epsilon_0 \mathbf{E} \times \mathbf{B} = \frac{\mathbf{S}}{c^2}"></katex-element>

      <h3>应力张量</h3>
      <p>Maxwell应力张量为：</p>
      <katex-element expression="T_{ij} = \epsilon_0\left(E_i E_j - \frac{1}{2}\delta_{ij} E^2\right) + \frac{1}{\mu_0}\left(B_i B_j - \frac{1}{2}\delta_{ij} B^2\right)"></katex-element>
    </section>

    <section class="applications">
      <h2>物理应用</h2>
      
      <h3>凝聚态物理中的应用</h3>
      <ul>
        <li><strong>霍尔效应：</strong>磁场中载流子的横向偏转</li>
        <li><strong>磁阻效应：</strong>磁场对电阻的影响</li>
        <li><strong>磁光效应：</strong>法拉第旋转和克尔效应</li>
        <li><strong>等离子体振荡：</strong>金属中的集体激发</li>
      </ul>

      <h3>量子场论中的应用</h3>
      <ul>
        <li><strong>规范场论：</strong>Yang-Mills理论的基础</li>
        <li><strong>量子电动力学：</strong>光子与费米子的相互作用</li>
        <li><strong>自发对称破缺：</strong>Higgs机制</li>
        <li><strong>拓扑场论：</strong>瞬子和磁单极</li>
      </ul>

      <h3>现代物理中的应用</h3>
      <ul>
        <li><strong>拓扑绝缘体：</strong>表面态的电磁响应</li>
        <li><strong>Weyl半金属：</strong>手性异常和磁电效应</li>
        <li><strong>量子霍尔效应：</strong>拓扑量子数</li>
        <li><strong>超导体：</strong>Meissner效应和磁通量子化</li>
      </ul>
    </section>

    <section class="mathematical-methods">
      <h2>数学方法</h2>
      
      <h3>格林函数方法</h3>
      <p>电磁势的格林函数解为：</p>
      <div class="equation-block">
        <katex-element expression="\phi(\mathbf{r}, t) = \frac{1}{4\pi\epsilon_0} \int \frac{\rho(\mathbf{r}', t_{ret})}{|\mathbf{r} - \mathbf{r}'|} d^3r'"></katex-element>
        <katex-element expression="\mathbf{A}(\mathbf{r}, t) = \frac{\mu_0}{4\pi} \int \frac{\mathbf{J}(\mathbf{r}', t_{ret})}{|\mathbf{r} - \mathbf{r}'|} d^3r'"></katex-element>
      </div>
      <p>其中 <katex-element expression="t_{ret} = t - \frac{|\mathbf{r} - \mathbf{r}'|}{c}"></katex-element> 是推迟时间。</p>

      <h3>多极展开</h3>
      <p>远场区域的多极展开：</p>
      <div class="equation-block">
        <katex-element expression="\phi(\mathbf{r}) = \frac{1}{4\pi\epsilon_0} \sum_{l=0}^{\infty} \sum_{m=-l}^{l} \frac{q_{lm}}{r^{l+1}} Y_l^m(\theta, \phi)"></katex-element>
      </div>

      <h3>傅里叶变换方法</h3>
      <p>频域中的Maxwell方程：</p>
      <div class="equation-block">
        <katex-element expression="i\mathbf{k} \cdot \mathbf{E}(\mathbf{k}, \omega) = \frac{\rho(\mathbf{k}, \omega)}{\epsilon_0}"></katex-element>
        <katex-element expression="i\mathbf{k} \times \mathbf{E}(\mathbf{k}, \omega) = i\omega \mathbf{B}(\mathbf{k}, \omega)"></katex-element>
      </div>
    </section>

    <section class="summary">
      <h2>总结</h2>
      <p>
        Maxwell方程组是电磁学的基石，描述了电磁场的基本规律。规范条件的选择为求解具体问题
        提供了灵活性，不同的规范适用于不同的物理情况。在现代物理学中，Maxwell方程不仅是
        经典电磁学的核心，更是量子场论、规范场论和拓扑物态理论的重要基础。理解Maxwell方程
        与规范条件对于深入研究凝聚态物理中的电磁现象具有重要意义。
      </p>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter12_2_1',
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