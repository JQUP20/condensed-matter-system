<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.2.3 平均场理论</h1>
      <p class="chapter-subtitle">用经典直觉理解量子相变</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>掌握量子平均场理论的基本思想</li>
        <li>学习自洽方程的建立和求解</li>
        <li>理解量子相变的平均场图像</li>
        <li>掌握临界点和临界指数的计算</li>
        <li>了解平均场理论的优势和局限性</li>
      </ul>
    </div>

    <div class="mean-field-concept">
      <h2>平均场理论的基本思想</h2>
      
      <div class="concept-introduction">
        <h3>从经典到量子</h3>
        <p>
          平均场理论的核心思想是用平均值来替代涨落，从而将复杂的多体问题
          简化为单体问题。在量子横场Ising模型中，我们需要处理量子涨落，
          这使得问题比经典情况更加复杂。
        </p>
        
        <div class="approximation-idea">
          <h4>近似思想</h4>
          <p>
            对于相互作用项 $\sigma_i^z \sigma_{i+1}^z$，我们做如下近似：
          </p><div class="formula-container">$$\sigma_i^z \sigma_{i+1}^z \approx \langle \sigma_i^z \rangle \sigma_{i+1}^z + \sigma_i^z \langle \sigma_{i+1}^z \rangle - \langle \sigma_i^z \rangle \langle \sigma_{i+1}^z \rangle$$</div><p>这里忽略了涨落项$(\sigma_i^z - \langle \sigma_i^z \rangle)(\sigma_{i+1}^z - \langle \sigma_{i+1}^z \rangle)$。
          </p>
        </div>
      </div>

      <div class="quantum-vs-classical">
        <h3>量子与经典平均场的区别</h3>
        
        <div class="comparison-grid">
          <div class="comparison-card classical">
            <h4>经典平均场</h4>
            <ul>
              <li>处理热涨落</li><li>温度驱动的相变</li><li>序参量：$\langle S^z \rangle$</li>
              <li>自洽方程涉及Boltzmann因子</li>
            </ul>
          </div>
          
          <div class="comparison-card quantum">
            <h4>量子平均场</h4>
            <ul>
              <li>处理量子涨落</li><li>零温量子相变</li><li>序参量：$\langle \sigma^z \rangle$</li>
              <li>自洽方程涉及量子期望值</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mean-field-hamiltonian">
      <h2>平均场哈密顿量</h2>
      
      <div class="hamiltonian-construction">
        <h3>哈密顿量的构造</h3>
        <p>
          原始哈密顿量：
        </p><div class="formula-container">$$H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x$$</div><p>在平均场近似下，假设所有格点等价，设$m = \langle \sigma_i^z \rangle$，则：
        </p><div class="formula-container">$$\sigma_i^z \sigma_{i+1}^z \approx m(\sigma_i^z + \sigma_{i+1}^z) - m^2$$</div>
        
        <p> 平均场哈密顿量变为：</p> <div class="formula-container">$$H_{\text{MF}} = -Jm \sum_i (\sigma_i^z + \sigma_{i+1}^z) + JNm^2 - h \sum_i \sigma_i^x$$</div>
        
        <p> 简化后得到：</p> <div class="formula-container">$$H_{\text{MF}} = \sum_i H_i^{\text{eff}} + \text{常数}$$</div>
        <p> 其中有效单格点哈密顿量为：</p> <div class="formula-container">$$H_i^{\text{eff}} = -2Jzm \sigma_i^z - h \sigma_i^x$$</div><p>这里$z$ 是配位数（一维情况下 $z = 2$）。</p>
      </div>

      <div class="effective-field">
        <h3>有效磁场</h3>
        <p>
          有效单格点哈密顿量可以写成：
        </p><div class="formula-container">$$H_i^{\text{eff}} = -h_{\text{eff}}^z \sigma_i^z - h \sigma_i^x$$</div>
        <p> 其中有效z方向磁场为：</p> <div class="formula-container">$$h_{\text{eff}}^z = 2Jzm = 4Jm \quad \text{(一维情况)}$$</div>
        
        <div class="field-interpretation">
          <h4>物理解释</h4><p>有效磁场$h_{\text{eff}}^z$代表了相邻自旋对当前自旋的平均作用。当磁化强度$m$增大时，有效磁场也增强，进一步稳定磁有序状态。
            这体现了铁磁相互作用的正反馈机制。
          </p>
        </div>
      </div>
    </div>

    <div class="self-consistent-equation">
      <h2>自洽方程</h2>
      
      <div class="equation-derivation">
        <h3>方程推导</h3>
        <p>
          为了求解有效单格点问题，我们需要对角化：
        </p><div class="formula-container">$$H_i^{\text{eff}} = -4Jm \sigma_i^z - h \sigma_i^x$$</div>
        
        <p> 这个哈密顿量可以写成：</p> <div class="formula-container">$$H_i^{\text{eff}} = -\vec{B}_{\text{eff}} \cdot \vec{\sigma}_i$$</div><p>其中$\vec{B}_{\text{eff}} = (h, 0, 4Jm)$，$|\vec{B}_{\text{eff}}| = \sqrt{h^2 + 16J^2m^2}$。
        </p>
      </div>

      <div class="eigenvalue-problem">
        <h3>本征值问题</h3>
        <p>
          有效哈密顿量的本征值为：
        </p><div class="formula-container">$$E_{\pm} = \mp \sqrt{h^2 + 16J^2m^2}$$</div><p>基态对应$E_- = -\sqrt{h^2 + 16J^2m^2}$，基态波函数为：
        </p><div class="formula-container">$$|\psi_0\rangle = \cos\frac{\theta}{2}|\uparrow\rangle + \sin\frac{\theta}{2}|\downarrow\rangle$$</div>
        <p> 其中：</p> <div class="formula-container">$$\cos\theta = \frac{4Jm}{\sqrt{h^2 + 16J^2m^2}}, \quad \sin\theta = \frac{h}{\sqrt{h^2 + 16J^2m^2}}$$</div>
      </div>

      <div class="self-consistency">
        <h3>自洽条件</h3>
        <p> 磁化强度的自洽方程为：</p> <div class="formula-container">$$m = \langle \psi_0 | \sigma^z | \psi_0 \rangle = \cos^2\frac{\theta}{2} - \sin^2\frac{\theta}{2} = \cos\theta$$</div><p>代入$\cos\theta$的表达式，得到：
        </p><div class="formula-container">$$m = \frac{4Jm}{\sqrt{h^2 + 16J^2m^2}}$$</div>
        
        <p>
          这就是量子横场Ising模型的平均场自洽方程。
        </p>
      </div>
    </div>

    <div class="phase-diagram-analysis">
      <h2>相图分析</h2>
      
      <div class="solution-analysis">
        <h3>自洽方程的解</h3><p>自洽方程$m = \frac{4Jm}{\sqrt{h^2 + 16J^2m^2}}$ 的解取决于参数 $h/J$的值。
        </p>
        
        <div class="solution-cases"><div class="case-card"><h4>情况1：$m = 0$（顺磁解）</h4><p>$m = 0$总是自洽方程的解，对应顺磁相。
            </p>
          </div><div class="case-card"><h4>情况2：$m \neq 0$（铁磁解）</h4><p>当$m \neq 0$ 时，可以约去 $m$，得到：
            </p><div class="formula-container">$$1 = \frac{4J}{\sqrt{h^2 + 16J^2m^2}}$$</div>
            <p> 解得：</p> <div class="formula-container">$$m^2 = \frac{1}{16J^2}\left((4J)^2 - h^2\right) = \frac{16J^2 - h^2}{16J^2}$$</div>
          </div>
        </div>
      </div>

      <div class="critical-point">
        <h3>临界点</h3><p>非零解存在的条件是$16J^2 - h^2 \geq 0$，即：
        </p><div class="formula-container">$$h \leq 4J$$</div>
        
        <p> 因此，平均场理论预言的临界点为：</p> <div class="formula-container">$$h_c^{\text{MF}} = 4J$$</div>
        
        <div class="critical-comparison">
          <h4>与精确结果的比较</h4><p>精确结果：$h_c = J$</p><p>平均场结果：$h_c^{\text{MF}} = 4J$</p>
          <p>
            平均场理论高估了临界磁场，这是因为它忽略了量子涨落的作用。
          </p>
        </div>
      </div>

      <div class="phase-behavior">
        <h3>相的行为</h3>
        
        <div class="phases-grid"><div class="phase-card ordered"><h4>有序相 ($h < 4J$)</h4><ul><li>磁化强度：$m = \frac{1}{4J}\sqrt{16J^2 - h^2}$</li><li>能隙：$\Delta = 2\sqrt{h^2 + 16J^2m^2} = 8J$</li>
              <li>自发对称性破缺</li>
            </ul>
          </div><div class="phase-card disordered"><h4>无序相 ($h > 4J$)</h4><ul><li>磁化强度：$m = 0$</li><li>能隙：$\Delta = 2h$</li>
              <li>对称性未破缺</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="critical-exponents">
      <h2>临界指数</h2>
      
      <div class="exponent-calculation">
        <h3>序参量临界指数</h3><p>在临界点附近，设$h = 4J - \delta h$，其中 $\delta h \ll 4J$。
          磁化强度的行为为：
        </p><div class="formula-container">$$m = \frac{1}{4J}\sqrt{16J^2 - (4J - \delta h)^2} \approx \frac{1}{4J}\sqrt{8J \delta h} = \sqrt{\frac{\delta h}{2J}}$$</div>
        
        <p> 因此：</p> <div class="formula-container">$$m \propto |h - h_c|^{1/2}$$</div><p>序参量的临界指数为：$\beta = 1/2$</p>
      </div>

      <div name="susceptibility-exponent">
        <h3>磁化率临界指数</h3>
        <p>
          磁化率定义为：
        </p><div class="formula-container">$$\chi = \frac{\partial m}{\partial h}$$</div>
        
        <p> 在有序相中：</p> <div class="formula-container">$$\chi = \frac{\partial}{\partial h}\left(\frac{\sqrt{16J^2 - h^2}}{4J}\right) = \frac{h}{4J\sqrt{16J^2 - h^2}}$$</div>
        
        <p> 在临界点处：</p> <div class="formula-container">$$\chi \propto |h - h_c|^{-1/2}$$</div><p>磁化率的临界指数为：$\gamma = 1/2$</p>
      </div>

      <div class="exponents-summary">
        <h3>临界指数总结</h3>
        
        <div class="exponents-table">
          <table>
            <thead>
              <tr>
                <th>物理量</th>
                <th>行为</th>
                <th>平均场指数</th>
                <th>精确指数</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>磁化强度</td><td>$m \propto |h-h_c|^\beta$</td>
                <td>1/2</td>
                <td>1/8</td>
              </tr>
              <tr><td>磁化率</td><td>$\chi \propto |h-h_c|^{-\gamma}$</td>
                <td>1/2</td>
                <td>7/4</td>
              </tr>
              <tr><td>关联长度</td><td>$\xi \propto |h-h_c|^{-\nu}$</td>
                <td>1/2</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="advantages-limitations">
      <h2>优势与局限性</h2>
      
      <div class="advantages">
        <h3>平均场理论的优势</h3>
        
        <div class="advantage-list">
          <div class="advantage-item">
            <h4>简单直观</h4>
            <p>
              将复杂的多体问题简化为单体问题，
              提供了清晰的物理图像和直观的理解。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>定性正确</h4>
            <p>
              正确预言了相变的存在、相的性质、
              以及序参量的基本行为。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>计算简便</h4>
            <p>
              避免了复杂的多体计算，
              可以快速获得系统的基本性质。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>普遍适用</h4>
            <p>
              方法具有普遍性，可以应用于
              各种不同的量子多体系统。
            </p>
          </div>
        </div>
      </div>

      <div class="limitations">
        <h3>主要局限性</h3>
        
        <div class="limitation-list">
          <div class="limitation-item">
            <h4>忽略涨落</h4>
            <p>
              完全忽略了量子涨落和关联效应，
              这在低维系统中尤其重要。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>临界指数不准确</h4>
            <p>
              给出的临界指数是平均场值，
              与真实的临界指数存在显著差异。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>临界点位置偏移</h4>
            <p>
              预言的临界点位置通常不准确，
              往往高估或低估真实的临界点。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>维度依赖性</h4>
            <p>
              在低维系统中精度较差，
              在高维系统中相对更准确。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="physical-insights">
      <h2>物理洞察</h2>
      
      <div class="insights-grid">
        <div class="insight-card">
          <h3>竞争机制</h3>
          <p>
            平均场理论清晰地展示了Ising相互作用和横向磁场之间的竞争：
            前者倾向于建立磁有序，后者倾向于破坏磁有序。
          </p>
        </div>
        
        <div class="insight-card">
          <h3>自洽性</h3>
          <p>
            自洽方程体现了系统的自组织特性：
            磁化强度通过相互作用增强自身，
            形成稳定的有序状态。
          </p>
        </div>
        
        <div class="insight-card">
          <h3>对称性破缺</h3>
          <p>
            平均场理论展示了自发对称性破缺的机制：
            当参数超过临界值时，对称的解变得不稳定，
            系统选择破缺对称性的解。
          </p>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          量子平均场理论为我们提供了理解量子相变的重要工具：
        </p>
        <ul>
          <li><strong>简化方法</strong>：将多体问题简化为自洽的单体问题</li>
          <li><strong>物理图像</strong>：清晰展示竞争机制和对称性破缺</li>
          <li><strong>定量预言</strong>：给出临界点、序参量等的定量结果</li>
          <li><strong>局限性认识</strong>：理解方法的适用范围和精度限制</li>
        </ul>
        <p>
          虽然平均场理论在定量精度上有局限，但它提供的物理直觉和定性理解
          对于研究量子多体系统具有重要价值。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 自洽方程推导</h4>
          <p>详细推导量子横场Ising模型的平均场自洽方程，并解释每一步的物理意义。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 临界指数计算</h4>
          <p>计算磁化率和比热的临界指数，并与精确结果进行比较。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 稳定性分析</h4>
          <p>分析平均场解的稳定性，确定在什么条件下铁磁解比顺磁解更稳定。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 维度推广</h4>
          <p>将平均场理论推广到二维和三维情况，讨论维度对临界点的影响。</p>
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

