<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.3.2 无监督学习</h1>
      <p class="chapter-subtitle">无监督的相变检测</p>
    </div>

    <div class="content-section">
      <h2>无监督学习概述</h2>
      <p>
        与监督学习不同，无监督学习不需要预先标注的数据，而是通过发现数据中的隐藏模式
        来识别不同的相态。这种方法特别适用于探索未知的相变和发现新的物质相。
      </p>

      <div class="comparison-table">
        <h3>监督学习 vs 无监督学习</h3>
        <table>
          <thead>
            <tr>
              <th>特征</th>
              <th>监督学习</th>
              <th>无监督学习</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>数据需求</td>
              <td>需要标注数据</td>
              <td>只需原始数据</td>
            </tr>
            <tr>
              <td>先验知识</td>
              <td>需要已知相态</td>
              <td>无需先验知识</td>
            </tr>
            <tr>
              <td>发现能力</td>
              <td>识别已知相态</td>
              <td>发现未知相态</td>
            </tr>
            <tr>
              <td>计算复杂度</td>
              <td>相对简单</td>
              <td>通常更复杂</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>主要方法</h2>
      <div class="methods-overview">
        <div class="method-card">
          <h3>聚类分析</h3>
          <p>将相似的配置归为一类，不同类别对应不同相态</p>
          <div class="algorithms">
            <span class="algorithm">K-means</span>
            <span class="algorithm">DBSCAN</span>
            <span class="algorithm">层次聚类</span>
          </div>
        </div>

        <div class="method-card">
          <h3>降维技术</h3>
          <p>将高维配置数据映射到低维空间，便于可视化和分析</p>
          <div class="algorithms">
            <span class="algorithm">PCA</span>
            <span class="algorithm">t-SNE</span>
            <span class="algorithm">UMAP</span>
          </div>
        </div>

        <div class="method-card">
          <h3>生成模型</h3>
          <p>学习数据的概率分布，识别不同相态的统计特征</p>
          <div class="algorithms">
            <span class="algorithm">VAE</span>
            <span class="algorithm">GAN</span>
            <span class="algorithm">Flow模型</span>
          </div>
        </div>
      </div>

      <h2>主成分分析 (PCA)</h2>
      <div class="pca-section">
        <h3>基本原理</h3>
        <p>
          PCA通过寻找数据方差最大的方向来降维，这些主成分往往对应于系统的重要物理量。
        </p>

        <div class="formula-container">
          <p>协方差矩阵的特征值分解：</p>
          <div class="math-display">
            $$\mathbf{C} = \frac{1}{N-1} \sum_{i=1}^N (\mathbf{x}_i - \bar{\mathbf{x}})(\mathbf{x}_i - \bar{\mathbf{x}})^T$$
          </div>
          <div class="math-display">
            $$\mathbf{C} \mathbf{v}_k = \lambda_k \mathbf{v}_k$$
          </div>
          <p>其中 $\mathbf{v}_k$ 是第k个主成分，$\lambda_k$ 是对应的特征值。</p>
        </div>

        <div class="pca-application">
          <h4>在伊辛模型中的应用</h4>
          <p>对于二维伊辛模型，主成分分析可以揭示：</p>
          <ul>
            <li><strong>第一主成分：</strong>通常对应磁化强度</li>
            <li><strong>第二主成分：</strong>可能对应能量涨落</li>
            <li><strong>高阶主成分：</strong>捕获更复杂的空间关联</li>
          </ul>
        </div>
      </div>

      <h2>t-SNE可视化</h2>
      <div class="tsne-section">
        <h3>算法原理</h3>
        <p>
          t-SNE (t-Distributed Stochastic Neighbor Embedding) 是一种非线性降维技术，
          特别适合于数据可视化。它保持数据点在高维空间中的邻近关系。
        </p>

        <div class="formula-container">
          <p>高维空间中的相似度：</p>
          <div class="math-display">
            $$p_{j|i} = \frac{\exp(-\|\mathbf{x}_i - \mathbf{x}_j\|^2 / 2\sigma_i^2)}{\sum_{k \neq i} \exp(-\|\mathbf{x}_i - \mathbf{x}_k\|^2 / 2\sigma_i^2)}$$
          </div>
          <p>低维空间中的相似度：</p>
          <div class="math-display">
            $$q_{ij} = \frac{(1 + \|\mathbf{y}_i - \mathbf{y}_j\|^2)^{-1}}{\sum_{k \neq l} (1 + \|\mathbf{y}_k - \mathbf{y}_l\|^2)^{-1}}$$
          </div>
        </div>

        <div class="tsne-advantages">
          <h4>优势</h4>
          <div class="advantages-grid">
            <div class="advantage">
              <h5>非线性映射</h5>
              <p>能够处理复杂的非线性结构</p>
            </div>
            <div class="advantage">
              <h5>局部结构保持</h5>
              <p>保持数据点的邻近关系</p>
            </div>
            <div class="advantage">
              <h5>聚类可视化</h5>
              <p>不同相态形成明显的聚类</p>
            </div>
          </div>
        </div>
      </div>

      <h2>聚类算法</h2>
      <div class="clustering-algorithms">
        <div class="algorithm-detail">
          <h3>K-means聚类</h3>
          <div class="algorithm-steps">
            <div class="step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>初始化</h4>
                <p>随机选择K个聚类中心</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>分配</h4>
                <p>将每个数据点分配到最近的聚类中心</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>更新</h4>
                <p>重新计算每个聚类的中心</p>
              </div>
            </div>
            <div class="step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>迭代</h4>
                <p>重复步骤2-3直到收敛</p>
              </div>
            </div>
          </div>

          <div class="formula-container">
            <p>目标函数：</p>
            <div class="math-display">
              $$J = \sum_{i=1}^N \sum_{k=1}^K w_{ik} \|\mathbf{x}_i - \boldsymbol{\mu}_k\|^2$$
            </div>
            <p>其中 $w_{ik} = 1$ 如果 $\mathbf{x}_i$ 属于聚类k，否则为0。</p>
          </div>
        </div>

        <div class="algorithm-detail">
          <h3>DBSCAN聚类</h3>
          <p>
            基于密度的聚类算法，能够发现任意形状的聚类，并自动确定聚类数量。
            特别适用于识别相变点附近的复杂结构。
          </p>

          <div class="dbscan-params">
            <h4>关键参数</h4>
            <div class="params-grid">
              <div class="param">
                <h5>ε (邻域半径)</h5>
                <p>定义邻域的大小</p>
              </div>
              <div class="param">
                <h5>MinPts (最小点数)</h5>
                <p>形成聚类的最小点数</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>变分自编码器 (VAE)</h2>
      <div class="vae-section">
        <h3>网络结构</h3>
        <div class="vae-architecture">
          <div class="encoder">
            <h4>编码器</h4>
            <p>将输入配置编码为潜在变量</p>
            <div class="math-display">
              $$q_\phi(\mathbf{z}|\mathbf{x}) = \mathcal{N}(\boldsymbol{\mu}_\phi(\mathbf{x}), \boldsymbol{\sigma}_\phi^2(\mathbf{x}))$$
            </div>
          </div>
          <div class="decoder">
            <h4>解码器</h4>
            <p>从潜在变量重构输入配置</p>
            <div class="math-display">
              $$p_\theta(\mathbf{x}|\mathbf{z})$$
            </div>
          </div>
        </div>

        <div class="formula-container">
          <p>VAE的损失函数：</p>
          <div class="math-display">
            $$\mathcal{L} = -\mathbb{E}_{q_\phi(\mathbf{z}|\mathbf{x})}[\log p_\theta(\mathbf{x}|\mathbf{z})] + D_{KL}(q_\phi(\mathbf{z}|\mathbf{x}) \| p(\mathbf{z}))$$
          </div>
          <p>第一项是重构损失，第二项是KL散度正则化项。</p>
        </div>

        <div class="vae-applications">
          <h4>在相变识别中的应用</h4>
          <ul>
            <li>潜在空间中不同相态形成不同的聚类</li>
            <li>可以生成新的配置样本</li>
            <li>潜在变量可能对应物理序参量</li>
            <li>能够处理连续相变的渐变过程</li>
          </ul>
        </div>
      </div>

      <h2>实际应用案例</h2>
      <div class="case-studies">
        <div class="case-study">
          <h3>XY模型的涡旋识别</h3>
          <p>
            在二维XY模型中，使用无监督学习可以自动识别涡旋-反涡旋对，
            这是Kosterlitz-Thouless相变的关键特征。
          </p>
          <div class="results">
            <div class="result-item">
              <h4>PCA结果</h4>
              <p>主成分捕获涡旋的空间分布</p>
            </div>
            <div class="result-item">
              <h4>聚类结果</h4>
              <p>自动区分有涡旋和无涡旋的配置</p>
            </div>
          </div>
        </div>

        <div class="case-study">
          <h3>量子自旋液体的识别</h3>
          <p>
            对于复杂的量子自旋液体相，传统的序参量难以定义。
            无监督学习可以发现这些奇异相态的隐藏特征。
          </p>
          <div class="results">
            <div class="result-item">
              <h4>VAE分析</h4>
              <p>潜在空间揭示不同自旋液体相</p>
            </div>
            <div class="result-item">
              <h4>t-SNE可视化</h4>
              <p>清晰显示相态边界</p>
            </div>
          </div>
        </div>
      </div>

      <h2>挑战与前景</h2>
      <div class="challenges-prospects">
        <div class="challenges">
          <h3>主要挑战</h3>
          <div class="challenge-list">
            <div class="challenge-item">
              <h4>参数选择</h4>
              <p>聚类数量、邻域大小等参数的选择</p>
            </div>
            <div class="challenge-item">
              <h4>结果解释</h4>
              <p>无监督结果的物理意义解释</p>
            </div>
            <div class="challenge-item">
              <h4>计算复杂度</h4>
              <p>大规模数据的处理效率</p>
            </div>
          </div>
        </div>

        <div class="prospects">
          <h3>发展前景</h3>
          <div class="prospect-list">
            <div class="prospect-item">
              <h4>新相态发现</h4>
              <p>发现传统方法难以识别的奇异相态</p>
            </div>
            <div class="prospect-item">
              <h4>多模态学习</h4>
              <p>结合多种物理量的联合分析</p>
            </div>
            <div class="prospect-item">
              <h4>实时分析</h4>
              <p>实验数据的在线相变检测</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_3_2',
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
  border-bottom: 3px solid #673AB7;
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
  border-left: 4px solid #673AB7;
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

