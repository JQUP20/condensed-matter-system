<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.2.1 一维量子Ising模型</h1>
      <p class="chapter-subtitle">从经典到量子：自旋的量子舞蹈</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解量子Ising模型的哈密顿量构造</li>
        <li>掌握量子自旋算符的性质</li>
        <li>理解量子涨落的物理起源</li>
        <li>学习基态和激发态的基本概念</li>
        <li>掌握量子相变的基本机制</li>
      </ul>
    </div>

    <div class="model-construction">
      <h2>模型构造</h2>
      
      <div class="hamiltonian-derivation">
        <h3>从经典到量子</h3>
        <p>
          让我们从经典Ising模型出发，逐步构造量子版本。经典Ising模型中，
          每个格点上的自旋是经典变量 $S_i = \pm 1$。在量子版本中，
          我们用Pauli矩阵来描述自旋：
        </p>
        
        <div class="pauli-matrices">
          <h4>Pauli矩阵</h4><div class="formula-container">$$\sigma^x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad\sigma^y = \begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}, \quad\sigma^z = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$</div> <p>它们满足对易关系：</p><div class="formula-container">$$[\sigma^i, \sigma^j] = 2i\epsilon_{ijk}\sigma^k$$</div>
        </div>
      </div> <div class="quantum-hamiltonian"><h3>量子横场Ising哈密顿量</h3> <div class="formula-container">$$H = -J \sum_{i=1}^{N} \sigma_i^z \sigma_{i+1}^z - h \sum_{i=1}^{N} \sigma_i^x$$</div>
        
        <div class="terms-explanation"> <div class="term-card"><h4>Ising相互作用项</h4> <div class="formula-container">$$H_{\text{Ising}} = -J \sum_{i=1}^{N} \sigma_i^z \sigma_{i+1}^z$$</div>
            <p>这一项保持了经典Ising模型的形式，描述相邻自旋在z方向的相互作用。当$J > 0$时，相邻自旋倾向于平行排列。
            </p>
          </div>
          
          <div class="term-card">
            <h4>横向磁场项</h4><div class="formula-container">$$H_{\text{field}} = -h \sum_{i=1}^{N} \sigma_i^x$$</div>
            <p>这是量子版本的新特征！横向磁场使自旋在x方向有确定的取向，但由于$[\sigma^x, \sigma^z] \neq 0$，这会导致z方向自旋的量子涨落。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="quantum-mechanics">
      <h2>量子力学基础</h2>
      
      <div class="hilbert-space">
        <h3>希尔伯特空间</h3><p>N个自旋-1/2粒子的希尔伯特空间是$2^N$维的。每个格点的局域基态为：
        </p><div class="formula-container">$$|\uparrow\rangle = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \quad|\downarrow\rangle = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$$</div><p>整个系统的基态是这些局域态的直积：</p> <div class="formula-container">$$|s_1, s_2, \ldots, s_N\rangle = |s_1\rangle \otimes |s_2\rangle \otimes \cdots \otimes |s_N\rangle$$</div><p>其中$s_i \in \{\uparrow, \downarrow\}$。</p>
      </div>

      <div class="operator-properties">
        <h3>算符性质</h3>
        
        <div class="properties-grid">
          <div class="property-card">
            <h4>本征值和本征态</h4><div class="formula-container">$$\sigma^z |\uparrow\rangle = +|\uparrow\rangle, \quad \sigma^z |\downarrow\rangle = -|\downarrow\rangle$$$$\sigma^x |\uparrow\rangle = |\downarrow\rangle, \quad \sigma^x |\downarrow\rangle = |\uparrow\rangle$$</div>
          </div> <div class="property-card"><h4>对易关系</h4> <div class="formula-container">$$[\sigma_i^x, \sigma_j^z] = 2i\delta_{ij}\sigma_i^y$$</div><p>不同格点上的算符对易：$[\sigma_i^\alpha, \sigma_j^\beta] = 0$ (当 $i \neq j$)</p>
          </div>
        </div>
      </div>
    </div>

    <div class="quantum-fluctuations">
      <h2>量子涨落的起源</h2>
      
      <div class="uncertainty-principle">
        <h3>测不准原理</h3><p>横向磁场项$\sigma^x$ 与Ising相互作用项 $\sigma^z$不对易，
          这导致了量子测不准关系：
        </p><div class="formula-container">$$\Delta \sigma^x \cdot \Delta \sigma^z \geq \frac{1}{2}|\langle [\sigma^x, \sigma^z] \rangle| = |\langle \sigma^y \rangle|$$</div>
        <p>
          这意味着我们不能同时精确确定自旋在x和z方向的分量，
          量子涨落是不可避免的。
        </p>
      </div>

      <div class="competing-terms">
        <h3>竞争机制</h3>
        
        <div class="competition-diagram">
          <div class="mechanism-card ising-term"> <h4>Ising项的作用</h4><p>倾向于建立z方向的长程序：</p> <div class="formula-container">$$|\text{基态}\rangle \approx |\uparrow\uparrow\cdots\uparrow\rangle \text{ 或 } |\downarrow\downarrow\cdots\downarrow\rangle$$</div>
          </div>
          
          <div class="vs-symbol">VS</div>
          
          <div class="mechanism-card field-term"> <h4>横向磁场的作用</h4><p>倾向于建立x方向的极化：</p> <div class="formula-container">$$|\text{基态}\rangle \approx \prod_i \frac{1}{\sqrt{2}}(|\uparrow\rangle_i + |\downarrow\rangle_i)$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="limiting-cases">
      <h2>极限情况分析</h2>
      
      <div class="limits-grid">
        <div class="limit-card">
          <h3>强Ising耦合极限 (J ≫ h)</h3>
          <p>当交换相互作用远大于横向磁场时：</p>
          <ul>
            <li>基态近似为经典Néel态</li>
            <li>量子涨落很小，可用微扰理论处理</li> <li>存在两重简并的基态</li></ul> <div class="formula-container">$$|\psi_0\rangle \approx \frac{1}{\sqrt{2}}(|\uparrow\uparrow\cdots\uparrow\rangle + |\downarrow\downarrow\cdots\downarrow\rangle)$$</div>
        </div>
        
        <div class="limit-card">
          <h3>强横向磁场极限 (h ≫ J)</h3>
          <p>当横向磁场远大于交换相互作用时：</p>
          <ul>
            <li>基态为所有自旋在x方向极化</li>
            <li>z方向完全无序</li> <li>基态唯一，无简并</li></ul> <div class="formula-container">$$|\psi_0\rangle \approx \prod_{i=1}^N \frac{1}{\sqrt{2}}(|\uparrow\rangle_i + |\downarrow\rangle_i)$$</div>
        </div>
      </div>
    </div>

    <div class="phase-transition">
      <h2>量子相变</h2>
      
      <div class="transition-mechanism">
        <h3>相变机制</h3><p>当$h \approx J$时，两种竞争机制势均力敌，系统发生量子相变。
          这种相变的特点是：
        </p>
        
        <div class="transition-features">
          <div class="feature-item">
            <h4>零温相变</h4>
            <p>相变发生在绝对零度，完全由量子涨落驱动</p>
          </div>
          
          <div class="feature-item">
            <h4>连续相变</h4>
            <p>基态能量和其导数连续，但二阶导数不连续</p>
          </div>
          
          <div class="feature-item">
            <h4>临界涨落</h4>
            <p>在临界点附近，量子涨落在所有长度尺度上都很重要</p>
          </div>
        </div>
      </div>

      <div class="order-parameter">
        <h3>序参量</h3>
        <p>
          量子相变的序参量是z方向的磁化强度：
        </p><div class="formula-container">$$m = \langle \psi_0 | \frac{1}{N} \sum_{i=1}^N \sigma_i^z | \psi_0 \rangle$$</div>
        
        <div class="phases-description">
          <div class="phase-desc"><h4>有序相 (h < J)</h4><p>$m \neq 0$，存在自发磁化</p>
          </div>
          
          <div class="phase-desc"><h4>无序相 (h > J)</h4><p>$m = 0$，无自发磁化</p>
          </div>
        </div>
      </div>
    </div>

    <div class="energy-spectrum">
      <h2>能谱结构</h2>
      
      <div class="spectrum-analysis">
        <h3>基态和激发态</h3>
        <p>
          量子横场Ising模型的能谱具有丰富的结构：
        </p>
        
        <div class="spectrum-features">
          <div class="spectrum-card">
            <h4>基态</h4>
            <ul>
              <li>有序相：两重简并（对称性自发破缺）</li>
              <li>无序相：非简并（对称性未破缺）</li>
              <li>临界点：能隙关闭</li>
            </ul>
          </div>
          
          <div class="spectrum-card">
            <h4>激发态</h4>
            <ul>
              <li>单粒子激发（准粒子）</li>
              <li>集体激发（自旋波）</li>
              <li>拓扑激发（畴壁）</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="energy-gap">
        <h3>能隙行为</h3><p>能隙$\Delta$是基态和第一激发态之间的能量差：
        </p><div class="formula-container">$$\Delta = E_1 - E_0$$</div>
        
        <div class="gap-behavior">
          <p>能隙的行为反映了相变的性质：</p><ul><li>有序相和无序相：$\Delta > 0$（有能隙）</li><li>临界点：$\Delta = 0$（无能隙）</li><li>临界点附近：$\Delta \propto |h - J|$（线性关闭）</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="physical-interpretation">
      <h2>物理图像</h2>
      
      <div class="interpretation-card">
        <h3>量子隧穿图像</h3>
        <p>
          我们可以用量子隧穿的图像来理解横向磁场的作用：
        </p>
        
        <div class="tunneling-description">
          <div class="tunneling-step">
            <h4>1. 经典基态</h4>
            <p>没有横向磁场时，系统有两个经典基态：全部自旋向上或全部向下</p>
          </div>
          
          <div class="tunneling-step">
            <h4>2. 量子隧穿</h4>
            <p>横向磁场允许自旋"翻转"，使系统能够在两个经典态之间隧穿</p>
          </div>
          
          <div class="tunneling-step">
            <h4>3. 量子叠加</h4>
            <p>真正的量子基态是两个经典态的叠加，隧穿强度由横向磁场控制</p>
          </div>
        </div>
      </div>

      <div class="analogy-card">
        <h3>类比：双势阱系统</h3>
        <p>
          量子横场Ising模型类似于双势阱中的粒子：
        </p>
        <ul>
          <li>两个势阱 ↔ 两个经典基态</li>
          <li>势垒高度 ↔ 翻转一个自旋所需的能量</li>
          <li>隧穿强度 ↔ 横向磁场强度</li>
          <li>基态分裂 ↔ 量子相变</li>
        </ul>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          一维量子Ising模型展示了量子力学的核心特征：
        </p>
        <ul>
          <li><strong>量子叠加</strong>：基态是经典态的量子叠加</li>
          <li><strong>量子涨落</strong>：由算符的非对易性产生</li>
          <li><strong>竞争机制</strong>：不同项之间的竞争导致相变</li>
          <li><strong>零温相变</strong>：完全由量子效应驱动</li>
        </ul>
        <p>
          这个模型为我们理解更复杂的量子多体系统提供了重要的物理直觉和数学工具。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item"><h4>1. 算符计算</h4><p>证明$(\sigma^x)^2 = (\sigma^y)^2 = (\sigma^z)^2 = I$，并计算 $\sigma^x \sigma^z + \sigma^z \sigma^x$。</p>
        </div>
        <div class="exercise-item"><h4>2. 基态分析</h4><p>在强Ising耦合极限下，写出基态波函数的表达式，并计算磁化强度$\langle \sigma^z \rangle$。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 量子涨落</h4>
          <p>解释为什么横向磁场会导致z方向自旋的量子涨落，并估算涨落的大小。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 物理图像</h4>
          <p>用量子隧穿的图像解释量子相变的物理机制，并与经典相变进行对比。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 渲染数学公式
  if (window.MathJax) {
    window.MathJax.typesetPromise()
  }
})
</script>

