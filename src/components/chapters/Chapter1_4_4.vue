<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>1.4.4 独立电子近似</h1>
      <p class="chapter-subtitle">不考虑电子之间的相互作用但保留与晶格的相互作用</p>
    </div>

    <div class="content-container">
      <section class="content-section">
        <h2>基本概念</h2>
        <div class="concept-introduction">
          <div class="definition-card primary">
            <div class="card-header">
              <h3>独立电子近似定义</h3>
              <span class="concept-tag">核心概念</span>
            </div>
            <div class="card-content">
              <p class="definition-text">
                独立电子近似是在自由电子近似基础上的重要改进，它保留了电子与晶格离子的相互作用，
                但仍然忽略电子之间的直接库仑相互作用。这个近似是现代能带理论的基础。
              </p>
              <div class="key-assumptions">
                <h4>核心假设：</h4>
                <div class="assumption-grid">
                  <div class="assumption-item">
                    <span class="assumption-icon">🚫</span>
                    <span class="assumption-text">忽略电子-电子直接相互作用</span>
                  </div>
                  <div class="assumption-item">
                    <span class="assumption-icon">✅</span>
                    <span class="assumption-text">保留电子-离子相互作用</span>
                  </div>
                  <div class="assumption-item">
                    <span class="assumption-icon">✅</span>
                    <span class="assumption-text">考虑晶格周期性势场</span>
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
            <h3>有效单电子哈密顿量</h3>
            <div class="derivation-steps">
              <div class="step-card">
                <div class="step-header">
                  <span class="step-number">1</span>
                  <h4>完整多体哈密顿量</h4>
                </div>
                <div class="step-content">
                  <div class="equation-formula large">
                    H = Σᵢ₌₁ᴺ (-ℏ²/2mₑ)∇ᵢ² + (1/2)Σᵢ≠ⱼᴺ Vₑₑ(rᵢ - rⱼ) + Σᵢ₌₁ᴺ Σₐ₌₁ᴹ Vₑₙ(rᵢ - Rₐ)
                  </div>
                  <p class="equation-description">包含动能、电子-电子相互作用和电子-核相互作用</p>
                </div>
              </div>

              <div class="step-card">
                <div class="step-header">
                  <span class="step-number">2</span>
                  <h4>独立电子近似下的简化</h4>
                </div>
                <div class="step-content">
                  <div class="equation-formula large highlighted">
                    H = Σᵢ₌₁ᴺ [(-ℏ²/2mₑ)∇ᵢ² + Vₑff(rᵢ)]
                  </div>
                  <p class="equation-description">引入有效势Vₑff，忽略电子-电子直接相互作用</p>
                </div>
              </div>

              <div class="step-card">
                <div class="step-header">
                  <span class="step-number">3</span>
                  <h4>单电子薛定谔方程</h4>
                </div>
                <div class="step-content">
                  <div class="equation-formula large">
                    [(-ℏ²/2mₑ)∇² + Vₑff(r)]ψₙ(r) = Eₙψₙ(r)
                  </div>
                  <p class="equation-description">每个电子在有效势场中独立运动</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>有效势场的构成</h2>
        <div class="effective-potential">
          <div class="potential-breakdown">
            <h3>有效势的组成部分</h3>
            <div class="potential-components">
              <div class="component-card">
                <div class="component-header">
                  <h4>🏛️ 离子势</h4>
                  <span class="component-tag blue">Vᵢₒₙ(r)</span>
                </div>
                <div class="component-content">
                  <div class="equation-formula">
                    Vᵢₒₙ(r) = Σₐ₌₁ᴹ Vₑₙ(r - Rₐ)
                  </div>
                  <div class="component-description">
                    <p><strong>物理意义：</strong>电子与所有离子实的库仑相互作用</p>
                    <ul class="feature-list">
                      <li>具有晶格周期性：Vᵢₒₙ(r + R) = Vᵢₒₙ(r)</li>
                      <li>在离子实附近势能很深</li>
                      <li>决定了能带结构的基本框架</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="component-card">
                <div class="component-header">
                  <h4>⚡ 哈特里势</h4>
                  <span class="component-tag green">VH(r)</span>
                </div>
                <div class="component-content">
                  <div class="equation-formula">
                    VH(r) = e² ∫ ρ(r')/|r - r'| d³r'
                  </div>
                  <div class="component-description">
                    <p><strong>物理意义：</strong>其他电子产生的平均静电势</p>
                    <ul class="feature-list">
                      <li>ρ(r)是电子密度分布</li>
                      <li>代表电子-电子相互作用的平均场效应</li>
                      <li>自洽确定：势依赖于波函数，波函数依赖于势</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="component-card">
                <div class="component-header">
                  <h4>🔄 交换关联势</h4>
                  <span class="component-tag orange">Vxc(r)</span>
                </div>
                <div class="component-content">
                  <div class="equation-formula">
                    Vxc(r) = δExc[ρ]/δρ(r)
                  </div>
                  <div class="component-description">
                    <p><strong>物理意义：</strong>量子统计效应和剩余关联效应</p>
                    <ul class="feature-list">
                      <li>交换效应：泡利不相容原理的结果</li>
                      <li>关联效应：电子运动的量子关联</li>
                      <li>通常需要近似处理（如LDA、GGA等）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="total-potential">
              <h3>总有效势</h3>
              <div class="equation-formula large highlighted">
                Vₑff(r) = Vᵢₒₙ(r) + VH(r) + Vxc(r)
              </div>
              <p class="total-description">
                有效势是所有贡献的叠加，具有晶格的周期性，是能带理论的核心
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>布洛赫定理与能带结构</h2>
        <div class="bloch-theorem">
          <div class="theorem-statement">
            <div class="theorem-card primary">
              <div class="theorem-header">
                <h3>🎯 布洛赫定理</h3>
                <span class="theorem-tag">基本定理</span>
              </div>
              <div class="theorem-content">
                <p class="theorem-text">
                  在周期性势场中，单电子波函数可以写成平面波与具有晶格周期性函数的乘积：
                </p>
                <div class="equation-formula large">
                  ψₙₖ(r) = uₙₖ(r)e^(ik·r)
                </div>
                <div class="theorem-conditions">
                  <h4>其中：</h4>
                  <div class="condition-grid">
                    <div class="condition-item">
                      <span class="condition-symbol">uₙₖ(r)</span>
                      <span class="condition-meaning">具有晶格周期性：uₙₖ(r + R) = uₙₖ(r)</span>
                    </div>
                    <div class="condition-item">
                      <span class="condition-symbol">k</span>
                      <span class="condition-meaning">布洛赫波矢，限制在第一布里渊区</span>
                    </div>
                    <div class="condition-item">
                      <span class="condition-symbol">n</span>
                      <span class="condition-meaning">能带指标</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="band-structure-analysis">
            <h3>能带结构的形成</h3>
            <div class="band-formation">
              <div class="formation-steps">
                <div class="formation-card">
                  <h4>1️⃣ 原子能级</h4>
                  <div class="formation-content">
                    <p>孤立原子具有分立的能级</p>
                    <div class="energy-diagram">
                      <div class="atomic-levels">
                        <div class="level">3p</div>
                        <div class="level">3s</div>
                        <div class="level">2p</div>
                        <div class="level">2s</div>
                        <div class="level">1s</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="formation-arrow">→</div>

                <div class="formation-card">
                  <h4>2️⃣ 能级展宽</h4>
                  <div class="formation-content">
                    <p>原子靠近时，能级因重叠而展宽</p>
                    <div class="broadening-effect">
                      <p>展宽程度 ∝ 波函数重叠积分</p>
                    </div>
                  </div>
                </div>

                <div class="formation-arrow">→</div>

                <div class="formation-card">
                  <h4>3️⃣ 能带形成</h4>
                  <div class="formation-content">
                    <p>形成准连续的能带和禁带</p>
                    <div class="band-diagram">
                      <div class="band conduction">导带</div>
                      <div class="gap">禁带</div>
                      <div class="band valence">价带</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>能带结构的特征</h2>
        <div class="band-characteristics">
          <div class="characteristic-analysis">
            <div class="characteristic-cards">
              <div class="characteristic-card">
                <div class="characteristic-header">
                  <h3>📊 色散关系</h3>
                  <span class="char-tag blue">E(k)</span>
                </div>
                <div class="characteristic-content">
                  <div class="dispersion-features">
                    <h4>典型特征：</h4>
                    <ul class="feature-list">
                      <li><strong>周期性：</strong>E(k + G) = E(k)，G为倒格矢</li>
                      <li><strong>能隙：</strong>在布里渊区边界处出现能隙</li>
                      <li><strong>有效质量：</strong>m* = ℏ²/(d²E/dk²)⁻¹</li>
                      <li><strong>群速度：</strong>v = (1/ℏ)∇ₖE(k)</li>
                    </ul>
                  </div>
                  <div class="equation-formula">
                    E(k) ≈ E(k₀) + (ℏ²/2m*)(k - k₀)²
                  </div>
                  <p class="approximation-note">在能带极值附近的抛物线近似</p>
                </div>
              </div>

              <div class="characteristic-card">
                <div class="characteristic-header">
                  <h3>🎯 费米面</h3>
                  <span class="char-tag green">复杂几何</span>
                </div>
                <div class="characteristic-content">
                  <div class="fermi-surface-properties">
                    <h4>几何特征：</h4>
                    <ul class="feature-list">
                      <li><strong>复杂形状：</strong>不再是简单的球面</li>
                      <li><strong>多连通性：</strong>可能有多个分离的片段</li>
                      <li><strong>嵌套特征：</strong>影响磁性和超导性质</li>
                      <li><strong>范霍夫奇点：</strong>态密度的奇异性</li>
                    </ul>
                  </div>
                  <div class="topology-note">
                    <p><strong>拓扑性质：</strong>费米面的拓扑结构决定了材料的输运性质</p>
                  </div>
                </div>
              </div>

              <div class="characteristic-card">
                <div class="characteristic-header">
                  <h3>📈 态密度</h3>
                  <span class="char-tag orange">g(E)</span>
                </div>
                <div class="characteristic-content">
                  <div class="dos-features">
                    <h4>重要特征：</h4>
                    <ul class="feature-list">
                      <li><strong>范霍夫奇点：</strong>∇ₖE = 0处的对数发散</li>
                      <li><strong>能隙效应：</strong>禁带内态密度为零</li>
                      <li><strong>维度效应：</strong>不同维度有不同的奇异性</li>
                    </ul>
                  </div>
                  <div class="equation-formula">
                    g(E) = (1/N)Σₙₖ δ(E - Eₙ(k))
                  </div>
                  <p class="dos-importance">态密度决定了材料的热力学和输运性质</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>材料分类</h2>
        <div class="material-classification">
          <div class="classification-overview">
            <p class="overview-text">
              基于能带结构，独立电子近似可以解释材料的基本电学性质分类：
            </p>
          </div>

          <div class="material-types">
            <div class="material-card metal">
              <div class="material-header">
                <h3>🔗 金属</h3>
                <span class="material-tag metal-tag">导体</span>
              </div>
              <div class="material-content">
                <div class="band-diagram metal-bands">
                  <div class="band partially-filled">部分填充能带</div>
                  <div class="fermi-level">EF</div>
                </div>
                <div class="material-properties">
                  <h4>特征：</h4>
                  <ul class="property-list">
                    <li>费米能级穿过能带</li>
                    <li>存在费米面</li>
                    <li>电导率高，随温度增加而减小</li>
                    <li>具有金属光泽</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="material-card insulator">
              <div class="material-header">
                <h3>🚫 绝缘体</h3>
                <span class="material-tag insulator-tag">绝缘体</span>
              </div>
              <div class="material-content">
                <div class="band-diagram insulator-bands">
                  <div class="band empty">空导带</div>
                  <div class="gap large-gap">大能隙 (>3eV)</div>
                  <div class="band filled">满价带</div>
                  <div class="fermi-level">EF</div>
                </div>
                <div class="material-properties">
                  <h4>特征：</h4>
                  <ul class="property-list">
                    <li>费米能级位于禁带中</li>
                    <li>大的能隙（通常>3eV）</li>
                    <li>室温下电导率极低</li>
                    <li>透明或有颜色</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="material-card semiconductor">
              <div class="material-header">
                <h3>⚡ 半导体</h3>
                <span class="material-tag semiconductor-tag">半导体</span>
              </div>
              <div class="material-content">
                <div class="band-diagram semiconductor-bands">
                  <div class="band empty">导带</div>
                  <div class="gap small-gap">小能隙 (~1eV)</div>
                  <div class="band filled">价带</div>
                  <div class="fermi-level">EF</div>
                </div>
                <div class="material-properties">
                  <h4>特征：</h4>
                  <ul class="property-list">
                    <li>小的能隙（~0.1-3eV）</li>
                    <li>电导率随温度指数增长</li>
                    <li>可通过掺杂调控性质</li>
                    <li>是现代电子器件的基础</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>成功应用与局限性</h2>
        <div class="applications-limitations">
          <div class="success-applications">
            <div class="success-card">
              <div class="success-header">
                <h3>✅ 成功应用</h3>
                <span class="status-tag success">有效</span>
              </div>
              <div class="success-content">
                <div class="application-areas">
                  <h4>主要成就：</h4>
                  <div class="achievement-grid">
                    <div class="achievement-item">
                      <span class="achievement-icon">🔬</span>
                      <div class="achievement-text">
                        <h5>能带结构计算</h5>
                        <p>成功预测大多数材料的基本电子结构</p>
                      </div>
                    </div>
                    <div class="achievement-item">
                      <span class="achievement-icon">💎</span>
                      <div class="achievement-text">
                        <h5>半导体物理</h5>
                        <p>为现代半导体器件设计提供理论基础</p>
                      </div>
                    </div>
                    <div class="achievement-item">
                      <span class="achievement-icon">🔋</span>
                      <div class="achievement-text">
                        <h5>材料设计</h5>
                        <p>指导新材料的合成和性质预测</p>
                      </div>
                    </div>
                    <div class="achievement-item">
                      <span class="achievement-icon">📱</span>
                      <div class="achievement-text">
                        <h5>电子器件</h5>
                        <p>支撑现代电子工业的发展</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="limitations-analysis">
            <div class="limitation-card">
              <div class="limitation-header">
                <h3>⚠️ 主要局限</h3>
                <span class="status-tag warning">限制</span>
              </div>
              <div class="limitation-content">
                <div class="limitation-categories">
                  <div class="limitation-category">
                    <h4>🔴 强关联系统</h4>
                    <ul class="limitation-list">
                      <li>莫特绝缘体：预测为金属但实际为绝缘体</li>
                      <li>高温超导体：无法解释配对机制</li>
                      <li>重费米子系统：有效质量增强效应</li>
                    </ul>
                  </div>
                  <div class="limitation-category">
                    <h4>🟠 磁性现象</h4>
                    <ul class="limitation-list">
                      <li>自发磁化：需要额外考虑交换相互作用</li>
                      <li>反铁磁序：无法从能带理论直接得出</li>
                      <li>磁性相变：缺乏相变的微观机制</li>
                    </ul>
                  </div>
                  <div class="limitation-category">
                    <h4>🟡 激发态性质</h4>
                    <ul class="limitation-list">
                      <li>激子效应：电子-空穴束缚态</li>
                      <li>等离激元：集体激发模式</li>
                      <li>声子耦合：电子-声子相互作用</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展与展望</h2>
        <div class="modern-developments">
          <div class="development-timeline">
            <div class="timeline-container">
              <div class="timeline-item">
                <div class="timeline-marker">1960s</div>
                <div class="timeline-content">
                  <h4>密度泛函理论</h4>
                  <p>Hohenberg-Kohn定理和Kohn-Sham方程，为独立电子近似提供严格理论基础</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">1980s</div>
                <div class="timeline-content">
                  <h4>第一性原理计算</h4>
                  <p>基于DFT的ab initio计算方法成熟，实现材料性质的定量预测</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">2000s</div>
                <div class="timeline-content">
                  <h4>拓扑能带理论</h4>
                  <p>拓扑绝缘体、拓扑半金属等新奇量子态的发现和理论描述</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-marker">2010s</div>
                <div class="timeline-content">
                  <h4>机器学习辅助</h4>
                  <p>AI技术在材料设计和性质预测中的应用</p>
                </div>
              </div>
            </div>
          </div>

          <div class="future-prospects">
            <h3>未来发展方向</h3>
            <div class="prospect-cards">
              <div class="prospect-card">
                <div class="prospect-icon">🧠</div>
                <div class="prospect-content">
                  <h4>智能材料设计</h4>
                  <p>结合机器学习和高通量计算，实现材料性质的快速筛选和优化</p>
                </div>
              </div>
              <div class="prospect-card">
                <div class="prospect-icon">🌐</div>
                <div class="prospect-content">
                  <h4>多尺度建模</h4>
                  <p>从电子结构到宏观性质的跨尺度理论框架</p>
                </div>
              </div>
              <div class="prospect-card">
                <div class="prospect-icon">⚛️</div>
                <div class="prospect-content">
                  <h4>量子材料</h4>
                  <p>拓扑量子计算、量子传感等新兴量子技术的材料基础</p>
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
  name: 'Chapter1_4_4',
  mounted() {
    // 页面加载完成后的初始化
    console.log('独立电子近似页面已加载');
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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
  border-left: 4px solid #4facfe;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8em;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #ecf0f1;
}

/* 卡片样式 */
.definition-card, .component-card, .theorem-card, .formation-card,
.characteristic-card, .material-card, .success-card, .limitation-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin: 15px 0;
  border-left: 4px solid #3498db;
}

