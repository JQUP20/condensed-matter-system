<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.1.1 受限玻尔兹曼机</h1>
      <p class="chapter-subtitle">RBM在量子态表示中的应用</p>
    </div>

    <div class="content-section">
      <h2>什么是受限玻尔兹曼机？</h2>
      <p>
        受限玻尔兹曼机（Restricted Boltzmann Machine, RBM）是一种特殊的神经网络，
        由可见层和隐藏层组成，层内无连接，层间全连接。在量子多体物理中，
        RBM可以用来表示复杂的量子态。
      </p>

      <div class="formula-container">
        <p>RBM的能量函数定义为：</p>
        <div class="math-display">
          $$E(\mathbf{v}, \mathbf{h}) = -\sum_{i} a_i v_i - \sum_{j} b_j h_j - \sum_{i,j} W_{ij} v_i h_j$$
        </div>
        <p>其中 $\mathbf{v}$ 是可见单元，$\mathbf{h}$ 是隐藏单元，$W_{ij}$ 是连接权重。</p>
      </div>

      <h2>量子态的RBM表示</h2>
      <p>
        对于量子多体系统，我们可以用RBM来表示波函数。给定一个自旋配置 $\mathbf{s}$，
        波函数的振幅可以表示为：
      </p>

      <div class="formula-container">
        <div class="math-display">
          $$\psi(\mathbf{s}) = \sum_{\mathbf{h}} e^{-E(\mathbf{s}, \mathbf{h})}$$
        </div>
        <p>通过对隐藏变量求和，我们得到：</p>
        <div class="math-display">
          $$\psi(\mathbf{s}) = e^{\sum_i a_i s_i} \prod_j \left(1 + e^{b_j + \sum_i W_{ij} s_i}\right)$$
        </div>
      </div>

      <h2>RBM的优势</h2>
      <div class="advantages-grid">
        <div class="advantage-card">
          <h3>表达能力强</h3>
          <p>RBM可以表示复杂的量子纠缠态，包括临界点附近的长程关联。</p>
        </div>
        <div class="advantage-card">
          <h3>计算效率高</h3>
          <p>相比于精确对角化，RBM方法可以处理更大的系统尺寸。</p>
        </div>
        <div class="advantage-card">
          <h3>物理直观</h3>
          <p>隐藏单元可以理解为系统的有效自由度或序参量。</p>
        </div>
        <div class="advantage-card">
          <h3>可训练性</h3>
          <p>通过变分蒙特卡罗方法可以优化RBM参数。</p>
        </div>
      </div>

      <h2>实际应用案例</h2>
      <div class="case-study">
        <h3>横场伊辛模型</h3>
        <p>考虑一维横场伊辛模型：</p>
        <div class="math-display">
          $$H = -J\sum_i \sigma_i^z \sigma_{i+1}^z - h\sum_i \sigma_i^x$$
        </div>
        <p>
          使用RBM可以准确描述该模型的基态，特别是在量子相变点附近。
          研究表明，RBM能够捕获临界点的长程量子关联。
        </p>
      </div>

      <h2>训练过程</h2>
      <div class="training-process">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h4>初始化参数</h4>
            <p>随机初始化RBM的权重和偏置参数</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h4>采样配置</h4>
            <p>使用马尔可夫链蒙特卡罗方法采样量子态</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h4>计算梯度</h4>
            <p>计算能量期望值对参数的梯度</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h4>更新参数</h4>
            <p>使用随机梯度下降等优化算法更新参数</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_1_1',
  mounted() {
    // 渲染数学公式
    if (window.renderMathInElement) {
      this.$nextTick(() => {
        window.renderMathInElement(this.$el);
      });
    }
  },
  updated() {
    // 更新时重新渲染数学公式
    if (window.renderMathInElement) {
      this.$nextTick(() => {
        window.renderMathInElement(this.$el);
      });
    }
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

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 3px solid #4CAF50;
}

.chapter-header h1 {
  font-size: 2.5em;
  color: #2c3e50;
  margin-bottom: 10px;
}

.chapter-subtitle {
  font-size: 1.2em;
  color: #7f8c8d;
  font-style: italic;
}

.content-section {
  margin-bottom: 30px;
}

.content-section h2 {
  color: #34495e;
  font-size: 1.8em;
  margin-top: 30px;
  margin-bottom: 15px;
  padding-left: 10px;
  border-left: 4px solid #4CAF50;
}

.content-section h3 {
  color: #2c3e50;
  font-size: 1.4em;
  margin-top: 20px;
  margin-bottom: 10px;
}

.content-section p {
  margin-bottom: 15px;
  text-align: justify;
}

.formula-container {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #007bff;
}

.math-display {
  text-align: center;
  margin: 15px 0;
  font-size: 1.1em;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.advantage-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-5px);
}

.advantage-card h3 {
  color: white;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.advantage-card p {
  font-size: 0.95em;
  line-height: 1.5;
}

.case-study {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #4CAF50;
}

.case-study h3 {
  color: #2e7d32;
  margin-bottom: 15px;
}

.training-process {
  margin: 20px 0;
}

.step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}

.step-number {
  background: #ff9800;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 15px;
  flex-shrink: 0;
}

.step-content h4 {
  color: #2c3e50;
  margin-bottom: 5px;
  font-size: 1.1em;
}

.step-content p {
  color: #555;
  margin: 0;
  font-size: 0.95em;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>