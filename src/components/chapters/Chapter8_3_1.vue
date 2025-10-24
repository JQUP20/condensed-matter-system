<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3.1 Jordan-Wigner变换</h1>
      <p class="chapter-subtitle">自旋与费米子的奇妙桥梁</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解Jordan-Wigner变换的基本思想和数学原理</li>
        <li>掌握自旋算符到费米子算符的映射关系</li>
        <li>学习变换的具体实施步骤和技巧</li>
        <li>理解变换后哈密顿量的物理意义</li>
        <li>掌握反变换和物理量的计算方法</li>
      </ul>
    </div>

    <div class="transformation-motivation">
      <h2>变换的动机</h2>
      
      <div class="motivation-overview">
        <h3>为什么需要Jordan-Wigner变换？</h3>
        <p>
          量子横场Ising模型的哈密顿量包含了复杂的自旋相互作用项，
          直接求解是极其困难的。Jordan-Wigner变换提供了一个巧妙的途径：
          将自旋系统映射到费米子系统，从而利用费米子理论的成熟工具。
        </p>
        
        <div class="problem-solution">
          <div class="problem-card">
            <h4>🔴 原始问题</h4>
            <div class="problem-content">
              <p><strong>复杂的自旋相互作用</strong></p>
              <div class="formula-container">
                $$H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x$$</div>
              <ul>
                <li>非线性相互作用项</li>
                <li>不同方向的Pauli矩阵</li>
                <li>难以直接对角化</li>
              </ul>
            </div>
          </div>
          
          <div class="arrow">→</div>
          
          <div class="solution-card">
            <h4>🟢 变换后的解决方案</h4> <div class="solution-content"><p><strong>费米子的二次型哈密顿量</strong></p> <div class="formula-container">$$H = \sum_i \left[ J c_i^\dagger c_i - \frac{J}{2}(c_i^\dagger c_{i+1} + c_{i+1}^\dagger c_i) - \frac{h}{2}(c_i^\dagger + c_i)(c_{i+1}^\dagger + c_{i+1}) \right]$$</div>
              <ul>
                <li>二次型费米子算符</li>
                <li>可以通过标准方法对角化</li>
                <li>利用费米子理论的成熟工具</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="historical-context">
        <h3>历史背景</h3>
        <p>
          Jordan-Wigner变换由Pascual Jordan和Eugene Wigner在1928年提出，
          最初用于研究量子场论中的自旋统计关系。后来这一变换在
          凝聚态物理中找到了重要应用。
        </p>
        
        <div class="historical-timeline">
          <div class="timeline-item">
            <div class="year">1928</div>
            <div class="event">
              <h4>Jordan-Wigner变换提出</h4>
              <p>用于建立自旋与统计的关系</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1960s</div>
            <div class="event">
              <h4>应用于一维系统</h4>
              <p>开始用于求解一维量子自旋模型</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1970s</div>
            <div class="event">
              <h4>横场Ising模型</h4>
              <p>成功求解一维量子横场Ising模型</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="transformation-definition">
      <h2>变换的定义</h2>
      
      <div class="basic-mapping">
        <h3>基本映射关系</h3><p>Jordan-Wigner变换将第$i$个格点上的自旋算符映射为费米子算符：
        </p>
        
        <div class="mapping-equations">
          <div class="equation-group">
            <h4>正变换（自旋 → 费米子）</h4><div class="formula-container">$$\sigma_i^+ = c_i^\dagger \prod_{j&lt;i} (1 - 2c_j^\dagger c_j)$$</div> <div class="formula-container">$$\sigma_i^- = \prod_{j&lt;i} (1 - 2c_j^\dagger c_j) c_i$$</div> <div class="formula-container">$$\sigma_i^z = 2c_i^\dagger c_i - 1$$</div>
          </div> <div class="equation-group"><h4>反变换（费米子 → 自旋）</h4> <div class="formula-container">$$c_i^\dagger = \sigma_i^+ \prod_{j&lt;i} (-\sigma_j^z)$$</div> <div class="formula-container">$$c_i = \prod_{j&lt;i} (-\sigma_j^z) \sigma_i^-$$</div> <div class="formula-container">$$c_i^\dagger c_i = \frac{1 + \sigma_i^z}{2}$$</div>
          </div>
        </div>
      </div>

      <div class="string-operator">
        <h3>弦算符的理解</h3>
        <p> 变换中的关键是弦算符（string operator）：</p> <div class="formula-container">$$S_i = \prod_{j&lt;i} (1 - 2c_j^\dagger c_j) = \prod_{j&lt;i} (-\sigma_j^z)$$</div>
        
        <div class="string-properties">
          <h4>弦算符的性质</h4>
          <div class="properties-grid">
            <div class="property-card"> <h5>反对易关系</h5><p>弦算符确保费米子算符满足正确的反对易关系</p> <div class="formula-container">$$\{c_i, c_j^\dagger\} = \delta_{ij}$$</div>
            </div>
            
            <div class="property-card"> <h5>非局域性</h5><p>弦算符是非局域的，连接了所有左侧的格点</p> <div class="formula-container">$$S_i = (-1)^{\sum_{j&lt;i} n_j}$$</div>
            </div>
            
            <div class="property-card"> <h5>幺正性</h5><p>弦算符是幺正的</p> <div class="formula-container">$$S_i^\dagger S_i = 1$$</div>
            </div>
          </div>
        </div>
      </div>

      <div class="physical-interpretation">
        <h3>物理解释</h3>
        <p>
          Jordan-Wigner变换的物理意义可以从以下几个角度理解：
        </p>
        
        <div class="interpretation-aspects">
          <div class="aspect-card">
            <h4>🔄 统计变换</h4>
            <p>
              将玻色型的自旋激发转换为费米型的准粒子激发。
              弦算符记录了费米子的反对易统计。
            </p>
          </div>
          
          <div class="aspect-card">
            <h4>🎭 拓扑弦</h4>
            <p>
              弦算符可以理解为连接费米子和真空的"拓扑弦"，
              记录了系统的拓扑信息。
            </p>
          </div>
          
          <div class="aspect-card">
            <h4>🔗 非局域关联</h4>
            <p>
              变换引入了非局域的关联，反映了量子系统中
              长程量子纠缠的重要作用。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="hamiltonian-transformation">
      <h2>哈密顿量的变换</h2>
      
      <div class="step-by-step-transformation">
        <h3>逐项变换</h3>
        <p>
          现在我们将量子横场Ising模型的哈密顿量逐项进行变换：
        </p>
        
        <div class="transformation-steps">
          <div class="step-card">
            <h4>步骤1：Ising相互作用项</h4><p>原始项：$-J \sum_i \sigma_i^z \sigma_{i+1}^z$</p><div class="formula-container">$$\sigma_i^z \sigma_{i+1}^z = (2c_i^\dagger c_i - 1)(2c_{i+1}^\dagger c_{i+1} - 1)$$</div> <div class="formula-container">$$= 4c_i^\dagger c_i c_{i+1}^\dagger c_{i+1} - 2c_i^\dagger c_i - 2c_{i+1}^\dagger c_{i+1} + 1$$</div>
            <p> 变换后：</p> <div class="formula-container">$$-J \sum_i \sigma_i^z \sigma_{i+1}^z = -J \sum_i [4c_i^\dagger c_i c_{i+1}^\dagger c_{i+1} - 2c_i^\dagger c_i - 2c_{i+1}^\dagger c_{i+1} + 1]$$</div>
          </div>
          
          <div class="step-card">
            <h4>步骤2：横场项</h4><p>原始项：$-h \sum_i \sigma_i^x = -\frac{h}{2} \sum_i (\sigma_i^+ + \sigma_i^-)$</p><div class="formula-container">$$\sigma_i^+ = c_i^\dagger \prod_{j&lt;i} (1 - 2c_j^\dagger c_j)$$</div> <div class="formula-container">$$\sigma_i^- = \prod_{j&lt;i} (1 - 2c_j^\dagger c_j) c_i$$</div>
            <p> 对于相邻格点，弦算符大大简化：</p> <div class="formula-container">$$\sigma_i^+ + \sigma_i^- = c_i^\dagger \prod_{j&lt;i} (-\sigma_j^z) + \prod_{j&lt;i} (-\sigma_j^z) c_i$$</div>
          </div>
          
          <div class="step-card">
            <h4>步骤3：简化和重组</h4>
            <p> 经过仔细的代数操作，最终的费米子哈密顿量为：</p> <div class="formula-container">$$H = \sum_i \left[ J(2c_i^\dagger c_i - 1) - \frac{J}{2}(c_i^\dagger c_{i+1} + c_{i+1}^\dagger c_i) - \frac{h}{2}(c_i^\dagger + c_i) \right]$$</div>
            <p> 这可以重写为更紧凑的形式：</p> <div class="formula-container">$$H = \sum_i \left[ J c_i^\dagger c_i - \frac{J}{2}(c_i^\dagger c_{i+1} + \text{h.c.}) - \frac{h}{2}(c_i^\dagger + c_i) \right] - \frac{JN}{2}$$</div>
          </div>
        </div>
      </div>

      <div class="final-form">
        <h3>最终形式</h3>
        <p> 变换后的哈密顿量具有标准的费米子二次型形式：</p> <div class="formula-container">$$H = \sum_{i,j} c_i^\dagger H_{ij} c_j + \sum_i (V_i c_i^\dagger + V_i^* c_i) + E_0$$</div>
        
        <div class="parameters-explanation">
          <h4>参数说明</h4><ul><li><strong>$H_{ij}$</strong>：费米子跃迁矩阵</li><li><strong>$V_i$</strong>：外场耦合</li><li><strong>$E_0$</strong>：常数项</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="diagonalization-procedure">
      <h2>对角化过程</h2>
      
      <div class="fourier-transform">
        <h3>Fourier变换</h3>
        <p>
          为了对角化费米子哈密顿量，我们引入动量空间的费米子算符：
        </p><div class="formula-container">$$c_k = \frac{1}{\sqrt{N}} \sum_j e^{ikj} c_j$$</div> <div class="formula-container">$$c_j = \frac{1}{\sqrt{N}} \sum_k e^{-ikj} c_k$$</div><p>其中动量$k$取值为：
        </p><div class="formula-container">$$k = \frac{2\pi n}{N}, \quad n = 0, 1, 2, \ldots, N-1$$</div>
      </div>

      <div class="momentum-space-hamiltonian">
        <h3>动量空间哈密顿量</h3>
        <p> 在动量空间中，哈密顿量变为：</p> <div class="formula-container">$$H = \sum_k \left[ (J - J\cos k) c_k^\dagger c_k - \frac{h}{2}(c_k^\dagger + c_k) \right]$$</div><p>这仍然不是对角形式，因为存在$c_k^\dagger + c_k$项。
        </p>
      </div>

      <div class="bogoliubov-transformation">
        <h3>Bogoliubov变换</h3>
        <p>
          为了完全对角化，我们需要进行Bogoliubov变换：
        </p><div class="formula-container">$$\eta_k = u_k c_k + v_k c_{-k}^\dagger$$</div> <div class="formula-container">$$\eta_k^\dagger = u_k c_k^\dagger + v_k c_{-k}$$</div>
        
        <p> 其中系数满足：</p> <div class="formula-container">$$u_k^2 + v_k^2 = 1$$</div>
        
        <div class="coefficients-determination">
          <h4>系数的确定</h4>
          <p> 通过要求哈密顿量对角化，我们得到：</p> <div class="formula-container">$$u_k = \sqrt{\frac{1 + \cos k}{2}}, \quad v_k = \sqrt{\frac{1 - \cos k}{2}}$$</div>
        </div>
      </div>

      <div class="final-diagonal-form">
        <h3>最终对角形式</h3>
        <p> 经过完整的变换，哈密顿量的对角形式为：</p> <div class="formula-container">$$H = \sum_k E_k \eta_k^\dagger \eta_k + E_{\text{ground}}$$</div>
        
        <p> 其中准粒子能谱为：</p> <div class="formula-container">$$E_k = \sqrt{(J - J\cos k)^2 + h^2} = \sqrt{4J^2\sin^2(k/2) + h^2}$$</div>
        
        <p> 基态能量为：</p> <div class="formula-container">$$E_{\text{ground}} = -\frac{1}{2}\sum_k E_k$$</div>
      </div>
    </div>

    <div class="physical-properties">
      <h2>物理性质的计算</h2>
      
      <div class="ground-state-properties">
        <h3>基态性质</h3>
        <p>
          从对角化的结果，我们可以计算各种物理量：
        </p>
        
        <div class="properties-grid"> <div class="property-card"><h4>基态能量密度</h4> <div class="formula-container">$$e_0 = \frac{E_{\text{ground}}}{N} = -\frac{1}{2\pi}\int_0^{2\pi} dk \sqrt{4J^2\sin^2(k/2) + h^2}$$</div>
          </div> <div class="property-card"><h4>能隙</h4> <div class="formula-container">$$\Delta = \min_k E_k = |h - J|$$</div><p>在$k = 0$ 或 $k = \pi$处取得最小值</p>
          </div>
          
          <div class="property-card">
            <h4>磁化强度</h4><div class="formula-container">$$m = \langle \sigma^z \rangle = \frac{1}{N}\sum_i \langle \sigma_i^z \rangle$$</div>
            <p>需要通过反变换计算</p>
          </div>
        </div>
      </div>

      <div class="correlation-functions">
        <h3>关联函数</h3>
        <p>
          Jordan-Wigner变换使得关联函数的计算变得可行：
        </p>
        
        <div class="correlation-types"> <div class="correlation-card"><h4>纵向关联</h4> <div class="formula-container">$$G^{zz}(r) = \langle \sigma_0^z \sigma_r^z \rangle$$</div>
            <p> 在费米子表示中：</p> <div class="formula-container">$$G^{zz}(r) = \langle (2c_0^\dagger c_0 - 1)(2c_r^\dagger c_r - 1) \rangle$$</div>
          </div> <div class="correlation-card"><h4>横向关联</h4> <div class="formula-container">$$G^{xx}(r) = \langle \sigma_0^x \sigma_r^x \rangle$$</div>
            <p>
              由于弦算符的存在，计算更加复杂
            </p>
          </div>
        </div>
      </div>

      <div class="phase-transition">
        <h3>相变分析</h3>
        <p>
          从能谱的分析可以清楚地看到相变：
        </p>
        
        <div class="phase-analysis"><div class="phase-card ordered"><h4>有序相 ($h &lt; J$)</h4><ul><li>能隙：$\Delta = J - h > 0$</li><li>最小值在$k = \pi$</li>
              <li>长程磁有序</li>
            </ul>
          </div><div class="phase-card critical"><h4>临界点 ($h = J$)</h4><ul><li>能隙：$\Delta = 0$</li>
              <li>无质量激发</li>
              <li>代数衰减关联</li>
            </ul>
          </div><div class="phase-card disordered"><h4>无序相 ($h > J$)</h4><ul><li>能隙：$\Delta = h - J > 0$</li><li>最小值在$k = 0$</li>
              <li>指数衰减关联</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="advantages-limitations">
      <h2>优势与局限性</h2>
      
      <div class="advantages">
        <h3>Jordan-Wigner变换的优势</h3>
        
        <div class="advantage-list">
          <div class="advantage-item">
            <h4>精确性</h4>
            <p>
              变换是完全精确的，没有任何近似。
              所有的物理信息都被完整保留。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>系统性</h4>
            <p>
              提供了系统的求解方法，可以计算
              所有的物理量和关联函数。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>物理洞察</h4>
            <p>
              将复杂的自旋问题转化为相对简单的
              费米子问题，提供了新的物理图像。
            </p>
          </div>
          
          <div class="advantage-item">
            <h4>计算效率</h4>
            <p>
              费米子理论有成熟的计算工具，
              大大简化了数值和解析计算。
            </p>
          </div>
        </div>
      </div>

      <div class="limitations">
        <h3>主要局限性</h3>
        
        <div class="limitation-list">
          <div class="limitation-item">
            <h4>维度限制</h4>
            <p>
              Jordan-Wigner变换主要适用于一维系统。
              在高维情况下，弦算符变得极其复杂。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>非局域性</h4>
            <p>
              弦算符的非局域性使得某些物理量
              的计算变得复杂，特别是关联函数。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>边界条件敏感</h4>
            <p>
              变换对边界条件很敏感，
              开边界和周期边界的处理不同。
            </p>
          </div>
          
          <div class="limitation-item">
            <h4>推广困难</h4>
            <p>
              向更复杂的自旋模型推广时，
              变换的形式会变得非常复杂。
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          Jordan-Wigner变换是求解一维量子自旋系统的强大工具：
        </p>
        <ul>
          <li><strong>核心思想</strong>：将自旋算符映射为费米子算符</li>
          <li><strong>关键技巧</strong>：弦算符确保正确的反对易关系</li>
          <li><strong>变换结果</strong>：得到可对角化的费米子哈密顿量</li>
          <li><strong>物理意义</strong>：提供了新的物理图像和计算方法</li>
        </ul>
        <p>
          这一变换不仅解决了具体的计算问题，更重要的是展示了
          理论物理中不同表示之间的深刻联系。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>练习题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 变换关系验证</h4>
          <p>验证Jordan-Wigner变换确实保持了Pauli矩阵的对易关系。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 弦算符性质</h4>
          <p>证明弦算符的幺正性和它在变换中的作用。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 哈密顿量变换</h4>
          <p>详细推导横场Ising模型哈密顿量的Jordan-Wigner变换。</p>
        </div>
        <div class="exercise-item">
          <h4>4. 物理量计算</h4>
          <p>利用变换后的费米子表示计算磁化强度和关联函数。</p>
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

