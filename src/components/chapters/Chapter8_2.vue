<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.2 一维量子横场Ising模型:看我的十八般兵器</h1>
      <p class="chapter-subtitle">量子相变理论的经典模型与多种求解技巧</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>掌握量子横场Ising模型的哈密顿量和物理图像</li>
        <li>理解量子相变的基本机制</li>
        <li>学习多种理论方法：Jordan-Wigner变换、微扰理论、平均场理论等</li>
        <li>掌握对偶变换的概念和应用</li>
        <li>理解量子临界现象和标度理论</li>
      </ul>
    </div>

    <div class="introduction-section">
      <h2>引言：量子涨落的威力</h2>
      <p>
        一维量子横场Ising模型（Transverse Field Ising Model, TFIM）是量子相变理论中的"果蝇"模型，
        就像生物学中的果蝇一样，它简单却包含了丰富的物理内容。这个模型展示了量子涨落如何在零温下
        驱动相变，是理解量子临界现象的重要起点。
      </p>
      
      <div class="physics-insight">
        <h3>物理直觉</h3>
        <p>
          想象一排磁性原子，每个原子的自旋可以指向上或下（z方向）。现在我们施加一个横向磁场（x方向），
          这个磁场会让自旋在x-z平面内"摆动"，产生量子涨落。当横向磁场足够强时，
          即使在绝对零度下，量子涨落也能破坏磁有序，导致量子相变的发生。
        </p>
      </div>
    </div>

    <div class="model-definition">
      <h2>模型定义</h2>
      
      <div class="hamiltonian-card">
        <h3>量子横场Ising哈密顿量</h3>
        <div class="formula-container">
          $$H = -J \sum_{i=1}^{N} \sigma_i^z \sigma_{i+1}^z - h \sum_{i=1}^{N} \sigma_i^x$$</div>
        <p>其中：</p><ul><li>$\sigma_i^{x,z}$是格点 i 上的Pauli矩阵</li><li>$J > 0$是铁磁交换耦合常数</li><li>$h$是横向磁场强度</li><li>周期边界条件：$\sigma_{N+1}^z = \sigma_1^z$</li>
        </ul>
      </div>

      <div class="physical-terms">
        <h3>物理项解释</h3>
        <div class="terms-grid">
          <div class="term-card">
            <h4>Ising相互作用项</h4><div class="formula-container">$$H_{\text{Ising}} = -J \sum_{i} \sigma_i^z \sigma_{i+1}^z$$</div>
            <p>倾向于使相邻自旋平行排列，产生铁磁有序</p>
          </div> <div class="term-card"><h4>横向磁场项</h4> <div class="formula-container">$$H_{\text{field}} = -h \sum_{i} \sigma_i^x$$</div>
            <p>产生量子涨落，倾向于破坏z方向的磁有序</p>
          </div>
        </div>
      </div>
    </div>

    <div class="phase-diagram">
      <h2>相图与量子相变</h2>
      
      <div class="phase-structure">
        <h3>基态相图</h3>
        <p>系统存在两个量子相：</p>
        
        <div class="phases-grid">
          <div class="phase-card ferromagnetic">
            <h4>铁磁相 (h < J)</h4><ul><li>基态：$|\uparrow\uparrow\cdots\uparrow\rangle$ 或 $|\downarrow\downarrow\cdots\downarrow\rangle$</li><li>自发磁化：$\langle \sigma^z \rangle \neq 0$</li><li>能隙：$\Delta > 0$</li>
              <li>关联长度有限</li>
            </ul>
          </div>
          
          <div class="phase-card paramagnetic">
            <h4>顺磁相 (h > J)</h4>
            <ul><li>基态：量子叠加态</li><li>磁化：$\langle \sigma^z \rangle = 0$</li><li>能隙：$\Delta > 0$</li>
              <li>关联长度有限</li>
            </ul>
          </div>
        </div>
        
        <div class="critical-point">
          <h4>量子临界点 (h = J)</h4><ul><li>能隙关闭：$\Delta = 0$</li><li>关联长度发散：$\xi \to \infty$</li>
            <li>幂律关联函数</li>
            <li>共形不变性</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="solution-methods">
      <h2>求解方法概览</h2>
      
      <div class="methods-intro">
        <p>
          一维量子横场Ising模型之所以被称为"十八般兵器"，是因为它可以用多种不同的理论方法求解，
          每种方法都能提供独特的物理洞察。这些方法包括：
        </p>
      </div>
      
      <div class="methods-grid">
        <div class="method-card">
          <h3>Jordan-Wigner变换</h3>
          <p>将自旋算符映射为费米子算符，将问题转化为自由费米子系统</p>
          <div class="method-features">
            <span class="feature-tag">精确解</span>
            <span class="feature-tag">解析方法</span>
          </div>
        </div>
        
        <div class="method-card">
          <h3>微扰理论</h3>
          <p>在强场或弱场极限下的微扰展开，适用于远离临界点的区域</p>
          <div class="method-features">
            <span class="feature-tag">近似方法</span>
            <span class="feature-tag">物理直觉</span>
          </div>
        </div>
        
        <div class="method-card">
          <h3>平均场理论</h3>
          <p>忽略量子涨落的关联，给出相变的定性图像</p>
          <div class="method-features">
            <span class="feature-tag">近似方法</span>
            <span class="feature-tag">简单直观</span>
          </div>
        </div>
        
        <div class="method-card">
          <h3>对偶变换</h3>
          <p>利用模型的对偶对称性，建立强弱耦合区域的联系</p>
          <div class="method-features">
            <span class="feature-tag">对称性</span>
            <span class="feature-tag">精确关系</span>
          </div>
        </div>
      </div>
    </div>

    <div class="key-results">
      <h2>主要结果</h2>
      
      <div class="results-summary">
        <div class="result-card">
          <h3>临界点</h3><div class="formula-container">$$h_c = J$$</div>
          <p>量子相变发生在横向磁场等于交换耦合的位置</p>
        </div> <div class="result-card"><h3>能隙</h3> <div class="formula-container">$$\Delta(h) = \begin{cases}
            2J|1 - h/J| & \text{if } |h/J - 1| \ll 1 \\2\min(J, h) & \text{otherwise}\end{cases}$$</div>
          <p>在临界点处能隙线性关闭</p>
        </div> <div class="result-card"><h3>关联长度</h3> <div class="formula-container">$$\xi \sim \frac{1}{|h - J|}$$</div><p>在临界点附近发散，临界指数$\nu = 1$</p>
        </div>
        
        <div class="result-card">
          <h3>磁化强度</h3><div class="formula-container">$$m \sim |h - J|^{1/8}$$</div><p>序参量的临界指数$\beta = 1/8$</p>
        </div>
      </div>
    </div>

    <div class="universality-class">
      <h2>普适类与共形场论</h2>
      
      <div class="universality-card">
        <h3>Ising普适类</h3>
        <p>一维量子横场Ising模型属于二维经典Ising模型的普适类，这是量子-经典对应的一个重要例子。在临界点处，系统表现出共形不变性，可以用$c = 1/2$的共形场论描述。
        </p>
        
        <div class="critical-exponents">
          <h4>临界指数</h4>
          <table>
            <thead>
              <tr>
                <th>物理量</th>
                <th>临界指数</th>
                <th>数值</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>磁化强度</td><td>$\beta$</td>
                <td>1/8</td>
              </tr>
              <tr><td>磁化率</td><td>$\gamma$</td>
                <td>7/4</td>
              </tr>
              <tr><td>关联长度</td><td>$\nu$</td>
                <td>1</td>
              </tr>
              <tr><td>比热</td><td>$\alpha$</td>
                <td>0 (对数)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="experimental-realizations">
      <h2>实验实现</h2>
      
      <div class="experiments-grid">
        <div class="experiment-card">
          <h3>冷原子系统</h3>
          <p>利用光晶格中的超冷原子实现量子横场Ising模型，可以精确控制参数</p>
        </div>
        
        <div class="experiment-card">
          <h3>离子阱</h3>
          <p>被囚禁的离子链可以模拟长程相互作用的横场Ising模型</p>
        </div>
        
        <div class="experiment-card">
          <h3>量子退火机</h3>
          <p>D-Wave等量子退火设备基于横场Ising模型的绝热演化</p>
        </div>
        
        <div class="experiment-card">
          <h3>超导量子比特</h3>
          <p>超导电路可以实现可控的横场Ising哈密顿量</p>
        </div>
      </div>
    </div>

    <div class="applications-section">
      <h2>应用与意义</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>量子计算</h3>
          <p>绝热量子计算和量子退火的理论基础</p>
        </div>
        
        <div class="application-card">
          <h3>量子模拟</h3>
          <p>作为量子模拟器的基准模型</p>
        </div>
        
        <div class="application-card">
          <h3>优化问题</h3>
          <p>组合优化问题的量子求解</p>
        </div>
        
        <div class="application-card">
          <h3>机器学习</h3>
          <p>量子机器学习算法的基础模型</p>
        </div>
      </div>
    </div>

    <div class="chapter-roadmap">
      <h2>本章学习路线</h2>
      
      <div class="roadmap-container">
        <div class="roadmap-item">
          <div class="roadmap-number">8.2.1</div>
          <div class="roadmap-content">
            <h4>一维量子Ising模型</h4>
            <p>详细推导模型的哈密顿量和基本性质</p>
          </div>
        </div>
        
        <div class="roadmap-item">
          <div class="roadmap-number">8.2.2</div>
          <div class="roadmap-content">
            <h4>微扰理论计算</h4>
            <p>在强场和弱场极限下的微扰展开</p>
          </div>
        </div>
        
        <div class="roadmap-item">
          <div class="roadmap-number">8.2.3</div>
          <div class="roadmap-content">
            <h4>平均场理论</h4>
            <p>量子平均场近似和相变分析</p>
          </div>
        </div>
        
        <div class="roadmap-item">
          <div class="roadmap-number">8.2.4</div>
          <div class="roadmap-content">
            <h4>对偶变换与自对偶</h4>
            <p>利用对偶对称性的精确关系</p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          一维量子横场Ising模型是量子相变理论的核心模型，它展示了：
        </p>
        <ul>
          <li>量子涨落如何在零温下驱动相变</li>
          <li>多种理论方法的应用和比较</li>
          <li>量子临界现象的基本特征</li>
          <li>理论与实验的紧密结合</li>
        </ul>
        <p>
          通过学习这个模型的"十八般兵器"，我们不仅掌握了具体的计算技巧，
          更重要的是理解了量子多体系统的基本物理图像。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>思考题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 物理图像</h4>
          <p>解释为什么横向磁场能够在零温下驱动相变？这与经典相变有什么本质区别？</p>
        </div>
        <div class="exercise-item">
          <h4>2. 对称性分析</h4>
          <p>分析量子横场Ising模型的对称性，并讨论对称性破缺与相变的关系。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 维度效应</h4>
          <p>比较一维、二维和三维量子横场Ising模型的相变性质，讨论维度的影响。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 实验设计</h4>
          <p>设计一个实验方案来观测量子横场Ising模型的相变，需要测量哪些物理量？</p>
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
  content: "⚡";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.introduction-section, .model-definition, .phase-diagram, .solution-methods,
