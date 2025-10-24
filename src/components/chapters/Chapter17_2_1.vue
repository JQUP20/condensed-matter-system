<template>
  <div class="chapter-content">
    <div class="content-header">
      <h1>17.2.1 鞍点方程</h1>
      <p class="subtitle">大N极限下的鞍点近似方法</p>
    </div>

    <div class="content-body">
      <!-- 核心概念 -->
      <section class="concept-section">
        <h2>🎯 鞍点方法的核心思想</h2>
        <div class="concept-card">
          <h3>为什么使用鞍点近似？</h3>
          <p>在SYK模型的大N极限下，路径积分被少数几个鞍点配置主导：</p>
          <ul>
            <li><strong>大N简化</strong>：涨落被$1/N$压制，鞍点贡献占主导</li>
            <li><strong>自洽性</strong>：鞍点方程给出自洽的平均场解</li>
            <li><strong>精确性</strong>：在$N \to \infty$极限下给出精确结果</li>
            <li><strong>可解性</strong>：将复杂的多体问题转化为单体问题</li>
          </ul>
        </div>
      </section>

      <!-- 路径积分表述 -->
      <section class="path-integral-section">
        <h2>📊 路径积分表述</h2>
        
        <div class="formula-card">
          <h3>配分函数的路径积分</h3>
          <div class="formula">
            $$Z = \int \mathcal{D}\chi \, e^{-S[\chi]}$$
          </div>
          <p>其中作用量为：</p>
          <div class="formula">
            $$S[\chi] = \int_0^\beta d\tau \left[ \frac{1}{2} \sum_i \chi_i \partial_\tau \chi_i - H(\tau) \right]$$
          </div>
        </div>

        <div class="formula-card">
          <h3>无序平均后的有效作用量</h3>
          <div class="formula">
            $$\overline{S} = \int_0^\beta d\tau \left[ \frac{1}{2} \sum_i \chi_i \partial_\tau \chi_i \right] - \frac{J^2}{8N^3} \int_0^\beta d\tau_1 d\tau_2 \left( \sum_i \chi_i(\tau_1) \chi_i(\tau_2) \right)^4$$
          </div>
        </div>

        <div class="formula-card">
          <h3>双线性耦合项</h3>
          <p>引入辅助场$G(\tau_1, \tau_2)$和$\Sigma(\tau_1, \tau_2)$：</p>
          <div class="formula">
            $$S_{\text{eff}} = \frac{N}{2} \int d\tau_1 d\tau_2 \left[ \Sigma(\tau_1,\tau_2) G(\tau_1,\tau_2) - \frac{J^2}{4} G(\tau_1,\tau_2)^4 \right]$$
          </div>
        </div>
      </section>

      <!-- 鞍点方程推导 -->
      <section class="derivation-section">
        <h2>🔬 鞍点方程的推导</h2>
        
        <div class="derivation-card">
          <h3>变分原理</h3>
          <div class="physics-content">
            <p>对有效作用量关于$G$和$\Sigma$变分：</p>
            <div class="formula">
              $$\frac{\delta S_{\text{eff}}}{\delta G(\tau_1,\tau_2)} = 0, \quad \frac{\delta S_{\text{eff}}}{\delta \Sigma(\tau_1,\tau_2)} = 0$$
            </div>
            
            <h4>第一个鞍点方程</h4>
            <div class="formula">
              $$\Sigma(\tau_1,\tau_2) = J^2 G(\tau_1,\tau_2)^3$$
            </div>
            
            <h4>第二个鞍点方程</h4>
            <div class="formula">
              $$G(\tau_1,\tau_2) = -\frac{1}{N} \sum_i \langle T \chi_i(\tau_1) \chi_i(\tau_2) \rangle$$
            </div>
          </div>
        </div>

        <div class="derivation-card">
          <h3>Dyson方程</h3>
          <div class="formula">
            $$\left( -\partial_\tau + \Sigma(\tau,\tau') \right) G(\tau,\tau') = \delta(\tau - \tau')$$
          </div>
          <p>这是格林函数满足的积分方程，结合鞍点条件形成闭合的方程组。</p>
        </div>
      </section>

      <!-- 对称性分析 -->
      <section class="symmetry-section">
        <h2>🔄 对称性分析</h2>
        
        <div class="symmetry-card">
          <h3>时间平移不变性</h3>
          <p>在热平衡态下，格林函数只依赖于时间差：</p>
          <div class="formula">
            $$G(\tau_1, \tau_2) = G(\tau_1 - \tau_2) = G(\tau)$$
          </div>
          <p>其中$\tau = \tau_1 - \tau_2$，且满足周期性边界条件$G(\tau + \beta) = -G(\tau)$。</p>
        </div>

        <div class="symmetry-card">
          <h3>粒子-空穴对称性</h3>
          <p>对于Majorana费米子：</p>
          <div class="formula">
            $$G(-\tau) = -G(\tau)$$
          </div>
          <p>这个反对称性质简化了鞍点方程的求解。</p>
        </div>
      </section>

      <!-- 解的性质 -->
      <section class="solution-section">
        <h2>⚙️ 鞍点解的性质</h2>
        
        <div class="solution-card">
          <h3>共形不变解</h3>
          <p>在低温极限下，SYK模型展现共形不变性：</p>
          <div class="formula">
            $$G(\tau) = \frac{b \cdot \text{sgn}(\tau)}{|\tau|^{2\Delta}}$$
          </div>
          <p>其中$\Delta = 1/4$是标度维数，$b$是常数。</p>
        </div>

        <div class="solution-card">
          <h3>有限温度解</h3>
          <p>在有限温度下，解具有以下形式：</p>
          <div class="formula">
            $$G(\tau) = -\frac{1}{2} \left( \frac{\pi}{\beta J \sin(\pi \tau/\beta)} \right)^{2\Delta}$$
          </div>
          <p>这个解在$\beta J \gg 1$时过渡到共形不变解。</p>
        </div>

        <div class="solution-card">
          <h3>高温展开</h3>
          <p>在高温极限$\beta J \ll 1$下：</p>
          <div class="formula">
            $$G(\tau) \approx -\frac{1}{2} + \frac{(\beta J)^2}{8} \cos(2\pi \tau/\beta) + O((\beta J)^4)$$
          </div>
        </div>
      </section>

      <!-- 数值求解方法 -->
      <section class="numerical-section">
        <h2>💻 数值求解方法</h2>
        
        <div class="numerical-card">
          <h3>迭代算法</h3>
          <div class="algorithm-content">
            <h4>步骤1：初始猜测</h4>
            <p>选择合理的初始格林函数$G^{(0)}(\tau)$。</p>
            
            <h4>步骤2：计算自能</h4>
            <div class="formula">
              $$\Sigma^{(n)}(\tau) = J^2 [G^{(n)}(\tau)]^3$$
            </div>
            
            <h4>步骤3：求解Dyson方程</h4>
            <div class="formula">
              $$G^{(n+1)}(\tau) = \left[ -\partial_\tau + \Sigma^{(n)}(\tau) \right]^{-1}$$
            </div>
            
            <h4>步骤4：检查收敛</h4>
            <p>重复直到$|G^{(n+1)} - G^{(n)}| < \epsilon$。</p>
          </div>
        </div>

        <div class="numerical-card">
          <h3>频率空间方法</h3>
          <p>在Matsubara频率空间中求解：</p>
          <div class="formula">
            $$G(i\omega_n) = \frac{1}{i\omega_n - \Sigma(i\omega_n)}$$
          </div>
          <p>其中$\omega_n = (2n+1)\pi/\beta$是费米子Matsubara频率。</p>
        </div>
      </section>

      <!-- 物理意义 -->
      <section class="physics-section">
        <h2>🌟 物理意义</h2>
        
        <div class="physics-card">
          <h3>非费米液体行为</h3>
          <div class="physics-content">
            <p>鞍点解揭示了SYK模型的非费米液体性质：</p>
            <ul>
              <li><strong>反常标度</strong>：$G(\tau) \sim |\tau|^{-1/2}$而非费米液体的$|\tau|^{-1}$</li>
              <li><strong>无准粒子峰</strong>：谱函数没有尖锐的准粒子峰</li>
              <li><strong>线性比热</strong>：$C \propto T$，类似费米液体但机制不同</li>
            </ul>
          </div>
        </div>

        <div class="physics-card">
          <h3>量子临界性</h3>
          <p>SYK模型描述了一个量子临界点：</p>
          <ul>
            <li>没有能隙的激发谱</li>
            <li>共形不变的低能行为</li>
            <li>标度不变的关联函数</li>
          </ul>
        </div>
      </section>

      <!-- 与实验的联系 -->
      <section class="experiment-section">
        <h2>🧪 与实验的联系</h2>
        
        <div class="experiment-card">
          <h3>可观测量的预言</h3>
          <div class="experiment-content">
            <h4>1. 比热</h4>
            <div class="formula">
              $$C(T) = \gamma T + O(T^3)$$
            </div>
            <p>其中$\gamma$是Sommerfeld系数。</p>
            
            <h4>2. 电阻率</h4>
            <p>在量子临界区域展现线性温度依赖性。</p>
            
            <h4>3. 谱函数</h4>
            <p>ARPES实验可以直接测量单粒子谱函数。</p>
          </div>
        </div>
      </section>

      <!-- 总结 -->
      <section class="summary-section">
        <h2>📝 总结</h2>
        <div class="summary-card">
          <p>SYK模型的鞍点方程提供了强关联系统的精确解：</p>
          <ul>
            <li><strong>数学上</strong>：通过大N极限将复杂的多体问题简化为自洽的单体问题</li>
            <li><strong>物理上</strong>：揭示了非费米液体的本质特征和量子临界行为</li>
            <li><strong>方法上</strong>：展示了如何处理强关联和无序的结合</li>
            <li><strong>应用上</strong>：为理解奇异金属和量子临界现象提供了理论基础</li>
          </ul>
          <p>鞍点方程不仅是数学工具，更是理解强关联量子物质新相态的重要窗口。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter17_2_1',
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border-radius: 10px;
}

.content-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5em;
  font-weight: bold;
}

.subtitle {
  font-size: 1.2em;
  opacity: 0.9;
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
  border-left: 4px solid #4facfe;
}

section h2 {
  color: #4facfe;
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.concept-card, .formula-card, .derivation-card, .symmetry-card, 
.solution-card, .numerical-card, .physics-card, .experiment-card, .summary-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 3px solid #28a745;
}

.concept-card h3, .formula-card h3, .derivation-card h3, 
.symmetry-card h3, .solution-card h3, .numerical-card h3, 
.physics-card h3, .experiment-card h3, .summary-card h3 {
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

.physics-content h4, .algorithm-content h4, .experiment-content h4 {
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

.physics-card {
  border-left-color: #fd7e14;
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