<template>
  <div class="chapter-container">
    <h1 class="chapter-title">4.5.2 费米液体的序参量</h1>
    
    <!-- 引言 -->
    <section class="intro-section">
      <h2>引言</h2>
      <p>
        序参量是描述物质相变和有序态的核心概念。在费米液体理论中，序参量不仅描述了系统的对称性破缺，
        还揭示了准粒子相互作用的本质。本节将详细讨论费米液体中各种序参量的定义、性质、
        以及它们在描述量子相变和集体激发中的重要作用。
      </p>
    </section>

    <!-- 序参量的基本概念 -->
    <section class="basic-concepts">
      <h2>序参量的基本概念</h2>
      
      <div class="concepts-content">
        <div class="concept-item">
          <h3>定义与性质</h3>
          <div class="definition-box">
            <p><strong>序参量：</strong></p>
            <p>描述系统有序态的宏观量，在相变点处连续或不连续地变化。</p>
            <p>Φ = ⟨Ô⟩ - ⟨Ô⟩<sub>无序态</sub></p>
          </div>
          
          <h4>基本性质</h4>
          <ul>
            <li>对称性：反映系统的对称性破缺</li>
            <li>临界行为：在相变点附近表现出标度律</li>
            <li>涨落：热涨落和量子涨落的竞争</li>
            <li>拓扑性质：可能具有拓扑保护</li>
          </ul>
        </div>
        
        <div class="concept-item">
          <h3>分类</h3>
          <div class="classification-grid">
            <div class="class-card">
              <h4>按对称性分类</h4>
              <p>• 标量序参量</p>
              <p>• 矢量序参量</p>
              <p>• 张量序参量</p>
              <p>• 复数序参量</p>
            </div>
            
            <div class="class-card">
              <h4>按物理性质分类</h4>
              <p>• 磁性序参量</p>
              <p>• 超导序参量</p>
              <p>• 电荷密度波</p>
              <p>• 向列序参量</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 磁性序参量 -->
    <section class="magnetic-order">
      <h2>磁性序参量</h2>
      
      <div class="magnetic-content">
        <div class="magnetic-type">
          <h3>铁磁序参量</h3>
          <div class="order-details">
            <h4>定义</h4>
            <p>M = ⟨S<sub>z</sub>⟩ = ∑<sub>i</sub> ⟨S<sub>i</sub><sup>z</sup>⟩</p>
            
            <h4>Stoner判据</h4>
            <p>铁磁不稳定性条件：</p>
            <p>I·N(E<sub>F</sub>) > 1</p>
            <p>其中 I 是Stoner参数，N(E<sub>F</sub>) 是费米面态密度</p>
            
            <h4>费米液体修正</h4>
            <p>磁化率增强：</p>
            <p>χ = χ<sub>Pauli</sub>/(1 - F<sub>0</sub><sup>a</sup>)</p>
          </div>
        </div>
        
        <div class="magnetic-type">
          <h3>反铁磁序参量</h3>
          <div class="order-details">
            <h4>Néel序参量</h4>
            <p>N = ⟨S<sub>A</sub> - S<sub>B</sub>⟩</p>
            <p>描述两个子晶格的磁矩差</p>
            
            <h4>自旋密度波</h4>
            <p>⟨S(r)⟩ = N cos(Q·r + φ)</p>
            <p>Q 是嵌套矢量</p>
            
            <h4>费米面嵌套</h4>
            <p>当费米面存在完美嵌套时，系统倾向于形成SDW态</p>
          </div>
        </div>
        
        <div class="magnetic-type">
          <h3>螺旋磁序</h3>
          <div class="order-details">
            <h4>螺旋序参量</h4>
            <p>S(r) = S[cos(Q·r)x̂ + sin(Q·r)ŷ]</p>
            
            <h4>Dzyaloshinskii-Moriya相互作用</h4>
            <p>H<sub>DM</sub> = D·(S<sub>i</sub> × S<sub>j</sub>)</p>
            
            <h4>拓扑性质</h4>
            <p>可能产生skyrmion等拓扑磁结构</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 超导序参量 -->
    <section class="superconducting-order">
      <h2>超导序参量</h2>
      
      <div class="sc-content">
        <div class="sc-basics">
          <h3>基本定义</h3>
          <div class="sc-definition">
            <h4>Cooper对序参量</h4>
            <p>Δ(k) = ⟨c<sub>k↑</sub>c<sub>-k↓</sub>⟩</p>
            
            <h4>BCS理论</h4>
            <p>平均场近似下：</p>
            <p>Δ = -∑<sub>k</sub> V<sub>kk'</sub>⟨c<sub>k'↑</sub>c<sub>-k'↓</sub>⟩</p>
            
            <h4>能隙方程</h4>
            <p>1 = V∑<sub>k</sub> 1/(2E<sub>k</sub>) tanh(E<sub>k</sub>/2k<sub>B</sub>T)</p>
            <p>其中 E<sub>k</sub> = √(ξ<sub>k</sub>² + |Δ|²)</p>
          </div>
        </div>
        
        <div class="sc-types">
          <h3>超导配对类型</h3>
          <div class="pairing-grid">
            <div class="pairing-card">
              <h4>s波配对</h4>
              <p>Δ(k) = Δ₀</p>
              <p>• 各向同性</p>
              <p>• 常规超导体</p>
              <p>• 全能隙</p>
            </div>
            
            <div class="pairing-card">
              <h4>p波配对</h4>
              <p>Δ(k) ∝ k<sub>x</sub> + ik<sub>y</sub></p>
              <p>• 奇宇称</p>
              <p>• 拓扑超导</p>
              <p>• 手性配对</p>
            </div>
            
            <div class="pairing-card">
              <h4>d波配对</h4>
              <p>Δ(k) ∝ k<sub>x</sub>² - k<sub>y</sub>²</p>
              <p>• 节点超导</p>
              <p>• 高温超导</p>
              <p>• 各向异性</p>
            </div>
          </div>
        </div>
        
        <div class="sc-properties">
          <h3>序参量性质</h3>
          <div class="properties-content">
            <h4>相位相干</h4>
            <p>Δ = |Δ|e<sup>iφ</sup></p>
            <p>相位φ决定了Josephson效应</p>
            
            <h4>对称性</h4>
            <p>不同配对对称性对应不同的点群</p>
            
            <h4>拓扑性质</h4>
            <p>某些配对态具有非平凡的拓扑不变量</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 电荷密度波 -->
    <section class="charge-density-wave">
      <h2>电荷密度波序参量</h2>
      
      <div class="cdw-content">
        <div class="cdw-definition">
          <h3>基本定义</h3>
          <div class="definition-details">
            <h4>电荷密度调制</h4>
            <p>ρ(r) = ρ₀ + ρ<sub>CDW</sub> cos(Q·r + φ)</p>
            
            <h4>序参量</h4>
            <p>Δ<sub>CDW</sub> = ⟨c†<sub>k+Q</sub>c<sub>k</sub>⟩</p>
            
            <h4>能隙开启</h4>
            <p>在嵌套费米面处开启能隙</p>
          </div>
        </div>
        
        <div class="cdw-mechanism">
          <h3>形成机制</h3>
          <div class="mechanism-details">
            <h4>费米面嵌套</h4>
            <p>当存在嵌套矢量Q时，系统不稳定</p>
            
            <h4>电子-声子耦合</h4>
            <p>声子软化导致晶格畸变</p>
            
            <h4>Peierls不稳定性</h4>
            <p>一维系统的普遍现象</p>
          </div>
        </div>
        
        <div class="cdw-examples">
          <h3>典型材料</h3>
          <div class="examples-grid">
            <div class="example-card">
              <h4>过渡金属硫化物</h4>
              <p>TaS₂, NbSe₂</p>
              <p>• 层状结构</p>
              <p>• 多重CDW相</p>
            </div>
            
            <div class="example-card">
              <h4>准一维导体</h4>
              <p>K₀.₃MoO₃, (TMTSF)₂X</p>
              <p>• 强各向异性</p>
              <p>• Peierls转变</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 向列序参量 -->
    <section class="nematic-order">
      <h2>向列序参量</h2>
      
      <div class="nematic-content">
        <div class="nematic-definition">
          <h3>电子向列相</h3>
          <div class="nematic-details">
            <h4>序参量定义</h4>
            <p>Φ<sub>nem</sub> = ⟨n<sub>x</sub> - n<sub>y</sub>⟩</p>
            <p>其中 n<sub>x,y</sub> 是x,y方向的电子密度</p>
            
            <h4>对称性破缺</h4>
            <p>C₄ → C₂ 旋转对称性破缺</p>
            <p>但保持平移对称性</p>
            
            <h4>费米面变形</h4>
            <p>费米面从圆形变为椭圆形</p>
          </div>
        </div>
        
        <div class="nematic-physics">
          <h3>物理机制</h3>
          <div class="physics-content">
            <h4>轨道序</h4>
            <p>d轨道的各向异性占据</p>
            
            <h4>自旋涨落</h4>
            <p>磁性涨落驱动的向列序</p>
            
            <h4>声子软化</h4>
            <p>结构相变的前驱现象</p>
          </div>
        </div>
        
        <div class="nematic-materials">
          <h3>实验观察</h3>
          <div class="materials-list">
            <div class="material-item">
              <h4>铁基超导体</h4>
              <p>Ba(Fe₁₋ₓCoₓ)₂As₂</p>
              <p>• 结构相变之上的电子向列相</p>
              <p>• 电阻率各向异性</p>
            </div>
            
            <div class="material-item">
              <h4>Sr₃Ru₂O₇</h4>
              <p>• 磁场诱导的向列相</p>
              <p>• 量子临界点附近</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 拓扑序参量 -->
    <section class="topological-order">
      <h2>拓扑序参量</h2>
      
      <div class="topological-content">
        <div class="topological-basics">
          <h3>基本概念</h3>
          <div class="basics-details">
            <h4>拓扑不变量</h4>
            <p>不能通过局域扰动改变的量</p>
            <p>例：Chern数、Z₂不变量</p>
            
            <h4>长程纠缠</h4>
            <p>拓扑序的特征</p>
            <p>不能用局域序参量描述</p>
            
            <h4>边界态</h4>
            <p>体-边对应关系</p>
            <p>受拓扑保护的表面态</p>
          </div>
        </div>
        
        <div class="topological-examples">
          <h3>典型例子</h3>
          <div class="examples-content">
            <div class="topo-example">
              <h4>量子霍尔态</h4>
              <p>霍尔电导：σ<sub>xy</sub> = νe²/h</p>
              <p>ν 是拓扑不变量</p>
            </div>
            
            <div class="topo-example">
              <h4>拓扑绝缘体</h4>
              <p>Z₂分类</p>
              <p>受时间反演对称性保护</p>
            </div>
            
            <div class="topo-example">
              <h4>拓扑超导体</h4>
              <p>Majorana费米子</p>
              <p>量子计算应用</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 序参量的测量 -->
    <section class="measurement-techniques">
      <h2>序参量的实验测量</h2>
      
      <div class="measurement-content">
        <div class="technique-category">
          <h3>磁性序参量测量</h3>
          <div class="technique-list">
            <div class="technique-item">
              <h4>磁化率测量</h4>
              <p>• SQUID磁强计</p>
              <p>• 交流磁化率</p>
              <p>• 磁滞回线</p>
            </div>
            
            <div class="technique-item">
              <h4>中子散射</h4>
              <p>• 弹性散射：静态磁结构</p>
              <p>• 非弹性散射：磁激发</p>
              <p>• 偏振中子：磁矩方向</p>
            </div>
            
            <div class="technique-item">
              <h4>μSR技术</h4>
              <p>• 局域磁场探测</p>
              <p>• 磁序的微观信息</p>
              <p>• 动态涨落</p>
            </div>
          </div>
        </div>
        
        <div class="technique-category">
          <h3>超导序参量测量</h3>
          <div class="technique-list">
            <div class="technique-item">
              <h4>比热测量</h4>
              <p>• BCS跳跃</p>
              <p>• 节点结构</p>
              <p>• 配对对称性</p>
            </div>
            
            <div class="technique-item">
              <h4>隧道谱</h4>
              <p>• 准粒子态密度</p>
              <p>• 能隙结构</p>
              <p>• 各向异性</p>
            </div>
            
            <div class="technique-item">
              <h4>ARPES</h4>
              <p>• 超导能隙</p>
              <p>• 费米弧</p>
              <p>• 配对对称性</p>
            </div>
          </div>
        </div>
        
        <div class="technique-category">
          <h3>电荷序测量</h3>
          <div class="technique-list">
            <div class="technique-item">
              <h4>X射线散射</h4>
              <p>• 超晶格反射</p>
              <p>• 电荷调制</p>
              <p>• 结构因子</p>
            </div>
            
            <div class="technique-item">
              <h4>STM/STS</h4>
              <p>• 实空间成像</p>
              <p>• 局域态密度</p>
              <p>• 原子分辨率</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 理论方法 -->
    <section class="theoretical-methods">
      <h2>理论计算方法</h2>
      
      <div class="methods-content">
        <div class="method-category">
          <h3>平均场理论</h3>
          <div class="method-details">
            <h4>Hartree-Fock近似</h4>
            <p>将多体问题简化为单体问题</p>
            
            <h4>自洽场方程</h4>
            <p>序参量的自洽求解</p>
            
            <h4>稳定性分析</h4>
            <p>线性响应理论</p>
          </div>
        </div>
        
        <div class="method-category">
          <h3>涨落效应</h3>
          <div class="method-details">
            <h4>Ginzburg-Landau理论</h4>
            <p>序参量的唯象理论</p>
            
            <h4>重整化群</h4>
            <p>临界现象的标度理论</p>
            
            <h4>量子蒙特卡罗</h4>
            <p>数值精确求解</p>
          </div>
        </div>
        
        <div class="method-category">
          <h3>现代方法</h3>
          <div class="method-details">
            <h4>密度泛函理论</h4>
            <p>第一性原理计算</p>
            
            <h4>动力学平均场</h4>
            <p>强关联系统</p>
            
            <h4>机器学习</h4>
            <p>相图识别和预测</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 物理洞察 -->
    <section class="physical-insights">
      <h2>关键物理洞察</h2>
      
      <div class="insights-content">
        <div class="insight-item">
          <h3>对称性与序参量</h3>
          <p>
            序参量的选择必须反映系统的对称性破缺。Landau理论提供了系统的分类框架，
            但在强关联系统中可能需要考虑更复杂的序参量。
          </p>
        </div>
        
        <div class="insight-item">
          <h3>竞争与共存</h3>
          <p>
            不同序参量之间可能存在竞争或共存关系。理解这些相互作用对于预测
            材料的相图和设计具有特定性质的材料至关重要。
          </p>
        </div>
        
        <div class="insight-item">
          <h3>量子涨落</h3>
          <p>
            在低维系统和量子临界点附近，量子涨落可能抑制长程序的形成，
            导致量子自旋液体等新奇量子态的出现。
          </p>
        </div>
        
        <div class="insight-item">
          <h3>拓扑保护</h3>
          <p>
            拓扑序参量受到拓扑保护，对局域扰动具有鲁棒性。这为设计
            稳定的量子器件提供了新的思路。
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
            <li>Landau & Lifshitz: "Statistical Physics"</li>
            <li>Chaikin & Lubensky: "Principles of Condensed Matter Physics"</li>
            <li>Sachdev: "Quantum Phase Transitions"</li>
            <li>Tinkham: "Introduction to Superconductivity"</li>
          </ul>
        </div>
        
        <div class="review-articles">
          <h3>重要综述</h3>
          <ul>
            <li>Rev. Mod. Phys. 78, 17 (2006) - 量子相变</li>
            <li>Nature Physics 6, 645 (2010) - 电子向列相</li>
            <li>Rev. Mod. Phys. 83, 1057 (2011) - 拓扑绝缘体</li>
            <li>Science 357, eaaf3182 (2017) - 拓扑超导体</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 总结 -->
    <section class="summary-section">
      <h2>本节总结</h2>
      <div class="summary-content">
        <p>
          费米液体的序参量理论为理解量子多体系统的有序态提供了重要框架。
          主要要点包括：
        </p>
        <ul>
          <li>序参量描述了系统的对称性破缺和有序态</li>
          <li>不同类型的序参量对应不同的物理现象</li>
          <li>实验技术的发展使得精确测量序参量成为可能</li>
          <li>理论方法从平均场到强关联不断发展</li>
          <li>拓扑序参量开辟了新的研究领域</li>
          <li>序参量理论在材料设计中具有重要应用价值</li>
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

