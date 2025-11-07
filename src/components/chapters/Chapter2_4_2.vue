<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4.2 发散与重整化</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子场论</span>
        <span class="chapter-tag">重整化</span>
        <span class="reading-time">预计阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>🌟 重整化理论概述</h2>
        <p class="lead-text">
          在量子场论和多体物理中，微扰计算经常遇到发散问题。重整化理论提供了处理这些发散的系统方法，
          不仅解决了计算中的技术困难，更深刻地揭示了物理系统在不同能量标度下的行为规律。
        </p>
      </section>

      <section class="historical-development">
        <h2>📚 历史发展与重要贡献</h2>
        <div class="historical-content">
          <div class="pioneers-section">
            <h3>🏆 重整化理论的奠基者</h3>
            <div class="pioneers-grid">
              <div class="pioneer-card">
                <div class="pioneer-info">
                  <h4>Murray Gell-Mann (1929-2019)</h4>
                  <p class="pioneer-contribution">
                    <strong>主要贡献：</strong>夸克理论、强相互作用的重整化、量子色动力学的发展
                  </p>
                  <div class="key-insights">
                    <p>• 提出了夸克模型，解释了强子的内部结构</p>
                    <p>• 发展了强相互作用的重整化理论</p>
                    <p>• 建立了量子色动力学(QCD)的理论基础</p>
                  </div>
                </div>
              </div>
              
              <div class="pioneer-card">
                <div class="pioneer-info">
                  <h4>Keith Brueckner (1924-2014)</h4>
                  <p class="pioneer-contribution">
                    <strong>主要贡献：</strong>多体理论、核物理中的重整化、Brueckner理论
                  </p>
                  <div class="key-insights">
                    <p>• 发展了核物质的多体理论</p>
                    <p>• 建立了处理强关联系统的重整化方法</p>
                    <p>• 提出了著名的Brueckner-Hartree-Fock理论</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="gell-mann-brueckner-theory">
            <h3>🔬 Gell-Mann与Brueckner的重整化理论</h3>
            <div class="theory-content">
              <p class="theory-intro">
                从数学形式来看，为了数值的微扰理论的发散意味着，原则上可以计算第二阶
                二跃迁等高阶微扰的修正，虽然具体计算存在发散复杂，但重要的是Coulomb相互
                作用V = e²/r，因此二阶微扰计算由T₀ → 0导致的发散，这高阶的微扰计算已存
                在类似的发散行为。
              </p>

              <div class="historical-portraits">
                <h4>🎭 理论奠基者肖像</h4>
                <div class="portraits-grid">
                  <div class="portrait-card gell-mann">
                    <div class="portrait-info">
                      <h5>Murray Gell-Mann (1929-2019)</h5>
                      <p class="portrait-description">
                        诺贝尔物理学奖得主，夸克理论的提出者，在强相互作用和重整化理论方面做出了开创性贡献。
                        他的工作为现代粒子物理学奠定了坚实的理论基础。
                      </p>
                      <div class="key-contributions">
                        <p><strong>主要贡献：</strong></p>
                        <ul>
                          <li>提出夸克模型，解释强子内部结构</li>
                          <li>发展量子色动力学(QCD)理论框架</li>
                          <li>建立强相互作用的重整化理论</li>
                          <li>推进多体系统的微扰理论发展</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="portrait-card brueckner">
                    <div class="portrait-info">
                      <h5>Keith Brueckner (1924-2014)</h5>
                      <p class="portrait-description">
                        美国理论物理学家，在核物理和多体理论领域做出了杰出贡献。
                        他发展的Brueckner理论成为处理强关联系统的重要工具。
                      </p>
                      <div class="key-contributions">
                        <p><strong>主要贡献：</strong></p>
                        <ul>
                          <li>建立核物质的多体理论框架</li>
                          <li>发展Brueckner-Hartree-Fock理论</li>
                          <li>创建处理强关联系统的重整化方法</li>
                          <li>推进量子多体问题的求解技术</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="mathematical-framework">
                <h4>📊 数学框架与发散处理</h4>
                <div class="equation-block">
                  <p><strong>能量修正的一般形式：</strong></p>
                  <div class="math-display">
                    $$\frac{E_n}{N} \simeq \left[\frac{2.21}{r_s^2} - \frac{0.916}{r_s} + 0.062\ln r_s - 0.093 + O(r_s \ln r_s)\right] \frac{e^2}{2a_B}$$
                  </div>
                  <p class="equation-note">
                    注意到对数项ln r_s的出现表明存在r_s → 0时是非解析的，这就解释了直接微扰
                    计算的发散原因，而要解决，上面这个公式对很小的r_s是足够准确的。
                  </p>
                </div>

                <div class="divergence-analysis">
                  <h4>🎯 发散分析与物理意义</h4>
                  <div class="physics-insight">
                    <p><strong>对数发散的起源：</strong></p>
                    <ul>
                      <li>库仑相互作用的长程性质导致的红外发散</li>
                      <li>费米海中电子-电子散射的奇异性</li>
                      <li>准粒子寿命在费米面附近的发散行为</li>
                    </ul>
                  </div>
                  
                  <div class="renormalization-procedure">
                    <p><strong>重整化程序：</strong></p>
                    <div class="procedure-steps">
                      <div class="step">
                        <span class="step-number">1</span>
                        <div class="step-content">
                          <h5>识别发散项</h5>
                          <p>分析微扰展开中的奇异行为，特别是对数项和幂次发散</p>
                        </div>
                      </div>
                      
                      <div class="step">
                        <span class="step-number">2</span>
                        <div class="step-content">
                          <h5>引入正规化参数</h5>
                          <p>使用截断参数或维数正规化来控制发散</p>
                        </div>
                      </div>
                      
                      <div class="step">
                        <span class="step-number">3</span>
                        <div class="step-content">
                          <h5>重新定义物理量</h5>
                          <p>通过反项吸收发散，重新定义有效参数</p>
                        </div>
                      </div>
                      
                      <div class="step">
                        <span class="step-number">4</span>
                        <div class="step-content">
                          <h5>建立重整化群方程</h5>
                          <p>研究物理量在不同能量标度下的演化行为</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="divergence-types-section">
        <h2>📊 发散的类型与起源</h2>
        <div class="divergence-grid">
          <div class="divergence-card uv-divergence">
            <div class="divergence-icon">🔬</div>
            <h3>紫外发散 (UV Divergence)</h3>
            <div class="divergence-content">
              <h4>物理起源：</h4>
              <div class="equation-block">
                <p>高动量积分发散：∫₀^∞ k³dk → ∞</p>
                <p>短距离物理的贡献</p>
              </div>
              
              <h4>典型例子：</h4>
              <div class="physics-insight">
                <p><strong>自能修正：</strong>Σ(k) ∝ ∫ d⁴q G(q)V(k-q)</p>
                <p><strong>顶点修正：</strong>Γ(k₁,k₂,k₃) 的高阶项</p>
                <p><strong>真空极化：</strong>Π(q) 的圈图贡献</p>
              </div>
              
              <h4>正规化方法：</h4>
              <div class="equation-block">
                <p>Pauli-Villars: 引入辅助场</p>
                <p>维数正规化: d = 4-ε 维</p>
                <p>动量截断: Λ → ∞</p>
              </div>
            </div>
          </div>

          <div class="divergence-card ir-divergence">
            <div class="divergence-icon">🌊</div>
            <h3>红外发散 (IR Divergence)</h3>
            <div class="divergence-content">
              <h4>物理起源：</h4>
              <div class="equation-block">
                <p>低动量积分发散：∫₀ᵋ k dk/k → ln(ε)</p>
                <p>长距离物理的贡献</p>
              </div>
              
              <h4>典型情况：</h4>
              <div class="physics-insight">
                <p><strong>无质量粒子：</strong>光子、声子的长波长模式</p>
                <p><strong>临界现象：</strong>相变点附近的关联长度发散</p>
                <p><strong>费米面奇异性：</strong>准粒子寿命的发散</p>
              </div>
              
              <h4>处理方法：</h4>
              <div class="equation-block">
                <p>红外截断: 引入小质量 m</p>
                <p>重整化群: 研究标度行为</p>
                <p>有效理论: 低能物理描述</p>
              </div>
            </div>
          </div>

          <div class="divergence-card collinear-divergence">
            <div class="divergence-icon">📐</div>
            <h3>共线发散 (Collinear Divergence)</h3>
            <div class="divergence-content">
              <h4>物理起源：</h4>
              <div class="equation-block">
                <p>粒子动量平行时的奇异性</p>
                <p>相空间测度的退化</p>
              </div>
              
              <h4>数学表现：</h4>
              <div class="physics-insight">
                <p><strong>角度积分：</strong>∫ dΩ/(1-cos θ) → ∞</p>
                <p><strong>Feynman图：</strong>软光子发射过程</p>
                <p><strong>质量壳条件：</strong>p² = m² 的约束</p>
              </div>
              
              <h4>消除机制：</h4>
              <div class="equation-block">
                <p>KLN定理: 虚实抵消</p>
                <p>因子化: 硬软分离</p>
                <p>PDF演化: 部分子分布函数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="regularization-section">
        <h2>🔧 正规化方法</h2>
        <div class="regularization-methods">
          <div class="method-card dimensional-reg">
            <h3>🌐 维数正规化</h3>
            <div class="method-content">
              <h4>基本思想：</h4>
              <div class="equation-block">
                <p>d = 4 - ε 维时空</p>
                <p>∫ d^d k → μ^ε ∫ d^d k</p>
                <p>ε → 0 时提取发散</p>
              </div>
              
              <h4>优势特点：</h4>
              <div class="physics-insight">
                <p><strong>规范不变性：</strong>保持所有对称性</p>
                <p><strong>计算简便：</strong>Γ函数的解析性质</p>
                <p><strong>MS方案：</strong>最小减除方案</p>
              </div>
              
              <h4>典型计算：</h4>
              <div class="calculation-step">
                <h4>一圈积分：</h4>
                <div class="equation-block">
                  <p>I = ∫ d^d k/(k² + m²)</p>
                  <p>= π^(d/2) Γ(1-d/2)/Γ(1) · m^(d-2)</p>
                  <p>= π^(2-ε/2) Γ(ε/2)/m^ε</p>
                  <p>≈ π²[2/ε - γ + ln(4π) + ln(m²/μ²)]</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-card pauli-villars">
            <h3>⚛️ Pauli-Villars正规化</h3>
            <div class="method-content">
              <h4>基本方法：</h4>
              <div class="equation-block">
                <p>引入辅助场：质量 Λ → ∞</p>
                <p>G(k) → G(k) - G_Λ(k)</p>
                <p>保持物理对称性</p>
              </div>
              
              <h4>实现步骤：</h4>
              <div class="physics-insight">
                <p><strong>Step 1：</strong>识别发散的Feynman图</p>
                <p><strong>Step 2：</strong>引入截断参数Λ</p>
                <p><strong>Step 3：</strong>构造收敛的积分</p>
                <p><strong>Step 4：</strong>取Λ → ∞ 极限</p>
              </div>
              
              <h4>应用示例：</h4>
              <div class="calculation-step">
                <h4>电子自能：</h4>
                <div class="equation-block">
                  <p>Σ(p) = -ie² ∫ d⁴k γμ G(p-k) γμ D(k)</p>
                  <p>正规化后：Σ_reg(p) = Σ(p) - Σ_Λ(p)</p>
                  <p>物理结果：δm = Σ_reg(m)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-card momentum-cutoff">
            <h3>✂️ 动量截断</h3>
            <div class="method-content">
              <h4>直接方法：</h4>
              <div class="equation-block">
                <p>∫₀^∞ dk → ∫₀^Λ dk</p>
                <p>硬截断：θ(Λ - |k|)</p>
                <p>软截断：e^(-k²/Λ²)</p>
              </div>
              
              <h4>优缺点分析：</h4>
              <div class="physics-insight">
                <p><strong>优点：</strong>物理直观，计算简单</p>
                <p><strong>缺点：</strong>破坏Lorentz不变性</p>
                <p><strong>应用：</strong>凝聚态物理中的有效理论</p>
              </div>
              
              <h4>改进方案：</h4>
              <div class="calculation-step">
                <h4>协变截断：</h4>
                <div class="equation-block">
                  <p>f(k²) = 1/(1 + k²/Λ²)^n</p>
                  <p>保持相对论协变性</p>
                  <p>n 足够大确保收敛</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="renormalization-procedure">
        <h2>🔄 重整化程序</h2>
        <div class="renormalization-steps">
          <div class="step-card step-1">
            <div class="step-number">1</div>
            <h3>识别发散</h3>
            <div class="step-content">
              <h4>发散度分析：</h4>
              <div class="equation-block">
                <p>超发散度：D = 4L - 2I_F - I_B</p>
                <p>L: 圈数，I_F: 费米子线，I_B: 玻色子线</p>
              </div>
              
              <h4>幂次计数：</h4>
              <div class="physics-insight">
                <p><strong>可重整理论：</strong>只有有限个发散类型</p>
                <p><strong>超可重整：</strong>D < 0，无发散</p>
                <p><strong>不可重整：</strong>无限个发散类型</p>
              </div>
            </div>
          </div>

          <div class="step-card step-2">
            <div class="step-number">2</div>
            <h3>正规化计算</h3>
            <div class="step-content">
              <h4>选择正规化方案：</h4>
              <div class="equation-block">
                <p>维数正规化：ε = 4 - d</p>
                <p>提取极点：1/ε 项</p>
                <p>有限部分：f(μ, 外参数)</p>
              </div>
              
              <h4>计算流程：</h4>
              <div class="physics-insight">
                <p><strong>Step 2.1：</strong>计算正规化的Feynman积分</p>
                <p><strong>Step 2.2：</strong>展开到所需阶数</p>
                <p><strong>Step 2.3：</strong>识别发散结构</p>
              </div>
            </div>
          </div>

          <div class="step-card step-3">
            <div class="step-number">3</div>
            <h3>反项构造</h3>
            <div class="step-content">
              <h4>反项拉格朗日量：</h4>
              <div class="equation-block">
                <p>ℒ_ct = δZ_ψ ψ̄(i∂̸ - m₀)ψ + δZ_A A_μ F^μν F_μν + ...</p>
                <p>抵消发散的局域项</p>
              </div>
              
              <h4>重整化常数：</h4>
              <div class="physics-insight">
                <p><strong>波函数重整化：</strong>Z_ψ = 1 + δZ_ψ</p>
                <p><strong>质量重整化：</strong>m = Z_m m₀</p>
                <p><strong>耦合常数重整化：</strong>g = Z_g g₀</p>
              </div>
            </div>
          </div>

          <div class="step-card step-4">
            <div class="step-number">4</div>
            <h3>重整化条件</h3>
            <div class="step-content">
              <h4>减除方案：</h4>
              <div class="equation-block">
                <p>MS方案：只减除 1/ε 极点</p>
                <p>MS̄方案：减除 1/ε - γ + ln(4π)</p>
                <p>在壳方案：物理质量处定义</p>
              </div>
              
              <h4>重整化点：</h4>
              <div class="physics-insight">
                <p><strong>标度μ：</strong>任意能量标度</p>
                <p><strong>物理独立性：</strong>可观测量与μ无关</p>
                <p><strong>β函数：</strong>描述耦合常数的跑动</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="rg-equations-section">
        <h2>📈 重整化群方程</h2>
        <div class="rg-content">
          <div class="rg-card beta-function">
            <h3>🌀 β函数与跑动耦合</h3>
            <div class="rg-theory">
              <h4>定义与性质：</h4>
              <div class="equation-block">
                <p>β(g) = μ ∂g/∂μ |_{g₀,Λ固定}</p>
                <p>描述耦合常数的能量依赖</p>
              </div>
              
              <h4>微扰展开：</h4>
              <div class="calculation-step">
                <h4>QED中的β函数：</h4>
                <div class="equation-block">
                  <p>β(e) = e³/(12π²) + O(e⁵)</p>
                  <p>β > 0：紫外自由</p>
                  <p>α(μ) = α(μ₀)/[1 - α(μ₀)ln(μ²/μ₀²)/(3π)]</p>
                </div>
              </div>
              
              <h4>QCD中的渐近自由：</h4>
              <div class="physics-insight">
                <p><strong>一圈结果：</strong>β₀ = -(11N_c - 2N_f)/12π</p>
                <p><strong>N_c = 3, N_f < 17：</strong>β₀ < 0</p>
                <p><strong>高能行为：</strong>α_s(μ) → 0 as μ → ∞</p>
              </div>
            </div>
          </div>

          <div class="rg-card anomalous-dimension">
            <h3>🎭 反常维度</h3>
            <div class="rg-theory">
              <h4>场的反常维度：</h4>
              <div class="equation-block">
                <p>γ_ψ(g) = μ ∂ln Z_ψ/∂μ |_{g₀,Λ固定}</p>
                <p>偏离经典标度维度</p>
              </div>
              
              <h4>算符的反常维度：</h4>
              <div class="calculation-step">
                <h4>复合算符：</h4>
                <div class="equation-block">
                  <p>O_i^{ren} = Z_{ij} O_j^{bare}</p>
                  <p>γ_{ij} = μ ∂ln Z_{ij}/∂μ</p>
                  <p>混合矩阵：非对角化</p>
                </div>
              </div>
              
              <h4>物理意义：</h4>
              <div class="physics-insight">
                <p><strong>标度破缺：</strong>量子修正改变标度行为</p>
                <p><strong>临界指数：</strong>相变点的普适性</p>
                <p><strong>深度非弹性散射：</strong>结构函数的演化</p>
              </div>
            </div>
          </div>

          <div class="rg-card callan-symanzik">
            <h3>📊 Callan-Symanzik方程</h3>
            <div class="rg-theory">
              <h4>基本方程：</h4>
              <div class="equation-block">
                <p>[μ∂/∂μ + β(g)∂/∂g + nγ_ψ(g)]G^{(n)} = 0</p>
                <p>Green函数的重整化群方程</p>
              </div>
              
              <h4>解的结构：</h4>
              <div class="calculation-step">
                <h4>特征线方法：</h4>
                <div class="equation-block">
                  <p>dt/dτ = 1, dg/dτ = β(g)</p>
                  <p>g(t) = 跑动耦合常数</p>
                  <p>G^{(n)}(μ,g) = G^{(n)}(μ₀,g₀) exp[-n∫γ_ψ dt]</p>
                </div>
              </div>
              
              <h4>渐近行为：</h4>
              <div class="physics-insight">
                <p><strong>不动点：</strong>β(g*) = 0</p>
                <p><strong>临界行为：</strong>g → g* 的渐近</p>
                <p><strong>标度律：</strong>幂律行为的预测</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications-section">
        <h2>🎯 重整化的应用</h2>
        <div class="applications-grid">
          <div class="application-card qed-application">
            <div class="application-icon">⚡</div>
            <h3>量子电动力学 (QED)</h3>
            <div class="application-content">
              <h4>历史意义：</h4>
              <div class="physics-insight">
                <p><strong>Lamb移位：</strong>氢原子能级的量子修正</p>
                <p><strong>反常磁矩：</strong>电子g因子的精确计算</p>
                <p><strong>真空极化：</strong>光子传播子的修正</p>
              </div>
              
              <h4>现代发展：</h4>
              <div class="equation-block">
                <p>精度达到 10⁻¹² 量级</p>
                <p>理论与实验的完美符合</p>
                <p>标准模型的基石</p>
              </div>
            </div>
          </div>

          <div class="application-card qcd-application">
            <div class="application-icon">🌈</div>
            <h3>量子色动力学 (QCD)</h3>
            <div class="application-content">
              <h4>渐近自由：</h4>
              <div class="physics-insight">
                <p><strong>高能行为：</strong>夸克胶子等离子体</p>
                <p><strong>微扰QCD：</strong>硬过程的计算</p>
                <p><strong>喷注物理：</strong>强子化过程</p>
              </div>
              
              <h4>非微扰现象：</h4>
              <div class="equation-block">
                <p>色禁闭：夸克的束缚</p>
                <p>手征对称性破缺：质量生成</p>
                <p>拓扑效应：瞬子贡献</p>
              </div>
            </div>
          </div>

          <div class="application-card condensed-matter">
            <div class="application-icon">🔬</div>
            <h3>凝聚态物理</h3>
            <div class="application-content">
              <h4>临界现象：</h4>
              <div class="physics-insight">
                <p><strong>Wilson理论：</strong>相变的普适性</p>
                <p><strong>ε展开：</strong>临界指数的计算</p>
                <p><strong>标度假设：</strong>有限尺寸标度</p>
              </div>
              
              <h4>量子相变：</h4>
              <div class="equation-block">
                <p>费米液体理论的修正</p>
                <p>非费米液体行为</p>
                <p>量子临界点</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="modern-developments">
        <h2>🚀 现代发展与前沿</h2>
        <div class="modern-grid">
          <div class="modern-card holographic">
            <h3>🌌 全息重整化</h3>
            <div class="modern-content">
              <h4>AdS/CFT对应：</h4>
              <div class="physics-insight">
                <p><strong>几何重整化：</strong>额外维度的物理意义</p>
                <p><strong>全息流：</strong>边界理论的重整化群流</p>
                <p><strong>强耦合系统：</strong>非微扰方法</p>
              </div>
            </div>
          </div>

          <div class="modern-card machine-learning">
            <h3>🤖 机器学习重整化</h3>
            <div class="modern-content">
              <h4>新兴方法：</h4>
              <div class="physics-insight">
                <p><strong>神经网络：</strong>自动识别相变</p>
                <p><strong>深度学习：</strong>有效理论的构造</p>
                <p><strong>变分方法：</strong>量子多体系统</p>
              </div>
            </div>
          </div>

          <div class="modern-card quantum-gravity">
            <h3>🌠 量子引力</h3>
            <div class="modern-content">
              <h4>挑战与机遇：</h4>
              <div class="physics-insight">
                <p><strong>非重整化性：</strong>广义相对论的困难</p>
                <p><strong>有效场论：</strong>低能量子引力</p>
                <p><strong>弦理论：</strong>紫外完备性</p>
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
            <p><strong>发散问题：</strong>量子场论中不可避免的技术困难</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p><strong>正规化：</strong>使发散积分有意义的数学技巧</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p><strong>重整化：</strong>消除发散并保持物理预测能力</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p><strong>重整化群：</strong>描述物理系统的标度行为</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p><strong>普适性：</strong>不同系统的共同标度性质</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4_2',
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
  border-bottom: 3px solid #6c5ce7;
}

