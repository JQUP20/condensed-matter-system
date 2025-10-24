<template>
  <div class="chapter-content">
    <div class="content-header">
      <h1>17.3.1 无序平均</h1>
      <p class="subtitle">随机系统的统计处理方法</p>
    </div>

    <div class="content-body">
      <!-- 核心概念 -->
      <section class="concept-section">
        <h2>🎯 无序平均的基本概念</h2>
        <div class="concept-card">
          <h3>为什么需要无序平均？</h3>
          <p>在SYK模型中，随机耦合常数使得每个样本都不同，需要统计平均：</p>
          <ul>
            <li><strong>样本依赖性</strong>：每个实现的哈密顿量都不同</li>
            <li><strong>物理可观测量</strong>：实验测量的是系综平均值</li>
            <li><strong>自平均性质</strong>：热力学极限下涨落被压制</li>
            <li><strong>普适行为</strong>：平均后显现普适的物理规律</li>
          </ul>
        </div>
      </section>

      <!-- 数学框架 -->
      <section class="mathematical-section">
        <h2>📊 数学框架</h2>
        
        <div class="formula-card">
          <h3>无序平均的定义</h3>
          <div class="formula">
            $$\overline{O} = \int \prod_{i&lt;j&lt;k&lt;l} dJ_{ijkl} \, P(J_{ijkl}) \, O[J]$$
          </div>
          <p>其中$P(J_{ijkl})$是耦合常数的概率分布，$O[J]$是依赖于随机变量的物理量。</p>
        </div>

        <div class="formula-card">
          <h3>高斯分布</h3>
          <div class="formula">
            $$P(J_{ijkl}) = \sqrt{\frac{N^3}{2\pi \cdot 3! J^2}} \exp\left(-\frac{N^3 J_{ijkl}^2}{2 \cdot 3! J^2}\right)$$
          </div>
          <p>这确保了：$\overline{J_{ijkl}} = 0$，$\overline{J_{ijkl}^2} = \frac{3! J^2}{N^3}$</p>
        </div>

        <div class="formula-card">
          <h3>Wick定理</h3>
          <p>对于高斯随机变量，高阶矩可以分解为二阶矩的乘积：</p>
          <div class="formula">
            $$\overline{J_{i_1j_1k_1l_1} \cdots J_{i_nj_nk_nl_n}} = \sum_{\text{pairings}} \prod_{\text{pairs}} \overline{J_{i_aj_ak_al_a} J_{i_bj_bk_bl_b}}$$
          </div>
        </div>
      </section>

      <!-- 计算技巧 -->
      <section class="technique-section">
        <h2>⚙️ 计算技巧</h2>
        
        <div class="technique-card">
          <h3>副本技巧 (Replica Trick)</h3>
          <div class="replica-content">
            <h4>基本思想</h4>
            <p>利用恒等式：</p>
            <div class="formula">
              $$\overline{\ln Z} = \lim_{n \to 0} \frac{\overline{Z^n} - 1}{n}$$
            </div>
            
            <h4>副本配分函数</h4>
            <div class="formula">
              $$\overline{Z^n} = \int \prod_{\alpha=1}^n \mathcal{D}\chi^\alpha \, \overline{e^{-\sum_\alpha S[\chi^\alpha]}}$$
            </div>
            
            <h4>优势</h4>
            <ul>
              <li>将对数的平均转化为幂次的平均</li>
              <li>便于处理高斯积分</li>
              <li>可以系统地计算修正项</li>
            </ul>
          </div>
        </div>

        <div class="technique-card">
          <h3>Schwinger-Dyson方程方法</h3>
          <div class="sd-content">
            <h4>基本原理</h4>
            <p>利用路径积分的变分性质：</p>
            <div class="formula">
              $$\int \mathcal{D}\chi \, \frac{\delta}{\delta \chi_i(\tau)} \left[ F[\chi] e^{-S[\chi]} \right] = 0$$
            </div>
            
            <h4>格林函数方程</h4>
            <div class="formula">
              $$\overline{\langle T \chi_i(\tau_1) \chi_j(\tau_2) \rangle} = \delta_{ij} G(\tau_1 - \tau_2)$$
            </div>
            
            <h4>自洽条件</h4>
            <div class="formula">
              $$G(\tau) = \int d\tau' G_0(\tau - \tau') \Sigma(\tau') G(\tau')$$
            </div>
          </div>
        </div>
      </section>

      <!-- 自平均现象 -->
      <section class="self-averaging-section">
        <h2>🔬 自平均现象</h2>
        
        <div class="self-averaging-card">
          <h3>自平均的定义</h3>
          <div class="physics-content">
            <p>对于广延量$O$，如果满足：</p>
            <div class="formula">
              $$\lim_{N \to \infty} \frac{\sqrt{\overline{(O - \overline{O})^2}}}{|\overline{O}|} = 0$$
            </div>
            <p>则称$O$具有自平均性质。</p>
            
            <h4>物理意义</h4>
            <ul>
              <li>单个样本的测量值等于系综平均</li>
              <li>相对涨落随系统尺寸减小</li>
              <li>宏观量具有确定的值</li>
            </ul>
          </div>
        </div>

        <div class="self-averaging-card">
          <h3>自平均的条件</h3>
          <div class="condition-content">
            <h4>1. 系统尺寸</h4>
            <p>通常需要$N \gg 1$，涨落被$1/\sqrt{N}$压制。</p>
            
            <h4>2. 相关长度</h4>
            <p>当相关长度有限时，不同区域的贡献相互独立。</p>
            
            <h4>3. 遍历性</h4>
            <p>系统能够遍历所有可能的配置。</p>
          </div>
        </div>

        <div class="self-averaging-card">
          <h3>SYK模型中的自平均</h3>
          <p>在SYK模型中，由于全连接性质：</p>
          <ul>
            <li><strong>配分函数</strong>：$\overline{\ln Z}$具有自平均性</li>
            <li><strong>格林函数</strong>：单粒子格林函数自平均</li>
            <li><strong>热力学量</strong>：自由能、熵等宏观量自平均</li>
          </ul>
        </div>
      </section>

      <!-- 涨落效应 -->
      <section class="fluctuation-section">
        <h2>📈 涨落效应</h2>
        
        <div class="fluctuation-card">
          <h3>样本间涨落</h3>
          <div class="sample-content">
            <h4>涨落的来源</h4>
            <ul>
              <li>随机耦合常数的不同实现</li>
              <li>有限尺寸效应</li>
              <li>量子涨落与热涨落的竞争</li>
            </ul>
            
            <h4>涨落的标度</h4>
            <div class="formula">
              $$\text{Var}(O) = \overline{O^2} - (\overline{O})^2 \sim \frac{1}{N}$$
            </div>
          </div>
        </div>

        <div class="fluctuation-card">
          <h3>关联函数的涨落</h3>
          <p>高阶关联函数的涨落更为复杂：</p>
          <div class="formula">
            $$\overline{\langle \chi_i(\tau_1) \chi_j(\tau_2) \chi_k(\tau_3) \chi_l(\tau_4) \rangle} \neq \overline{\langle \chi_i(\tau_1) \chi_j(\tau_2) \rangle} \overline{\langle \chi_k(\tau_3) \chi_l(\tau_4) \rangle}$$
          </div>
        </div>

        <div class="fluctuation-card">
          <h3>非自平均量</h3>
          <p>某些物理量可能不具有自平均性：</p>
          <ul>
            <li><strong>能级间距</strong>：个别能级的性质</li>
            <li><strong>局域态密度</strong>：空间局域的量</li>
            <li><strong>输运系数</strong>：在某些条件下</li>
          </ul>
        </div>
      </section>

      <!-- 计算实例 -->
      <section class="example-section">
        <h2>💡 计算实例</h2>
        
        <div class="example-card">
          <h3>配分函数的无序平均</h3>
          <div class="calculation-steps">
            <h4>步骤1：写出配分函数</h4>
            <div class="formula">
              $$Z = \text{Tr} e^{-\beta H} = \text{Tr} \exp\left(-\beta \sum_{ijkl} J_{ijkl} \chi_i \chi_j \chi_k \chi_l\right)$$
            </div>
            
            <h4>步骤2：进行无序平均</h4>
            <div class="formula">
              $$\overline{Z^n} = \int \prod_{ijkl} dJ_{ijkl} P(J_{ijkl}) \prod_{\alpha=1}^n \text{Tr}_\alpha e^{-\beta H_\alpha}$$
            </div>
            
            <h4>步骤3：利用Wick定理</h4>
            <p>将高阶矩分解为二阶矩的乘积，得到有效作用量。</p>
            
            <h4>步骤4：鞍点近似</h4>
            <p>在大N极限下，找到主导的鞍点配置。</p>
          </div>
        </div>

        <div class="example-card">
          <h3>格林函数的计算</h3>
          <div class="green-calculation">
            <h4>定义</h4>
            <div class="formula">
              $$G(\tau) = -\frac{1}{N} \sum_i \overline{\langle T \chi_i(\tau) \chi_i(0) \rangle}$$
            </div>
            
            <h4>自洽方程</h4>
            <div class="formula">
              $$G(\tau) = G_0(\tau) + \int d\tau_1 d\tau_2 G_0(\tau - \tau_1) \Sigma(\tau_1 - \tau_2) G(\tau_2)$$
            </div>
            
            <h4>自能关系</h4>
            <div class="formula">
              $$\Sigma(\tau) = J^2 G(\tau)^3$$
            </div>
          </div>
        </div>
      </section>

      <!-- 数值方法 -->
      <section class="numerical-section">
        <h2>💻 数值方法</h2>
        
        <div class="numerical-card">
          <h3>蒙特卡罗方法</h3>
          <div class="monte-carlo-content">
            <h4>基本思想</h4>
            <p>通过随机采样估计无序平均：</p>
            <div class="formula">
              $$\overline{O} \approx \frac{1}{M} \sum_{s=1}^M O[J^{(s)}]$$
            </div>
            
            <h4>优势与局限</h4>
            <ul>
              <li><strong>优势</strong>：适用于任意复杂的系统</li>
              <li><strong>局限</strong>：计算量大，收敛慢</li>
            </ul>
          </div>
        </div>

        <div class="numerical-card">
          <h3>解析方法的数值实现</h3>
          <p>对于SYK模型，可以直接求解自洽方程：</p>
          <ul>
            <li>避免了样本平均的统计误差</li>
            <li>计算效率高</li>
            <li>可以达到很高的精度</li>
          </ul>
        </div>
      </section>

      <!-- 物理应用 -->
      <section class="application-section">
        <h2>🌟 物理应用</h2>
        
        <div class="application-card">
          <h3>无序系统的普遍性</h3>
          <div class="universality-content">
            <h4>Anderson局域化</h4>
            <p>无序平均揭示了局域化-非局域化转变。</p>
            
            <h4>自旋玻璃</h4>
            <p>无序平均导致复杂的能量景观和多重态。</p>
            
            <h4>量子点</h4>
            <p>随机矩阵理论描述量子点的统计性质。</p>
          </div>
        </div>

        <div class="application-card">
          <h3>实验相关性</h3>
          <ul>
            <li><strong>样品制备</strong>：实际样品总是包含无序</li>
            <li><strong>测量平均</strong>：实验测量本质上是某种平均</li>
            <li><strong>重现性</strong>：理论预言的重现性依赖于自平均</li>
          </ul>
        </div>
      </section>

      <!-- 总结 -->
      <section class="summary-section">
        <h2>📝 总结</h2>
        <div class="summary-card">
          <p>无序平均是处理随机系统的核心方法：</p>
          <ul>
            <li><strong>数学上</strong>：提供了处理随机哈密顿量的系统方法</li>
            <li><strong>物理上</strong>：揭示了自平均现象和普适行为</li>
            <li><strong>计算上</strong>：使复杂的随机问题变得可解</li>
            <li><strong>实验上</strong>：连接理论预言与实际测量</li>
          </ul>
          <p>在SYK模型中，无序平均不仅是技术工具，更是理解量子混沌和强关联物理的关键概念。通过无序平均，我们能够从随机的微观细节中提取出普适的宏观规律。</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter17_3_1',
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  border-left: 4px solid #667eea;
}