.basic-concepts {
  margin-bottom: 30px;
}

.basic-concepts h2 {
  color: #e74c3c;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.concepts-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.concept-item {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.concept-item h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.definition-box {
  background: #f8f9fa;
  border: 2px solid #e74c3c;
  border-radius: 8px;
  padding: 15px;
  margin: 15px 0;
  font-family: 'Courier New', monospace;
}

.concept-item ul {
  margin: 15px 0;
  padding-left: 20px;
}

.classification-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.class-card {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 15px;
}

.class-card h4 {
  color: #8e44ad;
  margin-bottom: 8px;
}

.magnetic-order {
  margin-bottom: 30px;
}

.magnetic-order h2 {
  color: #27ae60;
  border-bottom: 2px solid #27ae60;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.magnetic-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.magnetic-type {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.magnetic-type h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.order-details h4 {
  color: #f1c40f;
  margin: 15px 0 8px 0;
}

.superconducting-order {
  margin-bottom: 30px;
}

.superconducting-order h2 {
  color: #f39c12;
  border-bottom: 2px solid #f39c12;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.sc-content {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.sc-basics, .sc-types, .sc-properties {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.sc-basics h3, .sc-types h3, .sc-properties h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.sc-definition h4, .properties-content h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.pairing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 15px 0;
}

