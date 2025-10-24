<template>
  <div class="chapter-content">
    <header class="chapter-header">
      <h1>16.2.1 规范场的引入</h1>
      <p class="chapter-subtitle">从约束条件到规范对称性：规范场的自然产生与物理意义</p>
    </header>

    <section class="content-section">
      <h2>🎯 规范场产生的动机</h2>
      <div class="motivation-grid">
        <div class="motivation-card">
          <div class="motivation-icon">🔗</div>
          <h3>约束条件的困难</h3>
          <div class="problem-description">
            <p><strong>核心问题：</strong>如何优雅地处理隶粒子约束</p>
            <div class="mathematical-content">
              <h4>原始约束：</h4>
              <katex-element expression="\sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i = 1"></katex-element>
              
              <h4>处理困难：</h4>
              <ul>
                <li>拉格朗日乘数方法复杂</li>
                <li>约束的动力学实施困难</li>
                <li>量子涨落的处理不清晰</li>
                <li>相变行为的描述复杂</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="motivation-card">
          <div class="motivation-icon">🌟</div>
          <h3>规范场的优势</h3>
          <div class="advantage-description">
            <p><strong>解决方案：</strong>引入规范场自然满足约束</p>
            <div class="advantage-list">
              <h4>规范场方法的优点：</h4>
              <ul>
                <li>约束自动满足</li>
                <li>物理图像清晰</li>
                <li>拓扑效应自然出现</li>
                <li>相变机制明确</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔧 规范场的构造</h2>
      
      <div class="construction-block">
        <h3>基本思路：参数化约束流形</h3>
        <div class="mathematical-content">
          <h4>约束流形的参数化：</h4>
          <div class="parametrization-steps">
            <div class="step-item">
              <div class="step-number">1</div>
              <div class="step-content">
                <h5>识别约束流形</h5>
                <katex-element expression="M = \{(f, b) : \sum_\sigma f_{i\sigma}^\dagger f_{i\sigma} + b_i^\dagger b_i = 1\}"></katex-element>
                <p>约束定义的流形M</p>
              </div>
            </div>
            
            <div class="step-item">
              <div class="step-number">2</div>
              <div class="step-content">
                <h5>选择参数化</h5>
                <katex-element expression="f_{i\sigma} = \tilde{f}_{i\sigma} \sqrt{1 - b_i^\dagger b_i}"></katex-element>
                <katex-element expression="b_i = \tilde{b}_i \sqrt{1 - \sum_\sigma \tilde{f}_{i\sigma}^\dagger \tilde{f}_{i\sigma}}"></katex-element>
                <p>引入辅助场 f̃, b̃</p>
              </div>
            </div>
            
            <div class="step-item">
              <div class="step-number">3</div>
              <div class="step-content">
                <h5>规范场出现</h5>
                <katex-element expression="c_{i\sigma} = f_{i\sigma} b_i^\dagger = \tilde{f}_{i\sigma} \tilde{b}_i^\dagger e^{i\theta_i}"></katex-element>
                <p>θᵢ 作为规范场自然出现</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="construction-block">
        <h3>标准规范场表示</h3>
        <div class="mathematical-content">
          <h4>规范场的引入：</h4>
          <katex-element expression="c_{i\sigma} = e^{i\theta_i} f_{i\sigma} b_i^\dagger"></katex-element>
          
          <div class="gauge-explanation">
            <h4>各项的物理意义：</h4>
            <div class="explanation-grid">
              <div class="explanation-item">
                <h5>费米子场 fᵢσ：</h5>
                <p>描述自旋激发</p>
                <p>满足费米统计</p>
                <p>携带自旋量子数</p>
              </div>
              
              <div class="explanation-item">
                <h5>玻色子场 bᵢ：</h5>
                <p>描述电荷激发</p>
                <p>满足玻色统计</p>
                <p>可以凝聚</p>
              </div>
              
              <div class="explanation-item">
                <h5>规范场 θᵢ：</h5>
                <p>局域相位自由度</p>
                <p>确保约束满足</p>
                <p>产生规范相互作用</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🎭 规范变换与不变性</h2>
      
      <div class="gauge-symmetry-container">
        <h3>规范变换的定义</h3>
        <div class="mathematical-content">
          <h4>局域规范变换：</h4>
          <div class="transformation-rules">
            <div class="rule-item">
              <h5>费米子变换：</h5>
              <katex-element expression="f_{i\sigma} \to e^{i\alpha_i} f_{i\sigma}"></katex-element>
            </div>
            
            <div class="rule-item">
              <h5>玻色子变换：</h5>
              <katex-element expression="b_i \to e^{-i\alpha_i} b_i"></katex-element>
            </div>
            
            <div class="rule-item">
              <h5>规范场变换：</h5>
              <katex-element expression="\theta_i \to \theta_i + \alpha_i"></katex-element>
            </div>
          </div>
          
          <h4>不变性验证：</h4>
          <katex-element expression="c_{i\sigma} = e^{i\theta_i} f_{i\sigma} b_i^\dagger \to e^{i(\theta_i + \alpha_i)} e^{i\alpha_i} f_{i\sigma} e^{i\alpha_i} b_i^\dagger = e^{i\theta_i} f_{i\sigma} b_i^\dagger"></katex-element>
          <p class="invariance-note">电子算符在规范变换下保持不变！</p>
        </div>
      </div>

      <div class="gauge-symmetry-container">
        <h3>规范不变性的物理意义</h3>
        <div class="physics-meaning-grid">
          <div class="meaning-card">
            <h4>🔄 冗余自由度</h4>
            <div class="meaning-content">
              <p><strong>核心思想：</strong>规范场θᵢ不是独立的物理自由度</p>
              <div class="example-box">
                <h5>类比：</h5>
                <ul>
                  <li><strong>电磁学：</strong>矢量势A的规范自由度</li>
                  <li><strong>量子力学：</strong>波函数的整体相位</li>
                  <li><strong>隶粒子：</strong>局域相位θᵢ的任意性</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="meaning-card">
            <h4>🎯 物理可观测量</h4>
            <div class="meaning-content">
              <p><strong>重要原则：</strong>只有规范不变量才是物理可观测的</p>
              <div class="observable-examples">
                <h5>规范不变的物理量：</h5>
                <ul>
                  <li>电子密度：⟨c†ᵢσcᵢσ⟩</li>
                  <li>自旋关联：⟨c†ᵢσcⱼσ⟩</li>
                  <li>配对振幅：⟨cᵢ↑cᵢ↓⟩</li>
                  <li>规范场强度：∇×θ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>⚡ 规范场的动力学</h2>
      
      <div class="dynamics-container">
        <h3>有效哈密顿量的构造</h3>
        <div class="mathematical-content">
          <h4>规范不变的哈密顿量：</h4>
          <katex-element expression="H = -t \sum_{\langle i,j \rangle, \sigma} e^{i(\theta_i - \theta_j)} f_{i\sigma}^\dagger b_i f_{j\sigma} b_j^\dagger + U \sum_i n_{f\uparrow} n_{f\downarrow}"></katex-element>
          
          <div class="hamiltonian-analysis">
            <h4>各项分析：</h4>
            <div class="term-grid">
              <div class="term-item">
                <h5>跳跃项：</h5>
                <katex-element expression="-t e^{i(\theta_i - \theta_j)} f_{i\sigma}^\dagger b_i f_{j\sigma} b_j^\dagger"></katex-element>
                <p>包含规范相位因子</p>
                <p>描述电子在规范场中的运动</p>
              </div>
              
              <div class="term-item">
                <h5>相互作用项：</h5>
                <katex-element expression="U n_{f\uparrow} n_{f\downarrow}"></katex-element>
                <p>规范不变的局域相互作用</p>
                <p>不直接涉及规范场</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dynamics-container">
        <h3>规范场的运动方程</h3>
        <div class="mathematical-content">
          <h4>从变分原理导出：</h4>
          <katex-element expression="\frac{\delta H}{\delta \theta_i} = 0"></katex-element>
          
          <h4>具体形式：</h4>
          <katex-element expression="it \sum_{j \in nn(i), \sigma} \left[ e^{i(\theta_i - \theta_j)} f_{i\sigma}^\dagger b_i f_{j\sigma} b_j^\dagger - e^{-i(\theta_i - \theta_j)} f_{j\sigma}^\dagger b_j f_{i\sigma} b_i^\dagger \right] = 0"></katex-element>
          
          <div class="equation-interpretation">
            <h4>物理解释：</h4>
            <p>规范场的配置由费米子和玻色子的分布自洽确定</p>
            <p>类似于电磁学中电荷分布决定电磁场</p>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🌊 平均场近似中的规范场</h2>
      
      <div class="mean-field-analysis">
        <h3>玻色子凝聚与规范选择</h3>
        <div class="mathematical-content">
          <h4>玻色子凝聚假设：</h4>
          <katex-element expression="\langle b_i \rangle = b_0 e^{i\phi_i}"></katex-element>
          
          <h4>规范选择的自由度：</h4>
          <div class="gauge-choice-options">
            <div class="choice-item">
              <h5>选择1：均匀规范</h5>
              <katex-element expression="\theta_i = 0, \quad \phi_i = 0"></katex-element>
              <p>最简单的规范选择</p>
            </div>
            
            <div class="choice-item">
              <h5>选择2：涡旋规范</h5>
              <katex-element expression="\theta_i = \arg(z_i - z_0), \quad \phi_i = -\arg(z_i - z_0)"></katex-element>
              <p>描述涡旋激发的规范</p>
            </div>
            
            <div class="choice-item">
              <h5>选择3：磁通规范</h5>
              <katex-element expression="\sum_{\square} (\theta_i - \theta_j) = 2\pi \Phi/\Phi_0"></katex-element>
              <p>包含磁通量的规范</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mean-field-analysis">
        <h3>有效费米子哈密顿量</h3>
        <div class="mathematical-content">
          <h4>平均场近似下：</h4>
          <katex-element expression="H_{eff} = -t_{eff} \sum_{\langle i,j \rangle, \sigma} e^{i A_{ij}} f_{i\sigma}^\dagger f_{j\sigma} + \mu_{eff} \sum_{i,\sigma} f_{i\sigma}^\dagger f_{i\sigma}"></katex-element>
          
          <div class="effective-parameters">
            <h4>有效参数：</h4>
            <div class="parameter-grid">
              <div class="parameter-item">
                <h5>有效跳跃：</h5>
                <katex-element expression="t_{eff} = t |b_0|^2"></katex-element>
                <p>由玻色子凝聚强度重整化</p>
              </div>
              
              <div class="parameter-item">
                <h5>规范场：</h5>
                <katex-element expression="A_{ij} = \theta_i - \theta_j + \phi_i - \phi_j"></katex-element>
                <p>包含规范场和凝聚相位</p>
              </div>
              
              <div class="parameter-item">
                <h5>化学势：</h5>
                <katex-element expression="\mu_{eff} = \lambda - U \langle n_{f,-\sigma} \rangle"></katex-element>
                <p>拉格朗日乘数和相互作用修正</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🎪 拓扑激发与规范场</h2>
      
      <div class="topological-excitations">
        <h3>涡旋激发</h3>
        <div class="mathematical-content">
          <h4>涡旋的规范场配置：</h4>
          <katex-element expression="\oint_C d\theta = 2\pi n"></katex-element>
          
          <div class="vortex-analysis">
            <h4>涡旋的特征：</h4>
            <div class="vortex-properties">
              <div class="property-item">
                <h5>🌀 拓扑荷</h5>
                <p>整数n表征涡旋强度</p>
                <p>拓扑保护的量子数</p>
              </div>
              
              <div class="property-item">
                <h5>⚡ 能量代价</h5>
                <katex-element expression="E_{vortex} \sim J \ln(L/\xi)"></katex-element>
                <p>对数发散的能量</p>
              </div>
              
              <div class="property-item">
                <h5>🎯 物理效应</h5>
                <p>费米子获得Berry相位</p>
                <p>影响输运性质</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="topological-excitations">
        <h3>磁通激发</h3>
        <div class="mathematical-content">
          <h4>磁通的规范场：</h4>
          <katex-element expression="\sum_{\square} A_{ij} = 2\pi \frac{\Phi}{\Phi_0}"></katex-element>
          
          <div class="flux-effects">
            <h4>磁通的物理效应：</h4>
            <ul>
              <li><strong>Aharonov-Bohm效应：</strong>费米子相位积累</li>
              <li><strong>能谱修正：</strong>磁通改变能带结构</li>
              <li><strong>霍尔效应：</strong>横向输运的产生</li>
              <li><strong>量子振荡：</strong>磁通量子化效应</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔬 实验观测与验证</h2>
      
      <div class="experimental-signatures">
        <h3>规范场效应的实验信号</h3>
        <div class="signature-grid">
          <div class="signature-card">
            <h4>🎯 输运测量</h4>
            <div class="signature-content">
              <h5>霍尔电导率：</h5>
              <katex-element expression="\sigma_{xy} = \frac{e^2}{h} \nu"></katex-element>
              <p>量子化的霍尔电导</p>
              
              <h5>磁阻效应：</h5>
              <p>规范场导致的负磁阻</p>
              <p>Shubnikov-de Haas振荡</p>
            </div>
          </div>

          <div class="signature-card">
            <h4>🔍 光谱学测量</h4>
            <div class="signature-content">
              <h5>ARPES谱：</h5>
              <p>费米面重构</p>
              <p>能带折叠效应</p>
              
              <h5>STM谱：</h5>
              <p>局域态密度调制</p>
              <p>涡旋核心态</p>
            </div>
          </div>

          <div class="signature-card">
            <h4>🧲 磁性测量</h4>
            <div class="signature-content">
              <h5>磁化率：</h5>
              <p>Pauli顺磁性修正</p>
              <p>de Haas-van Alphen效应</p>
              
              <h5>NMR/NQR：</h5>
              <p>Knight位移变化</p>
              <p>弛豫时间异常</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>🔗 与其他理论的联系</h2>
      
      <div class="theory-connections">
        <h3>规范理论的普遍性</h3>
        <div class="connection-grid">
          <div class="connection-card">
            <h4>🔬 高能物理</h4>
            <div class="connection-content">
              <h5>标准模型：</h5>
              <ul>
                <li>电弱统一理论</li>
                <li>量子色动力学</li>
                <li>Higgs机制</li>
              </ul>
            </div>
          </div>

          <div class="connection-card">
            <h4>🌊 凝聚态物理</h4>
            <div class="connection-content">
              <h5>其他规范理论：</h5>
              <ul>
                <li>量子自旋液体</li>
                <li>分数量子霍尔效应</li>
                <li>拓扑超导体</li>
              </ul>
            </div>
          </div>

          <div class="connection-card">
            <h4>🎭 数学物理</h4>
            <div class="connection-content">
              <h5>几何相位：</h5>
              <ul>
                <li>Berry相位</li>
                <li>Aharonov-Bohm效应</li>
                <li>拓扑不变量</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>📚 本节总结</h2>
      <div class="summary-container">
        <div class="summary-points">
          <div class="point-item">
            <div class="point-number">1</div>
            <div class="point-content">
              <h4>规范场起源</h4>
              <p>从约束条件的处理自然引入规范场θᵢ</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">2</div>
            <div class="point-content">
              <h4>规范不变性</h4>
              <p>局域规范变换保持物理可观测量不变</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">3</div>
            <div class="point-content">
              <h4>动力学效应</h4>
              <p>规范场修正费米子跳跃和产生拓扑激发</p>
            </div>
          </div>
          
          <div class="point-item">
            <div class="point-number">4</div>
            <div class="point-content">
              <h4>实验验证</h4>
              <p>输运、光谱和磁性测量可观测规范场效应</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter16_2_1',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-bottom: 2px solid #e3f2fd;
}

