<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.2.2 微扰理论计算</h1>
      <p class="chapter-subtitle">在极限情况下窥探量子相变的奥秘</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>掌握量子多体系统的微扰理论方法</li>
        <li>学习强耦合和弱耦合极限的处理技巧</li>
        <li>理解有效哈密顿量的构造</li>
        <li>掌握能级修正和波函数修正的计算</li>
        <li>理解微扰理论的适用范围和局限性</li>
      </ul>
    </div>

    <div class="perturbation-setup">
      <h2>微扰理论设置</h2>
      
      <div class="general-framework">
        <h3>一般框架</h3>
        <p>
          量子横场Ising模型的哈密顿量可以写成：
        </p>
        <div class="formula-container">
          $$H = H_0 + \lambda V$$</div><p>其中$H_0$ 是未微扰哈密顿量，$V$ 是微扰项，$\lambda$是小参数。
          根据哪一项占主导，我们有两种不同的微扰方案：
        </p>
        
        <div class="schemes-grid">
          <div class="scheme-card">
            <h4>强Ising耦合极限 (J ≫ h)</h4><div class="formula-container">$$H_0 = -J \sum_i \sigma_i^z \sigma_{i+1}^z, \quad V = -\sum_i \sigma_i^x, \quad \lambda = h$$</div>
          </div> <div class="scheme-card"><h4>强横向磁场极限 (h ≫ J)</h4> <div class="formula-container">$$H_0 = -h \sum_i \sigma_i^x, \quad V = -\sum_i \sigma_i^z \sigma_{i+1}^z, \quad \lambda = J$$</div>
          </div>
        </div>
      </div>
    </div>

    <div class="strong-coupling-limit">
      <h2>强Ising耦合极限 (J ≫ h)</h2>
      
      <div class="unperturbed-system">
        <h3>未微扰系统</h3><p>当$h = 0$时，哈密顿量为：
        </p><div class="formula-container">$$H_0 = -J \sum_{i=1}^{N} \sigma_i^z \sigma_{i+1}^z$$</div>
        
        <div class="ground-states"> <h4>基态</h4><p>未微扰系统有两个简并的基态：</p> <div class="formula-container">$$|+\rangle = |\uparrow\uparrow\cdots\uparrow\rangle, \quad |-\rangle = |\downarrow\downarrow\cdots\downarrow\rangle$$</div><p>基态能量：$E_0^{(0)} = -JN$</p>
          
          <h4>激发态</h4>
          <p>最低激发态是单个自旋翻转态：</p><div class="formula-container">$$|\uparrow\cdots\uparrow\downarrow_i\uparrow\cdots\uparrow\rangle$$</div><p>激发能量：$E_1^{(0)} = -JN + 4J = -J(N-4)$</p><p>能隙：$\Delta_0 = E_1^{(0)} - E_0^{(0)} = 4J$</p>
        </div>
      </div>

      <div class="first-order-correction">
        <h3>一阶修正</h3><p>微扰项为：$V = -h \sum_i \sigma_i^x$</p>
        
        <div class="energy-correction">
          <h4>能量一阶修正</h4>
          <p>基态的一阶能量修正：</p><div class="formula-container">$$E_{\pm}^{(1)} = \langle \pm | V | \pm \rangle = -h \sum_i \langle \pm | \sigma_i^x | \pm \rangle = 0$$</div><p>这是因为$\sigma^x |\uparrow\rangle = |\downarrow\rangle$ 和 $\sigma^x |\downarrow\rangle = |\uparrow\rangle$，所以$\langle \uparrow | \sigma^x | \uparrow \rangle = 0$。
          </p>
        </div>

        <div class="degenerate-perturbation">
          <h4>简并微扰理论</h4>
          <p>由于基态是简并的，我们需要使用简并微扰理论。在简并子空间$\{|+\rangle, |-\rangle\}$中，微扰矩阵为：
          </p><div class="formula-container">$$W = \begin{pmatrix}
            \langle + | V | + \rangle & \langle + | V | - \rangle \\\langle - | V | + \rangle & \langle - | V | - \rangle\end{pmatrix}$$</div>
          
          <p>计算矩阵元：</p><div class="formula-container">$$\langle + | V | - \rangle = -h \sum_i \langle \uparrow\cdots\uparrow | \sigma_i^x | \downarrow\cdots\downarrow \rangle = 0$$</div><p>这是因为$\sigma_i^x$只能翻转一个自旋，无法将全上态变为全下态。
            因此一阶修正为零。
          </p>
        </div>
      </div>

      <div class="second-order-correction">
        <h3>二阶修正</h3>
        
        <div class="virtual-processes">
          <h4>虚过程分析</h4>
          <p>
            二阶微扰涉及虚过程：基态 → 激发态 → 基态。
            主要的虚过程是：
          </p>
          <div class="process-diagram"><div class="process-step"><span>$|+\rangle$</span>
              <span class="arrow">→</span>
              <span>单自旋翻转态</span><span class="arrow">→</span><span>$|-\rangle$</span>
            </div>
          </div>
        </div>

        <div class="effective-hamiltonian">
          <h4>有效哈密顿量</h4>
          <p>
            通过二阶微扰理论，我们可以导出有效哈密顿量：
          </p><div class="formula-container">$$H_{\text{eff}} = -\frac{h^2}{4J} \sum_i (\sigma_i^x \sigma_{i+1}^x + \sigma_i^y \sigma_{i+1}^y)$$</div>
          
          <p> 这可以写成更紧凑的形式：</p> <div class="formula-container">$$H_{\text{eff}} = -\frac{h^2}{2J} \sum_i (\sigma_i^+ \sigma_{i+1}^- + \sigma_i^- \sigma_{i+1}^+)$$</div><p>其中$\sigma^{\pm} = \frac{1}{2}(\sigma^x \pm i\sigma^y)$是升降算符。
          </p>
        </div>

        <div class="energy-splitting">
          <h4>基态能级分裂</h4>
          <p>
            有效哈密顿量在基态子空间中的矩阵元为：
          </p><div class="formula-container">$$\langle + | H_{\text{eff}} | - \rangle = -\frac{h^2 N}{2J}$$</div>
          
          <p> 对角化后得到能级分裂：</p> <div class="formula-container">$$E_{\pm} = E_0^{(0)} \pm \frac{h^2 N}{2J}$$</div>
          
          <p> 真正的基态是：</p> <div class="formula-container">$$|\psi_0\rangle = \frac{1}{\sqrt{2}}(|+\rangle + |-\rangle)$$</div><p>能量为：$E_0 = -JN - \frac{h^2 N}{2J}$</p>
        </div>
      </div>
    </div>

    <div class="weak-coupling-limit">
      <h2>强横向磁场极限 (h ≫ J)</h2>
      
      <div class="unperturbed-field-system">
        <h3>未微扰系统</h3><p>当$J = 0$时，哈密顿量为：
        </p><div class="formula-container">$$H_0 = -h \sum_{i=1}^{N} \sigma_i^x$$</div>
        
        <div class="field-eigenstates"> <h4>本征态</h4><p>每个自旋独立，本征态为：</p> <div class="formula-container">$$|\pm\rangle_x = \frac{1}{\sqrt{2}}(|\uparrow\rangle \pm |\downarrow\rangle)$$</div><p>对应的本征值：$\pm h$</p>
          
          <p>整个系统的基态：</p><div class="formula-container">$$|0\rangle = \prod_{i=1}^N |+\rangle_{x,i} = \prod_{i=1}^N \frac{1}{\sqrt{2}}(|\uparrow\rangle_i + |\downarrow\rangle_i)$$</div><p>基态能量：$E_0^{(0)} = -hN$</p>
        </div>
      </div>

      <div class="perturbative-expansion">
        <h3>微扰展开</h3><p>微扰项为：$V = -J \sum_i \sigma_i^z \sigma_{i+1}^z$</p>
        
        <div class="first-order-field">
          <h4>一阶修正</h4>
          <p>基态的一阶能量修正：</p><div class="formula-container">$$E_0^{(1)} = \langle 0 | V | 0 \rangle = -J \sum_i \langle 0 | \sigma_i^z \sigma_{i+1}^z | 0 \rangle$$</div><p>计算矩阵元：</p> <div class="formula-container">$$\langle +|_x \sigma^z |+\rangle_x = \frac{1}{2}\langle \uparrow + \downarrow | \sigma^z | \uparrow + \downarrow \rangle = 0$$</div><p>因此：$E_0^{(1)} = 0$</p>
        </div>

        <div class="second-order-field">
          <h4>二阶修正</h4>
          <p>
            二阶能量修正涉及所有激发态的贡献：
          </p><div class="formula-container">$$E_0^{(2)} = \sum_{n \neq 0} \frac{|\langle n | V | 0 \rangle|^2}{E_0^{(0)} - E_n^{(0)}}$$</div>
          
          <p> 主要贡献来自两个相邻自旋同时翻转的态。经过计算：</p> <div class="formula-container">$$E_0^{(2)} = -\frac{J^2(N-1)}{4h}$$</div>
        </div>
      </div>

      <div class="magnetization-calculation">
        <h3>磁化强度计算</h3>
        <p> 在强横向磁场极限下，z方向的磁化强度为：</p> <div class="formula-container">$$m_z = \langle 0 | \frac{1}{N} \sum_i \sigma_i^z | 0 \rangle = 0$$</div>
        
        <p> 但x方向的磁化强度为：</p> <div class="formula-container">$$m_x = \langle 0 | \frac{1}{N} \sum_i \sigma_i^x | 0 \rangle = 1$$</div>
        
        <p>
          这表明在强横向磁场下，系统完全极化在x方向。
        </p>
      </div>
    </div>

    <div class="comparison-analysis">
      <h2>两种极限的比较</h2>
      
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>性质</th>
              <th>强Ising耦合 (J ≫ h)</th>
              <th>强横向磁场 (h ≫ J)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>基态简并</td>
              <td>二重简并</td>
              <td>非简并</td>
            </tr>
            <tr><td>z方向磁化</td><td>$m_z \neq 0$</td><td>$m_z = 0$</td>
            </tr>
            <tr><td>x方向磁化</td><td>$m_x = 0$</td><td>$m_x = 1$</td>
            </tr>
            <tr><td>能隙</td><td>$\Delta \sim J$</td><td>$\Delta \sim h$</td>
            </tr>
            <tr>
              <td>关联长度</td>
              <td>有限</td>
              <td>有限</td>
            </tr>
            <tr>
              <td>主要激发</td>
              <td>自旋翻转</td>
              <td>自旋对翻转</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="validity-limitations">
      <h2>适用性和局限性</h2>
      
      <div class="validity-analysis">
        <h3>微扰理论的适用条件</h3>
        
        <div class="conditions-grid">
          <div class="condition-card">
            <h4>强Ising耦合极限</h4><ul><li>适用条件：$h \ll J$</li><li>失效区域：$h \approx J$（临界区域）</li><li>精度：$O(h^2/J)$</li>
            </ul>
          </div>
          
          <div class="condition-card">
            <h4>强横向磁场极限</h4><ul><li>适用条件：$J \ll h$</li><li>失效区域：$J \approx h$（临界区域）</li><li>精度：$O(J^2/h)$</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="limitations">
        <h3>主要局限性</h3>
        
        <div class="limitation-list">
          <div class="limitation-item">
            <h4>临界区域失效</h4><p>当$h \approx J$ 时，微扰参数不再是小量，微扰理论失效。
              这正是量子相变发生的区域，需要其他方法处理。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>高阶项的重要性</h4>
            <p>
              接近临界点时，高阶微扰项变得重要，
              可能导致微扰级数的发散或收敛性问题。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>非解析行为</h4>
            <p>
              相变点处的非解析行为（如临界指数）
              无法通过有限阶微扰理论准确描述。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="physical-insights">
      <h2>物理洞察</h2>
      
      <div class="insights-grid">
        <div class="insight-card">
          <h3>量子隧穿机制</h3>
          <p>
            强Ising耦合极限的二阶微扰揭示了量子隧穿的机制：
            系统通过虚激发在两个经典基态之间建立量子关联。
          </p>
        </div>
        
        <div class="insight-card">
          <h3>有效理论</h3>
          <p>
            微扰理论不仅给出能量修正，还提供了有效哈密顿量，
            这为理解低能物理提供了简化的描述。
          </p>
        </div>
        
        <div class="insight-card">
          <h3>对称性破缺</h3>
          <p>
            两种极限展现了不同的对称性：强Ising极限破缺Z₂对称性，
            强磁场极限保持Z₂对称性但破缺连续旋转对称性。
          </p>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          微扰理论为我们提供了理解量子横场Ising模型的重要工具：
        </p>
        <ul>
          <li><strong>系统性方法</strong>：在可控的近似下计算物理量</li>
          <li><strong>物理图像</strong>：揭示量子涨落和虚过程的作用</li>
          <li><strong>有效理论</strong>：构造低能有效哈密顿量</li>
          <li><strong>局限性认识</strong>：理解方法的适用范围</li>
        </ul>
        <p>
          虽然微扰理论在临界区域失效，但它为我们理解远离临界点的行为
          提供了精确的定量描述，是量子多体理论的基础工具之一。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 基态分裂计算</h4>
          <p>详细推导强Ising耦合极限下基态的二阶能量分裂公式。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 有效哈密顿量</h4>
          <p>从二阶微扰理论出发，推导有效哈密顿量的表达式，并解释其物理意义。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 激发态分析</h4>
          <p>计算强横向磁场极限下最低激发态的能量和波函数。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 收敛性分析</h4>
          <p>讨论微扰级数的收敛半径，并分析在什么条件下微扰理论失效。</p>
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
  content: "🔬";
  position: absolute;
  left: 0;
  font-weight: bold;
}

