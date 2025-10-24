<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.3.1 监督学习</h1>
      <p class="chapter-subtitle">有监督的相变识别</p>
    </div>

    <div class="content-section">
      <h2>监督学习在相变识别中的应用</h2>
      <p>
        监督学习是机器学习的一个重要分支，在凝聚态物理中可以用来识别和分类不同的物质相。
        通过训练神经网络学习已知相的特征，我们可以预测未知系统的相态。
      </p>

      <div class="workflow-diagram">
        <h3>监督学习工作流程</h3>
        <div class="workflow-steps">
          <div class="step">
            <div class="step-icon">📊</div>
            <h4>数据准备</h4>
            <p>收集不同相态的配置数据</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🏷️</div>
            <h4>标签标注</h4>
            <p>为每个配置标注相态标签</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🧠</div>
            <h4>模型训练</h4>
            <p>训练分类器学习特征</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🎯</div>
            <h4>相态预测</h4>
            <p>对新配置进行相态分类</p>
          </div>
        </div>
      </div>

      <h2>经典应用：伊辛模型相变</h2>
      <div class="ising-model">
        <h3>二维伊辛模型</h3>
        <p>考虑二维伊辛模型的哈密顿量：</p>
        <div class="formula-container">
          <div class="math-display">
            $$H = -J \sum_{\langle i,j \rangle} s_i s_j - h \sum_i s_i$$
          </div>
          <p>其中 $s_i = \pm 1$ 是自旋变量，$J$ 是交换耦合常数。</p>
        </div>

        <div class="phase-diagram">
          <h4>相图特征</h4>
          <div class="phases">
            <div class="phase-card ordered">
              <h5>有序相 (T < T_c)</h5>
              <ul>
                <li>自发磁化 $m \neq 0$</li>
                <li>长程序参量</li>
                <li>自旋团簇大</li>
              </ul>
            </div>
            <div class="phase-card disordered">
              <h5>无序相 (T > T_c)</h5>
              <ul>
                <li>平均磁化 $m = 0$</li>
                <li>短程关联</li>
                <li>自旋随机分布</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>特征工程</h2>
      <div class="feature-engineering">
        <h3>传统特征</h3>
        <div class="traditional-features">
          <div class="feature">
            <h4>磁化强度</h4>
            <div class="math-display">
              $$m = \frac{1}{N} \sum_i s_i$$
            </div>
          </div>
          <div class="feature">
            <h4>能量密度</h4>
            <div class="math-display">
              $$e = \frac{1}{N} \langle H \rangle$$
            </div>
          </div>
          <div class="feature">
            <h4>比热</h4>
            <div class="math-display">
              $$C = \frac{\partial \langle E \rangle}{\partial T}$$
            </div>
          </div>
          <div class="feature">
            <h4>磁化率</h4>
            <div class="math-display">
              $$\chi = \frac{\partial \langle M \rangle}{\partial h}$$
            </div>
          </div>
        </div>

        <h3>深度学习特征</h3>
        <p>
          卷积神经网络可以自动学习空间特征，无需手工设计特征。
          网络能够识别：
        </p>
        <ul>
          <li>局域自旋关联模式</li>
          <li>畴壁结构</li>
          <li>涡旋和反涡旋</li>
          <li>临界涨落</li>
        </ul>
      </div>

      <h2>网络架构设计</h2>
      <div class="network-architecture">
        <h3>CNN分类器</h3>
        <div class="cnn-layers">
          <div class="layer input-layer">
            <h4>输入层</h4>
            <p>$L \times L$ 自旋配置</p>
            <span class="layer-size">32×32×1</span>
          </div>
          <div class="layer conv-layer">
            <h4>卷积层1</h4>
            <p>32个3×3卷积核</p>
            <span class="layer-size">30×30×32</span>
          </div>
          <div class="layer pool-layer">
            <h4>池化层1</h4>
            <p>2×2最大池化</p>
            <span class="layer-size">15×15×32</span>
          </div>
          <div class="layer conv-layer">
            <h4>卷积层2</h4>
            <p>64个3×3卷积核</p>
            <span class="layer-size">13×13×64</span>
          </div>
          <div class="layer pool-layer">
            <h4>池化层2</h4>
            <p>2×2最大池化</p>
            <span class="layer-size">6×6×64</span>
          </div>
          <div class="layer fc-layer">
            <h4>全连接层</h4>
            <p>128个神经元</p>
            <span class="layer-size">128</span>
          </div>
          <div class="layer output-layer">
            <h4>输出层</h4>
            <p>2个类别</p>
            <span class="layer-size">2</span>
          </div>
        </div>
      </div>

      <h2>训练策略</h2>
      <div class="training-strategies">
        <div class="strategy">
          <h3>数据增强</h3>
          <div class="augmentation-methods">
            <div class="method">
              <h4>旋转</h4>
              <p>90°、180°、270°旋转</p>
            </div>
            <div class="method">
              <h4>翻转</h4>
              <p>水平和垂直翻转</p>
            </div>
            <div class="method">
              <h4>平移</h4>
              <p>周期性边界条件下的平移</p>
            </div>
          </div>
        </div>

        <div class="strategy">
          <h3>正则化技术</h3>
          <ul>
            <li><strong>Dropout:</strong> 防止过拟合</li>
            <li><strong>批归一化:</strong> 加速训练</li>
            <li><strong>权重衰减:</strong> L2正则化</li>
            <li><strong>早停:</strong> 监控验证损失</li>
          </ul>
        </div>
      </div>

      <h2>性能评估</h2>
      <div class="performance-metrics">
        <h3>分类指标</h3>
        <div class="metrics-grid">
          <div class="metric">
            <h4>准确率</h4>
            <div class="math-display">
              $$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$
            </div>
          </div>
          <div class="metric">
            <h4>精确率</h4>
            <div class="math-display">
              $$\text{Precision} = \frac{TP}{TP + FP}$$
            </div>
          </div>
          <div class="metric">
            <h4>召回率</h4>
            <div class="math-display">
              $$\text{Recall} = \frac{TP}{TP + FN}$$
            </div>
          </div>
          <div class="metric">
            <h4>F1分数</h4>
            <div class="math-display">
              $$F1 = 2 \cdot \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$$
            </div>
          </div>
        </div>
      </div>

      <h2>实验结果</h2>
      <div class="experimental-results">
        <h3>典型结果</h3>
        <div class="results-table">
          <table>
            <thead>
              <tr>
                <th>模型</th>
                <th>准确率</th>
                <th>训练时间</th>
                <th>特点</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>传统特征+SVM</td>
                <td>85.2%</td>
                <td>快</td>
                <td>需要领域知识</td>
              </tr>
              <tr>
                <td>简单CNN</td>
                <td>94.7%</td>
                <td>中等</td>
                <td>自动特征学习</td>
              </tr>
              <tr>
                <td>深度CNN</td>
                <td>98.3%</td>
                <td>慢</td>
                <td>最佳性能</td>
              </tr>
              <tr>
                <td>ResNet</td>
                <td>99.1%</td>
                <td>慢</td>
                <td>处理深层网络</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>挑战与局限</h2>
      <div class="challenges">
        <div class="challenge-card">
          <h3>数据需求</h3>
          <p>需要大量标注数据，获取成本高</p>
        </div>
        <div class="challenge-card">
          <h3>泛化能力</h3>
          <p>对未见过的系统泛化能力有限</p>
        </div>
        <div class="challenge-card">
          <h3>临界点识别</h3>
          <p>相变点附近的分类困难</p>
        </div>
        <div class="challenge-card">
          <h3>可解释性</h3>
          <p>难以理解网络学到的物理特征</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_3_1',
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
  border-bottom: 3px solid #00BCD4;
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
  border-left: 4px solid #00BCD4;
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
  border-left: 4px solid #00BCD4;
}

