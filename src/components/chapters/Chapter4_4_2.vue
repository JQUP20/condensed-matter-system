<template>
  <div class="chapter-container">
    <h1 class="chapter-title">4.4.2 费米液体准粒子的散射率、黄金定则和测定表征</h1>
    
    <!-- 引言 -->
    <section class="intro-section">
      <h2>引言</h2>
      <p>
        在费米液体理论中，准粒子的散射率是决定系统输运性质的关键参数。通过费米黄金定则，
        我们可以计算准粒子的寿命和散射率，并通过各种实验手段对其进行测定和表征。
        本节将详细讨论这些概念及其在实际系统中的应用。
      </p>
    </section>

    <!-- 费米黄金定则 -->
    <section class="golden-rule-section">
      <h2>费米黄金定则</h2>
      
      <div class="theory-content">
        <h3>基本形式</h3>
        <div class="formula-box">
          <p><strong>跃迁率：</strong></p>
          <p>Γ<sub>i→f</sub> = (2π/ℏ)|⟨f|H'|i⟩|²δ(E<sub>f</sub> - E<sub>i</sub>)</p>
        </div>
        
        <h3>准粒子散射率</h3>
        <div class="scattering-grid">
          <div class="scattering-card">
            <h4>单粒子散射率</h4>
            <p>1/τ(k) = ∑<sub>k'</sub> W(k,k') [1 - f(E<sub>k'</sub>)]</p>
            <p>其中 W(k,k') 是散射矩阵元</p>
          </div>
          
          <div class="scattering-card">
            <h4>温度依赖性</h4>
            <p>低温下：1/τ ∝ T²</p>
            <p>这是费米液体的标志性行为</p>
          </div>
          
          <div class="scattering-card">
            <h4>能量依赖性</h4>
            <p>1/τ(ε) ∝ ε² (ε ≪ E<sub>F</sub>)</p>
            <p>反映了相空间限制</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 散射机制 -->
    <section class="scattering-mechanisms">
      <h2>主要散射机制</h2>
      
      <div class="mechanisms-grid">
        <div class="mechanism-card">
          <h3>电子-电子散射</h3>
          <div class="mechanism-details">
            <h4>库仑相互作用</h4>
            <p>V(q) = e²/(εq²)</p>
            <p>屏蔽效应：V<sub>eff</sub>(q) = V(q)/ε(q,ω)</p>
            
            <h4>散射率计算</h4>
            <p>1/τ<sub>ee</sub> ∝ (k<sub>B</sub>T)²/E<sub>F</sub></p>
            <p>体现了费米液体的T²行为</p>
          </div>
        </div>
        
        <div class="mechanism-card">
          <h3>电子-声子散射</h3>
          <div class="mechanism-details">
            <h4>形变势耦合</h4>
            <p>H<sub>ep</sub> = ∑<sub>k,q</sub> g<sub>q</sub> c†<sub>k+q</sub>c<sub>k</sub>(b<sub>q</sub> + b†<sub>-q</sub>)</p>
            
            <h4>温度依赖性</h4>
            <p>高温：1/τ<sub>ep</sub> ∝ T</p>
            <p>低温：1/τ<sub>ep</sub> ∝ T⁵</p>
          </div>
        </div>
        
        <div class="mechanism-card">
          <h3>杂质散射</h3>
          <div class="mechanism-details">
            <h4>无序势</h4>
            <p>V<sub>imp</sub> = ∑<sub>i</sub> V<sub>i</sub>δ(r - R<sub>i</sub>)</p>
            
            <h4>散射率</h4>
            <p>1/τ<sub>imp</sub> = n<sub>imp</sub>⟨|V<sub>i</sub>|²⟩ν(E<sub>F</sub>)</p>
            <p>与温度无关</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 输运性质 -->
    <section class="transport-properties">
      <h2>输运性质</h2>
      
      <div class="transport-grid">
        <div class="transport-card">
          <h3>电导率</h3>
          <div class="property-details">
            <h4>Drude公式</h4>
            <p>σ = ne²τ/m*</p>
            
            <h4>温度依赖性</h4>
            <p>σ(T) = σ₀/(1 + (T/T₀)²)</p>
            <p>其中 T₀ 是特征温度</p>
          </div>
        </div>
        
        <div class="transport-card">
          <h3>热导率</h3>
          <div class="property-details">
            <h4>Wiedemann-Franz定律</h4>
            <p>κ/σT = L₀ = π²k<sub>B</sub>²/(3e²)</p>
            
            <h4>修正</h4>
            <p>L = L₀[1 + α(T/T<sub>F</sub>)²]</p>
          </div>
        </div>
        
        <div class="transport-card">
          <h3>霍尔效应</h3>
          <div class="property-details">
            <h4>霍尔系数</h4>
            <p>R<sub>H</sub> = 1/(nec)</p>
            
            <h4>量子修正</h4>
            <p>包含轨道磁化率的贡献</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验测定方法 -->
    <section class="experimental-methods">
      <h2>实验测定方法</h2>
      
      <div class="methods-container">
        <div class="method-category">
          <h3>光谱学方法</h3>
          <div class="method-list">
            <div class="method-item">
              <h4>角分辨光电子谱(ARPES)</h4>
              <p>直接测量准粒子能带和寿命</p>
              <p>分辨率：ΔE ~ 1-10 meV</p>
            </div>
            
            <div class="method-item">
              <h4>隧道谱</h4>
              <p>测量准粒子态密度</p>
              <p>dI/dV ∝ N(eV)</p>
            </div>
            
            <div class="method-item">
              <h4>量子振荡</h4>
              <p>de Haas-van Alphen效应</p>
              <p>Shubnikov-de Haas效应</p>
            </div>
          </div>
        </div>
        
        <div class="method-category">
          <h3>输运测量</h3>
          <div class="method-list">
            <div class="method-item">
              <h4>电阻率测量</h4>
              <p>ρ(T) = ρ₀ + AT²</p>
              <p>A系数反映电子-电子散射强度</p>
            </div>
            
            <div class="method-item">
              <h4>热导率测量</h4>
              <p>验证Wiedemann-Franz定律</p>
              <p>洛伦兹数的偏离</p>
            </div>
            
            <div class="method-item">
              <h4>霍尔效应</h4>
              <p>载流子密度和迁移率</p>
              <p>多带效应的分析</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 具体材料系统 -->
    <section class="material-systems">
      <h2>典型材料系统</h2>
      
      <div class="materials-grid">
        <div class="material-card">
          <h3>液体³He</h3>
          <div class="material-details">
            <h4>散射参数</h4>
            <p>A = 2.8 × 10⁻⁶ Ω·cm/K²</p>
            <p>完美的T²行为</p>
            
            <h4>实验特点</h4>
            <p>• 纯净的费米液体</p>
            <p>• 强相互作用系统</p>
            <p>• 精确的理论预测</p>
          </div>
        </div>
        
        <div class="material-card">
          <h3>重费米子系统</h3>
          <div class="material-details">
            <h4>CeCoIn₅</h4>
            <p>A ~ 0.05 μΩ·cm/K²</p>
            <p>巨大的有效质量</p>
            
            <h4>特殊性质</h4>
            <p>• 量子临界行为</p>
            <p>• 非费米液体区域</p>
            <p>• 超导竞争</p>
          </div>
        </div>
        
        <div class="material-card">
          <h3>过渡金属</h3>
          <div class="material-details">
            <h4>铜</h4>
            <p>A ~ 0.17 nΩ·cm/K²</p>
            <p>弱相互作用费米液体</p>
            
            <h4>复杂性</h4>
            <p>• 多带效应</p>
            <p>• 声子散射竞争</p>
            <p>• 表面效应</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论发展 -->
    <section class="theoretical-developments">
      <h2>理论发展与挑战</h2>
      
      <div class="developments-content">
        <div class="development-item">
          <h3>多体微扰理论</h3>
          <p>系统的散射率计算需要考虑：</p>
          <ul>
            <li>顶点修正</li>
            <li>自能的频率依赖性</li>
            <li>多体屏蔽效应</li>
          </ul>
        </div>
        
        <div class="development-item">
          <h3>非费米液体行为</h3>
          <p>在某些系统中观察到：</p>
          <ul>
            <li>ρ ∝ T^n (n ≠ 2)</li>
            <li>线性比热系数发散</li>
            <li>量子临界点附近的异常</li>
          </ul>
        </div>
        
        <div class="development-item">
          <h3>现代计算方法</h3>
          <p>先进的理论工具：</p>
          <ul>
            <li>动力学平均场理论(DMFT)</li>
            <li>量子蒙特卡罗方法</li>
            <li>函数重整化群</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 实验技术进展 -->
    <section class="experimental-advances">
      <h2>实验技术进展</h2>
      
      <div class="advances-grid">
        <div class="advance-card">
          <h3>高分辨率ARPES</h3>
          <p>• 能量分辨率：< 1 meV</p>
          <p>• 角度分辨率：< 0.1°</p>
          <p>• 直接观察准粒子峰</p>
        </div>
        
        <div class="advance-card">
          <h3>量子输运</h3>
          <p>• 极低温测量：mK范围</p>
          <p>• 高磁场环境：> 30 T</p>
          <p>• 精密电阻测量</p>
        </div>
        
        <div class="advance-card">
          <h3>时间分辨技术</h3>
          <p>• 泵浦-探测实验</p>
          <p>• 飞秒时间分辨率</p>
          <p>• 非平衡态研究</p>
        </div>
      </div>
    </section>

    <!-- 物理洞察 -->
    <section class="physical-insights">
      <h2>关键物理洞察</h2>
      
      <div class="insights-list">
        <div class="insight-item">
          <h3>相空间限制</h3>
          <p>费米液体中准粒子散射的T²行为源于泡利不相容原理对终态的限制。</p>
        </div>
        
        <div class="insight-item">
          <h3>屏蔽效应</h3>
          <p>库仑相互作用的动态屏蔽决定了有效散射强度和频率依赖性。</p>
        </div>
        
        <div class="insight-item">
          <h3>量子干涉</h3>
          <p>多体效应中的量子干涉可以显著修正简单的黄金定则预测。</p>
        </div>
        
        <div class="insight-item">
          <h3>普适性</h3>
          <p>费米液体的输运性质表现出普适的标度行为，与微观细节无关。</p>
        </div>
      </div>
    </section>

    <!-- 学习资源 -->
    <section class="learning-resources">
      <h2>学习资源</h2>
      
      <div class="resources-content">
        <div class="textbooks">
          <h3>经典教材</h3>
          <ul>
            <li>Pines & Nozières: "The Theory of Quantum Liquids"</li>
            <li>Ashcroft & Mermin: "Solid State Physics"</li>
            <li>Mahan: "Many-Particle Physics"</li>
          </ul>
        </div>
        
        <div class="review-articles">
          <h3>综述文章</h3>
          <ul>
            <li>Rev. Mod. Phys. 73, 797 (2001) - 重费米子系统</li>
            <li>Adv. Phys. 56, 829 (2007) - 量子临界点</li>
            <li>Rep. Prog. Phys. 79, 084502 (2016) - ARPES技术</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-content">
        <p>
          本节详细讨论了费米液体中准粒子的散射机制、费米黄金定则的应用，
          以及各种实验测定方法。关键要点包括：
        </p>
        <ul>
          <li>费米黄金定则提供了计算散射率的基本框架</li>
          <li>T²电阻率行为是费米液体的标志性特征</li>
          <li>多种实验技术可以精确测定准粒子性质</li>
          <li>理论与实验的结合推动了对强关联系统的理解</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.chapter-container {
  max-width: 1200px;
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
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
}

.intro-section {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 25px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.intro-section h2 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.golden-rule-section {
  margin-bottom: 30px;
}

.golden-rule-section h2 {
  color: #e74c3c;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.theory-content h3 {
  color: #8e44ad;
  margin: 20px 0 10px 0;
}

.formula-box {
  background: #f8f9fa;
  border: 2px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
}

.formula-box strong {
  color: #495057;
}

.scattering-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.scattering-card {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}

.scattering-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.scattering-card h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.scattering-mechanisms {
  margin-bottom: 30px;
}

.scattering-mechanisms h2 {
  color: #27ae60;
  border-bottom: 2px solid #27ae60;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.mechanisms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.mechanism-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.mechanism-card h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.mechanism-details h4 {
  color: #f1c40f;
  margin: 15px 0 8px 0;
}

.transport-properties {
  margin-bottom: 30px;
}

.transport-properties h2 {
  color: #f39c12;
  border-bottom: 2px solid #f39c12;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.transport-card {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.transport-card h3 {
  color: #e67e22;
  margin-bottom: 15px;
}

.property-details h4 {
  color: #34495e;
  margin: 12px 0 6px 0;
}

.experimental-methods {
  margin-bottom: 30px;
}

.experimental-methods h2 {
  color: #9b59b6;
  border-bottom: 2px solid #9b59b6;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.methods-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin: 20px 0;
}

.method-category {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #9b59b6;
}

.method-category h3 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.method-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.method-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.method-item h4 {
  color: #8e44ad;
  margin-bottom: 8px;
}

.material-systems {
  margin-bottom: 30px;
}

.material-systems h2 {
  color: #16a085;
  border-bottom: 2px solid #16a085;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.materials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.material-card {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.material-card h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.material-details h4 {
  color: #fdcb6e;
  margin: 15px 0 8px 0;
}

.material-details ul {
  margin: 8px 0;
  padding-left: 20px;
}

.theoretical-developments {
  margin-bottom: 30px;
}

.theoretical-developments h2 {
  color: #d63031;
  border-bottom: 2px solid #d63031;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.developments-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.development-item {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.development-item h3 {
  color: #2d3436;
  margin-bottom: 12px;
}

.development-item ul {
  margin: 10px 0;
  padding-left: 20px;
}

.experimental-advances {
  margin-bottom: 30px;
}

.experimental-advances h2 {
  color: #00b894;
  border-bottom: 2px solid #00b894;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.advances-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.advance-card {
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
  color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.advance-card h3 {
  margin-bottom: 12px;
}

.physical-insights {
  margin-bottom: 30px;
}

.physical-insights h2 {
  color: #e17055;
  border-bottom: 2px solid #e17055;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.insights-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.insight-item {
  background: #f8f9fa;
  border-left: 4px solid #e17055;
  padding: 20px;
  border-radius: 0 8px 8px 0;
}

.insight-item h3 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.learning-resources {
  margin-bottom: 30px;
}

.learning-resources h2 {
  color: #6c5ce7;
  border-bottom: 2px solid #6c5ce7;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.resources-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.textbooks, .review-articles {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #6c5ce7;
}

.textbooks h3, .review-articles h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.textbooks ul, .review-articles ul {
  padding-left: 20px;
}

.textbooks li, .review-articles li {
  margin-bottom: 8px;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  border-radius: 12px;
  margin-top: 30px;
}

.summary-section h2 {
  margin-bottom: 20px;
  color: white;
}

.summary-content ul {
  padding-left: 20px;
  margin-top: 15px;
}

.summary-content li {
  margin-bottom: 8px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-container {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2em;
  }
  
  .scattering-grid,
  .mechanisms-grid,
  .transport-grid,
  .materials-grid,
  .developments-content,
  .advances-grid,
  .insights-list,
  .resources-content {
    grid-template-columns: 1fr;
  }
  
  .methods-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .mechanism-card,
  .material-card {
    padding: 20px;
  }
  
  .method-category {
    padding: 20px;
  }
}
</style>