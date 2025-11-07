<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.1.3 另一个例子：密度泛函理论</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">DFT理论</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>密度泛函理论简介</h2>
        <p class="lead-text">
          密度泛函理论（Density Functional Theory, DFT）是现代量子化学和凝聚态物理中最重要的理论方法之一。
          它将复杂的多体问题转化为有效的单体问题，通过电子密度而非多体波函数来描述系统的基态性质，
          极大地简化了计算复杂度，使得大型系统的第一性原理计算成为可能。
        </p>
      </section>

      <section class="content-section">
        <h2>理论基础：Hohenberg-Kohn定理</h2>
        
        <div class="theorem-card">
          <div class="theorem-icon">🏛️</div>
          <h3>第一Hohenberg-Kohn定理（存在性定理）</h3>
          <div class="theorem-content">
            <div class="theorem-statement">
              <p><strong>定理陈述：</strong>对于给定的外势 V<sub>ext</sub>(𝐫)，基态电子密度 ρ₀(𝐫) 唯一确定了系统的所有性质。</p>
            </div>
            
            <div class="mathematical-formulation">
              <h4>数学表述：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="'V_{\\text{ext}}(\\mathbf{r}) \\leftrightarrow \\rho_0(\\mathbf{r}) \\leftrightarrow \\Psi_0'"
                  :block="true"
                />
              </div>
              <p>这意味着基态能量是电子密度的唯一泛函：</p>
              <div class="equation-block">
                <KatexElement 
                  :expression="'E_0 = E[\\rho_0]'"
                  :block="true"
                />
              </div>
            </div>
            
            <div class="proof-sketch">
              <h4>证明要点：</h4>
              <ol>
                <li>假设两个不同的外势 V₁ 和 V₂ 产生相同的基态密度 ρ₀</li>
                <li>利用变分原理和基态的唯一性</li>
                <li>通过反证法证明这种假设导致矛盾</li>
                <li>因此，外势与基态密度一一对应</li>
              </ol>
            </div>
          </div>
        </div>

        <div class="theorem-card">
          <div class="theorem-icon">⚖️</div>
          <h3>第二Hohenberg-Kohn定理（变分原理）</h3>
          <div class="theorem-content">
            <div class="theorem-statement">
              <p><strong>定理陈述：</strong>对于任意试探密度 ρ(𝐫)，能量泛函 E[ρ] 满足变分原理。</p>
            </div>
            
            <div class="mathematical-formulation">
              <h4>变分原理：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="'E[\\rho] \\geq E[\\rho_0] = E_0'"
                  :block="true"
                />
              </div>
              <p>其中等号成立当且仅当 ρ(𝐫) = ρ₀(𝐫)</p>
              
              <h4>能量泛函的一般形式：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="`E[\\rho] = T[\\rho] + V_{ext}[\\rho] + V_{ee}[\\rho]`"
                  :block="true"
                />
              </div>
              <p>其中：</p>
              <ul>
                <li>T[ρ]：动能泛函</li>
                <li>V<sub>ext</sub>[ρ]：外势能泛函</li>
                <li>V<sub>ee</sub>[ρ]：电子-电子相互作用泛函</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Kohn-Sham方程</h2>
        
        <div class="ks-framework">
          <div class="framework-icon">🔧</div>
          <h3>Kohn-Sham框架的核心思想</h3>
          <div class="framework-content">
            <p>Kohn和Sham提出了一个巧妙的方案：将相互作用的电子系统映射到一个具有相同密度的非相互作用系统。</p>
            
            <h4>基本假设：</h4>
            <div class="assumption-box">
              <p>存在一个有效势 V<sub>eff</sub>(𝐫)，使得非相互作用电子在此势中的基态密度等于原相互作用系统的基态密度。</p>
            </div>
            
            <h4>Kohn-Sham轨道：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\left[-\\frac{\\hbar^2}{2m}\\nabla^2 + V_{\\text{eff}}(\\mathbf{r})\\right]\\psi_i(\\mathbf{r}) = \\varepsilon_i\\psi_i(\\mathbf{r})'"
                :block="true"
              />
            </div>
            
            <h4>电子密度重构：</h4>
            <div class="equation-block">
              <KatexElement 
                :expression="'\\rho(\\mathbf{r}) = \\sum_{i=1}^N |\\psi_i(\\mathbf{r})|^2'"
                :block="true"
              />
            </div>
          </div>
        </div>

        <div class="effective-potential">
          <h3>有效势的构成</h3>
          <div class="potential-breakdown">
            <div class="equation-block">
              <KatexElement 
                :expression="'V_{\\text{eff}}(\\mathbf{r}) = V_{\\text{ext}}(\\mathbf{r}) + V_H(\\mathbf{r}) + V_{\\text{xc}}(\\mathbf{r})'"
                :block="true"
              />
            </div>
            
            <div class="potential-components">
              <div class="component-card">
                <h4>外势 V<sub>ext</sub>(𝐫)</h4>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'V_{\\text{ext}}(\\mathbf{r}) = -\\sum_\\alpha \\frac{Z_\\alpha e^2}{4\\pi\\epsilon_0|\\mathbf{r} - \\mathbf{R}_\\alpha|}'"
                    :block="true"
                  />
                </div>
                <p>原子核的库仑势</p>
              </div>

              <div class="component-card">
                <h4>Hartree势 V<sub>H</sub>(𝐫)</h4>
                <div class="equation-block">
                    <KatexElement 
                      :expression="`T[\\rho] = \\frac{3}{10}(3\\pi^2)^{2/3}\\int \\rho(\\mathbf{r})^{5/3} d^3r`"
                      :block="true"
                    />
                </div>
                <p>电子密度的经典库仑排斥</p>
              </div>

              <div class="component-card">
                <h4>交换关联势 V<sub>xc</sub>(𝐫)</h4>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'V_{\\text{xc}}(\\mathbf{r}) = \\frac{\\delta E_{\\text{xc}}[\\rho]}{\\delta \\rho(\\mathbf{r})}'"
                    :block="true"
                  />
                </div>
                <p>包含所有量子多体效应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>交换关联泛函</h2>
        
        <div class="xc-overview">
          <h3>交换关联能的物理意义</h3>
          <div class="physics-explanation">
            <p>交换关联能 E<sub>xc</sub>[ρ] 包含了所有超出经典库仑相互作用的量子多体效应：</p>
            
            <div class="effect-grid">
              <div class="effect-card">
                <div class="effect-icon">🔄</div>
                <h4>交换能</h4>
                <p>由于泡利不相容原理，相同自旋的电子倾向于避开彼此，降低了系统能量</p>
              </div>
              
              <div class="effect-card">
                <div class="effect-icon">🤝</div>
                <h4>关联能</h4>
                <p>电子通过动态关联运动来最小化相互排斥，进一步降低系统能量</p>
              </div>
            </div>
            
            <div class="exact-decomposition">
              <h4>精确分解：</h4>
              <div class="equation-block">
                <KatexElement 
                  :expression="'E_{\\text{xc}}[\\rho] = (T[\\rho] - T_s[\\rho]) + (V_{\\text{ee}}[\\rho] - V_H[\\rho])'"
                  :block="true"
                />
              </div>
              <p>其中 T<sub>s</sub>[ρ] 是非相互作用系统的动能</p>
            </div>
          </div>
        </div>

        <div class="approximations-section">
          <h3>常用的交换关联泛函近似</h3>
          
          <div class="approximation-ladder">
            <div class="approx-level">
              <div class="level-header">
                <h4>局域密度近似 (LDA)</h4>
                <span class="level-tag">Level 1</span>
              </div>
              <div class="level-content">
                <div class="equation-block">
                  <KatexElement 
                    :expression="'E_{\\text{xc}}^{\\text{LDA}}[\\rho] = \\int \\rho(\\mathbf{r})\\varepsilon_{\\text{xc}}(\\rho(\\mathbf{r}))d^3r'"
                    :block="true"
                  />
                </div>
                <p><strong>假设：</strong>每点的交换关联能密度只依赖于该点的电子密度</p>
                <p><strong>适用：</strong>密度变化缓慢的系统（如简单金属）</p>
                <p><strong>精度：</strong>键长误差 ~2-5%，结合能误差 ~20-50%</p>
              </div>
            </div>

            <div class="approx-level">
              <div class="level-header">
                <h4>广义梯度近似 (GGA)</h4>
                <span class="level-tag">Level 2</span>
              </div>
              <div class="level-content">
                <div class="equation-block">
                  <KatexElement 
                    :expression="'E_{\\text{xc}}^{\\text{GGA}}[\\rho] = \\int \\rho(\\mathbf{r})\\varepsilon_{\\text{xc}}(\\rho(\\mathbf{r}), |\\nabla\\rho(\\mathbf{r})|)d^3r'"
                    :block="true"
                  />
                </div>
                <p><strong>改进：</strong>考虑密度梯度的影响</p>
                <p><strong>代表：</strong>PBE, BLYP, PW91</p>
                <p><strong>精度：</strong>键长误差 ~1-3%，结合能误差 ~10-20%</p>
              </div>
            </div>

            <div class="approx-level">
              <div class="level-header">
                <h4>杂化泛函 (Hybrid)</h4>
                <span class="level-tag">Level 3</span>
              </div>
              <div class="level-content">
                <div class="equation-block">
                  <KatexElement 
                    :expression="'E_{\\text{xc}}^{\\text{Hybrid}} = aE_x^{\\text{HF}} + (1-a)E_x^{\\text{DFT}} + E_c^{\\text{DFT}}'"
                    :block="true"
                  />
                </div>
                <p><strong>思想：</strong>混合精确的Hartree-Fock交换和DFT关联</p>
                <p><strong>代表：</strong>B3LYP (a=0.2), PBE0 (a=0.25)</p>
                <p><strong>精度：</strong>显著改善分子性质和能隙预测</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>自洽场求解过程</h2>
        
        <div class="scf-procedure">
          <div class="procedure-icon">🔄</div>
          <h3>自洽场迭代算法</h3>
          
          <div class="algorithm-steps">
            <div class="step-card">
              <div class="step-number">1</div>
              <div class="step-content">
                <h4>初始猜测</h4>
                <p>给出初始电子密度 ρ⁽⁰⁾(𝐫)</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\rho^{(0)}(\\mathbf{r}) = \\sum_\\alpha \\rho_\\alpha^{\\text{atom}}(|\\mathbf{r} - \\mathbf{R}_\\alpha|)'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">2</div>
              <div class="step-content">
                <h4>构造有效势</h4>
                <p>根据当前密度计算有效势</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'V_{\\text{eff}}^{(n)}(\\mathbf{r}) = V_{\\text{ext}}(\\mathbf{r}) + V_H[\\rho^{(n)}] + V_{\\text{xc}}[\\rho^{(n)}]'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">3</div>
              <div class="step-content">
                <h4>求解KS方程</h4>
                <p>对角化Kohn-Sham哈密顿量</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\hat{H}_{\\text{KS}}\\psi_i^{(n+1)} = \\varepsilon_i^{(n+1)}\\psi_i^{(n+1)}'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">4</div>
              <div class="step-content">
                <h4>更新密度</h4>
                <p>从新的轨道构造新密度</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\rho^{(n+1)}(\\mathbf{r}) = \\sum_{i=1}^N |\\psi_i^{(n+1)}(\\mathbf{r})|^2'"
                    :block="true"
                  />
                </div>
              </div>
            </div>

            <div class="step-card">
              <div class="step-number">5</div>
              <div class="step-content">
                <h4>检查收敛</h4>
                <p>判断是否达到自洽</p>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\int |\\rho^{(n+1)}(\\mathbf{r}) - \\rho^{(n)}(\\mathbf{r})|d^3r < \\text{tolerance}'"
                    :block="true"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="convergence-techniques">
            <h4>加速收敛技术：</h4>
            <div class="technique-grid">
              <div class="technique-card">
                <h5>密度混合</h5>
                <div class="equation-block">
                  <KatexElement 
                    :expression="'\\rho_{\\text{mix}}^{(n+1)} = \\alpha\\rho^{(n+1)} + (1-\\alpha)\\rho^{(n)}'"
                    :block="true"
                  />
                </div>
              </div>
              
              <div class="technique-card">
                <h5>DIIS方法</h5>
                <p>Direct Inversion in Iterative Subspace</p>
              </div>
              
              <div class="technique-card">
                <h5>Broyden方法</h5>
                <p>准牛顿优化算法</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DFT的应用实例</h2>
        
        <div class="applications-showcase">
          <div class="application-example">
            <div class="example-icon">💎</div>
            <h3>硅晶体的电子结构</h3>
            <div class="example-content">
              <h4>计算设置：</h4>
              <ul>
                <li><strong>晶体结构：</strong>金刚石结构，空间群 Fd3̄m</li>
                <li><strong>交换关联泛函：</strong>PBE-GGA</li>
                <li><strong>赝势：</strong>模守恒赝势</li>
                <li><strong>截断能：</strong>30 Ry</li>
                <li><strong>k点网格：</strong>8×8×8 Monkhorst-Pack</li>
              </ul>
              
              <h4>主要结果：</h4>
              <div class="results-table">
                <table>
                  <thead>
                    <tr>
                      <th>性质</th>
                      <th>DFT-PBE</th>
                      <th>实验值</th>
                      <th>误差</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>晶格常数 (Å)</td>
                      <td>5.47</td>
                      <td>5.43</td>
                      <td>+0.7%</td>
                    </tr>
                    <tr>
                      <td>体模量 (GPa)</td>
                      <td>88</td>
                      <td>98</td>
                      <td>-10%</td>
                    </tr>
                    <tr>
                      <td>带隙 (eV)</td>
                      <td>0.67</td>
                      <td>1.17</td>
                      <td>-43%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div class="insight-box">
                <h5>🔍 物理洞察：</h5>
                <p>DFT-GGA在预测结构性质方面表现良好，但系统性地低估半导体和绝缘体的带隙，这是DFT的已知局限性。</p>
              </div>
            </div>
          </div>

          <div class="application-example">
            <div class="example-icon">🧪</div>
            <h3>水分子的几何优化</h3>
            <div class="example-content">
              <h4>计算细节：</h4>
              <ul>
                <li><strong>泛函：</strong>B3LYP杂化泛函</li>
                <li><strong>基组：</strong>6-311++G(d,p)</li>
                <li><strong>优化算法：</strong>BFGS</li>
                <li><strong>收敛标准：</strong>力 < 10⁻⁴ Hartree/Bohr</li>
              </ul>
              
              <h4>优化结果：</h4>
              <div class="geometry-results">
                <div class="parameter-item">
                  <span class="param-name">O-H键长：</span>
                  <span class="param-value">0.958 Å (实验: 0.957 Å)</span>
                </div>
                <div class="parameter-item">
                  <span class="param-name">H-O-H键角：</span>
                  <span class="param-value">104.3° (实验: 104.5°)</span>
                </div>
                <div class="parameter-item">
                  <span class="param-name">偶极矩：</span>
                  <span class="param-value">1.87 D (实验: 1.85 D)</span>
                </div>
              </div>
            </div>
          </div>

          <div class="application-example">
            <div class="example-icon">⚡</div>
            <h3>催化反应的过渡态搜索</h3>
            <div class="example-content">
              <h4>反应体系：</h4>
              <p>CO在Pt(111)表面的氧化反应：CO + O → CO₂</p>
              
              <h4>计算方法：</h4>
              <ul>
                <li><strong>表面模型：</strong>4×4超胞，4层Pt原子</li>
                <li><strong>过渡态搜索：</strong>Nudged Elastic Band (NEB)</li>
                <li><strong>泛函：</strong>PW91-GGA + vdW修正</li>
              </ul>
              
              <h4>能量剖面：</h4>
              <div class="energy-profile">
                <div class="state-item">
                  <span class="state-name">初态 (CO + O)：</span>
                  <span class="state-energy">0.00 eV</span>
                </div>
                <div class="state-item">
                  <span class="state-name">过渡态：</span>
                  <span class="state-energy">+0.84 eV</span>
                </div>
                <div class="state-item">
                  <span class="state-name">终态 (CO₂)：</span>
                  <span class="state-energy">-1.23 eV</span>
                </div>
              </div>
              
              <div class="reaction-insight">
                <h5>🔬 反应机理：</h5>
                <p>计算表明CO氧化反应遵循Langmuir-Hinshelwood机理，活化能垒为0.84 eV，与实验测得的温度程序脱附谱一致。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>DFT的优势与局限性</h2>
        
        <div class="pros-cons-analysis">
          <div class="pros-section">
            <div class="section-icon">✅</div>
            <h3>主要优势</h3>
            <div class="advantage-grid">
              <div class="advantage-card">
                <h4>计算效率</h4>
                <p>将N体问题简化为N个单体问题，计算复杂度从指数级降为多项式级</p>
              </div>
              
              <div class="advantage-card">
                <h4>系统规模</h4>
                <p>可处理包含数百至数千原子的大型系统</p>
              </div>
              
              <div class="advantage-card">
                <h4>普适性</h4>
                <p>适用于分子、表面、固体等各种体系</p>
              </div>
              
              <div class="advantage-card">
                <h4>预测能力</h4>
                <p>能够预测结构、振动、电子性质等多种物理量</p>
              </div>
            </div>
          </div>

          <div class="cons-section">
            <div class="section-icon">⚠️</div>
            <h3>主要局限性</h3>
            <div class="limitation-grid">
              <div class="limitation-card">
                <h4>带隙问题</h4>
                <p>系统性低估半导体和绝缘体的带隙</p>
                <div class="solution-hint">
                  <strong>解决方案：</strong>杂化泛函、GW方法
                </div>
              </div>
              
              <div class="limitation-card">
                <h4>van der Waals相互作用</h4>
                <p>标准泛函无法正确描述长程色散力</p>
                <div class="solution-hint">
                  <strong>解决方案：</strong>vdW修正、非局域泛函
                </div>
              </div>
              
              <div class="limitation-card">
                <h4>强关联系统</h4>
                <p>对于d、f电子强关联系统描述不准确</p>
                <div class="solution-hint">
                  <strong>解决方案：</strong>DFT+U、杂化泛函
                </div>
              </div>
              
              <div class="limitation-card">
                <h4>激发态</h4>
                <p>基态理论，无法直接计算激发态性质</p>
                <div class="solution-hint">
                  <strong>解决方案：</strong>TDDFT、ΔSCF方法
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary-section">
        <h2>本节要点总结</h2>
        <div class="summary-grid">
          <div class="summary-item">
            <h4>🏛️ 理论基础</h4>
            <p>Hohenberg-Kohn定理建立了电子密度与系统性质的一一对应关系</p>
          </div>
          <div class="summary-item">
            <h4>🔧 实用框架</h4>
            <p>Kohn-Sham方程将多体问题转化为有效的单体问题</p>
          </div>
          <div class="summary-item">
            <h4>🎯 核心挑战</h4>
            <p>交换关联泛函的近似是DFT精度的关键限制因素</p>
          </div>
          <div class="summary-item">
            <h4>🔄 计算流程</h4>
            <p>自洽场迭代求解确保密度与有效势的一致性</p>
          </div>
          <div class="summary-item">
            <h4>🌟 广泛应用</h4>
            <p>从分子到固体，从催化到材料设计的广泛成功应用</p>
          </div>
          <div class="summary-item">
            <h4>⚖️ 优劣并存</h4>
            <p>计算效率高但在某些物理现象描述上存在系统性误差</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import KatexElement from '../KatexElement.vue'

