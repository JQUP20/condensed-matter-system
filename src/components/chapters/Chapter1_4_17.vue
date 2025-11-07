<template>
  <div class="chapter-content">
    <h2>1.4.17 Bose-Hubbard模型 (Bose-Hubbard Model)</h2>
    
    <div class="section">
      <h3>模型概述与历史背景</h3>
      <p>
        Bose-Hubbard模型是描述晶格上相互作用玻色子系统的基础理论模型，由Fisher等人在1989年提出。
        该模型成功预测了超流-绝缘体量子相变，是强关联玻色系统理论的里程碑。
        它不仅在理论上具有重要意义，更在冷原子物理实验中得到了精确实现，成为量子多体物理研究的重要平台。
      </p>
      <p>
        该模型的提出标志着人们玻色系统量子相变理解的重大突破。与经典相变不同，
        量子相变由量子涨落驱动，发生在绝对零度，体现了量子力学的深刻物理内涵。
        Bose-Hubbard模型为理解超导体、超流体、量子磁性等现象提供了统一的理论框架。
      </p>
      <p>
        近年来，随着冷原子技术的发展，Bose-Hubbard模型已成为量子模拟的典型范例，
        为探索新奇量子相、验证理论预言、开发量子技术提供了理想的实验平台。
      </p>
    </div>

    <div class="section">
      <h3>哈密顿量与基本理论</h3>
      <p>标准Bose-Hubbard模型的哈密顿量为：</p>
      <KatexElement 
        formula="H = -t\sum_{\langle i,j \rangle} (b_i^\dagger b_j + b_j^\dagger b_i) + \frac{U}{2}\sum_i n_i(n_i-1) - \mu\sum_i n_i"
        display-mode
      />
      <p>其中各项的物理意义：</p>
      <ul>
        <li><strong>跳跃项：</strong>-t描述玻色子在最近邻格点间的量子隧穿</li>
        <li><strong>相互作用项：</strong>U/2描述同一格点上玻色子间的排斥相互作用</li>
        <li><strong>化学势项：</strong>-μ控制系统的平均粒子数</li>
        <li><strong>b_i†, b_i：</strong>格点i上玻色子的产生和湮灭算符</li>
        <li><strong>n_i = b_i†b_i：</strong>格点i上的粒子数算符</li>
      </ul>

      <h4>模型的物理图像</h4>
      <div class="physics-picture">
        <div class="picture-item">
          <h5>动能与相互作用的竞争</h5>
          <p>Bose-Hubbard模型的核心物理是动能和相互作用能的竞争：</p>
          <ul>
            <li><strong>动能主导（t >> U）：</strong>玻色子倾向于离域化，形成超流态</li>
            <li><strong>相互作用主导（U >> t）：</strong>玻色子倾向于局域化，形成Mott绝缘体</li>
            <li><strong>临界区域（t ~ U）：</strong>发生超流-绝缘体量子相变</li>
          </ul>
        </div>

        <div class="picture-item">
          <h5>量子涨落效应</h5>
          <p>零温下的量子涨落驱动相变：</p>
          <ul>
            <li><strong>数-相不确定关系：</strong>Δn·Δφ ≥ 1/2</li>
            <li><strong>超流态：</strong>相位确定，粒子数涨落</li>
            <li><strong>Mott态：</strong>粒子数确定，相位涨落</li>
          </ul>
        </div>
      </div>

      <h4>扩展Bose-Hubbard模型</h4>
      <div class="extended-models">
        <div class="model-variant">
          <h5>包含最近邻相互作用</h5>
          <KatexElement formula="H = H_{\text{BH}} + V\sum_{\langle i,j \rangle} n_i n_j" />
          <p>V为最近邻排斥相互作用，可导致密度波相</p>
        </div>

        <div class="model-variant">
          <h5>长程跳跃模型</h5>
          <KatexElement formula="H = -\sum_{i,j} t_{ij} (b_i^\dagger b_j + \text{h.c.}) + \frac{U}{2}\sum_i n_i(n_i-1)" />
          <p>考虑长程跳跃效应，t_{ij} ∝ 1/r_{ij}^α</p>
        </div>

        <div class="model-variant">
          <h5>无序Bose-Hubbard模型</h5>
          <KatexElement formula="H = H_{\text{BH}} + \sum_i \epsilon_i n_i" />
          <p>包含随机在位势，描述Anderson局域化</p>
        </div>

        <div class="model-variant">
          <h5>自旋相关Bose-Hubbard模型</h5>
          <KatexElement formula="H = \sum_{\sigma} H_{\text{BH}}^{(\sigma)} + \sum_{i,\sigma\sigma'} U_{\sigma\sigma'} n_{i\sigma} n_{i\sigma'}" />
          <p>考虑多组分玻色子的自旋相关相互作用</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>重要物理参数与标度</h3>
      <div class="parameter-section">
        <div class="parameter-grid">
          <div class="param-card">
            <h4>相互作用强度 U/t</h4>
            <p>决定量子相变的关键参数：</p>
            <ul>
              <li><strong>U/t << 1：</strong>弱相互作用超流态</li>
              <li><strong>U/t ~ 1：</strong>量子临界区域</li>
              <li><strong>U/t >> 1：</strong>强相互作用Mott绝缘体</li>
            </ul>
            <p>临界值：一维情况 (U/t)_c ≈ 3.37</p>
          </div>
          
          <div class="param-card">
            <h4>填充因子 n̄</h4>
            <p>平均每格点粒子数：</p>
            <KatexElement formula="\bar{n} = \frac{1}{N}\sum_i \langle n_i \rangle" />
            <ul>
              <li><strong>整数填充：</strong>n̄ = 1, 2, 3, ...（Mott叶）</li>
              <li><strong>非整数填充：</strong>超流态</li>
              <li><strong>可压缩性：</strong>κ = ∂n̄/∂μ</li>
            </ul>
          </div>
          
          <div class="param-card">
            <h4>序参量</h4>
            <p>超流序参量：</p>
            <KatexElement formula="\Psi = \langle b_i \rangle" />
            <ul>
              <li><strong>超流态：</strong>|Ψ| > 0</li>
              <li><strong>Mott态：</strong>|Ψ| = 0</li>
              <li><strong>超流密度：</strong>ρ_s ∝ |Ψ|²</li>
            </ul>
          </div>

          <div class="param-card">
            <h4>能隙</h4>
            <KatexElement formula="\Delta = \min[\mu(n+1) - \mu(n), \mu(n) - \mu(n-1)]" />
            <p>Mott绝缘体的激发能隙：</p>
            <ul>
              <li>粒子激发：添加一个粒子的能量代价</li>
              <li>空穴激发：移除一个粒子的能量代价</li>
              <li>临界点：Δ → 0</li>
            </ul>
          </div>

          <div class="param-card">
            <h4>关联长度</h4>
            <KatexElement formula="\xi \sim |t/U - (t/U)_c|^{-\nu}" />
            <p>量子临界标度：</p>
            <ul>
              <li>ν：关联长度临界指数</li>
              <li>d+1维XY普适类：ν ≈ 0.67</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>量子相图与相变理论</h3>
      <div class="phase-diagram-section">
        <h4>基本相图结构</h4>
        <div class="phase-regions">
          <div class="phase-card superfluid">
            <h5>超流相 (SF)</h5>
            <p>特征：</p>
            <ul>
              <li><strong>宏观相干：</strong>⟨b_i⟩ ≠ 0</li>
              <li><strong>无能隙：</strong>声子激发</li>
              <li><strong>可压缩：</strong>κ > 0</li>
              <li><strong>超流性：</strong>零阻抗流动</li>
            </ul>
            <p>低能有效理论：非线性薛定谔方程</p>
          </div>
          
          <div class="phase-card mott">
            <h5>Mott绝缘体相 (MI)</h5>
            <p>特征：</p>
            <ul>
              <li><strong>粒子数局域：</strong>⟨b_i⟩ = 0</li>
              <li><strong>有能隙：</strong>Δ > 0</li>
              <li><strong>不可压缩：</strong>κ = 0</li>
              <li><strong>绝缘性：</strong>无粒子流动</li>
            </ul>
            <p>激发：粒子-空穴对</p>
          </div>
        </div>

        <h4>Mott叶结构</h4>
        <div class="mott-lobes">
          <p>相图中的Mott绝缘体区域形成"叶"状结构：</p>
          <ul>
            <li><strong>第n个Mott叶：</strong>对应填充n̄ = n的不可压缩态</li>
            <li><strong>叶尖：</strong>量子临界点，(t/U)_c^{(n)}</li>
            <li><strong>叶间区域：</strong>超流相</li>
          </ul>
          
          <h5>Mott叶的解析结果</h5>
          <p>强耦合极限下的叶边界：</p>
          <KatexElement formula="\frac{\mu}{U} = n - \frac{1}{2} \pm \frac{zt}{U}\sqrt{n(n+1)}" />
          <p>其中z是配位数，±对应上下边界</p>
        </div>

        <h4>量子临界性</h4>
        <div class="quantum-criticality">
          <h5>普适性类别</h5>
          <p>SF-MI转变属于(d+1)维XY普适类：</p>
          <ul>
            <li><strong>动力学临界指数：</strong>z = 1</li>
            <li><strong>关联长度指数：</strong>ν = 1/2 (d=1), 2/3 (d=2), 1/2 (d=3)</li>
            <li><strong>序参量指数：</strong>β = 1/8 (d=1), 1/4 (d=2), 1/3 (d=3)</li>
          </ul>

          <h5>标度函数</h5>
          <p>临界点附近的标度行为：</p>
          <KatexElement formula="\Psi \sim |t/U - (t/U)_c|^\beta" />
          <KatexElement formula="\xi \sim |t/U - (t/U)_c|^{-\nu}" />
          <KatexElement formula="\chi \sim |t/U - (t/U)_c|^{-\gamma}" />
        </div>

        <h4>有限温度相图</h4>
        <div class="finite-temperature">
          <h5>Kosterlitz-Thouless转变</h5>
          <p>二维系统中的拓扑相变：</p>
          <ul>
            <li><strong>BKT温度：</strong>T_BKT ∝ ρ_s(0)</li>
            <li><strong>涡旋-反涡旋对：</strong>拓扑激发</li>
            <li><strong>代数关联衰减：</strong>T < T_BKT</li>
          </ul>

          <h5>三维经典相变</h5>
          <ul>
            <li><strong>λ转变：</strong>连续相变</li>
            <li><strong>临界温度：</strong>T_c ∝ t²/U</li>
            <li><strong>3D XY普适类：</strong>ν ≈ 0.67</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论方法与近似</h3>
      <div class="theoretical-methods">
        <h4>平均场理论</h4>
        <div class="mean-field-methods">
          <div class="mf-method">
            <h5>Gutzwiller近似</h5>
            <p>变分波函数方法：</p>
            <KatexElement formula="|\psi_G\rangle = \prod_i \left(\sum_{n=0}^\infty f_n^{(i)} |n\rangle_i\right)" />
            <p>其中f_n^{(i)}是变分参数</p>
            <ul>
              <li>给出相图的定性结构</li>
              <li>预测Mott叶和临界点</li>
              <li>忽略量子涨落</li>
            </ul>
          </div>

          <div class="mf-method">
            <h5>Bogoliubov理论</h5>
            <p>弱相互作用超流的准粒子理论：</p>
            <KatexElement formula="H_{\text{eff}} = \sum_k E_k \alpha_k^\dagger \alpha_k" />
            <p>其中E_k = √[(ε_k)² + (2Uρ₀ε_k)]是Bogoliubov谱</p>
            <ul>
              <li>描述声子激发</li>
              <li>给出超流密度</li>
              <li>适用于弱耦合区域</li>
            </ul>
          </div>

          <div class="mf-method">
            <h5>Landau-Ginzburg理论</h5>
            <p>临界点附近的有效场论：</p>
            <KatexElement formula="S = \int d^dx \left[|\nabla\psi|^2 + r|\psi|^2 + u|\psi|^4\right]" />
            <ul>
              <li>描述临界行为</li>
              <li>给出普适性类别</li>
              <li>重整化群分析</li>
            </ul>
          </div>
        </div>

        <h4>强耦合方法</h4>
        <div class="strong-coupling-methods">
          <div class="sc-method">
            <h5>强耦合展开</h5>
            <p>在t/U的幂级数展开：</p>
            <KatexElement formula="H_{\text{eff}} = \sum_n \left(\frac{t}{U}\right)^n H_n" />
            <ul>
              <li>导出有效自旋模型</li>
              <li>计算Mott叶边界</li>
              <li>适用于强相互作用区域</li>
            </ul>
          </div>

          <div class="sc-method">
            <h5>链分数展开</h5>
            <p>基于连分数的数值方法：</p>
            <ul>
              <li>精确处理局域希尔伯特空间</li>
              <li>计算动力学性质</li>
              <li>适用于杂质问题</li>
            </ul>
          </div>
        </div>

        <h4>重整化群方法</h4>
        <div class="rg-methods">
          <div class="rg-method">
            <h5>实空间重整化群</h5>
            <ul>
              <li>处理无序系统</li>
              <li>研究Griffiths相</li>
              <li>计算临界指数</li>
            </ul>
          </div>

          <div class="rg-method">
            <h5>函数重整化群</h5>
            <ul>
              <li>处理竞争相互作用</li>
              <li>研究多体局域化</li>
              <li>非平衡态分析</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>数值计算方法</h3>
      <div class="numerical-methods">
        <div class="method-card">
          <h4>量子蒙特卡罗 (QMC)</h4>
          <div class="qmc-details">
            <h5>路径积分蒙特卡罗</h5>
            <p>基于世界线表示的QMC方法：</p>
            <ul>
              <li><strong>无符号问题：</strong>玻色系统天然优势</li>
              <li><strong>系统尺寸：</strong>可达L³ ~ 20³</li>
              <li><strong>温度范围：</strong>从高温到接近零温</li>
            </ul>

            <h5>连续时间QMC</h5>
            <div class="qmc-algorithms">
              <h6>蠕虫算法 (Worm Algorithm)</h6>
              <ul>
                <li>高效更新拓扑扇形</li>
                <li>直接测量超流密度</li>
                <li>处理开边界条件</li>
              </ul>

              <h6>有向环算法 (Directed Loop)</h6>
              <ul>
                <li>基于环更新</li>
                <li>保持详细平衡</li>
                <li>适用于阻挫系统</li>
              </ul>
            </div>

            <h5>计算物理量</h5>
            <ul>
              <li><strong>超流密度：</strong>绕数涨落</li>
              <li><strong>可压缩性：</strong>粒子数涨落</li>
              <li><strong>结构因子：</strong>密度关联函数</li>
              <li><strong>动力学结构因子：</strong>解析延拓</li>
            </ul>
          </div>
        </div>
        
        <div class="method-card">
          <h4>密度矩阵重整化群 (DMRG)</h4>
          <div class="dmrg-details">
            <h5>基态DMRG</h5>
            <p>基于矩阵乘积态的变分方法：</p>
            <ul>
              <li><strong>一维系统：</strong>几乎精确结果</li>
              <li><strong>准一维：</strong>梯子和管状几何</li>
              <li><strong>键维数：</strong>χ ~ 100-1000</li>
            </ul>

            <h5>有限温度DMRG</h5>
            <ul>
              <li><strong>纯化方法：</strong>辅助系统</li>
              <li><strong>最小纠缠典型态：</strong>METTS</li>
              <li><strong>时间演化：</strong>虚时间传播</li>
            </ul>

            <h5>动力学DMRG</h5>
            <ul>
              <li>实时间演化</li>
              <li>谱函数计算</li>
              <li>非平衡动力学</li>
            </ul>
          </div>
        </div>

        <div class="method-card">
          <h4>张量网络方法</h4>
          <div class="tensor-methods">
            <h5>投影纠缠对态 (PEPS)</h5>
            <p>二维系统的张量网络表示：</p>
            <ul>
              <li><strong>简单更新：</strong>快速但近似</li>
              <li><strong>完全更新：</strong>精确但昂贵</li>
              <li><strong>角传递矩阵：</strong>计算物理量</li>
            </ul>

            <h5>多尺度纠缠重整化</h5>
            <ul>
              <li>MERA网络结构</li>
              <li>临界系统的对数纠缠</li>
              <li>标度不变性</li>
            </ul>
          </div>
        </div>

        <div class="method-card">
          <h4>精确对角化 (ED)</h4>
          <div class="ed-details">
            <h5>完全对角化</h5>
            <p>小系统的精确求解：</p>
            <ul>
              <li><strong>系统尺寸：</strong>通常L ≤ 6（二维）</li>
              <li><strong>希尔伯特空间：</strong>截断最大占据数</li>
              <li><strong>对称性：</strong>平移、反射对称性</li>
            </ul>

            <h5>Lanczos方法</h5>
            <ul>
              <li>基态和低激发态</li>
              <li>动力学关联函数</li>
              <li>有限尺寸标度</li>
            </ul>
          </div>
        </div>

        <div class="method-card">
          <h4>机器学习方法</h4>
          <div class="ml-methods">
            <h5>神经网络量子态</h5>
            <p>用神经网络表示玻色多体波函数：</p>
            <ul>
              <li><strong>受限玻尔兹曼机：</strong>隐变量表示</li>
              <li><strong>卷积神经网络：</strong>平移不变性</li>
              <li><strong>变分优化：</strong>随机梯度下降</li>
            </ul>

            <h5>强化学习</h5>
            <ul>
              <li>量子态制备</li>
              <li>相变点识别</li>
              <li>最优控制协议</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>冷原子实验实现</h3>
      <div class="cold-atom-section">
        <h4>光晶格系统</h4>
        <div class="optical-lattice">
          <h5>实验装置</h5>
          <p>利用激光干涉形成周期势场：</p>
          <ul>
            <li><strong>驻波激光：</strong>形成一维、二维、三维晶格</li>
            <li><strong>晶格深度：</strong>V₀/E_R（以反冲能为单位）</li>
            <li><strong>可调参数：</strong>激光强度、频率、偏振</li>
          </ul>

          <h5>参数控制</h5>
          <div class="parameter-control">
            <div class="control-item">
              <h6>跳跃强度 t</h6>
              <p>通过晶格深度调节：</p>
              <KatexElement formula="t \propto E_R e^{-2\sqrt{V_0/E_R}}" />
              <ul>
                <li>深晶格：t 指数抑制</li>
                <li>浅晶格：t 接近自由粒子值</li>
              </ul>
            </div>

            <div class="control-item">
              <h6>相互作用强度 U</h6>
              <p>通过Feshbach共振调节：</p>
              <KatexElement formula="U = \frac{4\pi\hbar^2 a_s}{m} \int |\phi(r)|^4 d^3r" />
              <ul>
                <li>散射长度a_s可调</li>
                <li>Wannier函数重叠积分</li>
              </ul>
            </div>

            <div class="control-item">
              <h6>化学势 μ</h6>
              <p>通过外加势场控制：</p>
              <ul>
                <li><strong>磁阱：</strong>谐振子势</li>
                <li><strong>光阱：</strong>高斯光束</li>
                <li><strong>盒势：</strong>数字微镜器件</li>
              </ul>
            </div>
          </div>
        </div>

        <h4>实验观测技术</h4>
        <div class="experimental-techniques">
          <div class="technique-card">
            <h5>飞行时间成像</h5>
            <ul>
              <li><strong>动量分布：</strong>释放后的密度分布</li>
              <li><strong>相干峰：</strong>超流态的特征</li>
              <li><strong>干涉条纹：</strong>相位相干性</li>
            </ul>
          </div>

          <div class="technique-card">
            <h5>原位成像</h5>
            <ul>
              <li><strong>密度分布：</strong>实空间原子密度</li>
              <li><strong>Mott壳层：</strong>整数填充区域</li>
              <li><strong>单原子分辨：</strong>量子气体显微镜</li>
            </ul>
          </div>

          <div class="technique-card">
            <h5>Bragg谱学</h5>
            <ul>
              <li><strong>激发谱：</strong>能隙测量</li>
              <li><strong>动力学结构因子：</strong>S(q,ω)</li>
              <li><strong>声子模式：</strong>集体激发</li>
            </ul>
          </div>

          <div class="technique-card">
            <h5>调制谱学</h5>
            <ul>
              <li><strong>晶格调制：</strong>周期驱动</li>
              <li><strong>能隙探测：</strong>阈值行为</li>
              <li><strong>输运测量：</strong>电导率</li>
            </ul>
          </div>
        </div>

        <h4>里程碑实验</h4>
        <div class="milestone-experiments">
          <div class="experiment-card">
            <h5>2002年 - 首次观测SF-MI转变</h5>
            <p>Greiner等人在Nature发表：</p>
            <ul>
              <li>⁸⁷Rb原子在三维光晶格中</li>
              <li>通过调节晶格深度实现相变</li>
              <li>飞行时间成像观测相干峰消失</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h5>2006年 - 量子相变的精确测量</h5>
            <p>Spielman等人的高精度实验：</p>
            <ul>
              <li>一维系统的临界点测量</li>
              <li>与理论预言的精确符合</li>
              <li>临界指数的验证</li>
            </ul>
          </div>

          <div class="experiment-card">
            <h5>2010年代 - 单原子分辨成像</h5>
            <p>量子气体显微镜的发展：</p>
            <ul>
              <li>单格点分辨率</li>
              <li>关联函数的直接测量</li>
              <li>量子涨落的观测</li>
            </ul>
          </div>
        </div>

        <h4>扩展实验</h4>
        <div class="extended-experiments">
          <div class="exp-extension">
            <h5>多组分系统</h5>
            <ul>
              <li><strong>双组分BEC：</strong>自旋-1/2系统</li>
              <li><strong>自旋-1 BEC：</strong>磁性相互作用</li>
              <li><strong>费米-玻色混合：</strong>异种粒子相互作用</li>
            </ul>
          </div>

          <div class="exp-extension">
            <h5>几何效应</h5>
            <ul>
              <li><strong>阻挫晶格：</strong>三角、蜂窝晶格</li>
              <li><strong>人工规范场：</strong>旋转、激光辅助跳跃</li>
              <li><strong>拓扑能带：</strong>Hofstadter模型</li>
            </ul>
          </div>

          <div class="exp-extension">
            <h5>非平衡动力学</h5>
            <ul>
              <li><strong>量子淬火：</strong>参数突然改变</li>
              <li><strong>绝热演化：</strong>慢速参数变化</li>
              <li><strong>周期驱动：</strong>Floquet工程</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>应用领域与前沿发展</h3>
      <div class="applications-section">
        <h4>量子模拟</h4>
        <div class="quantum-simulation">
          <h5>模拟其他量子系统</h5>
          <ul>
            <li><strong>量子磁性：</strong>有效自旋模型</li>
            <li><strong>高能物理：</strong>规范场理论</li>
            <li><strong>凝聚态模型：</strong>Hubbard、t-J模型</li>
          </ul>

          <h5>量子算法验证</h5>
          <ul>
            <li>变分量子本征求解器</li>
            <li>量子近似优化算法</li>
            <li>量子机器学习</li>
          </ul>
        </div>

        <h4>量子技术应用</h4>
        <div class="quantum-technology">
          <h5>量子传感</h5>
          <ul>
            <li><strong>精密测量：</strong>重力、磁场、时间</li>
            <li><strong>量子增强：</strong>超越标准量子极限</li>
            <li><strong>纠缠传感：</strong>多体纠缠的利用</li>
          </ul>

          <h5>量子计算</h5>
          <ul>
            <li><strong>量子门：</strong>基于相互作用的量子门</li>
            <li><strong>量子纠错：</strong>拓扑保护</li>
            <li><strong>量子存储：</strong>长相干时间</li>
          </ul>
        </div>

        <h4>基础物理研究</h4>
        <div class="fundamental-physics">
          <h5>多体局域化</h5>
          <ul>
            <li>无序诱导的局域化</li>
            <li>本征态热化假设</li>
            <li>量子疤痕态</li>
          </ul>

          <h5>时间晶体</h5>
          <ul>
            <li>离散时间晶体</li>
            <li>Floquet系统</li>
            <li>预热化现象</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展历史</h3>
      <div class="history-section">
        <div class="timeline">
          <div class="timeline-item">
            <h5>1989年 - Bose-Hubbard模型提出</h5>
            <p>Fisher等人预测超流-绝缘体量子相变</p>
          </div>
          <div class="timeline-item">
            <h5>1990年代 - 理论发展</h5>
            <p>量子蒙特卡罗、DMRG等数值方法应用</p>
          </div>
          <div class="timeline-item">
            <h5>2002年 - 实验实现</h5>
            <p>Greiner等人首次观测SF-MI转变</p>
          </div>
          <div class="timeline-item">
            <h5>2000年代 - 精密实验</h5>
            <p>临界指数测量、相图绘制</p>
          </div>
          <div class="timeline-item">
            <h5>2010年代 - 单原子成像</h5>
            <p>量子气体显微镜技术突破</p>
          </div>
          <div class="timeline-item">
            <h5>2020年代至今 - 量子模拟</h5>
            <p>复杂量子系统的模拟与应用</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>相关概念与扩展</h3>
      <div class="related-concepts">
        <div class="concept-grid">
          <div class="concept-card">
            <h4>基础概念</h4>
            <div class="concept-tags">
              <span class="tag">量子相变</span>
              <span class="tag">超流性</span>
              <span class="tag">Mott绝缘体</span>
              <span class="tag">玻色-爱因斯坦凝聚</span>
              <span class="tag">量子涨落</span>
            </div>
          </div>
          
          <div class="concept-card">
            <h4>相关模型</h4>
            <div class="concept-tags">
              <span class="tag">Hubbard模型</span>
              <span class="tag">XY模型</span>
              <span class="tag">Josephson结阵列</span>
              <span class="tag">量子转子模型</span>
              <span class="tag">Sine-Gordon模型</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>实验技术</h4>
            <div class="concept-tags">
              <span class="tag">光晶格</span>
              <span class="tag">Feshbach共振</span>
              <span class="tag">量子气体显微镜</span>
              <span class="tag">飞行时间成像</span>
              <span class="tag">Bragg谱学</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>物理现象</h4>
            <div class="concept-tags">
              <span class="tag">量子临界性</span>
              <span class="tag">普适性</span>
              <span class="tag">标度不变性</span>
              <span class="tag">拓扑相变</span>
              <span class="tag">多体局域化</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>开放问题与未来方向</h3>
      <div class="future-directions">
        <h4>理论挑战</h4>
        <ul>
          <li><strong>非平衡态：</strong>量子淬火后的热化与局域化</li>
          <li><strong>高维系统：</strong>三维以上的精确理论</li>
          <li><strong>强相互作用：</strong>超越平均场的方法</li>
          <li><strong>拓扑相：</strong>相互作用拓扑态</li>
        </ul>

        <h4>实验前沿</h4>
        <ul>
          <li><strong>单原子操控：</strong>任意态制备</li>
          <li><strong>长程相互作用：</strong>偶极-偶极相互作用</li>
          <li><strong>开放系统：</strong>耗散与增益</li>
          <li><strong>人工维度：</strong>合成维度工程</li>
        </ul>

        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>基于中性原子的量子处理器</li>
          <li><strong>量子传感：</strong>超高精度测量</li>
          <li><strong>量子模拟：</strong>复杂材料设计</li>
          <li><strong>量子网络：</strong>分布式量子信息</li>
        </ul>

        <h4>跨学科发展</h4>
        <ul>
          <li><strong>机器学习：</strong>AI辅助的量子态识别</li>
          <li><strong>高能物理：</strong>格点规范理论模拟</li>
          <li><strong>生物物理：</strong>量子效应在生物系统中的作用</li>
          <li><strong>宇宙学：</strong>早期宇宙的量子模拟</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'

