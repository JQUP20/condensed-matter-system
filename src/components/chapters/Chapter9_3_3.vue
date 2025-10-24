<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>9.3.3 巡游电子的量子相变：Hertz理论</h1>
      <p class="chapter-subtitle">Quantum Phase Transitions of Itinerant Electrons: Hertz Theory</p>
    </div>

    <div class="content-section">
      <h2>理论背景</h2>
      <p>Hertz理论是描述巡游电子系统量子相变的重要理论框架。它将量子相变问题转化为有效玻色场的临界现象，为理解金属中的磁性相变提供了深刻的物理图像。</p>
      
      <div class="concept-box">
        <h3>Hertz理论的核心思想</h3>
        <ul>
          <li><strong>有效玻色化</strong>：将费米子相互作用映射为玻色场理论</li>
          <li><strong>软模理论</strong>：相变由集体激发模式的软化驱动</li>
          <li><strong>维度约化</strong>：动态临界指数修正有效维度</li>
          <li><strong>非费米液体行为</strong>：临界点附近的异常标度律</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>基本理论框架</h2>
      
      <div class="formula-section">
        <h3>Hubbard-Stratonovich变换</h3>
        <p>将四费米子相互作用解耦为玻色辅助场：</p>
        <div class="formula-block">
          $$\int D\psi D\phi \exp\left[-\int d\tau d^d x \left(\psi^\dagger \partial_\tau \psi + H_0[\psi] + g\phi \psi^\dagger \sigma \psi + \frac{\phi^2}{2U}\right)\right]$$</div><p>其中$\phi$ 是玻色辅助场，$g$是耦合常数。</p>
      </div>

      <div class="formula-section">
        <h3>费米子积分</h3>
        <p>积分掉费米子自由度后得到有效作用量：</p>
        <div class="formula-block">$$S_{\text{eff}}[\phi] = \frac{1}{2U}\int \phi^2 + \text{Tr}\ln(G^{-1}[\phi])$$</div>
        
        <p>其中单粒子格林函数：</p> <div class="formula-block">$$G^{-1}[\phi] = i\omega_n - \epsilon_k - g\phi(\mathbf{q},\omega_m)$$</div>
      </div>
    </div>

    <div class="content-section">
      <h2>有效玻色理论</h2>
      
      <div class="boson-theory-section">
        <h3>Landau-Ginzburg-Wilson理论</h3>
        <p>在长波长低频极限下，有效作用量具有形式：</p> <div class="formula-block">$$S[\phi] = \int d^d x d\tau \left[\frac{1}{2}(\partial_\tau \phi)^2 + \frac{c^2}{2}(\nabla \phi)^2 + \frac{r}{2}\phi^2 + \frac{u}{4!}\phi^4\right]$$</div>
        
        <div class="parameters-explanation">
          <h4>参数的物理意义</h4>
          <ul><li>$r$：调控参数，决定相变点</li><li>$c$："光速"，由费米速度决定</li><li>$u$：四次相互作用，来自高阶费米子环</li>
          </ul>
        </div>
      </div>

      <div class="boson-theory-section">
        <h3>动态临界指数</h3>
        <p>时间和空间的不同标度关系：</p>
        <div class="formula-block">$$\tau \to b^z \tau, \quad \mathbf{x} \to b\mathbf{x}$$</div>
        
        <p>对于巡游电子系统：</p> <div class="formula-block">$$z = 2 \quad \text{(反铁磁情况)}$$$$z = 3 \quad \text{(铁磁情况)}$$</div>
        
        <div class="critical-exponents">
          <h4>临界指数的计算</h4>
          <div class="exponent-grid">
            <div class="exponent-card">
              <h5>关联长度指数</h5><p>$\nu = \frac{1}{d + z - 2}$</p>
            </div>
            <div class="exponent-card">
              <h5>磁化率指数</h5><p>$\gamma = \nu(2 - \eta)$</p>
            </div>
            <div class="exponent-card">
              <h5>比热指数</h5><p>$\alpha = 2 - \nu(d + z)$</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>反铁磁量子相变</h2>
      
      <div class="afm-section">
        <h3>嵌套费米面</h3>
        <p>反铁磁相变通常发生在具有嵌套费米面的系统中：</p>
        <div class="formula-block">$$\epsilon_{\mathbf{k}+\mathbf{Q}} = -\epsilon_{\mathbf{k}} + O(\delta)$$</div><p>其中$\mathbf{Q}$ 是嵌套矢量，$\delta$是偏离完美嵌套的程度。</p>
        
        <div class="nesting-effects">
          <h4>嵌套的物理效应</h4>
          <ul>
            <li>增强反铁磁涨落</li>
            <li>降低相变温度</li>
            <li>产生自旋密度波不稳定性</li>
            <li>修正费米液体行为</li>
          </ul>
        </div>
      </div>

      <div class="afm-section">
        <h3>自旋密度波相变</h3>
        <p>序参量为交替磁化强度：</p>
        <div class="formula-block">$$\mathbf{M}(\mathbf{r}) = \mathbf{M}_0 \cos(\mathbf{Q} \cdot \mathbf{r} + \phi)$$</div>
        
        <p>有效哈密顿量：</p> <div class="formula-block">$$H_{\text{eff}} = \sum_{\mathbf{k}} \epsilon_{\mathbf{k}} c_{\mathbf{k}}^\dagger c_{\mathbf{k}} + \Delta \sum_{\mathbf{k}} (c_{\mathbf{k}+\mathbf{Q}}^\dagger c_{\mathbf{k}} + \text{h.c.})$$</div>
        
        <div class="sdw-properties">
          <h4>自旋密度波的性质</h4>
          <ul><li>能隙开启：$\Delta \propto |\mathbf{M}_0|$</li>
            <li>费米面重构</li>
            <li>准粒子激发谱修正</li>
            <li>输运性质变化</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>铁磁量子相变</h2>
      
      <div class="fm-section">
        <h3>Stoner不稳定性</h3>
        <p>铁磁相变的Stoner判据：</p>
        <div class="formula-block">$$U N(0) > 1$$</div><p>其中$U$ 是Hubbard相互作用，$N(0)$是费米面态密度。</p>
        
        <div class="stoner-mechanism">
          <h4>Stoner机制</h4>
          <ul><li>交换分裂：$\epsilon_{\mathbf{k}\uparrow} = \epsilon_{\mathbf{k}} - UM$</li><li>自洽方程：$M = \sum_{\mathbf{k}} \langle n_{\mathbf{k}\uparrow} - n_{\mathbf{k}\downarrow} \rangle$</li>
            <li>能量增益：交换能 vs 动能代价</li>
          </ul>
        </div>
      </div>

      <div class="fm-section">
        <h3>量子临界行为</h3>
        <p>铁磁量子临界点的特殊性质：</p>
        <div class="formula-block">$$z = d \quad \text{(上临界维度以下)}$$</div>
        
        <div class="fm-critical-behavior">
          <h4>临界行为特征</h4>
          <div class="behavior-grid">
            <div class="behavior-card">
              <h5>磁化率</h5><p>$\chi \propto T^{-4/3}$(3D)</p>
              <p>对数发散 (2D)</p>
            </div>
            <div class="behavior-card">
              <h5>比热</h5><p>$C \propto T \ln T$(3D)</p><p>$C \propto T^{1/2}$(2D)</p>
            </div>
            <div class="behavior-card">
              <h5>电阻率</h5><p>$\rho \propto T^{5/3}$(3D)</p><p>$\rho \propto T$(2D)</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群分析</h2>
      
      <div class="rg-section">
        <h3>Wilson-Fisher不动点</h3><p>$\epsilon = 4 - d$展开中的β函数：</p>
        <div class="formula-block">$$\beta_u = -\epsilon u + \frac{N+8}{6}u^2 + O(u^3)$$</div>
        
        <p>不动点值：</p> <div class="formula-block">$$u^* = \frac{6\epsilon}{N+8} + O(\epsilon^2)$$</div>
        
        <div class="rg-flow">
          <h4>重整化群流</h4>
          <ul><li>高斯不动点：$u = 0$（上临界维度以上）</li><li>Wilson-Fisher不动点：$u = u^*$（下临界维度）</li>
            <li>临界指数的计算</li>
            <li>标度函数的确定</li>
          </ul>
        </div>
      </div>

      <div class="rg-section">
        <h3>危险不相干算符</h3>
        <p>费米面曲率等不相干算符在临界点变得相干：</p>
        <div class="formula-block">$$\mathcal{O}_{\text{curvature}} \sim (\nabla^2)^2 \phi^2$$</div>
        
        <div class="dangerous-operators">
          <h4>主要的危险算符</h4>
          <ul>
            <li>费米面曲率</li>
            <li>费米速度各向异性</li>
            <li>无序效应</li>
            <li>声子耦合</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>实验观测</h2>
      
      <div class="experimental-section">
        <h3>重费米子系统</h3>
        
        <div class="heavy-fermion-examples">
          <div class="example-card">
            <h4>CeCu₆₋ₓAuₓ</h4>
            <ul>
              <li>反铁磁量子临界点</li><li>$T_N \propto x^{1/2}$</li>
              <li>非费米液体行为</li><li>$C/T \propto -\ln T$</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>YbRh₂Si₂</h4>
            <ul>
              <li>磁场调控的QCP</li>
              <li>费米面重构</li>
              <li>奇异金属相</li>
              <li>霍尔效应异常</li>
            </ul>
          </div>

          <div class="example-card">
            <h4>CeRhIn₅</h4>
            <ul>
              <li>压力调控的QCP</li>
              <li>超导与磁性竞争</li>
              <li>d波配对</li>
              <li>量子临界涨落</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="experimental-section">
        <h3>铁基超导体</h3>
        <p>铁基超导体中的磁性量子相变：</p>
        
        <div class="iron-superconductor-features">
          <h4>关键实验观测</h4>
          <ul>
            <li>结构相变与磁性相变</li>
            <li>嵌套费米面</li>
            <li>自旋涨落介导的配对</li>
            <li>s±配对对称性</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>理论扩展与修正</h2>
      
      <div class="extensions-section">
        <h3>超越Hertz理论</h3>
        
        <div class="beyond-hertz">
          <div class="extension-card">
            <h4>费米面涨落</h4>
            <p>考虑费米面形状的量子涨落：</p>
            <ul>
              <li>费米面重构</li>
              <li>Lifshitz相变</li>
              <li>拓扑相变</li>
            </ul>
          </div>

          <div class="extension-card">
            <h4>无序效应</h4>
            <p>杂质散射对量子临界行为的影响：</p>
            <ul>
              <li>Harris判据</li>
              <li>无序平均</li>
              <li>局域化效应</li>
            </ul>
          </div>

          <div class="extension-card">
            <h4>多体局域化</h4>
            <p>强相互作用与无序的竞争：</p>
            <ul>
              <li>热化失效</li>
              <li>本征态相变</li>
              <li>纠缠熵标度</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="extensions-section">
        <h3>数值方法</h3>
        
        <div class="numerical-methods">
          <div class="method-card">
            <h4>量子蒙特卡罗</h4>
            <ul>
              <li>确定性量子蒙特卡罗</li>
              <li>辅助场方法</li>
              <li>符号问题</li>
              <li>有限尺寸标度</li>
            </ul>
          </div>

          <div class="method-card">
            <h4>动力学平均场理论</h4>
            <ul>
              <li>局域自能近似</li>
              <li>杂质求解器</li>
              <li>集团扩展</li>
              <li>非平衡态推广</li>
            </ul>
          </div>

          <div class="method-card">
            <h4>函数重整化群</h4>
            <ul>
              <li>费米面patch方法</li>
              <li>相互作用流</li>
              <li>奇点分析</li>
              <li>相图构建</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>应用与前沿</h2>
      
      <div class="applications-section">
        <div class="application-card">
          <h3>高温超导</h3>
          <p>量子临界涨落与超导配对：</p>
          <ul>
            <li>自旋涨落介导的配对</li>
            <li>赝能隙现象</li>
            <li>奇异金属相</li>
            <li>相图的普适性</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>拓扑量子材料</h3>
          <p>拓扑相变与量子临界性：</p>
          <ul>
            <li>拓扑绝缘体</li>
            <li>Weyl半金属</li>
            <li>拓扑超导体</li>
            <li>量子自旋液体</li>
          </ul>
        </div>

        <div class="application-card">
          <h3>冷原子系统</h3>
          <p>人工量子系统中的实现：</p>
          <ul>
            <li>光晶格中的Hubbard模型</li>
            <li>可调相互作用</li>
            <li>实时动力学</li>
            <li>量子模拟</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-grid">
        <div class="summary-item">
          <h3>理论框架</h3>
          <ul>
            <li>Hubbard-Stratonovich变换</li>
            <li>有效玻色理论</li>
            <li>动态临界指数</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>相变类型</h3>
          <ul>
            <li>反铁磁相变</li>
            <li>铁磁相变</li>
            <li>自旋密度波</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>临界行为</h3>
          <ul>
            <li>非费米液体</li>
            <li>异常标度律</li>
            <li>量子临界扇形</li>
          </ul>
        </div>
        <div class="summary-item">
          <h3>实验系统</h3>
          <ul>
            <li>重费米子</li>
            <li>铁基超导体</li>
            <li>冷原子气体</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 40px;
  padding: 30px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
}

