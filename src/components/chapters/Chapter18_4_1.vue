<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.4.1 高通量计算</h1>
      <p class="chapter-subtitle">AI驱动的材料发现</p>
    </div>

    <div class="content-section">
      <h2>高通量计算概述</h2>
      <p>
        高通量计算是一种系统性的计算方法，通过自动化的工作流程大规模筛选和设计新材料。
        结合人工智能技术，可以显著加速材料发现过程，从传统的"试错法"转向"预测-设计"模式。
      </p>

      <div class="workflow-overview">
        <h3>高通量材料发现工作流程</h3>
        <div class="workflow-steps">
          <div class="step">
            <div class="step-icon">🎯</div>
            <h4>目标定义</h4>
            <p>确定所需材料性质</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🔍</div>
            <h4>候选生成</h4>
            <p>AI生成候选结构</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">⚡</div>
            <h4>快速筛选</h4>
            <p>机器学习预测</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🧮</div>
            <h4>精确计算</h4>
            <p>第一性原理验证</p>
          </div>
          <div class="arrow">→</div>
          <div class="step">
            <div class="step-icon">🏭</div>
            <h4>实验验证</h4>
            <p>合成与测试</p>
          </div>
        </div>
      </div>

      <h2>计算方法层次</h2>
      <div class="methods-hierarchy">
        <div class="method-level high-accuracy">
          <h3>高精度方法</h3>
          <div class="method-details">
            <div class="method">
              <h4>量子蒙特卡罗 (QMC)</h4>
              <p>最高精度，计算成本极高</p>
              <div class="complexity">复杂度: $O(N^4)$ - $O(N^6)$</div>
            </div>
            <div class="method">
              <h4>耦合簇理论 (CC)</h4>
              <p>化学精度，适用于小分子</p>
              <div class="complexity">复杂度: $O(N^6)$ - $O(N^8)$</div>
            </div>
          </div>
        </div>

        <div class="method-level medium-accuracy">
          <h3>中等精度方法</h3>
          <div class="method-details">
            <div class="method">
              <h4>密度泛函理论 (DFT)</h4>
              <p>平衡精度与效率，广泛应用</p>
              <div class="complexity">复杂度: $O(N^3)$</div>
            </div>
            <div class="method">
              <h4>GW近似</h4>
              <p>准粒子能带结构</p>
              <div class="complexity">复杂度: $O(N^4)$</div>
            </div>
          </div>
        </div>

        <div class="method-level fast-screening">
          <h3>快速筛选方法</h3>
          <div class="method-details">
            <div class="method">
              <h4>紧束缚模型</h4>
              <p>快速电子结构计算</p>
              <div class="complexity">复杂度: $O(N^2)$ - $O(N^3)$</div>
            </div>
            <div class="method">
              <h4>机器学习势</h4>
              <p>AI训练的原子间势</p>
              <div class="complexity">复杂度: $O(N)$ - $O(N^2)$</div>
            </div>
          </div>
        </div>
      </div>

      <h2>材料数据库</h2>
      <div class="databases-section">
        <h3>主要材料数据库</h3>
        <div class="database-grid">
          <div class="database-card">
            <h4>Materials Project</h4>
            <div class="database-stats">
              <div class="stat">
                <span class="number">150,000+</span>
                <span class="label">材料</span>
              </div>
              <div class="stat">
                <span class="number">DFT</span>
                <span class="label">计算方法</span>
              </div>
            </div>
            <p>开源材料基因组数据库</p>
          </div>

          <div class="database-card">
            <h4>OQMD</h4>
            <div class="database-stats">
              <div class="stat">
                <span class="number">800,000+</span>
                <span class="label">化合物</span>
              </div>
              <div class="stat">
                <span class="number">VASP</span>
                <span class="label">计算软件</span>
              </div>
            </div>
            <p>开放量子材料数据库</p>
          </div>

          <div class="database-card">
            <h4>AFLOW</h4>
            <div class="database-stats">
              <div class="stat">
                <span class="number">3,000,000+</span>
                <span class="label">计算</span>
              </div>
              <div class="stat">
                <span class="number">自动化</span>
                <span class="label">工作流</span>
              </div>
            </div>
            <p>自动化材料发现框架</p>
          </div>

          <div class="database-card">
            <h4>NOMAD</h4>
            <div class="database-stats">
              <div class="stat">
                <span class="number">50M+</span>
                <span class="label">计算结果</span>
              </div>
              <div class="stat">
                <span class="number">FAIR</span>
                <span class="label">数据原则</span>
              </div>
            </div>
            <p>新材料开放数据库</p>
          </div>
        </div>
      </div>

      <h2>机器学习加速</h2>
      <div class="ml-acceleration">
        <h3>预测模型类型</h3>
        <div class="prediction-models">
          <div class="model-category">
            <h4>结构-性质关系</h4>
            <div class="model-list">
              <div class="model-item">
                <h5>图神经网络 (GNN)</h5>
                <p>直接处理原子结构图</p>
                <div class="formula-container">
                  <div class="math-display">
                    $$\mathbf{h}_i^{(l+1)} = \sigma\left(\mathbf{W}^{(l)} \mathbf{h}_i^{(l)} + \sum_{j \in \mathcal{N}(i)} \mathbf{W}^{(l)} \mathbf{h}_j^{(l)}\right)$$
                  </div>
                </div>
              </div>
              <div class="model-item">
                <h5>卷积神经网络 (CNN)</h5>
                <p>处理晶体结构的周期性</p>
              </div>
              <div class="model-item">
                <h5>Transformer</h5>
                <p>注意力机制捕获长程相互作用</p>
              </div>
            </div>
          </div>

          <div class="model-category">
            <h4>组成-性质关系</h4>
            <div class="model-list">
              <div class="model-item">
                <h5>随机森林</h5>
                <p>基于元素特征的集成学习</p>
              </div>
              <div class="model-item">
                <h5>支持向量机</h5>
                <p>高维特征空间分类</p>
              </div>
              <div class="model-item">
                <h5>梯度提升</h5>
                <p>XGBoost, LightGBM等</p>
              </div>
            </div>
          </div>
        </div>

        <h3>特征工程</h3>
        <div class="feature-engineering">
          <div class="feature-type">
            <h4>元素特征</h4>
            <ul>
              <li>原子半径、电负性</li>
              <li>电离能、电子亲和能</li>
              <li>价电子数、轨道能级</li>
            </ul>
          </div>
          <div class="feature-type">
            <h4>结构特征</h4>
            <ul>
              <li>径向分布函数 (RDF)</li>
              <li>角度分布函数 (ADF)</li>
              <li>Voronoi多面体</li>
            </ul>
          </div>
          <div class="feature-type">
            <h4>拓扑特征</h4>
            <ul>
              <li>配位数</li>
              <li>键长分布</li>
              <li>空间群对称性</li>
            </ul>
          </div>
        </div>
      </div>

      <h2>自动化工作流</h2>
      <div class="automation-workflow">
        <h3>工作流管理系统</h3>
        <div class="workflow-systems">
          <div class="system-card">
            <h4>AiiDA</h4>
            <div class="system-features">
              <span class="feature">数据溯源</span>
              <span class="feature">自动重启</span>
              <span class="feature">插件生态</span>
            </div>
            <p>自动化交互式基础设施和数据库</p>
          </div>

          <div class="system-card">
            <h4>FireWorks</h4>
            <div class="system-features">
              <span class="feature">任务队列</span>
              <span class="feature">错误处理</span>
              <span class="feature">动态工作流</span>
            </div>
            <p>Python工作流管理系统</p>
          </div>

          <div class="system-card">
            <h4>Atomate</h4>
            <div class="system-features">
              <span class="feature">预定义流程</span>
              <span class="feature">VASP集成</span>
              <span class="feature">数据解析</span>
            </div>
            <p>材料科学工作流库</p>
          </div>
        </div>

        <h3>典型工作流示例</h3>
        <div class="workflow-example">
          <h4>带隙预测工作流</h4>
          <div class="workflow-steps-detailed">
            <div class="step-detailed">
              <div class="step-number">1</div>
              <div class="step-content">
                <h5>结构优化</h5>
                <p>使用DFT优化晶体结构</p>
                <div class="technical-details">
                  <span>软件: VASP</span>
                  <span>泛函: PBE</span>
                  <span>截断能: 520 eV</span>
                </div>
              </div>
            </div>

            <div class="step-detailed">
              <div class="step-number">2</div>
              <div class="step-content">
                <h5>电子结构计算</h5>
                <p>计算能带结构和态密度</p>
                <div class="technical-details">
                  <span>k点网格: Γ-centered</span>
                  <span>自洽收敛: 10⁻⁶ eV</span>
                </div>
              </div>
            </div>

            <div class="step-detailed">
              <div class="step-number">3</div>
              <div class="step-content">
                <h5>带隙修正</h5>
                <p>HSE06或GW计算精确带隙</p>
                <div class="technical-details">
                  <span>混合泛函: HSE06</span>
                  <span>筛选参数: ω = 0.11 bohr⁻¹</span>
                </div>
              </div>
            </div>

            <div class="step-detailed">
              <div class="step-number">4</div>
              <div class="step-content">
                <h5>数据存储</h5>
                <p>结构化存储计算结果</p>
                <div class="technical-details">
                  <span>数据库: MongoDB</span>
                  <span>格式: JSON</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>成功案例</h2>
      <div class="success-cases">
        <div class="case-study">
          <h3>锂离子电池材料</h3>
          <div class="case-content">
            <div class="case-description">
              <h4>研究目标</h4>
              <p>发现高容量、高稳定性的锂离子电池正极材料</p>
              
              <h4>计算策略</h4>
              <ul>
                <li>筛选50,000+种化合物</li>
                <li>预测电压、容量、稳定性</li>
                <li>考虑Li离子扩散动力学</li>
              </ul>
            </div>
            <div class="case-results">
              <h4>主要发现</h4>
              <div class="result-metrics">
                <div class="metric">
                  <span class="value">LiFePO₄</span>
                  <span class="label">优化材料</span>
                </div>
                <div class="metric">
                  <span class="value">3.4 V</span>
                  <span class="label">工作电压</span>
                </div>
                <div class="metric">
                  <span class="value">170 mAh/g</span>
                  <span class="label">理论容量</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-study">
          <h3>太阳能电池材料</h3>
          <div class="case-content">
            <div class="case-description">
              <h4>研究目标</h4>
              <p>设计高效率、低成本的钙钛矿太阳能电池材料</p>
              
              <h4>计算策略</h4>
              <ul>
                <li>预测带隙和光吸收</li>
                <li>评估载流子迁移率</li>
                <li>分析稳定性和毒性</li>
              </ul>
            </div>
            <div class="case-results">
              <h4>主要发现</h4>
              <div class="result-metrics">
                <div class="metric">
                  <span class="value">CsPbI₃</span>
                  <span class="label">候选材料</span>
                </div>
                <div class="metric">
                  <span class="value">1.73 eV</span>
                  <span class="label">最优带隙</span>
                </div>
                <div class="metric">
                  <span class="value">25%+</span>
                  <span class="label">预测效率</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="case-study">
          <h3>超导材料</h3>
          <div class="case-content">
            <div class="case-description">
              <h4>研究目标</h4>
              <p>寻找室温超导材料候选</p>
              
              <h4>计算策略</h4>
              <ul>
                <li>BCS理论预测Tc</li>
                <li>电声耦合计算</li>
                <li>高压结构预测</li>
              </ul>
            </div>
            <div class="case-results">
              <h4>主要发现</h4>
              <div class="result-metrics">
                <div class="metric">
                  <span class="value">H₃S</span>
                  <span class="label">高Tc材料</span>
                </div>
                <div class="metric">
                  <span class="value">203 K</span>
                  <span class="label">临界温度</span>
                </div>
                <div class="metric">
                  <span class="value">155 GPa</span>
                  <span class="label">所需压力</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2>挑战与前景</h2>
      <div class="challenges-prospects">
        <div class="challenges">
          <h3>当前挑战</h3>
          <div class="challenge-list">
            <div class="challenge-item">
              <h4>计算精度 vs 效率</h4>
              <p>平衡计算精度与筛选效率的矛盾</p>
            </div>
            <div class="challenge-item">
              <h4>数据质量</h4>
              <p>不同来源数据的一致性和可靠性</p>
            </div>
            <div class="challenge-item">
              <h4>可合成性预测</h4>
              <p>理论预测与实际合成的差距</p>
            </div>
            <div class="challenge-item">
              <h4>多尺度建模</h4>
              <p>从原子到宏观性质的跨尺度预测</p>
            </div>
          </div>
        </div>

        <div class="prospects">
          <h3>发展前景</h3>
          <div class="prospect-list">
            <div class="prospect-item">
              <h4>量子计算加速</h4>
              <p>量子算法加速材料模拟</p>
            </div>
            <div class="prospect-item">
              <h4>主动学习</h4>
              <p>智能选择最有价值的计算</p>
            </div>
            <div class="prospect-item">
              <h4>多模态AI</h4>
              <p>结合实验和理论数据的AI模型</p>
            </div>
            <div class="prospect-item">
              <h4>自主实验室</h4>
              <p>AI驱动的自动化材料合成</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_4_1',
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
  max-width: 1200px;
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
  border-bottom: 3px solid #FF6B35;
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
  border-left: 4px solid #FF6B35;
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

