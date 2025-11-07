<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.1.4 Hartree-Fock近似</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">HF理论</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>Hartree-Fock方法简介</h2>
        <p class="lead-text">
          Hartree-Fock（HF）方法是量子化学和凝聚态物理中处理多电子系统的基础理论方法。
          它通过变分原理和平均场近似，将复杂的多体问题简化为一系列有效的单电子问题，
          为理解电子结构和化学键合提供了重要的理论框架。尽管存在一些局限性，
          HF方法仍然是现代电子结构理论的重要基石。
        </p>
      </section>

      <section class="content-section">
        <h2>理论基础与基本假设</h2>
        
        <div class="theory-foundation">
          <div class="foundation-icon">🏗️</div>
          <h3>核心思想：平均场近似</h3>
          <div class="foundation-content">
            <p>Hartree-Fock方法的核心思想是将每个电子看作在所有其他电子产生的平均场中运动的独立粒子。</p>
            
            <div class="assumption-grid">
              <div class="assumption-card">
                <h4>🔹 单行列式近似</h4>
                <p>多电子波函数用单个Slater行列式表示</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\Psi_{HF} = \\frac{1}{\\sqrt{N!}}\\det[\\psi_1(1)\\psi_2(2)\\cdots\\psi_N(N)]'"
                    :block="true"
                  />
                </div>
              </div>

              <div class="assumption-card">
                <h4>🔹 轨道近似</h4>
                <p>每个电子占据一个确定的分子轨道</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\psi_i(\\mathbf{r}) = \\sum_\\mu c_{\\mu i}\\phi_\\mu(\\mathbf{r})'"
                    :block="true"
                  />
                </div>
              </div>

              <div class="assumption-card">
                <h4>🔹 平均场近似</h4>
                <p>电子间相互作用通过平均势场处理</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'V_{\\text{eff}}(\\mathbf{r}) = \\sum_{j \\neq i}\\langle\\psi_j|\\frac{1}{r_{12}}|\\psi_j\\rangle'"
                    :block="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slater-determinant">
          <h3>Slater行列式的性质</h3>
          <div class="determinant-properties">
            <div class="property-item">
              <div class="property-icon">🔄</div>
              <h4>反对称性</h4>
              <p>自动满足泡利不相容原理</p>
              <div class="equation-block">
                <KatexElement 
                  :expression="'\\Psi(\\mathbf{r}_1, \\mathbf{r}_2, \\ldots) = -\\Psi(\\mathbf{r}_2, \\mathbf{r}_1, \\ldots)'"
                  :block="true"
                />
              </div>
            </div>

            <div class="property-item">
              <div class="property-icon">📐</div>
              <h4>正交归一性</h4>
              <p>轨道间相互正交且归一化</p>
              <div class="equation-block">
                <KatexElement 
                  :expression="'\\langle\\psi_i|\\psi_j\\rangle = \\delta_{ij}'"
                  :block="true"
                />
              </div>
            </div>

            <div class="property-item">
              <div class="property-icon">🎯</div>
              <h4>变分性质</h4>
              <p>HF能量是真实基态能量的上界</p>
              <div class="equation-block">
                <KatexElement 
                  :expression="'E_{HF} \\geq E_0'"
                  :block="true"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Hartree-Fock方程的推导</h2>
        
        <div class="derivation-process">
          <div class="derivation-icon">📝</div>
          <h3>变分推导过程</h3>
          
          <div class="step-by-step">
            <div class="derivation-step">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>哈密顿量表示</h4>
                <p>N电子系统的哈密顿量：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{H} = \\sum_{i=1}^N \\hat{h}(i) + \\sum_{i<j}^N \\frac{1}{r_{ij}}'"
                    :block="true"
                  />
                </div>
                <p>其中单电子算符：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{h}(i) = -\\frac{1}{2}\\nabla_i^2 - \\sum_A \\frac{Z_A}{r_{iA}}'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="derivation-step">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>能量期望值</h4>
                <p>Slater行列式的能量期望值：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'E = \\langle\\Psi_{HF}|\\hat{H}|\\Psi_{HF}\\rangle = \\sum_i h_{ii} + \\frac{1}{2}\\sum_{i,j}(J_{ij} - K_{ij})'"
                    :block="true"
                  />
                </div>
                <p>其中：</p>
                <ul>
                  <li>h<sub>ii</sub>：单电子积分</li>
                  <li>J<sub>ij</sub>：库仑积分</li>
                  <li>K<sub>ij</sub>：交换积分</li>
                </ul>
              </div>
            </div>

            <div class="derivation-step">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>变分条件</h4>
                <p>在正交约束下对轨道变分：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\delta(E - \\sum_{ij}\\lambda_{ij}(\\langle\\psi_i|\\psi_j\\rangle - \\delta_{ij})) = 0'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="derivation-step">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>Hartree-Fock方程</h4>
                <p>最终得到HF方程：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{F}\\psi_i = \\varepsilon_i\\psi_i'"
                    :block="true"
                  />
                </div>
                <p>其中Fock算符：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{F} = \\hat{h} + \\sum_j(\\hat{J}_j - \\hat{K}_j)'"
                    :block="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="operators-detail">
          <h3>Fock算符的组成</h3>
          <div class="operator-grid">
            <div class="operator-card">
              <div class="operator-icon">⚡</div>
              <h4>库仑算符 Ĵ<sub>j</sub></h4>
              <div class="operator-content">
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{J}_j\\psi_i(\\mathbf{r}_1) = \\left[\\int \\frac{|\\psi_j(\\mathbf{r}_2)|^2}{r_{12}}d\\mathbf{r}_2\\right]\\psi_i(\\mathbf{r}_1)'"
                    :block="true"
                  />
                </div>
                <p><strong>物理意义：</strong>电子i在轨道j中电子产生的平均库仑势中的势能</p>
                <p><strong>特点：</strong>局域算符，作用简单</p>
              </div>
            </div>

            <div class="operator-card">
              <div class="operator-icon">🔄</div>
              <h4>交换算符 K̂<sub>j</sub></h4>
              <div class="operator-content">
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{K}_j\\psi_i(\\mathbf{r}_1) = \\left[\\int \\frac{\\psi_juminate\\psi_i(\\mathbf{r}_2)}{r_{12}}d\\mathbf{r}_2\\right]\\psi_j(\\mathbf{r}_1)'"
                    :block="true"
                  />
                </div>
                <p><strong>物理意义：</strong>由于反对称性导致的量子交换效应</p>
                <p><strong>特点：</strong>非局域算符，纯量子效应</p>
              </div>
            </div>
          </div>

          <div class="exchange-insight">
            <div class="insight-icon">💡</div>
            <h4>交换相互作用的物理图像</h4>
            <div class="insight-content">
              <p>交换相互作用导致相同自旋的电子倾向于避开彼此，形成"交换空穴"效应。这种效应：</p>
              <ul>
                <li>降低了电子间的排斥能</li>
                <li>稳定了原子和分子的电子结构</li>
                <li>是化学键形成的重要因素</li>
                <li>解释了Hund规则的物理基础</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>自洽场求解方法</h2>
        
        <div class="scf-procedure">
          <div class="procedure-icon">🔄</div>
          <h3>Roothaan-Hall方程</h3>
          <div class="roothaan-content">
            <p>在有限基组展开下，HF方程转化为矩阵形式的Roothaan-Hall方程：</p>
            
            <div class="matrix-equation">
              <div class="equation-block">
                <KatexElement 
                  :expression="'\\mathbf{FC} = \\mathbf{SC\\varepsilon}'"
                  :block="true"
                />
              </div>
              
              <div class="matrix-elements">
                <h4>矩阵元素定义：</h4>
                <div class="element-grid">
                  <div class="element-item">
                    <strong>Fock矩阵：</strong>
                    <div class="equation-block">
                      <KatexElement 
                        :expression="'F_{\\mu\\nu} = H_{\\mu\\nu}^{\\text{core}} + \\sum_{\\lambda\\sigma} P_{\\lambda\\sigma} [(\\mu\\nu|\\lambda\\sigma) - \\frac{1}{2}(\\mu\\lambda|\\nu\\sigma)]'"
                        :block="true"
                      />
                    </div>
                  </div>
                  
                  <div class="element-item">
                    <strong>重叠矩阵：</strong>
                    <div class="equation-block">
                      <KatexElement 
                        :expression="'S_{\\mu\\nu} = \\langle\\phi_\\mu|\\phi_\\nu\\rangle'"
                        :block="true"
                      />
                    </div>
                  </div>
                  
                  <div class="element-item">
                    <strong>密度矩阵：</strong>
                    <div class="equation-block">
                      <KatexElement 
                        :expression="'P_{\\mu\\nu} = 2\\sum_{i}^{\\text{occ}}C_{\\mu i}C_{\\nu i}'"
                        :block="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scf-algorithm">
          <h3>自洽场迭代算法</h3>
          <div class="algorithm-flow">
            <div class="flow-step">
              <div class="step-icon">🎯</div>
              <div class="step-info">
                <h4>步骤1：初始猜测</h4>
                <p>构造初始密度矩阵P⁽⁰⁾或系数矩阵C⁽⁰⁾</p>
                <div class="methods-list">
                  <span class="method-tag">核哈密顿量对角化</span>
                  <span class="method-tag">扩展Hückel</span>
                  <span class="method-tag">原子密度叠加</span>
                </div>
              </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="flow-step">
              <div class="step-icon">🔧</div>
              <div class="step-info">
                <h4>步骤2：构造Fock矩阵</h4>
                <p>根据当前密度矩阵计算F⁽ⁿ⁾</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'F_{\\mu\\nu}^{(n)} = H_{\\mu\\nu}^{\\text{core}} + G_{\\mu\\nu}[P^{(n)}]'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="flow-step">
              <div class="step-icon">⚡</div>
              <div class="step-info">
                <h4>步骤3：求解本征方程</h4>
                <p>对角化广义本征值问题</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\mathbf{F}^{(n)}\\mathbf{C}^{(n+1)} = \\mathbf{S}\\mathbf{C}^{(n+1)}\\boldsymbol{\\varepsilon}^{(n+1)}'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="flow-step">
              <div class="step-icon">🔄</div>
              <div class="step-info">
                <h4>步骤4：更新密度矩阵</h4>
                <p>从新的系数矩阵构造新的密度矩阵</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'P_{\\mu\\nu}^{(n+1)} = 2\\sum_{i}^{\\text{occ}}C_{\\mu i}^{(n+1)}C_{\\nu i}^{(n+1)}'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="flow-arrow">↓</div>

            <div class="flow-step">
              <div class="step-icon">✅</div>
              <div class="step-info">
                <h4>步骤5：检查收敛</h4>
                <p>判断能量和密度矩阵是否收敛</p>
                <div class="convergence-criteria">
                  <div class="criterion">
                    <strong>能量收敛：</strong>
                    <KatexElement :expression="'|E^{(n+1)} - E^{(n)}| < \\epsilon_E'" />
                  </div>
                  <div class="criterion">
                    <strong>密度收敛：</strong>
                    <KatexElement :expression="'\\|\\mathbf{P}^{(n+1)} - \\mathbf{P}^{(n)}\\| < \\epsilon_P'" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="convergence-acceleration">
          <h3>收敛加速技术</h3>
          <div class="acceleration-methods">
            <div class="method-card">
              <div class="method-icon">🎯</div>
              <h4>DIIS (Direct Inversion in Iterative Subspace)</h4>
              <div class="method-content">
                <p>通过线性组合前几步的Fock矩阵来加速收敛：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\mathbf{F}_{\\text{DIIS}} = \\sum_{i} c_i \\mathbf{F}^{(i)}'"
                    :block="true"
                  />
                </div>
                <p><strong>优点：</strong>对大多数体系都有效，实现简单</p>
              </div>
            </div>

            <div class="method-card">
              <div class="method-icon">🔄</div>
              <h4>阻尼 (Damping)</h4>
              <div class="method-content">
                <p>混合新旧密度矩阵：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\mathbf{P}_{\\text{mix}} = \\alpha \\mathbf{P}_{\\text{new}} + (1-\\alpha) \\mathbf{P}_{\\text{old}}'"
                    :block="true"
                  />
                </div>
                <p><strong>适用：</strong>收敛困难的体系，如金属系统</p>
              </div>
            </div>

            <div class="method-card">
              <div class="method-icon">📈</div>
              <h4>能级移动 (Level Shifting)</h4>
              <div class="method-content">
                <p>人为提高虚轨道能量：</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'F_{\\mu\\nu} \\rightarrow F_{\\mu\\nu} + \\lambda S_{\\mu\\nu} \\text{ (for virtual orbitals)}'"
                    :block="true"
                  />
                </div>
                <p><strong>作用：</strong>防止HOMO-LUMO能级交叉</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>应用实例与计算结果</h2>
        
        <div class="applications-showcase">
          <div class="application-example">
            <div class="example-icon">🧪</div>
            <h3>氢分子 (H₂) 的HF计算</h3>
            <div class="example-content">
              <h4>计算设置：</h4>
              <div class="calculation-setup">
                <div class="setup-item">
                  <strong>基组：</strong>STO-3G, 6-31G, cc-pVDZ
                </div>
                <div class="setup-item">
                  <strong>几何：</strong>键长优化
                </div>
                <div class="setup-item">
                  <strong>对称性：</strong>D∞h点群
                </div>
              </div>
              
              <h4>结果比较：</h4>
              <div class="results-table">
                <table>
                  <thead>
                    <tr>
                      <th>基组</th>
                      <th>键长 (Å)</th>
                      <th>解离能 (eV)</th>
                      <th>总能量 (Hartree)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>STO-3G</td>
                      <td>0.742</td>
                      <td>3.49</td>
                      <td>-1.1167</td>
                    </tr>
                    <tr>
                      <td>6-31G</td>
                      <td>0.735</td>
                      <td>3.64</td>
                      <td>-1.1255</td>
                    </tr>
                    <tr>
                      <td>cc-pVDZ</td>
                      <td>0.735</td>
                      <td>3.78</td>
                      <td>-1.1284</td>
                    </tr>
                    <tr class="experimental-row">
                      <td>实验值</td>
                      <td>0.741</td>
                      <td>4.75</td>
                      <td>-1.1745</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="analysis-box">
                <h5>🔍 结果分析：</h5>
                <ul>
                  <li>键长预测较准确（误差 < 1%）</li>
                  <li>解离能系统性低估（缺少电子关联）</li>
                  <li>基组越大，结果越接近HF极限</li>
                  <li>总能量仍高于实验值（变分上界）</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="application-example">
            <div class="example-icon">💧</div>
            <h3>水分子 (H₂O) 的电子结构</h3>
            <div class="example-content">
              <h4>轨道分析：</h4>
              <div class="orbital-analysis">
                <div class="orbital-item">
                  <div class="orbital-label">1a₁ (核心轨道)</div>
                  <div class="orbital-energy">-20.55 eV</div>
                  <div class="orbital-character">O 1s</div>
                </div>
                <div class="orbital-item">
                  <div class="orbital-label">2a₁ (成键轨道)</div>
                  <div class="orbital-energy">-1.35 eV</div>
                  <div class="orbital-character">O 2s + H 1s</div>
                </div>
                <div class="orbital-item">
                  <div class="orbital-label">1b₂ (成键轨道)</div>
                  <div class="orbital-energy">-0.69 eV</div>
                  <div class="orbital-character">O 2p + H 1s</div>
                </div>
                <div class="orbital-item">
                  <div class="orbital-label">3a₁ (孤对电子)</div>
                  <div class="orbital-energy">-0.54 eV</div>
                  <div class="orbital-character">O 2p (非成键)</div>
                </div>
                <div class="orbital-item">
                  <div class="orbital-label">1b₁ (孤对电子)</div>
                  <div class="orbital-energy">-0.50 eV</div>
                  <div class="orbital-character">O 2p (非成键)</div>
                </div>
              </div>
              
              <div class="molecular-properties">
                <h5>分子性质预测：</h5>
                <div class="property-grid">
                  <div class="property-item">
                    <strong>偶极矩：</strong>1.87 D (实验: 1.85 D)
                  </div>
                  <div class="property-item">
                    <strong>电离能：</strong>12.6 eV (实验: 12.6 eV)
                  </div>
                  <div class="property-item">
                    <strong>键角：</strong>104.3° (实验: 104.5°)
                  </div>
                  <div class="property-item">
                    <strong>O-H键长：</strong>0.958 Å (实验: 0.957 Å)
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="application-example">
            <div class="example-icon">🔬</div>
            <h3>苯分子 (C₆H₆) 的芳香性</h3>
            <div class="example-content">
              <h4>π电子系统：</h4>
              <div class="pi-system">
                <div class="pi-orbital">
                  <div class="orbital-name">π₁ (a₂ᵤ)</div>
                  <div class="orbital-info">
                    <span class="energy">-0.36 eV</span>
                    <span class="occupancy">2e⁻</span>
                    <span class="character">成键</span>
                  </div>
                </div>
                <div class="pi-orbital">
                  <div class="orbital-name">π₂, π₃ (e₁g)</div>
                  <div class="orbital-info">
                    <span class="energy">-0.15 eV</span>
                    <span class="occupancy">4e⁻</span>
                    <span class="character">成键</span>
                  </div>
                </div>
                <div class="pi-orbital">
                  <div class="orbital-name">π₄*, π₅* (e₂ᵤ)</div>
                  <div class="orbital-info">
                    <span class="energy">+0.15 eV</span>
                    <span class="occupancy">0e⁻</span>
                    <span class="character">反键</span>
                  </div>
                </div>
              </div>
              
              <div class="aromaticity-indicators">
                <h5>芳香性指标：</h5>
                <div class="indicator-list">
                  <div class="indicator-item">
                    <strong>HOMO-LUMO间隙：</strong>0.30 eV
                  </div>
                  <div class="indicator-item">
                    <strong>π电子离域能：</strong>1.48 eV
                  </div>
                  <div class="indicator-item">
                    <strong>键长均匀化：</strong>所有C-C键长相等
                  </div>
                  <div class="indicator-item">
                    <strong>平面几何：</strong>D₆ₕ对称性
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Hartree-Fock方法的局限性</h2>
        
        <div class="limitations-analysis">
          <div class="limitation-category">
            <div class="category-icon">⚠️</div>
            <h3>电子关联缺失</h3>
            <div class="limitation-content">
              <div class="correlation-explanation">
                <h4>关联能的定义：</h4>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'E_{\\text{corr}} = E_{\\text{exact}} - E_{HF}'"
                    :block="true"
                  />
                </div>
                
                <div class="correlation-effects">
                  <div class="effect-item">
                    <h5>🔄 动态关联</h5>
                    <p>电子通过瞬时相互作用避免彼此，HF方法只考虑平均效应</p>
                  </div>
                  <div class="effect-item">
                    <h5>🎯 静态关联</h5>
                    <p>多重电子组态的混合，单行列式无法描述</p>
                  </div>
                </div>
                
                <div class="correlation-consequences">
                  <h5>关联缺失的后果：</h5>
                  <ul>
                    <li>键解离能系统性低估</li>
                    <li>分子间相互作用描述不准确</li>
                    <li>激发态和反应势垒预测偏差</li>
                    <li>金属性质描述困难</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="limitation-category">
            <div class="category-icon">🔧</div>
            <h3>单行列式近似</h3>
            <div class="limitation-content">
              <div class="determinant-limitations">
                <h4>适用性限制：</h4>
                <div class="limitation-grid">
                  <div class="limitation-item">
                    <h5>闭壳层体系</h5>
                    <p>✅ 适用于大多数分子基态</p>
                  </div>
                  <div class="limitation-item">
                    <h5>开壳层体系</h5>
                    <p>⚠️ 需要UHF或ROHF处理</p>
                  </div>
                  <div class="limitation-item">
                    <h5>多重态</h5>
                    <p>❌ 无法描述态混合</p>
                  </div>
                  <div class="limitation-item">
                    <h5>键断裂</h5>
                    <p>❌ 解离极限不正确</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="limitation-category">
            <div class="category-icon">📊</div>
            <h3>基组依赖性</h3>
            <div class="limitation-content">
              <div class="basis-dependence">
                <h4>基组不完备性效应：</h4>
                <div class="basis-effects">
                  <div class="effect-card">
                    <h5>基组叠加误差 (BSSE)</h5>
                    <p>分子间相互作用计算中的人为稳定化</p>
                    <div class="equation-block">
                      <KatexElement 
                        :expression="'\\Delta E_{\\text{BSSE}} = E_{AB}^{AB} - E_A^{AB} - E_B^{AB}'"
                        :block="true"
                      />
                    </div>
                  </div>
                  
                  <div class="effect-card">
                    <h5>收敛缓慢</h5>
                    <p>达到基组极限需要非常大的基组</p>
                    <p>计算成本随基组大小急剧增加</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>后Hartree-Fock方法</h2>
        
        <div class="post-hf-methods">
          <div class="methods-overview">
            <h3>改进HF方法的策略</h3>
            <div class="strategy-grid">
              <div class="strategy-card">
                <div class="strategy-icon">🎯</div>
                <h4>组态相互作用 (CI)</h4>
                <div class="strategy-content">
                  <p>在HF基础上包含激发组态：</p>
                  <div class="equation-block">
                    <KatexElement 
                      :expression="'|\\Psi\\rangle = c_0|\\Psi_{HF}\\rangle + \\sum_i c_i|\\Psi_i\\rangle'"
                      :block="true"
                    />
                  </div>
                  <div class="method-variants">
                    <span class="variant-tag">CIS</span>
                    <span class="variant-tag">CISD</span>
                    <span class="variant-tag">Full CI</span>
                  </div>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">🔄</div>
                <h4>耦合簇理论 (CC)</h4>
                <div class="strategy-content">
                  <p>指数形式的波函数：</p>
                  <div class="equation-block">
                    <KatexElement 
                      :expression="'|\\Psi\\rangle = e^{\\hat{T}}|\\Psi_{HF}\\rangle'"
                      :block="true"
                    />
                  </div>
                  <div class="method-variants">
                    <span class="variant-tag">CCD</span>
                    <span class="variant-tag">CCSD</span>
                    <span class="variant-tag">CCSD(T)</span>
                  </div>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">📊</div>
                <h4>多体微扰理论 (MP)</h4>
                <div class="strategy-content">
                  <p>将关联作为微扰处理：</p>
                  <div class="equation-block">
                    <KatexElement 
                      :expression="'E = E_{HF} + E^{(2)} + E^{(3)} + \\cdots'"
                      :block="true"
                    />
                  </div>
                  <div class="method-variants">
                    <span class="variant-tag">MP2</span>
                    <span class="variant-tag">MP3</span>
                    <span class="variant-tag">MP4</span>
                  </div>
                </div>
              </div>

              <div class="strategy-card">
                <div class="strategy-icon">🎨</div>
                <h4>密度泛函理论 (DFT)</h4>
                <div class="strategy-content">
                  <p>基于电子密度的方法：</p>
                  <div class="equation-block">
                    <KatexElement 
                      :expression="'E[\\rho] = T[\\rho] + V_{ext}[\\rho] + V_{ee}[\\rho]'"
                      :block="true"
                    />
                  </div>
                  <div class="method-variants">
                    <span class="variant-tag">LDA</span>
                    <span class="variant-tag">GGA</span>
                    <span class="variant-tag">Hybrid</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="accuracy-cost-comparison">
            <h3>精度与计算成本比较</h3>
            <div class="comparison-chart">
              <div class="chart-header">
                <div class="axis-label">计算精度</div>
                <div class="methods-comparison">
                  <div class="method-point hf-point">
                    <div class="point-marker"></div>
                    <div class="point-label">HF</div>
                    <div class="point-info">N⁴</div>
                  </div>
                  <div class="method-point mp2-point">
                    <div class="point-marker"></div>
                    <div class="point-label">MP2</div>
                    <div class="point-info">N⁵</div>
                  </div>
                  <div class="method-point ccsd-point">
                    <div class="point-marker"></div>
                    <div class="point-label">CCSD</div>
                    <div class="point-info">N⁶</div>
                  </div>
                  <div class="method-point ccsdt-point">
                    <div class="point-marker"></div>
                    <div class="point-label">CCSD(T)</div>
                    <div class="point-info">N⁷</div>
                  </div>
                </div>
                <div class="axis-label">计算成本</div>
              </div>
              
              <div class="scaling-explanation">
                <p><strong>标度说明：</strong>N为基函数数目，实际计算时间随N的幂次增长</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>本节要点总结</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <h4>🏗️ 理论基础</h4>
            <p>平均场近似和单Slater行列式波函数是HF方法的核心假设</p>
          </div>
          <div class="summary-item">
            <h4>🔧 数学框架</h4>
            <p>Fock方程通过变分原理导出，包含库仑和交换相互作用</p>
          </div>
          <div class="summary-item">
            <h4>🔄 求解方法</h4>
            <p>自洽场迭代和Roothaan-Hall方程是实际计算的基础</p>
          </div>
          <div class="summary-item">
            <h4>🎯 应用成功</h4>
            <p>在分子几何、轨道能级和基本性质预测方面表现良好</p>
          </div>
          <div class="summary-item">
            <h4>⚠️ 主要局限</h4>
            <p>缺少电子关联导致某些性质（如键能）预测不准确</p>
          </div>
          <div class="summary-item">
            <h4>🚀 发展方向</h4>
            <p>后HF方法通过包含关联效应显著改善计算精度</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter2_1_4',
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

