<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.2.2 铁磁Heisenberg模型</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">磁性理论</span>
        <span class="reading-time">阅读时间: 30分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        铁磁Heisenberg模型是描述局域磁矩之间交换相互作用的基本模型，它成功解释了铁磁材料的磁有序现象。
        该模型通过量子力学的交换相互作用，揭示了自旋系统如何形成长程磁有序，
        并为理解磁相变、磁激发和临界现象提供了理论基础。
      </p>
    </div>

    <section class="content-section">
      <h2>Heisenberg模型的建立</h2>
      <div class="model-construction">
        <div class="construction-overview">
          <h3>🧮 模型哈密顿量</h3>
          <p>Heisenberg模型描述了晶格上局域自旋之间的交换相互作用：</p>
          <div class="mathematical-content">
            <div class="equation-block">
              <p>H = -∑⟨i,j⟩ J_{ij} S⃗_i · S⃗_j - μ_B g ∑_i B⃗ · S⃗_i</p>
              <p>J_{ij}: 交换积分</p>
              <p>S⃗_i: 格点i上的自旋算符</p>
              <p>B⃗: 外磁场</p>
            </div>
          </div>
        </div>

        <div class="exchange-types">
          <div class="exchange-card">
            <div class="exchange-icon">🔗</div>
            <h3>直接交换</h3>
            <div class="exchange-content">
              <p>相邻原子间电子波函数的直接重叠</p>
              <div class="mathematical-content">
                <h4>交换积分：</h4>
                <div class="equation-block">
                  <p>J = ∫ ψ*_A(r₁)ψ*_B(r₂) × e²/|r₁-r₂| × ψ_B(r₁)ψ_A(r₂) dr₁dr₂</p>
                  <p>通常 J > 0 (反铁磁)</p>
                  <p>特殊情况下 J < 0 (铁磁)</p>
                </div>
              </div>
            </div>
          </div>

          <div class="exchange-card">
            <div class="exchange-icon">↔️</div>
            <h3>超交换</h3>
            <div class="exchange-content">
              <p>通过中间非磁性离子的间接交换</p>
              <div class="mathematical-content">
                <h4>Goodenough-Kanamori规则：</h4>
                <div class="equation-block">
                  <p>180° M-O-M: 强反铁磁 (J > 0)</p>
                  <p>90° M-O-M: 弱铁磁 (J < 0)</p>
                  <p>M: 磁性离子, O: 氧离子</p>
                </div>
              </div>
            </div>
          </div>

          <div class="exchange-card">
            <div class="exchange-icon">🌊</div>
            <h3>双交换</h3>
            <div class="exchange-content">
              <p>混合价态系统中的电子跳跃</p>
              <div class="mathematical-content">
                <h4>双交换机制：</h4>
                <div class="equation-block">
                  <p>Mn³⁺-O-Mn⁴⁺ → Mn⁴⁺-O-Mn³⁺</p>
                  <p>J_DE = -t²cos(θ/2)/U</p>
                  <p>θ: 相邻自旋夹角</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>铁磁基态与激发</h2>
      <div class="ferromagnetic-ground-state">
        <div class="ground-state-analysis">
          <h3>⬇️ 基态性质</h3>
          <div class="ground-state-content">
            <div class="state-description">
              <h4>铁磁基态 (J < 0):</h4>
              <p>所有自旋平行排列，总自旋最大化</p>
              <div class="spin-configuration">
                <div class="lattice-representation">
                  <div class="spin-row">
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                  </div>
                  <div class="spin-row">
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                  </div>
                  <div class="spin-row">
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                    <div class="spin-site">↑</div>
                  </div>
                </div>
                <p class="config-label">完全极化态</p>
              </div>
            </div>

            <div class="energy-calculation">
              <h4>基态能量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>E₀ = -|J| z N S²/2</p>
                  <p>z: 配位数</p>
                  <p>N: 格点总数</p>
                  <p>S: 自旋量子数</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="magnon-excitations">
          <h3>🌊 磁子激发</h3>
          <div class="magnon-content">
            <div class="magnon-description">
              <h4>自旋波理论：</h4>
              <p>铁磁体的低能激发是集体自旋波模式——磁子</p>
              
              <div class="holstein-primakoff">
                <h5>Holstein-Primakoff变换：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>S⁺ᵢ = √(2S) aᵢ√(1 - aᵢ†aᵢ/2S)</p>
                    <p>S⁻ᵢ = √(2S) √(1 - aᵢ†aᵢ/2S) aᵢ†</p>
                    <p>Sᶻᵢ = S - aᵢ†aᵢ</p>
                  </div>
                </div>
                <p>aᵢ, aᵢ†: 磁子的产生湮灭算符</p>
              </div>
            </div>

            <div class="dispersion-relation">
              <h4>磁子色散关系：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ω(k⃗) = 2|J|S z [1 - γ(k⃗)]</p>
                  <p>γ(k⃗) = (1/z)∑_δ e^(ik⃗·δ⃗)</p>
                  <p>δ⃗: 最近邻矢量</p>
                </div>
              </div>

              <div class="dispersion-examples">
                <div class="lattice-example">
                  <h5>简单立方晶格：</h5>
                  <div class="equation-block">
                    <p>γ(k⃗) = (cos k_x a + cos k_y a + cos k_z a)/3</p>
                    <p>长波极限: ω(k) ≈ |J|S a² k²</p>
                  </div>
                </div>
                
                <div class="lattice-example">
                  <h5>面心立方晶格：</h5>
                  <div class="equation-block">
                    <p>γ(k⃗) = [cos(k_x a/2)cos(k_y a/2) + ...]</p>
                    <p>12个最近邻</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="magnon-properties">
              <h4>🔍 磁子性质：</h4>
              <div class="properties-grid">
                <div class="property-item">
                  <div class="property-icon">⚡</div>
                  <h5>能量</h5>
                  <p>ℏω(k⃗) = 磁子能量</p>
                  <p>长波极限: ∝ k²</p>
                </div>
                
                <div class="property-item">
                  <div class="property-icon">🎯</div>
                  <h5>动量</h5>
                  <p>ℏk⃗ = 磁子动量</p>
                  <p>准粒子激发</p>
                </div>
                
                <div class="property-item">
                  <div class="property-icon">🌀</div>
                  <h5>自旋</h5>
                  <p>S = 1 (玻色子)</p>
                  <p>集体激发模式</p>
                </div>
                
                <div class="property-item">
                  <div class="property-icon">📊</div>
                  <h5>统计</h5>
                  <p>玻色-爱因斯坦统计</p>
                  <p>n(k) = 1/(e^(βℏω(k)) - 1)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>平均场理论</h2>
      <div class="mean-field-theory">
        <div class="mft-introduction">
          <h3>🎯 基本思想</h3>
          <p>将每个自旋所感受到的相互作用场用平均场代替，简化多体问题为单体问题。</p>
        </div>

        <div class="mft-formulation">
          <div class="formulation-card">
            <h4>平均场近似：</h4>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>S⃗ᵢ · S⃗ⱼ ≈ ⟨S⃗ᵢ⟩ · S⃗ⱼ + S⃗ᵢ · ⟨S⃗ⱼ⟩ - ⟨S⃗ᵢ⟩ · ⟨S⃗ⱼ⟩</p>
                <p>忽略涨落项: δS⃗ᵢ · δS⃗ⱼ</p>
              </div>
            </div>
          </div>

          <div class="formulation-card">
            <h4>有效哈密顿量：</h4>
            <div class="mathematical-content">
              <div class="equation-block">
                <p>H_MF = -∑ᵢ h_eff · S⃗ᵢ</p>
                <p>h_eff = |J| z ⟨S⟩ + μ_B g B⃗</p>
                <p>⟨S⟩: 平均磁化强度</p>
              </div>
            </div>
          </div>
        </div>

        <div class="self-consistency">
          <h3>🔄 自洽方程</h3>
          <div class="self-consistency-content">
            <div class="equation-derivation">
              <h4>磁化强度方程：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨S⟩ = S B_S(β |J| z S ⟨S⟩)</p>
                  <p>B_S(x) = (2S+1)/(2S) coth((2S+1)x/(2S)) - 1/(2S) coth(x/(2S))</p>
                  <p>Brillouin函数</p>
                </div>
              </div>
            </div>

            <div class="critical-temperature">
              <h4>居里温度：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>T_C = |J| z S(S+1)/(3k_B)</p>
                  <p>经典极限 (S → ∞): T_C = |J| z S²/(3k_B)</p>
                  <p>量子修正重要</p>
                </div>
              </div>
              
              <div class="tc-examples">
                <h5>典型值：</h5>
                <div class="examples-table">
                  <table>
                    <thead>
                      <tr>
                        <th>材料</th>
                        <th>S</th>
                        <th>T_C (K)</th>
                        <th>结构</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Fe</td>
                        <td>1</td>
                        <td>1043</td>
                        <td>bcc</td>
                      </tr>
                      <tr>
                        <td>Ni</td>
                        <td>1/2</td>
                        <td>627</td>
                        <td>fcc</td>
                      </tr>
                      <tr>
                        <td>Co</td>
                        <td>3/2</td>
                        <td>1388</td>
                        <td>hcp</td>
                      </tr>
                      <tr>
                        <td>Gd</td>
                        <td>7/2</td>
                        <td>293</td>
                        <td>hcp</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="temperature-dependence">
          <h3>🌡️ 温度依赖性</h3>
          <div class="temperature-behavior">
            <div class="behavior-regime">
              <h4>低温行为 (T ≪ T_C):</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨S⟩/S ≈ 1 - (T/T_C)^(3/2) × const</p>
                  <p>Bloch T^(3/2) 定律</p>
                  <p>磁子激发主导</p>
                </div>
              </div>
            </div>

            <div class="behavior-regime">
              <h4>临界行为 (T → T_C):</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨S⟩ ∝ (T_C - T)^β</p>
                  <p>β = 1/2 (平均场)</p>
                  <p>β ≈ 0.365 (3D Ising)</p>
                </div>
              </div>
            </div>

            <div class="behavior-regime">
              <h4>高温行为 (T ≫ T_C):</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>χ = C/(T - T_C)</p>
                  <p>C = μ₀μ²_eff N/(3k_B)</p>
                  <p>Curie-Weiss定律</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>磁畴与磁化过程</h2>
      <div class="magnetic-domains">
        <div class="domain-formation">
          <h3>🧩 磁畴形成</h3>
          <div class="domain-content">
            <div class="energy-competition">
              <h4>能量竞争：</h4>
              <div class="energy-terms">
                <div class="energy-term">
                  <div class="term-icon">⚡</div>
                  <h5>交换能</h5>
                  <p>E_ex = A ∫ (∇m⃗)² dV</p>
                  <p>倾向于平行排列</p>
                </div>
                
                <div class="energy-term">
                  <div class="term-icon">🧲</div>
                  <h5>退磁能</h5>
                  <p>E_d = (μ₀/2) ∫ H_d² dV</p>
                  <p>倾向于闭合磁通</p>
                </div>
                
                <div class="energy-term">
                  <div class="term-icon">🎯</div>
                  <h5>磁晶各向异性能</h5>
                  <p>E_K = K₁sin²θ + K₂sin⁴θ</p>
                  <p>易磁化方向</p>
                </div>
                
                <div class="energy-term">
                  <div class="term-icon">🌊</div>
                  <h5>畴壁能</h5>
                  <p>E_w = γ_w A_w</p>
                  <p>γ_w: 畴壁能密度</p>
                </div>
              </div>
            </div>

            <div class="domain-structure">
              <h4>典型畴结构：</h4>
              <div class="domain-patterns">
                <div class="pattern-item">
                  <h5>条状畴：</h5>
                  <div class="domain-diagram">
                    <div class="stripe-domains">
                      <div class="domain up">↑↑↑</div>
                      <div class="domain down">↓↓↓</div>
                      <div class="domain up">↑↑↑</div>
                      <div class="domain down">↓↓↓</div>
                    </div>
                  </div>
                  <p>薄膜中常见</p>
                </div>
                
                <div class="pattern-item">
                  <h5>闭合畴：</h5>
                  <div class="domain-diagram">
                    <div class="closure-domains">
                      <div class="domain-section">→→→</div>
                      <div class="domain-section">↑↑↑</div>
                      <div class="domain-section">←←←</div>
                      <div class="domain-section">↓↓↓</div>
                    </div>
                  </div>
                  <p>减少退磁能</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="magnetization-process">
          <h3>📈 磁化过程</h3>
          <div class="magnetization-content">
            <div class="hysteresis-loop">
              <h4>磁滞回线：</h4>
              <div class="hysteresis-description">
                <div class="loop-parameters">
                  <div class="parameter-item">
                    <h5>饱和磁化强度 M_s:</h5>
                    <p>所有磁矩平行排列时的磁化强度</p>
                  </div>
                  
                  <div class="parameter-item">
                    <h5>剩余磁化强度 M_r:</h5>
                    <p>外场为零时的磁化强度</p>
                  </div>
                  
                  <div class="parameter-item">
                    <h5>矫顽力 H_c:</h5>
                    <p>使磁化强度为零所需的反向场</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="magnetization-mechanisms">
              <h4>磁化机制：</h4>
              <div class="mechanisms-grid">
                <div class="mechanism-card">
                  <div class="mechanism-icon">🔄</div>
                  <h5>畴壁移动</h5>
                  <div class="mechanism-content">
                    <p>弱场下主要机制</p>
                    <div class="mathematical-content">
                      <div class="equation-block">
                        <p>v_w = μ_w H</p>
                        <p>μ_w: 畴壁迁移率</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="mechanism-card">
                  <div class="mechanism-icon">🌀</div>
                  <h5>磁矩转动</h5>
                  <div class="mechanism-content">
                    <p>强场下主要机制</p>
                    <div class="mathematical-content">
                      <div class="equation-block">
                        <p>dθ/dt = γ(H_eff × m⃗)</p>
                        <p>γ: 旋磁比</p>
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

    <section class="content-section">
      <h2>实验观测与应用</h2>
      <div class="experimental-applications">
        <div class="experimental-techniques">
          <h3>🔬 实验技术</h3>
          <div class="techniques-grid">
            <div class="technique-card">
              <div class="technique-icon">🧲</div>
              <h3>磁化率测量</h3>
              <div class="technique-content">
                <h4>测量方法：</h4>
                <ul>
                  <li>SQUID磁强计</li>
                  <li>振动样品磁强计(VSM)</li>
                  <li>交流磁化率</li>
                  <li>磁光Kerr效应</li>
                </ul>
                
                <h4>获得信息：</h4>
                <ul>
                  <li>居里温度 T_C</li>
                  <li>有效磁矩 μ_eff</li>
                  <li>磁各向异性</li>
                  <li>磁畴动力学</li>
                </ul>
              </div>
            </div>

            <div class="technique-card">
              <div class="technique-icon">📡</div>
              <h3>中子散射</h3>
              <div class="technique-content">
                <h4>散射类型：</h4>
                <ul>
                  <li>弹性散射: 磁结构</li>
                  <li>非弹性散射: 磁子谱</li>
                  <li>小角散射: 磁畴结构</li>
                  <li>极化中子: 磁矩方向</li>
                </ul>
                
                <h4>磁子色散：</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>S(Q⃗,ω) ∝ ∑_k δ(ω - ω_k)δ(Q⃗ - k⃗)</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <div class="technique-icon">🔬</div>
              <h3>显微技术</h3>
              <div class="technique-content">
                <h4>成像方法：</h4>
                <ul>
                  <li>磁力显微镜(MFM)</li>
                  <li>Lorentz透射电镜</li>
                  <li>X射线磁圆二色性</li>
                  <li>自旋极化STM</li>
                </ul>
                
                <h4>空间分辨率：</h4>
                <ul>
                  <li>MFM: ~10 nm</li>
                  <li>LTEM: ~1 nm</li>
                  <li>SP-STM: 原子级</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="applications">
          <h3>🚀 技术应用</h3>
          <div class="applications-grid">
            <div class="application-card">
              <div class="app-icon">💾</div>
              <h3>磁存储</h3>
              <div class="app-content">
                <h4>硬盘驱动器：</h4>
                <ul>
                  <li>垂直磁记录</li>
                  <li>热辅助磁记录</li>
                  <li>磁阻读取头</li>
                </ul>
                
                <h4>新型存储：</h4>
                <ul>
                  <li>磁随机存取存储器(MRAM)</li>
                  <li>自旋转移矩存储器</li>
                  <li>磁畴壁存储器</li>
                </ul>
              </div>
            </div>

            <div class="application-card">
              <div class="app-icon">⚡</div>
              <h3>电力应用</h3>
              <div class="app-content">
                <h4>变压器：</h4>
                <ul>
                  <li>软磁材料</li>
                  <li>低磁滞损耗</li>
                  <li>高磁导率</li>
                </ul>
                
                <h4>电机：</h4>
                <ul>
                  <li>永磁同步电机</li>
                  <li>高能积磁体</li>
                  <li>稀土磁体</li>
                </ul>
              </div>
            </div>

            <div class="application-card">
              <div class="app-icon">🏥</div>
              <h3>医疗应用</h3>
              <div class="app-content">
                <h4>磁共振成像：</h4>
                <ul>
                  <li>超导磁体</li>
                  <li>梯度线圈</li>
                  <li>对比剂</li>
                </ul>
                
                <h4>磁疗：</h4>
                <ul>
                  <li>磁性纳米粒子</li>
                  <li>热疗</li>
                  <li>靶向药物传递</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节总结</h2>
      <div class="key-points">
        <div class="point-item">
          <div class="point-number">1</div>
          <p>铁磁Heisenberg模型通过负的交换积分描述铁磁相互作用，预测了铁磁基态和磁子激发。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>自旋波理论揭示了磁子作为集体激发的性质，其色散关系在长波极限下呈二次方依赖。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>平均场理论给出了居里温度的表达式，并预测了磁化强度的温度依赖性。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>磁畴结构和磁化过程的理解为磁性材料的应用提供了理论基础，推动了现代磁技术的发展。</p>
        </div>
      </div>
    </section>
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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