section h2 {
  color: #667eea;
  margin-bottom: 20px;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  gap: 10px;
}

.concept-card, .formula-card, .technique-card, .self-averaging-card, 
.fluctuation-card, .example-card, .numerical-card, .application-card, .summary-card {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 3px solid #28a745;
}

.concept-card h3, .formula-card h3, .technique-card h3, 
.self-averaging-card h3, .fluctuation-card h3, .example-card h3, 
.numerical-card h3, .application-card h3, .summary-card h3 {
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

.replica-content h4, .sd-content h4, .physics-content h4, 
.condition-content h4, .sample-content h4, .calculation-steps h4, 
.green-calculation h4, .monte-carlo-content h4, .universality-content h4 {
  color: #6c757d;
  margin-top: 15px;
  margin-bottom: 8px;
}

.calculation-steps {
  background: #e7f3ff;
  padding: 15px;
  border-radius: 5px;
  border-left: 3px solid #007bff;
}

.green-calculation {
  background: #f0f8f0;
  padding: 15px;
  border-radius: 5px;
  border-left: 3px solid #28a745;
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

.technique-card {
  border-left-color: #6f42c1;
}

.self-averaging-card {
  border-left-color: #fd7e14;
}

.fluctuation-card {
  border-left-color: #e83e8c;
}

.numerical-card {
  border-left-color: #20c997;
}

.application-card {
  border-left-color: #ffc107;
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