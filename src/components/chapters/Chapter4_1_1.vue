<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">4.1.1 理论物理数学与其他</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">数学基础</span>
        <span class="reading-time">阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        费米液体理论作为凝聚态物理学的基石理论之一，其数学框架涉及多个重要的理论物理数学分支。
        本节将系统介绍费米液体理论所需的数学工具和理论基础，为深入理解Landau费米液体理论奠定坚实基础。
      </p>
    </div>

    <div class="content-section">
      <h2>数学基础框架</h2>
      
      <div class="math-framework">
        <div class="framework-category">
          <h3>🔢 多体量子力学</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>二次量化</h4>
              <div class="math-content">
                <p>产生湮灭算符：</p>
                <div class="equation">
                  <katex-element expression="\{c_i^\dagger, c_j\} = \delta_{ij}, \quad \{c_i, c_j\} = 0" />
                </div>
                <p>粒子数算符：<katex-element expression="\\hat{n}_i = c_i^\\dagger c_i" :inline="true" /></p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>Fock空间</h4>
              <div class="math-content">
                <p>多粒子态的完备基：</p>
                <div class="equation">
                  <katex-element expression="|n_1, n_2, \\ldots\\rangle = \\prod_i (c_i^\\dagger)^{n_i} |0\\rangle" />
                </div>
                <p>其中 <katex-element expression="n_i \\in \\{0, 1\\}" :inline="true" /> 对费米子</p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>Hartree-Fock近似</h4>
              <div class="math-content">
                <p>平均场哈密顿量：</p>
                <div class="equation">
                  <katex-element expression="H_{HF} = \\sum_i \\epsilon_i c_i^\\dagger c_i + \\text{常数项}" />
                </div>
                <p>自洽条件：<katex-element expression="\\epsilon_i = \\epsilon_i[\\{n_j\\}]" :inline="true" /></p>
              </div>
            </div>
          </div>
        </div>

        <div class="framework-category">
          <h3>📊 统计力学</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>费米-狄拉克分布</h4>
              <div class="math-content">
                <p>平衡态分布函数：</p>
                <div class="equation">
                  <katex-element expression="f(\\epsilon) = \\frac{1}{e^{(\\epsilon-\\mu)/k_B T} + 1}" />
                </div>
                <p>零温极限：<katex-element expression="f(\\epsilon) = \\theta(\\mu - \\epsilon)" :inline="true" /></p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>巨正则系综</h4>
              <div class="math-content">
                <p>巨配分函数：</p>
                <div class="equation">
                  <katex-element expression="\\Xi = \\text{Tr}[e^{-\\beta(H - \\mu N)}]" />
                </div>
                <p>热力学势：<katex-element expression="\\Omega = -k_B T \\ln \\Xi" :inline="true" /></p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>涨落-耗散定理</h4>
              <div class="math-content">
                <p>响应函数与关联函数的关系：</p>
                <div class="equation">
                  <katex-element expression="\\chi(\\omega) = \\int_0^\\infty dt \\, e^{i\\omega t} \\langle[A(t), B(0)]\\rangle" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="framework-category">
          <h3>🌊 场论方法</h3>
          <div class="concept-grid">
            <div class="concept-card">
              <h4>路径积分</h4>
              <div class="math-content">
                <p>费米子路径积分：</p>
                <div class="equation">
                  <katex-element expression="Z = \\int \\mathcal{D}[\\psi^*, \\psi] \\, e^{-S[\\psi^*, \\psi]}" />
                </div>
                <p>作用量：<katex-element expression="S = \\int d\\tau \\, \\mathcal{L}[\\psi^*, \\psi]" :inline="true" /></p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>格林函数</h4>
              <div class="math-content">
                <p>单粒子格林函数：</p>
                <div class="equation">
                  <katex-element expression="G(\\tau) = -\\langle T_\\tau \\psi(\\tau) \\psi^\\dagger(0) \\rangle" />
                </div>
                <p>频率表示：<katex-element expression="G(i\\omega_n) = \\int_0^\\beta d\\tau \\, e^{i\\omega_n \\tau} G(\\tau)" :inline="true" /></p>
              </div>
            </div>
            
            <div class="concept-card">
              <h4>费曼图技术</h4>
              <div class="math-content">
                <p>微扰展开：</p>
                <div class="equation">
                  <katex-element expression="G = G_0 + G_0 \\Sigma G_0 + G_0 \\Sigma G_0 \\Sigma G_0 + \\cdots" />
                </div>
                <p>自能：<katex-element expression="\\Sigma" :inline="true" /> 包含所有不可约图</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>关键数学工具</h2>
      
      <div class="tools-section">
        <div class="tool-category">
          <h3>🔧 解析技术</h3>
          <div class="tools-grid">
            <div class="tool-card">
              <h4>复分析</h4>
              <ul>
                <li>留数定理在求和中的应用</li>
                <li>解析延拓技术</li>
                <li>分支切割和Riemann面</li>
                <li>Kramers-Kronig关系</li>
              </ul>
            </div>
            
            <div class="tool-card">
              <h4>积分变换</h4>
              <ul>
                <li>Fourier变换和逆变换</li>
                <li>Laplace变换</li>
                <li>Matsubara频率求和</li>
                <li>解析延拓到实频率</li>
              </ul>
            </div>
            
            <div class="tool-card">
              <h4>特殊函数</h4>
              <ul>
                <li>Gamma函数和Beta函数</li>
                <li>多重对数函数</li>
                <li>椭圆积分</li>
                <li>超几何函数</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="tool-category">
          <h3>🎯 近似方法</h3>
          <div class="tools-grid">
            <div class="tool-card">
              <h4>微扰理论</h4>
              <ul>
                <li>Rayleigh-Schrödinger微扰</li>
                <li>时间相关微扰理论</li>
                <li>绝热近似</li>
                <li>Born近似</li>
              </ul>
            </div>
            
            <div class="tool-card">
              <h4>变分方法</h4>
              <ul>
                <li>Ritz变分原理</li>
                <li>Hartree-Fock方法</li>
                <li>密度泛函理论</li>
                <li>Gutzwiller变分</li>
              </ul>
            </div>
            
            <div class="tool-card">
              <h4>重整化群</h4>
              <ul>
                <li>Wilson重整化群</li>
                <li>场论重整化</li>
                <li>β函数和不动点</li>
                <li>标度律</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>费米液体理论的数学结构</h2>
      
      <div class="theory-structure">
        <div class="structure-level">
          <h3>🏗️ 基础层次</h3>
          <div class="level-content">
            <div class="structure-item">
              <h4>准粒子概念</h4>
              <p>费米液体中的激发可以用准粒子描述，其满足：</p>
              <div class="equation">
                <katex-element expression="E(\\mathbf{k}) = \\epsilon_{\\mathbf{k}} + \\Sigma(\\mathbf{k}, E(\\mathbf{k}))" />
              </div>
              <p>其中 <katex-element expression="\\Sigma" :inline="true" /> 是自能，包含多体相互作用效应。</p>
            </div>
            
            <div class="structure-item">
              <h4>Landau参数</h4>
              <p>准粒子相互作用通过Landau参数描述：</p>
              <div class="equation">
                <katex-element expression="f_l = \\frac{N(0)}{2l+1} \\int_{-1}^{1} d(\\cos\\theta) \\, P_l(\\cos\\theta) \\, f(\\theta)" />
              </div>
              <p>其中 <katex-element expression="P_l" :inline="true" /> 是勒让德多项式，<katex-element expression="f(\\theta)" :inline="true" /> 是相互作用函数。</p>
            </div>
          </div>
        </div>

        <div class="structure-level">
          <h3>🔄 动力学层次</h3>
          <div class="level-content">
            <div class="structure-item">
              <h4>Boltzmann方程</h4>
              <p>准粒子分布函数的演化方程：</p>
              <div class="equation">
                <katex-element expression="\\frac{\\partial n_{\\mathbf{k}}}{\\partial t} + \\mathbf{v}_{\\mathbf{k}} \\cdot \\nabla n_{\\mathbf{k}} + \\mathbf{F} \\cdot \\frac{\\partial n_{\\mathbf{k}}}{\\partial \\mathbf{k}} = I[n]" />
              </div>
              <p>其中 <katex-element expression="I[n]" :inline="true" /> 是碰撞积分项。</p>
            </div>
            
            <div class="structure-item">
              <h4>输运系数</h4>
              <p>电导率的Kubo公式：</p>
              <div class="equation">
                <katex-element expression="\\sigma(\\omega) = \\frac{e^2}{i\\omega} \\int_0^\\infty dt \\, e^{i\\omega t} \\langle[j(t), j(0)]\\rangle" />
              </div>
              <p>其中 <katex-element expression="j" :inline="true" /> 是电流密度算符。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>计算技巧与实例</h2>
      
      <div class="calculation-examples">
        <div class="example-card">
          <h3>📝 实例1：费米面附近的态密度</h3>
          <div class="example-content">
            <p><strong>问题：</strong>计算三维自由费米气体在费米面附近的态密度。</p>
            <p><strong>解法：</strong></p>
            <div class="solution-steps">
              <div class="step">
                <span class="step-number">1</span>
                <p>从动量空间态密度开始：<katex-element expression="\\rho(\\mathbf{k}) = \\frac{V}{(2\\pi)^3}" :inline="true" /></p>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <p>转换到能量表示：<katex-element expression="N(\\epsilon) = \\int d^3k \\, \\rho(\\mathbf{k}) \\, \\delta(\\epsilon - \\epsilon_{\\mathbf{k}})" :inline="true" /></p>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <p>对于 <katex-element expression="\\epsilon_{\\mathbf{k}} = \\frac{\\hbar^2 k^2}{2m}" :inline="true" />，得到：</p>
                <div class="equation">
                  <katex-element expression="N(\\epsilon) = \\frac{V}{2\\pi^2} \\left(\\frac{2m}{\\hbar^2}\\right)^{3/2} \\sqrt{\\epsilon}" />
                </div>
              </div>
              <div class="step">
                <span class="step-number">4</span>
                <p>费米面处的态密度：<katex-element expression="N(0) = \\frac{V k_F m}{2\\pi^2 \\hbar^2}" :inline="true" /></p>
              </div>
            </div>
          </div>
        </div>

        <div class="example-card">
          <h3>📝 实例2：Matsubara频率求和</h3>
          <div class="example-content">
            <p><strong>问题：</strong>计算自由费米子的单粒子格林函数。</p>
            <p><strong>解法：</strong></p>
            <div class="solution-steps">
              <div class="step">
                <span class="step-number">1</span>
                <p>Matsubara表示：<katex-element expression="G(i\\omega_n) = \\frac{1}{i\\omega_n - \\epsilon_{\\mathbf{k}}}" :inline="true" /></p>
              </div>
              <div class="step">
                <span class="step-number">2</span>
                <p>解析延拓到实频率：<katex-element expression="G(\\omega + i\\delta) = \\frac{1}{\\omega + i\\delta - \\epsilon_{\\mathbf{k}}}" :inline="true" /></p>
              </div>
              <div class="step">
                <span class="step-number">3</span>
                <p>谱函数：<katex-element expression="A(\\mathbf{k}, \\omega) = -\\frac{1}{\\pi} \\text{Im} G(\\omega + i\\delta) = \\delta(\\omega - \\epsilon_{\\mathbf{k}})" :inline="true" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>与其他理论的联系</h2>
      
      <div class="theory-connections">
        <div class="connection-grid">
          <div class="connection-card">
            <h3>🔗 BCS理论</h3>
            <p>费米液体理论为BCS超导理论提供了正常态的描述基础。Cooper对的形成可以看作是费米液体不稳定性的结果。</p>
            <div class="connection-details">
              <h4>关键联系：</h4>
              <ul>
                <li>准粒子概念的延续</li>
                <li>平均场近似的应用</li>
                <li>对称性破缺机制</li>
              </ul>
            </div>
          </div>
          
          <div class="connection-card">
            <h3>🔗 重费米子系统</h3>
            <p>重费米子材料中的低能激发仍可用费米液体理论描述，但有效质量大大增强。</p>
            <div class="connection-details">
              <h4>关键特征：</h4>
              <ul>
                <li>巨大的有效质量 <katex-element expression="m^* \\gg m" :inline="true" /></li>
                <li>增强的比热系数</li>
                <li>Kondo效应的集体化</li>
              </ul>
            </div>
          </div>
          
          <div class="connection-card">
            <h3>🔗 量子临界点</h3>
            <p>费米液体理论在量子相变点附近可能失效，需要新的理论框架。</p>
            <div class="connection-details">
              <h4>失效标志：</h4>
              <ul>
                <li>准粒子寿命趋于零</li>
                <li>非费米液体行为</li>
                <li>标度律的出现</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>学习建议与资源</h2>
      
      <div class="learning-resources">
        <div class="resource-category">
          <h3>📚 推荐教材</h3>
          <div class="books-list">
            <div class="book-item">
              <h4>《Many-Particle Physics》- Mahan</h4>
              <p>全面介绍多体物理的数学方法，包含详细的格林函数技术。</p>
            </div>
            <div class="book-item">
              <h4>《Quantum Theory of Many-Particle Systems》- Fetter & Walecka</h4>
              <p>经典的多体量子力学教材，数学推导严谨。</p>
            </div>
            <div class="book-item">
              <h4>《Introduction to Many-Body Physics》- Coleman</h4>
              <p>现代观点的多体物理教材，注重物理直觉。</p>
            </div>
          </div>
        </div>

        <div class="resource-category">
          <h3>🛠️ 计算工具</h3>
          <div class="tools-list">
            <div class="tool-item">
              <h4>Mathematica/Maple</h4>
              <p>符号计算，适合复杂积分和级数求和</p>
            </div>
            <div class="tool-item">
              <h4>Python (SciPy/NumPy)</h4>
              <p>数值计算，适合大规模数值积分和矩阵运算</p>
            </div>
            <div class="tool-item">
              <h4>MATLAB</h4>
              <p>矩阵运算和可视化，适合数据分析</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.math-framework {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.framework-category {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.framework-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.concept-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.math-content p {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

.equation {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Computer Modern', serif;
  text-align: center;
  overflow-x: auto;
}

.tools-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tool-category {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.tool-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tools-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.tool-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.tool-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.tool-card ul {
  list-style: none;
  padding: 0;
}

.tool-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.tool-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.theory-structure {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.structure-level {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.structure-level h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.level-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.structure-item {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.structure-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.calculation-examples {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.example-card {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.example-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.example-content p {
  margin-bottom: 1rem;
  color: #4a5568;
}

.solution-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.step {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-number {
  background: #667eea;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
}

.step p {
  margin: 0;
  color: #4a5568;
}

.theory-connections {
  margin-top: 2rem;
}

.connection-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.connection-card {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.connection-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.connection-card p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.connection-details h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.connection-details ul {
  list-style: none;
  padding: 0;
}

.connection-details li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1.5rem;
}

.connection-details li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.learning-resources {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.resource-category {
  background: #f7fafc;
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid #e2e8f0;
}

.resource-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.books-list, .tools-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.book-item, .tool-item {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.book-item h4, .tool-item h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.book-item p, .tool-item p {
  color: #4a5568;
  margin: 0;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid,
  .tools-grid,
  .connection-grid {
    grid-template-columns: 1fr;
  }
  
  .level-content {
    grid-template-columns: 1fr;
  }
}
</style>