.pairing-card {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 15px;
}

.pairing-card h4 {
  color: #e67e22;
  margin-bottom: 8px;
}

.charge-density-wave {
  margin-bottom: 30px;
}

.charge-density-wave h2 {
  color: #9b59b6;
  border-bottom: 2px solid #9b59b6;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.cdw-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.cdw-definition, .cdw-mechanism, .cdw-examples {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.cdw-definition h3, .cdw-mechanism h3, .cdw-examples h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.definition-details h4, .mechanism-details h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.examples-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin: 15px 0;
}

.example-card {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 15px;
}

.example-card h4 {
  color: #e67e22;
  margin-bottom: 8px;
}

.nematic-order {
  margin-bottom: 30px;
}

.nematic-order h2 {
  color: #16a085;
  border-bottom: 2px solid #16a085;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.nematic-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.nematic-definition, .nematic-physics, .nematic-materials {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.nematic-definition h3, .nematic-physics h3, .nematic-materials h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.nematic-details h4, .physics-content h4 {
  color: #fdcb6e;
  margin: 15px 0 8px 0;
}

.materials-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.material-item {
  background: rgba(255,255,255,0.1);
  border-radius: 8px;
  padding: 15px;
}

.material-item h4 {
  color: #fdcb6e;
  margin-bottom: 8px;
}