.chapter-title {
  font-size: 2.8rem;
  color: #2d3436;
  margin-bottom: 1rem;
  font-weight: 700;
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
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
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(108, 92, 231, 0.3);
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
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f4fd 100%);
  padding: 2.5rem;
  border-radius: 20px;
  margin-bottom: 3rem;
  border: 2px solid #a29bfe;
  box-shadow: 0 10px 30px rgba(108, 92, 231, 0.1);
}

.introduction h2 {
  color: #6c5ce7;
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

.divergence-types-section {
  margin-bottom: 4rem;
}

.divergence-types-section h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #fd79a8;
}

.divergence-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.divergence-card {
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.divergence-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.uv-divergence {
  background: linear-gradient(135deg, #fff5f5 0%, #ffe8e8 100%);
  border-color: #ff6b6b;
}

.uv-divergence:hover {
  border-color: #ff5252;
}

.ir-divergence {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2ff 100%);
  border-color: #4ecdc4;
}

.ir-divergence:hover {
  border-color: #26d0ce;
}

.collinear-divergence {
  background: linear-gradient(135deg, #f8fff8 0%, #e8ffe8 100%);
  border-color: #55a3ff;
}

.collinear-divergence:hover {
  border-color: #3d8bfd;
}

.divergence-icon {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
}

.divergence-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 600;
}

.uv-divergence h3 {
  color: #d63031;
}

.ir-divergence h3 {
  color: #00b894;
}

.collinear-divergence h3 {
  color: #0984e3;
}

.divergence-content h4 {
  color: #2d3436;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.equation-block {
  background: white;
  padding: 1.2rem;
  border-radius: 10px;
  border-left: 4px solid #6c5ce7;
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

.regularization-section {
  margin-bottom: 4rem;
}

.regularization-section h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #00b894;
}

.regularization-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.method-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.method-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.dimensional-reg {
  border-left: 5px solid #6c5ce7;
}

.pauli-villars {
  border-left: 5px solid #fd79a8;
}

.momentum-cutoff {
  border-left: 5px solid #fdcb6e;
}

.method-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
}