.definition-card.primary {
  border-left-color: #4facfe;
  background: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%);
}

.theorem-card.primary {
  border-left-color: #4facfe;
  background: linear-gradient(135deg, #fff5f0 0%, #ffe6e6 100%);
}

.card-header, .component-header, .theorem-header, .characteristic-header,
.material-header, .success-header, .limitation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.card-header h3, .component-header h4, .theorem-header h3,
.characteristic-header h3, .material-header h3, .success-header h3, .limitation-header h3 {
  color: #2c3e50;
  margin: 0;
}

/* 标签样式 */
.concept-tag, .component-tag, .theorem-tag, .char-tag, .material-tag, .status-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  font-weight: 600;
}

.concept-tag {
  background: #ffd700;
  color: #333;
}

.component-tag.blue {
  background: #3498db;
  color: white;
}

.component-tag.green {
  background: #2ecc71;
  color: white;
}

.component-tag.orange {
  background: #f39c12;
  color: white;
}

.theorem-tag {
  background: #e74c3c;
  color: white;
}

.char-tag.blue {
  background: #3498db;
  color: white;
}

.char-tag.green {
  background: #2ecc71;
  color: white;
}

.char-tag.orange {
  background: #f39c12;
  color: white;
}

.material-tag.metal-tag {
  background: #34495e;
  color: white;
}

