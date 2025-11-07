<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.3 Hartree-Fock平均场近似</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">平均场理论</span>
        <span class="chapter-tag">多体系统</span>
        <span class="reading-time">预计阅读时间: 50分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>🌟 平均场理论概述</h2>
        <p class="lead-text">
          Hartree-Fock方法是处理多体量子系统的基本理论框架，通过平均场近似将复杂的多体问题转化为有效的单体问题。
          这一方法不仅为理解原子、分子和固体的电子结构奠定了基础，也为现代密度泛函理论等先进方法提供了重要的理论起点。
        </p>
      </section>

      <section class="many-body-problem-section">
        <h2>🧩 多体问题的挑战</h2>
        <div class="problem-grid">
          <div class="problem-card complexity">
            <div class="problem-icon">🌀</div>
            <h3>指数复杂性</h3>
            <div class="problem-content">
              <h4>维度灾难：</h4>
              <div class="equation-block">
                <p>N个粒子系统：3N维配置空间</p>
                <p>波函数：Ψ(r₁,r₂,...,rₙ)</p>
                <p>计算复杂度：O(e^N)</p>
              </div>
              
              <h4>实际例子：</h4>
              <div class="physics-insight">
                <p><strong>氢分子：</strong>2个电子，6维问题</p>
                <p><strong>苯分子：</strong>42个电子，126维问题</p>
                <p><strong>蛋白质：</strong>~10⁴个电子，不可求解</p>
              </div>
              
              <h4>近似的必要性：</h4>
              <div class="equation-block">
                <p>精确解：仅限于H原子、H₂⁺离子</p>
                <p>数值解：最多几十个电子</p>
                <p>近似方法：唯一的实用途径</p>
              </div>
            </div>
          </div>

          <div class="problem-card correlation">
            <div class="problem-icon">🔗</div>
            <h3>电子关联效应</h3>
            <div class="problem-content">
              <h4>库仑相互作用：</h4>
              <div class="equation-block" v-pre>
                <p>V̂ₑₑ = ∑ᵢ<ⱼ e²/(4πε₀|rᵢ-rⱼ|)</p>
                <p>长程、非局域相互作用</p>
                <p>无法分离变量</p>
              </div>
              
              <h4>关联类型：</h4>
              <div class="physics-insight">
                <p><strong>库仑关联：</strong>电荷排斥导致的空间关联</p>
                <p><strong>交换关联：</strong>Pauli原理导致的自旋关联</p>
                <p><strong>动力学关联：</strong>电子运动的协调性</p>
              </div>
              
              <h4>关联能：</h4>
              <div class="equation-block">
                <p>E_corr = E_exact - E_HF</p>
                <p>典型值：~1-10% 总能量</p>
                <p>化学精度：~1 kcal/mol</p>
              </div>
            </div>
          </div>

          <div class="problem-card antisymmetry">
            <div class="problem-icon">🔄</div>
            <h3>反对称性约束</h3>
            <div class="problem-content">
              <h4>Pauli原理：</h4>
              <div class="equation-block">
                <p>Ψ(r₁σ₁,...,rᵢσᵢ,rⱼσⱼ,...,rₙσₙ)</p>
                <p>= -Ψ(r₁σ₁,...,rⱼσⱼ,rᵢσᵢ,...,rₙσₙ)</p>
                <p>费米子波函数的反对称性</p>
              </div>
              
              <h4>Slater行列式：</h4>
              <div class="physics-insight">
                <p><strong>自动满足：</strong>反对称性要求</p>
                <p><strong>单行列式：</strong>Hartree-Fock近似</p>
                <p><strong>多行列式：</strong>组态相互作用方法</p>
              </div>
              
              <h4>交换积分：</h4>
              <div class="equation-block">
                <p>K_ij = ∫ φᵢ*(r₁)φⱼ*(r₂) (e²/r₁₂) φⱼ(r₁)φᵢ(r₂) dr₁dr₂</p>
                <p>非经典的量子效应</p>
                <p>降低系统总能量</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="hartree-fock-theory">
        <h2>⚛️ Hartree-Fock理论框架</h2>
        <div class="hf-theory-content">
          
          <div class="detailed-hf-analysis">
            <h3>🔬 Hartree-Fock方程的详细推导</h3>
            <div class="derivation-content">
              <div class="energy-functional">
                <h4>📊 能量泛函与变分原理</h4>
                <div class="equation-block">
                  <p><strong>总能量表达式：</strong></p>
                  <div class="math-display">
                    $$\Delta E = \langle A \rangle + A - \langle A \rangle\langle B \rangle + B - \langle B \rangle = \langle A \rangle + \Delta A + \langle B \rangle + \Delta B$$
                  </div>
                  <p class="equation-note">
                    这里A和B表示系统中不同的物理量，⟨⟩表示期望值，Δ表示涨落。
                  </p>
                </div>

                <div class="hartree-fock-approximation">
                  <h4>🎯 Hartree-Fock平均场近似</h4>
                  <div class="approximation-details">
                    <p><strong>基本思想：</strong></p>
                    <p>
                      对于一个电子系统，通过求解有效单电子方程来处理多体问题。
                      每个电子在其他所有电子产生的平均场中运动，这样就将复杂的多体问题
                      转化为一系列耦合的单体问题。
                    </p>

                    <div class="equation-block">
                      <p><strong>平均场近似下的能量修正：</strong></p>
                      <div class="math-display">
                        $$\Delta E = \langle A \rangle B + \langle A \rangle \Delta B + \langle B \rangle \Delta A + \Delta A \Delta B$$
                      </div>
                      <p class="equation-note">
                        在平均场近似中，我们忽略涨落项的乘积ΔA·ΔB，这是Hartree-Fock理论的核心近似。
                      </p>
                    </div>

                    <div class="detailed-derivation">
                      <h5>📐 详细推导过程</h5>
                      <div class="derivation-steps">
                        <div class="derivation-step">
                          <h6>步骤1：哈密顿量分解</h6>
                          <div class="math-display" v-pre>
                            $$\hat{H} = \sum_i \hat{h}_i + \sum_{i&lt;j} \frac{e^2}{|\mathbf{r}_i - \mathbf{r}_j|}$$
                          </div>
                          <p>其中第一项是单电子项，第二项是电子-电子相互作用项。</p>
                        </div>

                        <div class="derivation-step">
                          <h6>步骤2：Slater行列式波函数</h6>
                          <div class="math-display" v-pre>
                            $$\Psi_{HF} = \frac{1}{\sqrt{N!}} \det[\phi_1(\mathbf{r}_1) \phi_2(\mathbf{r}_2) \cdots \phi_N(\mathbf{r}_N)]$$
                          </div>
                          <p>使用单个Slater行列式来近似多电子波函数。</p>
                        </div>

                        <div class="derivation-step">
                          <h6>步骤3：能量期望值计算</h6>
                          <div class="math-display" v-pre>
                            $$E_{HF} = \langle \Psi_{HF} | \hat{H} | \Psi_{HF} \rangle = \sum_i h_i + \sum_{i&lt;j} (J_{ij} - K_{ij})$$
                          </div>
                          <p>其中J_{ij}是库仑积分，K_{ij}是交换积分。</p>
                        </div>

                        <div class="derivation-step">
                          <h6>步骤4：变分条件</h6>
                          <div class="math-display" v-pre>
                            $$\frac{\delta E_{HF}}{\delta \phi_i^*} = 0 \quad \text{约束条件：} \langle \phi_i | \phi_j \rangle = \delta_{ij}$$
                          </div>
                          <p>通过变分原理得到最优轨道。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="correlation-analysis">
                  <h4>🔗 电子关联效应的处理</h4>
                  <div class="correlation-content">
                    <p><strong>Hartree项与Fock项的物理意义：</strong></p>
                    
                    <div class="hartree-term">
                      <h5>Hartree项 (库仑排斥)</h5>
                      <div class="math-display">
                        $$H_{ij} = \int \phi_i^*(\mathbf{r}_1) \phi_j(\mathbf{r}_1) \frac{e^2}{|\mathbf{r}_1 - \mathbf{r}_2|} \phi_i(\mathbf{r}_2) \phi_j^*(\mathbf{r}_2) d\mathbf{r}_1 d\mathbf{r}_2$$
                      </div>
                      <p>描述电子间的经典库仑排斥相互作用，对应于电荷密度的直接相互作用。</p>
                    </div>

                    <div class="fock-term">
                      <h5>Fock项 (交换相互作用)</h5>
                      <div class="math-display">
                        $$K_{ij} = \int \phi_i^*(\mathbf{r}_1) \phi_j(\mathbf{r}_1) \frac{e^2}{|\mathbf{r}_1 - \mathbf{r}_2|} \phi_j(\mathbf{r}_2) \phi_i^*(\mathbf{r}_2) d\mathbf{r}_1 d\mathbf{r}_2$$
                      </div>
                      <p>源于波函数的反对称性，是纯量子效应，降低同自旋电子的相互作用能。</p>
                    </div>

                    <div class="physical-interpretation">
                      <h5>物理图像</h5>
                      <div class="interpretation-grid">
                        <div class="interpretation-item">
                          <strong>Hartree项：</strong>
                          <p>每个电子感受到其他电子电荷密度产生的平均静电势</p>
                        </div>
                        <div class="interpretation-item">
                          <strong>Fock项：</strong>
                          <p>同自旋电子由于Pauli原理而相互"排斥"，形成交换空穴</p>
                        </div>
                        <div class="interpretation-item">
                          <strong>自洽性：</strong>
                          <p>每个电子的轨道依赖于所有其他电子的轨道，需要迭代求解</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="self-consistent-field">
                <h4>🔄 自洽场方程</h4>
                <div class="scf-content">
                  <p><strong>Hartree-Fock方程的最终形式：</strong></p>
                  <div class="equation-block">
                    <div class="math-display">
                      $$\hat{f} \phi_i = \epsilon_i \phi_i$$
                    </div>
                    <p class="equation-note">
                      其中$\hat{f}$是Fock算符，$\epsilon_i$是轨道能量，$\phi_i$是分子轨道。
                    </p>
                  </div>

                  <div class="fock-operator">
                    <h5>Fock算符的构成</h5>
                    <div class="math-display">
                      $$\hat{f} = \hat{h} + \sum_j (\hat{J}_j - \hat{K}_j)$$
                    </div>
                    <div class="operator-components">
                      <div class="component">
                        <strong>单电子算符：</strong>
                        <div class="math-display">
                          $$\hat{h} = -\frac{1}{2}\nabla^2 - \sum_A \frac{Z_A}{|\mathbf{r} - \mathbf{R}_A|}$$
                        </div>
                      </div>
                      <div class="component">
                        <strong>库仑算符：</strong>
                        <div class="math-display">
                          $$\hat{J}_j \phi_i(\mathbf{r}_1) = \left[\int \frac{|\phi_j(\mathbf{r}_2)|^2}{|\mathbf{r}_1 - \mathbf{r}_2|} d\mathbf{r}_2\right] \phi_i(\mathbf{r}_1)$$
                        </div>
                      </div>
                      <div class="component">
                        <strong>交换算符：</strong>
                        <div class="math-display">
                          $$\hat{K}_j \phi_i(\mathbf{r}_1) = \left[\int \frac{\phi_j^*(\mathbf{r}_2) \phi_i(\mathbf{r}_2)}{|\mathbf{r}_1 - \mathbf{r}_2|} d\mathbf{r}_2\right] \phi_j(\mathbf{r}_1)$$
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="scf-procedure">
                    <h5>自洽场迭代过程</h5>
                    <div class="procedure-steps">
                      <div class="step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                          <strong>初始猜测：</strong>选择初始轨道$\{\phi_i^{(0)}\}$
                        </div>
                      </div>
                      <div class="step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                          <strong>构建Fock矩阵：</strong>计算$F_{ij}^{(n)} = \langle \phi_i^{(n)} | \hat{f}^{(n)} | \phi_j^{(n)} \rangle$
                        </div>
                      </div>
                      <div class="step">
                        <span class="step-number">3</span>
                        <div class="step-content">
                          <strong>求解本征方程：</strong>$\mathbf{F}^{(n)} \mathbf{C}^{(n+1)} = \mathbf{S} \mathbf{C}^{(n+1)} \boldsymbol{\epsilon}^{(n+1)}$
                        </div>
                      </div>
                      <div class="step">
                        <span class="step-number">4</span>
                        <div class="step-content">
                          <strong>更新轨道：</strong>$\phi_i^{(n+1)} = \sum_\mu C_{\mu i}^{(n+1)} \chi_\mu$
                        </div>
                      </div>
                      <div class="step">
                        <span class="step-number">5</span>
                        <div class="step-content">
                          <strong>检查收敛：</strong>如果$|E^{(n+1)} - E^{(n)}| < \text{阈值}$，则收敛；否则返回步骤2
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="convergence-criteria">
                    <h5>收敛判据</h5>
                    <div class="criteria-list">
                      <div class="criterion">
                        <strong>能量收敛：</strong>
                        <div class="math-display">$$|E^{(n+1)} - E^{(n)}| < 10^{-6} \text{ hartree}$$</div>
                      </div>
                      <div class="criterion">
                        <strong>密度矩阵收敛：</strong>
                        <div class="math-display">$$\max_{ij} |P_{ij}^{(n+1)} - P_{ij}^{(n)}| < 10^{-8}$$</div>
                      </div>
                      <div class="criterion">
                        <strong>Fock矩阵收敛：</strong>
                        <div class="math-display">$$\|\mathbf{F}^{(n+1)} - \mathbf{F}^{(n)}\| < 10^{-8}$$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="electron-density-analysis">
                <h4>🌊 电子密度与密度矩阵</h4>
                <div class="density-content">
                  <div class="equation-block">
                    <p><strong>电子密度的定义：</strong></p>
                    <div class="math-display">
                      $$\varepsilon(k) = \frac{k^2}{2m} + \frac{1}{V} \sum_{k'} \frac{4\pi e^2}{|k - k'|^2} \langle c_{k'\sigma'}^{\dagger} c_{k'\sigma'} \rangle$$
                    </div>
                  </div>
                  
                  <div class="physics-insight">
                    <p><strong>物理意义：</strong></p>
                    <ul>
                      <li>第一项：动能贡献，描述自由电子的色散关系</li>
                      <li>第二项：Hartree项，描述电子间的平均库仑相互作用</li>
                      <li>⟨c†c⟩：电子占据数的期望值，在平均场近似下为常数</li>
                    </ul>
                  </div>

                  <div class="hartree-approximation">
                    <h4>🎯 Hartree近似的具体形式</h4>
                    <div class="equation-block">
                      <p><strong>其中第二项可以进一步展开：</strong></p>
                      <div class="math-display">
                        $$-\varepsilon_c(k) = \frac{1}{V} \sum_{k'} \frac{4\pi e^2}{|k - k'|^2} \langle c_{k'\sigma'}^{\dagger} c_{k'\sigma'} \rangle$$
                      </div>
                      <p class="equation-note">
                        这里εc(k)表示由于库仑相互作用导致的能量修正，它依赖于所有其他电子的平均分布。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="theory-card variational-principle">
            <h3>🎯 变分原理</h3>
            <div class="theory-content">
              <h4>基本思想：</h4>
              <div class="equation-block">
                <p>E₀ ≤ ⟨Ψ_trial|Ĥ|Ψ_trial⟩/⟨Ψ_trial|Ψ_trial⟩</p>
                <p>试探波函数给出能量上界</p>
                <p>最优波函数使能量最小</p>
              </div>
              
              <h4>Hartree-Fock试探函数：</h4>
              <div class="calculation-step">
                <h4>单Slater行列式：</h4>
                <div class="equation-block">
                  <p>|Ψ_HF⟩ = |φ₁φ₂...φₙ⟩</p>
                  <p>= (1/√N!) det[φᵢ(rⱼσⱼ)]</p>
                  <p>N个最低能量轨道的乘积</p>
                </div>
              </div>
              
              <h4>变分条件：</h4>
              <div class="physics-insight">
                <p><strong>轨道正交性：</strong>⟨φᵢ|φⱼ⟩ = δᵢⱼ</p>
                <p><strong>能量最小化：</strong>δE/δφᵢ* = 0</p>
                <p><strong>自洽条件：</strong>轨道由自身产生的场决定</p>
              </div>
            </div>
          </div>

          <div class="theory-card hf-equations">
            <h3>📐 Hartree-Fock方程</h3>
            <div class="theory-content">
              <h4>Fock算符：</h4>
              <div class="equation-block">
                <p>F̂ᵢ = ĥᵢ + ∑ⱼ(Ĵⱼ - K̂ⱼ)</p>
                <p>ĥᵢ: 单电子哈密顿量</p>
                <p>Ĵⱼ, K̂ⱼ: Coulomb和交换算符</p>
              </div>
              
              <h4>本征值方程：</h4>
              <div class="calculation-step">
                <h4>轨道方程：</h4>
                <div class="equation-block">
                  <p>F̂ᵢφᵢ = εᵢφᵢ</p>
                  <p>εᵢ: 轨道能量</p>
                  <p>φᵢ: 分子轨道</p>
                </div>
              </div>
              
              <h4>算符定义：</h4>
              <div class="physics-insight">
                <p><strong>Coulomb算符：</strong>Ĵⱼφᵢ(r) = [∫|φⱼ(r')|²/|r-r'|dr']φᵢ(r)</p>
                <p><strong>交换算符：</strong>K̂ⱼφᵢ(r) = [∫φⱼ*(r')φᵢ(r')/|r-r'|dr']φⱼ(r)</p>
                <p><strong>非局域性：</strong>交换算符的积分核特性</p>
              </div>
            </div>
          </div>

          <div class="theory-card scf-procedure">
            <h3>🔄 自洽场程序</h3>
            <div class="theory-content">
              <h4>迭代求解：</h4>
              <div class="equation-block">
                <p>φᵢ^(n+1) = F̂[φⱼ^(n)]φᵢ^(n+1)</p>
                <p>Fock算符依赖于轨道本身</p>
                <p>需要迭代至收敛</p>
              </div>
              
              <h4>收敛判据：</h4>
              <div class="calculation-step">
                <h4>能量收敛：</h4>
                <div class="equation-block">
                  <p>|E^(n+1) - E^(n)| < 10⁻⁶ Hartree</p>
                  <p>密度矩阵收敛：||P^(n+1) - P^(n)|| < 10⁻⁸</p>
                  <p>轨道收敛：max|φᵢ^(n+1) - φᵢ^(n)| < 10⁻⁶</p>
                </div>
              </div>
              
              <h4>加速技术：</h4>
              <div class="physics-insight">
                <p><strong>DIIS方法：</strong>直接反演迭代子空间</p>
                <p><strong>阻尼技术：</strong>F^(n+1) = αF^(n+1) + (1-α)F^(n)</p>
                <p><strong>级别移位：</strong>改善收敛性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="energy-analysis">
        <h2>⚡ 能量分析与物理图像</h2>
        <div class="energy-components">
          <div class="energy-card kinetic-energy">
            <h3>🏃 动能贡献</h3>
            <div class="energy-content">
              <h4>单电子动能：</h4>
              <div class="equation-block">
                <p>T = ∑ᵢ⟨φᵢ|-½∇²|φᵢ⟩</p>
                <p>电子的量子动能</p>
                <p>轨道局域化降低动能</p>
              </div>
              
              <h4>物理意义：</h4>
              <div class="physics-insight">
                <p><strong>量子压力：</strong>Heisenberg不确定性原理</p>
                <p><strong>轨道弥散：</strong>降低动能但增加势能</p>
                <p><strong>平衡点：</strong>总能量最小化</p>
              </div>
            </div>
          </div>

          <div class="energy-card nuclear-attraction">
            <h3>⚡ 核吸引能</h3>
            <div class="energy-content">
              <h4>电子-核相互作用：</h4>
              <div class="equation-block">
                <p>V_ne = ∑ᵢ∑_A⟨φᵢ|-Z_A/|r-R_A||φᵢ⟩</p>
                <p>Z_A: 核电荷数</p>
                <p>R_A: 核坐标</p>
              </div>
              
              <h4>物理图像：</h4>
              <div class="physics-insight">
                <p><strong>库仑吸引：</strong>稳定化电子</p>
                <p><strong>轨道收缩：</strong>靠近核降低势能</p>
                <p><strong>屏蔽效应：</strong>内层电子的影响</p>
              </div>
            </div>
          </div>

          <div class="energy-card electron-repulsion">
            <h3>🔄 电子排斥能</h3>
            <div class="energy-content">
              <h4>Coulomb积分：</h4>
              <div class="equation-block">
                <p>J = ½∑ᵢⱼ⟨φᵢφⱼ|1/r₁₂|φᵢφⱼ⟩</p>
                <p>经典电荷排斥</p>
                <p>总是正值（不稳定）</p>
              </div>
              
              <h4>交换积分：</h4>
              <div class="calculation-step">
                <h4>量子交换效应：</h4>
                <div class="equation-block">
                  <p>K = -½∑ᵢⱼ⟨φᵢφⱼ|1/r₁₂|φⱼφᵢ⟩</p>
                  <p>反对称性的结果</p>
                  <p>总是负值（稳定化）</p>
                </div>
              </div>
              
              <h4>净效应：</h4>
              <div class="physics-insight">
                <p><strong>交换孔：</strong>同自旋电子相互回避</p>
                <p><strong>Fermi孔：</strong>降低电子排斥</p>
                <p><strong>自旋极化：</strong>Hund规则的起源</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="molecular-orbitals">
        <h2>🧬 分子轨道理论</h2>
        <div class="mo-theory-content">
          <div class="mo-card lcao-method">
            <h3>🔗 LCAO方法</h3>
            <div class="mo-content">
              <h4>线性组合：</h4>
              <div class="equation-block">
                <p>φᵢ = ∑_μ c_μᵢ χ_μ</p>
                <p>χ_μ: 原子轨道基函数</p>
                <p>c_μᵢ: 展开系数</p>
              </div>
              
              <h4>Roothaan方程：</h4>
              <div class="calculation-step">
                <h4>矩阵形式：</h4>
                <div class="equation-block">
                  <p>FC = SCε</p>
                  <p>F: Fock矩阵</p>
                  <p>S: 重叠矩阵</p>
                  <p>C: 系数矩阵</p>
                </div>
              </div>
              
              <h4>基函数选择：</h4>
              <div class="physics-insight">
                <p><strong>最小基组：</strong>每个原子轨道一个函数</p>
                <p><strong>双ζ基组：</strong>每个轨道两个函数</p>
                <p><strong>极化基组：</strong>添加高角动量函数</p>
                <p><strong>弥散基组：</strong>描述远程行为</p>
              </div>
            </div>
          </div>

          <div class="mo-card bonding-analysis">
            <h3>🤝 成键分析</h3>
            <div class="mo-content">
              <h4>轨道相互作用：</h4>
              <div class="equation-block">
                <p>E_± = (E_A + E_B ± 2β)/(1 ± S)</p>
                <p>β: 共振积分</p>
                <p>S: 重叠积分</p>
              </div>
              
              <h4>成键类型：</h4>
              <div class="calculation-step">
                <h4>σ成键：</h4>
                <div class="equation-block">
                  <p>轴向重叠：s-s, s-p_z, p_z-p_z</p>
                  <p>圆柱对称：绕键轴旋转不变</p>
                  <p>强相互作用：大重叠积分</p>
                </div>
                
                <h4>π成键：</h4>
                <div class="equation-block">
                  <p>侧向重叠：p_x-p_x, p_y-p_y</p>
                  <p>节面存在：通过键轴</p>
                  <p>弱相互作用：小重叠积分</p>
                </div>
              </div>
              
              <h4>反键轨道：</h4>
              <div class="physics-insight">
                <p><strong>节面增加：</strong>波函数符号相反</p>
                <p><strong>能量升高：</strong>不稳定化效应</p>
                <p><strong>电子填充：</strong>削弱化学键</p>
              </div>
            </div>
          </div>

          <div class="mo-card population-analysis">
            <h3>📊 布居分析</h3>
            <div class="mo-content">
              <h4>Mulliken分析：</h4>
              <div class="equation-block">
                <p>q_A = ∑_μ∈A ∑_ν P_μν S_μν</p>
                <p>P_μν: 密度矩阵元</p>
                <p>原子电荷的定义</p>
              </div>
              
              <h4>键级分析：</h4>
              <div class="calculation-step">
                <h4>Wiberg键级：</h4>
                <div class="equation-block">
                  <p>B_AB = ∑_μ∈A ∑_ν∈B (P_μν S_μν)²</p>
                  <p>描述化学键强度</p>
                  <p>单键≈1, 双键≈2, 三键≈3</p>
                </div>
              </div>
              
              <h4>自然轨道：</h4>
              <div class="physics-insight">
                <p><strong>自然布居分析：</strong>NPA方法</p>
                <p><strong>自然键轨道：</strong>NBO分析</p>
                <p><strong>电荷转移：</strong>供体-受体相互作用</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications-section">
        <h2>🎯 应用实例</h2>
        <div class="applications-grid">
          <div class="application-card molecules">
            <div class="application-icon">🧪</div>
            <h3>分子电子结构</h3>
            <div class="application-content">
              <h4>小分子计算：</h4>
              <div class="physics-insight">
                <p><strong>H₂分子：</strong>最简单的化学键</p>
                <p><strong>H₂O分子：</strong>弯曲几何的预测</p>
                <p><strong>NH₃分子：</strong>锥形结构与反演</p>
                <p><strong>CH₄分子：</strong>四面体对称性</p>
              </div>
              
              <h4>计算结果：</h4>
              <div class="data-table">
                <table>
                  <thead>
                    <tr><th>分子</th><th>键长(Å)</th><th>键角(°)</th><th>偶极矩(D)</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>H₂</td><td>0.74</td><td>-</td><td>0.0</td></tr>
                    <tr><td>H₂O</td><td>0.96</td><td>104.5</td><td>1.85</td></tr>
                    <tr><td>NH₃</td><td>1.01</td><td>106.7</td><td>1.47</td></tr>
                    <tr><td>CH₄</td><td>1.09</td><td>109.5</td><td>0.0</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="application-card solids">
            <div class="application-icon">💎</div>
            <h3>固体能带结构</h3>
            <div class="application-content">
              <h4>Bloch定理：</h4>
              <div class="physics-insight">
                <p><strong>周期性：</strong>ψ_k(r+R) = e^(ik·R)ψ_k(r)</p>
                <p><strong>能带形成：</strong>原子轨道的线性组合</p>
                <p><strong>布里渊区：</strong>k空间的第一布里渊区</p>
                <p><strong>费米面：</strong>金属与绝缘体的区别</p>
              </div>
              
              <h4>典型材料：</h4>
              <div class="equation-block">
                <p>硅：间接带隙半导体 (1.1 eV)</p>
                <p>锗：间接带隙半导体 (0.7 eV)</p>
                <p>GaAs：直接带隙半导体 (1.4 eV)</p>
                <p>铜：金属，部分填充d带</p>
              </div>
            </div>
          </div>

          <div class="application-card surfaces">
            <div class="application-icon">🏔️</div>
            <h3>表面与界面</h3>
            <div class="application-content">
              <h4>表面重构：</h4>
              <div class="physics-insight">
                <p><strong>悬挂键：</strong>表面原子的未饱和键</p>
                <p><strong>重构驱动力：</strong>降低表面能</p>
                <p><strong>Si(100)表面：</strong>二聚体形成</p>
                <p><strong>GaAs(110)表面：</strong>弛豫与重构</p>
              </div>
              
              <h4>吸附现象：</h4>
              <div class="equation-block">
                <p>物理吸附：van der Waals相互作用</p>
                <p>化学吸附：共价键形成</p>
                <p>吸附能：0.1-5 eV范围</p>
                <p>覆盖度依赖：相互作用效应</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="limitations-improvements">
        <h2>⚠️ 局限性与改进方法</h2>
        <div class="limitations-grid">
          <div class="limitation-card correlation-energy">
            <h3>🔍 电子关联缺失</h3>
            <div class="limitation-content">
              <h4>HF方法的不足：</h4>
              <div class="physics-insight">
                <p><strong>平均场近似：</strong>忽略瞬时关联</p>
                <p><strong>单行列式：</strong>无法描述多重激发</p>
                <p><strong>关联能缺失：</strong>~1-10%的总能量</p>
                <p><strong>化学精度：</strong>无法达到1 kcal/mol</p>
              </div>
              
              <h4>改进方法：</h4>
              <div class="equation-block">
                <p>组态相互作用：CI方法</p>
                <p>耦合簇理论：CC方法</p>
                <p>多体微扰理论：MP2, MP4</p>
                <p>密度泛函理论：DFT方法</p>
              </div>
            </div>
          </div>

          <div class="limitation-card self-interaction">
            <h3>⚡ 自相互作用误差</h3>
            <div class="limitation-content">
              <h4>问题描述：</h4>
              <div class="physics-insight">
                <p><strong>Coulomb自相互作用：</strong>电子与自身排斥</p>
                <p><strong>交换补偿：</strong>部分抵消但不完全</p>
                <p><strong>单电子系统：</strong>H原子能量误差</p>
                <p><strong>离子化能：</strong>系统性低估</p>
              </div>
              
              <h4>Koopmans定理：</h4>
              <div class="equation-block">
                <p>IP ≈ -ε_HOMO (近似关系)</p>
                <p>忽略轨道弛豫效应</p>
                <p>自相互作用误差的体现</p>
              </div>
            </div>
          </div>

          <div class="limitation-card dispersion">
            <h3>🌊 色散相互作用</h3>
            <div class="limitation-content">
              <h4>van der Waals力：</h4>
              <div class="physics-insight">
                <p><strong>瞬时偶极：</strong>电子关联的结果</p>
                <p><strong>长程吸引：</strong>R⁻⁶依赖性</p>
                <p><strong>HF缺失：</strong>无法描述色散</p>
                <p><strong>分子间相互作用：</strong>严重低估</p>
              </div>
              
              <h4>修正方案：</h4>
              <div class="equation-block">
                <p>DFT-D方法：经验色散修正</p>
                <p>vdW-DF泛函：非局域关联</p>
                <p>MP2方法：二阶微扰包含色散</p>
                <p>SAPT方法：对称性适配微扰</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="modern-developments">
        <h2>🚀 现代发展</h2>
        <div class="modern-grid">
          <div class="modern-card dft-connection">
            <h3>🔗 与DFT的联系</h3>
            <div class="modern-content">
              <h4>Kohn-Sham方程：</h4>
              <div class="physics-insight">
                <p><strong>形式相似：</strong>与HF方程类似结构</p>
                <p><strong>交换关联：</strong>V_xc替代交换算符</p>
                <p><strong>密度泛函：</strong>基于电子密度</p>
                <p><strong>计算效率：</strong>O(N³)标度</p>
              </div>
            </div>
          </div>

          <div class="modern-card hybrid-functionals">
            <h3>🎭 杂化泛函</h3>
            <div class="modern-content">
              <h4>HF交换的引入：</h4>
              <div class="physics-insight">
                <p><strong>B3LYP：</strong>20% HF交换</p>
                <p><strong>PBE0：</strong>25% HF交换</p>
                <p><strong>HSE06：</strong>短程HF交换</p>
                <p><strong>性能提升：</strong>更好的能隙预测</p>
              </div>
            </div>
          </div>

          <div class="modern-card machine-learning">
            <h3>🤖 机器学习</h3>
            <div class="modern-content">
              <h4>新兴应用：</h4>
              <div class="physics-insight">
                <p><strong>神经网络势：</strong>加速分子动力学</p>
                <p><strong>轨道预测：</strong>机器学习初猜</p>
                <p><strong>基函数优化：</strong>自适应基组</p>
                <p><strong>性质预测：</strong>跳过SCF计算</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>📝 本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p><strong>平均场近似：</strong>将多体问题转化为有效单体问题</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p><strong>变分原理：</strong>通过能量最小化确定最优轨道</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p><strong>自洽场：</strong>轨道由自身产生的平均场决定</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p><strong>交换效应：</strong>Pauli原理导致的量子效应</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p><strong>现代发展：</strong>DFT、杂化泛函和机器学习的结合</p>
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
  border-bottom: 3px solid #00b894;
}

.chapter-title {
  font-size: 2.8rem;
  color: #2d3436;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.chapter-tag {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 184, 148, 0.3);
}

.reading-time {
  color: #636e72;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 25px;
  border: 2px solid #e9ecef;
}

.introduction {
  background: linear-gradient(135deg, #f0fff4 0%, #e8f8f5 100%);
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 2px solid #00b894;
  box-shadow: 0 10px 30px rgba(0, 184, 148, 0.1);
}

.introduction h2 {
  color: #00b894;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.lead-text {
  font-size: 1.2rem;
  color: #2d3436;
  font-weight: 500;
  margin: 0;
  text-align: justify;
}

.many-body-problem-section {
  margin-bottom: 4rem;
}

.many-body-problem-section h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #e17055;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.problem-card {
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.problem-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.complexity {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
  border-color: #e17055;
}

.complexity:hover {
  border-color: #d63031;
}

.correlation {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2ff 100%);
  border-color: #0984e3;
}

.correlation:hover {
  border-color: #0056b3;
}

.antisymmetry {
  background: linear-gradient(135deg, #f8fff8 0%, #e8ffe8 100%);
  border-color: #00b894;
}

.antisymmetry:hover {
  border-color: #00a085;
}

.problem-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.problem-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}

.complexity h3 {
  color: #d63031;
}

.correlation h3 {
  color: #0984e3;
}

.antisymmetry h3 {
  color: #00b894;
}

.problem-content h4 {
  color: #2d3436;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.equation-block {
  background: white;
  padding: 1.2rem;
  border-radius: 10px;
  border-left: 4px solid #00b894;
  margin: 1rem 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.equation-block p {
  margin: 0.4rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  color: #2d3436;
}

.physics-insight {
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 1rem 0;
  border: 2px solid #28a745;
}

.physics-insight p {
  margin: 0.8rem 0;
  color: #155724;
}

.hartree-fock-theory {
  margin-bottom: 4rem;
}

.hartree-fock-theory h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #6c5ce7;
}

.hf-theory-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.theory-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.theory-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.variational-principle {
  border-left: 5px solid #6c5ce7;
}

.hf-equations {
  border-left: 5px solid #fd79a8;
}

.scf-procedure {
  border-left: 5px solid #fdcb6e;
}

.theory-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
}

