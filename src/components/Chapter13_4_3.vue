<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.4.3 平均场近似</h1>
    
    <div class="content-section">
      <h2>平均场近似的基本思想</h2>
      <div class="concept-card">
        <p>平均场近似（Mean Field Approximation）是处理多体相互作用系统的重要方法。在BCS理论中，平均场近似将复杂的多体配对相互作用简化为单粒子在有效场中的运动。</p>
        
        <div class="key-points">
          <h3>平均场近似的核心思想：</h3>
          <ul>
            <li><strong>多体→单体</strong>：将多体问题分解为单体问题</li>
            <li><strong>自洽性</strong>：有效场由系统自身的平均性质决定</li>
            <li><strong>对称性破缺</strong>：允许基态破坏某些对称性</li>
            <li><strong>变分原理</strong>：寻找能量最低的试探态</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>BCS相互作用项的平均场处理</h2>
      <div class="theory-card">
        <p>BCS哈密顿量中的相互作用项：</p>
        
        <div class="formula-display">
          <katex-element expression="H_{int} = \sum_{\mathbf{k},\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow}"></katex-element>
        </div>
        
        <div class="subsection">
          <h3>配对场的引入</h3>
          <p>定义配对场（超导序参量）：</p>
          <div class="formula-display">
            <katex-element expression="\Delta_{\mathbf{k}} = -\sum_{\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} \langle c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} \rangle"></katex-element>
          </div>
          
          <div class="explanation">
            <p>其中：</p>
            <ul>
              <li><katex-element expression="\Delta_{\mathbf{k}}"></katex-element> 是动量相关的配对振幅</li>
              <li><katex-element expression="\langle \cdots \rangle"></katex-element> 表示在BCS基态中的期望值</li>
              <li>负号来自于费米子的反对易关系</li>
            </ul>
          </div>
        </div>
        
        <div class="subsection">
          <h3>平均场分解</h3>
          <p>将四算符乘积分解为两算符乘积的平均值：</p>
          <div class="formula-display">
            <katex-element expression="c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} \approx \langle c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger \rangle c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} + c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger \langle c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} \rangle - \langle c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger \rangle \langle c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} \rangle"></katex-element>
          </div>
          
          <p>忽略最后一项（常数项），得到：</p>
          <div class="formula-display">
            <katex-element expression="H_{int}^{MF} = \sum_{\mathbf{k}} \left[ \Delta_{\mathbf{k}}^* c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger + \Delta_{\mathbf{k}} c_{-\mathbf{k}\downarrow} c_{\mathbf{k}\uparrow} \right]"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>BCS平均场哈密顿量</h2>
      <div class="hamiltonian-card">
        <p>完整的BCS平均场哈密顿量为：</p>
        
        <div class="formula-display highlight">
          <katex-element expression="H_{MF} = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} c_{\mathbf{k}\sigma}^\dagger c_{\mathbf{k}\sigma} + \sum_{\mathbf{k}} \left[ \Delta_{\mathbf{k}}^* c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger + \Delta_{\mathbf{k}} c_{-\mathbf{k}\downarrow} c_{\mathbf{k}\uparrow} \right]"></katex-element>
        </div>
        
        <div class="matrix-form">
          <h3>矩阵形式</h3>
          <p>对于每个动量 <katex-element expression="\mathbf{k}"></katex-element>，哈密顿量可以写成矩阵形式：</p>
          
          <div class="formula-display">
            <katex-element expression="H_{\mathbf{k}} = \begin{pmatrix} c_{\mathbf{k}\uparrow}^\dagger & c_{-\mathbf{k}\downarrow} \end{pmatrix} \begin{pmatrix} \epsilon_{\mathbf{k}} & \Delta_{\mathbf{k}}^* \\ \Delta_{\mathbf{k}} & -\epsilon_{\mathbf{k}} \end{pmatrix} \begin{pmatrix} c_{\mathbf{k}\uparrow} \\ c_{-\mathbf{k}\downarrow}^\dagger \end{pmatrix}"></katex-element>
          </div>
          
          <p>这个 <katex-element expression="2 \times 2"></katex-element> 矩阵被称为BCS哈密顿量矩阵。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>Bogoliubov变换</h2>
      <div class="transformation-card">
        <p>为了对角化BCS哈密顿量，引入Bogoliubov变换，定义准粒子算符：</p>
        
        <div class="formula-display">
          <katex-element expression="\begin{pmatrix} \gamma_{\mathbf{k}\uparrow} \\ \gamma_{-\mathbf{k}\downarrow}^\dagger \end{pmatrix} = \begin{pmatrix} u_{\mathbf{k}} & v_{\mathbf{k}} \\ -v_{\mathbf{k}}^* & u_{\mathbf{k}}^* \end{pmatrix} \begin{pmatrix} c_{\mathbf{k}\uparrow} \\ c_{-\mathbf{k}\downarrow}^\dagger \end{pmatrix}"></katex-element>
        </div>
        
        <div class="transformation-properties">
          <h3>变换的性质：</h3>
          <ul>
            <li><strong>幺正性</strong>：<katex-element expression="|u_{\mathbf{k}}|^2 + |v_{\mathbf{k}}|^2 = 1"></katex-element></li>
            <li><strong>费米子性</strong>：<katex-element expression="\{\gamma_{\mathbf{k}\sigma}, \gamma_{\mathbf{k}'\sigma'}^\dagger\} = \delta_{\mathbf{k},\mathbf{k}'}\delta_{\sigma,\sigma'}"></katex-element></li>
            <li><strong>对角化</strong>：使哈密顿量对角化</li>
          </ul>
        </div>
        
        <div class="subsection">
          <h3>对角化条件</h3>
          <p>要求变换后的哈密顿量对角化，得到：</p>
          
          <div class="formula-display">
            <katex-element expression="u_{\mathbf{k}} = \frac{1}{\sqrt{2}} \sqrt{1 + \frac{\epsilon_{\mathbf{k}}}{E_{\mathbf{k}}}}"></katex-element>
          </div>
          
          <div class="formula-display">
            <katex-element expression="v_{\mathbf{k}} = \frac{\Delta_{\mathbf{k}}^*}{|\Delta_{\mathbf{k}}|} \frac{1}{\sqrt{2}} \sqrt{1 - \frac{\epsilon_{\mathbf{k}}}{E_{\mathbf{k}}}}"></katex-element>
          </div>
          
          <p>其中准粒子能量为：</p>
          <div class="formula-display">
            <katex-element expression="E_{\mathbf{k}} = \sqrt{\epsilon_{\mathbf{k}}^2 + |\Delta_{\mathbf{k}}|^2}"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>对角化后的哈密顿量</h2>
      <div class="diagonal-card">
        <p>经过Bogoliubov变换后，哈密顿量变为：</p>
        
        <div class="formula-display highlight">
          <katex-element expression="H_{MF} = \sum_{\mathbf{k}} E_{\mathbf{k}} \left( \gamma_{\mathbf{k}\uparrow}^\dagger \gamma_{\mathbf{k}\uparrow} + \gamma_{-\mathbf{k}\downarrow}^\dagger \gamma_{-\mathbf{k}\downarrow} \right) + E_0"></katex-element>
        </div>
        
        <div class="ground-state-energy">
          <h3>基态能量</h3>
          <p>基态能量为：</p>
          <div class="formula-display">
            <katex-element expression="E_0 = \sum_{\mathbf{k}} \left( \epsilon_{\mathbf{k}} - E_{\mathbf{k}} \right) = -\sum_{\mathbf{k}} \frac{|\Delta_{\mathbf{k}}|^2}{2E_{\mathbf{k}}}"></katex-element>
          </div>
        </div>
        
        <div class="quasiparticle-interpretation">
          <h3>准粒子图像</h3>
          <div class="interpretation-item">
            <h4>1. 准粒子激发</h4>
            <p><katex-element expression="\gamma_{\mathbf{k}\sigma}^\dagger"></katex-element> 创造能量为 <katex-element expression="E_{\mathbf{k}}"></katex-element> 的准粒子激发</p>
          </div>
          
          <div class="interpretation-item">
            <h4>2. 能隙结构</h4>
            <p>最低激发能量为 <katex-element expression="\min_{\mathbf{k}} E_{\mathbf{k}} = |\Delta_{\mathbf{k}}|_{\min}"></katex-element></p>
          </div>
          
          <div class="interpretation-item">
            <h4>3. 粒子-空穴混合</h4>
            <p>准粒子是电子和空穴的相干叠加</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>自洽方程</h2>
      <div class="self-consistent-card">
        <p>配对场必须满足自洽条件：</p>
        
        <div class="formula-display highlight">
          <katex-element expression="\Delta_{\mathbf{k}} = -\sum_{\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} \langle c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} \rangle"></katex-element>
        </div>
        
        <div class="subsection">
          <h3>配对振幅的计算</h3>
          <p>在BCS基态中：</p>
          <div class="formula-display">
            <katex-element expression="\langle c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow} \rangle = u_{\mathbf{k}'} v_{\mathbf{k}'}^*"></katex-element>
          </div>
          
          <p>代入自洽条件：</p>
          <div class="formula-display">
            <katex-element expression="\Delta_{\mathbf{k}} = -\sum_{\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} \frac{\Delta_{\mathbf{k}'}}{2E_{\mathbf{k}'}}"></katex-element>
          </div>
        </div>
        
        <div class="subsection">
          <h3>常数相互作用近似</h3>
          <p>在常数相互作用近似下：</p>
          <div class="formula-display">
            <katex-element expression="V_{\mathbf{k},\mathbf{k}'} = \begin{cases} -V & \text{if } |\epsilon_{\mathbf{k}}|, |\epsilon_{\mathbf{k}'}| < \hbar\omega_D \\ 0 & \text{otherwise} \end{cases}"></katex-element>
          </div>
          
          <p>配对场变为常数 <katex-element expression="\Delta_{\mathbf{k}} = \Delta"></katex-element>，自洽方程简化为：</p>
          <div class="formula-display">
            <katex-element expression="1 = \frac{V}{2} \sum_{|\epsilon_{\mathbf{k}}| < \hbar\omega_D} \frac{1}{E_{\mathbf{k}}} = \frac{V}{2} \sum_{|\epsilon_{\mathbf{k}}| < \hbar\omega_D} \frac{1}{\sqrt{\epsilon_{\mathbf{k}}^2 + \Delta^2}}"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>能隙方程的求解</h2>
      <div class="gap-equation-card">
        <p>将求和转换为积分，引入态密度 <katex-element expression="N(0)"></katex-element>：</p>
        
        <div class="formula-display">
          <katex-element expression="1 = V N(0) \int_0^{\hbar\omega_D} \frac{d\epsilon}{\sqrt{\epsilon^2 + \Delta^2}}"></katex-element>
        </div>
        
        <div class="solution-steps">
          <h3>求解步骤：</h3>
          
          <div class="step">
            <h4>1. 积分计算</h4>
            <div class="formula-display">
              <katex-element expression="\int_0^{\hbar\omega_D} \frac{d\epsilon}{\sqrt{\epsilon^2 + \Delta^2}} = \ln\left(\frac{\hbar\omega_D + \sqrt{(\hbar\omega_D)^2 + \Delta^2}}{\Delta}\right)"></katex-element>
            </div>
          </div>
          
          <div class="step">
            <h4>2. 弱耦合极限</h4>
            <p>当 <katex-element expression="\Delta \ll \hbar\omega_D"></katex-element> 时：</p>
            <div class="formula-display">
              <katex-element expression="1 = V N(0) \ln\left(\frac{2\hbar\omega_D}{\Delta}\right)"></katex-element>
            </div>
          </div>
          
          <div class="step">
            <h4>3. 能隙解</h4>
            <div class="formula-display highlight">
              <katex-element expression="\Delta_0 = 2\hbar\omega_D e^{-1/VN(0)}"></katex-element>
            </div>
          </div>
        </div>
        
        <div class="physical-meaning">
          <h3>物理意义：</h3>
          <ul>
            <li><strong>指数依赖</strong>：能隙对耦合强度呈指数依赖</li>
            <li><strong>非解析性</strong>：在 <katex-element expression="V = 0"></katex-element> 处不解析</li>
            <li><strong>弱耦合有效</strong>：即使很弱的吸引相互作用也能产生有限能隙</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>平均场近似的有效性</h2>
      <div class="validity-card">
        <h3>近似的适用条件</h3>
        
        <div class="condition-item">
          <h4>1. 弱耦合条件</h4>
          <p><katex-element expression="VN(0) \ll 1"></katex-element>，相互作用强度较弱</p>
        </div>
        
        <div class="condition-item">
          <h4>2. 长程相干性</h4>
          <p>Cooper对尺寸 <katex-element expression="\xi_0 \gg a"></katex-element>（晶格常数）</p>
        </div>
        
        <div class="condition-item">
          <h4>3. 低温条件</h4>
          <p><katex-element expression="k_B T \ll \Delta_0"></katex-element>，热涨落较小</p>
        </div>
        
        <div class="condition-item">
          <h4>4. 三维系统</h4>
          <p>低维系统中涨落效应更重要</p>
        </div>
        
        <div class="limitations">
          <h3>近似的局限性：</h3>
          <ul>
            <li><strong>忽略涨落</strong>：没有考虑配对场的量子涨落</li>
            <li><strong>均匀近似</strong>：假设系统空间均匀</li>
            <li><strong>基态近似</strong>：主要适用于基态和低激发态</li>
            <li><strong>弱耦合限制</strong>：强耦合系统需要更精确的方法</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>平均场理论的成功与发展</h2>
      <div class="success-card">
        <h3>理论成就</h3>
        
        <div class="achievement-list">
          <div class="achievement-item">
            <h4>1. 定量预言</h4>
            <p>准确预言了超导体的热力学和输运性质</p>
          </div>
          
          <div class="achievement-item">
            <h4>2. 普适关系</h4>
            <p>建立了 <katex-element expression="2\Delta_0/k_B T_c = 3.53"></katex-element> 等普适关系</p>
          </div>
          
          <div class="achievement-item">
            <h4>3. 实验验证</h4>
            <p>隧道谱学等实验直接验证了能隙结构</p>
          </div>
          
          <div class="achievement-item">
            <h4>4. 理论框架</h4>
            <p>为其他有序相的研究提供了理论模板</p>
          </div>
        </div>
        
        <div class="extensions">
          <h3>理论发展：</h3>
          <ul>
            <li><strong>强耦合理论</strong>：Eliashberg理论</li>
            <li><strong>非常规超导</strong>：d波、p波配对</li>
            <li><strong>多带超导</strong>：多轨道系统</li>
            <li><strong>非均匀系统</strong>：Bogoliubov-de Gennes方程</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_4_3',
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
  border-bottom: 3px solid #27ae60;
  padding-bottom: 10px;
}

