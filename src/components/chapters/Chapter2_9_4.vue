<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.9.4 霍尔效应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">输运现象</span>
        <span class="reading-time">预计阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>霍尔效应概述</h2>
        <p class="lead-text">
          霍尔效应是指当载流子在磁场中运动时，由于洛伦兹力的作用，
          载流子在垂直于电流和磁场的方向上发生偏转，从而在材料两侧产生电压的现象。
          这一效应由Edwin Hall于1879年首次发现，是研究材料载流子性质的重要工具。
          霍尔效应不仅揭示了载流子的类型（电子或空穴）、浓度和迁移率，
          还在现代电子器件中有广泛应用，如霍尔传感器、磁场测量等。
          本章将详细介绍霍尔效应的物理机制、理论描述、实验技术和实际应用。
        </p>
      </section>

      <section class="content-section">
        <h2>经典霍尔效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>基本原理</h3>
            <p>载流子在磁场中的偏转机制</p>
            <div class="mathematical-content">
              <h4>洛伦兹力：</h4>
              <div class="equation-block">
                <p>F = q(E + v × B)</p>
                <p>q: 载流子电荷</p>
                <p>v: 载流子速度</p>
                <p>B: 磁感应强度</p>
              </div>
              
              <h4>霍尔电场：</h4>
              <div class="equation-block">
                <p>E_H = v_d × B</p>
                <p>v_d: 漂移速度</p>
                <p>垂直于电流和磁场</p>
                <p>稳态平衡条件</p>
              </div>
              
              <h4>霍尔电压：</h4>
              <div class="equation-block">
                <p>V_H = E_H × w</p>
                <p>w: 样品宽度</p>
                <p>横向电压</p>
                <p>可测量量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>霍尔系数</h3>
            <p>表征材料霍尔效应强度的参数</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>R_H = E_H/(j × B)</p>
                <p>j: 电流密度</p>
                <p>单位: m³/C</p>
                <p>材料特征参数</p>
              </div>
              
              <h4>简单情况：</h4>
              <div class="equation-block">
                <p>R_H = 1/(nq)</p>
                <p>n: 载流子浓度</p>
                <p>单一载流子类型</p>
                <p>球形费米面</p>
              </div>
              
              <h4>载流子类型：</h4>
              <div class="equation-block">
                <p>R_H > 0: 空穴导电</p>
                <p>R_H < 0: 电子导电</p>
                <p>符号判断</p>
                <p>载流子识别</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>霍尔迁移率</h3>
            <p>结合电导率的载流子迁移率</p>
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>μ_H = |R_H|σ</p>
                <p>σ: 电导率</p>
                <p>霍尔迁移率</p>
                <p>实验可测</p>
              </div>
              
              <h4>与漂移迁移率关系：</h4>
              <div class="equation-block">
                <p>μ_H = r_H μ_d</p>
                <p>r_H: 霍尔因子</p>
                <p>μ_d: 漂移迁移率</p>
                <p>散射机制相关</p>
              </div>
              
              <h4>霍尔因子：</h4>
              <div class="equation-block">
                <p>r_H = ⟨τ²⟩/⟨τ⟩²</p>
                <p>弛豫时间平均</p>
                <p>散射各向异性</p>
                <p>通常 ≈ 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多载流子霍尔效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡⚡</div>
            <h3>双载流子模型</h3>
            <p>电子和空穴共存的情况</p>
            <div class="mathematical-content">
              <h4>电导率：</h4>
              <div class="equation-block">
                <p>σ = σ_e + σ_h</p>
                <p>σ_e = n_e e μ_e</p>
                <p>σ_h = n_h e μ_h</p>
                <p>分别贡献</p>
              </div>
              
              <h4>霍尔系数：</h4>
              <div class="equation-block">
                <p>R_H = (σ_h²/n_h e - σ_e²/n_e e)/(σ_e + σ_h)²</p>
                <p>复杂表达式</p>
                <p>可能变号</p>
                <p>温度依赖</p>
              </div>
              
              <h4>特殊情况：</h4>
              <div class="equation-block">
                <p>μ_e = μ_h: R_H = (n_h - n_e)/(e(n_h + n_e)²)</p>
                <p>补偿半导体</p>
                <p>n_h ≈ n_e: R_H → 0</p>
                <p>霍尔效应消失</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>多能谷效应</h3>
            <p>复杂能带结构的影响</p>
            <div class="mathematical-content">
              <h4>能谷简并：</h4>
              <div class="equation-block">
                <p>多个等价能谷</p>
                <p>各向异性质量</p>
                <p>散射各向异性</p>
                <p>霍尔因子修正</p>
              </div>
              
              <h4>有效霍尔系数：</h4>
              <div class="equation-block">
                <p>考虑能谷权重</p>
                <p>质量张量平均</p>
                <p>散射时间平均</p>
                <p>几何因子</p>
              </div>
              
              <h4>温度依赖：</h4>
              <div class="equation-block">
                <p>能谷占据变化</p>
                <p>散射机制转换</p>
                <p>载流子激发</p>
                <p>复杂行为</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>磁阻效应</h3>
            <p>磁场对电阻率的影响</p>
            <div class="mathematical-content">
              <h4>磁阻定义：</h4>
              <div class="equation-block">
                <p>MR = [ρ(B) - ρ(0)]/ρ(0)</p>
                <p>相对变化</p>
                <p>磁场依赖</p>
                <p>几何效应</p>
              </div>
              
              <h4>普通磁阻：</h4>
              <div class="equation-block">
                <p>MR ∝ (μB)²</p>
                <p>弱磁场</p>
                <p>抛物线依赖</p>
                <p>载流子偏转</p>
              </div>
              
              <h4>几何磁阻：</h4>
              <div class="equation-block">
                <p>样品几何形状</p>
                <p>电流分布</p>
                <p>边界效应</p>
                <p>van der Pauw方法</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子霍尔效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>整数量子霍尔效应</h3>
            <p>强磁场下的量子化现象</p>
            <div class="mathematical-content">
              <h4>朗道能级：</h4>
              <div class="equation-block">
                <p>E_n = ℏω_c(n + 1/2)</p>
                <p>ω_c = eB/m*</p>
                <p>回旋频率</p>
                <p>能级量子化</p>
              </div>
              
              <h4>霍尔电导：</h4>
              <div class="equation-block">
                <p>σ_xy = νe²/h</p>
                <p>ν: 填充因子</p>
                <p>e²/h: 电导量子</p>
                <p>精确量子化</p>
              </div>
              
              <h4>纵向电阻：</h4>
              <div class="equation-block">
                <p>ρ_xx → 0</p>
                <p>无耗散输运</p>
                <p>局域化态</p>
                <p>拓扑保护</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌟</div>
            <h3>分数量子霍尔效应</h3>
            <p>电子关联效应的量子化</p>
            <div class="mathematical-content">
              <h4>分数填充：</h4>
              <div class="equation-block">
                <p>ν = p/q</p>
                <p>p, q: 整数</p>
                <p>主要分数: 1/3, 2/5, ...</p>
                <p>Laughlin态</p>
              </div>
              
              <h4>关联液体：</h4>
              <div class="equation-block">
                <p>强电子关联</p>
                <p>不可压缩态</p>
                <p>能隙激发</p>
                <p>拓扑序</p>
              </div>
              
              <h4>准粒子激发：</h4>
              <div class="equation-block">
                <p>分数电荷</p>
                <p>分数统计</p>
                <p>任意子</p>
                <p>拓扑量子计算</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>量子自旋霍尔效应</h3>
            <p>自旋轨道耦合的拓扑效应</p>
            <div class="mathematical-content">
              <h4>拓扑绝缘体：</h4>
              <div class="equation-block">
                <p>体能隙</p>
                <p>边界态</p>
                <p>自旋极化</p>
                <p>时间反演对称</p>
              </div>
              
              <h4>自旋霍尔电导：</h4>
              <div class="equation-block">
                <p>σ_s = e/2π</p>
                <p>自旋电导量子</p>
                <p>拓扑不变量</p>
                <p>Z₂分类</p>
              </div>
              
              <h4>边界输运：</h4>
              <div class="equation-block">
                <p>螺旋边界态</p>
                <p>自旋动量锁定</p>
                <p>背散射抑制</p>
                <p>拓扑保护</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>霍尔效应的实验技术</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>测量方法</h3>
            <p>霍尔效应的实验测量技术</p>
            <div class="mathematical-content">
              <h4>van der Pauw方法：</h4>
              <div class="equation-block">
                <p>任意形状样品</p>
                <p>四点测量</p>
                <p>接触电阻消除</p>
                <p>电阻率和霍尔系数</p>
              </div>
              
              <h4>霍尔棒方法：</h4>
              <div class="equation-block">
                <p>标准几何形状</p>
                <p>长条形样品</p>
                <p>简单分析</p>
                <p>高精度测量</p>
              </div>
              
              <h4>交流测量：</h4>
              <div class="equation-block">
                <p>锁相放大</p>
                <p>噪声抑制</p>
                <p>温度漂移消除</p>
                <p>高灵敏度</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>变温测量</h3>
            <p>温度依赖性的研究</p>
            <div class="mathematical-content">
              <h4>载流子激发：</h4>
              <div class="equation-block">
                <p>本征激发</p>
                <p>杂质电离</p>
                <p>载流子浓度变化</p>
                <p>活化能测定</p>
              </div>
              
              <h4>散射机制：</h4>
              <div class="equation-block">
                <p>迁移率温度依赖</p>
                <p>主导机制转换</p>
                <p>声子散射</p>
                <p>杂质散射</p>
              </div>
              
              <h4>相变研究：</h4>
              <div class="equation-block">
                <p>金属-绝缘体转变</p>
                <p>磁相变</p>
                <p>结构相变</p>
                <p>载流子性质变化</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>强磁场测量</h3>
            <p>高磁场下的霍尔效应研究</p>
            <div class="mathematical-content">
              <h4>量子振荡：</h4>
              <div class="equation-block">
                <p>Shubnikov-de Haas效应</p>
                <p>费米面信息</p>
                <p>载流子有效质量</p>
                <p>散射时间</p>
              </div>
              
              <h4>量子霍尔态：</h4>
              <div class="equation-block">
                <p>霍尔平台</p>
                <p>电阻率零点</p>
                <p>拓扑相变</p>
                <p>精密测量</p>
              </div>
              
              <h4>极端条件：</h4>
              <div class="equation-block">
                <p>脉冲强磁场</p>
                <p>稳态强磁场</p>
                <p>低温环境</p>
                <p>高压条件</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>霍尔效应的应用</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔍 材料表征</h3>
            <div class="feature-content">
              <h4>载流子性质：</h4>
              <ul>
                <li>载流子类型判断</li>
                <li>载流子浓度测定</li>
                <li>迁移率计算</li>
                <li>散射机制分析</li>
              </ul>
              
              <h4>能带结构：</h4>
              <ul>
                <li>有效质量测定</li>
                <li>能带参数</li>
                <li>费米面形状</li>
                <li>能隙测量</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>📱 电子器件</h3>
            <div class="feature-content">
              <h4>霍尔传感器：</h4>
              <ul>
                <li>磁场测量</li>
                <li>位置检测</li>
                <li>电流测量</li>
                <li>角度传感</li>
              </ul>
              
              <h4>器件应用：</h4>
              <ul>
                <li>磁阻存储器</li>
                <li>自旋电子器件</li>
                <li>量子器件</li>
                <li>拓扑器件</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔬 科学研究</h3>
            <div class="feature-content">
              <h4>基础物理：</h4>
              <ul>
                <li>量子霍尔效应</li>
                <li>拓扑物态</li>
                <li>强关联系统</li>
                <li>量子临界现象</li>
              </ul>
              
              <h4>新材料研究：</h4>
              <ul>
                <li>二维材料</li>
                <li>拓扑绝缘体</li>
                <li>Weyl半金属</li>
                <li>超导体</li>
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
              <h4>经典霍尔效应</h4>
              <p>基于洛伦兹力的载流子偏转，霍尔系数反映载流子类型和浓度，是材料表征的重要工具。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>多载流子效应</h4>
              <p>复杂材料中电子和空穴共存，能带结构和散射机制影响霍尔效应的复杂行为。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>量子霍尔效应</h4>
              <p>强磁场下的量子化现象，包括整数和分数量子霍尔效应，揭示了拓扑物态的本质。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>实验技术</h4>
              <p>van der Pauw方法、变温测量和强磁场技术为霍尔效应研究提供了完整的实验手段。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>应用前景</h4>
              <p>从材料表征到电子器件，从基础研究到工业应用，霍尔效应具有广泛的应用价值。</p>
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