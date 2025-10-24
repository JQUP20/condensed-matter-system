<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.4.4 能隙方程</h1>
    
    <!-- 概述 -->
    <section class="section">
      <h2>概述</h2>
      <p>
        能隙方程是BCS理论的核心方程之一，它描述了超导能隙Δ的自洽性条件。
        通过求解能隙方程，我们可以确定超导态的基本性质，包括临界温度、
        能隙的温度依赖性以及各种热力学量。
      </p>
    </section>

    <!-- BCS能隙方程的推导 -->
    <section class="section">
      <h2>BCS能隙方程的推导</h2>
      
      <h3>1. 自洽性条件</h3>
      <p>在平均场近似下，能隙参数Δ定义为：</p>
      <div class="formula-box">
        <p>Δ = -V ∑<sub>k</sub> ⟨c<sub>k↓</sub>c<sub>-k↑</sub>⟩</p>
      </div>
      
      <p>其中V是配对相互作用强度，求和遍历所有动量态。</p>
      
      <h3>2. 基态期望值计算</h3>
      <p>在BCS基态下，配对算符的期望值为：</p>
      <div class="formula-box">
        <p>⟨c<sub>k↓</sub>c<sub>-k↑</sub>⟩ = u<sub>k</sub>v<sub>k</sub></p>
      </div>
      
      <p>其中u<sub>k</sub>和v<sub>k</sub>是Bogoliubov系数：</p>
      <div class="formula-box">
        <p>u<sub>k</sub>² = ½(1 + ξ<sub>k</sub>/E<sub>k</sub>)</p>
        <p>v<sub>k</sub>² = ½(1 - ξ<sub>k</sub>/E<sub>k</sub>)</p>
      </div>
      
      <h3>3. 准粒子能谱</h3>
      <p>准粒子激发能为：</p>
      <div class="formula-box">
        <p>E<sub>k</sub> = √(ξ<sub>k</sub>² + Δ²)</p>
      </div>
      
      <p>其中ξ<sub>k</sub> = ε<sub>k</sub> - μ是相对于化学势的单粒子能量。</p>
    </section>

    <!-- 零温能隙方程 -->
    <section class="section">
      <h2>零温能隙方程</h2>
      
      <h3>1. 基本形式</h3>
      <p>将上述结果代入自洽性条件，得到零温能隙方程：</p>
      <div class="formula-box">
        <p>1 = V ∑<sub>k</sub> 1/(2E<sub>k</sub>)</p>
      </div>
      
      <h3>2. 连续化近似</h3>
      <p>将求和转换为积分，引入态密度N(0)：</p>
      <div class="formula-box">
        <p>1 = VN(0) ∫<sub>-ℏω<sub>D</sub></sub><sup>ℏω<sub>D</sub></sup> dξ/(2√(ξ² + Δ²))</p>
      </div>
      
      <p>其中ω<sub>D</sub>是德拜频率，积分范围限制在德拜能量内。</p>
      
      <h3>3. 弱耦合极限解</h3>
      <p>当VN(0) ≪ 1时，可以解析求解：</p>
      <div class="formula-box">
        <p>Δ(0) = 2ℏω<sub>D</sub> exp(-1/VN(0))</p>
      </div>
      
      <p>这给出了零温能隙与配对强度的指数关系。</p>
    </section>

    <!-- 有限温度能隙方程 -->
    <section class="section">
      <h2>有限温度能隙方程</h2>
      
      <h3>1. 温度修正</h3>
      <p>在有限温度下，需要考虑准粒子的热激发：</p>
      <div class="formula-box">
        <p>1 = VN(0) ∫<sub>-ℏω<sub>D</sub></sub><sup>ℏω<sub>D</sub></sup> dξ/(2E<sub>k</sub>) tanh(E<sub>k</sub>/2k<sub>B</sub>T)</p>
      </div>
      
      <h3>2. 临界温度</h3>
      <p>当Δ → 0时，得到临界温度T<sub>c</sub>：</p>
      <div class="formula-box">
        <p>k<sub>B</sub>T<sub>c</sub> = 1.14ℏω<sub>D</sub> exp(-1/VN(0))</p>
      </div>
      
      <h3>3. 能隙比值</h3>
      <p>零温能隙与临界温度的比值：</p>
      <div class="formula-box">
        <p>2Δ(0)/k<sub>B</sub>T<sub>c</sub> = 3.52</p>
      </div>
      
      <p>这是BCS理论的一个重要预言，已被实验广泛验证。</p>
    </section>

    <!-- 能隙的温度依赖性 -->
    <section class="section">
      <h2>能隙的温度依赖性</h2>
      
      <div class="info-box">
        <h3>温度演化特征</h3>
        <ul>
          <li><strong>低温行为：</strong>Δ(T) ≈ Δ(0)[1 - 2exp(-Δ(0)/k<sub>B</sub>T)]</li>
          <li><strong>临界温度附近：</strong>Δ(T) ≈ 1.74Δ(0)√(1 - T/T<sub>c</sub>)</li>
          <li><strong>相变性质：</strong>在T<sub>c</sub>处能隙连续趋于零</li>
        </ul>
      </div>
      
      <h3>数值解方法</h3>
      <p>完整的温度依赖性需要数值求解能隙方程：</p>
      <div class="formula-box">
        <p>ln(T<sub>c</sub>/T) = ∫<sub>0</sub><sup>ℏω<sub>D</sub>/Δ</sup> dx/√(x² - 1) [tanh(√(x² - 1)Δ/2k<sub>B</sub>T) - tanh(xΔ/2k<sub>B</sub>T)]</p>
      </div>
    </section>

    <!-- 强耦合修正 -->
    <section class="section">
      <h2>强耦合修正</h2>
      
      <h3>1. Eliashberg理论</h3>
      <p>对于强耦合超导体，需要考虑：</p>
      <ul>
        <li>声子谱函数α²F(ω)的详细结构</li>
        <li>库仑排斥相互作用μ*</li>
        <li>频率依赖的能隙函数Δ(ω)</li>
      </ul>
      
      <h3>2. McMillan公式</h3>
      <p>强耦合情况下的临界温度近似：</p>
      <div class="formula-box">
        <p>T<sub>c</sub> = (ω<sub>log</sub>/1.2) exp[−1.04(1 + λ)/(λ − μ*(1 + 0.62λ))]</p>
      </div>
      
      <p>其中λ是电子-声子耦合常数，μ*是库仑赝势。</p>
    </section>

    <!-- 实验验证 -->
    <section class="section">
      <h2>实验验证</h2>
      
      <div class="data-table">
        <h3>典型超导体的能隙参数</h3>
        <table>
          <thead>
            <tr>
              <th>材料</th>
              <th>T<sub>c</sub> (K)</th>
              <th>2Δ(0)/k<sub>B</sub>T<sub>c</sub></th>
              <th>类型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Al</td>
              <td>1.18</td>
              <td>3.4</td>
              <td>弱耦合</td>
            </tr>
            <tr>
              <td>Sn</td>
              <td>3.72</td>
              <td>3.5</td>
              <td>弱耦合</td>
            </tr>
            <tr>
              <td>Pb</td>
              <td>7.20</td>
              <td>4.3</td>
              <td>强耦合</td>
            </tr>
            <tr>
              <td>Nb</td>
              <td>9.25</td>
              <td>3.8</td>
              <td>中等耦合</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h3>实验测量方法</h3>
      <ul>
        <li><strong>隧道谱学：</strong>直接测量准粒子态密度</li>
        <li><strong>比热测量：</strong>通过激活行为确定能隙</li>
        <li><strong>NMR弛豫：</strong>测量自旋激发能隙</li>
        <li><strong>光谱学：</strong>角分辨光电子谱(ARPES)</li>
      </ul>
    </section>

    <!-- 物理意义 -->
    <section class="section">
      <h2>物理意义与应用</h2>
      
      <div class="concept-box">
        <h3>能隙方程的深层含义</h3>
        <ul>
          <li><strong>自洽性：</strong>能隙的存在依赖于配对，配对强度又依赖于能隙</li>
          <li><strong>相变机制：</strong>描述了超导相变的微观机制</li>
          <li><strong>普适性：</strong>适用于所有常规超导体</li>
          <li><strong>预言能力：</strong>可预测材料的超导性质</li>
        </ul>
      </div>
      
      <h3>技术应用</h3>
      <ul>
        <li><strong>材料设计：</strong>指导新超导材料的开发</li>
        <li><strong>器件优化：</strong>优化超导电子器件性能</li>
        <li><strong>温度控制：</strong>确定工作温度范围</li>
        <li><strong>能效评估：</strong>评估超导应用的能效</li>
      </ul>
    </section>

    <!-- 数学补充 -->
    <section class="section">
      <h2>数学补充</h2>
      
      <h3>1. 积分变换技巧</h3>
      <p>能隙方程的求解常用到以下积分：</p>
      <div class="formula-box">
        <p>∫<sub>0</sub><sup>∞</sup> dx/√(x² + a²) = ln(x + √(x² + a²))|<sub>0</sub><sup>∞</sup></p>
      </div>
      
      <h3>2. 渐近展开</h3>
      <p>在不同温度区域的渐近行为：</p>
      <ul>
        <li><strong>T ≪ T<sub>c</sub>：</strong>指数激活行为</li>
        <li><strong>T → T<sub>c</sub>：</strong>平方根奇点</li>
        <li><strong>T > T<sub>c</sub>：</strong>正常态，Δ = 0</li>
      </ul>
    </section>

    <!-- 总结 -->
    <section class="section">
      <h2>总结</h2>
      <p>
        能隙方程是BCS理论的核心，它不仅确定了超导能隙的大小和温度依赖性，
        还揭示了超导相变的本质。通过求解能隙方程，我们可以理解超导体的
        基本性质，预测新材料的超导行为，并为超导技术的应用提供理论基础。
        能隙方程的成功验证也证明了BCS理论的正确性和普适性。
      </p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_4_4',
  mounted() {
    // 使用 MathJax 渲染数学公式
    if (window.MathJax) {
      window.MathJax.typesetPromise();
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

.chapter-title {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.5em;
  text-align: center;
}

.section {
  margin-bottom: 30px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.section h2 {
  color: #2980b9;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 1.8em;
}

.section h3 {
  color: #34495e;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.formula-box p {
  margin: 10px 0;
  font-size: 1.2em;
  font-weight: bold;
}

.info-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 5px solid #3498db;
}

.info-box h3 {
  color: #2c3e50;
  margin-top: 0;
}

.concept-box {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
  border-left: 5px solid #e74c3c;
}

.concept-box h3 {
  color: #c0392b;
  margin-top: 0;
}

.data-table {
  margin: 20px 0;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.data-table th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: bold;
}

.data-table td {
  padding: 12px 15px;
  border-bottom: 1px solid #eee;
}

.data-table tr:hover {
  background-color: #f5f5f5;
}

ul, ol {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .section {
    padding: 20px;
  }
  
  .section h2 {
    font-size: 1.5em;
  }
  
  .formula-box {
    padding: 15px;
  }
  
  .data-table {
    overflow-x: auto;
  }
}
</style>