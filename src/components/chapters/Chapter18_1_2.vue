<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.1.2 卷积神经网络</h1>
      <p class="chapter-subtitle">CNN在量子多体系统中的应用</p>
    </div>

    <div class="content-section">
      <h2>卷积神经网络简介</h2>
      <p>
        卷积神经网络（Convolutional Neural Network, CNN）最初用于图像识别，
        但在量子多体物理中也展现出强大的能力。CNN通过卷积操作可以有效捕获
        系统的局域相关性和平移不变性。
      </p>

      <div class="cnn-architecture">
        <h3>CNN架构特点</h3>
        <div class="architecture-grid">
          <div class="arch-item">
            <h4>卷积层</h4>
            <p>提取局域特征，保持平移不变性</p>
          </div>
          <div class="arch-item">
            <h4>池化层</h4>
            <p>降维并增强特征的鲁棒性</p>
          </div>
          <div class="arch-item">
            <h4>全连接层</h4>
            <p>整合特征进行最终预测</p>
          </div>
        </div>
      </div>

      <h2>量子态的CNN表示</h2>
      <p>
        对于二维量子自旋系统，我们可以将自旋配置视为"图像"，
        使用CNN来学习波函数的结构。波函数可以表示为：
      </p>

      <div class="formula-container">
        <div class="math-display">
          $$\psi(\mathbf{s}) = \text{CNN}(\mathbf{s}; \theta)$$
        </div>
        <p>其中 $\mathbf{s}$ 是自旋配置，$\theta$ 是CNN的参数。</p>
      </div>

      <h2>卷积操作的物理意义</h2>
      <div class="physics-meaning">
        <p>
          在量子多体系统中，卷积核可以理解为局域的相互作用模式。
          对于自旋系统，一个 $3 \times 3$ 的卷积核可以捕获：
        </p>
        <ul>
          <li>最近邻相互作用</li>
          <li>局域磁化强度</li>
          <li>自旋团簇的关联</li>
          <li>局域对称性破缺</li>
        </ul>
      </div>

      <h2>CNN vs RBM</h2>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>特性</th>
              <th>CNN</th>
              <th>RBM</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>空间结构</td>
              <td>保持空间局域性</td>
              <td>全连接，无空间结构</td>
            </tr>
            <tr>
              <td>参数数量</td>
              <td>参数共享，数量较少</td>
              <td>参数较多</td>
            </tr>
            <tr>
              <td>平移不变性</td>
              <td>天然具备</td>
              <td>需要特殊设计</td>
            </tr>
            <tr>
              <td>训练复杂度</td>
              <td>相对简单</td>
              <td>需要采样，较复杂</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>应用实例：二维海森堡模型</h2>
      <div class="case-study">
        <h3>模型哈密顿量</h3>
        <div class="math-display">
          $$H = J \sum_{\langle i,j \rangle} \mathbf{S}_i \cdot \mathbf{S}_j$$
        </div>
        
        <h3>CNN架构设计</h3>
        <div class="cnn-design">
          <div class="layer">
            <h4>输入层</h4>
            <p>$L \times L$ 自旋配置</p>
          </div>
          <div class="arrow">→</div>
          <div class="layer">
            <h4>卷积层1</h4>
            <p>32个 $3 \times 3$ 卷积核</p>
          </div>
          <div class="arrow">→</div>
          <div class="layer">
            <h4>卷积层2</h4>
            <p>64个 $3 \times 3$ 卷积核</p>
          </div>
          <div class="arrow">→</div>
          <div class="layer">
            <h4>全连接层</h4>
            <p>输出波函数振幅</p>
          </div>
        </div>
      </div>

      <h2>训练策略</h2>
      <div class="training-strategies">
        <div class="strategy">
          <h3>变分蒙特卡罗</h3>
          <p>最小化能量期望值：</p>
          <div class="math-display">
            $$E[\theta] = \frac{\langle \psi(\theta) | H | \psi(\theta) \rangle}{\langle \psi(\theta) | \psi(\theta) \rangle}$$
          </div>
        </div>
        
        <div class="strategy">
          <h3>监督学习</h3>
          <p>使用已知的精确解或数值解作为训练数据</p>
        </div>
        
        <div class="strategy">
          <h3>强化学习</h3>
          <p>通过与环境交互学习最优策略</p>
        </div>
      </div>

      <h2>优势与挑战</h2>
      <div class="pros-cons">
        <div class="pros">
          <h3>优势</h3>
          <ul>
            <li>自然处理空间结构</li>
            <li>参数效率高</li>
            <li>易于并行化</li>
            <li>可解释性强</li>
          </ul>
        </div>
        <div class="cons">
          <h3>挑战</h3>
          <ul>
            <li>难以处理长程关联</li>
            <li>需要大量训练数据</li>
            <li>超参数调优复杂</li>
            <li>量子相变点附近表现</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_1_2',
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
  border-bottom: 3px solid #2196F3;
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
  border-left: 4px solid #2196F3;
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

.cnn-architecture {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.architecture-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.arch-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.arch-item h4 {
  color: #1976d2;
  margin-bottom: 8px;
}

.physics-meaning {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #ff9800;
}

.physics-meaning ul {
  margin-left: 20px;
}

.physics-meaning li {
  margin-bottom: 8px;
}

.comparison-table {
  margin: 20px 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.comparison-table th,
.comparison-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.comparison-table th {
  background: #2196F3;
  color: white;
  font-weight: 600;
}

.comparison-table tr:hover {
  background: #f5f5f5;
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

.cnn-design {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.layer {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  min-width: 120px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.layer h4 {
  color: #2e7d32;
  margin-bottom: 5px;
  font-size: 1em;
}

.layer p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

.arrow {
  font-size: 1.5em;
  color: #4CAF50;
  font-weight: bold;
}

.training-strategies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.strategy {
  background: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
}

.strategy h3 {
  color: #7b1fa2;
  margin-bottom: 10px;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.pros, .cons {
  padding: 20px;
  border-radius: 8px;
}

.pros {
  background: #e8f5e8;
  border-left: 4px solid #4CAF50;
}

.cons {
  background: #ffebee;
  border-left: 4px solid #f44336;
}

.pros h3 {
  color: #2e7d32;
}

.cons h3 {
  color: #c62828;
}

.pros ul, .cons ul {
  margin-left: 20px;
}

.pros li, .cons li {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .architecture-grid {
    grid-template-columns: 1fr;
  }
  
  .cnn-design {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
  
  .training-strategies {
    grid-template-columns: 1fr;
  }
}
</style>