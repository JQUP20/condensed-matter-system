<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.2.3 Sine-Gordon模型</h1>
      <p class="chapter-subtitle">从XY模型到Sine-Gordon模型的对偶变换</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：20分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>理解XY模型与Sine-Gordon模型的对偶关系</li>
        <li>掌握对偶变换的数学技巧和物理意义</li>
        <li>学习Sine-Gordon模型中的孤子解</li>
        <li>理解孤子-反孤子对与涡旋-反涡旋对的对应关系</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：对偶性的魅力</h2>
      <div class="highlight-box">
        <p>
          在理论物理中，对偶性是最深刻和最美妙的概念之一。它告诉我们，
          看似完全不同的两个理论实际上描述的是同一个物理系统的不同方面。
          XY模型与Sine-Gordon模型之间的对偶关系就是这样一个经典例子——
          一个描述涡旋激发的统计模型，竟然与一个描述孤子的场论模型完全等价！
        </p>
      </div>
    </section>

    <!-- 对偶变换的动机 -->
    <section class="content-section">
      <h2>1. 对偶变换的动机</h2>
      
      <div class="subsection">
        <h3>1.1 XY模型的困难</h3>
        <p>
          直接分析XY模型面临的主要困难：
        </p>
        <ul>
          <li>涡旋激发的非线性相互作用</li>
          <li>拓扑约束的复杂性</li>
          <li>相变点附近的强耦合行为</li>
        </ul>
        
        <div class="note-box">
          <p>
            <strong>核心问题：</strong>如何将复杂的涡旋相互作用转化为更易处理的形式？
          </p>
        </div>
      </div>

      <div class="subsection">
        <h3>1.2 对偶变换的基本思想</h3>
        <p>
          对偶变换的核心思想是引入新的场变量，使得：
        </p>
        <ul>
          <li>原模型的强耦合区域对应新模型的弱耦合区域</li>
          <li>原模型的拓扑激发对应新模型的局域激发</li>
          <li>复杂的约束条件变成简单的场方程</li>
        </ul>
      </div>
    </section>

    <!-- 对偶变换的数学实现 -->
    <section class="content-section">
      <h2>2. 从XY模型到Sine-Gordon模型</h2>
      
      <div class="subsection">
        <h3>2.1 Villain模型的配分函数</h3>
        <p>
          从Villain模型开始：
        </p>
        
        <div class="formula-container">
          $$Z = \sum_{\{n_{ij}\}} \int \prod_i d\theta_i \, \exp\left(-\frac{1}{2g} \sum_{\langle i,j \rangle} (\theta_i - \theta_j - 2\pi n_{ij})^2\right)$$</div><p>其中$g$ 是耦合常数，$n_{ij}$是整数变量。
        </p>
      </div>

      <div class="subsection">
        <h3>2.2 Poisson求和公式</h3>
        <p>
          利用Poisson求和公式：
        </p><div class="formula-container">$$\sum_{n=-\infty}^{\infty} e^{-a(x-2\pi n)^2} = \frac{1}{2\sqrt{\pi a}} \sum_{m=-\infty}^{\infty} e^{-\frac{m^2}{4a}} e^{imx}$$</div>
        
        <p>
          可以将对整数变量的求和转换为对新场变量的积分。
        </p>
      </div>

      <div class="subsection">
        <h3>2.3 引入对偶场</h3><p>引入对偶场$\phi(\mathbf{r})$，使得：
        </p><div class="formula-container">$$\nabla \times \mathbf{A} = 2\pi \rho_v$$</div><p>其中$\mathbf{A} = \nabla \phi$ 是"矢量势"，$\rho_v$是涡旋密度。
        </p>
      </div>

      <div class="subsection">
        <h3>2.4 Sine-Gordon哈密顿量</h3>
        <p>
          经过对偶变换，得到Sine-Gordon模型：
        </p><div class="formula-container">$$H_{SG} = \frac{1}{2} \int d^2r \left[ (\nabla \phi)^2 + m^2 \cos(\phi) \right]$$</div><p>其中$m^2 \propto e^{-\pi/g}$是"质量"参数。
        </p>
      </div>
    </section>

    <!-- Sine-Gordon模型的性质 -->
    <section class="content-section">
      <h2>3. Sine-Gordon模型的基本性质</h2>
      
      <div class="subsection">
        <h3>3.1 模型的结构</h3>
        <p>
          Sine-Gordon模型具有以下特征：
        </p><ul><li><strong>动能项：</strong>$(\nabla \phi)^2$描述场的梯度能</li><li><strong>势能项：</strong>$\cos(\phi)$提供周期性势</li><li><strong>拓扑性质：</strong>$\phi \rightarrow \phi + 2\pi$的不变性</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>3.2 经典基态</h3>
        <p>
          Sine-Gordon模型的经典基态对应于：
        </p><div class="formula-container">$$\phi_0 = 2\pi n, \quad n \in \mathbb{Z}$$</div><p>这些基态之间存在拓扑障壁，高度为$2m^2$。
        </p>
      </div>

      <div class="subsection">
        <h3>3.3 小振动近似</h3><p>在基态附近的小振动对应于质量为$m$的粒子：
        </p><div class="formula-container">$$\phi(\mathbf{r}) = 2\pi n + \eta(\mathbf{r})$$</div><p>其中$\eta(\mathbf{r})$满足Klein-Gordon方程：
        </p><div class="formula-container">$$(-\nabla^2 + m^2) \eta = 0$$</div>
      </div>
    </section>

    <!-- 孤子解 -->
    <section class="content-section">
      <h2>4. Sine-Gordon孤子</h2>
      
      <div class="subsection">
        <h3>4.1 一维孤子解</h3>
        <p> 在一维情况下，Sine-Gordon方程有精确的孤子解：</p> <div class="formula-container">$$\phi(x) = 4 \arctan\left( e^{m(x-x_0)} \right)$$</div><p>这个解描述了从一个基态$\phi = 0$ 到另一个基态 $\phi = 2\pi$的拓扑孤子。
        </p>
      </div>

      <div class="subsection">
        <h3>4.2 孤子的性质</h3>
        <div class="property-box">
          <h4>拓扑荷</h4><div class="formula-container">$$Q = \frac{1}{2\pi} \int_{-\infty}^{\infty} dx \, \frac{d\phi}{dx} = 1$$</div><h4>能量</h4> <div class="formula-container">$$E_{\text{soliton}} = 8m$$</div><h4>尺寸</h4> <div class="formula-container">$$\xi_{\text{soliton}} \sim \frac{1}{m}$$</div>
        </div>
      </div>

      <div class="subsection">
        <h3>4.3 反孤子解</h3>
        <p> 反孤子解为：</p> <div class="formula-container">$$\phi(x) = -4 \arctan\left( e^{m(x-x_0)} \right)$$</div><p>反孤子具有相反的拓扑荷$Q = -1$。
        </p>
      </div>
    </section>

    <!-- 孤子-反孤子相互作用 -->
    <section class="content-section">
      <h2>5. 孤子-反孤子相互作用</h2>
      
      <div class="subsection">
        <h3>5.1 相互作用势</h3>
        <p>
          孤子-反孤子对的相互作用势为：
        </p><div class="formula-container">$$V(r) = -16m^2 e^{-mr}$$</div>
        
        <p>
          这是一个短程吸引势，与涡旋的长程对数相互作用形成对比。
        </p>
      </div>

      <div class="subsection">
        <h3>5.2 束缚态</h3><p>在强耦合区域（小$m$），孤子-反孤子对可以形成束缚态，称为"breather"：
        </p><div class="formula-container">$$\phi(x,t) = 4 \arctan\left( \frac{\sqrt{1-\omega^2/m^2} \sin(\omega t)}{\omega \cosh(\sqrt{m^2-\omega^2} x)} \right)$$</div><p>其中$\omega < m$是振荡频率。
        </p>
      </div>

      <div class="subsection">
        <h3>5.3 散射过程</h3>
        <p>
          孤子-反孤子散射是完全弹性的，具有以下特征：
        </p>
        <ul>
          <li>动量和能量守恒</li>
          <li>拓扑荷守恒</li>
          <li>相移效应</li>
        </ul>
      </div>
    </section>

    <!-- 对偶关系的物理意义 -->
    <section class="content-section">
      <h2>6. 对偶关系的物理意义</h2>
      
      <div class="subsection">
        <h3>6.1 激发态的对应关系</h3>
        <div class="duality-table">
          <table>
            <thead>
              <tr>
                <th>XY模型</th>
                <th>Sine-Gordon模型</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>涡旋</td>
                <td>孤子</td>
              </tr>
              <tr>
                <td>反涡旋</td>
                <td>反孤子</td>
              </tr>
              <tr>
                <td>涡旋对</td>
                <td>breather</td>
              </tr>
              <tr>
                <td>自旋波</td>
                <td>Klein-Gordon粒子</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="subsection">
        <h3>6.2 相变的对偶描述</h3>
        <p>
          KT相变在两个模型中的表现：
        </p>
        <ul>
          <li><strong>XY模型：</strong>涡旋对的束缚-解离转变</li>
          <li><strong>Sine-Gordon模型：</strong>质量项的相关性-不相关性转变</li>
        </ul>
        
        <div class="highlight-box">
          <p>
            <strong>对偶性的威力：</strong>XY模型的强耦合相变对应于Sine-Gordon模型的弱耦合行为，
            使得原本困难的问题变得可以解析处理。
          </p>
        </div>
      </div>

      <div class="subsection">
        <h3>6.3 重整化群流</h3>
        <p>
          在重整化群框架下，两个模型的流方程是对偶的：
        </p><div class="formula-container">$$\frac{dg}{dl} = -2\pi y^2$$$$\frac{dy}{dl} = (2-\pi g) y$$</div><p>其中$g$ 是XY模型的耦合常数，$y \propto m$是Sine-Gordon模型的质量参数。
        </p>
      </div>
    </section>

    <!-- 应用和推广 -->
    <section class="content-section">
      <h2>7. 应用和推广</h2>
      
      <div class="subsection">
        <h3>7.1 量子Sine-Gordon模型</h3>
        <p>
          量子化的Sine-Gordon模型在多个领域有重要应用：
        </p>
        <ul>
          <li>一维量子多体系统</li>
          <li>量子场论中的精确解</li>
          <li>可积系统理论</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>7.2 推广到其他模型</h3>
        <p>
          对偶变换的思想可以推广到：
        </p>
        <ul>
          <li>O(N)非线性σ模型</li>
          <li>CP^{N-1}模型</li>
          <li>规范场理论</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>7.3 实验实现</h3>
        <p>
          Sine-Gordon模型可以在以下系统中实现：
        </p>
        <ul>
          <li>约瑟夫森结链</li>
          <li>一维冷原子系统</li>
          <li>光学系统中的非线性波</li>
        </ul>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>XY模型与Sine-Gordon模型之间存在精确的对偶关系</li>
          <li>对偶变换将涡旋激发映射为孤子激发</li>
          <li>Sine-Gordon模型具有丰富的孤子解和相互作用</li>
          <li>对偶性使得强耦合问题转化为弱耦合问题</li>
          <li>这种对偶关系在理论物理中具有深远的意义和广泛的应用</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么对偶变换能够将强耦合问题转化为弱耦合问题？</li>
          <li>孤子的拓扑稳定性与涡旋的拓扑稳定性有什么相似之处？</li>
          <li>如何理解breather态与涡旋对束缚态的对应关系？</li>
          <li>在什么条件下Sine-Gordon近似是有效的？</li>
          <li>设计一个实验来观测Sine-Gordon孤子的性质。</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_2_3',
  mounted() {
    // 渲染数学公式
    if (this.$renderMath) {
      this.$renderMath();
    }
  },
  updated() {
    // 内容更新后重新渲染数学公式
    if (this.$renderMath) {
      this.$renderMath();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
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
  background: rgba(255,255,255,0.2);
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9em;
}

.learning-objectives {
  background: #f8f9ff;
  border-left: 5px solid #667eea;
  padding: 25px;
  margin: 30px 0;
  border-radius: 0 10px 10px 0;
}

.learning-objectives h3 {
  color: #667eea;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.content-section {
  margin: 40px 0;
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #667eea;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.subsection {
  margin: 30px 0;
}

.subsection h3 {
  color: #34495e;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.highlight-box {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 25px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 5px solid #e17055;
}

.note-box {
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.property-box {
  background: #e8f4fd;
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.property-box h4 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.formula-container {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  overflow-x: auto;
}

.duality-table {
  margin: 20px 0;
  overflow-x: auto;
}

.duality-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.duality-table th {
  background: #667eea;
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: 600;
}

.duality-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.duality-table tr:nth-child(even) {
  background: #f8f9fa;
}

.summary-box {
  background: #d4edda;
  border: 2px solid #28a745;
  padding: 25px;
  border-radius: 10px;
  margin: 30px 0;
}

.exercise-box {
  background: #f8d7da;
  border: 2px solid #dc3545;
  padding: 25px;
  border-radius: 10px;
  margin: 30px 0;
}

.exercise-box ol {
  margin: 0;
  padding-left: 20px;
}

.exercise-box li {
  margin: 10px 0;
  font-weight: 500;
}

ul, ol {
  padding-left: 25px;
}

li {
  margin: 8px 0;
}

p {
  margin: 15px 0;
  text-align: justify;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}
</style>