.mean-field-concept, .mean-field-hamiltonian, .self-consistent-equation,
.phase-diagram-analysis, .critical-exponents, .advantages-limitations,
.physical-insights, .summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.mean-field-concept h2, .mean-field-hamiltonian h2, .self-consistent-equation h2,
.phase-diagram-analysis h2, .critical-exponents h2, .advantages-limitations h2,
.physical-insights h2, .summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.concept-introduction, .hamiltonian-construction, .effective-field,
.equation-derivation, .eigenvalue-problem, .self-consistency,
.solution-analysis, .critical-point, .phase-behavior, .exponent-calculation,
.advantages, .limitations, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.comparison-grid, .solution-cases, .phases-grid, .insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.comparison-card, .case-card, .phase-card, .insight-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.comparison-card.classical {
  border-left: 4px solid #e74c3c;
}

.comparison-card.quantum {
  border-left: 4px solid #3498db;
}

.phase-card.ordered {
  border-left: 4px solid #27ae60;
}

.phase-card.disordered {
  border-left: 4px solid #f39c12;
}

.comparison-card h4, .case-card h4, .phase-card h4, .insight-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.approximation-idea, .field-interpretation, .critical-comparison {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.approximation-idea h4, .field-interpretation h4, .critical-comparison h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
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
  border-bottom: 1px solid #e1e8ff;
}

.exponents-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.exponents-table tr:hover {
  background: #f8faff;
}

.advantage-list, .limitation-list {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.advantage-item {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.limitation-item {
  background: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.advantage-item h4 {
  color: #27ae60;
  margin-bottom: 0.5rem;
}

.limitation-item h4 {
  color: #856404;
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
  
  .comparison-grid, .solution-cases, .phases-grid, .insights-grid {
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