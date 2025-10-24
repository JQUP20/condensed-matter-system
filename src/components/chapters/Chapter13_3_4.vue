<template>
  <div class="chapter-content">
    <h1>13.3.4 涡旋解</h1>
    
    <section class="introduction">
      <h2>涡旋的基本概念</h2>
      
      <div class="vortex-overview">
        <p>在第二类超导体中，当外磁场超过下临界磁场H_c1时，磁通以量子化的形式穿透超导体，形成涡旋（vortex）结构。</p>
        
        <div class="flux-quantization">
          <h3>磁通量子化</h3>
          <katex-element :expression="`\\Phi_0 = \\frac{h}{2e} = 2.07 \\times 10^{-15} \\text{ Wb}`"></katex-element>
          <p>每个涡旋携带一个磁通量子Φ₀</p>
        </div>
      </div>
    </section>

    <section class="vortex-structure">
      <h2>涡旋的结构</h2>
      
      <div class="structure-components">
        <div class="component-card core">
          <h3>涡旋核心</h3>
          <div class="core-properties">
            <h4>尺寸</h4>
            <katex-element :expression="`r_{core} \\sim \\xi`"></katex-element>
            
            <h4>性质</h4>
            <ul>
              <li>序参量|ψ| ≈ 0</li>
              <li>正常态电子</li>
              <li>有限电阻</li>
              <li>准粒子态</li>
            </ul>
          </div>
        </div>
        
        <div class="component-card field">
          <h3>磁场分布</h3>
          <div class="field-properties">
            <h4>穿透范围</h4>
            <katex-element :expression="`r_{field} \\sim \\lambda`"></katex-element>
            
            <h4>分布函数</h4>
            <katex-element :expression="`B(r) \\approx \\frac{\\Phi_0}{2\\pi\\lambda^2} K_0\\left(\\frac{r}{\\lambda}\\right)`"></katex-element>
            <p>其中K₀是修正贝塞尔函数</p>
          </div>
        </div>
        
        <div class="component-card current">
          <h3>环形电流</h3>
          <div class="current-properties">
            <h4>电流密度</h4>
            <katex-element :expression="`\\mathbf{j}(r) = -\\frac{\\Phi_0}{2\\pi\\mu_0\\lambda^3} K_1\\left(\\frac{r}{\\lambda}\\right) \\hat{\\phi}`"></katex-element>
            
            <h4>总电流</h4>
            <katex-element :expression="`I_{total} = \\frac{\\Phi_0}{\\mu_0\\lambda}`"></katex-element>
          </div>
        </div>
      </div>
    </section>

    <section class="gl-vortex-solution">
      <h2>GL方程的涡旋解</h2>
      
      <div class="cylindrical-coordinates">
        <h3>柱坐标系中的GL方程</h3>
        
        <div class="ansatz">
          <h4>涡旋解的形式</h4>
          <katex-element :expression="`\\psi(r,\\phi) = f(r) e^{in\\phi}`"></katex-element>
          <katex-element :expression="`\\mathbf{A} = A_\\phi(r) \\hat{\\phi}`"></katex-element>
          
          <div class="winding-number">
            <p><strong>绕数n：</strong>涡旋的拓扑荷，通常n = ±1</p>
          </div>
        </div>
        
        <div class="radial-equations">
          <h4>径向方程</h4>
          <katex-element :expression="`-\\frac{\\hbar^2}{2m^*} \\left[ \\frac{d^2f}{dr^2} + \\frac{1}{r}\\frac{df}{dr} - \\frac{n^2}{r^2}f \\right] + \\frac{\\hbar^2 e^{*2}}{2m^*} A_\\phi^2 f + \\alpha f + \\beta f^3 = 0`"></katex-element>
          
          <katex-element :expression="`\\frac{1}{\\mu_0} \\left[ \\frac{1}{r} \\frac{d}{dr}\\left(r \\frac{dA_\\phi}{dr}\\right) - \\frac{A_\\phi}{r^2} \\right] = \\frac{\\hbar e^*}{m^*} f^2 \\left( \\frac{n}{r} - \\frac{e^*}{\\hbar} A_\\phi \\right)`"></katex-element>
        </div>
      </div>
      
      <div class="boundary-conditions">
        <h3>边界条件</h3>
        
        <div class="origin-conditions">
          <h4>r = 0处</h4>
          <ul>
            <li>f(0) = 0 (n ≠ 0时)</li>
            <li>A_φ(0) = 0</li>
            <li>df/dr|_{r=0} 有限</li>
          </ul>
        </div>
        
        <div class="infinity-conditions">
          <h4>r → ∞处</h4>
          <ul>
            <li>f(∞) → f_∞ = √(-α/β)</li>
            <li>A_φ(∞) → nΦ₀/(2πr)</li>
            <li>B(∞) → H_ext</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="single-vortex">
      <h2>单涡旋解</h2>
      
      <div class="london-limit">
        <h3>London极限 (κ ≫ 1)</h3>
        
        <div class="approximations">
          <h4>近似条件</h4>
          <ul>
            <li>ξ ≪ λ：相干长度远小于穿透深度</li>
            <li>涡旋核心很小</li>
            <li>磁场分布主要由λ决定</li>
          </ul>
        </div>
        
        <div class="london-solution">
          <h4>London解</h4>
          <katex-element :expression="`f(r) \\approx \\begin{cases} 
            \\frac{r}{\\xi} & r \\ll \\xi \\\\
            f_\\infty & r \\gg \\xi
          \\end{cases}`"></katex-element>
          
          <katex-element :expression="`B(r) = \\frac{\\Phi_0}{2\\pi\\lambda^2} K_0\\left(\\frac{r}{\\lambda}\\right)`"></katex-element>
          
          <div class="field-behavior">
            <h5>磁场行为</h5>
            <ul>
              <li>r ≪ λ：B(r) ≈ -(Φ₀/2πλ²)ln(r/λ)</li>
              <li>r ≫ λ：B(r) ≈ (Φ₀/2πλr)^(1/2) exp(-r/λ)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="numerical-solutions">
        <h3>数值解</h3>
        
        <div class="solution-profiles">
          <h4>典型解的轮廓</h4>
          
          <div class="profile-description">
            <div class="order-parameter">
              <h5>序参量f(r)</h5>
              <ul>
                <li>r = 0：f(0) = 0</li>
                <li>r ~ ξ：快速上升</li>
                <li>r ≫ ξ：趋于体值f_∞</li>
              </ul>
            </div>
            
            <div class="magnetic-field">
              <h5>磁场B(r)</h5>
              <ul>
                <li>r = 0：B(0) 有限</li>
                <li>r ~ λ：指数衰减</li>
                <li>r ≫ λ：趋于零</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="kappa-dependence">
          <h4>κ依赖性</h4>
          
          <div class="kappa-effects">
            <div class="small-kappa">
              <h5>小κ (κ < 1/√2)</h5>
              <ul>
                <li>涡旋不稳定</li>
                <li>第一类超导体</li>
                <li>界面能为正</li>
              </ul>
            </div>
            
            <div class="large-kappa">
              <h5>大κ (κ ≫ 1)</h5>
              <ul>
                <li>涡旋稳定</li>
                <li>London近似有效</li>
                <li>核心和磁场区域分离</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="vortex-energy">
      <h2>涡旋能量</h2>
      
      <div class="energy-components">
        <h3>能量构成</h3>
        
        <div class="total-energy">
          <h4>总能量</h4>
          <katex-element :expression="`E_{vortex} = E_{kinetic} + E_{magnetic} + E_{condensation}`"></katex-element>
        </div>
        
        <div class="energy-breakdown">
          <div class="kinetic-energy">
            <h4>动能</h4>
            <katex-element :expression="`E_{kinetic} = \\int \\frac{\\hbar^2}{2m^*} |\\nabla \\psi|^2 d^2r`"></katex-element>
          </div>
          
          <div class="magnetic-energy">
            <h4>磁能</h4>
            <katex-element :expression="`E_{magnetic} = \\int \\frac{B^2}{2\\mu_0} d^2r`"></katex-element>
          </div>
          
          <div class="condensation-energy">
            <h4>凝聚能损失</h4>
            <katex-element :expression="`E_{condensation} = \\int \\frac{\\alpha}{2} |\\psi|^2 + \\frac{\\beta}{4} |\\psi|^4 d^2r`"></katex-element>
          </div>
        </div>
      </div>
      
      <div class="energy-calculation">
        <h3>能量计算</h3>
        
        <div class="london-energy">
          <h4>London极限</h4>
          <katex-element :expression="`E_{vortex} \\approx \\frac{\\Phi_0^2}{4\\pi\\mu_0\\lambda^2} \\ln\\left(\\frac{\\Lambda}{\\xi}\\right)`"></katex-element>
          
          <div class="cutoff-parameter">
            <p>其中Λ是截断参数，通常Λ ~ λ或系统尺寸</p>
          </div>
        </div>
        
        <div class="core-energy">
          <h4>核心能量</h4>
          <katex-element :expression="`E_{core} \\approx \\frac{\\mu_0 H_c^2}{2} \\pi \\xi^2`"></katex-element>
          
          <div class="core-contribution">
            <p>核心能量通常远小于磁场能量（κ ≫ 1时）</p>
          </div>
        </div>
      </div>
    </section>

    <section class="vortex-interactions">
      <h2>涡旋相互作用</h2>
      
      <div class="pairwise-interaction">
        <h3>两涡旋相互作用</h3>
        
        <div class="interaction-energy">
          <h4>相互作用能</h4>
          <katex-element :expression="`U(R) = \\frac{\\Phi_0^2}{4\\pi\\mu_0\\lambda^2} K_0\\left(\\frac{R}{\\lambda}\\right)`"></katex-element>
          
          <div class="distance-regimes">
            <h5>距离依赖</h5>
            <ul>
              <li>R ≪ λ：U(R) ≈ -(Φ₀²/4π²μ₀λ²)ln(R/λ)</li>
              <li>R ≫ λ：U(R) ≈ (Φ₀²/8π^(3/2)μ₀λ^(3/2)R^(1/2))exp(-R/λ)</li>
            </ul>
          </div>
        </div>
        
        <div class="force-law">
          <h4>相互作用力</h4>
          <katex-element :expression="`F(R) = -\\frac{dU}{dR} = \\frac{\\Phi_0^2}{4\\pi\\mu_0\\lambda^3} K_1\\left(\\frac{R}{\\lambda}\\right)`"></katex-element>
          
          <div class="repulsion">
            <p><strong>排斥性：</strong>同向涡旋相互排斥</p>
          </div>
        </div>
      </div>
      
      <div class="many-body">
        <h3>多体效应</h3>
        
        <div class="vortex-lattice">
          <h4>涡旋晶格</h4>
          <ul>
            <li>Abrikosov晶格</li>
            <li>三角形排列</li>
            <li>最小能量构型</li>
          </ul>
          
          <div class="lattice-parameter">
            <katex-element :expression="`a_{lattice} \\approx \\sqrt{\\frac{2\\Phi_0}{\\sqrt{3}B}}`"></katex-element>
          </div>
        </div>
        
        <div class="elastic-properties">
          <h4>弹性性质</h4>
          <ul>
            <li>压缩模量</li>
            <li>剪切模量</li>
            <li>倾斜模量</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="vortex-dynamics">
      <h2>涡旋动力学</h2>
      
      <div class="motion-equation">
        <h3>运动方程</h3>
        
        <div class="force-balance">
          <h4>力平衡方程</h4>
          <katex-element :expression="`\\eta \\frac{d\\mathbf{r}_i}{dt} + \\alpha_H \\hat{\\mathbf{z}} \\times \\frac{d\\mathbf{r}_i}{dt} = \\mathbf{F}_i^{Lorentz} + \\mathbf{F}_i^{pin} + \\mathbf{F}_i^{vv}`"></katex-element>
          
          <div class="force-terms">
            <h5>力的组成</h5>
            <ul>
              <li>η：粘滞阻尼系数</li>
              <li>α_H：Hall系数</li>
              <li>F^Lorentz：洛伦兹力</li>
              <li>F^pin：钉扎力</li>
              <li>F^vv：涡旋-涡旋相互作用力</li>
            </ul>
          </div>
        </div>
        
        <div class="flux-flow">
          <h4>磁通流动</h4>
          <katex-element :expression="`\\mathbf{v}_v = \\frac{\\mathbf{E} \\times \\mathbf{B}}{B^2}`"></katex-element>
          
          <div class="resistivity">
            <h5>流动电阻率</h5>
            <katex-element :expression="`\\rho_{ff} = \\rho_n \\frac{B}{H_{c2}}`"></katex-element>
          </div>
        </div>
      </div>
      
      <div class="pinning-effects">
        <h3>钉扎效应</h3>
        
        <div class="pinning-mechanisms">
          <h4>钉扎机制</h4>
          <ul>
            <li>点缺陷钉扎</li>
            <li>位错钉扎</li>
            <li>晶界钉扎</li>
            <li>人工钉扎中心</li>
          </ul>
        </div>
        
        <div class="critical-current">
          <h4>临界电流</h4>
          <katex-element :expression="`J_c = \\frac{F_{pin}}{\\Phi_0}`"></katex-element>
          
          <div class="current-voltage">
            <h5>电流-电压特性</h5>
            <ul>
              <li>J < J_c：零电阻</li>
              <li>J > J_c：磁通流动</li>
              <li>非线性I-V关系</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="experimental-observations">
      <h2>实验观测</h2>
      
      <div class="imaging-techniques">
        <h3>成像技术</h3>
        
        <div class="technique-grid">
          <div class="technique-card">
            <h4>磁光成像</h4>
            <ul>
              <li>实时观测</li>
              <li>磁场分布</li>
              <li>涡旋运动</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>扫描SQUID</h4>
            <ul>
              <li>高分辨率</li>
              <li>单涡旋探测</li>
              <li>磁场定量测量</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>扫描隧道显微镜</h4>
            <ul>
              <li>原子分辨率</li>
              <li>涡旋核心结构</li>
              <li>准粒子态密度</li>
            </ul>
          </div>
          
          <div class="technique-card">
            <h4>中子散射</h4>
            <ul>
              <li>涡旋晶格</li>
              <li>集体模式</li>
              <li>弹性常数</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="key-observations">
        <h3>关键实验结果</h3>
        
        <div class="observation-list">
          <ul>
            <li>磁通量子化的直接验证</li>
            <li>涡旋核心的六重对称性</li>
            <li>Abrikosov晶格的观测</li>
            <li>涡旋玻璃态的发现</li>
            <li>涡旋液体相的确认</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="applications">
      <h2>应用与意义</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>超导器件</h3>
          <ul>
            <li>SQUID器件</li>
            <li>磁通量子比特</li>
            <li>约瑟夫森结阵列</li>
            <li>超导量子干涉</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>电力应用</h3>
          <ul>
            <li>超导电缆</li>
            <li>超导磁体</li>
            <li>限流器</li>
            <li>储能系统</li>
          </ul>
        </div>
        
        <div class="application-card">
          <h3>基础研究</h3>
          <ul>
            <li>拓扑超导</li>
            <li>量子相变</li>
            <li>非平衡态物理</li>
            <li>集体激发</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节小结</h2>
      
      <div class="summary-points">
        <ul>
          <li>涡旋是第二类超导体中磁通穿透的基本单元</li>
          <li>每个涡旋携带一个磁通量子Φ₀ = h/2e</li>
          <li>涡旋具有核心-磁场的双重结构</li>
          <li>GL方程给出了涡旋的完整描述</li>
          <li>涡旋间存在长程排斥相互作用</li>
          <li>涡旋动力学决定了超导体的输运性质</li>
          <li>钉扎效应对实际应用至关重要</li>
          <li>现代实验技术可直接观测涡旋结构</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter13_3_4',
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
  border-bottom: 3px solid #9b59b6;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

h2 {
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 20px;
  border-left: 4px solid #9b59b6;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
}

.vortex-overview {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.flux-quantization {
  background: rgba(255,255,255,0.1);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  text-align: center;
}

.structure-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.component-card {
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.core {
  background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
}

.field {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
}

.current {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
}

.core-properties,
.field-properties,
.current-properties {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  text-align: left;
}

.cylindrical-coordinates {
  background: #f0fff4;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c6f6d5;
  margin: 20px 0;
}

.ansatz,
.radial-equations {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #27ae60;
}

.winding-number {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-style: italic;
}

.boundary-conditions {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.origin-conditions,
.infinity-conditions {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.origin-conditions {
  border-left: 4px solid #e53e3e;
}

.infinity-conditions {
  border-left: 4px solid #3182ce;
}

.london-limit {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6c757d;
  margin: 20px 0;
}

.approximations,
.london-solution {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #6c757d;
}

.field-behavior {
  background: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.numerical-solutions {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.solution-profiles,
.kappa-dependence {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.profile-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
}

.order-parameter,
.magnetic-field {
  background: white;
  padding: 10px;
  border-radius: 5px;
}

.kappa-effects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 15px;
}

.small-kappa,
.large-kappa {
  background: white;
  padding: 10px;
  border-radius: 5px;
}

.energy-components {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c3e6c3;
  margin: 20px 0;
}

.total-energy {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  border-left: 4px solid #28a745;
  text-align: center;
}

.energy-breakdown {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.kinetic-energy,
.magnetic-energy,
.condensation-energy {
  background: white;
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.energy-calculation {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #b3d9ff;
  margin: 20px 0;
}

.london-energy,
.core-energy {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #2196f3;
}

.cutoff-parameter,
.core-contribution {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  font-style: italic;
}

.pairwise-interaction {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.interaction-energy,
.force-law {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.distance-regimes {
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.repulsion {
  background: #fff5f5;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  border-left: 3px solid #e53e3e;
  font-weight: bold;
}

.many-body {
  background: #fff5f5;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #fed7d7;
  margin: 20px 0;
}

.vortex-lattice,
.elastic-properties {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #e53e3e;
}

.lattice-parameter {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
}

.motion-equation {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #6c757d;
  margin: 20px 0;
}

.force-balance,
.flux-flow {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border-left: 4px solid #6c757d;
}

.force-terms {
  background: #e9ecef;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.resistivity {
  background: #f7fafc;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  text-align: center;
}

.pinning-effects {
  background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
}

.pinning-mechanisms,
.critical-current {
  background: rgba(255,255,255,0.8);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
}

.current-voltage {
  background: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.imaging-techniques {
  background: #f0fff4;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c6f6d5;
  margin: 20px 0;
}

.technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.technique-card {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.key-observations {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  border-left: 4px solid #27ae60;
}

.observation-list ul {
  list-style-type: none;
  padding: 0;
}

.observation-list li {
  background: #f8f9fa;
  margin: 8px 0;
  padding: 10px;
  border-radius: 5px;
  border-left: 3px solid #27ae60;
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

.summary {
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  border: 2px solid #9b59b6;
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
  border-left: 4px solid #9b59b6;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

ul {
  padding-left: 20px;
}

li {
  margin: 8px 0;
}

@media (max-width: 768px) {
  .structure-components,
  .profile-description,
  .kappa-effects,
  .energy-breakdown,
  .technique-grid,
  .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-content {
    padding: 15px;
  }
}
</style>