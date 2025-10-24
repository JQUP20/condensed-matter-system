<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.2.4 一维量子Ising模型的对偶变换与自对偶</h1>
      <p class="chapter-subtitle">数学之美：对称性中的深刻洞察</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解对偶变换的基本概念和数学原理</li>
        <li>掌握量子Ising模型的对偶变换方法</li>
        <li>理解自对偶点的物理意义</li>
        <li>学习对偶变换在相变研究中的应用</li>
        <li>认识对偶性与临界现象的深刻联系</li>
      </ul>
    </div>

    <div class="duality-concept">
      <h2>对偶变换的基本概念</h2>
      
      <div class="concept-introduction">
        <h3>什么是对偶变换？</h3>
        <p>
          对偶变换是理论物理中的一种重要数学技巧，它将一个物理系统映射到
          另一个看似不同但本质等价的系统。在统计力学和量子多体理论中，
          对偶变换常常能够揭示系统的隐藏对称性和深层结构。
        </p>
        
        <div class="duality-examples">
          <h4>对偶变换的例子</h4>
          <div class="examples-grid">
            <div class="example-card">
              <h5>经典Ising模型</h5>
              <p>高温展开 ↔ 低温展开</p>
              <p>强耦合 ↔ 弱耦合</p>
            </div>
            <div class="example-card">
              <h5>量子场论</h5>
              <p>电磁对偶性</p>
              <p>强弱耦合对偶</p>
            </div>
            <div class="example-card">
              <h5>弦理论</h5>
              <p>T-对偶性</p>
              <p>S-对偶性</p>
            </div>
          </div>
        </div>
      </div>

      <div class="physical-motivation">
        <h3>物理动机</h3>
        <p>
          在量子横场Ising模型中：
        </p>
        <div class="formula-container">
          $$H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x$$</div>
        
        <p>
          我们有两个竞争的项：
        </p><ul><li><strong>Ising项</strong>：$-J \sum_i \sigma_i^z \sigma_{i+1}^z$倾向于对齐相邻自旋</li><li><strong>横场项</strong>：$-h \sum_i \sigma_i^x$倾向于翻转自旋</li>
        </ul>
        
        <p>
          对偶变换的核心思想是：<em>强Ising耦合+弱横场</em> 的系统可能等价于
          <em>弱Ising耦合+强横场</em> 的系统。
        </p>
      </div>
    </div>

    <div class="duality-transformation">
      <h2>对偶变换的数学实现</h2>
      
      <div class="transformation-steps">
        <h3>变换步骤</h3>
        
        <div class="step-by-step">
          <div class="step-card">
            <h4>步骤1：引入对偶变量</h4><p>在每个格点之间引入对偶自旋变量$\tau_i$：
            </p><div class="formula-container">$$\sigma_i^z \sigma_{i+1}^z = \tau_i^z$$</div><p>这里$\tau_i$ 位于格点 $i$ 和 $i+1$之间的"对偶格点"上。
            </p>
          </div>
          
          <div class="step-card">
            <h4>步骤2：表达原始变量</h4>
            <p>
              原始自旋可以用对偶变量表示：
            </p><div class="formula-container">$$\sigma_i^z = \prod_{j&lt;i} \tau_j^z$$</div><p>这个关系确保了$\sigma_i^z \sigma_{i+1}^z = \tau_i^z$。
            </p>
          </div>
          
          <div class="step-card">
            <h4>步骤3：变换横场项</h4>
            <p>
              横场项的变换更加复杂。利用：
            </p><div class="formula-container">$$\sigma_i^x = \prod_{j \geq i} \tau_j^x$$</div>
            <p>
              这个关系来自于Pauli矩阵的对易关系。
            </p>
          </div>
        </div>
      </div>

      <div class="detailed-transformation">
        <h3>详细变换过程</h3>
        
        <div class="transformation-details">
          <h4>Ising项的变换</h4>
          <p> Ising相互作用项直接变为：</p> <div class="formula-container">$$-J \sum_i \sigma_i^z \sigma_{i+1}^z = -J \sum_i \tau_i^z$$</div>
          <p>
            这是对偶格点上的纵向磁场项。
          </p>
        </div>
        
        <div class="transformation-details">
          <h4>横场项的变换</h4>
          <p> 横场项变换为对偶格点上的相互作用：</p> <div class="formula-container">$$-h \sum_i \sigma_i^x = -h \sum_i \prod_{j \geq i} \tau_j^x$$</div>
          
          <p> 通过仔细的代数操作，这可以重写为：</p> <div class="formula-container">$$-h \sum_i \sigma_i^x = -h \sum_i \tau_i^x \tau_{i+1}^x$$</div>
          <p>
            这是对偶格点上的横向相互作用项。
          </p>
        </div>
      </div>

      <div class="dual-hamiltonian">
        <h3>对偶哈密顿量</h3>
        <p> 经过对偶变换，原始哈密顿量：</p> <div class="formula-container">$$H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x$$</div>
        
        <p> 变换为对偶哈密顿量：</p> <div class="formula-container">$$H_{\text{dual}} = -J \sum_i \tau_i^z - h \sum_i \tau_i^x \tau_{i+1}^x$$</div>
        
        <div class="duality-mapping">
          <h4>对偶映射关系</h4>
          <div class="mapping-table">
            <table>
              <thead>
                <tr>
                  <th>原始模型</th>
                  <th>对偶模型</th>
                </tr>
              </thead>
              <tbody><tr><td>Ising相互作用$J$</td><td>纵向磁场$J$</td>
                </tr><tr><td>横向磁场$h$</td><td>横向相互作用$h$</td>
                </tr><tr><td>$\sigma^z \sigma^z$项</td><td>$\tau^z$项</td>
                </tr><tr><td>$\sigma^x$项</td><td>$\tau^x \tau^x$项</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="self-duality">
      <h2>自对偶点</h2>
      
      <div class="self-dual-condition">
        <h3>自对偶条件</h3>
        <p>
          如果一个系统在对偶变换下映射到自身，我们称该点为<strong>自对偶点</strong>。
          对于量子横场Ising模型，自对偶条件是：
        </p><div class="formula-container">$$J = h$$</div>
        
        <p> 在这个点上，原始哈密顿量和对偶哈密顿量具有相同的形式：</p> <div class="formula-container">$$H = H_{\text{dual}} = -J \sum_i (\sigma_i^z \sigma_{i+1}^z + \sigma_i^x)$$</div>
      </div>

      <div class="critical-point-connection">
        <h3>与临界点的联系</h3>
        <p>
          自对偶点通常与系统的临界点密切相关。对于一维量子横场Ising模型：
        </p>
        
        <div class="critical-analysis">
          <h4>精确临界点</h4><p>精确解给出的临界点：$h_c = J$</p>
          
          <h4>自对偶点</h4><p>自对偶条件：$h = J$</p>
          
          <h4>重要结论</h4>
          <p>
            <strong>临界点恰好是自对偶点！</strong>
          </p><div class="formula-container">$$h_c = J$$</div>
        </div>
        
        <div class="physical-interpretation">
          <h4>物理解释</h4>
          <p>
            这个结果具有深刻的物理意义：
          </p>
          <ul>
            <li>在临界点，系统对于"强耦合↔弱耦合"的变换是不变的</li>
            <li>临界点是Ising相互作用和横场完全平衡的点</li>
            <li>系统在临界点具有最大的对称性</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="duality-applications">
      <h2>对偶变换的应用</h2>
      
      <div class="phase-diagram-analysis">
        <h3>相图分析</h3>
        <p>
          对偶变换为我们提供了分析相图的强大工具：
        </p>
        
        <div class="phase-regions"><div class="region-card ordered"><h4>有序相 ($h < J$)</h4>
            <p>
              <strong>原始描述</strong>：强Ising耦合，弱横场
            </p>
            <p>
              <strong>对偶描述</strong>：弱横向相互作用，强纵向磁场
            </p><p>对偶系统中$\tau^z$有明确的期望值。
            </p>
          </div><div class="region-card disordered"><h4>无序相 ($h > J$)</h4>
            <p>
              <strong>原始描述</strong>：弱Ising耦合，强横场
            </p>
            <p>
              <strong>对偶描述</strong>：强横向相互作用，弱纵向磁场
            </p>
            <p>
              对偶系统中横向相互作用占主导。
            </p>
          </div>
        </div>
      </div>

      <div class="correlation-functions">
        <h3>关联函数的对偶关系</h3>
        <p>
          对偶变换建立了原始系统和对偶系统关联函数之间的对应关系：
        </p>
        
        <div class="correlation-mapping">
          <h4>序参量关联</h4>
          <p>
            原始系统的磁化关联：
          </p><div class="formula-container">$$\langle \sigma_i^z \sigma_j^z \rangle \leftrightarrow \langle \tau_k^z \rangle$$</div>
          
          <h4>无序参量关联</h4>
          <p> 原始系统的无序算符：</p> <div class="formula-container">$$\langle \sigma_i^x \rangle \leftrightarrow \langle \tau_k^x \tau_{k+1}^x \rangle$$</div>
        </div>
      </div>

      <div class="universality-class">
        <h3>普适类分析</h3>
        <p>
          对偶变换保持系统的普适类不变，这为我们理解临界现象提供了重要洞察：
        </p>
        
        <div class="universality-insights">
          <div class="insight-item">
            <h4>临界指数不变性</h4>
            <p>
              对偶变换不改变临界指数，因为它只是系统的重新参数化。
            </p>
          </div>
          
          <div class="insight-item">
            <h4>标度关系</h4>
            <p>
              对偶性为建立不同物理量之间的标度关系提供了约束。
            </p>
          </div>
          
          <div class="insight-item">
            <h4>重整化群流</h4>
            <p>
              自对偶点通常是重整化群流的不动点。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="mathematical-structure">
      <h2>数学结构的深层理解</h2>
      
      <div class="group-theory-aspect">
        <h3>群论观点</h3>
        <p>
          对偶变换可以从群论的角度理解：
        </p>
        
        <div class="group-structure">
          <h4>对偶群</h4><p>对偶变换形成一个群，通常是$\mathbb{Z}_2$群：
          </p><div class="formula-container">$$D^2 = I$$</div><p>其中$D$ 是对偶变换算符，$I$是恒等变换。
          </p>
          
          <h4>不变子空间</h4>
          <p>
            自对偶点对应于对偶群作用下的不变子空间。
          </p>
        </div>
      </div>

      <div class="topological-aspects">
        <h3>拓扑观点</h3>
        <p>
          对偶变换与系统的拓扑性质密切相关：
        </p>
        
        <div class="topological-insights">
          <div class="topology-card">
            <h4>拓扑缺陷</h4>
            <p>
              原始系统中的畴壁对应于对偶系统中的粒子激发。
            </p>
          </div>
          
          <div class="topology-card">
            <h4>拓扑序</h4>
            <p>
              某些情况下，对偶变换可以揭示系统的隐藏拓扑序。
            </p>
          </div>
          
          <div class="topology-card">
            <h4>边界效应</h4>
            <p>
              开边界条件下的对偶变换需要特别小心处理边界项。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="experimental-relevance">
      <h2>实验相关性</h2>
      
      <div class="experimental-signatures">
        <h3>实验观测的对偶性</h3>
        <p>
          虽然对偶变换是理论工具，但它的预言可以通过实验验证：
        </p>
        
        <div class="experimental-tests">
          <div class="test-card">
            <h4>临界点位置</h4><p>自对偶性预言临界点位于$h = J$，
              这可以通过测量相变点来验证。
            </p>
          </div>
          
          <div class="test-card">
            <h4>对称性验证</h4>
            <p>
              在临界点附近，系统应该表现出对偶对称性，
              这反映在某些物理量的特定关系中。
            </p>
          </div>
          
          <div class="test-card">
            <h4>标度行为</h4>
            <p>
              对偶性对临界标度行为施加约束，
              可以通过精密测量来检验。
            </p>
          </div>
        </div>
      </div>

      <div class="quantum-simulation">
        <h3>量子模拟中的应用</h3>
        <p>
          在量子模拟器中，对偶变换提供了实现和研究量子相变的新途径：
        </p>
        
        <div class="simulation-advantages">
          <div class="advantage-item">
            <h4>参数调控</h4>
            <p>
              通过调节模拟器参数，可以在原始和对偶描述之间切换。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>测量策略</h4>
            <p>
              对偶性为设计测量协议提供指导，
              可以同时探测原始和对偶序参量。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>误差分析</h4>
            <p>
              对偶关系可以用于交叉验证实验结果，
              提高测量的可靠性。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="advanced-topics">
      <h2>高级主题</h2>
      
      <div class="higher-dimensions">
        <h3>高维推广</h3>
        <p>
          对偶变换可以推广到高维系统，但复杂性显著增加：
        </p>
        
        <div class="dimension-effects">
          <div class="dim-card">
            <h4>二维情况</h4>
            <p>
              二维量子Ising模型的对偶变换涉及更复杂的拓扑结构。
              自对偶点可能不再是简单的点，而是线或面。
            </p>
          </div>
          
          <div class="dim-card">
            <h4>三维及以上</h4>
            <p>
              高维情况下，对偶变换的几何解释变得更加抽象，
              但仍然提供重要的理论洞察。
            </p>
          </div>
        </div>
      </div>

      <div class="quantum-field-theory">
        <h3>量子场论联系</h3>
        <p>
          在连续极限下，对偶变换与量子场论中的对偶性相联系：
        </p>
        
        <div class="field-theory-connections">
          <div class="connection-item">
            <h4>Kramers-Wannier对偶</h4>
            <p>
              经典Ising模型的Kramers-Wannier对偶是量子情况的经典对应。
            </p>
          </div>
          
          <div class="connection-item">
            <h4>共形场论</h4>
            <p>
              临界点的共形场论描述中，对偶性表现为共形变换。
            </p>
          </div>
          
          <div class="connection-item">
            <h4>AdS/CFT对应</h4>
            <p>
              在某些情况下，对偶性与全息对偶有深刻联系。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          对偶变换是理解量子相变的强大数学工具：
        </p>
        <ul>
          <li><strong>数学技巧</strong>：将复杂问题映射到等价但更易处理的形式</li>
          <li><strong>物理洞察</strong>：揭示系统的隐藏对称性和深层结构</li>
          <li><strong>临界现象</strong>：自对偶点通常对应于相变的临界点</li>
          <li><strong>普适性</strong>：对偶关系反映了物理定律的深层统一性</li>
        </ul>
        <p>
          通过对偶变换，我们不仅获得了计算工具，更重要的是获得了
          理解量子多体系统的新视角和深刻洞察。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 对偶变换推导</h4>
          <p>详细推导一维量子横场Ising模型的对偶变换，验证对偶哈密顿量的形式。</p>
        </div>
        <div class="exercise-item"><h4>2. 自对偶条件</h4><p>证明$h = J$ 是系统的自对偶条件，并解释其物理意义。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 关联函数对偶</h4>
          <p>建立原始系统和对偶系统关联函数之间的对应关系。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 二维推广</h4>
          <p>尝试将对偶变换推广到二维量子Ising模型，讨论可能遇到的困难。</p>
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
  content: "🎯";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.duality-concept, .duality-transformation, .self-duality, .duality-applications,
