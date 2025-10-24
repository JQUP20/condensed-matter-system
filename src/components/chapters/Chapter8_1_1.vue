<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.1.1 经典Ising模型</h1>
      <p class="chapter-subtitle">量子相变理论的经典起点</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>掌握经典Ising模型的哈密顿量和基本性质</li>
        <li>理解Ising模型的相变机制</li>
        <li>学习平均场理论的应用</li>
        <li>了解临界现象和普适性</li>
        <li>为量子Ising模型的学习打下基础</li>
      </ul>
    </div>

    <div class="introduction-section">
      <h2>引言</h2>
      <p>
        经典Ising模型是统计力学中最重要的模型之一，它不仅帮助我们理解铁磁相变的基本机制，
        也为后续学习量子相变提供了重要的理论基础。通过对比经典和量子Ising模型，
        我们可以更深刻地理解量子涨落在相变中的作用。
      </p>
    </div>

    <div class="model-definition">
      <h2>模型定义</h2>
      
      <div class="hamiltonian-card">
        <h3>Ising哈密顿量</h3>
        <p>经典Ising模型的哈密顿量为：</p>
        <div class="formula-container">
          $$H = -J \sum_{\langle i,j \rangle} S_i S_j - h \sum_i S_i$$</div>
        <p>其中：</p><ul><li>$S_i = \pm 1$是格点 i 上的经典自旋</li><li>$J > 0$是铁磁交换耦合常数</li><li>$h$是外磁场</li><li>$\langle i,j \rangle$表示最近邻格点对</li>
        </ul>
      </div>

      <div class="physical-meaning">
        <h3>物理意义</h3>
        <div class="meaning-grid">
          <div class="meaning-card"><h4>交换相互作用项</h4><p>$-J \sum_{\langle i,j \rangle} S_i S_j$描述相邻自旋之间的相互作用</p><ul><li>$J > 0$：铁磁耦合，倾向于平行排列</li><li>$J < 0$：反铁磁耦合，倾向于反平行排列</li>
            </ul>
          </div>
          <div class="meaning-card"><h4>外磁场项</h4><p>$-h \sum_i S_i$描述外磁场对自旋的作用</p><ul><li>$h > 0$：倾向于使自旋向上</li><li>$h < 0$：倾向于使自旋向下</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="phase-transition">
      <h2>相变分析</h2>
      
      <div class="critical-temperature">
        <h3>临界温度</h3><p>Ising模型在临界温度$T_c$处发生二级相变。对于不同维度的系统：
        </p><div class="formula-container">$$\text{一维：} \quad T_c = 0 \quad \text{（无相变）}$$$$\text{二维：} \quad k_B T_c = \frac{2J}{\ln(1+\sqrt{2})} \approx 2.269J$$$$\text{三维：} \quad k_B T_c \approx 4.511J$$</div>
      </div>

      <div class="order-parameter"> <h3>序参量</h3><p>磁化强度作为序参量：</p> <div class="formula-container">$$m = \langle S_i \rangle = \frac{1}{N} \sum_i \langle S_i \rangle$$</div>
        <p>在不同相中的行为：</p><ul><li>$T > T_c$：顺磁相，$m = 0$</li><li>$T < T_c$：铁磁相，$m \neq 0$</li><li>$T = T_c$：临界点，$m \sim |T - T_c|^\beta$</li>
        </ul>
      </div>
    </div>

    <div class="mean-field-theory">
      <h2>平均场理论</h2>
      
      <div class="mf-approximation">
        <h3>平均场近似</h3><p>在平均场近似中，我们用平均磁化强度$m$来替代相邻自旋的涨落：
        </p><div class="formula-container">$$S_j \rightarrow \langle S_j \rangle = m$$</div><p>有效哈密顿量变为：</p> <div class="formula-container">$$H_{eff} = -\sum_i S_i (Jzm + h)$$</div><p>其中$z$是配位数（最近邻数目）。</p>
      </div>

      <div class="self-consistency">
        <h3>自洽方程</h3>
        <p>磁化强度的自洽方程为：</p><div class="formula-container">$$m = \tanh\left(\frac{Jzm + h}{k_B T}\right)$$</div><p>在零磁场情况下：</p> <div class="formula-container">$$m = \tanh\left(\frac{Jzm}{k_B T}\right)$$</div>
        
        <div class="solution-analysis">
          <h4>解的分析</h4><ul><li>$T > T_c$：只有 $m = 0$的解（顺磁相）</li><li>$T < T_c$：存在 $m \neq 0$的解（铁磁相）</li><li>临界温度：$k_B T_c = Jz$</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="critical-phenomena">
      <h2>临界现象</h2>
      
      <div class="critical-exponents">
        <h3>临界指数</h3>
        <p>在临界点附近，各物理量表现出幂律行为：</p>
        
        <div class="exponents-table">
          <table>
            <thead>
              <tr>
                <th>物理量</th>
                <th>行为</th>
                <th>临界指数</th>
                <th>平均场值</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>磁化强度</td><td>$m \sim |T-T_c|^\beta$</td><td>$\beta$</td>
                <td>1/2</td>
              </tr>
              <tr><td>磁化率</td><td>$\chi \sim |T-T_c|^{-\gamma}$</td><td>$\gamma$</td>
                <td>1</td>
              </tr>
              <tr><td>比热</td><td>$C \sim |T-T_c|^{-\alpha}$</td><td>$\alpha$</td>
                <td>0</td>
              </tr>
              <tr><td>关联长度</td><td>$\xi \sim |T-T_c|^{-\nu}$</td><td>$\nu$</td>
                <td>1/2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="universality">
        <h3>普适性</h3>
        <p>
          临界指数具有普适性，只依赖于：
        </p><ul><li>空间维度$d$</li><li>序参量的维度$n$（Ising模型中 $n=1$）</li>
          <li>相互作用的对称性</li>
        </ul>
        <p>
          这种普适性是重整化群理论的重要预言，表明不同的微观模型可以属于同一个普适类。
        </p>
      </div>
    </div>

    <div class="exact-solutions">
      <h2>精确解</h2>
      
      <div class="one-dimensional">
        <h3>一维Ising模型</h3>
        <p>一维Ising模型可以精确求解。配分函数为：</p><div class="formula-container">$$Z = \text{Tr} \, T^N$$</div><p>其中转移矩阵$T$的矩阵元为：</p><div class="formula-container">$$T_{s,s'} = \exp\left(\frac{J s s' + \frac{h}{2}(s+s')}{k_B T}\right)$$</div>
        <p>结果显示一维Ising模型在有限温度下无相变。</p>
      </div>

      <div class="two-dimensional">
        <h3>二维Ising模型</h3>
        <p>
          Onsager在1944年给出了二维Ising模型的精确解，这是统计力学的重要成就之一。 零磁场下的自由能为：</p> <div class="formula-container">$$f = -k_B T \ln 2 - \frac{1}{2\pi} \int_0^{2\pi} dk \ln[1 + \sqrt{1 - \kappa^2 \sin^2 k}]$$</div><p>其中$\kappa = 2\sinh(2J/k_B T)/\cosh^2(2J/k_B T)$。</p>
      </div>
    </div>

    <div class="applications-section">
      <h2>应用与推广</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>铁磁材料</h3>
          <p>描述铁磁材料的居里相变，预测临界温度和磁性行为。</p>
        </div>
        
        <div class="application-card">
          <h3>合金系统</h3>
          <p>描述二元合金的有序-无序相变，如CuZn合金的β相变。</p>
        </div>
        
        <div class="application-card">
          <h3>液气相变</h3>
          <p>通过格气模型描述液气相变，建立与Ising模型的对应关系。</p>
        </div>
        
        <div class="application-card">
          <h3>神经网络</h3>
          <p>Hopfield网络等神经网络模型基于Ising模型的思想。</p>
        </div>
      </div>
    </div>

    <div class="quantum-connection">
      <h2>与量子模型的联系</h2>
      
      <div class="connection-card">
        <h3>经典到量子的桥梁</h3>
        <p>
          经典Ising模型为理解量子相变提供了重要基础：
        </p>
        <ul>
          <li>相变的基本概念和序参量理论</li>
          <li>临界现象和标度理论</li>
          <li>平均场理论的方法</li>
          <li>精确解的技巧</li>
        </ul>
        
        <p>
          在量子横场Ising模型中，横向磁场引入量子涨落，
          使得即使在零温下也可能发生相变，这就是量子相变的核心思想。
        </p>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          经典Ising模型是理解相变现象的基石。通过学习这个模型，我们掌握了：
        </p>
        <ul>
          <li>相变的基本概念和序参量理论</li>
          <li>平均场理论的应用方法</li>
          <li>临界现象和普适性的重要概念</li>
          <li>精确解的存在性和重要性</li>
        </ul>
        <p>
          这些知识将为我们理解量子Ising模型和量子相变奠定坚实的基础。
          在下一节中，我们将看到量子涨落如何改变这一经典图像。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 基本计算</h4>
          <p>推导一维Ising模型在零磁场下的配分函数，并证明不存在有限温度相变。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 平均场理论</h4>
          <p>在平均场近似下，计算三维简立方晶格Ising模型的临界温度。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 临界指数</h4>
          <p>从平均场理论出发，推导磁化强度和磁化率的临界指数。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 物理应用</h4>
          <p>解释为什么Ising模型可以用来描述液气相变，建立两者之间的对应关系。</p>
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border-left: 4px solid #4facfe;
}

.learning-objectives h2 {
  color: #4facfe;
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
  content: "✓";
  position: absolute;
  left: 0;
  color: #4facfe;
  font-weight: bold;
}

.introduction-section, .model-definition, .phase-transition, .mean-field-theory,
.critical-phenomena, .exact-solutions, .applications-section, .quantum-connection,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.introduction-section h2, .model-definition h2, .phase-transition h2,
.mean-field-theory h2, .critical-phenomena h2, .exact-solutions h2,
.applications-section h2, .quantum-connection h2, .summary-section h2,
.exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #4facfe;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.hamiltonian-card, .physical-meaning, .critical-temperature, .order-parameter,
.mf-approximation, .self-consistency, .critical-exponents, .universality,
.one-dimensional, .two-dimensional, .connection-card, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #4facfe;
}

.meaning-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.meaning-card, .application-card {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1f0ff;
}

.meaning-card h4, .application-card h3 {
  color: #4facfe;
  margin-bottom: 1rem;
}

.solution-analysis {
  background: #f8fcff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1f0ff;
}

.exponents-table {
  overflow-x: auto;
  margin: 1rem 0;
}

.exponents-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.exponents-table th, .exponents-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e1f0ff;
}

.exponents-table th {
  background: #4facfe;
  color: white;
  font-weight: 600;
}

.exponents-table tr:hover {
  background: #f8fcff;
}

.formula-container {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
  border: 1px solid #e1f0ff;
}

.exercise-list {
  display: grid;
  gap: 1rem;
}

.exercise-item {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #4facfe;
}

.exercise-item h4 {
  color: #4facfe;
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
  
  .meaning-grid, .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
  
  .exponents-table {
    font-size: 0.9em;
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
  
  .exponents-table {
    font-size: 0.8em;
  }
  
  .exponents-table th, .exponents-table td {
    padding: 0.5rem;
  }
}
</style>