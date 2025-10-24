<template>
  <div class="chapter-container">
    <div class="chapter-header">
      <h1 class="chapter-title">8.3 量子Ising模型的精确解：旅行中最美的珍珠</h1>
      <p class="chapter-subtitle">理论物理的瑰宝：从数学之美到物理洞察</p>
    </div>

    <div class="learning-objectives">
      <h2>学习目标</h2>
      <ul>
        <li>理解精确解在理论物理中的重要地位</li>
        <li>掌握量子Ising模型精确解的基本思路</li>
        <li>学习各种精确求解方法的特点和适用范围</li>
        <li>理解精确解与数值方法、近似方法的关系</li>
        <li>认识精确解对理解量子多体系统的深刻意义</li>
      </ul>
    </div>

    <div class="exact-solution-importance">
      <h2>精确解的重要性</h2>
      
      <div class="importance-overview">
        <h3>为什么精确解如此珍贵？</h3>
        <p>
          在理论物理的广阔天空中，精确解就像夜空中最亮的星星。
          它们不仅为我们提供了完全准确的答案，更重要的是，
          它们揭示了物理定律的深层结构和数学之美。
        </p>
        
        <div class="importance-aspects">
          <div class="aspect-card theoretical">
            <h4>🎯 理论基准</h4>
            <p>
              精确解为检验近似方法和数值计算提供了黄金标准。
              没有精确解的指引，我们很难判断其他方法的准确性。
            </p>
          </div>
          
          <div class="aspect-card physical">
            <h4>🔍 物理洞察</h4>
            <p>
              精确解能够揭示系统的本质特征，包括相变机制、
              临界行为、激发谱等，这些洞察往往是近似方法无法提供的。
            </p>
          </div>
          
          <div class="aspect-card mathematical">
            <h4>🧮 数学之美</h4>
            <p>
              精确解展现了数学与物理的完美结合，
              往往涉及深刻的数学结构和优雅的数学技巧。
            </p>
          </div>
          
          <div class="aspect-card predictive">
            <h4>🔮 预言能力</h4>
            <p>
              精确解能够给出系统在所有参数范围内的完整行为，
              为实验设计和应用提供精确指导。
            </p>
          </div>
        </div>
      </div>

      <div class="historical-context">
        <h3>历史背景</h3>
        <p>
          量子多体系统的精确解历史悠久且充满传奇色彩：
        </p>
        
        <div class="historical-timeline">
          <div class="timeline-item">
            <div class="year">1925</div>
            <div class="event">
              <h4>Ising模型</h4>
              <p>Ernst Ising求解了一维经典Ising模型，发现无相变</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1944</div>
            <div class="event">
              <h4>Onsager解</h4>
              <p>Lars Onsager求解了二维经典Ising模型，震惊物理学界</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1961</div>
            <div class="event">
              <h4>Lieb-Liniger模型</h4>
              <p>一维玻色气体的精确解，开启了可积量子系统研究</p>
            </div>
          </div>
          
          <div class="timeline-item">
            <div class="year">1970</div>
            <div class="event">
              <h4>量子横场Ising模型</h4>
              <p>通过Jordan-Wigner变换获得精确解</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="model-overview">
      <h2>模型回顾</h2>
      
      <div class="hamiltonian-review">
        <h3>哈密顿量</h3>
        <p>
          一维量子横场Ising模型的哈密顿量为：
        </p>
        <div class="formula-container">
          $$H = -J \sum_{i=1}^N \sigma_i^z \sigma_{i+1}^z - h \sum_{i=1}^N \sigma_i^x$$</div>
        
        <div class="parameter-explanation">
          <h4>参数说明</h4><ul><li><strong>$J > 0$</strong>：铁磁Ising相互作用强度</li><li><strong>$h > 0$</strong>：横向磁场强度</li><li><strong>$\sigma_i^{x,z}$</strong>：第$i$个格点上的Pauli矩阵</li><li><strong>$N$</strong>：系统大小（格点数）</li>
          </ul>
        </div>
      </div>

      <div class="physics-competition">
        <h3>物理竞争机制</h3>
        <p>
          这个看似简单的模型包含了丰富的物理内容：
        </p>
        
        <div class="competition-diagram">
          <div class="mechanism-card ising"><h4>Ising相互作用</h4><p>$-J \sum_i \sigma_i^z \sigma_{i+1}^z$</p>
            <div class="effect">
              <p><strong>效果</strong>：倾向于对齐相邻自旋</p>
              <p><strong>结果</strong>：建立长程磁有序</p>
              <p><strong>相态</strong>：铁磁相</p>
            </div>
          </div>
          
          <div class="vs-symbol">⚔️</div>
          
          <div class="mechanism-card transverse"><h4>横向磁场</h4><p>$-h \sum_i \sigma_i^x$</p>
            <div class="effect">
              <p><strong>效果</strong>：倾向于翻转自旋</p>
              <p><strong>结果</strong>：破坏磁有序</p>
              <p><strong>相态</strong>：顺磁相</p>
            </div>
          </div>
        </div>
        
        <div class="competition-result">
          <h4>竞争结果</h4>
          <p>
            这两种机制的竞争导致了量子相变：
          </p><div class="formula-container">$$h_c = J \quad \text{(临界点)}$$</div><ul><li><strong>$h < J$</strong>：Ising相互作用占主导 → 铁磁有序相</li><li><strong>$h > J$</strong>：横向磁场占主导 → 顺磁无序相</li><li><strong>$h = J$</strong>：临界点，系统处于量子临界状态</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="solution-methods-overview">
      <h2>精确求解方法概览</h2>
      
      <div class="methods-introduction">
        <h3>多种途径，殊途同归</h3>
        <p>
          量子横场Ising模型的精确解可以通过多种不同的数学方法获得，
          每种方法都有其独特的优势和物理洞察：
        </p>
      </div>

      <div class="methods-grid">
        <div class="method-card jordan-wigner">
          <h3>Jordan-Wigner变换</h3>
          <div class="method-description">
            <p><strong>核心思想</strong>：将自旋算符映射为费米子算符</p>
            <p><strong>优势</strong>：将多体问题转化为单粒子问题</p>
            <p><strong>结果</strong>：得到自由费米子的对角化问题</p>
          </div><div class="method-formula">$$\sigma_j^+ = c_j^\dagger \prod_{k&lt;j} (1-2c_k^\dagger c_k)$$</div>
          <div class="method-insights">
            <h4>物理洞察</h4>
            <ul>
              <li>自旋激发对应费米子准粒子</li>
              <li>能谱结构清晰可见</li>
              <li>关联函数易于计算</li>
            </ul>
          </div>
        </div>

        <div class="method-card kitaev">
          <h3>与Kitaev超导链模型的等价</h3>
          <div class="method-description">
            <p><strong>核心思想</strong>：映射到拓扑超导体模型</p>
            <p><strong>优势</strong>：揭示拓扑性质和边界态</p> <p><strong>结果</strong>：Majorana费米子描述</p></div> <div class="method-formula">$$H = \sum_j \left[ -\mu c_j^\dagger c_j + \Delta (c_j c_{j+1} + \text{h.c.}) \right]$$</div>
          <div class="method-insights">
            <h4>物理洞察</h4>
            <ul>
              <li>拓扑相变的理解</li>
              <li>边界Majorana模式</li>
              <li>拓扑保护的量子信息</li>
            </ul>
          </div>
        </div>

        <div class="method-card diagonalization">
          <h3>模型的对角化</h3>
          <div class="method-description">
            <p><strong>核心思想</strong>：直接对角化有效哈密顿量</p>
            <p><strong>优势</strong>：数学上最直接</p> <p><strong>结果</strong>：完整的能谱和本征态</p></div> <div class="method-formula">$$H = \sum_k E_k \eta_k^\dagger \eta_k$$</div>
          <div class="method-insights">
            <h4>物理洞察</h4>
            <ul>
              <li>准粒子激发谱</li>
              <li>基态和激发态性质</li>
              <li>热力学量的精确表达</li>
            </ul>
          </div>
        </div>

        <div class="method-card properties">
          <h3>精确解的物理性质</h3>
          <div class="method-description">
            <p><strong>核心内容</strong>：从精确解提取物理信息</p>
            <p><strong>优势</strong>：完全准确的物理预言</p> <p><strong>结果</strong>：所有物理量的精确表达式</p></div> <div class="method-formula">$$\langle \sigma^z \rangle, \quad \chi, \quad C_v, \quad \xi$$</div>
          <div class="method-insights">
            <h4>物理洞察</h4>
            <ul>
              <li>相变的精确描述</li>
              <li>临界指数的计算</li>
              <li>标度行为的验证</li>
            </ul>
          </div>
        </div>

        <div class="method-card free-energy">
          <h3>自由能密度与临界指数</h3>
          <div class="method-description">
            <p><strong>核心内容</strong>：热力学函数的精确计算</p>
            <p><strong>优势</strong>：完整的相图描述</p> <p><strong>结果</strong>：所有临界指数的精确值</p></div> <div class="method-formula">$$f = -\frac{1}{\beta N} \ln Z$$</div>
          <div class="method-insights">
            <h4>物理洞察</h4>
            <ul>
              <li>普适性类的确定</li>
              <li>标度律的验证</li>
              <li>临界现象的完整描述</li>
            </ul>
          </div>
        </div>

        <div class="method-card comparison">
          <h3>与实验的比较</h3>
          <div class="method-description">
            <p><strong>核心内容</strong>：理论预言与实验验证</p>
            <p><strong>优势</strong>：精确的实验指导</p> <p><strong>结果</strong>：理论与实验的完美契合</p></div> <div class="method-formula">$$\text{Theory} \leftrightarrow \text{Experiment}$$</div>
          <div class="method-insights">
            <h4>物理洞察</h4>
            <ul>
              <li>模型的实验实现</li>
              <li>理论预言的验证</li>
              <li>新现象的预测</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mathematical-beauty">
      <h2>数学之美</h2>
      
      <div class="beauty-aspects">
        <h3>精确解中的数学艺术</h3>
        <p>
          量子Ising模型的精确解不仅是物理学的胜利，更是数学之美的完美体现：
        </p>
        
        <div class="beauty-grid">
          <div class="beauty-card symmetry">
            <h4>🔄 对称性之美</h4>
            <p>
              模型具有丰富的对称性结构：时间反演对称性、空间反射对称性、
              以及深层的对偶对称性。这些对称性不仅简化了计算，
              更揭示了物理定律的深层和谐。
            </p>
          </div>
          
          <div class="beauty-card transformation">
            <h4>🔀 变换之美</h4>
            <p>
              Jordan-Wigner变换将看似复杂的自旋相互作用转化为
              优雅的费米子理论。这种变换的巧妙性体现了
              数学工具的强大力量。
            </p>
          </div>
          
          <div class="beauty-card exactness">
            <h4>🎯 精确性之美</h4>
            <p>
              在充满近似的物理学世界中，精确解如钻石般珍贵。
              它们提供了完全准确的答案，没有任何近似误差，
              展现了理论的完美性。
            </p>
          </div>
          
          <div class="beauty-card universality">
            <h4>🌐 普适性之美</h4>
            <p>
              精确解揭示了系统的普适行为，表明看似不同的
              物理系统可能属于同一个普适类，
              体现了自然界的深层统一性。
            </p>
          </div>
        </div>
      </div>

      <div class="mathematical-techniques">
        <h3>涉及的数学技巧</h3>
        <p>
          精确解的获得需要运用多种高深的数学技巧：
        </p>
        
        <div class="techniques-list">
          <div class="technique-item">
            <h4>线性代数</h4>
            <p>矩阵对角化、本征值问题、酉变换</p>
          </div>
          
          <div class="technique-item">
            <h4>群论</h4>
            <p>对称群、表示论、不可约表示</p>
          </div>
          
          <div class="technique-item">
            <h4>复分析</h4>
            <p>解析延拓、留数定理、积分变换</p>
          </div>
          
          <div class="technique-item">
            <h4>特殊函数</h4>
            <p>椭圆积分、超几何函数、正交多项式</p>
          </div>
          
          <div class="technique-item">
            <h4>拓扑学</h4>
            <p>拓扑不变量、同伦群、纤维丛</p>
          </div>
          
          <div class="technique-item">
            <h4>代数几何</h4>
            <p>代数曲线、Riemann面、模形式</p>
          </div>
        </div>
      </div>
    </div>

    <div class="physical-insights">
      <h2>物理洞察</h2>
      
      <div class="insights-overview">
        <h3>精确解带来的深刻理解</h3>
        <p>
          精确解不仅给出了数学答案，更重要的是提供了深刻的物理洞察：
        </p>
      </div>

      <div class="insights-grid">
        <div class="insight-card quantum-criticality">
          <h3>量子临界性</h3>
          <p>
            精确解揭示了量子相变的本质：它是由量子涨落驱动的，
            即使在绝对零度下也会发生。临界点处的行为完全由
            量子力学原理决定。
          </p>
          <div class="key-results">
            <h4>关键结果</h4><ul><li>临界点：$h_c = J$</li><li>能隙：$\Delta \propto |h - h_c|$</li><li>关联长度：$\xi \propto |h - h_c|^{-1}$</li>
            </ul>
          </div>
        </div>

        <div class="insight-card universality">
          <h3>普适性</h3>
          <p>
            精确解证实了临界现象的普适性：不同的微观细节
            可以导致相同的临界行为。这体现了物理定律的
            深层统一性。
          </p>
          <div class="key-results">
            <h4>普适类特征</h4><ul><li>空间维度：$d = 1$</li><li>序参量维度：$n = 1$</li><li>动力学指数：$z = 1$</li>
            </ul>
          </div>
        </div>

        <div class="insight-card entanglement">
          <h3>量子纠缠</h3>
          <p>
            精确解使我们能够精确计算量子纠缠的各种度量，
            揭示了纠缠在量子相变中的核心作用。
          </p>
          <div class="key-results">
            <h4>纠缠性质</h4>
            <ul>
              <li>纠缠熵在临界点发散</li>
              <li>纠缠谱反映拓扑性质</li>
              <li>纠缠见证相变</li>
            </ul>
          </div>
        </div>

        <div class="insight-card topology">
          <h3>拓扑性质</h3>
          <p>
            通过与Kitaev链的等价性，精确解揭示了系统的
            拓扑性质，包括拓扑相变和边界态。
          </p>
          <div class="key-results">
            <h4>拓扑特征</h4>
            <ul>
              <li>拓扑不变量</li>
              <li>边界Majorana模式</li>
              <li>拓扑保护</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="modern-applications">
      <h2>现代应用</h2>
      
      <div class="applications-overview">
        <h3>从理论到应用</h3>
        <p>
          量子Ising模型的精确解不仅具有理论价值，
          在现代科技中也有重要应用：
        </p>
      </div>

      <div class="applications-grid">
        <div class="application-card quantum-computing">
          <h3>🖥️ 量子计算</h3>
          <div class="application-content">
            <p>
              <strong>绝热量子计算</strong>：利用量子相变进行计算
            </p>
            <p>
              <strong>量子退火</strong>：寻找优化问题的全局最优解
            </p>
            <p>
              <strong>拓扑量子计算</strong>：利用Majorana费米子进行容错计算
            </p>
          </div>
        </div>

        <div class="application-card quantum-simulation">
          <h3>🔬 量子模拟</h3>
          <div class="application-content">
            <p>
              <strong>冷原子系统</strong>：实现可控的量子多体系统
            </p>
            <p>
              <strong>离子阱</strong>：精确控制的量子自旋链
            </p>
            <p>
              <strong>超导量子比特</strong>：人工量子系统的实现
            </p>
          </div>
        </div>

        <div class="application-card materials">
          <h3>🧪 材料科学</h3>
          <div class="application-content">
            <p>
              <strong>量子磁体</strong>：理解真实材料的磁性相变
            </p>
            <p>
              <strong>拓扑材料</strong>：设计具有特殊性质的材料
            </p>
            <p>
              <strong>相变材料</strong>：控制材料的相变行为</p>
          </div>
        </div>

        <div class="application-card information">
          <h3>📡 量子信息</h3>
          <div class="application-content">
            <p>
              <strong>量子纠缠</strong>：理解和利用量子纠缠资源
            </p>
            <p>
              <strong>量子通信</strong>：基于量子相变的通信协议
            </p>
            <p>
              <strong>量子传感</strong>：利用临界增强进行精密测量
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="learning-roadmap">
      <h2>学习路线图</h2>
      
      <div class="roadmap-introduction">
        <h3>掌握精确解的学习路径</h3>
        <p>
          学习量子Ising模型的精确解需要循序渐进，
          以下是推荐的学习路径：
        </p>
      </div>

      <div class="roadmap-steps">
        <div class="step-item step-1">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>Jordan-Wigner变换</h4>
            <p>理解自旋-费米子映射的基本原理和数学技巧</p>
          </div>
        </div>

        <div class="step-item step-2">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>与Kitaev超导链的等价</h4>
            <p>学习拓扑超导体理论和Majorana费米子</p>
          </div>
        </div>

        <div class="step-item step-3">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>模型的对角化</h4>
            <p>掌握哈密顿量对角化的具体步骤和技巧</p>
          </div>
        </div>

        <div class="step-item step-4">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>精确解的物理性质</h4>
            <p>从精确解中提取各种物理量和相变信息</p>
          </div>
        </div>

        <div class="step-item step-5">
          <div class="step-number">5</div>
          <div class="step-content">
            <h4>自由能密度与临界指数</h4>
            <p>计算热力学函数和临界指数</p>
          </div>
        </div>

        <div class="step-item step-6">
          <div class="step-number">6</div>
          <div class="step-content">
            <h4>与实验的比较</h4>
            <p>理解理论预言如何与实验结果对比验证</p>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节小结</h2>
      <div class="summary-card">
        <p>
          量子Ising模型的精确解是理论物理的瑰宝：
        </p>
        <ul>
          <li><strong>理论价值</strong>：为量子多体理论提供精确基准</li>
          <li><strong>数学之美</strong>：展现了深刻的数学结构和技巧</li>
          <li><strong>物理洞察</strong>：揭示了量子相变的本质机制</li>
          <li><strong>实用价值</strong>：指导现代量子技术的发展</li>
        </ul>
        <p>
          通过系统学习这些精确解方法，我们不仅能够掌握具体的计算技巧，
          更重要的是能够培养对量子多体系统的深刻理解和直觉。
        </p>
      </div>
    </div>

    <div class="exercises-section">
      <h2>思考题</h2>
      <div class="exercise-list">
        <div class="exercise-item">
          <h4>1. 精确解的意义</h4>
          <p>讨论精确解在理论物理中的重要作用，以及它与近似方法的关系。</p>
        </div>
        <div class="exercise-item">
          <h4>2. 数学方法比较</h4>
          <p>比较不同精确求解方法的优缺点，分析它们各自的适用场景。</p>
        </div>
        <div class="exercise-item">
          <h4>3. 物理图像</h4>
          <p>从不同的精确解方法中，你能得到哪些不同的物理图像和洞察？</p>
        </div>
        <div class="exercise-item">
          <h4>4. 现代应用</h4>
          <p>选择一个现代应用领域，详细分析量子Ising模型精确解的作用。</p>
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