export default {
  name: 'Chapter2_1_3',
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
  border-bottom: 3px solid #9b59b6;
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
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
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
  background: linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%);
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
  border-bottom: 2px solid #9b59b6;
}

.theorem-card, .ks-framework, .application-example {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  border: 1px solid #e9ecef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.theorem-card:hover, .ks-framework:hover, .application-example:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.theorem-icon, .framework-icon, .procedure-icon, .example-icon, .section-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
  display: block;
}

.theorem-card h3, .ks-framework h3, .application-example h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.theorem-content, .framework-content, .example-content {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.theorem-statement {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  border-left: 4px solid #9b59b6;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.proof-sketch {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  border-left: 4px solid #27ae60;
}

.assumption-box {
  background: linear-gradient(135deg, #fdcb6e 0%, #e17055 100%);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-style: italic;
}

.potential-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.component-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #3498db;
}

.component-card h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.effect-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.effect-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  border: 2px solid #ddd;
}

.effect-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.approximation-ladder {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.approx-level {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.level-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.level-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
}

.level-content {
  padding: 1.5rem;
}

.algorithm-steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

.step-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.step-number {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.technique-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.technique-card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.technique-card h5 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.results-table, .comparison-table {
  width: 100%;
  overflow-x: auto;
  margin: 1rem 0;
}

.results-table table, .comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.results-table th, .comparison-table th {
  background: #9b59b6;
  color: white;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
}

.results-table td, .comparison-table td {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.results-table tr:hover, .comparison-table tr:hover {
  background: #f8f9fa;
}

.insight-box, .reaction-insight {
  background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  margin-top: 1rem;
}

.geometry-results, .energy-profile {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
}

.parameter-item, .state-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.param-name, .state-name {
  font-weight: 600;
  color: #2c3e50;
}

.param-value, .state-energy {
  color: #666;
}

.pros-cons-analysis {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

.pros-section, .cons-section {
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.pros-section h3 {
  color: #27ae60;
  border-bottom: 2px solid #27ae60;
  padding-bottom: 0.5rem;
}

.cons-section h3 {
  color: #e74c3c;
  border-bottom: 2px solid #e74c3c;
  padding-bottom: 0.5rem;
}

.advantage-grid, .limitation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.advantage-card {
  background: #e8f5e8;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #27ae60;
}

.limitation-card {
  background: #ffeaea;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e74c3c;
}

.advantage-card h4, .limitation-card h4 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.solution-hint {
  background: rgba(52, 152, 219, 0.1);
  padding: 0.5rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  font-size: 0.9rem;
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
  
  .potential-components, .effect-grid, .technique-grid, .advantage-grid, .limitation-grid {
    grid-template-columns: 1fr;
  }
  
  .pros-cons-analysis {
    grid-template-columns: 1fr;
  }
  
  .theorem-card, .ks-framework, .application-example {
    padding: 1.5rem;
  }
  
  .step-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>