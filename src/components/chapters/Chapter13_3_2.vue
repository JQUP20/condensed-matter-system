<template>
  <div class="chapter-content">
    <h1>13.3.2 GL方程</h1>
    
    <section class="introduction">
      <h2>GL方程的导出</h2>
      
      <div class="derivation-overview">
        <p>Ginzburg-Landau方程通过对自由能泛函进行变分得到：</p>
        <katex-element :expression="`\\frac{\\delta F}{\\delta \\psi^*} = 0, \\quad \\frac{\\delta F}{\\delta \\mathbf{A}} = 0`"></katex-element>
        
        <div class="variational-method">
          <h3>变分方法</h3>
          <p>自由能泛函：</p>
          <katex-element :expression="`F = \\int d^3r \\left[ \\alpha|\\psi|^2 + \\frac{\\beta}{2}|\\psi|^4 + \\frac{1}{2m^*}|\\mathbf{D}\\psi|^2 + \\frac{\\mathbf{B}^2}{2\\mu_0} \\right]`"></katex-element>
          <p>其中协变导数：<katex-element :expression="`\\mathbf{D} = -i\\hbar\\nabla - e^*\\mathbf{A}`"></katex-element></p>
        </div>
      </div>
    </section>

    <section class="first-gl-equation">
      <h2>第一个GL方程</h2>
      
      <div class="equation-derivation">
        <h3>方程形式</h3>
        <katex-element :expression="`\\alpha\\psi + \\beta|\\psi|^2\\psi + \\frac{1}{2m^*}(-i\\hbar\\nabla - e^*\\mathbf{A})^2\\psi = 0`"></katex-element>
        
        <div class="equation-analysis">
          <h4>方程分析</h4>
          <ul>
            <li>非线性薛定谔方程</li>
            <li>包含电磁场耦合</li>
            <li>|ψ|²项提供非线性</li>
            <li>决定序参量的空间分布</li>
          </ul>
        </div>
      </div>
      
      <div class="uniform-solution">
        <h3>均匀解</h3>
        <p>在无外场情况下（A = 0），均匀解为：</p>
        
        <div class="normal-state">
          <h4>正常态 (T > T_c)</h4>
          <katex-element :expression="`\\alpha > 0: \\quad \\psi = 0`"></katex-element>
        </div>
        
        <div class="superconducting-state">
          <h4>超导态 (T < T_c)</h4>
          <katex-element :expression="`\\alpha < 0: \\quad |\\psi_0|^2 = \\frac{|\\alpha|}{\\beta}`"></katex-element>
          <katex-element :expression="`\\psi_0 = \\sqrt{\\frac{|\\alpha|}{\\beta}} e^{i\\phi_0}`"></katex-element>
        </div>
      </div>
      
      <div class="linearized-equation">
        <h3>线性化方程</h3>
        <p>在T ≈ T_c附近，对小扰动线性化：</p>
        <katex-element :expression="`\\alpha\\psi + \\frac{1}{2m^*}(-i\\hbar\\nabla - e^*\\mathbf{A})^2\\psi = 0`"></katex-element>
        
        <div class="characteristic-length">
          <h4>特征长度</h4>
          <p>相干长度：</p>
          <katex-element :expression="`\\xi = \\sqrt{\\frac{\\hbar^2}{2m^*|\\alpha|}}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="second-gl-equation">
      <h2>第二个GL方程</h2>
      
      <div class="current-density">
        <h3>超导电流密度</h3>
        <katex-element :expression="`\\mathbf{j} = \\frac{\\delta F}{\\delta \\mathbf{A}} = -\\frac{1}{\\mu_0}\\nabla \\times \\mathbf{B}`"></katex-element>
        
        <div class="explicit-form">
          <h4>显式表达</h4>
          <katex-element :expression="`\\mathbf{j} = \\frac{e^*}{2m^*i}(\\psi^*\\mathbf{D}\\psi - \\psi(\\mathbf{D}\\psi)^*)`"></katex-element>
          
          <p>展开后：</p>
          <katex-element :expression="`\\mathbf{j} = \\frac{e^*\\hbar}{2m^*}(\\psi^*\\nabla\\psi - \\psi\\nabla\\psi^*) - \\frac{e^{*2}}{m^*}|\\psi|^2\\mathbf{A}`"></katex-element>
        </div>
      </div>
      
      <div name="current-components">
        <h3>电流的组成</h3>
        
        <div class="paramagnetic-current">
          <h4>顺磁电流</h4>
          <katex-element :expression="`\\mathbf{j}_{para} = \\frac{e^*\\hbar}{2m^*i}(\\psi^*\\nabla\\psi - \\psi\\nabla\\psi^*)`"></katex-element>
          <p>与相位梯度相关：<katex-element :expression="`\\mathbf{j}_{para} = \\frac{e^*\\hbar}{m^*}|\\psi|^2\\nabla\\phi`"></katex-element></p>
        </div>
        
        <div class="diamagnetic-current">
          <h4>抗磁电流</h4>
          <katex-element :expression="`\\mathbf{j}_{dia} = -\\frac{e^{*2}}{m^*}|\\psi|^2\\mathbf{A}`"></katex-element>
          <p>与矢量势成比例</p>
        </div>
      </div>
      
      <div class="london-limit">
        <h3>London极限</h3>
        <p>当|ψ|为常数时，GL方程简化为London方程：</p>
        <katex-element :expression="`\\mathbf{j} = -\\frac{e^{*2}n_s}{m^*}\\mathbf{A}`"></katex-element>
        
        <div class="london-penetration">
          <h4>穿透深度</h4>
          <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{m^*}{\\mu_0 e^{*2} n_s}}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="boundary-conditions">
      <h2>边界条件</h2>
      
      <div class="surface-boundary">
        <h3>表面边界条件</h3>
        
        <div class="normal-derivative">
          <h4>序参量法向导数</h4>
          <katex-element :expression="`\\mathbf{n} \\cdot (-i\\hbar\\nabla - e^*\\mathbf{A})\\psi = 0`"></katex-element>
          <p>在超导体表面，超导电流的法向分量为零</p>
        </div>
        
        <div class="magnetic-field">
          <h4>磁场边界条件</h4>
          <katex-element :expression="`\\mathbf{n} \\times (\\mathbf{B}_{out} - \\mathbf{B}_{in}) = \\mu_0\\mathbf{K}`"></katex-element>
          <p>其中K是表面电流密度</p>
        </div>
      </div>
      
      <div class="interface-conditions">
        <h3>界面条件</h3>
        
        <div class="continuity">
          <h4>连续性条件</h4>
          <ul>
            <li>序参量连续：<katex-element :expression="`\\psi_1 = \\psi_2`"></katex-element></li>
            <li>法向电流连续：<katex-element :expression="`j_{n1} = j_{n2}`"></katex-element></li>
            <li>切向磁场连续：<katex-element :expression="`B_{t1} = B_{t2}`"></katex-element></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="solutions">
      <h2>GL方程的解</h2>
      
      <div class="one-dimensional">
        <h3>一维问题</h3>
        
        <div class="domain-wall">
          <h4>畴壁解</h4>
          <p>超导-正常界面：</p>
          <katex-element :expression="`\\psi(x) = \\psi_0 \\tanh\\left(\\frac{x}{\\sqrt{2}\\xi}\\right)`"></katex-element>
          
          <div class="wall-properties">
            <h5>畴壁性质</h5>
            <ul>
              <li>厚度～ξ</li>
              <li>表面能密度σ</li>
              <li>决定超导体类型</li>
            </ul>
          </div>
        </div>
        
        <div class="magnetic-penetration">
          <h4>磁场穿透</h4>
          <p>半无限超导体中的磁场：</p>
          <katex-element :expression="`B(x) = B_0 e^{-x/\\lambda}`"></katex-element>
          <katex-element :expression="`\\psi(x) = \\psi_0 \\sqrt{1 - \\frac{B^2(x)}{H_c^2}}`"></katex-element>
        </div>
      </div>
      
      <div class="cylindrical-geometry">
        <h3>柱对称问题</h3>
        
        <div class="vortex-solution">
          <h4>涡旋解</h4>
          <p>单个涡旋的解：</p>
          <katex-element :expression="`\\psi(r,\\theta) = f(r)e^{in\\theta}`"></katex-element>
          
          <div class="vortex-structure">
            <h5>涡旋结构</h5>
            <ul>
              <li>核心尺寸～ξ</li>
              <li>磁场分布～λ</li>
              <li>量子化涡度n</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="numerical-methods">
      <h2>数值求解方法</h2>
      
      <div class="discretization">
        <h3>离散化方法</h3>
        
        <div class="finite-difference">
          <h4>有限差分法</h4>
          <ul>
            <li>空间网格离散</li>
            <li>导数的差分近似</li>
            <li>迭代求解</li>
          </ul>
        </div>
        
        <div class="finite-element">
          <h4>有限元方法</h4>
          <ul>
            <li>复杂几何适应性</li>
            <li>变分形式</li>
            <li>高精度</li>
          </ul>
        </div>
      </div>
      
      <div class="iteration-schemes">
        <h3>迭代方案</h3>
        
        <div class="relaxation-method">
          <h4>松弛方法</h4>
          <katex-element :expression="`\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\delta F}{\\delta\\psi^*}`"></katex-element>
        </div>
        
        <div class="newton-method">
          <h4>牛顿法</h4>
          <p>快速收敛的非线性求解</p>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>GL方程的应用</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>临界现象</h3>
          <ul>
            <li>相变临界指数</li>
            <li>涨落效应</li>
            <li>标度律</li>
            <li>普适性</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>涡旋物理</h3>
          <ul>
            <li>Abrikosov格子</li>
            <li>涡旋动力学</li>
            <li>钉扎效应</li>
            <li>临界电流</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>器件应用</h3>
          <ul>
            <li>约瑟夫森结</li>
            <li>超导量子器件</li>
            <li>磁通量子比特</li>
            <li>超导电子学</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="extensions">
      <h2>GL理论的推广</h2>
      
      <div class="time-dependent">
        <h3>含时GL方程</h3>
        <katex-element :expression="`\\frac{\\partial\\psi}{\\partial t} = -\\frac{1}{\\tau}\\left(\\alpha\\psi + \\beta|\\psi|^2\\psi + \\frac{1}{2m^*}\\mathbf{D}^2\\psi\\right)`"></katex-element>
        
        <div class="relaxation-time">
          <h4>弛豫时间τ</h4>
          <p>描述序参量的动力学演化</p>
        </div>
      </div>
      
      <div class="anisotropic-gl">
        <h3>各向异性GL理论</h3>
        <ul>
          <li>各向异性有效质量</li>
          <li>层状超导体</li>
          <li>d波配对</li>
        </ul>
      </div>
      
      <div class="multiband-gl">
        <h3>多带GL理论</h3>
        <ul>
          <li>多个序参量</li>
          <li>带间耦合</li>
          <li>铁基超导体</li>
        </ul>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>GL方程通过对自由能泛函变分得到</li>
          <li>第一个GL方程决定序参量的空间分布</li>
          <li>第二个GL方程给出超导电流密度</li>
          <li>边界条件确定具体问题的解</li>
          <li>London极限对应均匀序参量情况</li>
          <li>数值方法可求解复杂几何的GL方程</li>
          <li>GL方程在超导物理和器件设计中有广泛应用</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_3_2',
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
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.derivation-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.variational-method {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.equation-derivation {
  background: #f0fff4;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c6f6d5;
  margin: 20px 0;
}

.equation-analysis {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #27ae60;
}

.uniform-solution {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.normal-state,
.superconducting-state {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.normal-state {
  border-left: 4px solid #e53e3e;
}

.superconducting-state {
  border-left: 4px solid #3182ce;
}

.linearized-equation {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6c757d;
  margin: 20px 0;
}

.characteristic-length {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #6c757d;
}

.current-density {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.explicit-form {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.paramagnetic-current,
.diamagnetic-current {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #f39c12;
}

.london-limit {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.london-penetration {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #28a745;
}

.surface-boundary,
.interface-conditions {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.normal-derivative,
.magnetic-field,
.continuity {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.one-dimensional,
.cylindrical-geometry {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.domain-wall,
.magnetic-penetration,
.vortex-solution {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #e53e3e;
}

.wall-properties,
.vortex-structure {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.discretization,
.iteration-schemes {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #b3d9ff;
  margin: 20px 0;
}

.finite-difference,
.finite-element,
.relaxation-method,
.newton-method {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #2196f3;
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

.time-dependent,
.anisotropic-gl,
.multiband-gl {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin: 15px 0;
}

.relaxation-time {
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.summary {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #3498db;
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
  border-left: 4px solid #3498db;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>