<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.7 线性响应理论的实验验证</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">实验物理</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>实验验证的重要性</h2>
        <p class="lead-text">
          线性响应理论作为凝聚态物理的基础理论框架，其正确性需要通过精确的实验验证。
          实验不仅验证理论预测，更重要的是揭示理论的适用范围和局限性，
          为理论的进一步发展提供指导。
        </p>
      </section>

      <section class="content-section">
        <h2>电输运性质的实验验证</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>直流电导率测量</h3>
            <p>最直接的线性响应验证</p>
            <div class="mathematical-content">
              <h4>欧姆定律验证：</h4>
              <div class="equation-block">
                <p>J = σE (线性关系)</p>
                <p>σ = ne²τ/m* (Drude模型)</p>
                <p>实验：I-V特性曲线</p>
              </div>
              
              <h4>温度依赖性：</h4>
              <div class="equation-block">
                <p>金属：σ(T) ∝ 1/T (声子散射)</p>
                <p>半导体：σ(T) ∝ exp(-Eg/2kBT)</p>
                <p>验证散射机制</p>
              </div>
              
              <h4>实验技术：</h4>
              <div class="equation-block">
                <p>四探针法消除接触电阻</p>
                <p>范德堡方法测量任意形状样品</p>
                <p>低温高精度测量</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🧲</div>
            <h3>霍尔效应测量</h3>
            <p>验证磁场中的线性响应</p>
            <div class="mathematical-content">
              <h4>经典霍尔效应：</h4>
              <div class="equation-block">
                <p>ρxy = RH·B (线性关系)</p>
                <p>RH = 1/(nec) (霍尔系数)</p>
                <p>载流子浓度和类型</p>
              </div>
              
              <h4>量子霍尔效应：</h4>
              <div class="equation-block">
                <p>ρxy = h/(νe²) (量子化)</p>
                <p>ν: 填充因子</p>
                <p>拓扑保护的精确量子化</p>
              </div>
              
              <h4>异常霍尔效应：</h4>
              <div class="equation-block">
                <p>ρxy = R0B + RsM</p>
                <p>Rs: 异常霍尔系数</p>
                <p>自旋轨道耦合效应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>热电效应测量</h3>
            <p>温度梯度驱动的响应</p>
            <div class="mathematical-content">
              <h4>塞贝克效应：</h4>
              <div class="equation-block">
                <p>V = S·ΔT (热电势)</p>
                <p>S = (π²kB²T/3e)·(1/n)·(dn/dE)|EF</p>
                <p>载流子能量分布信息</p>
              </div>
              
              <h4>帕尔贴效应：</h4>
              <div class="equation-block">
                <p>Q̇ = Π·I (热流)</p>
                <p>Π = ST (帕尔贴系数)</p>
                <p>电制冷应用</p>
              </div>
              
              <h4>汤姆逊效应：</h4>
              <div class="equation-block">
                <p>dQ/dt = τ·I·(dT/dx)</p>
                <p>τ = T(dS/dT) (汤姆逊系数)</p>
                <p>热电效应的完整描述</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>光学响应的实验验证</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌈</div>
            <h3>光学电导率测量</h3>
            <p>频域线性响应的直接测量</p>
            <div class="mathematical-content">
              <h4>复介电函数：</h4>
              <div class="equation-block">
                <p>ε(ω) = ε₁(ω) + iε₂(ω)</p>
                <p>σ(ω) = -iωε₀[ε(ω) - 1]</p>
                <p>反射率和透射率测量</p>
              </div>
              
              <h4>Kramers-Kronig关系验证：</h4>
              <div class="equation-block">
                <p>ε₁(ω) = 1 + (2/π)P∫₀^∞ [ω'ε₂(ω')/(ω'² - ω²)]dω'</p>
                <p>因果性的直接验证</p>
                <p>宽频谱测量的重要性</p>
              </div>
              
              <h4>求和规则：</h4>
              <div class="equation-block">
                <p>∫₀^∞ σ₁(ω)dω = (πne²/2m)</p>
                <p>载流子有效质量测定</p>
                <p>f-求和规则验证</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📡</div>
            <h3>太赫兹光谱学</h3>
            <p>低频光学响应的精确测量</p>
            <div class="mathematical-content">
              <h4>Drude峰观测：</h4>
              <div class="equation-block">
                <p>σ(ω) = σ₀/(1 - iωτ)</p>
                <p>载流子散射时间直接测量</p>
                <p>等离子体频率确定</p>
              </div>
              
              <h4>声子模式：</h4>
              <div class="equation-block">
                <p>ε(ω) = ε∞ + Σⱼ [Sⱼ/(ωⱼ² - ω² - iγⱼω)]</p>
                <p>晶格振动模式识别</p>
                <p>电声耦合强度</p>
              </div>
              
              <h4>相变动力学：</h4>
              <div class="equation-block">
                <p>时间分辨太赫兹光谱</p>
                <p>超快相变过程</p>
                <p>非平衡态响应</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>角分辨光电子能谱</h3>
            <p>单粒子谱函数的直接测量</p>
            <div class="mathematical-content">
              <h4>谱函数关系：</h4>
              <div class="equation-block">
                <p>I(k,ω) ∝ A(k,ω)f(ω)</p>
                <p>A(k,ω) = -ImG(k,ω)/π</p>
                <p>费米分布函数调制</p>
              </div>
              
              <h4>能带结构验证：</h4>
              <div class="equation-block">
                <p>准粒子色散关系E(k)</p>
                <p>费米面拓扑结构</p>
                <p>能隙和相变</p>
              </div>
              
              <h4>多体效应：</h4>
              <div class="equation-block">
                <p>自能修正Σ(k,ω)</p>
                <p>准粒子寿命1/ImΣ</p>
                <p>质量增强因子</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>磁响应的实验验证</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧭</div>
            <h3>磁化率测量</h3>
            <p>磁场线性响应的基础测量</p>
            <div class="mathematical-content">
              <h4>顺磁磁化率：</h4>
              <div class="equation-block">
                <p>χ = μ₀M/H = μ₀μeff²N/(3kBT)</p>
                <p>居里定律验证</p>
                <p>有效磁矩测定</p>
              </div>
              
              <h4>抗磁磁化率：</h4>
              <div class="equation-block">
                <p>χ = -μ₀e²⟨r²⟩N/(6m)</p>
                <p>Landau抗磁性</p>
                <p>轨道运动贡献</p>
              </div>
              
              <h4>Pauli顺磁性：</h4>
              <div class="equation-block">
                <p>χ = μ₀μB²N(EF)</p>
                <p>费米面态密度</p>
                <p>金属中的自旋磁化率</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>磁共振技术</h3>
            <p>动态磁响应的精确探测</p>
            <div class="mathematical-content">
              <h4>电子自旋共振：</h4>
              <div class="equation-block">
                <p>hν = gμBB (共振条件)</p>
                <p>g因子精确测定</p>
                <p>自旋轨道耦合信息</p>
              </div>
              
              <h4>核磁共振：</h4>
              <div class="equation-block">
                <p>Knight位移K = (χspin/χnuc)</p>
                <p>超精细耦合常数</p>
                <p>局域磁场环境</p>
              </div>
              
              <h4>铁磁共振：</h4>
              <div class="equation-block">
                <p>ω = γ√[(H + HA)(H + HA + 4πM)]</p>
                <p>磁各向异性场HA</p>
                <p>磁化动力学</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>量子振荡效应</h3>
            <p>强磁场中的量子相干现象</p>
            <div class="mathematical-content">
              <h4>de Haas-van Alphen效应：</h4>
              <div class="equation-block">
                <p>M ∝ cos(2πF/B + φ)</p>
                <p>F = (ℏ/2πe)·SF (频率)</p>
                <p>费米面截面积SF</p>
              </div>
              
              <h4>Shubnikov-de Haas效应：</h4>
              <div class="equation-block">
                <p>Δρ/ρ ∝ cos(2πF/B + φ)</p>
                <p>载流子有效质量</p>
                <p>散射时间信息</p>
              </div>
              
              <h4>温度和场依赖：</h4>
              <div class="equation-block">
                <p>振幅 ∝ (T/sinh(2π²kBTm*/ℏeB))</p>
                <p>有效质量m*的精确测定</p>
                <p>量子寿命τq</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验技术与方法</h2>
        <div class="technique-grid">
          <div class="technique-card">
            <h3>🌡️ 极端条件实验</h3>
            <div class="technique-content">
              <h4>低温技术：</h4>
              <ul>
                <li>稀释制冷机：mK温度范围</li>
                <li>绝热去磁制冷：μK温度</li>
                <li>量子相变的精确研究</li>
                <li>超导和磁有序的探测</li>
              </ul>
              
              <h4>强磁场技术：</h4>
              <ul>
                <li>超导磁体：连续45T</li>
                <li>脉冲磁场：瞬时100T+</li>
                <li>量子振荡效应观测</li>
                <li>磁场诱导相变</li>
              </ul>
              
              <h4>高压技术：</h4>
              <ul>
                <li>金刚石压砧：数百GPa</li>
                <li>压力诱导相变</li>
                <li>电子结构调控</li>
                <li>超导Tc提升</li>
              </ul>
            </div>
          </div>

          <div class="technique-card">
            <h3>⚡ 时间分辨技术</h3>
            <div class="technique-content">
              <h4>超快光谱学：</h4>
              <ul>
                <li>飞秒激光泵浦-探测</li>
                <li>载流子动力学</li>
                <li>相干声子激发</li>
                <li>非线性光学响应</li>
              </ul>
              
              <h4>时间分辨ARPES：</h4>
              <ul>
                <li>能带结构演化</li>
                <li>准粒子寿命</li>
                <li>光诱导相变</li>
                <li>非平衡态物理</li>
              </ul>
              
              <h4>太赫兹时域光谱：</h4>
              <ul>
                <li>载流子散射动力学</li>
                <li>声子模式演化</li>
                <li>相变动力学过程</li>
                <li>超导能隙动力学</li>
              </ul>
            </div>
          </div>

          <div class="technique-card">
            <h3>🔬 空间分辨技术</h3>
            <div class="technique-content">
              <h4>扫描探针显微镜：</h4>
              <ul>
                <li>STM：原子尺度电子结构</li>
                <li>AFM：表面形貌和力学性质</li>
                <li>局域态密度测量</li>
                <li>单原子操控</li>
              </ul>
              
              <h4>近场光学显微镜：</h4>
              <ul>
                <li>纳米尺度光学性质</li>
                <li>等离激元成像</li>
                <li>相变区域映射</li>
                <li>局域场增强效应</li>
              </ul>
              
              <h4>电子显微镜技术：</h4>
              <ul>
                <li>透射电镜：晶体结构</li>
                <li>扫描电镜：表面形貌</li>
                <li>电子能量损失谱</li>
                <li>原子分辨成像</li>
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
              <h4>实验验证的系统性</h4>
              <p>线性响应理论需要通过电输运、光学响应、磁响应等多个方面的实验进行全面验证，每种实验技术都有其特定的适用范围和精度限制。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>理论与实验的对应</h4>
              <p>实验测量的物理量与理论计算的响应函数存在直接对应关系，如ARPES测量谱函数、光学测量介电函数、输运测量电导张量等。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>极端条件的重要性</h4>
              <p>低温、强磁场、高压等极端条件实验能够揭示常规条件下无法观测的量子现象，是验证理论预测和发现新物理的重要手段。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>时空分辨技术</h4>
              <p>现代实验技术向着更高的时间和空间分辨率发展，使得我们能够在原子尺度和飞秒时间尺度上验证线性响应理论的预测。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>理论局限性的发现</h4>
              <p>实验不仅验证理论，更重要的是发现理论的局限性和失效条件，为理论的改进和新理论的建立提供指导。</p>
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
  background: #e53e3e;
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

.technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.technique-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.technique-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
}

.technique-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.technique-content ul {
  list-style: none;
  padding: 0;
}

.technique-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.technique-content li:before {
  content: "•";
  color: #4299e1;
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
  
  .concept-grid, .technique-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>