.chapter-header h1 {
  font-size: 2.5rem;
  color: #1565c0;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #546e7a;
  font-style: italic;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.8rem;
  color: #1976d2;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #bbdefb;
}

.motivation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.motivation-card {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #ff9800;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.motivation-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.motivation-card h3 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.problem-description p, .advantage-description p {
  margin-bottom: 1rem;
}

.mathematical-content {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.mathematical-content h4 {
  color: #424242;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.mathematical-content ul {
  list-style: none;
  padding: 0;
}

.mathematical-content li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.mathematical-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ff9800;
}

.advantage-list {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.advantage-list h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
}

.advantage-list ul {
  list-style: none;
  padding: 0;
}

.advantage-list li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.advantage-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #4caf50;
  font-weight: bold;
}

.construction-block {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #4caf50;
}

.construction-block h3 {
  color: #2e7d32;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.parametrization-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.step-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-number {
  background: #4caf50;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content h5 {
  color: #388e3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.step-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.gauge-explanation {
  margin-top: 1.5rem;
}

.explanation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.explanation-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.explanation-item h5 {
  color: #388e3c;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.explanation-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.gauge-symmetry-container {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #9c27b0;
}

.gauge-symmetry-container h3 {
  color: #6a1b9a;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.transformation-rules {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.rule-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.rule-item h5 {
  color: #7b1fa2;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.invariance-note {
  background: #fff;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #9c27b0;
  margin: 1rem 0;
  font-weight: bold;
  color: #6a1b9a;
}

