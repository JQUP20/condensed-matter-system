<template>
  <div class="chapter-content">
    <h2>1.4.18 Kondo晶格 (Kondo Lattice)</h2>
    
    <div class="section">
      <h3>模型概述与历史背景</h3>
      <p>
        Kondo晶格模型是描述传导电子与局域磁矩相互作用的基础理论模型，由Doniach在1977年提出。
        该模型成功解释了重费米子系统中观察到的奇异物理现象，包括巨大的有效质量、增强的比热系数、
        以及复杂的量子相变行为。它是理解稀土和锕系化合物中强关联电子行为的核心理论框架。
      </p>
      <p>
        Kondo晶格模型的重要性在于它统一了两个重要的物理概念：单杂质Kondo效应和RKKY相互作用。
        这种统一揭示了局域磁矩系统中竞争机制的本质，为理解重费米子金属、量子临界现象、
        非常规超导等复杂量子多体现象提供了理论基础。
      </p>
      <p>
        近年来，随着量子临界性理论的发展和实验技术的进步，Kondo晶格模型在理解量子临界点、
        奇异金属行为、拓扑Kondo绝缘体等前沿问题中发挥着越来越重要的作用。
      </p>
    </div>

    <div class="section">
      <h3>哈密顿量与基本理论</h3>
      <p>标准Kondo晶格模型的哈密顿量为：</p>
      <KatexElement 
        formula="H = H_{\text{band}} + H_{\text{Kondo}} + H_{\text{CEF}}"
        display-mode
      />
      <p>其中各项的详细表达式：</p>
      
      <div class="hamiltonian-terms">
        <div class="term-card">
          <h4>能带项 (Band Term)</h4>
          <KatexElement formula="H_{\text{band}} = -t\sum_{\langle i,j \rangle, \sigma} c_{i\sigma}^\dagger c_{j\sigma} - \mu\sum_{i,\sigma} c_{i\sigma}^\dagger c_{i\sigma}" />
          <p>描述传导电子的动能和化学势</p>
          <ul>
            <li>t：最近邻跳跃积分</li>
            <li>μ：化学势</li>
            <li>c†_{iσ}, c_{iσ}：传导电子的产生和湮灭算符</li>
          </ul>
        </div>

        <div class="term-card">
          <h4>Kondo相互作用项</h4>
          <KatexElement formula="H_{\text{Kondo}} = J_K\sum_i \mathbf{S}_i \cdot \mathbf{s}_i = \frac{J_K}{2}\sum_i \left(S_i^+ s_i^- + S_i^- s_i^+ + S_i^z s_i^z\right)" />
          <p>描述局域自旋与传导电子自旋的交换相互作用</p>
          <ul>
            <li>J_K：Kondo耦合强度（J_K > 0为反铁磁耦合）</li>
            <li>S_i：格点i上的局域自旋算符</li>
            <li>s_i = (1/2)∑_{αβ} c†_{iα} σ_{αβ} c_{iβ}：传导电子自旋密度</li>
          </ul>
        </div>

        <div class="term-card">
          <h4>晶体场项 (Crystal Field)</h4>
          <KatexElement formula="H_{\text{CEF}} = \sum_i \Delta_{\text{CEF}} O_i" />
          <p>描述晶体场对局域f电子的影响</p>
          <ul>
            <li>Δ_CEF：晶体场分裂能</li>
            <li>O_i：晶体场算符</li>
          </ul>
        </div>
      </div>

      <h4>模型的物理图像</h4>
      <div class="physics-picture">
        <div class="picture-item">
          <h5>双流体图像</h5>
          <p>Kondo晶格中存在两种电子：</p>
          <ul>
            <li><strong>传导电子：</strong>轻质量，高迁移率，形成费米面</li>
            <li><strong>f电子：</strong>重质量，强关联，局域化程度高</li>
            <li><strong>杂化：</strong>两种电子通过Kondo相互作用杂化</li>
          </ul>
        </div>

        <div class="picture-item">
          <h5>能量标度</h5>
          <p>系统中的重要能量标度：</p>
          <ul>
            <li><strong>费米能：</strong>E_F ~ t（传导电子带宽）</li>
            <li><strong>Kondo温度：</strong>T_K ~ D exp(-1/ρJ_K)</li>
            <li><strong>RKKY能标：</strong>T_RKKY ~ J²_K ρ/E_F</li>
          </ul>
        </div>
      </div>

      <h4>扩展Kondo晶格模型</h4>
      <div class="extended-models">
        <div class="model-variant">
          <h5>周期Anderson模型</h5>
          <KatexElement formula="H = H_{\text{band}} + \sum_i \epsilon_f f_i^\dagger f_i + U\sum_i n_{f,i\uparrow} n_{f,i\downarrow} + V\sum_{i,\sigma}(f_{i\sigma}^\dagger c_{i\sigma} + \text{h.c.})" />
          <p>包含f电子的在位能和库仑排斥，以及c-f杂化</p>
        </div>

        <div class="model-variant">
          <h5>多轨道Kondo晶格</h5>
          <KatexElement formula="H_{\text{Kondo}} = J_K\sum_{i,\alpha\beta} \mathbf{S}_{i\alpha} \cdot \mathbf{s}_{i\beta}" />
          <p>考虑多个f轨道的Kondo相互作用</p>
        </div>

        <div class="model-variant">
          <h5>各向异性Kondo晶格</h5>
          <KatexElement formula="H_{\text{Kondo}} = \sum_i \left(J_\perp(S_i^x s_i^x + S_i^y s_i^y) + J_z S_i^z s_i^z\right)" />
          <p>包含各向异性的Kondo相互作用</p>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>竞争机制与能量标度</h3>
      <div class="competition-section">
        <h4>Doniach相图</h4>
        <div class="doniach-diagram">
          <p>Kondo晶格的基本相图由两个竞争能量标度决定：</p>
          
          <div class="competition-grid">
            <div class="comp-card kondo">
              <h4>Kondo效应</h4>
              <p>局域自旋与传导电子形成单重态</p>
              <KatexElement formula="T_K \sim D \exp\left(-\frac{1}{\rho J_K}\right)" />
              <ul>
                <li>D：传导电子带宽</li>
                <li>ρ：费米面态密度</li>
                <li>形成重费米子液体</li>
                <li>局域磁矩被屏蔽</li>
              </ul>
            </div>
            
            <div class="comp-card rkky">
              <h4>RKKY相互作用</h4>
              <p>局域自旋间的间接交换相互作用</p>
              <KatexElement formula="T_{\text{RKKY}} \sim \frac{J_K^2 \rho}{E_F}" />
              <ul>
                <li>通过传导电子极化传递</li>
                <li>导致磁有序</li>
                <li>局域磁矩保持</li>
                <li>形成反铁磁序</li>
              </ul>
            </div>
          </div>

          <h5>相变判据</h5>
          <div class="phase-criterion">
            <p>相变发生在T_K ~ T_RKKY处：</p>
            <KatexElement formula="J_{K,c} \sim \frac{1}{\rho \ln(E_F/D)}" />
            <ul>
              <li><strong>J_K > J_{K,c}：</strong>重费米子相</li>
              <li><strong>J_K < J_{K,c}：</strong>反铁磁相</li>
              <li><strong>J_K ≈ J_{K,c}：</strong>量子临界点</li>
            </ul>
          </div>
        </div>

        <h4>量子临界性</h4>
        <div class="quantum-criticality">
          <h5>局域量子临界性</h5>
          <p>重费米子量子临界点的特殊性质：</p>
          <ul>
            <li><strong>ω/T标度：</strong>动力学标度z = ∞</li>
            <li><strong>局域临界涨落：</strong>空间维度d_eff = 0</li>
            <li><strong>非费米液体行为：</strong>C/T ~ -ln T</li>
            <li><strong>奇异输运：</strong>ρ ~ T</li>
          </ul>

          <h5>临界指数</h5>
          <div class="critical-exponents">
            <p>量子临界点附近的标度行为：</p>
            <KatexElement formula="\chi(T) \sim T^{-\alpha}, \quad C(T) \sim T^{-\beta}, \quad \rho(T) \sim T^{\gamma}" />
            <ul>
              <li>α ≈ 0.75：磁化率指数</li>
              <li>β ≈ 0：比热指数</li>
              <li>γ ≈ 1：电阻率指数</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>重费米子现象</h3>
      <div class="heavy-fermion-section">
        <h4>基本特征</h4>
        <div class="hf-properties">
          <div class="property-card">
            <h5>巨大有效质量</h5>
            <KatexElement formula="m^* = \frac{\hbar^2}{2\pi^2} \frac{\partial A}{\partial \mu} \sim 100-1000 \, m_e" />
            <p>来源于Kondo共振态的窄化</p>
            <ul>
              <li>de Haas-van Alphen振荡测量</li>
              <li>比热系数γ = π²k²_B N(0)/3</li>
              <li>与局域磁矩浓度成正比</li>
            </ul>
          </div>

          <div class="property-card">
            <h5>大比热系数</h5>
            <KatexElement formula="\gamma = \frac{C}{T} \sim 1-10 \text{ J/mol·K}^2" />
            <p>反映费米面附近的高态密度</p>
            <ul>
              <li>正常金属：γ ~ 1-10 mJ/mol·K²</li>
              <li>重费米子：γ ~ 100-1000 mJ/mol·K²</li>
              <li>Wilson比：R_W = π²k²_B χ/(3μ²_B γ)</li>
            </ul>
          </div>

          <div class="property-card">
            <h5>增强磁化率</h5>
            <KatexElement formula="\chi(T) = \frac{C}{T + T_K}" />
            <p>Curie-Weiss行为的修正</p>
            <ul>
              <li>高温：χ ~ 1/T（局域磁矩）</li>
              <li>低温：χ ~ 常数（Pauli磁化率）</li>
              <li>交叉温度：T*</li>
            </ul>
          </div>

          <div class="property-card">
            <h5>T²电阻率</h5>
            <KatexElement formula="\rho(T) = \rho_0 + AT^2" />
            <p>费米液体的特征行为</p>
            <ul>
              <li>A系数与γ²成正比</li>
              <li>Kadowaki-Woods关系</li>
              <li>量子临界点附近偏离</li>
            </ul>
          </div>
        </div>

        <h4>重费米子形成机制</h4>
        <div class="formation-mechanism">
          <h5>Kondo共振态</h5>
          <p>单杂质Kondo效应的晶格推广：</p>
          <ul>
            <li><strong>Kondo云：</strong>局域自旋周围的屏蔽云</li>
            <li><strong>相干长度：</strong>ξ_K ~ v_F/T_K</li>
            <li><strong>共振宽度：</strong>Γ ~ T_K</li>
            <li><strong>相干温度：</strong>T_coh < T_K</li>
          </ul>

          <h5>相干态形成</h5>
          <p>从非相干到相干的交叉：</p>
          <ul>
            <li><strong>高温（T > T*）：</strong>非相干散射</li>
            <li><strong>低温（T < T*）：</strong>相干重费米子液体</li>
            <li><strong>交叉温度：</strong>T* ~ T_K/N（N为局域磁矩数）</li>
          </ul>
        </div>

        <h4>费米面重构</h4>
        <div class="fermi-surface">
          <h5>大费米面</h5>
          <p>包含f电子的费米面：</p>
          <ul>
            <li><strong>Luttinger定理：</strong>费米面体积包含所有电子</li>
            <li><strong>费米面跳跃：</strong>从小费米面到大费米面</li>
            <li><strong>拓扑相变：</strong>Lifshitz转变</li>
          </ul>

          <h5>量子振荡</h5>
          <p>de Haas-van Alphen和Shubnikov-de Haas效应：</p>
          <ul>
            <li>振荡频率反映费米面面积</li>
            <li>有效质量从振荡幅度提取</li>
            <li>Dingle温度反映散射率</li>
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
            <h5>奴隶玻色子方法</h5>
            <p>将局域自旋用奴隶粒子表示：</p>
            <KatexElement formula="S_i^+ = f_{i\uparrow}^\dagger b_i, \quad S_i^z = \frac{1}{2}(f_{i\uparrow}^\dagger f_{i\uparrow} - f_{i\downarrow}^\dagger f_{i\downarrow})" />
            <ul>
              <li>b_i：奴隶玻色子（空态）</li>
              <li>f_{iσ}：奴隶费米子（占据态）</li>
              <li>约束：b†_i b_i + ∑_σ f†_{iσ} f_{iσ} = 1</li>
            </ul>
          </div>

          <div class="mf-method">
            <h5>大N展开</h5>
            <p>将自旋推广到SU(N)对称性：</p>
            <ul>
              <li>N → ∞极限下的可控近似</li>
              <li>鞍点解给出平均场结果</li>
              <li>1/N修正包含涨落效应</li>
            </ul>
          </div>

          <div class="mf-method">
            <h5>动力学平均场理论 (DMFT)</h5>
            <p>将晶格问题映射到杂质问题：</p>
            <KatexElement formula="G(\omega) = \int \frac{d\epsilon}{\omega - \epsilon - \Sigma(\omega)} \rho(\epsilon)" />
            <ul>
              <li>自洽求解杂质自能</li>
              <li>包含局域量子涨落</li>
              <li>适用于高维系统</li>
            </ul>
          </div>
        </div>

        <h4>重整化群方法</h4>
        <div class="rg-methods">
          <div class="rg-method">
            <h5>数值重整化群 (NRG)</h5>
            <p>Wilson的对数离散化方法：</p>
            <ul>
              <li>指数离散化传导带</li>
              <li>迭代对角化</li>
              <li>计算动力学性质</li>
            </ul>
          </div>

          <div class="rg-method">
            <h5>函数重整化群 (fRG)</h5>
            <p>基于顶点函数的流方程：</p>
            <ul>
              <li>包含所有散射通道</li>
              <li>研究竞争序参量</li>
              <li>非费米液体不动点</li>
            </ul>
          </div>
        </div>

        <h4>量子蒙特卡罗方法</h4>
        <div class="qmc-methods">
          <div class="qmc-method">
            <h5>连续时间QMC</h5>
            <p>基于杂化展开的QMC：</p>
            <ul>
              <li>CT-HYB：杂化展开</li>
              <li>CT-INT：相互作用展开</li>
              <li>解析延拓获得实频谱</li>
            </ul>
          </div>

          <div class="qmc-method">
            <h5>确定性QMC</h5>
            <p>避免符号问题的方法：</p>
            <ul>
              <li>辅助场QMC</li>
              <li>投影QMC</li>
              <li>变分QMC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>实验材料与物性</h3>
      <div class="materials-section">
        <h4>典型重费米子材料</h4>
        <div class="material-grid">
          <div class="mat-card cecu6">
            <h4>CeCu₆</h4>
            <div class="material-details">
              <h5>基本性质</h5>
              <ul>
                <li><strong>晶体结构：</strong>正交晶系</li>
                <li><strong>γ值：</strong>1.6 J/mol·K²</li>
                <li><strong>T_K：</strong>~5 K</li>
                <li><strong>特点：</strong>典型重费米子金属</li>
              </ul>
              <h5>物理现象</h5>
              <ul>
                <li>费米液体行为</li>
                <li>巨大有效质量</li>
                <li>量子振荡</li>
              </ul>
            </div>
          </div>
          
          <div class="mat-card ybrh2si2">
            <h4>YbRh₂Si₂</h4>
            <div class="material-details">
              <h5>基本性质</h5>
              <ul>
                <li><strong>晶体结构：</strong>四方晶系</li>
                <li><strong>γ值：</strong>1.7 J/mol·K²</li>
                <li><strong>T_N：</strong>0.07 K</li>
                <li><strong>特点：</strong>量子临界重费米子</li>
              </ul>
              <h5>量子临界现象</h5>
              <ul>
                <li>非费米液体行为</li>
                <li>ω/T标度</li>
                <li>奇异金属相</li>
              </ul>
            </div>
          </div>
          
          <div class="mat-card cecoin5">
            <h4>CeCoIn₅</h4>
            <div class="material-details">
              <h5>基本性质</h5>
              <ul>
                <li><strong>晶体结构：</strong>四方晶系</li>
                <li><strong>T_c：</strong>2.3 K</li>
                <li><strong>γ值：</strong>0.3 J/mol·K²</li>
                <li><strong>特点：</strong>重费米子超导体</li>
              </ul>
              <h5>超导性质</h5>
              <ul>
                <li>d波配对</li>
                <li>强磁场下的FFLO态</li>
                <li>量子临界涨落</li>
              </ul>
            </div>
          </div>
          
          <div class="mat-card uru2si2">
            <h4>URu₂Si₂</h4>
            <div class="material-details">
              <h5>基本性质</h5>
              <ul>
                <li><strong>晶体结构：</strong>四方晶系</li>
                <li><strong>T_HO：</strong>17.5 K</li>
                <li><strong>T_c：</strong>1.5 K</li>
                <li><strong>特点：</strong>隐藏序重费米子</li>
              </ul>
              <h5>隐藏序</h5>
              <ul>
                <li>未知序参量</li>
                <li>小磁矩</li>
                <li>能隙形成</li>
              </ul>
            </div>
          </div>
        </div>

        <h4>Ce基重费米子系统</h4>
        <div class="ce-systems">
          <div class="ce-family">
            <h5>CeM₂Si₂系列 (M = Cu, Ru, Rh, Pd, Ag, Au)</h5>
            <ul>
              <li><strong>CeCu₂Si₂：</strong>首个重费米子超导体</li>
              <li><strong>CeRu₂Si₂：</strong>磁有序重费米子</li>
              <li><strong>CeRh₂Si₂：</strong>反铁磁重费米子</li>
            </ul>
          </div>

          <div class="ce-family">
            <h5>CeMIn₅系列 (M = Co, Rh, Ir)</h5>
            <ul>
              <li><strong>CeCoIn₅：</strong>准二维超导体</li>
              <li><strong>CeRhIn₅：</strong>反铁磁金属</li>
              <li><strong>CeIrIn₅：</strong>反铁磁金属</li>
            </ul>
          </div>

          <div class="ce-family">
            <h5>其他Ce化合物</h5>
            <ul>
              <li><strong>CeAl₃：</strong>反铁磁重费米子</li>
              <li><strong>CePd₃：</strong>四极矩序</li>
              <li><strong>CeB₆：</strong>四极矩玻璃</li>
            </ul>
          </div>
        </div>

        <h4>Yb基重费米子系统</h4>
        <div class="yb-systems">
          <div class="yb-properties">
            <h5>Yb³⁺离子特点</h5>
            <ul>
              <li><strong>电子构型：</strong>4f¹³（空穴图像）</li>
              <li><strong>基态：</strong>²F₇/₂</li>
              <li><strong>价态涨落：</strong>Yb²⁺ ↔ Yb³⁺</li>
            </ul>
          </div>

          <div class="yb-materials">
            <h5>典型Yb化合物</h5>
            <ul>
              <li><strong>YbRh₂Si₂：</strong>量子临界点</li>
              <li><strong>YbCu₂Si₂：</strong>价态涨落</li>
              <li><strong>YbAl₃：</strong>重费米子行为</li>
              <li><strong>β-YbAlB₄：</strong>量子临界性</li>
            </ul>
          </div>
        </div>

        <h4>U基重费米子系统</h4>
        <div class="u-systems">
          <div class="u-properties">
            <h5>U离子特点</h5>
            <ul>
              <li><strong>5f电子：</strong>更加离域</li>
              <li><strong>强自旋轨道耦合：</strong>j-j耦合</li>
              <li><strong>多极矩：</strong>复杂序参量</li>
            </ul>
          </div>

          <div class="u-materials">
            <h5>典型U化合物</h5>
            <ul>
              <li><strong>UBe₁₃：</strong>重费米子超导体</li>
              <li><strong>UPt₃：</strong>多相超导</li>
              <li><strong>URu₂Si₂：</strong>隐藏序</li>
              <li><strong>UPd₂Al₃：</strong>反铁磁超导体</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>实验技术与测量方法</h3>
      <div class="experimental-techniques">
        <h4>热力学测量</h4>
        <div class="thermodynamic-methods">
          <div class="method-card">
            <h5>比热测量</h5>
            <ul>
              <li><strong>绝热法：</strong>高精度低温比热</li>
              <li><strong>弛豫法：</strong>快速温度扫描</li>
              <li><strong>AC量热法：</strong>相变研究</li>
            </ul>
            <p>提取信息：γ系数、熵、相变</p>
          </div>

          <div class="method-card">
            <h5>磁化率测量</h5>
            <ul>
              <li><strong>SQUID：</strong>高灵敏度</li>
              <li><strong>VSM：</strong>变温磁化率</li>
              <li><strong>交流磁化率：</strong>动力学信息</li>
            </ul>
            <p>提取信息：有效磁矩、Weiss温度、磁有序</p>
          </div>
        </div>

        <h4>输运测量</h4>
        <div class="transport-methods">
          <div class="method-card">
            <h5>电阻率测量</h5>
            <ul>
              <li><strong>四端法：</strong>消除接触电阻</li>
              <li><strong>变温测量：</strong>T依赖性</li>
              <li><strong>磁阻：</strong>磁场效应</li>
            </ul>
            <p>费米液体行为：ρ = ρ₀ + AT²</p>
          </div>

          <div class="method-card">
            <h5>霍尔效应</h5>
            <ul>
              <li><strong>载流子密度：</strong>n = 1/(eR_H)</li>
              <li><strong>载流子类型：</strong>电子/空穴</li>
              <li><strong>多带效应：</strong>复杂费米面</li>
            </ul>
          </div>

          <div class="method-card">
            <h5>热电效应</h5>
            <ul>
              <li><strong>Seebeck系数：</strong>S = ΔV/ΔT</li>
              <li><strong>Nernst效应：</strong>横向热电效应</li>
              <li><strong>热导率：</strong>κ = κ_e + κ_ph</li>
            </ul>
          </div>
        </div>

        <h4>量子振荡</h4>
        <div class="quantum-oscillations">
          <div class="method-card">
            <h5>de Haas-van Alphen效应</h5>
            <p>磁化率的量子振荡：</p>
            <KatexElement formula="M = M_0 + \sum_i A_i \cos\left(\frac{2\pi F_i}{B} + \phi_i\right)" />
            <ul>
              <li>F_i：振荡频率（费米面面积）</li>
              <li>A_i：振荡幅度（有效质量）</li>
              <li>φ_i：相位（Berry相位）</li>
            </ul>
          </div>

          <div class="method-card">
            <h5>Shubnikov-de Haas效应</h5>
            <p>电阻率的量子振荡：</p>
            <ul>
              <li>与dHvA类似的信息</li>
              <li>散射时间的影响</li>
              <li>Dingle温度</li>
            </ul>
          </div>
        </div>

        <h4>谱学方法</h4>
        <div class="spectroscopy-methods">
          <div class="method-card">
            <h5>光电子谱 (ARPES)</h5>
            <ul>
              <li><strong>费米面映射：</strong>k空间分辨</li>
              <li><strong>能带结构：</strong>E(k)关系</li>
              <li><strong>自能：</strong>准粒子寿命</li>
            </ul>
          </div>

          <div class="method-card">
            <h5>中子散射</h5>
            <ul>
              <li><strong>磁结构：</strong>S(q,ω)</li>
              <li><strong>晶格动力学：</strong>声子谱</li>
              <li><strong>临界涨落：</strong>量子临界性</li>
            </ul>
          </div>

          <div class="method-card">
            <h5>核磁共振 (NMR)</h5>
            <ul>
              <li><strong>Knight位移：</strong>局域磁化率</li>
              <li><strong>弛豫时间：</strong>自旋涨落</li>
              <li><strong>四极矩：</strong>电场梯度</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>应用领域与前沿发展</h3>
      <div class="applications-section">
        <h4>量子临界现象</h4>
        <div class="quantum-critical">
          <h5>局域量子临界性</h5>
          <ul>
            <li><strong>理论框架：</strong>超越Landau理论</li>
            <li><strong>实验验证：</strong>YbRh₂Si₂等材料</li>
            <li><strong>普适性：</strong>不同材料的共同行为</li>
          </ul>

          <h5>奇异金属相</h5>
          <ul>
            <li><strong>线性电阻率：</strong>ρ ∝ T</li>
            <li><strong>对数比热：</strong>C/T ∝ -ln T</li>
            <li><strong>ω/T标度：</strong>频率-温度标度</li>
          </ul>
        </div>

        <h4>非常规超导</h4>
        <div class="unconventional-sc">
          <h5>重费米子超导体</h5>
          <ul>
            <li><strong>配对机制：</strong>磁涨落介导</li>
            <li><strong>对称性：</strong>d波、p波配对</li>
            <li><strong>竞争序：</strong>磁性与超导</li>
          </ul>

          <h5>拓扑超导</h5>
          <ul>
            <li><strong>手性p波：</strong>UPt₃</li>
            <li><strong>Majorana费米子：</strong>边界态</li>
            <li><strong>量子计算：</strong>拓扑保护</li>
          </ul>
        </div>

        <h4>拓扑Kondo绝缘体</h4>
        <div class="topological-ki">
          <h5>理论预言</h5>
          <ul>
            <li><strong>能带反转：</strong>强自旋轨道耦合</li>
            <li><strong>表面态：</strong>拓扑保护</li>
            <li><strong>候选材料：</strong>SmB₆, YbB₁₂</li>
          </ul>

          <h5>实验挑战</h5>
          <ul>
            <li><strong>体态绝缘：</strong>残余载流子</li>
            <li><strong>表面态：</strong>与体态分离</li>
            <li><strong>拓扑不变量：</strong>直接测量</li>
          </ul>
        </div>

        <h4>量子自旋液体</h4>
        <div class="quantum-spin-liquid">
          <h5>阻挫Kondo晶格</h5>
          <ul>
            <li><strong>几何阻挫：</strong>三角、kagome晶格</li>
            <li><strong>竞争相互作用：</strong>Kondo vs RKKY</li>
            <li><strong>量子涨落：</strong>抑制磁有序</li>
          </ul>

          <h5>候选材料</h5>
          <ul>
            <li><strong>YbMgGaO₄：</strong>三角晶格</li>
            <li><strong>Ce₃Pd₂₀Si₆：</strong>笼状结构</li>
            <li><strong>CeCoGe₃：</strong>阻挫磁性</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="section">
      <h3>理论发展历史</h3>
      <div class="history-section">
        <div class="timeline">
          <div class="timeline-item">
            <h5>1964年 - Kondo效应发现</h5>
            <p>Jun Kondo解释稀磁合金电阻率的对数发散</p>
          </div>
          <div class="timeline-item">
            <h5>1975年 - Wilson重整化群</h5>
            <p>Kenneth Wilson用NRG解决Kondo问题</p>
          </div>
          <div class="timeline-item">
            <h5>1977年 - Doniach相图</h5>
            <p>Sebastian Doniach提出Kondo晶格理论</p>
          </div>
          <div class="timeline-item">
            <h5>1979年 - CeAl₃发现</h5>
            <p>首个重费米子材料的发现</p>
          </div>
          <div class="timeline-item">
            <h5>1984年 - 重费米子超导</h5>
            <p>CeCu₂Si₂中发现重费米子超导</p>
          </div>
          <div class="timeline-item">
            <h5>1990年代 - 奴隶玻色子理论</h5>
            <p>平均场理论的发展</p>
          </div>
          <div class="timeline-item">
            <h5>2000年代 - 量子临界性</h5>
            <p>局域量子临界理论的建立</p>
          </div>
          <div class="timeline-item">
            <h5>2010年代至今 - 拓扑相</h5>
            <p>拓扑Kondo绝缘体和拓扑超导</p>
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
              <span class="tag">Kondo效应</span>
              <span class="tag">RKKY相互作用</span>
              <span class="tag">重费米子</span>
              <span class="tag">量子临界性</span>
              <span class="tag">费米液体</span>
            </div>
          </div>
          
          <div class="concept-card">
            <h4>相关模型</h4>
            <div class="concept-tags">
              <span class="tag">Anderson模型</span>
              <span class="tag">Hubbard模型</span>
              <span class="tag">t-J模型</span>
              <span class="tag">Coqblin-Schrieffer模型</span>
              <span class="tag">SU(N)Kondo模型</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>实验技术</h4>
            <div class="concept-tags">
              <span class="tag">量子振荡</span>
              <span class="tag">中子散射</span>
              <span class="tag">ARPES</span>
              <span class="tag">NMR</span>
              <span class="tag">比热测量</span>
            </div>
          </div>

          <div class="concept-card">
            <h4>物理现象</h4>
            <div class="concept-tags">
              <span class="tag">非费米液体</span>
              <span class="tag">隐藏序</span>
              <span class="tag">价态涨落</span>
              <span class="tag">拓扑序</span>
              <span class="tag">量子自旋液体</span>
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
          <li><strong>量子临界性：</strong>局域vs扩展临界性的统一理论</li>
          <li><strong>非费米液体：</strong>奇异金属相的微观机制</li>
          <li><strong>多体纠缠：</strong>重费米子中的量子纠缠</li>
          <li><strong>机器学习：</strong>AI辅助的相图探索</li>
        </ul>

        <h4>实验前沿</h4>
        <ul>
          <li><strong>极端条件：</strong>超高压、超强磁场</li>
          <li><strong>时间分辨：</strong>超快光谱学</li>
          <li><strong>空间分辨：</strong>扫描探针技术</li>
          <li><strong>单原子操控：</strong>人工Kondo晶格</li>
        </ul>

        <h4>新材料探索</h4>
        <ul>
          <li><strong>f电子超晶格：</strong>人工设计的重费米子</li>
          <li><strong>二维材料：</strong>范德华重费米子</li>
          <li><strong>拓扑材料：</strong>拓扑Kondo绝缘体</li>
          <li><strong>量子点阵列：</strong>可调Kondo晶格</li>
        </ul>

        <h4>技术应用</h4>
        <ul>
          <li><strong>量子计算：</strong>拓扑量子比特</li>
          <li><strong>量子传感：</strong>重费米子传感器</li>
          <li><strong>热电材料：</strong>高效热电转换</li>
          <li><strong>磁制冷：</strong>绝热去磁制冷</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KatexElement from '@/components/KatexElement.vue'

