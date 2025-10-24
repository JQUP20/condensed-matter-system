<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">1.4 凝聚态物理的基本方程</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">数学基础</span>
        <span class="reading-time">预计阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>基本方程的重要性</h2>
        <p class="lead-text">
          凝聚态物理的基本方程构成了理解和描述凝聚态系统的数学基础。
          这些方程从量子力学的基本原理出发，结合统计力学和场论方法，
          为我们提供了分析复杂多体系统的强有力工具。
        </p>
      </section>

      <section class="content-section">
        <h2>薛定谔方程：量子力学基础</h2>
        <div class="equation-showcase">
          <div class="equation-card primary">
            <div class="equation-header">
              <h3>含时薛定谔方程</h3>
              <span class="equation-type">基础方程</span>
            </div>
            <div class="equation-body">
              <div class="equation-formula">
                i ℏ ∂|ψ⟩/∂t = Ĥ|ψ⟩
              </div>
              <div class="equation-description">
                <p><strong>物理意义：</strong>描述量子系统的时间演化</p>
                <div class="parameter-list">
                  <div class="parameter">
                    <span class="param-symbol">|ψ⟩</span>
                    <span class="param-desc">系统的量子态</span>
                  </div>
                  <div class="parameter">
                    <span class="param-symbol">Ĥ</span>
                    <span class="param-desc">系统的哈密顿算符</span>
                  </div>
                  <div class="parameter">
                    <span class="param-symbol">ℏ</span>
                    <span class="param-desc">约化普朗克常数</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="equation-card">
            <div class="equation-header">
              <h3>定态薛定谔方程</h3>
              <span class="equation-type">本征值方程</span>
            </div>
            <div class="equation-body">
              <div class="equation-formula">
                Ĥ|ψₙ⟩ = Eₙ|ψₙ⟩
              </div>
              <div class="equation-description">
                <p><strong>物理意义：</strong>求解系统的能量本征态和本征值</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体哈密顿量</h2>
        <div class="hamiltonian-breakdown">
          <div class="hamiltonian-card">
            <h3>一般形式</h3>
            <div class="equation-formula large">
              Ĥ = T̂ + V̂ + Ŵ
            </div>
            <div class="term-explanation">
              <div class="term-item">
                <h4>动能项 T̂</h4>
                <div class="equation-formula">
                  T̂ = Σᵢ p̂ᵢ²/(2m)
                </div>
                <p>粒子的动能贡献</p>
                <div class="detailed-explanation">
                  <h5>二次量子化形式：</h5>
                  <div class="equation-formula">T̂ = Σₖ εₖ c†ₖcₖ</div>
                  <p>其中 εₖ = ℏ²k²/(2m) 是自由粒子的色散关系</p>
                </div>
              </div>
              <div class="term-item">
                <h4>外势项 V̂</h4>
                <div class="equation-formula">
                  V̂ = Σᵢ V(r̂ᵢ)
                </div>
                <p>外部势场的作用</p>
                <div class="detailed-explanation">
                  <h5>常见外势类型：</h5>
                  <ul>
                    <li><strong>周期势：</strong> V(r) = V(r + R)，晶格势场</li>
                    <li><strong>磁场：</strong> V = -μ·B，塞曼效应</li>
                    <li><strong>电场：</strong> V = -eE·r，斯塔克效应</li>
                    <li><strong>应变场：</strong> 弹性形变引起的势场</li>
                  </ul>
                </div>
              </div>
              <div class="term-item">
                <h4>相互作用项 Ŵ</h4>
                <div class="equation-formula">
                  Ŵ = ½ Σᵢ≠ⱼ W(r̂ᵢ, r̂ⱼ)
                </div>
                <p>粒子间的相互作用</p>
                <div class="detailed-explanation">
                  <h5>主要相互作用类型：</h5>
                  <ul>
                    <li><strong>库仑相互作用：</strong> W(r) = e²/(4πε₀r)</li>
                    <li><strong>交换相互作用：</strong> 海森堡模型 J S⃗ᵢ·S⃗ⱼ</li>
                    <li><strong>偶极相互作用：</strong> 磁偶极、电偶极</li>
                    <li><strong>范德华力：</strong> 长程色散力</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="specific-models">
            <h3>重要的多体模型</h3>
            <div class="model-showcase">
              <div class="model-card">
                <h4>Hubbard模型</h4>
                <div class="equation-formula">
                  Ĥ = -t Σ_{⟨i,j⟩,σ} (c†ᵢσcⱼσ + h.c.) + U Σᵢ nᵢ↑nᵢ↓
                </div>
                <div class="model-description">
                  <p><strong>物理图像：</strong>强关联电子系统的最简模型</p>
                  <div class="parameter-details">
                    <div class="param-item">
                      <span class="param">t</span>: 跃迁积分，电子在格点间的跳跃
                    </div>
                    <div class="param-item">
                      <span class="param">U</span>: 在位库仑排斥，同一格点上的电子相互作用
                    </div>
                  </div>
                  <div class="applications">
                    <h5>主要应用：</h5>
                    <ul>
                      <li>高温超导体的理论研究</li>
                      <li>Mott绝缘体相变</li>
                      <li>量子磁性</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="model-card">
                <h4>海森堡模型</h4>
                <div class="equation-formula">
                  Ĥ = -J Σ_{⟨i,j⟩} S⃗ᵢ·S⃗ⱼ - h Σᵢ Sᵢᶻ
                </div>
                <div class="model-description">
                  <p><strong>物理图像：</strong>局域磁矩的交换相互作用</p>
                  <div class="parameter-details">
                    <div class="param-item">
                      <span class="param">J</span>: 交换积分，决定铁磁(J>0)或反铁磁(J<0)
                    </div>
                    <div class="param-item">
                      <span class="param">h</span>: 外磁场强度
                    </div>
                  </div>
                  <div class="applications">
                    <h5>重要变种：</h5>
                    <ul>
                      <li><strong>Ising模型：</strong> 只考虑z方向自旋</li>
                      <li><strong>XY模型：</strong> 只考虑xy平面自旋</li>
                      <li><strong>XXZ模型：</strong> 各向异性海森堡模型</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="model-card">
                <h4>Jellium模型</h4>
                <div class="equation-formula">
                  Ĥ = Σₖσ εₖ c†ₖσcₖσ + ½ Σₖ≠₀ Vₖ ρₖρ₋ₖ
                </div>
                <div class="model-description">
                  <p><strong>物理图像：</strong>均匀正电荷背景中的电子气</p>
                  <div class="parameter-details">
                    <div class="param-item">
                      <span class="param">ρₖ</span>: 电子密度的傅里叶分量
                    </div>
                    <div class="param-item">
                      <span class="param">Vₖ</span>: 库仑相互作用的傅里叶分量
                    </div>
                  </div>
                  <div class="applications">
                    <h5>理论意义：</h5>
                    <ul>
                      <li>费米液体理论的基础</li>
                      <li>等离激元的研究</li>
                      <li>金属电子性质的理解</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>重要的模型哈密顿量</h2>
        <div class="model-grid">
          <div class="model-card featured">
            <div class="model-header">
              <h3>Hubbard模型</h3>
              <span class="model-tag">强关联系统</span>
            </div>
            <div class="model-content">
              <div class="equation-formula">
                Ĥ = -t Σ⟨i,j⟩,σ (ĉᵢσ†ĉⱼσ + h.c.) + U Σᵢ n̂ᵢ↑n̂ᵢ↓
              </div>
              <div class="model-description">
                <p><strong>应用：</strong>描述强关联电子系统，如高温超导体</p>
                <div class="parameter-grid">
                  <div class="param-item">
                    <span class="param">t</span>
                    <span>跃迁积分</span>
                  </div>
                  <div class="param-item">
                    <span class="param">U</span>
                    <span>库仑排斥</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="model-card">
            <div class="model-header">
              <h3>Heisenberg模型</h3>
              <span class="model-tag">磁性系统</span>
            </div>
            <div class="model-content">
              <div class="equation-formula">
                Ĥ = J Σ⟨i,j⟩ Ŝᵢ · Ŝⱼ
              </div>
              <div class="model-description">
                <p><strong>应用：</strong>描述局域磁矩的相互作用</p>
                <div class="parameter-grid">
                  <div class="param-item">
                    <span class="param">J</span>
                    <span>交换耦合</span>
                  </div>
                  <div class="param-item">
                    <span class="param">Ŝᵢ</span>
                    <span>自旋算符</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="model-card">
            <div class="model-header">
              <h3>Holstein模型</h3>
              <span class="model-tag">电声耦合</span>
            </div>
            <div class="model-content">
              <div class="equation-formula">
                Ĥ = Ĥₑₗ + Ĥₚₕ + Ĥₑₗ₋ₚₕ
              </div>
              <div class="model-description">
                <p><strong>应用：</strong>电子与声子的耦合系统</p>
              </div>
            </div>
          </div>

          <div class="model-card">
            <div class="model-header">
              <h3>Anderson模型</h3>
              <span class="model-tag">杂质系统</span>
            </div>
            <div class="model-content">
              <div class="equation-formula">
                Ĥ = Ĥₕₒₛₜ + Ĥᵢₘₚ + Ĥₕᵧᵦ
              </div>
              <div class="model-description">
                <p><strong>应用：</strong>杂质在金属中的行为</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>统计力学基本方程</h2>
        <div class="statistical-mechanics-section">
          <div class="ensemble-theory">
            <h3>系综理论</h3>
            <div class="ensemble-cards">
              <div class="ensemble-card">
                <h4>微正则系综 (NVE)</h4>
                <div class="ensemble-content">
                  <div class="equation-formula">
                    Ω(N,V,E) = ∫ δ(H - E) d³ᴺr d³ᴺp / h³ᴺN!
                  </div>
                  <div class="ensemble-description">
                    <p><strong>特点：</strong>粒子数N、体积V、能量E固定</p>
                    <div class="thermodynamic-relations">
                      <h5>热力学关系：</h5>
                      <div class="relation-item">
                        <span class="relation">S = k_B ln Ω</span>
                        <span class="desc">熵的统计定义</span>
                      </div>
                      <div class="relation-item">
                        <span class="relation">1/T = ∂S/∂E</span>
                        <span class="desc">温度定义</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ensemble-card">
                <h4>正则系综 (NVT)</h4>
                <div class="ensemble-content">
                  <div class="equation-formula">
                    Z(N,V,T) = Tr[e^{-βĤ}] = Σₙ e^{-βEₙ}
                  </div>
                  <div class="ensemble-description">
                    <p><strong>特点：</strong>粒子数N、体积V、温度T固定</p>
                    <div class="thermodynamic-relations">
                      <h5>热力学关系：</h5>
                      <div class="relation-item">
                        <span class="relation">F = -k_BT ln Z</span>
                        <span class="desc">自由能</span>
                      </div>
                      <div class="relation-item">
                        <span class="relation">⟨E⟩ = -∂ln Z/∂β</span>
                        <span class="desc">平均能量</span>
                      </div>
                      <div class="relation-item">
                        <span class="relation">C_V = k_BT²∂²ln Z/∂T²</span>
                        <span class="desc">比热</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="ensemble-card">
                <h4>巨正则系综 (μVT)</h4>
                <div class="ensemble-content">
                  <div class="equation-formula">
                    Ξ(μ,V,T) = Tr[e^{-β(Ĥ-μN̂)}] = Σₙ e^{βμN}Z(N,V,T)
                  </div>
                  <div class="ensemble-description">
                    <p><strong>特点：</strong>化学势μ、体积V、温度T固定</p>
                    <div class="thermodynamic-relations">
                      <h5>热力学关系：</h5>
                      <div class="relation-item">
                        <span class="relation">Ω = -k_BT ln Ξ</span>
                        <span class="desc">巨势</span>
                      </div>
                      <div class="relation-item">
                        <span class="relation">⟨N⟩ = k_BT ∂ln Ξ/∂μ</span>
                        <span class="desc">平均粒子数</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="quantum-statistics">
            <h3>量子统计</h3>
            <div class="statistics-comparison">
              <div class="statistics-card">
                <h4>费米-狄拉克统计</h4>
                <div class="statistics-content">
                  <div class="equation-formula">
                    f(E) = 1/(e^{β(E-μ)} + 1)
                  </div>
                  <div class="statistics-description">
                    <p><strong>适用：</strong>费米子（电子、质子、中子等）</p>
                    <div class="key-features">
                      <h5>关键特征：</h5>
                      <ul>
                        <li>泡利不相容原理：每个态最多一个粒子</li>
                        <li>T=0时形成费米海</li>
                        <li>费米能级μ(T=0) = E_F</li>
                      </ul>
                    </div>
                    <div class="applications">
                      <h5>重要应用：</h5>
                      <ul>
                        <li>金属中的自由电子气</li>
                        <li>白矮星、中子星</li>
                        <li>半导体载流子统计</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="statistics-card">
                <h4>玻色-爱因斯坦统计</h4>
                <div class="statistics-content">
                  <div class="equation-formula">
                    n(E) = 1/(e^{β(E-μ)} - 1)
                  </div>
                  <div class="statistics-description">
                    <p><strong>适用：</strong>玻色子（光子、声子、α粒子等）</p>
                    <div class="key-features">
                      <h5>关键特征：</h5>
                      <ul>
                        <li>同一态可容纳任意多个粒子</li>
                        <li>低温时可发生玻色-爱因斯坦凝聚</li>
                        <li>化学势 μ ≤ 基态能量</li>
                      </ul>
                    </div>
                    <div class="applications">
                      <h5>重要应用：</h5>
                      <ul>
                        <li>黑体辐射（光子气）</li>
                        <li>晶格振动（声子气）</li>
                        <li>超流、超导现象</li>
                        <li>玻色-爱因斯坦凝聚态</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="stat-category">
            <h3>平衡态统计力学</h3>
            <div class="equation-set">
              <div class="equation-item">
                <h4>配分函数</h4>
                <div class="equation-formula">
                  Z = Tr[e^(-βĤ)]
                </div>
                <p>β = 1/(kᵦT)，描述系统的热力学性质</p>
              </div>
              <div class="equation-item">
                <h4>密度矩阵</h4>
                <div class="equation-formula">
                  ρ̂ = e^(-βĤ)/Z
                </div>
                <p>热平衡态的量子统计描述</p>
              </div>
              <div class="equation-item">
                <h4>期望值</h4>
                <div class="equation-formula">
                  ⟨Â⟩ = Tr[ρ̂Â]
                </div>
                <p>物理量的热力学平均值</p>
              </div>
            </div>
          </div>

          <div class="stat-category">
            <h3>非平衡态统计力学</h3>
            <div class="equation-set">
              <div class="equation-item">
                <h4>Liouville方程</h4>
                <div class="equation-formula">
                  ∂ρ̂/∂t = -i/ℏ [Ĥ, ρ̂]
                </div>
                <p>密度矩阵的时间演化</p>
              </div>
              <div class="equation-item">
                <h4>主方程</h4>
                <div class="equation-formula">
                  ∂ρ̂/∂t = -i/ℏ [Ĥ, ρ̂] + L̂[ρ̂]
                </div>
                <p>包含耗散效应的演化方程</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>格林函数方程</h2>
        <div class="greens-function-section">
          <div class="gf-intro">
            <h3>格林函数的定义</h3>
            <p>格林函数是描述多体系统激发和响应的重要工具</p>
          </div>
          
          <div class="gf-types">
            <div class="gf-card">
              <h4>单粒子格林函数</h4>
              <div class="equation-formula">
                G(r,t;r',t') = -i⟨T[ψ̂(r,t)ψ̂†(r',t')]⟩
              </div>
              <p>描述单个粒子的传播</p>
            </div>
            
            <div class="gf-card">
              <h4>Dyson方程</h4>
              <div class="equation-formula">
                G = G₀ + G₀ΣG
              </div>
              <p>包含相互作用效应的格林函数方程</p>
            </div>
            
            <div class="gf-card">
              <h4>自能</h4>
              <div class="equation-formula">
                Σ = Σ[G]
              </div>
              <p>相互作用对单粒子性质的修正</p>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>场论方程</h2>
        <div class="field-theory-section">
          <div class="ft-approach">
            <h3>路径积分表述</h3>
            <div class="path-integral-card">
              <div class="equation-formula large">
                Z = ∫ Dψ Dψ* e^(-S[ψ,ψ*]/ℏ)
              </div>
              <p>量子多体系统的路径积分表示</p>
              
              <div class="action-breakdown">
                <h4>作用量的一般形式</h4>
                <div class="equation-formula">
                  S = ∫ dt ∫ dr ψ*(r,t)[iℏ∂/∂t - Ĥ]ψ(r,t)
                </div>
              </div>
            </div>
          </div>

          <div class="effective-theory">
            <h3>有效场论</h3>
            <div class="eft-examples">
              <div class="eft-card">
                <h4>Ginzburg-Landau理论</h4>
                <div class="equation-formula">
                  F = ∫ dr [α|ψ|² + β|ψ|⁴ + γ|∇ψ|²]
                </div>
                <p>相变附近的有效理论</p>
              </div>
              
              <div class="eft-card">
                <h4>非线性σ模型</h4>
                <div class="equation-formula">
                  S = (1/2g) ∫ d²x (∂μn̂)²
                </div>
                <p>低维磁性系统的有效描述</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>数值求解方法</h2>
        <div class="numerical-methods">
          <div class="method-category">
            <h3>精确对角化</h3>
            <div class="method-details">
              <p>直接求解哈密顿矩阵的本征值问题</p>
              <div class="pros-cons">
                <div class="pros">
                  <h5>优点</h5>
                  <ul>
                    <li>结果精确</li>
                    <li>可获得完整谱</li>
                  </ul>
                </div>
                <div class="cons">
                  <h5>缺点</h5>
                  <ul>
                    <li>系统尺寸受限</li>
                    <li>计算复杂度高</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>量子蒙特卡罗</h3>
            <div class="method-details">
              <p>统计采样求解量子多体问题</p>
              <div class="qmc-types">
                <span class="method-tag">变分蒙特卡罗</span>
                <span class="method-tag">扩散蒙特卡罗</span>
                <span class="method-tag">路径积分蒙特卡罗</span>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>密度矩阵重整化群</h3>
            <div class="method-details">
              <p>基于纠缠结构的高效算法</p>
              <div class="dmrg-features">
                <span class="feature-tag">一维系统精确</span>
                <span class="feature-tag">基态和低激发态</span>
                <span class="feature-tag">时间演化</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>学习要点</h2>
        <div class="key-takeaways">
          <div class="takeaway-card">
            <div class="takeaway-icon">📐</div>
            <h4>数学基础</h4>
            <p>掌握量子力学、统计力学和场论的数学工具</p>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-icon">🔗</div>
            <h4>物理直觉</h4>
            <p>理解方程背后的物理图像和近似条件</p>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-icon">💻</div>
            <h4>计算方法</h4>
            <p>熟悉数值求解技术和适用范围</p>
          </div>
          <div class="takeaway-card">
            <div class="takeaway-icon">🎯</div>
            <h4>模型选择</h4>
            <p>根据物理问题选择合适的理论模型</p>
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
  max-width: 1000px;
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

