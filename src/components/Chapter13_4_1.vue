<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.4.1 Cooper对的形成</h1>
    
    <div class="content-section">
      <h2>Cooper对的基本概念</h2>
      <div class="concept-card">
        <p>Cooper对是超导理论中的核心概念，由Leon Cooper在1956年首次提出。它描述了两个电子通过声子交换形成的束缚态，这种配对是超导现象的微观起源。</p>
        
        <div class="key-points">
          <h3>Cooper对的特征：</h3>
          <ul>
            <li><strong>动量配对</strong>：两个电子具有相反的动量 <katex-element expression="(\mathbf{k}, -\mathbf{k})"></katex-element></li>
            <li><strong>自旋配对</strong>：两个电子具有相反的自旋 <katex-element expression="(\uparrow, \downarrow)"></katex-element></li>
            <li><strong>束缚能</strong>：配对电子的总能量低于两个自由电子的能量</li>
            <li><strong>玻色子性质</strong>：Cooper对具有整数自旋，遵循玻色-爱因斯坦统计</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Cooper问题的建立</h2>
      <div class="theory-card">
        <p>考虑费米海上方的两个电子，它们通过声子交换相互作用。Cooper问题的哈密顿量可以写为：</p>
        
        <div class="formula-display">
          <katex-element expression="H = \sum_{\mathbf{k}} \epsilon_{\mathbf{k}} c_{\mathbf{k}\uparrow}^\dagger c_{\mathbf{k}\uparrow} + \sum_{\mathbf{k}} \epsilon_{\mathbf{k}} c_{\mathbf{k}\downarrow}^\dagger c_{\mathbf{k}\downarrow} + \sum_{\mathbf{k},\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow}"></katex-element>
        </div>
        
        <div class="explanation">
          <p>其中：</p>
          <ul>
            <li><katex-element expression="\epsilon_{\mathbf{k}} = \frac{\hbar^2 k^2}{2m} - \mu"></katex-element> 是相对于化学势的单粒子能量</li>
            <li><katex-element expression="V_{\mathbf{k},\mathbf{k}'}"></katex-element> 是电子-电子相互作用矩阵元</li>
            <li><katex-element expression="c_{\mathbf{k}\sigma}^\dagger, c_{\mathbf{k}\sigma}"></katex-element> 是电子的产生和湮灭算符</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Cooper对波函数</h2>
      <div class="theory-card">
        <p>Cooper对的波函数可以表示为所有可能的 <katex-element expression="(\mathbf{k}, -\mathbf{k})"></katex-element> 配对态的叠加：</p>
        
        <div class="formula-display">
          <katex-element expression="|\psi\rangle = \sum_{\mathbf{k}} g(\mathbf{k}) c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger |0\rangle"></katex-element>
        </div>
        
        <p>其中 <katex-element expression="g(\mathbf{k})"></katex-element> 是配对振幅，<katex-element expression="|0\rangle"></katex-element> 是费米海真空态。</p>
        
        <div class="subsection">
          <h3>薛定谔方程</h3>
          <p>Cooper对满足薛定谔方程：</p>
          <div class="formula-display">
            <katex-element expression="H|\psi\rangle = E|\psi\rangle"></katex-element>
          </div>
          
          <p>代入波函数形式，得到：</p>
          <div class="formula-display">
            <katex-element expression="(2\epsilon_{\mathbf{k}} - E) g(\mathbf{k}) + \sum_{\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} g(\mathbf{k}') = 0"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>简化模型：常数相互作用</h2>
      <div class="model-card">
        <p>为了求解Cooper问题，我们采用简化的常数相互作用模型：</p>
        
        <div class="formula-display">
          <katex-element expression="V_{\mathbf{k},\mathbf{k}'} = \begin{cases} -V & \text{if } |\epsilon_{\mathbf{k}}|, |\epsilon_{\mathbf{k}'}| < \hbar\omega_D \\ 0 & \text{otherwise} \end{cases}"></katex-element>
        </div>
        
        <div class="explanation">
          <p>这里：</p>
          <ul>
            <li><katex-element expression="V > 0"></katex-element> 表示吸引相互作用强度</li>
            <li><katex-element expression="\hbar\omega_D"></katex-element> 是德拜截止能量</li>
            <li>相互作用只在费米面附近的薄壳层内有效</li>
          </ul>
        </div>
        
        <div class="subsection">
          <h3>配对振幅的求解</h3>
          <p>在常数相互作用近似下，配对振幅为常数：</p>
          <div class="formula-display">
            <katex-element expression="g(\mathbf{k}) = \begin{cases} g & \text{if } |\epsilon_{\mathbf{k}}| < \hbar\omega_D \\ 0 & \text{otherwise} \end{cases}"></katex-element>
          </div>
          
          <p>薛定谔方程简化为：</p>
          <div class="formula-display">
            <katex-element expression="(2\epsilon_{\mathbf{k}} - E) g - V g \sum_{\mathbf{k}'} \frac{1}{2\epsilon_{\mathbf{k}'} - E} = 0"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Cooper对的束缚能</h2>
      <div class="result-card">
        <p>通过求解上述方程，我们得到Cooper对的束缚能：</p>
        
        <div class="formula-display">
          <katex-element expression="1 = V \sum_{\mathbf{k}} \frac{1}{2\epsilon_{\mathbf{k}} - E}"></katex-element>
        </div>
        
        <p>将求和转换为积分，并引入态密度 <katex-element expression="N(0)"></katex-element>：</p>
        
        <div class="formula-display">
          <katex-element expression="1 = V N(0) \int_0^{\hbar\omega_D} \frac{d\epsilon}{2\epsilon - E}"></katex-element>
        </div>
        
        <div class="subsection">
          <h3>束缚能的解析解</h3>
          <p>积分计算得到：</p>
          <div class="formula-display">
            <katex-element expression="1 = \frac{V N(0)}{2} \ln\left|\frac{2\hbar\omega_D - E}{-E}\right|"></katex-element>
          </div>
          
          <p>在弱耦合极限 <katex-element expression="V N(0) \ll 1"></katex-element> 下，Cooper对的束缚能为：</p>
          <div class="formula-display highlight">
            <katex-element expression="E = -2\hbar\omega_D e^{-2/VN(0)}"></katex-element>
          </div>
          
          <div class="key-insight">
            <p><strong>重要结论</strong>：无论相互作用多么微弱，只要是吸引的（<katex-element expression="V > 0"></katex-element>），Cooper对总是具有负的束缚能，即总是稳定的！</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Cooper对的空间结构</h2>
      <div class="structure-card">
        <h3>相干长度</h3>
        <p>Cooper对的空间尺度由相干长度 <katex-element expression="\xi_0"></katex-element> 表征：</p>
        
        <div class="formula-display">
          <katex-element expression="\xi_0 = \frac{\hbar v_F}{\pi \Delta_0}"></katex-element>
        </div>
        
        <div class="explanation">
          <p>其中：</p>
          <ul>
            <li><katex-element expression="v_F"></katex-element> 是费米速度</li>
            <li><katex-element expression="\Delta_0"></katex-element> 是超导能隙</li>
            <li>典型值：<katex-element expression="\xi_0 \sim 10^3 - 10^4"></katex-element> Å</li>
          </ul>
        </div>
        
        <div class="subsection">
          <h3>Cooper对的"尺寸"</h3>
          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>参数</th>
                  <th>典型值</th>
                  <th>物理意义</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>相干长度 <katex-element expression="\xi_0"></katex-element></td>
                  <td>1000-10000 Å</td>
                  <td>Cooper对的空间尺度</td>
                </tr>
                <tr>
                  <td>晶格常数 <katex-element expression="a"></katex-element></td>
                  <td>2-5 Å</td>
                  <td>原子间距</td>
                </tr>
                <tr>
                  <td>比值 <katex-element expression="\xi_0/a"></katex-element></td>
                  <td>200-5000</td>
                  <td>Cooper对包含的原子数</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p class="insight">Cooper对是一个"松散"的束缚态，其尺寸远大于晶格常数，包含大量的其他Cooper对。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Cooper对形成的物理图像</h2>
      <div class="physics-card">
        <h3>声子介导的配对机制</h3>
        <div class="mechanism-description">
          <div class="step">
            <h4>1. 电子-声子相互作用</h4>
            <p>第一个电子与晶格相互作用，发射一个虚声子，在其周围产生局域的晶格畸变。</p>
          </div>
          
          <div class="step">
            <h4>2. 晶格极化</h4>
            <p>由于电子-离子的库仑吸引，正离子向电子聚集，形成局域的正电荷密度增强区域。</p>
          </div>
          
          <div class="step">
            <h4>3. 第二电子的吸引</h4>
            <p>第二个电子被这个正电荷区域吸引，吸收虚声子，与第一个电子形成间接的吸引相互作用。</p>
          </div>
          
          <div class="step">
            <h4>4. 净吸引效应</h4>
            <p>当声子介导的吸引超过库仑排斥时，两个电子形成Cooper对。</p>
          </div>
        </div>
        
        <div class="condition-box">
          <h3>配对条件</h3>
          <p>Cooper对形成的必要条件：</p>
          <ul>
            <li><strong>费米面不稳定性</strong>：费米海对配对相互作用不稳定</li>
            <li><strong>吸引相互作用</strong>：净相互作用必须是吸引的</li>
            <li><strong>相位空间限制</strong>：泡利不相容原理限制散射过程</li>
            <li><strong>能量条件</strong>：<katex-element expression="\hbar\omega_D > k_B T"></katex-element>（绝热近似）</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Cooper对与BCS理论的联系</h2>
      <div class="connection-card">
        <p>Cooper对的发现为BCS理论奠定了基础：</p>
        
        <div class="bcs-connection">
          <h3>从Cooper对到BCS基态</h3>
          <ul>
            <li><strong>多体效应</strong>：BCS理论考虑了所有电子同时配对的多体效应</li>
            <li><strong>自洽性</strong>：配对振幅通过自洽方程确定</li>
            <li><strong>能隙</strong>：Cooper对的束缚能演化为超导能隙</li>
            <li><strong>相干性</strong>：所有Cooper对具有相同的相位</li>
          </ul>
        </div>
        
        <div class="formula-connection">
          <h3>关键参数的对应关系</h3>
          <div class="parameter-table">
            <table>
              <thead>
                <tr>
                  <th>Cooper问题</th>
                  <th>BCS理论</th>
                  <th>物理意义</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><katex-element expression="E/2"></katex-element></td>
                  <td><katex-element expression="\Delta_0"></katex-element></td>
                  <td>配对能隙</td>
                </tr>
                <tr>
                  <td><katex-element expression="g(\mathbf{k})"></katex-element></td>
                  <td><katex-element expression="\Delta_{\mathbf{k}}"></katex-element></td>
                  <td>配对振幅</td>
                </tr>
                <tr>
                  <td><katex-element expression="V N(0)"></katex-element></td>
                  <td><katex-element expression="\lambda"></katex-element></td>
                  <td>耦合常数</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验验证与应用</h2>
      <div class="experimental-card">
        <h3>Cooper对的实验证据</h3>
        <div class="evidence-list">
          <div class="evidence-item">
            <h4>1. 同位素效应</h4>
            <p><katex-element expression="T_c \propto M^{-1/2}"></katex-element>，证明了声子在配对中的作用</p>
          </div>
          
          <div class="evidence-item">
            <h4>2. 隧道谱学</h4>
            <p>直接观测到超导能隙和准粒子激发谱</p>
          </div>
          
          <div class="evidence-item">
            <h4>3. 约瑟夫森效应</h4>
            <p>证明了Cooper对的玻色子性质和宏观量子相干性</p>
          </div>
          
          <div class="evidence-item">
            <h4>4. 磁通量子化</h4>
            <p><katex-element expression="\Phi_0 = h/2e"></katex-element>，证明了载流子为电荷 <katex-element expression="2e"></katex-element> 的Cooper对</p>
          </div>
        </div>
        
        <div class="applications">
          <h3>Cooper对的应用</h3>
          <ul>
            <li><strong>超导电子学</strong>：约瑟夫森器件、SQUID</li>
            <li><strong>量子计算</strong>：超导量子比特</li>
            <li><strong>精密测量</strong>：磁场、电压标准</li>
            <li><strong>能源技术</strong>：超导电缆、储能系统</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_4_1',
  mounted() {
    // 确保KaTeX正确渲染
    this.$nextTick(() => {
      if (window.renderMathInElement) {
        window.renderMathInElement(this.$el);
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

.chapter-title {
  font-size: 2.5em;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
}

.content-section {
  margin-bottom: 30px;
}

.content-section h2 {
  font-size: 1.8em;
  color: #34495e;
  margin-bottom: 20px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

.concept-card, .theory-card, .model-card, .result-card, .structure-card, .physics-card, .connection-card, .experimental-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #3498db;
}

.theory-card {
  border-left-color: #e74c3c;
  background: linear-gradient(135deg, #fdf2f2 0%, #fce4ec 100%);
}

.model-card {
  border-left-color: #f39c12;
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
}

.result-card {
  border-left-color: #27ae60;
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
}

.structure-card {
  border-left-color: #9b59b6;
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.physics-card {
  border-left-color: #e67e22;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
}

.connection-card {
  border-left-color: #1abc9c;
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
}

.experimental-card {
  border-left-color: #34495e;
  background: linear-gradient(135deg, #eceff1 0%, #cfd8dc 100%);
}

.formula-display {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  text-align: center;
  border: 1px solid #ddd;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

.formula-display.highlight {
  background: linear-gradient(135deg, #fff9c4 0%, #f4f4a1 100%);
  border: 2px solid #f39c12;
  font-weight: bold;
}

.key-points, .explanation {
  background: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.key-points h3, .explanation h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.key-points ul, .explanation ul {
  margin: 10px 0;
  padding-left: 20px;
}

.key-points li, .explanation li {
  margin-bottom: 8px;
}

.subsection {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #ddd;
}

.subsection h3 {
  color: #2c3e50;
  font-size: 1.3em;
  margin-bottom: 15px;
}

.key-insight {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border: 2px solid #4caf50;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  font-weight: bold;
  color: #2e7d32;
}

.comparison-table, .parameter-table {
  margin: 20px 0;
}

.comparison-table table, .parameter-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comparison-table th, .comparison-table td,
.parameter-table th, .parameter-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.comparison-table th, .parameter-table th {
  background: #3498db;
  color: white;
  font-weight: bold;
}

.comparison-table tr:hover, .parameter-table tr:hover {
  background: #f5f5f5;
}

.insight {
  font-style: italic;
  color: #7f8c8d;
  margin-top: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

.mechanism-description {
  margin: 20px 0;
}

.step {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.step h4 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.condition-box {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 2px solid #f39c12;
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
}

.condition-box h3 {
  color: #e67e22;
  margin-bottom: 15px;
}

.bcs-connection {
  margin: 20px 0;
}

.bcs-connection h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.evidence-list {
  margin: 20px 0;
}

.evidence-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.evidence-item h4 {
  color: #27ae60;
  margin-bottom: 8px;
}

.applications {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.applications h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.applications ul {
  list-style-type: none;
  padding: 0;
}

.applications li {
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #9b59b6;
}

.applications li strong {
  color: #8e44ad;
}
</style>