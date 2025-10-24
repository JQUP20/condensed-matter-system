<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>18.2.2 梯度优化</h1>
      <p class="chapter-subtitle">神经网络参数的优化</p>
    </div>

    <div class="content-section">
      <h2>梯度计算基础</h2>
      <p>
        在神经网络变分蒙特卡罗中，我们需要计算能量期望值对网络参数的梯度。
        这是一个挑战性的问题，因为涉及到概率分布的参数化和期望值的计算。
      </p>

      <div class="formula-container">
        <p>能量梯度的一般形式：</p>
        <div class="math-display">
          $$\frac{\partial E[\boldsymbol{\theta}]}{\partial \theta_i} = 2\text{Re}\left[\langle \frac{\partial \ln \psi}{\partial \theta_i} \rangle \langle E_{\text{loc}} \rangle - \left\langle \frac{\partial \ln \psi}{\partial \theta_i} E_{\text{loc}} \right\rangle\right]$$
        </div>
        <p>其中 $E_{\text{loc}}$ 是局域能量，$\psi$ 是神经网络波函数。</p>
      </div>

      <h2>自动微分</h2>
      <div class="autodiff-section">
        <h3>前向模式 vs 反向模式</h3>
        <div class="comparison-grid">
          <div class="mode-card">
            <h4>前向模式</h4>
            <p>适用于参数少、输出多的情况</p>
            <ul>
              <li>计算复杂度：O(n×m)</li>
              <li>内存需求：较低</li>
              <li>并行性：好</li>
            </ul>
          </div>
          <div class="mode-card">
            <h4>反向模式</h4>
            <p>适用于参数多、输出少的情况</p>
            <ul>
              <li>计算复杂度：O(n+m)</li>
              <li>内存需求：较高</li>
              <li>并行性：一般</li>
            </ul>
          </div>
        </div>
        <p>在神经网络VMC中，通常使用反向模式自动微分，因为参数数量远大于输出数量。</p>
      </div>

      <h2>梯度估计的方差问题</h2>
      <p>
        蒙特卡罗梯度估计的一个主要挑战是方差控制。高方差会导致优化过程不稳定，
        需要采用各种技术来降低方差。
      </p>

      <div class="variance-reduction">
        <h3>方差减少技术</h3>
        <div class="techniques-grid">
          <div class="technique">
            <h4>控制变量法</h4>
            <p>使用已知期望值的量作为控制变量</p>
            <div class="math-display">
              $$\tilde{g} = g - c(h - \langle h \rangle)$$
            </div>
          </div>
          <div class="technique">
            <h4>重要性采样</h4>
            <p>改变采样分布以减少估计方差</p>
          </div>
          <div class="technique">
            <h4>分层采样</h4>
            <p>将样本空间分层，在每层内独立采样</p>
          </div>
          <div class="technique">
            <h4>协方差矩阵适应</h4>
            <p>自适应调整采样协方差矩阵</p>
          </div>
        </div>
      </div>

      <h2>优化算法详解</h2>
      <div class="optimization-algorithms">
        <div class="algorithm">
          <h3>随机梯度下降 (SGD)</h3>
          <div class="algorithm-details">
            <div class="formula-container">
              <div class="math-display">
                $$\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \eta_t \nabla E[\boldsymbol{\theta}_t]$$
              </div>
            </div>
            <div class="pros-cons">
              <div class="pros">
                <h4>优点</h4>
                <ul>
                  <li>简单易实现</li>
                  <li>内存需求低</li>
                  <li>理论基础扎实</li>
                </ul>
              </div>
              <div class="cons">
                <h4>缺点</h4>
                <ul>
                  <li>收敛速度慢</li>
                  <li>容易陷入局部最优</li>
                  <li>对学习率敏感</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="algorithm">
          <h3>动量法 (Momentum)</h3>
          <div class="algorithm-details">
            <div class="formula-container">
              <div class="math-display">
                $$\mathbf{v}_{t+1} = \gamma \mathbf{v}_t + \eta \nabla E[\boldsymbol{\theta}_t]$$
              </div>
              <div class="math-display">
                $$\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \mathbf{v}_{t+1}$$
              </div>
            </div>
            <p>动量参数 $\gamma$ 通常取 0.9，可以加速收敛并减少震荡。</p>
          </div>
        </div>

        <div class="algorithm">
          <h3>Adam优化器</h3>
          <div class="algorithm-details">
            <div class="formula-container">
              <div class="math-display">
                $$m_t = \beta_1 m_{t-1} + (1-\beta_1) \nabla E[\boldsymbol{\theta}_t]$$
              </div>
              <div class="math-display">
                $$v_t = \beta_2 v_{t-1} + (1-\beta_2) (\nabla E[\boldsymbol{\theta}_t])^2$$
              </div>
              <div class="math-display">
                $$\boldsymbol{\theta}_{t+1} = \boldsymbol{\theta}_t - \frac{\eta}{\sqrt{\hat{v}_t} + \epsilon} \hat{m}_t$$
              </div>
            </div>
            <p>其中 $\hat{m}_t$ 和 $\hat{v}_t$ 是偏差修正的估计。</p>
          </div>
        </div>
      </div>

      <h2>学习率调度</h2>
      <div class="learning-rate-schedule">
        <h3>常用调度策略</h3>
        <div class="schedule-methods">
          <div class="method">
            <h4>指数衰减</h4>
            <div class="math-display">
              $$\eta_t = \eta_0 e^{-\lambda t}$$
            </div>
          </div>
          <div class="method">
            <h4>阶梯衰减</h4>
            <div class="math-display">
              $$\eta_t = \eta_0 \gamma^{\lfloor t/s \rfloor}$$
            </div>
          </div>
          <div class="method">
            <h4>余弦退火</h4>
            <div class="math-display">
              $$\eta_t = \eta_{\min} + \frac{1}{2}(\eta_{\max} - \eta_{\min})(1 + \cos(\frac{t\pi}{T}))$$
            </div>
          </div>
        </div>
      </div>

      <h2>实际优化策略</h2>
      <div class="practical-strategies">
        <div class="strategy-card">
          <h3>预训练</h3>
          <p>使用简单的试探波函数或已知解作为初始化</p>
          <div class="benefits">
            <span class="benefit">加速收敛</span>
            <span class="benefit">避免局部最优</span>
            <span class="benefit">提高稳定性</span>
          </div>
        </div>

        <div class="strategy-card">
          <h3>批量大小调整</h3>
          <p>动态调整蒙特卡罗样本数量</p>
          <div class="benefits">
            <span class="benefit">平衡精度与效率</span>
            <span class="benefit">控制方差</span>
            <span class="benefit">适应优化阶段</span>
          </div>
        </div>

        <div class="strategy-card">
          <h3>梯度裁剪</h3>
          <p>限制梯度范数以防止梯度爆炸</p>
          <div class="benefits">
            <span class="benefit">提高稳定性</span>
            <span class="benefit">防止发散</span>
            <span class="benefit">保持收敛性</span>
          </div>
        </div>
      </div>

      <h2>收敛性分析</h2>
      <div class="convergence-analysis">
        <h3>收敛条件</h3>
        <p>对于随机梯度下降，在满足以下条件时可以保证收敛：</p>
        <ul>
          <li>学习率满足：$\sum_{t=1}^{\infty} \eta_t = \infty$ 且 $\sum_{t=1}^{\infty} \eta_t^2 < \infty$</li>
          <li>梯度估计是无偏的：$\mathbb{E}[\tilde{\nabla} E] = \nabla E$</li>
          <li>梯度方差有界：$\mathbb{E}[\|\tilde{\nabla} E - \nabla E\|^2] \leq \sigma^2$</li>
        </ul>

        <div class="convergence-plot">
          <h4>典型收敛曲线</h4>
          <div class="plot-description">
            <p>
              在实际应用中，能量通常呈现三个阶段的收敛行为：
              快速下降期、缓慢优化期和收敛稳定期。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter18_2_2',
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
  border-bottom: 3px solid #FF5722;
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
  border-left: 4px solid #FF5722;
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
  border-left: 4px solid #FF5722;
}