.workflow-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  margin: 20px 0;
  color: white;
}

.workflow-overview h3 {
  color: white;
  text-align: center;
  margin-bottom: 25px;
}

.workflow-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
}

.step {
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  flex: 1;
  min-width: 150px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.step-icon {
  font-size: 2em;
  margin-bottom: 10px;
}

.step h4 {
  color: white;
  margin-bottom: 8px;
  font-size: 1.1em;
}

.step p {
  font-size: 0.9em;
  margin: 0;
  opacity: 0.9;
}

.arrow {
  font-size: 1.5em;
  color: white;
  font-weight: bold;
}

.methods-hierarchy {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.method-level {
  padding: 20px;
  border-radius: 10px;
  border-left: 5px solid;
}

.high-accuracy {
  background: #ffebee;
  border-left-color: #f44336;
}

.medium-accuracy {
  background: #fff3e0;
  border-left-color: #ff9800;
}

.fast-screening {
  background: #e8f5e8;
  border-left-color: #4caf50;
}

.method-level h3 {
  margin-bottom: 15px;
}

.high-accuracy h3 { color: #c62828; }
.medium-accuracy h3 { color: #e65100; }
.fast-screening h3 { color: #2e7d32; }

.method-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
}

.method {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.method h4 {
  margin-bottom: 8px;
  font-size: 1.1em;
}

.method p {
  margin-bottom: 10px;
  font-size: 0.9em;
}

.complexity {
  background: #f5f5f5;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  font-family: monospace;
  text-align: center;
}

.databases-section {
  margin: 20px 0;
}

.database-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.database-card {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.database-card h4 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.database-stats {
  display: flex;
  justify-content: space-around;
  margin: 15px 0;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat .number {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 5px;
}

.stat .label {
  font-size: 0.8em;
  opacity: 0.8;
}

.database-card p {
  font-size: 0.9em;
  margin: 0;
  opacity: 0.9;
}

.ml-acceleration {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.prediction-models {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.model-category {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.model-category h4 {
  color: #2c3e50;
  margin-bottom: 15px;
  text-align: center;
}

.model-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.model-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border-left: 3px solid #3498db;
}

.model-item h5 {
  color: #2980b9;
  margin-bottom: 8px;
}

.model-item p {
  margin-bottom: 10px;
  font-size: 0.9em;
}

.formula-container {
  background: #e3f2fd;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
}

.math-display {
  text-align: center;
  margin: 10px 0;
  font-size: 1em;
}

.feature-engineering {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.feature-type {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.feature-type h4 {
  color: #8e44ad;
  margin-bottom: 15px;
  text-align: center;
}

.feature-type ul {
  margin-left: 20px;
}

.feature-type li {
  margin-bottom: 8px;
  font-size: 0.9em;
}

.automation-workflow {
  margin: 20px 0;
}

.workflow-systems {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.system-card {
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.system-card h4 {
  color: white;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.system-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 15px 0;
}

.feature {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.system-card p {
  font-size: 0.9em;
  margin: 0;
  opacity: 0.9;
}

.workflow-example {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 4px solid #3498db;
}

.workflow-example h4 {
  color: #2980b9;
  margin-bottom: 20px;
}

.workflow-steps-detailed {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.step-detailed {
  background: white;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step-number {
  background: #3498db;
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

.step-content h5 {
  color: #2980b9;
  margin-bottom: 8px;
}

.step-content p {
  margin-bottom: 10px;
  font-size: 0.9em;
}

.technical-details {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.technical-details span {
  background: #ecf0f1;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.8em;
  color: #2c3e50;
}

.success-cases {
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 20px 0;
}

.case-study {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border-left: 4px solid #e74c3c;
}

.case-study h3 {
  color: #c0392b;
  margin-bottom: 20px;
  text-align: center;
}

.case-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.case-description {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.case-description h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.case-description ul {
  margin-left: 20px;
}

.case-description li {
  margin-bottom: 5px;
  font-size: 0.9em;
}

.case-results {
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.case-results h4 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.result-metrics {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.metric {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #ecf0f1;
  border-radius: 8px;
}

.metric .value {
  font-weight: bold;
  color: #e74c3c;
  font-size: 1.1em;
}

.metric .label {
  color: #7f8c8d;
  font-size: 0.9em;
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
  
  .workflow-steps {
    flex-direction: column;
  }
  
  .arrow {
    transform: rotate(90deg);
  }
  
  .method-details {
    grid-template-columns: 1fr;
  }
  
  .database-grid {
    grid-template-columns: 1fr;
  }
  
  .prediction-models {
    grid-template-columns: 1fr;
  }
  
  .feature-engineering {
    grid-template-columns: 1fr;
  }
  
  .workflow-systems {
    grid-template-columns: 1fr;
  }
  
  .case-content {
    grid-template-columns: 1fr;
  }
  
  .challenges-prospects {
    grid-template-columns: 1fr;
  }
}
</style>