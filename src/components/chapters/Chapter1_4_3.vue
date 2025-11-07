<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>1.4.3 自由电子近似</h1>
      <p class="chapter-subtitle">不考虑电子之间相互作用以及与晶格的相互作用</p>
    </div>

    <div class="content-container">
      <section class="content-section">
        <h2>基本概念</h2>
        <div class="concept-introduction">
          <div class="definition-card primary">
            <div class="card-header">
              <h3>自由电子近似定义</h3>
              <span class="concept-tag">基础概念</span>
            </div>
            <div class="card-content">
              <p class="definition-text">
                自由电子近似是凝聚态物理中最简单的近似方法，它假设电子在固体中的运动完全不受其他电子和离子实的影响，
                就像在真空中的自由粒子一样运动。
              </p>
              <div class="key-assumptions">
                <h4>核心假设：</h4>
                <div class="assumption-grid">
                  <div class="assumption-item">
                    <span class="assumption-icon">🚫</span>
                    <span class="assumption-text">忽略电子-电子相互作用</span>
                  </div>
                  <div class="assumption-item">
                    <span class="assumption-icon">🚫</span>
                    <span class="assumption-text">忽略电子-离子相互作用</span>
                  </div>
                  <div class="assumption-item">
                    <span class="assumption-icon">✅</span>
                    <span class="assumption-text">电子在均匀正电荷背景中运动</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数学表述</h2>
        <div class="mathematical-formulation">
          <div class="equation-derivation">
            <h3>薛定谔方程的简化</h3>
            <div class="derivation-steps">
              <div class="step-card">
                <div class="step-header">
                  <span class="step-number">1</span>
                  <h4>完整的多体哈密顿量</h4>
                </div>
                <div class="step-content">
                  <div class="equation-formula large">
                    H = Σᵢ₌₁ᴺ (-ℏ²/2mₑ)∇ᵢ² + (1/2)Σᵢ≠ⱼᴺ Vₑₑ(rᵢ - rⱼ) + Σᵢ₌₁ᴺ Σₐ₌₁ᴹ Vₑₙ(rᵢ - Rₐ)
                  </div>
                  <p class="equation-description">包含电子动能、电子-电子相互作用和电子-核相互作用</p>
                </div>
              </div>

              <div class="step-card">
                <div class="step-header">
                  <span class="step-number">2</span>
                  <h4>自由电子近似下的简化</h4>
                </div>
                <div class="step-content">
                  <div class="equation-formula large highlighted">
                    H = Σᵢ₌₁ᴺ (-ℏ²/2mₑ)∇ᵢ²
                  </div>
                  <p class="equation-description">只保留电子动能项，忽略所有相互作用</p>
                </div>
              </div>

              <div class="step-card">
                <div class="step-header">
                  <span class="step-number">3</span>
                  <h4>单电子薛定谔方程</h4>
                </div>
                <div class="step-content">
                  <div class="equation-formula large">
                    (-ℏ²/2mₑ)∇²ψ(r) = Eψ(r)
                  </div>
                  <p class="equation-description">每个电子独立满足自由粒子薛定谔方程</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>解的形式</h2>
        <div class="solution-analysis">
          <div class="solution-cards">
            <div class="solution-card">
              <h3>平面波解</h3>
              <div class="solution-content">
                <div class="equation-formula">
                  ψₖ(r) = (1/√V)e^(ik·r)
                </div>
                <div class="solution-details">
                  <h4>参数说明：</h4>
                  <div class="parameter-grid">
                    <div class="parameter-item">
                      <span class="parameter-symbol">k</span>
                      <span class="parameter-meaning">波矢，表征电子动量</span>
                    </div>
                    <div class="parameter-item">
                      <span class="parameter-symbol">V</span>
                      <span class="parameter-meaning">归一化体积</span>
                    </div>
                    <div class="parameter-item">
                      <span class="parameter-symbol">r</span>
                      <span class="parameter-meaning">电子位置坐标</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="solution-card">
              <h3>能量本征值</h3>
              <div class="solution-content">
                <div class="equation-formula">
                  E(k) = ℏ²k²/(2mₑ)
                </div>
                <div class="energy-properties">
                  <h4>能量特性：</h4>
                  <ul class="property-list">
                    <li><strong>抛物线色散关系：</strong>能量与波矢的平方成正比</li>
                    <li><strong>连续能谱：</strong>k可以取任意值（在周期边界条件下为分立值）</li>
                    <li><strong>各向同性：</strong>能量只依赖于|k|的大小</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>费米气体模型</h2>
        <div class="fermi-gas-model">
          <div class="model-introduction">
            <p class="intro-text">
              在自由电子近似下，大量电子构成费米气体，遵循费米-狄拉克统计分布。
            </p>
          </div>

          <div class="fermi-concepts">
            <div class="concept-showcase">
              <div class="concept-card fermi-energy">
                <div class="concept-header">
                  <h3>费米能级</h3>
                  <span class="concept-tag blue">EF</span>
                </div>
                <div class="concept-content">
                  <div class="equation-formula">
                    EF = ℏ²kF²/(2mₑ)
                  </div>
                  <p><strong>物理意义：</strong>T=0K时电子占据的最高能级</p>
                  <div class="fermi-properties">
                    <h4>费米波矢：</h4>
                    <div class="equation-formula">
                      kF = (3π²n)^(1/3)
                    </div>
                    <p>其中 n 是电子密度</p>
                  </div>
                </div>
              </div>

              <div class="concept-card fermi-surface">
                <div class="concept-header">
                  <h3>费米面</h3>
                  <span class="concept-tag green">k空间</span>
                </div>
                <div class="concept-content">
                  <p><strong>定义：</strong>k空间中能量等于费米能的面</p>
                  <div class="fermi-surface-properties">
                    <h4>自由电子费米面特征：</h4>
                    <ul class="feature-list">
                      <li>球形对称</li>
                      <li>半径为kF</li>
                      <li>体积 = (4π/3)kF³</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="concept-card fermi-distribution">
                <div class="concept-header">
                  <h3>费米分布</h3>
                  <span class="concept-tag orange">统计</span>
                </div>
                <div class="concept-content">
                  <div class="equation-formula">
                    f(E) = 1/(e^((E-μ)/(kBT)) + 1)
                  </div>
                  <p><strong>特点：</strong></p>
                  <ul class="distribution-features">
                    <li>T=0时为阶跃函数</li>
                    <li>T>0时在μ附近有宽度~kBT的平滑过渡</li>
                    <li>μ ≈ EF (低温下)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理性质计算</h2>
        <div class="physical-properties">
          <div class="property-calculations">
            <div class="property-card">
              <h3>🌡️ 电子比热</h3>
              <div class="property-content">
                <div class="calculation-steps">
                  <h4>低温展开结果：</h4>
                  <div class="equation-formula">
                    C = (π²/3)nkB²T/EF
                  </div>
                  <div class="result-analysis">
                    <p><strong>重要特征：</strong></p>
                    <ul>
                      <li>与温度成正比（线性关系）</li>
                      <li>比经典预期小很多（因子~T/TF）</li>
                      <li>只有费米面附近的电子贡献</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="property-card">
              <h3>🧲 泡利磁化率</h3>
              <div class="property-content">
                <div class="calculation-steps">
                  <h4>磁化率表达式：</h4>
                  <div class="equation-formula">
                    χ = μB²g(EF)
                  </div>
                  <div class="result-analysis">
                    <p><strong>物理图像：</strong></p>
                    <ul>
                      <li>只有费米面附近电子能翻转自旋</li>
                      <li>与态密度g(EF)成正比</li>
                      <li>温度无关（低温下）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="property-card">
              <h3>⚡ 电导率</h3>
              <div class="property-content">
                <div class="calculation-steps">
                  <h4>德鲁德公式：</h4>
                  <div class="equation-formula">
                    σ = ne²τ/mₑ
                  </div>
                  <div class="result-analysis">
                    <p><strong>说明：</strong></p>
                    <ul>
                      <li>τ是散射时间（需要额外考虑散射机制）</li>
                      <li>自由电子近似给出载流子密度n</li>
                      <li>实际电导需要考虑杂质、声子散射等</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>适用范围与局限性</h2>
        <div class="applicability-analysis">
          <div class="analysis-grid">
            <div class="analysis-card success">
              <div class="card-header">
                <h3>✅ 适用情况</h3>
                <span class="status-tag success">有效</span>
              </div>
              <div class="card-content">
                <div class="applicable-systems">
                  <h4>适用材料：</h4>
                  <ul class="system-list">
                    <li><strong>简单金属：</strong>碱金属（Li, Na, K等）</li>
                    <li><strong>贵金属：</strong>Cu, Ag, Au的s电子</li>
                    <li><strong>二维电子气：</strong>半导体异质结构</li>
                  </ul>
                  <h4>适用性质：</h4>
                  <ul class="property-list">
                    <li>费米面形状的定性理解</li>
                    <li>电子比热的温度依赖性</li>
                    <li>载流子密度的估算</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="analysis-card warning">
              <div class="card-header">
                <h3>⚠️ 局限性</h3>
                <span class="status-tag warning">限制</span>
              </div>
              <div class="card-content">
                <div class="limitations">
                  <h4>无法解释的现象：</h4>
                  <ul class="limitation-list">
                    <li><strong>能带结构：</strong>无法解释绝缘体和半导体</li>
                    <li><strong>电阻率：</strong>无法给出有限电阻的微观机制</li>
                    <li><strong>相变：</strong>无法描述磁性、超导等相变</li>
                    <li><strong>强关联效应：</strong>忽略了重要的多体效应</li>
                  </ul>
                  <h4>定量偏差：</h4>
                  <ul class="deviation-list">
                    <li>有效质量与自由电子质量的差异</li>
                    <li>实际费米面形状的复杂性</li>
                    <li>输运性质的定量预测</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>历史意义与发展</h2>
        <div class="historical-context">
          <div class="timeline-container">
            <div class="timeline-item">
              <div class="timeline-marker">1900</div>
              <div class="timeline-content">
                <h4>德鲁德模型</h4>
                <p>Paul Drude提出经典自由电子理论，解释金属的电导和热导</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">1928</div>
              <div class="timeline-content">
                <h4>索末菲理论</h4>
                <p>Arnold Sommerfeld引入费米-狄拉克统计，建立量子自由电子理论</p>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-marker">1930s</div>
              <div class="timeline-content">
                <h4>理论完善</h4>
                <p>费米面概念的建立，为后续能带理论奠定基础</p>
              </div>
            </div>
          </div>

          <div class="significance-summary">
            <h3>理论意义</h3>
            <div class="significance-points">
              <div class="point-item">
                <span class="point-icon">🎯</span>
                <div class="point-content">
                  <h4>概念基础</h4>
                  <p>为理解更复杂的多体系统提供了重要的概念框架</p>
                </div>
              </div>
              <div class="point-item">
                <span class="point-icon">🔧</span>
                <div class="point-content">
                  <h4>计算工具</h4>
                  <p>提供了处理费米子系统的基本数学工具和方法</p>
                </div>
              </div>
              <div class="point-item">
                <span class="point-icon">🌉</span>
                <div class="point-content">
                  <h4>理论桥梁</h4>
                  <p>连接经典物理和现代凝聚态物理的重要桥梁</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_4_3',
  mounted() {
    // 页面加载完成后的初始化
    console.log('自由电子近似页面已加载');
  }
}
</script>

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
  font-size: 2.5em;
  margin-bottom: 10px;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2em;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-section {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #667eea;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

/* 定义卡片样式 */
.definition-card, .solution-card, .concept-card, .property-card, .analysis-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #3498db;
}

