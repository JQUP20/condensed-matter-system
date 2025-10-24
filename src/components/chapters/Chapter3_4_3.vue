<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.4.3 重费米子系统</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">强关联物理</span>
        <span class="reading-time">阅读时间: 60分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        重费米子系统是凝聚态物理中最引人注目的强关联电子系统之一，主要由含有f电子的稀土或锕系元素化合物构成。
        这些系统的特征是在低温下表现出异常大的有效质量，可达自由电子质量的几百到几千倍，
        因此被称为"重费米子"。重费米子行为源于局域f电子与传导电子之间的强Kondo耦合，
        在低温下形成相干的重准粒子态。这些系统展现了丰富的物理现象，
        包括非费米液体行为、量子临界性、非常规超导、磁性量子相变等，
        为理解强关联电子系统的量子多体效应提供了重要的实验平台。
        重费米子系统不仅具有重要的基础物理意义，也在量子材料和未来电子器件中具有潜在应用价值。
      </p>
    </div>

    <section class="content-section">
      <h2>重费米子系统的基本特征</h2>
      <div class="basic-characteristics">
        <div class="material-properties">
          <h3>🧪 材料特性</h3>
          <div class="properties-content">
            <div class="f-electron-systems">
              <h4>f电子系统：</h4>
              <div class="systems-content">
                <div class="cerium-compounds">
                  <h5>铈化合物 (Ce³⁺, 4f¹):</h5>
                  <div class="compounds-grid">
                    <div class="compound-card">
                      <h6>CeCu₆:</h6>
                      <ul>
                        <li>γ ≈ 1.6 J/mol·K²</li>
                        <li>重费米子原型</li>
                        <li>非磁性基态</li>
                      </ul>
                    </div>
                    
                    <div class="compound-card">
                      <h6>CeAl₃:</h6>
                      <ul>
                        <li>γ ≈ 1.6 J/mol·K²</li>
                        <li>反铁磁序</li>
                        <li>T_N ≈ 2.2 K</li>
                      </ul>
                    </div>
                    
                    <div class="compound-card">
                      <h6>CeCoIn₅:</h6>
                      <ul>
                        <li>非常规超导</li>
                        <li>T_c ≈ 2.3 K</li>
                        <li>d波配对</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="ytterbium-compounds">
                  <h5>镱化合物 (Yb³⁺, 4f¹³):</h5>
                  <div class="compounds-grid">
                    <div class="compound-card">
                      <h6>YbAl₃:</h6>
                      <ul>
                        <li>γ ≈ 0.13 J/mol·K²</li>
                        <li>中等重费米子</li>
                        <li>晶场效应</li>
                      </ul>
                    </div>
                    
                    <div class="compound-card">
                      <h6>YbRh₂Si₂:</h6>
                      <ul>
                        <li>量子临界点</li>
                        <li>非费米液体</li>
                        <li>T_N ≈ 0.07 K</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="uranium-compounds">
                  <h5>铀化合物 (U, 5f²⁻³):</h5>
                  <div class="compounds-grid">
                    <div class="compound-card">
                      <h6>UBe₁₃:</h6>
                      <ul>
                        <li>重费米子超导</li>
                        <li>T_c ≈ 0.9 K</li>
                        <li>非常规配对</li>
                      </ul>
                    </div>
                    
                    <div class="compound-card">
                      <h6>UPt₃:</h6>
                      <ul>
                        <li>多相超导</li>
                        <li>三重态配对</li>
                        <li>拓扑超导候选</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="characteristic-properties">
              <h4>特征性质：</h4>
              <div class="properties-grid">
                <div class="property-card large-gamma">
                  <h5>巨大比热系数：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>γ = C/T|_{T→0} = (π²k_B²/3)N(E_F)</p>
                      <p>γ_HF/γ_normal ≈ 100-1000</p>
                      <p>有效质量增强</p>
                    </div>
                  </div>
                </div>
                
                <div class="property-card enhanced-susceptibility">
                  <h5>增强磁化率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) = χ_0 + C/(T + T_0)</p>
                      <p>Wilson比：R_W ≈ 1-2</p>
                      <p>强磁性涨落</p>
                    </div>
                  </div>
                </div>
                
                <div class="property-card resistivity-behavior">
                  <h5>电阻率行为：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ρ(T) = ρ_0 + AT²</p>
                      <p>A ∝ γ² (Kadowaki-Woods关系)</p>
                      <p>费米液体行为</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="energy-scales">
              <h4>能量尺度：</h4>
              <div class="scales-content">
                <div class="scale-hierarchy">
                  <h5>尺度层次：</h5>
                  <div class="hierarchy-items">
                    <div class="scale-item bandwidth">
                      <h6>带宽 W:</h6>
                      <p>~ 1-10 eV，传导电子能量尺度</p>
                    </div>
                    
                    <div class="scale-item crystal-field">
                      <h6>晶场分裂 Δ_CF:</h6>
                      <p>~ 10-100 meV，f电子能级分裂</p>
                    </div>
                    
                    <div class="scale-item kondo-temp">
                      <h6>Kondo温度 T_K:</h6>
                      <p>~ 1-100 K，相干温度尺度</p>
                    </div>
                    
                    <div class="scale-item coherence-temp">
                      <h6>相干温度 T*:</h6>
                      <p>~ 1-50 K，重费米子形成温度</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="formation-mechanism">
          <h3>⚙️ 形成机制</h3>
          <div class="mechanism-content">
            <div class="kondo-lattice">
              <h4>Kondo晶格模型：</h4>
              <div class="lattice-content">
                <div class="hamiltonian">
                  <h5>哈密顿量：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H = ∑_{k,σ} ε_k c†_{k,σ} c_{k,σ} + ∑_i J_K S⃗_i · s⃗_i</p>
                      <p>+ ∑_{i,j} J_{RKKY} S⃗_i · S⃗_j</p>
                      <p>Kondo耦合 + RKKY相互作用</p>
                    </div>
                  </div>
                </div>
                
                <div class="competing-interactions">
                  <h5>竞争相互作用：</h5>
                  <div class="interactions-grid">
                    <div class="interaction-card kondo">
                      <h6>Kondo效应：</h6>
                      <ul>
                        <li>局域屏蔽</li>
                        <li>单重态形成</li>
                        <li>非磁性基态</li>
                      </ul>
                    </div>
                    
                    <div class="interaction-card rkky">
                      <h6>RKKY相互作用：</h6>
                      <ul>
                        <li>长程磁性关联</li>
                        <li>磁性有序</li>
                        <li>J_{RKKY} ∝ J²/W</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="doniach-diagram">
                  <h5>Doniach相图：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>T_K/T_{RKKY} = (W/J_K) exp(-1/J_Kρ_0)</p>
                      <p>J_K &lt; J_c: 磁性有序</p>
                      <p>J_K &gt; J_c: 重费米子</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="coherence-formation">
              <h4>相干态形成：</h4>
              <div class="coherence-content">
                <div class="temperature-evolution">
                  <h5>温度演化：</h5>
                  <div class="evolution-stages">
                    <div class="stage-item high-temp">
                      <h6>高温 (T &gt;&gt; T_K):</h6>
                      <ul>
                        <li>局域Kondo单重态</li>
                        <li>非相干散射</li>
                        <li>Curie-Weiss行为</li>
                      </ul>
                    </div>
                    
                    <div class="stage-item intermediate-temp">
                      <h6>中温 (T ~ T_K):</h6>
                      <ul>
                        <li>相干性发展</li>
                        <li>重准粒子形成</li>
                        <li>交叉行为</li>
                      </ul>
                    </div>
                    
                    <div class="stage-item low-temp">
                      <h6>低温 (T &lt;&lt; T_K):</h6>
                      <ul>
                        <li>完全相干</li>
                        <li>重费米子液体</li>
                        <li>费米液体行为</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="hybridization">
                  <h5>杂化机制：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>H_hyb = ∑_{k,σ} V_k (c†_{k,σ} f_σ + h.c.)</p>
                      <p>杂化能隙：Δ_hyb ~ T_K</p>
                      <p>重准粒子带形成</p>
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
      <h2>重费米子液体理论</h2>
      <div class="heavy-fermion-theory">
        <div class="fermi-liquid-description">
          <h3>🌊 费米液体描述</h3>
          <div class="description-content">
            <div class="quasiparticle-picture">
              <h4>准粒子图像：</h4>
              <div class="picture-content">
                <div class="effective-mass">
                  <h5>有效质量：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>m* = m(1 + λ)</p>
                      <p>λ = ∑_q |g_q|²/(ω_q - ε_q)</p>
                      <p>质量增强参数</p>
                    </div>
                  </div>
                </div>
                
                <div class="renormalization">
                  <h5>重整化因子：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>Z = 1/(1 + λ) = m/m*</p>
                      <p>Z &lt;&lt; 1: 强重整化</p>
                      <p>准粒子权重</p>
                    </div>
                  </div>
                </div>
                
                <div class="coherence-scale">
                  <h5>相干尺度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>T* ~ ZT_K</p>
                      <p>重费米子形成温度</p>
                      <p>相干性建立</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="thermodynamic-properties">
              <h4>热力学性质：</h4>
              <div class="thermo-content">
                <div class="specific-heat">
                  <h5>比热：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>C(T) = γT + βT³</p>
                      <p>γ = (π²k_B²/3)N*(0)</p>
                      <p>N*(0) = (m*/m)N_0(0)</p>
                    </div>
                  </div>
                </div>
                
                <div class="magnetic-susceptibility">
                  <h5>磁化率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) = χ_0 + aT² + ...</p>
                      <p>χ_0 = μ_B²N*(0)</p>
                      <p>Pauli磁化率增强</p>
                    </div>
                  </div>
                </div>
                
                <div class="wilson-ratio">
                  <h5>Wilson比：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>R_W = (π²k_B²χ)/(3μ_B²γ)</p>
                      <p>R_W ≈ 1-2</p>
                      <p>费米液体特征</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="transport-properties">
              <h4>输运性质：</h4>
              <div class="transport-content">
                <div class="electrical-resistivity">
                  <h5>电阻率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ρ(T) = ρ_0 + AT²</p>
                      <p>A ∝ (m*)²</p>
                      <p>Kadowaki-Woods关系</p>
                    </div>
                  </div>
                </div>
                
                <div class="thermal-conductivity">
                  <h5>热导率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>κ/T = L_0/ρ(T)</p>
                      <p>Wiedemann-Franz定律</p>
                      <p>L_0 = π²k_B²/(3e²)</p>
                    </div>
                  </div>
                </div>
                
                <div class="hall-effect">
                  <h5>霍尔效应：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>R_H = 1/(nec)</p>
                      <p>载流子密度</p>
                      <p>费米面重构</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="kadowaki-woods-relation">
          <h3>📊 Kadowaki-Woods关系</h3>
          <div class="relation-content">
            <div class="empirical-law">
              <h4>经验定律：</h4>
              <div class="law-content">
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>A/γ² = constant ≈ 1.0 × 10⁻⁵ μΩcm(mol·K/mJ)²</p>
                    <p>普适常数</p>
                    <p>重费米子系统</p>
                  </div>
                </div>
                
                <div class="physical-interpretation">
                  <h5>物理解释：</h5>
                  <ul>
                    <li>A ∝ (m*)² (电子-电子散射)</li>
                    <li>γ ∝ m* (态密度增强)</li>
                    <li>A/γ² ∝ 1/N(0) (普适性)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="experimental-verification">
              <h4>实验验证：</h4>
              <div class="verification-content">
                <div class="materials-data">
                  <h5>材料数据：</h5>
                  <div class="data-table">
                    <div class="table-row header">
                      <span>材料</span>
                      <span>γ (mJ/mol·K²)</span>
                      <span>A (μΩcm/K²)</span>
                      <span>A/γ²</span>
                    </div>
                    <div class="table-row">
                      <span>CeCu₆</span>
                      <span>1600</span>
                      <span>0.25</span>
                      <span>0.98</span>
                    </div>
                    <div class="table-row">
                      <span>CeAl₃</span>
                      <span>1620</span>
                      <span>0.35</span>
                      <span>1.33</span>
                    </div>
                    <div class="table-row">
                      <span>UBe₁₃</span>
                      <span>1100</span>
                      <span>0.24</span>
                      <span>1.98</span>
                    </div>
                  </div>
                </div>
                
                <div class="deviations">
                  <h5>偏离情况：</h5>
                  <ul>
                    <li>量子临界点附近</li>
                    <li>磁性有序系统</li>
                    <li>非费米液体行为</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>量子相变与临界现象</h2>
      <div class="quantum-phase-transitions">
        <div class="magnetic-qcp">
          <h3>🎯 磁性量子临界点</h3>
          <div class="qcp-content">
            <div class="phase-diagram">
              <h4>相图结构：</h4>
              <div class="diagram-content">
                <div class="phases-description">
                  <h5>相区描述：</h5>
                  <div class="phases-grid">
                    <div class="phase-card paramagnetic">
                      <h6>顺磁相：</h6>
                      <ul>
                        <li>重费米子液体</li>
                        <li>大费米面</li>
                        <li>局域矩屏蔽</li>
                      </ul>
                    </div>
                    
                    <div class="phase-card antiferromagnetic">
                      <h6>反铁磁相：</h6>
                      <ul>
                        <li>磁性有序</li>
                        <li>小费米面</li>
                        <li>RKKY相互作用</li>
                      </ul>
                    </div>
                    
                    <div class="phase-card critical">
                      <h6>临界区：</h6>
                      <ul>
                        <li>量子临界涨落</li>
                        <li>非费米液体</li>
                        <li>标度行为</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="control-parameters">
                  <h5>控制参数：</h5>
                  <div class="parameters-content">
                    <div class="parameter-item pressure">
                      <h6>压力：</h6>
                      <p>改变晶格常数，调节杂化强度</p>
                    </div>
                    
                    <div class="parameter-item doping">
                      <h6>掺杂：</h6>
                      <p>改变载流子浓度，调节费米面</p>
                    </div>
                    
                    <div class="parameter-item field">
                      <h6>磁场：</h6>
                      <p>Zeeman分裂，破坏时间反演对称</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="critical-behavior">
              <h4>临界行为：</h4>
              <div class="behavior-content">
                <div class="scaling-laws">
                  <h5>标度律：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) ∝ T^{-α}</p>
                      <p>C(T) ∝ T^{-β}</p>
                      <p>ρ(T) ∝ T^n</p>
                    </div>
                  </div>
                </div>
                
                <div class="nfl-exponents">
                  <h5>非费米液体指数：</h5>
                  <div class="exponents-grid">
                    <div class="exponent-card">
                      <h6>3D反铁磁QCP:</h6>
                      <p>α = 1/3, β = 1/3, n = 3/2</p>
                    </div>
                    
                    <div class="exponent-card">
                      <h6>2D反铁磁QCP:</h6>
                      <p>α = 1, β = 1, n = 1</p>
                    </div>
                  </div>
                </div>
                
                <div class="quantum-criticality">
                  <h5>量子临界性：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ω/T标度</p>
                      <p>动力学临界指数z</p>
                      <p>超标度关系</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="experimental-examples">
              <h4>实验实例：</h4>
              <div class="examples-content">
                <div class="ybrh2si2">
                  <h5>YbRh₂Si₂:</h5>
                  <div class="material-properties">
                    <ul>
                      <li>压力调控的QCP</li>
                      <li>T^{4/3}电阻率</li>
                      <li>对数发散比热</li>
                      <li>非费米液体行为</li>
                    </ul>
                  </div>
                </div>
                
                <div class="cecoin5">
                  <h5>CeCoIn₅:</h5>
                  <div class="material-properties">
                    <ul>
                      <li>磁场调控的QCP</li>
                      <li>超导与磁性竞争</li>
                      <li>d波超导</li>
                      <li>量子临界涨落</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="unconventional-superconductivity">
          <h3>⚡ 非常规超导</h3>
          <div class="superconductivity-content">
            <div class="pairing-mechanisms">
              <h4>配对机制：</h4>
              <div class="mechanisms-content">
                <div class="magnetic-fluctuations">
                  <h5>磁性涨落配对：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>V(k,k') = -g²χ(k-k',ω)</p>
                      <p>反铁磁涨落介导</p>
                      <p>d波对称性</p>
                    </div>
                  </div>
                </div>
                
                <div class="pairing-symmetries">
                  <h5>配对对称性：</h5>
                  <div class="symmetries-grid">
                    <div class="symmetry-card d-wave">
                      <h6>d波配对：</h6>
                      <ul>
                        <li>Δ(k) ∝ cos(k_x) - cos(k_y)</li>
                        <li>节点超导体</li>
                        <li>线性比热</li>
                      </ul>
                    </div>
                    
                    <div class="symmetry-card p-wave">
                      <h6>p波配对：</h6>
                      <ul>
                        <li>三重态配对</li>
                        <li>拓扑超导</li>
                        <li>边界态</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="experimental-signatures">
              <h4>实验特征：</h4>
              <div class="signatures-content">
                <div class="thermodynamic-signatures">
                  <h5>热力学特征：</h5>
                  <div class="thermo-signatures">
                    <div class="signature-item specific-heat">
                      <h6>比热：</h6>
                      <p>C(T) ∝ T^n (n &lt; 3，节点结构)</p>
                    </div>
                    
                    <div class="signature-item penetration-depth">
                      <h6>穿透深度：</h6>
                      <p>λ(T) ∝ T (线性温度依赖)</p>
                    </div>
                    
                    <div class="signature-item knight-shift">
                      <h6>Knight位移：</h6>
                      <p>自旋单重态vs三重态</p>
                    </div>
                  </div>
                </div>
                
                <div class="spectroscopic-signatures">
                  <h5>谱学特征：</h5>
                  <div class="spectro-signatures">
                    <div class="signature-item tunneling">
                      <h6>隧道谱：</h6>
                      <p>V形能隙，零偏压电导</p>
                    </div>
                    
                    <div class="signature-item arpes">
                      <h6>ARPES:</h6>
                      <p>费米弧，d波能隙</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="material-examples">
              <h4>材料实例：</h4>
              <div class="materials-grid">
                <div class="material-card cecu2si2">
                  <h5>CeCu₂Si₂:</h5>
                  <ul>
                    <li>首个重费米子超导体</li>
                    <li>T_c ≈ 0.6 K</li>
                    <li>d波配对</li>
                    <li>磁性量子临界点</li>
                  </ul>
                </div>
                
                <div class="material-card ube13">
                  <h5>UBe₁₃:</h5>
                  <ul>
                    <li>T_c ≈ 0.9 K</li>
                    <li>非常规配对</li>
                    <li>多带超导</li>
                    <li>强耦合行为</li>
                  </ul>
                </div>
                
                <div class="material-card upt3">
                  <h5>UPt₃:</h5>
                  <ul>
                    <li>多相超导</li>
                    <li>三重态配对</li>
                    <li>拓扑超导候选</li>
                    <li>时间反演破缺</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验技术与表征方法</h2>
      <div class="experimental-techniques">
        <div class="bulk-measurements">
          <h3>🔬 体相测量</h3>
          <div class="bulk-content">
            <div class="thermodynamic-measurements">
              <h4>热力学测量：</h4>
              <div class="thermo-measurements">
                <div class="specific-heat-measurement">
                  <h5>比热测量：</h5>
                  <div class="measurement-content">
                    <div class="techniques">
                      <h6>技术方法：</h6>
                      <ul>
                        <li>弛豫法比热计</li>
                        <li>AC比热测量</li>
                        <li>准绝热量热法</li>
                      </ul>
                    </div>
                    
                    <div class="information">
                      <h6>获得信息：</h6>
                      <ul>
                        <li>电子比热系数γ</li>
                        <li>相变温度</li>
                        <li>熵变化</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="susceptibility-measurement">
                  <h5>磁化率测量：</h5>
                  <div class="measurement-content">
                    <div class="techniques">
                      <h6>技术方法：</h6>
                      <ul>
                        <li>SQUID磁强计</li>
                        <li>振动样品磁强计</li>
                        <li>交流磁化率</li>
                      </ul>
                    </div>
                    
                    <div class="information">
                      <h6>获得信息：</h6>
                      <ul>
                        <li>Curie-Weiss行为</li>
                        <li>磁性相变</li>
                        <li>有效磁矩</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="transport-measurements">
              <h4>输运测量：</h4>
              <div class="transport-techniques">
                <div class="resistivity-measurement">
                  <h5>电阻率测量：</h5>
                  <div class="measurement-content">
                    <div class="techniques">
                      <h6>技术方法：</h6>
                      <ul>
                        <li>四探针法</li>
                        <li>Van der Pauw法</li>
                        <li>AC电阻测量</li>
                      </ul>
                    </div>
                    
                    <div class="information">
                      <h6>获得信息：</h6>
                      <ul>
                        <li>T²依赖性</li>
                        <li>Kadowaki-Woods关系</li>
                        <li>相干温度</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="hall-measurement">
                  <h5>霍尔效应测量：</h5>
                  <div class="measurement-content">
                    <div class="techniques">
                      <h6>技术方法：</h6>
                      <ul>
                        <li>横向电阻测量</li>
                        <li>磁场扫描</li>
                        <li>温度依赖</li>
                      </ul>
                    </div>
                    
                    <div class="information">
                      <h6>获得信息：</h6>
                      <ul>
                        <li>载流子密度</li>
                        <li>费米面体积</li>
                        <li>迁移率</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="spectroscopic-probes">
          <h3>🔍 谱学探测</h3>
          <div class="spectroscopy-content">
            <div class="photoemission-spectroscopy">
              <h4>光电子能谱：</h4>
              <div class="arpes-content">
                <div class="technique-description">
                  <h5>技术原理：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>I(k,ω) ∝ f(ω)A(k,ω)</p>
                      <p>A(k,ω): 谱函数</p>
                      <p>费米面映射</p>
                    </div>
                  </div>
                </div>
                
                <div class="heavy-fermion-features">
                  <h5>重费米子特征：</h5>
                  <ul>
                    <li>重准粒子带</li>
                    <li>杂化能隙</li>
                    <li>费米面重构</li>
                    <li>相干-非相干交叉</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="neutron-scattering">
              <h4>中子散射：</h4>
              <div class="neutron-content">
                <div class="inelastic-scattering">
                  <h5>非弹性散射：</h5>
                  <div class="scattering-info">
                    <div class="technique">
                      <h6>测量内容：</h6>
                      <ul>
                        <li>磁激发谱</li>
                        <li>晶场激发</li>
                        <li>自旋涨落</li>
                      </ul>
                    </div>
                    
                    <div class="information">
                      <h6>物理信息：</h6>
                      <ul>
                        <li>交换相互作用</li>
                        <li>Kondo温度</li>
                        <li>磁性关联</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="elastic-scattering">
                  <h5>弹性散射：</h5>
                  <div class="scattering-info">
                    <div class="technique">
                      <h6>测量内容：</h6>
                      <ul>
                        <li>磁性布拉格峰</li>
                        <li>结构因子</li>
                        <li>磁矩大小</li>
                      </ul>
                    </div>
                    
                    <div class="information">
                      <h6>物理信息：</h6>
                      <ul>
                        <li>磁结构</li>
                        <li>有序参数</li>
                        <li>相变性质</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="nmr-spectroscopy">
              <h4>核磁共振：</h4>
              <div class="nmr-content">
                <div class="knight-shift">
                  <h5>Knight位移：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>K = A_hf χ_spin</p>
                      <p>超精细耦合</p>
                      <p>自旋磁化率</p>
                    </div>
                  </div>
                </div>
                
                <div class="relaxation-rate">
                  <h5>弛豫率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>1/T₁ ∝ χ"(q,ω_N)</p>
                      <p>动力学磁化率</p>
                      <p>自旋涨落</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="advanced-techniques">
          <h3>🚀 先进技术</h3>
          <div class="advanced-content">
            <div class="quantum-oscillations">
              <h4>量子振荡：</h4>
              <div class="oscillations-content">
                <div class="dhva-effect">
                  <h5>de Haas-van Alphen效应：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>M ∝ cos(2πF/B + φ)</p>
                      <p>F = (ℏ/2πe)A_F</p>
                      <p>费米面面积</p>
                    </div>
                  </div>
                </div>
                
                <div class="effective-mass">
                  <h5>有效质量测定：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>振幅 ∝ exp(-πm*T/eℏB)</p>
                      <p>温度阻尼</p>
                      <p>m*直接测量</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="stm-spectroscopy">
              <h4>扫描隧道显微镜：</h4>
              <div class="stm-content">
                <div class="local-dos">
                  <h5>局域态密度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>dI/dV ∝ N(r,E)</p>
                      <p>空间分辨谱学</p>
                      <p>表面态研究</p>
                    </div>
                  </div>
                </div>
                
                <div class="kondo-resonance">
                  <h5>Kondo共振：</h5>
                  <ul>
                    <li>Fano线型</li>
                    <li>温度演化</li>
                    <li>空间扩展</li>
                  </ul>
                </div>
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
          <p>重费米子系统由f电子与传导电子的强Kondo耦合形成，表现出巨大的有效质量和丰富的量子相变现象。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>Kadowaki-Woods关系揭示了重费米子系统中电阻率与比热系数的普适标度关系，反映了费米液体理论的适用性。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>量子临界点附近出现非费米液体行为和非常规超导，为理解强关联电子系统提供了重要实验平台。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>多种实验技术的结合使用，包括热力学、输运、谱学等方法，为全面理解重费米子物理提供了有力工具。</p>
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