.lead-text {
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 1.5rem;
  font-weight: 400;
}

.equation-showcase {
  display: grid;
  gap: 1.5rem;
}

.equation-card {
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 2rem;
}

.equation-card.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
}

.equation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.equation-header h3 {
  font-size: 1.5rem;
  font-weight: 600;
}

.equation-type {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
}

.equation-card:not(.primary) .equation-type {
  background: #e2e8f0;
  color: #4a5568;
}

.equation-formula {
  font-family: 'Times New Roman', serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
}

.equation-card:not(.primary) .equation-formula {
  background: white;
  color: #2d3748;
}

.equation-formula.large {
  font-size: 2rem;
}

.parameter-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
  margin-top: 1rem;
}

.parameter {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.param-symbol {
  font-family: 'Times New Roman', serif;
  font-size: 1.125rem;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.equation-card:not(.primary) .param-symbol {
  background: #edf2f7;
  color: #2d3748;
}

.param-desc {
  font-size: 0.875rem;
}

.hamiltonian-breakdown {
  background: #f0fff4;
  border: 1px solid #9ae6b4;
  border-radius: 0.75rem;
  padding: 2rem;
}

.hamiltonian-card h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 1rem;
  text-align: center;
}

.term-explanation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.term-item {
  background: white;
  border: 1px solid #c6f6d5;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.term-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.75rem;
}

.term-item .equation-formula {
  font-size: 1.125rem;
  background: #f0fff4;
  color: #2f855a;
  margin-bottom: 0.75rem;
}

.term-item p {
  color: #38a169;
  font-size: 0.875rem;
}

.model-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.model-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.model-card.featured {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border: none;
}

.model-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.model-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.model-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
}