.definition-card.primary {
  border-left-color: #667eea;
  background: linear-gradient(135deg, #f5f7ff 0%, #e8ecff 100%);
}

.card-header, .concept-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h3, .concept-header h3 {
  color: #2c3e50;
  margin: 0;
}

.concept-tag, .status-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
}

.concept-tag {
  background: #ffd700;
  color: #333;
}

.concept-tag.blue {
  background: #3498db;
  color: white;
}

.concept-tag.green {
  background: #2ecc71;
  color: white;
}

.concept-tag.orange {
  background: #f39c12;
  color: white;
}

.status-tag.success {
  background: #2ecc71;
  color: white;
}

.status-tag.warning {
  background: #f39c12;
  color: white;
}

/* 方程式样式 */
.equation-formula {
  background: #2c3e50;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  text-align: center;
  margin: 10px 0;
  overflow-x: auto;
}

.equation-formula.large {
  font-size: 1.3em;
  padding: 20px;
}

.equation-formula.highlighted {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

/* 网格布局 */
.assumption-grid, .parameter-grid, .analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.assumption-item, .parameter-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.assumption-icon {
  font-size: 1.2em;
}

/* 步骤卡片 */
.derivation-steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.step-card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.step-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
}

.step-number {
  background: #667eea;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.step-header h4 {
  margin: 0;
  color: #2c3e50;
}

