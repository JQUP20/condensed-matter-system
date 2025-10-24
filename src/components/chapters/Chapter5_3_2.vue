<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">5.3.2 Anderson-Higgs机制</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">规范对称性</span>
        <span class="chapter-tag">质量生成</span>
        <span class="chapter-tag">超导体</span>
        <span class="reading-time">阅读时间：45分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Anderson-Higgs机制是现代物理学中最重要的概念之一，它解释了规范玻色子如何通过与标量场的耦合获得质量。
        这一机制最初由Anderson在超导理论中提出，后来被Higgs等人推广到粒子物理学。
        在凝聚态物理中，它解释了超导体中的Meissner效应和等离子体频率的产生，
        在粒子物理中，它是标准模型中W和Z玻色子质量生成的基础。
      </p>
    </div>

    <div class="content-section">
      <h2>规范理论基础</h2>
      
      <div class="gauge-theory">
        <div class="gauge-framework">
          <div class="gauge-card symmetry">
            <h3>🔄 规范对称性</h3>
            <div class="gauge-content">
              <div class="gauge-symmetry">
                <div class="sym-item">
                  <h4>局域规范不变性</h4>
                  <div class="sym-content">
                    <p><strong>规范变换：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(x) \rightarrow e^{i\alpha(x)}\psi(x)" :inline="false" />
                    </div>
                    
                    <p><strong>协变导数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="D_\mu = \partial_\mu - ieA_\mu" :inline="false" />
                    </div>
                    
                    <p>规范场 A_μ 确保拉格朗日量在局域规范变换下保持不变。</p>
                  </div>
                </div>
                
                <div class="sym-item">
                  <h4>规范场动力学</h4>
                  <div class="sym-content">
                    <p><strong>Maxwell拉格朗日量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\mathcal{L} = -\frac{1}{4}F_{\mu\nu}F^{\mu\nu}" :inline="false" />
                    </div>
                    
                    <p><strong>场强张量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu" :inline="false" />
                    </div>
                    
                    <p>规范场本身是无质量的，这是规范不变性的直接结果。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="gauge-card higgs">
            <h3>⚡ Higgs机制</h3>
            <div class="gauge-content">
              <div class="higgs-mechanism">
                <div class="higgs-item">
                  <h4>标量场势能</h4>
                  <div class="higgs-content">
                    <p><strong>Higgs势：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="V(\phi) = -\mu^2|\phi|^2 + \lambda|\phi|^4" :inline="false" />
                    </div>
                    
                    <p><strong>自发对称性破缺：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|\phi_0|^2 = \frac{\mu^2}{2\lambda} = \frac{v^2}{2}" :inline="false" />
                    </div>
                    
                    <p>当 μ² > 0 时，势能最小值不在原点，导致对称性自发破缺。</p>
                  </div>
                </div>
                
                <div class="higgs-item">
                  <h4>规范玻色子质量</h4>
                  <div class="higgs-content">
                    <p><strong>协变导数项：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="|D_\mu\phi|^2 = |\partial_\mu\phi - ieA_\mu\phi|^2" :inline="false" />
                    </div>
                    
                    <p><strong>质量项生成：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m_A^2 = e^2v^2" :inline="false" />
                    </div>
                    
                    <p>规范场通过与Higgs场的耦合获得质量，同时保持规范不变性。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>超导体中的Anderson-Higgs机制</h2>
      
      <div class="superconductor-theory">
        <div class="sc-framework">
          <div class="sc-card ginzburg-landau">
            <h3>🌊 Ginzburg-Landau理论</h3>
            <div class="sc-content">
              <div class="gl-theory">
                <div class="gl-item">
                  <h4>序参量</h4>
                  <div class="gl-content">
                    <p><strong>复序参量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(r) = |\psi(r)|e^{i\theta(r)}" :inline="false" />
                    </div>
                    
                    <p><strong>Cooper对密度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="n_s = |\psi|^2" :inline="false" />
                    </div>
                    
                    <p>序参量描述了超导态的宏观量子相干性。</p>
                  </div>
                </div>
                
                <div class="gl-item">
                  <h4>GL自由能</h4>
                  <div class="gl-content">
                    <p><strong>自由能密度：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f = \alpha|\psi|^2 + \frac{\beta}{2}|\psi|^4 + \frac{1}{2m^*}|(-i\hbar\nabla - e^*\vec{A})\psi|^2 + \frac{B^2}{2\mu_0}" :inline="false" />
                    </div>
                    
                    <p><strong>GL方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\alpha\psi + \beta|\psi|^2\psi + \frac{1}{2m^*}(-i\hbar\nabla - e^*\vec{A})^2\psi = 0" :inline="false" />
                    </div>
                    
                    <p>这是超导体的基本方程，类似于Higgs机制中的场方程。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="sc-card microscopic">
            <h3>🔬 微观理论</h3>
            <div class="sc-content">
              <div class="microscopic-theory">
                <div class="micro-item">
                  <h4>BCS理论</h4>
                  <div class="micro-content">
                    <p><strong>配对哈密顿量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = \sum_k \epsilon_k c_k^\dagger c_k + \sum_k \Delta_k c_{k\uparrow}^\dagger c_{-k\downarrow}^\dagger + h.c." :inline="false" />
                    </div>
                    
                    <p><strong>能隙方程：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta_k = -\sum_{k'} V_{kk'} \frac{\Delta_{k'}}{2E_{k'}} \tanh\left(\frac{E_{k'}}{2k_B T}\right)" :inline="false" />
                    </div>
                    
                    <p>Cooper对的形成导致能隙的出现，这是超导态的微观起源。</p>
                  </div>
                </div>
                
                <div class="micro-item">
                  <h4>Bogoliubov变换</h4>
                  <div class="micro-content">
                    <p><strong>准粒子算符：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\gamma_{k\uparrow} = u_k c_{k\uparrow} - v_k c_{-k\downarrow}^\dagger" :inline="false" />
                    </div>
                    
                    <p><strong>相干因子：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="u_k^2 = \frac{1}{2}\left(1 + \frac{\epsilon_k}{E_k}\right), \quad v_k^2 = \frac{1}{2}\left(1 - \frac{\epsilon_k}{E_k}\right)" :inline="false" />
                    </div>
                    
                    <p>Bogoliubov变换将电子算符转换为准粒子算符，揭示了超导态的集体激发。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>拓扑效应与涡旋</h2>
      
      <div class="topological-effects">
        <div class="topo-framework">
          <div class="topo-card vortices">
            <h3>🌀 Abrikosov涡旋</h3>
            <div class="topo-content">
              <div class="abrikosov-vortices">
                <div class="vortex-item">
                  <h4>涡旋结构</h4>
                  <div class="vortex-content">
                    <p><strong>涡旋解：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\psi(r,\theta) = f(r)e^{in\theta}" :inline="false" />
                    </div>
                    
                    <p><strong>磁通量子化：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Phi = n\Phi_0, \quad \Phi_0 = \frac{h}{2e}" :inline="false" />
                    </div>
                    
                    <p>每个涡旋携带一个磁通量子，这是拓扑保护的结果。</p>
                  </div>
                </div>
                
                <div class="vortex-item">
                  <h4>涡旋晶格</h4>
                  <div class="vortex-content">
                    <p><strong>Abrikosov参数：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\beta_A = \frac{\langle|\psi|^4\rangle}{\langle|\psi|^2\rangle^2}" :inline="false" />
                    </div>
                    
                    <p><strong>临界磁场：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H_{c2} = \frac{\Phi_0}{2\pi\xi^2}" :inline="false" />
                    </div>
                    
                    <p>在强磁场中，涡旋形成规则的三角晶格结构。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="topo-card josephson">
            <h3>⚡ Josephson效应</h3>
            <div class="topo-content">
              <div class="josephson-effects">
                <div class="jos-item">
                  <h4>直流Josephson效应</h4>
                  <div class="jos-content">
                    <p><strong>Josephson关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I = I_c \sin(\phi_2 - \phi_1)" :inline="false" />
                    </div>
                    
                    <p><strong>临界电流：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="I_c = \frac{\pi\Delta}{2eR_N} \tanh\left(\frac{\Delta}{2k_B T}\right)" :inline="false" />
                    </div>
                    
                    <p>在没有外加电压的情况下，Cooper对可以隧穿通过绝缘层。</p>
                  </div>
                </div>
                
                <div class="jos-item">
                  <h4>交流Josephson效应</h4>
                  <div class="jos-content">
                    <p><strong>频率关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\hbar\frac{d\phi}{dt} = 2eV" :inline="false" />
                    </div>
                    
                    <p><strong>Josephson频率：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="f_J = \frac{2eV}{h} \approx 484 \text{ MHz/μV}" :inline="false" />
                    </div>
                    
                    <p>外加直流电压导致交流Josephson电流的产生。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>粒子物理中的应用</h2>
      
      <div class="particle-physics">
        <div class="pp-framework">
          <div class="pp-card standard-model">
            <h3>⚛️ 标准模型</h3>
            <div class="pp-content">
              <div class="standard-model">
                <div class="sm-item">
                  <h4>电弱统一</h4>
                  <div class="sm-content">
                    <p><strong>SU(2)×U(1)规范理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="D_\mu = \partial_\mu - ig\frac{\tau^a}{2}W_\mu^a - ig'\frac{Y}{2}B_\mu" :inline="false" />
                    </div>
                    
                    <p><strong>Higgs双重态：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Phi = \begin{pmatrix} \phi^+ \\ \phi^0 \end{pmatrix}" :inline="false" />
                    </div>
                    
                    <p>电弱对称性的自发破缺产生W和Z玻色子的质量。</p>
                  </div>
                </div>
                
                <div class="sm-item">
                  <h4>质量生成</h4>
                  <div class="sm-content">
                    <p><strong>规范玻色子质量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m_W = \frac{gv}{2}, \quad m_Z = \frac{\sqrt{g^2+g'^2}v}{2}" :inline="false" />
                    </div>
                    
                    <p><strong>费米子质量：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m_f = \frac{y_f v}{\sqrt{2}}" :inline="false" />
                    </div>
                    
                    <p>所有基本粒子的质量都来源于与Higgs场的相互作用。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="pp-card beyond">
            <h3>🚀 超越标准模型</h3>
            <div class="pp-content">
              <div class="beyond-sm">
                <div class="bsm-item">
                  <h4>超对称</h4>
                  <div class="bsm-content">
                    <p><strong>超对称Higgs扇形：</strong></p>
                    <ul>
                      <li>两个Higgs双重态</li>
                      <li>五个物理Higgs玻色子</li>
                      <li>CP违反的可能性</li>
                    </ul>
                    
                    <p><strong>质量关系：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="m_{h,H}^2 = \frac{1}{2}[m_A^2 + m_Z^2 \pm \sqrt{(m_A^2 + m_Z^2)^2 - 4m_Z^2 m_A^2 \cos^2 2\beta}]" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="bsm-item">
                  <h4>额外维度</h4>
                  <div class="bsm-content">
                    <p><strong>Randall-Sundrum模型：</strong></p>
                    <ul>
                      <li>弯曲额外维度</li>
                      <li>等级问题的解决</li>
                      <li>Kaluza-Klein激发</li>
                    </ul>
                    
                    <p><strong>有效理论：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="S = \int d^4x \sqrt{-g} \left[ M_{Pl}^2 R - \Lambda + \mathcal{L}_{matter} \right]" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代应用与前沿</h2>
      
      <div class="modern-applications">
        <div class="app-framework">
          <div class="app-card quantum-tech">
            <h3>💻 量子技术</h3>
            <div class="app-content">
              <div class="quantum-applications">
                <div class="qapp-item">
                  <h4>超导量子计算</h4>
                  <div class="qapp-content">
                    <p><strong>Josephson量子比特：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="H = 4E_C n^2 - E_J \cos\phi" :inline="false" />
                    </div>
                    
                    <p><strong>量子门操作：</strong></p>
                    <ul>
                      <li>单比特旋转</li>
                      <li>CNOT门</li>
                      <li>量子纠错</li>
                    </ul>
                    
                    <p><strong>相干时间：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_1, T_2^* \sim \mu\text{s} \text{ 量级}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="qapp-item">
                  <h4>量子传感</h4>
                  <div class="qapp-content">
                    <p><strong>SQUID磁强计：</strong></p>
                    <ul>
                      <li>磁场灵敏度 ~ 10⁻¹⁸ T</li>
                      <li>脑磁图 (MEG)</li>
                      <li>地质勘探</li>
                    </ul>
                    
                    <p><strong>超导重力仪：</strong></p>
                    <ul>
                      <li>重力波探测</li>
                      <li>精密测量</li>
                      <li>基础物理检验</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="app-card condensed-matter">
            <h3>🔬 凝聚态前沿</h3>
            <div class="app-content">
              <div class="cm-applications">
                <div class="cm-item">
                  <h4>拓扑超导</h4>
                  <div class="cm-content">
                    <p><strong>p波超导体：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="\Delta(\vec{k}) = \Delta_0 (k_x \pm ik_y)" :inline="false" />
                    </div>
                    
                    <p><strong>边缘态：</strong></p>
                    <ul>
                      <li>手征Majorana费米子</li>
                      <li>拓扑保护</li>
                      <li>量子计算应用</li>
                    </ul>
                  </div>
                </div>
                
                <div class="cm-item">
                  <h4>二维超导</h4>
                  <div class="cm-content">
                    <p><strong>单层材料：</strong></p>
                    <ul>
                      <li>单层FeSe</li>
                      <li>魔角石墨烯</li>
                      <li>过渡金属硫化物</li>
                    </ul>
                    
                    <p><strong>KT相变：</strong></p>
                    <div class="formula-block">
                      <katex-element expression="T_{KT} \sim \frac{\pi\rho_s}{2k_B}" :inline="false" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import KatexElement from '../KatexElement.vue'

// 组件状态
const isLoading = ref(true)

// 生命周期
onMounted(() => {
  // 模拟加载过程
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.chapter-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: rgba(255, 255, 255, 0.8);
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

.gauge-framework, .sc-framework, .topo-framework, .pp-framework, .app-framework {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.gauge-card, .sc-card, .topo-card, .pp-card, .app-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
}

.gauge-card.symmetry {
  border-left: 5px solid #10b981;
}

.gauge-card.higgs {
  border-left: 5px solid #3b82f6;
}

.sc-card.ginzburg-landau {
  border-left: 5px solid #8b5cf6;
}

.sc-card.microscopic {
  border-left: 5px solid #f59e0b;
}

.topo-card.vortices {
  border-left: 5px solid #ef4444;
}

.topo-card.josephson {
  border-left: 5px solid #06b6d4;
}

.pp-card.standard-model {
  border-left: 5px solid #ec4899;
}

.pp-card.beyond {
  border-left: 5px solid #84cc16;
}

.app-card.quantum-tech {
  border-left: 5px solid #6366f1;
}

.app-card.condensed-matter {
  border-left: 5px solid #f97316;
}

.gauge-card h3, .sc-card h3, .topo-card h3, .pp-card h3, .app-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1rem;
}

.gauge-symmetry, .higgs-mechanism, .gl-theory, .microscopic-theory, .abrikosov-vortices, .josephson-effects, .standard-model, .beyond-sm, .quantum-applications, .cm-applications {
  display: grid;
  gap: 1.5rem;
}

.sym-item, .higgs-item, .gl-item, .micro-item, .vortex-item, .jos-item, .sm-item, .bsm-item, .qapp-item, .cm-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border-left: 3px solid #4f46e5;
}

.sym-item h4, .higgs-item h4, .gl-item h4, .micro-item h4, .vortex-item h4, .jos-item h4, .sm-item h4, .bsm-item h4, .qapp-item h4, .cm-item h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.formula-block {
  background: #f7fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  text-align: center;
  border-left: 4px solid #4f46e5;
}

.concept-box {
  background: #fef7cd;
  border: 1px solid #f59e0b;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  font-style: italic;
  text-align: center;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .gauge-framework, .sc-framework, .topo-framework, .pp-framework, .app-framework {
    grid-template-columns: 1fr;
  }
}
</style>