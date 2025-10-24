<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">2.6 线性响应理论的适用性</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">响应理论</span>
        <span class="reading-time">预计阅读时间: 35分钟</span>
      </div>
    </div>

    <div class="chapter-body">
      <div class="introduction">
        <h2>线性响应理论概述</h2>
        <p class="lead-text">线性响应理论用于描述系统对微扰的响应，通过 Kubo 公式联系微观机制与宏观输运，便于理解多种物理现象的统一框架；其适用性受微扰强度与平衡条件等限制。</p>
      </div>

      

      <div class="content-section">
        <h2>线性响应理论的严格推导</h2>
        
        
        <div class="theory-section">
          <h3>Kubo公式的严格推导</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 微扰哈密顿量</h4>
              <div class="equation-block">
                <p><strong>总哈密顿量：</strong></p>
                <p>Ĥ(t) = Ĥ₀ + Ĥ₁(t)</p>
                <p>其中 Ĥ₁(t) = -∑ᵢ B̂ᵢ fᵢ(t) 是微扰项</p>
                <p><strong>相互作用表象：</strong></p>
                <p>B̂ᵢ(t) = e^(iĤ₀t/ℏ) B̂ᵢ e^(-iĤ₀t/ℏ)</p>
                <p><strong>时间演化算符：</strong></p>
                <p>Û(t,t₀) = T exp[-i/ℏ ∫_{t₀}^t Ĥ₁(t') dt']</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 密度矩阵的演化</h4>
              <div class="equation-block">
                <p><strong>von Neumann方程：</strong></p>
                <p>iℏ ∂ρ̂/∂t = [Ĥ(t), ρ̂(t)]</p>
                <p><strong>相互作用表象中：</strong></p>
                <p>ρ̂ᵢ(t) = Û(t,-∞) ρ̂₀ Û†(t,-∞)</p>
                <p>其中 ρ̂₀ = e^(-βĤ₀)/Z₀ 是平衡态密度矩阵</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 一阶微扰展开</h4>
              <div class="equation-block">
                <p><strong>时间演化算符的展开：</strong></p>
                <p>Û(t,-∞) ≈ 1 - (i/ℏ) ∫_{-∞}^t Ĥ₁(t') dt' + O(Ĥ₁²)</p>
                <p><strong>密度矩阵的一阶修正：</strong></p>
                <p>ρ̂ᵢ⁽¹⁾(t) = -(i/ℏ) ∫_{-∞}^t [Ĥ₁(t'), ρ̂₀] dt'</p>
                <p><strong>物理量期望值：</strong></p>
                <p>⟨Â(t)⟩ = Tr[Âᵢ(t) ρ̂ᵢ(t)] = ⟨Â⟩₀ + ⟨Â⟩⁽¹⁾</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>4. Kubo公式的导出</h4>
              <div class="equation-block">
                <p><strong>一阶响应：</strong></p>
                <p>⟨Â⟩⁽¹⁾ = -(i/ℏ) ∫_{-∞}^t Tr[Âᵢ(t)[Ĥ₁(t'), ρ̂₀]] dt'</p>
                <p><strong>循环性质利用：</strong></p>
                <p>= (i/ℏ) ∫_{-∞}^t Tr[[Âᵢ(t), Ĥ₁(t')] ρ̂₀] dt'</p>
                <p><strong>最终的Kubo公式：</strong></p>
                <p>⟨Â(t)⟩ = ⟨Â⟩₀ + ∑ᵢ ∫_{-∞}^t χ_{AB}(t-t') fᵢ(t') dt'</p>
                <p>其中 χ_{AB}(τ) = (i/ℏ)θ(τ)⟨[Â(τ), B̂(0)]⟩₀</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 响应函数的解析性质 -->
        <div class="theory-section">
          <h3>响应函数的解析性质</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 因果性与解析结构</h4>
              <div class="equation-block">
                <p><strong>因果性条件：</strong></p>
                <p>χ(t) = 0 for t &lt; 0</p>
                <p><strong>Fourier变换：</strong></p>
                <p>χ(ω) = ∫_{-∞}^∞ χ(t) e^(iωt) dt = ∫_0^∞ χ(t) e^(iωt) dt</p>
                <p><strong>解析性：</strong></p>
                <p>χ(ω) 在上半复平面解析</p>
                <p>极点位置决定系统的激发谱</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. Kramers-Kronig关系</h4>
              <div class="equation-block">
                <p><strong>实部与虚部的关系：</strong></p>
                <p>χ'(ω) = (1/π) P ∫_{-∞}^∞ χ''(ω')/(ω-ω') dω'</p>
                <p>χ''(ω) = -(1/π) P ∫_{-∞}^∞ χ'(ω')/(ω-ω') dω'</p>
                <p>其中 P 表示主值积分</p>
                <p><strong>物理意义：</strong></p>
                <p>因果性导致的约束关系</p>
                <p>实验验证理论的重要工具</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 涨落-耗散定理</h4>
              <div class="equation-block">
                <p><strong>涨落-耗散关系：</strong></p>
                <p>χ''(ω) = (1/2)tanh(βℏω/2) S(ω)</p>
                <p>其中 S(ω) 是谱密度函数</p>
                <p><strong>经典极限：</strong></p>
                <p>χ''(ω) = (k_B T/ℏω) S(ω) (ℏω ≪ k_B T)</p>
                <p><strong>物理意义：</strong></p>
                <p>耗散与热涨落的内在联系</p>
                <p>Einstein关系的推广</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 求和规则 -->
        <div class="theory-section">
          <h3>求和规则与守恒律</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. f-求和规则</h4>
              <div class="equation-block">
                <p><strong>一般形式：</strong></p>
                <p>∫_0^∞ ω χ''(ω) dω = (π/2)⟨[Â, [Ĥ, B̂]]⟩₀</p>
                <p><strong>电导率的f-求和规则：</strong></p>
                <p>∫_0^∞ σ(ω) dω = (πne²/2m)</p>
                <p>其中 n 是载流子密度</p>
                <p><strong>物理意义：</strong></p>
                <p>高频行为由动能算符决定</p>
                <p>与载流子有效质量相关</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 静态求和规则</h4>
              <div class="equation-block">
                <p><strong>零频极限：</strong></p>
                <p>χ(0) = ∫_0^∞ χ''(ω)/ω dω</p>
                <p><strong>压缩率求和规则：</strong></p>
                <p>κ = -(1/n²)(∂n/∂μ) = ∫_0^∞ χ''_{nn}(ω)/(πω) dω</p>
                <p><strong>磁化率求和规则：</strong></p>
                <p>χ_m = ∫_0^∞ χ''_{mm}(ω)/(πω) dω</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. Ward恒等式</h4>
              <div class="equation-block">
                <p><strong>守恒流的约束：</strong></p>
                <p>∂_μ j^μ = 0 → q_μ Π^μν(q) = 0</p>
                <p>其中 Π^μν 是极化张量</p>
                <p><strong>电荷守恒：</strong></p>
                <p>ω Π^{00}(q,ω) = q·Π^{0i}(q,ω)</p>
                <p><strong>物理意义：</strong></p>
                <p>守恒律对响应函数的约束</p>
                <p>确保规范不变性</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="content-section">
        <h2>适用条件的详细分析</h2>
        
        <!-- 微扰条件 -->
        <div class="theory-section">
          <h3>微扰强度的量化条件</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 能量尺度比较</h4>
              <div class="equation-block">
                <p><strong>微扰能量：</strong></p>
                <p>E_pert = |⟨B̂⟩| × |f|</p>
                <p><strong>系统特征能量：</strong></p>
                <p>E_char = k_B T, ℏω_c, E_F, Δ, ...</p>
                <p><strong>微扰条件：</strong></p>
                <p>E_pert ≪ E_char</p>
                <p>具体数值：E_pert/E_char &lt; 0.1</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 响应幅度限制</h4>
              <div class="equation-block">
                <p><strong>相对响应：</strong></p>
                <p>δ = |⟨Â⟩ - ⟨Â⟩₀|/|⟨Â⟩₀|</p>
                <p><strong>线性区域：</strong></p>
                <p>δ &lt; 0.05 (5%误差)</p>
                <p><strong>非线性修正：</strong></p>
                <p>⟨Â⟩ = ⟨Â⟩₀ + χ₁f + χ₂f² + χ₃f³ + ...</p>
                <p>线性条件：|χ₂f²/χ₁f| ≪ 1</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 频率依赖的限制</h4>
              <div class="equation-block">
                <p><strong>绝热条件：</strong></p>
                <p>ω τ_relax ≪ 1</p>
                <p>其中 τ_relax 是弛豫时间</p>
                <p><strong>量子条件：</strong></p>
                <p>ℏω ≪ k_B T (经典区域)</p>
                <p>ℏω ≫ k_B T (量子区域)</p>
                <p><strong>共振避免：</strong></p>
                <p>ω ≠ ω_n (避开系统本征频率)</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 平衡态稳定性 -->
        <div class="theory-section">
          <h3>平衡态稳定性分析</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 热力学稳定性</h4>
              <div class="equation-block">
                <p><strong>自由能的凸性：</strong></p>
                <p>∂²F/∂X² > 0</p>
                <p>其中 X 是广义坐标</p>
                <p><strong>响应函数的正定性：</strong></p>
                <p>χ''(ω) > 0 for ω > 0</p>
                <p><strong>Le Chatelier原理：</strong></p>
                <p>系统对扰动的响应趋于恢复平衡</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 动力学稳定性</h4>
              <div class="equation-block">
                <p><strong>Lyapunov稳定性：</strong></p>
                <p>小扰动不会导致系统发散</p>
                <p><strong>线性化动力学：</strong></p>
                <p>δẋ = -Γ δx</p>
                <p>其中 Γ > 0 是阻尼矩阵</p>
                <p><strong>特征时间：</strong></p>
                <p>τ = 1/γ_min (最小阻尼率的倒数)</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 临界点附近的行为</h4>
              <div class="equation-block">
                <p><strong>临界慢化：</strong></p>
                <p>τ ∝ |T - T_c|^{-z} (临界指数z)</p>
                <p><strong>涨落增强：</strong></p>
                <p>⟨(δA)²⟩ ∝ |T - T_c|^{-γ}</p>
                <p><strong>线性响应失效：</strong></p>
                <p>涨落与响应同量级</p>
                <p>需要非线性理论处理</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 时间尺度分离 -->
        <div class="theory-section">
          <h3>时间尺度分离条件</h3>
          <div class="mathematical-derivation">
            <div class="derivation-step">
              <h4>1. 多时间尺度分析</h4>
              <div class="equation-block">
                <p><strong>快变量与慢变量：</strong></p>
                <p>τ_fast ≪ τ_slow</p>
                <p>快变量绝热跟随慢变量</p>
                <p><strong>绝热消除：</strong></p>
                <p>快变量可以用慢变量表示</p>
                <p><strong>有效动力学：</strong></p>
                <p>只保留慢变量的动力学方程</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>2. 弛豫时间层次</h4>
              <div class="equation-block">
                <p><strong>电子弛豫：</strong></p>
                <p>τ_e ~ 10^{-15} - 10^{-12} s</p>
                <p><strong>声子弛豫：</strong></p>
                <p>τ_ph ~ 10^{-12} - 10^{-9} s</p>
                <p><strong>自旋弛豫：</strong></p>
                <p>τ_s ~ 10^{-9} - 10^{-6} s</p>
                <p><strong>扩散过程：</strong></p>
                <p>τ_D ~ 10^{-6} - 10^{-3} s</p>
              </div>
            </div>

            <div class="derivation-step">
              <h4>3. 观测时间窗口</h4>
              <div class="equation-block">
                <p><strong>实验时间分辨率：</strong></p>
                <p>Δt_exp 决定可观测的过程</p>
                <p><strong>有效响应：</strong></p>
                <p>只有 τ > Δt_exp 的过程可观测</p>
                <p><strong>频域对应：</strong></p>
                <p>ω &lt; 1/Δt_exp 的响应可测量</p>
                <p><strong>带宽限制：</strong></p>
                <p>Δω × Δt ≥ 1 (不确定性原理)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>适用条件的详细分析</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🌡️</div>
            <h3>温度条件</h3>
            <p>温度对线性响应理论适用性的影响</p>
            <div class="mathematical-content">
              <h4>高温极限 (kᵦT ≫ ℏω)：</h4>
              <div class="equation-block">
                <p>经典统计力学适用</p>
                <p>涨落-耗散定理简化</p>
                <p>χ''(ω) = (ω/2kᵦT)∫₀^∞ ⟨[A(t),A(0)]⟩dt</p>
              </div>
              
              <h4>低温极限 (kᵦT ≪ ℏω)：</h4>
              <div class="equation-block">
                <p>量子效应显著</p>
                <p>基态性质主导</p>
                <p>χ''(ω) ≈ π⟨0|[A,H]|n⟩⟨n|A|0⟩δ(ω-ωₙ)</p>
              </div>
              
              <h4>中间温度区域：</h4>
              <div class="equation-block">
                <p>kᵦT ~ ℏω</p>
                <p>量子与经典效应竞争</p>
                <p>需要完整的量子统计处理</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚡</div>
            <h3>扰动强度</h3>
            <p>外界扰动强度的限制条件</p>
            <div class="mathematical-content">
              <h4>电场扰动：</h4>
              <div class="equation-block">
                <p>eE·a ≪ kᵦT (经典)</p>
                <p>eE·a ≪ EF (量子)</p>
                <p>a: 晶格常数</p>
                <p>E: 外电场强度</p>
              </div>
              
              <h4>磁场扰动：</h4>
              <div class="equation-block">
                <p>μᵦB ≪ kᵦT (顺磁性)</p>
                <p>ωc·τ ≪ 1 (回旋共振)</p>
                <p>ωc = eB/m: 回旋频率</p>
              </div>
              
              <h4>机械应力：</h4>
              <div class="equation-block">
                <p>σ·V ≪ kᵦT</p>
                <p>σ: 应力</p>
                <p>V: 原子体积</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">📊</div>
            <h3>频率响应</h3>
            <p>不同频率范围的适用性</p>
            <div class="mathematical-content">
              <h4>直流极限 (ω → 0)：</h4>
              <div class="equation-block">
                <p>χ(0) = ∫₀^∞ χ(t)dt</p>
                <p>静态响应系数</p>
                <p>热力学量的涨落</p>
              </div>
              
              <h4>光学频率 (ℏω ~ eV)：</h4>
              <div class="equation-block">
                <p>电子跃迁主导</p>
                <p>带间跃迁</p>
                <p>等离激元激发</p>
              </div>
              
              <h4>太赫兹频率 (ℏω ~ meV)：</h4>
              <div class="equation-block">
                <p>声子激发</p>
                <p>自旋波</p>
                <p>超导能隙激发</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>失效机制与非线性效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">⚠️</div>
            <h3>强场效应</h3>
            <p>强外场导致的非线性响应</p>
            <div class="mathematical-content">
              <h4>非线性电导：</h4>
              <div class="equation-block">
                <p>J = σ₁E + σ₂E² + σ₃E³ + ...</p>
                <p>高次项变得重要</p>
                <p>热电子效应</p>
              </div>
              
              <h4>多光子过程：</h4>
              <div class="equation-block">
                <p>强激光场中的非线性光学</p>
                <p>多光子吸收</p>
                <p>高次谐波产生</p>
              </div>
              
              <h4>击穿现象：</h4>
              <div class="equation-block">
                <p>Zener隧穿</p>
                <p>雪崩击穿</p>
                <p>热击穿</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>强关联效应</h3>
            <p>电子-电子相互作用的非微扰效应</p>
            <div class="mathematical-content">
              <h4>Mott相变：</h4>
              <div class="equation-block">
                <p>金属-绝缘体相变</p>
                <p>U/t > (U/t)c</p>
                <p>Hubbard模型</p>
              </div>
              
              <h4>Kondo效应：</h4>
              <div class="equation-block">
                <p>磁性杂质的屏蔽</p>
                <p>TK = D exp(-1/ρJ)</p>
                <p>非费米液体行为</p>
              </div>
              
              <h4>分数量子霍尔效应：</h4>
              <div class="equation-block">
                <p>强磁场中的关联液体</p>
                <p>Laughlin波函数</p>
                <p>任意子激发</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>非平衡态</h3>
            <p>远离平衡态的响应理论</p>
            <div class="mathematical-content">
              <h4>Keldysh形式：</h4>
              <div class="equation-block">
                <p>非平衡Green函数</p>
                <p>闭合时间路径</p>
                <p>G&lt;(t,t'), G>(t,t')</p>
              </div>
              
              <h4>输运方程：</h4>
              <div class="equation-block">
                <p>Boltzmann方程</p>
                <p>碰撞积分</p>
                <p>弛豫时间近似</p>
              </div>
              
              <h4>涨落定理：</h4>
              <div class="equation-block">
                <p>非平衡涨落-耗散关系</p>
                <p>Jarzynski等式</p>
                <p>Crooks定理</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新增：线性响应理论的现代发展 -->
      <section class="content-section">
        <h2>线性响应理论的现代发展</h2>
        
        <div class="modern-developments-grid">
          <div class="development-category">
            <h3>🧮 计算方法的进展</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>密度泛函微扰理论 (DFPT)</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>基本思想：</strong></p>
                    <p>δρ(r) = ∫ χ(r,r') δV_ext(r') dr'</p>
                    <p>密度响应函数的第一性原理计算</p>
                    <p><strong>应用：</strong></p>
                    <p>• 声子谱计算</p>
                    <p>• 介电函数</p>
                    <p>• 弹性常数</p>
                    <p>• 压电系数</p>
                  </div>
                </div>
              </div>
              
              <div class="development-item">
                <h4>GW近似中的响应函数</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>自能修正：</strong></p>
                    <p>Σ(ω) = iG(ω)W(ω)</p>
                    <p>W(ω) = v + vΠ(ω)W(ω)</p>
                    <p><strong>极化函数：</strong></p>
                    <p>Π(q,ω) = -i∫ G(k,ω+ω')G(k+q,ω') dω'dk</p>
                    <p><strong>准粒子能带：</strong></p>
                    <p>E_qp = E_DFT + ⟨ψ|Σ(E_qp) - V_xc|ψ⟩</p>
                  </div>
                </div>
              </div>
              
              <div class="development-item">
                <h4>时间依赖密度泛函理论 (TDDFT)</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>时间演化：</strong></p>
                    <p>iℏ ∂ψ_i/∂t = [T + V_ext(t) + V_H + V_xc]ψ_i</p>
                    <p><strong>线性响应：</strong></p>
                    <p>χ(ω) = χ_KS(ω) + χ_KS(ω)f_xc(ω)χ(ω)</p>
                    <p><strong>激发态性质：</strong></p>
                    <p>• 光学吸收谱</p>
                    <p>• 激子结合能</p>
                    <p>• 等离激元</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🔬 实验技术的对应</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>超快光谱学</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>泵浦-探测技术：</strong></p>
                    <p>ΔR/R(t) = ∫ χ(t-t') I_pump(t') dt'</p>
                    <p><strong>时间分辨率：</strong></p>
                    <p>飞秒至阿秒尺度</p>
                    <p><strong>应用：</strong></p>
                    <p>• 载流子动力学</p>
                    <p>• 相干声子</p>
                    <p>• 超快相变</p>
                  </div>
                </div>
              </div>
              
              <div class="development-item">
                <h4>太赫兹时域光谱</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>复电导率：</strong></p>
                    <p>σ(ω) = σ₁(ω) + iσ₂(ω)</p>
                    <p>直接测量Kubo公式预言</p>
                    <p><strong>频率范围：</strong></p>
                    <p>0.1 - 10 THz (3 - 300 cm⁻¹)</p>
                    <p><strong>物理信息：</strong></p>
                    <p>• Drude响应</p>
                    <p>• 声子模式</p>
                    <p>• 超导能隙</p>
                  </div>
                </div>
              </div>
              
              <div class="development-item">
                <h4>非线性光学响应</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>二阶响应：</strong></p>
                    <p>P⁽²⁾ = χ⁽²⁾E²</p>
                    <p>二次谐波产生 (SHG)</p>
                    <p><strong>三阶响应：</strong></p>
                    <p>P⁽³⁾ = χ⁽³⁾E³</p>
                    <p>四波混频，Kerr效应</p>
                    <p><strong>对称性约束：</strong></p>
                    <p>中心对称晶体：χ⁽²⁾ = 0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="development-category">
            <h3>🌐 跨学科应用</h3>
            <div class="development-items">
              <div class="development-item">
                <h4>生物物理中的响应理论</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>蛋白质动力学：</strong></p>
                    <p>构象变化的线性响应</p>
                    <p>酶催化的动力学理论</p>
                    <p><strong>膜输运：</strong></p>
                    <p>离子通道的电导</p>
                    <p>Goldman-Hodgkin-Katz方程</p>
                    <p><strong>神经网络：</strong></p>
                    <p>突触可塑性</p>
                    <p>信息传递效率</p>
                  </div>
                </div>
              </div>
              
              <div class="development-item">
                <h4>量子信息中的应用</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>量子纠错：</strong></p>
                    <p>错误综合征的响应</p>
                    <p>阈值定理</p>
                    <p><strong>量子传感：</strong></p>
                    <p>敏感度的量子极限</p>
                    <p>Cramér-Rao界</p>
                    <p><strong>绝热量子计算：</strong></p>
                    <p>绝热定理的应用</p>
                    <p>能隙保护</p>
                  </div>
                </div>
              </div>
              
              <div class="development-item">
                <h4>机器学习与响应理论</h4>
                <div class="mathematical-content">
                  <div class="equation-block">
                    <p><strong>神经网络的响应：</strong></p>
                    <p>梯度下降的线性化</p>
                    <p>神经切线核 (NTK)</p>
                    <p><strong>特征学习：</strong></p>
                    <p>表示学习的动力学</p>
                    <p>临界现象</p>
                    <p><strong>物理启发的算法：</strong></p>
                    <p>模拟退火</p>
                    <p>量子退火</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新增：前沿研究方向 -->
      <section class="content-section">
        <h2>前沿研究方向与未来展望</h2>
        
        <div class="frontier-research-grid">
          <div class="research-category">
            <h3>🔮 理论前沿</h3>
            <div class="research-items">
              <div class="research-item">
                <h4>非厄米系统的响应理论</h4>
                <p>开放量子系统中的线性响应，PT对称性破缺，例外点附近的奇异响应</p>
              </div>
              <div class="research-item">
                <h4>拓扑响应理论</h4>
                <p>拓扑不变量的响应，量子化的输运系数，边界态的贡献</p>
              </div>
              <div class="research-item">
                <h4>多体局域化系统</h4>
                <p>无序强相互作用系统，遍历性破缺，量子热化的失效</p>
              </div>
              <div class="research-item">
                <h4>时间晶体的响应</h4>
                <p>离散时间平移对称性破缺，Floquet系统，周期驱动的响应</p>
              </div>
            </div>
          </div>

          <div class="research-category">
            <h3>🧪 实验前沿</h3>
            <div class="research-items">
              <div class="research-item">
                <h4>阿秒科学</h4>
                <p>电子动力学的实时观测，强场物理，高次谐波光谱学</p>
              </div>
              <div class="research-item">
                <h4>量子材料的光谱学</h4>
                <p>二维材料，拓扑绝缘体，Weyl半金属的光学性质</p>
              </div>
              <div class="research-item">
                <h4>冷原子量子模拟</h4>
                <p>人工规范场，合成维度，可调相互作用的量子气体</p>
              </div>
              <div class="research-item">
                <h4>超导量子器件</h4>
                <p>约瑟夫森结阵列，超导量子比特，拓扑超导体</p>
              </div>
            </div>
          </div>

          <div class="research-category">
            <h3>💻 计算前沿</h3>
            <div class="research-items">
              <div class="research-item">
                <h4>量子计算模拟</h4>
                <p>变分量子本征求解器，量子近似优化算法，量子机器学习</p>
              </div>
              <div class="research-item">
                <h4>机器学习辅助</h4>
                <p>神经网络波函数，自动微分，符号回归</p>
              </div>
              <div class="research-item">
                <h4>高性能计算</h4>
                <p>GPU加速，分布式计算，异构计算架构</p>
              </div>
              <div class="research-item">
                <h4>数据驱动发现</h4>
                <p>高通量计算，材料基因组，逆向设计</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 新增：本章要点总结 -->
      <section class="summary">
        <h2>本章要点总结</h2>
        <div class="key-points">
          <div class="point-item">
            <span class="point-number">1</span>
            <div class="point-content">
              <h4>理论基础</h4>
              <p>线性响应理论通过Kubo公式建立了微观量子力学与宏观输运性质的桥梁，其适用性依赖于微扰的线性性、平衡态的存在和绝热近似的成立。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">2</span>
            <div class="point-content">
              <h4>数学框架</h4>
              <p>响应函数具有严格的解析性质，满足因果性、Kramers-Kronig关系和涨落-耗散定理，这些关系提供了理论自洽性检验和实验验证的工具。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">3</span>
            <div class="point-content">
              <h4>适用条件</h4>
              <p>线性响应理论要求扰动强度小、系统处于稳定平衡态、时间尺度分离明确，违反这些条件将导致非线性效应和理论失效。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">4</span>
            <div class="point-content">
              <h4>现代发展</h4>
              <p>现代计算方法如DFPT、GW、TDDFT极大扩展了线性响应理论的应用范围，使得第一性原理计算各种响应性质成为可能。</p>
            </div>
          </div>
          <div class="point-item">
            <span class="point-number">5</span>
            <div class="point-content">
              <h4>前沿应用</h4>
              <p>线性响应理论在量子材料、生物物理、量子信息等前沿领域展现出新的应用潜力，与机器学习、量子计算等新技术深度融合。</p>
            </div>
          </div>
        </div>
      </section>
      <section class="content-section">
        <h2>失效机制与非线性效应</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">💥</div>
            <h3>强场效应</h3>
            <p>强外场导致的非线性响应</p>
            <div class="mathematical-content">
              <h4>非线性电导：</h4>
              <div class="equation-block">
                <p>J = σ₁E + σ₃E³ + ...</p>
                <p>σ₃: 三阶非线性电导率</p>
                <p>热电子效应</p>
              </div>
              
              <h4>光学非线性：</h4>
              <div class="equation-block">
                <p>P = χ⁽¹⁾E + χ⁽³⁾E³ + ...</p>
                <p>χ⁽³⁾: 三阶光学极化率</p>
                <p>多光子过程</p>
              </div>
              
              <h4>磁场非线性：</h4>
              <div class="equation-block">
                <p>M = χ₁H + χ₃H³ + ...</p>
                <p>磁化强度的非线性</p>
                <p>磁畴翻转</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌀</div>
            <h3>相变附近</h3>
            <p>相变点附近线性响应理论的失效</p>
            <div class="mathematical-content">
              <h4>临界涨落：</h4>
              <div class="equation-block">
                <p>χ ∝ |T - Tc|^(-γ)</p>
                <p>γ: 临界指数</p>
                <p>响应系数发散</p>
              </div>
              
              <h4>关联长度：</h4>
              <div class="equation-block">
                <p>ξ ∝ |T - Tc|^(-ν)</p>
                <p>ν: 关联长度指数</p>
                <p>长程关联</p>
              </div>
              
              <h4>临界慢化：</h4>
              <div class="equation-block">
                <p>τ ∝ ξ^z</p>
                <p>z: 动力学指数</p>
                <p>弛豫时间发散</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>量子相干效应</h3>
            <p>量子相干性导致的偏离</p>
            <div class="mathematical-content">
              <h4>弱局域化：</h4>
              <div class="equation-block">
                <p>Δσ = -e²/(2π²ℏ) ∫ dε P(ε)</p>
                <p>P(ε): 返回概率</p>
                <p>量子干涉修正</p>
              </div>
              
              <h4>Aharonov-Bohm效应：</h4>
              <div class="equation-block">
                <p>相位因子: e^(ie∮A·dl/ℏ)</p>
                <p>磁通量子化</p>
                <p>拓扑效应</p>
              </div>
              
              <h4>超导相干性：</h4>
              <div class="equation-block">
                <p>Josephson效应</p>
                <p>宏观量子相干</p>
                <p>非线性I-V特性</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>具体物理系统的适用性</h2>
        <div class="application-grid">
          <div class="application-card">
            <h3>🔋 金属系统</h3>
            <div class="application-content">
              <h4>适用条件：</h4>
              <ul>
                <li>eE·ℓ ≪ EF (弱电场)</li>
                <li>ℏω ≪ EF (低频)</li>
                <li>kᵦT ≪ EF (简并电子气)</li>
              </ul>
              
              <h4>典型应用：</h4>
              <ul>
                <li>直流电导率</li>
                <li>霍尔效应</li>
                <li>磁阻效应</li>
                <li>热电效应</li>
              </ul>
              
              <h4>失效情况：</h4>
              <ul>
                <li>强电场下的热电子</li>
                <li>高频光学响应</li>
                <li>强磁场量子振荡</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>🧲 磁性系统</h3>
            <div class="application-content">
              <h4>适用条件：</h4>
              <ul>
                <li>μᵦH ≪ kᵦT (顺磁相)</li>
                <li>H ≪ Hc (临界场以下)</li>
                <li>ω ≪ ωex (交换频率以下)</li>
              </ul>
              
              <h4>典型应用：</h4>
              <ul>
                <li>磁化率测量</li>
                <li>自旋波激发</li>
                <li>磁共振</li>
                <li>磁光效应</li>
              </ul>
              
              <h4>失效情况：</h4>
              <ul>
                <li>磁畴翻转</li>
                <li>磁滞回线</li>
                <li>自旋玻璃态</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>⚡ 超导系统</h3>
            <div class="application-content">
              <h4>适用条件：</h4>
              <ul>
                <li>ℏω ≪ 2Δ (能隙以下)</li>
                <li>I ≪ Ic (临界电流以下)</li>
                <li>H ≪ Hc (临界磁场以下)</li>
              </ul>
              
              <h4>典型应用：</h4>
              <ul>
                <li>Meissner效应</li>
                <li>London穿透深度</li>
                <li>BCS态密度</li>
                <li>Josephson效应(小电流)</li>
              </ul>
              
              <h4>失效情况：</h4>
              <ul>
                <li>涡旋运动</li>
                <li>磁通跳跃</li>
                <li>非线性Josephson效应</li>
              </ul>
            </div>
          </div>

          <div class="application-card">
            <h3>💎 半导体系统</h3>
            <div class="application-content">
              <h4>适用条件：</h4>
              <ul>
                <li>eE·a ≪ Eg (弱电场)</li>
                <li>载流子浓度适中</li>
                <li>温度不太高</li>
              </ul>
              
              <h4>典型应用：</h4>
              <ul>
                <li>载流子迁移率</li>
                <li>介电常数</li>
                <li>光学吸收</li>
                <li>霍尔效应</li>
              </ul>
              
              <h4>失效情况：</h4>
              <ul>
                <li>雪崩击穿</li>
                <li>热载流子效应</li>
                <li>强光激发</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>实验验证与判断标准</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">📈</div>
            <h3>线性性检验</h3>
            <p>实验中如何验证线性响应</p>
            <div class="mathematical-content">
              <h4>响应-激励关系：</h4>
              <div class="equation-block">
                <p>R(F) = χ·F + α·F³ + ...</p>
                <p>线性区域: |α·F²| ≪ |χ|</p>
                <p>通过改变F强度验证</p>
              </div>
              
              <h4>频率依赖性：</h4>
              <div class="equation-block">
                <p>χ(ω) = χ'(ω) + iχ''(ω)</p>
                <p>Kramers-Kronig关系验证</p>
                <p>因果性检验</p>
              </div>
              
              <h4>对称性检验：</h4>
              <div class="equation-block">
                <p>Onsager倒易关系</p>
                <p>χᵢⱼ(B) = χⱼᵢ(-B)</p>
                <p>时间反演对称性</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">⚠️</div>
            <h3>偏离信号</h3>
            <p>识别非线性效应的实验信号</p>
            <div class="mathematical-content">
              <h4>谐波产生：</h4>
              <div class="equation-block">
                <p>输入: F cos(ωt)</p>
                <p>输出: R₁cos(ωt) + R₃cos(3ωt) + ...</p>
                <p>高次谐波 → 非线性</p>
              </div>
              
              <h4>滞后现象：</h4>
              <div class="equation-block">
                <p>R(F↑) ≠ R(F↓)</p>
                <p>磁滞、电滞</p>
                <p>记忆效应</p>
              </div>
              
              <h4>阈值行为：</h4>
              <div class="equation-block">
                <p>F &lt; Fc: 线性响应</p>
                <p>F > Fc: 突变或饱和</p>
                <p>相变、击穿</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🔍</div>
            <h3>适用范围确定</h3>
            <p>确定线性响应理论的有效范围</p>
            <div class="mathematical-content">
              <h4>参数扫描：</h4>
              <div class="equation-block">
                <p>温度扫描: T₁ &lt; T &lt; T₂</p>
                <p>频率扫描: ω₁ &lt; ω &lt; ω₂</p>
                <p>场强扫描: F₁ &lt; F &lt; F₂</p>
              </div>
              
              <h4>误差分析：</h4>
              <div class="equation-block">
                <p>δχ/χ &lt; 5% (可接受误差)</p>
                <p>统计误差vs系统误差</p>
                <p>重现性检验</p>
              </div>
              
              <h4>理论对比：</h4>
              <div class="equation-block">
                <p>与已知理论结果比较</p>
                <p>极限情况检验</p>
                <p>标度律验证</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>扩展理论与修正方法</h2>
        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔄</div>
            <h3>非线性响应理论</h3>
            <p>超越线性近似的理论框架</p>
            <div class="mathematical-content">
              <h4>高阶响应函数：</h4>
              <div class="equation-block">
                <p>χ⁽ⁿ⁾(ω₁,...,ωₙ) = ∫...∫ χ⁽ⁿ⁾(t₁,...,tₙ)e^(i∑ωᵢtᵢ) dt₁...dtₙ</p>
                <p>n阶非线性极化率</p>
              </div>
              
              <h4>Volterra级数：</h4>
              <div class="equation-block">
                <p>R(t) = ∫ h₁(τ)F(t-τ)dτ + ∫∫ h₂(τ₁,τ₂)F(t-τ₁)F(t-τ₂)dτ₁dτ₂ + ...</p>
                <p>非线性系统的一般描述</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🌊</div>
            <h3>涨落理论</h3>
            <p>包含涨落效应的修正理论</p>
            <div class="mathematical-content">
              <h4>涨落-耗散定理：</h4>
              <div class="equation-block">
                <p>⟨A(t)A(0)⟩ = (2kᵦT/ω)Im χ(ω)</p>
                <p>平衡涨落与响应的关系</p>
              </div>
              
              <h4>Langevin方程：</h4>
              <div class="equation-block">
                <p>dx/dt = -γx + F(t) + η(t)</p>
                <p>η(t): 随机力</p>
                <p>⟨η(t)η(t')⟩ = 2γkᵦTδ(t-t')</p>
              </div>
            </div>
          </div>

          <div class="concept-card">
            <div class="concept-icon">🎯</div>
            <h3>重整化群方法</h3>
            <p>处理临界现象的系统方法</p>
            <div class="mathematical-content">
              <h4>标度变换：</h4>
              <div class="equation-block">
                <p>χ(t,h) = b^(γ/ν)χ(b^(1/ν)t, b^(βδ/ν)h)</p>
                <p>t = (T-Tc)/Tc, h: 外场</p>
                <p>b: 标度因子</p>
              </div>
              
              <h4>β函数：</h4>
              <div class="equation-block">
                <p>β(g) = μ∂g/∂μ</p>
                <p>耦合常数的流动</p>
                <p>不动点分析</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>学习要点总结</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>🎯 适用条件</h3>
            <ul>
              <li>微扰强度足够小</li>
              <li>存在明确平衡态</li>
              <li>绝热或准静态过程</li>
              <li>远离相变点</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>⚠️ 失效机制</h3>
            <ul>
              <li>强场非线性效应</li>
              <li>相变临界涨落</li>
              <li>量子相干效应</li>
              <li>记忆与滞后现象</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🔬 实验验证</h3>
            <ul>
              <li>线性性检验</li>
              <li>对称性验证</li>
              <li>频率依赖性</li>
              <li>参数范围确定</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>🚀 扩展方法</h3>
            <ul>
              <li>非线性响应理论</li>
              <li>涨落-耗散关系</li>
              <li>重整化群方法</li>
              <li>数值模拟技术</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="content-section">
        <h2>Kubo公式与适用判据</h2>
        <div class="summary-grid">
          <div class="summary-card">
            <h3>Kubo公式要点</h3>
            <ul>
              <li>线性响应：<code>⟨A(t)⟩ = ⟨A⟩_0 + \int dt' χ_{AB}(t-t') f_B(t')</code></li>
              <li>响应函数：<code>χ_{AB}(t) = -\frac{i}{ℏ} θ(t) ⟨[A(t), B(0)]⟩</code></li>
              <li>电导示例：<code>σ(ω) = \frac{1}{iω} χ^R_{JJ}(ω)</code>（去除直流Drude项的处理）</li>
              <li>频域计算更便于与实验比较与求和规则应用</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>适用与判据</h3>
            <ul>
              <li>外场幅度足够小，系统处于近平衡</li>
              <li>响应线性区域：输出与输入成正比</li>
              <li>时间尺度分离：驱动慢于弛豫过程</li>
              <li>远离临界点，涨落不支配动力学</li>
            </ul>
          </div>

          <div class="summary-card">
            <h3>解析性质与守恒</h3>
            <ul>
              <li>Kramers-Kronig：实部与虚部通过因果性相联系</li>
              <li>f-sum规则：<code>\int_0^∞ dω Re[σ(ω)]</code> 与载流子密度相关</li>
              <li>Ward恒等式：守恒律约束响应函数结构</li>
              <li>选择则决定可观测的跃迁与模式</li>
            </ul>
          </div>
        </div>

        <div class="concept-grid">
          <div class="concept-card">
            <div class="concept-icon">🔌</div>
            <h3>电导率例子</h3>
            <p>用电流-电流关联函数计算 <code>σ(ω)</code>，低频极限给出直流电导，峰值反映集体激发。</p>
            <pre><code>σ(ω) = \frac{1}{iω} [χ^R_{JJ}(ω) + i D \;δ(ω)]</code></pre>
          </div>
          <div class="concept-card">
            <div class="concept-icon">🧪</div>
            <h3>实验验证</h3>
            <p>对比光学吸收、输运测量与磁响应，检验线性区与解析结构的一致性。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter2_6',
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  background: #f8faff;
  border-radius: 1rem;
  border-left: 4px solid #667eea;
}

.introduction h2 {
  color: #4c51bf;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.lead-text {
  font-size: 1.1rem;
  color: #4c51bf;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
}

.content-section h2 {
  font-size: 2rem;
  color: #4c51bf;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #c3dafe;
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
  border: 1px solid #e2e8f0;
  transition: transform 0.2s, box-shadow 0.2s;
}

.concept-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
}

.concept-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.concept-card h3 {
  color: #4c51bf;
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
  color: #4c51bf;
  margin: 0 0 1rem 0;
  font-size: 1rem;
}

.equation-block {
  background: white;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: 1rem 0;
  border-left: 3px solid #667eea;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.equation-block p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  color: #4c51bf;
  font-size: 0.95rem;
}

.equation-block strong {
  color: #3730a3;
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
  color: #667eea;
  font-weight: bold;
}.modern-developments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.development-category {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.development-category h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.development-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.development-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.development-item h4 {
  color: #ffd700;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.frontier-research-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
}

.research-category {
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  border-radius: 15px;
  padding: 2rem;
  color: white;
}

.research-category h3 {
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.research-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.research-item {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 1rem;
  backdrop-filter: blur(10px);
}

.research-item h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.research-item p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
}

.summary {
  background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%);
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
  gap: 1.5rem;
}

.point-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 10px;
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

.point-content {
  flex: 1;
}

.point-content h4 {
  color: #ffd700;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.point-content p {
  margin: 0;
  line-height: 1.5;
}.application-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  transition: transform 0.2s;
}

.application-card:hover {
  transform: translateY(-2px);
}

.application-card h3 {
  color: #4c51bf;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.application-content h4 {
  color: #475569;
  margin: 1rem 0 0.5rem 0;
  font-size: 1rem;
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
  color: #667eea;
  font-weight: bold;
}

.summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.summary-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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