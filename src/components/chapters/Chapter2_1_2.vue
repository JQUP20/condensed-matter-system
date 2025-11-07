<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.1.2 一次量子化的简单应用</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">应用实例</span>
        <span class="reading-time">预计阅读时间: 25分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>一次量子化方法的实际应用</h2>
        <p class="lead-text">
          一次量子化方法although处理大型多体系统时面临计算复杂性的挑战，但在许多重要的物理问题中仍然是不可或缺的工具。
          本节将通过具体的应用实例，展示一次量子化方法在原子物理、分子物理和凝聚态物理中的重要作用。
        </p>
      </section>

      <section class="content-section">
        <h2>氢原子：单电子系统的精确解</h2>
        
        <div class="application-card">
          <div class="app-icon">⚛️</div>
          <h3>薛定谔方程的精确求解</h3>
          <div class="mathematical-content">
            <p>氢原子是唯一可以精确求解的多体原子系统：</p>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\left[-\\frac{\\hbar^2}{2m_e}\\nabla^2 - \\frac{\\hbar^2}{2M_p}\\nabla_p^2 - \\frac{e^2}{4\\pi\\epsilon_0|\\mathbf{r}_e - \\mathbf{r}_p|}\\right]\\Psi = E\\Psi'"
                :block="true"
              />
            </div>
            
            <h4>质心坐标变换：</h4>
            <div class="coordinate-transform">
              <div class="equation-block">
                <KatexElement 
                  :expression="'\\mathbf{R} = \\frac{m_e\\mathbf{r}_e + M_p\\mathbf{r}_p}{m_e + M_p}, \\quad \\mathbf{r} = \\mathbf{r}_e - \\mathbf{r}_p'"
                  :block="true"
                />
              </div>
              <p>分离质心运动后，相对运动的薛定谔方程：</p>
              <div class="equation-block">
                <KatexElement 
                  :expression="'\\left[-\\frac{\\hbar^2}{2\\mu}\\nabla^2 - \\frac{e^2}{4\\pi\\epsilon_0 r}\\right]\\psi(\\mathbf{r}) = E\\psi(\\mathbf{r})'"
                  :block="true"
                />
              </div>
              <p>其中约化质量 μ = m<sub>e</sub>M<sub>p</sub>/(m<sub>e</sub> + M<sub>p</sub>) ≈ m<sub>e</sub></p>
            </div>
          </div>
        </div>

        <div class="solution-grid">
          <div class="solution-card">
            <h4>径向波函数</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'R_{nl}(r) = \\sqrt{\\left(\\frac{2}{na_0}\\right)^3\\frac{(n-l-1)!}{2n(n+l)!}}e^{-r/na_0}\\left(\\frac{2r}{na_0}\\right)^l L_{n-l-1}^{(2l+1)}\\left(\\frac{2r}{na_0}\\right)'"
                :block="true"
              />
            </div>
            <p>其中 a₀ = 4πε₀ℏ²/(μe²) 是玻尔半径</p>
          </div>

          <div class="solution-card">
            <h4>角向波函数</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'Y_l^m(\\theta,\\phi) = \\sqrt{\\frac{2l+1}{4\\pi}\\frac{(l-|m|)!}{(l+|m|)!}}P_l^{|m|}(\\cos\\theta)e^{im\\phi}'"
                :block="true"
              />
            </div>
            <p>球谐函数描述角动量的量子化</p>
          </div>

          <div class="solution-card">
            <h4>能级公式</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'E_n = -\\frac{\\mu e^4}{32\\pi^2\\epsilon_0^2\\hbar^2}\\frac{1}{n^2} = -\\frac{13.6\\text{ eV}}{n^2}'"
                :block="true"
              />
            </div>
            <p>里德伯公式，n = 1, 2, 3, ...</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>氦原子：多电子系统的近似处理</h2>
        
        <div class="application-card">
          <div class="app-icon">🔬</div>
          <h3>变分方法的应用</h3>
          <div class="variational-content">
            <p>氦原子包含两个电子，精确求解困难，需要使用近似方法：</p>
            
            <h4>1. 忽略电子-电子相互作用（零级近似）：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'H_0 = -\\frac{\\hbar^2}{2m_e}\\nabla_1^2 - \\frac{\\hbar^2}{2m_e}\\nabla_2^2 - \\frac{2e^2}{4\\pi\\epsilon_0 r_1} - \\frac{2e^2}{4\\pi\\epsilon_0 r_2}'"
                :block="true"
              />
            </div>
            <p>基态能量：E₀ = 2 × (-54.4 eV) = -108.8 eV</p>
            
            <h4>2. 变分法改进（有效核电荷）：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\psi_{\\text{trial}}(\\mathbf{r}_1, \\mathbf{r}_2) = \\psi_{1s}(Z_{\\text{eff}}, \\mathbf{r}_1)\\psi_{1s}(Z_{\\text{eff}}, \\mathbf{r}_2)'"
                :block="true"
              />
            </div>
            <p>优化参数 Z<sub>eff</sub> ≈ 1.69，得到 E ≈ -74.8 eV</p>
            <p>实验值：-79.0 eV，误差约5%</p>
          </div>
        </div>

        <div class="method-comparison">
          <h4>不同近似方法的比较：</h4>
          <div class="comparison-table">
            <table>
              <thead>
                <tr>
                  <th>方法</th>
                  <th>基态能量 (eV)</th>
                  <th>相对误差</th>
                  <th>计算复杂度</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>零级近似</td>
                  <td>-108.8</td>
                  <td>37.7%</td>
                  <td>低</td>
                </tr>
                <tr>
                  <td>简单变分法</td>
                  <td>-74.8</td>
                  <td>5.3%</td>
                  <td>中</td>
                </tr>
                <tr>
                  <td>Hylleraas方法</td>
                  <td>-78.98</td>
                  <td>0.03%</td>
                  <td>高</td>
                </tr>
                <tr>
                  <td>实验值</td>
                  <td>-79.005</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>分子轨道理论：H₂⁺分子离子</h2>
        
        <div class="application-card">
          <div class="app-icon">🧬</div>
          <h3>最简单的分子系统</h3>
          <div class="molecular-content">
            <p>H₂⁺分子离子包含两个质子和一个电子，是最简单的分子系统：</p>
            
            <h4>Born-Oppenheimer近似：</h4>
            <p>由于核质量远大于电子质量，可以将核运动和电子运动分离：</p>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\left[-\\frac{\\hbar^2}{2m_e}\\nabla^2 - \\frac{e^2}{4\\pi\\epsilon_0 r_A} - \\frac{e^2}{4\\pi\\epsilon_0 r_B}\\right]\\psi(\\mathbf{r}) = E(R)\\psi(\\mathbf{r})'"
                :block="true"
              />
            </div>
            
            <h4>分子轨道线性组合（LCAO）：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\psi = c_1\\phi_A + c_2\\phi_B'"
                :block="true"
              />
            </div>
            <p>其中 φ<sub>A</sub>, φ<sub>B</sub> 分别是原子A和B的1s轨道</p>
            
            <h4>成键和反键轨道：</h4>
            <div class="orbital-solutions">
              <div class="bonding-orbital">
                <h5>成键轨道（σ<sub>g</sub>）：</h5>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\psi_g = \\frac{1}{\\sqrt{2(1+S)}}(\\phi_A + \\phi_B)'"
                    :block="true"
                  />
                </div>
                <p>能量较低，电子密度在核间增强</p>
              </div>
              
              <div class="antibonding-orbital">
                <h5>反键轨道（σ<sub>u</sub>）：</h5>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\psi_u = \\frac{1}{\\sqrt{2(1-S)}}(\\phi_A - \\phi_B)'"
                    :block="true"
                  />
                </div>
                <p>能量较高，核间存在节点</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>固体中的电子：自由电子模型</h2>
        
        <div class="application-card">
          <div class="app-icon">🔲</div>
          <h3>金属中的传导电子</h3>
          <div class="electron-gas-content">
            <p>自由电子模型将金属中的传导电子视为在均匀正电荷背景中运动的自由粒子：</p>
            
            <h4>单粒子薛定谔方程：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'-\\frac{\\hbar^2}{2m}\\nabla^2\\psi(\\mathbf{r}) = E\\psi(\\mathbf{r})'"
                :block="true"
              />
            </div>
            
            <h4>周期性边界条件下的解：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\psi_\\mathbf{k}(\\mathbf{r}) = \\frac{1}{\\sqrt{V}}e^{i\\mathbf{k}\\cdot\\mathbf{r}}, \\quad E_\\mathbf{k} = \\frac{\\hbar^2k^2}{2m}'"
                :block="true"
              />
            </div>
            
            <h4>费米海和费米面：</h4>
            <div class="fermi-properties">
              <div class="property-item">
                <h5>费米动量：</h5>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'k_F = (3\\pi^2 n)^{1/3}'"
                    :block="true"
                  />
                </div>
              </div>
              
              <div class="property-item">
                <h5>费米能量：</h5>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'E_F = \\frac{\\hbar^2k_F^2}{2m} = \\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}'"
                    :block="true"
                  />
                </div>
              </div>
              
              <div class="property-item">
                <h5>费米温度：</h5>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'T_F = \\frac{E_F}{k_B} \\sim 10^4 - 10^5 \\text{ K}'"
                    :block="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="applications-grid">
          <div class="app-example">
            <h4>电导率计算</h4>
            <p>德鲁德模型结合量子统计：</p>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\sigma = \\frac{ne^2\\tau}{m}'"
                :block="true"
              />
            </div>
            <p>其中 τ 是散射时间</p>
          </div>

          <div class="app-example">
            <h4>比热容</h4>
            <p>低温下电子比热：</p>
            <div class="equation-block">
              <KatexElement 
                :expression="'C_e = \\gamma T = \\frac{\\pi^2}{3}\\frac{k_B^2}{E_F}nk_B T'"
                :block="true"
              />
            </div>
            <p>线性温度依赖关系</p>
          </div>

          <div class="app-example">
            <h4>磁化率</h4>
            <p>泡利顺磁性：</p>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\chi_P = \\mu_0\\mu_B^2 g(E_F)'"
                :block="true"
              />
            </div>
            <p>与费米面态密度成正比</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>量子点：零维量子限域</h2>
        
        <div class="application-card">
          <div class="app-icon">🔴</div>
          <h3>人工原子系统</h3>
          <div class="quantum-dot-content">
            <p>量子点是三维空间中都受到量子限域的纳米结构，常被称为"人工原子"：</p>
            
            <h4>球形量子点模型：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'V(r) = \\begin{cases} 0 & r < R \\\\ \\infty & r \\geq R \\end{cases}'"
                :block="true"
              />
            </div>
            
            <h4>径向薛定谔方程：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\frac{d^2u}{dr^2} + \\frac{2m E}{\\hbar^2}u = 0'"
                :block="true"
              />
            </div>
            <p>其中 u(r) = rR(r)，边界条件：u(0) = u(R) = 0</p>
            
            <h4>能级量子化：</h4>
            <div class="energy-levels">
              <div class="equation-block">
                <KatexElement 
                  :expression="'E_{nl} = \\frac{\\hbar^2\\pi^2}{2mR^2}\\left(n + \\frac{l}{2}\\right)^2'"
                  :block="true"
                />
              </div>
              <p>其中 n = 1, 2, 3, ... 和 l = 0, 1, 2, ...</p>
            </div>
            
            <h4>尺寸效应：</h4>
            <div class="size-effects">
              <ul>
                <li><strong>量子限域效应</strong>：能级间距 ∝ 1/R²</li>
                <li><strong>光学性质调控</strong>：通过改变尺寸调节发光波长</li>
                <li><strong>库仑阻塞</strong>：单电子隧穿效应</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>计算方法与数值技术</h2>
        
        <div class="methods-grid">
          <div class="method-card">
            <div class="method-icon">🧮</div>
            <h3>变分法</h3>
            <div class="method-content">
              <h4>基本原理：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="'E[\\psi] = \\frac{\\langle\\psi|H|\\psi\\rangle}{\\langle\\psi|\\psi\\rangle} \\geq E_0'"
                  :block="true"
                />
              </div>
              <h4>应用实例：</h4>
              <ul>
                <li>氦原子基态能量计算</li>
                <li>分子轨道理论</li>
                <li>密度泛函理论基础</li>
              </ul>
            </div>
          </div>

          <div class="method-card">
            <div class="method-icon">📊</div>
            <h3>微扰理论</h3>
            <div class="method-content">
              <h4>一级修正：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="`H = \\sum_{i=1}^N \\left(-\\frac{\\hbar^2}{2m}\\nabla_i^2 + V_{ext}(\\mathbf{r}_i)\\right) + \\frac{1}{2}\\sum_{i \\neq j} V(\\mathbf{r}_i, \\mathbf{r}_j)`"
                  :block="true"
                />
              </div>
              <h4>应用实例：</h4>
              <ul>
                <li>氢原子的精细结构</li>
                <li>塞曼效应和斯塔克效应</li>
                <li>分子振动-转动耦合</li>
              </ul>
            </div>
          </div>

          <div class="method-card">
            <div class="method-icon">🎯</div>
            <h3>数值对角化</h3>
            <div class="method-content">
              <h4>基组展开：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="'|\\psi\\rangle = \\sum_i c_i|\\phi_i\\rangle'"
                  :block="true"
                />
              </div>
              <h4>应用实例：</h4>
              <ul>
                <li>原子和分子的精确计算</li>
                <li>量子点能级结构</li>
                <li>小型量子系统模拟</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>本节要点总结</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <h4>🎯 精确解</h4>
            <p>氢原子是唯一可精确求解的多体原子系统，为理解原子结构提供了基础</p>
          </div>
          <div class="summary-item">
            <h4>🔬 近似方法</h4>
            <p>变分法、微扰理论等为处理复杂多体系统提供了有效的近似手段</p>
          </div>
          <div class="summary-item">
            <h4>🧬 分子系统</h4>
            <p>分子轨道理论成功解释了化学键的量子力学本质</p>
          </div>
          <div class="summary-item">
            <h4>🔲 固体物理</h4>
            <p>自由电子模型为理解金属的电学、热学和磁学性质奠定了基础</p>
          </div>
          <div class="summary-item">
            <h4>🔴 纳米系统</h4>
            <p>量子点等低维系统展现了量子限域效应的重要应用</p>
          </div>
          <div class="summary-item">
            <h4>🧮 计算技术</h4>
            <p>现代计算方法使得复杂量子系统的精确计算成为可能</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter2_1_2',
  components: {
    KatexElement
  }
}
</script>

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
  padding-bottom: 2rem;
  border-bottom: 3px solid #e74c3c;
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
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  background: #f8f9fa;
  color: #6c757d;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.introduction {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 3rem;
}

