<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.2.3 反铁磁Heisenberg模型</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">磁性理论</span>
        <span class="reading-time">阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        反铁磁Heisenberg模型描述了相邻自旋倾向于反平行排列的磁性系统。
        与铁磁系统不同，反铁磁系统表现出更丰富的物理现象，包括量子涨落效应、
        自旋液体态、以及低维系统中的特殊行为。该模型是理解高温超导体、
        量子磁性材料和强关联电子系统的重要理论基础。
      </p>
    </div>

    <section class="content-section">
      <h2>反铁磁基态与激发</h2>
      <div class="antiferromagnetic-ground-state">
        <div class="ground-state-analysis">
          <h3>🔄 Néel有序态</h3>
          <div class="neel-state-content">
            <div class="state-description">
              <h4>经典Néel态 (J > 0):</h4>
              <p>相邻自旋反平行排列，形成两个子晶格</p>
              <div class="spin-configuration">
                <div class="lattice-representation">
                  <div class="spin-row">
                    <div class="spin-site up">↑</div>
                    <div class="spin-site down">↓</div>
                    <div class="spin-site up">↑</div>
                    <div class="spin-site down">↓</div>
                    <div class="spin-site up">↑</div>
                  </div>
                  <div class="spin-row">
                    <div class="spin-site down">↓</div>
                    <div class="spin-site up">↑</div>
                    <div class="spin-site down">↓</div>
                    <div class="spin-site up">↑</div>
                    <div class="spin-site down">↓</div>
                  </div>
                  <div class="spin-row">
                    <div class="spin-site up">↑</div>
                    <div class="spin-site down">↓</div>
                    <div class="spin-site up">↑</div>
                    <div class="spin-site down">↓</div>
                    <div class="spin-site up">↑</div>
                  </div>
                </div>
                <p class="config-label">Néel反铁磁态</p>
              </div>
            </div>

            <div class="energy-calculation">
              <h4>基态能量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>E₀ = J z N S²/2</p>
                  <p>z: 配位数</p>
                  <p>N: 格点总数</p>
                  <p>S: 自旋量子数</p>
                  <p>子晶格磁化: M_A = -M_B</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="quantum-fluctuations">
          <h3>🌊 量子涨落效应</h3>
          <div class="fluctuation-content">
            <div class="fluctuation-description">
              <h4>零点涨落：</h4>
              <p>量子涨落导致子晶格磁化强度的减少</p>
              
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨S^z_A⟩ = S - δS</p>
                  <p>δS: 量子涨落修正</p>
                  <p>δS ∝ 1/S (大S极限)</p>
                  <p>δS ~ S (小S极限)</p>
                </div>
              </div>
            </div>

            <div class="dimensional-effects">
              <h4>维度效应：</h4>
              <div class="dimension-comparison">
                <div class="dimension-case">
                  <h5>三维系统：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>δS/S ~ 1/S</p>
                      <p>长程Néel有序稳定</p>
                      <p>T_N > 0</p>
                    </div>
                  </div>
                </div>
                
                <div class="dimension-case">
                  <h5>二维系统：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>δS/S ~ ln(S)/S</p>
                      <p>增强的量子涨落</p>
                      <p>T_N 显著降低</p>
                    </div>
                  </div>
                </div>
                
                <div class="dimension-case">
                  <h5>一维系统：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>δS ~ S</p>
                      <p>无长程有序 (T = 0)</p>
                      <p>自旋液体态</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="magnon-excitations">
          <h3>🎵 反铁磁磁子</h3>
          <div class="afm-magnon-content">
            <div class="magnon-description">
              <h4>双子晶格结构：</h4>
              <p>反铁磁体具有两个磁性子晶格，导致两支磁子模式</p>
              
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = J ∑⟨i,j⟩ S⃗ᵢ · S⃗ⱼ</p>
                  <p>子晶格A: 偶数格点</p>
                  <p>子晶格B: 奇数格点</p>
                </div>
              </div>
            </div>

            <div class="dispersion-relation">
              <h4>磁子色散关系：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>ω₊(k⃗) = JS z √[(1 + γₖ)²]</p>
                  <p>ω₋(k⃗) = JS z √[(1 - γₖ)²]</p>
                  <p>γₖ = (1/z)∑_δ e^(ik⃗·δ⃗)</p>
                </div>
              </div>

              <div class="dispersion-features">
                <div class="feature-item">
                  <h5>声学支 (ω₋):</h5>
                  <div class="equation-block">
                    <p>ω₋(k) ≈ v_s |k| (长波极限)</p>
                    <p>v_s: 自旋波速度</p>
                    <p>Goldstone模式</p>
                  </div>
                </div>
                
                <div class="feature-item">
                  <h5>光学支 (ω₊):</h5>
                  <div class="equation-block">
                    <p>ω₊(k) ≈ 2JS z (长波极限)</p>
                    <p>能隙模式</p>
                    <p>Δ = 2JS z</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>平均场理论与相变</h2>
      <div class="mean-field-phase-transition">
        <div class="mft-formulation">
          <h3>🎯 平均场近似</h3>
          <div class="mft-content">
            <div class="sublattice-treatment">
              <h4>子晶格处理：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨S^z_A⟩ = m_A, ⟨S^z_B⟩ = m_B</p>
                  <p>有效场: h_A = J z m_B</p>
                  <p>有效场: h_B = J z m_A</p>
                </div>
              </div>
            </div>

            <div class="self-consistency">
              <h4>自洽方程：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>m_A = S B_S(βJ z m_B)</p>
                  <p>m_B = S B_S(βJ z m_A)</p>
                  <p>反铁磁解: m_A = -m_B = m</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="neel-temperature">
          <h3>🌡️ Néel温度</h3>
          <div class="neel-temp-content">
            <div class="critical-temperature">
              <h4>临界温度：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>T_N = J z S(S+1)/(3k_B)</p>
                  <p>与铁磁情况相同的形式</p>
                  <p>但物理意义不同</p>
                </div>
              </div>
            </div>

            <div class="temperature-behavior">
              <h4>温度依赖性：</h4>
              <div class="behavior-regimes">
                <div class="regime-card">
                  <h5>低温 (T ≪ T_N):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>m(T) ≈ S[1 - const × (T/T_N)²]</p>
                      <p>T² 修正 (vs 铁磁的T^(3/2))</p>
                    </div>
                  </div>
                </div>
                
                <div class="regime-card">
                  <h5>临界区 (T → T_N):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>m ∝ (T_N - T)^β</p>
                      <p>β = 1/2 (平均场)</p>
                      <p>β ≈ 0.365 (3D Ising)</p>
                    </div>
                  </div>
                </div>
                
                <div class="regime-card">
                  <h5>高温 (T > T_N):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ = 2C/(T + T_N)</p>
                      <p>C = Nμ₀μ²_eff/(3k_B)</p>
                      <p>正的Weiss温度</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="experimental-examples">
              <h4>典型反铁磁体：</h4>
              <div class="examples-table">
                <table>
                  <thead>
                    <tr>
                      <th>材料</th>
                      <th>结构</th>
                      <th>T_N (K)</th>
                      <th>特征</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>MnO</td>
                      <td>岩盐</td>
                      <td>118</td>
                      <td>简单反铁磁</td>
                    </tr>
                    <tr>
                      <td>Cr₂O₃</td>
                      <td>刚玉</td>
                      <td>307</td>
                      <td>单轴各向异性</td>
                    </tr>
                    <tr>
                      <td>La₂CuO₄</td>
                      <td>K₂NiF₄</td>
                      <td>325</td>
                      <td>二维特性</td>
                    </tr>
                    <tr>
                      <td>KCuF₃</td>
                      <td>钙钛矿</td>
                      <td>39</td>
                      <td>一维链</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>低维反铁磁系统</h2>
      <div class="low-dimensional-systems">
        <div class="one-dimensional-chain">
          <h3>🔗 一维反铁磁链</h3>
          <div class="chain-content">
            <div class="exact-solution">
              <h4>Bethe ansatz精确解：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>E₀/N = (1/4) - ln(2) ≈ -0.443 J</p>
                  <p>基态能量密度</p>
                  <p>无能隙激发谱</p>
                </div>
              </div>
            </div>

            <div class="correlation-functions">
              <h4>关联函数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨S^z_i S^z_j⟩ ∝ (-1)^|i-j| |i-j|^(-1/2)</p>
                  <p>代数衰减</p>
                  <p>准长程有序</p>
                </div>
              </div>
            </div>

            <div class="spin-gap">
              <h4>自旋能隙：</h4>
              <div class="gap-scenarios">
                <div class="scenario-item">
                  <h5>整数自旋链 (S = 1):</h5>
                  <p>Haldane能隙 Δ ≈ 0.41J</p>
                  <p>指数衰减关联</p>
                </div>
                
                <div class="scenario-item">
                  <h5>半整数自旋链 (S = 1/2):</h5>
                  <p>无能隙</p>
                  <p>代数衰减关联</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="two-dimensional-systems">
          <h3>🔲 二维反铁磁系统</h3>
          <div class="2d-content">
            <div class="quantum-monte-carlo">
              <h4>量子蒙特卡罗结果：</h4>
              <div class="qmc-results">
                <div class="result-item">
                  <h5>正方晶格 S = 1/2:</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>E₀/N ≈ -0.669 J</p>
                      <p>⟨S^z⟩ ≈ 0.307 S</p>
                      <p>量子涨落减少61%</p>
                    </div>
                  </div>
                </div>
                
                <div class="result-item">
                  <h5>三角晶格 S = 1/2:</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>几何阻挫</p>
                      <p>可能的自旋液体态</p>
                      <p>⟨S^z⟩ ≈ 0.2 S</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="renormalization-group">
              <h4>重整化群分析：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>相关长度: ξ ∝ e^(2πρ_s/T)</p>
                  <p>ρ_s: 自旋刚度</p>
                  <p>Kosterlitz-Thouless转变</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="frustrated-systems">
          <h3>🌀 阻挫磁性系统</h3>
          <div class="frustration-content">
            <div class="geometric-frustration">
              <h4>几何阻挫：</h4>
              <div class="frustration-examples">
                <div class="example-card">
                  <h5>三角晶格：</h5>
                  <div class="triangular-diagram">
                    <div class="triangle">
                      <div class="vertex top">↑</div>
                      <div class="vertex left">↓</div>
                      <div class="vertex right">?</div>
                    </div>
                  </div>
                  <p>第三个自旋无法同时满足两个反铁磁键</p>
                </div>
                
                <div class="example-card">
                  <h5>Kagome晶格：</h5>
                  <div class="kagome-description">
                    <p>角共享三角形网络</p>
                    <p>高度阻挫</p>
                    <p>可能的量子自旋液体</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="spin-liquid-states">
              <h4>量子自旋液体：</h4>
              <div class="liquid-properties">
                <div class="property-card">
                  <h5>特征：</h5>
                  <ul>
                    <li>无磁有序</li>
                    <li>能隙激发</li>
                    <li>分数化准粒子</li>
                    <li>拓扑简并</li>
                  </ul>
                </div>
                
                <div class="property-card">
                  <h5>候选材料：</h5>
                  <ul>
                    <li>Herbertsmithite</li>
                    <li>κ-(BEDT-TTF)₂Cu₂(CN)₃</li>
                    <li>YbMgGaO₄</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验技术与表征</h2>
      <div class="experimental-characterization">
        <div class="neutron-scattering">
          <h3>🔬 中子散射</h3>
          <div class="neutron-content">
            <div class="elastic-scattering">
              <h4>弹性散射：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>I(Q⃗) ∝ |F(Q)|² S(Q⃗)</p>
                  <p>F(Q): 磁形因子</p>
                  <p>S(Q⃗): 结构因子</p>
                  <p>布拉格峰位置确定磁结构</p>
                </div>
              </div>
              
              <div class="magnetic-structure">
                <h5>磁结构确定：</h5>
                <ul>
                  <li>反铁磁布拉格峰</li>
                  <li>磁传播矢量</li>
                  <li>磁矩方向</li>
                  <li>磁畴结构</li>
                </ul>
              </div>
            </div>

            <div class="inelastic-scattering">
              <h4>非弹性散射：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>S(Q⃗,ω) = ∑_n |⟨n|S^⊥_Q|0⟩|² δ(ω - ω_n)</p>
                  <p>磁子色散关系</p>
                  <p>自旋波速度</p>
                </div>
              </div>
              
              <div class="magnon-spectroscopy">
                <h5>磁子谱学：</h5>
                <ul>
                  <li>色散关系测量</li>
                  <li>能隙确定</li>
                  <li>交换积分提取</li>
                  <li>各向异性参数</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="other-techniques">
          <h3>🧪 其他实验技术</h3>
          <div class="techniques-grid">
            <div class="technique-card">
              <div class="technique-icon">🧲</div>
              <h4>磁化率测量</h4>
              <div class="technique-content">
                <h5>信息获取：</h5>
                <ul>
                  <li>Néel温度 T_N</li>
                  <li>Curie-Weiss温度</li>
                  <li>有效磁矩</li>
                  <li>磁各向异性</li>
                </ul>
                
                <h5>特征行为：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>χ(T > T_N) = C/(T + θ)</p>
                    <p>θ > 0: 反铁磁相互作用</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <div class="technique-icon">🌡️</div>
              <h4>比热测量</h4>
              <div class="technique-content">
                <h5>相变特征：</h5>
                <ul>
                  <li>λ型异常</li>
                  <li>磁熵变化</li>
                  <li>临界指数</li>
                </ul>
                
                <h5>低温行为：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>C_mag ∝ T³ (3D)</p>
                    <p>C_mag ∝ T² (2D)</p>
                    <p>C_mag ∝ T (1D)</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <div class="technique-icon">📡</div>
              <h4>核磁共振</h4>
              <div class="technique-content">
                <h5>局域信息：</h5>
                <ul>
                  <li>超精细场</li>
                  <li>自旋涨落</li>
                  <li>相变动力学</li>
                </ul>
                
                <h5>弛豫时间：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>1/T₁ ∝ χ"(ω,T)</p>
                    <p>动态磁化率</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="technique-card">
              <div class="technique-icon">⚡</div>
              <h4>μSR技术</h4>
              <div class="technique-content">
                <h5>优势：</h5>
                <ul>
                  <li>零场测量</li>
                  <li>局域磁场探测</li>
                  <li>磁有序参数</li>
                  <li>动态信息</li>
                </ul>
                
                <h5>弛豫函数：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>P(t) = A₀ cos(γμB_loc t + φ)</p>
                    <p>B_loc: 局域磁场</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>理论方法与数值计算</h2>
      <div class="theoretical-methods">
        <div class="analytical-approaches">
          <h3>📊 解析方法</h3>
          <div class="analytical-grid">
            <div class="method-card">
              <h4>线性自旋波理论</h4>
              <div class="method-content">
                <h5>Holstein-Primakoff变换：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>S⁺ᵢ = √(2S - nᵢ) aᵢ</p>
                    <p>S⁻ᵢ = aᵢ† √(2S - nᵢ)</p>
                    <p>S^z_i = S - nᵢ (A子晶格)</p>
                  </div>
                </div>
                
                <h5>适用范围：</h5>
                <ul>
                  <li>大S极限</li>
                  <li>低温区域</li>
                  <li>长波长激发</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>1/S展开</h4>
              <div class="method-content">
                <h5>系统性修正：</h5>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>E = E₀ + E₁/S + E₂/S² + ...</p>
                    <p>⟨S^z⟩ = S - δS₁/S - δS₂/S² + ...</p>
                  </div>
                </div>
                
                <h5>高阶修正：</h5>
                <ul>
                  <li>磁子-磁子相互作用</li>
                  <li>量子涨落修正</li>
                  <li>临界行为</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="numerical-methods">
          <h3>💻 数值方法</h3>
          <div class="numerical-grid">
            <div class="method-card">
              <h4>量子蒙特卡罗</h4>
              <div class="method-content">
                <h5>算法类型：</h5>
                <ul>
                  <li>随机级数展开(SSE)</li>
                  <li>路径积分蒙特卡罗</li>
                  <li>连续时间算法</li>
                </ul>
                
                <h5>优势：</h5>
                <ul>
                  <li>无偏差结果</li>
                  <li>热力学性质</li>
                  <li>关联函数</li>
                  <li>相变研究</li>
                </ul>
                
                <h5>局限性：</h5>
                <ul>
                  <li>符号问题</li>
                  <li>阻挫系统困难</li>
                  <li>动力学性质</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>密度矩阵重整化群</h4>
              <div class="method-content">
                <h5>DMRG优势：</h5>
                <ul>
                  <li>一维系统精确</li>
                  <li>基态性质</li>
                  <li>低激发态</li>
                  <li>关联函数</li>
                </ul>
                
                <h5>时间演化DMRG：</h5>
                <ul>
                  <li>动力学性质</li>
                  <li>谱函数</li>
                  <li>非平衡态</li>
                </ul>
                
                <h5>二维扩展：</h5>
                <ul>
                  <li>矩阵乘积态</li>
                  <li>投影纠缠对态</li>
                  <li>张量网络</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>精确对角化</h4>
              <div class="method-content">
                <h5>适用系统：</h5>
                <ul>
                  <li>小系统 (N ≤ 40)</li>
                  <li>有限尺寸效应</li>
                  <li>基态和激发态</li>
                </ul>
                
                <h5>获得信息：</h5>
                <ul>
                  <li>能级间隙</li>
                  <li>态密度</li>
                  <li>动力学结构因子</li>
                  <li>纠缠熵</li>
                </ul>
              </div>
            </div>

            <div class="method-card">
              <h4>变分蒙特卡罗</h4>
              <div class="method-content">
                <h5>试探波函数：</h5>
                <ul>
                  <li>Gutzwiller投影</li>
                  <li>共振价键态</li>
                  <li>神经网络态</li>
                </ul>
                
                <h5>应用：</h5>
                <ul>
                  <li>阻挫系统</li>
                  <li>量子自旋液体</li>
                  <li>相图研究</li>
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
          <p>反铁磁Heisenberg模型展现了丰富的量子多体现象，包括量子涨落、维度效应和阻挫效应。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>低维反铁磁系统表现出独特的物理性质，如一维链的准长程有序和二维系统的增强量子涨落。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>几何阻挫导致的量子自旋液体态是凝聚态物理的前沿研究领域，具有潜在的量子计算应用。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>现代实验技术和数值方法的结合为理解复杂磁性系统提供了强有力的工具。</p>
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

