<template>
  <div class="chapter-content">
    <h1>13.3.1 GL自由能泛函</h1>
    
    <section class="introduction">
      <h2>Ginzburg-Landau理论简介</h2>
      
      <div class="theory-overview">
        <p>Ginzburg-Landau (GL) 理论是描述超导相变的唯象理论，基于Landau相变理论：</p>
        
        <div class="key-concepts">
          <h3>核心思想</h3>
          <ul>
            <li>引入复序参量ψ描述超导态</li>
            <li>构造自由能泛函F[ψ, A]</li>
            <li>通过变分原理得到GL方程</li>
            <li>适用于T ≈ T_c的温度区域</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="order-parameter">
      <h2>序参量</h2>
      
      <div class="psi-definition">
        <h3>复序参量ψ(r)</h3>
        <katex-element :expression="`\\psi(\\mathbf{r}) = |\\psi(\\mathbf{r})| e^{i\\phi(\\mathbf{r})}`"></katex-element>
        
        <div class="physical-meaning">
          <h4>物理意义</h4>
          <ul>
            <li><katex-element :expression="`|\\psi|^2 \\propto n_s`"></katex-element>：超导电子密度</li>
            <li><katex-element :expression="`\\phi`"></katex-element>：超导相位</li>
            <li><katex-element :expression="`\\psi = 0`"></katex-element>：正常态</li>
            <li><katex-element :expression="`\\psi \\neq 0`"></katex-element>：超导态</li>
          </ul>
        </div>
        
        <div class="normalization">
          <h4>归一化条件</h4>
          <p>在均匀超导态中：</p>
          <katex-element :expression="`|\\psi_0|^2 = \\frac{|\\alpha|}{\\beta} = \\frac{n_s}{2m^*}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="free-energy-functional">
      <h2>自由能泛函</h2>
      
      <div class="gl-functional">
        <h3>GL自由能泛函</h3>
        <katex-element :expression="`F[\\psi, \\mathbf{A}] = \\int d^3r \\left[ f_n + \\alpha|\\psi|^2 + \\frac{\\beta}{2}|\\psi|^4 + \\frac{1}{2m^*}|(-i\\hbar\\nabla - e^*\\mathbf{A})\\psi|^2 + \\frac{\\mathbf{B}^2}{2\\mu_0} \\right]`"></katex-element>
        
        <div class="term-explanation">
          <h4>各项物理意义</h4>
          <div class="terms-grid">
            <div class="term-card">
              <h5>f_n</h5>
              <p>正常态自由能密度</p>
            </div>
            <div class="term-card">
              <h5>α|ψ|²</h5>
              <p>二次项，α ∝ (T-T_c)</p>
            </div>
            <div class="term-card">
              <h5>β|ψ|⁴/2</h5>
              <p>四次项，β > 0 (稳定性)</p>
            </div>
            <div class="term-card">
              <h5>动能项</h5>
              <p>空间梯度和电磁耦合</p>
            </div>
            <div class="term-card">
              <h5>B²/2μ₀</h5>
              <p>磁场能量密度</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="parameters">
        <h3>GL参数</h3>
        
        <div class="alpha-parameter">
          <h4>参数α</h4>
          <katex-element :expression="`\\alpha = \\alpha_0 \\frac{T - T_c}{T_c}`"></katex-element>
          <ul>
            <li>T > T_c：α > 0，正常态稳定</li>
            <li>T < T_c：α < 0，超导态稳定</li>
            <li>T = T_c：α = 0，相变点</li>
          </ul>
        </div>
        
        <div class="beta-parameter">
          <h4>参数β</h4>
          <katex-element :expression="`\\beta > 0`"></katex-element>
          <p>确保自由能有下界，通常认为β与温度无关。</p>
        </div>
        
        <div class="effective-mass">
          <h4>有效质量m*</h4>
          <katex-element :expression="`m^* = 2m_e`"></katex-element>
          <p>Cooper对的有效质量</p>
        </div>
        
        <div name="effective-charge">
          <h4>有效电荷e*</h4>
          <katex-element :expression="`e^* = 2e`"></katex-element>
          <p>Cooper对的有效电荷</p>
        </div>
      </div>
    </section>

    <section class="gauge-invariance">
      <h2>规范不变性</h2>
      
      <div class="gauge-transformation">
        <h3>规范变换</h3>
        <p>GL理论具有U(1)规范不变性：</p>
        <katex-element :expression="`\\psi(\\mathbf{r}) \\to \\psi'(\\mathbf{r}) = \\psi(\\mathbf{r}) e^{ie^*\\chi(\\mathbf{r})/\\hbar}`"></katex-element>
        <katex-element :expression="`\\mathbf{A}(\\mathbf{r}) \\to \\mathbf{A}'(\\mathbf{r}) = \\mathbf{A}(\\mathbf{r}) + \\nabla\\chi(\\mathbf{r})`"></katex-element>
        
        <div class="covariant-derivative">
          <h4>协变导数</h4>
          <katex-element :expression="`\\mathbf{D} = -i\\hbar\\nabla - e^*\\mathbf{A}`"></katex-element>
          <p>确保自由能泛函的规范不变性</p>
        </div>
      </div>
    </section>

    <section class="equilibrium-conditions">
      <h2>平衡条件</h2>
      
      <div class="variational-principle">
        <h3>变分原理</h3>
        <p>平衡态通过最小化自由能泛函得到：</p>
        <katex-element :expression="`\\frac{\\delta F}{\\delta \\psi^*} = 0, \\quad \\frac{\\delta F}{\\delta \\mathbf{A}} = 0`"></katex-element>
        
        <div class="gl-equations-preview">
          <h4>导出GL方程</h4>
          <p>第一个GL方程：</p>
          <katex-element :expression="`\\alpha\\psi + \\beta|\\psi|^2\\psi + \\frac{1}{2m^*}(-i\\hbar\\nabla - e^*\\mathbf{A})^2\\psi = 0`"></katex-element>
          
          <p>第二个GL方程（电流密度）：</p>
          <katex-element :expression="`\\mathbf{j} = \\frac{e^*}{2m^*i}(\\psi^*\\mathbf{D}\\psi - \\psi(\\mathbf{D}\\psi)^*)`"></katex-element>
        </div>
      </div>
    </section>

    <section class="characteristic-lengths">
      <h2>特征长度</h2>
      
      <div class="coherence-length">
        <h3>相干长度ξ</h3>
        <katex-element :expression="`\\xi = \\sqrt{\\frac{\\hbar^2}{2m^*|\\alpha|}} = \\frac{\\hbar}{\\sqrt{2m^*|\\alpha|}}`"></katex-element>
        
        <div class="xi-meaning">
          <h4>物理意义</h4>
          <ul>
            <li>序参量空间变化的特征尺度</li>
            <li>超导-正常界面的厚度</li>
            <li>T → T_c时，ξ → ∞</li>
          </ul>
        </div>
      </div>
      
      <div class="penetration-depth">
        <h3>穿透深度λ</h3>
        <katex-element :expression="`\\lambda = \\sqrt{\\frac{m^*}{\\mu_0 e^{*2} n_s}} = \\sqrt{\\frac{m^*\\beta}{\\mu_0 e^{*2}|\\alpha|}}`"></katex-element>
        
        <div class="lambda-meaning">
          <h4>物理意义</h4>
          <ul>
            <li>磁场衰减的特征长度</li>
            <li>超导电流的分布尺度</li>
            <li>与超导电子密度相关</li>
          </ul>
        </div>
      </div>
      
      <div class="gl-parameter-def">
        <h3>GL参数κ</h3>
        <katex-element :expression="`\\kappa = \\frac{\\lambda}{\\xi} = \\sqrt{\\frac{\\beta}{2\\mu_0\\alpha_0^2}} \\cdot \\frac{e^*}{\\hbar}`"></katex-element>
        
        <div class="kappa-properties">
          <h4>κ的性质</h4>
          <ul>
            <li>材料的本征参数</li>
            <li>决定超导体类型</li>
            <li>与温度无关（在GL理论范围内）</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="thermodynamic-relations">
      <h2>热力学关系</h2>
      
      <div class="critical-field">
        <h3>热力学临界磁场</h3>
        <katex-element :expression="`H_c^2 = \\frac{2\\mu_0|\\alpha|^2}{\\beta}`"></katex-element>
        
        <div class="condensation-energy">
          <h4>凝聚能</h4>
          <katex-element :expression="`f_s - f_n = -\\frac{|\\alpha|^2}{2\\beta} = -\\frac{\\mu_0 H_c^2}{2}`"></katex-element>
        </div>
      </div>
      
      <div name="temperature-dependence">
        <h3>温度依赖性</h3>
        <p>在T ≈ T_c附近：</p>
        <katex-element :expression="`H_c(T) \\propto (T_c - T), \\quad \\xi(T) \\propto (T_c - T)^{-1/2}, \\quad \\lambda(T) \\propto (T_c - T)^{-1/2}`"></katex-element>
      </div>
    </section>

    <section class="applications">
      <h2>GL理论的应用</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>界面问题</h3>
          <ul>
            <li>超导-正常界面</li>
            <li>表面超导</li>
            <li>薄膜超导</li>
            <li>约瑟夫森结</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>磁通问题</h3>
          <ul>
            <li>磁通涡旋</li>
            <li>Abrikosov格子</li>
            <li>钉扎效应</li>
            <li>临界电流</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>相变研究</h3>
          <ul>
            <li>二级相变</li>
            <li>临界现象</li>
            <li>涨落效应</li>
            <li>维度效应</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="limitations">
      <h2>理论局限性</h2>
      
      <div class="validity-range">
        <h3>适用范围</h3>
        <ul>
          <li>T ≈ T_c：温度接近临界温度</li>
          <li>弱耦合超导体</li>
          <li>空间缓变近似</li>
          <li>平均场理论</li>
        </ul>
      </div>
      
      <div class="beyond-gl">
        <h3>超越GL理论</h3>
        <ul>
          <li>强耦合效应</li>
          <li>各向异性</li>
          <li>非局域效应</li>
          <li>量子涨落</li>
        </ul>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>GL理论引入复序参量ψ描述超导态</li>
          <li>自由能泛函包含序参量、梯度和电磁耦合项</li>
          <li>理论具有U(1)规范不变性</li>
          <li>定义了相干长度ξ和穿透深度λ两个特征长度</li>
          <li>GL参数κ = λ/ξ决定超导体类型</li>
          <li>通过变分原理可导出GL方程</li>
          <li>适用于T ≈ T_c的温度区域</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_3_1',
  mounted() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
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

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #27ae60;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #27ae60;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.theory-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.key-concepts {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.psi-definition {
  background: #f0fff4;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c6f6d5;
  margin: 20px 0;
}

.physical-meaning,
.normalization {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #27ae60;
}

.gl-functional {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.terms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.term-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: transform 0.2s;
}

.term-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.term-card h5 {
  color: #e53e3e;
  margin-bottom: 10px;
  font-size: 1.1em;
}

.parameters {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6c757d;
  margin: 20px 0;
}

.alpha-parameter,
.beta-parameter,
.effective-mass {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #6c757d;
}

.gauge-transformation {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.covariant-derivative {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.variational-principle {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.gl-equations-preview {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.coherence-length,
.penetration-depth,
.gl-parameter-def {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.xi-meaning,
.lambda-meaning,
.kappa-properties {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.critical-field {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.condensation-energy {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #e53e3e;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.application-card {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.validity-range,
.beyond-gl {
  background: #f0f8ff;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #b3d9ff;
  margin: 15px 0;
}

.summary {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #27ae60;
  margin-top: 30px;
}

.summary-points ul {
  list-style-type: none;
  padding: 0;
}

.summary-points li {
  background: white;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .terms-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>