.introduction h2 {
  color: white;
  margin-bottom: 1rem;
}

.lead-text {
  font-size: 1.1rem;
  line-height: 1.8;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e74c3c;
}

.application-card, .method-card {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.application-card:hover, .method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.app-icon, .method-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.application-card h3, .method-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content, .variational-content, .molecular-content, .electron-gas-content, .quantum-dot-content, .method-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.coordinate-transform {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #27ae60;
}

.solution-grid, .applications-grid, .methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.solution-card, .app-example {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #3498db;
}

.solution-card h4, .app-example h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.method-comparison {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.comparison-table {
  width: 100%;
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.comparison-table th {
  background: #e74c3c;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.comparison-table tr:hover {
  background: #f8f9fa;
}

.orbital-solutions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}

.bonding-orbital, .antibonding-orbital {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.antibonding-orbital {
  border-left-color: #e74c3c;
}

.fermi-properties, .energy-levels, .size-effects {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.property-item {
  margin-bottom: 1rem;
}

.property-item h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.summary-section {
  background: linear-gradient(135deg, #fd79a8 0%, #fdcb6e 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary-section h2 {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  border: none;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.summary-item {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.summary-item h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.summary-item p {
  color: #555;
  font-size: 0.9rem;
  margin: 0;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

strong {
  color: #2c3e50;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .solution-grid, .applications-grid, .methods-grid {
    grid-template-columns: 1fr;
  }
  
  .orbital-solutions {
    grid-template-columns: 1fr;
  }
  
  .application-card, .method-card {
    padding: 1.5rem;
  }
  
  .comparison-table {
    font-size: 0.9rem;
  }
}
</style>