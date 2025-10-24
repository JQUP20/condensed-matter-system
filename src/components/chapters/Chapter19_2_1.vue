<template>
  <div class="chapter-content">
    <h1>19.2.1 拓扑量子计算</h1>
    
    <div class="content-section">
      <h2>1. 拓扑量子计算的概念</h2>
      <p>拓扑量子计算是基于拓扑保护的量子计算方案，利用非阿贝尔任意子的编织操作实现量子门操作。</p>
      
      <h3>1.1 基本原理</h3>
      <ul>
        <li><strong>拓扑保护</strong>：量子信息存储在拓扑性质中</li>
        <li><strong>非阿贝尔任意子</strong>：交换操作不可对易</li>
        <li><strong>编织操作</strong>：通过移动任意子实现量子门</li>
        <li><strong>容错性</strong>：对局域扰动天然免疫</li>
      </ul>

      <h3>1.2 与传统量子计算的比较</h3>
      <div class="comparison-table">
        <table>
          <thead>
            <tr>
              <th>特征</th>
              <th>传统量子计算</th>
              <th>拓扑量子计算</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>量子比特</td>
              <td>物理量子比特</td>
              <td>拓扑量子比特</td>
            </tr>
            <tr>
              <td>错误来源</td>
              <td>环境噪声</td>
              <td>拓扑能隙</td>
            </tr>
            <tr>
              <td>纠错</td>
              <td>主动纠错</td>
              <td>被动保护</td>
            </tr>
            <tr>
              <td>门操作</td>
              <td>外场控制</td>
              <td>编织操作</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="content-section">
      <h2>2. 非阿贝尔任意子</h2>
      
      <h3>2.1 任意子的分类</h3>
      <p>二维系统中的准粒子统计：</p>
      <div class="formula">
        $$|\psi_1, \psi_2\rangle = e^{i\theta} |\psi_2, \psi_1\rangle$$
      </div>
      <ul>
        <li><strong>玻色子</strong>：θ = 0</li>
        <li><strong>费米子</strong>：θ = π</li>
        <li><strong>任意子</strong>：θ = 任意值</li>
      </ul>

      <h3>2.2 非阿贝尔统计</h3>
      <p>对于非阿贝尔任意子，交换操作由矩阵表示：</p>
      <div class="formula">
        $$|\psi_1, \psi_2\rangle = R_{12} |\psi_2, \psi_1\rangle$$
      </div>
      <p>其中R₁₂是非对角矩阵，不同交换操作不对易：</p>
      <div class="formula">
        $$[R_{12}, R_{23}] \neq 0$$
      </div>

      <h3>2.3 Majorana费米子</h3>
      <p>最简单的非阿贝尔任意子，满足：</p>
      <div class="formula">
        $$\gamma_i^\dagger = \gamma_i, \quad \{\gamma_i, \gamma_j\} = 2\delta_{ij}$$
      </div>
      <p>交换操作：</p>
      <div class="formula">
        $$\gamma_i \leftrightarrow \gamma_j: \quad |\psi\rangle \rightarrow e^{\frac{\pi}{4}\gamma_i\gamma_j} |\psi\rangle$$
      </div>
    </div>

    <div class="content-section">
      <h2>3. 拓扑量子比特</h2>
      
      <h3>3.1 编码方案</h3>
      <p>使用2n个Majorana费米子编码n个量子比特：</p>
      <div class="formula">
        $$c_j = \frac{1}{2}(\gamma_{2j-1} + i\gamma_{2j})$$
      </div>
      <p>量子比特的基态：</p>
      <div class="formula">
        $$|0\rangle_j: \quad c_j|0\rangle_j = 0$$
        $$|1\rangle_j: \quad c_j^\dagger|0\rangle_j = |1\rangle_j$$
      </div>

      <h3>3.2 拓扑保护</h3>
      <p>能隙保护：</p>
      <div class="formula">
        $$\Delta E = \min(E_1 - E_0) \propto e^{-L/\xi}$$
      </div>
      <p>其中L是系统尺寸，ξ是相关长度。</p>
    </div>

    <div class="content-section">
      <h2>4. 编织操作和量子门</h2>
      
      <h3>4.1 基本编织操作</h3>
      <p>两个Majorana费米子的交换：</p>
      <div class="formula">
        $$B_{ij} = e^{\frac{\pi}{4}\gamma_i\gamma_j} = \frac{1}{\sqrt{2}}(1 + \gamma_i\gamma_j)$$
      </div>

      <h3>4.2 单量子比特门</h3>
      <p>通过编织实现的旋转门：</p>
      <div class="formula">
        $$R_z(\theta) = e^{-i\frac{\theta}{2}\sigma_z}$$
      </div>
      <p>但某些门（如T门）无法通过编织实现，需要额外资源。</p>

      <h3>4.3 两量子比特门</h3>
      <p>CNOT门可以通过复杂的编织序列实现：</p>
      <div class="formula">
        $$\text{CNOT} = \prod_{k} B_{i_k j_k}$$
      </div>
    </div>

    <div class="content-section">
      <h2>5. 物理实现平台</h2>
      
      <h3>5.1 p波超导体</h3>
      <p>手性p波超导体的边界态：</p>
      <div class="formula">
        $$H = \sum_{\mathbf{k}} \psi_{\mathbf{k}}^\dagger (\mathbf{k} \cdot \boldsymbol{\sigma} + \Delta(\hat{\mathbf{k}}) \sigma_y) \psi_{\mathbf{k}}$$
      </div>
      <p>其中Δ(k̂) = Δ(k_x + ik_y)是p波配对。</p>

      <h3>5.2 拓扑超导体</h3>
      <p>一维拓扑超导体的有效模型：</p>
      <div class="formula">
        $$H = -\mu \sum_i c_i^\dagger c_i - t \sum_i (c_i^\dagger c_{i+1} + h.c.) + \Delta \sum_i (c_i c_{i+1} + h.c.)$$
      </div>
      <p>在拓扑相中端点存在Majorana零模。</p>

      <h3>5.3 分数量子霍尔态</h3>
      <p>ν = 5/2分数量子霍尔态：</p>
      <ul>
        <li>Moore-Read波函数</li>
        <li>非阿贝尔准粒子激发</li>
        <li>Pfaffian态的性质</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>6. 实验进展</h2>
      
      <h3>6.1 Majorana费米子的观测</h3>
      <p>实验证据：</p>
      <ul>
        <li><strong>零偏压峰</strong>：隧道谱中的零能峰</li>
        <li><strong>量子化电导</strong>：2e²/h的电导平台</li>
        <li><strong>4π周期性</strong>：约瑟夫森效应的异常周期</li>
        <li><strong>非局域关联</strong>：远程Majorana对的关联</li>
      </ul>

      <h3>6.2 材料平台</h3>
      <ul>
        <li><strong>半导体-超导体异质结</strong>：InAs/Al纳米线</li>
        <li><strong>铁磁原子链</strong>：超导体表面的Fe原子链</li>
        <li><strong>量子反常霍尔绝缘体</strong>：与超导体的接触</li>
      </ul>

      <h3>6.3 编织操作的实现</h3>
      <p>实验挑战：</p>
      <ul>
        <li>Majorana费米子的移动</li>
        <li>编织路径的控制</li>
        <li>相干性的保持</li>
        <li>测量和读出</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>7. 理论挑战</h2>
      
      <h3>7.1 通用性问题</h3>
      <p>Majorana编织的限制：</p>
      <ul>
        <li>只能实现Clifford群</li>
        <li>需要额外的非拓扑门</li>
        <li>魔态蒸馏的需求</li>
      </ul>

      <h3>7.2 退相干机制</h3>
      <p>拓扑保护的限制：</p>
      <ul>
        <li>有限能隙效应</li>
        <li>准粒子中毒</li>
        <li>电荷噪声</li>
        <li>温度效应</li>
      </ul>

      <h3>7.3 可扩展性</h3>
      <ul>
        <li>大规模系统的制备</li>
        <li>多量子比特的控制</li>
        <li>错误率的评估</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>8. 应用前景</h2>
      
      <h3>8.1 容错量子计算</h3>
      <p>拓扑量子计算的优势：</p>
      <ul>
        <li><strong>天然容错</strong>：拓扑保护减少错误</li>
        <li><strong>长相干时间</strong>：减少退相干影响</li>
        <li><strong>简化纠错</strong>：降低纠错开销</li>
      </ul>

      <h3>8.2 量子算法</h3>
      <ul>
        <li>Shor算法的实现</li>
        <li>量子模拟应用</li>
        <li>优化问题求解</li>
      </ul>

      <h3>8.3 混合架构</h3>
      <p>与传统量子计算的结合：</p>
      <ul>
        <li>拓扑量子比特作为存储</li>
        <li>传统量子比特进行操作</li>
        <li>优势互补的架构</li>
      </ul>
    </div>

    <div class="content-section">
      <h2>9. 未来展望</h2>
      
      <div class="highlight-box">
        <h4>发展方向</h4>
        <ul>
          <li><strong>材料工程</strong>：开发更好的拓扑超导材料</li>
          <li><strong>器件设计</strong>：优化拓扑量子比特的设计</li>
          <li><strong>控制技术</strong>：发展精确的编织控制方法</li>
          <li><strong>理论完善</strong>：深入理解拓扑保护机制</li>
          <li><strong>系统集成</strong>：构建可扩展的拓扑量子计算系统</li>
        </ul>
      </div>

      <p>拓扑量子计算代表了量子计算发展的重要方向，虽然面临诸多挑战，但其独特的容错特性使其在未来量子技术中具有重要地位。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter19_2_1',
  mounted() {
    // 渲染数学公式
    if (window.renderMathInElement) {
      window.renderMathInElement(this.$el, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ]
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

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 1.8em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.4em;
}

h4 {
  color: #2c3e50;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.2em;
}

.content-section {
  margin-bottom: 30px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  background-color: #fff;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
}

.comparison-table {
  margin: 20px 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.comparison-table th,
.comparison-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e1e8ed;
}

.comparison-table th {
  background-color: #3498db;
  color: white;
  font-weight: 600;
}

.comparison-table tr:hover {
  background-color: #f8f9fa;
}

ul, ol {
  margin: 15px 0;
  padding-left: 30px;
}

li {
  margin: 8px 0;
}

.highlight-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.highlight-box h4 {
  color: white;
  margin-top: 0;
}

.highlight-box ul {
  margin: 10px 0;
}

.highlight-box li {
  margin: 5px 0;
}

p {
  margin: 12px 0;
  text-align: justify;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  h1 {
    font-size: 2em;
  }
  
  h2 {
    font-size: 1.5em;
  }
  
  .content-section {
    padding: 15px;
  }
  
  .comparison-table {
    font-size: 0.9em;
  }
}
</style>