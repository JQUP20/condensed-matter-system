<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.4.1 从Anderson到Kondo模型</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">杂质物理</span>
        <span class="reading-time">阅读时间: 45分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        Anderson模型和Kondo模型是凝聚态物理中研究磁性杂质的两个基础理论框架。
        Anderson模型由Philip Anderson于1961年提出，描述了局域化电子轨道与传导电子的杂化效应；
        而Kondo模型则由Jun Kondo于1964年提出，专注于局域自旋与传导电子的交换相互作用。
        这两个模型之间存在深刻的联系，在特定条件下Anderson模型可以约化为Kondo模型，
        为理解稀磁合金、重费米子系统等强关联电子系统提供了重要的理论基础。
      </p>
    </div>

    <section class="content-section">
      <h2>Anderson杂质模型</h2>
      <div class="anderson-model">
        <div class="model-formulation">
          <h3>🎯 模型构造</h3>
          <div class="formulation-content">
            <div class="hamiltonian">
              <h4>Anderson哈密顿量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H = H_bath + H_imp + H_hyb</p>
                  <p>完整的Anderson模型</p>
                </div>
              </div>
            </div>

            <div class="bath-term">
              <h4>传导电子浴：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_bath = ∑_{k,σ} ε_k c†_{k,σ} c_{k,σ}</p>
                  <p>ε_k: 传导电子能级</p>
                  <p>c†_{k,σ}, c_{k,σ}: 传导电子产生湮灭算符</p>
                  <p>σ = ↑,↓: 自旋指标</p>
                </div>
              </div>
            </div>

            <div class="impurity-term">
              <h4>杂质项：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_imp = ∑_σ ε_d d†_σ d_σ + U d†_↑ d_↑ d†_↓ d_↓</p>
                  <p>ε_d: 杂质能级</p>
                  <p>U: 库仑排斥能</p>
                  <p>d†_σ, d_σ: 杂质电子产生湮灭算符</p>
                </div>
              </div>
            </div>

            <div class="hybridization-term">
              <h4>杂化项：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_hyb = ∑_{k,σ} V_k (c†_{k,σ} d_σ + d†_σ c_{k,σ})</p>
                  <p>V_k: 杂化矩阵元</p>
                  <p>传导电子与杂质轨道的耦合</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-parameters">
          <h3>📊 物理参数</h3>
          <div class="parameters-content">
            <div class="parameter-definitions">
              <h4>关键参数定义：</h4>
              <div class="parameters-grid">
                <div class="param-card energy-level">
                  <h5>杂质能级 ε_d:</h5>
                  <ul>
                    <li>相对于费米能级的位置</li>
                    <li>决定占据数</li>
                    <li>可通过门电压调节</li>
                  </ul>
                </div>
                
                <div class="param-card coulomb-repulsion">
                  <h5>库仑排斥 U:</h5>
                  <ul>
                    <li>同一轨道双占据代价</li>
                    <li>强关联效应来源</li>
                    <li>典型值：几eV</li>
                  </ul>
                </div>
                
                <div class="param-card hybridization">
                  <h5>杂化强度 Γ:</h5>
                  <ul>
                    <li>Γ = π∑_k |V_k|² δ(ε - ε_k)</li>
                    <li>杂质态宽度</li>
                    <li>量子涨落强度</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="parameter-regimes">
              <h4>参数区间：</h4>
              <div class="regimes-content">
                <div class="regime-item empty">
                  <h5>空轨道区间 (ε_d >> 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨n_d⟩ ≈ 0</p>
                      <p>杂质轨道基本为空</p>
                      <p>弱耦合行为</p>
                    </div>
                  </div>
                </div>
                
                <div class="regime-item mixed-valence">
                  <h5>混合价区间 (|ε_d| ~ Γ):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>0 < ⟨n_d⟩ < 2</p>
                      <p>价态涨落</p>
                      <p>强杂化效应</p>
                    </div>
                  </div>
                </div>
                
                <div class="regime-item kondo-regime">
                  <h5>Kondo区间 (ε_d < 0, ε_d + U > 0):</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>⟨n_d⟩ ≈ 1</p>
                      <p>局域磁矩形成</p>
                      <p>Kondo效应</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="solution-methods">
          <h3>🔧 求解方法</h3>
          <div class="methods-content">
            <div class="mean-field-theory">
              <h4>平均场理论：</h4>
              <div class="mft-content">
                <div class="hartree-fock">
                  <h5>Hartree-Fock近似：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>U d†_↑ d_↑ d†_↓ d_↓ → U⟨n_↑⟩ d†_↓ d_↓ + U⟨n_↓⟩ d†_↑ d_↑ - U⟨n_↑⟩⟨n_↓⟩</p>
                      <p>自洽方程求解</p>
                    </div>
                  </div>
                </div>
                
                <div class="self-energy">
                  <h5>自能近似：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>Σ(ω) = U⟨n_{-σ}⟩ + higher order terms</p>
                      <p>格林函数方法</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="numerical-methods">
              <h4>数值方法：</h4>
              <div class="numerical-grid">
                <div class="method-card nrg">
                  <h5>数值重整化群 (NRG):</h5>
                  <ul>
                    <li>Wilson的对数离散化</li>
                    <li>迭代对角化</li>
                    <li>低能物理精确描述</li>
                  </ul>
                </div>
                
                <div class="method-card qmc">
                  <h5>量子蒙特卡罗 (QMC):</h5>
                  <ul>
                    <li>连续时间算法</li>
                    <li>有限温度性质</li>
                    <li>符号问题</li>
                  </ul>
                </div>
                
                <div class="method-card dmft">
                  <h5>动力学平均场 (DMFT):</h5>
                  <ul>
                    <li>局域近似</li>
                    <li>自洽求解</li>
                    <li>晶格模型扩展</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Kondo模型的导出</h2>
      <div class="kondo-derivation">
        <div class="schrieffer-wolff">
          <h3>🔄 Schrieffer-Wolff变换</h3>
          <div class="sw-content">
            <div class="transformation-idea">
              <h4>变换思想：</h4>
              <div class="idea-content">
                <p>在Kondo区间（⟨n_d⟩ ≈ 1），杂质轨道的双占据和空占据态能量很高，
                可以通过正则变换将这些高能态积分掉，得到只涉及单占据态的有效低能理论。</p>
              </div>
            </div>

            <div class="projection-operators">
              <h4>投影算符：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>P_0 = |0⟩⟨0| + |2⟩⟨2|: 投影到空态和双占据态</p>
                  <p>P_1 = |↑⟩⟨↑| + |↓⟩⟨↓|: 投影到单占据态</p>
                  <p>P_0 + P_1 = 1</p>
                </div>
              </div>
            </div>

            <div class="effective-hamiltonian">
              <h4>有效哈密顿量：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_eff = P_1 H P_1 + P_1 H P_0 (E_1 - P_0 H P_0)^{-1} P_0 H P_1</p>
                  <p>二阶微扰理论</p>
                </div>
              </div>
            </div>

            <div class="virtual-processes">
              <h4>虚过程分析：</h4>
              <div class="processes-content">
                <div class="process-grid">
                  <div class="process-card charge-fluctuation">
                    <h5>电荷涨落过程：</h5>
                    <div class="process-description">
                      <p>|↑⟩ + |k↓⟩ → |↑↓⟩ → |↓⟩ + |k'↑⟩</p>
                      <p>自旋翻转散射</p>
                    </div>
                  </div>
                  
                  <div class="process-card potential-scattering">
                    <h5>势散射过程：</h5>
                    <div class="process-description">
                      <p>|↑⟩ + |k↑⟩ → |0⟩ + |k'↑⟩ → |↑⟩ + |k''↑⟩</p>
                      <p>保持自旋散射</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="kondo-hamiltonian">
          <h3>🎯 Kondo哈密顿量</h3>
          <div class="kondo-content">
            <div class="final-form">
              <h4>最终形式：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>H_Kondo = ∑_{k,σ} ε_k c†_{k,σ} c_{k,σ} + J S⃗ · s⃗(0)</p>
                  <p>J: Kondo耦合常数</p>
                  <p>S⃗: 杂质自旋算符</p>
                  <p>s⃗(0): 传导电子在杂质处的自旋密度</p>
                </div>
              </div>
            </div>

            <div class="coupling-constant">
              <h4>耦合常数：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>J = 2|V|²[1/|ε_d| + 1/(U + ε_d)]</p>
                  <p>J > 0: 反铁磁耦合</p>
                  <p>来自Anderson模型参数</p>
                </div>
              </div>
            </div>

            <div class="spin-operators">
              <h4>自旋算符：</h4>
              <div class="operators-content">
                <div class="impurity-spin">
                  <h5>杂质自旋：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>S^+ = d†_↑ d_↓, S^- = d†_↓ d_↑</p>
                      <p>S^z = (1/2)(d†_↑ d_↑ - d†_↓ d_↓)</p>
                    </div>
                  </div>
                </div>
                
                <div class="conduction-spin">
                  <h5>传导电子自旋密度：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>s^+(0) = ∑_k c†_{k,↑} c_{k,↓}</p>
                      <p>s^-(0) = ∑_k c†_{k,↓} c_{k,↑}</p>
                      <p>s^z(0) = (1/2)∑_k (c†_{k,↑} c_{k,↑} - c†_{k,↓} c_{k,↓})</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="validity-conditions">
          <h3>📋 适用条件</h3>
          <div class="conditions-content">
            <div class="energy-scales">
              <h4>能量尺度分离：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>|ε_d| >> Γ, |ε_d + U| >> Γ</p>
                  <p>电荷涨落被抑制</p>
                  <p>局域磁矩形成</p>
                </div>
              </div>
            </div>

            <div class="occupation-constraint">
              <h4>占据约束：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>⟨n_d⟩ ≈ 1</p>
                  <p>单占据态为主</p>
                  <p>S = 1/2 局域自旋</p>
                </div>
              </div>
            </div>

            <div class="temperature-scale">
              <h4>温度尺度：</h4>
              <div class="mathematical-content">
                <div class="equation-block">
                  <p>T << |ε_d|, |ε_d + U|</p>
                  <p>低能有效理论</p>
                  <p>Kondo物理主导</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>两模型的比较与联系</h2>
      <div class="model-comparison">
        <div class="comparison-table">
          <h3>📊 模型对比</h3>
          <div class="table-content">
            <div class="comparison-grid">
              <div class="aspect-header">
                <h4>比较方面</h4>
              </div>
              <div class="anderson-header">
                <h4>Anderson模型</h4>
              </div>
              <div class="kondo-header">
                <h4>Kondo模型</h4>
              </div>
              
              <div class="aspect-item">
                <strong>物理图像</strong>
              </div>
              <div class="anderson-item">
                电荷涨落 + 自旋涨落
              </div>
              <div class="kondo-item">
                纯自旋涨落
              </div>
              
              <div class="aspect-item">
                <strong>自由度</strong>
              </div>
              <div class="anderson-item">
                杂质轨道占据数可变
              </div>
              <div class="kondo-item">
                固定S=1/2局域自旋
              </div>
              
              <div class="aspect-item">
                <strong>参数</strong>
              </div>
              <div class="anderson-item">
                ε_d, U, Γ
              </div>
              <div class="kondo-item">
                J
              </div>
              
              <div class="aspect-item">
                <strong>适用范围</strong>
              </div>
              <div class="anderson-item">
                所有参数区间
              </div>
              <div class="kondo-item">
                强关联区间
              </div>
              
              <div class="aspect-item">
                <strong>求解难度</strong>
              </div>
              <div class="anderson-item">
                较困难
              </div>
              <div class="kondo-item">
                相对简单
              </div>
            </div>
          </div>
        </div>

        <div class="connection-analysis">
          <h3>🔗 内在联系</h3>
          <div class="connection-content">
            <div class="parameter-mapping">
              <h4>参数映射关系：</h4>
              <div class="mapping-content">
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>J = 2|V|²[1/|ε_d| + 1/(U + ε_d)]</p>
                    <p>ρ_0 = 1/(2πΓ): 态密度</p>
                    <p>J_eff = Jρ_0: 无量纲耦合</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="energy-scales-relation">
              <h4>能量尺度关系：</h4>
              <div class="scales-grid">
                <div class="scale-card anderson-scales">
                  <h5>Anderson模型能量尺度：</h5>
                  <ul>
                    <li>Γ: 杂化宽度</li>
                    <li>|ε_d|: 杂质能级</li>
                    <li>U: 库仑排斥</li>
                  </ul>
                </div>
                
                <div class="scale-card kondo-scales">
                  <h5>Kondo模型能量尺度：</h5>
                  <ul>
                    <li>T_K: Kondo温度</li>
                    <li>J: 交换耦合</li>
                    <li>D: 带宽</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="universality">
              <h4>普适性：</h4>
              <div class="universality-content">
                <p>在低能极限下，不同的Anderson模型参数组合可以映射到相同的Kondo模型，
                表现出相同的普适行为。这种普适性是重整化群理论的重要体现。</p>
              </div>
            </div>
          </div>
        </div>

        <div class="physical-insights">
          <h3>💡 物理洞察</h3>
          <div class="insights-content">
            <div class="charge-spin-separation">
              <h4>电荷-自旋分离：</h4>
              <div class="separation-content">
                <p>从Anderson到Kondo的变换实质上是将高能的电荷自由度积分掉，
                保留低能的自旋自由度。这种分离在强关联系统中是一个重要的概念。</p>
              </div>
            </div>

            <div class="emergence-concept">
              <h4>涌现现象：</h4>
              <div class="emergence-content">
                <p>Kondo模型中的局域自旋是从Anderson模型的电子轨道中涌现出来的，
                这展示了凝聚态物理中涌现现象的一个典型例子。</p>
              </div>
            </div>

            <div class="effective-theory">
              <h4>有效理论：</h4>
              <div class="theory-content">
                <p>Kondo模型作为Anderson模型的低能有效理论，
                说明了在不同能量尺度下物理系统可以用不同的理论框架来描述。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验实现与验证</h2>
      <div class="experimental-verification">
        <div class="material-systems">
          <h3>🔬 材料体系</h3>
          <div class="systems-content">
            <div class="dilute-alloys">
              <h4>稀磁合金：</h4>
              <div class="alloys-content">
                <div class="alloy-examples">
                  <div class="example-card">
                    <h5>Cu:Fe合金：</h5>
                    <ul>
                      <li>经典Kondo系统</li>
                      <li>电阻率最小值</li>
                      <li>磁化率行为</li>
                    </ul>
                  </div>
                  
                  <div class="example-card">
                    <h5>Au:Mn合金：</h5>
                    <ul>
                      <li>强Kondo效应</li>
                      <li>低温异常</li>
                      <li>自旋玻璃竞争</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="quantum-dots">
              <h4>量子点系统：</h4>
              <div class="qd-content">
                <div class="qd-advantages">
                  <h5>优势：</h5>
                  <ul>
                    <li>参数可调</li>
                    <li>单杂质实现</li>
                    <li>精确控制</li>
                    <li>实时测量</li>
                  </ul>
                </div>
                
                <div class="qd-measurements">
                  <h5>测量技术：</h5>
                  <ul>
                    <li>电导测量</li>
                    <li>隧穿谱学</li>
                    <li>噪声测量</li>
                    <li>热电效应</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="molecular-systems">
              <h4>分子系统：</h4>
              <div class="molecular-content">
                <div class="single-molecule">
                  <h5>单分子器件：</h5>
                  <ul>
                    <li>有机分子</li>
                    <li>金属络合物</li>
                    <li>自旋交叉分子</li>
                  </ul>
                </div>
                
                <div class="stm-studies">
                  <h5>STM研究：</h5>
                  <ul>
                    <li>单原子操控</li>
                    <li>谱学测量</li>
                    <li>空间分辨</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-signatures">
          <h3>🔍 实验特征</h3>
          <div class="signatures-content">
            <div class="transport-signatures">
              <h4>输运特征：</h4>
              <div class="transport-grid">
                <div class="signature-card resistance-minimum">
                  <h5>电阻最小值：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>ρ(T) = ρ_0 + aT² + bT⁵ - cJ ln(T/T_K)</p>
                      <p>T_min ~ T_K</p>
                    </div>
                  </div>
                </div>
                
                <div class="signature-card conductance-plateau">
                  <h5>电导平台：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>G(T → 0) = (2e²/h) sin²(πδ/2)</p>
                      <p>δ: 相移</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="thermodynamic-signatures">
              <h4>热力学特征：</h4>
              <div class="thermo-grid">
                <div class="signature-card susceptibility">
                  <h5>磁化率：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>χ(T) = C/(T + T_K)</p>
                      <p>Curie-Weiss → 常数</p>
                    </div>
                  </div>
                </div>
                
                <div class="signature-card specific-heat">
                  <h5>比热：</h5>
                  <div class="mathematical-content">
                    <div class="equation-block">
                      <p>C(T) = γT + βT³</p>
                      <p>增强的γ系数</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="spectroscopic-signatures">
              <h4>谱学特征：</h4>
              <div class="spectro-grid">
                <div class="signature-card kondo-resonance">
                  <h5>Kondo共振峰：</h5>
                  <ul>
                    <li>费米能级处尖峰</li>
                    <li>宽度 ~ T_K</li>
                    <li>温度演化</li>
                  </ul>
                </div>
                
                <div class="signature-card fano-lineshape">
                  <h5>Fano线型：</h5>
                  <ul>
                    <li>非对称线型</li>
                    <li>量子干涉效应</li>
                    <li>相位信息</li>
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
          <p>Anderson模型描述了杂质轨道与传导电子的杂化，包含电荷涨落和自旋涨落两种物理过程。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>通过Schrieffer-Wolff变换，可以将强关联区间的Anderson模型约化为Kondo模型，实现电荷-自旋分离。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>Kondo模型作为Anderson模型的低能有效理论，展现了凝聚态物理中涌现现象和有效理论的重要概念。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>两模型在稀磁合金、量子点、分子器件等多种实验体系中得到验证，为理解强关联电子系统提供了重要基础。</p>
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

.anderson-model {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.model-formulation {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.model-formulation h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.formulation-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.hamiltonian,
.bath-term,
.impurity-term,
.hybridization-term {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hamiltonian h4,
.bath-term h4,
.impurity-term h4,
.hybridization-term h4 {
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

.physical-parameters {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.physical-parameters h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.parameters-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.parameter-definitions {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-definitions h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.parameters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.param-card {
  border-radius: 0.375rem;
  padding: 1rem;
  border: 2px solid;
}

.param-card.energy-level {
  background: #e6fffa;
  border-color: #4fd1c7;
}

.param-card.coulomb-repulsion {
  background: #fef5e7;
  border-color: #f6ad55;
}

.param-card.hybridization {
  background: #e6f3ff;
  border-color: #63b3ed;
}

.param-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.param-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.param-card li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
  font-size: 0.875rem;
}

.param-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.parameter-regimes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-regimes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.regimes-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.regime-item {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.regime-item h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.solution-methods {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.solution-methods h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.methods-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mean-field-theory {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.mean-field-theory h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mft-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.hartree-fock,
.self-energy {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.hartree-fock h5,
.self-energy h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.numerical-methods {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.numerical-methods h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.numerical-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.method-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.method-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.method-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.method-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.method-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.kondo-derivation {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.schrieffer-wolff {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.schrieffer-wolff h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.sw-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.transformation-idea {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transformation-idea h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.idea-content p {
  color: #4a5568;
  margin: 0;
}

.projection-operators,
.effective-hamiltonian {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.projection-operators h4,
.effective-hamiltonian h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.virtual-processes {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.virtual-processes h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.processes-content {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.process-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.process-card h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.process-description p {
  margin: 0.25rem 0;
  color: #4a5568;
  font-size: 0.875rem;
  font-family: 'Courier New', monospace;
}

.kondo-hamiltonian {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.kondo-hamiltonian h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.kondo-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.final-form,
.coupling-constant {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.final-form h4,
.coupling-constant h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.spin-operators {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spin-operators h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.operators-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.impurity-spin,
.conduction-spin {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.impurity-spin h5,
.conduction-spin h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.validity-conditions {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.validity-conditions h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.conditions-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.energy-scales,
.occupation-constraint,
.temperature-scale {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-scales h4,
.occupation-constraint h4,
.temperature-scale h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.model-comparison {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.comparison-table {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.comparison-table h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.table-content {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1px;
  background: #e2e8f0;
  border-radius: 0.375rem;
  overflow: hidden;
}

.aspect-header,
.anderson-header,
.kondo-header {
  background: #667eea;
  color: white;
  padding: 0.75rem;
  font-weight: 600;
  text-align: center;
}

.aspect-item,
.anderson-item,
.kondo-item {
  background: white;
  padding: 0.75rem;
  font-size: 0.875rem;
}

.aspect-item {
  font-weight: 600;
  color: #2d3748;
}

.anderson-item,
.kondo-item {
  color: #4a5568;
}

.connection-analysis {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.connection-analysis h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.connection-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.parameter-mapping {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.parameter-mapping h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.mapping-content {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-scales-relation {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.energy-scales-relation h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.scales-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.scale-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.scale-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.scale-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scale-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.scale-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.universality {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.universality h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.universality-content p {
  color: #4a5568;
  margin: 0;
}

.physical-insights {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.physical-insights h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.insights-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.charge-spin-separation,
.emergence-concept,
.effective-theory {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.charge-spin-separation h4,
.emergence-concept h4,
.effective-theory h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.separation-content p,
.emergence-content p,
.theory-content p {
  color: #4a5568;
  margin: 0;
}

.experimental-verification {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.material-systems {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.material-systems h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.systems-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.dilute-alloys {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.dilute-alloys h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.alloys-content {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.alloy-examples {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.example-card {
  background: white;
  border-radius: 0.25rem;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
}

.example-card h5 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.example-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.example-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.example-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.quantum-dots {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.quantum-dots h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.qd-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.qd-advantages,
.qd-measurements {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.qd-advantages h5,
.qd-measurements h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.qd-advantages ul,
.qd-measurements ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.qd-advantages li,
.qd-measurements li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.qd-advantages li::before,
.qd-measurements li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.molecular-systems {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.molecular-systems h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.molecular-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.single-molecule,
.stm-studies {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.single-molecule h5,
.stm-studies h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.single-molecule ul,
.stm-studies ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.single-molecule li,
.stm-studies li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.single-molecule li::before,
.stm-studies li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-signatures {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.experimental-signatures h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.signatures-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.transport-signatures {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.transport-signatures h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.transport-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.signature-card {
  background: #f8fafc;
  border-radius: 0.375rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.signature-card h5 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.5rem;
}

.thermodynamic-signatures {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.thermodynamic-signatures h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.thermo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.spectroscopic-signatures {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
}

.spectroscopic-signatures h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.spectro-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.signature-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.signature-card li {
  padding: 0.125rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 0.75rem;
  font-size: 0.75rem;
}

.signature-card li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.summary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 1rem;
  padding: 2rem;
  color: white;
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
  border-radius: 0.75rem;
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
  font-weight: 600;
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
  
  .parameters-grid,
  .numerical-grid,
  .process-grid,
  .operators-content,
  .scales-grid,
  .comparison-grid,
  .alloy-examples,
  .qd-content,
  .molecular-content,
  .transport-grid,
  .thermo-grid,
  .spectro-grid {
    grid-template-columns: 1fr;
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .aspect-header,
  .anderson-header,
  .kondo-header {
    display: none;
  }
  
  .aspect-item {
    background: #667eea;
    color: white;
    font-weight: 600;
  }
  
  .anderson-item::before {
    content: "Anderson: ";
    font-weight: 600;
    color: #2d3748;
  }
  
  .kondo-item::before {
    content: "Kondo: ";
    font-weight: 600;
    color: #2d3748;
  }
}
</style>