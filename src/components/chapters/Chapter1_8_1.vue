<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.8.1 常用能量单位与换算</h1>
      <div class="chapter-subtitle">Common Energy Units and Conversions</div>
    </div>

    <div class="content-sections">
      <!-- 基本能量单位 -->
      <section class="content-section">
        <h2 class="section-title">基本能量单位</h2>
        <div class="units-overview">
          <div class="unit-category">
            <h3>国际单位制 (SI)</h3>
            <div class="unit-cards">
              <div class="unit-card primary">
                <div class="unit-symbol">J</div>
                <div class="unit-info">
                  <h4>焦耳 (Joule)</h4>
                  <p class="unit-definition">SI基本能量单位</p>
                  <div class="unit-relation">
                    <span>1 J = 1 kg⋅m²⋅s⁻²</span>
                  </div>
                </div>
              </div>
              
              <div class="unit-card">
                <div class="unit-symbol">W⋅h</div>
                <div class="unit-info">
                  <h4>瓦时 (Watt-hour)</h4>
                  <p class="unit-definition">电能常用单位</p>
                  <div class="unit-relation">
                    <span>1 W⋅h = 3600 J</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="unit-category">
            <h3>原子物理单位</h3>
            <div class="unit-cards">
              <div class="unit-card atomic">
                <div class="unit-symbol">eV</div>
                <div class="unit-info">
                  <h4>电子伏特 (Electron Volt)</h4>
                  <p class="unit-definition">原子尺度能量单位</p>
                  <div class="unit-relation">
                    <span>1 eV = 1.602176634 × 10⁻¹⁹ J</span>
                  </div>
                </div>
              </div>
              
              <div class="unit-card">
                <div class="unit-symbol">Ry</div>
                <div class="unit-info">
                  <h4>里德伯 (Rydberg)</h4>
                  <p class="unit-definition">氢原子基态结合能</p>
                  <div class="unit-relation">
                    <span>1 Ry = 13.6057 eV</span>
                  </div>
                </div>
              </div>
              
              <div class="unit-card">
                <div class="unit-symbol">Ha</div>
                <div class="unit-info">
                  <h4>哈特里 (Hartree)</h4>
                  <p class="unit-definition">原子单位制能量单位</p>
                  <div class="unit-relation">
                    <span>1 Ha = 2 Ry = 27.2114 eV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="unit-category">
            <h3>热力学单位</h3>
            <div class="unit-cards">
              <div class="unit-card thermal">
                <div class="unit-symbol">K</div>
                <div class="unit-info">
                  <h4>开尔文 (Kelvin)</h4>
                  <p class="unit-definition">温度对应的能量</p>
                  <div class="unit-relation">
                    <span>k_B T, k_B = 8.617 × 10⁻⁵ eV/K</span>
                  </div>
                </div>
              </div>
              
              <div class="unit-card">
                <div class="unit-symbol">cal</div>
                <div class="unit-info">
                  <h4>卡路里 (Calorie)</h4>
                  <p class="unit-definition">热量单位</p>
                  <div class="unit-relation">
                    <span>1 cal = 4.184 J</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="unit-category">
            <h3>光谱学单位</h3>
            <div class="unit-cards">
              <div class="unit-card spectral">
                <div class="unit-symbol">cm⁻¹</div>
                <div class="unit-info">
                  <h4>波数 (Wavenumber)</h4>
                  <p class="unit-definition">光谱学常用单位</p>
                  <div class="unit-relation">
                    <span>1 cm⁻¹ = 1.24 × 10⁻⁴ eV</span>
                  </div>
                </div>
              </div>
              
              <div class="unit-card">
                <div class="unit-symbol">THz</div>
                <div class="unit-info">
                  <h4>太赫兹 (Terahertz)</h4>
                  <p class="unit-definition">频率单位</p>
                  <div class="unit-relation">
                    <span>1 THz = 4.136 × 10⁻³ eV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 换算表 -->
      <section class="content-section">
        <h2 class="section-title">单位换算表</h2>
        <div class="conversion-tables">
          <div class="table-container">
            <h3>能量单位换算矩阵</h3>
            <div class="conversion-matrix">
              <table class="conversion-table">
                <thead>
                  <tr>
                    <th>单位</th>
                    <th>J</th>
                    <th>eV</th>
                    <th>Ry</th>
                    <th>Ha</th>
                    <th>cm⁻¹</th>
                    <th>K</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="unit-label">1 J</td>
                    <td>1</td>
                    <td>6.242 × 10¹⁸</td>
                    <td>4.587 × 10¹⁷</td>
                    <td>2.294 × 10¹⁷</td>
                    <td>5.034 × 10²²</td>
                    <td>7.243 × 10²²</td>
                  </tr>
                  <tr>
                    <td class="unit-label">1 eV</td>
                    <td>1.602 × 10⁻¹⁹</td>
                    <td>1</td>
                    <td>0.07349</td>
                    <td>0.03674</td>
                    <td>8066</td>
                    <td>1.160 × 10⁴</td>
                  </tr>
                  <tr>
                    <td class="unit-label">1 Ry</td>
                    <td>2.180 × 10⁻¹⁸</td>
                    <td>13.606</td>
                    <td>1</td>
                    <td>0.5</td>
                    <td>1.097 × 10⁵</td>
                    <td>1.578 × 10⁵</td>
                  </tr>
                  <tr>
                    <td class="unit-label">1 Ha</td>
                    <td>4.360 × 10⁻¹⁸</td>
                    <td>27.211</td>
                    <td>2</td>
                    <td>1</td>
                    <td>2.195 × 10⁵</td>
                    <td>3.158 × 10⁵</td>
                  </tr>
                  <tr>
                    <td class="unit-label">1 cm⁻¹</td>
                    <td>1.986 × 10⁻²³</td>
                    <td>1.240 × 10⁻⁴</td>
                    <td>9.112 × 10⁻⁶</td>
                    <td>4.556 × 10⁻⁶</td>
                    <td>1</td>
                    <td>1.439</td>
                  </tr>
                  <tr>
                    <td class="unit-label">1 K</td>
                    <td>1.381 × 10⁻²³</td>
                    <td>8.617 × 10⁻⁵</td>
                    <td>6.336 × 10⁻⁶</td>
                    <td>3.168 × 10⁻⁶</td>
                    <td>0.6950</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="quick-conversions">
            <h3>常用快速换算</h3>
            <div class="conversion-cards">
              <div class="conversion-card">
                <div class="conversion-title">室温能量</div>
                <div class="conversion-formula">
                  <span class="formula">k_B T (300K) ≈ 26 meV</span>
                </div>
                <div class="conversion-note">室温下的热能量</div>
              </div>
              
              <div class="conversion-card">
                <div class="conversion-title">可见光能量</div>
                <div class="conversion-formula">
                  <span class="formula">1.5 - 3.0 eV</span>
                </div>
                <div class="conversion-note">对应波长 400-800 nm</div>
              </div>
              
              <div class="conversion-card">
                <div class="conversion-title">X射线能量</div>
                <div class="conversion-formula">
                  <span class="formula">1 - 100 keV</span>
                </div>
                <div class="conversion-note">硬X射线范围</div>
              </div>
              
              <div class="conversion-card">
                <div class="conversion-title">化学键能</div>
                <div class="conversion-formula">
                  <span class="formula">1 - 10 eV</span>
                </div>
                <div class="conversion-note">典型分子键能范围</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 物理常数 -->
      <section class="content-section">
        <h2 class="section-title">重要物理常数</h2>
        <div class="constants-grid">
          <div class="constant-category">
            <h3>基本常数</h3>
            <div class="constants-list">
              <div class="constant-item">
                <div class="constant-symbol">h</div>
                <div class="constant-info">
                  <h4>普朗克常数</h4>
                  <div class="constant-value">6.62607015 × 10⁻³⁴ J⋅s</div>
                  <div class="constant-alt">4.135667696 × 10⁻¹⁵ eV⋅s</div>
                </div>
              </div>
              
              <div class="constant-item">
                <div class="constant-symbol">ℏ</div>
                <div class="constant-info">
                  <h4>约化普朗克常数</h4>
                  <div class="constant-value">1.054571817 × 10⁻³⁴ J⋅s</div>
                  <div class="constant-alt">6.582119569 × 10⁻¹⁶ eV⋅s</div>
                </div>
              </div>
              
              <div class="constant-item">
                <div class="constant-symbol">c</div>
                <div class="constant-info">
                  <h4>光速</h4>
                  <div class="constant-value">2.99792458 × 10⁸ m/s</div>
                  <div class="constant-alt">精确定义值</div>
                </div>
              </div>
              
              <div class="constant-item">
                <div class="constant-symbol">k_B</div>
                <div class="constant-info">
                  <h4>玻尔兹曼常数</h4>
                  <div class="constant-value">1.380649 × 10⁻²³ J/K</div>
                  <div class="constant-alt">8.617333262 × 10⁻⁵ eV/K</div>
                </div>
              </div>
            </div>
          </div>

          <div class="constant-category">
            <h3>原子单位</h3>
            <div class="constants-list">
              <div class="constant-item">
                <div class="constant-symbol">a₀</div>
                <div class="constant-info">
                  <h4>玻尔半径</h4>
                  <div class="constant-value">5.29177210903 × 10⁻¹¹ m</div>
                  <div class="constant-alt">0.529177 Å</div>
                </div>
              </div>
              
              <div class="constant-item">
                <div class="constant-symbol">E_h</div>
                <div class="constant-info">
                  <h4>哈特里能量</h4>
                  <div class="constant-value">4.3597447222071 × 10⁻¹⁸ J</div>
                  <div class="constant-alt">27.211386245988 eV</div>
                </div>
              </div>
              
              <div class="constant-item">
                <div class="constant-symbol">m_e</div>
                <div class="constant-info">
                  <h4>电子质量</h4>
                  <div class="constant-value">9.1093837015 × 10⁻³¹ kg</div>
                  <div class="constant-alt">0.51099895000 MeV/c²</div>
                </div>
              </div>
              
              <div class="constant-item">
                <div class="constant-symbol">e</div>
                <div class="constant-info">
                  <h4>基本电荷</h4>
                  <div class="constant-value">1.602176634 × 10⁻¹⁹ C</div>
                  <div class="constant-alt">精确定义值</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 实际应用 -->
      <section class="content-section">
        <h2 class="section-title">实际应用示例</h2>
        <div class="applications">
          <div class="application-category">
            <h3>🔬 凝聚态物理中的典型能量尺度</h3>
            <div class="energy-scales">
              <div class="scale-item">
                <div class="scale-range">
                  <span class="range-value">10⁻⁶ - 10⁻³ eV</span>
                  <span class="range-unit">(μeV - meV)</span>
                </div>
                <div class="scale-description">
                  <h4>超导能隙</h4>
                  <p>高温超导体的能隙通常在几十meV，常规超导体更小</p>
                  <div class="examples">
                    <span>Nb: ~1.5 meV</span>
                    <span>YBCO: ~20 meV</span>
                  </div>
                </div>
              </div>
              
              <div class="scale-item">
                <div class="scale-range">
                  <span class="range-value">10⁻³ - 1 eV</span>
                  <span class="range-unit">(meV - eV)</span>
                </div>
                <div class="scale-description">
                  <h4>声子能量</h4>
                  <p>晶格振动的量子化能量，影响热传导和电子-声子相互作用</p>
                  <div class="examples">
                    <span>声学声子: ~meV</span>
                    <span>光学声子: ~10-100 meV</span>
                  </div>
                </div>
              </div>
              
              <div class="scale-item">
                <div class="scale-range">
                  <span class="range-value">1 - 10 eV</span>
                  <span class="range-unit">(eV)</span>
                </div>
                <div class="scale-description">
                  <h4>能带结构</h4>
                  <p>电子能带宽度和带隙，决定材料的电学性质</p>
                  <div class="examples">
                    <span>Si带隙: 1.1 eV</span>
                    <span>GaAs带隙: 1.4 eV</span>
                  </div>
                </div>
              </div>
              
              <div class="scale-item">
                <div class="scale-range">
                  <span class="range-value">1 - 100 eV</span>
                  <span class="range-unit">(eV)</span>
                </div>
                <div class="scale-description">
                  <h4>价电子结合能</h4>
                  <p>外层电子的结合能，影响化学键合和光电效应</p>
                  <div class="examples">
                    <span>C 2p: 284 eV</span>
                    <span>O 1s: 532 eV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="application-category">
            <h3>🧮 计算示例</h3>
            <div class="calculation-examples">
              <div class="example-card">
                <h4>例题1：温度与能量的关系</h4>
                <div class="problem">
                  <p><strong>问题：</strong>液氮温度(77K)对应的热能量是多少eV？</p>
                </div>
                <div class="solution">
                  <p><strong>解答：</strong></p>
                  <div class="calculation-steps">
                    <div class="step">
                      <span class="step-number">1</span>
                      <span class="step-content">E = k_B T</span>
                    </div>
                    <div class="step">
                      <span class="step-number">2</span>
                      <span class="step-content">E = 8.617 × 10⁻⁵ eV/K × 77 K</span>
                    </div>
                    <div class="step">
                      <span class="step-number">3</span>
                      <span class="step-content">E = 6.63 × 10⁻³ eV = 6.63 meV</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="example-card">
                <h4>例题2：光子能量计算</h4>
                <div class="problem">
                  <p><strong>问题：</strong>波长为500nm的绿光光子能量是多少eV？</p>
                </div>
                <div class="solution">
                  <p><strong>解答：</strong></p>
                  <div class="calculation-steps">
                    <div class="step">
                      <span class="step-number">1</span>
                      <span class="step-content">E = hc/λ</span>
                    </div>
                    <div class="step">
                      <span class="step-number">2</span>
                      <span class="step-content">E = (4.136 × 10⁻¹⁵ eV⋅s)(3 × 10⁸ m/s)/(500 × 10⁻⁹ m)</span>
                    </div>
                    <div class="step">
                      <span class="step-number">3</span>
                      <span class="step-content">E = 2.48 eV</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="example-card">
                <h4>例题3：单位制转换</h4>
                <div class="problem">
                  <p><strong>问题：</strong>将1 Hartree转换为cm⁻¹单位。</p>
                </div>
                <div class="solution">
                  <p><strong>解答：</strong></p>
                  <div class="calculation-steps">
                    <div class="step">
                      <span class="step-number">1</span>
                      <span class="step-content">1 Ha = 27.211 eV</span>
                    </div>
                    <div class="step">
                      <span class="step-number">2</span>
                      <span class="step-content">1 eV = 8066 cm⁻¹</span>
                    </div>
                    <div class="step">
                      <span class="step-number">3</span>
                      <span class="step-content">1 Ha = 27.211 × 8066 = 2.195 × 10⁵ cm⁻¹</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 记忆技巧 -->
      <section class="content-section">
        <h2 class="section-title">记忆技巧与实用提示</h2>
        <div class="tips-container">
          <div class="tip-category">
            <h3>🧠 记忆技巧</h3>
            <div class="memory-tips">
              <div class="tip-item">
                <div class="tip-icon">💡</div>
                <div class="tip-content">
                  <h4>室温基准</h4>
                  <p>记住室温(300K)对应约26meV，作为能量尺度的基准</p>
                </div>
              </div>
              
              <div class="tip-item">
                <div class="tip-icon">🔢</div>
                <div class="tip-content">
                  <h4>数量级记忆</h4>
                  <p>1eV ≈ 10⁴K ≈ 8000cm⁻¹，记住数量级关系</p>
                </div>
              </div>
              
              <div class="tip-item">
                <div class="tip-icon">⚡</div>
                <div class="tip-content">
                  <h4>电子伏特直觉</h4>
                  <p>1eV是电子通过1V电势差获得的能量，很直观</p>
                </div>
              </div>
              
              <div class="tip-item">
                <div class="tip-icon">🌈</div>
                <div class="tip-content">
                  <h4>可见光范围</h4>
                  <p>可见光1.5-3eV，红光低能量，紫光高能量</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tip-category">
            <h3>⚠️ 常见错误</h3>
            <div class="common-mistakes">
              <div class="mistake-item">
                <div class="mistake-icon">❌</div>
                <div class="mistake-content">
                  <h4>单位混淆</h4>
                  <p>注意区分Ry和Ha：1 Ha = 2 Ry</p>
                </div>
              </div>
              
              <div class="mistake-item">
                <div class="mistake-icon">❌</div>
                <div class="mistake-content">
                  <h4>数量级错误</h4>
                  <p>换算时容易出现10的幂次错误，要仔细检查</p>
                </div>
              </div>
              
              <div class="mistake-item">
                <div class="mistake-icon">❌</div>
                <div class="mistake-content">
                  <h4>温度能量混淆</h4>
                  <p>温度K和能量eV不能直接等同，需要k_B转换</p>
                </div>
              </div>
            </div>
          </div>

          <div class="tip-category">
            <h3>🛠️ 实用工具</h3>
            <div class="useful-tools">
              <div class="tool-item">
                <h4>在线转换器</h4>
                <p>NIST物理常数数据库提供精确的单位转换</p>
              </div>
              
              <div class="tool-item">
                <h4>计算软件</h4>
                <p>Mathematica, Python等可以进行精确的单位换算</p>
              </div>
              
              <div class="tool-item">
                <h4>参考卡片</h4>
                <p>制作常用换算关系的参考卡片，随时查阅</p>
              </div>
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
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e2e8f0;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #64748b;
  font-style: italic;
}

