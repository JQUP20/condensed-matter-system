<template>
  <div class="chapter-content">
    <h2>1.4.16 Hubbard模型 (Hubbard Model)</h2>
    
    <div class="section">
      <h3>模型概述与历史背景</h3>
      <p>
        Hubbard模型是凝聚态物理中最重要的强关联电子系统模型之一，由John Hubbard在1963年提出。
        该模型描述了晶格上电子的跳跃和在位库仑相互作用，是理解高温超导、金属-绝缘体转变、磁性等现象的核心理论工具。
      </p>
      <p>
        Hubbard模型的提出标志着强关联电子系统理论的开端。它将复杂的多体电子问题简化为最基本的物理要素：
        电子的动能（跳跃项）和库仑相互作用（在位排斥）。尽管形式简单，但该模型展现出极其丰富的物理现象，
        至今仍是理论物理和计算物理研究的热点。
      </p>
      <p>
        该模型在高温超导机理、Mott绝缘体、量子磁性、重费米子系统等领域都有重要应用，
        被誉为强关联电子系统的"氢原子模型"。
      </p>
    </div>

    <div class="section">
      <h3>哈密顿量与基本理论</h3>
      <p>单带Hubbard模型的哈密顿量为：</p>
      <KatexElement 
        formula="H = -t\sum_{\langle i,j \rangle, \sigma} (c_{i\sigma}^\dagger c_{j\sigma} + \text{h.c.}) + U\sum_i n_{i\uparrow} n_{i\downarrow}"
        display-mode
      />
      <p>其中：</p>
      <ul>
        <li><strong>跳跃项：</strong>-t描述电子在最近邻格点间的跳跃，代表动能</li>
        <li><strong>相互作用项：</strong>U描述同一格点上两个电子的库仑排斥</li>
        <li><strong>c_{iσ}†, c_{iσ}：</strong>格点i上自旋σ电子的产生和湮灭算符</li>
        <li><strong>n_{iσ} = c_{iσ}†c_{iσ}：</strong>电子数密度算符</li>
      </ul>

      <h4>模型的物理意义</h4>
      <div class="physics-meaning">
        <div class="meaning-item">
          <h5>动能与相互作用的竞争</h5>
          <p>Hubbard模型的核心是动能和相互作用能的竞争：</p>
          <ul>
            <li><strong>动能主导（U << t）：</strong>电子倾向于离域化，形成金属态</li>
            <li><strong>相互作用主导（U >> t）：</strong>电子倾向于局域化，形成绝缘体态</li>
            <li><strong>中间区域（U ~ t）：</strong>出现丰富的强关联现象</li>
          </ul>
        </div>

        <div class="meaning-item">
          <h5>电子关联效应</h5>
          <p>在位相互作用导致的关联效应：</p>
          <ul>
            <li><strong>双占据抑制：</strong>U > 0时，同一格点双占据能量代价高</li>
            <li><strong>自旋关联：</strong>电子自旋排列受相互作用调制</li>
            <li><strong>电荷涨落：</strong>电荷密度的量子涨落</li>
          </ul>
        </div>
      </div>

      <h4>扩展Hubbard模型</h4>
      <div class="extended-models">
        <div class="model-variant">
          <h5>包含最近邻相互作用</h5>
          <KatexElement formula="H = H_{\text{Hubbard}} + V\sum_{\langle i,j \rangle} n_i n_j" />
          <p>V为最近邻库仑相互作用</p>
        </div>

        <div class="model-variant">
          <h5>多轨道Hubbard模型</h5>
          <KatexElement formula="H = \sum_{ij\alpha\beta\sigma} t_{ij}^{\alpha\beta} c_{i\alpha\sigma}^\dagger c_{j\beta\sigma} + \frac{1}{2}\sum_{i\alpha\beta\gamma\delta} U_{\alpha\beta\gamma\delta} n_{i\alpha\sigma} n_{i\beta\sigma'}" />
          <p>考虑多个轨道的情况</p>
        </div>

        <div class="model-variant">
          <h5>t-J模型</h5>
          <KatexElement formula="H = -t\sum_{\langle i,j \rangle, \sigma} \tilde{c}_{i\sigma}^\dagger \tilde{c}_{j\sigma} + J\sum_{\langle i,j \rangle} (\vec{S}_i \cdot \vec{S}_j - \frac{1}{4}n_i n_j)" />
          <p>强关联极限下的有效模型，其中J = 4t²/U</p>
        </div>

        <div class="model-variant">
          <h5>Anderson-Hubbard模型</h5>
          <KatexElement formula="H = H_{\text{Hubbard}} + \sum_{i\sigma} \epsilon_i n_{i\sigma}" />
          <p>包含随机在位能，描述无序效应</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>重要物理参数与无量纲量</h3>
      <div class="parameter-section">
        <div class="parameter-grid">
          <div class="param-card">
            <h4>相互作用强度 U/t</h4>
            <p>决定系统性质的关键参数：</p>
            <ul>
              <li><strong>U/t << 1：</strong>弱关联金属，费米液体行为</li>
              <li><strong>U/t ~ 1：</strong>中等关联系统，非费米液体行为</li>
              <li><strong>U/t >> 1：</strong>强关联绝缘体，Mott物理</li>
            </ul>
            <p>临界值：二维方格子上U_c/t ≈ 3.8（半填充）</p>
          </div>
          
          <div class="param-card">
            <h4>电子填充 n</h4>
            <p>每格点平均电子数：</p>
            <KatexElement formula="n = \langle n_{i\uparrow} + n_{i\downarrow} \rangle = \frac{1}{N}\sum_i \langle n_i \rangle" />
            <ul>
              <li><strong>n = 1：</strong>半填充，粒子-空穴对称</li>
              <li><strong>n < 1：</strong>空穴掺杂</li>
              <li><strong>n > 1：</strong>电子掺杂</li>
            </ul>
          </div>
          
          <div class="param-card">
            <h4>温度标度</h4>
            <p>相对于跳跃能标的温度：</p>
            <ul>
              <li><strong>T/t：</strong>相对于带宽的温度</li>
              <li><strong>T/J：</strong>相对于磁交换能的温度</li>
              <li><strong>T/T*：</strong>相对于特征温度的比值</li>
            </ul>
          </div>

          <div class="param-card">
            <h4>双占据概率</h4>
            <KatexElement formula="D = \langle n_{i\uparrow} n_{i\downarrow} \rangle" />
            <p>衡量关联强度的重要量：</p>
            <ul>
              <li>D → n²/4（非相互作用极限）</li>
              <li>D → 0（强关联极限）</li>
            </ul>
          </div>

          <div class="param-card">
            <h4>准粒子权重</h4>
            <KatexElement formula="Z = \left(1 - \frac{\partial \Sigma(\omega)}{\partial \omega}\right)^{-1}_{\omega=0}" />
            <p>费米液体理论中的重要参数，Z → 0表示Mott转变</p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>相图与量子相变</h3>
      <div class="phase-diagram-section">
        <h4>半填充相图 (n = 1)</h4>
        <div class="half-filled-phases">
          <div class="phase-card mott">
            <h5>反铁磁Mott绝缘体 (U > U_c)</h5>
            <ul>
              <li><strong>能隙：</strong>Δ ~ U - 8t（大U极限）</li>
              <li><strong>磁序：</strong>反铁磁长程序，TN ~ J</li>
              <li><strong>激发：</strong>自旋子和空穴子</li>
              <li><strong>输运：</strong>绝缘体行为</li>
            </ul>
          </div>
          
          <div class="phase-card metal">
            <h5>顺磁金属 (U < U_c)</h5>
            <ul>
              <li><strong>费米面：</strong>存在费米面</li>
              <li><strong>准粒子：</strong>重整化的费米液体</li>
              <li><strong>输运：</strong>金属导电性</li>
              <li><strong>磁性：</strong>Pauli顺磁性</li>
            </ul>
          </div>
        </div>

        <h4>掺杂相图 (n ≠ 1)</h4>
        <div class="doped-phase-diagram">
          <div class="doped-phase">
            <h5>d波超导相</h5>
            <p>轻掺杂反铁磁绝缘体出现的超导相：</p>
            <ul>
              <li><strong>配对对称性：</strong>d_{x²-y²}波</li>
              <li><strong>超导机理：</strong>自旋涨落介导</li>
              <li><strong>临界温度：</strong>T_c随掺杂呈钟形</li>
            </ul>
          </div>

          <div class="doped-phase">
            <h5>赝能隙相</h5>
            <p>欠掺杂区域奇异相：</p>
            <ul>
              <li><strong>能谱特征：</strong>部分费米面打开能隙</li>
              <li><strong>温度范围：</strong>T_c < T < T*</li>
              <li><strong>物理起源：</strong>预形成Cooper对或自旋液体</li>
            </ul>
          </div>

          <div class="doped-phase">
            <h5>奇异金属相</h5>
            <p>过掺杂区域的非费米液体：</p>
            <ul>
              <li><strong>电阻率：</strong>线性温度依赖</li>
              <li><strong>比热：</strong>线性温度依赖</li>
              <li><strong>磁化率：</strong>温度无关</li>
            </ul>
          </div>

          <div class="doped-phase">
            <h5>条纹相</h5>
            <p>电荷和自旋的空间调制：</p>
            <ul>
              <li><strong>电荷条纹：</strong>电荷密度波</li>
              <li><strong>自旋条纹：</strong>自旋密度波</li>
              <li><strong>竞争关系：</strong>与超导相竞争</li>
            </ul>
          </div>
        </div>

        <h4>有限温度行为</h4>
        <div class="finite-temperature">
          <h5>Mott转变的温度演化</h5>
          <p>有限温度下Mott转变的特征：</p>
          <ul>
            <li><strong>交叉区域：</strong>一阶转变变为交叉</li>
            <li><strong>坏金属区域：</strong>高温下的非相干输运</li>
            <li><strong>相干温度：</strong>T_coh ~ t²/U</li>
          </ul>

          <h5>磁性转变</h5>
          <ul>
            <li><strong>Néel温度：</strong>TN ~ J = 4t²/U</li>
            <li><strong>磁化率：</strong>Curie-Weiss行为</li>
            <li><strong>自旋关联：</strong>短程反铁磁关联</li>
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
            <h5>Hartree-Fock近似</h5>
            <p>最简单的平均场处理：</p>
            <KatexElement formula="H_{\text{MF}} = \sum_{i\sigma} \epsilon_{i\sigma} c_{i\sigma}^\dagger c_{i\sigma}" />
            <p>其中 ε_{iσ} = -μ + U⟨n_{i,-σ}⟩</p>
            <ul>
              <li>预测反铁磁序和Mott转变</li>
              <li>忽略量子涨落</li>
              <li>高维情况下较准确</li>
            </ul>
          </div>

          <div class="mf-method">
            <h5>Gutzwiller近似</h5>
            <p>变分波函数方法：</p>
            <KatexElement formula="|\psi_G\rangle = \prod_i (1 - (1-g)n_{i\uparrow}n_{i\downarrow})|\psi_0\rangle" />
            <p>其中g是变分参数，|ψ₀⟩是非相互作用基态</p>
            <ul>
              <li>正确描述Mott转变</li>
              <li>给出准粒子权重Z</li>
              <li>无限维情况下精确</li>
            </ul>
          </div>

          <div class="mf-method">
            <h5>从动平均场理论 (DMFT)</h5>
            <p>将晶格问题映射到杂质问题：</p>
            <KatexElement formula="G(\omega) = \int \frac{d\epsilon}{\omega - \epsilon - \Sigma(\omega)} \rho(\epsilon)" />
            <ul>
              <li>精确处理局域量子涨落</li>
              <li>无限维情况下精确</li>
              <li>成功描述Mott转变</li>
            </ul>
          </div>
        </div>

        <h4>强关联方法</h4>
        <div class="strong-correlation-methods">
          <div class="sc-method">
            <h5>高温展开</h5>
            <p>在β = 1/T的幂级数展开：</p>
            <KatexElement formula="\langle O \rangle = \frac{\text{Tr}[O e^{-\beta H}]}{\text{Tr}[e^{-\beta H}]} = \sum_n \beta^n \langle O \rangle_n" />
            <ul>
              <li>高温区域有效</li>
              <li>可计算磁化率、比热等</li>
              <li>给出临界温度估计</li>
            </ul>
          </div>

          <div class="sc-method">
            <h5>强耦合展开</h5>
            <p>在t/U的幂级数展开：</p>
            <KatexElement formula="H_{\text{eff}} = \sum_n \left(\frac{t}{U}\right)^n H_n" />
            <ul>
              <li>导出t-J模型</li>
              <li>描述磁性相互作用</li>
              <li>适用于强关联区域</li>
            </ul>
          </div>

          <div class="sc-method">
            <h5>奴隶玻色子方法</h5>
            <p>引入辅助玻色子场：</p>
            <KatexElement formula="c_{i\sigma} = f_{i\sigma}^\dagger (e_i + d_i^\dagger \sigma_{i,-\sigma})" />
            <ul>
              <li>自然处理Mott物理</li>
              <li>描述自旋-电荷分离</li>
              <li>平均场处理存在限制</li>
            </ul>
          </div>
        </div>

        <h4>重整化群方法</h4>
        <div class="rg-methods">
          <div class="rg-method">
            <h5>数值重整化群 (NRG)</h5>
            <ul>
              <li>精确处理杂质问题</li>
              <li>DMFT中的杂质求解器</li>
              <li>低能物理的精确描述</li>
            </ul>
          </div>

          <div class="rg-method">
            <h5>函数重整化群 (fRG)</h5>
            <ul>
              <li>处理竞争序参量</li>
              <li>研究相图结构</li>
              <li>包含涨落效应</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>数值计算方法</h3>
      <div class="numerical-methods">
        <div class="method-card">
          <h4>精确对角化 (ED)</h4>
          <div class="ed-details">
            <h5>方法原理</h5>
            <p>直接对角化哈密顿量矩阵：</p>
            <ul>
              <li><strong>系统尺寸：</strong>通常N ≤ 16（二维）</li>
              <li><strong>希尔伯特空间：</strong>4^N维（考虑自旋）</li>
              <li><strong>对称性利用：</strong>粒子数、自旋、动量守恒</li>
            </ul>

            <h5>计算内容</h5>
            <ul>
              <li><strong>基态性质：</strong>能量、关联函数、序参量</li>
              <li><strong>激发谱：</strong>能隙、激发态</li>
              <li><strong>动力学性质：</strong>谱函数、光电导</li>
              <li><strong>有限温度：</strong>热力学量</li>
            </ul>

            <h5>优缺点</h5>
            <ul>
              <li><strong>优点：</strong>精确结果、无近似</li>
              <li><strong>缺点：</strong>系统尺寸限制、有限尺寸效应</li>
            </ul>
          </div>
        </div>
        
        <div class="method-card">
          <h4>量子蒙特卡罗 (QMC)</h4>
          <div class="qmc-details">
            <h5>确定性QMC</h5>
            <div class="qmc-type">
              <h6>辅助场QMC (AFQMC)</h6>
              <p>通过Hubbard-Stratonovich变换处理相互作用：</p>
              <KatexElement formula="e^{-\Delta\tau U n_{i\uparrow} n_{i\downarrow}} = \frac{1}{2}\sum_{s_i=\pm 1} e^{\gamma s_i (n_{i\uparrow} - n_{i\downarrow})}" />
              <ul>
                <li>系统尺寸：N ~ 10²-10³</li>
                <li>温度范围：中高温有效</li>
                <li>符号问题：掺杂时严重</li>
              </ul>
            </div>

            <h5>连续时间QMC</h5>
            <div class="qmc-type">
              <h6>CT-INT算法</h6>
              <p>相互作用表示的连续时间算法：</p>
              <ul>
                <li>精确处理相互作用</li>
                <li>适用于杂质问题</li>
                <li>DMFT的求解器</li>
              </ul>
            </div>

            <h5>符号问题</h5>
            <p>费米子QMC的根本困难：</p>
            <ul>
              <li><strong>起源：</strong>费米子反对易关系</li>
              <li><strong>表现：</strong>平均符号指数衰减</li>
              <li><strong>缓解：</strong>约束路径、固定节点等方法</li>
            </ul>
          </div>
        </div>
        
        <div class="method-card">
          <h4>密度矩阵重整化群 (DMRG)</h4>
          <div class="dmrg-details">
            <h5>基本原理</h5>
            <p>基于纠缠结构的变分方法：</p>
            <ul>
              <li><strong>矩阵乘积态：</strong>高效表示一维系统</li>
              <li><strong>纠缠熵：</strong>面积律的利用</li>
              <li><strong>变分优化：</strong>逐步优化张量</li>
            </ul>

            <h5>应用范围</h5>
            <ul>
              <li><strong>一维系统：</strong>精确处理</li>
              <li><strong>二维系统：</strong>圆柱几何</li>
              <li><strong>有限温度：</strong>纯化方法</li>
            </ul>

            <h5>计算内容</h5>
            <ul>
              <li>基态和低激发态</li>
              <li>关联函数和序参量</li>
              <li>纠缠谱和拓扑性质</li>
            </ul>
          </div>
        </div>

        <div class="method-card">
          <h4>张量网络方法</h4>
          <div class="tensor-methods">
            <h5>投影纠缠对态 (PEPS)</h5>
            <p>二维系统的张量网络表示：</p>
            <ul>
              <li><strong>表示能力：</strong>面积律纠缠</li>
              <li><strong>计算复杂度：</strong>指数标度</li>
              <li><strong>近似方法：</strong>简单更新、完全更新</li>
            </ul>

            <h5>树张量网络 (TTN)</h5>
            <ul>
              <li>层次化的张量结构</li>
              <li>适用于临界系统</li>
              <li>多尺度纠缠重整化</li>
            </ul>
          </div>
        </div>

        <div class="method-card">
          <h4>变分方法</h4>
          <div class="variational-methods">
            <h5>变分蒙特卡罗 (VMC)</h5>
            <p>基于变分波函数的蒙特卡罗方法：</p>
            <ul>
              <li><strong>Jastrow波函数：</strong>包含关联因子</li>
              <li><strong>投影波函数：</strong>BCS + Gutzwiller投影</li>
              <li><strong>神经网络波函数：</strong>深度学习表示</li>
            </ul>

            <h5>优化算法</h5>
            <ul>
              <li>随机重构</li>
              <li>自然梯度</li>
              <li>Adam优化器</li>
            </ul>
          </div>
        </div>

        <div class="method-card">
          <h4>机器学习方法</h4>
          <div class="ml-methods">
            <h5>神经网络量子态</h5>
            <p>用神经网络表示量子多体波函数：</p>
            <ul>
              <li><strong>受限玻尔兹曼机：</strong>表示自旋系统</li>
              <li><strong>卷积神经网络：</strong>利用平移对称性</li>
              <li><strong>循环神经网络：</strong>处理序列相关性</li>
            </ul>

            <h5>强化学习</h5>
            <ul>
              <li>量子态制备</li>
              <li>相变点识别</li>
              <li>哈密顿量学习</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>实验实现与材料应用</h3>
      <div class="experimental-section">
        <h4>高温超导体</h4>
        <div class="material-systems">
          <div class="material-card">
            <h5>铜氧化物超导体</h5>
            <p>Hubbard模型的典型实现：</p>
            <ul>
              <li><strong>CuO₂平面：</strong>二维方格子结构</li>
              <li><strong>强关联：</strong>U/t ~ 8-10</li>
              <li><strong>掺杂相图：</strong>从反铁磁绝缘体到d波超导</li>
              <li><strong>代表材料：</strong>La₂₋ₓSrₓCuO₄, YBa₂Cu₃O₇₋δ</li>
            </ul>
          </div>

          <div class="material-card">
            <h5>铁基超导体</h5>
            <p>多轨道Hubbard模型：</p>
            <ul>
              <li><strong>Fe-As/Se层：</strong>准二维结构</li>
              <li><strong>多轨道：</strong>Fe 3d轨道</li>
              <li><strong>磁性：</strong>条纹反铁磁序</li>
              <li><strong>超导：</strong>s±波配对</li>
            </ul>
          </div>
        </div>

        <h4>Mott绝缘体材料</h4>
        <div class="mott-materials">
          <div class="mott-card">
            <h5>过渡金属氧化物</h5>
            <ul>
              <li><strong>V₂O₃：</strong>经典Mott绝缘体</li>
              <li><strong>NiO：</strong>反铁磁Mott绝缘体</li>
              <li><strong>Ca₂RuO₄：</strong>自旋轨道耦合</li>
            </ul>
          </div>

          <div class="mott-card">
            <h5>有机导体</h5>
            <ul>
              <li><strong>κ-(BEDT-TTF)₂X：</strong>三角晶格</li>
              <li><strong>压力调控：</strong>Mott转变</li>
              <li><strong>量子自旋液体：</strong>几何阻挫</li>
            </ul>
          </div>
        </div>

        <h4>冷原子量子模拟</h4>
        <div class="cold-atom-section">
          <h5>光晶格中的费米气体</h5>
          <p>人工实现Hubbard模型：</p>
          <ul>
            <li><strong>可调参数：</strong>通过激光强度调节U/t</li>
            <li><strong>实时观测：</strong>单原子分辨成像</li>
            <li><strong>量子气体显微镜：</strong>直接测量关联函数</li>
            <li><strong>非平衡动力学：</strong>量子淬火实验</li>
          </ul>

          <h5>实验观测</h5>
          <ul>
            <li><strong>Mott绝缘体：</strong>反铁磁关联</li>
            <li><strong>掺杂动力学：</strong>空穴/粒子传播</li>
            <li><strong>字符串态：</strong>t-J模型物理</li>
            <li><strong>配对关联：</strong>超导前驱现象</li>
          </ul>
        </div>

        <h4>实验技术</h4>
        <div class="experimental-techniques">
          <div class="technique-card">
            <h5>角分辨光电子能谱 (ARPES)</h5>
            <ul>
              <li><strong>费米面：</strong>直接观测电子结构</li>
              <li><strong>能隙：</strong>超导能隙和赝能隙</li>
              <li><strong>准粒子：</strong>谱权重和寿命</li>
            </ul>
          </div>

          <div class="technique-card">
            <h5>中子散射</h5>
            <ul>
              <li><strong>磁激发：</strong>自旋波和磁子</li>
              <li><strong>磁结构：</strong>反铁磁序参量</li>
              <li><strong>动力学：</strong>S(q,ω)测量</li>
            </ul>
          </div>

          <div class="technique-card">
            <h5>扫描隧道显微镜 (STM)</h5>
            <ul>
              <li><strong>局域态密度：</strong>实空间电子结构</li>
              <li><strong>能隙图像：</strong>超导能隙的空间分布</li>
              <li><strong>杂质效应：</strong>局域电子态</li>
            </ul>
          </div>

          <div class="technique-card">
            <h5>输运测量</h5>
            <ul>
              <li><strong>电阻率：</strong>金属-绝缘体转变</li>
              <li><strong>霍尔效应：</strong>载流子类型和浓度</li>
              <li><strong>热电效应：</strong>Seebeck系数</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>应用领域与前沿发展</h3>
      <div class="applications-section">
        <h4>高温超导机理</h4>
        <div class="superconductivity-applications">
          <h5>理论进展</h5>
          <ul>
            <li><strong>RVB理论：</strong>共振价键态</li>
            <li><strong>自旋涨落机理：</strong>磁性介导配对</li>
            <li><strong>条纹相竞争：</strong>电荷序与超导</li>
            <li><strong>量子临界点：</strong>奇异金属行为</li>
          </ul>

          <h5>开放问题</h5>
          <ul>
            <li>赝能隙的微观起源</li>
            <li>d波配对的配对胶水</li>
            <li>奇异金属的理论描述</li>
          </ul>
        </div>

        <h4>量子磁性</h4>
        <div class="quantum-magnetism">
          <h5>阻挫磁性</h5>
          <ul>
            <li><strong>三角晶格：</strong>几何阻挫</li>
            <li><strong>量子自旋液体：</strong>无序基态</li>
            <li><strong>拓扑序：</strong>分数化激发</li>
          </ul>

          <h5>低维磁性</h5>
          <ul>
            <li><strong>一维链：</strong>Luttinger液体</li>
            <li><strong>二维系统：</strong>Kosterlitz-Thouless转变</li>
            <li><strong>准一维：</strong>自旋梯子系统</li>
          </ul>
        </div>

        <h4>强关联拓扑相</h4>
        <div class="topological-phases">
          <h5>拓扑Mott绝缘体</h5>
          <ul>
            <li>相互作用诱导的拓扑相</li>
            <li>分数Chern绝缘体</li>
            <li>拓扑超导体</li>
          </ul>

          <h5>对称性保护拓扑相</h5>
          <ul>
            <li>自旋液体的拓扑分类</li>
            <li>边界态和体边对应</li>
            <li>拓扑纠缠熵</li>
          </ul>
        </div>

        <h4>量子计算应用</h4>
        <div class="quantum-computing-apps">
          <h5>量子模拟</h5>
          <ul>
            <li><strong>数字量子模拟：</strong>量子算法实现</li>
            <li><strong>模拟量子模拟：</strong>冷原子系统</li>
            <li><strong>变分量子本征求解器：</strong>NISQ算法</li>
          </ul>

          <h5>量子优化</h5>
          <ul>
            <li>组合优化问题</li>
            <li>机器学习应用</li>
            <li>量子近似优化算法</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展历史</h3>
      <div class="history-section">
        <div class="timeline">
          <div class="timeline-item">
            <h5>1963年 - Hubbard模型提出</h5>
            <p>John Hubbard提出描述强关联电子的简单模型</p>
          </div>
          <div class="timeline-item">
            <h5>1970年代 - 精确解</h5>
            <p>一维情况的Bethe ansatz精确解</p>
          </div>
          <div class="timeline-item">
            <h5>1980年代 - 高温超导发现</h5>
            <p>铜氧化物超导体的发现推动Hubbard模型研究</p>
          </div>
          <div class="timeline-item">
            <h5>1990年代 - DMFT发展</h5>
            <p>动力学平均场理论的建立</p>
          </div>
          <div class="timeline-item">
            <h5>2000年代 - 数值方法突破</h5>
            <p>DMRG、QMC等方法的重大进展</p>
          </div>
          <div class="timeline-item">
            <h5>2010年代至今 - 冷原子实现</h5>
            <p>光晶格中Hubbard模型的实验实现</p>
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
              <span class="tag">强关联电子</span>
              <span class="tag">Mott绝缘体</span>
              <span class="tag">金属-绝缘体转变</span>
              <span class="tag">反铁磁序</span>
              <span class="tag">电荷转移</span>
            </div>
          </div>
          
          <div class="concept-card">
            <h4>相关模型</h4>
            <div class="concept-tags">
              <span class="tag">t-J模型</span>
              <span class="tag">Anderson模型</span>
              <span class="tag">Kondo模型</span>
              <span class="tag">Holstein模型</span>
              <span class="tag">Falicov-Kimball模型</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>理论方法</h4>
            <div class="concept-tags">
              <span class="tag">DMFT</span>
              <span class="tag">DMRG</span>
              <span class="tag">QMC</span>
              <span class="tag">精确对角化</span>
              <span class="tag">重整化群</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>物理现象</h4>
            <div class="concept-tags">
              <span class="tag">高温超导</span>
              <span class="tag">量子相变</span>
              <span class="tag">非费米液体</span>
              <span class="tag">赝能隙</span>
              <span class="tag">奇异金属</span>
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
          <li><strong>符号问题：</strong>掺杂Hubbard模型的QMC符号问题</li>
          <li><strong>二维系统：</strong>二维强关联系统的精确理论</li>
          <li><strong>非平衡态：</strong>强关联系统的非平衡动力学</li>
          <li><strong>有限温度：</strong>有限温度强关联相变</li>
        </ul>

        <h4>计算方法发展</h4>
        <ul>
          <li><strong>量子计算：</strong>量子模拟器的应用</li>
          <li><strong>机器学习：</strong>AI辅助的多体计算</li>
          <li><strong>张量网络：</strong>高维系统的张量网络方法</li>
          <li><strong>混合方法：</strong>多种方法的结合</li>
        </ul>

        <h4>实验前沿</h4>
        <ul>
          <li><strong>量子气体显微镜：</strong>单原子分辨观测</li>
          <li><strong>时间分辨技术：</strong>超快动力学测量</li>
          <li><strong>人工量子材料：</strong>工程化强关联系统</li>
          <li><strong>拓扑超导：</strong>强关联拓扑相的实现</li>
        </ul>

        <h4>应用前景</h4>
        <ul>
          <li><strong>室温超导：</strong>高温超导机理的理解</li>
          <li><strong>量子材料设计：</strong>理论指导的材料设计</li>
          <li><strong>量子技术：</strong>强关联量子器件</li>
          <li><strong>能源应用：</strong>高效能源转换材料</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'

