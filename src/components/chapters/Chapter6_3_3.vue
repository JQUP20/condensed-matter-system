<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">6.3.3 重整化群流与相图</h1>
      <p class="chapter-subtitle">从微观到宏观的标度变换</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：35分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解重整化群流的物理图像和数学描述</li>
        <li>掌握不动点的分类和稳定性分析</li>
        <li>学习相图的重整化群构造方法</li>
        <li>理解临界面和相边界的确定</li>
        <li>掌握β函数和临界指数的计算</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：尺度变换的物理图像</h2>
      <div class="highlight-box">
        <p>
          重整化群流描述了物理系统在不同长度尺度下的行为演化。
          通过连续的<strong>粗粒化</strong>过程，我们可以追踪系统参数
          在参数空间中的"流动"轨迹。这种流动最终会收敛到
          <strong>不动点</strong>，决定了系统的长程行为和临界性质。
          重整化群流不仅提供了理解相变的新视角，更为构造
          <strong>相图</strong>提供了系统性的理论框架。
        </p>
      </div>
    </section>

    <!-- 重整化群流的基本概念 -->
    <section class="content-section">
      <h2>1. 重整化群流的基本概念</h2>
      
      <div class="rg-flow-basics">
        <div class="flow-definition">
          <h4>重整化群变换</h4>
          <p>
            考虑一个具有耦合常数集合 $\{g_i\}$的系统，重整化群变换$T_b$ 将系统从长度尺度 $a$ 变换到 $ba$：
          </p><div class="formula-box">$$T_b: \{g_i\} \rightarrow \{g_i'\}$$</div><p>其中$b > 1$是尺度因子。</p>
        </div>
        
        <div class="flow-equations">
          <h4>流方程</h4>
          <p>
            在连续极限下，重整化群流由微分方程描述：
          </p><div class="formula-box">$$\frac{dg_i}{dl} = \beta_i(g_1, g_2, \ldots)$$</div><p>其中$l = \ln b$ 是对数尺度参数，$\beta_i$是<strong>β函数</strong>。
          </p>
        </div>
        
        <div class="flow-visualization">
          <h4>流线图示</h4>
          <div class="flow-diagram">
            <svg viewBox="0 0 400 300" class="flow-svg">
              <!-- 坐标轴 -->
              <line x1="50" y1="250" x2="350" y2="250" stroke="#333" stroke-width="2"/>
              <line x1="50" y1="250" x2="50" y2="50" stroke="#333" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="370" y="255" font-size="14" fill="#333">g₁</text>
              <text x="45" y="40" font-size="14" fill="#333">g₂</text>
              
              <!-- 不动点 -->
              <circle cx="200" cy="150" r="5" fill="#e74c3c"/>
              <text x="210" y="155" font-size="12" fill="#e74c3c">不动点</text>
              
              <!-- 流线 -->
              <path d="M 100 100 Q 150 125 200 150" stroke="#3498db" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
              <path d="M 300 200 Q 250 175 200 150" stroke="#3498db" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
              <path d="M 150 250 Q 175 200 200 150" stroke="#3498db" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
              
              <!-- 箭头标记 -->
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#3498db"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- 不动点分析 -->
    <section class="content-section">
      <h2>2. 不动点的分类与稳定性</h2>
      
      <div class="fixed-points-analysis">
        <div class="fixed-point-definition">
          <h4>不动点的定义</h4><p>不动点$g^*$满足：
          </p><div class="formula-box">$$\beta_i(g^*) = 0, \quad \forall i$$</div>
          <p>
            在不动点处，系统具有<strong>标度不变性</strong>。
          </p>
        </div>
        
        <div class="stability-analysis">
          <h4>线性稳定性分析</h4>
          <p> 在不动点附近线性化β函数：</p> <div class="formula-box">$$\frac{d\delta g_i}{dl} = \sum_j M_{ij} \delta g_j$$</div><p>其中$M_{ij} = \frac{\partial \beta_i}{\partial g_j}\bigg|_{g^*}$是稳定性矩阵。
          </p>
        </div>
        
        <div class="eigenvalue-classification">
          <h4>特征值分类</h4>
          <div class="eigenvalue-table">
            <table class="classification-table">
              <thead>
                <tr>
                  <th>特征值</th>
                  <th>方向类型</th>
                  <th>物理意义</th>
                  <th>临界指数</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>λ > 0</td>
                  <td>相关方向</td><td>不稳定，远离不动点</td><td>$y = λ > 0$</td>
                </tr>
                <tr>
                  <td>λ < 0</td>
                  <td>无关方向</td><td>稳定，趋向不动点</td><td>$y = λ < 0$</td>
                </tr>
                <tr>
                  <td>λ = 0</td>
                  <td>边缘方向</td><td>中性稳定</td><td>$y = 0$</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div class="fixed-point-types">
          <h4>不动点类型</h4>
          <div class="types-grid">
            <div class="type-card">
              <h5>高斯不动点</h5><p>自由理论对应的不动点，通常位于$g = 0$。
                描述高温无序相的行为。
              </p><div class="formula-box">$$g^*_{\text{Gaussian}} = 0$$</div>
            </div>
            
            <div class="type-card">
              <h5>Wilson-Fisher不动点</h5>
              <p>
                相互作用理论的非平凡不动点， 控制连续相变的临界行为。</p> <div class="formula-box">$$g^*_{\text{WF}} \neq 0$$</div>
            </div>
            
            <div class="type-card">
              <h5>强耦合不动点</h5>
              <p>
                强相互作用区域的不动点， 可能对应有序相或一级相变。</p> <div class="formula-box">$$g^*_{\text{strong}} \gg 1$$</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- β函数的计算 -->
    <section class="content-section">
      <h2>3. β函数的计算方法</h2>
      
      <div class="beta-function-calculation">
        <div class="perturbative-calculation">
          <h4>微扰计算</h4>
          <p>
            对于弱耦合系统，可以用微扰论计算β函数。 以φ⁴理论为例：</p> <div class="formula-box">$$\mathcal{L} = \frac{1}{2}(\partial\phi)^2 + \frac{1}{2}r\phi^2 + \frac{u}{4!}\phi^4$$</div>
          
          <div class="perturbation-series"> <h5>单圈修正</h5><p>β函数的单圈贡献：</p> <div class="formula-box">$$\beta_u = \frac{du}{dl} = -\epsilon u + \frac{3u^2}{(4\pi)^2} + O(u^3)$$</div><p>其中$\epsilon = 4 - d$是维度参数。</p>
          </div>
          
          <div class="wilson-fisher-fp"><h5>Wilson-Fisher不动点</h5><p>令$\beta_u = 0$，得到：</p><div class="formula-box">$$u^* = \frac{2\epsilon(4\pi)^2}{3} + O(\epsilon^2)$$</div>
          </div>
        </div>
        
        <div class="nonperturbative-methods">
          <h4>非微扰方法</h4>
          <div class="methods-grid">
            <div class="method-card">
              <h5>数值重整化群</h5>
              <p>
                直接数值求解重整化群方程，
                适用于强耦合区域。
              </p>
            </div>
            <div class="method-card">
              <h5>函数重整化群</h5>
              <p>
                考虑完整的有效作用量，
                得到精确的流方程。
              </p>
            </div>
            <div class="method-card">
              <h5>蒙特卡罗重整化群</h5>
              <p>
                结合数值模拟和重整化群，
                研究复杂系统的相变。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 相图的构造 -->
    <section class="content-section">
      <h2>4. 相图的重整化群构造</h2>
      
      <div class="phase-diagram-construction">
        <div class="construction-principle">
          <h4>构造原理</h4>
          <p>
            相图的构造基于以下原理：
          </p>
          <ul>
            <li><strong>分离面</strong>：不同相的分界面</li>
            <li><strong>临界面</strong>：连续相变的临界点集合</li>
            <li><strong>流线结构</strong>：决定相的稳定性</li>
          </ul>
        </div>
        
        <div class="phase-diagram-example">
          <h4>Ising模型相图</h4>
          <div class="phase-diagram">
            <svg viewBox="0 0 500 400" class="phase-svg">
              <!-- 坐标轴 -->
              <line x1="50" y1="350" x2="450" y2="350" stroke="#333" stroke-width="2"/>
              <line x1="50" y1="350" x2="50" y2="50" stroke="#333" stroke-width="2"/>
              
              <!-- 轴标签 -->
              <text x="470" y="355" font-size="14" fill="#333">T</text>
              <text x="45" y="40" font-size="14" fill="#333">H</text>
              
              <!-- 临界点 -->
              <circle cx="250" cy="200" r="6" fill="#e74c3c"/>
              <text x="260" y="205" font-size="12" fill="#e74c3c">临界点</text>
              
              <!-- 相边界 -->
              <line x1="250" y1="200" x2="250" y2="350" stroke="#2c3e50" stroke-width="3"/>
              
              <!-- 相区域标记 -->
              <text x="150" y="120" font-size="16" fill="#3498db" font-weight="bold">顺磁相</text>
              <text x="320" y="120" font-size="16" fill="#3498db" font-weight="bold">顺磁相</text>
              <text x="180" y="300" font-size="16" fill="#e74c3c" font-weight="bold">铁磁相 (M>0)</text>
              <text x="280" y="300" font-size="16" fill="#e74c3c" font-weight="bold">铁磁相 (M<0)</text>
              
              <!-- 流线 -->
              <path d="M 100 100 Q 200 150 250 200" stroke="#9b59b6" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
              <path d="M 400 100 Q 300 150 250 200" stroke="#9b59b6" stroke-width="2" fill="none" marker-end="url(#arrowhead2)"/>
              
              <!-- 箭头标记 -->
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#9b59b6"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
        
        <div class="critical-surface">
          <h4>临界面的确定</h4>
          <p> 临界面由以下条件确定：</p> <div class="formula-box">$$\frac{\partial^2 F}{\partial \phi^2}\bigg|_{\phi=0} = 0$$</div>
          <p>
            在重整化群语言中，这对应于流向临界不动点的轨迹。
          </p>
        </div>
      </div>
    </section>

    <!-- 多临界点 -->
    <section class="content-section">
      <h2>5. 多临界点与复杂相图</h2>
      
      <div class="multicritical-points">
        <div class="multicritical-definition">
          <h4>多临界点</h4>
          <p>
            多临界点是多条相边界的交汇点，
            对应重整化群流中具有多个相关方向的不动点。
          </p>
        </div>
        
        <div class="tricritical-point">
          <h4>三临界点</h4>
          <p> 三临界点具有两个相关方向，控制一级相变到二级相变的转变。</p> <div class="formula-box">$$\beta_u = -\epsilon u + au^2 + bu^3$$</div><p>当$a = 0$时出现三临界行为。
          </p>
        </div>
        
        <div class="lifshitz-point">
          <h4>Lifshitz点</h4>
          <p>
            Lifshitz点对应于调制相的出现，
            系统的旋转对称性被破坏。
          </p>
          <div class="lifshitz-diagram">
            <svg viewBox="0 0 400 300" class="lifshitz-svg">
              <!-- 相图示意 -->
              <circle cx="200" cy="150" r="80" fill="none" stroke="#3498db" stroke-width="2"/>
              <line x1="120" y1="150" x2="280" y2="150" stroke="#e74c3c" stroke-width="2"/>
              <line x1="200" y1="70" x2="200" y2="230" stroke="#e74c3c" stroke-width="2"/>
              
              <!-- 标记 -->
              <text x="150" y="100" font-size="12" fill="#333">均匀相</text>
              <text x="220" y="180" font-size="12" fill="#333">调制相</text>
              <circle cx="200" cy="150" r="3" fill="#e74c3c"/>
              <text x="210" y="145" font-size="10" fill="#e74c3c">Lifshitz点</text>
            </svg>
          </div>
        </div>
        
        <div class="quantum-critical-points">
          <h4>量子临界点</h4>
          <p>量子临界点由量子涨落驱动，具有动力学标度指数$z$。
          </p><div class="formula-box">$$\xi_\tau \sim \xi^z$$</div><p>其中$\xi_\tau$ 是时间关联长度，$\xi$是空间关联长度。
          </p>
        </div>
      </div>
    </section>

    <!-- 实际应用 -->
    <section class="content-section">
      <h2>6. 实际系统中的应用</h2>
      
      <div class="practical-applications">
        <div class="material-applications">
          <h4>材料科学应用</h4>
          <div class="applications-grid">
            <div class="application-card">
              <h5>合金相图</h5>
              <p>
                利用重整化群方法预测合金的
                有序-无序相变和相分离行为。
              </p>
            </div>
            <div class="application-card">
              <h5>磁性材料</h5>
              <p>
                确定磁性材料的相图，
                包括铁磁、反铁磁和自旋玻璃相。
              </p>
            </div>
            <div class="application-card">
              <h5>超导体</h5>
              <p>
                研究超导相变的性质，
                特别是非常规超导体的相图。
              </p>
            </div>
          </div>
        </div>
        
        <div class="computational-methods">
          <h4>计算方法</h4>
          <div class="methods-comparison">
            <table class="methods-table">
              <thead>
                <tr>
                  <th>方法</th>
                  <th>适用范围</th>
                  <th>精度</th>
                  <th>计算复杂度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ε展开</td>
                  <td>弱耦合，d≈4</td>
                  <td>中等</td>
                  <td>低</td>
                </tr>
                <tr>
                  <td>1/N展开</td>
                  <td>大N极限</td>
                  <td>高</td>
                  <td>中等</td>
                </tr>
                <tr>
                  <td>数值RG</td>
                  <td>任意耦合</td>
                  <td>很高</td>
                  <td>高</td>
                </tr>
                <tr>
                  <td>蒙特卡罗</td>
                  <td>有限温度</td>
                  <td>很高</td>
                  <td>很高</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- 前沿发展 -->
    <section class="content-section">
      <h2>7. 前沿发展与展望</h2>
      
      <div class="frontier-developments">
        <div class="new-directions">
          <h4>新兴方向</h4>
          <div class="directions-grid">
            <div class="direction-card">
              <h5>机器学习重整化群</h5>
              <p>
                利用神经网络等机器学习方法
                自动发现重整化群变换。
              </p>
            </div>
            <div class="direction-card">
              <h5>张量网络重整化群</h5>
              <p>
                基于张量网络的重整化群方法，
                特别适用于强关联系统。
              </p>
            </div>
            <div class="direction-card">
              <h5>非平衡重整化群</h5>
              <p>
                扩展到非平衡系统，
                研究动力学相变和临界现象。
              </p>
            </div>
          </div>
        </div>
        
        <div class="future-challenges">
          <h4>未来挑战</h4>
          <div class="challenges-list">
            <ul>
              <li>强关联电子系统的精确处理</li>
              <li>量子多体系统的非微扰方法</li>
              <li>高维系统的数值重整化群</li>
              <li>拓扑相变的重整化群理论</li>
              <li>开放量子系统的重整化群</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <div class="key-points">
          <h4>关键要点</h4>
          <ul>
            <li><strong>重整化群流</strong>：描述系统在不同尺度下的演化</li>
            <li><strong>不动点</strong>：决定系统长程行为的关键点</li>
            <li><strong>β函数</strong>：刻画耦合常数随尺度的变化</li>
            <li><strong>相图构造</strong>：基于流线结构确定相边界</li>
            <li><strong>多临界点</strong>：复杂相图中的特殊点</li>
            <li><strong>实际应用</strong>：材料科学和凝聚态物理的重要工具</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 练习题 -->
    <div class="exercise-box">
      <h3><i class="fas fa-pencil-alt"></i> 思考练习</h3>
      <ol>
        <li>如何从β函数的符号判断不动点的稳定性？</li>
        <li>为什么Wilson-Fisher不动点控制连续相变的临界行为？</li>
        <li>三临界点与普通临界点在重整化群流中有什么区别？</li>
        <li>量子临界点的动力学标度指数有什么物理意义？</li>
      </ol>
    </div>

    <!-- 扩展阅读 -->
    <div class="reading-list">
      <h3><i class="fas fa-book"></i> 扩展阅读</h3>
      <ul>
        <li>Wilson, K.G. "The renormalization group: Critical phenomena and the Kondo problem"</li>
        <li>Cardy, J. "Scaling and Renormalization in Statistical Physics"</li>
        <li>Zinn-Justin, J. "Phase Transitions and Renormalization Group"</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter6_3_3',
  mounted() {
    // 确保 KaTeX 渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {delimiters: [{left: '$$', right: '$$', display: true},{left: '$', right: '$', display: false}
          ]
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

.chapter-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  margin-bottom: 15px;
}