.basic-characteristics {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.material-properties {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.material-properties h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.f-electron-systems {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.f-electron-systems h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.systems-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.cerium-compounds,
.ytterbium-compounds,
.uranium-compounds {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.cerium-compounds h5,
.ytterbium-compounds h5,
.uranium-compounds h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.compounds-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.compound-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.compound-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.compound-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.compound-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.compound-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.characteristic-properties {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.characteristic-properties h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

.mathematical-content {
  background: #f8fafc;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
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

.energy-scales {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-scales h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scales-content {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scale-hierarchy h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.hierarchy-items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.scale-item {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.scale-item h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
}

.scale-item p {
  color: #4a5568;
  margin: 0;
  font-size: 0.75rem;
}

.formation-mechanism {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.formation-mechanism h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mechanism-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.kondo-lattice {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.kondo-lattice h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.lattice-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hamiltonian,
.doniach-diagram {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hamiltonian h5,
.doniach-diagram h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.competing-interactions {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.competing-interactions h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.interactions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.interaction-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.interaction-card h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.interaction-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.interaction-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.interaction-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.coherence-formation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.coherence-formation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.coherence-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.temperature-evolution {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.temperature-evolution h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.evolution-stages {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.stage-item {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.stage-item h6 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.stage-item ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.stage-item li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.stage-item li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.hybridization {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hybridization h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.heavy-fermion-theory {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.fermi-liquid-description {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.fermi-liquid-description h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.description-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.quasiparticle-picture {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quasiparticle-picture h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.picture-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.effective-mass,
.renormalization,
.coherence-scale {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.effective-mass h5,
.renormalization h5,
.coherence-scale h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}
.experimental-techniques {
  margin-top: 2rem;
}

.techniques-content {
  display: grid;
  gap: 2rem;
  margin-top: 1.5rem;
}

.bulk-measurements {
  background: linear-gradient(135deg, #f8f9ff 0%, #e8f2ff 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4f46e5;
}

.bulk-content {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

.thermodynamic-measurements {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.thermo-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.technique-item {
  background: #f9fafb;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #10b981;
}

.technique-item h5 {
  color: #059669;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.transport-measurements {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.transport-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.spectroscopic-probes {
  background: linear-gradient(135deg, #fff8f0 0%, #fef3e2 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #f59e0b;
}

.spectro-content {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

.photoemission-spectroscopy {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.pes-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.pes-item {
  background: #fef7f0;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #f59e0b;
}

.pes-item h5 {
  color: #d97706;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.neutron-scattering {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.neutron-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.neutron-item {
  background: #f0f9ff;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #0ea5e9;
}

.neutron-item h5 {
  color: #0284c7;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.nmr-spectroscopy {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.nmr-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.nmr-item {
  background: #f0fdf4;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #22c55e;
}

.nmr-item h5 {
  color: #16a34a;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.advanced-techniques {
  background: linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #a855f7;
}

.advanced-content {
  display: grid;
  gap: 1.5rem;
  margin-top: 1rem;
}

.quantum-oscillations {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.oscillation-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.oscillation-item {
  background: #faf5ff;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #a855f7;
}

.oscillation-item h5 {
  color: #9333ea;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.stm-spectroscopy {
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.stm-techniques {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.stm-item {
  background: #fef2f2;
  padding: 1rem;
  border-radius: 6px;
  border-left: 3px solid #ef4444;
}

.stm-item h5 {
  color: #dc2626;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.summary {
  background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-top: 3rem;
  border: 1px solid #bbf7d0;
}

.summary h2 {
  color: #166534;
  margin-bottom: 1.5rem;
  text-align: center;
}

.key-points {
  display: grid;
  gap: 1rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #ffffff;
  padding: 1.2rem;
  border-radius: 10px;
  border-left: 4px solid #22c55e;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.point-number {
  background: #22c55e;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  flex-shrink: 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hf-card {
    padding: 1rem;
  }
  
  .material-examples {
    grid-template-columns: 1fr;
  }
  
  .properties-grid {
    grid-template-columns: 1fr;
  }
  
  .energy-scales {
    grid-template-columns: 1fr;
  }
  
  .thermo-techniques,
  .transport-techniques,
  .pes-techniques,
  .neutron-techniques,
  .nmr-techniques,
  .oscillation-techniques,
  .stm-techniques {
    grid-template-columns: 1fr;
  }
  
  .point-item {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 1rem;
  }
  
  .hf-card {
    padding: 0.8rem;
  }
  
  .summary {
    padding: 1.5rem;
  }
}
</style>