export default {
  name: 'Chapter1_4_16',
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
  border-left: 4px solid #dc3545;
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.parameter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.param-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.param-card h4 {
  color: #dc3545;
  margin-bottom: 10px;
}

.param-card ul {
  margin-top: 10px;
  padding-left: 20px;
}

.phase-section {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.phase-section h4 {
  color: #dc3545;
  margin-bottom: 15px;
  margin-top: 20px;
}

.phase-section h4:first-child {
  margin-top: 0;
}

.phase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 20px;
}

.phase-item {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.phase-item h5 {
  color: #495057;
  margin-bottom: 8px;
}

.doped-phases {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #dee2e6;
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
  transition: transform 0.2s;
}

.method-card:hover {
  transform: translateY(-2px);
}

.method-card h4 {
  color: #28a745;
  margin-bottom: 8px;
  font-size: 1em;
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
  color: #6f42c1;
  margin-bottom: 8px;
}

.experiment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.exp-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.exp-card h4 {
  color: #17a2b8;
  margin-bottom: 8px;
}

.extension-list {
  display: grid;
  gap: 15px;
  margin-top: 15px;
}

.ext-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.ext-item h4 {
  color: #fd7e14;
  margin-bottom: 8px;
}

.concept-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.tag {
  background: #dc3545;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

h2 {
  color: #2c3e50;
  border-bottom: 3px solid #dc3545;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
</style>