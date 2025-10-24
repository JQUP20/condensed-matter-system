<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.2.1 变分原理</h1>
      <p class="chapter-subtitle">变分方法的基本原理</p>
    </div>

    <div class="content-section">
      <h2>变分原理基础</h2>
      <p>
        变分原理是量子力学中的一个基本原理，它指出任何试探波函数的能量期望值
        都不会低于系统的基态能量。这为我们寻找基态提供了一个系统性的方法。
      </p>

      <div class="formula-container">
        <p>变分原理的数学表述：</p>
        <div class="math-display">
          $$E_0 \leq \frac{\langle \psi_{\text{trial}} | H | \psi_{\text{trial}} \rangle}{\langle \psi_{\text{trial}} | \psi_{\text{trial}} \rangle} = E[\psi_{\text{trial}}]$$
        </div>
        <p>其中 $E_0$ 是真实的基态能量，$\psi_{\text{trial}}$ 是试探波函数。</p>
      </div>

      <h2>参数化试探波函数</h2>
      <p>
        在实际应用中，我们通常使用参数化的试探波函数 $\psi(\mathbf{r}; \boldsymbol{\theta})$，
        其中 $\boldsymbol{\theta}$ 是可调参数。变分问题转化为优化问题：
      </p>

      <div class="formula-container">
        <div class="math-display">
          $$\boldsymbol{\theta}^* = \arg\min_{\boldsymbol{\theta}} E[\boldsymbol{\theta}] = \arg\min_{\boldsymbol{\theta}} \frac{\langle \psi(\boldsymbol{\theta}) | H | \psi(\boldsymbol{\theta}) \rangle}{\langle \psi(\boldsymbol{\theta}) | \psi(\boldsymbol{\theta}) \rangle}$$
        </div>
      </div>

      <h2>变分蒙特卡罗方法</h2>
      <div class="vmc-process">
        <h3>基本思想</h3>
        <p>
          变分蒙特卡罗（VMC）方法结合了变分原理和蒙特卡罗采样，
          用于计算复杂量子多体系统的基态性质。
        </p>

        <div class="process-steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h4>选择试探波函数</h4>
              <p>选择合适的参数化波函数形式，如神经网络</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h4>蒙特卡罗采样</h4>
              <p>根据 $|\psi(\mathbf{r}; \boldsymbol{\theta})|^2$ 采样配置</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h4>计算局域能量</h4>
              <p>计算每个配置的局域能量 $E_{\text{loc}}(\mathbf{r})$</p>
            </div>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h4>参数优化</h4>
              <p>使用梯度下降等方法优化参数</p>
            </div>
          </div>
        </div>
      </div>

      <h2>局域能量</h2>
      <p>
        局域能量是VMC方法的核心概念，定义为：
      </p>

      <div class="formula-container">
        <div class="math-display">
          $$E_{\text{loc}}(\mathbf{r}) = \frac{H\psi(\mathbf{r}; \boldsymbol{\theta})}{\psi(\mathbf{r}; \boldsymbol{\theta})}$$
        </div>
        <p>能量期望值可以表示为：</p>
        <div class="math-display">
          $$E[\boldsymbol{\theta}] = \int |\psi(\mathbf{r}; \boldsymbol{\theta})|^2 E_{\text{loc}}(\mathbf{r}) d\mathbf{r}$$
        </div>
      </div>

      <h2>神经网络变分态</h2>
      <div class="neural-variational">
        <h3>优势</h3>
        <div class="advantages">
          <div class="advantage">
            <h4>表达能力强</h4>
            <p>神经网络可以表示复杂的多体关联</p>
          </div>
          <div class="advantage">
            <h4>自动微分</h4>
            <p>现代深度学习框架提供高效的梯度计算</p>
          </div>
          <div class="advantage">
            <h4>可扩展性</h4>
            <p>可以处理大规模量子多体系统</p>
          </div>
        </div>

        <h3>挑战</h3>
        <div class="challenges">
          <div class="challenge">
            <h4>符号问题</h4>
            <p>费米子系统中的符号问题仍然存在</p>
          </div>
          <div class="challenge">
            <h4>方差控制</h4>
            <p>需要控制蒙特卡罗估计的方差</p>
          </div>
          <div class="challenge">
            <h4>局部最优</h4>
            <p>优化过程可能陷入局部最优解</p>
          </div>
        </div>
      </div>

      <h2>实际应用示例</h2>
      <div class="application-example">
        <h3>氢分子的变分计算</h3>
        <p>考虑最简单的分子系统 H₂，使用简单的试探波函数：</p>
        <div class="math-display">
          $$\psi(r_1, r_2) = e^{-\alpha(r_{1A} + r_{1B} + r_{2A} + r_{2B})} \cdot e^{\beta r_{12}}$$
        </div>
        <p>其中 $\alpha$ 和 $\beta$ 是变分参数，通过最小化能量来确定。</p>

        <div class="results-table">
          <table>
            <thead>
              <tr>
                <th>方法</th>
                <th>能量 (Hartree)</th>
                <th>相对误差</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>精确解</td>
                <td>-1.1744</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>简单变分</td>
                <td>-1.1388</td>
                <td>3.0%</td>
              </tr>
              <tr>
                <td>神经网络VMC</td>
                <td>-1.1735</td>
                <td>0.08%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h2>优化算法</h2>
      <div class="optimization-methods">
        <div class="method">
          <h3>随机梯度下降 (SGD)</h3>
          <div class="math-display">
            $$\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \eta \nabla_{\boldsymbol{\theta}} E[\boldsymbol{\theta}_t]$$
          </div>
        </div>

        <div class="method">
          <h3>Adam优化器</h3>
          <p>结合动量和自适应学习率的优化算法，在神经网络训练中表现优异。</p>
        </div>

        <div class="method">
          <h3>自然梯度</h3>
          <p>考虑参数空间的几何结构，使用Fisher信息矩阵进行预条件。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_2_1',
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
  border-bottom: 3px solid #9C27B0;
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
  border-left: 4px solid #9C27B0;
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
  border-left: 4px solid #9C27B0;
}

