<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.1 理想费米气体的基态性质</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">费米气体</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>理想费米气体模型</h2>
        <p class="lead-text">
          理想费米气体是凝聚态物理中最基础的模型之一，它描述了不相互作用的费米子系统。
          尽管简单，这个模型却能解释金属中电子的许多基本性质，为理解更复杂的多体系统奠定基础。
        </p>
      </section>

      <section class="content-section">
        <h2>费米气体的哈密顿量</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>基本哈密顿量</h3>
            <p>理想费米气体的能量算符</p>
            <div class="mathematical-content">
              <h4>二次量子化形式：</h4>
              <div class="equation-block">
                <p>Ĥ = Σₖ εₖ ĉ†ₖĉₖ</p>
                <p>εₖ = ℏ²k²/(2m)</p>
              </div>
              
              <h4>反对易关系：</h4>
              <div class="equation-block">
                <p>{ĉₖ, ĉ†ₖ'} = δₖₖ'</p>
                <p>{ĉₖ, ĉₖ'} = {ĉ†ₖ, ĉ†ₖ'} = 0</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔢</div>
            <h3>占据数算符</h3>
            <p>描述每个态的占据情况</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>n̂ₖ = ĉ†ₖĉₖ</p>
                <p>n̂ₖ|nₖ⟩ = nₖ|nₖ⟩</p>
              </div>
              
              <h4>泡利不相容原理：</h4>
              <div class="equation-block">
                <p>nₖ = 0 或 1</p>
                <p>(ĉ†ₖ)² = 0</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>零温基态：费米海</h2>
        <div class="fermi-sea-section">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>费米海的形成</h3>
            <p>T=0时的基态构型</p>
            <div class="mathematical-content">
              <h4>基态波函数：</h4>
              <div class="equation-block">
                <p>|ψ₀⟩ = ∏ₖ&lt;ₖF ĉ†ₖ|0⟩</p>
                <p>填满所有k &lt; kF的态</p>
              </div>
              
              <h4>费米动量：</h4>
              <div class="equation-block">
                <p>kF = (3π²n)^(1/3)</p>
                <p>n = N/V (粒子密度)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>费米能和费米温度</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>费米能</h3>
            <p>费米面处的能量</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>εF = ℏ²kF²/(2m)</p>
                <p>εF = ℏ²(3π²n)^(2/3)/(2m)</p>
              </div>
              
              <h4>典型数值：</h4>
              <div class="equation-block">
                <p>金属中：εF ~ 1-10 eV</p>
                <p>对应TF ~ 10⁴-10⁵ K</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>费米温度</h3>
            <p>费米能对应的特征温度</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>TF = εF/kB</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="equation-block">
                <p>T ≪ TF: 量子简并</p>
                <p>T ≫ TF: 经典极限</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>基态能量和压强</h2>
        <div class="physics-insight">
          <h3>🎯 基态性质</h3>
          <p>费米气体基态的热力学性质：</p>
          <ul>
            <li><strong>基态能量：</strong>E₀ = (3/5)NεF</li>
            <li><strong>平均动能：</strong>⟨T⟩ = (3/5)εF</li>
            <li><strong>费米压强：</strong>P = (2/5)nεF</li>
            <li><strong>体模量：</strong>K = (5/3)P</li>
          </ul>
        </div>
      </section>

      <section class="content-section">
        <h2>态密度</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>能量态密度</h3>
            <p>单位能量间隔的态数</p>
            <div class="mathematical-content">
              <h4>三维情况：</h4>
              <div class="equation-block">
                <p>g(ε) = (V/2π²)(2m/ℏ²)^(3/2)√ε</p>
                <p>∝ √ε</p>
              </div>
              
              <h4>费米面处：</h4>
              <div class="equation-block">
                <p>g(εF) = (3N)/(2εF)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>费米面性质</h3>
            <p>费米面的几何和拓扑性质</p>
            <div class="mathematical-content">
              <h4>费米面面积：</h4>
              <div class="equation-block">
                <p>SF = 4πkF²</p>
              </div>
              
              <h4>费米速度：</h4>
              <div class="equation-block">
                <p>vF = ℏkF/m = √(2εF/m)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验验证与测量技术</h2>
        <div class="experimental-grid">
          <div class="experimental-card">
            <div class="experimental-icon">🔬</div>
            <h3>角分辨光电子能谱(ARPES)</h3>
            <p>直接观测费米面结构的实验技术</p>
            <div class="experimental-content">
              <h4>实验原理：</h4>
              <div class="equation-block">
                <p>hν = E_kin + φ + E_B</p>
                <p>E_B = 结合能, φ = 功函数</p>
                <p>k∥ = √(2mE_kin)sin(θ)/ℏ</p>
              </div>
              
              <h4>典型实验数据：</h4>
              <div class="data-table">
                <table>
                  <thead>
                    <tr>
                      <th>材料</th>
                      <th>费米能(eV)</th>
                      <th>费米速度(10⁶ m/s)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Cu</td><td>7.0</td><td>1.57</td></tr>
                    <tr><td>Au</td><td>5.5</td><td>1.40</td></tr>
                    <tr><td>Al</td><td>11.7</td><td>2.03</td></tr>
                    <tr><td>Graphene</td><td>0.4</td><td>1.0</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4>实验观测：</h4>
              <div class="physics-insight">
                <p><strong>费米面形状：</strong>球形(自由电子) vs 复杂形状(真实金属)</p>
                <p><strong>能带结构：</strong>抛物线色散 vs 线性色散(石墨烯)</p>
                <p><strong>表面态：</strong>拓扑绝缘体的Dirac锥</p>
              </div>
            </div>
          </div>

          <div class="experimental-card">
            <div class="experimental-icon">⚡</div>
            <h3>量子振荡实验</h3>
            <p>通过磁场下的振荡现象研究费米面</p>
            <div class="experimental-content">
              <h4>de Haas-van Alphen效应：</h4>
              <div class="equation-block">
                <p>M ∝ cos(2πF/B + φ)</p>
                <p>F = (ℏ/2πe)A_F (频率)</p>
                <p>A_F: 费米面截面积</p>
              </div>
              
              <h4>Shubnikov-de Haas效应：</h4>
              <div class="equation-block">
                <p>ρ_xx ∝ cos(2πF/B + φ)</p>
                <p>电阻率的量子振荡</p>
              </div>
              
              <h4>实验应用：</h4>
              <div class="physics-insight">
                <p><strong>费米面重构：</strong>电荷密度波、超导</p>
                <p><strong>有效质量：</strong>m* = ℏ²(∂A_F/∂E_F)</p>
                <p><strong>散射时间：</strong>从振荡幅度衰减</p>
              </div>
            </div>
          </div>

          <div class="experimental-card">
            <div class="experimental-icon">🌡️</div>
            <h3>比热测量</h3>
            <p>通过热容研究电子态密度</p>
            <div class="experimental-content">
              <h4>Sommerfeld系数：</h4>
              <div class="equation-block">
                <p>C_el = γT = (π²k_B²/3)g(E_F)T</p>
                <p>γ = 线性比热系数</p>
                <p>g(E_F) = 费米能处态密度</p>
              </div>
              
              <h4>实验数据对比：</h4>
              <div class="data-table">
                <table>
                  <tbody>
                  <tr><th>金属</th><th>γ_exp (mJ/mol·K²)</th><th>γ_theory</th><th>增强因子</th></tr>
                  <tr><td>Li</td><td>1.63</td><td>1.24</td><td>1.31</td></tr>
                  <tr><td>Na</td><td>1.38</td><td>1.13</td><td>1.22</td></tr>
                  <tr><td>Pd</td><td>9.42</td><td>2.31</td><td>4.08</td></tr>
                  <tr><td>Pt</td><td>6.48</td><td>1.95</td><td>3.32</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4>增强机制：</h4>
              <div class="physics-insight">
                <p><strong>电子-声子耦合：</strong>λ = (m*/m_b - 1)</p>
                <p><strong>多体效应：</strong>电子关联、交换增强</p>
                <p><strong>能带结构：</strong>van Hove奇点</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>现代理论发展与前沿应用</h2>
        <div class="modern-development-grid">
          <div class="development-category">
            <h3>🔬 理论突破</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>费米液体理论的修正</h4>
                <div class="development-content">
                  <p><strong>Landau费米液体理论：</strong></p>
                  <div class="equation-block">
                    <p>δn_k = f(k,k')δn_k'</p>
                    <p>准粒子相互作用函数</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>有效质量增强：</strong>m*/m = 1 + F₁ˢ/3</p>
                    <p><strong>比热增强：</strong>γ/γ₀ = m*/m</p>
                    <p><strong>磁化率增强：</strong>χ/χ₀ = m*/m/(1+F₀ᵃ)</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>非费米液体行为</h4>
                <div class="development-content">
                  <p><strong>边际费米液体：</strong></p>
                  <div class="equation-block">
                    <p>ρ(T) = ρ₀ + AT^n, n < 2</p>
                    <p>C/T ∝ -ln(T)</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>量子临界点：</strong>二级相变附近</p>
                    <p><strong>重费米子系统：</strong>CeCoIn₅, CeCu₂Si₂</p>
                    <p><strong>高温超导体：</strong>赝能隙态</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>拓扑费米子系统</h4>
                <div class="development-content">
                  <p><strong>Weyl半金属：</strong></p>
                  <div class="equation-block">
                    <p>H = ℏv_F(σ·k)</p>
                    <p>线性色散关系</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>手性异常：</strong>∂μj₅^μ = (e²/2π²ℏ²)E·B</p>
                    <p><strong>表面费米弧：</strong>开放费米面</p>
                    <p><strong>负磁阻：</strong>手性磁效应</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🧪 实验前沿</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>超快时间分辨ARPES</h4>
                <div class="development-content">
                  <p><strong>飞秒激光泵浦-探测：</strong></p>
                  <div class="physics-insight">
                    <p><strong>时间分辨率：</strong>~10 fs</p>
                    <p><strong>非平衡态研究：</strong>载流子动力学</p>
                    <p><strong>相变动力学：</strong>超导能隙演化</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>扫描隧道显微镜(STM)</h4>
                <div class="development-content">
                  <p><strong>准粒子干涉成像：</strong></p>
                  <div class="equation-block">
                    <p>dI/dV ∝ ρ(r,E)</p>
                    <p>局域态密度</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>费米面重构：</strong>电荷密度波</p>
                    <p><strong>超导能隙：</strong>空间分辨谱学</p>
                    <p><strong>拓扑表面态：</strong>Dirac锥成像</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>量子气体显微镜</h4>
                <div class="development-content">
                  <p><strong>单原子分辨成像：</strong></p>
                  <div class="physics-insight">
                    <p><strong>费米子配对：</strong>BCS-BEC渡越</p>
                    <p><strong>人工规范场：</strong>合成维度</p>
                    <p><strong>多体局域化：</strong>无序系统</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>💻 计算方法</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>密度泛函理论(DFT)</h4>
                <div class="development-content">
                  <p><strong>Kohn-Sham方程：</strong></p>
                  <div class="equation-block">
                    <p>[-ℏ²∇²/2m + V_eff(r)]ψᵢ = εᵢψᵢ</p>
                    <p>V_eff = V_ext + V_H + V_xc</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>交换关联泛函：</strong>LDA, GGA, hybrid</p>
                    <p><strong>能带结构计算：</strong>第一性原理</p>
                    <p><strong>费米面预测：</strong>材料设计</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>量子蒙特卡罗</h4>
                <div class="development-content">
                  <p><strong>确定性量子蒙特卡罗：</strong></p>
                  <div class="equation-block">
                    <p>⟨O⟩ = Tr[Oe^(-βH)]/Tr[e^(-βH)]</p>
                    <p>路径积分表示</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>符号问题：</strong>费米子系统挑战</p>
                    <p><strong>辅助场方法：</strong>Hubbard-Stratonovich</p>
                    <p><strong>连续时间算法：</strong>CT-QMC</p>
                  </div>
                </div>
              </div>

              <div class="development-item">
                <h4>机器学习方法</h4>
                <div class="development-content">
                  <p><strong>神经网络量子态：</strong></p>
                  <div class="equation-block">
                    <p>|ψ⟩ = Σ_σ ψ_NN(σ)|σ⟩</p>
                    <p>变分蒙特卡罗</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>费米符号结构：</strong>反对称神经网络</p>
                    <p><strong>相变识别：</strong>无监督学习</p>
                    <p><strong>材料发现：</strong>高通量筛选</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🚀 未来展望</h3>
            <div class="future-challenges">
              <div class="challenge-item theoretical">
                <h4>理论挑战</h4>
                <ul>
                  <li>强关联费米子系统的精确求解</li>
                  <li>非平衡态费米液体理论</li>
                  <li>量子临界现象的统一描述</li>
                  <li>拓扑量子相变的分类</li>
                </ul>
              </div>
              
              <div class="challenge-item technical">
                <h4>技术突破</h4>
                <ul>
                  <li>原子尺度的时空分辨测量</li>
                  <li>量子模拟器的精确控制</li>
                  <li>高温超导机理的直接观测</li>
                  <li>拓扑量子计算的实现</li>
                </ul>
              </div>
              
              <div class="challenge-item application">
                <h4>应用前景</h4>
                <ul>
                  <li>室温超导材料设计</li>
                  <li>拓扑量子器件</li>
                  <li>量子传感与计量</li>
                  <li>新型电子器件</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子统计效应</h2>
        <div class="quantum-effects">
          <div class="effect-item">
            <h3>🚫 泡利阻塞</h3>
            <p>费米子不能占据相同量子态</p>
          </div>
          <div class="effect-item">
            <h3>🌊 德布罗意波长</h3>
            <p>λdB ~ ℏ/√(mkBT) 与粒子间距比较</p>
          </div>
          <div class="effect-item">
            <h3>⚡ 零点运动</h3>
            <p>即使T=0也有巨大的动能</p>
          </div>
          <div class="effect-item">
            <h3>🎯 费米面锐化</h3>
            <p>低温下占据数在费米面处急剧变化</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>理想费米气体形成费米海结构</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>费米能和费米温度是关键能量标度</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>泡利不相容原理导致独特的统计性质</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>为理解金属和简并物质提供基础</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_1',
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
  border-bottom: 3px solid #ffc107;
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
  background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
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
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #856404;
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

.fermi-sea-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
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
  border-left: 4px solid #ffc107;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.physics-insight {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.physics-insight h3 {
  color: #2e7d32;
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
  color: #2e7d32;
  font-weight: bold;
}

.quantum-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.effect-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.effect-item h3 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.experimental-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.experimental-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
  border: 2px solid #e1e8ff;
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.experimental-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 100, 200, 0.1);
  border-color: #4a90e2;
}

