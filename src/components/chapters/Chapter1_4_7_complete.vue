<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1>1.4.7 局域密度近似 (LDA)</h1>
      <p class="chapter-subtitle">Local Density Approximation - 密度泛函理论的基石</p>
    </div>

    <div class="content-container">
      <section class="content-section">
        <h2>基本概念与理论基础</h2>
        <div class="concept-introduction">
          <div class="definition-card">
            <h3>LDA定义</h3>
            <p>局域密度近似(LDA)是密度泛函理论中最基本的近似方法，假设交换关联能密度仅依赖于局域电子密度。</p>
            <div class="equation-formula">
              E_xc^LDA[ρ] = ∫ ρ(r)ε_xc^unif(ρ(r))dr
            </div>
          </div>
          
          <div class="theoretical-foundation">
            <h3>理论基础</h3>
            <div class="foundation-points">
              <div class="point-item">
                <h4>🎯 均匀电子气体模型</h4>
                <p>基于均匀电子气体的精确解，假设局域区域内电子密度均匀分布</p>
              </div>
              <div class="point-item">
                <h4>📍 局域性假设</h4>
                <p>交换关联能密度只依赖于该点的电子密度，忽略密度梯度效应</p>
              </div>
              <div class="point-item">
                <h4>⚡ 计算效率</h4>
                <p>简化的数学形式使得大规模计算成为可能</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数学表达式</h2>
        <div class="mathematical-formulation">
          <div class="exchange-functional">
            <h3>交换泛函（精确）</h3>
            <div class="equation-formula large">
              E_x^LDA[ρ] = -C_x ∫ ρ(r)^(4/3) dr
            </div>
            <p>其中交换常数 C_x = ¾(3/π)^(1/3) ≈ 0.7386</p>
          </div>

          <div class="correlation-functional">
            <h3>关联泛函（参数化）</h3>
            <div class="parametrization-methods">
              <div class="method-card">
                <h4>VWN参数化</h4>
                <p>Vosko, Wilk, Nusair (1980) - 基于量子蒙特卡洛数据</p>
              </div>
              <div class="method-card">
                <h4>PW92参数化</h4>
                <p>Perdew & Wang (1992) - 更精确的QMC拟合</p>
              </div>
              <div class="method-card">
                <h4>PZ81参数化</h4>
                <p>Perdew & Zunger (1981) - 简单实用的形式</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算实现</h2>
        <div class="computational-aspects">
          <div class="scf-procedure">
            <h3>自洽场计算流程</h3>
            <div class="flowchart">
              <div class="flow-step">
                <span class="step-number">1</span>
                <div class="step-content">
                  <h4>初始密度猜测</h4>
                  <p>ρ⁽⁰⁾(r) - 通常使用原子密度叠加</p>
                </div>
              </div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">
                <span class="step-number">2</span>
                <div class="step-content">
                  <h4>构造有效势</h4>
                  <p>V_eff = V_ext + V_H + V_xc^LDA</p>
                </div>
              </div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">
                <span class="step-number">3</span>
                <div class="step-content">
                  <h4>求解KS方程</h4>
                  <p>[-½∇² + V_eff]ψᵢ = εᵢψᵢ</p>
                </div>
              </div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">
                <span class="step-number">4</span>
                <div class="step-content">
                  <h4>更新电子密度</h4>
                  <p>ρ⁽ⁱ⁺¹⁾(r) = Σⱼ |ψⱼ(r)|²</p>
                </div>
              </div>
              <div class="flow-arrow">↓</div>
              <div class="flow-step">
                <span class="step-number">5</span>
                <div class="step-content">
                  <h4>收敛检查</h4>
                  <p>|ρ⁽ⁱ⁺¹⁾ - ρ⁽ⁱ⁾| < 阈值?</p>
                </div>
              </div>
            </div>
          </div>

          <div class="numerical-methods">
            <h3>数值方法</h3>
            <div class="method-grid">
              <div class="method-item">
                <h4>🌊 平面波基组</h4>
                <p>适用于周期性系统，需要赝势处理内层电子</p>
              </div>
              <div class="method-item">
                <h4>⚛️ 原子轨道基组</h4>
                <p>化学直观，适合分子系统，存在基组重叠误差</p>
              </div>
              <div class="method-item">
                <h4>📍 实空间网格</h4>
                <p>灵活几何形状，自适应网格，并行化友好</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>成功应用</h2>
        <div class="applications">
          <div class="success-domains">
            <div class="domain-card">
              <h3>🔬 固体物理</h3>
              <div class="achievements">
                <div class="achievement-item">
                  <span class="property">晶格常数</span>
                  <span class="accuracy">误差 < 2%</span>
                  <span class="status good">优秀</span>
                </div>
                <div class="achievement-item">
                  <span class="property">体模量</span>
                  <span class="accuracy">定性正确</span>
                  <span class="status moderate">良好</span>
                </div>
                <div class="achievement-item">
                  <span class="property">相稳定性</span>
                  <span class="accuracy">相对能量</span>
                  <span class="status good">可靠</span>
                </div>
              </div>
            </div>

            <div class="domain-card">
              <h3>🌊 表面与界面</h3>
              <ul class="application-list">
                <li>表面重构现象</li>
                <li>分子吸附研究</li>
                <li>表面电子态</li>
                <li>功函数计算</li>
              </ul>
            </div>

            <div class="domain-card">
              <h3>🔧 缺陷物理</h3>
              <ul class="application-list">
                <li>点缺陷：空位、间隙</li>
                <li>线缺陷：位错结构</li>
                <li>面缺陷：晶界</li>
                <li>杂质掺杂效应</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>主要局限性</h2>
        <div class="limitations">
          <div class="error-analysis">
            <div class="error-card severe">
              <h3>📊 能带隙严重低估</h3>
              <p>半导体和绝缘体的能带隙通常被低估50%以上</p>
              <div class="examples">
                <div class="example-row">
                  <span>Si: 实验1.17eV → LDA 0.52eV</span>
                </div>
                <div class="example-row">
                  <span>GaAs: 实验1.52eV → LDA 0.37eV</span>
                </div>
              </div>
            </div>

            <div class="error-card fundamental">
              <h3>🔄 自相互作用误差</h3>
              <p>电子与自身的虚假相互作用导致过度离域化</p>
              <ul class="consequence-list">
                <li>原子化能高估</li>
                <li>反应势垒低估</li>
                <li>电荷转移过度</li>
              </ul>
            </div>

            <div class="error-card missing">
              <h3>🌊 范德华相互作用缺失</h3>
              <p>无法描述长程色散相互作用</p>
              <ul class="impact-list">
                <li>分子晶体结构错误</li>
                <li>层状材料描述不准</li>
                <li>生物分子相互作用</li>
              </ul>
            </div>

            <div class="error-card challenging">
              <h3>🔗 强关联系统失效</h3>
              <p>过渡金属氧化物、稀土化合物等强关联材料</p>
              <ul class="failure-list">
                <li>Mott绝缘体</li>
                <li>高温超导体</li>
                <li>重费米子系统</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>改进方法</h2>
        <div class="improvements">
          <div class="beyond-lda">
            <div class="improvement-card">
              <h3>📈 广义梯度近似 (GGA)</h3>
              <p>包含密度梯度信息，改善化学键描述</p>
              <div class="equation-formula">
                E_xc^GGA[ρ] = ∫ ρ(r)ε_xc(ρ(r), ∇ρ(r))dr
              </div>
              <div class="popular-functionals">
                <span class="functional">PBE</span>
                <span class="functional">PW91</span>
                <span class="functional">BLYP</span>
              </div>
            </div>

            <div class="improvement-card">
              <h3>🎯 Meta-GGA</h3>
              <p>进一步包含动能密度，更准确的交换描述</p>
              <div class="popular-functionals">
                <span class="functional">TPSS</span>
                <span class="functional">SCAN</span>
                <span class="functional">r²SCAN</span>
              </div>
            </div>

            <div class="improvement-card">
              <h3>🔄 杂化泛函</h3>
              <p>混合精确交换，显著改善能带隙</p>
              <div class="equation-formula">
                E_xc^hybrid = aE_x^exact + (1-a)E_x^DFT + E_c^DFT
              </div>
              <div class="popular-functionals">
                <span class="functional">B3LYP</span>
                <span class="functional">PBE0</span>
                <span class="functional">HSE06</span>
              </div>
            </div>
          </div>

          <div class="specialized-corrections">
            <h3>专门修正方法</h3>
            <div class="correction-grid">
              <div class="correction-item">
                <h4>🔗 LDA+U</h4>
                <p>强关联d/f电子的Hubbard修正</p>
              </div>
              <div class="correction-item">
                <h4>🌊 DFT-D</h4>
                <p>经验色散修正</p>
              </div>
              <div class="correction-item">
                <h4>🔄 SIC</h4>
                <p>自相互作用修正</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-trends">
          <div class="trend-cards">
            <div class="trend-card">
              <div class="trend-icon">🤖</div>
              <h3>机器学习泛函</h3>
              <p>利用AI技术设计新的交换关联泛函</p>
            </div>
            <div class="trend-card">
              <div class="trend-icon">⚡</div>
              <h3>高通量计算</h3>
              <p>大规模自动化DFT计算用于材料发现</p>
            </div>
            <div class="trend-card">
              <div class="trend-icon">🖥️</div>
              <h3>百亿亿次计算</h3>
              <p>超级计算机实现百万原子系统计算</p>
            </div>
            <div class="trend-card">
              <div class="trend-icon">⚛️</div>
              <h3>量子计算DFT</h3>
              <p>探索量子计算在DFT中的应用潜力</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>总结与展望</h2>
        <div class="summary">
          <div class="key-points">
            <div class="point-card">
              <h3>🎯 历史意义</h3>
              <p>LDA开创了从第一性原理计算材料性质的新时代，是现代计算材料科学的基石</p>
            </div>
            <div class="point-card">
              <h3>💪 主要优势</h3>
              <ul>
                <li>计算高效，数值稳定</li>
                <li>适用范围广，实现成熟</li>
                <li>结构性质预测准确</li>
              </ul>
            </div>
            <div class="point-card">
              <h3>⚠️ 主要局限</h3>
              <ul>
                <li>能带隙系统性低估</li>
                <li>自相互作用误差</li>
                <li>强关联系统失效</li>
              </ul>
            </div>
            <div class="point-card">
              <h3>🚀 未来前景</h3>
              <p>作为DFT的基础，LDA将继续在高通量计算、教学培训和方法学发展中发挥重要作用</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

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
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
}

