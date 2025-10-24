<template>
  <div class="chapter-content">
    <h1>15.4.2 量子临界性</h1>
    
    <div class="section">
      <h2>概述</h2>
      <p>
        量子临界性是指量子相变在绝对零度附近的临界行为，
        它是现代凝聚态物理学中最重要的概念之一。
        与经典相变不同，量子相变是由量子涨落驱动的，
        即使在T = 0时也会发生。
        量子临界点（Quantum Critical Point, QCP）
        是参数空间中量子相变发生的特殊点，
        在这些点附近，系统表现出独特的标度行为
        和非费米液体性质。
        量子临界性不仅影响T = 0时的基态性质，
        还会在有限温度下产生深远的影响，
        形成所谓的"量子临界区域"。
        这种现象在高温超导体、重费米子系统、
        量子磁体等多种强关联电子系统中广泛存在，
        是理解这些系统异常性质的关键。
        本节将详细讨论量子临界性的基本概念、
        理论框架、实验表现以及在不同材料中的应用。
      </p>
    </div>

    <div class="section">
      <h2>量子相变的基本概念</h2>
      
      <h3>量子相变与经典相变的区别</h3>
      <p>量子相变的特征：</p>
      <ul>
        <li><strong>驱动机制：</strong>量子涨落 vs 热涨落</li>
        <li><strong>发生温度：</strong>T = 0 vs T > 0</li>
        <li><strong>调节参数：</strong>压力、磁场、掺杂等</li>
        <li><strong>序参量：</strong>基态的对称性破缺</li>
      </ul>
      
      <h3>量子临界点</h3>
      <p>量子临界点的定义：</p>
      <div class="formula">
        H = H₀ + g H₁
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>H₀：</strong>无序相的哈密顿量</li>
        <li><strong>H₁：</strong>有序相的哈密顿量</li>
        <li><strong>g：</strong>调节参数</li>
      </ul>
      
      <p>在g = g_c处发生量子相变。</p>
      
      <h3>量子临界区域</h3>
      <p>有限温度下的影响范围：</p>
      <div class="formula">
        T < T* ∝ |g - g_c|^{νz}
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>ν：</strong>关联长度临界指数</li>
        <li><strong>z：</strong>动力学临界指数</li>
      </ul>
    </div>

    <div class="section">
      <h2>量子临界标度理论</h2>
      
      <h3>标度假设</h3>
      <p>自由能的标度形式：</p>
      <div class="formula">
        F(T, g) = T^{(d+z)/z} f(δ/T^{1/(νz)})
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>d：</strong>空间维度</li>
        <li><strong>δ = g - g_c：</strong>调节参数偏离</li>
        <li><strong>f(x)：</strong>标度函数</li>
      </ul>
      
      <h3>关联长度</h3>
      <p>空间关联长度：</p>
      <div class="formula">
        ξ = |δ|^{-ν}
      </div>
      
      <p>时间关联长度：</p>
      <div class="formula">
        ξ_τ = ξ^z = |δ|^{-νz}
      </div>
      
      <h3>动力学标度</h3>
      <p>频率-温度标度：</p>
      <div class="formula">
        χ(ω, T) = T^{-γ/νz} g(ω/T)
      </div>
      
      <p>其中γ是磁化率临界指数。</p>
    </div>

    <div class="section">
      <h2>量子临界点的分类</h2>
      
      <h3>反铁磁量子临界点</h3>
      <p>反铁磁序的量子相变：</p>
      <div class="formula">
        H = ∑_{⟨i,j⟩} J_{ij} S_i · S_j + g ∑_i S_i^z
      </div>
      
      <p>临界指数：</p>
      <ul>
        <li><strong>z = 1：</strong>相对论性临界点</li>
        <li><strong>z = 2：</strong>非相对论性临界点</li>
        <li><strong>ν = 1/2：</strong>关联长度指数</li>
      </ul>
      
      <h3>铁磁量子临界点</h3>
      <p>铁磁序的量子相变：</p>
      <div class="formula">
        H = -∑_{⟨i,j⟩} J_{ij} S_i · S_j + g ∑_i (S_i^z)²
      </div>
      
      <p>Hertz-Millis理论预测：</p>
      <ul>
        <li><strong>z = 3：</strong>动力学指数</li>
        <li><strong>ν = 1/2：</strong>关联长度指数</li>
      </ul>
      
      <h3>向列量子临界点</h3>
      <p>向列序的量子相变：</p>
      <div class="formula">
        H = ∑_k ε_k c_k† c_k + λ ∑_k (c_{k+Q}† c_k + h.c.)
      </div>
      
      <p>临界指数：</p>
      <ul>
        <li><strong>z = 2：</strong>动力学指数</li>
        <li><strong>ν = 1：</strong>关联长度指数</li>
      </ul>
    </div>

    <div class="section">
      <h2>量子临界行为的实验表现</h2>
      
      <h3>比热</h3>
      <p>电子比热的标度行为：</p>
      <div class="formula">
        C(T)/T = A T^{(d-z)/z} + B ln T
      </div>
      
      <p>在不同维度下：</p>
      <ul>
        <li><strong>d = 2, z = 1：</strong>C/T ∝ T</li>
        <li><strong>d = 3, z = 2：</strong>C/T ∝ T^{1/2}</li>
        <li><strong>d = 2, z = 2：</strong>C/T ∝ ln T</li>
      </ul>
      
      <h3>磁化率</h3>
      <p>磁化率的温度依赖：</p>
      <div class="formula">
        χ(T) = χ₀ T^{-γ/νz} + χ₁
      </div>
      
      <p>在量子临界点：</p>
      <div class="formula">
        χ(T) ∝ T^{-α}
      </div>
      
      <p>其中α = γ/νz。</p>
      
      <h3>电阻率</h3>
      <p>量子临界电阻率：</p>
      <div class="formula">
        ρ(T) = ρ₀ + A T^n
      </div>
      
      <p>指数n取决于散射机制：</p>
      <ul>
        <li><strong>n = 1：</strong>线性电阻率</li>
        <li><strong>n = 3/2：</strong>三维反铁磁涨落</li>
        <li><strong>n = 5/3：</strong>二维反铁磁涨落</li>
      </ul>
    </div>

    <div class="section">
      <h2>Hertz-Millis理论</h2>
      
      <h3>基本框架</h3>
      <p>序参量场的有效作用量：</p>
      <div class="formula">
        S = ∫ d^d r dτ [½(∂_τ φ)² + ½c²(∇φ)² + ½r φ² + u φ⁴]
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>φ：</strong>序参量场</li>
        <li><strong>r ∝ g - g_c：</strong>调节参数</li>
        <li><strong>c：</strong>自旋波速度</li>
        <li><strong>u：</strong>相互作用强度</li>
      </ul>
      
      <h3>重整化群分析</h3>
      <p>β函数：</p>
      <div class="formula">
        β_u = μ ∂u/∂μ = -ε u + b u²
      </div>
      
      <p>其中ε = 4 - d - z。</p>
      
      <h3>临界指数</h3>
      <p>高斯不动点的指数：</p>
      <ul>
        <li><strong>ν = 1/(2-η)：</strong>关联长度指数</li>
        <li><strong>γ = (2-η)ν：</strong>磁化率指数</li>
        <li><strong>β = (d-2+η)ν/2：</strong>序参量指数</li>
      </ul>
    </div>

    <div class="section">
      <h2>费米子系统的量子临界性</h2>
      
      <h3>费米面的不稳定性</h3>
      <p>费米面附近的有效理论：</p>
      <div class="formula">
        H = ∑_k ε_k c_k† c_k + g ∑_{k,k'} c_k† c_{k'} φ_{k-k'}
      </div>
      
      <p>其中φ是玻色子涨落场。</p>
      
      <h3>自能的计算</h3>
      <p>单粒子自能：</p>
      <div class="formula">
        Σ(k, iω_n) = g² ∫ dq dΩ G₀(k-q, iω_n-iΩ) D(q, iΩ)
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>G₀：</strong>裸费米子格林函数</li>
        <li><strong>D：</strong>玻色子传播子</li>
      </ul>
      
      <h3>非费米液体行为</h3>
      <p>准粒子权重的消失：</p>
      <div class="formula">
        Z = [1 - ∂Σ/∂ω|_{ω=0}]^{-1} → 0
      </div>
      
      <p>导致费米液体描述的失效。</p>
    </div>

    <div class="section">
      <h2>量子临界金属</h2>
      
      <h3>热点模型</h3>
      <p>费米面上的特殊点：</p>
      <div class="formula">
        k_{hot} = k_F ± Q/2
      </div>
      
      <p>其中Q是临界涨落的波矢。</p>
      
      <h3>输运性质</h3>
      <p>电导率的计算：</p>
      <div class="formula">
        σ(ω) = ∫ dk v_k² τ_k δ(ε_k - ω)
      </div>
      
      <p>其中τ_k是散射时间。</p>
      
      <h3>光学电导率</h3>
      <p>频率依赖的电导率：</p>
      <div class="formula">
        σ₁(ω) = σ_{dc} + A ω^α
      </div>
      
      <p>指数α取决于临界指数。</p>
    </div>

    <div class="section">
      <h2>实验技术和观测</h2>
      
      <h3>调节参数的控制</h3>
      <p>常用的调节方法：</p>
      <ul>
        <li><strong>化学掺杂：</strong>载流子浓度的改变</li>
        <li><strong>压力调节：</strong>晶格参数的变化</li>
        <li><strong>磁场调节：</strong>塞曼能的引入</li>
        <li><strong>应变调节：</strong>晶格对称性的破缺</li>
      </ul>
      
      <h3>标度塌缩</h3>
      <p>数据的标度分析：</p>
      <div class="formula">
        F(T, δ)/T^α = f(δ/T^{1/νz})
      </div>
      
      <p>通过调整临界指数使数据塌缩到一条曲线。</p>
      
      <h3>有限尺寸标度</h3>
      <p>有限系统中的修正：</p>
      <div class="formula">
        F(T, L) = L^{-α/ν} g(T L^{1/νz})
      </div>
      
      <p>其中L是系统尺寸。</p>
    </div>

    <div class="section">
      <h2>重费米子系统中的量子临界性</h2>
      
      <h3>Kondo晶格模型</h3>
      <p>重费米子系统的有效模型：</p>
      <div class="formula">
        H = ∑_k ε_k c_k† c_k + J_K ∑_i c_i† σ c_i · S_i + J_{RKKY} ∑_{⟨i,j⟩} S_i · S_j
      </div>
      
      <p>其中：</p>
      <ul>
        <li><strong>J_K：</strong>Kondo耦合</li>
        <li><strong>J_{RKKY}：</strong>RKKY相互作用</li>
      </ul>
      
      <h3>Doniach相图</h3>
      <p>竞争的能量标度：</p>
      <ul>
        <li><strong>T_K ∝ exp(-1/J_K ρ)：</strong>Kondo温度</li>
        <li><strong>T_{RKKY} ∝ J_{RKKY}²ρ：</strong>RKKY温度</li>
      </ul>
      
      <p>量子临界点位于T_K ∼ T_{RKKY}。</p>
      
      <h3>实验观测</h3>
      <p>典型的重费米子量子临界材料：</p>
      <ul>
        <li><strong>CeCu₆₋ₓAuₓ：</strong>x ≈ 0.1</li>
        <li><strong>YbRh₂Si₂：</strong>磁场调节</li>
        <li><strong>CeCoIn₅：</strong>压力调节</li>
        <li><strong>β-YbAlB₄：</strong>磁场调节</li>
      </ul>
    </div>

    <div class="section">
      <h2>高温超导体中的量子临界性</h2>
      
      <h3>掺杂相图</h3>
      <p>铜氧化物的相图特征：</p>
      <ul>
        <li><strong>反铁磁绝缘体：</strong>未掺杂区域</li>
        <li><strong>赝能隙相：</strong>欠掺杂区域</li>
        <li><strong>超导相：</strong>中等掺杂区域</li>
        <li><strong>费米液体：</strong>过掺杂区域</li>
      </ul>
      
      <h3>量子临界点的候选</h3>
      <p>可能的量子临界点：</p>
      <ul>
        <li><strong>反铁磁QCP：</strong>x ≈ 0.02-0.05</li>
        <li><strong>赝能隙QCP：</strong>x* ≈ 0.19</li>
        <li><strong>向列QCP：</strong>结构相变点</li>
      </ul>
      
      <h3>异常性质</h3>
      <p>量子临界区域的特征：</p>
      <ul>
        <li><strong>线性电阻率：</strong>ρ ∝ T</li>
        <li><strong>对数比热：</strong>C/T ∝ ln T</li>
        <li><strong>异常磁化率：</strong>χ ∝ T^{-α}</li>
      </ul>
    </div>

    <div class="section">
      <h2>铁基超导体中的量子临界性</h2>
      
      <h3>多轨道效应</h3>
      <p>铁基超导体的特征：</p>
      <ul>
        <li><strong>多费米面：</strong>电子和空穴口袋</li>
        <li><strong>轨道自由度：</strong>d轨道的多重性</li>
        <li><strong>自旋涨落：</strong>条纹型反铁磁序</li>
      </ul>
      
      <h3>向列相变</h3>
      <p>结构相变和电子向列性：</p>
      <div class="formula">
        H_{nem} = λ ∑_k (c_{xz,k}† c_{xz,k} - c_{yz,k}† c_{yz,k})
      </div>
      
      <p>其中λ是向列序参量。</p>
      
      <h3>实验观测</h3>
      <p>铁基超导体中的量子临界行为：</p>
      <ul>
        <li><strong>BaFe₂As₂：</strong>结构QCP</li>
        <li><strong>FeSe：</strong>向列QCP</li>
        <li><strong>LaFeAsO：</strong>磁性QCP</li>
      </ul>
    </div>

    <div class="section">
      <h2>量子自旋液体和量子临界性</h2>
      
      <h3>阻挫磁体</h3>
      <p>几何阻挫导致的量子临界行为：</p>
      <ul>
        <li><strong>三角晶格：</strong>120°反铁磁序</li>
        <li><strong>kagome晶格：</strong>量子自旋液体</li>
        <li><strong>蜂窝晶格：</strong>Kitaev模型</li>
      </ul>
      
      <h3>量子自旋液体的相变</h3>
      <p>自旋液体到有序态的转变：</p>
      <div class="formula">
        H = H_{SL} + g H_{order}
      </div>
      
      <p>其中H_{SL}是自旋液体哈密顿量。</p>
      
      <h3>分数化激发</h3>
      <p>自旋液体中的准粒子：</p>
      <ul>
        <li><strong>spinon：</strong>自旋1/2激发</li>
        <li><strong>vison：</strong>Z₂涡旋激发</li>
        <li><strong>photon：</strong>规范场激发</li>
      </ul>
    </div>

    <div class="section">
      <h2>数值方法</h2>
      
      <h3>量子蒙特卡罗</h3>
      <p>QMC研究量子临界性：</p>
      <ul>
        <li><strong>有限尺寸标度：</strong>临界指数的提取</li>
        <li><strong>温度标度：</strong>量子临界区域的确定</li>
        <li><strong>动力学性质：</strong>解析延拓的挑战</li>
      </ul>
      
      <h3>密度矩阵重整化群</h3>
      <p>DMRG的应用：</p>
      <ul>
        <li><strong>一维系统：</strong>精确的基态性质</li>
        <li><strong>准二维系统：</strong>圆柱几何的处理</li>
        <li><strong>动力学DMRG：</strong>激发谱的计算</li>
      </ul>
      
      <h3>函数重整化群</h3>
      <p>fRG方法：</p>
      <ul>
        <li><strong>流方程：</strong>能量标度的演化</li>
        <li><strong>相图：</strong>相边界的确定</li>
        <li><strong>临界指数：</strong>标度维度的计算</li>
      </ul>
    </div>

    <div class="section">
      <h2>量子临界性的应用</h2>
      
      <h3>材料设计</h3>
      <p>利用量子临界性的材料设计：</p>
      <ul>
        <li><strong>高温超导：</strong>临界涨落增强配对</li>
        <li><strong>热电材料：</strong>增强的热电系数</li>
        <li><strong>磁性材料：</strong>巨磁阻效应</li>
      </ul>
      
      <h3>量子器件</h3>
      <p>量子临界性在器件中的应用：</p>
      <ul>
        <li><strong>量子传感：</strong>临界点的敏感性</li>
        <li><strong>量子开关：</strong>相变的控制</li>
        <li><strong>量子存储：</strong>亚稳态的利用</li>
      </ul>
      
      <h3>量子模拟</h3>
      <p>人工量子系统的实现：</p>
      <ul>
        <li><strong>冷原子：</strong>可调相互作用</li>
        <li><strong>离子阱：</strong>长程相互作用</li>
        <li><strong>超导电路：</strong>人工自旋系统</li>
      </ul>
    </div>

    <div class="section">
      <h2>理论挑战和前沿</h2>
      
      <h3>符号问题</h3>
      <p>费米子量子蒙特卡罗的困难：</p>
      <ul>
        <li><strong>负权重：</strong>统计误差的指数增长</li>
        <li><strong>解决方案：</strong>新算法的发展</li>
        <li><strong>替代方法：</strong>张量网络、机器学习</li>
      </ul>
      
      <h3>非平衡量子临界性</h3>
      <p>驱动系统中的临界行为：</p>
      <ul>
        <li><strong>周期驱动：</strong>Floquet工程</li>
        <li><strong>量子淬火：</strong>动力学相变</li>
        <li><strong>开放系统：</strong>耗散的影响</li>
      </ul>
      
      <h3>机器学习方法</h3>
      <p>AI在量子临界性研究中的应用：</p>
      <ul>
        <li><strong>相识别：</strong>神经网络分类器</li>
        <li><strong>临界指数：</strong>深度学习提取</li>
        <li><strong>波函数：</strong>神经网络变分态</li>
      </ul>
    </div>

    <div class="section">
      <h2>实验前沿</h2>
      
      <h3>超高精度测量</h3>
      <ul>
        <li><strong>量子振荡：</strong>费米面的精确测定</li>
        <li><strong>中子散射：</strong>自旋涨落的直接观测</li>
        <li><strong>共振X射线：</strong>轨道和电荷序的探测</li>
      </ul>
      
      <h3>时间分辨技术</h3>
      <ul>
        <li><strong>泵浦-探测：</strong>超快动力学</li>
        <li><strong>太赫兹谱学：</strong>低能激发的探测</li>
        <li><strong>时间分辨ARPES：</strong>电子结构的演化</li>
      </ul>
      
      <h3>极端条件</h3>
      <ul>
        <li><strong>超高压：</strong>GPa级别的压力</li>
        <li><strong>强磁场：</strong>100T以上的磁场</li>
        <li><strong>超低温：</strong>mK级别的温度</li>
      </ul>
    </div>

    <div class="section">
      <h2>未来发展方向</h2>
      
      <h3>新型量子临界点</h3>
      <ul>
        <li><strong>拓扑相变：</strong>拓扑不变量的改变</li>
        <li><strong>多体局域化：</strong>热化到局域化的转变</li>
        <li><strong>时间晶体：</strong>时间对称性的破缺</li>
      </ul>
      
      <h3>高维量子临界性</h3>
      <ul>
        <li><strong>全息对偶：</strong>AdS/CFT对应</li>
        <li><strong>大N极限：</strong>可解模型的构造</li>
        <li><strong>共形场论：</strong>临界理论的分类</li>
      </ul>
      
      <h3>量子信息视角</h3>
      <ul>
        <li><strong>纠缠熵：</strong>相变的信息论特征</li>
        <li><strong>量子纠错：</strong>拓扑量子计算</li>
        <li><strong>量子复杂度：</strong>多体系统的复杂性</li>
      </ul>
    </div>

    <div class="section">
      <h2>总结</h2>
      <p>
        量子临界性是现代凝聚态物理学中
        最重要和最活跃的研究领域之一，
        它不仅为理解强关联电子系统的异常性质
        提供了统一的理论框架，
        也为发现新的量子物态和开发新型量子器件
        开辟了广阔的前景。
        从重费米子系统到高温超导体，
        从量子磁体到冷原子系统，
        量子临界性的概念和方法
        在各个领域都发挥着重要作用。
        尽管在理论和实验上仍面临诸多挑战，
        如符号问题、非平衡态、多体局域化等，
        但随着新实验技术的发展、
        数值方法的进步和理论框架的完善，
        量子临界性的研究将继续推动
        我们对量子多体系统的深入理解，
        为实现量子技术的突破和应用
        提供重要的科学基础。
        未来，量子临界性与量子信息、
        机器学习、拓扑物理等前沿领域的交叉
        将产生更多令人兴奋的发现和应用。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chapter15_4_2'
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

h1 {
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 10px;
  margin-bottom: 30px;
  font-size: 2.2em;
}

h2 {
  color: #34495e;
  margin-top: 35px;
  margin-bottom: 20px;
  font-size: 1.6em;
  border-left: 4px solid #3498db;
  padding-left: 15px;
}

h3 {
  color: #2c3e50;
  margin-top: 25px;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.section {
  margin-bottom: 35px;
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.formula {
  background: #ffffff;
  border: 1px solid #e1e8ed;
  border-radius: 6px;
  padding: 15px;
  margin: 15px 0;
  font-family: 'Times New Roman', serif;
  font-size: 1.1em;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

ul {
  padding-left: 25px;
}

li {
  margin-bottom: 8px;
}

li strong {
  color: #2980b9;
}

p {
  text-align: justify;
  margin-bottom: 15px;
}

sub, sup {
  font-size: 0.8em;
}
</style>