.experimental-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.experimental-content {
  margin-top: 1rem;
}

.experimental-content h4 {
  color: #2c5aa0;
  margin: 1.5rem 0 0.5rem 0;
  font-size: 1.1rem;
}

.data-table {
  margin: 1rem 0;
  overflow-x: auto;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.data-table th,
.data-table td {
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
}

.data-table th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  font-weight: 600;
}

.data-table tr:hover {
  background-color: #f5f5f5;
}

.modern-development-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin: 2rem 0;
}

.development-category {
  background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 100%);
  border: 2px solid #e1e8ff;
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.development-category:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 100, 200, 0.1);
}

.development-category h3 {
  color: #2c5aa0;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e1e8ff;
}

.development-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.development-item {
  background: white;
  border: 1px solid #e1e8ff;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.development-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 100, 200, 0.08);
  border-color: #4a90e2;
}

.development-item h4 {
  color: #2c5aa0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.development-content {
  margin-top: 1rem;
}

.future-challenges {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.challenge-item {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.challenge-item.theoretical {
  border-left: 5px solid #ff6b6b;
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
}

.challenge-item.technical {
  border-left: 5px solid #4ecdc4;
  background: linear-gradient(135deg, #f0fffe 0%, #e0fffc 100%);
}

.challenge-item.application {
  border-left: 5px solid #45b7d1;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2ff 100%);
}

.challenge-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.challenge-item h4 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.challenge-item.theoretical h4 {
  color: #d63031;
}

.challenge-item.technical h4 {
  color: #00b894;
}

.challenge-item.application h4 {
  color: #0984e3;
}

.challenge-item ul {
  list-style: none;
  padding: 0;
}

.challenge-item li {
  padding: 0.5rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.challenge-item li:before {
  content: "▶";
  position: absolute;
  left: 0;
  color: #666;
}

.applications {
  margin: 3rem 0;
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
  background: linear-gradient(135deg, #ffc107 0%, #fd7e14 100%);
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
  
  .quantum-effects {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>