.theory-content h4 {
  color: #636e72;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.calculation-step {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 1.5rem;
  margin: 1rem 0;
}

.calculation-step h4 {
  color: #495057;
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.energy-analysis {
  margin-bottom: 4rem;
}

.energy-analysis h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #fdcb6e;
}

.energy-components {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.energy-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.energy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.kinetic-energy {
  border-left: 5px solid #e17055;
}

.nuclear-attraction {
  border-left: 5px solid #00b894;
}

.electron-repulsion {
  border-left: 5px solid #6c5ce7;
}

.energy-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
}

.energy-content h4 {
  color: #636e72;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.molecular-orbitals {
  margin-bottom: 4rem;
}

.molecular-orbitals h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #a29bfe;
}

.mo-theory-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.mo-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.mo-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.lcao-method {
  border-left: 5px solid #6c5ce7;
}

.bonding-analysis {
  border-left: 5px solid #fd79a8;
}

.population-analysis {
  border-left: 5px solid #00b894;
}

.mo-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
}

.mo-content h4 {
  color: #636e72;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.applications-section {
  margin-bottom: 4rem;
}

.applications-section h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #fd79a8;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.application-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.application-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.molecules {
  border-left: 5px solid #e17055;
}

.solids {
  border-left: 5px solid #00b894;
}