.model-construction {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.construction-overview {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.construction-overview h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.construction-overview p {
  color: #4a5568;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.mathematical-content {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.mathematical-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.equation-block {
  background: #f8fafc;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  color: #2d3748;
}

.exchange-types {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.exchange-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.exchange-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.exchange-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.exchange-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.ferromagnetic-ground-state {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.ground-state-analysis {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.ground-state-analysis h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.ground-state-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.state-description {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.state-description h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.state-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.spin-configuration {
  text-align: center;
}

.lattice-representation {
  background: #e6fffa;
  border: 2px solid #81e6d9;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 0.5rem;
}

.spin-row {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin: 0.25rem 0;
}

.spin-site {
  width: 2rem;
  height: 2rem;
  background: #4299e1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
}

.config-label {
  font-size: 0.875rem;
  color: #2d3748;
  font-weight: 600;
  margin: 0;
}

.energy-calculation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-calculation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnon-excitations {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.magnon-excitations h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnon-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.magnon-description {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.magnon-description h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.magnon-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.holstein-primakoff {
  margin-top: 1rem;
}

.holstein-primakoff h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.holstein-primakoff p {
  color: #4a5568;
  margin-top: 0.5rem;
}

.dispersion-relation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.dispersion-relation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.dispersion-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.lattice-example {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.lattice-example h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.magnon-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.magnon-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.property-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.property-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.property-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.property-item p {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0.25rem 0;
}

.mean-field-theory {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mft-introduction {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.mft-introduction h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mft-introduction p {
  color: #4a5568;
  font-size: 1.125rem;
}

.mft-formulation {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.formulation-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.formulation-card h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.self-consistency {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.self-consistency h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.self-consistency-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.equation-derivation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.equation-derivation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.critical-temperature {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.critical-temperature h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.tc-examples {
  margin-top: 1rem;
}

.tc-examples h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.examples-table {
  margin-top: 1rem;
}

.examples-table table {
  width: 100%;
  border-collapse: collapse;
  background: #f8fafc;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.examples-table th,
.examples-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.examples-table th {
  background: #e2e8f0;
  font-weight: 600;
  color: #2d3748;
}

.examples-table td {
  color: #4a5568;
}

.temperature-dependence {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.temperature-dependence h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.temperature-behavior {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.behavior-regime {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.behavior-regime h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnetic-domains {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.domain-formation {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.domain-formation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.domain-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.energy-competition {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-competition h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.energy-terms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.energy-term {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.term-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.energy-term h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.energy-term p {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0.25rem 0;
}

.domain-structure {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.domain-structure h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.domain-patterns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.pattern-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.pattern-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.pattern-item p {
  font-size: 0.875rem;
  color: #4a5568;
  margin-top: 0.5rem;
}

.domain-diagram {
  margin: 1rem 0;
}

.stripe-domains {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.domain {
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 1.125rem;
}

.domain.up {
  background: #fed7d7;
  color: #c53030;
}

.domain.down {
  background: #c6f6d5;
  color: #38a169;
}

.closure-domains {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
}

.domain-section {
  padding: 0.5rem;
  background: #e2e8f0;
  border-radius: 0.25rem;
  font-weight: bold;
  font-size: 1.125rem;
  text-align: center;
  color: #2d3748;
}

.magnetization-process {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.magnetization-process h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnetization-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hysteresis-loop {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hysteresis-loop h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.loop-parameters {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.parameter-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.parameter-item p {
  font-size: 0.875rem;
  color: #4a5568;
  margin: 0;
}

.magnetization-mechanisms {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.magnetization-mechanisms h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mechanisms-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.mechanism-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.mechanism-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.mechanism-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.mechanism-content p {
  font-size: 0.875rem;
  color: #4a5568;
  margin-bottom: 0.5rem;
}

.experimental-applications {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experimental-techniques {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.experimental-techniques h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.technique-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.technique-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.technique-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.technique-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.technique-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.technique-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.technique-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.applications {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.applications h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.applications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.application-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.app-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.application-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.app-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.app-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.app-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.app-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 0.75rem;
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

.point-item p {
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
  
  .exchange-types, .ground-state-content, .mft-formulation, .self-consistency-content, .temperature-behavior, .energy-terms, .domain-patterns, .loop-parameters, .mechanisms-grid, .techniques-grid, .applications-grid {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .dispersion-examples, .properties-grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  
  .closure-domains {
    grid-template-columns: 1fr;
  }
}
</style>