.chapter-header h1 {
  font-size: 2.3em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-style: italic;
}

.content-section {
  margin-bottom: 40px;
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 25px;
  font-size: 1.8em;
}

.concept-box {
  background: #e8f4fd;
  border-left: 5px solid #3498db;
  padding: 20px;
  margin: 20px 0;
  border-radius: 5px;
}

.concept-box h3 {
  color: #2980b9;
  margin-bottom: 15px;
}

.concept-box ul {
  padding-left: 20px;
}

.concept-box li {
  margin: 8px 0;
}

.formula-section, .boson-theory-section, .afm-section, .fm-section, .rg-section, .experimental-section, .extensions-section {
  margin: 25px 0;
  padding: 20px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.formula-section h3, .boson-theory-section h3, .afm-section h3, .fm-section h3, .rg-section h3, .experimental-section h3, .extensions-section h3 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  text-align: center;
  font-size: 1.1em;
  overflow-x: auto;
}

.parameters-explanation, .nesting-effects, .sdw-properties, .stoner-mechanism, .rg-flow, .dangerous-operators, .iron-superconductor-features {
  margin: 20px 0;
  padding: 15px;
  background: #f0f8ff;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.parameters-explanation h4, .nesting-effects h4, .sdw-properties h4, .stoner-mechanism h4, .rg-flow h4, .dangerous-operators h4, .iron-superconductor-features h4 {
  color: #2980b9;
  margin-bottom: 10px;
}