.model-tag {
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.2);
}

.model-card:not(.featured) .model-tag {
  background: #edf2f7;
  color: #4a5568;
}

.model-content .equation-formula {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.model-description p {
  margin-bottom: 1rem;
  font-size: 0.875rem;
}

.parameter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 0.5rem;
}

.param-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.param {
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  font-weight: bold;
}

.statistical-mechanics-section {
  display: grid;
  gap: 3rem;
}

.ensemble-theory {
  background: #f0f9ff;
  border: 1px solid #7dd3fc;
  border-radius: 0.75rem;
  padding: 2rem;
}

.ensemble-theory h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 1.5rem;
  text-align: center;
}

.ensemble-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.ensemble-card {
  background: white;
  border: 1px solid #bae6fd;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.ensemble-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 1rem;
  text-align: center;
}

.ensemble-content .equation-formula {
  font-size: 1.125rem;
  background: #f0f9ff;
  color: #0369a1;
  margin-bottom: 1rem;
  padding: 1rem;
}

.ensemble-description p {
  color: #0284c7;
  margin-bottom: 1rem;
  font-weight: 500;
}

.thermodynamic-relations h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #0369a1;
  margin-bottom: 0.75rem;
}

.relation-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  background: #f8fafc;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.relation {
  font-family: 'Times New Roman', serif;
  font-size: 1rem;
  font-weight: bold;
  color: #0369a1;
}