/* 概念展示 */
.concept-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.fermi-energy {
  border-left-color: #3498db;
}

.fermi-surface {
  border-left-color: #2ecc71;
}

.fermi-distribution {
  border-left-color: #f39c12;
}

/* 属性计算 */
.property-calculations {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

.property-card h3 {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #2c3e50;
}

/* 列表样式 */
.property-list, .feature-list, .distribution-features, 
.system-list, .limitation-list, .deviation-list {
  list-style: none;
  padding: 0;
}

.property-list li, .feature-list li, .distribution-features li,
.system-list li, .limitation-list li, .deviation-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ecf0f1;
}

.property-list li:last-child, .feature-list li:last-child,
.distribution-features li:last-child, .system-list li:last-child,
.limitation-list li:last-child, .deviation-list li:last-child {
  border-bottom: none;
}

/* 时间线样式 */
.timeline-container {
  position: relative;
  padding: 20px 0;
}

.timeline-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 30px;
  position: relative;
}

.timeline-marker {
  background: #667eea;
  color: white;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  min-width: 80px;
  text-align: center;
}

.timeline-content {
  flex: 1;
  background: #f8f9fa;
  padding: 15px 20px;
  border-radius: 10px;
  border-left: 3px solid #667eea;
}

.timeline-content h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

/* 意义总结 */
.significance-points {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid #667eea;
}

.point-icon {
  font-size: 1.5em;
  margin-top: 5px;
}

.point-content h4 {
  margin: 0 0 8px 0;
  color: #2c3e50;
}

.point-content p {
  margin: 0;
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-header h1 {
    font-size: 2em;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .assumption-grid, .parameter-grid, .analysis-grid {
    grid-template-columns: 1fr;
  }
  
  .concept-showcase, .property-calculations {
    grid-template-columns: 1fr;
  }
  
  .timeline-item {
    flex-direction: column;
    gap: 10px;
  }
}
</style>