.mathematical-structure, .experimental-relevance, .advanced-topics,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.duality-concept h2, .duality-transformation h2, .self-duality h2,
.duality-applications h2, .mathematical-structure h2, .experimental-relevance h2,
.advanced-topics h2, .summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.concept-introduction, .physical-motivation, .transformation-steps,
.detailed-transformation, .dual-hamiltonian, .self-dual-condition,
.critical-point-connection, .phase-diagram-analysis, .correlation-functions,
.universality-class, .group-theory-aspect, .topological-aspects,
.experimental-signatures, .quantum-simulation, .higher-dimensions,
.quantum-field-theory, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.examples-grid, .step-by-step, .phase-regions, .universality-insights,
.experimental-tests, .simulation-advantages, .dimension-effects,
.field-theory-connections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.example-card, .step-card, .region-card, .insight-item, .test-card,
.advantage-item, .dim-card, .connection-item {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.region-card.ordered {
  border-left: 4px solid #27ae60;
}

.region-card.disordered {
  border-left: 4px solid #f39c12;
}

.example-card h5, .step-card h4, .region-card h4, .insight-item h4,
.test-card h4, .advantage-item h4, .dim-card h4, .connection-item h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.duality-examples, .critical-analysis, .physical-interpretation,
.transformation-details, .duality-mapping, .correlation-mapping,
.group-structure, .topological-insights {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.duality-examples h4, .critical-analysis h4, .physical-interpretation h4,
.transformation-details h4, .duality-mapping h4, .correlation-mapping h4,
.group-structure h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.mapping-table {
  overflow-x: auto;
  margin: 1rem 0;
}

.mapping-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.mapping-table th, .mapping-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e1e8ff;
}

.mapping-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.mapping-table tr:hover {
  background: #f8faff;
}

.topological-insights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.topology-card {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.topology-card h4 {
  color: #27ae60;
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
  
  .examples-grid, .step-by-step, .phase-regions, .universality-insights,
  .experimental-tests, .simulation-advantages, .dimension-effects,
  .field-theory-connections {
    grid-template-columns: 1fr;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
  
  .mapping-table {
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
  
  .mapping-table {
    font-size: 0.8em;
  }
  
  .mapping-table th, .mapping-table td {
    padding: 0.5rem;
  }
}
</style>