.reading-time {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.learning-objectives {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.learning-objectives h3 {
  color: #2980b9;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.learning-objectives ul {
  margin: 0;
  padding-left: 20px;
}

.learning-objectives li {
  margin-bottom: 8px;
}

.content-section {
  margin: 30px 0;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.highlight-box {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
  border-left: 5px solid #28a745;
}

.formula-box {
  background: #f1f3f4;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
  margin: 15px 0;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
}

.flow-diagram, .phase-diagram, .lifshitz-diagram {
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.flow-svg, .phase-svg, .lifshitz-svg {
  width: 100%;
  height: auto;
}

.classification-table, .methods-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.classification-table th,
.classification-table td,
.methods-table th,
.methods-table td {
  padding: 12px 15px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.classification-table th,
.methods-table th {
  background: #667eea;
  color: white;
  font-weight: 600;
}

.classification-table tr:hover,
.methods-table tr:hover {
  background: #f8f9fa;
}

.types-grid, .methods-grid, .applications-grid, .directions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.type-card, .method-card, .application-card, .direction-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #3498db;
}

.type-card h5, .method-card h5, .application-card h5, .direction-card h5 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.eigenvalue-table {
  margin: 20px 0;
}

.perturbation-series {
  background: #e8f5e8;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #28a745;
}

.wilson-fisher-fp {
  background: #fff3cd;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #ffc107;
}

.construction-principle ul {
  margin: 10px 0;
  padding-left: 20px;
}

.construction-principle li {
  margin-bottom: 8px;
}

.challenges-list ul {
  margin: 10px 0;
  padding-left: 20px;
}

.challenges-list li {
  margin-bottom: 8px;
}

.summary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 25px;
  margin: 30px 0;
}

.summary-box h4 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-box ul {
  margin: 0;
  padding-left: 20px;
}

.summary-box li {
  margin-bottom: 8px;
}

.exercise-box {
  background: #fff8e1;
  border: 1px solid #ffcc02;
  border-radius: 10px;
  padding: 25px;
  margin: 20px 0;
}

.exercise-box h3 {
  color: #f57f17;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin-bottom: 10px;
}

.reading-list {
  background: #f5f5f5;
  border-radius: 10px;
  padding: 25px;
}

.reading-list h3 {
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.reading-list ul {
  margin: 0;
  padding-left: 20px;
}

.reading-list li {
  margin-bottom: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .types-grid,
  .methods-grid,
  .applications-grid,
  .directions-grid {
    grid-template-columns: 1fr;
  }
  
  .classification-table,
  .methods-table {
    font-size: 0.8em;
  }
  
  .flow-diagram,
  .phase-diagram,
  .lifshitz-diagram {
    padding: 10px;
  }
}
</style>