<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.2 有限温度下的费米-狄拉克分布</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">统计分布</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>费米-狄拉克统计</h2>
        <p class="lead-text">
          当温度不为零时，费米气体的性质由费米-狄拉克分布函数描述。
          这个分布反映了费米子的量子统计性质，在理解金属的热性质、电子输运等现象中起着核心作用。
        </p>
      </section>

      <section class="content-section">
        <h2>费米-狄拉克分布函数</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>分布函数</h3>
            <p>描述费米子占据概率</p>
            <div class="mathematical-content">
              <h4>基本形式：</h4>
              <div class="equation-block">
                <p>f(ε) = 1/(e^((ε-μ)/(kBT)) + 1)</p>
                <p>μ: 化学势</p>
                <p>T: 温度</p>
              </div>
              
              <h4>极限情况：</h4>
              <div class="equation-block">
                <p>T → 0: f(ε) = θ(μ - ε)</p>
                <p>T → ∞: f(ε) → e^(-(ε-μ)/(kBT))</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>温度效应</h3>
            <p>温度对分布的影响</p>
            <div class="mathematical-content">
              <h4>分布宽度：</h4>
              <div class="equation-block">
                <p>Δε ~ kBT</p>
                <p>费米面附近的展宽</p>
              </div>
              
              <h4>导数形式：</h4>
              <div class="equation-block">
                <p>-∂f/∂ε = 1/(4kBT) sech²((ε-μ)/(2kBT))</p>
                <p>在μ处达到最大值</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>化学势的温度依赖</h2>
        <div class="chemical-potential-section">
          <div class="concept-card">
            <div class="concept-icon">⚖️</div>
            <h3>粒子数守恒</h3>
            <p>确定化学势的条件</p>
            <div class="mathematical-content">
              <h4>粒子数方程：</h4>
              <div class="equation-block">
                <p>N = ∫ g(ε)f(ε)dε</p>
                <p>g(ε): 态密度</p>
              </div>
              
              <h4>低温展开：</h4>
              <div class="equation-block">
                <p>μ(T) ≈ εF[1 - π²/12(kBT/εF)²]</p>
                <p>T ≪ TF时的近似</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>索末菲展开</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔢</div>
            <h3>积分技巧</h3>
            <p>处理费米积分的方法</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>∫₀^∞ H(ε)f(ε)dε</p>
                <p>H(ε): 任意函数</p>
              </div>
              
              <h4>索末菲展开：</h4>
              <div class="equation-block">
                <p>≈ ∫₀^μ H(ε)dε + π²/6(kBT)²H'(μ) + ...</p>
                <p>T ≪ TF时有效</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>应用示例</h3>
            <p>计算热力学量</p>
            <div class="mathematical-content">
              <h4>内能：</h4>
              <div class="equation-block">
                <p>U = ∫ εg(ε)f(ε)dε</p>
                <p>≈ U₀ + π²/6(kBT)²g(εF)</p>
              </div>
              
              <h4>比热：</h4>
              <div class="equation-block">
                <p>C = ∂U/∂T</p>
                <p>≈ π²/3 kB²Tg(εF)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>电子比热</h2>
        <div class="specific-heat-section">
          <div class="physics-insight">
            <h3>🔥 线性比热</h3>
            <p>金属中电子对比热的贡献：</p>
            <ul>
              <li><strong>线性温度依赖：</strong>Cel ∝ T</li>
              <li><strong>比热系数：</strong>γ = π²kB²g(εF)/3</li>
              <li><strong>与声子比热比较：</strong>Cph ∝ T³</li>
              <li><strong>低温主导：</strong>T < θD/10时电子比热占主导</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>泡利磁化率</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>自旋磁化率</h3>
            <p>费米气体的磁响应</p>
            <div class="mathematical-content">
              <h4>磁场中的能量：</h4>
              <div class="equation-block">
                <p>ε±(k) = ℏ²k²/(2m) ± μBB</p>
                <p>±: 自旋向上/向下</p>
              </div>
              
              <h4>泡利磁化率：</h4>
              <div class="equation-block">
                <p>χP = μ₀μB²g(εF)</p>
                <p>与温度无关</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>朗道抗磁性</h3>
            <p>轨道运动的贡献</p>
            <div class="mathematical-content">
              <h4>轨道磁化率：</h4>
              <div class="equation-block">
                <p>χL = -χP/3</p>
                <p>朗道抗磁性</p>
              </div>
              
              <h4>总磁化率：</h4>
              <div class="equation-block">
                <p>χ = χP + χL = (2/3)χP</p>
                <p>净顺磁性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>德哈斯-范阿尔芬效应</h2>
        <div class="quantum-oscillations">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>量子振荡</h3>
            <p>强磁场中的周期性现象</p>
            <div class="mathematical-content">
              <h4>朗道能级：</h4>
              <div class="equation-block">
                <p>εn = ℏωc(n + 1/2)</p>
                <p>ωc = eB/m: 回旋频率</p>
              </div>
              
              <h4>振荡周期：</h4>
              <div class="equation-block">
                <p>Δ(1/B) = 2e/(ℏSF)</p>
                <p>SF: 费米面面积</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>实验测量与现代应用</h2>
        <div class="experimental-applications-grid">
          <div class="experimental-section">
            <h3>🔬 精密测量技术</h3>
            <div class="measurement-techniques">
              <div class="technique-card">
                <h4>低温比热测量</h4>
                <div class="technique-content">
                  <p><strong>绝热去磁制冷：</strong></p>
                  <div class="equation-block">
                    <p>T_final = T_initial × (B_final/B_initial)^n</p>
                    <p>n ≈ 0.5-1.0 (取决于磁性离子)</p>
                  </div>
                  
                  <h5>实验数据示例：</h5>
                  <div class="data-table">
                    <table>
                      <thead>
                        <tr><th>材料</th><th>T_min (mK)</th><th>γ (mJ/mol·K²)</th><th>β (mJ/mol·K⁴)</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Cu</td><td>10</td><td>0.695</td><td>0.0324</td></tr>
                        <tr><td>Ag</td><td>15</td><td>0.646</td><td>0.0380</td></tr>
                        <tr><td>Au</td><td>12</td><td>0.729</td><td>0.0298</td></tr>
                        <tr><td>Pt</td><td>8</td><td>6.48</td><td>0.0156</td></tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>电子比热：</strong>C_el = γT</p>
                    <p><strong>声子比热：</strong>C_ph = βT³</p>
                    <p><strong>分离方法：</strong>C/T vs T²拟合</p>
                  </div>
                </div>
              </div>

              <div class="technique-card">
                <h4>量子振荡测量</h4>
                <div class="technique-content">
                  <p><strong>温度阻尼因子：</strong></p>
                  <div class="equation-block">
                    <p>R_T = (2π²k_BT/ℏω_c)/sinh(2π²k_BT/ℏω_c)</p>
                    <p>ω_c = eB/m* (回旋频率)</p>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>有效质量测定：</strong>从温度阻尼</p>
                    <p><strong>散射时间：</strong>从Dingle温度</p>
                    <p><strong>费米面几何：</strong>从振荡频率</p>
                  </div>
                </div>
              </div>

              <div class="technique-card">
                <h4>热电性质测量</h4>
                <div class="technique-content">
                  <p><strong>塞贝克系数测量：</strong></p>
                  <div class="equation-block">
                    <p>S = -ΔV/ΔT</p>
                    <p>典型精度：~0.1 μV/K</p>
                  </div>
                  
                  <h5>典型金属的塞贝克系数：</h5>
                  <div class="data-table">
                    <table>
                      <thead>
                        <tr><th>金属</th><th>S (μV/K) @300K</th><th>dS/dT (nV/K²)</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Cu</td><td>1.84</td><td>6.5</td></tr>
                        <tr><td>Ag</td><td>1.51</td><td>5.8</td></tr>
                        <tr><td>Au</td><td>1.94</td><td>7.2</td></tr>
                        <tr><td>Pt</td><td>-5.28</td><td>-12.1</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="applications-section">
            <h3>🚀 现代技术应用</h3>
            <div class="modern-applications">
              <div class="application-card">
                <h4>热电材料与器件</h4>
                <div class="application-content">
                  <p><strong>热电优值：</strong></p>
                  <div class="equation-block">
                    <p>ZT = S²σT/κ</p>
                    <p>κ = κ_el + κ_ph (电子+声子热导)</p>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>功率因子：</strong>PF = S²σ</p>
                    <p><strong>Wiedemann-Franz定律：</strong>κ_el/σT = L₀</p>
                    <p><strong>声子玻璃-电子晶体：</strong>PGEC概念</p>
                  </div>
                  
                  <h5>高性能热电材料：</h5>
                  <div class="data-table">
                    <table>
                      <thead>
                        <tr><th>材料</th><th>ZT_max</th><th>温度(K)</th><th>应用</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Bi₂Te₃</td><td>1.2</td><td>300</td><td>制冷</td></tr>
                        <tr><td>PbTe</td><td>2.2</td><td>800</td><td>发电</td></tr>
                        <tr><td>SnSe</td><td>2.6</td><td>923</td><td>发电</td></tr>
                        <tr><td>Cu₂Se</td><td>1.5</td><td>1000</td><td>高温</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div class="application-card">
                <h4>量子器件中的费米统计</h4>
                <div class="application-content">
                  <p><strong>单电子晶体管(SET)：</strong></p>
                  <div class="equation-block">
                    <p>E_C = e²/2C_Σ (库仑阻塞能)</p>
                    <p>工作条件：k_BT ≪ E_C</p>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>库仑振荡：</strong>电导随栅压周期变化</p>
                    <p><strong>库仑阶梯：</strong>I-V特性的台阶结构</p>
                    <p><strong>温度展宽：</strong>~k_BT的能量分辨率</p>
                  </div>
                </div>
              </div>

              <div class="application-card">
                <h4>超导电子学</h4>
                <div class="application-content">
                  <p><strong>准粒子隧穿：</strong></p>
                  <div class="equation-block">
                    <p>I ∝ ∫ N_s(E)[f(E-eV) - f(E)]dE</p>
                    <p>N_s(E) = N(0)|E|/√(E²-Δ²)</p>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>能隙测量：</strong>从dI/dV谱</p>
                    <p><strong>温度效应：</strong>热激发准粒子</p>
                    <p><strong>约瑟夫森效应：</strong>Cooper对隧穿</p>
                  </div>
                </div>
              </div>

              <div class="application-card">
                <h4>拓扑量子器件</h4>
                <div class="application-content">
                  <p><strong>拓扑绝缘体表面态：</strong></p>
                  <div class="equation-block">
                    <p>H_surf = ℏv_F(σ_x k_y - σ_y k_x)</p>
                    <p>线性色散的Dirac费米子</p>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>自旋-动量锁定：</strong>⟨σ⟩ ∝ k × ẑ</p>
                    <p><strong>弱反局域化：</strong>量子干涉效应</p>
                    <p><strong>量子霍尔效应：</strong>拓扑保护边缘态</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="future-section">
            <h3>🔮 未来发展方向</h3>
            <div class="future-directions">
              <div class="direction-item theoretical">
                <h4>理论前沿</h4>
                <ul>
                  <li>非平衡费米统计的精确理论</li>
                  <li>强关联系统中的准粒子概念</li>
                  <li>机器学习辅助的费米面重构</li>
                  <li>拓扑相变的动力学理论</li>
                </ul>
              </div>
              
              <div class="direction-item experimental">
                <h4>实验突破</h4>
                <ul>
                  <li>飞秒时间分辨的费米面成像</li>
                  <li>单原子精度的量子器件</li>
                  <li>极端条件下的输运测量</li>
                  <li>人工量子材料的精确调控</li>
                </ul>
              </div>
              
              <div class="direction-item application">
                <h4>应用前景</h4>
                <ul>
                  <li>室温量子计算器件</li>
                  <li>高效热电转换材料</li>
                  <li>拓扑量子传感器</li>
                  <li>神经形态计算芯片</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>有限温度下的深层理论分析</h2>
        <div class="theory-analysis-grid">
          <div class="analysis-card">
            <div class="analysis-icon">🌡️</div>
            <h3>费米-狄拉克分布的统计力学起源</h3>
            <div class="analysis-content">
              <h4>巨正则系综推导：</h4>
              <div class="equation-block">
                <p>Ω = -k_BT ln(Ξ)</p>
                <p>Ξ = Π_k (1 + e^(-β(ε_k-μ)))</p>
                <p>⟨n_k⟩ = ∂ln(Ξ)/∂(βμ) = 1/(e^(β(ε_k-μ)) + 1)</p>
              </div>
              
              <h4>热力学关系：</h4>
              <div class="physics-insight">
                <p><strong>粒子数：</strong>N = -∂Ω/∂μ</p>
                <p><strong>熵：</strong>S = -∂Ω/∂T</p>
                <p><strong>内能：</strong>U = Ω + TS + μN</p>
                <p><strong>压强：</strong>P = -∂Ω/∂V</p>
              </div>
              
              <h4>Sommerfeld展开：</h4>
              <div class="equation-block">
                <p>∫₀^∞ H(ε)f(ε)dε ≈ ∫₀^μ H(ε)dε + (π²/6)(k_BT)²H'(μ) + ...</p>
                <p>低温近似的系统方法</p>
              </div>
            </div>
          </div>

          <div class="analysis-card">
            <div class="analysis-icon">📊</div>
            <h3>温度效应的物理图像</h3>
            <div class="analysis-content">
              <h4>费米面的"软化"：</h4>
              <div class="physics-insight">
                <p><strong>热涨落范围：</strong>~k_BT</p>
                <p><strong>激发电子数：</strong>δN ~ g(E_F)k_BT</p>
                <p><strong>激发电子能量：</strong>δE ~ g(E_F)(k_BT)²</p>
              </div>
              
              <h4>态密度的温度修正：</h4>
              <div class="equation-block">
                <p>g_eff(T) = g(E_F)[1 + (π²/6)(k_BT/E_F)² + ...]</p>
                <p>有效态密度随温度变化</p>
              </div>
              
              <h4>化学势的温度依赖：</h4>
              <div class="equation-block">
                <p>μ(T) = E_F[1 - (π²/12)(k_BT/E_F)² + ...]</p>
                <p>T → 0时，μ → E_F</p>
              </div>
            </div>
          </div>

          <div class="analysis-card">
            <div class="analysis-icon">⚡</div>
            <h3>输运性质的温度依赖</h3>
            <div class="analysis-content">
              <h4>电导率的温度效应：</h4>
              <div class="equation-block">
                <p>σ(T) = σ₀[1 - α(T/T_F)² + ...]</p>
                <p>α取决于散射机制</p>
              </div>
              
              <h4>散射机制分析：</h4>
              <div class="physics-insight">
                <p><strong>电子-声子散射：</strong>τ⁻¹ ∝ T (高温)</p>
                <p><strong>电子-电子散射：</strong>τ⁻¹ ∝ T² (费米液体)</p>
                <p><strong>杂质散射：</strong>τ⁻¹ = 常数 (低温主导)</p>
              </div>
              
              <h4>热电效应：</h4>
              <div class="equation-block">
                <p>S = -(π²k_B²T)/(3eE_F) × [d ln σ(E)/d E]_{E=E_F}</p>
                <p>塞贝克系数与能带结构关系</p>
              </div>
            </div>
          </div>
        </div>

        <h2>温度标度和物理图像</h2>
        <div class="temperature-regimes">
          <div class="regime-item">
            <h3>🧊 量子简并区 (T ≪ TF)</h3>
            <p>费米分布接近阶跃函数，只有费米面附近~kBT范围内的电子参与热激发</p>
          </div>
          <div class="regime-item">
            <h3>🌡️ 中间温度区 (T ~ TF)</h3>
            <p>费米分布显著展宽，量子统计效应与经典效应竞争</p>
          </div>
          <div class="regime-item">
            <h3>🔥 经典区 (T ≫ TF)</h3>
            <p>费米分布趋向麦克斯韦-玻尔兹曼分布，经典统计适用</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>费米-狄拉克分布描述有限温度下的费米气体</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>索末菲展开是处理费米积分的重要工具</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>电子比热呈线性温度依赖</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>泡利磁化率与温度无关</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>量子振荡效应提供费米面信息</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_2',
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
  padding: 2rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 3px solid #17a2b8;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  font-weight: 700;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  color: #666;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
}

