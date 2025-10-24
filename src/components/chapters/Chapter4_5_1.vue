<template>
  <div class="chapter-container">
    <h1 class="chapter-title">4.5.1 Luttinger定理</h1>
    
    <!-- 引言 -->
    <section class="intro-section">
      <h2>引言</h2>
      <p>
        Luttinger定理是费米液体理论中的一个基本定理，它建立了相互作用费米系统中费米面体积与非相互作用系统的关系。
        这个定理不仅在理论上具有重要意义，而且在实验上提供了验证费米液体理论的重要途径。
        本节将详细讨论Luttinger定理的表述、证明、物理意义及其应用。
      </p>
    </section>

    <!-- 定理表述 -->
    <section class="theorem-statement">
      <h2>Luttinger定理的表述</h2>
      
      <div class="statement-content">
        <div class="main-theorem">
          <h3>基本表述</h3>
          <div class="theorem-box">
            <p><strong>Luttinger定理：</strong></p>
            <p>在费米液体中，费米面所包围的体积等于非相互作用费米气体中被占据的k空间体积。</p>
            <p class="formula">V<sub>F</sub> = (2π)³n/Ω</p>
            <p>其中 n 是粒子密度，Ω 是系统体积。</p>
          </div>
        </div>
        
        <div class="mathematical-form">
          <h3>数学表述</h3>
          <div class="math-details">
            <h4>积分形式</h4>
            <p>∫<sub>|k|&lt;k<sub>F</sub></sub> d³k = (4π/3)k<sub>F</sub>³ = (2π)³n/Ω</p>
            
            <h4>费米动量</h4>
            <p>k<sub>F</sub> = (3π²n)^(1/3)</p>
            
            <h4>费米能量</h4>
            <p>E<sub>F</sub> = ℏ²k<sub>F</sub>²/(2m*)</p>
            <p>注意：这里的 m* 是有效质量</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 物理意义 -->
    <section class="physical-meaning">
      <h2>物理意义</h2>
      
      <div class="meaning-grid">
        <div class="meaning-card">
          <h3>拓扑不变性</h3>
          <div class="meaning-details">
            <p>费米面的体积是一个拓扑不变量，不会因为相互作用的绝热开启而改变。</p>
            <ul>
              <li>费米面可以变形</li>
              <li>但总体积保持不变</li>
              <li>反映了系统的拓扑稳定性</li>
            </ul>
          </div>
        </div>
        
        <div class="meaning-card">
          <h3>粒子数守恒</h3>
          <div class="meaning-details">
            <p>定理的根本原因是粒子数守恒定律。</p>
            <ul>
              <li>总粒子数不变</li>
              <li>费米面内的态数不变</li>
              <li>体现了量子统计的基本要求</li>
            </ul>
          </div>
        </div>
        
        <div class="meaning-card">
          <h3>绝热连续性</h3>
          <div class="meaning-details">
            <p>从自由费米气体到相互作用系统的绝热演化。</p>
            <ul>
              <li>能级不发生交叉</li>
              <li>基态保持唯一</li>
              <li>准粒子概念的基础</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 定理证明 -->
    <section class="theorem-proof">
      <h2>定理证明</h2>
      
      <div class="proof-content">
        <div class="proof-method">
          <h3>Green函数方法</h3>
          <div class="proof-steps">
            <div class="step">
              <h4>步骤1：粒子数表达式</h4>
              <p>N = ∫ d³k n(k)</p>
              <p>其中 n(k) 是动量分布函数</p>
            </div>
            
            <div class="step">
              <h4>步骤2：Green函数关系</h4>
              <p>n(k) = ∫ (dω/2πi) G(k,ω) e^(iω0⁺)</p>
              <p>G(k,ω) 是单粒子Green函数</p>
            </div>
            
            <div class="step">
              <h4>步骤3：围道积分</h4>
              <p>利用留数定理计算积分</p>
              <p>只有费米面上的极点贡献</p>
            </div>
            
            <div class="step">
              <h4>步骤4：最终结果</h4>
              <p>N = V<sub>F</sub>/(2π)³ × Ω</p>
              <p>因此 V<sub>F</sub> = (2π)³n</p>
            </div>
          </div>
        </div>
        
        <div class="alternative-proof">
          <h3>拓扑论证</h3>
          <div class="topology-argument">
            <h4>基本思想</h4>
            <p>费米面的拓扑性质在绝热过程中保持不变。</p>
            
            <h4>关键要素</h4>
            <ul>
              <li>绝热定理保证能级不交叉</li>
              <li>基态的唯一性</li>
              <li>粒子数的守恒</li>
            </ul>
            
            <h4>数学表述</h4>
            <p>费米面是k空间中的闭合曲面，其所围体积具有拓扑不变性。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 实验验证 -->
    <section class="experimental-verification">
      <h2>实验验证</h2>
      
      <div class="verification-methods">
        <div class="method-category">
          <h3>量子振荡实验</h3>
          <div class="method-details">
            <h4>de Haas-van Alphen效应</h4>
            <p>磁化率的振荡频率：</p>
            <p>F = (ℏ/2πe) × A<sub>F</sub></p>
            <p>其中 A<sub>F</sub> 是费米面截面积</p>
            
            <h4>Shubnikov-de Haas效应</h4>
            <p>电阻率的量子振荡</p>
            <p>直接测量费米面几何</p>
            
            <h4>实验优势</h4>
            <ul>
              <li>高精度测量</li>
              <li>直接探测费米面</li>
              <li>可区分不同能带</li>
            </ul>
          </div>
        </div>
        
        <div class="method-category">
          <h3>光电子谱</h3>
          <div class="method-details">
            <h4>ARPES技术</h4>
            <p>角分辨光电子谱直接观察费米面</p>
            <p>I(k,ω) ∝ A(k,ω)f(ω)</p>
            
            <h4>测量内容</h4>
            <ul>
              <li>费米面形状</li>
              <li>能带色散</li>
              <li>准粒子寿命</li>
            </ul>
            
            <h4>技术发展</h4>
            <ul>
              <li>高分辨率：ΔE < 1 meV</li>
              <li>三维费米面重构</li>
              <li>时间分辨测量</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 具体材料系统 -->
    <section class="material-examples">
      <h2>典型材料系统</h2>
      
      <div class="materials-grid">
        <div class="material-card">
          <h3>简单金属</h3>
          <div class="material-content">
            <h4>铜(Cu)</h4>
            <p>• 近自由电子模型</p>
            <p>• 球形费米面</p>
            <p>• 完美验证Luttinger定理</p>
            
            <h4>实验数据</h4>
            <p>理论：k<sub>F</sub> = 1.36 Å⁻¹</p>
            <p>实验：k<sub>F</sub> = 1.36 Å⁻¹</p>
            <p>误差：< 0.1%</p>
          </div>
        </div>
        
        <div class="material-card">
          <h3>过渡金属</h3>
          <div class="material-content">
            <h4>铁(Fe)</h4>
            <p>• 复杂费米面结构</p>
            <p>• 多个能带贡献</p>
            <p>• 自旋极化效应</p>
            
            <h4>挑战</h4>
            <p>• 多带效应</p>
            <p>• 磁性相互作用</p>
            <p>• 轨道杂化</p>
          </div>
        </div>
        
        <div class="material-card">
          <h3>重费米子系统</h3>
          <div class="material-content">
            <h4>CeCoIn₅</h4>
            <p>• 巨大的有效质量</p>
            <p>• 强关联效应</p>
            <p>• 量子临界行为</p>
            
            <h4>特殊性</h4>
            <p>• m*/m ~ 100</p>
            <p>• 费米面重构</p>
            <p>• 非费米液体区域</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 推广和修正 -->
    <section class="extensions-corrections">
      <h2>推广和修正</h2>
      
      <div class="extensions-content">
        <div class="extension-item">
          <h3>有限温度效应</h3>
          <div class="extension-details">
            <h4>热涨落修正</h4>
            <p>n(k) = f(ε(k)) = 1/(e^((ε(k)-μ)/k<sub>B</sub>T) + 1)</p>
            
            <h4>费米面模糊化</h4>
            <p>温度导致费米面边界的模糊</p>
            <p>特征宽度：~ k<sub>B</sub>T</p>
            
            <h4>体积守恒</h4>
            <p>尽管边界模糊，总体积仍然守恒</p>
          </div>
        </div>
        
        <div class="extension-item">
          <h3>无序系统</h3>
          <div class="extension-details">
            <h4>Anderson定理</h4>
            <p>非磁性杂质不改变费米面体积</p>
            
            <h4>局域化效应</h4>
            <p>强无序可能导致费米面消失</p>
            <p>金属-绝缘体转变</p>
            
            <h4>实验观察</h4>
            <p>稀释合金中的验证</p>
          </div>
        </div>
        
        <div class="extension-item">
          <h3>强关联系统</h3>
          <div class="extension-details">
            <h4>Mott绝缘体</h4>
            <p>费米面可能完全消失</p>
            <p>电荷激发能隙</p>
            
            <h4>量子临界点</h4>
            <p>费米面重构</p>
            <p>非费米液体行为</p>
            
            <h4>理论挑战</h4>
            <p>准粒子概念的失效</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 现代发展 -->
    <section class="modern-developments">
      <h2>现代发展</h2>
      
      <div class="developments-grid">
        <div class="development-card">
          <h3>拓扑材料</h3>
          <div class="development-content">
            <h4>拓扑绝缘体</h4>
            <p>• 体能隙，表面费米弧</p>
            <p>• 拓扑保护的表面态</p>
            <p>• Luttinger定理的推广</p>
            
            <h4>Weyl半金属</h4>
            <p>• 点状费米面</p>
            <p>• 手性异常</p>
            <p>• 新的拓扑不变量</p>
          </div>
        </div>
        
        <div class="development-card">
          <h3>量子多体系统</h3>
          <div class="development-content">
            <h4>冷原子气体</h4>
            <p>• 可调相互作用</p>
            <p>• BEC-BCS渡越</p>
            <p>• 费米面演化</p>
            
            <h4>光晶格系统</h4>
            <p>• Hubbard模型实现</p>
            <p>• Mott转变</p>
            <p>• 量子模拟</p>
          </div>
        </div>
        
        <div class="development-card">
          <h3>机器学习应用</h3>
          <div class="development-content">
            <h4>费米面识别</h4>
            <p>• 自动识别算法</p>
            <p>• 大数据分析</p>
            <p>• 模式识别</p>
            
            <h4>材料设计</h4>
            <p>• 高通量计算</p>
            <p>• 性质预测</p>
            <p>• 逆向设计</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论意义 -->
    <section class="theoretical-significance">
      <h2>理论意义与深层理解</h2>
      
      <div class="significance-content">
        <div class="significance-item">
          <h3>量子多体理论的基石</h3>
          <p>
            Luttinger定理是量子多体理论中少数几个精确结果之一，它为理解强关联系统提供了重要的约束条件。
            即使在准粒子图像失效的情况下，费米面体积的守恒仍然成立。
          </p>
        </div>
        
        <div class="significance-item">
          <h3>实验理论对话的桥梁</h3>
          <p>
            该定理提供了连接微观理论计算和宏观实验测量的重要纽带。
            通过比较理论预测和实验测量的费米面体积，可以验证理论模型的正确性。
          </p>
        </div>
        
        <div class="significance-item">
          <h3>材料设计的指导原则</h3>
          <p>
            在设计新材料时，Luttinger定理为预测电子结构和输运性质提供了重要约束。
            特别是在寻找具有特定费米面拓扑的材料时，该定理起到了关键作用。
          </p>
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
            <li>Luttinger: "Fermi Surface and Some Simple Equilibrium Properties of a System of Interacting Fermions" (1960)</li>
            <li>Pines & Nozières: "The Theory of Quantum Liquids"</li>
            <li>Ashcroft & Mermin: "Solid State Physics"</li>
            <li>Mahan: "Many-Particle Physics"</li>
          </ul>
        </div>
        
        <div class="review-articles">
          <h3>重要综述</h3>
          <ul>
            <li>Rev. Mod. Phys. 66, 25 (1994) - 费米面实验技术</li>
            <li>Adv. Phys. 51, 909 (2002) - 强关联系统中的Luttinger定理</li>
            <li>Rep. Prog. Phys. 74, 124501 (2011) - 拓扑材料中的费米面</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-content">
        <p>
          Luttinger定理是费米液体理论的核心结果之一，具有深远的理论意义和广泛的实验应用。
          主要要点包括：
        </p>
        <ul>
          <li>费米面体积的拓扑不变性是定理的核心</li>
          <li>粒子数守恒和绝热连续性是定理的物理基础</li>
          <li>量子振荡和ARPES是主要的实验验证手段</li>
          <li>定理在强关联系统和拓扑材料中仍然适用</li>
          <li>为理解和设计新材料提供了重要的理论指导</li>
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