export default {
  name: 'Chapter1_4_17',
  components: {
    KatexElement
  }
}
</script>

<style scoped>
.chapter-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid #17a2b8;
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.phase-diagram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.phase-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  transition: transform 0.2s;
}

.phase-card:hover {
  transform: translateY(-2px);
}

.phase-card.sf {
  border-left: 4px solid #28a745;
}

.phase-card.mi {
  border-left: 4px solid #dc3545;
}

.phase-card h4 {
  margin-bottom: 15px;
  font-size: 1.1em;
}

.sf h4 {
  color: #28a745;
}

.mi h4 {
  color: #dc3545;
}

.critical-point {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 2px solid #ffc107;
  margin-top: 20px;
  text-align: center;
}

.critical-point h4 {
  color: #856404;
  margin-bottom: 15px;
}

.method-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.method-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.method-card h4 {
  color: #17a2b8;
  margin-bottom: 8px;
}

.experiment-section {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.experiment-section h4 {
  color: #6f42c1;
  margin-bottom: 15px;
  margin-top: 20px;
}

.experiment-section h4:first-child {
  margin-top: 0;
}

.exp-details ul {
  margin-top: 10px;
  padding-left: 20px;
}

.observation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.obs-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  text-align: center;
}

.obs-item h5 {
  color: #495057;
  margin-bottom: 8px;
}

.phenomena-list {
  display: grid;
  gap: 15px;
  margin-top: 15px;
}

.phenomenon {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.phenomenon h4 {
  color: #fd7e14;
  margin-bottom: 8px;
}

.extension-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.ext-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.ext-card h4 {
  color: #20c997;
  margin-bottom: 8px;
}

.concept-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.tag {
  background: #17a2b8;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

h2 {
  color: #2c3e50;
  border-bottom: 3px solid #17a2b8;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
</style>