.transformation-motivation, .transformation-definition, .hamiltonian-transformation,
.diagonalization-procedure, .physical-properties, .advantages-limitations,
.summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.transformation-motivation h2, .transformation-definition h2, .hamiltonian-transformation h2,
.diagonalization-procedure h2, .physical-properties h2, .advantages-limitations h2,
.summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.motivation-overview, .historical-context, .basic-mapping, .string-operator,
.physical-interpretation, .step-by-step-transformation, .final-form,
.fourier-transform, .momentum-space-hamiltonian, .bogoliubov-transformation,
.final-diagonal-form, .ground-state-properties, .correlation-functions,
.phase-transition, .advantages, .limitations, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.problem-solution {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
}

.problem-card, .solution-card {
  flex: 1;
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.problem-card {
  border-left: 4px solid #e74c3c;
}

.solution-card {
  border-left: 4px solid #27ae60;
}

.problem-card h4, .solution-card h4 {
  margin-bottom: 1rem;
}

.arrow {
  font-size: 2em;
  color: #667eea;
  font-weight: bold;
}

.historical-timeline {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.year {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  min-width: 60px;
  text-align: center;
}

.event h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.mapping-equations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 1.5rem 0;
}

.equation-group {
  background: #f0f8ff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.equation-group h4 {
  color: #667eea;
  margin-bottom: 1rem;
  text-align: center;
}

.properties-grid, .interpretation-aspects, .transformation-steps,
.phase-analysis, .advantage-list, .limitation-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.property-card, .aspect-card, .step-card, .phase-card,
.advantage-item, .limitation-item {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.property-card h4, .property-card h5, .aspect-card h4, .step-card h4,
.phase-card h4, .advantage-item h4, .limitation-item h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.phase-card.ordered {
  border-left: 4px solid #27ae60;
}

.phase-card.critical {
  border-left: 4px solid #f39c12;
}

.phase-card.disordered {
  border-left: 4px solid #e74c3c;
}

.advantage-item {
  border-left: 4px solid #27ae60;
}

.limitation-item {
  border-left: 4px solid #e74c3c;
}

.string-properties, .parameters-explanation, .coefficients-determination {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.string-properties h4, .parameters-explanation h4, .coefficients-determination h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.correlation-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.correlation-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
  border-left: 4px solid #667eea;
}

.correlation-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
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
  
  .problem-solution {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .mapping-equations {
    grid-template-columns: 1fr;
  }
  
  .properties-grid, .interpretation-aspects, .transformation-steps,
  .phase-analysis, .advantage-list, .limitation-list {
    grid-template-columns: 1fr;
  }
  
  .correlation-types {
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