.introduction {
  background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #0c5460;
  font-weight: 500;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.chemical-potential-section {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.specific-heat-section {
  background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.quantum-oscillations {
  background: linear-gradient(135deg, #e2e3e5 0%, #d6d8db 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.mathematical-content h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #17a2b8;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #155724;
  margin-bottom: 1rem;
}

.physics-insight ul {
  list-style: none;
  padding: 0;
}

.physics-insight li {
  margin: 1rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.physics-insight li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #155724;
  font-weight: bold;
}

.temperature-regimes {
  display: grid;
  gap: 1.5rem;
  margin: 2rem 0;
}

.regime-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 5px solid #7b1fa2;
}

.regime-item h3 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.applications {
  margin: 3rem 0;
}

.theory-analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.analysis-card {
  background: linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%);
  border: 2px solid #ffcc02;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.analysis-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(255, 152, 0, 0.2);
  border-color: #ff9800;
}

.analysis-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.analysis-content {
  margin-top: 1rem;
}

.analysis-content h4 {
  color: #e65100;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.example-box {
  background: #f0f8ff;
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.example-box h3 {
  color: #0056b3;
  margin-bottom: 1rem;
}

.summary {
  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary h2 {
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.key-points {
  display: grid;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.point-number {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
}

.point-item p {
  margin: 0;
  flex: 1;
}

.experimental-applications-grid {
  display: grid;
  gap: 3rem;
  margin: 2rem 0;
}

.experimental-section,
.applications-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #17a2b8;
}

.measurement-techniques,
.modern-applications {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.technique-card,
.application-card {
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.technique-card:hover,
.application-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
}

.technique-content,
.application-content {
  margin-top: 1rem;
}

.data-table {
  margin: 1rem 0;
  overflow-x: auto;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

.data-table th,
.data-table td {
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #dee2e6;
}

.data-table th {
  background: linear-gradient(135deg, #17a2b8 0%, #138496 100%);
  color: white;
  font-weight: 600;
}

.data-table tr:nth-child(even) {
  background: #f8f9fa;
}

.future-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  padding: 2rem;
  border-radius: 15px;
  border-left: 5px solid #2196f3;
  margin-top: 2rem;
}

.future-directions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.direction-item {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #2196f3;
}

.direction-item.theoretical {
  border-left-color: #9c27b0;
}

.direction-item.experimental {
  border-left-color: #ff9800;
}

.direction-item.application {
  border-left-color: #4caf50;
}

.direction-item h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.direction-item ul {
  list-style: none;
  padding: 0;
}

.direction-item li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
  color: #495057;
}

.direction-item li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #17a2b8;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .future-directions {
    grid-template-columns: 1fr;
  }
  
  .data-table {
    font-size: 0.8rem;
  }
}
</style>