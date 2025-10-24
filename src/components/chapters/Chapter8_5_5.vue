<template>
  <div class="chapter-content">
    <div class="chapter-header">
      <h1 class="chapter-title">8.5.5 一维量子横场Ising模型的共形场论描述</h1>
      <div class="chapter-meta">
        <span class="chapter-tag">共形场论</span>
        <span class="chapter-tag">临界现象</span>
        <span class="chapter-tag">标度不变性</span>
        <span class="reading-time">⏱ 60分钟阅读</span>
      </div>
    </div>

    <div class="introduction">
      <h2>引言</h2>
      <p class="lead-text">
        一维量子横场Ising模型（TFIM）在临界点附近展现出丰富的共形场论（CFT）结构。
        当系统处于量子相变点时，长程关联和标度不变性使得系统可以用共形场论精确描述。
        这种描述不仅提供了对临界行为的深刻理解，还揭示了量子相变的普适性质。
        本节将详细探讨TFIM的共形场论描述，包括中心荷、算符内容、关联函数、
        以及与Ising共形场论的对应关系，为理解一维量子临界系统提供强有力的理论工具。
      </p>
    </div>

    <section class="content-section">
      <h2>共形场论基础</h2>
      
      <div class="cft-fundamentals">
        <div class="conformal-symmetry">
          <h3>共形对称性</h3>
          <div class="symmetry-content">
            <div class="conformal-transformations">
              <h4>共形变换</h4>
              <div class="transformations-content">
                <p>共形变换是保持角度不变的坐标变换。在二维时空中，共形变换由解析函数描述：</p>
                <div class="formula-block">
                  <katex-element expression="z \to f(z), \quad \bar{z} \to \bar{f}(\bar{z})" :inline="false" />
                </div>
                
                <p>其中 $z = x + i\tau$，$\bar{z} = x - i\tau$，$x$ 是空间坐标，$\tau$是虚时间。</p>
                
                <div class="infinitesimal-transformations">
                  <h5>无穷小变换</h5>
                  <p>无穷小共形变换由矢量场生成：</p>
                  <div class="formula-block">
                    <katex-element expression="z \to z + \epsilon(z), \quad \bar{z} \to \bar{z} + \bar{\epsilon}(\bar{z})" :inline="false" />
                  </div>
                  
                  <p>生成元为：</p>
                  <div class="formula-block">
                    <katex-element expression="L_n = -z^{n+1} \frac{\partial}{\partial z}, \quad \bar{L}_n = -\bar{z}^{n+1} \frac{\partial}{\partial \bar{z}}" :inline="false" />
                  </div>
                </div>
                
                <div class="virasoro-algebra">
                  <h5>Virasoro代数</h5>
                  <p>生成元满足Virasoro代数：</p>
                  <div class="formula-block">
                    <katex-element expression="[L_m, L_n] = (m-n) L_{m+n} + \frac{c}{12} m(m^2-1) \delta_{m+n,0}" :inline="false" />
                  </div><p>其中$c$是中心荷（central charge），表征共形场论的普适类。</p>
                </div>
              </div>
            </div>
            
            <div class="primary-fields">
              <h4>主场与后代场</h4>
              <div class="fields-content">
                <div class="primary-definition">
                  <h5>主场定义</h5><p>主场$\phi(z, \bar{z})$在共形变换下的变换规律：</p>
                  <div class="formula-block">
                    <katex-element expression="\phi'(z', \bar{z}') = \left(\frac{df}{dz}\right)^{-h} \left(\frac{d\bar{f}}{d\bar{z}}\right)^{-\bar{h}} \phi(z, \bar{z})" :inline="false" />
                  </div><p>其中$(h, \bar{h})$是共形权重。</p>
                </div>
                
                <div class="scaling-dimension">
                  <h5>标度维数</h5>
                  <p>标度维数和自旋为：</p>
                  <div class="formula-block">
                    <katex-element expression="\Delta = h + \bar{h}, \quad s = h - \bar{h}" :inline="false" />
                  </div>
                  
                  <p>在临界点，算符的标度行为由标度维数决定。</p>
                </div>
                
                <div class="descendant-fields">
                  <h5>后代场</h5>
                  <p>后代场由Virasoro生成元作用在主场上得到：</p>
                  <div class="formula-block">
                    <katex-element expression="L_{-n_1} L_{-n_2} \cdots L_{-n_k} \phi(0)" :inline="false" />
                  </div><p>其中$n_i > 0$。</p>
                </div>
              </div>
            </div>
            
            <div class="operator-product-expansion">
              <h4>算符乘积展开</h4>
              <div class="ope-content">
                <p>两个主场的算符乘积展开（OPE）：</p>
                <div class="formula-block">
                  <katex-element expression="\phi_i(z) \phi_j(0) = \sum_k C_{ij}^k z^{h_k - h_i - h_j} \phi_k(0) + \text{后代项}" :inline="false" />
                </div><p>其中$C_{ij}^k$是结构常数，完全确定共形场论。</p>
                
                <div class="fusion-rules">
                  <h5>融合规则</h5>
                  <p>融合规则描述算符乘积中出现的主场：</p>
                  <div class="formula-block">
                    <katex-element expression="[\phi_i] \times [\phi_j] = \sum_k N_{ij}^k [\phi_k]" :inline="false" />
                  </div><p>其中$N_{ij}^k$是融合系数。</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ising-cft">
          <h3>Ising共形场论</h3>
          <div class="ising-cft-content">
            <div class="central-charge">
              <h4>中心荷</h4>
              <div class="central-charge-content">
                <p>二维Ising模型的中心荷为：</p>
                <div class="formula-block">
                  <katex-element expression="c = \frac{1}{2}" :inline="false" />
                </div><p>这是最小模型$M(3,4)$的中心荷，对应于：</p>
                <div class="formula-block">
                  <katex-element expression="c = 1 - \frac{6(p-q)^2}{pq} = 1 - \frac{6 \cdot 1^2}{3 \cdot 4} = \frac{1}{2}" :inline="false" />
                </div><p>其中$p = 3$，$q = 4$。</p>
              </div>
            </div>
            
            <div class="primary-operators">
              <h4>主算符</h4>
              <div class="operators-content">
                <div class="operator-table">
                  <h5>算符谱</h5>
                  <div class="operators-grid">
                    <div class="operator identity"><h6>恒等算符$I$</h6>
                      <ul><li>共形权重：$(h, \bar{h}) = (0, 0)$</li><li>标度维数：$\Delta = 0$</li>
                        <li>物理意义：真空态</li>
                      </ul>
                    </div>
                    
                    <div class="operator energy"><h6>能量算符$\epsilon$</h6>
                      <ul><li>共形权重：$(h, \bar{h}) = (1/2, 1/2)$</li><li>标度维数：$\Delta = 1$</li>
                        <li>物理意义：能量密度</li>
                      </ul>
                    </div>
                    
                    <div class="operator spin"><h6>自旋算符$\sigma$</h6>
                      <ul><li>共形权重：$(h, \bar{h}) = (1/16, 1/16)$</li><li>标度维数：$\Delta = 1/8$</li>
                        <li>物理意义：序参量</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div class="kac-table">
                  <h5>Kac表</h5><p>最小模型$M(3,4)$的共形权重由Kac公式给出：</p>
                  <div class="formula-block">
                    <katex-element expression="h_{r,s} = \frac{(3r - 4s)^2 - 1}{48}" :inline="false" />
                  </div><p>其中$1 \leq r \leq 2$，$1 \leq s \leq 3$。</p>
                  
                  <div class="kac-values">
                    <h6>具体数值</h6>
                    <ul><li>$h_{1,1} = 0$（恒等算符）</li><li>$h_{2,1} = h_{1,3} = 1/2$（能量算符）</li><li>$h_{1,2} = 1/16$（自旋算符）</li><li>$h_{2,2} = 1/2$（能量算符的后代）</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="correlation-functions">
              <h4>关联函数</h4>
              <div class="correlations-content">
                <div class="two-point-functions">
                  <h5>两点关联函数</h5>
                  <p>主场的两点关联函数：</p>
                  <div class="formula-block">
                    <katex-element expression="\langle \phi_i(z_1, \bar{z}_1) \phi_j(z_2, \bar{z}_2) \rangle = \frac{\delta_{ij}}{|z_1 - z_2|^{2h_i}}" :inline="false" />
                  </div>
                  
                  <div class="specific-correlations">
                    <h6>具体例子</h6>
                    <p>能量算符的关联函数：</p>
                    <div class="formula-block">
                      <katex-element expression="\langle \epsilon(z_1, \bar{z}_1) \epsilon(z_2, \bar{z}_2) \rangle = \frac{1}{|z_1 - z_2|^2}" :inline="false" />
                    </div>
                    
                    <p>自旋算符的关联函数：</p>
                    <div class="formula-block">
                      <katex-element expression="\langle \sigma(z_1, \bar{z}_1) \sigma(z_2, \bar{z}_2) \rangle = \frac{1}{|z_1 - z_2|^{1/4}}" :inline="false" />
                    </div>
                  </div>
                </div>
                
                <div class="four-point-functions">
                  <h5>四点关联函数</h5>
                  <p>四点关联函数由共形不变性和OPE确定：</p>
                  <div class="formula-block">
                    <katex-element expression="\langle \phi_1(z_1) \phi_2(z_2) \phi_3(z_3) \phi_4(z_4) \rangle = \frac{G(x)}{|z_{12}|^{2h_{12}} |z_{34}|^{2h_{34}}}" :inline="false" />
                  </div><p>其中$x$ 是交比，$G(x)$是普适函数。</p>
                </div>
                
                <div class="conformal-blocks">
                  <h5>共形块</h5>
                  <p>四点关联函数可以分解为共形块的线性组合：</p>
                  <div class="formula-block">
                    <katex-element expression="G(x) = \sum_p C_{12}^p C_{34}^p \mathcal{F}_p(x)" :inline="false" />
                  </div><p>其中$\mathcal{F}_p(x)$是共形块。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>TFIM的共形场论描述</h2>
      
      <div class="tfim-cft-description">
        <div class="critical-point-analysis">
          <h3>临界点分析</h3>
          <div class="critical-analysis-content">
            <div class="phase-diagram">
              <h4>相图与临界线</h4>
              <div class="phase-diagram-content">
                <p>TFIM的哈密顿量：</p>
                <div class="formula-block">
                  <katex-element expression="H = -J \sum_i \sigma_i^z \sigma_{i+1}^z - h \sum_i \sigma_i^x" :inline="false" />
                </div>
                
                <div class="critical-condition">
                  <h5>临界条件</h5>
                  <p>量子相变发生在：</p>
                  <div class="formula-block">
                    <katex-element expression="h_c = J" :inline="false" />
                  </div>
                  
                  <p>此时系统处于量子临界点，展现共形不变性。</p>
                </div>
                
                <div class="universality-class">
                  <h5>普适类</h5>
                  <p>TFIM属于二维Ising普适类，具有：</p>
                  <ul><li>中心荷：$c = 1/2$</li><li>临界指数：$\nu = 1$，$\beta = 1/8$，$\gamma = 7/4$</li><li>动力学指数：$z = 1$</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="scaling-behavior">
              <h4>标度行为</h4>
              <div class="scaling-content">
                <div class="correlation-length">
                  <h5>关联长度</h5>
                  <p>远离临界点时的关联长度：</p>
                  <div class="formula-block">
                    <katex-element expression="\xi \sim |h - h_c|^{-\nu}" :inline="false" />
                  </div><p>其中$\nu = 1$是关联长度指数。</p>
                </div>
                
                <div class="energy-gap">
                  <h5>能隙标度</h5>
                  <p>能隙的标度行为：</p>
                  <div class="formula-block">
                    <katex-element expression="\Delta E \sim |h - h_c|^{z\nu}" :inline="false" />
                  </div><p>其中$z = 1$是动力学指数。</p>
                </div>
                
                <div class="finite-size-scaling">
                  <h5>有限尺寸标度</h5>
                  <p>有限系统中的标度形式：</p>
                  <div class="formula-block">
                    <katex-element expression="f(L, h) = L^{-d} \tilde{f}(L^{1/\nu}(h - h_c))" :inline="false" />
                  </div><p>其中$L$ 是系统尺寸，$d = 1$是空间维数。</p>
                </div>
              </div>
            </div>
            
            <div class="operator-correspondence">
              <h4>算符对应</h4>
              <div class="correspondence-content">
                <div class="physical-operators">
                  <h5>物理算符的CFT对应</h5>
                  <div class="operators-mapping">
                    <div class="magnetization-operator">
                      <h6>磁化算符</h6>
                      <p>横向磁化：</p>
                      <div class="formula-block">
                        <katex-element expression="M_x = \sum_i \sigma_i^x \leftrightarrow \sigma \text{ (自旋算符)}" :inline="false" />
                      </div><p>标度维数：$\Delta = 1/8$</p>
                    </div>
                    
                    <div class="energy-operator">
                      <h6>能量算符</h6>
                      <p>能量密度：</p>
                      <div class="formula-block">
                        <katex-element expression="e = -\sigma_i^z \sigma_{i+1}^z \leftrightarrow \epsilon \text{ (能量算符)}" :inline="false" />
                      </div><p>标度维数：$\Delta = 1$</p>
                    </div>
                    
                    <div class="disorder-operator">
                      <h6>无序算符</h6>
                      <p>对偶算符：</p>
                      <div class="formula-block">
                        <katex-element expression="\mu = \prod_{j \leq i} \sigma_j^z \leftrightarrow \mu \text{ (无序算符)}" :inline="false" />
                      </div><p>标度维数：$\Delta = 1/8$</p>
                    </div>
                  </div>
                </div>
                
                <div class="symmetry-operations">
                  <h5>对称性操作</h5>
                  <div class="symmetries">
                    <div class="z2-symmetry"><h6>$\mathbb{Z}_2$对称性</h6>
                      <p>自旋翻转对称性：</p>
                      <div class="formula-block">
                        <katex-element expression="\sigma_i^z \to -\sigma_i^z" :inline="false" />
                      </div><p>在CFT中对应于$\sigma \leftrightarrow \mu$。</p>
                    </div>
                    
                    <div class="duality">
                      <h6>对偶性</h6>
                      <p>Kramers-Wannier对偶性：</p>
                      <div class="formula-block">
                        <katex-element expression="h \leftrightarrow J, \quad J \leftrightarrow h" :inline="false" />
                      </div>
                      
                      <p>临界点是自对偶的。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="jordan-wigner-cft">
          <h3>Jordan-Wigner变换与自由费米子CFT</h3>
          <div class="jw-cft-content">
            <div class="fermionic-representation">
              <h4>费米子表示</h4>
              <div class="fermionic-content">
                <div class="jw-transformation">
                  <h5>Jordan-Wigner变换</h5>
                  <p>将自旋算符映射到费米子算符：</p>
                  <div class="formula-block">
                    <katex-element expression="\sigma_j^+ = c_j^\dagger \prod_{k<j} (-\sigma_k^z)" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="\sigma_j^- = \prod_{k<j} (-\sigma_k^z) c_j" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="\sigma_j^z = 2c_j^\dagger c_j - 1" :inline="false" />
                  </div>
                </div>
                
                <div class="fermionic-hamiltonian">
                  <h5>费米子哈密顿量</h5>
                  <p>变换后的哈密顿量：</p>
                  <div class="formula-block">
                    <katex-element expression="H = \sum_j \left[ -t(c_j^\dagger c_{j+1} + c_{j+1}^\dagger c_j) + \Delta(c_j c_{j+1} + c_{j+1}^\dagger c_j^\dagger) \right]" :inline="false" />
                  </div><p>其中$t = J$，$\Delta = J$。</p>
                </div>
                
                <div class="continuum-limit">
                  <h5>连续极限</h5>
                  <p>在长波长极限下，费米子场为：</p>
                  <div class="formula-block">
                    <katex-element expression="c_j \to \psi_R(x) + \psi_L(x)" :inline="false" />
                  </div><p>其中$\psi_{R/L}$是右/左移费米子场。</p>
                </div>
              </div>
            </div>
            
            <div class="free-fermion-cft">
              <h4>自由费米子CFT</h4>
              <div class="free-fermion-content">
                <div class="action">
                  <h5>作用量</h5>
                  <p>自由费米子的作用量：</p>
                  <div class="formula-block">
                    <katex-element expression="S = \int d^2x \, \bar{\psi} \gamma^\mu \partial_\mu \psi" :inline="false" />
                  </div><p>其中$\gamma^\mu$是Dirac矩阵。</p>
                </div>
                
                <div class="central-charge-fermion">
                  <h5>中心荷</h5>
                  <p>自由费米子的中心荷：</p>
                  <div class="formula-block">
                    <katex-element expression="c = \frac{1}{2}" :inline="false" />
                  </div>
                  
                  <p>与Ising CFT的中心荷一致。</p>
                </div>
                
                <div class="operator-content">
                  <h5>算符内容</h5>
                  <div class="fermion-operators">
                    <div class="primary-fermions">
                      <h6>主费米子算符</h6>
                      <ul><li>$\psi(z)$：$(h, \bar{h}) = (1/2, 0)$</li><li>$\bar{\psi}(\bar{z})$：$(h, \bar{h}) = (0, 1/2)$</li><li>$\psi\bar{\psi}$：$(h, \bar{h}) = (1/2, 1/2)$</li>
                      </ul>
                    </div>
                    
                    <div class="bosonization">
                      <h6>玻色化</h6>
                      <p>费米子算符可以用玻色子表示：</p>
                      <div class="formula-block">
                        <katex-element expression="\psi(z) = e^{i\phi(z)}" :inline="false" />
                      </div><p>其中$\phi$是玻色子场。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="ising-fermion-correspondence">
              <h4>Ising-费米子对应</h4>
              <div class="correspondence-details">
                <div class="operator-mapping">
                  <h5>算符映射</h5>
                  <div class="mapping-table">
                    <div class="mapping-entry">
                      <h6>自旋算符</h6>
                      <div class="formula-block">
                        <katex-element expression="\sigma \leftrightarrow e^{i\phi/2}" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="mapping-entry">
                      <h6>能量算符</h6>
                      <div class="formula-block">
                        <katex-element expression="\epsilon \leftrightarrow \psi\bar{\psi}" :inline="false" />
                      </div>
                    </div>
                    
                    <div class="mapping-entry">
                      <h6>无序算符</h6>
                      <div class="formula-block">
                        <katex-element expression="\mu \leftrightarrow e^{-i\phi/2}" :inline="false" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="correlation-correspondence">
                  <h5>关联函数对应</h5>
                  <p>Ising关联函数可以通过费米子关联函数计算：</p>
                  <div class="formula-block">
                    <katex-element expression="\langle \sigma(z_1) \sigma(z_2) \rangle_{\text{Ising}} = \langle e^{i\phi(z_1)/2} e^{-i\phi(z_2)/2} \rangle_{\text{fermion}}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>临界指数与标度函数</h2>
      
      <div class="critical-exponents">
        <div class="static-exponents">
          <h3>静态临界指数</h3>
          <div class="static-content">
            <div class="exponent-definitions">
              <h4>指数定义</h4>
              <div class="definitions-content">
                <div class="correlation-length-exponent"><h5>关联长度指数$\nu$</h5>
                  <div class="formula-block">
                    <katex-element expression="\xi \sim |h - h_c|^{-\nu}" :inline="false" />
                  </div><p>对于TFIM：$\nu = 1$</p>
                </div>
                
                <div class="magnetization-exponent"><h5>磁化指数$\beta$</h5>
                  <div class="formula-block">
                    <katex-element expression="M \sim |h - h_c|^{\beta}" :inline="false" />
                  </div><p>对于TFIM：$\beta = 1/8$</p>
                </div>
                
                <div class="susceptibility-exponent"><h5>磁化率指数$\gamma$</h5>
                  <div class="formula-block">
                    <katex-element expression="\chi \sim |h - h_c|^{-\gamma}" :inline="false" />
                  </div><p>对于TFIM：$\gamma = 7/4$</p>
                </div>
                
                <div class="specific-heat-exponent"><h5>比热指数$\alpha$</h5>
                  <div class="formula-block">
                    <katex-element expression="C \sim |h - h_c|^{-\alpha}" :inline="false" />
                  </div><p>对于TFIM：$\alpha = 0$（对数发散）</p>
                </div>
              </div>
            </div>
            
            <div class="scaling-relations">
              <h4>标度关系</h4>
              <div class="relations-content">
                <div class="hyperscaling">
                  <h5>超标度关系</h5>
                  <div class="formula-block">
                    <katex-element expression="2\beta + \gamma = d\nu" :inline="false" />
                  </div>
                  <div class="formula-block">
                    <katex-element expression="\alpha + 2\beta + \gamma = 2" :inline="false" />
                  </div><p>其中$d = 1$是空间维数。</p>
                </div>
                
                <div class="verification">
                  <h5>数值验证</h5>
                  <p>对于TFIM：</p>
                  <ul><li>$2\beta + \gamma = 2 \cdot 1/8 + 7/4 = 2 = 1 \cdot 2$✓</li><li>$\alpha + 2\beta + \gamma = 0 + 1/4 + 7/4 = 2$✓</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="anomalous-dimensions">
              <h4>反常维数</h4>
              <div class="anomalous-content">
                <div class="field-anomalous-dimension">
                  <h5>场的反常维数</h5>
                  <p>磁化场的反常维数：</p>
                  <div class="formula-block">
                    <katex-element expression="\eta = 2 - \gamma/\nu = 2 - 7/4 = 1/4" :inline="false" />
                  </div>
                </div>
                
                <div class="operator-dimensions">
                  <h5>算符维数</h5>
                  <div class="dimensions-table">
                    <div class="dimension-entry">
                      <h6>自旋算符</h6><p>$\Delta_\sigma = (d - 2 + \eta)/2 = (1 - 2 + 1/4)/2 = -3/8$</p><p>CFT中：$\Delta_\sigma = 1/8$</p>
                    </div>
                    
                    <div class="dimension-entry">
                      <h6>能量算符</h6><p>$\Delta_\epsilon = d = 1$</p><p>CFT中：$\Delta_\epsilon = 1$</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="dynamic-exponents">
          <h3>动力学临界指数</h3>
          <div class="dynamic-content">
            <div class="dynamical-scaling">
              <h4>动力学标度</h4>
              <div class="scaling-content">
                <div class="time-correlation">
                  <h5>时间关联函数</h5>
                  <p>动力学关联函数的标度形式：</p>
                  <div class="formula-block">
                    <katex-element expression="C(r, t) = r^{-2\Delta} \mathcal{C}(t/r^z)" :inline="false" />
                  </div><p>其中$z$是动力学指数。</p>
                </div>
                
                <div class="relaxation-time">
                  <h5>弛豫时间</h5>
                  <p>弛豫时间的标度：</p>
                  <div class="formula-block">
                    <katex-element expression="\tau \sim \xi^z \sim |h - h_c|^{-z\nu}" :inline="false" />
                  </div><p>对于TFIM：$z = 1$</p>
                </div>
                
                <div class="quantum-dynamics">
                  <h5>量子动力学</h5>
                  <p>量子系统中的动力学标度：</p>
                  <div class="formula-block">
                    <katex-element expression="\omega \sim \xi^{-z} \sim |h - h_c|^{z\nu}" :inline="false" />
                  </div>
                  
                  <p>特征频率与能隙成正比。</p>
                </div>
              </div>
            </div>
            
            <div class="transport-properties">
              <h4>输运性质</h4>
              <div class="transport-content">
                <div class="conductivity">
                  <h5>电导率</h5>
                  <p>量子临界点附近的电导率：</p>
                  <div class="formula-block">
                    <katex-element expression="\sigma(\omega) \sim \omega^{(d-2)/z}" :inline="false" />
                  </div><p>对于一维系统：$\sigma(\omega) \sim \omega^{-1}$</p>
                </div>
                
                <div class="diffusion">
                  <h5>扩散常数</h5>
                  <p>扩散常数的标度：</p>
                  <div class="formula-block">
                    <katex-element expression="D \sim \xi^{2-z} \sim |h - h_c|^{-(2-z)\nu}" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scaling-functions">
          <h3>标度函数</h3>
          <div class="scaling-functions-content">
            <div class="finite-size-functions">
              <h4>有限尺寸标度函数</h4>
              <div class="finite-size-content">
                <div class="energy-scaling">
                  <h5>能量标度函数</h5>
                  <p>有限系统的能量密度：</p>
                  <div class="formula-block">
                    <katex-element expression="e(L, h) = L^{-1} f_e(L^{1/\nu}(h - h_c))" :inline="false" />
                  </div><p>其中$f_e(x)$是普适标度函数。</p>
                </div>
                
                <div class="magnetization-scaling">
                  <h5>磁化标度函数</h5>
                  <p>有限系统的磁化：</p>
                  <div class="formula-block">
                    <katex-element expression="m(L, h) = L^{-\beta/\nu} f_m(L^{1/\nu}(h - h_c))" :inline="false" />
                  </div>
                </div>
                
                <div class="susceptibility-scaling">
                  <h5>磁化率标度函数</h5>
                  <p>有限系统的磁化率：</p>
                  <div class="formula-block">
                    <katex-element expression="\chi(L, h) = L^{\gamma/\nu} f_\chi(L^{1/\nu}(h - h_c))" :inline="false" />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="crossover-functions">
              <h4>交叉标度函数</h4>
              <div class="crossover-content">
                <div class="temperature-crossover">
                  <h5>温度交叉</h5>
                  <p>有限温度下的交叉标度：</p>
                  <div class="formula-block">
                    <katex-element expression="f(h, T) = T^{-\alpha/\nu z} \tilde{f}(h/T^{1/\nu z})" :inline="false" />
                  </div>
                </div>
                
                <div class="disorder-crossover">
                  <h5>无序交叉</h5>
                  <p>随机性引起的交叉行为：</p>
                  <div class="formula-block">
                    <katex-element expression="f(h, \Delta) = \Delta^{-\alpha/\psi} \hat{f}(h/\Delta^{1/\psi})" :inline="false" />
                  </div><p>其中$\psi$是无序相关指数。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>数值方法与实验验证</h2>
      
      <div class="numerical-experimental">
        <div class="numerical-methods">
          <h3>数值方法</h3>
          <div class="numerical-content">
            <div class="exact-diagonalization">
              <h4>精确对角化</h4>
              <div class="ed-content">
                <div class="method-description">
                  <h5>方法原理</h5>
                  <p>对有限尺寸系统的哈密顿量进行精确对角化：</p>
                  <ul>
                    <li>构造哈密顿量矩阵</li>
                    <li>数值对角化</li>
                    <li>计算本征值和本征态</li>
                    <li>有限尺寸标度分析</li>
                  </ul>
                </div>
                
                <div class="system-sizes">
                  <h5>系统尺寸</h5>
                  <p>可处理的系统尺寸：</p>
                  <ul><li>自旋-1/2系统：$N \leq 20$</li><li>利用对称性：$N \leq 24$</li>
                    <li>稀疏矩阵技术</li>
                    <li>并行计算</li>
                  </ul>
                </div>
                
                <div class="observables">
                  <h5>可观测量</h5>
                  <ul>
                    <li>基态能量</li>
                    <li>能隙</li>
                    <li>关联函数</li>
                    <li>纠缠熵</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="quantum-monte-carlo">
              <h4>量子蒙特卡罗</h4>
              <div class="qmc-content">
                <div class="path-integral-mc">
                  <h5>路径积分蒙特卡罗</h5>
                  <p>基于路径积分表示的蒙特卡罗方法：</p>
                  <div class="formula-block">
                    <katex-element expression="Z = \text{Tr} e^{-\beta H} = \int \mathcal{D}[\sigma] e^{-S[\sigma]}" :inline="false" />
                  </div>
                  
                  <div class="trotter-decomposition">
                    <h6>Trotter分解</h6>
                    <p>时间方向的离散化：</p>
                    <div class="formula-block">
                      <katex-element expression="e^{-\beta H} = \lim_{M \to \infty} \left(e^{-\Delta\tau H}\right)^M" :inline="false" />
                    </div><p>其中$\Delta\tau = \beta/M$。</p>
                  </div>
                </div>
                
                <div class="cluster-algorithms">
                  <h5>团簇算法</h5>
                  <ul>
                    <li>Swendsen-Wang算法</li>
                    <li>Wolff算法</li>
                    <li>减少临界慢化</li>
                    <li>提高采样效率</li>
                  </ul>
                </div>
                
                <div class="sign-problem">
                  <h5>符号问题</h5>
                  <p>TFIM没有符号问题，因为：</p>
                  <ul>
                    <li>哈密顿量实对称</li>
                    <li>基态波函数为正</li>
                    <li>蒙特卡罗权重为正</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="dmrg-methods">
              <h4>密度矩阵重整化群</h4>
              <div class="dmrg-content">
                <div class="method-principle">
                  <h5>方法原理</h5>
                  <p>基于矩阵乘积态（MPS）的变分方法：</p>
                  <ul>
                    <li>有效描述一维量子系统</li>
                    <li>控制纠缠熵</li>
                    <li>系统尺寸可达数百个格点</li>
                    <li>高精度基态计算</li>
                  </ul>
                </div>
                
                <div class="entanglement-scaling">
                  <h5>纠缠标度</h5>
                  <p>临界系统的纠缠熵：</p>
                  <div class="formula-block">
                    <katex-element expression="S = \frac{c}{3} \ln L + \text{const}" :inline="false" />
                  </div><p>其中$c = 1/2$ 是中心荷。</p>
                </div>
                
                <div class="dynamic-dmrg">
                  <h5>动力学DMRG</h5>
                  <ul>
                    <li>时间演化</li>
                    <li>动力学关联函数</li>
                    <li>激发态性质</li>
                    <li>非平衡动力学</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="tensor-networks">
              <h4>张量网络方法</h4>
              <div class="tensor-content">
                <div class="mps-mpo">
                  <h5>MPS/MPO表示</h5>
                  <p>矩阵乘积态表示：</p>
                  <div class="formula-block">
                    <katex-element expression="|\psi\rangle = \sum_{\{s_i\}} A^{s_1} A^{s_2} \cdots A^{s_N} |s_1 s_2 \cdots s_N\rangle" :inline="false" />
                  </div>
                </div>
                
                <div class="peps-methods">
                  <h5>PEPS方法</h5>
                  <ul>
                    <li>投影纠缠对态</li>
                    <li>二维系统扩展</li>
                    <li>有限温度计算</li>
                    <li>相变研究</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="experimental-verification">
          <h3>实验验证</h3>
          <div class="experimental-content">
            <div class="cold-atoms">
              <h4>冷原子系统</h4>
              <div class="cold-atoms-content">
                <div class="optical-lattices">
                  <h5>光晶格实现</h5>
                  <p>利用光晶格实现TFIM：</p>
                  <ul>
                    <li>可调节参数</li>
                    <li>高度可控</li>
                    <li>单原子分辨</li>
                    <li>实时观测</li>
                  </ul>
                </div>
                
                <div class="rydberg-atoms">
                  <h5>Rydberg原子</h5>
                  <ul>
                    <li>长程相互作用</li>
                    <li>可编程阵列</li>
                    <li>量子模拟</li>
                    <li>相变观测</li>
                  </ul>
                </div>
                
                <div class="measurements">
                  <h5>测量技术</h5>
                  <ul>
                    <li>原位成像</li>
                    <li>关联函数测量</li>
                    <li>纠缠检测</li>
                    <li>动力学演化</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="trapped-ions">
              <h4>囚禁离子</h4>
              <div class="ions-content">
                <div class="ion-chains">
                  <h5>离子链</h5>
                  <ul>
                    <li>一维几何</li>
                    <li>长相干时间</li>
                    <li>高保真度操作</li>
                    <li>单离子控制</li>
                  </ul>
                </div>
                
                <div class="spin-phonon-coupling">
                  <h5>自旋-声子耦合</h5>
                  <p>实现有效自旋相互作用：</p>
                  <ul>
                    <li>Mølmer-Sørensen门</li>
                    <li>可调节相互作用</li>
                    <li>长程耦合</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="solid-state-systems">
              <h4>固体系统</h4>
              <div class="solid-state-content">
                <div class="quantum-magnets">
                  <h5>量子磁体</h5>
                  <ul>
                    <li>CoNb₂O₆</li>
                    <li>LiHoF₄</li>
                    <li>中子散射</li>
                    <li>磁化测量</li>
                  </ul>
                </div>
                
                <div class="superconducting-qubits">
                  <h5>超导量子比特</h5>
                  <ul>
                    <li>可编程阵列</li>
                    <li>快速操作</li>
                    <li>高保真度</li>
                    <li>量子模拟</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="comparison-theory-experiment">
          <h3>理论与实验对比</h3>
          <div class="comparison-content">
            <div class="critical-exponents-verification">
              <h4>临界指数验证</h4>
              <div class="verification-content">
                <div class="scaling-analysis">
                  <h5>标度分析</h5>
                  <p>实验数据的有限尺寸标度分析：</p>
                  <ul>
                    <li>关联长度测量</li>
                    <li>磁化率标度</li>
                    <li>比热异常</li>
                    <li>临界指数提取</li>
                  </ul>
                </div>
                
                <div class="universality-tests">
                  <h5>普适性检验</h5>
                  <ul>
                    <li>不同材料系统</li>
                    <li>相同临界指数</li>
                    <li>标度函数一致性</li>
                    <li>CFT预言验证</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="correlation-functions-measurement">
              <h4>关联函数测量</h4>
              <div class="correlations-measurement">
                <div class="spatial-correlations">
                  <h5>空间关联</h5>
                  <p>空间关联函数的幂律行为：</p>
                  <div class="formula-block">
                    <katex-element expression="G(r) \sim r^{-2\Delta}" :inline="false" />
                  </div>
                  
                  <p>实验验证标度维数。</p>
                </div>
                
                <div class="temporal-correlations">
                  <h5>时间关联</h5>
                  <p>动力学关联函数：</p>
                  <ul>
                    <li>弛豫时间测量</li>
                    <li>动力学指数</li>
                    <li>频率响应</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>应用与拓展</h2>
      
      <div class="applications-extensions">
        <div class="quantum-simulation">
          <h3>量子模拟</h3>
          <div class="simulation-content">
            <div class="analog-simulation">
              <h4>模拟量子计算</h4>
              <ul>
                <li>量子相变模拟</li>
                <li>多体局域化</li>
                <li>非平衡动力学</li>
                <li>拓扑相变</li>
              </ul>
            </div>
            
            <div class="digital-simulation">
              <h4>数字量子模拟</h4>
              <ul>
                <li>Trotter分解</li>
                <li>变分量子本征求解器</li>
                <li>量子近似优化算法</li>
                <li>量子机器学习</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="extensions">
          <h3>理论拓展</h3>
          <div class="extensions-content">
            <div class="higher-dimensions">
              <h4>高维推广</h4>
              <ul>
                <li>二维TFIM</li>
                <li>三维系统</li>
                <li>维数交叉</li>
                <li>上临界维数</li>
              </ul>
            </div>
            
            <div class="interactions">
              <h4>相互作用效应</h4>
              <ul>
                <li>长程相互作用</li>
                <li>多体相互作用</li>
                <li>竞争相互作用</li>
                <li>无序效应</li>
              </ul>
            </div>
            
            <div class="non-equilibrium">
              <h4>非平衡系统</h4>
              <ul>
                <li>驱动系统</li>
                <li>开放系统</li>
                <li>量子淬火</li>
                <li>动力学相变</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="future-directions">
          <h3>未来方向</h3>
          <div class="future-content">
            <div class="theoretical-developments">
              <h4>理论发展</h4>
              <ul>
                <li>机器学习与CFT</li>
                <li>全息对偶</li>
                <li>量子纠错码</li>
                <li>拓扑量子计算</li>
              </ul>
            </div>
            
            <div class="experimental-advances">
              <h4>实验进展</h4>
              <ul>
                <li>更大系统尺寸</li>
                <li>更高精度测量</li>
                <li>新的量子平台</li>
                <li>实时动力学观测</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-section">
      <h2>小结</h2>
      
      <div class="summary-content">
        <div class="key-achievements">
          <h3>主要成就</h3>
          <ul>
            <li>建立了TFIM与Ising CFT的精确对应关系</li>
            <li>通过Jordan-Wigner变换连接自旋和费米子描述</li>
            <li>计算了临界指数和标度函数</li>
            <li>发展了多种数值方法验证理论预言</li>
            <li>在多个实验平台实现了量子模拟</li>
          </ul>
        </div>
        
        <div class="theoretical-significance">
          <h3>理论意义</h3>
          <ul>
            <li>提供了量子相变的精确理论描述</li>
            <li>展示了共形场论在凝聚态物理中的应用</li>
            <li>建立了一维量子系统的标准范例</li>
            <li>为理解更复杂系统奠定了基础</li>
          </ul>
        </div>
        
        <div class="practical-impact">
          <h3>实际影响</h3>
          <ul>
            <li>指导量子模拟实验设计</li>
            <li>为量子计算提供理论工具</li>
            <li>推动新材料的发现和应用</li>
            <li>促进量子技术的发展</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import KatexElement from '../KatexElement.vue'