.theorem-statement {
  margin-bottom: 30px;
}

.theorem-statement h2 {
  color: #e74c3c;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.statement-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.main-theorem, .mathematical-form {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.theorem-box {
  background: #f8f9fa;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
}

.theorem-box .formula {
  font-size: 1.2em;
  color: #e74c3c;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
}

.math-details h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.physical-meaning {
  margin-bottom: 30px;
}

.physical-meaning h2 {
  color: #27ae60;
  border-bottom: 2px solid #27ae60;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.meaning-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.meaning-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.meaning-card h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.meaning-details ul {
  margin: 10px 0;
  padding-left: 20px;
}

.theorem-proof {
  margin-bottom: 30px;
}

.theorem-proof h2 {
  color: #f39c12;
  border-bottom: 2px solid #f39c12;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.proof-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  margin: 20px 0;
}

.proof-method, .alternative-proof {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #f39c12;
}

.proof-steps {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.step {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.step h4 {
  color: #2c3e50;
  margin-bottom: 8px;
}

.topology-argument h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.topology-argument ul {
  margin: 10px 0;
  padding-left: 20px;
}

.experimental-verification {
  margin-bottom: 30px;
}

.experimental-verification h2 {
  color: #9b59b6;
  border-bottom: 2px solid #9b59b6;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.verification-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
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

.method-details h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.method-details ul {
  margin: 10px 0;
  padding-left: 20px;
}

.material-examples {
  margin-bottom: 30px;
}

.material-examples h2 {
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

.material-content h4 {
  color: #fdcb6e;
  margin: 15px 0 8px 0;
}

.extensions-corrections {
  margin-bottom: 30px;
}

.extensions-corrections h2 {
  color: #d63031;
  border-bottom: 2px solid #d63031;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.extensions-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.extension-item {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.extension-item h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.extension-details h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.modern-developments {
  margin-bottom: 30px;
}

.modern-developments h2 {
  color: #00b894;
  border-bottom: 2px solid #00b894;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.developments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.development-card {
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.development-card h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.development-content h4 {
  color: #fdcb6e;
  margin: 15px 0 8px 0;
}

.theoretical-significance {
  margin-bottom: 30px;
}

.theoretical-significance h2 {
  color: #e17055;
  border-bottom: 2px solid #e17055;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.significance-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
}

.significance-item {
  background: #f8f9fa;
  border-left: 4px solid #e17055;
  padding: 20px;
  border-radius: 0 8px 8px 0;
}

.significance-item h3 {
  color: #2c3e50;
  margin-bottom: 12px;
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
  
  .statement-content,
  .meaning-grid,
  .proof-content,
  .verification-methods,
  .materials-grid,
  .extensions-content,
  .developments-grid,
  .resources-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .meaning-card,
  .material-card,
  .development-card {
    padding: 20px;
  }
  
  .main-theorem,
  .mathematical-form,
  .proof-method,
  .alternative-proof,
  .method-category,
  .extension-item {
    padding: 20px;
  }
}
</style>