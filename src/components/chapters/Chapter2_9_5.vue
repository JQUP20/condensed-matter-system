<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.9.5 热电效应</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">能量转换</span>
        <span class="reading-time">预计阅读时间: 50分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>热电效应概述</h2>
        <p class="lead-text">
          热电效应是指温度差和电势差之间相互转换的现象，
          包括塞贝克效应、帕尔贴效应和汤姆逊效应三个基本效应。
          这些效应的发现和研究不仅深化了我们对固体中载流子输运的理解，
          也为能源转换技术开辟了新的途径。热电材料可以实现热能与电能的直接转换，
          在废热回收、制冷、温差发电等领域具有重要应用价值。
          随着纳米技术和材料科学的发展，热电效应的研究正朝着更高效率、
          更广应用的方向发展。本章将系统介绍热电效应的物理机制、
          理论描述、材料特性和实际应用。
        </p>
      </section>

      <section class="content-section">
        <h2>基本热电效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>塞贝克效应</h3>
            <p>温度梯度产生电势差的现象</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>载流子扩散</p>
                <p>温度梯度驱动</p>
                <p>电化学势平衡</p>
                <p>热电动势产生</p>
              </div>
              
              <h4>塞贝克系数：</h4>
              <div class="equation-block">
                <p>S = -ΔV/ΔT</p>
                <p>ΔV: 电势差</p>
                <p>ΔT: 温度差</p>
                <p>单位: V/K</p>
              </div>
              
              <h4>微观表达式：</h4>
              <div class="equation-block">
                <p>S = (k/e)[(E_F - E_c)/kT + r + 1/2]</p>
                <p>E_F: 费米能级</p>
                <p>E_c: 导带底</p>
                <p>r: 散射参数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">❄️</div>
            <h3>帕尔贴效应</h3>
            <p>电流通过时的吸热或放热现象</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>载流子携带热量</p>
                <p>结点处能量交换</p>
                <p>可逆热效应</p>
                <p>制冷或加热</p>
              </div>
              
              <h4>帕尔贴系数：</h4>
              <div class="equation-block">
                <p>Π = Q/I</p>
                <p>Q: 吸收热量</p>
                <p>I: 电流</p>
                <p>单位: V</p>
              </div>
              
              <h4>与塞贝克系数关系：</h4>
              <div class="equation-block">
                <p>Π = ST</p>
                <p>Kelvin关系</p>
                <p>热力学一致性</p>
                <p>可逆过程</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>汤姆逊效应</h3>
            <p>导体中电流和热流共存时的热效应</p>
            <div class="mathematical-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <p>载流子能量变化</p>
                <p>温度梯度中输运</p>
                <p>可逆热产生</p>
                <p>体效应</p>
              </div>
              
              <h4>汤姆逊系数：</h4>
              <div class="equation-block">
                <p>τ = q/(I∇T)</p>
                <p>q: 单位体积热产生</p>
                <p>∇T: 温度梯度</p>
                <p>单位: V/K</p>
              </div>
              
              <h4>Kelvin关系：</h4>
              <div class="equation-block">
                <p>τ = T(dS/dT)</p>
                <p>热力学关系</p>
                <p>塞贝克系数导数</p>
                <p>温度依赖</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>热电输运理论</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>输运方程</h3>
            <p>热电输运的唯象理论描述</p>
            <div class="mathematical-content">
              <h4>电流密度：</h4>
              <div class="equation-block">
                <p>j = σE + σS∇T</p>
                <p>σ: 电导率</p>
                <p>E: 电场</p>
                <p>S: 塞贝克系数</p>
              </div>
              
              <h4>热流密度：</h4>
              <div class="equation-block">
                <p>q = ΠJ - κ∇T</p>
                <p>Π: 帕尔贴系数</p>
                <p>κ: 热导率</p>
                <p>J: 电流密度</p>
              </div>
              
              <h4>Onsager关系：</h4>
              <div class="equation-block">
                <p>L₁₂ = L₂₁</p>
                <p>交叉系数相等</p>
                <p>时间反演对称</p>
                <p>热力学一致性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>微观理论</h3>
            <p>基于载流子输运的微观描述</p>
            <div class="mathematical-content">
              <h4>Boltzmann方程：</h4>
              <div class="equation-block">
                <p>输运积分</p>
                <p>能量权重</p>
                <p>散射时间近似</p>
                <p>费米分布</p>
              </div>
              
              <h4>输运系数：</h4>
              <div class="equation-block">
                <p>L_n = ∫(E-μ)ⁿσ(E)(-∂f/∂E)dE</p>
                <p>n = 0,1,2: 矩</p>
                <p>σ(E): 能量相关电导</p>
                <p>f: 费米分布</p>
              </div>
              
              <h4>热电系数：</h4>
              <div class="equation-block">
                <p>S = (1/eT)(L₁/L₀)</p>
                <p>σ = L₀</p>
                <p>κₑ = (1/T)(L₂ - L₁²/L₀)</p>
                <p>Wiedemann-Franz偏离</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>品质因子</h3>
            <p>热电材料性能的评价指标</p>
            <div class="mathematical-content">
              <h4>无量纲品质因子：</h4>
              <div class="equation-block">
                <p>ZT = S²σT/κ</p>
                <p>S: 塞贝克系数</p>
                <p>σ: 电导率</p>
                <p>κ: 总热导率</p>
              </div>
              
              <h4>热导率分解：</h4>
              <div class="equation-block">
                <p>κ = κₑ + κₗ</p>
                <p>κₑ: 电子热导</p>
                <p>κₗ: 晶格热导</p>
                <p>独立优化</p>
              </div>
              
              <h4>优化策略：</h4>
              <div class="equation-block">
                <p>最大化功率因子S²σ</p>
                <p>最小化热导率κ</p>
                <p>解耦电热输运</p>
                <p>能带工程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>热电材料</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🧱</div>
            <h3>传统热电材料</h3>
            <p>经典的热电材料体系</p>
            <div class="mathematical-content">
              <h4>Bi₂Te₃基材料：</h4>
              <div class="equation-block">
                <p>室温应用</p>
                <p>层状结构</p>
                <p>p型: Bi₂Te₃-Sb₂Te₃</p>
                <p>n型: Bi₂Te₃-Bi₂Se₃</p>
              </div>
              
              <h4>PbTe基材料：</h4>
              <div class="equation-block">
                <p>中温应用(500-800K)</p>
                <p>岩盐结构</p>
                <p>能带收敛</p>
                <p>共振能级</p>
              </div>
              
              <h4>SiGe合金：</h4>
              <div class="equation-block">
                <p>高温应用(>800K)</p>
                <p>合金散射</p>
                <p>低晶格热导</p>
                <p>空间应用</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>新型热电材料</h3>
            <p>近年来发展的高性能材料</p>
            <div class="mathematical-content">
              <h4>笼状化合物：</h4>
              <div class="equation-block">
                <p>填充方钴矿</p>
                <p>笼中原子振动</p>
                <p>声子玻璃-电子晶体</p>
                <p>低晶格热导</p>
              </div>
              
              <h4>层状材料：</h4>
              <div class="equation-block">
                <p>SnSe单晶</p>
                <p>各向异性</p>
                <p>超低热导率</p>
                <p>高ZT值</p>
              </div>
              
              <h4>半Heusler合金：</h4>
              <div class="equation-block">
                <p>高温稳定</p>
                <p>机械性能好</p>
                <p>环境友好</p>
                <p>能带工程</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌟</div>
            <h3>纳米结构材料</h3>
            <p>利用纳米效应提升性能</p>
            <div class="mathematical-content">
              <h4>量子阱结构：</h4>
              <div class="equation-block">
                <p>二维电子气</p>
                <p>态密度尖峰</p>
                <p>增强塞贝克系数</p>
                <p>量子尺寸效应</p>
              </div>
              
              <h4>超晶格：</h4>
              <div class="equation-block">
                <p>界面散射</p>
                <p>声子阻挡</p>
                <p>电子透过</p>
                <p>热电解耦</p>
              </div>
              
              <h4>纳米复合材料：</h4>
              <div class="equation-block">
                <p>纳米颗粒散射</p>
                <p>界面工程</p>
                <p>能量过滤</p>
                <p>多尺度结构</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>热电器件与应用</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔋</div>
            <h3>热电发电</h3>
            <p>热能转换为电能的应用</p>
            <div class="mathematical-content">
              <h4>工作原理：</h4>
              <div class="equation-block">
                <p>塞贝克效应</p>
                <p>温差驱动</p>
                <p>直接转换</p>
                <p>无运动部件</p>
              </div>
              
              <h4>效率计算：</h4>
              <div class="equation-block">
                <p>η = (T_h - T_c)/T_h × √(1+ZT)-1/√(1+ZT)+T_c/T_h</p>
                <p>T_h: 热端温度</p>
                <p>T_c: 冷端温度</p>
                <p>卡诺效率修正</p>
              </div>
              
              <h4>应用领域：</h4>
              <div class="equation-block">
                <p>废热回收</p>
                <p>汽车尾气</p>
                <p>工业余热</p>
                <p>深空探测</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">❄️</div>
            <h3>热电制冷</h3>
            <p>基于帕尔贴效应的制冷技术</p>
            <div class="mathematical-content">
              <h4>工作原理：</h4>
              <div class="equation-block">
                <p>帕尔贴效应</p>
                <p>电流驱动</p>
                <p>热量泵送</p>
                <p>固态制冷</p>
              </div>
              
              <h4>制冷系数：</h4>
              <div class="equation-block">
                <p>COP = Q_c/P</p>
                <p>Q_c: 制冷量</p>
                <p>P: 输入功率</p>
                <p>性能指标</p>
              </div>
              
              <h4>优势特点：</h4>
              <div class="equation-block">
                <p>无机械振动</p>
                <p>精确温控</p>
                <p>环保无污染</p>
                <p>小型化</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>温度传感</h3>
            <p>基于热电效应的温度测量</p>
            <div class="mathematical-content">
              <h4>热电偶：</h4>
              <div class="equation-block">
                <p>两种材料结合</p>
                <p>塞贝克效应</p>
                <p>温度-电压转换</p>
                <p>宽温度范围</p>
              </div>
              
              <h4>类型选择：</h4>
              <div class="equation-block">
                <p>K型: Ni-Cr/Ni-Al</p>
                <p>J型: Fe/Cu-Ni</p>
                <p>T型: Cu/Cu-Ni</p>
                <p>应用温度不同</p>
              </div>
              
              <h4>应用特点：</h4>
              <div class="equation-block">
                <p>响应快速</p>
                <p>精度高</p>
                <p>稳定可靠</p>
                <p>工业标准</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>热电效应的优化策略</h2>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🎯 能带工程</h3>
            <div class="feature-content">
              <h4>策略方法：</h4>
              <ul>
                <li>能带收敛</li>
                <li>共振能级</li>
                <li>能量过滤</li>
                <li>载流子口袋工程</li>
              </ul>
              
              <h4>实现途径：</h4>
              <ul>
                <li>合金化</li>
                <li>应变工程</li>
                <li>掺杂优化</li>
                <li>量子限域</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>🔧 声子工程</h3>
            <div class="feature-content">
              <h4>散射机制：</h4>
              <ul>
                <li>点缺陷散射</li>
                <li>界面散射</li>
                <li>纳米结构散射</li>
                <li>共振散射</li>
              </ul>
              
              <h4>结构设计：</h4>
              <ul>
                <li>纳米复合</li>
                <li>分级结构</li>
                <li>界面工程</li>
                <li>声子晶体</li>
              </ul>
            </div>
          </div>

          <div class="feature-card">
            <h3>⚖️ 载流子优化</h3>
            <div class="feature-content">
              <h4>浓度优化：</h4>
              <ul>
                <li>最优载流子浓度</li>
                <li>掺杂水平控制</li>
                <li>补偿掺杂</li>
                <li>载流子调控</li>
              </ul>
              
              <h4>迁移率提升：</h4>
              <ul>
                <li>散射抑制</li>
                <li>晶体质量</li>
                <li>界面优化</li>
                <li>缺陷控制</li>
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
              <h4>基本效应</h4>
              <p>塞贝克、帕尔贴和汤姆逊三个基本热电效应构成了热电现象的完整描述，遵循热力学关系。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>输运理论</h4>
              <p>基于Boltzmann输运方程的微观理论揭示了热电系数与材料电子结构的关系。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>材料发展</h4>
              <p>从传统材料到纳米结构材料，通过能带工程和声子工程不断提升热电性能。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>器件应用</h4>
              <p>热电发电、制冷和传感技术在能源、环保和精密测量领域具有重要应用价值。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>优化策略</h4>
              <p>通过能带工程、声子工程和载流子优化的协同作用，实现热电性能的系统提升。</p>
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