.desc {
  font-size: 0.875rem;
  color: #0284c7;
}

.quantum-statistics {
  background: #fefce8;
  border: 1px solid #fde047;
  border-radius: 0.75rem;
  padding: 2rem;
}

.quantum-statistics h3 {
  font-size: 1.75rem;
  font-weight: 600;
  color: #a16207;
  margin-bottom: 1.5rem;
  text-align: center;
}

.statistics-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.statistics-card {
  background: white;
  border: 1px solid #fde047;
  border-radius: 0.75rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.statistics-card h4 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #a16207;
  margin-bottom: 1rem;
  text-align: center;
}

.statistics-content .equation-formula {
  font-size: 1.25rem;
  background: #fefce8;
  color: #a16207;
  margin-bottom: 1rem;
  padding: 1rem;
}

.statistics-description p {
  color: #ca8a04;
  margin-bottom: 1rem;
  font-weight: 500;
}

.key-features, .applications {
  margin-bottom: 1rem;
}

.key-features h5, .applications h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #a16207;
  margin-bottom: 0.5rem;
}

.key-features ul, .applications ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.key-features li, .applications li {
  color: #ca8a04;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.detailed-explanation {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 0.5rem;
}

.detailed-explanation h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2f855a;
  margin-bottom: 0.5rem;
}

