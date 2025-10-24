<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.2.1 高温展开</h1>
      <p class="chapter-subtitle">XY模型的高温级数展开与涡旋激发</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：18分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>掌握XY模型的高温级数展开方法</li>
        <li>理解涡旋激发在高温展开中的作用</li>
        <li>学习Villain模型及其优势</li>
        <li>理解高温相中的涡旋气体图像</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：高温的混乱世界</h2>
      <div class="highlight-box">
        <p>
          在高温下，热涨落占主导地位，系统表现出无序的行为。但是，即使在这种看似混乱的状态中，
          我们仍然可以通过系统的级数展开来理解系统的统计性质。对于XY模型，
          高温展开不仅揭示了系统的热力学行为，更重要的是，它为我们理解涡旋激发提供了重要的理论工具。
        </p>
      </div>
    </section>

    <!-- 高温展开的基本思想 -->
    <section class="content-section">
      <h2>1. 高温展开的基本思想</h2>
      
      <div class="subsection">
        <h3>1.1 配分函数的展开</h3>
        <p>
          XY模型的配分函数为：
        </p>
        
        <div class="formula-container">
          $$Z = \int \prod_i d\theta_i \, \exp\left(\beta J \sum_{\langle i,j \rangle} \cos(\theta_i - \theta_j)\right)$$</div><p>其中$\beta = 1/(k_B T)$。在高温极限下，$\beta J \ll 1$，可以对指数函数进行展开：
        </p><div class="formula-container">$$e^{\beta J \cos(\theta_i - \theta_j)} = \sum_{n=0}^{\infty} \frac{(\beta J)^n}{n!} \cos^n(\theta_i - \theta_j)$$</div>
      </div>

      <div class="subsection">
        <h3>1.2 图形展开</h3>
        <p> 将每个键的贡献展开后，配分函数变成：</p> <div class="formula-container">$$Z = \int \prod_i d\theta_i \prod_{\langle i,j \rangle} \sum_{n_{ij}=0}^{\infty} \frac{(\beta J)^{n_{ij}}}{n_{ij}!} \cos^{n_{ij}}(\theta_i - \theta_j)$$</div><p>这可以用图形的方式表示，每条边对应一个键，边上的数字$n_{ij}$表示该键的展开阶数。
        </p>
      </div>

      <div class="subsection">
        <h3>1.3 角度积分的约束</h3>
        <p>关键观察：只有当每个格点的"度数"（连接到该点的边数之和）为偶数时，角度积分$\int_0^{2\pi} d\theta_i$才不为零。这个约束条件导致了涡旋激发的自然出现。
        </p>
        
        <div class="note-box"><p><strong>度数约束：</strong>对于格点$i$，必须满足$$\sum_{j} n_{ij} = \text{偶数}$$这个约束与涡旋的拓扑性质密切相关。
          </p>
        </div>
      </div>
    </section>

    <!-- Villain模型 -->
    <section class="content-section">
      <h2>2. Villain模型</h2>
      
      <div class="subsection">
        <h3>2.1 Villain近似</h3><p>为了简化计算，Villain提出了一个巧妙的近似。将$\cos(\theta_i - \theta_j)$替换为：
        </p><div class="formula-container">$$\cos(\theta_i - \theta_j) \rightarrow \sum_{n=-\infty}^{\infty} e^{-\frac{1}{2g}(\theta_i - \theta_j - 2\pi n)^2}$$</div><p>其中$g$是耦合常数。这个替换保持了原模型的周期性，但使得计算变得可行。
        </p>
      </div>

      <div class="subsection">
        <h3>2.2 Villain模型的哈密顿量</h3>
        <p>
          Villain模型的有效哈密顿量为：
        </p><div class="formula-container">$$H_V = \frac{1}{2g} \sum_{\langle i,j \rangle} \min_n (\theta_i - \theta_j - 2\pi n_{ij})^2$$</div><p>其中$n_{ij}$ 是整数，选择使得 $|\theta_i - \theta_j - 2\pi n_{ij}| \leq \pi$。
        </p>
      </div>

      <div class="subsection">
        <h3>2.3 对偶变换</h3><p>Villain模型的一个重要优势是可以进行对偶变换。引入整数变量$n_{ij}$，配分函数变为：
        </p><div class="formula-container">$$Z_V = \sum_{\{n_{ij}\}} \int \prod_i d\theta_i \, \exp\left(-\frac{1}{2g} \sum_{\langle i,j \rangle} (\theta_i - \theta_j - 2\pi n_{ij})^2\right)$$</div>
        
        <p>
          通过Fourier变换，可以将这个模型映射到一个对偶的库仑气体模型。
        </p>
      </div>
    </section>

    <!-- 涡旋激发的识别 -->
    <section class="content-section">
      <h2>3. 涡旋激发的识别</h2>
      
      <div class="subsection">
        <h3>3.1 涡旋的拓扑定义</h3><p>在Villain模型中，涡旋通过整数场$n_{ij}$的拓扑性质来定义。对于格子上的每个小方格（plaquette），
          定义涡旋数：
        </p><div class="formula-container">$$q_p = \frac{1}{2\pi} \sum_{\partial p} n_{ij}$$</div><p>其中求和沿着方格的边界进行。$q_p$必须是整数，对应于该方格内的涡旋数。
        </p>
      </div>

      <div class="subsection">
        <h3>3.2 涡旋的约束条件</h3>
        <p>
          涡旋数必须满足约束条件：
        </p><div class="formula-container">$$\sum_p q_p = 0$$</div>
        
        <p>
          这表明涡旋总是成对出现：涡旋和反涡旋的总数相等。
        </p>
      </div>

      <div class="subsection">
        <h3>3.3 涡旋气体的图像</h3>
        <div class="highlight-box">
          <p>
            <strong>涡旋气体模型：</strong>在高温相中，系统可以看作是由涡旋和反涡旋组成的气体。
            这些涡旋通过对数相互作用相互作用，形成一个二维库仑气体系统。
          </p>
        </div>
      </div>
    </section>

    <!-- 高温展开的结果 -->
    <section class="content-section">
      <h2>4. 高温展开的主要结果</h2>
      
      <div class="subsection">
        <h3>4.1 关联函数的行为</h3>
        <p> 在高温相中，自旋关联函数表现出指数衰减：</p> <div class="formula-container">$$\langle \mathbf{S}(\mathbf{r}) \cdot \mathbf{S}(\mathbf{0}) \rangle \sim e^{-r/\xi}$$</div><p>其中关联长度$\xi$随温度变化：
        </p><div class="formula-container">$$\xi \sim e^{c\sqrt{\beta J}}$$</div>
      </div>

      <div class="subsection">
        <h3>4.2 比热的奇异性</h3>
        <p> 高温展开预测比热在相变点附近的行为：</p> <div class="formula-container">$$C \sim -\ln|T - T_c|$$</div>
        
        <p>
          这种对数奇异性是KT相变的特征之一。
        </p>
      </div>

      <div class="subsection">
        <h3>4.3 涡旋密度</h3>
        <p> 在高温相中，涡旋密度随温度的变化为：</p> <div class="formula-container">$$n_v \sim e^{-\beta E_{\text{core}}}$$</div><p>其中$E_{\text{core}}$是涡旋核心能量。
        </p>
      </div>
    </section>

    <!-- 与低温相的比较 -->
    <section class="content-section">
      <h2>5. 高温相与低温相的对比</h2>
      
      <div class="comparison-table">
        <table>
          <thead>
            <tr><th>性质</th><th>低温相 ($T < T_c$)</th><th>高温相 ($T > T_c$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>涡旋状态</td>
              <td>束缚的涡旋-反涡旋对</td>
              <td>自由的涡旋气体</td>
            </tr>
            <tr><td>关联函数</td><td>幂律衰减$r^{-\eta}$</td><td>指数衰减$e^{-r/\xi}$</td>
            </tr>
            <tr>
              <td>关联长度</td>
              <td>无穷大</td>
              <td>有限</td>
            </tr>
            <tr>
              <td>涡旋密度</td>
              <td>低（束缚态）</td>
              <td>高（自由态）</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="content-section">
      <h2>6. 实验验证</h2>
      
      <div class="subsection">
        <h3>6.1 超流体薄膜实验</h3><p>在超流体$^4$He 薄膜中，通过测量超流密度的温度依赖性，可以验证高温展开的预测：
        </p><div class="formula-container">$$\rho_s(T) \propto e^{-c\sqrt{T}}$$</div>
      </div>

      <div class="subsection">
        <h3>6.2 超导薄膜实验</h3>
        <p> 在超导薄膜中，电阻率的温度依赖性也符合高温展开的预测：</p> <div class="formula-container">$$R(T) \propto e^{-c\sqrt{T}}$$</div>
      </div>

      <div class="subsection">
        <h3>6.3 数值模拟</h3>
        <p>
          蒙特卡罗模拟直接验证了高温展开的结果，特别是涡旋密度和关联函数的行为。
        </p>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>高温展开为理解XY模型的统计性质提供了系统的方法</li>
          <li>Villain模型简化了计算，同时保持了原模型的本质特征</li>
          <li>涡旋激发在高温展开中自然出现，体现了拓扑激发的重要性</li>
          <li>高温相可以理解为涡旋气体，与低温相的束缚态形成对比</li>
          <li>实验和数值模拟验证了高温展开的理论预测</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol>
          <li>为什么高温展开中需要度数约束？这与涡旋有什么关系？</li>
          <li>Villain模型相比原始XY模型有什么优势和局限性？</li>
          <li>如何从高温展开的结果理解KT相变的无序性？</li>
          <li>涡旋气体模型如何解释高温相的物理性质？</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_2_1',
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

.formula-container {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  overflow-x: auto;
}

.comparison-table {
  margin: 20px 0;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.comparison-table th {
  background: #667eea;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.comparison-table tr:nth-child(even) {
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