.key-results, .universality-class, .experimental-realizations, .applications-section,
.chapter-roadmap, .summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.introduction-section h2, .model-definition h2, .phase-diagram h2,
.solution-methods h2, .key-results h2, .universality-class h2,
.experimental-realizations h2, .applications-section h2, .chapter-roadmap h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.physics-insight, .hamiltonian-card, .phase-structure, .methods-intro,
.universality-card, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.physics-insight h3, .hamiltonian-card h3, .phase-structure h3,
.universality-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.terms-grid, .phases-grid, .methods-grid, .results-summary,
.experiments-grid, .applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.term-card, .phase-card, .method-card, .result-card,
.experiment-card, .application-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.term-card h4, .phase-card h4, .method-card h3, .result-card h3,
.experiment-card h3, .application-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.phase-card.ferromagnetic {
  border-left: 4px solid #e74c3c;
}

.phase-card.paramagnetic {
  border-left: 4px solid #3498db;
}

.critical-point {
  background: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 2px solid #ffeaa7;
}

.critical-point h4 {
  color: #d63031;
  margin-bottom: 0.5rem;
}

.method-features {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.feature-tag {
  background: #667eea;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
}

.critical-exponents table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.critical-exponents th, .critical-exponents td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e1e8ff;
}

.critical-exponents th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.critical-exponents tr:hover {
  background: #f8faff;
}

.roadmap-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.roadmap-item {
  display: flex;
  align-items: center;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
}

.roadmap-number {
  background: #667eea;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1em;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

.roadmap-content h4 {
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
  
  .terms-grid, .phases-grid, .methods-grid, .results-summary,
  .experiments-grid, .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .roadmap-item {
    flex-direction: column;
    text-align: center;
  }
  
  .roadmap-number {
    margin-right: 0;
    margin-bottom: 1rem;
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
  
  .critical-exponents {
    font-size: 0.8em;
  }
  
  .critical-exponents th, .critical-exponents td {
    padding: 0.5rem;
  }
}
</style>