.math-display {
  text-align: center;
  margin: 15px 0;
  font-size: 1.1em;
}

.vmc-process {
  background: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.process-steps {
  margin-top: 20px;
}

.step {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.step-number {
  background: #9C27B0;
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

.step-content h4 {
  color: #2c3e50;
  margin-bottom: 5px;
  font-size: 1.1em;
}

.step-content p {
  color: #555;
  margin: 0;
  font-size: 0.95em;
}

.neural-variational {
  margin: 20px 0;
}

.advantages, .challenges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.advantage, .challenge {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.advantage {
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
}

.challenge {
  background: linear-gradient(135deg, #f44336, #d32f2f);
  color: white;
}

.advantage h4, .challenge h4 {
  color: white;
  margin-bottom: 8px;
  font-size: 1.1em;
}

.advantage p, .challenge p {
  font-size: 0.9em;
  margin: 0;
}

.application-example {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border: 1px solid #4CAF50;
}

.application-example h3 {
  color: #2e7d32;
  margin-bottom: 15px;
}

.results-table {
  margin: 20px 0;
  overflow-x: auto;
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
  background: #4CAF50;
  color: white;
  font-weight: 600;
}

.results-table tr:hover {
  background: #f5f5f5;
}

.optimization-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.method {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}

.method h3 {
  color: #e65100;
  margin-bottom: 10px;
}

.method p {
  color: #555;
  font-size: 0.95em;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .advantages, .challenges {
    grid-template-columns: 1fr;
  }
  
  .optimization-methods {
    grid-template-columns: 1fr;
  }
  
  .step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-number {
    margin-right: 0;
    margin-bottom: 10px;
  }
}
</style>