.math-display {
  text-align: center;
  margin: 15px 0;
  font-size: 1.1em;
}

.autodiff-section {
  background: #fff3e0;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 20px 0;
}

.mode-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mode-card h4 {
  color: #e65100;
  margin-bottom: 10px;
}

.mode-card ul {
  margin-left: 20px;
}

.mode-card li {
  margin-bottom: 5px;
}

.variance-reduction {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.technique {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.technique h4 {
  color: #2e7d32;
  margin-bottom: 10px;
}

.optimization-algorithms {
  margin: 20px 0;
}

.algorithm {
  background: #f3e5f5;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #9c27b0;
}

.algorithm h3 {
  color: #7b1fa2;
  margin-bottom: 15px;
}

.algorithm-details {
  margin-top: 15px;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
}

.pros, .cons {
  padding: 15px;
  border-radius: 8px;
}

.pros {
  background: #e8f5e8;
  border-left: 3px solid #4CAF50;
}

.cons {
  background: #ffebee;
  border-left: 3px solid #f44336;
}

.pros h4 {
  color: #2e7d32;
  margin-bottom: 10px;
}

.cons h4 {
  color: #c62828;
  margin-bottom: 10px;
}

.pros ul, .cons ul {
  margin-left: 20px;
}

.learning-rate-schedule {
  background: #e3f2fd;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.schedule-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin: 20px 0;
}

.method {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.method h4 {
  color: #1976d2;
  margin-bottom: 10px;
}

.practical-strategies {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.strategy-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.strategy-card h3 {
  color: white;
  margin-bottom: 10px;
}

.strategy-card p {
  margin-bottom: 15px;
  font-size: 0.95em;
}

.benefits {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.benefit {
  background: rgba(255, 255, 255, 0.2);
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.85em;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.convergence-analysis {
  background: #fff8e1;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
  border-left: 4px solid #ffc107;
}

.convergence-analysis h3 {
  color: #f57c00;
  margin-bottom: 15px;
}

.convergence-analysis ul {
  margin-left: 20px;
}

.convergence-analysis li {
  margin-bottom: 8px;
}

.convergence-plot {
  margin-top: 20px;
  padding: 15px;
  background: white;
  border-radius: 8px;
}

.convergence-plot h4 {
  color: #f57c00;
  margin-bottom: 10px;
}

.plot-description p {
  color: #555;
  font-style: italic;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .techniques-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
  
  .schedule-methods {
    grid-template-columns: 1fr;
  }
  
  .practical-strategies {
    grid-template-columns: 1fr;
  }
}
</style>