</script>

<style scoped>
.chapter-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  line-height: 1.6;
}

.chapter-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #673ab7 0%, #3f51b5 100%);
  border-radius: 15px;
  color: white;
  box-shadow: 0 10px 30px rgba(103, 58, 183, 0.3);
}

.chapter-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.chapter-meta {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.chapter-tag {
  background: rgba(255,255,255,0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
}

.reading-time {
  background: rgba(255,255,255,0.15);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
}

.introduction {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  margin-bottom: 2rem;
  border-left: 5px solid #673ab7;
}

.lead-text {
  font-size: 1.1rem;
  color: #495057;
  text-align: justify;
  margin: 0;
}

.content-section {
  margin-bottom: 3rem;
  background: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.08);
  border: 1px solid #e9ecef;
}

.content-section h2 {
  color: #673ab7;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #673ab7;
}

.content-section h3 {
  color: #3f51b5;
  font-size: 1.5rem;
  margin: 1.5rem 0 1rem 0;
}

.content-section h4 {
  color: #5e35b1;
  font-size: 1.3rem;
  margin: 1rem 0 0.8rem 0;
}

.content-section h5 {
  color: #7e57c2;
  font-size: 1.1rem;
  margin: 0.8rem 0 0.6rem 0;
}

.content-section h6 {
  color: #9575cd;
  font-size: 1rem;
  margin: 0.6rem 0 0.4rem 0;
}

.formula-block {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem 0;
  text-align: center;
  box-shadow: inset 0 2px 4px rgba(0,0,0,0.06);
}

.cft-fundamentals {
  display: grid;
  gap: 2rem;
}

.conformal-symmetry, .ising-cft {
  background: linear-gradient(135deg, #fff3e0 0%, #fce4ec 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #ffcc02;
}

.symmetry-content, .ising-cft-content {
  display: grid;
  gap: 1.5rem;
}

.conformal-transformations, .primary-fields, .operator-product-expansion {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}

.transformations-content, .fields-content, .ope-content {
  display: grid;
  gap: 1rem;
}

.infinitesimal-transformations, .virasoro-algebra {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.primary-definition, .scaling-dimension, .descendant-fields {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.fusion-rules {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.central-charge, .primary-operators, .correlation-functions {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #2196f3;
}

.central-charge-content, .operators-content, .correlations-content {
  display: grid;
  gap: 1rem;
}

.operator-table {
  margin-top: 1rem;
}

.operators-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.operator {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.operator.identity {
  border-left: 4px solid #4caf50;
}

.operator.energy {
  border-left: 4px solid #ff9800;
}

.operator.spin {
  border-left: 4px solid #e91e63;
}

.operator h6 {
  margin-top: 0;
  color: #495057;
}

.operator ul {
  margin: 0.5rem 0 0 0;
  padding-left: 1.2rem;
}

.operator li {
  margin: 0.3rem 0;
  color: #6c757d;
}

.kac-table {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
}

.kac-values {
  margin-top: 1rem;
}

.kac-values ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  list-style: none;
  padding: 0;
}

.kac-values li {
  background: white;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  text-align: center;
}

.two-point-functions, .four-point-functions, .conformal-blocks {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.specific-correlations {
  margin-top: 1rem;
  padding: 0.8rem;
  background: white;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.tfim-cft-description {
  display: grid;
  gap: 2rem;
}

.critical-point-analysis, .jordan-wigner-cft {
  background: linear-gradient(135deg, #e8f5e8 0%, #f3e5f5 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #4caf50;
}

.critical-analysis-content, .jw-cft-content {
  display: grid;
  gap: 1.5rem;
}

.phase-diagram, .scaling-behavior, .operator-correspondence {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
}

.phase-diagram-content, .scaling-content, .correspondence-content {
  display: grid;
  gap: 1rem;
}

.critical-condition, .universality-class {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.correlation-length, .energy-gap, .finite-size-scaling {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.physical-operators, .symmetry-operations {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.operators-mapping {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.magnetization-operator, .energy-operator, .disorder-operator {
  background: white;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.symmetries {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.z2-symmetry, .duality {
  background: white;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.fermionic-representation, .free-fermion-cft, .ising-fermion-correspondence {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
}

.fermionic-content, .free-fermion-content, .correspondence-details {
  display: grid;
  gap: 1rem;
}

.jw-transformation, .fermionic-hamiltonian, .continuum-limit {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.action, .central-charge-fermion, .operator-content {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.fermion-operators {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.primary-fermions, .bosonization {
  background: white;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.operator-mapping, .correlation-correspondence {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.mapping-table {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.mapping-entry {
  background: white;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.critical-exponents {
  display: grid;
  gap: 2rem;
}

.static-exponents, .dynamic-exponents, .scaling-functions {
  background: linear-gradient(135deg, #fff8e1 0%, #f3e5f5 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #ffc107;
}

.static-content, .dynamic-content, .scaling-functions-content {
  display: grid;
  gap: 1.5rem;
}

.exponent-definitions, .scaling-relations, .anomalous-dimensions {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ffc107;
}

.definitions-content, .relations-content, .anomalous-content {
  display: grid;
  gap: 1rem;
}

.correlation-length-exponent, .magnetization-exponent, .susceptibility-exponent, .specific-heat-exponent {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.hyperscaling, .verification {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.field-anomalous-dimension, .operator-dimensions {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.dimensions-table {
  display: grid;
  gap: 1rem;
  margin-top: 1rem;
}

.dimension-entry {
  background: white;
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #dee2e6;
}

.dynamical-scaling, .transport-properties {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ff5722;
}

.time-correlation, .relaxation-time, .quantum-dynamics {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.transport-content {
  display: grid;
  gap: 1rem;
}

.conductivity, .diffusion {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.finite-size-functions, .crossover-functions {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #607d8b;
}

.finite-size-content, .crossover-content {
  display: grid;
  gap: 1rem;
}

.energy-scaling, .magnetization-scaling, .susceptibility-scaling {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.temperature-crossover, .disorder-crossover {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.numerical-experimental {
  display: grid;
  gap: 2rem;
}

.numerical-methods, .experimental-verification, .comparison-theory-experiment {
  background: linear-gradient(135deg, #e1f5fe 0%, #f1f8e9 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #03a9f4;
}

.numerical-content, .experimental-content, .comparison-content {
  display: grid;
  gap: 1.5rem;
}

.exact-diagonalization, .quantum-monte-carlo, .dmrg-methods, .tensor-networks {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #03a9f4;
}

.ed-content, .qmc-content, .dmrg-content, .tensor-content {
  display: grid;
  gap: 1rem;
}

.method-description, .system-sizes, .observables {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.path-integral-mc, .cluster-algorithms, .sign-problem {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.trotter-decomposition {
  background: white;
  padding: 0.6rem;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  margin-top: 0.5rem;
}

.method-principle, .entanglement-scaling, .dynamic-dmrg {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.mps-mpo, .peps-methods {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.cold-atoms, .trapped-ions, .solid-state-systems {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
}

.cold-atoms-content, .ions-content, .solid-state-content {
  display: grid;
  gap: 1rem;
}

.optical-lattices, .rydberg-atoms, .measurements {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.ion-chains, .spin-phonon-coupling {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.quantum-magnets, .superconducting-qubits {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.critical-exponents-verification, .correlation-functions-measurement {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}

.verification-content, .correlations-measurement {
  display: grid;
  gap: 1rem;
}

.scaling-analysis, .universality-tests {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.spatial-correlations, .temporal-correlations {
  background: #f5f5f5;
  padding: 0.8rem;
  border-radius: 6px;
  margin-top: 0.5rem;
}

.applications-extensions {
  display: grid;
  gap: 2rem;
}

.quantum-simulation, .extensions, .future-directions {
  background: linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid #e91e63;
}

.simulation-content, .extensions-content, .future-content {
  display: grid;
  gap: 1.5rem;
}

.analog-simulation, .digital-simulation {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #e91e63;
}

.higher-dimensions, .interactions, .non-equilibrium {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #9c27b0;
}

.theoretical-developments, .experimental-advances {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid #673ab7;
}

.summary-content {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid #dee2e6;
}

.key-achievements, .theoretical-significance, .practical-impact {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #28a745;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.key-achievements h3, .theoretical-significance h3, .practical-impact h3 {
  color: #28a745;
  margin-top: 0;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin: 0.5rem 0;
  color: #495057;
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
    align-items: center;
  }
  
  .operators-grid {
    grid-template-columns: 1fr;
  }
  
  .kac-values ul {
    grid-template-columns: 1fr;
  }
  
  .symmetries {
    grid-template-columns: 1fr;
  }
  
  .dimensions-table {
    grid-template-columns: 1fr;
  }
}
</style>