.parameters-explanation ul, .nesting-effects ul, .sdw-properties ul, .stoner-mechanism ul, .rg-flow ul, .dangerous-operators ul, .iron-superconductor-features ul {
  padding-left: 20px;
}

.critical-exponents {
  margin: 25px 0;
}

.exponent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.exponent-card {
  background: #fff3cd;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
  text-align: center;
}

.exponent-card h5 {
  color: #d68910;
  margin-bottom: 8px;
}

.fm-critical-behavior {
  margin: 25px 0;
}

.behavior-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.behavior-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
}

.behavior-card h5 {
  color: #e74c3c;
  margin-bottom: 8px;
}

.heavy-fermion-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.example-card {
  background: #e8f5e8;
  padding: 20px;
  border-radius: 10px;
  border-top: 4px solid #27ae60;
}

.example-card h4 {
  color: #27ae60;
  margin-bottom: 15px;
  text-align: center;
}

.example-card ul {
  padding-left: 20px;
}

.example-card li {
  margin: 8px 0;
}

.beyond-hertz {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.extension-card {
  background: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid #3498db;
}

.extension-card h4 {
  color: #2980b9;
  margin-bottom: 15px;
}

.extension-card ul {
  padding-left: 20px;
}

.extension-card li {
  margin: 6px 0;
}

.numerical-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.method-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #9b59b6;
  transition: transform 0.3s ease;
}

