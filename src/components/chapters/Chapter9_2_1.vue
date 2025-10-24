<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.2.1 玻色场</h1>
      <p class="chapter-subtitle">Bosonic Fields</p>
    </div>

    <div class="content-section">
      <h2>基本概念</h2>
      <p>玻色场是描述玻色子系统的量子场，遵循玻色-爱因斯坦统计。玻色场的路径积分表述为研究多体玻色系统提供了强有力的理论工具。</p>
      
      <div class="concept-box">
        <h3>玻色场的特性</h3>
        <ul>
          <li><strong>对易关系</strong>：玻色场算符满足对易关系</li>
          <li><strong>多粒子占据</strong>：同一量子态可以被多个粒子占据</li>
          <li><strong>玻色-爱因斯坦凝聚</strong>：低温下可能发生相变</li>
          <li><strong>相干态</strong>：具有良好定义的相位和振幅</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>场算符与对易关系</h2>
      
      <div class="formula-section">
        <h3>玻色场算符</h3>
        <p>玻色场算符 $\hat{\phi}(x)$ 和其共轭动量 $\hat{\pi}(x)$满足正则对易关系：</p>
        <div class="formula-block">$$[\hat{\phi}(x), \hat{\pi}(y)] = i\hbar \delta^3(x - y)$$</div> <div class="formula-block">$$[\hat{\phi}(x), \hat{\phi}(y)] = [\hat{\pi}(x), \hat{\pi}(y)] = 0$$</div>
      </div>

      <div class="formula-section">
        <h3>产生湮灭算符表示</h3>
        <p>在动量表示中，场算符可以展开为：</p> <div class="formula-block">$$\hat{\phi}(x) = \int \frac{d^3k}{(2\pi)^3} \frac{1}{\sqrt{2\omega_k}} \left[ \hat{a}_k e^{ik \cdot x} + \hat{a}_k^\dagger e^{-ik \cdot x} \right]$$</div>
        <p>其中产生湮灭算符满足：</p> <div class="formula-block">$$[\hat{a}_k, \hat{a}_{k'}^\dagger] = (2\pi)^3 \delta^3(k - k')$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>路径积分表述</h2>
      
      <div class="path-integral-section">
        <h3>相干态路径积分</h3>
        <p>玻色场的路径积分使用相干态表示。相干态定义为：</p> <div class="formula-block">$$|\phi\rangle = \exp\left(\int d^3x \phi^*(x) \hat{\phi}(x)\right) |0\rangle$$</div>
        
        <p>配分函数的路径积分表示：</p> <div class="formula-block">$$Z = \int \mathcal{D}\phi^* \mathcal{D}\phi \exp\left(-\frac{1}{\hbar} S_E[\phi^*, \phi]\right)$$</div>
        
        <p>其中欧几里得作用量为：</p> <div class="formula-block">$$S_E = \int_0^\beta d\tau \int d^3x \left[ \phi^* \frac{\partial \phi}{\partial \tau} + H[\phi^*, \phi] \right]$$</div>
      </div>

      <div class="path-integral-section">
        <h3>自由玻色场</h3>
        <p>自由玻色场的哈密顿量：</p> <div class="formula-block">$$H = \int d^3x \left[ \frac{|\nabla \phi|^2}{2m} + \frac{m\omega^2}{2} |\phi|^2 \right]$$</div>
        
        <p>对应的欧几里得作用量：</p> <div class="formula-block">$$S_E = \int_0^\beta d\tau \int d^3x \left[ \phi^* \frac{\partial \phi}{\partial \tau} + \frac{|\nabla \phi|^2}{2m} + \frac{m\omega^2}{2} |\phi|^2 \right]$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>具体模型分析</h2>
      
      <div class="model-grid">
        <div class="model-card">
          <h3>量子谐振子</h3>
          <p>单模玻色场对应量子谐振子：</p> <div class="formula-block">$$H = \hbar\omega \left( \hat{a}^\dagger \hat{a} + \frac{1}{2} \right)$$</div>
          <p>配分函数：</p> <div class="formula-block">$$Z = \frac{1}{2\sinh(\beta\hbar\omega/2)}$$</div>
        </div>

        <div class="model-card">
          <h3>Bose-Hubbard模型</h3>
          <p>格点上的玻色子系统：</p> <div class="formula-block">$$H = -t \sum_{\langle i,j \rangle} (\hat{b}_i^\dagger \hat{b}_j + \text{h.c.}) + \frac{U}{2} \sum_i \hat{n}_i(\hat{n}_i - 1)$$</div><p>其中$t$ 是跃迁积分，$U$是在位相互作用。</p>
        </div>

        <div class="model-card">
          <h3>非线性薛定谔方程</h3>
          <p>包含相互作用的玻色场：</p>
          <div class="formula-block">$$H = \int d^3x \left[ \frac{|\nabla \phi|^2}{2m} + \frac{g}{2} |\phi|^4 \right]$$</div>
          <p>对应Gross-Pitaevskii方程。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相变与临界现象</h2>
      
      <div class="phase-transition-section">
        <h3>玻色-爱因斯坦凝聚</h3>
        <p>当温度降低到临界温度以下时，玻色子会发生相变：</p> <div class="formula-block">$$T_c = \frac{2\pi\hbar^2}{mk_B} \left( \frac{n}{\zeta(3/2)} \right)^{2/3}$$</div>
        
        <div class="bec-properties">
          <h4>BEC的特征</h4>
          <ul>
            <li>宏观量子相干性</li>
            <li>超流性质</li>
            <li>涡旋激发</li>
            <li>集体激发模式</li>
          </ul>
        </div>
      </div>

      <div class="phase-transition-section">
        <h3>超流-绝缘体相变</h3><p>在Bose-Hubbard模型中，调节$t/U$比值可以实现相变：</p>
        
        <div class="phase-diagram">
          <h4>相图特征</h4>
          <div class="phase-grid">
            <div class="phase-item">
              <h5>超流相 (SF)</h5><p>$t/U$较大时，粒子可以自由跃迁</p>
            </div>
            <div class="phase-item">
              <h5>Mott绝缘体相 (MI)</h5><p>$t/U$较小时，粒子被局域化</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>计算方法</h2>
      
      <div class="methods-section">
        <div class="method-item">
          <h3>平均场理论</h3>
          <p>将相互作用项用平均场近似：</p>
          <div class="formula-block">$$\hat{b}_i^\dagger \hat{b}_j \approx \langle \hat{b}_i^\dagger \rangle \hat{b}_j + \hat{b}_i^\dagger \langle \hat{b}_j \rangle - \langle \hat{b}_i^\dagger \rangle \langle \hat{b}_j \rangle$$</div>
        </div>

        <div class="method-item">
          <h3>Bogoliubov理论</h3>
          <p>对弱相互作用玻色气体的微扰处理：</p> <div class="formula-block">$$\hat{\phi}(x) = \phi_0 + \hat{\delta\phi}(x)$$</div><p>其中$\phi_0$ 是凝聚体波函数。</p>
        </div>

        <div class="method-item">
          <h3>量子蒙特卡罗</h3>
          <p>数值计算路径积分：</p>
          <ul>
            <li>世界线算法</li>
            <li>随机级数展开</li>
            <li>连续时间方法</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验实现</h2>
      
      <div class="experimental-section">
        <div class="experiment-grid">
          <div class="experiment-card">
            <h3>冷原子系统</h3>
            <p>使用激光冷却和磁阱技术：</p>
            <ul>
              <li>碱金属原子BEC</li>
              <li>光晶格中的玻色子</li>
              <li>可调节相互作用强度</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h3>超导约瑟夫森结阵列</h3>
            <p>人工量子系统：</p>
            <ul>
              <li>Cooper对作为玻色子</li>
              <li>可控制的参数</li>
              <li>量子相变观测</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h3>极化子系统</h3>
            <p>固体中的准粒子：</p>
            <ul>
              <li>激子极化子</li>
              <li>磁振子</li>
              <li>声子系统</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>高级主题</h2>
      
      <div class="advanced-topics">
        <div class="topic-card">
          <h3>拓扑玻色相</h3>
          <p>具有非平凡拓扑性质的玻色系统：</p>
          <ul>
            <li>Chern绝缘体</li>
            <li>拓扑超流</li>
            <li>边界态</li>
          </ul>
        </div>

        <div class="topic-card">
          <h3>非平衡动力学</h3>
          <p>时间演化的玻色系统：</p>
          <ul>
            <li>量子淬火</li>
            <li>Floquet工程</li>
            <li>多体局域化</li>
          </ul>
        </div>

        <div class="topic-card">
          <h3>强关联效应</h3>
          <p>超越平均场的理论：</p>
          <ul>
            <li>量子涨落</li>
            <li>关联函数</li>
            <li>临界指数</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论基础</h3>
          <ul>
            <li>玻色场算符</li>
            <li>相干态路径积分</li>
            <li>对易关系</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>物理现象</h3>
          <ul>
            <li>玻色-爱因斯坦凝聚</li>
            <li>超流性质</li>
            <li>量子相变</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>计算方法</h3>
          <ul>
            <li>平均场理论</li>
            <li>Bogoliubov近似</li>
            <li>数值方法</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>实验应用</h3>
          <ul>
            <li>冷原子物理</li>
            <li>超导系统</li>
            <li>固体物理</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

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
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-style: italic;
}