.exact-solution-importance, .model-overview, .solution-methods-overview,
.mathematical-beauty, .physical-insights, .modern-applications,
.learning-roadmap, .summary-section, .exercises-section {
  margin-bottom: 2rem;
}

.exact-solution-importance h2, .model-overview h2, .solution-methods-overview h2,
.mathematical-beauty h2, .physical-insights h2, .modern-applications h2,
.learning-roadmap h2, .summary-section h2, .exercises-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #667eea;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.importance-overview, .historical-context, .hamiltonian-review,
.physics-competition, .methods-introduction, .beauty-aspects,
.mathematical-techniques, .insights-overview, .applications-overview,
.roadmap-introduction, .summary-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-bottom: 1.5rem;
  border-left: 4px solid #667eea;
}

.importance-aspects, .methods-grid, .beauty-grid, .insights-grid,
.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.aspect-card, .method-card, .beauty-card, .insight-card, .application-card {
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.aspect-card:hover, .method-card:hover, .beauty-card:hover,
.insight-card:hover, .application-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.2);
}

.aspect-card.theoretical {
  border-left: 4px solid #e74c3c;
}

.aspect-card.physical {
  border-left: 4px solid #3498db;
}

.aspect-card.mathematical {
  border-left: 4px solid #9b59b6;
}