.material-tag.insulator-tag {
  background: #e74c3c;
  color: white;
}

.material-tag.semiconductor-tag {
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
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.3);
}

/* 网格布局 */
.assumption-grid, .condition-grid, .achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.assumption-item, .condition-item {
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
  background: #4facfe;
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

/* 势场组件 */
.potential-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.total-potential {
  margin-top: 30px;
  padding: 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 10px;
  border: 2px solid #4facfe;
}

/* 能带形成 */
.formation-steps {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.formation-arrow {
  font-size: 2em;
  color: #4facfe;
  font-weight: bold;
}

.energy-diagram, .band-diagram {
  margin: 15px 0;
  text-align: center;
}

.atomic-levels {
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
}

.level {
  background: #3498db;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 0.9em;
}

.band {
  padding: 8px 20px;
  margin: 2px 0;
  border-radius: 5px;
  font-size: 0.9em;
  font-weight: bold;
}

.band.conduction, .band.empty {
  background: #ecf0f1;
  color: #2c3e50;
  border: 2px solid #3498db;
}

.band.valence, .band.filled {
  background: #3498db;
  color: white;
}

.band.partially-filled {
  background: linear-gradient(90deg, #3498db 50%, #ecf0f1 50%);
  color: #2c3e50;
}

.gap {
  padding: 5px 20px;
  margin: 2px 0;
  background: #f8f9fa;
  border: 1px dashed #bdc3c7;
  border-radius: 5px;
  font-size: 0.8em;
  color: #7f8c8d;
}

.gap.large-gap {
  padding: 15px 20px;
}

.gap.small-gap {
  padding: 8px 20px;
}

.fermi-level {
  border-top: 2px solid #e74c3c;
  margin: 5px 0;
  position: relative;
  color: #e74c3c;
  font-size: 0.8em;
  font-weight: bold;
}

/* 特征分析 */
.characteristic-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
}

/* 材料分类 */
.material-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.material-card.metal {
  border-left-color: #34495e;
}

.material-card.insulator {
  border-left-color: #e74c3c;
}

.material-card.semiconductor {
  border-left-color: #f39c12;
}

/* 成就网格 */
.achievement-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.achievement-icon {
  font-size: 1.5em;
  margin-top: 5px;
}

.achievement-text h5 {
  margin: 0 0 5px 0;
  color: #2c3e50;
}

.achievement-text p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}

/* 局限性分析 */
.limitation-categories {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.limitation-category h4 {
  color: #2c3e50;
  margin-bottom: 10px;
}

.limitation-list {
  list-style: none;
  padding: 0;
}

.limitation-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ecf0f1;
  color: #666;
}

.limitation-list li:last-child {
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
  background: #4facfe;
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
  border-left: 3px solid #4facfe;
}

.timeline-content h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

/* 未来展望 */
.prospect-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.prospect-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
}

.prospect-icon {
  font-size: 2em;
  margin-bottom: 15px;
}

.prospect-content h4 {
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.prospect-content p {
  margin: 0;
  color: #666;
  font-size: 0.9em;
}

/* 列表样式 */
.feature-list, .property-list {
  list-style: none;
  padding: 0;
}

.feature-list li, .property-list li {
  padding: 8px 0;
  border-bottom: 1px solid #ecf0f1;
}

.feature-list li:last-child, .property-list li:last-child {
  border-bottom: none;
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
  
  .assumption-grid, .condition-grid, .achievement-grid {
    grid-template-columns: 1fr;
  }
  
  .potential-components, .characteristic-cards, .material-types {
    grid-template-columns: 1fr;
  }
  
  .formation-steps {
    flex-direction: column;
  }
  
  .formation-arrow {
    transform: rotate(90deg);
  }
  
  .timeline-item {
    flex-direction: column;
    gap: 10px;
  }
  
  .prospect-cards {
    grid-template-columns: 1fr;
  }
}
</style>