.physics-meaning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.meaning-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.meaning-card h4 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.meaning-content p {
  margin-bottom: 1rem;
}

.example-box, .observable-examples {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.example-box h5, .observable-examples h5 {
  color: #6a1b9a;
  margin-bottom: 1rem;
}

.example-box ul, .observable-examples ul {
  list-style: none;
  padding: 0;
}

.example-box li, .observable-examples li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.example-box li::before, .observable-examples li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #9c27b0;
}

.dynamics-container {
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #009688;
}

.dynamics-container h3 {
  color: #00695c;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.hamiltonian-analysis {
  margin-top: 1.5rem;
}

.term-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.term-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.term-item h5 {
  color: #00796b;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.term-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.equation-interpretation {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.equation-interpretation h4 {
  color: #00796b;
  margin-bottom: 1rem;
}

.equation-interpretation p {
  color: #546e7a;
  margin: 0.5rem 0;
}

.mean-field-analysis {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #2196f3;
}

.mean-field-analysis h3 {
  color: #0d47a1;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.gauge-choice-options {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.choice-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.choice-item h5 {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.choice-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.effective-parameters {
  margin-top: 1.5rem;
}

.parameter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.parameter-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.parameter-item h5 {
  color: #1565c0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.parameter-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.topological-excitations {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #ffc107;
}