.theory-foundation, .slater-determinant, .derivation-process, .operators-detail, .scf-procedure, .application-example {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theory-foundation:hover, .slater-determinant:hover, .derivation-process:hover, .operators-detail:hover, .scf-procedure:hover, .application-example:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.foundation-icon, .derivation-icon, .procedure-icon, .example-icon, .category-icon, .strategy-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.theory-foundation h3, .slater-determinant h3, .derivation-process h3, .operators-detail h3, .scf-procedure h3, .application-example h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.foundation-content, .example-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.assumption-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.assumption-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #3498db;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.assumption-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #e74c3c;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.determinant-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.property-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #27ae60;
}

.property-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.property-item h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.step-by-step {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
}

.derivation-step {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
}

.step-number {
  background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
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

.step-content h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.operator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.operator-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #9b59b6;
}

.operator-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.operator-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.operator-content {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.exchange-insight {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.insight-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.insight-content h4 {
  color: white;
  margin-bottom: 1rem;
}

.roothaan-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.matrix-equation {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
}

.element-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.element-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e67e22;
}

.scf-algorithm {
  margin-top: 2rem;
}

.algorithm-flow {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}

.flow-step {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 600px;
}

.step-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.step-info h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.methods-list {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  flex-wrap: wrap;
}

.method-tag {
  background: #e74c3c;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.flow-arrow {
  font-size: 1.5rem;
  color: #e74c3c;
  font-weight: bold;
}

.convergence-criteria {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.criterion {
  background: #e8f5e8;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
}

.convergence-acceleration {
  margin-top: 2rem;
}

.acceleration-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.method-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-left: 4px solid #f39c12;
}

.method-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.method-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.method-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.calculation-setup {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.setup-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.results-table {
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
}

.results-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.results-table th {
  background: #e74c3c;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.results-table td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.results-table tr:hover {
  background: #f8f9fa;
}

.experimental-row {
  background: #e8f5e8 !important;
  font-weight: 600;
}

.analysis-box {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.analysis-box h5 {
  color: white;
  margin-bottom: 0.5rem;
}

.orbital-analysis {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1rem 0;
}

.orbital-item {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #9b59b6;
}

.orbital-label {
  font-weight: 600;
  color: #2c3e50;
}

.orbital-energy {
  background: #e74c3c;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.9rem;
  text-align: center;
}

.orbital-character {
  text-align: right;
  color: #666;
  font-style: italic;
}

.molecular-properties {
  margin-top: 1rem;
}

.property-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.property-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.pi-system {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0;
}

.pi-orbital {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #8e44ad;
}

.orbital-name {
  font-weight: 600;
  color: #2c3e50;
}

.orbital-info {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.energy {
  background: #e74c3c;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.9rem;
}

.occupancy {
  background: #27ae60;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.9rem;
}

.character {
  color: #666;
  font-style: italic;
}

.aromaticity-indicators {
  margin-top: 1rem;
}

.indicator-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 0.5rem;
}

.indicator-item {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
}

.limitations-analysis {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
}

.limitation-category {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.limitation-category h3 {
  color: #e74c3c;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.limitation-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.correlation-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.effect-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e67e22;
}

.effect-item h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.correlation-consequences {
  background: #ffeaea;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.correlation-consequences h5 {
  color: #e74c3c;
  margin-bottom: 0.5rem;
}

.limitation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.limitation-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #95a5a6;
}

.limitation-item h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.basis-dependence {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.basis-effects {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.effect-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #f39c12;
}

.effect-card h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.post-hf-methods {
  margin-top: 2rem;
}

.methods-overview {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
}

.strategy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.strategy-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  border-left: 4px solid #3498db;
  transition: transform 0.3s ease;
}

.strategy-card:hover {
  transform: translateY(-5px);
}

.strategy-card h4 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.strategy-content {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.method-variants {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.variant-tag {
  background: #3498db;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.accuracy-cost-comparison {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.comparison-chart {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.chart-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.axis-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 1.1rem;
}

.methods-comparison {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 600px;
  position: relative;
}

.methods-comparison::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(to right, #27ae60, #f39c12, #e74c3c, #8e44ad);
  z-index: 1;
}

.method-point {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
  position: relative;
}

.point-marker {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: white;
  border: 3px solid;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
}

.hf-point .point-marker {
  border-color: #27ae60;
}

.mp2-point .point-marker {
  border-color: #f39c12;
}

.ccsd-point .point-marker {
  border-color: #e74c3c;
}

.ccsdt-point .point-marker {
  border-color: #8e44ad;
}

.point-label {
  font-weight: 600;
  color: #2c3e50;
  font-size: 0.9rem;
}

.point-info {
  background: #2c3e50;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.scaling-explanation {
  text-align: center;
  margin-top: 1rem;
  color: #666;
  font-style: italic;
}

.summary-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
}

.summary-section h2 {
  color: white;
  text-align: center;
  margin-bottom: 2rem;
  border-bottom: 2px solid rgba(255,255,255,0.3);
  padding-bottom: 1rem;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.summary-item {
  background: rgba(255,255,255,0.1);
  padding: 1.5rem;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
}

.summary-item h4 {
  color: white;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.summary-item p {
  color: rgba(255,255,255,0.9);
  line-height: 1.6;
  margin: 0;
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
  
  .assumption-grid, .determinant-properties, .operator-grid, .element-grid, .acceleration-methods, .strategy-grid, .summary-grid {
    grid-template-columns: 1fr;
  }
  
  .flow-step {
    flex-direction: column;
    text-align: center;
  }
  
  .methods-comparison {
    flex-direction: column;
    gap: 1rem;
  }
  
  .methods-comparison::before {
    display: none;
  }
}
</style>