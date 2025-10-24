<template>
  <div class="chapter-content">
    <h1>13.2.1 London方程</h1>
    
    <section class="introduction">
      <h2>London理论的提出</h2>
      
      <div class="historical-background">
        <h3>1935年的突破</h3>
        <p>Fritz London和Heinz London兄弟提出了描述超导体电磁性质的唯象理论。</p>
        
        <div class="theory-motivation">
          <h4>理论动机</h4>
          <ul>
            <li>解释Meissner效应的微观机制</li>
            <li>建立超导体的电磁场方程</li>
            <li>预测磁场穿透深度</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="london-equations">
      <h2>London方程组</h2>
      
      <div class="first-london-equation">
        <h3>第一London方程</h3>
        <p>描述超导电流与电场的关系：</p>
        <katex-element :expression="`\\frac{\\partial \\vec{J}_s}{\\partial t} = \\frac{n_s e^2}{m} \\vec{E}`"></katex-element>
        
        <div class="equation-interpretation">
          <h4>物理意义</h4>
          <ul>
            <li><katex-element :expression="`\\vec{J}_s`"></katex-element>：超导电流密度</li>
            <li><katex-element :expression="`n_s`"></katex-element>：超导电子密度</li>
            <li><katex-element :expression="`e, m`"></katex-element>：电子电荷和质量</li>
            <li>描述超导电子的无阻尼加速</li>
          </ul>
        </div>
      </div>
      
      <div class="second-london-equation">
        <h3>第二London方程</h3>
        <p>描述超导电流与矢量势的关系：</p>
        <katex-element :expression="`\\vec{J}_s = -\\frac{n_s e^2}{mc} \\vec{A} \\quad (\\text{CGS})`"></katex-element>
        <katex-element :expression="`\\vec{J}_s = -\\frac{n_s e^2}{m} \\vec{A} \\quad (\\text{SI})`"></katex-element>
        
        <div class="gauge-invariance">
          <h4>规范不变性</h4>
          <p>更准确的表述应考虑规范不变性：</p>
          <katex-element :expression="`\\vec{J}_s = -\\frac{n_s e^2}{mc} (\\vec{A} + \\frac{mc}{e}\\nabla\\phi)`"></katex-element>
          <p>其中<katex-element :expression="`\\phi`"></katex-element>是标量势的相位。</p>
        </div>
      </div>
    </section>

    <section class="derivation">
      <h2>方程推导</h2>
      
      <div class="classical-approach">
        <h3>经典推导</h3>
        <p>从牛顿第二定律出发：</p>
        <katex-element :expression="`m\\frac{d\\vec{v}}{dt} = -e(\\vec{E} + \\frac{\\vec{v} \\times \\vec{B}}{c})`"></katex-element>
        
        <div class="steady-state">
          <h4>稳态条件</h4>
          <p>在稳态下，<katex-element :expression="`\\frac{d\\vec{v}}{dt} = 0`"></katex-element>，但超导体中：</p>
          <ul>
            <li>没有散射机制</li>
            <li>电子可以无阻尼加速</li>
            <li>需要修正经典方程</li>
          </ul>
        </div>
      </div>
      
      <div class="quantum-justification">
        <h3>量子力学基础</h3>
        <p>从量子力学角度，超导态的波函数：</p>
        <katex-element :expression="`\\Psi = |\\Psi|e^{i\\phi}`"></katex-element>
        
        <p>超导电流密度：</p>
        <katex-element :expression="`\\vec{J}_s = \\frac{\\hbar e}{2mi}(\\Psi^*\\nabla\\Psi - \\Psi\\nabla\\Psi^*) - \\frac{e^2}{mc}|\\Psi|^2\\vec{A}`"></katex-element>
        
        <div class="rigid-phase">
          <h4>刚性相位近似</h4>
          <p>假设<katex-element :expression="`|\\Psi|`"></katex-element>为常数，<katex-element :expression="`\\nabla\\phi = 0`"></katex-element>：</p>
          <katex-element :expression="`\\vec{J}_s = -\\frac{n_s e^2}{mc}\\vec{A}`"></katex-element>
        </div>
      </div>
    </section>

    <section class="penetration-depth">
      <h2>磁场穿透深度</h2>
      
      <div class="london-penetration-depth">
        <h3>London穿透深度</h3>
        <p>结合Maxwell方程和London方程：</p>
        <katex-element :expression="`\\nabla \\times \\vec{B} = \\frac{4\\pi}{c}\\vec{J}_s \\quad (\\text{CGS})`"></katex-element>
        <katex-element :expression="`\\nabla \\times \\vec{B} = \\mu_0\\vec{J}_s \\quad (\\text{SI})`"></katex-element>
        
        <p>得到：</p>
        <katex-element :expression="`\\nabla^2 \\vec{B} = \\frac{1}{\\lambda_L^2}\\vec{B}`"></katex-element>
        
        <div class="penetration-length">
          <h4>穿透深度定义</h4>
          <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{mc^2}{4\\pi n_s e^2}} \\quad (\\text{CGS})`"></katex-element>
          <katex-element :expression="`\\lambda_L = \\sqrt{\\frac{m}{\\mu_0 n_s e^2}} \\quad (\\text{SI})`"></katex-element>
        </div>
      </div>
      
      <div class="field-profile">
        <h3>磁场分布</h3>
        <p>对于半无限超导体（x > 0），边界条件为<katex-element :expression="`B(0) = B_0`"></katex-element>：</p>
        <katex-element :expression="`B(x) = B_0 e^{-x/\\lambda_L}`"></katex-element>
        
        <div class="current-profile">
          <h4>电流分布</h4>
          <p>相应的表面电流：</p>
          <katex-element :expression="`J_s(x) = \\frac{cB_0}{4\\pi\\lambda_L} e^{-x/\\lambda_L} \\quad (\\text{CGS})`"></katex-element>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>London理论的应用</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>薄膜超导体</h3>
          <p>当薄膜厚度<katex-element :expression="`d < \\lambda_L`"></katex-element>时：</p>
          <ul>
            <li>磁场可以穿透整个薄膜</li>
            <li>电流分布近似均匀</li>
            <li>临界电流增强</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>超导条带</h3>
          <p>宽度为<katex-element :expression="`w`"></katex-element>的条带：</p>
          <ul>
            <li>边缘电流增强</li>
            <li>Pearl涡旋形成</li>
            <li>几何效应重要</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>约瑟夫森结</h3>
          <p>两个超导体间的弱连接：</p>
          <ul>
            <li>相位差驱动电流</li>
            <li>磁通量子化</li>
            <li>SQUID器件基础</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="limitations">
      <h2>理论局限性</h2>
      
      <div class="limitation-list">
        <h3>London理论的不足</h3>
        <ul>
          <li><strong>局域近似：</strong>忽略了空间色散效应</li>
          <li><strong>线性响应：</strong>仅适用于弱磁场</li>
          <li><strong>温度依赖：</strong>未考虑温度对n_s的影响</li>
          <li><strong>各向同性：</strong>假设材料各向同性</li>
        </ul>
        
        <div class="improvements">
          <h4>后续改进</h4>
          <ul>
            <li>Pippard非局域理论</li>
            <li>Ginzburg-Landau理论</li>
            <li>BCS微观理论</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>London方程描述了超导体的基本电磁性质</li>
          <li>第一方程描述电流对电场的响应，第二方程建立电流与矢量势的关系</li>
          <li>理论预测了磁场穿透深度λ_L，与实验符合良好</li>
          <li>成功解释了Meissner效应的微观机制</li>
          <li>为后续更精确的理论奠定了基础</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_2_1',
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

.historical-background {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.theory-motivation {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #27ae60;
}

.first-london-equation {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.equation-interpretation {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.second-london-equation {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #b0d4f1;
  margin: 20px 0;
}

.gauge-invariance {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #3498db;
}

.classical-approach {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.steady-state {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.quantum-justification {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.rigid-phase {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.london-penetration-depth {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #28a745;
  margin: 20px 0;
}

.penetration-length {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
}

.field-profile {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.current-profile {
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

.limitation-list {
  background: #f1f3f4;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.improvements {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #6c757d;
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
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>