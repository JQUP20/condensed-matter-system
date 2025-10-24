<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.3 理想玻色气体与玻色-爱因斯坦凝聚</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">玻色统计</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>玻色-爱因斯坦统计</h2>
        <p class="lead-text">
          玻色子遵循玻色-爱因斯坦统计，允许多个粒子占据同一量子态。
          在足够低的温度下，宏观数量的玻色子会凝聚到基态，形成玻色-爱因斯坦凝聚态，这是量子统计效应的一个壮观体现。
        </p>
      </section>

      <section class="content-section">
        <h2>玻色-爱因斯坦分布</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>分布函数</h3>
            <p>玻色子的占据概率</p>
            <div class="mathematical-content">
              <h4>基本形式：</h4>
              <div class="equation-block">
                <p>n(ε) = 1/(e^((ε-μ)/(kBT)) - 1)</p>
                <p>μ < ε₀ (化学势小于基态能量)</p>
              </div>
              
              <h4>与费米分布比较：</h4>
              <div class="equation-block">
                <p>玻色：分母中是 -1</p>
                <p>费米：分母中是 +1</p>
                <p>导致完全不同的物理性质</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">❄️</div>
            <h3>临界温度</h3>
            <p>玻色-爱因斯坦凝聚的条件</p>
            <div class="mathematical-content">
              <h4>临界温度：</h4>
              <div class="equation-block">
                <p>kBTc = 2πℏ²/(m)(n/ζ(3/2))^(2/3)</p>
                <p>ζ(3/2) ≈ 2.612</p>
              </div>
              
              <h4>德布罗意波长：</h4>
              <div class="equation-block">
                <p>λdB = h/√(2πmkBT)</p>
                <p>T = Tc时：λdB ~ n^(-1/3)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>玻色-爱因斯坦凝聚</h2>
        <div class="bec-section">
          <div class="concept-card">
            <div class="concept-icon">🌟</div>
            <h3>凝聚现象</h3>
            <p>宏观占据基态</p>
            <div class="mathematical-content">
              <h4>T < Tc时：</h4>
              <div class="equation-block">
                <p>N₀ = N[1 - (T/Tc)^(3/2)]</p>
                <p>N₀: 基态粒子数</p>
              </div>
              
              <h4>凝聚分数：</h4>
              <div class="equation-block">
                <p>f₀ = N₀/N = 1 - (T/Tc)^(3/2)</p>
                <p>T → 0时：f₀ → 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>热力学性质</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔥</div>
            <h3>比热</h3>
            <p>温度依赖的热容</p>
            <div class="mathematical-content">
              <h4>T > Tc (正常相)：</h4>
              <div class="equation-block">
                <p>C ∝ T^(3/2)</p>
              </div>
              
              <h4>T < Tc (凝聚相)：</h4>
              <div class="equation-block">
                <p>C ∝ T^(3/2)</p>
                <p>在Tc处有λ型跃变</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>化学势</h3>
            <p>温度的函数</p>
            <div class="mathematical-content">
              <h4>T > Tc：</h4>
              <div class="equation-block">
                <p>μ(T) < 0</p>
                <p>随温度变化</p>
              </div>
              
              <h4>T < Tc：</h4>
              <div class="equation-block">
                <p>μ = 0</p>
                <p>钉扎在基态能量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>玻色-爱因斯坦凝聚的深层理论基础</h2>
        <div class="bec-theory-grid">
          <div class="theory-card">
            <div class="theory-icon">❄️</div>
            <h3>相变的热力学理论</h3>
            <div class="theory-content">
              <h4>临界温度的精确推导：</h4>
              <div class="equation-block">
                <p>N = ∫₀^∞ g(ε)/(e^(β(ε-μ)) - 1) dε</p>
                <p>T_c时：μ = 0, N = N_excited</p>
                <p>k_BT_c = (ℏ²/2m)(N/ζ(3/2))^(2/3)</p>
              </div>
              
              <h4>序参量理论：</h4>
              <div class="physics-insight">
                <p><strong>序参量：</strong>ψ₀ = √(N₀/V) (凝聚体波函数)</p>
                <p><strong>对称性破缺：</strong>U(1)相位对称性自发破缺</p>
                <p><strong>Goldstone模式：</strong>相位涨落的无能隙激发</p>
              </div>
              
              <h4>Landau-Ginzburg理论：</h4>
              <div class="equation-block">
                <p>F = ∫[α|ψ|² + β|ψ|⁴ + γ|∇ψ|²]d³r</p>
                <p>α ∝ (T - T_c), β > 0</p>
                <p>相干长度：ξ = √(γ/|α|)</p>
              </div>
            </div>
          </div>

          <div class="theory-card">
            <div class="theory-icon">🌊</div>
            <h3>Gross-Pitaevskii方程</h3>
            <div class="theory-content">
              <h4>平均场理论：</h4>
              <div class="equation-block">
                <p>iℏ∂ψ/∂t = [-ℏ²∇²/2m + V_ext + g|ψ|²]ψ</p>
                <p>g = 4πℏ²a_s/m (相互作用强度)</p>
                <p>a_s: s波散射长度</p>
              </div>
              
              <h4>Thomas-Fermi近似：</h4>
              <div class="physics-insight">
                <p><strong>化学势：</strong>μ = gn₀ (局域密度近似)</p>
                <p><strong>密度分布：</strong>n(r) = max[0, (μ-V(r))/g]</p>
                <p><strong>Thomas-Fermi半径：</strong>R_TF = √(2μ/mω²)</p>
              </div>
              
              <h4>集体激发模式：</h4>
              <div class="equation-block">
                <p>Bogoliubov谱：E_k = √(ε_k(ε_k + 2gn₀))</p>
                <p>ε_k = ℏ²k²/2m</p>
                <p>声速：c = √(gn₀/m)</p>
              </div>
            </div>
          </div>

          <div class="theory-card">
            <div class="theory-icon">🔬</div>
            <h3>实验实现与观测</h3>
            <div class="theory-content">
              <h4>激光冷却与磁阱：</h4>
              <div class="physics-insight">
                <p><strong>多普勒冷却：</strong>T ~ ℏΓ/2k_B ≈ 100 μK</p>
                <p><strong>偏振梯度冷却：</strong>T ~ ℏ²k²/mk_B ≈ 1 μK</p>
                <p><strong>蒸发冷却：</strong>选择性移除高能原子</p>
              </div>
              
              <h4>典型实验参数：</h4>
              <div class="data-table">
                <table>
                  <tbody>
                  <tr><th>原子</th><th>T_c (nK)</th><th>N₀</th><th>密度 (cm⁻³)</th></tr>
                  <tr><td>⁸⁷Rb</td><td>170</td><td>10⁶</td><td>10¹⁵</td></tr>
                  <tr><td>²³Na</td><td>2000</td><td>10⁷</td><td>10¹⁵</td></tr>
                  <tr><td>⁷Li</td><td>400</td><td>10⁶</td><td>10¹⁴</td></tr>
                  <tr><td>¹H</td><td>50</td><td>10⁹</td><td>10¹⁵</td></tr>
                  </tbody>
                </table>
              </div>
              
              <h4>观测技术：</h4>
              <div class="physics-insight">
                <p><strong>吸收成像：</strong>原位密度分布测量</p>
                <p><strong>飞行时间：</strong>动量分布测量</p>
                <p><strong>相位对比：</strong>相干性测量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展与前沿应用</h2>
        <div class="modern-bec-grid">
          <div class="modern-category">
            <h3>🔬 理论发展</h3>
            <div class="modern-items">
              <div class="modern-item">
                <h4>有限温度理论</h4>
                <div class="modern-content">
                  <p><strong>Hartree-Fock-Bogoliubov理论：</strong></p>
                  <div class="equation-block">
                    <p>包含量子涨落和热涨落</p>
                    <p>准粒子激发的自洽处理</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>量子耗散：</strong>Beliaev阻尼</p>
                    <p><strong>Landau阻尼：</strong>准粒子散射</p>
                    <p><strong>相变动力学：</strong>Kibble-Zurek机制</p>
                  </div>
                </div>
              </div>

              <div class="modern-item">
                <h4>强相互作用BEC</h4>
                <div class="modern-content">
                  <p><strong>Tonks-Girardeau气体：</strong></p>
                  <div class="equation-block">
                    <p>一维强排斥玻色气体</p>
                    <p>费米化：类似自由费米子</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>量子相变：</strong>超流-Mott绝缘体</p>
                    <p><strong>杨-高斯定理：</strong>一维精确解</p>
                  </div>
                </div>
              </div>

              <div class="modern-item">
                <h4>非平衡BEC</h4>
                <div class="modern-content">
                  <p><strong>驱动-耗散系统：</strong></p>
                  <div class="physics-insight">
                    <p><strong>激子极化子：</strong>半导体微腔</p>
                    <p><strong>磁振子BEC：</strong>反铁磁体</p>
                    <p><strong>光子BEC：</strong>染料微腔</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modern-category">
            <h3>🧪 实验前沿</h3>
            <div class="modern-items">
              <div class="modern-item">
                <h4>量子气体显微镜</h4>
                <div class="modern-content">
                  <p><strong>单原子分辨成像：</strong></p>
                  <div class="physics-insight">
                    <p><strong>空间分辨率：</strong>~400 nm</p>
                    <p><strong>检测效率：</strong>>99%</p>
                    <p><strong>实时观测：</strong>量子相变过程</p>
                  </div>
                </div>
              </div>

              <div class="modern-item">
                <h4>人工规范场</h4>
                <div class="modern-content">
                  <p><strong>合成磁场：</strong></p>
                  <div class="equation-block">
                    <p>激光诱导的有效磁场</p>
                    <p>旋转BEC中的涡旋晶格</p>
                  </div>
                  <div class="physics-insight">
                    <p><strong>拓扑态：</strong>Laughlin态的实现</p>
                    <p><strong>自旋-轨道耦合：</strong>人工维度</p>
                  </div>
                </div>
              </div>

              <div class="modern-item">
                <h4>量子模拟</h4>
                <div class="modern-content">
                  <p><strong>可编程量子模拟器：</strong></p>
                  <div class="physics-insight">
                    <p><strong>Hubbard模型：</strong>光晶格中的BEC</p>
                    <p><strong>自旋模型：</strong>磁性相互作用</p>
                    <p><strong>规范理论：</strong>格点规范场</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="modern-category">
            <h3>🚀 应用前景</h3>
            <div class="future-applications">
              <div class="application-item precision">
                <h4>精密测量</h4>
                <ul>
                  <li>原子干涉仪：重力波探测</li>
                  <li>原子钟：时间标准</li>
                  <li>磁力计：地质勘探</li>
                  <li>陀螺仪：惯性导航</li>
                </ul>
              </div>
              
              <div class="application-item quantum">
                <h4>量子技术</h4>
                <ul>
                  <li>量子计算：拓扑量子比特</li>
                  <li>量子通信：纠缠光源</li>
                  <li>量子传感：超越标准量子极限</li>
                  <li>量子存储：原子存储器</li>
                </ul>
              </div>
              
              <div class="application-item materials">
                <h4>新材料</h4>
                <ul>
                  <li>超导材料：高温超导机理</li>
                  <li>拓扑材料：拓扑绝缘体</li>
                  <li>光学材料：非线性光学</li>
                  <li>磁性材料：量子磁体</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="content-section">
        <div class="experimental-section">
          <div class="physics-insight">
            <h3>🧪 冷原子气体BEC</h3>
            <p>1995年首次实现的玻色-爱因斯坦凝聚：</p>
            <ul>
              <li><strong>激光冷却：</strong>将原子冷却到μK量级</li>
              <li><strong>磁阱束缚：</strong>用磁场约束原子</li>
              <li><strong>蒸发冷却：</strong>进一步降低温度</li>
              <li><strong>成像观测：</strong>通过吸收成像观察凝聚体</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>物理应用和现象</h2>
        <div class="example-box">
          <h3>例1：液氦的超流性</h3>
          <p>⁴He的玻色-爱因斯坦凝聚：</p>
          <div class="equation-block">
            <p>Tc ≈ 2.17 K (λ点)</p>
            <p>超流现象：零粘滞流动</p>
            <p>量子涡旋的形成</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：原子气体BEC</h3>
          <p>稀薄原子气体：</p>
          <div class="equation-block">
            <p>Tc ~ 100 nK - 1 μK</p>
            <p>纯净的量子相变</p>
            <p>可控的相互作用强度</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：激子极化子凝聚</h3>
          <p>固体中的玻色凝聚：</p>
          <div class="equation-block">
            <p>半导体微腔中的极化子</p>
            <p>室温下的凝聚现象</p>
            <p>相干光发射</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子相变特征</h2>
        <div class="phase-transition">
          <div class="transition-item">
            <h3>🌡️ 连续相变</h3>
            <p>BEC转变是二级相变，序参量连续变化</p>
          </div>
          <div class="transition-item">
            <h3>🎯 序参量</h3>
            <p>凝聚体波函数Ψ₀ = √N₀ e^(iφ)</p>
          </div>
          <div class="transition-item">
            <h3>🔄 对称性破缺</h3>
            <p>U(1)相位对称性的自发破缺</p>
          </div>
          <div class="transition-item">
            <h3>🌊 长程相干</h3>
            <p>宏观量子相干性的建立</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>玻色-爱因斯坦分布允许多粒子占据同态</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>存在临界温度Tc，低于此温度发生凝聚</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>凝聚体具有宏观量子相干性</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>BEC是量子统计效应的宏观体现</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>在多个物理系统中都有实现</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_3',
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
  border-bottom: 3px solid #6f42c1;
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
  background: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%);
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
  background: linear-gradient(135deg, #e2e3e5 0%, #d6d8db 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #495057;
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

.bec-section {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.experimental-section {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
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
  border-left: 4px solid #6f42c1;
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

.phase-transition {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.transition-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.transition-item h3 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* 理论基础网格样式 */
.theoretical-basis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 25px;
  margin-top: 25px;
}

.basis-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 25px;
  color: white;
  box-shadow: 0 10px 35px rgba(102, 126, 234, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.basis-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 45px rgba(102, 126, 234, 0.4);
}

.basis-icon {
  font-size: 2.8em;
  margin-bottom: 18px;
  display: block;
}

.basis-content h4 {
  margin: 0 0 15px 0;
  font-size: 1.4em;
  font-weight: 600;
}

.basis-content p {
  margin: 0 0 12px 0;
  line-height: 1.7;
  opacity: 0.95;
}

.basis-content .equation {
  background: rgba(255, 255, 255, 0.15);
  padding: 12px;
  border-radius: 8px;
  margin: 10px 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95em;
}

/* 现代发展网格样式 */
.modern-developments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.development-category {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  padding: 20px;
  color: white;
  box-shadow: 0 8px 30px rgba(240, 147, 251, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.development-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(240, 147, 251, 0.4);
}

.development-category h4 {
  margin: 0 0 15px 0;
  font-size: 1.3em;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
}

.development-item {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 12px;
  margin: 10px 0;
}

.development-item h5 {
  margin: 0 0 8px 0;
  font-size: 1.1em;
  font-weight: 500;
}

.development-item p {
  margin: 0;
  line-height: 1.6;
  opacity: 0.9;
  font-size: 0.95em;
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
  background: linear-gradient(135deg, #6f42c1 0%, #5a32a3 100%);
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
  
  .phase-transition {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>