<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.9.3 散射机制</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">物理机制</span>
        <span class="reading-time">预计阅读时间: 50分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>散射机制概述</h2>
        <p class="lead-text">
          散射是载流子在固体中运动时与各种缺陷、激发和其他载流子相互作用的过程，
          是决定材料输运性质的关键因素。不同的散射机制具有不同的温度依赖性、
          能量依赖性和角度依赖性，它们共同决定了材料的电导率、迁移率、
          热导率等输运参数。理解各种散射机制的物理本质和数学描述，
          对于设计和优化电子器件、热电材料等具有重要意义。
          本章将系统介绍固体中的主要散射机制及其对输运性质的影响。
        </p>
      </section>

      <section class="content-section">
        <h2>杂质散射</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>电离杂质散射</h3>
            <p>带电杂质对载流子的库仑散射</p>
            <div class="mathematical-content">
              <h4>散射势：</h4>
              <div class="equation-block">
                <p>V(r) = Ze²/(4πεr)</p>
                <p>Z: 杂质电荷数</p>
                <p>ε: 介电常数</p>
                <p>库仑势</p>
              </div>
              
              <h4>散射截面：</h4>
              <div class="equation-block">
                <p>σ(θ) = (Ze²/4πε)²/(2E sin⁴(θ/2))</p>
                <p>θ: 散射角</p>
                <p>E: 载流子能量</p>
                <p>Rutherford散射</p>
              </div>
              
              <h4>弛豫时间：</h4>
              <div class="equation-block">
                <p>1/τ ∝ N_i Z²/E^(3/2)</p>
                <p>N_i: 杂质浓度</p>
                <p>能量依赖: E^(-3/2)</p>
                <p>温度无关</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>中性杂质散射</h3>
            <p>中性杂质原子的短程散射</p>
            <div class="mathematical-content">
              <h4>散射机制：</h4>
              <div class="equation-block">
                <p>短程势散射</p>
                <p>原子尺度相互作用</p>
                <p>s波散射为主</p>
                <p>各向同性</p>
              </div>
              
              <h4>散射截面：</h4>
              <div class="equation-block">
                <p>σ = 4πa²</p>
                <p>a: 散射长度</p>
                <p>能量无关</p>
                <p>常数截面</p>
              </div>
              
              <h4>弛豫时间：</h4>
              <div class="equation-block">
                <p>1/τ ∝ N_n</p>
                <p>N_n: 中性杂质浓度</p>
                <p>能量无关</p>
                <p>温度无关</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>合金散射</h3>
            <p>合金中成分起伏的散射效应</p>
            <div class="mathematical-content">
              <h4>散射起源：</h4>
              <div class="equation-block">
                <p>质量差异</p>
                <p>尺寸差异</p>
                <p>电子结构差异</p>
                <p>随机分布</p>
              </div>
              
              <h4>散射强度：</h4>
              <div class="equation-block">
                <p>∝ x(1-x)(ΔV)²</p>
                <p>x: 合金成分</p>
                <p>ΔV: 势差</p>
                <p>最大值在x=0.5</p>
              </div>
              
              <h4>温度依赖：</h4>
              <div class="equation-block">
                <p>弱温度依赖</p>
                <p>主要在低温</p>
                <p>残余电阻</p>
                <p>Matthiessen定则</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>声子散射</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎵</div>
            <h3>声学声子散射</h3>
            <p>长波长声学声子的散射</p>
            <div class="mathematical-content">
              <h4>形变势耦合：</h4>
              <div class="equation-block">
                <p>H_ep = D_a ∇·u</p>
                <p>D_a: 声学形变势</p>
                <p>u: 位移场</p>
                <p>体积变化</p>
              </div>
              
              <h4>散射率：</h4>
              <div class="equation-block">
                <p>1/τ ∝ D_a² kT/ρv_s²</p>
                <p>ρ: 密度</p>
                <p>v_s: 声速</p>
                <p>线性温度依赖</p>
              </div>
              
              <h4>迁移率：</h4>
              <div class="equation-block">
                <p>μ ∝ T^(-3/2)</p>
                <p>非极性半导体</p>
                <p>高温极限</p>
                <p>主导机制</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔊</div>
            <h3>光学声子散射</h3>
            <p>光学声子的强散射效应</p>
            <div class="mathematical-content">
              <h4>极性耦合：</h4>
              <div class="equation-block">
                <p>Fröhlich相互作用</p>
                <p>长程库仑势</p>
                <p>LO声子主导</p>
                <p>强耦合</p>
              </div>
              
              <h4>散射率：</h4>
              <div class="equation-block">
                <p>1/τ ∝ α(n_LO + 1/2 ± 1/2)</p>
                <p>α: 耦合常数</p>
                <p>n_LO: 声子占据数</p>
                <p>±: 发射/吸收</p>
              </div>
              
              <h4>温度依赖：</h4>
              <div class="equation-block">
                <p>高温: μ ∝ T^(-3/2)</p>
                <p>低温: 指数抑制</p>
                <p>阈值行为</p>
                <p>ℏω_LO ≈ kT</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>声子-声子散射</h3>
            <p>声子之间的非线性相互作用</p>
            <div class="mathematical-content">
              <h4>散射过程：</h4>
              <div class="equation-block">
                <p>三声子过程</p>
                <p>四声子过程</p>
                <p>正常过程(N)</p>
                <p>倒逆过程(U)</p>
              </div>
              
              <h4>选择定则：</h4>
              <div class="equation-block">
                <p>能量守恒</p>
                <p>准动量守恒</p>
                <p>ω₁ + ω₂ = ω₃</p>
                <p>q₁ + q₂ = q₃ + G</p>
              </div>
              
              <h4>热导率：</h4>
              <div class="equation-block">
                <p>κ ∝ T^(-1)</p>
                <p>高温极限</p>
                <p>Umklapp过程</p>
                <p>热阻主因</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>界面和缺陷散射</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🏗️</div>
            <h3>界面散射</h3>
            <p>表面和界面的散射效应</p>
            <div class="mathematical-content">
              <h4>散射类型：</h4>
              <div class="equation-block">
                <p>镜面反射</p>
                <p>漫散射</p>
                <p>部分镜面</p>
                <p>表面粗糙度</p>
              </div>
              
              <h4>尺寸效应：</h4>
              <div class="equation-block">
                <p>λ ≫ d: 强界面散射</p>
                <p>λ ≪ d: 体散射主导</p>
                <p>d: 薄膜厚度</p>
                <p>λ: 平均自由程</p>
              </div>
              
              <h4>Fuchs-Sondheimer理论：</h4>
              <div class="equation-block">
                <p>薄膜电导率</p>
                <p>厚度依赖</p>
                <p>镜面参数p</p>
                <p>尺寸效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔗</div>
            <h3>位错散射</h3>
            <p>晶体位错的散射机制</p>
            <div class="mathematical-content">
              <h4>位错类型：</h4>
              <div class="equation-block">
                <p>刃位错</p>
                <p>螺位错</p>
                <p>混合位错</p>
                <p>位错网络</p>
              </div>
              
              <h4>散射势：</h4>
              <div class="equation-block">
                <p>应变场散射</p>
                <p>电荷散射</p>
                <p>长程相互作用</p>
                <p>各向异性</p>
              </div>
              
              <h4>散射强度：</h4>
              <div class="equation-block">
                <p>∝ 位错密度</p>
                <p>对数发散</p>
                <p>截止参数</p>
                <p>温度弱依赖</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🕳️</div>
            <h3>点缺陷散射</h3>
            <p>空位、间隙原子等点缺陷</p>
            <div class="mathematical-content">
              <h4>缺陷类型：</h4>
              <div class="equation-block">
                <p>空位</p>
                <p>间隙原子</p>
                <p>反位缺陷</p>
                <p>复合缺陷</p>
              </div>
              
              <h4>散射机制：</h4>
              <div class="equation-block">
                <p>质量差散射</p>
                <p>应变场散射</p>
                <p>电荷散射</p>
                <p>短程势</p>
              </div>
              
              <h4>温度效应：</h4>
              <div class="equation-block">
                <p>缺陷浓度变化</p>
                <p>热激活产生</p>
                <p>迁移和复合</p>
                <p>动态平衡</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>载流子-载流子散射</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡⚡</div>
            <h3>电子-电子散射</h3>
            <p>电子间的库仑相互作用</p>
            <div class="mathematical-content">
              <h4>散射过程：</h4>
              <div class="equation-block">
                <p>库仑相互作用</p>
                <p>动量守恒</p>
                <p>能量守恒</p>
                <p>Pauli阻塞</p>
              </div>
              
              <h4>散射率：</h4>
              <div class="equation-block">
                <p>1/τ ∝ T²</p>
                <p>费米液体理论</p>
                <p>相空间限制</p>
                <p>屏蔽效应</p>
              </div>
              
              <h4>输运影响：</h4>
              <div class="equation-block">
                <p>动量守恒散射</p>
                <p>电阻率无贡献</p>
                <p>热导率有贡献</p>
                <p>粘滞效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>电子-空穴散射</h3>
            <p>电子和空穴间的散射</p>
            <div class="mathematical-content">
              <h4>散射特点：</h4>
              <div class="equation-block">
                <p>异号载流子</p>
                <p>强库仑吸引</p>
                <p>激子形成</p>
                <p>复合过程</p>
              </div>
              
              <h4>双极输运：</h4>
              <div class="equation-block">
                <p>电子-空穴对</p>
                <p>双极扩散</p>
                <p>复合电流</p>
                <p>载流子寿命</p>
              </div>
              
              <h4>温度依赖：</h4>
              <div class="equation-block">
                <p>载流子浓度</p>
                <p>本征激发</p>
                <p>复合机制</p>
                <p>非平衡态</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>等离子体效应</h3>
            <p>集体激发的散射机制</p>
            <div class="mathematical-content">
              <h4>等离子体振荡：</h4>
              <div class="equation-block">
                <p>ω_p = √(ne²/ε₀m*)</p>
                <p>集体模式</p>
                <p>长程关联</p>
                <p>屏蔽长度</p>
              </div>
              
              <h4>散射过程：</h4>
              <div class="equation-block">
                <p>等离子体子发射</p>
                <p>等离子体子吸收</p>
                <p>Landau阻尼</p>
                <p>动力学屏蔽</p>
              </div>
              
              <h4>高密度效应：</h4>
              <div class="equation-block">
                <p>强耦合等离子体</p>
                <p>关联效应</p>
                <p>液体结构</p>
                <p>Wigner晶体</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>散射机制的组合效应</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>📊 Matthiessen定则</h3>
            <div class="feature-content">
              <h4>基本原理：</h4>
              <ul>
                <li>独立散射假设</li>
                <li>散射率相加</li>
                <li>1/τ_total = Σ1/τ_i</li>
                <li>并联电阻模型</li>
              </ul>
              
              <h4>适用条件：</h4>
              <ul>
                <li>弱散射极限</li>
                <li>散射机制独立</li>
                <li>各向同性散射</li>
                <li>弹性散射</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🌡️ 温度依赖性</h3>
            <div class="feature-content">
              <h4>不同机制：</h4>
              <ul>
                <li>杂质散射: T⁰</li>
                <li>声学声子: T</li>
                <li>光学声子: 复杂</li>
                <li>载流子散射: T²</li>
              </ul>
              
              <h4>主导机制转换：</h4>
              <ul>
                <li>低温: 杂质散射</li>
                <li>中温: 声学声子</li>
                <li>高温: 光学声子</li>
                <li>极高温: 载流子散射</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>⚡ 能量依赖性</h3>
            <div class="feature-content">
              <h4>散射率能量依赖：</h4>
              <ul>
                <li>杂质散射: E^(-3/2)</li>
                <li>声学声子: E^(-1/2)</li>
                <li>光学声子: 阈值</li>
                <li>界面散射: 弱依赖</li>
              </ul>
              
              <h4>输运系数：</h4>
              <ul>
                <li>能量平均</li>
                <li>权重函数</li>
                <li>费米分布导数</li>
                <li>温度展宽</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- 本章要点总结 -->
      <section class="summary">
        <h2>本章要点总结</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <div class="point-content">
              <h4>杂质散射</h4>
              <p>包括电离杂质、中性杂质和合金散射，主要在低温下起主导作用，具有不同的能量和温度依赖性。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>声子散射</h4>
              <p>声学和光学声子散射是高温下的主要机制，决定了材料的本征输运性质和温度依赖性。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>界面缺陷</h4>
              <p>界面、位错和点缺陷散射在纳米材料和薄膜中特别重要，影响尺寸效应和材料性能。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>载流子散射</h4>
              <p>载流子间相互作用在高载流子密度下变得重要，影响输运性质和集体激发。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>组合效应</h4>
              <p>Matthiessen定则描述多种散射机制的组合，不同温度下主导机制的转换决定材料性质。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.chapter-tag {
  background: #3182ce;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.reading-time {
  color: #718096;
  font-size: 0.875rem;
}

.introduction {
  margin-bottom: 3rem;
}

.introduction h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.concept-card > p {
  color: #4a5568;
  margin-bottom: 1.5rem;
}

.mathematical-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1.5rem 0 0.5rem 0;
}

.equation-block {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  font-size: 0.9rem;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.feature-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.feature-content ul {
  list-style: none;
  padding: 0;
}

.feature-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.feature-content li:before {
  content: "•";
  color: #3182ce;
  font-weight: bold;
  position: absolute;
  left: 0;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.point-content h4 {
  margin: 0 0 0.5rem 0;
  font-weight: 600;
}

.point-content p {
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
  
  .concept-grid, .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>