<style scoped>
.chapter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  color: white;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.learning-objectives {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #667eea;
}

.learning-objectives h2 {
  color: #667eea;
  margin-bottom: 1rem;
}

.learning-objectives ul {
  list-style-type: none;
  padding: 0;
}

.learning-objectives li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.learning-objectives li::before {
  content: "⚛️";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.model-construction, .quantum-mechanics, .quantum-fluctuations, .limiting-cases,
.phase-transition, .energy-spectrum, .physical-interpretation, .summary-section,
.exercises-section {
  margin-bottom: 2rem;
}

.model-construction h2, .quantum-mechanics h2, .quantum-fluctuations h2,
.limiting-cases h2, .phase-transition h2, .energy-spectrum h2,
.physical-interpretation h2, .summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.hamiltonian-derivation, .quantum-hamiltonian, .hilbert-space, .operator-properties,
.uncertainty-principle, .competing-terms, .transition-mechanism, .order-parameter,
.spectrum-analysis, .energy-gap, .interpretation-card, .analogy-card, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.pauli-matrices, .terms-explanation, .properties-grid, .limits-grid,
.transition-features, .phases-description, .spectrum-features {
  margin-top: 1rem;
}

.term-card, .property-card, .limit-card, .spectrum-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
  margin-bottom: 1rem;
}