.content-section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.concept-box {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.concept-box h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.concept-box ul {
  padding-left: 20px;
}

.concept-box li {
  margin: 8px 0;
}

.formula-section, .path-integral-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3, .path-integral-section h3 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
}

.model-grid, .experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.model-card, .experiment-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #e74c3c;
  transition: transform 0.3s ease;
}

.model-card:hover, .experiment-card:hover {
  transform: translateY(-5px);
}

.model-card h3, .experiment-card h3 {
  color: #e74c3c;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.phase-transition-section {
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 10px;
  padding: 25px;
  margin: 25px 0;
}

.bec-properties {
  margin: 20px 0;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

.bec-properties h4 {
  color: #d68910;
  margin-bottom: 10px;
}

.bec-properties ul {
  padding-left: 20px;
}

.phase-diagram {
  margin: 20px 0;
}

.phase-diagram h4 {
  color: #d68910;
  margin-bottom: 15px;
}

.phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.phase-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
}

.phase-item h5 {
  color: #d68910;
  margin-bottom: 8px;
}

.methods-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 25px 0;
}

.method-item {
  background: white;
  padding: 25px;
  border-radius: 10px;
  border: 1px solid #bdc3c7;
}

.method-item h3 {
  color: #27ae60;
  margin-bottom: 15px;
}

.method-item ul {
  padding-left: 20px;
}

.method-item li {
  margin: 8px 0;
}

.experimental-section {
  margin: 25px 0;
}

.advanced-topics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.topic-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #9b59b6;
  transition: transform 0.3s ease;
}

.topic-card:hover {
  transform: translateY(-5px);
}

.topic-card h3 {
  color: #9b59b6;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.topic-card ul {
  padding-left: 20px;
}

.topic-card li {
  margin: 8px 0;
}

.summary-section {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-item h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-item ul {
  list-style: none;
  padding: 0;
}

.summary-item li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.summary-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffeaa7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .model-grid, .experiment-grid {
    grid-template-columns: 1fr;
  }
  
  .methods-section {
    grid-template-columns: 1fr;
  }
  
  .advanced-topics {
    grid-template-columns: 1fr;
  }
  
  .phase-grid {
    grid-template-columns: 1fr;
  }
}
</style>