export default {
  name: 'Chapter1_4_18',
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
  border-left: 4px solid #fd7e14;
}

.section h3 {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 1.3em;
}

.competition-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 15px;
}

.comp-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.comp-card.kondo {
  border-left: 4px solid #28a745;
}

.comp-card.rkky {
  border-left: 4px solid #dc3545;
}

.comp-card h4 {
  margin-bottom: 15px;
}

.kondo h4 {
  color: #28a745;
}

.rkky h4 {
  color: #dc3545;
}

.phase-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.phase-item {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.phase-item.critical {
  border: 2px solid #ffc107;
  background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
}

.phase-item h4 {
  color: #fd7e14;
  margin-bottom: 10px;
}

.heavy-fermion {
  background: white;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
}

.heavy-fermion h4 {
  color: #6f42c1;
  margin-bottom: 15px;
}

.heavy-fermion ul {
  padding-left: 20px;
}

.material-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 15px;
}

.mat-card {
  background: white;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #e9ecef;
  text-align: center;
}

.mat-card h4 {
  color: #17a2b8;
  margin-bottom: 8px;
}

.concept-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.tag {
  background: #fd7e14;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
}

h2 {
  color: #2c3e50;
  border-bottom: 3px solid #fd7e14;
  padding-bottom: 10px;
  margin-bottom: 30px;
}
</style>