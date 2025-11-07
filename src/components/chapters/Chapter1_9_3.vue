<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">习题3：Wiedemann-Franz律</h1>
      <p class="chapter-subtitle">Exercise 3: Wiedemann-Franz Law</p>
    </div>

    <!-- 引言 -->
    <section class="introduction">
      <h2>引言</h2>
      <p>
        Wiedemann-Franz律是凝聚态物理中的一个重要定律，它描述了金属中电导率和热导率之间的关系。
        这个定律揭示了电子在传导电流和热量方面的双重作用，是理解金属输运性质的基础。
      </p>
      
      <div class="law-statement">
        <h3>Wiedemann-Franz律的表述</h3>
        <div class="formula-box">
          <p>κ/σ = LT</p>
        </div>
        <p>其中：</p>
        <ul>
          <li>κ - 热导率 (W/m·K)</li>
          <li>σ - 电导率 (S/m)</li>
          <li>L - Lorenz数 (W·Ω/K²)</li>
          <li>T - 绝对温度 (K)</li>
        </ul>
      </div>
    </section>

    <!-- 主要习题：Wiedemann-Franz律推导 -->
    <section class="main-exercise">
      <h2>习题3：Wiedemann-Franz律</h2>
      
      <div class="problem-set">
        <div class="problem-card main-problem">
          <div class="problem-header">
            <span class="problem-number">核心题目</span>
            <h3>基于电子气体理论的Wiedemann-Franz律推导</h3>
            <span class="difficulty high">重点</span>
          </div>
          <div class="problem-content">
            <div class="problem-statement">
              <p><strong>问题：</strong>金属在不太低的温度下，其热导率和电导率之间存在正比关系，即：</p>
              <div class="equation-box highlight">
                <p><strong>κ/σ = LT</strong></p>
              </div>
              <p>其中L是Lorenz数，T是绝对温度。请基于电子气体的电导率和热导率理论，解释这一关系。</p>
              <div class="additional-info">
                <p><strong>提示：</strong>考虑电子气体的电导率σ和热导率κ的表达式，分析它们的比值。</p>
              </div>
            </div>
            
            <div class="solution-section">
              <h4>完整推导过程</h4>
              
              <div class="derivation-steps">
                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤1</span>
                    <h5>电导率的表达式</h5>
                  </div>
                  <div class="step-content">
                    <p>根据Drude模型，电子气体的电导率为：</p>
                    <div class="equation-box">
                      <p><strong>σ = ne²τ/m</strong></p>
                    </div>
                    <p>其中：</p>
                    <ul>
                      <li>n - 电子密度</li>
                      <li>e - 电子电荷</li>
                      <li>τ - 弛豫时间</li>
                      <li>m - 电子质量</li>
                    </ul>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤2</span>
                    <h5>热导率的表达式</h5>
                  </div>
                  <div class="step-content">
                    <p>电子对热导率的贡献可以用动力学理论表示：</p>
                    <div class="equation-box">
                      <p><strong>κ = (1/3)nv̄C_vλ</strong></p>
                    </div>
                    <p>其中：</p>
                    <ul>
                      <li>v̄ - 电子的平均速度</li>
                      <li>C_v - 电子的比热容</li>
                      <li>λ - 平均自由程</li>
                    </ul>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤3</span>
                    <h5>建立关键关系</h5>
                  </div>
                  <div class="step-content">
                    <p>利用以下关系：</p>
                    <div class="equation-box">
                      <p><strong>λ = v̄τ</strong> （平均自由程与弛豫时间的关系）</p>
                    </div>
                    <p>对于费米气体，在温度T << T_F时：</p>
                    <div class="equation-box">
                      <p><strong>v̄ ≈ v_F</strong> （平均速度近似为费米速度）</p>
                    </div>
                    <p>电子比热容为：</p>
                    <div class="equation-box">
                      <p><strong>C_v = (π²/2)nk_B(T/T_F)</strong></p>
                    </div>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤4</span>
                    <h5>代入热导率表达式</h5>
                  </div>
                  <div class="step-content">
                    <p>将关系代入热导率公式：</p>
                    <div class="equation-box">
                      <p>κ = (1/3)nv_F × (π²/2)nk_B(T/T_F) × v_Fτ</p>
                    </div>
                    <p>化简得：</p>
                    <div class="equation-box">
                      <p><strong>κ = (π²/6)n²k_Bv_F²τ(T/T_F)</strong></p>
                    </div>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤5</span>
                    <h5>利用费米速度关系</h5>
                  </div>
                  <div class="step-content">
                    <p>费米速度与费米温度的关系：</p>
                    <div class="equation-box">
                      <p><strong>T_F = mv_F²/(2k_B)</strong></p>
                    </div>
                    <p>因此：</p>
                    <div class="equation-box">
                      <p><strong>v_F² = 2k_BT_F/m</strong></p>
                    </div>
                    <p>代入热导率表达式：</p>
                    <div class="equation-box">
                      <p>κ = (π²/6)n²k_B × (2k_BT_F/m) × τ × (T/T_F)</p>
                    </div>
                    <div class="equation-box">
                      <p><strong>κ = (π²/3)n²k_B²τT/m</strong></p>
                    </div>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤6</span>
                    <h5>计算κ/σ比值</h5>
                  </div>
                  <div class="step-content">
                    <p>计算热导率与电导率的比值：</p>
                    <div class="equation-box">
                      <p>κ/σ = [(π²/3)n²k_B²τT/m] / [ne²τ/m]</p>
                    </div>
                    <p>约去公共因子：</p>
                    <div class="equation-box">
                      <p>κ/σ = (π²/3)nk_B²T/e²</p>
                    </div>
                    <p>但这里还需要考虑电子密度n的修正。对于自由电子气体：</p>
                    <div class="equation-box">
                      <p><strong>κ/σ = (π²/3)(k_B/e)²T</strong></p>
                    </div>
                  </div>
                </div>

                <div class="step-card">
                  <div class="step-header">
                    <span class="step-number">步骤7</span>
                    <h5>得到Wiedemann-Franz律</h5>
                  </div>
                  <div class="step-content">
                    <p>定义Lorenz数：</p>
                    <div class="equation-box final-result">
                      <p><strong>L = (π²/3)(k_B/e)² = 2.45 × 10⁻⁸ W·Ω/K²</strong></p>
                    </div>
                    <p>因此得到Wiedemann-Franz律：</p>
                    <div class="equation-box highlight">
                      <p><strong>κ/σ = LT</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="physical-interpretation">
                <h4>物理意义分析</h4>
                <div class="interpretation-grid">
                  <div class="interpretation-item">
                    <h5>电子的双重作用</h5>
                    <p>同一批电子既传导电流又传导热量，因此两者存在内在联系</p>
                  </div>
                  <div class="interpretation-item">
                    <h5>Lorenz数的普适性</h5>
                    <p>L只依赖于基本物理常数，对所有金属都相同</p>
                  </div>
                  <div class="interpretation-item">
                    <h5>温度依赖性</h5>
                    <p>κ/σ比值与温度成正比，反映了电子热运动的增强</p>
                  </div>
                  <div class="interpretation-item">
                    <h5>实验验证</h5>
                    <p>大多数金属在室温下都很好地遵循这一定律</p>
                  </div>
                </div>
              </div>

              <div class="experimental-verification">
                <h4>实验验证与应用</h4>
                <div class="verification-content">
                  <div class="verification-table">
                    <h5>典型金属的Lorenz数 (×10⁻⁸ W·Ω/K²)</h5>
                    <table>
                      <thead>
                        <tr>
                          <th>金属</th>
                          <th>实验值</th>
                          <th>理论值</th>
                          <th>偏差(%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>铜(Cu)</td>
                          <td>2.23</td>
                          <td>2.45</td>
                          <td>-9.0</td>
                        </tr>
                        <tr>
                          <td>银(Ag)</td>
                          <td>2.31</td>
                          <td>2.45</td>
                          <td>-5.7</td>
                        </tr>
                        <tr>
                          <td>金(Au)</td>
                          <td>2.35</td>
                          <td>2.45</td>
                          <td>-4.1</td>
                        </tr>
                        <tr>
                          <td>铝(Al)</td>
                          <td>2.14</td>
                          <td>2.45</td>
                          <td>-12.7</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div class="applications">
                    <h5>实际应用</h5>
                    <ul>
                      <li><strong>材料选择：</strong>根据电导率预测热导率</li>
                      <li><strong>散热设计：</strong>电子器件的热管理</li>
                      <li><strong>温度测量：</strong>利用电阻变化测温</li>
                      <li><strong>合金设计：</strong>优化电热性能比</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 应用与扩展 -->
    <section class="applications">
      <h2>应用与扩展</h2>
      
      <div class="applications-grid">
        <div class="application-card">
          <h3>🌡️ 热电材料</h3>
          <div class="app-content">
            <p>在热电材料研究中，Wiedemann-Franz律用于：</p>
            <ul>
              <li>评估材料的热电性能</li>
              <li>分离电子和声子热导率</li>
              <li>优化热电优值ZT</li>
            </ul>
            <div class="formula-box">
              <p>ZT = S²σT/(κ_e + κ_ph)</p>
            </div>
          </div>
        </div>
        
        <div class="application-card">
          <h3>🔬 材料表征</h3>
          <div class="app-content">
            <p>作为材料表征的重要工具：</p>
            <ul>
              <li>验证材料的金属性质</li>
              <li>检测相变和结构变化</li>
              <li>评估样品质量</li>
            </ul>
          </div>
        </div>
        
        <div class="application-card">
          <h3>⚡ 电子器件</h3>
          <div class="app-content">
            <p>在电子器件设计中的应用：</p>
            <ul>
              <li>散热设计优化</li>
              <li>导体材料选择</li>
              <li>热管理策略</li>
            </ul>
          </div>
        </div>
        
        <div class="application-card">
          <h3>🧪 理论验证</h3>
          <div class="app-content">
            <p>验证理论模型的有效性：</p>
            <ul>
              <li>Fermi液体理论</li>
              <li>输运理论</li>
              <li>多体效应</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 局限性与修正 -->
    <section class="limitations">
      <h2>局限性与修正</h2>
      
      <div class="limitations-content">
        <div class="limitation-category">
          <h3>🚫 适用条件限制</h3>
          <div class="limitation-items">
            <div class="limitation-item">
              <h4>温度范围</h4>
              <p>主要适用于中等温度范围，在极低温和极高温下会有显著偏差。</p>
            </div>
            
            <div class="limitation-item">
              <h4>材料类型</h4>
              <p>主要适用于简单金属，对于过渡金属、合金和强关联系统可能不适用。</p>
            </div>
            
            <div class="limitation-item">
              <h4>散射机制</h4>
              <p>假设弹性散射占主导，忽略了非弹性散射的贡献。</p>
            </div>
          </div>
        </div>
        
        <div class="limitation-category">
          <h3>🔧 修正方法</h3>
          <div class="correction-methods">
            <div class="method-item">
              <h4>多带模型</h4>
              <p>考虑多个能带的贡献：</p>
              <div class="formula-box">
                <p>L = Σᵢ(σᵢLᵢ)/Σᵢσᵢ</p>
              </div>
            </div>
            
            <div class="method-item">
              <h4>非弹性散射修正</h4>
              <p>包含电子-电子和电子-声子相互作用的影响。</p>
            </div>
            
            <div class="method-item">
              <h4>量子修正</h4>
              <p>考虑量子干涉效应和局域化效应。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 学习要点 -->
    <section class="learning-points">
      <h2>学习要点总结</h2>
      
      <div class="points-grid">
        <div class="point-category">
          <h3>🎯 核心概念</h3>
          <ul>
            <li>Wiedemann-Franz律的物理意义</li>
            <li>Lorenz数的理论值和实验值</li>
            <li>电导率和热导率的关系</li>
            <li>温度依赖性的物理机制</li>
          </ul>
        </div>
        
        <div class="point-category">
          <h3>📐 数学技能</h3>
          <ul>
            <li>基于Drude模型的推导</li>
            <li>统计力学方法的应用</li>
            <li>实验数据的分析和处理</li>
            <li>偏差的定量评估</li>
          </ul>
        </div>
        
        <div class="point-category">
          <h3>🔬 实验技能</h3>
          <ul>
            <li>电导率测量方法</li>
            <li>热导率测量技术</li>
            <li>温度控制和测量</li>
            <li>数据处理和误差分析</li>
          </ul>
        </div>
        
        <div class="point-category">
          <h3>💡 应用能力</h3>
          <ul>
            <li>材料性质的预测和评估</li>
            <li>热电材料的设计原理</li>
            <li>电子器件的热管理</li>
            <li>理论模型的验证方法</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 进阶学习 -->
    <section class="advanced-study">
      <h2>进阶学习方向</h2>
      
      <div class="study-paths">
        <div class="path-item">
          <div class="path-icon">🌟</div>
          <div class="path-content">
            <h3>热电物理</h3>
            <p>深入研究热电效应、Seebeck效应、Peltier效应等，了解热电材料的设计原理和应用。</p>
          </div>
        </div>
        
        <div class="path-item">
          <div class="path-icon">⚛️</div>
          <div class="path-content">
            <h3>输运理论</h3>
            <p>学习Boltzmann输运方程、Kubo公式等高级输运理论，理解非平衡态统计力学。</p>
          </div>
        </div>
        
        <div class="path-item">
          <div class="path-icon">🔬</div>
          <div class="path-content">
            <h3>强关联系统</h3>
            <p>研究强关联电子系统中的输运性质，了解Mott绝缘体、重费米子等奇异物态。</p>
          </div>
        </div>
        
        <div class="path-item">
          <div class="path-icon">🌡️</div>
          <div class="path-content">
            <h3>低维系统</h3>
            <p>探索一维和二维系统中的输运性质，理解量子霍尔效应、拓扑绝缘体等前沿领域。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Chapter1_9_3',
  mounted() {
    // 添加数学公式渲染支持
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
}

.chapter-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.chapter-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-style: italic;
}

