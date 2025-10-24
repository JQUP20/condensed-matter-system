<template>
  <div class="chapter-content">
    <h1 class="chapter-title">13.4.2 BCS哈密顿量</h1>
    
    <div class="content-section">
      <h2>BCS理论的基本思想</h2>
      <div class="concept-card">
        <p>BCS理论由Bardeen、Cooper和Schrieffer在1957年提出，是描述超导现象的微观量子理论。该理论的核心思想是将Cooper对问题推广到多体系统，考虑所有电子同时配对的效应。</p>
        
        <div class="key-points">
          <h3>BCS理论的基本假设：</h3>
          <ul>
            <li><strong>配对假设</strong>：电子通过声子交换形成Cooper对</li>
            <li><strong>弱耦合近似</strong>：电子-声子耦合强度较弱</li>
            <li><strong>绝热近似</strong>：电子运动比声子快得多</li>
            <li><strong>平均场近似</strong>：用平均场代替多体相互作用</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>完整的BCS哈密顿量</h2>
      <div class="theory-card">
        <p>BCS哈密顿量包含电子的动能项和电子-电子相互作用项：</p>
        
        <div class="formula-display">
          <katex-element expression="H_{BCS} = H_0 + H_{int}"></katex-element>
        </div>
        
        <div class="subsection">
          <h3>1. 自由电子哈密顿量</h3>
          <div class="formula-display">
            <katex-element expression="H_0 = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} c_{\mathbf{k}\sigma}^\dagger c_{\mathbf{k}\sigma}"></katex-element>
          </div>
          
          <div class="explanation">
            <p>其中：</p>
            <ul>
              <li><katex-element expression="\epsilon_{\mathbf{k}} = \frac{\hbar^2 k^2}{2m} - \mu"></katex-element> 是相对于化学势的单粒子能量</li>
              <li><katex-element expression="c_{\mathbf{k}\sigma}^\dagger, c_{\mathbf{k}\sigma}"></katex-element> 是动量 <katex-element expression="\mathbf{k}"></katex-element>、自旋 <katex-element expression="\sigma"></katex-element> 的电子产生和湮灭算符</li>
              <li><katex-element expression="\mu"></katex-element> 是化学势</li>
            </ul>
          </div>
        </div>
        
        <div class="subsection">
          <h3>2. 相互作用哈密顿量</h3>
          <div class="formula-display">
            <katex-element expression="H_{int} = \sum_{\mathbf{k},\mathbf{k}',\mathbf{q}} V_{\mathbf{k},\mathbf{k}'}(\mathbf{q}) c_{\mathbf{k}+\mathbf{q}\uparrow}^\dagger c_{\mathbf{k}'-\mathbf{q}\downarrow}^\dagger c_{\mathbf{k}'\downarrow} c_{\mathbf{k}\uparrow}"></katex-element>
          </div>
          
          <p>这里 <katex-element expression="V_{\mathbf{k},\mathbf{k}'}(\mathbf{q})"></katex-element> 是电子-电子相互作用矩阵元，包含直接库仑相互作用和声子介导的相互作用。</p>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>简化的BCS哈密顿量</h2>
      <div class="model-card">
        <p>在BCS近似下，只考虑费米面附近的配对散射过程，哈密顿量简化为：</p>
        
        <div class="formula-display highlight">
          <katex-element expression="H_{BCS} = \sum_{\mathbf{k},\sigma} \epsilon_{\mathbf{k}} c_{\mathbf{k}\sigma}^\dagger c_{\mathbf{k}\sigma} + \sum_{\mathbf{k},\mathbf{k}'} V_{\mathbf{k},\mathbf{k}'} c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger c_{-\mathbf{k}'\downarrow} c_{\mathbf{k}'\uparrow}"></katex-element>
        </div>
        
        <div class="key-assumptions">
          <h3>简化的关键假设：</h3>
          <ul>
            <li><strong>配对限制</strong>：只考虑 <katex-element expression="(\mathbf{k}\uparrow, -\mathbf{k}\downarrow)"></katex-element> 配对</li>
            <li><strong>动量守恒</strong>：散射过程保持总动量为零</li>
            <li><strong>能量窗口</strong>：相互作用只在费米面附近有效</li>
            <li><strong>常数近似</strong>：相互作用矩阵元近似为常数</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>相互作用矩阵元</h2>
      <div class="interaction-card">
        <h3>电子-声子相互作用的微观起源</h3>
        <p>电子-电子的有效相互作用来自于电子-声子耦合：</p>
        
        <div class="formula-display">
          <katex-element expression="V_{\mathbf{k},\mathbf{k}'} = V_{Coulomb} + V_{phonon}"></katex-element>
        </div>
        
        <div class="subsection">
          <h3>1. 库仑相互作用</h3>
          <div class="formula-display">
            <katex-element expression="V_{Coulomb} = \frac{e^2}{4\pi\epsilon_0\epsilon_r |\mathbf{k} - \mathbf{k}'|}"></katex-element>
          </div>
          <p>库仑相互作用是排斥的，不利于配对。</p>
        </div>
        
        <div class="subsection">
          <h3>2. 声子介导的相互作用</h3>
          <div class="formula-display">
            <katex-element expression="V_{phonon} = -\sum_{\mathbf{q},\nu} \frac{|g_{\mathbf{q}\nu}|^2 \omega_{\mathbf{q}\nu}}{(\epsilon_{\mathbf{k}} - \epsilon_{\mathbf{k}'})^2 - (\hbar\omega_{\mathbf{q}\nu})^2}"></katex-element>
          </div>
          
          <div class="explanation">
            <p>其中：</p>
            <ul>
              <li><katex-element expression="g_{\mathbf{q}\nu}"></katex-element> 是电子-声子耦合常数</li>
              <li><katex-element expression="\omega_{\mathbf{q}\nu}"></katex-element> 是声子频率</li>
              <li><katex-element expression="\nu"></katex-element> 是声子支标</li>
            </ul>
          </div>
        </div>
        
        <div class="net-interaction">
          <h3>净相互作用</h3>
          <p>当声子介导的吸引超过库仑排斥时，净相互作用变为吸引性：</p>
          <div class="condition-box">
            <katex-element expression="|V_{phonon}| > |V_{Coulomb}| \Rightarrow V_{eff} < 0"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>常数相互作用近似</h2>
      <div class="approximation-card">
        <p>为了简化计算，BCS理论采用常数相互作用近似：</p>
        
        <div class="formula-display">
          <katex-element expression="V_{\mathbf{k},\mathbf{k}'} = \begin{cases} -V & \text{if } |\epsilon_{\mathbf{k}}|, |\epsilon_{\mathbf{k}'}| < \hbar\omega_D \\ 0 & \text{otherwise} \end{cases}"></katex-element>
        </div>
        
        <div class="parameters">
          <h3>模型参数：</h3>
          <ul>
            <li><katex-element expression="V > 0"></katex-element>：有效吸引相互作用强度</li>
            <li><katex-element expression="\hbar\omega_D"></katex-element>：德拜截止能量</li>
            <li>相互作用只在费米面附近的能量窗口内有效</li>
          </ul>
        </div>
        
        <div class="justification">
          <h3>近似的合理性：</h3>
          <div class="reason-list">
            <div class="reason-item">
              <h4>1. 能量尺度分离</h4>
              <p><katex-element expression="\hbar\omega_D \ll E_F"></katex-element>，声子能量远小于费米能</p>
            </div>
            
            <div class="reason-item">
              <h4>2. 配对主要发生在费米面附近</h4>
              <p>泡利不相容原理限制了散射的相位空间</p>
            </div>
            
            <div class="reason-item">
              <h4>3. 弱耦合条件</h4>
              <p><katex-element expression="VN(0) \ll 1"></katex-element>，相互作用强度较弱</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>BCS哈密顿量的对称性</h2>
      <div class="symmetry-card">
        <h3>重要的对称性质</h3>
        
        <div class="symmetry-item">
          <h4>1. 粒子-空穴对称性</h4>
          <p>在半满填充附近，哈密顿量具有粒子-空穴对称性：</p>
          <div class="formula-display">
            <katex-element expression="H(\epsilon_{\mathbf{k}}) = H(-\epsilon_{\mathbf{k}})"></katex-element>
          </div>
        </div>
        
        <div class="symmetry-item">
          <h4>2. 时间反演对称性</h4>
          <p>Cooper对由时间反演对称的电子组成：</p>
          <div class="formula-display">
            <katex-element expression="|\mathbf{k}\uparrow, -\mathbf{k}\downarrow\rangle = \mathcal{T}|\mathbf{k}\uparrow, -\mathbf{k}\downarrow\rangle"></katex-element>
          </div>
        </div>
        
        <div class="symmetry-item">
          <h4>3. 规范对称性</h4>
          <p>哈密顿量在全局U(1)规范变换下不变：</p>
          <div class="formula-display">
            <katex-element expression="c_{\mathbf{k}\sigma} \rightarrow e^{i\phi} c_{\mathbf{k}\sigma}"></katex-element>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>BCS哈密顿量的本征值问题</h2>
      <div class="eigenvalue-card">
        <p>BCS哈密顿量的本征值问题是一个复杂的多体问题。直接对角化是不可能的，需要采用变分方法。</p>
        
        <div class="problem-structure">
          <h3>问题的复杂性：</h3>
          <ul>
            <li><strong>希尔伯特空间维数</strong>：<katex-element expression="2^N"></katex-element>（N为轨道数）</li>
            <li><strong>多体纠缠</strong>：所有电子都参与配对</li>
            <li><strong>非线性性</strong>：配对振幅需要自洽确定</li>
            <li><strong>对称性破缺</strong>：基态破坏粒子数守恒</li>
          </ul>
        </div>
        
        <div class="solution-strategy">
          <h3>解决策略：</h3>
          <div class="strategy-item">
            <h4>1. 变分原理</h4>
            <p>构造试探波函数，最小化能量期望值</p>
          </div>
          
          <div class="strategy-item">
            <h4>2. 平均场近似</h4>
            <p>将多体相互作用用平均场代替</p>
          </div>
          
          <div class="strategy-item">
            <h4>3. Bogoliubov变换</h4>
            <p>引入准粒子算符对角化哈密顿量</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>BCS基态的变分波函数</h2>
      <div class="wavefunction-card">
        <p>BCS基态波函数是所有可能Cooper对配置的相干叠加：</p>
        
        <div class="formula-display highlight">
          <katex-element expression="|\psi_{BCS}\rangle = \prod_{\mathbf{k}} (u_{\mathbf{k}} + v_{\mathbf{k}} c_{\mathbf{k}\uparrow}^\dagger c_{-\mathbf{k}\downarrow}^\dagger) |0\rangle"></katex-element>
        </div>
        
        <div class="wavefunction-parameters">
          <h3>波函数参数：</h3>
          <ul>
            <li><katex-element expression="u_{\mathbf{k}}"></katex-element>：<katex-element expression="(\mathbf{k}, -\mathbf{k})"></katex-element> 态为空的概率振幅</li>
            <li><katex-element expression="v_{\mathbf{k}}"></katex-element>：<katex-element expression="(\mathbf{k}, -\mathbf{k})"></katex-element> 态被占据的概率振幅</li>
            <li>归一化条件：<katex-element expression="|u_{\mathbf{k}}|^2 + |v_{\mathbf{k}}|^2 = 1"></katex-element></li>
          </ul>
        </div>
        
        <div class="physical-interpretation">
          <h3>物理解释：</h3>
          <div class="interpretation-item">
            <h4>占据概率</h4>
            <p><katex-element expression="|v_{\mathbf{k}}|^2"></katex-element> 是 <katex-element expression="(\mathbf{k}, -\mathbf{k})"></katex-element> Cooper对的占据概率</p>
          </div>
          
          <div class="interpretation-item">
            <h4>空态概率</h4>
            <p><katex-element expression="|u_{\mathbf{k}}|^2"></katex-element> 是 <katex-element expression="(\mathbf{k}, -\mathbf{k})"></katex-element> 态为空的概率</p>
          </div>
          
          <div class="interpretation-item">
            <h4>相干叠加</h4>
            <p>所有动量态的相干叠加产生宏观量子相干性</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>哈密顿量的物理意义</h2>
      <div class="physics-card">
        <h3>BCS哈密顿量的深层含义</h3>
        
        <div class="meaning-item">
          <h4>1. 多体关联</h4>
          <p>描述了电子之间的长程量子关联，这是超导现象的根源。</p>
        </div>
        
        <div class="meaning-item">
          <h4>2. 对称性破缺</h4>
          <p>基态自发破缺U(1)规范对称性，产生Goldstone模式。</p>
        </div>
        
        <div class="meaning-item">
          <h4>3. 宏观量子现象</h4>
          <p>微观的Cooper对配对导致宏观的量子相干性。</p>
        </div>
        
        <div class="meaning-item">
          <h4>4. 能隙的起源</h4>
          <p>配对相互作用在费米面处打开能隙，这是超导性质的关键。</p>
        </div>
        
        <div class="energy-scale">
          <h3>相关能量尺度：</h3>
          <div class="scale-table">
            <table>
              <thead>
                <tr>
                  <th>能量尺度</th>
                  <th>典型值</th>
                  <th>物理意义</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>费米能 <katex-element expression="E_F"></katex-element></td>
                  <td>1-10 eV</td>
                  <td>电子动能尺度</td>
                </tr>
                <tr>
                  <td>德拜能量 <katex-element expression="\hbar\omega_D"></katex-element></td>
                  <td>10-50 meV</td>
                  <td>声子能量尺度</td>
                </tr>
                <tr>
                  <td>超导能隙 <katex-element expression="\Delta_0"></katex-element></td>
                  <td>0.1-10 meV</td>
                  <td>配对能量尺度</td>
                </tr>
                <tr>
                  <td>临界温度 <katex-element expression="k_B T_c"></katex-element></td>
                  <td>0.01-10 meV</td>
                  <td>热涨落尺度</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>BCS哈密顿量的历史意义</h2>
      <div class="historical-card">
        <h3>理论物理学的里程碑</h3>
        
        <div class="achievement-list">
          <div class="achievement-item">
            <h4>1. 多体量子理论的成功</h4>
            <p>首次成功解决了强关联多体系统的基态问题</p>
          </div>
          
          <div class="achievement-item">
            <h4>2. 对称性破缺理论的先驱</h4>
            <p>为后来的规范理论和标准模型奠定了基础</p>
          </div>
          
          <div class="achievement-item">
            <h4>3. 凝聚态物理的范式</h4>
            <p>成为研究其他有序相的理论模板</p>
          </div>
          
          <div class="achievement-item">
            <h4>4. 实验预言的精确性</h4>
            <p>理论预言与实验结果的惊人一致性</p>
          </div>
        </div>
        
        <div class="nobel-prize">
          <h3>诺贝尔物理学奖（1972年）</h3>
          <p>Bardeen、Cooper和Schrieffer因BCS理论获得诺贝尔物理学奖，这是对其开创性贡献的认可。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_4_2',
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
  border-bottom: 3px solid #e74c3c;
  padding-bottom: 10px;
}

