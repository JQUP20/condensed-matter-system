<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.4 Coulomb相互作用多体哈密顿算子表示</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">多体相互作用</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>Coulomb相互作用的重要性</h2>
        <p class="lead-text">
          Coulomb相互作用是凝聚态物理中最基本也是最重要的相互作用之一。它不仅决定了原子的结构，
          也是理解金属、绝缘体、超导体等各种凝聚态相的关键。在二次量子化框架下，
          Coulomb相互作用的表示变得更加系统和优雅。
        </p>
      </section>

      <section class="content-section">
        <h2>Coulomb相互作用的基本形式</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>经典Coulomb势</h3>
            <p>两个点电荷间的基本相互作用</p>
            <div class="mathematical-content">
              <h4>基本形式：</h4>
              <div class="equation-block">
                <p>V(r) = e²/(4πε₀r)</p>
                <p>其中e是基本电荷，ε₀是真空介电常数</p>
              </div>
              
              <h4>在固体中：</h4>
              <div class="equation-block">
                <p>V(r) = e²/(4πεᵣε₀r)</p>
                <p>εᵣ是相对介电常数</p>
              </div>
              
              <h4>原子单位制：</h4>
              <div class="equation-block">
                <p>V(r) = 1/r (以Hartree为能量单位)</p>
                <p>长度单位：Bohr半径 a₀ = ℏ²/(me²)</p>
                <p>能量单位：Hartree = e²/(4πε₀a₀)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>场算符表示</h3>
            <p>用场算符表示的Coulomb相互作用</p>
            <div class="mathematical-content">
              <h4>连续系统：</h4>
              <div class="equation-block">
                <p>V̂ = (1/2)∫∫ ψ̂†(r)ψ̂†(r')V(r-r')ψ̂(r')ψ̂(r) d³rd³r'</p>
                <p>V(r-r') = e²/(4πε₀|r-r'|)</p>
              </div>
              
              <h4>包含自旋：</h4>
              <div class="equation-block">
                <p>V̂ = (1/2)∑σ,σ' ∫∫ ψ̂†σ(r)ψ̂†σ'(r')V(r-r')ψ̂σ'(r')ψ̂σ(r) d³rd³r'</p>
                <p>自旋不影响Coulomb相互作用</p>
              </div>
              
              <h4>正规排序：</h4>
              <div class="equation-block">
                <p>:V̂: = V̂ - ⟨0|V̂|0⟩</p>
                <p>消除真空能的发散</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔢</div>
            <h3>动量表示</h3>
            <p>在动量空间中的Coulomb相互作用</p>
            <div class="mathematical-content">
              <h4>Fourier变换：</h4>
              <div class="equation-block">
                <p>V(q) = ∫ V(r)e^(-iq·r) d³r = 4πe²/(ε₀q²)</p>
                <p>这是著名的1/q²形式</p>
              </div>
              
              <h4>动量空间表示：</h4>
              <div class="equation-block">
                <p>V̂ = (1/2V)∑k,k',q,σ,σ' V(q) ĉ†k+q,σ ĉ†k'-q,σ' ĉk',σ' ĉk,σ</p>
                <p>V是系统体积</p>
              </div>
              
              <h4>q→0发散：</h4>
              <div class="equation-block">
                <p>V(q→0) → ∞</p>
                <p>需要电荷中性条件来处理</p>
                <p>∑i qi = 0 (总电荷为零)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Coulomb电子气模型 -->
      <section class="content-section">
        <h2>Coulomb电子气：多体物理的新手教程</h2>
        
        <div class="jellium-introduction">
          <h3>Jellium模型简介</h3>
          <p class="model-description">
            在这一部分，作为二次量子化的应用，我们讨论并电子气或者Coulomb电子气模型，
            即<strong>凝胶模型(jellium model)</strong>。这相当于是金属中电子气体的简化描述。
            在一次量子化形式中，体系的哈密顿量由三项组成，即电子部分、离子部分、
            以及电子与正电荷背景的相互作用项。
          </p>
          
          <div class="hamiltonian-decomposition">
            <h4>完整哈密顿量分解</h4>
            <div class="equation-display">
              <p><strong>H = H<sub>el</sub> + H<sub>b</sub> + H<sub>el-b</sub></strong> &nbsp;&nbsp;&nbsp;&nbsp;(2.4.1)</p>
            </div>
            
            <div class="hamiltonian-terms">
              <div class="term-card">
                <h5>电子部分 H<sub>el</sub></h5>
                <div class="equation-display">
                  <p>H<sub>el</sub> = Σ<sub>i=1</sub><sup>N</sup> [p<sub>i</sub>²/(2m) + e²/2 Σ<sub>i≠j</sub> e<sup>-μ|r⃗<sub>i</sub>-r⃗<sub>j</sub>|</sup>/|r⃗<sub>i</sub> - r⃗<sub>j</sub>|] &nbsp;&nbsp;&nbsp;&nbsp;(2.4.2)</p>
                </div>
              </div>
              
              <div class="term-card">
                <h5>背景部分 H<sub>b</sub></h5>
                <div class="equation-display">
                  <p>H<sub>b</sub> = e²/2 ∫ d³xd³x' n(r⃗)n(r⃗')e<sup>-μ|r⃗-r⃗'|</sup>/|r⃗ - r⃗'| &nbsp;&nbsp;&nbsp;&nbsp;(2.4.3)</p>
                </div>
              </div>
              
              <div class="term-card">
                <h5>电子-背景相互作用 H<sub>el-b</sub></h5>
                <div class="equation-display">
                  <p>H<sub>el-b</sub> = -e² Σ<sub>i=1</sub><sup>N</sup> ∫ d³x n(r⃗)e<sup>-μ|r⃗-r⃗<sub>i</sub>|</sup>/|r⃗ - r⃗<sub>i</sub>| &nbsp;&nbsp;&nbsp;&nbsp;(2.4.4)</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="regularization-note">
            <h4>正规化处理</h4>
            <p>
              为了避免长程Coulomb相互作用的发散特性，我们给相互作用加上一个衰减部分e<sup>-μ|r⃗|</sup>(μ > 0)，
              即相当于用Yukawa汤川势代替裸的Coulomb势。当然在计算的最后要取μ → 0以回到原来Coulomb力的情况。
              这种做法叫做Coulomb相互作用正规化(Coulomb interaction regularization)。
            </p>
          </div>
        </div>

        <div class="detailed-calculation">
          <h3>相互作用项的详细计算</h3>
          
          <div class="calculation-step">
            <h4>背景相互作用能计算</h4>
            <p>假设正电荷均匀分布的并且与电子数相同，则有n(r⃗) = ψ̂<sub>e</sub>(电中性条件)，那么离子实之间的Coulomb能是：</p>
            
            <div class="equation-sequence">
              <div class="equation-display">
                <p>H<sub>b</sub> = e²/2 (N/V)² ∫ d³xd³x' e<sup>-μ|r⃗-r⃗'|</sup>/|r⃗ - r⃗'| = e²/2 (N/V)² V ∫ d³R 4πr²dr e<sup>-μr</sup>/r</p>
              </div>
              
              <div class="equation-display">
                <p>= e²/2 (N/V)² V 4π/μ² = 1/2 e² N² 4π/(V μ²) &nbsp;&nbsp;&nbsp;&nbsp;(2.4.5)</p>
              </div>
            </div>
            
            <p>这里我们引入了相对坐标和质心坐标 r⃗ = r⃗' - r⃗', R⃗ = (r⃗ + r⃗')/2。对于电子与正电荷背景的Coulomb能可计算为：</p>
            
            <div class="equation-display">
              <p>H<sub>el-b</sub> = -e² N/V Σ<sub>i=1</sub><sup>N</sup> ∫ d³x e<sup>-μ|r⃗-r⃗<sub>i</sub>|</sup>/|r⃗ - r⃗<sub>i</sub>| = -e² N/V N ∫ d³x e<sup>-μ|r⃗|</sup>/|r⃗| = -e² N² 4π/(V μ²) &nbsp;&nbsp;&nbsp;&nbsp;(2.4.6)</p>
            </div>
          </div>
          
          <div class="calculation-step">
            <h4>二次量子化表示</h4>
            <p>这上述计算中，对每一个离子的积分都算平移了一步移到原点r⃗ → r⃗ + r⃗<sub>i</sub>。
            这种哈密顿量中的两项已经计算完成，剩下的电子部分根据一般的二次量子化操作，其形式是：</p>
            
            <div class="equation-display">
              <p>H<sub>el</sub> = Σ<sub>kσ</sub> k²/(2m) ĉ<sub>kσ</sub>†ĉ<sub>kσ</sub> + 1/2 Σ<sub>k,k',q,σ,σ'</sub> V<sub>q</sub>ĉ<sub>k+q,σ</sub>†ĉ<sub>k'-q,σ'</sub>†ĉ<sub>k',σ'</sub>ĉ<sub>k,σ</sub> &nbsp;&nbsp;&nbsp;&nbsp;(2.4.7)</p>
            </div>
            
            <p>其中相互作用V<sub>q</sub>是：</p>
            
            <div class="complex-calculation">
              <div class="equation-display">
                <p>V<sub>q</sub> = e²/V ∫ d³re<sup>-iq⃗·r⃗</sup> e<sup>-μr</sup>/|r⃗| = 2πe²/V ∫<sub>0</sub><sup>∞</sup> r²dr e<sup>-μr</sup>/r ∫<sub>-1</sub><sup>1</sup> dxe<sup>-iqrx</sup> = 2πe²/iqV ∫<sub>0</sub><sup>∞</sup> dr(e<sup>-(μ+iq)r</sup> - e<sup>-(μ-iq)r</sup>)</p>
              </div>
              
              <div class="equation-display">
                <p>= 2πe²/iqV (e<sup>-(μ+iq)∞</sup> - 1)/(-μ - iq) - (e<sup>-(μ-iq)∞</sup> - 1)/(-μ + iq)) = 1/(iqV) 4πe²/(μ² + q²) &nbsp;&nbsp;&nbsp;&nbsp;(2.4.8)</p>
              </div>
            </div>
            
            <p>注意到上式中μ是大于0的有限值，因此e<sup>-μ∞</sup> = 0，这样没有明显取极限的"∞"部分的贡献都不用考虑。</p>
          </div>
          
          <div class="calculation-step">
            <h4>明确哈密顿量形式</h4>
            <p>这样电子部分的明确哈密顿量形式是：</p>
            
            <div class="equation-display">
              <p>H<sub>el</sub> = Σ<sub>kσ</sub> k²/(2m) ĉ<sub>kσ</sub>†ĉ<sub>kσ</sub> + 1/(2V) Σ<sub>k,k',q,σ,σ'</sub> 4πe²/(μ² + q²) ĉ<sub>k+q,σ</sub>†ĉ<sub>k'-q,σ'</sub>†ĉ<sub>k',σ'</sub>ĉ<sub>k,σ</sub> &nbsp;&nbsp;&nbsp;&nbsp;(2.4.9)</p>
            </div>
            
            <p>我们先考虑q = 0部分的相互作用：</p>
            
            <div class="zero-momentum-calculation">
              <div class="equation-display">
                <p>V<sub>0</sub> = 4πe²/(2μ²V) Σ<sub>k,k',σ,σ'</sub> ĉ<sub>kσ</sub>†ĉ<sub>k'σ'</sub>†ĉ<sub>k'σ'</sub>ĉ<sub>kσ</sub> = -e² 4π/(2V μ²) [Σ<sub>kσ</sub> ĉ<sub>kσ</sub>†ĉ<sub>kσ</sub>] [(Σ<sub>k'σ'</sub> ĉ<sub>k'σ'</sub>†ĉ<sub>k'σ'</sub>)]</p>
              </div>
              
              <div class="equation-display">
                <p>= -e² 4π/(2V μ²) [N - N²] = 1/2 e² N 4π/(V μ²) - 1/2 e² N² 4π/(V μ²) &nbsp;&nbsp;&nbsp;&nbsp;(2.4.10)</p>
              </div>
            </div>
            
            <p>在这里我们利用电子数算符N = Σ<sub>kσ</sub> ĉ<sub>kσ</sub>†ĉ<sub>kσ</sub> 与哈密顿量对易性易体系的守恒量。
            用电子数目N代替N̂，此处外势为0，负号可刻略，我们发现：</p>
            
            <div class="equation-display highlighted">
              <p><strong>V<sub>0</sub> + H<sub>b</sub> + H<sub>el-b</sub> = 0</strong> &nbsp;&nbsp;&nbsp;&nbsp;(2.4.11)</p>
            </div>
          </div>
        </div>

        <div class="physical-parameters">
          <h3>金属电子气中的典型长度尺度</h3>
          
          <div class="parameter-table">
            <table>
              <thead>
                <tr>
                  <th>物理量</th>
                  <th>电子平均距离</th>
                  <th>Bohr半径</th>
                  <th>Wigner-Seitz半径</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>符号</td>
                  <td>r<sub>0</sub></td>
                  <td>a<sub>B</sub></td>
                  <td>r<sub>s</sub></td>
                </tr>
                <tr>
                  <td>具体形式</td>
                  <td>1/√(4πn)</td>
                  <td>1/α<sub>fs</sub></td>
                  <td>r<sub>0</sub>/a<sub>B</sub></td>
                </tr>
                <tr>
                  <td>数值</td>
                  <td>1 ~ 3Å</td>
                  <td>0.53Å</td>
                  <td>2 ~ 6</td>
                </tr>
              </tbody>
            </table>
            <p class="table-caption"><strong>Table 2.2:</strong> 金属电子气中的典型长度尺度</p>
          </div>
        </div>

        <div class="final-hamiltonian">
          <h3>最终的有效哈密顿量</h3>
          
          <p>
            也就是说电子之间的直接Coulomb相互作用与正电荷背景相互作用用好抵消，这实际上是系统电中性的部分就是纯粹的电子部分，且相互作用不含q = 0：
          </p>
          
          <div class="final-equation-box">
            <div class="equation-display featured">
              <p><strong>H<sub>el</sub> = Σ<sub>kσ</sub> k²/(2m) ĉ<sub>kσ</sub>†ĉ<sub>kσ</sub> + 1/(2V) Σ<sub>k,k',q≠0,σ,σ'</sub> 4πe²/q² ĉ<sub>k+q,σ</sub>†ĉ<sub>k'-q,σ'</sub>†ĉ<sub>k',σ'</sub>ĉ<sub>k,σ</sub></strong> &nbsp;&nbsp;&nbsp;&nbsp;(2.4.12)</p>
            </div>
          </div>
          
          <div class="physical-interpretation">
            <h4>物理解释与参数分析</h4>
            <p>
              我们已经令μ = 0因为q ≠ 0。为了便于讨论，引入特征长度r<sub>0</sub>，代表每个电子之间的平均距离，
              通过N/V = 1/(4πr<sub>0</sub>³/3)定义。另一方面，Bohr半径a<sub>B</sub> = 1/α<sub>fs</sub> = 0.53Å，对于一般的金属，
              r<sub>s</sub> = r<sub>0</sub>/a<sub>B</sub> ~ 2 - 6。如果定义无量纲的体系的能量尺度，28可以看到，如果r<sub>s</sub> << 1，
              那么就可以忽略相互作用的微扰修正物理上，r<sub>s</sub> << 1表明平均到每个电子的动能占有1 - 2个电子格相和反应联系，
              此外，<< 1称为高密度极限，而r<sub>s</sub> >> 1称为低密度极限或强关联区。
            </p>
            
            <div class="density-regimes">
              <div class="regime-card">
                <h5>高密度极限 (r<sub>s</sub> << 1)</h5>
                <p>动能主导，相互作用可作微扰处理</p>
              </div>
              
              <div class="regime-card">
                <h5>中等密度 (r<sub>s</sub> ~ 1)</h5>
                <p>动能与相互作用能可比</p>
              </div>
              
              <div class="regime-card">
                <h5>低密度极限 (r<sub>s</sub> >> 1)</h5>
                <p>相互作用主导，强关联区域</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Coulomb相互作用的详细处理方法</h2>
        
        <!-- 长程相互作用的处理 -->
        <div class="theory-section">
          <h3>长程Coulomb相互作用的数学处理</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. Ewald求和方法</h4>
              <div class="equation-block">
                <p><strong>周期性系统的Coulomb能：</strong></p>
                <p>E = (1/2) Σᵢⱼ' qᵢqⱼ/|rᵢ - rⱼ + R|</p>
                <p>其中R是晶格矢量，'表示排除i=j且R=0的项</p>
                <p><strong>Ewald分解：</strong></p>
                <p>1/r = [erfc(αr)/r] + [erf(αr)/r]</p>
                <p>短程项 + 长程项</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 实空间与倒空间贡献</h4>
              <div class="equation-block">
                <p><strong>实空间项：</strong></p>
                <p>E_real = (1/2) Σᵢⱼ,R qᵢqⱼ erfc(α|rᵢ - rⱼ + R|)/|rᵢ - rⱼ + R|</p>
                <p><strong>倒空间项：</strong></p>
                <p>E_recip = (1/2V) Σ_G≠0 (4π/G²) exp(-G²/4α²) |ρ(G)|²</p>
                <p>其中 ρ(G) = Σᵢ qᵢ exp(-iG·rᵢ)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 自能修正</h4>
              <div class="equation-block">
                <p><strong>点电荷自能：</strong></p>
                <p>E_self = -(α/√π) Σᵢ qᵢ²</p>
                <p><strong>背景电荷修正：</strong></p>
                <p>E_bg = -(π/2Vα²) (Σᵢ qᵢ)²</p>
                <p><strong>总能量：</strong>E_total = E_real + E_recip + E_self + E_bg</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 多极展开方法 -->
        <div class="theory-section">
          <h3>多极展开与局域化处理</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 球谐函数展开</h4>
              <div class="equation-block">
                <p><strong>Coulomb势的多极展开：</strong></p>
                <p>1/|r-r'| = Σₗₘ (4π/2l+1) (r<^l/r>^(l+1)) Yₗₘ*(θ',φ') Yₗₘ(θ,φ)</p>
                <p>其中 r< = min(r,r'), r> = max(r,r')</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 原子轨道基下的矩阵元</h4>
              <div class="equation-block">
                <p><strong>双电子积分：</strong></p>
                <p>⟨ij|kl⟩ = ∫∫ φᵢ*(r₁)φⱼ*(r₂) (1/|r₁-r₂|) φₖ(r₁)φₗ(r₂) d³r₁d³r₂</p>
                <p><strong>多极展开形式：</strong></p>
                <p>⟨ij|kl⟩ = Σₗₘ (4π/2l+1) Rₗ(ij,kl) Cₗₘ(i,k) Cₗₘ*(j,l)</p>
                <p>其中 Rₗ 是径向积分，Cₗₘ 是角动量耦合系数</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. Slater积分</h4>
              <div class="equation-block">
                <p><strong>径向Slater积分：</strong></p>
                <p>Fₖ = ∫₀^∞ ∫₀^∞ Rₙₗ(r₁)² Rₙ'ₗ'(r₂)² (r<^k/r>^(k+1)) r₁²r₂² dr₁dr₂</p>
                <p><strong>交换积分：</strong></p>
                <p>Gₖ = ∫₀^∞ ∫₀^∞ Rₙₗ(r₁) Rₙ'ₗ'(r₁) Rₙₗ(r₂) Rₙ'ₗ'(r₂) (r<^k/r>^(k+1)) r₁²r₂² dr₁dr₂</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 赝势方法 -->
        <div class="theory-section">
          <h3>赝势方法与核-价电子分离</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 赝势构造原理</h4>
              <div class="equation-block">
                <p><strong>全电子薛定谔方程：</strong></p>
                <p>[-∇²/2 + V_ion(r) + V_H(r) + V_xc(r)]ψₙ(r) = εₙψₙ(r)</p>
                <p><strong>赝势近似：</strong></p>
                <p>[-∇²/2 + V_ps(r) + V_H(r) + V_xc(r)]ψ̃ₙ(r) = εₙψ̃ₙ(r)</p>
                <p>其中 ψ̃ₙ 是赝波函数，V_ps 是赝势</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 模守恒赝势</h4>
              <div class="equation-block">
                <p><strong>模守恒条件：</strong></p>
                <p>∫₀^rc |ψₙ(r)|² r² dr = ∫₀^rc |ψ̃ₙ(r)|² r² dr</p>
                <p>其中 rc 是截断半径</p>
                <p><strong>散射性质保持：</strong></p>
                <p>δₗ(E) = δ̃ₗ(E) (相移相等)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 超软赝势</h4>
              <div class="equation-block">
                <p><strong>广义本征值问题：</strong></p>
                <p>Ĥ|ψ̃ₙ⟩ = εₙŜ|ψ̃ₙ⟩</p>
                <p>其中 Ŝ 是重叠算符</p>
                <p><strong>增广波：</strong></p>
                <p>|ψₙ⟩ = |ψ̃ₙ⟩ + Σᵢ (|φᵢ⟩ - |φ̃ᵢ⟩)⟨p̃ᵢ|ψ̃ₙ⟩</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>屏蔽效应的数学描述与计算</h2>
        
        <!-- Thomas-Fermi屏蔽 -->
        <div class="theory-section">
          <h3>Thomas-Fermi屏蔽理论</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. Thomas-Fermi近似</h4>
              <div class="equation-block">
                <p><strong>局域密度近似：</strong></p>
                <p>ρ(r) = (1/3π²)[2m(μ - V(r))/ℏ²]^(3/2)</p>
                <p>其中 μ 是化学势，V(r) 是有效势</p>
                <p><strong>泊松方程：</strong></p>
                <p>∇²V(r) = -4πe²ρ(r)/ε₀</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 线性化屏蔽</h4>
              <div class="equation-block">
                <p><strong>线性响应：</strong></p>
                <p>δρ(r) = -χ₀ δV(r)</p>
                <p>其中 χ₀ = dρ/dμ|μ=μ₀ 是压缩率</p>
                <p><strong>屏蔽方程：</strong></p>
                <p>∇²δV - k_TF² δV = -4πe²δρ_ext/ε₀</p>
                <p>Thomas-Fermi波矢：k_TF² = 4πe²χ₀/ε₀</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 屏蔽势</h4>
              <div class="equation-block">
                <p><strong>点电荷的屏蔽势：</strong></p>
                <p>V(r) = (e²/4πε₀r) exp(-k_TF r)</p>
                <p><strong>屏蔽长度：</strong></p>
                <p>λ_TF = 1/k_TF = √(ε₀/4πe²χ₀)</p>
                <p><strong>三维自由电子气：</strong>k_TF = √(4k_F/πa₀)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- RPA屏蔽的详细推导 -->
        <div class="theory-section">
          <h3>随机相位近似(RPA)的严格推导</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 密度-密度响应函数</h4>
              <div class="equation-block">
                <p><strong>密度算符：</strong></p>
                <p>ρ̂(q) = Σₖσ ĉₖ₊ₑσ† ĉₖσ</p>
                <p><strong>密度-密度关联函数：</strong></p>
                <p>χ(q,ω) = -i ∫₀^∞ ⟨[ρ̂(q,t), ρ̂(-q,0)]⟩ e^(iωt) dt</p>
                <p><strong>Lehmann表示：</strong></p>
                <p>χ(q,ω) = Σₙ (fₙ - f₀) |⟨n|ρ̂(q)|0⟩|²/(ω - ωₙ₀ + iη)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 非相互作用极化函数</h4>
              <div class="equation-block">
                <p><strong>Lindhard函数：</strong></p>
                <p>Π⁰(q,ω) = Σₖ [f(εₖ) - f(εₖ₊ₑ)]/[ω - (εₖ₊ₑ - εₖ) + iη]</p>
                <p><strong>零温极限：</strong></p>
                <p>Π⁰(q,ω) = Σₖ∈FS [1/(ω - (εₖ₊ₑ - εₖ) + iη) - 1/(ω + (εₖ₊ₑ - εₖ) - iη)]</p>
                <p>其中求和限制在费米面附近</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. RPA介电函数</h4>
              <div class="equation-block">
                <p><strong>RPA方程：</strong></p>
                <p>χ(q,ω) = Π⁰(q,ω)/[1 - v(q)Π⁰(q,ω)]</p>
                <p><strong>介电函数：</strong></p>
                <p>ε(q,ω) = 1 - v(q)Π⁰(q,ω)</p>
                <p><strong>屏蔽相互作用：</strong></p>
                <p>W(q,ω) = v(q)/ε(q,ω)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 静态屏蔽的计算 -->
        <div class="theory-section">
          <h3>静态屏蔽的具体计算</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 三维自由电子气</h4>
              <div class="equation-block">
                <p><strong>静态Lindhard函数：</strong></p>
                <p>Π⁰(q,0) = -N(0)[1 - (1/2)(k_F/q)θ(2k_F-q)]</p>
                <p>其中 N(0) = mk_F/(2π²ℏ²) 是态密度</p>
                <p><strong>长波极限 (q→0)：</strong></p>
                <p>Π⁰(q,0) ≈ -N(0)</p>
                <p><strong>静态介电函数：</strong></p>
                <p>ε(q,0) = 1 + k_s²/q²</p>
                <p>其中 k_s² = 4πe²N(0)/ε₀ 是屏蔽参数</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 二维系统</h4>
              <div class="equation-block">
                <p><strong>二维Lindhard函数：</strong></p>
                <p>Π⁰₂D(q,0) = -N₂D(0)[1 - √(1-(2k_F/q)²)θ(2k_F-q)]</p>
                <p>其中 N₂D(0) = m/(2πℏ²) 是二维态密度</p>
                <p><strong>长波极限：</strong></p>
                <p>Π⁰₂D(q,0) ≈ -N₂D(0)q²/(4k_F²)</p>
                <p><strong>二维屏蔽：</strong></p>
                <p>ε₂D(q,0) = 1 + 2πe²N₂D(0)/(ε₀q)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 一维系统</h4>
              <div class="equation-block">
                <p><strong>一维Lindhard函数：</strong></p>
                <p>Π⁰₁D(q,0) = -N₁D(0)/(√(1-(q/2k_F)²)) (|q| < 2k_F)</p>
                <p>其中 N₁D(0) = m/(πℏ²k_F) 是一维态密度</p>
                <p><strong>Kohn异常：</strong></p>
                <p>在 q = 2k_F 处 Π⁰₁D 发散</p>
                <p><strong>Friedel振荡：</strong></p>
                <p>δρ(x) ∝ cos(2k_F x)/x² (长距离行为)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>动态屏蔽与集体激发</h2>
        
        <!-- 等离激元理论 -->
        <div class="theory-section">
          <h3>等离激元的微观理论</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 等离激元色散关系</h4>
              <div class="equation-block">
                <p><strong>RPA极点条件：</strong></p>
                <p>ε(q,ω) = 0</p>
                <p><strong>长波极限：</strong></p>
                <p>ω²ₚ = 4πne²/(ε₀m) (经典等离子体频率)</p>
                <p><strong>量子修正：</strong></p>
                <p>ω(q) = ωₚ[1 + (3/10)(v_F q/ωₚ)² + ...]</p>
                <p>其中 v_F = ℏk_F/m 是费米速度</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 阻尼机制</h4>
              <div class="equation-block">
                <p><strong>Landau阻尼：</strong></p>
                <p>γ(q) = (π/8)(ωₚ/k_F v_F)(q/k_F)³ (q << k_F)</p>
                <p><strong>碰撞阻尼：</strong></p>
                <p>γ_coll = 1/τ (弛豫时间近似)</p>
                <p><strong>总阻尼：</strong></p>
                <p>γ_total = γ_Landau + γ_coll</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 介电损失函数</h4>
              <div class="equation-block">
                <p><strong>损失函数：</strong></p>
                <p>L(q,ω) = -Im[1/ε(q,ω)]</p>
                <p><strong>f-求和规则：</strong></p>
                <p>∫₀^∞ ω L(q,ω) dω = (π/2)ωₚ²</p>
                <p><strong>实验观测：</strong></p>
                <p>EELS, 光学反射率测量</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 声子-等离激元耦合 -->
        <div class="theory-section">
          <h3>声子-等离激元耦合效应</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 耦合哈密顿量</h4>
              <div class="equation-block">
                <p><strong>电子-声子相互作用：</strong></p>
                <p>Ĥₑₚ = Σₖₑλ gₖₑλ (b̂ₖₑλ + b̂₋ₖₑλ†) ρ̂(q)</p>
                <p>其中 gₖₑλ 是电子-声子耦合常数</p>
                <p><strong>总哈密顿量：</strong></p>
                <p>Ĥ = Ĥₑ + Ĥₚₕ + Ĥₑₚ + Ĥₑₑ</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 混合模式</h4>
              <div class="equation-block">
                <p><strong>耦合方程：</strong></p>
                <p>[ω² - ωₚ²(q)]A(q,ω) - Σλ Vλ(q)B_λ(q,ω) = 0</p>
                <p>[ω² - ωₚₕλ²(q)]B_λ(q,ω) - Vλ(q)A(q,ω) = 0</p>
                <p><strong>色散关系：</strong></p>
                <p>det|ω² - ωₚ²(q)    -Vλ(q)    | = 0</p>
                <p>   |-Vλ(q)    ω² - ωₚₕλ²(q)|</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 等离激元-声子极化子</h4>
              <div class="equation-block">
                <p><strong>混合频率：</strong></p>
                <p>ω±² = (1/2)[ωₚ² + ωₚₕ² ± √((ωₚ² - ωₚₕ²)² + 4V²)]</p>
                <p><strong>强耦合极限：</strong></p>
                <p>V >> |ωₚ - ωₚₕ|</p>
                <p><strong>弱耦合极限：</strong></p>
                <p>V << |ωₚ - ωₚₕ|</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体哈密顿算符的构造</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🏗️</div>
            <h3>完整哈密顿算符</h3>
            <p>包含动能和Coulomb相互作用的多体哈密顿算符</p>
            <div class="mathematical-content">
              <h4>一般形式：</h4>
              <div class="equation-block">
                <p>Ĥ = T̂ + V̂ₑₓₜ + V̂ₑₑ</p>
                <p>T̂: 动能算符</p>
                <p>V̂ₑₓₜ: 外势算符</p>
                <p>V̂ₑₑ: 电子-电子相互作用</p>
              </div>
              
              <h4>具体表达式：</h4>
              <div class="equation-block">
                <p>T̂ = ∑k,σ εk ĉ†k,σ ĉk,σ</p>
                <p>V̂ₑₓₜ = ∑k,k',σ Vₑₓₜ(k,k') ĉ†k,σ ĉk',σ</p>
                <p>V̂ₑₑ = (1/2V)∑k,k',q,σ,σ' V(q) ĉ†k+q,σ ĉ†k'-q,σ' ĉk',σ' ĉk,σ</p>
              </div>
              
              <h4>Jellium模型：</h4>
              <div class="equation-block">
                <p>忽略离子结构，只考虑均匀正电荷背景</p>
                <p>Ĥ = ∑k,σ (ℏ²k²/2m) ĉ†k,σ ĉk,σ + (1/2V)∑k,k',q V(q) ĉ†k+q,σ ĉ†k'-q,σ' ĉk',σ' ĉk,σ</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>矩阵元计算</h3>
            <p>Coulomb相互作用矩阵元的计算方法</p>
            <div class="mathematical-content">
              <h4>直接积分：</h4>
              <div class="equation-block">
                <p>⟨k₁k₂|V|k₃k₄⟩ = ∫∫ φ*k₁(r₁)φ*k₂(r₂) V(r₁₂) φk₃(r₁)φk₄(r₂) d³r₁d³r₂</p>
              </div>
              
              <h4>平面波基组：</h4>
              <div class="equation-block">
                <p>φk(r) = (1/√V) e^(ik·r)</p>
                <p>⟨k₁k₂|V|k₃k₄⟩ = (1/V) V(k₁-k₃) δk₁+k₂,k₃+k₄</p>
                <p>动量守恒：k₁ + k₂ = k₃ + k₄</p>
              </div>
              
              <h4>交换积分：</h4>
              <div class="equation-block">
                <p>直接项：⟨k₁k₂|V|k₁k₂⟩ = V(k₁-k₂)/V</p>
                <p>交换项：⟨k₁k₂|V|k₂k₁⟩ = V(k₁-k₂)/V</p>
                <p>对于Coulomb势，直接项和交换项相等</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>对称性和守恒律</h3>
            <p>Coulomb相互作用的对称性质</p>
            <div class="mathematical-content">
              <h4>空间对称性：</h4>
              <div class="equation-block">
                <p>平移不变性：V(r₁-r₂) = V(r₁+a-r₂-a)</p>
                <p>旋转不变性：V(|r₁-r₂|) = V(R|r₁-r₂|)</p>
                <p>反演对称性：V(r) = V(-r)</p>
              </div>
              
              <h4>守恒量：</h4>
              <div class="equation-block">
                <p>总动量：P̂ = ∑k,σ ℏk ĉ†k,σ ĉk,σ</p>
                <p>总角动量：L̂ = ∑k,σ ℏk×∇k ĉ†k,σ ĉ†k,σ</p>
                <p>粒子数：N̂ = ∑k,σ ĉ†k,σ ĉk,σ</p>
              </div>
              
              <h4>对易关系：</h4>
              <div class="equation-block">
                <p>[Ĥ, P̂] = 0 (动量守恒)</p>
                <p>[Ĥ, L̂] = 0 (角动量守恒)</p>
                <p>[Ĥ, N̂] = 0 (粒子数守恒)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体物理系统</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>氢原子</h3>
            <p>最简单的Coulomb系统</p>
            <div class="mathematical-content">
              <h4>哈密顿算符：</h4>
              <div class="equation-block">
                <p>Ĥ = -ℏ²∇²/(2m) - e²/(4πε₀r)</p>
                <p>二次量子化：Ĥ = ∑n,l,m εnlm ĉ†nlm ĉnlm</p>
                <p>εnlm = -13.6eV/n² (氢原子能级)</p>
              </div>
              
              <h4>波函数：</h4>
              <div class="equation-block">
                <p>ψnlm(r,θ,φ) = Rnl(r)Ylm(θ,φ)</p>
                <p>径向部分：Rnl(r) ∝ e^(-r/na₀) L^(2l+1)_{n-l-1}(2r/na₀)</p>
                <p>角度部分：Ylm(θ,φ) 球谐函数</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔬</div>
            <h3>氦原子</h3>
            <p>双电子Coulomb系统</p>
            <div class="mathematical-content">
              <h4>哈密顿算符：</h4>
              <div class="equation-block">
                <p>Ĥ = -ℏ²∇₁²/(2m) - ℏ²∇₂²/(2m) - 2e²/(4πε₀r₁) - 2e²/(4πε₀r₂) + e²/(4πε₀r₁₂)</p>
              </div>
              
              <h4>变分方法：</h4>
              <div class="equation-block">
                <p>试探波函数：ψ(r₁,r₂) = φ(r₁)φ(r₂)</p>
                <p>φ(r) = (Z_eff³/πa₀³)^(1/2) e^(-Z_eff r/a₀)</p>
                <p>优化Z_eff ≈ 1.69 (屏蔽效应)</p>
              </div>
              
              <h4>关联效应：</h4>
              <div class="equation-block">
                <p>Hartree-Fock能量：-77.87 eV</p>
                <p>精确能量：-79.01 eV</p>
                <p>关联能：1.14 eV</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌐</div>
            <h3>电子气模型</h3>
            <p>金属中的自由电子气</p>
            <div class="mathematical-content">
              <h4>Jellium哈密顿算符：</h4>
              <div class="equation-block">
                <p>Ĥ = ∑k,σ εk ĉ†k,σ ĉk,σ + (1/2V)∑k,k',q V(q) ĉ†k+q,σ ĉ†k'-q,σ' ĉk',σ' ĉk,σ</p>
                <p>εk = ℏ²k²/(2m)</p>
                <p>V(q) = 4πe²/(ε₀q²)</p>
              </div>
              
              <h4>Wigner-Seitz参数：</h4>
              <div class="equation-block">
                <p>rs = (3/4πn)^(1/3) / a₀</p>
                <p>n是电子密度</p>
                <p>典型金属：rs ≈ 2-6</p>
              </div>
              
              <h4>相互作用强度：</h4>
              <div class="equation-block">
                <p>动能：EF = ℏ²kF²/(2m)</p>
                <p>相互作用：e²/(4πε₀a₀) = 2Ry</p>
                <p>比值：rs 决定相互作用的重要性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>近似处理方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>Hartree-Fock近似</h3>
            <p>平均场理论的基本方法</p>
            <div class="mathematical-content">
              <h4>基本思想：</h4>
              <div class="equation-block">
                <p>将多体问题简化为有效单体问题</p>
                <p>每个电子在其他电子产生的平均场中运动</p>
              </div>
              
              <h4>Hartree-Fock方程：</h4>
              <div class="equation-block">
                <p>[ĥ + V̂H + V̂X]φi = εiφi</p>
                <p>ĥ: 单体哈密顿算符</p>
                <p>V̂H: Hartree势 (直接相互作用)</p>
                <p>V̂X: Fock势 (交换相互作用)</p>
              </div>
              
              <h4>自洽求解：</h4>
              <div class="equation-block">
                <p>VH(r) = ∫ ρ(r')/|r-r'| d³r'</p>
                <p>VX φi(r) = -∫ [∑j φ*j(r')φj(r)/|r-r'|] φi(r') d³r'</p>
                <p>ρ(r) = ∑i |φi(r)|²</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>密度泛函理论</h3>
            <p>基于电子密度的多体理论</p>
            <div class="mathematical-content">
              <h4>Hohenberg-Kohn定理：</h4>
              <div class="equation-block">
                <p>基态能量是电子密度的唯一泛函</p>
                <p>E[ρ] = T[ρ] + Vext[ρ] + Vee[ρ]</p>
              </div>
              
              <h4>Kohn-Sham方程：</h4>
              <div class="equation-block">
                <p>[-ℏ²∇²/(2m) + Veff(r)]φi = εiφi</p>
                <p>Veff = Vext + VH + Vxc</p>
                <p>Vxc: 交换关联势</p>
              </div>
              
              <h4>局域密度近似：</h4>
              <div class="equation-block">
                <p>Exc[ρ] = ∫ ρ(r)εxc(ρ(r)) d³r</p>
                <p>εxc(ρ): 均匀电子气的交换关联能密度</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>多体微扰理论</h3>
            <p>系统处理电子关联的方法</p>
            <div class="mathematical-content">
              <h4>微扰展开：</h4>
              <div class="equation-block">
                <p>Ĥ = Ĥ₀ + V̂</p>
                <p>Ĥ₀: 非相互作用哈密顿算符</p>
                <p>V̂: Coulomb相互作用</p>
              </div>
              
              <h4>Rayleigh-Schrödinger微扰：</h4>
              <div class="equation-block">
                <p>E = E⁽⁰⁾ + E⁽¹⁾ + E⁽²⁾ + ...</p>
                <p>E⁽¹⁾ = ⟨Ψ⁽⁰⁾|V̂|Ψ⁽⁰⁾⟩</p>
                <p>E⁽²⁾ = ∑n≠0 |⟨Ψn⁽⁰⁾|V̂|Ψ⁽⁰⁾⟩|²/(E⁽⁰⁾ - En⁽⁰⁾)</p>
              </div>
              
              <h4>费曼图技术：</h4>
              <div class="equation-block">
                <p>图形化表示微扰展开项</p>
                <p>顶点：相互作用</p>
                <p>线：传播子</p>
                <p>系统计算高阶修正</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>物理效应和应用</h2>
        <div class="application-grid">
          <div class="application-card">
            <h3>🔋 屏蔽效应</h3>
            <div class="application-content">
              <h4>Thomas-Fermi屏蔽：</h4>
              <p>V(r) = (e²/4πε₀r) e^(-r/λTF)</p>
              <p>λTF = √(ε₀kBT/e²n) (Thomas-Fermi长度)</p>
              
              <h4>Debye屏蔽：</h4>
              <p>等离子体中的长程屏蔽</p>
              <p>λD = √(ε₀kBT/ne²) (Debye长度)</p>
              
              <h4>物理意义：</h4>
              <ul>
                <li>长程Coulomb势被屏蔽</li>
                <li>有效相互作用变为短程</li>
                <li>多体效应的重要体现</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>🌟 关联效应</h3>
            <div class="application-content">
              <h4>电子关联：</h4>
              <p>超越平均场的多体效应</p>
              
              <h4>Wigner晶体：</h4>
              <p>低密度极限下电子的晶体化</p>
              <p>rs > 37 时出现</p>
              
              <h4>量子蒙特卡罗：</h4>
              <ul>
                <li>精确处理强关联系统</li>
                <li>变分蒙特卡罗方法</li>
                <li>扩散蒙特卡罗方法</li>
                <li>路径积分蒙特卡罗</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>⚡ 集体激发</h3>
            <div class="application-content">
              <h4>等离激元：</h4>
              <p>电子密度的集体振荡</p>
              <p>ωp = √(ne²/ε₀m) (等离子体频率)</p>
              
              <h4>声子：</h4>
              <p>离子晶格的集体振动</p>
              <p>与电子的耦合产生极化子</p>
              
              <h4>激子：</h4>
              <ul>
                <li>电子-空穴束缚态</li>
                <li>Wannier激子 (弱束缚)</li>
                <li>Frenkel激子 (强束缚)</li>
                <li>光学性质的重要贡献</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>学习要点总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>🎯 核心概念</h3>
            <ul>
              <li>Coulomb势的各种表示</li>
              <li>多体哈密顿算符构造</li>
              <li>矩阵元计算方法</li>
              <li>对称性和守恒律</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔧 计算方法</h3>
            <ul>
              <li>Hartree-Fock近似</li>
              <li>密度泛函理论</li>
              <li>多体微扰理论</li>
              <li>量子蒙特卡罗方法</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🌟 物理应用</h3>
            <ul>
              <li>原子分子结构</li>
              <li>金属电子性质</li>
              <li>屏蔽和关联效应</li>
              <li>集体激发现象</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Fourier与RPA屏蔽细化</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>动量空间表示</h3>
            <ul>
              <li>3D：<code>v(q) = 4π e^2 / q^2</code>；2D：<code>v(q) = 2π e^2 / |q|</code></li>
              <li>相互作用的二次量子化：<code>H_int = 1/2 Σ_{k,k',q,σ,σ'} v(q) ĉ†_{k+q,σ} ĉ†_{k'-q,σ'} ĉ_{k',σ'} ĉ_{k,σ}</code></li>
              <li>选择基（平面波/能带）影响矩阵元计算与选择则</li>
              <li>平移不变性给出动量守恒约束：<code>k + k' = (k+q) + (k'-q)</code></li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>RPA介电函数</h3>
            <ul>
              <li>介电函数：<code>ε(q,ω) = 1 - v(q) Π⁰(q,ω)</code></li>
              <li>屏蔽势：<code>W(q,ω) = v(q) / ε(q,ω)</code></li>
              <li>静态极限：<code>ε(q,0)</code> 与金属屏蔽长度相关</li>
              <li>Π⁰ 为非相互作用极化函数（Lindhard函数）</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>Lindhard函数提示</h3>
            <ul>
              <li>零温表达：<code>Π⁰(q,ω) = 2 Σ_k \frac{f(ε_{k+q}) - f(ε_k)}{ℏω + ε_k - ε_{k+q} + i0^+}</code></li>
              <li>低频、小 q 展开可得到静态屏蔽与等离子体模式</li>
              <li>与实验的联系：等离子体频率与光学反射谱</li>
              <li>与自能修正结合：GW 近似中的 W 出现</li>
            </ul>
          </div>
        </div>

        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>金属屏蔽示例</h3>
            <p>在三维自由电子气中，静态 RPA 给出有限的屏蔽长度，长程库仑相互作用被有效削弱。</p>
            <pre><code>k_F 与 Π⁰(q,0) 决定 ε(q,0)，进而影响 W(q,0)</code></pre>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🧪</div>
            <h3>实验关联</h3>
            <p>等离子体共振与光学反射率、EELS（电子能量损失谱）直接反映 ε(q,ω) 的结构。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_4',
  data() {
    return {
      // 可以添加交互式内容的数据
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
  padding: 2rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 1rem;
  color: white;
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.chapter-tag {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
}

.reading-time {
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.9rem;
}

.introduction {
  margin-bottom: 3rem;
  padding: 2rem;
  background: #fef7ff;
  border-radius: 1rem;
  border-left: 4px solid #f093fb;
}

.introduction h2 {
  color: #be185d;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #be185d;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  color: #be185d;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #fce7f3;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #fce7f3;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(240, 147, 251, 0.15);
}

.concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #be185d;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.concept-card p {
  color: #475569;
  margin-bottom: 1rem;
}

.mathematical-content {
  background: #f8fafc;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border: 1px solid #e2e8f0;
}

.mathematical-content h4 {
  color: #be185d;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

/* Coulomb电子气模型样式 */
.jellium-introduction {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 12px;
  padding: 25px;
  margin: 20px 0;
  border: 2px solid #f39c12;
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.2);
}

.model-description {
  font-size: 1.1em;
  line-height: 1.6;
  color: #2c3e50;
  margin-bottom: 20px;
}

.hamiltonian-decomposition {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  border: 1px solid #ddd;
}

.hamiltonian-terms {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.term-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 8px;
  padding: 15px;
  border: 1px solid #2196f3;
  transition: transform 0.2s ease;
}

.term-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
}

.term-card h5 {
  color: #1976d2;
  margin-bottom: 10px;
  font-weight: 600;
}

.regularization-note {
  background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
  border-radius: 8px;
  padding: 20px;
  margin: 20px 0;
  border-left: 4px solid #ff9800;
}

.detailed-calculation {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 25px;
  margin: 25px 0;
  border: 1px solid #dee2e6;
}

.calculation-step {
  margin: 25px 0;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.equation-sequence {
  margin: 15px 0;
}

.complex-calculation {
  background: #f1f3f4;
  padding: 15px;
  border-radius: 6px;
  margin: 15px 0;
}

.zero-momentum-calculation {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  padding: 15px;
  border-radius: 8px;
  margin: 15px 0;
  border: 1px solid #4caf50;
}

.highlighted {
  background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%);
  border: 2px solid #ff9800;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
}

.physical-parameters {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 12px;
  padding: 25px;
  margin: 25px 0;
  border: 2px solid #9c27b0;
}

.parameter-table {
  margin: 20px 0;
}

.parameter-table table {
  width: 100%;
  border-collapse: collapse;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.parameter-table th {
  background: linear-gradient(135deg, #673ab7 0%, #9c27b0 100%);
  color: white;
  padding: 12px;
  text-align: center;
  font-weight: 600;
}

.parameter-table td {
  padding: 12px;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.parameter-table tr:nth-child(even) {
  background: #f8f9fa;
}

.table-caption {
  text-align: center;
  font-style: italic;
  margin-top: 10px;
  color: #666;
}

.final-hamiltonian {
  background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
  border-radius: 12px;
  padding: 25px;
  margin: 25px 0;
  border: 2px solid #4caf50;
}

.final-equation-box {
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  border: 2px solid #2e7d32;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.2);
}

.featured {
  font-size: 1.2em;
  text-align: center;
  color: #1b5e20;
}

.physical-interpretation {
  margin-top: 25px;
}

.density-regimes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.regime-card {
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  border-radius: 8px;
  padding: 15px;
  border: 1px solid #4caf50;
  text-align: center;
  transition: transform 0.2s ease;
}

.regime-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.2);
}

.regime-card h5 {
  color: #2e7d32;
  margin-bottom: 10px;
  font-weight: 600;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-left: 3px solid #f093fb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.equation-block p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  color: #be185d;
  font-size: 0.95rem;
}

.equation-block strong {
  color: #9d174d;
}

.mathematical-content ul {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
}

.mathematical-content li {
  padding: 0.25rem 0;
  color: #475569;
  position: relative;
  padding-left: 1.5rem;
}

.mathematical-content li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: #f093fb;
  font-weight: bold;
}

.application-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.application-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #fce7f3;
  transition: transform 0.2s;
}

.application-card:hover {
  transform: translateY(-2px);
}

.application-card h3 {
  color: #be185d;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.application-content h4 {
  color: #475569;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
}

.application-content p {
  color: #475569;
  margin: 0.25rem 0;
  font-family: 'Courier New', monospace;
  background: #f1f5f9;
  padding: 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}

.application-content ul {
  list-style: none;
  padding: 0;
}

.application-content li {
  padding: 0.25rem 0;
  color: #475569;
  position: relative;
  padding-left: 1.5rem;
}

.application-content li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #f093fb;
  font-weight: bold;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.summary-card h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.summary-card ul {
  list-style: none;
  padding: 0;
}

.summary-card li {
  padding: 0.25rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.summary-card li::before {
  content: "✓";
  position: absolute;
  left: 0;
  font-weight: bold;
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
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .application-grid {
    grid-template-columns: 1fr;
  }
}
</style>