.surfaces {
  border-left: 5px solid #6c5ce7;
}

.application-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.application-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
  text-align: center;
}

.application-content h4 {
  color: #636e72;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.data-table {
  margin: 1rem 0;
  overflow-x: auto;
}

.data-table table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.data-table th,
.data-table td {
  padding: 0.8rem;
  text-align: center;
  border-bottom: 1px solid #e9ecef;
}

.data-table th {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  font-weight: 600;
}

.data-table tr:nth-child(even) {
  background: #f8f9fa;
}

.data-table tr:hover {
  background: #e8f5e8;
}

.limitations-improvements {
  margin-bottom: 4rem;
}

.limitations-improvements h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #e17055;
}

.limitations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.limitation-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.limitation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.correlation-energy {
  border-left: 5px solid #e17055;
}

.self-interaction {
  border-left: 5px solid #fdcb6e;
}

.dispersion {
  border-left: 5px solid #6c5ce7;
}

.limitation-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
}

.limitation-content h4 {
  color: #636e72;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.modern-developments {
  margin-bottom: 4rem;
}

.modern-developments h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #a29bfe;
}

.modern-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.modern-card {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #a29bfe;
  transition: all 0.3s ease;
}

.modern-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(162, 155, 254, 0.2);
}

.modern-card h3 {
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: #6c5ce7;
  font-weight: 600;
}

.modern-content h4 {
  color: #2d3436;
  margin: 1rem 0 0.8rem 0;
  font-size: 1rem;
  font-weight: 600;
}

.summary {
  background: linear-gradient(135deg, #00b894 0%, #00cec9 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 20px;
  margin-top: 3rem;
  box-shadow: 0 15px 35px rgba(0, 184, 148, 0.3);
}

.summary h2 {
  color: white;
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  text-align: center;
}

.key-points {
  display: grid;
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
}

.point-number {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  flex-shrink: 0;
  font-size: 1.1rem;
}

.point-item p {
  margin: 0;
  flex: 1;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2.2rem;
  }
  
  .problem-grid,
  .hf-theory-content,
  .energy-components,
  .mo-theory-content,
  .applications-grid,
  .limitations-grid,
  .modern-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
  
  .data-table {
    font-size: 0.8rem;
  }
}
</style>