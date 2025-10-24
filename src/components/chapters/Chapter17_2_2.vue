<template>
  <div class="chapter-content">
    <div class="content-header">
      <h1>17.2.2 自能的计算</h1>
      <p class="subtitle">SYK模型中自能函数的精确计算</p>
    </div>

    <div class="content-body">
      <!-- 核心概念 -->
      <section class="concept-section">
        <h2>🎯 自能的物理意义</h2>
        <div class="concept-card">
          <h3>什么是自能？</h3>
          <p>自能$\Sigma(\tau)$描述了粒子与环境相互作用的效应：</p>
          <ul>
            <li><strong>重整化效应</strong>：修正单粒子能量和寿命</li>
            <li><strong>多体关联</strong>：包含所有不可约的自相互作用图</li>
            <li><strong>非局域性</strong>：在时间上非局域，反映记忆效应</li>
            <li><strong>解析性质</strong>：满足因果性和Kramers-Kronig关系</li>
          </ul>
        </div>
      </section>

      <!-- Dyson方程 -->
      <section class="dyson-section">
        <h2>📊 Dyson方程框架</h2>
        
        <div class="formula-card">
          <h3>基本Dyson方程</h3>
          <div class="formula">
            $$G(\tau) = G_0(\tau) + \int_0^\beta d\tau_1 d\tau_2 \, G_0(\tau - \tau_1) \Sigma(\tau_1 - \tau_2) G(\tau_2)$$
          </div>
          <p>其中$G_0(\tau) = -\frac{1}{2}\text{sgn}(\tau)$是自由格林函数。</p>
        </div>

        <div class="formula-card">
          <h3>微分形式的Dyson方程</h3>
          <div class="formula">
            $$\left( -\partial_\tau + \Sigma(\tau) \right) G(\tau) = \delta(\tau)$$
          </div>
          <p>这是更紧凑的表示形式，便于数值求解。</p>
        </div>

        <div class="formula-card">
          <h3>频率空间表示</h3>
          <div class="formula">
            $$G(i\omega_n) = \frac{1}{i\omega_n - \Sigma(i\omega_n)}$$
          </div>
          <p>在Matsubara频率$\omega_n = (2n+1)\pi/\beta$上的表示。</p>
        </div>
      </section>

      <!-- 自能的计算 -->
      <section class="calculation-section">
        <h2>🔬 自能的精确计算</h2>
        
        <div class="calculation-card">
          <h3>鞍点近似下的自能</h3>
          <div class="physics-content">
            <p>在大N极限的鞍点近似下：</p>
            <div class="formula">
              $$\Sigma(\tau) = J^2 G(\tau)^3$$
            </div>
            <p>这个简洁的关系式是SYK模型的核心结果，体现了强关联的非线性效应。</p>
            
            <h4>物理解释</h4>
            <ul>
              <li>自能正比于$G^3$，反映四体相互作用的特征</li>
              <li>非线性关系导致非费米液体行为</li>
              <li>在大N极限下精确成立</li>
            </ul>
          </div>
        </div>

        <div class="calculation-card">
          <h3>共形不变解</h3>
          <p>在低温极限下，格林函数具有幂律形式：</p>
          <div class="formula">
            $$G(\tau) = \frac{b \cdot \text{sgn}(\tau)}{|\tau|^{1/2}}$$
          </div>
          <p>相应的自能为：</p>
          <div class="formula">
            $$\Sigma(\tau) = J^2 b^3 \frac{\text{sgn}(\tau)}{|\tau|^{3/2}}$$
          </div>
        </div>

        <div class="calculation-card">
          <h3>有限温度解</h3>
          <p>在有限温度$\beta J \gg 1$下：</p>
          <div class="formula">
            $$\Sigma(\tau) = -\frac{J^2}{8} \left( \frac{\pi}{\beta J \sin(\pi \tau/\beta)} \right)^{3/2} \text{sgn}(\tau)$$
          </div>
        </div>
      </section>

      <!-- 解析性质 -->
      <section class="analytical-section">
        <h2>⚙️ 自能的解析性质</h2>
        
        <div class="analytical-card">
          <h3>对称性</h3>
          <div class="symmetry-content">
            <h4>1. 反对称性</h4>
            <div class="formula">
              $$\Sigma(-\tau) = -\Sigma(\tau)$$
            </div>
            <p>这来自于Majorana费米子的性质。</p>
            
            <h4>2. 周期性</h4>
            <div class="formula">
              $$\Sigma(\tau + \beta) = -\Sigma(\tau)$$
            </div>
            <p>反周期边界条件的体现。</p>
          </div>
        </div>

        <div class="analytical-card">
          <h3>高频行为</h3>
          <p>在高Matsubara频率下：</p>
          <div class="formula">
            $$\Sigma(i\omega_n) \sim \frac{C}{(i\omega_n)^2} \quad \text{for } |\omega_n| \gg J$$
          </div>
          <p>这保证了格林函数在高频下的正确行为。</p>
        </div>

        <div class="analytical-card">
          <h3>低频展开</h3>
          <p>在低频下的展开：</p>
          <div class="formula">
            $$\Sigma(i\omega_n) = \Sigma_0 + \Sigma_1 (i\omega_n)^{1/2} + \Sigma_2 (i\omega_n) + \cdots$$
          </div>
          <p>其中$\Sigma_1$项的存在是非费米液体的标志。</p>
        </div>
      </section>

      <!-- 数值计算方法 -->
      <section class="numerical-section">
        <h2>💻 数值计算方法</h2>
        
        <div class="numerical-card">
          <h3>自洽迭代算法</h3>
          <div class="algorithm-content">
            <h4>算法流程</h4>
            <ol>
              <li><strong>初始化</strong>：选择初始格林函数$G^{(0)}(\tau)$</li>
              <li><strong>计算自能</strong>：$\Sigma^{(n)}(\tau) = J^2 [G^{(n)}(\tau)]^3$</li>
              <li><strong>求解Dyson方程</strong>：得到新的$G^{(n+1)}(\tau)$</li>
              <li><strong>检查收敛</strong>：判断$|G^{(n+1)} - G^{(n)}| < \epsilon$</li>
              <li><strong>迭代</strong>：重复步骤2-4直到收敛</li>
            </ol>
          </div>
        </div>

        <div class="numerical-card">
          <h3>频率空间方法</h3>
          <div class="frequency-content">
            <h4>Matsubara求和</h4>
            <p>将时间域的卷积转换为频率域的乘积：</p>
            <div class="formula">
              $$G(i\omega_n) = \frac{1}{i\omega_n - \Sigma(i\omega_n)}$$
            </div>
            
            <h4>Fourier变换</h4>
            <div class="formula">
              $$G(\tau) = \frac{1}{\beta} \sum_n e^{-i\omega_n \tau} G(i\omega_n)$$
            </div>
          </div>
        </div>

        <div class="numerical-card">
          <h3>收敛性分析</h3>
          <ul>
            <li><strong>收敛条件</strong>：通常需要$\beta J > 1$</li>
            <li><strong>混合参数</strong>：使用$G^{(n+1)} = \alpha G_{\text{new}} + (1-\alpha) G^{(n)}$</li>
            <li><strong>精度控制</strong>：相对误差小于$10^{-6}$</li>
          </ul>
        </div>
      </section>

      <!-- 物理应用 -->
      <section class="application-section">
        <h2>🌟 物理应用</h2>
        
        <div class="application-card">
          <h3>谱函数的计算</h3>
          <div class="spectral-content">
            <p>通过解析延拓得到实频率上的自能：</p>
            <div class="formula">
              $$\Sigma(\omega + i0^+) = \Sigma'(\omega) + i\Sigma''(\omega)$$
            </div>
            <p>谱函数为：</p>
            <div class="formula">
              $$A(\omega) = -\frac{1}{\pi} \text{Im} G(\omega + i0^+) = \frac{\Sigma''(\omega)}{[\omega - \Sigma'(\omega)]^2 + [\Sigma''(\omega)]^2}$$
            </div>
          </div>
        </div>

        <div class="application-card">
          <h3>输运性质</h3>
          <p>自能直接影响输运系数：</p>
          <ul>
            <li><strong>电导率</strong>：通过Kubo公式计算</li>
            <li><strong>热导率</strong>：与自能的频率依赖性相关</li>
            <li><strong>比热</strong>：由低频自能行为决定</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>量子临界性</h3>
          <p>自能的标度行为揭示量子临界性质：</p>
          <div class="formula">
            $$\Sigma(\omega) \sim \omega^{1/2}$$
          </div>
          <p>这种反常标度是非费米液体的特征。</p>
        </div>
      </section>

      <!-- 实验对比 -->
      <section class="experiment-section">
        <h2>🧪 实验对比</h2>
        
        <div class="experiment-card">
          <h3>ARPES测量</h3>
          <div class="experiment-content">
            <p>角分辨光电子谱可以直接测量谱函数：</p>
            <ul>
              <li>观察准粒子峰的缺失</li>
              <li>测量自能的频率依赖性</li>
              <li>验证非费米液体行为</li>
            </ul>
          </div>
        </div>

        <div class="experiment-card">
          <h3>量子振荡</h3>
          <p>在强磁场下的量子振荡可以探测：</p>
          <ul>
            <li>有效质量的增强</li>
            <li>散射率的频率依赖性</li>
            <li>费米面的重构</li>
          </ul>
        </div>
      </section>

      <!-- 理论扩展 -->
      <section class="extension-section">
        <h2>🚀 理论扩展</h2>
        
        <div class="extension-card">
          <h3>1/N修正</h3>
          <p>超越鞍点近似的修正：</p>
          <div class="formula">
            $$\Sigma(\tau) = J^2 G(\tau)^3 + \frac{1}{N} \Sigma_1(\tau) + O(1/N^2)$$
          </div>
          <p>这些修正包含涨落效应和相互作用修正。</p>
        </div>

        <div class="extension-card">
          <h3>有限尺寸效应</h3>
          <p>在有限N系统中：</p>
          <ul>
            <li>能级的离散化效应</li>
            <li>涨落的增强</li>
            <li>相变的圆滑化</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="summary-section">
        <h2>📝 总结</h2>
        <div class="summary-card">
          <p>SYK模型中自能的计算展现了强关联系统的丰富物理：</p>
          <ul>
            <li><strong>精确性</strong>：在大N极限下给出精确的自能表达式$\Sigma = J^2 G^3$</li>
            <li><strong>非线性</strong>：自能与格林函数的三次方关系体现强关联特征</li>
            <li><strong>标度性</strong>：反常的频率标度$\Sigma \sim \omega^{1/2}$揭示非费米液体性质</li>
            <li><strong>普适性</strong>：为理解奇异金属和量子临界现象提供理论基础</li>
          </ul>
          <p>自能的计算不仅是技术工具，更是理解强关联量子物质本质特征的重要窗口。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter17_2_2',
  mounted() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
        });
      }
    });
  },
  updated() {
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el, {
          delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
          ],
          throwOnError: false
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

.content-header {
  text-align: center;
  margin-bottom: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #333;
  border-radius: 10px;
}

.content-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.8;
  margin: 0;
}