section {
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.introduction p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #f8f9fa;
}

.law-statement {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;
}

.law-statement h3 {
  color: white;
  margin-bottom: 1rem;
}

.formula-box {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  font-family: 'Times New Roman', serif;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.law-statement ul {
  margin-top: 1rem;
  padding-left: 1.5rem;
}

.law-statement li {
  margin-bottom: 0.5rem;
  color: #f8f9fa;
}

.theory-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.theory-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
}

.theory-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.theory-card p {
  color: #f8f9fa;
  margin-bottom: 1rem;
}

.derivation-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.step-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.step-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.step-card p {
  color: #f8f9fa;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.exercise-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.exercise-problem {
  background: rgba(255, 255, 255, 0.1);
  padding: 2rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.exercise-problem h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

.problem-content p {
  color: #f8f9fa;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.solution {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1.5rem;
}

.solution h4 {
  color: white;
  margin-bottom: 1rem;
}

.solution-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.step {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.step p {
  color: #f8f9fa;
  margin-bottom: 0.5rem;
}

.step ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.step li {
  color: #f8f9fa;
  margin-bottom: 0.3rem;
}

.data-table {
  overflow-x: auto;
  margin: 1.5rem 0;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  overflow: hidden;
}

.data-table th,
.data-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.data-table th {
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-weight: bold;
}

.data-table td {
  color: #f8f9fa;
}

.temperature-effects {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.temp-regime {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.temp-regime h5 {
  color: white;
  margin-bottom: 0.5rem;
}

.temp-regime ul {
  margin: 0;
  padding-left: 1.5rem;
}

.temp-regime li {
  color: #f8f9fa;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.analysis-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.analysis-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.analysis-item h5 {
  color: white;
  margin-bottom: 0.5rem;
}

.analysis-item p {
  color: #f8f9fa;
  margin-bottom: 0.5rem;
}

.analysis-item ul {
  margin: 0;
  padding-left: 1.5rem;
}

.analysis-item li {
  color: #f8f9fa;
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.application-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.application-card h3 {
  color: white;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.app-content p {
  color: #f8f9fa;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.app-content ul {
  margin: 0;
  padding-left: 1.5rem;
}

.app-content li {
  color: #f8f9fa;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.limitations-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.limitation-category {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.limitation-category h3 {
  color: white;
  margin-bottom: 1.5rem;
}

.limitation-items,
.correction-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.limitation-item,
.method-item {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 0.5rem;
}

.limitation-item h4,
.method-item h4 {
  color: white;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.limitation-item p,
.method-item p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.point-category {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.point-category h3 {
  color: white;
  margin-bottom: 1rem;
}

.point-category ul {
  margin: 0;
  padding-left: 1.5rem;
}

.point-category li {
  color: #f8f9fa;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.study-paths {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.path-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.path-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.path-content h3 {
  color: white;
  margin-bottom: 0.5rem;
}

.path-content p {
  color: #f8f9fa;
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .theory-grid,
  .derivation-steps,
  .applications-grid,
  .limitations-content,
  .points-grid,
  .study-paths {
    grid-template-columns: 1fr;
  }
  
  .data-table {
    font-size: 0.8rem;
  }
  
  .temperature-effects {
    gap: 0.5rem;
  }
}
</style>