.aspect-card.predictive {
  border-left: 4px solid #27ae60;
}

.method-card.jordan-wigner {
  border-left: 4px solid #e74c3c;
}

.method-card.kitaev {
  border-left: 4px solid #3498db;
}

.method-card.diagonalization {
  border-left: 4px solid #f39c12;
}

.method-card.properties {
  border-left: 4px solid #27ae60;
}

.method-card.free-energy {
  border-left: 4px solid #9b59b6;
}

.method-card.comparison {
  border-left: 4px solid #34495e;
}

.aspect-card h4, .method-card h3, .beauty-card h4, .insight-card h3,
.application-card h3 {
  color: #667eea;
  margin-bottom: 1rem;
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

.parameter-explanation, .competition-result {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.parameter-explanation h4, .competition-result h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.competition-diagram {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin: 1.5rem 0;
}

.mechanism-card {
  flex: 1;
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.mechanism-card.ising {
  border: 2px solid #e74c3c;
}

.mechanism-card.transverse {
  border: 2px solid #3498db;
}

.mechanism-card h4 {
  color: #667eea;
  margin-bottom: 1rem;
}

.vs-symbol {
  font-size: 2em;
  color: #667eea;
}

.effect {
  margin-top: 1rem;
  text-align: left;
}

.effect p {
  margin: 0.5rem 0;
}

.method-description, .method-insights {
  margin: 1rem 0;
}

.method-formula {
  background: #f0f4ff;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #e1e8ff;
  margin: 1rem 0;
}

.method-insights h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.techniques-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.technique-item {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #667eea;
}

.technique-item h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.key-results {
  background: #f0f8ff;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border: 1px solid #e1e8ff;
}

.key-results h4 {
  color: #667eea;
  margin-bottom: 0.5rem;
}

.application-content {
  margin-top: 1rem;
}

.application-content p {
  margin: 0.5rem 0;
  padding-left: 1rem;
  border-left: 2px solid #e1e8ff;
}

.roadmap-steps {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.step-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f8faff;
  padding: 1.5rem;
  border-radius: 10px;
  border: 2px solid #e1e8ff;
}

.step-number {
  background: #667eea;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2em;
}

.step-content h4 {
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
  
  .importance-aspects, .methods-grid, .beauty-grid, .insights-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .competition-diagram {
    flex-direction: column;
  }
  
  .vs-symbol {
    transform: rotate(90deg);
  }
  
  .techniques-list {
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
  
  .step-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>