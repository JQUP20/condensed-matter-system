<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">3.1.2 两格点Hubbard模型</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">量子多体</span>
        <span class="reading-time">阅读时间: 20分钟</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        两格点Hubbard模型是最简单的非平凡多体系统，虽然只包含两个格点，但它展现了Hubbard模型的核心物理：
        电子跃迁与库伦排斥的竞争。这个模型可以精确求解，为理解更复杂系统提供了重要的物理直觉。
      </p>
    </div>

    <section class="content-section">
      <h2>模型设定</h2>
      <div class="concept-grid">
        <div class="concept-card">
          <div class="concept-icon">🔗</div>
          <h3>哈密顿量</h3>
          <p>两格点系统的完整哈密顿量</p>
          <div class="mathematical-content">
            <h4>总哈密顿量：</h4>
            <div class="equation-block">
              <p>H = -t ∑σ (c†₁σc₂σ + c†₂σc₁σ) + U(n₁↑n₁↓ + n₂↑n₂↓)</p>
              <p>跃迁项 + 在位相互作用项</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">⚡</div>
          <h3>基态构型</h3>
          <p>可能的电子占据态</p>
          <div class="mathematical-content">
            <h4>基本态：</h4>
            <div class="equation-block">
              <p>|0⟩: 真空态</p>
              <p>|1σ⟩, |2σ⟩: 单电子态</p>
              <p>|1σ,2σ'⟩: 双电子态</p>
              <p>|1↑↓⟩, |2↑↓⟩: 双占据态</p>
            </div>
          </div>
        </div>

        <div class="concept-card">
          <div class="concept-icon">🎯</div>
          <h3>对称性</h3>
          <p>系统的守恒量和对称性</p>
          <div class="mathematical-content">
            <h4>守恒量：</h4>
            <div class="equation-block">
              <p>N = N₁ + N₂: 总粒子数</p>
              <p>Sz = (N↑ - N↓)/2: 总自旋</p>
              <p>空间反演对称性</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>精确对角化求解</h2>
      <div class="solution-steps">
        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>构造基态空间</h3>
            <p>根据粒子数和自旋量子数分类所有可能的态。</p>
            <div class="basis-table">
              <table>
                <thead>
                  <tr>
                    <th>粒子数</th>
                    <th>自旋</th>
                    <th>基态</th>
                    <th>维数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>|0⟩</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>±1/2</td>
                    <td>|1σ⟩, |2σ⟩</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0</td>
                    <td>|1↑,2↓⟩, |1↓,2↑⟩, |1↑↓⟩, |2↑↓⟩</td>
                    <td>6</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>±1</td>
                    <td>|1↑,2↑⟩, |1↓,2↓⟩</td>
                    <td>2</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>单电子扇区 (N=1)</h3>
            <p>单电子在两格点间的跃迁问题。</p>
            <div class="mathematical-content">
              <h4>哈密顿矩阵：</h4>
              <div class="equation-block">
                <p>H₁ = -t [0  1]</p>
                <p>      [1  0]</p>
                <p>本征值: E± = ±t</p>
                <p>本征态: |±⟩ = (|1⟩ ± |2⟩)/√2</p>
              </div>
            </div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>双电子扇区 (N=2, Sz=0)</h3>
            <p>最有趣的情况：跃迁与相互作用的竞争。</p>
            <div class="mathematical-content">
              <h4>基态选择：</h4>
              <div class="equation-block">
                <p>|T⟩ = (|1↑,2↓⟩ + |1↓,2↑⟩)/√2 (三重态)</p>
                <p>|S⟩ = (|1↑,2↓⟩ - |1↓,2↑⟩)/√2 (单重态)</p>
                <p>|D₁⟩ = |1↑↓⟩, |D₂⟩ = |2↑↓⟩ (双占据态)</p>
              </div>
            </div>
          </div>
        </div>

        <div class="step-card">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>4×4哈密顿矩阵</h3>
            <p>在{|T⟩, |S⟩, |D₁⟩, |D₂⟩}基下的矩阵表示。</p>
            <div class="mathematical-content">
              <h4>矩阵形式：</h4>
              <div class="equation-block">
                <p>H₂ = [-2t   0   -t   -t ]</p>
                <p>     [ 0   -2t  -t   -t ]</p>
                <p>     [-t   -t    U    0 ]</p>
                <p>     [-t   -t    0    U ]</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>能谱分析</h2>
      <div class="energy-analysis">
        <div class="energy-card">
          <h3>本征值求解</h3>
          <div class="energy-content">
            <div class="mathematical-content">
              <h4>特征方程：</h4>
              <div class="equation-block">
                <p>det(H₂ - EI) = 0</p>
                <p>E₁ = -2t (三重态，简并度3)</p>
                <p>E₂ = -2t (单重态)</p>
                <p>E₃,₄ = (U ± √(U² + 16t²))/2</p>
              </div>
            </div>
          </div>
        </div>

        <div class="energy-card">
          <h3>基态相图</h3>
          <div class="energy-content">
            <div class="phase-diagram">
              <div class="phase-region">
                <h4>U ≪ t 区域：</h4>
                <ul>
                  <li>基态: E₄ ≈ -2t - 4t²/U</li>
                  <li>波函数: 主要为离域态</li>
                  <li>物理: 动能主导</li>
                </ul>
              </div>
              <div class="phase-region">
                <h4>U ≫ t 区域：</h4>
                <ul>
                  <li>基态: E₄ ≈ -4t²/U</li>
                  <li>波函数: 主要为三重态</li>
                  <li>物理: 相互作用主导</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="energy-card">
          <h3>交叉点分析</h3>
          <div class="energy-content">
            <div class="mathematical-content">
              <h4>临界点：</h4>
              <div class="equation-block">
                <p>Uc = 0 (总是E₄最低)</p>
                <p>但性质在U ~ t处显著变化</p>
                <p>从离域到局域的渡越</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>物理性质计算</h2>
      <div class="properties-grid">
        <div class="property-card">
          <div class="property-icon">🔋</div>
          <h3>双占据概率</h3>
          <div class="property-content">
            <div class="mathematical-content">
              <h4>定义：</h4>
              <div class="equation-block">
                <p>D = ⟨n₁↑n₁↓⟩ + ⟨n₂↑n₂↓⟩</p>
                <p>弱耦合: D ≈ 1 - 8t²/U²</p>
                <p>强耦合: D ≈ 16t⁴/U⁴</p>
              </div>
            </div>
            <div class="insight-box">
              <p>双占据概率反映了库伦排斥对电子局域化的影响。</p>
            </div>
          </div>
        </div>

        <div class="property-card">
          <div class="property-icon">🧲</div>
          <h3>自旋关联</h3>
          <div class="property-content">
            <div class="mathematical-content">
              <h4>自旋-自旋关联：</h4>
              <div class="equation-block">
                <p>⟨S₁·S₂⟩ = ⟨S₁ᶻS₂ᶻ⟩ + ½⟨S₁⁺S₂⁻ + S₁⁻S₂⁺⟩</p>
                <p>弱耦合: ⟨S₁·S₂⟩ ≈ 0</p>
                <p>强耦合: ⟨S₁·S₂⟩ ≈ -3/4</p>
              </div>
            </div>
            <div class="insight-box">
              <p>强耦合极限下形成反铁磁关联，这是Heisenberg模型的前身。</p>
            </div>
          </div>
        </div>

        <div class="property-card">
          <div class="property-icon">⚡</div>
          <h3>动能期望值</h3>
          <div class="property-content">
            <div class="mathematical-content">
              <h4>动能：</h4>
              <div class="equation-block">
                <p>⟨T⟩ = -t ∑σ ⟨c†₁σc₂σ + h.c.⟩</p>
                <p>弱耦合: ⟨T⟩ ≈ -2t</p>
                <p>强耦合: ⟨T⟩ ≈ -4t²/U</p>
              </div>
            </div>
            <div class="insight-box">
              <p>强关联下动能被显著抑制，电子变得局域化。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>物理图像与直觉</h2>
      <div class="physics-insights">
        <div class="insight-card">
          <div class="insight-header">
            <div class="insight-icon">🌊</div>
            <h3>弱耦合图像 (U ≪ t)</h3>
          </div>
          <div class="insight-content">
            <h4>主要特征：</h4>
            <ul>
              <li>电子在两格点间自由跃迁</li>
              <li>形成分子轨道态：成键态和反键态</li>
              <li>双占据概率接近经典值</li>
              <li>自旋关联很弱</li>
            </ul>
            <div class="visual-representation">
              <div class="electron-diagram">
                <div class="site">格点1</div>
                <div class="hopping">↔</div>
                <div class="site">格点2</div>
              </div>
              <p class="diagram-caption">电子离域，自由跃迁</p>
            </div>
          </div>
        </div>

        <div class="insight-card">
          <div class="insight-header">
            <div class="insight-icon">🔒</div>
            <h3>强耦合图像 (U ≫ t)</h3>
          </div>
          <div class="insight-content">
            <h4>主要特征：</h4>
            <ul>
              <li>电子避免双占据，局域在不同格点</li>
              <li>通过虚跃迁产生反铁磁交换</li>
              <li>双占据概率被强烈抑制</li>
              <li>形成强反铁磁关联</li>
            </ul>
            <div class="visual-representation">
              <div class="electron-diagram">
                <div class="site">↑格点1</div>
                <div class="exchange">⟷</div>
                <div class="site">格点2↓</div>
              </div>
              <p class="diagram-caption">电子局域，反铁磁关联</p>
            </div>
          </div>
        </div>

        <div class="insight-card">
          <div class="insight-header">
            <div class="insight-icon">⚖️</div>
            <h3>中等耦合 (U ~ t)</h3>
          </div>
          <div class="insight-content">
            <h4>主要特征：</h4>
            <ul>
              <li>动能与相互作用能竞争</li>
              <li>量子涨落最强的区域</li>
              <li>物理性质的快速变化</li>
              <li>最难处理的参数区域</li>
            </ul>
            <div class="visual-representation">
              <div class="electron-diagram">
                <div class="site">格点1</div>
                <div class="competition">⚔️</div>
                <div class="site">格点2</div>
              </div>
              <p class="diagram-caption">动能与相互作用竞争</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>Mott转变理论</h2>
      <div class="mott-theory">
        <div class="theory-card">
          <div class="theory-header">
            <div class="theory-icon">🔄</div>
            <h3>Mott转变的物理本质</h3>
          </div>
          <div class="theory-content">
            <div class="mathematical-content">
              <h4>基本概念：</h4>
              <div class="equation-block">
                <p>金属-绝缘体转变 (MIT)</p>
                <p>驱动机制：电子关联 vs 带宽</p>
                <p>临界条件：U_c ~ W (带宽)</p>
                <p>两格点模型：U_c ≈ 4t</p>
              </div>
            </div>
            <div class="insight-box">
              <p>Mott转变是纯电子关联驱动的量子相变，不涉及晶格对称性破缺。</p>
            </div>
          </div>
        </div>

        <div class="theory-card">
          <div class="theory-header">
            <div class="theory-icon">📊</div>
            <h3>Brinkman-Rice理论</h3>
          </div>
          <div class="theory-content">
            <div class="mathematical-content">
              <h4>准粒子重整化：</h4>
              <div class="equation-block">
                <p>Z = (1 - n²/4)/(1 - U·n/4)</p>
                <p>有效质量：m*/m = 1/Z</p>
                <p>临界点：Z → 0 当 U → U_c</p>
                <p>U_c = 4t (半填充)</p>
              </div>
            </div>
            <div class="phase-diagram">
              <div class="phase-region">
                <h4>金属相 (U < U_c)：</h4>
                <ul>
                  <li>有限准粒子权重 Z > 0</li>
                  <li>费米液体行为</li>
                  <li>线性电阻率</li>
                </ul>
              </div>
              <div class="phase-region">
                <h4>Mott绝缘体 (U > U_c)：</h4>
                <ul>
                  <li>准粒子权重 Z = 0</li>
                  <li>能隙 Δ ∝ √(U - U_c)</li>
                  <li>激活型电导</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="theory-card">
          <div class="theory-header">
            <div class="theory-icon">🌡️</div>
            <h3>有限温度效应</h3>
          </div>
          <div class="theory-content">
            <div class="mathematical-content">
              <h4>温度相图：</h4>
              <div class="equation-block">
                <p>T_c ∝ t²/U (相干温度)</p>
                <p>T* ∝ U (局域矩形成温度)</p>
                <p>伪能隙：T_c < T < T*</p>
              </div>
            </div>
            <div class="insight-box">
              <p>有限温度下，Mott转变变为连续的交叉，伴随伪能隙现象。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>动力学平均场理论 (DMFT)</h2>
      <div class="dmft-theory">
        <div class="dmft-card">
          <div class="dmft-header">
            <h3>🔬 DMFT基本思想</h3>
          </div>
          <div class="dmft-content">
            <div class="mathematical-content">
              <h4>自洽方程：</h4>
              <div class="equation-block">
                <p>G(iω_n) = ∫ dε ρ(ε)/(iω_n + μ - ε - Σ(iω_n))</p>
                <p>G_0^(-1)(iω_n) = G^(-1)(iω_n) + Σ(iω_n)</p>
                <p>杂质问题：H_imp = U n↑n↓ + ∑_k V_k(c†f_k + h.c.)</p>
              </div>
            </div>
            <div class="insight-box">
              <p>DMFT将多体问题映射为单杂质Anderson模型，保留了局域量子涨落。</p>
            </div>
          </div>
        </div>

        <div class="dmft-card">
          <div class="dmft-header">
            <h3>📈 谱函数演化</h3>
          </div>
          <div class="dmft-content">
            <div class="mathematical-content">
              <h4>谱密度特征：</h4>
              <div class="equation-block">
                <p>A(ω) = -1/π Im G(ω + i0⁺)</p>
                <p>金属相：准粒子峰 + Hubbard带</p>
                <p>绝缘相：上下Hubbard带分离</p>
                <p>能隙：Δ = U - W</p>
              </div>
            </div>
            <div class="spectral-evolution">
              <div class="spectrum-phase">
                <h4>弱耦合 (U < U_c)：</h4>
                <ul>
                  <li>费米能级处有尖锐准粒子峰</li>
                  <li>Hubbard带位于 ±U/2</li>
                  <li>准粒子权重 Z ≈ 1 - (U/4t)²</li>
                </ul>
              </div>
              <div class="spectrum-phase">
                <h4>强耦合 (U > U_c)：</h4>
                <ul>
                  <li>费米能级处无态密度</li>
                  <li>上下Hubbard带完全分离</li>
                  <li>能隙 Δ ≈ U - 8t²/U</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>实验证据与观测</h2>
      <div class="experimental-evidence">
        <div class="evidence-card">
          <div class="evidence-header">
            <div class="evidence-icon">🔬</div>
            <h3>过渡金属氧化物</h3>
          </div>
          <div class="evidence-content">
            <div class="material-examples">
              <div class="material-item">
                <h4>V₂O₃ (钒氧化物)：</h4>
                <ul>
                  <li>经典Mott绝缘体</li>
                  <li>压力诱导MIT：P_c ≈ 2 GPa</li>
                  <li>温度诱导MIT：T_c ≈ 150 K</li>
                  <li>一级相变特征</li>
                </ul>
              </div>
              <div class="material-item">
                <h4>Ca₂RuO₄ (钌氧化物)：</h4>
                <ul>
                  <li>层状钙钛矿结构</li>
                  <li>Mott绝缘体基态</li>
                  <li>反铁磁序 T_N ≈ 110 K</li>
                  <li>轨道有序</li>
                </ul>
              </div>
              <div class="material-item">
                <h4>Sr₂IrO₄ (铱氧化物)：</h4>
                <ul>
                  <li>自旋轨道耦合Mott绝缘体</li>
                  <li>Jeff = 1/2 有效自旋</li>
                  <li>能隙 Δ ≈ 0.6 eV</li>
                  <li>类铜氧化物行为</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="evidence-card">
          <div class="evidence-header">
            <div class="evidence-icon">⚡</div>
            <h3>输运性质测量</h3>
          </div>
          <div class="evidence-content">
            <div class="transport-measurements">
              <div class="measurement-type">
                <h4>电阻率测量：</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>金属相：ρ(T) = ρ₀ + AT² (费米液体)</p>
                    <p>绝缘相：ρ(T) = ρ₀ exp(Δ/2k_BT)</p>
                    <p>临界区：ρ(T) ∝ T^(-α), α ≈ 1</p>
                  </div>
                </div>
              </div>
              <div class="measurement-type">
                <h4>光电导谱：</h4>
                <ul>
                  <li>Drude峰消失 (MIT标志)</li>
                  <li>Hubbard带间跃迁</li>
                  <li>中红外吸收增强</li>
                  <li>谱权重转移</li>
                </ul>
              </div>
              <div class="measurement-type">
                <h4>霍尔效应：</h4>
                <ul>
                  <li>载流子密度突变</li>
                  <li>霍尔系数符号反转</li>
                  <li>迁移率急剧下降</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="evidence-card">
          <div class="evidence-header">
            <div class="evidence-icon">🔍</div>
            <h3>谱学实验技术</h3>
          </div>
          <div class="evidence-content">
            <div class="spectroscopy-techniques">
              <div class="technique-item">
                <h4>角分辨光电子谱 (ARPES)：</h4>
                <ul>
                  <li>直接观测准粒子峰消失</li>
                  <li>Hubbard带分离</li>
                  <li>费米面重构</li>
                  <li>准粒子权重测量</li>
                </ul>
              </div>
              <div class="technique-item">
                <h4>X射线吸收谱 (XAS)：</h4>
                <ul>
                  <li>电子占据态分析</li>
                  <li>轨道混杂程度</li>
                  <li>配位环境变化</li>
                </ul>
              </div>
              <div class="technique-item">
                <h4>共振非弹性X射线散射 (RIXS)：</h4>
                <ul>
                  <li>电荷激发谱</li>
                  <li>自旋激发</li>
                  <li>轨道激发</li>
                  <li>多体激发</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>现代研究前沿</h2>
      <div class="modern-research">
        <div class="research-card">
          <div class="research-header">
            <div class="research-icon">🧠</div>
            <h3>机器学习方法</h3>
          </div>
          <div class="research-content">
            <div class="ml-applications">
              <div class="ml-method">
                <h4>神经网络量子态 (NQS)：</h4>
                <ul>
                  <li>变分蒙特卡罗优化</li>
                  <li>RBM表示多体波函数</li>
                  <li>自动微分计算梯度</li>
                  <li>处理大系统尺寸</li>
                </ul>
              </div>
              <div class="ml-method">
                <h4>深度学习相识别：</h4>
                <ul>
                  <li>卷积神经网络分析</li>
                  <li>无监督学习发现序参量</li>
                  <li>相变点自动识别</li>
                  <li>隐藏相的发现</li>
                </ul>
              </div>
              <div class="ml-method">
                <h4>强化学习优化：</h4>
                <ul>
                  <li>量子态制备协议</li>
                  <li>实验参数优化</li>
                  <li>控制序列设计</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="research-card">
          <div class="research-header">
            <div class="research-icon">⚛️</div>
            <h3>量子计算应用</h3>
          </div>
          <div class="research-content">
            <div class="quantum-computing">
              <div class="qc-method">
                <h4>变分量子本征求解器 (VQE)：</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>|ψ(θ)⟩ = U(θ)|0⟩ (参数化量子线路)</p>
                    <p>E(θ) = ⟨ψ(θ)|H|ψ(θ)⟩</p>
                    <p>优化：min_θ E(θ)</p>
                  </div>
                </div>
                <ul>
                  <li>NISQ设备适用</li>
                  <li>经典-量子混合算法</li>
                  <li>噪声鲁棒性</li>
                </ul>
              </div>
              <div class="qc-method">
                <h4>量子近似优化算法 (QAOA)：</h4>
                <ul>
                  <li>绝热演化近似</li>
                  <li>参数化Trotter分解</li>
                  <li>组合优化问题</li>
                </ul>
              </div>
              <div class="qc-method">
                <h4>数字量子模拟：</h4>
                <ul>
                  <li>Trotter-Suzuki分解</li>
                  <li>实时演化模拟</li>
                  <li>非平衡动力学</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="research-card">
          <div class="research-header">
            <div class="research-icon">🌊</div>
            <h3>非平衡动力学</h3>
          </div>
          <div class="research-content">
            <div class="nonequilibrium-dynamics">
              <div class="dynamics-type">
                <h4>量子淬火 (Quantum Quench)：</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p>H(t) = H₀ (t < 0) → H₁ (t > 0)</p>
                    <p>|ψ(t)⟩ = e^(-iH₁t)|ψ₀⟩</p>
                    <p>弛豫动力学研究</p>
                  </div>
                </div>
                <ul>
                  <li>预热化现象</li>
                  <li>广义Gibbs系综</li>
                  <li>积分性破缺</li>
                </ul>
              </div>
              <div class="dynamics-type">
                <h4>周期驱动系统：</h4>
                <ul>
                  <li>Floquet工程</li>
                  <li>动力学局域化</li>
                  <li>时间晶体</li>
                  <li>加热抑制</li>
                </ul>
              </div>
              <div class="dynamics-type">
                <h4>开放量子系统：</h4>
                <ul>
                  <li>Lindblad主方程</li>
                  <li>耗散相变</li>
                  <li>稳态相图</li>
                  <li>量子跳跃</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="research-card">
          <div class="research-header">
            <div class="research-icon">🔮</div>
            <h3>拓扑Mott绝缘体</h3>
          </div>
          <div class="research-content">
            <div class="topological-mott">
              <div class="topo-concept">
                <h4>基本概念：</h4>
                <ul>
                  <li>拓扑序与电子关联结合</li>
                  <li>分数化准粒子</li>
                  <li>边界态保护</li>
                  <li>量子自旋液体</li>
                </ul>
              </div>
              <div class="topo-examples">
                <h4>理论模型：</h4>
                <ul>
                  <li>Kitaev蜂窝格子模型</li>
                  <li>Hubbard-Hofstadter模型</li>
                  <li>Kane-Mele-Hubbard模型</li>
                </ul>
              </div>
              <div class="topo-materials">
                <h4>候选材料：</h4>
                <ul>
                  <li>α-RuCl₃ (Kitaev材料)</li>
                  <li>Na₂IrO₃ (蜂窝格子)</li>
                  <li>扭转双分子层石墨烯</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>与实验的联系</h2>
      <div class="experimental-connections">
        <div class="connection-card">
          <h3>🔬 分子系统</h3>
          <div class="connection-content">
            <h4>氢分子离子 H₂⁺：</h4>
            <ul>
              <li>两个质子，一个电子</li>
              <li>纯跃迁问题，U = 0</li>
              <li>成键-反键分裂</li>
            </ul>
            
            <h4>氢分子 H₂：</h4>
            <ul>
              <li>两个质子，两个电子</li>
              <li>包含电子-电子相互作用</li>
              <li>Hubbard模型的直接实现</li>
            </ul>
          </div>
        </div>

        <div class="connection-card">
          <h3>🧊 量子点系统</h3>
          <div class="connection-content">
            <h4>双量子点：</h4>
            <ul>
              <li>人工原子系统</li>
              <li>可调的t和U参数</li>
              <li>直接测量电荷和自旋态</li>
            </ul>
            
            <h4>实验观测：</h4>
            <ul>
              <li>库伦阻塞效应</li>
              <li>自旋阻塞</li>
              <li>Kondo效应</li>
            </ul>
          </div>
        </div>

        <div class="connection-card">
          <h3>❄️ 冷原子系统</h3>
          <div class="connection-content">
            <h4>光晶格中的原子：</h4>
            <ul>
              <li>完美的Hubbard模型实现</li>
              <li>精确可控的参数</li>
              <li>实时观测量子态演化</li>
            </ul>
            
            <h4>测量技术：</h4>
            <ul>
              <li>单原子分辨成像</li>
              <li>关联函数测量</li>
              <li>量子气体显微镜</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="summary">
      <h2>本节总结</h2>
      <div class="key-points">
        <div class="point-item">
          <div class="point-number">1</div>
          <p>两格点Hubbard模型虽然简单，但包含了强关联电子系统的核心物理：动能与相互作用能的竞争。</p>
        </div>
        <div class="point-item">
          <div class="point-number">2</div>
          <p>精确对角化揭示了从弱耦合的离域态到强耦合的局域反铁磁态的渡越过程。</p>
        </div>
        <div class="point-item">
          <div class="point-number">3</div>
          <p>双占据概率和自旋关联函数是表征系统性质的重要物理量，反映了电子关联的强度。</p>
        </div>
        <div class="point-item">
          <div class="point-number">4</div>
          <p>该模型为理解分子、量子点和冷原子系统等实际物理系统提供了重要的理论基础。</p>
        </div>
        <div class="point-item">
          <div class="point-number">5</div>
          <p>Mott转变理论揭示了电子关联驱动的金属-绝缘体相变机制，是强关联电子系统的核心概念。</p>
        </div>
        <div class="point-item">
          <div class="point-number">6</div>
          <p>DMFT等现代理论方法为理解Mott转变提供了定量的理论框架和计算工具。</p>
        </div>
        <div class="point-item">
          <div class="point-number">7</div>
          <p>过渡金属氧化物中的实验观测为Mott转变理论提供了重要的实验验证和物理直觉。</p>
        </div>
        <div class="point-item">
          <div class="point-number">8</div>
          <p>机器学习、量子计算等现代技术为研究强关联电子系统开辟了新的途径和可能性。</p>
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
  background: #667eea;
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

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.concept-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.concept-card p {
  color: #4a5568;
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

.solution-steps {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.step-card {
  display: flex;
  gap: 1rem;
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.step-number {
  background: #667eea;
  color: white;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.75rem;
}

.step-content p {
  color: #4a5568;
  margin-bottom: 1rem;
}

.basis-table {
  margin-top: 1rem;
}

.basis-table table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.basis-table th,
.basis-table td {
  padding: 0.75rem;
  text-align: center;
  border-bottom: 1px solid #e2e8f0;
}

.basis-table th {
  background: #f8fafc;
  font-weight: 600;
  color: #2d3748;
}

.basis-table td {
  color: #4a5568;
}

.energy-analysis {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.energy-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.energy-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.phase-diagram {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.phase-region {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.phase-region h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.phase-region ul {
  list-style: none;
  padding: 0;
}

.phase-region li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.phase-region li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.properties-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.property-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.property-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.property-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.insight-box {
  background: #e6fffa;
  border: 1px solid #81e6d9;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 1rem;
}

.insight-box p {
  margin: 0;
  color: #234e52;
  font-style: italic;
}

.physics-insights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.insight-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.insight-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.insight-icon {
  font-size: 2rem;
}

.insight-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.insight-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.insight-content ul {
  list-style: none;
  padding: 0;
}

.insight-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.insight-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.visual-representation {
  margin-top: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
  text-align: center;
}

.electron-diagram {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.site {
  background: #667eea;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  font-weight: 600;
}

.hopping, .exchange, .competition {
  font-size: 1.5rem;
  color: #667eea;
}

.diagram-caption {
  font-size: 0.875rem;
  color: #718096;
  margin: 0;
}

.experimental-connections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.connection-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.connection-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.connection-content h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #4a5568;
  margin: 1rem 0 0.5rem 0;
}

.connection-content ul {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.connection-content li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.connection-content li::before {
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
  
  .concept-grid, .energy-analysis, .properties-grid, .physics-insights, .experimental-connections {
    grid-template-columns: 1fr;
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .step-card, .insight-header {
    flex-direction: column;
  }
  
  .electron-diagram {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>

/* 新增样式 */
.mott-theory {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.theory-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.theory-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.theory-icon {
  font-size: 2rem;
}

.theory-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.theory-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.dmft-theory {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.dmft-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.dmft-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
}

.dmft-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.spectral-evolution {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.spectrum-phase {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.spectrum-phase h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.spectrum-phase ul {
  list-style: none;
  padding: 0;
}

.spectrum-phase li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.spectrum-phase li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.experimental-evidence {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

.evidence-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.evidence-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.evidence-icon {
  font-size: 2rem;
}

.evidence-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.evidence-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.material-examples {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.material-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.material-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.material-item ul {
  list-style: none;
  padding: 0;
}

.material-item li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.material-item li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.transport-measurements {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.measurement-type {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.measurement-type h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.measurement-type ul {
  list-style: none;
  padding: 0;
}

.measurement-type li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.measurement-type li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.spectroscopy-techniques {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.technique-item {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.technique-item h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.technique-item ul {
  list-style: none;
  padding: 0;
}

.technique-item li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.technique-item li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-research {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.research-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.research-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.research-icon {
  font-size: 2rem;
}

.research-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.research-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-applications, .quantum-computing, .nonequilibrium-dynamics, .topological-mott {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-method, .qc-method, .dynamics-type, .topo-concept, .topo-examples, .topo-materials {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.ml-method h4, .qc-method h4, .dynamics-type h4, .topo-concept h4, .topo-examples h4, .topo-materials h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.ml-method ul, .qc-method ul, .dynamics-type ul, .topo-concept ul, .topo-examples ul, .topo-materials ul {
  list-style: none;
  padding: 0;
}

.ml-method li, .qc-method li, .dynamics-type li, .topo-concept li, .topo-examples li, .topo-materials li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.ml-method li::before, .qc-method li::before, .dynamics-type li::before, .topo-concept li::before, .topo-examples li::before, .topo-materials li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-research {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.research-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.research-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.research-icon {
  font-size: 2rem;
}

.research-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.research-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-applications, .quantum-computing, .nonequilibrium-dynamics, .topological-mott {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-method, .qc-method, .dynamics-type, .topo-concept, .topo-examples, .topo-materials {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.ml-method h4, .qc-method h4, .dynamics-type h4, .topo-concept h4, .topo-examples h4, .topo-materials h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.ml-method ul, .qc-method ul, .dynamics-type ul, .topo-concept ul, .topo-examples ul, .topo-materials ul {
  list-style: none;
  padding: 0;
}

.ml-method li, .qc-method li, .dynamics-type li, .topo-concept li, .topo-examples li, .topo-materials li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.ml-method li::before, .qc-method li::before, .dynamics-type li::before, .topo-concept li::before, .topo-examples li::before, .topo-materials li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-research {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.research-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.research-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.research-icon {
  font-size: 2rem;
}

.research-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.research-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-applications, .quantum-computing, .nonequilibrium-dynamics, .topological-mott {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-method, .qc-method, .dynamics-type, .topo-concept, .topo-examples, .topo-materials {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.ml-method h4, .qc-method h4, .dynamics-type h4, .topo-concept h4, .topo-examples h4, .topo-materials h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.ml-method ul, .qc-method ul, .dynamics-type ul, .topo-concept ul, .topo-examples ul, .topo-materials ul {
  list-style: none;
  padding: 0;
}

.ml-method li, .qc-method li, .dynamics-type li, .topo-concept li, .topo-examples li, .topo-materials li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.ml-method li::before, .qc-method li::before, .dynamics-type li::before, .topo-concept li::before, .topo-examples li::before, .topo-materials li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-research {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.research-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid #e2e8f0;
}

.research-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.research-icon {
  font-size: 2rem;
}

.research-header h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2d3748;
  margin: 0;
}

.research-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-applications, .quantum-computing, .nonequilibrium-dynamics, .topological-mott {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ml-method, .qc-method, .dynamics-type, .topo-concept, .topo-examples, .topo-materials {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e2e8f0;
}

.ml-method h4, .qc-method h4, .dynamics-type h4, .topo-concept h4, .topo-examples h4, .topo-materials h4 {
  font-size: 1rem;
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
}

.ml-method ul, .qc-method ul, .dynamics-type ul, .topo-concept ul, .topo-examples ul, .topo-materials ul {
  list-style: none;
  padding: 0;
}

.ml-method li, .qc-method li, .dynamics-type li, .topo-concept li, .topo-examples li, .topo-materials li {
  padding: 0.25rem 0;
  color: #4a5568;
  position: relative;
  padding-left: 1rem;
}

.ml-method li::before, .qc-method li::before, .dynamics-type li::before, .topo-concept li::before, .topo-examples li::before, .topo-materials li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: bold;
}

.modern-research {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1.5rem;
}

.research-card {
  background: #f7fafc;
  border-radius: 0.75rem;
  padding: 1.5rem;
  border: 1px solid