.detailed-explanation .equation-formula {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.detailed-explanation ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.detailed-explanation li {
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  color: #38a169;
}

.specific-models {
  margin-top: 2rem;
  padding: 2rem;
  background: #f7fafc;
  border-radius: 0.75rem;
}

.specific-models h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1.5rem;
  text-align: center;
}

.model-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.model-showcase .model-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.model-showcase .model-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.model-showcase .equation-formula {
  font-size: 1.125rem;
  background: #f7fafc;
  color: #2d3748;
  margin-bottom: 1rem;
}

.parameter-details {
  margin: 1rem 0;
}

.parameter-details .param-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #4a5568;
}

.parameter-details .param {
  font-family: 'Times New Roman', serif;
  font-weight: bold;
  color: #2d3748;
  min-width: 1.5rem;
}

.applications h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.applications ul {
  list-style: disc;
  padding-left: 1.5rem;
}

.applications li {
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.25rem;
}

.statistical-equations {
  display: grid;
  gap: 2rem;
}

.stat-category {
  background: #fffaf0;
  border: 1px solid #fbd38d;
  border-radius: 0.75rem;
  padding: 2rem;
}

.stat-category h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 1.5rem;
}

.equation-set {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.equation-item {
  background: white;
  border: 1px solid #fed7d7;
  border-radius: 0.5rem;
  padding: 1rem;
}

.equation-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 0.5rem;
}