.method-content h4 {
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

.renormalization-procedure {
  margin-bottom: 4rem;
}

.renormalization-procedure h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #e17055;
}

.renormalization-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.step-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
  position: relative;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.step-number {
  position: absolute;
  top: -15px;
  left: 20px;
  background: linear-gradient(135deg, #e17055 0%, #fd79a8 100%);
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 15px rgba(225, 112, 85, 0.3);
}

.step-card h3 {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-size: 1.3rem;
  font-weight: 600;
}

.step-content h4 {
  color: #636e72;
  margin: 1.5rem 0 0.8rem 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.rg-equations-section {
  margin-bottom: 4rem;
}

.rg-equations-section h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #a29bfe;
}

.rg-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.rg-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #e9ecef;
  transition: all 0.3s ease;
}

.rg-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.beta-function {
  border-left: 5px solid #6c5ce7;
}

.anomalous-dimension {
  border-left: 5px solid #fd79a8;
}

.callan-symanzik {
  border-left: 5px solid #00b894;
}

.rg-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-weight: 600;
}

.rg-theory h4 {
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
  border-bottom: 3px solid #fdcb6e;
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

.qed-application {
  border-left: 5px solid #e17055;
}

.qcd-application {
  border-left: 5px solid #00b894;
}

.condensed-matter {
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

.modern-developments {
  margin-bottom: 4rem;
}

.modern-developments h2 {
  color: #2d3436;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 3px solid #fd79a8;
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
  background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
  color: white;
  padding: 2.5rem;
  border-radius: 20px;
  margin-top: 3rem;
  box-shadow: 0 15px 35px rgba(108, 92, 231, 0.3);
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
  
  .divergence-grid,
  .regularization-methods,
  .renormalization-steps,
  .rg-content,
  .applications-grid,
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
}
</style>