.content-body {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

section {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  border-left: 4px solid #a8edea;
}

section h2 {
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.concept-card, .formula-card, .calculation-card, .analytical-card, 
.numerical-card, .application-card, .experiment-card, .extension-card, .summary-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 3px solid #28a745;
}

.concept-card h3, .formula-card h3, .calculation-card h3, 
.analytical-card h3, .numerical-card h3, .application-card h3, 
.experiment-card h3, .extension-card h3, .summary-card h3 {
  color: #495057;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.formula {
  background: white;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
  text-align: center;
  border: 1px solid #dee2e6;
  font-size: 1.1em;
}

.physics-content h4, .symmetry-content h4, .algorithm-content h4, 
.frequency-content h4, .spectral-content h4, .experiment-content h4 {
  color: #6c757d;
  margin-top: 15px;
  margin-bottom: 8px;
}

.algorithm-content {
  background: #fff3cd;
  padding: 15px;
  border-radius: 5px;
  border-left: 3px solid #ffc107;
}

.algorithm-content ol {
  padding-left: 20px;
}

.algorithm-content li {
  margin-bottom: 10px;
}

ul {
  padding-left: 20px;
}

li {
  margin-bottom: 8px;
}

strong {
  color: #495057;
  font-weight: 600;
}

.numerical-card {
  border-left-color: #6f42c1;
}

.application-card {
  border-left-color: #fd7e14;
}

.experiment-card {
  border-left-color: #20c997;
}

.extension-card {
  border-left-color: #e83e8c;
}

.summary-card {
  border-left-color: #17a2b8;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .content-header h1 {
    font-size: 2em;
  }
  
  section {
    padding: 20px;
  }
}
</style>