.topological-excitations h3 {
  color: #f57f17;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.vortex-analysis {
  margin-top: 1.5rem;
}

.vortex-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.property-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.property-item h5 {
  color: #ef6c00;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.property-item p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.flux-effects {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.flux-effects h4 {
  color: #ef6c00;
  margin-bottom: 1rem;
}

.flux-effects ul {
  list-style: none;
  padding: 0;
}

.flux-effects li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.flux-effects li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #ffc107;
}

.experimental-signatures {
  background: linear-gradient(135deg, #f1f8e9 0%, #dcedc8 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #8bc34a;
}

.experimental-signatures h3 {
  color: #33691e;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.signature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.signature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.signature-card h4 {
  color: #689f38;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.signature-content h5 {
  color: #558b2f;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.signature-content p {
  color: #546e7a;
  font-size: 0.9rem;
  margin: 0.3rem 0;
}

.theory-connections {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  border-left: 4px solid #607d8b;
}

.theory-connections h3 {
  color: #37474f;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.connection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.connection-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.connection-card h4 {
  color: #455a64;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.connection-content h5 {
  color: #546e7a;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.connection-content ul {
  list-style: none;
  padding: 0;
}

.connection-content li {
  padding: 0.3rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #546e7a;
  font-size: 0.9rem;
}

.connection-content li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #607d8b;
}

.summary-container {
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  border-radius: 12px;
  padding: 2rem;
  border-left: 4px solid #607d8b;
}

.summary-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: #607d8b;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-content h4 {
  color: #37474f;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.point-content p {
  color: #546e7a;
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 0 1rem;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .motivation-grid,
  .physics-meaning-grid,
  .term-grid,
  .parameter-grid,
  .vortex-properties,
  .signature-grid,
  .connection-grid {
    grid-template-columns: 1fr;
  }
  
  .explanation-grid,
  .transformation-rules,
  .gauge-choice-options,
  .summary-points {
    grid-template-columns: 1fr;
  }
  
  .parametrization-steps {
    gap: 1rem;
  }
  
  .step-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>