.antiferromagnetic-ground-state {
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

.neel-state-content {
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
  color: white;
}

.spin-site.up {
  background: #e53e3e;
}

.spin-site.down {
  background: #3182ce;
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

.mathematical-content {
  background: #f8fafc;
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
  background: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid #e2e8f0;
  font-family: 'Courier New', monospace;
}

.equation-block p {
  margin: 0.25rem 0;
  color: #2d3748;
}

.quantum-fluctuations {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.quantum-fluctuations h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.fluctuation-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.fluctuation-description {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.fluctuation-description h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.fluctuation-description p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.dimensional-effects {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.dimensional-effects h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.dimension-comparison {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.dimension-case {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.dimension-case h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
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

.afm-magnon-content {
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

.dispersion-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.feature-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.feature-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.mean-field-phase-transition {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.mft-formulation {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.mft-formulation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mft-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.sublattice-treatment {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.sublattice-treatment h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.self-consistency {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.self-consistency h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.neel-temperature {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.neel-temperature h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.neel-temp-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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

.temperature-behavior {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.temperature-behavior h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.behavior-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.regime-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.regime-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.experimental-examples {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.experimental-examples h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
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

.low-dimensional-systems {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.one-dimensional-chain {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.one-dimensional-chain h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.chain-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.exact-solution {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.exact-solution h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.correlation-functions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.correlation-functions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.spin-gap {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spin-gap h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.gap-scenarios {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.scenario-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scenario-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.scenario-item p {
  color: #4a5568;
  margin: 0.25rem 0;
}

.two-dimensional-systems {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.two-dimensional-systems h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.2d-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quantum-monte-carlo {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-monte-carlo h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.qmc-results {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.result-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.result-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.renormalization-group {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.renormalization-group h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.frustrated-systems {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.frustrated-systems h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.frustration-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.geometric-frustration {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.geometric-frustration h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.frustration-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.example-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.example-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.example-card p {
  color: #4a5568;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

.triangular-diagram {
  margin: 1rem 0;
}

.triangle {
  position: relative;
  width: 100px;
  height: 80px;
  margin: 0 auto;
}

.vertex {
  position: absolute;
  width: 2rem;
  height: 2rem;
  background: #4299e1;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.125rem;
}

.vertex.top {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.vertex.left {
  bottom: 0;
  left: 0;
}

.vertex.right {
  bottom: 0;
  right: 0;
  background: #e53e3e;
}

.kagome-description {
  text-align: left;
}

.kagome-description p {
  margin: 0.25rem 0;
}

.spin-liquid-states {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spin-liquid-states h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.liquid-properties {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.property-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.property-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.property-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.property-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.property-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-characterization {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.neutron-scattering {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.neutron-scattering h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.neutron-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.elastic-scattering {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.elastic-scattering h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnetic-structure {
  margin-top: 1rem;
}

.magnetic-structure h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.magnetic-structure ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.magnetic-structure li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.magnon-spectroscopy li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.other-techniques {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.other-techniques h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.technique-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.technique-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.technique-icon {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.technique-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
}

.technique-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.technique-content ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.technique-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.technique-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.theoretical-methods {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.analytical-approaches {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.analytical-approaches h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.analytical-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.method-card {
  background: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.method-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e2e8f0;
}

.method-content h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin: 1rem 0 0.5rem 0;
}

.method-content ul {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.method-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.method-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.numerical-methods {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.numerical-methods h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.numerical-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-top: 3rem;
}

.summary h2 {
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 1rem;
  backdrop-filter: blur(10px);
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
  line-height: 1.6;
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
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .neel-state-content,
  .mft-content,
  .chain-content,
  .neutron-content,
  .analytical-grid,
  .numerical-grid,
  .techniques-grid {
    grid-template-columns: 1fr;
  }
  
  .behavior-regimes,
  .dimension-comparison,
  .dispersion-features,
  .qmc-results,
  .frustration-examples,
  .liquid-properties {
    grid-template-columns: 1fr;
  }
  
  .spin-row {
    gap: 0.25rem;
  }
  
  .spin-site {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
}
</style>.inelastic-scattering {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.inelastic-scattering h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.magnon-spectroscopy {
  margin-top: 1rem;
}

.magnon-spectroscopy h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.magnon-spectroscopy ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.magnon-spectroscopy li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.