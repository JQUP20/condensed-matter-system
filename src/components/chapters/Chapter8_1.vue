<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.1 量子相变：量子力学压倒热运动</h1>
      <p class="chapter-subtitle">当量子涨落主导物理行为时的相变现象</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解量子相变与经典相变的根本区别</li>
        <li>掌握量子临界点的基本概念</li>
        <li>了解量子涨落如何驱动相变</li>
        <li>学习量子相变的实验观测方法</li>
        <li>认识量子相变在现代物理中的重要地位</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>引言：从热到量子</h2>
      <p>
        在我们之前学习的相变理论中，温度一直扮演着核心角色。无论是Ising模型的铁磁相变，
        还是KT相变的拓扑转变，都是由热涨落驱动的。但是，当我们将目光转向绝对零度附近时，
        一个全新的物理世界展现在我们面前——量子相变的世界。
      </p>
      <p>
        在这个世界里，不再是温度，而是量子涨落成为了相变的驱动力。这种相变发生在绝对零度，
        完全由量子力学的不确定性原理所驱动，展现了量子力学在宏观物理现象中的深刻影响。
      </p>
    </div>

    <div class="concept-section">
      <h2>量子相变的基本概念</h2>
      
      <div class="definition-card">
        <h3>量子相变的定义</h3>
        <p>
          量子相变是指在绝对零度（T = 0）下，通过改变系统的某个参数（如磁场、压强、掺杂浓度等）
          而发生的相变。这种相变完全由量子涨落驱动，而非热涨落。
        </p>
        <div class="formula-container">
          $$T = 0, \quad g = g_c \quad \Rightarrow \quad \text{量子相变}$$</div>
        <p>其中 g 是调节参数，g_c 是量子临界点。</p>
      </div>

      <div class="comparison-section">
        <h3>经典相变 vs 量子相变</h3>
        <div class="comparison-grid">
          <div class="comparison-item">
            <h4>经典相变</h4>
            <ul>
              <li>驱动力：热涨落</li>
              <li>发生条件：有限温度</li>
              <li>控制参数：温度 T</li>
              <li>典型例子：铁磁相变</li>
            </ul>
          </div>
          <div class="comparison-item">
            <h4>量子相变</h4>
            <ul>
              <li>驱动力：量子涨落</li>
              <li>发生条件：绝对零度</li>
              <li>控制参数：外场、压强等</li>
              <li>典型例子：量子横场Ising模型</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="physics-section">
      <h2>量子涨落的物理图像</h2>
      
      <div class="physics-card">
        <h3>不确定性原理的宏观体现</h3>
        <p>
          量子相变的根源在于海森堡不确定性原理。即使在绝对零度下，量子系统也不能完全静止，
          必须保持一定的零点运动。这种零点涨落在某些条件下可以变得足够强烈， 从而改变系统的基态性质。</p> <div class="formula-container">$$\Delta x \Delta p \geq \frac{\hbar}{2}$$</div><p>这意味着即使在 T = 0 时，系统仍然具有动能：</p> <div class="formula-container">$$\langle T \rangle = \frac{\langle p^2 \rangle}{2m} \neq 0$$</div>
      </div>

      <div class="mechanism-card">
        <h3>量子相变的机制</h3>
        <p> 考虑一个简单的量子系统，其哈密顿量可以写成：</p> <div class="formula-container">$$H = H_0 + g V$$</div>
        <p>
          其中 H₀ 是未扰动的哈密顿量，V 是扰动项，g 是耦合强度。当 g 变化时，
          系统的基态可能发生质的改变，这就是量子相变。
        </p>
        
        <div class="phase-diagram">
          <h4>量子相图</h4>
          <p>
            在量子相变中，相图通常以调节参数 g 和温度 T 为坐标轴。 量子临界点位于 T = 0 轴上，从这一点出发的临界线延伸到有限温度区域。</p> <div class="formula-container">$$g < g_c: \quad \text{量子无序相}$$$$g > g_c: \quad \text{量子有序相}$$$$g = g_c, T = 0: \quad \text{量子临界点}$$</div>
        </div>
      </div>
    </div>

    <div class="examples-section">
      <h2>量子相变的典型例子</h2>
      
      <div class="example-grid">
        <div class="example-card"> <h3>量子横场Ising模型</h3><p>最经典的量子相变模型，通过横向磁场调节量子涨落强度。</p> <div class="formula-container">$$H = -J\sum_{\langle i,j \rangle} \sigma_i^z \sigma_j^z - h\sum_i \sigma_i^x$$
          </div>
        </div>
        
        <div class="example-card">
          <h3>超导-绝缘体相变</h3>
          <p>在约瑟夫森结阵列中观察到的量子相变，由电荷涨落和相位涨落的竞争驱动。</p>
        </div>
        
        <div class="example-card">
          <h3>量子磁性系统</h3>
          <p>如自旋梯子系统中的量子相变，展现了量子自旋液体等奇异相。</p>
        </div>
      </div>
    </div>

    <div class="experimental-section">
      <h2>实验观测</h2>
      
      <div class="experiment-card">
        <h3>实验挑战</h3>
        <p>
          观测量子相变面临独特的实验挑战：
        </p>
        <ul>
          <li>需要极低温度（通常 < 1K）</li>
          <li>需要精确控制调节参数</li>
          <li>量子涨落效应微弱，需要高精度测量</li>
          <li>有限温度效应的干扰</li>
        </ul>
      </div>

      <div class="observation-methods">
        <h3>主要观测方法</h3>
        <div class="method-grid">
          <div class="method-card">
            <h4>比热测量</h4>
            <p>通过比热的异常行为识别量子临界点</p>
          </div>
          <div class="method-card">
            <h4>磁化率测量</h4>
            <p>磁化率在量子临界点附近的发散行为</p>
          </div>
          <div class="method-card">
            <h4>输运性质</h4>
            <p>电阻率等输运系数的临界行为</p>
          </div>
          <div class="method-card">
            <h4>中子散射</h4>
            <p>直接探测自旋涨落的动力学性质</p>
          </div>
        </div>
      </div>
    </div>

    <div class="applications-section">
      <h2>量子相变的重要意义</h2>
      
      <div class="significance-grid">
        <div class="significance-card">
          <h3>理论意义</h3>
          <ul>
            <li>揭示了量子力学在宏观现象中的作用</li>
            <li>连接了量子力学和统计力学</li>
            <li>为理解强关联电子系统提供了新视角</li>
          </ul>
        </div>
        
        <div class="significance-card">
          <h3>实验意义</h3>
          <ul>
            <li>推动了极低温技术的发展</li>
            <li>促进了新材料的发现</li>
            <li>为量子器件设计提供指导</li>
          </ul>
        </div>
        
        <div class="significance-card">
          <h3>应用前景</h3>
          <ul>
            <li>量子计算和量子信息</li>
            <li>高温超导机理研究</li>
            <li>拓扑量子材料</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          量子相变代表了凝聚态物理学的一个重要前沿领域。它不仅展现了量子力学在宏观世界中的深刻影响，
          也为我们理解复杂量子多体系统提供了新的理论框架。通过学习量子相变，
          我们可以更好地理解现代凝聚态物理中的许多重要现象，如高温超导、量子自旋液体等。
        </p>
        <p>
          在接下来的章节中，我们将深入学习具体的量子相变模型，特别是量子横场Ising模型，
          它将为我们提供理解量子相变的具体工具和方法。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>思考题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 概念理解</h4>
          <p>解释为什么量子相变只能发生在绝对零度？热涨落如何影响量子相变？</p>
        </div>
        <div class="exercise-item">
          <h4>2. 物理图像</h4>
          <p>描述量子涨落如何驱动相变，并与经典热涨落驱动的相变进行对比。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 实验设计</h4>
          <p>设计一个实验来观测量子相变，需要考虑哪些关键因素？</p>
        </div>
        <div class="exercise-item">
          <h4>4. 应用思考</h4>
          <p>量子相变理论如何帮助我们理解高温超导体的性质？</p>
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
  background: #f8f9ff;
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
  content: "✓";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.content-section, .concept-section, .physics-section, .examples-section, 
.experimental-section, .applications-section, .summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.content-section h2, .concept-section h2, .physics-section h2, 
.examples-section h2, .experimental-section h2, .applications-section h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.definition-card, .physics-card, .mechanism-card, .experiment-card, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.comparison-section {
  margin: 1.5rem 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1rem;
}

.comparison-item {
  background: #f8f9ff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.comparison-item h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.phase-diagram {
  background: #f0f4ff;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.example-grid, .method-grid, .significance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.example-card, .method-card, .significance-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-top: 4px solid #667eea;
}

.example-card h3, .method-card h4, .significance-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.observation-methods {
  margin-top: 1.5rem;
}

.formula-container {
  background: #f8f9ff;
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
  background: #f8f9ff;
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
  
  .comparison-grid, .example-grid, .method-grid, .significance-grid {
    grid-template-columns: 1fr;
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