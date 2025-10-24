<template>
  <div class="chapter-content">
    <div class="content-header">
      <h1>17.1.1 模型的构造</h1>
      <p class="subtitle">SYK模型的哈密顿量构建</p>
    </div>

    <div class="content-body">
      <!-- 核心概念 -->
      <section class="concept-section">
        <h2>🎯 核心概念</h2>
        <div class="concept-card">
          <h3>SYK模型的基本思想</h3>
          <p>Sachdev-Ye-Kitaev (SYK) 模型是一个描述N个费米子的量子多体系统，其特点是：</p>
          <ul>
            <li><strong>全连接性</strong>：每个费米子都与其他所有费米子相互作用</li>
            <li><strong>随机性</strong>：相互作用强度是随机分布的</li>
            <li><strong>可解性</strong>：在大N极限下精确可解</li>
            <li><strong>混沌性</strong>：展现量子混沌行为</li>
          </ul>
        </div>
      </section>

      <!-- 数学表述 -->
      <section class="math-section">
        <h2>📊 数学表述</h2>
        
        <div class="formula-card">
          <h3>SYK哈密顿量</h3>
          <div class="formula">
            $$H = \sum_{1 \leq i < j < k < l \leq N} J_{ijkl} \chi_i \chi_j \chi_k \chi_l$$
          </div>
          <p>其中：</p>
          <ul>
            <li>$\chi_i$ 是Majorana费米子算符，满足 $\{\chi_i, \chi_j\} = 2\delta_{ij}$</li>
            <li>$J_{ijkl}$ 是随机耦合常数</li>
            <li>求和遍历所有四元组 $(i,j,k,l)$</li>
          </ul>
        </div>

        <div class="formula-card">
          <h3>随机耦合的统计性质</h3>
          <div class="formula">
            $$\overline{J_{ijkl}} = 0$$
            $$\overline{J_{ijkl}^2} = \frac{3! J^2}{N^3}$$
          </div>
          <p>这里 $\overline{\cdots}$ 表示对随机变量的平均，$J$ 是特征能量尺度。</p>
        </div>

        <div class="formula-card">
          <h3>Majorana费米子性质</h3>
          <div class="formula">
            $$\chi_i^\dagger = \chi_i$$
            $$\chi_i^2 = \frac{1}{2}$$
            $$\{\chi_i, \chi_j\} = 2\delta_{ij}$$
          </div>
        </div>
      </section>

      <!-- 物理意义 -->
      <section class="physics-section">
        <h2>🔬 物理意义</h2>
        
        <div class="physics-card">
          <h3>模型的物理图像</h3>
          <div class="physics-content">
            <h4>1. 全连接随机系统</h4>
            <p>SYK模型描述了一个"量子点"，其中N个费米子模式通过随机的四体相互作用耦合。这种全连接性使得系统在热力学极限下表现出平均场行为。</p>
            
            <h4>2. 无序的重要性</h4>
            <p>随机耦合常数的引入破坏了系统的平移不变性，但保持了时间反演对称性。这种无序是模型可解性的关键。</p>
            
            <h4>3. 强关联效应</h4>
            <p>四体相互作用项导致强关联效应，使得系统无法用简单的准粒子图像描述，展现出非费米液体行为。</p>
          </div>
        </div>
      </section>

      <!-- 模型变种 -->
      <section class="variants-section">
        <h2>🔄 模型变种</h2>
        
        <div class="variant-card">
          <h3>复费米子SYK模型</h3>
          <div class="formula">
            $$H = \sum_{i,j,k,l} J_{ijkl} c_i^\dagger c_j c_k^\dagger c_l$$
          </div>
          <p>使用复费米子算符，破坏粒子-空穴对称性。</p>
        </div>

        <div class="variant-card">
          <h3>q-体SYK模型</h3>
          <div class="formula">
            $$H = \sum_{i_1 < \cdots < i_q} J_{i_1 \cdots i_q} \chi_{i_1} \cdots \chi_{i_q}$$
          </div>
          <p>推广到q-体相互作用，$q=4$对应原始SYK模型。</p>
        </div>
      </section>

      <!-- 技术细节 -->
      <section class="technical-section">
        <h2>⚙️ 技术细节</h2>
        
        <div class="technical-card">
          <h3>希尔伯特空间维数</h3>
          <p>N个Majorana费米子的希尔伯特空间维数为 $2^{N/2}$，这要求N为偶数。</p>
        </div>

        <div class="technical-card">
          <h3>对称性分析</h3>
          <ul>
            <li><strong>时间反演对称性</strong>：$T\chi_i T^{-1} = \chi_i$</li>
            <li><strong>粒子-空穴对称性</strong>：在Majorana表示中自动满足</li>
            <li><strong>SO(N)对称性</strong>：在无序平均后出现</li>
          </ul>
        </div>
      </section>

      <!-- 实验实现 -->
      <section class="experiment-section">
        <h2>🧪 实验实现</h2>
        
        <div class="experiment-card">
          <h3>可能的实验平台</h3>
          <div class="experiment-content">
            <h4>1. 量子点系统</h4>
            <p>通过电场调控实现可调的随机相互作用。</p>
            
            <h4>2. 超导量子比特</h4>
            <p>利用Josephson结网络模拟SYK哈密顿量。</p>
            
            <h4>3. 冷原子系统</h4>
            <p>通过光晶格和Feshbach共振实现可控的相互作用。</p>
          </div>
        </div>
      </section>

      <!-- 重要考虑 -->
      <section class="considerations-section">
        <h2>⚠️ 重要考虑</h2>
        
        <div class="consideration-card">
          <h3>模型的局限性</h3>
          <ul>
            <li>需要大N极限才能精确求解</li>
            <li>随机性的实现在实际系统中具有挑战性</li>
            <li>四体相互作用在实验中难以直接实现</li>
          </ul>
        </div>

        <div class="consideration-card">
          <h3>理论意义</h3>
          <ul>
            <li>提供了强关联系统的可解模型</li>
            <li>连接凝聚态物理与高能物理</li>
            <li>为量子混沌理论提供了重要例子</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="summary-section">
        <h2>📝 总结</h2>
        <div class="summary-card">
          <p>SYK模型通过引入随机的四体相互作用，构造了一个在大N极限下精确可解的强关联费米子系统。该模型的构造巧妙地结合了：</p>
          <ul>
            <li><strong>随机性</strong>：使模型在无序平均下可解</li>
            <li><strong>全连接性</strong>：导致平均场行为</li>
            <li><strong>强相互作用</strong>：产生非费米液体性质</li>
            <li><strong>对称性</strong>：保持必要的物理对称性</li>
          </ul>
          <p>这些特性使SYK模型成为研究量子多体混沌、非费米液体和全息对偶的重要理论工具。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter17_1_1',
  mounted() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.content-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.content-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin: 0;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #667eea;
}

section h2 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.concept-card, .formula-card, .physics-card, .variant-card, 
.technical-card, .experiment-card, .consideration-card, .summary-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 3px solid #28a745;
}

.concept-card h3, .formula-card h3, .physics-card h3, 
.variant-card h3, .technical-card h3, .experiment-card h3, 
.consideration-card h3, .summary-card h3 {
  color: #495057;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.formula {
  background: white;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  border: 1px solid #dee2e6;
  font-size: 1.1em;
}

.physics-content h4 {
  color: #6c757d;
  margin-top: 15px;
  margin-bottom: 8px;
}

.experiment-content h4 {
  color: #6c757d;
  margin-top: 15px;
  margin-bottom: 8px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

strong {
  color: #495057;
  font-weight: 600;
}

.consideration-card {
  border-left-color: #ffc107;
}

.summary-card {
  border-left-color: #17a2b8;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .content-header h1 {
    font-size: 2em;
  }
  
  section {
    padding: 20px;
  }
}
</style>