.equation-item .equation-formula {
  font-size: 1rem;
  background: #fffaf0;
  color: #c05621;
  margin-bottom: 0.5rem;
}

.equation-item p {
  color: #9c4221;
  font-size: 0.875rem;
}

.greens-function-section {
  background: #f0f4ff;
  border: 1px solid #c3dafe;
  border-radius: 0.75rem;
  padding: 2rem;
}

.gf-intro h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 0.5rem;
}

.gf-intro p {
  color: #3182ce;
  margin-bottom: 1.5rem;
}

.gf-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.gf-card {
  background: white;
  border: 1px solid #bee3f8;
  border-radius: 0.5rem;
  padding: 1rem;
}

.gf-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2b6cb0;
  margin-bottom: 0.5rem;
}

.gf-card .equation-formula {
  font-size: 1rem;
  background: #f0f4ff;
  color: #2b6cb0;
  margin-bottom: 0.5rem;
}

.gf-card p {
  color: #3182ce;
  font-size: 0.875rem;
}

.field-theory-section {
  display: grid;
  gap: 2rem;
}

.path-integral-card {
  background: #f5f5f5;
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  padding: 2rem;
}

.ft-approach h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.action-breakdown {
  margin-top: 1.5rem;
}

.action-breakdown h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.effective-theory h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 1rem;
}

