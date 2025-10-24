<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.9.6 量子输运</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子现象</span>
        <span class="reading-time">预计阅读时间: 55分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>量子输运概述</h2>
        <p class="lead-text">
          量子输运是指在量子尺度下载流子的输运行为，
          其中量子力学效应如波动性、干涉、隧穿等起主导作用。
          当系统尺寸与载流子的德布罗意波长相当时，
          经典的粒子图像不再适用，必须考虑载流子的波动性质。
          量子输运现象包括量子干涉、弱局域化、量子霍尔效应、
          库仑阻塞、量子点输运等，这些现象不仅丰富了我们对固体物理的理解，
          也为量子器件的发展奠定了基础。随着纳米技术的进步，
          量子输运已成为现代凝聚态物理和纳米电子学的核心内容。
          本章将系统介绍量子输运的基本概念、理论框架和重要现象。
        </p>
      </section>

      <section class="content-section">
        <h2>量子输运基础</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>波动性与相干性</h3>
            <p>载流子的量子力学本质</p>
            <div class="mathematical-content">
              <h4>德布罗意波长：</h4>
              <div class="equation-block">
                <p>λ = h/p = h/√(2m*E)</p>
                <p>h: 普朗克常数</p>
                <p>p: 动量</p>
                <p>m*: 有效质量</p>
              </div>
              
              <h4>相干长度：</h4>
              <div class="equation-block">
                <p>L_φ = √(Dτ_φ)</p>
                <p>D: 扩散系数</p>
                <p>τ_φ: 相位弛豫时间</p>
                <p>相干性保持距离</p>
              </div>
              
              <h4>量子尺寸条件：</h4>
              <div class="equation-block">
                <p>L ≲ L_φ: 相干输运</p>
                <p>L ≫ L_φ: 非相干输运</p>
                <p>L: 系统尺寸</p>
                <p>输运机制转换</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>量子干涉</h3>
            <p>载流子波函数的干涉效应</p>
            <div class="mathematical-content">
              <h4>干涉条件：</h4>
              <div class="equation-block">
                <p>相位差Δφ = ∫k·dl</p>
                <p>路径积分</p>
                <p>波矢k</p>
                <p>几何相位</p>
              </div>
              
              <h4>Aharonov-Bohm效应：</h4>
              <div class="equation-block">
                <p>Δφ = eΦ/ℏ</p>
                <p>Φ: 磁通量</p>
                <p>磁场中干涉</p>
                <p>拓扑相位</p>
              </div>
              
              <h4>电导振荡：</h4>
              <div class="equation-block">
                <p>G(B) = G₀[1 + A cos(2πΦ/Φ₀)]</p>
                <p>Φ₀ = h/e: 磁通量子</p>
                <p>周期性振荡</p>
                <p>量子干涉证据</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>量子限域</h3>
            <p>低维系统中的量子效应</p>
            <div class="mathematical-content">
              <h4>维度分类：</h4>
              <div class="equation-block">
                <p>3D: 体材料</p>
                <p>2D: 量子阱</p>
                <p>1D: 量子线</p>
                <p>0D: 量子点</p>
              </div>
              
              <h4>态密度：</h4>
              <div class="equation-block">
                <p>3D: g(E) ∝ E^(1/2)</p>
                <p>2D: g(E) = 常数</p>
                <p>1D: g(E) ∝ E^(-1/2)</p>
                <p>0D: δ函数</p>
              </div>
              
              <h4>输运特性：</h4>
              <div class="equation-block">
                <p>子带结构</p>
                <p>量子化电导</p>
                <p>库仑阻塞</p>
                <p>单电子效应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>弱局域化与强局域化</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>弱局域化</h3>
            <p>量子干涉导致的电导修正</p>
            <div class="mathematical-content">
              <h4>物理机制：</h4>
              <div class="equation-block">
                <p>时间反演对称</p>
                <p>闭合路径干涉</p>
                <p>相长干涉</p>
                <p>背散射增强</p>
              </div>
              
              <h4>电导修正：</h4>
              <div class="equation-block">
                <p>Δσ = -e²/2π²ℏ ∫dE(-∂f/∂E)ln(L_φ/l)</p>
                <p>负修正</p>
                <p>对数依赖</p>
                <p>温度相关</p>
              </div>
              
              <h4>磁场效应：</h4>
              <div class="equation-block">
                <p>磁场破坏时间反演</p>
                <p>正磁阻</p>
                <p>弱局域化抑制</p>
                <p>特征磁场尺度</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔒</div>
            <h3>强局域化</h3>
            <p>Anderson局域化现象</p>
            <div class="mathematical-content">
              <h4>Anderson模型：</h4>
              <div class="equation-block">
                <p>H = Σᵢεᵢ|i⟩⟨i| + Σᵢⱼtᵢⱼ|i⟩⟨j|</p>
                <p>εᵢ: 随机位点能量</p>
                <p>tᵢⱼ: 跃迁矩阵元</p>
                <p>无序势</p>
              </div>
              
              <h4>局域化长度：</h4>
              <div class="equation-block">
                <p>ξ = ℏ²/m*W²τ</p>
                <p>W: 无序强度</p>
                <p>τ: 散射时间</p>
                <p>指数衰减</p>
              </div>
              
              <h4>标度理论：</h4>
              <div class="equation-block">
                <p>β(g) = d ln g/d ln L</p>
                <p>g: 无量纲电导</p>
                <p>标度函数</p>
                <p>相变临界点</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>金属-绝缘体转变</h3>
            <p>量子相变现象</p>
            <div class="mathematical-content">
              <h4>Mott判据：</h4>
              <div class="equation-block">
                <p>n^(1/3)a_B ≈ 0.25</p>
                <p>n: 载流子密度</p>
                <p>a_B: 玻尔半径</p>
                <p>临界密度</p>
              </div>
              
              <h4>标度行为：</h4>
              <div class="equation-block">
                <p>σ(T) ∝ (T/T₀)^p</p>
                <p>临界指数p</p>
                <p>普适性</p>
                <p>量子临界</p>
              </div>
              
              <h4>实验观测：</h4>
              <div class="equation-block">
                <p>电导率跳跃</p>
                <p>激活行为</p>
                <p>变程跳跃</p>
                <p>库仑能隙</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>介观输运现象</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎲</div>
            <h3>通用电导涨落</h3>
            <p>介观系统的电导统计性质</p>
            <div class="mathematical-content">
              <h4>涨落幅度：</h4>
              <div class="equation-block">
                <p>⟨δG²⟩^(1/2) ≈ e²/h</p>
                <p>普适值</p>
                <p>与系统细节无关</p>
                <p>量子干涉起源</p>
              </div>
              
              <h4>相关函数：</h4>
              <div class="equation-block">
                <p>C(ΔB) = ⟨δG(B)δG(B+ΔB)⟩</p>
                <p>磁场关联</p>
                <p>相关磁场</p>
                <p>系统尺寸相关</p>
              </div>
              
              <h4>统计分布：</h4>
              <div class="equation-block">
                <p>高斯分布</p>
                <p>随机矩阵理论</p>
                <p>对称性分类</p>
                <p>Dyson指数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>Aharonov-Bohm振荡</h3>
            <p>磁通量子化的宏观表现</p>
            <div class="mathematical-content">
              <h4>环形几何：</h4>
              <div class="equation-block">
                <p>闭合路径</p>
                <p>磁通穿过</p>
                <p>几何相位</p>
                <p>拓扑效应</p>
              </div>
              
              <h4>振荡周期：</h4>
              <div class="equation-block">
                <p>ΔΦ = Φ₀ = h/e</p>
                <p>磁通量子</p>
                <p>基本周期</p>
                <p>精确量子化</p>
              </div>
              
              <h4>可见度：</h4>
              <div class="equation-block">
                <p>V = (G_max - G_min)/(G_max + G_min)</p>
                <p>相干性度量</p>
                <p>温度依赖</p>
                <p>退相干效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>量子化电导</h3>
            <p>一维系统的电导量子化</p>
            <div class="mathematical-content">
              <h4>Landauer公式：</h4>
              <div class="equation-block">
                <p>G = (2e²/h)T</p>
                <p>T: 透射系数</p>
                <p>2: 自旋简并</p>
                <p>基本电导量子</p>
              </div>
              
              <h4>量子点接触：</h4>
              <div class="equation-block">
                <p>G = (2e²/h)N</p>
                <p>N: 开放通道数</p>
                <p>阶梯状电导</p>
                <p>子带占据</p>
              </div>
              
              <h4>实验观测：</h4>
              <div class="equation-block">
                <p>电导平台</p>
                <p>精确量子化</p>
                <p>温度稳定</p>
                <p>普适行为</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子点输运</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚫</div>
            <h3>库仑阻塞</h3>
            <p>单电子充电效应</p>
            <div class="mathematical-content">
              <h4>充电能：</h4>
              <div class="equation-block">
                <p>E_C = e²/2C</p>
                <p>C: 总电容</p>
                <p>库仑相互作用</p>
                <p>能量代价</p>
              </div>
              
              <h4>阻塞条件：</h4>
              <div class="equation-block">
                <p>E_C ≫ kT</p>
                <p>E_C ≫ Γ</p>
                <p>Γ: 能级宽度</p>
                <p>单电子区域</p>
              </div>
              
              <h4>库仑振荡：</h4>
              <div class="equation-block">
                <p>周期性电导峰</p>
                <p>门电压调控</p>
                <p>电子数量子化</p>
                <p>充电态转换</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">💎</div>
            <h3>Kondo效应</h3>
            <p>磁性杂质的量子多体效应</p>
            <div class="mathematical-content">
              <h4>Kondo哈密顿量：</h4>
              <div class="equation-block">
                <p>H_K = J S·s</p>
                <p>J: 交换耦合</p>
                <p>S: 杂质自旋</p>
                <p>s: 传导电子自旋</p>
              </div>
              
              <h4>Kondo温度：</h4>
              <div class="equation-block">
                <p>T_K = √(JΓ/2π) exp(-1/Jρ)</p>
                <p>ρ: 态密度</p>
                <p>特征能量尺度</p>
                <p>指数小参数</p>
              </div>
              
              <h4>零偏压异常：</h4>
              <div class="equation-block">
                <p>T < T_K: G → 2e²/h</p>
                <p>完美透射</p>
                <p>共振隧穿</p>
                <p>多体关联</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌟</div>
            <h3>量子点分子</h3>
            <p>耦合量子点系统</p>
            <div class="mathematical-content">
              <h4>双量子点：</h4>
              <div class="equation-block">
                <p>分子轨道</p>
                <p>成键/反键态</p>
                <p>能级杂化</p>
                <p>隧穿耦合</p>
              </div>
              
              <h4>输运特性：</h4>
              <div class="equation-block">
                <p>Fano共振</p>
                <p>反共振</p>
                <p>相干振荡</p>
                <p>量子干涉</p>
              </div>
              
              <h4>自旋效应：</h4>
              <div class="equation-block">
                <p>自旋阻塞</p>
                <p>三重态-单重态</p>
                <p>自旋量子比特</p>
                <p>纠缠态</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子输运的应用</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🔬 基础研究</h3>
            <div class="feature-content">
              <h4>物理现象研究：</h4>
              <ul>
                <li>量子相变</li>
                <li>多体局域化</li>
                <li>拓扑物态</li>
                <li>量子临界现象</li>
              </ul>
              
              <h4>理论验证：</h4>
              <ul>
                <li>Anderson局域化</li>
                <li>Kondo效应</li>
                <li>分数统计</li>
                <li>量子霍尔效应</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>💻 量子器件</h3>
            <div class="feature-content">
              <h4>量子比特：</h4>
              <ul>
                <li>电荷量子比特</li>
                <li>自旋量子比特</li>
                <li>磁通量子比特</li>
                <li>拓扑量子比特</li>
              </ul>
              
              <h4>量子器件：</h4>
              <ul>
                <li>单电子晶体管</li>
                <li>量子点激光器</li>
                <li>自旋电子器件</li>
                <li>量子传感器</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔮 未来技术</h3>
            <div class="feature-content">
              <h4>量子计算：</h4>
              <ul>
                <li>量子门操作</li>
                <li>量子纠错</li>
                <li>量子算法</li>
                <li>容错量子计算</li>
              </ul>
              
              <h4>量子通信：</h4>
              <ul>
                <li>量子密钥分发</li>
                <li>量子中继器</li>
                <li>量子网络</li>
                <li>量子互联网</li>
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
              <h4>量子相干性</h4>
              <p>载流子的波动性和相干性是量子输运的基础，决定了系统的输运行为和量子效应的强度。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>局域化现象</h4>
              <p>从弱局域化到强局域化，无序导致的量子干涉效应深刻影响材料的输运性质。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>介观物理</h4>
              <p>介观尺度系统展现出丰富的量子现象，如电导涨落、AB振荡和量子化电导。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>量子点系统</h4>
              <p>零维量子点中的库仑阻塞、Kondo效应等现象为单电子器件和量子器件奠定基础。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>技术应用</h4>
              <p>量子输运原理在量子计算、量子通信和精密测量等前沿技术中具有重要应用价值。</p>
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