.content-sections {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.content-section {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 1.5rem;
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
}

.units-overview {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.unit-category h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.unit-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.unit-card {
  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 2px solid #e2e8f0;
  transition: all 0.2s;
}

.unit-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px -8px rgba(0, 0, 0, 0.2);
}

.unit-card.primary {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
}

.unit-card.atomic {
  border-color: #10b981;
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
}

.unit-card.thermal {
  border-color: #f59e0b;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
}

.unit-card.spectral {
  border-color: #8b5cf6;
  background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
}

.unit-symbol {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
}

.unit-info h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.unit-definition {
  color: #64748b;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.unit-relation {
  background: rgba(59, 130, 246, 0.1);
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.unit-relation span {
  color: #2563eb;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
}

.conversion-tables {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.table-container h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.conversion-matrix {
  overflow-x: auto;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.conversion-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.85rem;
}

.conversion-table th {
  background: #f1f5f9;
  color: #1e293b;
  font-weight: 600;
  padding: 0.75rem;
  text-align: center;
  border-bottom: 2px solid #e2e8f0;
}

.conversion-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #f1f5f9;
}

.unit-label {
  background: #f8fafc !important;
  font-weight: 600;
  color: #2563eb !important;
}

.conversion-table tbody tr:hover {
  background: #f8fafc;
}

.quick-conversions h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.conversion-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.conversion-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.conversion-title {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.conversion-formula {
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}

.formula {
  font-family: 'Courier New', monospace;
  font-weight: bold;
}

.conversion-note {
  color: #64748b;
  font-size: 0.85rem;
}

.constants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.constant-category h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.constants-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.constant-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.constant-symbol {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  flex-shrink: 0;
}

.constant-info h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.constant-value {
  color: #2563eb;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  margin-bottom: 0.25rem;
}

.constant-alt {
  color: #64748b;
  font-size: 0.8rem;
}

.applications {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.application-category h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.energy-scales {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.scale-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #f8fafc;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.scale-range {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 120px;
  padding: 1rem;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 0.5rem;
  text-align: center;
}

.range-value {
  font-weight: bold;
  font-size: 0.9rem;
}

.range-unit {
  font-size: 0.75rem;
  opacity: 0.9;
}

.scale-description h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.scale-description p {
  color: #4a5568;
  margin-bottom: 0.75rem;
  font-size: 0.9rem;
}

.examples {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.examples span {
  background: rgba(59, 130, 246, 0.1);
  color: #2563eb;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
}

.calculation-examples {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.example-card {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid #e2e8f0;
}

.example-card h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1rem;
}

.problem {
  margin-bottom: 1rem;
}

.problem p {
  color: #4a5568;
}

.solution p {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.calculation-steps {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.step {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
  background: white;
  border-radius: 0.375rem;
}

.step-number {
  width: 24px;
  height: 24px;
  background: #3b82f6;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  flex-shrink: 0;
}

.step-content {
  font-family: 'Courier New', monospace;
  color: #2563eb;
}

.tips-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tip-category h3 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
}

.memory-tips,
.common-mistakes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.tip-item,
.mistake-item {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.tip-icon,
.mistake-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.tip-content h4,
.mistake-content h4 {
  color: #1e293b;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tip-content p,
.mistake-content p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

.useful-tools {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.tool-item {
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.tool-item h4 {
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.tool-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .unit-cards,
  .conversion-cards,
  .constants-grid,
  .memory-tips,
  .common-mistakes,
  .useful-tools {
    grid-template-columns: 1fr;
  }
  
  .scale-item {
    flex-direction: column;
    text-align: center;
  }
  
  .conversion-matrix {
    font-size: 0.75rem;
  }
}
</style>