<template>
  <div class="chapter-content">
    <h1 class="chapter-title">12.1.8 层展的标准量(量子)场</h1>
    
    <div class="content-section">
      <h2>引言</h2>
      <p>
        层展的标准量子场理论是研究多体系统的强有力工具，特别适用于处理强关联电子系统和复杂的相互作用问题。
        在凝聚态物理中，这种方法能够系统地处理电子-声子相互作用、电子-电子相互作用等复杂问题。
      </p>
    </div>

    <div class="content-section">
      <h2>场论基础</h2>
      
      <h3>1. 量子场的基本概念</h3>
      <div class="formula-container">
        <p><strong>场算符的定义：</strong></p>
        <div class="formula">
          ψ(x,t) = ∑ₖ [aₖ uₖ(x)e^(-iωₖt) + bₖ† vₖ(x)e^(iωₖt)]
        </div>
      </div>
      
      <div class="key-points">
        <h4>基本性质：</h4>
        <ul>
          <li><strong>反对易关系：</strong> {ψ(x), ψ†(y)} = δ(x-y)</li>
          <li><strong>时间演化：</strong> ψ(x,t) = e^(iHt)ψ(x,0)e^(-iHt)</li>
          <li><strong>因果性：</strong> [ψ(x,t), ψ†(y,t')] = 0 for |x-y| > c|t-t'|</li>
        </ul>
      </div>

      <h3>2. 相互作用表象</h3>
      <div class="formula-container">
        <p><strong>相互作用表象中的场算符：</strong></p>
        <div class="formula">
          ψᵢ(x,t) = e^(iH₀t)ψ(x)e^(-iH₀t)
        </div>
        <p><strong>时间演化算符：</strong></p>
        <div class="formula">
          U(t,t₀) = T exp[-i∫ₜ₀ᵗ Hᵢ(t')dt']
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>微扰展开理论</h2>
      
      <h3>1. Dyson级数展开</h3>
      <div class="formula-container">
        <p><strong>时间有序指数：</strong></p>
        <div class="formula">
          U(t,t₀) = ∑ₙ₌₀^∞ (-i)ⁿ/n! ∫ₜ₀ᵗ dt₁...∫ₜ₀ᵗ dtₙ T[Hᵢ(t₁)...Hᵢ(tₙ)]
        </div>
      </div>

      <h3>2. Wick定理</h3>
      <div class="theory-box">
        <h4>Wick定理的表述：</h4>
        <p>时间有序乘积可以表示为正规有序乘积和所有可能收缩的和：</p>
        <div class="formula">
          T[ψ(x₁)...ψ(xₙ)] = :ψ(x₁)...ψ(xₙ): + 所有收缩项
        </div>
        <p>其中收缩定义为：</p>
        <div class="formula">
          ψ̄(x)ψ(y) = ⟨0|T[ψ(x)ψ†(y)]|0⟩
        </div>
      </div>

      <h3>3. Feynman图规则</h3>
      <div class="key-points">
        <h4>图形表示规则：</h4>
        <ul>
          <li><strong>传播子：</strong> 用线表示自由粒子的传播</li>
          <li><strong>顶点：</strong> 用点表示相互作用</li>
          <li><strong>外线：</strong> 表示初态和终态粒子</li>
          <li><strong>内线：</strong> 表示虚粒子的传播</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Green函数方法</h2>
      
      <h3>1. 单粒子Green函数</h3>
      <div class="formula-container">
        <p><strong>定义：</strong></p>
        <div class="formula">
          G(x,t;y,t') = -i⟨0|T[ψ(x,t)ψ†(y,t')]|0⟩
        </div>
        <p><strong>Fourier变换：</strong></p>
        <div class="formula">
          G(k,ω) = ∫ d⁴x e^(i(kx-ωt)) G(x,t;0,0)
        </div>
      </div>

      <h3>2. 自能和Dyson方程的详细推导</h3>
      <div class="formula-container">
        <p><strong>自能的物理意义：</strong></p>
        <p>自能Σ(k,ω)描述了粒子在多体环境中由于相互作用而产生的能量和寿命修正。它包含了所有不可约的自能图的贡献。</p>
        
        <p><strong>Dyson方程的推导：</strong></p>
        <div class="formula">
          G(k,ω) = G₀(k,ω) + G₀(k,ω)Σ(k,ω)G(k,ω)
        </div>
        <p>解得：</p>
        <div class="formula">
          G(k,ω) = 1/[G₀⁻¹(k,ω) - Σ(k,ω)] = 1/[ω - ε_k - Σ(k,ω)]
        </div>
        
        <p><strong>自能的微扰展开：</strong></p>
        <div class="formula">
          Σ = Σ⁽¹⁾ + Σ⁽²⁾ + Σ⁽³⁾ + ...
        </div>
        
        <p><strong>一阶自能（Hartree-Fock）：</strong></p>
        <div class="formula">
          Σ_HF(k) = ∑_q V(q)n(k-q) - ∑_q V(q)n(q)δ_{k,k-q}
        </div>
        <p>第一项是Hartree项（直接相互作用），第二项是Fock项（交换相互作用）</p>
        
        <p><strong>二阶自能：</strong></p>
        <div class="formula">
          Σ⁽²⁾(k,ω) = ∑_{q,ν} |V(q)|² G₀(k-q,ω-ν) W₀(q,ν)
        </div>
        <p>其中W₀是裸库仑相互作用的传播子</p>
      </div>

      <h3>2.1 自能的解析性质</h3>
      <div class="theory-box">
        <h4>因果性和解析性：</h4>
        <p><strong>因果性条件：</strong></p>
        <div class="formula">
          Σ(k,t-t') = 0 for t < t'
        </div>
        
        <p><strong>Kramers-Kronig关系：</strong></p>
        <div class="formula">
          Re Σ(k,ω) = P∫_{-∞}^∞ dω' Im Σ(k,ω')/(π(ω'-ω))
        </div>
        <div class="formula">
          Im Σ(k,ω) = -P∫_{-∞}^∞ dω' Re Σ(k,ω')/(π(ω'-ω))
        </div>
        
        <p><strong>高频行为：</strong></p>
        <div class="formula">
          Σ(k,ω) → A/ω + B/ω² + ... (|ω| → ∞)
        </div>
      </div>

      <h3>2.2 准粒子概念</h3>
      <div class="formula-container">
        <p><strong>准粒子能量：</strong></p>
        <p>准粒子极点由以下方程确定：</p>
        <div class="formula">
          ω - ε_k - Σ(k,ω) = 0
        </div>
        
        <p><strong>准粒子权重：</strong></p>
        <div class="formula">
          Z_k = [1 - ∂Σ(k,ω)/∂ω|_{ω=ε_k^qp}]⁻¹
        </div>
        
        <p><strong>准粒子寿命：</strong></p>
        <div class="formula">
          τ_k = ℏ/[2|Im Σ(k,ε_k^qp)|]
        </div>
        
        <p><strong>准粒子近似下的Green函数：</strong></p>
        <div class="formula">
          G(k,ω) ≈ Z_k/(ω - ε_k^qp + iΓ_k) + 非相干背景
        </div>
        <p>其中Γ_k = Im Σ(k,ε_k^qp)是准粒子阻尼</p>
      </div>

      <h3>2.3 自洽求解方法</h3>
      <div class="key-points">
        <h4>自洽循环：</h4>
        <ul>
          <li><strong>初始猜测：</strong> 选择初始的G₀或Σ₀</li>
          <li><strong>计算自能：</strong> 根据选定的近似计算Σ[G]</li>
          <li><strong>更新Green函数：</strong> G_new = [ω - ε_k - Σ]⁻¹</li>
          <li><strong>检查收敛：</strong> |G_new - G_old| < tolerance</li>
          <li><strong>迭代：</strong> 重复直到收敛</li>
        </ul>
        
        <h4>收敛技巧：</h4>
        <ul>
          <li><strong>线性混合：</strong> G_mix = αG_new + (1-α)G_old</li>
          <li><strong>Anderson混合：</strong> 利用历史信息加速收敛</li>
          <li><strong>Broyden方法：</strong> 准牛顿法求解非线性方程</li>
        </ul>
      </div>

      <h3>3. 谱表示的深入分析</h3>
      <div class="theory-box">
        <h4>Lehmann表示的推导：</h4>
        <p>从Green函数的定义出发：</p>
        <div class="formula">
          G(k,ω) = -i∫_{-∞}^∞ dt e^{iωt} ⟨0|T[ψ_k(t)ψ_k†(0)]|0⟩
        </div>
        
        <p>插入完备性关系∑_n |n⟩⟨n| = 1：</p>
        <div class="formula">
          G(k,ω) = ∑_n |⟨n|ψ_k|0⟩|²/(ω - (E_n - E_0) + iη) + ∑_m |⟨0|ψ_k|m⟩|²/(ω + (E_m - E_0) - iη)
        </div>
        
        <p><strong>谱函数的定义：</strong></p>
        <div class="formula">
          A(k,ω) = -1/π Im G(k,ω+iη) = ∑_n |⟨n|ψ_k|0⟩|² δ(ω - (E_n - E_0)) + ∑_m |⟨0|ψ_k|m⟩|² δ(ω + (E_m - E_0))
        </div>
        
        <p><strong>谱函数的物理意义：</strong></p>
        <ul>
          <li>A(k,ω > 0)：添加一个动量为k、能量为ω的粒子的概率密度</li>
          <li>A(k,ω < 0)：移除一个动量为k、能量为|ω|的粒子的概率密度</li>
          <li>积分归一化：∫_{-∞}^∞ A(k,ω) dω = 1</li>
        </ul>
      </div>

      <h3>3.1 谱函数的性质和应用</h3>
      <div class="formula-container">
        <p><strong>谱权重转移：</strong></p>
        <p>在相互作用系统中，谱权重从准粒子峰转移到非相干背景：</p>
        <div class="formula">
          ∫_{ω_qp-Δ}^{ω_qp+Δ} A(k,ω) dω = Z_k < 1
        </div>
        
        <p><strong>动量分布：</strong></p>
        <div class="formula">
          n(k) = ⟨c_k†c_k⟩ = ∫_{-∞}^0 A(k,ω) dω
        </div>
        
        <p><strong>态密度：</strong></p>
        <div class="formula">
          N(ω) = ∑_k A(k,ω)
        </div>
        
        <p><strong>光电子谱强度：</strong></p>
        <div class="formula">
          I(k,ω) ∝ A(k,ω) f(ω) (ARPES实验)
        </div>
        <p>其中f(ω)是费米分布函数</p>
      </div>

      <h3>3.2 不同系统中的谱函数特征</h3>
      <div class="key-points">
        <h4>费米液体：</h4>
        <ul>
          <li><strong>准粒子峰：</strong> 尖锐的δ函数峰，权重Z_k ≈ 1</li>
          <li><strong>非相干背景：</strong> 弱的宽带结构</li>
          <li><strong>费米面：</strong> 清晰定义的费米面</li>
        </ul>
        
        <h4>强关联系统：</h4>
        <ul>
          <li><strong>准粒子峰压制：</strong> Z_k ≪ 1</li>
          <li><strong>Hubbard带：</strong> 上下Hubbard带分离</li>
          <li><strong>Mott绝缘体：</strong> 费米能级处无谱权重</li>
        </ul>
        
        <h4>超导体：</h4>
        <ul>
          <li><strong>相干峰：</strong> 能隙边缘的尖锐峰</li>
          <li><strong>能隙：</strong> |ω| < Δ 区域无谱权重</li>
          <li><strong>BCS-BEC渡越：</strong> 谱函数演化</li>
        </ul>
      </div>

      <h3>3.3 解析延拓和数值方法</h3>
      <div class="theory-box">
        <h4>Padé近似：</h4>
        <p>将Matsubara Green函数解析延拓到实频：</p>
        <div class="formula">
          G(iω_n) ≈ P_L^M(iω_n) = (a_0 + a_1 z + ... + a_L z^L)/(1 + b_1 z + ... + b_M z^M)
        </div>
        
        <h4>最大熵方法：</h4>
        <p>通过最大化熵函数求解谱函数：</p>
        <div class="formula">
          S[A] = -∫ A(ω) ln[A(ω)/D(ω)] dω
        </div>
        <p>约束条件：χ² = ∑_n |G(iω_n) - ∫ A(ω)/(iω_n - ω) dω|² < tolerance</p>
        
        <h4>随机解析延拓：</h4>
        <ul>
          <li><strong>采样方法：</strong> 蒙特卡洛采样谱函数空间</li>
          <li><strong>平均谱函数：</strong> 对所有可能的谱函数求平均</li>
          <li><strong>误差估计：</strong> 自然给出误差棒</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>路径积分方法</h2>
      
      <h3>1. 相干态路径积分</h3>
      <div class="formula-container">
        <p><strong>配分函数：</strong></p>
        <div class="formula">
          Z = ∫ D[ψ*,ψ] exp[-S[ψ*,ψ]/ℏ]
        </div>
        <p><strong>作用量：</strong></p>
        <div class="formula">
          S = ∫₀^β dτ ∫ d³x [ψ*(∂τ + H₀)ψ + Hᵢₙₜ[ψ*,ψ]]
        </div>
      </div>

      <h3>2. 虚时间形式主义</h3>
      <div class="key-points">
        <h4>Matsubara频率：</h4>
        <ul>
          <li><strong>费米子：</strong> ωₙ = (2n+1)π/β</li>
          <li><strong>玻色子：</strong> ωₙ = 2nπ/β</li>
          <li><strong>解析延拓：</strong> iωₙ → ω + iη</li>
        </ul>
      </div>

      <h3>3. 鞍点方法</h3>
      <div class="theory-box">
        <h4>平均场近似：</h4>
        <p>在鞍点附近展开作用量：</p>
        <div class="formula">
          S[ψ] ≈ S[ψ₀] + δS/δψ|ψ₀ (ψ-ψ₀) + 1/2 δ²S/δψ²|ψ₀ (ψ-ψ₀)²
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>重整化群理论</h2>
      
      <h3>1. 标度变换</h3>
      <div class="formula-container">
        <p><strong>标度变换：</strong></p>
        <div class="formula">
          x → x' = x/b, ψ(x) → ψ'(x') = b^(d/2)ψ(bx')
        </div>
        <p><strong>β函数：</strong></p>
        <div class="formula">
          β(g) = b dg/db|fixed physics
        </div>
      </div>

      <h3>2. Wilson重整化群</h3>
      <div class="key-points">
        <h4>重整化程序：</h4>
        <ul>
          <li><strong>积分高能模式：</strong> 消除高能自由度</li>
          <li><strong>重标度：</strong> 恢复原始截断</li>
          <li><strong>重整化：</strong> 调整耦合常数</li>
        </ul>
      </div>

      <h3>3. 临界现象</h3>
      <div class="theory-box">
        <h4>临界指数：</h4>
        <ul>
          <li><strong>关联长度：</strong> ξ ~ |T-Tc|^(-ν)</li>
          <li><strong>比热：</strong> C ~ |T-Tc|^(-α)</li>
          <li><strong>磁化强度：</strong> M ~ |T-Tc|^β</li>
          <li><strong>磁化率：</strong> χ ~ |T-Tc|^(-γ)</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>非平衡场论</h2>
      
      <h3>1. Keldysh形式主义</h3>
      <div class="formula-container">
        <p><strong>Keldysh轮廓：</strong></p>
        <div class="formula">
          G^K(t,t') = -i⟨ψ(t)ψ†(t')⟩
        </div>
        <p><strong>分布函数：</strong></p>
        <div class="formula">
          f(ω) = i/2 [G^K(ω) + G^R(ω) - G^A(ω)]
        </div>
      </div>

      <h3>2. 输运方程</h3>
      <div class="theory-box">
        <h4>Boltzmann方程的量子修正：</h4>
        <div class="formula">
          ∂f/∂t + v·∇f + F·∇ₖf = I[f]
        </div>
        <p>其中碰撞积分包含量子相干效应。</p>
      </div>

      <h3>3. 涨落-耗散定理</h3>
      <div class="formula-container">
        <p><strong>平衡态关系：</strong></p>
        <div class="formula">
          G^K(ω) = [G^R(ω) - G^A(ω)] tanh(βω/2)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>具体应用</h2>
      
      <h3>1. 电子-声子系统</h3>
      <div class="key-points">
        <h4>Holstein模型：</h4>
        <ul>
          <li><strong>哈密顿量：</strong> H = H_el + H_ph + H_ep</li>
          <li><strong>极化子形成：</strong> 强耦合极限的处理</li>
          <li><strong>输运性质：</strong> 迁移率的计算</li>
        </ul>
      </div>

      <h3>2. 强关联电子系统</h3>
      <div class="theory-box">
        <h4>Hubbard模型：</h4>
        <div class="formula">
          H = -t∑⟨i,j⟩,σ (c†ᵢσcⱼσ + h.c.) + U∑ᵢ nᵢ↑nᵢ↓
        </div>
        <p>应用动力学平均场理论(DMFT)求解。</p>
      </div>

      <h3>3. 超导理论</h3>
      <div class="formula-container">
        <p><strong>BCS哈密顿量：</strong></p>
        <div class="formula">
          H = ∑ₖσ εₖc†ₖσcₖσ + ∑ₖ (Δₖc†ₖ↑c†₋ₖ↓ + h.c.)
        </div>
        <p><strong>能隙方程：</strong></p>
        <div class="formula">
          Δₖ = -∑ₖ' Vₖₖ' Δₖ'/2Eₖ' tanh(βEₖ'/2)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>现代计算方法与数值实现</h2>
      
      <h3>1. 高性能计算技术</h3>
      <div class="formula-container">
        <p><strong>并行化策略：</strong></p>
        <ul>
          <li><strong>k点并行：</strong> 不同处理器计算不同k点的Green函数</li>
          <li><strong>频率并行：</strong> 并行计算不同Matsubara频率</li>
          <li><strong>MPI+OpenMP混合：</strong> 节点间和节点内并行</li>
        </ul>
        
        <p><strong>内存优化：</strong></p>
        <div class="formula">
          Memory ≈ N_k × N_ω × N_orb² × 16 bytes (复数双精度)
        </div>
        <ul>
          <li><strong>分块存储：</strong> 避免内存溢出</li>
          <li><strong>对称性利用：</strong> 减少存储需求</li>
          <li><strong>压缩技术：</strong> 稀疏矩阵存储</li>
        </ul>
      </div>

      <h3>2. 机器学习辅助方法</h3>
      <div class="theory-box">
        <h4>神经网络解析延拓：</h4>
        <p>训练神经网络学习Matsubara数据到实频谱函数的映射：</p>
        <div class="formula">
          A(ω) = NN[G(iω_n); θ]
        </div>
        
        <h4>强化学习优化：</h4>
        <ul>
          <li><strong>自洽循环优化：</strong> 智能选择混合参数</li>
          <li><strong>参数搜索：</strong> 自动调节计算参数</li>
          <li><strong>收敛加速：</strong> 预测最优迭代路径</li>
        </ul>
        
        <h4>变分量子本征求解器(VQE)：</h4>
        <div class="formula">
          |ψ(θ)⟩ = U(θ)|0⟩, E(θ) = ⟨ψ(θ)|H|ψ(θ)⟩
        </div>
        <p>结合经典优化和量子计算求解强关联问题</p>
      </div>

      <h3>3. 实际计算流程</h3>
      <div class="key-points">
        <h4>DMFT计算步骤：</h4>
        <ul>
          <li><strong>1. 初始化：</strong> 设置初始自能Σ₀(iω_n)</li>
          <li><strong>2. 计算局域Green函数：</strong> G_loc = ∫ G(k,iω_n) dk</li>
          <li><strong>3. 提取Weiss场：</strong> G₀⁻¹ = G_loc⁻¹ + Σ</li>
          <li><strong>4. 求解杂质问题：</strong> 使用QMC/ED/NRG</li>
          <li><strong>5. 更新自能：</strong> Σ_new = G₀⁻¹ - G_imp⁻¹</li>
          <li><strong>6. 检查收敛：</strong> |Σ_new - Σ_old| < ε</li>
        </ul>
        
        <h4>GW计算要点：</h4>
        <ul>
          <li><strong>屏蔽计算：</strong> W = ε⁻¹v，ε = 1 - vP</li>
          <li><strong>自能积分：</strong> Σ = iGW (卷积积分)</li>
          <li><strong>准粒子方程：</strong> 求解非线性方程组</li>
          <li><strong>解析延拓：</strong> 从虚时间到实频</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>实验技术与理论对比</h2>
      
      <h3>1. 角分辨光电子能谱(ARPES)</h3>
      <div class="formula-container">
        <p><strong>光电子发射强度：</strong></p>
        <div class="formula">
          I(k,ω) = I₀ |M(k,ω)|² A(k,ω) f(ω) R(ω)
        </div>
        <p>其中：</p>
        <ul>
          <li>M(k,ω)：矩阵元，依赖于光子能量和偏振</li>
          <li>A(k,ω)：理论谱函数</li>
          <li>f(ω)：费米-狄拉克分布</li>
          <li>R(ω)：仪器分辨函数</li>
        </ul>
        
        <p><strong>能量和动量分辨率：</strong></p>
        <div class="formula">
          ΔE ≈ 1-10 meV, Δk ≈ 0.01 Å⁻¹
        </div>
      </div>

      <h3>2. 扫描隧道显微镜(STM/STS)</h3>
      <div class="theory-box">
        <h4>隧道电流与局域态密度：</h4>
        <div class="formula">
          I(V) ∝ ∫_{-∞}^{eV} ρ_s(E) ρ_t(E-eV) T(E,V) dE
        </div>
        <p>在低偏压下：</p>
        <div class="formula">
          dI/dV|_{V=0} ∝ ρ_s(E_F) = ∑_k A(k,0)
        </div>
        
        <h4>准粒子干涉(QPI)：</h4>
        <p>通过傅里叶变换STM图像观察散射矢量：</p>
        <div class="formula">
          q_i = k_f - k_i (费米面上的散射)
        </div>
      </div>

      <h3>3. 中子散射</h3>
      <div class="formula-container">
        <p><strong>动力学结构因子：</strong></p>
        <div class="formula">
          S(q,ω) = ∫ dt e^{iωt} ⟨ρ_q(t)ρ_{-q}(0)⟩
        </div>
        
        <p><strong>与Green函数的关系：</strong></p>
        <div class="formula">
          S(q,ω) = -1/π Im χ(q,ω) = -1/π Im ∑_k G(k,ω)G(k+q,ω)
        </div>
        
        <p><strong>磁激发谱：</strong></p>
        <div class="formula">
          S^{mag}(q,ω) ∝ Im χ^{spin}(q,ω)
        </div>
      </div>
    </div>

    <div class="content-section">
      <h2>前沿发展与未来方向</h2>
      
      <h3>1. 量子计算与格林函数</h3>
      <div class="key-points">
        <h4>量子算法：</h4>
        <ul>
          <li><strong>变分量子本征求解器：</strong> 求解基态和激发态</li>
          <li><strong>量子相位估计：</strong> 直接测量本征值</li>
          <li><strong>量子蒙特卡洛：</strong> 避免符号问题</li>
          <li><strong>量子机器学习：</strong> 加速解析延拓</li>
        </ul>
        
        <h4>NISQ时代应用：</h4>
        <ul>
          <li><strong>小分子系统：</strong> H₂, LiH, BeH₂等</li>
          <li><strong>Hubbard模型：</strong> 2×2, 3×3晶格</li>
          <li><strong>混合算法：</strong> 量子-经典协同计算</li>
        </ul>
      </div>

      <h3>2. 人工智能与多体理论</h3>
      <div class="theory-box">
        <h4>深度学习应用：</h4>
        <ul>
          <li><strong>神经网络量子态：</strong> 表示复杂多体波函数</li>
          <li><strong>生成模型：</strong> 学习量子态分布</li>
          <li><strong>强化学习：</strong> 优化计算策略</li>
          <li><strong>图神经网络：</strong> 处理晶格结构</li>
        </ul>
        
        <h4>可解释AI：</h4>
        <div class="formula">
          物理洞察 = f(数据驱动发现, 理论指导, 实验验证)
        </div>
      </div>

      <h3>3. 非平衡与开放系统</h3>
      <div class="formula-container">
        <p><strong>Lindblad主方程：</strong></p>
        <div class="formula">
          dρ/dt = -i[H,ρ] + ∑_k (L_k ρ L_k† - 1/2{L_k†L_k, ρ})
        </div>
        
        <p><strong>非平衡稳态：</strong></p>
        <div class="formula">
          G^<(t,t') = i⟨ψ†(t')ψ(t)⟩_{NESS}
        </div>
        
        <p><strong>量子输运：</strong></p>
        <ul>
          <li><strong>Floquet工程：</strong> 周期驱动系统</li>
          <li><strong>拓扑泵浦：</strong> 绝热输运</li>
          <li><strong>量子热机：</strong> 非平衡热力学</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>现代发展</h2>
      
      <h3>1. 拓扑场论</h3>
      <div class="key-points">
        <h4>拓扑不变量：</h4>
        <ul>
          <li><strong>Chern数：</strong> 量子霍尔效应</li>
          <li><strong>Z₂不变量：</strong> 拓扑绝缘体</li>
          <li><strong>缠绕数：</strong> 拓扑超导体</li>
        </ul>
      </div>

      <h3>2. 机器学习方法</h3>
      <div class="theory-box">
        <h4>神经网络量子态：</h4>
        <p>用神经网络表示多体波函数：</p>
        <div class="formula">
          ψ(s₁,...,sₙ) = exp[∑ᵢ aᵢsᵢ + ∑ᵢⱼ Wᵢⱼsᵢhⱼ + ...]
        </div>
      </div>

      <h3>3. 量子信息视角</h3>
      <div class="key-points">
        <h4>纠缠熵：</h4>
        <ul>
          <li><strong>面积定律：</strong> 基态纠缠的标度</li>
          <li><strong>拓扑纠缠熵：</strong> 拓扑序的特征</li>
          <li><strong>纠缠谱：</strong> 相变的探测</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          层展的标准量子场理论为凝聚态物理提供了统一的理论框架，能够系统地处理多体相互作用问题。
          从微扰论到非微扰方法，从平衡态到非平衡态，这套理论工具不断发展，
          结合现代数值方法和机器学习技术，为理解复杂量子多体系统开辟了新的道路。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-title {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.2em;
  text-align: center;
}

.content-section {
  margin-bottom: 35px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.content-section h2 {
  color: #2980b9;
  border-bottom: 2px solid #3498db;
  padding-bottom: 8px;
  margin-bottom: 20px;
  font-size: 1.5em;
}

.content-section h3 {
  color: #34495e;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.2em;
}

.formula-container {
  background: #ffffff;
  border: 1px solid #bdc3c7;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.05);
}

.formula {
  background: #f1f2f6;
  border-left: 4px solid #3498db;
  padding: 15px 20px;
  margin: 10px 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1em;
  border-radius: 0 5px 5px 0;
  overflow-x: auto;
}

.key-points {
  background: #e8f5e8;
  border: 1px solid #27ae60;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.key-points h4 {
  color: #27ae60;
  margin-bottom: 12px;
  font-size: 1.1em;
}

.key-points ul {
  margin: 0;
  padding-left: 20px;
}

.key-points li {
  margin-bottom: 8px;
  line-height: 1.5;
}

.theory-box {
  background: #fff3cd;
  border: 1px solid #ffc107;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
}

.theory-box h4 {
  color: #856404;
  margin-bottom: 12px;
  font-size: 1.1em;
}

.summary-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 25px;
  border-radius: 10px;
  margin-top: 30px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.summary-box p {
  margin: 0;
  font-size: 1.1em;
  line-height: 1.7;
  text-align: justify;
}

p {
  text-align: justify;
  margin-bottom: 12px;
}

ul, ol {
  padding-left: 25px;
}

li {
  margin-bottom: 6px;
}

strong {
  color: #2c3e50;
  font-weight: 600;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 1.8em;
  }
  
  .content-section {
    padding: 20px;
  }
  
  .formula {
    font-size: 1em;
    padding: 12px 15px;
  }
}
</style>