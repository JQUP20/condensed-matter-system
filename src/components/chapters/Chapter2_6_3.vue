<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.6.3 多体微扰理论简介</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">微扰理论</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <section class="introduction">
        <h2>多体微扰理论概述</h2>
        <p class="lead-text">
          多体微扰理论(MBPT)是处理强相关电子系统的重要理论工具，通过系统地考虑电子相关效应，
          可以超越平均场近似的局限性。该理论在量子化学和凝聚态物理中都有重要应用。
        </p>
      </section>

      <section class="content-section">
        <h2>基本思想与框架</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>微扰展开</h3>
            <p>将相互作用作为微扰处理</p>
            <div class="mathematical-content">
              <h4>Hamiltonian分解：</h4>
              <div class="equation-block">
                <p>Ĥ = Ĥ₀ + V̂</p>
                <p>Ĥ₀: 非相互作用Hamiltonian</p>
                <p>V̂: 电子-电子相互作用</p>
              </div>
              
              <h4>能量展开：</h4>
              <div class="equation-block">
                <p>E = E⁽⁰⁾ + E⁽¹⁾ + E⁽²⁾ + ...</p>
                <p>E⁽ⁿ⁾: n阶微扰修正</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>Rayleigh-Schrödinger微扰</h3>
            <p>传统微扰理论的推广</p>
            <div class="mathematical-content">
              <h4>零阶：</h4>
              <div class="equation-block">
                <p>E⁽⁰⁾ = ⟨Ψ₀⁽⁰⁾|Ĥ₀|Ψ₀⁽⁰⁾⟩</p>
                <p>非相互作用基态能量</p>
              </div>
              
              <h4>一阶：</h4>
              <div class="equation-block">
                <p>E⁽¹⁾ = ⟨Ψ₀⁽⁰⁾|V̂|Ψ₀⁽⁰⁾⟩</p>
                <p>平均场能量</p>
              </div>
              
              <h4>二阶：</h4>
              <div class="equation-block">
                <p>E⁽²⁾ = Σₙ |⟨Ψₙ⁽⁰⁾|V̂|Ψ₀⁽⁰⁾⟩|²/(E₀⁽⁰⁾ - Eₙ⁽⁰⁾)</p>
                <p>相关能修正</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Møller-Plesset微扰理论</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚛️</div>
            <h3>MP理论基础</h3>
            <p>以Hartree-Fock为零阶近似</p>
            <div class="mathematical-content">
              <h4>零阶Hamiltonian：</h4>
              <div class="equation-block">
                <p>Ĥ₀ = Σᵢ f̂ᵢ</p>
                <p>f̂ᵢ: Fock算符</p>
              </div>
              
              <h4>微扰：</h4>
              <div class="equation-block">
                <p>V̂ = Ĥ - Ĥ₀</p>
                <p>= Σᵢ<ⱼ (1/rᵢⱼ - Jᵢⱼ + Kᵢⱼ)</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔧</div>
            <h3>MP2修正</h3>
            <p>二阶相关能</p>
            <div class="mathematical-content">
              <h4>MP2能量：</h4>
              <div class="equation-block">
                <p>E⁽²⁾ = Σᵢⱼₐᵦ |⟨ij|ab⟩|²/(εᵢ + εⱼ - εₐ - εᵦ)</p>
                <p>i,j: 占据轨道</p>
                <p>a,b: 虚轨道</p>
              </div>
              
              <h4>双激发贡献：</h4>
              <div class="equation-block">
                <p>⟨ij|ab⟩: 双电子积分</p>
                <p>描述电子对相关</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>耦合簇理论</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>指数ansatz</h3>
            <p>非线性参数化</p>
            <div class="mathematical-content">
              <h4>CC波函数：</h4>
              <div class="equation-block">
                <p>|Ψ_CC⟩ = e^T̂|Φ₀⟩</p>
                <p>T̂: 簇算符</p>
                <p>|Φ₀⟩: HF参考态</p>
              </div>
              
              <h4>簇算符展开：</h4>
              <div class="equation-block">
                <p>T̂ = T̂₁ + T̂₂ + T̂₃ + ...</p>
                <p>T̂ₙ: n重激发算符</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>CCSD方法</h3>
            <p>单双激发耦合簇</p>
            <div class="mathematical-content">
              <h4>截断近似：</h4>
              <div class="equation-block">
                <p>T̂ ≈ T̂₁ + T̂₂</p>
                <p>忽略三重及更高激发</p>
              </div>
              
              <h4>CC方程：</h4>
              <div class="equation-block">
                <p>⟨Φᵢᵃ|e^(-T̂)Ĥe^T̂|Φ₀⟩ = 0</p>
                <p>⟨Φᵢⱼᵃᵇ|e^(-T̂)Ĥe^T̂|Φ₀⟩ = 0</p>
                <p>非线性方程组</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>组态相互作用方法</h2>
        <div class="ci-section">
          <div class="concept-card">
            <div class="concept-icon">🎭</div>
            <h3>CI展开</h3>
            <p>多组态线性组合</p>
            <div class="mathematical-content">
              <h4>CI波函数：</h4>
              <div class="equation-block">
                <p>|Ψ_CI⟩ = c₀|Φ₀⟩ + Σᵢₐ cᵢᵃ|Φᵢᵃ⟩ + Σᵢⱼₐᵦ cᵢⱼᵃᵇ|Φᵢⱼᵃᵇ⟩ + ...</p>
                <p>线性参数化</p>
              </div>
              
              <h4>变分原理：</h4>
              <div class="equation-block">
                <p>E_CI = min⟨Ψ_CI|Ĥ|Ψ_CI⟩/⟨Ψ_CI|Ψ_CI⟩</p>
                <p>广义本征值问题</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Green函数方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>Dyson方程</h3>
            <p>精确Green函数的方程</p>
            <div class="mathematical-content">
              <h4>Dyson方程：</h4>
              <div class="equation-block">
                <p>G = G₀ + G₀ΣG</p>
                <p>G₀: 非相互作用Green函数</p>
                <p>Σ: 自能</p>
              </div>
              
              <h4>自能展开：</h4>
              <div class="equation-block">
                <p>Σ = Σ⁽¹⁾ + Σ⁽²⁾ + ...</p>
                <p>微扰展开</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>GW近似</h3>
            <p>准粒子能量的计算</p>
            <div class="mathematical-content">
              <h4>GW自能：</h4>
              <div class="equation-block">
                <p>Σ(1,2) = iG(1,2)W(1,2)</p>
                <p>W: 屏蔽库仑相互作用</p>
              </div>
              
              <h4>准粒子方程：</h4>
              <div class="equation-block">
                <p>[T + V_ext + V_H + Σ(E)]ψ = Eψ</p>
                <p>自洽求解</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>多体微扰理论的数学基础</h2>
        <div class="mathematical-foundation-grid">
          <div class="foundation-card">
            <div class="concept-icon">📐</div>
            <h3>Hilbert空间理论</h3>
            <p>多体波函数的数学框架</p>
            <div class="mathematical-content">
              <h4>Fock空间：</h4>
              <div class="equation-block">
                <p>ℱ = ⊕ₙ ℋₙ</p>
                <p>ℋₙ: n粒子Hilbert空间</p>
                <p>反对称化条件</p>
              </div>
              
              <h4>二次量子化：</h4>
              <div class="equation-block">
                <p>ψ̂†(x), ψ̂(x): 产生湮灭算符</p>
                <p>{ψ̂(x), ψ̂†(y)} = δ(x-y)</p>
                <p>费米子反对易关系</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="concept-icon">🔄</div>
            <h3>微扰理论的收敛性</h3>
            <p>级数展开的数学性质</p>
            <div class="mathematical-content">
              <h4>收敛半径：</h4>
              <div class="equation-block">
                <p>R = 1/lim|aₙ₊₁/aₙ|</p>
                <p>aₙ: n阶微扰系数</p>
                <p>与能级间距相关</p>
              </div>
              
              <h4>Padé近似：</h4>
              <div class="equation-block">
                <p>[L/M] = P_L(λ)/Q_M(λ)</p>
                <p>改善收敛性</p>
                <p>解析延拓</p>
              </div>
            </div>
          </div>

          <div class="foundation-card">
            <div class="concept-icon">🌊</div>
            <h3>图论方法</h3>
            <p>Feynman图的数学描述</p>
            <div class="mathematical-content">
              <h4>Wick定理：</h4>
              <div class="equation-block">
                <p>T[A₁A₂...Aₙ] = Σ 收缩项</p>
                <p>正规乘积展开</p>
                <p>图形表示</p>
              </div>
              
              <h4>连通图定理：</h4>
              <div class="equation-block">
                <p>ln Z = Σ 连通图</p>
                <p>Z: 配分函数</p>
                <p>链接簇展开</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>高阶微扰方法与精确解</h2>
        <div class="advanced-methods-grid">
          <div class="method-category">
            <h3>高阶MP理论</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>MP3修正</h4>
                <p>三阶能量表达式：</p>
                <div class="equation-block">
                  <p>E⁽³⁾ = Σᵢⱼₖₐᵦᶜ ⟨ijk|abc⟩⟨abc|V|0⟩/(Δᵢⱼₖₐᵦᶜ)</p>
                  <p>三重激发贡献</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>MP4修正</h4>
                <p>四阶能量分解：</p>
                <div class="equation-block">
                  <p>E⁽⁴⁾ = E⁽⁴⁾_SDQ + E⁽⁴⁾_T</p>
                  <p>SDQ: 单双四重激发</p>
                  <p>T: 三重激发</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>多参考微扰理论</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>CASPT2</h4>
                <p>完全活性空间微扰：</p>
                <div class="equation-block">
                  <p>H₀ = P₀HP₀ + PQHPq</p>
                  <p>P₀: CAS投影算符</p>
                  <p>处理近简并态</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>NEVPT2</h4>
                <p>N-电子价态微扰：</p>
                <div class="equation-block">
                  <p>强正交性条件</p>
                  <p>避免入侵态问题</p>
                  <p>尺寸一致性</p>
                </div>
              </div>
            </div>
          </div>

          <div class="method-category">
            <h3>随机方法</h3>
            <div class="method-items">
              <div class="method-item">
                <h4>量子蒙特卡罗</h4>
                <p>变分蒙特卡罗(VMC)：</p>
                <div class="equation-block">
                  <p>E = ∫ Ψ*HΨ dτ / ∫ |Ψ|² dτ</p>
                  <p>试探波函数优化</p>
                </div>
              </div>
              
              <div class="method-item">
                <h4>扩散蒙特卡罗</h4>
                <p>投影算法：</p>
                <div class="equation-block">
                  <p>Ψ(τ) = e^(-τH)Ψ₀</p>
                  <p>τ→∞时收敛到基态</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代计算实现与优化</h2>
        <div class="computational-implementation-grid">
          <div class="implementation-card">
            <div class="concept-icon">💻</div>
            <h3>算法优化</h3>
            <div class="mathematical-content">
              <h4>积分变换：</h4>
              <div class="equation-block">
                <p>(μν|λσ) → (ia|jb)</p>
                <p>AO → MO基变换</p>
                <p>四重循环优化</p>
              </div>
              
              <h4>内存管理：</h4>
              <div class="equation-block">
                <p>直接SCF算法</p>
                <p>分批处理积分</p>
                <p>磁盘I/O优化</p>
              </div>
            </div>
          </div>

          <div class="implementation-card">
            <div class="concept-icon">⚡</div>
            <h3>并行计算</h3>
            <div class="mathematical-content">
              <h4>MPI并行：</h4>
              <div class="equation-block">
                <p>分布式内存</p>
                <p>积分计算并行</p>
                <p>负载均衡</p>
              </div>
              
              <h4>GPU加速：</h4>
              <div class="equation-block">
                <p>CUDA/OpenCL</p>
                <p>矩阵运算加速</p>
                <p>混合精度计算</p>
              </div>
            </div>
          </div>

          <div class="implementation-card">
            <div class="concept-icon">🔧</div>
            <h3>数值稳定性</h3>
            <div class="mathematical-content">
              <h4>线性依赖处理：</h4>
              <div class="equation-block">
                <p>SVD分解</p>
                <p>阈值截断</p>
                <p>正交化算法</p>
              </div>
              
              <h4>收敛加速：</h4>
              <div class="equation-block">
                <p>DIIS算法</p>
                <p>阻尼因子优化</p>
                <p>预条件子</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>与实验的对比和验证</h2>
        <div class="experimental-validation-grid">
          <div class="validation-category">
            <h3>光谱学验证</h3>
            <div class="validation-items">
              <div class="validation-item">
                <h4>电子光谱</h4>
                <p>激发能计算与实验对比：</p>
                <div class="equation-block">
                  <p>EOM-CCSD vs 实验</p>
                  <p>精度: ±0.1-0.3 eV</p>
                  <p>振子强度计算</p>
                </div>
              </div>
              
              <div class="validation-item">
                <h4>振动光谱</h4>
                <p>频率计算验证：</p>
                <div class="equation-block">
                  <p>谐振频率</p>
                  <p>非谐性修正</p>
                  <p>同位素效应</p>
                </div>
              </div>
            </div>
          </div>

          <div class="validation-category">
            <h3>热力学性质</h3>
            <div class="validation-items">
              <div class="validation-item">
                <h4>反应焓</h4>
                <p>化学精度要求：</p>
                <div class="equation-block">
                  <p>目标精度: ±1 kcal/mol</p>
                  <p>CCSD(T)基准</p>
                  <p>基组外推</p>
                </div>
              </div>
              
              <div class="validation-item">
                <h4>键解离能</h4>
                <p>多参考特性：</p>
                <div class="equation-block">
                  <p>单参考方法失效</p>
                  <p>CASSCF/CASPT2</p>
                  <p>实验对比验证</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>前沿发展与未来方向</h2>
        <div class="frontier-developments-grid">
          <div class="development-category">
            <h3>理论前沿</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>密度矩阵重整化群</h4>
                <p>强相关系统的精确处理</p>
              </div>
              
              <div class="development-item">
                <h4>张量网络方法</h4>
                <p>高维量子态的有效表示</p>
              </div>
              
              <div class="development-item">
                <h4>量子嵌入理论</h4>
                <p>局域强相关的处理</p>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>计算前沿</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>机器学习辅助</h4>
                <p>神经网络波函数</p>
              </div>
              
              <div class="development-item">
                <h4>量子计算</h4>
                <p>变分量子本征求解器</p>
              </div>
              
              <div class="development-item">
                <h4>自适应算法</h4>
                <p>智能基组选择</p>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>应用前沿</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>材料设计</h4>
                <p>高通量筛选</p>
              </div>
              
              <div class="development-item">
                <h4>催化机理</h4>
                <p>反应路径优化</p>
              </div>
              
              <div class="development-item">
                <h4>生物大分子</h4>
                <p>蛋白质折叠</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>方法比较与选择</h2>
        <div class="comparison-section">
          <div class="method-comparison">
            <h3>📊 计算成本比较</h3>
            <div class="cost-table">
              <div class="cost-row">
                <span class="method-name">HF</span>
                <span class="scaling">N⁴</span>
                <span class="accuracy">基准</span>
              </div>
              <div class="cost-row">
                <span class="method-name">MP2</span>
                <span class="scaling">N⁵</span>
                <span class="accuracy">中等</span>
              </div>
              <div class="cost-row">
                <span class="method-name">CCSD</span>
                <span class="scaling">N⁶</span>
                <span class="accuracy">高</span>
              </div>
              <div class="cost-row">
                <span class="method-name">CCSD(T)</span>
                <span class="scaling">N⁷</span>
                <span class="accuracy">很高</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="applications">
        <h2>应用实例</h2>
        <div class="example-box">
          <h3>例1：分子解离</h3>
          <p>化学键断裂的描述：</p>
          <div class="equation-block">
            <p>HF方法失效</p>
            <p>需要多参考态方法</p>
            <p>CASSCF, MRCI等</p>
          </div>
        </div>
        
        <div class="example-box">
          <h3>例2：激发态性质</h3>
          <p>电子激发能的计算：</p>
          <div class="equation-block">
            <p>CIS, TDHF方法</p>
            <p>EOM-CCSD</p>
            <p>与实验光谱比较</p>
          </div>
        </div>

        <div class="example-box">
          <h3>例3：弱相互作用</h3>
          <p>色散力的描述：</p>
          <div class="equation-block">
            <p>MP2以上方法必需</p>
            <p>SAPT分解分析</p>
            <p>分子间相互作用</p>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>现代发展</h2>
        <div class="modern-developments">
          <div class="development-item">
            <h3>🚀 线性标度方法</h3>
            <p>局域相关方法</p>
          </div>
          <div class="development-item">
            <h3>🎯 显式相关</h3>
            <p>F12方法</p>
          </div>
          <div class="development-item">
            <h3>🔧 多参考方法</h3>
            <p>DMRG, FCIQMC</p>
          </div>
          <div class="development-item">
            <h3>🌐 机器学习</h3>
            <p>神经网络波函数</p>
          </div>
        </div>
      </section>

      <section class="summary">
        <h2>本节要点</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <p>多体微扰理论系统地处理电子相关</p>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <p>MP2是最简单的相关方法</p>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <p>耦合簇理论提供高精度结果</p>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <p>方法选择需平衡精度与成本</p>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <p>新方法不断涌现和发展</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6_3',
  mounted() {
    if (window.MathJax) {
      window.MathJax.typesetPromise();
    }
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
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
  border-bottom: 3px solid #fd7e14;
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
  background: linear-gradient(135deg, #fd7e14 0%, #ffc107 100%);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
}

.reading-time {
  color: #666;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  background: #f8f9fa;
  border-radius: 20px;
}

.introduction {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
}

.lead-text {
  font-size: 1.2rem;
  color: #856404;
  font-weight: 500;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e9ecef;
}

.concept-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.concept-card {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.concept-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.ci-section {
  background: linear-gradient(135deg, #e7e3ff 0%, #d1c4e9 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.comparison-section {
  background: linear-gradient(135deg, #d4edda 0%, #c3e6cb 100%);
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
}

.method-comparison h3 {
  color: #155724;
  margin-bottom: 1.5rem;
  text-align: center;
}

.cost-table {
  display: grid;
  gap: 1rem;
}

.cost-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.method-name {
  font-weight: bold;
  color: #2c3e50;
}

.scaling {
  font-family: 'Courier New', monospace;
  color: #dc3545;
}

.accuracy {
  color: #28a745;
}

.concept-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.mathematical-content {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.mathematical-content h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 6px;
  border-left: 4px solid #fd7e14;
  margin: 0.5rem 0;
}

.equation-block p {
  margin: 0.3rem 0;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.mathematical-foundation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.foundation-card {
  background: linear-gradient(135deg, #e8f5e8 0%, #d4edda 100%);
  border: 1px solid #c3e6cb;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.foundation-card:hover {
  transform: translateY(-3px);
}

.foundation-card h3 {
  color: #155724;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.advanced-methods-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.method-category {
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #ffeaa7;
}

.method-category h3 {
  color: #856404;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.method-items {
  display: grid;
  gap: 1rem;
}

.method-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.method-item h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.computational-implementation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.implementation-card {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border: 1px solid #90caf9;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.3s ease;
}

.implementation-card:hover {
  transform: scale(1.02);
}

.implementation-card h3 {
  color: #0d47a1;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.experimental-validation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.validation-category {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #ce93d8;
}

.validation-category h3 {
  color: #4a148c;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.validation-items {
  display: grid;
  gap: 1rem;
}

.validation-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
}

.validation-item h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.frontier-developments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.development-category {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%);
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid #f48fb1;
}

.development-category h3 {
  color: #880e4f;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  text-align: center;
}

.development-items {
  display: grid;
  gap: 1rem;
}

.development-item {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e91e63;
}

.development-item h4 {
  color: #495057;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.modern-developments {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.development-item {
  background: linear-gradient(135deg, #f3e5f5 0%, #e1bee7 100%);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}

.development-item h3 {
  color: #7b1fa2;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.applications {
  margin: 3rem 0;
}

.example-box {
  background: #f0f8ff;
  border: 1px solid #007bff;
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 1rem;
}

.example-box h3 {
  color: #0056b3;
  margin-bottom: 1rem;
}

.summary {
  background: linear-gradient(135deg, #fd7e14 0%, #ffc107 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
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
  
  .concept-grid {
    grid-template-columns: 1fr;
  }
  
  .modern-developments {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
  
  .chapter-meta {
    flex-direction: column;
    gap: 1rem;
  }
  
  .cost-row {
    grid-template-columns: 1fr;
    text-align: left;
  }
}
</style>