.eft-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.eft-card {
  background: white;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.eft-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.75rem;
}

.eft-card .equation-formula {
  font-size: 1rem;
  background: #f9fafb;
  color: #374151;
  margin-bottom: 0.75rem;
}

.eft-card p {
  color: #6b7280;
  font-size: 0.875rem;
}

.numerical-methods {
  display: grid;
  gap: 1.5rem;
}

.method-category {
  background: #fef5e7;
  border: 1px solid #f6ad55;
  border-radius: 0.75rem;
  padding: 1.5rem;
}

.method-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #c05621;
  margin-bottom: 1rem;
}

.method-details p {
  color: #9c4221;
  margin-bottom: 1rem;
}

.pros-cons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.pros, .cons {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
}

.pros h5 {
  color: #38a169;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.cons h5 {
  color: #e53e3e;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.pros ul, .cons ul {
  list-style: none;
  padding: 0;
}

.pros li, .cons li {
  font-size: 0.875rem;
  padding: 0.25rem 0;
}

.qmc-types, .dmrg-features {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.method-tag, .feature-tag {
  background: #fed7d7;
  color: #c05621;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
}

.key-takeaways {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.takeaway-card {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.75rem;
  padding: 1.5rem;
  text-align: center;
}

.takeaway-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.takeaway-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #234e52;
  margin-bottom: 0.75rem;
}

.takeaway-card p {
  color: #285e61;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .chapter-content {
    padding: 1rem;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .equation-showcase,
  .model-grid,
  .equation-set,
  .gf-types,
  .eft-examples,
  .key-takeaways,
  .ensemble-cards,
  .statistics-comparison,
  .model-showcase {
    grid-template-columns: 1fr;
  }
  
  .term-explanation {
    grid-template-columns: 1fr;
  }
  
  .pros-cons {
    grid-template-columns: 1fr;
  }
  
  .equation-header {
    flex-direction: column;
    gap: 0.5rem;
    align-items: flex-start;
  }
}
</style>