.content-section {
  margin-bottom: 30px;
}

.content-section h2 {
  font-size: 1.8em;
  color: #34495e;
  margin-bottom: 20px;
  border-left: 4px solid #27ae60;
  padding-left: 15px;
}

.concept-card, .theory-card, .hamiltonian-card, .transformation-card, .diagonal-card,
.self-consistent-card, .gap-equation-card, .validity-card, .success-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #27ae60;
}

.theory-card {
  border-left-color: #3498db;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
}

.hamiltonian-card {
  border-left-color: #e74c3c;
  background: linear-gradient(135deg, #fdf2f2 0%, #fce4ec 100%);
}

.transformation-card {
  border-left-color: #9b59b6;
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.diagonal-card {
  border-left-color: #f39c12;
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
}

.self-consistent-card {
  border-left-color: #e67e22;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
}

.gap-equation-card {
  border-left-color: #1abc9c;
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
}

.validity-card {
  border-left-color: #34495e;
  background: linear-gradient(135deg, #eceff1 0%, #cfd8dc 100%);
}

.success-card {
  border-left-color: #8e44ad;
  background: linear-gradient(135deg, #f8f4ff 0%, #ede7f6 100%);
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

.key-points, .explanation, .transformation-properties {
  background: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.key-points h3, .explanation h3, .transformation-properties h3 {
  color: #2c3e50;
  margin-bottom: 10px;
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

.matrix-form {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid #e74c3c;
}

.ground-state-energy, .quasiparticle-interpretation {
  margin-top: 20px;
}

.interpretation-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
}

.interpretation-item h4 {
  color: #e67e22;
  margin-bottom: 8px;
}

.solution-steps {
  margin: 20px 0;
}

.step {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #1abc9c;
}

.step h4 {
  color: #16a085;
  margin-bottom: 10px;
}

.physical-meaning {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.physical-meaning h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.condition-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #34495e;
}

.condition-item h4 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.limitations {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.limitations h3 {
  color: #e74c3c;
  margin-bottom: 15px;
}

.achievement-list {
  margin: 20px 0;
}

.achievement-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #8e44ad;
}

.achievement-item h4 {
  color: #7d3c98;
  margin-bottom: 8px;
}

.extensions {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.extensions h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.extensions ul {
  list-style-type: none;
  padding: 0;
}

.extensions li {
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  padding: 12px;
  border-radius: 6px;
  border-left: 4px solid #9b59b6;
}

.extensions li strong {
  color: #8e44ad;
}
</style>