.method-card:hover {
  transform: translateY(-5px);
}

.method-card h4 {
  color: #8e44ad;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.method-card ul {
  padding-left: 20px;
}

.method-card li {
  margin: 8px 0;
}

.applications-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
}

.application-card {
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  border-top: 4px solid #27ae60;
  transition: transform 0.3s ease;
}

.application-card:hover {
  transform: translateY(-5px);
}

.application-card h3 {
  color: #27ae60;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.application-card ul {
  padding-left: 20px;
}

.application-card li {
  margin: 8px 0;
}

.summary-section {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  margin-top: 40px;
}

.summary-section h2 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 15px;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
}

.summary-item h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.summary-item ul {
  list-style: none;
  padding: 0;
}

.summary-item li {
  padding: 5px 0;
  padding-left: 20px;
  position: relative;
}

.summary-item li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #ffeaa7;
  font-weight: bold;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 1.8em;
  }
  
  .exponent-grid, .behavior-grid {
    grid-template-columns: 1fr;
  }
  
  .heavy-fermion-examples {
    grid-template-columns: 1fr;
  }
  
  .beyond-hertz {
    grid-template-columns: 1fr;
  }
  
  .numerical-methods {
    grid-template-columns: 1fr;
  }
  
  .applications-section {
    grid-template-columns: 1fr;
  }
}
</style>