.term-card h4, .property-card h4, .limit-card h3, .spectrum-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.properties-grid, .limits-grid, .spectrum-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.competition-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.5rem 0;
  flex-wrap: wrap;
  gap: 1rem;
}

.mechanism-card {
  flex: 1;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.mechanism-card.ising-term {
  background: #ffe6e6;
  border: 2px solid #ff9999;
}

.mechanism-card.field-term {
  background: #e6f3ff;
  border: 2px solid #99ccff;
}

.vs-symbol {
  font-size: 2em;
  font-weight: bold;
  color: #667eea;
  padding: 1rem;
}

.feature-item, .phase-desc {
  background: #f8faff;
  padding: 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  border-left: 3px solid #667eea;
}

.feature-item h4, .phase-desc h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.gap-behavior {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.tunneling-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.tunneling-step {
  background: #f8faff;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.tunneling-step h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.formula-container {
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e1e8ff;
}

.exercise-list {
  display: grid;
  gap: 1rem;
}

.exercise-item {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.exercise-item h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-container {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .properties-grid, .limits-grid, .spectrum-features {
    grid-template-columns: 1fr;
  }
  
  .competition-diagram {
    flex-direction: column;
  }
  
  .vs-symbol {
    transform: rotate(90deg);
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .chapter-subtitle {
    font-size: 1em;
  }
  
  .formula-container {
    font-size: 0.8em;
    padding: 0.6rem;
  }
}
</style>