<template>
  <div class="chapter-content">
    <!-- 章节标题 -->
    <div class="chapter-header">
      <h1 class="chapter-title">7.2.4 Sine-Gordon模型的重整化群结果</h1>
      <p class="chapter-subtitle">精确解与标度行为的深入分析</p>
      <div class="reading-time">
        <i class="fas fa-clock"></i>
        <span>阅读时间：25分钟</span>
      </div>
    </div>

    <!-- 学习目标 -->
    <div class="learning-objectives">
      <h3><i class="fas fa-bullseye"></i> 学习目标</h3>
      <ul>
        <li>掌握Sine-Gordon模型的重整化群分析</li>
        <li>理解β函数和临界指数的计算</li>
        <li>学习精确解的重整化群意义</li>
        <li>理解标度不变性和共形不变性</li>
      </ul>
    </div>

    <!-- 引言 -->
    <section class="content-section">
      <h2>引言：精确解的威力</h2>
      <div class="highlight-box">
        <p>
          Sine-Gordon模型是少数几个在二维时空中具有精确解的非平凡量子场论模型之一。
          这使得我们能够精确地验证重整化群理论的预言，并深入理解临界现象的本质。
          更重要的是，通过对偶性，这些结果直接适用于XY模型的KT相变，
          为我们提供了关于拓扑相变的精确理论描述。
        </p>
      </div>
    </section>

    <!-- 重整化群基础 -->
    <section class="content-section">
      <h2>1. 重整化群基础回顾</h2>
      
      <div class="subsection">
        <h3>1.1 标度变换</h3>
        <p>
          考虑标度变换 $x \rightarrow x' = x/b$，其中 $b > 1$：
        </p><div class="formula-container">$$\phi(x) \rightarrow \phi'(x') = Z_\phi^{1/2} \phi(bx')$$</div>
        
        <p> 相应地，哈密顿量变为：</p> <div class="formula-container">$$H[\phi'] = b^2 Z_\phi \int d^2x' \left[ \frac{1}{2}(\nabla' \phi')^2 + \frac{Z_m m^2}{2Z_\phi} \cos(\sqrt{Z_\phi} \phi') \right]$$</div>
      </div>

      <div class="subsection">
        <h3>1.2 重整化条件</h3>
        <p>
          为了保持理论的形式不变，需要：
        </p><ul><li>动能项系数保持为1：$b^2 Z_\phi = 1$</li>
          <li>势能项保持原形式</li>
        </ul>
        
        <p>
          这给出重整化因子：
        </p><div class="formula-container">$$Z_\phi = b^{-2}$$</div>
      </div>

      <div class="subsection">
        <h3>1.3 β函数的定义</h3><p>定义无量纲耦合常数$g = m^2 a^2$，其中 $a$是短程截断。β函数为：
        </p><div class="formula-container">$$\beta(g) = \frac{dg}{d\ln b} = \lim_{b \rightarrow 1} \frac{g' - g}{\ln b}$$</div>
      </div>
    </section>

    <!-- 微扰重整化群分析 -->
    <section class="content-section">
      <h2>2. 微扰重整化群分析</h2>
      
      <div class="subsection">
        <h3>2.1 弱耦合展开</h3><p>在弱耦合极限$g \ll 1$下，可以展开余弦势：
        </p><div class="formula-container">$$\cos(\phi) = 1 - \frac{\phi^2}{2} + \frac{\phi^4}{24} - \cdots$$</div><p>这给出有效的$\phi^4$理论：
        </p><div class="formula-container">$$H_{\text{eff}} = \int d^2x \left[ \frac{1}{2}(\nabla \phi)^2 + \frac{m^2}{2}\phi^2 - \frac{m^2}{24}\phi^4 + \cdots \right]$$</div>
      </div>

      <div class="subsection">
        <h3>2.2 一圈修正</h3><p>计算$\phi^4$相互作用的一圈图贡献：
        </p><div class="formula-container">$$\delta m^2 = -\frac{m^4}{24} \int \frac{d^2k}{(2\pi)^2} \frac{1}{k^2 + m^2}$$</div>
        
        <p> 在二维中，这个积分是对数发散的：</p> <div class="formula-container">$$\delta m^2 = -\frac{m^2}{12\pi} \ln\left(\frac{\Lambda}{m}\right)$$</div><p>其中$\Lambda$是紫外截断。
        </p>
      </div>

      <div class="subsection">
        <h3>2.3 β函数的计算</h3>
        <p>
          重整化质量的流方程为：
        </p><div class="formula-container">$$\frac{dm^2}{d\ln\Lambda} = \frac{m^2}{12\pi}$$</div>
        
        <p> 转换为无量纲耦合常数：</p> <div class="formula-container">$$\beta(g) = \frac{dg}{d\ln b} = \frac{g}{6\pi} + O(g^2)$$</div>
      </div>
    </section>

    <!-- 精确β函数 -->
    <section class="content-section">
      <h2>3. 精确β函数</h2>
      
      <div class="subsection">
        <h3>3.1 Zamolodchikov的结果</h3>
        <p> 利用可积性和S矩阵理论，Zamolodchikov得到了精确的β函数：</p> <div class="formula-container">$$\beta(g) = \frac{g}{2\pi} \frac{\sin(\pi g/(8\pi))}{\cos(\pi g/(8\pi))}$$</div>
        
        <p>
          这个结果在所有耦合强度下都成立！
        </p>
      </div>

      <div class="subsection">
        <h3>3.2 弱耦合极限</h3><p>在$g \ll 1$时展开：
        </p><div class="formula-container">$$\beta(g) = \frac{g}{2\pi} \cdot \frac{\pi g/(8\pi)}{1} = \frac{g^2}{16\pi^2} + O(g^3)$$</div><p>注意这与微扰计算的结果$\beta(g) = g/(6\pi)$不同，这是因为重整化方案的差异。
        </p>
      </div>

      <div class="subsection">
        <h3>3.3 强耦合极限</h3><p>当$g \rightarrow 8\pi$时：
        </p><div class="formula-container">$$\beta(g) \rightarrow +\infty$$</div><p>这表明$g = 8\pi$是一个特殊点，对应于理论的紫外不动点。
        </p>
      </div>
    </section>

    <!-- 不动点分析 -->
    <section class="content-section">
      <h2>4. 不动点分析</h2>
      
      <div class="subsection">
        <h3>4.1 不动点的分类</h3>
        <div class="fixed-point-analysis">
          <h4>红外不动点 (g = 0)</h4>
          <ul><li>对应自由场理论</li><li>线性化β函数：$\beta'(0) = 1/(6\pi) > 0$</li>
            <li>不稳定不动点（紫外吸引）</li>
          </ul>
          
          <h4>紫外不动点 (g = 8π)</h4>
          <ul><li>对应强耦合共形场论</li><li>中心荷$c = 1$</li>
            <li>稳定不动点（红外吸引）</li>
          </ul>
        </div>
      </div>

      <div class="subsection">
        <h3>4.2 重整化群流</h3>
        <p>
          重整化群流的图像：
        </p>
        
        <div class="rg-flow-diagram">
          <div class="flow-description">
            <p><strong>g < 8π：</strong> 流向强耦合不动点</p>
            <p><strong>g > 8π：</strong> 理论变得不稳定</p>
            <p><strong>g = 8π：</strong> 临界点，共形不变</p>
          </div>
        </div>
      </div>

      <div class="subsection">
        <h3>4.3 物理解释</h3>
        <p>
          通过对偶性，这些结果对应于XY模型中：
        </p>
        <ul>
          <li><strong>g = 0：</strong>高温无序相</li>
          <li><strong>g = 8π：</strong>KT相变点</li>
          <li><strong>g > 8π：</strong>低温有序相</li>
        </ul>
      </div>
    </section>

    <!-- 临界指数 -->
    <section class="content-section">
      <h2>5. 临界指数的计算</h2>
      
      <div class="subsection">
        <h3>5.1 关联长度指数</h3>
        <p>
          在临界点附近，关联长度的行为为：
        </p><div class="formula-container">$$\xi \sim |T - T_c|^{-\nu}$$</div>
        
        <p> 对于KT相变，精确结果是：</p> <div class="formula-container">$$\nu = \frac{1}{2}$$</div>
      </div>

      <div class="subsection">
        <h3>5.2 比热指数</h3>
        <p> 比热的奇异性为：</p> <div class="formula-container">$$C \sim \ln|T - T_c|$$</div><p>这对应于$\alpha = 0$（对数奇异性）。
        </p>
      </div>

      <div class="subsection">
        <h3>5.3 磁化率指数</h3>
        <p>
          磁化率的行为为：
        </p><div class="formula-container">$$\chi \sim |T - T_c|^{-\gamma}$$</div><p>其中$\gamma = 1$。
        </p>
      </div>

      <div class="subsection">
        <h3>5.4 标度关系</h3>
        <p>
          这些指数满足标度关系：
        </p><div class="formula-container">$$\alpha + 2\beta + \gamma = 2$$$$\gamma = \nu(2 - \eta)$$</div><p>其中$\eta = 1/4$是异常维度。
        </p>
      </div>
    </section>

    <!-- 共形场论描述 -->
    <section class="content-section">
      <h2>6. 共形场论描述</h2>
      
      <div class="subsection">
        <h3>6.1 临界点的共形不变性</h3><p>在KT相变点，系统具有共形不变性，对应于中心荷$c = 1$的共形场论。
        </p><div class="formula-container">$$c = 1 - \frac{6(p-q)^2}{pq}$$</div><p>其中对于自由玻色子，$p = q = 1$。
        </p>
      </div>

      <div class="subsection">
        <h3>6.2 算符的标度维度</h3>
        <p>
          主要算符的标度维度：
        </p>
        
        <div class="operator-dimensions">
          <table>
            <thead>
              <tr>
                <th>算符</th>
                <th>标度维度</th>
                <th>物理意义</th>
              </tr>
            </thead>
            <tbody><tr><td>$\cos(\phi)$</td><td>$1/8$</td>
                <td>质量算符</td>
              </tr><tr><td>$\sin(\phi)$</td><td>$1/8$</td>
                <td>对偶质量算符</td>
              </tr><tr><td>$\partial_\mu \phi$</td><td>$1$</td>
                <td>流算符</td>
              </tr><tr><td>$(\partial_\mu \phi)^2$</td><td>$2$</td>
                <td>能量密度</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="subsection">
        <h3>6.3 关联函数的标度行为</h3>
        <p>
          在临界点，关联函数具有幂律衰减：
        </p><div class="formula-container">$$\langle \cos(\phi(r)) \cos(\phi(0)) \rangle \sim r^{-1/4}$$</div>
        
        <p>
          这与实验观测完全一致。
        </p>
      </div>
    </section>

    <!-- 有限尺寸效应 -->
    <section class="content-section">
      <h2>7. 有限尺寸效应</h2>
      
      <div class="subsection">
        <h3>7.1 有限尺寸标度</h3>
        <p> 在有限系统中，能级间隙的行为为：</p> <div class="formula-container">$$\Delta E \sim \frac{v}{L}$$</div><p>其中$v$ 是"声速"，$L$是系统尺寸。
        </p>
      </div>

      <div class="subsection">
        <h3>7.2 边界条件的影响</h3>
        <p>
          不同边界条件导致不同的有限尺寸行为：
        </p>
        <ul>
          <li><strong>周期边界条件：</strong>动量量子化</li>
          <li><strong>开放边界条件：</strong>边界效应</li>
          <li><strong>扭曲边界条件：</strong>拓扑效应</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>7.3 数值验证</h3>
        <p>
          有限尺寸标度为数值模拟提供了重要的理论指导，
          使得我们能够从有限系统的结果外推到热力学极限。
        </p>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="content-section">
      <h2>8. 实验验证</h2>
      
      <div class="subsection">
        <h3>8.1 超流薄膜</h3><p>在超流$^4$He 薄膜中观测到的KT相变完全符合理论预言：
        </p><ul><li>关联长度指数$\nu = 0.5$</li>
          <li>比热的对数奇异性</li>
          <li>涡旋对的束缚-解离转变</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>8.2 约瑟夫森结阵列</h3>
        <p>
          约瑟夫森结阵列提供了XY模型的直接实现：
        </p>
        <ul>
          <li>可调的耦合强度</li>
          <li>直接观测涡旋激发</li>
          <li>精确的临界指数测量</li>
        </ul>
      </div>

      <div class="subsection">
        <h3>8.3 冷原子系统</h3>
        <p>
          超冷原子气体为研究KT相变提供了新的平台：
        </p>
        <ul>
          <li>高度可控的参数</li>
          <li>实时动力学观测</li>
          <li>量子涨落的直接测量</li>
        </ul>
      </div>
    </section>

    <!-- 小结 -->
    <section class="content-section">
      <h2>本节小结</h2>
      <div class="summary-box">
        <ul>
          <li>Sine-Gordon模型具有精确的重整化群解</li>
          <li>β函数在所有耦合强度下都已知</li>
          <li>KT相变对应于共形不变的临界点</li>
          <li>临界指数具有普适的精确值</li>
          <li>理论预言与实验观测完美符合</li>
          <li>这为理解拓扑相变提供了完整的理论框架</li>
        </ul>
      </div>
    </section>

    <!-- 思考题 -->
    <section class="content-section">
      <h2>思考与练习</h2>
      <div class="exercise-box">
        <ol><li>为什么Sine-Gordon模型能够给出精确的重整化群结果？</li><li>解释KT相变中关联长度指数$\nu = 1/2$的物理意义。</li>
          <li>比较KT相变与传统二级相变的临界指数差异。</li>
          <li>如何通过有限尺寸标度从数值模拟中提取临界指数？</li>
          <li>设计实验验证共形场论预言的关联函数行为。</li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter7_2_4',
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

.formula-container {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  text-align: center;
  overflow-x: auto;
}

.fixed-point-analysis {
  background: #e8f4fd;
  border: 2px solid #3498db;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.fixed-point-analysis h4 {
  color: #2980b9;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.rg-flow-diagram {
  background: #fff3cd;
  border: 2px solid #ffc107;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.flow-description p {
  margin: 8px 0;
  font-weight: 500;
}

.operator-dimensions {
  margin: 20px 0;
  overflow-x: auto;
}

.operator-dimensions table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.operator-dimensions th {
  background: #667eea;
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: 600;
}

.operator-dimensions td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.operator-dimensions tr:nth-child(even) {
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