.content-section {
  margin-bottom: 30px;
}

.content-section h2 {
  font-size: 1.8em;
  color: #34495e;
  margin-bottom: 20px;
  border-left: 4px solid #e74c3c;
  padding-left: 15px;
}

.concept-card, .theory-card, .model-card, .interaction-card, .approximation-card, 
.symmetry-card, .eigenvalue-card, .wavefunction-card, .physics-card, .historical-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  padding: 25px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #e74c3c;
}

.theory-card {
  border-left-color: #3498db;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
}

.model-card {
  border-left-color: #f39c12;
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
}

.interaction-card {
  border-left-color: #9b59b6;
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
}

.approximation-card {
  border-left-color: #27ae60;
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
}

.symmetry-card {
  border-left-color: #e67e22;
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
}

.eigenvalue-card {
  border-left-color: #1abc9c;
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
}

.wavefunction-card {
  border-left-color: #34495e;
  background: linear-gradient(135deg, #eceff1 0%, #cfd8dc 100%);
}

.physics-card {
  border-left-color: #8e44ad;
  background: linear-gradient(135deg, #f8f4ff 0%, #ede7f6 100%);
}

.historical-card {
  border-left-color: #d35400;
  background: linear-gradient(135deg, #fdf6e3 0%, #f4e4bc 100%);
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

.key-points, .explanation, .key-assumptions, .parameters {
  background: rgba(255, 255, 255, 0.7);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.key-points h3, .explanation h3, .key-assumptions h3, .parameters h3 {
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

.net-interaction {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 2px solid #e74c3c;
}

.condition-box {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border: 2px solid #f39c12;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-weight: bold;
}

.justification {
  margin-top: 20px;
}

.reason-list {
  margin: 15px 0;
}

.reason-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.reason-item h4 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.symmetry-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #e67e22;
}

.symmetry-item h4 {
  color: #d35400;
  margin-bottom: 10px;
}

.problem-structure, .solution-strategy {
  margin: 20px 0;
}

.strategy-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #1abc9c;
}

.strategy-item h4 {
  color: #16a085;
  margin-bottom: 8px;
}

.wavefunction-parameters, .physical-interpretation {
  margin: 20px 0;
}

.interpretation-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #34495e;
}

.interpretation-item h4 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.meaning-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #8e44ad;
}

.meaning-item h4 {
  color: #7d3c98;
  margin-bottom: 8px;
}

.energy-scale {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 2px solid #ddd;
}

.scale-table {
  margin: 20px 0;
}

.scale-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.scale-table th, .scale-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.scale-table th {
  background: #8e44ad;
  color: white;
  font-weight: bold;
}

.scale-table tr:hover {
  background: #f5f5f5;
}

.achievement-list {
  margin: 20px 0;
}

.achievement-item {
  background: rgba(255, 255, 255, 0.8);
  margin: 15px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #d35400;
}

.achievement-item h4 {
  color: #d35400;
  margin-bottom: 8px;
}

.nobel-prize {
  background: linear-gradient(135deg, #fff9c4 0%, #f4f4a1 100%);
  border: 2px solid #f39c12;
  border-radius: 8px;
  padding: 20px;
  margin-top: 25px;
  text-align: center;
}

.nobel-prize h3 {
  color: #e67e22;
  margin-bottom: 15px;
}
</style>