.math-display {
  text-align: center;
  margin: 15px 0;
  font-size: 1.1em;
}

.workflow-diagram {
  background: #e0f2f1;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.workflow-steps {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

.step {
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  min-width: 150px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.step h4 {
  color: #00695c;
  margin-bottom: 8px;
  font-size: 1.1em;
}

.step p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

.arrow {
  font-size: 1.5em;
  color: #00BCD4;
  font-weight: bold;
}

.ising-model {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.phase-diagram {
  margin-top: 20px;
}

.phases {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
}

.phase-card {
  padding: 15px;
  border-radius: 8px;
  color: white;
}

.ordered {
  background: linear-gradient(135deg, #1976d2, #1565c0);
}

.disordered {
  background: linear-gradient(135deg, #d32f2f, #c62828);
}

.phase-card h5 {
  color: white;
  margin-bottom: 10px;
}

.phase-card ul {
  margin-left: 20px;
}

.phase-card li {
  margin-bottom: 5px;
  font-size: 0.9em;
}

.feature-engineering {
  background: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.traditional-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.feature {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.feature h4 {
  color: #7b1fa2;
  margin-bottom: 10px;
}

.network-architecture {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.cnn-layers {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.layer {
  background: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.layer h4 {
  color: #2e7d32;
  margin: 0;
  font-size: 1.1em;
}

.layer p {
  color: #555;
  margin: 0;
  font-size: 0.9em;
}

.layer-size {
  background: #4CAF50;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  font-weight: bold;
}

.training-strategies {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.strategy {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
}

.strategy h3 {
  color: #1976d2;
  margin-bottom: 15px;
}

.augmentation-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 10px;
}

.method {
  background: white;
  padding: 10px;
  border-radius: 6px;
  text-align: center;
}

.method h4 {
  color: #1976d2;
  margin-bottom: 5px;
  font-size: 1em;
}

.method p {
  font-size: 0.8em;
  color: #555;
  margin: 0;
}

.performance-metrics {
  background: #fff8e1;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.metric {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.metric h4 {
  color: #f57c00;
  margin-bottom: 10px;
}

.experimental-results {
  margin: 20px 0;
}

.results-table {
  overflow-x: auto;
  margin: 20px 0;
}

.results-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
}

.results-table th,
.results-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

.results-table th {
  background: #00BCD4;
  color: white;
  font-weight: 600;
}

.results-table tr:hover {
  background: #f5f5f5;
}

.challenges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.challenge-card {
  background: linear-gradient(135deg, #ff7043, #ff5722);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.challenge-card h3 {
  color: white;
  margin-bottom: 10px;
}

.challenge-card p {
  font-size: 0.95em;
  margin: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .workflow-steps {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .phases {
    grid-template-columns: 1fr;
  }
  
  .traditional-features {
    grid-template-columns: 1fr;
  }
  
  .training-strategies {
    grid-template-columns: 1fr;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .challenges {
    grid-template-columns: 1fr;
  }
}
</style>