.topological-order {
  margin-bottom: 30px;
}

.topological-order h2 {
  color: #d63031;
  border-bottom: 2px solid #d63031;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.topological-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.topological-basics, .topological-examples {
  background: #fff;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.topological-basics h3, .topological-examples h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.basics-details h4 {
  color: #8e44ad;
  margin: 15px 0 8px 0;
}

.examples-content {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.topo-example {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  padding: 15px;
}

.topo-example h4 {
  color: #e67e22;
  margin-bottom: 8px;
}

.measurement-techniques {
  margin-bottom: 30px;
}

.measurement-techniques h2 {
  color: #00b894;
  border-bottom: 2px solid #00b894;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.measurement-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.technique-category {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 25px;
  border-left: 5px solid #00b894;
}

.technique-category h3 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.technique-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.technique-item {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.technique-item h4 {
  color: #8e44ad;
  margin-bottom: 8px;
}

.theoretical-methods {
  margin-bottom: 30px;
}

.theoretical-methods h2 {
  color: #e17055;
  border-bottom: 2px solid #e17055;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.methods-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin: 20px 0;
}

.method-category {
  background: linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%);
  color: white;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.method-category h3 {
  margin-bottom: 15px;
  font-size: 1.3em;
}

.method-details h4 {
  color: #fdcb6e;
  margin: 15px 0 8px 0;
}

.physical-insights {
  margin-bottom: 30px;
}

.physical-insights h2 {
  color: #6c5ce7;
  border-bottom: 2px solid #6c5ce7;
  padding-bottom: 5px;
  margin-bottom: 20px;
}

.insights-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.insight-item {
  background: #f8f9fa;
  border-left: 4px solid #6c5ce7;
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
  color: #fd79a8;
  border-bottom: 2px solid #fd79a8;
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
  border-left: 4px solid #fd79a8;
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
  
  .concepts-content,
  .magnetic-content,
  .cdw-content,
  .nematic-content,
  .topological-content,
  .measurement-content,
  .methods-content,
  .insights-content,
  .resources-content {
    grid-template-columns: 1fr;
  }
  
  .classification-grid,
  .pairing-grid,
  .examples-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .chapter-title {
    font-size: 1.8em;
  }
  
  .concept-item,
  .magnetic-type,
  .sc-basics,
  .sc-types,
  .sc-properties,
  .cdw-definition,
  .cdw-mechanism,
  .cdw-examples,
  .nematic-definition,
  .nematic-physics,
  .nematic-materials,
  .topological-basics,
  .topological-examples,
  .technique-category,
  .method-category {
    padding: 20px;
  }
}
</style>