.chapter-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 300;
}

.content-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border: 1px solid #e1e8ed;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #3498db;
}

.definition-card, .domain-card, .error-card, .improvement-card, .trend-card, .point-card {
  background: #f8f9fa;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border-left: 4px solid #3498db;
  transition: all 0.3s ease;
}

.definition-card:hover, .domain-card:hover, .error-card:hover, .improvement-card:hover, .trend-card:hover, .point-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.equation-formula {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
  text-align: center;
  transition: all 0.3s ease;
}

.equation-formula:hover {
  background: #e3f2fd;
  border-color: #2196f3;
  transform: scale(1.02);
}

.equation-formula.large {
  font-size: 1.3rem;
  padding: 1.5rem;
}

.foundation-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.point-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.point-item h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.parametrization-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.method-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.method-card:hover {
  border-color: #3498db;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.2);
}

.flowchart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #3498db;
  min-width: 300px;
}

.step-number {
  background: #3498db;
  color: white;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.flow-arrow {
  font-size: 1.5rem;
  color: #3498db;
  font-weight: bold;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.method-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
}

.method-item h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.success-domains {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.achievements {
  margin-top: 1rem;
}

.achievement-item {
  display: grid;
  grid-template-columns: 1fr auto auto;
  gap: 1rem;
  padding: 0.5rem;
  border-bottom: 1px solid #e0e0e0;
  align-items: center;
}

.status.good {
  background: #e8f5e8;
  color: #2e7d32;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.status.moderate {
  background: #fff3e0;
  color: #f57c00;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.application-list, .consequence-list, .impact-list, .failure-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.application-list li, .consequence-list li, .impact-list li, .failure-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  padding-left: 1.5rem;
}

.application-list li:before, .consequence-list li:before, .impact-list li:before, .failure-list li:before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #3498db;
  font-size: 0.8rem;
}

.error-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.error-card.severe {
  border-left-color: #e74c3c;
}

.error-card.fundamental {
  border-left-color: #f39c12;
}

.error-card.missing {
  border-left-color: #9b59b6;
}

.error-card.challenging {
  border-left-color: #3f51b5;
}

.examples {
  margin-top: 1rem;
}

.example-row {
  display: block;
  padding: 0.5rem;
  background: white;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.beyond-lda {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.popular-functionals {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.functional {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 500;
}

.correction-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.correction-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  text-align: center;
}

.trend-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.trend-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.point-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.point-card ul {
  list-style: none;
  padding: 0;
}

.point-card ul li {
  padding: 0.3rem 0;
  position: relative;
  padding-left: 1.2rem;
}

.point-card ul li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #3498db;
  font-weight: bold;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-header h1 {
    font-size: 2rem;
  }
  
  .foundation-points, .parametrization-methods, .method-grid, .success-domains, .error-analysis, .beyond-lda, .trend-cards, .key-points {
    grid-template-columns: 1fr;
  }
  
  .flow-step {
    min-width: auto;
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .chapter-header {
    padding: 1rem;
  }
  
  .content-section {
    padding: 1rem;
  }
  
  .chapter-header h1 {
    font-size: 1.8rem;
  }
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    padding: 1rem;
  }
  
  .content-section {
    box-shadow: none;
    border: 1px solid #ccc;
    page-break-inside: avoid;
  }
  
  .equation-formula {
    background: #f9f9f9 !important;
  }
}
</style>