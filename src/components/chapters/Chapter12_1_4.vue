<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">12.1.4 原子链的量子化</h1>
      <p class="chapter-subtitle">Quantization of Atomic Chain</p>
    </div>

    <div class="content-section">
      <h2>引言</h2>
      <p>
        原子链的量子化是将经典晶格动力学转化为量子场论的关键步骤。
        这一过程不仅建立了声子的概念，更为理解固体中的集体激发提供了理论框架。
        量子化过程涉及正则量子化、路径积分量子化等多种方法，
        每种方法都揭示了晶格振动的不同侧面。
        本节将系统地介绍原子链量子化的各种方法，
        探讨量子化过程中的数学技巧和物理洞察，
        并分析量子化后系统的基本性质和物理意义。
        理解量子化过程对于掌握固体物理中的多体理论和场论方法具有重要意义。
      </p>
    </div>

    <div class="content-section">
      <h2>正则量子化方法</h2>
      
      <h3>经典哈密顿形式</h3>
      <div class="formula-box">
        <p><strong>经典哈密顿量：</strong></p>
        <p>H = Σₙ [pₙ²/(2m) + ½K(uₙ₊₁ - uₙ)²]</p>
        <p><strong>哈密顿方程：</strong></p>
        <p>duₙ/dt = ∂H/∂pₙ = pₙ/m</p>
        <p>dpₙ/dt = -∂H/∂uₙ = K(uₙ₊₁ + uₙ₋₁ - 2uₙ)</p>
        <p><strong>泊松括号：</strong></p>
        <p>{uₙ, pₘ} = δₙₘ</p>
        <p>{uₙ, uₘ} = {pₙ, pₘ} = 0</p>
      </div>

      <div class="concept-box">
        <h4>经典力学的基础</h4>
        <ul>
          <li><strong>哈密顿形式：</strong>用广义坐标和动量描述</li>
          <li><strong>正则变量：</strong>位置和动量作为正则共轭变量</li>
          <li><strong>泊松括号：</strong>经典力学中的基本运算</li>
          <li><strong>相空间：</strong>2N维相空间中的动力学</li>
        </ul>
      </div>

      <h3>量子化规则</h3>
      <div class="formula-box">
        <p><strong>正则对易关系：</strong></p>
        <p>[ûₙ, p̂ₘ] = iℏδₙₘ</p>
        <p>[ûₙ, ûₘ] = [p̂ₙ, p̂ₘ] = 0</p>
        <p><strong>对应原理：</strong></p>
        <p>{A, B} → (1/iℏ)[Â, B̂]</p>
        <p><strong>量子哈密顿量：</strong></p>
        <p>Ĥ = Σₙ [p̂ₙ²/(2m) + ½K(ûₙ₊₁ - ûₙ)²]</p>
        <p><strong>薛定谔方程：</strong></p>
        <p>iℏ ∂|ψ⟩/∂t = Ĥ|ψ⟩</p>
      </div>

      <div class="theory-box">
        <h4>量子化的基本原理</h4>
        <ul>
          <li><strong>对应原理：</strong>经典泊松括号到量子对易子</li>
          <li><strong>正则量子化：</strong>标准的量子化程序</li>
          <li><strong>厄米性：</strong>物理量对应厄米算符</li>
          <li><strong>不确定性：</strong>量子力学的基本特征</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>正规模式的量子化</h2>
      
      <h3>正规坐标变换</h3>
      <div class="formula-box">
        <p><strong>正规坐标：</strong></p>
        <p>Q̂ₖ = (1/√N) Σₙ ûₙ e^(-ikna)</p>
        <p>P̂ₖ = (1/√N) Σₙ p̂ₙ e^(-ikna)</p>
        <p><strong>逆变换：</strong></p>
        <p>ûₙ = (1/√N) Σₖ Q̂ₖ e^(ikna)</p>
        <p>p̂ₙ = (1/√N) Σₖ P̂ₖ e^(ikna)</p>
        <p><strong>对易关系：</strong></p>
        <p>[Q̂ₖ, P̂ₖ'] = iℏδₖₖ'</p>
        <p>[Q̂ₖ, Q̂ₖ'] = [P̂ₖ, P̂ₖ'] = 0</p>
      </div>

      <div class="concept-box">
        <h4>正规模式的特点</h4>
        <ul>
          <li><strong>模式解耦：</strong>不同k模式相互独立</li>
          <li><strong>傅里叶变换：</strong>实空间到k空间的变换</li>
          <li><strong>对角化：</strong>哈密顿量的对角化</li>
          <li><strong>集体坐标：</strong>描述集体振动模式</li>
        </ul>
      </div>

      <h3>对角化哈密顿量</h3>
      <div class="formula-box">
        <p><strong>k空间哈密顿量：</strong></p>
        <p>Ĥ = Σₖ [P̂ₖ²/(2m) + ½mω²(k)Q̂ₖ²]</p>
        <p><strong>色散关系：</strong></p>
        <p>ω²(k) = (4K/m)sin²(ka/2)</p>
        <p><strong>独立谐振子：</strong></p>
        <p>Ĥₖ = P̂ₖ²/(2m) + ½mω²(k)Q̂ₖ²</p>
        <p><strong>总哈密顿量：</strong></p>
        <p>Ĥ = Σₖ Ĥₖ</p>
      </div>

      <div class="theory-box">
        <h4>对角化的意义</h4>
        <ul>
          <li><strong>问题简化：</strong>多体问题化为单体问题</li>
          <li><strong>能量本征态：</strong>容易求解能量本征态</li>
          <li><strong>统计力学：</strong>便于统计力学处理</li>
          <li><strong>微扰理论：</strong>为微扰理论提供基础</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>升降算符方法</h2>
      
      <h3>升降算符的定义</h3>
      <div class="formula-box">
        <p><strong>湮灭算符：</strong></p>
        <p>âₖ = √(mω(k)/(2ℏ))Q̂ₖ + i√(1/(2ℏmω(k)))P̂ₖ</p>
        <p><strong>产生算符：</strong></p>
        <p>âₖ† = √(mω(k)/(2ℏ))Q̂ₖ - i√(1/(2ℏmω(k)))P̂ₖ</p>
        <p><strong>逆变换：</strong></p>
        <p>Q̂ₖ = √(ℏ/(2mω(k)))(âₖ + âₖ†)</p>
        <p>P̂ₖ = i√(ℏmω(k)/2)(âₖ† - âₖ)</p>
      </div>

      <div class="concept-box">
        <h4>升降算符的性质</h4>
        <ul>
          <li><strong>非厄米：</strong>âₖ和âₖ†互为厄米共轭</li>
          <li><strong>玻色统计：</strong>满足玻色子对易关系</li>
          <li><strong>粒子数：</strong>改变系统的粒子数</li>
          <li><strong>能量阶梯：</strong>在能量本征态间跃迁</li>
        </ul>
      </div>

      <h3>对易关系</h3>
      <div class="formula-box">
        <p><strong>玻色对易关系：</strong></p>
        <p>[âₖ, âₖ'†] = δₖₖ'</p>
        <p>[âₖ, âₖ'] = [âₖ†, âₖ'†] = 0</p>
        <p><strong>粒子数算符：</strong></p>
        <p>n̂ₖ = âₖ†âₖ</p>
        <p><strong>粒子数对易关系：</strong></p>
        <p>[n̂ₖ, âₖ'†] = δₖₖ'âₖ†</p>
        <p>[n̂ₖ, âₖ'] = -δₖₖ'âₖ</p>
      </div>

      <div class="theory-box">
        <h4>对易关系的意义</h4>
        <ul>
          <li><strong>玻色统计：</strong>声子服从玻色-爱因斯坦统计</li>
          <li><strong>粒子数变化：</strong>升降算符改变粒子数</li>
          <li><strong>量子统计：</strong>多粒子态的构造</li>
          <li><strong>场量子化：</strong>场的二次量子化</li>
        </ul>
      </div>

      <h3>声子哈密顿量</h3>
      <div class="formula-box">
        <p><strong>声子表示：</strong></p>
        <p>Ĥ = Σₖ ℏω(k)(âₖ†âₖ + ½)</p>
        <p><strong>能量本征值：</strong></p>
        <p>E = Σₖ ℏω(k)(nₖ + ½)</p>
        <p><strong>基态能量：</strong></p>
        <p>E₀ = Σₖ ½ℏω(k)</p>
        <p><strong>激发态能量：</strong></p>
        <p>E = E₀ + Σₖ nₖℏω(k)</p>
      </div>

      <div class="theory-box">
        <h4>声子图像的建立</h4>
        <ul>
          <li><strong>准粒子：</strong>声子作为集体激发的准粒子</li>
          <li><strong>零点能：</strong>量子涨落导致的零点能</li>
          <li><strong>激发谱：</strong>离散的能量激发谱</li>
          <li><strong>多体态：</strong>多声子态的构造</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>Fock空间表示</h2>
      
      <h3>Fock态的构造</h3>
      <div class="formula-box">
        <p><strong>真空态：</strong></p>
        <p>âₖ|0⟩ = 0, ∀k</p>
        <p><strong>单粒子态：</strong></p>
        <p>|1ₖ⟩ = âₖ†|0⟩</p>
        <p><strong>多粒子态：</strong></p>
        <p>|nₖ⟩ = (âₖ†)^nₖ/√(nₖ!)|0⟩</p>
        <p><strong>一般Fock态：</strong></p>
        <p>|{nₖ}⟩ = ∏ₖ |nₖ⟩</p>
      </div>

      <div class="concept-box">
        <h4>Fock态的性质</h4>
        <ul>
          <li><strong>粒子数确定：</strong>每个模式的粒子数确定</li>
          <li><strong>正交归一：</strong>不同态之间正交</li>
          <li><strong>完备性：</strong>构成完备的希尔伯特空间</li>
          <li><strong>可数无穷：</strong>无限维的态空间</li>
        </ul>
      </div>

      <h3>算符的作用</h3>
      <div class="formula-box">
        <p><strong>产生算符作用：</strong></p>
        <p>âₖ†|nₖ⟩ = √(nₖ+1)|nₖ+1⟩</p>
        <p><strong>湮灭算符作用：</strong></p>
        <p>âₖ|nₖ⟩ = √nₖ|nₖ-1⟩</p>
        <p><strong>粒子数算符：</strong></p>
        <p>n̂ₖ|nₖ⟩ = nₖ|nₖ⟩</p>
        <p><strong>哈密顿量作用：</strong></p>
        <p>Ĥ|{nₖ}⟩ = [Σₖ ℏω(k)(nₖ + ½)]|{nₖ}⟩</p>
      </div>

      <div class="theory-box">
        <h4>算符作用的规律</h4>
        <ul>
          <li><strong>粒子数变化：</strong>升降算符改变粒子数</li>
          <li><strong>相位因子：</strong>√n因子的量子统计意义</li>
          <li><strong>能量本征态：</strong>Fock态是能量本征态</li>
          <li><strong>态的演化：</strong>时间演化的简单形式</li>
        </ul>
      </div>

      <h3>场算符</h3>
      <div class="formula-box">
        <p><strong>位移场算符：</strong></p>
        <p>û(x,t) = Σₖ √(ℏ/(2Nmω(k)))(âₖe^(i(kx-ω(k)t)) + âₖ†e^(-i(kx-ω(k)t)))</p>
        <p><strong>动量场算符：</strong></p>
        <p>π̂(x,t) = iΣₖ √(ℏmω(k)/(2N))(âₖ†e^(-i(kx-ω(k)t)) - âₖe^(i(kx-ω(k)t)))</p>
        <p><strong>场对易关系：</strong></p>
        <p>[û(x,t), π̂(x',t)] = iℏδ(x-x')</p>
      </div>

      <div class="theory-box">
        <h4>场算符的意义</h4>
        <ul>
          <li><strong>连续化：</strong>从离散到连续的过渡</li>
          <li><strong>局域性：</strong>场的局域对易关系</li>
          <li><strong>因果性：</strong>类空间隔处的对易性</li>
          <li><strong>场论基础：</strong>量子场论的基本框架</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>路径积分量子化</h2>
      
      <h3>路径积分的基本思想</h3>
      <div class="formula-box">
        <p><strong>传播子：</strong></p>
        <p>K(u_f,t_f;u_i,t_i) = ⟨u_f|e^(-iĤ(t_f-t_i)/ℏ)|u_i⟩</p>
        <p><strong>路径积分表示：</strong></p>
        <p>K = ∫ D[u(t)] e^(iS[u]/ℏ)</p>
        <p><strong>作用量：</strong></p>
        <p>S[u] = ∫ dt L[u,u̇]</p>
        <p><strong>拉格朗日量：</strong></p>
        <p>L = Σₙ [½m(duₙ/dt)² - ½K(uₙ₊₁-uₙ)²]</p>
      </div>

      <div class="concept-box">
        <h4>路径积分的特点</h4>
        <ul>
          <li><strong>所有路径：</strong>对所有可能路径求和</li>
          <li><strong>经典极限：</strong>驻相近似给出经典轨道</li>
          <li><strong>量子涨落：</strong>包含所有量子涨落效应</li>
          <li><strong>规范不变：</strong>保持规范对称性</li>
        </ul>
      </div>

      <h3>高斯积分</h3>
      <div class="formula-box">
        <p><strong>二次型作用量：</strong></p>
        <p>S = ½∫ dt u̇² - ½∫ dt dt' u(t)K(t,t')u(t')</p>
        <p><strong>高斯积分公式：</strong></p>
        <p>∫ D[u] e^(iS/ℏ) = (det K)^(-1/2)</p>
        <p><strong>配分函数：</strong></p>
        <p>Z = Tr[e^(-βĤ)] = ∫ D[u] e^(-S_E/ℏ)</p>
        <p><strong>欧几里得作用量：</strong></p>
        <p>S_E = ∫₀^β dτ [½m(∂u/∂τ)² + ½K(uₙ₊₁-uₙ)²]</p>
      </div>

      <div class="theory-box">
        <h4>高斯积分的应用</h4>
        <ul>
          <li><strong>精确求解：</strong>二次型理论的精确解</li>
          <li><strong>统计力学：</strong>热力学量的计算</li>
          <li><strong>关联函数：</strong>各种关联函数的计算</li>
          <li><strong>微扰基础：</strong>微扰理论的起点</li>
        </ul>
      </div>

      <h3>连续极限</h3>
      <div class="formula-box">
        <p><strong>连续化条件：</strong></p>
        <p>a → 0, N → ∞, L = Na 固定</p>
        <p><strong>连续场：</strong></p>
        <p>u(x,t) = lim_{a→0} uₙ(t)</p>
        <p><strong>连续拉格朗日量：</strong></p>
        <p>L = ∫ dx [½ρ(∂u/∂t)² - ½E(∂u/∂x)²]</p>
        <p><strong>波动方程：</strong></p>
        <p>∂²u/∂t² = (E/ρ)∂²u/∂x²</p>
      </div>

      <div class="theory-box">
        <h4>连续极限的意义</h4>
        <ul>
          <li><strong>场论过渡：</strong>从粒子到场的过渡</li>
          <li><strong>宏观理论：</strong>连接微观和宏观理论</li>
          <li><strong>重整化：</strong>为重整化理论提供基础</li>
          <li><strong>临界现象：</strong>研究临界现象的工具</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>量子化的物理后果</h2>
      
      <h3>零点振动</h3>
      <div class="formula-box">
        <p><strong>基态能量：</strong></p>
        <p>E₀ = Σₖ ½ℏω(k)</p>
        <p><strong>零点位移涨落：</strong></p>
        <p>⟨0|uₙ²|0⟩ = (ℏ/2Nm)Σₖ 1/ω(k)</p>
        <p><strong>零点动量涨落：</strong></p>
        <p>⟨0|pₙ²|0⟩ = (ℏm/2N)Σₖ ω(k)</p>
        <p><strong>不确定性关系：</strong></p>
        <p>Δuₙ · Δpₙ = ℏ/2</p>
      </div>

      <div class="concept-box">
        <h4>零点振动的特征</h4>
        <ul>
          <li><strong>量子效应：</strong>纯粹的量子力学效应</li>
          <li><strong>温度无关：</strong>即使在T=0也存在</li>
          <li><strong>同位素效应：</strong>与原子质量相关</li>
          <li><strong>结构影响：</strong>对晶体结构的影响</li>
        </ul>
      </div>

      <h3>量子统计</h3>
      <div class="formula-box">
        <p><strong>玻色分布：</strong></p>
        <p>⟨nₖ⟩ = 1/(e^(βℏω(k)) - 1)</p>
        <p><strong>平均能量：</strong></p>
        <p>⟨E⟩ = Σₖ ℏω(k)[⟨nₖ⟩ + ½]</p>
        <p><strong>比热：</strong></p>
        <p>C = ∂⟨E⟩/∂T = Σₖ kB(βℏω(k))²e^(βℏω(k))/(e^(βℏω(k))-1)²</p>
        <p><strong>熵：</strong></p>
        <p>S = Σₖ kB[(1+⟨nₖ⟩)ln(1+⟨nₖ⟩) - ⟨nₖ⟩ln⟨nₖ⟩]</p>
      </div>

      <div class="theory-box">
        <h4>量子统计的特点</h4>
        <ul>
          <li><strong>玻色统计：</strong>声子服从玻色-爱因斯坦统计</li>
          <li><strong>温度效应：</strong>热激发的温度依赖性</li>
          <li><strong>经典极限：</strong>高温下的经典行为</li>
          <li><strong>量子简并：</strong>低温下的量子简并效应</li>
        </ul>
      </div>

      <h3>关联函数</h3>
      <div class="formula-box">
        <p><strong>位置关联函数：</strong></p>
        <p>G(n,m;t) = ⟨uₙ(t)uₘ(0)⟩</p>
        <p><strong>动力学结构因子：</strong></p>
        <p>S(k,ω) = ∫ dt e^(iωt)⟨uₖ(t)u₋ₖ(0)⟩</p>
        <p><strong>格林函数：</strong></p>
        <p>G(k,ω) = ⟨⟨uₖ;u₋ₖ⟩⟩_ω</p>
        <p><strong>谱函数：</strong></p>
        <p>A(k,ω) = -2Im G(k,ω)</p>
      </div>

      <div class="theory-box">
        <h4>关联函数的应用</h4>
        <ul>
          <li><strong>实验对比：</strong>与散射实验的直接对比</li>
          <li><strong>输运性质：</strong>计算输运系数</li>
          <li><strong>相变研究：</strong>研究相变和临界现象</li>
          <li><strong>多体效应：</strong>包含多体相互作用效应</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>高级量子化技术</h2>
      
      <h3>相干态量子化</h3>
      <div class="application-box">
        <h4>相干态方法</h4>
        <ul>
          <li><strong>相干态路径积分：</strong>使用相干态的路径积分</li>
          <li><strong>半经典近似：</strong>大N极限下的半经典处理</li>
          <li><strong>Berry相位：</strong>绝热演化中的几何相位</li>
          <li><strong>量子-经典对应：</strong>经典极限的系统研究</li>
        </ul>
      </div>

      <h3>约束系统量子化</h3>
      <div class="application-box">
        <h4>Dirac约束量子化</h4>
        <ul>
          <li><strong>第一类约束：</strong>规范约束的处理</li>
          <li><strong>第二类约束：</strong>物理约束的量子化</li>
          <li><strong>Dirac括号：</strong>约束系统中的对易关系</li>
          <li><strong>规范固定：</strong>规范自由度的固定</li>
        </ul>
      </div>

      <h3>拓扑量子化</h3>
      <div class="application-box">
        <h4>拓扑效应</h4>
        <ul>
          <li><strong>Aharonov-Bohm效应：</strong>拓扑相位的量子效应</li>
          <li><strong>Berry连接：</strong>参数空间中的几何结构</li>
          <li><strong>Chern数：</strong>拓扑不变量的计算</li>
          <li><strong>拓扑相变：</strong>拓扑性质的突变</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>数值方法与计算</h2>
      
      <h3>精确对角化</h3>
      <div class="experiment-box">
        <h4>小系统的精确解</h4>
        <ul>
          <li><strong>哈密顿量矩阵：</strong>有限系统的矩阵表示</li>
          <li><strong>本征值问题：</strong>数值求解本征值和本征态</li>
          <li><strong>基态性质：</strong>基态能量和波函数</li>
          <li><strong>激发谱：</strong>低能激发态的计算</li>
        </ul>
      </div>

      <h3>量子蒙特卡罗</h3>
      <div class="experiment-box">
        <h4>大系统的统计模拟</h4>
        <ul>
          <li><strong>路径积分蒙特卡罗：</strong>基于路径积分的模拟</li>
          <li><strong>世界线算法：</strong>连续时间量子蒙特卡罗</li>
          <li><strong>符号问题：</strong>费米子系统的符号问题</li>
          <li><strong>有限温度：</strong>有限温度性质的计算</li>
        </ul>
      </div>

      <h3>密度矩阵重整化群</h3>
      <div class="experiment-box">
        <h4>一维强关联系统</h4>
        <ul>
          <li><strong>DMRG算法：</strong>一维系统的精确方法</li>
          <li><strong>纠缠谱：</strong>量子纠缠的表征</li>
          <li><strong>矩阵乘积态：</strong>高效的波函数表示</li>
          <li><strong>时间演化：</strong>实时动力学的模拟</li>
        </ul>
      </div>
    </div>

    <div class="content-section">
      <h2>总结</h2>
      <div class="summary-box">
        <p>
          原子链的量子化是从经典力学向量子力学过渡的关键步骤，
          建立了声子作为集体激发准粒子的概念。
          正则量子化方法通过对易关系的建立，
          将经典的晶格振动转化为量子谐振子的集合。
          正规模式的引入实现了哈密顿量的对角化，
          使得复杂的多体问题简化为独立的单体问题。
          升降算符方法建立了Fock空间表示，
          为多粒子态的构造和操作提供了有力工具。
          路径积分量子化提供了另一种量子化途径，
          特别适合处理强关联和非线性效应。
          量子化的物理后果包括零点振动、量子统计和各种关联函数，
          这些都是理解固体量子性质的基础。
          现代的高级量子化技术如相干态方法、约束系统量子化等，
          为处理更复杂的物理问题提供了新的工具。
          数值方法的发展使得理论预测能够与实验结果进行精确对比，
          推动了凝聚态物理理论的不断发展。
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 组件逻辑
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.chapter-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid #2c5aa0;
}

.chapter-title {
  font-size: 2.5rem;
  color: #2c5aa0;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.chapter-subtitle {
  font-size: 1.2rem;
  color: #666;
  font-style: italic;
}

.content-section {
  margin-bottom: 2rem;
}

.content-section h2 {
  color: #2c5aa0;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e1ecf4;
}

.content-section h3 {
  color: #34495e;
  font-size: 1.4rem;
  margin: 1.5rem 0 1rem 0;
}

.content-section h4 {
  color: #2c3e50;
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem 0;
}

.content-section p {
  margin-bottom: 1rem;
  text-align: justify;
}

.formula-box {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.formula-box p {
  margin: 0.5rem 0;
  font-family: 'Courier New', monospace;
  font-size: 1.1rem;
}

.concept-box {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(240, 147, 251, 0.4);
}

.theory-box {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
}

.experiment-box {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(67, 233, 123, 0.4);
}

.application-box {
  background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin: 1rem 0;
  box-shadow: 0 4px 15px rgba(250, 112, 154, 0.4);
}

.summary-box {
  background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
  color: #2c3e50;
  padding: 2rem;
  border-radius: 15px;
  margin: 2rem 0;
  box-shadow: 0 8px 25px rgba(168, 237, 234, 0.4);
  border-left: 5px solid #2c5aa0;
}

.concept-box ul,
.theory-box ul,
.experiment-box ul,
.application-box ul {
  list-style-type: none;
  padding-left: 0;
}

.concept-box li,
.theory-box li,
.experiment-box li,
.application-box li {
  margin: 0.8rem 0;
  padding-left: 1.5rem;
  position: relative;
}

.concept-box li::before,
.theory-box li::before,
.experiment-box li::before,
.application-box li::before {
  content: "▶";
  position: absolute;
  left: 0;
  color: rgba(255, 255, 255, 0.8);
}

.content-section ul {
  padding-left: 2rem;
}

.content-section li {
  margin: 0.5rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .chapter-content {
    padding: 15px;
  }
  
  .chapter-title {
    font-size: 2rem;
  }
  
  .content-section h2 {
    font-size: 1.5rem;
  }
  
  .content-section h3 {
    font-size: 1.3rem;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box {
    padding: 1rem;
  }
}

/* 打印样式 */
@media print {
  .chapter-content {
    max-width: none;
    margin: 0;
    padding: 0;
  }
  
  .formula-box,
  .concept-box,
  .theory-box,
  .experiment-box,
  .application-box,
  .summary-box {
    background: #f8f9fa !important;
    color: #333 !important;
    box-shadow: none !important;
    border: 1px solid #ddd;
  }
}
</style>