.comparison-table {
  margin: 20px 0;
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
  background: #673AB7;
  color: white;
  font-weight: 600;
}

.comparison-table tr:hover {
  background: #f5f5f5;
}

.methods-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.method-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.method-card h3 {
  color: white;
  margin-bottom: 10px;
}

.method-card p {
  margin-bottom: 15px;
  font-size: 0.95em;
}

.algorithms {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.algorithm {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85em;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.formula-container {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #673AB7;
}

.math-display {
  text-align: center;
  margin: 15px 0;
  font-size: 1.1em;
}

.pca-section {
  background: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.pca-application {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.pca-application h4 {
  color: #7b1fa2;
  margin-bottom: 10px;
}

.pca-application ul {
  margin-left: 20px;
}

.pca-application li {
  margin-bottom: 8px;
}

.tsne-section {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.advantage {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.advantage h5 {
  color: #2e7d32;
  margin-bottom: 8px;
}

.advantage p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

.clustering-algorithms {
  margin: 20px 0;
}

.algorithm-detail {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #ff9800;
}

.algorithm-detail h3 {
  color: #e65100;
  margin-bottom: 15px;
}

.algorithm-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step-number {
  background: #ff9800;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
  flex-shrink: 0;
  font-size: 0.9em;
}

.step-content h4 {
  color: #e65100;
  margin-bottom: 5px;
  font-size: 1em;
}

.step-content p {
  color: #555;
  margin: 0;
  font-size: 0.9em;
}

.dbscan-params {
  margin: 15px 0;
}

.params-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 15px 0;
}

.param {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.param h5 {
  color: #e65100;
  margin-bottom: 8px;
}

.param p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

.vae-section {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.vae-architecture {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.encoder, .decoder {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}

.encoder h4, .decoder h4 {
  color: #1976d2;
  margin-bottom: 10px;
}

.vae-applications {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.vae-applications h4 {
  color: #1976d2;
  margin-bottom: 10px;
}

.vae-applications ul {
  margin-left: 20px;
}

.vae-applications li {
  margin-bottom: 8px;
}

.case-studies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.case-study {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #17a2b8;
}

.case-study h3 {
  color: #138496;
  margin-bottom: 15px;
}

.results {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin: 15px 0;
}

.result-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.result-item h4 {
  color: #138496;
  margin-bottom: 8px;
  font-size: 1em;
}

.result-item p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

.challenges-prospects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.challenges, .prospects {
  padding: 20px;
  border-radius: 8px;
}

.challenges {
  background: #ffebee;
  border-left: 4px solid #f44336;
}

.prospects {
  background: #e8f5e8;
  border-left: 4px solid #4CAF50;
}

.challenges h3 {
  color: #c62828;
  margin-bottom: 15px;
}

.prospects h3 {
  color: #2e7d32;
  margin-bottom: 15px;
}

.challenge-list, .prospect-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.challenge-item, .prospect-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
}

.challenge-item h4 {
  color: #c62828;
  margin-bottom: 8px;
  font-size: 1em;
}

.prospect-item h4 {
  color: #2e7d32;
  margin-bottom: 8px;
  font-size: 1em;
}

.challenge-item p, .prospect-item p {
  font-size: 0.9em;
  color: #555;
  margin: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .methods-overview {
    grid-template-columns: 1fr;
  }
  
  .advantages-grid {
    grid-template-columns: 1fr;
  }
  
  .algorithm-steps {
    grid-template-columns: 1fr;
  }
  
  .params-grid {
    grid-template-columns: 1fr;
  }
  
  .vae-architecture {
    grid-template-columns: 1fr;
  }
  
  .case-studies {
    grid-template-columns: 1fr;
  }
  
  .results {
    grid-template-columns: 1fr;
  }
  
  .challenges-prospects {
    grid-template-columns: 1fr;
  }
}
</style>