.perturbation-setup, .strong-coupling-limit, .weak-coupling-limit,
.comparison-analysis, .validity-limitations, .physical-insights,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.perturbation-setup h2, .strong-coupling-limit h2, .weak-coupling-limit h2,
.comparison-analysis h2, .validity-limitations h2, .physical-insights h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.general-framework, .unperturbed-system, .first-order-correction,
.second-order-correction, .unperturbed-field-system, .perturbative-expansion,
.magnetization-calculation, .validity-analysis, .limitations, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.schemes-grid, .conditions-grid, .insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.scheme-card, .condition-card, .insight-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.scheme-card h4, .condition-card h4, .insight-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
}

.ground-states, .energy-correction, .degenerate-perturbation,
.virtual-processes, .effective-hamiltonian, .energy-splitting,
.field-eigenstates, .first-order-field, .second-order-field {
  margin-top: 1.5rem;
}

.ground-states h4, .energy-correction h4, .degenerate-perturbation h4,
.virtual-processes h4, .effective-hamiltonian h4, .energy-splitting h4,
.field-eigenstates h4, .first-order-field h4, .second-order-field h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.process-diagram {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  text-align: center;
}

.process-step {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.arrow {
  color: #667eea;
  font-weight: bold;
  font-size: 1.2em;
}

.comparison-table {
  overflow-x: auto;
  margin: 1rem 0;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.comparison-table th, .comparison-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #e1e8ff;
}

.comparison-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.comparison-table tr:hover {
  background: #f8faff;
}

.limitation-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.limitation-item {
  background: #fff3cd;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
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
  
  .schemes-grid, .conditions-grid, .insights-grid {
    grid-template-columns: 1fr;
  }
  
  .process-step {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .formula-container {
    font-size: 0.9em;
    padding: 0.8rem;
  }
  
  .comparison-table {
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
  
  .comparison-table {
    font-size: 0.8em;
  }
  
  .comparison-table th, .comparison-table td {
    padding: 0.5rem;
  }
}
</style>